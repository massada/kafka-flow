"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4201],{3905:(e,r,a)=>{a.d(r,{Zo:()=>f,kt:()=>p});var t=a(7294);function l(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function n(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){l(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,l=function(e,r){if(null==e)return{};var a,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(l[a]=e[a]);return l}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=t.createContext({}),d=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):n(n({},r),e)),a},f=function(e){var r=d(e.components);return t.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),u=d(a),p=l,k=u["".concat(c,".").concat(p)]||u[p]||s[p]||i;return a?t.createElement(k,n(n({ref:r},f),{},{components:a})):t.createElement(k,n({ref:r},f))}));function p(e,r){var a=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var i=a.length,n=new Array(i);n[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,n[1]=o;for(var d=2;d<i;d++)n[d]=a[d];return t.createElement.apply(null,n)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},463:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=a(7462),l=(a(7294),a(3905));const i={},n="SerializerProducerMiddleware constructor",o={unversionedId:"reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/SerializerProducerMiddleware",id:"reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/SerializerProducerMiddleware",title:"SerializerProducerMiddleware constructor",description:"Initializes a new instance of the SerializerProducerMiddleware class.",source:"@site/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/SerializerProducerMiddleware.md",sourceDirName:"reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware",slug:"/reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/SerializerProducerMiddleware.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SerializerConsumerMiddleware.Invoke method",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerConsumerMiddleware/Invoke"},next:{title:"SerializerProducerMiddleware.Invoke method",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/Invoke"}},c={},d=[{value:"See Also",id:"see-also",level:2}],f={toc:d};function s(e){let{components:r,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},f,a,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"serializerproducermiddleware-constructor"},"SerializerProducerMiddleware constructor"),(0,l.kt)("p",null,"Initializes a new instance of the ",(0,l.kt)("a",{parentName:"p",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/"},(0,l.kt)("inlineCode",{parentName:"a"},"SerializerProducerMiddleware"))," class."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public SerializerProducerMiddleware(ISerializer serializer, IMessageTypeResolver typeResolver)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"serializer"),(0,l.kt)("td",{parentName:"tr",align:null},"Instance of ISerializer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"typeResolver"),(0,l.kt)("td",{parentName:"tr",align:null},"Instance of ",(0,l.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/IMessageTypeResolver/"},(0,l.kt)("inlineCode",{parentName:"a"},"IMessageTypeResolver")))))),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"interface\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/IMessageTypeResolver/"},"IMessageTypeResolver")),(0,l.kt)("li",{parentName:"ul"},"class\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/"},"SerializerProducerMiddleware")),(0,l.kt)("li",{parentName:"ul"},"namespace\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/"},"KafkaFlow"))))}s.isMDXComponent=!0}}]);