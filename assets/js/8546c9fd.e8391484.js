(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[1323],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93594:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],c={hide_title:!0,sidebar_label:"My Page"},l="My Page",p={unversionedId:"examples/mypage",id:"examples/mypage",isDocsHomePage:!1,title:"My Page",description:"Render $\\LaTeX$ equation",source:"@site/docs/examples/mypage.md",sourceDirName:"examples",slug:"/examples/mypage",permalink:"/tech-details/docs/examples/mypage",version:"current",lastUpdatedAt:1626243292,formattedLastUpdatedAt:"7/14/2021",frontMatter:{hide_title:!0,sidebar_label:"My Page"}},u=[],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"my-page"},"My Page"),(0,o.kt)("p",null,"Render $\\LaTeX$ equation\n$y = ax + b$"),(0,o.kt)("p",null,"Render $\\LaTeX$ fraction and matrix\n$$\n\\frac{2}{3}\n$$"),(0,o.kt)("p",null,"$$\n\\begin{bmatrix}\n1 0 ","\\","\n0 1 ","\\","\n\\end{bmatrix}\n$$"),(0,o.kt)("p",null,"Render code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="main.cpp"',title:'"main.cpp"'},"void main(){\n    return 0;\n}\n")),(0,o.kt)("p",null,"For more Markdown examples, refer to ",(0,o.kt)("a",{parentName:"p",href:"/tech-details/docs/examples/doc1"},"this"),"."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Feel free to try adding things below for experiments!"))}m.isMDXComponent=!0}}]);