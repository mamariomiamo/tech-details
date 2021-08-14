(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[4330],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26600:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],c={hide_title:!0,sidebar_label:"Vicon Setup"},s=void 0,l={unversionedId:"systems/vicon",id:"systems/vicon",isDocsHomePage:!1,title:"vicon",description:"Vicon Setup",source:"@site/docs/systems/vicon.md",sourceDirName:"systems",slug:"/systems/vicon",permalink:"/tech-details/docs/systems/vicon",version:"current",lastUpdatedAt:1628955083,formattedLastUpdatedAt:"8/14/2021",frontMatter:{hide_title:!0,sidebar_label:"Vicon Setup"},sidebar:"systemsSidebar",previous:{title:"Unity HITL",permalink:"/tech-details/docs/systems/unity-HITL"},next:{title:"Getting Started",permalink:"/tech-details/docs/systems/pixhawk/getting-started"}},p=[{value:"Vicon Setup",id:"vicon-setup",children:[{value:"Vicon Object Setup",id:"vicon-object-setup",children:[]},{value:"Launch Setup",id:"launch-setup",children:[]}]}],m={toc:p};function d(e){var t=e.components,c=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"vicon-setup"},"Vicon Setup"),(0,o.kt)("h3",{id:"vicon-object-setup"},"Vicon Object Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Place the ",(0,o.kt)("strong",{parentName:"p"},"Vicon balls")," (about 3 or 4) onto the drone. It should be visible for the Vicon cameras to track.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Place the object into the Vicon tracking area, and someone at the computer should be able to see the various points of the vicon balls in the program."))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(34026).Z})," ",(0,o.kt)("img",{src:n(16379).Z})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Select all")," the Vicon trackable points by ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"shift")," and clicking all the points in the area. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("strong",{parentName:"p"},"name")," for the object, and add it into the Vicon program and track it."),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Add to the ",(0,o.kt)("inlineCode",{parentName:"p"},'<remap from="/vrpn_client_node/*****/pose" to="/mavros/vision_pose/pose" />')," in sample.launch in the ",(0,o.kt)("strong",{parentName:"p"},"Launch Setup"),"."))))),(0,o.kt)("h3",{id:"launch-setup"},"Launch Setup"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Important to download the ",(0,o.kt)("strong",{parentName:"p"},"VRPN library")," on ROS. The Debian package can be downloaded via the commands below :"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install ros-melodic-vrpn-client-ros\n")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Git clone the ",(0,o.kt)("strong",{parentName:"li"},"VRPN official repository")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"https://github.com/ros-drivers/vrpn_client_ros"),". Clone this into the ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," directory of your catkin_ws along with the Auto Fast Flt_drone or the other modules.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    git clone https://github.com/ros-drivers/vrpn_client_ros\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Go into ",(0,o.kt)("strong",{parentName:"li"},"vrpn_client_ros/launch")," and change the ",(0,o.kt)("strong",{parentName:"li"},"sample.launch")," file. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'    <arg name="server" default="******"/> \n    - replace with the IP of computer hosting Vicon.\n\n    <remap from="/vrpn_client_node/*****/pose" to="/mavros/vision_pose/pose" /> \n    - replace with the object name created in Vicon.\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go back to the catkin_ws directory and ",(0,o.kt)("inlineCode",{parentName:"p"},"catkin build"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now you are able to launch the VRPN client node using ",(0,o.kt)("inlineCode",{parentName:"p"},"roslaunch vrpn_client_ros sample.launch"),". Test to see whether there are topics published via opening another terminal and "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    rostopic list \n    rostopic echo /mavros/vision_pose/pose\n")))}d.isMDXComponent=!0},16379:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Motion-Capture-Markers-autox200-b747230adfb77e58073286ca973c161d.jpg"},34026:function(e,t,n){"use strict";t.Z=n.p+"assets/images/viconballs-autox200-335f1a13597fea953ba37059d14d67d3.jpg"}}]);