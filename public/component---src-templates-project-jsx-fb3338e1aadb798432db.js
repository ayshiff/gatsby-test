(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return u});var a=n(0),r=n.n(a),o=n(153),i=n(149),c=n(148),l=i.a.div.withConfig({displayName:"project__ExtendedCard",componentId:"sc-1eu93o2-0"})(["box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;border-radius:5px;width:70vw;height:50vh;padding:20px;color:cadetblue;"]),d=i.a.button.withConfig({displayName:"project__Button",componentId:"sc-1eu93o2-1"})(["font-size:1em;margin:1em;padding:0.25em 1em;border-radius:3px;text-decoration:none;text-align:center;&:hover{background:cadetblue;color:white;cursor:pointer;}color:cadetblue;border:1px solid cadetblue;"]);t.default=function(e){var t=e.data.prismicProject.data;return r.a.createElement(o.a,null,r.a.createElement(l,null,r.a.createElement("h3",null,t.title.text),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.text.html}}),r.a.createElement(d,{onClick:function(){return Object(c.c)("/projects/")}},"Back to projects")))};var u="3558793776"},148:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(33),l=n.n(c);n.d(t,"a",function(){return l.a}),n.d(t,"c",function(){return c.navigate});n(150);var d=r.a.createContext({}),u=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Test"}}}}},152:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(55),l=n(2),d=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=d},153:function(e,t,n){"use strict";var a=n(151),r=n(0),o=n.n(r),i=n(4),c=n.n(i),l=n(148),d=n(149),u=Object(d.a)(l.a).withConfig({displayName:"header__StyledLink",componentId:"sc-17tue5y-0"})(["font-size:1em;margin:1em;padding:0.25em 1em;border-radius:3px;text-decoration:none;&:hover{background:",";color:white;}color:",";border:1px solid ",";"],function(e){return e.theme.main},function(e){return e.theme.main},function(e){return e.theme.main}),s=d.a.div.withConfig({displayName:"header__NavBar",componentId:"sc-17tue5y-1"})(["list-style-type:none;margin:0;padding:0;display:flex;flex-direction:row;position:absolute;right:20px;top:20px;"]);u.defaultProps={theme:{main:"cadetblue"}};var m=function(e){e.siteTitle;return o.a.createElement("nav",{className:"bg-teal"},o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(s,null,o.a.createElement(u,{to:"/",style:{textDecoration:"none"}},"Home"),o.a.createElement(u,{to:"/projects",style:{textDecoration:"none"}},"Projects"),o.a.createElement(u,{to:"/contact",style:{textDecoration:"none"}},"Contact")))))},p=d.a.div.withConfig({displayName:"layout__Footer",componentId:"sc-11kbj6c-0"})(["position:fixed;left:50%;bottom:0px;transform:translate(-50%,-50%);margin:0 auto;"]),f=d.a.div.withConfig({displayName:"layout__Main",componentId:"sc-11kbj6c-1"})(["margin:100px;"]),h=d.a.a.withConfig({displayName:"layout__Account",componentId:"sc-11kbj6c-2"})(["text-decoration:none;color:cadetblue;"]);function y(e){var t=e.children;return o.a.createElement(l.b,{query:"2994927498",render:function(e){return o.a.createElement(f,null,o.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",null,t),o.a.createElement(p,null,o.a.createElement("p",null,"Made with ❤️ by ",o.a.createElement(h,{href:"https://github.com/ayshiff"},"ayshiff"))))},data:a})}y.propTypes={children:c.a.node.isRequired};t.a=y}}]);
//# sourceMappingURL=component---src-templates-project-jsx-fb3338e1aadb798432db.js.map