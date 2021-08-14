(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[4685],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,u=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},52911:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),l=["components"],o={hide_title:!0,sidebar_label:"Flash An Existing Image"},s="Flashing An Existing Image to TX2",p={unversionedId:"hardware/jetson-tx2/flash-existing-image",id:"hardware/jetson-tx2/flash-existing-image",isDocsHomePage:!1,title:"Flashing An Existing Image to TX2",description:"You must have exactly the same version of patched BSP to flash the image correctly. This is because the image file only backs up the main partition, and the rest of the booting partitions are prepared by the BSP at flashing time.",source:"@site/docs/hardware/jetson-tx2/flash-existing-image.md",sourceDirName:"hardware/jetson-tx2",slug:"/hardware/jetson-tx2/flash-existing-image",permalink:"/tech-details/docs/hardware/jetson-tx2/flash-existing-image",version:"current",lastUpdatedAt:1628955083,formattedLastUpdatedAt:"8/14/2021",frontMatter:{hide_title:!0,sidebar_label:"Flash An Existing Image"},sidebar:"tx2Sidebar",previous:{title:"Patch JetPack BSP",permalink:"/tech-details/docs/hardware/jetson-tx2/prepare-bsp-rfs"},next:{title:"Backup Dos",permalink:"/tech-details/docs/hardware/jetson-tx2/backup-procedures"}},m=[{value:"Pre-requisite",id:"pre-requisite",children:[]},{value:"Flashing Steps",id:"flashing-steps",children:[]}],d={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flashing-an-existing-image-to-tx2"},"Flashing An Existing Image to TX2"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You must have exactly the same version of ",(0,i.kt)("strong",{parentName:"p"},"patched")," BSP to flash the image correctly. This is because the image file only backs up the main partition, and the rest of the booting partitions are prepared by the BSP at flashing time."))),(0,i.kt)("h2",{id:"pre-requisite"},"Pre-requisite"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A host machine running Ubuntu 16 or 18"),(0,i.kt)("li",{parentName:"ul"},"Prepared the Patched L4T BSP (e.g. patched with Auvidea's Firmware)"),(0,i.kt)("li",{parentName:"ul"},"Have the .img file ready"),(0,i.kt)("li",{parentName:"ul"},"A bare TX2 module"),(0,i.kt)("li",{parentName:"ul"},"A Dev Kit with the stock 19V supply"),(0,i.kt)("li",{parentName:"ul"},"A micro USB cable for flashing"),(0,i.kt)("li",{parentName:"ul"},"HDMI Monitor and cable"),(0,i.kt)("li",{parentName:"ul"},"(Optionally) A Ethernet cable or WiFi Antenna connected, for updating the Ubuntu packages to the latest")),(0,i.kt)("h2",{id:"flashing-steps"},"Flashing Steps"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure ",(0,i.kt)("inlineCode",{parentName:"p"},"./apply_binaries.sh")," is executed once before ANY flashing, after a BSP update / overwrite from the board overlay."))),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure patched BSP is ready."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If it is prepared by someone else in a zip file. Make sure it is unzipped with permission preserved ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo tar -xpf ***")," "))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Power off the dev kit"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The CR5 red LED should not light up. Otherwise, removing or installing TX2 module while the dev kit is powered may damage the system electrically"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the TX2 module firmly, and plug-in the power for dev kit")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Boot TX2 into recovery mode"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You could enter the recovery mode by ",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"PWR - press and release (Skip if the board is already powered on)"),(0,i.kt)("li",{parentName:"ol"},"REC - press and hold"),(0,i.kt)("li",{parentName:"ol"},"RST - press and release "),(0,i.kt)("li",{parentName:"ol"},"Wait 2 sec "),(0,i.kt)("li",{parentName:"ol"},"REC - release"))),(0,i.kt)("li",{parentName:"ul"},"(Advanced) if not successful, you could still enter by interrupting the bootloader in the UART0 console, and by typing ",(0,i.kt)("inlineCode",{parentName:"li"},"enterrcm")," ")))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"With the OTG micro-USB attached (hidden on the left of the antennas) to the host. Check the connection by opening a terminal, key in"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"lsusb\n")),(0,i.kt)("p",{parentName:"li"},"It should show ",(0,i.kt)("inlineCode",{parentName:"p"},"ID 0955:7c18 NVidia Corp."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The image to be flashed should be symlinked as ",(0,i.kt)("inlineCode",{parentName:"p"},"./bootloader/system.img")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example: ",(0,i.kt)("inlineCode",{parentName:"li"},"cd bootloader")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo ln -s ../../../images/backup_190413.img system.img")),(0,i.kt)("li",{parentName:"ul"},"It should ",(0,i.kt)("strong",{parentName:"li"},"always be named")," ",(0,i.kt)("inlineCode",{parentName:"li"},"system.img")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go back to the root of the BSP folder, flash all board partitions by"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ./flash.sh -r jetson-tx2 mmcblk0p1 # flash all partitions\n\n# Below only for reference\n# sudo ./flash.sh -k kernel-dtb jetson-tx2 mmcblk0p1 # flash kernel device tree-blob\n# other -k options: cpu-bootloader, bootloader-dtb, LNX, kernel\n")),(0,i.kt)("p",{parentName:"li"},"The process should end with ",(0,i.kt)("inlineCode",{parentName:"p"},"*** The target t186ref has been flashed successfully. ***"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You are done!"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sanity check with ",(0,i.kt)("inlineCode",{parentName:"li"},"sha1sum \u2013c /etc/nv_tegra_release"))))),(0,i.kt)("p",null,"Nvidia Official Reference: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/jetson/l4t/index.html#page/Tegra%2520Linux%2520Driver%2520Package%2520Development%2520Guide%2Fflashing.html%23wwpID0E0YJ0HA"},"Flashing and Booting the Target Device")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetpack-archive"},"Jetpack Archive"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/linux-tegra-archive"},"L4T Archive")))}c.isMDXComponent=!0}}]);