import{g as f,i as p,q as g,o,c as i,l as n,n as w,u as h,a as s}from"./framework.1af05269.js";const v=["src"],y=s("svg",{viewBox:"0 0 68 48"},[s("path",{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"#f00"}),s("path",{d:"M 45,24 27,14 27,34",class:"fill-white"})],-1),x=[y],_=["src"],b={__name:"YouTube",props:{iframeUrl:{type:String,required:!0},iframeBgImage:String},setup(c){const e=c;if(!e.iframeUrl)throw new Error("Nie podano wartości dla iframeUrl. Upewnij się, że właściwość iframeUrl jest poprawnie przekazana.");const{frontmatter:d}=f(),a=p(!0),r=p("");g(()=>{a.value=!!e.iframeBgImage,e.iframeBgImage||(r.value=e.iframeUrl)});const u=()=>{a.value=!1,r.value=(()=>{const l=new URL(e.iframeUrl,window.location.origin);return l.searchParams.set("autoplay","1"),l.toString()})()};return(l,t)=>(o(),i("div",{class:w([[h(d).layout==="landing-page"?"landing_paragraph_spacing mt-[80px]":"paragraph_spacing mt-[64px]"],"relative flex items-center justify-center"])},[a.value?(o(),i("img",{key:0,onClick:t[0]||(t[0]=m=>u()),src:c.iframeBgImage,alt:"",width:"650",height:"364",class:"mx-auto w-[650px] h-[364px] cursor-pointer transition-all duration-1000 object-cover object-center rounded-xl overflow-hidden"},null,8,v)):n("",!0),a.value?(o(),i("div",{key:1,onClick:t[1]||(t[1]=m=>u()),class:"w-[68px] h-[48px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] cursor-pointer transition-all duration-1000","aria-label":"Play",title:"Play"},x)):n("",!0),!a.value&&r.value?(o(),i("iframe",{key:2,width:"650",height:"364",src:r.value,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:"",class:"border-none w-[650px] h-[364px] overflow-hidden"},null,8,_)):n("",!0)],2))}};export{b as _};
