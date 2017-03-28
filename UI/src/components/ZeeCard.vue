<template>
    <div class="container">
        <div class="card aqi-card">
            <zee-aqi-box :aqi="aqi" :location="location" :timestamp="timestamp"></zee-aqi-box>
            <zee-sub-index :data="aq_subindex"></zee-sub-index>
            <zee-index-history interval="days" :data="aqi_collection"></zee-index-history>
        </div>
    </div>
</template>

<style>
    .aqi-card {
        padding: 1em;
    }


</style>

<script>
    import ZeeAqiBox from './ZeeAqiBox.vue'
    import ZeeSubIndex from './ZeeSubIndex.vue'
    import ZeeIndexHistory from './ZeeIndexHistory.vue'

    export default {
        name: 'air-quality-card',
        components: {
            ZeeAqiBox,
            ZeeSubIndex,
            ZeeIndexHistory
        },

        data() {
            return {
                location: 'Turku Centrum',
                timestamp: '04:45',
                aqi: '2.3',
                aqi_collection: require('../aqi_collection.json').collection,
                aq_subindex: require('../aq_subindex.json')
            }
        }
    }
</script>