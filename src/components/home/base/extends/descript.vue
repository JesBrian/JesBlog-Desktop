<template>
    <!-- 富文本内容组件 -->
    <div class="ql-container ql-snow box-show" style="width:88%; margin:8px auto 28px;">
        <div class="ql-editor" v-html="descript"></div>
    </div>
</template>

<script>

    /*-*-* 引入外部插件组件[BEGIN] *-*-*/
    import 'quill/dist/quill.snow.css'
    /*-*-* 引入外部插件组件[END] *-*-*/

    export default {
        name: "descript",

        props: [
            'descript',
        ],

        data() {
            return {
            }
        }

    }
</script>

<style scoped>

</style>