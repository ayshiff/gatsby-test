(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(153),i=a(149),l=a(148),c=i.a.input.withConfig({displayName:"contact__Input",componentId:"jhaufl-0"})(["border:none;border-bottom:1px solid cadetblue;height:30px;font-size:16px"]),u=i.a.textarea.withConfig({displayName:"contact__TextArea",componentId:"jhaufl-1"})(["border-color:cadetblue;border-radius:5px;font-size:16px"]),s=i.a.form.withConfig({displayName:"contact__Form",componentId:"jhaufl-2"})(["display:flex;flex-direction:column;width:500px;margin:0 auto;"]),m=i.a.label.withConfig({displayName:"contact__Label",componentId:"jhaufl-3"})(["margin-bottom:15px;margin-top:15px;"]),d=i.a.button.withConfig({displayName:"contact__Button",componentId:"jhaufl-4"})(["margin-bottom:15px;margin-top:15px;font-size:1em;margin:1em;padding:0.25em 1em;border-radius:3px;text-decoration:none;text-align:center;&:hover{background:",";color:white;cursor:pointer;}color:",";border:1px solid ",";"],function(e){return e.theme.main},function(e){return e.theme.main},function(e){return e.theme.main});d.defaultProps={theme:{main:"cadetblue"}};t.default=function(){var e=Object(n.useState)(""),t=e[0],a=e[1],i=Object(n.useState)(""),p=i[0],f=i[1],h=Object(n.useState)(""),b=h[0],g=h[1],y=Object(n.useState)(""),x=y[0],v=y[1];return r.a.createElement(o.a,null,r.a.createElement(s,{onSubmit:function(e){e.preventDefault(),fetch("https://hooks.zapier.com/hooks/catch/4847384/70nbud/",{method:"post",headers:{},body:JSON.stringify({first_name:t,last_name:p,email:b,message:x})}).then(function(e){return e.json()}).then(function(e){"success"===e.status&&Object(l.c)("/")})}},r.a.createElement(m,{className:"block font-bold mb-2 text-xs uppercase",htmlFor:"first-name"},"First Name"),r.a.createElement(c,{className:"appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full",id:"first-name",type:"text",placeholder:"",value:t,onChange:function(e){return a(e.target.value)}}),r.a.createElement(m,{className:"block font-bold mb-2 text-xs uppercase",htmlFor:"last-name"},"Last Name"),r.a.createElement(c,{className:"appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full",id:"last-name",type:"text",placeholder:"",value:p,onChange:function(e){return f(e.target.value)},required:!0}),r.a.createElement(m,{className:"block font-bold mb-2 text-xs uppercase",htmlFor:"last-name"},"Email"),r.a.createElement(c,{className:"appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full",id:"email",type:"email",placeholder:"",value:b,onChange:function(e){return g(e.target.value)},required:!0}),r.a.createElement(m,{className:"block font-bold mb-2 text-xs uppercase",htmlFor:"message"},"Message"),r.a.createElement(u,{className:"appearance-none bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full",placeholder:"Say something...",rows:"8",value:x,onChange:function(e){return v(e.target.value)}}),r.a.createElement(d,null,"Submit")))}},148:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a}),a.d(t,"c",function(){return l.navigate});a(150);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Test"}}}}},152:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(55),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},153:function(e,t,a){"use strict";var n=a(151),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(148),u=a(149),s=Object(u.a)(c.a).withConfig({displayName:"header__StyledLink",componentId:"sc-17tue5y-0"})(["font-size:1em;margin:1em;padding:0.25em 1em;border-radius:3px;text-decoration:none;&:hover{background:",";color:white;}color:",";border:1px solid ",";"],function(e){return e.theme.main},function(e){return e.theme.main},function(e){return e.theme.main}),m=u.a.div.withConfig({displayName:"header__NavBar",componentId:"sc-17tue5y-1"})(["list-style-type:none;margin:0;padding:0;display:flex;flex-direction:row;position:absolute;right:20px;top:20px;"]);s.defaultProps={theme:{main:"cadetblue"}};var d=function(e){e.siteTitle;return o.a.createElement("nav",{className:"bg-teal"},o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(m,null,o.a.createElement(s,{to:"/",style:{textDecoration:"none"}},"Home"),o.a.createElement(s,{to:"/projects",style:{textDecoration:"none"}},"Projects"),o.a.createElement(s,{to:"/contact",style:{textDecoration:"none"}},"Contact")))))},p=u.a.div.withConfig({displayName:"layout__Footer",componentId:"sc-11kbj6c-0"})(["position:fixed;left:50%;bottom:0px;transform:translate(-50%,-50%);margin:0 auto;"]),f=u.a.div.withConfig({displayName:"layout__Main",componentId:"sc-11kbj6c-1"})(["margin:100px;"]),h=u.a.a.withConfig({displayName:"layout__Account",componentId:"sc-11kbj6c-2"})(["text-decoration:none;color:cadetblue;"]);function b(e){var t=e.children;return o.a.createElement(c.b,{query:"2994927498",render:function(e){return o.a.createElement(f,null,o.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",null,t),o.a.createElement(p,null,o.a.createElement("p",null,"Made with ❤️ by ",o.a.createElement(h,{href:"https://github.com/ayshiff"},"ayshiff"))))},data:n})}b.propTypes={children:l.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-contact-js-db1ca2fd3a7e69cf1efa.js.map