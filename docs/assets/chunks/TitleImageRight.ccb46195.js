import{_ as l,g as i,o,c as n,a as e,h as c,n as r,u as g}from"./framework.46a81529.js";const d={class:"flex flex-col lg:flex-row justify-between items-center gap-20"},m={class:"content min-w-[45%]"},_={class:"min-w-[40%] lg:min-w-fit w-fit"},p={class:"w-full h-full"},u=["srcset"],x=["srcset"],h=["src"],f={__name:"TitleImageRight",props:{imageFolder:{type:String,required:!0}},setup(t){const{frontmatter:a}=i();return(s,w)=>(o(),n("div",{class:r([g(a).layout==="landing-page"?"landing_paragraph_spacing mt-[144px] lg:mt-[176px]":"paragraph_spacing mt-[64px]"])},[e("section",null,[e("div",d,[e("div",m,[c(s.$slots,"default",{},void 0,!0)]),e("div",_,[e("picture",p,[e("source",{srcset:`${t.imageFolder}/title-image-lor@1x.webp 1x,
                  ${t.imageFolder}/title-image-lor@2x.webp 2x`,type:"image/webp"},null,8,u),e("source",{srcset:`${t.imageFolder}/title-image-lor@1x.jpg 1x,
                  ${t.imageFolder}/title-image-lor@2x.jpg 2x`,type:"image/webp"},null,8,x),e("img",{src:`${t.imageFolder}/title-image-lor@1x.jpg`,alt:"",width:"430",loading:"lazy",class:"w-[430px] object-contain object-start rounded-xl"},null,8,h)])])])])],2))}},b=l(f,[["__scopeId","data-v-e1727da3"]]);export{b as T};
