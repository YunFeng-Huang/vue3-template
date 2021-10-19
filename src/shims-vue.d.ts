

// @ts-ignore: Unreachable code error
import { ElMessage, ElConfirm, ElAlert } from 'element-plus'
// import { apiType } from './api/index_d';
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: ElMessage,
    $alert: ElAlert,
    $confirm: ElConfirm,
    $api: any,
  }
}

// @ts-ignore: Unreachable code error
declare module 'nprogress'


declare global {
  interface ImportMeta {
    env: Record<string, unknown>;
  }
}