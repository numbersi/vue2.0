<template>
  <div class="nav">
    <div class="img">
      <img src="./img/logo.png" alt />
    </div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="transparent"
      text-color="#fff"
      :collapse="isCollapse"
      active-text-color="#639FB5"
      router
    >
      <template v-for="(item,index) in router">
        <!--template在遍历的时候不会显示出来 -->
        <el-submenu :key="index" :index="index + ''" v-if="!item.hidden">
          <template slot="title">
            <!-- 一级菜单 -->
            <i :class="item.meta.icon" style="color:#fff"></i>
            <span slot="title">{{item.meta.name}}</span>
          </template>

          <!-- 子菜单 -->

          <el-menu-item-group>
            <template v-for="(subItem,index) in item.children">
              <el-menu-item
                :key="index"
                v-if="!subItem.hidden"
                :index="subItem.path"
              >{{subItem.meta.name}}</el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
    <svg-icon />
  </div>
</template>

<script>
import  { mapState} from 'vuex'
export default {
  data(){
    return{
      router:this.$router.options.routes,
    }
  },
  computed:{
    ...mapState('app',['isCollapse']),
    defaultActive(){
      const { path } = this.$route;
      return path;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss";
.nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: $menuWidth;
  background-color: #3d6b8c;
  z-index: 999;
  .img {
    width: $menuWidth;
    height: 150px;
    img {
      margin: auto;
      display: block;
      width: 150px;
      height: 150px;
    }
  }
  svg {
    font-size: 20px;
    margin-right: 10px;
  }
}
.open {
  .nav {
    width: $menuWidth;
    @include webkit(transition, all 0.3s ease 0s); //scss自定义样式函数
    .img {
      width: $menuWidth;
      height: 150px;
      @include webkit(transition, all 0.4s ease 0s); //scss自定义样式函数
      img {
        margin: auto;
        display: block;
        width: 150px;
        height: 150px;
      }
    }
  }
}
.close {
  .nav {
    width: $menuMinWidth;
    @include webkit(transition, all 0.4s ease 0s); //scss自定义样式函数
    .img {
      width: $menuMinWidth;
      height: $menuMinWidth;
      @include webkit(transition, all 0.4s ease 0s); //scss自定义样式函数
      img {
        margin: auto;
        display: block;
        width: $menuMinWidth;
        height: $menuMinWidth;
      }
    }
  }
}
</style>


