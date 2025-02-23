import{u as m,i as h,E as p,o as d,b as l,d as t,C as s,n as f,a as x,_,t as g,f as b}from"./framework.C0WHIBB9.js";import{u as w}from"./theme.L1PUJcj4.js";const y={class:"container"},v={class:"text-center"},$={class:"text-center"},E={class:"mt-24 mx-auto w-full max-w-[450px] md:max-w-full grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center xl:flex rounded-xl overflow-hidden"},k={__name:"PricingChoices",setup(a){const{frontmatter:r}=m(),{windowWidth:i}=w();h(()=>{c(),window.addEventListener("resize",u)}),p(()=>{window.removeEventListener("resize",u)});const c=()=>{const e=document.querySelectorAll(".card-header");if(i.value<768){e.forEach(o=>{o.style.height="auto"});return}let n=0;e.forEach(o=>{n=Math.max(n,o.offsetHeight)}),e.forEach(o=>{o.style.height=`${n}px`})},u=()=>{document.querySelectorAll(".card-header").forEach(e=>{e.style.height="auto"}),c()};return(e,n)=>(d(),l("div",{class:f([[x(r).layout==="landing-page"?"landing_paragraph_spacing mt-[144px] lg:mt-[176px]":"paragraph_spacing mt-[64px]"],"relative left-1/2 translate-x-[calc(-50%)] w-[calc(100vw-theme(width.scrollbar))] py-[80px] bg-red1 bg-opacity-10"])},[t("section",y,[t("div",v,[s(e.$slots,"title")]),t("div",$,[s(e.$slots,"description")]),t("ul",E,[s(e.$slots,"cards")]),s(e.$slots,"default")])],2))}},C={class:"card max-w-[450px] md:max-w-full xl:max-w-[450px] odd:last-of-type:rounded-b-xl xl:odd:last-of-type:rounded-b-none w-full p-[28px] bg-white shadow-sm border-gray5 border-b-[2px] sm:border-r-[2px]"},S={class:"card-header pb-[32px] w-full md:min-h-[150px] border-b border-gray5 flex flex-col"},N={key:0,class:"mt-auto"},z=["href"],H={class:"content pt-[32px] w-full min-h-[250px]"},P={__name:"PricingCard",props:{buttonName:String,buttonUrl:String},setup(a){return(r,i)=>(d(),l("li",C,[t("div",S,[s(r.$slots,"header",{},void 0,!0),a.buttonName&&a.buttonUrl?(d(),l("div",N,[t("a",{href:a.buttonUrl,class:"btn_primary mt-[18px] w-full p-[10px]"},g(a.buttonName),9,z)])):b("",!0)]),t("div",H,[s(r.$slots,"content",{},void 0,!0)])]))}},B=_(P,[["__scopeId","data-v-2fe5e9b5"]]);export{B as P,k as _};
