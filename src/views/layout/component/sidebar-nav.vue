
<template>
    <el-menu
    :collapse="isCollapse"
    background-color="#304156"
    text-color="#eee"
    active-text-color="#4dbcff"
  >
    <DynamicMenu :menuList="menuList" ></DynamicMenu>
  </el-menu>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import store from '@/store';
import DynamicMenu from "./dynamic-menu.vue";

export default defineComponent({
  components: {
    DynamicMenu,
  },
  setup() {
    let a = ref(0);
     const menuList = computed(() => {
        a.value++;
       console.log(store.getters["permission/menuList"]);
      return store.getters["permission/menuList"];
    });
    const isCollapse = computed(() => store.getters["setting/collapse"]);
    
    return {
      isCollapse,
      menuList,
      a
    }
  },
})
</script>

<style lang="scss" scoped>

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

</style>