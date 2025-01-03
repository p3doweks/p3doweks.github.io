import{_ as t,b as a,C as o,o as n}from"./chunks/framework.DgNujXvl.js";const c=JSON.parse('{"title":"How we work","description":"","frontmatter":{"layout":"p3d-article","title":"How we work","language":"EN"},"headers":[],"relativePath":"career/how-we-work.md","filePath":"career/how-we-work.md"}'),r={name:"career/how-we-work.md"};function l(i,e,s,d,m,x){return n(),a("div",null,e[0]||(e[0]=[o('<div class="markdown_body"></div><h2 id="test-driven-development" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px] leading-normal">Test-Driven Development <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#test-driven-development" aria-label="Permalink to &quot;Test-Driven Development&quot;">​</a></h2><ul class="mt-[18px] list-disc flex flex-col justify-start gap-[12px] paragraph_spacing"><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">We work in Test-Driven Development, so we use the well-known Red Green Refactor framework. When creating code, a programmer actually first starts working by writing a failing test. Then he implements the functionality that this test “greens”. At the very end, refactoring takes place.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">When writing tests, in the vast majority of cases we use the classic approach to testing (the so-called Detroit school). As for the mock approach (London school), we use it very rarely, where this approach actually makes sense.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">We write tests in a standard one line for each of the parts &quot;arrange&quot;, &quot;act&quot; and &quot;assert&quot;. This of course also requires refactoring of tests.</li></ul><h2 id="trunk-based-development" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px] leading-normal">Trunk-Based Development <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#trunk-based-development" aria-label="Permalink to &quot;Trunk-Based Development&quot;">​</a></h2><ul class="mt-[18px] list-disc flex flex-col justify-start gap-[12px] paragraph_spacing"><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">We do not work on branches. We use the <a href="https://trunkbaseddevelopment.com" class="text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" target="_blank" rel="noreferrer">Trunk-Based Development</a> approach. We put all our commits on master and usually each commit ends with a deployment to production.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Every programmer working in a team is able to perform about 50-100 deployments to production in this way within a month.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Other names describing the same approach are Continuous Integration, Continuous Deployment, Continuous Delivery. However, it is misleading because they are most often used in relation to CI/CD tools, which can be used despite the fact that you use a flow branch in your own.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">The work is smooth and stress-free, because there are no merge conflicts, and even if they do occur, they take seconds to resolve. The day ends with a calm head ready for other activities.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">It is completely normal and safe to perform deployments on Fridays, and it is even a desirable situation.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Our founder, Konrad Otrębski, talked about this approach, among others. at the largest Polish PHP conference <a href="https://www.youtube.com/watch?v=enfBJqz1LtA" class="text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" target="_blank" rel="noreferrer">PHP Summit in 2019 (watch)</a>.</li></ul><h2 id="workflow" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px] leading-normal">Workflow <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#workflow" aria-label="Permalink to &quot;Workflow&quot;">​</a></h2><ul class="mt-[18px] list-disc flex flex-col justify-start gap-[12px] paragraph_spacing"><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">We work on very small iterations. We divide large stories into many small ones. We do not use the Scrum framework, because for teams like ours it is insufficient and slows down, combined with working without branches and very frequent code deployment to production.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">In practice, we use simple Kanban boards and aggressively limit Work In Progress. Our programmers have only one story &quot;open&quot; at a time.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Simple Kanban Board with 3x columns TODO, IN PROGRESS, DONE</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">We perform code review &quot;live&quot;, e.g. during a video call we present the screen and comment on the code. Thanks to this practice we save time and avoid long discussions on GitHub or Slack. Moreover, due to the WIP limit principle, code review has absolute priority over new tasks.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Within 1-2 hours of finishing the story, your code is in production, you have a code review done, the story is accepted, and you start the next task.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">We do not employ testers/QA. We write automated tests (called e.g. end-2-end/UI/acceptance) in tools such as Selenium or PlayWright.</li></ul><h2 id="code-quality-and-skills" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px] leading-normal">Code quality and skills <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#code-quality-and-skills" aria-label="Permalink to &quot;Code quality and skills&quot;">​</a></h2><ul class="mt-[18px] list-disc flex flex-col justify-start gap-[12px] paragraph_spacing"><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">We are looking for people who can use advanced code creation practices in their work or are willing and open to learn them.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">A large part of them is necessary to successfully achieve the above-mentioned high-spending flow of 50-100 deployments to production per month - where of course</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">We can convince our clients to invest in technical debt. Efficient monitoring, deployment scripts, CD/CD pipeline, starting work with writing a test are our foundation and everyday life.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Specific practices that we use include Domain-Driven Design, Infrastructure as Code, Test-Driven Development, Trunk-Based Development and feature toggles, Refactoring, SOLID, KISS, YAGNI, DRY, Theory of Constraints, Clean Code, Extreme Programming, Fail Fast, as well as broadly understood automation.</li></ul><h2 id="fail-fast" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px] leading-normal">Fail Fast <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#fail-fast" aria-label="Permalink to &quot;Fail Fast&quot;">​</a></h2><ul class="mt-[18px] list-disc flex flex-col justify-start gap-[12px] paragraph_spacing"><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">We also practice the principle <a href="https://www.martinfowler.com/ieeeSoftware/failFast.pdf" class="text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" target="_blank" rel="noreferrer">Fail Fast</a> i.e. frequent and aggressive use of exceptions and assertions stopping the execution of the process. Thanks to this, our code has a negligible number of bugs.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Our founder Konrad Otrębski presented Fail Fast at several meetups and conferences. Watch the recording from <a href="https://www.youtube.com/watch?v=taiCYrNPbO0&amp;t=4165s" class="text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" target="_blank" rel="noreferrer">PHP Gdańsk here</a>.</li></ul><h2 id="agile" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px] leading-normal">Agile <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#agile" aria-label="Permalink to &quot;Agile&quot;">​</a></h2><ul class="mt-[18px] list-disc flex flex-col justify-start gap-[12px] paragraph_spacing"><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Using the above tools and practices on a daily basis means that we can consider ourselves an organization that delivers its work in the spirit of such ideas as Agile, DevOps or Continuous Delivery. We try to shorten the so-called feedback loop and minimize the cycle time of the projects we work on.</li></ul>',13)]))}const h=t(r,[["render",l]]);export{c as __pageData,h as default};
