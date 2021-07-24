(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[9964],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70734:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),l=["components"],o={hide_title:!0,sidebar_label:"ECL EKF Initialisation"},p=void 0,s={unversionedId:"hardware/px4-firmware/ecl-ekf/px4-ecl-initialisation",id:"hardware/px4-firmware/ecl-ekf/px4-ecl-initialisation",isDocsHomePage:!1,title:"px4-ecl-initialisation",description:"This document is based on stock PX4 Autopilot v1.11.2",source:"@site/docs/hardware/px4-firmware/ecl-ekf/px4-ecl-initialisation.md",sourceDirName:"hardware/px4-firmware/ecl-ekf",slug:"/hardware/px4-firmware/ecl-ekf/px4-ecl-initialisation",permalink:"/tech-details/docs/hardware/px4-firmware/ecl-ekf/px4-ecl-initialisation",version:"current",lastUpdatedAt:1626243292,formattedLastUpdatedAt:"7/14/2021",frontMatter:{hide_title:!0,sidebar_label:"ECL EKF Initialisation"},sidebar:"px4firmwareSidebar",previous:{title:"Getting Started",permalink:"/tech-details/docs/hardware/px4-firmware/ecl-ekf/px4-ecl-ekf"},next:{title:"ECL EKF Sensor Fusion (GPS)",permalink:"/tech-details/docs/hardware/px4-firmware/ecl-ekf/px4-ecl-sensor-fusion"}},d=[{value:"Software Architecture Overview",id:"software-architecture-overview",children:[{value:"Multi-EKF and Sensor Voting",id:"multi-ekf-and-sensor-voting",children:[]}]},{value:"Bootstraping Process (Non Multi-EKF)",id:"bootstraping-process-non-multi-ekf",children:[]},{value:"IMU Update Routine",id:"imu-update-routine",children:[{value:"Yaw Alignment",id:"yaw-alignment",children:[]}]}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document is based on stock PX4 Autopilot v1.11.2"),(0,r.kt)("h1",{id:"ecl-ekf-initialisation"},"ECL EKF Initialisation"),(0,r.kt)("h2",{id:"software-architecture-overview"},"Software Architecture Overview"),(0,r.kt)("h3",{id:"multi-ekf-and-sensor-voting"},"Multi-EKF and Sensor Voting"),(0,r.kt)("p",null,"The EKF logic is wrapped around by class ",(0,r.kt)("inlineCode",{parentName:"p"},"EKF2"),", which is implemented as a ",(0,r.kt)("inlineCode",{parentName:"p"},"ScheduledWorkItem"),". It is initialised by the static method ",(0,r.kt)("inlineCode",{parentName:"p"},"task_spawn"),"."),(0,r.kt)("p",null,"The reason for this wrapper architecture is that, the ",(0,r.kt)("inlineCode",{parentName:"p"},"EKF2")," class can turn on a mode called ",(0,r.kt)("inlineCode",{parentName:"p"},"multi mode"),", which enables multi-EKF support. This essentially runs one EKF instance per physical IMU detected on the hardware platform. With the ",(0,r.kt)("inlineCode",{parentName:"p"},"multi mode")," enabled, the ekf selector is also run to perform the selection logic."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/84712/79085293-024b8180-7d06-11ea-9db0-6c68cf0e59d6.png",alt:"Multi-EKF support"})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"ScheduledWorkItem")," inherits ",(0,r.kt)("inlineCode",{parentName:"p"},"WorkItem")," which contains private object ",(0,r.kt)("inlineCode",{parentName:"p"},"WorkQueue"),". Given the ",(0,r.kt)("inlineCode",{parentName:"p"},"wq_config_t")," struct in the constructor of ",(0,r.kt)("inlineCode",{parentName:"p"},"WorkItem"),", it will find or create the relevant Work Queue by ",(0,r.kt)("inlineCode",{parentName:"p"},"WorkQueueFindOrCreate(config)"),", then attach the current work item class object ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," to the target work queue by ",(0,r.kt)("inlineCode",{parentName:"p"},"Attach(this)"),"."),(0,r.kt)("p",{parentName:"div"},"Here each work queue is identified by name, in struct ",(0,r.kt)("inlineCode",{parentName:"p"},"wq_config_t.name"),". For more info refer to ",(0,r.kt)("a",{parentName:"p",href:"https://dev.px4.io/v1.10/en/concept/architecture.html#runtime-environment"},"here"),"."))),(0,r.kt)("h4",{id:"mode-selection"},"Mode Selection"),(0,r.kt)("p",null,"The multi-EKF mode is enabled when ",(0,r.kt)("inlineCode",{parentName:"p"},"SENS_IMU_MODE")," is set to 0 (disabled), ",(0,r.kt)("a",{parentName:"p",href:"https://docs.px4.io/master/en/advanced_config/parameter_reference.html"},"reference"),". Setting the value to 0 disable Sensors hub IMU, hence to expose all IMU data out. Otherwise, setting ",(0,r.kt)("inlineCode",{parentName:"p"},"SENS_IMU_MODE")," to 1, enables sensor voting, in which disable multi-EKF support."),(0,r.kt)("p",null,"The sensor voting result is published as the uORB ",(0,r.kt)("inlineCode",{parentName:"p"},"sensor_combined")," message (",(0,r.kt)("inlineCode",{parentName:"p"},"VotedSensorsUpdate::sensorsPoll"),"). It is received by ",(0,r.kt)("inlineCode",{parentName:"p"},"_sensor_combined_sub")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"EKF2")," class (non multi-EKF mode)."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Currently, we are using the default value of ",(0,r.kt)("inlineCode",{parentName:"p"},"SENS_IMU_MODE")," which is 1. We are not using multi-EKF mode now."))),(0,r.kt)("h2",{id:"bootstraping-process-non-multi-ekf"},"Bootstraping Process (Non Multi-EKF)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ekf2_main")," C method, which handles ",(0,r.kt)("inlineCode",{parentName:"li"},"help"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"start"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"stop")," parameters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EKF2::task_spawn()"),", checking ",(0,r.kt)("inlineCode",{parentName:"li"},"SENS_IMU_MODE"),". If it is 1 (default), enter normal non multi-EKF mode. A new ",(0,r.kt)("inlineCode",{parentName:"li"},"EKF2")," instance is allocated.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Inside the spawning, it schedule the ",(0,r.kt)("inlineCode",{parentName:"li"},"EKF2::Run()")," as well"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EKF2")," has a member variable of class ",(0,r.kt)("inlineCode",{parentName:"li"},"Ekf"),", which is the actuall ECL library (external to PX4 firmware itself)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EKF2::Run()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On the first run, it will register itself to the callback of sensor_combined message: ",(0,r.kt)("inlineCode",{parentName:"li"},"_sensor_combined_sub.registerCallback()"),". Hence the ",(0,r.kt)("inlineCode",{parentName:"li"},"Run()")," function will be called everytime a new combined IMU message is available.")))),(0,r.kt)("h2",{id:"imu-update-routine"},"IMU Update Routine"),(0,r.kt)("p",null,"As we have discussed the ",(0,r.kt)("inlineCode",{parentName:"p"},"EKF2::Run()")," function is called whenever a new IMU data is available (callback). For each run:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"update status like ",(0,r.kt)("inlineCode",{parentName:"li"},"_armed"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"_standby")),(0,r.kt)("li",{parentName:"ul"},"maintain ",(0,r.kt)("inlineCode",{parentName:"li"},"_preflt_checker"),", which is updated during stand by mode",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_preflt_checker")," is responsible for the ",(0,r.kt)("inlineCode",{parentName:"li"},"xy_valid"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"z_valid"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"v_xy_valid"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"v_z_valid")," entries in ",(0,r.kt)("inlineCode",{parentName:"li"},"vehicle_local_position")," uORB message.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="PreFlightChecker.cpp"',title:'"PreFlightChecker.cpp"'},"void PreFlightChecker::update(const float dt, const estimator_innovations_s &innov)\n{\n    const float alpha = InnovationLpf::computeAlphaFromDtAndTauInv(dt, _innov_lpf_tau_inv);\n\n    _has_heading_failed = preFlightCheckHeadingFailed(innov, alpha);\n    _has_horiz_vel_failed = preFlightCheckHorizVelFailed(innov, alpha);\n    _has_vert_vel_failed = preFlightCheckVertVelFailed(innov, alpha);\n    _has_height_failed = preFlightCheckHeightFailed(innov, alpha);\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"call ",(0,r.kt)("inlineCode",{parentName:"li"},"_ekf.setIMUData(imu_sample_new)")," and then ",(0,r.kt)("inlineCode",{parentName:"li"},"_ekf.update()")),(0,r.kt)("li",{parentName:"ul"},"Among other things, update sensors sample too")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"    UpdateAirspeedSample(ekf2_timestamps);\n    UpdateAuxVelSample(ekf2_timestamps);\n    UpdateBaroSample(ekf2_timestamps);\n    UpdateGpsSample(ekf2_timestamps);\n    UpdateMagSample(ekf2_timestamps);\n    UpdateRangeSample(ekf2_timestamps);\n\n    vehicle_odometry_s ev_odom;\n    const bool new_ev_odom = UpdateExtVisionSample(ekf2_timestamps, ev_odom);\n\n    optical_flow_s optical_flow;\n    const bool new_optical_flow = UpdateFlowSample(ekf2_timestamps, optical_flow);\n")),(0,r.kt)("h3",{id:"yaw-alignment"},"Yaw Alignment"),(0,r.kt)("p",null,"Inside ",(0,r.kt)("inlineCode",{parentName:"p"},"bool Ekf::initialiseFilter()"),", yaw alignment is attempted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"    // calculate the initial magnetic field and yaw alignment\n    _control_status.flags.yaw_align = resetMagHeading(_mag_lpf.getState(), false, false);\n")),(0,r.kt)("p",null,"If the type is ",(0,r.kt)("inlineCode",{parentName:"p"},"MAG_FUSE_TYPE_NONE"),", then the yaw",(0,r.kt)("em",{parentName:"p"},"align will return false. If the type is ",(0,r.kt)("inlineCode",{parentName:"em"},"MAG_FUSE_TYPE_INDOOR")," (`"),(0,r.kt)("inlineCode",{parentName:"p"},"is_yaw_fusion_inhibited")," would be false at initialisation)"))}m.isMDXComponent=!0}}]);