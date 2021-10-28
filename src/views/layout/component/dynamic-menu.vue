<template>
  <el-sub-menu
    v-for="(item, index) in menuList"
    :index="item.deep"
    :key="index"
    :popper-append-to-body="true"
    :popper-class="
      item.children == null || item.children.length == 0 ? 'no-children-popper' : ''
    "
    :class="`
      ${item.children == null || item.children.length == 0 ? 'no-children' : ''}
      ${item.deep == deep ? 'collapse-title-active' : ''}
      v-deep${dep}
   `"
  >
    <template #title><v-title :item="item"></v-title></template>
    <my-nav
      v-if="item.children && item.children.length > 0"
      :menuList="item.children"
      :dep="dep + 1"
    ></my-nav>
  </el-sub-menu>
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
