import{_ as u,o as e,c as n,a as r,u as i,t as s,g as c,h as a,n as m,f as d}from"./framework.d651d42f.js";const _={},y={width:"24px",height:"24px",viewBox:"0 -960 960 960"},h=r("path",{d:"M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"},null,-1),f=[h];function g(t,o){return e(),n("svg",y,f)}const l=u(_,[["render",g]]);const x=["href","target"],b=["href","target"],p={__name:"ButtonActionSet",props:{buttonPrimary:{name:String,url:String,external:{type:Boolean,default:!1}},buttonSecondary:{name:String,url:String,external:{type:Boolean,default:!1}}},setup(t){const{frontmatter:o}=i();return(v,S)=>(e(),n("div",{class:m([[d(o).layout==="landing-page"?"landing_paragraph_spacing":"paragraph_spacing"],"mt-[20px] md:mt-[40px] flex-wrap sm:flex-nowrap flex items-start gap-[36px]"])},[t.buttonPrimary?(e(),n("a",{key:0,href:t.buttonPrimary.url,target:t.buttonPrimary.external&&"_blank",class:"button btn_primary"},[r("span",null,s(t.buttonPrimary.name),1),t.buttonPrimary.external?(e(),c(l,{key:0})):a("",!0)],8,x)):a("",!0),t.buttonSecondary?(e(),n("a",{key:1,href:t.buttonSecondary.url,target:t.buttonSecondary.external&&"_blank",class:"button btn_secondary"},[r("span",null,s(t.buttonSecondary.name),1),t.buttonPrimary.external?(e(),c(l,{key:0})):a("",!0)],8,b)):a("",!0)],2))}},k=u(p,[["__scopeId","data-v-f19a59b8"]]);export{k as B,l as E};