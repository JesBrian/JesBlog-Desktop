<template>
  <!--分页菜单-->
  <div>
    <div id="page" style="width:100%; margin:38px auto; position:relative; clear:both; text-align:center;">

      <!-- 数据有分页的情况 -->
      <ul id="menu" class="s1c-Bg box-show" v-show="allPage !== 0">
        <li class="no-select prev" @click="goto(current - 1)"><a class="glass-Bg MyIF double-arrow-left" :class="{ban: (current === 1)}"></a></li>
        <li class="no-select" v-for="n in showPage" @click="goto(n)" :key="n">
          <a class="glass-Bg" :class="{'active':current === n}">{{ n }}</a>
        </li>
        <li class="no-select next" @click="goto(current + 1)"><a class="glass-Bg MyIF double-arrow-right" :class="{ban: (allPage === current)}"></a></li>
      </ul>

    </div>
  </div>

</template>

<script>
export default {
  name: 'pagination',

  data () {
    return {
      current: 1,
      showItem: 7,
      allPage: 12
    }
  },

  computed: {
    showPage () {
      let pag = []
      if (this.current < this.showItem) { // 如果当前的激活的项 小于要显示的条数
        // 总页数和要显示的条数那个大就显示多少条
        let i = Math.min(this.showItem, this.allPage)
        while (i) {
          pag.unshift(i--)
        }
      } else { // 当前页数大于显示页数了
        let middle = this.current - Math.floor(this.showItem / 2) // 从哪里开始
        let i = this.showItem
        if (middle > (this.allPage - this.showItem)) {
          middle = (this.allPage - this.showItem) + 1
        }
        while (i--) {
          pag.push(middle++)
        }
      }
      return pag
    }
  },
  methods: {
    goto: function (index) {
      // 如果 [ 要跳转的页数为当前页数 / 跳转页数 < 1 / 跳转页数 > 总页数 ] 都直接返回
      if (index === this.current || index < 1 || index > this.allPage) return false
      // 否则进行跳转 / 数据更新
      else this.current = index
    }
  }
}
</script>

<style scoped>
  #menu {
    padding: 0 38px;
    display: inline-block;
    height: 68px;
    border-radius: 5px;
  }

  #menu >>> li {
    margin: 0 5px;
    display: inline-block;
    position: relative;
    bottom: -11px;
    text-align: center;
  }

  #menu .prev, #menu .next {
    top: 13px;
  }

  #menu >>> li a {
    width: 42px;
    display: block;
    border-radius: 3px;
    position: relative;
    text-decoration: none;
    height: 27px;
    color: #DDD;
    font-size: 13px;
    line-height: 28px;
    transition: all 0.3s ease;
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 4px 4px rgba(0, 0, 0, 0.5), 0 4px 4px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
  }

  #menu >>> li a.MyIF {
    width: 40px;
    height: 38px;
    font-size: 20px;
    line-height: 38px;
    color: #84AAFF;
  }

  #menu >>> li a.MyIF:hover {
    color: #2dbeff;
  }

  #menu >>> li a:hover {
    background: #080808;
    color: lightgreen;
  }

  #menu >>> li a:active, #menu >>> li a.active {
    background: #000;
    bottom: -1px;
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), inset 0 0 0 1px #272727, 0 2px #111, 0 4px 2px rgba(0, 0, 0, 0.3);
  }

  #menu >>> li a.active {
    color: #2EE7FF;
    text-shadow: 0 0 5px #2ee7ff;
    cursor: not-allowed;
  }

  #menu >>> li a.ban {
    bottom: 0;
    color: #333 !important;
    cursor: not-allowed !important;
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 4px 4px rgba(0, 0, 0, 0.5), 0 4px 4px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
  }
</style>
