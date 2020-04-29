  <template >
  <div id="app">
    <router-view />
  </div>
</template>
<script >
export default {
  data() {
    return {
      route: ""
    };
  },
  mounted() {
    console.log(this.$router);
    this.route = this.$router.history.current.path;
  }
};
</script>

  <style lang="less">
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>
