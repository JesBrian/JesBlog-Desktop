<template>
  <!-- 操作工具组件 -->
  <div>
    <div class="oper-tool clickButton s1c-Bg box-show" title="Fork This Project">
      <a href="https://github.com/JesBrian/JesBlog" target=_blank class="MyIF github"></a>
    </div>
    <div class="oper-tool clickButton s1c-Bg box-show" title="Contact Me">
      <a class="MyIF code-1"></a>
    </div>
    <div class="oper-tool clickButton s1c-Bg box-show" title="Give Financial Assistance">
      <a class="MyIF coin"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'oper_tool'
}
</script>

<style scoped>
  .oper-tool {
    width: 45px;
    height: 45px;
    margin-left: 28px;
    display: inline-block;
    font-weight: 500;
  }

  .oper-tool > a {
    width: 100%;
    height: 100%;
    display: inline-block;
    color: #0A0A0A;
    font-size: 38px;
    line-height: 46px;
    text-align: center;
    text-shadow: 0 -0.8px 0 #000;
  }

  .oper-tool > a:hover {
    color: #19D6E6;
  }

  .oper-tool > a:active {
    color: lightgreen;
  }

</style>
