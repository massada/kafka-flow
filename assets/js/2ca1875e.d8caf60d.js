"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9273],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},i="ConfigurationBuilderExtensions.WithCompression method",l={unversionedId:"reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithCompression",id:"reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithCompression",title:"ConfigurationBuilderExtensions.WithCompression method",description:"Sets compression configurations in the producer",source:"@site/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithCompression.md",sourceDirName:"reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions",slug:"/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithCompression",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithCompression",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithCompression.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConfigurationBuilderExtensions class",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/"},next:{title:"ConfigurationBuilderExtensions.WithConsumerConfig method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithConsumerConfig"}},s={},u=[{value:"See Also",id:"see-also",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configurationbuilderextensionswithcompression-method"},"ConfigurationBuilderExtensions.WithCompression method"),(0,o.kt)("p",null,"Sets compression configurations in the producer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IProducerConfigurationBuilder WithCompression(\n    this IProducerConfigurationBuilder builder, CompressionType compressionType, \n    int? compressionLevel = -1)\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"builder"),(0,o.kt)("td",{parentName:"tr",align:null},"A class that implements IProducerConfigurationBuilder")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"compressionType"),(0,o.kt)("td",{parentName:"tr",align:null},"CompressionType enum to select the compression codec to use for compressing message sets. This is the default value for all topics, may be overridden by the topic configuration property ",(0,o.kt)("inlineCode",{parentName:"td"},"compression.codec"),". default: none importance: medium")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"compressionLevel"),(0,o.kt)("td",{parentName:"tr",align:null},"Compression level parameter for algorithm selected by CompressionType enum. Higher values will result in better compression at the cost of more CPU usage. Usable range is algorithm-dependent: ","[0-9]"," for gzip; ","[0-12]"," for lz4; only 0 for snappy; -1 = codec-dependent default compression level. default: -1 importance: medium")))),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"class\xa0",(0,o.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/"},"ConfigurationBuilderExtensions")),(0,o.kt)("li",{parentName:"ul"},"namespace\xa0",(0,o.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow"))))}p.isMDXComponent=!0}}]);