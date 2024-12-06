import{_ as p,o as a,c as n,a as t,t as r,h as o,l,g as c,n as d,u as x}from"./framework.a52c07a4.js";const g={class:"pb-[86px] md:pb-[164px]"},u={class:"mb-[12px] text-red1 text-[16px] font-semibold leading-normal"},b={class:"text-color1 font-semibold leading-[1.2] text-[36px] md:text-[48px] xl:text-[64px]"},_={class:"mt-4 mb-10 text-gray1 text-[20px] leading-normal"},h={key:0,class:"mt-[96px] -mx-[32px] w-[calc(100%+32px)] translate-x-[16px] sm:-mx-[64px] sm:w-[calc(100%+64px)] sm:translate-x-[32px] xl:-mx-[160px] xl:w-[calc(100%+160px)] xl:translate-x-[80px] max-w-[100vw]"},y={class:"rounded-xl pt-6 px-[16px] sm:pt-[32px] sm:px-[32px] xl:pt-20 xl:px-20 overflow-hidden bg-center bg-cover bg-no-repeat bg_image bg-opacity-90"},f={class:"w-full h-full"},w=["srcset"],$=["srcset"],S=["srcset"],v=["srcset"],F=["srcset"],k=["srcset"],A=["src"],B={__name:"AdvanceArticleBanner",props:{title:{type:String,required:!0},subTitle:{type:String,required:!0},description:{type:String,required:!0},imageFolder:String},setup(e){return(s,i)=>(a(),n("div",g,[t("p",u,r(e.subTitle),1),t("h1",b,r(e.title),1),t("p",_,r(e.description),1),o(s.$slots,"default",{},void 0,!0),e.imageFolder?(a(),n("div",h,[t("div",y,[t("picture",f,[t("source",{media:"(min-width: 768px)",width:"1200",srcset:`${e.imageFolder}/banner-desk@1x.webp 1x,
                      ${e.imageFolder}/banner-desk@2x.webp 2x`,type:"image/webp"},null,8,w),t("source",{media:"(min-width: 768px)",width:"1200",srcset:`${e.imageFolder}/banner-desk@1x.jpg 1x,
                      ${e.imageFolder}/banner-desk@2x.jpg 2x`,type:"image/webp"},null,8,$),t("source",{media:"(min-width: 451px)",width:"740",srcset:`${e.imageFolder}/banner-tab@1x.webp 1x,
                      ${e.imageFolder}/banner-tab@2x.webp 2x`,type:"image/webp"},null,8,S),t("source",{media:"(min-width: 451px)",width:"740",srcset:`${e.imageFolder}/banner-tab@1x.jpg 1x,
                      ${e.imageFolder}/banner-tab@2x.jpg 2x`,type:"image/webp"},null,8,v),t("source",{media:"(max-width: 450px)",width:"430",srcset:`${e.imageFolder}/banner-mob@1x.webp 1x,
                      ${e.imageFolder}/banner-mob@2x.webp 2x`,type:"image/webp"},null,8,F),t("source",{media:"(max-width: 450px)",width:"430",srcset:`${e.imageFolder}/banner-mob@1x.jpg 1x,
                      ${e.imageFolder}/banner-mob@2x.jpg 2x`,type:"image/webp"},null,8,k),t("img",{src:`${e.imageFolder}/banner-desc@1x.jpg`,alt:"",width:"1200",height:"645",loading:"lazy",class:"w-full rounded-t-xl"},null,8,A)])])])):l("",!0)]))}},L=p(B,[["__scopeId","data-v-fb4ff388"]]),j={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-x-14 md:gap-y-16"},N={__name:"GridListThreeCols",setup(e){const{frontmatter:s}=c();return(i,m)=>(a(),n("div",{class:d([[x(s).layout==="landing-page"?"landing_paragraph_spacing":"paragraph_spacing"],"my-[80px] last-of-type:mb-0"])},[t("ul",j,[o(i.$slots,"default")])],2))}},q={class:"grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 xl:gap-32"},V={__name:"GridListTwoCols",setup(e){const{frontmatter:s}=c();return(i,m)=>(a(),n("div",{class:d([[x(s).layout==="landing-page"?"landing_paragraph_spacing":"paragraph_spacing"],"my-[80px] last-of-type:mb-0"])},[t("ul",q,[o(i.$slots,"default")])],2))}},C={class:"flex flex-col items-start"},P=["src"],T={key:1,class:"mb-[6px] text-color1 font-semibold leading-normal text-[18px]"},z={class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55]"},E={__name:"GridItem",props:{iconUrl:String,title:String,description:{type:String,required:!0}},setup(e){return(s,i)=>(a(),n("li",C,[e.iconUrl?(a(),n("img",{key:0,src:e.iconUrl,alt:"",loading:"lazy",class:"mb-[8px] w-[64px] h-[64px]"},null,8,P)):l("",!0),e.title?(a(),n("h4",T,r(e.title),1)):l("",!0),t("p",z,r(e.description),1)]))}};const G=["href"],I=["href"],U={__name:"ButtonActionSet",props:{buttonPrimary:{name:String,url:String},buttonSecondary:{name:String,url:String}},setup(e){const{frontmatter:s}=c();return(i,m)=>(a(),n("div",{class:d([[x(s).layout==="landing-page"?"landing_paragraph_spacing":"paragraph_spacing"],"my-[20px] md:my-[40px] last-of-type:mb-0 bottom_spacing flex-wrap sm:flex-nowrap flex items-start gap-[36px]"])},[e.buttonPrimary?(a(),n("a",{key:0,href:e.buttonPrimary.url,class:"w-full xs:w-fit min-w-[180px] py-[12px] md:py-[16px] px-[20px] md:px-[28px] btn_primary"},r(e.buttonPrimary.name),9,G)):l("",!0),e.buttonSecondary?(a(),n("a",{key:1,href:e.buttonSecondary.url,class:"w-full xs:w-fit min-w-[185px] py-[12px] md:py-[16px] px-[20px] md:px-[28px] btn_secondary"},r(e.buttonSecondary.name),9,I)):l("",!0)],2))}},H=p(U,[["__scopeId","data-v-190248c6"]]);export{L as A,H as B,N as _,V as a,E as b};
