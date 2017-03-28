<template>
    <div class="sub-index-card card">
        <header class="card-header">
            <p class="card-header-title">
                {{ data.length }} {{ interval }}
            </p>
            <a class="card-header-icon">
              <span class="icon">
                <i class="fa fa-angle-down"></i>
              </span>
            </a>
        </header>
        <div class="sub-indices">
            <div class="feature button" v-for="aqi in data">
                <div class="feature-info">{{ formatDateTime(aqi.date) }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .feature {
        font-size: 1vw;
        white-space: normal;
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
            }
        }
    }
</script>