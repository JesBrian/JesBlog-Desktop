<template>
  <!-- "选择文章分类"拟态框组件 -->
  <div class="s1c-Bg box-show">

    <!-- 拟态框头部 -->
    <div class="no-select glass-Bg" style="width:83%; height:52px; margin:28px auto; line-height:55px; text-align:center; box-shadow:inset 0 1px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1.8px #272727;">
      <img v-lazy="this.$store.state.baseHost + 'img/icon/cube.png'" style="width:38px; height:38px; margin:0 8px -8px 0;"/>
      <span style="display:inline-block; font-size:27px; letter-spacing:3px; font-weight:700;">选择分类</span>
    </div>

    <!-- 关闭拟态框组件 -->
    <close-button/>

    <!-- "选择文章分类"拟态框内容 -->
    <div>
      <div id="categoryModalSearchForm" class="glass-Bg box-show" style="width:508px; height:50px; margin:0 auto; padding:0; position:relative;">
        <input type="text" placeholder=" 输入想要搜索的分类 [ 支持模糊搜索 ] " v-model="categoryKey" style="width:423px; height:30px; top:11px; left:10px; padding:0 10px; position:absolute; border:none!important; box-shadow:none; background:#444; color:#DDD; font-size:18px;">
        <span class="superButton-Out" @click="searchCategory" style="width:40px; height:39px; margin:5.5px; float:right;">
          <a class="superButton-In MyIF search" style="width:30px; height:29px; line-height:29px; font-size:23px;"></a>
        </span>
      </div>

      <div style="width:90%; height:188px; margin:26px auto; padding:0 0 0 5px; overflow-y:auto;">
        <div v-if="loadData">
          <div class="categoey glass-Bg box-show" v-for="item in categoryData" :key="item.id" @click="chooseCategory(item)" style="width:105px; height:30px; margin:0 9px 16px 0; border-radius:2px; display:inline-block; cursor:pointer; color:#999; line-height:31px; font-size:17.5px; text-align:center; letter-spacing:1.5px;">
            {{ item.name }}
          </div>
          <p style="font-size:20px; text-align:center; line-height:168px;">{{ categoryTips }}</p>
        </div>

        <base-loading v-else style="margin-top:38px;"/>
      </div>

    </div>
  </div>
</template>

<script>
import closeButton from '../close_button.vue'
import baseLoading from '../../loading/baseLoading.vue'

export default {
  name: 'category',

  components: {
    closeButton,
    baseLoading
  },

  data () {
    return {
      loadData: false,
      categoryKey: '',
      categoryData: [],
      categoryTips: ''
    }
  },

  created () {
    this.searchCategory()
  },

  methods: {
    closeModal () {
      this.$store.commit('changeModal')
    },

    /**
     * 搜索文章分类
     */
    searchCategory () {
      this.loadData = false

      let data = {
        key: this.categoryKey
      }

      this.axios.post('category/simple-list', data).then( (response) => {
        if (response.data.status === '01') {
          this.categoryData = response.data.data
          this.categoryTips = ''
        } else {
          this.categoryData = []
          this.categoryTips = response.data.msg
        }
        this.loadData = true
      }).catch( (error) => {
        console.log(error)
      })
    },

    /**
     * 选择文章分类
     */
    chooseCategory (category) {
      this.$parent.chooseCategory(category)
      this.closeModal()
    }
  }
}
</script>

<style scoped>
  .categoey.box-show:hover {
    color: #3ee1ff !important;
    background:#181818;
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 8px 8px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
  }
</style>
