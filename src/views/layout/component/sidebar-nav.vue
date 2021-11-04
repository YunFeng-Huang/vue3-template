<template>
  <div :class="`sidebar-container ${!isCollapse ? 'open' : 'close'}`">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        mode="vertical"
        :default-openeds="new_deep"
        :collapse="isCollapse"
        text-color="#7a80b4"
        unique-opened
      >
        <DynamicMenu :menuList="menuList" :dep="0"></DynamicMenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, onMounted, ref } from "vue";
import store from "@/store";
import DynamicMenu from "./dynamic-menu.vue";

export default defineComponent({
  components: {
    DynamicMenu,
  },
  setup() {
    const menuList = computed(() => {
      return store.getters["permission/menuList"];
    });
    const isCollapse = computed(() => store.getters["setting/collapse"]);
    const new_deep = computed(() => {
      const deep = store.getters["permission/deepActive"];
      return deep
        ?.split("-")
        .reduce((previousValue, currentValue, currentIndex, array) => {
          return [...previousValue, array.slice(0, currentIndex).join("-")];
        }, []);
    });
    const { proxy }: any = getCurrentInstance();
    // let activeMenu = ref("");
    // const geta = (list: []) => {
    //   list.map((v: { children: any; path: any; deep: string }) => {
    //     if (v.children) {
    //       geta(v.children);
    //     } else {
    //       if (v.path == proxy.$router.currentRoute.value.name) {
    //         activeMenu.value = v.deep;
    //       }
    //     }
    //   });
    // };
    onMounted(() => {
      console.log(new_deep.value, "new_deep");
      //   geta(menuList.value);
    });
    return {
      isCollapse,
      menuList,
      new_deep: new_deep,
    };
  },
});
</script>
<style lang="scss">
@import "@/styles/sidebar.scss";
// $backgroundColor: #b3c0d1;
// $subMenuActiveText: #f4f4f5;
// $subMenuBg: #1f2d3d;
// $subMenuHover: #001528;
$sideBarWidth: 210px;
$menuBg: #1b2a47;
$textColor: #fff;
$menuHover: #2a395b;
$menuBg1: #1b2a47;
$menuBg2: #1f2d3d;
$menuBg3: #1b2a47;
$menuBg4: #1b2a47;
@include merge-slider-style(
  $menuBg,
  $menuBg1,
  $menuBg2,
  $menuBg3,
  $menuBg4,
  $menuHover,
  $textColor,
  $sideBarWidth
);
</style>

<style lang="scss" scoped>
// .el-menu-vertical-demo:not(.el-menu--collapse) {
//   width: 200px;
//   min-height: 400px;
// }
</style>
