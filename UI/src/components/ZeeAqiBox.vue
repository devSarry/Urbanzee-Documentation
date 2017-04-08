<template>
    <div    :class="featureColorClass(aqi)"
            class="card aqi-box">
        <header>
            Air Quality Index
        </header>
        <div class="aqi-box-index">
            {{ aqi }}
        </div>
        <footer class="aqi-box-footer">
            <a>
                <span class="icon"><i class="fa fa-map-marker"></i></span>
                {{ location }}
            </a>
            <p>Last Updated {{ timestamp }}</p>
        </footer>
    </div>
</template>

<style lang="scss">
    /*AQI Scale Colors*/
    $good: #2fb400;
    $moderate: rgb(255, 207, 0);
    $unhealthy1: rgb(255, 78, 0);
    $unhealthy2: rgb(247, 4, 0);
    $unhealthy3: rgb(84, 19, 136);
    $hazardous: #472a3c;


    .aqi-box {

        background-color: $moderate;
    }

    .aqi-box header {
        padding-left: 0.2em;
        padding-top: 0.2em;
        font-size: 3.5em;
        font-weight: 700;
        line-height: 1.0;
        word-spacing: 5px;
        color: rgb(253, 253, 253);
    }

    .aqi-box-index {
        font-size: 11.222em;
        font-weight: 700;
        text-align: center;
        color: rgb(255, 255, 255);

    }

    .aqi-box footer {
        font-size: 2em;
        /*padding-bottom: 0.5em;*/
        padding-left: 0.5em;
        min-height: 57px;
        color: rgb(255, 255, 255);
        background: rgba(54, 54, 54, 0.74);
        width: 100%;
    }

    .aqi-box-footer .icon {
        vertical-align: 0;
    }

    .icon .fa {
        font-size: inherit;
    }

</style>

<script>
    export default {
        props: ['aqi', 'location', 'timestamp'],
        methods: {
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