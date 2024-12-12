import{_ as e,a as t}from"./chunks/mobile.1165e70f.js";import{_ as a,o,c as n,e as i}from"./chunks/framework.3ae73e29.js";const u=JSON.parse('{"title":"Strona internetowa P3 Doweks w Vitepress i Vue.js","description":"Wdrożyliśmy pierwszą wersję naszej strony internetowej opartą o Vitepress i Vue.js z edycją treści przez osobę nietechniczną w Markdown.","frontmatter":{"layout":"p3d-blog","subTitle":"Opublikowany","title":"Strona internetowa P3 Doweks w Vitepress i Vue.js","description":"Wdrożyliśmy pierwszą wersję naszej strony internetowej opartą o Vitepress i Vue.js z edycją treści przez osobę nietechniczną w Markdown.","author":{"name":"Konrad Otrębski","position":"Tech Lead"},"readTime":"15 minut","publicDate":"2023-12-01","imageFolder":"/blog/strona-internetowa-vitepress-vue-js","bannerImageName":"Zdjęcie widoku strony www","language":"PL"},"headers":[],"relativePath":"blog/strona-internetowa-vitepress-vue-js.md","filePath":"blog/strona-internetowa-vitepress-vue-js.md"}'),r={name:"blog/strona-internetowa-vitepress-vue-js.md"},s=i('<div class="markdown_body"></div><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Zespół P3 Doweks wdrożył pierwszą wersję naszej strony internetowej. Podstawowym wyborem, jeśli chodzi o sprawy techniczne, był wybór użytych technologii. Poza standardowymi oczekiwaniami, które przedsiębiorstwa posiadają w stosunku do strony www, naszym wymaganiem było aby była ona łatwa (tania) w utrzymaniu. Chcielibyśmy nie poświęcać uwagi na rzeczy, na które nie musimy.</p><h2 id="wymagania-odnosnie-technologii" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px]">Wymagania odnośnie technologii <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#wymagania-odnosnie-technologii" aria-label="Permalink to &quot;Wymagania odnośnie technologii&quot;">​</a></h2><h3 id="wizerunkowe-minimum" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px]">Wizerunkowe minimum <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#wizerunkowe-minimum" aria-label="Permalink to &quot;Wizerunkowe minimum&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Chcemy aby strona dostarczyła minimum dobrej prezencji poważnej organizacji - przynajmniej na tym etapie, na którym jesteśmy teraz. Dotychczas, niczym przysłowiowy szewc, który “bez butów chodzi”, nie posiadaliśmy swojej strony www. Przechodzimy więc z poziomu “zera” do dość dobrze zaprojektowanego serwisu jeśli chodzi o aspekt wizualny. Dlatego w tym pierwszym etapie nie mamy dużych wymagań jeśli chodzi o treści, które na niej prezentujemy. O ile będziemy naszą stronę stopniowo rozbudowywać to dziś chcemy dostarczyć swego rodzaju minimum.</p><h3 id="elastycznosc-rozbudowy" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px]">Elastyczność rozbudowy <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#elastycznosc-rozbudowy" aria-label="Permalink to &quot;Elastyczność rozbudowy&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Stronę chcemy bardzo mocno rozbudowywać w kolejnych etapach prac, jednak sami jeszcze nie wiemy, w którą dokładnie stronę będzie skierowana rozbudowa - częściowo wkładem będzie feedback, który zbieramy za pomocą Google Analytics oraz Hotjar. Zależy nam abyśmy mogli stronę ewoluować w kierunku, który wskażą kolejne iteracje.</p><h3 id="zmiana-tresci-przez-osoby-nietechniczne" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px]">Zmiana treści przez osoby nietechniczne <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#zmiana-tresci-przez-osoby-nietechniczne" aria-label="Permalink to &quot;Zmiana treści przez osoby nietechniczne&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Dużą część naszego serwisu będa stanowić artykuły na blogu, prezentacje case studies czy oferty pracy. Chcemy mieć możliwość aby tego typu treści mogła dodawać i edytować osoba nietechniczna i aby była w tym w pełni samodzielna (self-service). Chodzi m.in. o:</p><ul class="list-disc flex flex-col justify-start gap-[12px] paragraph_spacing mt-[18px]"><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Zmianę copy i opisów np. lista usług czy naszych wyróżników,</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Zmiany obrazków i ikon,</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Dodanie artykułu na blogu czy case study,</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Tłumaczenia na inny język,</li><li class="ml-[25px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[1.5]">Dodanie oferty pracy lub jej edycja.</li></ul><h3 id="sprawne-wdrozenie-programisty-tzw-bus-factor" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px]">Sprawne wdrożenie programisty (tzw. bus factor) <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#sprawne-wdrozenie-programisty-tzw-bus-factor" aria-label="Permalink to &quot;Sprawne wdrożenie programisty (tzw. bus factor)&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Czasami wprowadzenie zmiany w stronie wymaga ingerencji programisty. Zależy nam aby wdrożenie nowej osoby do projektu było możliwe łatwe i szybkie. Technologia i architektura systemu powinna być stosunkowo prosta, dzięki czemu nowy front-end developer będzie w stanie szybko ją zrozumieć i rozpocząć pracę. W idealnym przypadku prace nad stroną mogą być powierzone programiście z doświadczeniem na poziomie “junior”.</p><h3 id="szybkosc-działania-performance" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px]">Szybkość działania (performance) <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#szybkosc-działania-performance" aria-label="Permalink to &quot;Szybkość działania (performance)&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Budowa strony internetowej to balans pomiędzy wieloma zmiennymi, które sumują się na użyteczność strony: Treści i ich ułożenie na stronie (architektura informacji) - użytkownik może łatwo znaleźć potrzebną informację, a także jest kierowany w miejsca, w które my chcemy go kierować, Szybkość działania - jeśli strona będzie wolna to użytkownik ją porzuci, Wymagania odnośnie SEO i marketingu internetowego, Samodzielność (self-service) przez osobę nie techniczną w utrzymaniu strony.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Powstaje więc pytanie, w które elementy inwestować, a także w jakim stopniu.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Dodatkowo budowa aplikacji webowych to podstawowa część naszych usług, a nasza strona to jednocześnie nasza najważniejsza wizytówka. O wiele częściej może pojawić się u oglądającego stronę, w szczególności potencjalnego klienta, chęć sprawdzenia popularnych metryk np. PageSpeed Insights od Google. Z tego powodu jest to ważna pozycja przy wyborze technologii. Chcemy móc pochwalić się dobrymi wynikami w tym zakresie aby potwierdzić kompetencje frontendowe.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Dlatego szybkość działania strony (performance) to w naszym przypadku bardzo ważne kryterium. Nawet jeśli nie w pierwszej iteracji, to w kolejnych będziemy stronę optymalizować aby osiągnąć wysokie wyniki jeśli chodzi o metryki.</p><h3 id="utrzymanie-maintenance" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px]">Utrzymanie (maintenance) <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#utrzymanie-maintenance" aria-label="Permalink to &quot;Utrzymanie (maintenance)&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Wiele technologii, które kiedyś były “nowoczesnymi”, dziś zostały przesunięte do strefy tzw. “commodities”. Najlepszym przykładem jest poczta internetowa - chyba nikt nie myśli dzisiaj o instalowaniu własnego serwera email i samodzielnym jego utrzymaniu. Taka usługa dostępna jest za darmo lub za kilka złotych miesięcznie za użytkownika, a liczba potencjalnych dostawców jest prawdopodobnie liczona w tysiącach.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Hosting strony internetowej również staje się wszechobecną usługą typu commodity. Istnieje wiele rozwiązań, które pozwalają zmniejszyć praktycznie do zera czas (i pieniądze) potrzebne na utrzymanie serwera. Przykładami mogą być gotowe aplikacje Wordpress wraz z hostingiem czy usługi samodzielnej budowy tzw. landing pages. Dlatego chcemy aby utrzymanie strony stanowiło dla nas możliwe najniższy wysiłek jeśli chodzi o utrzymanie techniczne.</p><h3 id="seo-i-marketing-internetowy" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px]">SEO i marketing internetowy <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#seo-i-marketing-internetowy" aria-label="Permalink to &quot;SEO i marketing internetowy&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Strona powinna spełniać nasze wymagania jeśli chodzi o szeroko pojęty marketing internetowy. Z jednej strony dotyczy to różnego rodzaju wymagań SEO, a z drugiej np. na metatagach, informujących o miniaturce przy sharowaniu treści w social mediach.</p><h2 id="wybor-vitepress-vue-js-github-pages-oraz-tailwind" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px]">Wybór: VitePress (+Vue.js), GitHub Pages oraz Tailwind <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#wybor-vitepress-vue-js-github-pages-oraz-tailwind" aria-label="Permalink to &quot;Wybór: VitePress (+Vue.js), GitHub Pages oraz Tailwind&quot;">​</a></h2><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">W tej konfiguracji udało nam się zrealizować wszystkie nasze wymagania, a także osiągnąć kilka dodatkowych korzyści!</p><h3 id="vitepress-vue-js" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px]">VitePress (+Vue.js) <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#vitepress-vue-js" aria-label="Permalink to &quot;VitePress (+Vue.js)&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing"><a href="https://vitepress.dev" class="text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" target="_blank" rel="noreferrer">VitePress</a> to tzw. Static Site Generator (SSG). W tym podejściu wszystkie podstrony serwisu są generowane w chwili zmiany treści, a na serwerze umieszczane są tylko i wyłącznie statyczne pliki HTML/CSS/JS. Dzięki temu można skorzystać z łatwego statycznego hostingu np. w AWS S3, Vercel, Netlify czy w GitHub Pages.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">O ile VitePress specjalizuje się w dokumentacjach bibliotek open source, to bardzo łatwo można go skonfigurować w taki sposób aby zaimplementować swój własny layout. Dzięki temu mamy pełną elastyczność w implementacji własnej szaty graficznej (UX i UI). Nasze wykorzystanie VitePress skupia się w 100% na dostarczeniu funkcjonalności SSG - generowania stron HTML na podstawie plików Markdown.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Jest to rozwiązanie bardzo proste do przyswojenia i rozwoju jeśli chodzi o wdrożenie nowego programisty. Kilka niuansów i detali, tj. w/w konfiguracja VitePress, nie są potrzebne do codziennej pracy nad stroną.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Sam VitePress jest rozwiązaniem opartym o framework Vue.js, który jest naszą domyślną technologią frontendową, i to właśnie Vue.js jest używany do budowy wszystkich komponentów strony.</p><h3 id="github-pages" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px]">GitHub Pages <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#github-pages" aria-label="Permalink to &quot;GitHub Pages&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Strona jest utrzymywana jako pliki statyczne na GitHub Pages. Takie rozwiązanie posiada 2 podstawowe zalety.</p><h4 id="bezpieczenstwo" tabindex="-1" class="text-color1 font-semibold text-[16px] md:text-[18px]">Bezpieczeństwo <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#bezpieczenstwo" aria-label="Permalink to &quot;Bezpieczeństwo&quot;">​</a></h4><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing"><strong>Bezpieczeństwo</strong> - [FIXME usunąć tytuły 4-go stopnia] liczba potencjalnych ataków hackerskich jest bliska zero i wszystkie są obsługiwane przez GitHub i jego rozwiązanie GitHub Pages - w porównaniu do typowej instalacji Wordpress, gdzie kolejne dziury (podatności) wykrywane są niemal codziennie, i co praktycznie oznacza potrzebę częstych aktualizacji Wordpressa.</p><h4 id="czas-pracy-i-maintenance" tabindex="-1" class="text-color1 font-semibold text-[16px] md:text-[18px]">Czas pracy i maintenance <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#czas-pracy-i-maintenance" aria-label="Permalink to &quot;Czas pracy i maintenance&quot;">​</a></h4><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing"><strong>Czas pracy i maintenance</strong> - również absolutnie w całości jest przerzucony na GitHub Pages i to również jeśli chodzi o takie niuanse jak CDN czy kwestię certyfikatów SSL (tzw. zielona kłódka).</p><h2 id="codzienna-praca-nad-strona" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px]">Codzienna praca nad stroną <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#codzienna-praca-nad-strona" aria-label="Permalink to &quot;Codzienna praca nad stroną&quot;">​</a></h2><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Bieżąca praca nad stroną i jej rozbudowa jest prowadzona na dwa sposoby.</p><h3 id="zwykłe-komponenty-vue-js" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px]">Zwykłe komponenty Vue.js <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#zwykłe-komponenty-vue-js" aria-label="Permalink to &quot;Zwykłe komponenty Vue.js&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Podstawowy layout strony, cały wygląd (UI) i ułożenie treści (UX), wszelkie komponenty (np. Kafelki z listą usług) poniżej, elementy landing-pages i cały layout piszemy po prostu w komponentach Vue.js. Wdrożenie do pracy programisty znającego Vue.js jest bardzo sprawne - jeśli nie banalne, bo zajmuje mniej niż godzinę.</p><h3 id="edycja-tresci-przez-osobe-nietechniczna" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px]">Edycja treści przez osobę nietechniczną <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#edycja-tresci-przez-osobe-nietechniczna" aria-label="Permalink to &quot;Edycja treści przez osobę nietechniczną&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Ogłoszenia o pracę i blog posty wrzucamy w zwykłym markdown. Jest to bardzo popularny format pisania artykułów, który jest w powszechnym użyciu przez większość z nas - w podstawowej formie jest chociażby obecny w komunikatorach np. Slack.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Pliki są edytowane bezpośrednio w GitHubie przez osobę nie techniczną. Poza tym taka osoba bez żadnego problemu jest w stanie edytować treści do w/w komponentów - np. modyfikować listę usług na stronie głównej.</p><h2 id="dodatkowe-korzysci" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px]">Dodatkowe korzyści <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#dodatkowe-korzysci" aria-label="Permalink to &quot;Dodatkowe korzyści&quot;">​</a></h2><h3 id="miesieczny-koszt-utrzymania-strony" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px]">Miesięczny koszt utrzymania strony <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#miesieczny-koszt-utrzymania-strony" aria-label="Permalink to &quot;Miesięczny koszt utrzymania strony&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">W naszym wypadku póki co wynosi 0 zł (zero). Dzieje się tak ponieważ: GitHub Pages jest usługą kompletnie darmową, nawet jeśli chodzi o własną domenę oraz certyfikat SSL (zielona kłódka), Formularze rekrutacyjne i kontaktowe obsługujemy poprzez Google Forms oraz Google Spreadsheet.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Jest to pewnego rodzaju wisienka na torcie dla chcących rzucić kamieniem “januszostwo!” 😉 Nie jest to jednak coś co chcieliśmy świadomie osiągnąć, a jedynie przypadkowy produkt uboczny wynikający z kryteriów wymienionych na początku artykułu.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">W kolejnych iteracjach planujemy przenieść stronę z GitHub Pages i umieścić ją w AWS S3 oraz Fastly, a to wprowadzi stały miesięczny koszt - jednak wciąż niski jeśli nie symboliczny.</p><h3 id="wysoki-performance-od-pierwszego-dnia" tabindex="-1" class="text-color1 font-semibold text-[20px] md:text-[22px]">Wysoki performance od pierwszego dnia <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#wysoki-performance-od-pierwszego-dnia" aria-label="Permalink to &quot;Wysoki performance od pierwszego dnia&quot;">​</a></h3><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Nasz frontend developer nie dotarł jeszcze do zadania “Performance optimization”, a już możemy pochwalić się poniższymi <a href="https://pagespeed.web.dev/analysis/https-p3doweks-com/uutlz1mmex?form_factor=mobile" class="text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" target="_blank" rel="noreferrer">wynikami w Google PageSpeed</a>.</p><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing"><img src="'+e+'" alt="Performance na desktop przed optymalizacją"><img src="'+t+'" alt="Performance na mobile przed optymalizacją"></p><h2 id="podsumowanie" tabindex="-1" class="mb-[28px] text-color1 font-semibold text-[24px] md:text-[28px]">Podsumowanie <a class="header-anchor text-red1 text-[16px] md:text-[18px] font-medium leading-normal underline hover:text-red2 transition-colors" href="#podsumowanie" aria-label="Permalink to &quot;Podsumowanie&quot;">​</a></h2><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Poniżej tabelaryczne podsumowanie naszych celów i ich realizacja.</p><div class="overflow-x-auto flex flex-col w-full h-full shadow-md rounded-lg custom-scroll mt-[18px] paragraph_spacing"><table class="w-full text-left table-auto min-w-[450px] border-collapse"><thead><tr><th class="bg-[#F2F2F2] text-color1 text-[14px] md:text-[16px] font-medium leading-[1.12] text-left border border-[#ddd] px-[8px] md:px-[24px] py-[12px]">Cel</th><th class="bg-[#F2F2F2] text-color1 text-[14px] md:text-[16px] font-medium leading-[1.12] text-left border border-[#ddd] px-[8px] md:px-[24px] py-[12px]">Realizacja</th></tr></thead><tbody><tr><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Wizerunkowe minimum</td><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Tak</td></tr><tr><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Elastyczność rozbudowy</td><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Tak, pełna elastyczność poprzez komponenty Vue.js</td></tr><tr><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Edycja treści przez osobę nietechniczną</td><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Tak, Markdown bezpośrednio w GitHub</td></tr><tr><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Sprawne wdrożenie programisty</td><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Tak, mniej niż 1h</td></tr><tr><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Szybkość działania (performance)</td><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Wyniki 90-100 w Google PageSpeed - i to przed optymalizacją</td></tr><tr><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Utrzymanie (maintenance)</td><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">0 zł miesięcznie, 0 godzin pracy</td></tr><tr><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">SEO i marketing internetowy</td><td class="align-top border border-[#EAECF0] px-[8px] md:px-[24px] py-[16px] text-left text-[12px] md:text-[14px] text-gray1 leading-[1.43]">Tak, pełne możliwości dzięki VitePress</td></tr></tbody></table></div><p class="mt-[18px] text-gray1 text-[16px] md:text-[18px] font-normal leading-[1.5] paragraph_spacing">Tymczasem pracujemy nad kolejną iteracją!</p>',54),p=[s];function d(x,l,m,c,y,z){return o(),n("div",null,p)}const h=a(r,[["render",d]]);export{u as __pageData,h as default};
