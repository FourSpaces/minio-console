"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[977],{10977:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var i=n(72791),s=n(16444),r=n(26181),a=n.n(r),o=n(57689),l=n(29945),c=n(45248),d=n(44690),u=n(78687),x=n(87995),h=n(84741),m=n(27454),j=n(64561),b=n(92717),g=n(80184);const p=e=>{let{hasErrors:t}=e;const n=(0,d.TL)(),i=(0,u.v9)((e=>e.addBucket.name));return(0,g.jsx)(l.Wzg,{id:"bucket-name",name:"bucket-name",error:t?"Invalid bucket name":"",onFocus:()=>{n((0,j.hU)(!0))},onChange:e=>{n((0,j.qC)(e.target.value))},label:"Bucket Name",value:i,required:!0})};var f=n(56087),k=n(38442);const v=e=>{let{ruleText:t}=e;return(0,g.jsx)(i.Fragment,{children:(0,g.jsxs)(l.rjZ,{container:!0,style:{display:"flex",justifyContent:"flex-start"},children:[(0,g.jsx)(l.rjZ,{item:!0,xs:1,children:(0,g.jsx)(l.EjK,{width:"16px",height:"16px",style:{color:"#18BF42"}})}),(0,g.jsx)(l.rjZ,{item:!0,xs:9,sx:{color:"#8f949c",display:"flex",justifyContent:"flex-start"},children:t})]})})},T=e=>{let{ruleText:t}=e;return(0,g.jsx)(i.Fragment,{children:(0,g.jsxs)(l.rjZ,{container:!0,sx:{color:"#C83B51",display:"flex",justifyContent:"flex-start"},children:[(0,g.jsx)(l.rjZ,{item:!0,xs:1,sx:{paddingRight:1},children:(0,g.jsx)(l.NvT,{width:"16px",height:"16px"})}),(0,g.jsx)(l.rjZ,{item:!0,xs:9,sx:{color:"#C83B51",display:"flex",justifyContent:"flex-start",paddingLeft:1},children:t})]})})},C=e=>{let{ruleText:t}=e;return(0,g.jsx)(i.Fragment,{children:(0,g.jsxs)(l.rjZ,{container:!0,sx:{display:"flex",justifyContent:"flex-start"},children:[(0,g.jsx)(l.rjZ,{item:!0,xs:1,children:(0,g.jsx)(l.J$M,{width:"12px",height:"12px",style:{color:"#8f949c"}})}),(0,g.jsx)(l.rjZ,{item:!0,xs:9,sx:{color:"#8f949c",display:"flex",justifyContent:"flex-start"},style:{},children:t})]})})},y=e=>{let{errorList:t}=e;const n="Bucket names must be between 3 (min) and 63 (max) characters long.",s="Bucket names can consist only of lowercase letters, numbers, dots (.), and hyphens (-).",r="Bucket names must not contain two adjacent periods, or a period adjacent to a hyphen.",a="Bucket names must not be formatted as an IP address (for example, 192.168.5.4).",o="Bucket names must not start with the prefix xn--.",c="Bucket names must not end with the suffix -s3alias. This suffix is reserved for access point alias names.",d="Bucket names must be unique within a partition.",x=(0,u.v9)((e=>e.addBucket.name)),[h,m]=(0,i.useState)(!1),j=(0,u.v9)((e=>e.addBucket.loading)),[b,p,f,k,y,B,F]=t;return(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)(l.cvr,{id:"toggle-naming-rules",open:h,label:"".concat(h?"Hide":"View"," Bucket Naming Rules"),onClick:()=>{m(!h)}}),h&&(0,g.jsxs)(l.rjZ,{container:!0,sx:{fontSize:14,paddingTop:12},children:[(0,g.jsxs)(l.rjZ,{item:!0,xs:6,children:[0===x.length?(0,g.jsx)(C,{ruleText:n}):b?(0,g.jsx)(v,{ruleText:n}):(0,g.jsx)(T,{ruleText:n}),0===x.length?(0,g.jsx)(C,{ruleText:s}):p?(0,g.jsx)(v,{ruleText:s}):(0,g.jsx)(T,{ruleText:s}),0===x.length?(0,g.jsx)(C,{ruleText:r}):f?(0,g.jsx)(v,{ruleText:r}):(0,g.jsx)(T,{ruleText:r}),0===x.length?(0,g.jsx)(C,{ruleText:a}):k?(0,g.jsx)(v,{ruleText:a}):(0,g.jsx)(T,{ruleText:a})]}),(0,g.jsxs)(l.rjZ,{item:!0,xs:6,children:[0===x.length?(0,g.jsx)(C,{ruleText:o}):y?(0,g.jsx)(v,{ruleText:o}):(0,g.jsx)(T,{ruleText:o}),0===x.length?(0,g.jsx)(C,{ruleText:c}):B?(0,g.jsx)(v,{ruleText:c}):(0,g.jsx)(T,{ruleText:c}),0===x.length?(0,g.jsx)(C,{ruleText:d}):F?(0,g.jsx)(v,{ruleText:d}):(0,g.jsx)(T,{ruleText:d})]})]}),j&&(0,g.jsx)(l.rjZ,{item:!0,xs:12,children:(0,g.jsx)(l.kod,{})})]})};var B=n(79844),F=n(31776),_=n(82342),E=n(99670),S=n(59447);const w=s.ZP.div((e=>{let{theme:t}=e;return{color:a()(t,"signalColors.danger","#C51B3F"),border:"1px solid ".concat(a()(t,"signalColors.danger","#C51B3F")),padding:8,borderRadius:3}})),I=()=>{const e=(0,d.TL)(),t=(0,o.s0)(),n=new RegExp("^[a-z0-9][a-z0-9\\.\\-]{1,61}[a-z0-9]$"),s=new RegExp("^(\\d+\\.){3}\\d+$"),r=(0,u.v9)((e=>e.addBucket.name)),a=(0,u.v9)((e=>e.addBucket.isDirty)),[v,T]=(0,i.useState)([]),C=v.filter((e=>!e)).length>0,[I,O]=(0,i.useState)([]),N=(0,u.v9)((e=>e.addBucket.versioningEnabled)),P=(0,u.v9)((e=>e.addBucket.excludeFolders)),Z=(0,u.v9)((e=>e.addBucket.excludedPrefixes)),U=(0,u.v9)((e=>e.addBucket.lockingEnabled)),q=(0,u.v9)((e=>e.addBucket.quotaEnabled)),R=(0,u.v9)((e=>e.addBucket.quotaSize)),L=(0,u.v9)((e=>e.addBucket.quotaUnit)),z=(0,u.v9)((e=>e.addBucket.retentionEnabled)),V=(0,u.v9)((e=>e.addBucket.retentionMode)),A=(0,u.v9)((e=>e.addBucket.retentionUnit)),K=(0,u.v9)((e=>e.addBucket.retentionValidity)),M=(0,u.v9)((e=>e.addBucket.loading)),D=(0,u.v9)((e=>e.addBucket.invalidFields)),G=(0,u.v9)((e=>e.addBucket.lockingFieldDisabled)),W=(0,u.v9)(x.N5),Y=(0,u.v9)(x.gw),J=(0,u.v9)((e=>e.addBucket.navigateTo)),Q=(0,k.F)("*",[f.Ft.S3_PUT_BUCKET_VERSIONING,f.Ft.S3_PUT_BUCKET_OBJECT_LOCK_CONFIGURATION,f.Ft.S3_PUT_ACTIONS],!0),$=(0,k.F)("*",[f.Ft.S3_PUT_BUCKET_VERSIONING,f.Ft.S3_PUT_ACTIONS]);(0,i.useEffect)((()=>{const e=[!(a&&(r.length<3||r.length>63)),n.test(r),!(r.includes(".-")||r.includes("-.")||r.includes("..")),!s.test(r),!r.startsWith("xn--"),!r.endsWith("-s3alias"),!I.includes(r)];T(e)}),[r,a]),(0,i.useEffect)((()=>{e((0,j.qC)("")),e((0,j.hU)(!1));F.h.buckets.listBuckets().then((t=>{if(t.data){var n=[];null!=t.data.buckets&&t.data.buckets.length>0&&t.data.buckets.forEach((e=>{n.push(e.name)})),O(n)}else t.error&&e((0,x.Ih)((0,_.g)(t.error)))})).catch((t=>{e((0,x.Ih)((0,_.g)(t)))}))}),[e]);return(0,i.useEffect)((()=>{if(""!==J){const n="".concat(J);e((0,j.Fx)()),t(n)}}),[J,t,e]),(0,i.useEffect)((()=>{e((0,x.Sc)("add_bucket"))}),[]),(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)(B.Z,{label:(0,g.jsx)(l.hbI,{label:"Buckets",onClick:()=>t("/buckets")}),actions:(0,g.jsx)(E.Z,{})}),(0,g.jsx)(l.Xgh,{children:(0,g.jsx)(l.ltY,{title:"Create Bucket",icon:(0,g.jsx)(l.wNb,{}),helpBox:(0,g.jsx)(l.KfX,{iconComponent:(0,g.jsx)(l.wNb,{}),title:"Buckets",help:(0,g.jsxs)(i.Fragment,{children:["MinIO uses buckets to organize objects. A bucket is similar to a folder or directory in a filesystem, where each bucket can hold an arbitrary number of objects.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)("b",{children:"Versioning"})," allows to keep multiple versions of the same object under the same key.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)("b",{children:"Object Locking"})," prevents objects from being deleted. Required to support retention and legal hold. Can only be enabled at bucket creation.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)("b",{children:"Quota"})," limits the amount of data in the bucket.",Q&&(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)("b",{children:"Retention"})," imposes rules to prevent object deletion for a period of time. Versioning must be enabled in order to set bucket retention policies."]}),(0,g.jsx)("br",{}),(0,g.jsx)("br",{})]})}),children:(0,g.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:t=>{t.preventDefault(),e((0,b.I)())},children:[(0,g.jsxs)(l.xuv,{children:[(0,g.jsx)(p,{hasErrors:C}),(0,g.jsx)(l.xuv,{sx:{margin:"10px 0"},children:(0,g.jsx)(y,{errorList:v})}),(0,g.jsx)(l.NZf,{separator:!0,children:"Features"}),(0,g.jsxs)(l.xuv,{sx:{marginTop:10},children:[!W&&(0,g.jsxs)(i.Fragment,{children:[(0,g.jsxs)(w,{children:["These features are unavailable in a single-disk setup.",(0,g.jsx)("br",{}),"Please deploy a server in"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html?ref=con",target:"_blank",rel:"noopener",children:"Distributed Mode"})," ","to use these features."]}),(0,g.jsx)("br",{}),(0,g.jsx)("br",{})]}),Y.enabled&&(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)("br",{}),(0,g.jsxs)(l.xuv,{withBorders:!0,sx:{display:"flex",alignItems:"center",padding:"10px","& > .min-icon ":{width:20,height:20,marginRight:10}},children:[(0,g.jsx)(l.szr,{})," Versioning setting cannot be changed as cluster replication is enabled for this site."]}),(0,g.jsx)("br",{})]}),(0,g.jsx)(l.rsf,{value:"versioned",id:"versioned",name:"versioned",checked:N,onChange:t=>{e((0,j.E2)(t.target.checked))},label:"Versioning",disabled:!W||U||Y.enabled||!$,tooltip:$?U&&N?"You must disable Locking before Versioning can be disabled":"":(0,f.MK)([f.Ft.S3_PUT_BUCKET_VERSIONING,f.Ft.S3_PUT_ACTIONS],"Versioning"),helpTip:(0,g.jsxs)(i.Fragment,{children:["MinIO supports keeping multiple"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/kubernetes/upstream/administration/object-management/object-versioning.html#minio-bucket-versioning",target:"blank",children:"\u201cversions\u201d"})," ","of an object in a single bucket.",(0,g.jsx)("br",{}),"Versioning is required to enable"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/macos/administration/object-management.html#object-retention",target:"blank",children:"Object Locking"})," ","and"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/macos/administration/object-management/object-retention.html#object-retention-modes",target:"blank",children:"Retention"}),"."]}),helpTipPlacement:"right"}),N&&W&&!U&&(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)(l.rsf,{id:"excludeFolders",label:"Exclude Folders",checked:P,onChange:t=>{e((0,j.Rn)(t.target.checked))},indicatorLabels:["Enabled","Disabled"],helpTip:(0,g.jsxs)(i.Fragment,{children:["You can choose to"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/windows/administration/object-management/object-versioning.html#exclude-folders-from-versioning",children:"exclude folders and prefixes"})," ","from versioning if Object Locking is not enabled.",(0,g.jsx)("br",{}),"MinIO requires versioning to support replication. Objects in excluded prefixes do not replicate to any peer site or remote site."]}),helpTipPlacement:"right"}),(0,g.jsx)(S.Z,{elements:Z,label:"Excluded Prefixes",name:"excludedPrefixes",onChange:t=>{let n="";n=Array.isArray(t)?t.join(","):t,e((0,j.Nf)(n))},withBorder:!0})]}),(0,g.jsx)(l.rsf,{value:"locking",id:"locking",name:"locking",disabled:G||!W||!Q,checked:U,onChange:t=>{e((0,j.j9)(t.target.checked)),t.target.checked&&!Y.enabled&&e((0,j.E2)(!0))},label:"Object Locking",tooltip:Q?"".concat(N?"Exclude Folders & Exclude Prefixes options will not be available if this option is enabled.":""):(0,f.MK)([f.Ft.S3_PUT_BUCKET_VERSIONING,f.Ft.S3_PUT_BUCKET_OBJECT_LOCK_CONFIGURATION,f.Ft.S3_PUT_ACTIONS],"Locking"),helpTip:(0,g.jsxs)(i.Fragment,{children:["You can only enable"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/macos/administration/object-management.html#object-retention",target:"blank",children:"Object Locking"})," ","when first creating a bucket."]}),helpTipPlacement:"right"}),(0,g.jsx)(l.rsf,{value:"bucket_quota",id:"bucket_quota",name:"bucket_quota",checked:q,onChange:t=>{e((0,j.WC)(t.target.checked))},label:"Quota",disabled:!W,helpTip:(0,g.jsxs)(i.Fragment,{children:["Setting a"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/linux/reference/minio-mc/mc-quota-set.html",target:"blank",children:"quota"})," ","assigns a hard limit to a bucket beyond which MinIO does not allow writes."]}),helpTipPlacement:"right"}),q&&W&&(0,g.jsx)(i.Fragment,{children:(0,g.jsx)(l.Wzg,{type:"string",id:"quota_size",name:"quota_size",onChange:t=>{e((0,j.Rj)(t.target.value))},label:"Capacity",value:R,required:!0,min:"1",overlayObject:(0,g.jsx)(h.Z,{id:"quota_unit",onUnitChange:t=>{e((0,j.ND)(t))},unitSelected:L,unitsList:(0,c.zQ)(["Ki"]),disabled:!1}),error:D.includes("quotaSize")?"Please enter a valid quota":""})}),N&&W&&Q&&(0,g.jsx)(l.rsf,{value:"bucket_retention",id:"bucket_retention",name:"bucket_retention",checked:z,onChange:t=>{e((0,j.bc)(t.target.checked))},label:"Retention",helpTip:(0,g.jsxs)(i.Fragment,{children:["MinIO supports setting both"," ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/macos/administration/object-management/object-retention.html#configure-bucket-default-object-retention",target:"blank",children:"bucket-default"})," ","and per-object retention rules.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{})," For per-object retention settings, defer to the documentation for the PUT operation used by your preferred SDK."]}),helpTipPlacement:"right"}),z&&W&&(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)(l.Eep,{currentValue:V,id:"retention_mode",name:"retention_mode",label:"Mode",onChange:t=>{e((0,j.VK)(t.target.value))},selectorOptions:[{value:"compliance",label:"Compliance"},{value:"governance",label:"Governance"}],helpTip:(0,g.jsxs)(i.Fragment,{children:[" ",(0,g.jsx)("a",{href:"https://min.io/docs/minio/macos/administration/object-management/object-retention.html#minio-object-locking-compliance",target:"blank",children:"Compliance"})," ","lock protects Objects from write operations by all users, including the MinIO root user.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)("a",{href:"https://min.io/docs/minio/macos/administration/object-management/object-retention.html#minio-object-locking-governance",target:"blank",children:"Governance"})," ","lock protects Objects from write operations by non-privileged users."]}),helpTipPlacement:"right"}),(0,g.jsx)(l.Wzg,{type:"number",id:"retention_validity",name:"retention_validity",onChange:t=>{e((0,j.Mn)(t.target.valueAsNumber))},label:"Validity",value:String(K),required:!0,overlayObject:(0,g.jsx)(h.Z,{id:"retention_unit",onUnitChange:t=>{e((0,j.hx)(t))},unitSelected:A,unitsList:[{value:"days",label:"Days"},{value:"years",label:"Years"}],disabled:!1})})]})]})]}),(0,g.jsxs)(l.rjZ,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:10,marginTop:15},children:[(0,g.jsx)(l.zxk,{id:"clear",type:"button",variant:"regular",className:"clearButton",onClick:()=>{e((0,j.Fx)())},label:"Clear"}),(0,g.jsx)(m.Z,{tooltip:D.length>0||!a||C?"You must apply a valid name to the bucket":"",children:(0,g.jsx)(l.zxk,{id:"create-bucket",type:"submit",variant:"callAction",color:"primary",disabled:M||D.length>0||!a||C,label:"Create Bucket"})})]}),M&&(0,g.jsx)(l.rjZ,{item:!0,xs:12,children:(0,g.jsx)(l.kod,{})})]})})})]})}},59447:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(72791),s=n(26181),r=n.n(s),a=n(29945),o=n(80184);const l=e=>{let{elements:t,name:n,label:s,tooltip:l="",commonPlaceholder:c="",onChange:d,withBorder:u=!1}=e;const[x,h]=(0,i.useState)([""]),m=(0,i.createRef)();(0,i.useEffect)((()=>{if(1===x.length&&""===x[0]&&t&&""!==t){const e=t.split(",");e.push(""),h(e)}}),[t,x]),(0,i.useEffect)((()=>{if(x.length>1){const e=m.current;e&&e.scrollIntoView(!1)}}),[x,m]);const j=(0,i.useCallback)((e=>{d(e)}),[d]),b=(0,i.useRef)(!0);(0,i.useEffect)((()=>{if(b.current)return void(b.current=!1);const e=x.filter((e=>""!==e.trim())).join(",");j(e)}),[x]);const g=e=>{e.persist();let t=[...x];const n=r()(e.target,"dataset.index","0");t[parseInt(n)]=e.target.value,h(t)},p=x.map(((e,t)=>(0,o.jsx)(a.Wzg,{id:"".concat(n,"-").concat(t.toString()),label:"",name:"".concat(n,"-").concat(t.toString()),value:x[t],onChange:g,index:t,placeholder:c,overlayIcon:t===x.length-1?(0,o.jsx)(a.dtP,{}):null,overlayAction:()=>{(e=>{if(""!==e[e.length-1].trim()){const t=[...e];t.push(""),h(t)}})(x)}},"csv-multi-".concat(n,"-").concat(t.toString()))));return(0,o.jsx)(i.Fragment,{children:(0,o.jsxs)(a.xuv,{sx:{display:"flex"},className:"inputItem",children:[(0,o.jsxs)(a.AZs,{sx:{alignItems:"flex-start"},children:[(0,o.jsx)("span",{children:s}),""!==l&&(0,o.jsx)(a.xuv,{sx:{marginLeft:5,display:"flex",alignItems:"center","& .min-icon":{width:13}},children:(0,o.jsx)(a.ua7,{tooltip:l,placement:"top",children:(0,o.jsx)(a.xuv,{className:l,children:(0,o.jsx)(a.byK,{})})})})]}),(0,o.jsxs)(a.xuv,{withBorders:u,sx:{width:"100%",overflowY:"auto",height:150,position:"relative"},children:[p,(0,o.jsx)("div",{ref:m})]})]})})}},84741:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(72791),s=n(29945),r=n(16444),a=n(26181),o=n.n(a),l=n(80184);const c=r.ZP.button((e=>{let{theme:t}=e;return{border:"1px solid ".concat(o()(t,"borderColor","#E2E2E2")),borderRadius:3,color:o()(t,"secondaryText","#5B5C5C"),backgroundColor:o()(t,"boxBackground","#FBFAFA"),fontSize:12}})),d=e=>{let{id:t,unitSelected:n,unitsList:r,disabled:a=!1,onUnitChange:o}=e;const[d,u]=i.useState(null),x=Boolean(d),h=e=>{u(null),""!==e&&o&&o(e)};return(0,l.jsxs)(i.Fragment,{children:[(0,l.jsx)(c,{id:"".concat(t,"-button"),"aria-controls":"".concat(t,"-menu"),"aria-haspopup":"true","aria-expanded":x?"true":void 0,onClick:e=>{u(e.currentTarget)},disabled:a,type:"button",children:n}),(0,l.jsx)(s.udT,{id:"upload-main-menu",options:r,selectedOption:"",onSelect:e=>h(e),hideTriggerAction:()=>{h("")},open:x,anchorEl:d,anchorOrigin:"end"})]})}}}]);
//# sourceMappingURL=977.a8d976d8.chunk.js.map