import{u as d,o as a,b as e,d as n,y as i,x as l,a as r,_,f as c,t as m}from"./framework.DgNujXvl.js";const p={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-x-14 md:gap-y-16"},k={__name:"GridListThreeCols",setup(t){const{frontmatter:s}=d();return(o,y)=>(a(),e("div",{class:l([r(s).layout==="landing-page"?"landing_paragraph_spacing mt-[80px]":"paragraph_spacing mt-[64px]"])},[n("div",{class:l([r(s).layout==="landing-page"?"":"container"])},[n("ul",p,[i(o.$slots,"default")])],2)],2))}},g={class:"flex flex-col items-start"},u=["src"],x={key:1,class:"mb-[6px] text-color1 font-semibold text-[20px] leading-norma"},f={class:"content"},h={__name:"GridItem",props:{iconUrl:String,title:String},setup(t){return(s,o)=>(a(),e("li",g,[t.iconUrl?(a(),e("img",{key:0,src:t.iconUrl,alt:"",loading:"lazy",class:"mb-[8px] w-[64px] h-[64px]"},null,8,u)):c("",!0),t.title?(a(),e("h3",x,m(t.title),1)):c("",!0),n("div",f,[i(s.$slots,"default",{},void 0,!0)])]))}},v=_(h,[["__scopeId","data-v-129dbbe3"]]);export{v as G,k as _};