import{r as m,j as e,a as xn}from"./vendor-react-nTLHQtbJ.js";import{D as Ka,P as ta,g as Ya,a as bt,T as Ja,O as sa,C as rt,b as lt,i as Xa}from"./cst-CVxF8Tjg.js";import{n as _e,a as Rn,b as Ht,F as Qa}from"./ForceFieldAnalysisApp-BwKqMhY2.js";import{g as xs,p as Za,G as ei,d as ni}from"./vendor-misc-D88HtX07.js";import{A as ut,a as On,n as rn,i as Wt,d as Ss,U as ti,C as si}from"./CompareApp-DAgT2BJS.js";import{l as En,s as en,d as qn,e as ai}from"./utils-Dnh79fEb.js";import{A as xt,g as $t}from"./components-aRtg6FgR.js";import{C as nn}from"./vendor-chart-DnMUodEx.js";const aa=["highlight-builder","force-field-analysis","compare"],ct={"highlight-builder":{label:"Highlight Builder",matchText:"Highlight Builder"},"force-field-analysis":{label:"Force Field Analysis",matchText:"Force Field Analysis"},compare:{label:"Assess & Compare",matchText:"Assess & Compare"}};function Tt(n,t){if(!n.linkedActions.length)return"Not Started";const s=n.linkedActions.map(a=>{const i=(t[a.lens]||[]).find(r=>r.id===a.actionId);return(i==null?void 0:i.status)||"Planned"});return s.some(a=>a==="Blocked")?"Blocked":s.every(a=>a==="Completed")?"Completed":s.some(a=>a!=="Planned")?"In Progress":"Not Started"}function ys(){return`cst-${Date.now()}-${Math.random().toString(36).slice(2,10)}`}function Kn(n){return{trustName:(n==null?void 0:n.trustName)||"",region:(n==null?void 0:n.region)||"",trustType:(n==null?void 0:n.trustType)||"",projectName:(n==null?void 0:n.projectName)||"",leadName:(n==null?void 0:n.leadName)||"",cst:{...Ka,...(n==null?void 0:n.cst)||{}},linkOverrides:n==null?void 0:n.linkOverrides,componentFurtherReading:n==null?void 0:n.componentFurtherReading,coreLinks:n==null?void 0:n.coreLinks,customComponentLinks:n==null?void 0:n.customComponentLinks,toolLinks:(n==null?void 0:n.toolLinks)??aa.map(t=>({key:`tool-default-${t}`,tool:t,matchText:ct[t].matchText})),externalLinksInitiated:n==null?void 0:n.externalLinksInitiated,teamMembers:(n==null?void 0:n.teamMembers)||[],cstId:n==null?void 0:n.cstId}}function ii(n){return n?Object.keys(n).reduce((t,s)=>{const a=n[s]||{};return t[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},t},{}):{}}function mt(n){return{view:(n==null?void 0:n.view)||"dashboard",orgProfile:Kn(n==null?void 0:n.orgProfile),currentDraft:(n==null?void 0:n.currentDraft)||{},objectives:n!=null&&n.objectives?zt(n.objectives):{},suppressedAutoActions:oi(n==null?void 0:n.suppressedAutoActions),auditLog:ri(n==null?void 0:n.auditLog),history:(n==null?void 0:n.history)||[],phaseOverrides:(n==null?void 0:n.phaseOverrides)||{},pathwayChecks:ii(n==null?void 0:n.pathwayChecks)}}function oi(n){return n?Object.keys(n).reduce((t,s)=>(t[s]=[...n[s]||[]],t),{}):{}}function ri(n){return n?n.map(t=>({...t})):[]}function Ct(){return{score:0,justification:"",evidence:"",actions:[]}}function ia(n){return{score:n.score,justification:n.justification,evidence:n.evidence,actions:n.actions.map(t=>({...t,linkedTargets:(t.linkedTargets||[]).map(s=>({componentId:s.componentId,lens:s.lens}))}))}}function qt(n){return Object.keys(n).reduce((t,s)=>(t[s]=Object.keys(n[s]).reduce((a,i)=>(a[i]=ia(n[s][i]),a),{}),t),{})}function li(n){return{...n,linkedActions:n.linkedActions.map(t=>({...t}))}}function zt(n){return Object.keys(n).reduce((t,s)=>(t[s]=(n[s]||[]).map(li),t),{})}function ci(n){if(!n)return!1;const t=new Date(n);return!isNaN(t.getTime())}function Et(n){return!n||!ci(n)?null:new Date(n)}function oa(n){const t=[],s=n.cst;if(!s.goLiveDate||!s.goLiveDate.trim())return t.push({field:"cst.goLiveDate",message:"Go live date is required."}),{isValid:!1,errors:t};const a=Et(s.goLiveDate);if(!a)return t.push({field:"cst.goLiveDate",message:"Go live date must be a valid date."}),{isValid:!1,errors:t};const i=Et(s.fullAdoptionDate);s.fullAdoptionDate&&!i&&t.push({field:"cst.fullAdoptionDate",message:"Full adoption date must be a valid date when provided."});const r=Et(s.benefitRealizationDate);return s.benefitRealizationDate&&!r&&t.push({field:"cst.benefitRealizationDate",message:"Benefit realization date must be a valid date when provided."}),i&&i<a&&t.push({field:"cst.fullAdoptionDate",message:"Full adoption date cannot be earlier than go live date."}),r&&r<(i||a)&&t.push({field:"cst.benefitRealizationDate",message:"Benefit realization date cannot be earlier than full adoption date (or go live when full adoption is empty)."}),{isValid:t.length===0,errors:t}}function ra(n){const t=m.useMemo(()=>n.errors.reduce((s,a)=>(s[a.field]||(s[a.field]=[]),s[a.field].push(a.message),s),{}),[n.errors]);return s=>{var a;return(a=t[s])==null?void 0:a[0]}}function gt(n){const t=[];(!n.trustName||n.trustName.trim()==="")&&t.push({field:"trustName",message:"Trust name is required"}),n.trustName&&n.trustName.length>255&&t.push({field:"trustName",message:"Trust name cannot exceed 255 characters"}),n.region&&n.region.length>100&&t.push({field:"region",message:"Region cannot exceed 100 characters"});const s=oa(n);return t.push(...s.errors),{isValid:t.length===0,errors:t}}function la({pathway:n,darkMode:t=!1}){return n==="pathway-1"?null:e.jsxs("div",{className:`mt-3 rounded-md border p-3 text-xs ${t?"border-amber-500/40 bg-amber-500/10 text-amber-100":"border-amber-300 bg-amber-50 text-amber-900"}`,children:[e.jsx("p",{className:"font-semibold",children:"Objectives and actions are currently Pathway 1 only"}),e.jsx("p",{className:"mt-1",children:"Every outcome and action in this tool right now is written for Pathway 1 (starting from scratch). Pathway 2 and Pathway 3 will need their own objectives and actions - those haven't been written yet, so components on this pathway show no outcomes or actions until pathway-specific content is added."})]})}const Nn="w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2";function di(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function ui({open:n,orgProfile:t,onProfileUpdate:s,onClose:a,onComplete:i,currentUserId:r,onCurrentUserChange:o,darkMode:u=!1}){const[c,h]=m.useState(0),[l,x]=m.useState(t);m.useEffect(()=>{n&&(h(0),x(t))},[n]);const b=gt(l),S=ra(b),d=m.useCallback(L=>{x(L),s(L)},[s]),A=m.useCallback((L,q)=>{d({...l,cst:{...l.cst,[L]:q}})},[l,d]),_=m.useCallback(()=>{const L={id:di(),name:"",role:""};d({...l,teamMembers:[...l.teamMembers||[],L]})},[l,d]),f=m.useCallback((L,q,ce)=>{d({...l,teamMembers:(l.teamMembers||[]).map(pe=>pe.id===L?{...pe,[q]:ce}:pe)})},[l,d]),V=m.useCallback(L=>{d({...l,teamMembers:(l.teamMembers||[]).filter(q=>q.id!==L)}),r===L&&o("")},[l,d,r,o]),U=m.useRef(null),ee=m.useCallback(()=>{var L;(L=U.current)==null||L.click()},[]),I=m.useCallback(async L=>{var ce;const q=(ce=L.target.files)==null?void 0:ce[0];if(L.target.value="",!!q)try{const pe=await q.text(),Pe=JSON.parse(pe);if(!Pe.orgProfile||typeof Pe.orgProfile!="object"){window.alert("This file does not contain Project Setup data.");return}const R=Kn(Pe.orgProfile),Z=gt(R);if(!window.confirm("Import this Project Setup file? This replaces your current organisation profile, pathway/timeline, toolkit links, further reading, core links and team members."+(Z.errors.length?`

Note: the imported data has ${Z.errors.length} validation warning(s) you can fix after importing.`:"")))return;d(R),h(2)}catch{window.alert("Unable to read this file. Please choose a valid Project Setup export.")}},[d]);if(!n)return null;const D=`block text-sm font-medium mb-1 ${u?"text-slate-200":"text-slate-700"}`,K=u?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900",Q=[{title:"Organisation profile",blurb:"Start with the basics: who this programme belongs to. This shows up on exports, highlight reports and the audit log, so people reviewing this CST later know whose it is.",body:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:`flex flex-wrap items-center justify-between gap-3 rounded-md border p-3 ${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("p",{className:`text-sm ${u?"text-slate-300":"text-slate-600"}`,children:"Already have a Project Setup export? Import it instead of filling this in by hand."}),e.jsx("button",{type:"button",onClick:ee,className:_e,children:"Import Saved Setup"}),e.jsx("input",{ref:U,type:"file",accept:"application/json",className:"hidden",onChange:I})]}),e.jsxs("div",{children:[e.jsx("label",{className:D,htmlFor:"wizard-trust-name",children:"Organisation Name"}),e.jsx("input",{id:"wizard-trust-name",type:"text",className:`${Nn} ${K}`,value:l.trustName,onChange:L=>d({...l,trustName:L.target.value})}),S("trustName")?e.jsx("p",{className:`mt-1 text-xs ${u?"text-amber-300":"text-red-700"}`,children:S("trustName")}):null]}),e.jsxs("div",{children:[e.jsx("label",{className:D,htmlFor:"wizard-project-name",children:"Programme / Project Name"}),e.jsx("input",{id:"wizard-project-name",type:"text",className:`${Nn} ${K}`,value:l.projectName||"",onChange:L=>d({...l,projectName:L.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{className:D,htmlFor:"wizard-lead-name",children:"Lead Submitter (Change Lead)"}),e.jsx("input",{id:"wizard-lead-name",type:"text",className:`${Nn} ${K}`,value:l.leadName||"",onChange:L=>d({...l,leadName:L.target.value})})]})]})},{title:"Pathway & timeline",blurb:"Your pathway shapes the guidance and checklists you see throughout the tool. Pick the one that matches where this programme actually is, then set the key delivery dates.",body:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:D,htmlFor:"wizard-cst-pathway",children:"Pathway"}),e.jsx("select",{id:"wizard-cst-pathway",className:`${Nn} pr-10 ${K}`,value:l.cst.pathway,onChange:L=>A("pathway",L.target.value),children:ta.map(L=>e.jsx("option",{value:L.value,children:L.label},L.value))})]}),e.jsx(la,{pathway:l.cst.pathway,darkMode:u}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:D,htmlFor:"wizard-go-live",children:"Go Live Date"}),e.jsx("input",{id:"wizard-go-live",type:"date",className:`${Nn} ${K}`,value:l.cst.goLiveDate,onChange:L=>A("goLiveDate",L.target.value)}),S("cst.goLiveDate")?e.jsx("p",{className:`mt-1 text-xs ${u?"text-amber-300":"text-red-700"}`,children:S("cst.goLiveDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{className:D,htmlFor:"wizard-full-adoption",children:"Full Adoption (optional)"}),e.jsx("input",{id:"wizard-full-adoption",type:"date",className:`${Nn} ${K}`,value:l.cst.fullAdoptionDate,onChange:L=>A("fullAdoptionDate",L.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{className:D,htmlFor:"wizard-benefit",children:"Benefit Realisation (optional)"}),e.jsx("input",{id:"wizard-benefit",type:"date",className:`${Nn} ${K}`,value:l.cst.benefitRealizationDate,onChange:L=>A("benefitRealizationDate",L.target.value)})]})]})]})},{title:"Team members",blurb:"Add the people working on this programme so actions and readiness slides can be assigned to a named owner, instead of everything sitting as 'Unassigned'.",body:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:D,htmlFor:"wizard-current-user",children:"You are signed in as"}),e.jsxs("select",{id:"wizard-current-user",value:r||"",onChange:L=>o(L.target.value),className:`${Nn} pr-10 md:w-1/2 ${K}`,children:[e.jsx("option",{value:"",children:"Not selected"}),(l.teamMembers||[]).map(L=>e.jsxs("option",{value:L.id,children:[L.name||"Unnamed",L.role?` - ${L.role}`:""]},L.id))]})]}),e.jsx("div",{className:"space-y-2",children:(l.teamMembers||[]).map(L=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2 items-center",children:[e.jsx("input",{value:L.name,onChange:q=>f(L.id,"name",q.target.value),placeholder:"Name",className:`rounded-md border shadow-sm sm:text-sm p-2 ${K}`}),e.jsx("input",{value:L.role,onChange:q=>f(L.id,"role",q.target.value),placeholder:"Role",className:`rounded-md border shadow-sm sm:text-sm p-2 ${K}`}),e.jsx("button",{type:"button",onClick:()=>V(L.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},L.id))}),e.jsx("button",{type:"button",onClick:_,className:_e,children:"+ Add team member"})]})},{title:"External links",blurb:"This step is optional and can be configured any time from Project Setup - toolkit choice, core reference links, and further-reading per component. Skip it for now if you'd rather get straight to assessing.",body:e.jsx("div",{className:`rounded-md border p-4 text-sm ${u?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-600"}`,children:"Nothing needed here to get started. Head to Project Setup whenever you want to set a toolkit preference, add core reference links, or point a component at further reading."})}],k=Q[c],W=c===0,te=c===Q.length-1;return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border p-6 shadow-2xl ${u?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("p",{className:"text-xs font-semibold uppercase tracking-wider text-blue-600",children:["Guided CST Setup · Step ",c+1," of ",Q.length]}),e.jsx("button",{type:"button",onClick:a,className:`rounded-md border px-3 py-1.5 text-sm ${u?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Close"})]}),e.jsx("h3",{className:`mt-3 text-lg font-semibold ${u?"text-slate-100":"text-slate-900"}`,children:k.title}),e.jsx("p",{className:`mt-1 text-sm ${u?"text-slate-300":"text-slate-600"}`,children:k.blurb}),e.jsx("div",{className:"mt-4",children:k.body}),e.jsxs("div",{className:"mt-6 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:()=>h(L=>Math.max(0,L-1)),disabled:W,className:`${_e} disabled:opacity-50 disabled:cursor-not-allowed`,children:"Back"}),te?e.jsx("button",{type:"button",onClick:i,className:Rn,children:"Done"}):e.jsx("button",{type:"button",onClick:()=>h(L=>Math.min(Q.length-1,L+1)),className:Rn,children:"Next"})]})]})})}function mi({open:n,teamMembers:t,currentUserId:s,onCurrentUserChange:a,onClose:i,onNavigateToProjectDetails:r,darkMode:o}){const[u,c]=m.useState(s);if(!n)return null;const h=t.length>0,l=()=>{u&&(a(u),i())};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-lg rounded-xl border p-6 shadow-2xl`,children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-900"}`,children:"No one is signed in"}),e.jsxs("div",{className:`mt-3 space-y-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:[e.jsx("p",{children:"Every change recorded in this tool is attributed to whoever is signed in, so the audit log can show who did what. Sign in as a team member to continue."}),!h&&e.jsx("p",{children:"No team members have been added yet - add one on the Project Setup page first."})]}),h&&e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{htmlFor:"sign-in-required-select",className:`block text-xs font-medium ${o?"text-slate-300":"text-slate-700"}`,children:"Sign in as"}),e.jsxs("select",{id:"sign-in-required-select",value:u,onChange:x=>c(x.target.value),className:`mt-1 w-full rounded-md border px-3 py-2 text-sm ${o?"bg-slate-900 border-slate-600 text-slate-100":"bg-white border-slate-300 text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Not selected"}),t.map(x=>e.jsxs("option",{value:x.id,children:[x.name||"Unnamed",x.role?` - ${x.role}`:""]},x.id))]})]}),e.jsxs("div",{className:"mt-6 flex flex-wrap justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:i,className:`rounded-md px-4 py-2 text-sm font-medium ${o?"text-slate-300 hover:bg-slate-700":"text-slate-600 hover:bg-slate-100"}`,children:"Remind me later"}),e.jsx("button",{type:"button",onClick:r,className:`rounded-md border px-4 py-2 text-sm font-medium ${o?"border-slate-600 text-slate-200 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-100"}`,children:"Go to Project Setup"}),h&&e.jsx("button",{type:"button",onClick:l,disabled:!u,className:"rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",children:"Sign in"})]})]})})}const Lt={0:"Not Started: Activity has not yet commenced or been defined.",1:"Emerging: Activity is fragmented, uncoordinated, and reactive. No standardised approach.",2:"Developing: Basic processes exist but are inconsistently applied. Reliance on heroic individual efforts.",3:"Embedding: Standardised approach defined and applied across the project. Leadership is engaged.",4:"Adopted: Behaviours are changing. Metrics are actively monitored to drive adoption.",5:"Thriving: Change is fully embedded as business as usual. Continuous improvement is evident."},vs=["Pre-Emergent","Emerging","Developing","Maturing","Embedding","Thriving"],gi=["#768692","#AE2521","#FFB81C","#005EB8","#330072","#00A499"];function Bt(n){return vs[Math.round(n)]||vs[0]}function ca(){return[{title:"What is the Adoption Engine?",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsxs("p",{className:"text-sm text-slate-700",children:["Going live with a new digital product isn't the finish line - people still need to adopt it, change how they work, and keep using it."," "]}),e.jsx("p",{className:"text-sm text-slate-700",children:"The Adoption Engine helps you track how people and teams are adopting the change before go-live, during rollout, and after launch so progress is visible and outcomes are measurable."}),e.jsx("p",{className:"text-sm text-slate-700",children:" It helps you answer four simple questions:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"Where are we going?"}),e.jsx("li",{children:" How will we know we've got there?"}),e.jsx("li",{children:" What needs to be in place?"}),e.jsx("li",{children:" What should we do next?"})]}),e.jsx("p",{className:"text-sm text-slate-700",children:"The goal is not just to implement change, but to ensure it is adopted, embedded and delivering benefits."})]})},{title:"What benefit does this tool give me?",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"Without it, adoption progress lives in scattered spreadsheets, memories and gut feel - hard to prove, hard to hand over, and easy to lose momentum on."}),e.jsx("p",{children:"With it, you get a single, evidenced picture of where your change effort actually stands:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1",children:[e.jsx("li",{children:"See at a glance what's on track, what's at risk, and what to do next."}),e.jsx("li",{children:`Turn vague "how's it going?" conversations into a clear, evidence-backed status you can show your sponsor or board.`}),e.jsx("li",{children:"Get a ready-made action plan for each area, so you're not starting from a blank page."}),e.jsx("li",{children:"Build a highlight report in minutes instead of an afternoon of copy-pasting."})]})]})},{title:"What is a CST?",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"A CST (Context Specific Template) contains the information that makes the Adoption Engine specific to your project, programme or initiative."}),e.jsx("p",{children:"It captures key information such as your scope, milestones, outcomes and benefits, and tailors the guidance, actions and resources provided."}),e.jsxs("p",{children:["You can update your project setup at any time from ",e.jsx("strong",{children:"Project Setup"})]})]})},{title:"Adoption Pathways",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"The Adoption Engine supports three common change journeys:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Starting for the First Time"}),e.jsx("br",{}),"Building the foundations for successful adoption."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Piloted and Ready to Scale Up"}),e.jsx("br",{}),"Expanding a successful pilot to a wider audience."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Gone Live but Adoption is Patchy"}),e.jsx("br",{}),"Strengthening adoption where uptake or benefits are lower than expected."]})]}),e.jsx("p",{children:"Choose your pathway to tailor the guidance, actions and resources you see."})]})},{title:"How the Adoption Engine Works",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"The engine is built around change components such as Vision, Sponsorship, Engagement, Capability and Benefits."}),e.jsxs("p",{children:["Each component is viewed through five ",e.jsx("strong",{children:"lenses"}),":"]}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"Strategic Direction and Leadership"}),e.jsx("li",{children:"People Experience and Culture"}),e.jsx("li",{children:"Planning and Risk"}),e.jsx("li",{children:"Skills and Behaviour"}),e.jsx("li",{children:"Process and Sustainment"})]}),e.jsx("p",{children:"As you assess your readiness of each change component through the lenses, the engine recommends actions, resources and evidence to help improve adoption."})]})},{title:"Readiness Guidance Levels",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-3",children:[e.jsx("p",{children:"Every lens is scored on the same 0-5 readiness scale. Here's what each level generally means - each lens on a component page also shows guidance written specifically for that lens at its current level."}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:Object.entries(Lt).map(([n,t])=>{const[s,a]=t.split(/:\s(.+)/);return e.jsxs("div",{className:"rounded-md border p-2.5",style:{borderLeftWidth:"4px",borderLeftColor:gi[Number(n)]},children:[e.jsxs("p",{className:"text-xs font-bold text-slate-800",children:[n," - ",s]}),e.jsx("p",{className:"mt-0.5 text-xs text-slate-600",children:a})]},n)})})]})},{title:"Getting Started",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{className:"text-sm text-slate-700",children:"Start with Project Setup to review your project setup. "}),e.jsx("p",{className:"text-sm text-slate-700",children:"Then visit the Dashboard to:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"View your current position"}),e.jsx("li",{children:"Explore components and lenses"}),e.jsx("li",{children:"Identify priority actions"}),e.jsx("li",{children:"Track progress and benefits"})]}),e.jsxs("p",{className:"text-sm text-slate-700",children:["The Adoption Engine will help guide your journey from ambition to adoption."," "]})]})}]}function pi({open:n,onClose:t,onNavigateToProjectDetails:s,onNavigateToGuide:a}){const[i,r]=m.useState(0),o=ca();if(m.useEffect(()=>{n&&r(0)},[n]),!n)return null;const u=o[i],c=i===0,h=i===o.length-1;return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:"relative w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("p",{className:"text-xs font-semibold uppercase tracking-wider text-blue-600",children:["Introduction · Step ",i+1," of ",o.length]}),e.jsx("button",{type:"button",onClick:t,className:"rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100",children:"Skip"})]}),e.jsx("h3",{className:"mt-3 text-lg font-semibold text-slate-900",children:u.title}),e.jsx("div",{className:"mt-3",children:u.body}),e.jsxs("div",{className:"mt-6 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:()=>r(l=>Math.max(0,l-1)),disabled:c,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed",children:"Back"}),h?e.jsxs("div",{className:"flex items-stretch gap-2",children:[s?e.jsx("button",{type:"button",onClick:s,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"Set up your Project"}):null,a?e.jsx("button",{type:"button",onClick:a,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"See the 6 Key Questions"}):null,e.jsx("button",{type:"button",onClick:t,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Go to dashboard"})]}):e.jsx("button",{type:"button",onClick:()=>r(l=>Math.min(o.length-1,l+1)),className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Next"})]})]})})}const hi={"avt-v2-2026":[{id:"avt-vision-case-for-change",title:"Vision and Case for Change",pageHint:"Section: Early readiness",text:"Use a clear case for change, define outcomes, and ensure leadership sponsorship before go-live."},{id:"avt-stakeholder-engagement",title:"Stakeholder Engagement",pageHint:"Section: People and communication",text:"Map stakeholder groups, identify adoption risks, and use targeted communication plans for each audience."},{id:"avt-training-readiness",title:"Training and Capability",pageHint:"Section: Capability and learning",text:"Align learning interventions with role-based needs and verify confidence through readiness checkpoints."},{id:"avt-benefits-tracking",title:"Benefits Tracking",pageHint:"Section: Value realisation",text:"Set measurable adoption indicators and review benefit evidence at regular intervals post go-live."},{id:"avt-reinforcement-bau",title:"Reinforcement and BAU Transfer",pageHint:"Section: Sustainment",text:"Embed reinforcement actions and hand over ownership to business-as-usual teams for sustained adoption."}],"change-management-v3-2023":[{id:"cmt-leadership-alignment",title:"Leadership Alignment",pageHint:"Section: Sponsorship and governance",text:"Secure visible executive sponsorship and align governance with programme milestones and risks."},{id:"cmt-change-impact",title:"Change Impact Assessment",pageHint:"Section: Planning and risk",text:"Assess process, role, and behaviour impacts early and prioritise mitigations before deployment."},{id:"cmt-resistance-management",title:"Resistance Management",pageHint:"Section: Adoption barriers",text:"Identify likely resistance themes and define practical interventions with named owners and timelines."},{id:"cmt-comms-cadence",title:"Communication Cadence",pageHint:"Section: Communications",text:"Establish a predictable communication cadence using concise updates and feedback loops."},{id:"cmt-post-go-live-support",title:"Post Go-Live Support",pageHint:"Section: Stabilisation",text:"Provide hypercare support with clear escalation routes and transition criteria into steady state."}]};ei.workerSrc=Za;function fi({toolkitChoice:n,darkMode:t=!1}){const[s,a]=m.useState(!1),[i,r]=m.useState(!1),[o,u]=m.useState(""),[c,h]=m.useState(1),[l,x]=m.useState("idle"),[b,S]=m.useState(""),[d,A]=m.useState([]),_=m.useMemo(()=>Ya(n),[n]),f=m.useMemo(()=>(hi[n]||[]).map(D=>({id:D.id,title:D.title,pageHint:D.pageHint,text:D.text,pageNumber:null})),[n]);m.useEffect(()=>{if(!s)return;let D=!1;return(async()=>{x("loading"),S("");try{const Q=await fetch(_.path);if(!Q.ok)throw new Error(`HTTP ${Q.status}`);const k=await Q.arrayBuffer(),W=new Uint8Array(k);let te;try{te=await xs({data:W}).promise}catch(q){if(te=await xs({data:W,disableWorker:!0}).promise,!D){const ce=q instanceof Error?q.message:String(q);S(`Worker fallback used: ${ce}`)}}const L=[];for(let q=1;q<=te.numPages;q+=1){if(D)return;const Pe=(await(await te.getPage(q)).getTextContent()).items.map(R=>"str"in R?R.str:"").join(" ").replace(/\s+/g," ").trim();Pe&&L.push({id:`${n}-page-${q}`,title:`Page ${q}`,pageHint:`Page ${q}`,text:Pe,pageNumber:q})}D||(A(L),x("ready"))}catch{D||(A([]),x("error"),S("Unable to read PDF text for indexing in this browser session."))}})(),()=>{D=!0}},[s,_.path,n]),m.useEffect(()=>{h(1),u(""),A([]),x("idle"),S("")},[n]);const V=d.length>0?d:f,U=m.useMemo(()=>{const D=Number.isFinite(c)&&c>0?Math.floor(c):1;return`${_.path}#page=${D}`},[_.path,c]),I=m.useMemo(()=>{const D=o.trim().toLowerCase();if(!D)return V.slice(0,5).map(k=>({entry:k,score:0}));const K=D.split(/\s+/).filter(Boolean),Q=k=>{const W=`${k.title} ${k.text} ${k.pageHint}`.toLowerCase();let te=0;return W.includes(D)&&(te+=8),K.forEach(L=>{W.includes(L)?te+=2:W.split(/\W+/).some(ce=>ce&&(ce.includes(L)||L.includes(ce)))&&(te+=1)}),te};return V.map(k=>({entry:k,score:Q(k)})).filter(k=>k.score>0).sort((k,W)=>W.score-k.score).slice(0,5)},[o,V])[0]||null;return m.useEffect(()=>{o.trim()&&I!=null&&I.entry.pageNumber&&h(I.entry.pageNumber)},[I,o]),e.jsxs("div",{className:"fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2","data-testid":"global-toolkit-chatbot",children:[s?e.jsxs("div",{className:`w-[380px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border shadow-2xl ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant"}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("button",{type:"button",onClick:()=>r(!0),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Maximise"}),e.jsx("button",{type:"button",onClick:()=>a(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Minimise"})]})]}),e.jsxs("div",{className:`space-y-3 p-3 ${t?"bg-slate-800":"bg-slate-50"}`,children:[e.jsxs("div",{className:`max-w-[95%] rounded-2xl rounded-bl-md px-3 py-2 text-xs shadow-sm ${t?"bg-slate-700 text-slate-100":"bg-white text-slate-700"}`,children:["Showing your selected toolkit from Project Setup:",e.jsx("div",{className:"mt-1 font-semibold",children:_.label})]}),e.jsx("div",{className:`overflow-hidden rounded-lg border ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:e.jsx("iframe",{title:"Selected Toolkit Preview",src:U,className:"h-[260px] w-full"})}),e.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-end gap-2",children:[e.jsx("label",{htmlFor:"toolkit-page-input",className:`text-[11px] font-semibold uppercase tracking-wider ${t?"text-slate-300":"text-slate-600"}`,children:"Go to page"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{id:"toolkit-page-input",type:"number",min:1,value:c,onChange:D=>h(Number(D.target.value)||1),className:`w-20 rounded-md border px-2 py-1.5 text-xs ${t?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})})]}),e.jsxs("div",{className:`rounded-lg border p-2 ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsx("label",{htmlFor:"toolkit-fuzzy-search",className:`mb-1 block text-[11px] font-semibold uppercase tracking-wider ${t?"text-slate-300":"text-slate-600"}`,children:"Quick snippet search"}),e.jsx("input",{id:"toolkit-fuzzy-search",type:"search",value:o,onChange:D=>u(D.target.value),placeholder:"Try: sponsorship, training, resistance",className:`w-full rounded-md border px-2 py-1.5 text-xs ${t?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-400":"border-slate-300 bg-white text-slate-900 placeholder-slate-500"}`}),e.jsx("div",{className:"mt-2",children:o.trim()?I!=null&&I.entry.pageNumber?e.jsxs("button",{type:"button",onClick:()=>{h(I.entry.pageNumber),r(!0)},className:`w-full rounded-md px-2 py-1.5 text-left text-xs font-semibold ${t?"bg-slate-800 text-slate-100 hover:bg-slate-700":"bg-slate-100 text-slate-800 hover:bg-slate-200"}`,children:["Go to best match: Page ",I.entry.pageNumber]}):e.jsx("p",{className:`text-xs ${t?"text-slate-400":"text-slate-500"}`,children:"No close page match found. Try broader keywords."}):e.jsx("p",{className:`text-xs ${t?"text-slate-400":"text-slate-500"}`,children:"Enter a keyword to jump to the most relevant page."})}),e.jsx("p",{className:`mt-2 text-[11px] ${t?"text-slate-400":"text-slate-500"}`,children:l==="loading"?"Indexing toolkit text from all pages...":l==="ready"?`Search is using full-document text (${d.length} pages indexed).`:l==="error"?"Full-document indexing unavailable, using fallback snippets.":"Search will expand to all pages when the assistant opens."}),b?e.jsx("p",{className:`mt-1 text-[11px] ${t?"text-amber-300":"text-amber-700"}`,children:b}):null]}),e.jsx("a",{href:_.path,target:"_blank",rel:"noopener noreferrer",className:"inline-block text-xs font-semibold text-[#005eb8] underline",children:"Open full toolkit in new tab"})]})]}):null,i?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4",children:e.jsxs("div",{className:`relative h-[90vh] w-[95vw] overflow-hidden rounded-2xl border shadow-2xl ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant · Expanded Viewer"}),e.jsx("button",{type:"button",onClick:()=>r(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Close"})]}),e.jsx("iframe",{title:"Selected Toolkit Full View",src:U,className:"h-[calc(90vh-42px)] w-full"})]})}):null,e.jsxs("button",{type:"button",onClick:()=>a(D=>!D),className:"inline-flex items-center gap-2 rounded-full bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-blue-700","aria-label":"Open toolkit assistant",children:[e.jsx("span",{"aria-hidden":"true",children:"💬"}),"Toolkit assistant"]})]})}function da({showAdvancedControls:n,onToggleAdvanced:t,onReset:s,resultText:a,activeFilters:i,activeFiltersAriaLabel:r,darkMode:o=!1}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:t,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${o?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:n?"Hide advanced controls":"Show advanced controls"}),e.jsx("button",{type:"button",onClick:s,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${o?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:"Reset filters"}),e.jsx("span",{className:`text-xs ${o?"text-slate-300":"text-slate-500"}`,"aria-live":"polite",children:a})]}),i.length>0?e.jsx("div",{className:"flex flex-wrap gap-2","aria-label":r,children:i.map(u=>e.jsx("span",{className:`inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-slate-50 text-slate-700"}`,children:u},u))}):null]})}const bi="nhs-digital-adoption-page-intro-seen:";function dn(n){const t=`${bi}${n}`,[s,a]=m.useState(()=>!En(t));return{isOpen:s,close:()=>{en(t,!0),a(!1)},reopen:()=>a(!0)}}function un({open:n,onClose:t,title:s,body:a,darkMode:i=!1}){return n?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-lg rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-900"}`,children:s}),e.jsx("button",{type:"button",onClick:t,"aria-label":"Close introduction",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${i?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:`mt-3 space-y-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:a}),e.jsx("div",{className:"mt-5 flex justify-end",children:e.jsx("button",{type:"button",onClick:t,className:Rn,children:"Got it"})})]})}):null}function mn({onClick:n,darkMode:t=!1}){return e.jsx("button",{type:"button",onClick:n,"aria-label":"Show page introduction",title:"Show page introduction",className:`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${t?"border-slate-600 text-slate-200 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"?"})}function xi({actions:n,onComponentClick:t,teamMembers:s=[],darkMode:a=!1}){const i=dn("action-tracker"),[r,o]=m.useState(""),[u,c]=m.useState("all"),[h,l]=m.useState("all"),[x,b]=m.useState("all"),[S,d]=m.useState("all"),[A,_]=m.useState("all"),[f,V]=m.useState("component"),[U,ee]=m.useState("asc"),[I,D]=m.useState(!1),K=m.useCallback(R=>{t(R)},[t]),Q=m.useMemo(()=>Array.from(new Set(n.map(R=>R.component))).sort((R,Z)=>R.localeCompare(Z)),[n]),k=m.useMemo(()=>Array.from(new Set([...s.map(R=>R.name),...n.map(R=>R.action.owner).filter(Boolean)])).sort((R,Z)=>R.localeCompare(Z)),[n,s]),W=m.useMemo(()=>Array.from(new Set(n.map(R=>R.action.status))).sort((R,Z)=>R.localeCompare(Z)),[n]),te=m.useMemo(()=>{const R=n.map(Z=>Z.action.actionType).filter(Z=>!!Z);return Array.from(new Set([...ut,...R])).sort((Z,re)=>Z.localeCompare(re))},[n]),L=m.useMemo(()=>{const R=n.map(Z=>Z.action.readinessScore).filter(Z=>Z!==void 0);return Array.from(new Set(R)).sort((Z,re)=>Z-re)},[n]),q={0:"Not Started",1:"Emerging",2:"Developing",3:"Embedding",4:"Adopted",5:"Thriving"},ce=m.useMemo(()=>{const R=r.trim().toLowerCase();return n.filter(re=>u!=="all"&&re.component!==u||h!=="all"&&re.action.owner!==h||x!=="all"&&re.action.status!==x||S!=="all"&&(re.action.actionType||"")!==S||A!=="all"&&re.action.readinessScore!==A?!1:R?[re.component,re.lens,re.action.text,re.action.actionType||"",re.action.owner,re.action.timescale,re.action.status].join(" ").toLowerCase().includes(R):!0).sort((re,Oe)=>{const Le=fe=>{switch(f){case"lens":return fe.lens;case"owner":return fe.action.owner||"Unassigned";case"status":return fe.action.status;case"actionType":return fe.action.actionType||"Unassigned";case"component":default:return fe.component}},Ve=Le(re).localeCompare(Le(Oe));return U==="asc"?Ve:-Ve})},[S,n,u,h,A,r,f,U,x]),pe=m.useMemo(()=>{const R=[];return r.trim()&&R.push(`Search: ${r.trim()}`),u!=="all"&&R.push(`Component: ${u}`),x!=="all"&&R.push(`Status: ${x}`),S!=="all"&&R.push(`Action type: ${S}`),A!=="all"&&R.push(`Readiness: ${q[A]}`),h!=="all"&&R.push(`Owner: ${h}`),(f!=="component"||U!=="asc")&&R.push(`Sort: ${f} (${U})`),R},[S,u,h,A,r,f,U,x]),Pe=()=>{o(""),c("all"),l("all"),b("all"),d("all"),_("all"),V("component"),ee("asc"),D(!1)};return e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"mb-6 flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${a?"text-slate-100":"text-slate-800"}`,children:"Action Tracker"}),e.jsx(mn,{onClick:i.reopen,darkMode:a})]}),e.jsx(un,{open:i.isOpen,onClose:i.close,title:"Action Tracker",darkMode:a,body:e.jsx("p",{children:"Every action across every component in one searchable, filterable, sortable table. Filter by component, owner, status, action type or readiness score, and click a row's component to jump straight to its assessment."})}),e.jsxs("div",{className:`${a?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-4 mb-6 space-y-3`,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:r,onChange:R=>o(R.target.value),placeholder:"Search actions, owners, lenses...",className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-900 text-slate-100":"text-slate-900"}`}),e.jsxs("select",{value:u,onChange:R=>c(R.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All components"}),Q.map(R=>e.jsx("option",{value:R,children:R},R))]}),e.jsxs("select",{value:x,onChange:R=>b(R.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All statuses"}),W.map(R=>e.jsx("option",{value:R,children:R},R))]})]}),e.jsx(da,{showAdvancedControls:I,onToggleAdvanced:()=>D(R=>!R),onReset:Pe,resultText:`Showing ${ce.length} actions`,activeFilters:pe,activeFiltersAriaLabel:"Active action tracker filters",darkMode:a}),I?e.jsxs("div",{className:`grid grid-cols-1 sm:grid-cols-5 gap-3 rounded-md border p-3 ${a?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("select",{value:h,onChange:R=>l(R.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),k.map(R=>e.jsx("option",{value:R,children:R},R))]}),e.jsxs("select",{value:S,onChange:R=>d(R.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),te.map(R=>e.jsx("option",{value:R,children:R},R))]}),e.jsxs("select",{value:A==="all"?"all":String(A),onChange:R=>_(R.target.value==="all"?"all":Number(R.target.value)),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All readiness levels"}),L.map(R=>e.jsx("option",{value:String(R),children:q[R]},R))]}),e.jsxs("select",{value:f,onChange:R=>V(R.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"component",children:"Sort: Component"}),e.jsx("option",{value:"lens",children:"Sort: Lens"}),e.jsx("option",{value:"owner",children:"Sort: Owner"}),e.jsx("option",{value:"actionType",children:"Sort: Action Type"}),e.jsx("option",{value:"status",children:"Sort: Status"})]}),e.jsx("button",{type:"button",onClick:()=>ee(R=>R==="asc"?"desc":"asc"),className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${a?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-white"}`,children:U==="asc"?"A-Z":"Z-A"})]}):null]}),e.jsx("div",{className:`${a?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:ce.length?e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:`min-w-full table-fixed ${a?"divide-slate-700":"divide-slate-200"} divide-y`,children:[e.jsx("thead",{className:a?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Change Component"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Lens"}),e.jsx("th",{className:`w-[22%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Action Type"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Timescale"}),e.jsx("th",{className:`w-[14%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Status"})]})}),e.jsx("tbody",{className:`${a?"bg-slate-800 divide-slate-700":"bg-white divide-slate-100"} divide-y`,children:ce.map(({compId:R,component:Z,lens:re,action:Oe})=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-4 py-3 text-sm ${a?"text-slate-100":"text-slate-700"}`,children:e.jsx("button",{onClick:()=>K(R),className:"text-left underline underline-offset-2 hover:text-[#005eb8] transition-colors",children:Z})}),e.jsx("td",{className:`px-4 py-3 text-sm ${a?"text-slate-300":"text-slate-500"}`,children:re}),e.jsx("td",{className:`w-[22%] px-4 py-3 text-sm whitespace-normal break-words leading-snug ${a?"text-slate-100":"text-slate-700"}`,children:Oe.text}),e.jsx("td",{className:`px-4 py-3 text-sm ${a?"text-slate-100":"text-slate-700"}`,children:Oe.actionType||"Unassigned"}),e.jsx("td",{className:`px-4 py-3 text-sm ${a?"text-slate-100":"text-slate-700"}`,children:Oe.owner}),e.jsx("td",{className:`px-4 py-3 text-sm ${a?"text-slate-100":"text-slate-700"}`,children:Oe.timescale}),e.jsx("td",{className:"w-[14%] px-4 py-3 text-sm",children:e.jsx("span",{className:`inline-flex rounded-full border px-2 py-1 text-xs font-semibold ${On[rn(Oe.status)]}`,children:rn(Oe.status)})})]},`${R}-${re}-${Oe.text}`))})]})}):e.jsx("div",{className:`p-6 ${a?"text-slate-300":"text-slate-500"}`,children:n.length?"No actions match the current filters.":"No actions recorded yet."})})]})}function ua(n,t){if(n<=0)return"Amber";const s=t-n;return s>=2?"Red":s>0?"Amber":"Green"}function Si(n,t=new Date){if(n.length===0)return{status:"Green",reason:"No outstanding actions at the current level."};const s=n.map(u=>({action:u,due:u.dueDate?new Date(u.dueDate):null})).map(({action:u,due:c})=>({action:u,due:c&&!isNaN(c.getTime())?c:null})),a=s.filter(({due:u})=>u!==null&&u<t);if(a.length>0){const u=a.length>1?` and ${a.length-1} more`:"";return{status:"Red",reason:`${a.length} action${a.length===1?" is":"s are"} overdue: "${a[0].action.text}"${u}.`}}const i=new Date(t.getTime()+14*24*60*60*1e3),r=s.filter(({due:u})=>u!==null&&u<=i);return r.length>0?{status:"Amber",reason:`${r.length} action${r.length===1?" is":"s are"} due within 14 days: "${r[0].action.text}".`}:s.filter(({due:u})=>u===null).length===n.length?{status:"Amber",reason:`${n.length} action${n.length===1?" has":"s have"} no due date set, so timeline risk can't be assessed.`}:{status:"Green",reason:"All outstanding actions are on track against their due dates."}}const ma={Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},yi={Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"},ln={1:"Pre-Discovery",2:"Solution Design",3:"Development",4:"Deployment / Go Live",5:"Post-Deployment"},vi={sampleRubric:[{id:"r1",label:"Leadership",max:5},{id:"r2",label:"Culture",max:5}],adoptionRubric:[{id:"a1",label:"Adoption awareness",max:100},{id:"a2",label:"Training coverage",max:100}],vision:{"Strategic Direction and Leadership":{1:"Senior leaders take initial steps to develop the vision through workshops and discussions, beginning to align on a shared future direction and its link to strategic objectives.",2:"A draft vision has been created and is being tested and refined with a wider group to check clarity, relevance and alignment to strategy.",3:"A clear vision is defined and agreed at senior level but not yet consistently communicated to all stakeholders.",4:"Senior leaders consistently communicate the vision and link it to organisational goals, priorities and decisions.",5:"Leaders speak with one voice about the vision, actively reinforcing it through actions and decisions and ensuring it is well understood across the organisation."},"People Experience and Culture":{1:"Early conversations focus on what is changing but staff involvement is limited. The vision is not yet clear or meaningful to most people.",2:"The draft vision is tested with a wider audience. Staff input is sought to check relevance and whether the vision reflects real experiences and concerns. Feedback is used to refine the vision.",3:`The vision is defined but not yet consistently communicated to all stakeholders.

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

There is a clearer plan for sustainment, although it is still being embedded and tested.`,3:"Key processes, roles, and measures are in place and being followed. The change is being maintained in practice, with issues identified and addressed as they arise.",4:"The change is embedded into day-to-day operations. Processes are consistently followed, and performance is stable, with benefits starting to be realised.",5:"The change is fully sustained as “the way we do things.” Processes are regularly reviewed and improved, and performance continues to strengthen over time."}}},Ft={1:{vision:5,case_for_change:5,sponsorship:1,change_network:1,benefits:1,change_impact:1,risk_management:1,cm_readiness:1,stakeholder:1,resistance:1,skills_learning:1,capability:1,change_adoption:1,process_change:1,reinforcement:1,org_maturity:1,transfer_bau:1},2:{vision:5,case_for_change:5,sponsorship:2,change_network:2,benefits:3,change_impact:2,risk_management:2,cm_readiness:2,stakeholder:2,resistance:2,skills_learning:2,capability:2,change_adoption:2,process_change:3,reinforcement:2,org_maturity:2,transfer_bau:2},3:{vision:5,case_for_change:5,sponsorship:3,change_network:3,benefits:4,change_impact:3,risk_management:3,cm_readiness:3,stakeholder:3,resistance:3,skills_learning:4,capability:3,change_adoption:3,process_change:4,reinforcement:3,org_maturity:3,transfer_bau:3},4:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:4,stakeholder:5,resistance:4,skills_learning:5,capability:4,change_adoption:4,process_change:5,reinforcement:4,org_maturity:4,transfer_bau:4},5:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:5,stakeholder:5,resistance:5,skills_learning:5,capability:5,change_adoption:5,process_change:5,reinforcement:5,org_maturity:5,transfer_bau:5}};function pt(n,t,s){return!t||!Ft[t]?s:Ft[t][n]??s}function wi(n){const t=Number((n==null?void 0:n.score)||0),s=((n==null?void 0:n.actions)||[]).some(a=>a.readinessScore===0);return t===0&&!s?1:t}function Ni(n,t){const s=[];return n.lenses.forEach(a=>{const i=t(n.id,a),r=wi(i);((i==null?void 0:i.actions)||[]).forEach(o=>{(o.readinessScore??r)===r&&!Wt(o.status)&&s.push({id:o.id,text:o.text,lens:a,owner:o.owner||"",status:o.status||"",dueDate:o.dueDate||""})})}),s}function ga(n,t,s){return n.filter(a=>a.phase===s).map(a=>{const i=Ni(a,t),{status:r,reason:o}=Si(i),u=`${i.length} action${i.length===1?"":"s"} pending completion.`;return{componentId:a.id,componentLabel:a.label,phase:a.phase,gapToTarget:0,bragStatus:r,bragReason:o,summary:u,message:`${a.label}: ${u}`,outstandingActions:i}}).filter(a=>a.outstandingActions.length>0).sort((a,i)=>{const r={Red:0,Amber:1,Green:2,Blue:3};return r[a.bragStatus]!==r[i.bragStatus]?r[a.bragStatus]-r[i.bragStatus]:i.outstandingActions.length-a.outstandingActions.length})}function ws(n,t){var A;let s=0,a=0,i=0,r=0;const o=new Map;t.forEach(_=>{const f=o.get(_.phase)||{componentCount:0,assessedLenses:0,totalLenses:0,onTrackComponents:0,totalActions:0,completedActions:0};f.componentCount+=1,f.totalLenses+=_.lenses.length;let V=0;_.lenses.forEach(I=>{var k;const D=(k=n.currentDraft[_.id])==null?void 0:k[I],K=Number((D==null?void 0:D.score)||0);s+=K,V+=K,K>0&&(a+=1,f.assessedLenses+=1),((D==null?void 0:D.actions)||[]).forEach(W=>{i+=1,f.totalActions+=1,Wt(W.status)&&(r+=1,f.completedActions+=1)})});const U=_.lenses.length?Number((V/_.lenses.length).toFixed(1)):0,ee=pt(_.id,_.phase,_.target);U>=ee&&(f.onTrackComponents+=1),o.set(_.phase,f)});const u=t.reduce((_,f)=>_+f.lenses.length,0),c=u*5,h=c?Math.round(s/c*100):0,l=i?Math.round(r/i*100):0,x=[...o.entries()].sort(([_],[f])=>_-f).map(([_,f])=>{const V=f.totalActions?Math.round(f.completedActions/f.totalActions*100):0,U=f.componentCount?f.onTrackComponents/f.componentCount:0,ee=U>=.75&&V>=50?"Green":U>=.4||V>=25?"Amber":"Red";return{phase:_,componentCount:f.componentCount,assessedLenses:f.assessedLenses,totalLenses:f.totalLenses,onTrackComponents:f.onTrackComponents,actionCompletionPct:V,rag:ee}}),b=x.find(_=>_.onTrackComponents<_.componentCount),S=(b==null?void 0:b.phase)||((A=x[x.length-1])==null?void 0:A.phase)||1,d=ga(t,(_,f)=>{var V;return(V=n.currentDraft[_])==null?void 0:V[f]},S);return{totalCurrent:s,assessedCount:a,totalExpected:u,overallPct:h,totalActions:i,completedActions:r,actionCompletionPct:l,currentPhase:S,phaseSummaries:x,nextSteps:d}}function Ci(n,t,s,a){return t.map(i=>{let r=0,o=0;return s.forEach(u=>{u.lenses.includes(i)&&(r+=Number(a(u.id,i).score||0),o+=1)}),o?Number((r/o).toFixed(1)):0})}function Ei(n,t){return n.map(s=>{let a=0,i=0;return t.forEach(r=>{r.lenses.includes(s)&&(a+=r.target,i+=1)}),i?Number((a/i).toFixed(1)):0})}function ki(n,t,s,a){const i=Ci(n,t,s,a),r=Ei(t,s);return{labels:t,datasets:[{label:"Current Score",data:i,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",borderWidth:2,pointRadius:4,pointHoverRadius:6},{label:"Target",data:r,borderColor:"#00A499",backgroundColor:"rgba(0, 164, 153, 0.05)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function ji(n,t,s){const a=s&&Ft[s]?s:null,i=o=>o<=0?"#768692":o<1.5?"#AE2521":o<2.5?"#FFB81C":o<3.5?"#005EB8":o<4.5?"#330072":"#00A499",r=n.map(o=>{const u=o.lenses.reduce((c,h)=>c+Number(t(o.id,h).score||0),0);return Number((u/o.lenses.length).toFixed(1))});return{labels:n.map(o=>o.label),datasets:[{label:"Current Average Readiness",data:r,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.12)",borderWidth:2,pointRadius:4,pointHoverRadius:6,pointBackgroundColor:r.map(i),pointBorderColor:r.map(i)},{label:a?`Exemplar (Phase ${a})`:"Target Average",data:n.map(o=>pt(o.id,a||void 0,o.target)),borderColor:"#94a3b8",backgroundColor:"rgba(148, 163, 184, 0.06)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function Ii(n,t,s){const a=[],i=new Set,r=(o,u,c)=>{const h=`${c.id}:${o}:${u}`;if(i.has(h))return;i.add(h);const l=t(o);a.push({compId:o,component:l.label,lens:u,action:{...c}})};return Object.keys(n.currentDraft).forEach(o=>{Object.keys(n.currentDraft[o]).forEach(u=>{(s(o,u).actions||[]).forEach(h=>{(h.linkedTargets&&h.linkedTargets.length?h.linkedTargets:[{componentId:o,lens:u}]).forEach(x=>{r(x.componentId,x.lens,h)})})})}),a}function Ai(n,t,s){var c;const a=((c=n.objectives)==null?void 0:c[t])||[],i=h=>h.reduce((l,x)=>(l[x]=s(t,x).actions,l),{}),r=Array.from(new Set(a.flatMap(h=>h.linkedActions.map(l=>l.lens)))),o=i(r),u=a.filter(h=>Tt(h,o)==="Completed").length;return{total:a.length,completed:u}}const Ns=7*24*60*60*1e3,_i=30*24*60*60*1e3;function Oi(n,t,s){const a=[];t.phaseSummaries.forEach(d=>{const A=ln[d.phase]||`Phase ${d.phase}`;a.push({id:`phase-${d.phase}-assessed`,category:"Phase",label:`Phase ${d.phase}: ${A} - fully assessed`,description:"Every lens across this phase's components has been scored.",completed:d.totalLenses>0&&d.assessedLenses===d.totalLenses}),a.push({id:`phase-${d.phase}-on-track`,category:"Phase",label:`Phase ${d.phase}: ${A} - on track`,description:"Every component in this phase is scoring at or above its exemplar target for where the programme is now.",completed:d.componentCount>0&&d.onTrackComponents===d.componentCount})});const i=Object.values(n.currentDraft).flatMap(d=>Object.values(d).flatMap(A=>A.actions||[]));a.push({id:"all-actions-owned",category:"Ownership",label:"Every action has an owner",description:"No actions are left unassigned.",completed:i.length>0&&i.every(d=>{var A;return!!((A=d.owner)!=null&&A.trim())})});const r=Object.values(n.objectives||{}).flat();a.push({id:"all-outcomes-owned",category:"Ownership",label:"Every outcome has an owner",description:"No outcomes are left unassigned.",completed:r.length>0&&r.every(d=>{var A;return!!((A=d.owner)!=null&&A.trim())})});const o=Date.now(),u=n.auditLog||[],c=u.filter(d=>o-new Date(d.timestamp).getTime()<=Ns);a.push({id:"active-this-week",category:"Cadence",label:"Active this week",description:"At least one update has been made in the last 7 days.",completed:c.length>0});const h=new Set;u.forEach(d=>{const A=Math.floor((o-new Date(d.timestamp).getTime())/Ns);A>=0&&A<4&&h.add(A)}),a.push({id:"four-week-cadence",category:"Cadence",label:"Steady progress: updated every week for a month",description:`${h.size}/4 of the last 4 weeks have at least one update.`,completed:h.size>=4}),a.push({id:"month-finalised",category:"Cadence",label:"This month finalised",description:"The current month has a finalised snapshot, so progress this month is captured for the trend.",completed:(n.history||[]).some(d=>d.monthLabel===s)});const l=n.orgProfile.teamMembers||[];a.push({id:"team-roster-started",category:"Team",label:"Team roster started",description:"At least 2 team members have been added.",completed:l.length>=2});const x=u.filter(d=>o-new Date(d.timestamp).getTime()<=_i),b=new Set(x.map(d=>d.actor));a.push({id:"multiple-contributors",category:"Team",label:"Multiple contributors this month",description:"More than one person has made updates in the last 30 days.",completed:b.size>=2});const S=new Set(i.map(d=>{var A;return(A=d.owner)==null?void 0:A.trim().toLowerCase()}).filter(d=>!!d));return a.push({id:"ownership-spread",category:"Team",label:"Ownership spread across the team",description:"Actions are owned by more than one person, not concentrated on one.",completed:S.size>=2}),a}const Ri=`Pathway 1 - We are starting $projectName for the first time
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
adoption.`,kt={"Pathway 1 - We are starting product for the first time":"pathway-1","Pathway 2 - We have piloted product and need to scale up":"pathway-2","Pathway 3 - product is live but adoption is patchy":"pathway-3","Pathway 1 - Pilot":"pathway-1","Pathway 2 - Scale up":"pathway-2","Pathway 3 - Reassess":"pathway-3"},Pi={vision:"Vision",case_for_change:"Case for Change",sponsorship:"Senior Sponsorship and Governance",change_network:"Change Network",benefits:"Benefits and WIIFM",stakeholder:"Stakeholder Engagement and Communication",process_change:"Process Change and Ways of Working",change_impact:"Change Impact and Risk",risk_management:"Change Impact and Risk",skills_learning:"Skills, Learning, Capability and Confidence",capability:"Skills, Learning, Capability and Confidence",change_adoption:"Change Adoption",transfer_bau:"Transfer to BAU",reinforcement:"Reinforcement",resistance:"Resistance",cm_readiness:"Readiness and Planning",org_maturity:"Organisational Change Management Maturity"};function Di(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function jt(n){return n.replace(/\bAVT\b/g,"${productName}")}function $i(n){const t=n.split(/\r?\n/).map(i=>i.trim()),s={};let a=0;for(;a<t.length;){const i=t[a],r=kt[i];if(!r){a+=1;continue}for(a+=1;a<t.length&&!t[a];)a+=1;if(a>=t.length)break;const o=t[a];for(a+=1;a<t.length&&(!t[a]||t[a]==="Are you on track?");)a+=1;let u="";if(a<t.length&&t[a].startsWith("Descriptor:"))for(u=jt(t[a].replace("Descriptor:","").trim()),a+=1;a<t.length&&t[a]&&!t[a].startsWith("☐")&&!t[a].startsWith("ARE YOU ON TRACK?")&&!kt[t[a]];)u=jt(`${u} ${t[a]}`.trim()),a+=1;const c=[];for(;a<t.length&&t[a].startsWith("☐");){const h=jt(t[a].replace(/^☐\s*/,"").trim()),l=`${r}:${Di(o)}:${c.length+1}`;c.push({key:l,text:h}),a+=1}for(s[o]||(s[o]={}),s[o][r]={domain:o,descriptor:u,checklist:c};a<t.length&&t[a]&&!kt[t[a]];)a+=1}return s}const Ti=$i(Ri);function Li(n){return Pi[n]||null}function Kt(n,t){var a;const s=Li(n);return s&&((a=Ti[s])==null?void 0:a[t])||null}function pa(n,t){if(!t||t.checklist.length===0)return{status:"on-track",completionPct:100,checkedCount:0,totalCount:0};const s=t.checklist.length,a=new Set(n),i=t.checklist.filter(o=>a.has(o.key)).length,r=Math.round(i/s*100);return r>=80?{status:"on-track",completionPct:r,checkedCount:i,totalCount:s}:r>=45?{status:"attention",completionPct:r,checkedCount:i,totalCount:s}:{status:"off-track",completionPct:r,checkedCount:i,totalCount:s}}function Bi(n){const t=pa(n.checkedItemKeys,n.rule);return!n.rule||n.rule.checklist.length===0?{status:n.averageScore>=n.targetScore?"on-track":"attention",completionPct:t.completionPct,checkedCount:t.checkedCount,totalCount:t.totalCount}:t.status==="off-track"?t:n.averageScore<Math.max(1,n.targetScore-1)&&t.status!=="on-track"?{...t,status:"attention"}:t}const Fi=["Strategic Direction and Leadership","People Experience and Culture","Planning and Risk","Skills and Behaviour","Process and Sustainment"],Yt={"Strategic Direction and Leadership":{outcome:"Provide a clear and unifying direction for the change, backed by visible, empowered leadership that removes barriers, prioritises resources, and drives accountability.",whatGoodLooksLike:"Leaders speak with one voice, consistently reinforcing the vision and outcomes. Decisions are timely, transparent, and aligned to strategic priorities. Governance is purposeful, with clear roles and escalations. Everyone understands why the change is happening and how it connects to organisational goals."},"People Experience and Culture":{outcome:"Create the conditions where people feel informed, supported, safe, and motivated, creating a culture that embraces the change rather than resists it.",whatGoodLooksLike:"Staff feel involved, heard, and respected. Communication is timely, honest, and tailored to different roles. People know how the change affects them and feel psychologically safe to raise concerns. Change Champions are active, engagement is high, and belief improves over time. Behaviours begin to shift organically as trust grows."},"Planning and Risk":{outcome:"Use evidence, data, and structured analysis to plan the change effectively, anticipate impacts, manage risks, and inform decision-making throughout delivery.",whatGoodLooksLike:"Impacts are well understood and documented. Risks are identified early and mitigated proactively. Baselines and KPIs are established before implementation, with benefits tracked throughout. Pilots and readiness checks ensure no surprises. Decisions are grounded in insight, not opinion."},"Skills and Behaviour":{outcome:"Give people the capabilities, confidence, and behavioural habits they need to adopt the new ways of working consistently and sustainably.",whatGoodLooksLike:"Staff are trained, assessed, and supported in ways that match real-world workflows. New behaviours are clearly defined, reinforced by leaders, and evident in day-to-day practice. Change Champions and Super-users are active; confidence grows over time; and requests for support decrease as competence increases."},"Process and Sustainment":{outcome:"Embed the change into operational processes, ensuring it becomes the way we do things, and create mechanisms for continuous improvement and long-term stability.",whatGoodLooksLike:"Updated SOPs, workflows, and ownership structures are in place and being followed. Issues are resolved quickly. Benefits are monitored and reported regularly. Improvements continue beyond go-live, with clear BAU ownership. The change stabilises and performance gains hold or increase over time."}},Gi={vision:"Defines the future state and why the change matters.",case_for_change:"Builds a clear, credible rationale and expected benefits.",sponsorship:"Secures visible leadership ownership, governance, and decisions.",change_network:"Builds and mobilises change agents and local champions.",benefits:"Tracks baseline, benefits ownership, and value realisation.",change_impact:"Assesses who is impacted and the scale of change required.",risk_management:"Identifies, tracks, and mitigates adoption and delivery risks.",cm_readiness:"Confirms readiness, sequencing, and change planning discipline.",stakeholder:"Plans and delivers stakeholder engagement and communications.",resistance:"Anticipates and addresses resistance with practical interventions.",skills_learning:"Designs learning, support, and reinforcement for role readiness.",capability:"Builds confidence and competence to adopt new ways of working.",change_adoption:"Measures uptake and consistency of new behaviours in practice.",process_change:"Embeds workflow changes into everyday operational delivery.",reinforcement:"Sustains momentum so adoption does not decay after launch.",org_maturity:"Improves long-term organisational change capability and maturity.",transfer_bau:"Transitions ownership into BAU with clear accountability."};function Ui(n){return Gi[n]||"Component description not yet defined."}function Mi(n){const s=Yt[n];return s?`This lens ${s.outcome.charAt(0).toLowerCase()}${s.outcome.slice(1)}`:"This lens provides an additional perspective on how each component is landing across teams and services."}const Cs={small:560,medium:680,large:1e3};function Vi(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Es(n,t,s,a,i){return i?"Blue":s<=0?"N/A":a<=0?"Amber":n>=t&&a<s?"Green":ua(n,t)}const Hi={"N/A":"text-slate-600 bg-slate-200",Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},ks=["#0f766e","#0369a1","#7c3aed","#b45309","#be123c"],Wi=[{score:0,label:"Pre-Emergent",color:"#768692"},{score:1,label:"Emerging",color:"#AE2521"},{score:2,label:"Developing",color:"#FFB81C"},{score:3,label:"Maturing",color:"#005EB8"},{score:4,label:"Embedding",color:"#330072"},{score:5,label:"Thriving",color:"#00A499"}];function qi({store:n,components:t,lenses:s,metrics:a,getEntry:i,onComponentClick:r,pathway:o,pathwayChecks:u,onNavigate:c,onOpenLensInfo:h,onOpenOnboarding:l,colorAccessibilityMode:x="standard",darkMode:b=!1,phaseFocusMode:S="auto",manualPhaseFocus:d,onPhaseFocusModeChange:A,onManualPhaseFocusChange:_,onResetPhaseFocus:f,componentRadarVisible:V=!0,onComponentRadarVisibleChange:U,componentRadarSize:ee="medium",onComponentRadarSizeChange:I}){const D=dn("dashboard"),[K,Q]=m.useState(""),[k,W]=m.useState("all"),[te,L]=m.useState(()=>a.currentPhase),[q,ce]=m.useState("all"),[pe,Pe]=m.useState("score"),[R,Z]=m.useState("desc"),[re,Oe]=m.useState(!1),[Le,Ve]=m.useState(!1),fe=m.useMemo(()=>[...new Set(t.map(j=>j.phase))].sort((j,Y)=>j-Y),[t]),tn=a.currentPhase,De=S==="manual"&&d&&fe.includes(d)?d:tn,[Ke,sn]=m.useState(!0),Ne=m.useMemo(()=>n.history.length>0?n.history[n.history.length-1]:null,[n.history]),v=Ne!==null?a.overallPct-Ne.overallPercentage:null,T=m.useMemo(()=>{if(a.assessedCount===0)return!1;const j=new Date().toLocaleString("en-GB",{month:"short",year:"numeric"});return!n.history.some(Y=>Y.monthLabel===j)},[n.history,a.assessedCount]),N=m.useMemo(()=>{const j=new Date;j.setHours(0,0,0,0);const Y=new Date(j);Y.setDate(j.getDate()+7);const ne=[];return t.forEach(me=>{me.lenses.forEach(Ee=>{i(me.id,Ee).actions.forEach(ge=>{if(!ge.dueDate||ge.status==="Completed"||ge.status==="Cancelled")return;const we=new Date(ge.dueDate);isNaN(we.getTime())||we<=Y&&ne.push({action:ge,componentLabel:me.label,componentId:me.id,isOverdue:we<j})})})}),ne.sort((me,Ee)=>new Date(me.action.dueDate).getTime()-new Date(Ee.action.dueDate).getTime())},[t,i,n.currentDraft]),P=m.useMemo(()=>{const j=K.trim().toLowerCase();return t.map(Y=>{let ne=0,me=!0,Ee=0,ge=0;Y.lenses.forEach(Je=>{const We=i(Y.id,Je),qe=Number(We.score||0);ne+=qe,qe!==5&&(me=!1);const y=We.actions||[];Ee+=y.length,ge+=y.filter(O=>O.status==="Completed").length});const we=Number((ne/Y.lenses.length).toFixed(1)),z=pt(Y.id,De,Y.target),He=we===0?"not-started":we>=z?"on-track":"below-target";let Qe=null;if(Ne){let Je=0;Y.lenses.forEach(y=>{var O,H;Je+=Number(((H=(O=Ne.data[Y.id])==null?void 0:O[y])==null?void 0:H.score)||0)});const We=Number((Je/Y.lenses.length).toFixed(1)),qe=Number((we-We).toFixed(1));qe!==0&&(Qe=qe)}return{component:Y,avgNum:we,exemplarTarget:z,status:He,delta:Qe,actionCount:Ee,completedActionCount:ge,allLensesLevelFive:me}}).filter(({component:Y,status:ne})=>k!=="all"&&ne!==k||te!=="all"&&Y.phase!==te?!1:j?Y.label.toLowerCase().includes(j):!0).sort((Y,ne)=>{let me=0;return pe==="name"?me=Y.component.label.localeCompare(ne.component.label):pe==="target"?me=Y.component.target-ne.component.target:me=Y.avgNum-ne.avgNum,R==="asc"?me:-me})},[t,te,De,i,Ne,K,pe,R,k]),M=m.useMemo(()=>{let j=0,Y=0;t.forEach(me=>{var we;const Ee=Kt(me.id,o),ge=pa(((we=u[me.id])==null?void 0:we[o])||[],Ee);j+=ge.totalCount,Y+=ge.checkedCount});const ne=j>0?Math.round(Y/j*100):100;return{required:j,checked:Y,pct:ne}},[t,o,u]),ye=m.useMemo(()=>{const j=[];return K.trim()&&j.push(`Search: ${K.trim()}`),k!=="all"&&j.push(`Status: ${k.replace("-"," ")}`),te!=="all"&&j.push(`Phase: ${te}`),(pe!=="score"||R!=="desc")&&j.push(`Sort: ${pe} (${R})`),j},[te,K,pe,R,k]),Re=()=>{Q(""),W("all"),L("all"),Pe("score"),Z("desc"),Oe(!1)},he=a.phaseSummaries.find(j=>j.phase===De),$e=(he==null?void 0:he.rag)||"Red",yn=$e.toLowerCase(),Ye=x==="color-blind-friendly"?{"N/A":"text-slate-700 bg-slate-200",Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"}:Hi;return e.jsxs("div",{className:`adoption-dashboard max-w-6xl mx-auto ${b?"theme-dark":"theme-light"}`,children:[Ke&&N.length>0&&e.jsx("div",{className:"mb-6 rounded-lg border border-red-200 bg-red-50 p-4",children:e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-sm font-semibold text-red-800 mb-2",children:[N.filter(j=>j.isOverdue).length>0&&`${N.filter(j=>j.isOverdue).length} overdue action${N.filter(j=>j.isOverdue).length>1?"s":""}`,N.filter(j=>j.isOverdue).length>0&&N.filter(j=>!j.isOverdue).length>0&&", ",N.filter(j=>!j.isOverdue).length>0&&`${N.filter(j=>!j.isOverdue).length} due within 7 days`]}),e.jsxs("ul",{className:"space-y-1.5",children:[N.slice(0,3).map(j=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`shrink-0 text-xs font-bold px-1.5 py-0.5 rounded ${j.isOverdue?"bg-red-200 text-red-800":"bg-amber-100 text-amber-800"}`,children:j.isOverdue?"Overdue":"Due soon"}),e.jsxs("span",{className:"text-xs text-slate-700",children:[e.jsx("button",{onClick:()=>r(j.componentId),className:"font-medium text-[#005eb8] hover:underline mr-1",children:j.componentLabel}),"— ",j.action.text,j.action.dueDate&&e.jsxs("span",{className:"text-slate-400 ml-1",children:["(due"," ",new Date(j.action.dueDate).toLocaleDateString("en-GB",{day:"numeric",month:"short"}),")"]})]})]},j.action.id)),N.length>3&&e.jsxs("li",{className:"text-xs text-slate-500 pl-1",children:["+ ",N.length-3," more - see the Action Tracker for the full list."]})]})]}),e.jsx("button",{onClick:()=>sn(!1),className:"shrink-0 text-slate-400 hover:text-slate-600 text-xl leading-none","aria-label":"Dismiss",children:"×"})]})}),e.jsxs("div",{className:"mb-1 flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${b?"text-slate-100":"text-slate-800"}`,children:"Adoption Engine Dashboard"}),e.jsx(mn,{onClick:D.reopen,darkMode:b})]}),l?e.jsx("button",{type:"button",onClick:l,className:"rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Show introduction again"}):null]}),e.jsxs("p",{className:`text-sm mb-6 ${b?"text-slate-300":"text-slate-600"}`,children:["This tracks how ready ",n.orgProfile.projectName||"your programme"," is for adoption, based on ",t.length," change-management components, each assessed through up to"," ",s.length," lenses."]}),e.jsxs("div",{className:"dashboard-callout dashboard-callout--pathway mb-6 rounded-lg border p-4",children:[e.jsx("p",{className:"dashboard-callout__eyebrow text-xs font-semibold uppercase tracking-wider",children:"Current CST pathway"}),e.jsx("p",{className:"dashboard-callout__title mt-1 text-sm font-semibold",children:bt[o]}),e.jsxs("p",{className:"dashboard-callout__body mt-1 text-sm",children:["Pathway checklist completion: ",M.checked,"/",M.required," (",M.pct,"%)."]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[e.jsxs("div",{className:`${b?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${b?"text-slate-300":"text-slate-500"}`,children:"Live Delivery Progress"}),e.jsxs("div",{className:"flex items-end gap-3",children:[e.jsxs("span",{className:"text-4xl font-bold text-[#005eb8]",children:[a.overallPct,"%"]}),v!==null&&e.jsxs("span",{className:`text-sm font-semibold mb-1 ${v>0?"text-green-600":v<0?"text-red-500":"text-slate-400"}`,children:[v>0?"↑":v<0?"↓":"="," ",Math.abs(v),"% vs last month"]})]}),e.jsx("div",{className:"mt-4 w-full bg-slate-100 rounded-full h-3 relative overflow-hidden",children:e.jsx("div",{className:"absolute top-0 left-0 h-full bg-[#005eb8]",style:{width:`${a.overallPct}%`}})}),e.jsx("div",{className:"flex justify-between text-xs mt-2 text-slate-400",children:e.jsx("span",{children:"Derived from current working data across all components."})})]}),e.jsxs("div",{className:`dashboard-metric-card dashboard-metric-card--phase dashboard-metric-card--${yn} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:"dashboard-metric-card__label text-sm font-medium mb-1",children:"Current Phase Focus"}),e.jsxs("div",{className:"mb-2 flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>A==null?void 0:A("auto"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${S==="auto"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Auto"}),e.jsx("button",{type:"button",onClick:()=>A==null?void 0:A("manual"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${S==="manual"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Manual"}),S==="manual"?e.jsx("select",{value:De,onChange:j=>_==null?void 0:_(Number(j.target.value)),className:"rounded-md border border-white/50 bg-white/90 px-2 py-1 text-xs font-medium text-slate-800","aria-label":"Manual phase focus",children:fe.map(j=>e.jsx("option",{value:j,children:ln[j]||`Phase ${j}`},j))}):null,S==="manual"&&f?e.jsx("button",{type:"button",onClick:f,className:"rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100",children:"Reset to suggested"}):null]}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsx("span",{className:"dashboard-metric-card__headline text-4xl font-bold",children:ln[De]||`Phase ${De}`})}),e.jsxs("p",{className:"dashboard-metric-card__description text-sm mt-2",children:[$e," status based on delivery progress and action completion.",S==="manual"?` Suggested phase is ${ln[tn]||`Phase ${tn}`}.`:""]})]}),e.jsxs("div",{className:`${b?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${b?"text-slate-300":"text-slate-500"}`,children:"Action Completion"}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsxs("span",{className:`text-4xl font-bold ${b?"text-slate-100":"text-slate-700"}`,children:[a.actionCompletionPct,"%"]})}),e.jsxs("p",{className:`text-sm mt-2 ${b?"text-slate-300":"text-slate-500"}`,children:[a.completedActions," actions completed. Keep it up!"]})]})]}),T&&e.jsxs("div",{className:"dashboard-callout dashboard-callout--snapshot rounded-lg border p-4 flex items-center gap-3 mb-8",children:[e.jsx("span",{className:"dashboard-callout__icon text-xl shrink-0",children:"📅"}),e.jsxs("p",{className:"dashboard-callout__body text-sm",children:[e.jsx("strong",{children:"This month hasn't been recorded yet."})," Use"," ",e.jsx("span",{className:"font-semibold",children:"'Finalise Month'"})," in the header to snapshot today's progress and build your delivery trajectory."]})]}),a.assessedCount===0?e.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-8 border border-slate-200 mb-8 text-center",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800",children:"Getting started"}),e.jsx("p",{className:"text-sm text-slate-600 mt-2 max-w-xl mx-auto",children:"Nothing has been assessed yet, so there's nothing to chart. Set up your Project first, then start scoring your first component to see your readiness build up here."}),e.jsxs("div",{className:"mt-4 flex items-center justify-center gap-3",children:[c?e.jsx("button",{type:"button",onClick:()=>c("project-details"),className:"rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Set up your Project"}):null,t[0]?e.jsx("button",{type:"button",onClick:()=>r(t[0].id),className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Start your first assessment"}):null]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${b?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-1 ${b?"text-slate-100":"text-slate-800"}`,children:"Phase Progress (RAG)"}),e.jsxs("p",{className:`text-sm mb-4 ${b?"text-slate-300":"text-slate-500"}`,children:["Phases run 1 to 5, from early readiness at go-live through to fully embedding the change."," ",c?e.jsx("button",{type:"button",onClick:()=>c("cm-guide"),className:"font-medium text-[#005eb8] hover:underline",children:"See Adoption Engine Onboarding"}):null]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:a.phaseSummaries.map(j=>{const Y=j.rag==="Green"?"bg-green-100 text-green-700":j.rag==="Amber"?"bg-amber-100 text-amber-700":"bg-red-100 text-red-700",ne=j.totalLenses?Math.round(j.assessedLenses/j.totalLenses*100):0;return e.jsxs("div",{className:`rounded-md border p-4 ${b?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:`font-semibold ${b?"text-slate-100":"text-slate-800"}`,children:ln[j.phase]||`Phase ${j.phase}`}),e.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded ${Y}`,children:j.rag})]}),e.jsxs("p",{className:`text-xs ${b?"text-slate-300":"text-slate-600"}`,children:[j.onTrackComponents,"/",j.componentCount," components on target"]}),e.jsxs("p",{className:`text-xs mt-1 ${b?"text-slate-300":"text-slate-600"}`,children:[ne,"% lens coverage, ",j.actionCompletionPct,"% actions complete"]})]},j.phase)})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"order-2 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8",children:[e.jsxs("div",{className:`${b?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border flex flex-col`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-4 ${b?"text-slate-100":"text-slate-800"}`,children:"Readiness Trajectory"}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${b?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:n.history.length>0?e.jsx("canvas",{id:"adoption-line-chart"}):e.jsx("div",{className:"text-center text-slate-400",children:e.jsx("p",{children:"No historical data yet. Finalise your first month to generate trends."})})})]}),e.jsxs("div",{className:`${b?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border flex flex-col`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${b?"text-slate-100":"text-slate-800"}`,children:"Strategic Lenses Spread"}),h&&s[0]?e.jsx("button",{type:"button",onClick:()=>h(s[0]),className:"text-xs font-medium text-[#005eb8] hover:underline",children:"What's a lens?"}):null]}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${b?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:e.jsx("canvas",{id:"adoption-radar-chart"})}),e.jsxs("div",{className:`${b?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mt-4 rounded-md border p-3`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${b?"text-slate-300":"text-slate-600"}`,children:"Lens key"}),e.jsx("div",{className:"mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2",children:s.map((j,Y)=>e.jsxs("div",{className:`flex items-center gap-2 text-xs ${b?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full",style:{backgroundColor:ks[Y%ks.length]},"aria-hidden":"true"}),e.jsx("span",{children:j})]},`lens-key-${j}`))})]}),e.jsx("p",{className:`text-xs text-center mt-4 ${b?"text-slate-300":"text-slate-500"}`,children:"Visualises your current draft readiness score averaged across the 5 strategic lenses against their specific target requirements."})]})]}),e.jsxs("div",{className:`order-1 ${b?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"mb-4 flex w-full flex-col gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:`text-lg font-semibold ${b?"text-slate-100":"text-slate-800"}`,children:"Change Component Radar"}),e.jsx("p",{className:`text-xs mt-1 ${b?"text-slate-300":"text-slate-500"}`,children:"Show or hide the change-component readiness radar, then use the overview list below to drill into delivery status."})]}),e.jsxs("div",{className:"flex w-full flex-wrap items-center justify-end gap-2",children:[V?e.jsx("div",{role:"group","aria-label":"Change component radar size",className:"flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-medium",children:["small","medium","large"].map(j=>e.jsx("button",{type:"button",onClick:()=>I==null?void 0:I(j),"aria-pressed":ee===j,className:`px-3 py-2 capitalize transition-colors ${ee===j?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:j},j))}):null,e.jsx("button",{type:"button",onClick:()=>U==null?void 0:U(!V),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-white",children:V?"Hide change component radar":"Show change component radar"})]})]}),V?e.jsxs("div",{className:`w-full ${b?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("div",{className:`mx-auto flex items-center justify-center rounded border p-2 ${b?"border-slate-700 bg-slate-950":"border-slate-100 bg-white"}`,style:{height:Cs[ee],maxWidth:Cs[ee]+120},children:e.jsx("canvas",{id:"adoption-component-radar-chart",className:"block h-full w-full"})}),e.jsx("div",{id:"radar-legend",className:`mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm ${b?"text-slate-300":"text-slate-600"}`,children:Wi.map(j=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mr-2 h-3 w-3 rounded-full",style:{backgroundColor:j.color}}),e.jsxs("span",{children:[j.score," = ",j.label]})]},j.score))}),e.jsx("p",{className:`mt-4 text-center text-xs ${b?"text-slate-300":"text-slate-500"}`,children:"Visualises the average readiness score for each component against the phase exemplar profile."})]}):null,e.jsxs("div",{className:"mt-4 w-full space-y-3",children:[e.jsxs("p",{className:`text-xs ${b?"text-slate-300":"text-slate-500"}`,children:["BRAG scoring is used for the change component overview:",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-sky-100 text-sky-800",children:"Blue"})," = every lens is level 5,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-green-100 text-green-800",children:"Green"})," = on target,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-red-100 text-red-800",children:"Red"})," = behind target dates,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-amber-100 text-amber-800",children:"Amber"})," = at risk / nearing deadline."]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:K,onChange:j=>Q(j.target.value),placeholder:"Search components...",className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"}),e.jsxs("select",{value:k,onChange:j=>W(j.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All statuses"}),e.jsx("option",{value:"not-started",children:"Not started"}),e.jsx("option",{value:"below-target",children:"Below target"}),e.jsx("option",{value:"on-track",children:"On track"})]}),e.jsxs("select",{value:te,onChange:j=>L(j.target.value==="all"?"all":Number(j.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All phases"}),fe.map(j=>e.jsx("option",{value:j,children:ln[j]||`Phase ${j}`},j))]})]}),e.jsx(da,{showAdvancedControls:re,onToggleAdvanced:()=>Oe(j=>!j),onReset:Re,resultText:`Showing ${P.length} components`,activeFilters:ye,activeFiltersAriaLabel:"Active component filters",darkMode:b}),re?e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-md border border-slate-200 bg-slate-50 p-3",children:[e.jsxs("select",{value:pe,onChange:j=>Pe(j.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"score",children:"Sort by score"}),e.jsx("option",{value:"name",children:"Sort by name"}),e.jsx("option",{value:"target",children:"Sort by target"})]}),e.jsx("button",{type:"button",onClick:()=>Z(j=>j==="asc"?"desc":"asc"),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white transition-colors",children:R==="asc"?"Ascending":"Descending"})]}):null]}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:[P.map(({component:j,avgNum:Y,exemplarTarget:ne,actionCount:me,completedActionCount:Ee,delta:ge,allLensesLevelFive:we})=>{const z=Es(Y,ne,me,Ee,we),He=z==="Red"?"↓":Y>=ne?"→":Y<=0?"↑":"↗",Qe=z==="Red"?"text-red-500":Y>=ne?b?"text-slate-300":"text-slate-500":"text-amber-600";return e.jsxs("button",{onClick:()=>r(j.id),title:Ui(j.id),className:`flex justify-between items-center p-3 rounded-md transition-colors group text-left ${b?"bg-slate-900 border border-slate-700 hover:border-blue-400":"bg-slate-50 border border-slate-100 hover:border-blue-300"}`,children:[e.jsx("span",{className:`text-sm font-medium truncate pr-2 group-hover:text-[#005eb8] ${b?"text-slate-100":"text-slate-700"}`,children:j.label}),e.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[e.jsx("span",{className:`text-xs font-semibold ${Qe}`,title:Y>=ne?"On or above expected readiness for phase focus":Y<=0?"Not started: raise towards expected readiness":"Below expected readiness: continue improving","aria-label":Y>=ne?"At expected readiness":Y<=0?"Not started, increase readiness":"Below expected readiness",children:He}),ge!==null&&e.jsxs("span",{className:`text-[11px] font-semibold ${ge>0?"text-green-600":"text-red-400"}`,title:"Change versus last finalised month",children:[ge>0?"+":"",ge.toFixed(1)]}),e.jsx("span",{className:`text-xs font-bold px-2.5 py-1 rounded ${Ye[z]}`,children:z})]})]},j.id)}),!P.length&&e.jsx("div",{className:`col-span-full rounded-md border border-dashed p-6 text-sm ${b?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-500"}`,children:"No components match the current filters."})]})]})]}),e.jsxs("div",{className:`${b?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h3",{className:`text-lg font-semibold ${b?"text-slate-100":"text-slate-800"}`,children:"Lenses and which components they apply to"}),e.jsx("button",{type:"button",onClick:()=>Ve(j=>!j),className:"inline-flex items-center justify-center rounded-full p-1 text-slate-500 hover:text-[#005eb8]","aria-label":"Explain lenses and components",title:"Explain lenses and components",children:e.jsx(Vi,{})})]}),Le?e.jsx("p",{className:"mt-2 text-xs text-slate-600 max-w-3xl",children:"A component is the change topic you are delivering (for example, Vision). A lens is the angle used to assess that component. For example, Vision is reviewed through Strategic Direction and Leadership and People Experience and Culture to check both leadership alignment and whether people understand and believe in the vision."}):null]}),e.jsxs("select",{value:q,onChange:j=>ce(j.target.value==="all"?"all":Number(j.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:w-40",children:[e.jsx("option",{value:"all",children:"All phases"}),fe.map(j=>e.jsx("option",{value:j,children:ln[j]||`Phase ${j}`},j)),'"']})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(j=>{const Y=t.filter(ne=>ne.lenses.includes(j)).filter(ne=>q==="all"||ne.phase===q);return Y.length?e.jsxs("div",{className:`rounded-md p-4 ${b?"border border-slate-700 bg-slate-900":"border border-slate-100 bg-slate-50"}`,children:[e.jsx("h4",{className:"font-bold text-sm text-[#005eb8] mb-3",children:j}),e.jsx("p",{className:`mb-3 text-xs ${b?"text-slate-300":"text-slate-600"}`,children:Mi(j)}),e.jsx("ul",{className:"space-y-2",children:Y.map(ne=>{const me=i(ne.id,j),Ee=Number(me.score||0),ge=pt(ne.id,De,ne.target),we=me.actions||[],z=Es(Ee,ge,we.length,we.filter(He=>He.status==="Completed").length,!1);return e.jsxs("li",{className:`text-xs flex justify-between items-center p-2 rounded ${b?"bg-slate-800 border border-slate-700":"bg-white border border-slate-100"}`,children:[e.jsx("span",{className:`truncate pr-2 font-medium ${b?"text-slate-100":"text-slate-700"}`,children:ne.label}),e.jsx("button",{onClick:()=>r(ne.id),className:`px-2.5 py-0.5 rounded font-bold ${Ye[z]}`,children:z})]},ne.id)})})]},j):null})})]})]}),e.jsx(un,{open:D.isOpen,onClose:D.close,title:"Adoption Engine Dashboard",darkMode:b,body:e.jsx("p",{children:"This tracks how ready your programme is for adoption, based on your change-management components, each assessed through several lenses. Use the filters and sort controls to focus on what needs attention, and click a component to open its assessment."})})]})}const _n={label:"Change Management Toolkit",url:"https://future.nhs.uk/CMN/view?objectId=129489733"};function Jt(n,t){var o,u,c,h,l;if(!t)return n;const s=(o=t.links)==null?void 0:o[n.key],a=(u=s==null?void 0:s.url)==null?void 0:u.trim(),i=((c=s==null?void 0:s.label)==null?void 0:c.trim())||n.label;return a?{...n,label:i,url:a}:((s==null?void 0:s.fallback)??"default")==="base"&&((l=(h=t.base)==null?void 0:h.url)!=null&&l.trim())?{...n,label:i,url:t.base.url.trim()}:{...n,label:i}}const zi="nhs-guidance-workstreams",ha={vision:["Vision"],case_for_change:["Case for Change"],sponsorship:["Senior Sponsorship & Governance"],change_network:["Change Network"],benefits:["Benefits"],change_impact:["Change Impact"],risk_management:["Risk Management"],cm_readiness:["Change Management Readiness & Planning"],stakeholder:["Stakeholder Engagement & Comms"],resistance:["Resistance Management"],skills_learning:["Skills/ Learning"],capability:["Change Management Capability"],change_adoption:["Reinforcement"],process_change:["Process change"],reinforcement:["Reinforcement"],org_maturity:["Change Management Capability"],transfer_bau:["Reinforcement"]},G=(n,t,s,a)=>({key:`fnhs_${n}`,label:t,url:`https://future.nhs.uk/CMN/view?objectId=${n}`,type:s,...a?{description:a}:{}}),fa=[G("44704752","FuturesNHS Change Management Network","core","The wider NHS community for change management practice, discussion and shared resources.")],Fn={Vision:{inputs:[G("37515792","Vision for Change","core","Supports development and communication of a clear future vision."),G("34039056","Mind Map","core","Captures and organises stakeholder viewpoints when developing the vision."),G("34039088","Rich Picture and Storytelling","core","Creates a visual and narrative representation of the desired future state."),G("34039184","Sinek's Golden Circle","core","Structures the vision around why, how and what."),G("34037808","Systems Thinking","core","Supports consideration of the wider system when defining the future state."),G("34018288","Stakeholder Analysis Tool","core","Identifies the stakeholders who should help shape and validate the vision."),G("34039024","Sponsor Coalition Map","additional","Identifies leaders and visible supporters who can reinforce the vision."),G("69484112","SHIFT: A Strategic Change Management Approach","additional","Provides an additional strategic approach for shaping and aligning change.")]},"Case for Change":{inputs:[G("44287088","Case for Change","core","Supports creation of a clear and compelling rationale for change."),G("42608592","Beckhard and Harris' Change Formula","core","Tests whether the conditions needed to overcome the perceived cost of change are present."),G("34037360","Force Field Analysis","core","Identifies the forces driving and restraining the change."),G("34037232","Benefits Workshop","core","Brings stakeholders together to identify and develop the benefits of change."),G("34040176","Benefits Map","core","Links benefits, outcomes, enabling changes and strategic objectives."),G("45000208","What's in it for me? Benefits","core","Defines relevant benefits for each stakeholder group."),G("69191376","5 Whys Technique","additional","Supports root-cause exploration of the problem the change is intended to address."),G("34037712","SWOT Analysis","additional","Examines strengths, weaknesses, opportunities and threats relating to the change."),G("34037072","PESTLE Analysis","additional","Examines external factors influencing the need for change."),G("34037680","Porter's Five Forces","additional","Supports analysis of wider environmental and market pressures."),G("34037040","GAP Analysis","additional","Compares current and future states and identifies what needs to change."),G("42608624","AIDA Model","additional","Provides a structure for moving audiences from awareness towards action."),G("34037744","Kotter's 8 Steps","additional","Provides an additional framework for creating urgency and mobilising change."),G("34039024","Sponsor Coalition Map","additional","Identifies leaders who need to champion the case for change.")],deliverables:[G("44287088","A clear case for change communicated to all stakeholders","core")]},"Senior Sponsorship & Governance":{inputs:[G("34039024","Sponsor Coalition Map","core","Identifies senior leaders and visible supporters required to drive the change."),G("34037520","What Makes a Good Sponsor?","core","Supports sponsors to understand the behaviours expected of them."),G("34040240","RACI/RASCI Matrix","core","Clarifies governance roles, responsibilities and accountability."),G("34037552","Change Network","core","Connects senior sponsorship with change agents and champions."),G("42042672","Change Management Strategy","core","Defines the strategic approach and leadership responsibilities for change."),G("34018288","Stakeholder Analysis Tool","additional","Identifies influential stakeholders and required sponsor coverage."),G("34038032","Change Management Plan","additional","Translates governance and sponsorship responsibilities into planned activity."),G("69484112","SHIFT: A Strategic Change Management Approach","additional","Provides an additional strategic structure for leadership of change.")]},"Change Network":{inputs:[G("34037552","Change Network","core","Supports formation and operation of a network of change agents and champions."),G("34039024","Sponsor Coalition Map","core","Connects the change network with visible senior sponsors."),G("34018288","Stakeholder Analysis Tool","core","Helps ensure the network represents the right stakeholder groups."),G("34037520","What Makes a Good Sponsor?","core","Clarifies how sponsors should support and use the network."),G("34039408","Feedback Cycle","additional","Supports two-way feedback between the network, programme and affected staff."),G("69501968","Psychological Safety","additional","Supports an environment in which network members can raise concerns safely."),G("34040240","RACI/RASCI Matrix","additional","Clarifies the roles of sponsors, change agents and change champions."),G("34038672","User Surveys","additional","Provides additional evidence for themes surfaced by the change network.")]},Benefits:{inputs:[G("34037232","Benefits Workshop","core","Identifies and develops benefits with relevant stakeholders."),G("34040176","Benefits Map","core","Links benefits to outcomes, enabling changes and strategic objectives."),G("34030736","Benefits Realisation Plan","core","Defines baselines, measures, owners and arrangements for tracking benefits."),G("45000208","What's in it for me? Benefits","core","Translates organisational benefits into relevant stakeholder benefits."),G("69511824","Measuring Digital Adoption","core","Supports definition of adoption measures linked to intended benefits."),G("44287088","Case for Change","additional","Connects the benefits to the rationale and intended outcomes of the change."),G("34038608","Creating Short-Term Wins","additional","Uses early progress to demonstrate value and maintain momentum."),G("34038864","Celebrate Successes","additional","Recognises evidence that benefits and positive outcomes are emerging."),G("34038544","End of Pilot Report","additional","Captures pilot evidence relevant to benefits and wider rollout."),G("34038672","User Surveys","additional","Collects qualitative evidence about benefits and user experience.")]},"Change Impact":{inputs:[G("34037424","Change Impact Assessment","core","Assesses impacts on people, teams, processes and business units."),G("34039344","Impact Analysis","core","Supports structured analysis of intended and unintended impacts."),G("34037968","Heat Map","core","Provides a visual view of impact across business areas."),G("34037040","GAP Analysis","core","Identifies differences between current and future states."),G("34040208","McKinsey 7S Model","core","Examines alignment across interdependent organisational factors."),G("34037840","Process Mapping","additional","Identifies impacts created by changes between current and future processes."),G("34037392","Change Management Capability Review","additional","Assesses the capability implications of the future state."),G("34038000","Proof of Concept","additional","Provides early evidence about likely organisational and user impacts."),G("34037488","Training Impact Assessment","additional","Identifies high-level learning resource and cost implications.")]},"Risk Management":{inputs:[G("34037776","Risk Assessment","core","Identifies and assesses risks, issues and barriers to successful adoption."),G("34038640","Sustainability Risk Assessment","core","Identifies risks that could prevent the change from being sustained."),G("34037424","Change Impact Assessment","core","Provides evidence about impact-related risks and mitigation needs."),G("34037360","Force Field Analysis","core","Identifies forces that may support or obstruct the change."),G("34030736","Benefits Realisation Plan","additional","Helps identify and monitor risks to benefit realisation."),G("34037968","Heat Map","additional","Highlights areas where high impact and low readiness may create risk."),G("34307760","Resistance Management Plan","additional","Defines actions for managing resistance-related adoption risks."),G("69191376","5 Whys Technique","additional","Supports investigation of the root causes of risks and recurring issues.")]},"Change Management Readiness & Planning":{inputs:[G("42042672","Change Management Strategy","core","Sets the overall direction and approach for managing the change."),G("34038032","Change Management Plan","core","Defines activities, ownership and timescales required to build readiness."),G("34037040","GAP Analysis","core","Identifies the work required to move to the future state."),G("34037424","Change Impact Assessment","core","Provides impact and readiness evidence for change planning."),G("34038192","Change Implementation Plan","core","Defines implementation tasks, milestones and responsibilities."),G("34038576","Go Live Business Readiness Assessment","core","Assesses people, process and support readiness before go-live.")]}},js={},Ki={},Yi={Default:Fn,Product:js,AVT:js,EPR:Ki};function Ji(){if(typeof window>"u")return[];try{const n=window.localStorage.getItem(zi);if(!n)return[];const t=JSON.parse(n);return Array.isArray(t)?t.filter(s=>s&&typeof s.name=="string"&&s.name.trim()):[]}catch{return[]}}function Xi(n){const t=Ji().find(s=>s.name===n);return t?t.map:Yi[n]||Fn}function Qi(n,t,s,a,i=!0){var c,h,l;const r=((h=(c=Xi(n))==null?void 0:c[t])==null?void 0:h[s])||[],o=r.length>0?r:((l=Fn==null?void 0:Fn[t])==null?void 0:l[s])||[],u=i?o:o.filter(x=>x.type==="core");return a?u.map(x=>Jt(x,a)):u}function ht(n,t,s,a,i=!0){const r=ha[t]||[],o=new Map;return r.forEach(u=>{Qi(n,u,s,a,i).forEach(c=>{const h=`${c.label}::${c.url}`;o.has(h)||o.set(h,c)})}),[...o.values()]}const Is={"not started":0,emerging:1,developing:2,embedding:3,adopted:4,thriving:5};function zn(n){return n.trim().replace(/\s+/g," ").toLowerCase()}function ba(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function As(n){return n.trim().toLowerCase()}function Zi(n){return n.replace(/&/g,"and").replace(/\s+/g," ").trim()}function eo(n){return typeof n=="string"&&ut.includes(n)}function Ln(n){if(!n)return null;try{return JSON.parse(n)}catch{return null}}function Xt(n,t,s,a){let i=0,r=!1,o=!1;for(let u=a;u<n.length;u+=1){const c=n[u];if(r){if(o){o=!1;continue}if(c==="\\"){o=!0;continue}c==='"'&&(r=!1);continue}if(c==='"'){r=!0;continue}if(c===t){i+=1;continue}if(c===s&&(i-=1,i===0))return n.slice(a,u+1)}return null}function no(n,t=0){const s=n.indexOf("{",t);return s<0?null:Xt(n,"{","}",s)}function xa(n,t=0){const s=n.indexOf("[",t);return s<0?null:Xt(n,"[","]",s)}function _s(n,t){const s=n.toLowerCase().indexOf(t.toLowerCase());return s<0?null:xa(n,s)}function to(n,t){const s=n.toLowerCase().indexOf(t.toLowerCase());return s<0?null:no(n,s)}function so(n){const t=[];for(let s=0;s<n.length;s+=1){if(n[s]!=="{")continue;const a=Xt(n,"{","}",s);if(!a)continue;const i=Ln(a);i&&typeof i=="object"&&!Array.isArray(i)&&t.push(i),s+=a.length-1}return t}function at(n){return Array.isArray(n)?n.filter(t=>t&&typeof t=="object").map(t=>t).filter(t=>typeof t.id=="string"&&typeof t.name=="string"):[]}function Wn(n){return Array.isArray(n)?n.filter(t=>t&&typeof t=="object").map(t=>t).filter(t=>typeof t.fromStatus=="string"&&typeof t.toStatus=="string"&&typeof t.lens=="string"&&typeof t.action=="string"):[]}function ao(n){const t=Ln(n);let s=[],a=[];if(t&&typeof t=="object"&&!Array.isArray(t)){const r=t;s=at(r.outcomes),Array.isArray(r.actions)?a=Wn(r.actions):r.actions&&typeof r.actions=="object"&&(a=Wn(r.actions.actions))}else Array.isArray(t)&&(s=at(t));if(s.length||(s=at(Ln(_s(n,"outcomes")))),s.length||(s=at(Ln(xa(n)))),a.length||(a=Wn(Ln(_s(n,"actions")))),!a.length){const r=Ln(to(n,"actions"));a=Wn(r==null?void 0:r.actions)}const i=so(n);return a.length||(a=Wn(i)),s.length||(s=i.filter(r=>r&&typeof r=="object").map(r=>r).filter(r=>typeof r.id=="string"&&typeof r.name=="string"&&/_o\d+$/i.test(r.id)&&!("fromStatus"in r))),{outcomes:s,actions:a}}function Os(n,t){const a=n.trim().toLowerCase().match(/o\d+$/);return a?`${t}:${a[0]}`:`${t}:${ba(n)}`}function io(n,t){return`${n}:${t}`}function oo(n){return n.includes(":auto-objective:")||n.startsWith("pathway:auto-objective:")}function ro(n){return{...n,actions:(n.actions||[]).map(t=>({...t,linkedTargets:(t.linkedTargets||[]).map(s=>({...s}))}))}}function Gt(){return{score:0,justification:"",evidence:"",actions:[]}}function Qt(n,t){return`${n}:${ba(t.lens)}:${t.fromScore}-${t.toScore}:${t.actionIndex}`}function lo(n,t,s){return{id:Qt(t,s),text:s.actionText,actionType:s.actionType,owner:"",timescale:"",status:"Planned",phase:1,startDate:"",dueDate:"",notes:"",evidence:"",readinessScore:s.fromScore,linkedTargets:[{componentId:n,lens:s.lens}]}}function co(n,t){return{id:n.id,text:n.text,owner:(t==null?void 0:t.owner)||"",timescale:(t==null?void 0:t.timescale)||"",notes:(t==null?void 0:t.notes)||"",evidence:(t==null?void 0:t.evidence)||"",linkedActions:[]}}function uo(n,t,s){const a=Qt(t,s),i=(n.actions||[]).find(u=>u.id===a);if(i)return i.id;const r=zn(s.actionText),o=(n.actions||[]).find(u=>zn(u.text||"")===r);return(o==null?void 0:o.id)||null}function Ge(n,t){const{outcomes:s,actions:a}=ao(n),i=s.map(u=>({id:Os(String(u.id),t.outcomePrefix),text:String(u.name).trim()})),r=new Map;return{templates:a.reduce((u,c)=>{var _;const h=Is[As(String(c.fromStatus||""))],l=Is[As(String(c.toStatus||""))];if(h===void 0||l===void 0)return u;const x=Zi(String(c.lens||"")),b=((_=t.lensAliases)==null?void 0:_[x])||x,S=String(c.action||"").trim();if(!b||!S)return u;const d=`${b}:${h}-${l}`,A=r.get(d)||0;return r.set(d,A+1),u.push({lens:b,fromScore:h,toScore:l,actionIndex:A,actionText:S,actionType:eo(c.category)?c.category:void 0,outcomeIds:(c.outcomeIds||[]).map(f=>Os(String(f),t.outcomePrefix))}),u},[]),outcomes:(i.length?i:t.fallbackOutcomes).slice(0,3)}}function Ue(n,t,s){const a={...n.currentDraft||{}},i={...n.objectives||{}},r=a[t.componentId]||{},o=`${t.outcomePrefix}:`,u=(i[t.componentId]||[]).filter(b=>b.id.startsWith(o)),c=(i[t.componentId]||[]).filter(b=>!b.id.startsWith(o)&&!oo(b.id)),h=u.reduce((b,S)=>(b[S.id]=S,b),{}),l=Object.keys(r).reduce((b,S)=>(b[S]=ro(r[S]||Gt()),b),{});s.templates.forEach(b=>{var I;const S=l[b.lens]||Gt(),d=new Set((S.actions||[]).map(D=>zn(D.text||""))),A=Qt(t.actionPrefix,b),_=io(t.componentId,b.lens),f=new Set(((I=n.suppressedAutoActions)==null?void 0:I[_])||[]),V=(S.actions||[]).some(D=>D.id===A),U=zn(b.actionText),ee=f.has(A);S.actions=(S.actions||[]).map(D=>!(D.id===A||zn(D.text||"")===U)||D.readinessScore===b.fromScore?D:{...D,readinessScore:b.fromScore}),!V&&!d.has(U)&&!ee&&(S.actions=[...S.actions||[],lo(t.componentId,t.actionPrefix,b)]),l[b.lens]=S});const x=s.outcomes.map(b=>{const S=[];return s.templates.forEach(d=>{if(!d.outcomeIds.includes(b.id))return;const A=l[d.lens];if(!A)return;const _=uo(A,t.actionPrefix,d);_&&S.push({lens:d.lens,actionId:_})}),{...co(b,h[b.id]),linkedActions:S}});return{...n,currentDraft:{...a,[t.componentId]:l},objectives:{...i,[t.componentId]:[...c,...x]}}}function Me(n,t){var u,c;const s=`${t.outcomePrefix}:`,a=`${t.actionPrefix}:`,i=(((u=n.objectives)==null?void 0:u[t.componentId])||[]).filter(h=>!h.id.startsWith(s)),r=((c=n.currentDraft)==null?void 0:c[t.componentId])||{},o=Object.keys(r).reduce((h,l)=>{const x=r[l]||Gt();return h[l]={...x,actions:(x.actions||[]).filter(b=>!b.id.startsWith(a))},h},{});return{...n,currentDraft:{...n.currentDraft,[t.componentId]:o},objectives:{...n.objectives,[t.componentId]:i}}}function Rs(n,t){if(t>=5)return null;const s=(n.actions||[]).filter(i=>i.readinessScore===t);return s.length===0?null:s.every(i=>i.status==="Completed")?{currentScore:t,nextScore:t+1}:null}const mo=`{
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
`,Sa="custom-outcome:";function go(n){return n.startsWith(Sa)}const po=ti.filter(n=>n!=="Overdue start"&&n!=="Overdue completion"),ho=[0,1,2,3,4,5],fo={0:"Not Started",1:"Emerging",2:"Developing",3:"Embedding",4:"Adopted",5:"Thriving"},Ps={"Not Started":"bg-slate-100 text-slate-700 border-slate-200","In Progress":"bg-blue-100 text-blue-800 border-blue-200",Blocked:"bg-amber-100 text-amber-800 border-amber-200",Completed:"bg-green-100 text-green-800 border-green-200"},Ds=JSON.parse(mo),ya=4;function bo(n,t){return xt.reduce((s,a)=>{const i=ht("Default",a.id,"inputs",void 0,n),r=ht("Default",a.id,"deliverables",void 0,n),o=new Map;return[...i,...r].forEach(u=>{var c,h;if(u.label&&u.label.trim().length>=ya){const l=t?Jt(u,t).url:u.url,x=(h=(c=t==null?void 0:t.links)==null?void 0:c[u.key])==null?void 0:h.matchAliases;o.set(u.label.toLowerCase(),{...u,url:l,matchAliases:x})}}),s[a.id]=[...o.values()],s},{})}function xo(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function va(n){const t=new Set([n]);return new RegExp("(?<!s)s$","i").test(n)&&t.add(n.slice(0,-1)),[...t]}function Bn(n,t,s,a){const i=n||"Untitled action";if(t.length===0)return i;const o=t.flatMap(l=>{const x=l.kind==="url"?l.matchAliases||[]:[];return[...va(l.label),...x].map(b=>({variant:b,link:l}))}).sort((l,x)=>x.variant.length-l.variant.length),u=o.map(l=>`\\b${xo(l.variant)}\\b`).join("|"),c=i.split(new RegExp(`(${u})`,"gi")),h=`underline decoration-dotted underline-offset-2 ${s?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`;return c.map((l,x)=>{const b=o.find(d=>d.variant.toLowerCase()===l.toLowerCase());if(!b)return l;const S=b.link;return S.kind==="tool"?e.jsx("button",{type:"button",onClick:d=>{d.stopPropagation(),a==null||a(S.tool)},className:h,children:l},`${S.key}-${x}`):e.jsx("a",{href:S.url,target:"_blank",rel:"noopener noreferrer",onClick:d=>d.stopPropagation(),className:h,children:l},`${S.key}-${x}`)})}function $s(n){return n.split(`
`).map(t=>t.trim()).filter(Boolean)}const So="Your Project";function yo(n,t){return n.replace(/\$projectName/g,t)}function vo(n,t){const s=i=>yo(i,t),a=i=>i.map(r=>({title:s(r.title),body:s(r.body)}));return{component:s(n.component),description:s(n.description),whatIsIt:s(n.whatIsIt),userInsight:s(n.userInsight),whyThisMatters:s(n.whyThisMatters),quickRealityCheck:s(n.quickRealityCheck),whatGoodLooksLike:a(n.whatGoodLooksLike),risksIfYouDont:a(n.risksIfYouDont)}}const wa={good:{border:"border-emerald-200",bg:"bg-emerald-50 hover:bg-emerald-100",text:"text-black",titleText:"text-emerald-700"},risk:{border:"border-rose-200",bg:"bg-rose-50 hover:bg-rose-100",text:"text-black",titleText:"text-rose-800"}},Na={good:{border:"border-emerald-500/40",bg:"bg-emerald-500/10 hover:bg-emerald-500/15",text:"text-emerald-200",titleText:"text-slate-100"},risk:{border:"border-rose-500/40",bg:"bg-rose-500/10 hover:bg-rose-500/15",text:"text-rose-200",titleText:"text-slate-100"}};function wo({points:n,tone:t,guidanceLinks:s,darkMode:a,onNavigateToTool:i}){const r=a?Na[t]:wa[t];return e.jsx("ul",{className:"space-y-3",children:n.map(o=>e.jsxs("li",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${r.titleText}`,children:o.title}),e.jsx("p",{className:`mt-0.5 text-sm ${r.text}`,children:Bn(o.body,s,a,i)})]},o.title))})}function Ts({title:n,points:t,tone:s,isOpen:a,onToggle:i,guidanceLinks:r,darkMode:o,onNavigateToTool:u}){const c=o?Na[s]:wa[s];return e.jsxs("div",{className:`rounded-md border ${c.border}`,children:[e.jsxs("button",{type:"button",onClick:i,className:`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold transition-colors ${c.bg} ${c.text}`,children:[n,e.jsx("span",{"aria-hidden":"true",children:a?"−":"+"})]}),a&&e.jsx("div",{className:`border-t px-3 py-3 ${c.border}`,children:e.jsx(wo,{points:t,tone:s,guidanceLinks:r,darkMode:o,onNavigateToTool:u})})]})}function No({detail:n,furtherReadingUrl:t,guidanceLinks:s,darkMode:a,onNavigateToTool:i}){const[r,o]=m.useState(!0),[u,c]=m.useState(!0);return e.jsxs("div",{children:[n.description&&e.jsx("p",{className:`text-sm ${a?"text-slate-200":"text-slate-700"}`,children:n.description}),e.jsxs("div",{className:`mt-4 space-y-4 ${n.description?"border-t pt-4":""} ${a?"border-slate-700":"border-slate-200"}`,children:[t&&e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs font-semibold ${a?"border-slate-600 bg-slate-800 text-blue-300 hover:bg-slate-700":"border-slate-300 bg-white text-[#005eb8] hover:bg-slate-50"}`,children:"Further Reading ↗"}),n.whatIsIt&&e.jsx("p",{className:`text-sm ${a?"text-slate-300":"text-slate-600"}`,children:Bn(n.whatIsIt,s,a,i)}),n.userInsight&&e.jsxs("blockquote",{className:`border-l-2 pl-3 text-sm italic ${a?"border-slate-600 text-slate-300":"border-slate-300 text-slate-600"}`,children:["“",Bn(n.userInsight,s,a,i),"”"]}),n.whyThisMatters&&e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${a?"text-slate-200":"text-slate-700"}`,children:"Why this matters"}),e.jsx("ul",{className:`mt-1 list-disc space-y-1 pl-5 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:$s(n.whyThisMatters).map(h=>e.jsx("li",{children:Bn(h,s,a,i)},h))})]}),n.quickRealityCheck&&e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${a?"text-slate-200":"text-slate-700"}`,children:"Quick reality check"}),e.jsx("ul",{className:`mt-1 list-disc space-y-1 pl-5 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:$s(n.quickRealityCheck).map(h=>e.jsx("li",{children:Bn(h,s,a,i)},h))})]}),(n.whatGoodLooksLike.length>0||n.risksIfYouDont.length>0)&&e.jsxs("div",{className:"space-y-2",children:[n.whatGoodLooksLike.length>0&&e.jsx(Ts,{title:"What good looks like",points:n.whatGoodLooksLike,tone:"good",isOpen:r,onToggle:()=>o(h=>!h),guidanceLinks:s,darkMode:a,onNavigateToTool:i}),n.risksIfYouDont.length>0&&e.jsx(Ts,{title:"Risks if you don't",points:n.risksIfYouDont,tone:"risk",isOpen:u,onToggle:()=>c(h=>!h),guidanceLinks:s,darkMode:a,onNavigateToTool:i})]})]})]})}function Co({open:n,onClose:t,detail:s,furtherReadingUrl:a,guidanceLinks:i,darkMode:r,onNavigateToTool:o}){return n?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${r?"text-slate-300":"text-slate-500"}`,children:"Component overview"}),e.jsx("button",{type:"button",onClick:t,"aria-label":"Close component overview",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${r?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:"mt-2",children:e.jsx(No,{detail:s,furtherReadingUrl:a,guidanceLinks:i,darkMode:r,onNavigateToTool:o})})]})}):null}const Ut="__evidence_json__:",Eo=1024*1024;function ko(n,t,s){return(s[n]||[]).filter(a=>a.linkedActions.some(i=>i.actionId===t))}function Ca(n){const t=n.trim();return t?/^https?:\/\//i.test(t)?t:/^www\./i.test(t)?`https://${t}`:t:""}function It(n){const t=(n==null?void 0:n.trim())||"";if(!t)return[];if(t.startsWith(Ut))try{const s=JSON.parse(t.slice(Ut.length));return Array.isArray(s)?s.filter(a=>a&&(a.type==="url"||a.type==="file")).map(a=>({type:a.type,label:String(a.label||"").trim(),href:String(a.href||"").trim()})).filter(a=>a.label||a.href):[]}catch{return[]}return t.split(`
`).map(s=>s.trim()).filter(Boolean).map(s=>{const a=Ca(s);return{type:"url",label:s,href:a}})}function jo(n){const t=n.map(s=>({type:s.type,label:s.label.trim(),href:s.href.trim()})).filter(s=>s.label||s.href);return t.length?`${Ut}${JSON.stringify(t)}`:""}function Io({rows:n,isOpen:t,onToggle:s,darkMode:a}){return e.jsxs("div",{className:`mb-8 rounded-lg border ${a?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("button",{type:"button",onClick:s,className:"flex w-full items-center justify-between gap-4 px-5 py-4 text-left",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-sm font-semibold ${a?"text-slate-100":"text-slate-800"}`,children:"Evidence Links and Docs"}),e.jsx("p",{className:`mt-0.5 text-xs ${a?"text-slate-400":"text-slate-500"}`,children:n.length?`${n.length} item${n.length===1?"":"s"} attached across this component's actions.`:"Everything attached as evidence across this component's actions, in one place."})]}),e.jsx("span",{className:`shrink-0 text-xs font-semibold ${a?"text-slate-300":"text-slate-500"}`,children:t?"Hide −":"Show +"})]}),t&&e.jsx("div",{className:`border-t px-5 py-4 ${a?"border-slate-700":"border-slate-200"}`,children:n.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${a?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:a?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Type"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Link / Doc"})]})}),e.jsx("tbody",{className:`${a?"divide-slate-700":"divide-slate-100"} divide-y`,children:n.map((i,r)=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-100":"text-slate-800"}`,children:i.actionText}),e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:i.lens}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`${i.item.type==="file"?"bg-emerald-100 text-emerald-800":"bg-blue-100 text-blue-800"} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`,children:i.item.type==="file"?"File":"Link"})}),e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-100":"text-slate-800"}`,children:i.item.href?e.jsx("a",{href:i.item.href,target:"_blank",rel:"noopener noreferrer",className:`underline ${a?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:i.item.label||i.item.href}):i.item.label||"—"})]},`${i.lens}:${r}`))})]})}):e.jsx("p",{className:`text-sm ${a?"text-slate-400":"text-slate-500"}`,children:"No evidence added yet. Attach links or documents to an action to see them here."})})]})}function Ao(n){return new Promise((t,s)=>{const a=new FileReader;a.onload=()=>t(String(a.result||"")),a.onerror=()=>s(new Error("Unable to read file.")),a.readAsDataURL(n)})}function _o(){return e.jsx("svg",{className:"w-4 h-4 text-blue-500 mt-0.5 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Oo(){return e.jsx("svg",{className:"w-5 h-5 ml-2 text-slate-400 group-hover:text-[#005eb8] shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Ro(n,t){let s=n,a=Rs({actions:t},s);for(;a;)s=a.nextScore,a=Rs({actions:t},s);return s}function Po(n,t,s){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:"",actionType:void 0,owner:"",timescale:"",status:"Planned",phase:n,startDate:"",dueDate:"",notes:"",evidence:"",linkedTargets:[{componentId:t,lens:s}]}}function Cn(n,t,s){const a=n.linkedTargets||[];if(!a.length)return[{componentId:t,lens:s}];const i=new Set,r=[];return a.forEach(o=>{const u=`${o.componentId}:${o.lens}`;i.has(u)||(i.add(u),r.push({componentId:o.componentId,lens:o.lens}))}),r}function Do({store:n,components:t,activeComponentId:s,getRubricText:a,getEntry:i,onComponentChange:r,onEntryUpdate:o,onOpenLensInfo:u,onActionRemove:c,onObjectivesUpdate:h,onNavigateToTool:l,hideGuidedWorkflow:x=!1,showAdditionalGuidanceLinks:b=!0,onHideGuidedWorkflow:S,darkMode:d=!1,focusAction:A,onFocusActionHandled:_}){var jn,hn,Jn,Xn,Qn,Zn,et,In,Nt,An,nt,tt,st,an,fn;const f=t.find(g=>g.id===s)||t[0],V=(hn=(jn=n.orgProfile)==null?void 0:jn.cst)==null?void 0:hn.pathway,U=g=>V&&V!=="pathway-1"?`No outcomes or actions are defined for ${bt[V]} yet.`:g,ee=((Xn=(Jn=n.orgProfile)==null?void 0:Jn.projectName)==null?void 0:Xn.trim())||So,I=(Qn=Ds[f.id])!=null&&Qn.whatIsIt?vo(Ds[f.id],ee):void 0,D=(Zn=n.orgProfile)!=null&&Zn.coreLinks&&n.orgProfile.coreLinks.length>0?n.orgProfile.coreLinks:fa,K=m.useMemo(()=>{var g;return(((g=n.orgProfile)==null?void 0:g.toolLinks)||[]).filter(C=>C.matchText.trim()).map(C=>({key:C.key,label:C.matchText,kind:"tool",tool:C.tool}))},[(et=n.orgProfile)==null?void 0:et.toolLinks]),Q=m.useMemo(()=>{var ie;const g=(ie=n.orgProfile)==null?void 0:ie.linkOverrides,C=bo(b,g),$=b?D:D.filter(Ce=>Ce.type==="core"),se={};return Object.keys(C).forEach(Ce=>{var Ze,on;const ve=new Map,Ie=((on=(Ze=n.orgProfile)==null?void 0:Ze.customComponentLinks)==null?void 0:on[Ce])||[];[...C[Ce],...$,...Ie].forEach(p=>{p.label&&p.label.trim().length>=ya&&ve.set(p.label.toLowerCase(),{...p,kind:"url"})}),K.forEach(p=>{ve.set(p.label.toLowerCase(),p)}),se[Ce]=[...ve.values()]}),se},[b,D,(In=n.orgProfile)==null?void 0:In.linkOverrides,(Nt=n.orgProfile)==null?void 0:Nt.customComponentLinks,K]),[k,W]=m.useState(null),[te,L]=m.useState(null),[q,ce]=m.useState(null),[pe,Pe]=m.useState(!1),[R,Z]=m.useState(!0),[re,Oe]=m.useState(!0),[Le,Ve]=m.useState(!1),[fe,tn]=m.useState(!1),[De,Ke]=m.useState(!1),sn=dn("assessment"),[Ne,v]=m.useState({}),[T,N]=m.useState({}),[P,M]=m.useState({}),ye=((An=n.objectives)==null?void 0:An[f.id])||[],Re=n.orgProfile.teamMembers||[],he=m.useMemo(()=>{const g={};return f.lenses.forEach(C=>{g[C]=i(f.id,C).actions||[]}),g},[f.id,f.lenses,i]),$e=m.useMemo(()=>{const g={};return f.lenses.forEach(C=>{const $=i(f.id,C),se=he[C]||[],ie=se.some(ve=>ve.readinessScore===0),Ce=$.score===0&&!ie?1:$.score;g[C]=se.filter(ve=>(ve.readinessScore??Ce)===Ce)}),g},[f.id,f.lenses,i,he]),yn=m.useMemo(()=>f.lenses.reduce((g,C)=>g+($e[C]||[]).length,0),[f.lenses,$e]),Ye=m.useMemo(()=>f.lenses.reduce((g,C)=>g+($e[C]||[]).filter($=>rn($.status)==="Completed").length,0),[f.lenses,$e]),j=m.useMemo(()=>f.lenses.some(g=>Number(i(f.id,g).score||0)>0),[f.id,f.lenses,i]),Y=m.useMemo(()=>{const g={};return Object.keys(n.currentDraft).forEach(C=>{Object.keys(n.currentDraft[C]||{}).forEach($=>{(n.currentDraft[C][$].actions||[]).forEach(ie=>{Cn(ie,C,$).forEach(ve=>{const Ie=`${ve.componentId}:${ve.lens}`;g[Ie]||(g[Ie]=[]),g[Ie].push({sourceComponentId:C,sourceLens:$,action:ie,isLinkedView:!(ve.componentId===C&&ve.lens===$)})})})})}),g},[n.currentDraft]),ne=m.useMemo(()=>{const g={};return t.forEach(C=>{g[C.id]=C}),g},[t]),me=m.useMemo(()=>{const g=[];return f.lenses.forEach(C=>{(Y[`${f.id}:${C}`]||[]).filter(se=>!se.isLinkedView).forEach(se=>{It(se.action.evidence||"").forEach(ie=>{g.push({actionText:se.action.text||"Untitled action",lens:C,item:ie})})})}),g},[Y,f.id,f.lenses]),Ee=m.useMemo(()=>{const g=f.lenses[0];return g?i(f.id,g).justification:""},[f.id,f.lenses,i]),ge=m.useMemo(()=>{var g;return k?((g=t.find(C=>C.id===k.sourceComponentId))==null?void 0:g.label)||k.sourceComponentId:f.label},[k,f.label,t]),we=m.useMemo(()=>{var C;if(!((C=k==null?void 0:k.action.text)!=null&&C.trim()))return"New action";const g=k.action.text.trim().replace(/\s+/g," ");return g.length>70?`${g.slice(0,70)}...`:g},[k]),z=m.useMemo(()=>ye.find(g=>g.id===(te==null?void 0:te.objectiveId))||null,[te==null?void 0:te.objectiveId,ye]),He=m.useMemo(()=>z?Tt(z,he):null,[z,he]),Qe=m.useMemo(()=>z?z.linkedActions.map(g=>{const C=(he[g.lens]||[]).find(ie=>ie.id===g.actionId),$=C?rn(C.status):null,se=C?Ss(C.status,C.startDate,C.dueDate):null;return{lens:g.lens,action:C,status:$,temporalStatus:se}}):[],[z,he]);m.useCallback(g=>{r(g.target.value)},[r]);const Je=m.useCallback((g,C)=>{const $=i(f.id,g);o(f.id,g,{...$,score:C})},[f.id,i,o]),We=m.useCallback(g=>{f.lenses.forEach(C=>{const $=i(f.id,C);o(f.id,C,{...$,justification:g})})},[f.id,f.lenses,i,o]),qe=m.useCallback((g,C)=>{const $=Po(f.phase,f.id,g);C&&($.text=C),W({sourceComponentId:f.id,sourceLens:g,mode:"create",action:$,evidenceItems:It($.evidence||""),linkedObjectiveIds:[],targetPickerComponentId:f.id,targetPickerLens:g})},[f.id,f.phase]),y=m.useCallback((g,C,$)=>{var ve;const se=Cn($,g,C),ie=se[0]||{componentId:g,lens:C},Ce=(((ve=n.objectives)==null?void 0:ve[g])||[]).filter(Ie=>Ie.linkedActions.some(Ze=>Ze.actionId===$.id)).map(Ie=>Ie.id);W({sourceComponentId:g,sourceLens:C,mode:"edit",actionId:$.id,action:{...$,linkedTargets:se,notes:$.notes||"",evidence:$.evidence||"",startDate:$.startDate||"",dueDate:$.dueDate||""},evidenceItems:It($.evidence||""),linkedObjectiveIds:Ce,targetPickerComponentId:ie.componentId,targetPickerLens:ie.lens})},[n.objectives]),O=m.useCallback(()=>{ce({mode:"create",text:"",owner:""})},[]),H=m.useCallback(g=>{ce({mode:"edit",objectiveId:g.id,text:g.text,owner:g.owner})},[]),oe=()=>{ce(null)},Se=()=>{if(q){if(!q.text.trim()){window.alert("Outcome description is required.");return}if(q.mode==="create"){const g={id:`${Sa}${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:q.text.trim(),owner:q.owner.trim(),timescale:"",linkedActions:[]};h(f.id,[...ye,g])}else h(f.id,ye.map(g=>g.id===q.objectiveId?{...g,text:q.text.trim(),owner:q.owner.trim()}:g));ce(null)}},Be=g=>{h(f.id,ye.filter(C=>C.id!==g))};m.useEffect(()=>{if(!A)return;const C=i(f.id,A.lens).actions.find($=>$.id===A.actionId);if(!C){_==null||_();return}Ve(!0),y(f.id,A.lens,C),_==null||_()},[A,f.id]);const le=()=>{W(null)},Xe=()=>{var ve;if(!k)return;if(!k.action.text.trim()){window.alert("Action description is required.");return}const g={...k.action,evidence:jo(k.evidenceItems),status:rn(k.action.status),linkedTargets:Cn(k.action,k.sourceComponentId,k.sourceLens),timescale:k.action.dueDate||k.action.startDate||k.action.timescale},C=i(k.sourceComponentId,k.sourceLens),$=k.mode==="create"?[...C.actions,g]:C.actions.map(Ie=>Ie.id===k.actionId?g:Ie);o(k.sourceComponentId,k.sourceLens,{...C,actions:$,score:Ro(C.score,$)});const se=new Set(k.linkedObjectiveIds),Ce=(((ve=n.objectives)==null?void 0:ve[k.sourceComponentId])||[]).map(Ie=>{const Ze=Ie.linkedActions.filter(on=>!(on.lens===k.sourceLens&&on.actionId===g.id));return se.has(Ie.id)?{...Ie,linkedActions:[...Ze,{lens:k.sourceLens,actionId:g.id}]}:{...Ie,linkedActions:Ze}});h(k.sourceComponentId,Ce),le()},xe=g=>{W(C=>{if(!C)return C;const $={...C,action:{...C.action,...g}};return $.action.status=rn($.action.status),$})},Te=(g,C)=>{W($=>$&&{...$,targetPickerComponentId:g,targetPickerLens:C})},be=()=>{W(g=>{if(!g)return g;const C=ne[g.targetPickerComponentId]||f,$=C.lenses.includes(g.targetPickerLens)?g.targetPickerLens:C.lenses[0];if(!$)return g;const se=Cn(g.action,g.sourceComponentId,g.sourceLens);return se.some(ie=>ie.componentId===C.id&&ie.lens===$)?g:{...g,action:{...g.action,linkedTargets:[...se,{componentId:C.id,lens:$}]}}})},vn=(g,C)=>{W($=>{if(!$)return $;const ie=Cn($.action,$.sourceComponentId,$.sourceLens).filter(Ce=>!(Ce.componentId===g&&Ce.lens===C));return{...$,action:{...$.action,linkedTargets:ie}}})},gn=g=>{W(C=>{if(!C)return C;const $=new Set(C.linkedObjectiveIds);return $.has(g)?$.delete(g):$.add(g),{...C,linkedObjectiveIds:Array.from($)}})},pn=g=>{W(C=>C&&{...C,evidenceItems:g})},Un=()=>{if(!k)return;const g=k.evidenceItems;pn([...g,{type:"url",label:"",href:""}])},Pn=(g,C,$)=>{if(!k)return;const se=k.evidenceItems;if(!se[g])return;const ie=[...se];C==="href"?ie[g]={...ie[g],href:Ca($)}:ie[g]={...ie[g],label:$},pn(ie)},kn=g=>{if(!k)return;const C=k.evidenceItems;pn(C.filter(($,se)=>se!==g))},Dn=async g=>{if(!k)return;const C=g.target.files;if(!(C!=null&&C.length))return;const se=[...k.evidenceItems];for(const ie of Array.from(C)){if(ie.size>Eo){window.alert(`"${ie.name}" is larger than 1MB. Please attach a URL instead.`);continue}try{const Ce=await Ao(ie);se.push({type:"file",label:ie.name,href:Ce})}catch{window.alert(`Unable to upload "${ie.name}".`)}}pn(se),g.target.value=""},wt=(g,C)=>{C&&(L(null),y(f.id,g,C))},Mn=g=>{const C=document.getElementById(g);C==null||C.scrollIntoView({behavior:"smooth",block:"start"})};return e.jsxs("div",{className:"max-w-5xl mx-auto pb-20",children:[e.jsx("div",{className:"mb-8 flex items-center justify-between gap-4 flex-wrap",children:e.jsxs("div",{children:[e.jsxs("h2",{className:`text-3xl font-bold flex items-center ${d?"text-slate-100":"text-slate-800"}`,children:[f.label,e.jsx("span",{className:"bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-4 border border-blue-200",children:ln[f.phase]||`Phase ${f.phase}`}),e.jsx("span",{className:"ml-2",children:e.jsx(mn,{onClick:sn.reopen,darkMode:d})})]}),e.jsx("p",{className:`mt-2 ${d?"text-slate-300":"text-slate-500"}`,children:"Assess readiness at lens level. Change Component justification, outcomes, and actions are tracked below."}),I&&e.jsx("button",{type:"button",onClick:()=>Ke(!0),className:`mt-2 text-sm font-semibold underline ${d?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:"What is this?"})]})}),I&&e.jsx(Co,{open:De,onClose:()=>Ke(!1),detail:I,furtherReadingUrl:(tt=(nt=n.orgProfile)==null?void 0:nt.componentFurtherReading)==null?void 0:tt[f.id],guidanceLinks:Q[f.id]||[],darkMode:d,onNavigateToTool:l}),!x&&!pe&&e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mb-6 rounded-lg border p-4`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${d?"text-slate-300":"text-slate-600"}`,children:"Guided workflow"}),e.jsx("button",{type:"button",onClick:()=>Pe(!0),"aria-label":"Dismiss guided workflow",className:`text-xs font-semibold leading-none ${d?"text-slate-400 hover:text-slate-200":"text-slate-400 hover:text-slate-700"}`,children:"×"})]}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:()=>Mn("assessment-scoring"),className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"1. Justify"}),e.jsx("button",{type:"button",onClick:()=>Mn("assessment-objectives"),className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"2. Review outcomes"}),e.jsx("button",{type:"button",onClick:()=>Mn("assessment-actions"),className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"3. Plan lens actions"})]}),S&&e.jsx("button",{type:"button",onClick:S,className:`mt-3 text-xs underline ${d?"text-slate-400 hover:text-slate-200":"text-slate-500 hover:text-slate-700"}`,children:"Don't show this again"})]}),e.jsxs("div",{id:"assessment-scoring",className:`${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[e.jsx("h3",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:j?"Step 1: Justify":"Step 1: Justification of what is currently known"}),e.jsx("button",{type:"button",onClick:()=>Z(g=>!g),className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:R?"Hide":"Show"})]}),R?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:`block text-sm font-semibold mb-2 ${d?"text-slate-100":"text-slate-700"}`,children:"Change Component Justification"}),e.jsx("p",{className:`text-xs mb-2 ${d?"text-slate-300":"text-slate-500"}`,children:'Explain what is currently known, what evidence supports that view, and where the biggest gap sits. Example: "Sponsorship is visible only in two services; there is no monthly steering update yet; next step is to agree a trust-wide sponsor cadence."'}),e.jsx("textarea",{value:Ee,onChange:g=>We(g.target.value),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-24 p-2 border ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,placeholder:"Record what is currently known for this change component, the evidence behind it, and the key improvement needed next."})]}):null]}),e.jsxs("div",{id:"assessment-objectives",className:`${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-1",children:[e.jsx("h3",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Step 2: Review outcomes"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:O,className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:"Add Outcome"}),e.jsx("button",{type:"button",onClick:()=>Oe(g=>!g),className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:re?"Hide":"Show"})]})]}),e.jsx("p",{className:`text-xs mb-3 ${d?"text-slate-300":"text-slate-500"}`,children:"Owned by this component as a whole. Status is derived automatically from the lens actions assigned to each outcome below and cannot be set manually."}),re?ye.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${d?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:d?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Linked Actions"})]})}),e.jsx("tbody",{className:`${d?"divide-slate-700":"divide-slate-100"} divide-y`,children:ye.map(g=>{const C=Tt(g,he),$=Ps[C],se=()=>L({objectiveId:g.id});return e.jsxs("tr",{onClick:se,onKeyDown:ie=>{(ie.key==="Enter"||ie.key===" ")&&(ie.preventDefault(),se())},tabIndex:0,className:`${d?"hover:bg-slate-700 focus-visible:bg-slate-700":"hover:bg-slate-50 focus-visible:bg-slate-50"} cursor-pointer focus:outline-none`,children:[e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-100":"text-slate-800"}`,children:g.text||"Untitled outcome"}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${$}`,children:C})}),e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-300":"text-slate-600"}`,children:g.linkedActions.length?`${g.linkedActions.length} action(s)`:"None assigned"})]},g.id)})})]})}):e.jsx("p",{className:"text-sm text-slate-500",children:U("No outcomes yet.")}):null]}),e.jsx("div",{id:"assessment-actions",className:`${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Step 3: Plan lens actions"}),e.jsx("p",{className:`mt-1 text-xs ${d?"text-slate-300":"text-slate-600"}`,children:"Track delivery actions for each lens and link them to outcomes and affected component lenses."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:`${d?"bg-slate-800 border-slate-600 text-slate-100":"bg-white border-slate-300 text-slate-700"} rounded-full border px-2 py-1 text-xs`,children:[Ye,"/",yn," completed"]}),e.jsx("button",{type:"button",onClick:()=>Ve(g=>!g),className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:Le?"Hide":"Show"})]})]})}),Le?e.jsx("div",{className:"space-y-8 mb-8",children:f.lenses.map(g=>{const C=i(f.id,g),$=`${f.id}:${g}`,se=Y[$]||[],ie=se.some(E=>E.action.readinessScore===0),Ce=C.score===0&&!ie?1:C.score,ve=T[$]||"all",Ie=P[$]||"all",Ze=Array.from(new Set(se.map(E=>E.action.actionType).filter(E=>E!==void 0))).sort((E,F)=>String(E).localeCompare(String(F))),on=Array.from(new Set([...Re.map(E=>E.name),...se.map(E=>E.action.owner).filter(E=>!!E)])).sort((E,F)=>E.localeCompare(F)),p=[...se].filter(E=>(E.action.readinessScore!==void 0?E.action.readinessScore:Ce)!==Ce||ve!=="all"&&(E.action.actionType||"")!==ve?!1:Ie==="all"||(E.action.owner||"")===Ie).sort((E,F)=>{const B=rn(E.action.status)==="Completed",X=rn(F.action.status)==="Completed";if(B!==X)return B?1:-1;const ae=E.action.dueDate?new Date(E.action.dueDate).getTime():Number.POSITIVE_INFINITY,de=F.action.dueDate?new Date(F.action.dueDate).getTime():Number.POSITIVE_INFINITY;return ae-de}),w=C.score>=f.target?"#22c55e":C.score>0?"#f59e0b":"#cbd5e1";return e.jsxs("div",{className:`${d?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:[e.jsxs("div",{className:`${d?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} p-6 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4`,children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm font-bold uppercase tracking-wider text-blue-600 block mb-1",children:"Lens"}),e.jsxs("button",{onClick:()=>u(g),className:`flex items-center text-2xl font-semibold transition-colors group text-left ${d?"text-slate-100 hover:text-[#63b3ff]":"text-slate-800 hover:text-[#005eb8]"}`,title:"View Lens Information",children:[g,e.jsx(Oo,{})]})]}),e.jsxs("div",{className:"shrink-0 w-full md:w-64",children:[e.jsx("label",{className:`block text-xs font-semibold mb-1 ${d?"text-slate-300":"text-slate-500"}`,children:"Readiness Score"}),e.jsx("select",{value:C.score,onChange:E=>Je(g,Number(E.target.value)),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 text-sm font-medium border ${d?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,style:{borderLeftWidth:"4px",borderLeftColor:w},children:ho.map(E=>e.jsxs("option",{value:E,children:[E," - ",fo[E]]},E))})]})]}),e.jsx("div",{className:`${d?"bg-slate-900":"bg-blue-50/50"} px-6 py-4 border-b text-sm`,style:{borderLeftWidth:"4px",borderLeftColor:w},children:e.jsxs("div",{className:"flex items-start flex-1",children:[e.jsx(_o,{}),e.jsxs("p",{className:`whitespace-pre-line ${d?"text-slate-300":"text-slate-600"}`,children:[e.jsxs("strong",{className:d?"text-slate-100":"text-slate-700",children:[C.score===0?"Not Started":`Level ${C.score}`,":"]}),` ${a(f.id,g,C.score)}`]})]})}),e.jsxs("div",{className:`${d?"border-slate-700":"border-slate-100"} p-6 border-t`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Lens Actions"}),e.jsx("p",{className:`mt-1 text-xs ${d?"text-slate-300":"text-slate-500"}`,children:"Hierarchy: Outcome - Action - Affected component lenses."})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs("select",{"aria-label":`Filter ${g} actions by type`,value:ve,onChange:E=>N(F=>({...F,[$]:E.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),[...new Set([...ut,...Ze])].map(E=>e.jsx("option",{value:E,children:E},E))]}),e.jsxs("select",{"aria-label":`Filter ${g} actions by owner`,value:Ie,onChange:E=>M(F=>({...F,[$]:E.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),on.map(E=>e.jsx("option",{value:E,children:E},E))]}),e.jsx("button",{onClick:()=>qe(g),className:"px-3 py-1.5 rounded bg-[#005eb8] text-white text-xs font-semibold shadow-[0_2px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Add Action"})]})]}),p.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${d?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:d?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action Type"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Start"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"End"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Actions"})]})}),e.jsx("tbody",{className:`${d?"divide-slate-700":"divide-slate-100"} divide-y`,children:(Ne[`${f.id}:${g}`]?p:p.slice(0,5)).map(E=>{var ue;const F=E.action,B=rn(F.status),X=Ss(F.status,F.startDate,F.dueDate),ae=X==="Overdue start"||X==="Overdue completion"?X:null,de=((ue=ne[E.sourceComponentId])==null?void 0:ue.label)||E.sourceComponentId,ke=ko(E.sourceComponentId,F.id,n.objectives||{}),je=On[B]||On.Planned;return e.jsxs("tr",{children:[e.jsxs("td",{className:`px-3 py-2 text-sm ${d?"text-slate-100":"text-slate-800"}`,children:[e.jsx("div",{children:Bn(F.text,Q[E.sourceComponentId]||[],d,l)}),E.isLinkedView?e.jsxs("div",{className:`mt-1 text-xs ${d?"text-indigo-300":"text-indigo-700"}`,children:["Linked from ",de," /"," ",E.sourceLens]}):null]}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${je}`,children:B}),ae?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:ae}):null,!ke.length&&e.jsx("div",{className:`mt-1 text-center text-xs ${d?"text-amber-200":"text-amber-700"}`,children:"Not yet linked"})]}),e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-100":"text-slate-700"}`,children:F.actionType||"Unassigned"}),e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-100":"text-slate-700"}`,children:F.owner||"Unassigned"}),e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-300":"text-slate-600"}`,children:F.startDate||"-"}),e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-300":"text-slate-600"}`,children:F.dueDate||"-"}),e.jsx("td",{className:"px-3 py-2",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"button",onClick:()=>y(E.sourceComponentId,E.sourceLens,F),className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Edit"}),e.jsx("button",{type:"button",onClick:()=>c(E.sourceComponentId,E.sourceLens,F.id),className:`${d?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Remove"})]})})]},`${E.sourceComponentId}:${E.sourceLens}:${F.id}`)})})]})}):e.jsx("p",{className:`text-sm ${d?"text-slate-300":"text-slate-500"}`,children:U("No actions yet for this lens.")}),p.length>5?e.jsx("button",{type:"button",onClick:()=>v(E=>({...E,[`${f.id}:${g}`]:!E[`${f.id}:${g}`]})),className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} mt-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:Ne[`${f.id}:${g}`]?"Show top 5 actions":`Show additional ${p.length>5?p.length-5:p.length} action(s)`}):""]})]},g)})}):null,e.jsx(Io,{rows:me,isOpen:fe,onToggle:()=>tn(g=>!g),darkMode:d}),k?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${d?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-hidden rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("h3",{className:`text-lg font-semibold ${d?"text-slate-100":"text-slate-900"}`,children:[k.mode==="create"?"Create Action":"Edit Action"," ·"," ",ge," / ",k.sourceLens," · ",we]}),e.jsx("button",{type:"button",onClick:le,className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:"mt-4 max-h-[calc(100vh-13rem)] overflow-y-auto pr-1 grid gap-3",children:[e.jsx("div",{className:`${d?"border-slate-700 bg-slate-900":"border-blue-100 bg-white"} sticky top-0 z-10 rounded-md border px-3 py-2 shadow-sm`,children:e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Description"}),e.jsx("textarea",{value:k.action.text,onChange:g=>xe({text:g.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${d?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})}),e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900 text-slate-200":"border-blue-100 bg-blue-50 text-slate-700"} rounded-md border px-3 py-2 text-xs`,children:[e.jsx("strong",{children:"Linking order:"})," first attach this action to one or more outcomes, then add affected component lenses (component + lens) where this action should appear."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Action Type"}),e.jsx("select",{value:k.action.actionType||"Admin",onChange:g=>xe({actionType:g.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:ut.map(g=>e.jsx("option",{value:g,children:g},g))})]}),e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Owner"}),e.jsxs("select",{value:k.action.owner,onChange:g=>xe({owner:g.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Unassigned"}),Re.map(g=>e.jsxs("option",{value:g.name,children:[g.name,g.role?` - ${g.role}`:""]},g.id)),k.action.owner&&!Re.some(g=>g.name===k.action.owner)?e.jsxs("option",{value:k.action.owner,children:[k.action.owner," (not on roster)"]}):null]})]}),e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Status"}),e.jsx("select",{value:k.action.status,onChange:g=>xe({status:g.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:po.map(g=>e.jsx("option",{value:g,children:g},g))})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Start Date"}),e.jsx("input",{type:"date",value:k.action.startDate||"",onChange:g=>xe({startDate:g.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"End Date"}),e.jsx("input",{type:"date",value:k.action.dueDate||"",onChange:g=>xe({dueDate:g.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Notes"}),e.jsx("textarea",{value:k.action.notes||"",onChange:g=>xe({notes:g.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Evidence Links / Docs"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:Un,className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Add web link"}),e.jsxs("label",{className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:["Upload file(s)",e.jsx("input",{type:"file",multiple:!0,className:"hidden",onChange:Dn})]})]})]}),e.jsx("p",{className:`mt-1 text-xs ${d?"text-slate-300":"text-slate-500"}`,children:"Add evidence as either web links or uploaded files. Everything appears below in a single list."}),e.jsx("div",{className:`${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:k.evidenceItems.length?k.evidenceItems.map((g,C)=>e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} grid grid-cols-1 gap-2 rounded border p-2 md:grid-cols-[auto,1fr,1fr,auto]`,children:[e.jsx("div",{className:"flex items-start pt-2",children:e.jsx("span",{className:`${g.type==="file"?"bg-emerald-100 text-emerald-800":"bg-blue-100 text-blue-800"} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`,children:g.type==="file"?"File":"Link"})}),e.jsx("input",{value:g.label,onChange:$=>Pn(C,"label",$.target.value),placeholder:g.type==="file"?"Document label":"Link label",className:`rounded-md border px-2.5 py-2 text-sm ${d?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`}),e.jsx("input",{value:g.href,onChange:$=>Pn(C,"href",$.target.value),placeholder:g.type==="file"?"Embedded file URL (auto generated)":"https://...",className:`rounded-md border px-2.5 py-2 text-sm ${d?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,disabled:g.type==="file"}),e.jsx("button",{type:"button",onClick:()=>kn(C),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},`${g.type}-${C}`)):e.jsx("p",{className:`px-2 py-1 text-sm ${d?"text-slate-300":"text-slate-500"}`,children:"No evidence links or documents added yet."})})]}),e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsx("p",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Affected Outcomes"}),e.jsx("p",{className:`mt-1 text-xs ${d?"text-slate-300":"text-slate-500"}`,children:"Tick 1-3 outcomes directly impacted by this action. Outcome status is auto-derived from these linked actions."}),e.jsx("div",{className:`${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:(((st=n.objectives)==null?void 0:st[k.sourceComponentId])||[]).length?(((an=n.objectives)==null?void 0:an[k.sourceComponentId])||[]).map(g=>{const C=k.linkedObjectiveIds.includes(g.id);return e.jsxs("label",{className:`${d?"hover:bg-slate-700":"hover:bg-slate-50"} flex items-start gap-2 rounded px-2 py-1.5`,children:[e.jsx("input",{type:"checkbox",checked:C,onChange:()=>gn(g.id),className:"mt-0.5"}),e.jsx("span",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:g.text||"Untitled outcome"})]},g.id)}):e.jsx("p",{className:`px-2 py-1 text-sm ${d?"text-slate-300":"text-slate-500"}`,children:U("No outcomes are defined for this component yet.")})})]}),e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Affected Component Lenses"}),e.jsx("span",{className:"inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-600",title:"Actions often contribute to other component lenses. Add those targets here so the same action is visible in each relevant lens.",children:"i"})]}),e.jsxs("div",{className:"mt-2 space-y-2",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2",children:[e.jsx("select",{value:k.targetPickerComponentId,onChange:g=>{const C=g.target.value,$=ne[C];Te(C,($==null?void 0:$.lenses[0])||"")},className:`rounded-md border px-2.5 py-2 text-sm ${d?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:t.map(g=>e.jsx("option",{value:g.id,children:g.label},g.id))}),e.jsx("select",{value:k.targetPickerLens,onChange:g=>Te(k.targetPickerComponentId,g.target.value),className:`rounded-md border px-2.5 py-2 text-sm ${d?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:(((fn=ne[k.targetPickerComponentId])==null?void 0:fn.lenses)||[]).map(g=>e.jsx("option",{value:g,children:g},g))}),e.jsx("button",{type:"button",onClick:be,disabled:Cn(k.action,k.sourceComponentId,k.sourceLens).some(g=>g.componentId===k.targetPickerComponentId&&g.lens===k.targetPickerLens),title:Cn(k.action,k.sourceComponentId,k.sourceLens).some(g=>g.componentId===k.targetPickerComponentId&&g.lens===k.targetPickerLens)?"Already added":"Add selected affected lens",className:`${d?"border-cyan-500/50 bg-cyan-500/15 text-cyan-100 hover:bg-cyan-500/25":"border-cyan-300 bg-cyan-100 text-cyan-900 hover:bg-cyan-200"} rounded-md border px-3 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-60`,children:"Add Lens"})]}),e.jsx("div",{className:`${d?"border-slate-700":"border-slate-200"} overflow-hidden rounded border`,children:e.jsxs("table",{className:`min-w-full ${d?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:d?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Component"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Remove"})]})}),e.jsx("tbody",{className:`${d?"divide-slate-700":"divide-slate-100"} divide-y`,children:Cn(k.action,k.sourceComponentId,k.sourceLens).map(g=>{var C;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-2.5 py-2 text-sm ${d?"text-slate-100":"text-slate-700"}`,children:((C=ne[g.componentId])==null?void 0:C.label)||g.componentId}),e.jsx("td",{className:`px-2.5 py-2 text-sm ${d?"text-slate-100":"text-slate-700"}`,children:g.lens}),e.jsx("td",{className:"px-2.5 py-2",children:e.jsx("button",{type:"button",onClick:()=>vn(g.componentId,g.lens),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},`${g.componentId}:${g.lens}`)})})]})})]})]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[k.mode==="edit"&&k.actionId?e.jsx("button",{type:"button",onClick:()=>{c(k.sourceComponentId,k.sourceLens,k.actionId),le()},className:"mr-auto rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100",children:"Delete Action"}):null,e.jsx("button",{type:"button",onClick:le,className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Cancel"}),e.jsx("button",{type:"button",onClick:Xe,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Save Action"})]})]})}):null,te&&z&&He?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":"Outcome Details",className:`w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${d?"text-slate-100":"text-slate-900"}`,children:"Outcome Details"}),e.jsxs("div",{className:"flex items-center gap-2",children:[z&&go(z.id)?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>{H(z),L(null)},className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Edit"}),e.jsx("button",{type:"button",onClick:()=>{Be(z.id),L(null)},className:"rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-700 hover:bg-red-100",children:"Delete"})]}):null,e.jsx("button",{type:"button",onClick:()=>L(null),className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]})]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${d?"text-slate-400":"text-slate-500"}`,children:"Outcome"}),e.jsx("p",{className:`mt-1 text-sm ${d?"text-slate-100":"text-slate-900"}`,children:z.text||"Untitled outcome"})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${d?"text-slate-400":"text-slate-500"}`,children:"Owner"}),e.jsx("p",{className:`mt-1 text-sm ${d?"text-slate-100":"text-slate-900"}`,children:z.owner||"Unassigned"})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${d?"text-slate-400":"text-slate-500"}`,children:"Status"}),e.jsx("span",{className:`mt-1 inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${Ps[He]}`,children:He})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${d?"text-slate-400":"text-slate-500"}`,children:"Linked Actions"}),Qe.length?e.jsx("div",{className:`mt-2 overflow-x-auto rounded-md border ${d?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:`min-w-full divide-y ${d?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"}`,children:[e.jsx("thead",{className:d?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Navigate"})]})}),e.jsx("tbody",{className:`divide-y ${d?"divide-slate-700":"divide-slate-100"}`,children:Qe.map(g=>{var $,se;const C=g.status?On[g.status]||On.Planned:On.Planned;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-100":"text-slate-700"}`,children:g.lens}),e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-100":"text-slate-700"}`,children:(($=g.action)==null?void 0:$.text)||"Linked action not found"}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${C}`,children:g.status||"Not Started"}),g.temporalStatus==="Overdue start"||g.temporalStatus==="Overdue completion"?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:g.temporalStatus}):null]}),e.jsx("td",{className:"px-3 py-2",children:g.action?e.jsx("button",{type:"button",onClick:()=>wt(g.lens,g.action||void 0),className:`${d?"border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25":"border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Open Action"}):e.jsx("span",{className:`text-xs ${d?"text-slate-500":"text-slate-400"}`,children:"Unavailable"})})]},`${g.lens}:${((se=g.action)==null?void 0:se.id)||"missing"}`)})})]})}):e.jsx("p",{className:`mt-1 text-sm ${d?"text-slate-300":"text-slate-500"}`,children:"No linked actions assigned."})]})]})]})}):null,q?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":q.mode==="create"?"Add Outcome":"Edit Outcome",className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsx("h3",{className:`text-lg font-semibold ${d?"text-slate-100":"text-slate-900"}`,children:q.mode==="create"?"Add Outcome":"Edit Outcome"}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"objective-editor-text",className:`block text-xs font-medium ${d?"text-slate-300":"text-slate-700"}`,children:"Outcome description"}),e.jsx("textarea",{id:"objective-editor-text",value:q.text,onChange:g=>ce({...q,text:g.target.value}),className:`mt-1 w-full rounded-md border p-2 text-sm h-20 ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"objective-editor-owner",className:`block text-xs font-medium ${d?"text-slate-300":"text-slate-700"}`,children:"Owner"}),e.jsxs("select",{id:"objective-editor-owner",value:q.owner,onChange:g=>ce({...q,owner:g.target.value}),className:`mt-1 w-full rounded-md border p-2 text-sm ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Unassigned"}),Re.map(g=>e.jsxs("option",{value:g.name,children:[g.name||"Unnamed",g.role?` - ${g.role}`:""]},g.id)),q.owner&&!Re.some(g=>g.name===q.owner)?e.jsxs("option",{value:q.owner,children:[q.owner," (not on roster)"]}):null]})]})]}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:oe,className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Cancel"}),e.jsx("button",{type:"button",onClick:Se,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Save Outcome"})]})]})}):null,e.jsx(un,{open:sn.isOpen,onClose:sn.close,title:"Assessing a component",darkMode:d,body:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Each component is assessed lens by lens: justify where you are, review its outcomes, then plan and track delivery actions for each readiness level."}),e.jsx("p",{children:'Click "What is this?" at the top for what the component covers, and "Evidence Links and Docs" at the bottom rounds up everything attached as evidence across all of its actions.'})]})})]})}const it=50;function $o(n){const t=new Date(n);return Number.isNaN(t.getTime())?n:t.toLocaleString("en-GB",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function To({events:n,darkMode:t=!1}){const s=dn("audit-log"),[a,i]=m.useState("all"),[r,o]=m.useState("all"),[u,c]=m.useState("all"),[h,l]=m.useState(""),[x,b]=m.useState(1),S=m.useMemo(()=>["all",...Array.from(new Set(n.map(I=>I.eventType))).sort()],[n]),d=m.useMemo(()=>["all",...Array.from(new Set(n.map(I=>I.componentId).filter(Boolean))).sort()],[n]),A=m.useMemo(()=>["all",...Array.from(new Set(n.map(I=>I.actor).filter(Boolean))).sort()],[n]),_=m.useMemo(()=>{const I=h.trim().toLowerCase();return n.filter(D=>a==="all"?!0:D.eventType===a).filter(D=>r==="all"?!0:D.componentId===r).filter(D=>u==="all"?!0:D.actor===u).filter(D=>I?[D.summary,D.reason,D.entityId,D.lens].filter(Boolean).some(K=>String(K).toLowerCase().includes(I)):!0).sort((D,K)=>Date.parse(K.timestamp)-Date.parse(D.timestamp))},[n,a,r,u,h]),f=Math.max(1,Math.ceil(_.length/it)),V=Math.min(x,f),U=(V-1)*it,ee=_.slice(U,U+it);return e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Audit Log"}),e.jsx(mn,{onClick:s.reopen,darkMode:t})]}),e.jsx("p",{className:`text-sm mt-1 ${t?"text-slate-300":"text-slate-600"}`,children:"Timestamped history of CST changes, including who made each change."})]}),e.jsx(un,{open:s.isOpen,onClose:s.close,title:"Audit Log",darkMode:t,body:e.jsx("p",{children:"A timestamped history of changes made to your CST, including who made each change. Filter by event type, component, or actor, and expand a row to see exactly what changed."})}),e.jsxs("div",{className:`grid gap-3 md:grid-cols-4 rounded-lg border p-4 ${t?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Event type"}),e.jsx("select",{value:a,onChange:I=>{i(I.target.value),b(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:S.map(I=>e.jsx("option",{value:I,children:I==="all"?"All":I},I))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Component"}),e.jsx("select",{value:r,onChange:I=>{o(I.target.value),b(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:d.map(I=>e.jsx("option",{value:I,children:I==="all"?"All":I},I))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Actor"}),e.jsx("select",{value:u,onChange:I=>{c(I.target.value),b(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:A.map(I=>e.jsx("option",{value:I,children:I==="all"?"All":I},I))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Search"}),e.jsx("input",{value:h,onChange:I=>{l(I.target.value),b(1)},placeholder:"summary, reason, id",className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsx("div",{className:`rounded-lg border overflow-hidden ${t?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full text-sm",children:[e.jsx("thead",{className:t?"bg-slate-900 text-slate-200":"bg-slate-50 text-slate-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left",children:"When"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Who"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"What"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Context"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Details"})]})}),e.jsx("tbody",{className:t?"bg-slate-800 text-slate-100":"bg-white text-slate-800",children:ee.length?ee.map(I=>e.jsxs("tr",{className:t?"border-t border-slate-700":"border-t border-slate-100",children:[e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:$o(I.timestamp)}),e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:I.actor||"Unknown user"}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{className:"font-medium",children:I.summary}),e.jsx("div",{className:`text-xs mt-1 ${t?"text-slate-300":"text-slate-600"}`,children:I.eventType})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{children:I.componentId||"-"}),e.jsx("div",{className:`text-xs ${t?"text-slate-300":"text-slate-600"}`,children:I.lens||"-"})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[I.reason?e.jsxs("div",{children:["Reason: ",I.reason]}):null,I.before||I.after?e.jsxs("details",{className:"mt-1",children:[e.jsx("summary",{className:"cursor-pointer text-xs underline",children:"Before/After"}),e.jsx("pre",{className:`mt-1 text-xs whitespace-pre-wrap ${t?"text-slate-300":"text-slate-600"}`,children:JSON.stringify({before:I.before,after:I.after},null,2)})]}):null]})]},I.id)):e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-6 text-center",colSpan:5,children:"No audit events found for the selected filters."})})})]})}),e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("span",{className:t?"text-slate-300":"text-slate-600",children:["Showing ",ee.length?U+1:0,"-",Math.min(U+it,_.length)," of ",_.length]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>b(I=>Math.max(1,I-1)),disabled:V<=1,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Previous"}),e.jsxs("span",{className:t?"text-slate-200":"text-slate-700",children:["Page ",V," / ",f]}),e.jsx("button",{type:"button",onClick:()=>b(I=>Math.min(f,I+1)),disabled:V>=f,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Next"})]})]})]})}const Lo=[{id:"why",question:"Why are we doing this?",framework:"Force Field Analysis - Driving Forces",description:"The forces pushing for change - the case that makes it worth doing.",componentIds:["case_for_change"]},{id:"future",question:"What will the future look like?",framework:"Vision",description:"A clear picture of the destination, understood and shared by everyone.",componentIds:["vision"]},{id:"barriers",question:"What might prevent us from achieving the vision?",framework:"Force Field Analysis - Restraining Forces",description:"The forces working against change - risks, resistance and blockers to plan for.",componentIds:["case_for_change","resistance"]},{id:"impacted",question:"Who's going to be impacted by the change?",framework:"Stakeholder Analysis & Change Impact Analysis",description:"Everyone affected by the change, and how deeply it affects them.",componentIds:["stakeholder","change_impact"]},{id:"leading",question:"Who's leading the change?",framework:"Sponsor Coalition & Change Network",description:"The visible leaders and the network of champions carrying the change day to day.",componentIds:["sponsorship","change_network"]},{id:"persuade",question:"How will we persuade people to change?",framework:"Case for Change",description:"The compelling narrative that wins hearts and minds.",componentIds:["case_for_change"]}],Ls=[{phase:1,label:"Pre-Discovery",programmeStage:"Concept",tagline:"Define the change",deliverables:["Change Vision defined and communicated","Compelling case for change developed"],color:"bg-blue-50",darkColor:"bg-blue-950/45",textColor:"text-blue-700",darkTextColor:"text-blue-100",borderColor:"border-blue-300",darkBorderColor:"border-blue-700"},{phase:2,label:"Solution Design",programmeStage:"Definition",tagline:"Prepare the change",deliverables:["Change Impact analysed","Change Management inputted to Business Case","Engagement and Comms Strategy developed"],color:"bg-violet-50",darkColor:"bg-violet-950/45",textColor:"text-violet-700",darkTextColor:"text-violet-100",borderColor:"border-violet-300",darkBorderColor:"border-violet-700"},{phase:3,label:"Development",programmeStage:"Design & Develop",tagline:"Plan the change",deliverables:["Engagement and Comms Plan developed","Change Management Plan developed"],color:"bg-amber-50",darkColor:"bg-amber-950/45",textColor:"text-amber-700",darkTextColor:"text-amber-100",borderColor:"border-amber-300",darkBorderColor:"border-amber-700"},{phase:4,label:"Deployment / Go Live",programmeStage:"Implementation",tagline:"Manage implementation of the change",deliverables:["Change Management Plan executed","Communications delivered and Stakeholders engaged","Future State Processes validated","Skills gaps addressed","Future State Processes trialled and in use"],color:"bg-orange-50",darkColor:"bg-orange-950/45",textColor:"text-orange-700",darkTextColor:"text-orange-100",borderColor:"border-orange-300",darkBorderColor:"border-orange-700"},{phase:5,label:"Post-Deployment",programmeStage:"Transition / Close",tagline:"Reinforce and sustain the change",deliverables:["Change adoption evaluated","Business Change refinements actioned","Change sustained"],color:"bg-green-50",darkColor:"bg-green-950/45",textColor:"text-green-700",darkTextColor:"text-green-100",borderColor:"border-green-300",darkBorderColor:"border-green-700"}],Bo=[{title:"Handling Resistance",body:"Helping project managers navigate potential roadblocks and maintain project momentum through identifying and addressing resistance using effective communication, stakeholder engagement, and mitigation strategies."},{title:"Engaging Stakeholders",body:"Identifying key individuals and groups affected by the project and working closely with them to understand concerns, gather feedback, and ensure their perspectives are considered."},{title:"Communicating and Raising Awareness",body:"Developing engagement and communication plans that support project managers in creating clear and consistent messaging about the project's purpose, goals, and benefits."},{title:"Managing Expectations",body:"Setting realistic expectations for stakeholders regarding project outcomes, timelines, and potential disruptions by addressing concerns, clarifying misconceptions, and managing expectations."},{title:"Ensuring Change Readiness",body:"Assessing the readiness of an organisation or team for change and developing strategies to bridge any gaps."},{title:"Mitigating Risks",body:"Through anticipating and addressing risks associated with change, such as resistance, lack of stakeholder support, or unexpected obstacles."},{title:"Adopting Change Sustainably",body:"Supporting project managers in developing strategies to embed the changes into the organisation's culture, processes, and systems."}];function At({title:n,description:t,isOpen:s,onToggle:a,children:i,darkMode:r=!1}){return e.jsxs("section",{className:`mb-4 overflow-hidden rounded-lg border ${r?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("button",{type:"button",onClick:a,"aria-expanded":s,className:`flex w-full items-center justify-between gap-4 p-4 text-left transition-colors ${r?"bg-slate-900 hover:bg-slate-800":"bg-white hover:bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:n}),t?e.jsx("p",{className:`mt-0.5 text-sm ${r?"text-slate-300":"text-slate-500"}`,children:t}):null]}),e.jsx("span",{className:`shrink-0 text-xl font-bold transition-transform ${r?"text-slate-500":"text-slate-400"} ${s?"rotate-45":""}`,children:"+"})]}),s?e.jsx("div",{className:`border-t p-5 pt-4 ${r?"border-slate-700 bg-slate-900":"border-slate-100 bg-white"}`,children:i}):null]})}function Fo({onComponentClick:n,guidanceTarget:t="Default",linkOverrides:s,showAdditionalGuidanceLinks:a=!0,darkMode:i=!1}){const[r,o]=m.useState("questions"),[u,c]=m.useState(null),h=x=>{o(b=>b===x?null:x)},l=x=>{c(b=>b===x?null:x)};return e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsx("h2",{className:`mb-2 text-2xl font-bold ${i?"text-slate-100":"text-slate-800"}`,children:"Change Management Toolkit"}),e.jsx("p",{className:`mb-8 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:"NHS England Programme Delivery Lifecycle - an introduction to the five change phases and the role of the Change Manager."}),e.jsxs("div",{className:"bg-[#005eb8] text-white rounded-lg p-6 mb-8 flex flex-col sm:flex-row sm:items-center gap-4",children:[e.jsx("div",{className:"flex-shrink-0 w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold",children:"!"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-blue-100 uppercase tracking-wide mb-1",children:"When is the best time to start thinking about Change Management?"}),e.jsx("p",{className:"text-2xl font-bold",children:"Answer: Now!"}),e.jsx("p",{className:"text-sm text-blue-100 mt-1",children:"Change management should be considered from the very start of any project - not as an afterthought at go-live."})]})]}),e.jsx(At,{title:"The 6 Key Questions",description:"Six questions worth returning to throughout the life of the programme, each backed by a change model and linked to where you can act on it.",isOpen:r==="questions",onToggle:()=>h("questions"),darkMode:i,children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:Lo.map((x,b)=>{const S=ht(t,x.componentIds[0],"inputs",s,a).slice(0,2);return e.jsxs("div",{className:`rounded-md border p-4 ${i?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsxs("span",{className:"shrink-0 w-7 h-7 rounded-full bg-blue-100 text-[#005eb8] text-xs font-bold flex items-center justify-center",children:["Q",b+1]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:x.question}),e.jsx("span",{className:`mt-1 inline-block rounded border px-2 py-0.5 text-xs font-medium ${i?"border-indigo-500/40 bg-indigo-500/15 text-indigo-200":"border-indigo-200 bg-indigo-50 text-indigo-700"}`,children:x.framework})]})]}),e.jsx("p",{className:`mt-3 text-xs leading-relaxed ${i?"text-slate-300":"text-slate-600"}`,children:x.description}),S.length?e.jsx("div",{className:"mt-3 flex flex-wrap gap-x-3 gap-y-1",children:S.map(d=>e.jsx("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-medium text-[#005eb8] underline",children:d.label},`${x.id}-${d.url}`))}):null,e.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:x.componentIds.map(d=>{const A=$t(d);return A?e.jsxs("button",{type:"button",onClick:()=>n(d),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold transition-colors ${i?"border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25":"border-blue-200 bg-blue-50 text-[#005eb8] hover:bg-blue-100"}`,children:["Go to ",A.label]},d):null})})]},x.id)})})}),e.jsxs(At,{title:"The Five Change Phases",description:"Select a phase to see the key deliverables expected at that stage.",isOpen:r==="phases",onToggle:()=>h("phases"),darkMode:i,children:[e.jsx("div",{className:`mb-6 hidden grid-cols-5 gap-1 overflow-hidden rounded-lg border text-center text-xs font-semibold md:grid ${i?"border-slate-700":"border-slate-200"}`,children:Ls.map(x=>e.jsxs("button",{onClick:()=>l(x.phase),className:`py-2 px-1 transition-colors ${u===x.phase?`${x.color} ${x.textColor} ring-2 ring-inset ring-current`:i?"bg-slate-800 text-slate-300 hover:bg-slate-700":"bg-slate-100 text-slate-500 hover:bg-slate-200"}`,children:["Phase ",x.phase]},x.phase))}),e.jsx("div",{className:"space-y-3",children:Ls.map(x=>{const b=u===x.phase;return e.jsxs("div",{className:`rounded-lg border overflow-hidden transition-shadow ${i?x.darkBorderColor:x.borderColor} ${b?"shadow-md":""}`,children:[e.jsxs("button",{onClick:()=>l(x.phase),className:`w-full flex items-center justify-between p-4 text-left transition-colors ${i?x.darkColor:x.color}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 border ${i?`${x.darkTextColor} bg-slate-900 ${x.darkBorderColor}`:`${x.textColor} bg-white ${x.borderColor}`}`,children:x.phase}),e.jsxs("div",{children:[e.jsx("p",{className:`font-semibold text-sm ${i?x.darkTextColor:x.textColor}`,children:x.label}),e.jsxs("p",{className:`text-xs ${i?"text-slate-300":"text-slate-500"}`,children:[e.jsxs("span",{className:"italic",children:['"',x.tagline,'"']})," · ",x.programmeStage]})]})]}),e.jsx("span",{className:`text-lg font-bold transition-transform ${i?x.darkTextColor:x.textColor} ${b?"rotate-45":""}`,children:"+"})]}),b&&e.jsxs("div",{className:`border-t px-5 pb-5 pt-3 ${i?"border-slate-700 bg-slate-900":"border-slate-100 bg-white"}`,children:[e.jsx("p",{className:`mb-3 text-xs font-semibold uppercase tracking-wide ${i?"text-slate-300":"text-slate-500"}`,children:"Key deliverables"}),e.jsx("ul",{className:"space-y-2",children:x.deliverables.map((S,d)=>e.jsxs("li",{className:`flex items-start gap-2 text-sm ${i?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{className:`mt-0.5 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${i?`${x.darkColor} ${x.darkTextColor}`:`${x.color} ${x.textColor}`}`,children:d+1}),S]},d))})]})]},x.phase)})})]}),e.jsx(At,{title:"The Role of the Change Manager",description:"Change management (and change managers) provide essential assistance to project managers through:",isOpen:r==="role",onToggle:()=>h("role"),darkMode:i,children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:Bo.map(x=>e.jsxs("div",{className:`rounded-md border p-4 ${i?"border-slate-700 bg-slate-800":"border-slate-100 bg-slate-50"}`,children:[e.jsx("p",{className:"text-sm font-semibold text-[#005eb8] mb-1",children:x.title}),e.jsx("p",{className:`text-xs leading-relaxed ${i?"text-slate-300":"text-slate-600"}`,children:x.body})]},x.title))})}),e.jsxs("div",{className:`flex flex-col gap-4 rounded-lg border p-5 sm:flex-row sm:items-center ${i?"border-slate-700 bg-slate-800":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:`mb-1 text-sm font-semibold ${i?"text-slate-100":"text-slate-700"}`,children:"Explore the full Toolkit"}),e.jsx("p",{className:`text-xs ${i?"text-slate-300":"text-slate-500"}`,children:"Access templates, frameworks, and guidance materials on the NHS Change Management Network workspace."})]}),e.jsx("a",{href:"https://future.nhs.uk/CMN/view?objectId=129489733",target:"_blank",rel:"noopener noreferrer",className:"shrink-0 inline-flex items-center gap-2 rounded-md bg-[#005eb8] text-white text-sm font-medium px-4 py-2 hover:bg-blue-700 transition-colors",children:"Change Management Toolkit ↗"})]})]})}function Go(n){return n.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"export"}function Ea(n){var t;return(t=n==null?void 0:n.url)!=null&&t.trim()?"custom":((n==null?void 0:n.fallback)??"default")==="base"?"base":"default"}function ka({aliases:n,onChange:t,darkMode:s}){const[a,i]=m.useState(""),r=()=>{const o=a.trim();if(!o||n.some(u=>u.toLowerCase()===o.toLowerCase())){i("");return}t([...n,o]),i("")};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[n.map(o=>e.jsxs("span",{className:`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${s?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[o,e.jsx("button",{type:"button",onClick:()=>t(n.filter(u=>u!==o)),"aria-label":`Remove "${o}"`,className:s?"text-slate-400 hover:text-slate-100":"text-slate-500 hover:text-slate-800",children:"×"})]},o)),!n.length&&e.jsx("span",{className:`text-xs ${s?"text-slate-500":"text-slate-400"}`,children:"No extra matching text added yet."})]}),e.jsxs("div",{className:"mt-2 flex gap-2",children:[e.jsx("input",{type:"text",value:a,onChange:o=>i(o.target.value),onKeyDown:o=>{o.key==="Enter"&&(o.preventDefault(),r())},placeholder:"Add text this link should also match...",className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${s?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:r,className:_e,children:"Add"})]})]})}function Uo({link:n,perLink:t,baseOverrideUrl:s,onSave:a,onClose:i,darkMode:r}){const[o,u]=m.useState(Ea(t)),[c,h]=m.useState((t==null?void 0:t.url)??""),[l,x]=m.useState((t==null?void 0:t.matchAliases)??[]),b=(s==null?void 0:s.trim())||_n.url,S=va(n.label).find(_=>_!==n.label),d=[{value:"default",label:"Default Toolkit Link",url:n.url},{value:"base",label:"Project Specific Homepage",url:b},{value:"custom",label:"Custom URL",url:c}],A=()=>{if(o==="custom"&&!c.trim()){window.alert("Enter a custom URL, or choose Default or Base instead.");return}const _={fallback:o==="base"?"base":"default",url:o==="custom"?c.trim():void 0,matchAliases:l.length?l:void 0};a(o==="default"&&!l.length?void 0:_)};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":`Edit ${n.label} link`,className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${r?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${r?"text-slate-100":"text-slate-900"}`,children:n.label}),e.jsx("button",{type:"button",onClick:i,"aria-label":"Close",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${r?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:"mt-4 space-y-2",children:d.map(_=>e.jsxs("label",{className:`flex items-start gap-2 rounded-md border p-2.5 text-sm ${o===_.value?r?"border-blue-400 bg-blue-500/10":"border-blue-400 bg-blue-50":r?"border-slate-700":"border-slate-200"}`,children:[e.jsx("input",{type:"radio",name:`link-source-${n.key}`,checked:o===_.value,onChange:()=>u(_.value),className:"mt-1"}),e.jsxs("span",{className:"flex-1",children:[e.jsx("span",{className:`block font-medium ${r?"text-slate-100":"text-slate-800"}`,children:_.label}),_.value==="custom"&&o==="custom"?e.jsx("input",{type:"url",value:c,onChange:f=>h(f.target.value),placeholder:"https://...",className:`mt-1 w-full rounded border px-2 py-1.5 text-xs ${r?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}):_.url?e.jsx("a",{href:_.url,target:"_blank",rel:"noopener noreferrer",onClick:f=>f.stopPropagation(),className:`block truncate text-xs underline ${r?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:_.url}):e.jsx("span",{className:`block truncate text-xs ${r?"text-slate-400":"text-slate-500"}`,children:"No URL set yet."})]})]},_.value))}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${r?"text-slate-400":"text-slate-500"}`,children:"Match text"}),e.jsx("p",{className:`mt-1 text-xs ${r?"text-slate-300":"text-slate-500"}`,children:"This link is automatically matched in action/summary text. Add extra text below if it should match on other words too."}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-1.5",children:[e.jsxs("span",{className:`rounded-full border px-2 py-0.5 text-xs ${r?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[n.label," ",e.jsx("span",{className:"opacity-60",children:"(label)"})]}),S&&e.jsxs("span",{className:`rounded-full border px-2 py-0.5 text-xs ${r?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[S," ",e.jsx("span",{className:"opacity-60",children:"(auto-detected)"})]})]}),e.jsx("div",{className:"mt-2",children:e.jsx(ka,{aliases:l,onChange:x,darkMode:r})})]}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:i,className:_e,children:"Cancel"}),e.jsx("button",{type:"button",onClick:A,className:Rn,children:"Save"})]})]})})}function Mo({title:n,aliases:t,onSave:s,onClose:a,darkMode:i}){const[r,o]=m.useState(t);return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":`Match text for ${n}`,className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${i?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-900"}`,children:[n," - match text"]}),e.jsx("button",{type:"button",onClick:a,"aria-label":"Close",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${i?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("p",{className:`mt-2 text-xs ${i?"text-slate-300":"text-slate-500"}`,children:"This link is automatically matched by its name. Add extra text below if it should match on other words too."}),e.jsx("div",{className:"mt-3",children:e.jsx(ka,{aliases:r,onChange:o,darkMode:i})}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:a,className:_e,children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>s(r),className:Rn,children:"Save"})]})]})})}function Vo(n){const t=ha[n]||[],s=new Map,a=new Map;return t.forEach(i=>{const r=Fn[i];((r==null?void 0:r.inputs)??[]).forEach(o=>s.set(o.key,o)),((r==null?void 0:r.deliverables)??[]).forEach(o=>a.set(o.key,o))}),{inputs:[...s.values()],deliverables:[...a.values()]}}function Ho({orgProfile:n,onProfileUpdate:t,components:s,onComponentClick:a,onOpenOnboarding:i,onOpenGuidedSetup:r,darkMode:o=!1,currentUserId:u,onCurrentUserChange:c,showExternalLinksSection:h=!1}){var $e,yn,Ye,j,Y,ne,me,Ee,ge,we,z,He,Qe,Je,We,qe;const[l,x]=m.useState(n),[b,S]=m.useState(null),[d,A]=m.useState(null),_=m.useRef(null),f=dn("cst-personalisation"),V=gt(l),U=ra(V);l.trustName.trim()&&(l.projectName||"").trim()&&(l.leadName||"").trim(),m.useEffect(()=>{x(n)},[n]);const ee=m.useCallback(y=>{const O={...l,trustName:y};x(O),t(O)},[l,t]),I=m.useCallback(y=>{const O={...l,projectName:y};x(O),t(O)},[l,t]),D=m.useCallback(y=>{const O={...l,leadName:y};x(O),t(O)},[l,t]),[K,Q]=m.useState(null),k=m.useCallback(y=>{y!==l.cst.pathway&&Q(y)},[l.cst.pathway]),W=m.useCallback(()=>{if(!K)return;const y={...l,cst:{...l.cst,pathway:K}};x(y),t(y),Q(null)},[K,l,t]),te=m.useCallback(()=>{Q(null)},[]),L=m.useCallback((y,O)=>{const H={...l,cst:{...l.cst,[y]:O}};x(H),t(H)},[l,t]),q=m.useCallback(y=>{const O={...l,cst:{...l.cst,toolkitChoice:y}};x(O),t(O)},[l,t]),ce=m.useCallback(y=>{const O={...l,linkOverrides:y};x(O),t(O)},[l,t]),pe=m.useCallback((y,O)=>{const H={...l.componentFurtherReading};O.trim()?H[y]=O.trim():delete H[y];const oe={...l,componentFurtherReading:H};x(oe),t(oe)},[l,t]),Pe=m.useCallback(y=>{var Se;const O={key:`custom-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,label:"",url:"",type:"additional"},H={...l.customComponentLinks,[y]:[...((Se=l.customComponentLinks)==null?void 0:Se[y])||[],O]},oe={...l,customComponentLinks:H};x(oe),t(oe)},[l,t]),R=m.useCallback((y,O,H,oe)=>{var Xe;const Se=((Xe=l.customComponentLinks)==null?void 0:Xe[y])||[],Be={...l.customComponentLinks,[y]:Se.map(xe=>xe.key===O?{...xe,[H]:oe}:xe)},le={...l,customComponentLinks:Be};x(le),t(le)},[l,t]),Z=m.useCallback((y,O,H)=>{var le;const oe=((le=l.customComponentLinks)==null?void 0:le[y])||[],Se={...l.customComponentLinks,[y]:oe.map(Xe=>Xe.key===O?{...Xe,matchAliases:H.length?H:void 0}:Xe)},Be={...l,customComponentLinks:Se};x(Be),t(Be)},[l,t]),re=m.useCallback((y,O)=>{var Be;const H=((Be=l.customComponentLinks)==null?void 0:Be[y])||[],oe={...l.customComponentLinks,[y]:H.filter(le=>le.key!==O)},Se={...l,customComponentLinks:oe};x(Se),t(Se)},[l,t]),Oe=m.useCallback(()=>{const y={id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:"",role:""},O={...l,teamMembers:[...l.teamMembers||[],y]};x(O),t(O)},[l,t]),Le=m.useCallback((y,O,H)=>{const oe={...l,teamMembers:(l.teamMembers||[]).map(Se=>Se.id===y?{...Se,[O]:H}:Se)};x(oe),t(oe)},[l,t]),Ve=m.useCallback(y=>{const O={...l,teamMembers:(l.teamMembers||[]).filter(H=>H.id!==y)};x(O),t(O),u===y&&c("")},[l,t,u,c]),fe=l.coreLinks&&l.coreLinks.length>0?l.coreLinks:fa,tn=m.useCallback(()=>{const y={key:`core-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,label:"",url:"",type:"core"},O={...l,coreLinks:[...fe,y]};x(O),t(O)},[l,fe,t]),De=m.useCallback((y,O,H)=>{const oe={...l,coreLinks:fe.map(Se=>Se.key===y?{...Se,[O]:H}:Se)};x(oe),t(oe)},[l,fe,t]),Ke=m.useCallback((y,O)=>{const H={...l,coreLinks:fe.map(oe=>oe.key===y?{...oe,matchAliases:O.length?O:void 0}:oe)};x(H),t(H)},[l,fe,t]),sn=m.useCallback(y=>{const O={...l,coreLinks:fe.filter(H=>H.key!==y)};x(O),t(O)},[l,fe,t]),Ne=l.toolLinks||[],v=m.useCallback(()=>{const y="highlight-builder",O={key:`tool-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,tool:y,matchText:ct[y].matchText},H={...l,toolLinks:[...Ne,O]};x(H),t(H)},[l,Ne,t]),T=m.useCallback((y,O)=>{const H={...l,toolLinks:Ne.map(oe=>oe.key===y?{...oe,tool:O,matchText:ct[O].matchText}:oe)};x(H),t(H)},[l,Ne,t]),N=m.useCallback((y,O)=>{const H={...l,toolLinks:Ne.map(oe=>oe.key===y?{...oe,matchText:O}:oe)};x(H),t(H)},[l,Ne,t]),P=m.useCallback(y=>{const O={...l,toolLinks:Ne.filter(H=>H.key!==y)};x(O),t(O)},[l,Ne,t]),M=m.useCallback(y=>{const O={...l,externalLinksInitiated:y};x(O),t(O)},[l,t]),ye=m.useCallback(()=>{const y={schemaVersion:"cst-v1",exportedAt:new Date().toISOString(),orgProfile:l},O=`cst-personalisation-${l.trustName?Go(l.trustName):"export"}.json`;qn(O,JSON.stringify(y,null,2),"application/json")},[l]),Re=m.useCallback(()=>{var y;(y=_.current)==null||y.click()},[]),he=m.useCallback(async y=>{var H;const O=(H=y.target.files)==null?void 0:H[0];if(y.target.value="",!!O)try{const oe=await O.text(),Se=JSON.parse(oe);if(!Se.orgProfile||typeof Se.orgProfile!="object"){window.alert("This file does not contain Project Setup data.");return}const Be=Kn(Se.orgProfile),le=gt(Be);if(!window.confirm("Import this Project Setup file? This replaces your current organisation profile, pathway/timeline, toolkit links, further reading, core links and team members."+(le.errors.length?`

Note: the imported data has ${le.errors.length} validation warning(s) you can fix after importing.`:"")))return;x(Be),t(Be)}catch{window.alert("Unable to read this file. Please choose a valid Project Setup export.")}},[t]);return e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-800"}`,children:"Project Setup"}),e.jsx(mn,{onClick:f.reopen,darkMode:o})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:Re,className:_e,children:"Import Setup"}),e.jsx("input",{ref:_,type:"file",accept:"application/json",className:"hidden",onChange:he}),e.jsx("button",{type:"button",onClick:ye,className:_e,children:"Export Setup"}),e.jsx("button",{type:"button",onClick:i,className:_e,"data-testid":"cst-show-intro-button",children:"Show introduction again"}),r?e.jsx("button",{type:"button",onClick:r,className:_e,children:"Guided Setup"}):null]})]}),e.jsx("p",{className:`text-sm -mt-4 ${o?"text-slate-300":"text-slate-600"}`,children:"This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways it follows, and how it's tracking against its readiness phases."}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 1: Organisation profile"}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Provide some initial details to the project name, and change manager"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-trust-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Organisation Name"}),e.jsx("input",{id:"org-trust-name",type:"text","data-testid":"cst-trust-name-input",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.trustName,onChange:y=>ee(y.target.value),"aria-invalid":!!U("trustName"),"aria-describedby":U("trustName")?"org-trust-name-error":void 0}),U("trustName")?e.jsx("p",{id:"org-trust-name-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:U("trustName")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-project-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Programme / Project Name"}),e.jsx("input",{id:"org-project-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.projectName||"",onChange:y=>I(y.target.value)})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-lead-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Lead Submitter (Change Lead)"}),e.jsx("input",{id:"org-lead-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.leadName||"",onChange:y=>D(y.target.value)})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 2: Pathway and timeline"}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Choose the full pathway title for your programme, then set key timeline dates."})]}),e.jsx("div",{className:"mt-3",children:e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-pathway",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Pathway"}),e.jsx("select",{id:"cst-pathway",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.cst.pathway,onChange:y=>k(y.target.value),"aria-invalid":!!U("cst.pathway"),"aria-describedby":U("cst.pathway")?"cst-pathway-error":void 0,children:ta.map(y=>e.jsx("option",{value:y.value,children:y.label},y.value))}),U("cst.pathway")?e.jsx("p",{id:"cst-pathway-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:U("cst.pathway")}):null]})}),e.jsx(la,{pathway:l.cst.pathway,darkMode:o}),e.jsxs("div",{className:"mt-3 grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-go-live",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Go Live Date (required)"}),e.jsx("input",{id:"cst-go-live",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.cst.goLiveDate,onChange:y=>L("goLiveDate",y.target.value),"aria-invalid":!!U("cst.goLiveDate"),"aria-describedby":U("cst.goLiveDate")?"cst-go-live-error":void 0}),U("cst.goLiveDate")?e.jsx("p",{id:"cst-go-live-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:U("cst.goLiveDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-full-adoption",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Full Adoption Date (optional)"}),e.jsx("input",{id:"cst-full-adoption",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.cst.fullAdoptionDate,onChange:y=>L("fullAdoptionDate",y.target.value),"aria-invalid":!!U("cst.fullAdoptionDate"),"aria-describedby":U("cst.fullAdoptionDate")?"cst-full-adoption-error":void 0}),U("cst.fullAdoptionDate")?e.jsx("p",{id:"cst-full-adoption-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:U("cst.fullAdoptionDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-benefit",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Benefit Realisation Date (optional)"}),e.jsx("input",{id:"cst-benefit",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.cst.benefitRealizationDate,onChange:y=>L("benefitRealizationDate",y.target.value),"aria-invalid":!!U("cst.benefitRealizationDate"),"aria-describedby":U("cst.benefitRealizationDate")?"cst-benefit-error":void 0}),U("cst.benefitRealizationDate")?e.jsx("p",{id:"cst-benefit-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:U("cst.benefitRealizationDate")}):null]})]}),V.errors.filter(y=>y.field.startsWith("cst.")).length>0?e.jsxs("div",{className:`mt-4 rounded-md border p-3 ${o?"border-amber-500/40 bg-amber-500/10":"border-amber-300 bg-amber-50"}`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-amber-200":"text-amber-800"}`,children:"CST validation warnings"}),e.jsx("ul",{className:`mt-2 space-y-1 text-sm ${o?"text-amber-100":"text-amber-900"}`,children:V.errors.filter(y=>y.field.startsWith("cst.")).map(y=>e.jsxs("li",{children:["- ",y.message]},y.field+y.message))})]}):null]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 3: Team Members"}),e.jsx("p",{className:`text-sm mt-1 ${o?"text-slate-300":"text-slate-600"}`,children:"Add the people working on this programme so actions and readiness slides can be assigned to a named owner. This roster is saved with the CST; who you're signed in as is remembered on this device only."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-current-user",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"You are signed in as"}),e.jsxs("select",{id:"cst-current-user",value:u||"",onChange:y=>c(y.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 md:w-1/2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Not selected"}),(l.teamMembers||[]).map(y=>e.jsxs("option",{value:y.id,children:[y.name||"Unnamed",y.role?` - ${y.role}`:""]},y.id))]})]}),e.jsxs("div",{className:"space-y-2",children:[(l.teamMembers||[]).map(y=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2 items-center",children:[e.jsx("input",{value:y.name,onChange:O=>Le(y.id,"name",O.target.value),placeholder:"Name",className:`rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("input",{value:y.role,onChange:O=>Le(y.id,"role",O.target.value),placeholder:"Role (e.g. Change Lead)",className:`rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("button",{type:"button",onClick:()=>Ve(y.id),className:"shrink-0 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},y.id)),(l.teamMembers||[]).length?null:e.jsx("p",{className:`text-sm ${o?"text-slate-400":"text-slate-500"}`,children:"No team members added yet."})]}),e.jsx("button",{type:"button",onClick:Oe,className:_e,children:"+ Add Team Member"})]}),e.jsx("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 4: External links"}),e.jsxs("label",{className:`flex items-center gap-2 text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:[e.jsx("input",{type:"checkbox",checked:!!l.externalLinksInitiated,onChange:y=>M(y.target.checked)}),"Links initiated"]})]}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:`This is normally only set up once at the start of a project. Once you're done, tick "Links initiated" to hide this section - re-enable "Show external links section" in Settings if you need to come back to it.`}),!l.externalLinksInitiated||h?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"All toolkit links across the tool point to the NHS Future platform by default. You can override the base toolkit destination for your organisation, or change individual links independently."}),e.jsxs("div",{className:`mt-3 rounded-md border p-3 text-xs ${o?"border-blue-500/30 bg-blue-500/10 text-blue-100":"border-blue-200 bg-blue-50 text-blue-900"}`,children:[e.jsx("p",{className:"font-semibold",children:"Fallback reference"}),e.jsxs("p",{className:"mt-1",children:["Project Specific Homepage: ",e.jsx("span",{className:"font-medium",children:_n.label})," (",_n.url,")"]}),e.jsx("p",{className:"mt-1",children:"Default Toolkit Link: the original NHS Future link defined per guidance item."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("label",{htmlFor:"cst-toolkit-choice",className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Default toolkit for assistant preview"}),e.jsx("select",{id:"cst-toolkit-choice",value:l.cst.toolkitChoice,onChange:y=>q(y.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:Ja.map(y=>e.jsx("option",{value:y.key,children:y.label},y.key))}),e.jsx("p",{className:`mt-2 text-xs ${o?"text-slate-300":"text-slate-500"}`,children:"This controls which toolkit the chatbot-style assistant opens by default across the tool."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Project Specific Homepage"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"Replaces the Change Management Toolkit destination for all links that fall back to it."}),e.jsxs("p",{className:"mt-1 text-xs",children:["Currently:"," ",e.jsx("a",{href:((Ye=(yn=($e=l.linkOverrides)==null?void 0:$e.base)==null?void 0:yn.url)==null?void 0:Ye.trim())||_n.url,target:"_blank",rel:"noopener noreferrer",className:`underline ${o?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:((ne=(Y=(j=l.linkOverrides)==null?void 0:j.base)==null?void 0:Y.url)==null?void 0:ne.trim())||_n.url})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Toolkit name"}),e.jsx("input",{type:"text",placeholder:_n.label,value:((Ee=(me=l.linkOverrides)==null?void 0:me.base)==null?void 0:Ee.label)??"",onChange:y=>{var O;return ce({...l.linkOverrides,base:{...(O=l.linkOverrides)==null?void 0:O.base,label:y.target.value||void 0}})},className:`w-full rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Toolkit URL"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:_n.url,value:((we=(ge=l.linkOverrides)==null?void 0:ge.base)==null?void 0:we.url)??"",onChange:y=>{var O;return ce({...l.linkOverrides,base:{...(O=l.linkOverrides)==null?void 0:O.base,url:y.target.value||void 0}})},className:`flex-1 min-w-0 rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),((He=(z=l.linkOverrides)==null?void 0:z.base)==null?void 0:He.url)&&e.jsx("button",{type:"button",onClick:()=>{var y;return ce({...l.linkOverrides,base:{...(y=l.linkOverrides)==null?void 0:y.base,url:void 0}})},className:`shrink-0 rounded-md border px-3 py-2 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Reset"})]})]})]})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Additional Links"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"General reference links that aren't tied to a single component - shown here and matched into action/summary text across every component."})]}),e.jsx("div",{className:"space-y-2",children:fe.map(y=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto,auto] gap-2 items-center",children:[e.jsx("input",{type:"text",placeholder:"Link name",value:y.label,onChange:O=>De(y.key,"label",O.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("input",{type:"url",placeholder:"https://...",value:y.url,onChange:O=>De(y.key,"url",O.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>A({link:y}),"aria-label":`Edit match text for ${y.label||"this core link"}`,className:`shrink-0 rounded border px-1.5 py-1.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"}),e.jsx("button",{type:"button",onClick:()=>sn(y.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},y.key))}),e.jsx("button",{type:"button",onClick:tn,className:_e,children:"+ Add Core Link"})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Tool linking"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"Matches text in action/summary bodies and turns it into a button that opens an in-app tool, instead of a link to a URL."})]}),e.jsx("div",{className:"space-y-2",children:Ne.map(y=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto] gap-2 items-center",children:[e.jsx("select",{value:y.tool,onChange:O=>T(y.key,O.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:aa.map(O=>e.jsx("option",{value:O,children:ct[O].label},O))}),e.jsx("input",{type:"text",placeholder:"Matched text",value:y.matchText,onChange:O=>N(y.key,O.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>P(y.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},y.key))}),e.jsx("button",{type:"button",onClick:v,className:_e,children:"+ Add Tool Link"})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Component links"}),e.jsxs("p",{className:`text-xs ${o?"text-slate-300":"text-slate-500"}`,children:[`Set the "Further Reading" link shown on each component's overview panel, and override any of its individual guidance links. Each link shows whether it currently points at the `,e.jsx("strong",{children:"Default Toolkit Link"})," (the original NHS Future link),"," ",e.jsx("strong",{children:"Project Specific Homepage"})," (your organisation's override above), or a"," ",e.jsx("strong",{children:"Custom"})," URL you've set - click the pencil to change it. Additional links can be hidden from Settings if you only want the essentials."]}),s.map(y=>{var Be,le,Xe;const O=Vo(y.id),H=[...O.inputs,...O.deliverables],oe=H.filter(xe=>{var Te,be,vn,gn;return(gn=(vn=(be=(Te=l.linkOverrides)==null?void 0:Te.links)==null?void 0:be[xe.key])==null?void 0:vn.url)==null?void 0:gn.trim()}).length,Se=!!((Be=l.componentFurtherReading)!=null&&Be[y.id]);return e.jsxs("details",{className:`rounded-md border ${o?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer items-center justify-between gap-2 p-3 text-sm font-medium ${o?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{children:y.label}),e.jsxs("span",{className:"flex items-center gap-2",children:[Se&&e.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-emerald-500/20 text-emerald-300":"bg-emerald-100 text-emerald-700"}`,children:"Further reading set"}),oe>0&&e.jsxs("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-blue-500/20 text-blue-300":"bg-blue-100 text-blue-700"}`,children:[oe," override",oe!==1?"s":""]})]})]}),e.jsxs("div",{className:`divide-y ${o?"divide-slate-700":"divide-slate-100"}`,children:[e.jsxs("div",{className:"p-3 space-y-1.5",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:"Further reading"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:"https://...",value:((le=l.componentFurtherReading)==null?void 0:le[y.id])??"",onChange:xe=>pe(y.id,xe.target.value),className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),Se&&e.jsx("button",{type:"button",onClick:()=>pe(y.id,""),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Clear"})]})]}),!H.length&&e.jsx("p",{className:`p-3 text-xs ${o?"text-slate-500":"text-slate-400"}`,children:"No default guidance links for this component - add one below."}),["inputs","deliverables"].map(xe=>{const Te=O[xe]??[];return Te.length?e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:xe}),Te.map(be=>{var kn,Dn;const vn=(Dn=(kn=l.linkOverrides)==null?void 0:kn.links)==null?void 0:Dn[be.key],gn=Jt(be,l.linkOverrides),pn=Ea(vn),Un={default:o?"border-amber-500/40 bg-amber-500/15 text-amber-200":"bg-amber-50 border-amber-200 text-amber-800",custom:o?"border-green-500/40 bg-green-500/15 text-green-200":"bg-green-50 border-green-200 text-green-800",base:o?"border-red-500/30 bg-red-500/10 text-red-200":"bg-red-50 border-red-100 text-red-700"},Pn={default:"Default Toolkit Link",custom:"Custom",base:"Project Specific Homepage"};return e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-700"}`,children:[be.type!=="core"?"(Optional) ":"",be.label]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("a",{href:gn.url,target:"_blank",rel:"noopener noreferrer",title:gn.url,className:`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${Un[pn]}`,children:Pn[pn]}),e.jsx("button",{type:"button",onClick:()=>S(be),"aria-label":`Edit ${be.label} link`,className:`shrink-0 rounded-md border px-1.5 py-0.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"})]})]},be.key)})]},xe):null}),e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:"Custom links"}),(((Xe=l.customComponentLinks)==null?void 0:Xe[y.id])||[]).map(xe=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto,auto] gap-2 items-center",children:[e.jsx("input",{type:"text",placeholder:"Link name",value:xe.label,onChange:Te=>R(y.id,xe.key,"label",Te.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("input",{type:"url",placeholder:"https://...",value:xe.url,onChange:Te=>R(y.id,xe.key,"url",Te.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>A({link:xe,componentId:y.id}),"aria-label":`Edit match text for ${xe.label||"this link"}`,className:`shrink-0 rounded border px-1.5 py-1.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"}),e.jsx("button",{type:"button",onClick:()=>re(y.id,xe.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},xe.key)),e.jsx("button",{type:"button",onClick:()=>Pe(y.id),className:_e,children:"+ Add Link"})]})]})]},y.id)})]})]}):e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:'External links were set up at project start. Turn on "Show external links section" in Settings if you need to come back and edit them.'})]})}),b&&e.jsx(Uo,{link:b,perLink:(Je=(Qe=l.linkOverrides)==null?void 0:Qe.links)==null?void 0:Je[b.key],baseOverrideUrl:(qe=(We=l.linkOverrides)==null?void 0:We.base)==null?void 0:qe.url,onSave:y=>{var H;const O={...(H=l.linkOverrides)==null?void 0:H.links};y?O[b.key]=y:delete O[b.key],ce({...l.linkOverrides,links:O}),S(null)},onClose:()=>S(null),darkMode:o}),d&&e.jsx(Mo,{title:d.link.label||"Link",aliases:d.link.matchAliases||[],onSave:y=>{d.componentId?Z(d.componentId,d.link.key,y):Ke(d.link.key,y),A(null)},onClose:()=>A(null),darkMode:o}),K&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-lg rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-900"}`,children:["Change pathway to ",bt[K],"?"]}),e.jsx("div",{className:`mt-3 space-y-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:K==="pathway-1"?e.jsx("p",{children:"This will regenerate every component's outcomes and actions for Pathway 1. Any items you've added yourself are kept."}):e.jsx("p",{children:"Pathway 2 and Pathway 3 don't have their own outcomes and actions written yet, so this will clear the Pathway 1 stand-in content instead of leaving it in place - components will show an honest empty state until pathway-specific content is added. Any items you've added yourself are kept."})}),e.jsxs("div",{className:"mt-5 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:te,className:_e,children:"Cancel"}),e.jsx("button",{type:"button",onClick:W,className:"inline-flex items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Confirm change"})]})]})}),e.jsx(un,{open:f.isOpen,onClose:f.close,title:"Project Setup",darkMode:o,body:e.jsx("p",{children:"This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways it follows, and how it's tracking against its readiness phases. You can export or import just this page's data, and manage the external links shown throughout the tool."})})]})}function Wo({steps:n,onComponentClick:t,onActionView:s,colorAccessibilityMode:a="standard",darkMode:i=!1}){const[r,o]=m.useState({}),u=a==="color-blind-friendly"?yi:ma;return e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"What To Do Next"}),e.jsx("span",{className:`text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Your current phase"})]}),e.jsx("p",{className:`text-sm mb-4 ${i?"text-slate-300":"text-slate-500"}`,children:"Every component in your current phase that still has pending actions, ranked by timeline risk - overdue first."}),n.length>0?e.jsx("div",{className:"space-y-3",children:n.map(c=>{var x;const h=!!r[c.componentId],l=c.outstandingActions.length;return e.jsxs("div",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("button",{type:"button",onClick:()=>t(c.componentId),className:"flex w-full items-center justify-between gap-3 text-left",children:[e.jsx("span",{className:`text-sm font-semibold hover:underline ${i?"text-slate-100":"text-slate-800"}`,children:c.componentLabel}),e.jsx("span",{title:c.bragReason,className:`text-xs font-semibold rounded px-2.5 py-0.5 ${u[c.bragStatus]}`,children:c.bragStatus})]}),e.jsx("p",{className:`text-sm mt-1 ${i?"text-slate-300":"text-slate-600"}`,children:c.summary}),(x=c.toolkitLinks)!=null&&x.length?e.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:c.toolkitLinks.map(b=>e.jsx("a",{href:b.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-medium text-[#005eb8] underline",children:b.label},`${c.componentId}-${b.url}`))}):null,l>0&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("button",{type:"button",onClick:()=>o(b=>({...b,[c.componentId]:!b[c.componentId]})),className:`text-xs font-semibold underline ${i?"text-slate-300 hover:text-slate-100":"text-slate-600 hover:text-slate-900"}`,children:[h?"Hide":"Show"," outstanding action",l===1?"":"s"," (",l,")"]}),h&&e.jsx("div",{className:`mt-2 overflow-x-auto rounded-md border ${i?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full divide-y text-xs",children:[e.jsx("thead",{className:i?"bg-slate-800":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Lens"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Status"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"View"})]})}),e.jsx("tbody",{className:`divide-y ${i?"divide-slate-700":"divide-slate-100"}`,children:c.outstandingActions.map(b=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-2 py-1.5 font-medium ${i?"text-slate-200":"text-slate-700"}`,children:b.lens}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:b.text}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:b.owner||"Unassigned"}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:b.status||"-"}),e.jsx("td",{className:"px-2 py-1.5",children:e.jsx("button",{type:"button",onClick:()=>s(c.componentId,b.lens,b.id),className:`font-semibold underline ${i?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:"View"})})]},b.id))})]})})]})]},c.componentId)})}):e.jsx("p",{className:`text-sm ${i?"text-slate-400":"text-slate-500"}`,children:"Nothing pending for your current phase. Continue tracking actions and maintain evidence quality."})]})}function qo({components:n,store:t,getEntry:s,onComponentClick:a,darkMode:i=!1}){const[r,o]=m.useState(null),u=n.reduce((h,l)=>(h[l.phase]=h[l.phase]||[],h[l.phase].push(l),h),{}),c=(h,l)=>{const x=`${h}:${l}`;o(b=>b===x?null:x)};return e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Programme Change Hierarchy"}),e.jsxs("p",{className:`mt-1 mb-4 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:["Your programme has ",n.length," components, each viewed through one or more lenses. A component is a change topic you assess and track. A lens is the perspective used to assess it (e.g. leadership, risk, capability). Click a lens to see its actions, or open the full assessment."]}),e.jsx("div",{className:"space-y-5",children:sa.filter(h=>{var l;return(l=u[h])==null?void 0:l.length}).map(h=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:`text-sm font-semibold ${i?"text-slate-100":"text-slate-700"}`,children:["Phase ",h,": ",ln[h]]}),e.jsx("div",{className:"space-y-2",children:u[h].map(l=>{const x=l.lenses.reduce((S,d)=>{const A=s(l.id,d);return{total:S.total+A.actions.length,completed:S.completed+A.actions.filter(_=>_.status==="Completed").length}},{total:0,completed:0}),b=Ai(t,l.id,s);return e.jsxs("div",{"data-testid":`cst-component-card-${l.id}`,className:`w-full rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("span",{className:`font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:l.label}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:`text-xs ${i?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",Bt(l.target)]}),e.jsx("button",{type:"button",onClick:()=>a(l.id),className:`text-xs font-semibold underline ${i?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:"Open full assessment"})]})]}),e.jsx("div",{className:"mt-2 flex flex-wrap gap-1.5",children:l.lenses.map(S=>{const d=s(l.id,S),A=r===`${l.id}:${S}`;return e.jsxs("button",{type:"button",onClick:()=>c(l.id,S),"aria-expanded":A,className:`text-xs px-2 py-1 rounded-full border transition-colors ${A?i?"border-blue-400 bg-blue-500/25 text-blue-100":"border-blue-400 bg-blue-100 text-blue-900":d.score>=l.target?i?"border-green-500/40 bg-green-500/15 text-green-200 hover:bg-green-500/25":"bg-green-50 border-green-200 text-green-800 hover:bg-green-100":d.score>0?i?"border-amber-500/40 bg-amber-500/15 text-amber-200 hover:bg-amber-500/25":"bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100":i?"border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700":"bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"}`,children:[S,": ",d.score,"/",l.target]},S)})}),e.jsxs("p",{className:`mt-2 text-xs ${i?"text-slate-300":"text-slate-500"}`,children:["Lens actions: ",x.completed,"/",x.total," complete · Outcomes: ",b.completed,"/",b.total," complete"]}),l.lenses.map(S=>{if(!(r===`${l.id}:${S}`))return null;const A=s(l.id,S);return e.jsx("div",{className:`mt-3 overflow-x-auto rounded-md border ${i?"border-slate-700":"border-slate-200"}`,children:A.actions.length?e.jsxs("table",{className:`min-w-full divide-y ${i?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"}`,children:[e.jsx("thead",{className:i?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"})]})}),e.jsx("tbody",{className:`divide-y ${i?"divide-slate-700":"divide-slate-100"}`,children:A.actions.map(_=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${i?"text-slate-100":"text-slate-800"}`,children:_.text||"Untitled action"}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`inline-flex whitespace-nowrap rounded-full border px-2 py-1 text-xs font-semibold ${On[_.status]}`,children:_.status})}),e.jsx("td",{className:`px-3 py-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:_.owner||"Unassigned"})]},_.id))})]}):e.jsx("p",{className:`p-3 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:"No actions yet for this lens."})},`${S}-table`)})]},l.id)})})]},`phase-group-${h}`))})]})}function zo({store:n,components:t,metrics:s,getEntry:a,onComponentClick:i,onActionView:r,phaseFocusMode:o="auto",manualPhaseFocus:u,colorAccessibilityMode:c="standard",darkMode:h=!1}){const l=dn("daily-checkin"),x=o==="manual"&&u?u:s.currentPhase,b=m.useMemo(()=>ga(t,a,x),[t,a,x]);return e.jsxs("div",{className:"max-w-5xl mx-auto pb-20",children:[e.jsxs("div",{className:"mb-6 flex items-center gap-2",children:[e.jsx("h2",{className:`text-3xl font-bold ${h?"text-slate-100":"text-slate-800"}`,children:"Daily Check-in"}),e.jsx(mn,{onClick:l.reopen,darkMode:h})]}),e.jsx("p",{className:`mb-6 -mt-4 text-sm ${h?"text-slate-300":"text-slate-500"}`,children:"Your daily triage: what's outstanding right now, and where it sits in the wider programme."}),e.jsxs("div",{className:"space-y-8",children:[e.jsx(Wo,{steps:b,onComponentClick:i,onActionView:r,colorAccessibilityMode:c,darkMode:h}),e.jsx(qo,{components:t,store:n,getEntry:a,onComponentClick:i,darkMode:h})]}),e.jsx(un,{open:l.isOpen,onClose:l.close,title:"Daily Check-in",darkMode:h,body:e.jsx("p",{children:'This is your daily triage page - "What To Do Next" lists every component in your current phase with outstanding actions, ranked by timeline risk, and the Programme Change Hierarchy below gives you the full picture across every phase.'})})]})}const _t=[1,2,3,4,5];function Ko(n,t){const s=n.lenses.reduce((a,i)=>a+Number(t(n.id,i).score||0),0);return n.lenses.length?Number((s/n.lenses.length).toFixed(1)):0}function Yo(n,t,s,a,i,r){if(n.phase>s)return{label:"Not in current phase yet",rowClass:r?"border-slate-600 bg-slate-800/80":"border-slate-200 bg-slate-50",chipClass:r?"bg-slate-700 text-slate-100":"bg-slate-200 text-slate-700",barClass:"bg-slate-400"};const o=Kt(n.id,a),u=Bi({averageScore:t,targetScore:n.target,checkedItemKeys:i,rule:o});return u.status==="off-track"?{label:`Off track (${u.completionPct}% checklist)`,rowClass:r?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:r?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:u.status==="attention"?{label:`Needs attention (${u.completionPct}% checklist)`,rowClass:r?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:r?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:t>=n.target?{label:`On track (${u.completionPct}% checklist)`,rowClass:r?"border-green-700 bg-green-950/45":"border-green-200 bg-green-50",chipClass:r?"bg-green-900 text-green-100":"bg-green-100 text-green-700",barClass:"bg-green-500"}:n.phase<s?{label:"Behind timeline",rowClass:r?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:r?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:n.phase===s?{label:"Due this phase",rowClass:r?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:r?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:{label:"In progress",rowClass:r?"border-blue-700 bg-blue-950/45":"border-blue-200 bg-blue-50",chipClass:r?"bg-blue-900 text-blue-100":"bg-blue-100 text-blue-700",barClass:"bg-blue-500"}}function Jo({components:n,metrics:t,getEntry:s,onComponentClick:a,pathway:i,pathwayChecks:r,darkMode:o=!1}){const u=dn("component-delivery-timeline"),c=n.map(h=>{var b;const l=Ko(h,s),x=((b=r[h.id])==null?void 0:b[i])||[];return{component:h,average:l,status:Yo(h,l,t.currentPhase,i,x,o)}});return e.jsxs("section",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-2xl border p-6 shadow-sm`,children:[e.jsx("p",{className:`text-sm font-semibold uppercase tracking-[0.18em] ${o?"text-slate-300":"text-slate-500"}`,children:"Component Delivery Timeline"}),e.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-900"}`,children:"Component delivery timeline"}),e.jsx(mn,{onClick:u.reopen,darkMode:o})]}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"This gantt-style view shows when each component should be completed by phase. Components are coloured by whether they are on track against the current phase. Select a row to jump into the matching assessment tab."})]}),e.jsx(un,{open:u.isOpen,onClose:u.close,title:"Component Delivery Timeline",darkMode:o,body:e.jsx("p",{children:"A gantt-style view of when each component should be completed by phase, coloured by whether it's on track. Select a row to jump straight into that component's assessment."})}),e.jsx("div",{className:"lg:hidden space-y-3",children:c.map(({component:h,average:l,status:x})=>e.jsxs("button",{type:"button",onClick:()=>a(h.id),className:`w-full rounded-xl border p-4 text-left transition-colors ${o?"hover:border-slate-500":"hover:border-slate-300"} ${x.rowClass}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:h.label}),e.jsxs("div",{className:`mt-1 text-xs ${o?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",Bt(h.target)," · completes by Phase"," ",h.phase]})]}),e.jsx("span",{className:`rounded-full px-4 py-1 text-xs font-semibold ${x.chipClass}`,children:x.label})]}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("div",{className:`mb-1 flex items-center justify-between text-xs ${o?"text-slate-300":"text-slate-600"}`,children:[e.jsx("span",{children:"Timeline"}),e.jsxs("span",{children:["Average ",l]})]}),e.jsx("div",{className:"grid grid-cols-5 gap-1",children:_t.map(b=>{const S=b<=h.phase,d=b===h.phase;return e.jsxs("div",{children:[e.jsx("div",{className:`h-2 rounded-full ${o?"bg-slate-700/70":"bg-white/80"}`,children:S?e.jsx("div",{className:`h-full rounded-full ${x.barClass} ${d?"opacity-100":"opacity-35"}`,title:d?"Expected completion phase":"Planned timeline"}):null}),e.jsxs("div",{className:`mt-1 text-center text-[10px] ${o?"text-slate-400":"text-slate-500"}`,children:["P",b]})]},`${h.id}-mobile-${b}`)})})]})]},`mobile-${h.id}`))}),e.jsx("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} hidden lg:block rounded-2xl border p-5 shadow-sm overflow-x-auto`,children:e.jsxs("div",{className:"min-w-[860px]",children:[e.jsxs("div",{className:`grid grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 border-b pb-3 text-xs font-semibold uppercase tracking-wider ${o?"border-slate-700 text-slate-400":"border-slate-200 text-slate-500"}`,children:[e.jsx("div",{children:"Component"}),_t.map(h=>e.jsxs("div",{className:"text-center",children:["Phase ",h]},h)),e.jsx("div",{className:"text-center",children:"Average"}),e.jsx("div",{className:"text-center",children:"Status"})]}),e.jsx("div",{className:"mt-4 space-y-3",children:c.map(({component:h,average:l,status:x})=>e.jsxs("button",{type:"button",onClick:()=>a(h.id),className:`grid w-full grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 rounded-xl border p-2.5 text-left transition-colors ${o?"hover:border-slate-500":"hover:border-slate-300"} ${x.rowClass}`,children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:h.label}),e.jsxs("div",{className:`mt-1 text-xs ${o?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",Bt(h.target)," · completes by Phase"," ",h.phase]})]}),_t.map(b=>{const S=b<=h.phase,d=b===h.phase;return e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:`h-7 w-full rounded-full px-1 py-1 ${o?"bg-slate-700/70":"bg-white/70"}`,children:S?e.jsx("div",{className:`h-full rounded-full ${x.barClass} ${d?"opacity-100":"opacity-35"}`,title:d?"Expected completion phase":"Planned timeline"}):null})},`${h.id}-${b}`)}),e.jsx("div",{className:`flex items-center justify-center text-sm font-semibold ${o?"text-slate-100":"text-slate-700"}`,children:l}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("span",{className:`rounded-full text-center px-2.5 py-1 text-xs font-semibold ${x.chipClass}`,children:x.label})})]},h.id))}),e.jsxs("div",{className:`mt-4 rounded-md border p-3 text-xs ${o?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{className:"font-semibold",children:"Key:"})," Grey rows are not yet due for the current phase. Red rows indicate overdue or off-track work."]})]})})]})}function Xo(n){return ni.sanitize(n,{USE_PROFILES:{html:!0}})}const Qo=[{label:"Bold",command:"bold",icon:"B"},{label:"Italic",command:"italic",icon:"I"},{label:"Bullet list",command:"insertUnorderedList",icon:"•"},{label:"Numbered list",command:"insertOrderedList",icon:"1."}];function Bs({value:n,onChange:t,placeholder:s,className:a}){const i=m.useRef(null);m.useEffect(()=>{const c=i.current;c&&c.innerHTML!==n&&(c.innerHTML=n)},[n]);const r=()=>{const c=i.current;c&&t(Xo(c.innerHTML))},o=c=>{var h;(h=i.current)==null||h.focus(),document.execCommand(c,!1),r()},u=!n||n==="<br>";return e.jsxs("div",{className:`rounded-md border border-slate-300 bg-white ${a||""}`,children:[e.jsx("div",{"data-print-hide":"true",className:"flex items-center gap-1 border-b border-slate-200 bg-slate-50 px-1.5 py-1",children:Qo.map(c=>e.jsx("button",{type:"button",title:c.label,"aria-label":c.label,onMouseDown:h=>h.preventDefault(),onClick:()=>o(c.command),className:"flex h-6 min-w-[1.5rem] items-center justify-center rounded px-1 text-xs font-bold text-slate-600 hover:bg-slate-200",children:c.icon},c.command))}),e.jsxs("div",{className:"relative",children:[u&&s?e.jsx("span",{className:"pointer-events-none absolute left-2 top-1.5 text-sm text-slate-400",children:s}):null,e.jsx("div",{ref:i,contentEditable:!0,suppressContentEditableWarning:!0,onInput:r,onBlur:r,className:"min-h-[4.5rem] px-2 py-1.5 text-sm text-slate-800 outline-none [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"})]})]})}function ze(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}const Mt="nhs-highlight-builder-layout",Fs=[{id:"executive-summary",label:"Executive Summary"},{id:"change-dashboard",label:"Change Dashboard"},{id:"adoption-metrics",label:"Adoption Metrics"},{id:"what-went-well",label:"What Went Well"},{id:"risks-issues",label:"Key Risks and Issues"},{id:"stakeholder-insights",label:"Stakeholder Insights"},{id:"interventions-delivered",label:"Change Interventions Delivered"},{id:"upcoming-priorities",label:"Upcoming Priorities"},{id:"decisions-required",label:"Decisions Required"},{id:"change-lead-assessment",label:"Change Lead Assessment"}],cn={title:"Executive Highlight Report",themeColor:"#005eb8",logoDataUrl:"",programmeName:"",reportingPeriod:"",changeLeadName:"",sroName:"",overallStatus:"Amber",orientation:"landscape",bragSlides:[],sections:["executive-summary","change-dashboard","adoption-metrics","what-went-well","risks-issues","stakeholder-insights","interventions-delivered","upcoming-priorities","decisions-required","change-lead-assessment"],sectionNarratives:{},metricRows:[],riskRows:[],stakeholderPositivePct:0,stakeholderNeutralPct:0,stakeholderNegativePct:0,interventionRows:[],decisionRows:[],assessmentRows:[]},Zo={Green:"bg-green-100 text-green-800 border-green-200",Amber:"bg-amber-100 text-amber-800 border-amber-200",Red:"bg-red-100 text-red-800 border-red-200"},er={Green:"bg-green-500",Amber:"bg-amber-500",Red:"bg-red-500"};function Gs({status:n}){return e.jsxs("span",{className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${Zo[n]}`,children:[e.jsx("span",{className:`h-2 w-2 rounded-full ${er[n]}`}),n]})}function nr(){return e.jsx("span",{className:"flex h-4 w-4 shrink-0 items-center justify-center rounded bg-green-500 text-[10px] font-bold text-white",children:"✓"})}function Us(n,t){return`${n+1}. ${t}`}function ja(n){return Array.isArray(n)?n.filter(t=>!!t&&typeof t=="object").map(t=>({id:t.id||ze(),componentId:t.componentId||"",rows:Array.isArray(t.rows)?t.rows.filter(s=>!!s&&typeof s=="object").map(s=>({id:s.id||ze(),preventingGreenHtml:s.preventingGreenHtml||"",returnToGreenHtml:s.returnToGreenHtml||"",ownerId:s.ownerId||"",targetDate:s.targetDate||"",linkedActionId:s.linkedActionId})):[]})):[]}function Yn(n,t){return Array.isArray(n)?n.filter(s=>!!s&&typeof s=="object").map(t):[]}function Ia(n){return Yn(n,t=>({id:t.id||ze(),measure:t.measure||"",target:t.target||"",current:t.current||"",status:t.status==="Green"||t.status==="Amber"||t.status==="Red"?t.status:"Amber"}))}function Aa(n){return Yn(n,t=>({id:t.id||ze(),risk:t.risk||"",impact:t.impact||"",mitigation:t.mitigation||"",status:t.status||"Open"}))}function _a(n){return Yn(n,t=>({id:t.id||ze(),text:t.text||""}))}function Oa(n){return Yn(n,t=>({id:t.id||ze(),decision:t.decision||"",owner:t.owner||"",requiredBy:t.requiredBy||""}))}function Ra(n){return Yn(n,t=>({id:t.id||ze(),area:t.area||"",confidence:t.confidence==="High"||t.confidence==="Medium"||t.confidence==="Low"?t.confidence:"Medium"}))}function tr(){const n=En(Mt);if(!n)return cn;try{return{...cn,...n,overallStatus:n.overallStatus==="Green"||n.overallStatus==="Amber"||n.overallStatus==="Red"?n.overallStatus:cn.overallStatus,orientation:n.orientation==="portrait"||n.orientation==="landscape"?n.orientation:cn.orientation,bragSlides:ja(n.bragSlides),sections:Array.isArray(n.sections)&&n.sections.length>0?n.sections:cn.sections,metricRows:Ia(n.metricRows),riskRows:Aa(n.riskRows),stakeholderPositivePct:Number(n.stakeholderPositivePct)||0,stakeholderNeutralPct:Number(n.stakeholderNeutralPct)||0,stakeholderNegativePct:Number(n.stakeholderNegativePct)||0,interventionRows:_a(n.interventionRows),decisionRows:Oa(n.decisionRows),assessmentRows:Ra(n.assessmentRows)}}catch{return cn}}function sr({store:n,metrics:t,lenses:s,components:a=xt,getEntry:i,trustName:r,projectName:o,themeColor:u,onLayoutSaved:c,darkMode:h=!1,currentUserId:l}){const x=dn("highlight-builder"),b=n.orgProfile.teamMembers||[],[S,d]=m.useState(()=>{const v=tr();return u&&!v.themeColor?{...v,themeColor:u}:v}),[A,_]=m.useState(""),[f,V]=m.useState(0),U=m.useRef(null),ee=m.useMemo(()=>new Set(S.sections),[S.sections]),I=m.useMemo(()=>S.sections.reduce((v,T,N)=>(v[T]=N,v),{}),[S.sections]),D=m.useMemo(()=>a.map(v=>{let T=0;v.lenses.forEach(P=>{T+=Number(i(v.id,P).score||0)});const N=Number((T/v.lenses.length).toFixed(1));return{component:v,average:N,target:v.target,gap:Number(Math.max(0,v.target-N).toFixed(1))}}),[a,i]),K=m.useMemo(()=>[...D].sort((v,T)=>T.average-v.average).slice(0,5),[D]),Q=v=>{d(T=>({...T,...v}))},k=v=>{d(T=>{const N=ee.has(v)?T.sections.filter(P=>P!==v):[...T.sections,v];return{...T,sections:N}})},W=(v,T)=>{d(N=>({...N,sectionNarratives:{...N.sectionNarratives,[v]:T}}))},te=()=>{const v=new Set(S.bragSlides.map(P=>P.componentId)),T=a.find(P=>!v.has(P.id))||a[0],N={id:ze(),componentId:(T==null?void 0:T.id)||"",rows:[]};d(P=>({...P,bragSlides:[...P.bragSlides,N]}))},L=v=>{d(T=>({...T,bragSlides:T.bragSlides.filter(N=>N.id!==v)}))},q=(v,T)=>{d(N=>({...N,bragSlides:N.bragSlides.map(P=>P.id===v?{...P,componentId:T}:P)}))},ce=v=>{const T={id:ze(),preventingGreenHtml:"",returnToGreenHtml:"",ownerId:l||"",targetDate:""};d(N=>({...N,bragSlides:N.bragSlides.map(P=>P.id===v?{...P,rows:[...P.rows,T]}:P)}))},pe=(v,T,N)=>{d(P=>({...P,bragSlides:P.bragSlides.map(M=>M.id===v?{...M,rows:M.rows.map(ye=>ye.id===T?{...ye,...N}:ye)}:M)}))},Pe=(v,T)=>{d(N=>({...N,bragSlides:N.bragSlides.map(P=>P.id===v?{...P,rows:P.rows.filter(M=>M.id!==T)}:P)}))};function R(v,T){d(N=>({...N,[v]:[...N[v],T]}))}function Z(v,T,N){d(P=>({...P,[v]:P[v].map(M=>M.id===T?{...M,...N}:M)}))}function re(v,T){d(N=>({...N,[v]:N[v].filter(P=>P.id!==T)}))}const Oe=async v=>{var P;const T=(P=v.target.files)==null?void 0:P[0];if(!T)return;const N=await new Promise((M,ye)=>{const Re=new FileReader;Re.onload=()=>M(String(Re.result||"")),Re.onerror=()=>ye(new Error("Unable to read selected logo file.")),Re.readAsDataURL(T)});_(T.name),d(M=>({...M,logoDataUrl:N})),V(M=>M+1)},Le=()=>{en(Mt,S),qn("highlight-builder-layout.json",JSON.stringify(S,null,2),"application/json"),c==null||c()},Ve=async v=>{var N;const T=(N=v.target.files)==null?void 0:N[0];if(T)try{const P=await T.text(),M=JSON.parse(P);d({...cn,...M,overallStatus:M.overallStatus==="Green"||M.overallStatus==="Amber"||M.overallStatus==="Red"?M.overallStatus:cn.overallStatus,orientation:M.orientation==="portrait"||M.orientation==="landscape"?M.orientation:cn.orientation,bragSlides:ja(M.bragSlides),sections:Array.isArray(M.sections)&&M.sections.length>0?M.sections:cn.sections,sectionNarratives:M.sectionNarratives||{},metricRows:Ia(M.metricRows),riskRows:Aa(M.riskRows),stakeholderPositivePct:Number(M.stakeholderPositivePct)||0,stakeholderNeutralPct:Number(M.stakeholderNeutralPct)||0,stakeholderNegativePct:Number(M.stakeholderNegativePct)||0,interventionRows:_a(M.interventionRows),decisionRows:Oa(M.decisionRows),assessmentRows:Ra(M.assessmentRows)})}catch{window.alert("Unable to load the selected layout JSON. Please verify the file contents.")}finally{v.target.value=""}};m.useEffect(()=>{en(Mt,S)},[S]);const fe=n.history.length>1?n.history[n.history.length-2]:null,tn=m.useMemo(()=>D.slice(0,10).map(v=>{const T=fe?Number((v.component.lenses.reduce((ye,Re)=>{var he,$e;return ye+Number((($e=(he=fe.data[v.component.id])==null?void 0:he[Re])==null?void 0:$e.score)||0)},0)/v.component.lenses.length).toFixed(1)):v.average,N=v.average>T?"▲":v.average<T?"▼":"►",P=v.average>=v.target?"Green":v.average>=Math.max(1,v.target-1)?"Amber":"Red",M=v.average>=v.target?"Consistently understood by most stakeholder groups.":v.average>=Math.max(1,v.target-1)?"Progressing, with reinforcement still required.":"Below target and requiring focused intervention.";return{area:v.component.label,status:P,trend:N,commentary:M}}),[D,fe]),De=m.useMemo(()=>t.nextSteps.slice(0,7).map(v=>v.message),[t.nextSteps]),Ke=v=>{if((S.sectionNarratives[v]||"").trim())return S.sectionNarratives[v].trim();switch(v){case"executive-summary":return`${S.overallStatus}. The programme continues to progress across ${a.length} components and ${s.length} lenses, with overall delivery at ${t.overallPct}%.`;case"change-dashboard":return"Dashboard status is derived from current component averages versus targets, with trend based on the most recent finalised snapshot.";case"adoption-metrics":return"Metrics below provide an operational view of progress against key adoption measures and targets.";case"what-went-well":return"List key achievements for the reporting period, including sponsorship visibility and areas of strengthened adoption.";case"risks-issues":return"The following risks/issues require active monitoring and mitigation.";case"stakeholder-insights":return"Summarise positive feedback themes, concerns, and sentiment from stakeholder listening channels.";case"interventions-delivered":return"Capture interventions completed this month and assess their observed effectiveness.";case"upcoming-priorities":return"Set out the next 30-day focus to maintain delivery momentum and close adoption gaps.";case"decisions-required":return"Record approvals and decisions needed to unblock delivery and sustain adoption progress.";case"change-lead-assessment":return"Provide confidence ratings and the overall professional assessment from the Change Lead.";default:return""}},sn=v=>{const T=Ke(v);return v==="change-dashboard"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Trend"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Commentary"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:tn.map(N=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:N.area}),e.jsx("td",{className:"px-3 py-2 text-sm",children:e.jsx(Gs,{status:N.status})}),e.jsx("td",{className:"px-3 py-2 text-sm",children:N.trend}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:N.commentary})]},N.area))})]})})]}):v==="adoption-metrics"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Measure"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[S.metricRows.map(N=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.measure,onChange:P=>Z("metricRows",N.id,{measure:P.target.value}),placeholder:"e.g. Active Users",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.target,onChange:P=>Z("metricRows",N.id,{target:P.target.value}),placeholder:"e.g. 80%",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.current,onChange:P=>Z("metricRows",N.id,{current:P.target.value}),placeholder:"e.g. 62%",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:N.status,onChange:P=>Z("metricRows",N.id,{status:P.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"Green",children:"Green"}),e.jsx("option",{value:"Amber",children:"Amber"}),e.jsx("option",{value:"Red",children:"Red"})]})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>re("metricRows",N.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},N.id)),S.metricRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No metrics added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>R("metricRows",{id:ze(),measure:"",target:"",current:"",status:"Amber"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Metric"})]}):v==="risks-issues"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Risk / Issue"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Impact"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Mitigation"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[S.riskRows.map(N=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.risk,onChange:P=>Z("riskRows",N.id,{risk:P.target.value}),placeholder:"e.g. Inconsistent adoption in Vision",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.impact,onChange:P=>Z("riskRows",N.id,{impact:P.target.value}),placeholder:"e.g. Benefits may not be realised",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.mitigation,onChange:P=>Z("riskRows",N.id,{mitigation:P.target.value}),placeholder:"e.g. Targeted coaching sessions",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.status,onChange:P=>Z("riskRows",N.id,{status:P.target.value}),placeholder:"Open",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>re("riskRows",N.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},N.id)),S.riskRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No key risks added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>R("riskRows",{id:ze(),risk:"",impact:"",mitigation:"",status:"Open"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Risk / Issue"})]}):v==="upcoming-priorities"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T}),e.jsx("ol",{className:"mt-3 list-decimal pl-5 space-y-1 text-sm text-slate-700",children:De.length?De.map((N,P)=>e.jsx("li",{children:N},`${N}-${P}`)):e.jsx("li",{children:"No immediate priorities detected from current data."})})]}):v==="what-went-well"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T}),e.jsx("ul",{className:"mt-3 space-y-1.5 text-sm text-slate-700",children:K.slice(0,5).map(N=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(nr,{}),N.component.label," is tracking at ",N.average," against target ",N.target,"."]},N.component.id))})]}):v==="stakeholder-insights"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T}),e.jsxs("div",{className:"mt-3 grid gap-2 md:grid-cols-3 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 rounded border border-green-200 bg-green-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-green-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Positive:",e.jsx("input",{type:"number",min:0,max:100,value:S.stakeholderPositivePct,onChange:N=>Q({stakeholderPositivePct:Number(N.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-amber-200 bg-amber-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Neutral:",e.jsx("input",{type:"number",min:0,max:100,value:S.stakeholderNeutralPct,onChange:N=>Q({stakeholderNeutralPct:Number(N.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-red-200 bg-red-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-red-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Negative:",e.jsx("input",{type:"number",min:0,max:100,value:S.stakeholderNegativePct,onChange:N=>Q({stakeholderNegativePct:Number(N.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]})]})]}):v==="interventions-delivered"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T}),e.jsxs("ul",{className:"mt-3 space-y-2 text-sm text-slate-700",children:[S.interventionRows.map(N=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("input",{value:N.text,onChange:P=>Z("interventionRows",N.id,{text:P.target.value}),placeholder:"e.g. Sponsor briefing sessions",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>re("interventionRows",N.id),className:"shrink-0 rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},N.id)),S.interventionRows.length?null:e.jsx("li",{className:"text-slate-500",children:"No interventions added yet."})]}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>R("interventionRows",{id:ze(),text:""}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Intervention"})]}):v==="decisions-required"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Decision"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Required By"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[S.decisionRows.map(N=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.decision,onChange:P=>Z("decisionRows",N.id,{decision:P.target.value}),placeholder:"e.g. Approval for additional adoption support resource",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.owner,onChange:P=>Z("decisionRows",N.id,{owner:P.target.value}),placeholder:"e.g. Programme Board",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.requiredBy,onChange:P=>Z("decisionRows",N.id,{requiredBy:P.target.value}),placeholder:"TBC",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>re("decisionRows",N.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},N.id)),S.decisionRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:4,children:"No decisions added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>R("decisionRows",{id:ze(),decision:"",owner:"",requiredBy:""}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Decision"})]}):v==="change-lead-assessment"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Confidence"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[S.assessmentRows.map(N=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:N.area,onChange:P=>Z("assessmentRows",N.id,{area:P.target.value}),placeholder:"e.g. Stakeholder Engagement",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:N.confidence,onChange:P=>Z("assessmentRows",N.id,{confidence:P.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"High",children:"High"}),e.jsx("option",{value:"Medium",children:"Medium"}),e.jsx("option",{value:"Low",children:"Low"})]})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>re("assessmentRows",N.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},N.id)),S.assessmentRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:3,children:"No assessment areas added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>R("assessmentRows",{id:ze(),area:"",confidence:"Medium"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Assessment Area"})]}):e.jsx(e.Fragment,{children:e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T})})},Ne=()=>{if(!U.current){window.alert("Preview content is not ready to print yet.");return}const v=window.open("","_blank");if(!v)return;v.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8" /><title>Highlight Report</title></head><body></body></html>'),document.querySelectorAll('link[rel="stylesheet"], style').forEach(P=>{v.document.head.appendChild(P.cloneNode(!0))});const T=v.document.createElement("style");T.textContent=`
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
    `,v.document.head.appendChild(T);const N=U.current.cloneNode(!0);N.className="printable-report",N.querySelectorAll('[data-print-exclude="true"]').forEach(P=>P.remove()),v.document.body.appendChild(N),v.document.close(),setTimeout(()=>{v.focus(),v.print(),v.close()},250)};return e.jsxs("section",{className:"space-y-6",children:[h?e.jsx("div",{className:"rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm font-semibold text-red-900",children:"Dark mode not compatible for Highlight Report due to print/save functionality."}):null,e.jsx("div",{className:"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",children:e.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Highlight Builder Tool"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:"Create a polished highlight pack"}),e.jsx(mn,{onClick:x.reopen})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:Le,className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"Save JSON Layout"}),e.jsxs("label",{className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 cursor-pointer",children:["Load JSON Layout",e.jsx("input",{type:"file",accept:"application/json",className:"hidden",onChange:Ve},f)]}),e.jsxs("div",{className:"flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-semibold",role:"group","aria-label":"PDF export orientation",children:[e.jsx("button",{type:"button",onClick:()=>Q({orientation:"portrait"}),"aria-pressed":S.orientation==="portrait",className:`px-3 py-2 transition-colors ${S.orientation==="portrait"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Portrait"}),e.jsx("button",{type:"button",onClick:()=>Q({orientation:"landscape"}),"aria-pressed":S.orientation==="landscape",className:`px-3 py-2 transition-colors border-l border-slate-300 ${S.orientation==="landscape"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Landscape"})]}),e.jsxs("button",{type:"button",onClick:Ne,className:"rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm",style:{backgroundColor:S.themeColor},children:["Print / Save PDF (",S.orientation==="landscape"?"Landscape":"Portrait",")"]})]})]})}),e.jsxs("div",{className:"grid gap-6 xl:grid-cols-[340px,1fr]",children:[e.jsx("aside",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Report title"}),e.jsx("input",{value:S.title,onChange:v=>Q({title:v.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Programme"}),e.jsx("input",{value:S.programmeName,onChange:v=>Q({programmeName:v.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Reporting period"}),e.jsx("input",{value:S.reportingPeriod,onChange:v=>Q({reportingPeriod:v.target.value}),placeholder:"July 2026",className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Change Lead"}),e.jsx("input",{value:S.changeLeadName,onChange:v=>Q({changeLeadName:v.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"SRO"}),e.jsx("input",{value:S.sroName,onChange:v=>Q({sroName:v.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Overall Change Status"}),e.jsxs("select",{value:S.overallStatus,onChange:v=>Q({overallStatus:v.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500",children:[e.jsx("option",{value:"Green",children:"Green"}),e.jsx("option",{value:"Amber",children:"Amber"}),e.jsx("option",{value:"Red",children:"Red"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Theme colour"}),e.jsx("input",{type:"color",value:S.themeColor,onChange:v=>Q({themeColor:v.target.value}),className:"h-10 w-full rounded-md border border-slate-300"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Logo in top-left"}),e.jsxs("label",{className:"flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-3 py-4 text-sm text-slate-700 hover:bg-slate-100",children:[e.jsx("span",{children:A||"Upload logo"}),e.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:Oe})]}),S.logoDataUrl?e.jsx("div",{className:"mt-3 rounded-md border border-slate-200 bg-slate-50 p-2",children:e.jsx("img",{alt:"Preview logo",src:S.logoDataUrl,className:"max-h-16 w-auto"})}):null]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-1",children:"Programme/Project Readiness Slides"}),e.jsx("p",{className:"text-xs text-slate-500 mb-3",children:"These print first, one per page. Add a slide per component you want to report on."}),e.jsxs("div",{className:"space-y-2",children:[S.bragSlides.map((v,T)=>e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-500",children:["Page ",T+1]}),e.jsx("button",{type:"button",onClick:()=>L(v.id),className:"text-xs font-semibold text-red-600 hover:text-red-800",children:"Remove"})]}),e.jsx("select",{value:v.componentId,onChange:N=>q(v.id,N.target.value),className:"mt-1 w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm outline-none focus:border-blue-500",children:a.map(N=>e.jsx("option",{value:N.id,children:N.label},N.id))}),e.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:[v.rows.length," row",v.rows.length===1?"":"s"]})]},v.id)),S.bragSlides.length?null:e.jsx("p",{className:"text-sm text-slate-500",children:"No readiness slides yet."})]}),e.jsx("button",{type:"button",onClick:te,disabled:!a.length,className:"mt-3 w-full rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 disabled:opacity-50",children:"+ Add Readiness Slide"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-3",children:"Report sections"}),e.jsx("div",{className:"space-y-2",children:Fs.map(v=>{const T=ee.has(v.id),N=v.id,P=I[v.id],M=typeof P=="number"?Us(P,v.label):v.label;return e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("label",{className:"flex items-center gap-3 text-sm text-slate-700",children:[e.jsx("input",{type:"checkbox",checked:T,onChange:()=>k(v.id)}),e.jsx("span",{children:M})]}),T?e.jsxs("div",{className:"mt-3 space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-1",children:"Section narrative"}),e.jsx("textarea",{value:S.sectionNarratives[N]||"",onChange:ye=>W(N,ye.target.value),placeholder:Ke(N),rows:4,className:"w-full rounded-md border border-slate-300 px-2 py-2 text-xs outline-none focus:border-blue-500"})]}),e.jsx("p",{className:"text-xs text-slate-500",children:"All adoption components are automatically included in this section."})]}):null]},v.id)})})]})]})}),e.jsxs("div",{ref:U,className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsxs("div",{className:"mb-4 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3",children:[S.logoDataUrl?e.jsx("img",{alt:"Logo preview",src:S.logoDataUrl,className:"max-h-12 w-auto"}):e.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-md bg-slate-200 text-sm font-bold text-slate-700",children:"NHS"}),e.jsxs("div",{children:[e.jsx("div",{"data-print-hide":"true",className:"text-xs font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Builder Preview"}),e.jsx("div",{className:"text-lg font-bold text-slate-900",children:S.title}),e.jsxs("div",{className:"text-sm text-slate-600 mt-1",children:[S.programmeName||o||"Unnamed Programme"," ·"," ",S.reportingPeriod||"Reporting period not set"]}),e.jsxs("div",{className:"mt-1 flex items-center gap-2 text-sm text-slate-600",children:["Overall Status: ",e.jsx(Gs,{status:S.overallStatus})]}),e.jsx("div",{className:"text-sm text-slate-600 mt-0.5",children:r||"Unconfigured Trust"})]})]}),e.jsxs("div",{className:"grid gap-3",children:[S.bragSlides.map(v=>{const T=D.find(P=>P.component.id===v.componentId),N=T?ua(T.average,T.target):null;return e.jsxs("article",{"data-brag-slide":"true",className:"rounded-xl border border-slate-200 p-4",style:{borderLeft:`4px solid ${S.themeColor}`},children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Programme/Project Readiness"}),e.jsx("h3",{className:"text-lg font-bold text-slate-900",children:(T==null?void 0:T.component.label)||"Select a component"})]}),T&&N?e.jsxs("div",{className:"text-right",children:[e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold ${ma[N]}`,children:N}),e.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:[T.average.toFixed(1)," of ",T.target," target"]})]}):null]}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What is preventing you from being green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What do you/others need to do to return to green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target date"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[v.rows.map(P=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(Bs,{value:P.preventingGreenHtml,onChange:M=>pe(v.id,P.id,{preventingGreenHtml:M}),placeholder:"What's blocking green?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(Bs,{value:P.returnToGreenHtml,onChange:M=>pe(v.id,P.id,{returnToGreenHtml:M}),placeholder:"What needs to happen?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:P.ownerId,onChange:M=>pe(v.id,P.id,{ownerId:M.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"",children:"Unassigned"}),b.map(M=>e.jsxs("option",{value:M.id,children:[M.name||"Unnamed",M.role?` - ${M.role}`:""]},M.id))]})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{type:"date",value:P.targetDate,onChange:M=>pe(v.id,P.id,{targetDate:M.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>Pe(v.id,P.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},P.id)),v.rows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No rows yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>ce(v.id),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Row"})]},v.id)}),S.sections.map(v=>{var T;return e.jsxs("article",{className:"rounded-xl border border-slate-200 p-4",style:{borderLeft:`4px solid ${S.themeColor}`},children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700",children:Us(I[v]||0,((T=Fs.find(N=>N.id===v))==null?void 0:T.label)||v)}),sn(v)]},v)})]})]})]}),e.jsx(un,{open:x.isOpen,onClose:x.close,title:"Highlight Builder Tool",body:e.jsx("p",{children:"Build a polished, presentation-ready highlight pack summarising progress across your programme - pick a layout, edit the content, and save or export it when you're happy."})})]})}function ar(n){const t={};return n.sections.forEach(s=>{s.items.forEach(a=>{t[a.id]="mine"})}),t}function Ms({active:n,onClick:t,children:s,darkMode:a}){return e.jsx("button",{type:"button",onClick:t,className:`rounded-md border px-2 py-1 text-left text-xs transition-colors ${Ht} ${n?"border-[#005eb8] bg-[#005eb8]/10 font-semibold text-[#005eb8]":a?"border-slate-600 bg-slate-900 text-slate-300 hover:bg-slate-800":"border-slate-300 bg-white text-slate-600 hover:bg-slate-50"}`,children:s})}function ir({item:n,choice:t,onChoose:s,myLabel:a,theirLabel:i,darkMode:r}){return e.jsxs("div",{"data-testid":`import-conflict-row-${n.id}`,className:`grid grid-cols-1 gap-2 border-t py-3 first:border-t-0 md:grid-cols-[1fr_1fr_1fr] ${r?"border-slate-700":"border-slate-200"}`,children:[e.jsx("div",{className:`text-sm font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:n.label}),e.jsxs(Ms,{active:t==="mine",onClick:()=>s(n.id,"mine"),darkMode:r,children:[e.jsx("span",{className:`block text-[0.65rem] font-bold uppercase tracking-wide ${r?"text-slate-400":"text-slate-500"}`,children:a}),n.mineSummary]}),e.jsxs(Ms,{active:t==="theirs",onClick:()=>s(n.id,"theirs"),darkMode:r,children:[e.jsx("span",{className:`block text-[0.65rem] font-bold uppercase tracking-wide ${r?"text-slate-400":"text-slate-500"}`,children:i}),n.theirsSummary]})]})}function or({report:n,myLabel:t,theirLabel:s,onResolve:a,onCancel:i,darkMode:r=!1}){const[o,u]=m.useState(()=>ar(n)),c=n.sections.reduce((l,x)=>l+x.items.length,0),h=l=>{u(x=>{const b={...x};return n.sections.forEach(S=>{S.items.forEach(d=>{b[d.id]=l})}),b})};return e.jsx("div",{"data-testid":"import-conflict-modal",className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4",onClick:l=>{l.target===l.currentTarget&&i()},children:e.jsxs("div",{onClick:l=>l.stopPropagation(),className:`flex w-full max-w-4xl max-h-[90vh] flex-col rounded-lg border shadow-xl ${r?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:`shrink-0 border-b p-6 ${r?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("h2",{className:`text-xl font-bold ${r?"text-slate-100":"text-slate-800"}`,children:"Resolve import conflicts"}),e.jsxs("p",{className:`mt-1 text-sm ${r?"text-slate-300":"text-slate-600"}`,children:["Comparing ",e.jsx("span",{className:"font-semibold",children:t})," (currently loaded) against"," ",e.jsx("span",{className:"font-semibold",children:s})," (the imported file)."]}),e.jsxs("p",{className:`mt-1 text-xs ${r?"text-slate-400":"text-slate-500"}`,children:[c," item",c===1?"":"s"," need a decision",n.autoMergeSummary.length?` · also merging automatically: ${n.autoMergeSummary.join(", ")}`:""]}),e.jsxs("div",{className:"mt-3 flex gap-2",children:[e.jsx("button",{type:"button",onClick:()=>h("mine"),className:`${_e} h-8 px-3 py-0 text-xs`,children:"Use all mine"}),e.jsx("button",{type:"button",onClick:()=>h("theirs"),className:`${_e} h-8 px-3 py-0 text-xs`,children:"Use all theirs"})]})]}),e.jsx("div",{className:"flex-1 space-y-6 overflow-y-auto p-6",children:n.sections.map(l=>e.jsxs("div",{children:[e.jsx("h3",{className:`mb-1 text-sm font-bold uppercase tracking-wide ${r?"text-slate-300":"text-slate-500"}`,children:l.title}),e.jsx("div",{className:`rounded-md border px-3 ${r?"border-slate-700":"border-slate-200"}`,children:l.items.map(x=>e.jsx(ir,{item:x,choice:o[x.id]||"mine",onChoose:(b,S)=>u(d=>({...d,[b]:S})),myLabel:t,theirLabel:s,darkMode:r},x.id))})]},l.id))}),e.jsxs("div",{className:`flex shrink-0 justify-end gap-3 border-t p-4 ${r?"border-slate-700":"border-slate-200"}`,children:[e.jsx("button",{type:"button","data-testid":"import-conflict-cancel",onClick:i,className:_e,children:"Cancel Import"}),e.jsx("button",{type:"button","data-testid":"import-conflict-apply",onClick:()=>a(o),className:Rn,children:"Apply and Import"})]})]})})}function Vs(){return e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function rr(n){return n in Yt}function lr({lensName:n,onClose:t,darkMode:s=!1}){if(!n||!rr(n))return null;const a=Yt[n];return e.jsx("div",{id:"lens-info-modal",className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:e.jsxs("div",{className:`${s?"bg-slate-800 border-slate-700":"bg-white"} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border`,children:[e.jsxs("div",{className:`${s?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} sticky top-0 border-b p-6 flex items-center justify-between`,children:[e.jsx("h2",{className:`text-2xl font-bold ${s?"text-slate-100":"text-slate-800"}`,children:n}),e.jsx("button",{onClick:t,className:`${s?"text-slate-300 hover:text-slate-100":"text-slate-500 hover:text-slate-700"}`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsxs("div",{className:`p-6 space-y-4 ${s?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(Vs,{}),"Outcome"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.outcome})]}),e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(Vs,{}),"What Good Looks Like"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.whatGoodLooksLike})]})]})]})})}function cr({darkMode:n=!1,onNavigateToProjectDetails:t,onNavigateToGuide:s,onNavigateToDashboard:a}){const i=ca(),[r,o]=m.useState(0);return e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${n?"text-slate-100":"text-slate-800"}`,children:"Introduction"}),e.jsx("p",{className:`mt-2 text-sm ${n?"text-slate-300":"text-slate-600"}`,children:"The five introduction steps are shown below in collapsible sections."})]}),i.map((u,c)=>e.jsxs("section",{className:`${n?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} overflow-hidden rounded-lg border shadow-sm`,children:[e.jsxs("button",{type:"button",onClick:()=>o(c),"aria-expanded":r===c,className:`flex w-full items-center justify-between gap-3 p-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-inset ${n?"hover:bg-slate-700":"hover:bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${n?"text-blue-300":"text-blue-700"}`,children:["Step ",c+1," of ",i.length]}),e.jsx("h3",{className:`mt-1 text-lg font-semibold ${n?"text-slate-100":"text-slate-900"}`,children:u.title})]}),e.jsx("span",{className:`shrink-0 text-lg font-semibold ${n?"text-slate-300":"text-slate-500"}`,"aria-hidden":"true",children:r===c?"-":"+"})]}),r===c?e.jsxs("div",{className:"px-5 pb-5",children:[u.body,c===i.length-1?e.jsxs("div",{className:"mt-5 flex flex-wrap gap-2",children:[t?e.jsx("button",{type:"button",onClick:t,className:"rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"Set up your Project"}):null,s?e.jsx("button",{type:"button",onClick:s,className:"rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"See the 6 Key Questions"}):null,a?e.jsx("button",{type:"button",onClick:a,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Go to dashboard"}):null]}):null]}):null]},u.title))]})}const Hs={1:"Pre go-live planning and early mobilisation.",2:"Go-live readiness and immediate launch support.",3:"Early adoption reinforcement and consistency.",4:"Embedding new ways of working across teams.",5:"Sustained adoption and benefits realisation at scale."},dr={1:"Low confidence",2:"Some confidence",3:"Moderate confidence",4:"High confidence",5:"Very high confidence"},ur={E:"Not started embedding",D:"Early adoption in practice",C:"Partly embedded in practice",B:"Mostly embedded in practice",A:"Well embedded in practice"};function mr(n){return n>=4?"high":n===3?"average":"below"}function gr(n){return n==="A"||n==="B"?"high":n==="C"?"average":"below"}function pr(n,t){const s=gr(n),a=mr(t),i=s==="high"&&a==="high",r=s==="below"&&a==="below",o=s==="high"&&a!=="below"||a==="high"&&s!=="below";return i?"Blue":r?"Red":o?"Green":"Amber"}function hr({orgProfile:n,onProfileUpdate:t,userSettings:s,onUserSettingsUpdate:a,objectivesCompleted:i,objectivesTotal:r,darkMode:o=!1}){const[u,c]=m.useState(n),[h,l]=m.useState(s),[x,b]=m.useState(0),[S,d]=m.useState(null),A=m.useRef(null),_=dn("profile");m.useEffect(()=>{c(n)},[n]),m.useEffect(()=>{l(s)},[s]);const f=m.useCallback(I=>{const D={...h,...I};l(D),a(D)},[h,a]),V=async I=>{var Q;const D=(Q=I.target.files)==null?void 0:Q[0];if(!D)return;const K=await new Promise((k,W)=>{const te=new FileReader;te.onload=()=>k(String(te.result||"")),te.onerror=()=>W(new Error("Unable to read selected profile image.")),te.readAsDataURL(D)});f({profileImageDataUrl:K}),b(k=>k+1)},U=()=>{f({profileImageDataUrl:void 0})},ee=m.useCallback((I,D,K)=>{const Q=u.cst.phaseCapability[I]||{competence:"C",confidence:3},k={...u,cst:{...u.cst,phaseCapability:{...u.cst.phaseCapability,[I]:{competence:Q.competence,confidence:Q.confidence,assessedAt:new Date().toISOString(),reason:"manual",[D]:K}}}};c(k),t(k)},[u,t]);return e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-800"}`,children:"Profile"}),e.jsx(mn,{onClick:_.reopen,darkMode:o})]}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Your identity, progress towards your objectives, and confidence/capability self-assessment."}),e.jsx(un,{open:_.isOpen,onClose:_.close,title:"Profile",darkMode:o,body:e.jsx("p",{children:"Set your name, preferences and picture, see how many objectives are complete, and record your team's confidence and delivery-readiness capability at each phase."})}),r!==void 0&&e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-2`,children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Objectives"}),e.jsxs("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:[i??0,"/",r," complete - see the full list on the Daily Check-in page, based on phase readiness, ownership, cadence and team participation."]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-5`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Your Profile"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"These details personalise your experience and reports."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Your Name"}),e.jsx("input",{id:"user-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:h.name,onChange:I=>f({name:I.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-preferences",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Preferences"}),e.jsx("textarea",{id:"user-preferences",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 h-24 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:h.preferences,onChange:I=>f({preferences:I.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-sm font-medium mb-2 ${o?"text-slate-200":"text-slate-700"}`,children:"Profile Picture"}),e.jsxs("div",{className:"flex items-start gap-4",children:[h.profileImageDataUrl?e.jsx("img",{src:h.profileImageDataUrl,alt:"Profile",className:"h-20 w-20 rounded-md border border-slate-300 object-cover"}):e.jsx("div",{className:"h-20 w-20 rounded-md border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center",children:e.jsx("span",{className:"text-xs text-slate-500",children:"No image"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{type:"button",onClick:()=>{var I;return(I=A.current)==null?void 0:I.click()},className:`rounded-md px-3 py-2 text-sm font-medium transition-colors ${o?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:h.profileImageDataUrl?"Change Picture":"Upload Picture"}),h.profileImageDataUrl?e.jsx("button",{type:"button",onClick:U,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${o?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"}`,children:"Remove"}):null,e.jsx("input",{ref:A,type:"file",accept:"image/*",className:"hidden",onChange:V},x)]})]})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Confidence and Capability by Phase"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Capture your starting position, then refresh when readiness phase changes or after major milestones."})]}),e.jsxs("div",{className:"rounded-md border border-blue-200 bg-blue-50 p-3 text-xs text-blue-900",children:[e.jsx("p",{className:"font-semibold",children:"How this self-assessment works"}),e.jsx("p",{className:"mt-1",children:"Confidence is how sure your team feels. Delivery readiness is how embedded the new way of working is in practice."}),e.jsx("p",{className:"mt-1",children:"Cards use BRAG backgrounds: Blue = both high, Green = one high and the other at least average, Amber = neither high, Red = both below average."})]}),e.jsx("div",{className:"space-y-3",children:sa.map(I=>{const D=u.cst.phaseCapability[I]||{competence:"C",confidence:3},K=pr(D.competence,D.confidence),Q=K==="Blue"?"border-sky-300 bg-sky-50":K==="Green"?"border-emerald-300 bg-emerald-50":K==="Red"?"border-red-300 bg-red-50":"border-amber-300 bg-amber-50",k=K==="Blue"?"text-sky-800 bg-sky-100":K==="Green"?"text-emerald-800 bg-emerald-100":K==="Red"?"text-red-800 bg-red-100":"text-amber-800 bg-amber-100";return e.jsxs("div",{className:`${o?"border-slate-700 bg-slate-800":Q} rounded-md border p-3`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{className:"relative flex items-center gap-2",children:[e.jsxs("span",{className:`font-semibold ${o?"text-slate-100":"text-slate-700"}`,children:["Phase ",I]}),e.jsx("button",{type:"button",onMouseEnter:()=>d(I),onMouseLeave:()=>d(W=>W===I?null:W),onFocus:()=>d(I),onBlur:()=>d(W=>W===I?null:W),onClick:()=>d(W=>W===I?null:I),className:"h-5 w-5 rounded-full border border-slate-300 text-xs font-semibold text-slate-600","aria-expanded":S===I,"aria-controls":`phase-help-${I}`,"aria-label":`Phase ${I} guidance`,children:"i"}),S===I?e.jsx("div",{id:`phase-help-${I}`,role:"tooltip",className:"absolute left-0 top-7 z-10 w-72 rounded-md border border-slate-200 bg-slate-900 px-3 py-2 text-xs text-white shadow-xl",children:Hs[I]}):null]}),e.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-slate-700 text-slate-100":k}`,children:K})]}),e.jsx("p",{className:`mt-1 text-xs ${o?"text-slate-300":"text-slate-600"}`,children:Hs[I]}),e.jsxs("div",{className:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm",children:[e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:"Delivery readiness"}),e.jsx("select",{value:D.competence,onChange:W=>ee(I,"competence",W.target.value),className:`w-full rounded-md border px-2 py-2 pr-10 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:rt.map(W=>e.jsxs("option",{value:W,children:[ur[W]," (",W,")"]},`${I}-competence-${W}`))})]}),e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:"Confidence"}),e.jsx("select",{value:D.confidence,onChange:W=>ee(I,"confidence",Number(W.target.value)),className:`w-full rounded-md border px-2 py-2 pr-10 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:lt.map(W=>e.jsxs("option",{value:W,children:[dr[W]," (",W,")"]},`${I}-confidence-${W}`))})]})]})]},`phase-capability-${I}`)})})]})]})}const fr=[{name:"NHS Blue",color:"#005eb8"},{name:"Navy",color:"#003366"},{name:"Teal",color:"#009b8a"},{name:"Purple",color:"#6c28d9"},{name:"Green",color:"#059669"},{name:"Red",color:"#dc2626"}];function br({userSettings:n,onUserSettingsUpdate:t,onLoadExampleData:s,onResetData:a,darkMode:i=!1}){const[r,o]=m.useState(n),u=dn("settings");m.useEffect(()=>{o(n)},[n]);const c=m.useCallback(l=>{const x={...r,...l};o(x),t(x)},[r,t]),h=l=>{c({themeColor:l})};return e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${i?"text-slate-100":"text-slate-800"}`,children:"Settings"}),e.jsx(mn,{onClick:u.reopen,darkMode:i})]}),e.jsx("p",{className:`text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Use this page to manage app appearance, guidance preferences, and data/support options."}),e.jsx(un,{open:u.isOpen,onClose:u.close,title:"Settings",darkMode:i,body:e.jsx("p",{children:"Manage app-wide appearance (theme, dark mode, guided-workflow and guidance-link preferences) and data/support tools like example data, reset, and bug reporting. For your personal profile and engagement progress, see the Profile page."})}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Appearance"}),e.jsx("p",{className:`mt-1 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Choose the theme colour you want to use throughout the app."})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-1",children:[e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Dark mode"}),e.jsx("input",{type:"checkbox",checked:!!r.darkMode,onChange:l=>c({darkMode:l.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show guided workflow tips on each component"}),e.jsx("input",{type:"checkbox",checked:!r.hideGuidedWorkflow,onChange:l=>c({hideGuidedWorkflow:!l.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show additional guidance links (alongside core links)"}),e.jsx("input",{type:"checkbox",checked:r.showAdditionalGuidanceLinks!==!1,onChange:l=>c({showAdditionalGuidanceLinks:l.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show external links section (Project Setup, even after marked initiated)"}),e.jsx("input",{type:"checkbox",checked:r.showExternalLinksSection===!0,onChange:l=>c({showExternalLinksSection:l.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`text-sm ${i?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-medium",children:"Status colour profile"}),e.jsxs("select",{value:r.colorAccessibilityMode||"standard",onChange:l=>c({colorAccessibilityMode:l.target.value}),className:`w-full rounded-md border p-2 pr-10 ${i?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"standard",children:"Standard"}),e.jsx("option",{value:"color-blind-friendly",children:"Color-blind friendly"})]})]})]}),e.jsx("p",{className:`text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Color-blind friendly mode keeps BRAG labels in text and shifts status colors to higher-contrast alternatives."}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-theme-colour",className:`block text-sm font-medium mb-1 ${i?"text-slate-200":"text-slate-700"}`,children:"Theme Colour"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:fr.map(l=>e.jsxs("button",{type:"button",onClick:()=>h(l.color),className:"flex items-center gap-2 rounded-md border-2 px-3 py-2 text-sm",style:{borderColor:r.themeColor===l.color?l.color:"#e2e8f0",backgroundColor:r.themeColor===l.color?`${l.color}22`:"transparent"},children:[e.jsx("span",{className:"h-4 w-4 rounded-sm border border-slate-300",style:{backgroundColor:l.color}}),e.jsx("span",{children:l.name})]},l.color))}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{id:"user-theme-colour",type:"color",className:"h-10 w-14 rounded border border-slate-300 p-1 cursor-pointer",value:r.themeColor,onChange:l=>c({themeColor:l.target.value})}),e.jsx("span",{className:`text-sm font-mono ${i?"text-slate-200":"text-slate-600"}`,children:r.themeColor})]})]})]})]}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Data and Support"}),e.jsx("p",{className:`mt-1 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Load sample data, reset local data, read FAQs, or report an issue."})]}),e.jsxs("div",{className:`${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("h4",{className:`text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Data Tools"}),e.jsxs("div",{className:"mt-3 flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>s("red"),className:"inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-800 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors",children:"Early Stage Example"}),e.jsx("button",{onClick:()=>s("amber"),className:"inline-flex items-center justify-center rounded-md bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800 border border-amber-200 shadow-[0_3px_0_#fde68a] hover:bg-amber-100 transition-colors",children:"Progressing Example"}),e.jsx("button",{onClick:()=>s("green"),className:"inline-flex items-center justify-center rounded-md bg-green-50 px-4 py-2 text-sm font-semibold text-green-800 border border-green-200 shadow-[0_3px_0_#bbf7d0] hover:bg-green-100 transition-colors",children:"Exemplar Example"})]}),e.jsx("div",{className:"mt-3 flex flex-wrap gap-3",children:e.jsx("button",{onClick:a,className:`inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors ${Ht}`,children:"Reset Data"})}),e.jsx("p",{className:`mt-2 text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Each Example Data button loads a full sample assessment at a different maturity stage, so you can explore the dashboards and workflows quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"How is my data stored?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Your settings and assessment state are stored locally in your browser using local storage."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"What does Example Data do?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Each button populates the tool with a full sample assessment at that maturity stage (Red: early stage, Amber: progressing, Green: near exemplar) so you can explore dashboards and workflows quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"Can I change the theme colour later?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Yes. Update the theme colour at any time in User Settings and it is applied immediately."})]}),e.jsxs("div",{className:`rounded-md border p-4 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("h4",{className:`mb-2 text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Submit a Bug"}),e.jsx("p",{className:`mb-3 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Found an issue? Send details directly via email."}),e.jsx("a",{href:"mailto:andrew.fraser22@kpmg.co.uk?subject=NHS%20Digital%20Adoption%20Tool%20Bug",className:`inline-flex rounded-md px-4 py-2 text-sm font-medium transition-colors ${i?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:"Report Bug"})]})]})]})}function xr(n){return{id:`audit:${Date.now()}-${Math.random().toString(36).slice(2,8)}`,timestamp:new Date().toISOString(),actor:n.actor,eventType:n.eventType,entityType:n.entityType,entityId:n.entityId,summary:n.summary,trustName:n.trustName,projectName:n.projectName,componentId:n.componentId,lens:n.lens,reason:n.reason,before:n.before,after:n.after,source:n.source||"local",importedAt:n.importedAt}}const Sr=1e4;function St(n,t=Sr){return n.length<=t?n:n.slice(n.length-t)}const Ws="nhs-digital-adoption-store",yr=new Set(["pathway-1","pathway-2","pathway-3"]);function Pa(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function Fe(n,t){if(!Pa(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected object.`)}function J(n,t){if(n!==void 0&&typeof n!="string")throw new Error(`Invalid adoption assessment payload at ${t}: expected string.`)}function Da(n,t){if(n!==void 0&&typeof n!="number")throw new Error(`Invalid adoption assessment payload at ${t}: expected number.`)}function Zt(n,t){if(n!==void 0&&!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`)}function $a(n,t){Fe(n,t),J(n.id,`${t}.id`),J(n.text,`${t}.text`),J(n.owner,`${t}.owner`),J(n.timescale,`${t}.timescale`),J(n.status,`${t}.status`),J(n.notes,`${t}.notes`),J(n.evidence,`${t}.evidence`)}function vr(n,t){Fe(n,t),Da(n.score,`${t}.score`),J(n.justification,`${t}.justification`),J(n.evidence,`${t}.evidence`),Zt(n.actions,`${t}.actions`),(n.actions||[]).forEach((s,a)=>{$a(s,`${t}.actions[${a}]`)})}function Ta(n,t){Fe(n,t),Object.keys(n).forEach(s=>{const a=n[s];Fe(a,`${t}.${s}`),Object.keys(a).forEach(i=>{vr(a[i],`${t}.${s}.${i}`)})})}function wr(n,t){Fe(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((i,r)=>{Fe(i,`${t}.${s}[${r}]`),J(i.id,`${t}.${s}[${r}].id`),J(i.text,`${t}.${s}[${r}].text`),J(i.owner,`${t}.${s}[${r}].owner`),J(i.timescale,`${t}.${s}[${r}].timescale`),J(i.notes,`${t}.${s}[${r}].notes`),J(i.evidence,`${t}.${s}[${r}].evidence`),Zt(i.linkedActions,`${t}.${s}[${r}].linkedActions`),(i.linkedActions||[]).forEach((o,u)=>{Fe(o,`${t}.${s}[${r}].linkedActions[${u}]`),J(o.lens,`${t}.${s}[${r}].linkedActions[${u}].lens`),J(o.actionId,`${t}.${s}[${r}].linkedActions[${u}].actionId`)})})})}function Nr(n,t){Fe(n,t),Object.keys(n).forEach(s=>{const a=n[s];Fe(a,`${t}.${s}`),["pathway-1","pathway-2","pathway-3"].forEach(i=>{const r=a[i];Zt(r,`${t}.${s}.${i}`),(r||[]).forEach((o,u)=>{if(typeof o!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}.${i}[${u}]: expected string.`)})})})}function Cr(n,t){Fe(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((i,r)=>{if(typeof i!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}[${r}]: expected string.`)})})}function Er(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{Fe(s,`${t}[${a}]`),J(s.id,`${t}[${a}].id`),J(s.removedAt,`${t}[${a}].removedAt`),J(s.reason,`${t}[${a}].reason`),J(s.componentId,`${t}[${a}].componentId`),J(s.lens,`${t}[${a}].lens`),J(s.actionId,`${t}[${a}].actionId`),J(s.actionText,`${t}[${a}].actionText`),J(s.actionType,`${t}[${a}].actionType`)})}function kr(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{Fe(s,`${t}[${a}]`),J(s.id,`${t}[${a}].id`),J(s.timestamp,`${t}[${a}].timestamp`),J(s.actor,`${t}[${a}].actor`),J(s.eventType,`${t}[${a}].eventType`),J(s.entityType,`${t}[${a}].entityType`),J(s.entityId,`${t}[${a}].entityId`),J(s.summary,`${t}[${a}].summary`),J(s.trustName,`${t}[${a}].trustName`),J(s.projectName,`${t}[${a}].projectName`),J(s.componentId,`${t}[${a}].componentId`),J(s.lens,`${t}[${a}].lens`),J(s.reason,`${t}[${a}].reason`),J(s.source,`${t}[${a}].source`),J(s.importedAt,`${t}[${a}].importedAt`)})}function jr(n,t){if(Fe(n,t),J(n.trustName,`${t}.trustName`),J(n.region,`${t}.region`),J(n.trustType,`${t}.trustType`),J(n.projectName,`${t}.projectName`),J(n.leadName,`${t}.leadName`),J(n.cstId,`${t}.cstId`),n.cst!==void 0){if(Fe(n.cst,`${t}.cst`),J(n.cst.type,`${t}.cst.type`),J(n.cst.pathway,`${t}.cst.pathway`),typeof n.cst.pathway=="string"&&!yr.has(n.cst.pathway))throw new Error(`Invalid adoption assessment payload at ${t}.cst.pathway: unexpected value "${n.cst.pathway}".`);if(J(n.cst.goLiveDate,`${t}.cst.goLiveDate`),J(n.cst.fullAdoptionDate,`${t}.cst.fullAdoptionDate`),J(n.cst.benefitRealizationDate,`${t}.cst.benefitRealizationDate`),J(n.cst.toolkitChoice,`${t}.cst.toolkitChoice`),typeof n.cst.toolkitChoice=="string"&&!Xa(n.cst.toolkitChoice))throw new Error(`Invalid adoption assessment payload at ${t}.cst.toolkitChoice: unexpected value "${n.cst.toolkitChoice}".`)}}function Ir(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{Fe(s,`${t}[${a}]`),J(s.monthLabel,`${t}[${a}].monthLabel`),Da(s.overallPercentage,`${t}[${a}].overallPercentage`),s.data!==void 0&&Ta(s.data,`${t}[${a}].data`)})}function Ar(n,t){Fe(n,t),Object.keys(n).forEach(s=>{if(typeof n[s]!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected string.`)})}function _r(n,t){Fe(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((i,r)=>{$a(i,`${t}.${s}[${r}]`)})})}function dt(n){if(!Pa(n))throw new Error("Invalid adoption assessment payload at root: expected object.");return J(n.schemaVersion,"schemaVersion"),J(n.exportedAt,"exportedAt"),n.orgProfile!==void 0&&jr(n.orgProfile,"orgProfile"),n.currentDraft!==void 0&&Ta(n.currentDraft,"currentDraft"),n.objectives!==void 0&&wr(n.objectives,"objectives"),n.auditLog!==void 0&&kr(n.auditLog,"auditLog"),n.suppressedAutoActions!==void 0&&Cr(n.suppressedAutoActions,"suppressedAutoActions"),n.actionAuditLog!==void 0&&Er(n.actionAuditLog,"actionAuditLog"),n.history!==void 0&&Ir(n.history,"history"),n.phaseOverrides!==void 0&&Ar(n.phaseOverrides,"phaseOverrides"),n.pathwayChecks!==void 0&&Nr(n.pathwayChecks,"pathwayChecks"),n.componentActions!==void 0&&_r(n.componentActions,"componentActions"),n}function Or(n=new Date){return n.toLocaleString("en-GB",{month:"short",year:"numeric"})}function qs(n){return{schemaVersion:"4.0",exportedAt:new Date().toISOString(),orgProfile:{...n.orgProfile},currentDraft:Gn(n.currentDraft),objectives:La(n.objectives),auditLog:Tr(n.auditLog),suppressedAutoActions:Fa(n.suppressedAutoActions),history:n.history.map(t=>({...t,data:Gn(t.data)})),phaseOverrides:{...n.phaseOverrides},pathwayChecks:Ba(n.pathwayChecks)}}function Rr(n){const t=n.componentActions;if(t)return Object.keys(t).reduce((s,a)=>(s[a]=(t[a]||[]).map(i=>({id:String(i.id??`${Date.now()}-${Math.random().toString(36).slice(2,8)}`),text:String(i.text||""),owner:String(i.owner||""),timescale:String(i.timescale||""),notes:String(i.notes||""),evidence:String(i.evidence||""),linkedActions:[]})),s),{})}function Pr(n,t){return n!=null&&n.length?n.map(s=>({id:`legacy-${s.id}`,timestamp:s.removedAt,actor:"Unknown user",eventType:"action-removed",entityType:"action",entityId:s.actionId,summary:`Removed action: ${s.actionText||s.actionId}`,trustName:t==null?void 0:t.trustName,projectName:t==null?void 0:t.projectName,componentId:s.componentId,lens:s.lens,reason:s.reason,before:{actionText:s.actionText,actionType:s.actionType},source:"local"})):[]}function Dr(n,t,s){const a=Pr(t,s),i=(n||[]).map(o=>({...o})),r=[...a,...i].sort((o,u)=>{const c=Date.parse(o.timestamp||""),h=Date.parse(u.timestamp||"");return!Number.isNaN(c)&&!Number.isNaN(h)&&c!==h?c-h:(o.id||"").localeCompare(u.id||"")});return St(r)}function $r(n,t){return n.map(s=>({...s,source:"imported",importedAt:t}))}function es(n){var a,i;if(!n)return{};const t=Kn(n.orgProfile);(i=(a=n.orgProfile)==null?void 0:a.cst)!=null&&i.pathway||(t.cst.pathway="pathway-1");const s=n.objectives||Rr(n);return{...n,schemaVersion:n.schemaVersion||"2.0",orgProfile:t,objectives:La(s),auditLog:Dr(n.auditLog,n.actionAuditLog,t),suppressedAutoActions:Fa(n.suppressedAutoActions),pathwayChecks:Ba(n.pathwayChecks)}}function zs(n,t){const s=dt(n),a=es(s),i=!!(s.objectives||s.componentActions),r=new Date().toISOString(),o=$r(a.auditLog||[],r),u=St([...t.auditLog||[],...o]);return mt({...t,orgProfile:a.orgProfile||t.orgProfile,currentDraft:a.currentDraft?Gn(a.currentDraft):Gn(t.currentDraft),objectives:i?a.objectives:t.objectives,auditLog:u,suppressedAutoActions:a.suppressedAutoActions||t.suppressedAutoActions,history:(a.history||t.history).map(c=>({...c,data:Gn(c.data)})),phaseOverrides:a.phaseOverrides||t.phaseOverrides,pathwayChecks:a.pathwayChecks||t.pathwayChecks})}function Ks(n,t,s=new Date){return{monthLabel:Or(s),overallPercentage:t,data:Gn(n)}}function Gn(n){const t=qt(n);return Object.keys(t).forEach(s=>{Object.keys(t[s]).forEach(a=>{t[s][a].actions=t[s][a].actions.map(i=>({...i,status:rn(i.status),notes:i.notes||"",evidence:i.evidence||"",linkedTargets:(i.linkedTargets||[]).map(r=>({componentId:r.componentId,lens:r.lens}))}))})}),t}function La(n){const t=zt(n||{});return Object.keys(t).forEach(s=>{t[s]=t[s].map(a=>({...a,owner:a.owner||"",timescale:a.timescale||"",notes:a.notes||"",evidence:a.evidence||"",linkedActions:(a.linkedActions||[]).map(i=>({lens:i.lens,actionId:i.actionId}))}))}),t}function Ba(n){return n?Object.keys(n).reduce((t,s)=>{const a=n[s]||{};return t[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},t},{}):{}}function Fa(n){return n?Object.keys(n).reduce((t,s)=>(t[s]=[...n[s]||[]],t),{}):{}}function Tr(n){return n?n.map(t=>({...t})):[]}function Ys(n){if(!n)return[];const t=n.split(/\s+/).filter(Boolean);if(t.length<2)return t;const s=t.slice(0,Math.ceil(t.length/2)).join(" "),a=t.slice(Math.ceil(t.length/2)).join(" ");return[s,a].filter(Boolean)}function Lr(n){return n.getContext?n:n.canvas}function yt(){return typeof document>"u"?!1:document.documentElement.dataset.nhsThemeMode==="dark"}function Ga(n,t,s,a={}){var u,c;const i=Lr(t),r=(c=(u=nn).getChart)==null?void 0:c.call(u,i);r&&r.destroy();const o={type:n,data:s,options:a};return new nn(i,o)}function Vt(n,t,s={}){var b,S,d,A,_,f;nn.defaults.font.family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",nn.defaults.font.size=12,nn.defaults.elements.line.tension=.2,nn.defaults.elements.point.radius=4,nn.defaults.elements.point.hoverRadius=6;const a=yt(),l={maintainAspectRatio:!0,responsive:!0,layout:{padding:56},plugins:{legend:{display:!0,position:"bottom"},tooltip:{enabled:!0,backgroundColor:a?"rgba(15,23,42,0.98)":"rgba(11,18,32,0.95)",titleColor:"#fff",bodyColor:"#fff"},centerText:""},elements:{line:{borderWidth:3,tension:.2,borderColor:a?"#63b3ff":"#005EB8",backgroundColor:a?"rgba(99,179,255,0.12)":"rgba(0,94,184,0.06)"},point:{radius:4,hoverRadius:6,backgroundColor:a?"rgba(144,205,244,0.95)":"rgba(11,122,184,0.95)"}},scales:{r:{beginAtZero:!0,grid:{color:a?"rgba(226,232,240,0.12)":"rgba(11,18,32,0.06)",lineWidth:1},angleLines:{color:a?"rgba(226,232,240,0.18)":"rgba(11,18,32,0.10)",lineWidth:1},ticks:{display:!1},pointLabels:{display:!1,color:a?"#e2e8f0":"#0b1220",font:{size:12,family:nn.defaults.font.family},padding:10,callback:V=>Ys(V).join(`
`)}}}},x={...l,...s,layout:{padding:56,...s.layout||{}},scales:{...l.scales||{},...s.scales||{},r:{...((b=l.scales)==null?void 0:b.r)||{},...((S=s.scales)==null?void 0:S.r)||{},pointLabels:{...((A=(d=l.scales)==null?void 0:d.r)==null?void 0:A.pointLabels)||{},...((f=(_=s.scales)==null?void 0:_.r)==null?void 0:f.pointLabels)||{},display:!1,callback:V=>Ys(V).join(`
`)}}}};return Ga("radar",n,t,x)}function Ua(n,t,s={}){const a=yt(),i=a?"#e2e8f0":"#0b1220",r=a?"rgba(226,232,240,0.08)":"rgba(11,18,32,0.04)",o=a?"rgba(226,232,240,0.10)":"rgba(11,18,32,0.06)",u=a?"#63b3ff":"#005EB8";return Ga("line",n,t,{...{elements:{line:{borderWidth:2,tension:.2,borderColor:u,backgroundColor:a?"rgba(99,179,255,0.14)":"rgba(0,94,184,0.06)"},point:{radius:3,hoverRadius:5,backgroundColor:u}},scales:{x:{display:!0,grid:{color:r},ticks:{color:i,font:{size:11}}},y:{beginAtZero:!0,grid:{color:o},ticks:{color:i,font:{size:11}}}}},...s})}function Br(n){return typeof n.toBase64Image=="function"?n.toBase64Image():""}const Fr={id:"radarCenterText",beforeDraw:n=>{var t;try{const s=n.ctx,i=(t=(n.options||{}).plugins)==null?void 0:t.centerText,r=(i==null?void 0:i.text)||i||"";if(!r)return;const o=String(n.config.type||"");if(o!=="radar"&&o!=="doughnut")return;s.save(),s.textAlign="center",s.textBaseline="middle";const u=n.width/2,c=n.height/2;if(o==="doughnut")s.font=(i==null?void 0:i.font)||"bold 20px Inter",s.fillStyle=(i==null?void 0:i.color)||"#005EB8",s.fillText(String(r),u,c-10),i!=null&&i.subText&&(s.font=(i==null?void 0:i.subFont)||"12px Inter",s.fillStyle=(i==null?void 0:i.subColor)||"#6b7280",s.fillText(String(i.subText),u,c+10));else{const h=Math.max(12,Math.round(Math.min(n.width,n.height)*.065)),l=`${h}px ${nn.defaults.font.family}`;s.font=l,s.fillStyle=(i==null?void 0:i.color)||(yt()?"#e2e8f0":"#0b1220");const x=String(r).split(`
`),b=h*1.05,S=(x.length-1)*-b/2;x.forEach((d,A)=>{s.fillText(d,u,c+S+A*b)})}s.restore()}catch{}}},Gr={id:"radarPointLabelText",afterDraw:n=>{var t,s,a,i;try{const r=(t=n.scales)==null?void 0:t.r,o=(s=r==null?void 0:r.options)==null?void 0:s.pointLabels;if(!r||!o||n.config.type!=="radar")return;const u=n.ctx,c=Number(((a=o.font)==null?void 0:a.size)||nn.defaults.font.size||12),h=((i=o.font)==null?void 0:i.family)||nn.defaults.font.family||"Inter, sans-serif",l=o.color||(yt()?"#e2e8f0":"#0b1220"),x=Number(o.padding??14),b=Array.isArray(r._pointLabels)?r._pointLabels:[];u.save(),u.textAlign="center",u.textBaseline="middle",u.fillStyle=l,u.font=`${c}px ${h}`,b.forEach((S,d)=>{const _=String(S??"").split(`
`).filter(Boolean);if(!_.length)return;const f=r.getPointPosition(d,r.drawingArea+x,0),V=c*1.15,U=(_.length-1)*-V/2,ee=Math.max(c,_.length*V),I=c*6,D=I/2+4,K=n.width-I/2-4,Q=ee/2+4,k=n.height-ee/2-4,W=Math.min(Math.max(f.x,D),K),te=Math.min(Math.max(f.y,Q),k);_.forEach((L,q)=>{const ce=te+U+q*V;u.fillText(L,W,ce)})}),u.restore()}catch{}}};nn.register(Fr,Gr);typeof window<"u"&&(window.NHSDigitalAdoption=window.NHSDigitalAdoption||{},window.NHSDigitalAdoption.Charts={createRadarChart:Vt,createLineChart:Ua,toBase64Image:Br});function Ur(n,t){const s=(n||[]).map(i=>`${i.componentId}:${i.lens}`).sort(),a=(t||[]).map(i=>`${i.componentId}:${i.lens}`).sort();return s.length===a.length&&s.every((i,r)=>i===a[r])}function Mr(n,t){return n.text===t.text&&(n.actionType||"")===(t.actionType||"")&&n.owner===t.owner&&n.timescale===t.timescale&&n.status===t.status&&(n.phase??null)===(t.phase??null)&&(n.guidanceUrl||"")===(t.guidanceUrl||"")&&(n.startDate||"")===(t.startDate||"")&&(n.dueDate||"")===(t.dueDate||"")&&(n.notes||"")===(t.notes||"")&&(n.evidence||"")===(t.evidence||"")&&(n.readinessScore??null)===(t.readinessScore??null)&&Ur(n.linkedTargets,t.linkedTargets)}function Vr(n){return`${n.text||"Untitled action"} - ${n.status}, owner: ${n.owner||"Unassigned"}`}function Hr(n,t){const s=n.map(i=>`${i.lens}:${i.actionId}`).sort(),a=t.map(i=>`${i.lens}:${i.actionId}`).sort();return s.length===a.length&&s.every((i,r)=>i===a[r])}function Wr(n,t){return n.text===t.text&&n.owner===t.owner&&n.timescale===t.timescale&&(n.notes||"")===(t.notes||"")&&(n.evidence||"")===(t.evidence||"")&&Hr(n.linkedActions,t.linkedActions)}function qr(n){return`${n.text||"Untitled objective"} - owner: ${n.owner||"Unassigned"}`}function Ma(n,t){return n.name===t.name&&n.role===t.role}function ft(n){return n.role?`${n.name||"Unnamed"} - ${n.role}`:n.name||"Unnamed"}function zr(n,t){return n.score===t.score&&n.justification===t.justification&&n.evidence===t.evidence}function Js(n){const t=`Score ${n.score}`;return n.justification?`${t} - ${n.justification}`:t}function vt(n,t,s,a,i,r){const o=new Map(t.map(l=>[l.id,l])),u=new Set(n.map(l=>l.id)),c=[];n.forEach(l=>{const x=o.get(l.id);x&&!s(l,x)&&c.push({id:`${a}:${l.id}`,label:i(l),mineSummary:r(l),theirsSummary:r(x)})});const h=t.filter(l=>!u.has(l.id)).length;return{conflicts:c,autoMergedCount:h,merge:l=>{const x=n.map(b=>{const S=o.get(b.id);return S&&l[`${a}:${b.id}`]==="theirs"?S:b});return t.forEach(b=>{u.has(b.id)||x.push(b)}),x}}}const Xs=[{key:"trustName",label:"Trust name"},{key:"region",label:"Region"},{key:"trustType",label:"Trust type"},{key:"projectName",label:"Programme / project name"},{key:"leadName",label:"Lead submitter"}],Qs=[{key:"type",label:"CST type"},{key:"pathway",label:"Pathway"},{key:"goLiveDate",label:"Go live date"},{key:"fullAdoptionDate",label:"Full adoption date"},{key:"benefitRealizationDate",label:"Benefit realisation date"},{key:"toolkitChoice",label:"Default toolkit"}];function Va(n,t){const s=[];return Xs.forEach(({key:a,label:i})=>{const r=String(n[a]??""),o=String(t[a]??"");r!==o&&s.push({id:`profile:${String(a)}`,label:i,mineSummary:r||"(blank)",theirsSummary:o||"(blank)"})}),Qs.forEach(({key:a,label:i})=>{const r=String(n.cst[a]??""),o=String(t.cst[a]??"");r!==o&&s.push({id:`cst:${String(a)}`,label:i,mineSummary:r||"(blank)",theirsSummary:o||"(blank)"})}),{conflicts:s,autoMergedCount:0,merge:a=>{const i={...n};Xs.forEach(({key:o})=>{a[`profile:${String(o)}`]==="theirs"&&(i[o]=t[o])});const r={...n.cst};return Qs.forEach(({key:o})=>{a[`cst:${String(o)}`]==="theirs"&&(r[o]=t.cst[o])}),{...i,cst:r}}}}function Ha(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a=[],i=[];let r=0;const o=new Map,u=new Map;return s.forEach(c=>{const h=n[c]||{},l=t[c]||{},x=new Set([...Object.keys(h),...Object.keys(l)]);u.set(c,x),x.forEach(b=>{const S=h[b],d=l[b],A=`${c}:${b}`;S&&d&&!zr(S,d)&&a.push({id:`entry:${A}`,label:`${c} / ${b}`,mineSummary:Js(S),theirsSummary:Js(d)});const _=vt((S==null?void 0:S.actions)||[],(d==null?void 0:d.actions)||[],Mr,`action:${A}`,f=>`${c} / ${b} - ${f.text||"Untitled action"}`,Vr);i.push(..._.conflicts),r+=_.autoMergedCount,o.set(A,_)})}),{entryConflicts:a,actionConflicts:i,autoMergedActionCount:r,merge:c=>{const h={};return s.forEach(l=>{const x=n[l]||{},b=t[l]||{},S={};(u.get(l)||new Set).forEach(d=>{var ee;const A=x[d],_=b[d],f=`${l}:${d}`;let V=A?{score:A.score,justification:A.justification,evidence:A.evidence}:{score:_.score,justification:_.justification,evidence:_.evidence};A&&_&&c[`entry:${f}`]==="theirs"&&(V={score:_.score,justification:_.justification,evidence:_.evidence});const U=((ee=o.get(f))==null?void 0:ee.merge(c))||[];S[d]={...V,actions:U}}),h[l]=S}),h}}}function Wa(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a=[];let i=0;const r=new Map;return s.forEach(o=>{const u=vt(n[o]||[],t[o]||[],Wr,`objective:${o}`,c=>`${o} - ${c.text||"Untitled objective"}`,qr);a.push(...u.conflicts),i+=u.autoMergedCount,r.set(o,u)}),{conflicts:a,autoMergedCount:i,merge:o=>{const u={};return s.forEach(c=>{var h;u[c]=((h=r.get(c))==null?void 0:h.merge(o))||[]}),u}}}function qa(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a=[];let i=0;return s.forEach(r=>{const o=n[r],u=t[r];if(o===void 0||u===void 0){o===void 0&&u!==void 0&&(i+=1);return}o!==u&&a.push({id:`phase:${r}`,label:`Phase focus override - ${r}`,mineSummary:o,theirsSummary:u})}),{conflicts:a,autoMergedCount:i,merge:r=>{const o={...n};return s.forEach(u=>{const c=t[u];c!==void 0&&(n[u]===void 0||r[`phase:${u}`]==="theirs")&&(o[u]=c)}),o}}}function Kr(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a={};return s.forEach(i=>{const r=n[i]||{},o=t[i]||{},u=new Set([...Object.keys(r),...Object.keys(o)]),c={};u.forEach(h=>{const l=h;c[l]=Array.from(new Set([...r[l]||[],...o[l]||[]]))}),a[i]=c}),a}function Yr(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a={};return s.forEach(i=>{a[i]=Array.from(new Set([...n[i]||[],...t[i]||[]]))}),a}function Jr(n,t){const s=new Map;return t.forEach(a=>s.set(a.monthLabel,a)),n.forEach(a=>s.set(a.monthLabel,a)),Array.from(s.values())}function za(n){const t=es(n);return{theirsProfile:t.orgProfile||Kn(),theirsDraft:t.currentDraft||{},theirsObjectives:t.objectives||{},theirsPhaseOverrides:t.phaseOverrides||{},theirsPathwayChecks:t.pathwayChecks||{},theirsSuppressedAutoActions:t.suppressedAutoActions||{},theirsAuditLog:t.auditLog||[],theirsHistory:(t.history||[]).map(s=>({...s,data:qt(s.data)}))}}function Xr(n,t){const{theirsProfile:s,theirsDraft:a,theirsObjectives:i,theirsPhaseOverrides:r}=za(t),o=Va(n.orgProfile,s),u=vt(n.orgProfile.teamMembers||[],s.teamMembers||[],Ma,"team",ft,ft),c=Ha(n.currentDraft,a),h=Wa(n.objectives,i),l=qa(n.phaseOverrides,r),x=[{id:"profile",title:"Organisation profile & CST settings",items:o.conflicts},{id:"team",title:"Team members",items:u.conflicts},{id:"assessments",title:"Assessments",items:c.entryConflicts},{id:"actions",title:"Lens actions",items:c.actionConflicts},{id:"objectives",title:"Objectives",items:h.conflicts},{id:"phaseFocus",title:"Phase focus overrides",items:l.conflicts}].filter(S=>S.items.length>0),b=[];return u.autoMergedCount&&b.push(`${u.autoMergedCount} new team member(s)`),c.autoMergedActionCount&&b.push(`${c.autoMergedActionCount} new action(s)`),h.autoMergedCount&&b.push(`${h.autoMergedCount} new objective(s)`),l.autoMergedCount&&b.push(`${l.autoMergedCount} new phase focus override(s)`),{sections:x,autoMergeSummary:b,hasConflicts:x.length>0}}function Zs(n,t,s){const{theirsProfile:a,theirsDraft:i,theirsObjectives:r,theirsPhaseOverrides:o,theirsPathwayChecks:u,theirsSuppressedAutoActions:c,theirsAuditLog:h,theirsHistory:l}=za(t),x=Va(n.orgProfile,a),b=vt(n.orgProfile.teamMembers||[],a.teamMembers||[],Ma,"team",ft,ft),S=Ha(n.currentDraft,i),d=Wa(n.objectives,r),A=qa(n.phaseOverrides,o),_={...n.orgProfile,...x.merge(s),teamMembers:b.merge(s)},f=new Date().toISOString(),V=h.map(ee=>({...ee,source:"imported",importedAt:f})),U=St([...n.auditLog||[],...V]);return mt({...n,orgProfile:_,currentDraft:qt(S.merge(s)),objectives:zt(d.merge(s)),auditLog:U,suppressedAutoActions:Yr(n.suppressedAutoActions,c),history:Jr(n.history,l),phaseOverrides:A.merge(s),pathwayChecks:Kr(n.pathwayChecks,u)})}const Qr=`{
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
`,ns={componentId:"benefits",actionPrefix:"benefits-action",outcomePrefix:"benefits:outcome",fallbackOutcomes:[{id:"benefits:outcome:o1",text:"Benefits and disbenefits have been identified and defined"},{id:"benefits:outcome:o2",text:"Benefits are actively managed and monitored"},{id:"benefits:outcome:o3",text:"Benefits are realised, evidenced and sustained"}],lensAliases:{"Strategic Direction and Leadership":"Planning and Risk","People Experience and Culture":"Process and Sustainment"}},Zr=Ge(Qr,ns);function el(n){return Ue(n,ns,Zr)}function nl(n){return Me(n,ns)}const tl=`{
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
`,ts={componentId:"capability",actionPrefix:"capability-action",outcomePrefix:"capability:outcome",fallbackOutcomes:[{id:"capability:outcome:o1",text:"Required capability levels have been defined and assessed"},{id:"capability:outcome:o2",text:"People can perform confidently in the future state"},{id:"capability:outcome:o3",text:"Capability and confidence are sustained and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Communication:"People Experience and Culture","Testing and Validation":"Skills and Behaviour"}},sl=Ge(tl,ts);function al(n){return Ue(n,ts,sl)}function il(n){return Me(n,ts)}const ol=`{
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
`,ss={componentId:"case_for_change",actionPrefix:"case-for-change-action",outcomePrefix:"case-for-change:outcome",fallbackOutcomes:[{id:"case-for-change:outcome:o1",text:"The need for change has been clearly defined and evidenced"},{id:"case-for-change:outcome:o2",text:"The case for change is understood and accepted"},{id:"case-for-change:outcome:o3",text:"The case for change remains credible and relevant"}]},rl=Ge(ol,ss);function ll(n){return Ue(n,ss,rl)}function cl(n){return Me(n,ss)}const dl=`{
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
`,as={componentId:"change_adoption",actionPrefix:"change-adoption-action",outcomePrefix:"change-adoption:outcome",fallbackOutcomes:[{id:"change-adoption:outcome:o1",text:"Adoption expectations and measures have been defined"},{id:"change-adoption:outcome:o2",text:"Adoption is actively monitored and supported"},{id:"change-adoption:outcome:o3",text:"Adoption is sustained and optimised"}],lensAliases:{"Planning and Measurement":"Planning and Risk","Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","Skills and Behaviour":"Skills and Behaviour","People Experience and Culture":"Skills and Behaviour",Governance:"Planning and Risk",Design:"Planning and Risk",Reinforcement:"Skills and Behaviour"}},ul=Ge(dl,as);function ml(n){return Ue(n,as,ul)}function gl(n){return Me(n,as)}const pl=`{
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
`,is={componentId:"change_impact",actionPrefix:"change-impact-action",outcomePrefix:"change-impact:outcome",fallbackOutcomes:[{id:"change-impact:outcome:o1",text:"The impact of the change has been identified and understood"},{id:"change-impact:outcome:o2",text:"Impacts have been assessed, validated and prioritised"},{id:"change-impact:outcome:o3",text:"Change impacts are actively managed through plans, governance and support"}]},hl=Ge(pl,is);function fl(n){return Ue(n,is,hl)}function bl(n){return Me(n,is)}const xl=`{
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
`,os={componentId:"change_network",actionPrefix:"change-network-action",outcomePrefix:"change-network:outcome",fallbackOutcomes:[{id:"change-network:outcome:o1",text:"A representative and effective change network has been established"},{id:"change-network:outcome:o2",text:"The change network actively enables engagement and adoption"},{id:"change-network:outcome:o3",text:"The change network is embedded and delivers ongoing value"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Engagement:"People Experience and Culture","Analysis and Insight":"People Experience and Culture"}},Sl=Ge(xl,os);function yl(n){return Ue(n,os,Sl)}function vl(n){return Me(n,os)}const wl=`{
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
`,rs={componentId:"cm_readiness",actionPrefix:"cm-readiness-action",outcomePrefix:"cm-readiness:outcome",fallbackOutcomes:[{id:"cm-readiness:outcome:o1",text:"Organisational readiness has been assessed"},{id:"cm-readiness:outcome:o2",text:"A robust change management plan has been developed"},{id:"cm-readiness:outcome:o3",text:"Readiness and planning activities actively support successful implementation"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Planning and Risk":"Planning and Risk","People Experience and Culture":"Planning and Risk","Skills and Behaviour":"Planning and Risk","Process and Sustainment":"Planning and Risk",Governance:"Planning and Risk",Reinforcement:"Planning and Risk"}},Nl=Ge(wl,rs);function Cl(n){return Ue(n,rs,Nl)}function El(n){return Me(n,rs)}const kl=`{
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
`,ls={componentId:"org_maturity",actionPrefix:"org-change-readiness-action",outcomePrefix:"org-change-readiness:outcome",fallbackOutcomes:[{id:"org-change-readiness:outcome:o1",text:"Organisational readiness has been assessed and understood"},{id:"org-change-readiness:outcome:o2",text:"Readiness gaps are being actively addressed"},{id:"org-change-readiness:outcome:o3",text:"The organisation is prepared to successfully absorb and sustain the change"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"Skills and Behaviour","Planning and Measurement":"Skills and Behaviour",Design:"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Reinforcement:"Skills and Behaviour"}},jl=Ge(kl,ls);function Il(n){return Ue(n,ls,jl)}function Al(n){return Me(n,ls)}const _l="pathway-auto-action:",Ol="pathway:auto-objective:",Rl="vision:auto-objective:";function Pl(n){return n.startsWith(Ol)||n.startsWith(Rl)}function Dl(n){const t=n.orgProfile.cst.pathway,s={...n.objectives||{}},a=Object.keys(n.currentDraft||{}).reduce((i,r)=>{const o=n.currentDraft[r]||{};return i[r]=Object.keys(o).reduce((u,c)=>{const h=o[c];return u[c]={...h,actions:(h.actions||[]).filter(l=>!l.id.startsWith(_l))},u},{}),i},{});return xt.forEach(i=>{Kt(i.id,t)&&(s[i.id]=(s[i.id]||[]).filter(o=>!Pl(o.id)))}),{...n,currentDraft:a,objectives:s}}const $l=`{
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
`,cs={componentId:"process_change",actionPrefix:"process-change-action",outcomePrefix:"process-change:outcome",fallbackOutcomes:[{id:"process-change:outcome:o1",text:"Current and future processes have been defined"},{id:"process-change:outcome:o2",text:"Process changes have been implemented and adopted"},{id:"process-change:outcome:o3",text:"Processes are optimised and continuously improved"}],lensAliases:{"Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Skills and Behaviour","Planning and Risk":"Process and Sustainment","Analysis and Insight":"Process and Sustainment",Communication:"Skills and Behaviour","Dependency Management":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment",Implementation:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"Skills and Behaviour","Testing and Validation":"Process and Sustainment"}},Tl=Ge($l,cs);function Ll(n){return Ue(n,cs,Tl)}function Bl(n){return Me(n,cs)}const Fl=`{
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
`,ds={componentId:"reinforcement",actionPrefix:"reinforcement-action",outcomePrefix:"reinforcement:outcome",fallbackOutcomes:[{id:"reinforcement:outcome:o1",text:"Reinforcement strategy and sustainment measures are defined"},{id:"reinforcement:outcome:o2",text:"Reinforcement activities support sustained adoption and behaviour change"},{id:"reinforcement:outcome:o3",text:"Sustained change outcomes are embedded and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Strategic Direction and Leadership":"Process and Sustainment","Planning and Measurement":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"People Experience and Culture"}},Gl=Ge(Fl,ds);function Ul(n){return Ue(n,ds,Gl)}function Ml(n){return Me(n,ds)}const Vl=`{
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
`,us={componentId:"resistance",actionPrefix:"resistance-action",outcomePrefix:"resistance:outcome",fallbackOutcomes:[{id:"resistance:outcome:o1",text:"Potential sources of resistance have been identified and understood"},{id:"resistance:outcome:o2",text:"Strategies and interventions are in place to prevent and address resistance"},{id:"resistance:outcome:o3",text:"Resistance is actively managed and reduced throughout the change lifecycle"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour",Design:"Skills and Behaviour",Communication:"People Experience and Culture",Engagement:"People Experience and Culture",Reinforcement:"Skills and Behaviour"}},Hl=Ge(Vl,us);function Wl(n){return Ue(n,us,Hl)}function ql(n){return Me(n,us)}const zl=`{
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
`,ms={componentId:"risk_management",actionPrefix:"risk-management-action",outcomePrefix:"risk-management:outcome",fallbackOutcomes:[{id:"risk-management:outcome:o1",text:"Change risks have been identified and assessed"},{id:"risk-management:outcome:o2",text:"Risk mitigation and management activities are in place"},{id:"risk-management:outcome:o3",text:"Risks are proactively managed throughout the change lifecycle"}],lensAliases:{"Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Strategic Direction and Leadership":"Planning and Risk","Skills and Behaviour":"Process and Sustainment",Governance:"Planning and Risk",Reinforcement:"Process and Sustainment"}},Kl=Ge(zl,ms);function Yl(n){return Ue(n,ms,Kl)}function Jl(n){return Me(n,ms)}const Xl=`{
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
`,gs={componentId:"skills_learning",actionPrefix:"skills-learning-action",outcomePrefix:"skills-learning:outcome",fallbackOutcomes:[{id:"skills-learning:outcome:o1",text:"Future learning and capability requirements have been identified"},{id:"skills-learning:outcome:o2",text:"Learning interventions have been designed and delivered"},{id:"skills-learning:outcome:o3",text:"Learning outcomes are achieved and sustained"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Process and Sustainment":"Skills and Behaviour",Governance:"Skills and Behaviour",Communication:"People Experience and Culture",Reinforcement:"Skills and Behaviour",Design:"Skills and Behaviour","Dependency Management":"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour","Testing and Validation":"Skills and Behaviour"}},Ql=Ge(Xl,gs);function Zl(n){return Ue(n,gs,Ql)}function ec(n){return Me(n,gs)}const nc=`{
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
`,ps={componentId:"sponsorship",actionPrefix:"sponsorship-action",outcomePrefix:"sponsorship:outcome",fallbackOutcomes:[{id:"sponsorship:outcome:o1",text:"Clear sponsorship and governance structures are established"},{id:"sponsorship:outcome:o2",text:"Sponsors actively lead and champion the change"},{id:"sponsorship:outcome:o3",text:"Governance and sponsorship drive successful delivery"}]},tc=Ge(nc,ps);function sc(n){return Ue(n,ps,tc)}function ac(n){return Me(n,ps)}const ic=`{
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
`,hs={componentId:"stakeholder",actionPrefix:"stakeholder-action",outcomePrefix:"stakeholder:outcome",fallbackOutcomes:[{id:"stakeholder:outcome:o1",text:"Stakeholders have been identified, analysed and prioritised"},{id:"stakeholder:outcome:o2",text:"Stakeholders are actively engaged and informed"},{id:"stakeholder:outcome:o3",text:"Engagement and communications support successful adoption"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Reinforcement:"People Experience and Culture"}},oc=Ge(ic,hs);function rc(n){return Ue(n,hs,oc)}function lc(n){return Me(n,hs)}const cc=`{
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
`,fs={componentId:"transfer_bau",actionPrefix:"transfer-bau-action",outcomePrefix:"transfer-bau:outcome",fallbackOutcomes:[{id:"transfer-bau:outcome:o1",text:"Operational ownership and accountability have been established"},{id:"transfer-bau:outcome:o2",text:"Business-as-usual capabilities and support arrangements are in place"},{id:"transfer-bau:outcome:o3",text:"The change is fully embedded within normal operational management"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Process and Sustainment":"Process and Sustainment","Planning and Risk":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Skills and Behaviour":"Process and Sustainment",Governance:"Strategic Direction and Leadership","Measurement and Evaluation":"Process and Sustainment",Implementation:"Process and Sustainment","Risk Management":"Process and Sustainment",Design:"Process and Sustainment","Dependency Management":"Process and Sustainment",Reinforcement:"Process and Sustainment"}},dc=Ge(cc,fs);function uc(n){return Ue(n,fs,dc)}function mc(n){return Me(n,fs)}const gc=`{
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
`,bs={componentId:"vision",actionPrefix:"vision-action",outcomePrefix:"vision:outcome",fallbackOutcomes:[{id:"vision:outcome:o1",text:"A compelling future state has been defined"},{id:"vision:outcome:o2",text:"The vision is shared and understood"},{id:"vision:outcome:o3",text:"The vision is visible and guides the change"}]},pc=Ge(gc,bs);function hc(n){return Ue(n,bs,pc)}function fc(n){return Me(n,bs)}function Sn(n){return Dl(uc(Il(Ul(Ll(al(ml(Zl(Wl(rc(Cl(Yl(yl(fl(el(sc(ll(hc(n))))))))))))))))))}function bc(n){return mc(Al(Ml(Bl(il(gl(ec(ql(lc(El(Jl(vl(bl(nl(ac(cl(fc(n)))))))))))))))))}function xc(n,t){return t==="pathway-1"?Sn(n):bc(n)}const Ot="nhs-digital-adoption-user-settings",Rt="nhs-digital-adoption-report-reminder-dismissed",Sc="nhs-digital-adoption-engagement",ot="nhs-digital-adoption-onboarding-seen",Pt="nhs-digital-adoption-current-user-id",ea="Default",yc=5*1024*1024,vc=new Set(["application/json","text/json"]),wc="Unknown user",Nc={red:"test-data/adoption-phase1-red.json",amber:"test-data/adoption-phase2-amber.json",green:"test-data/adoption-phase3-green.json"},Dt={name:"",preferences:"",themeColor:"#005eb8",profileImageDataUrl:"",darkMode:!1,colorAccessibilityMode:"standard",phaseFocusMode:"auto",manualPhaseFocus:1,hideGuidedWorkflow:!1,showAdditionalGuidanceLinks:!0,showExternalLinksSection:!1};function Cc(n){return{...n,linkedTargets:(n.linkedTargets||[]).map(t=>({componentId:t.componentId,lens:t.lens}))}}function Ec(n,t){return`${n}:${t}`}function kc(n){return n.orgProfile.trustName||n.orgProfile.projectName?!1:!Object.values(n.currentDraft).some(t=>Object.values(t).some(s=>s.score>0))}function na(n){return!n.trustName.trim()}function jc(n){return n.trim()||wc}function Ic(n,t){return!!t&&(n.teamMembers||[]).some(s=>s.id===t)}function Ac(n,t,s){const a=(n.teamMembers||[]).find(i=>i.id===t);return jc((a==null?void 0:a.name)||s)}function _c(n,t,s){var i;const a=vi[n];return((i=a==null?void 0:a[t])==null?void 0:i[s])||Lt[s]||Lt[0]}function Oc(n=new Date){const t=String(n.getMonth()+1).padStart(2,"0");return`${n.getFullYear()}-${t}`}function Rc(n=new Date){return new Date(n.getFullYear(),n.getMonth()-1,1).toLocaleString("en-GB",{month:"short",year:"numeric"})}function Pc(n,t,s){return["Monthly Adoption Reporting Reminder","","Organisation",`${t||"Unconfigured Trust"}${s?` / ${s}`:""}`,"","Action Required",`Please finalise the ${n} adoption month if it has not already been captured.`,"","Attached","Point-in-time JSON report export generated from the latest working draft.","","Next Step","Review, confirm finalisation status, and circulate to the team."].join(`
`)}function Dc(n){const t=new TextEncoder().encode(n);let s="";return t.forEach(a=>{s+=String.fromCharCode(a)}),window.btoa(s)}function $c(n,t=76){const s=[];for(let a=0;a<n.length;a+=t)s.push(n.slice(a,a+t));return s.join(`\r
`)}function Tc(n=new Date){const t=n.getDate(),s=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();return t>=s-6}function Lc(n=new Date){return n.toLocaleString("en-GB",{month:"short",year:"numeric"})}function Bc(n){const t=window.prompt(`Phase ${n} has changed. Enter delivery readiness grade (${rt.join("/")}).`,"C");if(!t)return null;const s=t.trim().toUpperCase();if(!rt.includes(s))return window.alert(`Invalid competence grade. Use one of ${rt.join(", ")}.`),null;const a=window.prompt(`Enter confidence score for Phase ${n} (${lt.join("-")}, where 1 is low and 5 is very high).`,"3");if(!a)return null;const i=Number(a.trim());return lt.includes(i)?{competence:s,confidence:i}:(window.alert(`Invalid confidence score. Use a number from ${lt.join(" to ")}.`),null)}function zc(){var Ze,on;const n=xt,t=m.useMemo(()=>[...Fi],[]),[s,a]=m.useState("dashboard"),[i,r]=m.useState(n[0].id),[o,u]=m.useState(()=>typeof window>"u"?!0:window.innerWidth>=1024),[c,h]=m.useState(()=>{let p={};try{const E=En(Ws);p=es(dt(E))}catch(E){console.warn("Ignoring invalid persisted adoption data.",E)}const w=mt({view:"dashboard",orgProfile:p==null?void 0:p.orgProfile,currentDraft:p==null?void 0:p.currentDraft,objectives:p==null?void 0:p.objectives,suppressedAutoActions:p==null?void 0:p.suppressedAutoActions,auditLog:p==null?void 0:p.auditLog,history:p==null?void 0:p.history,phaseOverrides:p==null?void 0:p.phaseOverrides,pathwayChecks:p==null?void 0:p.pathwayChecks});return w.orgProfile.cstId||(w.orgProfile={...w.orgProfile,cstId:ys()}),Sn(w)}),[l,x]=m.useState(""),[b,S]=m.useState(()=>En(Pt)||""),d=xn.useRef(b);m.useEffect(()=>{d.current=b},[b]);const[A,_]=m.useState(null),[f,V]=m.useState(()=>{const p=En(Ot);return{...Dt,...p}}),U=xn.useRef(f.name);m.useEffect(()=>{U.current=f.name},[f.name]);const ee=xn.useRef(null),I=xn.useRef(null),[D,K]=m.useState(""),Q=xn.useRef(null),k=m.useMemo(()=>Oc(),[]),[W,te]=m.useState(()=>En(Rt)||{}),[L,q]=m.useState(()=>!!En(ot)),[ce,pe]=m.useState(()=>!En(ot)),[Pe,R]=m.useState(!0),[Z,re]=m.useState([]),[Oe,Le]=m.useState(!1),[Ve,fe]=m.useState(!1),[tn,De]=m.useState(!1),Ke=xn.useRef(!1),[sn,Ne]=m.useState(!1),v=xn.useRef(!1),[T,N]=m.useState(!0),[P,M]=m.useState("medium"),ye=xn.useRef({}),Re=m.useCallback(()=>{pe(!1),L||(q(!0),en(ot,!0))},[L]),he=m.useMemo(()=>{const p=new Date,w=Rc(p),E=p.getDate()===1,F=c.history.some(B=>B.monthLabel===w);return{previousMonthLabel:w,isFirstDayOfMonth:E,hasFinalisedPreviousMonth:F,shouldNotify:E&&!F}},[c.history]),[$e,yn]=m.useState("test@test.com"),[Ye,j]=m.useState(""),[Y,ne]=m.useState(""),me=Lc(),Ee=Tc(),ge=m.useCallback((p,w)=>(c.currentDraft[p]||(c.currentDraft[p]={}),c.currentDraft[p][w]||(c.currentDraft[p][w]=Ct()),c.currentDraft[p][w]),[c]),we=f.showAdditionalGuidanceLinks!==!1,z=m.useMemo(()=>{const p=ws(c,n);return{...p,nextSteps:p.nextSteps.map(w=>({...w,toolkitLinks:ht(ea,w.componentId,"inputs",void 0,we).slice(0,3)}))}},[c,we]),He=f.phaseFocusMode==="manual"&&f.manualPhaseFocus?f.manualPhaseFocus:z.currentPhase,Qe=Ii(c,p=>$t(p)||n[0],ge).sort((p,w)=>{const E=p.action.owner.localeCompare(w.action.owner);return E!==0?E:p.component.localeCompare(w.component)});m.useEffect(()=>{en(Ws,c)},[c]),m.useEffect(()=>{en(Ot,f)},[f]),m.useEffect(()=>{en(Pt,b)},[b]),m.useEffect(()=>{en(Rt,W)},[W]),m.useEffect(()=>{j(`Action required: finalise ${he.previousMonthLabel} adoption report`),ne(Pc(he.previousMonthLabel,c.orgProfile.trustName,c.orgProfile.projectName||""))},[he.previousMonthLabel,c.orgProfile.projectName,c.orgProfile.trustName]),m.useEffect(()=>{!Ke.current&&!ce&&na(c.orgProfile)&&(Ke.current=!0,fe(!0))},[ce,c.orgProfile]),m.useEffect(()=>{v.current||Ve||na(c.orgProfile)||Ic(c.orgProfile,b)||(v.current=!0,Ne(!0))},[c.orgProfile,b,Ve]),m.useEffect(()=>{s==="dashboard"&&ee.current&&setTimeout(()=>{var E,F,B;const p=(E=ee.current)==null?void 0:E.querySelector("#adoption-radar-chart");if(p){const X=ki(c,t,n,ge);Vt(p,X)}const w=(F=ee.current)==null?void 0:F.querySelector("#adoption-component-radar-chart");if(w){const X=ji(n,ge,He);Vt(w,X,{maintainAspectRatio:!1,scales:{r:{min:0,max:5,ticks:{display:!0,stepSize:1,backdropColor:"transparent"}}}})}if(c.history.length>0){const X=(B=ee.current)==null?void 0:B.querySelector("#adoption-line-chart");if(X){const ae={labels:c.history.map(de=>de.monthLabel),datasets:[{label:"Adoption Score",data:c.history.map(de=>de.overallPercentage||0),borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",fill:!0,tension:.4}]};Ua(X,ae)}}},100)},[s,c,ge,t,n,He,T,P]),m.useEffect(()=>{const p=()=>{u(window.innerWidth>=1024)};return p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}},[]),m.useEffect(()=>{typeof document<"u"&&(document.documentElement.dataset.nhsThemeMode=f.darkMode?"dark":"light")},[f.darkMode]),m.useEffect(()=>{var w;const p=s==="assessment"?`component:${i}`:`view:${s}`;(w=ye.current[p])==null||w.scrollIntoView({block:"nearest",behavior:"smooth"})},[i,s]);const Je=()=>typeof window>"u"?!1:window.innerWidth<1024,We=m.useCallback(()=>{var p;(p=I.current)==null||p.scrollTo({top:0,behavior:"auto"})},[]),qe=m.useCallback(p=>{a(w=>w===p?w:(re(E=>[w,...E].slice(0,20)),p)),Je()&&u(!1)},[]),y=p=>{qe(p)},O=m.useCallback(()=>{re(p=>{const[w,...E]=p;return w?(a(w),window.innerWidth<1024&&u(!1),E):(window.location.hash="#/",p)})},[]),H=m.useCallback(p=>{$t(p)&&(r(p),qe("assessment"),We())},[qe,We]),[oe,Se]=m.useState(null),Be=m.useCallback((p,w,E)=>{Se({lens:w,actionId:E}),H(p)},[H]);m.useEffect(()=>{We()},[We,s]);function le(p,w){if(!w.length)return p.auditLog;const E=Ac(p.orgProfile,d.current,U.current||""),F=w.map(B=>xr({actor:E,eventType:B.eventType,entityType:B.entityType,entityId:B.entityId,summary:B.summary,trustName:B.trustName??p.orgProfile.trustName,projectName:B.projectName??p.orgProfile.projectName,componentId:B.componentId,lens:B.lens,reason:B.reason,before:B.before,after:B.after,source:B.source,importedAt:B.importedAt}));return St([...p.auditLog||[],...F])}const Xe=m.useCallback((p,w,E)=>{h(F=>{var je;const B=((je=F.currentDraft[p])==null?void 0:je[w])||Ct(),X={...F,currentDraft:{...F.currentDraft,[p]:{...F.currentDraft[p],[w]:ia(E)}}},ae=[];B.score!==E.score&&ae.push({eventType:"entry-score-updated",entityType:"entry",entityId:`${p}:${w}`,summary:`Updated readiness score for ${p} / ${w}: ${B.score} -> ${E.score}`,componentId:p,lens:w,before:{score:B.score},after:{score:E.score},source:"local"}),(B.justification||"")!==(E.justification||"")&&ae.push({eventType:"entry-justification-updated",entityType:"entry",entityId:`${p}:${w}`,summary:`Updated justification for ${p} / ${w}`,componentId:p,lens:w,before:{justification:B.justification||""},after:{justification:E.justification||""},source:"local"}),(B.evidence||"")!==(E.evidence||"")&&ae.push({eventType:"entry-evidence-updated",entityType:"entry",entityId:`${p}:${w}`,summary:`Updated evidence for ${p} / ${w}`,componentId:p,lens:w,before:{evidence:B.evidence||""},after:{evidence:E.evidence||""},source:"local"});const de=new Map(B.actions.map(ue=>[ue.id,ue]));return E.actions.forEach(ue=>{const Ae=de.get(ue.id);if(!Ae){ae.push({eventType:"action-created",entityType:"action",entityId:ue.id,summary:`Created action in ${p} / ${w}`,componentId:p,lens:w,after:{text:ue.text,status:ue.status,owner:ue.owner,actionType:ue.actionType},source:"local"});return}const $n=JSON.stringify({text:Ae.text,status:Ae.status,owner:Ae.owner,actionType:Ae.actionType,notes:Ae.notes,dueDate:Ae.dueDate,startDate:Ae.startDate,evidence:Ae.evidence}),bn=JSON.stringify({text:ue.text,status:ue.status,owner:ue.owner,actionType:ue.actionType,notes:ue.notes,dueDate:ue.dueDate,startDate:ue.startDate,evidence:ue.evidence});$n!==bn&&ae.push({eventType:"action-updated",entityType:"action",entityId:ue.id,summary:`Updated action in ${p} / ${w}`,componentId:p,lens:w,before:{text:Ae.text,status:Ae.status,owner:Ae.owner,actionType:Ae.actionType},after:{text:ue.text,status:ue.status,owner:ue.owner,actionType:ue.actionType},source:"local"})}),{...Sn(X),auditLog:le(F,ae)}})},[le]),xe=m.useCallback((p,w)=>{h(E=>{const F=E.objectives[p]||[],B={...E,objectives:{...E.objectives,[p]:w}};return JSON.stringify(F)!==JSON.stringify(w)?{...B,auditLog:le(E,[{eventType:"objectives-updated",entityType:"objective",entityId:p,summary:`Updated component outcomes for ${p}`,componentId:p,before:{objectiveCount:F.length},after:{objectiveCount:w.length},source:"local"}])}:B})},[le]),Te=m.useCallback(p=>{const w=oa(c.orgProfile);if(w.isValid)return!0;const E=w.errors.map(F=>`- ${F.message}`).join(`
`);return window.confirm(`${p} has CST warnings:

${E}

Continue anyway?`)},[c.orgProfile]),be=m.useCallback(p=>{K(p)},[]),vn=m.useCallback(()=>{if(!Te("Export JSON"))return;const w=qs(c);qn(`adoption-assessment-${(c.orgProfile.trustName||"export").replace(/\s+/g,"_")}.json`,JSON.stringify(w,null,2),"application/json"),be("Assessment export downloaded.")},[be,Te,c]),gn=m.useCallback(()=>{var p;(p=Q.current)==null||p.click()},[]),pn=m.useCallback(async p=>{var B,X,ae,de;const w=(B=p.target.files)==null?void 0:B[0];if(!w)return;const E=w.name.toLowerCase().endsWith(".json"),F=!w.type||vc.has(w.type);if(!E||!F){be("Import failed. Please choose a valid JSON file."),window.alert("Import failed. Please choose a valid JSON file."),p.target.value="";return}if(w.size>yc){be("Import failed. The selected file is larger than 5 MB."),window.alert("Import failed. The selected file is larger than 5 MB."),p.target.value="";return}try{const ke=await w.text(),je=dt(JSON.parse(ke)),ue=()=>{h(Hn=>{const wn=Sn(zs(je,Hn));return wn.orgProfile.cstId||(wn.orgProfile={...wn.orgProfile,cstId:ys()}),{...wn,auditLog:le(wn,[{eventType:"data-imported",entityType:"system",summary:`Imported assessment data from ${w.name}`,after:{fileName:w.name},source:"local"}])}}),a("dashboard"),be("Assessment import complete. Dashboard updated.")};if(kc(c)){ue();return}const Ae=(X=je.orgProfile)==null?void 0:X.cstId,$n=c.orgProfile.cstId,bn=c.orgProfile.projectName||c.orgProfile.trustName||"your currently loaded programme",Vn=((ae=je.orgProfile)==null?void 0:ae.projectName)||((de=je.orgProfile)==null?void 0:de.trustName)||w.name;if(Ae&&Ae!==$n){if(!window.confirm(`"${Vn}" looks like a different programme than "${bn}".

Importing will replace everything currently loaded. Continue?`)){be("Import cancelled.");return}ue();return}if(!Ae&&!window.confirm(`"${Vn}" doesn't carry a programme ID (it may predate this feature).

Click OK to compare it against "${bn}" and merge item by item, or Cancel to load it as a different programme (replace everything).`)){ue();return}const Tn=Xr(c,je);if(!Tn.hasConflicts){h(Hn=>{const wn=Sn(Zs(Hn,je,{}));return{...wn,auditLog:le(wn,[{eventType:"data-imported",entityType:"system",summary:Tn.autoMergeSummary.length?`Merged import from ${w.name} (${Tn.autoMergeSummary.join(", ")})`:`Imported ${w.name} - no changes (already up to date)`,after:{fileName:w.name},source:"local"}])}}),a("dashboard"),be(Tn.autoMergeSummary.length?`Merged automatically: ${Tn.autoMergeSummary.join(", ")}.`:"Already up to date - nothing to import.");return}_({file:w,parsed:je,report:Tn})}catch{be("Import failed. Please verify the file contents."),window.alert("Unable to import adoption assessment. Please verify the file contents.")}finally{p.target.value=""}},[be,le,c]),Un=m.useCallback(p=>{if(!A)return;const{file:w,parsed:E}=A,F=Object.keys(p).length;h(B=>{const X=Sn(Zs(B,E,p));return{...X,auditLog:le(X,[{eventType:"data-imported",entityType:"system",summary:`Merged import from ${w.name} (${F} item(s) resolved)`,after:{fileName:w.name},source:"local"}])}}),_(null),a("dashboard"),be("Import merged into current programme.")},[be,le,A]),Pn=m.useCallback(()=>{_(null),be("Import cancelled.")},[be]),kn=m.useCallback(p=>{const w=!!(p!=null&&p.replaceExisting);if(!Ee){window.alert("Finalise Month is available during the final week of each month.");return}if(!Te("Finalise Month"))return;const F=c.history.length>0?ws({...c,currentDraft:c.history[c.history.length-1].data},n).currentPhase:1;if(z.currentPhase>F){const X=Bc(z.currentPhase);if(!X){window.alert("Phase progression cancelled. Confidence and competence self-assessment is required when readiness phase changes.");return}const ae=[];if(n.filter(de=>de.phase<z.currentPhase).forEach(de=>{de.lenses.forEach(ke=>{var ue,Ae;const je=(ue=c.currentDraft[de.id])==null?void 0:ue[ke];(!je||je.score<=0||!((Ae=je.justification)!=null&&Ae.trim()))&&ae.push(`${de.label} / ${ke}`)})}),ae.length>0){const de=window.prompt(`You're progressing from Phase ${F} to Phase ${z.currentPhase}, but ${ae.length} item(s) are incomplete. Please provide a justification.`);if(!de||!de.trim()){window.alert("Phase progression cancelled. A justification is required when prior phase items are missing.");return}h(ke=>({...{...ke,phaseOverrides:{...ke.phaseOverrides,[`phase-progression-${Date.now()}`]:de.trim()},orgProfile:{...ke.orgProfile,cst:{...ke.orgProfile.cst,phaseCapability:{...ke.orgProfile.cst.phaseCapability,[z.currentPhase]:{...X,assessedAt:new Date().toISOString(),reason:"phase-change"}}}}},auditLog:le(ke,[{eventType:"profile-updated",entityType:"profile",summary:`Updated phase capability for phase ${z.currentPhase}`,after:{phase:z.currentPhase,competence:X.competence,confidence:X.confidence,rationale:de.trim()},source:"local"}])}))}else h(de=>({...{...de,orgProfile:{...de.orgProfile,cst:{...de.orgProfile.cst,phaseCapability:{...de.orgProfile.cst.phaseCapability,[z.currentPhase]:{...X,assessedAt:new Date().toISOString(),reason:"phase-change"}}}}},auditLog:le(de,[{eventType:"profile-updated",entityType:"profile",summary:`Updated phase capability for phase ${z.currentPhase}`,after:{phase:z.currentPhase,competence:X.competence,confidence:X.confidence},source:"local"}])}))}const B=Ks(c.currentDraft,z.overallPct);h(X=>{const ae=w?X.history.map(ke=>ke.monthLabel===B.monthLabel?B:ke):[...X.history,B];return{...{...X,history:ae},auditLog:le(X,[{eventType:"month-finalized",entityType:"history",entityId:B.monthLabel,summary:`${w?"Re-finalized":"Finalized"} monthly snapshot for ${B.monthLabel}`,after:{monthLabel:B.monthLabel,overallPercentage:B.overallPercentage},source:"local"}])}}),a("dashboard")},[le,n,Te,Ee,z.currentPhase,z.overallPct,c,c.currentDraft,c.history]),Dn=m.useCallback(()=>{if(!Te("Finalise Prior Month"))return;const w=he.previousMonthLabel;if(c.history.some(X=>X.monthLabel===w)){window.alert(`${w} has already been finalised.`);return}const F=new Date;F.setMonth(F.getMonth()-1);const B=Ks(c.currentDraft,z.overallPct,F);h(X=>({...{...X,history:[...X.history,B]},auditLog:le(X,[{eventType:"prior-month-finalized",entityType:"history",entityId:B.monthLabel,summary:`Finalized prior month snapshot for ${B.monthLabel}`,after:{monthLabel:B.monthLabel,overallPercentage:B.overallPercentage},source:"local"}])}))},[le,Te,z.overallPct,he.previousMonthLabel,c.currentDraft,c.history]),wt=m.useCallback(async p=>{try{const w=await fetch(Nc[p]);if(!w.ok)throw new Error(`Failed to load sample data: ${w.status}`);const E=dt(await w.json());h(F=>{const B=Sn(zs(E,F));return{...B,auditLog:le(B,[{eventType:"example-data-loaded",entityType:"system",summary:"Loaded example assessment data",source:"local"}])}}),a("dashboard"),be("Example assessment data loaded."),Je()&&u(!1)}catch(w){console.error(w),be("Unable to load example data right now."),window.alert("Unable to load example data right now. Please try again.")}},[be,le]),Mn=m.useCallback(()=>{if(!window.confirm("Warning: this will reset all assessment data (organisation profile, scores, actions, and history) and sign you out. If you are worried, please export your data first. Continue?"))return;const w=Sn(mt());h(w),a("dashboard"),V(Dt),en(Ot,Dt),localStorage.removeItem(Sc),te({}),en(Rt,{}),q(!1),pe(!0),en(ot,!1),S(""),en(Pt,""),Ke.current=!1,fe(!1),v.current=!1,Ne(!1),Object.keys(localStorage).filter(E=>E.startsWith("nhs-digital-adoption-page-intro-seen:")).forEach(E=>localStorage.removeItem(E)),be("Assessment data has been reset and you have been signed out."),Je()&&u(!1)},[be]),jn=m.useCallback(()=>({generatedAt:new Date().toISOString(),targetMonth:he.previousMonthLabel,finalisedPriorMonth:he.hasFinalisedPreviousMonth,report:qs(c)}),[he.hasFinalisedPreviousMonth,he.previousMonthLabel,c]),hn=m.useCallback(()=>`adoption-point-in-time-${he.previousMonthLabel.toLowerCase().replace(/\s+/g,"-")}.json`,[he.previousMonthLabel]),Jn=m.useCallback(()=>{const p=hn();qn(p,JSON.stringify(jn(),null,2),"application/json")},[hn,jn]),Xn=m.useCallback(()=>{const p=$e.trim()||"test@test.com",w=hn(),E=`${Y}

Attachment: ${w}`,F=`mailto:${p}?subject=${encodeURIComponent(Ye)}&body=${encodeURIComponent(E)}`;window.location.href=F},[hn,Y,Ye,$e]),Qn=m.useCallback(()=>{const p=$e.trim()||"test@test.com",w=hn(),E=JSON.stringify(jn(),null,2),F=$c(Dc(E)),B=`----nhs-adoption-reminder-${Date.now()}`,X=[`To: ${p}`,`Subject: ${Ye}`,"MIME-Version: 1.0",`Content-Type: multipart/mixed; boundary="${B}"`,"",`--${B}`,'Content-Type: text/plain; charset="UTF-8"',"Content-Transfer-Encoding: 8bit","",Y,"",`--${B}`,`Content-Type: application/json; name="${w}"`,"Content-Transfer-Encoding: base64",`Content-Disposition: attachment; filename="${w}"`,"",F,`--${B}--`,""].join(`\r
`),ae=he.previousMonthLabel.toLowerCase().replace(/\s+/g,"-");qn(`adoption-reminder-${ae}.eml`,X,"message/rfc822")},[hn,jn,Y,Ye,$e,he.previousMonthLabel]),Zn=m.useCallback(()=>{te(p=>({...p,[k]:!0}))},[k]),et=he.shouldNotify&&!W[k],In=m.useMemo(()=>c.history.find(p=>p.monthLabel===me)||null,[me,c.history]),An=Ee,nt=An?"Review and finalise monthly snapshot":"Finalise Month unlocks from the final week of each month.",tt=An?`${Rn} h-9 px-3 py-0 shadow-[0_3px_0_rgba(0,0,0,0.2)]`:"h-9 px-3 py-0 rounded-md border border-slate-300 bg-slate-200 text-slate-500 cursor-not-allowed",st=An?{backgroundColor:f.themeColor}:void 0,an=m.useMemo(()=>{const p=In||(c.history.length>0?c.history[c.history.length-1]:null),w=(p==null?void 0:p.overallPercentage)||0,E=z.overallPct-w;return{currentMonthLabel:me,baselineLabel:(p==null?void 0:p.monthLabel)||"No previous snapshot",baselineOverall:w,deltaOverall:E,assessedCount:z.assessedCount,totalActions:z.totalActions,completedActions:z.completedActions}},[me,In,z.assessedCount,z.completedActions,z.overallPct,z.totalActions,c.history]),fn=m.useMemo(()=>Oi(c,z,me),[c,z,me]),g=m.useMemo(()=>fn.filter(p=>p.completed).length,[fn]),C=m.useCallback(p=>{V(p)},[]),$=m.useCallback(p=>{h(w=>{const E=w.orgProfile.cst.pathway!==p.cst.pathway,F={...w,orgProfile:p},B=E?xc(F,p.cst.pathway):F;return JSON.stringify(w.orgProfile)!==JSON.stringify(p)?{...B,auditLog:le(w,[{eventType:"profile-updated",entityType:"profile",summary:"Updated CST profile details",before:{trustName:w.orgProfile.trustName,projectName:w.orgProfile.projectName,cst:w.orgProfile.cst},after:{trustName:p.trustName,projectName:p.projectName,cst:p.cst},source:"local"},...E?[{eventType:"pathway-changed",entityType:"profile",summary:`Changed pathway from ${w.orgProfile.cst.pathway} to ${p.cst.pathway}`,before:{pathway:w.orgProfile.cst.pathway},after:{pathway:p.cst.pathway},source:"local"}]:[]])}:B})},[]),se=p=>{let w=0,E=0,F=0,B=0;return p.lenses.forEach(X=>{var ke,je;const ae=(ke=c.currentDraft[p.id])==null?void 0:ke[X];ae&&ae.score>0&&(w++,(je=ae.justification)!=null&&je.trim()&&E++);const de=(ae==null?void 0:ae.actions)||[];F+=de.length,B+=de.filter(ue=>Wt(ue.status)).length}),w===0?{icon:"◯",color:"text-blue-100",label:"Not Started"}:w>E?{icon:"⚠",color:"text-red-300",label:"Missing Justification"}:w<p.lenses.length?{icon:"◐",color:"text-amber-300",label:"In Progress"}:F<=0||B<F?{icon:"◐",color:"text-amber-300",label:"In Progress"}:{icon:"✓",color:"text-green-300",label:"Completed"}},ie=c.orgProfile.trustName||"Unconfigured Trust",Ce=c.orgProfile.projectName||"Unnamed Project",ve=bt[c.orgProfile.cst.pathway],Ie=ve.split(" - ")[0]||ve;return e.jsxs("div",{className:`flex h-screen overflow-hidden ${f.darkMode?"bg-slate-900 text-slate-100":"bg-slate-50 text-slate-800"}`,children:[e.jsx("div",{role:"status","aria-live":"polite",className:"sr-only",children:D}),e.jsx("input",{ref:Q,type:"file",accept:"application/json",className:"hidden",onChange:pn}),o&&e.jsx("div",{className:"fixed inset-0 z-10 bg-slate-900/35 backdrop-blur-[1px] lg:hidden",onClick:()=>u(!1)}),e.jsxs("div",{className:`fixed inset-y-0 left-0 z-20 bg-[#005eb8] text-white flex flex-col shadow-xl overflow-hidden transition-all duration-300 ease-out lg:static lg:translate-x-0 ${o?"w-72 translate-x-0":"w-0 -translate-x-full lg:w-0"}`,style:{backgroundColor:f.themeColor},children:[e.jsxs("div",{className:"p-6 border-b border-blue-700",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold tracking-tight",children:"NHS Digital Adoption"}),e.jsxs("p",{className:"text-blue-200 text-xs mt-1 flex justify-between items-center",children:[e.jsx("span",{children:"Readiness Tracking Tool"}),e.jsx("span",{className:"opacity-80 font-medium",children:"V6.6"})]})]}),f.profileImageDataUrl?e.jsx("img",{src:f.profileImageDataUrl,alt:"Profile",className:"h-10 w-10 rounded-full border-2 border-blue-200 object-cover"}):null]}),e.jsx("div",{className:"mt-3 rounded-md bg-blue-700 p-2 text-xs",children:e.jsxs("div",{className:"font-semibold text-blue-100",children:["Objectives: ",g,"/",fn.length]})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto py-4",children:[e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Intro"}),e.jsx("nav",{className:"space-y-1 mb-4",children:["introduction","cm-guide","project-details"].map(p=>e.jsx("button",{ref:w=>{ye.current[`view:${p}`]=w},onClick:()=>y(p),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${s===p?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:p==="introduction"?"Introduction":p==="project-details"?"Project Set-up":"Adoption Engine Onboarding"},p))}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Overview"}),e.jsx("nav",{className:"space-y-1 mb-4",children:["dashboard","daily-checkin","action-plan","roadmap-view"].map(p=>e.jsx("button",{ref:w=>{ye.current[`view:${p}`]=w},onClick:()=>y(p),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${s===p?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:p==="dashboard"?"Metrics Dashboard":p==="daily-checkin"?"Daily Check-in":p==="action-plan"?"Action Tracker":"Component Delivery Timeline"},p))}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Change Components"}),e.jsx("nav",{className:"space-y-1 mb-8",children:n.map((p,w)=>{const E=s==="assessment"&&i===p.id,F=se(p),B=w>0?n[w-1].phase:null,X=p.phase!==B;return e.jsxs(xn.Fragment,{children:[X&&e.jsx("div",{className:`px-4 text-[10px] font-semibold uppercase tracking-wider text-blue-300 ${w===0?"pb-1":"pt-3 pb-1"}`,children:ln[p.phase]||`Phase ${p.phase}`}),e.jsxs("button",{ref:ae=>{ye.current[`component:${p.id}`]=ae},onClick:()=>{H(p.id)},className:`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${E?"bg-white font-medium text-[#005eb8]":`hover:bg-blue-800 ${F.color}`}`,children:[e.jsx("span",{className:"truncate pr-2",children:ai(p.label)}),e.jsx("span",{className:"text-xs flex-shrink-0",title:F.label,"aria-label":F.label,children:F.icon})]})]},p.id)})}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Tools"}),e.jsx("nav",{className:"space-y-1 mb-8",children:["highlight-builder","force-field-analysis","compare","audit-log"].map(p=>e.jsx("button",{ref:w=>{ye.current[`view:${p}`]=w},onClick:()=>y(p),className:`w-full flex items-center px-4 py-1 text-sm transition-colors ${s===p?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:p==="highlight-builder"?"Highlight Builder":p==="force-field-analysis"?"Force Field Analysis":p==="compare"?"Assess & Compare":"Audit Log"},p))}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider border-t border-blue-800 pt-6",children:"Account"}),e.jsx("nav",{className:"space-y-1 mb-8",children:["settings","profile"].map(p=>e.jsx("button",{ref:w=>{ye.current[`view:${p}`]=w},onClick:()=>y(p),className:`w-full flex items-center px-4 py-1 text-sm transition-colors ${s===p?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:p==="settings"?"Settings":"Profile"},p))}),e.jsxs("div",{className:"mt-8 px-4 pb-4 border-t border-blue-800 pt-6",children:[e.jsx("div",{className:"text-[10px] font-semibold text-blue-300 uppercase tracking-wider mb-3",children:"Status Legend"}),e.jsxs("div",{className:"space-y-2 text-xs text-blue-200",children:[e.jsx("div",{children:"◯ Not Started"}),e.jsx("div",{children:"◐ In Progress"}),e.jsx("div",{children:"⚠ Missing Justification"}),e.jsx("div",{children:"✓ Completed"})]})]})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col h-screen overflow-hidden",children:[e.jsx("header",{className:`${f.darkMode?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} border-b px-3 py-2 sm:px-6 shrink-0 z-10 ${s==="introduction"?"":"shadow-sm"}`,style:{borderTop:`3px solid ${f.themeColor}`},children:e.jsxs("div",{className:"flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{className:"min-w-0 flex items-start gap-2 sm:gap-3",children:[e.jsxs("button",{onClick:()=>u(p=>!p),className:"inline-flex h-9 items-center justify-center px-3 text-white rounded-md font-semibold transition-colors shadow-sm","aria-label":o?"Collapse side navigation":"Expand side navigation",title:o?"Collapse side navigation":"Expand side navigation",style:{backgroundColor:f.themeColor},children:[e.jsx("span",{"aria-hidden":"true",className:"text-lg leading-none",children:o?"«":"»"}),e.jsx("span",{className:"sr-only",children:o?"Collapse side navigation":"Expand side navigation"})]}),e.jsx("button",{onClick:O,disabled:Z.length===0,title:Z.length===0?"No previous in-app page":"Back to previous page",className:`h-9 text-sm px-3 rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${f.darkMode?"text-slate-100 hover:bg-slate-700":"text-slate-600 hover:bg-slate-100"}`,children:"← Back"}),e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-1 text-sm",children:[e.jsx("span",{className:`truncate font-semibold ${f.darkMode?"text-slate-100":"text-slate-700"}`,title:ie,children:ie}),e.jsx("span",{className:`${f.darkMode?"text-slate-300":"text-slate-400"}`,children:"/"}),e.jsx("span",{className:`truncate ${f.darkMode?"text-slate-100":"text-slate-600"}`,title:Ce,children:Ce})]}),e.jsxs("div",{className:"mt-1 flex min-w-0 items-center gap-1.5",children:[e.jsxs("span",{className:`truncate rounded-full px-2 py-1 text-[11px] font-semibold ${f.darkMode?"bg-slate-700 text-slate-100":"bg-slate-100 text-slate-600"}`,title:ve,children:[e.jsx("span",{className:"sm:hidden",children:Ie}),e.jsx("span",{className:"hidden sm:inline",children:ve})]}),e.jsxs("span",{className:"inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-800",title:"Auto-save on",children:[e.jsx("span",{className:"inline-flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white","aria-hidden":"true",children:"✓"}),e.jsx("span",{className:"sr-only sm:not-sr-only sm:ml-1",children:"Auto-save on"})]})]})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 lg:justify-end",children:[e.jsx("button",{onClick:()=>pe(!0),"aria-label":"Show introduction",title:"Show introduction",className:`text-sm w-9 h-9 flex items-center justify-center bg-white text-[#425563] border border-[#768692] hover:bg-[#f0f4f5] rounded-full font-semibold transition-colors ${Ht}`,children:"?"}),e.jsx("button",{type:"button",onClick:()=>{window.location.hash="#/"},"aria-label":"Go to home page",title:"Go to home page",className:`${_e} h-9 w-16 px-6 py-0 inline-flex items-center justify-center`,children:"Home"}),e.jsx("button",{onClick:gn,className:`${_e} h-9 px-3 py-0`,children:"Import"}),e.jsxs("button",{onClick:vn,className:`${_e} h-9 px-3 py-0`,children:[e.jsx("span",{className:"sm:hidden",children:"Export"}),e.jsx("span",{className:"hidden sm:inline",children:"Export JSON"})]}),e.jsx("span",{className:"inline-flex",title:nt,children:e.jsxs("button",{onClick:()=>Le(!0),disabled:!An,"aria-label":"Finalise Month",className:tt,style:st,children:[e.jsx("span",{className:"sm:hidden",children:"Finalise"}),e.jsx("span",{className:"hidden sm:inline",children:"Finalise Month"})]})})]})]})}),e.jsxs("main",{ref:I,className:"flex-1 overflow-y-auto p-8",children:[s==="daily-checkin"&&Pe?e.jsxs("section",{className:`${f.darkMode?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-6 rounded-xl border p-4 shadow-sm`,children:[e.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${f.darkMode?"text-slate-300":"text-slate-500"}`,children:"Objectives"}),e.jsxs("p",{className:`text-sm mt-1 ${f.darkMode?"text-slate-100":"text-slate-700"}`,children:[g,"/",fn.length," complete - based on phase readiness, ownership, cadence and team participation."]})]}),e.jsx("button",{type:"button",onClick:()=>R(!1),className:`${f.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-2 text-sm font-medium`,"aria-label":"Dismiss objectives card",children:"Dismiss"})]}),e.jsx("div",{className:"mt-4 grid gap-3 md:grid-cols-3",children:fn.map(p=>e.jsxs("div",{className:`rounded-lg border p-3 ${p.completed?"border-green-200 bg-green-50":f.darkMode?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${f.darkMode?"text-slate-100":"text-slate-800"}`,children:p.label}),e.jsx("span",{className:"text-xs font-bold",children:p.completed?"Done":"Not yet"})]}),e.jsx("p",{className:`mt-1 text-xs ${f.darkMode?"text-slate-300":"text-slate-600"}`,children:p.description})]},p.id))})]}):null,et&&e.jsxs("section",{className:`${f.darkMode?"border-amber-700 bg-slate-800":"border-amber-300 bg-amber-50"} mb-8 rounded-xl border p-5 shadow-sm`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider text-amber-700",children:"First Day Reminder"}),e.jsxs("h3",{className:"text-lg font-bold text-amber-900 mt-1",children:["Submit prior month report for ",he.previousMonthLabel]}),e.jsxs("p",{className:"text-sm text-amber-800 mt-2",children:["Please prompt the team to finalise ",he.previousMonthLabel," if it has not already been recorded."]})]}),e.jsx("button",{type:"button",onClick:Zn,className:"text-sm px-3 py-1.5 rounded-md border border-amber-300 text-amber-700 hover:bg-amber-100",children:"Dismiss"})]}),e.jsxs("div",{className:"mt-4 grid gap-3 md:grid-cols-2",children:[e.jsxs("label",{className:"text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"To"}),e.jsx("input",{type:"email",value:$e,onChange:p=>yn(p.target.value),className:`${f.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2`})]}),e.jsxs("label",{className:"text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"Subject"}),e.jsx("input",{type:"text",value:Ye,onChange:p=>j(p.target.value),className:`${f.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2`})]})]}),e.jsxs("label",{className:"mt-3 block text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"Body"}),e.jsx("textarea",{value:Y,onChange:p=>ne(p.target.value),rows:9,className:`${f.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2 font-mono text-xs`})]}),e.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:Jn,className:"rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-50",children:"Download Point-in-Time JSON"}),e.jsx("button",{type:"button",onClick:Qn,className:"rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-50",children:"Download Email Draft with Attachment (.eml)"}),e.jsx("button",{type:"button",onClick:Xn,className:"rounded-md px-3 py-2 text-sm font-semibold text-white",style:{backgroundColor:f.themeColor},children:"Open Mail Draft"}),e.jsx("button",{type:"button",onClick:Dn,className:"rounded-md border border-amber-300 bg-white px-3 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100",children:"Finalise Prior Month Now"})]})]}),s==="dashboard"&&e.jsx("div",{ref:ee,children:e.jsx(qi,{store:c,components:n,lenses:t,metrics:z,phaseFocusMode:f.phaseFocusMode||"auto",manualPhaseFocus:f.manualPhaseFocus,onPhaseFocusModeChange:p=>V(w=>({...w,phaseFocusMode:p,manualPhaseFocus:p==="manual"?w.manualPhaseFocus||z.currentPhase:w.manualPhaseFocus})),onManualPhaseFocusChange:p=>V(w=>({...w,phaseFocusMode:"manual",manualPhaseFocus:p})),onResetPhaseFocus:()=>V(p=>({...p,phaseFocusMode:"auto",manualPhaseFocus:z.currentPhase})),getEntry:ge,onComponentClick:H,pathway:c.orgProfile.cst.pathway,pathwayChecks:c.pathwayChecks,onNavigate:y,onOpenLensInfo:x,onOpenOnboarding:()=>pe(!0),colorAccessibilityMode:f.colorAccessibilityMode||"standard",darkMode:!!f.darkMode,componentRadarVisible:T,onComponentRadarVisibleChange:N,componentRadarSize:P,onComponentRadarSizeChange:M})}),s==="daily-checkin"&&e.jsx(zo,{store:c,components:n,metrics:z,getEntry:ge,onComponentClick:H,onActionView:Be,phaseFocusMode:f.phaseFocusMode||"auto",manualPhaseFocus:f.manualPhaseFocus,colorAccessibilityMode:f.colorAccessibilityMode||"standard",darkMode:!!f.darkMode}),s==="project-details"&&e.jsx(Ho,{orgProfile:c.orgProfile,onProfileUpdate:$,components:n,lenses:t,onComponentClick:H,onOpenOnboarding:()=>pe(!0),onOpenGuidedSetup:()=>fe(!0),currentUserId:b,onCurrentUserChange:S,showExternalLinksSection:!!f.showExternalLinksSection,darkMode:!!f.darkMode}),s==="assessment"&&e.jsx(Do,{store:c,components:n,activeComponentId:i,getRubricText:_c,getEntry:ge,onComponentChange:H,onEntryUpdate:Xe,onOpenLensInfo:x,onActionRemove:(p,w,E)=>{const B=ge(p,w).actions.find(ae=>ae.id===E);if(!B)return;const X=window.prompt("Please provide a reason for removing this action. This will be included in the JSON export audit log.");if(!X||!X.trim()){window.alert("Removal cancelled. A reason is required to remove an action.");return}h(ae=>{var $n;const de=(($n=ae.currentDraft[p])==null?void 0:$n[w])||Ct(),ke={...de,actions:de.actions.filter(bn=>bn.id!==E).map(Cc)},je={...ae.suppressedAutoActions};if(E.startsWith("vision-action:")||E.startsWith("case-for-change-action:")||E.startsWith("benefits-action:")||E.startsWith("sponsorship-action:")||E.startsWith("change-impact-action:")){const bn=Ec(p,w),Vn=je[bn]||[];Vn.includes(E)||(je[bn]=[...Vn,E])}const ue={...ae,currentDraft:{...ae.currentDraft,[p]:{...ae.currentDraft[p],[w]:ke}},suppressedAutoActions:je};return{...Sn(ue),auditLog:le(ae,[{eventType:"action-removed",entityType:"action",entityId:E,summary:`Removed action from ${p} / ${w}`,componentId:p,lens:w,reason:X.trim(),before:{text:B.text,status:B.status,owner:B.owner,actionType:B.actionType},source:"local"}])}})},onObjectivesUpdate:xe,onNavigateToTool:p=>y(p),hideGuidedWorkflow:!!f.hideGuidedWorkflow,onHideGuidedWorkflow:()=>V(p=>({...p,hideGuidedWorkflow:!0})),showAdditionalGuidanceLinks:we,darkMode:!!f.darkMode,focusAction:oe,onFocusActionHandled:()=>Se(null)}),s==="action-plan"&&e.jsx(xi,{actions:Qe,onComponentClick:H,teamMembers:c.orgProfile.teamMembers||[],darkMode:!!f.darkMode}),s==="cm-guide"&&e.jsx(Fo,{onComponentClick:H,guidanceTarget:ea,linkOverrides:c.orgProfile.linkOverrides,showAdditionalGuidanceLinks:we,darkMode:!!f.darkMode}),s==="introduction"&&e.jsx(cr,{darkMode:!!f.darkMode,onNavigateToProjectDetails:()=>y("project-details"),onNavigateToGuide:()=>y("cm-guide"),onNavigateToDashboard:()=>y("dashboard")}),s==="roadmap-view"&&e.jsx(Jo,{components:n,metrics:z,getEntry:ge,onComponentClick:H,pathway:c.orgProfile.cst.pathway,pathwayChecks:c.pathwayChecks,darkMode:!!f.darkMode}),s==="highlight-builder"&&e.jsx(sr,{store:c,metrics:z,lenses:t,components:n,getEntry:ge,trustName:c.orgProfile.trustName,projectName:c.orgProfile.projectName,themeColor:f.themeColor,currentUserId:b,darkMode:!!f.darkMode}),s==="force-field-analysis"&&e.jsx(Qa,{embedded:!0,onBack:()=>y("dashboard")}),s==="compare"&&e.jsx(si,{embedded:!0,onBack:()=>y("dashboard")}),s==="audit-log"&&e.jsx(To,{events:c.auditLog,darkMode:!!f.darkMode}),s==="settings"&&e.jsx(br,{userSettings:f,onUserSettingsUpdate:C,onLoadExampleData:wt,onResetData:Mn,darkMode:!!f.darkMode}),s==="profile"&&e.jsx(hr,{orgProfile:c.orgProfile,onProfileUpdate:$,userSettings:f,onUserSettingsUpdate:C,objectivesCompleted:g,objectivesTotal:fn.length,darkMode:!!f.darkMode})]}),l?e.jsx(lr,{lensName:l,onClose:()=>x(""),darkMode:!!f.darkMode}):null,A?e.jsx(or,{report:A.report,myLabel:c.orgProfile.projectName||c.orgProfile.trustName||"Mine",theirLabel:((Ze=A.parsed.orgProfile)==null?void 0:Ze.projectName)||((on=A.parsed.orgProfile)==null?void 0:on.trustName)||A.file.name,onResolve:Un,onCancel:Pn,darkMode:!!f.darkMode}):null,Oe?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${f.darkMode?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} w-full max-w-2xl rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${f.darkMode?"text-slate-100":"text-slate-900"}`,children:"Finalise Month"}),e.jsx("button",{type:"button",onClick:()=>Le(!1),className:`${f.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:`mt-4 space-y-3 text-sm ${f.darkMode?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("p",{children:["Finalising creates a point-in-time snapshot for"," ",e.jsx("strong",{children:an.currentMonthLabel}),". A new reporting month starts on the 1st day of each month."]}),e.jsx("p",{children:Ee?"Finalise window is open (last week of the month).":"Finalise window is currently closed. You can finalise from the final week of each month."}),In?e.jsxs("p",{className:"rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-amber-900",children:["A snapshot already exists for ",an.currentMonthLabel,". Re-finalise will replace this month only."]}):null]}),e.jsxs("div",{className:`${f.darkMode?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mt-4 rounded-md border p-3 text-sm`,children:[e.jsx("p",{className:`font-semibold ${f.darkMode?"text-slate-100":"text-slate-800"}`,children:"Current summary"}),e.jsxs("ul",{className:`mt-2 space-y-1 ${f.darkMode?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("li",{children:["Baseline snapshot: ",an.baselineLabel]}),e.jsxs("li",{children:["Overall readiness: ",z.overallPct,"% (",an.deltaOverall>=0?"+":"",an.deltaOverall,"% vs baseline)"]}),e.jsxs("li",{children:["Components assessed: ",an.assessedCount]}),e.jsxs("li",{children:["Actions complete: ",an.completedActions,"/",an.totalActions]})]})]}),e.jsxs("div",{className:"mt-5 flex flex-wrap justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:()=>Le(!1),className:"rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Cancel"}),In&&Ee?e.jsx("button",{type:"button",onClick:()=>{Le(!1),kn({replaceExisting:!0})},className:"rounded-md border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100",children:"Re-finalise This Month"}):null,e.jsx("button",{type:"button",onClick:()=>{Le(!1),kn()},disabled:!Ee,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50",children:"Finalise Snapshot"})]})]})}):null,e.jsx(fi,{toolkitChoice:c.orgProfile.cst.toolkitChoice,darkMode:!!f.darkMode}),e.jsx(pi,{open:ce,onClose:Re,onNavigateToProjectDetails:()=>{a("project-details"),Re()},onNavigateToGuide:()=>{a("cm-guide"),Re()}}),e.jsx(ui,{open:Ve,orgProfile:c.orgProfile,onProfileUpdate:$,onClose:()=>fe(!1),onComplete:()=>{fe(!1),De(!0)},currentUserId:b,onCurrentUserChange:S,darkMode:!!f.darkMode}),tn&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${f.darkMode?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-md rounded-xl border p-6 shadow-2xl`,children:[e.jsx("h3",{className:`text-lg font-semibold ${f.darkMode?"text-slate-100":"text-slate-900"}`,children:"Setup complete"}),e.jsx("p",{className:`mt-2 text-sm ${f.darkMode?"text-slate-300":"text-slate-600"}`,children:"Want a quick guide to how the tool works before you start? The Adoption Engine Onboarding page walks through it step by step."}),e.jsxs("div",{className:"mt-5 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:()=>De(!1),className:`${f.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Maybe later"}),e.jsx("button",{type:"button",onClick:()=>{a("cm-guide"),De(!1)},className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]",children:"View the guide"})]})]})}),e.jsx(mi,{open:sn,teamMembers:c.orgProfile.teamMembers||[],currentUserId:b,onCurrentUserChange:S,onClose:()=>Ne(!1),onNavigateToProjectDetails:()=>{a("project-details"),Ne(!1)},darkMode:!!f.darkMode})]})]})}export{zc as AdoptionApp,zc as default};
