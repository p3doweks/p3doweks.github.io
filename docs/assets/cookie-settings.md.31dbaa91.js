import{r as c,g as l,o as r,c as i,a as t,d,t as g}from"./chunks/framework.a402b2a0.js";const _={class:"my-[96px]"},k={class:"container"},p=t("h1",{class:"text-[22px] text-center text-gray1 font-semibold"},"Toggle Tracking for Developers",-1),m={class:"mt-[40px] flex items-center justify-center gap-4"},u={class:"mt-10 text-center"},b=JSON.parse('{"title":"","description":"","frontmatter":{"language":"PL"},"headers":[],"relativePath":"cookie-settings.md","filePath":"cookie-settings.md"}'),f={name:"cookie-settings.md"},T=Object.assign(f,{setup(v){const s=c(!1);l(()=>{s.value=localStorage.getItem("blockTracking")==="true"});const a=o=>{localStorage.setItem("blockTracking",o.toString()),s.value=o};return(o,e)=>(r(),i("div",null,[t("div",_,[t("div",k,[p,t("div",m,[t("button",{onClick:e[0]||(e[0]=n=>a(!0)),class:"btn_primary p-3"}," Block Tracking "),t("button",{onClick:e[1]||(e[1]=n=>a(!1)),class:"btn_secondary p-3"}," Allow Tracking ")]),t("p",u,[d("Status: "),t("strong",null,g(s.value?"Blocked":"Allowed"),1)])])])]))}});export{b as __pageData,T as default};
