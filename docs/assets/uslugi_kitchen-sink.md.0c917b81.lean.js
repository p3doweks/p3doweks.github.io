import{g as c,o as d,c as p,a as t,h as r,n as u,u as g,_ as y,j as b,t as f,p as z,k as j,l as v,b as i,w as n,d as e,e as $}from"./chunks/framework.a52c07a4.js";import{A as F,_ as P,a as A,b as q,c as x,d as l,O as T}from"./chunks/OurPartners.ba9d49c2.js";import{_ as B}from"./chunks/YouTube.a1a82474.js";import{_ as D,a as I}from"./chunks/napisz-do-nas-blog2.6d72b68f.js";const C={class:"flex flex-col-reverse lg:flex-row justify-between items-center gap-20"},L={class:"min-w-[40%] lg:min-w-fit w-fit"},W={class:"w-full h-full"},E=["srcset"],S=["srcset"],U=["src"],N={class:"flex flex-col min-w-[45%]"},R={__name:"TitleImageLeft",props:{imageFolder:{type:String,required:!0}},setup(a){const{frontmatter:o}=c();return(s,m)=>(d(),p("div",{class:u([g(o).layout==="landing-page"?"landing_paragraph_spacing mt-[144px] lg:mt-[176px]":"paragraph_spacing mt-[64px]"])},[t("section",null,[t("div",C,[t("div",L,[t("picture",W,[t("source",{srcset:`${a.imageFolder}/title-image-left-desk@1x.webp 1x,
                  ${a.imageFolder}/title-image-left-desk@2x.webp 2x`,type:"image/webp"},null,8,E),t("source",{srcset:`${a.imageFolder}/title-image-left-desk@1x.jpg 1x,
                  ${a.imageFolder}/title-image-left-desk@2x.jpg 2x`,type:"image/webp"},null,8,S),t("img",{src:`${a.imageFolder}/title-image-left-desc@1x.jpg`,alt:"",width:"430",loading:"lazy",class:"w-[430px] object-contain object-start rounded-xl"},null,8,U)])]),t("div",N,[r(s.$slots,"default")])])])],2))}};const O={class:"flex flex-col items-center gap-24"},M={class:"grid lg:grid-cols-2 lg:gap-20 xl:gap-32 items-start"},V={class:"content"},J={class:"w-full h-full"},K=["srcset"],Z=["srcset"],H=["srcset"],Q=["srcset"],G=["srcset"],X=["srcset"],Y=["src"],tt={__name:"TitleImageBottom",props:{imageFolder:{type:String,required:!0}},setup(a){const{frontmatter:o}=c();return(s,m)=>(d(),p("div",{class:u([g(o).layout==="landing-page"?"landing_paragraph_spacing mt-[144px] lg:mt-[176px]":"paragraph_spacing mt-[64px]"])},[t("section",null,[t("div",O,[t("div",M,[t("div",null,[r(s.$slots,"title",{},void 0,!0)]),t("div",V,[r(s.$slots,"content",{},void 0,!0)])]),t("picture",J,[t("source",{media:"(min-width: 768px)",width:"1200",srcset:`${a.imageFolder}/title-image-bottom-desk@1x.webp 1x,
                      ${a.imageFolder}/title-image-bottom-desk@2x.webp 2x`,type:"image/webp"},null,8,K),t("source",{media:"(min-width: 768px)",width:"1200",srcset:`${a.imageFolder}/title-image-bottom-desk@1x.jpg 1x,
                      ${a.imageFolder}/title-image-bottom-desk@2x.jpg 2x`,type:"image/webp"},null,8,Z),t("source",{media:"(min-width: 451px)",width:"740",srcset:`${a.imageFolder}/title-image-bottom-tab@1x.webp 1x,
                      ${a.imageFolder}/title-image-bottom-tab@2x.webp 2x`,type:"image/webp"},null,8,H),t("source",{media:"(min-width: 451px)",width:"740",srcset:`${a.imageFolder}/title-image-bottom-tab@1x.jpg 1x,
                      ${a.imageFolder}/title-image-bottom-tab@2x.jpg 2x`,type:"image/webp"},null,8,Q),t("source",{media:"(max-width: 450px)",width:"430",srcset:`${a.imageFolder}/title-image-bottom-mob@1x.webp 1x,
                      ${a.imageFolder}/title-image-bottom-mob@2x.webp 2x`,type:"image/webp"},null,8,G),t("source",{media:"(max-width: 450px)",width:"430",srcset:`${a.imageFolder}/title-image-bottom-mob@1x.jpg 1x,
                      ${a.imageFolder}/title-image-bottom-mob@2x.jpg 2x`,type:"image/webp"},null,8,X),t("img",{src:`${a.imageFolder}/title-image-bottom-desk@1x.jpg`,alt:"",width:"1200",loading:"lazy",class:"mx-auto w-full rounded-xl"},null,8,Y)])])])],2))}},_=y(tt,[["__scopeId","data-v-5648905d"]]);const k=a=>(z("data-v-12165ac6"),a=a(),j(),a),et={class:"text-white lg:max-w-[500px]"},at={class:"mb-[16px] text-[30px] font-semibold leading-[1.27]"},it=["innerHTML"],nt=k(()=>t("img",{src:D,alt:"content image",class:"hidden xl:block w-[420px] absolute left-1/2 bottom-0"},null,-1)),ot={class:"shrink-0 flex flex-col max-w-[350px]"},st=k(()=>t("img",{src:I,alt:"content image",class:"xl:hidden",width:"396",height:"213",loading:"lazy"},null,-1)),lt={href:"https://calendar.app.google/fGZb5CLnPCaFtUQh8",target:"_blank",class:"shrink-0 text-center flex justify-center items-center py-[12px] px-[20px] text-gray1 text-[16px] font-medium leading-normal bg-white border border-grayText1 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:text-red1 active:opacity-[0.5]"},rt={__name:"ConsultationBanner",setup(a){const{frontmatter:o}=c(),s={PL:{title:"Bezpłatna konsultacja",description:"Kontakt bezpośredni pod [EMAIL] lub [PHONE]",linkTitle:"Umów  spotkanie"},EN:{title:"Free consultation",description:"Contact directly at [EMAIL] or [PHONE]",linkTitle:"Make an appointment"}},m=b(()=>s[o.value.language]),w=b(()=>m.value.description.replace("[EMAIL]",'<a href="mailto:info@p3doweks.com">info@p3doweks.com</a>').replace("[PHONE]",'<a href="tel:+48796594347" class="whitespace-nowrap">+48 796 594 347</a>'));return(xe,ce)=>(d(),p("div",{class:u([[g(o).layout==="landing-page"?"landing_paragraph_spacing mt-[144px] lg:mt-[176px]":"paragraph_spacing my-[64px] last-of-type:mb-0"],"relative p-[40px] md:p-[58px] rounded-[16px] bg-gray9 bg-center bg-cover bg-no-repeat bg_image flex flex-col gap-[20px] md:flex-row justify-between items-center"])},[t("div",et,[t("p",at,f(m.value.title),1),t("p",{innerHTML:w.value,class:"lg:text-[20px] leading-normal"},null,8,it)]),nt,t("div",ot,[st,t("a",lt,f(m.value.linkTitle),1)])],2))}},dt=y(rt,[["__scopeId","data-v-12165ac6"]]),pt={class:"container"},mt={class:"text-center"},xt={class:"text-center"},ct={class:"mt-24 mx-auto w-full max-w-[450px] md:max-w-full grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center xl:flex rounded-xl overflow-hidden"},ut={__name:"PricingChoices",setup(a){const{frontmatter:o}=c();return(s,m)=>(d(),p("div",{class:u([[g(o).layout==="landing-page"?"landing_paragraph_spacing mt-[144px] lg:mt-[176px]":"paragraph_spacing mt-[64px]"],"relative left-1/2 translate-x-[-50%] w-screen py-[80px] bg-red1 bg-opacity-10"])},[t("section",pt,[t("div",mt,[r(s.$slots,"title")]),t("div",xt,[r(s.$slots,"description")]),t("ul",ct,[r(s.$slots,"cards")])])],2))}};const gt={class:"max-w-[450px] md:max-w-full xl:max-w-[450px] odd:last-of-type:rounded-b-xl xl:odd:last-of-type:rounded-b-none w-full p-[28px] bg-white shadow-sm border-gray5 border-b-[2px] sm:border-r-[2px]"},_t={class:"pb-[32px] w-full min-h-[160px] border-b border-gray5 flex flex-col"},ht={key:0,class:"mt-auto"},ft=["href"],yt={class:"content pt-[32px] w-full min-h-[250px]"},bt={__name:"PricingCard",props:{buttonName:String,buttonUrl:String},setup(a){return(o,s)=>(d(),p("li",gt,[t("div",_t,[r(o.$slots,"header",{},void 0,!0),a.buttonName&&a.buttonUrl?(d(),p("div",ht,[t("a",{href:a.buttonUrl,class:"btn_primary w-full p-[10px]"},f(a.buttonName),9,ft)])):v("",!0)]),t("div",yt,[r(o.$slots,"content",{},void 0,!0)])]))}},h=y(bt,[["__scopeId","data-v-94e4896e"]]),kt=t("div",{class:"markdown_body"},null,-1),wt=t("h1",{id:"transformacja-twojego-zespołu-do-flow-100-450-deploymentow-na-produkcje-miesiecznie",tabindex:"-1",class:"text-color1 font-semibold text-[36px] md:text-[48px] xl:text-[64px] leading-[1.2]"},[e("Transformacja Twojego zespołu do flow 100-450 deploymentów na produkcję miesięcznie "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#transformacja-twojego-zespołu-do-flow-100-450-deploymentow-na-produkcje-miesiecznie","aria-label":'Permalink to "Transformacja Twojego zespołu do flow 100-450 deploymentów na produkcję miesięcznie"'},"​")],-1),zt=t("p",{class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] mt-[18px] landing_paragraph_spacing"},"Zyskaj niesamowitą stabilność systemu, wysokie tempo dostarczania zespołu i skup się na rozwoju biznesu.",-1),jt=t("p",{class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] mt-[18px] landing_paragraph_spacing"},"Zyskaj niesamowitą stabilność systemu, wysokie tempo dostarczania zespołu i skup się na rozwoju biznesu. Zyskaj niesamowitą stabilność systemu, wysokie tempo dostarczania zespołu i skup się na rozwoju biznesu.",-1),vt=t("h2",{id:"formy-wspołpracy",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Formy współpracy "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#formy-wspołpracy","aria-label":'Permalink to "Formy współpracy"'},"​")],-1),$t=t("p",{class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] mt-[18px] landing_paragraph_spacing"},"Proponujemy kilka możliwych poziomów naszego zaangażowania.",-1),Ft=t("h3",{id:"plan-konsultacje",tabindex:"-1",class:"mb-[12px] text-color1 font-semibold text-[24px] md:text-[30px] leading-normal"},[e("Plan "),t("strong",null,"Konsultacje"),e(),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#plan-konsultacje","aria-label":'Permalink to "Plan **Konsultacje**"'},"​")],-1),Pt=t("p",{class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] mt-[18px] landing_paragraph_spacing"},[t("strong",null,"20-50h"),e(" konsultacji")],-1),At=t("p",{class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] mt-[18px] landing_paragraph_spacing"},[t("strong",null,"Kluczowe elementy:")],-1),qt=t("ul",{class:"list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing mt-[80px]"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Audyt flow,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Wyznaczenie celów i inicjatyw,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},'"5 sekundowa" tablica kanban,'),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Wdrożenie limitu WIP,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"CI/CD (testy) przechodzące w 5-10 min,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Poprawny deployment script,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Monitorowanie postępów")],-1),Tt=t("h3",{id:"plan-bootcamp",tabindex:"-1",class:"mb-[12px] text-color1 font-semibold text-[24px] md:text-[30px] leading-normal"},[e("Plan "),t("strong",null,"Bootcamp"),e(),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#plan-bootcamp","aria-label":'Permalink to "Plan **Bootcamp**"'},"​")],-1),Bt=t("p",{class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] mt-[18px] landing_paragraph_spacing"},[t("strong",null,"od 10 do 25 dni"),e(" szkoleniowych")],-1),Dt=t("p",{class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] mt-[18px] landing_paragraph_spacing"},[e("Warsztaty i szkolenia "),t("strong",null,"na Waszym kodzie"),e(":")],-1),It=t("ul",{class:"list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing mt-[80px]"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Test-Driven Development (TDD) + Fail-fast,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Czyszczenie error logów via TDD (hackathon),"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Domain-Driven Design (DDD) + Refactoring,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Trunk-Based Development + Feature toggles")],-1),Ct=t("h3",{id:"plan-infrastruktura",tabindex:"-1",class:"mb-[12px] text-color1 font-semibold text-[24px] md:text-[30px] leading-normal"},[e("Plan "),t("strong",null,"Infrastruktura"),e(),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#plan-infrastruktura","aria-label":'Permalink to "Plan **Infrastruktura**"'},"​")],-1),Lt=t("p",{class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] mt-[18px] landing_paragraph_spacing"},[t("strong",null,"od 80h"),e(" dla prostych środowisk linuxowych")],-1),Wt=t("p",{class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] mt-[18px] landing_paragraph_spacing"},"Nasz zespół usprawnia Waszą infrastrukturę tak aby uzyskać:",-1),Et=t("ul",{class:"list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing mt-[80px]"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"stabilność,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"samowystarczalność (self-service) programisty")],-1),St=t("p",{class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] mt-[18px] landing_paragraph_spacing"},"Dostarczymy:",-1),Ut=t("ul",{class:"list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing mt-[80px]"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Deployment script,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"System monitoringu (via TDD) na stacku EFG lub Waszym,"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Środowiska test/prod na żądanie (Terraform via TDD),"),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Single command development environment - jednodniowy onboarding pracownika")],-1),Nt=t("p",{class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] mt-[18px] landing_paragraph_spacing"},"Opcja:",-1),Rt=t("ul",{class:"list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing mt-[80px]"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Pair programming z Waszym inżynierem od infrastruktury")],-1),Ot=t("h1",{id:"crazy-test",tabindex:"-1",class:"text-color1 font-semibold text-[36px] md:text-[48px] xl:text-[64px] leading-[1.2]"},[e("Crazy Test "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#crazy-test","aria-label":'Permalink to "Crazy Test"'},"​")],-1),Mt=t("ul",{class:"list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing mt-[80px]"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam."),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam."),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam."),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.")],-1),Vt=t("h2",{id:"jakosc-kodu-i-umiejetnosci",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Jakość kodu i umiejętności "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#jakosc-kodu-i-umiejetnosci","aria-label":'Permalink to "Jakość kodu i umiejętności"'},"​")],-1),Jt=t("p",{class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] mt-[18px] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),Kt=$("",2),Zt=t("h2",{id:"fail-fast",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Fail Fast "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#fail-fast","aria-label":'Permalink to "Fail Fast"'},"​")],-1),Ht=t("p",{class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] mt-[18px] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),Qt=t("h2",{id:"problemy-z-ktorymi-zmagaja-sie-zespoły-it",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Problemy, z którymi zmagają się zespoły IT "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#problemy-z-ktorymi-zmagaja-sie-zespoły-it","aria-label":'Permalink to "Problemy, z którymi zmagają się zespoły IT"'},"​")],-1),Gt=t("p",{class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] mt-[18px] landing_paragraph_spacing"},"Doskonale rozumiemy Waszą sytuację i kontekst, ponieważ sami przechodziliśmy przez te wszystkie problemy. Udało nam się je skutecznie pokonać i wiemy jak Wam pomóc.",-1),Xt=t("h2",{id:"track-and-improve-results",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Track and improve results "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#track-and-improve-results","aria-label":'Permalink to "Track and improve results"'},"​")],-1),Yt=t("p",{class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] mt-[18px] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora. Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),te=t("h2",{id:"track-and-improve-results-1",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Track and improve results "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#track-and-improve-results-1","aria-label":'Permalink to "Track and improve results"'},"​")],-1),ee=t("div",{class:"overflow-x-auto flex flex-col w-full h-full shadow-md rounded-lg custom-scroll mt-[80px] landing_paragraph_spacing"},[t("table",{class:"w-full text-left table-auto min-w-[450px] border-collapse"},[t("thead",null,[t("tr",null,[t("th",{class:"bg-[#F2F2F2] text-color1 text-[14px] md:text-[16px] font-medium leading-[1.12] text-left border border-[#ddd] px-[8px] md:px-[24px] py-[12px]"},[e("Plan "),t("strong",null,"Konsultacje")]),t("th",{class:"bg-[#F2F2F2] text-color1 text-[14px] md:text-[16px] font-medium leading-[1.12] text-left border border-[#ddd] px-[8px] md:px-[24px] py-[12px]"},[e("Plan "),t("strong",null,"Bootcamp")]),t("th",{class:"bg-[#F2F2F2] text-color1 text-[14px] md:text-[16px] font-medium leading-[1.12] text-left border border-[#ddd] px-[8px] md:px-[24px] py-[12px]"},[e("Plan "),t("strong",null,"Infrastruktura")])])]),t("tbody",null,[t("tr",null,[t("td",{class:"align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]"},[t("strong",null,"20-50h"),e(" konsultacji")]),t("td",{class:"align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]"},[t("strong",null,"od 10 do 25 dni"),e(" szkoleniowych")]),t("td",{class:"align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]"},[t("strong",null,"od 80h"),e(" dla prostych środowisk linuxowych")])])])])],-1),ae=t("h2",{id:"track-and-improve-results-2",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Track and improve results "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#track-and-improve-results-2","aria-label":'Permalink to "Track and improve results"'},"​")],-1),ie=t("ul",{class:"list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing mt-[80px]"},[t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit."),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Beatae blanditiis dolorem eum, illum in incidunt tempora. Ad neque non perspiciatis."),t("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.")],-1),ne=t("div",{class:"overflow-x-auto flex flex-col w-full h-full shadow-md rounded-lg custom-scroll mt-[80px] landing_paragraph_spacing"},[t("table",{class:"w-full text-left table-auto min-w-[450px] border-collapse"},[t("thead",null,[t("tr",null,[t("th",{class:"bg-[#F2F2F2] text-color1 text-[14px] md:text-[16px] font-medium leading-[1.12] text-left border border-[#ddd] px-[8px] md:px-[24px] py-[12px]"},[e("Plan "),t("strong",null,"Konsultacje")]),t("th",{class:"bg-[#F2F2F2] text-color1 text-[14px] md:text-[16px] font-medium leading-[1.12] text-left border border-[#ddd] px-[8px] md:px-[24px] py-[12px]"},[e("Plan "),t("strong",null,"Bootcamp")]),t("th",{class:"bg-[#F2F2F2] text-color1 text-[14px] md:text-[16px] font-medium leading-[1.12] text-left border border-[#ddd] px-[8px] md:px-[24px] py-[12px]"},[e("Plan "),t("strong",null,"Infrastruktura")])])]),t("tbody",null,[t("tr",null,[t("td",{class:"align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]"},[t("strong",null,"20-50h"),e(" konsultacji")]),t("td",{class:"align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]"}),t("td",{class:"align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]"})])])])],-1),oe=t("h2",{id:"rozumiemy-wasza-sytuacje-i-kontekst-1",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Rozumiemy Waszą sytuację i kontekst "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#rozumiemy-wasza-sytuacje-i-kontekst-1","aria-label":'Permalink to "Rozumiemy Waszą sytuację i kontekst"'},"​")],-1),se=t("p",{class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] mt-[18px] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora. Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),le=t("h2",{id:"problemy-z-ktorymi-zmagaja-sie-zespoły-it-1",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Problemy, z którymi zmagają się zespoły IT "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#problemy-z-ktorymi-zmagaja-sie-zespoły-it-1","aria-label":'Permalink to "Problemy, z którymi zmagają się zespoły IT"'},"​")],-1),re=t("p",{class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] mt-[18px] landing_paragraph_spacing"},"Doskonale rozumiemy Waszą sytuację i kontekst, ponieważ sami przechodziliśmy przez te wszystkie problemy. Udało nam się je skutecznie pokonać i wiemy jak Wam pomóc.",-1),de=t("h2",{id:"fail-fast-1",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold text-[30px] md:text-[36px] xl:text-[48px] leading-normal"},[e("Fail Fast "),t("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#fail-fast-1","aria-label":'Permalink to "Fail Fast"'},"​")],-1),pe=t("p",{class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] mt-[18px] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),fe=JSON.parse('{"title":"Work in progress!","description":"Work in progress!","frontmatter":{"layout":"landing-page","title":"Work in progress!","description":"Work in progress!","ogTitle":"czysty test!!!","ogDescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.","ogImage":"/uslugi/kitchen-sink/ogImage.jpg","language":"PL"},"headers":[],"relativePath":"uslugi/kitchen-sink.md","filePath":"uslugi/kitchen-sink.md"}'),me={name:"uslugi/kitchen-sink.md"},ye=Object.assign(me,{setup(a){return c(),(o,s)=>(d(),p("div",null,[kt,i(F,{subTitle:"Usługi",imageFolder:"/uslugi/kitchen-sink"},{default:n(()=>[wt,zt,i(x,{buttonPrimary:{name:"Aplikuj",url:"/"},buttonSecondary:{name:"Przeczytaj",url:"/"}})]),_:1}),jt,i(ut,null,{title:n(()=>[vt,$t]),cards:n(()=>[i(h,{buttonName:"Aplikuj",buttonUrl:"/"},{header:n(()=>[Ft]),content:n(()=>[Pt,At,qt]),_:1}),i(h,{buttonName:"Aplikuj",buttonUrl:"/"},{header:n(()=>[Tt]),content:n(()=>[Bt,Dt,It]),_:1}),i(h,{buttonName:"Aplikuj",buttonUrl:"/"},{header:n(()=>[Ct]),content:n(()=>[Lt,Wt,Et,St,Ut,Nt,Rt]),_:1})]),_:1}),i(R,{imageFolder:"/uslugi/kitchen-sink"},{default:n(()=>[Ot,Mt]),_:1}),Vt,Jt,i(x,{buttonPrimary:{name:"Aplikuj",url:"/"},buttonSecondary:{name:"Przeczytaj",url:"/"}}),Kt,i(x,{buttonPrimary:{name:"Aplikuj",url:"/"}}),Zt,Ht,i(B,{iframeUrl:"https://www.youtube.com/embed/enfBJqz1LtA",iframeBgImage:"/uslugi/kitchen-sink/youtube.jpg"}),i(x,{buttonPrimary:{name:"Aplikuj",url:"/"}}),Qt,Gt,i(_,{imageFolder:"/uslugi/kitchen-sink"},{title:n(()=>[Xt]),content:n(()=>[Yt,i(x,{buttonPrimary:{name:"Aplikuj",url:"/"}})]),_:1}),i(_,{imageFolder:"/uslugi/kitchen-sink"},{title:n(()=>[te]),content:n(()=>[ee]),_:1}),i(_,{imageFolder:"/uslugi/kitchen-sink"},{title:n(()=>[ae]),content:n(()=>[ie,ne]),_:1}),i(P,{imageFolder:"/uslugi/kitchen-sink"},{default:n(()=>[oe,se]),_:1}),le,re,i(A,null,{default:n(()=>[i(l,{title:"Bezpłatne konsultacje",description:"Uzyskasz odpowiedzi na Twoje pytania, przekażesz nam podstawowy kontekst i ustalimy możliwości poprawy,"}),i(l,{title:"Audyt",description:"Jednodniowa konsultacja gdzie szczegółowo postaramy się zrozumieć obecne flow i sytuację Waszego zespołu,"}),i(l,{title:"Prezentacja dla zespołu + Q&A",description:"Zamknięta prezentacja dla zespołu gdzie przedstawimy motywacyjne success story i zaadresujemy Wasze wątpliwości,"}),i(l,{title:"Warsztat",description:"Szczegółowe zdefiniowanie wszystkich celi do osiągnięcia, ustalenie kolejności i wybranie pierwszych celów,"}),i(l,{title:"Rozpoczęcie prac",description:"Praca po stronie Twojego zespołu jak też wspólna praca np. szkolenia i warsztaty z TDD i Refactoringu."})]),_:1}),de,pe,i(q,null,{default:n(()=>[i(l,{iconUrl:"/uslugi/kitchen-sink/counter_1.svg",title:"Bezpłatne konsultacje",description:"Uzyskasz odpowiedzi na Twoje pytania, przekażesz nam podstawowy kontekst i ustalimy możliwości poprawy,"}),i(l,{iconUrl:"/uslugi/kitchen-sink/counter_2.svg",title:"Audyt",description:"Jednodniowa konsultacja gdzie szczegółowo postaramy się zrozumieć obecne flow i sytuację Waszego zespołu,"}),i(l,{iconUrl:"/uslugi/kitchen-sink/counter_3.svg",title:"Prezentacja dla zespołu + Q&A",description:"Zamknięta prezentacja dla zespołu gdzie przedstawimy motywacyjne success story i zaadresujemy Wasze wątpliwości,"}),i(l,{iconUrl:"/uslugi/kitchen-sink/counter_4.svg",title:"Warsztat",description:"Szczegółowe zdefiniowanie wszystkich celi do osiągnięcia, ustalenie kolejności i wybranie pierwszych celów,"}),i(l,{iconUrl:"/uslugi/kitchen-sink/counter_5.svg",title:"Rozpoczęcie prac",description:"Praca po stronie Twojego zespołu jak też wspólna praca np. szkolenia i warsztaty z TDD i Refactoringu."})]),_:1}),i(x,{buttonPrimary:{name:"Umów konsultację",url:"/#sekcja-formularz"}}),i(T),i(dt)]))}});export{fe as __pageData,ye as default};