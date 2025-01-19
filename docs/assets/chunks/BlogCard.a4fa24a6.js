import{_ as l,o as i,c as o,a as e,t as s,b as a}from"./framework.48313a52.js";const c={},r={width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d=e("path",{d:"M7 17.0601L17 7.06006M17 7.06006H7M17 7.06006V17.0601",stroke:"#101828","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),x=[d];function g(t,n){return i(),o("svg",r,x)}const m=l(c,[["render",g]]),h=["href"],f={class:"h-[240px] overflow-hidden rounded-[8px]"},_={class:"w-full h-full flex"},u=["srcset"],p=["srcset"],w=["src","alt"],b={class:"flex flex-col items-start justify-start gap-[12px]"},j={class:"w-full flex justify-between items-center"},y={class:"text-red1 text-[14px] font-semibold leading-[1.42]"},$={class:"min-h-[100px] text-color1 text-[24px] font-semibold leading-[1.33]"},v={class:"text-gray1 text-[16px] font-normal leading-normal"},S={__name:"BlogCard",props:{title:String,description:String,category:String,pageUrl:String,imageFolderName:String,imageLabel:String},setup(t){return(n,N)=>(i(),o("li",null,[e("a",{href:t.pageUrl,class:"max-w-[375px] md:w-[384px] flex flex-col justify-start gap-[32px]"},[e("div",f,[e("picture",_,[e("source",{srcset:`${t.imageFolderName}/i-mini@1x.webp 1x,
                  ${t.imageFolderName}/i-mini@2x.webp 2x`,type:"image/webp"},null,8,u),e("source",{srcset:`${t.imageFolderName}/i-mini@1x.jpg 1x,
                  ${t.imageFolderName}/i-mini@2x.jpg 2x`},null,8,p),e("img",{loading:"lazy",src:`${t.imageFolderName}/i-mini@1x.jpg`,alt:t.imageLabel,width:"375",height:"240",class:"w-full object-cover object-center"},null,8,w)])]),e("div",b,[e("div",j,[e("p",y,s(t.category),1),a(m)]),e("h3",$,s(t.title),1),e("p",v,s(t.description),1)])],8,h)]))}};export{m as G,S as _};
