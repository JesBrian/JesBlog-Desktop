<template>
  <i class="MyIF exciting emojiButton" @click="sendEmoji"></i>
</template>

<script>
export default {
  name: 'emoji',
  methods: {
    sendEmoji () {
      this.$emit('sendEmoji')
    }
  }
}
</script>

<style scoped>
  i.exciting {
    margin-right: 38px;
  }

  i.exciting:hover {
    color: lightgreen;
  }

  i.exciting:active {
    color: lightseagreen;
  }
</style>
