<template>
    <ul id="categoryList">
        <li v-for="item in categoryList">
            <div class="box-show" style="width:100%; height:80px; margin:8px 0 16px; position:relative;">
                <router-link to="/category" style="width:48px; height:48px; margin:15px 8px 8px 18px; float:left;"><img class="box-show" src="../../../assets/images/touxiang.jpg" style="width:100%; height:100%; border-radius:3px;"></router-link>
                <router-link class="category-name hover-underline text-hidden" to="/category">{{ item.name }}</router-link>
                <p style="color:#999; font-size:15px;">
                    <span style="padding:0 18px; border-right:1px solid #7AFFB4;">火热程度 A</span>
                    <span style="padding:0 18px; border-right:1px solid #7AFFB4;">关注人数 {{ item.follows }}</span>
                    <span style="padding:0 18px;">收录文章 {{ item.articleNum }}</span>
                </p>
                <!-- "关注"按钮组件 -->
                <follow class="search-follow" v-if="!haveFollow"/>
                <!-- "取消关注"按钮组件 -->
                <leave class="search-follow" v-else />
            </div>
        </li>
    </ul>
</template>

<script>
    import follow from "../base/button/follow.vue";//"关注"按钮组件
    import leave from "../base/button/leave.vue";//"取消关注"按钮组件


    export default {
        name: "category",
        components:{
            follow,
            leave
        },

        props: [
            'categoryList',
        ],

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
    .category-name {
        max-width:208px; margin:0 18px; display:inline-block; color:#999; line-height:2.6em; font-size:18px;
    }
    .category-name:hover {
        color:#DDD;
    }
</style>