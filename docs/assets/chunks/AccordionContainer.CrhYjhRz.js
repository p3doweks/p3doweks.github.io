import{_ as d,u as m,o as s,b as n,d as t,C as o,f as x,n as r,a as c,r as p,t as g,h as u}from"./framework.tuXvs_5t.js";import{S as b}from"./theme.BN-zMiDE.js";const h={key:0,class:"mt-[96px] -mx-[32px] w-[calc(100%+32px)] translate-x-[16px] sm:-mx-[64px] sm:w-[calc(100%+64px)] sm:translate-x-[32px] xl:-mx-[160px] xl:w-[calc(100%+160px)] xl:translate-x-[80px] max-w-[100vw]"},w={class:"rounded-xl pt-6 px-[16px] sm:pt-[32px] sm:px-[32px] xl:pt-20 xl:px-20 overflow-hidden bg-center bg-cover bg-no-repeat bg_image bg-opacity-90"},f={class:"w-full h-full"},_=["srcset"],v=["srcset"],$=["srcset"],y=["srcset"],F=["srcset"],k=["srcset"],j=["src"],A={__name:"AdvanceArticleBanner",props:{imageFolder:String},setup(e){const{frontmatter:a}=m();return(i,l)=>(s(),n("div",{class:r([c(a).layout==="landing-page"?"landing_paragraph_spacing":"paragraph_spacing"])},[t("div",{class:r([c(a).layout==="landing-page"?"":"container"])},[o(i.$slots,"default",{},void 0,!0),e.imageFolder?(s(),n("div",h,[t("div",w,[t("picture",f,[t("source",{media:"(min-width: 768px)",width:"1200",srcset:`${e.imageFolder}/banner-desk@1x.webp 1x,
                      ${e.imageFolder}/banner-desk@2x.webp 2x`,type:"image/webp"},null,8,_),t("source",{media:"(min-width: 768px)",width:"1200",srcset:`${e.imageFolder}/banner-desk@1x.jpg 1x,
                      ${e.imageFolder}/banner-desk@2x.jpg 2x`,type:"image/webp"},null,8,v),t("source",{media:"(min-width: 451px)",width:"740",srcset:`${e.imageFolder}/banner-tab@1x.webp 1x,
                      ${e.imageFolder}/banner-tab@2x.webp 2x`,type:"image/webp"},null,8,$),t("source",{media:"(min-width: 451px)",width:"740",srcset:`${e.imageFolder}/banner-tab@1x.jpg 1x,
                      ${e.imageFolder}/banner-tab@2x.jpg 2x`,type:"image/webp"},null,8,y),t("source",{media:"(max-width: 450px)",width:"430",srcset:`${e.imageFolder}/banner-mob@1x.webp 1x,
                      ${e.imageFolder}/banner-mob@2x.webp 2x`,type:"image/webp"},null,8,F),t("source",{media:"(max-width: 450px)",width:"430",srcset:`${e.imageFolder}/banner-mob@1x.jpg 1x,
                      ${e.imageFolder}/banner-mob@2x.jpg 2x`,type:"image/webp"},null,8,k),t("img",{src:`${e.imageFolder}/banner-desc@1x.jpg`,alt:"",width:"1200",height:"645",class:"w-full rounded-t-xl"},null,8,j)])])])):x("",!0)],2)],2))}},E=d(A,[["__scopeId","data-v-02ae4800"]]),S={class:"w-full flex justify-between items-center"},B={class:"text-color1 font-semibold text-[24px] md:text-[30px] leading-normal"},C={key:0,class:"pb-[16px] px-[24px] cursor-default"},O={__name:"Accordion",props:{title:{type:String,required:!0}},setup(e){const a=p(!1),i=()=>{a.value=!a.value};return(l,I)=>(s(),n("div",null,[t("div",{onClick:i,class:r([{"bg-white hover:px-[42px]  hover:bg-red1 hover:bg-opacity-10":!a.value},"w-full px-[24px] py-[16px] border-t-[2px] border-color1 cursor-pointer transition-all"])},[t("div",S,[t("h3",B,g(e.title),1),u(b,{class:r([[a.value?"rotate-180":""],"shrink-0 h-6 w-6 stroke-gray1 focus:stroke-gray1 fill-stroke-gray transition duration-100 ease-in-out"])},null,8,["class"])])],2),a.value?(s(),n("div",C,[o(l.$slots,"default")])):x("",!0)]))}},D={},N={class:"mt-[80px]"};function V(e,a){return s(),n("div",N,[o(e.$slots,"default")])}const G=d(D,[["render",V]]);export{G as A,O as _,E as a};
