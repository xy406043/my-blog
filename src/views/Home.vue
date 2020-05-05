<template>
<!-- 样式设计 -->
  <div class="home-con">
    <!-- 搜索 -->
    <div class="input-con">
      <!-- <div class="mr-20">搜索:</div> -->
      <div style="position:relative" >
         <input class="input" v-model="inputContent" @keyup.enter="getArticleList" >
          <!-- <img class="show-search" src ="http://xynagisa.xyz/搜索--1_1588224297965.png" /> -->
          <img @click="getArticleList" class="show-search" src ="http://xynagisa.xyz/search1_1588224534202.png" />
     </input>
     </div>
    </div>
    
    <!-- 展示，按所有的时间顺序 -->
    <div class="show-main-con">
         <div v-for="item in articleList" :key="item._id" class="every-con" >
              {{item.title}}
         </div> 
    </div>
   
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
        articleList:[],
        inputContent:"",
        currentPage:1,
        pageSize:10
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
    },
    showValue(val){
      console.log("sas",this.inputContent)
    }
  }
}
</script>

<style lang="less" scoped>
.home-con{
  background: rgb(170, 221, 223);
  height: 100%;
  padding:30px;
  box-sizing:border-box;   // 解决外层设置浮动后本层使用padding-top 本层高度会变高的问题
  border: 1px dashed gainsboro;
}
.input-con{
  margin-bottom:30px;
  display: flex;
  align-items: center;
}
.input{ 
  width: 200px;
  height: 16px;
  border-radius: 19px;
  padding: 12px;
  outline:none;
  border: none;
  padding-right: 40px;
  position: relative;
}
.input:focus{
  border: none;
  box-shadow: 0 0 0 rgba(1,2,2,0);
}
.show-search{
  position: absolute;
  height: 20px;
  width: 20px;
  top: 10px;
  right: 10px;
  z-index:1;
  cursor: pointer;
}
.show-search:active{
 transform: scale(1.1);
 opacity: 0.8;
}
</style>