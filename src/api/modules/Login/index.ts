import api from "./api";
import requset from "@/api/requset";
import requsetUrl from "../../utils/requsetUrl";


let login = async (params: any) => {
    const data = await requset({
        url: requsetUrl(api["login"]),
        method: "post",
        data: params,
    });
    console.log(data, 'data')
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
