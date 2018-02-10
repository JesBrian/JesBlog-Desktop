<template>
    <!-- 文章列表操作栏组件 -->
    <span class="no-select articleInfo" style="margin-right:28px; float:right; font-size:14px;">
        <router-link style="margin:8px;" to="/article"><i class="MyIF status-on"></i> 阅读: <span>888</span></router-link>
        /
        <a class="click-like" @click="changeLike" style="margin:8px;"><i class="MyIF" :class="likeType"></i> 点赞: <span>{{ likeNum }}</span></a>
        /
        <a style="margin:8px;"><i class="MyIF feedback"></i> 评论: 333</a>
    </span>
</template>

<script>
    export default {
        name: "article_oper",
        data() {
            return {
                likeType: 'non-collection',
                likeNum: 369,
            }
        },
        methods: {
            changeLike() {
                if (this.likeType === 'non-collection') {
                    this.likeType = 'collection';
                    this.likeNum++;
                } else {
                    this.likeType= 'non-collection';
                    this.likeNum--;
                }
            }
        }
    }
</script>

<style scoped>
    .articleInfo > a {
        color: #DED;
    }

    .articleInfo > a:hover {
        color: #33FFA0;
    }

    .articleInfo > a:hover > i.MyIF {
        color: #33CDFF;
    }
</style>