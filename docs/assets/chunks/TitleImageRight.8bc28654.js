import{h as r,o,c as n,a as e,i as c,n as l,u as s}from"./framework.48313a52.js";const g={class:"flex flex-col-reverse lg:flex-row justify-between items-center gap-20 xl:gap-32"},m={class:"w-full lg:max-w-[45%]"},d={class:"w-full lg:max-w-[45%] flex items-center justify-center"},p=["srcset"],u=["srcset"],x=["src"],h={__name:"TitleImageRight",props:{imageFolder:{type:String,required:!0}},setup(t){const{frontmatter:a}=r();return(i,f)=>(o(),n("div",{class:l([s(a).layout==="landing-page"?"landing_paragraph_spacing mt-[144px] lg:mt-[176px]":"paragraph_spacing mt-[64px]"])},[e("section",{class:l([s(a).layout==="landing-page"?"":"container"])},[e("div",g,[e("div",m,[c(i.$slots,"default")]),e("div",d,[e("picture",null,[e("source",{srcset:`${t.imageFolder}/title-image-lor@1x.webp 1x,
                  ${t.imageFolder}/title-image-lor@2x.webp 2x`,type:"image/webp"},null,8,p),e("source",{srcset:`${t.imageFolder}/title-image-lor@1x.jpg 1x,
                  ${t.imageFolder}/title-image-lor@2x.jpg 2x`,type:"image/webp"},null,8,u),e("img",{src:`${t.imageFolder}/title-image-lor@1x.jpg`,alt:"",width:"488",loading:"lazy",class:"w-[488px] object-contain object-center rounded-xl"},null,8,x)])])])],2)],2))}};export{h as _};
