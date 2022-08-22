"use strict";(self.webpackChunkevent_storm_documentation=self.webpackChunkevent_storm_documentation||[]).push([[2018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),o=n(7294),r=n(6010),s=n(2389),i=n(7392),l=n(7094),c=n(2466);const u="tabList__CuJ",m="tabItem_LNqP";function p(e){var t,n;const{lazy:s,block:p,defaultValue:d,values:h,groupId:g,className:f}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,i.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===d?d:null!=(t=null!=d?d:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,l.U)(),[x,T]=(0,o.useState)(y),S=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=g){const e=w[g];null!=e&&e!==x&&v.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,n=S.indexOf(t),a=v[n].value;a!==x&&(E(t),T(a),null!=g&&N(g,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=S.indexOf(e.currentTarget)+1;n=null!=(a=S[t])?a:S[0];break}case"ArrowLeft":{var o;const t=S.indexOf(e.currentTarget)-1;n=null!=(o=S[t])?o:S[S.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},f)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>S.push(e),onKeyDown:I,onFocus:j,onClick:j},s,{className:(0,r.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),s?(0,o.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,s.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},1872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=n(7462),o=(n(7294),n(3905)),r=n(5488),s=n(5162);const i={id:"motivation",title:"Motivation",tags:["motivation"],sidebar_position:2},l=void 0,c={unversionedId:"motivation",id:"motivation",title:"Motivation",description:"In the modern world data storage is an inseparable component of most applications. There are various problems crossing the same issue of having efficient data storage(caching, application state management, databases, etc.).",source:"@site/docs/motivation.mdx",sourceDirName:".",slug:"/motivation",permalink:"/event-storm-documentation/docs/motivation",draft:!1,editUrl:"https://github.com/event-storm/event-storm-documentation/tree/main/docs/motivation.mdx",tags:[{label:"motivation",permalink:"/event-storm-documentation/docs/tags/motivation"}],version:"current",sidebarPosition:2,frontMatter:{id:"motivation",title:"Motivation",tags:["motivation"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/event-storm-documentation/docs/introduction"},next:{title:"The terminology",permalink:"/event-storm-documentation/docs/terminology"}},u={},m=[{value:"Diving deeper",id:"diving-deeper",level:2},{value:"The problem",id:"the-problem",level:2},{value:"Subscription",id:"subscription",level:3},{value:"Data ownership",id:"data-ownership",level:3},{value:"What Event Storm can suggest?",id:"what-event-storm-can-suggest",level:2}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the modern world data storage is an inseparable component of most applications. There are various problems crossing the same issue of having efficient data storage(caching, application state management, databases, etc.)."),(0,o.kt)("p",null,"At a larger scale it becomes more and more important to spend the minimum cost for keeping and managing such a storage.\nOn the other hand, the centralized data management will cause performance issues and delays for data updates. Imagine an application with more than 10K consumers for the same data, or updating 1K different subject at the same time.\nThe comminity has tackled the data management problem with a lot of different technologies, such as Redux, Mobx, etc.\nUnfortunately, none of them has designed to be cost effective at a larger scale..."),(0,o.kt)("p",null,"The Event Storm has been created to solve the above mentioned problem. "),(0,o.kt)("h2",{id:"diving-deeper"},"Diving deeper"),(0,o.kt)("p",null,"The state manager must provide a straight forward way to access, subscribe and modify to the data. Let's consider a centralized data manager such as Redux(thought the same is true for other data managers too, Redux will be used as commonly recognized goto solution). Centralizing the data in one place have a good advantage of having a single place of data modification. The main downsides of this approach is keeping the information as a single entry. If the data is single entry means it automtically becomes the subject in which the subscription can run. Rephrasing the last, ",(0,o.kt)("strong",{parentName:"p"},"each susbcription to a centralized data store is a subscription to whole store"),"."),(0,o.kt)("h2",{id:"the-problem"},"The problem"),(0,o.kt)("h3",{id:"subscription"},"Subscription"),(0,o.kt)("p",null,"Here comes the pain. When the data inside your centralized data store system is not about just the same business entity(of course it doesn't), you'll need some essential mechanisms to exclude unnecassary subscription calls.\nLet's build a simple example to demonstrate the problem."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"store.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { createStore } from "redux";\n\nconst actions = {\n  increment: "counter/incremented",\n  decrement: "counter/decremented"\n};\n\nconst defaultState = { value: 0 };\n\nfunction counterReducer(state = defaultState, action) {\n  switch (action.type) {\n    case actions.increment:\n      return { ...state, value: state.value + 1 };\n    case action.decrement:\n      return { ...state, value: state.value - 1 };\n    default:\n      return state;\n  }\n}\n\nexport { actions };\nexport default createStore(counterReducer);\n'))),(0,o.kt)(s.Z,{value:"components/Button.jsx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useSelector, useDispatch } from "react-redux";\n\nimport { actions } from "../store";\n\nfunction Button() {\n  const value = useSelector((state) => state.value);\n  const dispatch = useDispatch();\n  console.log("render", value);\n  return (\n    <button\n      onClick={() => {\n        dispatch({ type: actions.increment });\n      }}\n    >\n      click me{value}\n    </button>\n  );\n}\n\nexport default Button;\n'))),(0,o.kt)(s.Z,{value:"App.jsx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Provider } from "react-redux";\n\nimport Button from "./components/Button";\nimport store from "./store";\n\nexport default function App() {\n  return (\n    <Provider store={store}>\n      <Button />\n    </Provider>\n  );\n}\n')))),(0,o.kt)("p",null,"The example is working correct - each click updates the ",(0,o.kt)("inlineCode",{parentName:"p"},"state.value"),", and the button rerenders with the new ",(0,o.kt)("inlineCode",{parentName:"p"},"state.value"),"."),(0,o.kt)("p",null,"Now let's add a different component, that will not use the ",(0,o.kt)("inlineCode",{parentName:"p"},"state.value"),", but a different portion of the ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),'.\nage: 17, name: "John"'),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"components/NotSubscribeb.jsx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useSelector } from "react-redux";\n\nfunction NotSubscribed() {\n  const { age, name } = useSelector(state => {\n    return { age: state.age, name: state.name };\n  });\n  console.log("render", age);\n  return (\n    <span>\n      {age} - {name}\n    </span>\n  );\n}\n\nexport default NotSubscribed;\n'))),(0,o.kt)(s.Z,{value:"store.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"  decrement: \"counter/decremented\"\n};\n\nconst defaultTSate = { value: 0, age: 17, name: 'John' };\n\nfunction counterReducer(state = defaultState, action) {\n  switch (action.type) {\n"))),(0,o.kt)(s.Z,{value:"App.jsx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Provider } from "react-redux";\n\nimport Button from "./components/Button";\nimport NotSubscribed from "./components/NotSubscribed";\nimport store from "./store";\n\nexport default function App() {\n  return (\n    <Provider store={store}>\n      <Button />\n      <NotSubscribed />\n    </Provider>\n  );\n}\n')))),(0,o.kt)("p",null,"In the above example on each button click, when the ",(0,o.kt)("inlineCode",{parentName:"p"},"state.value")," is changed, the ",(0,o.kt)("inlineCode",{parentName:"p"},"NotSubscribed")," component will also rerender. ",(0,o.kt)("strong",{parentName:"p"},"The rerender is an unnecassary"),".\nHere it comes to the essential mechanisms \ud83d\udc8a."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can consider using ",(0,o.kt)("inlineCode",{parentName:"li"},"React.memo"),", but unfortunetly it will not work.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="components/NotSubscribed.jsx"',title:'"components/NotSubscribed.jsx"'},"export default React.memo(NotSubscribed); // \u274c\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Redux ",(0,o.kt)("inlineCode",{parentName:"li"},"useSelector")," supports second argument, an equality function. Let's pass ",(0,o.kt)("inlineCode",{parentName:"li"},"lodash.isEqual"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="components/NotSubscribed.jsx"',title:'"components/NotSubscribed.jsx"'},"import isEqual from 'lodash/isEqual';\n\nconst { age, name } = useSelector(state => {\n  return { age: state.age, name: state.name };\n}, isEqual); // \u2705 \n")),(0,o.kt)("p",null,"Comparing the equality saves the rerender(essential mechanism N1). But what actually happened? Equality function needs previous and next states to compare. So far, we are yet computing the selector, but we don't rerender the component.\nEvidance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="components/NotSubscribed.jsx"',title:'"components/NotSubscribed.jsx"'},"import isEqual from 'lodash/isEqual';\n\nconst { age, name } = useSelector(state => {\n  console.log('computing the selector');\n  return { age: state.age, name: state.name };\n}, isEqual);\n")),(0,o.kt)("p",null,"What else we can do here?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can try using ",(0,o.kt)("inlineCode",{parentName:"li"},"useCallback")," for the selector function. Again you'll have no luck.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useCallback } from 'react';\n\nconst { age, name } = useSelector(useCallback(state => {\n  console.log('computing the selector');\n  return { age: state.age, name: state.name };\n}, []), isEqual); // \u274c\n")),(0,o.kt)("admonition",{title:"The example source",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Here is the complete source code of ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/redux-update-81zjv?file=/src/App.js"},"this example"),".")),(0,o.kt)("p",null,"So far you can live with the situation that it will run anyway. This basically means all the state management touch points, will be triggered on any state update. You can start optimizing the complex selectors in the application to save some comuting time(e.g. using ",(0,o.kt)("inlineCode",{parentName:"p"},"reselect")," as an essential mechanism N2).\nWhy is it like this? Having a centralized data store, has no ",(0,o.kt)("strong",{parentName:"p"},"relation with the the data kept"),", has to deal with it as a single entry. ",(0,o.kt)("strong",{parentName:"p"},"The data store and data relation is crucial"),"(Event storm provides an ",(0,o.kt)("a",{parentName:"p",href:"#whateventstormcansuggest"},"alternative solution"),"). "),(0,o.kt)("h3",{id:"data-ownership"},"Data ownership"),(0,o.kt)("p",null,"In combination with some UI solutions(e.g. React), data store is highly recommended. In most of the cases the rendering solution has no native integration with any kind of data store. That far the data store must find a solution te be integrated with the UI solution. Rephrasing the last sentence - ",(0,o.kt)("strong",{parentName:"p"},"The data store must have a mechanism to trigger a UI update when integrated with speficied UI solution."),"\nRedux data store has official support of integration with React UI library. The Redux is forcing to set a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://reactjs.org/docs/context.html#contextprovider"},"Contenxt.Provider")),". From that point the data access, from any UI component will be managed by React not Redux.\nThis results in some difficulties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Having multiple store's at the same time. As Redux is a centralized data store, it's conter conceptual"),(0,o.kt)("li",{parentName:"ul"},"Accessing the store data non from UI component. E.g. sending data store to backend each specified time interval."),(0,o.kt)("li",{parentName:"ul"},"Code splitting. At a larger scale(or just with microservice architecture) it's mostly impossible to decouple the application into independent peaces, without a relation on data store. Main issue with this is again centralization and data access. Imagine a situation when you want to lazy load a theme data store to your application.")),(0,o.kt)("p",null,"The main issue here is the transfer of data ownership. Redux transfers the ownership to React. And the difficulties with React as a data store is trivial: it's a UI solution, and was never designed to be a data store."),(0,o.kt)("h2",{id:"what-event-storm-can-suggest"},"What Event Storm can suggest?"),(0,o.kt)("p",null,"Event Storm is designed to address and solve the above mentioned problems. It provides design minimals to build any size of data store. The Event Storm library is suggesting a decentralized store with a single usage interface as before."))}d.isMDXComponent=!0}}]);