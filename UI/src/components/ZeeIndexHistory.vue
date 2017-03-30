<template>
    <div class="sub-index-card card">
        <header class="card-header">
            <p class="card-header-title">
                {{ data.length }} {{ interval }}
            </p>
        </header>
        <div class="sub-indices">
            <div :class="featureColorClass(aqi.value)"
                 class="feature button"
                 v-for="aqi in data">
                <div class="feature-info">{{ formatDateTime(aqi.date) }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .feature {
        flex-direction: row;
        font-size: 1vw;
        white-space: normal;
    }

    .feature-info{
        align-self: center;
    }



    .feature:before {
        content: '';
        float: left;
        padding:45% 0;
    }

    .sub-indices {
        padding-top: 1em;
        padding-bottom: 1em;
    }

    .sub-index-card {
        margin-top: 10px;
    }

</style>

<script>
    export default{
        props: ['interval', 'data'],
        methods: {
            formatDateTime(dateTime){
                try {
                    if (this.interval === 'hours') {
                        return moment(dateTime).format("hh:mm");
                    }
                    if (this.interval === 'days') {
                        return moment(dateTime).format("ddd DD.MM");
                    }
                    if (this.interval === 'weeks') {
                        return moment(dateTime).format("DD.MM");
                    }
                    if (this.interval === 'years') {
                        return moment(dateTime).format("YYYY");
                    }
                    throw ('interval not set correctly, try "hours", "days", "weeks" or "years"');
                } catch (e) {
                    console.log(e);
                }
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