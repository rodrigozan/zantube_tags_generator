(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(6616)}])},6616:function(e,t,s){"use strict";s.r(t);var a=s(5893),i=s(7294),l=s(5600),n=s(7500),c=s(9749),r=s(8918),o=s(2441),d=s(425);t.default=()=>{let[e,t]=(0,i.useState)(!1),[s,u]=(0,i.useState)(""),[p,h]=(0,i.useState)([]),[m,f]=(0,i.useState)(!1),[x,g]=(0,i.useState)(!1),[w,y]=(0,i.useState)(!1),[b,j]=(0,i.useState)(!1),[v,N]=(0,i.useState)(!1);(0,i.useEffect)(()=>(t(!0),()=>{t(!1)}),[]);let k=async e=>{if(e.preventDefault(),!s||null===s||""===s){g(!0);return}N(!0),j(!0);try{let e=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q=".concat(s,"&type=video&key=").concat("AIzaSyDcq57gWiblabGyxk0VuVmfpibOuYRNJFM")),t=await e.json();console.log("Response",t);let a=t.items[0].id.videoId,i=await fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=".concat(a,"&key=").concat("AIzaSyDcq57gWiblabGyxk0VuVmfpibOuYRNJFM")),l=await i.json();h(l.items[0].snippet.tags)}catch(e){f(!0),console.error("Error fetching data: ",e)}finally{j(!1)}};return(0,a.jsx)("main",{style:{height:"100vh",width:"100%"},className:"flex align-items-center justify-content-center",children:(0,a.jsx)("div",{className:"grid grid-nogutter surface-0 text-800",children:(0,a.jsxs)("div",{className:"col-12 text-center p-8",children:[(0,a.jsx)("h1",{className:"text-primary",children:"YouTube Video Tags Generator"}),(0,a.jsxs)("form",{onSubmit:k,children:[(0,a.jsxs)("div",{className:"flex flex-column gap-2 my-5",children:[(0,a.jsx)(l.o,{placeholder:"Keyword",value:s,onClick:()=>{g(!1)},onChange:e=>{u(e.target.value)},className:"w-full"}),(0,a.jsx)("small",{id:"username-help",children:"Enter your title or your keyword and click in bellow button for generate your YouTube Video Tags"}),(0,a.jsxs)("div",{className:"card flex justify-content-center",children:[m&&(0,a.jsx)(d.v,{className:"w-full",severity:"error",text:"It's was possible find tags for this keyword"}),x&&(0,a.jsx)(d.v,{className:"w-full",severity:"error",text:"The keyword field needs to be filled in"})]})]}),(0,a.jsx)(n.z,{label:b?"Loading...":"Get Tags",icon:b?"pi pi-spinner pi-spin":null,disabled:b&&v,className:"w-full"})]}),p.length>0&&(0,a.jsxs)("div",{children:[(0,a.jsx)(r.i,{}),(0,a.jsx)("div",{className:"card",children:(0,a.jsxs)(c.p,{legend:"Relevant Tags",toggleable:!0,children:[(0,a.jsx)("div",{className:"m-0",children:(0,a.jsx)("div",{children:p.map((e,t)=>(0,a.jsx)(o.A,{label:e,className:"ml-2 mb-2"}))})}),(0,a.jsx)(n.z,{label:w?"Copied to clipboard!":"Copy Tags",icon:w?"pi pi-check":"pi pi-clone",severity:"help",className:"mt-5",onClick:()=>{let e=p.join(", ");navigator.clipboard.writeText(e),y(!0)}}),(0,a.jsx)(n.z,{label:"Clear",icon:"pi pi-times",className:"p-button-danger ml-3",onClick:()=>{u(""),h([]),N(!1),j(!1),y(!1)}})]})})]})]})})})}}},function(e){e.O(0,[769,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);