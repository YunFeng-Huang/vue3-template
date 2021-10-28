<template>
  <template v-for="(item, index) in menuList" :key="index">
    <el-sub-menu
      v-if="item.children?.length > 0"
      :index="item.deep"
      :popper-append-to-body="true"
      :class="`
      ${item.deep == deep ? 'collapse-title-active' : ''}
      v-deep${dep}
   `"
    >
      <template #title> <v-title :item="item" :hiddenIcon="dep > 0"></v-title></template>
      <my-nav :menuList="item.children" :dep="dep + 1"></my-nav>
    </el-sub-menu>
    <el-menu-item :index="item.deep" :class="`v-deep${dep}`" v-else>
      <i class="el-icon-menu" :class="{ hidden: dep > 0 }"></i>
      <template #title>
        <v-title :item="item" :hiddenIcon="true"></v-title>
      </template>
    </el-menu-item>
  </template>
</template>

<script lang="ts">
import vTitle from "./dynamic-menu-title.vue";
import { computed, defineComponent, onMounted } from "vue";
import store from "@/store";
export default defineComponent({
  name: "my-nav",
  props: {
    menuList: Array,
    dep: Number,
  },
  components: {
    vTitle,
  },

  setup(props) {
    const menuList = props.menuList as any;
    const deep = computed(() => store.getters["permission/deepActive"]);
    onMounted(() => {
      console.log(deep.value, "deep");
    });
    return {
      menuList,
      deep,
    };
  },
});
</script>

<style scoped></style>
