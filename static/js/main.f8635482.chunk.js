(this.webpackJsonpfinal=this.webpackJsonpfinal||[]).push([[0],{139:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(14),r=a.n(i),c=a(8),o=a.n(c),d=a(28),j=a(15),l=a(16),h=a(18),b=a(17),u=a(6),p=(a(138),a(139),a.p+"static/media/link_icon.eb89ac93.svg"),O=a.p+"static/media/text_icon.34274a94.svg",m=a(3),f=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this,e)).linkify=function(e){var t,a,s;return t=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,a=/(^|[^\/])(www\.[\S]+(\b|$))/gim,s=/(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim,e.replace(t,'<a href="$1" target="_blank">$1</a>').replace(a,'$1<a href="http://$2" target="_blank">$2</a>').replace(s,'<a href="mailto:$1">$1</a>')},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this.linkify(this.props.history_item.value),t=e.includes("</a>");return Object(m.jsxs)("div",{className:"history_item",children:[Object(m.jsx)("img",{src:t?p:O}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"history_item_title",children:t?"\u0421\u0441\u044b\u043b\u043a\u0430":"\u0422\u0435\u043a\u0441\u0442"}),t?Object(m.jsx)("p",{className:"history_max_w",dangerouslySetInnerHTML:{__html:e}}):Object(m.jsx)("p",{className:"history_item_text history_max_w",children:this.props.history_item.value})]})]})}}]),a}(n.a.Component),y=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).onBridgeResult=function(t){switch(t.detail.type){case"VKWebAppOpenCodeReaderResult":var a={key:e.state.history.length+"",value:t.detail.data.code_data},s=e.state.history;s.push(a),e.setState({history:s}),o.a.send("VKWebAppStorageSet",a);break;default:break;case"VKWebAppStorageGetKeysResult":o.a.send("VKWebAppStorageGet",{keys:t.detail.data.keys});break;case"VKWebAppStorageGetResult":var n=t.detail.data.keys;n.length>0&&e.setState({history:n})}},e.openScanner=function(){o.a.send("VKWebAppOpenCodeReader")},e.state={qrResult:void 0,history:[{key:0,value:"\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0438 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0444\u043e\u043d\u0430\u0440\u0438\u043a\u0443 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435.saddsfaoisdjgifasjidgijsadgijasdg"},{key:0,value:"https://google.com/asdisajfsadifsadofjisadjifjisaodfjioasjdifjiaj"}]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){o.a.subscribe(this.onBridgeResult),o.a.send("VKWebAppStorageGetKeys",{count:100,offset:0})}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"qrcodes_container",children:[Object(m.jsx)(u.e,{separator:!1,children:"QR-\u043a\u043e\u0434\u044b"}),Object(m.jsx)("div",{className:"qr_button",children:Object(m.jsx)(u.c,{onClick:this.openScanner,size:"l",stretched:!0,style:{marginTop:16,marginBottom:28},children:"\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c QR-\u043a\u043e\u0434"})}),Object(m.jsx)(u.f,{}),this.state.history.length>0&&Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{className:"qr_count",children:["\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043e: ",this.state.history.length]}),this.state.history.map((function(e,t){return Object(m.jsx)(f,{index:t,history_item:e},t)}))]})]})}}]),a}(n.a.Component),x=(a.p,a.p,function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(j.a)(this,a),t.call(this)}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsx)(u.a,{children:Object(m.jsx)(u.b,{children:Object(m.jsx)(v,{})})})}}]),a}(n.a.Component)),g=x,v=Object(u.m)((function(e){var t=e.viewWidth,a=Object(u.l)(),s=n.a.useState("scanner"),i=Object(d.a)(s,2),r=(i[0],i[1],t>=u.k.TABLET),c=a!==u.i;return Object(m.jsx)(u.h,{header:c&&Object(m.jsx)(u.e,{separator:!1}),style:{justifyContent:"center"},children:Object(m.jsx)(u.g,{animate:!r,spaced:r,width:r?"560px":"100%",maxWidth:r?"560px":"100%",children:Object(m.jsx)(u.j,{id:"scanner",activePanel:"scanner",children:Object(m.jsx)(u.d,{id:"scanner",children:Object(m.jsx)(y,{})})})})})}),{viewWidth:!0});r.a.render(Object(m.jsx)(x,{}),document.getElementById("root")),o.a.send("VKWebAppInit"),r.a.render(Object(m.jsx)(g,{}),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.f8635482.chunk.js.map