import{u as p,o as s,b as a,d as n,C as l,n as r,a as i,_ as m,f as c,t as _,r as u,h as g}from"./framework.tuXvs_5t.js";/* empty css                                                                        */import{S as x}from"./theme.3UKSVQ0S.js";const h={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-x-14 md:gap-y-16"},A={__name:"GridListThreeCols",setup(e){const{frontmatter:t}=p();return(o,d)=>(s(),a("div",{class:r([i(t).layout==="landing-page"?"landing_paragraph_spacing mt-[80px]":"paragraph_spacing mt-[64px]"])},[n("div",{class:r([i(t).layout==="landing-page"?"":"container"])},[n("ul",h,[l(o.$slots,"default")])],2)],2))}},f={class:"grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 xl:gap-32"},L={__name:"GridListTwoCols",setup(e){const{frontmatter:t}=p();return(o,d)=>(s(),a("div",{class:r([i(t).layout==="landing-page"?"landing_paragraph_spacing mt-[80px]":"paragraph_spacing mt-[64px]"])},[n("div",{class:r([i(t).layout==="landing-page"?"":"container"])},[n("ul",f,[l(o.$slots,"default")])],2)],2))}},v={class:"flex flex-col items-start"},y=["src"],$={key:1,class:"mb-[4px] md:mb-[6px] md:min-h-[60px] text-color1 font-semibold text-[20px] leading-normal"},b={class:"content"},k={__name:"GridItem",props:{iconUrl:String,title:String},setup(e){return(t,o)=>(s(),a("li",v,[e.iconUrl?(s(),a("img",{key:0,src:e.iconUrl,alt:"",loading:"lazy",class:"mb-[8px] w-[64px] h-[64px]"},null,8,y)):c("",!0),e.title?(s(),a("h3",$,_(e.title),1)):c("",!0),n("div",b,[l(t.$slots,"default",{},void 0,!0)])]))}},j=m(k,[["__scopeId","data-v-56dda719"]]),w={class:"flex flex-col items-start"},C=["src"],S={key:1,class:"mb-[12px] md:mb-0 md:min-h-[90px] text-color1 font-semibold leading-normal text-[24px] md:text-[30px]"},G={class:"content"},I={__name:"GridItemTwoCols",props:{iconUrl:String,title:String},setup(e){return(t,o)=>(s(),a("li",w,[e.iconUrl?(s(),a("img",{key:0,src:e.iconUrl,alt:"",loading:"lazy",class:"mb-[8px] w-[64px] h-[64px]"},null,8,C)):c("",!0),e.title?(s(),a("h3",S,_(e.title),1)):c("",!0),n("div",G,[l(t.$slots,"default",{},void 0,!0)])]))}},q=m(I,[["__scopeId","data-v-e18ebf26"]]),U={class:"w-full flex justify-between items-center"},T={class:"text-color1 font-semibold text-[24px] md:text-[30px] leading-normal"},z={key:0,class:"pb-[16px] px-[24px] cursor-default"},E={__name:"Accordion",props:{title:{type:String,required:!0}},setup(e){const t=u(!1),o=()=>{t.value=!t.value};return(d,B)=>(s(),a("div",null,[n("div",{onClick:o,class:r([{"bg-white hover:px-[42px]  hover:bg-red1 hover:bg-opacity-10":!t.value},"w-full px-[24px] py-[16px] border-t-[2px] border-color1 cursor-pointer transition-all"])},[n("div",U,[n("h3",T,_(e.title),1),g(x,{class:r([[t.value?"rotate-180":""],"shrink-0 h-6 w-6 stroke-gray1 focus:stroke-gray1 fill-stroke-gray transition duration-100 ease-in-out"])},null,8,["class"])])],2),t.value?(s(),a("div",z,[l(d.$slots,"default")])):c("",!0)]))}},O={__name:"AccordionContainer",setup(e){const{frontmatter:t}=p();return(o,d)=>(s(),a("div",{class:r([i(t).layout==="landing-page"?"landing_paragraph_spacing mt-[80px]":"paragraph_spacing mt-[64px] container"])},[l(o.$slots,"default")],2))}};export{j as G,A as _,L as a,O as b,q as c,E as d};
