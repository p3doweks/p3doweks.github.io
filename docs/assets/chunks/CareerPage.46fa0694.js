import{u as d,g as f,q as m,h as g,o as r,c,a as t,t as o,F as p,i as x,r as h,s as u,k as v}from"./framework.239df6fb.js";import{C as y}from"./CardItem.05054b2c.js";const b={class:"section_spacing bg-gray2"},E={class:"container"},O={class:"mb-[12px] text-red1 section_subtitle"},T={class:"text-color1 section_title"},k={class:"section_spacing container"},w={class:"mb-[12px] mx-auto w-fit min-w-[71px] min-h-[22px] py-[2px] pl-[6px] pr-[8px] bg-[#ECFDF3] rounded-[16px] flex justify-center items-center gap-[6px]"},L=t("div",{class:"bg-green1 w-[8px] h-[8px] rounded-[50%]"},null,-1),P={class:"text-[12px] font-medium leading-normal text-green2"},C={class:"mb-[40px] text-center text-color1 text-[24px] font-medium leading-[1.25]"},D={class:"mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[48px]"},F={__name:"CareerPage",setup(j){const{frontmatter:i}=d(),a=f([]),_={PL:{title:"Otwarte pozycje",subTitle:"Oferty pracy",listTitle:"Aktualne oferty pracy",pluralizeOffer(e){return e===1?"oferta":e>1&&e<5||e%10>1&&e%10<5&&(e%100<10||e%100>=20)?"oferty":"ofert"}},EN:{title:"Open positions",subTitle:"Job offers",listTitle:"Current job offers",pluralizeOffer(e){return e===1?"offer":"offers"}}};m(async()=>{const n=await{PL:()=>u(()=>import("./careerCardsPL.e32d63ee.js"),[]),EN:()=>u(()=>import("./careerCardsEN.989b8639.js"),[])}[i.value.language]();a.value=n.default});const l=g(()=>_[i.value.language]);return(e,n)=>(r(),c(p,null,[t("div",b,[t("div",E,[t("p",O,o(l.value.subTitle),1),t("h1",T,o(l.value.title),1)])]),t("div",k,[t("div",w,[L,t("span",P,o(a.value.length)+" "+o(l.value.pluralizeOffer(a.value.length)),1)]),t("h2",C,o(l.value.listTitle),1),t("ul",D,[(r(!0),c(p,null,x(a.value,s=>(r(),v(y,{key:s.url,position:s.position,url:s.url,type:s.type,location:s.location,time:s.time},null,8,["position","url","type","location","time"]))),128))]),h(e.$slots,"default")])],64))}};export{F as _};
