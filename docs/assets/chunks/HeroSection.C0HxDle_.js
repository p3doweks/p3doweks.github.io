import{u as i,o as n,b as r,d as e,n as s,a as l,C as c}from"./framework.tuXvs_5t.js";const g={class:"w-full lg:max-w-[45%]"},d={class:"mx-auto lg:mx-0 w-full lg:max-w-[45%] flex items-center justify-center"},m={class:"lg:w-full"},u=["srcset"],x=["srcset"],p=["src","width"],y={__name:"HeroSection",props:{imageFolder:{type:String,required:!0}},setup(t){const{frontmatter:a}=i();return(o,f)=>(n(),r("div",{class:s([l(a).layout==="landing-page"?"landing_paragraph_spacing":"py-[64px] lg:py-[96px]"])},[e("section",{class:s({container:l(a).layout==="p3d-custom"})},[e("div",{class:s([[l(a).layout==="landing-page"?"xl:gap-32":"xl:gap-40"],"flex flex-col lg:flex-row justify-between items-center gap-20"])},[e("div",g,[c(o.$slots,"default")]),e("div",d,[e("picture",m,[e("source",{srcset:`${t.imageFolder}/title-image-lor@1x.webp 1x,
                  ${t.imageFolder}/title-image-lor@2x.webp 2x`,type:"image/webp"},null,8,u),e("source",{srcset:`${t.imageFolder}/title-image-lor@1x.jpg 1x,
                  ${t.imageFolder}/title-image-lor@2x.jpg 2x`,type:"image/jpeg"},null,8,x),e("img",{src:`${t.imageFolder}/title-image-lor@1x.jpg`,alt:"",width:l(a).layout==="landing-page"?488:520,class:s([[l(a).layout==="landing-page"?"max-w-[488px]":"max-w-[520px]"],"w-full h-auto object-contain object-center rounded-xl"])},null,10,p)])])],2)],2)],2))}};export{y as _};
