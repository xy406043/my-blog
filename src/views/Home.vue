<template>
<!-- 样式设计 -->
  <div class="home-con">
    sas
   
  </div>
</template>

<script>
import { articleApi } from "@/api";
export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
        articleList:[]
    }
  },
  mounted(){
    this.getArticleList()
  },
  methods:{
    getArticleList(){
      articleApi.getArticleList().then(res => {
         if(res.code===0){
           this.articleList = res.result
         }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home-con{
  background: cadetblue;
  height: 100%;
  
}
</style>