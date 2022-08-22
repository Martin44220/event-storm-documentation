"use strict";(self.webpackChunkevent_storm_documentation=self.webpackChunkevent_storm_documentation||[]).push([[4268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=i,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var m=2;m<r;m++)a[m]=n[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var o=n(7462),i=(n(7294),n(3905));const r={id:"terminology",title:"The terminology",tags:["terminology","glossary","structure"],sidebar_position:2},a=void 0,s={unversionedId:"terminology",id:"terminology",title:"The terminology",description:"The Event Storm is based on event sourcing technology. To organize such a system you need to define what is the information that needs to be considered as a source.",source:"@site/docs/terminology.md",sourceDirName:".",slug:"/terminology",permalink:"/event-storm-documentation/docs/terminology",draft:!1,editUrl:"https://github.com/event-storm/event-storm-documentation/tree/main/docs/terminology.md",tags:[{label:"terminology",permalink:"/event-storm-documentation/docs/tags/terminology"},{label:"glossary",permalink:"/event-storm-documentation/docs/tags/glossary"},{label:"structure",permalink:"/event-storm-documentation/docs/tags/structure"}],version:"current",sidebarPosition:2,frontMatter:{id:"terminology",title:"The terminology",tags:["terminology","glossary","structure"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Motivation",permalink:"/event-storm-documentation/docs/motivation"},next:{title:"The bigger picture",permalink:"/event-storm-documentation/docs/concepts/overview"}},l={},m=[{value:"Model",id:"model",level:3},{value:"VirtualModel",id:"virtualmodel",level:3},{value:"Update(updating the information/model)",id:"updateupdating-the-informationmodel",level:3},{value:"Dispatch",id:"dispatch",level:3},{value:"Subscription",id:"subscription",level:3},{value:"Storm",id:"storm",level:3}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Event Storm is based on event sourcing technology. To organize such a system you need to define what is the information that needs to be considered as a source. "),(0,i.kt)("admonition",{title:"What to understand as context?",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Information in this context, means the user specified information unit. For the current technology it doesn't matter if the information is a single atomic or complex object structure, the only thing which matters is the user intentional definition.")),(0,i.kt)("p",null,"Information specifications:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can be updated during the time"),(0,i.kt)("li",{parentName:"ul"},"You can subscribe to the changes of that information updates"),(0,i.kt)("li",{parentName:"ul"},"Can be combined with other information to construct a bigger information segment. The last means that you can derive the information's current state(state here basically means the value of the information).")),(0,i.kt)("p",null,"To manage the changes and subscriptions of the models, Event Storm library implements a pubsub technology."),(0,i.kt)("h3",{id:"model"},"Model"),(0,i.kt)("p",null,"To fit the above requirements, the Event Storm library has defined a programming interface for that information. This interface is called a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/api-reference/model"},"model")),". Model is the single observable entity inside the library. ",(0,i.kt)("strong",{parentName:"p"},"It is not possible to split the model into peaces"),". Defining a model means identifying the provided information a part of the same business model, entity, domain.\nIn the documentation context when saying ",(0,i.kt)("strong",{parentName:"p"},"model"),", we refer to this object structure."),(0,i.kt)("h3",{id:"virtualmodel"},"VirtualModel"),(0,i.kt)("p",null,"As mentioned in the main section, models can be combined to construct bigger information segments. To keep the developer experience the same and manage models composition the Event Storm library is providing ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/virtualModel"},"createVirtualModel")," function.\nWhy do you need to combine the existing models? The principle of single source of truth, and event sourcing in general, suggesting you to keep the information source and it's management in a single place(memory segment). The ",(0,i.kt)("strong",{parentName:"p"},"virtual model")," is using existing information to create a higher level abstraction on top of that, in other words, deriving the existing information.\nWhen working with virtual model it's better to thing of a process than an information unit. The deriviation process, information processing and information presentation are coupled within the virtual model. "),(0,i.kt)("h3",{id:"updateupdating-the-informationmodel"},"Update(updating the information/model)"),(0,i.kt)("p",null,'The change of the information over the time is called update. Defining a model per se means that the model itself will evolve during some managable time frame(If the last is not the case, you can define the information as constant instead). Moreever, in the library context saying "update", also has consequence of updating all the ',(0,i.kt)("a",{parentName:"p",href:"#subscription"},"subscribers"),"."),(0,i.kt)("h3",{id:"dispatch"},"Dispatch"),(0,i.kt)("p",null,"As the model must be updated the library is providing a method called ",(0,i.kt)("strong",{parentName:"p"},"dispatch"),' for that needs. "Dispatching an update" in this context means chaning the actual state of the model. Any model change will cause the ',(0,i.kt)("a",{parentName:"p",href:"#subscription"},"subscribers")," to be notified"),(0,i.kt)("h3",{id:"subscription"},"Subscription"),(0,i.kt)("p",null,"Generally saying ",(0,i.kt)("strong",{parentName:"p"},"subscription"),' is receiving some information(maybe something) over some agreement. According to the definition the act of subscription is based on particular subscription subject. Which basically means, that the owner of the subscription must receive an information, if and only if, the particular subject has been changed. Furthermore, the owner of the subject must not be even "disturbed", for any other reason.'),(0,i.kt)("p",null,"Coming to the computer sceince. In CS the above can be described as a regular situation between observer and consumer on observable subject. Either it can be the event, subcriber and subscription. "),(0,i.kt)("p",null,"As the information is provided with ",(0,i.kt)("a",{parentName:"p",href:"#model"},"model")," abstraction, the ",(0,i.kt)("strong",{parentName:"p"},"subscription")," is an ability of model. So each model will have a method to be subscribed. Any ",(0,i.kt)("a",{parentName:"p",href:"#update"},"update")," or ",(0,i.kt)("a",{parentName:"p",href:"#dispatch"},"dipsatch")," process will cause the model subscription to run with the model's last state."),(0,i.kt)("h3",{id:"storm"},"Storm"),(0,i.kt)("p",null,"When dealing with a more generic state of a complex system(e.g. application), the ",(0,i.kt)("strong",{parentName:"p"},"model")," abstraction is making a lot of boilerplate inside the codebase. Managing a lot of minimal state's and their combination is not the best idea to go with. The ",(0,i.kt)("strong",{parentName:"p"},"storm")," is the simplified abstraction for creating multiple models at once. The ",(0,i.kt)("strong",{parentName:"p"},"storm")," is contructed from smaller information units and ",(0,i.kt)("strong",{parentName:"p"},"is not itself the information source"),". Right the opposite, the storm combines the infromation of the models and provides one unique interface to work with that models.\nStorm has always a tree structure. ",(0,i.kt)("strong",{parentName:"p"},"It is possible to subscribe to each node")," of the storm individually.\nAs an information presentation, the storm, provides similiar abstraction for managing the underlying models - ",(0,i.kt)("a",{parentName:"p",href:"#subscription"},"subscription")," and ",(0,i.kt)("a",{parentName:"p",href:"#dispatch"},"dispatching"),"."))}d.isMDXComponent=!0}}]);