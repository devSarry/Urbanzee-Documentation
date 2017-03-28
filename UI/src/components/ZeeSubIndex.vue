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
        <div class="sub-indices tabs">
            <div class="feature button"
                 @click="toggle = !toggle"
                 v-for="aqSubIndex in data.features.dust"
            >
                <div class="feature-info">{{aqSubIndex.name}}</div>
            </div>
            <div class="feature feature-divider"></div>
            <div class="feature button"
                 @click="toggle = !toggle"
                 v-for="aqSubIndex in data.features.gas"
            >
                <div class="feature-info">{{ aqSubIndex.name }}</div>
            </div>

        </div>
        <transition name="fade">
            <article class="media msg" v-if="toggle">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="http://bulma.io/images/placeholders/128x128.png">
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>John Smith</strong>
                            <small>@johnsmith</small>
                            <small>31m</small>
                            <br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                            pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                            facilisis.
                        </p>
                    </div>
                    <nav class="level is-mobile">
                        <div class="level-left">
                            <a class="level-item">
                                <span class="icon is-small"><i class="fa fa-reply"></i></span>
                            </a>
                            <a class="level-item">
                                <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                            </a>
                            <a class="level-item">
                                <span class="icon is-small"><i class="fa fa-heart"></i></span>
                            </a>
                        </div>
                    </nav>
                </div>
                <div class="media-right">
                    <button class="delete"></button>
                </div>
            </article>

        </transition>
    </div>
</template>

<style lang="scss">
    .msg {
        padding: 10px;
        background-color: #eee;
    }

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

    .feature {
        background: tomato;
        margin-right: 1px;
        margin-left: 1px;
        margin-top: 10px;
        color: white;
        text-align: center;
        flex: 1 0 auto;
        height: auto;
    }

    .feature:before {
        content: '';
        float: left;
        padding-top: 100%;
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


</style>

<script>
    export default {
        props: ['data'],
        mounted(){
            let features = this.data;
            features = {
                "features": {
                    "gas": [
                        {
                            "name": "pm10",
                            "is_active": false,
                            "value": 21,
                            "details": {"This might be an ajax call"}
                        }
                    ]
                }
            }
        },
        data(){
            return {
                features: {},
                toggle: false
            }
        }
    }
</script>
