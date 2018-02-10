<template>
    <div>
        <img class="box-show" src="../../../assets/images/touxiang.jpg" style="width:43px; height:43px; margin:0 18px 38px 38px; border-radius:4px;">

        <textarea class="s1c-Bg box-show text-effect super-text" v-model="comment" style="width:83%; height:88px; margin-top:18px; padding:8px; font-size:17px; color:#CCC; text-indent:1em; resize:none;"></textarea>

        <div style="width:73%; margin:0 auto; padding:8px 0; position:relative;">

            <!-- 表情 & 限制字数 -->
            <span style="margin-left:38px; display:inline-block; line-height:2em; color:#AAA;">

                <!-- 发表情组件 -->
                <emoji v-on:sendEmoji="createEmojiContent()"/>

                限制<i style="margin:0 3px;">125</i>字
            </span>

            <!-- "评论"按钮组件 -->
            <comment-button style="margin-right:38px;"/>

            <transition name="fade">
                <!-- 表情区组件 -->
                <components :is="emojiContent"/>
            </transition>

        </div>
    </div>
</template>

<script>
    import emoji from '../base/emoji/emoji.vue';//发表情组件
    import emojiContent from '../base/emoji/emoji_content.vue';//发表情组件
    import commentButton from '../base/button/comment.vue';//"评论"按钮组件

    export default {
        name: "comment_create",
        components: {
            emoji,
            emojiContent,
            commentButton
        },
        data() {
            return {
                comment: '',
                emojiContent: ''
            }
        },
        methods: {
            createEmojiContent() {
                if (this.emojiContent == '') {
                    this.emojiContent = 'emojiContent';
                } else {
                    this.emojiContent = '';
                }
            },
            hiddenEmojiContent() {
                this.emojiContent = '';
            },
            writeEmoji(info) {
                this.comment += "[-" + info + "-]";
            }
        }
    }
</script>

<style scoped>

</style>
