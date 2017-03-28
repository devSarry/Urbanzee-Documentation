<template>
    <div class="card aqi-box">
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

<style scoped>

    .aqi-box {

        background-color: rgb(255, 248, 0);
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
        margin-top: -0.3em;
        /*padding-bottom: 85px;*/
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
        props: ['aqi', 'location', 'timestamp']
    }
</script>