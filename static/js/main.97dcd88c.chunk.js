(this.webpackJsonpbooksearch=this.webpackJsonpbooksearch||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),o=s(4),r=s.n(o),n=(s(15),s(16),s(2)),l="SUBMIT",i="CHANGE",A="CHANGE_CLASS",j="CHANGE_BOOK_FULL_INFO",u="RESET_BOOK_FULL_INFO",b=function(e,t){return{type:l,payload:{items:e,totalItems:t}}},d=function(){return{type:A,payload:{}}},m=function(){return{type:u,payload:{}}},v=(s(21),s(0));var g=function(e){var t,s=e.book,a=e.serialNumber,c=Object(n.c)(),o=s.volumeInfo,r=(null===(t=o.imageLinks)||void 0===t?void 0:t.smallThumbnail)||"data:image/png;base64,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",l=void 0!==o.categories?o.categories:[],i=l!==[]?l[0]:"",A=o.title,u=void 0!==o.authors?o.authors:[],b=u!==[]?u.join(", "):"",d=void 0!==o.description?o.description:"";return Object(v.jsxs)("div",{className:"BookCard card",onClick:function(){c(function(e,t,s,a,c,o){return{type:j,payload:{img:e,categories:t,title:s,authors:a,description:c,opened:o}}}(r,l,A,u,d,!0))},children:[Object(v.jsx)("div",{className:"BookImgDiv",children:Object(v.jsx)("img",{src:r,className:"BookCardImg",alt:A})}),Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("p",{className:"FirstCategory card-text",children:i||""}),Object(v.jsx)("h6",{className:"card-title",children:A}),Object(v.jsx)("p",{className:"Authors card-text",children:b})]}),Object(v.jsx)("span",{children:"#"+(a+1)})]})};var O=function(){var e=Object(n.d)((function(e){return e.queryResponse}),n.b),t=Object(n.d)((function(e){return e.classNameState}),n.b),s=e.items,a=e.totalItems;return Object(v.jsxs)("div",{className:"Wrapper",children:[Object(v.jsxs)("div",{className:"Wrapper2",children:[Object(v.jsxs)("span",{className:"TotalItems",children:["Found ",a," results"]}),Object(v.jsx)("div",{className:t,children:Object(v.jsx)("div",{className:"spinner-border",role:"status",children:Object(v.jsx)("span",{className:"sr-only"})})})]}),Object(v.jsx)("div",{className:"BookList",children:s.map((function(e,t){return Object(v.jsx)(g,{book:e,serialNumber:t},e.id+Math.random())}))})]})};s(23);var h=function(){var e=Object(n.c)(),t=Object(n.d)((function(e){return e.queryParameters}),n.b),s=function(t){var s=t.target,a=s.name,c=s.value;e(function(e,t){return{type:i,payload:{name:e,value:t}}}(a,c))};return Object(v.jsxs)("form",{className:"Search-form",onSubmit:function(t){t.preventDefault(),e(m());var s=t.target.elements.volume.value,a=t.target.elements.subject.value,c=t.target.elements.orderBy.value,o="";s.split(" ").forEach((function(e){""!==e&&(o+=e+" ")})),function(t,s,a){e(d());var c=new URL("https://www.googleapis.com/books/v1/volumes"),o="all"===s?t:"".concat(t,"+subject:").concat(s);c.searchParams.set("q",o),c.searchParams.set("orderBy","".concat(a)),c.searchParams.set("maxResults","30"),c.searchParams.set("key","".concat("AIzaSyCkQZLH6tv0IN-lvMswOyma3yR4UmDMess")),console.log(c);var r=new XMLHttpRequest;r.open("GET",c),r.onload=function(t){if(r.status<200||r.status>299){var s=JSON.parse(r.response);console.log(s)}else{var a=JSON.parse(r.response),c=a.totalItems;if(0!==c){var o=a.items;e(b(o,c))}else e(b([],c))}},r.onerror=function(e){console.log(e)},r.onloadend=function(t){e(d())},r.send()}(o.substring(0,o.length-1),a,c)},children:[Object(v.jsxs)("div",{className:"Form-row input-group",children:[Object(v.jsx)("input",{type:"text",className:"form-control search-input",name:"volume",required:!0,onChange:s,value:t.volume,placeholder:"type here"}),Object(v.jsx)("button",{type:"submit",className:"btn btn-primary",children:Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16",children:Object(v.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})})]}),Object(v.jsxs)("div",{className:"Form-row Selects input-group",children:[Object(v.jsxs)("div",{className:"SelectorsWrapper",children:[Object(v.jsx)("label",{htmlFor:"categories",children:"Categories"}),Object(v.jsxs)("select",{onChange:s,id:"categories",className:"form-select categories-select",name:"subject",value:t.subject,children:[Object(v.jsx)("option",{value:"all",children:"all"}),Object(v.jsx)("option",{value:"art",children:"art"}),Object(v.jsx)("option",{value:"biography",children:"biography"}),Object(v.jsx)("option",{value:"computers",children:"computers"}),Object(v.jsx)("option",{value:"history",children:"history"}),Object(v.jsx)("option",{value:"medical",children:"medical"}),Object(v.jsx)("option",{value:"poetry",children:"poetry"})]})]}),Object(v.jsxs)("div",{className:"SelectorsWrapper",children:[Object(v.jsx)("label",{htmlFor:"sorting",children:"Sorting by"}),Object(v.jsxs)("select",{onChange:s,id:"sorting",className:"form-select sorting-select",name:"orderBy",value:t.orderBy,children:[Object(v.jsx)("option",{value:"relevance",children:"relevance"}),Object(v.jsx)("option",{value:"newest",children:"newest"})]})]})]})]})},p=s(9);s(24);var f=function(){var e,t=Object(n.c)(),s=Object(n.d)((function(e){return e.queryResponse}),n.b),a=Object(n.d)((function(e){return e.queryParameters}),n.b),c=Object(n.d)((function(e){return e.classNameState}),n.b),o=a.volume,r=a.subject,l=a.orderBy,i=s.totalItems,A=[],j=Object(p.a)(s.items);try{for(j.s();!(e=j.n()).done;){var u=e.value;A.push(u)}}catch(f){j.e(f)}finally{j.f()}console.log(A);var m=A.length,g=0===i||A.length>=i?"btnDisplayNone":"btnDisplayBlock",O="";o.split(" ").forEach((function(e){""!==e&&(O+=e+" ")}));var h=O.substring(0,O.length-1);return Object(v.jsx)("span",{className:g,children:"DisplayNone"===c?Object(v.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){!function(e,s,a,c){t(d());var o=new URL("https://www.googleapis.com/books/v1/volumes"),r="all"===s?e:"".concat(e,"+subject:").concat(s);o.searchParams.set("q","".concat(r)),o.searchParams.set("orderBy","".concat(a)),o.searchParams.set("startIndex","".concat(c)),o.searchParams.set("maxResults","30"),o.searchParams.set("key","".concat("AIzaSyCkQZLH6tv0IN-lvMswOyma3yR4UmDMess")),console.log(o);var n=new XMLHttpRequest;n.open("GET",o),n.onload=function(e){if(n.status<200||n.status>299){var s=JSON.parse(n.response);console.log(s)}else{var a=JSON.parse(n.response),c=a.totalItems;if(0===c)return console.log(a,c),void t(b([],c));console.log(a);var o,r=a.items,l=Object(p.a)(r);try{for(l.s();!(o=l.n()).done;){var i=o.value;A.push(i)}}catch(f){l.e(f)}finally{l.f()}t(b(A,c))}},n.onerror=function(e){console.log(e)},n.onloadend=function(e){t(d()),console.log("onloadend")},n.onprogress=function(e){console.log("onProgress")},n.send()}(h,r,l,m)},children:"View more"}):Object(v.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})})};s(25);var N=function(){var e=Object(n.c)(),t=Object(n.d)((function(e){return e.bookFullInfo}),n.b),s=t.img,a=t.categories,c=t.title,o=t.authors,r=t.description,l=a.join(" / "),i=o.join(", ");return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"BackBtn",children:Object(v.jsxs)("button",{className:"btn btn-outline-primary",onClick:function(){e(m())},children:[Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-left",viewBox:"0 0 16 16",children:Object(v.jsx)("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})}),"Back to BookList"]})}),Object(v.jsxs)("div",{className:"BookInfo",children:[Object(v.jsx)("div",{className:"BookImg",children:Object(v.jsx)("img",{src:s,alt:c})}),Object(v.jsxs)("div",{className:"Info",children:[Object(v.jsx)("div",{className:"Categories",children:l}),Object(v.jsx)("h2",{className:"Title",children:c}),Object(v.jsx)("div",{className:"Authors",children:i})]}),Object(v.jsx)("div",{className:"Description",children:r})]})]})};var B=function(){var e=Object(n.d)((function(e){return e.bookFullInfo}),n.b);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"Container",children:Object(v.jsxs)("div",{className:"Search-section",children:[Object(v.jsx)("h1",{children:"Search for Books"}),Object(v.jsx)(h,{})]})}),e.opened?Object(v.jsx)(N,{}):Object(v.jsxs)("div",{children:[Object(v.jsx)(O,{}),Object(v.jsx)("div",{className:"ViewMoreDiv",children:Object(v.jsx)(f,{})})]})]})},D=s(10),C=s(5),I=s(3),w={img:"",categories:[],title:"",authors:[],description:"",opened:!1},x={queryResponse:{totalItems:0,items:[]},queryParameters:{volume:"",subject:"all",orderBy:"relevance"},classNameState:"DisplayNone",bookFullInfo:w},G=function(e,t){var s=e.queryResponse,a=t.payload,c=a.items,o=a.totalItems;return Object(I.a)(Object(I.a)({},e),{},{queryResponse:Object(I.a)(Object(I.a)({},s),{},{totalItems:o,items:c})})},y=function(e,t){var s=e.queryParameters,a=t.payload,c=a.name,o=a.value;return Object(I.a)(Object(I.a)({},e),{},{queryParameters:Object(I.a)(Object(I.a)({},s),{},Object(C.a)({},c,o))})},k=function(e,t){var s="DisplayNone"===e.classNameState?"Loader":"DisplayNone";return Object(I.a)(Object(I.a)({},e),{},{classNameState:s})},E=function(e,t){var s=e.bookFullInfo,a=t.payload,c=a.img,o=a.categories,r=a.title,n=a.authors,l=a.description,i=a.opened;return console.log(c,o,r,n,l,i),Object(I.a)(Object(I.a)({},e),{},{bookFullInfo:Object(I.a)(Object(I.a)({},s),{},{img:c,categories:o,title:r,authors:n,description:l,opened:i})})},R=function(e,t){return Object(I.a)(Object(I.a)({},e),{},{bookFullInfo:w})},q=Object(D.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return G(e,t);case i:return y(e,t);case A:return k(e,t);case j:return E(e,t);case u:return R(e,t);default:return e}})),S=q;r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(n.a,{store:S,children:Object(v.jsx)(B,{})})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.97dcd88c.chunk.js.map