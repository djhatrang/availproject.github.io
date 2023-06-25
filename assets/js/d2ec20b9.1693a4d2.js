"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[0],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,v=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return a?n.createElement(v,i(i({ref:t},d),{},{components:a})):n.createElement(v,i({ref:t},d))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8581:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),o=a(4996);const i={id:"avail-upgrade-validator-node",title:"Upgrading Validators",sidebar_label:"Upgrading Validators",description:"Learn about upgrading a validator",keywords:["docs","avail","node","validator"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"avail-upgrade-validator-node"},l=void 0,s={unversionedId:"join-the-network/run-avail/validator-ops/avail-upgrade-validator-node",id:"join-the-network/run-avail/validator-ops/avail-upgrade-validator-node",title:"Upgrading Validators",description:"Learn about upgrading a validator",source:"@site/docs/join-the-network/run-avail/validator-ops/0030-avail-upgrade-validator-node.md",sourceDirName:"join-the-network/run-avail/validator-ops",slug:"/join-the-network/run-avail/validator-ops/avail-upgrade-validator-node",permalink:"/join-the-network/run-avail/validator-ops/avail-upgrade-validator-node",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"avail-upgrade-validator-node",title:"Upgrading Validators",sidebar_label:"Upgrading Validators",description:"Learn about upgrading a validator",keywords:["docs","avail","node","validator"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"avail-upgrade-validator-node"},sidebar:"defaultSidebar",previous:{title:"Backup Validator",permalink:"/join-the-network/run-avail/validator-ops/avail-backup-node"},next:{title:"Monitoring Validators",permalink:"/join-the-network/run-avail/validator-ops/avail-monitoring-validator-node"}},p={},d=[{value:"Upgrade Process",id:"upgrade-process",level:2}],u={toc:d},c="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"upgrade-process"},"Upgrade Process"),(0,r.kt)("p",null,"Upgrading a Avail node involves a careful process to ensure a smooth transition without disruption to the network. Here's a step-by-step guide on how to upgrade a Avail node,\nincluding the process of switching nodes using rotated keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Preparing for the Upgrade:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ensure you have a backup of your node's data and keystore files. This ensures you can restore your node in case of any issues during the upgrade process.\nFamiliarize yourself with the release notes and documentation of the new Avail version to understand any specific instructions or requirements."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setting up Node B:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Install and set up the new version of Avail on a separate server or machine. This will be Node B, which will eventually replace Node A. Configure Node B with the\nnecessary configuration files, including the customizations you had on Node A. Ensure that Node B is fully synchronized with the Avail network before proceeding."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Generating Rotated Keys:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Generate a new set of keys for Node B using ",(0,r.kt)("inlineCode",{parentName:"li"},"author_rotateKeys"),". "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Updating Session Keys:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open Avail Apps and navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.avail.tools/#/staking/actions"},(0,r.kt)("strong",{parentName:"a"},"Network ","\u2192"," Staking")),". You will be able to select from a hidden menu the option\nto change session keys."),(0,r.kt)("img",{src:(0,o.Z)("img/avail/validator-change-session-keys.png"),width:"100%",height:"100%"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Can enter the hex-encoded value obtained from ",(0,r.kt)("inlineCode",{parentName:"p"},"author_rotateKeys")," and click on ",(0,r.kt)("strong",{parentName:"p"},"Set Session Key"),"."),(0,r.kt)("img",{src:(0,o.Z)("img/avail/validator-change-session-keys-2.png"),width:"100%",height:"100%"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You will now be able to see the new and old hex-encoded value. In the next epoch or two it will only show the new hex-encoded\nvalue."),(0,r.kt)("img",{src:(0,o.Z)("img/avail/validator-change-session-keys-3.png"),width:"100%",height:"100%"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After a few epochs Node B will be performing the validator tasks. You must ensure this by looking in the logs for sealed blocks. You should see ",(0,r.kt)("inlineCode",{parentName:"p"},"\ud83c\udf81 Prepared block for proposing")," appear\nin the logs of Node B and stop appearing Node A."))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can now upgrade Node A. You can repeat the process to switch back to Node A.")),(0,r.kt)("admonition",{title:"Ensure the node has switched",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Before turning Node A off you must ensure Node B has become the active validator. In Avail Apps it may show the switch, however there is an epoch delay before the node\nfully switches over. The best is to look in the logs and confirm the new node is sealing the blocks.")))}g.isMDXComponent=!0}}]);