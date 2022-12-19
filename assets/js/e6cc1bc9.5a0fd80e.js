"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7275],{3905:(e,r,a)=>{a.d(r,{Zo:()=>s,kt:()=>u});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=t.createContext({}),d=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},s=function(e){var r=d(e.components);return t.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,k=p["".concat(c,".").concat(u)]||p[u]||f[u]||l;return a?t.createElement(k,o(o({ref:r},s),{},{components:a})):t.createElement(k,o({ref:r},s))}));function u(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2308:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=a(7462),n=(a(7294),a(3905));const l={},o="SerializerProducerMiddleware.Invoke method",i={unversionedId:"reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/Invoke",id:"reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/Invoke",title:"SerializerProducerMiddleware.Invoke method",description:"Serializes message based on message type resolver strategy",source:"@site/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/Invoke.md",sourceDirName:"reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware",slug:"/reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/Invoke",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/Invoke",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/Invoke.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SerializerProducerMiddleware constructor",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/"},next:{title:"SingleMessageTypeResolver constructor",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SingleMessageTypeResolver/"}},c={},d=[{value:"See Also",id:"see-also",level:2}],s={toc:d};function f(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},s,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"serializerproducermiddlewareinvoke-method"},"SerializerProducerMiddleware.Invoke method"),(0,n.kt)("p",null,"Serializes message based on message type resolver strategy"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public Task Invoke(IMessageContext context, MiddlewareDelegate next)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"context"),(0,n.kt)("td",{parentName:"tr",align:null},"The IMessageContext containing the message and metadata")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"next"),(0,n.kt)("td",{parentName:"tr",align:null},"A delegate to call next middleware")))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"class\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/"},"SerializerProducerMiddleware")),(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/"},"KafkaFlow"))))}f.isMDXComponent=!0}}]);