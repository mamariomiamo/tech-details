(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[2918],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74517:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],s={hide_title:!0,sidebar_label:"pixhawk Project"},c="Welcome to pixhawk Page",l={unversionedId:"systems/pixhawk_v1/pixhawk",id:"systems/pixhawk_v1/pixhawk",isDocsHomePage:!1,title:"Welcome to pixhawk Page",description:"We present a comprehensive design and implementation for a micro aerial vehicle (MAV) that is able to perform missions, including 3D autonomous navigation, obstacle avoidance and tracking, in cluttered and realistic unknown environments without aid of global positioning system (GPS) and other external sensors or markers. Proposed modularized components are developed and tested for the MAV, including visual inertial odometry (VIO), mapping of obstacles, motion planning, target detection, and tracking systems, as well as a friendly user interface.",source:"@site/docs/systems/pixhawk_v1/pixhawk.md",sourceDirName:"systems/pixhawk_v1",slug:"/systems/pixhawk_v1/pixhawk",permalink:"/tech-details/docs/systems/pixhawk_v1/pixhawk",version:"current",lastUpdatedAt:1628955083,formattedLastUpdatedAt:"8/14/2021",frontMatter:{hide_title:!0,sidebar_label:"pixhawk Project"},sidebar:"systemsSidebar",previous:{title:"Getting Started",permalink:"/tech-details/docs/systems/pixhawk/getting-started"},next:{title:"Getting Started",permalink:"/tech-details/docs/systems/pixhawk_v1/getting-started"}},p=[{value:"Hardware Design",id:"hardware-design",children:[]},{value:"Software Architecture",id:"software-architecture",children:[]}],u={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"welcome-to-pixhawk-page"},"Welcome to pixhawk Page"),(0,i.kt)("p",null,"We present a comprehensive design and implementation for a micro aerial vehicle (MAV) that is able to perform missions, including 3D autonomous navigation, obstacle avoidance and tracking, in cluttered and realistic unknown environments without aid of global positioning system (GPS) and other external sensors or markers. Proposed modularized components are developed and tested for the MAV, including visual inertial odometry (VIO), mapping of obstacles, motion planning, target detection, and tracking systems, as well as a friendly user interface. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(23708).Z})),(0,i.kt)("h2",{id:"hardware-design"},"Hardware Design"),(0,i.kt)("p",null,"The final platform was a 2.6kg octo-rotor configuration utilizing a 2213 size brushless dc motor rated at 920kV which was paired with a 9.5\u201d in diameter by 4.5\u201d pitch propeller with self-locking propeller hubs together with electronic speed controllers rated for 20A continuous current usage at up to 500Hz. Each propulsor was capable of providing up to 1kg of thrust when used with a 4S lithium polymer battery.\n",(0,i.kt)("img",{src:n(2597).Z})),(0,i.kt)("h2",{id:"software-architecture"},"Software Architecture"),(0,i.kt)("p",null,"ROS was chosen as our communication framework because it provides a convenient way to\nrealize the interaction between different modules. The modules can be categorized into the following main parts: state estimation, mapping and motion planning, target detection, and tracking, etc. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7990).Z})))}d.isMDXComponent=!0},23708:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pixhawk-78f6fb2b042cc1c97cdff1e7ad12c742.png"},2597:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pixhawk_platform-3df77afeeb249606574a574c601adfbd.png"},7990:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pixhawk_system-88416f54d9fb39113fcca53443a55b66.jpeg"}}]);