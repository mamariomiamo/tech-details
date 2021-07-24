(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[5430],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return c}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(r),c=n,h=p["".concat(o,".").concat(c)]||p[c]||d[c]||i;return r?a.createElement(h,l(l({ref:t},m),{},{components:r})):a.createElement(h,l({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},49245:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var a=r(22122),n=r(19756),i=(r(67294),r(3905)),l=["components"],s={id:"unity-simulator",title:"Unity Outline",sidebar_label:"Unity Simulator"},o="Unity Simulator : Outline",u={unversionedId:"systems/unity-simulator",id:"systems/unity-simulator",isDocsHomePage:!1,title:"Unity Outline",description:"Summary",source:"@site/docs/systems/unity-simulator.md",sourceDirName:"systems",slug:"/systems/unity-simulator",permalink:"/tech-details/docs/systems/unity-simulator",version:"current",lastUpdatedAt:1626243292,formattedLastUpdatedAt:"7/14/2021",frontMatter:{id:"unity-simulator",title:"Unity Outline",sidebar_label:"Unity Simulator"},sidebar:"systemsSidebar",previous:{title:"ROS Coordinate Systems",permalink:"/tech-details/docs/systems/ros-coordinate-systems"},next:{title:"Unity Setup",permalink:"/tech-details/docs/systems/unity-setup"}},m=[{value:"Summary",id:"summary",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Unity Socket",id:"unity-socket",children:[{value:"Subscribed Topics",id:"subscribed-topics",children:[]},{value:"Published Topics",id:"published-topics",children:[]},{value:"Parameters",id:"parameters",children:[]}]}],d={toc:m};function p(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"unity-simulator--outline"},"Unity Simulator : Outline"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"summary: The simulator is introduced in this post. Without the presence of the real vehicle and further ado, algorithm developers can swiftly test, debug and revise their codes in the provided mock-up UAV in the simulated environment which is modelled comparable to the actual test field."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Ahead of the physical UAV platform being built up, software codes and algorithms to be implemented on the drone later on can be validated and substantiated by means of ",(0,i.kt)("strong",{parentName:"p"},"Unity3D")," simulation. Without the presence of the real vehicle and further ado, algorithm developers can swiftly test, debug and revise their codes in the provided mock-up UAV in the simulated environment which is modelled comparable to the actual test field."),(0,i.kt)("p",null,"As for the whole simulation structure, all the sections can be categorized and divided into two sides: Unity3D side, which resembles the information and data flow for the UAV hardware excluding the on-board CPU, and the ROS side, which acts as the `brain' of the UAV, processes acquired sensor data and distributes commands and tasks. All the ROS codes are run on an actual TX2. As a result, the flow of data transmission is as follows: firstly, sensors on the UAV (Unity3D side) acquire data of the surroundings; secondly, the data are sent to the on-board CPU, in other words, TX2 (ROS side) to be processed and transformed into task commands; thirdly, task commands are sent to the motion controller Pixhawk (Unity3D side) and control signals in PWM are generated; fourthly, PWM signals are transmitted to the motors and propellers (Unity3D side) for them to spin and generate upward thrust for the drone; fifthly, the drone therefore can manoeuvre in the built-up environment (Unity3D side) and the on-board sensors can collect data accordingly; lastly, the data goes to the TX2 again in the first step and that closes the loop for data flow. In this method, a hardware-in-the-loop simulation is realized, because the TX2 is to be installed onto the actual drone afterwards. The full simulation is conducted in the following manner: the drone takes off outside of the building, flies through the gate and avoids the obstacles, detects and tracks human targets; when all the requirements are achieved, the simulation is considered completed. "),(0,i.kt)("p",null,"Below is about the excutable file for the simulator and the communicate socket between ROS and Unity simulator supporting UDP protocol."),(0,i.kt)("h2",{id:"unity-socket"},"Unity Socket"),(0,i.kt)("h3",{id:"subscribed-topics"},"Subscribed Topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"/mavlink/from_pixhawk (mavros::Mavlink)"))),(0,i.kt)("p",null,"MAVLink messages, which will be send to simulator."),(0,i.kt)("h3",{id:"published-topics"},"Published Topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"/hil/sensor/laser_altitude (sensor_msgs::Range)"))),(0,i.kt)("p",null,"Altitude data measured by laser from simulator."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"/hil/sensor/imu (sensor_msgs::Imu)"))),(0,i.kt)("p",null,"IMU data from simulator."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"/hil/sensor/magnetic_field (sensor_msgs::MagneticField)"))),(0,i.kt)("p",null,"Magnetic field data from simulator."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"/hil/sensor/absolute_pressure (sensor_msgs::FluidPressure)"))),(0,i.kt)("p",null,"Absolute pressure data from simulator."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"/hil/sensor/differential_pressure (sensor_msgs::FluidPressure)"))),(0,i.kt)("p",null,"Differential pressue data from simulator."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"/hil/sensor/pressure_altitude (sensor_msgs::Range)"))),(0,i.kt)("p",null,"Altitude data measured by pressure from simulator."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"/hil/sensor/temperature (sensor_msgs::Temperature)"))),(0,i.kt)("p",null,"Temperature data from simulator."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"/hil/sensor/gps (sensor_msgs::NavSatFix)"))),(0,i.kt)("p",null,"GPS data from simulator."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"/hil/state/ground_truth (nus_msgs::StateWithCovarianceStamped)"))),(0,i.kt)("p",null,"Ground truth data from simulator."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"/hil/state/measurement (nus_msgs::StateWithCovarianceStamped)"))),(0,i.kt)("p",null,"Measurement data from simulator."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"~server_ip")," (string, default: 172.16.142.34)")),(0,i.kt)("p",null,"Unity simulator IP address."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"~server_port_basic")," (int, default: 26000)")),(0,i.kt)("p",null,"Unity simulator port for basic data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"~server_port_image")," (int, default: 26500)")),(0,i.kt)("p",null,"Unity simulator port for image data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"~server_port_stereo")," (int, default: 26510)")),(0,i.kt)("p",null,"Unity simulator port for stereo image data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"~server_port_laser2d")," (int, default: 26600)")),(0,i.kt)("p",null,"Unity simulator port for 2D laser data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"~server_port_laser3d")," (int, default: 26700)")),(0,i.kt)("p",null,"Unity simulator port for 3D laser data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"~server_port_mavlink")," (int, default: 27000)")),(0,i.kt)("p",null,"Unity simulator port for MAVLink data."))}p.isMDXComponent=!0}}]);