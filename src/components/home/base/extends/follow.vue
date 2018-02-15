<template>
  <div>
    <!-- 关注 -->
    <span v-if="!hasFollow" class="superButton-Out" @click="changeFollow">
      <span class="superButton-In MyIF follow"> 关注</span>
    </span>
    <!-- 取消关注 -->
    <span v-else class="superButton-Out">
      <span class="superButton-In MyIF leave" @click="changeFollow"> 取关</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'follow',

  props: [
    'hasFollow',
    'type',
    'typeId'
  ],

  methods: {
    changeFollow () {
      let data = {
        userid: this.$store.state.userInfo.id,
        hasFollow: this.hasFollow
      }
      let url = ''
      let thisObj = this

      if (this.type === 'category') {
        url = 'attention/follow-category'
        data.categoryid = this.typeId
      } else if (this.type === 'user') {
        url = 'attention/follow-user'
        data.followid = this.typeId
      }

      this.axios.post(url, data).then(function (response) {
        if (response.data.status === '01') {
          thisObj.hasFollow = !thisObj.hasFollow
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  span.superButton-Out {
    width: 68px;
    height: 32px;
    float: left;
    border-radius: 2px;
  }

  span.follow, span.leave {
    width: 58px;
    height: 23px;
    line-height: 24px;
  }
</style>
