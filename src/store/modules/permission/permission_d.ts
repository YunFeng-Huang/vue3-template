import { RouteRecordRaw } from "vue-router";

export interface SETTINGSTATETYPE {
  menuList?: any[];
  crumbList?: string[]
  token: string,
  deepActive: string,
  permissionList: string[],
  localRouter: {},
  merchantUserModel: any
}
export enum MUTATIONTYPES {
  SETROUTERS = "SETROUTERS",
  SETCRUBLIST = "SETCRUBLIST",
  LOGIN = 'LOGIN',
  LOGOUT = "LOGOUT",
  GETPERMISSTIONLIST = "GETPERMISSTIONLIST",
  SETVALUE = "SETVALUE",
  SETLOCALROUTER="SETLOCALROUTER"
}
export interface PARAMS {
  key: string,
  value: any
}