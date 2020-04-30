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
    <!-- 分类区域 -->
    <div class="row-center option  flex-row option" @click="toHome"><img class="link-img mr-10 option" src="../../assets/icon/home.png" />首页</div>
    <div class="group-con row-center flex-row option mt-20" @click="toGroup">
      <img class="link-img mr-10 option" src="../../assets/icon/group.png" />
      <div class=" group-title row-center option">分类</div>
      <!-- <div class="flex-feel">
          <div v-for="item in groupList" :key="item._id" class="every-group ml-10 mr-10">{{item.name}}</div>
      </div> -->

    </div>
    <!-- 标签云 区域 -->
    <div class="tag-con mt-20 row-center flex-row option " @click="toTag">
      <img class="link-img mr-10 option" src="../../assets/icon/tag.png" />
      <div class="tag-title row-center option">标签</div>
      <!-- <div class="flex-feel">
        <div v-for="item in tagList" :key="item._id" class="every-tag ml-10 mr-10">{{item.name}}</div>
      </div> -->
    </div>
    <div class="row-center option mt-20 option" @click="toArchive">
      <img class="link-img mr-10 option" src="../../assets/icon/archive.png" />归档</div>
    <!-- 留言区域 -->
    <div class="row-center option mt-20 flex-row option" @click="toComment"><img class="link-img mr-10 option" src="../../assets/icon/yan.png" />留言</div>
  </div>
</template>

<script>
import { articleApi } from "@/api";
export default {
  data() {
    return {
      telList: [],
      groupList:[],
      tagList:[]
    };
  },
  mounted() {
    this.getGroupList();
    this.getTagsList();
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
    toGroup(){
      this.$router.push({
        name:"group"
      })
    },
    toHome(){
        this.$router.push({name:"home"})
    },
    toTag(){
      this.$router.push({name:"tags"})
    },
    toArchive(){
      this.$router.push({name:"archive"})
    },
    toComment(){
      this.$router.push({name:"comment"})
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
</style>