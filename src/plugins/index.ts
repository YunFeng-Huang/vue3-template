import { App } from 'vue'
import axios from "@/api";
import ElementPlus, { ElMessage } from "element-plus";
import 'element-plus/dist/index.css';
import '@/assets/font/iconfont.scss'

// import { installComponents } from './components'

export function install(app: App): App {
    app.config.globalProperties.$api = axios;
    app.config.globalProperties.$message = ElMessage;
    app.use(ElementPlus);
  //全局组件注入
  // installComponents(app)
  return app
}
