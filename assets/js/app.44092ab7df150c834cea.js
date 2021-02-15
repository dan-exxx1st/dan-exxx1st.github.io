(()=>{"use strict";function t(t){t.scrollIntoView({behavior:"smooth",block:"start"})}const e=[{title:"Reaql-frontend",description:"Reaql-frontend - это front-end приложение написанное на следующем стеке технологий: Typescript, React v16, Graphql, Apollo client v3 и Styled components.<br> \n        Приложение тестируется unit-тестами с применением следующих технологий и библиотек: Jest, Enzyme, Jest-styled-components, @apollo/client/testing. Graphql запросы подменяются с помощью утилиты ApolloMockProvider, поставляемой с пакетом @apollo/client.<br>\n\t\tУ приложения есть репозиторий на github. При отправке изменений в основную ветку репозитория, автоматически запускается тестирование и при его удачном завершении, приложение собирается и отправляется на хостинг heroku.<br>\n\t\t",repoLink:"https://github.com/dan-exxx1st/reaql-frontend",appLink:"https://reaql-frontend.herokuapp.com/"},{title:"Reaql-backend",description:"Reaql-backend - back-end приложение написанное на следующем стеке технологий: Typescript, Nestjs, Typeorm, PostgreSQL, Redis. <br>\n\t\tПриложение написано с использованием микросервисного подхода. Общение между сервисам происходит через Redis. <br>\n\t\tОно тестируется unit-тестами с применением следующих технологий и библиотек: Jest, @nestjs/testing. Запросы к базе данных подменяются с помощью инструментов встроенных в пакет @nestjs/testing и jest.<br>\n        У приложения есть репозиторий на github. При отправке изменений в основную ветку репозитория, автоматически запускается тестирование и при его удачном завершении, приложение собирается и отправляется на хостинг heroku.<br>\n\t\t",repoLink:"https://github.com/dan-exxx1st/reaql-backend",appLink:"https://reaql-backend.herokuapp.com/"},{title:"Vudo-frontend",description:"Vudo-frontend - это front-end приложение написанное на следующем стеке технологий: Vuejs, Vuex, Scss.<br> \n\t\tThe app has a repository on github. When you push changes to the main branch of the repository, the build is automatically started and the application is submitted to the heroku hosting.<br>\n\t\t",repoLink:"https://github.com/dan-exxx1st/vudo-frontend",appLink:"https://vudo-frontend.herokuapp.com/"},{title:"Vudo-backend",description:"Vudo-backend - back-end приложение написанное на следующем стеке технологий: TypeScript, Fastify.js, Objection.js. <br>\n\t\tОно тестируется e2e-тестами с применением следующих технологий и библиотек: Jest, Supertest.<br>\n        The app has a repository on github. When you push changes to the main branch of the repository, the build is automatically started and the application is submitted to the heroku hosting.<br>\n\t\t",repoLink:"https://github.com/dan-exxx1st/vudo-backend",appLink:"https://vudo-backend.herokuapp.com/"},{title:"React-pizza",description:"React-pizza - front-end приложение написанное на следующем стеке технологий: TypeScript, React, Mobx. <br>\n        The app has a repository on github. When you push changes to the main branch of the repository, the build is automatically started and the application is submitted to the heroku hosting.<br>\n\t\t",repoLink:"https://github.com/dan-exxx1st/react-pizza",appLink:"https://exxx1st-react-pizza.herokuapp.com/"}],n=[{title:"Reaql-frontend",description:"Reaql-frontend - this is a front-end application written on the following technology stack: Typescript, React v16, Graphql, Apollo client v3 и Styled components.<br> \n        The application is tested with unit tests using the following technologies and libraries: Jest, Enzyme, Jest-styled-components, @apollo/client/testing. Graphql queries are spoofed using the ApolloMockProvider utility provided with the @apollo/client package.<br>\n\t\tThe app has a repository on github. When the changes are sent to the main branch of the repository, testing is automatically started and if it is successfully completed, the application is built and sent to the heroku hosting.<br>\n\t\t",repoLink:"https://github.com/dan-exxx1st/reaql-frontend",appLink:"https://reaql-frontend.herokuapp.com/"},{title:"Reaql-backend",description:"Reaql-backend - this is a back-end application written on the following technology stack: Typescript, Nestjs, Typeorm, PostgreSQL, Redis. <br>\n\t\tThe application is written using a microservice approach. Communication between services takes place through Redis. <br>\n\t\tIt is unit tested using the following technologies and libraries: Jest, @nestjs/testing. Database queries are spoofed using the tools built into the @nestjs/testing and jest package.<br>\n        The app has a repository on github. When the changes are sent to the main branch of the repository, testing is automatically started and if it is successfully completed, the application is built and sent to the heroku hosting.<br>\n\t\t",repoLink:"https://github.com/dan-exxx1st/reaql-backend",appLink:"https://reaql-backend.herokuapp.com/"},{title:"Vudo-frontend",description:"Vudo-frontend - this is a front-end application written on the following technology stack: Vuejs, Vuex, Scss.<br> \n\t\tThe app has a repository on github. When you push changes to the main branch of the repository, the build is automatically started and the application is submitted to the heroku hosting.<br>\n\t\t",repoLink:"https://github.com/dan-exxx1st/vudo-frontend",appLink:"https://vudo-frontend.herokuapp.com/"},{title:"Vudo-backend",description:"Vudo-backend - this is a back-end application written on the following technology stack: TypeScript, Fastify.js, Objection.js. <br>\n\t\tОно тестируется e2e-тестами с применением следующих технологий и библиотек: Jest, Supertest.<br>\n        The app has a repository on github. When you push changes to the main branch of the repository, the build is automatically started and the application is submitted to the heroku hosting.<br>\n\t\t",repoLink:"https://github.com/dan-exxx1st/vudo-backend",appLink:"https://vudo-backend.herokuapp.com/"},{title:"React-pizza",description:"React-pizza - this is a front-end application written on the following technology stack: TypeScript, React, Mobx. <br>\n        The app has a repository on github. When you push changes to the main branch of the repository, the build is automatically started and the application is submitted to the heroku hosting.<br>\n\t\t",repoLink:"https://github.com/dan-exxx1st/react-pizza",appLink:"https://exxx1st-react-pizza.herokuapp.com/"}],o=t=>{const e=localStorage.getItem("lang")||"RU";return` <div class="portfolio__card">\n        <h4 class="portfolio__card__title">${t.title}</h4>\n        <span class="portfolio__card__description">${t.description}</span>\n\t\t<div class="portfolio__card__links">\n\t\t\t<a href="${t.repoLink}" target="_blank" rel="noopener noreferrer">${"RU"===e?"Ссылка на репозиторий.":"Link to repository."}</a>\n        \t<a href="${t.appLink}" target="_blank" rel="noopener noreferrer">${"RU"===e?"Ссылка на репозиторий.":"Link to application."}</a>\n\t\t</div>\n    </div> `};function s(){const t=localStorage.getItem("lang")||"RU";let s=document.querySelector("html"),a=document.querySelector(".lang"),i=document.querySelector(".first-screen__caption"),r=document.querySelector(".first-screen__title"),c=document.querySelectorAll(".nav__list__item"),l=document.querySelector(".skills__title"),p=document.querySelector(".skills__bg-title"),d=document.querySelector(".education__title"),u=document.querySelector(".education__bg-title"),h=document.querySelector(".portfolio__title "),b=document.querySelector(".portfolio__bg-title"),m=document.querySelector(".about-me__title"),_=document.querySelector(".about-me__bg-title"),y=document.querySelector(".contacts__title"),g=document.querySelector(".contacts__bg-title"),x=document.querySelector(".contacts__content").childNodes;"RU"===t?(document.title="Даниил Парфенов",s.lang="ru",i.textContent="Приветствую. Меня зовут Парфенов Даниил и я",r.textContent="начинающий front-end разработчик",c[0].textContent="Главная страница",c[1].textContent="Навыки",c[2].textContent="Образование",c[3].textContent="Портфолио",c[4].textContent="Обо мне",c[5].textContent="Мои контакты",l.textContent="Навыки",p.textContent="Навыки",d.textContent="Образование",u.textContent="Образование",h.textContent="Портфолио",b.textContent="Портфолио",m.textContent="Обо мне",_.textContent="Обо мне",y.textContent="Контакты",g.textContent="Контакты",x[1].textContent="Мой профиль на Github",x[2].textContent="Мой профиль на Gitlab "):(document.title="Daniil Parfenov",s.lang="eu",i.textContent="Hello. My name is Dan Parfenov and I'm",r.textContent="junior front-end developer",c[0].textContent="Main page",c[1].textContent="Skills",c[2].textContent="Education",c[3].textContent="Portfolio",c[4].textContent="About me",c[5].textContent="Contacts",l.textContent="Skills",p.textContent="Skills",d.textContent="Education",u.textContent="Education",h.textContent="Portfolio",b.textContent="Portfolio",m.textContent="About me",_.textContent="About me",y.textContent="Contacts",g.textContent="Contacts",x[1].textContent="My profile on Github",x[2].textContent="My profile on Gitlab"),function(t){const s=("RU"===t?e:n).map(o),a=document.querySelector(".portfolio__list");a.innerHTML="",a.insertAdjacentHTML("afterbegin",s)}(t),function(t){const e=document.querySelector(".education__content__date").childNodes,n=document.querySelector(".education__content__text").childNodes;switch(t){case"RU":e[0].innerText="Июнь 2020",e[1].innerText="Август 2020",n[0].innerText="Закончил колледж по специальности «Прикладная информатика».",n[1].innerText="Поступил в НИУ МЭИ на заочное отделение по специальности «Информатика и вычислительная техника».";break;case"EU":e[0].innerText="June 2020",e[1].innerText="August 2020",n[0].innerText="Graduated from college with a degree in Applied Informatics.",n[1].innerText="I entered the NRU MPEI, the correspondence department with a degree in Informatics and Computer Engineering."}}(t),function(t){const e=document.querySelector(".about-me__content"),n="RU"===t?'\n<p class="about-me__content__title">Я <span>Junior fullstack developer</span>, с упором на front-end разработку. </p>\n<span class="about-me__content__title">Мои навыки:</span> <br>\n<span class="about-me__content__second">Языки программирования: </span>C#, Go, JavaScript (es5+). <br>\n<span class="about-me__content__second">JavaScript:</span> <br>\nПрототипы, обычные и стрелочные функции, классы, Spread/Rest операторы, Map, Proxy, Promise (resolve, reject, Promise.all), async/await, массивы (concut, slice, splice, map, find, filter, reduce), объекты (assign, in, delete, keys, values, entries) <br>\n<span class="about-me__content__second">TypeScript:</span> <br>\nТипы данных, интерфейсы, Union, Intersection, Generic типы, перечисления, классы (параметры, методы, свойства, public, private, protected, readonly поля) и наследование. <br>\n<span class="about-me__content__second">Front-end:</span> <br>\nБазовые: HTML, CSS. <br>\nШаблонизаторы: Pug/Jade, Sass/Scss. <br>\nБиблиотеки:  React, Redux, Mobx, Mobx-state-tree, Styled-components, Apollo; Vue, Vuex, Vue-apollo; <br>\nДля тестов: Enzyme, Jest-styled-components, Vue-test-utils. <br>\n<span class="about-me__content__second">Back-end:</span> <br>\nБиблиотеки: Express, Fastify, Nestjs, TypeORM, Knex, Objection.js. <br>\nБазы данных: PostgreSQL, MySQL, Redis. <br>\n<span class="about-me__content__second">Тесты:</span> <br>\nПодходы: Unit, integration, e2e. <br>\nБиблиотеки: Jest, ava, mocha, chai, supertest.  <br>\nСборщики: Webpack 4, Webpack 5, Gulp. <br>\n<span class="about-me__content__second">CI/CD, развёртывание приложений:</span> <br>\nDocker, docker-compose, Github-actions, Gitlab. <br>\n<span class="about-me__content__second">Дизайн инструменты: </span> <br>\nAdobe Photoshop, Adobe Illustrator, Figma, Zeplin, Avocode. <br>\n<span class="about-me__content__second">Другое: </span> <br>\nGit, Github, Gitlab, Linux, Bash. \n':'\n<p class="about-me__content__title">I\'m <span>Junior fullstack developer</span>, with a focus on front-end development.</p>\n<span class="about-me__content__title">My skills:</span> <br>\n<span class="about-me__content__second">Programming languages: </span>C#, Go, JavaScript (es5+). <br>\n<span class="about-me__content__second">JavaScript:</span> <br>\nPrototypes, arrow functions, classes, Spread/Rest operators, Map, Proxy, Promise (resolve, reject, Promise.all), async/await, arrays (concut, slice, splice, map, find, filter, reduce), objects (assign, in, delete, keys, values, entries) <br>\n<span class="about-me__content__second">TypeScript:</span> <br>\nData types, interfaces, Union, Intersection, Generic types, enums, classes (parametrs, methods, properties, public, private, protected, readonly fields) and inheritance. <br>\n<span class="about-me__content__second">Front-end:</span> <br>\nBase: HTML, CSS. <br>\nTemplate engines: Pug/Jade, Sass/Scss. <br>\nLibraries:  React, Redux, Mobx, Mobx-state-tree, Styled-components, Apollo; Vue, Vuex, Vue-apollo; <br>\nFor tests: Enzyme, Jest-styled-components, Vue-test-utils. <br>\n<span class="about-me__content__second">Back-end:</span> <br>\nLibraries: Express, Fastify, Nestjs, TypeORM, Knex, Objection.js. <br>\nData bases: PostgreSQL, MySQL, Redis. <br>\n<span class="about-me__content__second">Tests:</span> <br>\nApproaches: Unit, integration, e2e. <br>\nLibraries: Jest, ava, mocha, chai, supertest.  <br>\nBuilders: Webpack 4, Webpack 5, Gulp. <br>\n<span class="about-me__content__second">CI/CD, application deployment:</span> <br>\nDocker, docker-compose, Github-actions, Gitlab. <br>\n<span class="about-me__content__second">Design tools: </span> <br>\nAdobe Photoshop, Adobe Illustrator, Figma, Zeplin, Avocode. <br>\n<span class="about-me__content__second">Other: </span> <br>\nGit, Github, Gitlab, Linux, Bash. \n',o=document.createElement("div");o.innerHTML=n,o.className="about-me__content";const s=document.querySelector(".about-me");e&&s.removeChild(e),s.appendChild(o)}(t),a.childNodes[1].innerText=t}let a;if(window){!function(){let e=document.querySelector(".nav__list"),n=document.querySelector(".first-screen"),o=document.querySelector(".skills__title"),s=document.querySelector(".education"),a=document.querySelector(".portfolio"),i=document.querySelector(".about-me"),r=document.querySelector(".contacts");e.childNodes[0].addEventListener("click",(()=>t(n))),e.childNodes[1].addEventListener("click",(()=>t(o))),e.childNodes[2].addEventListener("click",(()=>t(s))),e.childNodes[3].addEventListener("click",(()=>t(a))),e.childNodes[4].addEventListener("click",(()=>t(i))),e.childNodes[5].addEventListener("click",(()=>t(r)))}(),function(){let e=document.querySelector(".header"),n=document.querySelector(".first-screen__dropdown"),o=document.querySelector(".to-top-arrow");n.addEventListener("click",(()=>t(e))),o.addEventListener("click",(()=>t(e))),window.onscroll=()=>{window.scrollY>=window.innerHeight+50?o.style.display="block":o.style.display="none"}}(),a=localStorage.getItem("lang")||"RU",s();let e=document.querySelector(".preloader"),n=document.querySelector(".content"),o=document.querySelector(".lang"),i=document.querySelector(".lang__list");o.addEventListener("click",(()=>function(t){let e=t.className;if(-1!==t.className.indexOf("select")){let n=e.replace(/\w[select]/g,"");t.className=n}else t.className=`${e} select`}(o))),i.childNodes.forEach((t=>{t.addEventListener("click",(()=>function(t){let e=document.querySelector(".lang");if(document.querySelector(".lang__list").childNodes.forEach((t=>{-1!==t.className.indexOf("active")&&(t.className=t.className.replace(/\w[active]/g,""))})),t.innerText!==a){let n=t.innerText;a=n,localStorage.setItem("lang",n),e.childNodes[1].innerText=a,s()}}(t)))})),window.onload=function(){let t=1,o=setInterval((function(){t<=0?(clearInterval(o),e.style.display="none",n.style.display="flex"):(e.style.opacity=t,t-=.02)}),20)}}})();