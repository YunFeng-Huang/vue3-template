import{r as c,o as d,c as m,q as e,p as i,w as r,v as t,u as h,s as u,t as f}from"./vendor.78f21d47.js";import{_ as v}from"./cloud.2f5c1094.js";var g="./assets/404.485340fb.png";const n={name:"Page404",data(){return{jumpTime:5,oops:"\u62B1\u6B49!",headline:"\u5F53\u524D\u9875\u9762\u4E0D\u5B58\u5728...",info:"\u8BF7\u68C0\u67E5\u60A8\u8F93\u5165\u7684\u7F51\u5740\u662F\u5426\u6B63\u786E\uFF0C\u6216\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u8FD4\u56DE\u9996\u9875\u3002",btn:"\u8FD4\u56DE\u9996\u9875",timer:0}},mounted(){this.timeChange()},beforeUnmount(){clearInterval(this.timer)},methods:{_jump(){this.$router.replace({path:"/login"})},timeChange(){this.timer=setInterval(()=>{this.jumpTime?this.jumpTime--:(this._jump(),clearInterval(this.timer))},1e3)}}},b=o=>(u("data-v-09c68b87"),o=o(),f(),o),j={class:"error-container"},x={class:"error-content"},I=b(()=>e("div",{class:"pic-error"},[e("img",{class:"pic-error-parent",src:g}),e("img",{class:"pic-error-child left",src:v})],-1)),C={class:"bullshit"},w={class:"bullshit-oops"},T={class:"bullshit-headline"},k={class:"bullshit-info"};function S(o,y,B,N,s,a){const l=c("el-col"),_=c("el"),p=c("el-row");return d(),m("div",j,[e("div",x,[i(p,{gutter:20},{default:r(()=>[i(l,{lg:12,md:12,sm:24,xl:12,xs:24},{default:r(()=>[I]),_:1}),i(l,{lg:12,md:12,sm:24,xl:12,xs:24},{default:r(()=>[e("div",C,[e("div",w,t(s.oops),1),e("div",T,t(s.headline),1),e("div",k,t(s.info),1),i(_,{class:"bullshit-return-home",onClick:a._jump},{default:r(()=>[h(t(s.jumpTime)+"s\xA0"+t(s.btn),1)]),_:1},8,["onClick"])])]),_:1})]),_:1})])])}n.render=S;n.__scopeId="data-v-09c68b87";export{n as default};