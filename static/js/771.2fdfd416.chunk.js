"use strict";(self.webpackChunksamurai=self.webpackChunksamurai||[]).push([[771],{771:(s,e,a)=>{a.r(e),a.d(e,{default:()=>f});var i=a(791),n=a(689),d=a(87);const r={};var t=a(184);const l=function(s){const e="/dialogs/1"+s.id;return(0,t.jsx)("div",{className:r.dialog,children:(0,t.jsx)(d.OL,{to:e,children:s.name})})},o={};const c=function(s){return(0,t.jsx)("div",{className:o.message,children:s.message})},g="Dialogs_dialogs__oe96H",u="Dialogs_dialogsItems__zeEWD",m="Dialogs_messages__Cg2l+";const h=()=>(0,t.jsx)("form",{children:(0,t.jsxs)("div",{children:[(0,t.jsx)("textarea",{placeholder:"Enter your message"}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{children:"Send message"})})]})}),j=function(s){let{sendMessage:e,dialogsPage:a,isAuth:i}=s;const d=a,r=d.dialogs.map((s=>(0,t.jsx)(l,{name:s.name,id:s.id},s.id))),o=d.messages.map((s=>(0,t.jsx)(c,{message:s.message},s.id)));return i?(0,t.jsxs)("div",{className:g,children:[(0,t.jsx)("div",{className:u,children:r}),(0,t.jsxs)("div",{className:m,children:[(0,t.jsx)("div",{children:o}),(0,t.jsx)(h,{onSubmit:s=>{e(s)}})]})]}):(0,t.jsx)(n.Fg,{to:"/login"})};var x=a(420),p=a(154),v=a(807);const _=s=>{class e extends i.Component{render(){return this.props.isAuth?(0,t.jsx)(s,{...this.props}):(0,t.jsx)(n.Fg,{to:"/login"})}}return(0,x.$j)((s=>({isAuth:s.authReducer.isAuth})))(e)},f=(0,p.qC)((0,x.$j)((s=>({dialogsPage:s.dialogsReducer})),(s=>({sendMessage:e=>{s((0,v.b)(e))}}))),_)(j)}}]);
//# sourceMappingURL=771.2fdfd416.chunk.js.map