import{u as d,o as a,b as e,d as n,C as c,n as o,a as i,_ as m,f as r,t as p}from"./framework.tuXvs_5t.js";const g={class:"grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 xl:gap-32"},S={__name:"GridListTwoCols",setup(t){const{frontmatter:s}=d();return(l,_)=>(a(),e("div",{class:o([i(s).layout==="landing-page"?"landing_paragraph_spacing mt-[80px]":"paragraph_spacing mt-[64px]"])},[n("div",{class:o([i(s).layout==="landing-page"?"":"container"])},[n("ul",g,[c(l.$slots,"default")])],2)],2))}},u={class:"flex flex-col items-start"},x=["src"],h={key:1,class:"mb-[12px] md:mb-0 md:min-h-[90px] text-color1 font-semibold leading-normal text-[24px] md:text-[30px]"},f={class:"content"},$={__name:"GridItemTwoCols",props:{iconUrl:String,title:String},setup(t){return(s,l)=>(a(),e("li",u,[t.iconUrl?(a(),e("img",{key:0,src:t.iconUrl,alt:"",loading:"lazy",class:"mb-[8px] w-[64px] h-[64px]"},null,8,x)):r("",!0),t.title?(a(),e("h3",h,p(t.title),1)):r("",!0),n("div",f,[c(s.$slots,"default",{},void 0,!0)])]))}},U=m($,[["__scopeId","data-v-e18ebf26"]]),y={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-x-14 md:gap-y-16"},w={__name:"GridListThreeCols",setup(t){const{frontmatter:s}=d();return(l,_)=>(a(),e("div",{class:o([i(s).layout==="landing-page"?"landing_paragraph_spacing mt-[80px]":"paragraph_spacing mt-[64px]"])},[n("div",{class:o([i(s).layout==="landing-page"?"":"container"])},[n("ul",y,[c(l.$slots,"default")])],2)],2))}},b={class:"flex flex-col items-start"},v=["src"],C={key:1,class:"mb-[4px] md:mb-[6px] md:min-h-[60px] text-color1 font-semibold text-[20px] leading-normal"},G={class:"content"},k={__name:"GridItem",props:{iconUrl:String,title:String},setup(t){return(s,l)=>(a(),e("li",b,[t.iconUrl?(a(),e("img",{key:0,src:t.iconUrl,alt:"",loading:"lazy",class:"mb-[8px] w-[64px] h-[64px]"},null,8,v)):r("",!0),t.title?(a(),e("h3",C,p(t.title),1)):r("",!0),n("div",G,[c(s.$slots,"default",{},void 0,!0)])]))}},T=m(k,[["__scopeId","data-v-56dda719"]]);export{T as G,w as _,S as a,U as b};
