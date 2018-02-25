<template>
  <!-- PC端前台文章页 -->
  <div style="position:relative;">

    <!-- 导航栏组件 -->
    <navigation-bar/>

    <div id="mainBody" style="padding:88px 0 108px;"><!-- 真TM迷 -->

      <div id="bodyLayout" class="glass-Bg box-show"
           style="width:1080px; margin:0 auto; padding:12px 0; border-radius:8px; position:relative; background:#111;">

        <div style="width:80%; margin:28px auto;">
          <div v-if="this.$route.params.id">
            <h2 style="display:inline-block; font-size:28px; color:#EEE; line-height:2em;">修改文章</h2>
            <span class="superButton-Out" @click="confirmSaveArticle(0)" style="width:108px; height:38px; right:88px; float:right;">
              <a class="superButton-In MyIF trash-1" style="width:98px; height:28px; line-height:28px;"> 删除文章</a>
            </span>
          </div>
          <h2 v-else style="display:inline-block; font-size:28px; color:#EEE; line-height:2em;">新建文章</h2>
        </div>

        <!-- 编写区域 -->
        <div style="width:80%; height:100%; margin:0 auto 18px; color:#AAA;">

          <!-- 上传缩略图 -->
          <div style="width:238px; height:188px; right:98px; position:absolute;">
            <div class="s1c-Bg box-show" style="width:100%; height:138px;" title="点击上传缩略图">
              <p style="width:100%; top:38%; left:50%; position:absolute; transform:translate(-50%, -50%); font-size:18px; font-weight:700; color:#DDD; text-align:center; letter-spacing:1px;">不使用缩略图 !</p>
              <img src="" class="box-show" @click="uploadThumbnail" style="width:95%; height:128px; margin:5px 6px; background:#111;"/>
            </div>
            <span class="superButton-Out" @click="uploadThumbnail" style="width:128px; height:35px; bottom:3px; left:50%; transform:translate(-50%, 0); position:absolute;" title="点击上传缩略图">
              <a class="superButton-In MyIF uploadImg" style="width:118px; height:25px; top:48%; line-height:25px;"> 上传缩略图</a>
            </span>
            <input type="file" id="uploadThumbnail" name="thumbnailTemp" value="" style="display:none;"/>
          </div>

          <table style="width:100%; margin:28px 0 48px;">
            <!-- 标题 -->
            <tr>
              <td style="width:18%; height:68px; text-align:center;">
                <label for="newArticleTitle" class="MyIF add-data" style="font-size:20px; font-weight:700;">标题<i style="color:lightcoral">*</i>
                </label>
              </td>
              <td>
                <input id="newArticleTitle" v-model="title" class="s1c-Bg box-show" style="width:288px; padding:3px 8px; font-size:20px;" type="text"/>
              </td>
            </tr>

            <!-- 分类 -->
            <tr>
              <td style="height:68px; text-align:center;">
                <label for="newArticleCategory" class="MyIF theme" style="font-size:20px; font-weight:700;">分类<i style="color:lightcoral">*</i></label>
              </td>
              <td>
                <input type="hidden" v-model="categoryid"/>
                <input class="s1c-Bg box-show" v-model="categoryName" style="width:168px; padding:3px 8px; text-align:center; font-size:20px; cursor:not-allowed;" type="text" disabled/>
                <span id="newArticleCategory" class="superButton-Out" @click="chooseCategory" style="width:108px; height:38px; top:13px;">
                  <a class="superButton-In MyIF theme" style="width:98px; height:28px; line-height:28px;"> 选择分类</a>
                </span>
              </td>
            </tr>

            <!-- 标签 -->
            <tr>
              <td style="height:68px; text-align:center;">
                <label for="newArticleTag" class="MyIF kinds" style="font-size:20px; font-weight:700;">标签</label>
              </td>
              <td>
                <input id="newArticleTag" v-model="tagTemp" class="s1c-Bg box-show" style="width:168px; padding:3px 8px; font-size:20px;" type="text"/>
                <input type="hidden" v-model="tags"/>
                <span class="superButton-Out" style="width:108px; height:38px; top:13px;">
                  <a class="superButton-In MyIF makesure" style="width:98px; height:28px; line-height:28px;"> 确定保存</a>
                </span>
                <i style="margin-left:18px;">最多保存三个不同的标签</i>
              </td>
            </tr>

            <!-- 简介 -->
            <tr style="width:100%; height:128px; line-height:128px;">
              <td style="text-align:center;">
                <label for="newArticleSummary" class="MyIF kinds" style="font-size:20px; font-weight:700;">简介</label>
              </td>
              <td style="position:relative;">
                <textarea id="newArticleSummary" class="s1c-Bg box-show" v-model="summary" style="width:80%; height:80%; top:8px; position:absolute; line-height:1.2em; resize:none;" placeholder="请填写简介"></textarea>
              </td>
            </tr>

            <!-- 简单的富文本编辑器组件 -->
            <tr>
              <td colspan="2">
                <quill-editor class="quill-editor box-show" v-model="content" style="margin-top:28px;"/>
              </td>
            </tr>

            <!-- 保存按钮 -->
            <tr>
              <td style="height:68px; "></td>
              <td style="text-align:right;">
                <span class="superButton-Out" @click="confirmSaveArticle(2)" style="width:108px; height:38px; top:13px; right:128px;">
                  <a class="superButton-In MyIF information" style="width:98px; height:28px; line-height:28px;"> 存为草稿</a>
                </span>
                <span class="superButton-Out" @click="confirmSaveArticle(1)" style="width:108px; height:38px; top:13px; right:108px;">
                  <a class="superButton-In MyIF questionnaire-3" style="width:98px; height:28px; line-height:28px;"> 确定发表</a>
                </span>
              </td>
            </tr>

          </table>

        </div>
      </div>
    </div>

    <!-- 浮动块[回到顶部]组件 -->
    <float-block/>

    <!-- 页脚组件 -->
    <page-footer/>

    <!-- 拟态框组件 -->
    <modal @makeSure="sureSaveArticle" :warningText="warningText"/>

  </div>
</template>

<script>
import navigationBar from '../../components/home/base/extends/navigation_menu.vue'
import floatBlock from '../../components/home/base/extends/float_block.vue'
import pageFooter from '../../components/home/base/extends/page_footer.vue'
import modal from '../../components/common/modal/modalTotal.vue'

// import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
import {quillEditor} from 'vue-quill-editor'
import LocalStore from 'store'

export default {
  name: 'write',
  components: {
    navigationBar,
    quillEditor,
    floatBlock,
    pageFooter,
    modal
  },

  data () {
    return {
      id: 0,
      title: '',
      categoryid: 0,
      categoryName: '',
      tagTemp: '',
      tags: '',
      summary: '',
      content: '',
      status: 1,
      warningText: '发表该新文章'
    }
  },

  beforeCreate () {
    if ((this.$store.state.userInfo.id === '0') || (this.$store.state.userInfo.id !== LocalStore.get('user').id)) {
      this.$router.push({path: '/'})
    }
  },

  created () {
    // 如果有传入文章id参数则判断该文章是否是该作者所发布，是的话更新文章，不是的话跳转回新建文章页面
    if (this.$route.params.id) {
      let data = {
        id: this.$route.params.id,
        userid: this.$store.state.userInfo.id
      }
      let thisObj = this

      this.axios.post('article/get-detail-info', data).then(function (response) {
        if (response.data.status === '01') {
          let articleData = response.data.data

          thisObj.id = articleData.id
          thisObj.title = articleData.title
          thisObj.categoryid = articleData.categoryid
          thisObj.tags = articleData.tags
          thisObj.summary = articleData.summary
          thisObj.content = articleData.content

          thisObj.warningText = '更新该文章'
        } else {
          console.log(response)
          setTimeout(function () {
            thisObj.$router.push({path: '/write'})
          }, 2000)
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  },

  methods: {

    /**
     * 选择分类
     */
    chooseCategory () {
      this.$store.commit('changeModal', 'category')
    },
    sureCategory (category) {
      this.categoryid = category.id
      this.categoryName = category.name
    },

    /**
     * 上传缩略图
     */
    uploadThumbnail () {
      let thisObj = this
      let uploadThumbnailDom = document.getElementById('uploadThumbnail')
      uploadThumbnailDom.click()
      uploadThumbnailDom.onchange = function (event) {
        let file = event.target.files[0]
        if ((file.type !== 'image/jpeg') && (file.type !== 'image/png') && (file.type !== 'image/pjpeg')) {
          console.log('只能上传图片')
          return false
        }
        if (file.size > 3145728) {
          console.log('你上传的图片过大')
          return false
        }
        let data = new FormData()
        data.append('file', file, file.name)
        data.append('userid', thisObj.$store.state.userInfo.id)
        thisObj.axios.post('article/thumbnail', data).then(function (response) {
          console.log(response)
        }).catch(function (error) {
          console.log(error)
        })
      }
    },

    /**
     * 保存文章 - 新建 / 修改信息
     */
    confirmSaveArticle (status) {
      if (status === 2) {
        this.warningText = '将该文章存进草稿箱'
      } else if (status === 0) {
        this.warningText = '将该文章抛弃至回收站'
      } else if (status === 1) {
        this.warningText = '发表该新文章'
      }
      this.status = status
      this.$store.commit('changeModal', 'warning')
    },
    sureSaveArticle () {
      if (this.title === '') {
        return false
      }
      if (this.status === 1) {
        if (this.categoryid === 0) {
          return false
        }
        if (this.content === '') {
          return false
        }
      }

      let data = {
        id: this.id,
        userid: this.$store.state.userInfo.id,
        title: this.title,
        categoryid: this.categoryid,
        tags: this.tags,
        summary: this.summary,
        content: this.content,
        status: this.status
      }
      // let thisObj = this
      let url = ''

      if (this.$route.params.id) {
        url = 'article/update'
      } else {
        url = 'article/create'
      }

      this.axios.post(url, data).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
