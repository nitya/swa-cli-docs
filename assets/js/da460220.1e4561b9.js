"use strict";(self.webpackChunkdocs_www=self.webpackChunkdocs_www||[]).push([[254],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:e},s),{},{components:n})):r.createElement(f,o({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},724:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},c="swa",p={unversionedId:"cli/swa",id:"cli/swa",title:"swa",description:"You can use the following options to override default values for any swa command:",source:"@site/docs/cli/1-swa.md",sourceDirName:"cli",slug:"/cli/swa",permalink:"/swa-cli-docs/docs/cli/swa",editUrl:"https://github.com/azure/static-web-apps-cli/tree/main/docs/www/docs/cli/1-swa.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"About SWA CLI",permalink:"/swa-cli-docs/docs/intro"},next:{title:"swa login",permalink:"/swa-cli-docs/docs/cli/swa-login"}},s={},u=[],d={toc:u};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"swa"},(0,i.kt)("inlineCode",{parentName:"h1"},"swa")),(0,i.kt)("p",null,"You can use the following options to override default values for any ",(0,i.kt)("inlineCode",{parentName:"p"},"swa")," command:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,i.kt)("td",{parentName:"tr",align:null},"Enable verbose output. Values are: ",(0,i.kt)("inlineCode",{parentName:"td"},"silly, info, log, silent")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"log")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--verbose=silly"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--config")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to ",(0,i.kt)("a",{parentName:"td",href:"#swa-cli.config.json"},(0,i.kt)("inlineCode",{parentName:"a"},"swa-cli.config.json"))," file to use"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"./swa-cli.config.json")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--config=./path/to/swa-cli.config.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--print-config")),(0,i.kt)("td",{parentName:"tr",align:null},"Print all resolved options"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--print-config")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"--print-config=true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--swa-config-location")),(0,i.kt)("td",{parentName:"tr",align:null},"The directory where the ",(0,i.kt)("inlineCode",{parentName:"td"},"staticwebapp.config.json")," file is located"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"./")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--swa-config-location=./app"))))),(0,i.kt)("p",null,"|"))}m.isMDXComponent=!0}}]);