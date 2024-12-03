import{G as u,a as w,_ as a}from"./chunks/GridItem.a1e535c9.js";import{o as n,c as r,a as e,t as s,_ as h,g as y,j as x,p as z,k as b,l as g,u as j,e as f,b as i,w as m,d as p}from"./chunks/framework.0c580a32.js";import{_ as v}from"./chunks/YouTube.762fcc15.js";import{_ as P,a as $}from"./chunks/napisz-do-nas-blog2.6d72b68f.js";const S={class:"my-[64px] mt-[70px] md:mt-[100px] paragraph_spacing"},T={class:"flex flex-col-reverse lg:flex-row justify-between items-center gap-24"},U={class:"min-w-[40%] lg:min-w-fit w-fit"},D=["src"],I={class:"flex flex-col gap-[24px] min-w-[50%]"},A={class:"text-color1 text-[30px] md:text-[36px] xl:text-[48px] font-semibold leading-normal"},C={class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55]"},L={__name:"TitleImageLeft",props:{title:String,description:String,imageUrl:String},setup(t){return(l,o)=>(n(),r("section",S,[e("div",T,[e("div",U,[e("img",{src:t.imageUrl,alt:"",width:"450",class:"w-[343px] sm:w-[450px] lg:h-[450px] object-contain object-start rounded-[8px]"},null,8,D)]),e("div",I,[e("h2",A,s(t.title),1),e("p",C,s(t.description),1)])])]))}},q={class:"my-[64px] mt-[70px] md:mt-[100px] paragraph_spacing"},N={class:"flex flex-col lg:flex-row justify-between items-center gap-24"},B={class:"flex flex-col gap-[24px] min-w-[50%]"},F={class:"text-color1 text-[30px] md:text-[36px] xl:text-[48px] font-semibold leading-normal"},W={class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55] paragraph_spacing"},E={class:"min-w-[40%] lg:min-w-fit w-fit"},O=["src"],J={__name:"TitleImageRight",props:{title:String,description:String,imageUrl:String},setup(t){return(l,o)=>(n(),r("section",q,[e("div",N,[e("div",B,[e("h2",F,s(t.title),1),e("p",W,s(t.description),1)]),e("div",E,[e("img",{src:t.imageUrl,alt:"",width:"450",class:"w-[343px] sm:w-[450px] lg:h-[450px] object-contain object-start rounded-[8px]"},null,8,O)])])]))}};const k=t=>(z("data-v-27c86d69"),t=t(),b(),t),R={class:"my-[64px] paragraph_spacing relative p-[40px] md:p-[58px] rounded-[16px] bg-gray9 bg-center bg-cover bg-no-repeat bg_image flex flex-col gap-[20px] md:flex-row justify-between items-center"},V={class:"text-white lg:max-w-[500px]"},M={class:"mb-[16px] text-[30px] font-semibold leading-[1.27]"},G=["innerHTML"],H=k(()=>e("img",{src:P,alt:"content image",class:"hidden xl:block w-[420px] absolute left-1/2 bottom-0"},null,-1)),K={class:"shrink-0 flex flex-col max-w-[350px]"},Z=k(()=>e("img",{src:$,alt:"content image",class:"xl:hidden",width:"396",height:"213",loading:"lazy"},null,-1)),Y={href:"https://calendar.app.google/fGZb5CLnPCaFtUQh8",target:"_blank",class:"shrink-0 text-center flex justify-center items-center py-[12px] px-[20px] text-gray1 text-[16px] font-medium leading-normal bg-white border border-grayText1 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:text-red1 active:opacity-[0.5]"},Q={__name:"ConsultationBanner",setup(t){const{frontmatter:l}=y(),o={PL:{title:"Bezpłatna konsultacja",description:"Kontakt bezpośredni pod [EMAIL] lub [PHONE]",linkTitle:"Umów  spotkanie"},EN:{title:"Free consultation",description:"Contact directly at [EMAIL] or [PHONE]",linkTitle:"Make an appointment"}},c=x(()=>o[l.value.language]),d=x(()=>c.value.description.replace("[EMAIL]",'<a href="mailto:info@p3doweks.com">info@p3doweks.com</a>').replace("[PHONE]",'<a href="tel:+48796594347" class="whitespace-nowrap">+48 796 594 347</a>'));return(Se,Te)=>(n(),r("div",R,[e("div",V,[e("p",M,s(c.value.title),1),e("p",{innerHTML:d.value,class:"lg:text-[20px] leading-normal"},null,8,G)]),H,e("div",K,[Z,e("a",Y,s(c.value.linkTitle),1)])]))}},X=h(Q,[["__scopeId","data-v-27c86d69"]]),ee={class:"mt-[20px] md:mt-[40px] flex-wrap sm:flex-nowrap flex items-start gap-[36px] paragraph_spacing"},te=["href"],ie=["href"],_={__name:"ButtonActionSet",props:{buttonPrimary:{name:String,url:String},buttonSecondary:{name:String,url:String}},setup(t){return(l,o)=>(n(),r("div",ee,[t.buttonPrimary?(n(),r("a",{key:0,href:t.buttonPrimary.url,class:"w-full sm:w-fit min-w-[180px] py-[12px] md:py-[16px] px-[20px] md:px-[28px] btn_primary"},s(t.buttonPrimary.name),9,te)):g("",!0),t.buttonSecondary?(n(),r("a",{key:1,href:t.buttonSecondary.url,class:"w-full sm:w-fit min-w-[185px] py-[12px] md:py-[16px] px-[20px] md:px-[28px] btn_secondary"},s(t.buttonSecondary.name),9,ie)):g("",!0)]))}},ae="/assets/semaprint.25ce6225.svg",se="/assets/tagvenue.3b3c95c4.svg",oe="/assets/epinote.bc94867d.svg",ne="/assets/uu_logo.a03c0ae3.svg";const re={class:"my-[64px] paragraph_spacing bg-gray2 p-[40px] md:p-[58px] rounded-[16px]"},le={class:"container"},ce={class:"mb-[16px] text-center text-color1 font-semibold leading-normal text-[24px] md:text-[30px] tracking-[0.5px]"},pe=f('<div class="overflow-hidden overflow-x-auto custom-scroll" data-v-a532bf82><ul class="flex flex-nowrap items-center justify-center gap-16" data-v-a532bf82><li class="flex-none" data-v-a532bf82><img src="'+ae+'" alt="Semaprint logo" class="image" data-v-a532bf82></li><li class="flex-none" data-v-a532bf82><img src="'+se+'" alt="Tagvenue logo" class="image" data-v-a532bf82></li><li class="flex-none" data-v-a532bf82><img src="'+oe+'" alt="Epinote logo" class="image" data-v-a532bf82></li><li class="flex-none" data-v-a532bf82><img src="'+ne+'" alt="Ukraine Unbreakable logo" class="image" data-v-a532bf82></li></ul></div>',1),me={__name:"OurPartners",setup(t){const{frontmatter:l}=y(),o={PL:{title:"Zaufali nam"},EN:{title:"They trusted us"}};return(c,d)=>(n(),r("section",re,[e("div",le,[e("h3",ce,s(j(l).language==="PL"?o.PL.title:o.EN.title),1),pe])]))}},de=h(me,[["__scopeId","data-v-a532bf82"]]),ue={class:"my-[64px] mt-[70px] md:mt-[100px] paragraph_spacing"},xe={class:"flex flex-col items-center gap-24"},ge={class:"grid lg:grid-cols-2 gap-6 lg:gap-20 xl:gap-32 items-start"},_e={class:"text-color1 text-[30px] md:text-[36px] xl:text-[48px] font-semibold leading-normal"},he={class:"text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55]"},ye=["src"],fe={__name:"TitleImageBottom",props:{title:String,description:String,imageUrl:String},setup(t){return(l,o)=>(n(),r("section",ue,[e("div",xe,[e("div",ge,[e("h2",_e,s(t.title),1),e("p",he,s(t.description),1)]),e("img",{src:t.imageUrl,alt:"",width:"840",class:"w-[343px] sm:w-[450px] lg:w-[740px] object-contain object-start rounded-[8px]"},null,8,ye)])]))}},ke=e("div",{class:"markdown_body"},null,-1),we=e("h2",{id:"jakosc-kodu-i-umiejetnosci",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]"},[p("Jakość kodu i umiejętności "),e("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#jakosc-kodu-i-umiejetnosci","aria-label":'Permalink to "Jakość kodu i umiejętności"'},"​")],-1),ze=e("h2",{id:"problemy-z-ktorymi-zmagaja-sie-zespoły-it",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]"},[p("Problemy, z którymi zmagają się zespoły IT "),e("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#problemy-z-ktorymi-zmagaja-sie-zespoły-it","aria-label":'Permalink to "Problemy, z którymi zmagają się zespoły IT"'},"​")],-1),be=e("p",{class:"mb-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55] paragraph_spacing"},"Doskonale rozumiemy Waszą sytuację i kontekst, ponieważ sami przechodziliśmy przez te wszystkie problemy. Udało nam się je skutecznie pokonać i wiemy jak Wam pomóc.",-1),je=f('<h2 id="problemy-z-ktorymi-zmagaja-sie-zespoły-it-1" tabindex="-1" class="mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]">Problemy, z którymi zmagają się zespoły IT <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#problemy-z-ktorymi-zmagaja-sie-zespoły-it-1" aria-label="Permalink to &quot;Problemy, z którymi zmagają się zespoły IT&quot;">​</a></h2><p class="mb-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.55] paragraph_spacing">Doskonale rozumiemy Waszą sytuację i kontekst, ponieważ sami przechodziliśmy przez te wszystkie problemy. Udało nam się je skutecznie pokonać i wiemy jak Wam pomóc.</p><h2 id="jakosc-kodu-i-umiejetnosci-1" tabindex="-1" class="mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]">Jakość kodu i umiejętności <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#jakosc-kodu-i-umiejetnosci-1" aria-label="Permalink to &quot;Jakość kodu i umiejętności&quot;">​</a></h2>',3),ve=e("h2",{id:"fail-fast",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]"},[p("Fail Fast "),e("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#fail-fast","aria-label":'Permalink to "Fail Fast"'},"​")],-1),Pe=e("h2",{id:"fail-fast-1",tabindex:"-1",class:"mb-[24px] text-color1 font-semibold leading-normal text-[30px] md:text-[36px] xl:text-[48px]"},[p("Fail Fast "),e("a",{class:"header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors",href:"#fail-fast-1","aria-label":'Permalink to "Fail Fast"'},"​")],-1),Ce=JSON.parse('{"title":"Work in progress!","description":"Work in progress!","frontmatter":{"layout":"landing-page","title":"Work in progress!","subTitle":"Usługi","description":"Work in progress!","imageFolder":"/uslugi/kitchen-sink","bannerImageName":"Photo of the terminal","language":"PL"},"headers":[],"relativePath":"uslugi/kitchen-sink.md","filePath":"uslugi/kitchen-sink.md"}'),$e={name:"uslugi/kitchen-sink.md"},Le=Object.assign($e,{setup(t){return(l,o)=>(n(),r("div",null,[ke,we,i(_,{buttonPrimary:{name:"Aplikuj",url:"/"},buttonSecondary:{name:"Przeczytaj",url:"/"}}),ze,be,i(fe,{imageUrl:"/uslugi/kitchen-sink/i-mini@1x.jpg",title:"Track and improve results",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam."}),i(L,{imageUrl:"/uslugi/kitchen-sink/i-mini@1x.jpg",title:"Lorem ipsum dolor sit amet.",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora.Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam."}),i(J,{imageUrl:"/uslugi/kitchen-sink/i-mini@1x.jpg",title:"Lorem ipsum dolor sit amet.",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem eum, illum in incidunt tempora. A asperiores aspernatur dignissimos dolorem inventore nam necessitatibus possimus rerum sequi, ut! Ad neque non perspiciatis. Aperiam consectetur cupiditate eaque eius, fuga ipsum libero minus numquam, officiis quam quasi qui quis, rem sequi sit."}),je,i(u,null,{default:m(()=>[i(a,{title:"Zaawansowane praktyki",description:"Poszukujemy osób, które w swojej pracy potrafią wykorzystać zaawansowane praktyki tworzenia kodu lub są chętne i otwarte aby się ich nauczyć."}),i(a,{title:"Flow 50-100 deploymentów",description:"Duża część z nich jest niezbędna aby z sukcesem osiągać wyżej wspomniane wysoko wydaje flow 50-100 deploymentów na produkcję w miesiącu."}),i(a,{title:"Inwestycje",description:"Potrafimy przekonać naszych klientów w inwestycje w dług techniczny. Sprawny monitoring, skrypty deploymentowe, CD/CD pipeline, rozpoczynanie pracy od napisania testu są u nas podstawą i codziennością."}),i(a,{title:"Konkretne praktyki",description:"Konkretne praktyki, jakie stosujemy to m.in. Domain-Driven Design, Infrastructure as Code, Test-Driven Development, Trunk-Based Development oraz feature toggles, Refactoring, SOLID, KISS, YAGNI, DRY, Theory of Constraints, Clean Code, Extreme Programming, Fail Fast, a także szeroko pojętą automatyzację."})]),_:1}),ve,i(v,{iframeUrl:"https://www.youtube.com/embed/taiCYrNPbO0?si=PmYlbKtwkJ41DMCV"}),i(w,null,{default:m(()=>[i(a,{title:"Bezpłatne konsultacje",description:"Uzyskasz odpowiedzi na Twoje pytania, przekażesz nam podstawowy kontekst i ustalimy możliwości poprawy,"}),i(a,{title:"Audyt",description:"Jednodniowa konsultacja gdzie szczegółowo postaramy się zrozumieć obecne flow i sytuację Waszego zespołu,"}),i(a,{title:"Prezentacja dla zespołu + Q&A",description:"Zamknięta prezentacja dla zespołu gdzie przedstawimy motywacyjne success story i zaadresujemy Wasze wątpliwości,"}),i(a,{title:"Warsztat",description:"Szczegółowe zdefiniowanie wszystkich celi do osiągnięcia, ustalenie kolejności i wybranie pierwszych celów,"}),i(a,{title:"Rozpoczęcie prac",description:"Praca po stronie Twojego zespołu jak też wspólna praca np. szkolenia i warsztaty z TDD i Refactoringu."})]),_:1}),Pe,i(u,null,{default:m(()=>[i(a,{iconUrl:"/uslugi/kitchen-sink/counter_1.svg",title:"Bezpłatne konsultacje",description:"Uzyskasz odpowiedzi na Twoje pytania, przekażesz nam podstawowy kontekst i ustalimy możliwości poprawy,"}),i(a,{iconUrl:"/uslugi/kitchen-sink/counter_2.svg",title:"Audyt",description:"Jednodniowa konsultacja gdzie szczegółowo postaramy się zrozumieć obecne flow i sytuację Waszego zespołu,"}),i(a,{iconUrl:"/uslugi/kitchen-sink/counter_3.svg",title:"Prezentacja dla zespołu + Q&A",description:"Zamknięta prezentacja dla zespołu gdzie przedstawimy motywacyjne success story i zaadresujemy Wasze wątpliwości,"}),i(a,{iconUrl:"/uslugi/kitchen-sink/counter_4.svg",title:"Warsztat",description:"Szczegółowe zdefiniowanie wszystkich celi do osiągnięcia, ustalenie kolejności i wybranie pierwszych celów,"}),i(a,{iconUrl:"/uslugi/kitchen-sink/counter_5.svg",title:"Rozpoczęcie prac",description:"Praca po stronie Twojego zespołu jak też wspólna praca np. szkolenia i warsztaty z TDD i Refactoringu."})]),_:1}),i(_,{buttonPrimary:{name:"Umów konsultację",url:"/#sekcja-formularz"}}),i(de),i(X)]))}});export{Ce as __pageData,Le as default};
