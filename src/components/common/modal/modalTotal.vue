<template>
  <div>
    <transition name="updown">
      <!-- 各种拟态框组件 -->
      <component :is="modalType" :warningText="warningText" class="modal"/>
    </transition>
    <!-- 拟态框遮盖幕组件 -->
    <cover v-show="modalType"/>
  </div>
</template>

<script>
import register from './register/register.vue'
import login from './login/login.vue'
// import oauth from './oauth/oauth.vue'
import repasswd from './repasswd/repasswd.vue'
import category from './category/category.vue'
import warning from './warning/warning.vue'
import cover from './cover.vue'

export default {
  name: 'modal-total',
  components: {
    register,
    login,
    // oauth,
    repasswd,
    category,
    warning,
    cover
  },

  props: [
    'warningText'
  ],

  computed: {
    modalType () {
      return this.$store.state.modalType
    }
  },

  methods: {
    makeSure () {
      this.$emit('makeSure')
    },

    chooseCategory (category) {
      this.$parent.sureCategory(category)
    }
  }
}
</script>

<style scoped>
  .modal {
    width:688px; top:50%; left:50%; position:fixed; transform:translate(-50%, -50%); color:#CCC; border-radius:6px; border:0.2px solid #00CDFF; box-shadow:0 0.5em 1em rgba(0, 0, 0, 0.6), 0 0 0.3em #00CDFF, inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2); background:#252525; z-index:999;
  }
</style>
