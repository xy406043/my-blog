<template>
  <div>
    <div
      v-for="(item,index) in telList"
      class="showList"
      :key="index"
      @click="toHome(index)"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      telList: [1, 2, 3, 4]
    };
  }
};
</script>

<style lang="less" scoped>
.showList:hover {
  cursor: pointer;
}
</style>