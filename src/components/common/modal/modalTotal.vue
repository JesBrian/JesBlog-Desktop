<template>
    <div>
        <transition name="updown">
            <!-- 各种拟态框组件 -->
            <component :is="modalType" :warningText="warningText"/>
        </transition>
        <!-- 拟态框遮盖幕组件 -->
        <cover v-show="modalType"/>
    </div>
</template>

<script>
    import register from "./register/register.vue";//"注册"拟态框组件
    import login from "./login/login.vue";//"登录"拟态框组件
    import repasswd from "./repasswd/repasswd.vue";//"找回密码"拟态框组件
    import category from "./category/category.vue";//"选择文章分类"拟态框组件
    import warning from "./warning/warning.vue";//"警告"拟态框组件
    import cover from "./cover.vue";//拟态框遮盖幕组件


    export default {
        name: "modal-total",
        components: {
            register,
            login,
            repasswd,
            category,
            warning,
            cover,
        },

        props: [
            'warningText'
        ],

        computed: {
            modalType () {
                return this.$store.state.modalType;
            },
        },

        methods: {
            makeSure() {
                this.$emit('makeSure');
            }
        }
    }
</script>

<style scoped>

</style>