"use strict";(self.webpackChunkevent_storm_documentation=self.webpackChunkevent_storm_documentation||[]).push([[8432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={id:"bindings-api-usestorm",title:"useStorm",tags:["react","Event Storm","useStorm","bindings"],sidebar_position:1},o=void 0,s={unversionedId:"bindings/react/api-reference/bindings-api-usestorm",id:"bindings/react/api-reference/bindings-api-usestorm",title:"useStorm",description:"The storm inside react components can be used with the help of useStorm hook. Example:",source:"@site/docs/bindings/react/api-reference/useStorm.md",sourceDirName:"bindings/react/api-reference",slug:"/bindings/react/api-reference/bindings-api-usestorm",permalink:"/event-storm-documentation/docs/bindings/react/api-reference/bindings-api-usestorm",draft:!1,editUrl:"https://github.com/event-storm/event-storm-documentation/tree/main/bindings/react/api-reference/useStorm.md",tags:[{label:"react",permalink:"/event-storm-documentation/docs/tags/react"},{label:"Event Storm",permalink:"/event-storm-documentation/docs/tags/event-storm"},{label:"useStorm",permalink:"/event-storm-documentation/docs/tags/use-storm"},{label:"bindings",permalink:"/event-storm-documentation/docs/tags/bindings"}],version:"current",sidebarPosition:1,frontMatter:{id:"bindings-api-usestorm",title:"useStorm",tags:["react","Event Storm","useStorm","bindings"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API reference",permalink:"/event-storm-documentation/docs/category/api-reference-1"},next:{title:"usePublish",permalink:"/event-storm-documentation/docs/bindings/react/api-reference/bindings-api-usepublish"}},l={},u=[{value:"Arguments",id:"arguments",level:2},{value:"Returns",id:"returns",level:2},{value:"ISubscriptionOptions",id:"isubscriptionoptions",level:3},{value:"TSelectFragment",id:"tselectfragment",level:3},{value:"Arguments",id:"arguments-1",level:2},{value:"Returns",id:"returns-1",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The storm inside react components can be used with the help of ",(0,a.kt)("inlineCode",{parentName:"p"},"useStorm")," hook. Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createStore } from 'event-storm';\nimport { useStorm } from 'react-event-storm';\n\nconst store = createStore({\n  taxes: 20,\n  grossSalary: 100_000,\n});\n\nfunction AnyComponent() {\n  const { taxes } = useStorm(store);\n\n  return (\n    <div>{taxes}</div>\n  );\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useStorm<T, G extends any>(\n  store: IStorm<T>,\n  selectFragment?: TSelectFragment<T, G>,\n  options?: ISubscriptionOptions,\n): G\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"store - The first argument is the ",(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/storm"},"storm object")),(0,a.kt)("li",{parentName:"ul"},"selectFragment - The selector function can be provided to ",(0,a.kt)("inlineCode",{parentName:"li"},"useStorm"),". The function will receive the same arguments as the ",(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/storm#istormsubcription"},"storm subscribe")," function. Unlike the ",(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/storm#istormsubcription"},"storm subscribe"),", selectFragment must return a value. ",(0,a.kt)("strong",{parentName:"li"},"If the function is skipped the whole storm will be consumed"),"."),(0,a.kt)("li",{parentName:"ul"},"options - ",(0,a.kt)("a",{parentName:"li",href:"#isubscriptionoptions"},"ISusbcriptionOptions")," is the subscription actual configuration.")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useStorm")," will return the return value of ",(0,a.kt)("inlineCode",{parentName:"p"},"selectFragment")," argument call. Defaults to whole storm state."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useStorm")," hook will handle the unsubscribe process automatically on component unmount.")),(0,a.kt)("h3",{id:"isubscriptionoptions"},"ISubscriptionOptions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ISubscriptionOptions {\n  active?: boolean;\n}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"active"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274e"),(0,a.kt)("td",{parentName:"tr",align:null},"If set to ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," the value of the selector will be updated, but the component will not rerender. Defaults to ",(0,a.kt)("inlineCode",{parentName:"td"},"true"))))),(0,a.kt)("h3",{id:"tselectfragment"},"TSelectFragment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export type TFragmentSubscribe<K> = (fragment: IStormState<K>) => K;\nexport type TSelectFragment<T> = (\n  state: IStormState<T>,\n  subscribe: TFragmentSubscribe<T>,\n) => any;\n")),(0,a.kt)("h2",{id:"arguments-1"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"state - The first argument is last state of the storm object"),(0,a.kt)("li",{parentName:"ul"},"subscribe - Consider using this function to grap and construct any information on top of the storm state. ",(0,a.kt)("inlineCode",{parentName:"li"},"subscribe")," function can receive any part of the store, subscribe to that segment and return the last state of that segment. You can use the ",(0,a.kt)("inlineCode",{parentName:"li"},"subscribe")," function multiple times in one ",(0,a.kt)("inlineCode",{parentName:"li"},"selectFragment")," function.")),(0,a.kt)("h2",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"The return value of this function will be returned from the ",(0,a.kt)("inlineCode",{parentName:"p"},"useStorm")," hook."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Optmize the rerenders by subscribing(using ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe")," function) on the right portions of the storm")))}m.isMDXComponent=!0}}]);