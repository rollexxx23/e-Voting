(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{219:function(n,t,e){},242:function(n,t,e){},256:function(n,t){},265:function(n,t){},283:function(n,t){},285:function(n,t){},301:function(n,t){},302:function(n,t){},365:function(n,t){},367:function(n,t){},376:function(n,t){},378:function(n,t){},403:function(n,t){},405:function(n,t){},406:function(n,t){},411:function(n,t){},413:function(n,t){},426:function(n,t){},438:function(n,t){},441:function(n,t){},446:function(n,t){},457:function(n,t){},460:function(n,t){},512:function(n,t,e){},514:function(n,t,e){},522:function(n,t,e){},523:function(n,t,e){},524:function(n,t,e){},525:function(n,t,e){},526:function(n,t,e){"use strict";e.r(t);var o=e(0),c=e(65),i=e.n(c),u=(e(242),e(41)),a=e.n(u),r=e(221),f=e(8),s=e(9),l=e(15),h=e(14),p=e(126),b=e.n(p),d=(e(219),e(512),e.p,e(2));var m=e(33);e(514);e(522);var v=e(543);e(550),e(548),e(545),e(549),e(546),e(523),e.p,e(547),Object(v.a)({root:{width:"75%"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:18},pos:{marginBottom:12},text:{fontSize:15}});e(524),e.p,e.p,Object(v.a)({root:{width:"500px",marginBottom:30,height:300},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:18},pos:{marginBottom:12},text:{fontSize:15}});e(525);var g=function(n){Object(l.a)(e,n);var t=Object(h.a)(e);function e(n){var o;return Object(f.a)(this,e),(o=t.call(this,n)).state={account:""},o}return Object(s.a)(e,[{key:"componentWillMount",value:function(){this.loadBlockchainData()}},{key:"loadBlockchainData",value:function(){var n=Object(r.a)(a.a.mark((function n(){var t,e,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new b.a(b.a.givenProvider||"http://localhost:8545"),e=window.ethereum,n.next=4,e.enable();case 4:return n.sent,n.next=7,t.eth.getAccounts();case 7:o=n.sent,this.setState({account:o[0]}),console.log(this.state.account);case 10:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("p",{children:["Your account: ",this.state.account]})})}}]),e}(o.Component),j=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,552)).then((function(t){var e=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,u=t.getTTFB;e(n),o(n),c(n),i(n),u(n)}))};i.a.render(Object(d.jsx)(m.a,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),j()}},[[526,1,2]]]);
//# sourceMappingURL=main.26734178.chunk.js.map