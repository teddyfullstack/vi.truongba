(function(t){function e(e){for(var r,s,i=e[0],c=e[1],u=e[2],d=0,m=[];d<i.length;d++)s=i[d],n[s]&&m.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={1:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([9,0]),a()})({"06j3":function(t,e,a){"use strict";var r=a("N+FU"),n=a.n(r);n.a},"6eYA":function(t,e,a){},"6mE2":function(t,e,a){},9:function(t,e,a){t.exports=a("zUnb")},"CCQ/":function(t,e,a){},HPaN:function(t,e,a){"use strict";var r=a("6eYA"),n=a.n(r);n.a},"MN+C":function(t,e,a){"use strict";var r=a("o07g"),n=a.n(r);n.a},"N+FU":function(t,e,a){},UizX:function(t,e,a){},"WG+p":function(t,e,a){"use strict";var r=a("UizX"),n=a.n(r);n.a},cWkh:function(t,e,a){"use strict";var r=a("6mE2"),n=a.n(r);n.a},cdCi:function(t,e,a){"use strict";var r=a("u6yM"),n=a.n(r);n.a},nNx0:function(t,e,a){"use strict";var r=a("uWEC"),n=a.n(r);n.a},o07g:function(t,e,a){},u6yM:function(t,e,a){},uWEC:function(t,e,a){},xTaR:function(t,e,a){"use strict";var r=a("CCQ/"),n=a.n(r);n.a},zUnb:function(t,e,a){"use strict";a.r(e);a("VRzm");var r=a("Kw5r"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},["login"!=t.$route.name?a("div",{attrs:{id:"loged"}},[a("OfficeHeader"),a("SideBar"),a("div",{attrs:{id:"content"}},[a("router-view")],1)],1):t._e(),"login"==t.$route.name?a("div",{attrs:{id:"login"}},[a("router-view")],1):t._e()])},o=[],s=a("xmWZ"),i=a("3Aqn"),c=a("0yhX"),u=a("EdlT"),l=a("mrSG"),d=a("Zdk5"),m=a.n(d),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("v-toolbar",{attrs:{id:"toolbar",color:"white darken-4",fixed:""}},[a("v-icon",{attrs:{color:"black"}},[t._v("search")]),a("v-toolbar-items",[a("input",{attrs:{id:"searchbar",type:"text",placeholder:"Search..."}})]),a("v-spacer"),a("v-toolbar-title",{attrs:{id:"title"}},[a("a",{attrs:{href:"/"}},[a("img",{attrs:{id:"logo",src:"img/logo.png",alt:"TRUONGBA"}})])])],1)],1)},h=[],v=(a("cWkh"),a("KHd+")),f={},g=Object(v["a"])(f,p,h,!1,null,"dbfc048a",null),b=g.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"sidebar"}},[a("router-link",{staticClass:"welcome",attrs:{to:"/about"}},[a("v-avatar",{attrs:{color:"red",size:"36"}},[a("span",{staticClass:"white--text headline"},[t._v(t._s(t.letter))])])],1),a("v-btn",{attrs:{color:"white",flat:"",to:"/"}},[a("v-icon",{attrs:{color:"white"}},[t._v("dashboard")])],1),a("v-btn",{attrs:{color:"white",flat:"",to:"/customer"}},[a("v-icon",{attrs:{color:"white"}},[t._v("account_box")])],1),a("v-btn",{attrs:{color:"white",flat:"",to:"/product"}},[a("v-icon",{attrs:{color:"white"}},[t._v("public")])],1)],1)},y=[],w={data:function(){return{letter:localStorage.getItem("username")[0].toUpperCase()}}},x=w,k=(a("cdCi"),Object(v["a"])(x,_,y,!1,null,"a81dcfea",null)),j=k.exports,C=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(i["a"])(e,t),e}(r["default"]);C=l["a"]([m()({components:{OfficeHeader:b,SideBar:j}})],C);var O=C,S=O,$=(a("nNx0"),Object(v["a"])(S,n,o,!1,null,null,null)),N=$.exports,P=(a("f3/d"),a("jE9Z")),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("v-flex",{attrs:{xs12:"",md6:"",lg4:"","offset-md3":"","offset-lg4":""}},[a("Card",{staticStyle:{width:"unset"},attrs:{title:"Login",align:"center",img:t.avatar,height:"100",backgroundsize:"contain"}},[a("div",[t._v("\n                Login to the system on "+t._s((new Date).toLocaleString())+"\n                "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"flat",staticStyle:{"text-align":"center"},attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||(t.username=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"flat",staticStyle:{"text-align":"center"},attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("div",[t.loading?t._e():a("v-btn",{staticClass:"red white--text",on:{click:t.login}},[t._v("Login")]),t.loading?a("v-btn",{staticClass:"red--text",attrs:{flat:"",disabled:""},on:{click:t.login}},[t._v("Loging in...")]):t._e()],1)]),a("img",{staticStyle:{"margin-top":"100px"},attrs:{src:"img/logo.png",alt:"TRUONGBA"}}),a("v-snackbar",{attrs:{timeout:0},model:{value:t.snacking,callback:function(e){t.snacking=e},expression:"snacking"}},[t._v("\n            "+t._s(t.message)+" "),a("v-btn",{attrs:{color:"red",flat:""},on:{click:function(e){t.snacking=!1}}},[t._v("Close")])],1)],1)],1)},A=[],M=(a("ls82"),a("MECJ")),T=a("qpph"),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"card"},[a("v-card-media",{class:t.backgroundsize,attrs:{src:t.img,height:t.height}},[a("div",{staticStyle:{margin:"auto",color:"white"}},[a("h1",{style:"text-align: "+t.align,domProps:{innerHTML:t._s(t.cover)}})])]),t.nocontent?t._e():a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticStyle:{width:"100%"}},[a("h2",{staticClass:"headline mb-0",style:"text-align: "+t.align},[t._v(t._s(t.title))]),a("div",{style:"text-align: "+t.align},[t._t("default")],2)])]),t.button?a("v-card-actions",[a("v-btn",{attrs:{flat:"",to:t.to,color:t.color}},[a("v-icon",[t._v(t._s(t.icon))]),t._v(" "+t._s(t.button))],1)],1):t._e()],1)],1)],1)},I=[],L=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(i["a"])(e,t),e}(r["default"]);L=l["a"]([m()({props:["title","img","button","icon","color","cover","height","nocontent","align","backgroundsize","to"]})],L);var R=L,U=R,D=(a("xTaR"),Object(v["a"])(U,z,I,!1,null,null,null)),W=D.exports,J=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.message="Enter your username and password to continue",t.username="",t.password="",t.snacking=!0,t.loading=!1,t}return Object(T["a"])(e,[{key:"login",value:function(){var t=Object(M["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,fetch("/api/user/login.php?username=".concat(this.username,"&password=").concat(this.password),{credentials:"include"}).then(function(t){return t.json()});case 3:e=t.sent,1==e?(this.message="Welcome "+this.username,this.snacking=!0,this.$router.push("/")):(this.message="Incorrect username or password",this.snacking=!0),this.loading=!1;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),Object(i["a"])(e,t),e}(r["default"]);J=l["a"]([m()({components:{Card:W},computed:{avatar:function(){return this.$data.username?"/img/avatar/"+this.$data.username:"/img/truongba.jpg"}}})],J);var H=J,V=H,B=Object(v["a"])(V,E,A,!1,null,null,null),F=B.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Layout")],1)},K=[],q=a("YKMj"),X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:"",md4:"",lg3:"",xl2:""}},[t.customers?a("Stat",{attrs:{cover:"<b style='font-size: 80px'>"+t.customers.length+"</b> customers",img:"https://ucarecdn.com/73d99649-76f3-49fa-997a-720a5ba7c010/",button:"View customer",to:"/customer",icon:"account_box",color:"red"}}):t._e()],1),a("v-flex",{attrs:{xs6:"",md4:"",lg3:"",xl2:""}},[t.products?a("Stat",{attrs:{cover:"<b style='font-size: 80px'>"+t.products.length+"</b> products",img:"https://3.bp.blogspot.com/-0qdhsdCNBcU/VWVtLSFDmpI/AAAAAAAAAvg/DT7dMmlIpwg/s1600/io15material.png",button:"View product",to:"/product",icon:"public",color:"blue"}}):t._e()],1),a("v-flex",{attrs:{xs6:"",md4:"",lg3:"",xl2:""}},[a("Stat",{attrs:{cover:"<b style='font-size: 80px'>0</b> tasks",img:"https://img.freepik.com/free-vector/elegant-green-geometric-polygon-background_1035-13146.jpg?size=338&ext=jpg",button:"View task",icon:"account_box",color:"green"}})],1)],1)],1)},Y=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Card",{attrs:{img:t.img,button:t.button,icon:t.icon,color:t.color,cover:t.cover,height:t.height,nocontent:!0,to:t.to}})},Q=[],tt=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(i["a"])(e,t),e}(r["default"]);tt=l["a"]([m()({props:["img","button","icon","color","cover","height","nocontent","nobutton","to"],components:{Card:W}})],tt);var et=tt,at=et,rt=Object(v["a"])(at,Z,Q,!1,null,null,null),nt=rt.exports,ot=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).call(this)),t.customers=null,t.products=null,t.fetchCustomers(),t.fetchProducts(),t}return Object(T["a"])(e,[{key:"fetchCustomers",value:function(){var t=Object(M["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/customer").then(function(t){return t.json()}).catch(function(t){return[]});case 2:this.customers=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"fetchProducts",value:function(){var t=Object(M["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/product").then(function(t){return t.json()}).catch(function(t){return[]});case 2:this.products=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),Object(i["a"])(e,t),e}(r["default"]);ot=l["a"]([m()({components:{Stat:nt}}),l["b"]("design:paramtypes",[])],ot);var st=ot,it=st,ct=Object(v["a"])(it,X,Y,!1,null,null,null),ut=ct.exports,lt=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(i["a"])(e,t),e}(q["b"]);lt=l["a"]([Object(q["a"])({components:{Layout:ut}})],lt);var dt=lt,mt=dt,pt=Object(v["a"])(mt,G,K,!1,null,null,null),ht=pt.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("img",{attrs:{src:"img/logo.png"}}),a("h5",[t._v("© Copyright 2018")]),a("p",[t._v("\n    Logged as "),a("i",[t._v(t._s(t.username))]),t._v(" (11:25 AM 2015-05-05)"),a("br"),a("a",{staticStyle:{color:"#E33333","text-decoration":"none"},attrs:{href:"#"},on:{click:t.logout}},[t._v("Logout")])])])},ft=[],gt={data:function(){return{username:localStorage.getItem("username")}},methods:{logout:function(){var t=this;fetch("/api/user/logout.php",{credentials:"include"}).then(function(e){t.$router.push("/login")})}}},bt=gt,_t=(a("06j3"),Object(v["a"])(bt,vt,ft,!1,null,"23e66914",null)),yt=_t.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"customer"}},[a("Layout")],1)},xt=[],kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[t.detailed?a("v-flex",{attrs:{xs12:"",md6:""}},[a("CustomerDetail",{on:{refreshTable:function(e){t.$refs.table.fetchCustomer()}}})],1):t._e(),a("v-flex",{attrs:{xs12:"",md6:t.detailed}},[a("CustomerTable",{ref:"table"})],1)],1)],1)},jt=[],Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{attrs:{row:"",wrap:""}},[t.admin?a("v-btn",{staticClass:"red white--text",attrs:{to:"/customer/new"}},[t._v("Add new customer")]):t._e()],1),t.customers?t._e():a("div",[a("v-progress-circular",{attrs:{size:70,width:7,color:"red",indeterminate:""}})],1),t.customers?a("v-data-table",{attrs:{headers:t.headers,items:t.customers,"item-key":"id",id:"table","rows-per-page-items":[5],loading:t.loading},scopedSlots:t._u([{key:"items",fn:function(e){return[a("tr",{class:{"red--text":t.$route.params.id==e.item.id},on:{click:function(a){t.select(e.item)}}},[a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.name))]),a("td",{staticClass:"truncated"},[t._v(t._s(e.item.organization))]),a("td",[t._v(t._s(e.item.phone))]),a("td",{staticClass:"truncated"},[t._v(t._s(e.item.address))])])]}}])},[a("v-progress-linear",{attrs:{slot:"progress",color:"red",indeterminate:""},slot:"progress"})],1):t._e()],1)},Ot=[],St=[{text:"Name",value:"name"},{text:"Organization",value:"organization",align:"center"},{text:"Phone",value:"phone",align:"center"},{text:"Address",value:"Address",align:"center"}],$t=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).call(this)),t.headers=St,t.customers=null,t.selected=null,t.loading=!1,t.admin=!1,t.admin="1"==localStorage.getItem("admin"),t.fetchCustomer(),t}return Object(T["a"])(e,[{key:"select",value:function(t){var e=this;this.selected==t?(this.selected=null,this.$router.push("/customer")):(this.selected=t,this.$router.push("/customer/".concat(t.id))),this.loading=!0,setTimeout(function(t){e.loading=!1},500)}},{key:"fetchCustomer",value:function(){var t=this;this.loading=!0,fetch("/api/customer").then(function(t){return t.json()}).then(function(e){t.customers=e,t.loading=!1})}}]),Object(i["a"])(e,t),e}(r["default"]);$t=l["a"]([m()({}),l["b"]("design:paramtypes",[])],$t);var Nt=$t,Pt=Nt,Et=(a("HPaN"),Object(v["a"])(Pt,Ct,Ot,!1,null,null,null)),At=Et.exports,Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.customer?a("div",[null!=t.customer.name?a("div",[a("v-card",{staticClass:"card"},[a("v-card-media",{staticStyle:{cursor:"pointer"},attrs:{src:t.customer.avatar,height:"40vh"},on:{mouseover:function(e){t.editAvatar=!0},mouseout:function(e){t.editAvatar=!1}}},[a("div",{staticStyle:{margin:"auto"}},[t.editAvatar?a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.avatar,expression:"customer.avatar"}],staticClass:"flat",staticStyle:{"text-align":"center"},attrs:{type:"text",placeholder:"No avatar",title:"Avatar"},domProps:{value:t.customer.avatar},on:{input:[function(e){e.target.composing||t.$set(t.customer,"avatar",e.target.value)},t.change]}}):t._e(),a("br")])]),a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticStyle:{width:"100%"}},[a("h3",{staticClass:"headline mb-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.name,expression:"customer.name"}],staticClass:"flat",staticStyle:{width:"unset"},attrs:{type:"text",placeholder:"No name",title:"Name"},domProps:{value:t.customer.name},on:{input:[function(e){e.target.composing||t.$set(t.customer,"name",e.target.value)},t.change]}}),t._v(" \n                        "),a("div",{staticStyle:{float:"right"}},[a("a",{staticClass:"red--text",attrs:{href:"tel:"+t.customer.phone,target:"_blank"}},[a("v-icon",[t._v("phone")])],1),a("a",{staticClass:"red--text",attrs:{href:"mailto:"+t.customer.email,target:"_blank"}},[a("v-icon",[t._v("email")])],1)])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.organization,expression:"customer.organization"}],staticClass:"flat",attrs:{type:"text",placeholder:"No organization",title:"Organization"},domProps:{value:t.customer.organization},on:{input:[function(e){e.target.composing||t.$set(t.customer,"organization",e.target.value)},t.change]}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.phone,expression:"customer.phone"}],staticClass:"flat",attrs:{type:"text",placeholder:"No phone",title:"Phone"},domProps:{value:t.customer.phone},on:{input:[function(e){e.target.composing||t.$set(t.customer,"phone",e.target.value)},t.change]}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.email,expression:"customer.email"}],staticClass:"flat",attrs:{type:"text",placeholder:"No email",title:"Email"},domProps:{value:t.customer.email},on:{input:[function(e){e.target.composing||t.$set(t.customer,"email",e.target.value)},t.change]}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.address,expression:"customer.address"}],staticClass:"flat",attrs:{type:"text",placeholder:"No address",title:"Address"},domProps:{value:t.customer.address},on:{input:[function(e){e.target.composing||t.$set(t.customer,"address",e.target.value)},t.change]}}),a("br"),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.customer.description,expression:"customer.description"}],staticClass:"flat",attrs:{placeholder:"No description",title:"Description"},domProps:{value:t.customer.description},on:{input:[function(e){e.target.composing||t.$set(t.customer,"description",e.target.value)},t.change]}}),a("br")])]),a("v-card-actions",[a("div",{staticClass:"grey--text",staticStyle:{"margin-left":"auto"}},[t.customer.id&&t.changed&&t.admin?a("v-btn",{staticClass:"red white--text",on:{click:t.updateCustomer}},[t._v("Update")]):t._e(),!t.customer.id&&t.admin?a("v-btn",{staticClass:"red white--text",on:{click:t.createCustomer}},[t._v("Create")]):t._e(),t._v("\n                        "+t._s(t.customer.date_created)+"\n                    ")],1)])],1),a("v-snackbar",{attrs:{bottom:""},model:{value:t.showMessage,callback:function(e){t.showMessage=e},expression:"showMessage"}},[t._v("\n                    "+t._s(t.message)+"\n                "),a("v-btn",{attrs:{color:"red",flat:""},on:{click:function(e){t.showMessage=!1}}},[t._v("\n                    Close\n                ")])],1)],1):t._e(),null==t.customer.name?a("div",[a("h1",[t._v("No customer found!")])]):t._e()]):t._e()])},Tt=[],zt=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).call(this)),t.customer=null,t.editAvatar=!1,t.showMessage=!1,t.message="",t.changed=!1,t.admin=!1,t.admin="1"==localStorage.getItem("admin"),t}return Object(T["a"])(e,[{key:"fetchCustomer",value:function(t){var e=this;"new"!=t?fetch("/api/customer/get.php?id=".concat(t)).then(function(t){return t.json()}).then(function(t){e.customer=t}):this.customer={name:""}}},{key:"show",value:function(t){this.message=t,this.showMessage=!0}},{key:"change",value:function(){this.changed=!0}},{key:"updateCustomer",value:function(){var t=this;fetch("/api/customer/update.php",{method:"PUT",credentials:"include",body:JSON.stringify(this.customer)}).then(function(t){if(console.log(t),t.ok)return t.json();throw 403==t.status?(localStorage.setItem("admin","false"),new Error("Operation not permited")):new Error("Name must not be null!")}).then(function(e){if(0==e)throw new Error("Error updating customer detail. Something wrong with your database!");t.show("".concat(t.customer.name,"'s info updated!")),t.changed=!1,t.$emit("refreshTable")}).catch(function(e){t.show(e.message)})}},{key:"createCustomer",value:function(){var t=this;fetch("/api/customer/insert.php",{method:"POST",credentials:"include",body:JSON.stringify(this.customer)}).then(function(t){if(t.ok)return t.json();throw 403==t.status?(localStorage.setItem("admin","false"),new Error("Operation not permited")):new Error("Name must not be null!")}).then(function(e){if(0==e)throw new Error("Error updating customer detail. Something wrong with your database!");t.show("Customer ".concat(t.customer.name," created successfully")),t.$emit("refreshTable")}).catch(function(e){t.show(e.message)})}},{key:"created",value:function(){this.fetchCustomer(this.$route.params.id)}},{key:"routeChanged",value:function(t,e){this.fetchCustomer(t.params.id)}}]),Object(i["a"])(e,t),e}(r["default"]);l["a"]([Object(q["c"])("$route"),l["b"]("design:type",Function),l["b"]("design:paramtypes",[Object,Object]),l["b"]("design:returntype",void 0)],zt.prototype,"routeChanged",null),zt=l["a"]([m()({components:{Card:W}}),l["b"]("design:paramtypes",[])],zt);var It=zt,Lt=It,Rt=Object(v["a"])(Lt,Mt,Tt,!1,null,null,null),Ut=Rt.exports,Dt={components:{CustomerTable:At,CustomerDetail:Ut},computed:{detailed:function(){return null!=this.$route.params.id}}},Wt=Dt,Jt=Object(v["a"])(Wt,kt,jt,!1,null,null,null),Ht=Jt.exports,Vt=r["default"].extend({components:{Layout:Ht}}),Bt=Vt,Ft=Object(v["a"])(Bt,wt,xt,!1,null,null,null),Gt=Ft.exports,Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"product"}},[a("Layout")],1)},qt=[],Xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[t.detailed?a("v-flex",{attrs:{xs12:"",md6:""}},[a("ProductDetail",{on:{refreshTable:function(e){t.$refs.table.fetchProduct()}}})],1):t._e(),a("v-flex",{attrs:{xs12:"",md6:t.detailed}},[a("ProductTable",{ref:"table"})],1)],1)],1)},Yt=[],Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{attrs:{row:"",wrap:""}},[t.admin?a("v-btn",{staticClass:"red white--text",attrs:{to:"/product/new"}},[t._v("Add new product")]):t._e()],1),t.products?t._e():a("div",[a("v-progress-circular",{attrs:{size:70,width:7,color:"red",indeterminate:""}})],1),t.products?a("v-data-table",{attrs:{headers:t.headers,items:t.products,"item-key":"id",id:"table","rows-per-page-items":[5],loading:t.loading},scopedSlots:t._u([{key:"items",fn:function(e){return[a("tr",{class:{"red--text":t.$route.params.id==e.item.id},on:{click:function(a){t.select(e.item)}}},[a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.name))]),a("td",{staticClass:"truncated"},[t._v(t._s(e.item.description))]),a("td",[t._v(t._s(e.item.status))]),a("td",{staticClass:"truncated"},[t._v(t._s(e.item.date_created))])])]}}])},[a("v-progress-linear",{attrs:{slot:"progress",color:"red",indeterminate:""},slot:"progress"})],1):t._e()],1)},Qt=[],te=[{text:"Name",value:"name"},{text:"Description",value:"description",align:"center"},{text:"Status",value:"status",align:"center"},{text:"Date created",value:"date_created",align:"center"}],ee=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).call(this)),t.headers=te,t.products=null,t.selected=null,t.loading=!1,t.admin=!1,t.admin="1"==localStorage.getItem("admin"),t.fetchProduct(),t}return Object(T["a"])(e,[{key:"select",value:function(t){var e=this;this.selected==t?(this.selected=null,this.$router.push("/product")):(this.selected=t,this.$router.push("/product/".concat(t.id))),this.loading=!0,setTimeout(function(t){e.loading=!1},500)}},{key:"fetchProduct",value:function(){var t=this;this.loading=!0,fetch("/api/product").then(function(t){return t.json()}).then(function(e){t.products=e,t.loading=!1})}}]),Object(i["a"])(e,t),e}(r["default"]);ee=l["a"]([m()({}),l["b"]("design:paramtypes",[])],ee);var ae=ee,re=ae,ne=(a("WG+p"),Object(v["a"])(re,Zt,Qt,!1,null,null,null)),oe=ne.exports,se=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.product?a("div",[null!=t.product.name?a("div",[a("v-card",{staticClass:"card"},[a("v-card-media",{staticStyle:{cursor:"pointer"},attrs:{src:t.product.image,height:"40vh"},on:{mouseover:function(e){t.editImage=!0},mouseout:function(e){t.editImage=!1}}},[a("div",{staticStyle:{margin:"auto"}},[t.editImage?a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.image,expression:"product.image"}],staticClass:"flat",staticStyle:{"text-align":"center"},attrs:{type:"text",placeholder:"No image",title:"Image"},domProps:{value:t.product.image},on:{input:[function(e){e.target.composing||t.$set(t.product,"image",e.target.value)},t.change]}}):t._e(),a("br")])]),a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticStyle:{width:"100%"}},[a("h3",{staticClass:"headline mb-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.name,expression:"product.name"}],staticClass:"flat",attrs:{type:"text",placeholder:"No name",title:"Name"},domProps:{value:t.product.name},on:{input:[function(e){e.target.composing||t.$set(t.product,"name",e.target.value)},t.change]}})]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.product.description,expression:"product.description"}],staticClass:"flat",attrs:{placeholder:"No description",title:"Description"},domProps:{value:t.product.description},on:{input:[function(e){e.target.composing||t.$set(t.product,"description",e.target.value)},t.change]}}),a("br"),t.admin?a("v-select",{attrs:{"data-app":"",items:t.customers,label:"Customer","item-text":"name","item-value":"id"},on:{input:t.change},model:{value:t.product.customer_id,callback:function(e){t.$set(t.product,"customer_id",e)},expression:"product.customer_id"}}):t._e(),t._v("\n                    Customer: "),t.admin?t._e():a("v-btn",{attrs:{flat:"",color:"red",to:"/customer/"+t.product.customer_id}},[t._v(t._s(t.customers.find(function(e){return e.id==t.product.customer_id}).name))]),a("br"),t._v("\n                    Status: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.status,expression:"product.status"}],staticClass:"flat",class:t.product.status.toLowerCase(),staticStyle:{width:"unset"},attrs:{type:"text",placeholder:"No status",title:"Status"},domProps:{value:t.product.status},on:{input:[function(e){e.target.composing||t.$set(t.product,"status",e.target.value)},t.change]}}),a("br"),t.admin?a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.secret_key,expression:"product.secret_key"}],staticClass:"flat",attrs:{type:"text",placeholder:"No key",title:"Key"},domProps:{value:t.product.secret_key},on:{input:[function(e){e.target.composing||t.$set(t.product,"secret_key",e.target.value)},t.change]}}),a("br"),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.product.secret,expression:"product.secret"}],staticClass:"flat",attrs:{placeholder:"No secret",title:"Secret"},domProps:{value:t.product.secret},on:{input:[function(e){e.target.composing||t.$set(t.product,"secret",e.target.value)},t.change]}}),a("br")]):t._e(),!t.admin&&t.product.secret?a("div",[a("pre",[t._v(t._s(t.product.secret))])]):t._e()],1)]),a("v-card-actions",[a("div",{staticClass:"grey--text",staticStyle:{"margin-left":"auto"}},[t.product.id&&t.changed&&t.admin?a("v-btn",{staticClass:"red white--text",on:{click:t.updateProduct}},[t._v("Update")]):t._e(),!t.product.id&&t.admin?a("v-btn",{staticClass:"red white--text",on:{click:t.createProduct}},[t._v("Create")]):t._e(),t.admin?t._e():a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.secret_key,expression:"product.secret_key"}],staticClass:"flat",staticStyle:{display:"inline",width:"150px"},attrs:{type:"password",placeholder:"Enter secret key"},domProps:{value:t.product.secret_key},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.showSecret(e):null},input:function(e){e.target.composing||t.$set(t.product,"secret_key",e.target.value)}}}),t.admin?t._e():a("v-btn",{staticClass:"red white--text",on:{click:t.showSecret}},[t._v("Show secret")]),t._v("\n                        "+t._s(t.product.date_created)+"\n                    ")],1)])],1),a("v-snackbar",{attrs:{bottom:""},model:{value:t.showMessage,callback:function(e){t.showMessage=e},expression:"showMessage"}},[t._v("\n                    "+t._s(t.message)+"\n                "),a("v-btn",{attrs:{color:"red",flat:""},on:{click:function(e){t.showMessage=!1}}},[t._v("\n                    Close\n                ")])],1)],1):t._e(),null==t.product.name?a("div",[a("h1",[t._v("No product found!")])]):t._e()]):t._e()])},ie=[],ce=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).call(this)),t.product=null,t.editImage=!1,t.showMessage=!1,t.message="",t.changed=!1,t.admin=!1,t.admin="1"==localStorage.getItem("admin"),t.fetchCustomers(),t}return Object(T["a"])(e,[{key:"fetchProduct",value:function(t){var e=this;"new"!=t?fetch("/api/product/get.php?id=".concat(t),{credentials:"include"}).then(function(t){return t.json()}).then(function(t){e.product=t}):this.product={name:"",status:""}}},{key:"fetchCustomers",value:function(){var t=Object(M["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/customer").then(function(t){return t.json()}).catch(function(t){return[]});case 2:this.customers=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"show",value:function(t){this.message=t,this.showMessage=!0}},{key:"change",value:function(){this.changed=!0}},{key:"showSecret",value:function(){var t=Object(M["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/product/secret.php?id=".concat(this.product.id,"&key=").concat(encodeURIComponent(this.product.secret_key))).then(function(t){if(200==t.status)return t.text();throw"Wrong secret key!"}).catch(function(t){return e.message=t,e.showMessage=!0,""});case 2:this.product.secret=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"updateProduct",value:function(){var t=this;fetch("/api/product/update.php",{method:"PUT",credentials:"include",body:JSON.stringify(this.product)}).then(function(t){if(console.log(t),t.ok)return t.json();throw 403==t.status?(localStorage.setItem("admin","false"),new Error("Operation not permited")):new Error("Name must not be null!")}).then(function(e){if(0==e)throw new Error("Error updating product detail. Something wrong with your database!");t.show("".concat(t.product.name,"'s info updated!")),t.changed=!1,t.$emit("refreshTable")}).catch(function(e){t.show(e.message)})}},{key:"createProduct",value:function(){var t=this;fetch("/api/product/insert.php",{method:"POST",credentials:"include",body:JSON.stringify(this.product)}).then(function(t){if(t.ok)return t.json();throw 403==t.status?(localStorage.setItem("admin","false"),new Error("Operation not permited")):new Error("Name must not be null!")}).then(function(e){if(0==e)throw new Error("Error updating product detail. Something wrong with your database!");t.show("Product ".concat(t.product.name," created successfully")),t.$emit("refreshTable")}).catch(function(e){t.show(e.message)})}},{key:"created",value:function(){this.fetchProduct(this.$route.params.id)}},{key:"routeChanged",value:function(t,e){this.fetchProduct(t.params.id)}}]),Object(i["a"])(e,t),e}(r["default"]);l["a"]([Object(q["c"])("$route"),l["b"]("design:type",Function),l["b"]("design:paramtypes",[Object,Object]),l["b"]("design:returntype",void 0)],ce.prototype,"routeChanged",null),ce=l["a"]([m()({components:{Card:W}}),l["b"]("design:paramtypes",[])],ce);var ue=ce,le=ue,de=(a("MN+C"),Object(v["a"])(le,se,ie,!1,null,null,null)),me=de.exports,pe={components:{ProductTable:oe,ProductDetail:me},computed:{detailed:function(){return null!=this.$route.params.id}}},he=pe,ve=Object(v["a"])(he,Xt,Yt,!1,null,null,null),fe=ve.exports,ge=r["default"].extend({components:{Layout:fe}}),be=ge,_e=Object(v["a"])(be,Kt,qt,!1,null,null,null),ye=_e.exports;r["default"].use(P["a"]);var we=new P["a"]({routes:[{path:"/",name:"home",component:ht},{path:"/login",name:"login",component:F},{path:"/about",name:"about",component:yt},{path:"/customer",name:"customer",component:Gt},{path:"/customer/:id",name:"customer_detail",component:Gt},{path:"/product",name:"product",component:ye},{path:"/product/:id",name:"product_detail",component:ye}]});we.beforeEach(function(t,e,a){fetch("/api/user/current.php",{credentials:"include"}).then(function(t){return t.json()}).then(function(e){if(null==e.id)throw"Invalid user";localStorage.setItem("admin",e.is_admin),localStorage.setItem("username",e.username),"login"==t.name?a("/"):a()}).catch(function(e){"login"==t.name?a():a("login")})});var xe=we,ke=a("zlta"),je=a.n(ke);a("v0CA");r["default"].config.productionTip=!1,r["default"].use(je.a),new r["default"]({router:xe,render:function(t){return t(N)}}).$mount("#app")}});
//# sourceMappingURL=app.14b82f65.js.map