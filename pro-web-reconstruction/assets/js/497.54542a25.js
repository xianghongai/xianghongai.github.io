(self.webpackChunkfeatures=self.webpackChunkfeatures||[]).push([[497],{582:(e,l,t)=>{"use strict";t.d(l,{Z:()=>k});var a=t(6252),n=t(3577);const r={class:"hero"},i={key:1,id:"main-title"},o={key:2,class:"description"},s={key:3,class:"actions"},u={key:0,class:"features"},c={class:"theme-default-content custom"};var v=t(7621),d=t(480),m=t(9565);const p=(0,a.aZ)({name:"Home",components:{NavLink:m.Z},setup(){const e=(0,v.I2)(),l=(0,v.I5)(),t=(0,a.Fl)((()=>e.value.heroImage?(0,v.pJ)(e.value.heroImage):null)),n=(0,a.Fl)((()=>null===e.value.heroText?null:e.value.heroText||l.value.title||"Hello")),r=(0,a.Fl)((()=>e.value.heroAlt||n.value||"hero")),i=(0,a.Fl)((()=>null===e.value.tagline?null:e.value.tagline||l.value.description||"Welcome to your VuePress site")),o=(0,a.Fl)((()=>(0,d.kJ)(e.value.actions)?e.value.actions.map((({text:e,link:l,type:t="primary"})=>({text:e,link:l,type:t}))):[])),s=(0,a.Fl)((()=>(0,d.kJ)(e.value.features)?e.value.features:[])),u=(0,a.Fl)((()=>e.value.footer)),c=(0,a.Fl)((()=>e.value.footerHtml));return{heroImage:t,heroAlt:r,heroText:n,tagline:i,actions:o,features:s,footer:u,footerHtml:c}}});p.render=function(e,l,t,v,d,m){const p=(0,a.up)("NavLink"),k=(0,a.up)("Content");return(0,a.wg)(),(0,a.j4)("main",{class:"home","aria-labelledby":e.heroText?"main-title":void 0},[(0,a.Wm)("header",r,[e.heroImage?((0,a.wg)(),(0,a.j4)("img",{key:0,src:e.heroImage,alt:e.heroAlt},null,8,["src","alt"])):(0,a.kq)("",!0),e.heroText?((0,a.wg)(),(0,a.j4)("h1",i,(0,n.zw)(e.heroText),1)):(0,a.kq)("",!0),e.tagline?((0,a.wg)(),(0,a.j4)("p",o,(0,n.zw)(e.tagline),1)):(0,a.kq)("",!0),e.actions.length?((0,a.wg)(),(0,a.j4)("p",s,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.actions,(e=>((0,a.wg)(),(0,a.j4)(p,{key:e.text,class:["action-button",[e.type]],item:e},null,8,["class","item"])))),128))])):(0,a.kq)("",!0)]),e.features.length?((0,a.wg)(),(0,a.j4)("div",u,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.features,(e=>((0,a.wg)(),(0,a.j4)("div",{key:e.title,class:"feature"},[(0,a.Wm)("h2",null,(0,n.zw)(e.title),1),(0,a.Wm)("p",null,(0,n.zw)(e.details),1)])))),128))])):(0,a.kq)("",!0),(0,a.Wm)("div",c,[(0,a.Wm)(k)]),e.footer?((0,a.wg)(),(0,a.j4)(a.HY,{key:1},[e.footerHtml?((0,a.wg)(),(0,a.j4)("div",{key:0,class:"footer",innerHTML:e.footer},null,8,["innerHTML"])):((0,a.wg)(),(0,a.j4)("div",{key:1,class:"footer",textContent:(0,n.zw)(e.footer)},null,8,["textContent"]))],64)):(0,a.kq)("",!0)],8,["aria-labelledby"])};const k=p},9565:(e,l,t)=>{"use strict";t.d(l,{Z:()=>c});var a=t(6252),n=t(3577),r=t(2262),i=t(2119),o=t(7621),s=t(480);const u=(0,a.aZ)({name:"NavLink",inheritAttrs:!1,props:{item:{type:Object,required:!0}},setup(e){const l=(0,i.yj)(),t=(0,o.WF)(),{item:n}=(0,r.BK)(e),u=(0,a.Fl)((()=>(0,s.ak)(n.value.link))),c=(0,a.Fl)((()=>(0,s.B2)(n.value.link)||(0,s.R5)(n.value.link))),v=(0,a.Fl)((()=>{if(!c.value)return n.value.target?n.value.target:u.value?"_blank":void 0})),d=(0,a.Fl)((()=>"_blank"===v.value)),m=(0,a.Fl)((()=>!u.value&&!c.value&&!d.value)),p=(0,a.Fl)((()=>{if(!c.value)return n.value.rel?n.value.rel:d.value?"noopener noreferrer":void 0})),k=(0,a.Fl)((()=>n.value.ariaLabel||n.value.text)),h=(0,a.Fl)((()=>{const e=Object.keys(t.value.locales);return e.length?!e.some((e=>e===n.value.link)):"/"!==n.value.link})),g=(0,a.Fl)((()=>!!h.value&&l.path.startsWith(n.value.link)));return{isActive:(0,a.Fl)((()=>!!m.value&&(n.value.activeMatch?new RegExp(n.value.activeMatch).test(l.path):g.value))),isBlankTarget:d,isRouterLink:m,linkRel:p,linkTarget:v,linkAriaLabel:k}}});u.render=function(e,l,t,r,i,o){const s=(0,a.up)("RouterLink"),u=(0,a.up)("OutboundLink");return e.isRouterLink?((0,a.wg)(),(0,a.j4)(s,(0,a.dG)({key:0,class:["nav-link",{"router-link-active":e.isActive}],to:e.item.link,"aria-label":e.linkAriaLabel},e.$attrs),{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,n.zw)(e.item.text)+" ",1),(0,a.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):((0,a.wg)(),(0,a.j4)("a",(0,a.dG)({key:1,class:"nav-link external",href:e.item.link,rel:e.linkRel,target:e.linkTarget,"aria-label":e.linkAriaLabel},e.$attrs),[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,n.zw)(e.item.text)+" ",1),e.isBlankTarget?((0,a.wg)(),(0,a.j4)(u,{key:0})):(0,a.kq)("",!0),(0,a.WI)(e.$slots,"after")],16,["href","rel","target","aria-label"]))};const c=u},2941:(e,l,t)=>{"use strict";t.d(l,{Z:()=>x});var a=t(6252),n=t(2262),r=t(3577),i=t(7621),o=t(1070),s=t(834),u=t(9963);const c={class:"icon",focusable:"false",viewBox:"0 0 32 32"},v=(0,a.Wm)("path",{d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z",fill:"currentColor"},null,-1),d=(0,a.Wm)("path",{d:"M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z",fill:"currentColor"},null,-1),m=(0,a.Wm)("path",{d:"M2 15.005h5v2H2z",fill:"currentColor"},null,-1),p=(0,a.Wm)("path",{d:"M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),k=(0,a.Wm)("path",{d:"M15 25.005h2v5h-2z",fill:"currentColor"},null,-1),h=(0,a.Wm)("path",{d:"M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z",fill:"currentColor"},null,-1),g=(0,a.Wm)("path",{d:"M25 15.005h5v2h-5z",fill:"currentColor"},null,-1),w=(0,a.Wm)("path",{d:"M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),b=(0,a.Wm)("path",{d:"M15 2.005h2v5h-2z",fill:"currentColor"},null,-1),f={class:"icon",focusable:"false",viewBox:"0 0 32 32"},L=(0,a.Wm)("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),y=(0,a.aZ)({setup(e){const l=(0,o.vs)(),t=()=>{l.value=!l.value};return(e,r)=>((0,a.wg)(),(0,a.j4)("button",{class:"toggle-dark-button",onClick:t},[(0,a.wy)(((0,a.wg)(),(0,a.j4)("svg",c,[v,d,m,p,k,h,g,w,b],512)),[[u.F8,!(0,n.SU)(l)]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)("svg",f,[L],512)),[[u.F8,(0,n.SU)(l)]])]))}}),j=(0,a.Wm)("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[(0,a.Wm)("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"})],-1),W=(0,a.aZ)({name:"ToggleSidebarButton",emits:["toggle"]});W.render=function(e,l,t,n,r,i){return(0,a.wg)(),(0,a.j4)("div",{class:"toggle-sidebar-button",onClick:l[1]||(l[1]=l=>e.$emit("toggle"))},[j])};const F=W,x=(0,a.aZ)({emits:["toggle-sidebar"],setup(e){const l=(0,i.I)(),t=(0,i.I5)(),u=(0,o.X6)(),c=(0,n.iH)(null),v=(0,n.iH)(null),d=(0,a.Fl)((()=>u.value.home||l.value)),m=(0,a.Fl)((()=>u.value.logo)),p=(0,a.Fl)((()=>t.value.title)),k=(0,n.iH)(0),h=(0,a.Fl)((()=>k.value?{maxWidth:k.value+"px"}:{})),g=(0,a.Fl)((()=>u.value.darkMode));function w(e,l){var t,a,n;const r=null==(n=null==(a=null==(t=null==e?void 0:e.ownerDocument)?void 0:t.defaultView)?void 0:a.getComputedStyle(e,null))?void 0:n[l],i=Number.parseInt(r,10);return Number.isNaN(i)?0:i}return(0,a.bv)((()=>{const e=w(c.value,"paddingLeft")+w(c.value,"paddingRight"),l=()=>{var l;window.innerWidth<719?k.value=0:k.value=c.value.offsetWidth-e-((null==(l=v.value)?void 0:l.offsetWidth)||0)};l(),window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)})),(e,l)=>{const t=(0,a.up)("RouterLink"),o=(0,a.up)("NavbarSearch");return(0,a.wg)(),(0,a.j4)("header",{ref:c,class:"navbar"},[(0,a.Wm)(F,{onToggle:l[1]||(l[1]=l=>e.$emit("toggle-sidebar"))}),(0,a.Wm)("span",{ref:v},[(0,a.Wm)(t,{to:(0,n.SU)(d)},{default:(0,a.w5)((()=>[(0,n.SU)(m)?((0,a.wg)(),(0,a.j4)("img",{key:0,class:"logo",src:(0,n.SU)(i.pJ)((0,n.SU)(m)),alt:(0,n.SU)(p)},null,8,["src","alt"])):(0,a.kq)("",!0),(0,n.SU)(p)?((0,a.wg)(),(0,a.j4)("span",{key:1,class:["site-name",{"can-hide":(0,n.SU)(m)}]},(0,r.zw)((0,n.SU)(p)),3)):(0,a.kq)("",!0)])),_:1},8,["to"])],512),(0,a.Wm)("div",{class:"navbar-links-wrapper",style:(0,n.SU)(h)},[(0,a.WI)(e.$slots,"before"),(0,a.Wm)(s.Z,{class:"can-hide"}),(0,a.WI)(e.$slots,"after"),(0,n.SU)(g)?((0,a.wg)(),(0,a.j4)(y,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(o)],4)],512)}}})},834:(e,l,t)=>{"use strict";t.d(l,{Z:()=>F});var a=t(6252);const n={key:0,class:"navbar-links"};var r=t(2119),i=t(7621),o=t(480),s=t(1070),u=t(8639),c=t(3577),v=t(9963);const d={class:"title"},m=(0,a.Wm)("span",{class:"arrow down"},null,-1),p={class:"title"},k={class:"nav-dropdown"},h={class:"dropdown-subtitle"},g={key:1},w={class:"dropdown-subitem-wrapper"};var b=t(2262),f=t(9565);const L=(0,a.aZ)({name:"DropdownLink",components:{NavLink:f.Z},props:{item:{type:Object,required:!0}},setup(e){const{item:l}=(0,b.BK)(e),t=(0,a.Fl)((()=>l.value.ariaLabel||l.value.text)),n=(0,b.iH)(!1),i=(0,r.yj)();return(0,a.YP)((()=>i.path),(()=>{n.value=!1})),{open:n,dropdownAriaLabel:t,handleDropdown:e=>{const l=0===e.detail;n.value=!!l&&!n.value},isLastItemOfArray:(e,l)=>l[l.length-1]===e}}});L.render=function(e,l,t,n,r,i){const o=(0,a.up)("NavLink");return(0,a.wg)(),(0,a.j4)("div",{class:["dropdown-wrapper",{open:e.open}]},[(0,a.Wm)("button",{class:"dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:l[1]||(l[1]=(...l)=>e.handleDropdown&&e.handleDropdown(...l))},[(0,a.Wm)("span",d,(0,c.zw)(e.item.text),1),m],8,["aria-label"]),(0,a.Wm)("button",{class:"mobile-dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:l[2]||(l[2]=l=>e.open=!e.open)},[(0,a.Wm)("span",p,(0,c.zw)(e.item.text),1),(0,a.Wm)("span",{class:["arrow",e.open?"down":"right"]},null,2)],8,["aria-label"]),(0,a.wy)((0,a.Wm)("ul",k,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.item.children,((l,t)=>((0,a.wg)(),(0,a.j4)("li",{key:l.link||t,class:"dropdown-item"},[l.children?((0,a.wg)(),(0,a.j4)(a.HY,{key:0},[(0,a.Wm)("h4",h,[l.link?((0,a.wg)(),(0,a.j4)(o,{key:0,item:l,onFocusout:t=>e.isLastItemOfArray(l,e.item.children)&&0===l.children.length&&(e.open=!1)},null,8,["item","onFocusout"])):((0,a.wg)(),(0,a.j4)("span",g,(0,c.zw)(l.text),1))]),(0,a.Wm)("ul",w,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(l.children,(t=>((0,a.wg)(),(0,a.j4)("li",{key:t.link,class:"dropdown-subitem"},[(0,a.Wm)(o,{item:t,onFocusout:a=>e.isLastItemOfArray(t,l.children)&&e.isLastItemOfArray(l,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,a.wg)(),(0,a.j4)(o,{key:1,item:l,onFocusout:t=>e.isLastItemOfArray(l,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[v.F8,e.open]])],2)};const y=L,j=e=>(0,o.HD)(e)?(0,s.sC)(e):e.children?{...e,children:e.children.map(j)}:e,W=(0,a.aZ)({name:"NavbarLinks",components:{NavLink:f.Z,DropdownLink:y},setup(){const e=(()=>{const e=(0,s.X6)();return(0,a.Fl)((()=>(e.value.navbar||[]).map(j)))})(),l=(()=>{const e=(0,r.tv)(),l=(0,i.I)(),t=(0,i.I5)(),n=(0,s.X6)();return(0,a.Fl)((()=>{var a,r;const i=Object.keys(t.value.locales);if(i.length<2)return[];const o=e.currentRoute.value.path,s=e.currentRoute.value.fullPath;return[{text:null!=(a=n.value.selectLanguageText)?a:"unkown language",ariaLabel:null!=(r=n.value.selectLanguageAriaLabel)?r:"unkown language",children:i.map((a=>{var r,i,u,c,v,d;const m=null!=(i=null==(r=t.value.locales)?void 0:r[a])?i:{},p=null!=(c=null==(u=n.value.locales)?void 0:u[a])?c:{},k=`${m.lang}`,h=null!=(v=p.selectLanguageName)?v:k;let g;if(k===t.value.lang)g=s;else{const t=o.replace(l.value,a);g=e.getRoutes().some((e=>e.path===t))?t:null!=(d=p.home)?d:a}return{text:h,link:g}}))}]}))})(),t=(()=>{const e=(0,s.X6)(),l=(0,a.Fl)((()=>e.value.repo)),t=(0,a.Fl)((()=>l.value?(0,u.c9)(l.value):null)),n=(0,a.Fl)((()=>l.value&&!(0,o.ak)(l.value)?`https://github.com/${l.value}`:l.value)),r=(0,a.Fl)((()=>n.value?e.value.repoLabel?e.value.repoLabel:null===t.value?"Source":t.value:null));return(0,a.Fl)((()=>n.value&&r.value?[{text:r.value,link:n.value}]:[]))})();return{navbarLinks:(0,a.Fl)((()=>[...e.value,...l.value,...t.value]))}}});W.render=function(e,l,t,r,i,o){const s=(0,a.up)("DropdownLink"),u=(0,a.up)("NavLink");return e.navbarLinks.length?((0,a.wg)(),(0,a.j4)("nav",n,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.navbarLinks,(e=>((0,a.wg)(),(0,a.j4)("div",{key:e.text,class:"navbar-links-item"},[e.children?((0,a.wg)(),(0,a.j4)(s,{key:0,item:e},null,8,["item"])):((0,a.wg)(),(0,a.j4)(u,{key:1,item:e},null,8,["item"]))])))),128))])):(0,a.kq)("",!0)};const F=W},8519:(e,l,t)=>{"use strict";t.d(l,{Z:()=>b});var a=t(6252),n=t(3577);const r={class:"page-meta"},i={key:0,class:"meta-item edit-link"},o={key:1,class:"meta-item last-updated"},s={class:"meta-item-label"},u={class:"meta-item-info"},c={key:2,class:"meta-item contributors"},v={class:"meta-item-label"},d={class:"meta-item-info"},m=(0,a.Uk)(", ");var p=t(7621),k=t(1070),h=t(8639),g=t(9565);const w=(0,a.aZ)({name:"PageMeta",components:{NavLink:g.Z},setup:()=>({themeLocale:(0,k.X6)(),editNavLink:(()=>{const e=(0,k.X6)(),l=(0,p.Vi)(),t=(0,p.I2)();return(0,a.Fl)((()=>{var a,n;if(null!=(n=null!=(a=t.value.editLink)?a:e.value.editLink)&&!n)return null;const{repo:r,docsRepo:i=r,docsBranch:o="main",docsDir:s="",editLinkText:u}=e.value;if(!i)return null;const c=(0,h.Fg)({docsRepo:i,docsBranch:o,docsDir:s,filePathRelative:l.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return c?{text:null!=u?u:"Edit this page",link:c}:null}))})(),lastUpdated:(()=>{const e=(0,p.I5)(),l=(0,k.X6)(),t=(0,p.Vi)(),n=(0,p.I2)();return(0,a.Fl)((()=>{var a,r,i,o;return(null==(r=null!=(a=n.value.lastUpdated)?a:l.value.lastUpdated)||r)&&(null==(i=t.value.git)?void 0:i.updatedTime)?new Date(null==(o=t.value.git)?void 0:o.updatedTime).toLocaleString(e.value.lang):null}))})(),contributors:(()=>{const e=(0,k.X6)(),l=(0,p.Vi)(),t=(0,p.I2)();return(0,a.Fl)((()=>{var a,n,r,i;return null!=(n=null!=(a=t.value.contributors)?a:e.value.contributors)&&!n||null==(i=null==(r=l.value.git)?void 0:r.contributors)?null:i}))})()})});w.render=function(e,l,t,p,k,h){const g=(0,a.up)("NavLink");return(0,a.wg)(),(0,a.j4)("footer",r,[e.editNavLink?((0,a.wg)(),(0,a.j4)("div",i,[(0,a.Wm)(g,{class:"meta-item-label",item:e.editNavLink},null,8,["item"])])):(0,a.kq)("",!0),e.lastUpdated?((0,a.wg)(),(0,a.j4)("div",o,[(0,a.Wm)("span",s,(0,n.zw)(e.themeLocale.lastUpdatedText)+": ",1),(0,a.Wm)("span",u,(0,n.zw)(e.lastUpdated),1)])):(0,a.kq)("",!0),e.contributors&&e.contributors.length?((0,a.wg)(),(0,a.j4)("div",c,[(0,a.Wm)("span",v,(0,n.zw)(e.themeLocale.contributorsText)+": ",1),(0,a.Wm)("span",d,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.contributors,((l,t)=>((0,a.wg)(),(0,a.j4)(a.HY,{key:t},[(0,a.Wm)("span",{class:"contributor",title:`email: ${l.email}`},(0,n.zw)(l.name),9,["title"]),t!==e.contributors.length-1?((0,a.wg)(),(0,a.j4)(a.HY,{key:0},[m],64)):(0,a.kq)("",!0)],64)))),128))])])):(0,a.kq)("",!0)])};const b=w},5863:(e,l,t)=>{"use strict";t.d(l,{Z:()=>w});var a=t(6252);const n={key:0,class:"page-nav"},r={class:"inner"},i={key:0,class:"prev"},o=(0,a.Uk)(" ← "),s={key:1,class:"next"},u=(0,a.Uk)(" → ");var c=t(2119),v=t(7621),d=t(480),m=t(1070),p=t(9565);const k=e=>!1===e?null:(0,d.HD)(e)?(0,m.sC)(e):!!(0,d.PO)(e)&&e,h=(e,l,t)=>{const a=e.findIndex((e=>e.link===l));if(-1!==a){const l=e[a+t];return(null==l?void 0:l.link)?l:null}for(const a of e)if(a.children){const e=h(a.children,l,t);if(e)return e}return null},g=(0,a.aZ)({name:"PageNav",components:{NavLink:p.Z},setup(){const e=(0,v.I2)(),l=(0,m.VU)(),t=(0,c.yj)();return{prevNavLink:(0,a.Fl)((()=>{const a=k(e.value.prev);return!1!==a?a:h(l.value,t.path,-1)})),nextNavLink:(0,a.Fl)((()=>{const a=k(e.value.next);return!1!==a?a:h(l.value,t.path,1)}))}}});g.render=function(e,l,t,c,v,d){const m=(0,a.up)("NavLink");return e.prevNavLink||e.nextNavLink?((0,a.wg)(),(0,a.j4)("nav",n,[(0,a.Wm)("p",r,[e.prevNavLink?((0,a.wg)(),(0,a.j4)("span",i,[o,(0,a.Wm)(m,{item:e.prevNavLink},null,8,["item"])])):(0,a.kq)("",!0),e.nextNavLink?((0,a.wg)(),(0,a.j4)("span",s,[(0,a.Wm)(m,{item:e.nextNavLink},null,8,["item"]),u])):(0,a.kq)("",!0)])])):(0,a.kq)("",!0)};const w=g},5424:(e,l,t)=>{"use strict";t.d(l,{Z:()=>h});var a=t(6252);const n={class:"sidebar"},r={class:"sidebar-links"};var i=t(1070),o=t(834),s=t(2119),u=t(9565);const c=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),v=(e,l)=>!!((e,l)=>void 0!==l&&(e.hash===l||c(e.path)===c(l)))(e,l.link)||!!l.children&&l.children.some((l=>v(e,l))),d=(e,l)=>e.link?(0,a.h)(u.Z,{...l,item:e}):(0,a.h)("p",l,e.text),m=(e,l)=>{var t;return(null===(t=e.children)||void 0===t?void 0:t.length)?(0,a.h)("ul",{class:{"sidebar-sub-items":l>0}},e.children.map((e=>(0,a.h)("li",(0,a.h)(p,{item:e,depth:l+1}))))):null},p=({item:e,depth:l=0})=>{const t=(0,s.yj)(),a=v(t,e);return[d(e,{class:{"sidebar-heading":0===l,"sidebar-item":!0,active:a}}),m(e,l)]};p.displayName="SidebarChild",p.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const k=(0,a.aZ)({name:"Sidebar",components:{NavbarLinks:o.Z,SidebarChild:p},setup:()=>({sidebarItems:(0,i.VU)()})});k.render=function(e,l,t,i,o,s){const u=(0,a.up)("NavbarLinks"),c=(0,a.up)("SidebarChild");return(0,a.wg)(),(0,a.j4)("aside",n,[(0,a.Wm)(u),(0,a.WI)(e.$slots,"top"),(0,a.Wm)("ul",r,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.sidebarItems,(e=>((0,a.wg)(),(0,a.j4)(c,{key:e.link||e.text,item:e},null,8,["item"])))),128))]),(0,a.WI)(e.$slots,"bottom")])};const h=k},8639:(e,l,t)=>{"use strict";t.d(l,{Fg:()=>i,c9:()=>n});var a=t(480);const n=e=>!(0,a.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,r={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},i=({docsRepo:e,docsBranch:l,docsDir:t,filePathRelative:i,editLinkPattern:o})=>{const s=n(e);let u;return o?u=o:null!==s&&(u=r[s]),u?u.replace(/:repo/,(0,a.ak)(e)?e:`https://github.com/${e}`).replace(/:branch/,l).replace(/:path/,(0,a.FY)(`${(0,a.U1)(t)}/${i}`)):null}}}]);