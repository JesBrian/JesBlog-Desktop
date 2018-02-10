<template>
    <!-- "选择文章分类"拟态框组件 -->
    <div class="s1c-Bg box-show" style="width:688px; top:50%; left:50%; position:fixed; transform:translate(-50%, -50%); color:#CCC; border-radius:6px; border:0.2px solid #00CDFF; box-shadow:0 0.5em 1em rgba(0, 0, 0, 0.6), 0 0 0.3em #00CDFF, inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2); background:#252525; z-index:999;">

        <!-- 拟态框头部 -->
        <div class="no-select glass-Bg" style="width:83%; height:52px; margin:28px auto; line-height:55px; text-align:center; box-shadow:inset 0 1px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1.8px #272727;">
            <img src="../../../../../src/assets/images/common/icon/cube.png" style="width:38px; height:38px; margin:0 8px -8px 0;"/>
            <span style="display:inline-block; font-size:27px; letter-spacing:3px; font-weight:700;">选择分类</span>
        </div>

        <!-- 关闭拟态框组件 -->
        <close-button/>

        <!-- "选择文章分类"拟态框内容 -->
        <div style="">
            <div id="categoryModalSearchForm" class="glass-Bg box-show" style="width:508px; height:50px; margin:0 auto; padding:0; position:relative;">
                <input type="text" placeholder=" 输入想要搜索的分类 [ 支持模糊搜索 ] " v-model="categoryKey" style="width:423px; height:30px; top:11px; left:10px; padding:0 10px; position:absolute; border:none!important; box-shadow:none; background:#444; color:#DDD; font-size:18px;">
                <span class="superButton-Out" @click="searchCategory" style="width:40px; height:39px; margin:5.5px; float:right;">
                    <a class="superButton-In MyIF search" style="width:30px; height:29px; line-height:29px; font-size:23px;"></a>
                </span>
            </div>

            <div style="width:90%; height:188px; margin:26px auto; padding:0 0 0 5px; overflow-y:scroll;">
                <div class="glass-Bg box-show" v-for="item in categoryData" @click="closeModal" style="width:105px; height:30px; margin:0 9px 16px 0; border-radius:2px; display:inline-block; cursor:pointer; color:#2EE7FF; line-height:31px; font-size:17.5px; text-align:center; letter-spacing:1.5px;">
                    {{ item.name }}
                </div>

                <p style="font-size:20px; text-align:center; line-height:168px;">{{ categoryTips }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import closeButton from '../closeButton.vue';//关闭拟态框按钮组件


    export default {
        name: "category",
        components: {
            closeButton,
        },
        data() {
            return {
                categoryKey: '',
                categoryData: [],

                categoryTips: '',
            }
        },
        created() {
            let thisObj = this;

            this.axios.post('category/simple-list').then(function (response) {
                thisObj.categoryData = response.data.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        methods: {
            closeModal() {
                this.$store.commit('changeModal');
            },

            /**
             * 搜索文章分类
             */
            searchCategory() {
                let data = {
                    key: this.categoryKey,
                }, thisObj = this;

                this.axios.post('category/simple-list', data).then(function (response) {
                    if (response.data.status === '01') {
                        thisObj.categoryData = response.data.data;
                        thisObj.categoryTips = '';
                    } else {
                        thisObj.categoryData = [];
                        thisObj.categoryTips = response.data.msg;
                    }
                }).catch(function (error) {
                    console.log(error);
                })
            }
        }
    }
</script>

<style scoped>

</style>