(this["webpackJsonpstranger-things-2"]=this["webpackJsonpstranger-things-2"]||[]).push([[0],{33:function(e,t,n){"use strict";n.r(t);var r=n(10),s=n(2),c=n.n(s),a=n(3),o=n(4),i=n(1),u=n(18),l=n.n(u),j=n(11),p=n(5),b="https://strangers-things.herokuapp.com/api",d="2107-CSU-RM-WEB-PT";function h(e){return O.apply(this,arguments)}function O(){return(O=Object(a.a)(c.a.mark((function e(t){var n,r,s,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=11;break}return e.next=4,fetch("".concat(b,"/").concat(d,"/posts"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r.data.posts);case 11:return e.next=13,fetch("".concat(b,"/").concat(d,"/posts"),{method:"GET",headers:{"Content-Type":"application/json"}});case 13:return s=e.sent,e.next=16,s.json();case 16:return a=e.sent,e.abrupt("return",a.data.posts);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.error(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})))).apply(this,arguments)}function x(e,t,n){return f.apply(this,arguments)}function f(){return(f=Object(a.a)(c.a.mark((function e(t,n,r){var s,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r===n){e.next=4;break}return alert("Your passwords dont match, Please try again"),e.abrupt("return");case 4:return e.next=7,fetch("".concat(b,"/").concat(d,"/users/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:t,password:n}})});case 7:return s=e.sent,e.next=10,s.json();case 10:return a=e.sent,o=a.data.token,e.abrupt("return",o);case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function v(e,t){return m.apply(this,arguments)}function m(){return(m=Object(a.a)(c.a.mark((function e(t,n){var r,s,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t&&n||alert("Please enter username and password"),e.next=5,fetch("".concat(b,"/").concat(d,"/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:t,password:n}})});case 5:return r=e.sent,e.next=8,r.json();case 8:return s=e.sent,a=s.data.token,console.log("this is the token "+a),localStorage.setItem("token",a),e.abrupt("return",a);case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}var g=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(b,"/").concat(d,"/users/me"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,console.log(r),e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,s,a,o){var i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(b,"/").concat(d,"/posts"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({post:{title:n,description:s,price:a,location:r,willDeliver:o}})});case 3:return i=e.sent,e.next=6,i.json();case 6:u=e.sent,console.log("my result is",u),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n,r,s,c,a){return e.apply(this,arguments)}}(),k=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(b,"/").concat(d,"/posts/").concat(id,"/messages"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer"+t},body:JSON.stringify({message:{content:n}})});case 3:return r=e.sent,e.next=6,r.json();case 6:if(s=e.sent,console.log(s),id){e.next=10;break}throw new Error("error sending message");case 10:return e.abrupt("return",s);case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n){return e.apply(this,arguments)}}();var w=n(0),S=function(e){var t=e.history,n=e.match,r=e.setToken,s=Object(i.useState)(""),u=Object(o.a)(s,2),l=u[0],p=u[1],b=Object(i.useState)(""),d=Object(o.a)(b,2),h=d[0],O=d[1],f=Object(i.useState)(""),m=Object(o.a)(f,2),g=m[0],y=m[1];return Object(w.jsx)("div",{id:"login",children:Object(w.jsxs)("form",{onSubmit:function(){var e=Object(a.a)(c.a.mark((function e(s){var a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),"/register"!==n.url){e.next=7;break}return e.next=4,x(h,l,g);case 4:a=e.sent,r(a),t.push("/posts");case 7:if("/login"!==n.url){e.next=13;break}return e.next=10,v(h,l);case 10:o=e.sent,r(o),t.push("/posts");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{className:"form-label",children:"Username"}),Object(w.jsx)("input",{type:"text",value:h,placeholder:"your username",required:!0,onChange:function(e){O(e.target.value)}})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{className:"form-label",children:"Password"}),Object(w.jsx)("input",{type:"text",value:l,placeholder:"",required:!0,onChange:function(e){p(e.target.value)}})]}),"/register"===n.url?Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{className:"form-label",children:"Confirm password"}),Object(w.jsx)("input",{type:"text",value:g,placeholder:"",required:!0,onChange:function(e){y(e.target.value)}})]}):null,Object(w.jsx)("button",{type:"submit",className:"submitButton",children:"Submit"}),Object(w.jsx)("button",{onClick:function(){localStorage.removeItem("token"),r(null),t.push("/login")},children:"Log Out"}),"/register"===n.url?Object(w.jsx)(j.b,{to:"/login",children:"Already have an account?"}):Object(w.jsx)(j.b,{to:"/register",children:"Dont have an account? "})]})})},P=function(e){var t=e.posts,n=e.token,r=e.setPosts,s=e.history,o=(e.setSelectedPost,e.storedPosts);return Object(i.useEffect)(Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)}))),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{children:"My posts"}),Object(w.jsxs)("p",{children:[" ",Object(w.jsx)("button",{onClick:function(){localStorage.removeItem("token"),s.push("/login")},children:"Log Out"}),"   "]}),Object(w.jsx)(D,{storedPosts:o,setPosts:r}),t.map((function(e,t){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:e.title}),Object(w.jsx)("p",{children:e.description}),Object(w.jsx)("p",{children:e.price}),Object(w.jsxs)("p",{children:[" ",e.location]}),Object(w.jsxs)("p",{children:[" Will Deliver? (Enter true or false) ",e.willDeliver," "]}),Object(w.jsxs)("div",{children:[n?Object(w.jsx)(q,{token:n}):null," "," "]}),Object(w.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(){s.push("/posts/".concat(e._id))},children:" More information about this item"})," "]},e._id)}))]})},C=function(e){var t=e.posts,n=e.selectedPost,r=e.setSelectedPost,s=(e.match,e.history),c=Object(p.f)().id;return Object(i.useEffect)((function(){var e,n=(e=c,t.find((function(t){return t._id===e}))||{});console.log(n),r(n)}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)("button",{onClick:function(){localStorage.removeItem("token"),s.push("/")},children:"Log Out"}),Object(w.jsx)("h1",{children:"More information on this post"}),Object(w.jsxs)("h1",{children:["Title: ",n.title]}),Object(w.jsxs)("p",{children:["Description: ",n.description]}),Object(w.jsxs)("p",{children:["Price: ",n.price]}),Object(w.jsx)(q,{})]})},T=function(e){var t=e.token,n=(e.posts,e.setPosts),r=e.history,s=Object(i.useState)(""),u=Object(o.a)(s,2),l=u[0],j=u[1],p=Object(i.useState)(""),b=Object(o.a)(p,2),d=b[0],O=b[1],x=Object(i.useState)(""),f=Object(o.a)(x,2),v=f[0],m=f[1],g=Object(i.useState)(""),k=Object(o.a)(g,2),S=k[0],P=k[1],C=Object(i.useState)(""),T=Object(o.a)(C,2),D=T[0],E=T[1];return Object(w.jsxs)("form",{onSubmit:function(){var e=Object(a.a)(c.a.mark((function e(s){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,y(t,l,S,v,d,D);case 3:return e.next=5,h();case 5:a=e.sent,n(a),r.push("/posts");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(w.jsx)("p",{children:"Create a post"}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Title"}),Object(w.jsx)("input",{onChange:function(e){return j(e.target.value)},value:l,type:"text",placeHolder:"title",required:!0})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Price"}),Object(w.jsx)("input",{onChange:function(e){return O(e.target.value)},value:d,type:"text",placeHolder:"price",required:!0})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Description"}),Object(w.jsx)("input",{onChange:function(e){return m(e.target.value)},value:v,type:"text",placeHolder:"description",required:!0})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Location"}),Object(w.jsx)("input",{onChange:function(e){return P(e.target.value)},value:S,type:"text",placeHolder:"location",required:!0})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Deliver?"}),Object(w.jsx)("input",{onChange:function(e){return E(e.target.value)},value:D,type:"text",placeHolder:"deliver",required:!0})]}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{type:"submit",children:"Create new post"})})]})},D=function(e){var t=e.storedPosts,n=e.setPosts,r=Object(i.useState)(""),s=Object(o.a)(r,2),c=s[0],a=s[1];return Object(i.useEffect)((function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));n(e)}),[c]),Object(w.jsxs)("div",{children:[Object(w.jsx)("label",{children:"Search Posts "}),Object(w.jsx)("input",{value:c,placeholder:"search",onChange:function(e){return a(e.target.value)}})]})},E=n(21),N=function(e){var t=e.token,n=(e.history,Object(i.useState)([])),r=Object(o.a)(n,2),s=r[0],u=r[1],l=Object(i.useState)([]),j=Object(o.a)(l,2),p=j[0],b=j[1];return Object(E.useEffect)(Object(a.a)(c.a.mark((function e(){var n,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:if(!(n=e.sent).data){e.next=10;break}r=n.data.posts,s=n.data.messages,u(r),b(s),e.next=11;break;case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e)}))),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{children:" Your posts and messages"}),Object(w.jsx)("br",{}),s.map((function(e,t){e.title,e.author,e.location,e.description,e.price,e.willDeliver,p.map((function(e,t){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:"Messages"}),Object(w.jsxs)("p",{children:["Message: ",e.post.title]}),Object(w.jsxs)("p",{children:["From: ",e.fromUser.username]}),Object(w.jsxs)("p",{children:["Content: ",e.content]})]})}))}))]})},q=function(e,t){var n=Object(i.useState)(""),r=Object(o.a)(n,2),s=r[0],u=r[1];Object(p.e)();return Object(w.jsx)("div",{children:Object(w.jsxs)("form",{onSubmit:function(){var n=Object(a.a)(c.a.mark((function n(r){var s,a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.next=3,k(e,t);case 3:s=n.sent,a=s.data.message.content,u(a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),children:[Object(w.jsx)("h1",{children:"Write a message to this seller"}),Object(w.jsx)("textarea",{type:"text",placeholder:"type your message here",value:s,onChange:function(e){u(e.target.value)}}),Object(w.jsx)("button",{children:" Deliver message"})]})})},B=function(){var e=Object(i.useState)(null),t=Object(o.a)(e,2),n=t[0],s=t[1],u=Object(i.useState)([]),l=Object(o.a)(u,2),b=l[0],d=l[1],O=Object(i.useState)({}),x=Object(o.a)(O,2),f=x[0],v=x[1],m=Object(i.useState)([]),g=Object(o.a)(m,2),y=g[0],k=g[1],D=!!n;return Object(i.useEffect)(Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,d(t),k(t);case 5:case"end":return e.stop()}}),e)}))),[]),Object(i.useEffect)((function(){var e=localStorage.getItem("token");e&&s(e)}),[]),Object(w.jsxs)(j.a,{children:[Object(w.jsxs)("div",{id:"navBar",children:[D?Object(w.jsx)(j.b,{to:"/userprofile ",children:"Profile "}):Object(w.jsx)(j.b,{to:"/login",children:" Login "}),D?Object(w.jsx)(j.b,{to:"/newposts",children:" Make New Post "}):null,Object(w.jsx)(j.b,{to:"/register",children:" Register "}),Object(w.jsx)(j.b,{to:"/posts",children:" Posts "}),Object(w.jsx)("h1",{children:" Welcome to posts "})]}),Object(w.jsx)(p.a,{exact:!0,path:"/posts",render:function(e){return Object(w.jsx)(P,Object(r.a)(Object(r.a)({token:n},e),{},{posts:b,setPosts:d,setSelectedPost:v,storedPosts:y}))}}),Object(w.jsx)(p.a,{exact:!0,path:"/posts/:id",render:function(e){return Object(w.jsx)(C,Object(r.a)(Object(r.a)({token:n},e),{},{posts:b,setPosts:d,setSelectedPost:v,selectedPost:f}))}}),Object(w.jsx)(p.a,{path:"/login",render:function(e){return Object(w.jsx)(S,Object(r.a)(Object(r.a)({},e),{},{setToken:s}))}}),Object(w.jsx)(p.a,{path:"/register",render:function(e){return Object(w.jsx)(S,Object(r.a)(Object(r.a)({},e),{},{setToken:s}))}}),Object(w.jsx)(p.a,{path:"/newposts",render:function(e){return Object(w.jsx)(T,Object(r.a)(Object(r.a)({token:n},e),{},{posts:b,setPosts:d}))}}),Object(w.jsx)(p.a,{exact:!0,path:"/userprofile",render:function(e){return Object(w.jsx)(N,Object(r.a)({token:n},e))}}),Object(w.jsx)(p.a,{path:"/message",render:function(e){return Object(w.jsx)(Message,Object(r.a)({token:n,posts:b},e))}})]})};l.a.render(Object(w.jsx)(B,{}),document.getElementById("app"))}},[[33,1,2]]]);
//# sourceMappingURL=main.7d666fb8.chunk.js.map