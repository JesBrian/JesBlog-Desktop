<template>
    <!-- "警告"拟态框组件 -->
    <div class="s1c-Bg box-show" style="width:688px; top:50%; left:50%; position:fixed; transform:translate(-50%, -50%); color:#CCC; border-radius:6px; border:0.2px solid #00CDFF; box-shadow:0 0.5em 1em rgba(0, 0, 0, 0.6), 0 0 0.3em #00CDFF, inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2); background:#252525; z-index:999;">

        <!-- 拟态框头部 -->
        <div class="no-select glass-Bg" style="width:83%; height:52px; margin:28px auto; line-height:55px; text-align:center; box-shadow:inset 0 1px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1.8px #272727;">
            <img src="../../../../../src/assets/images/common/icon/warning.png" style="width:38px; height:38px; margin:0 8px -8px 0;"/>
            <span style="display:inline-block; font-size:27px; letter-spacing:3px; font-weight:700;">操作提示</span>
        </div>

        <!-- 关闭拟态框组件 -->
        <close-button/>

        <!-- "警告"拟态框内容 -->
        <div style="padding:0 28px 18px; line-height:1.2em; font-size:22px; text-indent:1.38em; word-break:break-all;">
            确定要{{ warningText }} ？
        </div>

        <div style="width:100%; height:38px; margin:8px 0 23px; text-align:right;">
            <span class="superButton-Out" @click="clickSure" style="width:108px; height:38px;">
                <a class="superButton-In MyIF makesure" style="width:96px; height:26px; top:49%; font-size:21px; line-height:26px;"> 确认</a>
            </span>
            <span class="superButton-Out" @click="closeModal" style="width:108px; height:38px; margin:0 88px 0 18px;">
                <a class="superButton-In MyIF cancel" style="width:96px; height:26px; top:49%; font-size:21px; line-height:26px;"> 取消</a>
            </span>
        </div>

    </div>
</template>

<script>
    import closeButton from '../closeButton.vue';//关闭拟态框按钮组件


    export default {
        name: "warning",
        components: {
            closeButton,
        },

        props: [
            'warningText'
        ],

        data() {
            return {
            }
        },
        created() {
        },
        methods: {
            closeModal() {
                this.$store.commit('changeModal');
            },

            clickSure() {
                this.$parent.makeSure();
                this.closeModal();
            }
        }
    }
</script>

<style scoped>

</style>