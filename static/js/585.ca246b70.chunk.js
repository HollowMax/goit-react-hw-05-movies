"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[585],{585:function(e,t,n){n.r(t),n.d(t,{Review:function(){return a}});var r=n(439),u=n(791),i=n(689),o=n(184);function c(e){var t=e.author,n=e.text;return(0,o.jsxs)("li",{children:[(0,o.jsxs)("h3",{children:["Author: ",t]}),(0,o.jsx)("p",{children:n})]})}function a(){var e,t=(0,i.UO)().movieId,n=(0,u.useState)([]),a=(0,r.Z)(n,2),h=a[0],s=a[1];(0,u.useEffect)((function(){l()}),[]);var l=function(){fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=f6d5a4fa968409c62e241bddb68c1803&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return s(e)}))};return(0,o.jsx)("ul",{children:(null===h||void 0===h||null===(e=h.results)||void 0===e?void 0:e.length)>0?h.results.map((function(e){return(0,o.jsx)(c,{author:e.author,text:e.content},e.id)})):(0,o.jsx)("p",{children:"We don`t have any review for this movie."})})}}}]);
//# sourceMappingURL=585.ca246b70.chunk.js.map