import{_ as e,a as t}from"./chunks/mobile.1165e70f.js";import{_ as a,o as n,c as o,e as i}from"./chunks/framework.a4141178.js";const b=JSON.parse('{"title":"P3 Doweks website in Vitepress and Vue.js","description":"We have implemented the first version of our website based on Vitepress and Vue.js with content editing by a non-technical person in Markdown.","frontmatter":{"layout":"p3d-blog","subTitle":"Published","title":"P3 Doweks website in Vitepress and Vue.js","description":"We have implemented the first version of our website based on Vitepress and Vue.js with content editing by a non-technical person in Markdown.","author":{"name":"Konrad Otrębski","position":"Tech Lead"},"readTime":"15 minutes","publicDate":"2023-12-01","imageFolder":"/blog/strona-internetowa-vitepress-vue-js","bannerImageName":"Photo of the web page view","language":"EN"},"headers":[],"relativePath":"blog/website-vitepress-vue-js.md","filePath":"blog/website-vitepress-vue-js.md"}'),r={name:"blog/website-vitepress-vue-js.md"},s=i('<div class="markdown_body"></div><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">The P3 Doweks team implemented the first version of our website. The basic choice, in terms of technical matters, was the choice of technologies used. Apart from the standard expectations that companies have towards a website, our requirement was for it to be easy (cheap) to maintain. We would like not to devote attention to things that we do not have to.</p><h2 id="technology-requirements" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px] leading-normal">Technology requirements <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#technology-requirements" aria-label="Permalink to &quot;Technology requirements&quot;">​</a></h2><h3 id="image-minimum" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px] leading-normal">Image minimum <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#image-minimum" aria-label="Permalink to &quot;Image minimum&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">We want the website to provide the minimum of good presentation of a serious organization - at least at the stage we are at now. Up until now, like the proverbial shoemaker who &quot;walks without shoes&quot;, we did not have our own website. So we are moving from &quot;zero&quot; to a fairly well-designed website in terms of the visual aspect. Therefore, in this first stage we do not have high requirements when it comes to the content we present on it. While we will gradually expand our website, today we want to provide a kind of minimum.</p><h3 id="flexibility-of-expansion" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px] leading-normal">Flexibility of expansion <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#flexibility-of-expansion" aria-label="Permalink to &quot;Flexibility of expansion&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">We want to expand the site very much in the next stages of work, but we do not yet know exactly in which direction the expansion will be directed - the input will be partially the feedback that we collect using Google Analytics and Hotjar. We want to be able to evolve the site in the direction indicated by the next iterations.</p><h3 id="content-change-by-non-technical-people" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px] leading-normal">Content change by non-technical people <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#content-change-by-non-technical-people" aria-label="Permalink to &quot;Content change by non-technical people&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">A large part of our service will be blog articles, case study presentations and job offers. We want to be able to add and edit this type of content by a non-technical person and be completely independent in doing so (self-service). This includes:</p><ul class="mt-[18px] list-disc flex flex-col justify-start gap-[12px] paragraph_spacing"><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Changing copy and descriptions, e.g. list of services or our distinguishing features,</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Changing images and icons,</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Adding a blog article or case study,</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Translations into another language,</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Adding a job offer or editing it.</li></ul><h3 id="efficient-programmer-implementation-bus-factor" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px] leading-normal">Efficient programmer implementation (bus factor) <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#efficient-programmer-implementation-bus-factor" aria-label="Permalink to &quot;Efficient programmer implementation (bus factor)&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Sometimes, introducing a change to the website requires the intervention of a programmer. We want to ensure that the implementation of a new person to the project is possible easily and quickly. The technology and architecture of the system should be relatively simple, so that a new front-end developer will be able to quickly understand it and start working. In an ideal case, work on the website can be entrusted to a programmer with experience at the &quot;junior&quot; level.</p><h3 id="speed-of-action-performance" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px] leading-normal">Speed of action (performance) <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#speed-of-action-performance" aria-label="Permalink to &quot;Speed of action (performance)&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Building a website is a balance between many variables that contribute to the usability of the website: Content and its arrangement on the website (information architecture) - the user can easily find the information they need, and is also directed to the places we want to direct them to, Speed of operation - if the website is slow, the user will abandon it, SEO and internet marketing requirements, Self-service by a non-technical person in maintaining the website.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">The question then arises as to which elements to invest in, and to what extent.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">In addition, building web applications is a fundamental part of our services, and our website is also our most important business card. A person viewing a website, especially a potential client, may much more often want to check popular metrics, such as PageSpeed ​​Insights from Google. For this reason, it is an important item when choosing technology. We want to be able to boast good results in this area to confirm front-end competences.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Therefore, the speed of the page (performance) is a very important criterion in our case. Even if not in the first iteration, in the next ones we will optimize the page to achieve high results in terms of metrics.</p><h3 id="maintenance" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px] leading-normal">Maintenance <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#maintenance" aria-label="Permalink to &quot;Maintenance&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Many technologies that were once “modern” have now been relegated to the so-called “commodities” zone. The best example is e-mail – probably no one today thinks about installing their own e-mail server and maintaining it themselves. Such a service is available for free or for a few zlotys per month per user, and the number of potential suppliers is probably counted in the thousands.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Website hosting is also becoming a ubiquitous commodity service. There are many solutions that allow you to reduce the time (and money) needed to maintain a server to practically zero. Examples include ready-made Wordpress applications with hosting or self-construction services for so-called landing pages. That is why we want to make maintaining a website the lowest possible effort in terms of technical maintenance.</p><h3 id="seo-and-internet-marketing" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px] leading-normal">SEO and Internet Marketing <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#seo-and-internet-marketing" aria-label="Permalink to &quot;SEO and Internet Marketing&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">The site should meet our requirements in terms of broadly understood internet marketing. On the one hand, this applies to various SEO requirements, and on the other, for example, on metatags, informing about the thumbnail when sharing content in social media.</p><h2 id="choice-vitepress-vue-js-github-pages-and-tailwind" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px] leading-normal">Choice: VitePress (+Vue.js), GitHub Pages and Tailwind <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#choice-vitepress-vue-js-github-pages-and-tailwind" aria-label="Permalink to &quot;Choice: VitePress (+Vue.js), GitHub Pages and Tailwind&quot;">​</a></h2><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">With this configuration we were able to meet all our requirements and also achieve some additional benefits!</p><h3 id="vitepress-vue-js" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px] leading-normal">VitePress (+Vue.js) <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#vitepress-vue-js" aria-label="Permalink to &quot;VitePress (+Vue.js)&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing"><a href="https://vitepress.dev" class="text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" target="_blank" rel="noreferrer">VitePress</a> is the so-called Static Site Generator (SSG). In this approach, all subpages of the service are generated when the content changes, and only static HTML/CSS/JS files are placed on the server. Thanks to this, you can use easy static hosting, e.g. in AWS S3, Vercel, Netlify or GitHub Pages.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">While VitePress specializes in open source library documentation, it is very easy to configure it to implement your own layout. This gives us full flexibility in implementing our own graphic design (UX and UI). Our use of VitePress is 100% focused on providing SSG functionality - generating HTML pages based on Markdown files.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">This is a very easy solution to learn and develop when it comes to implementing a new programmer. A few nuances and details, i.e. the above VitePress configuration, are not necessary for everyday work on the site.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">VitePress itself is a solution based on the Vue.js framework, which is our default frontend technology, and it is Vue.js that is used to build all the components of the site.</p><h3 id="github-pages" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px] leading-normal">GitHub Pages <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#github-pages" aria-label="Permalink to &quot;GitHub Pages&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">The site is hosted as static files on GitHub Pages. This solution has 2 main advantages.</p><h4 id="security" tabindex="-1" class="text-color1 font-semibold text-[16px] md:text-[18px] leading-normal">Security <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#security" aria-label="Permalink to &quot;Security&quot;">​</a></h4><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing"><strong>Security</strong> - [FIXME usunąć tytuły 4-go stopnia] the number of potential hacker attacks is close to zero and all of them are handled by GitHub and its GitHub Pages solution - compared to a typical Wordpress installation, where new holes (vulnerabilities) are detected almost daily, which practically means the need for frequent Wordpress updates.</p><h4 id="working-time-and-maintenance" tabindex="-1" class="text-color1 font-semibold text-[16px] md:text-[18px] leading-normal">Working time and maintenance <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#working-time-and-maintenance" aria-label="Permalink to &quot;Working time and maintenance&quot;">​</a></h4><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing"><strong>Working time and maintenance</strong> - is also completely moved to GitHub Pages, including when it comes to such nuances as CDN or the issue of SSL certificates (the so-called green padlock).</p><h2 id="daily-work-on-the-site" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px] leading-normal">Daily work on the site <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#daily-work-on-the-site" aria-label="Permalink to &quot;Daily work on the site&quot;">​</a></h2><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Ongoing work on the site and its expansion is carried out in two ways.</p><h3 id="regular-vue-js-components" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px] leading-normal">Regular Vue.js components <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#regular-vue-js-components" aria-label="Permalink to &quot;Regular Vue.js components&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">The basic layout of the page, the entire appearance (UI) and content layout (UX), all components (e.g. tiles with a list of services) below, landing-page elements and the entire layout are written simply in Vue.js components. Implementing a programmer who knows Vue.js is very efficient - if not trivial, because it takes less than an hour.</p><h3 id="content-editing-by-a-non-technical-person" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px] leading-normal">Content editing by a non-technical person <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#content-editing-by-a-non-technical-person" aria-label="Permalink to &quot;Content editing by a non-technical person&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Job ads and blog posts are posted in regular markdown. This is a very popular format for writing articles that is widely used by most of us - in its basic form it is present in instant messaging applications such as Slack.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">The files are edited directly in GitHub by a non-technical person. In addition, such a person can edit the content of the above components without any problem - e.g. modify the list of services on the main page.</p><h2 id="additional-benefits" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px] leading-normal">Additional benefits <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#additional-benefits" aria-label="Permalink to &quot;Additional benefits&quot;">​</a></h2><h3 id="monthly-cost-of-maintaining-the-website" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px] leading-normal">Monthly cost of maintaining the website <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#monthly-cost-of-maintaining-the-website" aria-label="Permalink to &quot;Monthly cost of maintaining the website&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">In our case, it is currently 0 PLN (zero). This is because: GitHub Pages is a completely free service, even when it comes to your own domain and SSL certificate (green padlock), We handle recruitment and contact forms via Google Forms and Google Spreadsheet.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">It&#39;s a sort of cherry on top for those eager to throw a stone at a bit of cheesy behavior! 😉 However, this is not something we consciously wanted to achieve, but merely an accidental by-product resulting from the criteria listed at the beginning of the article.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">In the next iterations, we plan to migrate the site from GitHub Pages and host it on AWS S3 and Fastly, which will introduce a fixed monthly cost - but still low if not symbolic.</p><h3 id="high-performance-from-day-one" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px] leading-normal">High performance from day one <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#high-performance-from-day-one" aria-label="Permalink to &quot;High performance from day one&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Our frontend developer hasn&#39;t even reached the &quot;Performance optimization&quot; task yet, and we can already boast the following <a href="https://pagespeed.web.dev/analysis/https-p3doweks-com/uutlz1mmex?form_factor=mobile" class="text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" target="_blank" rel="noreferrer">results in Google PageSpeed</a>.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing"><img src="'+e+'" alt="Desktop performance before optimization"><img src="'+t+'" alt="Performance on mobile before optimization"></p><h2 id="summary" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px] leading-normal">Summary <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Below is a tabular summary of our goals and their achievement.</p><div class="mt-[18px] overflow-x-auto flex flex-col w-full h-full shadow-md rounded-lg custom-scroll paragraph_spacing"><table class="w-full text-left table-auto min-w-[450px] border-collapse"><thead><tr><th class="bg-[#F2F2F2] text-color1 text-[14px] md:text-[16px] font-medium leading-[1.12] text-left border border-[#ddd] px-[8px] md:px-[24px] py-[12px]">Target</th><th class="bg-[#F2F2F2] text-color1 text-[14px] md:text-[16px] font-medium leading-[1.12] text-left border border-[#ddd] px-[8px] md:px-[24px] py-[12px]">Implementation</th></tr></thead><tbody><tr><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Image minimum</td><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Yes</td></tr><tr><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Flexibility of expansion</td><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Yes, full flexibility via Vue.js components</td></tr><tr><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Edycja treści przez osobę nietechniczną</td><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Content editing by a non-technical person</td></tr><tr><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Efficient programmer onboarding</td><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Yes, less than 1 hour</td></tr><tr><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Speed of action (performance)</td><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Google PageSpeed 90-100 results - and that&#39;s before optimization</td></tr><tr><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Maintenance</td><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">0 PLN per month, 0 working hours</td></tr><tr><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">SEO and Internet Marketing</td><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Yes, full capabilities with VitePress</td></tr></tbody></table></div><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Meanwhile, we&#39;re working on the next iteration!</p>',54),l=[s];function d(p,x,m,c,h,g){return n(),o("div",null,l)}const y=a(r,[["render",d]]);export{b as __pageData,y as default};
