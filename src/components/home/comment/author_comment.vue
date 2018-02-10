<template>
    <div>
        <!-- 评论列表组件 -->
        <comment-list/>
    </div>
</template>

<script>
    import commentList from './comment_list.vue';//评论列表组件

    export default {
        name: "author_comment",
        components: {
            commentList,
        }
    }
</script>

<style scoped>

</style>