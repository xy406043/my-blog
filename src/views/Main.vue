<template>
  <div class="main">
    <div v-if="localRoute!=='boot'" class="left">
      <Left></Left>
    </div>
    <div style="height:100%;width:100%;box-sizing:border-box">
      <!-- <div v-if="localRoute!=='boot'" class="main-top"></div> -->
    <router-view :class="localRoute!=='boot'?'my-route middle ':'my-route'"></router-view>
    </div>
    <!-- 右边广告区域？ -->
    <div v-if="localRoute!=='boot'" class="right"></div>
    <!-- 预备备博客抽屉效果，抽屉传值使用bus兄弟组件之间传值 -->
    <div v-if="localRoute!=='boot'" class="drawer">
       
    </div>
  </div>
  <!-- 展示网站信息，如何进行网站布局 -->
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
       vm.$root.Bus.$emit("localRoute",to.name)
      // console.log(vm.localRoute);
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.localRoute = to.name;
    this.$root.Bus.$emit("localRoute",to.name)
    next();
  }
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  position: relative;
    background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588659088527&di=2c10aa38b5bb27deee5249137de64e40&imgtype=0&src=http%3A%2F%2Fimgs.aixifan.com%2Flive%2F1492592383991%2F1492592383991.jpg) ;
  background-size: 100% 100%;
  background-repeat: no-repeat ;
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
.my-route{
  box-sizing: border-box;
  // background-image: url(https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4197494290,1202979837&fm=175&app=25&f=JPEG?w=639&h=399&s=80516F36033366241AC1F8DD0300E0B1) ;
  background-size: 70% 100%;
  background-repeat: no-repeat ;
}
</style>