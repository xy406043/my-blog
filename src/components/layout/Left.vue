<template>
  <div class="left-container">
    <!-- 个人区域 -->
    <div class="main-top flex-column">
      <div class="avatar-con mt-20 row-center">
        <img class="avatar" src="http://xynagisa.xyz/C21E084C2583E2980ACCF6DC4938BAA3.jpg" />
      </div>
      <div class="font-con ">
        <div class="name row-center">xynagisa</div>
        <div class="row-center font-16">"勇敢者箴言"</div>
        <div class="ref-link flex-all-center">
          <a href="http://my.xynagisa.xyz" target="_blank">
          <img class="link-img mr-20 option" src="../../assets/icon/my.png" />
          </a>
          <a href="https://github.com/xy406043" target="_blank">
          <img class="link-img option" src="../../assets/icon/github.png" />
          </a>
          <a href="http://pim.xynagisa.xyz" target="_blank">
          <img class="link-img ml-20 option" src="../../assets/icon/project.png" />
          </a>
        </div>
      </div>
    </div>
   
    <div v-for="item in routeList" :key="item.name" @click="toRoute(item.name)" :class="['row-center', 'option', 'mt-20', 'option',localRoute===item.name?'local-active':'']">
      <img class="link-img mr-10 option" :src="item.img" />{{item.title}}
    </div>
  </div>
</template>

<script>
import { articleApi } from "@/api";
export default {
  data() {
    return {
      routeList:[
        {title:"首页",name:"home",img:"http://xynagisa.xyz/home.png"},
        {title:"分类",name:"group",img:"http://xynagisa.xyz/group_1588217271047.png"},
        {title:"标签",name:"tags",img:"http://xynagisa.xyz/tag_1588217294694.png"},
        {title:"归档",name:"archive",img:"http://xynagisa.xyz/archive.png"},
        {title:"留言",name:"comment",img:"http://xynagisa.xyz/yan_1588217308181.png"},
      ],
      localRoute:"",
      telList: [],
      groupList:[],
      tagList:[],
    };
  },
  mounted() {
    this.getGroupList();
    this.getTagsList();
    this.$root.Bus.$on("localRoute",(msg)=>{
      console.log("localRoute",msg)
      this.localRoute=msg
    })
  },
  methods: {
    getGroupList() {
      articleApi.getGroupList().then(res => {
        this.groupList=res.result
      });
    },
    getTagsList() {
      articleApi.getTags().then(res => {
        this.tagList = res.result
      });
    },
    toRoute(name){
      this.$router.push({
        name:name
      })
    }
  }
};
</script>

<style lang="less" scoped>
.showList:hover {
  cursor: pointer;
}
.left-container {
  height: 100%;
  background: rgba(94, 96, 99, 0.993);
  color: white;
}
.main-top {
  // height: 300px;
  padding: 30px;
}
.avatar {
  height: 80px;
  width: 80px;
  border-radius: 50%;
}
.ref-link {
  height: 40px;
}
.link-img {
  height: 20px;
  width: 20px;
}
.group-con{
  padding: 0 20px;
}
.tag-con{
 padding: 0 20px;
}
.local-active{
  transform: scale(1.3);
  font-weight: border;
  font-family: 'Times New Roman', Times, serif;
}
</style>