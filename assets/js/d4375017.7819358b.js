"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6015],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>g});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=t.createContext({}),c=function(e){var r=t.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},p=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),g=n,k=u["".concat(i,".").concat(g)]||u[g]||f[g]||l;return a?t.createElement(k,o(o({ref:r},p),{},{components:a})):t.createElement(k,o({ref:r},p))}));function g(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7709:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=a(7462),n=(a(7294),a(3905));const l={},o="SingleMessageTypeResolver constructor",s={unversionedId:"reference/KafkaFlow.Serializer/KafkaFlow/SingleMessageTypeResolver/SingleMessageTypeResolver",id:"reference/KafkaFlow.Serializer/KafkaFlow/SingleMessageTypeResolver/SingleMessageTypeResolver",title:"SingleMessageTypeResolver constructor",description:"Initializes a new instance of the SingleMessageTypeResolver class.",source:"@site/docs/reference/KafkaFlow.Serializer/KafkaFlow/SingleMessageTypeResolver/SingleMessageTypeResolver.md",sourceDirName:"reference/KafkaFlow.Serializer/KafkaFlow/SingleMessageTypeResolver",slug:"/reference/KafkaFlow.Serializer/KafkaFlow/SingleMessageTypeResolver/",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SingleMessageTypeResolver/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Serializer/KafkaFlow/SingleMessageTypeResolver/SingleMessageTypeResolver.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SerializerProducerMiddleware.Invoke method",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/Invoke"},next:{title:"SingleMessageTypeResolver.OnConsume method",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SingleMessageTypeResolver/OnConsume"}},i={},c=[{value:"See Also",id:"see-also",level:2}],p={toc:c};function f(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"singlemessagetyperesolver-constructor"},"SingleMessageTypeResolver constructor"),(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",{parentName:"p",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SingleMessageTypeResolver/"},(0,n.kt)("inlineCode",{parentName:"a"},"SingleMessageTypeResolver"))," class."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public SingleMessageTypeResolver(Type messageType)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"messageType"),(0,n.kt)("td",{parentName:"tr",align:null},"The message type to be returned when consuming")))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"class\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SingleMessageTypeResolver/"},"SingleMessageTypeResolver")),(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/"},"KafkaFlow"))))}f.isMDXComponent=!0}}]);