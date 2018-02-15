<template>
  <!-- 底部页脚组件 -->
  <footer id="pageFooter" class="">
    <div>
      <p style="line-height:2.8em;">
        <span class="footer-declaration">
          <router-link to="/backstage" class="hover-underline">关于我们</router-link>
        </span>
        <span class="footer-declaration">
          <router-link to="/backstage" class="hover-underline">客户服务</router-link>
        </span>
        <span class="footer-declaration">
          <router-link to="/backstage" class="hover-underline">服务条款</router-link>
        </span>
        <span class="footer-declaration">
          <router-link to="/backstage" class="hover-underline">免责声明</router-link>
        </span>
      </p>
      <p style="line-height:0; text-indent:0.8em; color: #0BBEE6;">JesBrian个人版权所有 ©2015 - 2020</p>

      <div style="top:8px; right:0; position:absolute;">
        <!-- 操作工具组件 -->
        <oper-tool/>
      </div>
    </div>
  </footer>

</template>

<script>
import operTool from './oper_tool.vue'

export default {
  name: 'page_footer',
  components: {
    operTool
  }
}
</script>

<style scoped>
  #pageFooter {
    width: 100%;
    height: 68px;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    position: absolute;
    border: 1px solid #000;
    background: #111;
    font-weight: 700;
    box-shadow: -5px -8px 28px #000, inset 0 0 0 1px #272727;
  }

  #pageFooter > div {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }

  .footer-declaration {
    padding: 0 12px;
    border-right: 1px solid #55EEB4;
  }

  .footer-declaration > a {
    color: #999;
  }

  .footer-declaration > a:hover {
    color: #EEE;
  }
</style>
