<template>
    <!-- "登录"拟态框组件 -->
    <div class="s1c-Bg box-show" style="width:688px; top:50%; left:50%; position:fixed; transform:translate(-50%, -50%); color:#CCC; border-radius:6px; border:0.2px solid #00CDFF; box-shadow:0 0.5em 1em rgba(0, 0, 0, 0.6), 0 0 0.3em #00CDFF, inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2); background:#252525; z-index:999;">

        <!-- 拟态框头部 -->
        <div class="no-select glass-Bg" style="width:83%; height:52px; margin:28px auto; line-height:55px; text-align:center; box-shadow:inset 0 1px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1.8px #272727;">
            <img src="/src/assets/images/common/icon/login.png" style="width:38px; height:38px; margin:0 8px -8px 0;"/>
            <span style="display:inline-block; font-size:27px; letter-spacing:3px; font-weight:700;">用户登录</span>
        </div>

        <!-- 关闭拟态框组件 -->
        <close-button/>


        <!-- "登录"拟态框内容 -->
        <div style="width:100%; height:200px; margin-bottom:28px;">

            <!-- 注册本站用户登陆 -->
            <div style="width:72%; height:100%; float:left;">

                <div style="width:83%; height:32%; margin:0 auto; font-size:19px;">
                    <label class="MyIF IDcard-1" for="loginUser" style="font-size:20px; line-height:1.8em; color:#2DBEFF;">
                        <span style="margin-left:8px; color:#DDD;">用户名</span>
                    </label>
                    <input id="loginUser" type="text" class="s1c-Bg box-show" v-model="username" style="width:268px; padding:6px 12px; float:right;" placeholder="请填写用户名"/>
                </div>

                <div style="width:83%; height:32%; margin:0 auto; font-size:19px;">
                    <label class="MyIF yuechi" for="loginPwd" style="font-size:20px; line-height:1.8em; color:#2DBEFF;">
                        <span style="margin-left:8px; color:#DDD;">密码</span>
                    </label>
                    <input id="loginPwd" type="password" class="s1c-Bg box-show" v-model="passwd" style="width:268px; padding:6px 12px; float:right;" placeholder="请填写密码"/>
                </div>

                <div style="width:75%; height:28%; margin:0 auto; text-align:center;">
                    <span class="superButton-Out" style="width:108px; height:38px; margin:0 48px 0 0;">
                        <button class="superButton-In MyIF cancel" style="width:98px; height:28px; top:49%; left:50%; line-height:30px; font-size:16px;"> 重新填写</button>
                    </span>
                    <span class="superButton-Out" @click="userLogin" style="width:108px; height:38px; margin:0 0 0 48px;">
                        <button class="superButton-In MyIF makesure" style="width:98px; height:28px; top:49%; left:50%; line-height:30px; font-size:16px;"> 确认登陆</button>
                    </span>
                </div>

                <p style="margin-right:18px; float:right; line-height:2.5em; color:#FFF;">
                    <a class="hover-underline" @click="repasswd" style="margin:0 18px;">忘记密码</a>/<a class="hover-underline" @click="register" style="margin:0 18px;">新用户注册</a>
                </p>
            </div>


            <!-- 其他授权登陆方式 -->
            <div style="width:28%; height:100%; float:right; box-sizing:border-box; border-left:1px solid #000; border-image:linear-gradient(#25b8dd, #3072cc, #25b8dd) 2; text-align:center;">
                <!-- 微信 -->
                <span class="superButton-Out" style="width:128px; height:40px; margin:11px 0;">
                    <a class="superButton-In MyIF wechat" style="width:118px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"> 微信登陆</a>
                </span>
                <!-- QQ -->
                <span class="superButton-Out" style="width:128px; height:40px; margin:11px 0;">
                    <a class="superButton-In MyIF qq" style="width:118px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;">&nbsp;&nbsp;QQ登陆</a>
                </span>
                <!-- 微博 -->
                <span class="superButton-Out" style="width:128px; height:40px; margin:11px 0;">
                    <a class="superButton-In MyIF weibo" style="width:118px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"> 微博登陆</a>
                </span>
            </div>


        </div>

    </div>
</template>

<script>
    import closeButton from '../closeButton.vue';//关闭拟态框按钮组件


    export default {
        name: "login",
        components: {
            closeButton,
        },
        data() {
            return {
                username: '',
                passwd: ''
            }
        },
        methods: {
            register() {
                this.$store.commit('changeModal','register');
            },
            repasswd() {
                this.$store.commit('changeModal','repasswd');
            },

            /**
             * 用户登录
             */
            userLogin() {
                let data = {
                    username: this.username,
                    passwd: this.passwd
                };

                let thisObj = this;

                this.axios.post('user/login', data).then(function (response) {
                    // console.log(response);
                    if (response.data.status === '01') {
                        let userInfo = {
                            'id': response.data.id,
                            'username': thisObj.username,
                            'avatar': response.data.avatar,
                        };
                        thisObj.$store.commit('changeUserInfo', userInfo);
                        thisObj.$store.commit('changeModal');
                        thisObj.$router.go(0);
                    }

                }).catch(function (error) {
                    console.log(error);
                });

            }
        }
    }
</script>

<style scoped>

</style>