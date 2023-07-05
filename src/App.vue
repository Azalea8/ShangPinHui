<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue";

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  },
  created() {
    // 数据统一请求，避免路由组件多次请求数据
    this.$store.dispatch('home/categoryList')
    this.$store.dispatch('home/bannerList')
  }
}
</script>

<style>

</style>
