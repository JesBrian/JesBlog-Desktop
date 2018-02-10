<template>
    <!-- "取消关注"按钮组件 -->
    <span class="superButton-Out">
        <span class="superButton-In MyIF leave" @click="clickLeave"> 取关</span>
    </span>
</template>

<script>
    export default {
        name: "leave",
        methods: {
            clickLeave() {
                this.$parent.clickLeave();
            }
        }
    }
</script>

<style scoped>
    span.superButton-Out {
        width:68px; height:32px; top:7px; right:8px; position:absolute; border-radius:2px;
    }
    span.leave {
        width:58px; height:23px; line-height:24px;
    }
</style>