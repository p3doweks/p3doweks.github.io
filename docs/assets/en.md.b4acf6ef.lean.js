import{_ as u,a as f,b as g,c as _,d as v,e as w,f as y,g as S,C as b,F as k}from"./chunks/FindUsBanner.e87d9130.js";import{_ as m,o,c as r,e as p,f as x,a as l,n as C,F as L,r as $,g as W,b as i,u as a}from"./chunks/framework.187b43d0.js";import"./chunks/Contact.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/blogCards.3f17c952.js";import"./chunks/careerCards.2026e692.js";const T={},E={class:"pb-[64px] pt-[24px] lg:py-[96px]"},j=p('<div class="container flex flex-col lg:flex-row justify-start lg:justify-center lg:items-start items-center"><div class="flex flex-col lg:flex-row justify-start lg:justify-center gap-[48px] lg:gap-0 lg:items-start items-center"><div class="lg:max-w-[60%] lg:pt-[32px] flex flex-col justify-between"><a href="/en#sekcja-kariera" class="mb-[16px] w-full xs:w-fit min-h-[32px] px-[4px] pr-[10px] py-[4px] rounded-[16px] justify-start items-center inline-flex bg-[#FFECF0] hover:scale-[1.02] transition-all"><span class="mr-[12px] min-h-[24px] px-[10px] py-[2px] rounded-[16px] justify-center items-center inline-flex text-red1 text-[14px] bg-white font-medium leading-[1.25]">We are hiring</span><span class="mr-[4px] text-red1 text-[12px] md:text-[14px] font-medium leading-[1.25]">Check out latest offers</span><img src="'+u+'" alt="" class="w-[14px] h-[14px]"></a><h1 class="mb-[24px] lg:mb-[54px] text-[28px] lg:text-[52px] leading-[1.5] lg:leading-[1.23] tracking-[-0.56px] font-semibold text-color1"> We work in very short iterations. There is no risk, we will build you a software, that you don&#39;t need. </h1><a href="/en#sekcja-formularz" class="btn_primary w-full xs:w-fit min-w-[230px] py-[12px] md:py-[16px] px-[20px] md:px-[28px]"> Schedule consultation </a></div><div class="mx-auto lg:mx-0"><img src="'+f+'" alt="" width="480" height="560"></div></div></div>',1),M=[j];function X(t,e){return o(),r("section",E,M)}const D=m(T,[["render",X]]),z="/assets/layers.1deda715.svg",N="/assets/sisyphus.39147c7e.svg",V="/assets/circooles.cedcaa75.svg",F="/assets/catalog.d87c4294.svg",O="/assets/quotient.6bd73354.svg",c="/assets/avatar.ebf5e75a.png",B={name:"Slider",data(){return{activeSlide:1,containerWidth:"0px",itemWidth:0,totalSlides:0,startX:0,endX:0,isSwipeSupported:!1}},mounted(){this.totalSlides=this.$refs.slidesList.children.length,this.itemWidth=this.$refs.slidesContainer.offsetWidth,this.containerWidth=this.totalSlides*this.itemWidth+"px",this.isSwipeSupported="ontouchstart"in window,window.addEventListener("resize",this.updateWidths,{passive:!0}),this.$refs.slidesList.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),this.$refs.slidesList.addEventListener("touchmove",this.handleTouchMove,{passive:!0}),this.$refs.slidesList.addEventListener("touchend",this.handleTouchEnd,{passive:!0})},beforeDestroy(){window.removeEventListener("resize",this.updateWidths),this.$refs.slidesList.removeEventListener("touchstart",this.handleTouchStart),this.$refs.slidesList.removeEventListener("touchmove",this.handleTouchMove),this.$refs.slidesList.removeEventListener("touchend",this.handleTouchEnd)},watch:{totalSlides(t){t>0&&(this.containerWidth=t*this.itemWidth+"px")}},computed:{styleObject:function(){return{transform:"translateX("+(0-(this.activeSlide-1)*this.itemWidth)+"px)",width:this.containerWidth}}},methods:{changeSlide:function(t){this.activeSlide=t},nextSlide:function(){const t=this.$refs.slidesList.children.length;this.activeSlide<t?this.activeSlide++:this.activeSlide=1},prevSlide:function(){if(console.log("prev slide"),this.activeSlide>1)this.activeSlide--;else{const t=this.$refs.slidesList.children.length;this.activeSlide=t}},handleTouchStart(t){this.startX=t.touches[0].clientX},handleTouchMove(t){this.endX=t.touches[0].clientX},handleTouchEnd(){let t=100;this.startX-this.endX>t?this.nextSlide():this.endX-this.startX>t&&this.prevSlide()},updateWidths(){this.$refs.slidesContainer&&(this.itemWidth=this.$refs.slidesContainer.offsetWidth,this.containerWidth=this.totalSlides*this.itemWidth+"px")}}},I={ref:"slidesContainer",class:"overflow-hidden relative"},J=p('<li class="w-full flex flex-col items-center"><p class="mb-[76px] md:mb-[124px] max-w-[1216px] text-center text-color1 text-[30px] leading-[1.3] md:text-[48px] font-medium md:leading-[1.2]"> “Netguru builds software that lets people do things differently. Share your challenge with our team and we’ll work with you to deliver a revolutionary digital product.” </p><img loading="lazy" src="'+c+'" alt="avatar"><p class="mt-[16px] text-color1 text-[18px] font-medium leading-[1.5]"> Dawid Jankowski </p><p class="text-gray1 text-[16px] font-normal leading-normal"> UX Designer, VIDMO </p></li><li class="w-full flex flex-col items-center"><p class="mb-[76px] md:mb-[124px] max-w-[1216px] text-center text-color1 text-[30px] leading-[1.3] md:text-[48px] font-medium md:leading-[1.2]"> “Netguru builds software that lets people do things differently. Share your challenge with our team and we’ll work with you to deliver a revolutionary digital product.” </p><img loading="lazy" src="'+c+'" alt="avatar"><p class="mt-[16px] text-color1 text-[18px] font-medium leading-[1.5]"> Dawid Jankowski </p><p class="text-gray1 text-[16px] font-normal leading-normal"> UX Designer, VIDMO </p></li><li class="w-full flex flex-col items-center"><p class="mb-[76px] md:mb-[124px] max-w-[1216px] text-center text-color1 text-[30px] leading-[1.3] md:text-[48px] font-medium md:leading-[1.2]"> “Netguru builds software that lets people do things differently. Share your challenge with our team and we’ll work with you to deliver a revolutionary digital product.” </p><img loading="lazy" src="'+c+'" alt="avatar"><p class="mt-[16px] text-color1 text-[18px] font-medium leading-[1.5]"> Dawid Jankowski </p><p class="text-gray1 text-[16px] font-normal leading-normal"> UX Designer, VIDMO </p></li>',3),P=[J],U={class:"absolute bottom-[144px] md:bottom-[124px] left-[50%] transform -translate-x-1/2 -translate-y-1/2"},A={class:"hidden md:block"},H=l("svg",{width:"40",height:"41",viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"stroke-gray1 hover:stroke-color1"},[l("path",{d:"M19.9997 13.3933L13.333 20.06M13.333 20.06L19.9997 26.7266M13.333 20.06H26.6663M36.6663 20.06C36.6663 29.2647 29.2044 36.7266 19.9997 36.7266C10.7949 36.7266 3.33301 29.2647 3.33301 20.06C3.33301 10.8552 10.7949 3.39331 19.9997 3.39331C29.2044 3.39331 36.6663 10.8552 36.6663 20.06Z","stroke-width":"2"})],-1),Z=[H],q=l("svg",{width:"40",height:"41",viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"stroke-gray1 hover:stroke-color1"},[l("path",{d:"M19.9997 26.7266L26.6663 20.06M26.6663 20.06L19.9997 13.3933M26.6663 20.06H13.333M36.6663 20.06C36.6663 29.2647 29.2044 36.7266 19.9997 36.7266C10.7949 36.7266 3.33301 29.2647 3.33301 20.06C3.33301 10.8552 10.7949 3.39331 19.9997 3.39331C29.2044 3.39331 36.6663 10.8552 36.6663 20.06Z","stroke-width":"2"})],-1),Q=[q],R={class:"mt-[24px] flex items-center justify-center gap-[10px]"},G=["onClick"];function K(t,e,h,nt,d,n){return o(),r("div",I,[d.isSwipeSupported?x("",!0):(o(),r("button",{key:0,type:"button",onClick:e[0]||(e[0]=(...s)=>n.prevSlide&&n.prevSlide(...s)),class:"md:hidden absolute left-0 w-[80px] h-full cursor-pointer z-10 transparent-button"})),d.isSwipeSupported?x("",!0):(o(),r("button",{key:1,type:"button",onClick:e[1]||(e[1]=(...s)=>n.nextSlide&&n.nextSlide(...s)),class:"md:hidden absolute right-0 w-[80px] h-full cursor-pointer z-10 transparent-button"})),l("ul",{ref:"slidesList",class:"transition duration-[500ms] flex flex-nowrap select-none",style:C(n.styleObject)},P,4),l("div",U,[l("div",A,[l("button",{onClick:e[2]||(e[2]=(...s)=>n.prevSlide&&n.prevSlide(...s)),type:"button",class:"transition mr-[20px]"},Z),l("button",{type:"button",onClick:e[3]||(e[3]=(...s)=>n.nextSlide&&n.nextSlide(...s)),class:"transition"},Q)]),l("div",R,[(o(!0),r(L,null,$(d.totalSlides,s=>(o(),r("div",{key:s,onClick:at=>n.changeSlide(s),title:"pagination dot",class:W(["w-[12px] h-[12px] border-[2px] rounded-[50%] cursor-pointer",d.activeSlide===s?"active-slide":"default-slide"])},null,10,G))),128))])])],512)}const Y=m(B,[["render",K]]),tt={class:"bg-gray2 section_spacing"},et={class:"container"},st=p("",2),it={__name:"Testimonials",setup(t){return(e,h)=>(o(),r("section",tt,[l("div",et,[i(Y),st])]))}},ht=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"p3d-custom"},"headers":[],"relativePath":"en.md","filePath":"en.md"}'),lt={name:"en.md"},xt=Object.assign(lt,{setup(t){return(e,h)=>(o(),r("div",null,[i(a(D)),i(a(g)),i(a(_)),i(a(it)),i(a(v)),i(a(w)),i(a(y)),i(a(S)),i(a(b)),i(k)]))}});export{ht as __pageData,xt as default};
