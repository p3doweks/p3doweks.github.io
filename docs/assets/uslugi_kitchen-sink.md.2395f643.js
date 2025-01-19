import{C as v,_ as T,A as $,a as f,G as r}from"./chunks/GridItemTwoCols.e133543e.js";import{_ as P,G as x}from"./chunks/GridItem.67290e7b.js";import{_ as F}from"./chunks/TitleImageLeft.e90da43b.js";import{_ as I}from"./chunks/TitleImageRight.3356cead.js";import{_ as w,u as b,o as m,c as p,a as t,i as h,n as u,f as _,k as y,t as d,h as B,p as A,m as D,b as a,w as n,d as e,e as L}from"./chunks/framework.d651d42f.js";import{_ as C}from"./chunks/YouTube.499e9ef0.js";import{_ as q,a as S}from"./chunks/napisz-do-nas-blog2.6d72b68f.js";import{B as c}from"./chunks/ButtonActionSet.2b8d2514.js";import{_ as K,a as N,P as g,O as U}from"./chunks/SubTitle.04ed2256.js";import{_ as W}from"./chunks/HeroSection.7f749f53.js";import"./chunks/ShowDetailsIcon.db765ef2.js";import"./chunks/OurPartners.vue_vue_type_style_index_0_scoped_25920f8e_lang.4ed993c7.js";import"./chunks/useWindowWidth.e82733e9.js";import"./chunks/PricingCard.vue_vue_type_style_index_0_scoped_58edf948_lang.4ed993c7.js";const E={class:"flex flex-col items-center gap-24"},M={class:"w-full grid lg:grid-cols-2 lg:gap-20 xl:gap-32 items-start"},H={class:"content"},O={class:"w-full h-full"},G=["srcset"],V=["srcset"],Z=["srcset"],J=["srcset"],R=["srcset"],Q=["srcset"],X=["src"],Y={__name:"TitleImageBottom",props:{imageFolder:{type:String,required:!0}},setup(i){const{frontmatter:o}=b();return(l,s)=>(m(),p("div",{class:u([_(o).layout==="landing-page"?"landing_paragraph_spacing mt-[144px] lg:mt-[176px]":"paragraph_spacing mt-[64px]"])},[t("section",{class:u([_(o).layout==="landing-page"?"":"container"])},[t("div",E,[t("div",M,[t("div",null,[h(l.$slots,"title",{},void 0,!0)]),t("div",H,[h(l.$slots,"content",{},void 0,!0)])]),t("picture",O,[t("source",{media:"(min-width: 768px)",width:"1200",srcset:`${i.imageFolder}/title-image-bottom-desk@1x.webp 1x,
                      ${i.imageFolder}/title-image-bottom-desk@2x.webp 2x`,type:"image/webp"},null,8,G),t("source",{media:"(min-width: 768px)",width:"1200",srcset:`${i.imageFolder}/title-image-bottom-desk@1x.jpg 1x,
                      ${i.imageFolder}/title-image-bottom-desk@2x.jpg 2x`,type:"image/webp"},null,8,V),t("source",{media:"(min-width: 451px)",width:"740",srcset:`${i.imageFolder}/title-image-bottom-tab@1x.webp 1x,
                      ${i.imageFolder}/title-image-bottom-tab@2x.webp 2x`,type:"image/webp"},null,8,Z),t("source",{media:"(min-width: 451px)",width:"740",srcset:`${i.imageFolder}/title-image-bottom-tab@1x.jpg 1x,
                      ${i.imageFolder}/title-image-bottom-tab@2x.jpg 2x`,type:"image/webp"},null,8,J),t("source",{media:"(max-width: 450px)",width:"430",srcset:`${i.imageFolder}/title-image-bottom-mob@1x.webp 1x,
                      ${i.imageFolder}/title-image-bottom-mob@2x.webp 2x`,type:"image/webp"},null,8,R),t("source",{media:"(max-width: 450px)",width:"430",srcset:`${i.imageFolder}/title-image-bottom-mob@1x.jpg 1x,
                      ${i.imageFolder}/title-image-bottom-mob@2x.jpg 2x`,type:"image/webp"},null,8,Q),t("img",{src:`${i.imageFolder}/title-image-bottom-desk@1x.jpg`,alt:"",width:"1200",loading:"lazy",class:"mx-auto w-full rounded-xl"},null,8,X)])])],2)],2))}},k=w(Y,[["__scopeId","data-v-53ceaf47"]]);const z=i=>(A("data-v-0968821a"),i=i(),D(),i),tt={class:"text-white lg:max-w-[500px]"},et={class:"mb-[16px] text-[30px] font-semibold leading-[1.27]"},at=["innerHTML"],nt=z(()=>t("img",{src:q,alt:"content image",class:"hidden xl:block w-[420px] absolute left-1/2 bottom-0"},null,-1)),it={class:"shrink-0 flex flex-col max-w-[350px]"},ot=z(()=>t("img",{src:S,alt:"content image",class:"xl:hidden",width:"396",height:"213",loading:"lazy"},null,-1)),lt={href:"https://calendar.app.google/fGZb5CLnPCaFtUQh8",target:"_blank",class:"relative z-10 shrink-0 text-center flex justify-center items-center py-[12px] px-[20px] text-gray1 text-[16px] font-medium leading-normal bg-white border border-grayText1 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:text-red1 active:opacity-[0.5]"},st={__name:"ConsultationBanner",setup(i){const{frontmatter:o}=b(),l={PL:{title:"Bezpłatna konsultacja",description:"Kontakt bezpośredni pod [EMAIL] lub [PHONE]",linkTitle:"Umów spotkanie"},EN:{title:"Free consultation",description:"Contact directly at [EMAIL] or [PHONE]",linkTitle:"Make an appointment"}},s=y(()=>l[o.value.language]),j=y(()=>s.value.description.replace("[EMAIL]",'<a href="mailto:info@p3doweks.com">info@p3doweks.com</a>').replace("[PHONE]",'<a href="tel:+48796594347" class="whitespace-nowrap">+48 796 594 347</a>'));return(pe,xe)=>s.value?(m(),p("div",{key:0,class:u([[_(o).layout==="landing-page"?"landing_paragraph_spacing mt-[144px] lg:mt-[176px]":"paragraph_spacing my-[64px] last-of-type:mb-0"],"relative p-[40px] md:p-[58px] rounded-[16px] bg-gray9 bg-center bg-cover bg-no-repeat bg_image flex flex-col gap-[20px] md:flex-row justify-between items-center"])},[t("div",tt,[t("p",et,d(s.value.title),1),t("p",{innerHTML:j.value,class:"lg:text-[20px] leading-normal"},null,8,at)]),nt,t("div",it,[ot,t("a",lt,d(s.value.linkTitle),1)])],2)):B("",!0)}},rt=w(st,[["__scopeId","data-v-0968821a"]]),dt="/assets/arrow-right.a9bfcd50.svg",mt=["href"],pt={class:"mr-[12px] min-h-[24px] px-[10px] py-[2px] rounded-[16px] justify-center items-center inline-flex text-red1 text-[14px] bg-white font-medium leading-[1.25]"},xt={class:"mr-[4px] text-red1 text-[12px] md:text-[14px] font-medium leading-[1.25]"},ct=t("img",{src:dt,alt:"",class:"w-[14px] h-[14px]"},null,-1),gt={__name:"CTALabel",props:{link:String,textMain:String,textSecond:String},setup(i){return(o,l)=>(m(),p("a",{href:i.link,class:"mb-[16px] w-full xs:w-fit min-h-[32px] px-[4px] pr-[10px] py-[4px] rounded-[16px] justify-start items-center inline-flex bg-[#FFECF0] hover:scale-[1.02] transition-all"},[t("span",pt,d(i.textMain),1),t("span",xt,d(i.textSecond),1),ct],8,mt))}},ut=t("h2",{id:"komponent-stworzony-z-mysla-o-stronie-głownej",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Komponent stworzony z myślą o stronie głównej!!! "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#komponent-stworzony-z-mysla-o-stronie-głownej","aria-label":'Permalink to "Komponent stworzony z myślą o stronie głównej!!!"'},"​")],-1),_t=t("h1",{id:"transformacja-twojego-zespołu-do-flow-100-500-deploymentow-na-produkcje-miesiecznie",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[36px] md:text-[48px] xl:text-[64px] leading-[1.2]"},[e("Transformacja Twojego zespołu do flow 100-500 deploymentów na produkcję miesięcznie "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#transformacja-twojego-zespołu-do-flow-100-500-deploymentow-na-produkcje-miesiecznie","aria-label":'Permalink to "Transformacja Twojego zespołu do flow 100-500 deploymentów na produkcję miesięcznie"'},"​")],-1),ft=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Zyskaj niesamowitą stabilność systemu, wysokie tempo dostarczania zespołu i skup się na rozwoju biznesu.",-1),ht=t("h2",{id:"fail-fast",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Fail Fast "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#fail-fast","aria-label":'Permalink to "Fail Fast"'},"​")],-1),yt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora. Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),kt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Doskonale rozumiemy Waszą sytuację i kontekst, ponieważ sami przechodziliśmy przez te wszystkie problemy. Udało nam się je skutecznie pokonać i wiemy jak Wam pomóc.",-1),wt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Doskonale rozumiemy Waszą sytuację i kontekst, ponieważ sami przechodziliśmy przez te wszystkie problemy. Udało nam się je skutecznie pokonać i wiemy jak Wam pomóc.",-1),bt=t("h2",{id:"formy-wspołpracy",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Formy współpracy "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#formy-wspołpracy","aria-label":'Permalink to "Formy współpracy"'},"​")],-1),zt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Proponujemy kilka możliwych poziomów naszego zaangażowania.",-1),jt=t("h3",{id:"plan-konsultacje",tabindex:"-1",class:"text-color1 font-semibold text-[24px] md:text-[30px] leading-normal"},[e("Plan "),t("strong",null,"Konsultacje"),e(),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#plan-konsultacje","aria-label":'Permalink to "Plan **Konsultacje**"'},"​")],-1),vt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},[t("strong",null,"20-50h"),e(" konsultacji")],-1),Tt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},[t("strong",null,"Kluczowe elementy:")],-1),$t=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Audyt flow,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Wyznaczenie celów i inicjatyw,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},'"5 sekundowa" tablica kanban,'),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Wdrożenie limitu WIP,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"CI/CD (testy) przechodzące w 5-10 min,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Poprawny deployment script,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Monitorowanie postępów")],-1),Pt=t("h3",{id:"plan-bootcamp",tabindex:"-1",class:"text-color1 font-semibold text-[24px] md:text-[30px] leading-normal"},[e("Plan "),t("strong",null,"Bootcamp"),e(),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#plan-bootcamp","aria-label":'Permalink to "Plan **Bootcamp**"'},"​")],-1),Ft=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},[t("strong",null,"od 10 do 25 dni"),e(" szkoleniowych")],-1),It=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},[e("Warsztaty i szkolenia "),t("strong",null,"na Waszym kodzie"),e(":")],-1),Bt=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Test-Driven Development (TDD) + Fail-fast,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Czyszczenie error logów via TDD (hackathon),"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Domain-Driven Design (DDD) + Refactoring,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Trunk-Based Development + Feature toggles")],-1),At=t("h3",{id:"plan-infrastruktura",tabindex:"-1",class:"text-color1 font-semibold text-[24px] md:text-[30px] leading-normal"},[e("Plan "),t("strong",null,"Infrastruktura"),e(),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#plan-infrastruktura","aria-label":'Permalink to "Plan **Infrastruktura**"'},"​")],-1),Dt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},[t("strong",null,"od 40h"),e(" dla prostych środowisk linuxowych")],-1),Lt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Nasz zespół usprawnia Waszą infrastrukturę tak aby uzyskać:",-1),Ct=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"stabilność,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"samowystarczalność (self-service) programisty")],-1),qt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Dostarczymy:",-1),St=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Deployment script,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"System monitoringu (via TDD) na stacku EFG lub Waszym,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Środowiska test/prod na żądanie (Terraform via TDD),"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Single command development environment - jednodniowy onboarding pracownika")],-1),Kt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Opcja:",-1),Nt=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Pair programming z Waszym inżynierem od infrastruktury")],-1),Ut=L('<h3 id="zwykły-h3-z-bullet-pointami-ponizej" tabindex="-1" class="text-color1 font-semibold text-[24px] md:text-[30px] leading-normal">Zwykły H3 z bullet pointami poniżej <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#zwykły-h3-z-bullet-pointami-ponizej" aria-label="Permalink to &quot;Zwykły H3 z bullet pointami poniżej&quot;">​</a></h3><ul class="mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">konsultacja jest całkowicie <strong>bezpłatna</strong> i <strong>niewiążąca</strong>, ale to może być na prawdę ale to naprawdę bardzo długi paragraf i złamie się dopiero wtedy gdy faktycznie skończy się nam dostępna szerokość ekranu,</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">odpowiemy na wszystkie Twoje pytania czy wątpliwości,</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">spotkanie prowadzi Konrad Otrębski - <a href="https://www.linkedin.com/in/konradotrebski/" class="text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" target="_blank" rel="noreferrer">LinkedIn</a>,</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">czas trwania: 60 min,</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">miejsce: Google Meet</li></ul>',2),Wt=t("h3",{id:"komponent-titleimageleft-z-bulletami-ponizej",tabindex:"-1",class:"text-color1 font-semibold text-[24px] md:text-[30px] leading-normal"},[e("Komponent "),t("code",{class:"text-gray1 text-[85%] bg-gray4 px-[0.4em] py-[0.2em] rounded-[6px]"},"TitleImageLeft"),e(" z bulletami poniżej "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#komponent-titleimageleft-z-bulletami-ponizej","aria-label":'Permalink to "Komponent `TitleImageLeft` z bulletami poniżej"'},"​")],-1),Et=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},[e("konsultacja jest całkowicie "),t("strong",null,"bezpłatna"),e(" i "),t("strong",null,"niewiążąca"),e(",")]),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"odpowiemy na wszystkie Twoje pytania czy wątpliwości,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},[e("spotkanie prowadzi Konrad Otrębski - "),t("a",{href:"https://www.linkedin.com/in/konradotrebski/",class:"text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",target:"_blank",rel:"noreferrer"},"LinkedIn"),e(",")]),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"czas trwania: 60 min,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"miejsce: Google Meet")],-1),Mt=t("h3",{id:"komponent-titleimageright-z-bulletami-ponizej",tabindex:"-1",class:"text-color1 font-semibold text-[24px] md:text-[30px] leading-normal"},[e("Komponent "),t("code",{class:"text-gray1 text-[85%] bg-gray4 px-[0.4em] py-[0.2em] rounded-[6px]"},"TitleImageRight"),e(" z bulletami poniżej "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#komponent-titleimageright-z-bulletami-ponizej","aria-label":'Permalink to "Komponent `TitleImageRight` z bulletami poniżej"'},"​")],-1),Ht=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},[e("konsultacja jest całkowicie "),t("strong",null,"bezpłatna"),e(" i "),t("strong",null,"niewiążąca"),e(",")]),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"odpowiemy na wszystkie Twoje pytania czy wątpliwości,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},[e("spotkanie prowadzi Konrad Otrębski - "),t("a",{href:"https://www.linkedin.com/in/konradotrebski/",class:"text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",target:"_blank",rel:"noreferrer"},"LinkedIn"),e(",")]),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"czas trwania: 60 min,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"miejsce: Google Meet")],-1),Ot=t("h2",{id:"komponent-titleimagebottom-z-h2-i-bulletami-obok",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Komponent "),t("code",{class:"text-gray1 text-[85%] bg-gray4 px-[0.4em] py-[0.2em] rounded-[6px]"},"TitleImageBottom"),e(" z H2 i bulletami obok "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#komponent-titleimagebottom-z-h2-i-bulletami-obok","aria-label":'Permalink to "Komponent `TitleImageBottom` z H2 i bulletami obok"'},"​")],-1),Gt=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},[e("konsultacja jest całkowicie "),t("strong",null,"bezpłatna"),e(" i "),t("strong",null,"niewiążąca"),e(",")]),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"odpowiemy na wszystkie Twoje pytania czy wątpliwości,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},[e("spotkanie prowadzi Konrad Otrębski - "),t("a",{href:"https://www.linkedin.com/in/konradotrebski/",class:"text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",target:"_blank",rel:"noreferrer"},"LinkedIn"),e(",")]),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"czas trwania: 60 min,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"miejsce: Google Meet")],-1),Vt=t("h2",{id:"track-and-improve-results",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Track and improve results "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#track-and-improve-results","aria-label":'Permalink to "Track and improve results"'},"​")],-1),Zt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora. Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),Jt=t("h2",{id:"fail-fast-1",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Fail Fast "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#fail-fast-1","aria-label":'Permalink to "Fail Fast"'},"​")],-1),Rt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),Qt=t("h2",{id:"problemy-z-ktorymi-zmagaja-sie-zespoły-it",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Problemy, z którymi zmagają się zespoły IT "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#problemy-z-ktorymi-zmagaja-sie-zespoły-it","aria-label":'Permalink to "Problemy, z którymi zmagają się zespoły IT"'},"​")],-1),Xt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Doskonale rozumiemy Waszą sytuację i kontekst, ponieważ sami przechodziliśmy przez te wszystkie problemy. Udało nam się je skutecznie pokonać i wiemy jak Wam pomóc.",-1),Yt=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Uzyskasz odpowiedzi na Twoje pytania,",-1),te=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"przekażesz nam podstawowy kontekst i ustalimy możliwości poprawy,",-1),ee=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Jednodniowa konsultacja"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"gdzie szczegółowo postaramy się"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"zrozumieć obecne flow i sytuację Waszego zespołu,")],-1),ae=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Zamknięta prezentacja dla zespołu gdzie przedstawimy motywacyjne success story i zaadresujemy Wasze wątpliwości,",-1),ne=t("h2",{id:"fail-fast-2",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Fail Fast "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#fail-fast-2","aria-label":'Permalink to "Fail Fast"'},"​")],-1),ie=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),oe=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Uzyskasz odpowiedzi na Twoje pytania, przekażesz nam podstawowy kontekst i ustalimy możliwości poprawy,",-1),le=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Uzyskasz odpowiedzi na Twoje pytania, przekażesz nam podstawowy kontekst i ustalimy możliwości poprawy,",-1),se=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"Uzyskasz odpowiedzi na Twoje pytania,",-1),re=t("p",{class:"mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] landing_paragraph_spacing"},"przekażesz nam podstawowy kontekst i ustalimy możliwości poprawy,",-1),de=t("ul",{class:"mt-[18px] list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Jednodniowa konsultacja"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"gdzie szczegółowo postaramy się"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"zrozumieć obecne flow i sytuację Waszego zespołu,")],-1),$e=JSON.parse('{"title":"KITCHEN","description":"KITCHEN","frontmatter":{"layout":"landing-page","title":"KITCHEN","description":"KITCHEN","ogTitle":"tytuł dla template w Linkedin i Facebook","ogDescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.","ogImage":"/uslugi/kitchen-sink/ogImage.jpg","language":"PL"},"headers":[],"relativePath":"uslugi/kitchen-sink.md","filePath":"uslugi/kitchen-sink.md"}'),me={name:"uslugi/kitchen-sink.md"},Pe=Object.assign(me,{setup(i){return(o,l)=>(m(),p("div",null,[a(W,{imageFolder:"/uslugi/kitchen-sink/przykladowe"},{default:n(()=>[a(N,{content:"Przykład"}),a(gt,{link:"#sekcja-kariera",textMain:"Zatrudniamy!",textSecond:"Sprawdź najnowsze oferty pracy"}),ut,a(c,{buttonPrimary:{name:"Bezpłatna konsultacja",url:"/konsultacja"}})]),_:1}),_t,ft,a(c,{buttonPrimary:{name:"Aplikuj",url:"/",external:!0},buttonSecondary:{name:"Przeczytaj",url:"/"}}),a($,{imageFolder:"/uslugi/kitchen-sink"}),ht,yt,a(v,null,{default:n(()=>[a(f,{title:"Lorem ipsum dolor sit amet"},{default:n(()=>[kt]),_:1}),a(f,{title:"Lorem ipsum dolor sit amet"},{default:n(()=>[wt]),_:1})]),_:1}),a(K,null,{title:n(()=>[bt,zt]),cards:n(()=>[a(g,{buttonName:"Aplikuj",buttonUrl:"/"},{header:n(()=>[jt]),content:n(()=>[vt,Tt,$t]),_:1}),a(g,{buttonName:"Aplikuj",buttonUrl:"/"},{header:n(()=>[Pt]),content:n(()=>[Ft,It,Bt]),_:1}),a(g,{buttonName:"Aplikuj",buttonUrl:"/"},{header:n(()=>[At]),content:n(()=>[Dt,Lt,Ct,qt,St,Kt,Nt]),_:1})]),_:1}),Ut,a(F,{imageFolder:"/uslugi/kitchen-sink/przykladowe"},{default:n(()=>[Wt,Et]),_:1}),a(I,{imageFolder:"/uslugi/kitchen-sink/przykladowe"},{default:n(()=>[Mt,Ht]),_:1}),a(k,{imageFolder:"/uslugi/kitchen-sink"},{title:n(()=>[Ot]),content:n(()=>[Gt]),_:1}),a(k,{imageFolder:"/uslugi/kitchen-sink"},{title:n(()=>[Vt]),content:n(()=>[Zt,a(c,{buttonPrimary:{name:"Aplikuj",url:"/"}})]),_:1}),Jt,Rt,a(C,{iframeUrl:"https://www.youtube.com/embed/enfBJqz1LtA",iframeBgImage:"/uslugi/kitchen-sink/youtube.jpg"}),Qt,Xt,a(P,null,{default:n(()=>[a(x,{title:"Bezpłatne konsultacje"},{default:n(()=>[Yt,te]),_:1}),a(x,{title:"Bezpłatne konsultacje"},{default:n(()=>[ee]),_:1}),a(x,{title:"Bezpłatne konsultacje"},{default:n(()=>[ae]),_:1})]),_:1}),ne,ie,a(T,null,{default:n(()=>[a(r,{iconUrl:"/uslugi/kitchen-sink/counter_1.svg",title:"Bezpłatne konsultacje"},{default:n(()=>[oe]),_:1}),a(r,{iconUrl:"/uslugi/kitchen-sink/counter_2.svg",title:"Bezpłatne konsultacje"},{default:n(()=>[le]),_:1}),a(r,{iconUrl:"/uslugi/kitchen-sink/counter_3.svg",title:"Bezpłatne konsultacje"},{default:n(()=>[se,re]),_:1}),a(r,{iconUrl:"/uslugi/kitchen-sink/counter_4.svg",title:"Bezpłatne konsultacje"},{default:n(()=>[de]),_:1})]),_:1}),a(U),a(rt)]))}});export{$e as __pageData,Pe as default};
