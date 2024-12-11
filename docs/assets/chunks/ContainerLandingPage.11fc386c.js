import{_ as p,g,o as s,c as n,t as d,l as r,h as l,a as e,n as o,u as m,e as u,i as _}from"./framework.a52c07a4.js";const h={key:0,class:"mb-[12px] text-red1 text-[16px] font-semibold leading-normal"},f={key:1,class:"mt-[96px] -mx-[32px] w-[calc(100%+32px)] translate-x-[16px] sm:-mx-[64px] sm:w-[calc(100%+64px)] sm:translate-x-[32px] xl:-mx-[160px] xl:w-[calc(100%+160px)] xl:translate-x-[80px] max-w-[100vw]"},b={class:"rounded-xl pt-6 px-[16px] sm:pt-[32px] sm:px-[32px] xl:pt-20 xl:px-20 overflow-hidden bg-center bg-cover bg-no-repeat bg_image bg-opacity-90"},w={class:"w-full h-full"},v=["srcset"],y=["srcset"],$=["srcset"],k=["srcset"],S=["srcset"],F=["srcset"],j=["src"],P={__name:"AdvanceArticleBanner",props:{subTitle:String,imageFolder:String},setup(t){const{frontmatter:a}=g();return(i,c)=>(s(),n("div",{class:o([m(a).layout==="landing-page"?"landing_paragraph_spacing":"paragraph_spacing"])},[t.subTitle?(s(),n("p",h,d(t.subTitle),1)):r("",!0),l(i.$slots,"default",{},void 0,!0),t.imageFolder?(s(),n("div",f,[e("div",b,[e("picture",w,[e("source",{media:"(min-width: 768px)",width:"1200",srcset:`${t.imageFolder}/banner-desk@1x.webp 1x,
                      ${t.imageFolder}/banner-desk@2x.webp 2x`,type:"image/webp"},null,8,v),e("source",{media:"(min-width: 768px)",width:"1200",srcset:`${t.imageFolder}/banner-desk@1x.jpg 1x,
                      ${t.imageFolder}/banner-desk@2x.jpg 2x`,type:"image/webp"},null,8,y),e("source",{media:"(min-width: 451px)",width:"740",srcset:`${t.imageFolder}/banner-tab@1x.webp 1x,
                      ${t.imageFolder}/banner-tab@2x.webp 2x`,type:"image/webp"},null,8,$),e("source",{media:"(min-width: 451px)",width:"740",srcset:`${t.imageFolder}/banner-tab@1x.jpg 1x,
                      ${t.imageFolder}/banner-tab@2x.jpg 2x`,type:"image/webp"},null,8,k),e("source",{media:"(max-width: 450px)",width:"430",srcset:`${t.imageFolder}/banner-mob@1x.webp 1x,
                      ${t.imageFolder}/banner-mob@2x.webp 2x`,type:"image/webp"},null,8,S),e("source",{media:"(max-width: 450px)",width:"430",srcset:`${t.imageFolder}/banner-mob@1x.jpg 1x,
                      ${t.imageFolder}/banner-mob@2x.jpg 2x`,type:"image/webp"},null,8,F),e("img",{src:`${t.imageFolder}/banner-desc@1x.jpg`,alt:"",width:"1200",height:"645",loading:"lazy",class:"w-full rounded-t-xl"},null,8,j)])])])):r("",!0)],2))}},kt=p(P,[["__scopeId","data-v-ddd1280f"]]),C={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-x-14 md:gap-y-16"},St={__name:"GridListThreeCols",setup(t){const{frontmatter:a}=g();return(i,c)=>(s(),n("div",{class:o([m(a).layout==="landing-page"?"landing_paragraph_spacing mt-[80px]":"paragraph_spacing mt-[64px]"])},[e("ul",C,[l(i.$slots,"default")])],2))}},I={class:"grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 xl:gap-32"},Ft={__name:"GridListTwoCols",setup(t){const{frontmatter:a}=g();return(i,c)=>(s(),n("div",{class:o([m(a).layout==="landing-page"?"landing_paragraph_spacing mt-[80px]":"paragraph_spacing mt-[64px]"])},[e("ul",I,[l(i.$slots,"default")])],2))}};const T={class:"flex flex-col items-start"},U=["src"],A={key:1,class:"mb-[6px] text-color1 font-semibold text-[20px] leading-norma"},G={class:"content"},z={__name:"GridItem",props:{iconUrl:String,title:String},setup(t){return(a,i)=>(s(),n("li",T,[t.iconUrl?(s(),n("img",{key:0,src:t.iconUrl,alt:"",loading:"lazy",class:"mb-[8px] w-[64px] h-[64px]"},null,8,U)):r("",!0),t.title?(s(),n("h3",A,d(t.title),1)):r("",!0),e("div",G,[l(a.$slots,"default",{},void 0,!0)])]))}},jt=p(z,[["__scopeId","data-v-129dbbe3"]]);const B={class:"flex flex-col items-start"},N=["src"],L={key:1,class:"mb-[12px] text-color1 font-semibold leading-normal text-[24px] md:text-[30px]"},O={class:"content"},E={__name:"GridItemTwoCols",props:{iconUrl:String,title:String},setup(t){return(a,i)=>(s(),n("li",B,[t.iconUrl?(s(),n("img",{key:0,src:t.iconUrl,alt:"",loading:"lazy",class:"mb-[8px] w-[64px] h-[64px]"},null,8,N)):r("",!0),t.title?(s(),n("h3",L,d(t.title),1)):r("",!0),e("div",O,[l(a.$slots,"default",{},void 0,!0)])]))}},Pt=p(E,[["__scopeId","data-v-53f82037"]]);const R={class:"flex flex-col lg:flex-row justify-between items-center gap-20"},V={class:"content min-w-[45%]"},D={class:"min-w-[40%] lg:min-w-fit w-fit"},q={class:"w-full h-full"},M=["srcset"],Z=["srcset"],H=["src"],J={__name:"TitleImageRight",props:{imageFolder:{type:String,required:!0}},setup(t){const{frontmatter:a}=g();return(i,c)=>(s(),n("div",{class:o([m(a).layout==="landing-page"?"landing_paragraph_spacing mt-[144px] lg:mt-[176px]":"paragraph_spacing mt-[64px]"])},[e("section",null,[e("div",R,[e("div",V,[l(i.$slots,"default",{},void 0,!0)]),e("div",D,[e("picture",q,[e("source",{srcset:`${t.imageFolder}/title-image-right-desk@1x.webp 1x,
                  ${t.imageFolder}/title-image-right-desk@2x.webp 2x`,type:"image/webp"},null,8,M),e("source",{srcset:`${t.imageFolder}/title-image-right-desk@1x.jpg 1x,
                  ${t.imageFolder}/title-image-right-desk@2x.jpg 2x`,type:"image/webp"},null,8,Z),e("img",{src:`${t.imageFolder}/title-image-right-desc@1x.jpg`,alt:"",width:"430",loading:"lazy",class:"w-[430px] object-contain object-start rounded-xl"},null,8,H)])])])])],2))}},Ct=p(J,[["__scopeId","data-v-a1f05233"]]),K=["href"],Q=["href"],It={__name:"ButtonActionSet",props:{buttonPrimary:{name:String,url:String},buttonSecondary:{name:String,url:String}},setup(t){const{frontmatter:a}=g();return(i,c)=>(s(),n("div",{class:o([[m(a).layout==="landing-page"?"landing_paragraph_spacing":"paragraph_spacing"],"mt-[20px] md:mt-[40px] flex-wrap sm:flex-nowrap flex items-start gap-[36px]"])},[t.buttonPrimary?(s(),n("a",{key:0,href:t.buttonPrimary.url,class:"w-full xs:w-fit min-w-[180px] py-[12px] md:py-[16px] px-[20px] md:px-[28px] btn_primary"},d(t.buttonPrimary.name),9,K)):r("",!0),t.buttonSecondary?(s(),n("a",{key:1,href:t.buttonSecondary.url,class:"w-full xs:w-fit min-w-[185px] py-[12px] md:py-[16px] px-[20px] md:px-[28px] btn_secondary"},d(t.buttonSecondary.name),9,Q)):r("",!0)],2))}},W="/assets/semaprint.25ce6225.svg",X="/assets/tagvenue.3b3c95c4.svg",Y="/assets/epinote.bc94867d.svg",tt="/assets/uu_logo.a03c0ae3.svg";const et={class:"bg-gray2 p-[40px] md:p-[58px] rounded-[16px]"},at={class:"container"},st={class:"mb-[32px] text-center text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px] tracking-[0.5px]"},nt=u('<h3 class="mb-[32px] text-center text-gray1 font-normal leading-normal text-[16px] md:text-[18px] tracking-[0.5px]" data-v-adaf232d> Pracujemy z firmami produkcyjnymi, e-commerce, startupami i SaaS, a nawet organizacjami non-profit. </h3><ul class="w-full grid grid-cols-1 sm:grid-cols-2 lg:flex items-center justify-center gap-16" data-v-adaf232d><li class="list-item" data-v-adaf232d><img src="'+W+'" alt="Semaprint logo" class="image" data-v-adaf232d></li><li class="list-item" data-v-adaf232d><img src="'+X+'" alt="Tagvenue logo" class="image" data-v-adaf232d></li><li class="list-item" data-v-adaf232d><img src="'+Y+'" alt="Epinote logo" class="image" data-v-adaf232d></li><li class="list-item" data-v-adaf232d><img src="'+tt+'" alt="Ukraine Unbreakable logo" class="image" data-v-adaf232d></li></ul>',2),it={__name:"OurPartners",setup(t){const{frontmatter:a}=g(),i={PL:{title:"Zaufali nam"},EN:{title:"They trusted us"}};return(c,x)=>(s(),n("div",{class:o([m(a).layout==="landing-page"?"landing_paragraph_spacing mt-[144px] lg:mt-[176px]":"paragraph_spacing mt-[64px]"])},[e("section",et,[e("div",at,[e("h3",st,d(m(a).language==="PL"?i.PL.title:i.EN.title),1),nt])])],2))}},Tt=p(it,[["__scopeId","data-v-adaf232d"]]),lt={class:"container"},rt={class:"text-center"},ot={class:"text-center"},ct={class:"mt-24 mx-auto w-full max-w-[450px] md:max-w-full grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center xl:flex rounded-xl overflow-hidden"},Ut={__name:"PricingChoices",setup(t){const{frontmatter:a}=g();return(i,c)=>(s(),n("div",{class:o([[m(a).layout==="landing-page"?"landing_paragraph_spacing mt-[144px] lg:mt-[176px]":"paragraph_spacing mt-[64px]"],"relative left-1/2 translate-x-[calc(-50%)] w-[calc(100vw-theme(width.scrollbar))] py-[80px] bg-red1 bg-opacity-10"])},[e("section",lt,[e("div",rt,[l(i.$slots,"title")]),e("div",ot,[l(i.$slots,"description")]),e("ul",ct,[l(i.$slots,"cards")]),l(i.$slots,"default")])],2))}};const dt={class:"max-w-[450px] md:max-w-full xl:max-w-[450px] odd:last-of-type:rounded-b-xl xl:odd:last-of-type:rounded-b-none w-full p-[28px] bg-white shadow-sm border-gray5 border-b-[2px] sm:border-r-[2px]"},mt={class:"pb-[32px] w-full min-h-[160px] border-b border-gray5 flex flex-col"},pt={key:0,class:"mt-auto"},gt=["href"],xt={class:"content pt-[32px] w-full min-h-[250px]"},ut={__name:"PricingCard",props:{buttonName:String,buttonUrl:String},setup(t){return(a,i)=>(s(),n("li",dt,[e("div",mt,[l(a.$slots,"header",{},void 0,!0),t.buttonName&&t.buttonUrl?(s(),n("div",pt,[e("a",{href:t.buttonUrl,class:"btn_primary w-full p-[10px]"},d(t.buttonName),9,gt)])):r("",!0)]),e("div",xt,[l(a.$slots,"content",{},void 0,!0)])]))}},At=p(ut,[["__scopeId","data-v-0eb64fd0"]]),_t={key:0,class:"text-color1 font-semibold text-[24px] md:text-[30px] leading-normal"},ht=e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1),ft=[ht],bt={key:0,class:"cursor-default"},Gt={__name:"Accordion",props:{title:String},setup(t){const a=_(!1),i=()=>{a.value=!a.value};return(c,x)=>(s(),n("div",{class:o([{"px-[24px]  hover:px-[42px] bg-white hover:bg-red1 hover:bg-opacity-10":!a.value,"px-[42px]":a.value},"w-full py-[16px] border-t-[2px] border-color1 cursor-pointer transition-all"])},[e("div",{onClick:i,class:o([{"mb-[24px]":a.value},"w-full flex justify-between items-center"])},[t.title?(s(),n("h3",_t,d(t.title),1)):r("",!0),(s(),n("svg",{class:o([[a.value?"rotate-180":""],"down shrink-0 h-6 w-6 group-hover:-translate-x-6 transition duration-100 ease-in-out"]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},ft,2))],2),a.value?(s(),n("div",bt,[l(c.$slots,"default")])):r("",!0)],2))}},wt={},vt={class:"mt-[80px]"};function yt(t,a){return s(),n("div",vt,[l(t.$slots,"default")])}const zt=p(wt,[["render",yt]]);export{kt as A,zt as C,jt as G,Tt as O,At as P,Ct as T,Ut as _,St as a,Ft as b,It as c,Gt as d,Pt as e};