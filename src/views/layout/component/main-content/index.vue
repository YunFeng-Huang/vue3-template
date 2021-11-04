<template>
  <div class="main-content-wrap">
    <v-top-aside />
    <div class="main-content">
      <v-content />
    </div>
  </div>
</template>
<script>
import VTopAside from "./top-aside.vue";
import VContent from "./content.vue";
export default {
  components: {
    VTopAside,
    VContent,
  },
};
</script>

<style lang="scss" scoped>
.main-content-wrap {
  flex: 1;
}
.main-content {
  height: calc(100% - 50px);
}
</style>
