<template>
  <!-- 搜索框 -->
  <div id="searchForm" class="glass-Bg box-show search-box" style="width:508px; height:53px; left:28px; margin:20px auto 38px; padding:0; position:relative;">
    <input type="text" placeholder=" 搜索一下更精彩 " v-model="searchKey" style="width:420px; height:30px; top:50%; left:10px; transform:translate(0,-50%); padding:0 10px; position:absolute; border: 1px solid #222; background:#444; color:#DDD; font-size:18px;">
    <span @click="goSearch"  class="superButton-Out" style="width:40px; height:39px; top:50%; right:6px; transform:translate(0,-50%); float:right;">
      <a class="superButton-In MyIF search" style="width:30px; height:29px; line-height:29px; font-size:23px;"></a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'search-box',

  data () {
    return {
      searchKey: ''
    }
  },

  methods: {
    goSearch () {
      this.$emit('search', this.searchKey)
    }
  }
}
</script>

<style scoped>
  .search-box input:focus {
    animation: glow 800ms ease-out infinite alternate;
    background: #222922;
    background: -webkit-linear-gradient(#333, #222);
    background: -moz-linear-gradient(#333, #222);
    background: -o-linear-gradient(#333, #222);
    background: -ms-linear-gradient(#333, #222);
    background: linear-gradient(#333, #222);
    border: 1px solid #22E8FF;
    box-shadow: 0 0 5px rgba(87, 228, 255, 0.2), inset 0 0 5px rgba(0, 255, 0, .1), 0 2px 0 #000;
    color: #DCD;
    outline: none;
  }

  @keyframes glow {
    0% {
      border-color: #22E8FF;
      box-shadow: 0 0 5px rgba(87, 228, 255, 0.2), inset 0 0 5px rgba(46, 231, 255, 0.1), 0 2px 0 #000;
    }
    100% {
      border-color: #30CDFF;
      box-shadow: 0 0 20px rgba(46, 231, 255, 0.6), inset 0 0 10px rgba(46, 231, 255, 0.4), 0 2px 0 #000;
    }
  }
</style>
