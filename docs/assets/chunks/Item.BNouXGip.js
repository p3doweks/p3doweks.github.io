/* empty css                                                                     */import{_ as L,r as c,c as S,i as Z,m as P,x as N,o,b as i,d as t,f as g,E as B,C as V,F as q,j as X,n as v,u as E,h as j,q as R,a as d,t as h,B as W}from"./framework.BOi_6D6f.js";/* empty css                                                                    */const O={class:""},T={class:""},D={key:0,class:"hidden md:block mt-[24px] w-fit mx-auto"},I={key:1,class:"mt-[24px] flex items-center justify-center gap-[10px]"},U=["onClick"],F={__name:"Slider",setup(r){const a=c(null),e=c(null),n=c(1),u=c("100%"),p=c(0),f=c(0),x=c(0),C=c(!1),l=S(()=>e.value?e.value.children.length:0);Z(()=>{p.value=a.value.offsetWidth,u.value=l.value*p.value+"px",C.value="ontouchstart"in window,window.addEventListener("resize",M,{passive:!0}),e.value.addEventListener("touchstart",y,{passive:!0}),e.value.addEventListener("touchmove",k,{passive:!0}),e.value.addEventListener("touchend",H,{passive:!0})}),P(()=>{window.removeEventListener("resize",M),e.value.removeEventListener("touchstart",y),e.value.removeEventListener("touchmove",k),e.value.removeEventListener("touchend",H)}),N(l,s=>{s>0&&(u.value=s*p.value+"px")});const $=S(()=>({transform:`translateX(${0-(n.value-1)*p.value}px)`,width:u.value})),z=s=>{n.value=s},_=()=>{n.value<l.value?n.value++:n.value=1},b=()=>{n.value>1?n.value--:n.value=l.value},y=s=>{f.value=s.touches[0].clientX},k=s=>{x.value=s.touches[0].clientX},H=()=>{f.value-x.value>100?_():x.value-f.value>100&&b()},M=()=>{a.value&&(p.value=a.value.offsetWidth,u.value=l.value*p.value+"px")};return(s,m)=>(o(),i("div",O,[t("div",T,[t("div",{ref_key:"containerRef",ref:a,class:"overflow-hidden relative"},[!C.value&&l.value>1?(o(),i("button",{key:0,type:"button",onClick:b,class:"md:hidden absolute left-0 w-[80px] h-full cursor-pointer z-10 transparent-button"})):g("",!0),!C.value&&l.value>1?(o(),i("button",{key:1,type:"button",onClick:_,class:"md:hidden absolute right-0 w-[80px] h-full cursor-pointer z-10 transparent-button"})):g("",!0),t("ul",{ref_key:"listContainerRef",ref:e,class:"transition duration-[500ms] flex flex-nowrap select-none h-fit",style:B($.value)},[V(s.$slots,"default",{},void 0,!0)],4),t("div",null,[l.value>1?(o(),i("div",D,[t("button",{onClick:b,type:"button",class:"transition mr-[20px]"},m[0]||(m[0]=[t("svg",{width:"40",height:"41",viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"stroke-gray1 hover:stroke-color1"},[t("path",{d:"M19.9997 13.3933L13.333 20.06M13.333 20.06L19.9997 26.7266M13.333 20.06H26.6663M36.6663 20.06C36.6663 29.2647 29.2044 36.7266 19.9997 36.7266C10.7949 36.7266 3.33301 29.2647 3.33301 20.06C3.33301 10.8552 10.7949 3.39331 19.9997 3.39331C29.2044 3.39331 36.6663 10.8552 36.6663 20.06Z","stroke-width":"2"})],-1)])),t("button",{type:"button",onClick:_,class:"transition"},m[1]||(m[1]=[t("svg",{width:"40",height:"41",viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"stroke-gray1 hover:stroke-color1"},[t("path",{d:"M19.9997 26.7266L26.6663 20.06M26.6663 20.06L19.9997 13.3933M26.6663 20.06H13.333M36.6663 20.06C36.6663 29.2647 29.2044 36.7266 19.9997 36.7266C10.7949 36.7266 3.33301 29.2647 3.33301 20.06C3.33301 10.8552 10.7949 3.39331 19.9997 3.39331C29.2044 3.39331 36.6663 10.8552 36.6663 20.06Z","stroke-width":"2"})],-1)]))])):g("",!0),l.value>1?(o(),i("div",I,[(o(!0),i(q,null,X(l.value,w=>(o(),i("div",{key:w,onClick:r2=>z(w),title:"pagination dot",class:v(["w-[12px] h-[12px] border-[2px] rounded-[50%] cursor-pointer",n.value===w?"active-slide":"default-slide"])},null,10,U))),128))])):g("",!0)])],512)])]))}},G=L(F,[["__scopeId","data-v-2ee391ba"]]),p2={__name:"Testimonials",setup(r){const{frontmatter:a}=E();return(e,n)=>(o(),i("section",{class:v([[d(a).layout==="landing-page"?"landing_paragraph_spacing mt-[144px] lg:mt-[176px] ":"paragraph_spacing",d(a).layout!=="p3d-custom"?"rounded-[16px]":""],"bg-gray2 section_spacing"])},[t("div",{class:v([d(a).layout==="p3d-custom"?"container":""])},[j(G,null,{default:R(()=>[V(e.$slots,"default")]),_:3})],2)],2))}},K="/assets/semaprint.KeEsh8Mr.svg",A="/assets/tagvenue.D3Nduy1s.svg",J="data:image/svg+xml,%3csvg%20width='420'%20height='80'%20viewBox='0%200%20420%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M71.1113%2020.3235H89.0789V26.3904C93.0039%2023.6439%2099.2826%2020.5711%20109.509%2020.5711C122.894%2020.5711%20138.178%2022.9422%20138.178%2043.4619C138.178%2058.3269%20124.71%2065.0939%20109.867%2065.0939C100.156%2065.0939%2091.5926%2061.9697%2089.0781%2059.3638V80H71.1105V20.3235H71.1113ZM118.966%2042.9619C118.966%2035.1548%20113.122%2033.8085%20103.938%2033.8085C96.6587%2033.8085%2090.881%2036.4385%2089.0781%2039.1793V46.4511C93.6295%2052.2914%20106.906%2051.8967%20106.906%2051.8967C106.906%2051.8967%20118.966%2052.2094%20118.966%2042.9619Z'%20fill='black'/%3e%3cpath%20d='M231.51%2061.5461V65.0666H213.542C213.542%2065.0666%20213.542%2056.9356%20213.542%2050.3044C213.542%2043.6797%20213.984%2033.7209%20201.652%2033.7209C194.401%2033.7209%20191.07%2036.2029%20188.209%2039.2171V65.0666H170.072V20.3452H188.209V26.4973C193.155%2023.0258%20197.422%2019.9562%20207.634%2019.9562C216.013%2019.9562%20225.196%2021.0268%20228.878%2029.4641C231.527%2035.543%20231.523%2044.7793%20231.51%2061.5461Z'%20fill='black'/%3e%3cpath%20d='M302.878%2042.7859C302.878%2060.1266%20289.992%2065.5296%20269.589%2065.5296C248.697%2065.5296%20236.878%2059.9956%20236.878%2042.7859C236.878%2024.2452%20251.773%2020.0454%20269.142%2020.0454C286.714%2020.0454%20302.878%2023.6825%20302.878%2042.7859ZM283.749%2042.7859C283.749%2034.3293%20275.208%2032.717%20269.569%2032.717C263.936%2032.717%20256.011%2034.8333%20256.011%2042.421C256.011%2049.4846%20260.341%2052.8628%20269.757%2052.8628C278.332%2052.8628%20283.749%2050.4668%20283.749%2042.7859Z'%20fill='black'/%3e%3cpath%20d='M348.526%2053.5509C340.809%2053.5509%20335.751%2050.4965%20335.751%2043.1532L335.706%2033.7345H348.525V20.3235H335.706V10.3671H317.732C317.732%2010.3671%20317.732%2015.0194%20317.732%2020.3235H304.909V33.7362H317.732C317.732%2037.5083%20317.732%2040.4501%20317.732%2043.7721C317.732%2059.9208%20325.992%2066.2707%20348.525%2066.2707C349.936%2066.2707%20351.283%2066.2433%20352.58%2066.1935V53.2197C351.332%2053.444%20349.98%2053.5509%20348.526%2053.5509Z'%20fill='black'/%3e%3cpath%20d='M32.8296%2053.4159C23.9528%2053.4159%2020.1975%2051.2175%2019.0347%2049.3608C18.6728%2048.7909%2018.5088%2048.2339%2018.4645%2047.7355H18.4469V46.5146H64.4032C65.4542%2026.3527%2052.6226%2019.7633%2032.5956%2019.7633C10.5309%2019.7633%200%2028.5132%200%2042.6701C0%2060.3508%2011.3206%2065.5248%2033.4954%2065.5248C33.4954%2065.5248%2033.5003%2065.5215%2033.5035%2065.5143C49.4953%2065.3793%2060.6961%2061.7679%2064.4514%2051.4506H43.5391C41.5448%2052.6209%2038.1932%2053.4159%2032.8296%2053.4159ZM32.6929%2032.68C43.2456%2032.68%2046.1091%2036.5968%2046.1091%2039.5627H18.4469C18.4461%2037.3781%2020.7676%2032.68%2032.6929%2032.68Z'%20fill='black'/%3e%3cpath%20d='M388.36%2053.4159C379.484%2053.4159%20375.728%2051.2175%20374.566%2049.3608C374.207%2048.7909%20374.037%2048.2339%20373.998%2047.7355H373.978V46.5146H419.94C420.988%2026.3527%20408.157%2019.7633%20388.128%2019.7633C366.06%2019.7633%20355.536%2028.5132%20355.536%2042.6701C355.536%2060.3508%20366.851%2065.5248%20389.024%2065.5248C389.024%2065.5248%20389.038%2065.5215%20389.038%2065.5143C405.03%2065.3793%20416.232%2061.7679%20419.986%2051.4506H399.071C397.078%2052.6209%20393.726%2053.4159%20388.36%2053.4159ZM388.225%2032.68C398.778%2032.68%20401.641%2036.5968%20401.641%2039.5627H373.978C373.977%2037.3781%20376.3%2032.68%20388.225%2032.68Z'%20fill='black'/%3e%3cpath%20d='M148.01%2020.3428H144.278V65.0666H162.244V20.3444H148.017L148.01%2020.3428Z'%20fill='black'/%3e%3cpath%20d='M162.256%205.5316V0H144.275V17.9741C153.534%2017.9741%20162.256%2013.9576%20162.256%205.5316Z'%20fill='black'/%3e%3c/svg%3e",Q="/assets/uu_logo.XDcRzXRG.svg",Y={class:"bg-gray2 p-[40px] md:p-[58px] rounded-[16px]"},t2={class:"container"},e2={class:"mb-[32px] text-center text-gray1 font-normal leading-normal text-[16px] md:text-[18px] tracking-[0.5px]"},a2={__name:"OurPartners",setup(r){const{frontmatter:a}=E(),e={PL:{title:"Nasze doświadczenie",description:"Pracowaliśmy m.in. z firmami produkcyjnymi, e-commerce, startupami, SaaS, a nawet z organizacjami non-profit."},EN:{title:"Our experience",description:"We work with manufacturing companies, e-commerce, startups, SaaS, and even non-profit organizations."}};return(n,u)=>(o(),i("div",{class:v([d(a).layout==="landing-page"?"landing_paragraph_spacing mt-[144px] lg:mt-[176px]":"paragraph_spacing"])},[t("section",Y,[t("div",t2,[t("h3",{class:v([[d(a).layout==="p3d-custom"?"text-[24px] lg:text-[32px]":"text-[30px] md:text-[36px] xl:text-[48px]"],"mb-[32px] text-center text-color1 font-semibold leading-normal tracking-[0.5px]"])},h(d(a).language==="PL"?e.PL.title:e.EN.title),3),t("p",e2,h(d(a).language==="PL"?e.PL.description:e.EN.description),1),u[0]||(u[0]=W('<ul class="w-full grid grid-cols-1 sm:grid-cols-2 lg:flex items-center justify-center gap-16" data-v-b3e58fcb><li class="list-item" data-v-b3e58fcb><img src="'+K+'" alt="Semaprint logo" class="image" width="150" height="70" data-v-b3e58fcb></li><li class="list-item" data-v-b3e58fcb><img src="'+A+'" alt="Tagvenue logo" class="image" width="150" height="70" data-v-b3e58fcb></li><li class="list-item" data-v-b3e58fcb><img src="'+J+'" alt="Epinote logo" class="image" width="150" height="70" data-v-b3e58fcb></li><li class="list-item" data-v-b3e58fcb><img src="'+Q+'" alt="Ukraine Unbreakable logo" class="image" width="150" height="70" data-v-b3e58fcb></li></ul>',1))])])],2))}},h2=L(a2,[["__scopeId","data-v-b3e58fcb"]]),s2={class:"w-full flex flex-col items-center px-[16px] h-full text-center"},n2={class:"mb-[42px] section_title text-center"},l2=["src","alt"],o2={class:"mt-[16px] text-color1 text-[18px] font-medium leading-[1.5]"},i2={class:"text-gray1 text-[16px] font-normal leading-normal"},v2={__name:"Item",props:{quote:{type:String,required:!0},author:{type:String,required:!0},authorPosition:{type:String,required:!0},authorPhoto:{type:String,required:!0}},setup(r){return(a,e)=>(o(),i("li",s2,[t("p",n2,"“"+h(r.quote)+"”",1),t("img",{loading:"lazy",src:r.authorPhoto,alt:r.author+" photo",width:"64",height:"64",class:"w-[64px] h-[64px] rounded-full"},null,8,l2),t("p",o2,h(r.author),1),t("p",i2,h(r.authorPosition),1)]))}};export{h2 as O,v2 as _,p2 as a};
