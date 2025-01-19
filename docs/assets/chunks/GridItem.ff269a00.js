import{h as d,o as s,c as a,a as n,i as r,n as o,u as i,_,g as c,t as m}from"./framework.48313a52.js";const g={class:"grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 xl:gap-32"},w={__name:"GridListTwoCols",setup(t){const{frontmatter:e}=d();return(l,p)=>(s(),a("div",{class:o([i(e).layout==="landing-page"?"landing_paragraph_spacing mt-[80px]":"paragraph_spacing mt-[64px]"])},[n("div",{class:o([i(e).layout==="landing-page"?"":"container"])},[n("ul",g,[r(l.$slots,"default")])],2)],2))}};const u={class:"flex flex-col items-start"},x=["src"],h={key:1,class:"mb-[12px] md:mb-0 md:min-h-[90px] text-color1 font-semibold leading-normal text-[24px] md:text-[30px]"},f={class:"content"},y={__name:"GridItemTwoCols",props:{iconUrl:String,title:String},setup(t){return(e,l)=>(s(),a("li",u,[t.iconUrl?(s(),a("img",{key:0,src:t.iconUrl,alt:"",loading:"lazy",class:"mb-[8px] w-[64px] h-[64px]"},null,8,x)):c("",!0),t.title?(s(),a("h3",h,m(t.title),1)):c("",!0),n("div",f,[r(e.$slots,"default",{},void 0,!0)])]))}},S=_(y,[["__scopeId","data-v-2e31ef8d"]]),$={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-x-14 md:gap-y-16"},U={__name:"GridListThreeCols",setup(t){const{frontmatter:e}=d();return(l,p)=>(s(),a("div",{class:o([i(e).layout==="landing-page"?"landing_paragraph_spacing mt-[80px]":"paragraph_spacing mt-[64px]"])},[n("div",{class:o([i(e).layout==="landing-page"?"":"container"])},[n("ul",$,[r(l.$slots,"default")])],2)],2))}};const v={class:"flex flex-col items-start"},b=["src"],G={key:1,class:"mb-[4px] md:mb-[6px] md:min-h-[60px] text-color1 font-semibold text-[20px] leading-normal"},I={class:"content"},C={__name:"GridItem",props:{iconUrl:String,title:String},setup(t){return(e,l)=>(s(),a("li",v,[t.iconUrl?(s(),a("img",{key:0,src:t.iconUrl,alt:"",loading:"lazy",class:"mb-[8px] w-[64px] h-[64px]"},null,8,b)):c("",!0),t.title?(s(),a("h3",G,m(t.title),1)):c("",!0),n("div",I,[r(e.$slots,"default",{},void 0,!0)])]))}},T=_(C,[["__scopeId","data-v-1d5649e1"]]);export{T as G,U as _,w as a,S as b};
