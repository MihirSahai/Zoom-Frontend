(this.webpackJsonpdemoproject=this.webpackJsonpdemoproject||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),o=n(13),c=n.n(o),r=(n(19),n(4)),s=(n(20),n(21),n(14)),l=n.n(s),d=n(0);var h=function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(i.useState)(""),c=Object(r.a)(o,2),s=c[0],h=c[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("h1",{children:"Zoom meeting link generation form"}),Object(d.jsxs)("div",{className:"card",style:{justifyContent:"space-around"},children:[Object(d.jsx)("div",{class:"para",children:"Dear User, You can fill your name and time for online zoom meeting in the form below and generate a meeting link. This generated meeting link uses this netlify/vercel url and NOT a zoom URL. Also the meeting link opens meeting inside this netlify/vercel website and not on zoom website."}),Object(d.jsxs)("h5",{children:["Name\xa0\xa0",Object(d.jsx)("input",{type:"text",name:"name",placeholder:"Enter Name",style:{width:"300px",borderRadius:"5px",padding:"8px 12px",fontSize:"18px"},value:n,onChange:function(e){return a(e.target.value)}})]}),Object(d.jsxs)("h5",{children:["Start Time\xa0\xa0",Object(d.jsx)("input",{type:"text",name:"time",placeholder:"In 24hr format",style:{width:"260px",borderRadius:"5px",padding:"8px 12px",fontSize:"18px"},value:s,onChange:function(e){return h(e.target.value)}})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("button",{className:"btn btn-info",style:{width:"290px",height:"80px",fontSize:"20px",fontFamily:"cursive",alignItems:"center"},onClick:function(){console.log(n),l.a.post("http://localhost:3444/meeting",{email:"mihirsahai01@gmail.com"}).then((function(e){var t=e.data.join_url.replaceAll("https://us04web.zoom.us/j/","http://localhost:9999/?")+"?role=1?name=".concat(n);console.log(t),window.location.replace("".concat(t))})).catch((function(e){return console.error(e)}))},children:"Create Meeting"})})]})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),o(e),c(e)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),p()}},[[41,1,2]]]);
//# sourceMappingURL=main.9e018900.chunk.js.map