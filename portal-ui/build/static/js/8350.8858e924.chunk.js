"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[8350],{16502:function(e,n,t){t(72791);var a=t(11135),l=t(25787),i=t(80184);n.Z=(0,l.Z)((function(e){return(0,a.Z)({headerContainer:{backgroundColor:"#e78794",borderRadius:3,marginBottom:20,padding:1,paddingBottom:15},labelHeadline:{color:"#000000",fontSize:14,marginLeft:20},labelText:{color:"#000000",fontSize:14,marginLeft:20,marginRight:40}})}))((function(e){var n=e.classes,t=e.label,a=e.title;return(0,i.jsxs)("div",{className:n.headerContainer,children:[(0,i.jsx)("h4",{className:n.labelHeadline,children:a}),(0,i.jsx)("div",{className:n.labelText,children:t})]})}))},78350:function(e,n,t){t.r(n);var a=t(29439),l=t(72791),i=t(51691),r=t(60364),o=t(21435),s=t(61889),c=t(9505),d=t(2148),u=t(51047),m=t(16502),f=t(37516),h=t(87995),p=t(80184);n.default=function(e){var n=e.deleteOpen,t=e.selectedTenant,x=e.closeDeleteModalAndRefresh,b=(0,r.I0)(),v=(0,l.useState)(""),Z=(0,a.Z)(v,2),g=Z[0],j=Z[1],C=(0,l.useState)(!1),T=(0,a.Z)(C,2),D=T[0],k=T[1],N=(0,c.Z)((function(){return x(!0)}),(function(e){return b((0,h.Ih)(e))})),I=(0,a.Z)(N,2),w=I[0],y=I[1];return(0,p.jsx)(d.Z,{title:"Delete Tenant",confirmText:"Delete",isOpen:n,titleIcon:(0,p.jsx)(u.NvT,{}),isLoading:w,onConfirm:function(){g===t.name?y("DELETE","/api/v1/namespaces/".concat(t.namespace,"/tenants/").concat(t.name),{delete_pvcs:D}):(0,h.Ih)({errorMessage:"Tenant name is incorrect",detailedError:""})},onClose:function(){return x(!1)},confirmButtonProps:{disabled:g!==t.name||w},confirmationContent:(0,p.jsxs)(i.Z,{children:[D&&(0,p.jsx)(s.ZP,{item:!0,xs:12,children:(0,p.jsx)(m.Z,{title:"WARNING",label:"Delete Volumes: Data will be permanently deleted. Please proceed with caution."})}),"To continue please type ",(0,p.jsx)("b",{children:t.name})," in the box.",(0,p.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,p.jsx)(o.Z,{id:"retype-tenant",name:"retype-tenant",onChange:function(e){j(e.target.value)},label:"",value:g}),(0,p.jsx)("br",{}),(0,p.jsx)(f.Z,{checked:D,id:"delete-volumes",label:"Delete Volumes",name:"delete-volumes",onChange:function(){k(!D)},value:D})]})]})})}}}]);
//# sourceMappingURL=8350.8858e924.chunk.js.map