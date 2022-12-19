"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4898],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>p});var a=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),u=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},f=function(e){var r=u(e.components);return a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},i=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),i=u(t),p=o,k=i["".concat(s,".").concat(p)]||i[p]||d[p]||c;return t?a.createElement(k,n(n({ref:r},f),{},{components:t})):a.createElement(k,n({ref:r},f))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,n=new Array(c);n[0]=i;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var u=2;u<c;u++)n[u]=t[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,t)}i.displayName="MDXCreateElement"},9594:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var a=t(7462),o=(t(7294),t(3905));const c={},n="IProducerAccessor interface",l={unversionedId:"reference/KafkaFlow/KafkaFlow.Producers/IProducerAccessor/IProducerAccessor",id:"reference/KafkaFlow/KafkaFlow.Producers/IProducerAccessor/IProducerAccessor",title:"IProducerAccessor interface",description:"Provides access to the configured producers",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Producers/IProducerAccessor/IProducerAccessor.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Producers/IProducerAccessor",slug:"/reference/KafkaFlow/KafkaFlow.Producers/IProducerAccessor/",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Producers/IProducerAccessor/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Producers/IProducerAccessor/IProducerAccessor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BatchProduceItem.Topic property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Producers/BatchProduceItem/Topic"},next:{title:"IProducerAccessor.All property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Producers/IProducerAccessor/All"}},s={},u=[{value:"Members",id:"members",level:2},{value:"See Also",id:"see-also",level:2}],f={toc:u};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iproduceraccessor-interface"},"IProducerAccessor interface"),(0,o.kt)("p",null,"Provides access to the configured producers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface IProducerAccessor\n")),(0,o.kt)("h2",{id:"members"},"Members"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Producers/IProducerAccessor/All"},"All"),"\xa0{\xa0get;\xa0}"),(0,o.kt)("td",{parentName:"tr",align:null},"Gets all configured producers")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Producers/IProducerAccessor/Item"},"Item"),"\xa0{\xa0get;\xa0}"),(0,o.kt)("td",{parentName:"tr",align:null},"Gets a producer by its name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Producers/IProducerAccessor/GetProducer"},"GetProducer"),"(\u2026)"),(0,o.kt)("td",{parentName:"tr",align:null},"Gets a producer by its name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Producers/IProducerAccessor/GetProducer"},"GetProducer","<","TProducer",">"),"()"),(0,o.kt)("td",{parentName:"tr",align:null},"Gets a producer by its type")))),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"namespace\xa0",(0,o.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Producers"))))}d.isMDXComponent=!0}}]);