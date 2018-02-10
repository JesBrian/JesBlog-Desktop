<template>
    <!-- PC端后台主页 -->
    <div style="width:100%; height:100%; top:0; left:0; position:fixed;">

        <!-- 导航栏部分 -->
        <nav class="glass-Bg box-show" style="width:100%; height:56px; position:fixed; z-index:99; box-sizing:border-box; border-radius:0;">
            <div style="width:1234px; height:100%; margin:0 auto; line-height:60px; position:relative;">

                <!-- LOGO -->
                <router-link to="/" style="width:108px; height:48px; display:inline-block; vertical-align:middle; position:relative;">
                    <img v-lazy="'/src/assets/images/logo.png'" style="width:40px; margin-right:8px;">
                    <span style="font-size:26px; margin-top:-8px; position:absolute; color:#22e8ff; text-shadow:1.5px 1.5px 6px #30cdff;">简记</span>
                </router-link>


                <!-- 登录注册 -->
                <div id="navMenuAdmin" style="width:48px; height:45px; margin-top:4px; margin-right:68px; position:relative; float:right;">
                    <span class="superButton-Out" style="width:100%; height:100%;">
                        <img class="superButton-In" :src="'http://localhost/JesBlog-Backstage/web/upload/avatar/' + this.$store.state.userInfo.id + '-' + this.$store.state.userInfo.username + '.jpg'" style="width:36px; height:34px;"/>
                    </span>

                    <div style="top:40px; left:-55%; position:absolute;">
                        <div v-if="this.$store.state.userInfo.id !== '0'" class="s1c-Bg box-show" style="width:100px; margin-top:10px; padding:0 4px; text-align:center; line-height:30px;">
                            <ul>
                                <li>
                                    <router-link :to="'/author/' + this.$store.state.userInfo.id">
                                        <i class="MyIF home"></i> 个人信息
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/update">
                                        <i class="MyIF gears"></i> 修改资料
                                    </router-link>
                                </li>
                                <li @click="logout">
                                    <a>
                                        <i class="MyIF exit-1"></i> 安全退出
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- 左侧手风琴菜单栏 -->
        <div id="leftMenu" class="glass-Bg box-show" style="width:188px; height:100%; top:0; left:0; padding:60px 0 30px; box-sizing:border-box; position:fixed; z-index:9;">
            <div style="width:100%; height:100%; overflow-y:auto; color:#DDD;">
                sxdcftvgyuhnjimk,<h1>fcvgbhn</h1> overflow-y:scroll;
                sxdcftvgyuhnjimk,<h1>fcvgbhn</h1>
                sxdcftvgyuhnjimk,<h1>fcvgbhn</h1>
                sxdcftvgyuhnjimk,<h1>fcvgbhn</h1>
                sxdcftvgyuhnjimk,<h1>fcvgbhn</h1>
            </div>
        </div>

        <!-- 中心 & 右侧内容 -->
        <div class="s1c-Bg" style="width:100%; height:100%; top:0; right:0; position:fixed; padding:63px 8px 35px 195px; box-sizing:border-box; z-index:5;">
            <div class="glass-Bg" style="width:100%; height:100%; overflow:auto; color:#DDD; background:lightcoral; position:relative;">
                <router-view></router-view>
            </div>
        </div>

        <!-- 底部信息条 -->
        <footer class="glass-Bg box-show3">
            © 2015 - 2020  &nbsp;&nbsp;&nbsp;Music House 所有版权归 JesBrian 个人所有
        </footer>
    </div>
</template>

<script>


    export default {
        name: "frame",
        components: {

        },

        data() {
            return {
            }
        },

        beforeCreate() {
            if (this.$store.state.userInfo.id === '0') {
                this.$router.push({path: '/'});
            }
        },

        methods: {
            /**
             * 后台管理员退出登录
             */
            logout() {
                this.$store.commit('changeUserInfo',{
                    id: '0',//用户ID
                    username: '',//用户姓名
                    avatar: '',//用户头像
                });
                this.$router.push({path: '/'});
            },
        }
    }
</script>

<style scoped>
    /**
     * 主页主体部分
     */
    #mainBody {
        width: 100%;
        margin-bottom: 38px;
        padding-top: 108px;
        position: relative;
    }



    #navMenuAdmin > div {
        display:none;
    }
    #navMenuAdmin:hover > div {
        display:block;
    }
    #navMenuAdmin li {
        width:100%; height:30px; margin:4px 0; box-sizing:border-box;
    }
    #navMenuAdmin li a {
        color:#AAA;
    }
    #navMenuAdmin li:hover {
        background: #333;
        box-shadow: inset 0 0 0 1px #222, 0 0 0 1px lightseagreen;
    }
    #navMenuAdmin li:hover a {
        color:#EEE;
    }
    #navMenuAdmin li:hover i.MyIF {
        color:#2DBEFF;
    }


    footer {  width:100%; height:28px; bottom:0; margin:0; padding:0 68px; box-sizing:border-box; border-radius:0; position:fixed; z-index:99; font-size:15px; color:#30CDFF; text-shadow:1px 1px 1px; line-height:28px; text-align:right;  }

</style>
