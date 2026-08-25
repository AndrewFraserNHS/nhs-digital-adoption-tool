import{r as m,j as e,a as Sn}from"./vendor-react-nTLHQtbJ.js";import{D as Ya,P as sa,g as Ja,a as Ht,T as Xa,O as aa,C as rt,b as lt,i as Qa}from"./cst-CVxF8Tjg.js";import{n as Oe,a as Rn,b as Wt,F as Za}from"./ForceFieldAnalysisApp-BwKqMhY2.js";import{g as Ss,p as ei,G as ni,d as ti}from"./vendor-misc-D88HtX07.js";import{A as ut,a as On,n as rn,i as qt,d as ys,U as si,C as ai}from"./CompareApp-DAgT2BJS.js";import{l as En,s as en,d as qn,e as ii}from"./utils-Dnh79fEb.js";import{A as bt,g as $t}from"./components-aRtg6FgR.js";import{C as nn}from"./vendor-chart-DnMUodEx.js";const ia=["highlight-builder","force-field-analysis","compare"],ct={"highlight-builder":{label:"Highlight Builder",matchText:"Highlight Builder"},"force-field-analysis":{label:"Force Field Analysis",matchText:"Force Field Analysis"},compare:{label:"Assess & Compare",matchText:"Assess & Compare"}};function Tt(n,t){if(!n.linkedActions.length)return"Not Started";const s=n.linkedActions.map(a=>{const i=(t[a.lens]||[]).find(r=>r.id===a.actionId);return(i==null?void 0:i.status)||"Planned"});return s.some(a=>a==="Blocked")?"Blocked":s.every(a=>a==="Completed")?"Completed":s.some(a=>a!=="Planned")?"In Progress":"Not Started"}function vs(){return`cst-${Date.now()}-${Math.random().toString(36).slice(2,10)}`}function Kn(n){return{trustName:(n==null?void 0:n.trustName)||"",region:(n==null?void 0:n.region)||"",trustType:(n==null?void 0:n.trustType)||"",projectName:(n==null?void 0:n.projectName)||"",leadName:(n==null?void 0:n.leadName)||"",cst:{...Ya,...(n==null?void 0:n.cst)||{}},linkOverrides:n==null?void 0:n.linkOverrides,componentFurtherReading:n==null?void 0:n.componentFurtherReading,coreLinks:n==null?void 0:n.coreLinks,customComponentLinks:n==null?void 0:n.customComponentLinks,toolLinks:(n==null?void 0:n.toolLinks)??ia.map(t=>({key:`tool-default-${t}`,tool:t,matchText:ct[t].matchText})),externalLinksInitiated:n==null?void 0:n.externalLinksInitiated,teamMembers:(n==null?void 0:n.teamMembers)||[],cstId:n==null?void 0:n.cstId}}function oi(n){return n?Object.keys(n).reduce((t,s)=>{const a=n[s]||{};return t[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},t},{}):{}}function mt(n){return{view:(n==null?void 0:n.view)||"dashboard",orgProfile:Kn(n==null?void 0:n.orgProfile),currentDraft:(n==null?void 0:n.currentDraft)||{},objectives:n!=null&&n.objectives?Kt(n.objectives):{},suppressedAutoActions:ri(n==null?void 0:n.suppressedAutoActions),auditLog:li(n==null?void 0:n.auditLog),history:(n==null?void 0:n.history)||[],phaseOverrides:(n==null?void 0:n.phaseOverrides)||{},pathwayChecks:oi(n==null?void 0:n.pathwayChecks)}}function ri(n){return n?Object.keys(n).reduce((t,s)=>(t[s]=[...n[s]||[]],t),{}):{}}function li(n){return n?n.map(t=>({...t})):[]}function Nt(){return{score:0,justification:"",evidence:"",actions:[]}}function oa(n){return{score:n.score,justification:n.justification,evidence:n.evidence,actions:n.actions.map(t=>({...t,linkedTargets:(t.linkedTargets||[]).map(s=>({componentId:s.componentId,lens:s.lens}))}))}}function zt(n){return Object.keys(n).reduce((t,s)=>(t[s]=Object.keys(n[s]).reduce((a,i)=>(a[i]=oa(n[s][i]),a),{}),t),{})}function ci(n){return{...n,linkedActions:n.linkedActions.map(t=>({...t}))}}function Kt(n){return Object.keys(n).reduce((t,s)=>(t[s]=(n[s]||[]).map(ci),t),{})}function di(n){if(!n)return!1;const t=new Date(n);return!isNaN(t.getTime())}function Ct(n){return!n||!di(n)?null:new Date(n)}function ra(n){const t=[],s=n.cst;if(!s.goLiveDate||!s.goLiveDate.trim())return t.push({field:"cst.goLiveDate",message:"Go live date is required."}),{isValid:!1,errors:t};const a=Ct(s.goLiveDate);if(!a)return t.push({field:"cst.goLiveDate",message:"Go live date must be a valid date."}),{isValid:!1,errors:t};const i=Ct(s.fullAdoptionDate);s.fullAdoptionDate&&!i&&t.push({field:"cst.fullAdoptionDate",message:"Full adoption date must be a valid date when provided."});const r=Ct(s.benefitRealizationDate);return s.benefitRealizationDate&&!r&&t.push({field:"cst.benefitRealizationDate",message:"Benefit realization date must be a valid date when provided."}),i&&i<a&&t.push({field:"cst.fullAdoptionDate",message:"Full adoption date cannot be earlier than go live date."}),r&&r<(i||a)&&t.push({field:"cst.benefitRealizationDate",message:"Benefit realization date cannot be earlier than full adoption date (or go live when full adoption is empty)."}),{isValid:t.length===0,errors:t}}function la(n){const t=m.useMemo(()=>n.errors.reduce((s,a)=>(s[a.field]||(s[a.field]=[]),s[a.field].push(a.message),s),{}),[n.errors]);return s=>{var a;return(a=t[s])==null?void 0:a[0]}}function gt(n){const t=[];(!n.trustName||n.trustName.trim()==="")&&t.push({field:"trustName",message:"Trust name is required"}),n.trustName&&n.trustName.length>255&&t.push({field:"trustName",message:"Trust name cannot exceed 255 characters"}),n.region&&n.region.length>100&&t.push({field:"region",message:"Region cannot exceed 100 characters"});const s=ra(n);return t.push(...s.errors),{isValid:t.length===0,errors:t}}function ca({pathway:n,darkMode:t=!1}){return n==="pathway-1"?null:e.jsxs("div",{className:`mt-3 rounded-md border p-3 text-xs ${t?"border-amber-500/40 bg-amber-500/10 text-amber-100":"border-amber-300 bg-amber-50 text-amber-900"}`,children:[e.jsx("p",{className:"font-semibold",children:"Objectives and actions are currently Pathway 1 only"}),e.jsx("p",{className:"mt-1",children:"Every outcome and action in this tool right now is written for Pathway 1 (starting from scratch). Pathway 2 and Pathway 3 will need their own objectives and actions - those haven't been written yet, so components on this pathway show no outcomes or actions until pathway-specific content is added."})]})}const Nn="w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2";function ui(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function mi({open:n,orgProfile:t,onProfileUpdate:s,onClose:a,onComplete:i,currentUserId:r,onCurrentUserChange:o,darkMode:u=!1}){const[c,f]=m.useState(0),[l,x]=m.useState(t);m.useEffect(()=>{n&&(f(0),x(t))},[n]);const b=gt(l),S=la(b),d=m.useCallback(T=>{x(T),s(T)},[s]),A=m.useCallback((T,W)=>{d({...l,cst:{...l.cst,[T]:W}})},[l,d]),_=m.useCallback(()=>{const T={id:ui(),name:"",role:""};d({...l,teamMembers:[...l.teamMembers||[],T]})},[l,d]),h=m.useCallback((T,W,ce)=>{d({...l,teamMembers:(l.teamMembers||[]).map(ge=>ge.id===T?{...ge,[W]:ce}:ge)})},[l,d]),M=m.useCallback(T=>{d({...l,teamMembers:(l.teamMembers||[]).filter(W=>W.id!==T)}),r===T&&o("")},[l,d,r,o]),U=m.useRef(null),te=m.useCallback(()=>{var T;(T=U.current)==null||T.click()},[]),D=m.useCallback(async T=>{var ce;const W=(ce=T.target.files)==null?void 0:ce[0];if(T.target.value="",!!W)try{const ge=await W.text(),De=JSON.parse(ge);if(!De.orgProfile||typeof De.orgProfile!="object"){window.alert("This file does not contain Project Setup data.");return}const R=Kn(De.orgProfile),Z=gt(R);if(!window.confirm("Import this Project Setup file? This replaces your current organisation profile, pathway/timeline, toolkit links, further reading, core links and team members."+(Z.errors.length?`

Note: the imported data has ${Z.errors.length} validation warning(s) you can fix after importing.`:"")))return;d(R),f(2)}catch{window.alert("Unable to read this file. Please choose a valid Project Setup export.")}},[d]);if(!n)return null;const j=`block text-sm font-medium mb-1 ${u?"text-slate-200":"text-slate-700"}`,q=u?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900",J=[{title:"Organisation profile",blurb:"Start with the basics: who this programme belongs to. This shows up on exports, highlight reports and the audit log, so people reviewing this CST later know whose it is.",body:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:`flex flex-wrap items-center justify-between gap-3 rounded-md border p-3 ${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("p",{className:`text-sm ${u?"text-slate-300":"text-slate-600"}`,children:"Already have a Project Setup export? Import it instead of filling this in by hand."}),e.jsx("button",{type:"button",onClick:te,className:Oe,children:"Import Saved Setup"}),e.jsx("input",{ref:U,type:"file",accept:"application/json",className:"hidden",onChange:D})]}),e.jsxs("div",{children:[e.jsx("label",{className:j,htmlFor:"wizard-trust-name",children:"Organisation Name"}),e.jsx("input",{id:"wizard-trust-name",type:"text",className:`${Nn} ${q}`,value:l.trustName,onChange:T=>d({...l,trustName:T.target.value})}),S("trustName")?e.jsx("p",{className:`mt-1 text-xs ${u?"text-amber-300":"text-red-700"}`,children:S("trustName")}):null]}),e.jsxs("div",{children:[e.jsx("label",{className:j,htmlFor:"wizard-project-name",children:"Programme / Project Name"}),e.jsx("input",{id:"wizard-project-name",type:"text",className:`${Nn} ${q}`,value:l.projectName||"",onChange:T=>d({...l,projectName:T.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{className:j,htmlFor:"wizard-lead-name",children:"Lead Submitter (Change Lead)"}),e.jsx("input",{id:"wizard-lead-name",type:"text",className:`${Nn} ${q}`,value:l.leadName||"",onChange:T=>d({...l,leadName:T.target.value})})]})]})},{title:"Pathway & timeline",blurb:"Your pathway shapes the guidance and checklists you see throughout the tool. Pick the one that matches where this programme actually is, then set the key delivery dates.",body:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:j,htmlFor:"wizard-cst-pathway",children:"Pathway"}),e.jsx("select",{id:"wizard-cst-pathway",className:`${Nn} pr-10 ${q}`,value:l.cst.pathway,onChange:T=>A("pathway",T.target.value),children:sa.map(T=>e.jsx("option",{value:T.value,children:T.label},T.value))})]}),e.jsx(ca,{pathway:l.cst.pathway,darkMode:u}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:j,htmlFor:"wizard-go-live",children:"Go Live Date"}),e.jsx("input",{id:"wizard-go-live",type:"date",className:`${Nn} ${q}`,value:l.cst.goLiveDate,onChange:T=>A("goLiveDate",T.target.value)}),S("cst.goLiveDate")?e.jsx("p",{className:`mt-1 text-xs ${u?"text-amber-300":"text-red-700"}`,children:S("cst.goLiveDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{className:j,htmlFor:"wizard-full-adoption",children:"Full Adoption (optional)"}),e.jsx("input",{id:"wizard-full-adoption",type:"date",className:`${Nn} ${q}`,value:l.cst.fullAdoptionDate,onChange:T=>A("fullAdoptionDate",T.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{className:j,htmlFor:"wizard-benefit",children:"Benefit Realisation (optional)"}),e.jsx("input",{id:"wizard-benefit",type:"date",className:`${Nn} ${q}`,value:l.cst.benefitRealizationDate,onChange:T=>A("benefitRealizationDate",T.target.value)})]})]})]})},{title:"Team members",blurb:"Add the people working on this programme so actions and readiness slides can be assigned to a named owner, instead of everything sitting as 'Unassigned'.",body:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:j,htmlFor:"wizard-current-user",children:"You are signed in as"}),e.jsxs("select",{id:"wizard-current-user",value:r||"",onChange:T=>o(T.target.value),className:`${Nn} pr-10 md:w-1/2 ${q}`,children:[e.jsx("option",{value:"",children:"Not selected"}),(l.teamMembers||[]).map(T=>e.jsxs("option",{value:T.id,children:[T.name||"Unnamed",T.role?` - ${T.role}`:""]},T.id))]})]}),e.jsx("div",{className:"space-y-2",children:(l.teamMembers||[]).map(T=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2 items-center",children:[e.jsx("input",{value:T.name,onChange:W=>h(T.id,"name",W.target.value),placeholder:"Name",className:`rounded-md border shadow-sm sm:text-sm p-2 ${q}`}),e.jsx("input",{value:T.role,onChange:W=>h(T.id,"role",W.target.value),placeholder:"Role",className:`rounded-md border shadow-sm sm:text-sm p-2 ${q}`}),e.jsx("button",{type:"button",onClick:()=>M(T.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},T.id))}),e.jsx("button",{type:"button",onClick:_,className:Oe,children:"+ Add team member"})]})},{title:"External links",blurb:"This step is optional and can be configured any time from Project Setup - toolkit choice, core reference links, and further-reading per component. Skip it for now if you'd rather get straight to assessing.",body:e.jsx("div",{className:`rounded-md border p-4 text-sm ${u?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-600"}`,children:"Nothing needed here to get started. Head to Project Setup whenever you want to set a toolkit preference, add core reference links, or point a component at further reading."})}],I=J[c],ee=c===0,H=c===J.length-1;return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border p-6 shadow-2xl ${u?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("p",{className:"text-xs font-semibold uppercase tracking-wider text-blue-600",children:["Guided CST Setup · Step ",c+1," of ",J.length]}),e.jsx("button",{type:"button",onClick:a,className:`rounded-md border px-3 py-1.5 text-sm ${u?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Close"})]}),e.jsx("h3",{className:`mt-3 text-lg font-semibold ${u?"text-slate-100":"text-slate-900"}`,children:I.title}),e.jsx("p",{className:`mt-1 text-sm ${u?"text-slate-300":"text-slate-600"}`,children:I.blurb}),e.jsx("div",{className:"mt-4",children:I.body}),e.jsxs("div",{className:"mt-6 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:()=>f(T=>Math.max(0,T-1)),disabled:ee,className:`${Oe} disabled:opacity-50 disabled:cursor-not-allowed`,children:"Back"}),H?e.jsx("button",{type:"button",onClick:i,className:Rn,children:"Done"}):e.jsx("button",{type:"button",onClick:()=>f(T=>Math.min(J.length-1,T+1)),className:Rn,children:"Next"})]})]})})}function gi({open:n,teamMembers:t,currentUserId:s,onCurrentUserChange:a,onClose:i,onNavigateToProjectDetails:r,darkMode:o}){const[u,c]=m.useState(s);if(!n)return null;const f=t.length>0,l=()=>{u&&(a(u),i())};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-lg rounded-xl border p-6 shadow-2xl`,children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-900"}`,children:"No one is signed in"}),e.jsxs("div",{className:`mt-3 space-y-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:[e.jsx("p",{children:"Every change recorded in this tool is attributed to whoever is signed in, so the audit log can show who did what. Sign in as a team member to continue."}),!f&&e.jsx("p",{children:"No team members have been added yet - add one on the Project Setup page first."})]}),f&&e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{htmlFor:"sign-in-required-select",className:`block text-xs font-medium ${o?"text-slate-300":"text-slate-700"}`,children:"Sign in as"}),e.jsxs("select",{id:"sign-in-required-select",value:u,onChange:x=>c(x.target.value),className:`mt-1 w-full rounded-md border px-3 py-2 text-sm ${o?"bg-slate-900 border-slate-600 text-slate-100":"bg-white border-slate-300 text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Not selected"}),t.map(x=>e.jsxs("option",{value:x.id,children:[x.name||"Unnamed",x.role?` - ${x.role}`:""]},x.id))]})]}),e.jsxs("div",{className:"mt-6 flex flex-wrap justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:i,className:`rounded-md px-4 py-2 text-sm font-medium ${o?"text-slate-300 hover:bg-slate-700":"text-slate-600 hover:bg-slate-100"}`,children:"Remind me later"}),e.jsx("button",{type:"button",onClick:r,className:`rounded-md border px-4 py-2 text-sm font-medium ${o?"border-slate-600 text-slate-200 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-100"}`,children:"Go to Project Setup"}),f&&e.jsx("button",{type:"button",onClick:l,disabled:!u,className:"rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",children:"Sign in"})]})]})})}const Lt={0:"Not Started: Activity has not yet commenced or been defined.",1:"Emerging: Activity is fragmented, uncoordinated, and reactive. No standardised approach.",2:"Developing: Basic processes exist but are inconsistently applied. Reliance on heroic individual efforts.",3:"Embedding: Standardised approach defined and applied across the project. Leadership is engaged.",4:"Adopted: Behaviours are changing. Metrics are actively monitored to drive adoption.",5:"Thriving: Change is fully embedded as business as usual. Continuous improvement is evident."},ws=["Pre-Emergent","Emerging","Developing","Maturing","Embedding","Thriving"],pi=["#768692","#AE2521","#FFB81C","#005EB8","#330072","#00A499"];function Bt(n){return ws[Math.round(n)]||ws[0]}function da(){return[{title:"What is the Adoption Engine?",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsxs("p",{className:"text-sm text-slate-700",children:["Going live with a new digital product isn't the finish line - people still need to adopt it, change how they work, and keep using it."," "]}),e.jsx("p",{className:"text-sm text-slate-700",children:"The Adoption Engine helps you track how people and teams are adopting the change before go-live, during rollout, and after launch so progress is visible and outcomes are measurable."}),e.jsx("p",{className:"text-sm text-slate-700",children:" It helps you answer four simple questions:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"Where are we going?"}),e.jsx("li",{children:" How will we know we've got there?"}),e.jsx("li",{children:" What needs to be in place?"}),e.jsx("li",{children:" What should we do next?"})]}),e.jsx("p",{className:"text-sm text-slate-700",children:"The goal is not just to implement change, but to ensure it is adopted, embedded and delivering benefits."})]})},{title:"What benefit does this tool give me?",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"Without it, adoption progress lives in scattered spreadsheets, memories and gut feel - hard to prove, hard to hand over, and easy to lose momentum on."}),e.jsx("p",{children:"With it, you get a single, evidenced picture of where your change effort actually stands:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1",children:[e.jsx("li",{children:"See at a glance what's on track, what's at risk, and what to do next."}),e.jsx("li",{children:`Turn vague "how's it going?" conversations into a clear, evidence-backed status you can show your sponsor or board.`}),e.jsx("li",{children:"Get a ready-made action plan for each area, so you're not starting from a blank page."}),e.jsx("li",{children:"Build a highlight report in minutes instead of an afternoon of copy-pasting."})]})]})},{title:"What is a CST?",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"A CST (Context Specific Template) contains the information that makes the Adoption Engine specific to your project, programme or initiative."}),e.jsx("p",{children:"It captures key information such as your scope, milestones, outcomes and benefits, and tailors the guidance, actions and resources provided."}),e.jsxs("p",{children:["You can update your project setup at any time from ",e.jsx("strong",{children:"Project Setup"})]})]})},{title:"Adoption Pathways",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"The Adoption Engine supports three common change journeys:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Starting for the First Time"}),e.jsx("br",{}),"Building the foundations for successful adoption."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Piloted and Ready to Scale Up"}),e.jsx("br",{}),"Expanding a successful pilot to a wider audience."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Gone Live but Adoption is Patchy"}),e.jsx("br",{}),"Strengthening adoption where uptake or benefits are lower than expected."]})]}),e.jsx("p",{children:"Choose your pathway to tailor the guidance, actions and resources you see."})]})},{title:"How the Adoption Engine Works",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"The engine is built around change components such as Vision, Sponsorship, Engagement, Capability and Benefits."}),e.jsxs("p",{children:["Each component is viewed through five ",e.jsx("strong",{children:"lenses"}),":"]}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"Strategic Direction and Leadership"}),e.jsx("li",{children:"People Experience and Culture"}),e.jsx("li",{children:"Planning and Risk"}),e.jsx("li",{children:"Skills and Behaviour"}),e.jsx("li",{children:"Process and Sustainment"})]}),e.jsx("p",{children:"As you assess your readiness of each change component through the lenses, the engine recommends actions, resources and evidence to help improve adoption."})]})},{title:"Readiness Guidance Levels",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-3",children:[e.jsx("p",{children:"Every lens is scored on the same 0-5 readiness scale. Here's what each level generally means - each lens on a component page also shows guidance written specifically for that lens at its current level."}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:Object.entries(Lt).map(([n,t])=>{const[s,a]=t.split(/:\s(.+)/);return e.jsxs("div",{className:"rounded-md border p-2.5",style:{borderLeftWidth:"4px",borderLeftColor:pi[Number(n)]},children:[e.jsxs("p",{className:"text-xs font-bold text-slate-800",children:[n," - ",s]}),e.jsx("p",{className:"mt-0.5 text-xs text-slate-600",children:a})]},n)})})]})},{title:"Getting Started",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{className:"text-sm text-slate-700",children:"Start with Project Setup to review your project setup. "}),e.jsx("p",{className:"text-sm text-slate-700",children:"Then visit the Dashboard to:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"View your current position"}),e.jsx("li",{children:"Explore components and lenses"}),e.jsx("li",{children:"Identify priority actions"}),e.jsx("li",{children:"Track progress and benefits"})]}),e.jsxs("p",{className:"text-sm text-slate-700",children:["The Adoption Engine will help guide your journey from ambition to adoption."," "]})]})}]}function hi({open:n,onClose:t,onNavigateToProjectDetails:s,onNavigateToGuide:a}){const[i,r]=m.useState(0),o=da();if(m.useEffect(()=>{n&&r(0)},[n]),!n)return null;const u=o[i],c=i===0,f=i===o.length-1;return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:"relative w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("p",{className:"text-xs font-semibold uppercase tracking-wider text-blue-600",children:["Introduction · Step ",i+1," of ",o.length]}),e.jsx("button",{type:"button",onClick:t,className:"rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100",children:"Skip"})]}),e.jsx("h3",{className:"mt-3 text-lg font-semibold text-slate-900",children:u.title}),e.jsx("div",{className:"mt-3",children:u.body}),e.jsxs("div",{className:"mt-6 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:()=>r(l=>Math.max(0,l-1)),disabled:c,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed",children:"Back"}),f?e.jsxs("div",{className:"flex items-stretch gap-2",children:[s?e.jsx("button",{type:"button",onClick:s,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"Set up your Project"}):null,a?e.jsx("button",{type:"button",onClick:a,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"See the 6 Key Questions"}):null,e.jsx("button",{type:"button",onClick:t,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Go to dashboard"})]}):e.jsx("button",{type:"button",onClick:()=>r(l=>Math.min(o.length-1,l+1)),className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Next"})]})]})})}const fi={"avt-v2-2026":[{id:"avt-vision-case-for-change",title:"Vision and Case for Change",pageHint:"Section: Early readiness",text:"Use a clear case for change, define outcomes, and ensure leadership sponsorship before go-live."},{id:"avt-stakeholder-engagement",title:"Stakeholder Engagement",pageHint:"Section: People and communication",text:"Map stakeholder groups, identify adoption risks, and use targeted communication plans for each audience."},{id:"avt-training-readiness",title:"Training and Capability",pageHint:"Section: Capability and learning",text:"Align learning interventions with role-based needs and verify confidence through readiness checkpoints."},{id:"avt-benefits-tracking",title:"Benefits Tracking",pageHint:"Section: Value realisation",text:"Set measurable adoption indicators and review benefit evidence at regular intervals post go-live."},{id:"avt-reinforcement-bau",title:"Reinforcement and BAU Transfer",pageHint:"Section: Sustainment",text:"Embed reinforcement actions and hand over ownership to business-as-usual teams for sustained adoption."}],"change-management-v3-2023":[{id:"cmt-leadership-alignment",title:"Leadership Alignment",pageHint:"Section: Sponsorship and governance",text:"Secure visible executive sponsorship and align governance with programme milestones and risks."},{id:"cmt-change-impact",title:"Change Impact Assessment",pageHint:"Section: Planning and risk",text:"Assess process, role, and behaviour impacts early and prioritise mitigations before deployment."},{id:"cmt-resistance-management",title:"Resistance Management",pageHint:"Section: Adoption barriers",text:"Identify likely resistance themes and define practical interventions with named owners and timelines."},{id:"cmt-comms-cadence",title:"Communication Cadence",pageHint:"Section: Communications",text:"Establish a predictable communication cadence using concise updates and feedback loops."},{id:"cmt-post-go-live-support",title:"Post Go-Live Support",pageHint:"Section: Stabilisation",text:"Provide hypercare support with clear escalation routes and transition criteria into steady state."}]};ni.workerSrc=ei;function bi({toolkitChoice:n,darkMode:t=!1}){const[s,a]=m.useState(!1),[i,r]=m.useState(!1),[o,u]=m.useState(""),[c,f]=m.useState(1),[l,x]=m.useState("idle"),[b,S]=m.useState(""),[d,A]=m.useState([]),_=m.useMemo(()=>Ja(n),[n]),h=m.useMemo(()=>(fi[n]||[]).map(j=>({id:j.id,title:j.title,pageHint:j.pageHint,text:j.text,pageNumber:null})),[n]);m.useEffect(()=>{if(!s)return;let j=!1;return(async()=>{x("loading"),S("");try{const J=await fetch(_.path);if(!J.ok)throw new Error(`HTTP ${J.status}`);const I=await J.arrayBuffer(),ee=new Uint8Array(I);let H;try{H=await Ss({data:ee}).promise}catch(W){if(H=await Ss({data:ee,disableWorker:!0}).promise,!j){const ce=W instanceof Error?W.message:String(W);S(`Worker fallback used: ${ce}`)}}const T=[];for(let W=1;W<=H.numPages;W+=1){if(j)return;const De=(await(await H.getPage(W)).getTextContent()).items.map(R=>"str"in R?R.str:"").join(" ").replace(/\s+/g," ").trim();De&&T.push({id:`${n}-page-${W}`,title:`Page ${W}`,pageHint:`Page ${W}`,text:De,pageNumber:W})}j||(A(T),x("ready"))}catch{j||(A([]),x("error"),S("Unable to read PDF text for indexing in this browser session."))}})(),()=>{j=!0}},[s,_.path,n]),m.useEffect(()=>{f(1),u(""),A([]),x("idle"),S("")},[n]);const M=d.length>0?d:h,U=m.useMemo(()=>{const j=Number.isFinite(c)&&c>0?Math.floor(c):1;return`${_.path}#page=${j}`},[_.path,c]),D=m.useMemo(()=>{const j=o.trim().toLowerCase();if(!j)return M.slice(0,5).map(I=>({entry:I,score:0}));const q=j.split(/\s+/).filter(Boolean),J=I=>{const ee=`${I.title} ${I.text} ${I.pageHint}`.toLowerCase();let H=0;return ee.includes(j)&&(H+=8),q.forEach(T=>{ee.includes(T)?H+=2:ee.split(/\W+/).some(ce=>ce&&(ce.includes(T)||T.includes(ce)))&&(H+=1)}),H};return M.map(I=>({entry:I,score:J(I)})).filter(I=>I.score>0).sort((I,ee)=>ee.score-I.score).slice(0,5)},[o,M])[0]||null;return m.useEffect(()=>{o.trim()&&D!=null&&D.entry.pageNumber&&f(D.entry.pageNumber)},[D,o]),e.jsxs("div",{className:"fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2","data-testid":"global-toolkit-chatbot",children:[s?e.jsxs("div",{className:`w-[380px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border shadow-2xl ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant"}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("button",{type:"button",onClick:()=>r(!0),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Maximise"}),e.jsx("button",{type:"button",onClick:()=>a(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Minimise"})]})]}),e.jsxs("div",{className:`space-y-3 p-3 ${t?"bg-slate-800":"bg-slate-50"}`,children:[e.jsxs("div",{className:`max-w-[95%] rounded-2xl rounded-bl-md px-3 py-2 text-xs shadow-sm ${t?"bg-slate-700 text-slate-100":"bg-white text-slate-700"}`,children:["Showing your selected toolkit from Project Setup:",e.jsx("div",{className:"mt-1 font-semibold",children:_.label})]}),e.jsx("div",{className:`overflow-hidden rounded-lg border ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:e.jsx("iframe",{title:"Selected Toolkit Preview",src:U,className:"h-[260px] w-full"})}),e.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-end gap-2",children:[e.jsx("label",{htmlFor:"toolkit-page-input",className:`text-[11px] font-semibold uppercase tracking-wider ${t?"text-slate-300":"text-slate-600"}`,children:"Go to page"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{id:"toolkit-page-input",type:"number",min:1,value:c,onChange:j=>f(Number(j.target.value)||1),className:`w-20 rounded-md border px-2 py-1.5 text-xs ${t?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})})]}),e.jsxs("div",{className:`rounded-lg border p-2 ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsx("label",{htmlFor:"toolkit-fuzzy-search",className:`mb-1 block text-[11px] font-semibold uppercase tracking-wider ${t?"text-slate-300":"text-slate-600"}`,children:"Quick snippet search"}),e.jsx("input",{id:"toolkit-fuzzy-search",type:"search",value:o,onChange:j=>u(j.target.value),placeholder:"Try: sponsorship, training, resistance",className:`w-full rounded-md border px-2 py-1.5 text-xs ${t?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-400":"border-slate-300 bg-white text-slate-900 placeholder-slate-500"}`}),e.jsx("div",{className:"mt-2",children:o.trim()?D!=null&&D.entry.pageNumber?e.jsxs("button",{type:"button",onClick:()=>{f(D.entry.pageNumber),r(!0)},className:`w-full rounded-md px-2 py-1.5 text-left text-xs font-semibold ${t?"bg-slate-800 text-slate-100 hover:bg-slate-700":"bg-slate-100 text-slate-800 hover:bg-slate-200"}`,children:["Go to best match: Page ",D.entry.pageNumber]}):e.jsx("p",{className:`text-xs ${t?"text-slate-400":"text-slate-500"}`,children:"No close page match found. Try broader keywords."}):e.jsx("p",{className:`text-xs ${t?"text-slate-400":"text-slate-500"}`,children:"Enter a keyword to jump to the most relevant page."})}),e.jsx("p",{className:`mt-2 text-[11px] ${t?"text-slate-400":"text-slate-500"}`,children:l==="loading"?"Indexing toolkit text from all pages...":l==="ready"?`Search is using full-document text (${d.length} pages indexed).`:l==="error"?"Full-document indexing unavailable, using fallback snippets.":"Search will expand to all pages when the assistant opens."}),b?e.jsx("p",{className:`mt-1 text-[11px] ${t?"text-amber-300":"text-amber-700"}`,children:b}):null]}),e.jsx("a",{href:_.path,target:"_blank",rel:"noopener noreferrer",className:"inline-block text-xs font-semibold text-[#005eb8] underline",children:"Open full toolkit in new tab"})]})]}):null,i?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4",children:e.jsxs("div",{className:`relative h-[90vh] w-[95vw] overflow-hidden rounded-2xl border shadow-2xl ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant · Expanded Viewer"}),e.jsx("button",{type:"button",onClick:()=>r(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Close"})]}),e.jsx("iframe",{title:"Selected Toolkit Full View",src:U,className:"h-[calc(90vh-42px)] w-full"})]})}):null,e.jsxs("button",{type:"button",onClick:()=>a(j=>!j),className:"inline-flex items-center gap-2 rounded-full bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-blue-700","aria-label":"Open toolkit assistant",children:[e.jsx("span",{"aria-hidden":"true",children:"💬"}),"Toolkit assistant"]})]})}function ua({showAdvancedControls:n,onToggleAdvanced:t,onReset:s,resultText:a,activeFilters:i,activeFiltersAriaLabel:r,darkMode:o=!1}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:t,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${o?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:n?"Hide advanced controls":"Show advanced controls"}),e.jsx("button",{type:"button",onClick:s,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${o?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:"Reset filters"}),e.jsx("span",{className:`text-xs ${o?"text-slate-300":"text-slate-500"}`,"aria-live":"polite",children:a})]}),i.length>0?e.jsx("div",{className:"flex flex-wrap gap-2","aria-label":r,children:i.map(u=>e.jsx("span",{className:`inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-slate-50 text-slate-700"}`,children:u},u))}):null]})}const xi="nhs-digital-adoption-page-intro-seen:";function dn(n){const t=`${xi}${n}`,[s,a]=m.useState(()=>!En(t));return{isOpen:s,close:()=>{en(t,!0),a(!1)},reopen:()=>a(!0)}}function un({open:n,onClose:t,title:s,body:a,darkMode:i=!1}){return n?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-lg rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-900"}`,children:s}),e.jsx("button",{type:"button",onClick:t,"aria-label":"Close introduction",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${i?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:`mt-3 space-y-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:a}),e.jsx("div",{className:"mt-5 flex justify-end",children:e.jsx("button",{type:"button",onClick:t,className:Rn,children:"Got it"})})]})}):null}function mn({onClick:n,darkMode:t=!1}){return e.jsx("button",{type:"button",onClick:n,"aria-label":"Show page introduction",title:"Show page introduction",className:`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${t?"border-slate-600 text-slate-200 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"?"})}function Si({actions:n,onComponentClick:t,teamMembers:s=[],darkMode:a=!1}){const i=dn("action-tracker"),[r,o]=m.useState(""),[u,c]=m.useState("all"),[f,l]=m.useState("all"),[x,b]=m.useState("all"),[S,d]=m.useState("all"),[A,_]=m.useState("all"),[h,M]=m.useState("component"),[U,te]=m.useState("asc"),[D,j]=m.useState(!1),q=m.useCallback(R=>{t(R)},[t]),J=m.useMemo(()=>Array.from(new Set(n.map(R=>R.component))).sort((R,Z)=>R.localeCompare(Z)),[n]),I=m.useMemo(()=>Array.from(new Set([...s.map(R=>R.name),...n.map(R=>R.action.owner).filter(Boolean)])).sort((R,Z)=>R.localeCompare(Z)),[n,s]),ee=m.useMemo(()=>Array.from(new Set(n.map(R=>R.action.status))).sort((R,Z)=>R.localeCompare(Z)),[n]),H=m.useMemo(()=>{const R=n.map(Z=>Z.action.actionType).filter(Z=>!!Z);return Array.from(new Set([...ut,...R])).sort((Z,re)=>Z.localeCompare(re))},[n]),T=m.useMemo(()=>{const R=n.map(Z=>Z.action.readinessScore).filter(Z=>Z!==void 0);return Array.from(new Set(R)).sort((Z,re)=>Z-re)},[n]),W={0:"Not Started",1:"Emerging",2:"Developing",3:"Embedding",4:"Adopted",5:"Thriving"},ce=m.useMemo(()=>{const R=r.trim().toLowerCase();return n.filter(re=>u!=="all"&&re.component!==u||f!=="all"&&re.action.owner!==f||x!=="all"&&re.action.status!==x||S!=="all"&&(re.action.actionType||"")!==S||A!=="all"&&re.action.readinessScore!==A?!1:R?[re.component,re.lens,re.action.text,re.action.actionType||"",re.action.owner,re.action.timescale,re.action.status].join(" ").toLowerCase().includes(R):!0).sort((re,Re)=>{const Le=pe=>{switch(h){case"lens":return pe.lens;case"owner":return pe.action.owner||"Unassigned";case"status":return pe.action.status;case"actionType":return pe.action.actionType||"Unassigned";case"component":default:return pe.component}},He=Le(re).localeCompare(Le(Re));return U==="asc"?He:-He})},[S,n,u,f,A,r,h,U,x]),ge=m.useMemo(()=>{const R=[];return r.trim()&&R.push(`Search: ${r.trim()}`),u!=="all"&&R.push(`Component: ${u}`),x!=="all"&&R.push(`Status: ${x}`),S!=="all"&&R.push(`Action type: ${S}`),A!=="all"&&R.push(`Readiness: ${W[A]}`),f!=="all"&&R.push(`Owner: ${f}`),(h!=="component"||U!=="asc")&&R.push(`Sort: ${h} (${U})`),R},[S,u,f,A,r,h,U,x]),De=()=>{o(""),c("all"),l("all"),b("all"),d("all"),_("all"),M("component"),te("asc"),j(!1)};return e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"mb-6 flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${a?"text-slate-100":"text-slate-800"}`,children:"Action Tracker"}),e.jsx(mn,{onClick:i.reopen,darkMode:a})]}),e.jsx(un,{open:i.isOpen,onClose:i.close,title:"Action Tracker",darkMode:a,body:e.jsx("p",{children:"Every action across every component in one searchable, filterable, sortable table. Filter by component, owner, status, action type or readiness score, and click a row's component to jump straight to its assessment."})}),e.jsxs("div",{className:`${a?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-4 mb-6 space-y-3`,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:r,onChange:R=>o(R.target.value),placeholder:"Search actions, owners, lenses...",className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-900 text-slate-100":"text-slate-900"}`}),e.jsxs("select",{value:u,onChange:R=>c(R.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All components"}),J.map(R=>e.jsx("option",{value:R,children:R},R))]}),e.jsxs("select",{value:x,onChange:R=>b(R.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All statuses"}),ee.map(R=>e.jsx("option",{value:R,children:R},R))]})]}),e.jsx(ua,{showAdvancedControls:D,onToggleAdvanced:()=>j(R=>!R),onReset:De,resultText:`Showing ${ce.length} actions`,activeFilters:ge,activeFiltersAriaLabel:"Active action tracker filters",darkMode:a}),D?e.jsxs("div",{className:`grid grid-cols-1 sm:grid-cols-5 gap-3 rounded-md border p-3 ${a?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("select",{value:f,onChange:R=>l(R.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),I.map(R=>e.jsx("option",{value:R,children:R},R))]}),e.jsxs("select",{value:S,onChange:R=>d(R.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),H.map(R=>e.jsx("option",{value:R,children:R},R))]}),e.jsxs("select",{value:A==="all"?"all":String(A),onChange:R=>_(R.target.value==="all"?"all":Number(R.target.value)),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All readiness levels"}),T.map(R=>e.jsx("option",{value:String(R),children:W[R]},R))]}),e.jsxs("select",{value:h,onChange:R=>M(R.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"component",children:"Sort: Component"}),e.jsx("option",{value:"lens",children:"Sort: Lens"}),e.jsx("option",{value:"owner",children:"Sort: Owner"}),e.jsx("option",{value:"actionType",children:"Sort: Action Type"}),e.jsx("option",{value:"status",children:"Sort: Status"})]}),e.jsx("button",{type:"button",onClick:()=>te(R=>R==="asc"?"desc":"asc"),className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${a?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-white"}`,children:U==="asc"?"A-Z":"Z-A"})]}):null]}),e.jsx("div",{className:`${a?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:ce.length?e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:`min-w-full table-fixed ${a?"divide-slate-700":"divide-slate-200"} divide-y`,children:[e.jsx("thead",{className:a?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Change Component"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Lens"}),e.jsx("th",{className:`w-[22%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Action Type"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Timescale"}),e.jsx("th",{className:`w-[14%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Status"})]})}),e.jsx("tbody",{className:`${a?"bg-slate-800 divide-slate-700":"bg-white divide-slate-100"} divide-y`,children:ce.map(({compId:R,component:Z,lens:re,action:Re})=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-4 py-3 text-sm ${a?"text-slate-100":"text-slate-700"}`,children:e.jsx("button",{onClick:()=>q(R),className:"text-left underline underline-offset-2 hover:text-[#005eb8] transition-colors",children:Z})}),e.jsx("td",{className:`px-4 py-3 text-sm ${a?"text-slate-300":"text-slate-500"}`,children:re}),e.jsx("td",{className:`w-[22%] px-4 py-3 text-sm whitespace-normal break-words leading-snug ${a?"text-slate-100":"text-slate-700"}`,children:Re.text}),e.jsx("td",{className:`px-4 py-3 text-sm ${a?"text-slate-100":"text-slate-700"}`,children:Re.actionType||"Unassigned"}),e.jsx("td",{className:`px-4 py-3 text-sm ${a?"text-slate-100":"text-slate-700"}`,children:Re.owner}),e.jsx("td",{className:`px-4 py-3 text-sm ${a?"text-slate-100":"text-slate-700"}`,children:Re.timescale}),e.jsx("td",{className:"w-[14%] px-4 py-3 text-sm",children:e.jsx("span",{className:`inline-flex rounded-full border px-2 py-1 text-xs font-semibold ${On[rn(Re.status)]}`,children:rn(Re.status)})})]},`${R}-${re}-${Re.text}`))})]})}):e.jsx("div",{className:`p-6 ${a?"text-slate-300":"text-slate-500"}`,children:n.length?"No actions match the current filters.":"No actions recorded yet."})})]})}function ma(n,t){if(n<=0)return"Amber";const s=t-n;return s>=2?"Red":s>0?"Amber":"Green"}function yi(n,t=new Date){if(n.length===0)return{status:"Green",reason:"No outstanding actions at the current level."};const s=n.map(u=>({action:u,due:u.dueDate?new Date(u.dueDate):null})).map(({action:u,due:c})=>({action:u,due:c&&!isNaN(c.getTime())?c:null})),a=s.filter(({due:u})=>u!==null&&u<t);if(a.length>0){const u=a.length>1?` and ${a.length-1} more`:"";return{status:"Red",reason:`${a.length} action${a.length===1?" is":"s are"} overdue: "${a[0].action.text}"${u}.`}}const i=new Date(t.getTime()+14*24*60*60*1e3),r=s.filter(({due:u})=>u!==null&&u<=i);return r.length>0?{status:"Amber",reason:`${r.length} action${r.length===1?" is":"s are"} due within 14 days: "${r[0].action.text}".`}:s.filter(({due:u})=>u===null).length===n.length?{status:"Amber",reason:`${n.length} action${n.length===1?" has":"s have"} no due date set, so timeline risk can't be assessed.`}:{status:"Green",reason:"All outstanding actions are on track against their due dates."}}const ga={Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},vi={Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"},ln={1:"Pre-Discovery",2:"Solution Design",3:"Development",4:"Deployment / Go Live",5:"Post-Deployment"},wi={sampleRubric:[{id:"r1",label:"Leadership",max:5},{id:"r2",label:"Culture",max:5}],adoptionRubric:[{id:"a1",label:"Adoption awareness",max:100},{id:"a2",label:"Training coverage",max:100}],vision:{"Strategic Direction and Leadership":{1:"Senior leaders take initial steps to develop the vision through workshops and discussions, beginning to align on a shared future direction and its link to strategic objectives.",2:"A draft vision has been created and is being tested and refined with a wider group to check clarity, relevance and alignment to strategy.",3:"A clear vision is defined and agreed at senior level but not yet consistently communicated to all stakeholders.",4:"Senior leaders consistently communicate the vision and link it to organisational goals, priorities and decisions.",5:"Leaders speak with one voice about the vision, actively reinforcing it through actions and decisions and ensuring it is well understood across the organisation."},"People Experience and Culture":{1:"Early conversations focus on what is changing but staff involvement is limited. The vision is not yet clear or meaningful to most people.",2:"The draft vision is tested with a wider audience. Staff input is sought to check relevance and whether the vision reflects real experiences and concerns. Feedback is used to refine the vision.",3:`The vision is defined but not yet consistently communicated to all stakeholders.

Some staff groups understand the vision and its relevance to their roles but understanding varies across staff groups.`,4:`Vision defined and communicated to all stakeholder groups

The vision is clearly communicated in people-centred language. Feedback loops are in place. Most staff understand what the change means for them and how their work will be impacted.`,5:`The vision is clear, widely communicated and feedback loops are in place to show understanding across the organisation.

The vision actively inspires engagement and guides action. Staff are able to confidently articulate the vision, its meaning and what it means to them.`}},case_for_change:{"Strategic Direction and Leadership":{1:"The case for change is being developed. Senior leaders begin to explore and define the rationale for change, identifying problems to address and early indications of benefits.",2:"A draft case for change has been created and tested with key stakeholders. Benefits, success measures and alignment to strategy are being clarified.",3:"A clear case for change is agreed at senior level but it is not yet consistently communicated or reinforced through leadership decisions and governance.",4:`There is a clearly defined case for change which has been communicated to all stakeholder groups.

Senior leaders consistently communicate the case for change and link it to organisational priorities, benefits, and outcomes.`,5:`There is a clearly defined case for change which has been communicated to all stakeholder groups.

The case for change is embedded into planning, governance and decision-making. Leaders actively reinforce it and use it to guide action.`},"People Experience and Culture":{1:"Initial messages are shared but most staff do not yet understand why they need to change or how it benefits them.",2:`The case for change is developed but not yet widely communicated.

The case for change is shaped using staff and stakeholder feedback and starts to explain what success and adoption would look like in practice.`,3:`The case for change is developed but not yet consistently communicated to all stakeholders.

Some staff understand the reasons for change and expected benefits, but understanding varies across teams and groups.`,4:`The case for change is fully developed and communicated to all stakeholder groups

Feedback loops are in place.
Most staff understand why the change is needed and can confidently articulate the rationale and the expected benefits.`,5:`The case for change is compelling, widely communicated and fully understood by all stakeholders.

The case for change actively inspires engagement and motivates action with staff able to articulate the rationale and expected benefits and what successful adoption looks like in practice.`}},sponsorship:{"Strategic Direction and Leadership":{1:"A Senior Responsible Owner has been identified, and there are early signs of leadership involvement. However, direction is still unclear or inconsistent, and the change is not yet being reinforced in a way that feels meaningful across the organisation.",2:"An SRO and Senior sponsors are in place and are beginning to engage more actively. Direction is becoming clearer, and some leaders are starting to take ownership within their areas, although alignment and consistency across the organisation is still variable.",3:`A clear leadership direction is now established and being reinforced more consistently.

The SRO and Senior sponsors are actively supporting the change, helping to remove barriers and maintain focus.

The change is increasingly seen as a priority rather than an initiative.`,4:`Leadership is visibly driving the change, with consistent messaging and decision-making that aligns to the intended outcomes.

Senior sponsors take accountability for progress, and the direction feels stable and well understood across the organisation.`,5:`Leadership ownership of the change is fully established and sustained.

The SRO and Senior sponsors continue to reinforce the direction, using insight and feedback to adapt and improve.`},"People Experience and Culture":{1:"Early communication from leadership has started, but it is not consistent or widespread. Some staff are becoming aware of the change, but many remain unconvinced or unclear about leadership commitment.",2:"Leadership visibility is increasing, and staff in some areas feel more informed and supported. However, experiences vary across teams, and mixed messages or limited engagement can still reduce confidence.",3:`Staff are experiencing more consistent leadership presence, with clearer communication and visible support.

Confidence is improving, and people are more willing to engage, although some pockets of uncertainty may remain.`,4:`Staff recognise strong and consistent leadership support for the change. Communication feels clear and reliable, and people feel supported through the transition.

Engagement is higher, and resistance is more constructive than passive.`,5:"There is strong trust in leadership to deliver and sustain the change. Staff feel listened to, supported, and confident in the direction. People actively engage with the change and contribute to improving it."},"Planning and Risk":{1:"An initial approach to governance and oversight is forming. Some decisions are being made, but they can be slow or unclear, and risks to adoption are not yet consistently identified or addressed.",2:`Governance is becoming more active, with clearer ownership of decisions and issues.

Risks are starting to be identified, although the approach is not yet consistent and some issues are still picked up late.`,3:`Decision-making is more timely and structured, with clear escalation routes in place.

Risks to adoption are regularly identified and managed, helping to reduce disruption and maintain progress.`,4:"Governance is working effectively to support the change. Issues are identified and resolved quickly, and risks are managed proactively.",5:`Governance supports continuous improvement rather than just oversight. Risks and issues are anticipated early, and leadership uses insight to adapt and strengthen the change over time.

The organisation is confident in its ability to sustain and evolve the change.`}},change_network:{"Strategic Direction and Leadership":{1:"An SRO and initial senior sponsors are identified. Leaders recognise the need for a change network but it is not yet defined or active.",2:"Senior sponsors are in place and a change network is being established. Change agents and champions are identified with roles and expectations being defined.",3:"The change network is formally launched and involved in change activity. Senior sponsorship exists, but leadership visibility and use of the network is inconsistent.",4:"The SRO and senior sponsors actively support and use the change network. Leaders engage with the network and integrate it into governance and decision-making.",5:`An enduring change network is fully embedded and owned by a senior sponsor.
Each digital change initiative is led by an appropriate SRO and includes meaningful representation from the Change Network.
Leaders actively use the network to drive adoption, surface issues early and support sustained change.
The Change Network continues to be used beyond go-live, particularly areas where adoption is not yet embedded.

There are clear plans to reuse and sustain the network for future change initiatives.`},"People Experience and Culture":{1:"Initial design of what a Change Network will look like with assessment of possible change Agents and Champions.",2:"Change agents and champions identified and recruited. A change network begins to form. Champions start engaging peers, listening to concerns and feeding back frontline insight into the change.",3:`The Change Network is formally launched and active in several areas.
Champions and Change Agents support change activities such as engagement, 1-to-1 conversations and development of future-state processes.

The change network is active but inconsistent. Some areas feel well supported while others have limited access to champions or peer support.`,4:"The change network is visible, trusted, and accessible. Champions actively support colleagues, reinforce messages and surface issues early.",5:`The Change Network is a core part of the organisational culture and routinely used by staff for support, reassurance and feedback. Change agents and champions are empowered and valued, engagement remains high over time and staff actively seek peer input during change.

The Change Network continues to support areas where adoption is not yet embedded and is consistently reused for current and future change initiatives.`}},benefits:{"Process and Sustainment":{1:`Initial benefits workshops in place to identify the problem and develop the benefits of the change.
In addition to these high level benefits, work should commence on identifying the What's in it for me? Benefits for the different stakeholder groups.

Basic benefit processes are identified, but they are informal and inconsistent. Sustainment relies on individuals rather than agreed ways of working`,2:`Measurable benefits have been identified and mapped, linking in to strategic objectives. The mapping exercise has identified what must change for the benefits to be realised (the outcomes and work packages).
Benefits have a benefit owner responsible for realizing that benefit.
All benefits have been recorded in a benefits register.
High levels benefits are being communicated. Business case is being updated to include benefits contributions.
WIIFM Benefits have been captured and communicated for all impacted stakeholders.

Clear processes exist for tracking and reviewing benefits. Sustainment activities are planned, with defined roles to support benefits beyond initial delivery.`,3:`A Benefits Realisation plan has been developed, which is a roadmap detailing how to achieve the benefits, how they will be tracked, including timings and responsibilities. This should hold a benefits baseline, the 'before' state measurements

Benefits are linked into to engagement activities to stakeholder groups to address 'What's in it for me?'
WIIFM Benefits are understood by all stakeholder groups.

Benefits processes are embedded into routine operational and governance processes. Sustainment is actively managed through standard reviews, handovers, and ownership`,4:`Benefits are being tracked and monitored against the baseline plan. Particular focus on addressing poor user adoption that could affect benefits being realised, identified in the first 90 days post go live stabilisation period.

Stakeholders are being updated on benefits progress through regular reporting.

Consistent, organisation-wide processes support benefit sustainment. Benefits are routinely reviewed, reinforced, and adjusted as part of business-as-usual processes.`,5:`Benefits continue to be monitored, reviewed and evaluated to ensure they are on target to be realized, allowing for interventions if benefits are not accruing as expected.

In 6-12 months post go live (Optimization), Initial ROI signals should appear, and improvements in process efficiency are typically observed.
Tracking on a benefit can stop where there is confidence that the benefit is being sustained and further monitoring is no longer required, as agreed by the benefit owner.

Benefits sustainment is continuous and self-reinforcing. Processes are optimised over time, with learning used to strengthen future change and long-term value realisation.`},"Planning and Risk":{1:`Initial benefits workshops are in place to define the problem and develop the benefits of the change, forming the baseline benefits statement.

As benefits develop, with stakeholder-specific “What's in it for me?” benefits identified to mitigate adoption and sustainment risks.

High-level benefits are identified, but planning is light and risks to benefit delivery are largely implicit or unmanaged. Assumptions are not tested`,2:`Measurable benefits have been identified and mapped, linking in to strategic objectives.
Benefits have a benefit owner responsible for realizing that benefit.
All benefits have been recorded in a benefits register.
High levels benefits are being communicated. Business case is being updated to include benefits baseline.

Benefits are planned with defined measures and owners. Key risks, dependencies and assumptions are identified, with early mitigation actions considered.`,3:`A Benefits Realisation plan has been developed, which is a roadmap detailing how to achieve the benefits, how they will be tracked, including timings and responsibilities. This should hold a benefits baseline, the 'before' state measurements

Benefits are linked into to engagement activities to stakeholder groups to address 'What's in it for me?'

WIIFM Benefits are understood by all stakeholder groups.

Benefits planning is integrated into delivery and governance. Risks to benefits are actively monitored, reviewed, and managed alongside delivery risks.`,4:`Benefits are being tracked and monitored against the baseline plan. Particular focus on addressing poor user adoption that could affect benefits being realised, identified in the first 90 days post go live stabilisation period.

Stakeholders are being updated on benefits progress through regular reporting.

Benefits realisation is routinely planned, tracked and risk-managed. Emerging risks to benefits trigger timely decisions, adjustments, or re-prioritisation.`,5:`Benefits continue to be monitored, reviewed and evaluated to ensure they are on target to be realized, allowing for interventions if benefits are not accruing as expected.

Benefits planning and risk management are continuous and adaptive. Benefits are optimised over time, with proactive identification and management of future risks and opportunities.`}},change_impact:{"People Experience and Culture":{1:"Staff have been made aware about the change and it's impact at a high level but it's not well understood.",2:"The impact of the change is understood by people across the organisation but only at a higher level. This can be evidenced through stakeholder sentiment e.g. surveys.",3:"The impact of the change has been communicated to staff within their business unit including the difference between Future state processes and current state.",4:"The impact of the change is fully understood by staff within their business unit including the difference between Future state processes and current state. This can be evidenced through staff feedback and dialogue in team meetings.",5:"Post Deployment, staff are being fully engaged to understand the impact of the change (how it has landed, issues experienced, positive impacts and early benefits)."},"Planning and Risk":{1:"Impact of change assessed at a high level to understand how the change will affect organisation as a whole and key groups.",2:"The impact of the change is being assessed at business unit level using a Change Impact Assessment to assess impact of a change in processes.",3:"The change Impact Assessment is complete. The Change Manager is working with business units to ensure staff have been engaged about the impacts and that change interventions and appropriate support is being planned, particularly high impacted areas. Progress and risks are fed back to senior leadership to ensure visibility.",4:"The Change Impact Assessment is fully adopted as a tool to monitor the impact and readiness of business units across the organisation.",5:"Focus is moved from assessing and preparing for the impact to managing and monitoring the impact post go live. Interventions are planned and implemented where the change has impacted in a negative or unexpected way."}},risk_management:{"Planning and Risk":{1:"Approach to assessing change adoption risk has started and is being built into the governance framework and Change Management Strategy.",2:"Carried out a change risk assessment to identify and analyse the potential risks, issues, and barriers to adoption of the change. Risks should be validated.",3:"Developed a response strategy and actions to mitigate against the risks and a method/tool to track these actions.",4:"Communication of the identified risks and risk strategy to those involved in sponsoring, supporting, and putting a change into effect. Early actions towards mitigating risk are being put into place",5:"Actions to mitigate against risks are being implemented and tracked. Updates and reports on progress of risk management are being communicated to stakeholders."},"Process and Sustainment":{1:"Approach to assessing change adoption risk has started and is being built into the governance framework and Change Management Strategy.",2:"Carried out a change risk assessment to identify and analyse the potential risks, issues, and barriers to adoption of the change. Risks should be validated.",3:"Developed a response strategy and actions to mitigate against the risks and a method/tool to track these actions.",4:"Communication of the identified risks and risk strategy to those involved in sponsoring, supporting, and putting a change into effect. Early actions towards mitigating risk are being put into place",5:"Actions to mitigate against risks are being implemented and tracked. Updates and reports on progress of risk management are being communicated to stakeholders."}},cm_readiness:{"Strategic Direction and Leadership":{1:`At a high level, an organisational change readiness assessment has been carried out to identify the change readiness gap (how far the organisation is now from the future state). This could include factors such as expected resistance, capability and capacity levels and sponsorship coverage. This forms the baseline.

The assessment must have representation from all key senior stakeholders e.g. Clinical, Operational, Nursing, CIO and Programme Lead.`,2:`Change Management Strategy and plan are being developed. Although this may be created by the Change Lead and Change Team, the senior leadership team will own the strategy. They should have an input into the overall change approach for the organisation, aligning the strategy with organisational goals. The strategy should include key activities that the senior leadership team needs to own e.g. Change Vision.

The readiness assessment may highlight resources, capability and capacity gaps which will need to be built into the strategy and business case.

Change Readiness is on the agenda of change and programme governance meetings, so senior leadership have insight into progress on change readiness and highlights on progress of key change activities in the Change Plan.`,3:`Change Management Strategy and plan approved by the senior leadership team. Change Manager and team has been appointed for the change. Resources for implementation of the change have been identified and secured.

Senior leadership and programme team have sight of Overall Change Readiness progress and critical risk areas e.g. business areas highly impacted and low readiness.

Readiness Acceptance Criteria progress assessed leading up to Go Live.`,4:`Change Readiness should be improving as key interventions from the Change Management Plan are implemented. Senior Leadership Team should have visibility of areas in the organisation where readiness is low and impact of the change high.

Readiness Acceptance Criteria reviewed prior to Go Live as part of overall Go/No Go call.`,5:"Focus has shifted post go live from change readiness and planning to change adoption and reinforcement. Senior Leaders continue to meet and review progress to adoption and benefits."},"Planning and Risk":{1:`At a high level, a change readiness assessment has been carried out to identify the change readiness gap (how far the organisation is now from the future state). This forms the baseline.

The outputs of the readiness assessment will inform planning for the change and risk areas will be highlighted`,2:`Change Management Strategy and plan are being developed, taking into account the results of the change readiness assessment. It should be clear what the future state is, how to get there (the change activities required and timelines). The plan should include how the organisation will monitor adoption and ensure the change is embedded post go live.

Development of Readiness Acceptance Criteria to help guide the organisation in assessing its readiness from a change management perspective.

Change Manager is using a change impact assessment which looks at impact and readiness of business units for the change.`,3:`Change Management Strategy and plan finalised and been approved by senior leadership team.

The outputs from the change impact assessment allow business units to own and plan change interventions to improve readiness.`,4:`Change Management plan is being implemented.

Change Manager monitoring progress towards readiness across the organisation and refining the Change Management Plan were interventions are not effective.

Areas of high risk were readiness is low and change impact high are escalated to the Change Programme Board.`,5:`Focus has shifted post go live from change readiness and planning to change adoption and reinforcement.

Post Go Live interventions from the change management plan are implemented. The plan continues to be monitored and refined if necessary e.g. to address poor adoption levels in a particular area.`}},stakeholder:{"Strategic Direction and Leadership":{1:`Analysis of Stakeholder groups impacted by the change has started. This includes identification, categorisation and analysis.

Only high level messages about the change are being delivered at this point.

Senior leaders express support for the change, but engagement and communications lack a clear, shared direction`,2:`Stakeholder analysis completed. This work is now feeding into development of an Engagement and communications strategy and plan.

The strategy should include overall objectives, Audiences, Key messages, Approaches e.g. use of a change network. The plan should include how to implement the strategy – Who, what, when and to who.

Leaders provide clearer direction on why the change matters. Stakeholder engagement and communications are guided by an agreed narrative, with visible leadership sponsorship.`,3:`Engagement and comms strategy and plans have been approved and shared across the organisation.

Engagement activities are starting to filter down from high level to divisional level. Staff have greater awareness of what the change means for them, the impact and what will be different.

Feedback on the change and stakeholder sentiment mainly from senior sponsors and surveys.

Strategic direction is reinforced consistently by leaders. Engagement and communications are aligned to organisational priorities, with leaders actively role-modelling the change.`,4:`Stakeholders continue to be engaged, with impact of activities monitored. Stakeholders continually reviewed.

Engagement activities now becoming more role specific, focusing on building knowledge and skills for new ways of working. Staff should be supported by change champions and agents in their area, who will also feedback any concerns to the programme team through a Change Network.

Leadership uses engagement and communication deliberately to steer the change. Stakeholders experience consistent, credible direction through trusted leaders and governance structures.`,5:`Engagement of key stakeholders is being continuously monitored for their effectiveness, particularly areas where adoption of the change is low.

The Change Network is acting as a two-way conduit of information between the programme team and stakeholders impacted by the change. There is a more collaborative approach to engagement throughout the organisation.

Success stories around the change and adoption should be shared to inspire others.

Leaders treat engagement as continuous: they keep listening loops open, refresh the narrative as insight changes, and embed the practice as “how we lead change here” (reusing stakeholder analysis, WIIFM, and the change network for future changes).`},"People Experience and Culture":{1:`Analysis of Stakeholder groups impacted by the change has started. This includes identification, categorisation and analysis.

Only high level messages about the change are being delivered at this point.

Start stakeholder analysis (identify/categorise groups) and begin listening to staff concerns; introduce basic 2-way communication so people can ask questions and surface anxieties early, beyond high-level broadcast messages.`,2:`Stakeholder analysis completed. This work is now feeding into development of an Engagement and communications strategy and plan.

The strategy should include overall objectives, Audiences, Key messages, Approaches e.g. use of a change network. The plan should include how to implement the strategy – Who, what, when and to who.

Use completed stakeholder analysis to build an Engagement & Comms Strategy and Plan (audiences, key messages, who/when), and create structured opportunities for staff to shape the change through dialogue and feedback.`,3:`Engagement and comms strategy and plans have been approved and shared across the organisation.

Engagement activities are starting to filter down from high level to divisional level. Staff have greater awareness of what the change means for them, the impact and what will be different.

Feedback on the change and stakeholder sentiment mainly from senior sponsors and surveys.

Roll out the approved engagement & comms strategy/plan into divisions/teams so staff understand what's changing for them; use sentiment feedback (e.g., surveys/sponsor insight) to adjust messaging and support and keep confidence building.`,4:`Stakeholders continue to be engaged, with impact of activities monitored. Stakeholders continually reviewed.

Engagement activities now becoming more role specific, focusing on building knowledge and skills for new ways of working. Staff should be supported by change champions and agents in their area, who will also feedback any concerns to the programme team through a Change Network.

Make engagement role-specific (linked to what people must do differently), supported by change champions/agents and a Change Network that feeds local concerns back to the programme team; monitor engagement impact and respond quickly where confidence dips.`,5:`Engagement of key stakeholders is being continuously monitored for their effectiveness, particularly areas where adoption of the change is low.

The Change Network is acting as a two-way conduit of information between the programme team and stakeholders impacted by the change. There is a more collaborative approach to engagement throughout the organisation.

Success stories around the change and adoption should be shared to inspire others.

Sustain a collaborative, psychologically safe engagement culture: the Change Network operates as a trusted two-way conduit, engagement effectiveness is continuously monitored (especially where adoption is low), and success stories are shared to reinforce belief and motivation.`}},resistance:{"People Experience and Culture":{1:"Begin listening to staff to understand concerns, anxieties, and perceptions about the change, and identify where people may feel uncertain or disengaged.",2:`Create structured opportunities for staff to raise concerns and shape the change, using early engagement, feedback, and trusted change networks to address resistance.

Creation of Resistance Indicators (metrics) that can be used post go live e.g. Behavioural & Usage Metrics, Qualitative & Sentiment Metrics.`,3:"Actively respond to staff feedback and resistance themes, supporting managers and change champions to have honest conversations and build confidence in affected teams.",4:"Routinely monitor staff sentiment and behaviour, intervening early where confidence or engagement drops, and reinforcing positive behaviours through visible support and recognition.",5:"Embed a culture where staff feel safe to challenge, improve, and adapt to change, with resistance seen as insight that continuously strengthens engagement and adoption."},"Skills and Behaviour":{1:"Begin building basic awareness of the change, identifying where knowledge gaps and confidence issues may lead to resistance.",2:`Develop early capability-building activities to address skill gaps, using targeted guidance, manager conversations, and support from change champions.

Begin putting together a resistance plan.`,3:`Plan to manage resistance has been developed and approved. This forms part of the Change Management Plan.

Strengthen skills and behaviours through training, practice, and on-the-job support, enabling staff to respond constructively to the change.`,4:`Actions to manage resistance are being put into place in accordance with the Change Management Plan and areas of possible resistance are being regularly reviewed.(intel used from feedback surveys, Behavioural metrics, senior sponsors and Change Network)

Intervene where skills or confidence are limiting adoption, and reinforcing effective behaviours consistently.`,5:`Resistance continues to be tracked, with interventions put in place where there are still pockets of resistance and poor adoption. Resistance management plan continually reviewed and refined.

Embed continuous learning and improvement, with staff confidently adapting skills and behaviours and proactively supporting change as normal practice.`}},skills_learning:{"People Experience and Culture":{1:"Workshops started to identify future capabilities and skills and the skill gaps with current state. Training impact assessed to understand cost and resources of a training programme.",2:"Future capabilities and skills identified. A plan to address the gaps being developed including a training strategy. Needs to include how and when training will be delivered. Should also factor in support post go live e.g. refresher training.",3:`Training approach/ strategy has been created to include: structured training, hands on practice and on going support. Aim to have a plan in place to address skill gaps and strengthen capability.

Individuals affected by the change have a learning plan in place, so new skills and behaviours are consistently demonstrated in day-to-day work.`,4:"Training is being tested and refined before going live, SOPs being regularly reviewed to ensure that training matches the new ways of working",5:`Training programme fully up and running with an evaluation system in place. Training support materials reflect updated Standard operating procedures.

May be signs of an increase in some staffs fluency levels for new ways of working as business as usual.`},"Skills and Behaviour":{1:"Begin engaging with staff to understand how the change may affect them, creating early awareness and space for questions, concerns, and involvement.",2:"Put consistent engagement in place so staff feel informed, listened to, and supported, using feedback and dialogue to shape how the change is introduced.",3:"Strengthen trust and confidence by acting on staff feedback, supporting managers to lead change conversations, and normalising open discussion about impacts.",4:"Routinely monitor staff sentiment and experience, responding quickly where engagement or confidence dips, and reinforcing positive behaviours and participation.",5:"Embed a culture where people feel safe, valued, and motivated through change, with ongoing involvement, shared ownership, and high levels of trust and engagement."}},capability:{"People Experience and Culture":{1:`Awareness of the change is improving, and some engagement activity has taken place. However, understanding is still inconsistent, and many staff remain uncertain about what is expected of them.

Change Adoption metrics defined and linked to benefits.`,2:`Staff are becoming more informed and are starting to feel supported through engagement and communication.

Confidence is beginning to build, although it still varies across teams and roles.

Staff have given protected time for staff to invest in the change.`,3:`Most staff feel informed, involved, and supported through the change. Confidence is improving across the organisation, and people are more willing to engage and understand the new ways of working.

Staff have support from Change Agents and Change Champions with access to the right tools.`,4:"Staff feel confident in what is expected of them and are actively engaging with the change. There is a sense of ownership, and people are generally comfortable applying new ways of working in practice.",5:`Confidence is high across the organisation, and staff feel fully supported and engaged.

People take ownership of the change and contribute to improving and sustaining it as part of normal working.

Usage rates remain stable or increase without active change management intervention. Users are owning the change, identifying improvements independently. The “old way” of doing things has been forgotten.

Evidence of Benefits realisation is starting to be seen.`},"Skills and Behaviour":{1:`Initial thinking has started around the skills required, and some early learning needs have been identified. However, there is no consistent or structured approach to developing capability.

Change Adoption metrics defined and linked to benefits.`,2:`Training and support are being introduced, and staff are starting to build the knowledge and skills needed.

Early ways of working workshops increase staff knowledge of the change and the level of capability required.

Confidence is growing, but application in day-to-day work is still inconsistent.`,3:`Most staff have received the training and support they need and are applying new skills in practice. Confidence is improving, although some areas may still need reinforcement or additional support.

Staff have support from Change Agents and Change Champions with access to the right tools.`,4:`Staff are consistently demonstrating the required skills and behaviours in their roles. New ways of working are being applied reliably, with reduced reliance on additional support.

Staff move beyond basic compliance to genuine proficiency, integrating it into their daily work patterns.

Usage and proficiency levels ae being measured to understand initial adoption. Reinforcement targets areas of low adoption.`,5:`Continuous learning is part of normal practice. Staff maintain and develop their skills over time and adapt confidently as the change evolves.

The programme has handed ownership for future skills requirements over to BAU.`}},change_adoption:{"Process and Sustainment":{1:`Baselines for processes are being established to accurately track progress e.g. productivity metrics.

Metrics to measure adoption of future processes are being developed.

Staff are developing their awareness and knowledge of future processes in their areas.`,2:`Staff are trained in the future processes.

Metrics to measure adoption of future processes have been developed.`,3:`People begin using the new system and following the new process. At this stage the majority of impacted staff are demonstrating basic compliance.

Usage and proficiency levels are being measured to understand initial adoption in first 30 days since go live.`,4:`Staff confidence in following the new processes has increased through time, practice and the support of coaching and role models who provide constructive feedback.

Users move beyond basic compliance to genuine proficiency, integrating it into their daily work patterns.

By 90 days since the go live, reports should be highlighting lower error rates, improved processing times and lower support ticket volumes. At this stage a Post Implementation Review should be conducted.

Reinforcement measures targeted at areas of low adoption.`,5:`The highest level of adoption is being achieved through sustained use of new processes. Staff understand and value the change.

Usage rates remain stable or increase without active change management intervention. Users are owning the change, identify improvements independently. The “old way” of doing things has been forgotten.`},"Skills and Behaviour":{1:`The skills and behaviours expected for the change are being developed to allow future measurement of adoption.

What successful behavior looks like is defined and baselined.`,2:`Plans in place to drive skills and behaviour change towards their targets. These should be built into the Change Management Plan.

A behavioural model such as COM-B (Capability, Opportunity, Motivation & Behaviour) is being developed to assist behavioural readiness for the change.

Behavioural metrics to be used and compared to the baseline post go live are being developed. This should include qualitative and quantitative.`,3:`Pre-Go Live, staff across the organisation have the knowledge and skills to perform new tasks.

Staff have the opportunity to develop their behaviours through the removal of any environmental barriers, being provided with the right tools and supported by Change Agents.

Through targeted engagement and WIIFM Benefits staff motivation for the change has increased.`,4:`Post Go LIve, Skills and Behaviour metrics are being used to measure change adoption. This will include both qualitative and quantitative data to understand what is happening and why.

Where behaviour is not as expected e.g. workarounds used, then interventions should be planned and implemented.

There should be signs of an improvement in skills and behaviours post stabilisation period after go live.`,5:`Staff are displaying behaviours that require less change management intervention.

Users are owning the change, identify improvements independently. The “old way” of doing things has been forgotten.`}},process_change:{"Process and Sustainment":{1:"Initial current state process mapping workshops have been arranged or in early progress involving stakeholders impacted by those processes",2:`Discussions on future state processes have begun with a clearly defined owner. Comparison with current process on going, with gaps and streamlining opportunities identified.

Changes of processes are linked to benefits.`,3:"Future state processes have been identified and mapped with a clearly defined owner. Comparison with current process complete, gaps identified. Discussion about the transition phase is on-going with key stakeholders to ensure safety.",4:"Future state processes are being trialled. Work in progress to address gaps with current process e.g. updating SOPs, training materials. Transition agreed with all key stakeholders and communicated to all.",5:`Future state processes have been trialled and are in use. Each process has an updated and signed off SOP with training materials complete.

Embed continuous process improvement, with sustained ownership, benefits monitoring, and refinement of processes so they remain effective and business as usual.`},"Skills and Behaviour":{1:"Begin helping staff understand which processes will change and where new skills or behaviours may be required in the future.",2:"Build early capability by involving staff in process discussions and supporting them to understand how their roles and ways of working will need to change.",3:"Strengthen skills and confidence through training, practice, and support so staff can consistently follow new or updated processes in day-to-day work.",4:"Monitor how well new processes are being applied in practice, addressing skill gaps or inconsistent behaviours that limit effective adoption.",5:"Embed strong process capability, with staff confidently applying, improving, and sustaining new ways of working as normal practice."}},reinforcement:{"People Experience and Culture":{1:"Begin considering how staff will be supported after go-live, including how their experience, feedback, and early concerns will be listened to and acknowledged.",2:`Systems to track adoption and tactics to foster reinforcement in planning stage. This could include dashboards to visualize compliance, trends and pockets of resistance, and recognition of successes to build confidence and trust

Method for gathering feedback from those impacted by the change being developed. This may involve feedback surveys and use of a Change Network.`,3:"Actively respond to staff feedback, reinforcing positive experiences, addressing concerns quickly, and supporting managers to sustain engagement and confidence.",4:`System to track adoption and foster reinforcement should now be up and running for early adopters. Routinely monitor staff experience and sentiment post-implementation, reinforcing new ways of working through recognition, support, and visible leadership commitment.

Early successes communicated and celebrated, recognising and rewarding staff that are engaging in the process.`,5:"Embed a culture where people feel valued, listened to, and motivated, with ongoing reinforcement that sustains engagement and makes the change feel owned and normal."},"Process and Sustainment":{1:"Initial assessment/workshop to build on the measurable outcomes defined in the case for change, and create an overall approach to track progress, how new ways of working will be sustained beyond implementation and ensure reinforcement.",2:"Put basic mechanisms in place to track adoption and performance, using early data and feedback to inform reinforcement planning.",3:"Implement structured reinforcement activities, supported by clear ownership, regular monitoring, and actions to address adoption gaps.",4:`Routinely use adoption and performance data (e.g., usage, compliance, quality, and support trends) alongside structured feedback from staff and change networks to reinforce the new processes.

Review insights on a regular basis, identify hotspots where impact is high and readiness/adoption is low, agree clear corrective actions and owners, and track progress to closure.

Ensure issues are addressed quickly, learning is fed back into SOPs/training/communications, and accountability is embedded in BAU so the change remains stable and continuously improves.`,5:`System to track adoption and usage of new solution fully in use and highlighting where reinforcement needed.

Reinforcement activities being implemented and adjusted based on their success.

Feedback mechanisms such as the Change Network highlighting any pockets of resistance to new ways of working and also highlighting successful adoption and benefits.

Benefits are being realised and sharing these will reinforce the change.`}},org_maturity:{"Strategic Direction and Leadership":{1:`An Executive Sponsor has been appointed for Change Management in the organisation.

Light touch governance for change (roles, cadence, decisions) with initial resourcing has been set up.`,2:`An SRO-led sponsor coalition for change management has been formed.

A Change Management strategy and standards have been approved to be used across the organisation with investment in change capability at all levels including accreditation.

Senior leaders are being upskilled in Change Management`,3:`The standard change management approach has been integrated into programme governance and portfolio processes. The approach has been communicated to all areas of the organisation.

Senior leadership change management capability is increasing and being practiced.`,4:`The agreed standard change management approach is being used across most initiatives.

There is active and visible senior leadership support for change management capability in the organisation with Executives assuming the role of change sponsors on every new project.`,5:`The agreed standard change management approach is being used across all initiatives.

There is higher ROI, lower productivity loss and less employee resistance to change across the organisation.

A governance model and centre of excellence for change management is fully in place. This includes a programme of continuous learning and improvement from previous projects based on adoption performance and benefits realised.`},"Skills and Behaviour":{1:`Some elements of change management, tools and techniques are being applied on isolated projects.

A change management skills assessment has been completed to give a baseline of current change capability in the organisation.

Limited amount of change leaders/managers who can guide and enable practitioners.

At least one representative from the organisation should have joined FuturesNHS Change Management Network`,2:`A Change Management learning pathway is in place that details the change skills and behaviours needed at all tiers (senior decision makers, managers and practitioners)

The first pilot cohort of staff in the organisation have been upskilled and accredited in change management.

Membership of FuturesNHS Change Management Network is increasing.`,3:`The agreed standard CM approach is being applied to multiple projects.

Leaders actively model behaviours, review readiness/adoption insights, and remove barriers.

There is an increase of senior decision makers, managers and practitioners who have been accredited in change management.

There is strong membership on FuturesNHS Change Management Network with members downloading tools.`,4:`The agreed standard change management approach is being applied to most projects.

The organisation has a large number of accredited change professionals at all 3 organisational tiers (practitioners, managers and senior decision makers).

The organisation has a large number of active users on FuturesNHS Change Management Network.`,5:`The agreed standard change management approach is being applied to all projects.

Change Management has become second nature across the organisation with high competency in change skills and behaviour evident.

The organisation has a wide coverage of change advocates working on continuously promoting and improving the practice of change management.`}},transfer_bau:{"Strategic Direction and Leadership":{1:"Leaders are beginning to consider how the change will be sustained, but ownership and accountability are still unclear or not yet agreed.",2:`Ownership for the change in BAU has been identified, and leaders are starting to take responsibility for sustaining outcomes.

Direction is becoming clearer, although it is not yet fully embedded.`,3:`Leadership ownership is clearly established and visible.

Leaders are supporting teams to maintain the change and reinforcing expectations in day-to-day management.`,4:`Leaders are accountable for sustaining the change and actively reinforce it through routine decision-making and leadership activity.

The change is treated as part of normal organisational priorities.`,5:`Leadership continues to strengthen and improve the change over time, using insight and feedback to adapt.

Ownership is fully embedded, and the change no longer relies on programme support.`},"Process and Sustainment":{1:"Early discussions have begun around how the change will be sustained. Some consideration is being given to processes and measures, but nothing is fully defined or implemented.",2:`Processes and ownership structures are being established to support the change.

There is a clearer plan for sustainment, although it is still being embedded and tested.`,3:"Key processes, roles, and measures are in place and being followed. The change is being maintained in practice, with issues identified and addressed as they arise.",4:"The change is embedded into day-to-day operations. Processes are consistently followed, and performance is stable, with benefits starting to be realised.",5:"The change is fully sustained as “the way we do things.” Processes are regularly reviewed and improved, and performance continues to strengthen over time."}}},Ft={1:{vision:5,case_for_change:5,sponsorship:1,change_network:1,benefits:1,change_impact:1,risk_management:1,cm_readiness:1,stakeholder:1,resistance:1,skills_learning:1,capability:1,change_adoption:1,process_change:1,reinforcement:1,org_maturity:1,transfer_bau:1},2:{vision:5,case_for_change:5,sponsorship:2,change_network:2,benefits:3,change_impact:2,risk_management:2,cm_readiness:2,stakeholder:2,resistance:2,skills_learning:2,capability:2,change_adoption:2,process_change:3,reinforcement:2,org_maturity:2,transfer_bau:2},3:{vision:5,case_for_change:5,sponsorship:3,change_network:3,benefits:4,change_impact:3,risk_management:3,cm_readiness:3,stakeholder:3,resistance:3,skills_learning:4,capability:3,change_adoption:3,process_change:4,reinforcement:3,org_maturity:3,transfer_bau:3},4:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:4,stakeholder:5,resistance:4,skills_learning:5,capability:4,change_adoption:4,process_change:5,reinforcement:4,org_maturity:4,transfer_bau:4},5:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:5,stakeholder:5,resistance:5,skills_learning:5,capability:5,change_adoption:5,process_change:5,reinforcement:5,org_maturity:5,transfer_bau:5}};function pt(n,t,s){return!t||!Ft[t]?s:Ft[t][n]??s}function Ni(n){const t=Number((n==null?void 0:n.score)||0),s=((n==null?void 0:n.actions)||[]).some(a=>a.readinessScore===0);return t===0&&!s?1:t}function Ci(n,t){const s=[];return n.lenses.forEach(a=>{const i=t(n.id,a),r=Ni(i);((i==null?void 0:i.actions)||[]).forEach(o=>{(o.readinessScore??r)===r&&!qt(o.status)&&s.push({id:o.id,text:o.text,lens:a,owner:o.owner||"",status:o.status||"",dueDate:o.dueDate||""})})}),s}function pa(n,t,s){return n.filter(a=>a.phase===s).map(a=>{const i=Ci(a,t),{status:r,reason:o}=yi(i),u=`${i.length} action${i.length===1?"":"s"} pending completion.`;return{componentId:a.id,componentLabel:a.label,phase:a.phase,gapToTarget:0,bragStatus:r,bragReason:o,summary:u,message:`${a.label}: ${u}`,outstandingActions:i}}).filter(a=>a.outstandingActions.length>0).sort((a,i)=>{const r={Red:0,Amber:1,Green:2,Blue:3};return r[a.bragStatus]!==r[i.bragStatus]?r[a.bragStatus]-r[i.bragStatus]:i.outstandingActions.length-a.outstandingActions.length})}function Ns(n,t){var A;let s=0,a=0,i=0,r=0;const o=new Map;t.forEach(_=>{const h=o.get(_.phase)||{componentCount:0,assessedLenses:0,totalLenses:0,onTrackComponents:0,totalActions:0,completedActions:0};h.componentCount+=1,h.totalLenses+=_.lenses.length;let M=0;_.lenses.forEach(D=>{var I;const j=(I=n.currentDraft[_.id])==null?void 0:I[D],q=Number((j==null?void 0:j.score)||0);s+=q,M+=q,q>0&&(a+=1,h.assessedLenses+=1),((j==null?void 0:j.actions)||[]).forEach(ee=>{i+=1,h.totalActions+=1,qt(ee.status)&&(r+=1,h.completedActions+=1)})});const U=_.lenses.length?Number((M/_.lenses.length).toFixed(1)):0,te=pt(_.id,_.phase,_.target);U>=te&&(h.onTrackComponents+=1),o.set(_.phase,h)});const u=t.reduce((_,h)=>_+h.lenses.length,0),c=u*5,f=c?Math.round(s/c*100):0,l=i?Math.round(r/i*100):0,x=[...o.entries()].sort(([_],[h])=>_-h).map(([_,h])=>{const M=h.totalActions?Math.round(h.completedActions/h.totalActions*100):0,U=h.componentCount?h.onTrackComponents/h.componentCount:0,te=U>=.75&&M>=50?"Green":U>=.4||M>=25?"Amber":"Red";return{phase:_,componentCount:h.componentCount,assessedLenses:h.assessedLenses,totalLenses:h.totalLenses,onTrackComponents:h.onTrackComponents,actionCompletionPct:M,rag:te}}),b=x.find(_=>_.onTrackComponents<_.componentCount),S=(b==null?void 0:b.phase)||((A=x[x.length-1])==null?void 0:A.phase)||1,d=pa(t,(_,h)=>{var M;return(M=n.currentDraft[_])==null?void 0:M[h]},S);return{totalCurrent:s,assessedCount:a,totalExpected:u,overallPct:f,totalActions:i,completedActions:r,actionCompletionPct:l,currentPhase:S,phaseSummaries:x,nextSteps:d}}function Ei(n,t,s,a){return t.map(i=>{let r=0,o=0;return s.forEach(u=>{u.lenses.includes(i)&&(r+=Number(a(u.id,i).score||0),o+=1)}),o?Number((r/o).toFixed(1)):0})}function ki(n,t){return n.map(s=>{let a=0,i=0;return t.forEach(r=>{r.lenses.includes(s)&&(a+=r.target,i+=1)}),i?Number((a/i).toFixed(1)):0})}function ji(n,t,s,a){const i=Ei(n,t,s,a),r=ki(t,s);return{labels:t,datasets:[{label:"Current Score",data:i,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",borderWidth:2,pointRadius:4,pointHoverRadius:6},{label:"Target",data:r,borderColor:"#00A499",backgroundColor:"rgba(0, 164, 153, 0.05)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function Ii(n,t,s){const a=s&&Ft[s]?s:null,i=o=>o<=0?"#768692":o<1.5?"#AE2521":o<2.5?"#FFB81C":o<3.5?"#005EB8":o<4.5?"#330072":"#00A499",r=n.map(o=>{const u=o.lenses.reduce((c,f)=>c+Number(t(o.id,f).score||0),0);return Number((u/o.lenses.length).toFixed(1))});return{labels:n.map(o=>o.label),datasets:[{label:"Current Average Readiness",data:r,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.12)",borderWidth:2,pointRadius:4,pointHoverRadius:6,pointBackgroundColor:r.map(i),pointBorderColor:r.map(i)},{label:a?`Exemplar (Phase ${a})`:"Target Average",data:n.map(o=>pt(o.id,a||void 0,o.target)),borderColor:"#94a3b8",backgroundColor:"rgba(148, 163, 184, 0.06)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function Ai(n,t,s){const a=[],i=new Set,r=(o,u,c)=>{const f=`${c.id}:${o}:${u}`;if(i.has(f))return;i.add(f);const l=t(o);a.push({compId:o,component:l.label,lens:u,action:{...c}})};return Object.keys(n.currentDraft).forEach(o=>{Object.keys(n.currentDraft[o]).forEach(u=>{(s(o,u).actions||[]).forEach(f=>{(f.linkedTargets&&f.linkedTargets.length?f.linkedTargets:[{componentId:o,lens:u}]).forEach(x=>{r(x.componentId,x.lens,f)})})})}),a}function _i(n,t,s){var c;const a=((c=n.objectives)==null?void 0:c[t])||[],i=f=>f.reduce((l,x)=>(l[x]=s(t,x).actions,l),{}),r=Array.from(new Set(a.flatMap(f=>f.linkedActions.map(l=>l.lens)))),o=i(r),u=a.filter(f=>Tt(f,o)==="Completed").length;return{total:a.length,completed:u}}const Cs=7*24*60*60*1e3,Oi=30*24*60*60*1e3;function Ri(n,t,s){const a=[];t.phaseSummaries.forEach(d=>{const A=ln[d.phase]||`Phase ${d.phase}`;a.push({id:`phase-${d.phase}-assessed`,category:"Phase",label:`Phase ${d.phase}: ${A} - fully assessed`,description:"Every lens across this phase's components has been scored.",completed:d.totalLenses>0&&d.assessedLenses===d.totalLenses}),a.push({id:`phase-${d.phase}-on-track`,category:"Phase",label:`Phase ${d.phase}: ${A} - on track`,description:"Every component in this phase is scoring at or above its exemplar target for where the programme is now.",completed:d.componentCount>0&&d.onTrackComponents===d.componentCount})});const i=Object.values(n.currentDraft).flatMap(d=>Object.values(d).flatMap(A=>A.actions||[]));a.push({id:"all-actions-owned",category:"Ownership",label:"Every action has an owner",description:"No actions are left unassigned.",completed:i.length>0&&i.every(d=>{var A;return!!((A=d.owner)!=null&&A.trim())})});const r=Object.values(n.objectives||{}).flat();a.push({id:"all-outcomes-owned",category:"Ownership",label:"Every outcome has an owner",description:"No outcomes are left unassigned.",completed:r.length>0&&r.every(d=>{var A;return!!((A=d.owner)!=null&&A.trim())})});const o=Date.now(),u=n.auditLog||[],c=u.filter(d=>o-new Date(d.timestamp).getTime()<=Cs);a.push({id:"active-this-week",category:"Cadence",label:"Active this week",description:"At least one update has been made in the last 7 days.",completed:c.length>0});const f=new Set;u.forEach(d=>{const A=Math.floor((o-new Date(d.timestamp).getTime())/Cs);A>=0&&A<4&&f.add(A)}),a.push({id:"four-week-cadence",category:"Cadence",label:"Steady progress: updated every week for a month",description:`${f.size}/4 of the last 4 weeks have at least one update.`,completed:f.size>=4}),a.push({id:"month-finalised",category:"Cadence",label:"This month finalised",description:"The current month has a finalised snapshot, so progress this month is captured for the trend.",completed:(n.history||[]).some(d=>d.monthLabel===s)});const l=n.orgProfile.teamMembers||[];a.push({id:"team-roster-started",category:"Team",label:"Team roster started",description:"At least 2 team members have been added.",completed:l.length>=2});const x=u.filter(d=>o-new Date(d.timestamp).getTime()<=Oi),b=new Set(x.map(d=>d.actor));a.push({id:"multiple-contributors",category:"Team",label:"Multiple contributors this month",description:"More than one person has made updates in the last 30 days.",completed:b.size>=2});const S=new Set(i.map(d=>{var A;return(A=d.owner)==null?void 0:A.trim().toLowerCase()}).filter(d=>!!d));return a.push({id:"ownership-spread",category:"Team",label:"Ownership spread across the team",description:"Actions are owned by more than one person, not concentrated on one.",completed:S.size>=2}),a}const Pi=`Pathway 1 - We are starting $projectName for the first time
Vision
Are you on track?
Descriptor: Organisations are defining what $projectName is for and why it matters for care and staff
experience.
☐ Define a clear purpose for $projectName focused on improving patient care and clinician experience.
☐ Articulate how $projectName improves interaction, workflow and time back to care.
☐ Align the vision with organisational priorities and local pressures.
☐ Position $projectName as service transformation, not just a technology deployment.
☐ Develop a simple, repeatable explanation of $projectName in plain English.
☐ Ensure leaders and early adopters communicate the same core message.
☐ Test understanding with frontline staff and refine the message based on feedback.
☐ Explain what will change in practice, not just why $projectName exists for different staff groups.
ARE YOU ON TRACK? – VISION
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted $projectName and need to scale up
Vision
Are you on track?
Descriptor: Organisations are ensuring the vision is understood, consistent and reinforced across
teams.
☐ Ensure the vision is understood consistently across teams and services.
☐ Reinforce the purpose of $projectName through leaders, champions and day-to-day conversations.
☐ Use real examples from early adopters to show how $projectName improves care and experience.
☐ Challenge misconceptions such as ‘just dictation’ or ‘just a productivity tool’.
☐ Keep the vision focused on patient outcomes and staff experience.
☐ Ensure teams understand how $projectName changes behaviours and workflows.
☐ Repeat and refresh messaging regularly as rollout expands.
ARE YOU ON TRACK? – VISION
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - $projectName is live but adoption is patchy
Vision
Are you on track?
Descriptor: Organisations are correcting misunderstanding and reinforcing the original purpose of
$projectName.
☐ Ask staff what they believe $projectName is for and identify inconsistencies.
☐ Identify where $projectName is being used as dictation rather than as intended.
☐ Pinpoint where the vision has become diluted or misunderstood.
☐ Reset the purpose of $projectName using simple, practical language.
☐ Reinforce the vision through visible local clinical leadership.
ARE YOU ON TRACK? – VISION
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting $projectName for the first time
Case for Change
Are you on track?
Descriptor: Organisations are building a credible, evidence-based reason for $projectName.
☐ Define the core problem $projectName is solving for your organisation.
☐ Use local evidence to show the scale of the problem.
☐ Link $projectName to real frontline pain points for clinical and admin teams.
☐ Align the case for change with organisational priorities.
☐ Focus the case on staff experience and patient care, not just efficiency.
☐ Avoid over-promising productivity gains at this stage.
☐ Test whether frontline staff recognise and agree with the case being made.
ARE YOU ON TRACK? – CASE FOR CHANGE
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted $projectName and need to scale up
Case for Change
Are you on track?
Descriptor: Organisations are strengthening and validating the case using real evidence.
☐ Update the case for change using real pilot data and staff experience.
☐ Show how $projectName is improving workflow, experience or care in early adopters.
☐ Ensure the case is understood consistently across services.
☐ Tailor the case to different teams and specialties.
☐ Balance qualitative benefits with measurable indicators.
☐ Reinforce the case through leaders and champions.
ARE YOU ON TRACK? – CASE FOR CHANGE
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - $projectName is live but adoption is patchy
Case for Change
Are you on track?
Descriptor: Organisations are reconnecting $projectName to real pressures and needs.
☐ Ask staff whether $projectName is solving a meaningful problem for them.
☐ Identify where the original case for change no longer resonates.
☐ Pinpoint whether resistance is driven by experience, workflow or perception.
☐ Reset the case using local, credible examples.
☐ Challenge the perception that $projectName adds work without value.
ARE YOU ON TRACK? – CASE FOR CHANGE
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting $projectName for the first time
Senior Sponsorship and Governance
Are you on track?
Descriptor: Organisations are establishing governance structures and decision-making for $projectName.
☐ Identify a credible clinical sponsor and an executive sponsor for $projectName.
☐ Define clear ownership across clinical, operational, digital and governance teams.
☐ Establish a governance structure with the right representation.
☐ Agree how key decisions will be made and escalated.
☐ Involve Information Governance and clinical safety early.
☐ Align $projectName governance to existing trust governance structures.
☐ Clarify expectations for clinician accountability and sign-off.
☐ Ensure sponsors can clearly explain why $projectName matters.
ARE YOU ON TRACK? – SENIOR SPONSORSHIP AND GOVERNANCE
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted $projectName and need to scale up
Senior Sponsorship and Governance
Are you on track?
Descriptor: Organisations are maintaining active sponsorship and consistent governance as rollout
expands.
☐ Keep sponsors visible and active beyond initial rollout.
☐ Use governance forums to review adoption, risk and emerging issues.
☐ Ensure decision-making is timely and responsive to frontline issues.
☐ Maintain active involvement from clinical safety, IG and operational leaders.
☐ Align governance decisions across services to reduce fragmentation.
☐ Monitor where ownership is unclear or inconsistent.
☐ Support local leaders to take service-level ownership of adoption.
ARE YOU ON TRACK? – SENIOR SPONSORSHIP AND GOVERNANCE
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - $projectName is live but adoption is patchy
Senior Sponsorship and Governance
Are you on track?
Descriptor: Organisations are fixing gaps in accountability, ownership and decision-making.
☐ Identify where ownership is unclear or absent.
☐ Confirm who is responsible for addressing adoption issues locally.
☐ Re-engage sponsors where visibility or support has reduced.
☐ Use governance to prioritise and unblock barriers to use.
☐ Clarify accountability for safe use and record validation.
ARE YOU ON TRACK? – SENIOR SPONSORSHIP AND GOVERNANCE
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting $projectName for the first time
Benefits and WIIFM
Are you on track?
Descriptor: Organisations are defining the benefits that matter for staff, patients and services.
☐ Define clear, realistic benefits for staff, patients and services before rollout begins.
☐ Prioritise the benefits that matter most for the pilot setting and use case.
☐ Link expected benefits directly to the case for change and vision for $projectName.
☐ Agree how benefits will be measured using both qualitative and quantitative evidence.
☐ Set realistic expectations about when benefits are likely to emerge and where they may be limited.
ARE YOU ON TRACK? – BENEFITS AND WHAT’S IN IT FOR ME (WIIFM)
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted $projectName and need to scale up
Benefits and WIIFM
Are you on track?
Descriptor: Organisations are using real evidence to strengthen and spread the benefits case.
☐ Capture real benefit evidence from early adopters and pilot services.
☐ Compare expected benefits against actual experience across different teams and settings.
☐ Share examples of realised benefits in a way that is meaningful to different staff groups.
☐ Refine benefit assumptions where early rollout shows variation by workflow or specialty.
☐ Track both experience-based benefits and operational signals as rollout expands.
☐ Use benefit evidence to inform decisions about wider rollout, pace and targeting.
☐ Keep reinforcing the benefits that matter most to staff, not just the ones easiest to report.
ARE YOU ON TRACK? – BENEFITS AND WHAT’S IN IT FOR ME (WIIFM)
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - $projectName is live but adoption is patchy
Benefits and WIIFM
Are you on track?
Descriptor: Organisations are rebuilding belief where benefits are unclear or not being realised.
☐ Identify where expected benefits are not being realised in practice.
☐ Diagnose whether weak benefits are driven by adoption, workflow, capability or poor fit.
☐ Reset unrealistic or misunderstood expectations where needed.
☐ Refocus attention on benefits that matter to staff and patients in that setting.
☐ Use relevant local examples to rebuild belief where benefit claims have lost credibility.
☐ Stop relying on theoretical benefit claims that staff no longer recognise as real.
ARE YOU ON TRACK? – BENEFITS AND WHAT’S IN IT FOR ME (WIIFM)
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting $projectName for the first time
Stakeholder Engagement and Communication
Are you on track?
Descriptor: Organisations are building early awareness, trust and understanding.
☐ Define clear, simple messages about what $projectName is and what it is not.
☐ Explain why $projectName is being introduced in terms staff care about.
☐ Identify key stakeholder groups across clinical, admin, operational and digital areas.
☐ Tailor messages to different roles and workflows.
☐ Identify early adopters and involve them early.
☐ Set realistic expectations about early challenges and learning curves.
ARE YOU ON TRACK? – STAKEHOLDER ENGAGEMENT AND
COMMUNICATION
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted $projectName and need to scale up
Stakeholder Engagement and Communication
Are you on track?
Descriptor: Organisations are reinforcing messaging and maintaining consistency across teams.
☐ Ensure communication is consistent across services and teams.
☐ Reinforce messages through leaders, champions and everyday conversations.
☐ Share real examples of $projectName use in practice.
☐ Communicate how $projectName is improving care and experience locally.
☐ Challenge misinformation and unhelpful narratives.
☐ Keep feedback channels visible and accessible.
☐ Use feedback to adapt messaging and address emerging concerns.
☐ Re-engage teams where rollout has been slower or more complex.
ARE YOU ON TRACK? – STAKEHOLDER ENGAGEMENT AND
COMMUNICATION
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - $projectName is live but adoption is patchy
Stakeholder Engagement and Communication
Are you on track?
Descriptor: Organisations are addressing confusion, disengagement and mixed messages.
☐ Identify where communication has become unclear or inconsistent.
☐ Map which teams or roles are disengaged or poorly informed.
☐ Address specific concerns openly, including trust, accuracy and workflow impact.
☐ Use peer-led conversations to rebuild credibility.
☐ Share relevant examples from comparable teams.
☐ Re-establish regular communication where it has dropped away.
ARE YOU ON TRACK? – STAKEHOLDER ENGAGEMENT AND
COMMUNICATION
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting $projectName for the first time
Process Change and Ways of Working
Are you on track?
Descriptor: Organisations are designing $projectName-enabled workflows across clinical and administrative
practice.
☐ Map current clinical and administrative workflows before introducing $projectName.
☐ Identify where documentation burdens, delays and handoff issues currently occur.
☐ Define future workflows that incorporate $projectName into real operational practice.
☐ Involve clinicians, admin staff and operational teams in designing new workflows.
☐ Define how $projectName fits into consultations, documentation and follow-up processes.
☐ Design how clinical and admin handoffs will work with $projectName in place.
☐ Identify where workflows differ by service or specialty.
☐ Test new workflows in practice and refine them before wider rollout.
☐ Ensure operational leaders are involved in agreeing and owning new ways of working.
ARE YOU ON TRACK? – PROCESS CHANGE AND WAYS OF WORKING
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted $projectName and need to scale up
Process Change and Ways of Working
Are you on track?
Descriptor: Organisations are embedding and standardising $projectName-enabled workflows across services.
☐ Define clear and repeatable workflows for $projectName-enabled practice.
☐ Update SOPs and operational guidance to reflect those workflows.
☐ Clarify roles and responsibilities across clinical and admin teams.
☐ Standardise key handoffs while allowing for local service differences.
☐ Manage variation actively rather than letting teams evolve ad hoc practices.
☐ Monitor where workflows are breaking down or not being followed.
☐ Address behavioural and operational barriers to adopting new processes.
☐ Support services to adapt workflows locally while maintaining core standards.
ARE YOU ON TRACK? – PROCESS CHANGE AND WAYS OF WORKING
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - $projectName is live but adoption is patchy
Process Change and Ways of Working
Are you on track?
Descriptor: Organisations are fixing broken workflows and removing workarounds.
☐ Identify where teams are not following the intended workflow.
☐ Spot where staff are reverting to old processes or workarounds.
☐ Pinpoint the specific parts of the workflow that are failing.
☐ Retire old processes that are still running in parallel.
☐ Reinforce correct workflows through local leadership and support.
☐ Remove practical barriers preventing teams from using $projectName properly.
ARE YOU ON TRACK? – PROCESS CHANGE AND WAYS OF WORKING
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting $projectName for the first time
Change Impact and Risk
Are you on track?
Descriptor: Organisations are understanding who is impacted and where risk sits before rollout.
☐ Identify all roles impacted by $projectName across clinical, admin and operational areas.
☐ Define how workflows, responsibilities and behaviours will change for each role.
☐ Assess where impact differs across specialties and services.
☐ Identify high-risk use cases and workflows early.
☐ Engage impacted staff to validate and refine identified impacts.
☐ Assess risks relating to safety, accuracy and workflow disruption.
☐ Define how key risks will be monitored and mitigated during the pilot.
ARE YOU ON TRACK? – CHANGE IMPACT AND RISK
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted $projectName and need to scale up
Change Impact and Risk
Are you on track?
Descriptor: Organisations are monitoring real-world impact and managing emerging risks.
☐ Monitor how impacts vary across teams and settings as rollout expands.
☐ Identify where changes are not delivering expected outcomes.
☐ Track risks emerging from real use, including workarounds and delays.
☐ Gather structured feedback from impacted staff groups.
☐ Adjust workflows and expectations based on real-world impact.
☐ Review impact and risk regularly through governance routes.
ARE YOU ON TRACK? – CHANGE IMPACT AND RISK
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - $projectName is live but adoption is patchy
Change Impact and Risk
Are you on track?
Descriptor: Organisations are addressing the impacts and risks that are limiting adoption.
☐ Identify where $projectName is creating unintended burden, frustration or risk.
☐ Pinpoint the roles or teams most negatively impacted.
☐ Distinguish between real risks, perceived risks and misunderstood risks.
☐ Address the specific issues preventing safe and confident use.
☐ Focus support on the highest-risk and most impacted areas.
ARE YOU ON TRACK? – CHANGE IMPACT AND RISK
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting $projectName for the first time
Skills, Learning, Capability and Confidence
Are you on track?
Descriptor: Organisations are introducing role-based learning and practical support.
☐ Design learning around real clinical and administrative workflows rather than system features alone.
☐ Show staff how $projectName fits their role, tasks and day-to-day practice.
☐ Provide practical hands-on opportunities to try $projectName in relevant scenarios.
☐ Make support available during early live use, not just before go-live.
☐ Set expectations that confidence will build through use and repetition.
☐ Explain what good use looks like in practice for different roles and settings.
ARE YOU ON TRACK? – SKILLS, LEARNING, CAPABILITY AND CONFIDENCE
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted $projectName and need to scale up
Skills, Learning, Capability and Confidence
Are you on track?
Descriptor: Organisations are reinforcing learning through real use and ongoing support.
☐ Reinforce learning through repetition and real-world use across services.
☐ Encourage peer-to-peer learning and sharing of practical tips between teams.
☐ Provide support at the point of need during real workflows and live sessions.
☐ Update learning materials based on user feedback and common issues.
☐ Build local capability within teams so support is not dependent on one person or one central team.
☐ Monitor confidence across different professions, specialties and settings.
☐ Refresh learning and support when rollout expands into new services or contexts.
☐ Revisit support after breaks, rota changes or service moves so learning is sustained.
ARE YOU ON TRACK? – SKILLS, LEARNING, CAPABILITY AND CONFIDENCE
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - $projectName is live but adoption is patchy
Skills, Learning, Capability and Confidence
Are you on track?
Descriptor: Organisations are closing capability gaps that are preventing confident use.
☐ Identify where staff lack confidence or practical capability to use $projectName well.
☐ Target support to the roles, teams or services where capability gaps are most visible.
☐ Deliver support in the workflow rather than relying on more classroom-style training.
☐ Use local super users to model and reinforce good practice in real settings.
☐ Address the specific capability gaps that are preventing consistent use.
ARE YOU ON TRACK? – SKILLS, LEARNING, CAPABILITY AND CONFIDENCE
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting $projectName for the first time
Change Adoption
Are you on track?
Descriptor: Organisations are defining what good adoption looks like from the start.
☐ Define what successful adoption will look like for the pilot and who it will apply to.
☐ Identify which teams, roles or use cases are most likely to adopt early.
☐ Establish how adoption will be monitored using both usage data and staff feedback.
☐ Set expectations that adoption will vary in the early stages.
☐ Put practical support mechanisms in place from day one.
☐ Define what would count as a meaningful early sign of adoption in practice.
ARE YOU ON TRACK? – CHANGE ADOPTION
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted $projectName and need to scale up
Change Adoption
Are you on track?
Descriptor: Organisations are monitoring, guiding and strengthening adoption at scale.
☐ Monitor adoption across teams, roles and services as rollout expands.
☐ Identify variation in how $projectName is being used across specialties and settings.
☐ Target support to areas with lower confidence, lower uptake or inconsistent use.
☐ Reinforce expected $projectName behaviours through leaders, champions and practice-based support.
☐ Use both data and frontline insight to guide rollout decisions and adjustments.
☐ Distinguish between access, trial, routine use and selective use when reviewing adoption.
☐ Adjust the rollout approach where adoption patterns show mismatch between the tool and the
workflow.
☐ Keep reinforcing what good adoption looks like as more teams come on board.
ARE YOU ON TRACK? – CHANGE ADOPTION
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - $projectName is live but adoption is patchy
Change Adoption
Are you on track?
Descriptor: Organisations are identifying why use is inconsistent and taking action.
☐ Identify where adoption is inconsistent, superficial or declining.
☐ Investigate the root causes of selective use, workarounds or avoidance.
☐ Address specific behaviours or barriers that are undermining confident routine use.
☐ Reset expectations through targeted frontline engagement and support.
☐ Use local leaders and peers to reinforce intended use where credibility is low.
☐ Reassess whether $projectName is being used in services where it genuinely fits the workflow.
ARE YOU ON TRACK? – CHANGE ADOPTION
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting $projectName for the first time
Transfer to BAU
Are you on track?
Descriptor: Organisations are planning how $projectName will be supported and owned beyond rollout.
☐ Define who will own $projectName after the pilot and what that ownership includes.
☐ Plan how $projectName will be supported operationally once initial rollout activity reduces.
☐ Define how $projectName will be reviewed, improved and maintained beyond go-live.
☐ Identify the governance routes $projectName will sit within once it becomes business as usual.
☐ Clarify how issues, template changes and workflow changes will be managed over time.
☐ Decide how benefits, adoption and risk will continue to be monitored after rollout.
ARE YOU ON TRACK? – TRANSFER TO BUSINESS AS USUAL (BAU)
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted $projectName and need to scale up
Transfer to BAU
Are you on track?
Descriptor: Organisations are embedding $projectName into business-as-usual governance and support.
☐ Confirm ownership of $projectName at organisational, service and operational level as rollout expands.
☐ Embed $projectName into routine governance, reporting and operational review forums.
☐ Ensure support routes are clear and accessible across all services using $projectName.
☐ Review and refine templates, workflows and guidance as $projectName use spreads.
☐ Capture learning from early adopters and use it to strengthen BAU arrangements.
☐ Align onboarding, induction and refresher support so new users can adopt $projectName reliably.
☐ Ensure BAU arrangements support sustained use, not just technical availability.
ARE YOU ON TRACK? – TRANSFER TO BUSINESS AS USUAL (BAU)
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - $projectName is live but adoption is patchy
Transfer to BAU
Are you on track?
Descriptor: Organisations are re-establishing $projectName as routine operational practice.
☐ Identify where $projectName has drifted out of routine use or lost operational ownership.
☐ Reconfirm who is responsible for adoption, support and improvement at service level.
☐ Fix gaps in support routes where staff do not know how to get help.
☐ Re-embed $projectName into normal governance and operational forums if necessary.
☐ Reset BAU expectations where $projectName is still being treated as a temporary project tool.
ARE YOU ON TRACK? – TRANSFER TO BUSINESS AS USUAL (BAU)
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting $projectName for the first time
Change Network
Are you on track?
Descriptor: Organisations are establishing a credible network of local champions and supporters.
☐ Identify credible local champions who are respected by peers and close to frontline work.
☐ Define what the change network is there to do beyond simple promotion of $projectName.
☐ Involve champions early in testing messages, workflows and early use cases.
☐ Ensure the network includes relevant clinical, admin and operational voices where possible.
☐ Give champions the information and support they need to answer questions credibly.
☐ Make it clear how champions will feed insight back into the programme.
ARE YOU ON TRACK? – CHANGE NETWORK
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted $projectName and need to scale up
Change Network
Are you on track?
Descriptor: Organisations are using the network to spread learning and support local adoption.
☐ Use the change network to share practical examples of $projectName use across services.
☐ Support champions to help teams adapt $projectName to local workflows.
☐ Keep the network active through regular contact, shared learning and visible support.
☐ Use champions to surface emerging issues early rather than waiting for formal escalation.
☐ Expand the network as rollout spreads into new areas and specialties.
☐ Avoid over-relying on one or two enthusiastic individuals by broadening local capability.
☐ Keep the network connected to clinical leadership and programme decision-making.
ARE YOU ON TRACK? – CHANGE NETWORK
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - $projectName is live but adoption is patchy
Change Network
Are you on track?
Descriptor: Organisations are reactivating the network to support struggling teams.
☐ Identify where or if there is no credible local championing or peer support.
☐ Re-engage trusted local people who can model $projectName use in practice.
☐ Use the network to understand why specific teams have disengaged or stalled.
☐ Use peer influence to rebuild credibility where central messaging is no longer landing.
☐ Reconnect the network to practical support and local problem-solving where it has drifted into
inactivity.
ARE YOU ON TRACK? – CHANGE NETWORK
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting $projectName for the first time
Reinforcement
Are you on track?
Descriptor: Organisations are reinforcing early use through support, feedback and visible examples
☐ Define how $projectName use will be reinforced during the early learning period.
☐ Reinforce the purpose of $projectName through repeated messages from leaders and champions.
☐ Build in opportunities for staff to review, correct and learn from early $projectName outputs.
☐ Set clear expectations that early friction is normal and support will be available.
☐ Use visible early examples of success to strengthen confidence and belief.
☐ Decide how feedback from early use will be acted on and communicated back.
ARE YOU ON TRACK? – REINFORCEMENT
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted $projectName and need to scale up
Reinforcement
Are you on track?
Descriptor: Organisations are reinforcing confident and routine use in practice.
☐ Reinforce $projectName use through visible peer practice and trusted local champions.
☐ Keep support available at the point of use as rollout widens.
☐ Share practical examples of how teams are making $projectName work in real settings.
☐ Show clearly what has changed in response to staff feedback.
☐ Reinforce the personal and workflow benefits staff are actually experiencing.
☐ Protect teams through the early dip in confidence rather than judging success too soon.
☐ Keep repeating the core purpose, expected use and support routes as rollout expands.
ARE YOU ON TRACK? – REINFORCEMENT
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - $projectName is live but adoption is patchy
Reinforcement
Are you on track?
Descriptor: Organisations are restoring why $projectName is important where usage has dropped and support
is not there.
☐ Identify where $projectName usage has dropped away or workarounds have appeared.
☐ Reintroduce local support, peer-to-peer support and visible leadership where use has drifted.
☐ Use practical examples and feedback loops to rebuild confidence and routine use.
☐ Address the specific issues teams are encountering rather than repeating generic rollout messages.
☐ Check whether the reinforcement strategy is actually changing behaviour or just increasing
awareness.
ARE YOU ON TRACK? – REINFORCEMENT
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting $projectName for the first time
Resistance
Are you on track?
Descriptor: Organisations are identifying and addressing likely concerns before rollout.
☐ Identify the main concerns staff are likely to have about $projectName before rollout begins.
☐ Distinguish between legitimate concerns, misconceptions and assumptions about the technology.
☐ Address likely issues such as accuracy, workflow fit, trust, consent and accountability early.
☐ Give staff permission to voice concerns without being labelled resistant.
☐ Build realistic expectations about what $projectName can and cannot do at this stage.
☐ Explain where $projectName may not fit every setting perfectly and why professional judgement still matters.
ARE YOU ON TRACK? – RESISTANCE MANAGEMENT
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted $projectName and need to scale up
Resistance
Are you on track?
Descriptor: Organisations are managing emerging resistance as rollout expands.
☐ Monitor where resistance is emerging across teams, roles or specialties.
☐ Identify whether resistance is being driven by workflow, trust, capability or poor fit.
☐ Respond to concerns with practical answers, not generic reassurance.
☐ Use local peers and credible examples to reduce anxiety and skepticism.
☐ Avoid treating superficial or selective use as successful adoption.
☐ Track whether resistance is reducing, shifting or becoming more hidden as rollout progresses.
☐ Adjust rollout pace or expectations where resistance reflects real limitations of the setting.
ARE YOU ON TRACK? – RESISTANCE MANAGEMENT
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - $projectName is live but adoption is patchy
Resistance
Are you on track?
Descriptor: Organisations are identifying and resolving embedded resistance and workarounds.
☐ Identify where resistance is active, hidden or showing up as workarounds and selective use.
☐ Find out what is driving that resistance in the specific team or setting.
☐ Address concerns through practical changes, visible support and credible local discussion.
☐ Stop treating all low adoption as poor attitude when it may reflect real workflow or trust issues.
☐ Reset expectations or usage where the current implementation does not fit the setting well.
ARE YOU ON TRACK? – RESISTANCE MANAGEMENT
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting $projectName for the first time
Readiness and Planning
Are you on track?
Descriptor: Organisations are preparing and assessing readiness for a safe and credible pilot.
☐ Assess organisational readiness for $projectName across clinical, operational, digital and governance areas.
☐ Identify the minimum conditions needed for a safe and credible pilot to begin.
☐ Confirm readiness of core enablers such as devices, connectivity, workflow design and support
arrangements.
☐ Clarify the scope, objectives and success criteria for the pilot before launch.
☐ Define the implementation plan, roles, milestones and decision points for the pilot phase.
☐ Sequence preparatory activity so governance, communications, training and workflow changes are
in place before go-live.
☐ Check whether the service, team or setting is genuinely ready to pilot rather than proceeding on
programme pressure alone.
ARE YOU ON TRACK? – READINESS AND PLANNING
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted $projectName and need to scale up
Readiness and Planning
Are you on track?
Descriptor: Organisations are planning rollout based on readiness, not just pace.
☐ Review whether services are genuinely ready to scale rather than assuming pilot success will
transfer automatically.
☐ Plan rollout in stages based on readiness, workflow fit and local capability.
☐ Confirm that each new service has the required governance, support, training and technical setup in
place before expansion.
☐ Use readiness checks to identify where rollout should proceed, pause or be adapted.
☐ Align implementation plans across services while allowing for local workflow differences.
☐ Build review points into the scaling plan so learning from early rollout can inform later phases.
☐ Ensure planning includes realistic capacity for support, championing and problem-solving as scale
increases.
☐ Avoid treating readiness as a one-off by checking it repeatedly as rollout moves into new areas.
ARE YOU ON TRACK? – READINESS AND PLANNING
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - $projectName is live but adoption is patchy
Readiness and Planning
Are you on track?
Descriptor: Organisations are correcting issues following rollout.
☐ Identify whether patchy adoption reflects poor readiness, weak planning or both.
☐ Review whether the original rollout sequence moved too quickly or into services that were not ready.
☐ Pinpoint which missing conditions are now undermining adoption (for example support, workflow fit,
governance clarity or infrastructure issues).
☐ Reset the implementation plan for affected teams rather than continuing to push rollout at pace.
☐ Re-establish realistic next steps, ownership and timing for recovering adoption in those areas.
ARE YOU ON TRACK? – READINESS AND PLANNING
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting $projectName for the first time
Organisational Change Management Maturity
Are you on track?
Descriptor: Organisations are identifying and addressing likely concerns before rollout.
☐ Identify the main concerns staff are likely to have about $projectName before rollout begins.
☐ Distinguish between legitimate concerns, misconceptions and assumptions about the technology.
☐ Address likely issues such as accuracy, workflow fit, trust, consent and accountability early.
☐ Give staff permission to voice concerns without being labelled resistant.
☐ Build realistic expectations about what $projectName can and cannot do at this stage.
☐ Explain where $projectName may not fit every setting perfectly and why professional judgement still matters.
ARE YOU ON TRACK? – ORGANISATIONAL CHANGE MANAGEMENT
MATURITY
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted $projectName and need to scale up
Organisational Change Management Maturity
Are you on track?
Descriptor: Organisations are strengthening change capability to support wider rollout.
☐ Review whether change management maturity is strong enough to support rollout beyond early
adopters.
☐ Identify where maturity varies across services, teams or professional groups as rollout expands.
☐ Strengthen weak areas such as local leadership, communication, reinforcement and support before
scaling further.
☐ Use maturity insight to plan where scale can proceed and where additional change support is
needed.
☐ Ensure change management approaches are consistent enough to support rollout while still allowing
local flexibility.
☐ Build change capability within services so adoption does not rely only on a central programme team.
☐ Reassess maturity at key scale points rather than treating it as a one-off diagnostic.
☐ Use maturity findings to target practical improvement activity, not just create a status report.
ARE YOU ON TRACK? – ORGANISATIONAL CHANGE MANAGEMENT
MATURITY
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - $projectName is live but adoption is patchy
Organisational Change Management Maturity
Are you on track?
Descriptor: Organisations are addressing maturity gaps that are causing inconsistent adoption.
☐ Identify whether patchy adoption reflects weaknesses in change management maturity rather than
the technology alone.
☐ Pinpoint where weak sponsorship, communications, local ownership or reinforcement are
contributing to low adoption.
☐ Use maturity insight to focus recovery activity on the weakest change mechanisms in affected
teams.
☐ Strengthen practical change disciplines where organisations are relying on access to $projectName without
enough support to embed it.
☐ Reassess maturity after corrective action to test whether the organisation is better placed to sustain
adoption.`,Et={"Pathway 1 - We are starting product for the first time":"pathway-1","Pathway 2 - We have piloted product and need to scale up":"pathway-2","Pathway 3 - product is live but adoption is patchy":"pathway-3","Pathway 1 - Pilot":"pathway-1","Pathway 2 - Scale up":"pathway-2","Pathway 3 - Reassess":"pathway-3"},Di={vision:"Vision",case_for_change:"Case for Change",sponsorship:"Senior Sponsorship and Governance",change_network:"Change Network",benefits:"Benefits and WIIFM",stakeholder:"Stakeholder Engagement and Communication",process_change:"Process Change and Ways of Working",change_impact:"Change Impact and Risk",risk_management:"Change Impact and Risk",skills_learning:"Skills, Learning, Capability and Confidence",capability:"Skills, Learning, Capability and Confidence",change_adoption:"Change Adoption",transfer_bau:"Transfer to BAU",reinforcement:"Reinforcement",resistance:"Resistance",cm_readiness:"Readiness and Planning",org_maturity:"Organisational Change Management Maturity"};function $i(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function kt(n){return n.replace(/\bAVT\b/g,"${productName}")}function Ti(n){const t=n.split(/\r?\n/).map(i=>i.trim()),s={};let a=0;for(;a<t.length;){const i=t[a],r=Et[i];if(!r){a+=1;continue}for(a+=1;a<t.length&&!t[a];)a+=1;if(a>=t.length)break;const o=t[a];for(a+=1;a<t.length&&(!t[a]||t[a]==="Are you on track?");)a+=1;let u="";if(a<t.length&&t[a].startsWith("Descriptor:"))for(u=kt(t[a].replace("Descriptor:","").trim()),a+=1;a<t.length&&t[a]&&!t[a].startsWith("☐")&&!t[a].startsWith("ARE YOU ON TRACK?")&&!Et[t[a]];)u=kt(`${u} ${t[a]}`.trim()),a+=1;const c=[];for(;a<t.length&&t[a].startsWith("☐");){const f=kt(t[a].replace(/^☐\s*/,"").trim()),l=`${r}:${$i(o)}:${c.length+1}`;c.push({key:l,text:f}),a+=1}for(s[o]||(s[o]={}),s[o][r]={domain:o,descriptor:u,checklist:c};a<t.length&&t[a]&&!Et[t[a]];)a+=1}return s}const Li=Ti(Pi);function Bi(n){return Di[n]||null}function Yt(n,t){var a;const s=Bi(n);return s&&((a=Li[s])==null?void 0:a[t])||null}function ha(n,t){if(!t||t.checklist.length===0)return{status:"on-track",completionPct:100,checkedCount:0,totalCount:0};const s=t.checklist.length,a=new Set(n),i=t.checklist.filter(o=>a.has(o.key)).length,r=Math.round(i/s*100);return r>=80?{status:"on-track",completionPct:r,checkedCount:i,totalCount:s}:r>=45?{status:"attention",completionPct:r,checkedCount:i,totalCount:s}:{status:"off-track",completionPct:r,checkedCount:i,totalCount:s}}function Fi(n){const t=ha(n.checkedItemKeys,n.rule);return!n.rule||n.rule.checklist.length===0?{status:n.averageScore>=n.targetScore?"on-track":"attention",completionPct:t.completionPct,checkedCount:t.checkedCount,totalCount:t.totalCount}:t.status==="off-track"?t:n.averageScore<Math.max(1,n.targetScore-1)&&t.status!=="on-track"?{...t,status:"attention"}:t}const Gi=["Strategic Direction and Leadership","People Experience and Culture","Planning and Risk","Skills and Behaviour","Process and Sustainment"],Jt={"Strategic Direction and Leadership":{outcome:"Provide a clear and unifying direction for the change, backed by visible, empowered leadership that removes barriers, prioritises resources, and drives accountability.",whatGoodLooksLike:"Leaders speak with one voice, consistently reinforcing the vision and outcomes. Decisions are timely, transparent, and aligned to strategic priorities. Governance is purposeful, with clear roles and escalations. Everyone understands why the change is happening and how it connects to organisational goals."},"People Experience and Culture":{outcome:"Create the conditions where people feel informed, supported, safe, and motivated, creating a culture that embraces the change rather than resists it.",whatGoodLooksLike:"Staff feel involved, heard, and respected. Communication is timely, honest, and tailored to different roles. People know how the change affects them and feel psychologically safe to raise concerns. Change Champions are active, engagement is high, and belief improves over time. Behaviours begin to shift organically as trust grows."},"Planning and Risk":{outcome:"Use evidence, data, and structured analysis to plan the change effectively, anticipate impacts, manage risks, and inform decision-making throughout delivery.",whatGoodLooksLike:"Impacts are well understood and documented. Risks are identified early and mitigated proactively. Baselines and KPIs are established before implementation, with benefits tracked throughout. Pilots and readiness checks ensure no surprises. Decisions are grounded in insight, not opinion."},"Skills and Behaviour":{outcome:"Give people the capabilities, confidence, and behavioural habits they need to adopt the new ways of working consistently and sustainably.",whatGoodLooksLike:"Staff are trained, assessed, and supported in ways that match real-world workflows. New behaviours are clearly defined, reinforced by leaders, and evident in day-to-day practice. Change Champions and Super-users are active; confidence grows over time; and requests for support decrease as competence increases."},"Process and Sustainment":{outcome:"Embed the change into operational processes, ensuring it becomes the way we do things, and create mechanisms for continuous improvement and long-term stability.",whatGoodLooksLike:"Updated SOPs, workflows, and ownership structures are in place and being followed. Issues are resolved quickly. Benefits are monitored and reported regularly. Improvements continue beyond go-live, with clear BAU ownership. The change stabilises and performance gains hold or increase over time."}},Ui={vision:"Defines the future state and why the change matters.",case_for_change:"Builds a clear, credible rationale and expected benefits.",sponsorship:"Secures visible leadership ownership, governance, and decisions.",change_network:"Builds and mobilises change agents and local champions.",benefits:"Tracks baseline, benefits ownership, and value realisation.",change_impact:"Assesses who is impacted and the scale of change required.",risk_management:"Identifies, tracks, and mitigates adoption and delivery risks.",cm_readiness:"Confirms readiness, sequencing, and change planning discipline.",stakeholder:"Plans and delivers stakeholder engagement and communications.",resistance:"Anticipates and addresses resistance with practical interventions.",skills_learning:"Designs learning, support, and reinforcement for role readiness.",capability:"Builds confidence and competence to adopt new ways of working.",change_adoption:"Measures uptake and consistency of new behaviours in practice.",process_change:"Embeds workflow changes into everyday operational delivery.",reinforcement:"Sustains momentum so adoption does not decay after launch.",org_maturity:"Improves long-term organisational change capability and maturity.",transfer_bau:"Transitions ownership into BAU with clear accountability."};function Mi(n){return Ui[n]||"Component description not yet defined."}function Vi(n){const s=Jt[n];return s?`This lens ${s.outcome.charAt(0).toLowerCase()}${s.outcome.slice(1)}`:"This lens provides an additional perspective on how each component is landing across teams and services."}const Es={small:560,medium:680,large:1e3};function Hi(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function ks(n,t,s,a,i){return i?"Blue":s<=0?"N/A":a<=0?"Amber":n>=t&&a<s?"Green":ma(n,t)}const Wi={"N/A":"text-slate-600 bg-slate-200",Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},js=["#0f766e","#0369a1","#7c3aed","#b45309","#be123c"],qi=[{score:0,label:"Pre-Emergent",color:"#768692"},{score:1,label:"Emerging",color:"#AE2521"},{score:2,label:"Developing",color:"#FFB81C"},{score:3,label:"Maturing",color:"#005EB8"},{score:4,label:"Embedding",color:"#330072"},{score:5,label:"Thriving",color:"#00A499"}];function zi({store:n,components:t,lenses:s,metrics:a,getEntry:i,onComponentClick:r,pathway:o,pathwayChecks:u,onNavigate:c,onOpenLensInfo:f,onOpenOnboarding:l,colorAccessibilityMode:x="standard",darkMode:b=!1,phaseFocusMode:S="auto",manualPhaseFocus:d,onPhaseFocusModeChange:A,onManualPhaseFocusChange:_,onResetPhaseFocus:h,componentRadarVisible:M=!0,onComponentRadarVisibleChange:U,componentRadarSize:te="medium",onComponentRadarSizeChange:D}){const j=dn("dashboard"),[q,J]=m.useState(""),[I,ee]=m.useState("all"),[H,T]=m.useState(()=>a.currentPhase),[W,ce]=m.useState("all"),[ge,De]=m.useState("score"),[R,Z]=m.useState("desc"),[re,Re]=m.useState(!1),[Le,He]=m.useState(!1),pe=m.useMemo(()=>[...new Set(t.map(k=>k.phase))].sort((k,X)=>k-X),[t]),tn=a.currentPhase,$e=S==="manual"&&d&&pe.includes(d)?d:tn,[Ke,sn]=m.useState(!0),Ne=m.useMemo(()=>n.history.length>0?n.history[n.history.length-1]:null,[n.history]),v=Ne!==null?a.overallPct-Ne.overallPercentage:null,L=m.useMemo(()=>{if(a.assessedCount===0)return!1;const k=new Date().toLocaleString("en-GB",{month:"short",year:"numeric"});return!n.history.some(X=>X.monthLabel===k)},[n.history,a.assessedCount]),N=m.useMemo(()=>{const k=new Date;k.setHours(0,0,0,0);const X=new Date(k);X.setDate(k.getDate()+7);const ne=[];return t.forEach(me=>{me.lenses.forEach(Ee=>{i(me.id,Ee).actions.forEach(xe=>{if(!xe.dueDate||xe.status==="Completed"||xe.status==="Cancelled")return;const fe=new Date(xe.dueDate);isNaN(fe.getTime())||fe<=X&&ne.push({action:xe,componentLabel:me.label,componentId:me.id,isOverdue:fe<k})})})}),ne.sort((me,Ee)=>new Date(me.action.dueDate).getTime()-new Date(Ee.action.dueDate).getTime())},[t,i,n.currentDraft]),P=m.useMemo(()=>{const k=q.trim().toLowerCase();return t.map(X=>{let ne=0,me=!0,Ee=0,xe=0;X.lenses.forEach(Qe=>{const Ye=i(X.id,Qe),We=Number(Ye.score||0);ne+=We,We!==5&&(me=!1);const Je=Ye.actions||[];Ee+=Je.length,xe+=Je.filter(y=>y.status==="Completed").length});const fe=Number((ne/X.lenses.length).toFixed(1)),Pe=pt(X.id,$e,X.target),K=fe===0?"not-started":fe>=Pe?"on-track":"below-target";let qe=null;if(Ne){let Qe=0;X.lenses.forEach(Je=>{var y,O;Qe+=Number(((O=(y=Ne.data[X.id])==null?void 0:y[Je])==null?void 0:O.score)||0)});const Ye=Number((Qe/X.lenses.length).toFixed(1)),We=Number((fe-Ye).toFixed(1));We!==0&&(qe=We)}return{component:X,avgNum:fe,exemplarTarget:Pe,status:K,delta:qe,actionCount:Ee,completedActionCount:xe,allLensesLevelFive:me}}).filter(({component:X,status:ne})=>I!=="all"&&ne!==I||H!=="all"&&X.phase!==H?!1:k?X.label.toLowerCase().includes(k):!0).sort((X,ne)=>{let me=0;return ge==="name"?me=X.component.label.localeCompare(ne.component.label):ge==="target"?me=X.component.target-ne.component.target:me=X.avgNum-ne.avgNum,R==="asc"?me:-me})},[t,H,$e,i,Ne,q,ge,R,I]);m.useMemo(()=>{let k=0,X=0;t.forEach(me=>{var fe;const Ee=Yt(me.id,o),xe=ha(((fe=u[me.id])==null?void 0:fe[o])||[],Ee);k+=xe.totalCount,X+=xe.checkedCount});const ne=k>0?Math.round(X/k*100):100;return{required:k,checked:X,pct:ne}},[t,o,u]);const V=m.useMemo(()=>{const k=[];return q.trim()&&k.push(`Search: ${q.trim()}`),I!=="all"&&k.push(`Status: ${I.replace("-"," ")}`),H!=="all"&&k.push(`Phase: ${H}`),(ge!=="score"||R!=="desc")&&k.push(`Sort: ${ge} (${R})`),k},[H,q,ge,R,I]),ve=()=>{J(""),ee("all"),T("all"),De("score"),Z("desc"),Re(!1)},Ae=a.phaseSummaries.find(k=>k.phase===$e),he=(Ae==null?void 0:Ae.rag)||"Red",Be=he.toLowerCase(),gn=x==="color-blind-friendly"?{"N/A":"text-slate-700 bg-slate-200",Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"}:Wi;return e.jsxs("div",{className:`adoption-dashboard max-w-6xl mx-auto ${b?"theme-dark":"theme-light"}`,children:[Ke&&N.length>0&&e.jsx("div",{className:"mb-6 rounded-lg border border-red-200 bg-red-50 p-4",children:e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-sm font-semibold text-red-800 mb-2",children:[N.filter(k=>k.isOverdue).length>0&&`${N.filter(k=>k.isOverdue).length} overdue action${N.filter(k=>k.isOverdue).length>1?"s":""}`,N.filter(k=>k.isOverdue).length>0&&N.filter(k=>!k.isOverdue).length>0&&", ",N.filter(k=>!k.isOverdue).length>0&&`${N.filter(k=>!k.isOverdue).length} due within 7 days`]}),e.jsxs("ul",{className:"space-y-1.5",children:[N.slice(0,3).map(k=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`shrink-0 text-xs font-bold px-1.5 py-0.5 rounded ${k.isOverdue?"bg-red-200 text-red-800":"bg-amber-100 text-amber-800"}`,children:k.isOverdue?"Overdue":"Due soon"}),e.jsxs("span",{className:"text-xs text-slate-700",children:[e.jsx("button",{onClick:()=>r(k.componentId),className:"font-medium text-[#005eb8] hover:underline mr-1",children:k.componentLabel}),"— ",k.action.text,k.action.dueDate&&e.jsxs("span",{className:"text-slate-400 ml-1",children:["(due"," ",new Date(k.action.dueDate).toLocaleDateString("en-GB",{day:"numeric",month:"short"}),")"]})]})]},k.action.id)),N.length>3&&e.jsxs("li",{className:"text-xs text-slate-500 pl-1",children:["+ ",N.length-3," more - see the Action Tracker for the full list."]})]})]}),e.jsx("button",{onClick:()=>sn(!1),className:"shrink-0 text-slate-400 hover:text-slate-600 text-xl leading-none","aria-label":"Dismiss",children:"×"})]})}),e.jsxs("div",{className:"mb-1 flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${b?"text-slate-100":"text-slate-800"}`,children:"Adoption Engine Dashboard"}),e.jsx(mn,{onClick:j.reopen,darkMode:b})]}),l?e.jsx("button",{type:"button",onClick:l,className:"rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Show introduction again"}):null]}),e.jsxs("p",{className:`text-sm mb-6 ${b?"text-slate-300":"text-slate-600"}`,children:["This tracks how ready ",n.orgProfile.projectName||"your programme"," is for adoption, based on ",t.length," change-management components, each assessed through up to"," ",s.length," lenses."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[e.jsxs("div",{className:`${b?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${b?"text-slate-300":"text-slate-500"}`,children:"Live Delivery Progress"}),e.jsxs("div",{className:"flex items-end gap-3",children:[e.jsxs("span",{className:"text-4xl font-bold text-[#005eb8]",children:[a.overallPct,"%"]}),v!==null&&e.jsxs("span",{className:`text-sm font-semibold mb-1 ${v>0?"text-green-600":v<0?"text-red-500":"text-slate-400"}`,children:[v>0?"↑":v<0?"↓":"="," ",Math.abs(v),"% vs last month"]})]}),e.jsx("div",{className:"mt-4 w-full bg-slate-100 rounded-full h-3 relative overflow-hidden",children:e.jsx("div",{className:"absolute top-0 left-0 h-full bg-[#005eb8]",style:{width:`${a.overallPct}%`}})}),e.jsx("div",{className:"flex justify-between text-xs mt-2 text-slate-400",children:e.jsx("span",{children:"Derived from current working data across all components."})})]}),e.jsxs("div",{className:`dashboard-metric-card dashboard-metric-card--phase dashboard-metric-card--${Be} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:"dashboard-metric-card__label text-sm font-medium mb-1",children:"Current Phase Focus"}),e.jsxs("div",{className:"mb-2 flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>A==null?void 0:A("auto"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${S==="auto"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Auto"}),e.jsx("button",{type:"button",onClick:()=>A==null?void 0:A("manual"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${S==="manual"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Manual"}),S==="manual"?e.jsx("select",{value:$e,onChange:k=>_==null?void 0:_(Number(k.target.value)),className:"rounded-md border border-white/50 bg-white/90 px-2 py-1 text-xs font-medium text-slate-800","aria-label":"Manual phase focus",children:pe.map(k=>e.jsx("option",{value:k,children:ln[k]||`Phase ${k}`},k))}):null,S==="manual"&&h?e.jsx("button",{type:"button",onClick:h,className:"rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100",children:"Reset to suggested"}):null]}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsx("span",{className:"dashboard-metric-card__headline text-4xl font-bold",children:ln[$e]||`Phase ${$e}`})}),e.jsxs("p",{className:"dashboard-metric-card__description text-sm mt-2",children:[he," status based on delivery progress and action completion.",S==="manual"?` Suggested phase is ${ln[tn]||`Phase ${tn}`}.`:""]})]}),e.jsxs("div",{className:`${b?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${b?"text-slate-300":"text-slate-500"}`,children:"Action Completion"}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsxs("span",{className:`text-4xl font-bold ${b?"text-slate-100":"text-slate-700"}`,children:[a.actionCompletionPct,"%"]})}),e.jsxs("p",{className:`text-sm mt-2 ${b?"text-slate-300":"text-slate-500"}`,children:[a.completedActions," actions completed. Keep it up!"]})]})]}),L&&e.jsxs("div",{className:"dashboard-callout dashboard-callout--snapshot rounded-lg border p-4 flex items-center gap-3 mb-8",children:[e.jsx("span",{className:"dashboard-callout__icon text-xl shrink-0",children:"📅"}),e.jsxs("p",{className:"dashboard-callout__body text-sm",children:[e.jsx("strong",{children:"This month hasn't been recorded yet."})," Use"," ",e.jsx("span",{className:"font-semibold",children:"'Finalise Month'"})," in the header to snapshot today's progress and build your delivery trajectory."]})]}),a.assessedCount===0?e.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-8 border border-slate-200 mb-8 text-center",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800",children:"Getting started"}),e.jsx("p",{className:"text-sm text-slate-600 mt-2 max-w-xl mx-auto",children:"Nothing has been assessed yet, so there's nothing to chart. Set up your Project first, then start scoring your first component to see your readiness build up here."}),e.jsxs("div",{className:"mt-4 flex items-center justify-center gap-3",children:[c?e.jsx("button",{type:"button",onClick:()=>c("project-details"),className:"rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Set up your Project"}):null,t[0]?e.jsx("button",{type:"button",onClick:()=>r(t[0].id),className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Start your first assessment"}):null]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${b?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-1 ${b?"text-slate-100":"text-slate-800"}`,children:"Phase Progress (RAG)"}),e.jsxs("p",{className:`text-sm mb-4 ${b?"text-slate-300":"text-slate-500"}`,children:["Phases run 1 to 5, from early readiness at go-live through to fully embedding the change."," ",c?e.jsx("button",{type:"button",onClick:()=>c("cm-guide"),className:"font-medium text-[#005eb8] hover:underline",children:"See Adoption Engine Onboarding"}):null]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:a.phaseSummaries.map(k=>{const X=k.rag==="Green"?"bg-green-100 text-green-700":k.rag==="Amber"?"bg-amber-100 text-amber-700":"bg-red-100 text-red-700",ne=k.totalLenses?Math.round(k.assessedLenses/k.totalLenses*100):0;return e.jsxs("div",{className:`rounded-md border p-4 ${b?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:`font-semibold ${b?"text-slate-100":"text-slate-800"}`,children:ln[k.phase]||`Phase ${k.phase}`}),e.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded ${X}`,children:k.rag})]}),e.jsxs("p",{className:`text-xs ${b?"text-slate-300":"text-slate-600"}`,children:[k.onTrackComponents,"/",k.componentCount," components on target"]}),e.jsxs("p",{className:`text-xs mt-1 ${b?"text-slate-300":"text-slate-600"}`,children:[ne,"% lens coverage, ",k.actionCompletionPct,"% actions complete"]})]},k.phase)})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"order-2 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8",children:[e.jsxs("div",{className:`${b?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border flex flex-col`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-4 ${b?"text-slate-100":"text-slate-800"}`,children:"Readiness Trajectory"}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${b?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:n.history.length>0?e.jsx("canvas",{id:"adoption-line-chart"}):e.jsx("div",{className:"text-center text-slate-400",children:e.jsx("p",{children:"No historical data yet. Finalise your first month to generate trends."})})})]}),e.jsxs("div",{className:`${b?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border flex flex-col`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${b?"text-slate-100":"text-slate-800"}`,children:"Strategic Lenses Spread"}),f&&s[0]?e.jsx("button",{type:"button",onClick:()=>f(s[0]),className:"text-xs font-medium text-[#005eb8] hover:underline",children:"What's a lens?"}):null]}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${b?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:e.jsx("canvas",{id:"adoption-radar-chart"})}),e.jsxs("div",{className:`${b?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mt-4 rounded-md border p-3`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${b?"text-slate-300":"text-slate-600"}`,children:"Lens key"}),e.jsx("div",{className:"mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2",children:s.map((k,X)=>e.jsxs("div",{className:`flex items-center gap-2 text-xs ${b?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full",style:{backgroundColor:js[X%js.length]},"aria-hidden":"true"}),e.jsx("span",{children:k})]},`lens-key-${k}`))})]}),e.jsx("p",{className:`text-xs text-center mt-4 ${b?"text-slate-300":"text-slate-500"}`,children:"Visualises your current draft readiness score averaged across the 5 strategic lenses against their specific target requirements."})]})]}),e.jsxs("div",{className:`order-1 ${b?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"mb-4 flex w-full flex-col gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:`text-lg font-semibold ${b?"text-slate-100":"text-slate-800"}`,children:"Change Component Radar"}),e.jsx("p",{className:`text-xs mt-1 ${b?"text-slate-300":"text-slate-500"}`,children:"Show or hide the change-component readiness radar, then use the overview list below to drill into delivery status."})]}),e.jsxs("div",{className:"flex w-full flex-wrap items-center justify-end gap-2",children:[M?e.jsx("div",{role:"group","aria-label":"Change component radar size",className:"flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-medium",children:["small","medium","large"].map(k=>e.jsx("button",{type:"button",onClick:()=>D==null?void 0:D(k),"aria-pressed":te===k,className:`px-3 py-2 capitalize transition-colors ${te===k?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:k},k))}):null,e.jsx("button",{type:"button",onClick:()=>U==null?void 0:U(!M),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-white",children:M?"Hide change component radar":"Show change component radar"})]})]}),M?e.jsxs("div",{className:`w-full ${b?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("div",{className:`mx-auto flex items-center justify-center rounded border p-2 ${b?"border-slate-700 bg-slate-950":"border-slate-100 bg-white"}`,style:{height:Es[te],maxWidth:Es[te]+120},children:e.jsx("canvas",{id:"adoption-component-radar-chart",className:"block h-full w-full"})}),e.jsx("div",{id:"radar-legend",className:`mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm ${b?"text-slate-300":"text-slate-600"}`,children:qi.map(k=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mr-2 h-3 w-3 rounded-full",style:{backgroundColor:k.color}}),e.jsxs("span",{children:[k.score," = ",k.label]})]},k.score))}),e.jsx("p",{className:`mt-4 text-center text-xs ${b?"text-slate-300":"text-slate-500"}`,children:"Visualises the average readiness score for each component against the phase exemplar profile."})]}):null,e.jsxs("div",{className:"mt-4 w-full space-y-3",children:[e.jsxs("p",{className:`text-xs ${b?"text-slate-300":"text-slate-500"}`,children:["BRAG scoring is used for the change component overview:",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-sky-100 text-sky-800",children:"Blue"})," = every lens is level 5,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-green-100 text-green-800",children:"Green"})," = on target,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-red-100 text-red-800",children:"Red"})," = behind target dates,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-amber-100 text-amber-800",children:"Amber"})," = at risk / nearing deadline."]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:q,onChange:k=>J(k.target.value),placeholder:"Search components...",className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"}),e.jsxs("select",{value:I,onChange:k=>ee(k.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All statuses"}),e.jsx("option",{value:"not-started",children:"Not started"}),e.jsx("option",{value:"below-target",children:"Below target"}),e.jsx("option",{value:"on-track",children:"On track"})]}),e.jsxs("select",{value:H,onChange:k=>T(k.target.value==="all"?"all":Number(k.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All phases"}),pe.map(k=>e.jsx("option",{value:k,children:ln[k]||`Phase ${k}`},k))]})]}),e.jsx(ua,{showAdvancedControls:re,onToggleAdvanced:()=>Re(k=>!k),onReset:ve,resultText:`Showing ${P.length} components`,activeFilters:V,activeFiltersAriaLabel:"Active component filters",darkMode:b}),re?e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-md border border-slate-200 bg-slate-50 p-3",children:[e.jsxs("select",{value:ge,onChange:k=>De(k.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"score",children:"Sort by score"}),e.jsx("option",{value:"name",children:"Sort by name"}),e.jsx("option",{value:"target",children:"Sort by target"})]}),e.jsx("button",{type:"button",onClick:()=>Z(k=>k==="asc"?"desc":"asc"),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white transition-colors",children:R==="asc"?"Ascending":"Descending"})]}):null]}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:[P.map(({component:k,avgNum:X,exemplarTarget:ne,actionCount:me,completedActionCount:Ee,delta:xe,allLensesLevelFive:fe})=>{const Pe=ks(X,ne,me,Ee,fe),K=Pe==="Red"?"↓":X>=ne?"→":X<=0?"↑":"↗",qe=Pe==="Red"?"text-red-500":X>=ne?b?"text-slate-300":"text-slate-500":"text-amber-600";return e.jsxs("button",{onClick:()=>r(k.id),title:Mi(k.id),className:`flex justify-between items-center p-3 rounded-md transition-colors group text-left ${b?"bg-slate-900 border border-slate-700 hover:border-blue-400":"bg-slate-50 border border-slate-100 hover:border-blue-300"}`,children:[e.jsx("span",{className:`text-sm font-medium truncate pr-2 group-hover:text-[#005eb8] ${b?"text-slate-100":"text-slate-700"}`,children:k.label}),e.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[e.jsx("span",{className:`text-xs font-semibold ${qe}`,title:X>=ne?"On or above expected readiness for phase focus":X<=0?"Not started: raise towards expected readiness":"Below expected readiness: continue improving","aria-label":X>=ne?"At expected readiness":X<=0?"Not started, increase readiness":"Below expected readiness",children:K}),xe!==null&&e.jsxs("span",{className:`text-[11px] font-semibold ${xe>0?"text-green-600":"text-red-400"}`,title:"Change versus last finalised month",children:[xe>0?"+":"",xe.toFixed(1)]}),e.jsx("span",{className:`text-xs font-bold px-2.5 py-1 rounded ${gn[Pe]}`,children:Pe})]})]},k.id)}),!P.length&&e.jsx("div",{className:`col-span-full rounded-md border border-dashed p-6 text-sm ${b?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-500"}`,children:"No components match the current filters."})]})]})]}),e.jsxs("div",{className:`${b?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h3",{className:`text-lg font-semibold ${b?"text-slate-100":"text-slate-800"}`,children:"Lenses and which components they apply to"}),e.jsx("button",{type:"button",onClick:()=>He(k=>!k),className:"inline-flex items-center justify-center rounded-full p-1 text-slate-500 hover:text-[#005eb8]","aria-label":"Explain lenses and components",title:"Explain lenses and components",children:e.jsx(Hi,{})})]}),Le?e.jsx("p",{className:"mt-2 text-xs text-slate-600 max-w-3xl",children:"A component is the change topic you are delivering (for example, Vision). A lens is the angle used to assess that component. For example, Vision is reviewed through Strategic Direction and Leadership and People Experience and Culture to check both leadership alignment and whether people understand and believe in the vision."}):null]}),e.jsxs("select",{value:W,onChange:k=>ce(k.target.value==="all"?"all":Number(k.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:w-40",children:[e.jsx("option",{value:"all",children:"All phases"}),pe.map(k=>e.jsx("option",{value:k,children:ln[k]||`Phase ${k}`},k)),'"']})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(k=>{const X=t.filter(ne=>ne.lenses.includes(k)).filter(ne=>W==="all"||ne.phase===W);return X.length?e.jsxs("div",{className:`rounded-md p-4 ${b?"border border-slate-700 bg-slate-900":"border border-slate-100 bg-slate-50"}`,children:[e.jsx("h4",{className:"font-bold text-sm text-[#005eb8] mb-3",children:k}),e.jsx("p",{className:`mb-3 text-xs ${b?"text-slate-300":"text-slate-600"}`,children:Vi(k)}),e.jsx("ul",{className:"space-y-2",children:X.map(ne=>{const me=i(ne.id,k),Ee=Number(me.score||0),xe=pt(ne.id,$e,ne.target),fe=me.actions||[],Pe=ks(Ee,xe,fe.length,fe.filter(K=>K.status==="Completed").length,!1);return e.jsxs("li",{className:`text-xs flex justify-between items-center p-2 rounded ${b?"bg-slate-800 border border-slate-700":"bg-white border border-slate-100"}`,children:[e.jsx("span",{className:`truncate pr-2 font-medium ${b?"text-slate-100":"text-slate-700"}`,children:ne.label}),e.jsx("button",{onClick:()=>r(ne.id),className:`px-2.5 py-0.5 rounded font-bold ${gn[Pe]}`,children:Pe})]},ne.id)})})]},k):null})})]})]}),e.jsx(un,{open:j.isOpen,onClose:j.close,title:"Adoption Engine Dashboard",darkMode:b,body:e.jsx("p",{children:"This tracks how ready your programme is for adoption, based on your change-management components, each assessed through several lenses. Use the filters and sort controls to focus on what needs attention, and click a component to open its assessment."})})]})}const _n={label:"Change Management Toolkit",url:"https://future.nhs.uk/CMN/view?objectId=129489733"};function Xt(n,t){var o,u,c,f,l;if(!t)return n;const s=(o=t.links)==null?void 0:o[n.key],a=(u=s==null?void 0:s.url)==null?void 0:u.trim(),i=((c=s==null?void 0:s.label)==null?void 0:c.trim())||n.label;return a?{...n,label:i,url:a}:((s==null?void 0:s.fallback)??"default")==="base"&&((l=(f=t.base)==null?void 0:f.url)!=null&&l.trim())?{...n,label:i,url:t.base.url.trim()}:{...n,label:i}}const Ki="nhs-guidance-workstreams",fa={vision:["Vision"],case_for_change:["Case for Change"],sponsorship:["Senior Sponsorship & Governance"],change_network:["Change Network"],benefits:["Benefits"],change_impact:["Change Impact"],risk_management:["Risk Management"],cm_readiness:["Change Management Readiness & Planning"],stakeholder:["Stakeholder Engagement & Comms"],resistance:["Resistance Management"],skills_learning:["Skills/ Learning"],capability:["Change Management Capability"],change_adoption:["Reinforcement"],process_change:["Process change"],reinforcement:["Reinforcement"],org_maturity:["Change Management Capability"],transfer_bau:["Reinforcement"]},G=(n,t,s,a)=>({key:`fnhs_${n}`,label:t,url:`https://future.nhs.uk/CMN/view?objectId=${n}`,type:s,...a?{description:a}:{}}),ba=[G("44704752","FuturesNHS Change Management Network","core","The wider NHS community for change management practice, discussion and shared resources.")],Fn={Vision:{inputs:[G("37515792","Vision for Change","core","Supports development and communication of a clear future vision."),G("34039056","Mind Map","core","Captures and organises stakeholder viewpoints when developing the vision."),G("34039088","Rich Picture and Storytelling","core","Creates a visual and narrative representation of the desired future state."),G("34039184","Sinek's Golden Circle","core","Structures the vision around why, how and what."),G("34037808","Systems Thinking","core","Supports consideration of the wider system when defining the future state."),G("34018288","Stakeholder Analysis Tool","core","Identifies the stakeholders who should help shape and validate the vision."),G("34039024","Sponsor Coalition Map","additional","Identifies leaders and visible supporters who can reinforce the vision."),G("69484112","SHIFT: A Strategic Change Management Approach","additional","Provides an additional strategic approach for shaping and aligning change.")]},"Case for Change":{inputs:[G("44287088","Case for Change","core","Supports creation of a clear and compelling rationale for change."),G("42608592","Beckhard and Harris' Change Formula","core","Tests whether the conditions needed to overcome the perceived cost of change are present."),G("34037360","Force Field Analysis","core","Identifies the forces driving and restraining the change."),G("34037232","Benefits Workshop","core","Brings stakeholders together to identify and develop the benefits of change."),G("34040176","Benefits Map","core","Links benefits, outcomes, enabling changes and strategic objectives."),G("45000208","What's in it for me? Benefits","core","Defines relevant benefits for each stakeholder group."),G("69191376","5 Whys Technique","additional","Supports root-cause exploration of the problem the change is intended to address."),G("34037712","SWOT Analysis","additional","Examines strengths, weaknesses, opportunities and threats relating to the change."),G("34037072","PESTLE Analysis","additional","Examines external factors influencing the need for change."),G("34037680","Porter's Five Forces","additional","Supports analysis of wider environmental and market pressures."),G("34037040","GAP Analysis","additional","Compares current and future states and identifies what needs to change."),G("42608624","AIDA Model","additional","Provides a structure for moving audiences from awareness towards action."),G("34037744","Kotter's 8 Steps","additional","Provides an additional framework for creating urgency and mobilising change."),G("34039024","Sponsor Coalition Map","additional","Identifies leaders who need to champion the case for change.")],deliverables:[G("44287088","A clear case for change communicated to all stakeholders","core")]},"Senior Sponsorship & Governance":{inputs:[G("34039024","Sponsor Coalition Map","core","Identifies senior leaders and visible supporters required to drive the change."),G("34037520","What Makes a Good Sponsor?","core","Supports sponsors to understand the behaviours expected of them."),G("34040240","RACI/RASCI Matrix","core","Clarifies governance roles, responsibilities and accountability."),G("34037552","Change Network","core","Connects senior sponsorship with change agents and champions."),G("42042672","Change Management Strategy","core","Defines the strategic approach and leadership responsibilities for change."),G("34018288","Stakeholder Analysis Tool","additional","Identifies influential stakeholders and required sponsor coverage."),G("34038032","Change Management Plan","additional","Translates governance and sponsorship responsibilities into planned activity."),G("69484112","SHIFT: A Strategic Change Management Approach","additional","Provides an additional strategic structure for leadership of change.")]},"Change Network":{inputs:[G("34037552","Change Network","core","Supports formation and operation of a network of change agents and champions."),G("34039024","Sponsor Coalition Map","core","Connects the change network with visible senior sponsors."),G("34018288","Stakeholder Analysis Tool","core","Helps ensure the network represents the right stakeholder groups."),G("34037520","What Makes a Good Sponsor?","core","Clarifies how sponsors should support and use the network."),G("34039408","Feedback Cycle","additional","Supports two-way feedback between the network, programme and affected staff."),G("69501968","Psychological Safety","additional","Supports an environment in which network members can raise concerns safely."),G("34040240","RACI/RASCI Matrix","additional","Clarifies the roles of sponsors, change agents and change champions."),G("34038672","User Surveys","additional","Provides additional evidence for themes surfaced by the change network.")]},Benefits:{inputs:[G("34037232","Benefits Workshop","core","Identifies and develops benefits with relevant stakeholders."),G("34040176","Benefits Map","core","Links benefits to outcomes, enabling changes and strategic objectives."),G("34030736","Benefits Realisation Plan","core","Defines baselines, measures, owners and arrangements for tracking benefits."),G("45000208","What's in it for me? Benefits","core","Translates organisational benefits into relevant stakeholder benefits."),G("69511824","Measuring Digital Adoption","core","Supports definition of adoption measures linked to intended benefits."),G("44287088","Case for Change","additional","Connects the benefits to the rationale and intended outcomes of the change."),G("34038608","Creating Short-Term Wins","additional","Uses early progress to demonstrate value and maintain momentum."),G("34038864","Celebrate Successes","additional","Recognises evidence that benefits and positive outcomes are emerging."),G("34038544","End of Pilot Report","additional","Captures pilot evidence relevant to benefits and wider rollout."),G("34038672","User Surveys","additional","Collects qualitative evidence about benefits and user experience.")]},"Change Impact":{inputs:[G("34037424","Change Impact Assessment","core","Assesses impacts on people, teams, processes and business units."),G("34039344","Impact Analysis","core","Supports structured analysis of intended and unintended impacts."),G("34037968","Heat Map","core","Provides a visual view of impact across business areas."),G("34037040","GAP Analysis","core","Identifies differences between current and future states."),G("34040208","McKinsey 7S Model","core","Examines alignment across interdependent organisational factors."),G("34037840","Process Mapping","additional","Identifies impacts created by changes between current and future processes."),G("34037392","Change Management Capability Review","additional","Assesses the capability implications of the future state."),G("34038000","Proof of Concept","additional","Provides early evidence about likely organisational and user impacts."),G("34037488","Training Impact Assessment","additional","Identifies high-level learning resource and cost implications.")]},"Risk Management":{inputs:[G("34037776","Risk Assessment","core","Identifies and assesses risks, issues and barriers to successful adoption."),G("34038640","Sustainability Risk Assessment","core","Identifies risks that could prevent the change from being sustained."),G("34037424","Change Impact Assessment","core","Provides evidence about impact-related risks and mitigation needs."),G("34037360","Force Field Analysis","core","Identifies forces that may support or obstruct the change."),G("34030736","Benefits Realisation Plan","additional","Helps identify and monitor risks to benefit realisation."),G("34037968","Heat Map","additional","Highlights areas where high impact and low readiness may create risk."),G("34307760","Resistance Management Plan","additional","Defines actions for managing resistance-related adoption risks."),G("69191376","5 Whys Technique","additional","Supports investigation of the root causes of risks and recurring issues.")]},"Change Management Readiness & Planning":{inputs:[G("42042672","Change Management Strategy","core","Sets the overall direction and approach for managing the change."),G("34038032","Change Management Plan","core","Defines activities, ownership and timescales required to build readiness."),G("34037040","GAP Analysis","core","Identifies the work required to move to the future state."),G("34037424","Change Impact Assessment","core","Provides impact and readiness evidence for change planning."),G("34038192","Change Implementation Plan","core","Defines implementation tasks, milestones and responsibilities."),G("34038576","Go Live Business Readiness Assessment","core","Assesses people, process and support readiness before go-live.")]}},Is={},Yi={},Ji={Default:Fn,Product:Is,AVT:Is,EPR:Yi};function Xi(){if(typeof window>"u")return[];try{const n=window.localStorage.getItem(Ki);if(!n)return[];const t=JSON.parse(n);return Array.isArray(t)?t.filter(s=>s&&typeof s.name=="string"&&s.name.trim()):[]}catch{return[]}}function Qi(n){const t=Xi().find(s=>s.name===n);return t?t.map:Ji[n]||Fn}function Zi(n,t,s,a,i=!0){var c,f,l;const r=((f=(c=Qi(n))==null?void 0:c[t])==null?void 0:f[s])||[],o=r.length>0?r:((l=Fn==null?void 0:Fn[t])==null?void 0:l[s])||[],u=i?o:o.filter(x=>x.type==="core");return a?u.map(x=>Xt(x,a)):u}function ht(n,t,s,a,i=!0){const r=fa[t]||[],o=new Map;return r.forEach(u=>{Zi(n,u,s,a,i).forEach(c=>{const f=`${c.label}::${c.url}`;o.has(f)||o.set(f,c)})}),[...o.values()]}const As={"not started":0,emerging:1,developing:2,embedding:3,adopted:4,thriving:5};function zn(n){return n.trim().replace(/\s+/g," ").toLowerCase()}function xa(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function _s(n){return n.trim().toLowerCase()}function eo(n){return n.replace(/&/g,"and").replace(/\s+/g," ").trim()}function no(n){return typeof n=="string"&&ut.includes(n)}function Ln(n){if(!n)return null;try{return JSON.parse(n)}catch{return null}}function Qt(n,t,s,a){let i=0,r=!1,o=!1;for(let u=a;u<n.length;u+=1){const c=n[u];if(r){if(o){o=!1;continue}if(c==="\\"){o=!0;continue}c==='"'&&(r=!1);continue}if(c==='"'){r=!0;continue}if(c===t){i+=1;continue}if(c===s&&(i-=1,i===0))return n.slice(a,u+1)}return null}function to(n,t=0){const s=n.indexOf("{",t);return s<0?null:Qt(n,"{","}",s)}function Sa(n,t=0){const s=n.indexOf("[",t);return s<0?null:Qt(n,"[","]",s)}function Os(n,t){const s=n.toLowerCase().indexOf(t.toLowerCase());return s<0?null:Sa(n,s)}function so(n,t){const s=n.toLowerCase().indexOf(t.toLowerCase());return s<0?null:to(n,s)}function ao(n){const t=[];for(let s=0;s<n.length;s+=1){if(n[s]!=="{")continue;const a=Qt(n,"{","}",s);if(!a)continue;const i=Ln(a);i&&typeof i=="object"&&!Array.isArray(i)&&t.push(i),s+=a.length-1}return t}function at(n){return Array.isArray(n)?n.filter(t=>t&&typeof t=="object").map(t=>t).filter(t=>typeof t.id=="string"&&typeof t.name=="string"):[]}function Wn(n){return Array.isArray(n)?n.filter(t=>t&&typeof t=="object").map(t=>t).filter(t=>typeof t.fromStatus=="string"&&typeof t.toStatus=="string"&&typeof t.lens=="string"&&typeof t.action=="string"):[]}function io(n){const t=Ln(n);let s=[],a=[];if(t&&typeof t=="object"&&!Array.isArray(t)){const r=t;s=at(r.outcomes),Array.isArray(r.actions)?a=Wn(r.actions):r.actions&&typeof r.actions=="object"&&(a=Wn(r.actions.actions))}else Array.isArray(t)&&(s=at(t));if(s.length||(s=at(Ln(Os(n,"outcomes")))),s.length||(s=at(Ln(Sa(n)))),a.length||(a=Wn(Ln(Os(n,"actions")))),!a.length){const r=Ln(so(n,"actions"));a=Wn(r==null?void 0:r.actions)}const i=ao(n);return a.length||(a=Wn(i)),s.length||(s=i.filter(r=>r&&typeof r=="object").map(r=>r).filter(r=>typeof r.id=="string"&&typeof r.name=="string"&&/_o\d+$/i.test(r.id)&&!("fromStatus"in r))),{outcomes:s,actions:a}}function Rs(n,t){const a=n.trim().toLowerCase().match(/o\d+$/);return a?`${t}:${a[0]}`:`${t}:${xa(n)}`}function oo(n,t){return`${n}:${t}`}function ro(n){return n.includes(":auto-objective:")||n.startsWith("pathway:auto-objective:")}function lo(n){return{...n,actions:(n.actions||[]).map(t=>({...t,linkedTargets:(t.linkedTargets||[]).map(s=>({...s}))}))}}function Gt(){return{score:0,justification:"",evidence:"",actions:[]}}function Zt(n,t){return`${n}:${xa(t.lens)}:${t.fromScore}-${t.toScore}:${t.actionIndex}`}function co(n,t,s){return{id:Zt(t,s),text:s.actionText,actionType:s.actionType,owner:"",timescale:"",status:"Planned",phase:1,startDate:"",dueDate:"",notes:"",evidence:"",readinessScore:s.fromScore,linkedTargets:[{componentId:n,lens:s.lens}]}}function uo(n,t){return{id:n.id,text:n.text,owner:(t==null?void 0:t.owner)||"",timescale:(t==null?void 0:t.timescale)||"",notes:(t==null?void 0:t.notes)||"",evidence:(t==null?void 0:t.evidence)||"",linkedActions:[]}}function mo(n,t,s){const a=Zt(t,s),i=(n.actions||[]).find(u=>u.id===a);if(i)return i.id;const r=zn(s.actionText),o=(n.actions||[]).find(u=>zn(u.text||"")===r);return(o==null?void 0:o.id)||null}function Ue(n,t){const{outcomes:s,actions:a}=io(n),i=s.map(u=>({id:Rs(String(u.id),t.outcomePrefix),text:String(u.name).trim()})),r=new Map;return{templates:a.reduce((u,c)=>{var _;const f=As[_s(String(c.fromStatus||""))],l=As[_s(String(c.toStatus||""))];if(f===void 0||l===void 0)return u;const x=eo(String(c.lens||"")),b=((_=t.lensAliases)==null?void 0:_[x])||x,S=String(c.action||"").trim();if(!b||!S)return u;const d=`${b}:${f}-${l}`,A=r.get(d)||0;return r.set(d,A+1),u.push({lens:b,fromScore:f,toScore:l,actionIndex:A,actionText:S,actionType:no(c.category)?c.category:void 0,outcomeIds:(c.outcomeIds||[]).map(h=>Rs(String(h),t.outcomePrefix))}),u},[]),outcomes:(i.length?i:t.fallbackOutcomes).slice(0,3)}}function Me(n,t,s){const a={...n.currentDraft||{}},i={...n.objectives||{}},r=a[t.componentId]||{},o=`${t.outcomePrefix}:`,u=(i[t.componentId]||[]).filter(b=>b.id.startsWith(o)),c=(i[t.componentId]||[]).filter(b=>!b.id.startsWith(o)&&!ro(b.id)),f=u.reduce((b,S)=>(b[S.id]=S,b),{}),l=Object.keys(r).reduce((b,S)=>(b[S]=lo(r[S]||Gt()),b),{});s.templates.forEach(b=>{var D;const S=l[b.lens]||Gt(),d=new Set((S.actions||[]).map(j=>zn(j.text||""))),A=Zt(t.actionPrefix,b),_=oo(t.componentId,b.lens),h=new Set(((D=n.suppressedAutoActions)==null?void 0:D[_])||[]),M=(S.actions||[]).some(j=>j.id===A),U=zn(b.actionText),te=h.has(A);S.actions=(S.actions||[]).map(j=>!(j.id===A||zn(j.text||"")===U)||j.readinessScore===b.fromScore?j:{...j,readinessScore:b.fromScore}),!M&&!d.has(U)&&!te&&(S.actions=[...S.actions||[],co(t.componentId,t.actionPrefix,b)]),l[b.lens]=S});const x=s.outcomes.map(b=>{const S=[];return s.templates.forEach(d=>{if(!d.outcomeIds.includes(b.id))return;const A=l[d.lens];if(!A)return;const _=mo(A,t.actionPrefix,d);_&&S.push({lens:d.lens,actionId:_})}),{...uo(b,f[b.id]),linkedActions:S}});return{...n,currentDraft:{...a,[t.componentId]:l},objectives:{...i,[t.componentId]:[...c,...x]}}}function Ve(n,t){var u,c;const s=`${t.outcomePrefix}:`,a=`${t.actionPrefix}:`,i=(((u=n.objectives)==null?void 0:u[t.componentId])||[]).filter(f=>!f.id.startsWith(s)),r=((c=n.currentDraft)==null?void 0:c[t.componentId])||{},o=Object.keys(r).reduce((f,l)=>{const x=r[l]||Gt();return f[l]={...x,actions:(x.actions||[]).filter(b=>!b.id.startsWith(a))},f},{});return{...n,currentDraft:{...n.currentDraft,[t.componentId]:o},objectives:{...n.objectives,[t.componentId]:i}}}function Ps(n,t){if(t>=5)return null;const s=(n.actions||[]).filter(i=>i.readinessScore===t);return s.length===0?null:s.every(i=>i.status==="Completed")?{currentScore:t,nextScore:t+1}:null}const go=`{
  "vision": {
    "component": "Vision for Change",
    "description": "Set the direction before you design the solution",
    "whatIsIt": "Vision for Change sets out why $projectName matters, how it will improve patient care and staff experience and what good looks like in everyday clinical and administrative work.",
    "userInsight": "$projectName landed best when it was framed as a clinical workflow and behaviour change, not a technology rollout",
    "whyThisMatters": "Reduces confusion about what $projectName is (and isn't) and protects trust in the change early.\\n Prevents the programme being judged only on technology rather than the intended workflow improvement.\\n Provides a consistent narrative across clinical, operational and admin audiences, reducing rumour-driven resistance.",
    "quickRealityCheck": "Can staff describe $projectName in one sentence? Does it reflect real pressures, not just programme goals?\\n Are leaders saying the same thing consistently? Do people understand what will change in their day-to-day work?",
    "whatGoodLooksLike": [
      {
        "title": "CLEAR AND COMPELLING",
        "body": "Vision is simple, inspiring and focused on patient care, staff experience and better ways of working."
      },
      {
        "title": "UNDERSTOOD AND SHARED",
        "body": "Staff at all levels can explain in their own words why $projectName matters and what will change.."
      },
      {
        "title": "CONSISTENTLY COMMUNICATED",
        "body": "Leaders reinforce the vision regularly and use it to guide decisions and priorities."
      },
      {
        "title": "GROUNDED IN REAL SITUATIONS",
        "body": "Vision reflects the day-to-day challenges teams face and the improvements $projectName will bring."
      },
      {
        "title": "GUIDES ACTIONS",
        "body": "Vision helps teams make choices, solve problems and stay focused on what matters"
      }
    ],
    "risksIfYouDont": [
      {
        "title": "SEEN AS A TECHNOLOGY ROLLOUT",
        "body": "Focus stays on the tool rather than the workflow and behaviour change."
      },
      {
        "title": "CONFUSION AND MIXED MESSAGES",
        "body": "Different teams hear different things, leading to uncertainty about the reason $projectName is being introduced."
      },
      {
        "title": "LOW ENGAGEMENT AND RESISTANCE",
        "body": "Staff don't see the relevance to their day-to-day work and are less likely to adopt $projectName."
      },
      {
        "title": "INCONSISTENT ADOPTION",
        "body": "Without a shared vision, use will vary widely across teams and services."
      },
      {
        "title": "BENEFITS NOT REALISED",
        "body": "Without a clear direction, efforts drift and the value of $projectName is not achieved"
      }
    ]
  },
  "case_for_change": {
    "component": "Case for Change",
    "description": "$projectName must solve a problem that staff clearly recognise",
    "whatIsIt": "A Case for Change explains the real clinical and operational pressures $projectName is responding to, why change is needed now and why current  Ways of working are becoming unsustainable.",
    "userInsight": "$projectName was most effective when it clearly addressed real operational pressures such as backlogs, wait times and admin burdens.",
    "whyThisMatters": "Prevents confusion over whether $projectName is about productivity, wellbeing, backlog reduction or system replacement. Helps teams agree on the workflow changes needed to realise the benefits. Reduces early resistance by focusing on the problem that needs solving, not the novelty of $projectName.",
    "quickRealityCheck": "Can we explain why change is needed now? Are the benefits specific and measurable? Can leaders explain the change in one simple story? Is the problem clearly defined or are you starting with $projectName as the answer?",
    "whatGoodLooksLike": [
      {
        "title": "$projectName NOT SEEN AS A TECHNICAL ROLLOUT",
        "body": "$projectName is consistently understood as a clinical workflow and behaviour change, not a technology rollout"
      },
      {
        "title": "LOWER COGNITIVE LOAD",
        "body": "Clinicians experience lower cognitive load, better patient interaction and stronger day-to-day usability"
      },
      {
        "title": "RESISTANCE REDUCTION",
        "body": "Reduces early resistance by focusing on the problem that needs solving, not the novelty of $projectName"
      },
      {
        "title": "CLEAR PROBLEM STATEMENT",
        "body": "The problem $projectName is solving is specific, evidence-based and easy to explain."
      },
      {
        "title": "COMPELLING REASON TO ACT NOW",
        "body": "There is urgency, not just a general desire to improve."
      }
    ],
    "risksIfYouDont": [
      {
        "title": "STALLED ADOPTION",
        "body": "Adoption stalls once the novelty fades because the purpose was never clear."
      },
      {
        "title": "DISENGAGEMENT",
        "body": "Productivity narratives trigger suspicion and disengagement in $projectNames introduction."
      },
      {
        "title": "SCALING JUSTIFICATION STRUGGLES",
        "body": "Leaders struggle to justify scaling because there is no credible “why now” and “what problem”"
      },
      {
        "title": "BUSINESS OUTCOMES NOT LINKED",
        "body": "Business Outcomes are not clearly linked to $projectName"
      },
      {
        "title": "DISAGREEMENTS REGARDING THE PROBLEM",
        "body": "Stakeholders do not agree on the problem statement."
      }
    ]
  },
  "sponsorship": {
    "component": "Senior Sponsorship & Governance",
    "description": "Make $projectName clinically led and operationally owned, not IT driven",
    "whatIsIt": "Sponsorship means visible clinical and operational senior leaders driving $projectName as service improvement, supporting teams, removing barriers and building confidence to support adoption. Governance provides the structure for making clear timely decisions, so $projectName is introduced safely, consistently and at scale by having the right clinical, digital and safety checks in place.",
    "userInsight": "$projectName succeeded when strong clinical and operational sponsorship ensured $projectName was delivered as a clinical service improvement, not an IT led change, with leaders driving adoption, behaviours and redesign. Clear proportionate governance enabled safe timely decisions and supported $projectName scaling across clinical, operational and digital teams.",
    "whyThisMatters": "Visible senior clinical and operational leadership builds trust, reduces resistance and enables pace and scale.\\n Ensures $projectName is a clinical workflow change with clinical direction and operational ownership of local redesign.\\n Sponsors remove barriers, support teams and make the decisions related to risk and workflow needed to embed change.\\n Drives timely and clear decisions through defined decision making, governance cadence and active oversight.\\n Enables safe, compliant use by ensuring assurance (IG, DPIA, Cyber, clinical safety and consent) is in place before clinical deployment.\\n Supports scaling beyond pilots by managing risks transparently and creating a controlled organisation wide approach.",
    "quickRealityCheck": "Are senior leaders actively showing support? Do sponsors demonstrate behaviours they expect from others?\\n Are sponsors listening to feedback and responding? Are sponsors using the same consistent story?\\n Are roles clear across business, tech, legal, risk and Ops? Who actually owns the decision, risk and sign off?\\n Is there a clear escalation path when something fails? Are policies being followed in practice, not just documented?",
    "whatGoodLooksLike": [
      {
        "title": "CLEAR SPONSORSHIP IN PLACE",
        "body": "Clear credible sponsorship in place – named SRO, clinical sponsor (e.g. Medical Director/CCIO) and operational lead with ownership beyond digital/IT."
      },
      {
        "title": "VISIBLE LEADERSHIP",
        "body": "Visible leadership driving change on the ground – actively engaging teams, reinforcing new behaviours and removing barriers to adoption."
      },
      {
        "title": "OPERATIONAL OWNERSHIP",
        "body": "Operational ownership embedded early and leading workflow redesign."
      },
      { "title": "FRONTLINE FEEDBACK", "body": "Frontline feedback is heard and acted on." },
      {
        "title": "CLEAR GOVERNANCE",
        "body": "There is a clear $projectName governance forum aligned to existing clinical and operational structures, with clear decision rights, escalation routes and documented approval authority."
      }
    ],
    "risksIfYouDont": [
      {
        "title": "FAILURE TO SCALE",
        "body": "Without senior clinical and operational leadership, adoption depends on individual enthusiasts and fails to scale across services."
      },
      {
        "title": "NO HUMAN IN THE LOOP",
        "body": "Workflow issues and new ways of working, including \\"Human in the Loop\\" review and approval, may not be owned or resolved."
      },
      {
        "title": "SLOW UPTAKE",
        "body": "Without visible senior backing, teams are less confident to change practice, delaying adoption and limiting impact."
      },
      {
        "title": "DELAYED DECISION MAKING",
        "body": "Decisions are delayed because ownership is unclear."
      },
      {
        "title": "NO GOVERNANCE",
        "body": "Without governance, there is no clear decision making between IG, IT and clinical/operational teams, which may lead to delays, hidden risk and pilots that never transition into controlled organisation wide roll outs."
      }
    ]
  },
  "change_network": {
    "component": "Change Network",
    "description": "Use trusted peers as champions to drive adoption and improvement",
    "whatIsIt": "A Change Network brings together trusted clinical, operational and admin champions to share clear messages, surface issues early and support peer to peer adoption of $projectName.",
    "userInsight": "Adoption spread through trusted peer to peer influence with champions often emerging organically who helped to drive uptake and sustain engagement over time.",
    "whyThisMatters": "Building trust enabling two-way engagement helps to drive adoption by involving staff in the change from the start.\\n Local networks help to build local confidence and support by using trusted peers.\\n Champions can help to surface workflow and template issues early through frontline insight, speeding up improvements.",
    "quickRealityCheck": "Do you have champions across the right roles, teams and locations? Do network members know what they have been asked to do?\\n Has protected time been discussed and agreed with managers? Have feedback channels been set up and shared?",
    "whatGoodLooksLike": [
      {
        "title": "VISIBLE CHAMPIONS",
        "body": "Champions are visible and active locally with peer learning, coaching and demonstration driving confidence and adoption as part of a Change Network."
      },
      {
        "title": "TWO WAY ENGAGEMENT",
        "body": "Two-way engagement is working with clear, consistent messages and early feedback shaping decisions."
      },
      {
        "title": "USE OF INSIGHTS",
        "body": "Insights are used to improve rollout, with champions surfacing issues early and informing workflow and template refinement."
      },
      {
        "title": "SUPPORTS ADOPTION",
        "body": "The network supports adoption before, during and after launch."
      },
      {
        "title": "HELP WITH VALIDATION",
        "body": "Champions help validate real world scenarios and user impacts."
      }
    ],
    "risksIfYouDont": [
      {
        "title": "LIMITED SUPPORT",
        "body": "Limited local support and influence. Change stays centralised with no trusted peers to explain, support and encourage adoption."
      },
      {
        "title": "LOW TRUST",
        "body": "Low trust and engagement. People don't feel involved or heard so confidence drops and resistance increases."
      },
      {
        "title": "NO PEER SUPPORT",
        "body": "Poor adoption and inconsistent use. Without peer support and reinforcement, take up is patchy and new ways of working don't stick."
      },
      {
        "title": "LACK OF REPRESENTATION",
        "body": "Champions are not representative of affected teams."
      },
      { "title": "STOPPED ACTIVITY", "body": "Network activity stops after launch." }
    ]
  },
  "benefits": {
    "component": "What's In It For Me (WIIFM) Benefits",
    "description": "Make the benefits real, relevant and meaningful for everyone",
    "whatIsIt": "What's in it for me (WIIFM) translates $projectName benefits into clear, personal messages so staff can see how the change will make their own work easier or better.",
    "userInsight": "WIIFM benefits landed more effectively when they reflected real practical clinical experience – reduced cognitive load, increased patient focus and clinical safety.",
    "whyThisMatters": "WIIFM messaging is a primary driver of engagement and can support resistance reduction.\\n Role-specific benefits help reduce fear about workforce impact and job loss narratives.\\n Credible WIIFM support safer adoption by reinforcing correct use and \\"Human in the Loop\\" review and approval of $projectName outputs.",
    "quickRealityCheck": "Do people understand what's in it for them? Are the benefits relevant to the real workforce pressures?\\n Are we communicating WIIFM benefits in the right way? Are people showing they understand the reason for the $projectName introduction?",
    "whatGoodLooksLike": [
      {
        "title": "STAFF EXPLANATION",
        "body": "Staff can explain the benefits in their own words, not just repeat generic transformation language."
      },
      {
        "title": "REAL DAY TO DAY IMPROVEMENTS",
        "body": "Communications focus on real day to day improvements."
      },
      {
        "title": "CLEAR ADMIN IMPACTS",
        "body": "Admin impacts are clearly explained, including how roles may evolve and how staff will be supported."
      },
      {
        "title": "FEEDBACK LED ADOPTION",
        "body": "Concerns are captured and used to refine messaging, training and support."
      },
      {
        "title": "ROLE SPECIFIC BENEFITS",
        "body": "Benefits are tailored by audience, especially for clinicians."
      }
    ],
    "risksIfYouDont": [
      {
        "title": "DOMINATING MYTHS",
        "body": "Productivity enforcement myths dominate and reduce uptake."
      },
      {
        "title": "INCREASED ANXIETY",
        "body": "Admin staff assume $projectName is workforce reduction leading to increased anxiety."
      },
      {
        "title": "ENTHUSIASM FADES",
        "body": "Benefits remain theoretical; enthusiasm fades quickly."
      },
      {
        "title": "TRAINING LANDS POORLY",
        "body": "Staff attend training but do not apply $projectName because the 'Why' is unclear."
      },
      {
        "title": "MOMENTUM FADES",
        "body": "Early interest drops off before $projectName becomes embedded in ways of working."
      }
    ]
  },
  "change_impact": {
    "component": "Change Impact",
    "description": "",
    "whatIsIt": "",
    "userInsight": "",
    "whyThisMatters": "",
    "quickRealityCheck": "",
    "whatGoodLooksLike": [],
    "risksIfYouDont": []
  },
  "risk_management": {
    "component": "Risk Management",
    "description": "",
    "whatIsIt": "",
    "userInsight": "",
    "whyThisMatters": "",
    "quickRealityCheck": "",
    "whatGoodLooksLike": [],
    "risksIfYouDont": []
  },
  "cm_readiness": {
    "component": "CM Readiness & Planning",
    "description": "",
    "whatIsIt": "",
    "userInsight": "",
    "whyThisMatters": "",
    "quickRealityCheck": "",
    "whatGoodLooksLike": [],
    "risksIfYouDont": []
  },
  "stakeholder": {
    "component": "Stakeholder Engagement and Communication",
    "description": "Engage early and involve staff in shaping how $projectName will work",
    "whatIsIt": "Stakeholder Engagement and Communications build understanding, trust and commitment through early, two-way engagement with clinicians, admin teams, leaders and patients.",
    "userInsight": "Adoption was strongest where trusted peers led the change, clinical and admin teams were engaged early and patients and clinicians had clarity and confidence around the change.",
    "whyThisMatters": "Engagement reduces resistance by building understanding and addressing misconceptions early.\\n When people are involved in design, they become advocates.\\n Patient trust and understanding is increased when communication is transparent and choice based.",
    "quickRealityCheck": "Is there a feedback loop after communications go out? Are comms understandable to non-technical staff?\\n Are issues tracked through to closure? Are real life scenarios included in validations?",
    "whatGoodLooksLike": [],
    "risksIfYouDont": []
  },
  "resistance": {
    "component": "Resistance Management",
    "description": "",
    "whatIsIt": "",
    "userInsight": "",
    "whyThisMatters": "",
    "quickRealityCheck": "",
    "whatGoodLooksLike": [],
    "risksIfYouDont": []
  },
  "skills_learning": {
    "component": "Skills and Learning",
    "description": "",
    "whatIsIt": "",
    "userInsight": "",
    "whyThisMatters": "",
    "quickRealityCheck": "",
    "whatGoodLooksLike": [
      {
        "title": "ROLE BASED TRAINING",
        "body": "Training is role-based and reinforces \\"Human in the Loop\\" review and approval of $projectName outputs, with clear clinical accountability."
      },
      {
        "title": "AT THE ELBOW",
        "body": "\\"At the elbow\\" or in-service support exists for early use and those lacking confidence."
      },
      {
        "title": "HELP",
        "body": "Refreshers and rapid help routes exist; small irritants are fixed quickly."
      },
      {
        "title": "PREPARATION FOR NEW WAYS OF WORKING",
        "body": "Frontline teams are prepared for new ways of working."
      },
      {
        "title": "PRE-GO LIVE ASSESSMENTS",
        "body": "Confidence and readiness are assessed before go live."
      }
    ],
    "risksIfYouDont": [
      {
        "title": "NON-ADOPTION",
        "body": "People attend training but still don't adopt because confidence is low and support isn't available."
      },
      {
        "title": "MIXED MESSAGES",
        "body": "Mixed messages on \\"Human in the Loop\\" review and approval of $projectName outputs can lead to unsafe practice or avoidance."
      },
      {
        "title": "SUPPLIER RELIANCE",
        "body": "Reliance on suppliers persists because local super-user capability is not built."
      },
      { "title": "LATE IDENTIFICATION", "body": "Skills gaps are identified too late." },
      {
        "title": "GENERIC TRAINING",
        "body": "Training is too generic and not tailored to real use."
      }
    ]
  },
  "capability": {
    "component": "Capability And Confidence",
    "description": "Confidence grows when $projectName makes work easier in practice",
    "whatIsIt": "Capability and Confidence focus on building the organisational skills and confidence needed to make $projectName a trusted routine part of everyday practice.",
    "userInsight": "Adoption was driven by proven performance in practice through proof of concepts, whilst reliability issues quickly reduced trust.",
    "whyThisMatters": "Capability and confidence determines whether $projectName becomes routine practice or use remains limited.\\n Confidence supports safe \\"Human in the Loop\\" review and approval of $projectName outputs, even under pressure.\\n Internal capability reduces supplier dependence and helps scale up $projectName.",
    "quickRealityCheck": "Can staff use $projectName without step-by-step instructions? Do confidence levels match training completion?\\n Have staff had safe practice time? Is peer support available locally?",
    "whatGoodLooksLike": [
      {
        "title": "RELIABLE $projectName USE",
        "body": "Users can use $projectName reliably in real settings and maintain full clinical responsibility through \\"Human in the Loop\\" review and approval."
      },
      {
        "title": "CHANGE CHAMPIONS SUPPORT",
        "body": "Local champions/super-users exist and are supported with customisation skills."
      },
      {
        "title": "IMPROVED COMPLIANCE BEHAVIOURS",
        "body": "Compliance behaviours (e.g. consent recording) improve through reinforcement and clearer workflows."
      },
      {
        "title": "CONFIDENCE BUILDS GRADUALLY",
        "body": "Users are supported to move from basic familiarity to confident, routine use."
      },
      {
        "title": "LEARNING IS REVISITED",
        "body": "Training is revisited as systems, workflows or staff needs change."
      }
    ],
    "risksIfYouDont": [
      {
        "title": "STALLED ADOPTION",
        "body": "Early trust issues spread socially and adoption stalls."
      },
      {
        "title": "UNSAFE PRACTICES",
        "body": "Unsafe practice arises when \\"Human in the Loop\\" review and approval and clinical accountability are not embedded."
      },
      {
        "title": "VENDOR DEPENDENCY",
        "body": "Organisations remain dependent on vendors for day-to-day optimisation."
      },
      {
        "title": "GENERIC TRAINING",
        "body": "Support does not reflect different roles, workflows or confidence levels."
      },
      {
        "title": "LOW CONFIDENCE",
        "body": "Some users avoid $projectName because they are uncomfortable with the technology."
      }
    ]
  },
  "change_adoption": {
    "component": "Change Adoption",
    "description": "Focus on how $projectName is used in practice, not just whether it is used",
    "whatIsIt": "Change adoption is the extent to which $projectName is used confidently and consistently in day-to-day practice beyond go-live. It involves regularly reviewing real usage and feedback to identify where support or reinforcement is needed.",
    "userInsight": "Adoption improved when organisations looked beyond usage data to understand user experience and variation in use, using structured pilots as learning opportunities with clear decision points rather than scaling up too early.",
    "whyThisMatters": "If people don't use $projectName properly, you won't get the benefits and understanding why, helps you fix issues and scale safely.\\n Understanding \\"why not\\" enables targeted support for low confidence, workarounds and resistance.\\n Clear adoption decision points support safe scaling and protects trust.",
    "quickRealityCheck": "Is $projectName being used as intended in real clinical workflows? Is use consistent across different teams and roles?\\n Do staff feel confident using $projectName in their day-to-day work? Do you understand why some staff are not using $projectName?",
    "whatGoodLooksLike": [
      {
        "title": "ACTIVE MONITORING",
        "body": "Adoption is actively monitored using usage data and feedback from high and low users."
      },
      {
        "title": "TARGETED REINFORCEMENT",
        "body": "Targeted support is put in place where needed to support confident and consistent use."
      },
      {
        "title": "LEARNING IN PRACTICE",
        "body": "Use early learning to refine support and strengthen stakeholder confidence."
      },
      {
        "title": "VISIBLE SUPPORT",
        "body": "Champions are active post go-live providing targeted support to address issues and improve adoption."
      },
      {
        "title": "CONSISTENT USE",
        "body": "$projectName is used in a consistent way across teams and services in day-to-day practice."
      }
    ],
    "risksIfYouDont": [
      {
        "title": "UNREALISED BENEFITS",
        "body": "If adoption is inconsistent, the benefits of $projectName will not be realised."
      },
      {
        "title": "PATCHY USE",
        "body": "Variation in how $projectName is used across teams leads to inconsistent use, reducing confidence."
      },
      {
        "title": "HIDDEN ISSUES",
        "body": "Without understanding why people are not using $projectName, underlying issues are missed."
      },
      {
        "title": "PERSISTENT WORKAROUNDS",
        "body": "Low confidence, workarounds and resistance persist without targeted reinforcement, undermining effective use."
      },
      {
        "title": "SCALING TOO EARLY",
        "body": "Without clear adoption insights and decision points, organisations risk scaling too quickly."
      }
    ]
  },
  "process_change": {
    "component": "Ways of Working",
    "description": "Make $projectName part of everyday practice – set clear expectations and co-design locally",
    "whatIsIt": "Ways of Working define the new behaviours, habits and expectations needed to use $projectName safely and consistently across different clinical settings.",
    "userInsight": "$projectName only transformed practice when teams changed habits, otherwise old ways persisted.",
    "whyThisMatters": "Inconsistent practice can emerge across teams and settings.\\n Clinicians slip back into old habits rewriting notes or just dictation.\\n Safety risks increase when \\"Human in the Loop\\" review and approval and clinical ownership drop when it gets busy.",
    "quickRealityCheck": "Can staff explain how $projectName fits with the workflow? Do supporting materials match actual practice?\\n Are workarounds being spotted? Is feedback being used to refine the workflow?",
    "whatGoodLooksLike": [],
    "risksIfYouDont": []
  },
  "reinforcement": {
    "component": "Reinforcement",
    "description": "",
    "whatIsIt": "",
    "userInsight": "",
    "whyThisMatters": "",
    "quickRealityCheck": "",
    "whatGoodLooksLike": [
      {
        "title": "TARGETED REINFORCEMENT ACTIONS",
        "body": "Regular review of adoption plus feedback is used to target reinforcement actions."
      },
      {
        "title": "FIXED PAIN POINTS",
        "body": "Known pain points are fixed quickly and communicated back to users."
      },
      {
        "title": "ONGOING BENEFITS",
        "body": "Ongoing optimisation and benefits tracking continues beyond initial rollout. Benefits and successes are shared widely to reinforce value."
      },
      {
        "title": "$projectName BECOMES ROUTINE",
        "body": "$projectName is embedded into everyday workflows, meetings, supervision and operational conversations."
      },
      {
        "title": "DATA GUIDES REINFORCEMENT",
        "body": "Usage data, feedback and adoption patterns show where extra reinforcement is needed."
      }
    ],
    "risksIfYouDont": [
      {
        "title": "FALLEN ADOPTION",
        "body": "Adoption falls after initial friction because no one closes the loop."
      },
      {
        "title": "ENTRENCHED BEHAVIOURS",
        "body": "Small irritants become entrenched behaviours and workarounds."
      },
      {
        "title": "UNPROVEN BENEFITS",
        "body": "Benefits remain unproven and scaling loses momentum."
      },
      {
        "title": "OLD HABITS RETURN",
        "body": "Teams revert to previous ways of working when $projectName in not embedded into daily routines."
      },
      {
        "title": "ONE OFF TRAINING",
        "body": "Staff receive go live training but no refresher support as context changes."
      }
    ]
  },
  "org_maturity": {
    "component": "Organisational Change Management Maturity",
    "description": "$projectName success depends on managing adoption, not just implementation.",
    "whatIsIt": "Organisational Change Management Maturity helps organisations reflect on their wider ability to manage and sustain change, so change adoption strengthens long-term capability rather than adding to change fatigue.",
    "userInsight": "Breaking readiness into clear repeatable categories (leadership, governance, technology, people and service readiness) supported more consistent $projectName success.",
    "whyThisMatters": "Change maturity informs how much support and structure is needed for safe, sustained change.\\n It prevents labelling organisations as being resistant, when issues are related to capability, resourcing or readiness gaps.\\n It enables repeatable scaling by applying consistent readiness criteria and governance discipline.",
    "quickRealityCheck": "Is $projectName being managed as a people and workflow change? Is there enough change capability?\\n Have stakeholders shaped the approach? Are managers and champions equipped?",
    "whatGoodLooksLike": [
      {
        "title": "STRUCTURED READINESS",
        "body": "Structured readiness criteria are used before scaling."
      },
      {
        "title": "USEFUL LEARNING CAPTURED",
        "body": "Learning is captured and reused through evidence and examples."
      },
      {
        "title": "REPEATABLE CHANGE PRACTICES",
        "body": "Change practices become repeatable, with clear ownership, cadence and measures."
      },
      {
        "title": "LEADERSHIP ALIGNMENT",
        "body": "Senior leaders are aligned on why $projectName matters and what success look like."
      },
      {
        "title": "BENEFITS ARE OWNED",
        "body": "Expected benefits are clearly defined, tracked and owned beyond go live."
      }
    ],
    "risksIfYouDont": [
      {
        "title": "INCONSISTENT CHANGE",
        "body": "Change becomes reactive and inconsistent; fatigue increases as lessons are not implemented."
      },
      {
        "title": "EVIDENCE LED DECISIONS",
        "body": "Scaling decisions become enthusiasm driven rather than evidence led."
      },
      {
        "title": "GOVERNANCE GAPS",
        "body": "Governance and readiness gaps create avoidable disruption and loss of trust."
      },
      {
        "title": "ADOPTION NOT ACTIVELY MANAGED",
        "body": "Focus stays on go live, with limited tracking of usage, confidence or barriers."
      },
      {
        "title": "INSUFFICIENT CHANGE CAPABILITY",
        "body": "Teams lack the time, resource or skills to support adoption properly."
      }
    ]
  },
  "transfer_bau": {
    "component": "Transfer to Business as Usual (BAU)",
    "description": "Plan how $projectName will be owned and sustained after Go-Live",
    "whatIsIt": "Transfer to BAU ensures $projectName moves from a time-limited rollout into routine clinical and operational practice, with clear ownership, ongoing support and sustained adoption.",
    "userInsight": "Where $projectName remained owned only by a project or digital team, workflow and behaviour issues resurfaced without clear operational accountability.",
    "whyThisMatters": "Without a clear BAU transition, $projectName risks becoming \\"something we tried\\" rather than how we work.\\n BAU ownership ensures clinical safety behaviours are maintained under everyday operational pressure.\\n Embedding $projectName into BAU enables continuous optimisation (templates, workflows, support) rather than freezing practice at go-live.",
    "quickRealityCheck": "Can you name who owns $projectName in BAU? Is $projectName being used consistently across teams?\\n Do staff know where to go when something goes wrong? Are issues being fixed and improvements made?",
    "whatGoodLooksLike": [
      {
        "title": "CLEAR OWNERSHIP",
        "body": "There is named BAU ownership for adoption, safety, support and optimisation."
      },
      {
        "title": "ACTIVE MONITORING",
        "body": "Adoption, confidence and safety signals are reviewed."
      },
      {
        "title": "CONTINUOUS IMPROVEMENT",
        "body": "Feedback loops and reinforcement activity continue after go-live, with visible fixes and updates."
      },
      {
        "title": "VISIBLE VALUE",
        "body": "$projectName performance and benefits are discussed within routine service or operational forums."
      },
      {
        "title": "ACCESSIBLE SUPPORT",
        "body": "People know where to go for support and how to get help quickly."
      }
    ],
    "risksIfYouDont": [
      {
        "title": "UNCLEAR OWNERSHIP",
        "body": "Adoption slowly erodes as early enthusiasm fades and no one \\"owns\\" sustained use."
      },
      {
        "title": "REDUCED OVERSIGHT",
        "body": "Safety practices (review and approval of $projectName outputs and consent recording) weaken under pressure without reinforcement."
      },
      {
        "title": "PERSISTENT ISSUES",
        "body": "Workflow and template issues persist, leading to frustration and workarounds."
      },
      {
        "title": "UNPROVEN VALUE",
        "body": "Organisations struggle to evidence value, making further scale or funding decisions harder."
      },
      {
        "title": "LIMITED SUPPORT",
        "body": "Support routes are unclear, so issues persist or are ignored."
      }
    ]
  },
  "celebrating_success": {
    "component": "Celebrating Success",
    "description": "Seeing successes makes adoption feel real",
    "whatIsIt": "Celebrating successes not only increases morale but it builds support among those that may need to \\"see it to believe it\\". Recognition is needed in order to cement or reinforce the change.",
    "userInsight": "Celebrating success was most effective when staff saw what worked from their peers, as real examples from colleagues strengthened engagement and adoption.",
    "whyThisMatters": "Saying exactly what went well helps everyone feel proud and ready for the next step.\\n It creates a culture of appreciation where people feel valued, recognised and encouraged to keep improving.\\n It reinforces positive behaviours by showing what good looks like and encouraging others to follow it.",
    "quickRealityCheck": "Are you celebrating genuine progress, not just activity? Are you recognising small and large successes?\\n Do you have a criteria for what success looks like? Are you learning from successes and not just measuring them?",
    "whatGoodLooksLike": [
      {
        "title": "PROGRESS IS MADE VISIBLE",
        "body": "Achievements are shared clearly so people can see what has improved and why it matters."
      },
      {
        "title": "USEFUL LEARNING CAPTURED",
        "body": "Celebrating success includes reflecting on what worked well, so the learning can be used again."
      },
      {
        "title": "PEOPLE RECOGNITION",
        "body": "Recognise the people behind the success, including quieter contributions and team effort."
      },
      {
        "title": "SUCCESS MEASURES DEFINED",
        "body": "Clear definitions for measuring success is shared and understood."
      },
      {
        "title": "TIMELY RECOGNITION",
        "body": "Success is acknowledged soon after it happens, so staff feel their contribution has been noticed and valued."
      }
    ],
    "risksIfYouDont": [
      {
        "title": "MOTIVATION DROPS",
        "body": "People may feel their effort goes unnoticed, which can reduce energy, commitment and enthusiasm."
      },
      {
        "title": "PROGRESS BECOMES INVISIBLE",
        "body": "Without celebration, improvements and achievements can be overlooked or forgotten."
      },
      {
        "title": "LEARNING IS LOST",
        "body": "If $projectName does not pause to recognise success, it may also miss the opportunity to understand what worked well."
      },
      {
        "title": "CONFIDENCE IS REDUCED",
        "body": "Staff may be less likely to take initiative or try new approaches if success is not acknowledged."
      },
      {
        "title": "TEAM SPIRIT WEAKENS",
        "body": "A lack of recognition can reduce shared pride, connection and collaboration across $projectName."
      }
    ]
  }
}
`,ya="custom-outcome:";function po(n){return n.startsWith(ya)}const ho=si.filter(n=>n!=="Overdue start"&&n!=="Overdue completion"),fo=[0,1,2,3,4,5],bo={0:"Not Started",1:"Emerging",2:"Developing",3:"Embedding",4:"Adopted",5:"Thriving"},Ds={"Not Started":"bg-slate-100 text-slate-700 border-slate-200","In Progress":"bg-blue-100 text-blue-800 border-blue-200",Blocked:"bg-amber-100 text-amber-800 border-amber-200",Completed:"bg-green-100 text-green-800 border-green-200"},$s=JSON.parse(go),va=4;function xo(n,t){return bt.reduce((s,a)=>{const i=ht("Default",a.id,"inputs",void 0,n),r=ht("Default",a.id,"deliverables",void 0,n),o=new Map;return[...i,...r].forEach(u=>{var c,f;if(u.label&&u.label.trim().length>=va){const l=t?Xt(u,t).url:u.url,x=(f=(c=t==null?void 0:t.links)==null?void 0:c[u.key])==null?void 0:f.matchAliases;o.set(u.label.toLowerCase(),{...u,url:l,matchAliases:x})}}),s[a.id]=[...o.values()],s},{})}function So(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function wa(n){const t=new Set([n]);return new RegExp("(?<!s)s$","i").test(n)&&t.add(n.slice(0,-1)),[...t]}function Bn(n,t,s,a){const i=n||"Untitled action";if(t.length===0)return i;const o=t.flatMap(l=>{const x=l.kind==="url"?l.matchAliases||[]:[];return[...wa(l.label),...x].map(b=>({variant:b,link:l}))}).sort((l,x)=>x.variant.length-l.variant.length),u=o.map(l=>`\\b${So(l.variant)}\\b`).join("|"),c=i.split(new RegExp(`(${u})`,"gi")),f=`underline decoration-dotted underline-offset-2 ${s?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`;return c.map((l,x)=>{const b=o.find(d=>d.variant.toLowerCase()===l.toLowerCase());if(!b)return l;const S=b.link;return S.kind==="tool"?e.jsx("button",{type:"button",onClick:d=>{d.stopPropagation(),a==null||a(S.tool)},className:f,children:l},`${S.key}-${x}`):e.jsx("a",{href:S.url,target:"_blank",rel:"noopener noreferrer",onClick:d=>d.stopPropagation(),className:f,children:l},`${S.key}-${x}`)})}function Ts(n){return n.split(`
`).map(t=>t.trim()).filter(Boolean)}const yo="Your Project";function vo(n,t){return n.replace(/\$projectName/g,t)}function wo(n,t){const s=i=>vo(i,t),a=i=>i.map(r=>({title:s(r.title),body:s(r.body)}));return{component:s(n.component),description:s(n.description),whatIsIt:s(n.whatIsIt),userInsight:s(n.userInsight),whyThisMatters:s(n.whyThisMatters),quickRealityCheck:s(n.quickRealityCheck),whatGoodLooksLike:a(n.whatGoodLooksLike),risksIfYouDont:a(n.risksIfYouDont)}}const Na={good:{border:"border-emerald-200",bg:"bg-emerald-50 hover:bg-emerald-100",text:"text-black",titleText:"text-emerald-700"},risk:{border:"border-rose-200",bg:"bg-rose-50 hover:bg-rose-100",text:"text-black",titleText:"text-rose-800"}},Ca={good:{border:"border-emerald-500/40",bg:"bg-emerald-500/10 hover:bg-emerald-500/15",text:"text-emerald-200",titleText:"text-slate-100"},risk:{border:"border-rose-500/40",bg:"bg-rose-500/10 hover:bg-rose-500/15",text:"text-rose-200",titleText:"text-slate-100"}};function No({points:n,tone:t,guidanceLinks:s,darkMode:a,onNavigateToTool:i}){const r=a?Ca[t]:Na[t];return e.jsx("ul",{className:"space-y-3",children:n.map(o=>e.jsxs("li",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${r.titleText}`,children:o.title}),e.jsx("p",{className:`mt-0.5 text-sm ${r.text}`,children:Bn(o.body,s,a,i)})]},o.title))})}function Ls({title:n,points:t,tone:s,isOpen:a,onToggle:i,guidanceLinks:r,darkMode:o,onNavigateToTool:u}){const c=o?Ca[s]:Na[s];return e.jsxs("div",{className:`rounded-md border ${c.border}`,children:[e.jsxs("button",{type:"button",onClick:i,className:`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold transition-colors ${c.bg} ${c.text}`,children:[n,e.jsx("span",{"aria-hidden":"true",children:a?"−":"+"})]}),a&&e.jsx("div",{className:`border-t px-3 py-3 ${c.border}`,children:e.jsx(No,{points:t,tone:s,guidanceLinks:r,darkMode:o,onNavigateToTool:u})})]})}function Co({detail:n,furtherReadingUrl:t,guidanceLinks:s,darkMode:a,onNavigateToTool:i}){const[r,o]=m.useState(!0),[u,c]=m.useState(!0);return e.jsxs("div",{children:[n.description&&e.jsx("p",{className:`text-sm ${a?"text-slate-200":"text-slate-700"}`,children:n.description}),e.jsxs("div",{className:`mt-4 space-y-4 ${n.description?"border-t pt-4":""} ${a?"border-slate-700":"border-slate-200"}`,children:[t&&e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs font-semibold ${a?"border-slate-600 bg-slate-800 text-blue-300 hover:bg-slate-700":"border-slate-300 bg-white text-[#005eb8] hover:bg-slate-50"}`,children:"Further Reading ↗"}),n.whatIsIt&&e.jsx("p",{className:`text-sm ${a?"text-slate-300":"text-slate-600"}`,children:Bn(n.whatIsIt,s,a,i)}),n.userInsight&&e.jsxs("blockquote",{className:`border-l-2 pl-3 text-sm italic ${a?"border-slate-600 text-slate-300":"border-slate-300 text-slate-600"}`,children:["“",Bn(n.userInsight,s,a,i),"”"]}),n.whyThisMatters&&e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${a?"text-slate-200":"text-slate-700"}`,children:"Why this matters"}),e.jsx("ul",{className:`mt-1 list-disc space-y-1 pl-5 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:Ts(n.whyThisMatters).map(f=>e.jsx("li",{children:Bn(f,s,a,i)},f))})]}),n.quickRealityCheck&&e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${a?"text-slate-200":"text-slate-700"}`,children:"Quick reality check"}),e.jsx("ul",{className:`mt-1 list-disc space-y-1 pl-5 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:Ts(n.quickRealityCheck).map(f=>e.jsx("li",{children:Bn(f,s,a,i)},f))})]}),(n.whatGoodLooksLike.length>0||n.risksIfYouDont.length>0)&&e.jsxs("div",{className:"space-y-2",children:[n.whatGoodLooksLike.length>0&&e.jsx(Ls,{title:"What good looks like",points:n.whatGoodLooksLike,tone:"good",isOpen:r,onToggle:()=>o(f=>!f),guidanceLinks:s,darkMode:a,onNavigateToTool:i}),n.risksIfYouDont.length>0&&e.jsx(Ls,{title:"Risks if you don't",points:n.risksIfYouDont,tone:"risk",isOpen:u,onToggle:()=>c(f=>!f),guidanceLinks:s,darkMode:a,onNavigateToTool:i})]})]})]})}function Eo({open:n,onClose:t,detail:s,furtherReadingUrl:a,guidanceLinks:i,darkMode:r,onNavigateToTool:o}){return n?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${r?"text-slate-300":"text-slate-500"}`,children:"Component overview"}),e.jsx("button",{type:"button",onClick:t,"aria-label":"Close component overview",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${r?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:"mt-2",children:e.jsx(Co,{detail:s,furtherReadingUrl:a,guidanceLinks:i,darkMode:r,onNavigateToTool:o})})]})}):null}const Ut="__evidence_json__:",ko=1024*1024;function jo(n,t,s){return(s[n]||[]).filter(a=>a.linkedActions.some(i=>i.actionId===t))}function Ea(n){const t=n.trim();return t?/^https?:\/\//i.test(t)?t:/^www\./i.test(t)?`https://${t}`:t:""}function jt(n){const t=(n==null?void 0:n.trim())||"";if(!t)return[];if(t.startsWith(Ut))try{const s=JSON.parse(t.slice(Ut.length));return Array.isArray(s)?s.filter(a=>a&&(a.type==="url"||a.type==="file")).map(a=>({type:a.type,label:String(a.label||"").trim(),href:String(a.href||"").trim()})).filter(a=>a.label||a.href):[]}catch{return[]}return t.split(`
`).map(s=>s.trim()).filter(Boolean).map(s=>{const a=Ea(s);return{type:"url",label:s,href:a}})}function Io(n){const t=n.map(s=>({type:s.type,label:s.label.trim(),href:s.href.trim()})).filter(s=>s.label||s.href);return t.length?`${Ut}${JSON.stringify(t)}`:""}function Ao({rows:n,isOpen:t,onToggle:s,darkMode:a}){return e.jsxs("div",{className:`mb-8 rounded-lg border ${a?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("button",{type:"button",onClick:s,className:"flex w-full items-center justify-between gap-4 px-5 py-4 text-left",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-sm font-semibold ${a?"text-slate-100":"text-slate-800"}`,children:"Evidence Links and Docs"}),e.jsx("p",{className:`mt-0.5 text-xs ${a?"text-slate-400":"text-slate-500"}`,children:n.length?`${n.length} item${n.length===1?"":"s"} attached across this component's actions.`:"Everything attached as evidence across this component's actions, in one place."})]}),e.jsx("span",{className:`shrink-0 text-xs font-semibold ${a?"text-slate-300":"text-slate-500"}`,children:t?"Hide −":"Show +"})]}),t&&e.jsx("div",{className:`border-t px-5 py-4 ${a?"border-slate-700":"border-slate-200"}`,children:n.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${a?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:a?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Type"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Link / Doc"})]})}),e.jsx("tbody",{className:`${a?"divide-slate-700":"divide-slate-100"} divide-y`,children:n.map((i,r)=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-100":"text-slate-800"}`,children:i.actionText}),e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:i.lens}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`${i.item.type==="file"?"bg-emerald-100 text-emerald-800":"bg-blue-100 text-blue-800"} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`,children:i.item.type==="file"?"File":"Link"})}),e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-100":"text-slate-800"}`,children:i.item.href?e.jsx("a",{href:i.item.href,target:"_blank",rel:"noopener noreferrer",className:`underline ${a?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:i.item.label||i.item.href}):i.item.label||"—"})]},`${i.lens}:${r}`))})]})}):e.jsx("p",{className:`text-sm ${a?"text-slate-400":"text-slate-500"}`,children:"No evidence added yet. Attach links or documents to an action to see them here."})})]})}function _o(n){return new Promise((t,s)=>{const a=new FileReader;a.onload=()=>t(String(a.result||"")),a.onerror=()=>s(new Error("Unable to read file.")),a.readAsDataURL(n)})}function Oo(){return e.jsx("svg",{className:"w-4 h-4 text-blue-500 mt-0.5 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Ro(){return e.jsx("svg",{className:"w-5 h-5 ml-2 text-slate-400 group-hover:text-[#005eb8] shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Po(n,t){let s=n,a=Ps({actions:t},s);for(;a;)s=a.nextScore,a=Ps({actions:t},s);return s}function Do(n,t,s){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:"",actionType:void 0,owner:"",timescale:"",status:"Planned",phase:n,startDate:"",dueDate:"",notes:"",evidence:"",linkedTargets:[{componentId:t,lens:s}]}}function Cn(n,t,s){const a=n.linkedTargets||[];if(!a.length)return[{componentId:t,lens:s}];const i=new Set,r=[];return a.forEach(o=>{const u=`${o.componentId}:${o.lens}`;i.has(u)||(i.add(u),r.push({componentId:o.componentId,lens:o.lens}))}),r}function $o({store:n,components:t,activeComponentId:s,getRubricText:a,getEntry:i,onComponentChange:r,onEntryUpdate:o,onOpenLensInfo:u,onActionRemove:c,onObjectivesUpdate:f,onNavigateToTool:l,hideGuidedWorkflow:x=!1,showAdditionalGuidanceLinks:b=!0,onHideGuidedWorkflow:S,darkMode:d=!1,focusAction:A,onFocusActionHandled:_}){var jn,fn,Jn,Xn,Qn,Zn,et,In,wt,An,nt,tt,st,an,bn;const h=t.find(g=>g.id===s)||t[0],M=(fn=(jn=n.orgProfile)==null?void 0:jn.cst)==null?void 0:fn.pathway,U=g=>M&&M!=="pathway-1"?`No outcomes or actions are defined for ${Ht[M]} yet.`:g,te=((Xn=(Jn=n.orgProfile)==null?void 0:Jn.projectName)==null?void 0:Xn.trim())||yo,D=(Qn=$s[h.id])!=null&&Qn.whatIsIt?wo($s[h.id],te):void 0,j=(Zn=n.orgProfile)!=null&&Zn.coreLinks&&n.orgProfile.coreLinks.length>0?n.orgProfile.coreLinks:ba,q=m.useMemo(()=>{var g;return(((g=n.orgProfile)==null?void 0:g.toolLinks)||[]).filter(C=>C.matchText.trim()).map(C=>({key:C.key,label:C.matchText,kind:"tool",tool:C.tool}))},[(et=n.orgProfile)==null?void 0:et.toolLinks]),J=m.useMemo(()=>{var ie;const g=(ie=n.orgProfile)==null?void 0:ie.linkOverrides,C=xo(b,g),$=b?j:j.filter(Ce=>Ce.type==="core"),se={};return Object.keys(C).forEach(Ce=>{var Ze,on;const we=new Map,Ie=((on=(Ze=n.orgProfile)==null?void 0:Ze.customComponentLinks)==null?void 0:on[Ce])||[];[...C[Ce],...$,...Ie].forEach(p=>{p.label&&p.label.trim().length>=va&&we.set(p.label.toLowerCase(),{...p,kind:"url"})}),q.forEach(p=>{we.set(p.label.toLowerCase(),p)}),se[Ce]=[...we.values()]}),se},[b,j,(In=n.orgProfile)==null?void 0:In.linkOverrides,(wt=n.orgProfile)==null?void 0:wt.customComponentLinks,q]),[I,ee]=m.useState(null),[H,T]=m.useState(null),[W,ce]=m.useState(null),[ge,De]=m.useState(!1),[R,Z]=m.useState(!0),[re,Re]=m.useState(!0),[Le,He]=m.useState(!1),[pe,tn]=m.useState(!1),[$e,Ke]=m.useState(!1),sn=dn("assessment"),[Ne,v]=m.useState({}),[L,N]=m.useState({}),[P,V]=m.useState({}),ve=((An=n.objectives)==null?void 0:An[h.id])||[],Ae=n.orgProfile.teamMembers||[],he=m.useMemo(()=>{const g={};return h.lenses.forEach(C=>{g[C]=i(h.id,C).actions||[]}),g},[h.id,h.lenses,i]),Be=m.useMemo(()=>{const g={};return h.lenses.forEach(C=>{const $=i(h.id,C),se=he[C]||[],ie=se.some(we=>we.readinessScore===0),Ce=$.score===0&&!ie?1:$.score;g[C]=se.filter(we=>(we.readinessScore??Ce)===Ce)}),g},[h.id,h.lenses,i,he]),gn=m.useMemo(()=>h.lenses.reduce((g,C)=>g+(Be[C]||[]).length,0),[h.lenses,Be]),k=m.useMemo(()=>h.lenses.reduce((g,C)=>g+(Be[C]||[]).filter($=>rn($.status)==="Completed").length,0),[h.lenses,Be]),X=m.useMemo(()=>h.lenses.some(g=>Number(i(h.id,g).score||0)>0),[h.id,h.lenses,i]),ne=m.useMemo(()=>{const g={};return Object.keys(n.currentDraft).forEach(C=>{Object.keys(n.currentDraft[C]||{}).forEach($=>{(n.currentDraft[C][$].actions||[]).forEach(ie=>{Cn(ie,C,$).forEach(we=>{const Ie=`${we.componentId}:${we.lens}`;g[Ie]||(g[Ie]=[]),g[Ie].push({sourceComponentId:C,sourceLens:$,action:ie,isLinkedView:!(we.componentId===C&&we.lens===$)})})})})}),g},[n.currentDraft]),me=m.useMemo(()=>{const g={};return t.forEach(C=>{g[C.id]=C}),g},[t]),Ee=m.useMemo(()=>{const g=[];return h.lenses.forEach(C=>{(ne[`${h.id}:${C}`]||[]).filter(se=>!se.isLinkedView).forEach(se=>{jt(se.action.evidence||"").forEach(ie=>{g.push({actionText:se.action.text||"Untitled action",lens:C,item:ie})})})}),g},[ne,h.id,h.lenses]),xe=m.useMemo(()=>{const g=h.lenses[0];return g?i(h.id,g).justification:""},[h.id,h.lenses,i]),fe=m.useMemo(()=>{var g;return I?((g=t.find(C=>C.id===I.sourceComponentId))==null?void 0:g.label)||I.sourceComponentId:h.label},[I,h.label,t]),Pe=m.useMemo(()=>{var C;if(!((C=I==null?void 0:I.action.text)!=null&&C.trim()))return"New action";const g=I.action.text.trim().replace(/\s+/g," ");return g.length>70?`${g.slice(0,70)}...`:g},[I]),K=m.useMemo(()=>ve.find(g=>g.id===(H==null?void 0:H.objectiveId))||null,[H==null?void 0:H.objectiveId,ve]),qe=m.useMemo(()=>K?Tt(K,he):null,[K,he]),Qe=m.useMemo(()=>K?K.linkedActions.map(g=>{const C=(he[g.lens]||[]).find(ie=>ie.id===g.actionId),$=C?rn(C.status):null,se=C?ys(C.status,C.startDate,C.dueDate):null;return{lens:g.lens,action:C,status:$,temporalStatus:se}}):[],[K,he]);m.useCallback(g=>{r(g.target.value)},[r]);const Ye=m.useCallback((g,C)=>{const $=i(h.id,g);o(h.id,g,{...$,score:C})},[h.id,i,o]),We=m.useCallback(g=>{h.lenses.forEach(C=>{const $=i(h.id,C);o(h.id,C,{...$,justification:g})})},[h.id,h.lenses,i,o]),Je=m.useCallback((g,C)=>{const $=Do(h.phase,h.id,g);C&&($.text=C),ee({sourceComponentId:h.id,sourceLens:g,mode:"create",action:$,evidenceItems:jt($.evidence||""),linkedObjectiveIds:[],targetPickerComponentId:h.id,targetPickerLens:g})},[h.id,h.phase]),y=m.useCallback((g,C,$)=>{var we;const se=Cn($,g,C),ie=se[0]||{componentId:g,lens:C},Ce=(((we=n.objectives)==null?void 0:we[g])||[]).filter(Ie=>Ie.linkedActions.some(Ze=>Ze.actionId===$.id)).map(Ie=>Ie.id);ee({sourceComponentId:g,sourceLens:C,mode:"edit",actionId:$.id,action:{...$,linkedTargets:se,notes:$.notes||"",evidence:$.evidence||"",startDate:$.startDate||"",dueDate:$.dueDate||""},evidenceItems:jt($.evidence||""),linkedObjectiveIds:Ce,targetPickerComponentId:ie.componentId,targetPickerLens:ie.lens})},[n.objectives]),O=m.useCallback(()=>{ce({mode:"create",text:"",owner:""})},[]),z=m.useCallback(g=>{ce({mode:"edit",objectiveId:g.id,text:g.text,owner:g.owner})},[]),oe=()=>{ce(null)},ye=()=>{if(W){if(!W.text.trim()){window.alert("Outcome description is required.");return}if(W.mode==="create"){const g={id:`${ya}${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:W.text.trim(),owner:W.owner.trim(),timescale:"",linkedActions:[]};f(h.id,[...ve,g])}else f(h.id,ve.map(g=>g.id===W.objectiveId?{...g,text:W.text.trim(),owner:W.owner.trim()}:g));ce(null)}},Fe=g=>{f(h.id,ve.filter(C=>C.id!==g))};m.useEffect(()=>{if(!A)return;const C=i(h.id,A.lens).actions.find($=>$.id===A.actionId);if(!C){_==null||_();return}He(!0),y(h.id,A.lens,C),_==null||_()},[A,h.id]);const le=()=>{ee(null)},Xe=()=>{var we;if(!I)return;if(!I.action.text.trim()){window.alert("Action description is required.");return}const g={...I.action,evidence:Io(I.evidenceItems),status:rn(I.action.status),linkedTargets:Cn(I.action,I.sourceComponentId,I.sourceLens),timescale:I.action.dueDate||I.action.startDate||I.action.timescale},C=i(I.sourceComponentId,I.sourceLens),$=I.mode==="create"?[...C.actions,g]:C.actions.map(Ie=>Ie.id===I.actionId?g:Ie);o(I.sourceComponentId,I.sourceLens,{...C,actions:$,score:Po(C.score,$)});const se=new Set(I.linkedObjectiveIds),Ce=(((we=n.objectives)==null?void 0:we[I.sourceComponentId])||[]).map(Ie=>{const Ze=Ie.linkedActions.filter(on=>!(on.lens===I.sourceLens&&on.actionId===g.id));return se.has(Ie.id)?{...Ie,linkedActions:[...Ze,{lens:I.sourceLens,actionId:g.id}]}:{...Ie,linkedActions:Ze}});f(I.sourceComponentId,Ce),le()},Se=g=>{ee(C=>{if(!C)return C;const $={...C,action:{...C.action,...g}};return $.action.status=rn($.action.status),$})},Te=(g,C)=>{ee($=>$&&{...$,targetPickerComponentId:g,targetPickerLens:C})},be=()=>{ee(g=>{if(!g)return g;const C=me[g.targetPickerComponentId]||h,$=C.lenses.includes(g.targetPickerLens)?g.targetPickerLens:C.lenses[0];if(!$)return g;const se=Cn(g.action,g.sourceComponentId,g.sourceLens);return se.some(ie=>ie.componentId===C.id&&ie.lens===$)?g:{...g,action:{...g.action,linkedTargets:[...se,{componentId:C.id,lens:$}]}}})},vn=(g,C)=>{ee($=>{if(!$)return $;const ie=Cn($.action,$.sourceComponentId,$.sourceLens).filter(Ce=>!(Ce.componentId===g&&Ce.lens===C));return{...$,action:{...$.action,linkedTargets:ie}}})},pn=g=>{ee(C=>{if(!C)return C;const $=new Set(C.linkedObjectiveIds);return $.has(g)?$.delete(g):$.add(g),{...C,linkedObjectiveIds:Array.from($)}})},hn=g=>{ee(C=>C&&{...C,evidenceItems:g})},Un=()=>{if(!I)return;const g=I.evidenceItems;hn([...g,{type:"url",label:"",href:""}])},Pn=(g,C,$)=>{if(!I)return;const se=I.evidenceItems;if(!se[g])return;const ie=[...se];C==="href"?ie[g]={...ie[g],href:Ea($)}:ie[g]={...ie[g],label:$},hn(ie)},kn=g=>{if(!I)return;const C=I.evidenceItems;hn(C.filter(($,se)=>se!==g))},Dn=async g=>{if(!I)return;const C=g.target.files;if(!(C!=null&&C.length))return;const se=[...I.evidenceItems];for(const ie of Array.from(C)){if(ie.size>ko){window.alert(`"${ie.name}" is larger than 1MB. Please attach a URL instead.`);continue}try{const Ce=await _o(ie);se.push({type:"file",label:ie.name,href:Ce})}catch{window.alert(`Unable to upload "${ie.name}".`)}}hn(se),g.target.value=""},vt=(g,C)=>{C&&(T(null),y(h.id,g,C))},Mn=g=>{const C=document.getElementById(g);C==null||C.scrollIntoView({behavior:"smooth",block:"start"})};return e.jsxs("div",{className:"max-w-5xl mx-auto pb-20",children:[e.jsx("div",{className:"mb-8 flex items-center justify-between gap-4 flex-wrap",children:e.jsxs("div",{children:[e.jsxs("h2",{className:`text-3xl font-bold flex items-center ${d?"text-slate-100":"text-slate-800"}`,children:[h.label,e.jsx("span",{className:"bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-4 border border-blue-200",children:ln[h.phase]||`Phase ${h.phase}`}),e.jsx("span",{className:"ml-2",children:e.jsx(mn,{onClick:sn.reopen,darkMode:d})})]}),e.jsx("p",{className:`mt-2 ${d?"text-slate-300":"text-slate-500"}`,children:"Assess readiness at lens level. Change Component justification, outcomes, and actions are tracked below."}),D&&e.jsx("button",{type:"button",onClick:()=>Ke(!0),className:`mt-2 text-sm font-semibold underline ${d?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:"What is this?"})]})}),D&&e.jsx(Eo,{open:$e,onClose:()=>Ke(!1),detail:D,furtherReadingUrl:(tt=(nt=n.orgProfile)==null?void 0:nt.componentFurtherReading)==null?void 0:tt[h.id],guidanceLinks:J[h.id]||[],darkMode:d,onNavigateToTool:l}),!x&&!ge&&e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mb-6 rounded-lg border p-4`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${d?"text-slate-300":"text-slate-600"}`,children:"Guided workflow"}),e.jsx("button",{type:"button",onClick:()=>De(!0),"aria-label":"Dismiss guided workflow",className:`text-xs font-semibold leading-none ${d?"text-slate-400 hover:text-slate-200":"text-slate-400 hover:text-slate-700"}`,children:"×"})]}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:()=>Mn("assessment-scoring"),className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"1. Justify"}),e.jsx("button",{type:"button",onClick:()=>Mn("assessment-objectives"),className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"2. Review outcomes"}),e.jsx("button",{type:"button",onClick:()=>Mn("assessment-actions"),className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"3. Plan lens actions"})]}),S&&e.jsx("button",{type:"button",onClick:S,className:`mt-3 text-xs underline ${d?"text-slate-400 hover:text-slate-200":"text-slate-500 hover:text-slate-700"}`,children:"Don't show this again"})]}),e.jsxs("div",{id:"assessment-scoring",className:`${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[e.jsx("h3",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:X?"Step 1: Justify":"Step 1: Justification of what is currently known"}),e.jsx("button",{type:"button",onClick:()=>Z(g=>!g),className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:R?"Hide":"Show"})]}),R?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:`block text-sm font-semibold mb-2 ${d?"text-slate-100":"text-slate-700"}`,children:"Change Component Justification"}),e.jsx("p",{className:`text-xs mb-2 ${d?"text-slate-300":"text-slate-500"}`,children:'Explain what is currently known, what evidence supports that view, and where the biggest gap sits. Example: "Sponsorship is visible only in two services; there is no monthly steering update yet; next step is to agree a trust-wide sponsor cadence."'}),e.jsx("textarea",{value:xe,onChange:g=>We(g.target.value),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-24 p-2 border ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,placeholder:"Record what is currently known for this change component, the evidence behind it, and the key improvement needed next."})]}):null]}),e.jsxs("div",{id:"assessment-objectives",className:`${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-1",children:[e.jsx("h3",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Step 2: Review outcomes"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:O,className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:"Add Outcome"}),e.jsx("button",{type:"button",onClick:()=>Re(g=>!g),className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:re?"Hide":"Show"})]})]}),e.jsx("p",{className:`text-xs mb-3 ${d?"text-slate-300":"text-slate-500"}`,children:"Owned by this component as a whole. Status is derived automatically from the lens actions assigned to each outcome below and cannot be set manually."}),re?ve.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${d?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:d?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Linked Actions"})]})}),e.jsx("tbody",{className:`${d?"divide-slate-700":"divide-slate-100"} divide-y`,children:ve.map(g=>{const C=Tt(g,he),$=Ds[C],se=()=>T({objectiveId:g.id});return e.jsxs("tr",{onClick:se,onKeyDown:ie=>{(ie.key==="Enter"||ie.key===" ")&&(ie.preventDefault(),se())},tabIndex:0,className:`${d?"hover:bg-slate-700 focus-visible:bg-slate-700":"hover:bg-slate-50 focus-visible:bg-slate-50"} cursor-pointer focus:outline-none`,children:[e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-100":"text-slate-800"}`,children:g.text||"Untitled outcome"}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${$}`,children:C})}),e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-300":"text-slate-600"}`,children:g.linkedActions.length?`${g.linkedActions.length} action(s)`:"None assigned"})]},g.id)})})]})}):e.jsx("p",{className:"text-sm text-slate-500",children:U("No outcomes yet.")}):null]}),e.jsx("div",{id:"assessment-actions",className:`${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Step 3: Plan lens actions"}),e.jsx("p",{className:`mt-1 text-xs ${d?"text-slate-300":"text-slate-600"}`,children:"Track delivery actions for each lens and link them to outcomes and affected component lenses."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:`${d?"bg-slate-800 border-slate-600 text-slate-100":"bg-white border-slate-300 text-slate-700"} rounded-full border px-2 py-1 text-xs`,children:[k,"/",gn," completed"]}),e.jsx("button",{type:"button",onClick:()=>He(g=>!g),className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:Le?"Hide":"Show"})]})]})}),Le?e.jsx("div",{className:"space-y-8 mb-8",children:h.lenses.map(g=>{const C=i(h.id,g),$=`${h.id}:${g}`,se=ne[$]||[],ie=se.some(E=>E.action.readinessScore===0),Ce=C.score===0&&!ie?1:C.score,we=L[$]||"all",Ie=P[$]||"all",Ze=Array.from(new Set(se.map(E=>E.action.actionType).filter(E=>E!==void 0))).sort((E,F)=>String(E).localeCompare(String(F))),on=Array.from(new Set([...Ae.map(E=>E.name),...se.map(E=>E.action.owner).filter(E=>!!E)])).sort((E,F)=>E.localeCompare(F)),p=[...se].filter(E=>(E.action.readinessScore!==void 0?E.action.readinessScore:Ce)!==Ce||we!=="all"&&(E.action.actionType||"")!==we?!1:Ie==="all"||(E.action.owner||"")===Ie).sort((E,F)=>{const B=rn(E.action.status)==="Completed",Q=rn(F.action.status)==="Completed";if(B!==Q)return B?1:-1;const ae=E.action.dueDate?new Date(E.action.dueDate).getTime():Number.POSITIVE_INFINITY,de=F.action.dueDate?new Date(F.action.dueDate).getTime():Number.POSITIVE_INFINITY;return ae-de}),w=C.score>=h.target?"#22c55e":C.score>0?"#f59e0b":"#cbd5e1";return e.jsxs("div",{className:`${d?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:[e.jsxs("div",{className:`${d?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} p-6 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4`,children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm font-bold uppercase tracking-wider text-blue-600 block mb-1",children:"Lens"}),e.jsxs("button",{onClick:()=>u(g),className:`flex items-center text-2xl font-semibold transition-colors group text-left ${d?"text-slate-100 hover:text-[#63b3ff]":"text-slate-800 hover:text-[#005eb8]"}`,title:"View Lens Information",children:[g,e.jsx(Ro,{})]})]}),e.jsxs("div",{className:"shrink-0 w-full md:w-64",children:[e.jsx("label",{className:`block text-xs font-semibold mb-1 ${d?"text-slate-300":"text-slate-500"}`,children:"Readiness Score"}),e.jsx("select",{value:C.score,onChange:E=>Ye(g,Number(E.target.value)),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 text-sm font-medium border ${d?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,style:{borderLeftWidth:"4px",borderLeftColor:w},children:fo.map(E=>e.jsxs("option",{value:E,children:[E," - ",bo[E]]},E))})]})]}),e.jsx("div",{className:`${d?"bg-slate-900":"bg-blue-50/50"} px-6 py-4 border-b text-sm`,style:{borderLeftWidth:"4px",borderLeftColor:w},children:e.jsxs("div",{className:"flex items-start flex-1",children:[e.jsx(Oo,{}),e.jsxs("p",{className:`whitespace-pre-line ${d?"text-slate-300":"text-slate-600"}`,children:[e.jsxs("strong",{className:d?"text-slate-100":"text-slate-700",children:[C.score===0?"Not Started":`Level ${C.score}`,":"]}),` ${a(h.id,g,C.score)}`]})]})}),e.jsxs("div",{className:`${d?"border-slate-700":"border-slate-100"} p-6 border-t`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Lens Actions"}),e.jsx("p",{className:`mt-1 text-xs ${d?"text-slate-300":"text-slate-500"}`,children:"Hierarchy: Outcome - Action - Affected component lenses."})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs("select",{"aria-label":`Filter ${g} actions by type`,value:we,onChange:E=>N(F=>({...F,[$]:E.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),[...new Set([...ut,...Ze])].map(E=>e.jsx("option",{value:E,children:E},E))]}),e.jsxs("select",{"aria-label":`Filter ${g} actions by owner`,value:Ie,onChange:E=>V(F=>({...F,[$]:E.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),on.map(E=>e.jsx("option",{value:E,children:E},E))]}),e.jsx("button",{onClick:()=>Je(g),className:"px-3 py-1.5 rounded bg-[#005eb8] text-white text-xs font-semibold shadow-[0_2px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Add Action"})]})]}),p.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${d?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:d?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action Type"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Start"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"End"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Actions"})]})}),e.jsx("tbody",{className:`${d?"divide-slate-700":"divide-slate-100"} divide-y`,children:(Ne[`${h.id}:${g}`]?p:p.slice(0,5)).map(E=>{var ue;const F=E.action,B=rn(F.status),Q=ys(F.status,F.startDate,F.dueDate),ae=Q==="Overdue start"||Q==="Overdue completion"?Q:null,de=((ue=me[E.sourceComponentId])==null?void 0:ue.label)||E.sourceComponentId,ke=jo(E.sourceComponentId,F.id,n.objectives||{}),je=On[B]||On.Planned;return e.jsxs("tr",{children:[e.jsxs("td",{className:`px-3 py-2 text-sm ${d?"text-slate-100":"text-slate-800"}`,children:[e.jsx("div",{children:Bn(F.text,J[E.sourceComponentId]||[],d,l)}),E.isLinkedView?e.jsxs("div",{className:`mt-1 text-xs ${d?"text-indigo-300":"text-indigo-700"}`,children:["Linked from ",de," /"," ",E.sourceLens]}):null]}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${je}`,children:B}),ae?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:ae}):null,!ke.length&&e.jsx("div",{className:`mt-1 text-center text-xs ${d?"text-amber-200":"text-amber-700"}`,children:"Not yet linked"})]}),e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-100":"text-slate-700"}`,children:F.actionType||"Unassigned"}),e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-100":"text-slate-700"}`,children:F.owner||"Unassigned"}),e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-300":"text-slate-600"}`,children:F.startDate||"-"}),e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-300":"text-slate-600"}`,children:F.dueDate||"-"}),e.jsx("td",{className:"px-3 py-2",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"button",onClick:()=>y(E.sourceComponentId,E.sourceLens,F),className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Edit"}),e.jsx("button",{type:"button",onClick:()=>c(E.sourceComponentId,E.sourceLens,F.id),className:`${d?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Remove"})]})})]},`${E.sourceComponentId}:${E.sourceLens}:${F.id}`)})})]})}):e.jsx("p",{className:`text-sm ${d?"text-slate-300":"text-slate-500"}`,children:U("No actions yet for this lens.")}),p.length>5?e.jsx("button",{type:"button",onClick:()=>v(E=>({...E,[`${h.id}:${g}`]:!E[`${h.id}:${g}`]})),className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} mt-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:Ne[`${h.id}:${g}`]?"Show top 5 actions":`Show additional ${p.length>5?p.length-5:p.length} action(s)`}):""]})]},g)})}):null,e.jsx(Ao,{rows:Ee,isOpen:pe,onToggle:()=>tn(g=>!g),darkMode:d}),I?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${d?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-hidden rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("h3",{className:`text-lg font-semibold ${d?"text-slate-100":"text-slate-900"}`,children:[I.mode==="create"?"Create Action":"Edit Action"," ·"," ",fe," / ",I.sourceLens," · ",Pe]}),e.jsx("button",{type:"button",onClick:le,className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:"mt-4 max-h-[calc(100vh-13rem)] overflow-y-auto pr-1 grid gap-3",children:[e.jsx("div",{className:`${d?"border-slate-700 bg-slate-900":"border-blue-100 bg-white"} sticky top-0 z-10 rounded-md border px-3 py-2 shadow-sm`,children:e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Description"}),e.jsx("textarea",{value:I.action.text,onChange:g=>Se({text:g.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${d?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})}),e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900 text-slate-200":"border-blue-100 bg-blue-50 text-slate-700"} rounded-md border px-3 py-2 text-xs`,children:[e.jsx("strong",{children:"Linking order:"})," first attach this action to one or more outcomes, then add affected component lenses (component + lens) where this action should appear."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Action Type"}),e.jsx("select",{value:I.action.actionType||"Admin",onChange:g=>Se({actionType:g.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:ut.map(g=>e.jsx("option",{value:g,children:g},g))})]}),e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Owner"}),e.jsxs("select",{value:I.action.owner,onChange:g=>Se({owner:g.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Unassigned"}),Ae.map(g=>e.jsxs("option",{value:g.name,children:[g.name,g.role?` - ${g.role}`:""]},g.id)),I.action.owner&&!Ae.some(g=>g.name===I.action.owner)?e.jsxs("option",{value:I.action.owner,children:[I.action.owner," (not on roster)"]}):null]})]}),e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Status"}),e.jsx("select",{value:I.action.status,onChange:g=>Se({status:g.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:ho.map(g=>e.jsx("option",{value:g,children:g},g))})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Start Date"}),e.jsx("input",{type:"date",value:I.action.startDate||"",onChange:g=>Se({startDate:g.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"End Date"}),e.jsx("input",{type:"date",value:I.action.dueDate||"",onChange:g=>Se({dueDate:g.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Notes"}),e.jsx("textarea",{value:I.action.notes||"",onChange:g=>Se({notes:g.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Evidence Links / Docs"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:Un,className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Add web link"}),e.jsxs("label",{className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:["Upload file(s)",e.jsx("input",{type:"file",multiple:!0,className:"hidden",onChange:Dn})]})]})]}),e.jsx("p",{className:`mt-1 text-xs ${d?"text-slate-300":"text-slate-500"}`,children:"Add evidence as either web links or uploaded files. Everything appears below in a single list."}),e.jsx("div",{className:`${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:I.evidenceItems.length?I.evidenceItems.map((g,C)=>e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} grid grid-cols-1 gap-2 rounded border p-2 md:grid-cols-[auto,1fr,1fr,auto]`,children:[e.jsx("div",{className:"flex items-start pt-2",children:e.jsx("span",{className:`${g.type==="file"?"bg-emerald-100 text-emerald-800":"bg-blue-100 text-blue-800"} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`,children:g.type==="file"?"File":"Link"})}),e.jsx("input",{value:g.label,onChange:$=>Pn(C,"label",$.target.value),placeholder:g.type==="file"?"Document label":"Link label",className:`rounded-md border px-2.5 py-2 text-sm ${d?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`}),e.jsx("input",{value:g.href,onChange:$=>Pn(C,"href",$.target.value),placeholder:g.type==="file"?"Embedded file URL (auto generated)":"https://...",className:`rounded-md border px-2.5 py-2 text-sm ${d?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,disabled:g.type==="file"}),e.jsx("button",{type:"button",onClick:()=>kn(C),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},`${g.type}-${C}`)):e.jsx("p",{className:`px-2 py-1 text-sm ${d?"text-slate-300":"text-slate-500"}`,children:"No evidence links or documents added yet."})})]}),e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsx("p",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Affected Outcomes"}),e.jsx("p",{className:`mt-1 text-xs ${d?"text-slate-300":"text-slate-500"}`,children:"Tick 1-3 outcomes directly impacted by this action. Outcome status is auto-derived from these linked actions."}),e.jsx("div",{className:`${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:(((st=n.objectives)==null?void 0:st[I.sourceComponentId])||[]).length?(((an=n.objectives)==null?void 0:an[I.sourceComponentId])||[]).map(g=>{const C=I.linkedObjectiveIds.includes(g.id);return e.jsxs("label",{className:`${d?"hover:bg-slate-700":"hover:bg-slate-50"} flex items-start gap-2 rounded px-2 py-1.5`,children:[e.jsx("input",{type:"checkbox",checked:C,onChange:()=>pn(g.id),className:"mt-0.5"}),e.jsx("span",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:g.text||"Untitled outcome"})]},g.id)}):e.jsx("p",{className:`px-2 py-1 text-sm ${d?"text-slate-300":"text-slate-500"}`,children:U("No outcomes are defined for this component yet.")})})]}),e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Affected Component Lenses"}),e.jsx("span",{className:"inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-600",title:"Actions often contribute to other component lenses. Add those targets here so the same action is visible in each relevant lens.",children:"i"})]}),e.jsxs("div",{className:"mt-2 space-y-2",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2",children:[e.jsx("select",{value:I.targetPickerComponentId,onChange:g=>{const C=g.target.value,$=me[C];Te(C,($==null?void 0:$.lenses[0])||"")},className:`rounded-md border px-2.5 py-2 text-sm ${d?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:t.map(g=>e.jsx("option",{value:g.id,children:g.label},g.id))}),e.jsx("select",{value:I.targetPickerLens,onChange:g=>Te(I.targetPickerComponentId,g.target.value),className:`rounded-md border px-2.5 py-2 text-sm ${d?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:(((bn=me[I.targetPickerComponentId])==null?void 0:bn.lenses)||[]).map(g=>e.jsx("option",{value:g,children:g},g))}),e.jsx("button",{type:"button",onClick:be,disabled:Cn(I.action,I.sourceComponentId,I.sourceLens).some(g=>g.componentId===I.targetPickerComponentId&&g.lens===I.targetPickerLens),title:Cn(I.action,I.sourceComponentId,I.sourceLens).some(g=>g.componentId===I.targetPickerComponentId&&g.lens===I.targetPickerLens)?"Already added":"Add selected affected lens",className:`${d?"border-cyan-500/50 bg-cyan-500/15 text-cyan-100 hover:bg-cyan-500/25":"border-cyan-300 bg-cyan-100 text-cyan-900 hover:bg-cyan-200"} rounded-md border px-3 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-60`,children:"Add Lens"})]}),e.jsx("div",{className:`${d?"border-slate-700":"border-slate-200"} overflow-hidden rounded border`,children:e.jsxs("table",{className:`min-w-full ${d?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:d?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Component"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Remove"})]})}),e.jsx("tbody",{className:`${d?"divide-slate-700":"divide-slate-100"} divide-y`,children:Cn(I.action,I.sourceComponentId,I.sourceLens).map(g=>{var C;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-2.5 py-2 text-sm ${d?"text-slate-100":"text-slate-700"}`,children:((C=me[g.componentId])==null?void 0:C.label)||g.componentId}),e.jsx("td",{className:`px-2.5 py-2 text-sm ${d?"text-slate-100":"text-slate-700"}`,children:g.lens}),e.jsx("td",{className:"px-2.5 py-2",children:e.jsx("button",{type:"button",onClick:()=>vn(g.componentId,g.lens),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},`${g.componentId}:${g.lens}`)})})]})})]})]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[I.mode==="edit"&&I.actionId?e.jsx("button",{type:"button",onClick:()=>{c(I.sourceComponentId,I.sourceLens,I.actionId),le()},className:"mr-auto rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100",children:"Delete Action"}):null,e.jsx("button",{type:"button",onClick:le,className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Cancel"}),e.jsx("button",{type:"button",onClick:Xe,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Save Action"})]})]})}):null,H&&K&&qe?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":"Outcome Details",className:`w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${d?"text-slate-100":"text-slate-900"}`,children:"Outcome Details"}),e.jsxs("div",{className:"flex items-center gap-2",children:[K&&po(K.id)?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>{z(K),T(null)},className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Edit"}),e.jsx("button",{type:"button",onClick:()=>{Fe(K.id),T(null)},className:"rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-700 hover:bg-red-100",children:"Delete"})]}):null,e.jsx("button",{type:"button",onClick:()=>T(null),className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]})]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${d?"text-slate-400":"text-slate-500"}`,children:"Outcome"}),e.jsx("p",{className:`mt-1 text-sm ${d?"text-slate-100":"text-slate-900"}`,children:K.text||"Untitled outcome"})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${d?"text-slate-400":"text-slate-500"}`,children:"Owner"}),e.jsx("p",{className:`mt-1 text-sm ${d?"text-slate-100":"text-slate-900"}`,children:K.owner||"Unassigned"})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${d?"text-slate-400":"text-slate-500"}`,children:"Status"}),e.jsx("span",{className:`mt-1 inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${Ds[qe]}`,children:qe})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${d?"text-slate-400":"text-slate-500"}`,children:"Linked Actions"}),Qe.length?e.jsx("div",{className:`mt-2 overflow-x-auto rounded-md border ${d?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:`min-w-full divide-y ${d?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"}`,children:[e.jsx("thead",{className:d?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Navigate"})]})}),e.jsx("tbody",{className:`divide-y ${d?"divide-slate-700":"divide-slate-100"}`,children:Qe.map(g=>{var $,se;const C=g.status?On[g.status]||On.Planned:On.Planned;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-100":"text-slate-700"}`,children:g.lens}),e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-100":"text-slate-700"}`,children:(($=g.action)==null?void 0:$.text)||"Linked action not found"}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${C}`,children:g.status||"Not Started"}),g.temporalStatus==="Overdue start"||g.temporalStatus==="Overdue completion"?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:g.temporalStatus}):null]}),e.jsx("td",{className:"px-3 py-2",children:g.action?e.jsx("button",{type:"button",onClick:()=>vt(g.lens,g.action||void 0),className:`${d?"border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25":"border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Open Action"}):e.jsx("span",{className:`text-xs ${d?"text-slate-500":"text-slate-400"}`,children:"Unavailable"})})]},`${g.lens}:${((se=g.action)==null?void 0:se.id)||"missing"}`)})})]})}):e.jsx("p",{className:`mt-1 text-sm ${d?"text-slate-300":"text-slate-500"}`,children:"No linked actions assigned."})]})]})]})}):null,W?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":W.mode==="create"?"Add Outcome":"Edit Outcome",className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsx("h3",{className:`text-lg font-semibold ${d?"text-slate-100":"text-slate-900"}`,children:W.mode==="create"?"Add Outcome":"Edit Outcome"}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"objective-editor-text",className:`block text-xs font-medium ${d?"text-slate-300":"text-slate-700"}`,children:"Outcome description"}),e.jsx("textarea",{id:"objective-editor-text",value:W.text,onChange:g=>ce({...W,text:g.target.value}),className:`mt-1 w-full rounded-md border p-2 text-sm h-20 ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"objective-editor-owner",className:`block text-xs font-medium ${d?"text-slate-300":"text-slate-700"}`,children:"Owner"}),e.jsxs("select",{id:"objective-editor-owner",value:W.owner,onChange:g=>ce({...W,owner:g.target.value}),className:`mt-1 w-full rounded-md border p-2 text-sm ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Unassigned"}),Ae.map(g=>e.jsxs("option",{value:g.name,children:[g.name||"Unnamed",g.role?` - ${g.role}`:""]},g.id)),W.owner&&!Ae.some(g=>g.name===W.owner)?e.jsxs("option",{value:W.owner,children:[W.owner," (not on roster)"]}):null]})]})]}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:oe,className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Cancel"}),e.jsx("button",{type:"button",onClick:ye,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Save Outcome"})]})]})}):null,e.jsx(un,{open:sn.isOpen,onClose:sn.close,title:"Assessing a component",darkMode:d,body:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Each component is assessed lens by lens: justify where you are, review its outcomes, then plan and track delivery actions for each readiness level."}),e.jsx("p",{children:'Click "What is this?" at the top for what the component covers, and "Evidence Links and Docs" at the bottom rounds up everything attached as evidence across all of its actions.'})]})})]})}const it=50;function To(n){const t=new Date(n);return Number.isNaN(t.getTime())?n:t.toLocaleString("en-GB",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function Lo({events:n,darkMode:t=!1}){const s=dn("audit-log"),[a,i]=m.useState("all"),[r,o]=m.useState("all"),[u,c]=m.useState("all"),[f,l]=m.useState(""),[x,b]=m.useState(1),S=m.useMemo(()=>["all",...Array.from(new Set(n.map(D=>D.eventType))).sort()],[n]),d=m.useMemo(()=>["all",...Array.from(new Set(n.map(D=>D.componentId).filter(Boolean))).sort()],[n]),A=m.useMemo(()=>["all",...Array.from(new Set(n.map(D=>D.actor).filter(Boolean))).sort()],[n]),_=m.useMemo(()=>{const D=f.trim().toLowerCase();return n.filter(j=>a==="all"?!0:j.eventType===a).filter(j=>r==="all"?!0:j.componentId===r).filter(j=>u==="all"?!0:j.actor===u).filter(j=>D?[j.summary,j.reason,j.entityId,j.lens].filter(Boolean).some(q=>String(q).toLowerCase().includes(D)):!0).sort((j,q)=>Date.parse(q.timestamp)-Date.parse(j.timestamp))},[n,a,r,u,f]),h=Math.max(1,Math.ceil(_.length/it)),M=Math.min(x,h),U=(M-1)*it,te=_.slice(U,U+it);return e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Audit Log"}),e.jsx(mn,{onClick:s.reopen,darkMode:t})]}),e.jsx("p",{className:`text-sm mt-1 ${t?"text-slate-300":"text-slate-600"}`,children:"Timestamped history of CST changes, including who made each change."})]}),e.jsx(un,{open:s.isOpen,onClose:s.close,title:"Audit Log",darkMode:t,body:e.jsx("p",{children:"A timestamped history of changes made to your CST, including who made each change. Filter by event type, component, or actor, and expand a row to see exactly what changed."})}),e.jsxs("div",{className:`grid gap-3 md:grid-cols-4 rounded-lg border p-4 ${t?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Event type"}),e.jsx("select",{value:a,onChange:D=>{i(D.target.value),b(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:S.map(D=>e.jsx("option",{value:D,children:D==="all"?"All":D},D))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Component"}),e.jsx("select",{value:r,onChange:D=>{o(D.target.value),b(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:d.map(D=>e.jsx("option",{value:D,children:D==="all"?"All":D},D))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Actor"}),e.jsx("select",{value:u,onChange:D=>{c(D.target.value),b(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:A.map(D=>e.jsx("option",{value:D,children:D==="all"?"All":D},D))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Search"}),e.jsx("input",{value:f,onChange:D=>{l(D.target.value),b(1)},placeholder:"summary, reason, id",className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsx("div",{className:`rounded-lg border overflow-hidden ${t?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full text-sm",children:[e.jsx("thead",{className:t?"bg-slate-900 text-slate-200":"bg-slate-50 text-slate-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left",children:"When"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Who"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"What"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Context"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Details"})]})}),e.jsx("tbody",{className:t?"bg-slate-800 text-slate-100":"bg-white text-slate-800",children:te.length?te.map(D=>e.jsxs("tr",{className:t?"border-t border-slate-700":"border-t border-slate-100",children:[e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:To(D.timestamp)}),e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:D.actor||"Unknown user"}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{className:"font-medium",children:D.summary}),e.jsx("div",{className:`text-xs mt-1 ${t?"text-slate-300":"text-slate-600"}`,children:D.eventType})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{children:D.componentId||"-"}),e.jsx("div",{className:`text-xs ${t?"text-slate-300":"text-slate-600"}`,children:D.lens||"-"})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[D.reason?e.jsxs("div",{children:["Reason: ",D.reason]}):null,D.before||D.after?e.jsxs("details",{className:"mt-1",children:[e.jsx("summary",{className:"cursor-pointer text-xs underline",children:"Before/After"}),e.jsx("pre",{className:`mt-1 text-xs whitespace-pre-wrap ${t?"text-slate-300":"text-slate-600"}`,children:JSON.stringify({before:D.before,after:D.after},null,2)})]}):null]})]},D.id)):e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-6 text-center",colSpan:5,children:"No audit events found for the selected filters."})})})]})}),e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("span",{className:t?"text-slate-300":"text-slate-600",children:["Showing ",te.length?U+1:0,"-",Math.min(U+it,_.length)," of ",_.length]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>b(D=>Math.max(1,D-1)),disabled:M<=1,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Previous"}),e.jsxs("span",{className:t?"text-slate-200":"text-slate-700",children:["Page ",M," / ",h]}),e.jsx("button",{type:"button",onClick:()=>b(D=>Math.min(h,D+1)),disabled:M>=h,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Next"})]})]})]})}const Bo=[{id:"why",question:"Why are we doing this?",framework:"Force Field Analysis - Driving Forces",description:"The forces pushing for change - the case that makes it worth doing.",componentIds:["case_for_change"]},{id:"future",question:"What will the future look like?",framework:"Vision",description:"A clear picture of the destination, understood and shared by everyone.",componentIds:["vision"]},{id:"barriers",question:"What might prevent us from achieving the vision?",framework:"Force Field Analysis - Restraining Forces",description:"The forces working against change - risks, resistance and blockers to plan for.",componentIds:["case_for_change","resistance"]},{id:"impacted",question:"Who's going to be impacted by the change?",framework:"Stakeholder Analysis & Change Impact Analysis",description:"Everyone affected by the change, and how deeply it affects them.",componentIds:["stakeholder","change_impact"]},{id:"leading",question:"Who's leading the change?",framework:"Sponsor Coalition & Change Network",description:"The visible leaders and the network of champions carrying the change day to day.",componentIds:["sponsorship","change_network"]},{id:"persuade",question:"How will we persuade people to change?",framework:"Case for Change",description:"The compelling narrative that wins hearts and minds.",componentIds:["case_for_change"]}],Bs=[{phase:1,label:"Pre-Discovery",programmeStage:"Concept",tagline:"Define the change",deliverables:["Change Vision defined and communicated","Compelling case for change developed"],color:"bg-blue-50",darkColor:"bg-blue-950/45",textColor:"text-blue-700",darkTextColor:"text-blue-100",borderColor:"border-blue-300",darkBorderColor:"border-blue-700"},{phase:2,label:"Solution Design",programmeStage:"Definition",tagline:"Prepare the change",deliverables:["Change Impact analysed","Change Management inputted to Business Case","Engagement and Comms Strategy developed"],color:"bg-violet-50",darkColor:"bg-violet-950/45",textColor:"text-violet-700",darkTextColor:"text-violet-100",borderColor:"border-violet-300",darkBorderColor:"border-violet-700"},{phase:3,label:"Development",programmeStage:"Design & Develop",tagline:"Plan the change",deliverables:["Engagement and Comms Plan developed","Change Management Plan developed"],color:"bg-amber-50",darkColor:"bg-amber-950/45",textColor:"text-amber-700",darkTextColor:"text-amber-100",borderColor:"border-amber-300",darkBorderColor:"border-amber-700"},{phase:4,label:"Deployment / Go Live",programmeStage:"Implementation",tagline:"Manage implementation of the change",deliverables:["Change Management Plan executed","Communications delivered and Stakeholders engaged","Future State Processes validated","Skills gaps addressed","Future State Processes trialled and in use"],color:"bg-orange-50",darkColor:"bg-orange-950/45",textColor:"text-orange-700",darkTextColor:"text-orange-100",borderColor:"border-orange-300",darkBorderColor:"border-orange-700"},{phase:5,label:"Post-Deployment",programmeStage:"Transition / Close",tagline:"Reinforce and sustain the change",deliverables:["Change adoption evaluated","Business Change refinements actioned","Change sustained"],color:"bg-green-50",darkColor:"bg-green-950/45",textColor:"text-green-700",darkTextColor:"text-green-100",borderColor:"border-green-300",darkBorderColor:"border-green-700"}],Fo=[{title:"Handling Resistance",body:"Helping project managers navigate potential roadblocks and maintain project momentum through identifying and addressing resistance using effective communication, stakeholder engagement, and mitigation strategies."},{title:"Engaging Stakeholders",body:"Identifying key individuals and groups affected by the project and working closely with them to understand concerns, gather feedback, and ensure their perspectives are considered."},{title:"Communicating and Raising Awareness",body:"Developing engagement and communication plans that support project managers in creating clear and consistent messaging about the project's purpose, goals, and benefits."},{title:"Managing Expectations",body:"Setting realistic expectations for stakeholders regarding project outcomes, timelines, and potential disruptions by addressing concerns, clarifying misconceptions, and managing expectations."},{title:"Ensuring Change Readiness",body:"Assessing the readiness of an organisation or team for change and developing strategies to bridge any gaps."},{title:"Mitigating Risks",body:"Through anticipating and addressing risks associated with change, such as resistance, lack of stakeholder support, or unexpected obstacles."},{title:"Adopting Change Sustainably",body:"Supporting project managers in developing strategies to embed the changes into the organisation's culture, processes, and systems."}];function It({title:n,description:t,isOpen:s,onToggle:a,children:i,darkMode:r=!1}){return e.jsxs("section",{className:`mb-4 overflow-hidden rounded-lg border ${r?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("button",{type:"button",onClick:a,"aria-expanded":s,className:`flex w-full items-center justify-between gap-4 p-4 text-left transition-colors ${r?"bg-slate-900 hover:bg-slate-800":"bg-white hover:bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:n}),t?e.jsx("p",{className:`mt-0.5 text-sm ${r?"text-slate-300":"text-slate-500"}`,children:t}):null]}),e.jsx("span",{className:`shrink-0 text-xl font-bold transition-transform ${r?"text-slate-500":"text-slate-400"} ${s?"rotate-45":""}`,children:"+"})]}),s?e.jsx("div",{className:`border-t p-5 pt-4 ${r?"border-slate-700 bg-slate-900":"border-slate-100 bg-white"}`,children:i}):null]})}function Go({onComponentClick:n,guidanceTarget:t="Default",linkOverrides:s,showAdditionalGuidanceLinks:a=!0,darkMode:i=!1}){const[r,o]=m.useState("questions"),[u,c]=m.useState(null),f=x=>{o(b=>b===x?null:x)},l=x=>{c(b=>b===x?null:x)};return e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsx("h2",{className:`mb-2 text-2xl font-bold ${i?"text-slate-100":"text-slate-800"}`,children:"Change Management Toolkit"}),e.jsx("p",{className:`mb-8 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:"NHS England Programme Delivery Lifecycle - an introduction to the five change phases and the role of the Change Manager."}),e.jsxs("div",{className:"bg-[#005eb8] text-white rounded-lg p-6 mb-8 flex flex-col sm:flex-row sm:items-center gap-4",children:[e.jsx("div",{className:"flex-shrink-0 w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold",children:"!"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-blue-100 uppercase tracking-wide mb-1",children:"When is the best time to start thinking about Change Management?"}),e.jsx("p",{className:"text-2xl font-bold",children:"Answer: Now!"}),e.jsx("p",{className:"text-sm text-blue-100 mt-1",children:"Change management should be considered from the very start of any project - not as an afterthought at go-live."})]})]}),e.jsx(It,{title:"The 6 Key Questions",description:"Six questions worth returning to throughout the life of the programme, each backed by a change model and linked to where you can act on it.",isOpen:r==="questions",onToggle:()=>f("questions"),darkMode:i,children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:Bo.map((x,b)=>{const S=ht(t,x.componentIds[0],"inputs",s,a).slice(0,2);return e.jsxs("div",{className:`rounded-md border p-4 ${i?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsxs("span",{className:"shrink-0 w-7 h-7 rounded-full bg-blue-100 text-[#005eb8] text-xs font-bold flex items-center justify-center",children:["Q",b+1]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:x.question}),e.jsx("span",{className:`mt-1 inline-block rounded border px-2 py-0.5 text-xs font-medium ${i?"border-indigo-500/40 bg-indigo-500/15 text-indigo-200":"border-indigo-200 bg-indigo-50 text-indigo-700"}`,children:x.framework})]})]}),e.jsx("p",{className:`mt-3 text-xs leading-relaxed ${i?"text-slate-300":"text-slate-600"}`,children:x.description}),S.length?e.jsx("div",{className:"mt-3 flex flex-wrap gap-x-3 gap-y-1",children:S.map(d=>e.jsx("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-medium text-[#005eb8] underline",children:d.label},`${x.id}-${d.url}`))}):null,e.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:x.componentIds.map(d=>{const A=$t(d);return A?e.jsxs("button",{type:"button",onClick:()=>n(d),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold transition-colors ${i?"border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25":"border-blue-200 bg-blue-50 text-[#005eb8] hover:bg-blue-100"}`,children:["Go to ",A.label]},d):null})})]},x.id)})})}),e.jsxs(It,{title:"The Five Change Phases",description:"Select a phase to see the key deliverables expected at that stage.",isOpen:r==="phases",onToggle:()=>f("phases"),darkMode:i,children:[e.jsx("div",{className:`mb-6 hidden grid-cols-5 gap-1 overflow-hidden rounded-lg border text-center text-xs font-semibold md:grid ${i?"border-slate-700":"border-slate-200"}`,children:Bs.map(x=>e.jsxs("button",{onClick:()=>l(x.phase),className:`py-2 px-1 transition-colors ${u===x.phase?`${x.color} ${x.textColor} ring-2 ring-inset ring-current`:i?"bg-slate-800 text-slate-300 hover:bg-slate-700":"bg-slate-100 text-slate-500 hover:bg-slate-200"}`,children:["Phase ",x.phase]},x.phase))}),e.jsx("div",{className:"space-y-3",children:Bs.map(x=>{const b=u===x.phase;return e.jsxs("div",{className:`rounded-lg border overflow-hidden transition-shadow ${i?x.darkBorderColor:x.borderColor} ${b?"shadow-md":""}`,children:[e.jsxs("button",{onClick:()=>l(x.phase),className:`w-full flex items-center justify-between p-4 text-left transition-colors ${i?x.darkColor:x.color}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 border ${i?`${x.darkTextColor} bg-slate-900 ${x.darkBorderColor}`:`${x.textColor} bg-white ${x.borderColor}`}`,children:x.phase}),e.jsxs("div",{children:[e.jsx("p",{className:`font-semibold text-sm ${i?x.darkTextColor:x.textColor}`,children:x.label}),e.jsxs("p",{className:`text-xs ${i?"text-slate-300":"text-slate-500"}`,children:[e.jsxs("span",{className:"italic",children:['"',x.tagline,'"']})," · ",x.programmeStage]})]})]}),e.jsx("span",{className:`text-lg font-bold transition-transform ${i?x.darkTextColor:x.textColor} ${b?"rotate-45":""}`,children:"+"})]}),b&&e.jsxs("div",{className:`border-t px-5 pb-5 pt-3 ${i?"border-slate-700 bg-slate-900":"border-slate-100 bg-white"}`,children:[e.jsx("p",{className:`mb-3 text-xs font-semibold uppercase tracking-wide ${i?"text-slate-300":"text-slate-500"}`,children:"Key deliverables"}),e.jsx("ul",{className:"space-y-2",children:x.deliverables.map((S,d)=>e.jsxs("li",{className:`flex items-start gap-2 text-sm ${i?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{className:`mt-0.5 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${i?`${x.darkColor} ${x.darkTextColor}`:`${x.color} ${x.textColor}`}`,children:d+1}),S]},d))})]})]},x.phase)})})]}),e.jsx(It,{title:"The Role of the Change Manager",description:"Change management (and change managers) provide essential assistance to project managers through:",isOpen:r==="role",onToggle:()=>f("role"),darkMode:i,children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:Fo.map(x=>e.jsxs("div",{className:`rounded-md border p-4 ${i?"border-slate-700 bg-slate-800":"border-slate-100 bg-slate-50"}`,children:[e.jsx("p",{className:"text-sm font-semibold text-[#005eb8] mb-1",children:x.title}),e.jsx("p",{className:`text-xs leading-relaxed ${i?"text-slate-300":"text-slate-600"}`,children:x.body})]},x.title))})}),e.jsxs("div",{className:`flex flex-col gap-4 rounded-lg border p-5 sm:flex-row sm:items-center ${i?"border-slate-700 bg-slate-800":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:`mb-1 text-sm font-semibold ${i?"text-slate-100":"text-slate-700"}`,children:"Explore the full Toolkit"}),e.jsx("p",{className:`text-xs ${i?"text-slate-300":"text-slate-500"}`,children:"Access templates, frameworks, and guidance materials on the NHS Change Management Network workspace."})]}),e.jsx("a",{href:"https://future.nhs.uk/CMN/view?objectId=129489733",target:"_blank",rel:"noopener noreferrer",className:"shrink-0 inline-flex items-center gap-2 rounded-md bg-[#005eb8] text-white text-sm font-medium px-4 py-2 hover:bg-blue-700 transition-colors",children:"Change Management Toolkit ↗"})]})]})}function Uo(n){return n.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"export"}function ka(n){var t;return(t=n==null?void 0:n.url)!=null&&t.trim()?"custom":((n==null?void 0:n.fallback)??"default")==="base"?"base":"default"}function ja({aliases:n,onChange:t,darkMode:s}){const[a,i]=m.useState(""),r=()=>{const o=a.trim();if(!o||n.some(u=>u.toLowerCase()===o.toLowerCase())){i("");return}t([...n,o]),i("")};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[n.map(o=>e.jsxs("span",{className:`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${s?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[o,e.jsx("button",{type:"button",onClick:()=>t(n.filter(u=>u!==o)),"aria-label":`Remove "${o}"`,className:s?"text-slate-400 hover:text-slate-100":"text-slate-500 hover:text-slate-800",children:"×"})]},o)),!n.length&&e.jsx("span",{className:`text-xs ${s?"text-slate-500":"text-slate-400"}`,children:"No extra matching text added yet."})]}),e.jsxs("div",{className:"mt-2 flex gap-2",children:[e.jsx("input",{type:"text",value:a,onChange:o=>i(o.target.value),onKeyDown:o=>{o.key==="Enter"&&(o.preventDefault(),r())},placeholder:"Add text this link should also match...",className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${s?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:r,className:Oe,children:"Add"})]})]})}function Mo({link:n,perLink:t,baseOverrideUrl:s,onSave:a,onClose:i,darkMode:r}){const[o,u]=m.useState(ka(t)),[c,f]=m.useState((t==null?void 0:t.url)??""),[l,x]=m.useState((t==null?void 0:t.matchAliases)??[]),b=(s==null?void 0:s.trim())||_n.url,S=wa(n.label).find(_=>_!==n.label),d=[{value:"default",label:"Default Toolkit Link",url:n.url},{value:"base",label:"Project Specific Homepage",url:b},{value:"custom",label:"Custom URL",url:c}],A=()=>{if(o==="custom"&&!c.trim()){window.alert("Enter a custom URL, or choose Default or Base instead.");return}const _={fallback:o==="base"?"base":"default",url:o==="custom"?c.trim():void 0,matchAliases:l.length?l:void 0};a(o==="default"&&!l.length?void 0:_)};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":`Edit ${n.label} link`,className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${r?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${r?"text-slate-100":"text-slate-900"}`,children:n.label}),e.jsx("button",{type:"button",onClick:i,"aria-label":"Close",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${r?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:"mt-4 space-y-2",children:d.map(_=>e.jsxs("label",{className:`flex items-start gap-2 rounded-md border p-2.5 text-sm ${o===_.value?r?"border-blue-400 bg-blue-500/10":"border-blue-400 bg-blue-50":r?"border-slate-700":"border-slate-200"}`,children:[e.jsx("input",{type:"radio",name:`link-source-${n.key}`,checked:o===_.value,onChange:()=>u(_.value),className:"mt-1"}),e.jsxs("span",{className:"flex-1",children:[e.jsx("span",{className:`block font-medium ${r?"text-slate-100":"text-slate-800"}`,children:_.label}),_.value==="custom"&&o==="custom"?e.jsx("input",{type:"url",value:c,onChange:h=>f(h.target.value),placeholder:"https://...",className:`mt-1 w-full rounded border px-2 py-1.5 text-xs ${r?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}):_.url?e.jsx("a",{href:_.url,target:"_blank",rel:"noopener noreferrer",onClick:h=>h.stopPropagation(),className:`block truncate text-xs underline ${r?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:_.url}):e.jsx("span",{className:`block truncate text-xs ${r?"text-slate-400":"text-slate-500"}`,children:"No URL set yet."})]})]},_.value))}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${r?"text-slate-400":"text-slate-500"}`,children:"Match text"}),e.jsx("p",{className:`mt-1 text-xs ${r?"text-slate-300":"text-slate-500"}`,children:"This link is automatically matched in action/summary text. Add extra text below if it should match on other words too."}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-1.5",children:[e.jsxs("span",{className:`rounded-full border px-2 py-0.5 text-xs ${r?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[n.label," ",e.jsx("span",{className:"opacity-60",children:"(label)"})]}),S&&e.jsxs("span",{className:`rounded-full border px-2 py-0.5 text-xs ${r?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[S," ",e.jsx("span",{className:"opacity-60",children:"(auto-detected)"})]})]}),e.jsx("div",{className:"mt-2",children:e.jsx(ja,{aliases:l,onChange:x,darkMode:r})})]}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:i,className:Oe,children:"Cancel"}),e.jsx("button",{type:"button",onClick:A,className:Rn,children:"Save"})]})]})})}function Vo({title:n,aliases:t,onSave:s,onClose:a,darkMode:i}){const[r,o]=m.useState(t);return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":`Match text for ${n}`,className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${i?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-900"}`,children:[n," - match text"]}),e.jsx("button",{type:"button",onClick:a,"aria-label":"Close",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${i?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("p",{className:`mt-2 text-xs ${i?"text-slate-300":"text-slate-500"}`,children:"This link is automatically matched by its name. Add extra text below if it should match on other words too."}),e.jsx("div",{className:"mt-3",children:e.jsx(ja,{aliases:r,onChange:o,darkMode:i})}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:a,className:Oe,children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>s(r),className:Rn,children:"Save"})]})]})})}function Ho(n){const t=fa[n]||[],s=new Map,a=new Map;return t.forEach(i=>{const r=Fn[i];((r==null?void 0:r.inputs)??[]).forEach(o=>s.set(o.key,o)),((r==null?void 0:r.deliverables)??[]).forEach(o=>a.set(o.key,o))}),{inputs:[...s.values()],deliverables:[...a.values()]}}function Wo({orgProfile:n,onProfileUpdate:t,components:s,onComponentClick:a,onOpenOnboarding:i,onOpenGuidedSetup:r,darkMode:o=!1,currentUserId:u,onCurrentUserChange:c,showExternalLinksSection:f=!1}){var Be,gn,k,X,ne,me,Ee,xe,fe,Pe,K,qe,Qe,Ye,We,Je;const[l,x]=m.useState(n),[b,S]=m.useState(null),[d,A]=m.useState(null),_=m.useRef(null),h=dn("cst-personalisation"),M=gt(l),U=la(M);l.trustName.trim()&&(l.projectName||"").trim()&&(l.leadName||"").trim(),m.useEffect(()=>{x(n)},[n]);const te=m.useCallback(y=>{const O={...l,trustName:y};x(O),t(O)},[l,t]),D=m.useCallback(y=>{const O={...l,projectName:y};x(O),t(O)},[l,t]),j=m.useCallback(y=>{const O={...l,leadName:y};x(O),t(O)},[l,t]),[q,J]=m.useState(null),I=m.useCallback(y=>{y!==l.cst.pathway&&J(y)},[l.cst.pathway]),ee=m.useCallback(()=>{if(!q)return;const y={...l,cst:{...l.cst,pathway:q}};x(y),t(y),J(null)},[q,l,t]),H=m.useCallback(()=>{J(null)},[]),T=m.useCallback((y,O)=>{const z={...l,cst:{...l.cst,[y]:O}};x(z),t(z)},[l,t]),W=m.useCallback(y=>{const O={...l,cst:{...l.cst,toolkitChoice:y}};x(O),t(O)},[l,t]),ce=m.useCallback(y=>{const O={...l,linkOverrides:y};x(O),t(O)},[l,t]),ge=m.useCallback((y,O)=>{const z={...l.componentFurtherReading};O.trim()?z[y]=O.trim():delete z[y];const oe={...l,componentFurtherReading:z};x(oe),t(oe)},[l,t]),De=m.useCallback(y=>{var ye;const O={key:`custom-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,label:"",url:"",type:"additional"},z={...l.customComponentLinks,[y]:[...((ye=l.customComponentLinks)==null?void 0:ye[y])||[],O]},oe={...l,customComponentLinks:z};x(oe),t(oe)},[l,t]),R=m.useCallback((y,O,z,oe)=>{var Xe;const ye=((Xe=l.customComponentLinks)==null?void 0:Xe[y])||[],Fe={...l.customComponentLinks,[y]:ye.map(Se=>Se.key===O?{...Se,[z]:oe}:Se)},le={...l,customComponentLinks:Fe};x(le),t(le)},[l,t]),Z=m.useCallback((y,O,z)=>{var le;const oe=((le=l.customComponentLinks)==null?void 0:le[y])||[],ye={...l.customComponentLinks,[y]:oe.map(Xe=>Xe.key===O?{...Xe,matchAliases:z.length?z:void 0}:Xe)},Fe={...l,customComponentLinks:ye};x(Fe),t(Fe)},[l,t]),re=m.useCallback((y,O)=>{var Fe;const z=((Fe=l.customComponentLinks)==null?void 0:Fe[y])||[],oe={...l.customComponentLinks,[y]:z.filter(le=>le.key!==O)},ye={...l,customComponentLinks:oe};x(ye),t(ye)},[l,t]),Re=m.useCallback(()=>{const y={id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:"",role:""},O={...l,teamMembers:[...l.teamMembers||[],y]};x(O),t(O)},[l,t]),Le=m.useCallback((y,O,z)=>{const oe={...l,teamMembers:(l.teamMembers||[]).map(ye=>ye.id===y?{...ye,[O]:z}:ye)};x(oe),t(oe)},[l,t]),He=m.useCallback(y=>{const O={...l,teamMembers:(l.teamMembers||[]).filter(z=>z.id!==y)};x(O),t(O),u===y&&c("")},[l,t,u,c]),pe=l.coreLinks&&l.coreLinks.length>0?l.coreLinks:ba,tn=m.useCallback(()=>{const y={key:`core-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,label:"",url:"",type:"core"},O={...l,coreLinks:[...pe,y]};x(O),t(O)},[l,pe,t]),$e=m.useCallback((y,O,z)=>{const oe={...l,coreLinks:pe.map(ye=>ye.key===y?{...ye,[O]:z}:ye)};x(oe),t(oe)},[l,pe,t]),Ke=m.useCallback((y,O)=>{const z={...l,coreLinks:pe.map(oe=>oe.key===y?{...oe,matchAliases:O.length?O:void 0}:oe)};x(z),t(z)},[l,pe,t]),sn=m.useCallback(y=>{const O={...l,coreLinks:pe.filter(z=>z.key!==y)};x(O),t(O)},[l,pe,t]),Ne=l.toolLinks||[],v=m.useCallback(()=>{const y="highlight-builder",O={key:`tool-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,tool:y,matchText:ct[y].matchText},z={...l,toolLinks:[...Ne,O]};x(z),t(z)},[l,Ne,t]),L=m.useCallback((y,O)=>{const z={...l,toolLinks:Ne.map(oe=>oe.key===y?{...oe,tool:O,matchText:ct[O].matchText}:oe)};x(z),t(z)},[l,Ne,t]),N=m.useCallback((y,O)=>{const z={...l,toolLinks:Ne.map(oe=>oe.key===y?{...oe,matchText:O}:oe)};x(z),t(z)},[l,Ne,t]),P=m.useCallback(y=>{const O={...l,toolLinks:Ne.filter(z=>z.key!==y)};x(O),t(O)},[l,Ne,t]),V=m.useCallback(y=>{const O={...l,externalLinksInitiated:y};x(O),t(O)},[l,t]),ve=m.useCallback(()=>{const y={schemaVersion:"cst-v1",exportedAt:new Date().toISOString(),orgProfile:l},O=`cst-personalisation-${l.trustName?Uo(l.trustName):"export"}.json`;qn(O,JSON.stringify(y,null,2),"application/json")},[l]),Ae=m.useCallback(()=>{var y;(y=_.current)==null||y.click()},[]),he=m.useCallback(async y=>{var z;const O=(z=y.target.files)==null?void 0:z[0];if(y.target.value="",!!O)try{const oe=await O.text(),ye=JSON.parse(oe);if(!ye.orgProfile||typeof ye.orgProfile!="object"){window.alert("This file does not contain Project Setup data.");return}const Fe=Kn(ye.orgProfile),le=gt(Fe);if(!window.confirm("Import this Project Setup file? This replaces your current organisation profile, pathway/timeline, toolkit links, further reading, core links and team members."+(le.errors.length?`

Note: the imported data has ${le.errors.length} validation warning(s) you can fix after importing.`:"")))return;x(Fe),t(Fe)}catch{window.alert("Unable to read this file. Please choose a valid Project Setup export.")}},[t]);return e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-800"}`,children:"Project Setup"}),e.jsx(mn,{onClick:h.reopen,darkMode:o})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:Ae,className:Oe,children:"Import Setup"}),e.jsx("input",{ref:_,type:"file",accept:"application/json",className:"hidden",onChange:he}),e.jsx("button",{type:"button",onClick:ve,className:Oe,children:"Export Setup"}),e.jsx("button",{type:"button",onClick:i,className:Oe,"data-testid":"cst-show-intro-button",children:"Show introduction again"}),r?e.jsx("button",{type:"button",onClick:r,className:Oe,children:"Guided Setup"}):null]})]}),e.jsx("p",{className:`text-sm -mt-4 ${o?"text-slate-300":"text-slate-600"}`,children:"This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways it follows, and how it's tracking against its readiness phases."}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 1: Organisation profile"}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Provide some initial details to the project name, and change manager"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-trust-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Organisation Name"}),e.jsx("input",{id:"org-trust-name",type:"text","data-testid":"cst-trust-name-input",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.trustName,onChange:y=>te(y.target.value),"aria-invalid":!!U("trustName"),"aria-describedby":U("trustName")?"org-trust-name-error":void 0}),U("trustName")?e.jsx("p",{id:"org-trust-name-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:U("trustName")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-project-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Programme / Project Name"}),e.jsx("input",{id:"org-project-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.projectName||"",onChange:y=>D(y.target.value)})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-lead-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Lead Submitter (Change Lead)"}),e.jsx("input",{id:"org-lead-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.leadName||"",onChange:y=>j(y.target.value)})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 2: Pathway and timeline"}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Choose the full pathway title for your programme, then set key timeline dates."})]}),e.jsx("div",{className:"mt-3",children:e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-pathway",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Pathway"}),e.jsx("select",{id:"cst-pathway",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.cst.pathway,onChange:y=>I(y.target.value),"aria-invalid":!!U("cst.pathway"),"aria-describedby":U("cst.pathway")?"cst-pathway-error":void 0,children:sa.map(y=>e.jsx("option",{value:y.value,children:y.label},y.value))}),U("cst.pathway")?e.jsx("p",{id:"cst-pathway-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:U("cst.pathway")}):null]})}),e.jsx(ca,{pathway:l.cst.pathway,darkMode:o}),e.jsxs("div",{className:"mt-3 grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-go-live",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Go Live Date (required)"}),e.jsx("input",{id:"cst-go-live",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.cst.goLiveDate,onChange:y=>T("goLiveDate",y.target.value),"aria-invalid":!!U("cst.goLiveDate"),"aria-describedby":U("cst.goLiveDate")?"cst-go-live-error":void 0}),U("cst.goLiveDate")?e.jsx("p",{id:"cst-go-live-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:U("cst.goLiveDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-full-adoption",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Full Adoption Date (optional)"}),e.jsx("input",{id:"cst-full-adoption",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.cst.fullAdoptionDate,onChange:y=>T("fullAdoptionDate",y.target.value),"aria-invalid":!!U("cst.fullAdoptionDate"),"aria-describedby":U("cst.fullAdoptionDate")?"cst-full-adoption-error":void 0}),U("cst.fullAdoptionDate")?e.jsx("p",{id:"cst-full-adoption-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:U("cst.fullAdoptionDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-benefit",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Benefit Realisation Date (optional)"}),e.jsx("input",{id:"cst-benefit",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.cst.benefitRealizationDate,onChange:y=>T("benefitRealizationDate",y.target.value),"aria-invalid":!!U("cst.benefitRealizationDate"),"aria-describedby":U("cst.benefitRealizationDate")?"cst-benefit-error":void 0}),U("cst.benefitRealizationDate")?e.jsx("p",{id:"cst-benefit-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:U("cst.benefitRealizationDate")}):null]})]}),M.errors.filter(y=>y.field.startsWith("cst.")).length>0?e.jsxs("div",{className:`mt-4 rounded-md border p-3 ${o?"border-amber-500/40 bg-amber-500/10":"border-amber-300 bg-amber-50"}`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-amber-200":"text-amber-800"}`,children:"CST validation warnings"}),e.jsx("ul",{className:`mt-2 space-y-1 text-sm ${o?"text-amber-100":"text-amber-900"}`,children:M.errors.filter(y=>y.field.startsWith("cst.")).map(y=>e.jsxs("li",{children:["- ",y.message]},y.field+y.message))})]}):null]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 3: Team Members"}),e.jsx("p",{className:`text-sm mt-1 ${o?"text-slate-300":"text-slate-600"}`,children:"Add the people working on this programme so actions and readiness slides can be assigned to a named owner. This roster is saved with the CST; who you're signed in as is remembered on this device only."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-current-user",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"You are signed in as"}),e.jsxs("select",{id:"cst-current-user",value:u||"",onChange:y=>c(y.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 md:w-1/2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Not selected"}),(l.teamMembers||[]).map(y=>e.jsxs("option",{value:y.id,children:[y.name||"Unnamed",y.role?` - ${y.role}`:""]},y.id))]})]}),e.jsxs("div",{className:"space-y-2",children:[(l.teamMembers||[]).map(y=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2 items-center",children:[e.jsx("input",{value:y.name,onChange:O=>Le(y.id,"name",O.target.value),placeholder:"Name",className:`rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("input",{value:y.role,onChange:O=>Le(y.id,"role",O.target.value),placeholder:"Role (e.g. Change Lead)",className:`rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("button",{type:"button",onClick:()=>He(y.id),className:"shrink-0 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},y.id)),(l.teamMembers||[]).length?null:e.jsx("p",{className:`text-sm ${o?"text-slate-400":"text-slate-500"}`,children:"No team members added yet."})]}),e.jsx("button",{type:"button",onClick:Re,className:Oe,children:"+ Add Team Member"})]}),e.jsx("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 4: External links"}),e.jsxs("label",{className:`flex items-center gap-2 text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:[e.jsx("input",{type:"checkbox",checked:!!l.externalLinksInitiated,onChange:y=>V(y.target.checked)}),"Links initiated"]})]}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:`This is normally only set up once at the start of a project. Once you're done, tick "Links initiated" to hide this section - re-enable "Show external links section" in Settings if you need to come back to it.`}),!l.externalLinksInitiated||f?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"All toolkit links across the tool point to the NHS Future platform by default. You can override the base toolkit destination for your organisation, or change individual links independently."}),e.jsxs("div",{className:`mt-3 rounded-md border p-3 text-xs ${o?"border-blue-500/30 bg-blue-500/10 text-blue-100":"border-blue-200 bg-blue-50 text-blue-900"}`,children:[e.jsx("p",{className:"font-semibold",children:"Fallback reference"}),e.jsxs("p",{className:"mt-1",children:["Project Specific Homepage: ",e.jsx("span",{className:"font-medium",children:_n.label})," (",_n.url,")"]}),e.jsx("p",{className:"mt-1",children:"Default Toolkit Link: the original NHS Future link defined per guidance item."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("label",{htmlFor:"cst-toolkit-choice",className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Default toolkit for assistant preview"}),e.jsx("select",{id:"cst-toolkit-choice",value:l.cst.toolkitChoice,onChange:y=>W(y.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:Xa.map(y=>e.jsx("option",{value:y.key,children:y.label},y.key))}),e.jsx("p",{className:`mt-2 text-xs ${o?"text-slate-300":"text-slate-500"}`,children:"This controls which toolkit the chatbot-style assistant opens by default across the tool."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Project Specific Homepage"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"Replaces the Change Management Toolkit destination for all links that fall back to it."}),e.jsxs("p",{className:"mt-1 text-xs",children:["Currently:"," ",e.jsx("a",{href:((k=(gn=(Be=l.linkOverrides)==null?void 0:Be.base)==null?void 0:gn.url)==null?void 0:k.trim())||_n.url,target:"_blank",rel:"noopener noreferrer",className:`underline ${o?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:((me=(ne=(X=l.linkOverrides)==null?void 0:X.base)==null?void 0:ne.url)==null?void 0:me.trim())||_n.url})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Toolkit name"}),e.jsx("input",{type:"text",placeholder:_n.label,value:((xe=(Ee=l.linkOverrides)==null?void 0:Ee.base)==null?void 0:xe.label)??"",onChange:y=>{var O;return ce({...l.linkOverrides,base:{...(O=l.linkOverrides)==null?void 0:O.base,label:y.target.value||void 0}})},className:`w-full rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Toolkit URL"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:_n.url,value:((Pe=(fe=l.linkOverrides)==null?void 0:fe.base)==null?void 0:Pe.url)??"",onChange:y=>{var O;return ce({...l.linkOverrides,base:{...(O=l.linkOverrides)==null?void 0:O.base,url:y.target.value||void 0}})},className:`flex-1 min-w-0 rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),((qe=(K=l.linkOverrides)==null?void 0:K.base)==null?void 0:qe.url)&&e.jsx("button",{type:"button",onClick:()=>{var y;return ce({...l.linkOverrides,base:{...(y=l.linkOverrides)==null?void 0:y.base,url:void 0}})},className:`shrink-0 rounded-md border px-3 py-2 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Reset"})]})]})]})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Additional Links"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"General reference links that aren't tied to a single component - shown here and matched into action/summary text across every component."})]}),e.jsx("div",{className:"space-y-2",children:pe.map(y=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto,auto] gap-2 items-center",children:[e.jsx("input",{type:"text",placeholder:"Link name",value:y.label,onChange:O=>$e(y.key,"label",O.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("input",{type:"url",placeholder:"https://...",value:y.url,onChange:O=>$e(y.key,"url",O.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>A({link:y}),"aria-label":`Edit match text for ${y.label||"this core link"}`,className:`shrink-0 rounded border px-1.5 py-1.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"}),e.jsx("button",{type:"button",onClick:()=>sn(y.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},y.key))}),e.jsx("button",{type:"button",onClick:tn,className:Oe,children:"+ Add Core Link"})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Tool linking"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"Matches text in action/summary bodies and turns it into a button that opens an in-app tool, instead of a link to a URL."})]}),e.jsx("div",{className:"space-y-2",children:Ne.map(y=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto] gap-2 items-center",children:[e.jsx("select",{value:y.tool,onChange:O=>L(y.key,O.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:ia.map(O=>e.jsx("option",{value:O,children:ct[O].label},O))}),e.jsx("input",{type:"text",placeholder:"Matched text",value:y.matchText,onChange:O=>N(y.key,O.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>P(y.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},y.key))}),e.jsx("button",{type:"button",onClick:v,className:Oe,children:"+ Add Tool Link"})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Component links"}),e.jsxs("p",{className:`text-xs ${o?"text-slate-300":"text-slate-500"}`,children:[`Set the "Further Reading" link shown on each component's overview panel, and override any of its individual guidance links. Each link shows whether it currently points at the `,e.jsx("strong",{children:"Default Toolkit Link"})," (the original NHS Future link),"," ",e.jsx("strong",{children:"Project Specific Homepage"})," (your organisation's override above), or a"," ",e.jsx("strong",{children:"Custom"})," URL you've set - click the pencil to change it. Additional links can be hidden from Settings if you only want the essentials."]}),s.map(y=>{var Fe,le,Xe;const O=Ho(y.id),z=[...O.inputs,...O.deliverables],oe=z.filter(Se=>{var Te,be,vn,pn;return(pn=(vn=(be=(Te=l.linkOverrides)==null?void 0:Te.links)==null?void 0:be[Se.key])==null?void 0:vn.url)==null?void 0:pn.trim()}).length,ye=!!((Fe=l.componentFurtherReading)!=null&&Fe[y.id]);return e.jsxs("details",{className:`rounded-md border ${o?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer items-center justify-between gap-2 p-3 text-sm font-medium ${o?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{children:y.label}),e.jsxs("span",{className:"flex items-center gap-2",children:[ye&&e.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-emerald-500/20 text-emerald-300":"bg-emerald-100 text-emerald-700"}`,children:"Further reading set"}),oe>0&&e.jsxs("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-blue-500/20 text-blue-300":"bg-blue-100 text-blue-700"}`,children:[oe," override",oe!==1?"s":""]})]})]}),e.jsxs("div",{className:`divide-y ${o?"divide-slate-700":"divide-slate-100"}`,children:[e.jsxs("div",{className:"p-3 space-y-1.5",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:"Further reading"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:"https://...",value:((le=l.componentFurtherReading)==null?void 0:le[y.id])??"",onChange:Se=>ge(y.id,Se.target.value),className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),ye&&e.jsx("button",{type:"button",onClick:()=>ge(y.id,""),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Clear"})]})]}),!z.length&&e.jsx("p",{className:`p-3 text-xs ${o?"text-slate-500":"text-slate-400"}`,children:"No default guidance links for this component - add one below."}),["inputs","deliverables"].map(Se=>{const Te=O[Se]??[];return Te.length?e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:Se}),Te.map(be=>{var kn,Dn;const vn=(Dn=(kn=l.linkOverrides)==null?void 0:kn.links)==null?void 0:Dn[be.key],pn=Xt(be,l.linkOverrides),hn=ka(vn),Un={default:o?"border-amber-500/40 bg-amber-500/15 text-amber-200":"bg-amber-50 border-amber-200 text-amber-800",custom:o?"border-green-500/40 bg-green-500/15 text-green-200":"bg-green-50 border-green-200 text-green-800",base:o?"border-red-500/30 bg-red-500/10 text-red-200":"bg-red-50 border-red-100 text-red-700"},Pn={default:"Default Toolkit Link",custom:"Custom",base:"Project Specific Homepage"};return e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-700"}`,children:[be.type!=="core"?"(Optional) ":"",be.label]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("a",{href:pn.url,target:"_blank",rel:"noopener noreferrer",title:pn.url,className:`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${Un[hn]}`,children:Pn[hn]}),e.jsx("button",{type:"button",onClick:()=>S(be),"aria-label":`Edit ${be.label} link`,className:`shrink-0 rounded-md border px-1.5 py-0.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"})]})]},be.key)})]},Se):null}),e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:"Custom links"}),(((Xe=l.customComponentLinks)==null?void 0:Xe[y.id])||[]).map(Se=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto,auto] gap-2 items-center",children:[e.jsx("input",{type:"text",placeholder:"Link name",value:Se.label,onChange:Te=>R(y.id,Se.key,"label",Te.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("input",{type:"url",placeholder:"https://...",value:Se.url,onChange:Te=>R(y.id,Se.key,"url",Te.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>A({link:Se,componentId:y.id}),"aria-label":`Edit match text for ${Se.label||"this link"}`,className:`shrink-0 rounded border px-1.5 py-1.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"}),e.jsx("button",{type:"button",onClick:()=>re(y.id,Se.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},Se.key)),e.jsx("button",{type:"button",onClick:()=>De(y.id),className:Oe,children:"+ Add Link"})]})]})]},y.id)})]})]}):e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:'External links were set up at project start. Turn on "Show external links section" in Settings if you need to come back and edit them.'})]})}),b&&e.jsx(Mo,{link:b,perLink:(Ye=(Qe=l.linkOverrides)==null?void 0:Qe.links)==null?void 0:Ye[b.key],baseOverrideUrl:(Je=(We=l.linkOverrides)==null?void 0:We.base)==null?void 0:Je.url,onSave:y=>{var z;const O={...(z=l.linkOverrides)==null?void 0:z.links};y?O[b.key]=y:delete O[b.key],ce({...l.linkOverrides,links:O}),S(null)},onClose:()=>S(null),darkMode:o}),d&&e.jsx(Vo,{title:d.link.label||"Link",aliases:d.link.matchAliases||[],onSave:y=>{d.componentId?Z(d.componentId,d.link.key,y):Ke(d.link.key,y),A(null)},onClose:()=>A(null),darkMode:o}),q&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-lg rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-900"}`,children:["Change pathway to ",Ht[q],"?"]}),e.jsx("div",{className:`mt-3 space-y-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:q==="pathway-1"?e.jsx("p",{children:"This will regenerate every component's outcomes and actions for Pathway 1. Any items you've added yourself are kept."}):e.jsx("p",{children:"Pathway 2 and Pathway 3 don't have their own outcomes and actions written yet, so this will clear the Pathway 1 stand-in content instead of leaving it in place - components will show an honest empty state until pathway-specific content is added. Any items you've added yourself are kept."})}),e.jsxs("div",{className:"mt-5 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:H,className:Oe,children:"Cancel"}),e.jsx("button",{type:"button",onClick:ee,className:"inline-flex items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Confirm change"})]})]})}),e.jsx(un,{open:h.isOpen,onClose:h.close,title:"Project Setup",darkMode:o,body:e.jsx("p",{children:"This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways it follows, and how it's tracking against its readiness phases. You can export or import just this page's data, and manage the external links shown throughout the tool."})})]})}function qo({steps:n,onComponentClick:t,onActionView:s,colorAccessibilityMode:a="standard",darkMode:i=!1}){const[r,o]=m.useState({}),u=a==="color-blind-friendly"?vi:ga;return e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"What To Do Next"}),e.jsx("span",{className:`text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Your current phase"})]}),e.jsx("p",{className:`text-sm mb-4 ${i?"text-slate-300":"text-slate-500"}`,children:"Every component in your current phase that still has pending actions, ranked by timeline risk - overdue first."}),n.length>0?e.jsx("div",{className:"space-y-3",children:n.map(c=>{var x;const f=!!r[c.componentId],l=c.outstandingActions.length;return e.jsxs("div",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("button",{type:"button",onClick:()=>t(c.componentId),className:"flex w-full items-center justify-between gap-3 text-left",children:[e.jsx("span",{className:`text-sm font-semibold hover:underline ${i?"text-slate-100":"text-slate-800"}`,children:c.componentLabel}),e.jsx("span",{title:c.bragReason,className:`text-xs font-semibold rounded px-2.5 py-0.5 ${u[c.bragStatus]}`,children:c.bragStatus})]}),e.jsx("p",{className:`text-sm mt-1 ${i?"text-slate-300":"text-slate-600"}`,children:c.summary}),(x=c.toolkitLinks)!=null&&x.length?e.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:c.toolkitLinks.map(b=>e.jsx("a",{href:b.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-medium text-[#005eb8] underline",children:b.label},`${c.componentId}-${b.url}`))}):null,l>0&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("button",{type:"button",onClick:()=>o(b=>({...b,[c.componentId]:!b[c.componentId]})),className:`text-xs font-semibold underline ${i?"text-slate-300 hover:text-slate-100":"text-slate-600 hover:text-slate-900"}`,children:[f?"Hide":"Show"," outstanding action",l===1?"":"s"," (",l,")"]}),f&&e.jsx("div",{className:`mt-2 overflow-x-auto rounded-md border ${i?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full divide-y text-xs",children:[e.jsx("thead",{className:i?"bg-slate-800":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Lens"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Status"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"View"})]})}),e.jsx("tbody",{className:`divide-y ${i?"divide-slate-700":"divide-slate-100"}`,children:c.outstandingActions.map(b=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-2 py-1.5 font-medium ${i?"text-slate-200":"text-slate-700"}`,children:b.lens}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:b.text}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:b.owner||"Unassigned"}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:b.status||"-"}),e.jsx("td",{className:"px-2 py-1.5",children:e.jsx("button",{type:"button",onClick:()=>s(c.componentId,b.lens,b.id),className:`font-semibold underline ${i?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:"View"})})]},b.id))})]})})]})]},c.componentId)})}):e.jsx("p",{className:`text-sm ${i?"text-slate-400":"text-slate-500"}`,children:"Nothing pending for your current phase. Continue tracking actions and maintain evidence quality."})]})}function zo({components:n,store:t,getEntry:s,onComponentClick:a,darkMode:i=!1}){const[r,o]=m.useState(null),u=n.reduce((f,l)=>(f[l.phase]=f[l.phase]||[],f[l.phase].push(l),f),{}),c=(f,l)=>{const x=`${f}:${l}`;o(b=>b===x?null:x)};return e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Programme Change Hierarchy"}),e.jsxs("p",{className:`mt-1 mb-4 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:["Your programme has ",n.length," components, each viewed through one or more lenses. A component is a change topic you assess and track. A lens is the perspective used to assess it (e.g. leadership, risk, capability). Click a lens to see its actions, or open the full assessment."]}),e.jsx("div",{className:"space-y-5",children:aa.filter(f=>{var l;return(l=u[f])==null?void 0:l.length}).map(f=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:`text-sm font-semibold ${i?"text-slate-100":"text-slate-700"}`,children:["Phase ",f,": ",ln[f]]}),e.jsx("div",{className:"space-y-2",children:u[f].map(l=>{const x=l.lenses.reduce((S,d)=>{const A=s(l.id,d);return{total:S.total+A.actions.length,completed:S.completed+A.actions.filter(_=>_.status==="Completed").length}},{total:0,completed:0}),b=_i(t,l.id,s);return e.jsxs("div",{"data-testid":`cst-component-card-${l.id}`,className:`w-full rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("span",{className:`font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:l.label}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:`text-xs ${i?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",Bt(l.target)]}),e.jsx("button",{type:"button",onClick:()=>a(l.id),className:`text-xs font-semibold underline ${i?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:"Open full assessment"})]})]}),e.jsx("div",{className:"mt-2 flex flex-wrap gap-1.5",children:l.lenses.map(S=>{const d=s(l.id,S),A=r===`${l.id}:${S}`;return e.jsxs("button",{type:"button",onClick:()=>c(l.id,S),"aria-expanded":A,className:`text-xs px-2 py-1 rounded-full border transition-colors ${A?i?"border-blue-400 bg-blue-500/25 text-blue-100":"border-blue-400 bg-blue-100 text-blue-900":d.score>=l.target?i?"border-green-500/40 bg-green-500/15 text-green-200 hover:bg-green-500/25":"bg-green-50 border-green-200 text-green-800 hover:bg-green-100":d.score>0?i?"border-amber-500/40 bg-amber-500/15 text-amber-200 hover:bg-amber-500/25":"bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100":i?"border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700":"bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"}`,children:[S,": ",d.score,"/",l.target]},S)})}),e.jsxs("p",{className:`mt-2 text-xs ${i?"text-slate-300":"text-slate-500"}`,children:["Lens actions: ",x.completed,"/",x.total," complete · Outcomes: ",b.completed,"/",b.total," complete"]}),l.lenses.map(S=>{if(!(r===`${l.id}:${S}`))return null;const A=s(l.id,S);return e.jsx("div",{className:`mt-3 overflow-x-auto rounded-md border ${i?"border-slate-700":"border-slate-200"}`,children:A.actions.length?e.jsxs("table",{className:`min-w-full divide-y ${i?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"}`,children:[e.jsx("thead",{className:i?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"})]})}),e.jsx("tbody",{className:`divide-y ${i?"divide-slate-700":"divide-slate-100"}`,children:A.actions.map(_=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${i?"text-slate-100":"text-slate-800"}`,children:_.text||"Untitled action"}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`inline-flex whitespace-nowrap rounded-full border px-2 py-1 text-xs font-semibold ${On[_.status]}`,children:_.status})}),e.jsx("td",{className:`px-3 py-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:_.owner||"Unassigned"})]},_.id))})]}):e.jsx("p",{className:`p-3 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:"No actions yet for this lens."})},`${S}-table`)})]},l.id)})})]},`phase-group-${f}`))})]})}function Ko({store:n,components:t,metrics:s,getEntry:a,onComponentClick:i,onActionView:r,phaseFocusMode:o="auto",manualPhaseFocus:u,colorAccessibilityMode:c="standard",darkMode:f=!1}){const l=dn("daily-checkin"),x=o==="manual"&&u?u:s.currentPhase,b=m.useMemo(()=>pa(t,a,x),[t,a,x]);return e.jsxs("div",{className:"max-w-5xl mx-auto pb-20",children:[e.jsxs("div",{className:"mb-6 flex items-center gap-2",children:[e.jsx("h2",{className:`text-3xl font-bold ${f?"text-slate-100":"text-slate-800"}`,children:"Daily Check-in"}),e.jsx(mn,{onClick:l.reopen,darkMode:f})]}),e.jsx("p",{className:`mb-6 -mt-4 text-sm ${f?"text-slate-300":"text-slate-500"}`,children:"Your daily triage: what's outstanding right now, and where it sits in the wider programme."}),e.jsxs("div",{className:"space-y-8",children:[e.jsx(qo,{steps:b,onComponentClick:i,onActionView:r,colorAccessibilityMode:c,darkMode:f}),e.jsx(zo,{components:t,store:n,getEntry:a,onComponentClick:i,darkMode:f})]}),e.jsx(un,{open:l.isOpen,onClose:l.close,title:"Daily Check-in",darkMode:f,body:e.jsx("p",{children:'This is your daily triage page - "What To Do Next" lists every component in your current phase with outstanding actions, ranked by timeline risk, and the Programme Change Hierarchy below gives you the full picture across every phase.'})})]})}const At=[1,2,3,4,5];function Yo(n,t){const s=n.lenses.reduce((a,i)=>a+Number(t(n.id,i).score||0),0);return n.lenses.length?Number((s/n.lenses.length).toFixed(1)):0}function Jo(n,t,s,a,i,r){if(n.phase>s)return{label:"Not in current phase yet",rowClass:r?"border-slate-600 bg-slate-800/80":"border-slate-200 bg-slate-50",chipClass:r?"bg-slate-700 text-slate-100":"bg-slate-200 text-slate-700",barClass:"bg-slate-400"};const o=Yt(n.id,a),u=Fi({averageScore:t,targetScore:n.target,checkedItemKeys:i,rule:o});return u.status==="off-track"?{label:`Off track (${u.completionPct}% checklist)`,rowClass:r?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:r?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:u.status==="attention"?{label:`Needs attention (${u.completionPct}% checklist)`,rowClass:r?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:r?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:t>=n.target?{label:`On track (${u.completionPct}% checklist)`,rowClass:r?"border-green-700 bg-green-950/45":"border-green-200 bg-green-50",chipClass:r?"bg-green-900 text-green-100":"bg-green-100 text-green-700",barClass:"bg-green-500"}:n.phase<s?{label:"Behind timeline",rowClass:r?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:r?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:n.phase===s?{label:"Due this phase",rowClass:r?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:r?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:{label:"In progress",rowClass:r?"border-blue-700 bg-blue-950/45":"border-blue-200 bg-blue-50",chipClass:r?"bg-blue-900 text-blue-100":"bg-blue-100 text-blue-700",barClass:"bg-blue-500"}}function Xo({components:n,metrics:t,getEntry:s,onComponentClick:a,pathway:i,pathwayChecks:r,darkMode:o=!1}){const u=dn("component-delivery-timeline"),c=n.map(f=>{var b;const l=Yo(f,s),x=((b=r[f.id])==null?void 0:b[i])||[];return{component:f,average:l,status:Jo(f,l,t.currentPhase,i,x,o)}});return e.jsxs("section",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-2xl border p-6 shadow-sm`,children:[e.jsx("p",{className:`text-sm font-semibold uppercase tracking-[0.18em] ${o?"text-slate-300":"text-slate-500"}`,children:"Component Delivery Timeline"}),e.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-900"}`,children:"Component delivery timeline"}),e.jsx(mn,{onClick:u.reopen,darkMode:o})]}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"This gantt-style view shows when each component should be completed by phase. Components are coloured by whether they are on track against the current phase. Select a row to jump into the matching assessment tab."})]}),e.jsx(un,{open:u.isOpen,onClose:u.close,title:"Component Delivery Timeline",darkMode:o,body:e.jsx("p",{children:"A gantt-style view of when each component should be completed by phase, coloured by whether it's on track. Select a row to jump straight into that component's assessment."})}),e.jsx("div",{className:"lg:hidden space-y-3",children:c.map(({component:f,average:l,status:x})=>e.jsxs("button",{type:"button",onClick:()=>a(f.id),className:`w-full rounded-xl border p-4 text-left transition-colors ${o?"hover:border-slate-500":"hover:border-slate-300"} ${x.rowClass}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:f.label}),e.jsxs("div",{className:`mt-1 text-xs ${o?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",Bt(f.target)," · completes by Phase"," ",f.phase]})]}),e.jsx("span",{className:`rounded-full px-4 py-1 text-xs font-semibold ${x.chipClass}`,children:x.label})]}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("div",{className:`mb-1 flex items-center justify-between text-xs ${o?"text-slate-300":"text-slate-600"}`,children:[e.jsx("span",{children:"Timeline"}),e.jsxs("span",{children:["Average ",l]})]}),e.jsx("div",{className:"grid grid-cols-5 gap-1",children:At.map(b=>{const S=b<=f.phase,d=b===f.phase;return e.jsxs("div",{children:[e.jsx("div",{className:`h-2 rounded-full ${o?"bg-slate-700/70":"bg-white/80"}`,children:S?e.jsx("div",{className:`h-full rounded-full ${x.barClass} ${d?"opacity-100":"opacity-35"}`,title:d?"Expected completion phase":"Planned timeline"}):null}),e.jsxs("div",{className:`mt-1 text-center text-[10px] ${o?"text-slate-400":"text-slate-500"}`,children:["P",b]})]},`${f.id}-mobile-${b}`)})})]})]},`mobile-${f.id}`))}),e.jsx("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} hidden lg:block rounded-2xl border p-5 shadow-sm overflow-x-auto`,children:e.jsxs("div",{className:"min-w-[860px]",children:[e.jsxs("div",{className:`grid grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 border-b pb-3 text-xs font-semibold uppercase tracking-wider ${o?"border-slate-700 text-slate-400":"border-slate-200 text-slate-500"}`,children:[e.jsx("div",{children:"Component"}),At.map(f=>e.jsxs("div",{className:"text-center",children:["Phase ",f]},f)),e.jsx("div",{className:"text-center",children:"Average"}),e.jsx("div",{className:"text-center",children:"Status"})]}),e.jsx("div",{className:"mt-4 space-y-3",children:c.map(({component:f,average:l,status:x})=>e.jsxs("button",{type:"button",onClick:()=>a(f.id),className:`grid w-full grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 rounded-xl border p-2.5 text-left transition-colors ${o?"hover:border-slate-500":"hover:border-slate-300"} ${x.rowClass}`,children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:f.label}),e.jsxs("div",{className:`mt-1 text-xs ${o?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",Bt(f.target)," · completes by Phase"," ",f.phase]})]}),At.map(b=>{const S=b<=f.phase,d=b===f.phase;return e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:`h-7 w-full rounded-full px-1 py-1 ${o?"bg-slate-700/70":"bg-white/70"}`,children:S?e.jsx("div",{className:`h-full rounded-full ${x.barClass} ${d?"opacity-100":"opacity-35"}`,title:d?"Expected completion phase":"Planned timeline"}):null})},`${f.id}-${b}`)}),e.jsx("div",{className:`flex items-center justify-center text-sm font-semibold ${o?"text-slate-100":"text-slate-700"}`,children:l}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("span",{className:`rounded-full text-center px-2.5 py-1 text-xs font-semibold ${x.chipClass}`,children:x.label})})]},f.id))}),e.jsxs("div",{className:`mt-4 rounded-md border p-3 text-xs ${o?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{className:"font-semibold",children:"Key:"})," Grey rows are not yet due for the current phase. Red rows indicate overdue or off-track work."]})]})})]})}function Qo(n){return ti.sanitize(n,{USE_PROFILES:{html:!0}})}const Zo=[{label:"Bold",command:"bold",icon:"B"},{label:"Italic",command:"italic",icon:"I"},{label:"Bullet list",command:"insertUnorderedList",icon:"•"},{label:"Numbered list",command:"insertOrderedList",icon:"1."}];function Fs({value:n,onChange:t,placeholder:s,className:a}){const i=m.useRef(null);m.useEffect(()=>{const c=i.current;c&&c.innerHTML!==n&&(c.innerHTML=n)},[n]);const r=()=>{const c=i.current;c&&t(Qo(c.innerHTML))},o=c=>{var f;(f=i.current)==null||f.focus(),document.execCommand(c,!1),r()},u=!n||n==="<br>";return e.jsxs("div",{className:`rounded-md border border-slate-300 bg-white ${a||""}`,children:[e.jsx("div",{"data-print-hide":"true",className:"flex items-center gap-1 border-b border-slate-200 bg-slate-50 px-1.5 py-1",children:Zo.map(c=>e.jsx("button",{type:"button",title:c.label,"aria-label":c.label,onMouseDown:f=>f.preventDefault(),onClick:()=>o(c.command),className:"flex h-6 min-w-[1.5rem] items-center justify-center rounded px-1 text-xs font-bold text-slate-600 hover:bg-slate-200",children:c.icon},c.command))}),e.jsxs("div",{className:"relative",children:[u&&s?e.jsx("span",{className:"pointer-events-none absolute left-2 top-1.5 text-sm text-slate-400",children:s}):null,e.jsx("div",{ref:i,contentEditable:!0,suppressContentEditableWarning:!0,onInput:r,onBlur:r,className:"min-h-[4.5rem] px-2 py-1.5 text-sm text-slate-800 outline-none [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"})]})]})}function ze(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}const Mt="nhs-highlight-builder-layout",Gs=[{id:"executive-summary",label:"Executive Summary"},{id:"change-dashboard",label:"Change Dashboard"},{id:"adoption-metrics",label:"Adoption Metrics"},{id:"what-went-well",label:"What Went Well"},{id:"risks-issues",label:"Key Risks and Issues"},{id:"stakeholder-insights",label:"Stakeholder Insights"},{id:"interventions-delivered",label:"Change Interventions Delivered"},{id:"upcoming-priorities",label:"Upcoming Priorities"},{id:"decisions-required",label:"Decisions Required"},{id:"change-lead-assessment",label:"Change Lead Assessment"}],cn={title:"Executive Highlight Report",themeColor:"#005eb8",logoDataUrl:"",programmeName:"",reportingPeriod:"",changeLeadName:"",sroName:"",overallStatus:"Amber",orientation:"landscape",bragSlides:[],sections:["executive-summary","change-dashboard","adoption-metrics","what-went-well","risks-issues","stakeholder-insights","interventions-delivered","upcoming-priorities","decisions-required","change-lead-assessment"],sectionNarratives:{},metricRows:[],riskRows:[],stakeholderPositivePct:0,stakeholderNeutralPct:0,stakeholderNegativePct:0,interventionRows:[],decisionRows:[],assessmentRows:[]},er={Green:"bg-green-100 text-green-800 border-green-200",Amber:"bg-amber-100 text-amber-800 border-amber-200",Red:"bg-red-100 text-red-800 border-red-200"},nr={Green:"bg-green-500",Amber:"bg-amber-500",Red:"bg-red-500"};function Us({status:n}){return e.jsxs("span",{className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${er[n]}`,children:[e.jsx("span",{className:`h-2 w-2 rounded-full ${nr[n]}`}),n]})}function tr(){return e.jsx("span",{className:"flex h-4 w-4 shrink-0 items-center justify-center rounded bg-green-500 text-[10px] font-bold text-white",children:"✓"})}function Ms(n,t){return`${n+1}. ${t}`}function Ia(n){return Array.isArray(n)?n.filter(t=>!!t&&typeof t=="object").map(t=>({id:t.id||ze(),componentId:t.componentId||"",rows:Array.isArray(t.rows)?t.rows.filter(s=>!!s&&typeof s=="object").map(s=>({id:s.id||ze(),preventingGreenHtml:s.preventingGreenHtml||"",returnToGreenHtml:s.returnToGreenHtml||"",ownerId:s.ownerId||"",targetDate:s.targetDate||"",linkedActionId:s.linkedActionId})):[]})):[]}function Yn(n,t){return Array.isArray(n)?n.filter(s=>!!s&&typeof s=="object").map(t):[]}function Aa(n){return Yn(n,t=>({id:t.id||ze(),measure:t.measure||"",target:t.target||"",current:t.current||"",status:t.status==="Green"||t.status==="Amber"||t.status==="Red"?t.status:"Amber"}))}function _a(n){return Yn(n,t=>({id:t.id||ze(),risk:t.risk||"",impact:t.impact||"",mitigation:t.mitigation||"",status:t.status||"Open"}))}function Oa(n){return Yn(n,t=>({id:t.id||ze(),text:t.text||""}))}function Ra(n){return Yn(n,t=>({id:t.id||ze(),decision:t.decision||"",owner:t.owner||"",requiredBy:t.requiredBy||""}))}function Pa(n){return Yn(n,t=>({id:t.id||ze(),area:t.area||"",confidence:t.confidence==="High"||t.confidence==="Medium"||t.confidence==="Low"?t.confidence:"Medium"}))}function sr(){const n=En(Mt);if(!n)return cn;try{return{...cn,...n,overallStatus:n.overallStatus==="Green"||n.overallStatus==="Amber"||n.overallStatus==="Red"?n.overallStatus:cn.overallStatus,orientation:n.orientation==="portrait"||n.orientation==="landscape"?n.orientation:cn.orientation,bragSlides:Ia(n.bragSlides),sections:Array.isArray(n.sections)&&n.sections.length>0?n.sections:cn.sections,metricRows:Aa(n.metricRows),riskRows:_a(n.riskRows),stakeholderPositivePct:Number(n.stakeholderPositivePct)||0,stakeholderNeutralPct:Number(n.stakeholderNeutralPct)||0,stakeholderNegativePct:Number(n.stakeholderNegativePct)||0,interventionRows:Oa(n.interventionRows),decisionRows:Ra(n.decisionRows),assessmentRows:Pa(n.assessmentRows)}}catch{return cn}}function ar({store:n,metrics:t,lenses:s,components:a=bt,getEntry:i,trustName:r,projectName:o,themeColor:u,onLayoutSaved:c,darkMode:f=!1,currentUserId:l}){const x=dn("highlight-builder"),b=n.orgProfile.teamMembers||[],[S,d]=m.useState(()=>{const v=sr();return u&&!v.themeColor?{...v,themeColor:u}:v}),[A,_]=m.useState(""),[h,M]=m.useState(0),U=m.useRef(null),te=m.useMemo(()=>new Set(S.sections),[S.sections]),D=m.useMemo(()=>S.sections.reduce((v,L,N)=>(v[L]=N,v),{}),[S.sections]),j=m.useMemo(()=>a.map(v=>{let L=0;v.lenses.forEach(P=>{L+=Number(i(v.id,P).score||0)});const N=Number((L/v.lenses.length).toFixed(1));return{component:v,average:N,target:v.target,gap:Number(Math.max(0,v.target-N).toFixed(1))}}),[a,i]),q=m.useMemo(()=>[...j].sort((v,L)=>L.average-v.average).slice(0,5),[j]),J=v=>{d(L=>({...L,...v}))},I=v=>{d(L=>{const N=te.has(v)?L.sections.filter(P=>P!==v):[...L.sections,v];return{...L,sections:N}})},ee=(v,L)=>{d(N=>({...N,sectionNarratives:{...N.sectionNarratives,[v]:L}}))},H=()=>{const v=new Set(S.bragSlides.map(P=>P.componentId)),L=a.find(P=>!v.has(P.id))||a[0],N={id:ze(),componentId:(L==null?void 0:L.id)||"",rows:[]};d(P=>({...P,bragSlides:[...P.bragSlides,N]}))},T=v=>{d(L=>({...L,bragSlides:L.bragSlides.filter(N=>N.id!==v)}))},W=(v,L)=>{d(N=>({...N,bragSlides:N.bragSlides.map(P=>P.id===v?{...P,componentId:L}:P)}))},ce=v=>{const L={id:ze(),preventingGreenHtml:"",returnToGreenHtml:"",ownerId:l||"",targetDate:""};d(N=>({...N,bragSlides:N.bragSlides.map(P=>P.id===v?{...P,rows:[...P.rows,L]}:P)}))},ge=(v,L,N)=>{d(P=>({...P,bragSlides:P.bragSlides.map(V=>V.id===v?{...V,rows:V.rows.map(ve=>ve.id===L?{...ve,...N}:ve)}:V)}))},De=(v,L)=>{d(N=>({...N,bragSlides:N.bragSlides.map(P=>P.id===v?{...P,rows:P.rows.filter(V=>V.id!==L)}:P)}))};function R(v,L){d(N=>({...N,[v]:[...N[v],L]}))}function Z(v,L,N){d(P=>({...P,[v]:P[v].map(V=>V.id===L?{...V,...N}:V)}))}function re(v,L){d(N=>({...N,[v]:N[v].filter(P=>P.id!==L)}))}const Re=async v=>{var P;const L=(P=v.target.files)==null?void 0:P[0];if(!L)return;const N=await new Promise((V,ve)=>{const Ae=new FileReader;Ae.onload=()=>V(String(Ae.result||"")),Ae.onerror=()=>ve(new Error("Unable to read selected logo file.")),Ae.readAsDataURL(L)});_(L.name),d(V=>({...V,logoDataUrl:N})),M(V=>V+1)},Le=()=>{en(Mt,S),qn("highlight-builder-layout.json",JSON.stringify(S,null,2),"application/json"),c==null||c()},He=async v=>{var N;const L=(N=v.target.files)==null?void 0:N[0];if(L)try{const P=await L.text(),V=JSON.parse(P);d({...cn,...V,overallStatus:V.overallStatus==="Green"||V.overallStatus==="Amber"||V.overallStatus==="Red"?V.overallStatus:cn.overallStatus,orientation:V.orientation==="portrait"||V.orientation==="landscape"?V.orientation:cn.orientation,bragSlides:Ia(V.bragSlides),sections:Array.isArray(V.sections)&&V.sections.length>0?V.sections:cn.sections,sectionNarratives:V.sectionNarratives||{},metricRows:Aa(V.metricRows),riskRows:_a(V.riskRows),stakeholderPositivePct:Number(V.stakeholderPositivePct)||0,stakeholderNeutralPct:Number(V.stakeholderNeutralPct)||0,stakeholderNegativePct:Number(V.stakeholderNegativePct)||0,interventionRows:Oa(V.interventionRows),decisionRows:Ra(V.decisionRows),assessmentRows:Pa(V.assessmentRows)})}catch{window.alert("Unable to load the selected layout JSON. Please verify the file contents.")}finally{v.target.value=""}};m.useEffect(()=>{en(Mt,S)},[S]);const pe=n.history.length>1?n.history[n.history.length-2]:null,tn=m.useMemo(()=>j.slice(0,10).map(v=>{const L=pe?Number((v.component.lenses.reduce((ve,Ae)=>{var he,Be;return ve+Number(((Be=(he=pe.data[v.component.id])==null?void 0:he[Ae])==null?void 0:Be.score)||0)},0)/v.component.lenses.length).toFixed(1)):v.average,N=v.average>L?"▲":v.average<L?"▼":"►",P=v.average>=v.target?"Green":v.average>=Math.max(1,v.target-1)?"Amber":"Red",V=v.average>=v.target?"Consistently understood by most stakeholder groups.":v.average>=Math.max(1,v.target-1)?"Progressing, with reinforcement still required.":"Below target and requiring focused intervention.";return{area:v.component.label,status:P,trend:N,commentary:V}}),[j,pe]),$e=m.useMemo(()=>t.nextSteps.slice(0,7).map(v=>v.message),[t.nextSteps]),Ke=v=>{if((S.sectionNarratives[v]||"").trim())return S.sectionNarratives[v].trim();switch(v){case"executive-summary":return`${S.overallStatus}. The programme continues to progress across ${a.length} components and ${s.length} lenses, with overall delivery at ${t.overallPct}%.`;case"change-dashboard":return"Dashboard status is derived from current component averages versus targets, with trend based on the most recent finalised snapshot.";case"adoption-metrics":return"Metrics below provide an operational view of progress against key adoption measures and targets.";case"what-went-well":return"List key achievements for the reporting period, including sponsorship visibility and areas of strengthened adoption.";case"risks-issues":return"The following risks/issues require active monitoring and mitigation.";case"stakeholder-insights":return"Summarise positive feedback themes, concerns, and sentiment from stakeholder listening channels.";case"interventions-delivered":return"Capture interventions completed this month and assess their observed effectiveness.";case"upcoming-priorities":return"Set out the next 30-day focus to maintain delivery momentum and close adoption gaps.";case"decisions-required":return"Record approvals and decisions needed to unblock delivery and sustain adoption progress.";case"change-lead-assessment":return"Provide confidence ratings and the overall professional assessment from the Change Lead.";default:return""}},sn=v=>{const L=Ke(v);return v==="change-dashboard"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:L}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Trend"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Commentary"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:tn.map(N=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:N.area}),e.jsx("td",{className:"px-3 py-2 text-sm",children:e.jsx(Us,{status:N.status})}),e.jsx("td",{className:"px-3 py-2 text-sm",children:N.trend}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:N.commentary})]},N.area))})]})})]}):v==="adoption-metrics"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:L}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Measure"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[S.metricRows.map(N=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.measure,onChange:P=>Z("metricRows",N.id,{measure:P.target.value}),placeholder:"e.g. Active Users",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.target,onChange:P=>Z("metricRows",N.id,{target:P.target.value}),placeholder:"e.g. 80%",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.current,onChange:P=>Z("metricRows",N.id,{current:P.target.value}),placeholder:"e.g. 62%",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:N.status,onChange:P=>Z("metricRows",N.id,{status:P.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"Green",children:"Green"}),e.jsx("option",{value:"Amber",children:"Amber"}),e.jsx("option",{value:"Red",children:"Red"})]})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>re("metricRows",N.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},N.id)),S.metricRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No metrics added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>R("metricRows",{id:ze(),measure:"",target:"",current:"",status:"Amber"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Metric"})]}):v==="risks-issues"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:L}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Risk / Issue"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Impact"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Mitigation"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[S.riskRows.map(N=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.risk,onChange:P=>Z("riskRows",N.id,{risk:P.target.value}),placeholder:"e.g. Inconsistent adoption in Vision",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.impact,onChange:P=>Z("riskRows",N.id,{impact:P.target.value}),placeholder:"e.g. Benefits may not be realised",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.mitigation,onChange:P=>Z("riskRows",N.id,{mitigation:P.target.value}),placeholder:"e.g. Targeted coaching sessions",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.status,onChange:P=>Z("riskRows",N.id,{status:P.target.value}),placeholder:"Open",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>re("riskRows",N.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},N.id)),S.riskRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No key risks added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>R("riskRows",{id:ze(),risk:"",impact:"",mitigation:"",status:"Open"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Risk / Issue"})]}):v==="upcoming-priorities"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:L}),e.jsx("ol",{className:"mt-3 list-decimal pl-5 space-y-1 text-sm text-slate-700",children:$e.length?$e.map((N,P)=>e.jsx("li",{children:N},`${N}-${P}`)):e.jsx("li",{children:"No immediate priorities detected from current data."})})]}):v==="what-went-well"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:L}),e.jsx("ul",{className:"mt-3 space-y-1.5 text-sm text-slate-700",children:q.slice(0,5).map(N=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(tr,{}),N.component.label," is tracking at ",N.average," against target ",N.target,"."]},N.component.id))})]}):v==="stakeholder-insights"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:L}),e.jsxs("div",{className:"mt-3 grid gap-2 md:grid-cols-3 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 rounded border border-green-200 bg-green-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-green-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Positive:",e.jsx("input",{type:"number",min:0,max:100,value:S.stakeholderPositivePct,onChange:N=>J({stakeholderPositivePct:Number(N.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-amber-200 bg-amber-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Neutral:",e.jsx("input",{type:"number",min:0,max:100,value:S.stakeholderNeutralPct,onChange:N=>J({stakeholderNeutralPct:Number(N.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-red-200 bg-red-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-red-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Negative:",e.jsx("input",{type:"number",min:0,max:100,value:S.stakeholderNegativePct,onChange:N=>J({stakeholderNegativePct:Number(N.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]})]})]}):v==="interventions-delivered"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:L}),e.jsxs("ul",{className:"mt-3 space-y-2 text-sm text-slate-700",children:[S.interventionRows.map(N=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("input",{value:N.text,onChange:P=>Z("interventionRows",N.id,{text:P.target.value}),placeholder:"e.g. Sponsor briefing sessions",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>re("interventionRows",N.id),className:"shrink-0 rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},N.id)),S.interventionRows.length?null:e.jsx("li",{className:"text-slate-500",children:"No interventions added yet."})]}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>R("interventionRows",{id:ze(),text:""}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Intervention"})]}):v==="decisions-required"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:L}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Decision"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Required By"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[S.decisionRows.map(N=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.decision,onChange:P=>Z("decisionRows",N.id,{decision:P.target.value}),placeholder:"e.g. Approval for additional adoption support resource",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.owner,onChange:P=>Z("decisionRows",N.id,{owner:P.target.value}),placeholder:"e.g. Programme Board",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.requiredBy,onChange:P=>Z("decisionRows",N.id,{requiredBy:P.target.value}),placeholder:"TBC",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>re("decisionRows",N.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},N.id)),S.decisionRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:4,children:"No decisions added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>R("decisionRows",{id:ze(),decision:"",owner:"",requiredBy:""}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Decision"})]}):v==="change-lead-assessment"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:L}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Confidence"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[S.assessmentRows.map(N=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.area,onChange:P=>Z("assessmentRows",N.id,{area:P.target.value}),placeholder:"e.g. Stakeholder Engagement",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:N.confidence,onChange:P=>Z("assessmentRows",N.id,{confidence:P.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"High",children:"High"}),e.jsx("option",{value:"Medium",children:"Medium"}),e.jsx("option",{value:"Low",children:"Low"})]})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>re("assessmentRows",N.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},N.id)),S.assessmentRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:3,children:"No assessment areas added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>R("assessmentRows",{id:ze(),area:"",confidence:"Medium"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Assessment Area"})]}):e.jsx(e.Fragment,{children:e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:L})})},Ne=()=>{if(!U.current){window.alert("Preview content is not ready to print yet.");return}const v=window.open("","_blank");if(!v)return;v.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8" /><title>Highlight Report</title></head><body></body></html>'),document.querySelectorAll('link[rel="stylesheet"], style').forEach(P=>{v.document.head.appendChild(P.cloneNode(!0))});const L=v.document.createElement("style");L.textContent=`
      @page { margin: 8mm; size: A4 ${S.orientation}; }
      html, body { margin: 0 !important; padding: 0 !important; background: #ffffff !important; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .printable-report {
        width: 100%;
        max-width: none;
        margin: 0;
        padding: 4mm;
        border: none !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }
      .printable-report [data-print-hide="true"] { display: none !important; }
      .printable-report article { break-inside: avoid; page-break-inside: avoid; }
      .printable-report [data-brag-slide="true"] { break-after: page; page-break-after: always; }
      .printable-report table { width: 100%; }
    `,v.document.head.appendChild(L);const N=U.current.cloneNode(!0);N.className="printable-report",N.querySelectorAll('[data-print-exclude="true"]').forEach(P=>P.remove()),v.document.body.appendChild(N),v.document.close(),setTimeout(()=>{v.focus(),v.print(),v.close()},250)};return e.jsxs("section",{className:"space-y-6",children:[f?e.jsx("div",{className:"rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm font-semibold text-red-900",children:"Dark mode not compatible for Highlight Report due to print/save functionality."}):null,e.jsx("div",{className:"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",children:e.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Highlight Builder Tool"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:"Create a polished highlight pack"}),e.jsx(mn,{onClick:x.reopen})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:Le,className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"Save JSON Layout"}),e.jsxs("label",{className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 cursor-pointer",children:["Load JSON Layout",e.jsx("input",{type:"file",accept:"application/json",className:"hidden",onChange:He},h)]}),e.jsxs("div",{className:"flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-semibold",role:"group","aria-label":"PDF export orientation",children:[e.jsx("button",{type:"button",onClick:()=>J({orientation:"portrait"}),"aria-pressed":S.orientation==="portrait",className:`px-3 py-2 transition-colors ${S.orientation==="portrait"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Portrait"}),e.jsx("button",{type:"button",onClick:()=>J({orientation:"landscape"}),"aria-pressed":S.orientation==="landscape",className:`px-3 py-2 transition-colors border-l border-slate-300 ${S.orientation==="landscape"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Landscape"})]}),e.jsxs("button",{type:"button",onClick:Ne,className:"rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm",style:{backgroundColor:S.themeColor},children:["Print / Save PDF (",S.orientation==="landscape"?"Landscape":"Portrait",")"]})]})]})}),e.jsxs("div",{className:"grid gap-6 xl:grid-cols-[340px,1fr]",children:[e.jsx("aside",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Report title"}),e.jsx("input",{value:S.title,onChange:v=>J({title:v.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Programme"}),e.jsx("input",{value:S.programmeName,onChange:v=>J({programmeName:v.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Reporting period"}),e.jsx("input",{value:S.reportingPeriod,onChange:v=>J({reportingPeriod:v.target.value}),placeholder:"July 2026",className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Change Lead"}),e.jsx("input",{value:S.changeLeadName,onChange:v=>J({changeLeadName:v.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"SRO"}),e.jsx("input",{value:S.sroName,onChange:v=>J({sroName:v.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Overall Change Status"}),e.jsxs("select",{value:S.overallStatus,onChange:v=>J({overallStatus:v.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500",children:[e.jsx("option",{value:"Green",children:"Green"}),e.jsx("option",{value:"Amber",children:"Amber"}),e.jsx("option",{value:"Red",children:"Red"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Theme colour"}),e.jsx("input",{type:"color",value:S.themeColor,onChange:v=>J({themeColor:v.target.value}),className:"h-10 w-full rounded-md border border-slate-300"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Logo in top-left"}),e.jsxs("label",{className:"flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-3 py-4 text-sm text-slate-700 hover:bg-slate-100",children:[e.jsx("span",{children:A||"Upload logo"}),e.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:Re})]}),S.logoDataUrl?e.jsx("div",{className:"mt-3 rounded-md border border-slate-200 bg-slate-50 p-2",children:e.jsx("img",{alt:"Preview logo",src:S.logoDataUrl,className:"max-h-16 w-auto"})}):null]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-1",children:"Programme/Project Readiness Slides"}),e.jsx("p",{className:"text-xs text-slate-500 mb-3",children:"These print first, one per page. Add a slide per component you want to report on."}),e.jsxs("div",{className:"space-y-2",children:[S.bragSlides.map((v,L)=>e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-500",children:["Page ",L+1]}),e.jsx("button",{type:"button",onClick:()=>T(v.id),className:"text-xs font-semibold text-red-600 hover:text-red-800",children:"Remove"})]}),e.jsx("select",{value:v.componentId,onChange:N=>W(v.id,N.target.value),className:"mt-1 w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm outline-none focus:border-blue-500",children:a.map(N=>e.jsx("option",{value:N.id,children:N.label},N.id))}),e.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:[v.rows.length," row",v.rows.length===1?"":"s"]})]},v.id)),S.bragSlides.length?null:e.jsx("p",{className:"text-sm text-slate-500",children:"No readiness slides yet."})]}),e.jsx("button",{type:"button",onClick:H,disabled:!a.length,className:"mt-3 w-full rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 disabled:opacity-50",children:"+ Add Readiness Slide"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-3",children:"Report sections"}),e.jsx("div",{className:"space-y-2",children:Gs.map(v=>{const L=te.has(v.id),N=v.id,P=D[v.id],V=typeof P=="number"?Ms(P,v.label):v.label;return e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("label",{className:"flex items-center gap-3 text-sm text-slate-700",children:[e.jsx("input",{type:"checkbox",checked:L,onChange:()=>I(v.id)}),e.jsx("span",{children:V})]}),L?e.jsxs("div",{className:"mt-3 space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-1",children:"Section narrative"}),e.jsx("textarea",{value:S.sectionNarratives[N]||"",onChange:ve=>ee(N,ve.target.value),placeholder:Ke(N),rows:4,className:"w-full rounded-md border border-slate-300 px-2 py-2 text-xs outline-none focus:border-blue-500"})]}),e.jsx("p",{className:"text-xs text-slate-500",children:"All adoption components are automatically included in this section."})]}):null]},v.id)})})]})]})}),e.jsxs("div",{ref:U,className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsxs("div",{className:"mb-4 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3",children:[S.logoDataUrl?e.jsx("img",{alt:"Logo preview",src:S.logoDataUrl,className:"max-h-12 w-auto"}):e.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-md bg-slate-200 text-sm font-bold text-slate-700",children:"NHS"}),e.jsxs("div",{children:[e.jsx("div",{"data-print-hide":"true",className:"text-xs font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Builder Preview"}),e.jsx("div",{className:"text-lg font-bold text-slate-900",children:S.title}),e.jsxs("div",{className:"text-sm text-slate-600 mt-1",children:[S.programmeName||o||"Unnamed Programme"," ·"," ",S.reportingPeriod||"Reporting period not set"]}),e.jsxs("div",{className:"mt-1 flex items-center gap-2 text-sm text-slate-600",children:["Overall Status: ",e.jsx(Us,{status:S.overallStatus})]}),e.jsx("div",{className:"text-sm text-slate-600 mt-0.5",children:r||"Unconfigured Trust"})]})]}),e.jsxs("div",{className:"grid gap-3",children:[S.bragSlides.map(v=>{const L=j.find(P=>P.component.id===v.componentId),N=L?ma(L.average,L.target):null;return e.jsxs("article",{"data-brag-slide":"true",className:"rounded-xl border border-slate-200 p-4",style:{borderLeft:`4px solid ${S.themeColor}`},children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Programme/Project Readiness"}),e.jsx("h3",{className:"text-lg font-bold text-slate-900",children:(L==null?void 0:L.component.label)||"Select a component"})]}),L&&N?e.jsxs("div",{className:"text-right",children:[e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold ${ga[N]}`,children:N}),e.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:[L.average.toFixed(1)," of ",L.target," target"]})]}):null]}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What is preventing you from being green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What do you/others need to do to return to green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target date"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[v.rows.map(P=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(Fs,{value:P.preventingGreenHtml,onChange:V=>ge(v.id,P.id,{preventingGreenHtml:V}),placeholder:"What's blocking green?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(Fs,{value:P.returnToGreenHtml,onChange:V=>ge(v.id,P.id,{returnToGreenHtml:V}),placeholder:"What needs to happen?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:P.ownerId,onChange:V=>ge(v.id,P.id,{ownerId:V.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"",children:"Unassigned"}),b.map(V=>e.jsxs("option",{value:V.id,children:[V.name||"Unnamed",V.role?` - ${V.role}`:""]},V.id))]})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{type:"date",value:P.targetDate,onChange:V=>ge(v.id,P.id,{targetDate:V.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>De(v.id,P.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},P.id)),v.rows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No rows yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>ce(v.id),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Row"})]},v.id)}),S.sections.map(v=>{var L;return e.jsxs("article",{className:"rounded-xl border border-slate-200 p-4",style:{borderLeft:`4px solid ${S.themeColor}`},children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700",children:Ms(D[v]||0,((L=Gs.find(N=>N.id===v))==null?void 0:L.label)||v)}),sn(v)]},v)})]})]})]}),e.jsx(un,{open:x.isOpen,onClose:x.close,title:"Highlight Builder Tool",body:e.jsx("p",{children:"Build a polished, presentation-ready highlight pack summarising progress across your programme - pick a layout, edit the content, and save or export it when you're happy."})})]})}function ir(n){const t={};return n.sections.forEach(s=>{s.items.forEach(a=>{t[a.id]="mine"})}),t}function Vs({active:n,onClick:t,children:s,darkMode:a}){return e.jsx("button",{type:"button",onClick:t,className:`rounded-md border px-2 py-1 text-left text-xs transition-colors ${Wt} ${n?"border-[#005eb8] bg-[#005eb8]/10 font-semibold text-[#005eb8]":a?"border-slate-600 bg-slate-900 text-slate-300 hover:bg-slate-800":"border-slate-300 bg-white text-slate-600 hover:bg-slate-50"}`,children:s})}function or({item:n,choice:t,onChoose:s,myLabel:a,theirLabel:i,darkMode:r}){return e.jsxs("div",{"data-testid":`import-conflict-row-${n.id}`,className:`grid grid-cols-1 gap-2 border-t py-3 first:border-t-0 md:grid-cols-[1fr_1fr_1fr] ${r?"border-slate-700":"border-slate-200"}`,children:[e.jsx("div",{className:`text-sm font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:n.label}),e.jsxs(Vs,{active:t==="mine",onClick:()=>s(n.id,"mine"),darkMode:r,children:[e.jsx("span",{className:`block text-[0.65rem] font-bold uppercase tracking-wide ${r?"text-slate-400":"text-slate-500"}`,children:a}),n.mineSummary]}),e.jsxs(Vs,{active:t==="theirs",onClick:()=>s(n.id,"theirs"),darkMode:r,children:[e.jsx("span",{className:`block text-[0.65rem] font-bold uppercase tracking-wide ${r?"text-slate-400":"text-slate-500"}`,children:i}),n.theirsSummary]})]})}function rr({report:n,myLabel:t,theirLabel:s,onResolve:a,onCancel:i,darkMode:r=!1}){const[o,u]=m.useState(()=>ir(n)),c=n.sections.reduce((l,x)=>l+x.items.length,0),f=l=>{u(x=>{const b={...x};return n.sections.forEach(S=>{S.items.forEach(d=>{b[d.id]=l})}),b})};return e.jsx("div",{"data-testid":"import-conflict-modal",className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4",onClick:l=>{l.target===l.currentTarget&&i()},children:e.jsxs("div",{onClick:l=>l.stopPropagation(),className:`flex w-full max-w-4xl max-h-[90vh] flex-col rounded-lg border shadow-xl ${r?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:`shrink-0 border-b p-6 ${r?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("h2",{className:`text-xl font-bold ${r?"text-slate-100":"text-slate-800"}`,children:"Resolve import conflicts"}),e.jsxs("p",{className:`mt-1 text-sm ${r?"text-slate-300":"text-slate-600"}`,children:["Comparing ",e.jsx("span",{className:"font-semibold",children:t})," (currently loaded) against"," ",e.jsx("span",{className:"font-semibold",children:s})," (the imported file)."]}),e.jsxs("p",{className:`mt-1 text-xs ${r?"text-slate-400":"text-slate-500"}`,children:[c," item",c===1?"":"s"," need a decision",n.autoMergeSummary.length?` · also merging automatically: ${n.autoMergeSummary.join(", ")}`:""]}),e.jsxs("div",{className:"mt-3 flex gap-2",children:[e.jsx("button",{type:"button",onClick:()=>f("mine"),className:`${Oe} h-8 px-3 py-0 text-xs`,children:"Use all mine"}),e.jsx("button",{type:"button",onClick:()=>f("theirs"),className:`${Oe} h-8 px-3 py-0 text-xs`,children:"Use all theirs"})]})]}),e.jsx("div",{className:"flex-1 space-y-6 overflow-y-auto p-6",children:n.sections.map(l=>e.jsxs("div",{children:[e.jsx("h3",{className:`mb-1 text-sm font-bold uppercase tracking-wide ${r?"text-slate-300":"text-slate-500"}`,children:l.title}),e.jsx("div",{className:`rounded-md border px-3 ${r?"border-slate-700":"border-slate-200"}`,children:l.items.map(x=>e.jsx(or,{item:x,choice:o[x.id]||"mine",onChoose:(b,S)=>u(d=>({...d,[b]:S})),myLabel:t,theirLabel:s,darkMode:r},x.id))})]},l.id))}),e.jsxs("div",{className:`flex shrink-0 justify-end gap-3 border-t p-4 ${r?"border-slate-700":"border-slate-200"}`,children:[e.jsx("button",{type:"button","data-testid":"import-conflict-cancel",onClick:i,className:Oe,children:"Cancel Import"}),e.jsx("button",{type:"button","data-testid":"import-conflict-apply",onClick:()=>a(o),className:Rn,children:"Apply and Import"})]})]})})}function Hs(){return e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function lr(n){return n in Jt}function cr({lensName:n,onClose:t,darkMode:s=!1}){if(!n||!lr(n))return null;const a=Jt[n];return e.jsx("div",{id:"lens-info-modal",className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:e.jsxs("div",{className:`${s?"bg-slate-800 border-slate-700":"bg-white"} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border`,children:[e.jsxs("div",{className:`${s?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} sticky top-0 border-b p-6 flex items-center justify-between`,children:[e.jsx("h2",{className:`text-2xl font-bold ${s?"text-slate-100":"text-slate-800"}`,children:n}),e.jsx("button",{onClick:t,className:`${s?"text-slate-300 hover:text-slate-100":"text-slate-500 hover:text-slate-700"}`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsxs("div",{className:`p-6 space-y-4 ${s?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(Hs,{}),"Outcome"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.outcome})]}),e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(Hs,{}),"What Good Looks Like"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.whatGoodLooksLike})]})]})]})})}function dr({darkMode:n=!1,onNavigateToProjectDetails:t,onNavigateToGuide:s,onNavigateToDashboard:a}){const i=da(),[r,o]=m.useState(0);return e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${n?"text-slate-100":"text-slate-800"}`,children:"Introduction"}),e.jsx("p",{className:`mt-2 text-sm ${n?"text-slate-300":"text-slate-600"}`,children:"The five introduction steps are shown below in collapsible sections."})]}),i.map((u,c)=>e.jsxs("section",{className:`${n?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} overflow-hidden rounded-lg border shadow-sm`,children:[e.jsxs("button",{type:"button",onClick:()=>o(c),"aria-expanded":r===c,className:`flex w-full items-center justify-between gap-3 p-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-inset ${n?"hover:bg-slate-700":"hover:bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${n?"text-blue-300":"text-blue-700"}`,children:["Step ",c+1," of ",i.length]}),e.jsx("h3",{className:`mt-1 text-lg font-semibold ${n?"text-slate-100":"text-slate-900"}`,children:u.title})]}),e.jsx("span",{className:`shrink-0 text-lg font-semibold ${n?"text-slate-300":"text-slate-500"}`,"aria-hidden":"true",children:r===c?"-":"+"})]}),r===c?e.jsxs("div",{className:"px-5 pb-5",children:[u.body,c===i.length-1?e.jsxs("div",{className:"mt-5 flex flex-wrap gap-2",children:[t?e.jsx("button",{type:"button",onClick:t,className:"rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"Set up your Project"}):null,s?e.jsx("button",{type:"button",onClick:s,className:"rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"See the 6 Key Questions"}):null,a?e.jsx("button",{type:"button",onClick:a,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Go to dashboard"}):null]}):null]}):null]},u.title))]})}const Ws={1:"Pre go-live planning and early mobilisation.",2:"Go-live readiness and immediate launch support.",3:"Early adoption reinforcement and consistency.",4:"Embedding new ways of working across teams.",5:"Sustained adoption and benefits realisation at scale."},ur={1:"Low confidence",2:"Some confidence",3:"Moderate confidence",4:"High confidence",5:"Very high confidence"},mr={E:"Not started embedding",D:"Early adoption in practice",C:"Partly embedded in practice",B:"Mostly embedded in practice",A:"Well embedded in practice"};function gr(n){return n>=4?"high":n===3?"average":"below"}function pr(n){return n==="A"||n==="B"?"high":n==="C"?"average":"below"}function hr(n,t){const s=pr(n),a=gr(t),i=s==="high"&&a==="high",r=s==="below"&&a==="below",o=s==="high"&&a!=="below"||a==="high"&&s!=="below";return i?"Blue":r?"Red":o?"Green":"Amber"}const _t=4;function fr({orgProfile:n,onProfileUpdate:t,userSettings:s,onUserSettingsUpdate:a,objectives:i=[],darkMode:r=!1}){const[o,u]=m.useState(n),[c,f]=m.useState(s),[l,x]=m.useState(0),[b,S]=m.useState(null),[d,A]=m.useState(!1),_=m.useRef(null),h=dn("profile");m.useEffect(()=>{u(n)},[n]),m.useEffect(()=>{f(s)},[s]);const M=m.useCallback(j=>{const q={...c,...j};f(q),a(q)},[c,a]),U=async j=>{var I;const q=(I=j.target.files)==null?void 0:I[0];if(!q)return;const J=await new Promise((ee,H)=>{const T=new FileReader;T.onload=()=>ee(String(T.result||"")),T.onerror=()=>H(new Error("Unable to read selected profile image.")),T.readAsDataURL(q)});M({profileImageDataUrl:J}),x(ee=>ee+1)},te=()=>{M({profileImageDataUrl:void 0})},D=m.useCallback((j,q,J)=>{const I=o.cst.phaseCapability[j]||{competence:"C",confidence:3},ee={...o,cst:{...o.cst,phaseCapability:{...o.cst.phaseCapability,[j]:{competence:I.competence,confidence:I.confidence,assessedAt:new Date().toISOString(),reason:"manual",[q]:J}}}};u(ee),t(ee)},[o,t]);return e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${r?"text-slate-100":"text-slate-800"}`,children:"Profile"}),e.jsx(mn,{onClick:h.reopen,darkMode:r})]}),e.jsx("p",{className:`text-sm ${r?"text-slate-300":"text-slate-600"}`,children:"Your identity, progress towards your objectives, and confidence/capability self-assessment."}),e.jsx(un,{open:h.isOpen,onClose:h.close,title:"Profile",darkMode:r,body:e.jsx("p",{children:"Set your name, preferences and picture, see how many objectives are complete, and record your team's confidence and delivery-readiness capability at each phase."})}),i.length>0&&e.jsxs("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-3`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:"Objectives"}),e.jsxs("p",{className:`mt-1 text-sm ${r?"text-slate-300":"text-slate-600"}`,children:[i.filter(j=>j.completed).length,"/",i.length," complete - based on phase readiness, ownership, cadence and team participation."]})]}),e.jsx("div",{className:"space-y-2",children:(d?i:i.slice(0,_t)).map(j=>e.jsxs("div",{className:`rounded-lg border p-3 ${j.completed?"border-green-200 bg-green-50":r?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:j.label}),e.jsx("span",{className:"text-xs font-bold shrink-0",children:j.completed?"Done":"Not yet"})]}),e.jsx("p",{className:`mt-1 text-xs ${r?"text-slate-300":"text-slate-600"}`,children:j.description})]},j.id))}),i.length>_t&&e.jsx("button",{type:"button",onClick:()=>A(j=>!j),className:`text-sm font-semibold underline ${r?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:d?"Show fewer":`Show ${i.length-_t} more`})]}),e.jsxs("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-5`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:"Your Profile"}),e.jsx("p",{className:`mt-1 text-sm ${r?"text-slate-300":"text-slate-600"}`,children:"These details personalise your experience and reports."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-name",className:`block text-sm font-medium mb-1 ${r?"text-slate-200":"text-slate-700"}`,children:"Your Name"}),e.jsx("input",{id:"user-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${r?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:c.name,onChange:j=>M({name:j.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-preferences",className:`block text-sm font-medium mb-1 ${r?"text-slate-200":"text-slate-700"}`,children:"Preferences"}),e.jsx("textarea",{id:"user-preferences",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 h-24 ${r?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:c.preferences,onChange:j=>M({preferences:j.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-sm font-medium mb-2 ${r?"text-slate-200":"text-slate-700"}`,children:"Profile Picture"}),e.jsxs("div",{className:"flex items-start gap-4",children:[c.profileImageDataUrl?e.jsx("img",{src:c.profileImageDataUrl,alt:"Profile",className:"h-20 w-20 rounded-md border border-slate-300 object-cover"}):e.jsx("div",{className:"h-20 w-20 rounded-md border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center",children:e.jsx("span",{className:"text-xs text-slate-500",children:"No image"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{type:"button",onClick:()=>{var j;return(j=_.current)==null?void 0:j.click()},className:`rounded-md px-3 py-2 text-sm font-medium transition-colors ${r?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:c.profileImageDataUrl?"Change Picture":"Upload Picture"}),c.profileImageDataUrl?e.jsx("button",{type:"button",onClick:te,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${r?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"}`,children:"Remove"}):null,e.jsx("input",{ref:_,type:"file",accept:"image/*",className:"hidden",onChange:U},l)]})]})]})]}),e.jsxs("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:"Confidence and Capability by Phase"}),e.jsx("p",{className:`mt-1 text-sm ${r?"text-slate-300":"text-slate-600"}`,children:"Capture your starting position, then refresh when readiness phase changes or after major milestones."})]}),e.jsxs("div",{className:"rounded-md border border-blue-200 bg-blue-50 p-3 text-xs text-blue-900",children:[e.jsx("p",{className:"font-semibold",children:"How this self-assessment works"}),e.jsx("p",{className:"mt-1",children:"Confidence is how sure your team feels. Delivery readiness is how embedded the new way of working is in practice."}),e.jsx("p",{className:"mt-1",children:"Cards use BRAG backgrounds: Blue = both high, Green = one high and the other at least average, Amber = neither high, Red = both below average."})]}),e.jsx("div",{className:"space-y-3",children:aa.map(j=>{const q=o.cst.phaseCapability[j]||{competence:"C",confidence:3},J=hr(q.competence,q.confidence),I=J==="Blue"?"border-sky-300 bg-sky-50":J==="Green"?"border-emerald-300 bg-emerald-50":J==="Red"?"border-red-300 bg-red-50":"border-amber-300 bg-amber-50",ee=J==="Blue"?"text-sky-800 bg-sky-100":J==="Green"?"text-emerald-800 bg-emerald-100":J==="Red"?"text-red-800 bg-red-100":"text-amber-800 bg-amber-100";return e.jsxs("div",{className:`${r?"border-slate-700 bg-slate-800":I} rounded-md border p-3`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{className:"relative flex items-center gap-2",children:[e.jsxs("span",{className:`font-semibold ${r?"text-slate-100":"text-slate-700"}`,children:["Phase ",j]}),e.jsx("button",{type:"button",onMouseEnter:()=>S(j),onMouseLeave:()=>S(H=>H===j?null:H),onFocus:()=>S(j),onBlur:()=>S(H=>H===j?null:H),onClick:()=>S(H=>H===j?null:j),className:"h-5 w-5 rounded-full border border-slate-300 text-xs font-semibold text-slate-600","aria-expanded":b===j,"aria-controls":`phase-help-${j}`,"aria-label":`Phase ${j} guidance`,children:"i"}),b===j?e.jsx("div",{id:`phase-help-${j}`,role:"tooltip",className:"absolute left-0 top-7 z-10 w-72 rounded-md border border-slate-200 bg-slate-900 px-3 py-2 text-xs text-white shadow-xl",children:Ws[j]}):null]}),e.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${r?"bg-slate-700 text-slate-100":ee}`,children:J})]}),e.jsx("p",{className:`mt-1 text-xs ${r?"text-slate-300":"text-slate-600"}`,children:Ws[j]}),e.jsxs("div",{className:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm",children:[e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${r?"text-slate-300":"text-slate-600"}`,children:"Delivery readiness"}),e.jsx("select",{value:q.competence,onChange:H=>D(j,"competence",H.target.value),className:`w-full rounded-md border px-2 py-2 pr-10 ${r?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:rt.map(H=>e.jsxs("option",{value:H,children:[mr[H]," (",H,")"]},`${j}-competence-${H}`))})]}),e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${r?"text-slate-300":"text-slate-600"}`,children:"Confidence"}),e.jsx("select",{value:q.confidence,onChange:H=>D(j,"confidence",Number(H.target.value)),className:`w-full rounded-md border px-2 py-2 pr-10 ${r?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:lt.map(H=>e.jsxs("option",{value:H,children:[ur[H]," (",H,")"]},`${j}-confidence-${H}`))})]})]})]},`phase-capability-${j}`)})})]})]})}const br=[{name:"NHS Blue",color:"#005eb8"},{name:"Navy",color:"#003366"},{name:"Teal",color:"#009b8a"},{name:"Purple",color:"#6c28d9"},{name:"Green",color:"#059669"},{name:"Red",color:"#dc2626"}];function xr({userSettings:n,onUserSettingsUpdate:t,onLoadExampleData:s,onResetData:a,darkMode:i=!1}){const[r,o]=m.useState(n),u=dn("settings");m.useEffect(()=>{o(n)},[n]);const c=m.useCallback(l=>{const x={...r,...l};o(x),t(x)},[r,t]),f=l=>{c({themeColor:l})};return e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${i?"text-slate-100":"text-slate-800"}`,children:"Settings"}),e.jsx(mn,{onClick:u.reopen,darkMode:i})]}),e.jsx("p",{className:`text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Use this page to manage app appearance, guidance preferences, and data/support options."}),e.jsx(un,{open:u.isOpen,onClose:u.close,title:"Settings",darkMode:i,body:e.jsx("p",{children:"Manage app-wide appearance (theme, dark mode, guided-workflow and guidance-link preferences) and data/support tools like example data, reset, and bug reporting. For your personal profile and engagement progress, see the Profile page."})}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Appearance"}),e.jsx("p",{className:`mt-1 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Choose the theme colour you want to use throughout the app."})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-1",children:[e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Dark mode"}),e.jsx("input",{type:"checkbox",checked:!!r.darkMode,onChange:l=>c({darkMode:l.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show guided workflow tips on each component"}),e.jsx("input",{type:"checkbox",checked:!r.hideGuidedWorkflow,onChange:l=>c({hideGuidedWorkflow:!l.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show additional guidance links (alongside core links)"}),e.jsx("input",{type:"checkbox",checked:r.showAdditionalGuidanceLinks!==!1,onChange:l=>c({showAdditionalGuidanceLinks:l.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show external links section (Project Setup, even after marked initiated)"}),e.jsx("input",{type:"checkbox",checked:r.showExternalLinksSection===!0,onChange:l=>c({showExternalLinksSection:l.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`text-sm ${i?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-medium",children:"Status colour profile"}),e.jsxs("select",{value:r.colorAccessibilityMode||"standard",onChange:l=>c({colorAccessibilityMode:l.target.value}),className:`w-full rounded-md border p-2 pr-10 ${i?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"standard",children:"Standard"}),e.jsx("option",{value:"color-blind-friendly",children:"Color-blind friendly"})]})]})]}),e.jsx("p",{className:`text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Color-blind friendly mode keeps BRAG labels in text and shifts status colors to higher-contrast alternatives."}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-theme-colour",className:`block text-sm font-medium mb-1 ${i?"text-slate-200":"text-slate-700"}`,children:"Theme Colour"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:br.map(l=>e.jsxs("button",{type:"button",onClick:()=>f(l.color),className:"flex items-center gap-2 rounded-md border-2 px-3 py-2 text-sm",style:{borderColor:r.themeColor===l.color?l.color:"#e2e8f0",backgroundColor:r.themeColor===l.color?`${l.color}22`:"transparent"},children:[e.jsx("span",{className:"h-4 w-4 rounded-sm border border-slate-300",style:{backgroundColor:l.color}}),e.jsx("span",{children:l.name})]},l.color))}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{id:"user-theme-colour",type:"color",className:"h-10 w-14 rounded border border-slate-300 p-1 cursor-pointer",value:r.themeColor,onChange:l=>c({themeColor:l.target.value})}),e.jsx("span",{className:`text-sm font-mono ${i?"text-slate-200":"text-slate-600"}`,children:r.themeColor})]})]})]})]}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Data and Support"}),e.jsx("p",{className:`mt-1 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Load sample data, reset local data, read FAQs, or report an issue."})]}),e.jsxs("div",{className:`${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("h4",{className:`text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Data Tools"}),e.jsxs("div",{className:"mt-3 flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>s("red"),className:"inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-800 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors",children:"Early Stage Example"}),e.jsx("button",{onClick:()=>s("amber"),className:"inline-flex items-center justify-center rounded-md bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800 border border-amber-200 shadow-[0_3px_0_#fde68a] hover:bg-amber-100 transition-colors",children:"Progressing Example"}),e.jsx("button",{onClick:()=>s("green"),className:"inline-flex items-center justify-center rounded-md bg-green-50 px-4 py-2 text-sm font-semibold text-green-800 border border-green-200 shadow-[0_3px_0_#bbf7d0] hover:bg-green-100 transition-colors",children:"Exemplar Example"})]}),e.jsx("div",{className:"mt-3 flex flex-wrap gap-3",children:e.jsx("button",{onClick:a,className:`inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors ${Wt}`,children:"Reset Data"})}),e.jsx("p",{className:`mt-2 text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Each Example Data button loads a full sample assessment at a different maturity stage, so you can explore the dashboards and workflows quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"How is my data stored?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Your settings and assessment state are stored locally in your browser using local storage."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"What does Example Data do?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Each button populates the tool with a full sample assessment at that maturity stage (Red: early stage, Amber: progressing, Green: near exemplar) so you can explore dashboards and workflows quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"Can I change the theme colour later?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Yes. Update the theme colour at any time in User Settings and it is applied immediately."})]}),e.jsxs("div",{className:`rounded-md border p-4 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("h4",{className:`mb-2 text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Submit a Bug"}),e.jsx("p",{className:`mb-3 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Found an issue? Send details directly via email."}),e.jsx("a",{href:"mailto:andrew.fraser22@kpmg.co.uk?subject=NHS%20Digital%20Adoption%20Tool%20Bug",className:`inline-flex rounded-md px-4 py-2 text-sm font-medium transition-colors ${i?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:"Report Bug"})]})]})]})}function Sr(n){return{id:`audit:${Date.now()}-${Math.random().toString(36).slice(2,8)}`,timestamp:new Date().toISOString(),actor:n.actor,eventType:n.eventType,entityType:n.entityType,entityId:n.entityId,summary:n.summary,trustName:n.trustName,projectName:n.projectName,componentId:n.componentId,lens:n.lens,reason:n.reason,before:n.before,after:n.after,source:n.source||"local",importedAt:n.importedAt}}const yr=1e4;function xt(n,t=yr){return n.length<=t?n:n.slice(n.length-t)}const qs="nhs-digital-adoption-store",vr=new Set(["pathway-1","pathway-2","pathway-3"]);function Da(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function Ge(n,t){if(!Da(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected object.`)}function Y(n,t){if(n!==void 0&&typeof n!="string")throw new Error(`Invalid adoption assessment payload at ${t}: expected string.`)}function $a(n,t){if(n!==void 0&&typeof n!="number")throw new Error(`Invalid adoption assessment payload at ${t}: expected number.`)}function es(n,t){if(n!==void 0&&!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`)}function Ta(n,t){Ge(n,t),Y(n.id,`${t}.id`),Y(n.text,`${t}.text`),Y(n.owner,`${t}.owner`),Y(n.timescale,`${t}.timescale`),Y(n.status,`${t}.status`),Y(n.notes,`${t}.notes`),Y(n.evidence,`${t}.evidence`)}function wr(n,t){Ge(n,t),$a(n.score,`${t}.score`),Y(n.justification,`${t}.justification`),Y(n.evidence,`${t}.evidence`),es(n.actions,`${t}.actions`),(n.actions||[]).forEach((s,a)=>{Ta(s,`${t}.actions[${a}]`)})}function La(n,t){Ge(n,t),Object.keys(n).forEach(s=>{const a=n[s];Ge(a,`${t}.${s}`),Object.keys(a).forEach(i=>{wr(a[i],`${t}.${s}.${i}`)})})}function Nr(n,t){Ge(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((i,r)=>{Ge(i,`${t}.${s}[${r}]`),Y(i.id,`${t}.${s}[${r}].id`),Y(i.text,`${t}.${s}[${r}].text`),Y(i.owner,`${t}.${s}[${r}].owner`),Y(i.timescale,`${t}.${s}[${r}].timescale`),Y(i.notes,`${t}.${s}[${r}].notes`),Y(i.evidence,`${t}.${s}[${r}].evidence`),es(i.linkedActions,`${t}.${s}[${r}].linkedActions`),(i.linkedActions||[]).forEach((o,u)=>{Ge(o,`${t}.${s}[${r}].linkedActions[${u}]`),Y(o.lens,`${t}.${s}[${r}].linkedActions[${u}].lens`),Y(o.actionId,`${t}.${s}[${r}].linkedActions[${u}].actionId`)})})})}function Cr(n,t){Ge(n,t),Object.keys(n).forEach(s=>{const a=n[s];Ge(a,`${t}.${s}`),["pathway-1","pathway-2","pathway-3"].forEach(i=>{const r=a[i];es(r,`${t}.${s}.${i}`),(r||[]).forEach((o,u)=>{if(typeof o!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}.${i}[${u}]: expected string.`)})})})}function Er(n,t){Ge(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((i,r)=>{if(typeof i!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}[${r}]: expected string.`)})})}function kr(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{Ge(s,`${t}[${a}]`),Y(s.id,`${t}[${a}].id`),Y(s.removedAt,`${t}[${a}].removedAt`),Y(s.reason,`${t}[${a}].reason`),Y(s.componentId,`${t}[${a}].componentId`),Y(s.lens,`${t}[${a}].lens`),Y(s.actionId,`${t}[${a}].actionId`),Y(s.actionText,`${t}[${a}].actionText`),Y(s.actionType,`${t}[${a}].actionType`)})}function jr(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{Ge(s,`${t}[${a}]`),Y(s.id,`${t}[${a}].id`),Y(s.timestamp,`${t}[${a}].timestamp`),Y(s.actor,`${t}[${a}].actor`),Y(s.eventType,`${t}[${a}].eventType`),Y(s.entityType,`${t}[${a}].entityType`),Y(s.entityId,`${t}[${a}].entityId`),Y(s.summary,`${t}[${a}].summary`),Y(s.trustName,`${t}[${a}].trustName`),Y(s.projectName,`${t}[${a}].projectName`),Y(s.componentId,`${t}[${a}].componentId`),Y(s.lens,`${t}[${a}].lens`),Y(s.reason,`${t}[${a}].reason`),Y(s.source,`${t}[${a}].source`),Y(s.importedAt,`${t}[${a}].importedAt`)})}function Ir(n,t){if(Ge(n,t),Y(n.trustName,`${t}.trustName`),Y(n.region,`${t}.region`),Y(n.trustType,`${t}.trustType`),Y(n.projectName,`${t}.projectName`),Y(n.leadName,`${t}.leadName`),Y(n.cstId,`${t}.cstId`),n.cst!==void 0){if(Ge(n.cst,`${t}.cst`),Y(n.cst.type,`${t}.cst.type`),Y(n.cst.pathway,`${t}.cst.pathway`),typeof n.cst.pathway=="string"&&!vr.has(n.cst.pathway))throw new Error(`Invalid adoption assessment payload at ${t}.cst.pathway: unexpected value "${n.cst.pathway}".`);if(Y(n.cst.goLiveDate,`${t}.cst.goLiveDate`),Y(n.cst.fullAdoptionDate,`${t}.cst.fullAdoptionDate`),Y(n.cst.benefitRealizationDate,`${t}.cst.benefitRealizationDate`),Y(n.cst.toolkitChoice,`${t}.cst.toolkitChoice`),typeof n.cst.toolkitChoice=="string"&&!Qa(n.cst.toolkitChoice))throw new Error(`Invalid adoption assessment payload at ${t}.cst.toolkitChoice: unexpected value "${n.cst.toolkitChoice}".`)}}function Ar(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{Ge(s,`${t}[${a}]`),Y(s.monthLabel,`${t}[${a}].monthLabel`),$a(s.overallPercentage,`${t}[${a}].overallPercentage`),s.data!==void 0&&La(s.data,`${t}[${a}].data`)})}function _r(n,t){Ge(n,t),Object.keys(n).forEach(s=>{if(typeof n[s]!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected string.`)})}function Or(n,t){Ge(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((i,r)=>{Ta(i,`${t}.${s}[${r}]`)})})}function dt(n){if(!Da(n))throw new Error("Invalid adoption assessment payload at root: expected object.");return Y(n.schemaVersion,"schemaVersion"),Y(n.exportedAt,"exportedAt"),n.orgProfile!==void 0&&Ir(n.orgProfile,"orgProfile"),n.currentDraft!==void 0&&La(n.currentDraft,"currentDraft"),n.objectives!==void 0&&Nr(n.objectives,"objectives"),n.auditLog!==void 0&&jr(n.auditLog,"auditLog"),n.suppressedAutoActions!==void 0&&Er(n.suppressedAutoActions,"suppressedAutoActions"),n.actionAuditLog!==void 0&&kr(n.actionAuditLog,"actionAuditLog"),n.history!==void 0&&Ar(n.history,"history"),n.phaseOverrides!==void 0&&_r(n.phaseOverrides,"phaseOverrides"),n.pathwayChecks!==void 0&&Cr(n.pathwayChecks,"pathwayChecks"),n.componentActions!==void 0&&Or(n.componentActions,"componentActions"),n}function Rr(n=new Date){return n.toLocaleString("en-GB",{month:"short",year:"numeric"})}function zs(n){return{schemaVersion:"4.0",exportedAt:new Date().toISOString(),orgProfile:{...n.orgProfile},currentDraft:Gn(n.currentDraft),objectives:Ba(n.objectives),auditLog:Lr(n.auditLog),suppressedAutoActions:Ga(n.suppressedAutoActions),history:n.history.map(t=>({...t,data:Gn(t.data)})),phaseOverrides:{...n.phaseOverrides},pathwayChecks:Fa(n.pathwayChecks)}}function Pr(n){const t=n.componentActions;if(t)return Object.keys(t).reduce((s,a)=>(s[a]=(t[a]||[]).map(i=>({id:String(i.id??`${Date.now()}-${Math.random().toString(36).slice(2,8)}`),text:String(i.text||""),owner:String(i.owner||""),timescale:String(i.timescale||""),notes:String(i.notes||""),evidence:String(i.evidence||""),linkedActions:[]})),s),{})}function Dr(n,t){return n!=null&&n.length?n.map(s=>({id:`legacy-${s.id}`,timestamp:s.removedAt,actor:"Unknown user",eventType:"action-removed",entityType:"action",entityId:s.actionId,summary:`Removed action: ${s.actionText||s.actionId}`,trustName:t==null?void 0:t.trustName,projectName:t==null?void 0:t.projectName,componentId:s.componentId,lens:s.lens,reason:s.reason,before:{actionText:s.actionText,actionType:s.actionType},source:"local"})):[]}function $r(n,t,s){const a=Dr(t,s),i=(n||[]).map(o=>({...o})),r=[...a,...i].sort((o,u)=>{const c=Date.parse(o.timestamp||""),f=Date.parse(u.timestamp||"");return!Number.isNaN(c)&&!Number.isNaN(f)&&c!==f?c-f:(o.id||"").localeCompare(u.id||"")});return xt(r)}function Tr(n,t){return n.map(s=>({...s,source:"imported",importedAt:t}))}function ns(n){var a,i;if(!n)return{};const t=Kn(n.orgProfile);(i=(a=n.orgProfile)==null?void 0:a.cst)!=null&&i.pathway||(t.cst.pathway="pathway-1");const s=n.objectives||Pr(n);return{...n,schemaVersion:n.schemaVersion||"2.0",orgProfile:t,objectives:Ba(s),auditLog:$r(n.auditLog,n.actionAuditLog,t),suppressedAutoActions:Ga(n.suppressedAutoActions),pathwayChecks:Fa(n.pathwayChecks)}}function Ks(n,t){const s=dt(n),a=ns(s),i=!!(s.objectives||s.componentActions),r=new Date().toISOString(),o=Tr(a.auditLog||[],r),u=xt([...t.auditLog||[],...o]);return mt({...t,orgProfile:a.orgProfile||t.orgProfile,currentDraft:a.currentDraft?Gn(a.currentDraft):Gn(t.currentDraft),objectives:i?a.objectives:t.objectives,auditLog:u,suppressedAutoActions:a.suppressedAutoActions||t.suppressedAutoActions,history:(a.history||t.history).map(c=>({...c,data:Gn(c.data)})),phaseOverrides:a.phaseOverrides||t.phaseOverrides,pathwayChecks:a.pathwayChecks||t.pathwayChecks})}function Ys(n,t,s=new Date){return{monthLabel:Rr(s),overallPercentage:t,data:Gn(n)}}function Gn(n){const t=zt(n);return Object.keys(t).forEach(s=>{Object.keys(t[s]).forEach(a=>{t[s][a].actions=t[s][a].actions.map(i=>({...i,status:rn(i.status),notes:i.notes||"",evidence:i.evidence||"",linkedTargets:(i.linkedTargets||[]).map(r=>({componentId:r.componentId,lens:r.lens}))}))})}),t}function Ba(n){const t=Kt(n||{});return Object.keys(t).forEach(s=>{t[s]=t[s].map(a=>({...a,owner:a.owner||"",timescale:a.timescale||"",notes:a.notes||"",evidence:a.evidence||"",linkedActions:(a.linkedActions||[]).map(i=>({lens:i.lens,actionId:i.actionId}))}))}),t}function Fa(n){return n?Object.keys(n).reduce((t,s)=>{const a=n[s]||{};return t[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},t},{}):{}}function Ga(n){return n?Object.keys(n).reduce((t,s)=>(t[s]=[...n[s]||[]],t),{}):{}}function Lr(n){return n?n.map(t=>({...t})):[]}function Js(n){if(!n)return[];const t=n.split(/\s+/).filter(Boolean);if(t.length<2)return t;const s=t.slice(0,Math.ceil(t.length/2)).join(" "),a=t.slice(Math.ceil(t.length/2)).join(" ");return[s,a].filter(Boolean)}function Br(n){return n.getContext?n:n.canvas}function St(){return typeof document>"u"?!1:document.documentElement.dataset.nhsThemeMode==="dark"}function Ua(n,t,s,a={}){var u,c;const i=Br(t),r=(c=(u=nn).getChart)==null?void 0:c.call(u,i);r&&r.destroy();const o={type:n,data:s,options:a};return new nn(i,o)}function Vt(n,t,s={}){var b,S,d,A,_,h;nn.defaults.font.family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",nn.defaults.font.size=12,nn.defaults.elements.line.tension=.2,nn.defaults.elements.point.radius=4,nn.defaults.elements.point.hoverRadius=6;const a=St(),l={maintainAspectRatio:!0,responsive:!0,layout:{padding:56},plugins:{legend:{display:!0,position:"bottom"},tooltip:{enabled:!0,backgroundColor:a?"rgba(15,23,42,0.98)":"rgba(11,18,32,0.95)",titleColor:"#fff",bodyColor:"#fff"},centerText:""},elements:{line:{borderWidth:3,tension:.2,borderColor:a?"#63b3ff":"#005EB8",backgroundColor:a?"rgba(99,179,255,0.12)":"rgba(0,94,184,0.06)"},point:{radius:4,hoverRadius:6,backgroundColor:a?"rgba(144,205,244,0.95)":"rgba(11,122,184,0.95)"}},scales:{r:{beginAtZero:!0,grid:{color:a?"rgba(226,232,240,0.12)":"rgba(11,18,32,0.06)",lineWidth:1},angleLines:{color:a?"rgba(226,232,240,0.18)":"rgba(11,18,32,0.10)",lineWidth:1},ticks:{display:!1},pointLabels:{display:!1,color:a?"#e2e8f0":"#0b1220",font:{size:12,family:nn.defaults.font.family},padding:10,callback:M=>Js(M).join(`
`)}}}},x={...l,...s,layout:{padding:56,...s.layout||{}},scales:{...l.scales||{},...s.scales||{},r:{...((b=l.scales)==null?void 0:b.r)||{},...((S=s.scales)==null?void 0:S.r)||{},pointLabels:{...((A=(d=l.scales)==null?void 0:d.r)==null?void 0:A.pointLabels)||{},...((h=(_=s.scales)==null?void 0:_.r)==null?void 0:h.pointLabels)||{},display:!1,callback:M=>Js(M).join(`
`)}}}};return Ua("radar",n,t,x)}function Ma(n,t,s={}){const a=St(),i=a?"#e2e8f0":"#0b1220",r=a?"rgba(226,232,240,0.08)":"rgba(11,18,32,0.04)",o=a?"rgba(226,232,240,0.10)":"rgba(11,18,32,0.06)",u=a?"#63b3ff":"#005EB8";return Ua("line",n,t,{...{elements:{line:{borderWidth:2,tension:.2,borderColor:u,backgroundColor:a?"rgba(99,179,255,0.14)":"rgba(0,94,184,0.06)"},point:{radius:3,hoverRadius:5,backgroundColor:u}},scales:{x:{display:!0,grid:{color:r},ticks:{color:i,font:{size:11}}},y:{beginAtZero:!0,grid:{color:o},ticks:{color:i,font:{size:11}}}}},...s})}function Fr(n){return typeof n.toBase64Image=="function"?n.toBase64Image():""}const Gr={id:"radarCenterText",beforeDraw:n=>{var t;try{const s=n.ctx,i=(t=(n.options||{}).plugins)==null?void 0:t.centerText,r=(i==null?void 0:i.text)||i||"";if(!r)return;const o=String(n.config.type||"");if(o!=="radar"&&o!=="doughnut")return;s.save(),s.textAlign="center",s.textBaseline="middle";const u=n.width/2,c=n.height/2;if(o==="doughnut")s.font=(i==null?void 0:i.font)||"bold 20px Inter",s.fillStyle=(i==null?void 0:i.color)||"#005EB8",s.fillText(String(r),u,c-10),i!=null&&i.subText&&(s.font=(i==null?void 0:i.subFont)||"12px Inter",s.fillStyle=(i==null?void 0:i.subColor)||"#6b7280",s.fillText(String(i.subText),u,c+10));else{const f=Math.max(12,Math.round(Math.min(n.width,n.height)*.065)),l=`${f}px ${nn.defaults.font.family}`;s.font=l,s.fillStyle=(i==null?void 0:i.color)||(St()?"#e2e8f0":"#0b1220");const x=String(r).split(`
`),b=f*1.05,S=(x.length-1)*-b/2;x.forEach((d,A)=>{s.fillText(d,u,c+S+A*b)})}s.restore()}catch{}}},Ur={id:"radarPointLabelText",afterDraw:n=>{var t,s,a,i;try{const r=(t=n.scales)==null?void 0:t.r,o=(s=r==null?void 0:r.options)==null?void 0:s.pointLabels;if(!r||!o||n.config.type!=="radar")return;const u=n.ctx,c=Number(((a=o.font)==null?void 0:a.size)||nn.defaults.font.size||12),f=((i=o.font)==null?void 0:i.family)||nn.defaults.font.family||"Inter, sans-serif",l=o.color||(St()?"#e2e8f0":"#0b1220"),x=Number(o.padding??14),b=Array.isArray(r._pointLabels)?r._pointLabels:[];u.save(),u.textAlign="center",u.textBaseline="middle",u.fillStyle=l,u.font=`${c}px ${f}`,b.forEach((S,d)=>{const _=String(S??"").split(`
`).filter(Boolean);if(!_.length)return;const h=r.getPointPosition(d,r.drawingArea+x,0),M=c*1.15,U=(_.length-1)*-M/2,te=Math.max(c,_.length*M),D=c*6,j=D/2+4,q=n.width-D/2-4,J=te/2+4,I=n.height-te/2-4,ee=Math.min(Math.max(h.x,j),q),H=Math.min(Math.max(h.y,J),I);_.forEach((T,W)=>{const ce=H+U+W*M;u.fillText(T,ee,ce)})}),u.restore()}catch{}}};nn.register(Gr,Ur);typeof window<"u"&&(window.NHSDigitalAdoption=window.NHSDigitalAdoption||{},window.NHSDigitalAdoption.Charts={createRadarChart:Vt,createLineChart:Ma,toBase64Image:Fr});function Mr(n,t){const s=(n||[]).map(i=>`${i.componentId}:${i.lens}`).sort(),a=(t||[]).map(i=>`${i.componentId}:${i.lens}`).sort();return s.length===a.length&&s.every((i,r)=>i===a[r])}function Vr(n,t){return n.text===t.text&&(n.actionType||"")===(t.actionType||"")&&n.owner===t.owner&&n.timescale===t.timescale&&n.status===t.status&&(n.phase??null)===(t.phase??null)&&(n.guidanceUrl||"")===(t.guidanceUrl||"")&&(n.startDate||"")===(t.startDate||"")&&(n.dueDate||"")===(t.dueDate||"")&&(n.notes||"")===(t.notes||"")&&(n.evidence||"")===(t.evidence||"")&&(n.readinessScore??null)===(t.readinessScore??null)&&Mr(n.linkedTargets,t.linkedTargets)}function Hr(n){return`${n.text||"Untitled action"} - ${n.status}, owner: ${n.owner||"Unassigned"}`}function Wr(n,t){const s=n.map(i=>`${i.lens}:${i.actionId}`).sort(),a=t.map(i=>`${i.lens}:${i.actionId}`).sort();return s.length===a.length&&s.every((i,r)=>i===a[r])}function qr(n,t){return n.text===t.text&&n.owner===t.owner&&n.timescale===t.timescale&&(n.notes||"")===(t.notes||"")&&(n.evidence||"")===(t.evidence||"")&&Wr(n.linkedActions,t.linkedActions)}function zr(n){return`${n.text||"Untitled objective"} - owner: ${n.owner||"Unassigned"}`}function Va(n,t){return n.name===t.name&&n.role===t.role}function ft(n){return n.role?`${n.name||"Unnamed"} - ${n.role}`:n.name||"Unnamed"}function Kr(n,t){return n.score===t.score&&n.justification===t.justification&&n.evidence===t.evidence}function Xs(n){const t=`Score ${n.score}`;return n.justification?`${t} - ${n.justification}`:t}function yt(n,t,s,a,i,r){const o=new Map(t.map(l=>[l.id,l])),u=new Set(n.map(l=>l.id)),c=[];n.forEach(l=>{const x=o.get(l.id);x&&!s(l,x)&&c.push({id:`${a}:${l.id}`,label:i(l),mineSummary:r(l),theirsSummary:r(x)})});const f=t.filter(l=>!u.has(l.id)).length;return{conflicts:c,autoMergedCount:f,merge:l=>{const x=n.map(b=>{const S=o.get(b.id);return S&&l[`${a}:${b.id}`]==="theirs"?S:b});return t.forEach(b=>{u.has(b.id)||x.push(b)}),x}}}const Qs=[{key:"trustName",label:"Trust name"},{key:"region",label:"Region"},{key:"trustType",label:"Trust type"},{key:"projectName",label:"Programme / project name"},{key:"leadName",label:"Lead submitter"}],Zs=[{key:"type",label:"CST type"},{key:"pathway",label:"Pathway"},{key:"goLiveDate",label:"Go live date"},{key:"fullAdoptionDate",label:"Full adoption date"},{key:"benefitRealizationDate",label:"Benefit realisation date"},{key:"toolkitChoice",label:"Default toolkit"}];function Ha(n,t){const s=[];return Qs.forEach(({key:a,label:i})=>{const r=String(n[a]??""),o=String(t[a]??"");r!==o&&s.push({id:`profile:${String(a)}`,label:i,mineSummary:r||"(blank)",theirsSummary:o||"(blank)"})}),Zs.forEach(({key:a,label:i})=>{const r=String(n.cst[a]??""),o=String(t.cst[a]??"");r!==o&&s.push({id:`cst:${String(a)}`,label:i,mineSummary:r||"(blank)",theirsSummary:o||"(blank)"})}),{conflicts:s,autoMergedCount:0,merge:a=>{const i={...n};Qs.forEach(({key:o})=>{a[`profile:${String(o)}`]==="theirs"&&(i[o]=t[o])});const r={...n.cst};return Zs.forEach(({key:o})=>{a[`cst:${String(o)}`]==="theirs"&&(r[o]=t.cst[o])}),{...i,cst:r}}}}function Wa(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a=[],i=[];let r=0;const o=new Map,u=new Map;return s.forEach(c=>{const f=n[c]||{},l=t[c]||{},x=new Set([...Object.keys(f),...Object.keys(l)]);u.set(c,x),x.forEach(b=>{const S=f[b],d=l[b],A=`${c}:${b}`;S&&d&&!Kr(S,d)&&a.push({id:`entry:${A}`,label:`${c} / ${b}`,mineSummary:Xs(S),theirsSummary:Xs(d)});const _=yt((S==null?void 0:S.actions)||[],(d==null?void 0:d.actions)||[],Vr,`action:${A}`,h=>`${c} / ${b} - ${h.text||"Untitled action"}`,Hr);i.push(..._.conflicts),r+=_.autoMergedCount,o.set(A,_)})}),{entryConflicts:a,actionConflicts:i,autoMergedActionCount:r,merge:c=>{const f={};return s.forEach(l=>{const x=n[l]||{},b=t[l]||{},S={};(u.get(l)||new Set).forEach(d=>{var te;const A=x[d],_=b[d],h=`${l}:${d}`;let M=A?{score:A.score,justification:A.justification,evidence:A.evidence}:{score:_.score,justification:_.justification,evidence:_.evidence};A&&_&&c[`entry:${h}`]==="theirs"&&(M={score:_.score,justification:_.justification,evidence:_.evidence});const U=((te=o.get(h))==null?void 0:te.merge(c))||[];S[d]={...M,actions:U}}),f[l]=S}),f}}}function qa(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a=[];let i=0;const r=new Map;return s.forEach(o=>{const u=yt(n[o]||[],t[o]||[],qr,`objective:${o}`,c=>`${o} - ${c.text||"Untitled objective"}`,zr);a.push(...u.conflicts),i+=u.autoMergedCount,r.set(o,u)}),{conflicts:a,autoMergedCount:i,merge:o=>{const u={};return s.forEach(c=>{var f;u[c]=((f=r.get(c))==null?void 0:f.merge(o))||[]}),u}}}function za(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a=[];let i=0;return s.forEach(r=>{const o=n[r],u=t[r];if(o===void 0||u===void 0){o===void 0&&u!==void 0&&(i+=1);return}o!==u&&a.push({id:`phase:${r}`,label:`Phase focus override - ${r}`,mineSummary:o,theirsSummary:u})}),{conflicts:a,autoMergedCount:i,merge:r=>{const o={...n};return s.forEach(u=>{const c=t[u];c!==void 0&&(n[u]===void 0||r[`phase:${u}`]==="theirs")&&(o[u]=c)}),o}}}function Yr(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a={};return s.forEach(i=>{const r=n[i]||{},o=t[i]||{},u=new Set([...Object.keys(r),...Object.keys(o)]),c={};u.forEach(f=>{const l=f;c[l]=Array.from(new Set([...r[l]||[],...o[l]||[]]))}),a[i]=c}),a}function Jr(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a={};return s.forEach(i=>{a[i]=Array.from(new Set([...n[i]||[],...t[i]||[]]))}),a}function Xr(n,t){const s=new Map;return t.forEach(a=>s.set(a.monthLabel,a)),n.forEach(a=>s.set(a.monthLabel,a)),Array.from(s.values())}function Ka(n){const t=ns(n);return{theirsProfile:t.orgProfile||Kn(),theirsDraft:t.currentDraft||{},theirsObjectives:t.objectives||{},theirsPhaseOverrides:t.phaseOverrides||{},theirsPathwayChecks:t.pathwayChecks||{},theirsSuppressedAutoActions:t.suppressedAutoActions||{},theirsAuditLog:t.auditLog||[],theirsHistory:(t.history||[]).map(s=>({...s,data:zt(s.data)}))}}function Qr(n,t){const{theirsProfile:s,theirsDraft:a,theirsObjectives:i,theirsPhaseOverrides:r}=Ka(t),o=Ha(n.orgProfile,s),u=yt(n.orgProfile.teamMembers||[],s.teamMembers||[],Va,"team",ft,ft),c=Wa(n.currentDraft,a),f=qa(n.objectives,i),l=za(n.phaseOverrides,r),x=[{id:"profile",title:"Organisation profile & CST settings",items:o.conflicts},{id:"team",title:"Team members",items:u.conflicts},{id:"assessments",title:"Assessments",items:c.entryConflicts},{id:"actions",title:"Lens actions",items:c.actionConflicts},{id:"objectives",title:"Objectives",items:f.conflicts},{id:"phaseFocus",title:"Phase focus overrides",items:l.conflicts}].filter(S=>S.items.length>0),b=[];return u.autoMergedCount&&b.push(`${u.autoMergedCount} new team member(s)`),c.autoMergedActionCount&&b.push(`${c.autoMergedActionCount} new action(s)`),f.autoMergedCount&&b.push(`${f.autoMergedCount} new objective(s)`),l.autoMergedCount&&b.push(`${l.autoMergedCount} new phase focus override(s)`),{sections:x,autoMergeSummary:b,hasConflicts:x.length>0}}function ea(n,t,s){const{theirsProfile:a,theirsDraft:i,theirsObjectives:r,theirsPhaseOverrides:o,theirsPathwayChecks:u,theirsSuppressedAutoActions:c,theirsAuditLog:f,theirsHistory:l}=Ka(t),x=Ha(n.orgProfile,a),b=yt(n.orgProfile.teamMembers||[],a.teamMembers||[],Va,"team",ft,ft),S=Wa(n.currentDraft,i),d=qa(n.objectives,r),A=za(n.phaseOverrides,o),_={...n.orgProfile,...x.merge(s),teamMembers:b.merge(s)},h=new Date().toISOString(),M=f.map(te=>({...te,source:"imported",importedAt:h})),U=xt([...n.auditLog||[],...M]);return mt({...n,orgProfile:_,currentDraft:zt(S.merge(s)),objectives:Kt(d.merge(s)),auditLog:U,suppressedAutoActions:Jr(n.suppressedAutoActions,c),history:Xr(n.history,l),phaseOverrides:A.merge(s),pathwayChecks:Yr(n.pathwayChecks,u)})}const Zr=`{
  "component": {
    "id": "BENEFITS",
    "name": "Benefits"
  },
  "outcomes": [
    {
      "id": "BEN_O1",
      "name": "Benefits and disbenefits have been identified and defined"
    },
    {
      "id": "BEN_O2",
      "name": "Benefits are actively managed and monitored"
    },
    {
      "id": "BEN_O3",
      "name": "Benefits are realised, evidenced and sustained"
    }
  ],
  "actions": [
    {
      "id": "BEN_001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Recognise the importance of benefits realisation as part of successful change delivery.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "BEN_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Begin discussions with sponsors and leaders about the expected value of the change.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "BEN_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "Engage key stakeholders to explore potential organisational and stakeholder benefits.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "BEN_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Capture initial ideas regarding expected benefits and possible disbenefits.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "BEN_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Identify stakeholder groups likely to experience benefits from the change.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "BEN_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Gain initial leadership support for benefits identification and management activities.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "BEN_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Review available evidence that may indicate potential benefits.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "BEN_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "Begin raising awareness that benefits will need to be defined, measured and realised.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "BEN_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "Facilitate structured benefits workshops with sponsors, leaders and subject matter experts.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Document and categorise expected organisational, operational, financial and user benefits.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Document likely disbenefits and trade-offs associated with the change.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Develop measurable benefit statements and draft success criteria for priority benefits.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Identify proposed benefit owners and establish accountability for benefit realisation.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "Validate with stakeholders which benefits are most important and meaningful to them.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Develop stakeholder-specific ‘what’s in it for me’ benefit statements.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "Review and validate draft benefits with stakeholders and sponsors.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Assess differences in expected value across stakeholder groups and business areas.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Refine benefit definitions, ownership and measures using stakeholder feedback.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Approve and baseline the benefits realisation approach.",
      "outcomeIds": [
        "BEN_O1",
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Define measures, KPIs and reporting arrangements for each benefit and record this in the benefits register.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Establish baseline measures against which benefits can be assessed and include in the business case.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Develop a benefits realisation plan including ownership, timelines and reporting.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Integrate benefits tracking into governance and programme reporting.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "Communicate expected benefits and success measures to stakeholders.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "Gather stakeholder feedback on benefit assumptions and expectations.",
      "outcomeIds": [
        "BEN_O1",
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "Validate that benefit measures are meaningful and understood by stakeholders.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "Use stakeholder-facing benefit messages (WIIFM benefits) to build support and momentum.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Monitor stakeholder confidence in the expected benefits.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Track benefit performance against agreed KPI's, measures and targets.",
      "outcomeIds": [
        "BEN_O2",
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Review realised and unrealised benefits through governance forums.",
      "outcomeIds": [
        "BEN_O2",
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Identify risks to benefits realisation and agree mitigation actions.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Assess whether expected benefits are being achieved and if not, why.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Manage dependencies that affect benefit realisation.",
      "outcomeIds": [
        "BEN_O2",
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "Share evidence of realised benefits and unintentional consequences with stakeholders.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "Use stakeholder insight to understand barriers to achieving benefits.",
      "outcomeIds": [
        "BEN_O2",
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Monitor stakeholder perceptions of realised benefits and improvement.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "Use WIIFM benefit stories and examples to reinforce adoption.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "Recognise teams and individuals contributing to benefit realisation.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Continuously monitor long-term benefit realisation.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BEN_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Embed benefits management into normal business and adoption management processes.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BEN_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Refine benefit measures and approaches using organisational learning.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BEN_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Use benefit evidence to inform future investment and change decisions.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BEN_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Maintain management of long-term dependencies affecting realised benefits.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BEN_044",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "Regularly communicate realised benefits and improvement outcomes.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BEN_045",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "Use stakeholder feedback to identify opportunities for further benefits realisation.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BEN_046",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Measure ongoing stakeholder perception of benefit delivered by the change.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BEN_047",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "Use success stories and achievements to sustain belief in the value of the change.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BEN_048",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "Promote a culture of continuous benefits realisation and adoption.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,ts={componentId:"benefits",actionPrefix:"benefits-action",outcomePrefix:"benefits:outcome",fallbackOutcomes:[{id:"benefits:outcome:o1",text:"Benefits and disbenefits have been identified and defined"},{id:"benefits:outcome:o2",text:"Benefits are actively managed and monitored"},{id:"benefits:outcome:o3",text:"Benefits are realised, evidenced and sustained"}],lensAliases:{"Strategic Direction and Leadership":"Planning and Risk","People Experience and Culture":"Process and Sustainment"}},el=Ue(Zr,ts);function nl(n){return Me(n,ts,el)}function tl(n){return Ve(n,ts)}const sl=`{
  "component": {
    "id": "CAPABILITY_CONFIDENCE",
    "name": "Capability & Confidence"
  },
  "outcomes": [
    {
      "id": "CC_O1",
      "name": "Required capability levels have been defined and assessed"
    },
    {
      "id": "CC_O2",
      "name": "People can perform confidently in the future state"
    },
    {
      "id": "CC_O3",
      "name": "Capability and confidence are sustained and continuously improved"
    }
  ],
  "actions": [
    {
      "id": "CC_001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Recognise that people will require new capabilities and confidence to operate successfully in the future state.",
      "outcomeIds": [
        "CC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CC_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "Begin discussions with leaders, managers and stakeholders about future capability requirements.",
      "outcomeIds": [
        "CC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CC_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Identify areas where new skills, behaviours or ways of working may be required.",
      "outcomeIds": [
        "CC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CC_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Explore stakeholder perceptions regarding confidence, preparedness and future capability needs.",
      "outcomeIds": [
        "CC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CC_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Identify potential capability and confidence challenges that may affect successful adoption.",
      "outcomeIds": [
        "CC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CC_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "Gain initial agreement that capability development and confidence building will be required as part of the change.",
      "outcomeIds": [
        "CC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CC_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Begin raising awareness of future capability expectations and support requirements.",
      "outcomeIds": [
        "CC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CC_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous changes relating to capability gaps and confidence challenges.",
      "outcomeIds": [
        "CC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CC_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Define and document the future-state capabilities required for successful adoption.",
      "outcomeIds": [
        "CC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CC_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Conduct structured capability analysis to identify gaps between current and future-state requirements.",
      "outcomeIds": [
        "CC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CC_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Assess current confidence levels across impacted stakeholder groups.",
      "outcomeIds": [
        "CC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CC_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Assess factors that may increase or reduce stakeholder confidence during the transition.",
      "outcomeIds": [
        "CC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CC_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Assess capability and confidence risks that could affect successful adoption and performance.",
      "outcomeIds": [
        "CC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CC_014",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "Develop capability-building interventions to address identified capability gaps.",
      "outcomeIds": [
        "CC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CC_015",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Provide opportunities for practical application of learning in real or simulated environments.",
      "outcomeIds": [
        "CC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CC_016",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Provide coaching, mentoring and peer support opportunities for individuals applying new skills.",
      "outcomeIds": [
        "CC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CC_017",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate expectations regarding performance, proficiency and future-state behaviours.",
      "outcomeIds": [
        "CC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CC_018",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "Establish measures to assess capability development and confidence growth.",
      "outcomeIds": [
        "CC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CC_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather feedback about confidence levels and practical challenges experienced by users.",
      "outcomeIds": [
        "CC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CC_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Testing & Validation",
      "action": "Ensure practical capability is assessed through observation, walkthroughs or structured validation activities.",
      "outcomeIds": [
        "CC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CC_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Target additional support towards individuals or groups with lower confidence levels.",
      "outcomeIds": [
        "CC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CC_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Risk Management",
      "action": "Monitor capability and confidence risks during implementation.",
      "outcomeIds": [
        "CC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CC_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "Review capability and confidence measures through programme governance.",
      "outcomeIds": [
        "CC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CC_024",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "Measure capability attainment and confidence levels across impacted stakeholder groups",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "CC_025",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Testing & Validation",
      "action": "Ensure there are processes in place to validate that individuals can successfully perform required activities within the future-state environment",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "CC_026",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Ensure effective application of new skills, behaviours and capabilities are recognised and reinforced",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "CC_027",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Provide targeted capability development and confidence-building interventions where gaps remain",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "CC_028",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Testing & Validation",
      "action": "Validate that capability and confidence levels are sufficient to support sustainable performance improvement",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "CC_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather stakeholder feedback regarding confidence, performance and practical application of learning",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "CC_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate capability achievements, confidence improvements and examples of successful application",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "CC_031",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "Embed continuous capability development into organisational learning and development practices",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "CC_032",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "Monitor long-term capability, proficiency and confidence trends across the organisation",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "CC_033",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "Benchmark capability and confidence maturity across programmes, teams and organisational areas",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "CC_034",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Continuously improve capability development approaches using organisational learning and implementation experience",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "CC_035",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Maintain mechanisms that monitor workforce confidence, development needs and emerging capability requirements",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "CC_036",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise and reward sustained demonstration of future-state capabilities and behaviours",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "CC_037",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Promote a culture of continuous learning, confidence building and professional growth",
      "outcomeIds": [],
      "readinessScore": 4
    }
  ]
}
`,ss={componentId:"capability",actionPrefix:"capability-action",outcomePrefix:"capability:outcome",fallbackOutcomes:[{id:"capability:outcome:o1",text:"Required capability levels have been defined and assessed"},{id:"capability:outcome:o2",text:"People can perform confidently in the future state"},{id:"capability:outcome:o3",text:"Capability and confidence are sustained and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Communication:"People Experience and Culture","Testing and Validation":"Skills and Behaviour"}},al=Ue(sl,ss);function il(n){return Me(n,ss,al)}function ol(n){return Ve(n,ss)}const rl=`{
  "component": {
    "id": "CASE_FOR_CHANGE",
    "name": "Case for Change"
  },
  "outcomes": [
    {
      "id": "CFC_O1",
      "name": "The need for change has been clearly defined and evidenced"
    },
    {
      "id": "CFC_O2",
      "name": "The case for change is understood and accepted"
    },
    {
      "id": "CFC_O3",
      "name": "The case for change remains credible and relevant"
    }
  ],
  "actions": [
    {
      "id": "CFC_001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Recognise that a clear rationale and evidence base will be required to explain why change is necessary.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CFC_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "Begin discussions with leaders and stakeholders regarding the problems, opportunities or drivers prompting change.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CFC_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Identify high-level issues, challenges, opportunities or risks that may justify change.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CFC_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Explore stakeholder perceptions of current challenges, opportunities and improvement needs.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CFC_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Identify strategic, operational, regulatory or service drivers that may support the need for change.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CFC_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Gain initial sponsor agreement that a case for change should be developed.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CFC_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Begin raising awareness that change may be required and that evidence is being gathered.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CFC_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Review previous organisational experience, lessons learned and available evidence relevant to the proposed change.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CFC_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Define and document the problem, opportunity, risk or requirement driving the need for change.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Gather quantitative and qualitative evidence demonstrating the impact the change will have on the current situation.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Assess alignment between the proposed change and organisational objectives, strategies and priorities. ",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Risk Management",
      "action": "Identify potential strategic and operational barriers to the proposed change",
      "outcomeIds": [],
      "readinessScore": 1
    },
    {
      "id": "CFC_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a draft case for change explaining why change is required, why action is needed now and the potential benefits associated with the change.",
      "outcomeIds": [
        "CFC_O1",
        "CFC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Conduct structured engagement activities to understand stakeholder experiences of current challenges and opportunities.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Testing & Validation",
      "action": "Validate whether stakeholders recognise, understand and agree with the need for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Gather local examples and supporting evidence that illustrate the impact of maintaining the current state.",
      "outcomeIds": [
        "CFC_O1",
        "CFC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess misconceptions, assumptions and conflicting perceptions relating to the need for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Design",
      "action": "Refine the draft case for change using evidence, stakeholder insight and feedback ",
      "outcomeIds": [
        "CFC_O1",
        "CFC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Obtain approval and formal leadership and governance endorsement of the draft case for change.",
      "outcomeIds": [
        "CFC_O1",
        "CFC_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "CFC_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Develop clear and consistent messaging explaining why change is necessary.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CFC_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Embed the case for change in programme governance, reporting and decision-making processes.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "CFC_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Define how evidence supporting the case for change will be reviewed and maintained throughout the change lifecycle.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "CFC_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate through engagement and communication activities why the change is necessary",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CFC_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Testing & Validation",
      "action": "Validate stakeholder understanding of the rationale for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CFC_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Address concerns, challenges and areas of misunderstanding relating to the need for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CFC_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Use local examples and evidence to illustrate the importance of the change.",
      "outcomeIds": [
        "CFC_O1",
        "CFC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CFC_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Monitor stakeholder sentiment regarding the case for change.",
      "outcomeIds": [
        "CFC_O2",
        "CFC_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "CFC_028",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Ensure leaders consistently reinforce the rationale for change.",
      "outcomeIds": [
        "CFC_O2",
        "CFC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CFC_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Use governance forums to review whether the original drivers for change remain valid.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CFC_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Use organisational performance, service and outcome measures to support the case for change.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CFC_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Use the case for change to inform programme decisions, priorities and resource allocation.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CFC_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Risk Management",
      "action": "Review assumptions, emerging risks and external influences that may affect the credibility of the case for change.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CFC_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Share evidence and examples demonstrating the impact of addressing the original problem or opportunity.",
      "outcomeIds": [
        "CFC_O2",
        "CFC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CFC_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Evaluate stakeholder acceptance of the ongoing need for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "CFC_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Target communication and engagement activity where understanding remains low.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "CFC_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Design",
      "action": "Refine case for change messaging using stakeholder feedback and insight.",
      "outcomeIds": [
        "CFC_O2",
        "CFC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CFC_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Ensure change champions can confidently explain and reinforce the case for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "CFC_038",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Review the case for change periodically against organisational priorities and external drivers.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CFC_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Use benefits and outcomes data to validate the continued relevance of the case for change.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CFC_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Embed the rationale for change into organisational planning and continuous improvement activities.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CFC_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Use organisational learning and evidence to evolve the case for change where appropriate.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CFC_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Ensure leaders continue to communicate and reinforce the rationale for change during routine business activity.",
      "outcomeIds": [
        "CFC_O2",
        "CFC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CFC_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Capture and share success stories that validate the original need for change.",
      "outcomeIds": [
        "CFC_O2",
        "CFC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CFC_044",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Measure stakeholder belief that the change remains necessary and valuable.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 4
    },
    {
      "id": "CFC_045",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Refresh messaging to reflect emerging evidence, learning and organisational priorities.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CFC_046",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Maintain ongoing engagement activities to sustain awareness of the reasons for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 4
    },
    {
      "id": "CFC_047",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Encourage teams to identify opportunities to build on the original case for change.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CFC_048",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Establish baseline measures that evidence the current problem or opportunity.",
      "outcomeIds": [
        "CFC_O1",
        "CFC_O3"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_049",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Identify and secure sponsors and senior leaders who will champion the case for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 1
    }
  ]
}
`,as={componentId:"case_for_change",actionPrefix:"case-for-change-action",outcomePrefix:"case-for-change:outcome",fallbackOutcomes:[{id:"case-for-change:outcome:o1",text:"The need for change has been clearly defined and evidenced"},{id:"case-for-change:outcome:o2",text:"The case for change is understood and accepted"},{id:"case-for-change:outcome:o3",text:"The case for change remains credible and relevant"}]},ll=Ue(rl,as);function cl(n){return Me(n,as,ll)}function dl(n){return Ve(n,as)}const ul=`{
  "component": {
    "id": "CHANGE_ADOPTION",
    "name": "Change Adoption"
  },
  "outcomes": [
    {
      "id": "CA_O1",
      "name": "Adoption expectations and measures have been defined"
    },
    {
      "id": "CA_O2",
      "name": "Adoption is actively monitored and supported"
    },
    {
      "id": "CA_O3",
      "name": "Adoption is sustained and optimised"
    }
  ],
  "actions": [
    {
      "id": "CA_001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Recognise that successful implementation requires sustained adoption of new ways of working.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CA_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "Begin discussions with leaders and stakeholders about what successful adoption may look like.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CA_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify high-level behaviours and ways of working expected to change.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CA_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "Explore stakeholder perceptions of potential adoption barriers and enablers.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CA_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify groups likely to be critical to successful adoption.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CA_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Gain initial agreement that adoption outcomes will need to be monitored and managed.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CA_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Communication",
      "action": "Begin communicating the importance of adoption and behavioural change in achieving change outcomes.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CA_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous changes relating to adoption challenges and successes.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CA_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Define and document what successful adoption looks like for the change.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Develop adoption indicators, measures, targets and success criteria.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Define behaviours, activities and practices that will indicate successful adoption.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Establish baseline adoption measures for future comparison.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Define ownership, accountabilities and reporting arrangements for adoption outcomes.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "Validate adoption barriers and enablers with impacted stakeholder groups.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Assess stakeholder groups requiring targeted adoption support.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Communication",
      "action": "Communicate expected adoption outcomes, behaviours and performance expectations.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Assess dependencies between adoption, capability, learning, readiness and implementation activities.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Develop a structured adoption monitoring and support approach.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Implement mechanisms for monitoring adoption levels and behavioural change.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Collect adoption data, usage information, feedback and performance insight.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Analyse adoption trends across different stakeholder groups and operational areas.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Review adoption performance through governance and reporting structures.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Identify adoption risks and issues arising from low or inconsistent adoption levels.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "Gather feedback from high and low adopters to understand adoption drivers and barriers.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Provide targeted support and development for groups experiencing adoption challenges.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Communication",
      "action": "Communicate adoption progress, successes and areas of focus.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "Use change agents, change champions and managers to support adoption activity.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Refine adoption interventions using feedback and monitoring information.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Track adoption performance against targets, expectations and baseline measures.",
      "outcomeIds": [
        "CA_O2",
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify areas with lower adoption rates requiring additional intervention.",
      "outcomeIds": [
        "CA_O2",
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "Conduct targeted engagement with low-adoption groups to understand remaining barriers.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "Recognise and promote examples of successful adoption and effective practice.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Coordinate adoption activity with a focus on reinforcement, capability and benefits realisation.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Testing & Validation",
      "action": "Validate that adopted behaviours and practices align with intended future-state outcomes.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Review adoption outcomes and improvement actions through governance processes.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Refine adoption approaches using learning from implementation experience.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "Support managers and leaders to reinforce adoption expectations.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_038",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Monitor long-term adoption performance and behavioural sustainability.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CA_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Use adoption data to identify opportunities for optimisation and improvement.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CA_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Embed adoption monitoring into BAU performance and improvement processes.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CA_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Use organisational learning to strengthen future adoption approaches.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CA_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "Embed adoption-focused behaviours and improvement practices into organisational culture.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CA_043",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Recognise that successful adoption requires changes to operational behaviours, processes and ways of working",
      "outcomeIds": [],
      "readinessScore": 0
    },
    {
      "id": "CA_044",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Identify operational areas, services and processes where adoption of new ways of working will be required",
      "outcomeIds": [],
      "readinessScore": 0
    },
    {
      "id": "CA_045",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Define how adoption will be evidenced through operational behaviours, process execution and future-state ways of working",
      "outcomeIds": [],
      "readinessScore": 1
    },
    {
      "id": "CA_046",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Identify operational indicators and process measures that can be used to assess adoption",
      "outcomeIds": [],
      "readinessScore": 1
    },
    {
      "id": "CA_047",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "Assess dependencies between adoption activities, process implementation and operational readiness",
      "outcomeIds": [],
      "readinessScore": 1
    },
    {
      "id": "CA_048",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Monitor operational usage, process compliance and behavioural adoption across affected business areas",
      "outcomeIds": [],
      "readinessScore": 2
    },
    {
      "id": "CA_049",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Analyse adoption trends across processes, services and operational areas to identify opportunities for improvement",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "CA_050",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "Embed adoption monitoring and performance review into business-as-usual operational governance processes.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "CA_051",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "Embed adoption-related capability development within ongoing organisational learning and development activities.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "CA_052",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "Monitor capability, proficiency and confidence levels associated with sustained adoption of future-state ways of working.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "CA_053",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Identify emerging capability requirements, skill gaps and development opportunities that may influence future adoption performance.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "CA_054",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Use adoption insight and organisational learning to continuously improve capability-building approaches for future change initiatives.",
      "outcomeIds": [],
      "readinessScore": 4
    }
  ]
}
`,is={componentId:"change_adoption",actionPrefix:"change-adoption-action",outcomePrefix:"change-adoption:outcome",fallbackOutcomes:[{id:"change-adoption:outcome:o1",text:"Adoption expectations and measures have been defined"},{id:"change-adoption:outcome:o2",text:"Adoption is actively monitored and supported"},{id:"change-adoption:outcome:o3",text:"Adoption is sustained and optimised"}],lensAliases:{"Planning and Measurement":"Planning and Risk","Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","Skills and Behaviour":"Skills and Behaviour","People Experience and Culture":"Skills and Behaviour",Governance:"Planning and Risk",Design:"Planning and Risk",Reinforcement:"Skills and Behaviour"}},ml=Ue(ul,is);function gl(n){return Me(n,is,ml)}function pl(n){return Ve(n,is)}const hl=`{
  "component": {
    "id": "CHANGE_IMPACT",
    "name": "Change Impact"
  },
  "outcomes": [
    {
      "id": "CI_O1",
      "name": "The impact of the change has been identified and understood"
    },
    {
      "id": "CI_O2",
      "name": "Impacts have been assessed, validated and prioritised"
    },
    {
      "id": "CI_O3",
      "name": "Change impacts are actively managed through plans, governance and support"
    }
  ],
  "actions": [
    {
      "id": "CI_001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Recognise that the change is likely to affect people, processes, services, roles and ways of working.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CI_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "Begin discussions with leaders and stakeholders regarding who or what may be affected by the change.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CI_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify high-level business areas, services, teams and stakeholder groups likely to experience change impacts.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CI_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Explore stakeholder perceptions of where change may affect their roles, activities or responsibilities.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CI_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify potential areas of disruption, opportunity or uncertainty associated with the change.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CI_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Gain initial agreement that change impact assessment activities will be required.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CI_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Begin raising awareness that different stakeholder groups may be affected in different ways.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CI_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Review previous change initiatives to identify common impact themes, challenges and lessons learned.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CI_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify and document the areas, services, teams, roles, processes and stakeholder groups affected by the change.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Develop an initial structured change impact assessment covering people, process, technology, information, governance and ways of working.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify and document intended impacts that could affect performance, service continuity or stakeholder experience.",
      "outcomeIds": [
        "CI_O1",
        "CI_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Assess initial risks arising from identified change impacts.",
      "outcomeIds": [
        "CI_O2",
        "CI_O3"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Define the impact assessment methodology, criteria, measures and evidence sources to be used.",
      "outcomeIds": [
        "CI_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Engage affected stakeholder groups to understand current ways of working and expected impacts.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess stakeholder concerns, support requirements, perceived disruption and areas of uncertainty.",
      "outcomeIds": [
        "CI_O1",
        "CI_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Map affected processes, services and ways of working at a level sufficient to assess change impact.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Assess existing pain points, bottlenecks, duplication, workarounds and service pressures that may influence the scale of impact.",
      "outcomeIds": [
        "CI_O1",
        "CI_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Define and establish baseline measures that will enable comparison between current and future states.",
      "outcomeIds": [
        "CI_O2",
        "CI_O3"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Complete a detailed change impact assessment across affected business areas, services, teams and roles.",
      "outcomeIds": [
        "CI_O1",
        "CI_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CI_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Assess the scale of impact using agreed criteria such as complexity, frequency, number of people affected and degree of difference from current ways of working.",
      "outcomeIds": [
        "CI_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CI_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Translate significant change impacts into change risks, issues or mitigations where appropriate.",
      "outcomeIds": [
        "CI_O2",
        "CI_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "CI_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Review assessed impacts through appropriate governance routes so that decisions are informed by change impact evidence.",
      "outcomeIds": [
        "CI_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "CI_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Identify dependencies that could affect impact management, including process, workforce, system, policy, operational or external dependencies.",
      "outcomeIds": [
        "CI_O2",
        "CI_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "CI_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Validate identified impacts with affected stakeholders and subject matter experts.",
      "outcomeIds": [
        "CI_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CI_025",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Measure the effectiveness of change impact management activities across impacted stakeholder groups, services and business areas",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "CI_026",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Review impact assessment findings to identify remaining high-impact areas requiring support or intervention.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "CI_027",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Address residual risks arising from identified people, process, service and operational impacts.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "CI_028",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather stakeholder feedback regarding actual impacts experienced during implementation.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "CI_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Testing & Validation",
      "action": "Validate that identified impacts, mitigations and support activities remain relevant and effective",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "CI_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Implementation",
      "action": "Adjust impact management interventions using implementation experience, stakeholder feedback and operational insight.\\",",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "CI_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Assess whether anticipated impacts have occurred and whether mitigation activities achieved the desired outcome.\\",",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "CI_032",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Monitor long-term impact trends, outcomes and organisational consequences of change initiatives",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "CI_033",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Benchmark change impact management performance and maturity across programmes and change initiatives.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "CI_034",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Maintain organisation-wide insight mechanisms to identify emerging or cumulative impacts from ongoing change activity",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "CI_035",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise and reinforce good practice in identifying, managing and mitigating change impacts",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "CI_036",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Training & Learning",
      "action": "Capture and apply organisational learning from change impact successes, challenges and implementation experience",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "CI_037",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Continuously review future impact-related risks, dependencies and emerging organisational pressures",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "CI_038",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Promote a culture where change impacts are proactively assessed, managed and used to inform organisational improvement",
      "outcomeIds": [],
      "readinessScore": 4
    }
  ]
}
`,os={componentId:"change_impact",actionPrefix:"change-impact-action",outcomePrefix:"change-impact:outcome",fallbackOutcomes:[{id:"change-impact:outcome:o1",text:"The impact of the change has been identified and understood"},{id:"change-impact:outcome:o2",text:"Impacts have been assessed, validated and prioritised"},{id:"change-impact:outcome:o3",text:"Change impacts are actively managed through plans, governance and support"}]},fl=Ue(hl,os);function bl(n){return Me(n,os,fl)}function xl(n){return Ve(n,os)}const Sl=`{
  "component": {
    "id": "CHANGE_NETWORK",
    "name": "Change Network"
  },
  "outcomes": [
    {
      "id": "CN_O1",
      "name": "A representative and effective change network has been established"
    },
    {
      "id": "CN_O2",
      "name": "The change network actively enables engagement and adoption"
    },
    {
      "id": "CN_O3",
      "name": "The change network is embedded and delivers ongoing value"
    }
  ],
  "actions": [
    {
      "id": "CN_0001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Recognise the need for a change network to support engagement, communication and adoption activities.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CN_0002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Explore how a change network could support programme and organisational objectives.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CN_0003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Identify potential areas, teams and stakeholder groups that may benefit from local change support.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CN_0004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Discuss the concept of change agents and change champions with sponsors and stakeholder groups.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CN_0005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess whether useful local networks, forums or communities already exist that could support change activities.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CN_0006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Obtain initial sponsor agreement to explore creation of a change network.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CN_0007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Begin raising awareness of the potential role and value of a change network.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CN_0008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify possible individuals who may have influence, credibility or interest in supporting change locally.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CN_0009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Agree and document the purpose, scope and objectives of the change network.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CN_0010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Prioritise organisational areas and stakeholder groups requiring representation within the change network.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CN_0011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Draft role profiles and expectations for change agents and change champions.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CN_0012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Define sponsorship, reporting lines and governance arrangements for the proposed network.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CN_0013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a structured recruitment, onboarding and engagement approach for network members.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CN_0014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Approach and engage prospective network members across priority business areas.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CN_0015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Assess commitment, availability and suitability of prospective network members.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CN_0016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Review network coverage and identify gaps in representation, influence and local knowledge.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CN_0017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate planned objectives, roles and expected value of the upcoming change network.",
      "outcomeIds": [
        "CN_O1",
        "CN_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CN_0018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Establish initial connections and collaboration opportunities between prospective network members.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CN_0019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Launch the change network with defined membership, responsibilities and operating arrangements.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 2
    },
    {
      "id": "CN_0020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Training & Learning",
      "action": "Provide initial training and capability development for network members.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CN_0021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Provide network members with key messages, updates and engagement materials.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CN_0022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Establish mechanisms for two-way communication between the programme and the network.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CN_0023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Define measures to assess network participation, contribution and effectiveness.",
      "outcomeIds": [
        "CN_O2",
        "CN_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "CN_0024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use network members to gather insight, questions, concerns and feedback from stakeholders.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CN_0025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Use network members to reinforce key messages and support local engagement activity.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CN_0026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Empower network members to represent stakeholder concerns within programme discussions.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CN_0027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Support network members to build local advocacy and confidence in the change.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CN_0028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Monitor engagement levels and participation across the network.",
      "outcomeIds": [
        "CN_O2",
        "CN_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "CN_0029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Integrate the change network into programme governance, planning and delivery activities.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CN_0030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Evaluate the effectiveness of the network in supporting change outcomes.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CN_0031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Refine network structures, roles and approaches based on learning and feedback.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CN_0032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "Align change network activity with engagement, learning and adoption plans.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CN_0033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use network members to facilitate local problem solving and remove barriers to adoption.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "CN_0034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Use network members to reinforce desired behaviours and ways of working.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "CN_0035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Share examples of network impact and success across stakeholder groups.",
      "outcomeIds": [
        "CN_O2",
        "CN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CN_0036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise and celebrate the contribution of network members.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CN_0037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Assess stakeholder perceptions of change network effectiveness.",
      "outcomeIds": [
        "CN_O2",
        "CN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CN_0038",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Embed the change network into organisational change and improvement approaches.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CN_0039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Review and continuously improve network effectiveness and operating models.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CN_0040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Use organisational learning to strengthen future change network approaches.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CN_0041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "Integrate the network with organisational improvement, transformation and change capability activities.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CN_0042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Maintain a sustainable network capable of supporting future change initiatives.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CN_0043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Maintain active two-way communication between stakeholders and the change network.",
      "outcomeIds": [
        "CN_O2",
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CN_0044",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Embed change agents and change champion roles into organisational culture.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CN_0045",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Measure the network’s contribution to engagement, adoption and reinforcement outcomes.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CN_0046",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Develop future change leaders from within the network.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CN_0047",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Demonstrate the value of the network through sustained contribution to organisational change success.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,rs={componentId:"change_network",actionPrefix:"change-network-action",outcomePrefix:"change-network:outcome",fallbackOutcomes:[{id:"change-network:outcome:o1",text:"A representative and effective change network has been established"},{id:"change-network:outcome:o2",text:"The change network actively enables engagement and adoption"},{id:"change-network:outcome:o3",text:"The change network is embedded and delivers ongoing value"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Engagement:"People Experience and Culture","Analysis and Insight":"People Experience and Culture"}},yl=Ue(Sl,rs);function vl(n){return Me(n,rs,yl)}function wl(n){return Ve(n,rs)}const Nl=`{
  "component": {
    "id": "READINESS_PLANNING",
    "name": "Change Management Readiness & Planning"
  },
  "outcomes": [
    {
      "id": "RP_O1",
      "name": "Organisational readiness has been assessed"
    },
    {
      "id": "RP_O2",
      "name": "A robust change management plan has been developed"
    },
    {
      "id": "RP_O3",
      "name": "Readiness and planning activities actively support successful implementation"
    }
  ],
  "actions": [
    {
      "id": "RP_001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Recognise the need for structured change management planning and readiness assessment to support successful implementation.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RP_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "Begin discussions with sponsors, leaders and stakeholders about organisational preparedness for the change.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RP_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify high-level areas where readiness, planning or implementation challenges may occur.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RP_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "Explore stakeholder perceptions regarding readiness, change capacity and support needs.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RP_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify initial organisational constraints, assumptions and factors that could influence delivery.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RP_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Gain initial agreement that change readiness needs to be assessed and change management planning activities will be required.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RP_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Begin raising awareness of the need for implementation planning, readiness activities and organisational preparation.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RP_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous change initiatives relating to readiness and planning.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RP_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Conduct a structured readiness assessment to understand organisational preparedness for change.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Assess organisational capability, capacity and resource availability required to support implementation.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify and document readiness gaps between the current state and desired future state.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Assess readiness-related risks that may affect successful implementation.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Assess organisational, programme and operational dependencies affecting readiness.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "Engage stakeholders to validate readiness levels, concerns, confidence and support requirements.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Assess organisational attitudes, competing priorities, change fatigue and change capacity.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Define and establish baseline readiness measures and indicators.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a structured change management approach informed by readiness findings.",
      "outcomeIds": [
        "RP_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Define change management workstreams, priorities, activities, milestones and delivery approach.",
      "outcomeIds": [
        "RP_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Develop a detailed change management plan informed by readiness, impact, risk and stakeholder analysis findings.",
      "outcomeIds": [
        "RP_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RP_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Map dependencies, assumptions, constraints and critical path activities within the change plan.",
      "outcomeIds": [
        "RP_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RP_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Define readiness indicators, implementation checkpoints and progress measures.",
      "outcomeIds": [
        "RP_O2",
        "RP_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RP_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Integrate readiness and planning risks into the wider change risk management approach.",
      "outcomeIds": [
        "RP_O2",
        "RP_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RP_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "Validate planning assumptions and readiness findings with affected stakeholder groups.",
      "outcomeIds": [
        "RP_O1",
        "RP_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RP_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Align learning, communications, engagement and support activities with implementation milestones.",
      "outcomeIds": [
        "RP_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RP_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Establish ownership and accountability for delivery of change management activities.",
      "outcomeIds": [
        "RP_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RP_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Define how readiness will be monitored and reassessed throughout delivery.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RP_027",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Obtain approval of the change management plan through appropriate governance routes.",
      "outcomeIds": [
        "RP_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "RP_028",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Communication",
      "action": "Communicate implementation timelines, expected activities and preparation requirements.",
      "outcomeIds": [
        "RP_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "RP_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Monitor delivery of the change management plan against agreed milestones and success measures.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RP_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Review readiness levels at key implementation checkpoints.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RP_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Address readiness gaps, issues and barriers that emerge during implementation.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RP_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Review progress, readiness and delivery issues through governance forums.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RP_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Adjust and refine plans in response to delivery experience, feedback and changing priorities.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RP_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "Gather stakeholder feedback on implementation preparedness and support requirements.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RP_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Communication",
      "action": "Provide regular updates on implementation plans, readiness progress and key milestones.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RP_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Coordinate readiness activities across communications, engagement, learning and support workstreams.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RP_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Testing & Validation",
      "action": "Validate organisational readiness and acceptance criteria before key implementation events and go-live activities start.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RP_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Assess whether planned change management activities are supporting successful implementation.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RP_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Use implementation and adoption data to evaluate the effectiveness of readiness and planning approaches.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RP_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Incorporate lessons learned into future change planning methodologies.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RP_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Senior leaders should have visibility of areas in the organisation where readiness is low and impact of the change is high",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "RP_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Continuously review organisational readiness for future changes and transformation activity.",
      "outcomeIds": [
        "RP_O1",
        "RP_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RP_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Maintain visibility and management of strategic programme dependencies affecting future readiness.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RP_044",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "Maintain mechanisms for gathering ongoing readiness insight from across the organisation.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RP_045",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Review progress against readiness acceptance criteria to inform go live decision",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "RP_046",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Benchmark readiness and planning performance against previous programmes and organisational standards.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RP_047",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Embed readiness reviews and change planning disciplines into organisational change delivery standards.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RP_048",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Recognise teams and leaders that consistently demonstrate strong change preparedness and planning discipline.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RP_049",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Continuously improve change planning templates, standards and guidance using organisational learning.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RP_050",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Agree readiness acceptance criteria to support go live decisions",
      "outcomeIds": [],
      "readinessScore": 2
    },
    {
      "id": "RP_051",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Embed proactive readiness assessment and planning as a routine part of organisational change delivery.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,ls={componentId:"cm_readiness",actionPrefix:"cm-readiness-action",outcomePrefix:"cm-readiness:outcome",fallbackOutcomes:[{id:"cm-readiness:outcome:o1",text:"Organisational readiness has been assessed"},{id:"cm-readiness:outcome:o2",text:"A robust change management plan has been developed"},{id:"cm-readiness:outcome:o3",text:"Readiness and planning activities actively support successful implementation"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Planning and Risk":"Planning and Risk","People Experience and Culture":"Planning and Risk","Skills and Behaviour":"Planning and Risk","Process and Sustainment":"Planning and Risk",Governance:"Planning and Risk",Reinforcement:"Planning and Risk"}},Cl=Ue(Nl,ls);function El(n){return Me(n,ls,Cl)}function kl(n){return Ve(n,ls)}const jl=`{
  "component": {
    "id": "ORG_CHANGE_READINESS",
    "name": "Org Change Readiness"
  },
  "outcomes": [
    {
      "id": "OCR_O1",
      "name": "Organisational readiness factors are understood"
    },
    {
      "id": "OCR_O2",
      "name": "Readiness gaps are addressed and readiness is improved"
    },
    {
      "id": "OCR_O3",
      "name": "Organisational readiness supports successful and sustainable change"
    }
  ],
  "actions": [
    {
      "id": "OCR_001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Recognise that organisational readiness will influence the success of the change.",
      "outcomeIds": [
        "OCR_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "OCR_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "Begin discussions with leaders regarding the organisation's ability to absorb and support the change.",
      "outcomeIds": [
        "OCR_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "OCR_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "Explore stakeholder perceptions of preparedness, capacity and support requirements.",
      "outcomeIds": [
        "OCR_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "OCR_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Identify high-level organisational factors that may support or hinder the change.",
      "outcomeIds": [
        "OCR_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "OCR_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Secure initial agreement that organisational readiness will be assessed and managed throughout the change lifecycle.",
      "outcomeIds": [
        "OCR_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "OCR_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Begin raising awareness of organisational readiness considerations and expectations.",
      "outcomeIds": [
        "OCR_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "OCR_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous organisational changes relating to readiness and preparedness.",
      "outcomeIds": [
        "OCR_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "OCR_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Identify potential readiness risks, constraints and competing organisational priorities.",
      "outcomeIds": [
        "OCR_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "OCR_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Conduct a structured organisational readiness assessment.",
      "outcomeIds": [
        "OCR_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "OCR_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Assess organisational capacity, workload pressures and competing priorities.",
      "outcomeIds": [
        "OCR_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "OCR_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Assess organisational attitudes towards change, confidence levels and change fatigue.",
      "outcomeIds": [
        "OCR_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "OCR_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Define readiness indicators, measures and assessment criteria.",
      "outcomeIds": [
        "OCR_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "OCR_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Identify organisational readiness strengths, weaknesses, risks and barriers.",
      "outcomeIds": [
        "OCR_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "OCR_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "Validate readiness findings with stakeholders, leaders and operational teams.",
      "outcomeIds": [
        "OCR_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "OCR_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "Assess dependencies affecting organisational readiness across programmes, services and operational activities.",
      "outcomeIds": [
        "OCR_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "OCR_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a readiness improvement approach to address identified gaps and barriers.",
      "outcomeIds": [
        "OCR_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "OCR_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Define ownership and accountability for organisational readiness improvement activities.",
      "outcomeIds": [
        "OCR_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "OCR_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Communicate organisational readiness findings and improvement priorities.",
      "outcomeIds": [
        "OCR_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "OCR_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop and implement readiness improvement plans to address identified organisational readiness gaps.",
      "outcomeIds": [
        "OCR_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "OCR_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Risk Management",
      "action": "Implement actions to address organisational capacity constraints that could affect successful change delivery.",
      "outcomeIds": [
        "OCR_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "OCR_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "Address change fatigue, competing priorities and organisational barriers that may reduce readiness.",
      "outcomeIds": [
        "OCR_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "OCR_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "Strengthen leadership readiness by upskilling senior leaders in Change Management to support and champion the change effectively.",
      "outcomeIds": [
        "OCR_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "OCR_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Build operational manager readiness to coach, support and guide teams through the change.",
      "outcomeIds": [
        "OCR_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "OCR_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "Improve local team preparedness through targeted support, engagement and readiness interventions.",
      "outcomeIds": [
        "OCR_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "OCR_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Monitor organisational readiness indicators and assess progress against readiness objectives.",
      "outcomeIds": [
        "OCR_O2",
        "OCR_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "OCR_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Review organisational readiness performance and improvement actions through governance processes.",
      "outcomeIds": [
        "OCR_O2",
        "OCR_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "OCR_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "Align readiness improvement activities with implementation milestones, programme dependencies and delivery schedules.",
      "outcomeIds": [
        "OCR_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "OCR_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Testing & Validation",
      "action": "Reassess organisational readiness before key implementation events and delivery milestones.",
      "outcomeIds": [
        "OCR_O2",
        "OCR_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "OCR_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Measure organisational readiness performance across impacted areas and stakeholder groups.",
      "outcomeIds": [
        "OCR_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "OCR_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Testing & Validation",
      "action": "Validate organisational readiness before go-live activities and major implementation events.",
      "outcomeIds": [
        "OCR_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "OCR_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Risk Management",
      "action": "Address remaining readiness gaps that could affect implementation success.",
      "outcomeIds": [
        "OCR_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "OCR_032",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Embed organisational readiness assessment into organisational change governance, assurance and decision-making processes.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "OCR_033",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Establish organisational accountability for maintaining readiness standards across change portfolios and programmes.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "OCR_034",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Benchmark organisational readiness maturity across programmes, projects and transformation initiatives.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "OCR_035",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Training & Learning",
      "action": "Continuously improve organisational readiness methodologies, frameworks and assessment approaches using organisational learning.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "OCR_036",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Embed readiness metrics and reporting within organisational governance, portfolio management and assurance arrangements.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "OCR_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Identify emerging workforce capability requirements that could influence future organisational readiness levels.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "OCR_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Testing & Validation",
      "action": "Validate that managers and local leaders have the skills and confidence required to support implementation activities.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "OCR_039",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "Reinforce behaviours and practices that demonstrate organisational preparedness and readiness for change.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "OCR_040",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Testing & Validation",
      "action": "Verify that capability-building activities have improved organisational readiness and preparedness.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "OCR_041",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "Recognise and reinforce behaviours that demonstrate proactive preparedness, adaptability and readiness for change.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "OCR_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "Embed organisational readiness capability development into ongoing learning, development and workforce planning activities.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "OCR_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "Monitor long-term organisational preparedness, workforce capability and readiness competency across the organisation.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "OCR_044",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "Benchmark organisational readiness capability and preparedness maturity across programmes, teams and organisational functions.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "OCR_045",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Capture and apply organisational learning relating to capability, preparedness and readiness outcomes.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "OCR_046",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "Assess the effectiveness of organisational readiness capability-building activities in supporting future change initiatives.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "OCR_047",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "Promote a culture of continuous capability development, preparedness and readiness for change.",
      "outcomeIds": [],
      "readinessScore": 4
    }
  ]
}
`,cs={componentId:"org_maturity",actionPrefix:"org-change-readiness-action",outcomePrefix:"org-change-readiness:outcome",fallbackOutcomes:[{id:"org-change-readiness:outcome:o1",text:"Organisational readiness has been assessed and understood"},{id:"org-change-readiness:outcome:o2",text:"Readiness gaps are being actively addressed"},{id:"org-change-readiness:outcome:o3",text:"The organisation is prepared to successfully absorb and sustain the change"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"Skills and Behaviour","Planning and Measurement":"Skills and Behaviour",Design:"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Reinforcement:"Skills and Behaviour"}},Il=Ue(jl,cs);function Al(n){return Me(n,cs,Il)}function _l(n){return Ve(n,cs)}const Ol="pathway-auto-action:",Rl="pathway:auto-objective:",Pl="vision:auto-objective:";function Dl(n){return n.startsWith(Rl)||n.startsWith(Pl)}function $l(n){const t=n.orgProfile.cst.pathway,s={...n.objectives||{}},a=Object.keys(n.currentDraft||{}).reduce((i,r)=>{const o=n.currentDraft[r]||{};return i[r]=Object.keys(o).reduce((u,c)=>{const f=o[c];return u[c]={...f,actions:(f.actions||[]).filter(l=>!l.id.startsWith(Ol))},u},{}),i},{});return bt.forEach(i=>{Yt(i.id,t)&&(s[i.id]=(s[i.id]||[]).filter(o=>!Dl(o.id)))}),{...n,currentDraft:a,objectives:s}}const Tl=`{
  "component": {
    "id": "PROCESS_CHANGE",
    "name": "Process Change"
  },
  "outcomes": [
    {
      "id": "PC_O1",
      "name": "Current and future processes have been defined"
    },
    {
      "id": "PC_O2",
      "name": "Process changes have been implemented and adopted"
    },
    {
      "id": "PC_O3",
      "name": "New ways of working are optimised and continuously improved"
    }
  ],
  "actions": [
    {
      "id": "PC_001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Recognise that business processes will need to change to deliver the intended outcomes.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "PC_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Identify high-level business areas likely to be affected by process change.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "PC_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "Engage process owners and stakeholders to explore how work may need to change.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "PC_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Identify known process challenges, issues and opportunities for improvement.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "PC_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "Obtain initial agreement from leaders and process owners to review affected processes.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "PC_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Communication",
      "action": "Begin raising awareness that changes to processes and ways of working may be required.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "PC_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Identify existing documentation, workflows or process maps that may support future analysis.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "PC_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Identify potential process dependencies that may need further investigation.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "PC_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Confirm and prioritise the business processes affected by the change.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Conduct structured current-state process mapping and workflow analysis.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Analyse process pain points, bottlenecks, duplication and inefficiencies in priority areas.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Define and capture baseline process performance measures.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "Validate current operational challenges and improvement opportunities with process users.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Develop draft future-state process designs aligned to intended change outcomes.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Conduct structured gap analysis between current-state and future-state processes.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "Assess process dependencies, interfaces and external touchpoints.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "Confirm process ownership and accountability arrangements for future-state processes.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Document draft future-state processes, procedures and operating requirements.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "Validate future-state processes with stakeholders and subject matter experts.",
      "outcomeIds": [
        "PC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "PC_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "Test future-state workflows under realistic operating conditions.",
      "outcomeIds": [
        "PC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "PC_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Refine future-state processes using validation and testing feedback.",
      "outcomeIds": [
        "PC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "PC_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Implementation",
      "action": "Implement approved future-state processes.",
      "outcomeIds": [
        "PC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "PC_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "Coordinate process implementation with learning, communications, adoption and operational readiness activities.",
      "outcomeIds": [
        "PC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "PC_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Communication",
      "action": "Communicate process changes, responsibilities and expectations to stakeholders.",
      "outcomeIds": [
        "PC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "PC_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "Support teams in understanding and applying new process requirements.",
      "outcomeIds": [
        "PC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "PC_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "Review implementation progress and process readiness through governance forums.",
      "outcomeIds": [
        "PC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "PC_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Risk Management",
      "action": "Identify and manage risks associated with process implementation.",
      "outcomeIds": [
        "PC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "PC_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Monitor early process performance following implementation.",
      "outcomeIds": [
        "PC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "PC_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Measure whether the future state processes are working against baseline and target measures.",
      "outcomeIds": [
        "PC_O2",
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Analyse trends in the future state process performance and identify opportunities for optimisation.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "Validate that new ways of working align with the objectives of the future-state processes.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "Review process performance and improvement priorities through governance routes.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Refine processes using implementation feedback, operational insight and performance data.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "Gather user feedback on process usability and effectiveness.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Communication",
      "action": "Share successes and lessons learned from the new ways of working.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "Recognise teams contributing to successful new ways of working and improvement.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "Align any improvements to the new ways of working with benefits realisation and adoption activities.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Implementation",
      "action": "Standardise new processes across relevant business areas.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Continuously monitor consistency of new ways of working and operational outcomes.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "PC_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Use performance insight and organisational learning to optimise processes further.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "PC_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "Embed process review and optimisation into BAU governance arrangements.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "PC_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Implementation",
      "action": "Embed ownership for continuous improvement in the new ways of working into operational teams.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "PC_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "Promote a culture of continuous improvement and optimisation to ways of working.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,ds={componentId:"process_change",actionPrefix:"process-change-action",outcomePrefix:"process-change:outcome",fallbackOutcomes:[{id:"process-change:outcome:o1",text:"Current and future processes have been defined"},{id:"process-change:outcome:o2",text:"Process changes have been implemented and adopted"},{id:"process-change:outcome:o3",text:"Processes are optimised and continuously improved"}],lensAliases:{"Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Skills and Behaviour","Planning and Risk":"Process and Sustainment","Analysis and Insight":"Process and Sustainment",Communication:"Skills and Behaviour","Dependency Management":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment",Implementation:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"Skills and Behaviour","Testing and Validation":"Process and Sustainment"}},Ll=Ue(Tl,ds);function Bl(n){return Me(n,ds,Ll)}function Fl(n){return Ve(n,ds)}const Gl=`{
  "component": {
    "id": "REINFORCEMENT",
    "name": "Reinforcement"
  },
  "outcomes": [
    {
      "id": "REINF_O1",
      "name": "Reinforcement strategy and sustainment measures are defined"
    },
    {
      "id": "REINF_O2",
      "name": "Reinforcement activities support sustained adoption and behaviour change"
    },
    {
      "id": "REINF_O3",
      "name": "Sustained change outcomes are embedded and continuously improved"
    }
  ],
  "actions": [
    {
      "id": "REINF_001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Recognise the need to sustain change outcomes beyond implementation and initial adoption.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "REINF_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "Discuss with sponsors and leaders how the change will need to be sustained after go-live.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "REINF_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Identify behaviours, processes and outcomes that will require ongoing reinforcement.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "REINF_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Explore stakeholder perceptions of what will help or hinder long-term sustainment.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "REINF_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify areas where adoption may decline without ongoing support.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "REINF_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "Gain initial sponsor commitment to support reinforcement and sustainment activities.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "REINF_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Begin raising awareness that reinforcement activities will be available if required where adoption is low. ",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "REINF_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Review previous change initiatives to identify sustainment risks and lessons learned.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "REINF_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Define and document what successful long-term adoption and sustainment will look like.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Develop agreed sustainment indicators and reinforcement measures.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "Define ownership, accountabilities and responsibilities for reinforcement activities.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "Assess dependencies between reinforcement, adoption, benefits, sponsorship and operational ownership.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Develop a structured reinforcement and sustainment plan aligned to adoption outcomes.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess sustainment drivers and barriers across stakeholder groups and business areas.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Validate stakeholder sustainment needs and ongoing support requirements.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify priority stakeholder groups requiring targeted reinforcement support.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate expected future-state behaviours and sustainment expectations.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Establish baseline reinforcement and sustainment measures.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "Ensure leaders and managers visibly reinforce desired behaviours and new ways of working.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "Communicate adoption successes, improvements and positive outcomes.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "Review reinforcement indicators and sustainment risks through governance mechanisms.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Monitor adoption, behaviour and performance indicators linked to sustained change.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Refine reinforcement plans using sustainment data and stakeholder feedback.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise and celebrate examples of successful adoption, positive behavioural change and improvements to ways of working. ",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use change networks, champions and managers to reinforce desired behaviours locally.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Training & Learning",
      "action": "Provide refresher support where adoption or confidence levels begin to decline.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Gather feedback regarding sustainment challenges and support needs.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_028",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Monitor sustainment indicators and identify areas where adoption is weakening.",
      "outcomeIds": [
        "REINF_O2",
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Target reinforcement activity towards groups showing reductions in adoption or compliance.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "Ensure leaders consistently model desired behaviours and reinforce expectations.",
      "outcomeIds": [
        "REINF_O2",
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "Review sustainment performance and improvement actions through governance processes.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Analyse performance, adoption and benefits data to identify sustainment opportunities.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Demonstrate the ongoing value of the change through evidence and success stories.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise teams and individuals who consistently demonstrate future-state behaviours.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use stakeholder feedback to improve sustainment and reinforcement activities.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Risk Management",
      "action": "Identify risks that may cause reversion to previous behaviours or ways of working.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Update reinforcement approaches using sustainment insight and lessons learned.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_038",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "Embed reinforcement measures into operational management and performance processes.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "REINF_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Monitor long-term behavioural sustainment and continuous improvement outcomes.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "REINF_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Use organisational learning to improve future reinforcement strategies.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "REINF_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Embed recognition, feedback and reinforcement practices into organisational culture.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "REINF_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Promote continuous improvement and ongoing enhancement of adopted ways of working.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,us={componentId:"reinforcement",actionPrefix:"reinforcement-action",outcomePrefix:"reinforcement:outcome",fallbackOutcomes:[{id:"reinforcement:outcome:o1",text:"Reinforcement strategy and sustainment measures are defined"},{id:"reinforcement:outcome:o2",text:"Reinforcement activities support sustained adoption and behaviour change"},{id:"reinforcement:outcome:o3",text:"Sustained change outcomes are embedded and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Strategic Direction and Leadership":"Process and Sustainment","Planning and Measurement":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"People Experience and Culture"}},Ul=Ue(Gl,us);function Ml(n){return Me(n,us,Ul)}function Vl(n){return Ve(n,us)}const Hl=`{
  "component": {
    "id": "RESISTANCE_MANAGEMENT",
    "name": "Resistance Management"
  },
  "outcomes": [
    {
      "id": "RES_O1",
      "name": "Potential sources of resistance have been identified and understood"
    },
    {
      "id": "RES_O2",
      "name": "Strategies and interventions are in place to prevent and address resistance"
    },
    {
      "id": "RES_O3",
      "name": "Resistance is actively managed and reduced throughout the change lifecycle"
    }
  ],
  "actions": [
    {
      "id": "RES_001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Recognise that resistance is a normal response to change and may need to be actively managed.",
      "outcomeIds": [
        "RES_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RES_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Begin discussing potential concerns and reactions to the change with stakeholders and leaders.",
      "outcomeIds": [
        "RES_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RES_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify stakeholder groups where resistance may emerge during the change.",
      "outcomeIds": [
        "RES_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RES_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Explore if there have been previous organisational experiences that may influence reactions to the change.",
      "outcomeIds": [
        "RES_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RES_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Identify high-level risks that resistance could present to successful implementation.",
      "outcomeIds": [
        "RES_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RES_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "Gain initial sponsor and leadership agreement that resistance management activities may be required.",
      "outcomeIds": [
        "RES_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RES_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Begin raising awareness amongst leaders and managers about the role of resistance management in successful change.",
      "outcomeIds": [
        "RES_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RES_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous changes relating to resistance, concern and stakeholder opposition.",
      "outcomeIds": [
        "RES_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RES_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Use the stakeholder analysis to identify and document potential sources of resistance across stakeholder groups, teams and impacted areas.",
      "outcomeIds": [
        "RES_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess causes, drivers and contributing factors likely to generate resistance.",
      "outcomeIds": [
        "RES_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Conduct structured engagement to understand concerns, apprehensions and barriers to supporting the change.",
      "outcomeIds": [
        "RES_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Analyse restraining forces and resistance factors using recognised assessment approaches.",
      "outcomeIds": [
        "RES_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Risk Management",
      "action": "Assess likelihood, impact and priority of resistance risks affecting implementation and adoption.",
      "outcomeIds": [
        "RES_O1",
        "RES_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "Develop a structured resistance management approach based on identified resistance drivers.",
      "outcomeIds": [
        "RES_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "Define ownership, accountabilities and escalation arrangements for resistance management.",
      "outcomeIds": [
        "RES_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "Develop preventative interventions intended to reduce the likelihood and impact of resistance.",
      "outcomeIds": [
        "RES_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Dependency Management",
      "action": "Assess dependencies between resistance management and engagement, communication, learning and sponsorship activities.",
      "outcomeIds": [
        "RES_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Define measures and indicators that will be used to identify, track and monitor resistance.",
      "outcomeIds": [
        "RES_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Establish mechanisms for identifying and escalating emerging resistance.",
      "outcomeIds": [
        "RES_O2",
        "RES_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RES_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use managers, change agents and change champions to gather insight into emerging concerns and resistance.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RES_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Address misconceptions, rumours and misinformation through targeted engagement and communication activities.",
      "outcomeIds": [
        "RES_O2",
        "RES_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RES_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Hold structured conversations with impacted groups to explore concerns and identify potential solutions.",
      "outcomeIds": [
        "RES_O2",
        "RES_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RES_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "Develop a resistance management plan  ",
      "outcomeIds": [],
      "readinessScore": 2
    },
    {
      "id": "RES_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Prepare leaders and managers to identify, understand and respond to resistance effectively.",
      "outcomeIds": [
        "RES_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RES_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Risk Management",
      "action": "Integrate significant resistance themes into change risk management processes.",
      "outcomeIds": [
        "RES_O2",
        "RES_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RES_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "Monitor indicators of resistance across stakeholder groups and impacted areas.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RES_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Provide tailored responses and messaging for stakeholder groups showing greater levels of resistance.",
      "outcomeIds": [
        "RES_O2",
        "RES_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RES_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "Review resistance themes and mitigation actions through governance forums.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RES_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Monitor trends in stakeholder sentiment, concerns and resistance levels.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RES_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Implement targeted interventions for stakeholder groups with high levels of resistance.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RES_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Adapt communication and engagement approaches in response to resistance trends.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RES_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "Resistance management plan to be approved by governance and forms part of the change management plan.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "RES_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "Use visible leadership support and change network to reinforce desired behaviours and address resistance.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RES_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "Assess the effectiveness of resistance management interventions.",
      "outcomeIds": [
        "RES_O2",
        "RES_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RES_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise and highlight examples of positive adoption and support for the change to positively influence resisters.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RES_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use feedback channels to identify unresolved concerns before they become entrenched resistance.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RES_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Risk Management",
      "action": "Review resistance-related risks and update mitigations where required.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RES_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "Review resistance themes and organisational responses through governance and leadership forums.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RES_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "Use organisational learning to strengthen future resistance management approaches.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RES_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "Embed resistance management disciplines into organisational change delivery standards.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RES_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Maintain open dialogue with stakeholders to surface concerns early and prevent future resistance.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RES_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RES_043",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "Refine resistance management interventions using stakeholder insight and feedback.",
      "outcomeIds": [
        "RES_O2",
        "RES_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RES_044",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "Refine resistance management plans based on implementation experience and lessons learned.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RES_045",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "Embed behaviours that promote openness and psychological safety to encourage feedback and constructive challenge during change",
      "outcomeIds": [],
      "readinessScore": 4
    }
  ]
}
`,ms={componentId:"resistance",actionPrefix:"resistance-action",outcomePrefix:"resistance:outcome",fallbackOutcomes:[{id:"resistance:outcome:o1",text:"Potential sources of resistance have been identified and understood"},{id:"resistance:outcome:o2",text:"Strategies and interventions are in place to prevent and address resistance"},{id:"resistance:outcome:o3",text:"Resistance is actively managed and reduced throughout the change lifecycle"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour",Design:"Skills and Behaviour",Communication:"People Experience and Culture",Engagement:"People Experience and Culture",Reinforcement:"Skills and Behaviour"}},Wl=Ue(Hl,ms);function ql(n){return Me(n,ms,Wl)}function zl(n){return Ve(n,ms)}const Kl=`{
  "component": {
    "id": "RISK_MANAGEMENT",
    "name": "Risk Management"
  },
  "outcomes": [
    {
      "id": "RM_O1",
      "name": "Change risks have been identified and assessed"
    },
    {
      "id": "RM_O2",
      "name": "Risk mitigation and management activities are in place"
    },
    {
      "id": "RM_O3",
      "name": "Risks are proactively managed throughout the change lifecycle"
    }
  ],
  "actions": [
    {
      "id": "RM_001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Recognise that change-related risks may affect successful delivery, adoption, benefits realisation and sustainment.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RM_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "Begin discussions with sponsors, leaders and stakeholders about potential risks associated with the change.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RM_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify high-level areas of uncertainty, vulnerability and potential risk exposure.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RM_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify factors that could increase the likelihood of implementation, adoption or sustainment risks.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RM_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Gain initial agreement with sponsors that change risks will need to be identified, assessed and actively managed.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RM_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "Begin raising awareness at governance level of the importance of proactive, change related risk management.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RM_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous changes to identify recurring risk themes and vulnerabilities.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RM_008",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Conduct structured change risk assessment activities involving stakeholders and subject matter experts.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify and document risks that could affect successful delivery, adoption, benefit realisation or sustainment of the change.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Assess and categorise identified risks according to likelihood, impact, urgency and priority.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Apply structured risk assessment techniques to analyse consequences and exposure levels.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Establish and maintain an initial change risk register.",
      "outcomeIds": [
        "RM_O1",
        "RM_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "Engage stakeholders to identify risks from operational, behavioural, cultural and organisational perspectives.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Assess known concerns, previous change experiences and organisational vulnerabilities that may increase risk exposure.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "Use the completed change impact assessment to explore stakeholder perceptions of key concerns, risks and organisational vulnerabilities.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Assess processes, operating arrangements and dependencies to identify areas of elevated risk.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "Identify and assess critical dependencies that may increase the overall risk profile of the change.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Assess stakeholder confidence in the organisation's ability to manage risks associated with the change.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Assign ownership and accountability for identified risks.",
      "outcomeIds": [
        "RM_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RM_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Develop mitigation strategies and action plans for high-priority risks.",
      "outcomeIds": [
        "RM_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RM_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Integrate change risks into programme and organisational governance arrangements.",
      "outcomeIds": [
        "RM_O2",
        "RM_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RM_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Define risk monitoring indicators, thresholds and reporting arrangements.",
      "outcomeIds": [
        "RM_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RM_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Validate risk ratings and mitigation plans with relevant stakeholders and sponsors.",
      "outcomeIds": [
        "RM_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RM_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "Communicate significant risks and agreed mitigations to appropriate stakeholder groups.",
      "outcomeIds": [
        "RM_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RM_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "Use stakeholder insight and feedback to refine risk understanding and mitigation activities.",
      "outcomeIds": [
        "RM_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RM_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Incorporate risk mitigation activities into implementation, communications, learning and readiness plans.",
      "outcomeIds": [
        "RM_O2",
        "RM_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RM_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "Manage identified dependencies that increase overall change risk.",
      "outcomeIds": [
        "RM_O2",
        "RM_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RM_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "Test proposed controls and mitigations before implementation where practical.",
      "outcomeIds": [
        "RM_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RM_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Monitor change risks regularly using agreed review cycles, thresholds and governance forums.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RM_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Review and update risk ratings based on emerging evidence and implementation experience.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RM_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Escalate significant risks through agreed governance routes and obtain timely decisions where required.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RM_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Implement additional mitigation actions where existing controls are not sufficiently reducing risk exposure.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RM_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Assess the effectiveness of mitigation activities and controls.",
      "outcomeIds": [
        "RM_O2",
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RM_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "Gather stakeholder feedback on emerging risks, concerns and unintended consequences.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RM_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "Provide regular risk updates to stakeholders and leadership teams.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RM_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "Validate whether risk controls are operating as intended in practice.",
      "outcomeIds": [
        "RM_O2",
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RM_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "Review evolving dependencies and their impact on the risk profile.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RM_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Risk Management",
      "action": "Use lessons learned to improve current mitigation and control activities.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RM_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Embed change risk management into routine governance, planning and operational management processes.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RM_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Review long-term trends and recurring patterns in change-related risks.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RM_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Maintain proactive scanning for emerging risks associated with ongoing change and continuous improvement.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RM_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Continuously monitor strategic, operational and external dependencies that may create future risk exposure.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RM_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Use organisational learning to improve risk identification, assessment and mitigation approaches.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RM_044",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "Encourage proactive risk identification and escalation throughout the organisation.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RM_045",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "Recognise and reinforce behaviours that contribute to effective risk management.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RM_046",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Evaluate the maturity and effectiveness of the risk management approach on a regular basis.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RM_047",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Continuously improve risk management processes using lessons learned and organisational insight.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RM_048",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "Embed a culture of proactive risk management and continuous vigilance across the organisation.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,gs={componentId:"risk_management",actionPrefix:"risk-management-action",outcomePrefix:"risk-management:outcome",fallbackOutcomes:[{id:"risk-management:outcome:o1",text:"Change risks have been identified and assessed"},{id:"risk-management:outcome:o2",text:"Risk mitigation and management activities are in place"},{id:"risk-management:outcome:o3",text:"Risks are proactively managed throughout the change lifecycle"}],lensAliases:{"Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Strategic Direction and Leadership":"Planning and Risk","Skills and Behaviour":"Process and Sustainment",Governance:"Planning and Risk",Reinforcement:"Process and Sustainment"}},Yl=Ue(Kl,gs);function Jl(n){return Me(n,gs,Yl)}function Xl(n){return Ve(n,gs)}const Ql=`{
  "component": {
    "id": "SKILLS_LEARNING",
    "name": "Skills & Learning"
  },
  "outcomes": [
    {
      "id": "SL_O1",
      "name": "Future learning and capability requirements have been identified"
    },
    {
      "id": "SL_O2",
      "name": "Learning interventions have been designed and delivered"
    },
    {
      "id": "SL_O3",
      "name": "Learning outcomes are achieved and sustained"
    }
  ],
  "actions": [
    {
      "id": "SL_001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Recognise that stakeholders will need appropriate knowledge, skills and learning support to operate successfully in the future state.",
      "outcomeIds": [
        "SL_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SL_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "Begin discussions with leaders, managers and stakeholders about likely learning and development needs.",
      "outcomeIds": [
        "SL_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SL_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Identify stakeholder groups likely to require learning or development support.",
      "outcomeIds": [
        "SL_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SL_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Explore stakeholder views on likely learning preferences, barriers and support needs to ensure inclusivity.",
      "outcomeIds": [
        "SL_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SL_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Identify high-level learning risks that could affect successful implementation or adoption.",
      "outcomeIds": [
        "SL_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SL_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "Gain initial agreement that learning and development activities will be required as part of the change approach.",
      "outcomeIds": [
        "SL_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SL_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Begin raising awareness that learning support will be provided to help stakeholders prepare for the change.",
      "outcomeIds": [
        "SL_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SL_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous changes relating to learning needs, training delivery and user support.",
      "outcomeIds": [
        "SL_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SL_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Define and document the knowledge, skills and behaviours required to operate successfully in the future state.",
      "outcomeIds": [
        "SL_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "SL_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Assess current capability levels across impacted stakeholder groups.",
      "outcomeIds": [
        "SL_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "SL_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Conduct a structured learning needs and skills gap assessment.",
      "outcomeIds": [
        "SL_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "SL_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Assess the scale, complexity and impact of learning requirements across the organisation.",
      "outcomeIds": [
        "SL_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "SL_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Validate learning preferences, barriers and support requirements with impacted stakeholders.",
      "outcomeIds": [
        "SL_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "SL_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "Develop a structured learning and capability development approach aligned to change objectives.",
      "outcomeIds": [
        "SL_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SL_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "Define learning objectives, target audiences, learning outcomes and delivery principles.",
      "outcomeIds": [
        "SL_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SL_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Dependency Management",
      "action": "Assess dependencies between learning activities and engagement and communications, readiness, process and implementation plans.",
      "outcomeIds": [
        "SL_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SL_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "Define accountability for learning design, delivery, evaluation and ongoing support.",
      "outcomeIds": [
        "SL_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SL_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "Define a training plan to include the learning methods, channels and support mechanisms that will be used to deliver learning and development activities.",
      "outcomeIds": [
        "SL_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SL_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "Develop learning materials, guidance, resources and support content.",
      "outcomeIds": [
        "SL_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "SL_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Deliver learning activities to impacted stakeholder groups.",
      "outcomeIds": [
        "SL_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "SL_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Provide role-specific learning interventions where different groups have different learning requirements.",
      "outcomeIds": [
        "SL_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "SL_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Develop and support local learning champions, coaches or trainers.",
      "outcomeIds": [
        "SL_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "SL_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "Implement mechanisms to assess attendance, participation and learning completion.",
      "outcomeIds": [
        "SL_O2",
        "SL_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "SL_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate learning opportunities, schedules and expectations to stakeholders.",
      "outcomeIds": [
        "SL_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "SL_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Dependency Management",
      "action": "Coordinate training activities with implementation milestones and readiness requirements.",
      "outcomeIds": [
        "SL_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "SL_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Risk Management",
      "action": "Identify and manage risks associated with learning delivery and learner readiness.",
      "outcomeIds": [
        "SL_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "SL_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "Monitor learning delivery through governance and reporting processes.",
      "outcomeIds": [
        "SL_O2",
        "SL_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "SL_028",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "Evaluate whether learning objectives have been achieved.",
      "outcomeIds": [
        "SL_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SL_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Testing & Validation",
      "action": "Assess whether participants can demonstrate required knowledge and skills.",
      "outcomeIds": [
        "SL_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SL_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "Track learning performance data and identify continuing capability gaps.",
      "outcomeIds": [
        "SL_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SL_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Provide refresher learning and targeted support where capability gaps remain.",
      "outcomeIds": [
        "SL_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SL_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Offer ongoing coaching and support to reinforce learning transfer.",
      "outcomeIds": [
        "SL_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SL_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather learner feedback to improve learning content and delivery.",
      "outcomeIds": [
        "SL_O2",
        "SL_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SL_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather feedback about learning effectiveness, confidence and practical application.",
      "outcomeIds": [
        "SL_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SL_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "Review learning outcomes and capability measures through governance processes.",
      "outcomeIds": [
        "SL_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SL_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "Refine learning approaches using evaluation findings and implementation experience.",
      "outcomeIds": [
        "SL_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SL_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise achievement and application of learning within teams and stakeholder groups.",
      "outcomeIds": [
        "SL_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SL_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Share learning successes, progress and achievement milestones.",
      "outcomeIds": [
        "SL_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SL_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Maintain continuous learning opportunities to support evolving organisational needs.",
      "outcomeIds": [
        "SL_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "SL_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "Monitor long-term capability development and learning effectiveness.",
      "outcomeIds": [
        "SL_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "SL_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "Use organisational learning and insight to improve future learning approaches.",
      "outcomeIds": [
        "SL_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "SL_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "Embed learning and capability development into organisational improvement and change delivery practices.",
      "outcomeIds": [
        "SL_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "SL_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Promote a culture of continuous learning and development across the organisation.",
      "outcomeIds": [
        "SL_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "SL_044",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "Recognise achievement and application of learning within teams and stakeholder groups.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "SL_045",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "Promote a culture of continuous learning and development across the organisation.",
      "outcomeIds": [],
      "readinessScore": 4
    }
  ]
}
`,ps={componentId:"skills_learning",actionPrefix:"skills-learning-action",outcomePrefix:"skills-learning:outcome",fallbackOutcomes:[{id:"skills-learning:outcome:o1",text:"Future learning and capability requirements have been identified"},{id:"skills-learning:outcome:o2",text:"Learning interventions have been designed and delivered"},{id:"skills-learning:outcome:o3",text:"Learning outcomes are achieved and sustained"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Process and Sustainment":"Skills and Behaviour",Governance:"Skills and Behaviour",Communication:"People Experience and Culture",Reinforcement:"Skills and Behaviour",Design:"Skills and Behaviour","Dependency Management":"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour","Testing and Validation":"Skills and Behaviour"}},Zl=Ue(Ql,ps);function ec(n){return Me(n,ps,Zl)}function nc(n){return Ve(n,ps)}const tc=`{
  "component": {
    "id": "SENIOR_SPONSORSHIP_GOVERNANCE",
    "name": "Senior Sponsorship & Governance"
  },
  "actions": [
    {
      "id": "SSG_0001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Recognise the need for visible senior sponsorship and governance to support successful change delivery.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SSG_0002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "Begin discussions with senior leaders about their role in supporting and sponsoring the change.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SSG_0003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Identify areas where leadership support and governance oversight may be required.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SSG_0004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Explore stakeholder perceptions of current leadership support for change.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SSG_0005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Secure initial leadership commitment to establish sponsorship and governance arrangements.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SSG_0006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Begin communicating the importance of leadership visibility and sponsorship during change.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SSG_0007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous changes relating to governance and sponsorship effectiveness.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SSG_0008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Identify potential senior leaders and sponsors who could support the change.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SSG_0009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Confirm the Senior Responsible Owner and executive sponsors required to lead the change.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_0010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Assess sponsorship coverage requirements across impacted business areas and stakeholder groups.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_0011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Define and document sponsor roles, responsibilities and expected sponsorship behaviours.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_0012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Develop and document governance structures, decision-making routes and escalation arrangements.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_0013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a sponsor coalition model with representation from impacted organisational areas.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_0014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Secure commitment from identified sponsors and confirm their capacity to support the change.",
      "outcomeIds": [
        "SSG_O1",
        "SSG_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_0015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Assess stakeholder confidence in leadership and sponsorship support for the change.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_0016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify gaps in sponsor visibility, influence, commitment and representation.",
      "outcomeIds": [
        "SSG_O1",
        "SSG_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_0017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate confirmed sponsorship arrangements and the role sponsors will play in the change.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_0018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Establish initial sponsor engagement activities with impacted stakeholder groups.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_0019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Obtain formal approval of governance arrangements, accountability structures and sponsor responsibilities.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 2
    },
    {
      "id": "SSG_0020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Establish governance forums with defined terms of reference and decision-making authority.",
      "outcomeIds": [
        "SSG_O1",
        "SSG_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "SSG_0021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Define and socialise escalation routes for risks, issues and decisions.",
      "outcomeIds": [
        "SSG_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "SSG_0022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Training & Learning",
      "action": "Provide sponsor coaching on sponsorship responsibilities, leadership behaviours and resistance management.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "SSG_0023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Develop a sponsor engagement and communication approach.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "SSG_0024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Ensure sponsors regularly communicate the purpose and importance of the change.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "SSG_0025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Create opportunities for sponsors to engage directly with stakeholders.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "SSG_0026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Establish mechanisms to gather feedback on sponsor visibility and effectiveness.",
      "outcomeIds": [
        "SSG_O2",
        "SSG_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "SSG_0027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use sponsors to address stakeholder concerns and demonstrate leadership commitment.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "SSG_0028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Begin using sponsors to reinforce desired behaviours and messages.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "SSG_0029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Use governance forums routinely to review progress, risks, decisions and benefits.",
      "outcomeIds": [
        "SSG_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SSG_0030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Monitor sponsorship effectiveness using agreed indicators and feedback.",
      "outcomeIds": [
        "SSG_O2",
        "SSG_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SSG_0031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Review accountability and ownership to ensure responsibilities remain clear and effective.",
      "outcomeIds": [
        "SSG_O1",
        "SSG_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SSG_0032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Risk Management",
      "action": "Use governance to actively manage strategic risks, barriers and dependencies.",
      "outcomeIds": [
        "SSG_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SSG_0033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Ensure sponsor coalition members actively support decisions and prioritisation activities.",
      "outcomeIds": [
        "SSG_O2",
        "SSG_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SSG_0034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Maintain visible sponsor involvement throughout implementation and adoption.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "SSG_0035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Use sponsor-led communications to reinforce progress, successes and key messages.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "SSG_0036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Ensure sponsors respond visibly to stakeholder feedback and emerging concerns.",
      "outcomeIds": [
        "SSG_O2",
        "SSG_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SSG_0037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Assess stakeholder confidence in leadership support for the change.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "SSG_0038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Use sponsors to recognise progress and celebrate achievements.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "SSG_0039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Embed sponsorship and governance practices into normal organisational management arrangements.",
      "outcomeIds": [
        "SSG_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "SSG_0040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Regularly review governance effectiveness and improve decision-making processes.",
      "outcomeIds": [
        "SSG_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "SSG_0041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Maintain an active sponsor coalition that supports organisational priorities and future change.",
      "outcomeIds": [
        "SSG_O2",
        "SSG_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "SSG_0042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Ensure senior leaders continue to visibly champion change as part of routine leadership practice.",
      "outcomeIds": [
        "SSG_O2",
        "SSG_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "SSG_0043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Embed sponsor visibility into organisational culture and leadership behaviours",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 4
    },
    {
      "id": "SSG_0044",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Measure long-term stakeholder confidence in leadership support for change.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 4
    },
    {
      "id": "SSG_0045",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Maintain regular dialogue between sponsors, leaders and stakeholder groups.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 4
    },
    {
      "id": "SSG_0046",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Use sponsor-led recognition to reinforce desired organisational behaviours.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 4
    },
    {
      "id": "SSG_0047",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Demonstrate visible leadership commitment to continuous improvement and ongoing change adoption.",
      "outcomeIds": [
        "SSG_O2",
        "SSG_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "SSG_0048",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Identify high-level governance, decision-making and sponsorship risks that may affect delivery",
      "outcomeIds": [],
      "readinessScore": 0
    },
    {
      "id": "SSG_0049",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Identify sponsorship and governance risks that could affect delivery, adoption or benefits realisation",
      "outcomeIds": [],
      "readinessScore": 1
    },
    {
      "id": "SSG_0050",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Assess dependencies between governance effectiveness and other change management initiatives",
      "outcomeIds": [],
      "readinessScore": 1
    },
    {
      "id": "SSG_0051",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Define measures and indicators to monitor sponsorship and governance effectiveness.",
      "outcomeIds": [],
      "readinessScore": 1
    },
    {
      "id": "SSG_0052",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Implement actions to address sponsorship, governance and decision-making risks",
      "outcomeIds": [],
      "readinessScore": 2
    },
    {
      "id": "SSG_0053",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Monitor governance effectiveness and sponsor engagement against agreed measures.",
      "outcomeIds": [],
      "readinessScore": 2
    },
    {
      "id": "SSG_0054",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Align governance activities with implementation milestones, programme plans and change management priorities",
      "outcomeIds": [],
      "readinessScore": 2
    },
    {
      "id": "SSG_0055",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Measure and address address readiness gaps and residual organisational barriers affecting successful implementation.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "SSG_0056",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Monitor readiness-related risks and implement additional mitigations where readiness concerns emerge.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "SSG_0057",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Monitor long-term organisational change capacity, resilience and preparedness for future transformation activity",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "SSG_0058",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Reinforcement",
      "action": "Embed organisational readiness assessment into standard organisational change and transformation methodologies",
      "outcomeIds": [],
      "readinessScore": 4
    }
  ],
  "outcomes": [
    {
      "id": "SSG_O1",
      "name": "Clear sponsorship and governance structures are established"
    },
    {
      "id": "SSG_O2",
      "name": "Sponsors actively lead and champion the change"
    },
    {
      "id": "SSG_O3",
      "name": "Governance and sponsorship drive successful delivery"
    }
  ]
}
`,hs={componentId:"sponsorship",actionPrefix:"sponsorship-action",outcomePrefix:"sponsorship:outcome",fallbackOutcomes:[{id:"sponsorship:outcome:o1",text:"Clear sponsorship and governance structures are established"},{id:"sponsorship:outcome:o2",text:"Sponsors actively lead and champion the change"},{id:"sponsorship:outcome:o3",text:"Governance and sponsorship drive successful delivery"}]},sc=Ue(tc,hs);function ac(n){return Me(n,hs,sc)}function ic(n){return Ve(n,hs)}const oc=`{
  "component": {
    "id": "STAKEHOLDER_ENGAGEMENT_COMMS",
    "name": "Stakeholder Engagement & Comms"
  },
  "outcomes": [
    {
      "id": "SEC_O1",
      "name": "Stakeholders have been identified, analysed and prioritised"
    },
    {
      "id": "SEC_O2",
      "name": "Stakeholders are actively engaged and informed"
    },
    {
      "id": "SEC_O3",
      "name": "Engagement and communications support successful adoption"
    }
  ],
  "actions": [
    {
      "id": "SEC_001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Recognise the importance of stakeholder engagement and communication in achieving successful change outcomes.",
      "outcomeIds": [
        "SEC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SEC_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Begin discussions with leaders and teams about who may be affected by or interested in the change.",
      "outcomeIds": [
        "SEC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SEC_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify high-level stakeholder groups that may influence, support or be impacted by the change.",
      "outcomeIds": [
        "SEC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SEC_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Explore initial stakeholder perspectives, expectations and concerns relating to the change.",
      "outcomeIds": [
        "SEC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SEC_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Begin communicating the reason for the change and the importance of stakeholder involvement.",
      "outcomeIds": [
        "SEC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SEC_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Gain initial agreement that stakeholder engagement and communication activities will be required.",
      "outcomeIds": [
        "SEC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SEC_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify potential communication challenges, risks and opportunities.",
      "outcomeIds": [
        "SEC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SEC_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous stakeholder engagement and communication activities.",
      "outcomeIds": [
        "SEC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "SEC_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify and document stakeholders likely to influence, support, be affected by or be impacted by the change.",
      "outcomeIds": [
        "SEC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "SEC_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess stakeholder influence, interest, commitment, capability and degree of impact.",
      "outcomeIds": [
        "SEC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "SEC_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Segment stakeholders into defined groups with common characteristics, needs and engagement requirements.",
      "outcomeIds": [
        "SEC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "SEC_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Conduct structured engagement activities to understand stakeholder perspectives, expectations and concerns.",
      "outcomeIds": [
        "SEC_O1",
        "SEC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SEC_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Document stakeholder concerns, opportunities, communication preferences and support needs.",
      "outcomeIds": [
        "SEC_O1",
        "SEC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SEC_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a structured stakeholder engagement and communications approach.",
      "outcomeIds": [
        "SEC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SEC_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Define stakeholder engagement objectives, communication objectives and desired outcomes.",
      "outcomeIds": [
        "SEC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SEC_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Develop stakeholder-focused messages that explain the change consistently and appropriately.",
      "outcomeIds": [
        "SEC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SEC_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "Assess dependencies between engagement activities and other change workstreams.",
      "outcomeIds": [
        "SEC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SEC_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Define sponsorship, accountability and governance arrangements for stakeholder engagement and communications.",
      "outcomeIds": [
        "SEC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SEC_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Implement stakeholder engagement activities using appropriate channels and methods.",
      "outcomeIds": [
        "SEC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "SEC_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Implement targeted communications tailored to different stakeholder groups.",
      "outcomeIds": [
        "SEC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "SEC_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Provide opportunities for stakeholders to participate, contribute and influence aspects of the change.",
      "outcomeIds": [
        "SEC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "SEC_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Ensure communications remain timely, relevant and aligned to programme developments.",
      "outcomeIds": [
        "SEC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "SEC_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Establish mechanisms for gathering stakeholder feedback and engagement insight.",
      "outcomeIds": [
        "SEC_O2",
        "SEC_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "SEC_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Review stakeholder engagement progress through governance mechanisms.",
      "outcomeIds": [
        "SEC_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "SEC_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Define measures to assess communication reach, engagement levels and stakeholder understanding.",
      "outcomeIds": [
        "SEC_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "SEC_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "Coordinate engagement activities with communications, learning, readiness and adoption activities.",
      "outcomeIds": [
        "SEC_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "SEC_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a detailed stakeholder engagement and communications strategy and plan.",
      "outcomeIds": [
        "SEC_O2",
        "SEC_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "SEC_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Equip sponsors, managers and change agents and change champions with communication materials and engagement guidance.",
      "outcomeIds": [
        "SEC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "SEC_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Monitor stakeholder engagement levels, sentiment and communication effectiveness.",
      "outcomeIds": [
        "SEC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SEC_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Respond to stakeholder concerns, questions and emerging issues in a timely manner.",
      "outcomeIds": [
        "SEC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SEC_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Adapt communications using stakeholder feedback and implementation experience.",
      "outcomeIds": [
        "SEC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SEC_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use stakeholder representatives, change agents and change champions and other networks to strengthen engagement activity.",
      "outcomeIds": [
        "SEC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SEC_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Assess stakeholder understanding, involvement and support for the change.",
      "outcomeIds": [
        "SEC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SEC_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Review engagement effectiveness and communication performance through governance forums.",
      "outcomeIds": [
        "SEC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SEC_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Use feedback to refine engagement and communication approaches using evidence, insight and lessons learned.",
      "outcomeIds": [
        "SEC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SEC_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "Align engagement activities with implementation, adoption and readiness priorities.",
      "outcomeIds": [
        "SEC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SEC_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Use engagement and communication metrics to inform planning and decision-making.",
      "outcomeIds": [
        "SEC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SEC_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Promote key successes, achievements and progress through communication channels.",
      "outcomeIds": [
        "SEC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "SEC_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Maintain continuous engagement with stakeholders beyond implementation.",
      "outcomeIds": [
        "SEC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "SEC_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Ensure communications continue to support adoption, optimisation and continuous improvement.",
      "outcomeIds": [
        "SEC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "SEC_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Measure long-term stakeholder confidence, advocacy and engagement.",
      "outcomeIds": [
        "SEC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "SEC_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Use organisational learning to continuously improve engagement and communication approaches.",
      "outcomeIds": [
        "SEC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "SEC_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Embed effective engagement and communication practices into organisational change standards.",
      "outcomeIds": [
        "SEC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "SEC_044",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Engagement and communication strategy and plans to be approved and shared across the organisation ",
      "outcomeIds": [],
      "readinessScore": 2
    },
    {
      "id": "SEC_045",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify potential change network members to support engagement and communication activities",
      "outcomeIds": [],
      "readinessScore": 1
    },
    {
      "id": "SEC_046",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Change Network continues to act as a 2-way conduit between the programme and stakeholders and monitors engagement impact and effectiveness",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "SEC_047",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Share success stories around the change and adoption to inspire others ",
      "outcomeIds": [],
      "readinessScore": 4
    }
  ]
}
`,fs={componentId:"stakeholder",actionPrefix:"stakeholder-action",outcomePrefix:"stakeholder:outcome",fallbackOutcomes:[{id:"stakeholder:outcome:o1",text:"Stakeholders have been identified, analysed and prioritised"},{id:"stakeholder:outcome:o2",text:"Stakeholders are actively engaged and informed"},{id:"stakeholder:outcome:o3",text:"Engagement and communications support successful adoption"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Reinforcement:"People Experience and Culture"}},rc=Ue(oc,fs);function lc(n){return Me(n,fs,rc)}function cc(n){return Ve(n,fs)}const dc=`{
  "component": {
    "id": "TRANSFER_TO_BAU",
    "name": "Transfer to BAU"
  },
  "outcomes": [
    {
      "id": "BAU_O1",
      "name": "Operational ownership and accountability have been established"
    },
    {
      "id": "BAU_O2",
      "name": "Business-as-usual capabilities and support arrangements are in place"
    },
    {
      "id": "BAU_O3",
      "name": "The change is fully embedded within normal operational management"
    }
  ],
  "actions": [
    {
      "id": "BAU_001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Recognise that ownership of the change will need to transfer from the programme into business-as-usual operations.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "BAU_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "Begin discussions with operational leaders regarding future ownership and sustainment responsibilities.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "BAU_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Identify areas of the change that will require ongoing operational management after implementation.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "BAU_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Explore operational stakeholder views regarding long-term ownership and support requirements.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "BAU_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Secure initial agreement that transition-to-BAU planning should form part of the change approach.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "BAU_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Begin raising awareness of future operational ownership and sustainment expectations.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "BAU_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Identify potential capability, resource and support requirements needed after programme closure.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "BAU_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous transitions to business-as-usual arrangements.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "BAU_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Identify potential future operational owners for the change, associated processes and ongoing outcomes.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Document activities, responsibilities, controls and measures requiring transition into business-as-usual management.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Assess operational readiness and capability to assume ownership of the change.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "Assess dependencies, assumptions and constraints that could affect transition to BAU.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Develop a structured transition and BAU transfer approach.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "Engage potential operational owners to validate expectations, responsibilities and support requirements.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Assess capability, resource, knowledge and support gaps affecting transition readiness.",
      "outcomeIds": [
        "BAU_O1",
        "BAU_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "Communicate proposed ownership, accountability and sustainment expectations.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Design future governance arrangements for post-implementation operational management.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Define operational measures, performance indicators and reporting requirements for post-transition management.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Formally assign ownership for processes, benefits, measures and sustainment activities.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 2
    },
    {
      "id": "BAU_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Develop a detailed transition-to-BAU plan.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BAU_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "Plan completion of outstanding dependencies required for transition.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BAU_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Risk Management",
      "action": "Identify and manage risks associated with operational handover and programme closure.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BAU_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Define exit criteria and readiness criteria for transition to BAU.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BAU_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Training & Learning",
      "action": "Prepare operational teams to manage and support the change without programme intervention.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BAU_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Training & Learning",
      "action": "Transfer operational knowledge, guidance and support resources to BAU teams.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BAU_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Implementation",
      "action": "Integrate new processes, measures and responsibilities into operational procedures.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BAU_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "Validate that operational teams can manage and support the change independently.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BAU_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Review transition progress through governance and assurance processes.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BAU_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Transfer operational governance responsibilities from programme structures to BAU structures.",
      "outcomeIds": [
        "BAU_O2",
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Implementation",
      "action": "Complete formal handover of ownership, controls and reporting arrangements.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Monitor operational ownership and effectiveness following handover.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Risk Management",
      "action": "Monitor transition risks and address issues emerging after handover.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "Gather feedback from operational owners regarding transition effectiveness.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Implementation",
      "action": "Operate new governance, support and reporting arrangements through BAU structures.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Review benefits, adoption and performance measures under operational ownership.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Refine BAU operating arrangements using post-handover experience.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "Close, transfer or manage remaining programme dependencies.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "Support operational leaders in sustaining desired behaviours and outcomes.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Embed ownership of change outcomes within routine operational governance.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BAU_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Monitor long-term operational performance, benefits and sustainment outcomes.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BAU_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Implementation",
      "action": "Ensure the change is managed entirely through business-as-usual operational processes.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BAU_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Use operational learning to improve future transition-to-BAU approaches.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BAU_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "Promote a culture where change ownership naturally transitions into operational management.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,bs={componentId:"transfer_bau",actionPrefix:"transfer-bau-action",outcomePrefix:"transfer-bau:outcome",fallbackOutcomes:[{id:"transfer-bau:outcome:o1",text:"Operational ownership and accountability have been established"},{id:"transfer-bau:outcome:o2",text:"Business-as-usual capabilities and support arrangements are in place"},{id:"transfer-bau:outcome:o3",text:"The change is fully embedded within normal operational management"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Process and Sustainment":"Process and Sustainment","Planning and Risk":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Skills and Behaviour":"Process and Sustainment",Governance:"Strategic Direction and Leadership","Measurement and Evaluation":"Process and Sustainment",Implementation:"Process and Sustainment","Risk Management":"Process and Sustainment",Design:"Process and Sustainment","Dependency Management":"Process and Sustainment",Reinforcement:"Process and Sustainment"}},uc=Ue(dc,bs);function mc(n){return Me(n,bs,uc)}function gc(n){return Ve(n,bs)}const pc=`{
  "component": {
    "id": "VISION",
    "name": "Vision"
  },
  "categories": [
    "Analysis & Insight",
    "Design",
    "Governance",
    "Engagement",
    "Communication",
    "Training & Learning",
    "Implementation",
    "Testing & Validation",
    "Measurement & Evaluation",
    "Risk Management",
    "Dependency Management",
    "Reinforcement"
  ],
  "outcomes": [
    {
      "id": "VISION_O1",
      "name": "A compelling future state has been defined"
    },
    {
      "id": "VISION_O2",
      "name": "The vision is shared and understood"
    },
    {
      "id": "VISION_O3",
      "name": "The vision is visible and guides the change"
    }
  ],
  "actions": [
    {
      "id": "VISION_001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Gather information on organisational priorities, programme objectives and expected outcomes to inform vision development.",
      "outcomeIds": [
        "VISION_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "VISION_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Identify key leaders who need to contribute to and endorse the vision.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O3"
      ],
      "readinessScore": 0
    },
    {
      "id": "VISION_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "Facilitate an initial vision workshop with the SRO, sponsors and key programme stakeholders to explore the future state.",
      "outcomeIds": [
        "VISION_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "VISION_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Document initial themes describing why the change is needed and what success may look like.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O2"
      ],
      "readinessScore": 0
    },
    {
      "id": "VISION_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Establish a process and timeline for drafting the vision statement.",
      "outcomeIds": [
        "VISION_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "VISION_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Create simple awareness messages explaining that a vision is being developed.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 0
    },
    {
      "id": "VISION_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Identify key stakeholder groups that need to be involved in early vision discussions.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O2"
      ],
      "readinessScore": 0
    },
    {
      "id": "VISION_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Conduct stakeholder listening sessions to understand current challenges and expectations.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O2"
      ],
      "readinessScore": 0
    },
    {
      "id": "VISION_009",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Gather feedback on stakeholders' perceptions of the proposed change.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O2"
      ],
      "readinessScore": 0
    },
    {
      "id": "VISION_010",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify common concerns, aspirations and opportunities that should influence the vision.",
      "outcomeIds": [
        "VISION_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "VISION_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Draft a formal vision statement describing the future state and intended outcomes.",
      "outcomeIds": [
        "VISION_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "VISION_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Testing & Validation",
      "action": "Test the draft vision with senior leaders to ensure strategic alignment.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O3"
      ],
      "readinessScore": 1
    },
    {
      "id": "VISION_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Refine the vision using feedback from sponsors and governance groups.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O3"
      ],
      "readinessScore": 1
    },
    {
      "id": "VISION_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Testing & Validation",
      "action": "Validate how the vision aligns with organisational objectives and programme benefits.",
      "outcomeIds": [
        "VISION_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "VISION_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a high-level vision narrative that can be used consistently across the programme.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 1
    },
    {
      "id": "VISION_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Run workshops with stakeholder groups to test understanding of the draft vision.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "VISION_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Collect structured feedback on whether the vision feels relevant and meaningful.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "VISION_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify gaps or ambiguities in the vision from a stakeholder perspective.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "VISION_019",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Design",
      "action": "Update the vision to reflect stakeholder insights and concerns.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "VISION_020",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Begin developing people-centred messaging explaining why the vision matters to different stakeholder groups.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "VISION_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Secure formal approval of the vision through programme governance.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "VISION_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a leadership communication plan to support vision rollout.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "VISION_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Equip sponsors with key messages, presentations and briefing materials.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "VISION_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Integrate the vision into programme governance documentation and reporting.",
      "outcomeIds": [
        "VISION_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "VISION_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Ensure leadership communications consistently reference the agreed vision.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "VISION_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Develop audience-specific communications describing the purpose, value and future-state ambition of the vision.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "VISION_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Deliver engagement sessions to build understanding and awareness of the vision.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "VISION_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Establish feedback channels to assess comprehension and acceptance of the vision.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "VISION_029",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Use change agents and sponsors to reinforce the vision locally.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "VISION_030",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Monitor stakeholder understanding through surveys, workshops or feedback sessions.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "VISION_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Ensure sponsors consistently communicate the vision during governance and operational meetings.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "VISION_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Embed the vision into organisational planning, governance and decision-making processes.",
      "outcomeIds": [
        "VISION_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "VISION_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Review leadership communications regularly for alignment and consistency.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "VISION_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Monitor leadership engagement in promoting the vision.",
      "outcomeIds": [
        "VISION_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "VISION_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Deploy a formal vision communication campaign across all stakeholder groups.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "VISION_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Establish regular feedback loops to assess understanding and engagement with the vision.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "VISION_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Monitor stakeholder awareness and adjust communications where necessary.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "VISION_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Use case studies and practical examples to demonstrate the vision in action.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "VISION_039",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Reinforce the vision through team meetings, departmental briefings and change network activities.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "VISION_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Ensure leaders consistently reference the vision during planning, governance and decision-making processes",
      "outcomeIds": [
        "VISION_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "VISION_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Review organisational priorities regularly to ensure continued alignment with the vision.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "VISION_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Use adoption and performance data to refine and strengthen how the vision is communicated.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "VISION_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Establish mechanisms to continuously evaluate whether organisational behaviours remain aligned to the vision.",
      "outcomeIds": [
        "VISION_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "VISION_044",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Measure how well staff understand and can articulate the vision.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 4
    },
    {
      "id": "VISION_045",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Capture and share success stories demonstrating delivery of the vision.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "VISION_046",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Encourage teams to identify local improvements that support achievement of the vision.",
      "outcomeIds": [
        "VISION_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "VISION_047",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Maintain continuous engagement and listening activities to keep the vision relevant.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O2"
      ],
      "readinessScore": 4
    },
    {
      "id": "VISION_048",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Reinforce the vision through recognition programmes and celebration of achievements.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "VISION_049",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Ensure the vision becomes part of everyday conversations, team objectives and organisational culture.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,xs={componentId:"vision",actionPrefix:"vision-action",outcomePrefix:"vision:outcome",fallbackOutcomes:[{id:"vision:outcome:o1",text:"A compelling future state has been defined"},{id:"vision:outcome:o2",text:"The vision is shared and understood"},{id:"vision:outcome:o3",text:"The vision is visible and guides the change"}]},hc=Ue(pc,xs);function fc(n){return Me(n,xs,hc)}function bc(n){return Ve(n,xs)}function yn(n){return $l(mc(Al(Ml(Bl(il(gl(ec(ql(lc(El(Jl(vl(bl(nl(ac(cl(fc(n))))))))))))))))))}function xc(n){return gc(_l(Vl(Fl(ol(pl(nc(zl(cc(kl(Xl(wl(xl(tl(ic(dl(bc(n)))))))))))))))))}function Sc(n,t){return t==="pathway-1"?yn(n):xc(n)}const Ot="nhs-digital-adoption-user-settings",Rt="nhs-digital-adoption-report-reminder-dismissed",yc="nhs-digital-adoption-engagement",ot="nhs-digital-adoption-onboarding-seen",Pt="nhs-digital-adoption-current-user-id",na="Default",vc=5*1024*1024,wc=new Set(["application/json","text/json"]),Nc="Unknown user",Cc={red:"test-data/adoption-phase1-red.json",amber:"test-data/adoption-phase2-amber.json",green:"test-data/adoption-phase3-green.json"},Dt={name:"",preferences:"",themeColor:"#005eb8",profileImageDataUrl:"",darkMode:!1,colorAccessibilityMode:"standard",phaseFocusMode:"auto",manualPhaseFocus:1,hideGuidedWorkflow:!1,showAdditionalGuidanceLinks:!0,showExternalLinksSection:!1};function Ec(n){return{...n,linkedTargets:(n.linkedTargets||[]).map(t=>({componentId:t.componentId,lens:t.lens}))}}function kc(n,t){return`${n}:${t}`}function jc(n){return n.orgProfile.trustName||n.orgProfile.projectName?!1:!Object.values(n.currentDraft).some(t=>Object.values(t).some(s=>s.score>0))}function ta(n){return!n.trustName.trim()}function Ic(n){return n.trim()||Nc}function Ac(n,t){return!!t&&(n.teamMembers||[]).some(s=>s.id===t)}function _c(n,t,s){const a=(n.teamMembers||[]).find(i=>i.id===t);return Ic((a==null?void 0:a.name)||s)}function Oc(n,t,s){var i;const a=wi[n];return((i=a==null?void 0:a[t])==null?void 0:i[s])||Lt[s]||Lt[0]}function Rc(n=new Date){const t=String(n.getMonth()+1).padStart(2,"0");return`${n.getFullYear()}-${t}`}function Pc(n=new Date){return new Date(n.getFullYear(),n.getMonth()-1,1).toLocaleString("en-GB",{month:"short",year:"numeric"})}function Dc(n,t,s){return["Monthly Adoption Reporting Reminder","","Organisation",`${t||"Unconfigured Trust"}${s?` / ${s}`:""}`,"","Action Required",`Please finalise the ${n} adoption month if it has not already been captured.`,"","Attached","Point-in-time JSON report export generated from the latest working draft.","","Next Step","Review, confirm finalisation status, and circulate to the team."].join(`
`)}function $c(n){const t=new TextEncoder().encode(n);let s="";return t.forEach(a=>{s+=String.fromCharCode(a)}),window.btoa(s)}function Tc(n,t=76){const s=[];for(let a=0;a<n.length;a+=t)s.push(n.slice(a,a+t));return s.join(`\r
`)}function Lc(n=new Date){const t=n.getDate(),s=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();return t>=s-6}function Bc(n=new Date){return n.toLocaleString("en-GB",{month:"short",year:"numeric"})}function Fc(n){const t=window.prompt(`Phase ${n} has changed. Enter delivery readiness grade (${rt.join("/")}).`,"C");if(!t)return null;const s=t.trim().toUpperCase();if(!rt.includes(s))return window.alert(`Invalid competence grade. Use one of ${rt.join(", ")}.`),null;const a=window.prompt(`Enter confidence score for Phase ${n} (${lt.join("-")}, where 1 is low and 5 is very high).`,"3");if(!a)return null;const i=Number(a.trim());return lt.includes(i)?{competence:s,confidence:i}:(window.alert(`Invalid confidence score. Use a number from ${lt.join(" to ")}.`),null)}function Kc(){var Ze,on;const n=bt,t=m.useMemo(()=>[...Gi],[]),[s,a]=m.useState("dashboard"),[i,r]=m.useState(n[0].id),[o,u]=m.useState(()=>typeof window>"u"?!0:window.innerWidth>=1024),[c,f]=m.useState(()=>{let p={};try{const E=En(qs);p=ns(dt(E))}catch(E){console.warn("Ignoring invalid persisted adoption data.",E)}const w=mt({view:"dashboard",orgProfile:p==null?void 0:p.orgProfile,currentDraft:p==null?void 0:p.currentDraft,objectives:p==null?void 0:p.objectives,suppressedAutoActions:p==null?void 0:p.suppressedAutoActions,auditLog:p==null?void 0:p.auditLog,history:p==null?void 0:p.history,phaseOverrides:p==null?void 0:p.phaseOverrides,pathwayChecks:p==null?void 0:p.pathwayChecks});return w.orgProfile.cstId||(w.orgProfile={...w.orgProfile,cstId:vs()}),yn(w)}),[l,x]=m.useState(""),[b,S]=m.useState(()=>En(Pt)||""),d=Sn.useRef(b);m.useEffect(()=>{d.current=b},[b]);const[A,_]=m.useState(null),[h,M]=m.useState(()=>{const p=En(Ot);return{...Dt,...p}}),U=Sn.useRef(h.name);m.useEffect(()=>{U.current=h.name},[h.name]);const te=Sn.useRef(null),D=Sn.useRef(null),[j,q]=m.useState(""),J=Sn.useRef(null),I=m.useMemo(()=>Rc(),[]),[ee,H]=m.useState(()=>En(Rt)||{}),[T,W]=m.useState(()=>!!En(ot)),[ce,ge]=m.useState(()=>!En(ot)),[De,R]=m.useState(!0),[Z,re]=m.useState([]),[Re,Le]=m.useState(!1),[He,pe]=m.useState(!1),[tn,$e]=m.useState(!1),Ke=Sn.useRef(!1),[sn,Ne]=m.useState(!1),v=Sn.useRef(!1),[L,N]=m.useState(!0),[P,V]=m.useState("medium"),ve=Sn.useRef({}),Ae=m.useCallback(()=>{ge(!1),T||(W(!0),en(ot,!0))},[T]),he=m.useMemo(()=>{const p=new Date,w=Pc(p),E=p.getDate()===1,F=c.history.some(B=>B.monthLabel===w);return{previousMonthLabel:w,isFirstDayOfMonth:E,hasFinalisedPreviousMonth:F,shouldNotify:E&&!F}},[c.history]),[Be,gn]=m.useState("test@test.com"),[k,X]=m.useState(""),[ne,me]=m.useState(""),Ee=Bc(),xe=Lc(),fe=m.useCallback((p,w)=>(c.currentDraft[p]||(c.currentDraft[p]={}),c.currentDraft[p][w]||(c.currentDraft[p][w]=Nt()),c.currentDraft[p][w]),[c]),Pe=h.showAdditionalGuidanceLinks!==!1,K=m.useMemo(()=>{const p=Ns(c,n);return{...p,nextSteps:p.nextSteps.map(w=>({...w,toolkitLinks:ht(na,w.componentId,"inputs",void 0,Pe).slice(0,3)}))}},[c,Pe]),qe=h.phaseFocusMode==="manual"&&h.manualPhaseFocus?h.manualPhaseFocus:K.currentPhase,Qe=Ai(c,p=>$t(p)||n[0],fe).sort((p,w)=>{const E=p.action.owner.localeCompare(w.action.owner);return E!==0?E:p.component.localeCompare(w.component)});m.useEffect(()=>{en(qs,c)},[c]),m.useEffect(()=>{en(Ot,h)},[h]),m.useEffect(()=>{en(Pt,b)},[b]),m.useEffect(()=>{en(Rt,ee)},[ee]),m.useEffect(()=>{X(`Action required: finalise ${he.previousMonthLabel} adoption report`),me(Dc(he.previousMonthLabel,c.orgProfile.trustName,c.orgProfile.projectName||""))},[he.previousMonthLabel,c.orgProfile.projectName,c.orgProfile.trustName]),m.useEffect(()=>{!Ke.current&&!ce&&ta(c.orgProfile)&&(Ke.current=!0,pe(!0))},[ce,c.orgProfile]),m.useEffect(()=>{v.current||He||ta(c.orgProfile)||Ac(c.orgProfile,b)||(v.current=!0,Ne(!0))},[c.orgProfile,b,He]),m.useEffect(()=>{s==="dashboard"&&te.current&&setTimeout(()=>{var E,F,B;const p=(E=te.current)==null?void 0:E.querySelector("#adoption-radar-chart");if(p){const Q=ji(c,t,n,fe);Vt(p,Q)}const w=(F=te.current)==null?void 0:F.querySelector("#adoption-component-radar-chart");if(w){const Q=Ii(n,fe,qe);Vt(w,Q,{maintainAspectRatio:!1,scales:{r:{min:0,max:5,ticks:{display:!0,stepSize:1,backdropColor:"transparent"}}}})}if(c.history.length>0){const Q=(B=te.current)==null?void 0:B.querySelector("#adoption-line-chart");if(Q){const ae={labels:c.history.map(de=>de.monthLabel),datasets:[{label:"Adoption Score",data:c.history.map(de=>de.overallPercentage||0),borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",fill:!0,tension:.4}]};Ma(Q,ae)}}},100)},[s,c,fe,t,n,qe,L,P]),m.useEffect(()=>{const p=()=>{u(window.innerWidth>=1024)};return p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}},[]),m.useEffect(()=>{typeof document<"u"&&(document.documentElement.dataset.nhsThemeMode=h.darkMode?"dark":"light")},[h.darkMode]),m.useEffect(()=>{var w;const p=s==="assessment"?`component:${i}`:`view:${s}`;(w=ve.current[p])==null||w.scrollIntoView({block:"nearest",behavior:"smooth"})},[i,s]);const Ye=()=>typeof window>"u"?!1:window.innerWidth<1024,We=m.useCallback(()=>{var p;(p=D.current)==null||p.scrollTo({top:0,behavior:"auto"})},[]),Je=m.useCallback(p=>{a(w=>w===p?w:(re(E=>[w,...E].slice(0,20)),p)),Ye()&&u(!1)},[]),y=p=>{Je(p)},O=m.useCallback(()=>{re(p=>{const[w,...E]=p;return w?(a(w),window.innerWidth<1024&&u(!1),E):(window.location.hash="#/",p)})},[]),z=m.useCallback(p=>{$t(p)&&(r(p),Je("assessment"),We())},[Je,We]),[oe,ye]=m.useState(null),Fe=m.useCallback((p,w,E)=>{ye({lens:w,actionId:E}),z(p)},[z]);m.useEffect(()=>{We()},[We,s]);function le(p,w){if(!w.length)return p.auditLog;const E=_c(p.orgProfile,d.current,U.current||""),F=w.map(B=>Sr({actor:E,eventType:B.eventType,entityType:B.entityType,entityId:B.entityId,summary:B.summary,trustName:B.trustName??p.orgProfile.trustName,projectName:B.projectName??p.orgProfile.projectName,componentId:B.componentId,lens:B.lens,reason:B.reason,before:B.before,after:B.after,source:B.source,importedAt:B.importedAt}));return xt([...p.auditLog||[],...F])}const Xe=m.useCallback((p,w,E)=>{f(F=>{var je;const B=((je=F.currentDraft[p])==null?void 0:je[w])||Nt(),Q={...F,currentDraft:{...F.currentDraft,[p]:{...F.currentDraft[p],[w]:oa(E)}}},ae=[];B.score!==E.score&&ae.push({eventType:"entry-score-updated",entityType:"entry",entityId:`${p}:${w}`,summary:`Updated readiness score for ${p} / ${w}: ${B.score} -> ${E.score}`,componentId:p,lens:w,before:{score:B.score},after:{score:E.score},source:"local"}),(B.justification||"")!==(E.justification||"")&&ae.push({eventType:"entry-justification-updated",entityType:"entry",entityId:`${p}:${w}`,summary:`Updated justification for ${p} / ${w}`,componentId:p,lens:w,before:{justification:B.justification||""},after:{justification:E.justification||""},source:"local"}),(B.evidence||"")!==(E.evidence||"")&&ae.push({eventType:"entry-evidence-updated",entityType:"entry",entityId:`${p}:${w}`,summary:`Updated evidence for ${p} / ${w}`,componentId:p,lens:w,before:{evidence:B.evidence||""},after:{evidence:E.evidence||""},source:"local"});const de=new Map(B.actions.map(ue=>[ue.id,ue]));return E.actions.forEach(ue=>{const _e=de.get(ue.id);if(!_e){ae.push({eventType:"action-created",entityType:"action",entityId:ue.id,summary:`Created action in ${p} / ${w}`,componentId:p,lens:w,after:{text:ue.text,status:ue.status,owner:ue.owner,actionType:ue.actionType},source:"local"});return}const $n=JSON.stringify({text:_e.text,status:_e.status,owner:_e.owner,actionType:_e.actionType,notes:_e.notes,dueDate:_e.dueDate,startDate:_e.startDate,evidence:_e.evidence}),xn=JSON.stringify({text:ue.text,status:ue.status,owner:ue.owner,actionType:ue.actionType,notes:ue.notes,dueDate:ue.dueDate,startDate:ue.startDate,evidence:ue.evidence});$n!==xn&&ae.push({eventType:"action-updated",entityType:"action",entityId:ue.id,summary:`Updated action in ${p} / ${w}`,componentId:p,lens:w,before:{text:_e.text,status:_e.status,owner:_e.owner,actionType:_e.actionType},after:{text:ue.text,status:ue.status,owner:ue.owner,actionType:ue.actionType},source:"local"})}),{...yn(Q),auditLog:le(F,ae)}})},[le]),Se=m.useCallback((p,w)=>{f(E=>{const F=E.objectives[p]||[],B={...E,objectives:{...E.objectives,[p]:w}};return JSON.stringify(F)!==JSON.stringify(w)?{...B,auditLog:le(E,[{eventType:"objectives-updated",entityType:"objective",entityId:p,summary:`Updated component outcomes for ${p}`,componentId:p,before:{objectiveCount:F.length},after:{objectiveCount:w.length},source:"local"}])}:B})},[le]),Te=m.useCallback(p=>{const w=ra(c.orgProfile);if(w.isValid)return!0;const E=w.errors.map(F=>`- ${F.message}`).join(`
`);return window.confirm(`${p} has CST warnings:

${E}

Continue anyway?`)},[c.orgProfile]),be=m.useCallback(p=>{q(p)},[]),vn=m.useCallback(()=>{if(!Te("Export JSON"))return;const w=zs(c);qn(`adoption-assessment-${(c.orgProfile.trustName||"export").replace(/\s+/g,"_")}.json`,JSON.stringify(w,null,2),"application/json"),be("Assessment export downloaded.")},[be,Te,c]),pn=m.useCallback(()=>{var p;(p=J.current)==null||p.click()},[]),hn=m.useCallback(async p=>{var B,Q,ae,de;const w=(B=p.target.files)==null?void 0:B[0];if(!w)return;const E=w.name.toLowerCase().endsWith(".json"),F=!w.type||wc.has(w.type);if(!E||!F){be("Import failed. Please choose a valid JSON file."),window.alert("Import failed. Please choose a valid JSON file."),p.target.value="";return}if(w.size>vc){be("Import failed. The selected file is larger than 5 MB."),window.alert("Import failed. The selected file is larger than 5 MB."),p.target.value="";return}try{const ke=await w.text(),je=dt(JSON.parse(ke)),ue=()=>{f(Hn=>{const wn=yn(Ks(je,Hn));return wn.orgProfile.cstId||(wn.orgProfile={...wn.orgProfile,cstId:vs()}),{...wn,auditLog:le(wn,[{eventType:"data-imported",entityType:"system",summary:`Imported assessment data from ${w.name}`,after:{fileName:w.name},source:"local"}])}}),a("dashboard"),be("Assessment import complete. Dashboard updated.")};if(jc(c)){ue();return}const _e=(Q=je.orgProfile)==null?void 0:Q.cstId,$n=c.orgProfile.cstId,xn=c.orgProfile.projectName||c.orgProfile.trustName||"your currently loaded programme",Vn=((ae=je.orgProfile)==null?void 0:ae.projectName)||((de=je.orgProfile)==null?void 0:de.trustName)||w.name;if(_e&&_e!==$n){if(!window.confirm(`"${Vn}" looks like a different programme than "${xn}".

Importing will replace everything currently loaded. Continue?`)){be("Import cancelled.");return}ue();return}if(!_e&&!window.confirm(`"${Vn}" doesn't carry a programme ID (it may predate this feature).

Click OK to compare it against "${xn}" and merge item by item, or Cancel to load it as a different programme (replace everything).`)){ue();return}const Tn=Qr(c,je);if(!Tn.hasConflicts){f(Hn=>{const wn=yn(ea(Hn,je,{}));return{...wn,auditLog:le(wn,[{eventType:"data-imported",entityType:"system",summary:Tn.autoMergeSummary.length?`Merged import from ${w.name} (${Tn.autoMergeSummary.join(", ")})`:`Imported ${w.name} - no changes (already up to date)`,after:{fileName:w.name},source:"local"}])}}),a("dashboard"),be(Tn.autoMergeSummary.length?`Merged automatically: ${Tn.autoMergeSummary.join(", ")}.`:"Already up to date - nothing to import.");return}_({file:w,parsed:je,report:Tn})}catch{be("Import failed. Please verify the file contents."),window.alert("Unable to import adoption assessment. Please verify the file contents.")}finally{p.target.value=""}},[be,le,c]),Un=m.useCallback(p=>{if(!A)return;const{file:w,parsed:E}=A,F=Object.keys(p).length;f(B=>{const Q=yn(ea(B,E,p));return{...Q,auditLog:le(Q,[{eventType:"data-imported",entityType:"system",summary:`Merged import from ${w.name} (${F} item(s) resolved)`,after:{fileName:w.name},source:"local"}])}}),_(null),a("dashboard"),be("Import merged into current programme.")},[be,le,A]),Pn=m.useCallback(()=>{_(null),be("Import cancelled.")},[be]),kn=m.useCallback(p=>{const w=!!(p!=null&&p.replaceExisting);if(!xe){window.alert("Finalise Month is available during the final week of each month.");return}if(!Te("Finalise Month"))return;const F=c.history.length>0?Ns({...c,currentDraft:c.history[c.history.length-1].data},n).currentPhase:1;if(K.currentPhase>F){const Q=Fc(K.currentPhase);if(!Q){window.alert("Phase progression cancelled. Confidence and competence self-assessment is required when readiness phase changes.");return}const ae=[];if(n.filter(de=>de.phase<K.currentPhase).forEach(de=>{de.lenses.forEach(ke=>{var ue,_e;const je=(ue=c.currentDraft[de.id])==null?void 0:ue[ke];(!je||je.score<=0||!((_e=je.justification)!=null&&_e.trim()))&&ae.push(`${de.label} / ${ke}`)})}),ae.length>0){const de=window.prompt(`You're progressing from Phase ${F} to Phase ${K.currentPhase}, but ${ae.length} item(s) are incomplete. Please provide a justification.`);if(!de||!de.trim()){window.alert("Phase progression cancelled. A justification is required when prior phase items are missing.");return}f(ke=>({...{...ke,phaseOverrides:{...ke.phaseOverrides,[`phase-progression-${Date.now()}`]:de.trim()},orgProfile:{...ke.orgProfile,cst:{...ke.orgProfile.cst,phaseCapability:{...ke.orgProfile.cst.phaseCapability,[K.currentPhase]:{...Q,assessedAt:new Date().toISOString(),reason:"phase-change"}}}}},auditLog:le(ke,[{eventType:"profile-updated",entityType:"profile",summary:`Updated phase capability for phase ${K.currentPhase}`,after:{phase:K.currentPhase,competence:Q.competence,confidence:Q.confidence,rationale:de.trim()},source:"local"}])}))}else f(de=>({...{...de,orgProfile:{...de.orgProfile,cst:{...de.orgProfile.cst,phaseCapability:{...de.orgProfile.cst.phaseCapability,[K.currentPhase]:{...Q,assessedAt:new Date().toISOString(),reason:"phase-change"}}}}},auditLog:le(de,[{eventType:"profile-updated",entityType:"profile",summary:`Updated phase capability for phase ${K.currentPhase}`,after:{phase:K.currentPhase,competence:Q.competence,confidence:Q.confidence},source:"local"}])}))}const B=Ys(c.currentDraft,K.overallPct);f(Q=>{const ae=w?Q.history.map(ke=>ke.monthLabel===B.monthLabel?B:ke):[...Q.history,B];return{...{...Q,history:ae},auditLog:le(Q,[{eventType:"month-finalized",entityType:"history",entityId:B.monthLabel,summary:`${w?"Re-finalized":"Finalized"} monthly snapshot for ${B.monthLabel}`,after:{monthLabel:B.monthLabel,overallPercentage:B.overallPercentage},source:"local"}])}}),a("dashboard")},[le,n,Te,xe,K.currentPhase,K.overallPct,c,c.currentDraft,c.history]),Dn=m.useCallback(()=>{if(!Te("Finalise Prior Month"))return;const w=he.previousMonthLabel;if(c.history.some(Q=>Q.monthLabel===w)){window.alert(`${w} has already been finalised.`);return}const F=new Date;F.setMonth(F.getMonth()-1);const B=Ys(c.currentDraft,K.overallPct,F);f(Q=>({...{...Q,history:[...Q.history,B]},auditLog:le(Q,[{eventType:"prior-month-finalized",entityType:"history",entityId:B.monthLabel,summary:`Finalized prior month snapshot for ${B.monthLabel}`,after:{monthLabel:B.monthLabel,overallPercentage:B.overallPercentage},source:"local"}])}))},[le,Te,K.overallPct,he.previousMonthLabel,c.currentDraft,c.history]),vt=m.useCallback(async p=>{try{const w=await fetch(Cc[p]);if(!w.ok)throw new Error(`Failed to load sample data: ${w.status}`);const E=dt(await w.json());f(F=>{const B=yn(Ks(E,F));return{...B,auditLog:le(B,[{eventType:"example-data-loaded",entityType:"system",summary:"Loaded example assessment data",source:"local"}])}}),a("dashboard"),be("Example assessment data loaded."),Ye()&&u(!1)}catch(w){console.error(w),be("Unable to load example data right now."),window.alert("Unable to load example data right now. Please try again.")}},[be,le]),Mn=m.useCallback(()=>{if(!window.confirm("Warning: this will reset all assessment data (organisation profile, scores, actions, and history) and sign you out. If you are worried, please export your data first. Continue?"))return;const w=yn(mt());f(w),a("dashboard"),M(Dt),en(Ot,Dt),localStorage.removeItem(yc),H({}),en(Rt,{}),W(!1),ge(!0),en(ot,!1),S(""),en(Pt,""),Ke.current=!1,pe(!1),v.current=!1,Ne(!1),Object.keys(localStorage).filter(E=>E.startsWith("nhs-digital-adoption-page-intro-seen:")).forEach(E=>localStorage.removeItem(E)),be("Assessment data has been reset and you have been signed out."),Ye()&&u(!1)},[be]),jn=m.useCallback(()=>({generatedAt:new Date().toISOString(),targetMonth:he.previousMonthLabel,finalisedPriorMonth:he.hasFinalisedPreviousMonth,report:zs(c)}),[he.hasFinalisedPreviousMonth,he.previousMonthLabel,c]),fn=m.useCallback(()=>`adoption-point-in-time-${he.previousMonthLabel.toLowerCase().replace(/\s+/g,"-")}.json`,[he.previousMonthLabel]),Jn=m.useCallback(()=>{const p=fn();qn(p,JSON.stringify(jn(),null,2),"application/json")},[fn,jn]),Xn=m.useCallback(()=>{const p=Be.trim()||"test@test.com",w=fn(),E=`${ne}

Attachment: ${w}`,F=`mailto:${p}?subject=${encodeURIComponent(k)}&body=${encodeURIComponent(E)}`;window.location.href=F},[fn,ne,k,Be]),Qn=m.useCallback(()=>{const p=Be.trim()||"test@test.com",w=fn(),E=JSON.stringify(jn(),null,2),F=Tc($c(E)),B=`----nhs-adoption-reminder-${Date.now()}`,Q=[`To: ${p}`,`Subject: ${k}`,"MIME-Version: 1.0",`Content-Type: multipart/mixed; boundary="${B}"`,"",`--${B}`,'Content-Type: text/plain; charset="UTF-8"',"Content-Transfer-Encoding: 8bit","",ne,"",`--${B}`,`Content-Type: application/json; name="${w}"`,"Content-Transfer-Encoding: base64",`Content-Disposition: attachment; filename="${w}"`,"",F,`--${B}--`,""].join(`\r
`),ae=he.previousMonthLabel.toLowerCase().replace(/\s+/g,"-");qn(`adoption-reminder-${ae}.eml`,Q,"message/rfc822")},[fn,jn,ne,k,Be,he.previousMonthLabel]),Zn=m.useCallback(()=>{H(p=>({...p,[I]:!0}))},[I]),et=he.shouldNotify&&!ee[I],In=m.useMemo(()=>c.history.find(p=>p.monthLabel===Ee)||null,[Ee,c.history]),An=xe,nt=An?"Review and finalise monthly snapshot":"Finalise Month unlocks from the final week of each month.",tt=An?`${Rn} h-9 px-3 py-0 shadow-[0_3px_0_rgba(0,0,0,0.2)]`:"h-9 px-3 py-0 rounded-md border border-slate-300 bg-slate-200 text-slate-500 cursor-not-allowed",st=An?{backgroundColor:h.themeColor}:void 0,an=m.useMemo(()=>{const p=In||(c.history.length>0?c.history[c.history.length-1]:null),w=(p==null?void 0:p.overallPercentage)||0,E=K.overallPct-w;return{currentMonthLabel:Ee,baselineLabel:(p==null?void 0:p.monthLabel)||"No previous snapshot",baselineOverall:w,deltaOverall:E,assessedCount:K.assessedCount,totalActions:K.totalActions,completedActions:K.completedActions}},[Ee,In,K.assessedCount,K.completedActions,K.overallPct,K.totalActions,c.history]),bn=m.useMemo(()=>Ri(c,K,Ee),[c,K,Ee]),g=m.useMemo(()=>bn.filter(p=>p.completed).length,[bn]),C=m.useCallback(p=>{M(p)},[]),$=m.useCallback(p=>{f(w=>{const E=w.orgProfile.cst.pathway!==p.cst.pathway,F={...w,orgProfile:p},B=E?Sc(F,p.cst.pathway):F;return JSON.stringify(w.orgProfile)!==JSON.stringify(p)?{...B,auditLog:le(w,[{eventType:"profile-updated",entityType:"profile",summary:"Updated CST profile details",before:{trustName:w.orgProfile.trustName,projectName:w.orgProfile.projectName,cst:w.orgProfile.cst},after:{trustName:p.trustName,projectName:p.projectName,cst:p.cst},source:"local"},...E?[{eventType:"pathway-changed",entityType:"profile",summary:`Changed pathway from ${w.orgProfile.cst.pathway} to ${p.cst.pathway}`,before:{pathway:w.orgProfile.cst.pathway},after:{pathway:p.cst.pathway},source:"local"}]:[]])}:B})},[]),se=p=>{let w=0,E=0,F=0,B=0;return p.lenses.forEach(Q=>{var ke,je;const ae=(ke=c.currentDraft[p.id])==null?void 0:ke[Q];ae&&ae.score>0&&(w++,(je=ae.justification)!=null&&je.trim()&&E++);const de=(ae==null?void 0:ae.actions)||[];F+=de.length,B+=de.filter(ue=>qt(ue.status)).length}),w===0?{icon:"◯",color:"text-blue-100",label:"Not Started"}:w>E?{icon:"⚠",color:"text-red-300",label:"Missing Justification"}:w<p.lenses.length?{icon:"◐",color:"text-amber-300",label:"In Progress"}:F<=0||B<F?{icon:"◐",color:"text-amber-300",label:"In Progress"}:{icon:"✓",color:"text-green-300",label:"Completed"}},ie=c.orgProfile.trustName||"Unconfigured Trust",Ce=c.orgProfile.projectName||"Unnamed Project",we=Ht[c.orgProfile.cst.pathway],Ie=we.split(" - ")[0]||we;return e.jsxs("div",{className:`flex h-screen overflow-hidden ${h.darkMode?"bg-slate-900 text-slate-100":"bg-slate-50 text-slate-800"}`,children:[e.jsx("div",{role:"status","aria-live":"polite",className:"sr-only",children:j}),e.jsx("input",{ref:J,type:"file",accept:"application/json",className:"hidden",onChange:hn}),o&&e.jsx("div",{className:"fixed inset-0 z-10 bg-slate-900/35 backdrop-blur-[1px] lg:hidden",onClick:()=>u(!1)}),e.jsxs("div",{className:`fixed inset-y-0 left-0 z-20 bg-[#005eb8] text-white flex flex-col shadow-xl overflow-hidden transition-all duration-300 ease-out lg:static lg:translate-x-0 ${o?"w-72 translate-x-0":"w-0 -translate-x-full lg:w-0"}`,style:{backgroundColor:h.themeColor},children:[e.jsxs("div",{className:"p-6 border-b border-blue-700",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold tracking-tight",children:"NHS Digital Adoption"}),e.jsxs("p",{className:"text-blue-200 text-xs mt-1 flex justify-between items-center",children:[e.jsx("span",{children:"Readiness Tracking Tool"}),e.jsx("span",{className:"opacity-80 font-medium",children:"V6.6"})]})]}),h.profileImageDataUrl?e.jsx("img",{src:h.profileImageDataUrl,alt:"Profile",className:"h-10 w-10 rounded-full border-2 border-blue-200 object-cover"}):null]}),e.jsx("button",{type:"button",onClick:()=>y("profile"),className:"mt-3 w-full rounded-md bg-blue-700 p-2 text-left text-xs hover:bg-blue-600",children:e.jsxs("div",{className:"font-semibold text-blue-100",children:["Objectives: ",g,"/",bn.length]})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto py-4",children:[e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Intro"}),e.jsx("nav",{className:"space-y-1 mb-4",children:["introduction","cm-guide","project-details"].map(p=>e.jsx("button",{ref:w=>{ve.current[`view:${p}`]=w},onClick:()=>y(p),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${s===p?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:p==="introduction"?"Introduction":p==="project-details"?"Project Set-up":"Adoption Engine Onboarding"},p))}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Overview"}),e.jsx("nav",{className:"space-y-1 mb-4",children:["dashboard","daily-checkin","action-plan","roadmap-view"].map(p=>e.jsx("button",{ref:w=>{ve.current[`view:${p}`]=w},onClick:()=>y(p),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${s===p?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:p==="dashboard"?"Metrics Dashboard":p==="daily-checkin"?"Daily Check-in":p==="action-plan"?"Action Tracker":"Component Delivery Timeline"},p))}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Change Components"}),e.jsx("nav",{className:"space-y-1 mb-8",children:n.map((p,w)=>{const E=s==="assessment"&&i===p.id,F=se(p),B=w>0?n[w-1].phase:null,Q=p.phase!==B;return e.jsxs(Sn.Fragment,{children:[Q&&e.jsx("div",{className:`px-4 text-[10px] font-semibold uppercase tracking-wider text-blue-300 ${w===0?"pb-1":"pt-3 pb-1"}`,children:ln[p.phase]||`Phase ${p.phase}`}),e.jsxs("button",{ref:ae=>{ve.current[`component:${p.id}`]=ae},onClick:()=>{z(p.id)},className:`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${E?"bg-white font-medium text-[#005eb8]":`hover:bg-blue-800 ${F.color}`}`,children:[e.jsx("span",{className:"truncate pr-2",children:ii(p.label)}),e.jsx("span",{className:"text-xs flex-shrink-0",title:F.label,"aria-label":F.label,children:F.icon})]})]},p.id)})}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Tools"}),e.jsx("nav",{className:"space-y-1 mb-8",children:["highlight-builder","force-field-analysis","compare","audit-log"].map(p=>e.jsx("button",{ref:w=>{ve.current[`view:${p}`]=w},onClick:()=>y(p),className:`w-full flex items-center px-4 py-1 text-sm transition-colors ${s===p?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:p==="highlight-builder"?"Highlight Builder":p==="force-field-analysis"?"Force Field Analysis":p==="compare"?"Assess & Compare":"Audit Log"},p))}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider border-t border-blue-800 pt-6",children:"Account"}),e.jsx("nav",{className:"space-y-1 mb-8",children:["settings","profile"].map(p=>e.jsx("button",{ref:w=>{ve.current[`view:${p}`]=w},onClick:()=>y(p),className:`w-full flex items-center px-4 py-1 text-sm transition-colors ${s===p?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:p==="settings"?"Settings":"Profile"},p))}),e.jsxs("div",{className:"mt-8 px-4 pb-4 border-t border-blue-800 pt-6",children:[e.jsx("div",{className:"text-[10px] font-semibold text-blue-300 uppercase tracking-wider mb-3",children:"Status Legend"}),e.jsxs("div",{className:"space-y-2 text-xs text-blue-200",children:[e.jsx("div",{children:"◯ Not Started"}),e.jsx("div",{children:"◐ In Progress"}),e.jsx("div",{children:"⚠ Missing Justification"}),e.jsx("div",{children:"✓ Completed"})]})]})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col h-screen overflow-hidden",children:[e.jsx("header",{className:`${h.darkMode?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} border-b px-3 py-2 sm:px-6 shrink-0 z-10 ${s==="introduction"?"":"shadow-sm"}`,style:{borderTop:`3px solid ${h.themeColor}`},children:e.jsxs("div",{className:"flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{className:"min-w-0 flex items-start gap-2 sm:gap-3",children:[e.jsxs("button",{onClick:()=>u(p=>!p),className:"inline-flex h-9 items-center justify-center px-3 text-white rounded-md font-semibold transition-colors shadow-sm","aria-label":o?"Collapse side navigation":"Expand side navigation",title:o?"Collapse side navigation":"Expand side navigation",style:{backgroundColor:h.themeColor},children:[e.jsx("span",{"aria-hidden":"true",className:"text-lg leading-none",children:o?"«":"»"}),e.jsx("span",{className:"sr-only",children:o?"Collapse side navigation":"Expand side navigation"})]}),e.jsx("button",{onClick:O,disabled:Z.length===0,title:Z.length===0?"No previous in-app page":"Back to previous page",className:`h-9 text-sm px-3 rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${h.darkMode?"text-slate-100 hover:bg-slate-700":"text-slate-600 hover:bg-slate-100"}`,children:"← Back"}),e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-1 text-sm",children:[e.jsx("span",{className:`truncate font-semibold ${h.darkMode?"text-slate-100":"text-slate-700"}`,title:ie,children:ie}),e.jsx("span",{className:`${h.darkMode?"text-slate-300":"text-slate-400"}`,children:"/"}),e.jsx("span",{className:`truncate ${h.darkMode?"text-slate-100":"text-slate-600"}`,title:Ce,children:Ce})]}),e.jsxs("div",{className:"mt-1 flex min-w-0 items-center gap-1.5",children:[e.jsxs("span",{className:`truncate rounded-full px-2 py-1 text-[11px] font-semibold ${h.darkMode?"bg-slate-700 text-slate-100":"bg-slate-100 text-slate-600"}`,title:we,children:[e.jsx("span",{className:"sm:hidden",children:Ie}),e.jsx("span",{className:"hidden sm:inline",children:we})]}),e.jsxs("span",{className:"inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-800",title:"Auto-save on",children:[e.jsx("span",{className:"inline-flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white","aria-hidden":"true",children:"✓"}),e.jsx("span",{className:"sr-only sm:not-sr-only sm:ml-1",children:"Auto-save on"})]})]})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 lg:justify-end",children:[e.jsx("button",{onClick:()=>ge(!0),"aria-label":"Show introduction",title:"Show introduction",className:`text-sm w-9 h-9 flex items-center justify-center bg-white text-[#425563] border border-[#768692] hover:bg-[#f0f4f5] rounded-full font-semibold transition-colors ${Wt}`,children:"?"}),e.jsx("button",{type:"button",onClick:()=>{window.location.hash="#/"},"aria-label":"Go to home page",title:"Go to home page",className:`${Oe} h-9 w-16 px-6 py-0 inline-flex items-center justify-center`,children:"Home"}),e.jsx("button",{onClick:pn,className:`${Oe} h-9 px-3 py-0`,children:"Import"}),e.jsxs("button",{onClick:vn,className:`${Oe} h-9 px-3 py-0`,children:[e.jsx("span",{className:"sm:hidden",children:"Export"}),e.jsx("span",{className:"hidden sm:inline",children:"Export JSON"})]}),e.jsx("span",{className:"inline-flex",title:nt,children:e.jsxs("button",{onClick:()=>Le(!0),disabled:!An,"aria-label":"Finalise Month",className:tt,style:st,children:[e.jsx("span",{className:"sm:hidden",children:"Finalise"}),e.jsx("span",{className:"hidden sm:inline",children:"Finalise Month"})]})})]})]})}),e.jsxs("main",{ref:D,className:"flex-1 overflow-y-auto p-8",children:[s==="daily-checkin"&&De?e.jsxs("section",{className:`${h.darkMode?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-6 rounded-xl border p-4 shadow-sm`,children:[e.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${h.darkMode?"text-slate-300":"text-slate-500"}`,children:"Objectives"}),e.jsxs("p",{className:`text-sm mt-1 ${h.darkMode?"text-slate-100":"text-slate-700"}`,children:[g,"/",bn.length," complete - based on phase readiness, ownership, cadence and team participation."]})]}),e.jsx("button",{type:"button",onClick:()=>R(!1),className:`${h.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-2 text-sm font-medium`,"aria-label":"Dismiss objectives card",children:"Dismiss"})]}),e.jsx("div",{className:"mt-4 grid gap-3 md:grid-cols-3",children:bn.map(p=>e.jsxs("div",{className:`rounded-lg border p-3 ${p.completed?"border-green-200 bg-green-50":h.darkMode?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${h.darkMode?"text-slate-100":"text-slate-800"}`,children:p.label}),e.jsx("span",{className:"text-xs font-bold",children:p.completed?"Done":"Not yet"})]}),e.jsx("p",{className:`mt-1 text-xs ${h.darkMode?"text-slate-300":"text-slate-600"}`,children:p.description})]},p.id))})]}):null,et&&e.jsxs("section",{className:`${h.darkMode?"border-amber-700 bg-slate-800":"border-amber-300 bg-amber-50"} mb-8 rounded-xl border p-5 shadow-sm`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider text-amber-700",children:"First Day Reminder"}),e.jsxs("h3",{className:"text-lg font-bold text-amber-900 mt-1",children:["Submit prior month report for ",he.previousMonthLabel]}),e.jsxs("p",{className:"text-sm text-amber-800 mt-2",children:["Please prompt the team to finalise ",he.previousMonthLabel," if it has not already been recorded."]})]}),e.jsx("button",{type:"button",onClick:Zn,className:"text-sm px-3 py-1.5 rounded-md border border-amber-300 text-amber-700 hover:bg-amber-100",children:"Dismiss"})]}),e.jsxs("div",{className:"mt-4 grid gap-3 md:grid-cols-2",children:[e.jsxs("label",{className:"text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"To"}),e.jsx("input",{type:"email",value:Be,onChange:p=>gn(p.target.value),className:`${h.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2`})]}),e.jsxs("label",{className:"text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"Subject"}),e.jsx("input",{type:"text",value:k,onChange:p=>X(p.target.value),className:`${h.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2`})]})]}),e.jsxs("label",{className:"mt-3 block text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"Body"}),e.jsx("textarea",{value:ne,onChange:p=>me(p.target.value),rows:9,className:`${h.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2 font-mono text-xs`})]}),e.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:Jn,className:"rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-50",children:"Download Point-in-Time JSON"}),e.jsx("button",{type:"button",onClick:Qn,className:"rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-50",children:"Download Email Draft with Attachment (.eml)"}),e.jsx("button",{type:"button",onClick:Xn,className:"rounded-md px-3 py-2 text-sm font-semibold text-white",style:{backgroundColor:h.themeColor},children:"Open Mail Draft"}),e.jsx("button",{type:"button",onClick:Dn,className:"rounded-md border border-amber-300 bg-white px-3 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100",children:"Finalise Prior Month Now"})]})]}),s==="dashboard"&&e.jsx("div",{ref:te,children:e.jsx(zi,{store:c,components:n,lenses:t,metrics:K,phaseFocusMode:h.phaseFocusMode||"auto",manualPhaseFocus:h.manualPhaseFocus,onPhaseFocusModeChange:p=>M(w=>({...w,phaseFocusMode:p,manualPhaseFocus:p==="manual"?w.manualPhaseFocus||K.currentPhase:w.manualPhaseFocus})),onManualPhaseFocusChange:p=>M(w=>({...w,phaseFocusMode:"manual",manualPhaseFocus:p})),onResetPhaseFocus:()=>M(p=>({...p,phaseFocusMode:"auto",manualPhaseFocus:K.currentPhase})),getEntry:fe,onComponentClick:z,pathway:c.orgProfile.cst.pathway,pathwayChecks:c.pathwayChecks,onNavigate:y,onOpenLensInfo:x,onOpenOnboarding:()=>ge(!0),colorAccessibilityMode:h.colorAccessibilityMode||"standard",darkMode:!!h.darkMode,componentRadarVisible:L,onComponentRadarVisibleChange:N,componentRadarSize:P,onComponentRadarSizeChange:V})}),s==="daily-checkin"&&e.jsx(Ko,{store:c,components:n,metrics:K,getEntry:fe,onComponentClick:z,onActionView:Fe,phaseFocusMode:h.phaseFocusMode||"auto",manualPhaseFocus:h.manualPhaseFocus,colorAccessibilityMode:h.colorAccessibilityMode||"standard",darkMode:!!h.darkMode}),s==="project-details"&&e.jsx(Wo,{orgProfile:c.orgProfile,onProfileUpdate:$,components:n,lenses:t,onComponentClick:z,onOpenOnboarding:()=>ge(!0),onOpenGuidedSetup:()=>pe(!0),currentUserId:b,onCurrentUserChange:S,showExternalLinksSection:!!h.showExternalLinksSection,darkMode:!!h.darkMode}),s==="assessment"&&e.jsx($o,{store:c,components:n,activeComponentId:i,getRubricText:Oc,getEntry:fe,onComponentChange:z,onEntryUpdate:Xe,onOpenLensInfo:x,onActionRemove:(p,w,E)=>{const B=fe(p,w).actions.find(ae=>ae.id===E);if(!B)return;const Q=window.prompt("Please provide a reason for removing this action. This will be included in the JSON export audit log.");if(!Q||!Q.trim()){window.alert("Removal cancelled. A reason is required to remove an action.");return}f(ae=>{var $n;const de=(($n=ae.currentDraft[p])==null?void 0:$n[w])||Nt(),ke={...de,actions:de.actions.filter(xn=>xn.id!==E).map(Ec)},je={...ae.suppressedAutoActions};if(E.startsWith("vision-action:")||E.startsWith("case-for-change-action:")||E.startsWith("benefits-action:")||E.startsWith("sponsorship-action:")||E.startsWith("change-impact-action:")){const xn=kc(p,w),Vn=je[xn]||[];Vn.includes(E)||(je[xn]=[...Vn,E])}const ue={...ae,currentDraft:{...ae.currentDraft,[p]:{...ae.currentDraft[p],[w]:ke}},suppressedAutoActions:je};return{...yn(ue),auditLog:le(ae,[{eventType:"action-removed",entityType:"action",entityId:E,summary:`Removed action from ${p} / ${w}`,componentId:p,lens:w,reason:Q.trim(),before:{text:B.text,status:B.status,owner:B.owner,actionType:B.actionType},source:"local"}])}})},onObjectivesUpdate:Se,onNavigateToTool:p=>y(p),hideGuidedWorkflow:!!h.hideGuidedWorkflow,onHideGuidedWorkflow:()=>M(p=>({...p,hideGuidedWorkflow:!0})),showAdditionalGuidanceLinks:Pe,darkMode:!!h.darkMode,focusAction:oe,onFocusActionHandled:()=>ye(null)}),s==="action-plan"&&e.jsx(Si,{actions:Qe,onComponentClick:z,teamMembers:c.orgProfile.teamMembers||[],darkMode:!!h.darkMode}),s==="cm-guide"&&e.jsx(Go,{onComponentClick:z,guidanceTarget:na,linkOverrides:c.orgProfile.linkOverrides,showAdditionalGuidanceLinks:Pe,darkMode:!!h.darkMode}),s==="introduction"&&e.jsx(dr,{darkMode:!!h.darkMode,onNavigateToProjectDetails:()=>y("project-details"),onNavigateToGuide:()=>y("cm-guide"),onNavigateToDashboard:()=>y("dashboard")}),s==="roadmap-view"&&e.jsx(Xo,{components:n,metrics:K,getEntry:fe,onComponentClick:z,pathway:c.orgProfile.cst.pathway,pathwayChecks:c.pathwayChecks,darkMode:!!h.darkMode}),s==="highlight-builder"&&e.jsx(ar,{store:c,metrics:K,lenses:t,components:n,getEntry:fe,trustName:c.orgProfile.trustName,projectName:c.orgProfile.projectName,themeColor:h.themeColor,currentUserId:b,darkMode:!!h.darkMode}),s==="force-field-analysis"&&e.jsx(Za,{embedded:!0,onBack:()=>y("dashboard")}),s==="compare"&&e.jsx(ai,{embedded:!0,onBack:()=>y("dashboard")}),s==="audit-log"&&e.jsx(Lo,{events:c.auditLog,darkMode:!!h.darkMode}),s==="settings"&&e.jsx(xr,{userSettings:h,onUserSettingsUpdate:C,onLoadExampleData:vt,onResetData:Mn,darkMode:!!h.darkMode}),s==="profile"&&e.jsx(fr,{orgProfile:c.orgProfile,onProfileUpdate:$,userSettings:h,onUserSettingsUpdate:C,objectives:bn,darkMode:!!h.darkMode})]}),l?e.jsx(cr,{lensName:l,onClose:()=>x(""),darkMode:!!h.darkMode}):null,A?e.jsx(rr,{report:A.report,myLabel:c.orgProfile.projectName||c.orgProfile.trustName||"Mine",theirLabel:((Ze=A.parsed.orgProfile)==null?void 0:Ze.projectName)||((on=A.parsed.orgProfile)==null?void 0:on.trustName)||A.file.name,onResolve:Un,onCancel:Pn,darkMode:!!h.darkMode}):null,Re?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${h.darkMode?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} w-full max-w-2xl rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${h.darkMode?"text-slate-100":"text-slate-900"}`,children:"Finalise Month"}),e.jsx("button",{type:"button",onClick:()=>Le(!1),className:`${h.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:`mt-4 space-y-3 text-sm ${h.darkMode?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("p",{children:["Finalising creates a point-in-time snapshot for"," ",e.jsx("strong",{children:an.currentMonthLabel}),". A new reporting month starts on the 1st day of each month."]}),e.jsx("p",{children:xe?"Finalise window is open (last week of the month).":"Finalise window is currently closed. You can finalise from the final week of each month."}),In?e.jsxs("p",{className:"rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-amber-900",children:["A snapshot already exists for ",an.currentMonthLabel,". Re-finalise will replace this month only."]}):null]}),e.jsxs("div",{className:`${h.darkMode?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mt-4 rounded-md border p-3 text-sm`,children:[e.jsx("p",{className:`font-semibold ${h.darkMode?"text-slate-100":"text-slate-800"}`,children:"Current summary"}),e.jsxs("ul",{className:`mt-2 space-y-1 ${h.darkMode?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("li",{children:["Baseline snapshot: ",an.baselineLabel]}),e.jsxs("li",{children:["Overall readiness: ",K.overallPct,"% (",an.deltaOverall>=0?"+":"",an.deltaOverall,"% vs baseline)"]}),e.jsxs("li",{children:["Components assessed: ",an.assessedCount]}),e.jsxs("li",{children:["Actions complete: ",an.completedActions,"/",an.totalActions]})]})]}),e.jsxs("div",{className:"mt-5 flex flex-wrap justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:()=>Le(!1),className:"rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Cancel"}),In&&xe?e.jsx("button",{type:"button",onClick:()=>{Le(!1),kn({replaceExisting:!0})},className:"rounded-md border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100",children:"Re-finalise This Month"}):null,e.jsx("button",{type:"button",onClick:()=>{Le(!1),kn()},disabled:!xe,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50",children:"Finalise Snapshot"})]})]})}):null,e.jsx(bi,{toolkitChoice:c.orgProfile.cst.toolkitChoice,darkMode:!!h.darkMode}),e.jsx(hi,{open:ce,onClose:Ae,onNavigateToProjectDetails:()=>{a("project-details"),Ae()},onNavigateToGuide:()=>{a("cm-guide"),Ae()}}),e.jsx(mi,{open:He,orgProfile:c.orgProfile,onProfileUpdate:$,onClose:()=>pe(!1),onComplete:()=>{pe(!1),$e(!0)},currentUserId:b,onCurrentUserChange:S,darkMode:!!h.darkMode}),tn&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${h.darkMode?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-md rounded-xl border p-6 shadow-2xl`,children:[e.jsx("h3",{className:`text-lg font-semibold ${h.darkMode?"text-slate-100":"text-slate-900"}`,children:"Setup complete"}),e.jsx("p",{className:`mt-2 text-sm ${h.darkMode?"text-slate-300":"text-slate-600"}`,children:"Want a quick guide to how the tool works before you start? The Adoption Engine Onboarding page walks through it step by step."}),e.jsxs("div",{className:"mt-5 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:()=>$e(!1),className:`${h.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Maybe later"}),e.jsx("button",{type:"button",onClick:()=>{a("cm-guide"),$e(!1)},className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]",children:"View the guide"})]})]})}),e.jsx(gi,{open:sn,teamMembers:c.orgProfile.teamMembers||[],currentUserId:b,onCurrentUserChange:S,onClose:()=>Ne(!1),onNavigateToProjectDetails:()=>{a("project-details"),Ne(!1)},darkMode:!!h.darkMode})]})]})}export{Kc as AdoptionApp,Kc as default};
