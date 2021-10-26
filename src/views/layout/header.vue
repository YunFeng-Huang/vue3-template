<template>
  <header class="header-app">
    <div class="header-right">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="merchantUserModel?.logoUrl" alt="" class="header-right-login" />
          {{ merchantUserModel?.username || "用户名，欢迎回来" }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
            <!-- <el-dropdown-item @click="resetPass">忘记密码</el-dropdown-item> -->
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
  <!-- <v-reset ref="reset"></v-reset> -->
</template>

<script lang="ts">
import VReset from "./dialog/reset.vue";
import store  from "@/store";
import {
  computed,
  defineComponent,
  getCurrentInstance,
  onMounted,
  onUpdated,
  reactive,
  ref,
  nextTick,
} from "vue";
export default defineComponent({
  setup(props, ctx) {
    const { proxy }: any = getCurrentInstance();
    let formInline = reactive({
      region: "",
      loading: false,
      options: [],
    });
    let merchants = ref([]);
    const remoteMethod = (query) => {
      console.log(query);
      let newarr;
      if (query !== "") {
        newarr = merchants.value.filter((item) => {
          return item.merchantName.includes(query);
        });
      } else {
        newarr = merchants.value;
      }
      formInline.options = newarr;
    };
    const merchantUserModel = store.getters["permission/merchantUserModel"];
    const loginOut = async (val: string) => {
      // await store.dispatch("permission/" +  PERMISSION.LOGOUT);
    };
    const resetPass = async (val: string) => {
      // proxy.$refs.reset.password = true;
    };
    const change = async () => {
      
     
    };
    const changeMerchant = async (userId) => {
     
    };
  
    onMounted(() => {
     
    });
    return {
      loginOut,
      resetPass,
      formInline,
      merchants,
      remoteMethod,
      change,
      merchantUserModel,
      changeMerchant,
    };
  },
  components: { VReset },
});
</script>

<style lang="scss" scoped>
.demo-form-inline {
  padding-top: 5px;
  margin-left: 10px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;

  .userImg {
    vertical-align: middle;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    margin-right: 6px;
  }
}

.el-icon-arrow-down {
  font-size: 12px;
}
::v-deep(.el-form-item__label) {
  color: #fff;
}
.header-app {
  background: #212844;
  color: #fff;
  position: relative;
  z-index: 100;
  height: 50px;
  p {
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;

    img.header-img,
    span {
      vertical-align: middle;
      margin-right: 10px;
      height: 40px;
    }
    img.header-img {
      max-height: 30px;
    }
  }
}

.header-right {
  position: absolute;
  right: 30px;
  top: 0px;
  display: flex;
  align-items: center;
  height: 50px;
  &-login {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    vertical-align: middle;
  }
}

.password {
  .dialog-footer {
    text-align: center;
  }
}
</style>
