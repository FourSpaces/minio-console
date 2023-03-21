"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1581,3819],{1581:function(e,t,a){a.r(t);var o=a(29439),n=a(1413),i=a(72791),r=a(40986),c=a(75952),l=a(11135),s=a(25787),d=a(61889),u=a(45248),h=a(23814),p=a(81159),m=a(21435),v=a(56028),b=a(81207),x=a(84741),f=a(87995),Z=a(81551),g=a(80184);t.default=(0,s.Z)((function(e){return(0,l.Z)((0,n.Z)((0,n.Z)({},h.DF),h.ID))}))((function(e){var t=e.classes,a=e.open,n=e.enabled,l=e.cfg,s=e.selectedBucket,h=e.closeModalAndRefresh,j=(0,Z.TL)(),k=(0,i.useState)(!1),w=(0,o.Z)(k,2),C=w[0],y=w[1],S=(0,i.useState)(!1),z=(0,o.Z)(S,2),F=z[0],P=z[1],N=(0,i.useState)("1"),R=(0,o.Z)(N,2),L=R[0],B=R[1],I=(0,i.useState)("Ti"),M=(0,o.Z)(I,2),O=M[0],q=M[1],A=(0,i.useState)(!1),T=(0,o.Z)(A,2),E=T[0],_=T[1];(0,i.useEffect)((function(){if(n&&(P(!0),l)){var e=(0,u.Am)(l.quota,!0,!1,!0);B(e.total.toString()),q(e.unit),_(!0)}}),[n,l]),(0,i.useEffect)((function(){_(!F||/^\d*(?:\.\d{1,2})?$/.test(L))}),[F,L]);return(0,g.jsx)(v.Z,{modalOpen:a,onClose:function(){h()},title:"Enable Bucket Quota",titleIcon:(0,g.jsx)(c.Wqw,{}),children:(0,g.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),function(){if(!C&&E){var e={enabled:F,amount:parseInt((0,u.Pw)(L,O,!0)),quota_type:"hard"};b.Z.invoke("PUT","/api/v1/buckets/".concat(s,"/quota"),e).then((function(){y(!1),h()})).catch((function(e){y(!1),j((0,f.zb)(e))}))}}()},children:(0,g.jsxs)(d.ZP,{container:!0,children:[(0,g.jsxs)(d.ZP,{item:!0,xs:12,className:t.formScrollable,children:[(0,g.jsx)(d.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,g.jsx)(p.Z,{value:"bucket_quota",id:"bucket_quota",name:"bucket_quota",checked:F,onChange:function(e){P(e.target.checked)},label:"Enabled"})}),F&&(0,g.jsx)(i.Fragment,{children:(0,g.jsx)(d.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,g.jsx)(d.ZP,{container:!0,children:(0,g.jsx)(d.ZP,{item:!0,xs:12,children:(0,g.jsx)(m.Z,{id:"quota_size",name:"quota_size",onChange:function(e){B(e.target.value),e.target.validity.valid?_(!0):_(!1)},label:"Quota",value:L,required:!0,min:"1",overlayObject:(0,g.jsx)(x.Z,{id:"quota_unit",onUnitChange:function(e){q(e)},unitSelected:O,unitsList:(0,u.zQ)(["Ki"]),disabled:!1}),error:E?"":"Please enter a valid quota"})})})})})]}),(0,g.jsxs)(d.ZP,{item:!0,xs:12,className:t.modalButtonBar,children:[(0,g.jsx)(c.zxk,{id:"cancel",type:"button",variant:"regular",disabled:C,onClick:function(){h()},label:"Cancel"}),(0,g.jsx)(c.zxk,{id:"save",type:"submit",variant:"callAction",disabled:C||!E,label:"Save"})]}),C&&(0,g.jsx)(d.ZP,{item:!0,xs:12,children:(0,g.jsx)(r.Z,{})})]})})})}))},81159:function(e,t,a){var o=a(4942),n=a(1413),i=a(72791),r=a(11135),c=a(25787),l=a(9955),s=a(30829),d=a(20068),u=a(20890),h=a(61889),p=a(23814),m=a(75952),v=a(28182),b=a(80184),x=(0,c.Z)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},switchContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}))(l.Z);t.Z=(0,c.Z)((function(e){return(0,r.Z)((0,n.Z)((0,n.Z)({indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},p.OR),p.YI))}))((function(e){var t=e.label,a=void 0===t?"":t,r=e.onChange,c=e.value,l=e.id,p=e.name,f=e.checked,Z=void 0!==f&&f,g=e.disabled,j=void 0!==g&&g,k=e.switchOnly,w=void 0!==k&&k,C=e.tooltip,y=void 0===C?"":C,S=e.description,z=void 0===S?"":S,F=e.classes,P=e.indicatorLabels,N=e.extraInputProps,R=void 0===N?{}:N,L=(0,b.jsxs)(i.Fragment,{children:[!w&&(0,b.jsx)("span",{className:(0,v.Z)(F.indicatorLabel,(0,o.Z)({},F.indicatorLabelOn,!Z)),children:P&&P.length>1?P[1]:"OFF"}),(0,b.jsx)(x,{checked:Z,onChange:r,color:"primary",name:p,inputProps:(0,n.Z)({"aria-label":"primary checkbox"},R),disabled:j,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:c,id:l}),!w&&(0,b.jsx)("span",{className:(0,v.Z)(F.indicatorLabel,(0,o.Z)({},F.indicatorLabelOn,Z)),children:P?P[0]:"ON"})]});return w?L:(0,b.jsx)("div",{children:(0,b.jsxs)(h.ZP,{container:!0,alignItems:"center",children:[(0,b.jsx)(h.ZP,{item:!0,xs:12,sm:8,md:8,children:""!==a&&(0,b.jsxs)(s.Z,{htmlFor:l,className:F.inputLabel,children:[(0,b.jsx)("span",{children:a}),""!==y&&(0,b.jsx)("div",{className:F.tooltipContainer,children:(0,b.jsx)(d.Z,{title:y,placement:"top-start",children:(0,b.jsx)("div",{className:F.tooltip,children:(0,b.jsx)(m.byK,{})})})})]})}),(0,b.jsx)(h.ZP,{item:!0,xs:12,sm:""!==a?4:12,md:""!==a?4:12,textAlign:"right",justifyContent:"end",className:F.switchContainer,children:L}),""!==z&&(0,b.jsx)(h.ZP,{item:!0,xs:12,textAlign:"left",children:(0,b.jsx)(u.Z,{component:"p",className:F.fieldDescription,children:z})})]})})}))},21435:function(e,t,a){var o=a(29439),n=a(1413),i=a(72791),r=a(27391),c=a(61889),l=a(30829),s=a(20068),d=a(13400),u=a(20165),h=a(3579),p=a(11135),m=a(72455),v=a(25787),b=a(23814),x=a(75952),f=a(28182),Z=a(80184),g=(0,m.Z)((function(e){return(0,p.Z)((0,n.Z)({},b.gM))}));function j(e){var t=g();return(0,Z.jsx)(r.Z,(0,n.Z)({InputProps:{classes:t}},e))}t.Z=(0,v.Z)((function(e){return(0,p.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},b.YI),b.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var t=e.label,a=e.onChange,r=e.value,p=e.id,m=e.name,v=e.type,b=void 0===v?"text":v,g=e.autoComplete,k=void 0===g?"off":g,w=e.disabled,C=void 0!==w&&w,y=e.multiline,S=void 0!==y&&y,z=e.tooltip,F=void 0===z?"":z,P=e.index,N=void 0===P?0:P,R=e.error,L=void 0===R?"":R,B=e.required,I=void 0!==B&&B,M=e.placeholder,O=void 0===M?"":M,q=e.min,A=e.max,T=e.overlayId,E=e.overlayIcon,_=void 0===E?null:E,D=e.overlayObject,W=void 0===D?null:D,$=e.extraInputProps,K=void 0===$?{}:$,U=e.overlayAction,V=e.noLabelMinWidth,Q=void 0!==V&&V,X=e.pattern,H=void 0===X?"":X,Y=e.autoFocus,G=void 0!==Y&&Y,J=e.classes,ee=e.className,te=void 0===ee?"":ee,ae=e.onKeyPress,oe=e.onFocus,ne=e.onPaste,ie=(0,n.Z)({"data-index":N},K),re=(0,i.useState)(!1),ce=(0,o.Z)(re,2),le=ce[0],se=ce[1];"number"===b&&q&&(ie.min=q),"number"===b&&A&&(ie.max=A),""!==H&&(ie.pattern=H);var de=_,ue=b;return"password"===b&&null===_&&(de=le?(0,Z.jsx)(u.Z,{}):(0,Z.jsx)(h.Z,{}),ue=le?"text":"password"),(0,Z.jsx)(i.Fragment,{children:(0,Z.jsxs)(c.ZP,{container:!0,className:(0,f.Z)(""!==te?te:"",""!==L?J.errorInField:J.inputBoxContainer),children:[""!==t&&(0,Z.jsxs)(l.Z,{htmlFor:p,className:Q?J.noMinWidthLabel:J.inputLabel,children:[(0,Z.jsxs)("span",{children:[t,I?"*":""]}),""!==F&&(0,Z.jsx)("div",{className:J.tooltipContainer,children:(0,Z.jsx)(s.Z,{title:F,placement:"top-start",children:(0,Z.jsx)("div",{className:J.tooltip,children:(0,Z.jsx)(x.byK,{})})})})]}),(0,Z.jsxs)("div",{className:J.textBoxContainer,children:[(0,Z.jsx)(j,{id:p,name:m,fullWidth:!0,value:r,autoFocus:G,disabled:C,onChange:a,type:ue,multiline:S,autoComplete:k,inputProps:ie,error:""!==L,helperText:L,placeholder:O,className:J.inputRebase,onKeyPress:ae,onFocus:oe,onPaste:ne}),de&&(0,Z.jsx)("div",{className:"".concat(J.overlayAction," ").concat(""!==t?"withLabel":""),children:(0,Z.jsx)(d.Z,{onClick:U?function(){U()}:function(){return se(!le)},id:T,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:de})}),W&&(0,Z.jsx)("div",{className:"".concat(J.overlayAction," ").concat(""!==t?"withLabel":""),children:W})]})]})})}))},84741:function(e,t,a){var o=a(29439),n=a(72791),i=a(11135),r=a(25787),c=a(71715),l=a(77865),s=a(80184);t.Z=(0,r.Z)((function(e){return(0,i.Z)({buttonTrigger:{border:"#F0F2F2 1px solid",borderRadius:3,color:"#838383",backgroundColor:"#fff",fontSize:12}})}))((function(e){var t=e.classes,a=e.id,i=e.unitSelected,r=e.unitsList,d=e.disabled,u=void 0!==d&&d,h=e.onUnitChange,p=n.useState(null),m=(0,o.Z)(p,2),v=m[0],b=m[1],x=Boolean(v),f=function(e){b(null),""!==e&&h&&h(e)};return(0,s.jsxs)(n.Fragment,{children:[(0,s.jsx)("button",{id:"".concat(a,"-button"),"aria-controls":"".concat(a,"-menu"),"aria-haspopup":"true","aria-expanded":x?"true":void 0,onClick:function(e){b(e.currentTarget)},className:t.buttonTrigger,disabled:u,type:"button",children:i}),(0,s.jsx)(c.Z,{id:"".concat(a,"-menu"),"aria-labelledby":"".concat(a,"-button"),anchorEl:v,open:x,onClose:function(){f("")},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:r.map((function(e){return(0,s.jsx)(l.Z,{onClick:function(){return f(e.value)},children:e.label},"itemUnit-".concat(e.value,"-").concat(e.label))}))})]})}))},3579:function(e,t,a){var o=a(64836);t.Z=void 0;var n=o(a(45649)),i=a(80184),r=(0,n.default)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"RemoveRedEye");t.Z=r},20165:function(e,t,a){var o=a(64836);t.Z=void 0;var n=o(a(45649)),i=a(80184),r=(0,n.default)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.Z=r},9955:function(e,t,a){a.d(t,{Z:function(){return C}});var o=a(4942),n=a(63366),i=a(87462),r=a(72791),c=a(28182),l=a(94419),s=a(12065),d=a(14036),u=a(97278),h=a(31402),p=a(66934),m=a(75878),v=a(21217);function b(e){return(0,v.Z)("MuiSwitch",e)}var x=(0,m.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),f=a(80184),Z=["className","color","edge","size","sx"],g=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.edge&&t["edge".concat((0,d.Z)(a.edge))],t["size".concat((0,d.Z)(a.size))]]}})((function(e){var t,a=e.ownerState;return(0,i.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===a.edge&&{marginLeft:-8},"end"===a.edge&&{marginRight:-8},"small"===a.size&&(t={width:40,height:24,padding:7},(0,o.Z)(t,"& .".concat(x.thumb),{width:16,height:16}),(0,o.Z)(t,"& .".concat(x.switchBase),(0,o.Z)({padding:4},"&.".concat(x.checked),{transform:"translateX(16px)"})),t))})),j=(0,p.ZP)(u.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var a=e.ownerState;return[t.switchBase,(0,o.Z)({},"& .".concat(x.input),t.input),"default"!==a.color&&t["color".concat((0,d.Z)(a.color))]]}})((function(e){var t,a=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:a.vars?a.vars.palette.Switch.defaultColor:"".concat("light"===a.palette.mode?a.palette.common.white:a.palette.grey[300]),transition:a.transitions.create(["left","transform"],{duration:a.transitions.duration.shortest})},(0,o.Z)(t,"&.".concat(x.checked),{transform:"translateX(20px)"}),(0,o.Z)(t,"&.".concat(x.disabled),{color:a.vars?a.vars.palette.Switch.defaultDisabledColor:"".concat("light"===a.palette.mode?a.palette.grey[100]:a.palette.grey[600])}),(0,o.Z)(t,"&.".concat(x.checked," + .").concat(x.track),{opacity:.5}),(0,o.Z)(t,"&.".concat(x.disabled," + .").concat(x.track),{opacity:a.vars?a.vars.opacity.switchTrackDisabled:"".concat("light"===a.palette.mode?.12:.2)}),(0,o.Z)(t,"& .".concat(x.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,a=e.theme,n=e.ownerState;return(0,i.Z)({"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.activeChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(a.palette.action.active,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(t={},(0,o.Z)(t,"&.".concat(x.checked),(0,o.Z)({color:(a.vars||a).palette[n.color].main,"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[n.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(a.palette[n.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(x.disabled),{color:a.vars?a.vars.palette.Switch["".concat(n.color,"DisabledColor")]:"".concat("light"===a.palette.mode?(0,s.$n)(a.palette[n.color].main,.62):(0,s._j)(a.palette[n.color].main,.55))})),(0,o.Z)(t,"&.".concat(x.checked," + .").concat(x.track),{backgroundColor:(a.vars||a).palette[n.color].main}),t))})),k=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),w=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),C=r.forwardRef((function(e,t){var a=(0,h.Z)({props:e,name:"MuiSwitch"}),o=a.className,r=a.color,s=void 0===r?"primary":r,u=a.edge,p=void 0!==u&&u,m=a.size,v=void 0===m?"medium":m,x=a.sx,C=(0,n.Z)(a,Z),y=(0,i.Z)({},a,{color:s,edge:p,size:v}),S=function(e){var t=e.classes,a=e.edge,o=e.size,n=e.color,r=e.checked,c=e.disabled,s={root:["root",a&&"edge".concat((0,d.Z)(a)),"size".concat((0,d.Z)(o))],switchBase:["switchBase","color".concat((0,d.Z)(n)),r&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,l.Z)(s,b,t);return(0,i.Z)({},t,u)}(y),z=(0,f.jsx)(w,{className:S.thumb,ownerState:y});return(0,f.jsxs)(g,{className:(0,c.Z)(S.root,o),sx:x,ownerState:y,children:[(0,f.jsx)(j,(0,i.Z)({type:"checkbox",icon:z,checkedIcon:z,ref:t,ownerState:y},C,{classes:(0,i.Z)({},S,{root:S.switchBase})})),(0,f.jsx)(k,{className:S.track,ownerState:y})]})}))}}]);
//# sourceMappingURL=1581.e0b40512.chunk.js.map