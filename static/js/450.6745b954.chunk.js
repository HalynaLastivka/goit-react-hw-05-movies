"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[450],{121:function(t,n,e){e(791);var r=e(184);n.Z=function(t){var n=t.message;return(0,r.jsx)("p",{className:"error",children:n})}},658:function(t,n,e){e(791);var r=e(87),a=e(390),i=e(161),u=e(184);n.Z=function(t){var n=t.id,e=t.title,c=t.path,o=t.location;return(0,u.jsx)("li",{className:i.Z.movieListItem,children:(0,u.jsxs)(r.rU,{state:{from:o},to:"/movies/".concat(n),children:[(0,u.jsx)("img",{src:c?"".concat(a.Lo+c):"https://via.placeholder.com/150x220",alt:e,width:200}),(0,u.jsx)("h3",{className:i.Z.fixedwidthtitle,children:e})]})},n)}},450:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var r=e(861),a=e(439),i=e(757),u=e.n(i),c=e(121),o=e(67),s=e(161),p=e(791),f=e(658),h=e(184),l=function(t){var n=t.movies,e=t.location,r=Array.isArray(n)&&n.length;return(0,h.jsx)("ul",{className:s.Z.movieList,children:r&&n.map((function(t){return(0,h.jsx)(f.Z,{id:t.id,title:t.title,path:t.poster_path,location:e})}))})},v=e(689),d=e(390),m=function(){var t=(0,p.useState)(null),n=(0,a.Z)(t,2),e=n[0],i=n[1],f=(0,p.useState)(!1),m=(0,a.Z)(f,2),g=m[0],x=m[1],Z=(0,p.useState)(null),w=(0,a.Z)(Z,2),j=w[0],y=w[1],b=(0,v.TH)();return(0,p.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,x(!0),t.next=4,(0,d.Qd)();case 4:n=t.sent,i(n.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),y(t.t0.message);case 11:return t.prev=11,x(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,h.jsxs)("div",{children:[g&&(0,h.jsx)(o.Z,{}),j&&(0,h.jsx)(c.Z,{message:j}),(0,h.jsx)("h1",{className:s.Z.titlemain,children:"Trending today"}),(0,h.jsx)(l,{movies:e,location:b})]})}},390:function(t,n,e){e.d(n,{GB:function(){return s},Lo:function(){return u},Qd:function(){return h},Rg:function(){return o},Ud:function(){return p},Z7:function(){return f}});var r=e(861),a=e(757),i=e.n(a),u="https://image.tmdb.org/t/p/w200/",c=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTYxZTIyYTI0YmJiOWU0OTdjOGZlZDU1NGQ0NjkzMyIsInN1YiI6IjY1Mjk4NTU3MzU4ZGE3MDBjNmYwNzAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VL6lmG_08LXTLUfrYFhS4bUBBPTIOydGR3Un7j9UxcI"}},t.prev=1,t.next=4,fetch(n,e);case 4:return r=t.sent,t.next=7,r.json();case 7:return a=t.sent,t.abrupt("return",a);case 11:throw t.prev=11,t.t0=t.catch(1),console.error(t.t0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),t.abrupt("return",c(e));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US&page=1"),t.abrupt("return",c(e));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/search/movie??include_adult=false&language=en-US&page=1&query=".concat(n),t.abrupt("return",c(e));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),t.abrupt("return",c(e));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(i().mark((function t(n,e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day?language=en-US",t.abrupt("return",c("https://api.themoviedb.org/3/trending/movie/day?language=en-US"));case 2:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()},861:function(t,n,e){function r(t,n,e,r,a,i,u){try{var c=t[i](u),o=c.value}catch(s){return void e(s)}c.done?n(o):Promise.resolve(o).then(r,a)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(a,i){var u=t.apply(n,e);function c(t){r(u,a,i,c,o,"next",t)}function o(t){r(u,a,i,c,o,"throw",t)}c(void 0)}))}}e.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=450.6745b954.chunk.js.map