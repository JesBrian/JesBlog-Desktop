<template>
  <div>
    <div class="s1c-Bg box-show" style="width:608px; height:52px; margin:28px auto 38px; position:relative; text-align:center; border-radius:6px; font-size:25px; line-height:48px; font-family:'Microsoft YaHei', '黑体', sans-serif; font-weight:700; color:#AAA;">
      <i class="MyIF double-arrow-left" style="font-size:22px; color:#24c9ff"></i>
      <a class="font-style" style="margin:0 38px;">后台管理系统主页</a>
      <i class="MyIF double-arrow-right" style="font-size:22px; color:#24c9ff"></i>
    </div>

    <div class="s1c-Bg box-show" style="width:92%; margin:0 auto 18px; padding-bottom:40px;">
      <charts class="charts" :option="UserChartOption" />

      <charts class="charts" :option="newArticlesChartOption" />
    </div>
  </div>
</template>

<script>
import charts from '../../components/backstage/charts/charts.vue'

export default {
  name: 'index',

  components: {
    charts
  },

  data() {
    return {
      UserChartOption: {
        id: 'userChart',
        title: {
          text: '每天新注册/登录用户数'
        },
        tooltip: {
          valueSuffix: ' 人'
        },
        series: [
          {
            name: '新用户',
            data: [23, 65, 72, 18, 0]
          },
          {
            name: '登录用户',
            data: [56, 72, 51, 38, 0]
          }
        ]
      },

      newArticlesChartOption: {
        id: 'newArticles',
        chart: {
          renderTo: 'container',
          type: 'column',
          margin: 75,
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
          }
        },
        plotOptions: {
          column: {
            depth: 25
          }
        },
        title: {
          text: '新文章发布数'
        },
        tooltip: {
          valueSuffix: ' 篇'
        },
        series: [{
          name: '新文章',
          data: [50, 235, 809, 947]
        }]
      }
    }

  }
}
</script>

<style scoped>
  .charts >>> #userChart {
    width: 92%;
    height: 288px;
    margin: 40px auto 0;
  }
  .charts >>> #newArticles {
    width: 92%;
    height: 288px;
    margin: 40px auto 0;
  }

  /* 控制文本渐变效果 */
  .font-style {  font-weight:900; background-image:-webkit-linear-gradient(left, #2ed8ff, #9b7cf7 25%, #2ed8ff 50%, #9b7cf7 75%, #2ed8ff); -webkit-text-fill-color:transparent; -webkit-background-clip:text; -webkit-background-size:200% 100%; -webkit-animation:masked-animation 3s infinite linear;  }
  @-webkit-keyframes masked-animation { 0%  { background-position: 0 0;} 100% { background-position: -100% 0;} }

</style>
