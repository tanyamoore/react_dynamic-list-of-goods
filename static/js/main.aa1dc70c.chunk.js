(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(4),c=n.n(r),s=n(1),u=n.n(s),l=n(2),i=n(5),d=n(6),g=n(8),f=n(7),p=(n(15),function(e){var t=e.goods;return a.a.createElement("ul",null,t&&t.map((function(e){return a.a.createElement("li",{key:e.id,style:{color:e.color}},e.name)})))}),m="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json",h=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={goods:[]},e.getAll=Object(l.a)(u.a.mark((function t(){var n,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(m);case 2:return n=t.sent,t.next=5,n.json();case 5:o=t.sent,e.setState({goods:o});case 7:case"end":return t.stop()}}),t)}))),e.get5=Object(l.a)(u.a.mark((function t(){var n,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(m);case 2:return n=t.sent,t.next=5,n.json();case 5:o=t.sent,console.log(o.length),e.setState({goods:o.slice(0,5)});case 8:case"end":return t.stop()}}),t)}))),e.getRed=Object(l.a)(u.a.mark((function t(){var n,o,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(m);case 2:return n=t.sent,t.next=5,n.json();case 5:o=t.sent,console.log(o.length),a=o.filter((function(e){return"red"===e.color})),e.setState({goods:a});case 9:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{type:"button",onClick:this.getAll},"Load All goods"),a.a.createElement("button",{type:"button",onClick:this.get5},"Load 5 first goods"),a.a.createElement("button",{type:"button",onClick:this.getRed},"Load red goods"),a.a.createElement(p,{goods:this.state.goods}))}}]),n}(a.a.Component);c.a.render(a.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.aa1dc70c.chunk.js.map