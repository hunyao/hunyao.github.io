(self.webpackChunkJun_Kumokawa=self.webpackChunkJun_Kumokawa||[]).push([[195],{90141:function(e,t,n){"use strict";n.r(t);var o=n(29439),a=n(72791),u=n(64554),s=n(17179),i=n(94432),r=n(22513),c=n(16871),f=n(59732),m=n(68175),h=n(84833),l=n(80184);t.default=function(){var e=a.useState(""),t=(0,o.Z)(e,2),n=t[0],b=t[1],p=a.useState(!1),Z=(0,o.Z)(p,2),d=Z[0],w=Z[1],x=a.useState(!1),g=(0,o.Z)(x,2),k=g[0],v=g[1],S=a.useState(""),j=(0,o.Z)(S,2),C=j[0],y=j[1],_=a.useState(""),E=(0,o.Z)(_,2),J=E[0],K=E[1],B=(0,c.UO)().sha,F=a.useContext(h.repositoryContext).getPathFromSha;return a.useEffect((function(){y(F(B))}),[F,B]),a.useEffect((function(){var e=!0;return f.M.request("GET /repos/{owner}/{repo}/git/blobs/{file_sha}",{owner:"hunyao",repo:"Jun-Kumokawa",file_sha:B}).then((function(t){var n=t.data;if(e){b(atob(n.content));var o=new Blob([atob(n.content)]);return(0,m.fromBlob)(o)}})).then((function(t){console.log(t),e&&(void 0===t?(w(!1),v(!1),K("text/plain")):(w(!0),v(/^image\//.test(t.mime)),K(t.mime)))})),function(){e=!1}}),[B]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(u.Z,{children:[(0,l.jsx)(s.Z,{mode:"navigation",sha:B}),(0,l.jsx)(i.Z,{type:"blob",sha:B}),(0,l.jsx)(r.Z,{filename:C,content:n,binary:d,image:k,mime:J,mode:"sourceCode"})]})})}},52361:function(){},94616:function(){}}]);
//# sourceMappingURL=195.8f805c94.chunk.js.map