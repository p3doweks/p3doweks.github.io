import{_ as e}from"./chunks/YouTube.499e9ef0.js";import{o,c as i,b as t,e as a}from"./chunks/framework.d651d42f.js";const n=a('<div class="markdown_body"></div><h2 id="test-driven-development" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px] leading-normal">Test-Driven Development <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#test-driven-development" aria-label="Permalink to &quot;Test-Driven Development&quot;">​</a></h2><ul class="mt-[18px] list-disc flex flex-col justify-start gap-[12px] paragraph_spacing"><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Pracujemy w Test-Driven Development, stosujemy więc znany framework Red Green Refactor. Programista tworząc kod rzeczywiście najpierw zaczyna pracę od napisania failującego testu. Następnie implementuje funkcjonalność, którą ten test “zazielenia”. Na samym końcu ma miejsce refactoring.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Pisząc testy, w przeważającej większości przypadków stosujemy klasyczne podejście do testów (Tzw. szkoła Detroit). Jeśli chodzi o podejście mockistyczne (szkoła Londyńska) to stosujemy je bardzo rzadko, tam gdzie to podejście ma faktycznie sens.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Testy piszemy w standardzie jednej linijki na każdą z części <code class="text-gray1 text-[85%] bg-gray4 px-[0.4em] py-[0.2em] rounded-[6px]">arrange</code>, <code class="text-gray1 text-[85%] bg-gray4 px-[0.4em] py-[0.2em] rounded-[6px]">act</code> oraz <code class="text-gray1 text-[85%] bg-gray4 px-[0.4em] py-[0.2em] rounded-[6px]">assert</code>. Wymaga to oczywiście również rafactoringu testów.</li></ul><h2 id="trunk-based-development" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px] leading-normal">Trunk-Based Development <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#trunk-based-development" aria-label="Permalink to &quot;Trunk-Based Development&quot;">​</a></h2><ul class="mt-[18px] list-disc flex flex-col justify-start gap-[12px] paragraph_spacing"><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Nie pracujemy na branchach. Stosujemy podejście <a href="https://trunkbaseddevelopment.com" class="text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" target="_blank" rel="noreferrer">Trunk-Based Development</a>. Wszystkie nasze commity wrzucamy na master i z reguły każdy commit kończy się deploymentem na produkcję.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Każdy programista pracujący w zespole jest w stanie w ten sposób wykonać w ciągu miesiąca ok. 50-100 deploymentów na produkcję.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Inne nazwy opisujące to samo podejście to Continuous Integration, Continuous Deployment, Continuous Delivery. Jest ono jednak mylące ponieważ najczęściej używa się ich w stosunku do narzędzi CI/CD, których można używać mimo, że stosuje się w swoim flow branche.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Praca przebiega płynnie i bezstresowo, ponieważ nie występują merge conflikty, a jeśli nawet występują to ich rozwiązanie zajmuje sekundy. Dzień kończy się z spokojną głową gotową na inne aktywności.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Całkowicie normalną i bezpieczną sytuacją jest wykonywanie deploymentów w piątki, a nawet jest to sytuacja pożądana.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">O tym podejściu nasz founder, Konrad Otrębski, opowiadał m.in. na największej polskiej konferencji PHP <a href="https://www.youtube.com/watch?v=enfBJqz1LtA" class="text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" target="_blank" rel="noreferrer">PHPers Summit w 2019 roku (zobacz)</a>.</li></ul>',5),r=a('<h2 id="jakosc-kodu-i-umiejetnosci" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px] leading-normal">Jakość kodu i umiejętności <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#jakosc-kodu-i-umiejetnosci" aria-label="Permalink to &quot;Jakość kodu i umiejętności&quot;">​</a></h2><ul class="mt-[18px] list-disc flex flex-col justify-start gap-[12px] paragraph_spacing"><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Poszukujemy osób, które w swojej pracy potrafią wykorzystać zaawansowane praktyki tworzenia kodu lub są chętne i otwarte aby się ich nauczyć.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Duża część z nich jest niezbędna aby z sukcesem osiągać wyżej wspomniane wysoko wydaje flow 50-100 deploymentów na produkcję w miesiącu.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Potrafimy przekonać naszych klientów w inwestycje w dług techniczny. Sprawny monitoring, skrypty deploymentowe, CD/CD pipeline, rozpoczynanie pracy od napisania testu są u nas podstawą i codziennością.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Konkretne praktyki, jakie stosujemy to m.in. Domain-Driven Design, Infrastructure as Code, Test-Driven Development, Trunk-Based Development oraz feature toggles, Refactoring, SOLID, KISS, YAGNI, DRY, Theory of Constraints, Clean Code, Extreme Programming, Fail Fast, a także szeroko pojętą automatyzację.</li></ul><h2 id="fail-fast" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px] leading-normal">Fail Fast <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#fail-fast" aria-label="Permalink to &quot;Fail Fast&quot;">​</a></h2><ul class="mt-[18px] list-disc flex flex-col justify-start gap-[12px] paragraph_spacing"><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Praktykujemy również zasadę <a href="https://www.martinfowler.com/ieeeSoftware/failFast.pdf" class="text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" target="_blank" rel="noreferrer">Fail Fast</a> tzn. częste i agresywne stosowanie exceptionów i assercji stopujących execution procesu. Dzięki temu nasz kod posiada znikomą liczbę bugów.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Nasz founder Konrad Otrębski prezentował Fail Fast podczas kilku meetupów i konferencji. Zobacz nagranie z <a href="https://www.youtube.com/watch?v=taiCYrNPbO0&amp;t=4165s" class="text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" target="_blank" rel="noreferrer">PHPers Gdańsk tutaj</a>.</li></ul>',4),l=a('<h2 id="workflow" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px] leading-normal">Workflow <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#workflow" aria-label="Permalink to &quot;Workflow&quot;">​</a></h2><ul class="mt-[18px] list-disc flex flex-col justify-start gap-[12px] paragraph_spacing"><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Pracujemy na bardzo małych iteracjach. Dzielimy duże stories na wiele małych. Nie korzystamy z frameworku Scrum, ponieważ dla takich zespołów jak nasze Scrum jest niewystarczający. Scrum spowalnia pracę w środowisku gdzie pracuje się bez branchy i bardzo często deploy&#39;uje kod na produkcję.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">W praktyce stosujemy proste Kanban boardy i agresywnie limitujemy przy tym Work-In-Progress. Nasi programiści w danej chwili mają “otwarte” tylko i wyłącznie jedno story.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Prosty Kanban Board z 3x kolumnami: TO DO, IN PROGRESS, DONE</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Code review wykonujemy “na żywo” np. Podczas połączenia video prezentujemy ekran i komentujemy kod. Dzięki takiej praktyce oszczędzamy czas i unikamy długim dyskusji na GitHub lub Slack. Ponadto, w związku z zasadą limitowania WIP, code review ma absolutny priorytet nad nowymi zadaniami.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">W ciągu 1-2h od skończenia story Twój kod jest na produkcji, masz zrobione code review, story jest zaakceptowane przez &quot;biznes&quot;, a Ty zabierasz się za kolejne zadanie.</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Nie zatrudniamy testerów/QA. Piszemy również testy angażujące UI (aka e2e, acceptance) w PlayWright (narzędzie podobne do Selenium).</li></ul><h2 id="agile" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px] leading-normal">Agile <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#agile" aria-label="Permalink to &quot;Agile&quot;">​</a></h2><ul class="mt-[18px] list-disc flex flex-col justify-start gap-[12px] paragraph_spacing"><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Stosowanie powyższych narzędzi i praktyk na co dzień, sprawia, że możemy uważać się za organizację, która swoją pracę dostarcza w duchu takich idei jak Agile, DevOps czy Continuous Delivery. Staramy się skracać tzw. feedback loop oraz minimalizować cycle time projektów, przy których pracujemy.</li></ul>',4),u=JSON.parse('{"title":"Jak pracujemy","description":"","frontmatter":{"layout":"p3d-article","title":"Jak pracujemy","language":"PL","langVersions":{"en":"/career/how-we-work"}},"headers":[],"relativePath":"kariera/jak-pracujemy.md","filePath":"kariera/jak-pracujemy.md"}'),s={name:"kariera/jak-pracujemy.md"},y=Object.assign(s,{setup(d){return(m,c)=>(o(),i("div",null,[n,t(e,{iframeUrl:"https://www.youtube.com/embed/enfBJqz1LtA"}),r,t(e,{iframeUrl:"https://www.youtube.com/embed/taiCYrNPbO0?si=YRHkggI4JeHdcG6s&start=4165"}),l,t(e,{iframeUrl:"https://www.youtube.com/embed/YN45sJOzCA4?si=Rcov3N1Yfq0v0MgF"})]))}});export{u as __pageData,y as default};
