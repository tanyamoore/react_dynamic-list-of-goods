(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(4),c=n.n(r),s=n(1),l=n.n(s),u=n(2),i=n(5),d=n(6),g=n(8),f=n(7),p=(n(15),function(t){var e=t.goods;return a.a.createElement("ul",null,e?e.map((function(t){return a.a.createElement("li",{key:t.id,style:{color:t.color}},t.name)})):"")}),m="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json",h=function(t){Object(g.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={goods:[]},t.getAll=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m).json();case 2:n=e.sent,t.setState({goods:n});case 4:case"end":return e.stop()}}),e)}))),t.get5=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m).json();case 2:n=e.sent,console.log(n.length),n.length=5,t.setState({goods:n});case 6:case"end":return e.stop()}}),e)}))),t.getRed=Object(u.a)(l.a.mark((function e(){var n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m).json();case 2:n=e.sent,console.log(n.length),o=n.filter((function(t){return"red"===t.color})),t.setState({goods:o});case 6:case"end":return e.stop()}}),e)}))),t}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{type:"button",onClick:this.getAll},"Load All goods"),a.a.createElement("button",{type:"button",onClick:this.get5},"Load 5 first goods"),a.a.createElement("button",{type:"button",onClick:this.getRed},"Load red goods"),a.a.createElement(p,{goods:this.state.goods}))}}]),n}(a.a.Component);c.a.render(a.a.createElement(h,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.3c1f0661.chunk.js.map