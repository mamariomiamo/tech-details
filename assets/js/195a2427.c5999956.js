(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[1226],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60544:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=t(22122),r=t(19756),l=(t(67294),t(3905)),o=["components"],i={hide_title:!0,sidebar_label:"Node.js"},s="Node.js",p={unversionedId:"linux/packages/nodejs",id:"linux/packages/nodejs",isDocsHomePage:!1,title:"Node.js",description:"Installation on Ubuntu (18.04/16.04)",source:"@site/docs/linux/packages/nodejs.md",sourceDirName:"linux/packages",slug:"/linux/packages/nodejs",permalink:"/tech-details/docs/linux/packages/nodejs",version:"current",lastUpdatedAt:1628955083,formattedLastUpdatedAt:"8/14/2021",frontMatter:{hide_title:!0,sidebar_label:"Node.js"},sidebar:"linuxSidebar",previous:{title:"Latex",permalink:"/tech-details/docs/linux/packages/latex"},next:{title:"Ngnix",permalink:"/tech-details/docs/linux/packages/nginx"}},c=[{value:"Installation on Ubuntu (18.04/16.04)",id:"installation-on-ubuntu-18041604",children:[]},{value:"Install yarn package manager",id:"install-yarn-package-manager",children:[]},{value:"Fix npm Global Install Permissions",id:"fix-npm-global-install-permissions",children:[]}],u={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nodejs"},"Node.js"),(0,l.kt)("h2",{id:"installation-on-ubuntu-18041604"},"Installation on Ubuntu (18.04/16.04)"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/"},"Reference")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"## the following line is not needed for Ubuntu 18.04 as the dependencies are installed already\n# sudo apt-get install curl python-software-properties\ncurl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -\nsudo apt-get install nodejs\n")),(0,l.kt)("p",null,"To verify version 12 has been installed successfully:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"node -v \nnpm -v\n")),(0,l.kt)("h2",{id:"install-yarn-package-manager"},"Install yarn package manager"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"NOTE"),": Many have said yarn is no longer relevant, as it no longer has much advantages over Node.js\n",(0,l.kt)("a",{parentName:"p",href:"https://yarnpkg.com/lang/en/docs/install/#debian-stable"},"https://yarnpkg.com/lang/en/docs/install/#debian-stable")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -\necho "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list\nsudo apt-get update && sudo apt-get install yarn\n\n')),(0,l.kt)("p",null,"history below"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"fix-npm-global-install-permissions"},"Fix npm Global Install Permissions"),(0,l.kt)("p",null,"First check, where npm point to, if you call:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"npm config get prefix")),(0,l.kt)("p",null,"If /usr is returned, you can do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/.npm-global\nexport NPM_CONFIG_PREFIX=~/.npm-global\nexport PATH=$PATH:~/.npm-global/bin\n")),(0,l.kt)("p",null,"To make it permanent, add the ",(0,l.kt)("inlineCode",{parentName:"p"},"export")," items in the ",(0,l.kt)("inlineCode",{parentName:"p"},".bashrc")))}d.isMDXComponent=!0}}]);