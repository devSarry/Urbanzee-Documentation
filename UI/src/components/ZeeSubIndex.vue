<template>
    <div class="sub-index-card card">

        <header class="sub-indices-header columns">
            <div class="column">
                Dust
            </div>
            <div class="column">
                Gas
            </div>


        </header>
        <div class="sub-indices">
            <div :class="[ featureColorClass(aqSubIndex.value), { active: aqSubIndex.isActive}]"
                 class="feature button"
                 @click="toggleActive('dust', index)"
                 v-for="(aqSubIndex, index) in data.features.dust"
            >
                <div class="feature-value"
                     v-html="aqSubIndex.value"></div>
                <div class="feature-wrapper">
                    <div class="feature-info" v-html="aqSubIndex.name"></div>
                </div>
            </div>

            <div class="feature feature-divider"></div>

            <div :class="[ featureColorClass(aqSubIndex.value), { active: aqSubIndex.isActive }]"
                 class="feature button"
                 @click="toggleActive('gas', index)"
                 v-for="(aqSubIndex, index) in data.features.gas"

            >
                <div class="feature-value"
                     v-html="aqSubIndex.value"></div>
                <div class="feature-wrapper">
                    <div class="feature-info" v-html="aqSubIndex.name"></div>
                </div>
            </div>
        </div>
        <transition name="fade"
                    v-if="aqSubIndex.isActive"
                    v-for="(aqSubIndex, index) in data.features.dust"
        >
            <zee-sub-index-history :data="aqSubIndex.details" :name="aqSubIndex.long_name"></zee-sub-index-history>
        </transition>

        <transition name="fade"
                    v-if="aqSubIndex.isActive"
                    v-for="(aqSubIndex, index) in data.features.gas"
        >
            <zee-sub-index-history :data="aqSubIndex.details" :name="aqSubIndex.long_name"></zee-sub-index-history>
        </transition>

    </div>
</template>

<style lang="scss">
    /*AQI Scale Colors*/
    $good: #2fb400;
    $moderate: rgb(255, 207, 0);
    $unhealthy1: rgba(255, 78, 0, 1);
    $unhealthy2: rgba(247, 4, 0, 1);;
    $unhealthy3: rgba(84, 19, 136, 1);
    $hazardous: #472a3c;

    .fade-enter-active {
        transition: all .5s ease;
    }

    .fade-leave-active {
        transition: all .2s ease;
        height: auto;
        padding: 10px;
        opacity: 0;
    }

    .fade-enter {
        height: 0;
        padding: 0 10px;
        opacity: 0;
    }

    .sub-index-card {
        margin-top: 25px;
    }

    .sub-indices-header {
        display: inline;
        font-size: 2em;
    }

    .sub-indices {
        padding: 5px;
        margin: 0;
        margin-top: 10px;
        list-style: none;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-flow: row;
        justify-content: space-around;

        line-height: 30px;
    }
    .sub-indices-header .column:first-child{
        margin-left: 10px;
    }
    .sub-indices-header .column:last-child{
        margin-right: 130px;
    }

    .feature {
        margin-right: 1px;
        margin-left: 1px;
        margin-top: 10px;
        color: white;
        text-align: center;
        flex: 1 0 auto;
        height: auto;
        border-radius: 0px;
        padding: 0;
        align-items: center;
        flex-direction: column;
    }

    .feature:before {
        content: '';
        float: left;
        padding:10% 0;
    }
    .feature-wrapper{
        background: rgba(54, 54, 54, 0.74);
        width: 100%;
        align-self: flex-end;
        height: 35px;
    }
    .feature-info {
        width: 65px;
        font-size: 2.5vw;
    }

    /*.feature span{*/
    /*min-width: 85px;*/
    /*}*/

    .feature-divider {
        all: initial;
        width: 8px;
    }

    .feature-value{
        font-size: 2.5em;
        padding-bottom: 10px;
    }

    .feature.button:hover{
        color: #00d1b2;
    }

    .good-aqi {
        background: $good;

    }

    .good-aqi.active {
        transition: all .2s ease;
        background: darken($good, 10%);
    }

    .moderate-aqi {
        background: $moderate;
    }

    .moderate-aqi.active {
        transition: all .2s ease;
        background: darken($moderate, 10%);
    }

    .unhealthy-aqi {
        background: $unhealthy1;
    }
    .unhealthy-aqi.active {
        transition: all .2s ease;
        background: darken($unhealthy1, 10%);
    }

    .more-unhealthy-aqi {
        background: $unhealthy2;
    }
    .more-unhealthy-aqi.active {
        transition: all .2s ease;
        background: darken($unhealthy2, 10%);
    }

    .very-unhealthy-aqi {
        background: $unhealthy3;
    }
    .very-unhealthy-aqi.active {
        transition: all .2s ease;
        background: darken($unhealthy3, 10%);
    }

    .hazardous-aqi {
        background: $hazardous;
    }
    .hazardous-aqi.active {
        transition: all .2s ease;
        background: darken($hazardous, 10%);
    }




</style>

<script>
    import ZeeIndexHistory from './ZeeIndexHistory.vue'
    import ZeeSubIndexHistory from './ZeeSubIndexHistory.vue'

    export default {
        props: ['data'],
        components: {
            ZeeIndexHistory,
            ZeeSubIndexHistory
        },
        data(){
            return {
                features: this.data,
                toggle: false
            }
        },
        computed: {},
        methods: {
            toggleActive(subIndexGroup, index){
                let state = !this.features.features[subIndexGroup][index].isActive;
                this.allInactive();

                this.features.features[subIndexGroup][index].isActive = state;
            },
            allInactive(){
                this.features.features.dust.forEach(function (value) {
                    value.isActive = false;
                });
                this.features.features.gas.forEach(function (value) {
                    value.isActive = false;
                });
            },
            featureColorClass(value){
                if (value > 0 && value < 50) {
                    return 'good-aqi'
                }
                if (value >= 50 && value < 100) {
                    return 'moderate-aqi'
                }
                if (value >= 100 && value < 150) {
                    return 'unhealthy-aqi'
                }
                if (value >= 150 && value < 200) {
                    return 'more-unhealthy-aqi'
                }
                if (value >= 200 && value < 300) {
                    return 'very-unhealthy-aqi'
                }

                return 'hazardous-aqi'
            }
        }
    }
</script>
