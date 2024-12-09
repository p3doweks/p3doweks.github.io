import{g as c,o as p,c as u,a as e,h as g,n as h,u as d,_ as f,j as _,t as b,p as z,k as w,b as t,w as o,d as a,e as j}from"./chunks/framework.a52c07a4.js";import{A as v,_ as $,a as q,b as A,c as m,d as s,O as F}from"./chunks/OurPartners.832e003c.js";import{_ as P}from"./chunks/YouTube.5b6091d0.js";import{_ as T,a as B}from"./chunks/napisz-do-nas-blog2.6d72b68f.js";const L={class:"flex flex-col-reverse lg:flex-row justify-between items-center gap-20"},I={class:"min-w-[40%] lg:min-w-fit w-fit"},W={class:"w-full h-full"},S=["srcset"],C=["srcset"],E=["src"],U={class:"flex flex-col min-w-[45%]"},D={__name:"TitleImageLeft",props:{imageFolder:{type:String,required:!0}},setup(i){const{frontmatter:n}=c();return(l,r)=>(p(),u("div",{class:h([[d(n).layout==="landing-page"?"landing_paragraph_spacing":"paragraph_spacing"],"mt-[144px] lg:mt-[176px] mb-[80px] last-of-type:mb-0"])},[e("section",null,[e("div",L,[e("div",I,[e("picture",W,[e("source",{srcset:`${i.imageFolder}/title-image-left-desk@1x.webp 1x,
                  ${i.imageFolder}/title-image-left-desk@2x.webp 2x`,type:"image/webp"},null,8,S),e("source",{srcset:`${i.imageFolder}/title-image-left-desk@1x.jpg 1x,
                  ${i.imageFolder}/title-image-left-desk@2x.jpg 2x`,type:"image/webp"},null,8,C),e("img",{src:`${i.imageFolder}/title-image-left-desc@1x.jpg`,alt:"",width:"430",loading:"lazy",class:"w-[430px] object-contain object-start rounded-xl"},null,8,E)])]),e("div",U,[g(l.$slots,"default")])])])],2))}};const N={class:"flex flex-col items-center gap-24"},R={class:"grid lg:grid-cols-2 lg:gap-20 xl:gap-32 items-start"},O={class:"content"},J={class:"w-full h-full"},M=["srcset"],V=["srcset"],H=["srcset"],Q=["srcset"],Z=["srcset"],K=["srcset"],G=["src"],X={__name:"TitleImageBottom",props:{imageFolder:{type:String,required:!0}},setup(i){const{frontmatter:n}=c();return(l,r)=>(p(),u("div",{class:h([[d(n).layout==="landing-page"?"landing_paragraph_spacing":"paragraph_spacing"],"mt-[144px] lg:mt-[176px] mb-[80px] last-of-type:mb-0"])},[e("section",null,[e("div",N,[e("div",R,[e("div",null,[g(l.$slots,"title",{},void 0,!0)]),e("div",O,[g(l.$slots,"content",{},void 0,!0)])]),e("picture",J,[e("source",{media:"(min-width: 768px)",width:"1200",srcset:`${i.imageFolder}/title-image-bottom-desk@1x.webp 1x,
                      ${i.imageFolder}/title-image-bottom-desk@2x.webp 2x`,type:"image/webp"},null,8,M),e("source",{media:"(min-width: 768px)",width:"1200",srcset:`${i.imageFolder}/title-image-bottom-desk@1x.jpg 1x,
                      ${i.imageFolder}/title-image-bottom-desk@2x.jpg 2x`,type:"image/webp"},null,8,V),e("source",{media:"(min-width: 451px)",width:"740",srcset:`${i.imageFolder}/title-image-bottom-tab@1x.webp 1x,
                      ${i.imageFolder}/title-image-bottom-tab@2x.webp 2x`,type:"image/webp"},null,8,H),e("source",{media:"(min-width: 451px)",width:"740",srcset:`${i.imageFolder}/title-image-bottom-tab@1x.jpg 1x,
                      ${i.imageFolder}/title-image-bottom-tab@2x.jpg 2x`,type:"image/webp"},null,8,Q),e("source",{media:"(max-width: 450px)",width:"430",srcset:`${i.imageFolder}/title-image-bottom-mob@1x.webp 1x,
                      ${i.imageFolder}/title-image-bottom-mob@2x.webp 2x`,type:"image/webp"},null,8,Z),e("source",{media:"(max-width: 450px)",width:"430",srcset:`${i.imageFolder}/title-image-bottom-mob@1x.jpg 1x,
                      ${i.imageFolder}/title-image-bottom-mob@2x.jpg 2x`,type:"image/webp"},null,8,K),e("img",{src:`${i.imageFolder}/title-image-bottom-desk@1x.jpg`,alt:"",width:"1200",loading:"lazy",class:"mx-auto w-full rounded-xl"},null,8,G)])])])],2))}},x=f(X,[["__scopeId","data-v-c03c8b4d"]]);const y=i=>(z("data-v-fc9c890f"),i=i(),w(),i),Y={class:"text-white lg:max-w-[500px]"},ee={class:"mb-[16px] text-[30px] font-semibold leading-[1.27]"},te=["innerHTML"],ie=y(()=>e("img",{src:T,alt:"content image",class:"hidden xl:block w-[420px] absolute left-1/2 bottom-0"},null,-1)),ae={class:"shrink-0 flex flex-col max-w-[350px]"},oe=y(()=>e("img",{src:B,alt:"content image",class:"xl:hidden",width:"396",height:"213",loading:"lazy"},null,-1)),se={href:"https://calendar.app.google/fGZb5CLnPCaFtUQh8",target:"_blank",class:"shrink-0 text-center flex justify-center items-center py-[12px] px-[20px] text-gray1 text-[16px] font-medium leading-normal bg-white border border-grayText1 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:text-red1 active:opacity-[0.5]"},ne={__name:"ConsultationBanner",setup(i){const{frontmatter:n}=c(),l={PL:{title:"Bezpłatna konsultacja",description:"Kontakt bezpośredni pod [EMAIL] lub [PHONE]",linkTitle:"Umów  spotkanie"},EN:{title:"Free consultation",description:"Contact directly at [EMAIL] or [PHONE]",linkTitle:"Make an appointment"}},r=_(()=>l[n.value.language]),k=_(()=>r.value.description.replace("[EMAIL]",'<a href="mailto:info@p3doweks.com">info@p3doweks.com</a>').replace("[PHONE]",'<a href="tel:+48796594347" class="whitespace-nowrap">+48 796 594 347</a>'));return(Te,Be)=>(p(),u("div",{class:h([[d(n).layout==="landing-page"?"landing_paragraph_spacing mt-[144px] lg:mt-[176px] mb-[80px] last-of-type:mb-0":"paragraph_spacing my-[64px] last-of-type:mb-0"],"relative p-[40px] md:p-[58px] rounded-[16px] bg-gray9 bg-center bg-cover bg-no-repeat bg_image flex flex-col gap-[20px] md:flex-row justify-between items-center"])},[e("div",Y,[e("p",ee,b(r.value.title),1),e("p",{innerHTML:k.value,class:"lg:text-[20px] leading-normal"},null,8,te)]),ie,e("div",ae,[oe,e("a",se,b(r.value.linkTitle),1)])],2))}},le=f(ne,[["__scopeId","data-v-fc9c890f"]]),re=e("div",{class:"markdown_body"},null,-1),me=e("h1",{id:"crazy-test",tabindex:"-1",class:"text-color1 font-semibold leading-normal text-[36px] md:text-[48px] xl:text-[64px] leading-[1.2]"},[a("Crazy Test "),e("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#crazy-test","aria-label":'Permalink to "Crazy Test"'},"​")],-1),de=e("ul",{class:"list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing my-[80px]"},[e("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam."),e("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam."),e("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam."),e("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.")],-1),ce=e("h2",{id:"jakosc-kodu-i-umiejetnosci",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]"},[a("Jakość kodu i umiejętności "),e("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#jakosc-kodu-i-umiejetnosci","aria-label":'Permalink to "Jakość kodu i umiejętności"'},"​")],-1),pe=e("p",{class:"mb-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),ue=j('<h2 id="rozumiemy-wasza-sytuacje-i-kontekst" tabindex="-1" class="mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]">Rozumiemy Waszą sytuację i kontekst <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#rozumiemy-wasza-sytuacje-i-kontekst" aria-label="Permalink to &quot;Rozumiemy Waszą sytuację i kontekst&quot;">​</a></h2><ul class="list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing my-[80px]"><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.</li></ul>',2),xe=e("h2",{id:"fail-fast",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]"},[a("Fail Fast "),e("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#fail-fast","aria-label":'Permalink to "Fail Fast"'},"​")],-1),ge=e("p",{class:"mb-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),he=e("h2",{id:"problemy-z-ktorymi-zmagaja-sie-zespoły-it",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]"},[a("Problemy, z którymi zmagają się zespoły IT "),e("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#problemy-z-ktorymi-zmagaja-sie-zespoły-it","aria-label":'Permalink to "Problemy, z którymi zmagają się zespoły IT"'},"​")],-1),_e=e("p",{class:"mb-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55] landing_paragraph_spacing"},"Doskonale rozumiemy Waszą sytuację i kontekst, ponieważ sami przechodziliśmy przez te wszystkie problemy. Udało nam się je skutecznie pokonać i wiemy jak Wam pomóc.",-1),be=e("h2",{id:"track-and-improve-results",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]"},[a("Track and improve results "),e("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#track-and-improve-results","aria-label":'Permalink to "Track and improve results"'},"​")],-1),fe=e("p",{class:"mb-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora. Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),ye=e("h2",{id:"track-and-improve-results-1",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]"},[a("Track and improve results "),e("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#track-and-improve-results-1","aria-label":'Permalink to "Track and improve results"'},"​")],-1),ke=e("div",{class:"overflow-x-auto flex flex-col w-full h-full shadow-md rounded-lg custom-scroll my-[80px] last-of-type:mb-0 landing_paragraph_spacing"},[e("table",{class:"w-full text-left table-auto min-w-[450px] border-collapse"},[e("thead",null,[e("tr",null,[e("th",{class:"bg-[#F2F2F2] text-color1 text-[14px] md:text-[16px] font-medium leading-[1.12] text-left border border-[#ddd] px-[8px] md:px-[24px] py-[12px]"},[a("Plan "),e("strong",null,"Konsultacje")]),e("th",{class:"bg-[#F2F2F2] text-color1 text-[14px] md:text-[16px] font-medium leading-[1.12] text-left border border-[#ddd] px-[8px] md:px-[24px] py-[12px]"},[a("Plan "),e("strong",null,"Bootcamp")]),e("th",{class:"bg-[#F2F2F2] text-color1 text-[14px] md:text-[16px] font-medium leading-[1.12] text-left border border-[#ddd] px-[8px] md:px-[24px] py-[12px]"},[a("Plan "),e("strong",null,"Infrastruktura")])])]),e("tbody",null,[e("tr",null,[e("td",{class:"align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]"},[e("strong",null,"20-50h"),a(" konsultacji")]),e("td",{class:"align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]"},[e("strong",null,"od 10 do 25 dni"),a(" szkoleniowych")]),e("td",{class:"align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]"},[e("strong",null,"od 80h"),a(" dla prostych środowisk linuxowych")])])])])],-1),ze=e("h2",{id:"track-and-improve-results-2",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]"},[a("Track and improve results "),e("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#track-and-improve-results-2","aria-label":'Permalink to "Track and improve results"'},"​")],-1),we=e("ul",{class:"list-disc flex flex-col justify-start gap-[12px] landing_paragraph_spacing my-[80px]"},[e("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit."),e("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Beatae blanditiis dolorem eum, illum in incidunt tempora. Ad neque non perspiciatis."),e("li",{class:"ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]"},"Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.")],-1),je=e("h2",{id:"rozumiemy-wasza-sytuacje-i-kontekst-1",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]"},[a("Rozumiemy Waszą sytuację i kontekst "),e("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#rozumiemy-wasza-sytuacje-i-kontekst-1","aria-label":'Permalink to "Rozumiemy Waszą sytuację i kontekst"'},"​")],-1),ve=e("p",{class:"mb-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora. Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),$e=e("h2",{id:"problemy-z-ktorymi-zmagaja-sie-zespoły-it-1",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]"},[a("Problemy, z którymi zmagają się zespoły IT "),e("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#problemy-z-ktorymi-zmagaja-sie-zespoły-it-1","aria-label":'Permalink to "Problemy, z którymi zmagają się zespoły IT"'},"​")],-1),qe=e("p",{class:"mb-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55] landing_paragraph_spacing"},"Doskonale rozumiemy Waszą sytuację i kontekst, ponieważ sami przechodziliśmy przez te wszystkie problemy. Udało nam się je skutecznie pokonać i wiemy jak Wam pomóc.",-1),Ae=e("h2",{id:"fail-fast-1",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]"},[a("Fail Fast "),e("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#fail-fast-1","aria-label":'Permalink to "Fail Fast"'},"​")],-1),Fe=e("p",{class:"mb-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),Ce=JSON.parse('{"title":"Work in progress!","description":"Work in progress!","frontmatter":{"layout":"landing-page","title":"Work in progress!","description":"Work in progress!","ogTitle":"czysty test!!!","ogDescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.","ogImage":"/uslugi/kitchen-sink/ogImage.jpg","language":"PL"},"headers":[],"relativePath":"uslugi/kitchen-sink.md","filePath":"uslugi/kitchen-sink.md"}'),Pe={name:"uslugi/kitchen-sink.md"},Ee=Object.assign(Pe,{setup(i){const{frontmatter:n}=c();return(l,r)=>(p(),u("div",null,[re,t(v,{title:d(n).title,description:d(n).description,subTitle:"Usługi",imageFolder:"/uslugi/kitchen-sink"},{default:o(()=>[t(m,{buttonPrimary:{name:"Aplikuj",url:"/"},buttonSecondary:{name:"Przeczytaj",url:"/"}})]),_:1},8,["title","description"]),t(D,{imageFolder:"/uslugi/kitchen-sink",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam."},{default:o(()=>[me,de]),_:1}),ce,pe,t(m,{buttonPrimary:{name:"Aplikuj",url:"/"},buttonSecondary:{name:"Przeczytaj",url:"/"}}),ue,t(m,{buttonPrimary:{name:"Aplikuj",url:"/"}}),xe,ge,t(P,{iframeUrl:"https://www.youtube.com/embed/enfBJqz1LtA",iframeBgImage:"/uslugi/kitchen-sink/youtube.jpg"}),t(m,{buttonPrimary:{name:"Aplikuj",url:"/"}}),he,_e,t(x,{imageFolder:"/uslugi/kitchen-sink"},{title:o(()=>[be]),content:o(()=>[fe,t(m,{buttonPrimary:{name:"Aplikuj",url:"/"}})]),_:1}),t(x,{imageFolder:"/uslugi/kitchen-sink"},{title:o(()=>[ye]),content:o(()=>[ke]),_:1}),t(x,{imageFolder:"/uslugi/kitchen-sink"},{title:o(()=>[ze]),content:o(()=>[we]),_:1}),t($,{imageFolder:"/uslugi/kitchen-sink"},{default:o(()=>[je,ve]),_:1}),$e,qe,t(q,null,{default:o(()=>[t(s,{title:"Bezpłatne konsultacje",description:"Uzyskasz odpowiedzi na Twoje pytania, przekażesz nam podstawowy kontekst i ustalimy możliwości poprawy,"}),t(s,{title:"Audyt",description:"Jednodniowa konsultacja gdzie szczegółowo postaramy się zrozumieć obecne flow i sytuację Waszego zespołu,"}),t(s,{title:"Prezentacja dla zespołu + Q&A",description:"Zamknięta prezentacja dla zespołu gdzie przedstawimy motywacyjne success story i zaadresujemy Wasze wątpliwości,"}),t(s,{title:"Warsztat",description:"Szczegółowe zdefiniowanie wszystkich celi do osiągnięcia, ustalenie kolejności i wybranie pierwszych celów,"}),t(s,{title:"Rozpoczęcie prac",description:"Praca po stronie Twojego zespołu jak też wspólna praca np. szkolenia i warsztaty z TDD i Refactoringu."})]),_:1}),Ae,Fe,t(A,null,{default:o(()=>[t(s,{iconUrl:"/uslugi/kitchen-sink/counter_1.svg",title:"Bezpłatne konsultacje",description:"Uzyskasz odpowiedzi na Twoje pytania, przekażesz nam podstawowy kontekst i ustalimy możliwości poprawy,"}),t(s,{iconUrl:"/uslugi/kitchen-sink/counter_2.svg",title:"Audyt",description:"Jednodniowa konsultacja gdzie szczegółowo postaramy się zrozumieć obecne flow i sytuację Waszego zespołu,"}),t(s,{iconUrl:"/uslugi/kitchen-sink/counter_3.svg",title:"Prezentacja dla zespołu + Q&A",description:"Zamknięta prezentacja dla zespołu gdzie przedstawimy motywacyjne success story i zaadresujemy Wasze wątpliwości,"}),t(s,{iconUrl:"/uslugi/kitchen-sink/counter_4.svg",title:"Warsztat",description:"Szczegółowe zdefiniowanie wszystkich celi do osiągnięcia, ustalenie kolejności i wybranie pierwszych celów,"}),t(s,{iconUrl:"/uslugi/kitchen-sink/counter_5.svg",title:"Rozpoczęcie prac",description:"Praca po stronie Twojego zespołu jak też wspólna praca np. szkolenia i warsztaty z TDD i Refactoringu."})]),_:1}),t(m,{buttonPrimary:{name:"Umów konsultację",url:"/#sekcja-formularz"}}),t(F),t(le)]))}});export{Ce as __pageData,Ee as default};
