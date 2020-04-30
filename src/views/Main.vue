<template>
  <div class="main">
    <div v-if="localRoute!=='boot'" class="left">
      <Left></Left>
    </div>
    <div style="height:100%;width:100%">
      <!-- <div v-if="localRoute!=='boot'" class="main-top"></div> -->
    <router-view :class="localRoute!=='boot'?'middle':''"></router-view>
    </div>
    <!-- 右边广告区域？ -->
    <div v-if="localRoute!=='boot'" class="right"></div>
    <!-- 预备备博客抽屉效果，抽屉传值使用bus兄弟组件之间传值 -->
    <div v-if="localRoute!=='boot'" class="drawer">
       
    </div>
  </div>
</template>

<script>
import Left from "../components/layout/Left";
export default {
  name: "",
  components: {
    Left
  },
  data() {
    return {
      localRoute: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.localRoute = to.name;
      // console.log(vm.localRoute);
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.localRoute = to.name;
    // console.log("2", this.localRoute);
    next();
  }
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  position: relative;
}
.left {
  float: left;
  height: 100%;
  width: 250px;
}
.middle {
  height: 100%;
  margin: 0 300px;
}
.right {
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background: cornsilk;
}
.main::after {
  content: "";
  display: block;
  clear: both;
}
.main-top{
  height: 300px;
  background: burlywood;
}
// 抽屉效果
.drawer{

}
</style>