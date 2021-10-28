import api from "./api";
import requset from "@/api/requset";
import requsetUrl from "../../utils/requsetUrl";


let login = (params: any) => {
  const data = requset({
    url: requsetUrl(api["login"]),
    method: "post",
    data: params,
  });
  return data;
};
let logout = (params: any) => {
  return requset({
    url: requsetUrl(api["logout"]),
    method: "post",
    data: params,
  });
};

export default {
  login,
  logout,
};
