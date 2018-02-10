<template>
    <a id="goTop" class="clickButton glass-Bg box-show" :class="unshow" @click="goToTop()">
        <i class="MyIF double-arrow-up"></i>
    </a>
</template>

<script>
    export default {
        name: "float_block",
        data() {
            return {
                unshow: '',
            }
        },

        mounted() {
            this.changePosition();

            //为了保证兼容性，这里取两个值，哪个有值取哪一个　　
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            //scrollTop就是触发滚轮事件时滚轮的高度
            if (scrollTop > 388) {
                this.unshow = '';
            }
            else {
                this.unshow = 'unshow';
            }



            let thisObj = this;

            window.onscroll = function() {
                //为了保证兼容性，这里取两个值，哪个有值取哪一个　　
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                //scrollTop就是触发滚轮事件时滚轮的高度
                if (scrollTop > 388) {
                    thisObj.unshow = '';
                }
                else {
                    thisObj.unshow = 'unshow';
                }
            }

        },

        computed: {
            modalType () {
                return this.$store.state.modalType;
            },
            getScreenWidth() {
                return this.$store.state.screenWidth;
            }
        },

        watch: {
            getScreenWidth(val) {
                this.changePosition();
            },
        },



        methods: {
            /**
             * 点击回到顶部
             */
            goToTop() {
                let timer = null, isTop = true; //定时器、判断是否到达顶部

                //设置一个定时器
                timer = setInterval(function () {
                    //获取滚动条的滚动高度
                    let osTop = document.documentElement.scrollTop || document.body.scrollTop;
                    //用于设置速度差，产生缓动的效果
                    let speed = Math.floor(-osTop / 6);
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
                    isTop = true;  //用于阻止滚动事件清除定时器
                    if (osTop == 0) {
                        clearInterval(timer);
                    }
                }, 30);
            },
            /**
             * 依据窗口宽度[vuex]改变浮动游标的位置
             */
            changePosition() {
                document.getElementById('goTop').style.right = ((this.$store.state.screenWidth - document.getElementById('bodyLayout').clientWidth) / 2 - 58) + 'px';
            }
        }
    }

</script>

<style scoped>
    #goTop {
        width: 38px;
        height: 38px;
        bottom: 128px;
        position: fixed;
        text-align: center;
        line-height: 38px;
        cursor: pointer;
        opacity:0.68;
        transition: all .58s;
    }
    #goTop:hover {
        opacity:1;
    }
    #goTop > i {
        font-size: 28px;
        color: #0febe5;
    }
    #goTop:hover > i {
        text-shadow: 0 0 5px;
    }
    #goTop.unshow {
        opacity:0;
    }


</style>