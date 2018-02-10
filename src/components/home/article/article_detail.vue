<template>
    <!-- 文章详情组件 -->
    <div style="margin-bottom:68px;">

        <!-- 作者 & 文章相关内容 -->
        <div style="width:88%; margin:18px auto;">

            <!-- 文章基本信息 -->
            <h2 style="padding:0 18px; text-indent:2em; font-size:25px; color:#DED;">{{ articleData.title }} &nbsp;</h2>
            <div style="width:88%; margin:18px auto;">

                <!-- 头像组件 -->
                <avatar class="avatar-author" :userid="articleData.userid"/>

                <div style="height:56px; display:inline-block;">

                    <!-- 用户名组件 -->
                    <username class="username-author" :userid="articleData.userid" :username="articleData.username"/>

                    <!-- "关注/取消关注"组件 -->
                    <follow v-if="articleData.userid !== this.$store.state.userInfo.id" :hasFollow="articleData.hasFollow" :type="followType" :typeId="followTypeId" style="margin:-3px 0 0 28px; position:relative; float:left;"/>

                    <p style="clear:both;">
                        <span style="margin:8px; font-size:13.5px; line-height:2em; color:#999;">最后编辑时间：{{ articleData.update_time }}</span>
                        <span style="margin:8px; font-size:13.5px; line-height:2em; color:#999;">字数：11525</span>
                    </p>
                </div>

                <!-- 点赞文章 & 计数 -->
                <div style="float:right;">
                    <span class="MyIF non-collection" style="text-align:left; line-height:1em; color:lightgreen; font-size:20px;"> {{ articleData.likes }} </span>
                    <!-- 点赞 -->
                    <span v-if="!haveLike" class="likeButton superButton-Out" @click="changeLike(1)">
                        <span class="superButton-In">
                            <i class="MyIF add-collection"></i> 点赞文章
                        </span>
                    </span>
                    <!-- 取消点赞 -->
                    <span v-else class="likeButton superButton-Out" @click="changeLike(0)">
                        <span class="superButton-In">
                            <i class="MyIF remove-collection"></i> 取消点赞
                        </span>
                    </span>
                </div>

            </div>

            <!-- 文章标签分类 -->
            <div style="width:88%; margin:0 auto; font-size:14.5px; line-height:30px; text-align:right;">
                <router-link class="s1c-button s1c-Bg box-show tagList hover-underline" to="/category">
                    <img src="../../../assets/images/tag-1.png" style="width:42px; height:42px; top:-5.5px; left:-28px; position:absolute;">
                    <p class="text-hidden">XXX产生变化</p>
                </router-link>
                <router-link class="s1c-button s1c-Bg box-show tagList hover-underline" to="/category">
                    <img src="../../../assets/images/tag-2.png" style="width:42px; height:42px; top:-5.5px; left:-28px; position:absolute;">
                    <p class="text-hidden">ggdch产生变化空间fdghjkfghjkl</p>
                </router-link>
                <router-link class="s1c-button s1c-Bg box-show tagList hover-underline" to="/category">
                    <img src="../../../assets/images/tag-3.png" style="width:42px; height:42px; top:-5.5px; left:-28px; position:absolute;">
                    <p class="text-hidden">XXX产生变化</p>
                </router-link>
            </div>


            <!-- 文章详细内容 -->
            <descript :descript="articleData.content"/>

        </div>

        <!-- 文章评论组件 -->
        <article-comment/>


        <!-- 分页组件 -->
        <pagination/>

    </div>

</template>

<script>
    import avatar from "../author/avatar.vue";//头像组件
    import username from "../author/username.vue";//用户名组件
    import follow from "../base/extends/follow.vue";//"关注/取消关注"组件
    import descript from "../base/extends/descript.vue";//文章评论组件
    import articleComment from "../comment/article_comment.vue";//文章评论组件
    import pagination from "../base/extends/pagination.vue";//分页组件

    export default {
        name: "article_detail",
        components: {
            avatar,
            username,
            follow,
            descript,
            articleComment,
            pagination
        },

        props: [
            'articleId'
        ],

        data() {
            return {
                articleData: {},
                haveLike: false,

                followType: 'user',
                followTypeId: '0',
            }
        },

        created() {
            let data = {
                id: this.articleId,
                userid: this.$store.state.userInfo.id,
            }, thisObj = this;

            this.axios.post('article/show-article-info', data).then(function (response) {
                if (response.data.status === '01') {
                    thisObj.articleData = response.data.data;
                    thisObj.haveLike = !thisObj.articleData.hasLike;
                    thisObj.followTypeId = thisObj.articleData.userid;
                } else {

                }
            }).catch(function (error) {
                console.log(error);
            });
        },

        methods: {
            changeLike(status) {

                if (this.$store.state.userInfo.id === '0') {
                    return false;
                }

                let data = {
                    articleid: this.articleId,
                    userid: this.$store.state.userInfo.id,
                    status: status,
                }, thisObj = this;

                this.axios.post('attention/like-article', data).then(function (response) {
                    if (response.data.status === '01') {
                        if (status) {
                            thisObj.haveLike = true;
                            thisObj.articleData.likes++;
                        } else {
                            thisObj.haveLike = false;
                            thisObj.articleData.likes--;
                        }
                    } else {

                    }
                }).catch(function (error) {
                    console.log(error);
                });

            }
        }
    }
</script>

<style scoped>
     .avatar-author {
        width:42px; height:42px; margin:8px 18px; float:left;
    }

     .username-author {
         float:left; color:#55eeb4; line-height:1.8em;
     }


    .tagList {
        min-width:68px; max-width:128px; height:30px; margin:auto 28px; padding:0 8px 0 18px; position:relative; display:inline-block; color:#999;
    }
    .tagList:hover {
        color:#DDD;
        box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.5), 2px 6px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
    }



     .likeButton {
         width:108px; height:32px; margin:-6px 28px 0 8px; float:right; border-radius:2px;
     }
     .likeButton > span {
         width:98px; height:23px; line-height:24px;
     }
</style>