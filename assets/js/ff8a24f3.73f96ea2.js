"use strict";(self.webpackChunkdocs_www=self.webpackChunkdocs_www||[]).push([[553],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},584:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),o=["components"],s={sidebar_position:3},i="2. Start The Emulator",p={unversionedId:"use/emulator",id:"use/emulator",title:"2. Start The Emulator",description:"The SWA Emulator is run by using the swa start command.",source:"@site/docs/use/2-emulator.md",sourceDirName:"use",slug:"/use/emulator",permalink:"/swa-cli-docs/docs/use/emulator",editUrl:"https://github.com/azure/static-web-apps-cli/tree/main/docs/www/docs/use/2-emulator.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"1. Install the SWA CLI",permalink:"/swa-cli-docs/docs/use/install"},next:{title:"4. Start the API Server",permalink:"/swa-cli-docs/docs/use/api-server"}},u={},d=[{value:"2.1 Serve from current folder",id:"21-serve-from-current-folder",level:2},{value:"2.2 Serve from a specified folder",id:"22-serve-from-a-specified-folder",level:2},{value:"2.3 Serve from dev server",id:"23-serve-from-dev-server",level:2},{value:"2.4 Launch dev server to serve",id:"24-launch-dev-server-to-serve",level:2},{value:"2.5 Default Dev Server ports",id:"25-default-dev-server-ports",level:2}],c={toc:d};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"2-start-the-emulator"},"2. Start The Emulator"),(0,l.kt)("p",null,"The SWA Emulator is run by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"swa start")," command."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It runs on ",(0,l.kt)("inlineCode",{parentName:"li"},"http://localhost:4280")," by default."),(0,l.kt)("li",{parentName:"ul"},"Read the ",(0,l.kt)("a",{parentName:"li",href:"/docs/cli/swa-start"},"docs")," for more command details.")),(0,l.kt)("h2",{id:"21-serve-from-current-folder"},"2.1 Serve from current folder"),(0,l.kt)("p",null,"By default, the CLI starts and serves any the static content from the current working directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swa start\n")),(0,l.kt)("h2",{id:"22-serve-from-a-specified-folder"},"2.2 Serve from a specified folder"),(0,l.kt)("p",null,"You can override the behavior to start the emulator with a different staic assets folder. For instance, if your application artifacts are in ",(0,l.kt)("inlineCode",{parentName:"p"},"./my-dist")," then use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swa start ./my-dist\n")),(0,l.kt)("h2",{id:"23-serve-from-dev-server"},"2.3 Serve from dev server"),(0,l.kt)("p",null,"When developing your SWA front-end, you may want to use the front-end framework's default dev server (started using its CLI) to get benefits like liverealod and hot module replacement (HMR). ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"p"},"For Example:")," Angular devs may use ",(0,l.kt)("inlineCode",{parentName:"p"},"ng serve")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"npm start")," to run that dev server. ",(0,l.kt)("br",null)),(0,l.kt)("p",null,"SWA CLI can reverse proxy requests to that dev server, allowing you to retain the above benefits during local development of your SWA. You can achieve this in two steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Start the local dev server as usual. ",(0,l.kt)("em",{parentName:"li"},"Note the URL (localhost:port) the dev server runs on.")),(0,l.kt)("li",{parentName:"ol"},"Start the SWA CLI in a new terminal ",(0,l.kt)("em",{parentName:"li"},"with dev server URL specified."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swa start <dev-server-url>\n")),(0,l.kt)("h2",{id:"24-launch-dev-server-to-serve"},"2.4 Launch dev server to serve"),(0,l.kt)("p",null,"You can simplify your workflow further by having the SWA CLI launch the dev server for you. Simply pass the launch command for the dev server to the ",(0,l.kt)("inlineCode",{parentName:"p"},"--run")," option of ",(0,l.kt)("inlineCode",{parentName:"p"},"swa start"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swa start <dev-server-url> --run <dev-server-launch-cmd>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"For example:"),"\nHere is what that lools like for a few well-known front-end technologies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# npm start script (React)\nswa start http://localhost:3000 --run "npm start"\n\n# dotnet watch (Blazor)\nswa start http://localhost:5000 --run "dotnet watch run"\n\n# Jekyll\nswa start http://localhost:4000 --run "jekyll serve"\n')),(0,l.kt)("p",null,"Have a custom script that launches the dev server for you? That works too:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# custom script\nswa start http://localhost:4200 --run "./startup.sh"\n')),(0,l.kt)("p",null,"Then access the application with the emulated services from ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:4280")),(0,l.kt)("h2",{id:"25-default-dev-server-ports"},"2.5 Default Dev Server ports"),(0,l.kt)("p",null,"Here are some of the default ports used by dev servers in popular front-end frameworks and static site generators today."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Tool"),(0,l.kt)("th",{parentName:"tr",align:null},"Port"),(0,l.kt)("th",{parentName:"tr",align:null},"Command"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://angular.io/cli"},"Angular")),(0,l.kt)("td",{parentName:"tr",align:null},"4200"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"swa start http://localhost:4200"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor"},"Blazor WebAssembly")),(0,l.kt)("td",{parentName:"tr",align:null},"5000"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"swa start http://localhost:5000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.gatsbyjs.com/docs/gatsby-cli/"},"Gatsby")),(0,l.kt)("td",{parentName:"tr",align:null},"8000"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"swa start http://localhost:8000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://gohugo.io/commands/hugo_server/"},"Hugo")),(0,l.kt)("td",{parentName:"tr",align:null},"1313"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"swa start http://localhost:1313"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://nextjs.org/"},"Next.js")),(0,l.kt)("td",{parentName:"tr",align:null},"3000"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"swa start http://localhost:3000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://reactjs.org/docs/create-a-new-react-app.html"},"React (Create React App)")),(0,l.kt)("td",{parentName:"tr",align:null},"3000"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"swa start http://localhost:3000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/lukeed/sirv/tree/master/packages/sirv-cli/"},"Svelte (sirv-cli)")),(0,l.kt)("td",{parentName:"tr",align:null},"5000"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"swa start http://localhost:5000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://cli.vuejs.org/"},"Vue")),(0,l.kt)("td",{parentName:"tr",align:null},"8080"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"swa start http://localhost:8080"))))))}m.isMDXComponent=!0}}]);