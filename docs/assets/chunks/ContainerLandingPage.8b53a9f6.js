import{_ as d,h as m,o as n,c as r,a as t,i as l,g as x,n as s,u as c,j as p,t as g,b as u}from"./framework.48313a52.js";import{S as b}from"./ShowDetailsIcon.4739ac9c.js";const h={key:0,class:"mt-[96px] -mx-[32px] w-[calc(100%+32px)] translate-x-[16px] sm:-mx-[64px] sm:w-[calc(100%+64px)] sm:translate-x-[32px] xl:-mx-[160px] xl:w-[calc(100%+160px)] xl:translate-x-[80px] max-w-[100vw]"},w={class:"rounded-xl pt-6 px-[16px] sm:pt-[32px] sm:px-[32px] xl:pt-20 xl:px-20 overflow-hidden bg-center bg-cover bg-no-repeat bg_image bg-opacity-90"},_={class:"w-full h-full"},f=["srcset"],v=["srcset"],y=["srcset"],$=["srcset"],F=["srcset"],k=["srcset"],j=["src"],A={__name:"AdvanceArticleBanner",props:{imageFolder:String},setup(e){const{frontmatter:a}=m();return(i,o)=>(n(),r("div",{class:s([c(a).layout==="landing-page"?"landing_paragraph_spacing":"paragraph_spacing"])},[t("div",{class:s([c(a).layout==="landing-page"?"":"container"])},[l(i.$slots,"default",{},void 0,!0),e.imageFolder?(n(),r("div",h,[t("div",w,[t("picture",_,[t("source",{media:"(min-width: 768px)",width:"1200",srcset:`${e.imageFolder}/banner-desk@1x.webp 1x,
                      ${e.imageFolder}/banner-desk@2x.webp 2x`,type:"image/webp"},null,8,f),t("source",{media:"(min-width: 768px)",width:"1200",srcset:`${e.imageFolder}/banner-desk@1x.jpg 1x,
                      ${e.imageFolder}/banner-desk@2x.jpg 2x`,type:"image/webp"},null,8,v),t("source",{media:"(min-width: 451px)",width:"740",srcset:`${e.imageFolder}/banner-tab@1x.webp 1x,
                      ${e.imageFolder}/banner-tab@2x.webp 2x`,type:"image/webp"},null,8,y),t("source",{media:"(min-width: 451px)",width:"740",srcset:`${e.imageFolder}/banner-tab@1x.jpg 1x,
                      ${e.imageFolder}/banner-tab@2x.jpg 2x`,type:"image/webp"},null,8,$),t("source",{media:"(max-width: 450px)",width:"430",srcset:`${e.imageFolder}/banner-mob@1x.webp 1x,
                      ${e.imageFolder}/banner-mob@2x.webp 2x`,type:"image/webp"},null,8,F),t("source",{media:"(max-width: 450px)",width:"430",srcset:`${e.imageFolder}/banner-mob@1x.jpg 1x,
                      ${e.imageFolder}/banner-mob@2x.jpg 2x`,type:"image/webp"},null,8,k),t("img",{src:`${e.imageFolder}/banner-desc@1x.jpg`,alt:"",width:"1200",height:"645",class:"w-full rounded-t-xl"},null,8,j)])])])):x("",!0)],2)],2))}},z=d(A,[["__scopeId","data-v-d9278c33"]]),B={class:"text-color1 font-semibold text-[24px] md:text-[30px] leading-normal"},S={key:0,class:"cursor-default"},E={__name:"Accordion",props:{title:{type:String,required:!0}},setup(e){const a=p(!1),i=()=>{a.value=!a.value};return(o,V)=>(n(),r("div",{onClick:i,class:s([{"px-[24px]  hover:px-[42px] bg-white hover:bg-red1 hover:bg-opacity-10":!a.value,"px-[42px]":a.value},"w-full py-[16px] border-t-[2px] border-color1 cursor-pointer transition-all"])},[t("div",{class:s([{"mb-[24px]":a.value},"w-full flex justify-between items-center"])},[t("h3",B,g(e.title),1),u(b,{class:s([[a.value?"rotate-180":""],"shrink-0 h-6 w-6 stroke-gray1 focus:stroke-gray1 fill-stroke-gray transition duration-100 ease-in-out"])},null,8,["class"])],2),a.value?(n(),r("div",S,[l(o.$slots,"default")])):x("",!0)],2))}},C={},D={class:"mt-[80px]"};function N(e,a){return n(),r("div",D,[l(e.$slots,"default")])}const L=d(C,[["render",N]]);export{z as A,L as C,E as _};
