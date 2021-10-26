<template>
  <v-header></v-header>
  <div class="container">
    <div :class="{ navCollapsed: collapse }" class="container-main-w">
      <sidebarNav  :collapse="collapse" class="sidebar" />
      <mainContent />
    </div>
  </div>
</template>

<script lang="ts">
import sidebarNav from "./component/sidebar-nav.vue";
import vHeader from "./header.vue";
import mainContent from "./component/main-content/index.vue";
import { computed, defineComponent } from "vue";
import store from "@/store";
export default defineComponent({
  setup() {
    const collapse = computed(() => store.getters["setting/collapse"]);
   
    return {
      collapse,
    };
  },
  components: {
    sidebarNav,
    mainContent,
    vHeader,
  },
});
</script>

<style lang="scss" scoped>
.container {
  // margin-left: 200px;
  &-main-w{
    display: flex;
    height: calc(100vh - 50px);
  }
}
.left-slide {
  position: absolute;
  left: 0;
  transition: left 0.3s linear;
}
</style>
