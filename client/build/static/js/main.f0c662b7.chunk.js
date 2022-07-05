(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{124:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),o=a(14),i=a(47),u=a(88),s=a(64),p=a(12),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(p.a)({},null===t||void 0===t?void 0:t.data))),Object(p.a)(Object(p.a)({},e),{},{authData:null===t||void 0===t?void 0:t.data});case"LOGOUT":return localStorage.clear(),Object(p.a)(Object(p.a)({},e),{},{authData:null});default:return e}},d=Object(i.b)({categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL_CATEGORY":return t.payload;case"CREATE_CATEGORY":return[].concat(Object(s.a)(e),[t.payload]);case"UPDATE_CATEGORY":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE_CATEGORY":return e.filter((function(e){return e._id!==t.payload}));default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"CREATE":return[].concat(Object(s.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}},auth:m}),f=a(171),g=a(42),v=a(6),b=a(16),E=a(161),h=a(127),y=a(163),x=a(176),O=a(164),j=a(157),C=a(160),w=Object(j.a)((function(e){return{appBar:{borderRadius:10,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 20px"},heading:{color:"rgb(255 0 155)",textDecoration:"none"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"350px"},userName:{display:"flex",margin:"0 10px",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{margin:"0 5px",color:e.palette.getContrastText(C.a[500]),backgroundColor:C.a[300]}}})),S=a(83);var N=function(){var e=w(),t=Object(o.b)(),a=Object(v.g)(),c=Object(v.f)(),l=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),i=Object(b.a)(l,2),u=i[0],s=i[1],p=function(){t({type:"LOGOUT"}),a("/"),s(null)};return Object(n.useEffect)((function(){var e=null===u||void 0===u?void 0:u.token;e&&(1e3*Object(S.a)(e).exp<(new Date).getTime()&&p());s(JSON.parse(localStorage.getItem("profile")))}),[c]),r.a.createElement(E.a,{className:e.appBar,position:"static",color:"inherit"},r.a.createElement("div",{className:e.brandContainer},r.a.createElement(h.a,{component:g.b,to:"/",className:e.heading,variant:"h5",align:"center"},"Inventory Management")),r.a.createElement(y.a,{className:e.toolbar},u?r.a.createElement("div",{className:e.profile},r.a.createElement(x.a,{className:e.purple,alt:u.result.name,src:u.result.imageUrl},u.result.name.charAt(0)),r.a.createElement(h.a,{className:e.userName,variant:"h6"},u.result.name),r.a.createElement(O.a,{variant:"contained",className:e.logout,color:"primary",onClick:p},"Logout")):r.a.createElement(O.a,{component:g.b,to:"/auth",variant:"contained",color:"primary"},"Signup")))},k=a(175),A=a(167),T=a(166),_=a(165),I=a(63),D=a.n(I),P=a(62),R=a.n(P),L=Object(j.a)({card:{display:"flex",flexDirection:"column",justifyContent:"space-between",margin:"5px 0",borderRadius:"15px",height:"100%",position:"relative"},details:{display:"flex",flexDirection:"column",padding:"20px 20px 0 20px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),U=a(11),W=a.n(U),z=a(21),F=a(84),G=a.n(F).a.create({baseURL:"http://localhost:5000"});G.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var B=function(e,t){return G.patch("/products/".concat(e),t)},J=function(e){return G.delete("/products/".concat(e))},Y=function(e,t){return G.patch("/category/".concat(e),t)},H=function(e){return G.delete("/category/".concat(e))},M=function(e){return G.post("/user/signin",e)},q=function(e){return G.post("/user/signup",e)};var V=function(e){var t,a,n=e.product,c=e.setCurrentId,l=L(),i=Object(o.b)(),u=JSON.parse(localStorage.getItem("profile"));return r.a.createElement(_.a,{className:l.card},r.a.createElement("div",{className:l.details},r.a.createElement(h.a,{variant:"h6"},"Product Name : ",n.name),r.a.createElement(h.a,{variant:"h6"},"Product Price : Rs. ",n.price)),r.a.createElement("div",{className:l.cardActions},(null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t._id)===(null===n||void 0===n?void 0:n.creator)&&r.a.createElement("div",null,r.a.createElement(O.a,{size:"small",color:"primary",onClick:function(){return c(n._id)}},r.a.createElement(R.a,{fontSize:"large"}),"Edit")),(null===u||void 0===u||null===(a=u.result)||void 0===a?void 0:a._id)===(null===n||void 0===n?void 0:n.creator)&&r.a.createElement(O.a,{size:"small",color:"primary",onClick:function(){return i((e=n._id,function(){var t=Object(z.a)(W.a.mark((function t(a){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(D.a,{fontSize:"small"}),"Delete")))},K=Object(j.a)((function(e){return{card:{display:"flex",flexDirection:"column",justifyContent:"center",padding:"5px",margin:"5px 0",borderRadius:"15px",height:"auto",position:"relative"},mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}}));var Q=function(e){var t=e.setCurrentId,a=K(),c=Object(o.c)((function(e){return e.products})),l=Object(o.c)((function(e){return e.categories})),i=JSON.parse(localStorage.getItem("profile")),u=Object(o.b)();return Object(n.useEffect)((function(){u(function(){var e=Object(z.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.get("/category");case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL_CATEGORY",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]),c.length||l.length?r.a.createElement(A.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3},l.map((function(e){var n,l;return r.a.createElement(A.a,{key:e._id,item:!0,xs:12,sm:6},r.a.createElement(_.a,{className:a.card},r.a.createElement(h.a,{variant:"h6",style:{margin:"auto"}},"Product Category : ",e.name),r.a.createElement("div",{className:a.cardActions},(null===i||void 0===i||null===(n=i.result)||void 0===n?void 0:n._id)===(null===e||void 0===e?void 0:e.creator)&&r.a.createElement("div",null,r.a.createElement(O.a,{size:"small",color:"primary",onClick:function(){return t(e._id)}},r.a.createElement(R.a,{fontSize:"large"}),"Edit")),(null===i||void 0===i||null===(l=i.result)||void 0===l?void 0:l._id)===(null===e||void 0===e?void 0:e.creator)&&r.a.createElement(O.a,{size:"small",color:"primary",onClick:function(){return u((t=e._id,a=c.map((function(t){return t.category===e._id?t._id:e._id})),function(){var e=Object(z.a)(W.a.mark((function e(n){var r,c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H(t);case 3:r=0;case 4:if(!(r<a.length)){e.next=11;break}return c=a[r],e.next=8,J(c);case 8:r++,e.next=4;break;case 11:n({type:"DELETE_CATEGORY",payload:t}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()));var t,a}},r.a.createElement(D.a,{fontSize:"small"}),"Delete"))),c.map((function(a){return r.a.createElement(A.a,{key:a._id,item:!0,xs:12},a.category===e._id?r.a.createElement(V,{product:a,setCurrentId:t}):r.a.createElement(r.a.Fragment,null))})))}))):r.a.createElement(T.a,null)},X=Object(j.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{margin:e.spacing(2),padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Z=a(90),$=a(177),ee=a(170),te=a(179),ae=a(174),ne=a(180);var re=function(e){var t,a=e.currentId,c=e.setCurrentId,l=Object(o.c)((function(e){return a?e.products.find((function(e){return e._id===a})):null})),i=Object(o.c)((function(e){return a?e.categories.find((function(e){return e._id===a})):null})),u=Object(o.c)((function(e){return e.categories})),s=X(),m=Object(n.useState)({name:""}),d=Object(b.a)(m,2),f=d[0],g=d[1],v=Object(n.useState)({name:"",category:"",price:""}),E=Object(b.a)(v,2),y=E[0],x=E[1],j=Object(o.b)();Object(n.useEffect)((function(){l&&x(l)}),[l]),Object(n.useEffect)((function(){i&&g(i)}),[i]);var C=function(){g({name:""}),c(null),x({name:"",category:"",price:""})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{className:s.paper},r.a.createElement("form",{autoComplete:'="off',noValidate:!0,className:"".concat(s.root," ").concat(s.form),onSubmit:function(e){e.preventDefault(),j(a?function(e,t){return function(){var a=Object(z.a)(W.a.mark((function a(n){var r,c;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Y(e,t);case 3:r=a.sent,c=r.data,n({type:"UPDATE_CATEGORY",payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(a,Object(p.a)({},f)):function(e){return function(){var t=Object(z.a)(W.a.mark((function t(a){var n,r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,G.post("/category",c);case 3:n=t.sent,r=n.data,a({type:"CREATE_CATEGORY",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(Object(p.a)({},f))),C()}},r.a.createElement(h.a,{variant:"h6"},a?"Editing":"Adding"," a Category"),r.a.createElement($.a,{name:"message",variant:"outlined",label:"Category",fullWidth:!0,value:f.name,onChange:function(e){return g(Object(p.a)(Object(p.a)({},f),{},{name:e.target.value}))}}),r.a.createElement(O.a,{className:s.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(O.a,{variant:"contained",color:"secondary",size:"small",onClick:C,fullWidth:!0},"Clear"))),(null===(t=u[0])||void 0===t?void 0:t.name)?r.a.createElement(Z.a,{className:s.paper},r.a.createElement("form",{autoComplete:'="off',noValidate:!0,className:"".concat(s.root," ").concat(s.form),onSubmit:function(e){e.preventDefault(),j(a?function(e,t){return function(){var a=Object(z.a)(W.a.mark((function a(n){var r,c;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,B(e,t);case 3:r=a.sent,c=r.data,n({type:"UPDATE",payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(a,Object(p.a)({},y)):function(e){return function(){var t=Object(z.a)(W.a.mark((function t(a){var n,r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,G.post("/products",c);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(Object(p.a)({},y))),C()}},r.a.createElement(h.a,{variant:"h6"},a?"Editing":"Adding"," a Product"),r.a.createElement(ee.a,{fullWidth:!0},r.a.createElement(te.a,{id:"demo-simple-select-label"},"Category"),r.a.createElement(ae.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:y.category,label:"Age",onChange:function(e){return x(Object(p.a)(Object(p.a)({},y),{},{category:e.target.value}))}},null===u||void 0===u?void 0:u.map((function(e){return r.a.createElement(ne.a,{value:null===e||void 0===e?void 0:e._id,key:e._id},null===e||void 0===e?void 0:e.name)})))),r.a.createElement($.a,{name:"title",variant:"outlined",label:"Product Name",fullWidth:!0,value:y.name,onChange:function(e){return x(Object(p.a)(Object(p.a)({},y),{},{name:e.target.value}))}}),r.a.createElement($.a,{name:"tags",variant:"outlined",label:"Price",fullWidth:!0,value:y.price,onChange:function(e){return x(Object(p.a)(Object(p.a)({},y),{},{price:e.target.value}))}}),r.a.createElement(O.a,{className:s.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(O.a,{variant:"contained",color:"secondary",size:"small",onClick:C,fullWidth:!0},"Clear"))):r.a.createElement(Z.a,{className:s.paper},r.a.createElement(h.a,{variant:"h6",align:"center"},"Please add atleast one category to add products.")))},ce=a(39),le=Object(j.a)((function(e){return{appBarSearch:{borderRadius:4,marginBottom:"1rem",display:"flex",padding:"16px"},pagination:{borderRadius:4,marginTop:"1rem",padding:"16px"},gridContainer:Object(ce.a)({},e.breakpoints.down("xs"),{flexDirection:"column-reverse"})}}));var oe=function(){var e=le(),t=Object(n.useState)(null),a=Object(b.a)(t,2),c=a[0],l=a[1],i=Object(o.b)();return Object(n.useEffect)((function(){i(function(){var e=Object(z.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.get("/products");case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[c,i]),r.a.createElement(k.a,{in:!0},r.a.createElement(f.a,{maxWidth:"xl"},r.a.createElement(A.a,{container:!0,className:e.gridContainer,justifyContent:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(A.a,{item:!0,xs:12,sm:6,md:9},r.a.createElement(Q,{setCurrentId:l})),r.a.createElement(A.a,{item:!0,xs:12,sm:6,md:3},r.a.createElement(re,{currentId:c,setCurrentId:l})))))},ie=a(87),ue=a.n(ie),se=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),pe=a(172),me=a(173),de=a(85),fe=a.n(de),ge=a(86),ve=a.n(ge),be=function(e){var t=e.name,a=e.handleChange,n=e.label,c=e.half,l=e.autoFocus,o=e.type,i=e.handleShowPassword;return r.a.createElement(A.a,{item:!0,xs:12,sm:c?6:12},r.a.createElement($.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:l,type:o,InputProps:"password"===t?{endAdornment:r.a.createElement(pe.a,{position:"end"},r.a.createElement(me.a,{onClick:i},"password"===o?r.a.createElement(fe.a,null):r.a.createElement(ve.a,null)))}:null}))},Ee={firstName:"",lastName:"",email:"",password:"",confirmPassword:""};var he=function(){var e=se(),t=Object(o.b)(),a=Object(v.g)(),c=Object(n.useState)(!1),l=Object(b.a)(c,2),i=l[0],u=l[1],s=Object(n.useState)(!1),m=Object(b.a)(s,2),d=m[0],g=m[1],E=Object(n.useState)(Ee),y=Object(b.a)(E,2),j=y[0],C=y[1],w=function(e){C(Object(p.a)(Object(p.a)({},j),{},Object(ce.a)({},e.target.name,e.target.value)))};return r.a.createElement(f.a,{component:"main",maxWidth:"xs"},r.a.createElement(Z.a,{className:e.paper,elevation:3},r.a.createElement(x.a,{className:e.avatar},r.a.createElement(ue.a,null)),r.a.createElement(h.a,{variant:"h5"},d?"Sign Up":"Sign In"),r.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault(),t(d?function(e,t){return function(){var a=Object(z.a)(W.a.mark((function a(n){var r,c;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,q(e);case 3:r=a.sent,c=r.data,n({type:"AUTH",data:c}),t("/products"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(j,a):function(e,t){return function(){var a=Object(z.a)(W.a.mark((function a(n){var r,c;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,M(e);case 3:r=a.sent,c=r.data,n({type:"AUTH",data:c}),t("/products"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(j,a))}},r.a.createElement(A.a,{container:!0,spacing:2},d&&r.a.createElement(r.a.Fragment,null,r.a.createElement(be,{name:"firstName",label:"First Name",handleChange:w,autoFocus:!0,half:!0}),r.a.createElement(be,{name:"lastName",label:"Last Name",handleChange:w,half:!0})),r.a.createElement(be,{name:"email",label:"Email Address",handleChange:w,type:"email"}),r.a.createElement(be,{name:"password",label:"Password",handleChange:w,type:i?"text":"password",handleShowPassword:function(){return u((function(e){return!e}))}}),d&&r.a.createElement(be,{name:"confirmPassword",label:"Confirm Password",handleChange:w,type:"password"})),r.a.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},d?"Sign Up":"Sign In"),r.a.createElement(A.a,{container:!0,justifyContent:"flex-end"},r.a.createElement(A.a,{item:!0},r.a.createElement(O.a,{onClick:function(){g((function(e){return!e})),u(!1)}},d?"Already have an account? Sign In":"Don't have an account? Sign Up"))))))},ye=function(){var e=JSON.parse(localStorage.getItem("profile"));return r.a.createElement(g.a,null,r.a.createElement(f.a,{maxWidth:"xl"},r.a.createElement(N,null),r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"/",element:e?r.a.createElement(v.a,{replace:!0,to:"/products"}):r.a.createElement(v.a,{replace:!0,to:"/auth"})}),r.a.createElement(v.b,{exact:!0,path:"/products",element:r.a.createElement(oe,null)}),r.a.createElement(v.b,{exact:!0,path:"/auth",element:e?r.a.createElement(v.a,{replace:!0,to:"/products"}):r.a.createElement(he,null)}))))},xe=(a(124),Object(i.d)(d,Object(i.c)(Object(i.a)(u.a))));l.a.render(r.a.createElement(o.a,{store:xe},r.a.createElement(ye,null)),document.getElementById("root"))},97:function(e,t,a){e.exports=a(125)}},[[97,1,2]]]);
//# sourceMappingURL=main.f0c662b7.chunk.js.map