import{r as i,i as c,b as f,d as a,g as d,t as m,o as p}from"./chunks/framework.DgNujXvl.js";const u={class:"my-[96px]"},g={class:"container"},k={class:"mt-[40px] flex items-center justify-center gap-4"},_={class:"mt-10 text-center"},h=JSON.parse('{"title":"","description":"","frontmatter":{"language":"PL"},"headers":[],"relativePath":"internal.md","filePath":"internal.md"}'),x={name:"internal.md"},T=Object.assign(x,{setup(v){const s=i(!1);c(()=>{const e=new URLSearchParams(window.location.search).get("traffic");e==="internal"?o(!0,!1):e==="external"?o(!1,!1):s.value=localStorage.getItem("p3dBlockTracking")==="true"});const o=(t,e=!0)=>{localStorage.setItem("p3dBlockTracking",t.toString()),s.value=t,t?(l(),e&&r("traffic","internal")):e&&r("traffic","external")};function l(){document.cookie.split(";").forEach(t=>{const e=t.split("=")[0].trim();e.startsWith("_ga")&&(document.cookie=`${e}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`)})}function r(t,e){const n=new URLSearchParams(window.location.search);n.set(t,e),window.history.replaceState({},"",`${window.location.pathname}?${n}`)}return(t,e)=>(p(),f("div",null,[a("div",u,[a("div",g,[e[3]||(e[3]=a("h1",{class:"text-[22px] text-center text-gray1 font-semibold"},"Toggle Tracking for Developers",-1)),a("div",k,[a("button",{onClick:e[0]||(e[0]=n=>o(!0)),class:"btn_primary p-3"}," Block Tracking "),a("button",{onClick:e[1]||(e[1]=n=>o(!1)),class:"btn_secondary p-3"}," Allow Tracking ")]),a("p",_,[e[2]||(e[2]=d("Status: ")),a("strong",null,m(s.value?"Blocked":"Allowed"),1)])])])]))}});export{h as __pageData,T as default};
