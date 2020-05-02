(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return b})),l.d(t,"metadata",(function(){return c})),l.d(t,"rightToc",(function(){return o})),l.d(t,"default",(function(){return u}));var n=l(1),r=l(9),a=(l(0),l(163)),b={id:"players",title:"Players (free-for-all)"},c={id:"modules/players",title:"Players (free-for-all)",description:"The players module is the basis for all team-less gamemodes, such as FFA, UHC, or hunger games style matches.",source:"@site/docs/modules/players.mdx",permalink:"/PGM/docs/modules/players",editUrl:"https://github.com/Electroid/PGM/edit/docs/docs/modules/players.mdx",sidebar:"Modules",previous:{title:"Mob Spawning",permalink:"/PGM/docs/modules/mobs"},next:{title:"Teams",permalink:"/PGM/docs/modules/teams"}},o=[],s={rightToc:o};function u(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The players module is the basis for all team-less gamemodes, such as FFA, UHC, or hunger games style matches.\nThis module is not limited to matches focused on combat,\nit can also be used in combat-less game modes where players have to collect specific items, etc.\nWin conditions are set by using the score and time limit modules."),Object(a.b)("span",{className:"badge badge--danger"},"NOTE")," This gamemode is not compatible with the teams module!",Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<players />")),Object(a.b)("td",null,"The players node, containing player settings."))))),Object(a.b)("h5",{id:"players-attributes"},"Players Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",{style:{minWidth:"130px"}},"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"min")),Object(a.b)("td",null,"Minimum amount of players required."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"max")),Object(a.b)("td",null,"Player limit -- normal players cannot join the match once it reaches this size.",Object(a.b)("br",null),Object(a.b)("i",null,"Premium players may join over this limit until"," ",Object(a.b)("label",null,"max-overfill")," is reached.")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"max-overfill")),Object(a.b)("td",null,"Player overfill -- premium players cannot join the match once it reaches this size.",Object(a.b)("br",null),Object(a.b)("i",null,"Must be greater than the defined ",Object(a.b)("label",null,"max"),".")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show-name-tags")),Object(a.b)("td",null,"Specify who can see the name tags of players.",Object(a.b)("br",null),"Accepts:",Object(a.b)("label",null,"true"),", ",Object(a.b)("label",null,"false"),", ",Object(a.b)("label",null,"allies")," or ",Object(a.b)("label",null,"enemies")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Enum")),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"colors")),Object(a.b)("td",null,"Auto assign a unique color to each player, works for up to 10 players and then colors repeat."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false"))))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<players max="16" max-overfill="20"/>\n<time>8m</time>\n\n<score>\n    <kills>1</kills>\n    <deaths>1</deaths>\n</score>\n')))}u.isMDXComponent=!0},163:function(e,t,l){"use strict";l.d(t,"a",(function(){return i})),l.d(t,"b",(function(){return p}));var n=l(0),r=l.n(n);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function b(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function c(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?b(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):b(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):c({},t,{},e)),l},i=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,b=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),i=u(l),d=n,p=i["".concat(b,".").concat(d)]||i[d]||m[d]||a;return l?r.a.createElement(p,c({ref:t},s,{components:l})):r.a.createElement(p,c({ref:t},s))}));function p(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,b=new Array(a);b[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var s=2;s<a;s++)b[s]=l[s];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,l)}d.displayName="MDXCreateElement"}}]);