import{r as u,j as e,a as An}from"./vendor-react-nTLHQtbJ.js";import{D as di,P as Qn,g as ui,a as fa,T as mi,O as ba,C as xt,b as St,i as gi}from"./cst-CVxF8Tjg.js";import{n as Re,a as En,b as is,F as pi}from"./ForceFieldAnalysisApp-BwKqMhY2.js";import{g as Ps,p as hi,G as fi,d as bi}from"./vendor-misc-D88HtX07.js";import{A as wt,a as Tn,U as xa,n as an,i as os,d as Ds,C as xi}from"./CompareApp-DAgT2BJS.js";import{l as dn,s as sn,d as Zn,e as Si}from"./utils-Dnh79fEb.js";import{A as It,g as Jt}from"./components-aRtg6FgR.js";import{C as gn}from"./vendor-chart-DnMUodEx.js";const Sa=["highlight-builder","force-field-analysis","compare"],vt={"highlight-builder":{label:"Highlight Builder",matchText:"Highlight Builder"},"force-field-analysis":{label:"Force Field Analysis",matchText:"Force Field Analysis"},compare:{label:"Assess & Compare",matchText:"Assess & Compare"}};function Xt(n,t){if(!n.linkedActions.length)return"Not Started";const s=n.linkedActions.map(a=>{const i=(t[a.lens]||[]).find(r=>r.id===a.actionId);return(i==null?void 0:i.status)||"Planned"});return s.some(a=>a==="Blocked")?"Blocked":s.every(a=>a==="Completed")?"Completed":s.some(a=>a!=="Planned")?"In Progress":"Not Started"}function $s(){return`cst-${Date.now()}-${Math.random().toString(36).slice(2,10)}`}function tt(n){return{trustName:(n==null?void 0:n.trustName)||"",region:(n==null?void 0:n.region)||"",trustType:(n==null?void 0:n.trustType)||"",projectName:(n==null?void 0:n.projectName)||"",leadName:(n==null?void 0:n.leadName)||"",cst:{...di,...(n==null?void 0:n.cst)||{}},linkOverrides:n==null?void 0:n.linkOverrides,componentFurtherReading:n==null?void 0:n.componentFurtherReading,coreLinks:n==null?void 0:n.coreLinks,customComponentLinks:n==null?void 0:n.customComponentLinks,toolLinks:(n==null?void 0:n.toolLinks)??Sa.map(t=>({key:`tool-default-${t}`,tool:t,matchText:vt[t].matchText})),externalLinksInitiated:n==null?void 0:n.externalLinksInitiated,teamMembers:(n==null?void 0:n.teamMembers)||[],cstId:n==null?void 0:n.cstId}}function vi(n){return n?Object.keys(n).reduce((t,s)=>{const a=n[s]||{};return t[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},t},{}):{}}function Nt(n){return{view:(n==null?void 0:n.view)||"dashboard",orgProfile:tt(n==null?void 0:n.orgProfile),currentDraft:(n==null?void 0:n.currentDraft)||{},objectives:n!=null&&n.objectives?ls(n.objectives):{},suppressedAutoActions:yi(n==null?void 0:n.suppressedAutoActions),auditLog:wi(n==null?void 0:n.auditLog),history:(n==null?void 0:n.history)||[],phaseOverrides:(n==null?void 0:n.phaseOverrides)||{},pathwayChecks:vi(n==null?void 0:n.pathwayChecks)}}function yi(n){return n?Object.keys(n).reduce((t,s)=>(t[s]=[...n[s]||[]],t),{}):{}}function wi(n){return n?n.map(t=>({...t})):[]}function Tt(){return{score:0,justification:"",evidence:"",actions:[]}}function va(n){return{score:n.score,justification:n.justification,evidence:n.evidence,actions:n.actions.map(t=>({...t,linkedTargets:(t.linkedTargets||[]).map(s=>({componentId:s.componentId,lens:s.lens}))}))}}function rs(n){return Object.keys(n).reduce((t,s)=>(t[s]=Object.keys(n[s]).reduce((a,i)=>(a[i]=va(n[s][i]),a),{}),t),{})}function Ni(n){return{...n,linkedActions:n.linkedActions.map(t=>({...t}))}}function ls(n){return Object.keys(n).reduce((t,s)=>(t[s]=(n[s]||[]).map(Ni),t),{})}function Ci(n){if(!n)return!1;const t=new Date(n);return!isNaN(t.getTime())}function Lt(n){return!n||!Ci(n)?null:new Date(n)}function ya(n){const t=[],s=n.cst;if(!s.goLiveDate||!s.goLiveDate.trim())return t.push({field:"cst.goLiveDate",message:"Go live date is required."}),{isValid:!1,errors:t};const a=Lt(s.goLiveDate);if(!a)return t.push({field:"cst.goLiveDate",message:"Go live date must be a valid date."}),{isValid:!1,errors:t};const i=Lt(s.fullAdoptionDate);s.fullAdoptionDate&&!i&&t.push({field:"cst.fullAdoptionDate",message:"Full adoption date must be a valid date when provided."});const r=Lt(s.benefitRealizationDate);return s.benefitRealizationDate&&!r&&t.push({field:"cst.benefitRealizationDate",message:"Benefit realization date must be a valid date when provided."}),i&&i<a&&t.push({field:"cst.fullAdoptionDate",message:"Full adoption date cannot be earlier than go live date."}),r&&r<(i||a)&&t.push({field:"cst.benefitRealizationDate",message:"Benefit realization date cannot be earlier than full adoption date (or go live when full adoption is empty)."}),{isValid:t.length===0,errors:t}}function wa(n){const t=u.useMemo(()=>n.errors.reduce((s,a)=>(s[a.field]||(s[a.field]=[]),s[a.field].push(a.message),s),{}),[n.errors]);return s=>{var a;return(a=t[s])==null?void 0:a[0]}}function Ct(n){const t=[];(!n.trustName||n.trustName.trim()==="")&&t.push({field:"trustName",message:"Trust name is required"}),n.trustName&&n.trustName.length>255&&t.push({field:"trustName",message:"Trust name cannot exceed 255 characters"}),n.region&&n.region.length>100&&t.push({field:"region",message:"Region cannot exceed 100 characters"});const s=ya(n);return t.push(...s.errors),{isValid:t.length===0,errors:t}}function Na({pathway:n,darkMode:t=!1}){return n==="pathway-1"?null:e.jsxs("div",{className:`mt-3 rounded-md border p-3 text-xs ${t?"border-amber-500/40 bg-amber-500/10 text-amber-100":"border-amber-300 bg-amber-50 text-amber-900"}`,children:[e.jsx("p",{className:"font-semibold",children:"Objectives and actions are currently Pathway 1 only"}),e.jsx("p",{className:"mt-1",children:"Every outcome and action in this tool right now is written for Pathway 1 (starting from scratch). Pathway 2 and Pathway 3 will need their own objectives and actions - those haven't been written yet, so components on this pathway show no outcomes or actions until pathway-specific content is added."})]})}const Dn="w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2";function Ei(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function ji({open:n,orgProfile:t,onProfileUpdate:s,onClose:a,onComplete:i,currentUserId:r,onCurrentUserChange:o,darkMode:g=!1}){var de;const[c,h]=u.useState(0),[l,b]=u.useState(t);u.useEffect(()=>{n&&(h(0),b(t))},[n]);const f=Ct(l),x=wa(f),d=u.useCallback(L=>{b(L),s(L)},[s]),P=u.useCallback((L,te)=>{d({...l,cst:{...l.cst,[L]:te}})},[l,d]),A=u.useCallback(()=>{const L={id:Ei(),name:"",role:""};d({...l,teamMembers:[...l.teamMembers||[],L]})},[l,d]),N=u.useCallback((L,te,ue)=>{d({...l,teamMembers:(l.teamMembers||[]).map(re=>re.id===L?{...re,[te]:ue}:re)})},[l,d]),M=u.useCallback(L=>{d({...l,teamMembers:(l.teamMembers||[]).filter(te=>te.id!==L)}),r===L&&o("")},[l,d,r,o]),G=u.useRef(null),ne=u.useCallback(()=>{var L;(L=G.current)==null||L.click()},[]),v=u.useCallback(async L=>{var ue;const te=(ue=L.target.files)==null?void 0:ue[0];if(L.target.value="",!!te)try{const re=await te.text(),me=JSON.parse(re);if(!me.orgProfile||typeof me.orgProfile!="object"){window.alert("This file does not contain Project Setup data.");return}const O=tt(me.orgProfile),oe=Ct(O);if(!window.confirm("Import this Project Setup file? This replaces your current organisation profile, pathway/timeline, toolkit links, further reading, core links and team members."+(oe.errors.length?`

Note: the imported data has ${oe.errors.length} validation warning(s) you can fix after importing.`:"")))return;d(O),h(2)}catch{window.alert("Unable to read this file. Please choose a valid Project Setup export.")}},[d]);if(!n)return null;const k=`block text-sm font-medium mb-1 ${g?"text-slate-200":"text-slate-700"}`,q=g?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900",K=[{title:"Organisation profile",blurb:"Start with the basics: who this programme belongs to. This shows up on exports, highlight reports and the audit log, so people reviewing this CST later know whose it is.",body:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:`flex flex-wrap items-center justify-between gap-3 rounded-md border p-3 ${g?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("p",{className:`text-sm ${g?"text-slate-300":"text-slate-600"}`,children:"Already have a Project Setup export? Import it instead of filling this in by hand."}),e.jsx("button",{type:"button",onClick:ne,className:Re,children:"Import Saved Setup"}),e.jsx("input",{ref:G,type:"file",accept:"application/json",className:"hidden",onChange:v})]}),e.jsxs("div",{children:[e.jsx("label",{className:k,htmlFor:"wizard-trust-name",children:"Organisation Name"}),e.jsx("input",{id:"wizard-trust-name",type:"text",className:`${Dn} ${q}`,value:l.trustName,onChange:L=>d({...l,trustName:L.target.value})}),x("trustName")?e.jsx("p",{className:`mt-1 text-xs ${g?"text-amber-300":"text-red-700"}`,children:x("trustName")}):null]}),e.jsxs("div",{children:[e.jsx("label",{className:k,htmlFor:"wizard-project-name",children:"Programme / Project Name"}),e.jsx("input",{id:"wizard-project-name",type:"text",className:`${Dn} ${q}`,value:l.projectName||"",onChange:L=>d({...l,projectName:L.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{className:k,htmlFor:"wizard-lead-name",children:"Lead Submitter (Change Lead)"}),e.jsx("input",{id:"wizard-lead-name",type:"text",className:`${Dn} ${q}`,value:l.leadName||"",onChange:L=>d({...l,leadName:L.target.value})})]})]})},{title:"Pathway & timeline",blurb:"Your pathway shapes the guidance and checklists you see throughout the tool. Pick the one that matches where this programme actually is, then set the key delivery dates.",body:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:k,children:"Pathway"}),e.jsx("div",{className:`rounded-md border px-3 py-2 text-sm ${g?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-slate-50 text-slate-900"}`,children:((de=Qn.find(L=>L.value===l.cst.pathway))==null?void 0:de.label)||l.cst.pathway})]}),e.jsx(Na,{pathway:l.cst.pathway,darkMode:g}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:k,htmlFor:"wizard-go-live",children:"Go Live Date"}),e.jsx("input",{id:"wizard-go-live",type:"date",className:`${Dn} ${q}`,value:l.cst.goLiveDate,onChange:L=>P("goLiveDate",L.target.value)}),x("cst.goLiveDate")?e.jsx("p",{className:`mt-1 text-xs ${g?"text-amber-300":"text-red-700"}`,children:x("cst.goLiveDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{className:k,htmlFor:"wizard-full-adoption",children:"Full Adoption (optional)"}),e.jsx("input",{id:"wizard-full-adoption",type:"date",className:`${Dn} ${q}`,value:l.cst.fullAdoptionDate,onChange:L=>P("fullAdoptionDate",L.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{className:k,htmlFor:"wizard-benefit",children:"Benefit Realisation (optional)"}),e.jsx("input",{id:"wizard-benefit",type:"date",className:`${Dn} ${q}`,value:l.cst.benefitRealizationDate,onChange:L=>P("benefitRealizationDate",L.target.value)})]})]})]})},{title:"Team members",blurb:"Add the people working on this programme so actions and readiness slides can be assigned to a named owner, instead of everything sitting as 'Unassigned'.",body:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:k,htmlFor:"wizard-current-user",children:"You are signed in as"}),e.jsxs("select",{id:"wizard-current-user",value:r||"",onChange:L=>o(L.target.value),className:`${Dn} pr-10 md:w-1/2 ${q}`,children:[e.jsx("option",{value:"",children:"Not selected"}),(l.teamMembers||[]).map(L=>e.jsxs("option",{value:L.id,children:[L.name||"Unnamed",L.role?` - ${L.role}`:""]},L.id))]})]}),e.jsx("div",{className:"space-y-2",children:(l.teamMembers||[]).map(L=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2 items-center",children:[e.jsx("input",{value:L.name,onChange:te=>N(L.id,"name",te.target.value),placeholder:"Name",className:`rounded-md border shadow-sm sm:text-sm p-2 ${q}`}),e.jsx("input",{value:L.role,onChange:te=>N(L.id,"role",te.target.value),placeholder:"Role",className:`rounded-md border shadow-sm sm:text-sm p-2 ${q}`}),e.jsx("button",{type:"button",onClick:()=>M(L.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},L.id))}),e.jsx("button",{type:"button",onClick:A,className:Re,children:"+ Add team member"})]})},{title:"External links",blurb:"This step is optional and can be configured any time from Project Setup - toolkit choice, core reference links, and further-reading per component. Skip it for now if you'd rather get straight to assessing.",body:e.jsx("div",{className:`rounded-md border p-4 text-sm ${g?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-600"}`,children:"Nothing needed here to get started. Head to Project Setup whenever you want to set a toolkit preference, add core reference links, or point a component at further reading."})}],I=K[c],ae=c===0,J=c===K.length-1;return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border p-6 shadow-2xl ${g?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("p",{className:"text-xs font-semibold uppercase tracking-wider text-blue-600",children:["Guided CST Setup · Step ",c+1," of ",K.length]}),e.jsx("button",{type:"button",onClick:a,className:`rounded-md border px-3 py-1.5 text-sm ${g?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Close"})]}),e.jsx("h3",{className:`mt-3 text-lg font-semibold ${g?"text-slate-100":"text-slate-900"}`,children:I.title}),e.jsx("p",{className:`mt-1 text-sm ${g?"text-slate-300":"text-slate-600"}`,children:I.blurb}),e.jsx("div",{className:"mt-4",children:I.body}),e.jsxs("div",{className:"mt-6 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:()=>h(L=>Math.max(0,L-1)),disabled:ae,className:`${Re} disabled:opacity-50 disabled:cursor-not-allowed`,children:"Back"}),J?e.jsx("button",{type:"button",onClick:i,className:En,children:"Done"}):e.jsx("button",{type:"button",onClick:()=>h(L=>Math.min(K.length-1,L+1)),className:En,children:"Next"})]})]})})}function ki({open:n,initialPathway:t,onContinue:s,darkMode:a=!1}){const[i,r]=u.useState(t);if(!n)return null;const o=[Qn[1],Qn[0],Qn[2]];return e.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"pathway-selection-title",className:`w-full max-w-3xl rounded-xl border p-6 shadow-2xl ${a?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider text-blue-600",children:"Before you begin"}),e.jsx("h2",{id:"pathway-selection-title",className:`mt-2 text-xl font-semibold ${a?"text-slate-100":"text-slate-900"}`,children:"Which pathway best describes this programme?"}),e.jsx("p",{className:`mt-2 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:"Choose the starting point that best matches your adoption journey. You can change this later from Project Set-up."}),e.jsx("div",{className:"mt-6 grid grid-cols-1 gap-3 md:grid-cols-3",children:o.map(g=>{const c=i===g.value;return e.jsxs("label",{className:`cursor-pointer rounded-lg border p-4 transition-colors ${c?"border-[#005eb8] bg-blue-50 ring-2 ring-[#005eb8]":a?"border-slate-600 bg-slate-900 hover:border-slate-400":"border-slate-300 bg-white hover:border-blue-400"}`,children:[e.jsx("input",{type:"radio",name:"pathway",value:g.value,checked:c,onChange:()=>r(g.value),className:"sr-only"}),e.jsx("span",{className:`block text-sm font-semibold ${c?"text-[#005eb8]":a?"text-slate-100":"text-slate-900"}`,children:g.label})]},g.value)})}),e.jsx("div",{className:"mt-6 flex justify-end",children:e.jsx("button",{type:"button",onClick:()=>s(i),className:En,children:"Continue"})})]})})}function Ii({open:n,teamMembers:t,currentUserId:s,onCurrentUserChange:a,onClose:i,onNavigateToProjectDetails:r,darkMode:o}){const[g,c]=u.useState(s);if(!n)return null;const h=t.length>0,l=()=>{g&&(a(g),i())};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-lg rounded-xl border p-6 shadow-2xl`,children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-900"}`,children:"No one is signed in"}),e.jsxs("div",{className:`mt-3 space-y-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:[e.jsx("p",{children:"Every change recorded in this tool is attributed to whoever is signed in, so the audit log can show who did what. Sign in as a team member to continue."}),!h&&e.jsx("p",{children:"No team members have been added yet - add one on the Project Setup page first."})]}),h&&e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{htmlFor:"sign-in-required-select",className:`block text-xs font-medium ${o?"text-slate-300":"text-slate-700"}`,children:"Sign in as"}),e.jsxs("select",{id:"sign-in-required-select",value:g,onChange:b=>c(b.target.value),className:`mt-1 w-full rounded-md border px-3 py-2 text-sm ${o?"bg-slate-900 border-slate-600 text-slate-100":"bg-white border-slate-300 text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Not selected"}),t.map(b=>e.jsxs("option",{value:b.id,children:[b.name||"Unnamed",b.role?` - ${b.role}`:""]},b.id))]})]}),e.jsxs("div",{className:"mt-6 flex flex-wrap justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:i,className:`rounded-md px-4 py-2 text-sm font-medium ${o?"text-slate-300 hover:bg-slate-700":"text-slate-600 hover:bg-slate-100"}`,children:"Remind me later"}),e.jsx("button",{type:"button",onClick:r,className:`rounded-md border px-4 py-2 text-sm font-medium ${o?"border-slate-600 text-slate-200 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-100"}`,children:"Go to Project Setup"}),h&&e.jsx("button",{type:"button",onClick:l,disabled:!g,className:"rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",children:"Sign in"})]})]})})}const Qt={0:"Not Started: Activity has not yet commenced or been defined.",1:"Emerging: Activity is fragmented, uncoordinated, and reactive. No standardised approach.",2:"Developing: Basic processes exist but are inconsistently applied. Reliance on heroic individual efforts.",3:"Embedding: Standardised approach defined and applied across the project. Leadership is engaged.",4:"Adopted: Behaviours are changing. Metrics are actively monitored to drive adoption.",5:"Thriving: Change is fully embedded as business as usual. Continuous improvement is evident."},Ts=["Pre-Emergent","Emerging","Developing","Maturing","Embedding","Thriving"],Ai=["#768692","#AE2521","#FFB81C","#005EB8","#330072","#00A499"];function Zt(n){return Ts[Math.round(n)]||Ts[0]}function Ca(){return[{title:"What is the Adoption Engine?",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsxs("p",{className:"text-sm text-slate-700",children:["Going live with a new digital product isn't the finish line - people still need to adopt it, change how they work, and keep using it."," "]}),e.jsx("p",{className:"text-sm text-slate-700",children:"The Adoption Engine helps you track how people and teams are adopting the change before go-live, during rollout, and after launch so progress is visible and outcomes are measurable."}),e.jsx("p",{className:"text-sm text-slate-700",children:" It helps you answer four simple questions:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"Where are we going?"}),e.jsx("li",{children:" How will we know we've got there?"}),e.jsx("li",{children:" What needs to be in place?"}),e.jsx("li",{children:" What should we do next?"})]}),e.jsx("p",{className:"text-sm text-slate-700",children:"The goal is not just to implement change, but to ensure it is adopted, embedded and delivering benefits."})]})},{title:"What benefit does this tool give me?",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"Without it, adoption progress lives in scattered spreadsheets, memories and gut feel - hard to prove, hard to hand over, and easy to lose momentum on."}),e.jsx("p",{children:"With it, you get a single, evidenced picture of where your change effort actually stands:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1",children:[e.jsx("li",{children:"See at a glance what's on track, what's at risk, and what to do next."}),e.jsx("li",{children:`Turn vague "how's it going?" conversations into a clear, evidence-backed status you can show your sponsor or board.`}),e.jsx("li",{children:"Get a ready-made action plan for each area, so you're not starting from a blank page."}),e.jsx("li",{children:"Build a highlight report in minutes instead of an afternoon of copy-pasting."})]})]})},{title:"What is a CST?",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"A CST (Context Specific Template) contains the information that makes the Adoption Engine specific to your project, programme or initiative."}),e.jsx("p",{children:"It captures key information such as your scope, milestones, outcomes and benefits, and tailors the guidance, actions and resources provided."}),e.jsxs("p",{children:["You can update your project setup at any time from ",e.jsx("strong",{children:"Project Setup"})]})]})},{title:"Adoption Pathways",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"The Adoption Engine supports three common change journeys:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Starting for the First Time"}),e.jsx("br",{}),"Building the foundations for successful adoption."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Piloted and Ready to Scale Up"}),e.jsx("br",{}),"Expanding a successful pilot to a wider audience."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Gone Live but Adoption is Patchy"}),e.jsx("br",{}),"Strengthening adoption where uptake or benefits are lower than expected."]})]}),e.jsx("p",{children:"Choose your pathway to tailor the guidance, actions and resources you see."})]})},{title:"How the Adoption Engine Works",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"The engine is built around change components such as Vision, Sponsorship, Engagement, Capability and Benefits."}),e.jsxs("p",{children:["Each component is viewed through five ",e.jsx("strong",{children:"lenses"}),":"]}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"Strategic Direction and Leadership"}),e.jsx("li",{children:"People Experience and Culture"}),e.jsx("li",{children:"Planning and Risk"}),e.jsx("li",{children:"Skills and Behaviour"}),e.jsx("li",{children:"Process and Sustainment"})]}),e.jsx("p",{children:"As you assess your readiness of each change component through the lenses, the engine recommends actions, resources and evidence to help improve adoption."})]})},{title:"Readiness Guidance Levels",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-3",children:[e.jsx("p",{children:"Every lens is scored on the same 0-5 readiness scale. Here's what each level generally means - each lens on a component page also shows guidance written specifically for that lens at its current level."}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:Object.entries(Qt).map(([n,t])=>{const[s,a]=t.split(/:\s(.+)/);return e.jsxs("div",{className:"rounded-md border p-2.5",style:{borderLeftWidth:"4px",borderLeftColor:Ai[Number(n)]},children:[e.jsxs("p",{className:"text-xs font-bold text-slate-800",children:[n," - ",s]}),e.jsx("p",{className:"mt-0.5 text-xs text-slate-600",children:a})]},n)})})]})},{title:"Getting Started",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{className:"text-sm text-slate-700",children:"Start with Project Setup to review your project setup. "}),e.jsx("p",{className:"text-sm text-slate-700",children:"Then visit the Dashboard to:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"View your current position"}),e.jsx("li",{children:"Explore components and lenses"}),e.jsx("li",{children:"Identify priority actions"}),e.jsx("li",{children:"Track progress and benefits"})]}),e.jsxs("p",{className:"text-sm text-slate-700",children:["The Adoption Engine will help guide your journey from ambition to adoption."," "]})]})}]}function _i({open:n,onClose:t,onNavigateToProjectDetails:s,onNavigateToGuide:a}){const[i,r]=u.useState(0),o=Ca();if(u.useEffect(()=>{n&&r(0)},[n]),!n)return null;const g=o[i],c=i===0,h=i===o.length-1;return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:"relative w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("p",{className:"text-xs font-semibold uppercase tracking-wider text-blue-600",children:["Introduction · Step ",i+1," of ",o.length]}),e.jsx("button",{type:"button",onClick:t,className:"rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100",children:"Skip"})]}),e.jsx("h3",{className:"mt-3 text-lg font-semibold text-slate-900",children:g.title}),e.jsx("div",{className:"mt-3",children:g.body}),e.jsxs("div",{className:"mt-6 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:()=>r(l=>Math.max(0,l-1)),disabled:c,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed",children:"Back"}),h?e.jsxs("div",{className:"flex items-stretch gap-2",children:[s?e.jsx("button",{type:"button",onClick:s,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"Set up your Project"}):null,a?e.jsx("button",{type:"button",onClick:a,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"See the 6 Key Questions"}):null,e.jsx("button",{type:"button",onClick:t,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Go to dashboard"})]}):e.jsx("button",{type:"button",onClick:()=>r(l=>Math.min(o.length-1,l+1)),className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Next"})]})]})})}const et="nhs-digital-adoption-evidence-warning-dismissed";function Ea({open:n,onContinue:t,onCancel:s,darkMode:a=!1}){const[i,r]=u.useState(!1);return n?e.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"evidence-warning-title",className:`w-full max-w-md rounded-xl border p-6 shadow-2xl ${a?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsx("h2",{id:"evidence-warning-title",className:`text-lg font-semibold ${a?"text-slate-100":"text-slate-900"}`,children:"Evidence reminder"}),e.jsx("p",{className:`mt-3 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:"Please don't forget to attach evidence if you have it"}),e.jsxs("label",{className:`mt-4 flex items-center gap-2 text-sm ${a?"text-slate-200":"text-slate-700"}`,children:[e.jsx("input",{type:"checkbox",checked:i,onChange:o=>r(o.target.checked),className:"h-4 w-4 rounded border-slate-400"}),"Don't show this message again"]}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:s,className:Re,children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>t(i),className:En,children:"Continue"})]})]})}):null}const Oi={"avt-v2-2026":[{id:"avt-vision-case-for-change",title:"Vision and Case for Change",pageHint:"Section: Early readiness",text:"Use a clear case for change, define outcomes, and ensure leadership sponsorship before go-live."},{id:"avt-stakeholder-engagement",title:"Stakeholder Engagement",pageHint:"Section: People and communication",text:"Map stakeholder groups, identify adoption risks, and use targeted communication plans for each audience."},{id:"avt-training-readiness",title:"Training and Capability",pageHint:"Section: Capability and learning",text:"Align learning interventions with role-based needs and verify confidence through readiness checkpoints."},{id:"avt-benefits-tracking",title:"Benefits Tracking",pageHint:"Section: Value realisation",text:"Set measurable adoption indicators and review benefit evidence at regular intervals post go-live."},{id:"avt-reinforcement-bau",title:"Reinforcement and BAU Transfer",pageHint:"Section: Sustainment",text:"Embed reinforcement actions and hand over ownership to business-as-usual teams for sustained adoption."}],"change-management-v3-2023":[{id:"cmt-leadership-alignment",title:"Leadership Alignment",pageHint:"Section: Sponsorship and governance",text:"Secure visible executive sponsorship and align governance with programme milestones and risks."},{id:"cmt-change-impact",title:"Change Impact Assessment",pageHint:"Section: Planning and risk",text:"Assess process, role, and behaviour impacts early and prioritise mitigations before deployment."},{id:"cmt-resistance-management",title:"Resistance Management",pageHint:"Section: Adoption barriers",text:"Identify likely resistance themes and define practical interventions with named owners and timelines."},{id:"cmt-comms-cadence",title:"Communication Cadence",pageHint:"Section: Communications",text:"Establish a predictable communication cadence using concise updates and feedback loops."},{id:"cmt-post-go-live-support",title:"Post Go-Live Support",pageHint:"Section: Stabilisation",text:"Provide hypercare support with clear escalation routes and transition criteria into steady state."}]};fi.workerSrc=hi;function Ri({toolkitChoice:n,darkMode:t=!1}){const[s,a]=u.useState(!1),[i,r]=u.useState(!1),[o,g]=u.useState(""),[c,h]=u.useState(1),[l,b]=u.useState("idle"),[f,x]=u.useState(""),[d,P]=u.useState([]),A=u.useMemo(()=>ui(n),[n]),N=u.useMemo(()=>(Oi[n]||[]).map(k=>({id:k.id,title:k.title,pageHint:k.pageHint,text:k.text,pageNumber:null})),[n]);u.useEffect(()=>{if(!s)return;let k=!1;return(async()=>{b("loading"),x("");try{const K=await fetch(A.path);if(!K.ok)throw new Error(`HTTP ${K.status}`);const I=await K.arrayBuffer(),ae=new Uint8Array(I);let J;try{J=await Ps({data:ae}).promise}catch(L){if(J=await Ps({data:ae,disableWorker:!0}).promise,!k){const te=L instanceof Error?L.message:String(L);x(`Worker fallback used: ${te}`)}}const de=[];for(let L=1;L<=J.numPages;L+=1){if(k)return;const re=(await(await J.getPage(L)).getTextContent()).items.map(me=>"str"in me?me.str:"").join(" ").replace(/\s+/g," ").trim();re&&de.push({id:`${n}-page-${L}`,title:`Page ${L}`,pageHint:`Page ${L}`,text:re,pageNumber:L})}k||(P(de),b("ready"))}catch{k||(P([]),b("error"),x("Unable to read PDF text for indexing in this browser session."))}})(),()=>{k=!0}},[s,A.path,n]),u.useEffect(()=>{h(1),g(""),P([]),b("idle"),x("")},[n]);const M=d.length>0?d:N,G=u.useMemo(()=>{const k=Number.isFinite(c)&&c>0?Math.floor(c):1;return`${A.path}#page=${k}`},[A.path,c]),v=u.useMemo(()=>{const k=o.trim().toLowerCase();if(!k)return M.slice(0,5).map(I=>({entry:I,score:0}));const q=k.split(/\s+/).filter(Boolean),K=I=>{const ae=`${I.title} ${I.text} ${I.pageHint}`.toLowerCase();let J=0;return ae.includes(k)&&(J+=8),q.forEach(de=>{ae.includes(de)?J+=2:ae.split(/\W+/).some(te=>te&&(te.includes(de)||de.includes(te)))&&(J+=1)}),J};return M.map(I=>({entry:I,score:K(I)})).filter(I=>I.score>0).sort((I,ae)=>ae.score-I.score).slice(0,5)},[o,M])[0]||null;return u.useEffect(()=>{o.trim()&&v!=null&&v.entry.pageNumber&&h(v.entry.pageNumber)},[v,o]),e.jsxs("div",{className:"fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2","data-testid":"global-toolkit-chatbot",children:[s?e.jsxs("div",{className:`w-[380px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border shadow-2xl ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant"}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("button",{type:"button",onClick:()=>r(!0),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Maximise"}),e.jsx("button",{type:"button",onClick:()=>a(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Minimise"})]})]}),e.jsxs("div",{className:`space-y-3 p-3 ${t?"bg-slate-800":"bg-slate-50"}`,children:[e.jsxs("div",{className:`max-w-[95%] rounded-2xl rounded-bl-md px-3 py-2 text-xs shadow-sm ${t?"bg-slate-700 text-slate-100":"bg-white text-slate-700"}`,children:["Showing your selected toolkit from Project Setup:",e.jsx("div",{className:"mt-1 font-semibold",children:A.label})]}),e.jsx("div",{className:`overflow-hidden rounded-lg border ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:e.jsx("iframe",{title:"Selected Toolkit Preview",src:G,className:"h-[260px] w-full"})}),e.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-end gap-2",children:[e.jsx("label",{htmlFor:"toolkit-page-input",className:`text-[11px] font-semibold uppercase tracking-wider ${t?"text-slate-300":"text-slate-600"}`,children:"Go to page"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{id:"toolkit-page-input",type:"number",min:1,value:c,onChange:k=>h(Number(k.target.value)||1),className:`w-20 rounded-md border px-2 py-1.5 text-xs ${t?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})})]}),e.jsxs("div",{className:`rounded-lg border p-2 ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsx("label",{htmlFor:"toolkit-fuzzy-search",className:`mb-1 block text-[11px] font-semibold uppercase tracking-wider ${t?"text-slate-300":"text-slate-600"}`,children:"Quick snippet search"}),e.jsx("input",{id:"toolkit-fuzzy-search",type:"search",value:o,onChange:k=>g(k.target.value),placeholder:"Try: sponsorship, training, resistance",className:`w-full rounded-md border px-2 py-1.5 text-xs ${t?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-400":"border-slate-300 bg-white text-slate-900 placeholder-slate-500"}`}),e.jsx("div",{className:"mt-2",children:o.trim()?v!=null&&v.entry.pageNumber?e.jsxs("button",{type:"button",onClick:()=>{h(v.entry.pageNumber),r(!0)},className:`w-full rounded-md px-2 py-1.5 text-left text-xs font-semibold ${t?"bg-slate-800 text-slate-100 hover:bg-slate-700":"bg-slate-100 text-slate-800 hover:bg-slate-200"}`,children:["Go to best match: Page ",v.entry.pageNumber]}):e.jsx("p",{className:`text-xs ${t?"text-slate-400":"text-slate-500"}`,children:"No close page match found. Try broader keywords."}):e.jsx("p",{className:`text-xs ${t?"text-slate-400":"text-slate-500"}`,children:"Enter a keyword to jump to the most relevant page."})}),e.jsx("p",{className:`mt-2 text-[11px] ${t?"text-slate-400":"text-slate-500"}`,children:l==="loading"?"Indexing toolkit text from all pages...":l==="ready"?`Search is using full-document text (${d.length} pages indexed).`:l==="error"?"Full-document indexing unavailable, using fallback snippets.":"Search will expand to all pages when the assistant opens."}),f?e.jsx("p",{className:`mt-1 text-[11px] ${t?"text-amber-300":"text-amber-700"}`,children:f}):null]}),e.jsx("a",{href:A.path,target:"_blank",rel:"noopener noreferrer",className:"inline-block text-xs font-semibold text-[#005eb8] underline",children:"Open full toolkit in new tab"})]})]}):null,i?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4",children:e.jsxs("div",{className:`relative h-[90vh] w-[95vw] overflow-hidden rounded-2xl border shadow-2xl ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant · Expanded Viewer"}),e.jsx("button",{type:"button",onClick:()=>r(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Close"})]}),e.jsx("iframe",{title:"Selected Toolkit Full View",src:G,className:"h-[calc(90vh-42px)] w-full"})]})}):null,e.jsxs("button",{type:"button",onClick:()=>a(k=>!k),className:"inline-flex items-center gap-2 rounded-full bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-blue-700","aria-label":"Open toolkit assistant",children:[e.jsx("span",{"aria-hidden":"true",children:"💬"}),"Toolkit assistant"]})]})}function ja({showAdvancedControls:n,onToggleAdvanced:t,onReset:s,resultText:a,activeFilters:i,activeFiltersAriaLabel:r,darkMode:o=!1}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:t,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${o?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:n?"Hide advanced controls":"Show advanced controls"}),e.jsx("button",{type:"button",onClick:s,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${o?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:"Reset filters"}),e.jsx("span",{className:`text-xs ${o?"text-slate-300":"text-slate-500"}`,"aria-live":"polite",children:a})]}),i.length>0?e.jsx("div",{className:"flex flex-wrap gap-2","aria-label":r,children:i.map(g=>e.jsx("span",{className:`inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-slate-50 text-slate-700"}`,children:g},g))}):null]})}const Pi="nhs-digital-adoption-page-intro-seen:";function bn(n){const t=`${Pi}${n}`,[s,a]=u.useState(()=>!dn(t));return{isOpen:s,close:()=>{sn(t,!0),a(!1)},reopen:()=>a(!0)}}function xn({open:n,onClose:t,title:s,body:a,darkMode:i=!1}){return n?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-lg rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-900"}`,children:s}),e.jsx("button",{type:"button",onClick:t,"aria-label":"Close introduction",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${i?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:`mt-3 space-y-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:a}),e.jsx("div",{className:"mt-5 flex justify-end",children:e.jsx("button",{type:"button",onClick:t,className:En,children:"Got it"})})]})}):null}function Sn({onClick:n,darkMode:t=!1}){return e.jsx("button",{type:"button",onClick:n,"aria-label":"Show page introduction",title:"Show page introduction",className:`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${t?"border-slate-600 text-slate-200 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"?"})}function Di({actions:n,onComponentClick:t,onStatusChange:s,teamMembers:a=[],darkMode:i=!1}){const r=bn("action-tracker"),[o,g]=u.useState(""),[c,h]=u.useState("all"),[l,b]=u.useState("all"),[f,x]=u.useState("all"),[d,P]=u.useState("all"),[A,N]=u.useState("all"),[M,G]=u.useState("component"),[ne,v]=u.useState("asc"),[k,q]=u.useState(!1),K=u.useCallback(O=>{t(O)},[t]),I=u.useMemo(()=>Array.from(new Set(n.map(O=>O.component))).sort((O,oe)=>O.localeCompare(oe)),[n]),ae=u.useMemo(()=>Array.from(new Set([...a.map(O=>O.name),...n.map(O=>O.action.owner).filter(Boolean)])).sort((O,oe)=>O.localeCompare(oe)),[n,a]),J=u.useMemo(()=>Array.from(new Set(n.map(O=>O.action.status))).sort((O,oe)=>O.localeCompare(oe)),[n]),de=u.useMemo(()=>{const O=n.map(oe=>oe.action.actionType).filter(oe=>!!oe);return Array.from(new Set([...wt,...O])).sort((oe,ge)=>oe.localeCompare(ge))},[n]),L=u.useMemo(()=>{const O=n.map(oe=>oe.action.readinessScore).filter(oe=>oe!==void 0);return Array.from(new Set(O)).sort((oe,ge)=>oe-ge)},[n]),te={0:"Not Started",1:"Emerging",2:"Developing",3:"Embedding",4:"Adopted",5:"Thriving"},ue=u.useMemo(()=>{const O=o.trim().toLowerCase();return n.filter(ge=>c!=="all"&&ge.component!==c||l!=="all"&&ge.action.owner!==l||f!=="all"&&ge.action.status!==f||d!=="all"&&(ge.action.actionType||"")!==d||A!=="all"&&ge.action.readinessScore!==A?!1:O?[ge.component,ge.lens,ge.action.text,ge.action.actionType||"",ge.action.owner,ge.action.timescale,ge.action.status].join(" ").toLowerCase().includes(O):!0).sort((ge,Ie)=>{const Te=Me=>{switch(M){case"lens":return Me.lens;case"owner":return Me.action.owner||"Unassigned";case"status":return Me.action.status;case"actionType":return Me.action.actionType||"Unassigned";case"component":default:return Me.component}},we=Te(ge).localeCompare(Te(Ie));return ne==="asc"?we:-we})},[d,n,c,l,A,o,M,ne,f]),re=u.useMemo(()=>{const O=[];return o.trim()&&O.push(`Search: ${o.trim()}`),c!=="all"&&O.push(`Component: ${c}`),f!=="all"&&O.push(`Status: ${f}`),d!=="all"&&O.push(`Action type: ${d}`),A!=="all"&&O.push(`Readiness: ${te[A]}`),l!=="all"&&O.push(`Owner: ${l}`),(M!=="component"||ne!=="asc")&&O.push(`Sort: ${M} (${ne})`),O},[d,c,l,A,o,M,ne,f]),me=()=>{g(""),h("all"),b("all"),x("all"),P("all"),N("all"),G("component"),v("asc"),q(!1)};return e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"mb-6 flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${i?"text-slate-100":"text-slate-800"}`,children:"Action Tracker"}),e.jsx(Sn,{onClick:r.reopen,darkMode:i})]}),e.jsx(xn,{open:r.isOpen,onClose:r.close,title:"Action Tracker",darkMode:i,body:e.jsx("p",{children:"Every action across every component in one searchable, filterable, sortable table. Filter by component, owner, status, action type or readiness score, and click a row's component to jump straight to its assessment."})}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-4 mb-6 space-y-3`,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:o,onChange:O=>g(O.target.value),placeholder:"Search actions, owners, lenses...",className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-900 text-slate-100":"text-slate-900"}`}),e.jsxs("select",{value:c,onChange:O=>h(O.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All components"}),I.map(O=>e.jsx("option",{value:O,children:O},O))]}),e.jsxs("select",{value:f,onChange:O=>x(O.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All statuses"}),J.map(O=>e.jsx("option",{value:O,children:O},O))]})]}),e.jsx(ja,{showAdvancedControls:k,onToggleAdvanced:()=>q(O=>!O),onReset:me,resultText:`Showing ${ue.length} actions`,activeFilters:re,activeFiltersAriaLabel:"Active action tracker filters",darkMode:i}),k?e.jsxs("div",{className:`grid grid-cols-1 sm:grid-cols-5 gap-3 rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("select",{value:l,onChange:O=>b(O.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),ae.map(O=>e.jsx("option",{value:O,children:O},O))]}),e.jsxs("select",{value:d,onChange:O=>P(O.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),de.map(O=>e.jsx("option",{value:O,children:O},O))]}),e.jsxs("select",{value:A==="all"?"all":String(A),onChange:O=>N(O.target.value==="all"?"all":Number(O.target.value)),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All readiness levels"}),L.map(O=>e.jsx("option",{value:String(O),children:te[O]},O))]}),e.jsxs("select",{value:M,onChange:O=>G(O.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"component",children:"Sort: Component"}),e.jsx("option",{value:"lens",children:"Sort: Lens"}),e.jsx("option",{value:"owner",children:"Sort: Owner"}),e.jsx("option",{value:"actionType",children:"Sort: Action Type"}),e.jsx("option",{value:"status",children:"Sort: Status"})]}),e.jsx("button",{type:"button",onClick:()=>v(O=>O==="asc"?"desc":"asc"),className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${i?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-white"}`,children:ne==="asc"?"A-Z":"Z-A"})]}):null]}),e.jsx("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:ue.length?e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:`min-w-full table-fixed ${i?"divide-slate-700":"divide-slate-200"} divide-y`,children:[e.jsx("thead",{className:i?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Change Component"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Lens"}),e.jsx("th",{className:`w-[22%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Action Type"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Timescale"}),e.jsx("th",{className:`w-[14%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Status"})]})}),e.jsx("tbody",{className:`${i?"bg-slate-800 divide-slate-700":"bg-white divide-slate-100"} divide-y`,children:ue.map(({compId:O,component:oe,lens:ge,action:Ie})=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:e.jsx("button",{onClick:()=>K(O),className:"text-left underline underline-offset-2 hover:text-[#005eb8] transition-colors",children:oe})}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:ge}),e.jsx("td",{className:`w-[22%] px-4 py-3 text-sm whitespace-normal break-words leading-snug ${i?"text-slate-100":"text-slate-700"}`,children:Ie.text}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:Ie.actionType||"Unassigned"}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:Ie.owner}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:Ie.timescale}),e.jsx("td",{className:"w-[14%] px-4 py-3 text-sm",children:e.jsx("select",{"aria-label":`Status for ${Ie.text}`,value:an(Ie.status),onChange:Te=>s==null?void 0:s(O,ge,Ie.id,Te.target.value),className:`w-full rounded-md border px-2 py-1 text-xs font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] ${Tn[an(Ie.status)]} ${i?"bg-slate-900":"bg-white"}`,children:xa.map(Te=>e.jsx("option",{value:Te,children:Te},Te))})})]},`${O}-${ge}-${Ie.text}`))})]})}):e.jsx("div",{className:`p-6 ${i?"text-slate-300":"text-slate-500"}`,children:n.length?"No actions match the current filters.":"No actions recorded yet."})})]})}function ka(n,t){if(n<=0)return"Amber";const s=t-n;return s>=2?"Red":s>0?"Amber":"Green"}function $i(n,t=new Date){if(n.length===0)return{status:"Green",reason:"No outstanding actions at the current level."};const s=n.map(g=>({action:g,due:g.dueDate?new Date(g.dueDate):null})).map(({action:g,due:c})=>({action:g,due:c&&!isNaN(c.getTime())?c:null})),a=s.filter(({due:g})=>g!==null&&g<t);if(a.length>0){const g=a.length>1?` and ${a.length-1} more`:"";return{status:"Red",reason:`${a.length} action${a.length===1?" is":"s are"} overdue: "${a[0].action.text}"${g}.`}}const i=new Date(t.getTime()+14*24*60*60*1e3),r=s.filter(({due:g})=>g!==null&&g<=i);return r.length>0?{status:"Amber",reason:`${r.length} action${r.length===1?" is":"s are"} due within 14 days: "${r[0].action.text}".`}:s.filter(({due:g})=>g===null).length===n.length?{status:"Amber",reason:`${n.length} action${n.length===1?" has":"s have"} no due date set, so timeline risk can't be assessed.`}:{status:"Green",reason:"All outstanding actions are on track against their due dates."}}const Ia={Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},Ti={Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"},hn={1:"Pre-Discovery",2:"Solution Design",3:"Development",4:"Deployment / Go Live",5:"Post-Deployment"},Li={sampleRubric:[{id:"r1",label:"Leadership",max:5},{id:"r2",label:"Culture",max:5}],adoptionRubric:[{id:"a1",label:"Adoption awareness",max:100},{id:"a2",label:"Training coverage",max:100}],vision:{"Strategic Direction and Leadership":{1:"Senior leaders take initial steps to develop the vision through workshops and discussions, beginning to align on a shared future direction and its link to strategic objectives.",2:"A draft vision has been created and is being tested and refined with a wider group to check clarity, relevance and alignment to strategy.",3:"A clear vision is defined and agreed at senior level but not yet consistently communicated to all stakeholders.",4:"Senior leaders consistently communicate the vision and link it to organisational goals, priorities and decisions.",5:"Leaders speak with one voice about the vision, actively reinforcing it through actions and decisions and ensuring it is well understood across the organisation."},"People Experience and Culture":{1:"Early conversations focus on what is changing but staff involvement is limited. The vision is not yet clear or meaningful to most people.",2:"The draft vision is tested with a wider audience. Staff input is sought to check relevance and whether the vision reflects real experiences and concerns. Feedback is used to refine the vision.",3:`The vision is defined but not yet consistently communicated to all stakeholders.

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

There is a clearer plan for sustainment, although it is still being embedded and tested.`,3:"Key processes, roles, and measures are in place and being followed. The change is being maintained in practice, with issues identified and addressed as they arise.",4:"The change is embedded into day-to-day operations. Processes are consistently followed, and performance is stable, with benefits starting to be realised.",5:"The change is fully sustained as “the way we do things.” Processes are regularly reviewed and improved, and performance continues to strengthen over time."}}},es={1:{vision:5,case_for_change:5,sponsorship:1,change_network:1,benefits:1,change_impact:1,risk_management:1,cm_readiness:1,stakeholder:1,resistance:1,skills_learning:1,capability:1,change_adoption:1,process_change:1,reinforcement:1,org_maturity:1,transfer_bau:1},2:{vision:5,case_for_change:5,sponsorship:2,change_network:2,benefits:3,change_impact:2,risk_management:2,cm_readiness:2,stakeholder:2,resistance:2,skills_learning:2,capability:2,change_adoption:2,process_change:3,reinforcement:2,org_maturity:2,transfer_bau:2},3:{vision:5,case_for_change:5,sponsorship:3,change_network:3,benefits:4,change_impact:3,risk_management:3,cm_readiness:3,stakeholder:3,resistance:3,skills_learning:4,capability:3,change_adoption:3,process_change:4,reinforcement:3,org_maturity:3,transfer_bau:3},4:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:4,stakeholder:5,resistance:4,skills_learning:5,capability:4,change_adoption:4,process_change:5,reinforcement:4,org_maturity:4,transfer_bau:4},5:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:5,stakeholder:5,resistance:5,skills_learning:5,capability:5,change_adoption:5,process_change:5,reinforcement:5,org_maturity:5,transfer_bau:5}};function Et(n,t,s){return!t||!es[t]?s:es[t][n]??s}function Bi(n){const t=Number((n==null?void 0:n.score)||0),s=((n==null?void 0:n.actions)||[]).some(a=>a.readinessScore===0);return t===0&&!s?1:t}function Fi(n,t){const s=[];return n.lenses.forEach(a=>{const i=t(n.id,a),r=Bi(i);((i==null?void 0:i.actions)||[]).forEach(o=>{(o.readinessScore??r)===r&&!os(o.status)&&s.push({id:o.id,text:o.text,lens:a,owner:o.owner||"",status:o.status||"",dueDate:o.dueDate||""})})}),s}function Aa(n,t,s){return n.filter(a=>a.phase===s).map(a=>{const i=Fi(a,t),{status:r,reason:o}=$i(i),g=`${i.length} action${i.length===1?"":"s"} pending completion.`;return{componentId:a.id,componentLabel:a.label,phase:a.phase,gapToTarget:0,bragStatus:r,bragReason:o,summary:g,message:`${a.label}: ${g}`,outstandingActions:i}}).filter(a=>a.outstandingActions.length>0).sort((a,i)=>{const r={Red:0,Amber:1,Green:2,Blue:3};return r[a.bragStatus]!==r[i.bragStatus]?r[a.bragStatus]-r[i.bragStatus]:i.outstandingActions.length-a.outstandingActions.length})}function Ls(n,t){var P;let s=0,a=0,i=0,r=0;const o=new Map;t.forEach(A=>{const N=o.get(A.phase)||{componentCount:0,assessedLenses:0,totalLenses:0,onTrackComponents:0,totalActions:0,completedActions:0};N.componentCount+=1,N.totalLenses+=A.lenses.length;let M=0;A.lenses.forEach(v=>{var I;const k=(I=n.currentDraft[A.id])==null?void 0:I[v],q=Number((k==null?void 0:k.score)||0);s+=q,M+=q,q>0&&(a+=1,N.assessedLenses+=1),((k==null?void 0:k.actions)||[]).forEach(ae=>{i+=1,N.totalActions+=1,os(ae.status)&&(r+=1,N.completedActions+=1)})});const G=A.lenses.length?Number((M/A.lenses.length).toFixed(1)):0,ne=Et(A.id,A.phase,A.target);G>=ne&&(N.onTrackComponents+=1),o.set(A.phase,N)});const g=t.reduce((A,N)=>A+N.lenses.length,0),c=g*5,h=c?Math.round(s/c*100):0,l=i?Math.round(r/i*100):0,b=[...o.entries()].sort(([A],[N])=>A-N).map(([A,N])=>{const M=N.totalActions?Math.round(N.completedActions/N.totalActions*100):0,G=N.componentCount?N.onTrackComponents/N.componentCount:0,ne=G>=.75&&M>=50?"Green":G>=.4||M>=25?"Amber":"Red";return{phase:A,componentCount:N.componentCount,assessedLenses:N.assessedLenses,totalLenses:N.totalLenses,onTrackComponents:N.onTrackComponents,actionCompletionPct:M,rag:ne}}),f=b.find(A=>A.onTrackComponents<A.componentCount),x=(f==null?void 0:f.phase)||((P=b[b.length-1])==null?void 0:P.phase)||1,d=Aa(t,(A,N)=>{var M;return(M=n.currentDraft[A])==null?void 0:M[N]},x);return{totalCurrent:s,assessedCount:a,totalExpected:g,overallPct:h,totalActions:i,completedActions:r,actionCompletionPct:l,currentPhase:x,phaseSummaries:b,nextSteps:d}}function Gi(n,t,s,a){return t.map(i=>{let r=0,o=0;return s.forEach(g=>{g.lenses.includes(i)&&(r+=Number(a(g.id,i).score||0),o+=1)}),o?Number((r/o).toFixed(1)):0})}function Ui(n,t){return n.map(s=>{let a=0,i=0;return t.forEach(r=>{r.lenses.includes(s)&&(a+=r.target,i+=1)}),i?Number((a/i).toFixed(1)):0})}function Mi(n,t,s,a){const i=Gi(n,t,s,a),r=Ui(t,s);return{labels:t,datasets:[{label:"Current Score",data:i,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",borderWidth:2,pointRadius:4,pointHoverRadius:6},{label:"Target",data:r,borderColor:"#00A499",backgroundColor:"rgba(0, 164, 153, 0.05)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function Vi(n,t,s){const a=s&&es[s]?s:null,i=o=>o<=0?"#768692":o<1.5?"#AE2521":o<2.5?"#FFB81C":o<3.5?"#005EB8":o<4.5?"#330072":"#00A499",r=n.map(o=>{const g=o.lenses.reduce((c,h)=>c+Number(t(o.id,h).score||0),0);return Number((g/o.lenses.length).toFixed(1))});return{labels:n.map(o=>o.label),datasets:[{label:"Current Average Readiness",data:r,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.12)",borderWidth:2,pointRadius:4,pointHoverRadius:6,pointBackgroundColor:r.map(i),pointBorderColor:r.map(i)},{label:a?`Exemplar (Phase ${a})`:"Target Average",data:n.map(o=>Et(o.id,a||void 0,o.target)),borderColor:"#94a3b8",backgroundColor:"rgba(148, 163, 184, 0.06)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function Hi(n,t,s){const a=[],i=new Set,r=(o,g,c)=>{const h=`${c.id}:${o}:${g}`;if(i.has(h))return;i.add(h);const l=t(o);a.push({compId:o,component:l.label,lens:g,action:{...c}})};return Object.keys(n.currentDraft).forEach(o=>{Object.keys(n.currentDraft[o]).forEach(g=>{(s(o,g).actions||[]).forEach(h=>{(h.linkedTargets&&h.linkedTargets.length?h.linkedTargets:[{componentId:o,lens:g}]).forEach(b=>{r(b.componentId,b.lens,h)})})})}),a}function Wi(n,t,s){var c;const a=((c=n.objectives)==null?void 0:c[t])||[],i=h=>h.reduce((l,b)=>(l[b]=s(t,b).actions,l),{}),r=Array.from(new Set(a.flatMap(h=>h.linkedActions.map(l=>l.lens)))),o=i(r),g=a.filter(h=>Xt(h,o)==="Completed").length;return{total:a.length,completed:g}}const Bs=7*24*60*60*1e3,qi=30*24*60*60*1e3;function zi(n,t,s){const a=[];t.phaseSummaries.forEach(d=>{const P=hn[d.phase]||`Phase ${d.phase}`;a.push({id:`phase-${d.phase}-assessed`,category:"Phase",label:`Phase ${d.phase}: ${P} - fully assessed`,description:"Every lens across this phase's components has been scored.",completed:d.totalLenses>0&&d.assessedLenses===d.totalLenses}),a.push({id:`phase-${d.phase}-on-track`,category:"Phase",label:`Phase ${d.phase}: ${P} - on track`,description:"Every component in this phase is scoring at or above its exemplar target for where the programme is now.",completed:d.componentCount>0&&d.onTrackComponents===d.componentCount})});const i=Object.values(n.currentDraft).flatMap(d=>Object.values(d).flatMap(P=>P.actions||[]));a.push({id:"all-actions-owned",category:"Ownership",label:"Every action has an owner",description:"No actions are left unassigned.",completed:i.length>0&&i.every(d=>{var P;return!!((P=d.owner)!=null&&P.trim())})});const r=Object.values(n.objectives||{}).flat();a.push({id:"all-outcomes-owned",category:"Ownership",label:"Every outcome has an owner",description:"No outcomes are left unassigned.",completed:r.length>0&&r.every(d=>{var P;return!!((P=d.owner)!=null&&P.trim())})});const o=Date.now(),g=n.auditLog||[],c=g.filter(d=>o-new Date(d.timestamp).getTime()<=Bs);a.push({id:"active-this-week",category:"Cadence",label:"Active this week",description:"At least one update has been made in the last 7 days.",completed:c.length>0});const h=new Set;g.forEach(d=>{const P=Math.floor((o-new Date(d.timestamp).getTime())/Bs);P>=0&&P<4&&h.add(P)}),a.push({id:"four-week-cadence",category:"Cadence",label:"Steady progress: updated every week for a month",description:`${h.size}/4 of the last 4 weeks have at least one update.`,completed:h.size>=4}),a.push({id:"month-finalised",category:"Cadence",label:"This month finalised",description:"The current month has a finalised snapshot, so progress this month is captured for the trend.",completed:(n.history||[]).some(d=>d.monthLabel===s)});const l=n.orgProfile.teamMembers||[];a.push({id:"team-roster-started",category:"Team",label:"Team roster started",description:"At least 2 team members have been added.",completed:l.length>=2});const b=g.filter(d=>o-new Date(d.timestamp).getTime()<=qi),f=new Set(b.map(d=>d.actor));a.push({id:"multiple-contributors",category:"Team",label:"Multiple contributors this month",description:"More than one person has made updates in the last 30 days.",completed:f.size>=2});const x=new Set(i.map(d=>{var P;return(P=d.owner)==null?void 0:P.trim().toLowerCase()}).filter(d=>!!d));return a.push({id:"ownership-spread",category:"Team",label:"Ownership spread across the team",description:"Actions are owned by more than one person, not concentrated on one.",completed:x.size>=2}),a}const Yi=`Pathway 1 - We are starting $projectName for the first time
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
adoption.`,Bt={"Pathway 1 - We are starting product for the first time":"pathway-1","Pathway 2 - We have piloted product and need to scale up":"pathway-2","Pathway 3 - product is live but adoption is patchy":"pathway-3","Pathway 1 - Pilot":"pathway-1","Pathway 2 - Scale up":"pathway-2","Pathway 3 - Reassess":"pathway-3"},Ki={vision:"Vision",case_for_change:"Case for Change",sponsorship:"Senior Sponsorship and Governance",change_network:"Change Network",benefits:"Benefits and WIIFM",stakeholder:"Stakeholder Engagement and Communication",process_change:"Process Change and Ways of Working",change_impact:"Change Impact and Risk",risk_management:"Change Impact and Risk",skills_learning:"Skills, Learning, Capability and Confidence",capability:"Skills, Learning, Capability and Confidence",change_adoption:"Change Adoption",transfer_bau:"Transfer to BAU",reinforcement:"Reinforcement",resistance:"Resistance",cm_readiness:"Readiness and Planning",org_maturity:"Organisational Change Management Maturity"};function Ji(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function Ft(n){return n.replace(/\bAVT\b/g,"${productName}")}function Xi(n){const t=n.split(/\r?\n/).map(i=>i.trim()),s={};let a=0;for(;a<t.length;){const i=t[a],r=Bt[i];if(!r){a+=1;continue}for(a+=1;a<t.length&&!t[a];)a+=1;if(a>=t.length)break;const o=t[a];for(a+=1;a<t.length&&(!t[a]||t[a]==="Are you on track?");)a+=1;let g="";if(a<t.length&&t[a].startsWith("Descriptor:"))for(g=Ft(t[a].replace("Descriptor:","").trim()),a+=1;a<t.length&&t[a]&&!t[a].startsWith("☐")&&!t[a].startsWith("ARE YOU ON TRACK?")&&!Bt[t[a]];)g=Ft(`${g} ${t[a]}`.trim()),a+=1;const c=[];for(;a<t.length&&t[a].startsWith("☐");){const h=Ft(t[a].replace(/^☐\s*/,"").trim()),l=`${r}:${Ji(o)}:${c.length+1}`;c.push({key:l,text:h}),a+=1}for(s[o]||(s[o]={}),s[o][r]={domain:o,descriptor:g,checklist:c};a<t.length&&t[a]&&!Bt[t[a]];)a+=1}return s}const Qi=Xi(Yi);function Zi(n){return Ki[n]||null}function cs(n,t){var a;const s=Zi(n);return s&&((a=Qi[s])==null?void 0:a[t])||null}function _a(n,t){if(!t||t.checklist.length===0)return{status:"on-track",completionPct:100,checkedCount:0,totalCount:0};const s=t.checklist.length,a=new Set(n),i=t.checklist.filter(o=>a.has(o.key)).length,r=Math.round(i/s*100);return r>=80?{status:"on-track",completionPct:r,checkedCount:i,totalCount:s}:r>=45?{status:"attention",completionPct:r,checkedCount:i,totalCount:s}:{status:"off-track",completionPct:r,checkedCount:i,totalCount:s}}function eo(n){const t=_a(n.checkedItemKeys,n.rule);return!n.rule||n.rule.checklist.length===0?{status:n.averageScore>=n.targetScore?"on-track":"attention",completionPct:t.completionPct,checkedCount:t.checkedCount,totalCount:t.totalCount}:t.status==="off-track"?t:n.averageScore<Math.max(1,n.targetScore-1)&&t.status!=="on-track"?{...t,status:"attention"}:t}const no=["Strategic Direction and Leadership","People Experience and Culture","Planning and Risk","Skills and Behaviour","Process and Sustainment"],ds={"Strategic Direction and Leadership":{outcome:"Provide a clear and unifying direction for the change, backed by visible, empowered leadership that removes barriers, prioritises resources, and drives accountability.",whatGoodLooksLike:"Leaders speak with one voice, consistently reinforcing the vision and outcomes. Decisions are timely, transparent, and aligned to strategic priorities. Governance is purposeful, with clear roles and escalations. Everyone understands why the change is happening and how it connects to organisational goals."},"People Experience and Culture":{outcome:"Create the conditions where people feel informed, supported, safe, and motivated, creating a culture that embraces the change rather than resists it.",whatGoodLooksLike:"Staff feel involved, heard, and respected. Communication is timely, honest, and tailored to different roles. People know how the change affects them and feel psychologically safe to raise concerns. Change Champions are active, engagement is high, and belief improves over time. Behaviours begin to shift organically as trust grows."},"Planning and Risk":{outcome:"Use evidence, data, and structured analysis to plan the change effectively, anticipate impacts, manage risks, and inform decision-making throughout delivery.",whatGoodLooksLike:"Impacts are well understood and documented. Risks are identified early and mitigated proactively. Baselines and KPIs are established before implementation, with benefits tracked throughout. Pilots and readiness checks ensure no surprises. Decisions are grounded in insight, not opinion."},"Skills and Behaviour":{outcome:"Give people the capabilities, confidence, and behavioural habits they need to adopt the new ways of working consistently and sustainably.",whatGoodLooksLike:"Staff are trained, assessed, and supported in ways that match real-world workflows. New behaviours are clearly defined, reinforced by leaders, and evident in day-to-day practice. Change Champions and Super-users are active; confidence grows over time; and requests for support decrease as competence increases."},"Process and Sustainment":{outcome:"Embed the change into operational processes, ensuring it becomes the way we do things, and create mechanisms for continuous improvement and long-term stability.",whatGoodLooksLike:"Updated SOPs, workflows, and ownership structures are in place and being followed. Issues are resolved quickly. Benefits are monitored and reported regularly. Improvements continue beyond go-live, with clear BAU ownership. The change stabilises and performance gains hold or increase over time."}},to={vision:"Defines the future state and why the change matters.",case_for_change:"Builds a clear, credible rationale and expected benefits.",sponsorship:"Secures visible leadership ownership, governance, and decisions.",change_network:"Builds and mobilises change agents and local champions.",benefits:"Tracks baseline, benefits ownership, and value realisation.",change_impact:"Assesses who is impacted and the scale of change required.",risk_management:"Identifies, tracks, and mitigates adoption and delivery risks.",cm_readiness:"Confirms readiness, sequencing, and change planning discipline.",stakeholder:"Plans and delivers stakeholder engagement and communications.",resistance:"Anticipates and addresses resistance with practical interventions.",skills_learning:"Designs learning, support, and reinforcement for role readiness.",capability:"Builds confidence and competence to adopt new ways of working.",change_adoption:"Measures uptake and consistency of new behaviours in practice.",process_change:"Embeds workflow changes into everyday operational delivery.",reinforcement:"Sustains momentum so adoption does not decay after launch.",org_maturity:"Improves long-term organisational change capability and maturity.",transfer_bau:"Transitions ownership into BAU with clear accountability."};function so(n){return to[n]||"Component description not yet defined."}function ao(n){const s=ds[n];return s?`This lens ${s.outcome.charAt(0).toLowerCase()}${s.outcome.slice(1)}`:"This lens provides an additional perspective on how each component is landing across teams and services."}const Fs={small:560,medium:680,large:1e3};function io(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Gs(n,t,s,a,i){return i?"Blue":s<=0?"N/A":a<=0?"Amber":n>=t&&a<s?"Green":ka(n,t)}const oo={"N/A":"text-slate-600 bg-slate-200",Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},Us=["#0f766e","#0369a1","#7c3aed","#b45309","#be123c"],ro=[{score:0,label:"Pre-Emergent",color:"#768692"},{score:1,label:"Emerging",color:"#AE2521"},{score:2,label:"Developing",color:"#FFB81C"},{score:3,label:"Maturing",color:"#005EB8"},{score:4,label:"Embedding",color:"#330072"},{score:5,label:"Thriving",color:"#00A499"}];function lo({store:n,components:t,lenses:s,metrics:a,getEntry:i,onComponentClick:r,pathway:o,pathwayChecks:g,onNavigate:c,onOpenLensInfo:h,onOpenOnboarding:l,colorAccessibilityMode:b="standard",darkMode:f=!1,phaseFocusMode:x="auto",manualPhaseFocus:d,onPhaseFocusModeChange:P,onManualPhaseFocusChange:A,onResetPhaseFocus:N,componentRadarVisible:M=!0,onComponentRadarVisibleChange:G,componentRadarSize:ne="medium",onComponentRadarSizeChange:v}){const k=bn("dashboard"),[q,K]=u.useState(""),[I,ae]=u.useState("all"),[J,de]=u.useState(()=>a.currentPhase),[L,te]=u.useState("all"),[ue,re]=u.useState("score"),[me,O]=u.useState("desc"),[oe,ge]=u.useState(!1),[Ie,Te]=u.useState(!1),we=u.useMemo(()=>[...new Set(t.map(j=>j.phase))].sort((j,Q)=>j-Q),[t]),Me=a.currentPhase,Ae=x==="manual"&&d&&we.includes(d)?d:Me,[un,ln]=u.useState(!0),Pe=u.useMemo(()=>n.history.length>0?n.history[n.history.length-1]:null,[n.history]),y=Pe!==null?a.overallPct-Pe.overallPercentage:null,T=u.useMemo(()=>{if(a.assessedCount===0)return!1;const j=new Date().toLocaleString("en-GB",{month:"short",year:"numeric"});return!n.history.some(Q=>Q.monthLabel===j)},[n.history,a.assessedCount]),E=u.useMemo(()=>{const j=new Date;j.setHours(0,0,0,0);const Q=new Date(j);Q.setDate(j.getDate()+7);const le=[];return t.forEach(be=>{be.lenses.forEach(Ge=>{i(be.id,Ge).actions.forEach(he=>{if(!he.dueDate||he.status==="Completed"||he.status==="Cancelled")return;const ve=new Date(he.dueDate);isNaN(ve.getTime())||ve<=Q&&le.push({action:he,componentLabel:be.label,componentId:be.id,isOverdue:ve<j})})})}),le.sort((be,Ge)=>new Date(be.action.dueDate).getTime()-new Date(Ge.action.dueDate).getTime())},[t,i,n.currentDraft]),R=u.useMemo(()=>{const j=q.trim().toLowerCase();return t.map(Q=>{let le=0,be=!0,Ge=0,he=0;Q.lenses.forEach(nn=>{const Ee=i(Q.id,nn),He=Number(Ee.score||0);le+=He,He!==5&&(be=!1);const cn=Ee.actions||[];Ge+=cn.length,he+=cn.filter(S=>S.status==="Completed").length});const ve=Number((le/Q.lenses.length).toFixed(1)),fe=Et(Q.id,Ae,Q.target),en=ve===0?"not-started":ve>=fe?"on-track":"below-target";let pn=null;if(Pe){let nn=0;Q.lenses.forEach(cn=>{var S,_;nn+=Number(((_=(S=Pe.data[Q.id])==null?void 0:S[cn])==null?void 0:_.score)||0)});const Ee=Number((nn/Q.lenses.length).toFixed(1)),He=Number((ve-Ee).toFixed(1));He!==0&&(pn=He)}return{component:Q,avgNum:ve,exemplarTarget:fe,status:en,delta:pn,actionCount:Ge,completedActionCount:he,allLensesLevelFive:be}}).filter(({component:Q,status:le})=>I!=="all"&&le!==I||J!=="all"&&Q.phase!==J?!1:j?Q.label.toLowerCase().includes(j):!0).sort((Q,le)=>{let be=0;return ue==="name"?be=Q.component.label.localeCompare(le.component.label):ue==="target"?be=Q.component.target-le.component.target:be=Q.avgNum-le.avgNum,me==="asc"?be:-be})},[t,J,Ae,i,Pe,q,ue,me,I]);u.useMemo(()=>{let j=0,Q=0;t.forEach(be=>{var ve;const Ge=cs(be.id,o),he=_a(((ve=g[be.id])==null?void 0:ve[o])||[],Ge);j+=he.totalCount,Q+=he.checkedCount});const le=j>0?Math.round(Q/j*100):100;return{required:j,checked:Q,pct:le}},[t,o,g]);const U=u.useMemo(()=>{const j=[];return q.trim()&&j.push(`Search: ${q.trim()}`),I!=="all"&&j.push(`Status: ${I.replace("-"," ")}`),J!=="all"&&j.push(`Phase: ${J}`),(ue!=="score"||me!=="desc")&&j.push(`Sort: ${ue} (${me})`),j},[J,q,ue,me,I]),ze=()=>{K(""),ae("all"),de("all"),re("score"),O("desc"),ge(!1)},Ye=a.phaseSummaries.find(j=>j.phase===Ae),Fe=(Ye==null?void 0:Ye.rag)||"Red",Le=Fe.toLowerCase(),Ve=b==="color-blind-friendly"?{"N/A":"text-slate-700 bg-slate-200",Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"}:oo;return e.jsxs("div",{className:`adoption-dashboard max-w-6xl mx-auto ${f?"theme-dark":"theme-light"}`,children:[un&&E.length>0&&e.jsx("div",{className:"mb-6 rounded-lg border border-red-200 bg-red-50 p-4",children:e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-sm font-semibold text-red-800 mb-2",children:[E.filter(j=>j.isOverdue).length>0&&`${E.filter(j=>j.isOverdue).length} overdue action${E.filter(j=>j.isOverdue).length>1?"s":""}`,E.filter(j=>j.isOverdue).length>0&&E.filter(j=>!j.isOverdue).length>0&&", ",E.filter(j=>!j.isOverdue).length>0&&`${E.filter(j=>!j.isOverdue).length} due within 7 days`]}),e.jsxs("ul",{className:"space-y-1.5",children:[E.slice(0,3).map(j=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`shrink-0 text-xs font-bold px-1.5 py-0.5 rounded ${j.isOverdue?"bg-red-200 text-red-800":"bg-amber-100 text-amber-800"}`,children:j.isOverdue?"Overdue":"Due soon"}),e.jsxs("span",{className:"text-xs text-slate-700",children:[e.jsx("button",{onClick:()=>r(j.componentId),className:"font-medium text-[#005eb8] hover:underline mr-1",children:j.componentLabel}),"— ",j.action.text,j.action.dueDate&&e.jsxs("span",{className:"text-slate-400 ml-1",children:["(due"," ",new Date(j.action.dueDate).toLocaleDateString("en-GB",{day:"numeric",month:"short"}),")"]})]})]},j.action.id)),E.length>3&&e.jsxs("li",{className:"text-xs text-slate-500 pl-1",children:["+ ",E.length-3," more - see the Action Tracker for the full list."]})]})]}),e.jsx("button",{onClick:()=>ln(!1),className:"shrink-0 text-slate-400 hover:text-slate-600 text-xl leading-none","aria-label":"Dismiss",children:"×"})]})}),e.jsxs("div",{className:"mb-1 flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${f?"text-slate-100":"text-slate-800"}`,children:"Adoption Engine Dashboard"}),e.jsx(Sn,{onClick:k.reopen,darkMode:f})]}),l?e.jsx("button",{type:"button",onClick:l,className:"rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Show introduction again"}):null]}),e.jsxs("p",{className:`text-sm mb-6 ${f?"text-slate-300":"text-slate-600"}`,children:["This tracks how ready ",n.orgProfile.projectName||"your programme"," is for adoption, based on ",t.length," change-management components, each assessed through up to"," ",s.length," lenses."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[e.jsxs("div",{className:`${f?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${f?"text-slate-300":"text-slate-500"}`,children:"Live Delivery Progress"}),e.jsxs("div",{className:"flex items-end gap-3",children:[e.jsxs("span",{className:"text-4xl font-bold text-[#005eb8]",children:[a.overallPct,"%"]}),y!==null&&e.jsxs("span",{className:`text-sm font-semibold mb-1 ${y>0?"text-green-600":y<0?"text-red-500":"text-slate-400"}`,children:[y>0?"↑":y<0?"↓":"="," ",Math.abs(y),"% vs last month"]})]}),e.jsx("div",{className:"mt-4 w-full bg-slate-100 rounded-full h-3 relative overflow-hidden",children:e.jsx("div",{className:"absolute top-0 left-0 h-full bg-[#005eb8]",style:{width:`${a.overallPct}%`}})}),e.jsx("div",{className:"flex justify-between text-xs mt-2 text-slate-400",children:e.jsx("span",{children:"Derived from current working data across all components."})})]}),e.jsxs("div",{className:`dashboard-metric-card dashboard-metric-card--phase dashboard-metric-card--${Le} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:"dashboard-metric-card__label text-sm font-medium mb-1",children:"Current Phase Focus"}),e.jsxs("div",{className:"mb-2 flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>P==null?void 0:P("auto"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${x==="auto"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Auto"}),e.jsx("button",{type:"button",onClick:()=>P==null?void 0:P("manual"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${x==="manual"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Manual"}),x==="manual"?e.jsx("select",{value:Ae,onChange:j=>A==null?void 0:A(Number(j.target.value)),className:"rounded-md border border-white/50 bg-white/90 px-2 py-1 text-xs font-medium text-slate-800","aria-label":"Manual phase focus",children:we.map(j=>e.jsx("option",{value:j,children:hn[j]||`Phase ${j}`},j))}):null,x==="manual"&&N?e.jsx("button",{type:"button",onClick:N,className:"rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100",children:"Reset to suggested"}):null]}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsx("span",{className:"dashboard-metric-card__headline text-4xl font-bold",children:hn[Ae]||`Phase ${Ae}`})}),e.jsxs("p",{className:"dashboard-metric-card__description text-sm mt-2",children:[Fe," status based on delivery progress and action completion.",x==="manual"?` Suggested phase is ${hn[Me]||`Phase ${Me}`}.`:""]})]}),e.jsxs("div",{className:`${f?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${f?"text-slate-300":"text-slate-500"}`,children:"Action Completion"}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsxs("span",{className:`text-4xl font-bold ${f?"text-slate-100":"text-slate-700"}`,children:[a.actionCompletionPct,"%"]})}),e.jsxs("p",{className:`text-sm mt-2 ${f?"text-slate-300":"text-slate-500"}`,children:[a.completedActions," actions completed. Keep it up!"]})]})]}),T&&e.jsxs("div",{className:"dashboard-callout dashboard-callout--snapshot rounded-lg border p-4 flex items-center gap-3 mb-8",children:[e.jsx("span",{className:"dashboard-callout__icon text-xl shrink-0",children:"📅"}),e.jsxs("p",{className:"dashboard-callout__body text-sm",children:[e.jsx("strong",{children:"This month hasn't been recorded yet."})," Use"," ",e.jsx("span",{className:"font-semibold",children:"'Finalise Month'"})," in the header to snapshot today's progress and build your delivery trajectory."]})]}),a.assessedCount===0?e.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-8 border border-slate-200 mb-8 text-center",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800",children:"Getting started"}),e.jsx("p",{className:"text-sm text-slate-600 mt-2 max-w-xl mx-auto",children:"Nothing has been assessed yet, so there's nothing to chart. Set up your Project first, then start scoring your first component to see your readiness build up here."}),e.jsxs("div",{className:"mt-4 flex items-center justify-center gap-3",children:[c?e.jsx("button",{type:"button",onClick:()=>c("project-details"),className:"rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Set up your Project"}):null,t[0]?e.jsx("button",{type:"button",onClick:()=>r(t[0].id),className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Start your first assessment"}):null]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${f?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-1 ${f?"text-slate-100":"text-slate-800"}`,children:"Phase Progress (RAG)"}),e.jsxs("p",{className:`text-sm mb-4 ${f?"text-slate-300":"text-slate-500"}`,children:["Phases run 1 to 5, from early readiness at go-live through to fully embedding the change."," ",c?e.jsx("button",{type:"button",onClick:()=>c("cm-guide"),className:"font-medium text-[#005eb8] hover:underline",children:"See Adoption Engine Onboarding"}):null]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:a.phaseSummaries.map(j=>{const Q=j.rag==="Green"?"bg-green-100 text-green-700":j.rag==="Amber"?"bg-amber-100 text-amber-700":"bg-red-100 text-red-700",le=j.totalLenses?Math.round(j.assessedLenses/j.totalLenses*100):0;return e.jsxs("div",{className:`rounded-md border p-4 ${f?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:`font-semibold ${f?"text-slate-100":"text-slate-800"}`,children:hn[j.phase]||`Phase ${j.phase}`}),e.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded ${Q}`,children:j.rag})]}),e.jsxs("p",{className:`text-xs ${f?"text-slate-300":"text-slate-600"}`,children:[j.onTrackComponents,"/",j.componentCount," components on target"]}),e.jsxs("p",{className:`text-xs mt-1 ${f?"text-slate-300":"text-slate-600"}`,children:[le,"% lens coverage, ",j.actionCompletionPct,"% actions complete"]})]},j.phase)})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"order-2 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8",children:[e.jsxs("div",{className:`${f?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border flex flex-col`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-4 ${f?"text-slate-100":"text-slate-800"}`,children:"Readiness Trajectory"}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${f?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:n.history.length>0?e.jsx("canvas",{id:"adoption-line-chart"}):e.jsx("div",{className:"text-center text-slate-400",children:e.jsx("p",{children:"No historical data yet. Finalise your first month to generate trends."})})})]}),e.jsxs("div",{className:`${f?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border flex flex-col`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${f?"text-slate-100":"text-slate-800"}`,children:"Strategic Lenses Spread"}),h&&s[0]?e.jsx("button",{type:"button",onClick:()=>h(s[0]),className:"text-xs font-medium text-[#005eb8] hover:underline",children:"What's a lens?"}):null]}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${f?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:e.jsx("canvas",{id:"adoption-radar-chart"})}),e.jsxs("div",{className:`${f?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mt-4 rounded-md border p-3`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${f?"text-slate-300":"text-slate-600"}`,children:"Lens key"}),e.jsx("div",{className:"mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2",children:s.map((j,Q)=>e.jsxs("div",{className:`flex items-center gap-2 text-xs ${f?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full",style:{backgroundColor:Us[Q%Us.length]},"aria-hidden":"true"}),e.jsx("span",{children:j})]},`lens-key-${j}`))})]}),e.jsx("p",{className:`text-xs text-center mt-4 ${f?"text-slate-300":"text-slate-500"}`,children:"Visualises your current draft readiness score averaged across the 5 strategic lenses against their specific target requirements."})]})]}),e.jsxs("div",{className:`order-1 ${f?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"mb-4 flex w-full flex-col gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:`text-lg font-semibold ${f?"text-slate-100":"text-slate-800"}`,children:"Change Component Radar"}),e.jsx("p",{className:`text-xs mt-1 ${f?"text-slate-300":"text-slate-500"}`,children:"Show or hide the change-component readiness radar, then use the overview list below to drill into delivery status."})]}),e.jsxs("div",{className:"flex w-full flex-wrap items-center justify-end gap-2",children:[M?e.jsx("div",{role:"group","aria-label":"Change component radar size",className:"flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-medium",children:["small","medium","large"].map(j=>e.jsx("button",{type:"button",onClick:()=>v==null?void 0:v(j),"aria-pressed":ne===j,className:`px-3 py-2 capitalize transition-colors ${ne===j?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:j},j))}):null,e.jsx("button",{type:"button",onClick:()=>G==null?void 0:G(!M),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-white",children:M?"Hide change component radar":"Show change component radar"})]})]}),M?e.jsxs("div",{className:`w-full ${f?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("div",{className:`mx-auto flex items-center justify-center rounded border p-2 ${f?"border-slate-700 bg-slate-950":"border-slate-100 bg-white"}`,style:{height:Fs[ne],maxWidth:Fs[ne]+120},children:e.jsx("canvas",{id:"adoption-component-radar-chart",className:"block h-full w-full"})}),e.jsx("div",{id:"radar-legend",className:`mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm ${f?"text-slate-300":"text-slate-600"}`,children:ro.map(j=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mr-2 h-3 w-3 rounded-full",style:{backgroundColor:j.color}}),e.jsxs("span",{children:[j.score," = ",j.label]})]},j.score))}),e.jsx("p",{className:`mt-4 text-center text-xs ${f?"text-slate-300":"text-slate-500"}`,children:"Visualises the average readiness score for each component against the phase exemplar profile."})]}):null,e.jsxs("div",{className:"mt-4 w-full space-y-3",children:[e.jsxs("p",{className:`text-xs ${f?"text-slate-300":"text-slate-500"}`,children:["BRAG scoring is used for the change component overview:",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-sky-100 text-sky-800",children:"Blue"})," = every lens is level 5,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-green-100 text-green-800",children:"Green"})," = on target,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-red-100 text-red-800",children:"Red"})," = behind target dates,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-amber-100 text-amber-800",children:"Amber"})," = at risk / nearing deadline."]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:q,onChange:j=>K(j.target.value),placeholder:"Search components...",className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"}),e.jsxs("select",{value:I,onChange:j=>ae(j.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All statuses"}),e.jsx("option",{value:"not-started",children:"Not started"}),e.jsx("option",{value:"below-target",children:"Below target"}),e.jsx("option",{value:"on-track",children:"On track"})]}),e.jsxs("select",{value:J,onChange:j=>de(j.target.value==="all"?"all":Number(j.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All phases"}),we.map(j=>e.jsx("option",{value:j,children:hn[j]||`Phase ${j}`},j))]})]}),e.jsx(ja,{showAdvancedControls:oe,onToggleAdvanced:()=>ge(j=>!j),onReset:ze,resultText:`Showing ${R.length} components`,activeFilters:U,activeFiltersAriaLabel:"Active component filters",darkMode:f}),oe?e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-md border border-slate-200 bg-slate-50 p-3",children:[e.jsxs("select",{value:ue,onChange:j=>re(j.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"score",children:"Sort by score"}),e.jsx("option",{value:"name",children:"Sort by name"}),e.jsx("option",{value:"target",children:"Sort by target"})]}),e.jsx("button",{type:"button",onClick:()=>O(j=>j==="asc"?"desc":"asc"),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white transition-colors",children:me==="asc"?"Ascending":"Descending"})]}):null]}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:[R.map(({component:j,avgNum:Q,exemplarTarget:le,actionCount:be,completedActionCount:Ge,delta:he,allLensesLevelFive:ve})=>{const fe=Gs(Q,le,be,Ge,ve),en=fe==="Red"?"↓":Q>=le?"→":Q<=0?"↑":"↗",pn=fe==="Red"?"text-red-500":Q>=le?f?"text-slate-300":"text-slate-500":"text-amber-600";return e.jsxs("button",{onClick:()=>r(j.id),title:so(j.id),className:`flex justify-between items-center p-3 rounded-md transition-colors group text-left ${f?"bg-slate-900 border border-slate-700 hover:border-blue-400":"bg-slate-50 border border-slate-100 hover:border-blue-300"}`,children:[e.jsx("span",{className:`text-sm font-medium truncate pr-2 group-hover:text-[#005eb8] ${f?"text-slate-100":"text-slate-700"}`,children:j.label}),e.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[e.jsx("span",{className:`text-xs font-semibold ${pn}`,title:Q>=le?"On or above expected readiness for phase focus":Q<=0?"Not started: raise towards expected readiness":"Below expected readiness: continue improving","aria-label":Q>=le?"At expected readiness":Q<=0?"Not started, increase readiness":"Below expected readiness",children:en}),he!==null&&e.jsxs("span",{className:`text-[11px] font-semibold ${he>0?"text-green-600":"text-red-400"}`,title:"Change versus last finalised month",children:[he>0?"+":"",he.toFixed(1)]}),e.jsx("span",{className:`text-xs font-bold px-2.5 py-1 rounded ${Ve[fe]}`,children:fe})]})]},j.id)}),!R.length&&e.jsx("div",{className:`col-span-full rounded-md border border-dashed p-6 text-sm ${f?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-500"}`,children:"No components match the current filters."})]})]})]}),e.jsxs("div",{className:`${f?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h3",{className:`text-lg font-semibold ${f?"text-slate-100":"text-slate-800"}`,children:"Lenses and which components they apply to"}),e.jsx("button",{type:"button",onClick:()=>Te(j=>!j),className:"inline-flex items-center justify-center rounded-full p-1 text-slate-500 hover:text-[#005eb8]","aria-label":"Explain lenses and components",title:"Explain lenses and components",children:e.jsx(io,{})})]}),Ie?e.jsx("p",{className:"mt-2 text-xs text-slate-600 max-w-3xl",children:"A component is the change topic you are delivering (for example, Vision). A lens is the angle used to assess that component. For example, Vision is reviewed through Strategic Direction and Leadership and People Experience and Culture to check both leadership alignment and whether people understand and believe in the vision."}):null]}),e.jsxs("select",{value:L,onChange:j=>te(j.target.value==="all"?"all":Number(j.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:w-40",children:[e.jsx("option",{value:"all",children:"All phases"}),we.map(j=>e.jsx("option",{value:j,children:hn[j]||`Phase ${j}`},j)),'"']})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(j=>{const Q=t.filter(le=>le.lenses.includes(j)).filter(le=>L==="all"||le.phase===L);return Q.length?e.jsxs("div",{className:`rounded-md p-4 ${f?"border border-slate-700 bg-slate-900":"border border-slate-100 bg-slate-50"}`,children:[e.jsx("h4",{className:"font-bold text-sm text-[#005eb8] mb-3",children:j}),e.jsx("p",{className:`mb-3 text-xs ${f?"text-slate-300":"text-slate-600"}`,children:ao(j)}),e.jsx("ul",{className:"space-y-2",children:Q.map(le=>{const be=i(le.id,j),Ge=Number(be.score||0),he=Et(le.id,Ae,le.target),ve=be.actions||[],fe=Gs(Ge,he,ve.length,ve.filter(en=>en.status==="Completed").length,!1);return e.jsxs("li",{className:`text-xs flex justify-between items-center p-2 rounded ${f?"bg-slate-800 border border-slate-700":"bg-white border border-slate-100"}`,children:[e.jsx("span",{className:`truncate pr-2 font-medium ${f?"text-slate-100":"text-slate-700"}`,children:le.label}),e.jsx("button",{onClick:()=>r(le.id),className:`px-2.5 py-0.5 rounded font-bold ${Ve[fe]}`,children:fe})]},le.id)})})]},j):null})})]})]}),e.jsx(xn,{open:k.isOpen,onClose:k.close,title:"Adoption Engine Dashboard",darkMode:f,body:e.jsx("p",{children:"This tracks how ready your programme is for adoption, based on your change-management components, each assessed through several lenses. Use the filters and sort controls to focus on what needs attention, and click a component to open its assessment."})})]})}const $n={label:"Change Management Toolkit",url:"https://future.nhs.uk/CMN/view?objectId=129489733"};function us(n,t){var o,g,c,h,l;if(!t)return n;const s=(o=t.links)==null?void 0:o[n.key],a=(g=s==null?void 0:s.url)==null?void 0:g.trim(),i=((c=s==null?void 0:s.label)==null?void 0:c.trim())||n.label;return a?{...n,label:i,url:a}:((s==null?void 0:s.fallback)??"default")==="base"&&((l=(h=t.base)==null?void 0:h.url)!=null&&l.trim())?{...n,label:i,url:t.base.url.trim()}:{...n,label:i}}const co="nhs-guidance-workstreams",Oa={vision:["Vision"],case_for_change:["Case for Change"],sponsorship:["Senior Sponsorship & Governance"],change_network:["Change Network"],benefits:["Benefits"],change_impact:["Change Impact"],risk_management:["Risk Management"],cm_readiness:["Change Management Readiness & Planning"],stakeholder:["Stakeholder Engagement & Comms"],resistance:["Resistance Management"],skills_learning:["Skills/ Learning"],capability:["Change Management Capability"],change_adoption:["Reinforcement"],process_change:["Process change"],reinforcement:["Reinforcement"],org_maturity:["Change Management Capability"],transfer_bau:["Reinforcement"]},F=(n,t,s,a)=>({key:`fnhs_${n}`,label:t,url:`https://future.nhs.uk/CMN/view?objectId=${n}`,type:s,...a?{description:a}:{}}),Ra=[F("44704752","FuturesNHS Change Management Network","core","The wider NHS community for change management practice, discussion and shared resources.")],Vn={Vision:{inputs:[F("37515792","Vision for Change","core","Supports development and communication of a clear future vision."),F("34039056","Mind Map","core","Captures and organises stakeholder viewpoints when developing the vision."),F("34039088","Rich Picture and Storytelling","core","Creates a visual and narrative representation of the desired future state."),F("34039184","Sinek's Golden Circle","core","Structures the vision around why, how and what."),F("34037808","Systems Thinking","core","Supports consideration of the wider system when defining the future state."),F("34018288","Stakeholder Analysis Tool","core","Identifies the stakeholders who should help shape and validate the vision."),F("34039024","Sponsor Coalition Map","additional","Identifies leaders and visible supporters who can reinforce the vision."),F("69484112","SHIFT: A Strategic Change Management Approach","additional","Provides an additional strategic approach for shaping and aligning change.")]},"Case for Change":{inputs:[F("44287088","Case for Change","core","Supports creation of a clear and compelling rationale for change."),F("42608592","Beckhard and Harris' Change Formula","core","Tests whether the conditions needed to overcome the perceived cost of change are present."),F("34037360","Force Field Analysis","core","Identifies the forces driving and restraining the change."),F("34037232","Benefits Workshop","core","Brings stakeholders together to identify and develop the benefits of change."),F("34040176","Benefits Map","core","Links benefits, outcomes, enabling changes and strategic objectives."),F("45000208","What's in it for me? Benefits","core","Defines relevant benefits for each stakeholder group."),F("69191376","5 Whys Technique","additional","Supports root-cause exploration of the problem the change is intended to address."),F("34037712","SWOT Analysis","additional","Examines strengths, weaknesses, opportunities and threats relating to the change."),F("34037072","PESTLE Analysis","additional","Examines external factors influencing the need for change."),F("34037680","Porter's Five Forces","additional","Supports analysis of wider environmental and market pressures."),F("34037040","GAP Analysis","additional","Compares current and future states and identifies what needs to change."),F("42608624","AIDA Model","additional","Provides a structure for moving audiences from awareness towards action."),F("34037744","Kotter's 8 Steps","additional","Provides an additional framework for creating urgency and mobilising change."),F("34039024","Sponsor Coalition Map","additional","Identifies leaders who need to champion the case for change.")],deliverables:[F("44287088","A clear case for change communicated to all stakeholders","core")]},"Senior Sponsorship & Governance":{inputs:[F("34039024","Sponsor Coalition Map","core","Identifies senior leaders and visible supporters required to drive the change."),F("34037520","What Makes a Good Sponsor?","core","Supports sponsors to understand the behaviours expected of them."),F("34040240","RACI/RASCI Matrix","core","Clarifies governance roles, responsibilities and accountability."),F("34037552","Change Network","core","Connects senior sponsorship with change agents and champions."),F("42042672","Change Management Strategy","core","Defines the strategic approach and leadership responsibilities for change."),F("34018288","Stakeholder Analysis Tool","additional","Identifies influential stakeholders and required sponsor coverage."),F("34038032","Change Management Plan","additional","Translates governance and sponsorship responsibilities into planned activity."),F("69484112","SHIFT: A Strategic Change Management Approach","additional","Provides an additional strategic structure for leadership of change.")]},"Change Network":{inputs:[F("34037552","Change Network","core","Supports formation and operation of a network of change agents and champions."),F("34039024","Sponsor Coalition Map","core","Connects the change network with visible senior sponsors."),F("34018288","Stakeholder Analysis Tool","core","Helps ensure the network represents the right stakeholder groups."),F("34037520","What Makes a Good Sponsor?","core","Clarifies how sponsors should support and use the network."),F("34039408","Feedback Cycle","additional","Supports two-way feedback between the network, programme and affected staff."),F("69501968","Psychological Safety","additional","Supports an environment in which network members can raise concerns safely."),F("34040240","RACI/RASCI Matrix","additional","Clarifies the roles of sponsors, change agents and change champions."),F("34038672","User Surveys","additional","Provides additional evidence for themes surfaced by the change network.")]},Benefits:{inputs:[F("34037232","Benefits Workshop","core","Identifies and develops benefits with relevant stakeholders."),F("34040176","Benefits Map","core","Links benefits to outcomes, enabling changes and strategic objectives."),F("34030736","Benefits Realisation Plan","core","Defines baselines, measures, owners and arrangements for tracking benefits."),F("45000208","What's in it for me? Benefits","core","Translates organisational benefits into relevant stakeholder benefits."),F("69511824","Measuring Digital Adoption","core","Supports definition of adoption measures linked to intended benefits."),F("44287088","Case for Change","additional","Connects the benefits to the rationale and intended outcomes of the change."),F("34038608","Creating Short-Term Wins","additional","Uses early progress to demonstrate value and maintain momentum."),F("34038864","Celebrate Successes","additional","Recognises evidence that benefits and positive outcomes are emerging."),F("34038544","End of Pilot Report","additional","Captures pilot evidence relevant to benefits and wider rollout."),F("34038672","User Surveys","additional","Collects qualitative evidence about benefits and user experience.")]},"Change Impact":{inputs:[F("34037424","Change Impact Assessment","core","Assesses impacts on people, teams, processes and business units."),F("34039344","Impact Analysis","core","Supports structured analysis of intended and unintended impacts."),F("34037968","Heat Map","core","Provides a visual view of impact across business areas."),F("34037040","GAP Analysis","core","Identifies differences between current and future states."),F("34040208","McKinsey 7S Model","core","Examines alignment across interdependent organisational factors."),F("34037840","Process Mapping","additional","Identifies impacts created by changes between current and future processes."),F("34037392","Change Management Capability Review","additional","Assesses the capability implications of the future state."),F("34038000","Proof of Concept","additional","Provides early evidence about likely organisational and user impacts."),F("34037488","Training Impact Assessment","additional","Identifies high-level learning resource and cost implications.")]},"Risk Management":{inputs:[F("34037776","Risk Assessment","core","Identifies and assesses risks, issues and barriers to successful adoption."),F("34038640","Sustainability Risk Assessment","core","Identifies risks that could prevent the change from being sustained."),F("34037424","Change Impact Assessment","core","Provides evidence about impact-related risks and mitigation needs."),F("34037360","Force Field Analysis","core","Identifies forces that may support or obstruct the change."),F("34030736","Benefits Realisation Plan","additional","Helps identify and monitor risks to benefit realisation."),F("34037968","Heat Map","additional","Highlights areas where high impact and low readiness may create risk."),F("34307760","Resistance Management Plan","additional","Defines actions for managing resistance-related adoption risks."),F("69191376","5 Whys Technique","additional","Supports investigation of the root causes of risks and recurring issues.")]},"Change Management Readiness & Planning":{inputs:[F("42042672","Change Management Strategy","core","Sets the overall direction and approach for managing the change."),F("34038032","Change Management Plan","core","Defines activities, ownership and timescales required to build readiness."),F("34037040","GAP Analysis","core","Identifies the work required to move to the future state."),F("34037424","Change Impact Assessment","core","Provides impact and readiness evidence for change planning."),F("34038192","Change Implementation Plan","core","Defines implementation tasks, milestones and responsibilities."),F("34038576","Go Live Business Readiness Assessment","core","Assesses people, process and support readiness before go-live.")]}},Ms={},uo={},mo={Default:Vn,Product:Ms,AVT:Ms,EPR:uo};function go(){if(typeof window>"u")return[];try{const n=window.localStorage.getItem(co);if(!n)return[];const t=JSON.parse(n);return Array.isArray(t)?t.filter(s=>s&&typeof s.name=="string"&&s.name.trim()):[]}catch{return[]}}function po(n){const t=go().find(s=>s.name===n);return t?t.map:mo[n]||Vn}function ho(n,t,s,a,i=!0){var c,h,l;const r=((h=(c=po(n))==null?void 0:c[t])==null?void 0:h[s])||[],o=r.length>0?r:((l=Vn==null?void 0:Vn[t])==null?void 0:l[s])||[],g=i?o:o.filter(b=>b.type==="core");return a?g.map(b=>us(b,a)):g}function jt(n,t,s,a,i=!0){const r=Oa[t]||[],o=new Map;return r.forEach(g=>{ho(n,g,s,a,i).forEach(c=>{const h=`${c.label}::${c.url}`;o.has(h)||o.set(h,c)})}),[...o.values()]}const Vs={"not started":0,emerging:1,developing:2,embedding:3,adopted:4,thriving:5};function nt(n){return n.trim().replace(/\s+/g," ").toLowerCase()}function Pa(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function Hs(n){return n.trim().toLowerCase()}function fo(n){return n.replace(/&/g,"and").replace(/\s+/g," ").trim()}function bo(n){return typeof n=="string"&&wt.includes(n)}function Un(n){if(!n)return null;try{return JSON.parse(n)}catch{return null}}function ms(n,t,s,a){let i=0,r=!1,o=!1;for(let g=a;g<n.length;g+=1){const c=n[g];if(r){if(o){o=!1;continue}if(c==="\\"){o=!0;continue}c==='"'&&(r=!1);continue}if(c==='"'){r=!0;continue}if(c===t){i+=1;continue}if(c===s&&(i-=1,i===0))return n.slice(a,g+1)}return null}function xo(n,t=0){const s=n.indexOf("{",t);return s<0?null:ms(n,"{","}",s)}function Da(n,t=0){const s=n.indexOf("[",t);return s<0?null:ms(n,"[","]",s)}function Ws(n,t){const s=n.toLowerCase().indexOf(t.toLowerCase());return s<0?null:Da(n,s)}function So(n,t){const s=n.toLowerCase().indexOf(t.toLowerCase());return s<0?null:xo(n,s)}function vo(n){const t=[];for(let s=0;s<n.length;s+=1){if(n[s]!=="{")continue;const a=ms(n,"{","}",s);if(!a)continue;const i=Un(a);i&&typeof i=="object"&&!Array.isArray(i)&&t.push(i),s+=a.length-1}return t}function pt(n){return Array.isArray(n)?n.filter(t=>t&&typeof t=="object").map(t=>t).filter(t=>typeof t.id=="string"&&typeof t.name=="string"):[]}function Xn(n){return Array.isArray(n)?n.filter(t=>t&&typeof t=="object").map(t=>t).filter(t=>typeof t.fromStatus=="string"&&typeof t.toStatus=="string"&&typeof t.lens=="string"&&typeof t.action=="string"):[]}function yo(n){const t=Un(n);let s=[],a=[];if(t&&typeof t=="object"&&!Array.isArray(t)){const r=t;s=pt(r.outcomes),Array.isArray(r.actions)?a=Xn(r.actions):r.actions&&typeof r.actions=="object"&&(a=Xn(r.actions.actions))}else Array.isArray(t)&&(s=pt(t));if(s.length||(s=pt(Un(Ws(n,"outcomes")))),s.length||(s=pt(Un(Da(n)))),a.length||(a=Xn(Un(Ws(n,"actions")))),!a.length){const r=Un(So(n,"actions"));a=Xn(r==null?void 0:r.actions)}const i=vo(n);return a.length||(a=Xn(i)),s.length||(s=i.filter(r=>r&&typeof r=="object").map(r=>r).filter(r=>typeof r.id=="string"&&typeof r.name=="string"&&/_o\d+$/i.test(r.id)&&!("fromStatus"in r))),{outcomes:s,actions:a}}function qs(n,t){const a=n.trim().toLowerCase().match(/o\d+$/);return a?`${t}:${a[0]}`:`${t}:${Pa(n)}`}function wo(n,t){return`${n}:${t}`}function No(n){return n.includes(":auto-objective:")||n.startsWith("pathway:auto-objective:")}function Co(n){return{...n,actions:(n.actions||[]).map(t=>({...t,linkedTargets:(t.linkedTargets||[]).map(s=>({...s}))}))}}function ns(){return{score:0,justification:"",evidence:"",actions:[]}}function gs(n,t){return`${n}:${Pa(t.lens)}:${t.fromScore}-${t.toScore}:${t.actionIndex}`}function Eo(n,t,s){return{id:gs(t,s),text:s.actionText,actionType:s.actionType,owner:"",timescale:"",status:"Planned",phase:1,startDate:"",dueDate:"",notes:"",evidence:"",readinessScore:s.fromScore,linkedTargets:[{componentId:n,lens:s.lens}]}}function jo(n,t){return{id:n.id,text:n.text,owner:(t==null?void 0:t.owner)||"",timescale:(t==null?void 0:t.timescale)||"",notes:(t==null?void 0:t.notes)||"",evidence:(t==null?void 0:t.evidence)||"",linkedActions:[]}}function ko(n,t,s){const a=gs(t,s),i=(n.actions||[]).find(g=>g.id===a);if(i)return i.id;const r=nt(s.actionText),o=(n.actions||[]).find(g=>nt(g.text||"")===r);return(o==null?void 0:o.id)||null}function Xe(n,t){const{outcomes:s,actions:a}=yo(n),i=s.map(g=>({id:qs(String(g.id),t.outcomePrefix),text:String(g.name).trim()})),r=new Map;return{templates:a.reduce((g,c)=>{var A;const h=Vs[Hs(String(c.fromStatus||""))],l=Vs[Hs(String(c.toStatus||""))];if(h===void 0||l===void 0)return g;const b=fo(String(c.lens||"")),f=((A=t.lensAliases)==null?void 0:A[b])||b,x=String(c.action||"").trim();if(!f||!x)return g;const d=`${f}:${h}-${l}`,P=r.get(d)||0;return r.set(d,P+1),g.push({lens:f,fromScore:h,toScore:l,actionIndex:P,actionText:x,actionType:bo(c.category)?c.category:void 0,outcomeIds:(c.outcomeIds||[]).map(N=>qs(String(N),t.outcomePrefix))}),g},[]),outcomes:(i.length?i:t.fallbackOutcomes).slice(0,3)}}function Qe(n,t,s){const a={...n.currentDraft||{}},i={...n.objectives||{}},r=a[t.componentId]||{},o=`${t.outcomePrefix}:`,g=(i[t.componentId]||[]).filter(f=>f.id.startsWith(o)),c=(i[t.componentId]||[]).filter(f=>!f.id.startsWith(o)&&!No(f.id)),h=g.reduce((f,x)=>(f[x.id]=x,f),{}),l=Object.keys(r).reduce((f,x)=>(f[x]=Co(r[x]||ns()),f),{});s.templates.forEach(f=>{var v;const x=l[f.lens]||ns(),d=new Set((x.actions||[]).map(k=>nt(k.text||""))),P=gs(t.actionPrefix,f),A=wo(t.componentId,f.lens),N=new Set(((v=n.suppressedAutoActions)==null?void 0:v[A])||[]),M=(x.actions||[]).some(k=>k.id===P),G=nt(f.actionText),ne=N.has(P);x.actions=(x.actions||[]).map(k=>!(k.id===P||nt(k.text||"")===G)||k.readinessScore===f.fromScore?k:{...k,readinessScore:f.fromScore}),!M&&!d.has(G)&&!ne&&(x.actions=[...x.actions||[],Eo(t.componentId,t.actionPrefix,f)]),l[f.lens]=x});const b=s.outcomes.map(f=>{const x=[];return s.templates.forEach(d=>{if(!d.outcomeIds.includes(f.id))return;const P=l[d.lens];if(!P)return;const A=ko(P,t.actionPrefix,d);A&&x.push({lens:d.lens,actionId:A})}),{...jo(f,h[f.id]),linkedActions:x}});return{...n,currentDraft:{...a,[t.componentId]:l},objectives:{...i,[t.componentId]:[...c,...b]}}}function Ze(n,t){var g,c;const s=`${t.outcomePrefix}:`,a=`${t.actionPrefix}:`,i=(((g=n.objectives)==null?void 0:g[t.componentId])||[]).filter(h=>!h.id.startsWith(s)),r=((c=n.currentDraft)==null?void 0:c[t.componentId])||{},o=Object.keys(r).reduce((h,l)=>{const b=r[l]||ns();return h[l]={...b,actions:(b.actions||[]).filter(f=>!f.id.startsWith(a))},h},{});return{...n,currentDraft:{...n.currentDraft,[t.componentId]:o},objectives:{...n.objectives,[t.componentId]:i}}}function zs(n,t){if(t>=5)return null;const s=(n.actions||[]).filter(i=>i.readinessScore===t);return s.length===0?null:s.every(i=>i.status==="Completed")?{currentScore:t,nextScore:t+1}:null}const Io=`{
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
`,$a="custom-outcome:";function Ao(n){return n.startsWith($a)}const Gt=xa.filter(n=>n!=="Overdue start"&&n!=="Overdue completion"),_o=[0,1,2,3,4,5],Oo={0:"Not Started",1:"Emerging",2:"Developing",3:"Embedding",4:"Adopted",5:"Thriving"},Ys={"Not Started":"bg-slate-100 text-slate-700 border-slate-200","In Progress":"bg-blue-100 text-blue-800 border-blue-200",Blocked:"bg-amber-100 text-amber-800 border-amber-200",Completed:"bg-green-100 text-green-800 border-green-200"},Ks=JSON.parse(Io),Ta=4;function Ro(n,t){return It.reduce((s,a)=>{const i=jt("Default",a.id,"inputs",void 0,n),r=jt("Default",a.id,"deliverables",void 0,n),o=new Map;return[...i,...r].forEach(g=>{var c,h;if(g.label&&g.label.trim().length>=Ta){const l=t?us(g,t).url:g.url,b=(h=(c=t==null?void 0:t.links)==null?void 0:c[g.key])==null?void 0:h.matchAliases;o.set(g.label.toLowerCase(),{...g,url:l,matchAliases:b})}}),s[a.id]=[...o.values()],s},{})}function Po(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function La(n){const t=new Set([n]);return new RegExp("(?<!s)s$","i").test(n)&&t.add(n.slice(0,-1)),[...t]}function Mn(n,t,s,a){const i=n||"Untitled action";if(t.length===0)return i;const o=t.flatMap(l=>{const b=l.kind==="url"?l.matchAliases||[]:[];return[...La(l.label),...b].map(f=>({variant:f,link:l}))}).sort((l,b)=>b.variant.length-l.variant.length),g=o.map(l=>`\\b${Po(l.variant)}\\b`).join("|"),c=i.split(new RegExp(`(${g})`,"gi")),h=`underline decoration-dotted underline-offset-2 ${s?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`;return c.map((l,b)=>{const f=o.find(d=>d.variant.toLowerCase()===l.toLowerCase());if(!f)return l;const x=f.link;return x.kind==="tool"?e.jsx("button",{type:"button",onClick:d=>{d.stopPropagation(),a==null||a(x.tool)},className:h,children:l},`${x.key}-${b}`):e.jsx("a",{href:x.url,target:"_blank",rel:"noopener noreferrer",onClick:d=>d.stopPropagation(),className:h,children:l},`${x.key}-${b}`)})}function Js(n){return n.split(`
`).map(t=>t.trim()).filter(Boolean)}const Do="Your Project";function $o(n,t){return n.replace(/\$projectName/g,t)}function To(n,t){const s=i=>$o(i,t),a=i=>i.map(r=>({title:s(r.title),body:s(r.body)}));return{component:s(n.component),description:s(n.description),whatIsIt:s(n.whatIsIt),userInsight:s(n.userInsight),whyThisMatters:s(n.whyThisMatters),quickRealityCheck:s(n.quickRealityCheck),whatGoodLooksLike:a(n.whatGoodLooksLike),risksIfYouDont:a(n.risksIfYouDont)}}const Ba={good:{border:"border-emerald-200",bg:"bg-emerald-50 hover:bg-emerald-100",text:"text-black",titleText:"text-emerald-700"},risk:{border:"border-rose-200",bg:"bg-rose-50 hover:bg-rose-100",text:"text-black",titleText:"text-rose-800"}},Fa={good:{border:"border-emerald-500/40",bg:"bg-emerald-500/10 hover:bg-emerald-500/15",text:"text-emerald-200",titleText:"text-slate-100"},risk:{border:"border-rose-500/40",bg:"bg-rose-500/10 hover:bg-rose-500/15",text:"text-rose-200",titleText:"text-slate-100"}};function Lo({points:n,tone:t,guidanceLinks:s,darkMode:a,onNavigateToTool:i}){const r=a?Fa[t]:Ba[t];return e.jsx("ul",{className:"space-y-3",children:n.map(o=>e.jsxs("li",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${r.titleText}`,children:o.title}),e.jsx("p",{className:`mt-0.5 text-sm ${r.text}`,children:Mn(o.body,s,a,i)})]},o.title))})}function Xs({title:n,points:t,tone:s,isOpen:a,onToggle:i,guidanceLinks:r,darkMode:o,onNavigateToTool:g}){const c=o?Fa[s]:Ba[s];return e.jsxs("div",{className:`rounded-md border ${c.border}`,children:[e.jsxs("button",{type:"button",onClick:i,className:`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold transition-colors ${c.bg} ${c.text}`,children:[n,e.jsx("span",{"aria-hidden":"true",children:a?"−":"+"})]}),a&&e.jsx("div",{className:`border-t px-3 py-3 ${c.border}`,children:e.jsx(Lo,{points:t,tone:s,guidanceLinks:r,darkMode:o,onNavigateToTool:g})})]})}function Bo({detail:n,furtherReadingUrl:t,guidanceLinks:s,darkMode:a,onNavigateToTool:i}){const[r,o]=u.useState(!0),[g,c]=u.useState(!0);return e.jsxs("div",{children:[n.description&&e.jsx("p",{className:`text-sm ${a?"text-slate-200":"text-slate-700"}`,children:n.description}),e.jsxs("div",{className:`mt-4 space-y-4 ${n.description?"border-t pt-4":""} ${a?"border-slate-700":"border-slate-200"}`,children:[t&&e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs font-semibold ${a?"border-slate-600 bg-slate-800 text-blue-300 hover:bg-slate-700":"border-slate-300 bg-white text-[#005eb8] hover:bg-slate-50"}`,children:"Further Reading ↗"}),n.whatIsIt&&e.jsx("p",{className:`text-sm ${a?"text-slate-300":"text-slate-600"}`,children:Mn(n.whatIsIt,s,a,i)}),n.userInsight&&e.jsxs("blockquote",{className:`border-l-2 pl-3 text-sm italic ${a?"border-slate-600 text-slate-300":"border-slate-300 text-slate-600"}`,children:["“",Mn(n.userInsight,s,a,i),"”"]}),n.whyThisMatters&&e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${a?"text-slate-200":"text-slate-700"}`,children:"Why this matters"}),e.jsx("ul",{className:`mt-1 list-disc space-y-1 pl-5 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:Js(n.whyThisMatters).map(h=>e.jsx("li",{children:Mn(h,s,a,i)},h))})]}),n.quickRealityCheck&&e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${a?"text-slate-200":"text-slate-700"}`,children:"Quick reality check"}),e.jsx("ul",{className:`mt-1 list-disc space-y-1 pl-5 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:Js(n.quickRealityCheck).map(h=>e.jsx("li",{children:Mn(h,s,a,i)},h))})]}),(n.whatGoodLooksLike.length>0||n.risksIfYouDont.length>0)&&e.jsxs("div",{className:"space-y-2",children:[n.whatGoodLooksLike.length>0&&e.jsx(Xs,{title:"What good looks like",points:n.whatGoodLooksLike,tone:"good",isOpen:r,onToggle:()=>o(h=>!h),guidanceLinks:s,darkMode:a,onNavigateToTool:i}),n.risksIfYouDont.length>0&&e.jsx(Xs,{title:"Risks if you don't",points:n.risksIfYouDont,tone:"risk",isOpen:g,onToggle:()=>c(h=>!h),guidanceLinks:s,darkMode:a,onNavigateToTool:i})]})]})]})}function Fo({open:n,onClose:t,detail:s,furtherReadingUrl:a,guidanceLinks:i,darkMode:r,onNavigateToTool:o}){return n?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${r?"text-slate-300":"text-slate-500"}`,children:"Component overview"}),e.jsx("button",{type:"button",onClick:t,"aria-label":"Close component overview",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${r?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:"mt-2",children:e.jsx(Bo,{detail:s,furtherReadingUrl:a,guidanceLinks:i,darkMode:r,onNavigateToTool:o})})]})}):null}const ts="__evidence_json__:",Go=1024*1024;function Uo(n,t,s){return(s[n]||[]).filter(a=>a.linkedActions.some(i=>i.actionId===t))}function Ga(n){const t=n.trim();return t?/^https?:\/\//i.test(t)?t:/^www\./i.test(t)?`https://${t}`:t:""}function ht(n){const t=(n==null?void 0:n.trim())||"";if(!t)return[];if(t.startsWith(ts))try{const s=JSON.parse(t.slice(ts.length));return Array.isArray(s)?s.filter(a=>a&&(a.type==="url"||a.type==="file")).map(a=>({type:a.type,label:String(a.label||"").trim(),href:String(a.href||"").trim()})).filter(a=>a.label||a.href):[]}catch{return[]}return t.split(`
`).map(s=>s.trim()).filter(Boolean).map(s=>{const a=Ga(s);return{type:"url",label:s,href:a}})}function Mo(n){const t=n.map(s=>({type:s.type,label:s.label.trim(),href:s.href.trim()})).filter(s=>s.label||s.href);return t.length?`${ts}${JSON.stringify(t)}`:""}function Vo({rows:n,isOpen:t,onToggle:s,darkMode:a}){return e.jsxs("div",{className:`mb-8 rounded-lg border ${a?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("button",{type:"button",onClick:s,className:"flex w-full items-center justify-between gap-4 px-5 py-4 text-left",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-sm font-semibold ${a?"text-slate-100":"text-slate-800"}`,children:"Evidence Links and Docs"}),e.jsx("p",{className:`mt-0.5 text-xs ${a?"text-slate-400":"text-slate-500"}`,children:n.length?`${n.length} item${n.length===1?"":"s"} attached across this component's actions.`:"Everything attached as evidence across this component's actions, in one place."})]}),e.jsx("span",{className:`shrink-0 text-xs font-semibold ${a?"text-slate-300":"text-slate-500"}`,children:t?"Hide −":"Show +"})]}),t&&e.jsx("div",{className:`border-t px-5 py-4 ${a?"border-slate-700":"border-slate-200"}`,children:n.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${a?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:a?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Type"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Link / Doc"})]})}),e.jsx("tbody",{className:`${a?"divide-slate-700":"divide-slate-100"} divide-y`,children:n.map((i,r)=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-100":"text-slate-800"}`,children:i.actionText}),e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:i.lens}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`${i.item.type==="file"?"bg-emerald-100 text-emerald-800":"bg-blue-100 text-blue-800"} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`,children:i.item.type==="file"?"File":"Link"})}),e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-100":"text-slate-800"}`,children:i.item.href?e.jsx("a",{href:i.item.href,target:"_blank",rel:"noopener noreferrer",className:`underline ${a?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:i.item.label||i.item.href}):i.item.label||"—"})]},`${i.lens}:${r}`))})]})}):e.jsx("p",{className:`text-sm ${a?"text-slate-400":"text-slate-500"}`,children:"No evidence added yet. Attach links or documents to an action to see them here."})})]})}function Ho(n){return new Promise((t,s)=>{const a=new FileReader;a.onload=()=>t(String(a.result||"")),a.onerror=()=>s(new Error("Unable to read file.")),a.readAsDataURL(n)})}function Wo(){return e.jsx("svg",{className:"w-4 h-4 text-blue-500 mt-0.5 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function qo(){return e.jsx("svg",{className:"w-5 h-5 ml-2 text-slate-400 group-hover:text-[#005eb8] shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function zo(n,t){let s=n,a=zs({actions:t},s);for(;a;)s=a.nextScore,a=zs({actions:t},s);return s}function Yo(n,t,s){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:"",actionType:void 0,owner:"",timescale:"",status:"Planned",phase:n,startDate:"",dueDate:"",notes:"",evidence:"",linkedTargets:[{componentId:t,lens:s}]}}function _n(n,t,s){const a=n.linkedTargets||[];if(!a.length)return[{componentId:t,lens:s}];const i=new Set,r=[];return a.forEach(o=>{const g=`${o.componentId}:${o.lens}`;i.has(g)||(i.add(g),r.push({componentId:o.componentId,lens:o.lens}))}),r}function Ko({store:n,components:t,activeComponentId:s,getRubricText:a,getEntry:i,onComponentChange:r,onEntryUpdate:o,onOpenLensInfo:g,onActionRemove:c,onObjectivesUpdate:h,onNavigateToTool:l,hideGuidedWorkflow:b=!1,showAdditionalGuidanceLinks:f=!0,onHideGuidedWorkflow:x,darkMode:d=!1,focusAction:P,onFocusActionHandled:A}){var at,it,zn,ot,rt,lt,Rn,yn,ct,dt,ut,mt,gt,Pn,$t;const N=t.find(m=>m.id===s)||t[0],M=(it=(at=n.orgProfile)==null?void 0:at.cst)==null?void 0:it.pathway,G=m=>M&&M!=="pathway-1"?`No outcomes or actions are defined for ${fa[M]} yet.`:m,ne=((ot=(zn=n.orgProfile)==null?void 0:zn.projectName)==null?void 0:ot.trim())||Do,v=(rt=Ks[N.id])!=null&&rt.whatIsIt?To(Ks[N.id],ne):void 0,k=(lt=n.orgProfile)!=null&&lt.coreLinks&&n.orgProfile.coreLinks.length>0?n.orgProfile.coreLinks:Ra,q=u.useMemo(()=>{var m;return(((m=n.orgProfile)==null?void 0:m.toolLinks)||[]).filter(C=>C.matchText.trim()).map(C=>({key:C.key,label:C.matchText,kind:"tool",tool:C.tool}))},[(Rn=n.orgProfile)==null?void 0:Rn.toolLinks]),K=u.useMemo(()=>{var Y;const m=(Y=n.orgProfile)==null?void 0:Y.linkOverrides,C=Ro(f,m),D=f?k:k.filter(Se=>Se.type==="core"),ee={};return Object.keys(C).forEach(Se=>{var on,wn;const Ce=new Map,ke=((wn=(on=n.orgProfile)==null?void 0:on.customComponentLinks)==null?void 0:wn[Se])||[];[...C[Se],...D,...ke].forEach(qe=>{qe.label&&qe.label.trim().length>=Ta&&Ce.set(qe.label.toLowerCase(),{...qe,kind:"url"})}),q.forEach(qe=>{Ce.set(qe.label.toLowerCase(),qe)}),ee[Se]=[...Ce.values()]}),ee},[f,k,(yn=n.orgProfile)==null?void 0:yn.linkOverrides,(ct=n.orgProfile)==null?void 0:ct.customComponentLinks,q]),[I,ae]=u.useState(null),[J,de]=u.useState(!1),L=u.useRef(null),[te,ue]=u.useState(null),[re,me]=u.useState(null),[O,oe]=u.useState(!1),[ge,Ie]=u.useState(!0),[Te,we]=u.useState(!0),[Me,Ae]=u.useState(!1),[un,ln]=u.useState(!1),[Pe,y]=u.useState(!1),T=bn("assessment"),[E,R]=u.useState({}),[U,ze]=u.useState({}),[Ye,Fe]=u.useState({}),Le=((dt=n.objectives)==null?void 0:dt[N.id])||[],Ve=n.orgProfile.teamMembers||[],j=u.useMemo(()=>{const m={};return N.lenses.forEach(C=>{m[C]=i(N.id,C).actions||[]}),m},[N.id,N.lenses,i]),Q=u.useMemo(()=>{const m={};return N.lenses.forEach(C=>{const D=i(N.id,C),ee=j[C]||[],Y=ee.some(Ce=>Ce.readinessScore===0),Se=D.score===0&&!Y?1:D.score;m[C]=ee.filter(Ce=>(Ce.readinessScore??Se)===Se)}),m},[N.id,N.lenses,i,j]),le=u.useMemo(()=>N.lenses.reduce((m,C)=>m+(Q[C]||[]).length,0),[N.lenses,Q]),be=u.useMemo(()=>N.lenses.reduce((m,C)=>m+(Q[C]||[]).filter(D=>an(D.status)==="Completed").length,0),[N.lenses,Q]),Ge=u.useMemo(()=>N.lenses.some(m=>Number(i(N.id,m).score||0)>0),[N.id,N.lenses,i]),he=u.useMemo(()=>{const m={};return Object.keys(n.currentDraft).forEach(C=>{Object.keys(n.currentDraft[C]||{}).forEach(D=>{(n.currentDraft[C][D].actions||[]).forEach(Y=>{_n(Y,C,D).forEach(Ce=>{const ke=`${Ce.componentId}:${Ce.lens}`;m[ke]||(m[ke]=[]),m[ke].push({sourceComponentId:C,sourceLens:D,action:Y,isLinkedView:!(Ce.componentId===C&&Ce.lens===D)})})})})}),m},[n.currentDraft]),ve=u.useMemo(()=>{const m={};return t.forEach(C=>{m[C.id]=C}),m},[t]),fe=u.useMemo(()=>{const m=[];return N.lenses.forEach(C=>{(he[`${N.id}:${C}`]||[]).filter(ee=>!ee.isLinkedView).forEach(ee=>{ht(ee.action.evidence||"").forEach(Y=>{m.push({actionText:ee.action.text||"Untitled action",lens:C,item:Y})})})}),m},[he,N.id,N.lenses]),en=u.useMemo(()=>{const m=N.lenses[0];return m?i(N.id,m).justification:""},[N.id,N.lenses,i]),pn=u.useMemo(()=>{var m;return I?((m=t.find(C=>C.id===I.sourceComponentId))==null?void 0:m.label)||I.sourceComponentId:N.label},[I,N.label,t]),nn=u.useMemo(()=>{var C;if(!((C=I==null?void 0:I.action.text)!=null&&C.trim()))return"New action";const m=I.action.text.trim().replace(/\s+/g," ");return m.length>70?`${m.slice(0,70)}...`:m},[I]),Ee=u.useMemo(()=>Le.find(m=>m.id===(te==null?void 0:te.objectiveId))||null,[te==null?void 0:te.objectiveId,Le]),He=u.useMemo(()=>Ee?Xt(Ee,j):null,[Ee,j]),cn=u.useMemo(()=>Ee?Ee.linkedActions.map(m=>{const C=(j[m.lens]||[]).find(Y=>Y.id===m.actionId),D=C?an(C.status):null,ee=C?Ds(C.status,C.startDate,C.dueDate):null;return{lens:m.lens,action:C,status:D,temporalStatus:ee}}):[],[Ee,j]);u.useCallback(m=>{r(m.target.value)},[r]);const S=u.useCallback((m,C)=>{const D=i(N.id,m);o(N.id,m,{...D,score:C})},[N.id,i,o]),_=u.useCallback(m=>{N.lenses.forEach(C=>{const D=i(N.id,C);o(N.id,C,{...D,justification:m})})},[N.id,N.lenses,i,o]),W=u.useCallback((m,C)=>{const D=Yo(N.phase,N.id,m);C&&(D.text=C),ae({sourceComponentId:N.id,sourceLens:m,mode:"create",action:D,evidenceItems:ht(D.evidence||""),linkedObjectiveIds:[],targetPickerComponentId:N.id,targetPickerLens:m})},[N.id,N.phase]),se=u.useCallback((m,C,D)=>{var Ce;const ee=_n(D,m,C),Y=ee[0]||{componentId:m,lens:C},Se=(((Ce=n.objectives)==null?void 0:Ce[m])||[]).filter(ke=>ke.linkedActions.some(on=>on.actionId===D.id)).map(ke=>ke.id);ae({sourceComponentId:m,sourceLens:C,mode:"edit",actionId:D.id,action:{...D,linkedTargets:ee,notes:D.notes||"",evidence:D.evidence||"",startDate:D.startDate||"",dueDate:D.dueDate||""},evidenceItems:ht(D.evidence||""),linkedObjectiveIds:Se,targetPickerComponentId:Y.componentId,targetPickerLens:Y.lens})},[n.objectives]),z=u.useCallback(()=>{me({mode:"create",text:"",owner:""})},[]),De=u.useCallback(m=>{me({mode:"edit",objectiveId:m.id,text:m.text,owner:m.owner})},[]),Ke=()=>{me(null)},tn=()=>{if(re){if(!re.text.trim()){window.alert("Outcome description is required.");return}if(re.mode==="create"){const m={id:`${$a}${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:re.text.trim(),owner:re.owner.trim(),timescale:"",linkedActions:[]};h(N.id,[...Le,m])}else h(N.id,Le.map(m=>m.id===re.objectiveId?{...m,text:re.text.trim(),owner:re.owner.trim()}:m));me(null)}},ye=m=>{h(N.id,Le.filter(C=>C.id!==m))};u.useEffect(()=>{if(!P)return;const C=i(N.id,P.lens).actions.find(D=>D.id===P.actionId);if(!C){A==null||A();return}Ae(!0),se(N.id,P.lens,C),A==null||A()},[P,N.id]);const We=()=>{ae(null)},Ne=()=>{var Ce;if(!I)return;if(!I.action.text.trim()){window.alert("Action description is required.");return}const m={...I.action,evidence:Mo(I.evidenceItems),status:an(I.action.status),linkedTargets:_n(I.action,I.sourceComponentId,I.sourceLens),timescale:I.action.dueDate||I.action.startDate||I.action.timescale},C=i(I.sourceComponentId,I.sourceLens),D=I.mode==="create"?[...C.actions,m]:C.actions.map(ke=>ke.id===I.actionId?m:ke);o(I.sourceComponentId,I.sourceLens,{...C,actions:D,score:zo(C.score,D)});const ee=new Set(I.linkedObjectiveIds),Se=(((Ce=n.objectives)==null?void 0:Ce[I.sourceComponentId])||[]).map(ke=>{const on=ke.linkedActions.filter(wn=>!(wn.lens===I.sourceLens&&wn.actionId===m.id));return ee.has(ke.id)?{...ke,linkedActions:[...on,{lens:I.sourceLens,actionId:m.id}]}:{...ke,linkedActions:on}});h(I.sourceComponentId,Se),We()},jn=()=>{if(!I)return;if(an(I.action.status)==="Completed"&&I.evidenceItems.length===0&&!dn(et)){L.current=Ne,de(!0);return}Ne()},Ue=(m,C,D)=>{const ee=i(N.id,m);o(N.id,m,{...ee,actions:ee.actions.map(Y=>Y.id===C?{...Y,status:an(D)}:Y)})},On=(m,C,D)=>{const ee=an(D),Y=ht(C.evidence||"").length>0;if(ee==="Completed"&&!Y&&!dn(et)){L.current=()=>Ue(m,C.id,ee),de(!0);return}Ue(m,C.id,ee)},mn=m=>{ae(C=>{if(!C)return C;const D={...C,action:{...C.action,...m}};return D.action.status=an(D.action.status),D})},Ln=(m,C)=>{ae(D=>D&&{...D,targetPickerComponentId:m,targetPickerLens:C})},je=()=>{ae(m=>{if(!m)return m;const C=ve[m.targetPickerComponentId]||N,D=C.lenses.includes(m.targetPickerLens)?m.targetPickerLens:C.lenses[0];if(!D)return m;const ee=_n(m.action,m.sourceComponentId,m.sourceLens);return ee.some(Y=>Y.componentId===C.id&&Y.lens===D)?m:{...m,action:{...m.action,linkedTargets:[...ee,{componentId:C.id,lens:D}]}}})},kn=(m,C)=>{ae(D=>{if(!D)return D;const Y=_n(D.action,D.sourceComponentId,D.sourceLens).filter(Se=>!(Se.componentId===m&&Se.lens===C));return{...D,action:{...D.action,linkedTargets:Y}}})},Wn=m=>{ae(C=>{if(!C)return C;const D=new Set(C.linkedObjectiveIds);return D.has(m)?D.delete(m):D.add(m),{...C,linkedObjectiveIds:Array.from(D)}})},Bn=m=>{ae(C=>C&&{...C,evidenceItems:m})},Rt=()=>{if(!I)return;const m=I.evidenceItems;Bn([...m,{type:"url",label:"",href:""}])},vn=(m,C,D)=>{if(!I)return;const ee=I.evidenceItems;if(!ee[m])return;const Y=[...ee];C==="href"?Y[m]={...Y[m],href:Ga(D)}:Y[m]={...Y[m],label:D},Bn(Y)},Be=m=>{if(!I)return;const C=I.evidenceItems;Bn(C.filter((D,ee)=>ee!==m))},Pt=async m=>{if(!I)return;const C=m.target.files;if(!(C!=null&&C.length))return;const ee=[...I.evidenceItems];for(const Y of Array.from(C)){if(Y.size>Go){window.alert(`"${Y.name}" is larger than 1MB. Please attach a URL instead.`);continue}try{const Se=await Ho(Y);ee.push({type:"file",label:Y.name,href:Se})}catch{window.alert(`Unable to upload "${Y.name}".`)}}Bn(ee),m.target.value=""},Dt=(m,C)=>{C&&(ue(null),se(N.id,m,C))},qn=m=>{const C=document.getElementById(m);C==null||C.scrollIntoView({behavior:"smooth",block:"start"})};return e.jsxs("div",{className:"max-w-5xl mx-auto pb-20",children:[e.jsx("div",{className:"mb-8 flex items-center justify-between gap-4 flex-wrap",children:e.jsxs("div",{children:[e.jsxs("h2",{className:`text-3xl font-bold flex items-center ${d?"text-slate-100":"text-slate-800"}`,children:[N.label,e.jsx("span",{className:"bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-4 border border-blue-200",children:hn[N.phase]||`Phase ${N.phase}`}),e.jsx("span",{className:"ml-2",children:e.jsx(Sn,{onClick:T.reopen,darkMode:d})})]}),e.jsx("p",{className:`mt-2 ${d?"text-slate-300":"text-slate-500"}`,children:"Assess readiness at lens level. Change Component justification, outcomes, and actions are tracked below."}),v&&e.jsx("button",{type:"button",onClick:()=>y(!0),className:`mt-2 text-sm font-semibold underline ${d?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:"What is this?"})]})}),v&&e.jsx(Fo,{open:Pe,onClose:()=>y(!1),detail:v,furtherReadingUrl:(mt=(ut=n.orgProfile)==null?void 0:ut.componentFurtherReading)==null?void 0:mt[N.id],guidanceLinks:K[N.id]||[],darkMode:d,onNavigateToTool:l}),!b&&!O&&e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mb-6 rounded-lg border p-4`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${d?"text-slate-300":"text-slate-600"}`,children:"Guided workflow"}),e.jsx("button",{type:"button",onClick:()=>oe(!0),"aria-label":"Dismiss guided workflow",className:`text-xs font-semibold leading-none ${d?"text-slate-400 hover:text-slate-200":"text-slate-400 hover:text-slate-700"}`,children:"×"})]}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:()=>qn("assessment-scoring"),className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"1. Justify"}),e.jsx("button",{type:"button",onClick:()=>qn("assessment-objectives"),className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"2. Review outcomes"}),e.jsx("button",{type:"button",onClick:()=>qn("assessment-actions"),className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"3. Plan lens actions"})]}),x&&e.jsx("button",{type:"button",onClick:x,className:`mt-3 text-xs underline ${d?"text-slate-400 hover:text-slate-200":"text-slate-500 hover:text-slate-700"}`,children:"Don't show this again"})]}),e.jsxs("div",{id:"assessment-scoring",className:`${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[e.jsx("h3",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:Ge?"Step 1: Justify":"Step 1: Justification of what is currently known"}),e.jsx("button",{type:"button",onClick:()=>Ie(m=>!m),className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:ge?"Hide":"Show"})]}),ge?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:`block text-sm font-semibold mb-2 ${d?"text-slate-100":"text-slate-700"}`,children:"Change Component Justification"}),e.jsx("p",{className:`text-xs mb-2 ${d?"text-slate-300":"text-slate-500"}`,children:'Explain what is currently known, what evidence supports that view, and where the biggest gap sits. Example: "Sponsorship is visible only in two services; there is no monthly steering update yet; next step is to agree a trust-wide sponsor cadence."'}),e.jsx("textarea",{value:en,onChange:m=>_(m.target.value),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-24 p-2 border ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,placeholder:"Record what is currently known for this change component, the evidence behind it, and the key improvement needed next."})]}):null]}),e.jsxs("div",{id:"assessment-objectives",className:`${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-1",children:[e.jsx("h3",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Step 2: Review outcomes"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:z,className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:"Add Outcome"}),e.jsx("button",{type:"button",onClick:()=>we(m=>!m),className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:Te?"Hide":"Show"})]})]}),e.jsx("p",{className:`text-xs mb-3 ${d?"text-slate-300":"text-slate-500"}`,children:"Owned by this component as a whole. Status is derived automatically from the lens actions assigned to each outcome below and cannot be set manually."}),Te?Le.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${d?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:d?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Linked Actions"})]})}),e.jsx("tbody",{className:`${d?"divide-slate-700":"divide-slate-100"} divide-y`,children:Le.map(m=>{const C=Xt(m,j),D=Ys[C],ee=()=>ue({objectiveId:m.id});return e.jsxs("tr",{onClick:ee,onKeyDown:Y=>{(Y.key==="Enter"||Y.key===" ")&&(Y.preventDefault(),ee())},tabIndex:0,className:`${d?"hover:bg-slate-700 focus-visible:bg-slate-700":"hover:bg-slate-50 focus-visible:bg-slate-50"} cursor-pointer focus:outline-none`,children:[e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-100":"text-slate-800"}`,children:m.text||"Untitled outcome"}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${D}`,children:C})}),e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-300":"text-slate-600"}`,children:m.linkedActions.length?`${m.linkedActions.length} action(s)`:"None assigned"})]},m.id)})})]})}):e.jsx("p",{className:"text-sm text-slate-500",children:G("No outcomes yet.")}):null]}),e.jsx("div",{id:"assessment-actions",className:`${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Step 3: Plan lens actions"}),e.jsx("p",{className:`mt-1 text-xs ${d?"text-slate-300":"text-slate-600"}`,children:"Track delivery actions for each lens and link them to outcomes and affected component lenses."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:`${d?"bg-slate-800 border-slate-600 text-slate-100":"bg-white border-slate-300 text-slate-700"} rounded-full border px-2 py-1 text-xs`,children:[be,"/",le," completed"]}),e.jsx("button",{type:"button",onClick:()=>Ae(m=>!m),className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:Me?"Hide":"Show"})]})]})}),Me?e.jsx("div",{className:"space-y-8 mb-8",children:N.lenses.map(m=>{const C=i(N.id,m),D=`${N.id}:${m}`,ee=he[D]||[],Y=ee.some(V=>V.action.readinessScore===0),Se=C.score===0&&!Y?1:C.score,Ce=U[D]||"all",ke=Ye[D]||"all",on=Array.from(new Set(ee.map(V=>V.action.actionType).filter(V=>V!==void 0))).sort((V,xe)=>String(V).localeCompare(String(xe))),wn=Array.from(new Set([...Ve.map(V=>V.name),...ee.map(V=>V.action.owner).filter(V=>!!V)])).sort((V,xe)=>V.localeCompare(xe)),qe=[...ee].filter(V=>(V.action.readinessScore!==void 0?V.action.readinessScore:Se)!==Se||Ce!=="all"&&(V.action.actionType||"")!==Ce?!1:ke==="all"||(V.action.owner||"")===ke).sort((V,xe)=>{const p=an(V.action.status)==="Completed",w=an(xe.action.status)==="Completed";if(p!==w)return p?1:-1;const $=V.action.dueDate?new Date(V.action.dueDate).getTime():Number.POSITIVE_INFINITY,H=xe.action.dueDate?new Date(xe.action.dueDate).getTime():Number.POSITIVE_INFINITY;return $-H}),Yn=C.score>=N.target?"#22c55e":C.score>0?"#f59e0b":"#cbd5e1";return e.jsxs("div",{className:`${d?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:[e.jsxs("div",{className:`${d?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} p-6 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4`,children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm font-bold uppercase tracking-wider text-blue-600 block mb-1",children:"Lens"}),e.jsxs("button",{onClick:()=>g(m),className:`flex items-center text-2xl font-semibold transition-colors group text-left ${d?"text-slate-100 hover:text-[#63b3ff]":"text-slate-800 hover:text-[#005eb8]"}`,title:"View Lens Information",children:[m,e.jsx(qo,{})]})]}),e.jsxs("div",{className:"shrink-0 w-full md:w-64",children:[e.jsx("label",{className:`block text-xs font-semibold mb-1 ${d?"text-slate-300":"text-slate-500"}`,children:"Readiness Score"}),e.jsx("select",{value:C.score,onChange:V=>S(m,Number(V.target.value)),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 text-sm font-medium border ${d?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,style:{borderLeftWidth:"4px",borderLeftColor:Yn},children:_o.map(V=>e.jsxs("option",{value:V,children:[V," - ",Oo[V]]},V))})]})]}),e.jsx("div",{className:`${d?"bg-slate-900":"bg-blue-50/50"} px-6 py-4 border-b text-sm`,style:{borderLeftWidth:"4px",borderLeftColor:Yn},children:e.jsxs("div",{className:"flex items-start flex-1",children:[e.jsx(Wo,{}),e.jsxs("p",{className:`whitespace-pre-line ${d?"text-slate-300":"text-slate-600"}`,children:[e.jsxs("strong",{className:d?"text-slate-100":"text-slate-700",children:[C.score===0?"Not Started":`Level ${C.score}`,":"]}),` ${a(N.id,m,C.score)}`]})]})}),e.jsxs("div",{className:`${d?"border-slate-700":"border-slate-100"} p-6 border-t`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Lens Actions"}),e.jsx("p",{className:`mt-1 text-xs ${d?"text-slate-300":"text-slate-500"}`,children:"Hierarchy: Outcome - Action - Affected component lenses."})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs("select",{"aria-label":`Filter ${m} actions by type`,value:Ce,onChange:V=>ze(xe=>({...xe,[D]:V.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),[...new Set([...wt,...on])].map(V=>e.jsx("option",{value:V,children:V},V))]}),e.jsxs("select",{"aria-label":`Filter ${m} actions by owner`,value:ke,onChange:V=>Fe(xe=>({...xe,[D]:V.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),wn.map(V=>e.jsx("option",{value:V,children:V},V))]}),e.jsx("button",{onClick:()=>W(m),className:"px-3 py-1.5 rounded bg-[#005eb8] text-white text-xs font-semibold shadow-[0_2px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Add Action"})]})]}),qe.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${d?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:d?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action Type"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Start"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"End"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Actions"})]})}),e.jsx("tbody",{className:`${d?"divide-slate-700":"divide-slate-100"} divide-y`,children:(E[`${N.id}:${m}`]?qe:qe.slice(0,5)).map(V=>{var ie;const xe=V.action,p=an(xe.status),w=Ds(xe.status,xe.startDate,xe.dueDate),$=w==="Overdue start"||w==="Overdue completion"?w:null,H=((ie=ve[V.sourceComponentId])==null?void 0:ie.label)||V.sourceComponentId,B=Uo(V.sourceComponentId,xe.id,n.objectives||{}),X=Tn[p]||Tn.Planned;return e.jsxs("tr",{children:[e.jsxs("td",{className:`px-3 py-2 text-sm ${d?"text-slate-100":"text-slate-800"}`,children:[e.jsx("div",{children:Mn(xe.text,K[V.sourceComponentId]||[],d,l)}),V.isLinkedView?e.jsxs("div",{className:`mt-1 text-xs ${d?"text-indigo-300":"text-indigo-700"}`,children:["Linked from ",H," /"," ",V.sourceLens]}):null]}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("select",{"aria-label":`Current state for ${xe.text}`,value:p,onChange:ce=>On(V.sourceLens,xe,ce.target.value),className:`min-w-[7.5rem] rounded-md border px-2 py-1 text-xs font-semibold ${X} focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b]`,children:Gt.map(ce=>e.jsx("option",{value:ce,children:ce},ce))}),$?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:$}):null,!B.length&&e.jsx("div",{className:`mt-1 text-center text-xs ${d?"text-amber-200":"text-amber-700"}`,children:"Not yet linked"})]}),e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-100":"text-slate-700"}`,children:xe.actionType||"Unassigned"}),e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-100":"text-slate-700"}`,children:xe.owner||"Unassigned"}),e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-300":"text-slate-600"}`,children:xe.startDate||"-"}),e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-300":"text-slate-600"}`,children:xe.dueDate||"-"}),e.jsx("td",{className:"px-3 py-2",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"button",onClick:()=>se(V.sourceComponentId,V.sourceLens,xe),className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Edit"}),e.jsx("button",{type:"button",onClick:()=>c(V.sourceComponentId,V.sourceLens,xe.id),className:`${d?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Remove"})]})})]},`${V.sourceComponentId}:${V.sourceLens}:${xe.id}`)})})]})}):e.jsx("p",{className:`text-sm ${d?"text-slate-300":"text-slate-500"}`,children:G("No actions yet for this lens.")}),qe.length>5?e.jsx("button",{type:"button",onClick:()=>R(V=>({...V,[`${N.id}:${m}`]:!V[`${N.id}:${m}`]})),className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} mt-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:E[`${N.id}:${m}`]?"Show top 5 actions":`Show additional ${qe.length>5?qe.length-5:qe.length} action(s)`}):""]})]},m)})}):null,e.jsx(Vo,{rows:fe,isOpen:un,onToggle:()=>ln(m=>!m),darkMode:d}),I?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${d?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-hidden rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("h3",{className:`text-lg font-semibold ${d?"text-slate-100":"text-slate-900"}`,children:[I.mode==="create"?"Create Action":"Edit Action"," ·"," ",pn," / ",I.sourceLens," · ",nn]}),e.jsx("button",{type:"button",onClick:We,className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:"mt-4 max-h-[calc(100vh-13rem)] overflow-y-auto pr-1 grid gap-3",children:[e.jsx("div",{className:`${d?"border-slate-700 bg-slate-900":"border-blue-100 bg-white"} sticky top-0 z-10 rounded-md border px-3 py-2 shadow-sm`,children:e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Description"}),e.jsx("textarea",{value:I.action.text,onChange:m=>mn({text:m.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${d?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})}),e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900 text-slate-200":"border-blue-100 bg-blue-50 text-slate-700"} rounded-md border px-3 py-2 text-xs`,children:[e.jsx("strong",{children:"Linking order:"})," first attach this action to one or more outcomes, then add affected component lenses (component + lens) where this action should appear."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Action Type"}),e.jsx("select",{value:I.action.actionType||"Admin",onChange:m=>mn({actionType:m.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:wt.map(m=>e.jsx("option",{value:m,children:m},m))})]}),e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Owner"}),e.jsxs("select",{value:I.action.owner,onChange:m=>mn({owner:m.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Unassigned"}),Ve.map(m=>e.jsxs("option",{value:m.name,children:[m.name,m.role?` - ${m.role}`:""]},m.id)),I.action.owner&&!Ve.some(m=>m.name===I.action.owner)?e.jsxs("option",{value:I.action.owner,children:[I.action.owner," (not on roster)"]}):null]})]}),e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Status"}),e.jsx("select",{value:I.action.status,onChange:m=>mn({status:m.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Gt.map(m=>e.jsx("option",{value:m,children:m},m))})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Start Date"}),e.jsx("input",{type:"date",value:I.action.startDate||"",onChange:m=>mn({startDate:m.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"End Date"}),e.jsx("input",{type:"date",value:I.action.dueDate||"",onChange:m=>mn({dueDate:m.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsxs("label",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Notes"}),e.jsx("textarea",{value:I.action.notes||"",onChange:m=>mn({notes:m.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Evidence Links / Docs"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:Rt,className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Add web link"}),e.jsxs("label",{className:`${d?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:["Upload file(s)",e.jsx("input",{type:"file",multiple:!0,className:"hidden",onChange:Pt})]})]})]}),e.jsx("p",{className:`mt-1 text-xs ${d?"text-slate-300":"text-slate-500"}`,children:"Add evidence as either web links or uploaded files. Everything appears below in a single list."}),e.jsx("div",{className:`${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:I.evidenceItems.length?I.evidenceItems.map((m,C)=>e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} grid grid-cols-1 gap-2 rounded border p-2 md:grid-cols-[auto,1fr,1fr,auto]`,children:[e.jsx("div",{className:"flex items-start pt-2",children:e.jsx("span",{className:`${m.type==="file"?"bg-emerald-100 text-emerald-800":"bg-blue-100 text-blue-800"} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`,children:m.type==="file"?"File":"Link"})}),e.jsx("input",{value:m.label,onChange:D=>vn(C,"label",D.target.value),placeholder:m.type==="file"?"Document label":"Link label",className:`rounded-md border px-2.5 py-2 text-sm ${d?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`}),e.jsx("input",{value:m.href,onChange:D=>vn(C,"href",D.target.value),placeholder:m.type==="file"?"Embedded file URL (auto generated)":"https://...",className:`rounded-md border px-2.5 py-2 text-sm ${d?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,disabled:m.type==="file"}),e.jsx("button",{type:"button",onClick:()=>Be(C),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},`${m.type}-${C}`)):e.jsx("p",{className:`px-2 py-1 text-sm ${d?"text-slate-300":"text-slate-500"}`,children:"No evidence links or documents added yet."})})]}),e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsx("p",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Affected Outcomes"}),e.jsx("p",{className:`mt-1 text-xs ${d?"text-slate-300":"text-slate-500"}`,children:"Tick 1-3 outcomes directly impacted by this action. Outcome status is auto-derived from these linked actions."}),e.jsx("div",{className:`${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:(((gt=n.objectives)==null?void 0:gt[I.sourceComponentId])||[]).length?(((Pn=n.objectives)==null?void 0:Pn[I.sourceComponentId])||[]).map(m=>{const C=I.linkedObjectiveIds.includes(m.id);return e.jsxs("label",{className:`${d?"hover:bg-slate-700":"hover:bg-slate-50"} flex items-start gap-2 rounded px-2 py-1.5`,children:[e.jsx("input",{type:"checkbox",checked:C,onChange:()=>Wn(m.id),className:"mt-0.5"}),e.jsx("span",{className:`text-sm ${d?"text-slate-100":"text-slate-700"}`,children:m.text||"Untitled outcome"})]},m.id)}):e.jsx("p",{className:`px-2 py-1 text-sm ${d?"text-slate-300":"text-slate-500"}`,children:G("No outcomes are defined for this component yet.")})})]}),e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Affected Component Lenses"}),e.jsx("span",{className:"inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-600",title:"Actions often contribute to other component lenses. Add those targets here so the same action is visible in each relevant lens.",children:"i"})]}),e.jsxs("div",{className:"mt-2 space-y-2",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2",children:[e.jsx("select",{value:I.targetPickerComponentId,onChange:m=>{const C=m.target.value,D=ve[C];Ln(C,(D==null?void 0:D.lenses[0])||"")},className:`rounded-md border px-2.5 py-2 text-sm ${d?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:t.map(m=>e.jsx("option",{value:m.id,children:m.label},m.id))}),e.jsx("select",{value:I.targetPickerLens,onChange:m=>Ln(I.targetPickerComponentId,m.target.value),className:`rounded-md border px-2.5 py-2 text-sm ${d?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:((($t=ve[I.targetPickerComponentId])==null?void 0:$t.lenses)||[]).map(m=>e.jsx("option",{value:m,children:m},m))}),e.jsx("button",{type:"button",onClick:je,disabled:_n(I.action,I.sourceComponentId,I.sourceLens).some(m=>m.componentId===I.targetPickerComponentId&&m.lens===I.targetPickerLens),title:_n(I.action,I.sourceComponentId,I.sourceLens).some(m=>m.componentId===I.targetPickerComponentId&&m.lens===I.targetPickerLens)?"Already added":"Add selected affected lens",className:`${d?"border-cyan-500/50 bg-cyan-500/15 text-cyan-100 hover:bg-cyan-500/25":"border-cyan-300 bg-cyan-100 text-cyan-900 hover:bg-cyan-200"} rounded-md border px-3 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-60`,children:"Add Lens"})]}),e.jsx("div",{className:`${d?"border-slate-700":"border-slate-200"} overflow-hidden rounded border`,children:e.jsxs("table",{className:`min-w-full ${d?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:d?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Component"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Remove"})]})}),e.jsx("tbody",{className:`${d?"divide-slate-700":"divide-slate-100"} divide-y`,children:_n(I.action,I.sourceComponentId,I.sourceLens).map(m=>{var C;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-2.5 py-2 text-sm ${d?"text-slate-100":"text-slate-700"}`,children:((C=ve[m.componentId])==null?void 0:C.label)||m.componentId}),e.jsx("td",{className:`px-2.5 py-2 text-sm ${d?"text-slate-100":"text-slate-700"}`,children:m.lens}),e.jsx("td",{className:"px-2.5 py-2",children:e.jsx("button",{type:"button",onClick:()=>kn(m.componentId,m.lens),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},`${m.componentId}:${m.lens}`)})})]})})]})]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[I.mode==="edit"&&I.actionId?e.jsx("button",{type:"button",onClick:()=>{c(I.sourceComponentId,I.sourceLens,I.actionId),We()},className:"mr-auto rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100",children:"Delete Action"}):null,e.jsx("button",{type:"button",onClick:We,className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Cancel"}),e.jsx("button",{type:"button",onClick:jn,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Save Action"})]})]})}):null,te&&Ee&&He?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":"Outcome Details",className:`w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${d?"text-slate-100":"text-slate-900"}`,children:"Outcome Details"}),e.jsxs("div",{className:"flex items-center gap-2",children:[Ee&&Ao(Ee.id)?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>{De(Ee),ue(null)},className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Edit"}),e.jsx("button",{type:"button",onClick:()=>{ye(Ee.id),ue(null)},className:"rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-700 hover:bg-red-100",children:"Delete"})]}):null,e.jsx("button",{type:"button",onClick:()=>ue(null),className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]})]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${d?"text-slate-400":"text-slate-500"}`,children:"Outcome"}),e.jsx("p",{className:`mt-1 text-sm ${d?"text-slate-100":"text-slate-900"}`,children:Ee.text||"Untitled outcome"})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${d?"text-slate-400":"text-slate-500"}`,children:"Owner"}),e.jsx("p",{className:`mt-1 text-sm ${d?"text-slate-100":"text-slate-900"}`,children:Ee.owner||"Unassigned"})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${d?"text-slate-400":"text-slate-500"}`,children:"Status"}),e.jsx("span",{className:`mt-1 inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${Ys[He]}`,children:He})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${d?"text-slate-400":"text-slate-500"}`,children:"Linked Actions"}),cn.length?e.jsx("div",{className:`mt-2 overflow-x-auto rounded-md border ${d?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:`min-w-full divide-y ${d?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"}`,children:[e.jsx("thead",{className:d?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Navigate"})]})}),e.jsx("tbody",{className:`divide-y ${d?"divide-slate-700":"divide-slate-100"}`,children:cn.map(m=>{var D,ee;const C=m.status?Tn[m.status]||Tn.Planned:Tn.Planned;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-100":"text-slate-700"}`,children:m.lens}),e.jsx("td",{className:`px-3 py-2 text-sm ${d?"text-slate-100":"text-slate-700"}`,children:((D=m.action)==null?void 0:D.text)||"Linked action not found"}),e.jsxs("td",{className:"px-3 py-2",children:[m.action?e.jsx("select",{"aria-label":`Current state for ${m.action.text}`,value:m.status||"Planned",onChange:Y=>On(m.lens,m.action,Y.target.value),className:`min-w-[7.5rem] rounded-md border px-2 py-1 text-xs font-semibold ${C} focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b]`,children:Gt.map(Y=>e.jsx("option",{value:Y,children:Y},Y))}):e.jsx("span",{className:"text-xs text-slate-500",children:"Not linked"}),m.temporalStatus==="Overdue start"||m.temporalStatus==="Overdue completion"?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:m.temporalStatus}):null]}),e.jsx("td",{className:"px-3 py-2",children:m.action?e.jsx("button",{type:"button",onClick:()=>Dt(m.lens,m.action||void 0),className:`${d?"border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25":"border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Open Action"}):e.jsx("span",{className:`text-xs ${d?"text-slate-500":"text-slate-400"}`,children:"Unavailable"})})]},`${m.lens}:${((ee=m.action)==null?void 0:ee.id)||"missing"}`)})})]})}):e.jsx("p",{className:`mt-1 text-sm ${d?"text-slate-300":"text-slate-500"}`,children:"No linked actions assigned."})]})]})]})}):null,re?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":re.mode==="create"?"Add Outcome":"Edit Outcome",className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsx("h3",{className:`text-lg font-semibold ${d?"text-slate-100":"text-slate-900"}`,children:re.mode==="create"?"Add Outcome":"Edit Outcome"}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"objective-editor-text",className:`block text-xs font-medium ${d?"text-slate-300":"text-slate-700"}`,children:"Outcome description"}),e.jsx("textarea",{id:"objective-editor-text",value:re.text,onChange:m=>me({...re,text:m.target.value}),className:`mt-1 w-full rounded-md border p-2 text-sm h-20 ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"objective-editor-owner",className:`block text-xs font-medium ${d?"text-slate-300":"text-slate-700"}`,children:"Owner"}),e.jsxs("select",{id:"objective-editor-owner",value:re.owner,onChange:m=>me({...re,owner:m.target.value}),className:`mt-1 w-full rounded-md border p-2 text-sm ${d?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Unassigned"}),Ve.map(m=>e.jsxs("option",{value:m.name,children:[m.name||"Unnamed",m.role?` - ${m.role}`:""]},m.id)),re.owner&&!Ve.some(m=>m.name===re.owner)?e.jsxs("option",{value:re.owner,children:[re.owner," (not on roster)"]}):null]})]})]}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:Ke,className:`${d?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Cancel"}),e.jsx("button",{type:"button",onClick:tn,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Save Outcome"})]})]})}):null,e.jsx(Ea,{open:J,onCancel:()=>{L.current=null,de(!1)},onContinue:m=>{m&&sn(et,!0);const C=L.current;L.current=null,de(!1),C==null||C()},darkMode:d}),e.jsx(xn,{open:T.isOpen,onClose:T.close,title:"Assessing a component",darkMode:d,body:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Each component is assessed lens by lens: justify where you are, review its outcomes, then plan and track delivery actions for each readiness level."}),e.jsx("p",{children:'Click "What is this?" at the top for what the component covers, and "Evidence Links and Docs" at the bottom rounds up everything attached as evidence across all of its actions.'})]})})]})}const ft=50;function Jo(n){const t=new Date(n);return Number.isNaN(t.getTime())?n:t.toLocaleString("en-GB",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function Xo({events:n,darkMode:t=!1}){const s=bn("audit-log"),[a,i]=u.useState("all"),[r,o]=u.useState("all"),[g,c]=u.useState("all"),[h,l]=u.useState(""),[b,f]=u.useState(1),x=u.useMemo(()=>["all",...Array.from(new Set(n.map(v=>v.eventType))).sort()],[n]),d=u.useMemo(()=>["all",...Array.from(new Set(n.map(v=>v.componentId).filter(Boolean))).sort()],[n]),P=u.useMemo(()=>["all",...Array.from(new Set(n.map(v=>v.actor).filter(Boolean))).sort()],[n]),A=u.useMemo(()=>{const v=h.trim().toLowerCase();return n.filter(k=>a==="all"?!0:k.eventType===a).filter(k=>r==="all"?!0:k.componentId===r).filter(k=>g==="all"?!0:k.actor===g).filter(k=>v?[k.summary,k.reason,k.entityId,k.lens].filter(Boolean).some(q=>String(q).toLowerCase().includes(v)):!0).sort((k,q)=>Date.parse(q.timestamp)-Date.parse(k.timestamp))},[n,a,r,g,h]),N=Math.max(1,Math.ceil(A.length/ft)),M=Math.min(b,N),G=(M-1)*ft,ne=A.slice(G,G+ft);return e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Audit Log"}),e.jsx(Sn,{onClick:s.reopen,darkMode:t})]}),e.jsx("p",{className:`text-sm mt-1 ${t?"text-slate-300":"text-slate-600"}`,children:"Timestamped history of CST changes, including who made each change."})]}),e.jsx(xn,{open:s.isOpen,onClose:s.close,title:"Audit Log",darkMode:t,body:e.jsx("p",{children:"A timestamped history of changes made to your CST, including who made each change. Filter by event type, component, or actor, and expand a row to see exactly what changed."})}),e.jsxs("div",{className:`grid gap-3 md:grid-cols-4 rounded-lg border p-4 ${t?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Event type"}),e.jsx("select",{value:a,onChange:v=>{i(v.target.value),f(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:x.map(v=>e.jsx("option",{value:v,children:v==="all"?"All":v},v))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Component"}),e.jsx("select",{value:r,onChange:v=>{o(v.target.value),f(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:d.map(v=>e.jsx("option",{value:v,children:v==="all"?"All":v},v))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Actor"}),e.jsx("select",{value:g,onChange:v=>{c(v.target.value),f(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:P.map(v=>e.jsx("option",{value:v,children:v==="all"?"All":v},v))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Search"}),e.jsx("input",{value:h,onChange:v=>{l(v.target.value),f(1)},placeholder:"summary, reason, id",className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsx("div",{className:`rounded-lg border overflow-hidden ${t?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full text-sm",children:[e.jsx("thead",{className:t?"bg-slate-900 text-slate-200":"bg-slate-50 text-slate-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left",children:"When"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Who"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"What"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Context"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Details"})]})}),e.jsx("tbody",{className:t?"bg-slate-800 text-slate-100":"bg-white text-slate-800",children:ne.length?ne.map(v=>e.jsxs("tr",{className:t?"border-t border-slate-700":"border-t border-slate-100",children:[e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:Jo(v.timestamp)}),e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:v.actor||"Unknown user"}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{className:"font-medium",children:v.summary}),e.jsx("div",{className:`text-xs mt-1 ${t?"text-slate-300":"text-slate-600"}`,children:v.eventType})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{children:v.componentId||"-"}),e.jsx("div",{className:`text-xs ${t?"text-slate-300":"text-slate-600"}`,children:v.lens||"-"})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[v.reason?e.jsxs("div",{children:["Reason: ",v.reason]}):null,v.before||v.after?e.jsxs("details",{className:"mt-1",children:[e.jsx("summary",{className:"cursor-pointer text-xs underline",children:"Before/After"}),e.jsx("pre",{className:`mt-1 text-xs whitespace-pre-wrap ${t?"text-slate-300":"text-slate-600"}`,children:JSON.stringify({before:v.before,after:v.after},null,2)})]}):null]})]},v.id)):e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-6 text-center",colSpan:5,children:"No audit events found for the selected filters."})})})]})}),e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("span",{className:t?"text-slate-300":"text-slate-600",children:["Showing ",ne.length?G+1:0,"-",Math.min(G+ft,A.length)," of ",A.length]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>f(v=>Math.max(1,v-1)),disabled:M<=1,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Previous"}),e.jsxs("span",{className:t?"text-slate-200":"text-slate-700",children:["Page ",M," / ",N]}),e.jsx("button",{type:"button",onClick:()=>f(v=>Math.min(N,v+1)),disabled:M>=N,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Next"})]})]})]})}const Qo=[{id:"why",question:"Why are we doing this?",framework:"Force Field Analysis - Driving Forces",description:"The forces pushing for change - the case that makes it worth doing.",componentIds:["case_for_change"]},{id:"future",question:"What will the future look like?",framework:"Vision",description:"A clear picture of the destination, understood and shared by everyone.",componentIds:["vision"]},{id:"barriers",question:"What might prevent us from achieving the vision?",framework:"Force Field Analysis - Restraining Forces",description:"The forces working against change - risks, resistance and blockers to plan for.",componentIds:["case_for_change","resistance"]},{id:"impacted",question:"Who's going to be impacted by the change?",framework:"Stakeholder Analysis & Change Impact Analysis",description:"Everyone affected by the change, and how deeply it affects them.",componentIds:["stakeholder","change_impact"]},{id:"leading",question:"Who's leading the change?",framework:"Sponsor Coalition & Change Network",description:"The visible leaders and the network of champions carrying the change day to day.",componentIds:["sponsorship","change_network"]},{id:"persuade",question:"How will we persuade people to change?",framework:"Case for Change",description:"The compelling narrative that wins hearts and minds.",componentIds:["case_for_change"]}],Qs=[{phase:1,label:"Pre-Discovery",programmeStage:"Concept",tagline:"Define the change",deliverables:["Change Vision defined and communicated","Compelling case for change developed"],color:"bg-blue-50",darkColor:"bg-blue-950/45",textColor:"text-blue-700",darkTextColor:"text-blue-100",borderColor:"border-blue-300",darkBorderColor:"border-blue-700"},{phase:2,label:"Solution Design",programmeStage:"Definition",tagline:"Prepare the change",deliverables:["Change Impact analysed","Change Management inputted to Business Case","Engagement and Comms Strategy developed"],color:"bg-violet-50",darkColor:"bg-violet-950/45",textColor:"text-violet-700",darkTextColor:"text-violet-100",borderColor:"border-violet-300",darkBorderColor:"border-violet-700"},{phase:3,label:"Development",programmeStage:"Design & Develop",tagline:"Plan the change",deliverables:["Engagement and Comms Plan developed","Change Management Plan developed"],color:"bg-amber-50",darkColor:"bg-amber-950/45",textColor:"text-amber-700",darkTextColor:"text-amber-100",borderColor:"border-amber-300",darkBorderColor:"border-amber-700"},{phase:4,label:"Deployment / Go Live",programmeStage:"Implementation",tagline:"Manage implementation of the change",deliverables:["Change Management Plan executed","Communications delivered and Stakeholders engaged","Future State Processes validated","Skills gaps addressed","Future State Processes trialled and in use"],color:"bg-orange-50",darkColor:"bg-orange-950/45",textColor:"text-orange-700",darkTextColor:"text-orange-100",borderColor:"border-orange-300",darkBorderColor:"border-orange-700"},{phase:5,label:"Post-Deployment",programmeStage:"Transition / Close",tagline:"Reinforce and sustain the change",deliverables:["Change adoption evaluated","Business Change refinements actioned","Change sustained"],color:"bg-green-50",darkColor:"bg-green-950/45",textColor:"text-green-700",darkTextColor:"text-green-100",borderColor:"border-green-300",darkBorderColor:"border-green-700"}],Zo=[{title:"Handling Resistance",body:"Helping project managers navigate potential roadblocks and maintain project momentum through identifying and addressing resistance using effective communication, stakeholder engagement, and mitigation strategies."},{title:"Engaging Stakeholders",body:"Identifying key individuals and groups affected by the project and working closely with them to understand concerns, gather feedback, and ensure their perspectives are considered."},{title:"Communicating and Raising Awareness",body:"Developing engagement and communication plans that support project managers in creating clear and consistent messaging about the project's purpose, goals, and benefits."},{title:"Managing Expectations",body:"Setting realistic expectations for stakeholders regarding project outcomes, timelines, and potential disruptions by addressing concerns, clarifying misconceptions, and managing expectations."},{title:"Ensuring Change Readiness",body:"Assessing the readiness of an organisation or team for change and developing strategies to bridge any gaps."},{title:"Mitigating Risks",body:"Through anticipating and addressing risks associated with change, such as resistance, lack of stakeholder support, or unexpected obstacles."},{title:"Adopting Change Sustainably",body:"Supporting project managers in developing strategies to embed the changes into the organisation's culture, processes, and systems."}];function Ut({title:n,description:t,isOpen:s,onToggle:a,children:i,darkMode:r=!1}){return e.jsxs("section",{className:`mb-4 overflow-hidden rounded-lg border ${r?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("button",{type:"button",onClick:a,"aria-expanded":s,className:`flex w-full items-center justify-between gap-4 p-4 text-left transition-colors ${r?"bg-slate-900 hover:bg-slate-800":"bg-white hover:bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:n}),t?e.jsx("p",{className:`mt-0.5 text-sm ${r?"text-slate-300":"text-slate-500"}`,children:t}):null]}),e.jsx("span",{className:`shrink-0 text-xl font-bold transition-transform ${r?"text-slate-500":"text-slate-400"} ${s?"rotate-45":""}`,children:"+"})]}),s?e.jsx("div",{className:`border-t p-5 pt-4 ${r?"border-slate-700 bg-slate-900":"border-slate-100 bg-white"}`,children:i}):null]})}function er({onComponentClick:n,guidanceTarget:t="Default",linkOverrides:s,showAdditionalGuidanceLinks:a=!0,darkMode:i=!1}){const[r,o]=u.useState("questions"),[g,c]=u.useState(null),h=b=>{o(f=>f===b?null:b)},l=b=>{c(f=>f===b?null:b)};return e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsx("h2",{className:`mb-2 text-2xl font-bold ${i?"text-slate-100":"text-slate-800"}`,children:"Change Management Toolkit"}),e.jsx("p",{className:`mb-8 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:"NHS England Programme Delivery Lifecycle - an introduction to the five change phases and the role of the Change Manager."}),e.jsxs("div",{className:"bg-[#005eb8] text-white rounded-lg p-6 mb-8 flex flex-col sm:flex-row sm:items-center gap-4",children:[e.jsx("div",{className:"flex-shrink-0 w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold",children:"!"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-blue-100 uppercase tracking-wide mb-1",children:"When is the best time to start thinking about Change Management?"}),e.jsx("p",{className:"text-2xl font-bold",children:"Answer: Now!"}),e.jsx("p",{className:"text-sm text-blue-100 mt-1",children:"Change management should be considered from the very start of any project - not as an afterthought at go-live."})]})]}),e.jsxs(Ut,{title:"The Five Change Phases",description:"Select a phase to see the key deliverables expected at that stage.",isOpen:r==="phases",onToggle:()=>h("phases"),darkMode:i,children:[e.jsx("div",{className:`mb-6 hidden grid-cols-5 gap-1 overflow-hidden rounded-lg border text-center text-xs font-semibold md:grid ${i?"border-slate-700":"border-slate-200"}`,children:Qs.map(b=>e.jsxs("button",{onClick:()=>l(b.phase),className:`py-2 px-1 transition-colors ${g===b.phase?`${b.color} ${b.textColor} ring-2 ring-inset ring-current`:i?"bg-slate-800 text-slate-300 hover:bg-slate-700":"bg-slate-100 text-slate-500 hover:bg-slate-200"}`,children:["Phase ",b.phase]},b.phase))}),e.jsx("div",{className:"space-y-3",children:Qs.map(b=>{const f=g===b.phase;return e.jsxs("div",{className:`rounded-lg border overflow-hidden transition-shadow ${i?b.darkBorderColor:b.borderColor} ${f?"shadow-md":""}`,children:[e.jsxs("button",{onClick:()=>l(b.phase),className:`w-full flex items-center justify-between p-4 text-left transition-colors ${i?b.darkColor:b.color}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 border ${i?`${b.darkTextColor} bg-slate-900 ${b.darkBorderColor}`:`${b.textColor} bg-white ${b.borderColor}`}`,children:b.phase}),e.jsxs("div",{children:[e.jsx("p",{className:`font-semibold text-sm ${i?b.darkTextColor:b.textColor}`,children:b.label}),e.jsxs("p",{className:`text-xs ${i?"text-slate-300":"text-slate-500"}`,children:[e.jsxs("span",{className:"italic",children:['"',b.tagline,'"']})," · ",b.programmeStage]})]})]}),e.jsx("span",{className:`text-lg font-bold transition-transform ${i?b.darkTextColor:b.textColor} ${f?"rotate-45":""}`,children:"+"})]}),f&&e.jsxs("div",{className:`border-t px-5 pb-5 pt-3 ${i?"border-slate-700 bg-slate-900":"border-slate-100 bg-white"}`,children:[e.jsx("p",{className:`mb-3 text-xs font-semibold uppercase tracking-wide ${i?"text-slate-300":"text-slate-500"}`,children:"Key deliverables"}),e.jsx("ul",{className:"space-y-2",children:b.deliverables.map((x,d)=>e.jsxs("li",{className:`flex items-start gap-2 text-sm ${i?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{className:`mt-0.5 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${i?`${b.darkColor} ${b.darkTextColor}`:`${b.color} ${b.textColor}`}`,children:d+1}),x]},d))})]})]},b.phase)})})]}),e.jsx(Ut,{title:"The 6 Key Questions",description:"Six questions worth returning to throughout the life of the programme, each backed by a change model and linked to where you can act on it.",isOpen:r==="questions",onToggle:()=>h("questions"),darkMode:i,children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:Qo.map((b,f)=>{const x=jt(t,b.componentIds[0],"inputs",s,a).slice(0,2);return e.jsxs("div",{className:`rounded-md border p-4 ${i?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsxs("span",{className:"shrink-0 w-7 h-7 rounded-full bg-blue-100 text-[#005eb8] text-xs font-bold flex items-center justify-center",children:["Q",f+1]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:b.question}),e.jsx("span",{className:`mt-1 inline-block rounded border px-2 py-0.5 text-xs font-medium ${i?"border-indigo-500/40 bg-indigo-500/15 text-indigo-200":"border-indigo-200 bg-indigo-50 text-indigo-700"}`,children:b.framework})]})]}),e.jsx("p",{className:`mt-3 text-xs leading-relaxed ${i?"text-slate-300":"text-slate-600"}`,children:b.description}),x.length?e.jsx("div",{className:"mt-3 flex flex-wrap gap-x-3 gap-y-1",children:x.map(d=>e.jsx("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-medium text-[#005eb8] underline",children:d.label},`${b.id}-${d.url}`))}):null,e.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:b.componentIds.map(d=>{const P=Jt(d);return P?e.jsxs("button",{type:"button",onClick:()=>n(d),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold transition-colors ${i?"border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25":"border-blue-200 bg-blue-50 text-[#005eb8] hover:bg-blue-100"}`,children:["Go to ",P.label]},d):null})})]},b.id)})})}),e.jsx(Ut,{title:"The Role of the Change Manager",description:"Change management (and change managers) provide essential assistance to project managers through:",isOpen:r==="role",onToggle:()=>h("role"),darkMode:i,children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:Zo.map(b=>e.jsxs("div",{className:`rounded-md border p-4 ${i?"border-slate-700 bg-slate-800":"border-slate-100 bg-slate-50"}`,children:[e.jsx("p",{className:"text-sm font-semibold text-[#005eb8] mb-1",children:b.title}),e.jsx("p",{className:`text-xs leading-relaxed ${i?"text-slate-300":"text-slate-600"}`,children:b.body})]},b.title))})}),e.jsxs("div",{className:`flex flex-col gap-4 rounded-lg border p-5 sm:flex-row sm:items-center ${i?"border-slate-700 bg-slate-800":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:`mb-1 text-sm font-semibold ${i?"text-slate-100":"text-slate-700"}`,children:"Explore the full Toolkit"}),e.jsx("p",{className:`text-xs ${i?"text-slate-300":"text-slate-500"}`,children:"Access templates, frameworks, and guidance materials on the NHS Change Management Network workspace."})]}),e.jsx("a",{href:"https://future.nhs.uk/CMN/view?objectId=129489733",target:"_blank",rel:"noopener noreferrer",className:"shrink-0 inline-flex items-center gap-2 rounded-md bg-[#005eb8] text-white text-sm font-medium px-4 py-2 hover:bg-blue-700 transition-colors",children:"Change Management Toolkit ↗"})]})]})}function nr(n){return n.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"export"}function Ua(n){var t;return(t=n==null?void 0:n.url)!=null&&t.trim()?"custom":((n==null?void 0:n.fallback)??"default")==="base"?"base":"default"}function Ma({aliases:n,onChange:t,darkMode:s}){const[a,i]=u.useState(""),r=()=>{const o=a.trim();if(!o||n.some(g=>g.toLowerCase()===o.toLowerCase())){i("");return}t([...n,o]),i("")};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[n.map(o=>e.jsxs("span",{className:`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${s?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[o,e.jsx("button",{type:"button",onClick:()=>t(n.filter(g=>g!==o)),"aria-label":`Remove "${o}"`,className:s?"text-slate-400 hover:text-slate-100":"text-slate-500 hover:text-slate-800",children:"×"})]},o)),!n.length&&e.jsx("span",{className:`text-xs ${s?"text-slate-500":"text-slate-400"}`,children:"No extra matching text added yet."})]}),e.jsxs("div",{className:"mt-2 flex gap-2",children:[e.jsx("input",{type:"text",value:a,onChange:o=>i(o.target.value),onKeyDown:o=>{o.key==="Enter"&&(o.preventDefault(),r())},placeholder:"Add text this link should also match...",className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${s?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:r,className:Re,children:"Add"})]})]})}function tr({link:n,perLink:t,baseOverrideUrl:s,onSave:a,onClose:i,darkMode:r}){const[o,g]=u.useState(Ua(t)),[c,h]=u.useState((t==null?void 0:t.url)??""),[l,b]=u.useState((t==null?void 0:t.matchAliases)??[]),f=(s==null?void 0:s.trim())||$n.url,x=La(n.label).find(A=>A!==n.label),d=[{value:"default",label:"Default Toolkit Link",url:n.url},{value:"base",label:"Project Specific Homepage",url:f},{value:"custom",label:"Custom URL",url:c}],P=()=>{if(o==="custom"&&!c.trim()){window.alert("Enter a custom URL, or choose Default or Base instead.");return}const A={fallback:o==="base"?"base":"default",url:o==="custom"?c.trim():void 0,matchAliases:l.length?l:void 0};a(o==="default"&&!l.length?void 0:A)};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":`Edit ${n.label} link`,className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${r?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${r?"text-slate-100":"text-slate-900"}`,children:n.label}),e.jsx("button",{type:"button",onClick:i,"aria-label":"Close",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${r?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:"mt-4 space-y-2",children:d.map(A=>e.jsxs("label",{className:`flex items-start gap-2 rounded-md border p-2.5 text-sm ${o===A.value?r?"border-blue-400 bg-blue-500/10":"border-blue-400 bg-blue-50":r?"border-slate-700":"border-slate-200"}`,children:[e.jsx("input",{type:"radio",name:`link-source-${n.key}`,checked:o===A.value,onChange:()=>g(A.value),className:"mt-1"}),e.jsxs("span",{className:"flex-1",children:[e.jsx("span",{className:`block font-medium ${r?"text-slate-100":"text-slate-800"}`,children:A.label}),A.value==="custom"&&o==="custom"?e.jsx("input",{type:"url",value:c,onChange:N=>h(N.target.value),placeholder:"https://...",className:`mt-1 w-full rounded border px-2 py-1.5 text-xs ${r?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}):A.url?e.jsx("a",{href:A.url,target:"_blank",rel:"noopener noreferrer",onClick:N=>N.stopPropagation(),className:`block truncate text-xs underline ${r?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:A.url}):e.jsx("span",{className:`block truncate text-xs ${r?"text-slate-400":"text-slate-500"}`,children:"No URL set yet."})]})]},A.value))}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${r?"text-slate-400":"text-slate-500"}`,children:"Match text"}),e.jsx("p",{className:`mt-1 text-xs ${r?"text-slate-300":"text-slate-500"}`,children:"This link is automatically matched in action/summary text. Add extra text below if it should match on other words too."}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-1.5",children:[e.jsxs("span",{className:`rounded-full border px-2 py-0.5 text-xs ${r?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[n.label," ",e.jsx("span",{className:"opacity-60",children:"(label)"})]}),x&&e.jsxs("span",{className:`rounded-full border px-2 py-0.5 text-xs ${r?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[x," ",e.jsx("span",{className:"opacity-60",children:"(auto-detected)"})]})]}),e.jsx("div",{className:"mt-2",children:e.jsx(Ma,{aliases:l,onChange:b,darkMode:r})})]}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:i,className:Re,children:"Cancel"}),e.jsx("button",{type:"button",onClick:P,className:En,children:"Save"})]})]})})}function sr({title:n,aliases:t,onSave:s,onClose:a,darkMode:i}){const[r,o]=u.useState(t);return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":`Match text for ${n}`,className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${i?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-900"}`,children:[n," - match text"]}),e.jsx("button",{type:"button",onClick:a,"aria-label":"Close",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${i?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("p",{className:`mt-2 text-xs ${i?"text-slate-300":"text-slate-500"}`,children:"This link is automatically matched by its name. Add extra text below if it should match on other words too."}),e.jsx("div",{className:"mt-3",children:e.jsx(Ma,{aliases:r,onChange:o,darkMode:i})}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:a,className:Re,children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>s(r),className:En,children:"Save"})]})]})})}function ar(n){const t=Oa[n]||[],s=new Map,a=new Map;return t.forEach(i=>{const r=Vn[i];((r==null?void 0:r.inputs)??[]).forEach(o=>s.set(o.key,o)),((r==null?void 0:r.deliverables)??[]).forEach(o=>a.set(o.key,o))}),{inputs:[...s.values()],deliverables:[...a.values()]}}function ir({orgProfile:n,onProfileUpdate:t,components:s,onComponentClick:a,onOpenOnboarding:i,onOpenGuidedSetup:r,darkMode:o=!1,currentUserId:g,onCurrentUserChange:c,showExternalLinksSection:h=!1}){var Le,Ve,j,Q,le,be,Ge,he,ve,fe,en,pn,nn,Ee,He,cn;const[l,b]=u.useState(n),[f,x]=u.useState(null),[d,P]=u.useState(null),A=u.useRef(null),N=bn("cst-personalisation"),M=Ct(l),G=wa(M);l.trustName.trim()&&(l.projectName||"").trim()&&(l.leadName||"").trim(),u.useEffect(()=>{b(n)},[n]);const ne=u.useCallback(S=>{const _={...l,trustName:S};b(_),t(_)},[l,t]),v=u.useCallback(S=>{const _={...l,projectName:S};b(_),t(_)},[l,t]),k=u.useCallback(S=>{const _={...l,leadName:S};b(_),t(_)},[l,t]),[q,K]=u.useState(null),I=u.useCallback(S=>{S!==l.cst.pathway&&K(S)},[l.cst.pathway]),ae=u.useCallback(()=>{if(!q)return;const S={...l,cst:{...l.cst,pathway:q}};b(S),t(S),K(null)},[q,l,t]),J=u.useCallback(()=>{K(null)},[]),de=u.useCallback((S,_)=>{const W={...l,cst:{...l.cst,[S]:_}};b(W),t(W)},[l,t]),L=u.useCallback(S=>{const _={...l,cst:{...l.cst,toolkitChoice:S}};b(_),t(_)},[l,t]),te=u.useCallback(S=>{const _={...l,linkOverrides:S};b(_),t(_)},[l,t]),ue=u.useCallback((S,_)=>{const W={...l.componentFurtherReading};_.trim()?W[S]=_.trim():delete W[S];const se={...l,componentFurtherReading:W};b(se),t(se)},[l,t]),re=u.useCallback(S=>{var z;const _={key:`custom-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,label:"",url:"",type:"additional"},W={...l.customComponentLinks,[S]:[...((z=l.customComponentLinks)==null?void 0:z[S])||[],_]},se={...l,customComponentLinks:W};b(se),t(se)},[l,t]),me=u.useCallback((S,_,W,se)=>{var tn;const z=((tn=l.customComponentLinks)==null?void 0:tn[S])||[],De={...l.customComponentLinks,[S]:z.map(ye=>ye.key===_?{...ye,[W]:se}:ye)},Ke={...l,customComponentLinks:De};b(Ke),t(Ke)},[l,t]),O=u.useCallback((S,_,W)=>{var Ke;const se=((Ke=l.customComponentLinks)==null?void 0:Ke[S])||[],z={...l.customComponentLinks,[S]:se.map(tn=>tn.key===_?{...tn,matchAliases:W.length?W:void 0}:tn)},De={...l,customComponentLinks:z};b(De),t(De)},[l,t]),oe=u.useCallback((S,_)=>{var De;const W=((De=l.customComponentLinks)==null?void 0:De[S])||[],se={...l.customComponentLinks,[S]:W.filter(Ke=>Ke.key!==_)},z={...l,customComponentLinks:se};b(z),t(z)},[l,t]),ge=u.useCallback(()=>{const S={id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:"",role:""},_={...l,teamMembers:[...l.teamMembers||[],S]};b(_),t(_)},[l,t]),Ie=u.useCallback((S,_,W)=>{const se={...l,teamMembers:(l.teamMembers||[]).map(z=>z.id===S?{...z,[_]:W}:z)};b(se),t(se)},[l,t]),Te=u.useCallback(S=>{const _={...l,teamMembers:(l.teamMembers||[]).filter(W=>W.id!==S)};b(_),t(_),g===S&&c("")},[l,t,g,c]),we=l.coreLinks&&l.coreLinks.length>0?l.coreLinks:Ra,Me=u.useCallback(()=>{const S={key:`core-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,label:"",url:"",type:"core"},_={...l,coreLinks:[...we,S]};b(_),t(_)},[l,we,t]),Ae=u.useCallback((S,_,W)=>{const se={...l,coreLinks:we.map(z=>z.key===S?{...z,[_]:W}:z)};b(se),t(se)},[l,we,t]),un=u.useCallback((S,_)=>{const W={...l,coreLinks:we.map(se=>se.key===S?{...se,matchAliases:_.length?_:void 0}:se)};b(W),t(W)},[l,we,t]),ln=u.useCallback(S=>{const _={...l,coreLinks:we.filter(W=>W.key!==S)};b(_),t(_)},[l,we,t]),Pe=l.toolLinks||[],y=u.useCallback(()=>{const S="highlight-builder",_={key:`tool-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,tool:S,matchText:vt[S].matchText},W={...l,toolLinks:[...Pe,_]};b(W),t(W)},[l,Pe,t]),T=u.useCallback((S,_)=>{const W={...l,toolLinks:Pe.map(se=>se.key===S?{...se,tool:_,matchText:vt[_].matchText}:se)};b(W),t(W)},[l,Pe,t]),E=u.useCallback((S,_)=>{const W={...l,toolLinks:Pe.map(se=>se.key===S?{...se,matchText:_}:se)};b(W),t(W)},[l,Pe,t]),R=u.useCallback(S=>{const _={...l,toolLinks:Pe.filter(W=>W.key!==S)};b(_),t(_)},[l,Pe,t]),U=u.useCallback(S=>{const _={...l,externalLinksInitiated:S};b(_),t(_)},[l,t]),ze=u.useCallback(()=>{const S={schemaVersion:"cst-v1",exportedAt:new Date().toISOString(),orgProfile:l},_=`cst-personalisation-${l.trustName?nr(l.trustName):"export"}.json`;Zn(_,JSON.stringify(S,null,2),"application/json")},[l]),Ye=u.useCallback(()=>{var S;(S=A.current)==null||S.click()},[]),Fe=u.useCallback(async S=>{var W;const _=(W=S.target.files)==null?void 0:W[0];if(S.target.value="",!!_)try{const se=await _.text(),z=JSON.parse(se);if(!z.orgProfile||typeof z.orgProfile!="object"){window.alert("This file does not contain Project Setup data.");return}const De=tt(z.orgProfile),Ke=Ct(De);if(!window.confirm("Import this Project Setup file? This replaces your current organisation profile, pathway/timeline, toolkit links, further reading, core links and team members."+(Ke.errors.length?`

Note: the imported data has ${Ke.errors.length} validation warning(s) you can fix after importing.`:"")))return;b(De),t(De)}catch{window.alert("Unable to read this file. Please choose a valid Project Setup export.")}},[t]);return e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-800"}`,children:"Project Setup"}),e.jsx(Sn,{onClick:N.reopen,darkMode:o})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:Ye,className:Re,children:"Import Setup"}),e.jsx("input",{ref:A,type:"file",accept:"application/json",className:"hidden",onChange:Fe}),e.jsx("button",{type:"button",onClick:ze,className:Re,children:"Export Setup"}),e.jsx("button",{type:"button",onClick:i,className:Re,"data-testid":"cst-show-intro-button",children:"Show introduction again"}),r?e.jsx("button",{type:"button",onClick:r,className:Re,children:"Guided Setup"}):null]})]}),e.jsx("p",{className:`text-sm -mt-4 ${o?"text-slate-300":"text-slate-600"}`,children:"This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways it follows, and how it's tracking against its readiness phases."}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 1: Organisation profile"}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Provide some initial details to the project name, and change manager"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-trust-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Organisation Name"}),e.jsx("input",{id:"org-trust-name",type:"text","data-testid":"cst-trust-name-input",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.trustName,onChange:S=>ne(S.target.value),"aria-invalid":!!G("trustName"),"aria-describedby":G("trustName")?"org-trust-name-error":void 0}),G("trustName")?e.jsx("p",{id:"org-trust-name-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:G("trustName")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-project-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Programme / Project Name"}),e.jsx("input",{id:"org-project-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.projectName||"",onChange:S=>v(S.target.value)})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-lead-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Lead Submitter (Change Lead)"}),e.jsx("input",{id:"org-lead-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.leadName||"",onChange:S=>k(S.target.value)})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 2: Pathway and timeline"}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Choose the full pathway title for your programme, then set key timeline dates."})]}),e.jsx("div",{className:"mt-3",children:e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-pathway",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Pathway"}),e.jsx("select",{id:"cst-pathway",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.cst.pathway,onChange:S=>I(S.target.value),"aria-invalid":!!G("cst.pathway"),"aria-describedby":G("cst.pathway")?"cst-pathway-error":void 0,children:Qn.map(S=>e.jsx("option",{value:S.value,children:S.label},S.value))}),G("cst.pathway")?e.jsx("p",{id:"cst-pathway-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:G("cst.pathway")}):null]})}),e.jsx(Na,{pathway:l.cst.pathway,darkMode:o}),e.jsxs("div",{className:"mt-3 grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-go-live",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Go Live Date (required)"}),e.jsx("input",{id:"cst-go-live",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.cst.goLiveDate,onChange:S=>de("goLiveDate",S.target.value),"aria-invalid":!!G("cst.goLiveDate"),"aria-describedby":G("cst.goLiveDate")?"cst-go-live-error":void 0}),G("cst.goLiveDate")?e.jsx("p",{id:"cst-go-live-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:G("cst.goLiveDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-full-adoption",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Full Adoption Date (optional)"}),e.jsx("input",{id:"cst-full-adoption",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.cst.fullAdoptionDate,onChange:S=>de("fullAdoptionDate",S.target.value),"aria-invalid":!!G("cst.fullAdoptionDate"),"aria-describedby":G("cst.fullAdoptionDate")?"cst-full-adoption-error":void 0}),G("cst.fullAdoptionDate")?e.jsx("p",{id:"cst-full-adoption-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:G("cst.fullAdoptionDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-benefit",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Benefit Realisation Date (optional)"}),e.jsx("input",{id:"cst-benefit",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.cst.benefitRealizationDate,onChange:S=>de("benefitRealizationDate",S.target.value),"aria-invalid":!!G("cst.benefitRealizationDate"),"aria-describedby":G("cst.benefitRealizationDate")?"cst-benefit-error":void 0}),G("cst.benefitRealizationDate")?e.jsx("p",{id:"cst-benefit-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:G("cst.benefitRealizationDate")}):null]})]}),M.errors.filter(S=>S.field.startsWith("cst.")).length>0?e.jsxs("div",{className:`mt-4 rounded-md border p-3 ${o?"border-amber-500/40 bg-amber-500/10":"border-amber-300 bg-amber-50"}`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-amber-200":"text-amber-800"}`,children:"CST validation warnings"}),e.jsx("ul",{className:`mt-2 space-y-1 text-sm ${o?"text-amber-100":"text-amber-900"}`,children:M.errors.filter(S=>S.field.startsWith("cst.")).map(S=>e.jsxs("li",{children:["- ",S.message]},S.field+S.message))})]}):null]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 3: Team Members"}),e.jsx("p",{className:`text-sm mt-1 ${o?"text-slate-300":"text-slate-600"}`,children:"Add the people working on this programme so actions and readiness slides can be assigned to a named owner. This roster is saved with the CST; who you're signed in as is remembered on this device only."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-current-user",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"You are signed in as"}),e.jsxs("select",{id:"cst-current-user",value:g||"",onChange:S=>c(S.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 md:w-1/2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Not selected"}),(l.teamMembers||[]).map(S=>e.jsxs("option",{value:S.id,children:[S.name||"Unnamed",S.role?` - ${S.role}`:""]},S.id))]})]}),e.jsxs("div",{className:"space-y-2",children:[(l.teamMembers||[]).map(S=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2 items-center",children:[e.jsx("input",{value:S.name,onChange:_=>Ie(S.id,"name",_.target.value),placeholder:"Name",className:`rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("input",{value:S.role,onChange:_=>Ie(S.id,"role",_.target.value),placeholder:"Role (e.g. Change Lead)",className:`rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("button",{type:"button",onClick:()=>Te(S.id),className:"shrink-0 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},S.id)),(l.teamMembers||[]).length?null:e.jsx("p",{className:`text-sm ${o?"text-slate-400":"text-slate-500"}`,children:"No team members added yet."})]}),e.jsx("button",{type:"button",onClick:ge,className:Re,children:"+ Add Team Member"})]}),e.jsx("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 4: External links"}),e.jsxs("label",{className:`flex items-center gap-2 text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:[e.jsx("input",{type:"checkbox",checked:!!l.externalLinksInitiated,onChange:S=>U(S.target.checked)}),"Links initiated"]})]}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:`This is normally only set up once at the start of a project. Once you're done, tick "Links initiated" to hide this section - re-enable "Show external links section" in Settings if you need to come back to it.`}),!l.externalLinksInitiated||h?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"All toolkit links across the tool point to the NHS Future platform by default. You can override the base toolkit destination for your organisation, or change individual links independently."}),e.jsxs("div",{className:`mt-3 rounded-md border p-3 text-xs ${o?"border-blue-500/30 bg-blue-500/10 text-blue-100":"border-blue-200 bg-blue-50 text-blue-900"}`,children:[e.jsx("p",{className:"font-semibold",children:"Fallback reference"}),e.jsxs("p",{className:"mt-1",children:["Project Specific Homepage: ",e.jsx("span",{className:"font-medium",children:$n.label})," (",$n.url,")"]}),e.jsx("p",{className:"mt-1",children:"Default Toolkit Link: the original NHS Future link defined per guidance item."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("label",{htmlFor:"cst-toolkit-choice",className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Default toolkit for assistant preview"}),e.jsx("select",{id:"cst-toolkit-choice",value:l.cst.toolkitChoice,onChange:S=>L(S.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:mi.map(S=>e.jsx("option",{value:S.key,children:S.label},S.key))}),e.jsx("p",{className:`mt-2 text-xs ${o?"text-slate-300":"text-slate-500"}`,children:"This controls which toolkit the chatbot-style assistant opens by default across the tool."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Project Specific Homepage"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"Replaces the Change Management Toolkit destination for all links that fall back to it."}),e.jsxs("p",{className:"mt-1 text-xs",children:["Currently:"," ",e.jsx("a",{href:((j=(Ve=(Le=l.linkOverrides)==null?void 0:Le.base)==null?void 0:Ve.url)==null?void 0:j.trim())||$n.url,target:"_blank",rel:"noopener noreferrer",className:`underline ${o?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:((be=(le=(Q=l.linkOverrides)==null?void 0:Q.base)==null?void 0:le.url)==null?void 0:be.trim())||$n.url})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Toolkit name"}),e.jsx("input",{type:"text",placeholder:$n.label,value:((he=(Ge=l.linkOverrides)==null?void 0:Ge.base)==null?void 0:he.label)??"",onChange:S=>{var _;return te({...l.linkOverrides,base:{...(_=l.linkOverrides)==null?void 0:_.base,label:S.target.value||void 0}})},className:`w-full rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Toolkit URL"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:$n.url,value:((fe=(ve=l.linkOverrides)==null?void 0:ve.base)==null?void 0:fe.url)??"",onChange:S=>{var _;return te({...l.linkOverrides,base:{...(_=l.linkOverrides)==null?void 0:_.base,url:S.target.value||void 0}})},className:`flex-1 min-w-0 rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),((pn=(en=l.linkOverrides)==null?void 0:en.base)==null?void 0:pn.url)&&e.jsx("button",{type:"button",onClick:()=>{var S;return te({...l.linkOverrides,base:{...(S=l.linkOverrides)==null?void 0:S.base,url:void 0}})},className:`shrink-0 rounded-md border px-3 py-2 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Reset"})]})]})]})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Additional Links"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"General reference links that aren't tied to a single component - shown here and matched into action/summary text across every component."})]}),e.jsx("div",{className:"space-y-2",children:we.map(S=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto,auto] gap-2 items-center",children:[e.jsx("input",{type:"text",placeholder:"Link name",value:S.label,onChange:_=>Ae(S.key,"label",_.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("input",{type:"url",placeholder:"https://...",value:S.url,onChange:_=>Ae(S.key,"url",_.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>P({link:S}),"aria-label":`Edit match text for ${S.label||"this core link"}`,className:`shrink-0 rounded border px-1.5 py-1.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"}),e.jsx("button",{type:"button",onClick:()=>ln(S.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},S.key))}),e.jsx("button",{type:"button",onClick:Me,className:Re,children:"+ Add Core Link"})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Tool linking"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"Matches text in action/summary bodies and turns it into a button that opens an in-app tool, instead of a link to a URL."})]}),e.jsx("div",{className:"space-y-2",children:Pe.map(S=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto] gap-2 items-center",children:[e.jsx("select",{value:S.tool,onChange:_=>T(S.key,_.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Sa.map(_=>e.jsx("option",{value:_,children:vt[_].label},_))}),e.jsx("input",{type:"text",placeholder:"Matched text",value:S.matchText,onChange:_=>E(S.key,_.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>R(S.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},S.key))}),e.jsx("button",{type:"button",onClick:y,className:Re,children:"+ Add Tool Link"})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Component links"}),e.jsxs("p",{className:`text-xs ${o?"text-slate-300":"text-slate-500"}`,children:[`Set the "Further Reading" link shown on each component's overview panel, and override any of its individual guidance links. Each link shows whether it currently points at the `,e.jsx("strong",{children:"Default Toolkit Link"})," (the original NHS Future link),"," ",e.jsx("strong",{children:"Project Specific Homepage"})," (your organisation's override above), or a"," ",e.jsx("strong",{children:"Custom"})," URL you've set - click the pencil to change it. Additional links can be hidden from Settings if you only want the essentials."]}),s.map(S=>{var De,Ke,tn;const _=ar(S.id),W=[..._.inputs,..._.deliverables],se=W.filter(ye=>{var We,Ne,jn,Ue;return(Ue=(jn=(Ne=(We=l.linkOverrides)==null?void 0:We.links)==null?void 0:Ne[ye.key])==null?void 0:jn.url)==null?void 0:Ue.trim()}).length,z=!!((De=l.componentFurtherReading)!=null&&De[S.id]);return e.jsxs("details",{className:`group overflow-hidden rounded-md border ${o?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between gap-3 p-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] ${o?"bg-slate-800 text-slate-200 hover:bg-slate-700":"bg-slate-50 text-slate-700 hover:bg-blue-50"} [&::-webkit-details-marker]:hidden`,children:[e.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[e.jsx("span",{"aria-hidden":"true",className:`shrink-0 text-lg font-bold leading-none transition-transform group-open:rotate-45 ${o?"text-blue-300":"text-[#005eb8]"}`,children:"+"}),e.jsx("span",{className:"truncate",children:S.label})]}),e.jsxs("span",{className:"flex items-center gap-2",children:[z&&e.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-emerald-500/20 text-emerald-300":"bg-emerald-100 text-emerald-700"}`,children:"Further reading set"}),se>0&&e.jsxs("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-blue-500/20 text-blue-300":"bg-blue-100 text-blue-700"}`,children:[se," override",se!==1?"s":""]})]})]}),e.jsxs("div",{className:`border-t divide-y ${o?"border-slate-700 divide-slate-700":"border-slate-200 divide-slate-100"}`,children:[e.jsxs("div",{className:"p-3 space-y-1.5",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:"Further reading"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:"https://...",value:((Ke=l.componentFurtherReading)==null?void 0:Ke[S.id])??"",onChange:ye=>ue(S.id,ye.target.value),className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),z&&e.jsx("button",{type:"button",onClick:()=>ue(S.id,""),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Clear"})]})]}),!W.length&&e.jsx("p",{className:`p-3 text-xs ${o?"text-slate-500":"text-slate-400"}`,children:"No default guidance links for this component - add one below."}),["inputs","deliverables"].map(ye=>{const We=_[ye]??[];return We.length?e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:ye}),We.map(Ne=>{var je,kn;const jn=(kn=(je=l.linkOverrides)==null?void 0:je.links)==null?void 0:kn[Ne.key],Ue=us(Ne,l.linkOverrides),On=Ua(jn),mn={default:o?"border-amber-500/40 bg-amber-500/15 text-amber-200":"bg-amber-50 border-amber-200 text-amber-800",custom:o?"border-green-500/40 bg-green-500/15 text-green-200":"bg-green-50 border-green-200 text-green-800",base:o?"border-red-500/30 bg-red-500/10 text-red-200":"bg-red-50 border-red-100 text-red-700"},Ln={default:"Default Toolkit Link",custom:"Custom",base:"Project Specific Homepage"};return e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-700"}`,children:[Ne.type!=="core"?"(Optional) ":"",Ne.label]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("a",{href:Ue.url,target:"_blank",rel:"noopener noreferrer",title:Ue.url,className:`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${mn[On]}`,children:Ln[On]}),e.jsx("button",{type:"button",onClick:()=>x(Ne),"aria-label":`Edit ${Ne.label} link`,className:`shrink-0 rounded-md border px-1.5 py-0.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"})]})]},Ne.key)})]},ye):null}),e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:"Custom links"}),(((tn=l.customComponentLinks)==null?void 0:tn[S.id])||[]).map(ye=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto,auto] gap-2 items-center",children:[e.jsx("input",{type:"text",placeholder:"Link name",value:ye.label,onChange:We=>me(S.id,ye.key,"label",We.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("input",{type:"url",placeholder:"https://...",value:ye.url,onChange:We=>me(S.id,ye.key,"url",We.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>P({link:ye,componentId:S.id}),"aria-label":`Edit match text for ${ye.label||"this link"}`,className:`shrink-0 rounded border px-1.5 py-1.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"}),e.jsx("button",{type:"button",onClick:()=>oe(S.id,ye.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},ye.key)),e.jsx("button",{type:"button",onClick:()=>re(S.id),className:Re,children:"+ Add Link"})]})]})]},S.id)})]})]}):e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:'External links were set up at project start. Turn on "Show external links section" in Settings if you need to come back and edit them.'})]})}),f&&e.jsx(tr,{link:f,perLink:(Ee=(nn=l.linkOverrides)==null?void 0:nn.links)==null?void 0:Ee[f.key],baseOverrideUrl:(cn=(He=l.linkOverrides)==null?void 0:He.base)==null?void 0:cn.url,onSave:S=>{var W;const _={...(W=l.linkOverrides)==null?void 0:W.links};S?_[f.key]=S:delete _[f.key],te({...l.linkOverrides,links:_}),x(null)},onClose:()=>x(null),darkMode:o}),d&&e.jsx(sr,{title:d.link.label||"Link",aliases:d.link.matchAliases||[],onSave:S=>{d.componentId?O(d.componentId,d.link.key,S):un(d.link.key,S),P(null)},onClose:()=>P(null),darkMode:o}),q&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-lg rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-900"}`,children:["Change pathway to ",fa[q],"?"]}),e.jsx("div",{className:`mt-3 space-y-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:q==="pathway-1"?e.jsx("p",{children:"This will regenerate every component's outcomes and actions for Pathway 1. Any items you've added yourself are kept."}):e.jsx("p",{children:"Pathway 2 and Pathway 3 don't have their own outcomes and actions written yet, so this will clear the Pathway 1 stand-in content instead of leaving it in place - components will show an honest empty state until pathway-specific content is added. Any items you've added yourself are kept."})}),e.jsxs("div",{className:"mt-5 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:J,className:Re,children:"Cancel"}),e.jsx("button",{type:"button",onClick:ae,className:"inline-flex items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Confirm change"})]})]})}),e.jsx(xn,{open:N.isOpen,onClose:N.close,title:"Project Setup",darkMode:o,body:e.jsx("p",{children:"This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways it follows, and how it's tracking against its readiness phases. You can export or import just this page's data, and manage the external links shown throughout the tool."})})]})}function or({steps:n,onComponentClick:t,onActionView:s,colorAccessibilityMode:a="standard",darkMode:i=!1}){const[r,o]=u.useState({}),g=a==="color-blind-friendly"?Ti:Ia;return e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"What To Do Next"}),e.jsx("span",{className:`text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Your current phase"})]}),e.jsx("p",{className:`text-sm mb-4 ${i?"text-slate-300":"text-slate-500"}`,children:"Every component in your current phase that still has pending actions, ranked by timeline risk - overdue first."}),n.length>0?e.jsx("div",{className:"space-y-3",children:n.map(c=>{var b;const h=!!r[c.componentId],l=c.outstandingActions.length;return e.jsxs("div",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("button",{type:"button",onClick:()=>t(c.componentId),className:"flex w-full items-center justify-between gap-3 text-left",children:[e.jsx("span",{className:`text-sm font-semibold hover:underline ${i?"text-slate-100":"text-slate-800"}`,children:c.componentLabel}),e.jsx("span",{title:c.bragReason,className:`text-xs font-semibold rounded px-2.5 py-0.5 ${g[c.bragStatus]}`,children:c.bragStatus})]}),e.jsx("p",{className:`text-sm mt-1 ${i?"text-slate-300":"text-slate-600"}`,children:c.summary}),(b=c.toolkitLinks)!=null&&b.length?e.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:c.toolkitLinks.map(f=>e.jsx("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-medium text-[#005eb8] underline",children:f.label},`${c.componentId}-${f.url}`))}):null,l>0&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("button",{type:"button",onClick:()=>o(f=>({...f,[c.componentId]:!f[c.componentId]})),className:`text-xs font-semibold underline ${i?"text-slate-300 hover:text-slate-100":"text-slate-600 hover:text-slate-900"}`,children:[h?"Hide":"Show"," outstanding action",l===1?"":"s"," (",l,")"]}),h&&e.jsx("div",{className:`mt-2 overflow-x-auto rounded-md border ${i?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full divide-y text-xs",children:[e.jsx("thead",{className:i?"bg-slate-800":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Lens"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Status"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"View"})]})}),e.jsx("tbody",{className:`divide-y ${i?"divide-slate-700":"divide-slate-100"}`,children:c.outstandingActions.map(f=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-2 py-1.5 font-medium ${i?"text-slate-200":"text-slate-700"}`,children:f.lens}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:f.text}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:f.owner||"Unassigned"}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:f.status||"-"}),e.jsx("td",{className:"px-2 py-1.5",children:e.jsx("button",{type:"button",onClick:()=>s(c.componentId,f.lens,f.id),className:`font-semibold underline ${i?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:"View"})})]},f.id))})]})})]})]},c.componentId)})}):e.jsx("p",{className:`text-sm ${i?"text-slate-400":"text-slate-500"}`,children:"Nothing pending for your current phase. Continue tracking actions and maintain evidence quality."})]})}function rr({components:n,store:t,getEntry:s,onComponentClick:a,darkMode:i=!1}){const[r,o]=u.useState(null),g=n.reduce((h,l)=>(h[l.phase]=h[l.phase]||[],h[l.phase].push(l),h),{}),c=(h,l)=>{const b=`${h}:${l}`;o(f=>f===b?null:b)};return e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Programme Change Hierarchy"}),e.jsxs("p",{className:`mt-1 mb-4 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:["Your programme has ",n.length," components, each viewed through one or more lenses. A component is a change topic you assess and track. A lens is the perspective used to assess it (e.g. leadership, risk, capability). Click a lens to see its actions, or open the full assessment."]}),e.jsx("div",{className:"space-y-5",children:ba.filter(h=>{var l;return(l=g[h])==null?void 0:l.length}).map(h=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:`text-sm font-semibold ${i?"text-slate-100":"text-slate-700"}`,children:["Phase ",h,": ",hn[h]]}),e.jsx("div",{className:"space-y-2",children:g[h].map(l=>{const b=l.lenses.reduce((x,d)=>{const P=s(l.id,d);return{total:x.total+P.actions.length,completed:x.completed+P.actions.filter(A=>A.status==="Completed").length}},{total:0,completed:0}),f=Wi(t,l.id,s);return e.jsxs("div",{"data-testid":`cst-component-card-${l.id}`,className:`w-full rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("span",{className:`font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:l.label}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:`text-xs ${i?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",Zt(l.target)]}),e.jsx("button",{type:"button",onClick:()=>a(l.id),className:`text-xs font-semibold underline ${i?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:"Open full assessment"})]})]}),e.jsx("div",{className:"mt-2 flex flex-wrap gap-1.5",children:l.lenses.map(x=>{const d=s(l.id,x),P=r===`${l.id}:${x}`;return e.jsxs("button",{type:"button",onClick:()=>c(l.id,x),"aria-expanded":P,className:`text-xs px-2 py-1 rounded-full border transition-colors ${P?i?"border-blue-400 bg-blue-500/25 text-blue-100":"border-blue-400 bg-blue-100 text-blue-900":d.score>=l.target?i?"border-green-500/40 bg-green-500/15 text-green-200 hover:bg-green-500/25":"bg-green-50 border-green-200 text-green-800 hover:bg-green-100":d.score>0?i?"border-amber-500/40 bg-amber-500/15 text-amber-200 hover:bg-amber-500/25":"bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100":i?"border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700":"bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"}`,children:[x,": ",d.score,"/",l.target]},x)})}),e.jsxs("p",{className:`mt-2 text-xs ${i?"text-slate-300":"text-slate-500"}`,children:["Lens actions: ",b.completed,"/",b.total," complete · Outcomes: ",f.completed,"/",f.total," complete"]}),l.lenses.map(x=>{if(!(r===`${l.id}:${x}`))return null;const P=s(l.id,x);return e.jsx("div",{className:`mt-3 overflow-x-auto rounded-md border ${i?"border-slate-700":"border-slate-200"}`,children:P.actions.length?e.jsxs("table",{className:`min-w-full divide-y ${i?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"}`,children:[e.jsx("thead",{className:i?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"})]})}),e.jsx("tbody",{className:`divide-y ${i?"divide-slate-700":"divide-slate-100"}`,children:P.actions.map(A=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${i?"text-slate-100":"text-slate-800"}`,children:A.text||"Untitled action"}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`inline-flex whitespace-nowrap rounded-full border px-2 py-1 text-xs font-semibold ${Tn[A.status]}`,children:A.status})}),e.jsx("td",{className:`px-3 py-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:A.owner||"Unassigned"})]},A.id))})]}):e.jsx("p",{className:`p-3 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:"No actions yet for this lens."})},`${x}-table`)})]},l.id)})})]},`phase-group-${h}`))})]})}function lr({store:n,components:t,metrics:s,getEntry:a,onComponentClick:i,onActionView:r,phaseFocusMode:o="auto",manualPhaseFocus:g,colorAccessibilityMode:c="standard",darkMode:h=!1}){const l=bn("daily-checkin"),b=o==="manual"&&g?g:s.currentPhase,f=u.useMemo(()=>Aa(t,a,b),[t,a,b]);return e.jsxs("div",{className:"max-w-5xl mx-auto pb-20",children:[e.jsxs("div",{className:"mb-6 flex items-center gap-2",children:[e.jsx("h2",{className:`text-3xl font-bold ${h?"text-slate-100":"text-slate-800"}`,children:"Daily Check-in"}),e.jsx(Sn,{onClick:l.reopen,darkMode:h})]}),e.jsx("p",{className:`mb-6 -mt-4 text-sm ${h?"text-slate-300":"text-slate-500"}`,children:"Your daily triage: what's outstanding right now, and where it sits in the wider programme."}),e.jsxs("div",{className:"space-y-8",children:[e.jsx(or,{steps:f,onComponentClick:i,onActionView:r,colorAccessibilityMode:c,darkMode:h}),e.jsx(rr,{components:t,store:n,getEntry:a,onComponentClick:i,darkMode:h})]}),e.jsx(xn,{open:l.isOpen,onClose:l.close,title:"Daily Check-in",darkMode:h,body:e.jsx("p",{children:'This is your daily triage page - "What To Do Next" lists every component in your current phase with outstanding actions, ranked by timeline risk, and the Programme Change Hierarchy below gives you the full picture across every phase.'})})]})}const Mt=[1,2,3,4,5];function cr(n,t){const s=n.lenses.reduce((a,i)=>a+Number(t(n.id,i).score||0),0);return n.lenses.length?Number((s/n.lenses.length).toFixed(1)):0}function dr(n,t,s,a,i,r){if(n.phase>s)return{label:"Not in current phase yet",rowClass:r?"border-slate-600 bg-slate-800/80":"border-slate-200 bg-slate-50",chipClass:r?"bg-slate-700 text-slate-100":"bg-slate-200 text-slate-700",barClass:"bg-slate-400"};const o=cs(n.id,a),g=eo({averageScore:t,targetScore:n.target,checkedItemKeys:i,rule:o});return g.status==="off-track"?{label:`Off track (${g.completionPct}% checklist)`,rowClass:r?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:r?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:g.status==="attention"?{label:`Needs attention (${g.completionPct}% checklist)`,rowClass:r?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:r?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:t>=n.target?{label:`On track (${g.completionPct}% checklist)`,rowClass:r?"border-green-700 bg-green-950/45":"border-green-200 bg-green-50",chipClass:r?"bg-green-900 text-green-100":"bg-green-100 text-green-700",barClass:"bg-green-500"}:n.phase<s?{label:"Behind timeline",rowClass:r?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:r?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:n.phase===s?{label:"Due this phase",rowClass:r?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:r?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:{label:"In progress",rowClass:r?"border-blue-700 bg-blue-950/45":"border-blue-200 bg-blue-50",chipClass:r?"bg-blue-900 text-blue-100":"bg-blue-100 text-blue-700",barClass:"bg-blue-500"}}function ur({components:n,metrics:t,getEntry:s,onComponentClick:a,pathway:i,pathwayChecks:r,darkMode:o=!1}){const g=bn("component-delivery-timeline"),c=n.map(h=>{var f;const l=cr(h,s),b=((f=r[h.id])==null?void 0:f[i])||[];return{component:h,average:l,status:dr(h,l,t.currentPhase,i,b,o)}});return e.jsxs("section",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-2xl border p-6 shadow-sm`,children:[e.jsx("p",{className:`text-sm font-semibold uppercase tracking-[0.18em] ${o?"text-slate-300":"text-slate-500"}`,children:"Component Delivery Timeline"}),e.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-900"}`,children:"Component delivery timeline"}),e.jsx(Sn,{onClick:g.reopen,darkMode:o})]}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"This gantt-style view shows when each component should be completed by phase. Components are coloured by whether they are on track against the current phase. Select a row to jump into the matching assessment tab."})]}),e.jsx(xn,{open:g.isOpen,onClose:g.close,title:"Component Delivery Timeline",darkMode:o,body:e.jsx("p",{children:"A gantt-style view of when each component should be completed by phase, coloured by whether it's on track. Select a row to jump straight into that component's assessment."})}),e.jsx("div",{className:"lg:hidden space-y-3",children:c.map(({component:h,average:l,status:b})=>e.jsxs("button",{type:"button",onClick:()=>a(h.id),className:`w-full rounded-xl border p-4 text-left transition-colors ${o?"hover:border-slate-500":"hover:border-slate-300"} ${b.rowClass}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:h.label}),e.jsxs("div",{className:`mt-1 text-xs ${o?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",Zt(h.target)," · completes by Phase"," ",h.phase]})]}),e.jsx("span",{className:`rounded-full px-4 py-1 text-xs font-semibold ${b.chipClass}`,children:b.label})]}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("div",{className:`mb-1 flex items-center justify-between text-xs ${o?"text-slate-300":"text-slate-600"}`,children:[e.jsx("span",{children:"Timeline"}),e.jsxs("span",{children:["Average ",l]})]}),e.jsx("div",{className:"grid grid-cols-5 gap-1",children:Mt.map(f=>{const x=f<=h.phase,d=f===h.phase;return e.jsxs("div",{children:[e.jsx("div",{className:`h-2 rounded-full ${o?"bg-slate-700/70":"bg-white/80"}`,children:x?e.jsx("div",{className:`h-full rounded-full ${b.barClass} ${d?"opacity-100":"opacity-35"}`,title:d?"Expected completion phase":"Planned timeline"}):null}),e.jsxs("div",{className:`mt-1 text-center text-[10px] ${o?"text-slate-400":"text-slate-500"}`,children:["P",f]})]},`${h.id}-mobile-${f}`)})})]})]},`mobile-${h.id}`))}),e.jsx("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} hidden lg:block rounded-2xl border p-5 shadow-sm overflow-x-auto`,children:e.jsxs("div",{className:"min-w-[860px]",children:[e.jsxs("div",{className:`grid grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 border-b pb-3 text-xs font-semibold uppercase tracking-wider ${o?"border-slate-700 text-slate-400":"border-slate-200 text-slate-500"}`,children:[e.jsx("div",{children:"Component"}),Mt.map(h=>e.jsxs("div",{className:"text-center",children:["Phase ",h]},h)),e.jsx("div",{className:"text-center",children:"Average"}),e.jsx("div",{className:"text-center",children:"Status"})]}),e.jsx("div",{className:"mt-4 space-y-3",children:c.map(({component:h,average:l,status:b})=>e.jsxs("button",{type:"button",onClick:()=>a(h.id),className:`grid w-full grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 rounded-xl border p-2.5 text-left transition-colors ${o?"hover:border-slate-500":"hover:border-slate-300"} ${b.rowClass}`,children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:h.label}),e.jsxs("div",{className:`mt-1 text-xs ${o?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",Zt(h.target)," · completes by Phase"," ",h.phase]})]}),Mt.map(f=>{const x=f<=h.phase,d=f===h.phase;return e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:`h-7 w-full rounded-full px-1 py-1 ${o?"bg-slate-700/70":"bg-white/70"}`,children:x?e.jsx("div",{className:`h-full rounded-full ${b.barClass} ${d?"opacity-100":"opacity-35"}`,title:d?"Expected completion phase":"Planned timeline"}):null})},`${h.id}-${f}`)}),e.jsx("div",{className:`flex items-center justify-center text-sm font-semibold ${o?"text-slate-100":"text-slate-700"}`,children:l}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("span",{className:`rounded-full text-center px-2.5 py-1 text-xs font-semibold ${b.chipClass}`,children:b.label})})]},h.id))}),e.jsxs("div",{className:`mt-4 rounded-md border p-3 text-xs ${o?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{className:"font-semibold",children:"Key:"})," Grey rows are not yet due for the current phase. Red rows indicate overdue or off-track work."]})]})})]})}function mr(n){return bi.sanitize(n,{USE_PROFILES:{html:!0}})}const gr=[{label:"Bold",command:"bold",icon:"B"},{label:"Italic",command:"italic",icon:"I"},{label:"Bullet list",command:"insertUnorderedList",icon:"•"},{label:"Numbered list",command:"insertOrderedList",icon:"1."}];function Zs({value:n,onChange:t,placeholder:s,className:a}){const i=u.useRef(null);u.useEffect(()=>{const c=i.current;c&&c.innerHTML!==n&&(c.innerHTML=n)},[n]);const r=()=>{const c=i.current;c&&t(mr(c.innerHTML))},o=c=>{var h;(h=i.current)==null||h.focus(),document.execCommand(c,!1),r()},g=!n||n==="<br>";return e.jsxs("div",{className:`rounded-md border border-slate-300 bg-white ${a||""}`,children:[e.jsx("div",{"data-print-hide":"true",className:"flex items-center gap-1 border-b border-slate-200 bg-slate-50 px-1.5 py-1",children:gr.map(c=>e.jsx("button",{type:"button",title:c.label,"aria-label":c.label,onMouseDown:h=>h.preventDefault(),onClick:()=>o(c.command),className:"flex h-6 min-w-[1.5rem] items-center justify-center rounded px-1 text-xs font-bold text-slate-600 hover:bg-slate-200",children:c.icon},c.command))}),e.jsxs("div",{className:"relative",children:[g&&s?e.jsx("span",{className:"pointer-events-none absolute left-2 top-1.5 text-sm text-slate-400",children:s}):null,e.jsx("div",{ref:i,contentEditable:!0,suppressContentEditableWarning:!0,onInput:r,onBlur:r,className:"min-h-[4.5rem] px-2 py-1.5 text-sm text-slate-800 outline-none [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"})]})]})}function rn(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}const ss="nhs-highlight-builder-layout",ea=[{id:"executive-summary",label:"Executive Summary"},{id:"change-dashboard",label:"Change Dashboard"},{id:"adoption-metrics",label:"Adoption Metrics"},{id:"what-went-well",label:"What Went Well"},{id:"risks-issues",label:"Key Risks and Issues"},{id:"stakeholder-insights",label:"Stakeholder Insights"},{id:"interventions-delivered",label:"Change Interventions Delivered"},{id:"upcoming-priorities",label:"Upcoming Priorities"},{id:"decisions-required",label:"Decisions Required"},{id:"change-lead-assessment",label:"Change Lead Assessment"}],fn={title:"Executive Highlight Report",themeColor:"#005eb8",logoDataUrl:"",programmeName:"",reportingPeriod:"",changeLeadName:"",sroName:"",overallStatus:"Amber",orientation:"landscape",bragSlides:[],sections:["executive-summary","change-dashboard","adoption-metrics","what-went-well","risks-issues","stakeholder-insights","interventions-delivered","upcoming-priorities","decisions-required","change-lead-assessment"],sectionNarratives:{},metricRows:[],riskRows:[],stakeholderPositivePct:0,stakeholderNeutralPct:0,stakeholderNegativePct:0,interventionRows:[],decisionRows:[],assessmentRows:[]},pr={Green:"bg-green-100 text-green-800 border-green-200",Amber:"bg-amber-100 text-amber-800 border-amber-200",Red:"bg-red-100 text-red-800 border-red-200"},hr={Green:"bg-green-500",Amber:"bg-amber-500",Red:"bg-red-500"};function na({status:n}){return e.jsxs("span",{className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${pr[n]}`,children:[e.jsx("span",{className:`h-2 w-2 rounded-full ${hr[n]}`}),n]})}function fr(){return e.jsx("span",{className:"flex h-4 w-4 shrink-0 items-center justify-center rounded bg-green-500 text-[10px] font-bold text-white",children:"✓"})}function ta(n,t){return`${n+1}. ${t}`}function Va(n){return Array.isArray(n)?n.filter(t=>!!t&&typeof t=="object").map(t=>({id:t.id||rn(),componentId:t.componentId||"",rows:Array.isArray(t.rows)?t.rows.filter(s=>!!s&&typeof s=="object").map(s=>({id:s.id||rn(),preventingGreenHtml:s.preventingGreenHtml||"",returnToGreenHtml:s.returnToGreenHtml||"",ownerId:s.ownerId||"",targetDate:s.targetDate||"",linkedActionId:s.linkedActionId})):[]})):[]}function st(n,t){return Array.isArray(n)?n.filter(s=>!!s&&typeof s=="object").map(t):[]}function Ha(n){return st(n,t=>({id:t.id||rn(),measure:t.measure||"",target:t.target||"",current:t.current||"",status:t.status==="Green"||t.status==="Amber"||t.status==="Red"?t.status:"Amber"}))}function Wa(n){return st(n,t=>({id:t.id||rn(),risk:t.risk||"",impact:t.impact||"",mitigation:t.mitigation||"",status:t.status||"Open"}))}function qa(n){return st(n,t=>({id:t.id||rn(),text:t.text||""}))}function za(n){return st(n,t=>({id:t.id||rn(),decision:t.decision||"",owner:t.owner||"",requiredBy:t.requiredBy||""}))}function Ya(n){return st(n,t=>({id:t.id||rn(),area:t.area||"",confidence:t.confidence==="High"||t.confidence==="Medium"||t.confidence==="Low"?t.confidence:"Medium"}))}function br(){const n=dn(ss);if(!n)return fn;try{return{...fn,...n,overallStatus:n.overallStatus==="Green"||n.overallStatus==="Amber"||n.overallStatus==="Red"?n.overallStatus:fn.overallStatus,orientation:n.orientation==="portrait"||n.orientation==="landscape"?n.orientation:fn.orientation,bragSlides:Va(n.bragSlides),sections:Array.isArray(n.sections)&&n.sections.length>0?n.sections:fn.sections,metricRows:Ha(n.metricRows),riskRows:Wa(n.riskRows),stakeholderPositivePct:Number(n.stakeholderPositivePct)||0,stakeholderNeutralPct:Number(n.stakeholderNeutralPct)||0,stakeholderNegativePct:Number(n.stakeholderNegativePct)||0,interventionRows:qa(n.interventionRows),decisionRows:za(n.decisionRows),assessmentRows:Ya(n.assessmentRows)}}catch{return fn}}function xr({store:n,metrics:t,lenses:s,components:a=It,getEntry:i,trustName:r,projectName:o,themeColor:g,onLayoutSaved:c,darkMode:h=!1,currentUserId:l}){const b=bn("highlight-builder"),f=n.orgProfile.teamMembers||[],[x,d]=u.useState(()=>{const y=br();return g&&!y.themeColor?{...y,themeColor:g}:y}),[P,A]=u.useState(""),[N,M]=u.useState(0),G=u.useRef(null),ne=u.useMemo(()=>new Set(x.sections),[x.sections]),v=u.useMemo(()=>x.sections.reduce((y,T,E)=>(y[T]=E,y),{}),[x.sections]),k=u.useMemo(()=>a.map(y=>{let T=0;y.lenses.forEach(R=>{T+=Number(i(y.id,R).score||0)});const E=Number((T/y.lenses.length).toFixed(1));return{component:y,average:E,target:y.target,gap:Number(Math.max(0,y.target-E).toFixed(1))}}),[a,i]),q=u.useMemo(()=>[...k].sort((y,T)=>T.average-y.average).slice(0,5),[k]),K=y=>{d(T=>({...T,...y}))},I=y=>{d(T=>{const E=ne.has(y)?T.sections.filter(R=>R!==y):[...T.sections,y];return{...T,sections:E}})},ae=(y,T)=>{d(E=>({...E,sectionNarratives:{...E.sectionNarratives,[y]:T}}))},J=()=>{const y=new Set(x.bragSlides.map(R=>R.componentId)),T=a.find(R=>!y.has(R.id))||a[0],E={id:rn(),componentId:(T==null?void 0:T.id)||"",rows:[]};d(R=>({...R,bragSlides:[...R.bragSlides,E]}))},de=y=>{d(T=>({...T,bragSlides:T.bragSlides.filter(E=>E.id!==y)}))},L=(y,T)=>{d(E=>({...E,bragSlides:E.bragSlides.map(R=>R.id===y?{...R,componentId:T}:R)}))},te=y=>{const T={id:rn(),preventingGreenHtml:"",returnToGreenHtml:"",ownerId:l||"",targetDate:""};d(E=>({...E,bragSlides:E.bragSlides.map(R=>R.id===y?{...R,rows:[...R.rows,T]}:R)}))},ue=(y,T,E)=>{d(R=>({...R,bragSlides:R.bragSlides.map(U=>U.id===y?{...U,rows:U.rows.map(ze=>ze.id===T?{...ze,...E}:ze)}:U)}))},re=(y,T)=>{d(E=>({...E,bragSlides:E.bragSlides.map(R=>R.id===y?{...R,rows:R.rows.filter(U=>U.id!==T)}:R)}))};function me(y,T){d(E=>({...E,[y]:[...E[y],T]}))}function O(y,T,E){d(R=>({...R,[y]:R[y].map(U=>U.id===T?{...U,...E}:U)}))}function oe(y,T){d(E=>({...E,[y]:E[y].filter(R=>R.id!==T)}))}const ge=async y=>{var R;const T=(R=y.target.files)==null?void 0:R[0];if(!T)return;const E=await new Promise((U,ze)=>{const Ye=new FileReader;Ye.onload=()=>U(String(Ye.result||"")),Ye.onerror=()=>ze(new Error("Unable to read selected logo file.")),Ye.readAsDataURL(T)});A(T.name),d(U=>({...U,logoDataUrl:E})),M(U=>U+1)},Ie=()=>{sn(ss,x),Zn("highlight-builder-layout.json",JSON.stringify(x,null,2),"application/json"),c==null||c()},Te=async y=>{var E;const T=(E=y.target.files)==null?void 0:E[0];if(T)try{const R=await T.text(),U=JSON.parse(R);d({...fn,...U,overallStatus:U.overallStatus==="Green"||U.overallStatus==="Amber"||U.overallStatus==="Red"?U.overallStatus:fn.overallStatus,orientation:U.orientation==="portrait"||U.orientation==="landscape"?U.orientation:fn.orientation,bragSlides:Va(U.bragSlides),sections:Array.isArray(U.sections)&&U.sections.length>0?U.sections:fn.sections,sectionNarratives:U.sectionNarratives||{},metricRows:Ha(U.metricRows),riskRows:Wa(U.riskRows),stakeholderPositivePct:Number(U.stakeholderPositivePct)||0,stakeholderNeutralPct:Number(U.stakeholderNeutralPct)||0,stakeholderNegativePct:Number(U.stakeholderNegativePct)||0,interventionRows:qa(U.interventionRows),decisionRows:za(U.decisionRows),assessmentRows:Ya(U.assessmentRows)})}catch{window.alert("Unable to load the selected layout JSON. Please verify the file contents.")}finally{y.target.value=""}};u.useEffect(()=>{sn(ss,x)},[x]);const we=n.history.length>1?n.history[n.history.length-2]:null,Me=u.useMemo(()=>k.slice(0,10).map(y=>{const T=we?Number((y.component.lenses.reduce((ze,Ye)=>{var Fe,Le;return ze+Number(((Le=(Fe=we.data[y.component.id])==null?void 0:Fe[Ye])==null?void 0:Le.score)||0)},0)/y.component.lenses.length).toFixed(1)):y.average,E=y.average>T?"▲":y.average<T?"▼":"►",R=y.average>=y.target?"Green":y.average>=Math.max(1,y.target-1)?"Amber":"Red",U=y.average>=y.target?"Consistently understood by most stakeholder groups.":y.average>=Math.max(1,y.target-1)?"Progressing, with reinforcement still required.":"Below target and requiring focused intervention.";return{area:y.component.label,status:R,trend:E,commentary:U}}),[k,we]),Ae=u.useMemo(()=>t.nextSteps.slice(0,7).map(y=>y.message),[t.nextSteps]),un=y=>{if((x.sectionNarratives[y]||"").trim())return x.sectionNarratives[y].trim();switch(y){case"executive-summary":return`${x.overallStatus}. The programme continues to progress across ${a.length} components and ${s.length} lenses, with overall delivery at ${t.overallPct}%.`;case"change-dashboard":return"Dashboard status is derived from current component averages versus targets, with trend based on the most recent finalised snapshot.";case"adoption-metrics":return"Metrics below provide an operational view of progress against key adoption measures and targets.";case"what-went-well":return"List key achievements for the reporting period, including sponsorship visibility and areas of strengthened adoption.";case"risks-issues":return"The following risks/issues require active monitoring and mitigation.";case"stakeholder-insights":return"Summarise positive feedback themes, concerns, and sentiment from stakeholder listening channels.";case"interventions-delivered":return"Capture interventions completed this month and assess their observed effectiveness.";case"upcoming-priorities":return"Set out the next 30-day focus to maintain delivery momentum and close adoption gaps.";case"decisions-required":return"Record approvals and decisions needed to unblock delivery and sustain adoption progress.";case"change-lead-assessment":return"Provide confidence ratings and the overall professional assessment from the Change Lead.";default:return""}},ln=y=>{const T=un(y);return y==="change-dashboard"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Trend"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Commentary"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:Me.map(E=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:E.area}),e.jsx("td",{className:"px-3 py-2 text-sm",children:e.jsx(na,{status:E.status})}),e.jsx("td",{className:"px-3 py-2 text-sm",children:E.trend}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:E.commentary})]},E.area))})]})})]}):y==="adoption-metrics"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Measure"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[x.metricRows.map(E=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.measure,onChange:R=>O("metricRows",E.id,{measure:R.target.value}),placeholder:"e.g. Active Users",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.target,onChange:R=>O("metricRows",E.id,{target:R.target.value}),placeholder:"e.g. 80%",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.current,onChange:R=>O("metricRows",E.id,{current:R.target.value}),placeholder:"e.g. 62%",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:E.status,onChange:R=>O("metricRows",E.id,{status:R.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"Green",children:"Green"}),e.jsx("option",{value:"Amber",children:"Amber"}),e.jsx("option",{value:"Red",children:"Red"})]})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>oe("metricRows",E.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},E.id)),x.metricRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No metrics added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>me("metricRows",{id:rn(),measure:"",target:"",current:"",status:"Amber"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Metric"})]}):y==="risks-issues"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Risk / Issue"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Impact"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Mitigation"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[x.riskRows.map(E=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.risk,onChange:R=>O("riskRows",E.id,{risk:R.target.value}),placeholder:"e.g. Inconsistent adoption in Vision",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.impact,onChange:R=>O("riskRows",E.id,{impact:R.target.value}),placeholder:"e.g. Benefits may not be realised",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.mitigation,onChange:R=>O("riskRows",E.id,{mitigation:R.target.value}),placeholder:"e.g. Targeted coaching sessions",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.status,onChange:R=>O("riskRows",E.id,{status:R.target.value}),placeholder:"Open",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>oe("riskRows",E.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},E.id)),x.riskRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No key risks added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>me("riskRows",{id:rn(),risk:"",impact:"",mitigation:"",status:"Open"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Risk / Issue"})]}):y==="upcoming-priorities"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T}),e.jsx("ol",{className:"mt-3 list-decimal pl-5 space-y-1 text-sm text-slate-700",children:Ae.length?Ae.map((E,R)=>e.jsx("li",{children:E},`${E}-${R}`)):e.jsx("li",{children:"No immediate priorities detected from current data."})})]}):y==="what-went-well"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T}),e.jsx("ul",{className:"mt-3 space-y-1.5 text-sm text-slate-700",children:q.slice(0,5).map(E=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(fr,{}),E.component.label," is tracking at ",E.average," against target ",E.target,"."]},E.component.id))})]}):y==="stakeholder-insights"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T}),e.jsxs("div",{className:"mt-3 grid gap-2 md:grid-cols-3 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 rounded border border-green-200 bg-green-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-green-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Positive:",e.jsx("input",{type:"number",min:0,max:100,value:x.stakeholderPositivePct,onChange:E=>K({stakeholderPositivePct:Number(E.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-amber-200 bg-amber-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Neutral:",e.jsx("input",{type:"number",min:0,max:100,value:x.stakeholderNeutralPct,onChange:E=>K({stakeholderNeutralPct:Number(E.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-red-200 bg-red-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-red-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Negative:",e.jsx("input",{type:"number",min:0,max:100,value:x.stakeholderNegativePct,onChange:E=>K({stakeholderNegativePct:Number(E.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]})]})]}):y==="interventions-delivered"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T}),e.jsxs("ul",{className:"mt-3 space-y-2 text-sm text-slate-700",children:[x.interventionRows.map(E=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("input",{value:E.text,onChange:R=>O("interventionRows",E.id,{text:R.target.value}),placeholder:"e.g. Sponsor briefing sessions",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>oe("interventionRows",E.id),className:"shrink-0 rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},E.id)),x.interventionRows.length?null:e.jsx("li",{className:"text-slate-500",children:"No interventions added yet."})]}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>me("interventionRows",{id:rn(),text:""}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Intervention"})]}):y==="decisions-required"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Decision"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Required By"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[x.decisionRows.map(E=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.decision,onChange:R=>O("decisionRows",E.id,{decision:R.target.value}),placeholder:"e.g. Approval for additional adoption support resource",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.owner,onChange:R=>O("decisionRows",E.id,{owner:R.target.value}),placeholder:"e.g. Programme Board",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.requiredBy,onChange:R=>O("decisionRows",E.id,{requiredBy:R.target.value}),placeholder:"TBC",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>oe("decisionRows",E.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},E.id)),x.decisionRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:4,children:"No decisions added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>me("decisionRows",{id:rn(),decision:"",owner:"",requiredBy:""}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Decision"})]}):y==="change-lead-assessment"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Confidence"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[x.assessmentRows.map(E=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.area,onChange:R=>O("assessmentRows",E.id,{area:R.target.value}),placeholder:"e.g. Stakeholder Engagement",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:E.confidence,onChange:R=>O("assessmentRows",E.id,{confidence:R.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"High",children:"High"}),e.jsx("option",{value:"Medium",children:"Medium"}),e.jsx("option",{value:"Low",children:"Low"})]})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>oe("assessmentRows",E.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},E.id)),x.assessmentRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:3,children:"No assessment areas added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>me("assessmentRows",{id:rn(),area:"",confidence:"Medium"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Assessment Area"})]}):e.jsx(e.Fragment,{children:e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:T})})},Pe=()=>{if(!G.current){window.alert("Preview content is not ready to print yet.");return}const y=window.open("","_blank");if(!y)return;y.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8" /><title>Highlight Report</title></head><body></body></html>'),document.querySelectorAll('link[rel="stylesheet"], style').forEach(R=>{y.document.head.appendChild(R.cloneNode(!0))});const T=y.document.createElement("style");T.textContent=`
      @page { margin: 8mm; size: A4 ${x.orientation}; }
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
    `,y.document.head.appendChild(T);const E=G.current.cloneNode(!0);E.className="printable-report",E.querySelectorAll('[data-print-exclude="true"]').forEach(R=>R.remove()),y.document.body.appendChild(E),y.document.close(),setTimeout(()=>{y.focus(),y.print(),y.close()},250)};return e.jsxs("section",{className:"space-y-6",children:[h?e.jsx("div",{className:"rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm font-semibold text-red-900",children:"Dark mode not compatible for Highlight Report due to print/save functionality."}):null,e.jsx("div",{className:"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",children:e.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Highlight Builder Tool"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:"Create a polished highlight pack"}),e.jsx(Sn,{onClick:b.reopen})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:Ie,className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"Save JSON Layout"}),e.jsxs("label",{className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 cursor-pointer",children:["Load JSON Layout",e.jsx("input",{type:"file",accept:"application/json",className:"hidden",onChange:Te},N)]}),e.jsxs("div",{className:"flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-semibold",role:"group","aria-label":"PDF export orientation",children:[e.jsx("button",{type:"button",onClick:()=>K({orientation:"portrait"}),"aria-pressed":x.orientation==="portrait",className:`px-3 py-2 transition-colors ${x.orientation==="portrait"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Portrait"}),e.jsx("button",{type:"button",onClick:()=>K({orientation:"landscape"}),"aria-pressed":x.orientation==="landscape",className:`px-3 py-2 transition-colors border-l border-slate-300 ${x.orientation==="landscape"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Landscape"})]}),e.jsxs("button",{type:"button",onClick:Pe,className:"rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm",style:{backgroundColor:x.themeColor},children:["Print / Save PDF (",x.orientation==="landscape"?"Landscape":"Portrait",")"]})]})]})}),e.jsxs("div",{className:"grid gap-6 xl:grid-cols-[340px,1fr]",children:[e.jsx("aside",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Report title"}),e.jsx("input",{value:x.title,onChange:y=>K({title:y.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Programme"}),e.jsx("input",{value:x.programmeName,onChange:y=>K({programmeName:y.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Reporting period"}),e.jsx("input",{value:x.reportingPeriod,onChange:y=>K({reportingPeriod:y.target.value}),placeholder:"July 2026",className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Change Lead"}),e.jsx("input",{value:x.changeLeadName,onChange:y=>K({changeLeadName:y.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"SRO"}),e.jsx("input",{value:x.sroName,onChange:y=>K({sroName:y.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Overall Change Status"}),e.jsxs("select",{value:x.overallStatus,onChange:y=>K({overallStatus:y.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500",children:[e.jsx("option",{value:"Green",children:"Green"}),e.jsx("option",{value:"Amber",children:"Amber"}),e.jsx("option",{value:"Red",children:"Red"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Theme colour"}),e.jsx("input",{type:"color",value:x.themeColor,onChange:y=>K({themeColor:y.target.value}),className:"h-10 w-full rounded-md border border-slate-300"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Logo in top-left"}),e.jsxs("label",{className:"flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-3 py-4 text-sm text-slate-700 hover:bg-slate-100",children:[e.jsx("span",{children:P||"Upload logo"}),e.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:ge})]}),x.logoDataUrl?e.jsx("div",{className:"mt-3 rounded-md border border-slate-200 bg-slate-50 p-2",children:e.jsx("img",{alt:"Preview logo",src:x.logoDataUrl,className:"max-h-16 w-auto"})}):null]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-1",children:"Programme/Project Readiness Slides"}),e.jsx("p",{className:"text-xs text-slate-500 mb-3",children:"These print first, one per page. Add a slide per component you want to report on."}),e.jsxs("div",{className:"space-y-2",children:[x.bragSlides.map((y,T)=>e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-500",children:["Page ",T+1]}),e.jsx("button",{type:"button",onClick:()=>de(y.id),className:"text-xs font-semibold text-red-600 hover:text-red-800",children:"Remove"})]}),e.jsx("select",{value:y.componentId,onChange:E=>L(y.id,E.target.value),className:"mt-1 w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm outline-none focus:border-blue-500",children:a.map(E=>e.jsx("option",{value:E.id,children:E.label},E.id))}),e.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:[y.rows.length," row",y.rows.length===1?"":"s"]})]},y.id)),x.bragSlides.length?null:e.jsx("p",{className:"text-sm text-slate-500",children:"No readiness slides yet."})]}),e.jsx("button",{type:"button",onClick:J,disabled:!a.length,className:"mt-3 w-full rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 disabled:opacity-50",children:"+ Add Readiness Slide"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-3",children:"Report sections"}),e.jsx("div",{className:"space-y-2",children:ea.map(y=>{const T=ne.has(y.id),E=y.id,R=v[y.id],U=typeof R=="number"?ta(R,y.label):y.label;return e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("label",{className:"flex items-center gap-3 text-sm text-slate-700",children:[e.jsx("input",{type:"checkbox",checked:T,onChange:()=>I(y.id)}),e.jsx("span",{children:U})]}),T?e.jsxs("div",{className:"mt-3 space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-1",children:"Section narrative"}),e.jsx("textarea",{value:x.sectionNarratives[E]||"",onChange:ze=>ae(E,ze.target.value),placeholder:un(E),rows:4,className:"w-full rounded-md border border-slate-300 px-2 py-2 text-xs outline-none focus:border-blue-500"})]}),e.jsx("p",{className:"text-xs text-slate-500",children:"All adoption components are automatically included in this section."})]}):null]},y.id)})})]})]})}),e.jsxs("div",{ref:G,className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsxs("div",{className:"mb-4 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3",children:[x.logoDataUrl?e.jsx("img",{alt:"Logo preview",src:x.logoDataUrl,className:"max-h-12 w-auto"}):e.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-md bg-slate-200 text-sm font-bold text-slate-700",children:"NHS"}),e.jsxs("div",{children:[e.jsx("div",{"data-print-hide":"true",className:"text-xs font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Builder Preview"}),e.jsx("div",{className:"text-lg font-bold text-slate-900",children:x.title}),e.jsxs("div",{className:"text-sm text-slate-600 mt-1",children:[x.programmeName||o||"Unnamed Programme"," ·"," ",x.reportingPeriod||"Reporting period not set"]}),e.jsxs("div",{className:"mt-1 flex items-center gap-2 text-sm text-slate-600",children:["Overall Status: ",e.jsx(na,{status:x.overallStatus})]}),e.jsx("div",{className:"text-sm text-slate-600 mt-0.5",children:r||"Unconfigured Trust"})]})]}),e.jsxs("div",{className:"grid gap-3",children:[x.bragSlides.map(y=>{const T=k.find(R=>R.component.id===y.componentId),E=T?ka(T.average,T.target):null;return e.jsxs("article",{"data-brag-slide":"true",className:"rounded-xl border border-slate-200 p-4",style:{borderLeft:`4px solid ${x.themeColor}`},children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Programme/Project Readiness"}),e.jsx("h3",{className:"text-lg font-bold text-slate-900",children:(T==null?void 0:T.component.label)||"Select a component"})]}),T&&E?e.jsxs("div",{className:"text-right",children:[e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold ${Ia[E]}`,children:E}),e.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:[T.average.toFixed(1)," of ",T.target," target"]})]}):null]}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What is preventing you from being green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What do you/others need to do to return to green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target date"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[y.rows.map(R=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(Zs,{value:R.preventingGreenHtml,onChange:U=>ue(y.id,R.id,{preventingGreenHtml:U}),placeholder:"What's blocking green?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(Zs,{value:R.returnToGreenHtml,onChange:U=>ue(y.id,R.id,{returnToGreenHtml:U}),placeholder:"What needs to happen?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:R.ownerId,onChange:U=>ue(y.id,R.id,{ownerId:U.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"",children:"Unassigned"}),f.map(U=>e.jsxs("option",{value:U.id,children:[U.name||"Unnamed",U.role?` - ${U.role}`:""]},U.id))]})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{type:"date",value:R.targetDate,onChange:U=>ue(y.id,R.id,{targetDate:U.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>re(y.id,R.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},R.id)),y.rows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No rows yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>te(y.id),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Row"})]},y.id)}),x.sections.map(y=>{var T;return e.jsxs("article",{className:"rounded-xl border border-slate-200 p-4",style:{borderLeft:`4px solid ${x.themeColor}`},children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700",children:ta(v[y]||0,((T=ea.find(E=>E.id===y))==null?void 0:T.label)||y)}),ln(y)]},y)})]})]})]}),e.jsx(xn,{open:b.isOpen,onClose:b.close,title:"Highlight Builder Tool",body:e.jsx("p",{children:"Build a polished, presentation-ready highlight pack summarising progress across your programme - pick a layout, edit the content, and save or export it when you're happy."})})]})}function Sr(n){const t={};return n.sections.forEach(s=>{s.items.forEach(a=>{t[a.id]="mine"})}),t}function sa({active:n,onClick:t,children:s,darkMode:a}){return e.jsx("button",{type:"button",onClick:t,className:`rounded-md border px-2 py-1 text-left text-xs transition-colors ${is} ${n?"border-[#005eb8] bg-[#005eb8]/10 font-semibold text-[#005eb8]":a?"border-slate-600 bg-slate-900 text-slate-300 hover:bg-slate-800":"border-slate-300 bg-white text-slate-600 hover:bg-slate-50"}`,children:s})}function vr({item:n,choice:t,onChoose:s,myLabel:a,theirLabel:i,darkMode:r}){return e.jsxs("div",{"data-testid":`import-conflict-row-${n.id}`,className:`grid grid-cols-1 gap-2 border-t py-3 first:border-t-0 md:grid-cols-[1fr_1fr_1fr] ${r?"border-slate-700":"border-slate-200"}`,children:[e.jsx("div",{className:`text-sm font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:n.label}),e.jsxs(sa,{active:t==="mine",onClick:()=>s(n.id,"mine"),darkMode:r,children:[e.jsx("span",{className:`block text-[0.65rem] font-bold uppercase tracking-wide ${r?"text-slate-400":"text-slate-500"}`,children:a}),n.mineSummary]}),e.jsxs(sa,{active:t==="theirs",onClick:()=>s(n.id,"theirs"),darkMode:r,children:[e.jsx("span",{className:`block text-[0.65rem] font-bold uppercase tracking-wide ${r?"text-slate-400":"text-slate-500"}`,children:i}),n.theirsSummary]})]})}function yr({report:n,myLabel:t,theirLabel:s,onResolve:a,onCancel:i,darkMode:r=!1}){const[o,g]=u.useState(()=>Sr(n)),c=n.sections.reduce((l,b)=>l+b.items.length,0),h=l=>{g(b=>{const f={...b};return n.sections.forEach(x=>{x.items.forEach(d=>{f[d.id]=l})}),f})};return e.jsx("div",{"data-testid":"import-conflict-modal",className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4",onClick:l=>{l.target===l.currentTarget&&i()},children:e.jsxs("div",{onClick:l=>l.stopPropagation(),className:`flex w-full max-w-4xl max-h-[90vh] flex-col rounded-lg border shadow-xl ${r?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:`shrink-0 border-b p-6 ${r?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("h2",{className:`text-xl font-bold ${r?"text-slate-100":"text-slate-800"}`,children:"Resolve import conflicts"}),e.jsxs("p",{className:`mt-1 text-sm ${r?"text-slate-300":"text-slate-600"}`,children:["Comparing ",e.jsx("span",{className:"font-semibold",children:t})," (currently loaded) against"," ",e.jsx("span",{className:"font-semibold",children:s})," (the imported file)."]}),e.jsxs("p",{className:`mt-1 text-xs ${r?"text-slate-400":"text-slate-500"}`,children:[c," item",c===1?"":"s"," need a decision",n.autoMergeSummary.length?` · also merging automatically: ${n.autoMergeSummary.join(", ")}`:""]}),e.jsxs("div",{className:"mt-3 flex gap-2",children:[e.jsx("button",{type:"button",onClick:()=>h("mine"),className:`${Re} h-8 px-3 py-0 text-xs`,children:"Use all mine"}),e.jsx("button",{type:"button",onClick:()=>h("theirs"),className:`${Re} h-8 px-3 py-0 text-xs`,children:"Use all theirs"})]})]}),e.jsx("div",{className:"flex-1 space-y-6 overflow-y-auto p-6",children:n.sections.map(l=>e.jsxs("div",{children:[e.jsx("h3",{className:`mb-1 text-sm font-bold uppercase tracking-wide ${r?"text-slate-300":"text-slate-500"}`,children:l.title}),e.jsx("div",{className:`rounded-md border px-3 ${r?"border-slate-700":"border-slate-200"}`,children:l.items.map(b=>e.jsx(vr,{item:b,choice:o[b.id]||"mine",onChoose:(f,x)=>g(d=>({...d,[f]:x})),myLabel:t,theirLabel:s,darkMode:r},b.id))})]},l.id))}),e.jsxs("div",{className:`flex shrink-0 justify-end gap-3 border-t p-4 ${r?"border-slate-700":"border-slate-200"}`,children:[e.jsx("button",{type:"button","data-testid":"import-conflict-cancel",onClick:i,className:Re,children:"Cancel Import"}),e.jsx("button",{type:"button","data-testid":"import-conflict-apply",onClick:()=>a(o),className:En,children:"Apply and Import"})]})]})})}function aa(){return e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function wr(n){return n in ds}function Nr({lensName:n,onClose:t,darkMode:s=!1}){if(!n||!wr(n))return null;const a=ds[n];return e.jsx("div",{id:"lens-info-modal",className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:e.jsxs("div",{className:`${s?"bg-slate-800 border-slate-700":"bg-white"} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border`,children:[e.jsxs("div",{className:`${s?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} sticky top-0 border-b p-6 flex items-center justify-between`,children:[e.jsx("h2",{className:`text-2xl font-bold ${s?"text-slate-100":"text-slate-800"}`,children:n}),e.jsx("button",{onClick:t,className:`${s?"text-slate-300 hover:text-slate-100":"text-slate-500 hover:text-slate-700"}`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsxs("div",{className:`p-6 space-y-4 ${s?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(aa,{}),"Outcome"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.outcome})]}),e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(aa,{}),"What Good Looks Like"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.whatGoodLooksLike})]})]})]})})}function Cr({darkMode:n=!1,onNavigateToProjectDetails:t,onNavigateToGuide:s,onNavigateToDashboard:a}){const i=Ca(),[r,o]=u.useState(0);return e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${n?"text-slate-100":"text-slate-800"}`,children:"Introduction"}),e.jsx("p",{className:`mt-2 text-sm ${n?"text-slate-300":"text-slate-600"}`,children:"The five introduction steps are shown below in collapsible sections."})]}),i.map((g,c)=>e.jsxs("section",{className:`${n?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} overflow-hidden rounded-lg border shadow-sm`,children:[e.jsxs("button",{type:"button",onClick:()=>o(c),"aria-expanded":r===c,className:`flex w-full items-center justify-between gap-3 p-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-inset ${n?"hover:bg-slate-700":"hover:bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${n?"text-blue-300":"text-blue-700"}`,children:["Step ",c+1," of ",i.length]}),e.jsx("h3",{className:`mt-1 text-lg font-semibold ${n?"text-slate-100":"text-slate-900"}`,children:g.title})]}),e.jsx("span",{className:`shrink-0 text-lg font-semibold ${n?"text-slate-300":"text-slate-500"}`,"aria-hidden":"true",children:r===c?"-":"+"})]}),r===c?e.jsxs("div",{className:"px-5 pb-5",children:[g.body,c===i.length-1?e.jsxs("div",{className:"mt-5 flex flex-wrap gap-2",children:[t?e.jsx("button",{type:"button",onClick:t,className:"rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"Set up your Project"}):null,s?e.jsx("button",{type:"button",onClick:s,className:"rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"See the 6 Key Questions"}):null,a?e.jsx("button",{type:"button",onClick:a,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Go to dashboard"}):null]}):null]}):null]},g.title))]})}const ia={1:"Pre go-live planning and early mobilisation.",2:"Go-live readiness and immediate launch support.",3:"Early adoption reinforcement and consistency.",4:"Embedding new ways of working across teams.",5:"Sustained adoption and benefits realisation at scale."},Er={1:"Low confidence",2:"Some confidence",3:"Moderate confidence",4:"High confidence",5:"Very high confidence"},jr={E:"Not started embedding",D:"Early adoption in practice",C:"Partly embedded in practice",B:"Mostly embedded in practice",A:"Well embedded in practice"};function kr(n){return n>=4?"high":n===3?"average":"below"}function Ir(n){return n==="A"||n==="B"?"high":n==="C"?"average":"below"}function Ar(n,t){const s=Ir(n),a=kr(t),i=s==="high"&&a==="high",r=s==="below"&&a==="below",o=s==="high"&&a!=="below"||a==="high"&&s!=="below";return i?"Blue":r?"Red":o?"Green":"Amber"}const Vt=4;function _r({orgProfile:n,onProfileUpdate:t,userSettings:s,onUserSettingsUpdate:a,objectives:i=[],darkMode:r=!1}){const[o,g]=u.useState(n),[c,h]=u.useState(s),[l,b]=u.useState(0),[f,x]=u.useState(null),[d,P]=u.useState(!1),A=u.useRef(null),N=bn("profile");u.useEffect(()=>{g(n)},[n]),u.useEffect(()=>{h(s)},[s]);const M=u.useCallback(k=>{const q={...c,...k};h(q),a(q)},[c,a]),G=async k=>{var I;const q=(I=k.target.files)==null?void 0:I[0];if(!q)return;const K=await new Promise((ae,J)=>{const de=new FileReader;de.onload=()=>ae(String(de.result||"")),de.onerror=()=>J(new Error("Unable to read selected profile image.")),de.readAsDataURL(q)});M({profileImageDataUrl:K}),b(ae=>ae+1)},ne=()=>{M({profileImageDataUrl:void 0})},v=u.useCallback((k,q,K)=>{const I=o.cst.phaseCapability[k]||{competence:"C",confidence:3},ae={...o,cst:{...o.cst,phaseCapability:{...o.cst.phaseCapability,[k]:{competence:I.competence,confidence:I.confidence,assessedAt:new Date().toISOString(),reason:"manual",[q]:K}}}};g(ae),t(ae)},[o,t]);return e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${r?"text-slate-100":"text-slate-800"}`,children:"Profile"}),e.jsx(Sn,{onClick:N.reopen,darkMode:r})]}),e.jsx("p",{className:`text-sm ${r?"text-slate-300":"text-slate-600"}`,children:"Your identity, progress towards your objectives, and confidence/capability self-assessment."}),e.jsx(xn,{open:N.isOpen,onClose:N.close,title:"Profile",darkMode:r,body:e.jsx("p",{children:"Set your name, preferences and picture, see how many objectives are complete, and record your team's confidence and delivery-readiness capability at each phase."})}),i.length>0&&e.jsxs("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-3`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:"Objectives"}),e.jsxs("p",{className:`mt-1 text-sm ${r?"text-slate-300":"text-slate-600"}`,children:[i.filter(k=>k.completed).length,"/",i.length," complete - based on phase readiness, ownership, cadence and team participation."]})]}),e.jsx("div",{className:"space-y-2",children:(d?i:i.slice(0,Vt)).map(k=>e.jsxs("div",{className:`rounded-lg border p-3 ${k.completed?"border-green-200 bg-green-50":r?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:k.label}),e.jsx("span",{className:"text-xs font-bold shrink-0",children:k.completed?"Done":"Not yet"})]}),e.jsx("p",{className:`mt-1 text-xs ${r?"text-slate-300":"text-slate-600"}`,children:k.description})]},k.id))}),i.length>Vt&&e.jsx("button",{type:"button",onClick:()=>P(k=>!k),className:`text-sm font-semibold underline ${r?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:d?"Show fewer":`Show ${i.length-Vt} more`})]}),e.jsxs("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-5`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:"Your Profile"}),e.jsx("p",{className:`mt-1 text-sm ${r?"text-slate-300":"text-slate-600"}`,children:"These details personalise your experience and reports."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-name",className:`block text-sm font-medium mb-1 ${r?"text-slate-200":"text-slate-700"}`,children:"Your Name"}),e.jsx("input",{id:"user-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${r?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:c.name,onChange:k=>M({name:k.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-preferences",className:`block text-sm font-medium mb-1 ${r?"text-slate-200":"text-slate-700"}`,children:"Preferences"}),e.jsx("textarea",{id:"user-preferences",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 h-24 ${r?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:c.preferences,onChange:k=>M({preferences:k.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-sm font-medium mb-2 ${r?"text-slate-200":"text-slate-700"}`,children:"Profile Picture"}),e.jsxs("div",{className:"flex items-start gap-4",children:[c.profileImageDataUrl?e.jsx("img",{src:c.profileImageDataUrl,alt:"Profile",className:"h-20 w-20 rounded-md border border-slate-300 object-cover"}):e.jsx("div",{className:"h-20 w-20 rounded-md border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center",children:e.jsx("span",{className:"text-xs text-slate-500",children:"No image"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{type:"button",onClick:()=>{var k;return(k=A.current)==null?void 0:k.click()},className:`rounded-md px-3 py-2 text-sm font-medium transition-colors ${r?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:c.profileImageDataUrl?"Change Picture":"Upload Picture"}),c.profileImageDataUrl?e.jsx("button",{type:"button",onClick:ne,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${r?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"}`,children:"Remove"}):null,e.jsx("input",{ref:A,type:"file",accept:"image/*",className:"hidden",onChange:G},l)]})]})]})]}),e.jsxs("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:"Confidence and Capability by Phase"}),e.jsx("p",{className:`mt-1 text-sm ${r?"text-slate-300":"text-slate-600"}`,children:"Capture your starting position, then refresh when readiness phase changes or after major milestones."})]}),e.jsxs("div",{className:"rounded-md border border-blue-200 bg-blue-50 p-3 text-xs text-blue-900",children:[e.jsx("p",{className:"font-semibold",children:"How this self-assessment works"}),e.jsx("p",{className:"mt-1",children:"Confidence is how sure your team feels. Delivery readiness is how embedded the new way of working is in practice."}),e.jsx("p",{className:"mt-1",children:"Cards use BRAG backgrounds: Blue = both high, Green = one high and the other at least average, Amber = neither high, Red = both below average."})]}),e.jsx("div",{className:"space-y-3",children:ba.map(k=>{const q=o.cst.phaseCapability[k]||{competence:"C",confidence:3},K=Ar(q.competence,q.confidence),I=K==="Blue"?"border-sky-300 bg-sky-50":K==="Green"?"border-emerald-300 bg-emerald-50":K==="Red"?"border-red-300 bg-red-50":"border-amber-300 bg-amber-50",ae=K==="Blue"?"text-sky-800 bg-sky-100":K==="Green"?"text-emerald-800 bg-emerald-100":K==="Red"?"text-red-800 bg-red-100":"text-amber-800 bg-amber-100";return e.jsxs("div",{className:`${r?"border-slate-700 bg-slate-800":I} rounded-md border p-3`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{className:"relative flex items-center gap-2",children:[e.jsxs("span",{className:`font-semibold ${r?"text-slate-100":"text-slate-700"}`,children:["Phase ",k]}),e.jsx("button",{type:"button",onMouseEnter:()=>x(k),onMouseLeave:()=>x(J=>J===k?null:J),onFocus:()=>x(k),onBlur:()=>x(J=>J===k?null:J),onClick:()=>x(J=>J===k?null:k),className:"h-5 w-5 rounded-full border border-slate-300 text-xs font-semibold text-slate-600","aria-expanded":f===k,"aria-controls":`phase-help-${k}`,"aria-label":`Phase ${k} guidance`,children:"i"}),f===k?e.jsx("div",{id:`phase-help-${k}`,role:"tooltip",className:"absolute left-0 top-7 z-10 w-72 rounded-md border border-slate-200 bg-slate-900 px-3 py-2 text-xs text-white shadow-xl",children:ia[k]}):null]}),e.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${r?"bg-slate-700 text-slate-100":ae}`,children:K})]}),e.jsx("p",{className:`mt-1 text-xs ${r?"text-slate-300":"text-slate-600"}`,children:ia[k]}),e.jsxs("div",{className:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm",children:[e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${r?"text-slate-300":"text-slate-600"}`,children:"Delivery readiness"}),e.jsx("select",{value:q.competence,onChange:J=>v(k,"competence",J.target.value),className:`w-full rounded-md border px-2 py-2 pr-10 ${r?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:xt.map(J=>e.jsxs("option",{value:J,children:[jr[J]," (",J,")"]},`${k}-competence-${J}`))})]}),e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${r?"text-slate-300":"text-slate-600"}`,children:"Confidence"}),e.jsx("select",{value:q.confidence,onChange:J=>v(k,"confidence",Number(J.target.value)),className:`w-full rounded-md border px-2 py-2 pr-10 ${r?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:St.map(J=>e.jsxs("option",{value:J,children:[Er[J]," (",J,")"]},`${k}-confidence-${J}`))})]})]})]},`phase-capability-${k}`)})})]})]})}const Or=[{name:"NHS Blue",color:"#005eb8"},{name:"Navy",color:"#003366"},{name:"Teal",color:"#009b8a"},{name:"Purple",color:"#6c28d9"},{name:"Green",color:"#059669"},{name:"Red",color:"#dc2626"}];function Rr({userSettings:n,onUserSettingsUpdate:t,onLoadExampleData:s,onResetData:a,darkMode:i=!1}){const[r,o]=u.useState(n),g=bn("settings");u.useEffect(()=>{o(n)},[n]);const c=u.useCallback(l=>{const b={...r,...l};o(b),t(b)},[r,t]),h=l=>{c({themeColor:l})};return e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${i?"text-slate-100":"text-slate-800"}`,children:"Settings"}),e.jsx(Sn,{onClick:g.reopen,darkMode:i})]}),e.jsx("p",{className:`text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Use this page to manage app appearance, guidance preferences, and data/support options."}),e.jsx(xn,{open:g.isOpen,onClose:g.close,title:"Settings",darkMode:i,body:e.jsx("p",{children:"Manage app-wide appearance (theme, dark mode, guided-workflow and guidance-link preferences) and data/support tools like example data, reset, and bug reporting. For your personal profile and engagement progress, see the Profile page."})}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Appearance"}),e.jsx("p",{className:`mt-1 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Choose the theme colour you want to use throughout the app."})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-1",children:[e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Dark mode"}),e.jsx("input",{type:"checkbox",checked:!!r.darkMode,onChange:l=>c({darkMode:l.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show guided workflow tips on each component"}),e.jsx("input",{type:"checkbox",checked:!r.hideGuidedWorkflow,onChange:l=>c({hideGuidedWorkflow:!l.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show additional guidance links (alongside core links)"}),e.jsx("input",{type:"checkbox",checked:r.showAdditionalGuidanceLinks!==!1,onChange:l=>c({showAdditionalGuidanceLinks:l.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show external links section (Project Setup, even after marked initiated)"}),e.jsx("input",{type:"checkbox",checked:r.showExternalLinksSection===!0,onChange:l=>c({showExternalLinksSection:l.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`text-sm ${i?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-medium",children:"Status colour profile"}),e.jsxs("select",{value:r.colorAccessibilityMode||"standard",onChange:l=>c({colorAccessibilityMode:l.target.value}),className:`w-full rounded-md border p-2 pr-10 ${i?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"standard",children:"Standard"}),e.jsx("option",{value:"color-blind-friendly",children:"Color-blind friendly"})]})]})]}),e.jsx("p",{className:`text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Color-blind friendly mode keeps BRAG labels in text and shifts status colors to higher-contrast alternatives."}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-theme-colour",className:`block text-sm font-medium mb-1 ${i?"text-slate-200":"text-slate-700"}`,children:"Theme Colour"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:Or.map(l=>e.jsxs("button",{type:"button",onClick:()=>h(l.color),className:"flex items-center gap-2 rounded-md border-2 px-3 py-2 text-sm",style:{borderColor:r.themeColor===l.color?l.color:"#e2e8f0",backgroundColor:r.themeColor===l.color?`${l.color}22`:"transparent"},children:[e.jsx("span",{className:"h-4 w-4 rounded-sm border border-slate-300",style:{backgroundColor:l.color}}),e.jsx("span",{children:l.name})]},l.color))}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{id:"user-theme-colour",type:"color",className:"h-10 w-14 rounded border border-slate-300 p-1 cursor-pointer",value:r.themeColor,onChange:l=>c({themeColor:l.target.value})}),e.jsx("span",{className:`text-sm font-mono ${i?"text-slate-200":"text-slate-600"}`,children:r.themeColor})]})]})]})]}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Data and Support"}),e.jsx("p",{className:`mt-1 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Load sample data, reset local data, read FAQs, or report an issue."})]}),e.jsxs("div",{className:`${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("h4",{className:`text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Data Tools"}),e.jsxs("div",{className:"mt-3 flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>s("red"),className:"inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-800 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors",children:"Early Stage Example"}),e.jsx("button",{onClick:()=>s("amber"),className:"inline-flex items-center justify-center rounded-md bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800 border border-amber-200 shadow-[0_3px_0_#fde68a] hover:bg-amber-100 transition-colors",children:"Progressing Example"}),e.jsx("button",{onClick:()=>s("green"),className:"inline-flex items-center justify-center rounded-md bg-green-50 px-4 py-2 text-sm font-semibold text-green-800 border border-green-200 shadow-[0_3px_0_#bbf7d0] hover:bg-green-100 transition-colors",children:"Exemplar Example"})]}),e.jsx("div",{className:"mt-3 flex flex-wrap gap-3",children:e.jsx("button",{onClick:a,className:`inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors ${is}`,children:"Reset Data"})}),e.jsx("p",{className:`mt-2 text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Each Example Data button loads a full sample assessment at a different maturity stage, so you can explore the dashboards and workflows quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"How is my data stored?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Your settings and assessment state are stored locally in your browser using local storage."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"What does Example Data do?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Each button populates the tool with a full sample assessment at that maturity stage (Red: early stage, Amber: progressing, Green: near exemplar) so you can explore dashboards and workflows quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"Can I change the theme colour later?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Yes. Update the theme colour at any time in User Settings and it is applied immediately."})]}),e.jsxs("div",{className:`rounded-md border p-4 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("h4",{className:`mb-2 text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Submit a Bug"}),e.jsx("p",{className:`mb-3 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Found an issue? Send details directly via email."}),e.jsx("a",{href:"mailto:andrew.fraser22@kpmg.co.uk?subject=NHS%20Digital%20Adoption%20Tool%20Bug",className:`inline-flex rounded-md px-4 py-2 text-sm font-medium transition-colors ${i?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:"Report Bug"})]})]})]})}function Pr(n){return{id:`audit:${Date.now()}-${Math.random().toString(36).slice(2,8)}`,timestamp:new Date().toISOString(),actor:n.actor,eventType:n.eventType,entityType:n.entityType,entityId:n.entityId,summary:n.summary,trustName:n.trustName,projectName:n.projectName,componentId:n.componentId,lens:n.lens,reason:n.reason,before:n.before,after:n.after,source:n.source||"local",importedAt:n.importedAt}}const Dr=1e4;function At(n,t=Dr){return n.length<=t?n:n.slice(n.length-t)}const oa="nhs-digital-adoption-store",$r=new Set(["pathway-1","pathway-2","pathway-3"]);function Ka(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function Je(n,t){if(!Ka(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected object.`)}function Z(n,t){if(n!==void 0&&typeof n!="string")throw new Error(`Invalid adoption assessment payload at ${t}: expected string.`)}function Ja(n,t){if(n!==void 0&&typeof n!="number")throw new Error(`Invalid adoption assessment payload at ${t}: expected number.`)}function ps(n,t){if(n!==void 0&&!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`)}function Xa(n,t){Je(n,t),Z(n.id,`${t}.id`),Z(n.text,`${t}.text`),Z(n.owner,`${t}.owner`),Z(n.timescale,`${t}.timescale`),Z(n.status,`${t}.status`),Z(n.notes,`${t}.notes`),Z(n.evidence,`${t}.evidence`)}function Tr(n,t){Je(n,t),Ja(n.score,`${t}.score`),Z(n.justification,`${t}.justification`),Z(n.evidence,`${t}.evidence`),ps(n.actions,`${t}.actions`),(n.actions||[]).forEach((s,a)=>{Xa(s,`${t}.actions[${a}]`)})}function Qa(n,t){Je(n,t),Object.keys(n).forEach(s=>{const a=n[s];Je(a,`${t}.${s}`),Object.keys(a).forEach(i=>{Tr(a[i],`${t}.${s}.${i}`)})})}function Lr(n,t){Je(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((i,r)=>{Je(i,`${t}.${s}[${r}]`),Z(i.id,`${t}.${s}[${r}].id`),Z(i.text,`${t}.${s}[${r}].text`),Z(i.owner,`${t}.${s}[${r}].owner`),Z(i.timescale,`${t}.${s}[${r}].timescale`),Z(i.notes,`${t}.${s}[${r}].notes`),Z(i.evidence,`${t}.${s}[${r}].evidence`),ps(i.linkedActions,`${t}.${s}[${r}].linkedActions`),(i.linkedActions||[]).forEach((o,g)=>{Je(o,`${t}.${s}[${r}].linkedActions[${g}]`),Z(o.lens,`${t}.${s}[${r}].linkedActions[${g}].lens`),Z(o.actionId,`${t}.${s}[${r}].linkedActions[${g}].actionId`)})})})}function Br(n,t){Je(n,t),Object.keys(n).forEach(s=>{const a=n[s];Je(a,`${t}.${s}`),["pathway-1","pathway-2","pathway-3"].forEach(i=>{const r=a[i];ps(r,`${t}.${s}.${i}`),(r||[]).forEach((o,g)=>{if(typeof o!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}.${i}[${g}]: expected string.`)})})})}function Fr(n,t){Je(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((i,r)=>{if(typeof i!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}[${r}]: expected string.`)})})}function Gr(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{Je(s,`${t}[${a}]`),Z(s.id,`${t}[${a}].id`),Z(s.removedAt,`${t}[${a}].removedAt`),Z(s.reason,`${t}[${a}].reason`),Z(s.componentId,`${t}[${a}].componentId`),Z(s.lens,`${t}[${a}].lens`),Z(s.actionId,`${t}[${a}].actionId`),Z(s.actionText,`${t}[${a}].actionText`),Z(s.actionType,`${t}[${a}].actionType`)})}function Ur(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{Je(s,`${t}[${a}]`),Z(s.id,`${t}[${a}].id`),Z(s.timestamp,`${t}[${a}].timestamp`),Z(s.actor,`${t}[${a}].actor`),Z(s.eventType,`${t}[${a}].eventType`),Z(s.entityType,`${t}[${a}].entityType`),Z(s.entityId,`${t}[${a}].entityId`),Z(s.summary,`${t}[${a}].summary`),Z(s.trustName,`${t}[${a}].trustName`),Z(s.projectName,`${t}[${a}].projectName`),Z(s.componentId,`${t}[${a}].componentId`),Z(s.lens,`${t}[${a}].lens`),Z(s.reason,`${t}[${a}].reason`),Z(s.source,`${t}[${a}].source`),Z(s.importedAt,`${t}[${a}].importedAt`)})}function Mr(n,t){if(Je(n,t),Z(n.trustName,`${t}.trustName`),Z(n.region,`${t}.region`),Z(n.trustType,`${t}.trustType`),Z(n.projectName,`${t}.projectName`),Z(n.leadName,`${t}.leadName`),Z(n.cstId,`${t}.cstId`),n.cst!==void 0){if(Je(n.cst,`${t}.cst`),Z(n.cst.type,`${t}.cst.type`),Z(n.cst.pathway,`${t}.cst.pathway`),typeof n.cst.pathway=="string"&&!$r.has(n.cst.pathway))throw new Error(`Invalid adoption assessment payload at ${t}.cst.pathway: unexpected value "${n.cst.pathway}".`);if(Z(n.cst.goLiveDate,`${t}.cst.goLiveDate`),Z(n.cst.fullAdoptionDate,`${t}.cst.fullAdoptionDate`),Z(n.cst.benefitRealizationDate,`${t}.cst.benefitRealizationDate`),Z(n.cst.toolkitChoice,`${t}.cst.toolkitChoice`),typeof n.cst.toolkitChoice=="string"&&!gi(n.cst.toolkitChoice))throw new Error(`Invalid adoption assessment payload at ${t}.cst.toolkitChoice: unexpected value "${n.cst.toolkitChoice}".`)}}function Vr(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{Je(s,`${t}[${a}]`),Z(s.monthLabel,`${t}[${a}].monthLabel`),Ja(s.overallPercentage,`${t}[${a}].overallPercentage`),s.data!==void 0&&Qa(s.data,`${t}[${a}].data`)})}function Hr(n,t){Je(n,t),Object.keys(n).forEach(s=>{if(typeof n[s]!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected string.`)})}function Wr(n,t){Je(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((i,r)=>{Xa(i,`${t}.${s}[${r}]`)})})}function yt(n){if(!Ka(n))throw new Error("Invalid adoption assessment payload at root: expected object.");return Z(n.schemaVersion,"schemaVersion"),Z(n.exportedAt,"exportedAt"),n.orgProfile!==void 0&&Mr(n.orgProfile,"orgProfile"),n.currentDraft!==void 0&&Qa(n.currentDraft,"currentDraft"),n.objectives!==void 0&&Lr(n.objectives,"objectives"),n.auditLog!==void 0&&Ur(n.auditLog,"auditLog"),n.suppressedAutoActions!==void 0&&Fr(n.suppressedAutoActions,"suppressedAutoActions"),n.actionAuditLog!==void 0&&Gr(n.actionAuditLog,"actionAuditLog"),n.history!==void 0&&Vr(n.history,"history"),n.phaseOverrides!==void 0&&Hr(n.phaseOverrides,"phaseOverrides"),n.pathwayChecks!==void 0&&Br(n.pathwayChecks,"pathwayChecks"),n.componentActions!==void 0&&Wr(n.componentActions,"componentActions"),n}function qr(n=new Date){return n.toLocaleString("en-GB",{month:"short",year:"numeric"})}function ra(n){return{schemaVersion:"4.0",exportedAt:new Date().toISOString(),orgProfile:{...n.orgProfile},currentDraft:Hn(n.currentDraft),objectives:Za(n.objectives),auditLog:Xr(n.auditLog),suppressedAutoActions:ni(n.suppressedAutoActions),history:n.history.map(t=>({...t,data:Hn(t.data)})),phaseOverrides:{...n.phaseOverrides},pathwayChecks:ei(n.pathwayChecks)}}function zr(n){const t=n.componentActions;if(t)return Object.keys(t).reduce((s,a)=>(s[a]=(t[a]||[]).map(i=>({id:String(i.id??`${Date.now()}-${Math.random().toString(36).slice(2,8)}`),text:String(i.text||""),owner:String(i.owner||""),timescale:String(i.timescale||""),notes:String(i.notes||""),evidence:String(i.evidence||""),linkedActions:[]})),s),{})}function Yr(n,t){return n!=null&&n.length?n.map(s=>({id:`legacy-${s.id}`,timestamp:s.removedAt,actor:"Unknown user",eventType:"action-removed",entityType:"action",entityId:s.actionId,summary:`Removed action: ${s.actionText||s.actionId}`,trustName:t==null?void 0:t.trustName,projectName:t==null?void 0:t.projectName,componentId:s.componentId,lens:s.lens,reason:s.reason,before:{actionText:s.actionText,actionType:s.actionType},source:"local"})):[]}function Kr(n,t,s){const a=Yr(t,s),i=(n||[]).map(o=>({...o})),r=[...a,...i].sort((o,g)=>{const c=Date.parse(o.timestamp||""),h=Date.parse(g.timestamp||"");return!Number.isNaN(c)&&!Number.isNaN(h)&&c!==h?c-h:(o.id||"").localeCompare(g.id||"")});return At(r)}function Jr(n,t){return n.map(s=>({...s,source:"imported",importedAt:t}))}function hs(n){var a,i;if(!n)return{};const t=tt(n.orgProfile);(i=(a=n.orgProfile)==null?void 0:a.cst)!=null&&i.pathway||(t.cst.pathway="pathway-1");const s=n.objectives||zr(n);return{...n,schemaVersion:n.schemaVersion||"2.0",orgProfile:t,objectives:Za(s),auditLog:Kr(n.auditLog,n.actionAuditLog,t),suppressedAutoActions:ni(n.suppressedAutoActions),pathwayChecks:ei(n.pathwayChecks)}}function la(n,t){const s=yt(n),a=hs(s),i=!!(s.objectives||s.componentActions),r=new Date().toISOString(),o=Jr(a.auditLog||[],r),g=At([...t.auditLog||[],...o]);return Nt({...t,orgProfile:a.orgProfile||t.orgProfile,currentDraft:a.currentDraft?Hn(a.currentDraft):Hn(t.currentDraft),objectives:i?a.objectives:t.objectives,auditLog:g,suppressedAutoActions:a.suppressedAutoActions||t.suppressedAutoActions,history:(a.history||t.history).map(c=>({...c,data:Hn(c.data)})),phaseOverrides:a.phaseOverrides||t.phaseOverrides,pathwayChecks:a.pathwayChecks||t.pathwayChecks})}function ca(n,t,s=new Date){return{monthLabel:qr(s),overallPercentage:t,data:Hn(n)}}function Hn(n){const t=rs(n);return Object.keys(t).forEach(s=>{Object.keys(t[s]).forEach(a=>{t[s][a].actions=t[s][a].actions.map(i=>({...i,status:an(i.status),notes:i.notes||"",evidence:i.evidence||"",linkedTargets:(i.linkedTargets||[]).map(r=>({componentId:r.componentId,lens:r.lens}))}))})}),t}function Za(n){const t=ls(n||{});return Object.keys(t).forEach(s=>{t[s]=t[s].map(a=>({...a,owner:a.owner||"",timescale:a.timescale||"",notes:a.notes||"",evidence:a.evidence||"",linkedActions:(a.linkedActions||[]).map(i=>({lens:i.lens,actionId:i.actionId}))}))}),t}function ei(n){return n?Object.keys(n).reduce((t,s)=>{const a=n[s]||{};return t[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},t},{}):{}}function ni(n){return n?Object.keys(n).reduce((t,s)=>(t[s]=[...n[s]||[]],t),{}):{}}function Xr(n){return n?n.map(t=>({...t})):[]}function da(n){if(!n)return[];const t=n.split(/\s+/).filter(Boolean);if(t.length<2)return t;const s=t.slice(0,Math.ceil(t.length/2)).join(" "),a=t.slice(Math.ceil(t.length/2)).join(" ");return[s,a].filter(Boolean)}function Qr(n){return n.getContext?n:n.canvas}function _t(){return typeof document>"u"?!1:document.documentElement.dataset.nhsThemeMode==="dark"}function ti(n,t,s,a={}){var g,c;const i=Qr(t),r=(c=(g=gn).getChart)==null?void 0:c.call(g,i);r&&r.destroy();const o={type:n,data:s,options:a};return new gn(i,o)}function as(n,t,s={}){var f,x,d,P,A,N;gn.defaults.font.family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",gn.defaults.font.size=12,gn.defaults.elements.line.tension=.2,gn.defaults.elements.point.radius=4,gn.defaults.elements.point.hoverRadius=6;const a=_t(),l={maintainAspectRatio:!0,responsive:!0,layout:{padding:56},plugins:{legend:{display:!0,position:"bottom"},tooltip:{enabled:!0,backgroundColor:a?"rgba(15,23,42,0.98)":"rgba(11,18,32,0.95)",titleColor:"#fff",bodyColor:"#fff"},centerText:""},elements:{line:{borderWidth:3,tension:.2,borderColor:a?"#63b3ff":"#005EB8",backgroundColor:a?"rgba(99,179,255,0.12)":"rgba(0,94,184,0.06)"},point:{radius:4,hoverRadius:6,backgroundColor:a?"rgba(144,205,244,0.95)":"rgba(11,122,184,0.95)"}},scales:{r:{beginAtZero:!0,grid:{color:a?"rgba(226,232,240,0.12)":"rgba(11,18,32,0.06)",lineWidth:1},angleLines:{color:a?"rgba(226,232,240,0.18)":"rgba(11,18,32,0.10)",lineWidth:1},ticks:{display:!1},pointLabels:{display:!1,color:a?"#e2e8f0":"#0b1220",font:{size:12,family:gn.defaults.font.family},padding:10,callback:M=>da(M).join(`
`)}}}},b={...l,...s,layout:{padding:56,...s.layout||{}},scales:{...l.scales||{},...s.scales||{},r:{...((f=l.scales)==null?void 0:f.r)||{},...((x=s.scales)==null?void 0:x.r)||{},pointLabels:{...((P=(d=l.scales)==null?void 0:d.r)==null?void 0:P.pointLabels)||{},...((N=(A=s.scales)==null?void 0:A.r)==null?void 0:N.pointLabels)||{},display:!1,callback:M=>da(M).join(`
`)}}}};return ti("radar",n,t,b)}function si(n,t,s={}){const a=_t(),i=a?"#e2e8f0":"#0b1220",r=a?"rgba(226,232,240,0.08)":"rgba(11,18,32,0.04)",o=a?"rgba(226,232,240,0.10)":"rgba(11,18,32,0.06)",g=a?"#63b3ff":"#005EB8";return ti("line",n,t,{...{elements:{line:{borderWidth:2,tension:.2,borderColor:g,backgroundColor:a?"rgba(99,179,255,0.14)":"rgba(0,94,184,0.06)"},point:{radius:3,hoverRadius:5,backgroundColor:g}},scales:{x:{display:!0,grid:{color:r},ticks:{color:i,font:{size:11}}},y:{beginAtZero:!0,grid:{color:o},ticks:{color:i,font:{size:11}}}}},...s})}function Zr(n){return typeof n.toBase64Image=="function"?n.toBase64Image():""}const el={id:"radarCenterText",beforeDraw:n=>{var t;try{const s=n.ctx,i=(t=(n.options||{}).plugins)==null?void 0:t.centerText,r=(i==null?void 0:i.text)||i||"";if(!r)return;const o=String(n.config.type||"");if(o!=="radar"&&o!=="doughnut")return;s.save(),s.textAlign="center",s.textBaseline="middle";const g=n.width/2,c=n.height/2;if(o==="doughnut")s.font=(i==null?void 0:i.font)||"bold 20px Inter",s.fillStyle=(i==null?void 0:i.color)||"#005EB8",s.fillText(String(r),g,c-10),i!=null&&i.subText&&(s.font=(i==null?void 0:i.subFont)||"12px Inter",s.fillStyle=(i==null?void 0:i.subColor)||"#6b7280",s.fillText(String(i.subText),g,c+10));else{const h=Math.max(12,Math.round(Math.min(n.width,n.height)*.065)),l=`${h}px ${gn.defaults.font.family}`;s.font=l,s.fillStyle=(i==null?void 0:i.color)||(_t()?"#e2e8f0":"#0b1220");const b=String(r).split(`
`),f=h*1.05,x=(b.length-1)*-f/2;b.forEach((d,P)=>{s.fillText(d,g,c+x+P*f)})}s.restore()}catch{}}},nl={id:"radarPointLabelText",afterDraw:n=>{var t,s,a,i;try{const r=(t=n.scales)==null?void 0:t.r,o=(s=r==null?void 0:r.options)==null?void 0:s.pointLabels;if(!r||!o||n.config.type!=="radar")return;const g=n.ctx,c=Number(((a=o.font)==null?void 0:a.size)||gn.defaults.font.size||12),h=((i=o.font)==null?void 0:i.family)||gn.defaults.font.family||"Inter, sans-serif",l=o.color||(_t()?"#e2e8f0":"#0b1220"),b=Number(o.padding??14),f=Array.isArray(r._pointLabels)?r._pointLabels:[];g.save(),g.textAlign="center",g.textBaseline="middle",g.fillStyle=l,g.font=`${c}px ${h}`,f.forEach((x,d)=>{const A=String(x??"").split(`
`).filter(Boolean);if(!A.length)return;const N=r.getPointPosition(d,r.drawingArea+b,0),M=c*1.15,G=(A.length-1)*-M/2,ne=Math.max(c,A.length*M),v=c*6,k=v/2+4,q=n.width-v/2-4,K=ne/2+4,I=n.height-ne/2-4,ae=Math.min(Math.max(N.x,k),q),J=Math.min(Math.max(N.y,K),I);A.forEach((de,L)=>{const te=J+G+L*M;g.fillText(de,ae,te)})}),g.restore()}catch{}}};gn.register(el,nl);typeof window<"u"&&(window.NHSDigitalAdoption=window.NHSDigitalAdoption||{},window.NHSDigitalAdoption.Charts={createRadarChart:as,createLineChart:si,toBase64Image:Zr});function tl(n,t){const s=(n||[]).map(i=>`${i.componentId}:${i.lens}`).sort(),a=(t||[]).map(i=>`${i.componentId}:${i.lens}`).sort();return s.length===a.length&&s.every((i,r)=>i===a[r])}function sl(n,t){return n.text===t.text&&(n.actionType||"")===(t.actionType||"")&&n.owner===t.owner&&n.timescale===t.timescale&&n.status===t.status&&(n.phase??null)===(t.phase??null)&&(n.guidanceUrl||"")===(t.guidanceUrl||"")&&(n.startDate||"")===(t.startDate||"")&&(n.dueDate||"")===(t.dueDate||"")&&(n.notes||"")===(t.notes||"")&&(n.evidence||"")===(t.evidence||"")&&(n.readinessScore??null)===(t.readinessScore??null)&&tl(n.linkedTargets,t.linkedTargets)}function al(n){return`${n.text||"Untitled action"} - ${n.status}, owner: ${n.owner||"Unassigned"}`}function il(n,t){const s=n.map(i=>`${i.lens}:${i.actionId}`).sort(),a=t.map(i=>`${i.lens}:${i.actionId}`).sort();return s.length===a.length&&s.every((i,r)=>i===a[r])}function ol(n,t){return n.text===t.text&&n.owner===t.owner&&n.timescale===t.timescale&&(n.notes||"")===(t.notes||"")&&(n.evidence||"")===(t.evidence||"")&&il(n.linkedActions,t.linkedActions)}function rl(n){return`${n.text||"Untitled objective"} - owner: ${n.owner||"Unassigned"}`}function ai(n,t){return n.name===t.name&&n.role===t.role}function kt(n){return n.role?`${n.name||"Unnamed"} - ${n.role}`:n.name||"Unnamed"}function ll(n,t){return n.score===t.score&&n.justification===t.justification&&n.evidence===t.evidence}function ua(n){const t=`Score ${n.score}`;return n.justification?`${t} - ${n.justification}`:t}function Ot(n,t,s,a,i,r){const o=new Map(t.map(l=>[l.id,l])),g=new Set(n.map(l=>l.id)),c=[];n.forEach(l=>{const b=o.get(l.id);b&&!s(l,b)&&c.push({id:`${a}:${l.id}`,label:i(l),mineSummary:r(l),theirsSummary:r(b)})});const h=t.filter(l=>!g.has(l.id)).length;return{conflicts:c,autoMergedCount:h,merge:l=>{const b=n.map(f=>{const x=o.get(f.id);return x&&l[`${a}:${f.id}`]==="theirs"?x:f});return t.forEach(f=>{g.has(f.id)||b.push(f)}),b}}}const ma=[{key:"trustName",label:"Trust name"},{key:"region",label:"Region"},{key:"trustType",label:"Trust type"},{key:"projectName",label:"Programme / project name"},{key:"leadName",label:"Lead submitter"}],ga=[{key:"type",label:"CST type"},{key:"pathway",label:"Pathway"},{key:"goLiveDate",label:"Go live date"},{key:"fullAdoptionDate",label:"Full adoption date"},{key:"benefitRealizationDate",label:"Benefit realisation date"},{key:"toolkitChoice",label:"Default toolkit"}];function ii(n,t){const s=[];return ma.forEach(({key:a,label:i})=>{const r=String(n[a]??""),o=String(t[a]??"");r!==o&&s.push({id:`profile:${String(a)}`,label:i,mineSummary:r||"(blank)",theirsSummary:o||"(blank)"})}),ga.forEach(({key:a,label:i})=>{const r=String(n.cst[a]??""),o=String(t.cst[a]??"");r!==o&&s.push({id:`cst:${String(a)}`,label:i,mineSummary:r||"(blank)",theirsSummary:o||"(blank)"})}),{conflicts:s,autoMergedCount:0,merge:a=>{const i={...n};ma.forEach(({key:o})=>{a[`profile:${String(o)}`]==="theirs"&&(i[o]=t[o])});const r={...n.cst};return ga.forEach(({key:o})=>{a[`cst:${String(o)}`]==="theirs"&&(r[o]=t.cst[o])}),{...i,cst:r}}}}function oi(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a=[],i=[];let r=0;const o=new Map,g=new Map;return s.forEach(c=>{const h=n[c]||{},l=t[c]||{},b=new Set([...Object.keys(h),...Object.keys(l)]);g.set(c,b),b.forEach(f=>{const x=h[f],d=l[f],P=`${c}:${f}`;x&&d&&!ll(x,d)&&a.push({id:`entry:${P}`,label:`${c} / ${f}`,mineSummary:ua(x),theirsSummary:ua(d)});const A=Ot((x==null?void 0:x.actions)||[],(d==null?void 0:d.actions)||[],sl,`action:${P}`,N=>`${c} / ${f} - ${N.text||"Untitled action"}`,al);i.push(...A.conflicts),r+=A.autoMergedCount,o.set(P,A)})}),{entryConflicts:a,actionConflicts:i,autoMergedActionCount:r,merge:c=>{const h={};return s.forEach(l=>{const b=n[l]||{},f=t[l]||{},x={};(g.get(l)||new Set).forEach(d=>{var ne;const P=b[d],A=f[d],N=`${l}:${d}`;let M=P?{score:P.score,justification:P.justification,evidence:P.evidence}:{score:A.score,justification:A.justification,evidence:A.evidence};P&&A&&c[`entry:${N}`]==="theirs"&&(M={score:A.score,justification:A.justification,evidence:A.evidence});const G=((ne=o.get(N))==null?void 0:ne.merge(c))||[];x[d]={...M,actions:G}}),h[l]=x}),h}}}function ri(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a=[];let i=0;const r=new Map;return s.forEach(o=>{const g=Ot(n[o]||[],t[o]||[],ol,`objective:${o}`,c=>`${o} - ${c.text||"Untitled objective"}`,rl);a.push(...g.conflicts),i+=g.autoMergedCount,r.set(o,g)}),{conflicts:a,autoMergedCount:i,merge:o=>{const g={};return s.forEach(c=>{var h;g[c]=((h=r.get(c))==null?void 0:h.merge(o))||[]}),g}}}function li(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a=[];let i=0;return s.forEach(r=>{const o=n[r],g=t[r];if(o===void 0||g===void 0){o===void 0&&g!==void 0&&(i+=1);return}o!==g&&a.push({id:`phase:${r}`,label:`Phase focus override - ${r}`,mineSummary:o,theirsSummary:g})}),{conflicts:a,autoMergedCount:i,merge:r=>{const o={...n};return s.forEach(g=>{const c=t[g];c!==void 0&&(n[g]===void 0||r[`phase:${g}`]==="theirs")&&(o[g]=c)}),o}}}function cl(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a={};return s.forEach(i=>{const r=n[i]||{},o=t[i]||{},g=new Set([...Object.keys(r),...Object.keys(o)]),c={};g.forEach(h=>{const l=h;c[l]=Array.from(new Set([...r[l]||[],...o[l]||[]]))}),a[i]=c}),a}function dl(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a={};return s.forEach(i=>{a[i]=Array.from(new Set([...n[i]||[],...t[i]||[]]))}),a}function ul(n,t){const s=new Map;return t.forEach(a=>s.set(a.monthLabel,a)),n.forEach(a=>s.set(a.monthLabel,a)),Array.from(s.values())}function ci(n){const t=hs(n);return{theirsProfile:t.orgProfile||tt(),theirsDraft:t.currentDraft||{},theirsObjectives:t.objectives||{},theirsPhaseOverrides:t.phaseOverrides||{},theirsPathwayChecks:t.pathwayChecks||{},theirsSuppressedAutoActions:t.suppressedAutoActions||{},theirsAuditLog:t.auditLog||[],theirsHistory:(t.history||[]).map(s=>({...s,data:rs(s.data)}))}}function ml(n,t){const{theirsProfile:s,theirsDraft:a,theirsObjectives:i,theirsPhaseOverrides:r}=ci(t),o=ii(n.orgProfile,s),g=Ot(n.orgProfile.teamMembers||[],s.teamMembers||[],ai,"team",kt,kt),c=oi(n.currentDraft,a),h=ri(n.objectives,i),l=li(n.phaseOverrides,r),b=[{id:"profile",title:"Organisation profile & CST settings",items:o.conflicts},{id:"team",title:"Team members",items:g.conflicts},{id:"assessments",title:"Assessments",items:c.entryConflicts},{id:"actions",title:"Lens actions",items:c.actionConflicts},{id:"objectives",title:"Objectives",items:h.conflicts},{id:"phaseFocus",title:"Phase focus overrides",items:l.conflicts}].filter(x=>x.items.length>0),f=[];return g.autoMergedCount&&f.push(`${g.autoMergedCount} new team member(s)`),c.autoMergedActionCount&&f.push(`${c.autoMergedActionCount} new action(s)`),h.autoMergedCount&&f.push(`${h.autoMergedCount} new objective(s)`),l.autoMergedCount&&f.push(`${l.autoMergedCount} new phase focus override(s)`),{sections:b,autoMergeSummary:f,hasConflicts:b.length>0}}function pa(n,t,s){const{theirsProfile:a,theirsDraft:i,theirsObjectives:r,theirsPhaseOverrides:o,theirsPathwayChecks:g,theirsSuppressedAutoActions:c,theirsAuditLog:h,theirsHistory:l}=ci(t),b=ii(n.orgProfile,a),f=Ot(n.orgProfile.teamMembers||[],a.teamMembers||[],ai,"team",kt,kt),x=oi(n.currentDraft,i),d=ri(n.objectives,r),P=li(n.phaseOverrides,o),A={...n.orgProfile,...b.merge(s),teamMembers:f.merge(s)},N=new Date().toISOString(),M=h.map(ne=>({...ne,source:"imported",importedAt:N})),G=At([...n.auditLog||[],...M]);return Nt({...n,orgProfile:A,currentDraft:rs(x.merge(s)),objectives:ls(d.merge(s)),auditLog:G,suppressedAutoActions:dl(n.suppressedAutoActions,c),history:ul(n.history,l),phaseOverrides:P.merge(s),pathwayChecks:cl(n.pathwayChecks,g)})}const gl=`{
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
`,fs={componentId:"benefits",actionPrefix:"benefits-action",outcomePrefix:"benefits:outcome",fallbackOutcomes:[{id:"benefits:outcome:o1",text:"Benefits and disbenefits have been identified and defined"},{id:"benefits:outcome:o2",text:"Benefits are actively managed and monitored"},{id:"benefits:outcome:o3",text:"Benefits are realised, evidenced and sustained"}],lensAliases:{"Strategic Direction and Leadership":"Planning and Risk","People Experience and Culture":"Process and Sustainment"}},pl=Xe(gl,fs);function hl(n){return Qe(n,fs,pl)}function fl(n){return Ze(n,fs)}const bl=`{
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
`,bs={componentId:"capability",actionPrefix:"capability-action",outcomePrefix:"capability:outcome",fallbackOutcomes:[{id:"capability:outcome:o1",text:"Required capability levels have been defined and assessed"},{id:"capability:outcome:o2",text:"People can perform confidently in the future state"},{id:"capability:outcome:o3",text:"Capability and confidence are sustained and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Communication:"People Experience and Culture","Testing and Validation":"Skills and Behaviour"}},xl=Xe(bl,bs);function Sl(n){return Qe(n,bs,xl)}function vl(n){return Ze(n,bs)}const yl=`{
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
`,xs={componentId:"case_for_change",actionPrefix:"case-for-change-action",outcomePrefix:"case-for-change:outcome",fallbackOutcomes:[{id:"case-for-change:outcome:o1",text:"The need for change has been clearly defined and evidenced"},{id:"case-for-change:outcome:o2",text:"The case for change is understood and accepted"},{id:"case-for-change:outcome:o3",text:"The case for change remains credible and relevant"}]},wl=Xe(yl,xs);function Nl(n){return Qe(n,xs,wl)}function Cl(n){return Ze(n,xs)}const El=`{
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
`,Ss={componentId:"change_adoption",actionPrefix:"change-adoption-action",outcomePrefix:"change-adoption:outcome",fallbackOutcomes:[{id:"change-adoption:outcome:o1",text:"Adoption expectations and measures have been defined"},{id:"change-adoption:outcome:o2",text:"Adoption is actively monitored and supported"},{id:"change-adoption:outcome:o3",text:"Adoption is sustained and optimised"}],lensAliases:{"Planning and Measurement":"Planning and Risk","Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","Skills and Behaviour":"Skills and Behaviour","People Experience and Culture":"Skills and Behaviour",Governance:"Planning and Risk",Design:"Planning and Risk",Reinforcement:"Skills and Behaviour"}},jl=Xe(El,Ss);function kl(n){return Qe(n,Ss,jl)}function Il(n){return Ze(n,Ss)}const Al=`{
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
`,vs={componentId:"change_impact",actionPrefix:"change-impact-action",outcomePrefix:"change-impact:outcome",fallbackOutcomes:[{id:"change-impact:outcome:o1",text:"The impact of the change has been identified and understood"},{id:"change-impact:outcome:o2",text:"Impacts have been assessed, validated and prioritised"},{id:"change-impact:outcome:o3",text:"Change impacts are actively managed through plans, governance and support"}]},_l=Xe(Al,vs);function Ol(n){return Qe(n,vs,_l)}function Rl(n){return Ze(n,vs)}const Pl=`{
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
`,ys={componentId:"change_network",actionPrefix:"change-network-action",outcomePrefix:"change-network:outcome",fallbackOutcomes:[{id:"change-network:outcome:o1",text:"A representative and effective change network has been established"},{id:"change-network:outcome:o2",text:"The change network actively enables engagement and adoption"},{id:"change-network:outcome:o3",text:"The change network is embedded and delivers ongoing value"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Engagement:"People Experience and Culture","Analysis and Insight":"People Experience and Culture"}},Dl=Xe(Pl,ys);function $l(n){return Qe(n,ys,Dl)}function Tl(n){return Ze(n,ys)}const Ll=`{
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
`,ws={componentId:"cm_readiness",actionPrefix:"cm-readiness-action",outcomePrefix:"cm-readiness:outcome",fallbackOutcomes:[{id:"cm-readiness:outcome:o1",text:"Organisational readiness has been assessed"},{id:"cm-readiness:outcome:o2",text:"A robust change management plan has been developed"},{id:"cm-readiness:outcome:o3",text:"Readiness and planning activities actively support successful implementation"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Planning and Risk":"Planning and Risk","People Experience and Culture":"Planning and Risk","Skills and Behaviour":"Planning and Risk","Process and Sustainment":"Planning and Risk",Governance:"Planning and Risk",Reinforcement:"Planning and Risk"}},Bl=Xe(Ll,ws);function Fl(n){return Qe(n,ws,Bl)}function Gl(n){return Ze(n,ws)}const Ul=`{
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
`,Ns={componentId:"org_maturity",actionPrefix:"org-change-readiness-action",outcomePrefix:"org-change-readiness:outcome",fallbackOutcomes:[{id:"org-change-readiness:outcome:o1",text:"Organisational readiness has been assessed and understood"},{id:"org-change-readiness:outcome:o2",text:"Readiness gaps are being actively addressed"},{id:"org-change-readiness:outcome:o3",text:"The organisation is prepared to successfully absorb and sustain the change"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"Skills and Behaviour","Planning and Measurement":"Skills and Behaviour",Design:"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Reinforcement:"Skills and Behaviour"}},Ml=Xe(Ul,Ns);function Vl(n){return Qe(n,Ns,Ml)}function Hl(n){return Ze(n,Ns)}const Wl="pathway-auto-action:",ql="pathway:auto-objective:",zl="vision:auto-objective:";function Yl(n){return n.startsWith(ql)||n.startsWith(zl)}function Kl(n){const t=n.orgProfile.cst.pathway,s={...n.objectives||{}},a=Object.keys(n.currentDraft||{}).reduce((i,r)=>{const o=n.currentDraft[r]||{};return i[r]=Object.keys(o).reduce((g,c)=>{const h=o[c];return g[c]={...h,actions:(h.actions||[]).filter(l=>!l.id.startsWith(Wl))},g},{}),i},{});return It.forEach(i=>{cs(i.id,t)&&(s[i.id]=(s[i.id]||[]).filter(o=>!Yl(o.id)))}),{...n,currentDraft:a,objectives:s}}const Jl=`{
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
`,Cs={componentId:"process_change",actionPrefix:"process-change-action",outcomePrefix:"process-change:outcome",fallbackOutcomes:[{id:"process-change:outcome:o1",text:"Current and future processes have been defined"},{id:"process-change:outcome:o2",text:"Process changes have been implemented and adopted"},{id:"process-change:outcome:o3",text:"Processes are optimised and continuously improved"}],lensAliases:{"Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Skills and Behaviour","Planning and Risk":"Process and Sustainment","Analysis and Insight":"Process and Sustainment",Communication:"Skills and Behaviour","Dependency Management":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment",Implementation:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"Skills and Behaviour","Testing and Validation":"Process and Sustainment"}},Xl=Xe(Jl,Cs);function Ql(n){return Qe(n,Cs,Xl)}function Zl(n){return Ze(n,Cs)}const ec=`{
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
`,Es={componentId:"reinforcement",actionPrefix:"reinforcement-action",outcomePrefix:"reinforcement:outcome",fallbackOutcomes:[{id:"reinforcement:outcome:o1",text:"Reinforcement strategy and sustainment measures are defined"},{id:"reinforcement:outcome:o2",text:"Reinforcement activities support sustained adoption and behaviour change"},{id:"reinforcement:outcome:o3",text:"Sustained change outcomes are embedded and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Strategic Direction and Leadership":"Process and Sustainment","Planning and Measurement":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"People Experience and Culture"}},nc=Xe(ec,Es);function tc(n){return Qe(n,Es,nc)}function sc(n){return Ze(n,Es)}const ac=`{
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
`,js={componentId:"resistance",actionPrefix:"resistance-action",outcomePrefix:"resistance:outcome",fallbackOutcomes:[{id:"resistance:outcome:o1",text:"Potential sources of resistance have been identified and understood"},{id:"resistance:outcome:o2",text:"Strategies and interventions are in place to prevent and address resistance"},{id:"resistance:outcome:o3",text:"Resistance is actively managed and reduced throughout the change lifecycle"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour",Design:"Skills and Behaviour",Communication:"People Experience and Culture",Engagement:"People Experience and Culture",Reinforcement:"Skills and Behaviour"}},ic=Xe(ac,js);function oc(n){return Qe(n,js,ic)}function rc(n){return Ze(n,js)}const lc=`{
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
`,ks={componentId:"risk_management",actionPrefix:"risk-management-action",outcomePrefix:"risk-management:outcome",fallbackOutcomes:[{id:"risk-management:outcome:o1",text:"Change risks have been identified and assessed"},{id:"risk-management:outcome:o2",text:"Risk mitigation and management activities are in place"},{id:"risk-management:outcome:o3",text:"Risks are proactively managed throughout the change lifecycle"}],lensAliases:{"Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Strategic Direction and Leadership":"Planning and Risk","Skills and Behaviour":"Process and Sustainment",Governance:"Planning and Risk",Reinforcement:"Process and Sustainment"}},cc=Xe(lc,ks);function dc(n){return Qe(n,ks,cc)}function uc(n){return Ze(n,ks)}const mc=`{
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
`,Is={componentId:"skills_learning",actionPrefix:"skills-learning-action",outcomePrefix:"skills-learning:outcome",fallbackOutcomes:[{id:"skills-learning:outcome:o1",text:"Future learning and capability requirements have been identified"},{id:"skills-learning:outcome:o2",text:"Learning interventions have been designed and delivered"},{id:"skills-learning:outcome:o3",text:"Learning outcomes are achieved and sustained"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Process and Sustainment":"Skills and Behaviour",Governance:"Skills and Behaviour",Communication:"People Experience and Culture",Reinforcement:"Skills and Behaviour",Design:"Skills and Behaviour","Dependency Management":"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour","Testing and Validation":"Skills and Behaviour"}},gc=Xe(mc,Is);function pc(n){return Qe(n,Is,gc)}function hc(n){return Ze(n,Is)}const fc=`{
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
`,As={componentId:"sponsorship",actionPrefix:"sponsorship-action",outcomePrefix:"sponsorship:outcome",fallbackOutcomes:[{id:"sponsorship:outcome:o1",text:"Clear sponsorship and governance structures are established"},{id:"sponsorship:outcome:o2",text:"Sponsors actively lead and champion the change"},{id:"sponsorship:outcome:o3",text:"Governance and sponsorship drive successful delivery"}]},bc=Xe(fc,As);function xc(n){return Qe(n,As,bc)}function Sc(n){return Ze(n,As)}const vc=`{
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
`,_s={componentId:"stakeholder",actionPrefix:"stakeholder-action",outcomePrefix:"stakeholder:outcome",fallbackOutcomes:[{id:"stakeholder:outcome:o1",text:"Stakeholders have been identified, analysed and prioritised"},{id:"stakeholder:outcome:o2",text:"Stakeholders are actively engaged and informed"},{id:"stakeholder:outcome:o3",text:"Engagement and communications support successful adoption"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Reinforcement:"People Experience and Culture"}},yc=Xe(vc,_s);function wc(n){return Qe(n,_s,yc)}function Nc(n){return Ze(n,_s)}const Cc=`{
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
`,Os={componentId:"transfer_bau",actionPrefix:"transfer-bau-action",outcomePrefix:"transfer-bau:outcome",fallbackOutcomes:[{id:"transfer-bau:outcome:o1",text:"Operational ownership and accountability have been established"},{id:"transfer-bau:outcome:o2",text:"Business-as-usual capabilities and support arrangements are in place"},{id:"transfer-bau:outcome:o3",text:"The change is fully embedded within normal operational management"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Process and Sustainment":"Process and Sustainment","Planning and Risk":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Skills and Behaviour":"Process and Sustainment",Governance:"Strategic Direction and Leadership","Measurement and Evaluation":"Process and Sustainment",Implementation:"Process and Sustainment","Risk Management":"Process and Sustainment",Design:"Process and Sustainment","Dependency Management":"Process and Sustainment",Reinforcement:"Process and Sustainment"}},Ec=Xe(Cc,Os);function jc(n){return Qe(n,Os,Ec)}function kc(n){return Ze(n,Os)}const Ic=`{
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
`,Rs={componentId:"vision",actionPrefix:"vision-action",outcomePrefix:"vision:outcome",fallbackOutcomes:[{id:"vision:outcome:o1",text:"A compelling future state has been defined"},{id:"vision:outcome:o2",text:"The vision is shared and understood"},{id:"vision:outcome:o3",text:"The vision is visible and guides the change"}]},Ac=Xe(Ic,Rs);function _c(n){return Qe(n,Rs,Ac)}function Oc(n){return Ze(n,Rs)}function Cn(n){return Kl(jc(Vl(tc(Ql(Sl(kl(pc(oc(wc(Fl(dc($l(Ol(hl(xc(Nl(_c(n))))))))))))))))))}function Rc(n){return kc(Hl(sc(Zl(vl(Il(hc(rc(Nc(Gl(uc(Tl(Rl(fl(Sc(Cl(Oc(n)))))))))))))))))}function Pc(n,t){return t==="pathway-1"?Cn(n):Rc(n)}const Ht="nhs-digital-adoption-user-settings",Wt="nhs-digital-adoption-report-reminder-dismissed",Dc="nhs-digital-adoption-engagement",bt="nhs-digital-adoption-onboarding-seen",qt="nhs-digital-adoption-pathway-selection-seen",zt="nhs-digital-adoption-current-user-id",ha="Default",$c=5*1024*1024,Tc=new Set(["application/json","text/json"]),Lc="Unknown user",Bc={red:"test-data/adoption-phase1-red.json",amber:"test-data/adoption-phase2-amber.json",green:"test-data/adoption-phase3-green.json"},Yt={name:"",preferences:"",themeColor:"#005eb8",profileImageDataUrl:"",darkMode:!1,colorAccessibilityMode:"standard",phaseFocusMode:"auto",manualPhaseFocus:1,hideGuidedWorkflow:!1,showAdditionalGuidanceLinks:!0,showExternalLinksSection:!1};function Fc(n){return{...n,linkedTargets:(n.linkedTargets||[]).map(t=>({componentId:t.componentId,lens:t.lens}))}}function Gc(n,t){return`${n}:${t}`}function Uc(n){return n.orgProfile.trustName||n.orgProfile.projectName?!1:!Object.values(n.currentDraft).some(t=>Object.values(t).some(s=>s.score>0))}function Kt(n){return!n.trustName.trim()}function Mc(n){var t;if(!((t=n.evidence)!=null&&t.trim()))return!1;try{const s=JSON.parse(n.evidence);return Array.isArray(s)?s.length>0:!!n.evidence.trim()}catch{return!!n.evidence.trim()}}function Vc(n){return n.trim()||Lc}function Hc(n,t){return!!t&&(n.teamMembers||[]).some(s=>s.id===t)}function Wc(n,t,s){const a=(n.teamMembers||[]).find(i=>i.id===t);return Vc((a==null?void 0:a.name)||s)}function qc(n,t,s){var i;const a=Li[n];return((i=a==null?void 0:a[t])==null?void 0:i[s])||Qt[s]||Qt[0]}function zc(n=new Date){const t=String(n.getMonth()+1).padStart(2,"0");return`${n.getFullYear()}-${t}`}function Yc(n=new Date){return new Date(n.getFullYear(),n.getMonth()-1,1).toLocaleString("en-GB",{month:"short",year:"numeric"})}function Kc(n,t,s){return["Monthly Adoption Reporting Reminder","","Organisation",`${t||"Unconfigured Trust"}${s?` / ${s}`:""}`,"","Action Required",`Please finalise the ${n} adoption month if it has not already been captured.`,"","Attached","Point-in-time JSON report export generated from the latest working draft.","","Next Step","Review, confirm finalisation status, and circulate to the team."].join(`
`)}function Jc(n){const t=new TextEncoder().encode(n);let s="";return t.forEach(a=>{s+=String.fromCharCode(a)}),window.btoa(s)}function Xc(n,t=76){const s=[];for(let a=0;a<n.length;a+=t)s.push(n.slice(a,a+t));return s.join(`\r
`)}function Qc(n=new Date){const t=n.getDate(),s=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();return t>=s-6}function Zc(n=new Date){return n.toLocaleString("en-GB",{month:"short",year:"numeric"})}function ed(n){const t=window.prompt(`Phase ${n} has changed. Enter delivery readiness grade (${xt.join("/")}).`,"C");if(!t)return null;const s=t.trim().toUpperCase();if(!xt.includes(s))return window.alert(`Invalid competence grade. Use one of ${xt.join(", ")}.`),null;const a=window.prompt(`Enter confidence score for Phase ${n} (${St.join("-")}, where 1 is low and 5 is very high).`,"3");if(!a)return null;const i=Number(a.trim());return St.includes(i)?{competence:s,confidence:i}:(window.alert(`Invalid confidence score. Use a number from ${St.join(" to ")}.`),null)}function cd(){var V,xe;const n=It,t=u.useMemo(()=>[...no],[]),[s,a]=u.useState("dashboard"),[i,r]=u.useState(n[0].id),[o,g]=u.useState(()=>typeof window>"u"?!0:window.innerWidth>=1024),[c,h]=u.useState(()=>{let p={};try{const $=dn(oa);p=hs(yt($))}catch($){console.warn("Ignoring invalid persisted adoption data.",$)}const w=Nt({view:"dashboard",orgProfile:p==null?void 0:p.orgProfile,currentDraft:p==null?void 0:p.currentDraft,objectives:p==null?void 0:p.objectives,suppressedAutoActions:p==null?void 0:p.suppressedAutoActions,auditLog:p==null?void 0:p.auditLog,history:p==null?void 0:p.history,phaseOverrides:p==null?void 0:p.phaseOverrides,pathwayChecks:p==null?void 0:p.pathwayChecks});return w.orgProfile.cstId||(w.orgProfile={...w.orgProfile,cstId:$s()}),Cn(w)}),[l,b]=u.useState(""),[f,x]=u.useState(()=>!!dn(qt)),[d,P]=u.useState(()=>!dn(qt)&&Kt(c.orgProfile)),[A,N]=u.useState(()=>dn(zt)||""),M=An.useRef(A);u.useEffect(()=>{M.current=A},[A]);const[G,ne]=u.useState(null),[v,k]=u.useState(()=>{const p=dn(Ht);return{...Yt,...p}}),q=An.useRef(v.name);u.useEffect(()=>{q.current=v.name},[v.name]);const K=An.useRef(null),I=An.useRef(null),[ae,J]=u.useState(""),de=An.useRef(null),L=u.useMemo(()=>zc(),[]),[te,ue]=u.useState(()=>dn(Wt)||{}),[re,me]=u.useState(()=>!!dn(bt)),[O,oe]=u.useState(()=>!dn(bt)),[ge,Ie]=u.useState(!0),[Te,we]=u.useState([]),[Me,Ae]=u.useState(!1),[un,ln]=u.useState(!1),[Pe,y]=u.useState(!1),T=An.useRef(!1),[E,R]=u.useState(!1),U=An.useRef(!1),[ze,Ye]=u.useState({1:!0}),[Fe,Le]=u.useState({intro:!0,overview:!0,tools:!0}),[Ve,j]=u.useState(null),[Q,le]=u.useState(!0),[be,Ge]=u.useState("medium"),he=An.useRef({}),ve=u.useCallback(()=>{oe(!1),re||(me(!0),sn(bt,!0))},[re]),fe=u.useMemo(()=>{const p=new Date,w=Yc(p),$=p.getDate()===1,H=c.history.some(B=>B.monthLabel===w);return{previousMonthLabel:w,isFirstDayOfMonth:$,hasFinalisedPreviousMonth:H,shouldNotify:$&&!H}},[c.history]),[en,pn]=u.useState("test@test.com"),[nn,Ee]=u.useState(""),[He,cn]=u.useState(""),S=Zc(),_=Qc(),W=u.useCallback((p,w)=>(c.currentDraft[p]||(c.currentDraft[p]={}),c.currentDraft[p][w]||(c.currentDraft[p][w]=Tt()),c.currentDraft[p][w]),[c]),se=v.showAdditionalGuidanceLinks!==!1,z=u.useMemo(()=>{const p=Ls(c,n);return{...p,nextSteps:p.nextSteps.map(w=>({...w,toolkitLinks:jt(ha,w.componentId,"inputs",void 0,se).slice(0,3)}))}},[c,se]),De=v.phaseFocusMode==="manual"&&v.manualPhaseFocus?v.manualPhaseFocus:z.currentPhase;u.useEffect(()=>{Ye(p=>({...p,[De]:!0}))},[De]),u.useEffect(()=>{const w={introduction:"intro","cm-guide":"intro","project-details":"intro",dashboard:"overview","daily-checkin":"overview","action-plan":"overview","roadmap-view":"overview","highlight-builder":"tools","force-field-analysis":"tools",compare:"tools","audit-log":"tools"}[s];w&&Le($=>({...$,[w]:!0}))},[s]);const Ke=Hi(c,p=>Jt(p)||n[0],W).sort((p,w)=>{const $=p.action.owner.localeCompare(w.action.owner);return $!==0?$:p.component.localeCompare(w.component)});u.useEffect(()=>{sn(oa,c)},[c]),u.useEffect(()=>{sn(Ht,v)},[v]),u.useEffect(()=>{sn(zt,A)},[A]),u.useEffect(()=>{sn(Wt,te)},[te]),u.useEffect(()=>{Ee(`Action required: finalise ${fe.previousMonthLabel} adoption report`),cn(Kc(fe.previousMonthLabel,c.orgProfile.trustName,c.orgProfile.projectName||""))},[fe.previousMonthLabel,c.orgProfile.projectName,c.orgProfile.trustName]),u.useEffect(()=>{!T.current&&!O&&Kt(c.orgProfile)&&(T.current=!0,ln(!0))},[O,c.orgProfile]),u.useEffect(()=>{U.current||un||Kt(c.orgProfile)||Hc(c.orgProfile,A)||(U.current=!0,R(!0))},[c.orgProfile,A,un]),u.useEffect(()=>{s==="dashboard"&&K.current&&setTimeout(()=>{var $,H,B;const p=($=K.current)==null?void 0:$.querySelector("#adoption-radar-chart");if(p){const X=Mi(c,t,n,W);as(p,X)}const w=(H=K.current)==null?void 0:H.querySelector("#adoption-component-radar-chart");if(w){const X=Vi(n,W,De);as(w,X,{maintainAspectRatio:!1,scales:{r:{min:0,max:5,ticks:{display:!0,stepSize:1,backdropColor:"transparent"}}}})}if(c.history.length>0){const X=(B=K.current)==null?void 0:B.querySelector("#adoption-line-chart");if(X){const ie={labels:c.history.map(ce=>ce.monthLabel),datasets:[{label:"Adoption Score",data:c.history.map(ce=>ce.overallPercentage||0),borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",fill:!0,tension:.4}]};si(X,ie)}}},100)},[s,c,W,t,n,De,Q,be]),u.useEffect(()=>{const p=()=>{g(window.innerWidth>=1024)};return p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}},[]),u.useEffect(()=>{typeof document<"u"&&(document.documentElement.dataset.nhsThemeMode=v.darkMode?"dark":"light")},[v.darkMode]),u.useEffect(()=>{var w;const p=s==="assessment"?`component:${i}`:`view:${s}`;(w=he.current[p])==null||w.scrollIntoView({block:"nearest",behavior:"smooth"})},[i,s]);const tn=()=>typeof window>"u"?!1:window.innerWidth<1024,ye=u.useCallback(()=>{var p;(p=I.current)==null||p.scrollTo({top:0,behavior:"auto"})},[]),We=u.useCallback(p=>{a(w=>w===p?w:(we($=>[w,...$].slice(0,20)),p)),tn()&&g(!1)},[]),Ne=p=>{We(p)},jn=u.useCallback(()=>{we(p=>{const[w,...$]=p;return w?(a(w),window.innerWidth<1024&&g(!1),$):(window.location.hash="#/",p)})},[]),Ue=u.useCallback(p=>{Jt(p)&&(r(p),We("assessment"),ye())},[We,ye]),[On,mn]=u.useState(null),Ln=u.useCallback((p,w,$)=>{mn({lens:w,actionId:$}),Ue(p)},[Ue]);u.useEffect(()=>{ye()},[ye,s]);function je(p,w){if(!w.length)return p.auditLog;const $=Wc(p.orgProfile,M.current,q.current||""),H=w.map(B=>Pr({actor:$,eventType:B.eventType,entityType:B.entityType,entityId:B.entityId,summary:B.summary,trustName:B.trustName??p.orgProfile.trustName,projectName:B.projectName??p.orgProfile.projectName,componentId:B.componentId,lens:B.lens,reason:B.reason,before:B.before,after:B.after,source:B.source,importedAt:B.importedAt}));return At([...p.auditLog||[],...H])}const kn=u.useCallback((p,w,$)=>{h(H=>{var Oe;const B=((Oe=H.currentDraft[p])==null?void 0:Oe[w])||Tt(),X={...H,currentDraft:{...H.currentDraft,[p]:{...H.currentDraft[p],[w]:va($)}}},ie=[];B.score!==$.score&&ie.push({eventType:"entry-score-updated",entityType:"entry",entityId:`${p}:${w}`,summary:`Updated readiness score for ${p} / ${w}: ${B.score} -> ${$.score}`,componentId:p,lens:w,before:{score:B.score},after:{score:$.score},source:"local"}),(B.justification||"")!==($.justification||"")&&ie.push({eventType:"entry-justification-updated",entityType:"entry",entityId:`${p}:${w}`,summary:`Updated justification for ${p} / ${w}`,componentId:p,lens:w,before:{justification:B.justification||""},after:{justification:$.justification||""},source:"local"}),(B.evidence||"")!==($.evidence||"")&&ie.push({eventType:"entry-evidence-updated",entityType:"entry",entityId:`${p}:${w}`,summary:`Updated evidence for ${p} / ${w}`,componentId:p,lens:w,before:{evidence:B.evidence||""},after:{evidence:$.evidence||""},source:"local"});const ce=new Map(B.actions.map(pe=>[pe.id,pe]));return $.actions.forEach(pe=>{const $e=ce.get(pe.id);if(!$e){ie.push({eventType:"action-created",entityType:"action",entityId:pe.id,summary:`Created action in ${p} / ${w}`,componentId:p,lens:w,after:{text:pe.text,status:pe.status,owner:pe.owner,actionType:pe.actionType},source:"local"});return}const Fn=JSON.stringify({text:$e.text,status:$e.status,owner:$e.owner,actionType:$e.actionType,notes:$e.notes,dueDate:$e.dueDate,startDate:$e.startDate,evidence:$e.evidence}),Nn=JSON.stringify({text:pe.text,status:pe.status,owner:pe.owner,actionType:pe.actionType,notes:pe.notes,dueDate:pe.dueDate,startDate:pe.startDate,evidence:pe.evidence});Fn!==Nn&&ie.push({eventType:"action-updated",entityType:"action",entityId:pe.id,summary:`Updated action in ${p} / ${w}`,componentId:p,lens:w,before:{text:$e.text,status:$e.status,owner:$e.owner,actionType:$e.actionType},after:{text:pe.text,status:pe.status,owner:pe.owner,actionType:pe.actionType},source:"local"})}),{...Cn(X),auditLog:je(H,ie)}})},[je]),Wn=u.useCallback((p,w,$,H)=>{const B=W(p,w);kn(p,w,{...B,actions:B.actions.map(X=>X.id===$?{...X,status:an(H)}:X)})},[W,kn]),Bn=u.useCallback((p,w,$,H)=>{const B=W(p,w).actions.find(ie=>ie.id===$);if(an(H)==="Completed"&&B!==void 0&&!Mc(B)&&!dn(et)){j({componentId:p,lens:w,actionId:$,status:H});return}Wn(p,w,$,H)},[Wn,W]),Rt=u.useCallback((p,w)=>{h($=>{const H=$.objectives[p]||[],B={...$,objectives:{...$.objectives,[p]:w}};return JSON.stringify(H)!==JSON.stringify(w)?{...B,auditLog:je($,[{eventType:"objectives-updated",entityType:"objective",entityId:p,summary:`Updated component outcomes for ${p}`,componentId:p,before:{objectiveCount:H.length},after:{objectiveCount:w.length},source:"local"}])}:B})},[je]),vn=u.useCallback(p=>{const w=ya(c.orgProfile);if(w.isValid)return!0;const $=w.errors.map(H=>`- ${H.message}`).join(`
`);return window.confirm(`${p} has CST warnings:

${$}

Continue anyway?`)},[c.orgProfile]),Be=u.useCallback(p=>{J(p)},[]),Pt=u.useCallback(()=>{if(!vn("Export JSON"))return;const w=ra(c);Zn(`adoption-assessment-${(c.orgProfile.trustName||"export").replace(/\s+/g,"_")}.json`,JSON.stringify(w,null,2),"application/json"),Be("Assessment export downloaded.")},[Be,vn,c]),Dt=u.useCallback(()=>{var p;(p=de.current)==null||p.click()},[]),qn=u.useCallback(async p=>{var B,X,ie,ce;const w=(B=p.target.files)==null?void 0:B[0];if(!w)return;const $=w.name.toLowerCase().endsWith(".json"),H=!w.type||Tc.has(w.type);if(!$||!H){Be("Import failed. Please choose a valid JSON file."),window.alert("Import failed. Please choose a valid JSON file."),p.target.value="";return}if(w.size>$c){Be("Import failed. The selected file is larger than 5 MB."),window.alert("Import failed. The selected file is larger than 5 MB."),p.target.value="";return}try{const _e=await w.text(),Oe=yt(JSON.parse(_e)),pe=()=>{h(Jn=>{const In=Cn(la(Oe,Jn));return In.orgProfile.cstId||(In.orgProfile={...In.orgProfile,cstId:$s()}),{...In,auditLog:je(In,[{eventType:"data-imported",entityType:"system",summary:`Imported assessment data from ${w.name}`,after:{fileName:w.name},source:"local"}])}}),a("dashboard"),Be("Assessment import complete. Dashboard updated.")};if(Uc(c)){pe();return}const $e=(X=Oe.orgProfile)==null?void 0:X.cstId,Fn=c.orgProfile.cstId,Nn=c.orgProfile.projectName||c.orgProfile.trustName||"your currently loaded programme",Kn=((ie=Oe.orgProfile)==null?void 0:ie.projectName)||((ce=Oe.orgProfile)==null?void 0:ce.trustName)||w.name;if($e&&$e!==Fn){if(!window.confirm(`"${Kn}" looks like a different programme than "${Nn}".

Importing will replace everything currently loaded. Continue?`)){Be("Import cancelled.");return}pe();return}if(!$e&&!window.confirm(`"${Kn}" doesn't carry a programme ID (it may predate this feature).

Click OK to compare it against "${Nn}" and merge item by item, or Cancel to load it as a different programme (replace everything).`)){pe();return}const Gn=ml(c,Oe);if(!Gn.hasConflicts){h(Jn=>{const In=Cn(pa(Jn,Oe,{}));return{...In,auditLog:je(In,[{eventType:"data-imported",entityType:"system",summary:Gn.autoMergeSummary.length?`Merged import from ${w.name} (${Gn.autoMergeSummary.join(", ")})`:`Imported ${w.name} - no changes (already up to date)`,after:{fileName:w.name},source:"local"}])}}),a("dashboard"),Be(Gn.autoMergeSummary.length?`Merged automatically: ${Gn.autoMergeSummary.join(", ")}.`:"Already up to date - nothing to import.");return}ne({file:w,parsed:Oe,report:Gn})}catch{Be("Import failed. Please verify the file contents."),window.alert("Unable to import adoption assessment. Please verify the file contents.")}finally{p.target.value=""}},[Be,je,c]),at=u.useCallback(p=>{if(!G)return;const{file:w,parsed:$}=G,H=Object.keys(p).length;h(B=>{const X=Cn(pa(B,$,p));return{...X,auditLog:je(X,[{eventType:"data-imported",entityType:"system",summary:`Merged import from ${w.name} (${H} item(s) resolved)`,after:{fileName:w.name},source:"local"}])}}),ne(null),a("dashboard"),Be("Import merged into current programme.")},[Be,je,G]),it=u.useCallback(()=>{ne(null),Be("Import cancelled.")},[Be]),zn=u.useCallback(p=>{const w=!!(p!=null&&p.replaceExisting);if(!_){window.alert("Finalise Month is available during the final week of each month.");return}if(!vn("Finalise Month"))return;const H=c.history.length>0?Ls({...c,currentDraft:c.history[c.history.length-1].data},n).currentPhase:1;if(z.currentPhase>H){const X=ed(z.currentPhase);if(!X){window.alert("Phase progression cancelled. Confidence and competence self-assessment is required when readiness phase changes.");return}const ie=[];if(n.filter(ce=>ce.phase<z.currentPhase).forEach(ce=>{ce.lenses.forEach(_e=>{var pe,$e;const Oe=(pe=c.currentDraft[ce.id])==null?void 0:pe[_e];(!Oe||Oe.score<=0||!(($e=Oe.justification)!=null&&$e.trim()))&&ie.push(`${ce.label} / ${_e}`)})}),ie.length>0){const ce=window.prompt(`You're progressing from Phase ${H} to Phase ${z.currentPhase}, but ${ie.length} item(s) are incomplete. Please provide a justification.`);if(!ce||!ce.trim()){window.alert("Phase progression cancelled. A justification is required when prior phase items are missing.");return}h(_e=>({...{..._e,phaseOverrides:{..._e.phaseOverrides,[`phase-progression-${Date.now()}`]:ce.trim()},orgProfile:{..._e.orgProfile,cst:{..._e.orgProfile.cst,phaseCapability:{..._e.orgProfile.cst.phaseCapability,[z.currentPhase]:{...X,assessedAt:new Date().toISOString(),reason:"phase-change"}}}}},auditLog:je(_e,[{eventType:"profile-updated",entityType:"profile",summary:`Updated phase capability for phase ${z.currentPhase}`,after:{phase:z.currentPhase,competence:X.competence,confidence:X.confidence,rationale:ce.trim()},source:"local"}])}))}else h(ce=>({...{...ce,orgProfile:{...ce.orgProfile,cst:{...ce.orgProfile.cst,phaseCapability:{...ce.orgProfile.cst.phaseCapability,[z.currentPhase]:{...X,assessedAt:new Date().toISOString(),reason:"phase-change"}}}}},auditLog:je(ce,[{eventType:"profile-updated",entityType:"profile",summary:`Updated phase capability for phase ${z.currentPhase}`,after:{phase:z.currentPhase,competence:X.competence,confidence:X.confidence},source:"local"}])}))}const B=ca(c.currentDraft,z.overallPct);h(X=>{const ie=w?X.history.map(_e=>_e.monthLabel===B.monthLabel?B:_e):[...X.history,B];return{...{...X,history:ie},auditLog:je(X,[{eventType:"month-finalized",entityType:"history",entityId:B.monthLabel,summary:`${w?"Re-finalized":"Finalized"} monthly snapshot for ${B.monthLabel}`,after:{monthLabel:B.monthLabel,overallPercentage:B.overallPercentage},source:"local"}])}}),a("dashboard")},[je,n,vn,_,z.currentPhase,z.overallPct,c,c.currentDraft,c.history]),ot=u.useCallback(()=>{if(!vn("Finalise Prior Month"))return;const w=fe.previousMonthLabel;if(c.history.some(X=>X.monthLabel===w)){window.alert(`${w} has already been finalised.`);return}const H=new Date;H.setMonth(H.getMonth()-1);const B=ca(c.currentDraft,z.overallPct,H);h(X=>({...{...X,history:[...X.history,B]},auditLog:je(X,[{eventType:"prior-month-finalized",entityType:"history",entityId:B.monthLabel,summary:`Finalized prior month snapshot for ${B.monthLabel}`,after:{monthLabel:B.monthLabel,overallPercentage:B.overallPercentage},source:"local"}])}))},[je,vn,z.overallPct,fe.previousMonthLabel,c.currentDraft,c.history]),rt=u.useCallback(async p=>{try{const w=await fetch(Bc[p]);if(!w.ok)throw new Error(`Failed to load sample data: ${w.status}`);const $=yt(await w.json());h(H=>{const B=Cn(la($,H));return{...B,auditLog:je(B,[{eventType:"example-data-loaded",entityType:"system",summary:"Loaded example assessment data",source:"local"}])}}),a("dashboard"),Be("Example assessment data loaded."),tn()&&g(!1)}catch(w){console.error(w),Be("Unable to load example data right now."),window.alert("Unable to load example data right now. Please try again.")}},[Be,je]),lt=u.useCallback(()=>{if(!window.confirm("Warning: this will reset all assessment data (organisation profile, scores, actions, and history) and sign you out. If you are worried, please export your data first. Continue?"))return;const w=Cn(Nt());h(w),a("dashboard"),k(Yt),sn(Ht,Yt),localStorage.removeItem(Dc),ue({}),sn(Wt,{}),me(!1),oe(!0),sn(bt,!1),N(""),sn(zt,""),T.current=!1,ln(!1),U.current=!1,R(!1),Object.keys(localStorage).filter($=>$.startsWith("nhs-digital-adoption-page-intro-seen:")).forEach($=>localStorage.removeItem($)),Be("Assessment data has been reset and you have been signed out."),tn()&&g(!1)},[Be]),Rn=u.useCallback(()=>({generatedAt:new Date().toISOString(),targetMonth:fe.previousMonthLabel,finalisedPriorMonth:fe.hasFinalisedPreviousMonth,report:ra(c)}),[fe.hasFinalisedPreviousMonth,fe.previousMonthLabel,c]),yn=u.useCallback(()=>`adoption-point-in-time-${fe.previousMonthLabel.toLowerCase().replace(/\s+/g,"-")}.json`,[fe.previousMonthLabel]),ct=u.useCallback(()=>{const p=yn();Zn(p,JSON.stringify(Rn(),null,2),"application/json")},[yn,Rn]),dt=u.useCallback(()=>{const p=en.trim()||"test@test.com",w=yn(),$=`${He}

Attachment: ${w}`,H=`mailto:${p}?subject=${encodeURIComponent(nn)}&body=${encodeURIComponent($)}`;window.location.href=H},[yn,He,nn,en]),ut=u.useCallback(()=>{const p=en.trim()||"test@test.com",w=yn(),$=JSON.stringify(Rn(),null,2),H=Xc(Jc($)),B=`----nhs-adoption-reminder-${Date.now()}`,X=[`To: ${p}`,`Subject: ${nn}`,"MIME-Version: 1.0",`Content-Type: multipart/mixed; boundary="${B}"`,"",`--${B}`,'Content-Type: text/plain; charset="UTF-8"',"Content-Transfer-Encoding: 8bit","",He,"",`--${B}`,`Content-Type: application/json; name="${w}"`,"Content-Transfer-Encoding: base64",`Content-Disposition: attachment; filename="${w}"`,"",H,`--${B}--`,""].join(`\r
`),ie=fe.previousMonthLabel.toLowerCase().replace(/\s+/g,"-");Zn(`adoption-reminder-${ie}.eml`,X,"message/rfc822")},[yn,Rn,He,nn,en,fe.previousMonthLabel]),mt=u.useCallback(()=>{ue(p=>({...p,[L]:!0}))},[L]),gt=fe.shouldNotify&&!te[L],Pn=u.useMemo(()=>c.history.find(p=>p.monthLabel===S)||null,[S,c.history]),m=_,C=m?"Review and finalise monthly snapshot":"Finalise Month unlocks from the final week of each month.",D=m?`${En} h-9 px-3 py-0 shadow-[0_3px_0_rgba(0,0,0,0.2)]`:"h-9 px-3 py-0 rounded-md border border-slate-300 bg-slate-200 text-slate-500 cursor-not-allowed",ee=m?{backgroundColor:v.themeColor}:void 0,Y=u.useMemo(()=>{const p=Pn||(c.history.length>0?c.history[c.history.length-1]:null),w=(p==null?void 0:p.overallPercentage)||0,$=z.overallPct-w;return{currentMonthLabel:S,baselineLabel:(p==null?void 0:p.monthLabel)||"No previous snapshot",baselineOverall:w,deltaOverall:$,assessedCount:z.assessedCount,totalActions:z.totalActions,completedActions:z.completedActions}},[S,Pn,z.assessedCount,z.completedActions,z.overallPct,z.totalActions,c.history]),Se=u.useMemo(()=>zi(c,z,S),[c,z,S]),Ce=u.useMemo(()=>Se.filter(p=>p.completed).length,[Se]),ke=u.useCallback(p=>{k(p)},[]),on=u.useCallback(p=>{h(w=>{const $=w.orgProfile.cst.pathway!==p.cst.pathway,H={...w,orgProfile:p},B=$?Pc(H,p.cst.pathway):H;return JSON.stringify(w.orgProfile)!==JSON.stringify(p)?{...B,auditLog:je(w,[{eventType:"profile-updated",entityType:"profile",summary:"Updated CST profile details",before:{trustName:w.orgProfile.trustName,projectName:w.orgProfile.projectName,cst:w.orgProfile.cst},after:{trustName:p.trustName,projectName:p.projectName,cst:p.cst},source:"local"},...$?[{eventType:"pathway-changed",entityType:"profile",summary:`Changed pathway from ${w.orgProfile.cst.pathway} to ${p.cst.pathway}`,before:{pathway:w.orgProfile.cst.pathway},after:{pathway:p.cst.pathway},source:"local"}]:[]])}:B})},[]),wn=p=>{let w=0,$=0,H=0,B=0;return p.lenses.forEach(X=>{var _e,Oe;const ie=(_e=c.currentDraft[p.id])==null?void 0:_e[X];ie&&ie.score>0&&(w++,(Oe=ie.justification)!=null&&Oe.trim()&&$++);const ce=(ie==null?void 0:ie.actions)||[];H+=ce.length,B+=ce.filter(pe=>os(pe.status)).length}),w===0?{icon:"◯",color:"text-blue-100",label:"Not Started"}:w>$?{icon:"⚠",color:"text-red-300",label:"Missing Justification"}:w<p.lenses.length?{icon:"◐",color:"text-amber-300",label:"In Progress"}:H<=0||B<H?{icon:"◐",color:"text-amber-300",label:"In Progress"}:{icon:"✓",color:"text-green-300",label:"Completed"}},qe=c.orgProfile.trustName||"Unconfigured Trust",Yn=c.orgProfile.projectName||"Unnamed Project";return e.jsxs("div",{className:`flex h-screen overflow-hidden ${v.darkMode?"bg-slate-900 text-slate-100":"bg-slate-50 text-slate-800"}`,children:[e.jsx("div",{role:"status","aria-live":"polite",className:"sr-only",children:ae}),e.jsx("input",{ref:de,type:"file",accept:"application/json",className:"hidden",onChange:qn}),o&&e.jsx("div",{className:"fixed inset-0 z-10 bg-slate-900/35 backdrop-blur-[1px] lg:hidden",onClick:()=>g(!1)}),e.jsxs("div",{className:`fixed inset-y-0 left-0 z-20 bg-[#005eb8] text-white flex flex-col shadow-xl overflow-hidden transition-all duration-300 ease-out lg:static lg:translate-x-0 ${o?"w-72 translate-x-0":"w-0 -translate-x-full lg:w-0"}`,style:{backgroundColor:v.themeColor},children:[e.jsxs("div",{className:"p-6 border-b border-blue-700",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold tracking-tight",children:"NHS Digital Adoption"}),e.jsxs("p",{className:"text-blue-200 text-xs mt-1 flex justify-between items-center",children:[e.jsx("span",{children:"Readiness Tracking Tool"}),e.jsx("span",{className:"opacity-80 font-medium",children:"V6.6"})]})]}),v.profileImageDataUrl?e.jsx("img",{src:v.profileImageDataUrl,alt:"Profile",className:"h-10 w-10 rounded-full border-2 border-blue-200 object-cover"}):null]}),e.jsx("button",{type:"button",onClick:()=>Ne("profile"),className:"mt-3 w-full rounded-md bg-blue-700 p-2 text-left text-xs hover:bg-blue-600",children:e.jsxs("div",{className:"font-semibold text-blue-100",children:["Objectives: ",Ce,"/",Se.length]})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto py-4",children:[e.jsxs("button",{type:"button","aria-expanded":Fe.intro,onClick:()=>Le(p=>({...p,intro:!p.intro})),className:"mb-2 flex w-full items-center justify-between px-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-300 hover:text-white",children:[e.jsx("span",{children:"Intro"}),e.jsx("span",{"aria-hidden":"true",children:Fe.intro?"−":"+"})]}),Fe.intro?e.jsx("nav",{className:"space-y-1 mb-4",children:["introduction","cm-guide","project-details"].map(p=>e.jsx("button",{ref:w=>{he.current[`view:${p}`]=w},onClick:()=>Ne(p),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${s===p?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:p==="introduction"?"Introduction":p==="project-details"?"Project Set-up":"Adoption Engine Onboarding"},p))}):null,e.jsxs("button",{type:"button","aria-expanded":Fe.overview,onClick:()=>Le(p=>({...p,overview:!p.overview})),className:"mb-2 flex w-full items-center justify-between px-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-300 hover:text-white",children:[e.jsx("span",{children:"Overview"}),e.jsx("span",{"aria-hidden":"true",children:Fe.overview?"−":"+"})]}),Fe.overview?e.jsx("nav",{className:"space-y-1 mb-4",children:["dashboard","daily-checkin","action-plan","roadmap-view"].map(p=>e.jsx("button",{ref:w=>{he.current[`view:${p}`]=w},onClick:()=>Ne(p),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${s===p?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:p==="dashboard"?"Metrics Dashboard":p==="daily-checkin"?"Daily Check-in":p==="action-plan"?"Action Tracker":"Component Delivery Timeline"},p))}):null,e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Change Components"}),e.jsx("nav",{className:"space-y-1 mb-8",children:Array.from(new Set(n.map(p=>p.phase))).map(p=>{const w=n.filter(H=>H.phase===p),$=ze[p]??!1;return e.jsxs("div",{children:[e.jsxs("button",{type:"button","aria-expanded":$,onClick:()=>Ye(H=>({...H,[p]:!$})),className:"flex w-full items-center justify-between px-4 pb-1 pt-3 text-left text-[10px] font-semibold uppercase tracking-wider text-blue-300 hover:text-white",children:[e.jsx("span",{children:hn[p]||`Phase ${p}`}),e.jsx("span",{"aria-hidden":"true",children:$?"−":"+"})]}),$?w.map(H=>{const B=s==="assessment"&&i===H.id,X=wn(H);return e.jsxs("button",{ref:ie=>{he.current[`component:${H.id}`]=ie},onClick:()=>{Ue(H.id)},className:`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${B?"bg-white font-medium text-[#005eb8]":`hover:bg-blue-800 ${X.color}`}`,children:[e.jsx("span",{className:"truncate pr-2",children:Si(H.label)}),e.jsx("span",{className:"text-xs flex-shrink-0",title:X.label,"aria-label":X.label,children:X.icon})]},H.id)}):null]},p)})}),e.jsxs("button",{type:"button","aria-expanded":Fe.tools,onClick:()=>Le(p=>({...p,tools:!p.tools})),className:"mb-2 flex w-full items-center justify-between px-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-300 hover:text-white",children:[e.jsx("span",{children:"Tools"}),e.jsx("span",{"aria-hidden":"true",children:Fe.tools?"−":"+"})]}),Fe.tools?e.jsx("nav",{className:"space-y-1 mb-8",children:["highlight-builder","force-field-analysis","compare","audit-log"].map(p=>e.jsx("button",{ref:w=>{he.current[`view:${p}`]=w},onClick:()=>Ne(p),className:`w-full flex items-center px-4 py-1 text-sm transition-colors ${s===p?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:p==="highlight-builder"?"Highlight Builder":p==="force-field-analysis"?"Force Field Analysis":p==="compare"?"Assess & Compare":"Audit Log"},p))}):null,e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider border-t border-blue-800 pt-6",children:"Account"}),e.jsx("nav",{className:"space-y-1 mb-8",children:["settings","profile"].map(p=>e.jsx("button",{ref:w=>{he.current[`view:${p}`]=w},onClick:()=>Ne(p),className:`w-full flex items-center px-4 py-1 text-sm transition-colors ${s===p?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:p==="settings"?"Settings":"Profile"},p))}),e.jsxs("div",{className:"mt-8 px-4 pb-4 border-t border-blue-800 pt-6",children:[e.jsx("div",{className:"text-[10px] font-semibold text-blue-300 uppercase tracking-wider mb-3",children:"Status Legend"}),e.jsxs("div",{className:"space-y-2 text-xs text-blue-200",children:[e.jsx("div",{children:"◯ Not Started"}),e.jsx("div",{children:"◐ In Progress"}),e.jsx("div",{children:"⚠ Missing Justification"}),e.jsx("div",{children:"✓ Completed"})]})]})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col h-screen overflow-hidden",children:[e.jsx("header",{className:`${v.darkMode?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} border-b px-3 py-2 sm:px-6 shrink-0 z-10 ${s==="introduction"?"":"shadow-sm"}`,style:{borderTop:`3px solid ${v.themeColor}`},children:e.jsxs("div",{className:"flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{className:"min-w-0 flex items-center gap-2 sm:gap-3",children:[e.jsxs("button",{onClick:()=>g(p=>!p),className:"inline-flex h-9 items-center justify-center px-3 text-white rounded-md font-semibold transition-colors shadow-sm","aria-label":o?"Collapse side navigation":"Expand side navigation",title:o?"Collapse side navigation":"Expand side navigation",style:{backgroundColor:v.themeColor},children:[e.jsx("span",{"aria-hidden":"true",className:"text-lg leading-none",children:o?"«":"»"}),e.jsx("span",{className:"sr-only",children:o?"Collapse side navigation":"Expand side navigation"})]}),e.jsx("button",{onClick:jn,disabled:Te.length===0,title:Te.length===0?"No previous in-app page":"Back to previous page",className:`h-9 text-sm px-3 rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${v.darkMode?"text-slate-100 hover:bg-slate-700":"text-slate-600 hover:bg-slate-100"}`,children:"← Back"}),e.jsx("div",{className:"min-w-0",children:e.jsxs("div",{className:"flex min-w-0 items-center gap-1 text-sm",children:[e.jsx("span",{className:`truncate font-semibold ${v.darkMode?"text-slate-100":"text-slate-700"}`,title:qe,children:qe}),e.jsx("span",{className:`${v.darkMode?"text-slate-300":"text-slate-400"}`,children:"/"}),e.jsx("span",{className:`truncate ${v.darkMode?"text-slate-100":"text-slate-600"}`,title:Yn,children:Yn})]})})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 lg:justify-end",children:[e.jsxs("span",{className:"inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-800 sm:h-9 sm:w-auto sm:rounded-full",title:"Auto-save on","aria-label":"Auto-save on",children:[e.jsx("span",{className:"inline-flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white","aria-hidden":"true",children:"✓"}),e.jsx("span",{className:"sr-only sm:not-sr-only sm:ml-1",children:"Auto-save on"})]}),e.jsx("button",{onClick:()=>oe(!0),"aria-label":"Show introduction",title:"Show introduction",className:`text-sm w-9 h-9 flex items-center justify-center bg-white text-[#425563] border border-[#768692] hover:bg-[#f0f4f5] rounded-full font-semibold transition-colors ${is}`,children:"?"}),e.jsx("button",{type:"button",onClick:()=>{window.location.hash="#/"},"aria-label":"Go to home page",title:"Go to home page",className:`${Re} h-9 w-16 px-6 py-0 inline-flex items-center justify-center`,children:"Home"}),e.jsx("button",{onClick:Dt,className:`${Re} h-9 px-3 py-0`,children:"Import"}),e.jsxs("button",{onClick:Pt,className:`${Re} h-9 px-3 py-0`,children:[e.jsx("span",{className:"sm:hidden",children:"Export"}),e.jsx("span",{className:"hidden sm:inline",children:"Export JSON"})]}),e.jsx("span",{className:"inline-flex",title:C,children:e.jsxs("button",{onClick:()=>Ae(!0),disabled:!m,"aria-label":"Finalise Month",className:D,style:ee,children:[e.jsx("span",{className:"sm:hidden",children:"Finalise"}),e.jsx("span",{className:"hidden sm:inline",children:"Finalise Month"})]})})]})]})}),e.jsxs("main",{ref:I,className:"flex-1 overflow-y-auto p-8",children:[s==="daily-checkin"&&ge?e.jsxs("section",{className:`${v.darkMode?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-6 rounded-xl border p-4 shadow-sm`,children:[e.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${v.darkMode?"text-slate-300":"text-slate-500"}`,children:"Objectives"}),e.jsxs("p",{className:`text-sm mt-1 ${v.darkMode?"text-slate-100":"text-slate-700"}`,children:[Ce,"/",Se.length," complete - based on phase readiness, ownership, cadence and team participation."]})]}),e.jsx("button",{type:"button",onClick:()=>Ie(!1),className:`${v.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-2 text-sm font-medium`,"aria-label":"Dismiss objectives card",children:"Dismiss"})]}),e.jsx("div",{className:"mt-4 grid gap-3 md:grid-cols-3",children:Se.map(p=>e.jsxs("div",{className:`rounded-lg border p-3 ${p.completed?"border-green-200 bg-green-50":v.darkMode?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${v.darkMode?"text-slate-100":"text-slate-800"}`,children:p.label}),e.jsx("span",{className:"text-xs font-bold",children:p.completed?"Done":"Not yet"})]}),e.jsx("p",{className:`mt-1 text-xs ${v.darkMode?"text-slate-300":"text-slate-600"}`,children:p.description})]},p.id))})]}):null,gt&&e.jsxs("section",{className:`${v.darkMode?"border-amber-700 bg-slate-800":"border-amber-300 bg-amber-50"} mb-8 rounded-xl border p-5 shadow-sm`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider text-amber-700",children:"First Day Reminder"}),e.jsxs("h3",{className:"text-lg font-bold text-amber-900 mt-1",children:["Submit prior month report for ",fe.previousMonthLabel]}),e.jsxs("p",{className:"text-sm text-amber-800 mt-2",children:["Please prompt the team to finalise ",fe.previousMonthLabel," if it has not already been recorded."]})]}),e.jsx("button",{type:"button",onClick:mt,className:"text-sm px-3 py-1.5 rounded-md border border-amber-300 text-amber-700 hover:bg-amber-100",children:"Dismiss"})]}),e.jsxs("div",{className:"mt-4 grid gap-3 md:grid-cols-2",children:[e.jsxs("label",{className:"text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"To"}),e.jsx("input",{type:"email",value:en,onChange:p=>pn(p.target.value),className:`${v.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2`})]}),e.jsxs("label",{className:"text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"Subject"}),e.jsx("input",{type:"text",value:nn,onChange:p=>Ee(p.target.value),className:`${v.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2`})]})]}),e.jsxs("label",{className:"mt-3 block text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"Body"}),e.jsx("textarea",{value:He,onChange:p=>cn(p.target.value),rows:9,className:`${v.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2 font-mono text-xs`})]}),e.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:ct,className:"rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-50",children:"Download Point-in-Time JSON"}),e.jsx("button",{type:"button",onClick:ut,className:"rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-50",children:"Download Email Draft with Attachment (.eml)"}),e.jsx("button",{type:"button",onClick:dt,className:"rounded-md px-3 py-2 text-sm font-semibold text-white",style:{backgroundColor:v.themeColor},children:"Open Mail Draft"}),e.jsx("button",{type:"button",onClick:ot,className:"rounded-md border border-amber-300 bg-white px-3 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100",children:"Finalise Prior Month Now"})]})]}),s==="dashboard"&&e.jsx("div",{ref:K,children:e.jsx(lo,{store:c,components:n,lenses:t,metrics:z,phaseFocusMode:v.phaseFocusMode||"auto",manualPhaseFocus:v.manualPhaseFocus,onPhaseFocusModeChange:p=>k(w=>({...w,phaseFocusMode:p,manualPhaseFocus:p==="manual"?w.manualPhaseFocus||z.currentPhase:w.manualPhaseFocus})),onManualPhaseFocusChange:p=>k(w=>({...w,phaseFocusMode:"manual",manualPhaseFocus:p})),onResetPhaseFocus:()=>k(p=>({...p,phaseFocusMode:"auto",manualPhaseFocus:z.currentPhase})),getEntry:W,onComponentClick:Ue,pathway:c.orgProfile.cst.pathway,pathwayChecks:c.pathwayChecks,onNavigate:Ne,onOpenLensInfo:b,onOpenOnboarding:()=>oe(!0),colorAccessibilityMode:v.colorAccessibilityMode||"standard",darkMode:!!v.darkMode,componentRadarVisible:Q,onComponentRadarVisibleChange:le,componentRadarSize:be,onComponentRadarSizeChange:Ge})}),s==="daily-checkin"&&e.jsx(lr,{store:c,components:n,metrics:z,getEntry:W,onComponentClick:Ue,onActionView:Ln,phaseFocusMode:v.phaseFocusMode||"auto",manualPhaseFocus:v.manualPhaseFocus,colorAccessibilityMode:v.colorAccessibilityMode||"standard",darkMode:!!v.darkMode}),s==="project-details"&&e.jsx(ir,{orgProfile:c.orgProfile,onProfileUpdate:on,components:n,lenses:t,onComponentClick:Ue,onOpenOnboarding:()=>oe(!0),onOpenGuidedSetup:()=>ln(!0),currentUserId:A,onCurrentUserChange:N,showExternalLinksSection:!!v.showExternalLinksSection,darkMode:!!v.darkMode}),s==="assessment"&&e.jsx(Ko,{store:c,components:n,activeComponentId:i,getRubricText:qc,getEntry:W,onComponentChange:Ue,onEntryUpdate:kn,onOpenLensInfo:b,onActionRemove:(p,w,$)=>{const B=W(p,w).actions.find(ie=>ie.id===$);if(!B)return;const X=window.prompt("Please provide a reason for removing this action. This will be included in the JSON export audit log.");if(!X||!X.trim()){window.alert("Removal cancelled. A reason is required to remove an action.");return}h(ie=>{var Fn;const ce=((Fn=ie.currentDraft[p])==null?void 0:Fn[w])||Tt(),_e={...ce,actions:ce.actions.filter(Nn=>Nn.id!==$).map(Fc)},Oe={...ie.suppressedAutoActions};if($.startsWith("vision-action:")||$.startsWith("case-for-change-action:")||$.startsWith("benefits-action:")||$.startsWith("sponsorship-action:")||$.startsWith("change-impact-action:")){const Nn=Gc(p,w),Kn=Oe[Nn]||[];Kn.includes($)||(Oe[Nn]=[...Kn,$])}const pe={...ie,currentDraft:{...ie.currentDraft,[p]:{...ie.currentDraft[p],[w]:_e}},suppressedAutoActions:Oe};return{...Cn(pe),auditLog:je(ie,[{eventType:"action-removed",entityType:"action",entityId:$,summary:`Removed action from ${p} / ${w}`,componentId:p,lens:w,reason:X.trim(),before:{text:B.text,status:B.status,owner:B.owner,actionType:B.actionType},source:"local"}])}})},onObjectivesUpdate:Rt,onNavigateToTool:p=>Ne(p),hideGuidedWorkflow:!!v.hideGuidedWorkflow,onHideGuidedWorkflow:()=>k(p=>({...p,hideGuidedWorkflow:!0})),showAdditionalGuidanceLinks:se,darkMode:!!v.darkMode,focusAction:On,onFocusActionHandled:()=>mn(null)}),s==="action-plan"&&e.jsx(Di,{actions:Ke,onComponentClick:Ue,onStatusChange:Bn,teamMembers:c.orgProfile.teamMembers||[],darkMode:!!v.darkMode}),s==="cm-guide"&&e.jsx(er,{onComponentClick:Ue,guidanceTarget:ha,linkOverrides:c.orgProfile.linkOverrides,showAdditionalGuidanceLinks:se,darkMode:!!v.darkMode}),s==="introduction"&&e.jsx(Cr,{darkMode:!!v.darkMode,onNavigateToProjectDetails:()=>Ne("project-details"),onNavigateToGuide:()=>Ne("cm-guide"),onNavigateToDashboard:()=>Ne("dashboard")}),s==="roadmap-view"&&e.jsx(ur,{components:n,metrics:z,getEntry:W,onComponentClick:Ue,pathway:c.orgProfile.cst.pathway,pathwayChecks:c.pathwayChecks,darkMode:!!v.darkMode}),s==="highlight-builder"&&e.jsx(xr,{store:c,metrics:z,lenses:t,components:n,getEntry:W,trustName:c.orgProfile.trustName,projectName:c.orgProfile.projectName,themeColor:v.themeColor,currentUserId:A,darkMode:!!v.darkMode}),s==="force-field-analysis"&&e.jsx(pi,{embedded:!0,onBack:()=>Ne("dashboard")}),s==="compare"&&e.jsx(xi,{embedded:!0,onBack:()=>Ne("dashboard")}),s==="audit-log"&&e.jsx(Xo,{events:c.auditLog,darkMode:!!v.darkMode}),s==="settings"&&e.jsx(Rr,{userSettings:v,onUserSettingsUpdate:ke,onLoadExampleData:rt,onResetData:lt,darkMode:!!v.darkMode}),s==="profile"&&e.jsx(_r,{orgProfile:c.orgProfile,onProfileUpdate:on,userSettings:v,onUserSettingsUpdate:ke,objectives:Se,darkMode:!!v.darkMode})]}),l?e.jsx(Nr,{lensName:l,onClose:()=>b(""),darkMode:!!v.darkMode}):null,G?e.jsx(yr,{report:G.report,myLabel:c.orgProfile.projectName||c.orgProfile.trustName||"Mine",theirLabel:((V=G.parsed.orgProfile)==null?void 0:V.projectName)||((xe=G.parsed.orgProfile)==null?void 0:xe.trustName)||G.file.name,onResolve:at,onCancel:it,darkMode:!!v.darkMode}):null,Me?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${v.darkMode?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} w-full max-w-2xl rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${v.darkMode?"text-slate-100":"text-slate-900"}`,children:"Finalise Month"}),e.jsx("button",{type:"button",onClick:()=>Ae(!1),className:`${v.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:`mt-4 space-y-3 text-sm ${v.darkMode?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("p",{children:["Finalising creates a point-in-time snapshot for"," ",e.jsx("strong",{children:Y.currentMonthLabel}),". A new reporting month starts on the 1st day of each month."]}),e.jsx("p",{children:_?"Finalise window is open (last week of the month).":"Finalise window is currently closed. You can finalise from the final week of each month."}),Pn?e.jsxs("p",{className:"rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-amber-900",children:["A snapshot already exists for ",Y.currentMonthLabel,". Re-finalise will replace this month only."]}):null]}),e.jsxs("div",{className:`${v.darkMode?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mt-4 rounded-md border p-3 text-sm`,children:[e.jsx("p",{className:`font-semibold ${v.darkMode?"text-slate-100":"text-slate-800"}`,children:"Current summary"}),e.jsxs("ul",{className:`mt-2 space-y-1 ${v.darkMode?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("li",{children:["Baseline snapshot: ",Y.baselineLabel]}),e.jsxs("li",{children:["Overall readiness: ",z.overallPct,"% (",Y.deltaOverall>=0?"+":"",Y.deltaOverall,"% vs baseline)"]}),e.jsxs("li",{children:["Components assessed: ",Y.assessedCount]}),e.jsxs("li",{children:["Actions complete: ",Y.completedActions,"/",Y.totalActions]})]})]}),e.jsxs("div",{className:"mt-5 flex flex-wrap justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:()=>Ae(!1),className:"rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Cancel"}),Pn&&_?e.jsx("button",{type:"button",onClick:()=>{Ae(!1),zn({replaceExisting:!0})},className:"rounded-md border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100",children:"Re-finalise This Month"}):null,e.jsx("button",{type:"button",onClick:()=>{Ae(!1),zn()},disabled:!_,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50",children:"Finalise Snapshot"})]})]})}):null,e.jsx(Ri,{toolkitChoice:c.orgProfile.cst.toolkitChoice,darkMode:!!v.darkMode}),e.jsx(_i,{open:O&&!d,onClose:ve,onNavigateToProjectDetails:()=>{a("project-details"),ve()},onNavigateToGuide:()=>{a("cm-guide"),ve()}}),e.jsx(ki,{open:d,initialPathway:c.orgProfile.cst.pathway,onContinue:p=>{on({...c.orgProfile,cst:{...c.orgProfile.cst,pathway:p}}),P(!1),f||(x(!0),sn(qt,!0))},darkMode:!!v.darkMode}),e.jsx(Ea,{open:Ve!==null,onCancel:()=>j(null),onContinue:p=>{Ve&&(p&&sn(et,!0),Wn(Ve.componentId,Ve.lens,Ve.actionId,Ve.status),j(null))},darkMode:!!v.darkMode}),e.jsx(ji,{open:un,orgProfile:c.orgProfile,onProfileUpdate:on,onClose:()=>ln(!1),onComplete:()=>{ln(!1),y(!0)},currentUserId:A,onCurrentUserChange:N,darkMode:!!v.darkMode}),Pe&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${v.darkMode?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-md rounded-xl border p-6 shadow-2xl`,children:[e.jsx("h3",{className:`text-lg font-semibold ${v.darkMode?"text-slate-100":"text-slate-900"}`,children:"Setup complete"}),e.jsx("p",{className:`mt-2 text-sm ${v.darkMode?"text-slate-300":"text-slate-600"}`,children:"Want a quick guide to how the tool works before you start? The Adoption Engine Onboarding page walks through it step by step."}),e.jsxs("div",{className:"mt-5 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:()=>y(!1),className:`${v.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Maybe later"}),e.jsx("button",{type:"button",onClick:()=>{a("cm-guide"),y(!1)},className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]",children:"View the guide"})]})]})}),e.jsx(Ii,{open:E,teamMembers:c.orgProfile.teamMembers||[],currentUserId:A,onCurrentUserChange:N,onClose:()=>R(!1),onNavigateToProjectDetails:()=>{a("project-details"),R(!1)},darkMode:!!v.darkMode})]})]})}export{cd as AdoptionApp,cd as default};
