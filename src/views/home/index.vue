<template>
    <div class="home">
      <!-- 首页头部 -->
      <home-header></home-header>
      <!-- 首页内容 -->
      <router-view></router-view>
      <!-- 首页底部 -->
      <home-footer></home-footer>
    </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
