<template>
  <div></div>
</template>

<script>
import { articleApi } from "@/api";
export default {
  data() {
    return {
      telList: []
    };
  },
  mounted() {
    this.getGroupList();
    this.getTagsList();
  },
  methods: {
    getGroupList() {
      articleApi.getGroupList().then(res => {});
    },
    getTagsList() {
      articleApi.getTags().then(res => {});
    }
  }
};
</script>

<style lang="less" scoped>
.showList:hover {
  cursor: pointer;
}
</style>