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
import register from './register/register.vue'
import login from './login/login.vue'
import repasswd from './repasswd/repasswd.vue'
import category from './category/category.vue'
import warning from './warning/warning.vue'
import cover from './cover.vue'

export default {
  name: 'modal-total',
  components: {
    register,
    login,
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
    }
  }
}
</script>

<style scoped>

</style>
