import{R as p}from"./chunks/theme.OT_Diu0A.js";import{E as o,G as u,R as l,H as c,I as f,J as d,K as m,L as h,M as A,N as g,O as P,P as R,u as v,i as w,A as y,Q as C,S as E,U as S,V as b}from"./chunks/framework.tuXvs_5t.js";function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(p),T=R({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=v();return w(()=>{y(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&C(),E(),S(),s.setup&&s.setup(),()=>b(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=O(),t=L();t.provide(l,e);const a=c(e.route);return t.provide(f,a),t.component("Content",d),t.component("ClientOnly",m),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:h}),{app:t,router:e,data:a}}function L(){return A(T)}function O(){let e=o,t;return g(a=>{let n=P(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:t,data:a})=>{t.go().then(()=>{u(t.route,a.site),e.mount("#app")})});export{D as createApp};
