import{C as v,_ as P,a as $,b as T,c as F,A as I,d as _,P as d,G as m,e as r,O as B}from"./chunks/ContainerLandingPage.714a7fb8.js";import{_ as D}from"./chunks/TitleImageLeft.fc421eae.js";import{_ as A}from"./chunks/TitleImageRight.784f9f31.js";import{_ as w,u as b,o as g,c as u,a as t,r as f,n as x,f as c,h,t as y,l as L,p as q,j as C,b as a,w as n,d as e,e as N}from"./chunks/framework.f8ef6e90.js";import{_ as U}from"./chunks/YouTube.40bc6262.js";import{_ as W,a as S}from"./chunks/napisz-do-nas-blog2.6d72b68f.js";import{_ as p}from"./chunks/ButtonActionSet.4b0dbd50.js";import{_ as E}from"./chunks/HeroSection.3e8b8247.js";import{_ as K}from"./chunks/CTALabel.74930ac7.js";import"./chunks/OurPartners.vue_vue_type_style_index_0_scoped_3c4b283f_lang.4ed993c7.js";import"./chunks/ShowDetailsIcon.3938d150.js";const M={class:"flex flex-col items-center gap-24"},O={class:"w-full grid lg:grid-cols-2 lg:gap-20 xl:gap-32 items-start"},J={class:"content"},G={class:"w-full h-full"},H=["srcset"],V=["srcset"],Z=["srcset"],R=["srcset"],Q=["srcset"],X=["srcset"],Y=["src"],tt={__name:"TitleImageBottom",props:{imageFolder:{type:String,required:!0}},setup(i){const{frontmatter:o}=b();return(l,s)=>(g(),u("div",{class:x([c(o).layout==="landing-page"?"landing_paragraph_spacing mt-[144px] lg:mt-[176px]":"paragraph_spacing mt-[64px]"])},[t("section",{class:x([c(o).layout==="landing-page"?"":"container"])},[t("div",M,[t("div",O,[t("div",null,[f(l.$slots,"title",{},void 0,!0)]),t("div",J,[f(l.$slots,"content",{},void 0,!0)])]),t("picture",G,[t("source",{media:"(min-width: 768px)",width:"1200",srcset:`${i.imageFolder}/title-image-bottom-desk@1x.webp 1x,
                      ${i.imageFolder}/title-image-bottom-desk@2x.webp 2x`,type:"image/webp"},null,8,H),t("source",{media:"(min-width: 768px)",width:"1200",srcset:`${i.imageFolder}/title-image-bottom-desk@1x.jpg 1x,
                      ${i.imageFolder}/title-image-bottom-desk@2x.jpg 2x`,type:"image/webp"},null,8,V),t("source",{media:"(min-width: 451px)",width:"740",srcset:`${i.imageFolder}/title-image-bottom-tab@1x.webp 1x,
                      ${i.imageFolder}/title-image-bottom-tab@2x.webp 2x`,type:"image/webp"},null,8,Z),t("source",{media:"(min-width: 451px)",width:"740",srcset:`${i.imageFolder}/title-image-bottom-tab@1x.jpg 1x,
                      ${i.imageFolder}/title-image-bottom-tab@2x.jpg 2x`,type:"image/webp"},null,8,R),t("source",{media:"(max-width: 450px)",width:"430",srcset:`${i.imageFolder}/title-image-bottom-mob@1x.webp 1x,
                      ${i.imageFolder}/title-image-bottom-mob@2x.webp 2x`,type:"image/webp"},null,8,Q),t("source",{media:"(max-width: 450px)",width:"430",srcset:`${i.imageFolder}/title-image-bottom-mob@1x.jpg 1x,
                      ${i.imageFolder}/title-image-bottom-mob@2x.jpg 2x`,type:"image/webp"},null,8,X),t("img",{src:`${i.imageFolder}/title-image-bottom-desk@1x.jpg`,alt:"",width:"1200",loading:"lazy",class:"mx-auto w-full rounded-xl"},null,8,Y)])])],2)],2))}},k=w(tt,[["__scopeId","data-v-53ceaf47"]]);const z=i=>(q("data-v-6853cb73"),i=i(),C(),i),et={class:"text-white lg:max-w-[500px]"},at={class:"mb-[16px] text-[30px] font-semibold leading-[1.27]"},nt=["innerHTML"],it=z(()=>t("img",{src:W,alt:"content image",class:"hidden xl:block w-[420px] absolute left-1/2 bottom-0"},null,-1)),ot={class:"shrink-0 flex flex-col max-w-[350px]"},lt=z(()=>t("img",{src:S,alt:"content image",class:"xl:hidden",width:"396",height:"213",loading:"lazy"},null,-1)),st={href:"https://calendar.app.google/fGZb5CLnPCaFtUQh8",target:"_blank",class:"relative z-10 shrink-0 text-center flex justify-center items-center py-[12px] px-[20px] text-gray1 text-[16px] font-medium leading-normal bg-white border border-grayText1 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:text-red1 active:opacity-[0.5]"},rt={__name:"ConsultationBanner",setup(i){const{frontmatter:o}=b(),l={PL:{title:"Bezpłatna konsultacja",description:"Kontakt bezpośredni pod [EMAIL] lub [PHONE]",linkTitle:"Umów  spotkanie"},EN:{title:"Free consultation",description:"Contact directly at [EMAIL] or [PHONE]",linkTitle:"Make an appointment"}},s=h(()=>l[o.value.language]),j=h(()=>s.value.description.replace("[EMAIL]",'<a href="mailto:info@p3doweks.com">info@p3doweks.com</a>').replace("[PHONE]",'<a href="tel:+48796594347" class="whitespace-nowrap">+48 796 594 347</a>'));return(le,se)=>s.value?(g(),u("div",{key:0,class:x([[c(o).layout==="landing-page"?"landing_paragraph_spacing mt-[144px] lg:mt-[176px]":"paragraph_spacing my-[64px] last-of-type:mb-0"],"relative p-[40px] md:p-[58px] rounded-[16px] bg-gray9 bg-center bg-cover bg-no-repeat bg_image flex flex-col gap-[20px] md:flex-row justify-between items-center"])},[t("div",et,[t("p",at,y(s.value.title),1),t("p",{innerHTML:j.value,class:"lg:text-[20px] leading-normal"},null,8,nt)]),it,t("div",ot,[lt,t("a",st,y(s.value.linkTitle),1)])],2)):L("",!0)}},dt=w(rt,[["__scopeId","data-v-6853cb73"]]),mt=t("h2",{id:"komponent-stworzony-z-mysla-o-stronie-głownej",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Komponent stworzony z myślą o stronie głównej!!! "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#komponent-stworzony-z-mysla-o-stronie-głownej","aria-label":'Permalink to "Komponent stworzony z myślą o stronie głównej!!!"'},"​")],-1),pt=t("h1",{id:"transformacja-twojego-zespołu-do-flow-100-500-deploymentow-na-produkcje-miesiecznie",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[36px] md:text-[48px] xl:text-[64px] leading-[1.2]"},[e("Transformacja Twojego zespołu do flow 100-500 deploymentów na produkcję miesięcznie "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#transformacja-twojego-zespołu-do-flow-100-500-deploymentow-na-produkcje-miesiecznie","aria-label":'Permalink to "Transformacja Twojego zespołu do flow 100-500 deploymentów na produkcję miesięcznie"'},"​")],-1),xt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Zyskaj niesamowitą stabilność systemu, wysokie tempo dostarczania zespołu i skup się na rozwoju biznesu.",-1),ct=t("h2",{id:"fail-fast",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Fail Fast "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#fail-fast","aria-label":'Permalink to "Fail Fast"'},"​")],-1),gt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora. Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),ut=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Doskonale rozumiemy Waszą sytuację i kontekst, ponieważ sami przechodziliśmy przez te wszystkie problemy. Udało nam się je skutecznie pokonać i wiemy jak Wam pomóc.",-1),_t=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Doskonale rozumiemy Waszą sytuację i kontekst, ponieważ sami przechodziliśmy przez te wszystkie problemy. Udało nam się je skutecznie pokonać i wiemy jak Wam pomóc.",-1),ft=t("h2",{id:"formy-wspołpracy",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Formy współpracy "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#formy-wspołpracy","aria-label":'Permalink to "Formy współpracy"'},"​")],-1),ht=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Proponujemy kilka możliwych poziomów naszego zaangażowania.",-1),yt=t("h3",{id:"plan-konsultacje",tabindex:"-1",class:"text-color1 font-semibold text-[24px] md:text-[30px] leading-normal"},[e("Plan "),t("strong",null,"Konsultacje"),e(),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#plan-konsultacje","aria-label":'Permalink to "Plan **Konsultacje**"'},"​")],-1),kt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},[t("strong",null,"20-50h"),e(" konsultacji")],-1),wt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},[t("strong",null,"Kluczowe elementy:")],-1),bt=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Audyt flow,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Wyznaczenie celów i inicjatyw,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},'"5 sekundowa" tablica kanban,'),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Wdrożenie limitu WIP,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"CI/CD (testy) przechodzące w 5-10 min,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Poprawny deployment script,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Monitorowanie postępów")],-1),zt=t("h3",{id:"plan-bootcamp",tabindex:"-1",class:"text-color1 font-semibold text-[24px] md:text-[30px] leading-normal"},[e("Plan "),t("strong",null,"Bootcamp"),e(),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#plan-bootcamp","aria-label":'Permalink to "Plan **Bootcamp**"'},"​")],-1),jt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},[t("strong",null,"od 10 do 25 dni"),e(" szkoleniowych")],-1),vt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},[e("Warsztaty i szkolenia "),t("strong",null,"na Waszym kodzie"),e(":")],-1),Pt=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Test-Driven Development (TDD) + Fail-fast,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Czyszczenie error logów via TDD (hackathon),"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Domain-Driven Design (DDD) + Refactoring,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Trunk-Based Development + Feature toggles")],-1),$t=t("h3",{id:"plan-infrastruktura",tabindex:"-1",class:"text-color1 font-semibold text-[24px] md:text-[30px] leading-normal"},[e("Plan "),t("strong",null,"Infrastruktura"),e(),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#plan-infrastruktura","aria-label":'Permalink to "Plan **Infrastruktura**"'},"​")],-1),Tt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},[t("strong",null,"od 40h"),e(" dla prostych środowisk linuxowych")],-1),Ft=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Nasz zespół usprawnia Waszą infrastrukturę tak aby uzyskać:",-1),It=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"stabilność,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"samowystarczalność (self-service) programisty")],-1),Bt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Dostarczymy:",-1),Dt=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Deployment script,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"System monitoringu (via TDD) na stacku EFG lub Waszym,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Środowiska test/prod na żądanie (Terraform via TDD),"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Single command development environment - jednodniowy onboarding pracownika")],-1),At=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Opcja:",-1),Lt=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Pair programming z Waszym inżynierem od infrastruktury")],-1),qt=N('<h3 id="jak-wyglada-konsultacja" tabindex="-1" class="text-color1 font-semibold text-[24px] md:text-[30px] leading-normal">Jak wygląda konsultacja? <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#jak-wyglada-konsultacja" aria-label="Permalink to &quot;Jak wygląda konsultacja?&quot;">​</a></h3><ul class="mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">konsultacja jest całkowicie <strong>bezpłatna</strong> i <strong>niewiążąca</strong>,</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">odpowiemy na wszystkie Twoje pytania czy wątpliwości,</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">spotkanie prowadzi Konrad Otrębski - <a href="https://www.linkedin.com/in/konradotrebski/" class="text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" target="_blank" rel="noreferrer">LinkedIn</a>,</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">czas trwania: 60 min,</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">miejsce: Google Meet</li></ul>',2),Ct=t("h3",{id:"jak-wyglada-konsultacja-1",tabindex:"-1",class:"text-color1 font-semibold text-[24px] md:text-[30px] leading-normal"},[e("Jak wygląda konsultacja? "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#jak-wyglada-konsultacja-1","aria-label":'Permalink to "Jak wygląda konsultacja?"'},"​")],-1),Nt=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},[e("konsultacja jest całkowicie "),t("strong",null,"bezpłatna"),e(" i "),t("strong",null,"niewiążąca"),e(",")]),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"odpowiemy na wszystkie Twoje pytania czy wątpliwości,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},[e("spotkanie prowadzi Konrad Otrębski - "),t("a",{href:"https://www.linkedin.com/in/konradotrebski/",class:"text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",target:"_blank",rel:"noreferrer"},"LinkedIn"),e(",")]),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"czas trwania: 60 min,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"miejsce: Google Meet")],-1),Ut=t("h3",{id:"jak-wyglada-konsultacja-2",tabindex:"-1",class:"text-color1 font-semibold text-[24px] md:text-[30px] leading-normal"},[e("Jak wygląda konsultacja? "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#jak-wyglada-konsultacja-2","aria-label":'Permalink to "Jak wygląda konsultacja?"'},"​")],-1),Wt=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},[e("konsultacja jest całkowicie "),t("strong",null,"bezpłatna"),e(" i "),t("strong",null,"niewiążąca"),e(",")]),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"odpowiemy na wszystkie Twoje pytania czy wątpliwości,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},[e("spotkanie prowadzi Konrad Otrębski - "),t("a",{href:"https://www.linkedin.com/in/konradotrebski/",class:"text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",target:"_blank",rel:"noreferrer"},"LinkedIn"),e(",")]),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"czas trwania: 60 min,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"miejsce: Google Meet")],-1),St=t("h2",{id:"lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Lorem ipsum dolor sit amet, consectetur adipisicing elit. "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit","aria-label":'Permalink to "Lorem ipsum dolor sit amet, consectetur adipisicing elit."'},"​")],-1),Et=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},[e("konsultacja jest całkowicie "),t("strong",null,"bezpłatna"),e(" i "),t("strong",null,"niewiążąca"),e(",")]),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"odpowiemy na wszystkie Twoje pytania czy wątpliwości,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},[e("spotkanie prowadzi Konrad Otrębski - "),t("a",{href:"https://www.linkedin.com/in/konradotrebski/",class:"text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",target:"_blank",rel:"noreferrer"},"LinkedIn"),e(",")]),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"czas trwania: 60 min,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"miejsce: Google Meet")],-1),Kt=t("h2",{id:"track-and-improve-results",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Track and improve results "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#track-and-improve-results","aria-label":'Permalink to "Track and improve results"'},"​")],-1),Mt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora. Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),Ot=t("h2",{id:"fail-fast-1",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Fail Fast "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#fail-fast-1","aria-label":'Permalink to "Fail Fast"'},"​")],-1),Jt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),Gt=t("h2",{id:"problemy-z-ktorymi-zmagaja-sie-zespoły-it",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Problemy, z którymi zmagają się zespoły IT "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#problemy-z-ktorymi-zmagaja-sie-zespoły-it","aria-label":'Permalink to "Problemy, z którymi zmagają się zespoły IT"'},"​")],-1),Ht=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Doskonale rozumiemy Waszą sytuację i kontekst, ponieważ sami przechodziliśmy przez te wszystkie problemy. Udało nam się je skutecznie pokonać i wiemy jak Wam pomóc.",-1),Vt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Uzyskasz odpowiedzi na Twoje pytania,",-1),Zt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"przekażesz nam podstawowy kontekst i ustalimy możliwości poprawy,",-1),Rt=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Jednodniowa konsultacja"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"gdzie szczegółowo postaramy się"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"zrozumieć obecne flow i sytuację Waszego zespołu,")],-1),Qt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Zamknięta prezentacja dla zespołu gdzie przedstawimy motywacyjne success story i zaadresujemy Wasze wątpliwości,",-1),Xt=t("h2",{id:"fail-fast-2",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Fail Fast "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#fail-fast-2","aria-label":'Permalink to "Fail Fast"'},"​")],-1),Yt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),te=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Uzyskasz odpowiedzi na Twoje pytania, przekażesz nam podstawowy kontekst i ustalimy możliwości poprawy,",-1),ee=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Uzyskasz odpowiedzi na Twoje pytania, przekażesz nam podstawowy kontekst i ustalimy możliwości poprawy,",-1),ae=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Uzyskasz odpowiedzi na Twoje pytania,",-1),ne=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"przekażesz nam podstawowy kontekst i ustalimy możliwości poprawy,",-1),ie=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Jednodniowa konsultacja"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"gdzie szczegółowo postaramy się"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"zrozumieć obecne flow i sytuację Waszego zespołu,")],-1),ye=JSON.parse('{"title":"KITCHEN","description":"KITCHEN","frontmatter":{"layout":"landing-page","title":"KITCHEN","description":"KITCHEN","ogTitle":"tytuł dla template w Linkedin i Facebook","ogDescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.","ogImage":"/uslugi/kitchen-sink/ogImage.jpg","language":"PL"},"headers":[],"relativePath":"uslugi/kitchen-sink.md","filePath":"uslugi/kitchen-sink.md"}'),oe={name:"uslugi/kitchen-sink.md"},ke=Object.assign(oe,{setup(i){return(o,l)=>(g(),u("div",null,[a(E,{imageFolder:"/uslugi/kitchen-sink/przykladowe"},{default:n(()=>[a(F,{content:"Przykład"}),a(K,{link:"#sekcja-kariera",textMain:"Zatrudniamy!",textSecond:"Sprawdź najnowsze oferty pracy"}),mt,a(p,{buttonPrimary:{name:"Umów konsultację",url:"#sekcja-formularz"}})]),_:1}),pt,xt,a(p,{buttonPrimary:{name:"Aplikuj",url:"/",external:!0},buttonSecondary:{name:"Przeczytaj",url:"/"}}),a(I,{imageFolder:"/uslugi/kitchen-sink"}),ct,gt,a(v,null,{default:n(()=>[a(_,{title:"Lorem ipsum dolor sit amet"},{default:n(()=>[ut]),_:1}),a(_,{title:"Lorem ipsum dolor sit amet"},{default:n(()=>[_t]),_:1})]),_:1}),a(P,null,{title:n(()=>[ft,ht]),cards:n(()=>[a(d,{buttonName:"Aplikuj",buttonUrl:"/"},{header:n(()=>[yt]),content:n(()=>[kt,wt,bt]),_:1}),a(d,{buttonName:"Aplikuj",buttonUrl:"/"},{header:n(()=>[zt]),content:n(()=>[jt,vt,Pt]),_:1}),a(d,{buttonName:"Aplikuj",buttonUrl:"/"},{header:n(()=>[$t]),content:n(()=>[Tt,Ft,It,Bt,Dt,At,Lt]),_:1})]),_:1}),qt,a(D,{imageFolder:"/uslugi/kitchen-sink/przykladowe"},{default:n(()=>[Ct,Nt]),_:1}),a(A,{imageFolder:"/uslugi/kitchen-sink/przykladowe"},{default:n(()=>[Ut,Wt]),_:1}),a(k,{imageFolder:"/uslugi/kitchen-sink"},{title:n(()=>[St]),content:n(()=>[Et]),_:1}),a(k,{imageFolder:"/uslugi/kitchen-sink"},{title:n(()=>[Kt]),content:n(()=>[Mt,a(p,{buttonPrimary:{name:"Aplikuj",url:"/"}})]),_:1}),Ot,Jt,a(U,{iframeUrl:"https://www.youtube.com/embed/enfBJqz1LtA",iframeBgImage:"/uslugi/kitchen-sink/youtube.jpg"}),Gt,Ht,a($,null,{default:n(()=>[a(m,{title:"Bezpłatne konsultacje"},{default:n(()=>[Vt,Zt]),_:1}),a(m,{title:"Bezpłatne konsultacje"},{default:n(()=>[Rt]),_:1}),a(m,{title:"Bezpłatne konsultacje"},{default:n(()=>[Qt]),_:1})]),_:1}),Xt,Yt,a(T,null,{default:n(()=>[a(r,{iconUrl:"/uslugi/kitchen-sink/counter_1.svg",title:"Bezpłatne konsultacje"},{default:n(()=>[te]),_:1}),a(r,{iconUrl:"/uslugi/kitchen-sink/counter_2.svg",title:"Bezpłatne konsultacje"},{default:n(()=>[ee]),_:1}),a(r,{iconUrl:"/uslugi/kitchen-sink/counter_3.svg",title:"Bezpłatne konsultacje"},{default:n(()=>[ae,ne]),_:1}),a(r,{iconUrl:"/uslugi/kitchen-sink/counter_4.svg",title:"Bezpłatne konsultacje"},{default:n(()=>[ie]),_:1})]),_:1}),a(B),a(dt)]))}});export{ye as __pageData,ke as default};
