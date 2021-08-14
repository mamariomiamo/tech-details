(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[8109],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52108:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(22122),l=n(19756),i=(n(67294),n(3905)),r=["components"],o={hide_title:!0,sidebar_label:"Post-flashing Dos"},p="Post-flashing Dos",s={unversionedId:"hardware/jetson-tx2/tx2-post-flashing",id:"hardware/jetson-tx2/tx2-post-flashing",isDocsHomePage:!1,title:"Post-flashing Dos",description:"(TX2 Platform for ROS-Robotics)",source:"@site/docs/hardware/jetson-tx2/tx2-post-flashing.md",sourceDirName:"hardware/jetson-tx2",slug:"/hardware/jetson-tx2/tx2-post-flashing",permalink:"/tech-details/docs/hardware/jetson-tx2/tx2-post-flashing",version:"current",lastUpdatedAt:1628955083,formattedLastUpdatedAt:"8/14/2021",frontMatter:{hide_title:!0,sidebar_label:"Post-flashing Dos"},sidebar:"tx2Sidebar",previous:{title:"Mount Image as Loopback",permalink:"/tech-details/docs/hardware/jetson-tx2/mount-image-as-loopback"},next:{title:"UART Setup",permalink:"/tech-details/docs/hardware/jetson-tx2/uart-setup"}},d=[{value:"Check L4T and Jetpack version",id:"check-l4t-and-jetpack-version",children:[]},{value:"Install Absolute Dependencies",id:"install-absolute-dependencies",children:[]},{value:"Downgrade OpenCV",id:"downgrade-opencv",children:[]},{value:"Install Optional Dependencies",id:"install-optional-dependencies",children:[]},{value:"Python Dependencies",id:"python-dependencies",children:[]},{value:"Convenience",id:"convenience",children:[]},{value:"Tools",id:"tools",children:[]},{value:"Hardware / Kernel",id:"hardware--kernel",children:[]},{value:"Web Applications",id:"web-applications",children:[]},{value:"OpenCV 4 from Source",id:"opencv-4-from-source",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"post-flashing-dos"},"Post-flashing Dos"),(0,i.kt)("p",null,"(TX2 Platform for ROS-Robotics)"),(0,i.kt)("h2",{id:"check-l4t-and-jetpack-version"},"Check L4T and Jetpack version"),(0,i.kt)("p",null,"-",(0,i.kt)("inlineCode",{parentName:"p"},"cat /etc/nv_tegra_release"),", e.g. R32.3.2 is the L4T Version"),(0,i.kt)("h2",{id:"install-absolute-dependencies"},"Install Absolute Dependencies"),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt update")," to the latest"),(0,i.kt)("li",{parentName:"ol"},"Install CUDA and cuDNN etc. from Nvidia SDK Manager, over the USB Cable (check install by ",(0,i.kt)("inlineCode",{parentName:"li"},"nvcc --version")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.bashrc")," export 2 lines are there)"),(0,i.kt)("li",{parentName:"ol"},"Install ROS, and ",(0,i.kt)("inlineCode",{parentName:"li"},"apt install python-catkin-tools python-rosdep"),"; do ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo rosdep init")),(0,i.kt)("li",{parentName:"ol"},"Setup SD Card ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/fstab")),(0,i.kt)("li",{parentName:"ol"},"Add user ",(0,i.kt)("inlineCode",{parentName:"li"},"nvidia")," to dialout group, to access tty serial port normally"),(0,i.kt)("li",{parentName:"ol"},"Install pytorch and torchvision"),(0,i.kt)("li",{parentName:"ol"},"Install ZED SDK"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt install ros-melodic-mavlink"))),(0,i.kt)("h2",{id:"downgrade-opencv"},"Downgrade OpenCV"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"For new Jetpack, the OpenCV version is 4.1+. Whereas ROS 1 needs Version 3.x to function. Hence, downgrade by using Nvidia's SDK Manager's .deb file , e.g. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"libopencv_3.3.1-2-g31ccdfe11_arm64.deb")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"libopencv-dev_3.3.1-2-g31ccdfe11_arm64.deb")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"libopencv-python_3.3.1-2-g31ccdfe11_arm64.deb")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"libopencv-samples_3.3.1-2-g31ccdfe11_arm64.deb"))))),(0,i.kt)("h2",{id:"install-optional-dependencies"},"Install Optional Dependencies"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"For Pangolin OpenGL Display",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt install libgl1-mesa-dev libglew-dev")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt install libegl1-mesa-dev libwayland-dev libxkbcommon-dev wayland-protocols")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sudo python -mpip install numpy pyopengl Pillow pybind11")))),(0,i.kt)("li",{parentName:"ol"},"librealsense for Jetson from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/IntelRealSense/librealsense/blob/master/doc/installation_jetson.md"},"official"))),(0,i.kt)("h2",{id:"python-dependencies"},"Python Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pip install --upgrade pip"),", same to pip3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pip install")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"pip3 install")," the following",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"cpython (may try ",(0,i.kt)("inlineCode",{parentName:"li"},"pip install --upgrade"),")"),(0,i.kt)("li",{parentName:"ul"},"numpy"),(0,i.kt)("li",{parentName:"ul"},"scipy (need ",(0,i.kt)("inlineCode",{parentName:"li"},"gfortran")," compiler)")))),(0,i.kt)("h2",{id:"convenience"},"Convenience"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add right-click to create new file: ",(0,i.kt)("inlineCode",{parentName:"li"},"touch ~/Templates/Empty\\ Document")),(0,i.kt)("li",{parentName:"ol"},"Add system monitor applet at status bar (gnome extension)"),(0,i.kt)("li",{parentName:"ol"},"Setting of power button to shutdown without prompt of 60 seconds"),(0,i.kt)("li",{parentName:"ol"},"Do not blank screen display")),(0,i.kt)("h2",{id:"tools"},"Tools"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install VS Code"),(0,i.kt)("li",{parentName:"ol"},"Install Samba"),(0,i.kt)("li",{parentName:"ol"},"Install git, and configure timeout for asking password ",(0,i.kt)("inlineCode",{parentName:"li"},"git config --global credential.helper 'cache --timeout=300'")),(0,i.kt)("li",{parentName:"ol"},"catkin build, make it default Release mode ",(0,i.kt)("inlineCode",{parentName:"li"},"catkin config --cmake-args -DCMAKE_BUILD_TYPE=Release"))),(0,i.kt)("h2",{id:"hardware--kernel"},"Hardware / Kernel"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Increase USBFS buffer size (uboot at /boot/extlinux/extlinux.conf)")),(0,i.kt)("h2",{id:"web-applications"},"Web Applications"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Nodejs and yarn"),(0,i.kt)("li",{parentName:"ol"},"Nginx ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt install nginx"))),(0,i.kt)("h2",{id:"opencv-4-from-source"},"OpenCV 4 from Source"),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},"It is required, if contrib features of OpenCV is to be used. Does not come with shipped .deb"),(0,i.kt)("li",{parentName:"ol"},"build it from source, using a external ext4 disk drive, as large space is needed"),(0,i.kt)("li",{parentName:"ol"},"for TX2, the ",(0,i.kt)("inlineCode",{parentName:"li"},"CUDA_ARCH_BIN")," version is 6.2")))}u.isMDXComponent=!0}}]);