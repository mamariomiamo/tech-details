(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[4013],{95601:function(e,a,t){"use strict";t.d(a,{Z:function(){return d}});var r=t(67294),n=t(86010),s=t(36742),c="sidebar_2ahu",l="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",o="sidebarItem_2UVv",u="sidebarItemLink_1RT6",m="sidebarItemLinkActive_12pM",h=t(24973);function d(e){var a=e.sidebar;return 0===a.items.length?null:r.createElement("nav",{className:(0,n.Z)(c,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(l,"margin-bottom--md")},a.title),r.createElement("ul",{className:i},a.items.map((function(e){return r.createElement("li",{key:e.permalink,className:o},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:m},e.title))}))))}},70094:function(e,a,t){"use strict";t.r(a);var r=t(67294),n=t(68115),s=t(36742),c=t(95601),l=t(24973),i=t(39306);a.default=function(e){var a=e.tags,t=e.sidebar,o=(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"}),u={};Object.keys(a).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e);u[a]=u[a]||[],u[a].push(e)}));var m=Object.entries(u).sort((function(e,a){var t=e[0],r=a[0];return t.localeCompare(r)})).map((function(e){var t=e[0],n=e[1];return r.createElement("article",{key:t},r.createElement("h2",null,t),n.map((function(e){return r.createElement(s.Z,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")})),r.createElement("hr",null))})).filter((function(e){return null!=e}));return r.createElement(n.Z,{title:o,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("aside",{className:"col col--3"},r.createElement(c.Z,{sidebar:t})),r.createElement("main",{className:"col col--7"},r.createElement("h1",null,o),r.createElement("section",{className:"margin-vert--lg"},m)))))}},6979:function(e,a,t){"use strict";var r=t(67294),n=t(94184),s=t.n(n),c=t(5977),l=t(52263),i=t(28084);a.Z=function(e){var a=(0,r.useRef)(!1),n=(0,r.useRef)(null),o=(0,c.k6)(),u=(0,l.Z)().siteConfig,m=(void 0===u?{}:u).baseUrl,h=(0,i.usePluginData)("docusaurus-lunr-search"),d=function(){a.current||(Promise.all([fetch(""+m+h.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+m+h.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([t.e(9878),t.e(4452)]).then(t.bind(t,57780)),Promise.all([t.e(532),t.e(3343)]).then(t.bind(t,53343))]).then((function(e){var a=e[0],t=e[1],r=e[2].default;0!==a.length&&function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var r=m+t.url;document.createElement("a").href=r,o.push(r)}})}(a,t,r)})),a.current=!0)},p=(0,r.useCallback)((function(a){n.current.contains(a.target)||n.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.createElement("div",{className:"navbar__search",key:"search-box"},r.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:p,onBlur:p,ref:n}))}}}]);