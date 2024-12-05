import{g as m,o as l,c,a as e,t as n,n as d,u as p,_ as b,j as _,p as j,k as v,l as f,e as z,b as t,w as g,d as u}from"./chunks/framework.a52c07a4.js";import{A as q,_ as A,a as y,b as s}from"./chunks/GridItem.14f3c52d.js";import{_ as P}from"./chunks/YouTube.d4031afd.js";import{_ as $,a as T}from"./chunks/napisz-do-nas-blog2.6d72b68f.js";import"./chunks/ButtonPrimary.ae73aee9.js";const S={class:"flex flex-col-reverse lg:flex-row justify-between items-center gap-20"},L={class:"min-w-[40%] lg:min-w-fit w-fit"},B=["src"],U={class:"flex flex-col gap-[24px] min-w-[45%]"},I={class:"text-color1 text-[30px] md:text-[36px] xl:text-[48px] font-semibold leading-normal"},D={class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55]"},C={__name:"TitleImageLeft",props:{title:String,description:String,imageUrl:String},setup(i){const{frontmatter:a}=m();return(o,r)=>(l(),c("div",{class:d([[p(a).layout==="landing-page"?"landing_paragraph_spacing":"paragraph_spacing"],"my-[144px] lg:my-[176px] last-of-type:mb-0"])},[e("section",null,[e("div",S,[e("div",L,[e("img",{src:i.imageUrl,alt:"",width:"430",class:"w-[343px] sm:w-[430px] lg:h-[430px] object-contain object-start rounded-[8px]"},null,8,B)]),e("div",U,[e("h2",I,n(i.title),1),e("p",D,n(i.description),1)])])])],2))}},F={class:"flex flex-col lg:flex-row justify-between items-center gap-20"},N={class:"flex flex-col gap-[24px] min-w-[45%]"},W={class:"text-color1 text-[30px] md:text-[36px] xl:text-[48px] font-semibold leading-normal"},E={class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55]"},O={class:"min-w-[40%] lg:min-w-fit w-fit"},J=["src"],h={__name:"TitleImageRight",props:{title:String,description:String,imageUrl:String},setup(i){const{frontmatter:a}=m();return(o,r)=>(l(),c("div",{class:d([[p(a).layout==="landing-page"?"landing_paragraph_spacing":"paragraph_spacing"],"my-[144px] lg:my-[176px] last-of-type:mb-0"])},[e("section",null,[e("div",F,[e("div",N,[e("h2",W,n(i.title),1),e("p",E,n(i.description),1)]),e("div",O,[e("img",{src:i.imageUrl,alt:"",width:"430",class:"w-[343px] sm:w-[430px] lg:h-[430px] object-contain object-start rounded-[8px]"},null,8,J)])])])],2))}},R={class:"flex flex-col items-center gap-24"},V={class:"grid lg:grid-cols-2 gap-6 lg:gap-20 xl:gap-32 items-start"},M={class:"text-color1 text-[30px] md:text-[36px] xl:text-[48px] font-semibold leading-normal"},H={class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55]"},Z=["src"],K={__name:"TitleImageBottom",props:{title:String,description:String,imageUrl:String},setup(i){const{frontmatter:a}=m();return(o,r)=>(l(),c("div",{class:d([[p(a).layout==="landing-page"?"landing_paragraph_spacing":"paragraph_spacing"],"my-[144px] lg:my-[176px] last-of-type:mb-0"])},[e("section",null,[e("div",R,[e("div",V,[e("h2",M,n(i.title),1),e("p",H,n(i.description),1)]),e("img",{src:i.imageUrl,alt:"",width:"840",class:"w-[343px] sm:w-[450px] lg:w-[740px] object-contain object-start rounded-[8px]"},null,8,Z)])])],2))}};const w=i=>(j("data-v-0b7e1d13"),i=i(),v(),i),Q={class:"text-white lg:max-w-[500px]"},G={class:"mb-[16px] text-[30px] font-semibold leading-[1.27]"},Y=["innerHTML"],X=w(()=>e("img",{src:$,alt:"content image",class:"hidden xl:block w-[420px] absolute left-1/2 bottom-0"},null,-1)),ee={class:"shrink-0 flex flex-col max-w-[350px]"},te=w(()=>e("img",{src:T,alt:"content image",class:"xl:hidden",width:"396",height:"213",loading:"lazy"},null,-1)),ie={href:"https://calendar.app.google/fGZb5CLnPCaFtUQh8",target:"_blank",class:"shrink-0 text-center flex justify-center items-center py-[12px] px-[20px] text-gray1 text-[16px] font-medium leading-normal bg-white border border-grayText1 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:text-red1 active:opacity-[0.5]"},ae={__name:"ConsultationBanner",setup(i){const{frontmatter:a}=m(),o={PL:{title:"Bezpłatna konsultacja",description:"Kontakt bezpośredni pod [EMAIL] lub [PHONE]",linkTitle:"Umów  spotkanie"},EN:{title:"Free consultation",description:"Contact directly at [EMAIL] or [PHONE]",linkTitle:"Make an appointment"}},r=_(()=>o[a.value.language]),x=_(()=>r.value.description.replace("[EMAIL]",'<a href="mailto:info@p3doweks.com">info@p3doweks.com</a>').replace("[PHONE]",'<a href="tel:+48796594347" class="whitespace-nowrap">+48 796 594 347</a>'));return(Pe,$e)=>(l(),c("div",{class:d([[p(a).layout==="landing-page"?"landing_paragraph_spacing":"paragraph_spacing"],"my-[144px] lg:my-[176px] last-of-type:mb-0 relative p-[40px] md:p-[58px] rounded-[16px] bg-gray9 bg-center bg-cover bg-no-repeat bg_image flex flex-col gap-[20px] md:flex-row justify-between items-center"])},[e("div",Q,[e("p",G,n(r.value.title),1),e("p",{innerHTML:x.value,class:"lg:text-[20px] leading-normal"},null,8,Y)]),X,e("div",ee,[te,e("a",ie,n(r.value.linkTitle),1)])],2))}},se=b(ae,[["__scopeId","data-v-0b7e1d13"]]),ne=["href"],oe=["href"],k={__name:"ButtonActionSet",props:{buttonPrimary:{name:String,url:String},buttonSecondary:{name:String,url:String}},setup(i){const{frontmatter:a}=m();return(o,r)=>(l(),c("div",{class:d([[p(a).layout==="landing-page"?"landing_paragraph_spacing":"paragraph_spacing"],"mt-[20px] md:mt-[40px] flex-wrap sm:flex-nowrap flex items-start gap-[36px]"])},[i.buttonPrimary?(l(),c("a",{key:0,href:i.buttonPrimary.url,class:"w-full xs:w-fit min-w-[180px] py-[12px] md:py-[16px] px-[20px] md:px-[28px] btn_primary"},n(i.buttonPrimary.name),9,ne)):f("",!0),i.buttonSecondary?(l(),c("a",{key:1,href:i.buttonSecondary.url,class:"w-full xs:w-fit min-w-[185px] py-[12px] md:py-[16px] px-[20px] md:px-[28px] btn_secondary"},n(i.buttonSecondary.name),9,oe)):f("",!0)],2))}},re="/assets/semaprint.25ce6225.svg",le="/assets/tagvenue.3b3c95c4.svg",ce="/assets/epinote.bc94867d.svg",pe="/assets/uu_logo.a03c0ae3.svg";const me={class:"bg-gray2 p-[40px] md:p-[58px] rounded-[16px]"},de={class:"container"},ue={class:"mb-[32px] text-center text-color1 font-semibold leading-normal text-[24px] md:text-[30px] tracking-[0.5px]"},ge=z('<ul class="w-full grid grid-cols-1 sm:grid-cols-2 lg:flex items-center justify-center gap-16" data-v-26a9fa2f><li class="list-item" data-v-26a9fa2f><img src="'+re+'" alt="Semaprint logo" class="image" data-v-26a9fa2f></li><li class="list-item" data-v-26a9fa2f><img src="'+le+'" alt="Tagvenue logo" class="image" data-v-26a9fa2f></li><li class="list-item" data-v-26a9fa2f><img src="'+ce+'" alt="Epinote logo" class="image" data-v-26a9fa2f></li><li class="list-item" data-v-26a9fa2f><img src="'+pe+'" alt="Ukraine Unbreakable logo" class="image" data-v-26a9fa2f></li></ul>',1),xe={__name:"OurPartners",setup(i){const{frontmatter:a}=m(),o={PL:{title:"Zaufali nam"},EN:{title:"They trusted us"}};return(r,x)=>(l(),c("div",{class:d([[p(a).layout==="landing-page"?"landing_paragraph_spacing":"paragraph_spacing"],"my-[144px] lg:my-[176px] last-of-type:mb-0"])},[e("section",me,[e("div",de,[e("h3",ue,n(p(a).language==="PL"?o.PL.title:o.EN.title),1),ge])])],2))}},_e=b(xe,[["__scopeId","data-v-26a9fa2f"]]),fe=e("div",{class:"markdown_body"},null,-1),ye=e("h2",{id:"jakosc-kodu-i-umiejetnosci",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]"},[u("Jakość kodu i umiejętności "),e("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#jakosc-kodu-i-umiejetnosci","aria-label":'Permalink to "Jakość kodu i umiejętności"'},"​")],-1),he=e("p",{class:"mb-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),ke=e("h2",{id:"problemy-z-ktorymi-zmagaja-sie-zespoły-it",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]"},[u("Problemy, z którymi zmagają się zespoły IT "),e("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#problemy-z-ktorymi-zmagaja-sie-zespoły-it","aria-label":'Permalink to "Problemy, z którymi zmagają się zespoły IT"'},"​")],-1),be=e("p",{class:"mb-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55] landing_paragraph_spacing"},"Doskonale rozumiemy Waszą sytuację i kontekst, ponieważ sami przechodziliśmy przez te wszystkie problemy. Udało nam się je skutecznie pokonać i wiemy jak Wam pomóc.",-1),ze=z('<h2 id="problemy-z-ktorymi-zmagaja-sie-zespoły-it-1" tabindex="-1" class="mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]">Problemy, z którymi zmagają się zespoły IT <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#problemy-z-ktorymi-zmagaja-sie-zespoły-it-1" aria-label="Permalink to &quot;Problemy, z którymi zmagają się zespoły IT&quot;">​</a></h2><p class="mb-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55] landing_paragraph_spacing">Doskonale rozumiemy Waszą sytuację i kontekst, ponieważ sami przechodziliśmy przez te wszystkie problemy. Udało nam się je skutecznie pokonać i wiemy jak Wam pomóc.</p><p class="mb-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55] landing_paragraph_spacing">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.</p><h2 id="jakosc-kodu-i-umiejetnosci-1" tabindex="-1" class="mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]">Jakość kodu i umiejętności <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#jakosc-kodu-i-umiejetnosci-1" aria-label="Permalink to &quot;Jakość kodu i umiejętności&quot;">​</a></h2><p class="mb-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55] landing_paragraph_spacing">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.</p><h2 id="fail-fast" tabindex="-1" class="mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]">Fail Fast <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#fail-fast" aria-label="Permalink to &quot;Fail Fast&quot;">​</a></h2><p class="mb-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55] landing_paragraph_spacing">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.</p>',7),we=e("h2",{id:"fail-fast-1",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]"},[u("Fail Fast "),e("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#fail-fast-1","aria-label":'Permalink to "Fail Fast"'},"​")],-1),je=e("p",{class:"mb-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),ve=e("h2",{id:"test",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]"},[u("Test "),e("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#test","aria-label":'Permalink to "Test"'},"​")],-1),qe=e("p",{class:"mb-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55] landing_paragraph_spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.",-1),Ie=JSON.parse('{"title":"Work in progress!","description":"Work in progress!","frontmatter":{"layout":"landing-page","title":"Work in progress!","description":"Work in progress!","ogTitle":"czysty test!!!","ogDescription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam.","ogImage":"/uslugi/kitchen-sink/ogImage.jpg","language":"PL"},"headers":[],"relativePath":"uslugi/kitchen-sink.md","filePath":"uslugi/kitchen-sink.md"}'),Ae={name:"uslugi/kitchen-sink.md"},De=Object.assign(Ae,{setup(i){const{frontmatter:a}=m();return(o,r)=>(l(),c("div",null,[fe,t(q,{title:p(a).title,description:p(a).description,subTitle:"Usługi",imageFolder:"/uslugi/kitchen-sink"},null,8,["title","description"]),ye,he,t(k,{buttonPrimary:{name:"Aplikuj",url:"/"},buttonSecondary:{name:"Przeczytaj",url:"/"}}),ke,be,t(K,{imageUrl:"/uslugi/kitchen-sink/i-mini@1x.jpg",title:"Track and improve results",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam."}),t(C,{imageUrl:"/uslugi/kitchen-sink/i-mini@1x.jpg",title:"Lorem ipsum dolor sit amet.",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam."}),t(h,{imageUrl:"/uslugi/kitchen-sink/i-mini@1x.jpg",title:"Lorem ipsum dolor sit amet.",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora. A asperiores aspernatur dignissimos dolorem inventore nam necessitatibus possimus rerum sequi, ut! Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam, officiis quam quasi qui quis, rem sequi sit."}),ze,t(P,{iframeUrl:"https://www.youtube.com/embed/enfBJqz1LtA",iframeBgImage:"/uslugi/kitchen-sink/i@1x.jpg"}),t(A,null,{default:g(()=>[t(s,{title:"Bezpłatne konsultacje",description:"Uzyskasz odpowiedzi na Twoje pytania, przekażesz nam podstawowy kontekst i ustalimy możliwości poprawy,"}),t(s,{title:"Audyt",description:"Jednodniowa konsultacja gdzie szczegółowo postaramy się zrozumieć obecne flow i sytuację Waszego zespołu,"}),t(s,{title:"Prezentacja dla zespołu + Q&A",description:"Zamknięta prezentacja dla zespołu gdzie przedstawimy motywacyjne success story i zaadresujemy Wasze wątpliwości,"}),t(s,{title:"Warsztat",description:"Szczegółowe zdefiniowanie wszystkich celi do osiągnięcia, ustalenie kolejności i wybranie pierwszych celów,"}),t(s,{title:"Rozpoczęcie prac",description:"Praca po stronie Twojego zespołu jak też wspólna praca np. szkolenia i warsztaty z TDD i Refactoringu."})]),_:1}),we,je,t(y,null,{default:g(()=>[t(s,{iconUrl:"/uslugi/kitchen-sink/counter_1.svg",title:"Bezpłatne konsultacje",description:"Uzyskasz odpowiedzi na Twoje pytania, przekażesz nam podstawowy kontekst i ustalimy możliwości poprawy,"}),t(s,{iconUrl:"/uslugi/kitchen-sink/counter_2.svg",title:"Audyt",description:"Jednodniowa konsultacja gdzie szczegółowo postaramy się zrozumieć obecne flow i sytuację Waszego zespołu,"}),t(s,{iconUrl:"/uslugi/kitchen-sink/counter_3.svg",title:"Prezentacja dla zespołu + Q&A",description:"Zamknięta prezentacja dla zespołu gdzie przedstawimy motywacyjne success story i zaadresujemy Wasze wątpliwości,"}),t(s,{iconUrl:"/uslugi/kitchen-sink/counter_4.svg",title:"Warsztat",description:"Szczegółowe zdefiniowanie wszystkich celi do osiągnięcia, ustalenie kolejności i wybranie pierwszych celów,"}),t(s,{iconUrl:"/uslugi/kitchen-sink/counter_5.svg",title:"Rozpoczęcie prac",description:"Praca po stronie Twojego zespołu jak też wspólna praca np. szkolenia i warsztaty z TDD i Refactoringu."})]),_:1}),t(k,{buttonPrimary:{name:"Umów konsultację",url:"/#sekcja-formularz"}}),t(_e),t(se),ve,qe,t(y,null,{default:g(()=>[t(s,{title:"Zaawansowane praktyki",description:"Poszukujemy osób, które w swojej pracy potrafią wykorzystać zaawansowane praktyki tworzenia kodu lub są chętne i otwarte aby się ich nauczyć."}),t(s,{title:"Flow 50-100 deploymentów",description:"Duża część z nich jest niezbędna aby z sukcesem osiągać wyżej wspomniane wysoko wydaje flow 50-100 deploymentów na produkcję w miesiącu."}),t(s,{title:"Inwestycje",description:"Potrafimy przekonać naszych klientów w inwestycje w dług techniczny. Sprawny monitoring, skrypty deploymentowe, CD/CD pipeline, rozpoczynanie pracy od napisania testu są u nas podstawą i codziennością."}),t(s,{title:"Konkretne praktyki",description:"Konkretne praktyki, jakie stosujemy to m.in. Domain-Driven Design, Infrastructure as Code, Test-Driven Development, Trunk-Based Development oraz feature toggles, Refactoring, SOLID, KISS, YAGNI, DRY, Theory of Constraints, Clean Code, Extreme Programming, Fail Fast, a także szeroko pojętą automatyzację."})]),_:1}),t(h,{imageUrl:"/uslugi/kitchen-sink/i-mini@1x.jpg",title:"Lorem ipsum dolor sit amet.",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora. A asperiores aspernatur dignissimos dolorem inventore nam necessitatibus possimus rerum sequi, ut! Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam, officiis quam quasi qui quis, rem sequi sit."})]))}});export{Ie as __pageData,De as default};
