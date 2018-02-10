<template>
    <!-- PC端前台主页 -->
    <div style="position:relative;">

        <!-- 导航栏组件 -->
        <navigation-bar/>


        <div id="mainBody" style="padding:88px 0 108px;"><!-- 真TM迷 -->

            <div class="glass-Bg box-show" style="width:888px; height:348px; margin:0 auto; border-radius:8px; clear:both;">
                <!-- 轮播图组件 -->
                <slide-box style="width:72%; height:88.4%; display:inline-block;"/>

                <!-- 推荐文章分类 -->
                <div style="width:20%; height:92%; margin:23px 23px 0 0; display:inline-block; float:right;">
                    <ul style="height:100%;">
                        <li class="s1c-Bg box-show" style="width:100%; height:9%; margin:10.6% auto;">
                            <router-link to="/author/3" style="width:96%; height:100%; display:inline-block; position:relative; color:#BBB;">
                                <img src="/src/assets/images/tag-1.png" style="width:43px; height:43px; top:-8px; left:-28px; position:absolute;"/>
                                <p class="text-hidden" style="width:100%; font-size:16px; letter-spacing:1px; text-indent:1.1em; line-height:1.68em;">sfdvgchjkdfbgjhjk</p>
                            </router-link>
                        </li>
                        <li class="s1c-Bg box-show" style="width:100%; height:9%; margin:10.6% auto;">
                            <router-link to="/author/3" style="width:96%; height:100%; display:inline-block; position:relative; color:#BBB;">
                                <img src="/src/assets/images/tag-2.png" style="width:43px; height:43px; top:-8px; left:-28px; position:absolute;"/>
                                <p class="text-hidden" style="width:100%; font-size:16px; letter-spacing:1px; text-indent:1.1em; line-height:1.68em;">参考了吗 马上出来看吗系栏目下吗1mkm</p>
                            </router-link>
                        </li>
                        <li class="s1c-Bg box-show" style="width:100%; height:9%; margin:10.6% auto;">
                            <router-link to="/author/3" style="width:96%; height:100%; display:inline-block; position:relative; color:#BBB;">
                                <img src="/src/assets/images/tag-3.png" style="width:43px; height:43px; top:-8px; left:-28px; position:absolute;"/>
                                <p class="text-hidden" style="width:100%; font-size:16px; letter-spacing:1px; text-indent:1.1em; line-height:1.68em;">参考了吗 马上出来看吗系栏目下吗1mkm</p>
                            </router-link>
                        </li>
                        <li class="s1c-Bg box-show" style="width:100%; height:9%; margin:10.6% auto;">
                            <router-link to="/author/3" style="width:96%; height:100%; display:inline-block; position:relative; color:#BBB;">
                                <img src="/src/assets/images/tag-1.png" style="width:43px; height:43px; top:-8px; left:-28px; position:absolute;"/>
                                <p class="text-hidden" style="width:100%; font-size:16px; letter-spacing:1px; text-indent:1.1em; line-height:1.68em;">参考ubhjnkk看吗系栏目下吗1mkm</p>
                            </router-link>
                        </li>
                        <li class="s1c-Bg box-show" style="width:100%; height:9%; margin:10.6% auto;">
                            <router-link to="/author/3" style="width:96%; height:100%; display:inline-block; position:relative; color:#BBB;">
                                <img src="/src/assets/images/tag-2.png" style="width:43px; height:43px; top:-8px; left:-28px; position:absolute;"/>
                                <p class="text-hidden" style="width:100%; font-size:16px; letter-spacing:1px; text-indent:1.1em; line-height:1.68em;">需要发u562参数表</p>
                            </router-link>
                        </li>
                        <li class="s1c-Bg box-show" style="width:100%; height:9%; margin:10.6% auto;">
                            <router-link to="/author/3" style="width:96%; height:100%; display:inline-block; position:relative; color:#BBB;">
                                <img src="/src/assets/images/tag-3.png" style="width:43px; height:43px; top:-8px; left:-28px; position:absolute;"/>
                                <p class="text-hidden" style="width:100%; font-size:16px; letter-spacing:1px; text-indent:1.1em; line-height:1.68em;">参vhg考46cdugyb51参cdv加454csjkm</p>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- 搜索框组件 -->
            <search-box/>


            <!-- 主页内容 -->
            <div id="bodyLayout" class="glass-Bg box-show" style="width:1080px; min-height:1288px; margin:0 auto; padding:12px 0; border-radius:8px; position:relative; background:#111;">

                <div style="width:68%; display:inline-block;">
                    <!-- 文章列表组件 -->
                    <article-list :articleList="articleList"/>
                </div>

                <div style="width:28%; display:inline-block; float:right;">
                    <!-- 推荐作者列表组件 -->
                    <author-list/>

                    <!-- 留言板组件 -->
                    <bulletin-board :bulletinList="bulletinList"/>
                </div>
            </div>


            <!--<a v-link="{path:'/index',exact: true}">aa</a>-->

        </div>


        <!-- 浮动块[回到顶部]组件 -->
        <float-block/>

        <!-- 页脚组件 -->
        <page-footer/>

        <!-- 拟态框组件 -->
        <modal/>

        <!-- 操作结果提示弹出框组件 -->
        <component :is="alertTips"/>

    </div>
</template>

<script>
    /*-*-* 引入功能组件[BEGIN] *-*-*/
    import navigationBar from "../../components/home/base/extends/navigation_menu.vue";//导航菜单组件
    import slideBox from "../../components/home/base/extends/slide_box.vue";//轮播图组件
    import searchBox from "../../components/home/base/extends/search_box.vue";//搜索框组件
    import articleList from "../../components/home/article/article_list.vue";//文章列表组件
    import authorList from "../../components/home/author/author_list_recom.vue";//推荐作者列表组件
    import bulletinBoard from "../../components/home/base/extends/bulletin_board.vue";//留言板组件
    import floatBlock from "../../components/home/base/extends/float_block.vue";//浮动块[回到顶部]组件
    import pageFooter from "../../components/home/base/extends/page_footer.vue";//页脚组件
    import alertTips from "../../components/common/alertTips/alertTips.vue";//操作结果提示弹出框组件
    import modal from "../../components/common/modal/modalTotal.vue";//拟态框组件
    /*-*-* 引入功能组件[END] *-*-*/

    export default {
        name: "index",
        components: {
            navigationBar,
            slideBox,
            searchBox,
            articleList,
            authorList,
            bulletinBoard,
            floatBlock,
            pageFooter,
            alertTips,
            modal,
        },
        data() {
            return {
                articleList: [],
                authorList: [],
                bulletinList: [],
            }
        },

        created() {
            let data = {
                userid: this.$store.state.userInfo.id,
            }, thisObj = this;

            this.axios.post('home/index', data).then(function (response) {
                if (response.data.status === '01') {
                    thisObj.articleList = response.data.data.articleList;
                    thisObj.bulletinList = response.data.data.bulletinList;
                }
            }).catch(function (error) {
                console.log(error);
            });
        },

        computed: {
            alertTips() {
                return this.$store.state.alertTips;
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
