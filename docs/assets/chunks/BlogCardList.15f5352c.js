import{m as x,i as b,h as m,o as n,c as r,a as t,t as o,s as v,v as h,x as f,d as y,A as w,F as j,r as z,b as N,O as _}from"./framework.2938b505.js";import{_ as T}from"./BlogCard.8a432a47.js";const S=async p=>{const l="https://connect.mailerlite.com/api/subscribers";try{return{success:!0,data:(await fetch(l,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMTQ3NTI5NjgxMDk2YzFjNzY2ZWIxNmJhNGI0ZjAwZjgyNzBjOTg5ZjNhYjM1Njk4ZTkzYjVjMzgwZTlkYmE1ODAyMzA2ZWNmYzc4MjZiNGYiLCJpYXQiOjE3MzIxOTQ3MjguMDc2OTc5LCJuYmYiOjE3MzIxOTQ3MjguMDc2OTgyLCJleHAiOjQ4ODc4NjgzMjguMDY3MTA1LCJzdWIiOiIxMjExMzQ0Iiwic2NvcGVzIjpbXX0.FZh3SlIVzbV8nqQhkUw2kxhCCLDbtWzaqAg064bQ-nTmAWHBQi0_ZR7E0HHLpdfc7yqwiu6qQLRqwl8g3koD5_8uVaIKcamWSVh3p8hcQPPnEM15ufEowdSG90FbkLNUKqf2L0tvSJwi1IBtlbfvUUpx2fFNJuq_hbeEO9jcZWMa-YSYR3geABC2NjiAjNEdfJPSOuxJVRurT183Mog_J3qpXAiS6C5bM5WH5nD3JtY0yqamdLBwN2AzpnOuUZF7CTzvrQWvQHgZJ4269KLmANobnPeTRbOcY4axVo5tXHzR3DMRWdT3iFkJz3YV_n3b9SSoTqCfHunDCrDY1a36ZEfOTxaM8RrEf36onv4cgcvjEd1XAlftlbRg2P8ixYx9OovobSLz5czF_fEmKHKoNagIqGEu3A1V6zWcSCExJSDqeBbdae9h80oV2Tg8942AkXrUic3v6lNk_wloYWKOgzkO_Cajkw6BZOX0hXqXixrBonVlvgrBVPHBq3eNwGnDyMyTDH6Zb_mu6fJ-wxvILrTLQLbv4n1zeljqKmFTthJo9gVt9GiNziRD6ErVLx2mtUNtdE3kWs0vAHBD1QJ19gj5ujU3mlQoYy16xSDOlt46W_GK_RjcOjPAWyYlYhjxbNY5R8r4TL-fSfqk72v1QQANiXh4953NMSXispTUyHg"},body:JSON.stringify(p)})).data}}catch(a){return console.error("Error:",a),{success:!1,error:a.message}}},L={class:"section_spacing bg-gray2"},k={class:"container flex flex-col lg:flex-row justify-between items-center lg:items-start gap-[32px]"},M={class:"text-color1 text-[36px] font-semibold leading-[1.22] tracking-[-0.72px]"},O={key:0,class:"flex items-center justify-center px-[20px] py-[12px] text-white text-[16px] font-medium leading-normal bg-[#63a836] rounded-[8px]"},D={key:1,class:"flex items-center justify-center px-[20px] py-[12px] text-white text-[16px] font-medium leading-normal bg-gray9 rounded-[8px]"},E={key:2,class:"mb-[8px] flex flex-col sm:flex-row items-center gap-[16px]"},C=["placeholder"],A=["disabled"],J={class:"text-gray1 text-[14px] leading-[1.43]"},Y={href:"/",class:"underline"},G={__name:"Subscription",setup(p){const l={PL:{subscribe:"Zapisz się do newslettera",subSuccess:"Wiadomość została wysłana!",subError:"Wysłanie wiadomości nie powiodło się.",emailPlaceholder:"Twój adres email",emailSending:"Wysyłanie...",emailSave:"Zapisz",weCare:"Dbamy o",privacyPolicy:"politykę prywatności"},EN:{subscribe:"Subscribe to newsletter",subSuccess:"Message sent!",subError:"Message sending failed.",emailPlaceholder:"Your email address",emailSending:"Sending...",emailSave:"Save",weCare:"We care about",privacyPolicy:"privacy policy"}},{frontmatter:a}=x(),e=b(()=>l[a.value.language]),s=m(null),c=m({email:""});async function d(){s.value="pending",(await S(c.value)).success?s.value="success":(s.value="fail",setTimeout(()=>{s.value=null},3e3))}return(i,u)=>(n(),r("div",L,[t("div",k,[t("div",null,[t("p",M,o(e.value.subscribe),1)]),t("form",{onSubmit:u[1]||(u[1]=v(g=>d(),["prevent"])),class:"w-full max-w-[558px] flex-grow",name:"subscriptionFormBanner"},[s.value==="success"?(n(),r("div",O,o(e.value.subSuccess),1)):s.value==="fail"?(n(),r("div",D,o(e.value.subError),1)):(n(),r("div",E,[h(t("input",{"onUpdate:modelValue":u[0]||(u[0]=g=>c.value.email=g),"aria-label":"email input",name:"email",type:"email",autocomplete:"email",required:"",placeholder:e.value.emailPlaceholder,class:"w-full min-w-[270px] px-[14px] py-[10px] bg-white rounded-[8px] border border-gray11 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] placeholder-gray"},null,8,C),[[f,c.value.email]]),t("button",{type:"submit",disabled:s.value==="pending",class:"w-full sm:w-fit min-w-[182px] py-[12px] px-[20px] btn_primary"},o(s.value==="pending"?e.value.emailSending:e.value.emailSave),9,A)])),t("p",J,[y(o(e.value.weCare)+" ",1),t("a",Y,o(e.value.privacyPolicy),1)])],32)])]))}},V="/assets/napisz-do-nas-blog.78a55c3f.svg",W="/assets/napisz-do-nas-blog2.9bd0d808.svg",I={class:"container pb-[64px] sm:pb-[96px]"},Q={class:"relative p-[40px] md:p-[64px] rounded-[16px] bg-red1 flex flex-col gap-[20px] md:flex-row justify-between items-center"},q={class:"text-white"},P={class:"mb-[16px] text-[30px] font-semibold leading-[1.27]"},B={class:"md:text-[20px] leading-normal"},Z=t("img",{src:V,alt:"content image",class:"hidden lg:block w-[370px] xl:w-[396px] absolute z-10 bottom-0 left-1/2"},null,-1),R={class:"flex flex-col"},U=t("img",{src:W,alt:"content image",class:"lg:hidden",width:"396",height:"213",loading:"lazy"},null,-1),$=["href"],K={__name:"ContactUsBanner",setup(p){const{frontmatter:l}=x(),a={PL:{title:"Rozpocznij projekt z Nami!",description:"Napisz do nas i uzyskaj natychmiastową wycenę",contactUrl:"/#sekcja-formularz",contactTitle:"Umów konsultację"},EN:{title:"Start your project with us!",description:"Write to us and get an instant quote",contactUrl:"/en#contact-section",contactTitle:"Write to us"}},e=b(()=>a[l.value.language]);return(s,c)=>(n(),r("div",I,[t("div",Q,[t("div",q,[t("p",P,o(e.value.title),1),t("p",B,o(e.value.description),1)]),Z,t("div",R,[U,t("a",{href:e.value.contactUrl,class:"relative z-20 flex justify-center items-center py-[12px] px-[20px] text-gray1 text-[16px] font-medium leading-normal bg-white border border-grayText1 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:text-red1 active:opacity-[0.5]"},o(e.value.contactTitle),9,$)])])]))}},F={class:"blog-section_list"},ee={__name:"BlogCardList",props:{listLength:{type:Number,required:!1}},setup(p){const l=p,a=m([]),e=m(0),{frontmatter:s}=x();return w(async()=>{const d=await{pl:()=>_(()=>import("./blogCardsPL.7ac60bff.js"),[]),en:()=>_(()=>import("./blogCardsEN.42867569.js"),[])}[s.value.language.toLowerCase()]();a.value=d.default,e.value=l.listLength?l.listLength:a.value.length}),(c,d)=>(n(),r("ul",F,[(n(!0),r(j,null,z(a.value.slice(0,e.value),i=>(n(),r("li",{key:i.id},[N(T,{articleLink:i.articleLink,imageFolderName:i.imageFolderName,articleCategory:i.articleCategory,articleTitle:i.articleTitle,articleDesc:i.articleDesc,imageLabel:i.imageLabel},null,8,["articleLink","imageFolderName","articleCategory","articleTitle","articleDesc","imageLabel"])]))),128))]))}};export{ee as _,K as a,G as b,S as c};
