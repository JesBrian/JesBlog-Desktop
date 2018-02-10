<template>
    <!-- PC端前台搜索页 -->
    <div style="position:relative;">

        <!-- 导航栏组件 -->
        <navigation-bar/>


        <div id="mainBody" style="padding:88px 0 108px;"><!-- 真TM迷 -->

            <!-- 页面内容布局 -->
            <div id="bodyLayout" class="glass-Bg box-show" style="width:1080px; min-height:608px; margin:0 auto; padding:12px 0; border-radius:8px; position:relative; background:#111;">

                <!-- 切换搜索内容 -->
                <div style="width:18%; margin:0 18px 0 68px; float:left; display:inline-block;">
                    <div class="glass-Bg box-show" style="width:98%; margin:10px 23px 10px 0; padding:8px 8px; float:right; background:#181818;">
                        <div style="width:88%; margin:12px auto; color:#DDD; font-weight:700; font-size:18px; text-shadow:0.5px 0.5px 0.2px #000;">切换搜索类型：</div>

                        <ul style="text-align:center;">
                            <li>
                                <input id="searchTitle" class="superInput" type="radio" v-model="searchType" value="searchArticleList">
                                <label for="searchTitle"><i class="MyIF cubes-1" style="font-weight:500; font-size:24px;"></i> 搜索标题</label>
                            </li>
                            <li>
                                <input id="searchAuthor" class="superInput" type="radio" v-model="searchType" value="searchAuthorList">
                                <label for="searchAuthor"><i class="MyIF mysteryman" style="font-weight:500; font-size:24px;"></i> 搜索作家</label>
                            </li>
                            <li>
                                <input id="searchCategory" class="superInput" type="radio" v-model="searchType" value="searchCategoryList">
                                <label for="searchCategory"><i class="MyIF theme" style="font-weight:500; font-size:24px;"></i> 搜索分类</label>
                            </li>
                            <li>
                                <input id="searchTag" class="superInput" type="radio" v-model="searchType" value="searchTagList">
                                <label for="searchTag"><i class="MyIF kinds" style="font-weight:500; font-size:24px;"></i> 搜索标签</label>
                            </li>
                        </ul>
                    </div>
                </div>


                <!---->
                <div id="searchContent" style="width:68%; min-height:138px; display:inline-block;">

                    <!-- 搜索框 -->
                    <div id="searchForm" class="glass-Bg box-show" style="width:508px; height:50px; left:28px; margin:20px auto 38px; padding:0; position:relative;">
                        <input type="text" placeholder=" 请输入文章标题 [ 支持模糊搜索 ] " v-model="searchKey" style="width:423px; height:30px; top:11px; left:10px; padding:0 10px; position:absolute; border:none!important; box-shadow:none; background:#444; color:#DDD; font-size:18px;">
                        <span class="superButton-Out" @click="changeContent" style="width:40px; height:39px; margin:5.5px; float:right;">
                            <a class="superButton-In MyIF search" style="width:30px; height:29px; line-height:29px; font-size:23px;"></a>
                        </span>
                    </div>


                    <component :is="searchType" :articleList="contentItem" :userList="contentItem" :categoryList="contentItem"/>


                    <!-- 分页组件 -->
                    <pagination/>

                </div>

            </div>

        </div>

        <!-- 浮动块[回到顶部]组件 -->
        <float-block/>

        <!-- 页脚组件 -->
        <page-footer/>

        <!-- 拟态框组件 -->
        <modal/>

    </div>
</template>

<script>
    /*-*-* 引入功能组件[BEGIN] *-*-*/
    import navigationBar from "../../components/home/base/extends/navigation_menu.vue";//导航菜单组件
    import searchBox from "../../components/home/base/extends/search_box.vue";//搜索框组件
    import searchArticleList from "../../components/home/article/article_list.vue";//搜索文章标题列表组件
    import searchAuthorList from "../../components/home/author/author_list_search.vue";//搜索作者列表组件
    import searchCategoryList from "../../components/home/category/category_list.vue";//搜索分类列表组件
    import searchTagList from "../../components/home/article/article_list.vue";//搜索分类列表组件
    import pagination from "../../components/home/base/extends/pagination.vue";//分页组件
    import floatBlock from "../../components/home/base/extends/float_block.vue";//浮动块[回到顶部]组件
    import pageFooter from "../../components/home/base/extends/page_footer.vue";//页脚组件
    import modal from "../../components/common/modal/modalTotal.vue";//拟态框组件
    /*-*-* 引入功能组件[END] *-*-*/


    export default {
        name: "search",
        components: {
            navigationBar,
            searchBox,
            searchArticleList,
            searchAuthorList,
            searchCategoryList,
            searchTagList,
            pagination,
            floatBlock,
            pageFooter,
            modal
        },
        data() {
            return {
                searchType: 'searchArticleList',
                searchKey: '',
                contentItem: [],
            }
        },

        watch: {
            'searchType': function () {
                this.changeContent();
            },
        },

        created() {
            this.changeContent();
        },

        methods: {

            /**
             * 改变内容
             */
            changeContent() {
                let data = {
                    'key': this.searchKey,
                }, thisObj = this, url = '';

                if (this.searchType === 'searchArticleList') {
                    url = 'search/title';
                } else if (this.searchType === 'searchAuthorList') {
                    url = 'search/author';
                } else if (this.searchType === 'searchCategoryList') {
                    url = 'search/category';
                } else if (this.searchType === 'searchTagList') {
                    url = 'search/tag';
                }

                this.axios.post(url, data).then(function (response) {
                    // console.log(response);
                    if (response.data.status === '01') {
                        thisObj.contentItem = response.data.data;
                        console.log(response.data.data);
                    } else {
                        thisObj.contentItem = [];
                    }

                }).catch(function (error) {
                    console.log(error);
                });
            }
        }

    }

</script>

<style scoped>

</style>
