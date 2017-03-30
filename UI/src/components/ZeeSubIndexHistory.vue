<template>
    <article class="msg">
        <zee-index-history interval="hours" :data="data.previous_readings"></zee-index-history>
        <collapse title="about" class="accordion is-fullwidth">
            <collapse-item :title="'About ' + name" class="content">
                <p>
                    {{ data.description }}
                </p>
            </collapse-item>
        </collapse>
    </article>
</template>
<style scoped lang="scss">

</style>
<script>
    import ZeeIndexHistory from './ZeeIndexHistory.vue'
    import {Collapse, Item as CollapseItem} from 'vue-bulma-collapse'


    export default{
        props: ['data', 'name'],

        components: {
            ZeeIndexHistory,
            Collapse,
            CollapseItem
        }
    }
</script>
