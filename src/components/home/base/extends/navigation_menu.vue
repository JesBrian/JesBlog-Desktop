<template>
    <!-- 导航栏部分 -->
    <nav class="glass-Bg box-show" style="width:100%; height:60px; position:fixed; z-index:555; box-sizing:border-box; border-radius:0;">
        <div style="width:1234px; height:100%; margin:0 auto; line-height:60px; position:relative;">

            <!-- LOGO -->
            <router-link to="/" style="width:108px; height:48px; display:inline-block; vertical-align:middle; position:relative;">
                <img v-lazy="'http://localhost/JesBlog-Backstage/web/img/logo.png'" style="width:40px; margin-right:8px;">
                <span style="font-size:26px; margin-top:-8px; position:absolute; color:#22e8ff; text-shadow:1.5px 1.5px 6px #30cdff;">简记</span>
            </router-link>

            <!-- 菜单 -->
            <ul id="navMenu">
                <li><a href="#">IntelliJ IDEA</a>
                    <ul class="submenu box-show">
                        <li><a href="#">Submenu a</a></li>
                        <li><a href="#">Submenu b</a></li>
                        <li><a href="#">Submenu c</a></li>
                        <li><a href="#">Submenu d</a></li>
                    </ul>
                </li>
                <li><a href="#">PhpStorm</a>
                    <ul class="submenu box-show">
                        <li><a href="#">Submenu a</a></li>
                        <li><a href="#">Submenu b</a></li>
                        <li><a href="#">Submenu c</a></li>
                        <li><a href="#">Submenu d</a></li>
                    </ul>
                </li>
                <li><a href="#">WebStorm</a>
                    <ul class="submenu box-show">
                        <li><a href="#">Submenu a</a></li>
                        <li><a href="#">Submenu b</a></li>
                        <li><a href="#">Submenu c</a></li>
                        <li><a href="#">Submenu d</a></li>
                    </ul>
                </li>
                <li><a href="#">DataGrip</a>
                    <ul class="submenu box-show">
                        <li><a href="#">Submenu a</a></li>
                        <li><a href="#">Submenu b</a></li>
                        <li><a href="#">Submenu c</a></li>
                        <li><a href="#">Submenu d</a></li>
                    </ul>
                </li>
                <li><a href="#">Rider</a>
                    <ul class="submenu box-show">
                        <li><a href="#">Submenu a</a></li>
                        <li><a href="#">Submenu b</a></li>
                        <li><a href="#">Submenu c</a></li>
                        <li><a href="#">Submenu d</a></li>
                    </ul>
                </li>
            </ul>


            <!-- 登录注册 -->
            <div id="navMenuUser" style="width:48px; height:45px; margin-top:7px; margin-left:28px; position:relative; float:right;">
                <span @click="loginRegister" class="superButton-Out" style="width:100%; height:100%;">
                    <img class="superButton-In" v-if="this.$store.state.userInfo.id !== '0'" v-lazy="'http://localhost/JesBlog-Backstage/web/upload/avatar/' + this.$store.state.userInfo.id + '-' + this.$store.state.userInfo.username + '.jpg'" style="width:36px; height:34px;"/>
                    <a class="superButton-In MyIF administrators-1" v-else style="width:36px; height:34px; line-height:35px!important; font-size:28px;"></a>
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
                                <router-link to="/management">
                                    <i class="MyIF add-data"></i> 文章管理
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

            <!-- 搜索框 -->
            <div id="navSearchForm" style="width:48px; height:45px; margin-top:7px; padding:0; position:relative; float:right;">
                <input type="text" placeholder=" 搜索一下, 更加精彩 " style="width:0; height:30px; top:9px; left:10px; padding:0; position:absolute; border:none!important; background:#444; color:#DDD;">
                <span class="superButton-Out" style="width:100%; height:100%;">
                    <a class="superButton-In MyIF search"></a>
                </span>
            </div>

        </div>
    </nav>
</template>

<script>
    export default {
        name: "navigation_bar",
        data() {
            return {
            }
        },
        methods: {
            /**
             * 用户登录 OR 注册
             */
            loginRegister() {
                if (this.$store.state.userInfo.username === '') {
                    this.$store.commit('changeModal','login');
                } else {
                    this.$router.push({path: '/author/' + this.$store.state.userInfo.id});
                }
            },

            /**
             * 用户退出登录
             */
            logout() {
                this.$store.commit('changeUserInfo',{
                    id: '0',//用户ID
                    username: '',//用户姓名
                    avatar: '',//用户头像
                });
                this.$router.push({path: '/'});
            }
        }
    }


</script>

<style scoped>
    #navMenu {
        position: absolute;
        top: 1px;
        left: 138px;
    }

    #navMenu, #navMenu ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    #navMenu {
        height: 38px;
    }

    #navMenu li {
        min-width: 100px;
        max-width: 150px;
    }

    #navMenu > li {
        display: block;
        float: left;
        position: relative;
    }

    #navMenu a {
        color: #777;
        display: block;
        font-size: 18px;
        line-height: 54px;
        padding: 0 18px;
        text-align: center;
        text-decoration: none;
    }

    /* onhover styles */
    #navMenu > li:hover {
        background: linear-gradient(#1c1c1c, #1b1b1b);
        box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3);
    }

    #navMenu > li:hover > a {
        color: #EEE;
    }

    /* submenu styles */
    .submenu {
        left: 0;
        max-height: 0;
        position: absolute;
        top: 100%;
        z-index: 0;
        perspective: 400px;
        width: 100%;
    }

    .submenu > li {
        width: 100%;
        background: linear-gradient(#1c1c1c, #1b1b1b);
        transform: rotateY(90deg);
        transition: opacity .4s, transform .5s;
    }

    .submenu > li > a {
        border: 3px solid #444;
        line-height: 38px !important;
        padding: 0 8px !important;
        font-size: 14px !important;
        border-top: 1px solid #222;
        border-bottom: 1px solid #222;
    }

    .submenu > li:last-child > a {
        border-radius: 0 0 5px 5px;
    }

    #navMenu .submenu li:hover a {
        border-left: 3px solid #14AAFF;
        border-right: 3px solid #14AAFF;
        background: #333;
        color: #57D7E1;
    }

    #navMenu .submenu li:last-child {
        border-radius: 0 0 5px 5px;
    }

    #navMenu > li:hover .submenu, #navMenu > li:focus .submenu {
        max-height: 150px;
        z-index: 10;
    }

    #navMenu > li:hover .submenu li, #navMenu > li:focus .submenu li {
        opacity: 1;
        transform: none;
    }

    /* CSS3 delays for transition effects */
    #navMenu li:hover .submenu li:nth-child(1) {
        transition-delay: 0s;
    }

    #navMenu li:hover .submenu li:nth-child(2) {
        transition-delay: 50ms;
    }

    #navMenu li:hover .submenu li:nth-child(3) {
        transition-delay: 100ms;
    }

    #navMenu li:hover .submenu li:nth-child(4) {
        transition-delay: 150ms;
    }

    #navMenu li:hover .submenu li:nth-child(5) {
        transition-delay: 200ms;
    }

    #navMenu li:hover .submenu li:nth-child(6) {
        transition-delay: 250ms;
    }

    #navMenu li:hover .submenu li:nth-child(7) {
        transition-delay: 300ms;
    }

    #navMenu li:hover .submenu li:nth-child(8) {
        transition-delay: 350ms;
    }

    .submenu li:nth-child(1) {
        transition-delay: 350ms;
    }

    .submenu li:nth-child(2) {
        transition-delay: 300ms;
    }

    .submenu li:nth-child(3) {
        transition-delay: 250ms;
    }

    .submenu li:nth-child(4) {
        transition-delay: 200ms;
    }

    .submenu li:nth-child(5) {
        transition-delay: 150ms;
    }

    .submenu li:nth-child(6) {
        transition-delay: 100ms;
    }

    .submenu li:nth-child(7) {
        transition-delay: 50ms;
    }

    .submenu li:nth-child(8) {
        transition-delay: 0s;
    }

    #navSearchForm {
        transition: all 2s;
    }

    #navSearchForm:hover {
        width: 262px !important;
    }

    #navSearchForm > input {
        transition: all 2s;
        z-index:5;
    }

    #navSearchForm:hover > input {
        width:186px !important;
        padding:0 8px !important;
    }

    #navSearchForm .superButton-In {
        width:36px; height:34px; left:auto; right:-12.3px!important; line-height:35px!important; font-size:26px;
    }



    #navMenuUser > div {
        display:none;
    }
    #navMenuUser:hover > div {
        display:block;
    }
    #navMenuUser li {
        width:100%; height:30px; margin:4px 0; box-sizing:border-box;
    }
    #navMenuUser li a {
        color:#AAA;
    }
    #navMenuUser li:hover {
        background: #333;
        box-shadow: inset 0 0 0 1px #222, 0 0 0 1px lightseagreen;
    }
    #navMenuUser li:hover a {
        color:#EEE;
    }
    #navMenuUser li:hover i.MyIF {
        color:#2DBEFF;
    }
</style>
