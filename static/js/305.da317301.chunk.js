"use strict";(self.webpackChunkJun_Kumokawa=self.webpackChunkJun_Kumokawa||[]).push([[305],{84833:function(e,r,n){n.r(r),n.d(r,{Consumer:function(){return h},Provider:function(){return p},RepositoryConsumer:function(){return h},RepositoryProvider:function(){return m},repositoryContext:function(){return f}});var t=n(74165),a=n(93433),o=n(15861),u=n(29439),c=n(72791),s=n(59732),i=n(80184),f=c.createContext({}),p=f.Provider,h=f.Consumer,l={branches:[],tags:[],commits:[]};function m(e){var r=e.children,n=c.useState(l),f=(0,u.Z)(n,2),h=f[0],m=f[1],d=c.useState({name:"",commit:{sha:"",url:""}}),w=(0,u.Z)(d,2),b=w[0],g=w[1],v=c.useState([]),k=(0,u.Z)(v,2),y=k[0],Z=k[1];function x(e){return C.apply(this,arguments)}function C(){return(C=(0,o.Z)((0,t.Z)().mark((function e(r){var n,a,o,u;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=1,a=[];case 2:return e.next=5,s.M.request("".concat(r,"?per_page={per_page}&page={page}"),{owner:"hunyao",repo:"Jun-Kumokawa",per_page:100,page:n});case 5:if(o=e.sent,0!==(u=o.data).length&&5!==n){e.next=11;break}return e.abrupt("break",15);case 11:a=a.concat(u),n+=1;case 13:e.next=2;break;case 15:return e.abrupt("return",a);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.useEffect((function(){Promise.all([s.M.request("GET /repos/{owner}/{repo}/branches/master",{owner:"hunyao",repo:"Jun-Kumokawa"}),x("GET /repos/{owner}/{repo}/branches"),x("GET /repos/{owner}/{repo}/tags"),x("GET /repos/{owner}/{repo}/commits")]).then((function(e){var r=(0,u.Z)(e,4),n=r[0],t=r[1],o=r[2],c=r[3];m({branches:Array.from([].concat((0,a.Z)(t),[n.data])),tags:o,commits:c}),g(n.data)}))}),[]),c.useEffect((function(){""!==b.commit.sha&&s.M.request("GET /repos/{owner}/{repo}/git/trees/{tree_sha}?recursive=1",{owner:"hunyao",repo:"Jun-Kumokawa",tree_sha:b.commit.sha}).then((function(e){var r=e.data;Z(r)}))}),[b]);var E=c.useCallback((function(e){if(0!==y.length&&""!==e)return e===b.commit.sha?"":y.tree.find((function(r){return r.sha===e})).path}),[y]),P=c.useCallback((function(e){if(0!==y.length)return y.tree.find((function(r){return r.path===e})).sha}),[y]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(p,{value:{state:h,dispatch:m,selectedBranch:b,changeBranch:g,allTrees:y,getPathFromSha:E,getShafromPath:P},children:r})})}r.default=m},59732:function(e,r,n){n.d(r,{M:function(){return t}});var t=new(n(56303).v)},97326:function(e,r,n){function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(r,{Z:function(){return t}})},45987:function(e,r,n){n.d(r,{Z:function(){return a}});var t=n(63366);function a(e,r){if(null==e)return{};var n,a,o=(0,t.Z)(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)n=u[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}}}]);
//# sourceMappingURL=305.da317301.chunk.js.map