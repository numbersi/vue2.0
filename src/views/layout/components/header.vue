<template>
  <div class="header">
    <div class="pull-left meun">
      <img src="./img/menu .png" alt @click="changeStatus" />
    </div>

    <div class="right">
      <div class="user-info">
        <img src="./img/avater.jpg" alt />
      </div>
      <p>{{user_Name}}</p>
      <div class="logout">
        <img src="./img/logout.png" alt @click="logout" />
      </div>
    </div>
  </div>
</template>

<script>
import { getCookie, removeCookie, removeUsername } from "@/utils/cookie";
import store from "@/store/index";
import { reactive, ref, onMounted, computed } from "@vue/composition-api";
import {mapState} from 'vuex'

export default {
  data(){
    return{
       
    }
  },
  computed:{
     ...mapState('app',['user_Name'])
  },
  methods:{
    logout(){
       this.$confirm("确定要退出吗", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          center: true
        })
        .then(() => {
          removeCookie(); //清除token
          removeUsername(); //清除用户名
          store.commit("app/SET_TOKEN", ""); //清除store 里面的token
          store.commit("app/SET_USERNAME", ""); //清除store 里面的username
          store.commit("promission/SET_ROLES", []); //清除promission 里面的角色
          this.$message.success("退出成功");
          this.$router.push("/login");
        })
        .catch(() => {});
    },
    changeStatus(){
       this.$store.commit("app/SET_COLLAPSE");
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss";
.header {
  position: fixed;
  top: 0;
  left: $menuWidth;
  height: 75px;
  z-index: 999;
  width: 100vw;
  background-color: #fff;
  @include webkit(box-shadow, 0 3px 16px 0 rgba(0, 0, 0, 0.1));
  @include webkit(transition, all 0.3s ease 0s); //scss自定义样式函数
  .meun {
    height: 75px;
    img {
      margin: 20px;
      display: block;
      width: 35px;
      height: 35px;
      cursor: pointer;
    }
  }
  .right {
    position: fixed;
    top: 0;
    right: 0;
    float: right;
    display: flex;
    height: 75px;
    .user-info {
      height: 75px;
      img {
        margin: 10px;
        display: block;
        width: 55px;
        height: 55px;
        border-radius: 50%;
      }
    }
    p {
      line-height: 75px;
      font-size: 16px;
      font-weight: bold;
      margin-right: 50px;
    }

    .logout {
      img {
        display: block;
        margin: 22px;
        width: 30px;
        height: 30px;
        margin-right: 70px;
        cursor: pointer;
      }
    }
  }
}
.open {
  .header {
    left: $menuWidth;
  }
}
.close {
  .header {
    left: $menuMinWidth;
  }
}
</style>


