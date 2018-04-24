<template>
  <!-- 推荐作者列表组件 -->
  <div class="s1c-Bg box-show" style="width:98%; margin:10px 23px 10px 0; padding:8px 8px; float:right;">
    <div style="width:88%; margin:12px auto; color:#DDD; font-weight:700; font-size:18px; text-shadow:0.5px 0.5px 0.2px #000;">
      推荐作者
      <a id="changeRecomAuthor" @click="changeRecomAuthor()" :class="{'active':active}">
        <i class="MyIF refresh-1"></i> 换一批
      </a>
    </div>
    <ul v-if="authorList.length !== 0">
      <li class="otherAuthor" style="margin-bottom:15px;" v-for="(item, index) in authorList" :key="index">
        <!--单个推荐作家组件-->
        <author-cell-recom :authorData="item" />
      </li>
    </ul>
    <div v-else style="padding:68px 0;">
      <base-loading />
    </div>

    <router-link to="/search/author" class="glass-Bg box-show" style="margin:10px 80px 12px; padding:8px 13px; display:inline-block; font-weight:700; color:#AAA;">查找更多作家</router-link>
  </div>
</template>

<script>
import authorCellRecom from './author_cell_recom.vue'
import baseLoading from '../../common/loading/baseLoading.vue'

export default {
  name: 'author_list_recom',

  components: {
    authorCellRecom,
    baseLoading
  },

  props: [
    'authorList'
  ],

  data () {
    return {
      active: false
    }
  },

  methods: {
    changeRecomAuthor () {
      this.active = true
      setTimeout( () => {
        this.active = false
        this.dataItem = 8
      }, 4000)
    },

    followNext (authorCell) {
      console.log(authorCell)
    }
  }
}
</script>

<style scoped>
  #changeRecomAuthor {
    float: right;
    color: #999;
    font-size: 16px;
  }

  #changeRecomAuthor:hover {
    color: #DDD;
  }

  #changeRecomAuthor.active {
    color: #999;
    cursor: not-allowed;
  }

  #changeRecomAuthor.active > i.MyIF {
    display: inline-block;
    animation: goCircle 1s infinite linear; /*匀速 循环*/
  }

  #changeRecomAuthor.active > i.MyIF, #changeRecomAuthor:hover > i.MyIF {
    color: #19D6E6;
  }

  .otherAuthor >>> a {
    color: #BBB;
  }
  .otherAuthor:hover >>> a {
    color: #EEE;
  }

  @keyframes goCircle {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
