"use strict";(self.webpackChunkevent_storm_documentation=self.webpackChunkevent_storm_documentation||[]).push([[6262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,h=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={id:"model",title:"Model",tags:["api","model","api-reference"],sidebar_position:3},o=void 0,i={unversionedId:"api-reference/model",id:"api-reference/model",title:"Model",description:"Creating a single information unit. Use this method to have syncronized updates for all the subscribers.",source:"@site/docs/api-reference/model.md",sourceDirName:"api-reference",slug:"/api-reference/model",permalink:"/event-storm-documentation/docs/api-reference/model",draft:!1,editUrl:"https://github.com/event-storm/event-storm-documentation/tree/main/docs/api-reference/model.md",tags:[{label:"api",permalink:"/event-storm-documentation/docs/tags/api"},{label:"model",permalink:"/event-storm-documentation/docs/tags/model"},{label:"api-reference",permalink:"/event-storm-documentation/docs/tags/api-reference"}],version:"current",sidebarPosition:3,frontMatter:{id:"model",title:"Model",tags:["api","model","api-reference"],sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Storm",permalink:"/event-storm-documentation/docs/api-reference/storm"},next:{title:"Model with state derivation",permalink:"/event-storm-documentation/docs/api-reference/virtualmodel"}},d={},p=[{value:"createModel",id:"createmodel",level:2},{value:"Model value types",id:"model-value-types",level:3},{value:"Creating models with object values",id:"creating-models-with-object-values",level:3},{value:"Model internal structure",id:"model-internal-structure",level:3},{value:"Methods",id:"methods",level:3},{value:"IModel",id:"imodel",level:2},{value:"IModelOptions",id:"imodeloptions",level:3},{value:"ISubscriptionOption",id:"isubscriptionoption",level:3}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Creating a single information unit. Use this method to have syncronized updates for all the subscribers."),(0,r.kt)("admonition",{title:"Model type is not chaning the behaviour",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Even when proding object structure, model will allways update all the subscribers. For individual subscription use ",(0,r.kt)("a",{parentName:"p",href:"/event-storm-documentation/docs/api-reference/storm"},"storm"),".")),(0,r.kt)("h2",{id:"createmodel"},"createModel"),(0,r.kt)("h3",{id:"model-value-types"},"Model value types"),(0,r.kt)("p",null,"Model can accept any JS type."),(0,r.kt)("h3",{id:"creating-models-with-object-values"},"Creating models with object values"),(0,r.kt)("p",null,"Using an object value will result in updates on each key change. In other words the object's individual keys can\u2019t be consumed by that model."),(0,r.kt)("h3",{id:"model-internal-structure"},"Model internal structure"),(0,r.kt)("p",null,"Model itself internally keeps track of its lifecycle.\nModel has its own list of subscribers. Whenever you are using the subscribe method it will be checked whether it is already registered or not and if not, it will register(exactly push) the provided function to the models internal subscribers list. The subscribe function will return a function. You can call that function to unsubscribe from the model.\nModel keeps the options list provided at the creation time. In order to update model's options you can use the ",(0,r.kt)("a",{parentName:"p",href:"#imodel"},"setOptions method"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createModel } from 'event-storm';\n\nconst userModel = createModel({});\n")),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createModel"),(0,r.kt)("td",{parentName:"tr",align:null},"<","T>(value?: T, option?: ",(0,r.kt)("a",{parentName:"td",href:"#imodeloptions"},"IModelOptions"),") => ",(0,r.kt)("a",{parentName:"td",href:"#imodel"},"IModel"),"<","T>"),(0,r.kt)("td",{parentName:"tr",align:null},"Calling this method will return a ",(0,r.kt)("a",{parentName:"td",href:"#imodel"},"model"),". The first argument is the default state of the model. The second argument is the model default ",(0,r.kt)("a",{parentName:"td",href:"#imodeloptions"},"option"),".")))),(0,r.kt)("h2",{id:"imodel"},"IModel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IModel<T, G extends IModelOption = IModelOption> {\n  getState: () => T;\n  setOptions: (options: G) => void;\n  dispatch: (value: T, options?: IModelOption) => void | Promise<void>;\n  subscribe: (callback: (nextValue: T) => void, options?: ISubscriptionOptions<T>) => () => void;\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getState"),(0,r.kt)("td",{parentName:"tr",align:null},"() => any"),(0,r.kt)("td",{parentName:"tr",align:null},"The method returns the fresh state of the model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"(option: ",(0,r.kt)("a",{parentName:"td",href:"#imodeloptions"},"IModelOptions"),") => void"),(0,r.kt)("td",{parentName:"tr",align:null},"The model option can be changed at any time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dispatch"),(0,r.kt)("td",{parentName:"tr",align:null},"(value: any, option?: ",(0,r.kt)("a",{parentName:"td",href:"#imodeloptions"},"IModelOptions"),") => void) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Promise","<","void>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscribe"),(0,r.kt)("td",{parentName:"tr",align:null},"(callback: (nextValue: any, options?: ",(0,r.kt)("a",{parentName:"td",href:"#imodeloptions"},"IModelOptions"),") => void, option?: ",(0,r.kt)("a",{parentName:"td",href:"#isubscriptionoptions"},"ISubscriptionOptions"),"<","T>) => () => void"),(0,r.kt)("td",{parentName:"tr",align:null},"The method receive a callback. On each model update the receive the callback will be fired with the last updated value. When firing, the callback will be provided with second argument(if exists). The second argument is the same option with triggered the model state change(i.e. dispatch configurations).")))),(0,r.kt)("h3",{id:"imodeloptions"},"IModelOptions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IModelConfiguration {\n  fireDuplicates?: boolean;\n  [key: string]: any;\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fireDuplicates"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274e"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," the model will propagate on duplicate changes. It's ",(0,r.kt)("strong",{parentName:"td"},"NOT recommended")," to use and rely on this option. Most likely if the code depends on the duplicated event it needs to be refactored. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[key: string]"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274e"),(0,r.kt)("td",{parentName:"tr",align:null},"You can provide your own options")))),(0,r.kt)("h3",{id:"isubscriptionoption"},"ISubscriptionOption"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ISubscriptionOptions {\n  needPrevious?: boolean;\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"needPrevious"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274e"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," the model will make the subscription callback run immediately. The subscription callback will receive the last state of the model. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))))))}m.isMDXComponent=!0}}]);