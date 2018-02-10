<template>
    <div class="box-show" style="width:100%; height:80px; margin:8px 0 16px; position:relative;">

        <!-- 头像组件 -->
        <avatar class="avatar-author"/>

        <!-- 用户名组件 -->
        <username class="username-author"/>

        <p style="color:#999; font-size:15px;">
            <span style="padding:0 18px; border-right:1px solid #7AFFB4;">关注 0</span>
            <span style="padding:0 18px; border-right:1px solid #7AFFB4;">粉丝 0</span>
            <span style="padding:0 18px; border-right:1px solid #7AFFB4;">点赞 0</span>
            <span style="padding:0 18px;">文章 0</span>
        </p>


        <!-- "关注"按钮组件 -->
        <follow class="search-follow" v-if="!haveFollow"/>
        <!-- "取消关注"按钮组件 -->
        <leave class="search-follow" v-else />

    </div>
</template>

<script>
    import avatar from "./avatar.vue";//头像组件
    import username from "./username.vue";//用户名组件
    import follow from "../base/button/follow.vue";//"关注"按钮组件
    import leave from "../base/button/leave.vue";//"取消关注"按钮组件

    export default {
        name: "author_cell_search",
        components: {
            avatar,
            username,
            follow,
            leave
        },
        data() {
            return {
                haveFollow: false,
            }
        },
        methods: {
            clickFollow() {
                this.haveFollow = true;
            },
            clickLeave() {
                this.haveFollow = false;
            }
        }
    }
</script>

<style scoped>
    .avatar-author {
        width:48px; height:48px; margin:15px 8px 8px 18px; float:left;
    }

    .username-author {
        margin:0 18px; display:inline-block; color:#999; line-height:2.6em; font-size:18px;
    }
    .username-author:hover {
        color:#DDD;
    }


    .search-follow {
        width:72px!important; height:38px!important; top:20px!important; right:18px!important;
    }
    .search-follow >>> span.follow, .search-follow >>> span.leave {
        width:60px; height:26px; line-height:26px; left:50.2%;
    }

</style>