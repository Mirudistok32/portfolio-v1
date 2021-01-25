(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,t,a){e.exports=a.p+"static/media/click-me-game.2434e2ca.webp"},103:function(e,t,a){e.exports=a.p+"static/media/increment-way.f0f49128.webp"},104:function(e,t,a){e.exports=a.p+"static/media/generator-password.2314beb3.webp"},107:function(e,t,a){e.exports=a(137)},112:function(e,t,a){},113:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(60),r=a.n(i),l=(a(112),a(3)),c="/home",s="/about",m="/portfolio",_="/contact",u=(a(113),a(36)),p=a.n(u),d=a(62),b=a.n(d),f=a(37),k=a(74),v=a.n(k),h=o.a.memo((function(e){var t=e.src,a=e.alt,n=e.title,i=e.link;return o.a.createElement("div",{className:v.a.image},o.a.createElement(f.b,{className:v.a.image__link,to:i,title:n},o.a.createElement("img",{className:v.a.image__photo,src:t,alt:a})))})),g=o.a.memo((function(e){return o.a.createElement("div",{className:p.a.home},o.a.createElement("div",{className:p.a.home__wrap},o.a.createElement("div",{className:p.a.home__photo},o.a.createElement(h,{src:b.a,alt:"my photo",title:"about me",link:s})),o.a.createElement("div",{className:p.a.home__content},o.a.createElement("div",{className:p.a["home__content-hi"]},"Hi `",o.a.createElement("span",null,"everybody"),"`!"),o.a.createElement("div",{className:p.a["home__content-name"]},"I'm ",o.a.createElement("span",null,"Postnikov Stanislav")),o.a.createElement("div",{className:p.a["home__content-about"]},"I'm Frontend Developer! I live in the Sankt-Petersburg. I like to write code and create understandably web-applications."))))})),E=a(56),N=a.n(E),y=o.a.memo((function(e){var t=e.children,a=e.darkColor,n=e.lightColor,i=[N.a["error-path"]];return a&&!n&&i.push(N.a["dark-color"]),!a&&n&&i.push(N.a["light-color"]),a&&n&&i.push(N.a["light-color"]),o.a.createElement("div",{className:i.join(" ")},t)})),O=a(13),j=a(26),w=a.n(j),T=a(75),C=a.n(T),I=o.a.memo((function(e){var t=e.colorArrow,a=void 0===t?"#FAFAFA":t,n=e.colorBody,i=void 0===n?"#2196F3":n,r=e.onClick,l=e.classNameForArrow,c=e.classNameForBody,s=[C.a["down-arrow"]],m=[C.a["down-arrow__arw"]],_=[C.a["down-arrow__body"]];return l&&m.push(l),c&&m.push(c),o.a.createElement("svg",{className:s.join(" "),onClick:function(e){r&&r(e)},version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 490.667 490.667"},o.a.createElement("path",{className:_.join(""),fill:i,d:"M245.333,0C109.839,0,0,109.839,0,245.333s109.839,245.333,245.333,245.333\r s245.333-109.839,245.333-245.333C490.514,109.903,380.764,0.153,245.333,0z"}),o.a.createElement("path",{className:m.join(""),fill:a,d:"M317.867,221.867l-19.2,19.2V117.333c0-29.455-23.878-53.333-53.333-53.333S192,87.878,192,117.333\r v123.584l-19.2-19.2c-19.139-18.289-49.277-18.289-68.416,0c-18.889,18.894-18.889,49.522,0,68.416l118.251,118.251\r c12.496,12.492,32.752,12.492,45.248,0l118.251-118.251c18.889-18.894,18.889-49.522,0-68.416\r C366.975,203.565,336.946,203.631,317.867,221.867z"}))})),x=a(138),S=o.a.memo((function(e){var t=e.isOpen,a=e.toggleOpenNavList,i=e.navElements,r=[w.a.navigation__list],l=[w.a.navigation__btn],c=[w.a["navigation__list-element"]],s=Object(n.useMemo)((function(){return i.map((function(e){return o.a.createElement("li",{key:Object(x.a)()},o.a.createElement(f.b,{className:c.join(" "),to:e.link,activeClassName:w.a["navigation__list-element-active"],onClick:function(){a(!1)}},e.title.toLocaleUpperCase()))}))}),[c,i,a]),m=Object(n.useCallback)((function(){a(!t)}),[t,a]);return t&&r.push(w.a["navigation__list-active"]),t&&l.push(w.a["navigation__btn-active"]),o.a.createElement("nav",{className:w.a.navigation},o.a.createElement("span",{className:l.join(" ")},o.a.createElement(I,{onClick:m,classNameForArrow:t?w.a.color:"",colorBody:"transparent"})),o.a.createElement("ul",{className:r.join(" ")},s))})),A=function(e){return e.navigationReducer.isOpenNav},F=function(e){return e.navigationReducer.navElements},M=a(51),P={isOpenNav:!1,navElements:[{title:"Home",link:c},{title:"About",link:s},{title:"Portfolio",link:m},{title:"Contact",link:_}]},G=function(e){return{type:"NAVIGATION/TOGGLE-OPEN-NAV-LIST",payload:{isOpenNav:e}}},L=function(e){var t=Object(O.c)(),a=Object(O.d)(A),i=Object(O.d)(F),r=Object(n.useCallback)((function(e){return t(G(e))}),[t]);return o.a.createElement(S,{isOpen:a,navElements:i,toggleOpenNavList:r})},D=a(33),H=a(16),R=a.n(H),W=a(57),V=a.n(W),B=o.a.memo((function(e){var t=e.subtitle;return o.a.createElement("div",{className:V.a.title},o.a.createElement("span",{className:V.a.title__line}),o.a.createElement("span",{className:V.a.title__text},t),o.a.createElement("span",{className:V.a.title__line}))})),K=a(76),U=a.n(K),q=o.a.memo((function(e){var t=e.title,a=Object(n.useMemo)((function(){return t.split(" ").slice(0,1)+" "}),[t]),i=Object(n.useMemo)((function(){return t.split(" ").slice(1)}),[t]);return o.a.createElement("div",{className:U.a.title},o.a.createElement("span",{className:U.a.title__first},a),o.a.createElement("span",{className:U.a.title__second},i))})),z=a(95),Q=a.n(z),J=o.a.memo((function(e){var t=e.title,a=e.subtitle;return o.a.createElement("div",{className:Q.a.title},o.a.createElement(q,{title:t}),o.a.createElement(B,{subtitle:a}))})),X=a(96),Y=a.n(X),Z=o.a.memo((function(e){var t=e.title,a=e.value,n=e.isLink,i=e.link;return o.a.createElement("li",{className:Y.a.element},t,n?o.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},a):o.a.createElement("span",null,a))})),$=o.a.memo((function(e){var t=e.infoDates,a=e.listSkillsDates,i=Object(n.useMemo)((function(){return t.map((function(e){return o.a.createElement(Z,{key:e.id,value:e.value,title:e.key})}))}),[t]),r=Object(n.useMemo)((function(){return a.map((function(e){return o.a.createElement("li",{key:e.id,className:R.a["about__skills-contents-element"],style:{backgroundColor:e.backgroundColor}},"".concat(e.title))}))}),[a]);return o.a.createElement("div",{className:R.a.about},o.a.createElement("div",{className:R.a.about__wrap},o.a.createElement(J,{title:"About Me",subtitle:"Today you make the code, tomorrow the code makes your money"}),o.a.createElement("div",{className:R.a["about__info-wrap"]},o.a.createElement("div",{className:R.a["about__info-photo"]},o.a.createElement("img",{src:b.a,alt:""})),o.a.createElement("div",{className:R.a["about__info-data"]},o.a.createElement("ul",{className:R.a["about__info-data-list"]},i))),o.a.createElement("div",{className:R.a.about__line}),o.a.createElement("div",{className:R.a.about__skills},o.a.createElement("div",{className:R.a["about__skills-title"]},"Skills"),o.a.createElement("div",{className:R.a["about__skills-contents"]},o.a.createElement("ul",{className:R.a["about__skills-contents-list"]},r)))))})),ee=function(e){return e.aboutReducer.infoDates},te=function(e){return e.aboutReducer.listSkillsDates},ae=o.a.memo((function(e){var t=e.infoDates,a=e.listSkillsDates;return o.a.createElement($,{infoDates:t,listSkillsDates:a})})),ne=Object(D.d)(Object(O.b)((function(e){return{infoDates:ee(e),listSkillsDates:te(e)}}),{}))(ae),oe=a(106),ie=a(58),re=a(7),le=a.n(re),ce=o.a.memo((function(e){var t=e.onSubmit,a={initialValues:{name:"",email:"",description:""},onSubmit:function(e,a){var n=a.resetForm;t(e),n()},validationSchema:ie.a({name:ie.b().required().max(24,"Max count symbols ".concat(24)),email:ie.b().email().max(50,"Max count symbols ".concat(50)),description:ie.b().required().max(300,"Max count symbols ".concat(300))})},n=Object(oe.a)(a);return o.a.createElement("form",{className:le.a.form,onSubmit:n.handleSubmit},o.a.createElement("label",{className:le.a.form__row},o.a.createElement("span",{className:le.a.form__title+" ".concat(n.errors.name?le.a["form__title-error"]:"")},"Your name"),o.a.createElement("input",{className:le.a.form__name+" ".concat(n.errors.name?le.a["form__name-error"]:""),type:"text",name:"name",onChange:n.handleChange,value:n.values.name}),n.errors.name&&o.a.createElement("span",{className:le.a["form__row-error"]},"*",n.errors.name)),o.a.createElement("label",{className:le.a.form__row},o.a.createElement("span",{className:le.a.form__title},"Your email"),o.a.createElement("input",{className:le.a.form__email,type:"text",name:"email",onChange:n.handleChange,value:n.values.email}),n.errors.email&&o.a.createElement("span",{className:le.a["form__row-error"]},"*",n.errors.email)),o.a.createElement("label",{className:le.a.form__row},o.a.createElement("span",{className:le.a.form__title+" ".concat(n.errors.description?le.a["form__title-error"]:"")},"Your Comment"),o.a.createElement("textarea",{className:le.a.form__description+" ".concat(n.errors.name?le.a["form__description-error"]:""),name:"description",onBlur:function(e){return function(e){""===e.currentTarget.value.trim()&&(e.currentTarget.style.minHeight="50px")}(e)},onScroll:function(e){return function(e){var t=e.currentTarget.scrollHeight,a=+e.currentTarget.style.height;t>a&&(a+=t-a,e.currentTarget.style.minHeight="".concat(a,"px"))}(e)},onChange:function(e){return function(e){n.handleChange(e)}(e)},value:n.values.description}),n.errors.description&&o.a.createElement("span",{className:le.a["form__row-error"]},"*",n.errors.description)),o.a.createElement("button",{className:le.a.form__button,type:"submit"},"Send"))})),se=a(23),me=a.n(se),_e=o.a.memo((function(e){var t=e.onSubmitContactFeedbackForm,a=e.contactElements,i=Object(n.useMemo)((function(){return a.map((function(e){return o.a.createElement("li",{key:e.id,className:me.a.contact__link},o.a.createElement("span",{className:me.a["contact__link-span"]},e.title),o.a.createElement("a",{href:e.link,className:me.a["contact__link-a"],target:"_blank",rel:"noopener noreferrer"},e.linkTitle))}))}),[a]);return o.a.createElement("div",{className:me.a.contact},o.a.createElement("div",{className:me.a.contact__wrap},o.a.createElement(J,{title:"My \u0441ontact",subtitle:"Magic ceases to exist after you understand how it works."}),o.a.createElement("div",{className:me.a.contact__content},o.a.createElement("ul",{className:me.a.contact__mainlinks},i),o.a.createElement("div",{className:me.a.contact__form},o.a.createElement("div",{className:me.a["contact__form-title"]},"If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly."),o.a.createElement(ce,{onSubmit:t})))))})),ue=a(84),pe=a.n(ue),de=a(100),be=a(101),fe=a.n(be).a.create({baseURL:"https://api.telegram.org/bot".concat("951359730:AAGrNQVOTlr5qKWhyk_fKySVyxEJQ1PB7Wo","/")}),ke=function(e){return fe.post("sendMessage?chat_id=".concat("400864056","&text=").concat(e)).then((function(e){if(e.status>400)throw Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u0441\u0442\u0430\u0442\u0443\u0441 \u043e\u0448\u0438\u0431\u043a\u0438 \u0431\u043e\u043b\u044c\u0448\u0435 400");if("OK"!==e.statusText)throw Error("data.statusText !== `OK`");return e.data})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 POST \u0437\u0430\u043f\u0440\u043e\u0441\u0435, \u0432 sendMessagesApi \u043c\u0435\u0442\u043e\u0434\u0430 sendMessage"),console.log("\u041e\u0448\u0438\u0431\u043a\u0430/Error: "+e)}))},ve={isLoading:!1,contactElements:[{id:Object(x.a)(),title:"Telegram",linkTitle:"t.me/mirudistok",link:"https://t.me/mirudistok"},{id:Object(x.a)(),title:"Vk",linkTitle:"vk.com/postnikov_st",link:"https://vk.com/postnikov_st"},{id:Object(x.a)(),title:"Instagram",linkTitle:"instagram.com/postnikov_st",link:"https://www.instagram.com/postnikov_st/"},{id:Object(x.a)(),title:"Linkedin",linkTitle:"linkedin.com/in/stanislav-postnikov-6220331b7/",link:"https://www.linkedin.com/in/stanislav-postnikov-6220331b7/"},{id:Object(x.a)(),title:"GitHub",linkTitle:"github.com/mirudistok32",link:"https://github.com/mirudistok32"}]},he=function(e){return{type:"MIR/CONTACT/IS_LOADING",payload:{isLoading:e}}},ge=function(e){return e.contactReducer.contactElements},Ee=o.a.memo((function(e){var t=Object(O.c)(),a=Object(O.d)(ge),i=Object(n.useCallback)((function(e){t(function(e){return function(){var t=Object(de.a)(pe.a.mark((function t(a){return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(he(!0)),t.next=3,ke(e);case 3:a(he(!0));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[t]),r=Object(n.useCallback)((function(e){var t=e.name,a=e.description,n=e.email,o="\u041f\u0440\u0438\u0432\u0435\u0442! \u042d\u0442\u043e \u0444\u0438\u0442\u0431\u0435\u043a \u0438\u0437 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e! { \u041a\u0442\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u043b: ".concat(t," }\n        { \u0415\u0451/\u0415\u0433\u043e email: ").concat(n," } { \u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439: ").concat(a," }\n        ");i(o)}),[i]);return o.a.createElement(_e,{onSubmitContactFeedbackForm:r,contactElements:a})})),Ne=a(54),ye=a.n(Ne),Oe=o.a.memo((function(e){var t=e.mainTitle,a=e.listsInfo,i=e.urlImages,r=e.linkImage,l=Object(n.useMemo)((function(){return a.map((function(e){return o.a.createElement(Z,{key:e.id,title:e.keyTitle,value:e.valueTitle,isLink:e.isLink,link:e.link})}))}),[a]);return o.a.createElement("div",{className:ye.a.portfolio__element},o.a.createElement("div",{className:ye.a["portfolio__element-title"]},t),o.a.createElement("div",{className:ye.a["portfolio__element-wrap"]},o.a.createElement("div",{className:ye.a["portfolio__element-info"]},l),o.a.createElement("div",{className:ye.a["portfolio__element-canvas"]},o.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:i,alt:"avatar"})))))})),je=a(77),we=a.n(je),Te=o.a.memo((function(e){var t=e.portfolioInfoProjectDatas,a=Object(n.useMemo)((function(){return t.map((function(e){var t=e.id,a=e.listsInfo,n=e.mainTitle,i=e.urlImages,r=e.linkImages;return o.a.createElement(Oe,{key:t,urlImages:i,listsInfo:a,mainTitle:n,linkImage:r})}))}),[t]);return o.a.createElement("div",{className:we.a.portfolio},o.a.createElement("div",{className:we.a.portfolio__wrap},o.a.createElement(J,{title:"My portfolio",subtitle:"In theory, theory and practice are inseparable. In practice, this is not the case."}),o.a.createElement("div",{className:we.a.portfolio__content},a)))})),Ce=function(e){return e.portfolioReducer.portfolioInfoProjectDatas},Ie=o.a.memo((function(e){var t=Object(O.d)(Ce);return o.a.createElement(Te,{portfolioInfoProjectDatas:t})}));var xe=function(){return o.a.createElement("div",{className:"app"},o.a.createElement(L,null),o.a.createElement("div",{className:"app__wrap"},o.a.createElement("div",{className:"app__content"},o.a.createElement(l.d,null,o.a.createElement(l.b,{exact:!0,path:"/",render:function(){return o.a.createElement(l.a,{to:c})}}),o.a.createElement(l.b,{exact:!0,path:c,render:function(){return o.a.createElement(g,null)}}),o.a.createElement(l.b,{exact:!0,path:s,render:function(){return o.a.createElement(ne,null)}}),o.a.createElement(l.b,{exact:!0,path:m,render:function(){return o.a.createElement(Ie,null)}}),o.a.createElement(l.b,{exact:!0,path:_,render:function(){return o.a.createElement(Ee,null)}}),o.a.createElement(l.b,{render:function(){return o.a.createElement(y,{children:"Error path!"})}})))))},Se=a(102),Ae=a.n(Se),Fe=a(103),Me=a.n(Fe),Pe=a(104),Ge=a.n(Pe),Le={portfolioInfoProjectDatas:[{mainTitle:"Generator Password",id:Object(x.a)(),listsInfo:[{keyTitle:"Link",valueTitle:"https://mirudistok32.github.io/generator-password/",isLink:!0,link:"https://mirudistok32.github.io/generator-password/",id:Object(x.a)()},{keyTitle:"GitHub",valueTitle:"https://github.com/Mirudistok32/generator-password",isLink:!0,link:"https://github.com/Mirudistok32/generator-password",id:Object(x.a)()},{keyTitle:"Description",valueTitle:"Generator Password - \u0431\u044b\u0441\u0442\u0440\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0445\u043e\u0440\u043e\u0448\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c.",id:Object(x.a)()},{keyTitle:"Technologies",valueTitle:"#reduxToolkit, #immer, #react, #javascript, #typescript #html, #css, #hooks, #scss, #memo",id:Object(x.a)()}],urlImages:Ge.a,linkImages:"https://mirudistok32.github.io/generator-password/"},{mainTitle:"ClickMeGame",id:Object(x.a)(),listsInfo:[{keyTitle:"Link",valueTitle:"https://mirudistok32.github.io/ClickMeGame/",isLink:!0,link:"https://mirudistok32.github.io/ClickMeGame/",id:Object(x.a)()},{keyTitle:"GitHub",valueTitle:"https://github.com/Mirudistok32/ClickMeGame/",isLink:!0,link:"https://github.com/Mirudistok32/ClickMeGame/",id:Object(x.a)()},{keyTitle:"Description",valueTitle:"ClickMeGame - \u044d\u0442\u043e \u043c\u0438\u043d\u0438-\u0438\u0433\u0440\u0430, \u0446\u0435\u043b\u044c \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0443\u0437\u043d\u0430\u0442\u044c, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u044b \u0443\u0441\u043f\u0435\u0435\u0442\u0435 \u043a\u043b\u0438\u043a\u043d\u0443\u0442\u044c \u043f\u043e \u043a\u043d\u043e\u043f\u043a\u0435 'Click' \u0437\u0430 10 \u0441\u0435\u043a\u0443\u043d\u0434",id:Object(x.a)()},{keyTitle:"Technologies",valueTitle:"#react, #javascript, #typescript #html, #css, #hooks, #sass",id:Object(x.a)()}],urlImages:Ae.a,linkImages:"https://mirudistok32.github.io/ClickMeGame/"},{mainTitle:"Increment Way",id:Object(x.a)(),listsInfo:[{keyTitle:"Link",valueTitle:"https://mirudistok32.github.io/SamuraiWayIncrement/",isLink:!0,link:"https://mirudistok32.github.io/SamuraiWayIncrement/",id:Object(x.a)()},{keyTitle:"GitHub",valueTitle:"https://github.com/Mirudistok32/SamuraiWayIncrement",isLink:!0,link:"https://github.com/Mirudistok32/SamuraiWayIncrement",id:Object(x.a)()},{keyTitle:"Description",valueTitle:"Increment Way - \u044d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0441\u0447\u0435\u0442\u0447\u0438\u043a, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043c\u043e\u0436\u043d\u043e \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0442\u044c \u0447\u0438\u0441\u043b\u043e \u043d\u0430 \u0434\u0438\u0441\u043f\u043b\u0435\u0438 \u0432 \u0431\u043e\u043b\u044c\u0448\u0443\u044e \u0441\u0442\u0440\u043e\u043d\u0443. \u0422\u0430\u043a \u0436\u0435 \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439.",id:Object(x.a)()},{keyTitle:"Technologies",valueTitle:"#react, #javascript, #html, #css, #hooks, #typescript, #sass, #react-router-dom",id:Object(x.a)()}],urlImages:Me.a,linkImages:"https://mirudistok32.github.io/SamuraiWayIncrement/"}]},De={infoDates:[{key:"First Name",value:"Stanislav",id:Object(x.a)()},{key:"Last Name",value:"Postnikov",id:Object(x.a)()},{key:"Birthdate",value:"31 may 1996",id:Object(x.a)()},{key:"Phone",value:"+7 951 659 01 65",id:Object(x.a)()},{key:"Nationality",value:"Russion",id:Object(x.a)()},{key:"Adress",value:"Sankt-Petersburg",id:Object(x.a)()},{key:"Experience",value:"1 year",id:Object(x.a)()},{key:"Langages",value:"Russion, English",id:Object(x.a)()},{key:"Email",value:"mirudistok32@gmail.com",id:Object(x.a)()}],listSkillsDates:[{title:"<React />",backgroundColor:"dodgerblue",id:Object(x.a)()},{title:"createStore(Redux)",backgroundColor:"mediumslateblue",id:Object(x.a)()},{title:"{ javascript }",backgroundColor:"gold",id:Object(x.a)()},{title:"type Typescript",backgroundColor:"deepskyblue",id:Object(x.a)()},{title:"css {}",backgroundColor:"moccasin",id:Object(x.a)()},{title:"<html></html>",backgroundColor:"chocolate",id:Object(x.a)()},{title:"Storybook.stories",backgroundColor:"deeppink",id:Object(x.a)()},{title:"expect(Jest).toBe('yes')",backgroundColor:"coral",id:Object(x.a)()},{title:".get('https://REST.API')",backgroundColor:"lightblue",id:Object(x.a)()},{title:"GitHub",backgroundColor:"cornsilk",id:Object(x.a)()}]},He=a(105),Re=Object(D.c)({navigationReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NAVIGATION/TOGGLE-OPEN-NAV-LIST":return Object(M.a)({},e,{},t.payload);default:return e}},aboutReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NAVIGATION/TOGGLE-OPEN-NAV-LIST":return Object(M.a)({},e,{},t.payload);default:return e}},portfolioReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;return t.type,e},contactReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MIR/CONTACT/IS_LOADING":return Object(M.a)({},e,{},t.payload);default:return e}}}),We=Object(D.e)(Re,Object(D.a)(He.a));r.a.render(o.a.createElement(f.a,null,o.a.createElement(O.a,{store:We},o.a.createElement(xe,null))),document.getElementById("root"))},16:function(e,t,a){e.exports={about:"About_about__2mt8v",about__wrap:"About_about__wrap__3LuM0","about__info-wrap":"About_about__info-wrap__n7xMr","about__info-photo":"About_about__info-photo__1REee","about__info-data":"About_about__info-data__2AcPX","about__info-data-list":"About_about__info-data-list__QjNj2",about__line:"About_about__line__k1D37",about__skills:"About_about__skills__3oTSc","about__skills-title":"About_about__skills-title__2tsL0","about__skills-contents-list":"About_about__skills-contents-list__1LdfS","about__skills-contents-element":"About_about__skills-contents-element__2gsoD"}},23:function(e,t,a){e.exports={contact:"Contact_contact__SeM9j",contact__wrap:"Contact_contact__wrap__1ugbP",contact__content:"Contact_contact__content__kxPF9",contact__mainlinks:"Contact_contact__mainlinks__2trUW",contact__link:"Contact_contact__link__XSzxT","contact__link-span":"Contact_contact__link-span__dH9eb","contact__link-a":"Contact_contact__link-a__2jUUO",contact__form:"Contact_contact__form__2s6Px","contact__form-title":"Contact_contact__form-title__2vbDN"}},26:function(e,t,a){e.exports={navigation:"Navigation_navigation__11qCs",navigation__btn:"Navigation_navigation__btn__uWKnG","navigation__btn-active":"Navigation_navigation__btn-active__2wZ57",navigation__list:"Navigation_navigation__list__3p3lj","navigation__list-active":"Navigation_navigation__list-active__2jM-v","navigation__list-element":"Navigation_navigation__list-element__1hS_F","navigation__list-element-active":"Navigation_navigation__list-element-active__3GPiN",color:"Navigation_color__31QKE"}},36:function(e,t,a){e.exports={home:"Home_home__1lSeq",home__wrap:"Home_home__wrap__3BLS6",home__photo:"Home_home__photo__37W0K",home__content:"Home_home__content__2TrwT","home__content-hi":"Home_home__content-hi__pNvY-","home__content-name":"Home_home__content-name__2rAFT","home__content-about":"Home_home__content-about__3no9Z"}},54:function(e,t,a){e.exports={portfolio__element:"PortfolioElement_portfolio__element__qnOBv","portfolio__element-title":"PortfolioElement_portfolio__element-title__2ANxU","portfolio__element-wrap":"PortfolioElement_portfolio__element-wrap__2bOXK","portfolio__element-info":"PortfolioElement_portfolio__element-info__SP3wh","portfolio__element-canvas":"PortfolioElement_portfolio__element-canvas__2N3QH"}},56:function(e,t,a){e.exports={"error-path":"ErrorPath_error-path__n_sbW"}},57:function(e,t,a){e.exports={title:"Subtitle_title__3QsV-",title__line:"Subtitle_title__line__2uk37",title__text:"Subtitle_title__text__2ISGC"}},62:function(e,t,a){e.exports=a.p+"static/media/photoForAvatar.1aa6bd36.webp"},7:function(e,t,a){e.exports={form:"ContactFeedbackForm_form__1RmRP",form__row:"ContactFeedbackForm_form__row__3weym","form__row-error":"ContactFeedbackForm_form__row-error___SWjM",form__email:"ContactFeedbackForm_form__email__31cC-",form__name:"ContactFeedbackForm_form__name__3WNU_",form__description:"ContactFeedbackForm_form__description__Gnn0z",form__title:"ContactFeedbackForm_form__title__2KgoM","form__title-error":"ContactFeedbackForm_form__title-error__ZcnGr","form__description-error":"ContactFeedbackForm_form__description-error__3HI1y","form__name-error":"ContactFeedbackForm_form__name-error__3e4O4",form__button:"ContactFeedbackForm_form__button__7UZFY"}},74:function(e,t,a){e.exports={image:"Images_image__1z4g-",image__link:"Images_image__link__2eDSJ",image__photo:"Images_image__photo__6s9gS"}},75:function(e,t,a){e.exports={"down-arrow":"DownArrowSVG_down-arrow__1ZKcg"}},76:function(e,t,a){e.exports={title:"Title_title__2q7W9",title__second:"Title_title__second__16yia"}},77:function(e,t,a){e.exports={portfolio:"Portfolio_portfolio__3X4G6",portfolio__wrap:"Portfolio_portfolio__wrap__3VTnR",portfolio__content:"Portfolio_portfolio__content__2UUsk"}},95:function(e,t,a){e.exports={title:"TitleHeader_title__2fPXz"}},96:function(e,t,a){e.exports={element:"Element_element__2FaMA"}}},[[107,1,2]]]);
//# sourceMappingURL=main.5872a7ef.chunk.js.map