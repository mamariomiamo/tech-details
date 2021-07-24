(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[5791],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25006:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l=["components"],i={},s="VuePress",u={unversionedId:"random/web-documentation/vuepress",id:"random/web-documentation/vuepress",isDocsHomePage:!1,title:"VuePress",description:"Installation",source:"@site/docs/random/web-documentation/vuepress.md",sourceDirName:"random/web-documentation",slug:"/random/web-documentation/vuepress",permalink:"/tech-details/docs/random/web-documentation/vuepress",version:"current",lastUpdatedAt:1626243292,formattedLastUpdatedAt:"7/14/2021",frontMatter:{}},c=[{value:"Installation",id:"installation",children:[]},{value:"Automatic Generation of Sidebar",id:"automatic-generation-of-sidebar",children:[]},{value:"Serve The Website Locally",id:"serve-the-website-locally",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vuepress"},"VuePress"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"(Make sure Node.js is installed, like ",(0,o.kt)("a",{parentName:"p",href:"../nodejs.md"},"here"),")"),(0,o.kt)("p",null,"To install VuePress 1.x globally is simple:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install vuepress -g\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"vuepress dev docs")," starts a development server with automatic reload and all the dev goodies. This is the command you'll use when developing your website."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"vuepress build docs")," builds your website. The generated assets will be ready to deploy on any hosting service.")),(0,o.kt)("h2",{id:"automatic-generation-of-sidebar"},"Automatic Generation of Sidebar"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install vuepress-bar -g\n")),(0,o.kt)("p",null,"Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/.vuepress/config.js")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const getConfig = require(\"vuepress-bar\");\nconst barConfig = getConfig(`${__dirname}/..`,{skipEmptySidebar: false, addReadMeToFirstGroup:false})\n\n//// Full Automatic\n// module.exports = {\n//   themeConfig: {\n//     ...barConfig,\n//     displayAllHeaders: true // Default: false\n//   }\n// };\n\n\n//// Mixed style\nmodule.exports = {\n  themeConfig: {\n    nav: [\n      { text: 'Home', link: '/' },\n      // { text: 'Tutorials', link: '/1-tutorials/' },\n      // { text: 'External', link: 'https://google.com' },\n     ...barConfig.nav],\n    sidebar: barConfig.sidebar,\n    lastUpdated: 'Last Updated',\n    editLinks: false,\n    displayAllHeaders: true // Default: false\n  }\n};\n")),(0,o.kt)("h2",{id:"serve-the-website-locally"},"Serve The Website Locally"),(0,o.kt)("p",null,"You have a few options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vuepress dev docs\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m http.server\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install http-server -g # first-time install\nhttp-server\n")))}d.isMDXComponent=!0}}]);