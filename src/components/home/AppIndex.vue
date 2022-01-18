<template>
  <div>
    <side-menu></side-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import SideMenu from "./SideMenu";

export default {
  name: "AppIndex",
  components: {SideMenu},
}
</script>

<style scoped>

</style>
