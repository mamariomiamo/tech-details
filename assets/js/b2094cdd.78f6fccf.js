(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[2898],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,y=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10467:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],s={hide_title:!0,sidebar_label:"Build-your-own"},c=void 0,l={unversionedId:"systems/unity-buildyourown",id:"systems/unity-buildyourown",isDocsHomePage:!1,title:"unity-buildyourown",description:"Build-your-own",source:"@site/docs/systems/unity-buildyourown.md",sourceDirName:"systems",slug:"/systems/unity-buildyourown",permalink:"/tech-details/docs/systems/unity-buildyourown",version:"current",lastUpdatedAt:1628955083,formattedLastUpdatedAt:"8/14/2021",frontMatter:{hide_title:!0,sidebar_label:"Build-your-own"},sidebar:"systemsSidebar",previous:{title:"Unity Setup",permalink:"/tech-details/docs/systems/unity-setup"},next:{title:"Unity SITL",permalink:"/tech-details/docs/systems/unity-SITL"}},u=[{value:"Build-your-own",id:"build-your-own",children:[{value:"Setup",id:"setup",children:[]}]},{value:"Game Objects",id:"game-objects",children:[]}],p={toc:u};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"build-your-own"},"Build-your-own"),(0,i.kt)("h3",{id:"setup"},"Setup"),(0,i.kt)("p",null,"First up, setup your own Unity project using the current stable project configurations, download from the ",(0,i.kt)("inlineCode",{parentName:"p"},"unity_simulator_2019")," from the Bitbucket repository, this will give you a working platform to start off."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://bitbucket.org/nusuav/unity_simulator_2019/src/master/")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In Unity, there are various Unity versions, (Unity 2019.x Unity 2020.x) especially those with LTS are Unity xxxx.4.x. When launching ",(0,i.kt)("strong",{parentName:"p"},"Unity Hub")," go to ",(0,i.kt)("inlineCode",{parentName:"p"},"installs")," tab and you can download archived versions from ",(0,i.kt)("inlineCode",{parentName:"p"},"https://unity3d.com/get-unity/download/archive"),".")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"What we use is ",(0,i.kt)("inlineCode",{parentName:"p"},"Unity 2019.4.f9 LTS")," for our scripts currently."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"game-objects"},"Game Objects"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(91668).Z}),"\n",(0,i.kt)("img",{src:n(28302).Z})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open a ",(0,i.kt)("strong",{parentName:"li"},"prefab"),".",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Prefably use a created ",(0,i.kt)("strong",{parentName:"p"},"prefab")," (these are pre-created models), the Octocopter.x is one of them. "))),(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("strong",{parentName:"li"},"game object"),", these are such as camera, render textures, 2D textures etc. By right clicking on the left side of the Unity interface."),(0,i.kt)("li",{parentName:"ol"},"Attach a written script to the game object by ",(0,i.kt)("strong",{parentName:"li"},"Add Component")," at the bottom of the inspector (Right Side).",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Scripting essentials are the namespace and the ",(0,i.kt)("strong",{parentName:"p"},"public")," and ",(0,i.kt)("strong",{parentName:"p"},"private")," components/variables. ",(0,i.kt)("strong",{parentName:"p"},"public")," are editable in the inspector and ",(0,i.kt)("strong",{parentName:"p"},"private")," are not."))),(0,i.kt)("li",{parentName:"ol"},"Attach ",(0,i.kt)("strong",{parentName:"li"},"Public")," components, with objects and your own variables.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3082).Z})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some examples of scripting public/private variables : "),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"    using System.Collections;\n    using System.Collections.Generic;\n    using UnityEngine;\n    using UnityEngine.Rendering;\n    \n    public class NameofClass : MonoBehaviour {\n        public Texture2D Texture;\n        public GameObject GameObject;\n        public RenderTexture RenderTexture;\n        public Shader Shader;\n        public Material Material;\n    }\n")))))}m.isMDXComponent=!0},91668:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Add_components_gameobject-autox300-9a339f267dbc5589d200f67384329be2.PNG"},28302:function(e,t,n){"use strict";t.Z=n.p+"assets/images/drone_model-autox300-f2fa26c2774a257e25d8f92bf30ba651.PNG"},3082:function(e,t,n){"use strict";t.Z=n.p+"assets/images/variables-b5d18c59fbe99b601b334c9cc3658cb0.PNG"}}]);