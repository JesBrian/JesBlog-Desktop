<template>
  <div>
    <!-- 主体 - 搜索框 -->
    <section class="webdesigntuts-workshop">
      <div class="glass-Bg box-show">
        <input type="text" placeholder=" 搜索一下, 更加精彩 ">
        <router-link to="/search" class="MyIF search"/>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'search_box'
}
</script>

<style scoped>
  .webdesigntuts-workshop {
    height: 180px;
    text-align: center;
    width: 100%;
    position: relative;
  }

  .webdesigntuts-workshop:before, .webdesigntuts-workshop:after {
    content: '';
    display: block;
    height: 1px;
    left: 50%;
    margin: 0 0 0 -550px;
    position: absolute;
    width: 1100px;
  }

  .webdesigntuts-workshop:before {
    background: #444;
    background: -webkit-linear-gradient(left, #222, #444, #222);
    background: -moz-linear-gradient(left, #222, #444, #222);
    background: -o-linear-gradient(left, #222, #444, #222);
    background: -ms-linear-gradient(left, #222, #444, #222);
    background: linear-gradient(left, #222, #444, #222);
    top: 141px;
  }

  .webdesigntuts-workshop:after {
    background: #000;
    background: -webkit-linear-gradient(left, #222, #000, #222);
    background: -moz-linear-gradient(left, #222, #000, #222);
    background: -o-linear-gradient(left, #222, #000, #222);
    background: -ms-linear-gradient(left, #222, #000, #222);
    background: linear-gradient(left, #222, #000, #222);
    top: 140px;
  }

  .webdesigntuts-workshop div {
    display: inline-block;
    font-size: 0;
    margin: 38px auto 0;
    padding: 15px;
    position: relative;
  }

  .webdesigntuts-workshop input {
    background: #222;
    background: -webkit-linear-gradient(#333, #222);
    background: -moz-linear-gradient(#333, #222);
    background: -o-linear-gradient(#333, #222);
    background: -ms-linear-gradient(#333, #222);
    background: linear-gradient(#333, #222);
    border: 1px solid #444;
    border-radius: 3px 0 0 3px;
    box-shadow: 0 2px 0 #000;
    color: #888;
    display: block;
    float: left;
    font-size: 16px;
    font-weight: 400;
    height: 36px;
    margin: 0;
    padding: 0 10px;
    text-shadow: 0 -1px 0 #000;
    width: 348px;
    letter-spacing: 1px;
  }

  .webdesigntuts-workshop input:focus {
    -webkit-animation: glow 800ms ease-out infinite alternate;
    -moz-animation: glow 800ms ease-out infinite alternate;
    -o-animation: glow 800ms ease-out infinite alternate;
    animation: glow 800ms ease-out infinite alternate;
    background: #222922;
    background: -webkit-linear-gradient(#333, #222);
    background: -moz-linear-gradient(#333, #222);
    background: -o-linear-gradient(#333, #222);
    background: -ms-linear-gradient(#333, #222);
    background: linear-gradient(#333, #222);
    border-color: #22E8FF;
    box-shadow: 0 0 5px rgba(87, 228, 255, 0.2), inset 0 0 5px rgba(0, 255, 0, .1), 0 2px 0 #000;
    color: #DCD;
    outline: none;
  }

  .webdesigntuts-workshop input:focus::-webkit-input-placeholder {
    color: #DCD;
  }

  .webdesigntuts-workshop input:focus:-moz-placeholder {
    color: #DCD;
  }

  .webdesigntuts-workshop a {
    background: #222;
    background: -webkit-linear-gradient(#333, #222);
    background: -moz-linear-gradient(#333, #222);
    background: -o-linear-gradient(#333, #222);
    background: -ms-linear-gradient(#333, #222);
    background: linear-gradient(#333, #222);
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    border: 1px solid #444;
    border-left-color: #000;
    border-radius: 0 3px 3px 0;
    box-shadow: 0 2px 0 #000;
    color: #AAA;
    display: block;
    float: left;
    font-size: 25px;
    font-weight: 400;
    height: 36px;
    line-height: 33px;
    margin: 0;
    padding: 0;
    position: relative;
    text-shadow: 1px 1px 5px #AAA;
    width: 40px;

  }

  .webdesigntuts-workshop a:hover, .webdesigntuts-workshop a:focus {
    background: #222;
    color: #22E8FF;
    outline: none;
    text-shadow: 1px 1px 5px #22E8FF;
  }

  .webdesigntuts-workshop a:active {
    background: #222;
    box-shadow: 0 1px 0 #000, inset 1px 0 1px #222;
    text-shadow: 1px 1px 2px #22E8FF !important;
    top: 1px;
  }

  @-webkit-keyframes glow {
    0% {
      border-color: #22E8FF;
      box-shadow: 0 0 5px rgba(87, 228, 255, 0.2), inset 0 0 5px rgba(46, 231, 255, 0.1), 0 2px 0 #000;
    }
    100% {
      border-color: #30CDFF;
      box-shadow: 0 0 20px rgba(46, 231, 255, 0.6), inset 0 0 10px rgba(46, 231, 255, 0.4), 0 2px 0 #000;
    }
  }

  @-moz-keyframes glow {
    0% {
      border-color: #22E8FF;
      box-shadow: 0 0 5px rgba(87, 228, 255, 0.2), inset 0 0 5px rgba(46, 231, 255, 0.1), 0 2px 0 #000;
    }
    100% {
      border-color: #30CDFF;
      box-shadow: 0 0 20px rgba(46, 231, 255, 0.6), inset 0 0 10px rgba(46, 231, 255, 0.4), 0 2px 0 #000;
    }
  }

  @-o-keyframes glow {
    0% {
      border-color: #22E8FF;
      box-shadow: 0 0 5px rgba(87, 228, 255, 0.2), inset 0 0 5px rgba(46, 231, 255, 0.1), 0 2px 0 #000;
    }
    100% {
      border-color: #30CDFF;
      box-shadow: 0 0 20px rgba(46, 231, 255, 0.6), inset 0 0 10px rgba(46, 231, 255, 0.4), 0 2px 0 #000;
    }
  }

  @-ms-keyframes glow {
    0% {
      border-color: #22E8FF;
      box-shadow: 0 0 5px rgba(87, 228, 255, 0.2), inset 0 0 5px rgba(46, 231, 255, 0.1), 0 2px 0 #000;
    }
    100% {
      border-color: #30CDFF;
      box-shadow: 0 0 20px rgba(46, 231, 255, 0.6), inset 0 0 10px rgba(46, 231, 255, 0.4), 0 2px 0 #000;
    }
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
