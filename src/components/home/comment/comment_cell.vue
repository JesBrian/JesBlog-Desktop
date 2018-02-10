<template>
    <div>

        <!-- 头像组件 -->
        <avatar class="avatar-author"/>

        <!-- 用户名组件 -->
        <username class="username-author"/>：
        <p style="padding:0 18px; font-size:14px; line-height:1.2em; word-break:break-all; text-indent:2em;">cvuwdhbv测试v古城是理科生v手机内存卡什么市场零售价没看出来是，1ciwbvqhbv测试v古城是理科生v手机内存卡什么市场零售价没看出来是，1ciwbvqhbv测试v古城是理科生v手机内存卡什么市场零售价没看出来是，1ciwbvqhbv测试v古城是理科生v手机内存卡什么市场零售价没看出来是，1ciwbvqeunvcomnk</p>

        <!-- 父级评论组件 -->
        <comment-cell-second/>

        <p style="width:80%; margin-top:12px; text-indent:8em; line-height:2em; clear:both;">
            <span>2017 - 12 - 15</span>
            <a class="replyButton hover-underline" style="float:right; color:#55EEB4;" @click="newComment">回复</a>
        </p>

        <transition name="fade" mode="out-in">
            <!-- 新回复组件 -->
            <component :is="isNewComment"/>
        </transition>

    </div>
</template>

<script>
    import avatar from '../author/avatar.vue';//头像组件
    import username from '../author/username.vue';//用户名组件
    import commentCellSecond from './comment_cell_second.vue';//父级评论组件
    import newComment from './new_comment.vue';//新评论组件


    export default {
        name: "comment_cell",
        components: {
            avatar,
            username,
            commentCellSecond,
            newComment
        },
        data() {
            return {
                isNewComment: ''
            }
        },
        methods: {
            newComment() {
                this.isNewComment = 'newComment';
                this.$emit('newComment',this);
            }
        }
    }
</script>

<style scoped>
    .avatar-author {
        width:40px; height:40px; margin:8px 12px 8px 18px; float:left;
    }

    .username-author {
        margin:0 3px 0 16px; line-height:2em; color:#33BCFF;
    }

</style>