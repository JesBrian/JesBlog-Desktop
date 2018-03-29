<template>
  <!-- 富文本内容组件 -->
  <div class="ql-container ql-snow box-show" style="width:88%; margin:8px auto 28px;">
    <div class="ql-editor" v-html="descript"></div>
  </div>
</template>

<script>
import 'quill/dist/quill.snow.css'
import '@/assets/css/editor.css'

export default {
  name: 'descript',

  props: [
    'descript'
  ],

  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
