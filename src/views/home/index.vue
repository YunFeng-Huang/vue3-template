<template>
  <div class="head">
      <span class="auth">管理员</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    setTimeout(() => {
      this.list = [
        {
          id: "11",
          name: "11",
          age: "11",
        },
      ];
    }, 1000);
  },
};
</script>
