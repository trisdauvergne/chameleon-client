(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(14),i=n.n(s),a=(n(24),n(25),n(2)),o=n.n(a),u=n(3),l=n(4),j="https://fierce-plains-42807.herokuapp.com",b=n(7),d=n(0),O=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),a=i[0],O=i[1],p=Object(c.useState)(!1),h=Object(l.a)(p,2),x=h[0],f=h[1],m=Object(c.useState)(!1),v=Object(l.a)(m,2),g=v[0],k=v[1],w=function(){var e=Object(u.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat(j,"/login"),{body:JSON.stringify({username:n}),method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",mode:"cors"});case 3:if(c=e.sent,r(""),O(""),204!==c.status){e.next=9;break}return f(!0),e.abrupt("return");case 9:if(401!==c.status){e.next=12;break}return k(!0),e.abrupt("return");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return x?Object(d.jsx)(b.a,{to:"/"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{onSubmit:w,children:[Object(d.jsx)("label",{children:Object(d.jsx)("input",{type:"text",name:"username",placeholder:"username",value:n,onChange:function(e){return r(e.target.value)},required:!0})}),Object(d.jsx)("label",{children:Object(d.jsx)("input",{type:"password",name:"password",placeholder:"password",value:a,onChange:function(e){return O(e.target.value)},required:!0})}),Object(d.jsx)("button",{type:"submit",children:"Login"})]}),g&&Object(d.jsx)("h3",{children:"Please enter a valid username"})]})},p=n(6),h=(n(36),function(e){var t=e.listing,n=Object(c.useState)(null),r=Object(l.a)(n,2),s=r[0],i=r[1],a=function(){var e=Object(u.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/users/").concat(t.ownerId));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,i(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),s?Object(d.jsxs)("article",{className:"listing",children:[Object(d.jsx)("img",{className:"listing__img",src:"".concat(j,"/uploads/").concat(t.pictures[0]),alt:t.title}),Object(d.jsx)("h1",{children:t.title}),Object(d.jsx)("p",{children:t.description}),Object(d.jsxs)("p",{children:[t.attributes.price," kr"]}),Object(d.jsx)("p",{children:t.attributes.category}),Object(d.jsx)(p.b,{to:"/user/".concat(s.user._id),children:Object(d.jsx)("p",{children:s.user.firstName})}),Object(d.jsxs)("p",{children:["Rating: ",s.rating]}),Object(d.jsx)(p.b,{to:"/booking/".concat(t._id),children:Object(d.jsx)("button",{children:"Request to rent"})})]}):null}),x=function(e){var t=e.changeFilter,n=e.resetFilters;return Object(d.jsxs)("article",{children:[Object(d.jsx)("div",{children:Object(d.jsxs)("label",{children:["Gender",Object(d.jsxs)("select",{name:"gender",id:"gender",onChange:function(e){return t("gender",e.target.value)},children:[Object(d.jsx)("option",{value:"all",children:"Include all"}),Object(d.jsx)("option",{value:"guys",children:"Guys"}),Object(d.jsx)("option",{value:"ladies",children:"Ladies"}),Object(d.jsx)("option",{value:"unisex",children:"Unisex"})]})]})}),Object(d.jsx)("div",{children:Object(d.jsxs)("label",{children:["Category",Object(d.jsxs)("select",{name:"category",id:"category",onChange:function(e){return t("category",e.target.value)},children:[Object(d.jsx)("option",{value:"all",children:"Include all"}),Object(d.jsx)("option",{value:"trousers",children:"Trousers"}),Object(d.jsx)("option",{value:"jeans",children:"Jeans"}),Object(d.jsx)("option",{value:"shirt",children:"Shirt"}),Object(d.jsx)("option",{value:"dress",children:"Dress"}),Object(d.jsx)("option",{value:"skirt",children:"Skirt"}),Object(d.jsx)("option",{value:"jacket",children:"Jacket"}),Object(d.jsx)("option",{value:"suit",children:"Suit"}),Object(d.jsx)("option",{value:"accessories",children:"Accessories"})]})]})}),Object(d.jsx)("div",{children:Object(d.jsxs)("label",{children:["Size",Object(d.jsxs)("select",{name:"size",id:"size",onChange:function(e){return t("size",e.target.value)},children:[Object(d.jsx)("option",{value:"all",children:"Include all"}),Object(d.jsx)("option",{value:"xsmall",children:"XS"}),Object(d.jsx)("option",{value:"small",children:"S"}),Object(d.jsx)("option",{value:"medium",children:"M"}),Object(d.jsx)("option",{value:"large",children:"L"}),Object(d.jsx)("option",{value:"xlarge",children:"XL"})]})]})}),Object(d.jsx)("button",{onClick:function(){n(),document.getElementById("gender").selectedIndex=0,document.getElementById("category").selectedIndex=0,document.getElementById("size").selectedIndex=0},children:"Reset"})]})},f=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),i=Object(l.a)(s,2),a=i[0],b=i[1],O=Object(c.useState)([]),p=Object(l.a)(O,2),f=p[0],m=p[1],v=Object(c.useState)(!1),g=Object(l.a)(v,2),k=g[0],w=g[1],y=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=document.cookie.split("=")[1],e.next=4,fetch("".concat(j,"/listings"));case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,s=c.filter((function(e){return e.ownerId!==t})),r(s.reverse()),b(s.reverse()),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=n.filter((function(e){return f.every((function(t){return t.filterValue===e.attributes[t.filterName]}))}));b(e)}),[f]),Object(c.useEffect)((function(){y()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){return w(!k)},children:"Filter"}),k&&Object(d.jsx)(x,{changeFilter:function(e,t){var n=f.filter((function(t){return t.filterName!==e}));"all"!==t&&(console.log(n),n.push({filterName:e,filterValue:t})),m(n)},resetFilters:function(){return m([])}}),a.map((function(e){return Object(d.jsx)(h,{listing:e},e._id)}))]})},m=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Home"}),Object(d.jsx)(f,{})]})},v=function(){var e=document.cookie.split("=")[1],t=Object(b.g)(),n=function(){var e=Object(u.a)(o.a.mark((function e(n){var c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=document.getElementById("listingForm"),r=new FormData(c),e.next=5,fetch("".concat(j,"/listings"),{method:"POST",body:r});case 5:t.push("/deals");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Test Form"}),Object(d.jsxs)("form",{onSubmit:n,id:"listingForm",name:"listingForm",encType:"multipart/form-data",children:[Object(d.jsx)("input",{type:"hidden",value:e,name:"ownerId"}),Object(d.jsxs)("label",{children:["Upload image",Object(d.jsx)("input",{type:"file",name:"image",accept:"image/x-png,image/gif,image/jpeg"})]}),Object(d.jsx)("label",{children:Object(d.jsx)("input",{type:"text",name:"title",placeholder:"title",required:!0})}),Object(d.jsx)("label",{children:Object(d.jsx)("input",{type:"text",name:"description",placeholder:"description",required:!0})}),Object(d.jsxs)("label",{children:["Color",Object(d.jsxs)("select",{name:"color",children:[Object(d.jsx)("option",{value:"black",children:"Black"}),Object(d.jsx)("option",{value:"white",children:"White"}),Object(d.jsx)("option",{value:"red",children:"Red"}),Object(d.jsx)("option",{value:"blue",children:"Blue"}),Object(d.jsx)("option",{value:"orange",children:"Orange"}),Object(d.jsx)("option",{value:"green",children:"Green"}),Object(d.jsx)("option",{value:"pink",children:"Pink"}),Object(d.jsx)("option",{value:"purple",children:"Purple"}),Object(d.jsx)("option",{value:"grey",children:"Grey"}),Object(d.jsx)("option",{value:"brown",children:"Brown"}),Object(d.jsx)("option",{value:"mixed",children:"Mixed"}),Object(d.jsx)("option",{value:"yellow",children:"Yellow"})]})]}),Object(d.jsxs)("label",{children:["Category",Object(d.jsxs)("select",{name:"category",children:[Object(d.jsx)("option",{value:"trousers",children:"Trousers"}),Object(d.jsx)("option",{value:"jeans",children:"Jeans"}),Object(d.jsx)("option",{value:"shirt",children:"Shirt"}),Object(d.jsx)("option",{value:"dress",children:"Dress"}),Object(d.jsx)("option",{value:"skirt",children:"Skirt"}),Object(d.jsx)("option",{value:"jacket",children:"Jacket"}),Object(d.jsx)("option",{value:"suit",children:"Suit"}),Object(d.jsx)("option",{value:"accessories",children:"Accessories"})]})]}),Object(d.jsxs)("label",{children:["Size",Object(d.jsxs)("select",{name:"size",children:[Object(d.jsx)("option",{value:"xsmall",children:"XS"}),Object(d.jsx)("option",{value:"small",children:"S"}),Object(d.jsx)("option",{value:"medium",children:"M"}),Object(d.jsx)("option",{value:"large",children:"L"}),Object(d.jsx)("option",{value:"xlarge",children:"XL"})]})]}),Object(d.jsxs)("label",{children:["Gender",Object(d.jsxs)("select",{name:"gender",children:[Object(d.jsx)("option",{value:"guys",children:"Guys"}),Object(d.jsx)("option",{value:"ladies",children:"Ladies"}),Object(d.jsx)("option",{value:"unisex",children:"Unisex"})]})]}),Object(d.jsxs)("label",{children:["Price",Object(d.jsx)("input",{type:"number",name:"price",min:"1",max:"10000",placeholder:"price (SEK)",required:!0})]}),Object(d.jsx)("button",{type:"submit",children:"Add post"})]})]})},g=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Listing Page"}),Object(d.jsx)(v,{})]})},k=function(e){var t=e.listingId,n=e.ownerId,c=document.cookie.split("=")[1],r=Object(b.g)(),s=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=document.getElementById("bookingForm"),c=new FormData(n),e.next=5,fetch("".concat(j,"/bookings"),{method:"POST",body:c});case 5:r.push("/deals/ongoing");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("form",{name:"bookingForm",id:"bookingForm",onSubmit:s,children:[Object(d.jsxs)("label",{children:["From",Object(d.jsx)("input",{type:"date",name:"bookingFrom",required:!0})]}),Object(d.jsxs)("label",{children:["To",Object(d.jsx)("input",{type:"date",name:"bookingTo",required:!0})]}),Object(d.jsx)("input",{type:"hidden",value:t,name:"listingId"}),Object(d.jsx)("input",{type:"hidden",value:n,name:"ownerId"}),Object(d.jsx)("input",{type:"hidden",value:c,name:"renterId"}),Object(d.jsx)("button",{type:"submit",children:"Send Request"})]})},w=function(e){var t=e.match,n=Object(c.useState)(""),r=Object(l.a)(n,2),s=r[0],i=r[1],a=function(){var e=Object(u.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/listings/").concat(t.params.listingId));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,i(c.ownerId);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Booking Form"}),Object(d.jsx)(k,{listingId:t.params.listingId,ownerId:s})]})},y=n(5),S=(n(37),n(38),function(e){var t=e.children,n=e.open,c=e.onClose;return n?i.a.createPortal(Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"overlay"}),Object(d.jsxs)("div",{className:"modal",children:[t,Object(d.jsx)("button",{onClick:c,children:"Close Modal"})]})]}),document.getElementById("portal")):null}),I=function(e){var t=e.listing,n=Object(c.useState)([]),r=Object(l.a)(n,2),s=r[0],i=r[1],a=Object(c.useState)([]),O=Object(l.a)(a,2),h=O[0],x=O[1],f=Object(c.useState)(!1),m=Object(l.a)(f,2),v=m[0],g=m[1],k=Object(c.useState)(null),w=Object(l.a)(k,2),I=w[0],N=w[1],C=Object(b.g)(),E=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/listings/").concat(t._id),{method:"delete"});case 2:C.push("/deals");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(o.a.mark((function e(){var n,c,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/bookings/").concat(t._id));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,r=c.filter((function(e){return e.accepted&&!e.completed})),s=c.filter((function(e){return!e.accepted})),i(r),x(s);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==h.length){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("".concat(j,"/users/").concat(h[0].renterId));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,N(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){_()}),[]),Object(c.useEffect)((function(){F()}),[h]);var T=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(y.a)(Object(y.a)({},h[0]),{},{accepted:!0}),e.next=3,fetch("".concat(j,"/bookings/").concat(h[0]._id),{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:g(!1),C.go(0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/bookings/").concat(h[0]._id),{method:"DELETE"});case 2:g(!1),C.go(0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/bookings/completed/").concat(t),{method:"PUT"});case 2:C.go(0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("article",{className:"active-listing ".concat(0!==h.length&&"active-listing--pending"),children:[Object(d.jsx)("div",{className:"active-listing__img-div",children:Object(d.jsx)("img",{className:"active-listing__img",src:"".concat(j,"/uploads/").concat(t.pictures[0]),alt:t.title})}),Object(d.jsxs)("div",{className:"active-listing__txt-div",children:[Object(d.jsx)("h3",{children:t.title}),Object(d.jsx)("p",{children:t.description}),Object(d.jsxs)("p",{children:[t.attributes.price," SEK"]}),Object(d.jsx)(p.b,{to:"/updatelisting/".concat(t._id),children:Object(d.jsx)("button",{children:"Update"})}),Object(d.jsx)("button",{onClick:E,children:"Delete"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("ul",{children:s.map((function(e){return Object(d.jsxs)("li",{children:["From: ",e.bookingFrom,"  To: ",e.bookingTo," ",Object(d.jsx)("button",{onClick:function(){return P(e._id)},children:"Item returned"})]},e._id)}))}),0!==h.length&&Object(d.jsx)("button",{onClick:function(){return g(!0)},children:"Review request"})]})]})]}),null!==I&&Object(d.jsx)(S,{open:v,onClose:function(){return g(!1)},children:Object(d.jsxs)("article",{className:"request-review",children:[Object(d.jsx)("div",{className:"request-review__img",children:Object(d.jsx)("img",{src:"https://i.pravatar.cc/150"})}),Object(d.jsxs)("div",{className:"request-review__txt",children:[Object(d.jsx)("h3",{children:I.user.firstName}),Object(d.jsxs)("h2",{children:["Rating: ",I.rating]}),Object(d.jsx)("p",{children:h[0].bookingFrom}),Object(d.jsx)("p",{children:h[0].bookingTo})]}),Object(d.jsx)("button",{onClick:T,children:"Approve"}),Object(d.jsx)("button",{onClick:L,children:"Reject"})]})})]})},N=function(){var e=document.cookie.split("=")[1],t=Object(c.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1],i=function(){var t=Object(u.a)(o.a.mark((function t(){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(j,"/listings/active/").concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,s(c.reverse());case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){i()}),[]),Object(d.jsx)("div",{children:r.map((function(e){return Object(d.jsx)(I,{listing:e},e._id)}))})},C=(n(39),function(e){var t=e.rental,n=Object(c.useState)(null),r=Object(l.a)(n,2),s=r[0],i=r[1],a=Object(c.useState)(null),b=Object(l.a)(a,2),O=b[0],p=b[1],h=Object(c.useState)(!1),x=Object(l.a)(h,2),f=x[0],m=x[1],v=function(){var e=Object(u.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/listings/").concat(t.listingId));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,i(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("".concat(j,"/users/").concat(s.ownerId));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,p(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){v()}),[]),Object(c.useEffect)((function(){g()}),[s]),s&&O?Object(d.jsxs)("article",{className:"rental",children:[Object(d.jsx)("img",{className:"rental__img",src:"".concat(j,"/uploads/").concat(s.pictures[0])}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h3",{children:[s.title," ",!t.accepted&&Object(d.jsx)("span",{children:"(Pending)"})]}),Object(d.jsxs)("p",{children:["Start: ",t.bookingFrom," "]}),Object(d.jsxs)("p",{children:["Return: ",t.bookingTo," "]}),Object(d.jsxs)("p",{children:["Rented by: ",O.user.firstName]}),Object(d.jsxs)("button",{onClick:function(){return m(!0)},children:["See ",O.user.firstName,"'s information"]})]}),Object(d.jsx)(S,{open:f,onClose:function(){return m(!1)},children:Object(d.jsxs)("article",{className:"user-modal",children:[Object(d.jsx)("div",{className:"user-modal__img",children:Object(d.jsx)("img",{src:"https://i.pravatar.cc/150"})}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h3",{children:[O.user.firstName," ",O.user.lastName]}),Object(d.jsx)("p",{children:O.rating}),Object(d.jsxs)("p",{children:[O.user.location.postalcode,", ",O.user.location.area]}),t.accepted&&Object(d.jsx)("p",{children:O.user.email})]})]})})]}):null}),E=function(){var e=document.cookie.split("=")[1],t=Object(c.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1],i=function(){var t=Object(u.a)(o.a.mark((function t(){var n,c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(j,"/bookings/rentals/").concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,r=c.filter((function(e){return!1===e.completed})),s(r.reverse());case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){i()}),[]),Object(d.jsx)("div",{children:r.map((function(e){return Object(d.jsx)(C,{rental:e},e._id)}))})},_=(n(40),function(e){var t=e.dealPartner,n=e.booking,r=e.setModal,s=Object(b.g)(),i=document.cookie.split("=")[1],a=Object(c.useState)({rating:"",feedback:""}),O=Object(l.a)(a,2),p=O[0],h=O[1],x=function(){var e=Object(u.a)(o.a.mark((function e(c){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),a=Object(y.a)(Object(y.a)({},p),{},{targetId:t.user._id,authorId:i,bookingId:n._id,date:(new Date).toISOString().split("T")[0]}),e.next=4,fetch("".concat(j,"/reviews"),{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 4:h({rating:"",feedback:""}),r(!1),s.go(0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h1",{children:["Review ",t.user.firstName]}),Object(d.jsxs)("form",{onSubmit:x,id:"review-form",children:[Object(d.jsxs)("div",{onChange:function(e){return h(Object(y.a)(Object(y.a)({},p),{},{rating:e.target.value}))},children:[Object(d.jsxs)("label",{children:["1",Object(d.jsx)("input",{type:"radio",value:"1",name:"rating",required:!0})]}),Object(d.jsxs)("label",{children:["2",Object(d.jsx)("input",{type:"radio",value:"2",name:"rating"})]}),Object(d.jsxs)("label",{children:["3",Object(d.jsx)("input",{type:"radio",value:"3",name:"rating"})]}),Object(d.jsxs)("label",{children:["4",Object(d.jsx)("input",{type:"radio",value:"4",name:"rating"})]}),Object(d.jsxs)("label",{children:["5",Object(d.jsx)("input",{type:"radio",value:"5",name:"rating"})]})]}),Object(d.jsx)("textarea",{form:"review-form",name:"feedback",value:p.feedback,onChange:function(e){return h(Object(y.a)(Object(y.a)({},p),{},{feedback:e.target.value}))},placeholder:"Write about your experience"}),Object(d.jsx)("button",{type:"submit",children:"Leave a review"})]})]})}),F=function(e){var t=e.booking,n=document.cookie.split("=")[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),i=s[0],a=s[1],b=Object(c.useState)(null),O=Object(l.a)(b,2),p=O[0],h=O[1],x=Object(c.useState)(!1),f=Object(l.a)(x,2),m=f[0],v=f[1],g=function(){var e=Object(u.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/listings/").concat(t.listingId));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,a(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(o.a.mark((function e(){var c,r,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n!==t.ownerId){e.next=10;break}return e.next=3,fetch("".concat(j,"/users/").concat(t.renterId));case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,h(r),e.next=17;break;case 10:return e.next=12,fetch("".concat(j,"/users/").concat(t.ownerId));case 12:return s=e.sent,e.next=15,s.json();case 15:i=e.sent,h(i);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){g(),k()}),[]),i&&p?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("article",{className:"completed",children:[Object(d.jsx)("img",{className:"completed__img",src:"".concat(j,"/uploads/").concat(i.pictures[0])}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:i.title}),n===i.ownerId&&Object(d.jsxs)("p",{children:["You rented it out to ",p.user.firstName]}),n===i.ownerId&&!1===t.renterHasBeenReviewed&&Object(d.jsx)("button",{onClick:function(){return v(!0)},children:"LEAVE REVIEW NOW"}),n!==i.ownerId&&Object(d.jsxs)("p",{children:["You rented it from ",p.user.firstName]}),n!==i.ownerId&&!1===t.ownerHasBeenReviewed&&Object(d.jsx)("button",{onClick:function(){return v(!0)},children:"LEAVE REVIEW NOW"})]})]}),Object(d.jsx)(S,{open:m,onClose:function(){return v(!1)},children:Object(d.jsx)(_,{booking:t,dealPartner:p,setModal:v})})]}):null},T=function(){var e=document.cookie.split("=")[1],t=Object(c.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1],i=function(){var t=Object(u.a)(o.a.mark((function t(){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(j,"/bookings/completed/").concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,s(c);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){i()}),[]),Object(d.jsx)("div",{children:r.map((function(e){return Object(d.jsx)(F,{booking:e},e._id)}))})},L=function(){var e=Object(b.h)(),t=e.path,n=e.url;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Topics"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(p.b,{to:"".concat(n),children:"Active Listings"})}),Object(d.jsx)("li",{children:Object(d.jsx)(p.b,{to:"".concat(n,"/ongoing"),children:"Ongoing Deals"})}),Object(d.jsx)("li",{children:Object(d.jsx)(p.b,{to:"".concat(n,"/completed"),children:"Completed Bookings"})})]}),Object(d.jsxs)(b.d,{children:[Object(d.jsx)(b.b,{exact:!0,path:t,children:Object(d.jsx)(N,{})}),Object(d.jsx)(b.b,{path:"".concat(t,"/ongoing"),children:Object(d.jsx)(E,{})}),Object(d.jsx)(b.b,{path:"".concat(t,"/completed"),children:Object(d.jsx)(T,{})})]})]})},P=function(e){var t=e.listingId,n=document.cookie.split("=")[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),i=s[0],a=s[1],O=Object(b.g)(),p=function(){var e=Object(u.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/listings/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,a(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/listings/").concat(i._id),{method:"delete"});case 2:O.push("/deals");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(o.a.mark((function e(n){var c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=document.getElementById("updateListingForm"),r=new FormData(c),e.next=5,fetch("".concat(j,"/listings/").concat(t),{method:"POST",body:r});case 5:O.push("/deals");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){p()}),[]),i?Object(d.jsxs)("form",{onSubmit:x,name:"updateListingForm",id:"updateListingForm",enctype:"multipart/form-data",children:[Object(d.jsx)("input",{type:"hidden",value:n,name:"ownerId"}),Object(d.jsx)("input",{type:"hidden",value:i.pictures[0],name:"currentimage"}),Object(d.jsxs)("label",{children:["Upload image",Object(d.jsx)("input",{type:"file",name:"image",accept:"image/x-png,image/gif,image/jpeg"})]}),Object(d.jsx)("label",{children:Object(d.jsx)("input",{type:"text",name:"title",placeholder:"title",required:!0,value:i.title,onChange:function(e){return a(Object(y.a)(Object(y.a)({},i),{},{title:e.target.value}))}})}),Object(d.jsx)("label",{children:Object(d.jsx)("input",{type:"text",name:"description",placeholder:"description",required:!0,value:i.description,onChange:function(e){return a(Object(y.a)(Object(y.a)({},i),{},{description:e.target.value}))}})}),Object(d.jsxs)("label",{children:["Color",Object(d.jsxs)("select",{name:"color",value:i.attributes.color,onChange:function(e){return a(Object(y.a)(Object(y.a)({},i),{},{attributes:Object(y.a)(Object(y.a)({},i.attributes),{},{color:e.target.value})}))},children:[Object(d.jsx)("option",{value:"black",children:"Black"}),Object(d.jsx)("option",{value:"white",children:"White"}),Object(d.jsx)("option",{value:"red",children:"Red"}),Object(d.jsx)("option",{value:"blue",children:"Blue"}),Object(d.jsx)("option",{value:"orange",children:"Orange"}),Object(d.jsx)("option",{value:"green",children:"Green"}),Object(d.jsx)("option",{value:"pink",children:"Pink"}),Object(d.jsx)("option",{value:"purple",children:"Purple"}),Object(d.jsx)("option",{value:"grey",children:"Grey"}),Object(d.jsx)("option",{value:"brown",children:"Brown"}),Object(d.jsx)("option",{value:"mixed",children:"Mixed"}),Object(d.jsx)("option",{value:"yellow",children:"Yellow"})]})]}),Object(d.jsxs)("label",{children:["Category",Object(d.jsxs)("select",{name:"category",value:i.attributes.category,onChange:function(e){return a(Object(y.a)(Object(y.a)({},i),{},{attributes:Object(y.a)(Object(y.a)({},i.attributes),{},{category:e.target.value})}))},children:[Object(d.jsx)("option",{value:"trousers",children:"Trousers"}),Object(d.jsx)("option",{value:"jeans",children:"Jeans"}),Object(d.jsx)("option",{value:"shirt",children:"Shirt"}),Object(d.jsx)("option",{value:"dress",children:"Dress"}),Object(d.jsx)("option",{value:"skirt",children:"Skirt"}),Object(d.jsx)("option",{value:"jacket",children:"Jacket"}),Object(d.jsx)("option",{value:"suit",children:"Suit"}),Object(d.jsx)("option",{value:"accessories",children:"Accessories"})]})]}),Object(d.jsxs)("label",{children:["Size",Object(d.jsxs)("select",{name:"size",value:i.attributes.size,onChange:function(e){return a(Object(y.a)(Object(y.a)({},i),{},{attributes:Object(y.a)(Object(y.a)({},i.attributes),{},{size:e.target.value})}))},children:[Object(d.jsx)("option",{value:"xsmall",children:"XS"}),Object(d.jsx)("option",{value:"small",children:"S"}),Object(d.jsx)("option",{value:"medium",children:"M"}),Object(d.jsx)("option",{value:"large",children:"L"}),Object(d.jsx)("option",{value:"xlarge",children:"XL"})]})]}),Object(d.jsxs)("label",{children:["Gender",Object(d.jsxs)("select",{name:"gender",value:i.attributes.gender,onChange:function(e){return a(Object(y.a)(Object(y.a)({},i),{},{attributes:Object(y.a)(Object(y.a)({},i.attributes),{},{gender:e.target.value})}))},children:[Object(d.jsx)("option",{value:"guys",children:"Guys"}),Object(d.jsx)("option",{value:"ladies",children:"Ladies"}),Object(d.jsx)("option",{value:"unisex",children:"Unisex"})]})]}),Object(d.jsxs)("label",{children:["Price",Object(d.jsx)("input",{type:"number",name:"price",min:"1",max:"10000",placeholder:"price (SEK)",value:i.attributes.price,onChange:function(e){return a(Object(y.a)(Object(y.a)({},i),{},{attributes:Object(y.a)(Object(y.a)({},i.attributes),{},{price:e.target.value})}))},required:!0})]}),Object(d.jsx)("button",{type:"submit",children:"Update Listing"}),Object(d.jsx)("button",{onClick:h,children:"Delete"})]}):Object(d.jsx)("div",{})},B=function(e){var t=e.match;return Object(d.jsx)("div",{children:Object(d.jsx)(P,{listingId:t.params.listingid})})},D=(n(41),function(){return Object(d.jsx)("div",{className:"navbar",children:Object(d.jsxs)("ul",{className:"navbar__links",children:[Object(d.jsxs)(p.b,{to:"/",children:[Object(d.jsx)("span",{className:"material-icons-round",children:"home"}),Object(d.jsx)("li",{children:"Home"})]}),Object(d.jsxs)(p.b,{to:"/listing",children:[Object(d.jsx)("span",{className:"material-icons-round",children:"add"}),Object(d.jsx)("li",{children:"List item"})]}),Object(d.jsxs)(p.b,{to:"/deals",children:[Object(d.jsx)("span",{className:"material-icons-round",children:"local_offer"}),Object(d.jsx)("li",{children:"Deals"})]}),Object(d.jsxs)(p.b,{to:"/account",children:[Object(d.jsx)("span",{className:"material-icons-round",children:"account_circle"}),Object(d.jsx)("li",{children:"Account"})]}),Object(d.jsx)(p.b,{to:"/login",children:Object(d.jsx)("li",{children:"Login"})})]})})}),R=function(){var e=document.cookie.split("=")[1],t=Object(c.useState)(null),n=Object(l.a)(t,2),r=n[0],s=n[1],i=function(){var t=Object(u.a)(o.a.mark((function t(){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(j,"/users/").concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,s(c);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){i()}),[]),r?Object(d.jsxs)("article",{className:"account-info",children:[Object(d.jsxs)("h2",{children:[r.user.firstName," ",r.user.lastName]}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://i.pravatar.cc/150"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:r.user.username}),Object(d.jsx)("p",{children:r.user.email}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:r.user.location.street}),Object(d.jsxs)("p",{children:[r.user.location.postalcode,", ",r.user.location.area]}),Object(d.jsxs)("h3",{children:["Your average rating: ",r.rating]})]}),Object(d.jsx)("button",{children:"Edit account settings"})]}):null},q=function(e){var t=e.review,n=Object(c.useState)(null),r=Object(l.a)(n,2),s=r[0],i=r[1],a=function(){var e=Object(u.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/users/").concat(t.authorId));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,i(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),s?Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:[s.user.firstName," rated ",t.rating," out of 5"]}),""!==t.feedback&&Object(d.jsxs)("p",{children:['"',t.feedback,'"']}),Object(d.jsxs)("p",{children:["Review date: ",t.date]})]}):null},z=function(e){var t=e.userId,n=Object(c.useState)(null),r=Object(l.a)(n,2),s=r[0],i=r[1],a=function(){var e=Object(u.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/reviews/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,i(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),s?Object(d.jsxs)("article",{children:[Object(d.jsx)("h2",{children:"Recieved reviews"}),s.map((function(e){return Object(d.jsx)(q,{review:e},e._id)}))]}):null},J=function(){var e=document.cookie.split("=")[1];return Object(d.jsxs)("section",{children:[Object(d.jsx)(R,{}),Object(d.jsx)(z,{userId:e})]})},G=function(e){var t=e.match,n=Object(c.useState)(null),r=Object(l.a)(n,2),s=r[0],i=r[1],a=function(){var e=Object(u.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/users/").concat(t.params.userId));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,i(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),s?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("article",{className:"account-info",children:[Object(d.jsxs)("h2",{children:[s.user.firstName," ",s.user.lastName]}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://i.pravatar.cc/150"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:s.user.location.area}),Object(d.jsxs)("h3",{children:[s.user.firstName,"'s average rating: ",s.rating]})]})]}),Object(d.jsx)(z,{userId:t.params.userId})]}):null};var A=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(p.a,{basename:"/chameleon-client",children:[Object(d.jsxs)(b.d,{children:[Object(d.jsx)(b.b,{path:"/login",component:O}),Object(d.jsx)(b.b,{path:"/",exact:!0,component:m}),Object(d.jsx)(b.b,{path:"/booking/:listingId",component:w}),Object(d.jsx)(b.b,{path:"/listing",component:g}),Object(d.jsx)(b.b,{path:"/deals",component:L}),Object(d.jsx)(b.b,{path:"/updatelisting/:listingid",component:B}),Object(d.jsx)(b.b,{path:"/account",component:J}),Object(d.jsx)(b.b,{path:"/user/:userId",component:G})]}),Object(d.jsx)(D,{})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),M()}},[[42,1,2]]]);
//# sourceMappingURL=main.a5d44c88.chunk.js.map