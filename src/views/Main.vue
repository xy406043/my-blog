<template>
  <div class="main">
    <div v-if="localRoute!=='boot'" class="left"><Left></Left></div>
      <router-view :class="localRoute!=='boot'?'middle':''"></router-view>
    <div v-if="localRoute!=='boot'" class="right">1212</div>
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
      localRoute:""
    };
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.localRoute=to.name
      console.log(vm.localRoute)
    })
  },
  beforeRouteUpdate(to,from,next){
    this.localRoute = to.name
    console.log("2",this.localRoute)
    next()
  }
};
</script>

<style lang="less" scoped>
.main{
  height: 100%;
  position: relative;
}
.left{
  float:left;
  height: 100%;
  width: 300px;
}
.middle{
  height: 100%;
  margin: 0 300px;
}
.right{
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
}
.main::after{
  content:'';
  display: block;
  clear: both;
}
</style>