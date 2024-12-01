import{m as _,i as b,h as m,o as n,c as r,a as t,t as o,s as v,v as f,x as h,d as y,A as w,F as S,r as L,b as T,O as g}from"./framework.2938b505.js";import{_ as k,a as j}from"./napisz-do-nas-blog2.6d72b68f.js";import{_ as E}from"./BlogCard.8a432a47.js";const $=async p=>{const l="https://connect.mailerlite.com/api/subscribers";try{return{success:!0,data:(await fetch(l,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${{}.VITE_MAILER_LITE_API_KEY}`},body:JSON.stringify(p)})).data}}catch(a){return console.error("Error:",a),{success:!1,error:a.message}}},z={class:"section_spacing bg-gray2"},C={class:"container flex flex-col lg:flex-row justify-between items-center lg:items-start gap-[32px]"},P={class:"text-color1 text-[36px] font-semibold leading-[1.22] tracking-[-0.72px]"},N={key:0,class:"flex items-center justify-center px-[20px] py-[12px] text-white text-[16px] font-medium leading-normal bg-[#63a836] rounded-[8px]"},D={key:1,class:"flex items-center justify-center px-[20px] py-[12px] text-white text-[16px] font-medium leading-normal bg-gray9 rounded-[8px]"},A={key:2,class:"mb-[8px] flex flex-col sm:flex-row items-center gap-[16px]"},B=["placeholder"],V=["disabled"],F={class:"text-gray1 text-[14px] leading-[1.43]"},I={href:"/",class:"underline"},X={__name:"Subscription",setup(p){const l={PL:{subscribe:"Zapisz się do newslettera",subSuccess:"Wiadomość została wysłana!",subError:"Wysłanie wiadomości nie powiodło się.",emailPlaceholder:"Twój adres email",emailSending:"Wysyłanie...",emailSave:"Zapisz",weCare:"Dbamy o",privacyPolicy:"politykę prywatności"},EN:{subscribe:"Subscribe to newsletter",subSuccess:"Message sent!",subError:"Message sending failed.",emailPlaceholder:"Your email address",emailSending:"Sending...",emailSave:"Save",weCare:"We care about",privacyPolicy:"privacy policy"}},{frontmatter:a}=_(),e=b(()=>l[a.value.language]),s=m(null),c=m({email:""});async function d(){s.value="pending",(await $(c.value)).success?s.value="success":(s.value="fail",setTimeout(()=>{s.value=null},3e3))}return(i,u)=>(n(),r("div",z,[t("div",C,[t("div",null,[t("p",P,o(e.value.subscribe),1)]),t("form",{onSubmit:u[1]||(u[1]=v(x=>d(),["prevent"])),class:"w-full max-w-[558px] flex-grow",name:"subscriptionFormBanner"},[s.value==="success"?(n(),r("div",N,o(e.value.subSuccess),1)):s.value==="fail"?(n(),r("div",D,o(e.value.subError),1)):(n(),r("div",A,[f(t("input",{"onUpdate:modelValue":u[0]||(u[0]=x=>c.value.email=x),"aria-label":"email input",name:"email",type:"email",autocomplete:"email",required:"",placeholder:e.value.emailPlaceholder,class:"w-full min-w-[270px] px-[14px] py-[10px] bg-white rounded-[8px] border border-gray11 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] placeholder-gray"},null,8,B),[[h,c.value.email]]),t("button",{type:"submit",disabled:s.value==="pending",class:"w-full sm:w-fit min-w-[182px] py-[12px] px-[20px] btn_primary"},o(s.value==="pending"?e.value.emailSending:e.value.emailSave),9,V)])),t("p",F,[y(o(e.value.weCare)+" ",1),t("a",I,o(e.value.privacyPolicy),1)])],32)])]))}},M={class:"container pb-[64px] sm:pb-[96px]"},U={class:"relative p-[40px] md:p-[64px] rounded-[16px] bg-red1 flex flex-col gap-[20px] md:flex-row justify-between items-center"},W={class:"text-white"},O={class:"mb-[16px] text-[30px] font-semibold leading-[1.27]"},R={class:"md:text-[20px] leading-normal"},q=t("img",{src:k,alt:"content image",class:"hidden lg:block w-[370px] xl:w-[396px] absolute z-10 bottom-0 left-1/2"},null,-1),Y={class:"flex flex-col"},Z=t("img",{src:j,alt:"content image",class:"lg:hidden",width:"396",height:"213",loading:"lazy"},null,-1),J=["href"],ee={__name:"ContactUsBanner",setup(p){const{frontmatter:l}=_(),a={PL:{title:"Rozpocznij projekt z Nami!",description:"Napisz do nas i uzyskaj natychmiastową wycenę",contactUrl:"/#sekcja-formularz",contactTitle:"Umów konsultację"},EN:{title:"Start your project with us!",description:"Write to us and get an instant quote",contactUrl:"/en#contact-section",contactTitle:"Write to us"}},e=b(()=>a[l.value.language]);return(s,c)=>(n(),r("div",M,[t("div",U,[t("div",W,[t("p",O,o(e.value.title),1),t("p",R,o(e.value.description),1)]),q,t("div",Y,[Z,t("a",{href:e.value.contactUrl,class:"relative z-20 flex justify-center items-center py-[12px] px-[20px] text-gray1 text-[16px] font-medium leading-normal bg-white border border-grayText1 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:text-red1 active:opacity-[0.5]"},o(e.value.contactTitle),9,J)])])]))}},K={class:"blog-section_list"},te={__name:"BlogCardList",props:{listLength:{type:Number,required:!1}},setup(p){const l=p,a=m([]),e=m(0),{frontmatter:s}=_();return w(async()=>{const d=await{pl:()=>g(()=>import("./blogCardsPL.7ac60bff.js"),[]),en:()=>g(()=>import("./blogCardsEN.42867569.js"),[])}[s.value.language.toLowerCase()]();a.value=d.default,e.value=l.listLength?l.listLength:a.value.length}),(c,d)=>(n(),r("ul",K,[(n(!0),r(S,null,L(a.value.slice(0,e.value),i=>(n(),r("li",{key:i.id},[T(E,{articleLink:i.articleLink,imageFolderName:i.imageFolderName,articleCategory:i.articleCategory,articleTitle:i.articleTitle,articleDesc:i.articleDesc,imageLabel:i.imageLabel},null,8,["articleLink","imageFolderName","articleCategory","articleTitle","articleDesc","imageLabel"])]))),128))]))}};export{te as _,ee as a,X as b,$ as c};
