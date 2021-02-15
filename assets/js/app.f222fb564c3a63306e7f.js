(()=>{"use strict";function e(e){e.scrollIntoView({behavior:"smooth",block:"start"})}const t=[{title:"Reaql-frontend",description:"Reaql-frontend - это front-end приложение написанное на следующем стеке технологий: Typescript, React v16, Graphql, Apollo client v3 и Styled components.<br> \n        Приложение тестируется unit-тестами с применением следующих технологий и библиотек: Jest, Enzyme, Jest-styled-components, @apollo/client/testing. Graphql запросы подменяются с помощью утилиты ApolloMockProvider, поставляемой с пакетом @apollo/client.<br>\n\t\tУ приложения есть репозиторий на github. При отправке изменений в основную ветку репозитория, автоматически запускается тестирование и при его удачном завершении, приложение собирается и отправляется на хостинг heroku.<br>\n\t\t",repoLink:"https://github.com/dan-exxx1st/reaql-frontend",appLink:"https://reaql-frontend.herokuapp.com/"},{title:"Reaql-backend",description:"Reaql-backend - back-end приложение написанное на следующем стеке технологий: Typescript, Nestjs, Typeorm, PostgreSQL, Redis. <br>\n\t\tПриложение написано с использованием микросервисного подхода. Общение между сервисам происходит через Redis. <br>\n\t\tОно тестируется unit-тестами с применением следующих технологий и библиотек: Jest, @nestjs/testing. Запросы к базе данных подменяются с помощью инструментов встроенных в пакет @nestjs/testing и jest.<br>\n        У приложения есть репозиторий на github. При отправке изменений в основную ветку репозитория, автоматически запускается тестирование и при его удачном завершении, приложение собирается и отправляется на хостинг heroku.<br>\n\t\t",repoLink:"https://github.com/dan-exxx1st/reaql-backend",appLink:"https://reaql-backend.herokuapp.com/"},{title:"Vudo-frontend",description:"Vudo-frontend - это front-end приложение написанное на следующем стеке технологий: Vuejs, Vuex, Scss.<br> \n\t\tУ приложения есть репозиторий на github. При отправке изменений в основную ветку репозитория, автоматически запускается сборка и отправка приложения на хостинг heroku.<br>\n\t\t",repoLink:"https://github.com/dan-exxx1st/vudo-frontend",appLink:"https://vudo-frontend.herokuapp.com/"},{title:"Vudo-backend",description:"Vudo-backend - back-end приложение написанное на следующем стеке технологий: TypeScript, Fastify.js, Objection.js. <br>\n\t\tОно тестируется e2e-тестами с применением следующих технологий и библиотек: Jest, Supertest.<br>\n        У приложения есть репозиторий на github. При отправке изменений в основную ветку репозитория, автоматически запускается сборка и отправка приложения на хостинг heroku.<br>\n\t\t",repoLink:"https://github.com/dan-exxx1st/vudo-backend",appLink:"https://vudo-backend.herokuapp.com/"},{title:"React-pizza",description:"React-pizza - front-end приложение написанное на следующем стеке технологий: TypeScript, React, Mobx. <br>\n        У приложения есть репозиторий на github. При отправке изменений в основную ветку репозитория, автоматически запускается сборка и отправка приложения на хостинг heroku.<br>\n\t\t",repoLink:"https://github.com/dan-exxx1st/react-pizza",appLink:"https://exxx1st-react-pizza.herokuapp.com/"}].map((e=>{return` <div class="portfolio__card">\n        <h4 class="portfolio__card__title">${(t=e).title}</h4>\n        <span class="portfolio__card__description">${t.description}</span>\n\t\t<div class="portfolio__card__links">\n\t\t\t<a href="${t.repoLink}" target="_blank" rel="noopener noreferrer">Ссылка на репозиторий.</a>\n        \t<a href="${t.appLink}" target="_blank" rel="noopener noreferrer">Ссылка на приложение.</a>\n\t\t</div>\n    </div> `;var t}));let n;function o(){let e=document.querySelector("html"),t=document.querySelector(".lang"),o=document.querySelector(".first-screen__caption"),r=document.querySelector(".first-screen__title"),c=document.querySelectorAll(".nav__list__item"),s=document.querySelector(".skills__title"),i=document.querySelector(".skills__bg-title"),a=document.querySelector(".education__title"),l=document.querySelector(".education__bg-title"),d=document.querySelector(".portfolio__title "),u=document.querySelector(".portfolio__bg-title");"RU"===n?(document.title="Даниил Парфенов",e.lang="ru",o.textContent="Приветствую. Меня зовут Парфенов Даниил и я",r.textContent="начинающий front-end разработчик",c[0].textContent="Главная страница",c[1].textContent="Навыки",c[2].textContent="Образование",c[3].textContent="Портфолио",c[4].textContent="Обо мне",c[5].textContent="Мои контакты",s.textContent="Навыки",i.textContent="Навыки",a.textContent="Образование",l.textContent="Образование",d.textContent="Портфолио",u.textContent="Портфолио"):(document.title="Daniil Parfenov",e.lang="eu",o.textContent="Hello. My name is Dan Parfenov and I'm",r.textContent="junior front-end developer",c[0].textContent="Main page",c[1].textContent="Skills",c[2].textContent="Education",c[3].textContent="Portfolio",c[4].textContent="About me",c[5].textContent="Contacts",s.textContent="Skills",i.textContent="Skills",a.textContent="Education",l.textContent="Education",d.textContent="Portfolio",u.textContent="Portfolio"),t.childNodes[1].innerText=n}if(window){!function(){const e=document.createElement("div");e.innerHTML='\n<p class="about-me__content__title">Я <span>Junior fullstack developer</span>, с упором на front-end разработку. </p>\n<span class="about-me__content__title">Мои навыки:</span> <br>\n<span class="about-me__content__second">Языки программирования: </span>C#, Go, JavaScript (es5+). <br>\n<span class="about-me__content__second">JavaScript:</span> <br>\nПрототипы, обычные и стрелочные функции, классы, Spread/Rest операторы, Map, Proxy, Promise (resolve, reject, Promise.all), async/await, массивы (concut, slice, splice, map, find, filter, reduce), объекты (assign, in, delete, keys, values, entries) <br>\n<span class="about-me__content__second">TypeScript:</span> <br>\nТипы данных, интерфейсы, Union, Intersection, Generic типы, перечисления, классы (параметры, методы, свойства, public, private, protected, readonly поля) и наследование. <br>\n<span class="about-me__content__second">Front-end:</span> <br>\nБазовые: HTML, CSS. <br>\nШаблонизаторы: Pug/Jade, Sass/Scss. <br>\nБиблиотеки:  React, Redux, Mobx, Mobx-state-tree, Styled-components, Apollo; Vue, Vuex, Vue-apollo; <br>\nДля тестов: Enzyme, Jest-styled-components, Vue-test-utils. <br>\n<span class="about-me__content__second">Back-end:</span> <br>\nБиблиотеки: Express, Fastify, Nestjs, TypeORM, Knex, Objection.js. <br>\nБазы данных: PostgreSQL, MySQL, Redis. <br>\n<span class="about-me__content__second">Тесты:</span> <br>\nПодходы: Unit, integration, e2e. <br>\nБиблиотеки: Jest, ava, mocha, chai, supertest.  <br>\nСборщики: Webpack 4, Webpack 5, Gulp. <br>\n<span class="about-me__content__second">CI/CD, развёртывание приложений:</span> <br>\nDocker, docker-compose, Github-actions, Gitlab. <br>\n<span class="about-me__content__second">Дизайн инструменты: </span> <br>\nAdobe Photoshop, Adobe Illustrator, Figma, Zeplin, Avocode. <br>\n<span class="about-me__content__second">Другое: </span> <br>\nGit, Github, Gitlab, Linux, Bash. \n',e.className="about-me__content",document.querySelector(".about-me").appendChild(e)}(),function(e){const t=document.querySelector(".education__content__date").childNodes,n=document.querySelector(".education__content__text").childNodes;switch(e){case"RU":t[0].innerText="Июнь 2020",t[1].innerText="Август 2020",n[0].innerText="Закончил колледж по специальности «Прикладная информатика».",n[1].innerText="Поступил в НИУ МЭИ на заочное отделение по специальности «Информатика и вычислительная техника».";break;case"EU":t[0].innerText="June 2020",t[1].innerText="August 2020",n[0].innerText="Graduated from college with a degree in Applied Informatics.",n[1].innerText="I entered the NRU MPEI, the correspondence department with a degree in Informatics and Computer Engineering."}}(),document.querySelector(".portfolio__list").insertAdjacentHTML("afterbegin",t),function(){let t=document.querySelector(".nav__list"),n=document.querySelector(".first-screen"),o=document.querySelector(".skills__title"),r=document.querySelector(".education"),c=document.querySelector(".portfolio"),s=document.querySelector(".about-me"),i=document.querySelector(".contacts");t.childNodes[0].addEventListener("click",(()=>e(n))),t.childNodes[1].addEventListener("click",(()=>e(o))),t.childNodes[2].addEventListener("click",(()=>e(r))),t.childNodes[3].addEventListener("click",(()=>e(c))),t.childNodes[4].addEventListener("click",(()=>e(s))),t.childNodes[5].addEventListener("click",(()=>e(i)))}(),function(){let t=document.querySelector(".header"),n=document.querySelector(".first-screen__dropdown"),o=document.querySelector(".to-top-arrow");n.addEventListener("click",(()=>e(t))),o.addEventListener("click",(()=>e(t))),window.onscroll=()=>{window.scrollY>=window.innerHeight+50?o.style.display="block":o.style.display="none"}}(),n=localStorage.getItem("lang")||"RU",o();let r=document.querySelector(".preloader"),c=document.querySelector(".content"),s=document.querySelector(".lang"),i=document.querySelector(".lang__list");s.addEventListener("click",(()=>function(e){let t=e.className;if(-1!==e.className.indexOf("select")){let n=t.replace(/\w[select]/g,"");e.className=n}else e.className=`${t} select`}(s))),i.childNodes.forEach((e=>{e.addEventListener("click",(()=>function(e){let t=document.querySelector(".lang");if(document.querySelector(".lang__list").childNodes.forEach((e=>{-1!==e.className.indexOf("active")&&(e.className=e.className.replace(/\w[active]/g,""))})),e.innerText!==n){let r=e.innerText;n=r,localStorage.setItem("lang",r),t.childNodes[1].innerText=n,o()}}(e)))})),window.onload=function(){let e=1,t=setInterval((function(){e<=0?(clearInterval(t),r.style.display="none",c.style.display="flex"):(r.style.opacity=e,e-=.02)}),20)}}})();