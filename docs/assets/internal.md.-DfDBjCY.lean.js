import{r as l,i as c,b as d,d as a,g as f,t as m,o as u}from"./chunks/framework.C0WHIBB9.js";const p={class:"my-[96px]"},g={id:"main-content",class:"container"},k={class:"mt-[40px] flex items-center justify-center gap-4"},_={class:"mt-10 text-center"},h=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"p3d-custom","language":"PL"},"headers":[],"relativePath":"internal.md","filePath":"internal.md"}'),x={name:"internal.md"},y=Object.assign(x,{setup(v){const s=l(!1);c(()=>{const e=new URLSearchParams(window.location.search).get("traffic");e==="internal"?o(!0,!1):e==="external"?o(!1,!1):s.value=localStorage.getItem("p3dBlockTracking")==="true"});const o=(t,e=!0)=>{localStorage.setItem("p3dBlockTracking",t.toString()),s.value=t,t?(i(),e&&r("traffic","internal")):e&&r("traffic","external")};function i(){document.cookie.split(";").forEach(t=>{const e=t.split("=")[0].trim();e.startsWith("_ga")&&(document.cookie=`${e}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`)})}function r(t,e){const n=new URLSearchParams(window.location.search);n.set(t,e),window.history.replaceState({},"",`${window.location.pathname}?${n}`)}return(t,e)=>(u(),d("div",null,[a("div",p,[a("div",g,[e[3]||(e[3]=a("h1",{class:"text-[22px] text-center text-gray1 font-semibold"},"Toggle Tracking for Developers",-1)),a("div",k,[a("button",{onClick:e[0]||(e[0]=n=>o(!0)),class:"btn_primary p-3"}," Block Tracking "),a("button",{onClick:e[1]||(e[1]=n=>o(!1)),class:"btn_secondary p-3"}," Allow Tracking ")]),a("p",_,[e[2]||(e[2]=f("Status: ")),a("strong",null,m(s.value?"Blocked":"Allowed"),1)])])])]))}});export{h as __pageData,y as default};
