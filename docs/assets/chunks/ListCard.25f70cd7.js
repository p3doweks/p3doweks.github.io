import{u as x,h as _,g as d,f as v,o as n,c as r,a as e,t as o,x as w,y as k,z as L,l as m,d as j,q as z,F as N,i as S,k as P,s as f}from"./framework.f8ef6e90.js";import{_ as $,a as M}from"./napisz-do-nas-blog2.6d72b68f.js";import{_ as T}from"./BlogCard.b94a6b62.js";const E={key:0,class:"section_spacing bg-gray2"},C={class:"container flex flex-col lg:flex-row justify-between items-center lg:items-start gap-[32px]"},U={class:"text-color1 text-[36px] font-semibold leading-[1.22] tracking-[-0.72px]"},D={class:"mt-[18px] text-gray1 text-[16px] font-normal leading-normal"},B=["action","onSubmit"],F={class:"mb-[8px] flex flex-col xs:flex-row items-center gap-[16px]"},W=["placeholder"],q=e("input",{type:"hidden",name:"ml-submit",value:"1"},null,-1),R=e("input",{type:"hidden",name:"anticsrf",value:"true"},null,-1),V=["disabled"],A={key:0,class:"mb-[8px] flex items-center justify-center px-[20px] py-[12px] text-white text-[16px] font-medium leading-normal bg-[#63a836] rounded-[8px]"},O={key:1,class:"mb-[8px] flex items-center justify-center px-[20px] py-[12px] text-white text-[16px] font-medium leading-normal bg-gray9 rounded-[8px]"},I={class:"text-gray1 text-[14px] leading-[1.43]"},Y={href:"/legal/polityka-prywatnosci",class:"underline"},ne={__name:"Subscription",setup(g){const i={PL:{subscribe:"Newsletter",description:"Praktyczna wiedza o budowie software szybko i bez bugow. Niuanse, które pomija reszta branży, a które będą stanowić Twoją przewagę konkurencyjną.",successMsg:"Wiadomość została wysłana!",errorMsg:"Wysłanie wiadomości nie powiodło się.",placeholder:"Twój adres email",sending:"Wysyłanie...",signup:"Zapisz",weCare:"Dbamy o",privacyPolicy:"politykę prywatności"},EN:{subscribe:"Newsletter",description:"Practical knowledge of building software quickly and without bugs. Nuances that the rest of the industry ignores and that will be your competitive advantage.",successMsg:"Message sent!",errorMsg:"Message sending failed.",placeholder:"Your email address",sending:"Sending...",signup:"Signup",weCare:"We care about",privacyPolicy:"privacy policy"}},{frontmatter:a}=x(),t=_(()=>i[a.value.language]),p=_(()=>a.value.language==="PL"?"https://assets.mailerlite.com/jsonp/1200426/forms/140986030901692170/subscribe":"https://assets.mailerlite.com/jsonp/1200426/forms/141054519117088355/subscribe"),l=d(!1),s=d(!1),u=d(!1),y=async h=>{u.value=!0;try{await fetch(p.value,{method:"POST",body:new URLSearchParams(new FormData(h.target))}),u.value=!1,l.value=!0}catch(b){console.log(b),u.value=!1,s.value=!0}};return(h,b)=>t.value&&v(!0)?(n(),r("div",E,[e("div",C,[e("div",null,[e("p",U,o(t.value.subscribe),1),e("p",D,o(t.value.description),1)]),e("form",{action:p.value,method:"post",onSubmit:w(y,["prevent"]),class:"relative w-full max-w-[558px] flex-grow"},[k(e("div",F,[e("input",{value:"","aria-label":"email input",name:"fields[email]",type:"email",autocomplete:"email",required:"",placeholder:t.value.placeholder,class:"w-full min-w-[270px] px-[14px] py-[10px] bg-white rounded-[8px] border border-gray11 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] placeholder-gray"},null,8,W),q,R,e("button",{type:"submit",disabled:u.value,class:"w-full xs:w-fit min-w-[174px] py-[12px] px-[20px] btn_primary"},o(u.value?t.value.sending:t.value.signup),9,V)],512),[[L,!l.value&&!s.value]]),l.value?(n(),r("div",A,o(t.value.successMsg),1)):m("",!0),s.value?(n(),r("div",O,o(t.value.errorMsg),1)):m("",!0),e("p",I,[j(o(t.value.weCare)+" ",1),e("a",Y,o(t.value.privacyPolicy),1)])],40,B)])])):m("",!0)}},Z={key:0,class:"container mb-[64px] sm:mb-[96px] last-of-type:mb-0"},G={class:"relative p-[40px] md:p-[64px] rounded-[16px] bg-red1 flex flex-col gap-[20px] md:flex-row justify-between items-center"},H={class:"text-white"},J={class:"mb-[16px] text-[30px] font-semibold leading-[1.27]"},K={class:"md:text-[20px] leading-normal"},Q=e("img",{src:$,alt:"content image",class:"hidden lg:block w-[370px] xl:w-[396px] absolute z-10 bottom-0 left-1/2"},null,-1),X={class:"flex flex-col"},ee=e("img",{src:M,alt:"content image",class:"lg:hidden",width:"396",height:"213",loading:"lazy"},null,-1),te=["href"],le={__name:"ContactUsBanner",setup(g){const{frontmatter:c}=x(),i={PL:{title:"Rozpocznij projekt z Nami!",description:"Napisz do nas i uzyskaj natychmiastową wycenę",contactUrl:"/konsultacja",contactTitle:"Bezpłatna konsultacja"},EN:{title:"Start your project with us!",description:"Write to us and get an instant quote",contactUrl:"/en#contact-section",contactTitle:"Write to us"}},a=_(()=>i[c.value.language]);return(t,p)=>a.value?(n(),r("div",Z,[e("div",G,[e("div",H,[e("p",J,o(a.value.title),1),e("p",K,o(a.value.description),1)]),Q,e("div",X,[ee,e("a",{href:a.value.contactUrl,class:"relative z-20 flex justify-center items-center py-[12px] px-[20px] text-gray1 text-[16px] font-medium leading-normal bg-white border border-grayText1 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:text-red1 active:opacity-[0.5]"},o(a.value.contactTitle),9,te)])])])):m("",!0)}},ae={class:"blog-section_list"},re={__name:"ListCard",props:{listLength:{type:Number,required:!1}},setup(g){const c=g,i=d([]),a=d(0),{frontmatter:t}=x();return z(async()=>{const l=await{pl:()=>f(()=>import("./PL.c99568ac.js"),[]),en:()=>f(()=>import("./EN.f4fba15f.js"),[])}[t.value.language.toLowerCase()]();i.value=l.default,a.value=c.listLength?c.listLength:i.value.length}),(p,l)=>(n(),r("ul",ae,[(n(!0),r(N,null,S(i.value.slice(0,a.value),s=>(n(),P(T,{key:s.title,title:s.title,description:s.description,category:s.category,pageUrl:s.pageUrl,imageFolderName:s.imageFolderName,imageLabel:s.imageLabel},null,8,["title","description","category","pageUrl","imageFolderName","imageLabel"]))),128))]))}};export{re as _,le as a,ne as b};
