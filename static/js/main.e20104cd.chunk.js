(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,a){e.exports=a(134)},109:function(e,t,a){},110:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(60),r=a.n(i),l=(a(109),a(3)),c="/home",s="/about",_="/portfolio",m="/contact",u=(a(110),a(36)),d=a.n(u),f=a(62),p=a.n(f),b=a(37),k=a(74),v=a.n(k),h=o.a.memo((function(e){var t=e.src,a=e.alt,n=e.title,i=e.link;return o.a.createElement("div",{className:v.a.image},o.a.createElement(b.b,{className:v.a.image__link,to:i,title:n},o.a.createElement("img",{className:v.a.image__photo,src:t,alt:a})))})),E=o.a.memo((function(e){return o.a.createElement("div",{className:d.a.home},o.a.createElement("div",{className:d.a.home__wrap},o.a.createElement("div",{className:d.a.home__photo},o.a.createElement(h,{src:p.a,alt:"my photo",title:"about me",link:s})),o.a.createElement("div",{className:d.a.home__content},o.a.createElement("div",{className:d.a["home__content-hi"]},"Hi `",o.a.createElement("span",null,"everybody"),"`!"),o.a.createElement("div",{className:d.a["home__content-name"]},"I'm ",o.a.createElement("span",null,"Postnikov Stanislav")),o.a.createElement("div",{className:d.a["home__content-about"]},"I'm Frontend Developer! I live in the Sankt-Petersburg. I like to write code and create understandably web-applications."))))})),g=a(56),N=a.n(g),y=function(e){var t=e.children,a=e.darkColor,n=e.lightColor,i=[N.a["error-path"]];return a&&!n&&i.push(N.a["dark-color"]),!a&&n&&i.push(N.a["light-color"]),a&&n&&i.push(N.a["light-color"]),o.a.createElement("div",{className:i.join(" ")},t)},O=a(13),w=a(26),j=a.n(w),C=a(75),T=a.n(C),x=o.a.memo((function(e){var t=e.colorArrow,a=void 0===t?"#FAFAFA":t,n=e.colorBody,i=void 0===n?"#2196F3":n,r=e.onClick,l=e.classNameForArrow,c=e.classNameForBody,s=[T.a["down-arrow"]],_=[T.a["down-arrow__arw"]],m=[T.a["down-arrow__body"]];return l&&_.push(l),c&&_.push(c),o.a.createElement("svg",{className:s.join(" "),onClick:function(e){r&&r(e)},version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 490.667 490.667"},o.a.createElement("path",{className:m.join(""),fill:i,d:"M245.333,0C109.839,0,0,109.839,0,245.333s109.839,245.333,245.333,245.333\r s245.333-109.839,245.333-245.333C490.514,109.903,380.764,0.153,245.333,0z"}),o.a.createElement("path",{className:_.join(""),fill:a,d:"M317.867,221.867l-19.2,19.2V117.333c0-29.455-23.878-53.333-53.333-53.333S192,87.878,192,117.333\r v123.584l-19.2-19.2c-19.139-18.289-49.277-18.289-68.416,0c-18.889,18.894-18.889,49.522,0,68.416l118.251,118.251\r c12.496,12.492,32.752,12.492,45.248,0l118.251-118.251c18.889-18.894,18.889-49.522,0-68.416\r C366.975,203.565,336.946,203.631,317.867,221.867z"}))})),M=a(135),A=o.a.memo((function(e){var t=e.isOpen,a=e.toggleOpenNavList,i=e.navElements,r=[j.a.navigation__list],l=[j.a.navigation__btn],c=[j.a["navigation__list-element"]],s=Object(n.useMemo)((function(){return i.map((function(e){return o.a.createElement("li",{key:Object(M.a)()},o.a.createElement(b.b,{className:c.join(" "),to:e.link,activeClassName:j.a["navigation__list-element-active"],onClick:function(){a(!t)}},e.title.toLocaleUpperCase()))}))}),[c,i,a,t]);return t&&r.push(j.a["navigation__list-active"]),t&&l.push(j.a["navigation__btn-active"]),o.a.createElement("nav",{className:j.a.navigation},o.a.createElement("span",{className:l.join(" ")},o.a.createElement(x,{onClick:function(){a(!t)},classNameForArrow:t?j.a.color:"",colorBody:"transparent"})),o.a.createElement("ul",{className:r.join(" ")},s))})),F=function(e){return e.navigationReducer.isOpenNav},I=function(e){return e.navigationReducer.navElements},S=a(51),G={isOpenNav:!1,navElements:[{title:"Home",link:c},{title:"About",link:s},{title:"Portfolio",link:_},{title:"Contact",link:m}]},L=function(e){return{type:"NAVIGATION/TOGGLE-OPEN-NAV-LIST",payload:{isOpenNav:e}}},D=function(e){var t=Object(O.c)(),a=Object(O.d)(F),n=Object(O.d)(I);return o.a.createElement(A,{isOpen:a,navElements:n,toggleOpenNavList:function(e){return t(L(e))}})},P=a(33),R=a(16),H=a.n(R),V=a(57),B=a.n(V),Y=o.a.memo((function(e){var t=e.subtitle;return o.a.createElement("div",{className:B.a.title},o.a.createElement("span",{className:B.a.title__line}),o.a.createElement("span",{className:B.a.title__text},t),o.a.createElement("span",{className:B.a.title__line}))})),q=a(76),z=a.n(q),Q=o.a.memo((function(e){var t=e.title,a=Object(n.useMemo)((function(){return t.split(" ").slice(0,1)+" "}),[t]),i=Object(n.useMemo)((function(){return t.split(" ").slice(1)}),[t]);return o.a.createElement("div",{className:z.a.title},o.a.createElement("span",{className:z.a.title__first},a),o.a.createElement("span",{className:z.a.title__second},i))})),J=a(95),W=a.n(J),X=o.a.memo((function(e){var t=e.title,a=e.subtitle;return o.a.createElement("div",{className:W.a.title},o.a.createElement(Q,{title:t}),o.a.createElement(Y,{subtitle:a}))})),K=a(96),U=a.n(K),Z=o.a.memo((function(e){var t=e.title,a=e.value,n=e.isLink,i=e.link;return o.a.createElement("li",{className:U.a.element},t,n?o.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},a):o.a.createElement("span",null,a))})),$=o.a.memo((function(e){var t=e.infoDates,a=e.listSkillsDates,i=Object(n.useMemo)((function(){return t.map((function(e){return o.a.createElement(Z,{key:e.id,value:e.value,title:e.key})}))}),[t]),r=Object(n.useMemo)((function(){return a.map((function(e){return o.a.createElement("li",{key:e.id,className:H.a["about__skills-contents-element"],style:{backgroundColor:e.backgroundColor}},"".concat(e.title))}))}),[a]);return o.a.createElement("div",{className:H.a.about},o.a.createElement("div",{className:H.a.about__wrap},o.a.createElement(X,{title:"About Me",subtitle:"Today you make the code, tomorrow the code makes you money"}),o.a.createElement("div",{className:H.a["about__info-wrap"]},o.a.createElement("div",{className:H.a["about__info-photo"]},o.a.createElement("img",{src:p.a,alt:""})),o.a.createElement("div",{className:H.a["about__info-data"]},o.a.createElement("ul",{className:H.a["about__info-data-list"]},i))),o.a.createElement("div",{className:H.a.about__line}),o.a.createElement("div",{className:H.a.about__skills},o.a.createElement("div",{className:H.a["about__skills-title"]},"Skills"),o.a.createElement("div",{className:H.a["about__skills-contents"]},o.a.createElement("ul",{className:H.a["about__skills-contents-list"]},r)))))})),ee=function(e){return e.aboutReducer.infoDates},te=function(e){return e.aboutReducer.listSkillsDates},ae=o.a.memo((function(e){var t=e.infoDates,a=e.listSkillsDates;return o.a.createElement($,{infoDates:t,listSkillsDates:a})})),ne=Object(P.d)(Object(O.b)((function(e){return{infoDates:ee(e),listSkillsDates:te(e)}}),{}))(ae),oe=a(103),ie=a(58),re=a(7),le=a.n(re),ce=o.a.memo((function(e){var t=e.onSubmit,a={initialValues:{name:"",email:"",description:""},onSubmit:function(e,a){var n=a.resetForm;t(e),n()},validationSchema:ie.a({name:ie.b().required().max(24,"Max count symbols ".concat(24)),email:ie.b().email().max(50,"Max count symbols ".concat(50)),description:ie.b().required().max(300,"Max count symbols ".concat(300))})},n=Object(oe.a)(a);return o.a.createElement("form",{className:le.a.form,onSubmit:n.handleSubmit},o.a.createElement("label",{className:le.a.form__row},o.a.createElement("span",{className:le.a.form__title+" ".concat(n.errors.name?le.a["form__title-error"]:"")},"Your name"),o.a.createElement("input",{className:le.a.form__name+" ".concat(n.errors.name?le.a["form__name-error"]:""),type:"text",name:"name",onChange:n.handleChange,value:n.values.name}),n.errors.name&&o.a.createElement("span",{className:le.a["form__row-error"]},"*",n.errors.name)),o.a.createElement("label",{className:le.a.form__row},o.a.createElement("span",{className:le.a.form__title},"Your email"),o.a.createElement("input",{className:le.a.form__email,type:"text",name:"email",onChange:n.handleChange,value:n.values.email}),n.errors.email&&o.a.createElement("span",{className:le.a["form__row-error"]},"*",n.errors.email)),o.a.createElement("label",{className:le.a.form__row},o.a.createElement("span",{className:le.a.form__title+" ".concat(n.errors.description?le.a["form__title-error"]:"")},"Your Comment"),o.a.createElement("textarea",{className:le.a.form__description+" ".concat(n.errors.name?le.a["form__description-error"]:""),name:"description",onBlur:function(e){return function(e){""===e.currentTarget.value.trim()&&(e.currentTarget.style.minHeight="50px")}(e)},onScroll:function(e){return function(e){var t=e.currentTarget.scrollHeight,a=+e.currentTarget.style.height;t>a&&(a+=t-a,e.currentTarget.style.minHeight="".concat(a,"px"))}(e)},onChange:function(e){return function(e){n.handleChange(e)}(e)},value:n.values.description}),n.errors.description&&o.a.createElement("span",{className:le.a["form__row-error"]},"*",n.errors.description)),o.a.createElement("button",{className:le.a.form__button,type:"submit"},"Send"))})),se=a(23),_e=a.n(se),me=o.a.memo((function(e){var t=e.onSubmitContactFeedbackForm,a=e.contactElements,i=Object(n.useMemo)((function(){return a.map((function(e){return o.a.createElement("li",{key:e.id,className:_e.a.contact__link},o.a.createElement("span",{className:_e.a["contact__link-span"]},e.title),o.a.createElement("a",{href:e.link,className:_e.a["contact__link-a"],target:"_blank",rel:"noopener noreferrer"},e.linkTitle))}))}),[a]);return o.a.createElement("div",{className:_e.a.contact},o.a.createElement("div",{className:_e.a.contact__wrap},o.a.createElement(X,{title:"My \u0441ontact",subtitle:"Magic ceases to exist after you understand how it works."}),o.a.createElement("div",{className:_e.a.contact__content},o.a.createElement("ul",{className:_e.a.contact__mainlinks},i),o.a.createElement("div",{className:_e.a.contact__form},o.a.createElement("div",{className:_e.a["contact__form-title"]},"If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly."),o.a.createElement(ce,{onSubmit:t})))))})),ue=a(84),de=a.n(ue),fe=a(100),pe=a(101),be=a.n(pe).a.create({baseURL:"https://api.telegram.org/bot".concat("951359730:AAGrNQVOTlr5qKWhyk_fKySVyxEJQ1PB7Wo","/")}),ke=function(e){return be.post("sendMessage?chat_id=".concat("400864056","&text=").concat(e)).then((function(e){if(e.status>400)throw Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u0441\u0442\u0430\u0442\u0443\u0441 \u043e\u0448\u0438\u0431\u043a\u0438 \u0431\u043e\u043b\u044c\u0448\u0435 400");if("OK"!==e.statusText)throw Error("data.statusText !== `OK`");return e.data})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 POST \u0437\u0430\u043f\u0440\u043e\u0441\u0435, \u0432 sendMessagesApi \u043c\u0435\u0442\u043e\u0434\u0430 sendMessage"),console.log("\u041e\u0448\u0438\u0431\u043a\u0430/Error: "+e)}))},ve={isLoading:!1,contactElements:[{id:Object(M.a)(),title:"Telegram",linkTitle:"t.me/mirudistok",link:"https://t.me/mirudistok"},{id:Object(M.a)(),title:"Vk",linkTitle:"vk.com/mirudistok",link:"https://vk.com/mirudistok"},{id:Object(M.a)(),title:"Instagram",linkTitle:"instagram.com/postnikov_st",link:"https://www.instagram.com/postnikov_st/"},{id:Object(M.a)(),title:"Linkedin",linkTitle:"linkedin.com/in/stanislav-postnikov-6220331b7/",link:"https://www.linkedin.com/in/stanislav-postnikov-6220331b7/"},{id:Object(M.a)(),title:"Twitter",linkTitle:"https://twitter.com/postnikov_st",link:"https://twitter.com/postnikov_st"},{id:Object(M.a)(),title:"GitHub",linkTitle:"github.com/mirudistok32",link:"https://github.com/mirudistok32"}]},he=function(e){return{type:"MIR/CONTACT/IS_LOADING",payload:{isLoading:e}}},Ee=function(e){return e.contactReducer.contactElements},ge=o.a.memo((function(e){var t=Object(O.c)(),a=Object(O.d)(Ee),i=Object(n.useCallback)((function(e){t(function(e){return function(){var t=Object(fe.a)(de.a.mark((function t(a){return de.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(he(!0)),t.next=3,ke(e);case 3:a(he(!0));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[t]),r=Object(n.useCallback)((function(e){var t=e.name,a=e.description,n=e.email,o="\u041f\u0440\u0438\u0432\u0435\u0442! \u042d\u0442\u043e \u0444\u0438\u0442\u0431\u0435\u043a \u0438\u0437 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e! { \u041a\u0442\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u043b: ".concat(t," }\n        { \u0415\u0451/\u0415\u0433\u043e email: ").concat(n," } { \u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439: ").concat(a," }\n        ");i(o)}),[i]);return o.a.createElement(me,{onSubmitContactFeedbackForm:r,contactElements:a})})),Ne=a(54),ye=a.n(Ne),Oe=o.a.memo((function(e){var t=e.mainTitle,a=e.listsInfo,i=e.iframeLink,r=e.iframeTitle,l=Object(n.useMemo)((function(){return a.map((function(e){return o.a.createElement(Z,{key:e.id,title:e.keyTitle,value:e.valueTitle,isLink:e.isLink,link:e.link})}))}),[a]);return o.a.createElement("div",{className:ye.a.portfolio__element},o.a.createElement("div",{className:ye.a["portfolio__element-title"]},t),o.a.createElement("div",{className:ye.a["portfolio__element-wrap"]},o.a.createElement("div",{className:ye.a["portfolio__element-info"]},l),o.a.createElement("div",{className:ye.a["portfolio__element-canvas"]},o.a.createElement("iframe",{allowFullScreen:!0,src:i,title:r}))))})),we=a(77),je=a.n(we),Ce=o.a.memo((function(e){var t=e.portfolioInfoProjectDatas,a=Object(n.useMemo)((function(){return t.map((function(e){var t=e.id,a=e.iframeLink,n=e.iframeTitle,i=e.listsInfo,r=e.mainTitle;return o.a.createElement(Oe,{key:t,iframeLink:a,iframeTitle:n,listsInfo:i,mainTitle:r})}))}),[t]);return o.a.createElement("div",{className:je.a.portfolio},o.a.createElement("div",{className:je.a.portfolio__wrap},o.a.createElement(X,{title:"My portfolio",subtitle:"In theory, theory and practice are inseparable. In practice, this is not the case."}),o.a.createElement("div",{className:je.a.portfolio__content},a)))})),Te=function(e){return e.portfolioReducer.portfolioInfoProjectDatas},xe=o.a.memo((function(e){var t=Object(O.d)(Te);return o.a.createElement(Ce,{portfolioInfoProjectDatas:t})}));var Me=function(){return o.a.createElement("div",{className:"app"},o.a.createElement(D,null),o.a.createElement("div",{className:"app__wrap"},o.a.createElement("div",{className:"app__content"},o.a.createElement(l.d,null,o.a.createElement(l.b,{exact:!0,path:"/",render:function(){return o.a.createElement(l.a,{to:c})}}),o.a.createElement(l.b,{exact:!0,path:c,render:function(){return o.a.createElement(E,null)}}),o.a.createElement(l.b,{exact:!0,path:s,render:function(){return o.a.createElement(ne,null)}}),o.a.createElement(l.b,{exact:!0,path:_,render:function(){return o.a.createElement(xe,null)}}),o.a.createElement(l.b,{exact:!0,path:m,render:function(){return o.a.createElement(ge,null)}}),o.a.createElement(l.b,{render:function(){return o.a.createElement(y,{children:"Error path!"})}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ae={portfolioInfoProjectDatas:[{mainTitle:"ClickMeGame",id:Object(M.a)(),listsInfo:[{keyTitle:"Link",valueTitle:"https://mirudistok32.github.io/ClickMeGame/",isLink:!0,link:"https://mirudistok32.github.io/ClickMeGame/",id:Object(M.a)()},{keyTitle:"GitHub",valueTitle:"https://github.com/Mirudistok32/ClickMeGame/",isLink:!0,link:"https://github.com/Mirudistok32/ClickMeGame/",id:Object(M.a)()},{keyTitle:"Description",valueTitle:"ClickMeGame - \u044d\u0442\u043e \u043c\u0438\u043d\u0438-\u0438\u0433\u0440\u0430, \u0446\u0435\u043b\u044c \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0443\u0437\u043d\u0430\u0442\u044c, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u044b \u0443\u0441\u043f\u0435\u0435\u0442\u0435 \u043a\u043b\u0438\u043a\u043d\u0443\u0442\u044c \u043f\u043e \u043a\u043d\u043e\u043f\u043a\u0435 'Click' \u0437\u0430 10 \u0441\u0435\u043a\u0443\u043d\u0434",id:Object(M.a)()},{keyTitle:"Technologies",valueTitle:"#react, #javascript, #html, #css, #hooks",id:Object(M.a)()}],iframeTitle:"ClickMeGame",iframeLink:"https://mirudistok32.github.io/ClickMeGame/"},{mainTitle:"ClickMeGame",id:Object(M.a)(),listsInfo:[{keyTitle:"Link",valueTitle:"https://mirudistok32.github.io/ClickMeGame/",isLink:!0,link:"https://mirudistok32.github.io/ClickMeGame/",id:Object(M.a)()},{keyTitle:"GitHub",valueTitle:"https://github.com/Mirudistok32/ClickMeGame/",isLink:!0,link:"https://github.com/Mirudistok32/ClickMeGame/",id:Object(M.a)()},{keyTitle:"Description",valueTitle:"ClickMeGame - \u044d\u0442\u043e \u043c\u0438\u043d\u0438-\u0438\u0433\u0440\u0430, \u0446\u0435\u043b\u044c \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0443\u0437\u043d\u0430\u0442\u044c, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u044b \u0443\u0441\u043f\u0435\u0435\u0442\u0435 \u043a\u043b\u0438\u043a\u043d\u0443\u0442\u044c \u043f\u043e \u043a\u043d\u043e\u043f\u043a\u0435 'Click' \u0437\u0430 10 \u0441\u0435\u043a\u0443\u043d\u0434",id:Object(M.a)()},{keyTitle:"Technologies",valueTitle:"#react, #javascript, #html, #css, #hooks",id:Object(M.a)()}],iframeTitle:"ClickMeGame",iframeLink:"https://mirudistok32.github.io/ClickMeGame/"}]},Fe={infoDates:[{key:"First Name",value:"Stanislav",id:Object(M.a)()},{key:"Last Name",value:"Postnikov",id:Object(M.a)()},{key:"Birthdate",value:"31 may 1996",id:Object(M.a)()},{key:"Phone",value:"+7 951 659 01 65",id:Object(M.a)()},{key:"Nationality",value:"Russion",id:Object(M.a)()},{key:"Adress",value:"Sankt-Petersburg",id:Object(M.a)()},{key:"Experience",value:"1 year",id:Object(M.a)()},{key:"Langages",value:"Russion, English",id:Object(M.a)()},{key:"Email",value:"mirudistok32@gmail.com",id:Object(M.a)()}],listSkillsDates:[{title:"<React />",backgroundColor:"dodgerblue",id:Object(M.a)()},{title:"createStore(Redux)",backgroundColor:"mediumslateblue",id:Object(M.a)()},{title:"{ javascript }",backgroundColor:"gold",id:Object(M.a)()},{title:"type Typescript",backgroundColor:"deepskyblue",id:Object(M.a)()},{title:"css {}",backgroundColor:"moccasin",id:Object(M.a)()},{title:"<html></html>",backgroundColor:"chocolate",id:Object(M.a)()},{title:"Storybook.stories",backgroundColor:"deeppink",id:Object(M.a)()},{title:"expect(Jest).toBe('yes')",backgroundColor:"coral",id:Object(M.a)()},{title:".get('https://REST.API')",backgroundColor:"lightblue",id:Object(M.a)()},{title:"GitHub",backgroundColor:"cornsilk",id:Object(M.a)()}]},Ie=a(102),Se=Object(P.c)({navigationReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NAVIGATION/TOGGLE-OPEN-NAV-LIST":return Object(S.a)({},e,{},t.payload);default:return e}},aboutReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NAVIGATION/TOGGLE-OPEN-NAV-LIST":return Object(S.a)({},e,{},t.payload);default:return e}},portfolioReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;return t.type,e},contactReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MIR/CONTACT/IS_LOADING":return Object(S.a)({},e,{},t.payload);default:return e}}}),Ge=Object(P.e)(Se,Object(P.a)(Ie.a));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b.a,null,o.a.createElement(O.a,{store:Ge},o.a.createElement(Me,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},16:function(e,t,a){e.exports={about:"About_about__rpeEz",about__wrap:"About_about__wrap__2RIa9","about__info-wrap":"About_about__info-wrap__3DTfX","about__info-photo":"About_about__info-photo__vepuA","about__info-data":"About_about__info-data__3OFUP","about__info-data-list":"About_about__info-data-list__j3cDv",about__line:"About_about__line__2ABDe",about__skills:"About_about__skills__ihvjN","about__skills-title":"About_about__skills-title__1ibAZ","about__skills-contents-list":"About_about__skills-contents-list__3vNn4","about__skills-contents-element":"About_about__skills-contents-element__XzCF8"}},23:function(e,t,a){e.exports={contact:"Contact_contact__39iwm",contact__wrap:"Contact_contact__wrap__37n7a",contact__content:"Contact_contact__content__2dMHm",contact__mainlinks:"Contact_contact__mainlinks__1Z1RT",contact__link:"Contact_contact__link__3t8X8","contact__link-span":"Contact_contact__link-span__1U_D0","contact__link-a":"Contact_contact__link-a__2tpm6",contact__form:"Contact_contact__form__1coNW","contact__form-title":"Contact_contact__form-title__3Tpfs"}},26:function(e,t,a){e.exports={navigation:"Navigation_navigation__FdEed",navigation__btn:"Navigation_navigation__btn__B67a9","navigation__btn-active":"Navigation_navigation__btn-active__28gtE",navigation__list:"Navigation_navigation__list__fp9RH","navigation__list-active":"Navigation_navigation__list-active__3yMSZ","navigation__list-element":"Navigation_navigation__list-element__18z6M","navigation__list-element-active":"Navigation_navigation__list-element-active__Iqicj",color:"Navigation_color__3sCkb"}},36:function(e,t,a){e.exports={home:"Home_home__IyEKT",home__wrap:"Home_home__wrap__sfOuj",home__photo:"Home_home__photo__2A9Rh",home__content:"Home_home__content__3YQek","home__content-hi":"Home_home__content-hi__VcoxG","home__content-name":"Home_home__content-name__3J_4N","home__content-about":"Home_home__content-about__3BDme"}},54:function(e,t,a){e.exports={portfolio__element:"PortfolioElement_portfolio__element__2LWwO","portfolio__element-title":"PortfolioElement_portfolio__element-title__3yY14","portfolio__element-wrap":"PortfolioElement_portfolio__element-wrap__3fHgD","portfolio__element-info":"PortfolioElement_portfolio__element-info__1q0Ie","portfolio__element-canvas":"PortfolioElement_portfolio__element-canvas__3qoc1"}},56:function(e,t,a){e.exports={"error-path":"ErrorPath_error-path__yVmX8"}},57:function(e,t,a){e.exports={title:"Subtitle_title__31ojp",title__line:"Subtitle_title__line__2-CaY",title__text:"Subtitle_title__text___Zg5y"}},62:function(e,t,a){e.exports=a.p+"static/media/photoForAvatar.384a8094.png"},7:function(e,t,a){e.exports={form:"ContactFeedbackForm_form__1LYrf",form__row:"ContactFeedbackForm_form__row__bplf7","form__row-error":"ContactFeedbackForm_form__row-error__2k1ao",form__email:"ContactFeedbackForm_form__email__QNoq4",form__name:"ContactFeedbackForm_form__name___htJL",form__description:"ContactFeedbackForm_form__description__1pgS3",form__title:"ContactFeedbackForm_form__title__Qb3zx","form__title-error":"ContactFeedbackForm_form__title-error__1X6Yz","form__description-error":"ContactFeedbackForm_form__description-error__10Aew","form__name-error":"ContactFeedbackForm_form__name-error__TalfG",form__button:"ContactFeedbackForm_form__button__2m_iH"}},74:function(e,t,a){e.exports={image:"Images_image__RkmrE",image__link:"Images_image__link__1ySFM",image__photo:"Images_image__photo__2kmQn"}},75:function(e,t,a){e.exports={"down-arrow":"DownArrowSVG_down-arrow__3MjOA"}},76:function(e,t,a){e.exports={title:"Title_title__2MsYX",title__second:"Title_title__second__33PSs"}},77:function(e,t,a){e.exports={portfolio:"Portfolio_portfolio__1m80j",portfolio__wrap:"Portfolio_portfolio__wrap__3QxTv",portfolio__content:"Portfolio_portfolio__content__2udcf"}},95:function(e,t,a){e.exports={title:"TitleHeader_title__1D2sg"}},96:function(e,t,a){e.exports={element:"Element_element__16iu3"}}},[[104,1,2]]]);
//# sourceMappingURL=main.e20104cd.chunk.js.map