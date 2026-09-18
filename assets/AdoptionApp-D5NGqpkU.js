import{r as d,j as e,a as Vt}from"./vendor-react-nTLHQtbJ.js";import{n as We,a as Kt,A as $i,b as ls,c as Gs,F as Mo}from"./ForceFieldAnalysisApp-D63jyZop.js";import{l as dt,s as st,t as Ut,d as Yt,e as Bo}from"./utils-QxQgn5_0.js";import{g as Ra,p as Fo,G as Go,d as Uo}from"./vendor-misc-XphrxPy-.js";import{g as Ho,D as Wo,p as Vo,P as Ti,a as Yn,T as qo,O as Li,C as Yo,b as Ko,i as zo}from"./moscow-C4QZk_bL.js";import{A as Us,a as Gt,U as Hs,n as nt,i as Ws,b as Jo,d as js}from"./actionModel-BGfmvkyd.js";import{A as ln,g as ks,a as Zn}from"./components-D25Uzw0S.js";import{C as ht}from"./vendor-chart--cLemJB8.js";import Xo from"./CompareApp-dv1Cx8yh.js";const Nn="nhs-digital-adoption-evidence-warning-dismissed";function Mi({open:t,onContinue:n,onCancel:s,darkMode:a=!1}){const[i,l]=d.useState(!1);return t?e.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"evidence-warning-title",className:`w-full max-w-md rounded-xl border p-6 shadow-2xl ${a?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsx("h2",{id:"evidence-warning-title",className:`text-lg font-semibold ${a?"text-slate-100":"text-slate-900"}`,children:"Evidence reminder"}),e.jsx("p",{className:`mt-3 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:"Please don't forget to attach evidence if you have it"}),e.jsxs("label",{className:`mt-4 flex items-center gap-2 text-sm ${a?"text-slate-200":"text-slate-700"}`,children:[e.jsx("input",{type:"checkbox",checked:i,onChange:o=>l(o.target.checked),className:"h-4 w-4 rounded border-slate-400"}),"Don't show this message again"]}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:s,className:We,children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>n(i),className:Kt,children:"Continue"})]})]})}):null}const Qo="nhs-digital-adoption-page-intro-seen:";function yt(t){const n=`${Qo}${t}`,[s,a]=d.useState(()=>!dt(n));return{isOpen:s,close:()=>{st(n,!0),a(!1)},reopen:()=>a(!0)}}function Nt({open:t,onClose:n,title:s,body:a,darkMode:i=!1}){return t?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45",children:e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-lg rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-900"}`,children:s}),e.jsx("button",{type:"button",onClick:n,"aria-label":"Close introduction",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${i?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:`mt-3 space-y-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:a}),e.jsx("div",{className:"mt-5 flex justify-end",children:e.jsx("button",{type:"button",onClick:n,className:Kt,children:"Got it"})})]})}):null}function jt({onClick:t,darkMode:n=!1}){return e.jsx("button",{type:"button",onClick:t,"aria-label":"Show page introduction",title:"Show page introduction",className:`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${n?"border-slate-600 text-slate-200 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"?"})}const Tn=[{title:"Explain your vision state",body:e.jsx("div",{className:"text-sm text-slate-700 space-y-2",children:e.jsx("p",{children:"Start by assessing where Vision stands today for each lens - be honest about the current state, not where you'd like it to be."})})},{title:"Assign owners to actions",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"Every action needs a named owner - without one, nothing moves and progress stalls."}),e.jsx("p",{children:"As owners complete or cancel every action at a readiness level, that lens automatically advances to the next level."})]})}];function Zo({open:t,onClose:n,darkMode:s=!1}){const[a,i]=d.useState(0);if(!t)return null;const l=Tn[a],o=a===Tn.length-1;return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`relative w-full max-w-lg rounded-xl border p-6 shadow-2xl ${s?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${s?"text-blue-300":"text-blue-600"}`,children:["Getting started · Step ",a+1," of ",Tn.length]}),e.jsx("h3",{className:`mt-3 text-lg font-semibold ${s?"text-slate-100":"text-slate-900"}`,children:l.title}),e.jsx("div",{className:`mt-3 ${s?"text-slate-300":""}`,children:l.body}),e.jsxs("div",{className:"mt-6 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:()=>i(c=>Math.max(0,c-1)),disabled:a===0,className:`rounded-md border px-4 py-2 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${s?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Back"}),o?e.jsx("button",{type:"button",onClick:n,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Got it"}):e.jsx("button",{type:"button",onClick:()=>i(c=>Math.min(Tn.length-1,c+1)),className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Next"})]})]})})}const er={"avt-v2-2026":[{id:"avt-vision-case-for-change",title:"Vision and Case for Change",pageHint:"Section: Early readiness",text:"Use a clear case for change, define outcomes, and ensure leadership sponsorship before go-live."},{id:"avt-stakeholder-engagement",title:"Stakeholder Engagement",pageHint:"Section: People and communication",text:"Map stakeholder groups, identify adoption risks, and use targeted communication plans for each audience."},{id:"avt-training-readiness",title:"Training and Capability",pageHint:"Section: Capability and learning",text:"Align learning interventions with role-based needs and verify confidence through readiness checkpoints."},{id:"avt-benefits-tracking",title:"Benefits Tracking",pageHint:"Section: Value realisation",text:"Set measurable adoption indicators and review benefit evidence at regular intervals post go-live."},{id:"avt-reinforcement-bau",title:"Reinforcement and BAU Transfer",pageHint:"Section: Sustainment",text:"Embed reinforcement actions and hand over ownership to business-as-usual teams for sustained adoption."}],"change-management-v3-2023":[{id:"cmt-leadership-alignment",title:"Leadership Alignment",pageHint:"Section: Sponsorship and governance",text:"Secure visible executive sponsorship and align governance with programme milestones and risks."},{id:"cmt-change-impact",title:"Change Impact Assessment",pageHint:"Section: Planning and risk",text:"Assess process, role, and behaviour impacts early and prioritise mitigations before deployment."},{id:"cmt-resistance-management",title:"Resistance Management",pageHint:"Section: Adoption barriers",text:"Identify likely resistance themes and define practical interventions with named owners and timelines."},{id:"cmt-comms-cadence",title:"Communication Cadence",pageHint:"Section: Communications",text:"Establish a predictable communication cadence using concise updates and feedback loops."},{id:"cmt-post-go-live-support",title:"Post Go-Live Support",pageHint:"Section: Stabilisation",text:"Provide hypercare support with clear escalation routes and transition criteria into steady state."}]};Go.workerSrc=Fo;function tr({toolkitChoice:t,darkMode:n=!1}){const[s,a]=d.useState(!1),[i,l]=d.useState(!1),[o,c]=d.useState(""),[m,u]=d.useState(1),[r,h]=d.useState("idle"),[x,p]=d.useState(""),[b,C]=d.useState([]),w=d.useMemo(()=>Ho(t),[t]),g=d.useMemo(()=>(er[t]||[]).map(v=>({id:v.id,title:v.title,pageHint:v.pageHint,text:v.text,pageNumber:null})),[t]);d.useEffect(()=>{if(!s)return;let v=!1;return(async()=>{h("loading"),p("");try{const E=await fetch(w.path);if(!E.ok)throw new Error(`HTTP ${E.status}`);const B=await E.arrayBuffer(),Y=new Uint8Array(B);let se;try{se=await Ra({data:Y}).promise}catch(A){if(se=await Ra({data:Y,disableWorker:!0}).promise,!v){const pe=A instanceof Error?A.message:String(A);p(`Worker fallback used: ${pe}`)}}const me=[];for(let A=1;A<=se.numPages;A+=1){if(v)return;const J=(await(await se.getPage(A)).getTextContent()).items.map(Ee=>"str"in Ee?Ee.str:"").join(" ").replace(/\s+/g," ").trim();J&&me.push({id:`${t}-page-${A}`,title:`Page ${A}`,pageHint:`Page ${A}`,text:J,pageNumber:A})}v||(C(me),h("ready"))}catch{v||(C([]),h("error"),p("Unable to read PDF text for indexing in this browser session."))}})(),()=>{v=!0}},[s,w.path,t]),d.useEffect(()=>{u(1),c(""),C([]),h("idle"),p("")},[t]);const k=b.length>0?b:g,$=d.useMemo(()=>{const v=Number.isFinite(m)&&m>0?Math.floor(m):1;return`${w.path}#page=${v}`},[w.path,m]),f=d.useMemo(()=>{const v=o.trim().toLowerCase();if(!v)return k.slice(0,5).map(B=>({entry:B,score:0}));const O=v.split(/\s+/).filter(Boolean),E=B=>{const Y=`${B.title} ${B.text} ${B.pageHint}`.toLowerCase();let se=0;return Y.includes(v)&&(se+=8),O.forEach(me=>{Y.includes(me)?se+=2:Y.split(/\W+/).some(pe=>pe&&(pe.includes(me)||me.includes(pe)))&&(se+=1)}),se};return k.map(B=>({entry:B,score:E(B)})).filter(B=>B.score>0).sort((B,Y)=>Y.score-B.score).slice(0,5)},[o,k])[0]||null;return d.useEffect(()=>{o.trim()&&f!=null&&f.entry.pageNumber&&u(f.entry.pageNumber)},[f,o]),e.jsxs("div",{className:"fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2","data-testid":"global-toolkit-chatbot",children:[s?e.jsxs("div",{className:`w-[380px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border shadow-2xl ${n?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant"}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("button",{type:"button",onClick:()=>l(!0),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Maximise"}),e.jsx("button",{type:"button",onClick:()=>a(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Minimise"})]})]}),e.jsxs("div",{className:`space-y-3 p-3 ${n?"bg-slate-800":"bg-slate-50"}`,children:[e.jsxs("div",{className:`max-w-[95%] rounded-2xl rounded-bl-md px-3 py-2 text-xs shadow-sm ${n?"bg-slate-700 text-slate-100":"bg-white text-slate-700"}`,children:["Showing your selected toolkit from Project Profile:",e.jsx("div",{className:"mt-1 font-semibold",children:w.label})]}),e.jsx("div",{className:`overflow-hidden rounded-lg border ${n?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:e.jsx("iframe",{title:"Selected Toolkit Preview",src:$,className:"h-[260px] w-full"})}),e.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-end gap-2",children:[e.jsx("label",{htmlFor:"toolkit-page-input",className:`text-[11px] font-semibold uppercase tracking-wider ${n?"text-slate-300":"text-slate-600"}`,children:"Go to page"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{id:"toolkit-page-input",type:"number",min:1,value:m,onChange:v=>u(Number(v.target.value)||1),className:`w-20 rounded-md border px-2 py-1.5 text-xs ${n?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})})]}),e.jsxs("div",{className:`rounded-lg border p-2 ${n?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsx("label",{htmlFor:"toolkit-fuzzy-search",className:`mb-1 block text-[11px] font-semibold uppercase tracking-wider ${n?"text-slate-300":"text-slate-600"}`,children:"Quick snippet search"}),e.jsx("input",{id:"toolkit-fuzzy-search",type:"search",value:o,onChange:v=>c(v.target.value),placeholder:"Try: sponsorship, training, resistance",className:`w-full rounded-md border px-2 py-1.5 text-xs ${n?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-400":"border-slate-300 bg-white text-slate-900 placeholder-slate-500"}`}),e.jsx("div",{className:"mt-2",children:o.trim()?f!=null&&f.entry.pageNumber?e.jsxs("button",{type:"button",onClick:()=>{u(f.entry.pageNumber),l(!0)},className:`w-full rounded-md px-2 py-1.5 text-left text-xs font-semibold ${n?"bg-slate-800 text-slate-100 hover:bg-slate-700":"bg-slate-100 text-slate-800 hover:bg-slate-200"}`,children:["Go to best match: Page ",f.entry.pageNumber]}):e.jsx("p",{className:`text-xs ${n?"text-slate-400":"text-slate-500"}`,children:"No close page match found. Try broader keywords."}):e.jsx("p",{className:`text-xs ${n?"text-slate-400":"text-slate-500"}`,children:"Enter a keyword to jump to the most relevant page."})}),e.jsx("p",{className:`mt-2 text-[11px] ${n?"text-slate-400":"text-slate-500"}`,children:r==="loading"?"Indexing toolkit text from all pages...":r==="ready"?`Search is using full-document text (${b.length} pages indexed).`:r==="error"?"Full-document indexing unavailable, using fallback snippets.":"Search will expand to all pages when the assistant opens."}),x?e.jsx("p",{className:`mt-1 text-[11px] ${n?"text-amber-300":"text-amber-700"}`,children:x}):null]}),e.jsx("a",{href:w.path,target:"_blank",rel:"noopener noreferrer",className:"inline-block text-xs font-semibold text-[#005eb8] underline",children:"Open full toolkit in new tab"})]})]}):null,i?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4",children:e.jsxs("div",{className:`relative h-[90vh] w-[95vw] overflow-hidden rounded-2xl border shadow-2xl ${n?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant · Expanded Viewer"}),e.jsx("button",{type:"button",onClick:()=>l(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Close"})]}),e.jsx("iframe",{title:"Selected Toolkit Full View",src:$,className:"h-[calc(90vh-42px)] w-full"})]})}):null,e.jsx("button",{type:"button",onClick:()=>a(v=>!v),className:"inline-flex items-center gap-2 rounded-full bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-blue-700","aria-label":"Open toolkit assistant",children:"Toolkit assistant"})]})}function Bi({showAdvancedControls:t,onToggleAdvanced:n,onReset:s,resultText:a,activeFilters:i,activeFiltersAriaLabel:l,darkMode:o=!1}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:n,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${o?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:t?"Hide advanced controls":"Show advanced controls"}),e.jsx("button",{type:"button",onClick:s,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${o?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:"Reset filters"}),e.jsx("span",{className:`text-xs ${o?"text-slate-300":"text-slate-500"}`,"aria-live":"polite",children:a})]}),i.length>0?e.jsx("div",{className:"flex flex-wrap gap-2","aria-label":l,children:i.map(c=>e.jsx("span",{className:`inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-slate-50 text-slate-700"}`,children:c},c))}):null]})}function nr({actions:t,onComponentClick:n,onStatusChange:s,teamMembers:a=[],darkMode:i=!1}){const l=yt("action-tracker"),[o,c]=d.useState(""),[m,u]=d.useState("all"),[r,h]=d.useState("all"),[x,p]=d.useState("all"),[b,C]=d.useState("all"),[w,g]=d.useState("all"),[k,$]=d.useState("component"),[G,f]=d.useState("asc"),[v,O]=d.useState(!1),E=d.useCallback(q=>{n(q)},[n]),B=d.useMemo(()=>Array.from(new Set(t.map(q=>q.component))).sort((q,re)=>q.localeCompare(re)),[t]),Y=d.useMemo(()=>Array.from(new Set([...a.map(q=>q.name),...t.map(q=>q.action.owner).filter(Boolean)])).sort((q,re)=>q.localeCompare(re)),[t,a]),se=d.useMemo(()=>Array.from(new Set(t.map(q=>q.action.status))).sort((q,re)=>q.localeCompare(re)),[t]),me=d.useMemo(()=>{const q=t.map(re=>re.action.actionType).filter(re=>!!re);return Array.from(new Set([...Us,...q])).sort((re,ce)=>re.localeCompare(ce))},[t]),A=d.useMemo(()=>{const q=t.map(re=>re.action.readinessScore).filter(re=>re!==void 0);return Array.from(new Set(q)).sort((re,ce)=>re-ce)},[t]),pe={0:"Not Started",1:"Emerging",2:"Developing",3:"Embedding",4:"Adopted",5:"Thriving"},M=d.useMemo(()=>{const q=o.trim().toLowerCase();return t.filter(ce=>m!=="all"&&ce.component!==m||r!=="all"&&ce.action.owner!==r||x!=="all"&&ce.action.status!==x||b!=="all"&&(ce.action.actionType||"")!==b||w!=="all"&&ce.action.readinessScore!==w?!1:q?[ce.component,ce.lens,ce.action.text,ce.action.actionType||"",ce.action.owner,ce.action.timescale,ce.action.status].join(" ").toLowerCase().includes(q):!0).sort((ce,j)=>{const Z=Ne=>{switch(k){case"lens":return Ne.lens;case"owner":return Ne.action.owner||"Unassigned";case"status":return Ne.action.status;case"actionType":return Ne.action.actionType||"Unassigned";case"component":default:return Ne.component}},le=Z(ce).localeCompare(Z(j));return G==="asc"?le:-le})},[b,t,m,r,w,o,k,G,x]),J=d.useMemo(()=>{const q=[];return o.trim()&&q.push(`Search: ${o.trim()}`),m!=="all"&&q.push(`Component: ${m}`),x!=="all"&&q.push(`Status: ${x}`),b!=="all"&&q.push(`Action type: ${b}`),w!=="all"&&q.push(`Readiness: ${pe[w]}`),r!=="all"&&q.push(`Owner: ${r}`),(k!=="component"||G!=="asc")&&q.push(`Sort: ${k} (${G})`),q},[b,m,r,w,o,k,G,x]),Ee=()=>{c(""),u("all"),h("all"),p("all"),C("all"),g("all"),$("component"),f("asc"),O(!1)};return e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"mb-6 flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${i?"text-slate-100":"text-slate-800"}`,children:"Action Tracker"}),e.jsx(jt,{onClick:l.reopen,darkMode:i})]}),e.jsx(Nt,{open:l.isOpen,onClose:l.close,title:"Action Tracker",darkMode:i,body:e.jsx("p",{children:"Every action across every component in one searchable, filterable, sortable table. Filter by component, owner, status, action type or readiness score, and click a row's component to jump straight to its assessment."})}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-4 mb-6 space-y-3`,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:o,onChange:q=>c(q.target.value),placeholder:"Search actions, owners, lenses...",className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-900 text-slate-100":"text-slate-900"}`}),e.jsxs("select",{value:m,onChange:q=>u(q.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All components"}),B.map(q=>e.jsx("option",{value:q,children:q},q))]}),e.jsxs("select",{value:x,onChange:q=>p(q.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All statuses"}),se.map(q=>e.jsx("option",{value:q,children:q},q))]})]}),e.jsx(Bi,{showAdvancedControls:v,onToggleAdvanced:()=>O(q=>!q),onReset:Ee,resultText:`Showing ${M.length} actions`,activeFilters:J,activeFiltersAriaLabel:"Active action tracker filters",darkMode:i}),v?e.jsxs("div",{className:`grid grid-cols-1 sm:grid-cols-5 gap-3 rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("select",{value:r,onChange:q=>h(q.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),Y.map(q=>e.jsx("option",{value:q,children:q},q))]}),e.jsxs("select",{value:b,onChange:q=>C(q.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),me.map(q=>e.jsx("option",{value:q,children:q},q))]}),e.jsxs("select",{value:w==="all"?"all":String(w),onChange:q=>g(q.target.value==="all"?"all":Number(q.target.value)),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All readiness levels"}),A.map(q=>e.jsx("option",{value:String(q),children:pe[q]},q))]}),e.jsxs("select",{value:k,onChange:q=>$(q.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"component",children:"Sort: Component"}),e.jsx("option",{value:"lens",children:"Sort: Lens"}),e.jsx("option",{value:"owner",children:"Sort: Owner"}),e.jsx("option",{value:"actionType",children:"Sort: Action Type"}),e.jsx("option",{value:"status",children:"Sort: Status"})]}),e.jsx("button",{type:"button",onClick:()=>f(q=>q==="asc"?"desc":"asc"),className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${i?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-white"}`,children:G==="asc"?"A-Z":"Z-A"})]}):null]}),e.jsx("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:M.length?e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:`min-w-full table-fixed ${i?"divide-slate-700":"divide-slate-200"} divide-y`,children:[e.jsx("thead",{className:i?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Change Component"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Lens"}),e.jsx("th",{className:`w-[22%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Action Type"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Timescale"}),e.jsx("th",{className:`w-[14%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Status"})]})}),e.jsx("tbody",{className:`${i?"bg-slate-800 divide-slate-700":"bg-white divide-slate-100"} divide-y`,children:M.map(({compId:q,component:re,lens:ce,action:j})=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:e.jsx("button",{onClick:()=>E(q),className:"text-left underline underline-offset-2 hover:text-[#005eb8] transition-colors",children:re})}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:ce}),e.jsx("td",{className:`w-[22%] px-4 py-3 text-sm whitespace-normal break-words leading-snug ${i?"text-slate-100":"text-slate-700"}`,children:j.text}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:j.actionType||"Unassigned"}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:j.owner}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:j.timescale}),e.jsx("td",{className:"w-[14%] px-4 py-3 text-sm",children:e.jsx("select",{"aria-label":`Status for ${j.text}`,value:nt(j.status),onChange:Z=>s==null?void 0:s(q,ce,j.id,Z.target.value),className:`w-full rounded-md border px-2 py-1 text-xs font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] ${Gt[nt(j.status)]} ${i?"bg-slate-900":"bg-white"}`,children:Hs.map(Z=>e.jsx("option",{value:Z,children:Z},Z))})})]},`${q}-${ce}-${j.text}`))})]})}):e.jsx("div",{className:`p-6 ${i?"text-slate-300":"text-slate-500"}`,children:t.length?"No actions match the current filters.":"No actions recorded yet."})})]})}const Je={1:"Pre-Discovery",2:"Solution Design",3:"Development",4:"Deployment / Go Live",5:"Post-Deployment"},sr={sampleRubric:[{id:"r1",label:"Leadership",max:5},{id:"r2",label:"Culture",max:5}],adoptionRubric:[{id:"a1",label:"Adoption awareness",max:100},{id:"a2",label:"Training coverage",max:100}],vision:{"Strategic Direction and Leadership":{1:"Senior leaders take initial steps to develop the vision through workshops and discussions, beginning to align on a shared future direction and its link to strategic objectives.",2:"A draft vision has been created and is being tested and refined with a wider group to check clarity, relevance and alignment to strategy.",3:"A clear vision is defined and agreed at senior level but not yet consistently communicated to all stakeholders.",4:"Senior leaders consistently communicate the vision and link it to organisational goals, priorities and decisions.",5:"Leaders speak with one voice about the vision, actively reinforcing it through actions and decisions and ensuring it is well understood across the organisation."},"People Experience and Culture":{1:"Early conversations focus on what is changing but staff involvement is limited. The vision is not yet clear or meaningful to most people.",2:"The draft vision is tested with a wider audience. Staff input is sought to check relevance and whether the vision reflects real experiences and concerns. Feedback is used to refine the vision.",3:`The vision is defined but not yet consistently communicated to all stakeholders.

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

There is a clearer plan for sustainment, although it is still being embedded and tested.`,3:"Key processes, roles, and measures are in place and being followed. The change is being maintained in practice, with issues identified and addressed as they arise.",4:"The change is embedded into day-to-day operations. Processes are consistently followed, and performance is stable, with benefits starting to be realised.",5:"The change is fully sustained as “the way we do things.” Processes are regularly reviewed and improved, and performance continues to strengthen over time."}}},Fi=["highlight-builder","force-field-analysis","compare","change-impact-assessment","stakeholder-analysis","raid-log","benefits"],Vn={"highlight-builder":{label:"Highlight Builder",matchText:"Highlight Builder"},"force-field-analysis":{label:"Force Field Analysis",matchText:"Force Field Analysis"},compare:{label:"Assess & Compare",matchText:"Assess & Compare"},"change-impact-assessment":{label:"Change Impact Assessment",matchText:"Change Impact Assessment"},"stakeholder-analysis":{label:"Stakeholder Analysis",matchText:"Stakeholder Analysis"},"raid-log":{label:"RAID Log",matchText:"RAID Log"},benefits:{label:"Benefits Register & Tracker",matchText:"Benefits Register"}};function Cs(t,n){if(!t.linkedActions.length)return"Not Started";const s=t.linkedActions.map(a=>{const i=(n[a.lens]||[]).find(l=>l.id===a.actionId);return(i==null?void 0:i.status)||"Planned"});return s.some(a=>a==="Blocked")?"Blocked":s.every(a=>a==="Completed")?"Completed":s.some(a=>a!=="Planned")?"In Progress":"Not Started"}const es={groups:["SRO","Manager","Trades Union","Programme","Project","Trainer","Clinical","Arms Length Body","CCG","GP","CSU","Staff"],subGroups:["LRH","GH","Community","CGC office"],departments:["Ward 1","Ward 2","Ward 3","Ward 4","Pharmacy","Pathology","A+E","Main Reception","Exec Offices","GP Practices","IT","HR","Comms"],relationships:["Customer","Provider","Influencer","Governance"]};function _a(){return`cst-${Date.now()}-${Math.random().toString(36).slice(2,10)}`}function ts(t){return{trustName:(t==null?void 0:t.trustName)||"",region:(t==null?void 0:t.region)||"",trustType:(t==null?void 0:t.trustType)||"",projectName:(t==null?void 0:t.projectName)||"",leadName:(t==null?void 0:t.leadName)||"",cst:{...Wo,...(t==null?void 0:t.cst)||{}},linkOverrides:t==null?void 0:t.linkOverrides,componentFurtherReading:t==null?void 0:t.componentFurtherReading,coreLinks:t==null?void 0:t.coreLinks,customComponentLinks:t==null?void 0:t.customComponentLinks,toolLinks:(t==null?void 0:t.toolLinks)??Fi.map(n=>({key:`tool-default-${n}`,tool:n,matchText:Vn[n].matchText})),externalLinksInitiated:t==null?void 0:t.externalLinksInitiated,teamMembers:(t==null?void 0:t.teamMembers)||[],stakeholderReferenceLists:(t==null?void 0:t.stakeholderReferenceLists)||es,cstId:t==null?void 0:t.cstId}}function ar(t){return t?Object.keys(t).reduce((n,s)=>{const a=t[s]||{};return n[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},n},{}):{}}function Kn(t){return{view:(t==null?void 0:t.view)||"dashboard",orgProfile:ts(t==null?void 0:t.orgProfile),currentDraft:(t==null?void 0:t.currentDraft)||{},objectives:t!=null&&t.objectives?qs(t.objectives):{},suppressedAutoActions:lr(t==null?void 0:t.suppressedAutoActions),auditLog:cr(t==null?void 0:t.auditLog),history:(t==null?void 0:t.history)||[],phaseOverrides:(t==null?void 0:t.phaseOverrides)||{},pathwayChecks:ar(t==null?void 0:t.pathwayChecks),raidItems:ir(t==null?void 0:t.raidItems),benefits:or(t==null?void 0:t.benefits),benefitTracker:rr(t==null?void 0:t.benefitTracker)}}function ir(t){return(t||[]).map(n=>({...n}))}function or(t){return(t||[]).map(n=>({...n,beneficiaryGroups:[...n.beneficiaryGroups]}))}function rr(t){return t?Object.keys(t).reduce((n,s)=>{const a=t[s];return n[s]={...a,periods:a.periods.map(i=>({...i}))},n},{}):{}}function lr(t){return t?Object.keys(t).reduce((n,s)=>(n[s]=[...t[s]||[]],n),{}):{}}function cr(t){return t?t.map(n=>({...n})):[]}function cs(){return{score:0,rationale:"",evidence:"",actions:[]}}function Gi(t){return{score:t.score,rationale:t.rationale,evidence:t.evidence,actions:t.actions.map(n=>({...n,linkedTargets:(n.linkedTargets||[]).map(s=>({componentId:s.componentId,lens:s.lens}))}))}}function Vs(t){return Object.keys(t).reduce((n,s)=>(n[s]=Object.keys(t[s]).reduce((a,i)=>(a[i]=Gi(t[s][i]),a),{}),n),{})}function dr(t){return{...t,linkedActions:t.linkedActions.map(n=>({...n}))}}function qs(t){return Object.keys(t).reduce((n,s)=>(n[s]=(t[s]||[]).map(dr),n),{})}function Ui(t,n){if(t<=0)return"Amber";const s=n-t;return s>=2?"Red":s>0?"Amber":"Green"}function mr(t,n=new Date){if(t.length===0)return{status:"Green",reason:"No outstanding actions at the current level."};const s=t.map(c=>({action:c,due:c.dueDate?new Date(c.dueDate):null})).map(({action:c,due:m})=>({action:c,due:m&&!isNaN(m.getTime())?m:null})),a=s.filter(({due:c})=>c!==null&&c<n);if(a.length>0){const c=a.length>1?` and ${a.length-1} more`:"";return{status:"Red",reason:`${a.length} action${a.length===1?" is":"s are"} overdue: "${a[0].action.text}"${c}.`}}const i=new Date(n.getTime()+14*24*60*60*1e3),l=s.filter(({due:c})=>c!==null&&c<=i);return l.length>0?{status:"Amber",reason:`${l.length} action${l.length===1?" is":"s are"} due within 14 days: "${l[0].action.text}".`}:s.filter(({due:c})=>c===null).length===t.length?{status:"Amber",reason:`${t.length} action${t.length===1?" has":"s have"} no due date set, so timeline risk can't be assessed.`}:{status:"Green",reason:"All outstanding actions are on track against their due dates."}}const Hi={Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},ur={Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"},Es={1:{vision:5,case_for_change:5,sponsorship:0,change_network:0,benefits:0,change_impact:0,risk_management:0,cm_readiness:0,stakeholder:0,resistance:0,skills_learning:0,capability:0,change_adoption:0,process_change:0,reinforcement:0,org_maturity:0,transfer_bau:0},2:{vision:5,case_for_change:5,sponsorship:2,change_network:2,benefits:3,change_impact:2,risk_management:2,cm_readiness:2,stakeholder:2,resistance:2,skills_learning:2,capability:2,change_adoption:2,process_change:3,reinforcement:2,org_maturity:2,transfer_bau:2},3:{vision:5,case_for_change:5,sponsorship:3,change_network:3,benefits:4,change_impact:3,risk_management:3,cm_readiness:3,stakeholder:3,resistance:3,skills_learning:4,capability:3,change_adoption:3,process_change:4,reinforcement:3,org_maturity:3,transfer_bau:3},4:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:4,stakeholder:5,resistance:4,skills_learning:5,capability:4,change_adoption:4,process_change:5,reinforcement:4,org_maturity:4,transfer_bau:4},5:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:5,stakeholder:5,resistance:5,skills_learning:5,capability:5,change_adoption:5,process_change:5,reinforcement:5,org_maturity:5,transfer_bau:5}};function on(t,n,s){return!n||!Es[n]?s:Es[n][t]??s}function gr(t){const n=Number((t==null?void 0:t.score)||0),s=((t==null?void 0:t.actions)||[]).some(a=>a.readinessScore===0);return n===0&&!s?1:n}function pr(t,n){const s=[];return t.lenses.forEach(a=>{const i=n(t.id,a),l=gr(i);((i==null?void 0:i.actions)||[]).forEach(o=>{(o.readinessScore??l)===l&&!Ws(o.status)&&s.push({id:o.id,text:o.text,lens:a,owner:o.owner||"",status:o.status||"",dueDate:o.dueDate||""})})}),s}function Wi(t,n,s){return t.filter(a=>a.phase===s).map(a=>{const i=pr(a,n),{status:l,reason:o}=mr(i),c=`${i.length} action${i.length===1?"":"s"} pending completion.`;return{componentId:a.id,componentLabel:a.label,phase:a.phase,gapToTarget:0,bragStatus:l,bragReason:o,summary:c,message:`${a.label}: ${c}`,outstandingActions:i}}).filter(a=>a.outstandingActions.length>0).sort((a,i)=>{const l={Red:0,Amber:1,Green:2,Blue:3};return l[a.bragStatus]!==l[i.bragStatus]?l[a.bragStatus]-l[i.bragStatus]:i.outstandingActions.length-a.outstandingActions.length})}function hr(t,n){var C;let s=0,a=0,i=0,l=0;const o=new Map;n.forEach(w=>{const g=o.get(w.phase)||{componentCount:0,assessedLenses:0,totalLenses:0,onTrackComponents:0,totalActions:0,completedActions:0};g.componentCount+=1,g.totalLenses+=w.lenses.length;let k=0;w.lenses.forEach(f=>{var B;const v=(B=t.currentDraft[w.id])==null?void 0:B[f],O=Number((v==null?void 0:v.score)||0);s+=O,k+=O,O>0&&(a+=1,g.assessedLenses+=1),((v==null?void 0:v.actions)||[]).forEach(Y=>{i+=1,g.totalActions+=1,Ws(Y.status)&&(l+=1,g.completedActions+=1)})});const $=w.lenses.length?Number((k/w.lenses.length).toFixed(1)):0,G=on(w.id,w.phase,w.target);$>=G&&(g.onTrackComponents+=1),o.set(w.phase,g)});const c=n.reduce((w,g)=>w+g.lenses.length,0),m=c*5,u=m?Math.round(s/m*100):0,r=i?Math.round(l/i*100):0,h=[...o.entries()].sort(([w],[g])=>w-g).map(([w,g])=>{const k=g.totalActions?Math.round(g.completedActions/g.totalActions*100):0,$=g.componentCount?g.onTrackComponents/g.componentCount:0,G=$>=.75&&k>=50?"Green":$>=.4||k>=25?"Amber":"Red";return{phase:w,componentCount:g.componentCount,assessedLenses:g.assessedLenses,totalLenses:g.totalLenses,onTrackComponents:g.onTrackComponents,actionCompletionPct:k,rag:G}}),x=h.find(w=>w.onTrackComponents<w.componentCount),p=(x==null?void 0:x.phase)||((C=h[h.length-1])==null?void 0:C.phase)||1,b=Wi(n,(w,g)=>{var k;return(k=t.currentDraft[w])==null?void 0:k[g]},p);return{totalCurrent:s,assessedCount:a,totalExpected:c,overallPct:u,totalActions:i,completedActions:l,actionCompletionPct:r,currentPhase:p,phaseSummaries:h,nextSteps:b}}function fr(t,n,s,a){return n.map(i=>{let l=0,o=0;return s.forEach(c=>{c.lenses.includes(i)&&(l+=Number(a(c.id,i).score||0),o+=1)}),o?Number((l/o).toFixed(1)):0})}function br(t,n){return t.map(s=>{let a=0,i=0;return n.forEach(l=>{l.lenses.includes(s)&&(a+=l.target,i+=1)}),i?Number((a/i).toFixed(1)):0})}function xr(t,n,s,a){const i=fr(t,n,s,a),l=br(n,s);return{labels:n,datasets:[{label:"Current Score",data:i,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",borderWidth:2,pointRadius:4,pointHoverRadius:6},{label:"Target",data:l,borderColor:"#00A499",backgroundColor:"rgba(0, 164, 153, 0.05)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function Is(t,n,s,a){const i=s&&Es[s]?s:null,l=c=>c<=0?"#768692":c<1.5?"#AE2521":c<2.5?"#FFB81C":c<3.5?"#005EB8":c<4.5?"#330072":"#00A499",o=t.map(c=>{if(a)return c.lenses.includes(a)?Number(n(c.id,a).score||0):null;const m=c.lenses.map(h=>n(c.id,h));if(!m.some(h=>{var x,p;return h.score>0||!!((x=h.rationale)!=null&&x.trim())||!!((p=h.evidence)!=null&&p.trim())||(h.actions||[]).length>0}))return null;const r=m.map(h=>Number(h.score||0));return r.length?Math.min(...r):null});return{labels:t.map(c=>c.label),datasets:[{label:a?`Current Readiness (${a})`:"Current Readiness (weakest lens)",data:o,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.12)",borderWidth:2,pointRadius:o.map(c=>c===null?0:4),pointHoverRadius:o.map(c=>c===null?0:6),pointBackgroundColor:o.map(c=>l(c??0)),pointBorderColor:o.map(c=>l(c??0))},{label:i?`Exemplar (Phase ${i})`:"Target Average",data:t.map(c=>on(c.id,i||void 0,c.target)),borderColor:"#94a3b8",backgroundColor:"rgba(148, 163, 184, 0.06)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function yr(t,n,s){const a=[],i=new Set,l=(o,c,m)=>{const u=`${m.id}:${o}:${c}`;if(i.has(u))return;i.add(u);const r=n(o);a.push({compId:o,component:r.label,lens:c,action:{...m}})};return Object.keys(t.currentDraft).forEach(o=>{Object.keys(t.currentDraft[o]).forEach(c=>{(s(o,c).actions||[]).forEach(u=>{(u.linkedTargets&&u.linkedTargets.length?u.linkedTargets:[{componentId:o,lens:c}]).forEach(h=>{l(h.componentId,h.lens,u)})})})}),a}function vr(t,n,s){var m;const a=((m=t.objectives)==null?void 0:m[n])||[],i=u=>u.reduce((r,h)=>(r[h]=s(n,h).actions,r),{}),l=Array.from(new Set(a.flatMap(u=>u.linkedActions.map(r=>r.lens)))),o=i(l),c=a.filter(u=>Cs(u,o)==="Completed").length;return{total:a.length,completed:c}}const Da=7*24*60*60*1e3,Sr=30*24*60*60*1e3;function wr(t,n,s){const a=[];n.phaseSummaries.forEach(b=>{const C=Je[b.phase]||`Phase ${b.phase}`;a.push({id:`phase-${b.phase}-assessed`,category:"Phase",label:`Phase ${b.phase}: ${C} - fully assessed`,description:"Every lens across this phase's components has been scored.",completed:b.totalLenses>0&&b.assessedLenses===b.totalLenses}),a.push({id:`phase-${b.phase}-on-track`,category:"Phase",label:`Phase ${b.phase}: ${C} - on track`,description:"Every component in this phase is scoring at or above its exemplar target for where the programme is now.",completed:b.componentCount>0&&b.onTrackComponents===b.componentCount})});const i=Object.values(t.currentDraft).flatMap(b=>Object.values(b).flatMap(C=>C.actions||[]));a.push({id:"all-actions-owned",category:"Ownership",label:"Every action has an owner",description:"No actions are left unassigned.",completed:i.length>0&&i.every(b=>{var C;return!!((C=b.owner)!=null&&C.trim())})});const l=Object.values(t.objectives||{}).flat();a.push({id:"all-outcomes-owned",category:"Ownership",label:"Every outcome has an owner",description:"No outcomes are left unassigned.",completed:l.length>0&&l.every(b=>{var C;return!!((C=b.owner)!=null&&C.trim())})});const o=Date.now(),c=t.auditLog||[],m=c.filter(b=>o-new Date(b.timestamp).getTime()<=Da);a.push({id:"active-this-week",category:"Cadence",label:"Active this week",description:"At least one update has been made in the last 7 days.",completed:m.length>0});const u=new Set;c.forEach(b=>{const C=Math.floor((o-new Date(b.timestamp).getTime())/Da);C>=0&&C<4&&u.add(C)}),a.push({id:"four-week-cadence",category:"Cadence",label:"Steady progress: updated every week for a month",description:`${u.size}/4 of the last 4 weeks have at least one update.`,completed:u.size>=4}),a.push({id:"month-finalised",category:"Cadence",label:"This month finalised",description:"The current month has a finalised snapshot, so progress this month is captured for the trend.",completed:(t.history||[]).some(b=>b.monthLabel===s)});const r=t.orgProfile.teamMembers||[];a.push({id:"team-roster-started",category:"Team",label:"Team roster started",description:"At least 2 team members have been added.",completed:r.length>=2});const h=c.filter(b=>o-new Date(b.timestamp).getTime()<=Sr),x=new Set(h.map(b=>b.actor));a.push({id:"multiple-contributors",category:"Team",label:"Multiple contributors this month",description:"More than one person has made updates in the last 30 days.",completed:x.size>=2});const p=new Set(i.map(b=>{var C;return(C=b.owner)==null?void 0:C.trim().toLowerCase()}).filter(b=>!!b));return a.push({id:"ownership-spread",category:"Team",label:"Ownership spread across the team",description:"Actions are owned by more than one person, not concentrated on one.",completed:p.size>=2}),a}const Cn=["Strategic Direction and Leadership","People Experience and Culture","Planning and Risk","Skills and Behaviour","Process and Sustainment"],Ys={"Strategic Direction and Leadership":{outcome:"Provide a clear and unifying direction for the change, backed by visible, empowered leadership that removes barriers, prioritises resources, and drives accountability.",whatGoodLooksLike:"Leaders speak with one voice, consistently reinforcing the vision and outcomes. Decisions are timely, transparent, and aligned to strategic priorities. Governance is purposeful, with clear roles and escalations. Everyone understands why the change is happening and how it connects to organisational goals."},"People Experience and Culture":{outcome:"Create the conditions where people feel informed, supported, safe, and motivated, creating a culture that embraces the change rather than resists it.",whatGoodLooksLike:"Staff feel involved, heard, and respected. Communication is timely, honest, and tailored to different roles. People know how the change affects them and feel psychologically safe to raise concerns. Change Champions are active, engagement is high, and belief improves over time. Behaviours begin to shift organically as trust grows."},"Planning and Risk":{outcome:"Use evidence, data, and structured analysis to plan the change effectively, anticipate impacts, manage risks, and inform decision-making throughout delivery.",whatGoodLooksLike:"Impacts are well understood and documented. Risks are identified early and mitigated proactively. Baselines and KPIs are established before implementation, with benefits tracked throughout. Pilots and readiness checks ensure no surprises. Decisions are grounded in insight, not opinion."},"Skills and Behaviour":{outcome:"Give people the capabilities, confidence, and behavioural habits they need to adopt the new ways of working consistently and sustainably.",whatGoodLooksLike:"Staff are trained, assessed, and supported in ways that match real-world workflows. New behaviours are clearly defined, reinforced by leaders, and evident in day-to-day practice. Change Champions and Super-users are active; confidence grows over time; and requests for support decrease as competence increases."},"Process and Sustainment":{outcome:"Embed the change into operational processes, ensuring it becomes the way we do things, and create mechanisms for continuous improvement and long-term stability.",whatGoodLooksLike:"Updated SOPs, workflows, and ownership structures are in place and being followed. Issues are resolved quickly. Benefits are monitored and reported regularly. Improvements continue beyond go-live, with clear BAU ownership. The change stabilises and performance gains hold or increase over time."}},Nr={vision:"Defines the future state and why the change matters.",case_for_change:"Builds a clear, credible rationale and expected benefits.",sponsorship:"Secures visible leadership ownership, governance, and decisions.",change_network:"Builds and mobilises change agents and local champions.",benefits:"Tracks baseline, benefits ownership, and value realisation.",change_impact:"Assesses who is impacted and the scale of change required.",risk_management:"Identifies, tracks, and mitigates adoption and delivery risks.",cm_readiness:"Confirms readiness, sequencing, and change planning discipline.",stakeholder:"Plans and delivers stakeholder engagement and communications.",resistance:"Anticipates and addresses resistance with practical interventions.",skills_learning:"Designs learning, support, and reinforcement for role readiness.",capability:"Builds confidence and competence to adopt new ways of working.",change_adoption:"Measures uptake and consistency of new behaviours in practice.",process_change:"Embeds workflow changes into everyday operational delivery.",reinforcement:"Sustains momentum so adoption does not decay after launch.",org_maturity:"Improves long-term organisational change capability and maturity.",transfer_bau:"Transitions ownership into BAU with clear accountability."};function Vi(t){return Nr[t]||"Component description not yet defined."}function As(t){const s=Ys[t];return s?`This lens ${s.outcome.charAt(0).toLowerCase()}${s.outcome.slice(1)}`:"This lens provides an additional perspective on how each component is landing across teams and services."}const _t=[{score:0,label:"Not Started",color:"#768692"},{score:1,label:"Emerging",color:"#AE2521"},{score:2,label:"Developing",color:"#FFB81C"},{score:3,label:"Embedding",color:"#005EB8"},{score:4,label:"Adopted",color:"#330072"},{score:5,label:"Thriving",color:"#00A499"}];function ft(t){return _t[Math.max(0,Math.min(_t.length-1,Math.round(t)))]}const Pa={small:560,medium:680,large:1e3};function $a(t,n,s,a,i){return i?"Blue":s<=0?"N/A":a<=0?"Amber":t>=n&&a<s?"Green":Ui(t,n)}const jr={"N/A":"text-slate-600 bg-slate-200",Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},Ta=["#0f766e","#0369a1","#7c3aed","#b45309","#be123c"],kr=_t;function Cr({store:t,components:n,lenses:s,metrics:a,getEntry:i,onComponentClick:l,onNavigate:o,onOpenLensInfo:c,onOpenOnboarding:m,colorAccessibilityMode:u="standard",darkMode:r=!1,phaseFocusMode:h="auto",manualPhaseFocus:x,onPhaseFocusModeChange:p,onManualPhaseFocusChange:b,onResetPhaseFocus:C,componentRadarVisible:w=!0,onComponentRadarVisibleChange:g,componentRadarSize:k="medium",onComponentRadarSizeChange:$}){const G=yt("dashboard"),[f,v]=d.useState(""),[O,E]=d.useState("all"),[B,Y]=d.useState(()=>a.currentPhase),[se,me]=d.useState("all"),[A,pe]=d.useState("score"),[M,J]=d.useState("desc"),[Ee,q]=d.useState(!1),re=d.useMemo(()=>[...new Set(n.map(T=>T.phase))].sort((T,ue)=>T-ue),[n]),ce=a.currentPhase,j=h==="manual"&&x&&re.includes(x)?x:ce,[Z,le]=d.useState(!0),Ne=d.useMemo(()=>t.history.length>0?t.history[t.history.length-1]:null,[t.history]),fe=Ne!==null?a.overallPct-Ne.overallPercentage:null,R=d.useMemo(()=>{const T=new Date;T.setHours(0,0,0,0);const ue=new Date(T);ue.setDate(T.getDate()+7);const oe=[];return n.forEach(Oe=>{Oe.lenses.forEach(De=>{i(Oe.id,De).actions.forEach(Le=>{if(!Le.dueDate||Le.status==="Completed"||Le.status==="Cancelled")return;const Ue=new Date(Le.dueDate);isNaN(Ue.getTime())||Ue<=ue&&oe.push({action:Le,componentLabel:Oe.label,componentId:Oe.id,isOverdue:Ue<T})})})}),oe.sort((Oe,De)=>new Date(Oe.action.dueDate).getTime()-new Date(De.action.dueDate).getTime())},[n,i,t.currentDraft]),z=d.useMemo(()=>{const T=f.trim().toLowerCase();return n.map(ue=>{let oe=0,Oe=!0,De=0,Le=0;ue.lenses.forEach(L=>{const X=i(ue.id,L),ee=Number(X.score||0);oe+=ee,ee!==5&&(Oe=!1);const ye=X.actions||[];De+=ye.length,Le+=ye.filter(Ce=>Ce.status==="Completed").length});const Ue=Number((oe/ue.lenses.length).toFixed(1)),N=on(ue.id,j,ue.target),W=Ue===0?"not-started":Ue>=N?"on-track":"below-target";let P=null;if(Ne){let L=0;ue.lenses.forEach(ye=>{var Ce,Re;L+=Number(((Re=(Ce=Ne.data[ue.id])==null?void 0:Ce[ye])==null?void 0:Re.score)||0)});const X=Number((L/ue.lenses.length).toFixed(1)),ee=Number((Ue-X).toFixed(1));ee!==0&&(P=ee)}return{component:ue,avgNum:Ue,exemplarTarget:N,status:W,delta:P,actionCount:De,completedActionCount:Le,allLensesLevelFive:Oe}}).filter(({component:ue,status:oe})=>O!=="all"&&oe!==O||B!=="all"&&ue.phase!==B?!1:T?ue.label.toLowerCase().includes(T):!0).sort((ue,oe)=>{let Oe=0;return A==="name"?Oe=ue.component.label.localeCompare(oe.component.label):A==="target"?Oe=ue.component.target-oe.component.target:Oe=ue.avgNum-oe.avgNum,M==="asc"?Oe:-Oe})},[n,B,j,i,Ne,f,A,M,O]),xe=d.useMemo(()=>{const T=[];return f.trim()&&T.push(`Search: ${f.trim()}`),O!=="all"&&T.push(`Status: ${O.replace("-"," ")}`),B!=="all"&&T.push(`Phase: ${B}`),(A!=="score"||M!=="desc")&&T.push(`Sort: ${A} (${M})`),T},[B,f,A,M,O]),F=()=>{v(""),E("all"),Y("all"),pe("score"),J("desc"),q(!1)},H=a.phaseSummaries.find(T=>T.phase===j),te=(H==null?void 0:H.rag)||"Red",$e=te.toLowerCase(),Ge=u==="color-blind-friendly"?{"N/A":"text-slate-700 bg-slate-200",Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"}:jr;return e.jsxs("div",{className:`adoption-dashboard max-w-6xl mx-auto ${r?"theme-dark":"theme-light"}`,children:[Z&&R.length>0&&e.jsx("div",{className:"mb-6 rounded-lg border border-red-200 bg-red-50 p-4",children:e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-sm font-semibold text-red-800 mb-2",children:[R.filter(T=>T.isOverdue).length>0&&`${R.filter(T=>T.isOverdue).length} overdue action${R.filter(T=>T.isOverdue).length>1?"s":""}`,R.filter(T=>T.isOverdue).length>0&&R.filter(T=>!T.isOverdue).length>0&&", ",R.filter(T=>!T.isOverdue).length>0&&`${R.filter(T=>!T.isOverdue).length} due within 7 days`]}),e.jsxs("ul",{className:"space-y-1.5",children:[R.slice(0,3).map(T=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`shrink-0 text-xs font-bold px-1.5 py-0.5 rounded ${T.isOverdue?"bg-red-200 text-red-800":"bg-amber-100 text-amber-800"}`,children:T.isOverdue?"Overdue":"Due soon"}),e.jsxs("span",{className:"text-xs text-slate-700",children:[e.jsx("button",{onClick:()=>l(T.componentId),className:"font-medium text-[#005eb8] hover:underline mr-1",children:T.componentLabel}),"— ",T.action.text,T.action.dueDate&&e.jsxs("span",{className:"text-slate-400 ml-1",children:["(due"," ",new Date(T.action.dueDate).toLocaleDateString("en-GB",{day:"numeric",month:"short"}),")"]})]})]},T.action.id)),R.length>3&&e.jsxs("li",{className:"text-xs text-slate-500 pl-1",children:["+ ",R.length-3," more - see the Action Tracker for the full list."]})]})]}),e.jsx("button",{onClick:()=>le(!1),className:"shrink-0 text-slate-400 hover:text-slate-600 text-xl leading-none","aria-label":"Dismiss",children:"×"})]})}),e.jsxs("div",{className:"mb-1 flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${r?"text-slate-100":"text-slate-800"}`,children:"Adoption Engine Dashboard"}),e.jsx(jt,{onClick:G.reopen,darkMode:r})]}),m?e.jsx("button",{type:"button",onClick:m,className:"rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Show introduction again"}):null]}),e.jsxs("p",{className:`text-sm mb-6 ${r?"text-slate-300":"text-slate-600"}`,children:["This tracks how ready ",t.orgProfile.projectName||"your programme"," is for adoption, based on ",n.length," change-management components, each assessed through up to"," ",s.length," lenses."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-4 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${r?"text-slate-300":"text-slate-500"}`,children:"Live Delivery Progress"}),e.jsxs("div",{className:"flex items-end gap-3",children:[e.jsxs("span",{className:"text-3xl font-bold text-[#005eb8]",children:[a.overallPct,"%"]}),fe!==null&&e.jsxs("span",{className:`text-sm font-semibold mb-1 ${fe>0?"text-green-600":fe<0?"text-red-500":"text-slate-400"}`,children:[fe>0?"↑":fe<0?"↓":"="," ",Math.abs(fe),"% vs last month"]})]}),e.jsx("div",{className:"mt-4 w-full bg-slate-100 rounded-full h-3 relative overflow-hidden",children:e.jsx("div",{className:"absolute top-0 left-0 h-full bg-[#005eb8]",style:{width:`${a.overallPct}%`}})}),e.jsx("div",{className:"flex justify-between text-xs mt-2 text-slate-400",children:e.jsx("span",{children:"Derived from current working data across all components."})})]}),e.jsxs("div",{className:`dashboard-metric-card dashboard-metric-card--phase dashboard-metric-card--${$e} rounded-lg shadow-sm p-4 border`,children:[e.jsx("h3",{className:"dashboard-metric-card__label text-sm font-medium mb-1",children:"Current Phase Focus"}),e.jsxs("div",{className:"mb-2 flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>p==null?void 0:p("auto"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${h==="auto"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Auto"}),e.jsx("button",{type:"button",onClick:()=>p==null?void 0:p("manual"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${h==="manual"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Manual"}),h==="manual"?e.jsx("select",{value:j,onChange:T=>b==null?void 0:b(Number(T.target.value)),className:"rounded-md border border-white/50 bg-white/90 px-2 py-1 text-xs font-medium text-slate-800","aria-label":"Manual phase focus",children:re.map(T=>e.jsx("option",{value:T,children:Je[T]||`Phase ${T}`},T))}):null,h==="manual"&&C?e.jsx("button",{type:"button",onClick:C,className:"rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100",children:"Reset to suggested"}):null]}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsx("span",{className:"dashboard-metric-card__headline text-3xl font-bold",children:Je[j]||`Phase ${j}`})}),e.jsxs("p",{className:"dashboard-metric-card__description text-sm mt-2",children:[te," status based on delivery progress and action completion.",h==="manual"?` Suggested phase is ${Je[ce]||`Phase ${ce}`}.`:""]})]}),e.jsxs("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-4 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${r?"text-slate-300":"text-slate-500"}`,children:"Action Completion"}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsxs("span",{className:`text-3xl font-bold ${r?"text-slate-100":"text-slate-700"}`,children:[a.actionCompletionPct,"%"]})}),e.jsxs("p",{className:`text-sm mt-2 ${r?"text-slate-300":"text-slate-500"}`,children:[a.completedActions," actions completed. Keep it up!"]})]})]}),e.jsxs("div",{className:`mb-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border px-4 py-3 ${r?"border-blue-800 bg-blue-950/40 text-slate-200":"border-blue-200 bg-blue-50 text-slate-700"}`,children:[e.jsx("p",{className:"text-sm",children:"Need a focused view of what needs attention today?"}),o?e.jsx("button",{type:"button",onClick:()=>o("daily-checkin"),className:"font-semibold text-[#005eb8] underline underline-offset-2 hover:text-[#003087]",children:"Open Daily Check-in"}):null]}),a.assessedCount===0?e.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-8 border border-slate-200 mb-8 text-center",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800",children:"Getting started"}),e.jsx("p",{className:"text-sm text-slate-600 mt-2 max-w-xl mx-auto",children:"Nothing has been assessed yet, so there's nothing to chart. Set up your Project first, then start scoring your first component to see your readiness build up here."}),e.jsxs("div",{className:"mt-4 flex items-center justify-center gap-3",children:[o?e.jsx("button",{type:"button",onClick:()=>o("project-details"),className:"rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Set up your Project"}):null,n[0]?e.jsx("button",{type:"button",onClick:()=>l(n[0].id),className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Start your first assessment"}):null]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-1 ${r?"text-slate-100":"text-slate-800"}`,children:"Phase Progress"}),e.jsxs("p",{className:`text-sm mb-4 ${r?"text-slate-300":"text-slate-500"}`,children:["Phases run 1 to 5, from early readiness at go-live through to fully embedding the change."," ",o?e.jsx("button",{type:"button",onClick:()=>o("engine-explained"),className:"font-medium text-[#005eb8] hover:underline",children:"See how the Adoption Engine works"}):null]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:a.phaseSummaries.map(T=>{const ue=T.rag==="Green"?"bg-green-100 text-green-700":T.rag==="Amber"?"bg-amber-100 text-amber-700":"bg-red-100 text-red-700",oe=T.totalLenses?Math.round(T.assessedLenses/T.totalLenses*100):0;return e.jsxs("div",{className:`rounded-md border p-4 ${r?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:`font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:Je[T.phase]||`Phase ${T.phase}`}),e.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded ${ue}`,children:T.rag})]}),e.jsxs("p",{className:`text-xs ${r?"text-slate-300":"text-slate-600"}`,children:[T.onTrackComponents,"/",T.componentCount," components on target"]}),e.jsxs("p",{className:`text-xs mt-1 ${r?"text-slate-300":"text-slate-600"}`,children:[oe,"% lens coverage, ",T.actionCompletionPct,"% actions complete"]})]},T.phase)})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("details",{className:`order-2 mb-8 overflow-hidden rounded-lg border shadow-sm group ${r?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between px-5 py-4 text-lg font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] [&::-webkit-details-marker]:hidden ${r?"text-slate-100 hover:bg-slate-700":"text-slate-800 hover:bg-slate-50"}`,children:[e.jsx("span",{children:"Readiness analytics"}),e.jsx("span",{className:"text-2xl font-normal transition-transform group-open:rotate-45",children:"+"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 border-t border-slate-200 p-5 lg:grid-cols-2 dark:border-slate-700",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h3",{className:`mb-3 text-base font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:"Readiness Trajectory"}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${r?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:t.history.length>0?e.jsx("canvas",{id:"adoption-line-chart"}):e.jsx("div",{className:"text-center text-slate-400",children:e.jsx("p",{children:"No historical data yet. Finalise your first month to generate trends."})})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:"Strategic Lenses Spread"}),c&&s[0]?e.jsx("button",{type:"button",onClick:()=>c(s[0]),className:"text-xs font-medium text-[#005eb8] hover:underline",children:"What's a lens?"}):null]}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${r?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:e.jsx("canvas",{id:"adoption-radar-chart"})}),e.jsxs("div",{className:`${r?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mt-4 rounded-md border p-3`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${r?"text-slate-300":"text-slate-600"}`,children:"Lens key"}),e.jsx("div",{className:"mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2",children:s.map((T,ue)=>e.jsxs("div",{className:`flex items-center gap-2 text-xs ${r?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full",style:{backgroundColor:Ta[ue%Ta.length]},"aria-hidden":"true"}),e.jsx("span",{children:T})]},`lens-key-${T}`))})]}),e.jsx("p",{className:`text-xs text-center mt-4 ${r?"text-slate-300":"text-slate-500"}`,children:"Visualises your current draft readiness score averaged across the 5 strategic lenses against their specific target requirements."})]})]})]}),e.jsxs("div",{className:`order-1 ${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"mb-4 flex w-full flex-col gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:`text-lg font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:"Change Component Radar"}),e.jsx("p",{className:`text-xs mt-1 ${r?"text-slate-300":"text-slate-500"}`,children:"Show or hide the change-component readiness radar, then use the overview list below to drill into delivery status."})]}),e.jsxs("div",{className:"flex w-full flex-wrap items-center justify-end gap-2",children:[w?e.jsx("div",{role:"group","aria-label":"Change component radar size",className:"flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-medium",children:["small","medium","large"].map(T=>e.jsx("button",{type:"button",onClick:()=>$==null?void 0:$(T),"aria-pressed":k===T,className:`px-3 py-2 capitalize transition-colors ${k===T?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:T},T))}):null,e.jsx("button",{type:"button",onClick:()=>g==null?void 0:g(!w),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-white",children:w?"Hide change component radar":"Show change component radar"})]})]}),w?e.jsxs("div",{className:`w-full ${r?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("div",{className:`mx-auto flex items-center justify-center rounded border p-2 ${r?"border-slate-700 bg-slate-950":"border-slate-100 bg-white"}`,style:{height:Pa[k],maxWidth:Pa[k]+120},children:e.jsx("canvas",{id:"adoption-component-radar-chart",className:"block h-full w-full"})}),e.jsx("div",{id:"radar-legend",className:`mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm ${r?"text-slate-300":"text-slate-600"}`,children:kr.map(T=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mr-2 h-3 w-3 rounded-full",style:{backgroundColor:T.color}}),e.jsx("span",{children:T.label})]},T.score))}),e.jsx("p",{className:`mt-4 text-center text-xs ${r?"text-slate-300":"text-slate-500"}`,children:"Visualises the weakest lens score for each component (a component is only as ready as its weakest lens) against the phase exemplar profile. Click a component label to jump to its assessment."})]}):null,e.jsxs("div",{className:"mt-4 w-full space-y-3",children:[e.jsxs("p",{className:`text-xs ${r?"text-slate-300":"text-slate-500"}`,children:["BRAG scoring is used for the change component overview:",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-sky-100 text-sky-800",children:"Blue"})," = every lens is level 5,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-green-100 text-green-800",children:"Green"})," = on target,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-red-100 text-red-800",children:"Red"})," = behind target dates,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-amber-100 text-amber-800",children:"Amber"})," = at risk / nearing deadline."]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:f,onChange:T=>v(T.target.value),placeholder:"Search components...",className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"}),e.jsxs("select",{value:O,onChange:T=>E(T.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All statuses"}),e.jsx("option",{value:"not-started",children:"Not started"}),e.jsx("option",{value:"below-target",children:"Below target"}),e.jsx("option",{value:"on-track",children:"On track"})]}),e.jsxs("select",{value:B,onChange:T=>Y(T.target.value==="all"?"all":Number(T.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All phases"}),re.map(T=>e.jsx("option",{value:T,children:Je[T]||`Phase ${T}`},T))]})]}),e.jsx(Bi,{showAdvancedControls:Ee,onToggleAdvanced:()=>q(T=>!T),onReset:F,resultText:`Showing ${z.length} components`,activeFilters:xe,activeFiltersAriaLabel:"Active component filters",darkMode:r}),Ee?e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-md border border-slate-200 bg-slate-50 p-3",children:[e.jsxs("select",{value:A,onChange:T=>pe(T.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"score",children:"Sort by score"}),e.jsx("option",{value:"name",children:"Sort by name"}),e.jsx("option",{value:"target",children:"Sort by target"})]}),e.jsx("button",{type:"button",onClick:()=>J(T=>T==="asc"?"desc":"asc"),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white transition-colors",children:M==="asc"?"Ascending":"Descending"})]}):null]}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:[z.map(({component:T,avgNum:ue,exemplarTarget:oe,actionCount:Oe,completedActionCount:De,delta:Le,allLensesLevelFive:Ue})=>{const N=$a(ue,oe,Oe,De,Ue),W=N==="Red"?"↓":ue>=oe?"→":ue<=0?"↑":"↗",P=N==="Red"?"text-red-500":ue>=oe?r?"text-slate-300":"text-slate-500":"text-amber-600";return e.jsxs("button",{onClick:()=>l(T.id),title:Vi(T.id),className:`flex justify-between items-center p-3 rounded-md transition-colors group text-left ${r?"bg-slate-900 border border-slate-700 hover:border-blue-400":"bg-slate-50 border border-slate-100 hover:border-blue-300"}`,children:[e.jsx("span",{className:`text-sm font-medium truncate pr-2 group-hover:text-[#005eb8] ${r?"text-slate-100":"text-slate-700"}`,children:T.label}),e.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[e.jsx("span",{className:`text-xs font-semibold ${P}`,title:ue>=oe?"On or above expected readiness for phase focus":ue<=0?"Not started: raise towards expected readiness":"Below expected readiness: continue improving","aria-label":ue>=oe?"At expected readiness":ue<=0?"Not started, increase readiness":"Below expected readiness",children:W}),Le!==null&&e.jsxs("span",{className:`text-[11px] font-semibold ${Le>0?"text-green-600":"text-red-400"}`,title:"Change versus last finalised month",children:[Le>0?"+":"",Le.toFixed(1)]}),e.jsx("span",{className:`text-xs font-bold px-2.5 py-1 rounded ${Ge[N]}`,children:N})]})]},T.id)}),!z.length&&e.jsx("div",{className:`col-span-full rounded-md border border-dashed p-6 text-sm ${r?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-500"}`,children:"No components match the current filters."})]})]})]}),e.jsxs("details",{className:`mb-8 overflow-hidden rounded-lg border shadow-sm group ${r?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between px-5 py-4 text-lg font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] [&::-webkit-details-marker]:hidden ${r?"text-slate-100 hover:bg-slate-700":"text-slate-800 hover:bg-slate-50"}`,children:[e.jsx("span",{children:"Lenses and which components they apply to"}),e.jsx("span",{className:"text-2xl font-normal transition-transform group-open:rotate-45",children:"+"})]}),e.jsxs("div",{className:"border-t border-slate-200 p-5 dark:border-slate-700",children:[e.jsxs("div",{className:"flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsx("div",{children:e.jsx("p",{className:"mt-2 text-xs text-slate-600 max-w-3xl",children:"A component is the change topic you are delivering (for example, Vision). A lens is the angle used to assess that component. For example, Vision is reviewed through Strategic Direction and Leadership and People Experience and Culture to check both leadership alignment and whether people understand and believe in the vision."})}),e.jsxs("select",{value:se,onChange:T=>me(T.target.value==="all"?"all":Number(T.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:w-40",children:[e.jsx("option",{value:"all",children:"All phases"}),re.map(T=>e.jsx("option",{value:T,children:Je[T]||`Phase ${T}`},T)),'"']})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(T=>{const ue=n.filter(oe=>oe.lenses.includes(T)).filter(oe=>se==="all"||oe.phase===se);return ue.length?e.jsxs("div",{className:`rounded-md p-4 ${r?"border border-slate-700 bg-slate-900":"border border-slate-100 bg-slate-50"}`,children:[e.jsx("h4",{className:"font-bold text-sm text-[#005eb8] mb-3",children:T}),e.jsx("p",{className:`mb-3 text-xs ${r?"text-slate-300":"text-slate-600"}`,children:As(T)}),e.jsx("ul",{className:"space-y-2",children:ue.map(oe=>{const Oe=i(oe.id,T),De=Number(Oe.score||0),Le=on(oe.id,j,oe.target),Ue=Oe.actions||[],N=$a(De,Le,Ue.length,Ue.filter(W=>W.status==="Completed").length,!1);return e.jsxs("li",{className:`text-xs flex justify-between items-center p-2 rounded ${r?"bg-slate-800 border border-slate-700":"bg-white border border-slate-100"}`,children:[e.jsx("span",{className:`truncate pr-2 font-medium ${r?"text-slate-100":"text-slate-700"}`,children:oe.label}),e.jsx("button",{onClick:()=>l(oe.id),className:`px-2.5 py-0.5 rounded font-bold ${Ge[N]}`,children:N})]},oe.id)})})]},T):null})})]})]})]}),e.jsx(Nt,{open:G.isOpen,onClose:G.close,title:"Adoption Engine Dashboard",darkMode:r,body:e.jsx("p",{children:"This tracks how ready your programme is for adoption, based on your change-management components, each assessed through several lenses. Use the filters and sort controls to focus on what needs attention, and click a component to open its assessment."})})]})}const qt={label:"Change Management Toolkit",url:"https://future.nhs.uk/CMN/view?objectId=129489733"};function Ks(t,n){var o,c,m,u,r;if(!n)return t;const s=(o=n.links)==null?void 0:o[t.key],a=(c=s==null?void 0:s.url)==null?void 0:c.trim(),i=((m=s==null?void 0:s.label)==null?void 0:m.trim())||t.label;return a?{...t,label:i,url:Ut(a)}:((s==null?void 0:s.fallback)??"default")==="base"&&((r=(u=n.base)==null?void 0:u.url)!=null&&r.trim())?{...t,label:i,url:Ut(n.base.url.trim())}:{...t,label:i}}const Er="nhs-guidance-workstreams",qi={vision:["Vision"],case_for_change:["Case for Change"],sponsorship:["Senior Sponsorship & Governance"],change_network:["Change Network"],benefits:["Benefits"],change_impact:["Change Impact"],risk_management:["Risk Management"],cm_readiness:["Change Management Readiness & Planning"],stakeholder:["Stakeholder Engagement & Comms"],resistance:["Resistance Management"],skills_learning:["Skills/Learning"],capability:["Change Management Capability"],change_adoption:["Reinforcement"],process_change:["Process change"],reinforcement:["Reinforcement"],org_maturity:["Change Management Capability"],transfer_bau:["Reinforcement"]},Q=(t,n,s,a)=>({key:`fnhs_${t}`,label:n,url:`https://future.nhs.uk/CMN/view?objectId=${t}`,type:s,...a?{description:a}:{}}),Yi=[Q("44704752","FuturesNHS Change Management Network","core","The wider NHS community for change management practice, discussion and shared resources.")],an={Vision:{inputs:[Q("37515792","Vision for Change","core","Supports development and communication of a clear future vision."),Q("34039056","Mind Map","core","Captures and organises stakeholder viewpoints when developing the vision."),Q("34039088","Rich Picture and Storytelling","core","Creates a visual and narrative representation of the desired future state."),Q("34039184","Sinek's Golden Circle","core","Structures the vision around why, how and what."),Q("34037808","Systems Thinking","core","Supports consideration of the wider system when defining the future state."),Q("34018288","Stakeholder Analysis Tool","core","Identifies the stakeholders who should help shape and validate the vision."),Q("34039024","Sponsor Coalition Map","additional","Identifies leaders and visible supporters who can reinforce the vision."),Q("69484112","SHIFT: A Strategic Change Management Approach","additional","Provides an additional strategic approach for shaping and aligning change.")]},"Case for Change":{inputs:[Q("44287088","Case for Change","core","Supports creation of a clear and compelling rationale for change."),Q("42608592","Beckhard and Harris' Change Formula","core","Tests whether the conditions needed to overcome the perceived cost of change are present."),Q("34037360","Force Field Analysis","core","Identifies the forces driving and restraining the change."),Q("34037232","Benefits Workshop","core","Brings stakeholders together to identify and develop the benefits of change."),Q("34040176","Benefits Map","core","Links benefits, outcomes, enabling changes and strategic objectives."),Q("45000208","What's in it for me? Benefits","core","Defines relevant benefits for each stakeholder group."),Q("69191376","5 Whys Technique","additional","Supports root-cause exploration of the problem the change is intended to address."),Q("34037712","SWOT Analysis","additional","Examines strengths, weaknesses, opportunities and threats relating to the change."),Q("34037072","PESTLE Analysis","additional","Examines external factors influencing the need for change."),Q("34037680","Porter's Five Forces","additional","Supports analysis of wider environmental and market pressures."),Q("34037040","GAP Analysis","additional","Compares current and future states and identifies what needs to change."),Q("42608624","AIDA Model","additional","Provides a structure for moving audiences from awareness towards action."),Q("34037744","Kotter's 8 Steps","additional","Provides an additional framework for creating urgency and mobilising change."),Q("34039024","Sponsor Coalition Map","additional","Identifies leaders who need to champion the case for change.")],deliverables:[Q("44287088","A clear case for change communicated to all stakeholders","core")]},"Senior Sponsorship & Governance":{inputs:[Q("34039024","Sponsor Coalition Map","core","Identifies senior leaders and visible supporters required to drive the change."),Q("34037520","What Makes a Good Sponsor?","core","Supports sponsors to understand the behaviours expected of them."),Q("34040240","RACI/RASCI Matrix","core","Clarifies governance roles, responsibilities and accountability."),Q("34037552","Change Network","core","Connects senior sponsorship with change agents and champions."),Q("42042672","Change Management Strategy","core","Defines the strategic approach and leadership responsibilities for change."),Q("34018288","Stakeholder Analysis Tool","additional","Identifies influential stakeholders and required sponsor coverage."),Q("34038032","Change Management Plan","additional","Translates governance and sponsorship responsibilities into planned activity."),Q("69484112","SHIFT: A Strategic Change Management Approach","additional","Provides an additional strategic structure for leadership of change.")]},"Change Network":{inputs:[Q("34037552","Change Network","core","Supports formation and operation of a network of change agents and champions."),Q("34039024","Sponsor Coalition Map","core","Connects the change network with visible senior sponsors."),Q("34018288","Stakeholder Analysis Tool","core","Helps ensure the network represents the right stakeholder groups."),Q("34037520","What Makes a Good Sponsor?","core","Clarifies how sponsors should support and use the network."),Q("34039408","Feedback Cycle","additional","Supports two-way feedback between the network, programme and affected staff."),Q("69501968","Psychological Safety","additional","Supports an environment in which network members can raise concerns safely."),Q("34040240","RACI/RASCI Matrix","additional","Clarifies the roles of sponsors, change agents and change champions."),Q("34038672","User Surveys","additional","Provides additional evidence for themes surfaced by the change network.")]},Benefits:{inputs:[Q("34037232","Benefits Workshop","core","Identifies and develops benefits with relevant stakeholders."),Q("34040176","Benefits Map","core","Links benefits to outcomes, enabling changes and strategic objectives."),Q("34030736","Benefits Realisation Plan","core","Defines baselines, measures, owners and arrangements for tracking benefits."),Q("45000208","What's in it for me? Benefits","core","Translates organisational benefits into relevant stakeholder benefits."),Q("179918149","What's in a name?","additional","The art of writing an appropriate benefit name and description"),Q("69511824","Measuring Digital Adoption","core","Supports definition of adoption measures linked to intended benefits."),Q("44287088","Case for Change","additional","Connects the benefits to the rationale and intended outcomes of the change."),Q("34038608","Creating Short-Term Wins","additional","Uses early progress to demonstrate value and maintain momentum."),Q("34038864","Celebrate Successes","additional","Recognises evidence that benefits and positive outcomes are emerging."),Q("34038544","End of Pilot Report","additional","Captures pilot evidence relevant to benefits and wider rollout."),Q("34038672","User Surveys","additional","Collects qualitative evidence about benefits and user experience.")]},"Change Impact":{inputs:[Q("34037424","Change Impact Assessment","core","Assesses impacts on people, teams, processes and business units."),Q("34039344","Impact Analysis","core","Supports structured analysis of intended and unintended impacts."),Q("34037968","Heat Map","core","Provides a visual view of impact across business areas."),Q("34037040","GAP Analysis","core","Identifies differences between current and future states."),Q("34040208","McKinsey 7S Model","core","Examines alignment across interdependent organisational factors."),Q("34037840","Process Mapping","additional","Identifies impacts created by changes between current and future processes."),Q("34037392","Change Management Capability Review","additional","Assesses the capability implications of the future state."),Q("34038000","Proof of Concept","additional","Provides early evidence about likely organisational and user impacts."),Q("34037488","Training Impact Assessment","additional","Identifies high-level learning resource and cost implications.")]},"Risk Management":{inputs:[Q("34037776","Risk Assessment","core","Identifies and assesses risks, issues and barriers to successful adoption."),Q("34038640","Sustainability Risk Assessment","core","Identifies risks that could prevent the change from being sustained."),Q("34037424","Change Impact Assessment","core","Provides evidence about impact-related risks and mitigation needs."),Q("34037360","Force Field Analysis","core","Identifies forces that may support or obstruct the change."),Q("34030736","Benefits Realisation Plan","additional","Helps identify and monitor risks to benefit realisation."),Q("34037968","Heat Map","additional","Highlights areas where high impact and low readiness may create risk."),Q("34307760","Resistance Management Plan","additional","Defines actions for managing resistance-related adoption risks."),Q("69191376","5 Whys Technique","additional","Supports investigation of the root causes of risks and recurring issues.")]},"Change Management Readiness & Planning":{inputs:[Q("42042672","Change Management Strategy","core","Sets the overall direction and approach for managing the change."),Q("34038032","Change Management Plan","core","Defines activities, ownership and timescales required to build readiness."),Q("34037040","GAP Analysis","core","Identifies the work required to move to the future state."),Q("34037424","Change Impact Assessment","core","Provides impact and readiness evidence for change planning."),Q("34038192","Change Implementation Plan","core","Defines implementation tasks, milestones and responsibilities."),Q("34038576","Go Live Business Readiness Assessment","core","Assesses people, process and support readiness before go-live.")]}},Ir={},Ar={Default:an,Product:Ir};function Or(){if(typeof window>"u")return[];try{const t=window.localStorage.getItem(Er);if(!t)return[];const n=JSON.parse(t);return Array.isArray(n)?n.filter(s=>s&&typeof s.name=="string"&&s.name.trim()):[]}catch{return[]}}function Rr(t){const n=Or().find(s=>s.name===t);return n?n.map:Ar[t]||an}function _r(t,n,s,a,i=!0){var m,u,r;const l=((u=(m=Rr(t))==null?void 0:m[n])==null?void 0:u[s])||[],o=l.length>0?l:((r=an==null?void 0:an[n])==null?void 0:r[s])||[],c=i?o:o.filter(h=>h.type==="core");return a?c.map(h=>Ks(h,a)):c}function zn(t,n,s,a,i=!0){const l=qi[n]||[],o=new Map;return l.forEach(c=>{_r(t,c,s,a,i).forEach(m=>{const u=`${m.label}::${m.url}`;o.has(u)||o.set(u,m)})}),[...o.values()]}const La={"not started":0,emerging:1,developing:2,embedding:3,adopted:4,thriving:5};function jn(t){return t.trim().replace(/\s+/g," ").toLowerCase()}function Ki(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function Ma(t){return t.trim().toLowerCase()}function Dr(t){return t.replace(/&/g,"and").replace(/\s+/g," ").trim()}function Pr(t){return typeof t=="string"&&Us.includes(t)}function Zt(t){if(!t)return null;try{return JSON.parse(t)}catch{return null}}function zs(t,n,s,a){let i=0,l=!1,o=!1;for(let c=a;c<t.length;c+=1){const m=t[c];if(l){if(o){o=!1;continue}if(m==="\\"){o=!0;continue}m==='"'&&(l=!1);continue}if(m==='"'){l=!0;continue}if(m===n){i+=1;continue}if(m===s&&(i-=1,i===0))return t.slice(a,c+1)}return null}function $r(t,n=0){const s=t.indexOf("{",n);return s<0?null:zs(t,"{","}",s)}function zi(t,n=0){const s=t.indexOf("[",n);return s<0?null:zs(t,"[","]",s)}function Ba(t,n){const s=t.toLowerCase().indexOf(n.toLowerCase());return s<0?null:zi(t,s)}function Tr(t,n){const s=t.toLowerCase().indexOf(n.toLowerCase());return s<0?null:$r(t,s)}function Lr(t){const n=[];for(let s=0;s<t.length;s+=1){if(t[s]!=="{")continue;const a=zs(t,"{","}",s);if(!a)continue;const i=Zt(a);i&&typeof i=="object"&&!Array.isArray(i)&&n.push(i),s+=a.length-1}return n}function Ln(t){return Array.isArray(t)?t.filter(n=>n&&typeof n=="object").map(n=>n).filter(n=>typeof n.id=="string"&&typeof n.name=="string"):[]}function yn(t){return Array.isArray(t)?t.filter(n=>n&&typeof n=="object").map(n=>n).filter(n=>typeof n.fromStatus=="string"&&typeof n.toStatus=="string"&&typeof n.lens=="string"&&typeof n.action=="string"):[]}function Mr(t){const n=Zt(t);let s=[],a=[];if(n&&typeof n=="object"&&!Array.isArray(n)){const l=n;s=Ln(l.outcomes),Array.isArray(l.actions)?a=yn(l.actions):l.actions&&typeof l.actions=="object"&&(a=yn(l.actions.actions))}else Array.isArray(n)&&(s=Ln(n));if(s.length||(s=Ln(Zt(Ba(t,"outcomes")))),s.length||(s=Ln(Zt(zi(t)))),a.length||(a=yn(Zt(Ba(t,"actions")))),!a.length){const l=Zt(Tr(t,"actions"));a=yn(l==null?void 0:l.actions)}const i=Lr(t);return a.length||(a=yn(i)),s.length||(s=i.filter(l=>l&&typeof l=="object").map(l=>l).filter(l=>typeof l.id=="string"&&typeof l.name=="string"&&/_o\d+$/i.test(l.id)&&!("fromStatus"in l))),{outcomes:s,actions:a}}function Fa(t,n){const a=t.trim().toLowerCase().match(/o\d+$/);return a?`${n}:${a[0]}`:`${n}:${Ki(t)}`}function Br(t,n){return`${t}:${n}`}function Fr(t){return t.includes(":auto-objective:")||t.startsWith("pathway:auto-objective:")}function Gr(t){return{...t,actions:(t.actions||[]).map(n=>({...n,linkedTargets:(n.linkedTargets||[]).map(s=>({...s}))}))}}function Os(){return{score:0,rationale:"",evidence:"",actions:[]}}function Js(t,n){return`${t}:${Ki(n.lens)}:${n.fromScore}-${n.toScore}:${n.actionIndex}`}function Ur(t,n,s){return{id:Js(n,s),text:s.actionText,actionType:s.actionType,owner:"",timescale:"",status:"Planned",phase:1,startDate:"",dueDate:"",notes:"",evidence:"",readinessScore:s.fromScore,linkedTargets:[{componentId:t,lens:s.lens}],priority:s.priority,needsRework:s.needsRework}}function Hr(t,n){return{id:t.id,text:t.text,owner:(n==null?void 0:n.owner)||"",timescale:(n==null?void 0:n.timescale)||"",notes:(n==null?void 0:n.notes)||"",evidence:(n==null?void 0:n.evidence)||"",linkedActions:[]}}function Wr(t,n,s){const a=Js(n,s),i=(t.actions||[]).find(c=>c.id===a);if(i)return i.id;const l=jn(s.actionText),o=(t.actions||[]).find(c=>jn(c.text||"")===l);return(o==null?void 0:o.id)||null}function Qe(t,n){const{outcomes:s,actions:a}=Mr(t),i=s.map(c=>({id:Fa(String(c.id),n.outcomePrefix),text:String(c.name).trim()})),l=new Map;return{templates:a.reduce((c,m)=>{var k;const u=La[Ma(String(m.fromStatus||""))],r=La[Ma(String(m.toStatus||""))];if(u===void 0||r===void 0)return c;const h=Dr(String(m.lens||"")),x=((k=n.lensAliases)==null?void 0:k[h])||h,{text:p,priority:b,needsRework:C}=Vo(String(m.action||""));if(!x||!p)return c;const w=`${x}:${u}-${r}`,g=l.get(w)||0;return l.set(w,g+1),c.push({lens:x,fromScore:u,toScore:r,actionIndex:g,actionText:p,actionType:Pr(m.category)?m.category:void 0,outcomeIds:(m.outcomeIds||[]).map($=>Fa(String($),n.outcomePrefix)),priority:b,needsRework:C}),c},[]),outcomes:(i.length?i:n.fallbackOutcomes).slice(0,3)}}function Ze(t,n,s){const a={...t.currentDraft||{}},i={...t.objectives||{}},l=a[n.componentId]||{},o=`${n.outcomePrefix}:`,c=(i[n.componentId]||[]).filter(x=>x.id.startsWith(o)),m=(i[n.componentId]||[]).filter(x=>!x.id.startsWith(o)&&!Fr(x.id)),u=c.reduce((x,p)=>(x[p.id]=p,x),{}),r=Object.keys(l).reduce((x,p)=>(x[p]=Gr(l[p]||Os()),x),{});s.templates.forEach(x=>{var f;const p=r[x.lens]||Os(),b=new Set((p.actions||[]).map(v=>jn(v.text||""))),C=Js(n.actionPrefix,x),w=Br(n.componentId,x.lens),g=new Set(((f=t.suppressedAutoActions)==null?void 0:f[w])||[]),k=(p.actions||[]).some(v=>v.id===C),$=jn(x.actionText),G=g.has(C);p.actions=(p.actions||[]).map(v=>!(v.id===C||jn(v.text||"")===$)||v.readinessScore===x.fromScore&&v.priority===x.priority&&v.needsRework===x.needsRework?v:{...v,readinessScore:x.fromScore,priority:x.priority,needsRework:x.needsRework}),!k&&!b.has($)&&!G&&(p.actions=[...p.actions||[],Ur(n.componentId,n.actionPrefix,x)]),r[x.lens]=p});const h=s.outcomes.map(x=>{const p=[];return s.templates.forEach(b=>{if(!b.outcomeIds.includes(x.id))return;const C=r[b.lens];if(!C)return;const w=Wr(C,n.actionPrefix,b);w&&p.push({lens:b.lens,actionId:w})}),{...Hr(x,u[x.id]),linkedActions:p}});return{...t,currentDraft:{...a,[n.componentId]:r},objectives:{...i,[n.componentId]:[...m,...h]}}}function et(t,n){var c,m;const s=`${n.outcomePrefix}:`,a=`${n.actionPrefix}:`,i=(((c=t.objectives)==null?void 0:c[n.componentId])||[]).filter(u=>!u.id.startsWith(s)),l=((m=t.currentDraft)==null?void 0:m[n.componentId])||{},o=Object.keys(l).reduce((u,r)=>{const h=l[r]||Os();return u[r]={...h,actions:(h.actions||[]).filter(x=>!x.id.startsWith(a))},u},{});return{...t,currentDraft:{...t.currentDraft,[n.componentId]:o},objectives:{...t.objectives,[n.componentId]:i}}}function Ga(t,n){if(n>=5)return null;const s=(t.actions||[]).filter(i=>i.readinessScore===n);return s.length===0?null:s.every(i=>Jo(i.status))?{currentScore:n,nextScore:n+1}:null}const Jn={0:"Not Started: Activity has not yet commenced or been defined.",1:"Emerging: Activity is fragmented, uncoordinated, and reactive. No standardised approach.",2:"Developing: Basic processes exist but are inconsistently applied. Reliance on heroic individual efforts.",3:"Embedding: Standardised approach defined and applied across the project. Leadership is engaged.",4:"Adopted: Behaviours are changing. Metrics are actively monitored to drive adoption.",5:"Thriving: Change is fully embedded as business as usual. Continuous improvement is evident."},Ua=["Pre-Emergent","Emerging","Developing","Maturing","Embedding","Thriving"],Vr=["#768692","#AE2521","#FFB81C","#005EB8","#330072","#00A499"];function Rs(t){return Ua[Math.round(t)]||Ua[0]}function qr({onClose:t,darkMode:n=!1}){return e.jsx("div",{id:"readiness-score-info-modal",className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:s=>{s.target===s.currentTarget&&t()},children:e.jsxs("div",{className:`${n?"bg-slate-800 border-slate-700":"bg-white"} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border`,children:[e.jsxs("div",{className:`${n?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} sticky top-0 border-b p-6 flex items-center justify-between`,children:[e.jsx("h2",{className:`text-2xl font-bold ${n?"text-slate-100":"text-slate-800"}`,children:"Readiness score levels"}),e.jsx("button",{onClick:t,className:`${n?"text-slate-300 hover:text-slate-100":"text-slate-500 hover:text-slate-700"}`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsxs("div",{className:`p-6 space-y-3 text-sm ${n?"text-slate-200":"text-slate-700"}`,children:[e.jsx("p",{children:"Every lens is scored on the same 0-5 readiness scale. Here's what each level generally means - each lens on a component page also shows guidance written specifically for that lens at its current level. A lens advances automatically once every action at its current level is marked Completed or Cancelled."}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:Object.entries(Jn).map(([s,a])=>{const[i,l]=a.split(/:\s(.+)/);return e.jsxs("div",{className:`rounded-md border p-2.5 ${n?"border-slate-700":""}`,style:{borderLeftWidth:"4px",borderLeftColor:Vr[Number(s)]},children:[e.jsxs("p",{className:`text-xs font-bold ${n?"text-slate-100":"text-slate-800"}`,children:[s," - ",i]}),e.jsx("p",{className:`mt-0.5 text-xs ${n?"text-slate-300":"text-slate-600"}`,children:l})]},s)})})]})]})})}const Ha=["#005eb8","#00a499","#ffb81c","#ae2521","#330072","#41b6e6"],Yr=36;function Kr(){const t=d.useMemo(()=>Array.from({length:Yr},(n,s)=>({id:s,left:Math.random()*100,color:Ha[s%Ha.length],delay:Math.random()*.25,duration:1.4+Math.random()*.9,drift:(Math.random()-.5)*160,rotation:Math.random()*360})),[]);return e.jsxs("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 z-[59] h-40 overflow-hidden","aria-hidden":"true",children:[e.jsx("style",{children:`
        @keyframes toast-confetti-fall {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          100% { transform: translate(var(--drift), -160px) rotate(var(--spin)); opacity: 0; }
        }
      `}),t.map(n=>e.jsx("span",{style:{position:"absolute",left:`${n.left}%`,bottom:0,width:"8px",height:"8px",backgroundColor:n.color,animation:`toast-confetti-fall ${n.duration}s ease-out ${n.delay}s forwards`,"--drift":`${n.drift}px`,"--spin":`${n.rotation}deg`}},n.id))]})}function Ji({message:t,onDismiss:n,durationMs:s,variant:a="success",celebrate:i=!1}){d.useEffect(()=>{if(!s)return;const o=window.setTimeout(n,s);return()=>window.clearTimeout(o)},[t,s,n]);const l=a==="success"?"bg-green-600 text-white":"bg-slate-800 text-white";return e.jsxs(e.Fragment,{children:[i?e.jsx(Kr,{}):null,e.jsx("div",{className:"fixed bottom-6 right-6 z-[60] flex justify-end",role:"status","aria-live":"polite",children:e.jsxs("div",{className:`flex items-center gap-3 rounded-lg px-4 py-3 shadow-2xl ${l}`,children:[e.jsx("span",{className:"text-sm font-medium",children:t}),e.jsx("button",{type:"button",onClick:n,className:"text-white/80 hover:text-white","aria-label":"Dismiss",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})})]})}const Wa=["#005eb8","#00a499","#7c3aed","#b45309","#be123c","#0369a1","#0f766e","#4d7c0f"];function zr(t){let n=0;for(let s=0;s<t.length;s+=1)n=(n<<5)-n+t.charCodeAt(s),n|=0;return Math.abs(n)}function Jr(t){const n=t.trim().split(/\s+/).filter(Boolean);return n.length?n.length===1?n[0].slice(0,2).toUpperCase():`${n[0][0]}${n[n.length-1][0]}`.toUpperCase():"?"}function Xi({name:t,darkMode:n=!1,imageDataUrl:s}){const a=t.trim();if(!a)return e.jsx("span",{title:"Unassigned","aria-label":"Unassigned",className:`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold ${n?"border-slate-600 text-slate-500":"border-slate-300 text-slate-400"}`,children:"?"});if(s)return e.jsx("img",{src:s,alt:a,title:a,className:"h-7 w-7 shrink-0 rounded-full border border-slate-300 object-cover"});const i=Wa[zr(a)%Wa.length];return e.jsx("span",{title:a,"aria-label":a,className:"inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white",style:{backgroundColor:i},children:Jr(a)})}const Xr=7;function Qr(t,n,s,a=new Date){if(!n&&!s)return"grey";const i=nt(t);if(i==="Completed"||i==="Cancelled")return"green";const l=js(t,n,s,a);if(l==="Overdue completion")return"red";if(l==="Overdue start")return"amber";if(s){const o=new Date(s);if(!isNaN(o.getTime())){const c=(o.getTime()-a.getTime())/864e5;if(c>=0&&c<=Xr)return"amber"}}return"green"}const Zr={grey:"text-slate-300",green:"text-green-600",amber:"text-amber-500",red:"text-red-600"},el={grey:"No dates set",green:"On track",amber:"Due soon",red:"Overdue"},tl=new Intl.DateTimeFormat("en-GB",{day:"2-digit",month:"short",year:"2-digit",timeZone:"GMT"});function Va(t){if(!t)return"not set";const n=new Date(t);return isNaN(n.getTime())?"not set":`GMT - ${tl.format(n)}`}function nl({status:t,startDate:n,dueDate:s}){const a=Qr(t,n,s),i=`${el[a]} · Start: ${Va(n)} · End: ${Va(s)}`;return e.jsx("span",{title:i,"aria-label":i,className:`inline-flex items-center ${Zr[a]}`,children:e.jsxs("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",strokeWidth:2}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 7v5l3 3"})]})})}const sl=`{
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
`,Qi="custom-outcome:";function al(t){return t.startsWith(Qi)}const qa=Hs.filter(t=>t!=="Overdue start"&&t!=="Overdue completion"),il=_t.map(t=>t.score),ol=Object.fromEntries(_t.map(t=>[t.score,t.label])),Ya={"Not Started":"bg-slate-100 text-slate-700 border-slate-200","In Progress":"bg-blue-100 text-blue-800 border-blue-200",Blocked:"bg-amber-100 text-amber-800 border-amber-200",Completed:"bg-green-100 text-green-800 border-green-200"},Ka=JSON.parse(sl),Zi=4;function rl(t,n){return ln.reduce((s,a)=>{const i=zn("Default",a.id,"inputs",void 0,t),l=zn("Default",a.id,"deliverables",void 0,t),o=new Map;return[...i,...l].forEach(c=>{var m,u;if(c.label&&c.label.trim().length>=Zi){const r=n?Ks(c,n).url:c.url,h=(u=(m=n==null?void 0:n.links)==null?void 0:m[c.key])==null?void 0:u.matchAliases;o.set(c.label.toLowerCase(),{...c,url:r,matchAliases:h})}}),s[a.id]=[...o.values()],s},{})}function ll(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function eo(t){const n=new Set([t]);return new RegExp("(?<!s)s$","i").test(t)&&n.add(t.slice(0,-1)),[...n]}function tn(t,n,s,a){const i=t||"Untitled action";if(n.length===0)return i;const o=n.flatMap(r=>{const h=r.kind==="url"?r.matchAliases||[]:[];return[...eo(r.label),...h].map(x=>({variant:x,link:r}))}).sort((r,h)=>h.variant.length-r.variant.length),c=o.map(r=>`\\b${ll(r.variant)}\\b`).join("|"),m=i.split(new RegExp(`(${c})`,"gi")),u=`underline decoration-dotted underline-offset-2 ${s?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`;return m.map((r,h)=>{const x=o.find(b=>b.variant.toLowerCase()===r.toLowerCase());if(!x)return r;const p=x.link;return p.kind==="tool"?e.jsx("button",{type:"button",onClick:b=>{b.stopPropagation(),a==null||a(p.tool)},className:u,children:r},`${p.key}-${h}`):e.jsx("a",{href:p.url,target:"_blank",rel:"noopener noreferrer",onClick:b=>b.stopPropagation(),className:u,children:r},`${p.key}-${h}`)})}function za(t){return t.split(`
`).map(n=>n.trim()).filter(Boolean)}const cl="Your Project";function dl(t,n){return t.replace(/\$projectName/g,n)}function ml(t,n){const s=i=>dl(i,n),a=i=>i.map(l=>({title:s(l.title),body:s(l.body)}));return{component:s(t.component),description:s(t.description),whatIsIt:s(t.whatIsIt),userInsight:s(t.userInsight),whyThisMatters:s(t.whyThisMatters),quickRealityCheck:s(t.quickRealityCheck),whatGoodLooksLike:a(t.whatGoodLooksLike),risksIfYouDont:a(t.risksIfYouDont)}}const to={good:{border:"border-emerald-200",bg:"bg-emerald-50 hover:bg-emerald-100",text:"text-black",titleText:"text-emerald-700"},risk:{border:"border-rose-200",bg:"bg-rose-50 hover:bg-rose-100",text:"text-black",titleText:"text-rose-800"}},no={good:{border:"border-emerald-500/40",bg:"bg-emerald-500/10 hover:bg-emerald-500/15",text:"text-emerald-200",titleText:"text-slate-100"},risk:{border:"border-rose-500/40",bg:"bg-rose-500/10 hover:bg-rose-500/15",text:"text-rose-200",titleText:"text-slate-100"}};function ul({points:t,tone:n,guidanceLinks:s,darkMode:a,onNavigateToTool:i}){const l=a?no[n]:to[n];return e.jsx("ul",{className:"space-y-3",children:t.map(o=>e.jsxs("li",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${l.titleText}`,children:o.title}),e.jsx("p",{className:`mt-0.5 text-sm ${l.text}`,children:tn(o.body,s,a,i)})]},o.title))})}function Ja({title:t,points:n,tone:s,isOpen:a,onToggle:i,guidanceLinks:l,darkMode:o,onNavigateToTool:c}){const m=o?no[s]:to[s];return e.jsxs("div",{className:`rounded-md border ${m.border}`,children:[e.jsxs("button",{type:"button",onClick:i,className:`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold transition-colors ${m.bg} ${m.text}`,children:[t,e.jsx("span",{"aria-hidden":"true",children:a?"−":"+"})]}),a&&e.jsx("div",{className:`border-t px-3 py-3 ${m.border}`,children:e.jsx(ul,{points:n,tone:s,guidanceLinks:l,darkMode:o,onNavigateToTool:c})})]})}function gl({detail:t,furtherReadingUrl:n,guidanceLinks:s,darkMode:a,onNavigateToTool:i}){const[l,o]=d.useState(!0),[c,m]=d.useState(!0);return e.jsxs("div",{children:[t.description&&e.jsx("p",{className:`text-sm ${a?"text-slate-200":"text-slate-700"}`,children:t.description}),e.jsxs("div",{className:`mt-4 space-y-4 ${t.description?"border-t pt-4":""} ${a?"border-slate-700":"border-slate-200"}`,children:[n&&e.jsx("a",{href:Ut(n),target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs font-semibold ${a?"border-slate-600 bg-slate-800 text-blue-300 hover:bg-slate-700":"border-slate-300 bg-white text-[#005eb8] hover:bg-slate-50"}`,children:"Further Reading ↗"}),t.whatIsIt&&e.jsx("p",{className:`text-sm ${a?"text-slate-300":"text-slate-600"}`,children:tn(t.whatIsIt,s,a,i)}),t.userInsight&&e.jsxs("blockquote",{className:`border-l-2 pl-3 text-sm italic ${a?"border-slate-600 text-slate-300":"border-slate-300 text-slate-600"}`,children:["“",tn(t.userInsight,s,a,i),"”"]}),t.whyThisMatters&&e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${a?"text-slate-200":"text-slate-700"}`,children:"Why this matters"}),e.jsx("ul",{className:`mt-1 list-disc space-y-1 pl-5 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:za(t.whyThisMatters).map(u=>e.jsx("li",{children:tn(u,s,a,i)},u))})]}),t.quickRealityCheck&&e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${a?"text-slate-200":"text-slate-700"}`,children:"Quick reality check"}),e.jsx("ul",{className:`mt-1 list-disc space-y-1 pl-5 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:za(t.quickRealityCheck).map(u=>e.jsx("li",{children:tn(u,s,a,i)},u))})]}),(t.whatGoodLooksLike.length>0||t.risksIfYouDont.length>0)&&e.jsxs("div",{className:"space-y-2",children:[t.whatGoodLooksLike.length>0&&e.jsx(Ja,{title:"What good looks like",points:t.whatGoodLooksLike,tone:"good",isOpen:l,onToggle:()=>o(u=>!u),guidanceLinks:s,darkMode:a,onNavigateToTool:i}),t.risksIfYouDont.length>0&&e.jsx(Ja,{title:"Risks if you don't",points:t.risksIfYouDont,tone:"risk",isOpen:c,onToggle:()=>m(u=>!u),guidanceLinks:s,darkMode:a,onNavigateToTool:i})]})]})]})}function pl({open:t,onClose:n,detail:s,furtherReadingUrl:a,guidanceLinks:i,darkMode:l,onNavigateToTool:o}){return t?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${l?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${l?"text-slate-300":"text-slate-500"}`,children:"Component overview"}),e.jsx("button",{type:"button",onClick:n,"aria-label":"Close component overview",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${l?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:"mt-2",children:e.jsx(gl,{detail:s,furtherReadingUrl:a,guidanceLinks:i,darkMode:l,onNavigateToTool:o})})]})}):null}const _s="__evidence_json__:",hl=1024*1024;function fl(t,n,s){return(s[t]||[]).filter(a=>a.linkedActions.some(i=>i.actionId===n))}function so(t){const n=t.trim();return n?/^https?:\/\//i.test(n)?n:/^www\./i.test(n)?`https://${n}`:n:""}function Mn(t){const n=(t==null?void 0:t.trim())||"";if(!n)return[];if(n.startsWith(_s))try{const s=JSON.parse(n.slice(_s.length));return Array.isArray(s)?s.filter(a=>a&&(a.type==="url"||a.type==="file")).map(a=>({type:a.type,label:String(a.label||"").trim(),href:String(a.href||"").trim()})).filter(a=>a.label||a.href):[]}catch{return[]}return n.split(`
`).map(s=>s.trim()).filter(Boolean).map(s=>{const a=so(s);return{type:"url",label:s,href:a}})}function bl(t){const n=t.map(s=>({type:s.type,label:s.label.trim(),href:s.href.trim()})).filter(s=>s.label||s.href);return n.length?`${_s}${JSON.stringify(n)}`:""}function xl({rows:t,isOpen:n,onToggle:s,darkMode:a}){return e.jsxs("div",{className:`mb-8 rounded-lg border ${a?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("button",{type:"button",onClick:s,className:"flex w-full items-center justify-between gap-4 px-5 py-4 text-left",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-sm font-semibold ${a?"text-slate-100":"text-slate-800"}`,children:"Evidence Links and Docs"}),e.jsx("p",{className:`mt-0.5 text-xs ${a?"text-slate-400":"text-slate-500"}`,children:t.length?`${t.length} item${t.length===1?"":"s"} attached across this component's actions.`:"Everything attached as evidence across this component's actions, in one place."})]}),e.jsx("span",{className:`shrink-0 text-xs font-semibold ${a?"text-slate-300":"text-slate-500"}`,children:n?"Hide −":"Show +"})]}),n&&e.jsx("div",{className:`border-t px-5 py-4 ${a?"border-slate-700":"border-slate-200"}`,children:t.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${a?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:a?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Type"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Link / Doc"})]})}),e.jsx("tbody",{className:`${a?"divide-slate-700":"divide-slate-100"} divide-y`,children:t.map((i,l)=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-100":"text-slate-800"}`,children:i.actionText}),e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:i.lens}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`${i.item.type==="file"?"bg-emerald-100 text-emerald-800":"bg-blue-100 text-blue-800"} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`,children:i.item.type==="file"?"File":"Link"})}),e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-100":"text-slate-800"}`,children:i.item.href?e.jsx("a",{href:Ut(i.item.href),target:"_blank",rel:"noopener noreferrer",className:`underline ${a?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:i.item.label||i.item.href}):i.item.label||"-"})]},`${i.lens}:${l}`))})]})}):e.jsx("p",{className:`text-sm ${a?"text-slate-400":"text-slate-500"}`,children:"No evidence added yet. Attach links or documents to an action to see them here."})})]})}function yl(t){return new Promise((n,s)=>{const a=new FileReader;a.onload=()=>n(String(a.result||"")),a.onerror=()=>s(new Error("Unable to read file.")),a.readAsDataURL(t)})}function vl(){return e.jsx("svg",{className:"w-4 h-4 text-blue-500 mt-0.5 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Xa(){return e.jsx("svg",{className:"w-5 h-5 ml-2 text-slate-400 group-hover:text-[#005eb8] shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Sl(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5h2m6.5-.5a2.121 2.121 0 013 3L8 21l-4 1 1-4L17.5 4.5z"})})}function wl(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m3 0-.867 12.142A2 2 0 0115.138 21H8.862a2 2 0 01-1.995-1.858L6 7h12z"})})}function Qa(t,n,s,a){if(!t.raidItemId)return null;const i=n.find(o=>o.id===t.raidItemId);return!i||i.status==="Closed"||s.some(o=>o.lenses.some(c=>{var m;return(((m=a(o.id,c))==null?void 0:m.actions)||[]).some(u=>u.id!==t.id&&u.raidItemId===t.raidItemId)}))?null:`This action resolves the RAID item "${i.title}", which is not yet Closed and has no other action linked to it. Close the RAID item first (or link another action to it) before completing this one.`}function Nl(t,n){let s=t,a=Ga({actions:n},s);for(;a;)s=a.nextScore,a=Ga({actions:n},s);return s}function jl(t,n,s){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:"",actionType:void 0,owner:"",timescale:"",status:"Planned",phase:t,startDate:"",dueDate:"",notes:"",evidence:"",linkedTargets:[{componentId:n,lens:s}]}}function Mt(t,n,s){const a=t.linkedTargets||[];if(!a.length)return[{componentId:n,lens:s}];const i=new Set,l=[];return a.forEach(o=>{const c=`${o.componentId}:${o.lens}`;i.has(c)||(i.add(c),l.push({componentId:o.componentId,lens:o.lens}))}),l}function kl({store:t,components:n,activeComponentId:s,getRubricText:a,getEntry:i,onComponentChange:l,onEntryUpdate:o,onOpenLensInfo:c,onActionRemove:m,onObjectivesUpdate:u,onNavigateToTool:r,hideGuidedWorkflow:h=!1,showAdditionalGuidanceLinks:x=!0,showActionPriorityColours:p=!1,currentUserId:b,currentUserProfileImageDataUrl:C,onHideGuidedWorkflow:w,darkMode:g=!1,focusAction:k,onFocusActionHandled:$,onNavigateToRaidItem:G}){var Ie,Ve,Et,pt,Tt,It,Lt,xt,Sa,wa,Na,ja,ka,Ca,Ea,Ia;const f=n.find(S=>S.id===s)||n[0],v=(Ve=(Ie=t.orgProfile)==null?void 0:Ie.cst)==null?void 0:Ve.pathway,O=S=>v&&v!=="pathway-1"?`No outcomes or actions are defined for ${Ti[v]} yet.`:S,E=((pt=(Et=t.orgProfile)==null?void 0:Et.projectName)==null?void 0:pt.trim())||cl,B=(Tt=Ka[f.id])!=null&&Tt.whatIsIt?ml(Ka[f.id],E):void 0,Y=(It=t.orgProfile)!=null&&It.coreLinks&&t.orgProfile.coreLinks.length>0?t.orgProfile.coreLinks:Yi,se=d.useMemo(()=>{var S;return(((S=t.orgProfile)==null?void 0:S.toolLinks)||[]).filter(_=>_.matchText.trim()).map(_=>({key:_.key,label:_.matchText,kind:"tool",tool:_.tool}))},[(Lt=t.orgProfile)==null?void 0:Lt.toolLinks]),me=d.useMemo(()=>{var be;const S=(be=t.orgProfile)==null?void 0:be.linkOverrides,_=rl(x,S),U=x?Y:Y.filter(Ae=>Ae.type==="core"),de={};return Object.keys(_).forEach(Ae=>{var At,Wt;const Me=new Map,qe=((Wt=(At=t.orgProfile)==null?void 0:At.customComponentLinks)==null?void 0:Wt[Ae])||[];[..._[Ae],...U,...qe].forEach(tt=>{tt.label&&tt.label.trim().length>=Zi&&Me.set(tt.label.toLowerCase(),{...tt,kind:"url",url:Ut(tt.url)})}),se.forEach(tt=>{Me.set(tt.label.toLowerCase(),tt)}),de[Ae]=[...Me.values()]}),de},[x,Y,(xt=t.orgProfile)==null?void 0:xt.linkOverrides,(Sa=t.orgProfile)==null?void 0:Sa.customComponentLinks,se]),[A,pe]=d.useState(null),[M,J]=d.useState(!1),[Ee,q]=d.useState([]),re=d.useCallback((S,_,U)=>{const de=Nl(_,U);if(de>_){const be=`${f.label} · ${S} moved to ${ft(de).label}!`;q(Ae=>[...Ae,{id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,message:be}])}return de},[f.label]),[ce,j]=d.useState(!1),[Z,le]=d.useState("Risk"),Ne=d.useRef(null),[fe,R]=d.useState(null),[z,xe]=d.useState(null),[F,H]=d.useState(!1),[te,$e]=d.useState(!0),[Ge,T]=d.useState(!0),[ue,oe]=d.useState(!0),[Oe,De]=d.useState(!1),[Le,Ue]=d.useState(!1),N=yt("assessment"),[W,P]=d.useState({}),[L,X]=d.useState(null),[ee,ye]=d.useState({}),[Ce,Re]=d.useState({}),_e=((wa=t.objectives)==null?void 0:wa[f.id])||[],He=t.orgProfile.teamMembers||[],mt=((Na=He.find(S=>S.id===b))==null?void 0:Na.name)||"",at=d.useMemo(()=>{const S={};return f.lenses.forEach(_=>{S[_]=i(f.id,_).actions||[]}),S},[f.id,f.lenses,i]),ut=d.useMemo(()=>{const S={};return f.lenses.forEach(_=>{const U=i(f.id,_),de=at[_]||[],be=de.some(Me=>Me.readinessScore===0),Ae=U.score===0&&!be?1:U.score;S[_]=de.filter(Me=>(Me.readinessScore??Ae)===Ae)}),S},[f.id,f.lenses,i,at]),zt=d.useMemo(()=>f.lenses.reduce((S,_)=>S+(ut[_]||[]).length,0),[f.lenses,ut]),Jt=d.useMemo(()=>f.lenses.reduce((S,_)=>S+(ut[_]||[]).filter(U=>nt(U.status)==="Completed").length,0),[f.lenses,ut]),I=d.useMemo(()=>f.lenses.some(S=>Number(i(f.id,S).score||0)>0),[f.id,f.lenses,i]),V=d.useMemo(()=>{const S={};return Object.keys(t.currentDraft).forEach(_=>{Object.keys(t.currentDraft[_]||{}).forEach(U=>{(t.currentDraft[_][U].actions||[]).forEach(be=>{Mt(be,_,U).forEach(Me=>{const qe=`${Me.componentId}:${Me.lens}`;S[qe]||(S[qe]=[]),S[qe].push({sourceComponentId:_,sourceLens:U,action:be,isLinkedView:!(Me.componentId===_&&Me.lens===U)})})})})}),S},[t.currentDraft]),ne=d.useMemo(()=>{const S={};return n.forEach(_=>{S[_.id]=_}),S},[n]),ve=d.useMemo(()=>{const S=[];return f.lenses.forEach(_=>{(V[`${f.id}:${_}`]||[]).filter(de=>!de.isLinkedView).forEach(de=>{Mn(de.action.evidence||"").forEach(be=>{S.push({actionText:de.action.text||"Untitled action",lens:_,item:be})})})}),S},[V,f.id,f.lenses]),Pe=d.useMemo(()=>{const S=f.lenses[0];return S?i(f.id,S).rationale:""},[f.id,f.lenses,i]),Ye=d.useMemo(()=>{var S;return A?((S=n.find(_=>_.id===A.sourceComponentId))==null?void 0:S.label)||A.sourceComponentId:f.label},[A,f.label,n]),ze=d.useMemo(()=>{var _;if(!((_=A==null?void 0:A.action.text)!=null&&_.trim()))return"New action";const S=A.action.text.trim().replace(/\s+/g," ");return S.length>70?`${S.slice(0,70)}...`:S},[A]),Te=d.useMemo(()=>_e.find(S=>S.id===(fe==null?void 0:fe.objectiveId))||null,[fe==null?void 0:fe.objectiveId,_e]),Se=d.useMemo(()=>Te?Cs(Te,at):null,[Te,at]),it=d.useMemo(()=>Te?Te.linkedActions.map(S=>{const _=(at[S.lens]||[]).find(be=>be.id===S.actionId),U=_?nt(_.status):null,de=_?js(_.status,_.startDate,_.dueDate):null;return{lens:S.lens,action:_,status:U,temporalStatus:de}}):[],[Te,at]),ot=d.useCallback((S,_)=>{const U=i(f.id,S);o(f.id,S,{...U,score:_})},[f.id,i,o]),Dt=d.useCallback(S=>{f.lenses.forEach(_=>{const U=i(f.id,_);o(f.id,_,{...U,rationale:S})})},[f.id,f.lenses,i,o]),kt=d.useCallback((S,_)=>{const U=jl(f.phase,f.id,S);_&&(U.text=_),pe({sourceComponentId:f.id,sourceLens:S,mode:"create",action:U,evidenceItems:Mn(U.evidence||""),linkedObjectiveIds:[],targetPickerComponentId:f.id,targetPickerLens:S})},[f.id,f.phase]),Pt=d.useCallback((S,_,U)=>{var Me;const de=Mt(U,S,_),be=de[0]||{componentId:S,lens:_},Ae=(((Me=t.objectives)==null?void 0:Me[S])||[]).filter(qe=>qe.linkedActions.some(At=>At.actionId===U.id)).map(qe=>qe.id);pe({sourceComponentId:S,sourceLens:_,mode:"edit",actionId:U.id,action:{...U,linkedTargets:de,notes:U.notes||"",evidence:U.evidence||"",startDate:U.startDate||"",dueDate:U.dueDate||""},evidenceItems:Mn(U.evidence||""),linkedObjectiveIds:Ae,targetPickerComponentId:be.componentId,targetPickerLens:be.lens})},[t.objectives]),un=d.useCallback(()=>{xe({mode:"create",text:"",owner:""})},[]),gn=d.useCallback(S=>{xe({mode:"edit",objectiveId:S.id,text:S.text,owner:S.owner})},[]),Ct=()=>{xe(null)},bt=()=>{if(z){if(!z.text.trim()){window.alert("Outcome description is required.");return}if(z.mode==="create"){const S={id:`${Qi}${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:z.text.trim(),owner:z.owner.trim(),timescale:"",linkedActions:[]};u(f.id,[..._e,S])}else u(f.id,_e.map(S=>S.id===z.objectiveId?{...S,text:z.text.trim(),owner:z.owner.trim()}:S));xe(null)}},$t=S=>{u(f.id,_e.filter(_=>_.id!==S))};d.useEffect(()=>{if(!k)return;const _=i(f.id,k.lens).actions.find(U=>U.id===k.actionId);if(!_){$==null||$();return}oe(!0),Pt(f.id,k.lens,_),$==null||$()},[k,f.id]);const Ht=()=>{pe(null)},pn=()=>{var Me;if(!A)return;if(!A.action.text.trim()){window.alert("Action description is required.");return}const S={...A.action,evidence:bl(A.evidenceItems),status:nt(A.action.status),linkedTargets:Mt(A.action,A.sourceComponentId,A.sourceLens),timescale:A.action.dueDate||A.action.startDate||A.action.timescale},_=i(A.sourceComponentId,A.sourceLens),U=A.mode==="create"?[..._.actions,S]:_.actions.map(qe=>qe.id===A.actionId?S:qe);o(A.sourceComponentId,A.sourceLens,{..._,actions:U,score:re(A.sourceLens,_.score,U)});const de=new Set(A.linkedObjectiveIds),Ae=(((Me=t.objectives)==null?void 0:Me[A.sourceComponentId])||[]).map(qe=>{const At=qe.linkedActions.filter(Wt=>!(Wt.lens===A.sourceLens&&Wt.actionId===S.id));return de.has(qe.id)?{...qe,linkedActions:[...At,{lens:A.sourceLens,actionId:S.id}]}:{...qe,linkedActions:At}});u(A.sourceComponentId,Ae),Ht()},Rn=()=>{if(!A)return;const S=nt(A.action.status);if(S==="Completed"){const U=Qa(A.action,t.raidItems||[],n,i);if(U){window.alert(U);return}}if(S==="Completed"&&A.evidenceItems.length===0&&!dt(Nn)){Ne.current=pn,j(!0);return}pn()},_n=(S,_,U)=>{const de=i(f.id,S),be=de.actions.map(Ae=>Ae.id===_?{...Ae,status:nt(U)}:Ae);o(f.id,S,{...de,actions:be,score:re(S,de.score,be)})},Dn=(S,_,U)=>{const de=i(f.id,S),be=de.actions.map(Ae=>Ae.id===_?{...Ae,owner:U}:Ae);o(f.id,S,{...de,actions:be})},hn=(S,_,U)=>{const de=nt(U);if(_.priority==="must"&&de==="Cancelled"){window.alert("You are trying to mark what we have classified as a MUST action as Cancelled, and it shouldn't be cancelled. Please re-review.");return}if(de==="Completed"){const Me=Qa(_,t.raidItems||[],n,i);if(Me){window.alert(Me);return}}const be=Mn(_.evidence||"").length>0;if(de==="Completed"&&!be&&!dt(Nn)){Ne.current=()=>_n(S,_.id,de),j(!0);return}_n(S,_.id,de)},Pn=(S,_,U)=>{if(U.priority==="must"){window.alert("You are trying to delete what we have classified as a MUST action, and it shouldn't be deleted. Please re-review.");return}m(S,_,U.id)},Xt=S=>{pe(_=>{if(!_)return _;const U={..._,action:{..._.action,...S}};return U.action.status=nt(U.action.status),U})},fn=(S,_)=>{pe(U=>U&&{...U,targetPickerComponentId:S,targetPickerLens:_})},y=()=>{pe(S=>{if(!S)return S;const _=ne[S.targetPickerComponentId]||f,U=_.lenses.includes(S.targetPickerLens)?S.targetPickerLens:_.lenses[0];if(!U)return S;const de=Mt(S.action,S.sourceComponentId,S.sourceLens);return de.some(be=>be.componentId===_.id&&be.lens===U)?S:{...S,action:{...S.action,linkedTargets:[...de,{componentId:_.id,lens:U}]}}})},D=(S,_)=>{pe(U=>{if(!U)return U;const be=Mt(U.action,U.sourceComponentId,U.sourceLens).filter(Ae=>!(Ae.componentId===S&&Ae.lens===_));return{...U,action:{...U.action,linkedTargets:be}}})},K=S=>{pe(_=>{if(!_)return _;const U=new Set(_.linkedObjectiveIds);return U.has(S)?U.delete(S):U.add(S),{..._,linkedObjectiveIds:Array.from(U)}})},ge=S=>{pe(_=>_&&{..._,evidenceItems:S})},ae=()=>{if(!A)return;const S=A.evidenceItems;ge([...S,{type:"url",label:"",href:""}])},ke=(S,_,U)=>{if(!A)return;const de=A.evidenceItems;if(!de[S])return;const be=[...de];_==="href"?be[S]={...be[S],href:so(U)}:be[S]={...be[S],label:U},ge(be)},we=S=>{if(!A)return;const _=A.evidenceItems;ge(_.filter((U,de)=>de!==S))},Be=async S=>{if(!A)return;const _=S.target.files;if(!(_!=null&&_.length))return;const de=[...A.evidenceItems];for(const be of Array.from(_)){if(be.size>hl){window.alert(`"${be.name}" is larger than 1MB. Please attach a URL instead.`);continue}try{const Ae=await yl(be);de.push({type:"file",label:be.name,href:Ae})}catch{window.alert(`Unable to upload "${be.name}".`)}}ge(de),S.target.value=""},gt=(S,_)=>{_&&(R(null),Pt(f.id,S,_))},Fe=S=>{const _=document.getElementById(S);_==null||_.scrollIntoView({behavior:"smooth",block:"start"})};return e.jsxs("div",{className:"max-w-5xl mx-auto pb-20",children:[e.jsx("div",{className:"mb-8 flex items-center justify-between gap-4 flex-wrap",children:e.jsxs("div",{children:[e.jsxs("h2",{className:`text-3xl font-bold flex items-center ${g?"text-slate-100":"text-slate-800"}`,children:[f.label,e.jsx("span",{className:"bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-4 border border-blue-200",children:Je[f.phase]||`Phase ${f.phase}`}),e.jsx("span",{className:"ml-2",children:e.jsx(jt,{onClick:N.reopen,darkMode:g})})]}),e.jsx("p",{className:`mt-2 ${g?"text-slate-300":"text-slate-500"}`,children:"Assess readiness at lens level. Change Component rationale, outcomes, and actions are tracked below."}),B&&e.jsxs("div",{className:`mt-3 flex flex-wrap items-center justify-between gap-3 rounded-lg border px-4 py-3 ${g?"border-blue-800 bg-blue-950/40 text-slate-200":"border-blue-200 bg-blue-50 text-slate-700"}`,children:[e.jsxs("p",{className:"text-sm",children:["Want to understand what ",f.label," covers?"]}),e.jsx("button",{type:"button",onClick:()=>Ue(!0),className:"font-semibold text-[#005eb8] underline underline-offset-2 hover:text-[#003087]",children:"What is this?"})]})]})}),B&&e.jsx(pl,{open:Le,onClose:()=>Ue(!1),detail:B,furtherReadingUrl:(ka=(ja=t.orgProfile)==null?void 0:ja.componentFurtherReading)==null?void 0:ka[f.id],guidanceLinks:me[f.id]||[],darkMode:g,onNavigateToTool:r}),!h&&!F&&e.jsxs("div",{className:`${g?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mb-6 rounded-lg border p-4`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${g?"text-slate-300":"text-slate-600"}`,children:"Guided workflow"}),e.jsx("button",{type:"button",onClick:()=>H(!0),"aria-label":"Dismiss guided workflow",className:`text-xs font-semibold leading-none ${g?"text-slate-400 hover:text-slate-200":"text-slate-400 hover:text-slate-700"}`,children:"×"})]}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:()=>Fe("assessment-scoring"),className:`${g?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"1. Where are you now?"}),e.jsx("button",{type:"button",onClick:()=>Fe("assessment-objectives"),className:`${g?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"2. Review outcomes"}),e.jsx("button",{type:"button",onClick:()=>Fe("assessment-actions"),className:`${g?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"3. Plan lens actions"})]}),w&&e.jsx("button",{type:"button",onClick:w,className:`mt-3 text-xs underline ${g?"text-slate-400 hover:text-slate-200":"text-slate-500 hover:text-slate-700"}`,children:"Don't show this again"})]}),e.jsxs("div",{id:"assessment-scoring",className:`${g?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[e.jsx("h3",{className:`text-sm font-semibold ${g?"text-slate-100":"text-slate-800"}`,children:I?"Step 1: Where are you now?":"Step 1: Where are you now and what is currently known?"}),e.jsx("button",{type:"button",onClick:()=>$e(S=>!S),className:`${g?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:te?"Hide":"Show"})]}),te?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:`block text-sm font-semibold mb-2 ${g?"text-slate-100":"text-slate-700"}`,children:"Assessment Rationale"}),e.jsx("p",{className:`text-xs mb-2 ${g?"text-slate-300":"text-slate-500"}`,children:'Explain what is currently known, what evidence supports that view, and where the biggest gap sits. Example: "Sponsorship is visible only in two services; there is no monthly steering update yet; next step is to agree a trust-wide sponsor cadence."'}),e.jsx("textarea",{value:Pe,onChange:S=>Dt(S.target.value),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-24 p-2 border ${g?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,placeholder:"Record what is currently known for this change component, the evidence behind it, and the key improvement needed next."})]}):null]}),e.jsxs("div",{id:"assessment-objectives",className:`${g?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-1",children:[e.jsx("h3",{className:`text-sm font-semibold ${g?"text-slate-100":"text-slate-800"}`,children:"Step 2: Review outcomes"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:un,className:`${g?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:"Add Outcome"}),e.jsx("button",{type:"button",onClick:()=>T(S=>!S),className:`${g?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:Ge?"Hide":"Show"})]})]}),e.jsx("p",{className:`text-xs mb-3 ${g?"text-slate-300":"text-slate-500"}`,children:"Owned by this component as a whole. Status is derived automatically from the lens actions assigned to each outcome below and cannot be set manually."}),Ge?_e.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${g?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:g?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Linked Actions"})]})}),e.jsx("tbody",{className:`${g?"divide-slate-700":"divide-slate-100"} divide-y`,children:_e.map(S=>{const _=Cs(S,at),U=Ya[_],de=()=>R({objectiveId:S.id});return e.jsxs("tr",{onClick:de,onKeyDown:be=>{(be.key==="Enter"||be.key===" ")&&(be.preventDefault(),de())},tabIndex:0,className:`${g?"hover:bg-slate-700 focus-visible:bg-slate-700":"hover:bg-slate-50 focus-visible:bg-slate-50"} cursor-pointer focus:outline-none`,children:[e.jsx("td",{className:`px-3 py-2 text-sm ${g?"text-slate-100":"text-slate-800"}`,children:S.text||"Untitled outcome"}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${U}`,children:_})}),e.jsx("td",{className:`px-3 py-2 text-sm ${g?"text-slate-300":"text-slate-600"}`,children:S.linkedActions.length?`${S.linkedActions.length} action(s)`:"None assigned"})]},S.id)})})]})}):e.jsx("p",{className:"text-sm text-slate-500",children:O("No outcomes yet.")}):null]}),e.jsx("div",{id:"assessment-actions",className:`${g?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-sm font-semibold ${g?"text-slate-100":"text-slate-800"}`,children:"Step 3: Plan lens actions"}),e.jsx("p",{className:`mt-1 text-xs ${g?"text-slate-300":"text-slate-600"}`,children:"Track delivery actions for each lens and link them to outcomes and affected component lenses."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:`${g?"bg-slate-800 border-slate-600 text-slate-100":"bg-white border-slate-300 text-slate-700"} rounded-full border px-2 py-1 text-xs`,children:[Jt,"/",zt," completed"]}),e.jsx("button",{type:"button",onClick:()=>oe(S=>!S),className:`${g?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:ue?"Hide":"Show"})]})]})}),ue?e.jsx("div",{className:"space-y-8 mb-8",children:f.lenses.map(S=>{const _=i(f.id,S),U=`${f.id}:${S}`,de=V[U]||[],be=de.some(ie=>ie.action.readinessScore===0),Ae=_.score===0&&!be?1:_.score,Me=ee[U]||"all",qe=Ce[U]||"all",At=Array.from(new Set(de.map(ie=>ie.action.actionType).filter(ie=>ie!==void 0))).sort((ie,je)=>String(ie).localeCompare(String(je))),Wt=Array.from(new Set([...He.map(ie=>ie.name),...de.map(ie=>ie.action.owner).filter(ie=>!!ie)])).sort((ie,je)=>ie.localeCompare(je)),tt=[...de].filter(ie=>(ie.action.readinessScore!==void 0?ie.action.readinessScore:Ae)!==Ae||Me!=="all"&&(ie.action.actionType||"")!==Me?!1:qe==="all"||(ie.action.owner||"")===qe).sort((ie,je)=>{const bn=nt(ie.action.status)==="Completed",xn=nt(je.action.status)==="Completed";if(bn!==xn)return bn?1:-1;const $n=ie.action.dueDate?new Date(ie.action.dueDate).getTime():Number.POSITIVE_INFINITY,os=je.action.dueDate?new Date(je.action.dueDate).getTime():Number.POSITIVE_INFINITY;return $n-os}),Aa=_.score>=f.target?"#22c55e":_.score>0?"#f59e0b":"#cbd5e1";return e.jsxs("div",{className:`${g?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:[e.jsxs("div",{className:`${g?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} p-6 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4`,children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm font-bold uppercase tracking-wider text-blue-600 block mb-1",children:"Lens"}),e.jsxs("button",{onClick:()=>c(S),className:`flex items-center text-2xl font-semibold transition-colors group text-left ${g?"text-slate-100 hover:text-[#63b3ff]":"text-slate-800 hover:text-[#005eb8]"}`,title:"View Lens Information",children:[S,e.jsx(Xa,{})]})]}),e.jsxs("div",{className:"shrink-0 w-full md:w-64",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[e.jsx("label",{className:`block text-xs font-semibold ${g?"text-slate-300":"text-slate-500"}`,children:"Readiness Score"}),e.jsx("button",{type:"button",onClick:()=>J(!0),className:"group",title:"What do the readiness score levels mean?","aria-label":"What do the readiness score levels mean?",children:e.jsx(Xa,{})})]}),e.jsx("select",{value:_.score,onChange:ie=>ot(S,Number(ie.target.value)),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 text-sm font-medium border ${g?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,style:{borderLeftWidth:"4px",borderLeftColor:Aa},children:il.map(ie=>e.jsxs("option",{value:ie,children:[ie," - ",ol[ie]]},ie))})]})]}),e.jsx("div",{className:`${g?"bg-slate-900":"bg-blue-50/50"} px-6 py-4 border-b text-sm`,style:{borderLeftWidth:"4px",borderLeftColor:Aa},children:e.jsxs("div",{className:"flex items-start flex-1",children:[e.jsx(vl,{}),e.jsxs("p",{className:`whitespace-pre-line ${g?"text-slate-300":"text-slate-600"}`,children:[e.jsxs("strong",{className:g?"text-slate-100":"text-slate-700",children:[_.score===0?"Not Started":`Level ${_.score}`,":"]}),` ${a(f.id,S,_.score)}`]})]})}),e.jsxs("div",{className:`${g?"border-slate-700":"border-slate-100"} p-6 border-t`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:`text-sm font-semibold ${g?"text-slate-100":"text-slate-800"}`,children:"Lens Actions"}),e.jsx("p",{className:`mt-1 text-xs ${g?"text-slate-300":"text-slate-500"}`,children:"Hierarchy: Outcome - Action - Affected component lenses."})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs("select",{"aria-label":`Filter ${S} actions by type`,value:Me,onChange:ie=>ye(je=>({...je,[U]:ie.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${g?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),[...new Set([...Us,...At])].map(ie=>e.jsx("option",{value:ie,children:ie},ie))]}),e.jsxs("select",{"aria-label":`Filter ${S} actions by owner`,value:qe,onChange:ie=>Re(je=>({...je,[U]:ie.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${g?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),Wt.map(ie=>e.jsx("option",{value:ie,children:ie},ie))]}),e.jsx("button",{onClick:()=>kt(S),className:"px-3 py-1.5 rounded bg-[#005eb8] text-white text-xs font-semibold shadow-[0_2px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Add Action"})]})]}),tt.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${g?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:g?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Actions"})]})}),e.jsx("tbody",{className:`${g?"divide-slate-700":"divide-slate-100"} divide-y`,children:(W[`${f.id}:${S}`]?tt:tt.slice(0,5)).map(ie=>{var Oa;const je=ie.action,bn=nt(je.status),xn=js(je.status,je.startDate,je.dueDate),$n=xn==="Overdue start"||xn==="Overdue completion"?xn:null,os=((Oa=ne[ie.sourceComponentId])==null?void 0:Oa.label)||ie.sourceComponentId,$o=fl(ie.sourceComponentId,je.id,t.objectives||{}),To=Gt[bn]||Gt.Planned,rs=`${ie.sourceComponentId}:${ie.sourceLens}:${je.id}`,Lo=p&&v==="pathway-1"&&je.priority?je.priority==="must"?g?"bg-red-900/40 border-l-4 border-red-500":"bg-red-50 border-l-4 border-red-400":g?"bg-amber-900/40 border-l-4 border-amber-500":"bg-amber-50 border-l-4 border-amber-400":"";return e.jsxs("tr",{className:Lo,children:[e.jsxs("td",{className:`px-3 py-2 text-sm ${g?"text-slate-100":"text-slate-800"}`,children:[e.jsx("div",{children:tn(je.text,me[ie.sourceComponentId]||[],g,r)}),ie.isLinkedView?e.jsxs("div",{className:`mt-1 text-xs ${g?"text-indigo-300":"text-indigo-700"}`,children:["Linked from ",os," /"," ",ie.sourceLens]}):null]}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("select",{"aria-label":`Current state for ${je.text}`,value:bn,onChange:ct=>hn(ie.sourceLens,je,ct.target.value),className:`min-w-[7.5rem] rounded-md border px-2 py-1 text-xs font-semibold ${To} focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b]`,children:qa.map(ct=>e.jsx("option",{value:ct,children:ct},ct))}),$n?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:$n}):null,!$o.length&&e.jsx("div",{className:`mt-1 text-center text-xs ${g?"text-amber-200":"text-amber-700"}`,children:"Not yet linked"})]}),e.jsx("td",{className:"px-3 py-2",children:L===rs?e.jsxs("select",{autoFocus:!0,"aria-label":`Owner for ${je.text}`,value:je.owner||"",onChange:ct=>{Dn(ie.sourceLens,je.id,ct.target.value),X(null)},onBlur:()=>X(null),className:`min-w-[9rem] rounded-md border px-2 py-1 text-xs font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] ${g?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Unassigned"}),He.map(ct=>e.jsx("option",{value:ct.name,children:ct.name},ct.id)),je.owner&&!He.some(ct=>ct.name===je.owner)?e.jsxs("option",{value:je.owner,children:[je.owner," (not on roster)"]}):null]}):e.jsx("button",{type:"button",onClick:()=>X(rs),"aria-label":`Change owner for ${je.text}`,className:"rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b]",children:e.jsx(Xi,{name:je.owner||"",darkMode:g,imageDataUrl:mt&&je.owner===mt?C:void 0})})}),e.jsx("td",{className:"px-3 py-2",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(nl,{status:je.status,startDate:je.startDate,dueDate:je.dueDate}),e.jsx("button",{type:"button",onClick:()=>Pt(ie.sourceComponentId,ie.sourceLens,je),title:"Edit action","aria-label":`Edit ${je.text}`,className:`${g?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} inline-flex h-8 w-8 items-center justify-center rounded-md border`,children:e.jsx(Sl,{})}),e.jsx("button",{type:"button",onClick:()=>Pn(ie.sourceComponentId,ie.sourceLens,je),title:"Remove action","aria-label":`Remove ${je.text}`,className:`${g?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"} inline-flex h-8 w-8 items-center justify-center rounded-md border`,children:e.jsx(wl,{})})]})})]},rs)})})]})}):e.jsx("p",{className:`text-sm ${g?"text-slate-300":"text-slate-500"}`,children:O("No actions yet for this lens.")}),tt.length>5?e.jsx("button",{type:"button",onClick:()=>P(ie=>({...ie,[`${f.id}:${S}`]:!ie[`${f.id}:${S}`]})),className:`${g?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} mt-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:W[`${f.id}:${S}`]?"Show top 5 actions":`Show additional ${tt.length>5?tt.length-5:tt.length} action(s)`}):""]})]},S)})}):null,e.jsx(xl,{rows:ve,isOpen:Oe,onToggle:()=>De(S=>!S),darkMode:g}),A?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${g?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-hidden rounded-xl border p-6 shadow-2xl`,style:{borderTopWidth:"4px",borderTopColor:ft(A.action.readinessScore??0).color},children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:`text-lg font-semibold ${g?"text-slate-100":"text-slate-900"}`,children:[A.mode==="create"?"Create Action":"Edit Action"," ·"," ",Ye," / ",A.sourceLens," · ",ze]}),e.jsx("span",{className:"mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-semibold text-white",style:{backgroundColor:ft(A.action.readinessScore??0).color},children:ft(A.action.readinessScore??0).label})]}),e.jsx("button",{type:"button",onClick:Ht,className:`${g?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:"mt-4 max-h-[calc(100vh-13rem)] overflow-y-auto pr-1 grid gap-3",children:[e.jsx("div",{className:`${g?"border-slate-700 bg-slate-900":"border-blue-100 bg-white"} sticky top-0 z-10 rounded-md border px-3 py-2 shadow-sm`,children:e.jsxs("label",{className:`text-sm ${g?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Description"}),e.jsx("textarea",{value:A.action.text,onChange:S=>Xt({text:S.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${g?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})}),e.jsxs("div",{className:`${g?"border-slate-700 bg-slate-900 text-slate-200":"border-blue-100 bg-blue-50 text-slate-700"} rounded-md border px-3 py-2 text-xs`,children:[e.jsx("strong",{children:"Linking order:"})," first attach this action to one or more outcomes, then add affected component lenses (component + lens) where this action should appear."]}),e.jsx($i,{action:A.action,onChange:Xt,teamMembers:He,darkMode:g}),e.jsxs("div",{className:`${g?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${g?"text-slate-100":"text-slate-800"}`,children:"Evidence Links / Docs"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:ae,className:`${g?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Add web link"}),e.jsxs("label",{className:`${g?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:["Upload file(s)",e.jsx("input",{type:"file",multiple:!0,className:"hidden",onChange:Be})]})]})]}),e.jsx("p",{className:`mt-1 text-xs ${g?"text-slate-300":"text-slate-500"}`,children:"Add evidence as either web links or uploaded files. Everything appears below in a single list."}),e.jsx("div",{className:`${g?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:A.evidenceItems.length?A.evidenceItems.map((S,_)=>e.jsxs("div",{className:`${g?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} grid grid-cols-1 gap-2 rounded border p-2 md:grid-cols-[auto,1fr,1fr,auto]`,children:[e.jsx("div",{className:"flex items-start pt-2",children:e.jsx("span",{className:`${S.type==="file"?"bg-emerald-100 text-emerald-800":"bg-blue-100 text-blue-800"} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`,children:S.type==="file"?"File":"Link"})}),e.jsx("input",{value:S.label,onChange:U=>ke(_,"label",U.target.value),placeholder:S.type==="file"?"Document label":"Link label",className:`rounded-md border px-2.5 py-2 text-sm ${g?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`}),e.jsx("input",{value:S.href,onChange:U=>ke(_,"href",U.target.value),placeholder:S.type==="file"?"Embedded file URL (auto generated)":"https://...",className:`rounded-md border px-2.5 py-2 text-sm ${g?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,disabled:S.type==="file"}),e.jsx("button",{type:"button",onClick:()=>we(_),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},`${S.type}-${_}`)):e.jsx("p",{className:`px-2 py-1 text-sm ${g?"text-slate-300":"text-slate-500"}`,children:"No evidence links or documents added yet."})})]}),e.jsxs("div",{className:`${g?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsx("p",{className:`text-sm font-semibold ${g?"text-slate-100":"text-slate-800"}`,children:"Affected Outcomes"}),e.jsx("p",{className:`mt-1 text-xs ${g?"text-slate-300":"text-slate-500"}`,children:"Tick 1-3 outcomes directly impacted by this action. Outcome status is auto-derived from these linked actions."}),e.jsx("div",{className:`${g?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:(((Ca=t.objectives)==null?void 0:Ca[A.sourceComponentId])||[]).length?(((Ea=t.objectives)==null?void 0:Ea[A.sourceComponentId])||[]).map(S=>{const _=A.linkedObjectiveIds.includes(S.id);return e.jsxs("label",{className:`${g?"hover:bg-slate-700":"hover:bg-slate-50"} flex items-start gap-2 rounded px-2 py-1.5`,children:[e.jsx("input",{type:"checkbox",checked:_,onChange:()=>K(S.id),className:"mt-0.5"}),e.jsx("span",{className:`text-sm ${g?"text-slate-100":"text-slate-700"}`,children:S.text||"Untitled outcome"})]},S.id)}):e.jsx("p",{className:`px-2 py-1 text-sm ${g?"text-slate-300":"text-slate-500"}`,children:O("No outcomes are defined for this component yet.")})})]}),e.jsxs("div",{className:`${g?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsx("p",{className:`text-sm font-semibold ${g?"text-slate-100":"text-slate-800"}`,children:"Affected RAID Log Items"}),e.jsx("p",{className:`mt-1 text-xs ${g?"text-slate-300":"text-slate-500"}`,children:"Choose the Risk, Assumption, Issue or Dependency this action is resolving. A Completed action can't be closed against an open RAID item unless another action is also linked to it."}),(()=>{const S=(t.raidItems||[]).find(U=>U.id===A.action.raidItemId),_=(t.raidItems||[]).filter(U=>U.type===Z);return e.jsxs("div",{className:"mt-2 grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2",children:[e.jsx("label",{className:"sr-only",htmlFor:"action-raid-type-filter",children:"RAID item type"}),e.jsx("select",{id:"action-raid-type-filter","aria-label":"RAID item type",value:Z,onChange:U=>le(U.target.value),className:`rounded-md border px-2 py-1.5 text-sm ${g?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:["Risk","Assumption","Issue","Dependency"].map(U=>e.jsx("option",{value:U,children:U},U))}),e.jsx("label",{className:"sr-only",htmlFor:"action-raid-item",children:"RAID item"}),e.jsxs("select",{id:"action-raid-item","aria-label":"RAID item",value:A.action.raidItemId||"",onChange:U=>Xt({raidItemId:U.target.value||void 0}),className:`rounded-md border px-2 py-1.5 text-sm ${g?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"None"}),_.map(U=>e.jsx("option",{value:U.id,children:U.title||"Untitled RAID item"},U.id))]}),S?e.jsx("button",{type:"button",onClick:()=>G==null?void 0:G(S.id),className:`sm:col-span-2 justify-self-start text-sm font-semibold underline underline-offset-2 ${g?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#003087]"}`,children:"Go to RAID item →"}):null]})})()]}),e.jsxs("div",{className:`${g?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${g?"text-slate-100":"text-slate-800"}`,children:"Affected Component Lenses"}),e.jsx("span",{className:"inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-600",title:"Actions often contribute to other component lenses. Add those targets here so the same action is visible in each relevant lens.",children:"i"})]}),e.jsxs("div",{className:"mt-2 space-y-2",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2",children:[e.jsx("select",{value:A.targetPickerComponentId,onChange:S=>{const _=S.target.value,U=ne[_];fn(_,(U==null?void 0:U.lenses[0])||"")},className:`rounded-md border px-2.5 py-2 text-sm ${g?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:n.map(S=>e.jsx("option",{value:S.id,children:S.label},S.id))}),e.jsx("select",{value:A.targetPickerLens,onChange:S=>fn(A.targetPickerComponentId,S.target.value),className:`rounded-md border px-2.5 py-2 text-sm ${g?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:(((Ia=ne[A.targetPickerComponentId])==null?void 0:Ia.lenses)||[]).map(S=>e.jsx("option",{value:S,children:S},S))}),e.jsx("button",{type:"button",onClick:y,disabled:Mt(A.action,A.sourceComponentId,A.sourceLens).some(S=>S.componentId===A.targetPickerComponentId&&S.lens===A.targetPickerLens),title:Mt(A.action,A.sourceComponentId,A.sourceLens).some(S=>S.componentId===A.targetPickerComponentId&&S.lens===A.targetPickerLens)?"Already added":"Add selected affected lens",className:`${g?"border-cyan-500/50 bg-cyan-500/15 text-cyan-100 hover:bg-cyan-500/25":"border-cyan-300 bg-cyan-100 text-cyan-900 hover:bg-cyan-200"} rounded-md border px-3 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-60`,children:"Add Lens"})]}),e.jsx("div",{className:`${g?"border-slate-700":"border-slate-200"} overflow-hidden rounded border`,children:e.jsxs("table",{className:`min-w-full ${g?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:g?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Component"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Remove"})]})}),e.jsx("tbody",{className:`${g?"divide-slate-700":"divide-slate-100"} divide-y`,children:Mt(A.action,A.sourceComponentId,A.sourceLens).map(S=>{var _;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-2.5 py-2 text-sm ${g?"text-slate-100":"text-slate-700"}`,children:((_=ne[S.componentId])==null?void 0:_.label)||S.componentId}),e.jsx("td",{className:`px-2.5 py-2 text-sm ${g?"text-slate-100":"text-slate-700"}`,children:S.lens}),e.jsx("td",{className:"px-2.5 py-2",children:e.jsx("button",{type:"button",onClick:()=>D(S.componentId,S.lens),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},`${S.componentId}:${S.lens}`)})})]})})]})]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[A.mode==="edit"&&A.actionId?e.jsx("button",{type:"button",onClick:()=>{if(A.action.priority==="must"){window.alert("You are trying to delete what we have classified as a MUST action, and it shouldn't be deleted. Please re-review.");return}m(A.sourceComponentId,A.sourceLens,A.actionId),Ht()},className:"mr-auto rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100",children:"Delete Action"}):null,e.jsx("button",{type:"button",onClick:Ht,className:`${g?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Cancel"}),e.jsx("button",{type:"button",onClick:Rn,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Save Action"})]})]})}):null,M?e.jsx(qr,{onClose:()=>J(!1),darkMode:g}):null,Ee.length>0?e.jsx(Ji,{message:Ee[0].message,onDismiss:()=>q(S=>S.slice(1)),celebrate:!0},Ee[0].id):null,fe&&Te&&Se?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":"Outcome Details",className:`w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${g?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${g?"text-slate-100":"text-slate-900"}`,children:"Outcome Details"}),e.jsxs("div",{className:"flex items-center gap-2",children:[Te&&al(Te.id)?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>{gn(Te),R(null)},className:`${g?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Edit"}),e.jsx("button",{type:"button",onClick:()=>{$t(Te.id),R(null)},className:"rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-700 hover:bg-red-100",children:"Delete"})]}):null,e.jsx("button",{type:"button",onClick:()=>R(null),className:`${g?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]})]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${g?"text-slate-400":"text-slate-500"}`,children:"Outcome"}),e.jsx("p",{className:`mt-1 text-sm ${g?"text-slate-100":"text-slate-900"}`,children:Te.text||"Untitled outcome"})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${g?"text-slate-400":"text-slate-500"}`,children:"Owner"}),e.jsx("p",{className:`mt-1 text-sm ${g?"text-slate-100":"text-slate-900"}`,children:Te.owner||"Unassigned"})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${g?"text-slate-400":"text-slate-500"}`,children:"Status"}),e.jsx("span",{className:`mt-1 inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${Ya[Se]}`,children:Se})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${g?"text-slate-400":"text-slate-500"}`,children:"Linked Actions"}),it.length?e.jsx("div",{className:`mt-2 overflow-x-auto rounded-md border ${g?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:`min-w-full divide-y ${g?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"}`,children:[e.jsx("thead",{className:g?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Navigate"})]})}),e.jsx("tbody",{className:`divide-y ${g?"divide-slate-700":"divide-slate-100"}`,children:it.map(S=>{var U,de;const _=S.status?Gt[S.status]||Gt.Planned:Gt.Planned;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${g?"text-slate-100":"text-slate-700"}`,children:S.lens}),e.jsx("td",{className:`px-3 py-2 text-sm ${g?"text-slate-100":"text-slate-700"}`,children:((U=S.action)==null?void 0:U.text)||"Linked action not found"}),e.jsxs("td",{className:"px-3 py-2",children:[S.action?e.jsx("select",{"aria-label":`Current state for ${S.action.text}`,value:S.status||"Planned",onChange:be=>hn(S.lens,S.action,be.target.value),className:`min-w-[7.5rem] rounded-md border px-2 py-1 text-xs font-semibold ${_} focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b]`,children:qa.map(be=>e.jsx("option",{value:be,children:be},be))}):e.jsx("span",{className:"text-xs text-slate-500",children:"Not linked"}),S.temporalStatus==="Overdue start"||S.temporalStatus==="Overdue completion"?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:S.temporalStatus}):null]}),e.jsx("td",{className:"px-3 py-2",children:S.action?e.jsx("button",{type:"button",onClick:()=>gt(S.lens,S.action||void 0),className:`${g?"border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25":"border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Open Action"}):e.jsx("span",{className:`text-xs ${g?"text-slate-500":"text-slate-400"}`,children:"Unavailable"})})]},`${S.lens}:${((de=S.action)==null?void 0:de.id)||"missing"}`)})})]})}):e.jsx("p",{className:`mt-1 text-sm ${g?"text-slate-300":"text-slate-500"}`,children:"No linked actions assigned."})]})]})]})}):null,z?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":z.mode==="create"?"Add Outcome":"Edit Outcome",className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${g?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsx("h3",{className:`text-lg font-semibold ${g?"text-slate-100":"text-slate-900"}`,children:z.mode==="create"?"Add Outcome":"Edit Outcome"}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"objective-editor-text",className:`block text-xs font-medium ${g?"text-slate-300":"text-slate-700"}`,children:"Outcome description"}),e.jsx("textarea",{id:"objective-editor-text",value:z.text,onChange:S=>xe({...z,text:S.target.value}),className:`mt-1 w-full rounded-md border p-2 text-sm h-20 ${g?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"objective-editor-owner",className:`block text-xs font-medium ${g?"text-slate-300":"text-slate-700"}`,children:"Owner"}),e.jsxs("select",{id:"objective-editor-owner",value:z.owner,onChange:S=>xe({...z,owner:S.target.value}),className:`mt-1 w-full rounded-md border p-2 text-sm ${g?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Unassigned"}),He.map(S=>e.jsxs("option",{value:S.name,children:[S.name||"Unnamed",S.role?` - ${S.role}`:""]},S.id)),z.owner&&!He.some(S=>S.name===z.owner)?e.jsxs("option",{value:z.owner,children:[z.owner," (not on roster)"]}):null]})]})]}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:Ct,className:`${g?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Cancel"}),e.jsx("button",{type:"button",onClick:bt,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Save Outcome"})]})]})}):null,e.jsx(Mi,{open:ce,onCancel:()=>{Ne.current=null,j(!1)},onContinue:S=>{S&&st(Nn,!0);const _=Ne.current;Ne.current=null,j(!1),_==null||_()},darkMode:g}),e.jsx(Nt,{open:N.isOpen,onClose:N.close,title:"Assessing a component",darkMode:g,body:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Each component is assessed lens by lens: justify where you are, review its outcomes, then plan and track delivery actions for each readiness level."}),e.jsx("p",{children:'Click "What is this?" at the top for what the component covers, and "Evidence Links and Docs" at the bottom rounds up everything attached as evidence across all of its actions.'})]})})]})}const Bn=50;function Cl(t){const n=new Date(t);return Number.isNaN(n.getTime())?t:n.toLocaleString("en-GB",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function El({events:t,darkMode:n=!1}){const s=yt("audit-log"),[a,i]=d.useState("all"),[l,o]=d.useState("all"),[c,m]=d.useState("all"),[u,r]=d.useState(""),[h,x]=d.useState(1),p=d.useMemo(()=>["all",...Array.from(new Set(t.map(f=>f.eventType))).sort()],[t]),b=d.useMemo(()=>["all",...Array.from(new Set(t.map(f=>f.componentId).filter(Boolean))).sort()],[t]),C=d.useMemo(()=>["all",...Array.from(new Set(t.map(f=>f.actor).filter(Boolean))).sort()],[t]),w=d.useMemo(()=>{const f=u.trim().toLowerCase();return t.filter(v=>a==="all"?!0:v.eventType===a).filter(v=>l==="all"?!0:v.componentId===l).filter(v=>c==="all"?!0:v.actor===c).filter(v=>f?[v.summary,v.reason,v.entityId,v.lens].filter(Boolean).some(O=>String(O).toLowerCase().includes(f)):!0).sort((v,O)=>Date.parse(O.timestamp)-Date.parse(v.timestamp))},[t,a,l,c,u]),g=Math.max(1,Math.ceil(w.length/Bn)),k=Math.min(h,g),$=(k-1)*Bn,G=w.slice($,$+Bn);return e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:"Audit Log"}),e.jsx(jt,{onClick:s.reopen,darkMode:n})]}),e.jsx("p",{className:`text-sm mt-1 ${n?"text-slate-300":"text-slate-600"}`,children:"Timestamped history of CST changes, including who made each change."})]}),e.jsx(Nt,{open:s.isOpen,onClose:s.close,title:"Audit Log",darkMode:n,body:e.jsx("p",{children:"A timestamped history of changes made to your CST, including who made each change. Filter by event type, component, or actor, and expand a row to see exactly what changed."})}),e.jsxs("div",{className:`grid gap-3 md:grid-cols-4 rounded-lg border p-4 ${n?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${n?"text-slate-200":"text-slate-700"}`,children:"Event type"}),e.jsx("select",{value:a,onChange:f=>{i(f.target.value),x(1)},className:`w-full rounded-md border px-2 py-1.5 ${n?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:p.map(f=>e.jsx("option",{value:f,children:f==="all"?"All":f},f))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${n?"text-slate-200":"text-slate-700"}`,children:"Component"}),e.jsx("select",{value:l,onChange:f=>{o(f.target.value),x(1)},className:`w-full rounded-md border px-2 py-1.5 ${n?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:b.map(f=>e.jsx("option",{value:f,children:f==="all"?"All":f},f))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${n?"text-slate-200":"text-slate-700"}`,children:"Actor"}),e.jsx("select",{value:c,onChange:f=>{m(f.target.value),x(1)},className:`w-full rounded-md border px-2 py-1.5 ${n?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:C.map(f=>e.jsx("option",{value:f,children:f==="all"?"All":f},f))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${n?"text-slate-200":"text-slate-700"}`,children:"Search"}),e.jsx("input",{value:u,onChange:f=>{r(f.target.value),x(1)},placeholder:"summary, reason, id",className:`w-full rounded-md border px-2 py-1.5 ${n?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsx("div",{className:`rounded-lg border overflow-hidden ${n?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full text-sm",children:[e.jsx("thead",{className:n?"bg-slate-900 text-slate-200":"bg-slate-50 text-slate-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left",children:"When"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Who"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"What"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Context"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Details"})]})}),e.jsx("tbody",{className:n?"bg-slate-800 text-slate-100":"bg-white text-slate-800",children:G.length?G.map(f=>e.jsxs("tr",{className:n?"border-t border-slate-700":"border-t border-slate-100",children:[e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:Cl(f.timestamp)}),e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:f.actor||"Unknown user"}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{className:"font-medium",children:f.summary}),e.jsx("div",{className:`text-xs mt-1 ${n?"text-slate-300":"text-slate-600"}`,children:f.eventType})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{children:f.componentId||"-"}),e.jsx("div",{className:`text-xs ${n?"text-slate-300":"text-slate-600"}`,children:f.lens||"-"})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[f.reason?e.jsxs("div",{children:["Reason: ",f.reason]}):null,f.before||f.after?e.jsxs("details",{className:"mt-1",children:[e.jsx("summary",{className:"cursor-pointer text-xs underline",children:"Before/After"}),e.jsx("pre",{className:`mt-1 text-xs whitespace-pre-wrap ${n?"text-slate-300":"text-slate-600"}`,children:JSON.stringify({before:f.before,after:f.after},null,2)})]}):null]})]},f.id)):e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-6 text-center",colSpan:5,children:"No audit events found for the selected filters."})})})]})}),e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("span",{className:n?"text-slate-300":"text-slate-600",children:["Showing ",G.length?$+1:0,"-",Math.min($+Bn,w.length)," of"," ",w.length]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>x(f=>Math.max(1,f-1)),disabled:k<=1,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${n?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Previous"}),e.jsxs("span",{className:n?"text-slate-200":"text-slate-700",children:["Page ",k," / ",g]}),e.jsx("button",{type:"button",onClick:()=>x(f=>Math.min(g,f+1)),disabled:k>=g,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${n?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Next"})]})]})]})}function Il(t){if(!t)return!1;const n=new Date(t);return!isNaN(n.getTime())}function ds(t){return!t||!Il(t)?null:new Date(t)}function ao(t){const n=[],s=t.cst;if(!s.goLiveDate||!s.goLiveDate.trim())return n.push({field:"cst.goLiveDate",message:"Go live date is required."}),{isValid:!1,errors:n};const a=ds(s.goLiveDate);if(!a)return n.push({field:"cst.goLiveDate",message:"Go live date must be a valid date."}),{isValid:!1,errors:n};const i=ds(s.fullAdoptionDate);s.fullAdoptionDate&&!i&&n.push({field:"cst.fullAdoptionDate",message:"Full adoption date must be a valid date when provided."});const l=ds(s.benefitRealizationDate);return s.benefitRealizationDate&&!l&&n.push({field:"cst.benefitRealizationDate",message:"Benefit realization date must be a valid date when provided."}),i&&i<a&&n.push({field:"cst.fullAdoptionDate",message:"Full adoption date cannot be earlier than go live date."}),l&&l<(i||a)&&n.push({field:"cst.benefitRealizationDate",message:"Benefit realization date cannot be earlier than full adoption date (or go live when full adoption is empty)."}),{isValid:n.length===0,errors:n}}function Al(t){const n=d.useMemo(()=>t.errors.reduce((s,a)=>(s[a.field]||(s[a.field]=[]),s[a.field].push(a.message),s),{}),[t.errors]);return s=>{var a;return(a=n[s])==null?void 0:a[0]}}function Za(t){const n=[];(!t.trustName||t.trustName.trim()==="")&&n.push({field:"trustName",message:"Trust name is required"}),t.trustName&&t.trustName.length>255&&n.push({field:"trustName",message:"Trust name cannot exceed 255 characters"}),t.region&&t.region.length>100&&n.push({field:"region",message:"Region cannot exceed 100 characters"});const s=ao(t);return n.push(...s.errors),{isValid:n.length===0,errors:n}}function Ol({pathway:t,darkMode:n=!1}){return t==="pathway-1"?null:e.jsxs("div",{className:`mt-3 rounded-md border p-3 text-xs ${n?"border-amber-500/40 bg-amber-500/10 text-amber-100":"border-amber-300 bg-amber-50 text-amber-900"}`,children:[e.jsx("p",{className:"font-semibold",children:"Objectives and actions are currently Pathway 1 only"}),e.jsx("p",{className:"mt-1",children:"Every outcome and action in this tool right now is written for Pathway 1 (starting from scratch). Pathway 2 and Pathway 3 will need their own objectives and actions - those haven't been written yet, so components on this pathway show no outcomes or actions until pathway-specific content is added."})]})}function Rl(t){return t.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"export"}function io(t){var n;return(n=t==null?void 0:t.url)!=null&&n.trim()?"custom":((t==null?void 0:t.fallback)??"default")==="base"?"base":"default"}function Xs({aliases:t,onChange:n,darkMode:s,placeholder:a="Add text this link should also match...",emptyLabel:i="No extra matching text added yet.",addButtonLabel:l="Add"}){const[o,c]=d.useState(""),m=()=>{const u=o.trim();if(!u||t.some(r=>r.toLowerCase()===u.toLowerCase())){c("");return}n([...t,u]),c("")};return e.jsxs("div",{children:[t&&e.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[t.map(u=>e.jsxs("span",{className:`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${s?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[u,e.jsx("button",{type:"button",onClick:()=>n(t.filter(r=>r!==u)),"aria-label":`Remove "${u}"`,className:s?"text-slate-400 hover:text-slate-100":"text-slate-500 hover:text-slate-800",children:"×"})]},u)),!t.length&&e.jsx("span",{className:`text-xs ${s?"text-slate-500":"text-slate-400"}`,children:i})]}),e.jsxs("div",{className:"mt-2 flex gap-2",children:[e.jsx("input",{type:"text",value:o,onChange:u=>c(u.target.value),onKeyDown:u=>{u.key==="Enter"&&(u.preventDefault(),m())},placeholder:a,className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${s?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:m,className:We,children:l})]})]})}function _l({link:t,perLink:n,baseOverrideUrl:s,onSave:a,onClose:i,darkMode:l}){const[o,c]=d.useState(io(n)),[m,u]=d.useState((n==null?void 0:n.url)??""),[r,h]=d.useState((n==null?void 0:n.matchAliases)??[]),x=(s==null?void 0:s.trim())||qt.url,p=eo(t.label).find(w=>w!==t.label),b=[{value:"default",label:"Default Toolkit Link",url:t.url},{value:"base",label:"Project Specific Homepage",url:x},{value:"custom",label:"Custom URL",url:m}],C=()=>{if(o==="custom"&&!m.trim()){window.alert("Enter a custom URL, or choose Default or Base instead.");return}const w={fallback:o==="base"?"base":"default",url:o==="custom"?m.trim():void 0,matchAliases:r.length?r:void 0};a(o==="default"&&!r.length?void 0:w)};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":`Edit ${t.label} link`,className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${l?"text-slate-100":"text-slate-900"}`,children:t.label}),e.jsx("button",{type:"button",onClick:i,"aria-label":"Close",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${l?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:"mt-4 space-y-2",children:b.map(w=>e.jsxs("label",{className:`flex items-start gap-2 rounded-md border p-2.5 text-sm ${o===w.value?l?"border-blue-400 bg-blue-500/10":"border-blue-400 bg-blue-50":l?"border-slate-700":"border-slate-200"}`,children:[e.jsx("input",{type:"radio",name:`link-source-${t.key}`,checked:o===w.value,onChange:()=>c(w.value),className:"mt-1"}),e.jsxs("span",{className:"flex-1",children:[e.jsx("span",{className:`block font-medium ${l?"text-slate-100":"text-slate-800"}`,children:w.label}),w.value==="custom"&&o==="custom"?e.jsx("input",{type:"url",value:m,onChange:g=>u(g.target.value),placeholder:"https://...",className:`mt-1 w-full rounded border px-2 py-1.5 text-xs ${l?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}):w.url?e.jsx("a",{href:w.url,target:"_blank",rel:"noopener noreferrer",onClick:g=>g.stopPropagation(),className:`block truncate text-xs underline ${l?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:w.url}):e.jsx("span",{className:`block truncate text-xs ${l?"text-slate-400":"text-slate-500"}`,children:"No URL set yet."})]})]},w.value))}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${l?"text-slate-400":"text-slate-500"}`,children:"Match text"}),e.jsx("p",{className:`mt-1 text-xs ${l?"text-slate-300":"text-slate-500"}`,children:"This link is automatically matched in action/summary text. Add extra text below if it should match on other words too."}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-1.5",children:[e.jsxs("span",{className:`rounded-full border px-2 py-0.5 text-xs ${l?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[t.label," ",e.jsx("span",{className:"opacity-60",children:"(label)"})]}),p&&e.jsxs("span",{className:`rounded-full border px-2 py-0.5 text-xs ${l?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[p," ",e.jsx("span",{className:"opacity-60",children:"(auto-detected)"})]})]}),e.jsx("div",{className:"mt-2",children:e.jsx(Xs,{aliases:r,onChange:h,darkMode:l})})]}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:i,className:We,children:"Cancel"}),e.jsx("button",{type:"button",onClick:C,className:Kt,children:"Save"})]})]})})}function Dl({title:t,aliases:n,onSave:s,onClose:a,darkMode:i}){const[l,o]=d.useState(n);return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":`Match text for ${t}`,className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${i?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-900"}`,children:[t," - match text"]}),e.jsx("button",{type:"button",onClick:a,"aria-label":"Close",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${i?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("p",{className:`mt-2 text-xs ${i?"text-slate-300":"text-slate-500"}`,children:"This link is automatically matched by its name. Add extra text below if it should match on other words too."}),e.jsx("div",{className:"mt-3",children:e.jsx(Xs,{aliases:l,onChange:o,darkMode:i})}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:a,className:We,children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>s(l),className:Kt,children:"Save"})]})]})})}function Pl(t){const n=qi[t]||[],s=new Map,a=new Map;return n.forEach(i=>{const l=an[i];((l==null?void 0:l.inputs)??[]).forEach(o=>s.set(o.key,o)),((l==null?void 0:l.deliverables)??[]).forEach(o=>a.set(o.key,o))}),{inputs:[...s.values()],deliverables:[...a.values()]}}function $l({orgProfile:t,onProfileUpdate:n,components:s,onGoToIntroduction:a,onContinueToVision:i,onGoToWhereAmINow:l,darkMode:o=!1,currentUserId:c,onCurrentUserChange:m,showExternalLinksSection:u=!1}){var N,W,P,L,X,ee,ye,Ce,Re,_e,He,mt,at,ut,zt,Jt;const[r,h]=d.useState(t),[x,p]=d.useState(null),[b,C]=d.useState(null),w=d.useRef(null),g=yt("cst-personalisation"),k=Za(r),$=Al(k);d.useEffect(()=>{h(t)},[t]);const G=d.useCallback(I=>{const V={...r,trustName:I};h(V),n(V)},[r,n]),f=d.useCallback(I=>{const V={...r,projectName:I};h(V),n(V)},[r,n]),v=d.useCallback(I=>{const V={...r,leadName:I};h(V),n(V)},[r,n]),[O,E]=d.useState(null),B=d.useCallback(I=>{I!==r.cst.pathway&&E(I)},[r.cst.pathway]),Y=d.useCallback(()=>{if(!O)return;const I={...r,cst:{...r.cst,pathway:O}};h(I),n(I),E(null)},[O,r,n]),se=d.useCallback(()=>{E(null)},[]),me=d.useCallback((I,V)=>{const ne={...r,cst:{...r.cst,[I]:V}};h(ne),n(ne)},[r,n]),A=d.useCallback(I=>{const V={...r,cst:{...r.cst,toolkitChoice:I}};h(V),n(V)},[r,n]),pe=d.useCallback(I=>{const V={...r,linkOverrides:I};h(V),n(V)},[r,n]),M=d.useCallback((I,V)=>{const ne={...r.componentFurtherReading};V.trim()?ne[I]=V.trim():delete ne[I];const ve={...r,componentFurtherReading:ne};h(ve),n(ve)},[r,n]),J=d.useCallback(I=>{var Pe;const V={key:`custom-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,label:"",url:"",type:"additional"},ne={...r.customComponentLinks,[I]:[...((Pe=r.customComponentLinks)==null?void 0:Pe[I])||[],V]},ve={...r,customComponentLinks:ne};h(ve),n(ve)},[r,n]),Ee=d.useCallback((I,V,ne,ve)=>{var Te;const Pe=((Te=r.customComponentLinks)==null?void 0:Te[I])||[],Ye={...r.customComponentLinks,[I]:Pe.map(Se=>Se.key===V?{...Se,[ne]:ve}:Se)},ze={...r,customComponentLinks:Ye};h(ze),n(ze)},[r,n]),q=d.useCallback((I,V,ne)=>{var ze;const ve=((ze=r.customComponentLinks)==null?void 0:ze[I])||[],Pe={...r.customComponentLinks,[I]:ve.map(Te=>Te.key===V?{...Te,matchAliases:ne.length?ne:void 0}:Te)},Ye={...r,customComponentLinks:Pe};h(Ye),n(Ye)},[r,n]),re=d.useCallback((I,V)=>{var Ye;const ne=((Ye=r.customComponentLinks)==null?void 0:Ye[I])||[],ve={...r.customComponentLinks,[I]:ne.filter(ze=>ze.key!==V)},Pe={...r,customComponentLinks:ve};h(Pe),n(Pe)},[r,n]),ce=d.useCallback(()=>{const I={id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:"",role:""},V={...r,teamMembers:[...r.teamMembers||[],I]};h(V),n(V)},[r,n]),j=d.useCallback((I,V,ne)=>{const ve={...r,teamMembers:(r.teamMembers||[]).map(Pe=>Pe.id===I?{...Pe,[V]:ne}:Pe)};h(ve),n(ve)},[r,n]),Z=d.useCallback(I=>{const V={...r,teamMembers:(r.teamMembers||[]).filter(ne=>ne.id!==I)};h(V),n(V),c===I&&m("")},[r,n,c,m]),le=r.stakeholderReferenceLists||es,Ne=d.useCallback((I,V)=>{const ne={...r,stakeholderReferenceLists:{...le,[I]:V}};h(ne),n(ne)},[r,n,le]),fe=r.coreLinks&&r.coreLinks.length>0?r.coreLinks:Yi,R=d.useCallback(()=>{const I={key:`core-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,label:"",url:"",type:"core"},V={...r,coreLinks:[...fe,I]};h(V),n(V)},[r,fe,n]),z=d.useCallback((I,V,ne)=>{const ve={...r,coreLinks:fe.map(Pe=>Pe.key===I?{...Pe,[V]:ne}:Pe)};h(ve),n(ve)},[r,fe,n]),xe=d.useCallback((I,V)=>{const ne={...r,coreLinks:fe.map(ve=>ve.key===I?{...ve,matchAliases:V.length?V:void 0}:ve)};h(ne),n(ne)},[r,fe,n]),F=d.useCallback(I=>{const V={...r,coreLinks:fe.filter(ne=>ne.key!==I)};h(V),n(V)},[r,fe,n]),H=r.toolLinks||[],te=d.useCallback(()=>{const I="highlight-builder",V={key:`tool-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,tool:I,matchText:Vn[I].matchText},ne={...r,toolLinks:[...H,V]};h(ne),n(ne)},[r,H,n]),$e=d.useCallback((I,V)=>{const ne={...r,toolLinks:H.map(ve=>ve.key===I?{...ve,tool:V,matchText:Vn[V].matchText}:ve)};h(ne),n(ne)},[r,H,n]),Ge=d.useCallback((I,V)=>{const ne={...r,toolLinks:H.map(ve=>ve.key===I?{...ve,matchText:V}:ve)};h(ne),n(ne)},[r,H,n]),T=d.useCallback(I=>{const V={...r,toolLinks:H.filter(ne=>ne.key!==I)};h(V),n(V)},[r,H,n]),ue=r.phaseLinks||{},oe=d.useCallback((I,V)=>{const ne={...r,phaseLinks:{...ue,[I]:V}};h(ne),n(ne)},[r,ue,n]),Oe=d.useCallback(I=>{const V={...r,externalLinksInitiated:I};h(V),n(V)},[r,n]),De=d.useCallback(()=>{const I={schemaVersion:"cst-v1",exportedAt:new Date().toISOString(),orgProfile:r},V=`cst-personalisation-${r.trustName?Rl(r.trustName):"export"}.json`;Yt(V,JSON.stringify(I,null,2),"application/json")},[r]),Le=d.useCallback(()=>{var I;(I=w.current)==null||I.click()},[]),Ue=d.useCallback(async I=>{var ne;const V=(ne=I.target.files)==null?void 0:ne[0];if(I.target.value="",!!V)try{const ve=await V.text(),Pe=JSON.parse(ve);if(!Pe.orgProfile||typeof Pe.orgProfile!="object"){window.alert("This file does not contain Project Profile data.");return}const Ye=ts(Pe.orgProfile),ze=Za(Ye);if(!window.confirm("Import this Project Profile file? This replaces your current organisation profile, pathway/timeline, toolkit links, further reading, core links and team members."+(ze.errors.length?`

Note: the imported data has ${ze.errors.length} validation warning(s) you can fix after importing.`:"")))return;h(Ye),n(Ye)}catch{window.alert("Unable to read this file. Please choose a valid Project Profile export.")}},[n]);return e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-800"}`,children:"Project Profile"}),e.jsx(jt,{onClick:g.reopen,darkMode:o})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:Le,className:We,children:"Import Setup"}),e.jsx("input",{ref:w,type:"file",accept:"application/json",className:"hidden",onChange:Ue}),e.jsx("button",{type:"button",onClick:De,className:We,children:"Export Setup"}),e.jsx("button",{type:"button",onClick:a,className:We,"data-testid":"cst-show-intro-button",children:"Go to Introduction"}),e.jsx("button",{type:"button",onClick:i,disabled:!r.trustName.trim(),title:r.trustName.trim()?void 0:"Add a trust name below first so the rest of the tool unlocks",className:`${Kt} disabled:cursor-not-allowed disabled:opacity-50`,"data-testid":"cst-continue-to-vision-button",children:"Continue to Vision →"})]})]}),e.jsx("p",{className:`text-sm -mt-4 ${o?"text-slate-300":"text-slate-600"}`,children:"This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways it follows, and how it's tracking against its readiness phases."}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 1: Organisation profile"}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Provide some initial details to the project name, and change manager"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-trust-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Organisation Name"}),e.jsx("input",{id:"org-trust-name",type:"text","data-testid":"cst-trust-name-input",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:r.trustName,onChange:I=>G(I.target.value),"aria-invalid":!!$("trustName"),"aria-describedby":$("trustName")?"org-trust-name-error":void 0}),$("trustName")?e.jsx("p",{id:"org-trust-name-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:$("trustName")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-project-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Programme / Project Name"}),e.jsx("input",{id:"org-project-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:r.projectName||"",onChange:I=>f(I.target.value)})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-lead-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Lead Submitter (Change Lead)"}),e.jsx("input",{id:"org-lead-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:r.leadName||"",onChange:I=>v(I.target.value)})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 2: Pathway and timeline"}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Choose the full pathway title for your programme, then set key timeline dates."})]}),e.jsx("div",{className:"mt-3",children:e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-pathway",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Pathway"}),e.jsx("select",{id:"cst-pathway",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:r.cst.pathway,onChange:I=>B(I.target.value),"aria-invalid":!!$("cst.pathway"),"aria-describedby":$("cst.pathway")?"cst-pathway-error":void 0,children:Yn.map(I=>e.jsx("option",{value:I.value,children:I.label},I.value))}),$("cst.pathway")?e.jsx("p",{id:"cst-pathway-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:$("cst.pathway")}):null]})}),e.jsx(Ol,{pathway:r.cst.pathway,darkMode:o}),e.jsxs("div",{className:"mt-3 grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-go-live",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Go Live Date (required)"}),e.jsx("input",{id:"cst-go-live",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:r.cst.goLiveDate,onChange:I=>me("goLiveDate",I.target.value),"aria-invalid":!!$("cst.goLiveDate"),"aria-describedby":$("cst.goLiveDate")?"cst-go-live-error":void 0}),$("cst.goLiveDate")?e.jsx("p",{id:"cst-go-live-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:$("cst.goLiveDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-full-adoption",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Full Adoption Date (optional)"}),e.jsx("input",{id:"cst-full-adoption",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:r.cst.fullAdoptionDate,onChange:I=>me("fullAdoptionDate",I.target.value),"aria-invalid":!!$("cst.fullAdoptionDate"),"aria-describedby":$("cst.fullAdoptionDate")?"cst-full-adoption-error":void 0}),$("cst.fullAdoptionDate")?e.jsx("p",{id:"cst-full-adoption-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:$("cst.fullAdoptionDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-benefit",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Benefit Realisation Date (optional)"}),e.jsx("input",{id:"cst-benefit",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:r.cst.benefitRealizationDate,onChange:I=>me("benefitRealizationDate",I.target.value),"aria-invalid":!!$("cst.benefitRealizationDate"),"aria-describedby":$("cst.benefitRealizationDate")?"cst-benefit-error":void 0}),$("cst.benefitRealizationDate")?e.jsx("p",{id:"cst-benefit-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:$("cst.benefitRealizationDate")}):null]})]}),k.errors.filter(I=>I.field.startsWith("cst.")).length>0?e.jsxs("div",{className:`mt-4 rounded-md border p-3 ${o?"border-amber-500/40 bg-amber-500/10":"border-amber-300 bg-amber-50"}`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-amber-200":"text-amber-800"}`,children:"CST validation warnings"}),e.jsx("ul",{className:`mt-2 space-y-1 text-sm ${o?"text-amber-100":"text-amber-900"}`,children:k.errors.filter(I=>I.field.startsWith("cst.")).map(I=>e.jsxs("li",{children:["- ",I.message]},I.field+I.message))})]}):null]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 3: Team Members"}),e.jsx("p",{className:`text-sm mt-1 ${o?"text-slate-300":"text-slate-600"}`,children:"Add the people working on this programme so actions and readiness slides can be assigned to a named owner. This roster is saved with the CST; who you're signed in as is remembered on this device only."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-current-user",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"You are signed in as"}),e.jsxs("select",{id:"cst-current-user",value:c||"",onChange:I=>m(I.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 md:w-1/2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Not selected"}),(r.teamMembers||[]).map(I=>e.jsxs("option",{value:I.id,children:[I.name||"Unnamed",I.role?` - ${I.role}`:""]},I.id))]})]}),e.jsxs("div",{className:"space-y-2",children:[(r.teamMembers||[]).map(I=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2 items-center",children:[e.jsx("input",{value:I.name,onChange:V=>j(I.id,"name",V.target.value),placeholder:"Name",className:`rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("input",{value:I.role,onChange:V=>j(I.id,"role",V.target.value),placeholder:"Role (e.g. Change Lead)",className:`rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("button",{type:"button",onClick:()=>Z(I.id),className:"shrink-0 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},I.id)),(r.teamMembers||[]).length?null:e.jsx("p",{className:`text-sm ${o?"text-slate-400":"text-slate-500"}`,children:"No team members added yet."})]}),e.jsx("button",{type:"button",onClick:ce,className:We,children:"+ Add Team Member"})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Stakeholder Reference Data"}),e.jsx("p",{className:`text-sm mt-1 ${o?"text-slate-300":"text-slate-600"}`,children:"Groups, Sub-Groups, Departments and Relationships used by the Stakeholder Analysis tool - defined once here so every stakeholder record uses the same options."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-1 gap-4",children:[{key:"groups",label:"Groups",placeholder:"Add a group..."},{key:"subGroups",label:"Sub-Groups",placeholder:"Add a sub-group..."},{key:"departments",label:"Departments",placeholder:"Add a department..."},{key:"relationships",label:"Relationships",placeholder:"Add a relationship..."}].map(({key:I,label:V,placeholder:ne})=>e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:V}),e.jsx(Xs,{aliases:le[I],onChange:ve=>Ne(I,ve),darkMode:o,placeholder:ne,emptyLabel:"None added yet.",addButtonLabel:`Add ${V.toLowerCase()}`})]},I))})]}),e.jsxs("div",{className:`flex flex-wrap items-center justify-between gap-3 rounded-lg border p-5 ${o?"border-blue-500/30 bg-blue-500/10":"border-blue-200 bg-blue-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-blue-100":"text-blue-900"}`,children:"What phase are you currently in?"}),e.jsx("p",{className:`mt-1 text-xs ${o?"text-blue-200":"text-blue-800"}`,children:"Answer a few quick questions and see your readiness by component to figure out where you really are in the change journey."})]}),e.jsx("button",{type:"button",onClick:l,className:Kt,children:"Where am I now?"})]}),e.jsx("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 4: External links"}),e.jsxs("label",{className:`flex items-center gap-2 text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:[e.jsx("input",{type:"checkbox",checked:!!r.externalLinksInitiated,onChange:I=>Oe(I.target.checked)}),"Links initiated"]})]}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:`This is normally only set up once at the start of a project. Once you're done, tick "Links initiated" to hide this section - re-enable "Show external links section" in Settings if you need to come back to it.`}),!r.externalLinksInitiated||u?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"All toolkit links across the tool point to the NHS Future platform by default. You can override the base toolkit destination for your organisation, or change individual links independently."}),e.jsxs("div",{className:`mt-3 rounded-md border p-3 text-xs ${o?"border-blue-500/30 bg-blue-500/10 text-blue-100":"border-blue-200 bg-blue-50 text-blue-900"}`,children:[e.jsx("p",{className:"font-semibold",children:"Fallback reference"}),e.jsxs("p",{className:"mt-1",children:["Project Specific Homepage:"," ",e.jsx("span",{className:"font-medium",children:qt.label})," (",qt.url,")"]}),e.jsx("p",{className:"mt-1",children:"Default Toolkit Link: the original NHS Future link defined per guidance item."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("label",{htmlFor:"cst-toolkit-choice",className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Default toolkit for assistant preview"}),e.jsx("select",{id:"cst-toolkit-choice",value:r.cst.toolkitChoice,onChange:I=>A(I.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:qo.map(I=>e.jsx("option",{value:I.key,children:I.label},I.key))}),e.jsx("p",{className:`mt-2 text-xs ${o?"text-slate-300":"text-slate-500"}`,children:"This controls which toolkit the chatbot-style assistant opens by default across the tool."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Project Specific Homepage"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"Replaces the Change Management Toolkit destination for all links that fall back to it."}),e.jsxs("p",{className:"mt-1 text-xs",children:["Currently:"," ",e.jsx("a",{href:Ut(((P=(W=(N=r.linkOverrides)==null?void 0:N.base)==null?void 0:W.url)==null?void 0:P.trim())||qt.url),target:"_blank",rel:"noopener noreferrer",className:`underline ${o?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:((ee=(X=(L=r.linkOverrides)==null?void 0:L.base)==null?void 0:X.url)==null?void 0:ee.trim())||qt.url})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Toolkit name"}),e.jsx("input",{type:"text",placeholder:qt.label,value:((Ce=(ye=r.linkOverrides)==null?void 0:ye.base)==null?void 0:Ce.label)??"",onChange:I=>{var V;return pe({...r.linkOverrides,base:{...(V=r.linkOverrides)==null?void 0:V.base,label:I.target.value||void 0}})},className:`w-full rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Toolkit URL"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:qt.url,value:((_e=(Re=r.linkOverrides)==null?void 0:Re.base)==null?void 0:_e.url)??"",onChange:I=>{var V;return pe({...r.linkOverrides,base:{...(V=r.linkOverrides)==null?void 0:V.base,url:I.target.value||void 0}})},className:`flex-1 min-w-0 rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),((mt=(He=r.linkOverrides)==null?void 0:He.base)==null?void 0:mt.url)&&e.jsx("button",{type:"button",onClick:()=>{var I;return pe({...r.linkOverrides,base:{...(I=r.linkOverrides)==null?void 0:I.base,url:void 0}})},className:`shrink-0 rounded-md border px-3 py-2 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Reset"})]})]})]})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Additional Links"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"General reference links that aren't tied to a single component - shown here and matched into action/summary text across every component."})]}),e.jsx("div",{className:"space-y-2",children:fe.map(I=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto,auto] gap-2 items-center",children:[e.jsx("input",{type:"text",placeholder:"Link name",value:I.label,onChange:V=>z(I.key,"label",V.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("input",{type:"url",placeholder:"https://...",value:I.url,onChange:V=>z(I.key,"url",V.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>C({link:I}),"aria-label":`Edit match text for ${I.label||"this core link"}`,className:`shrink-0 rounded border px-1.5 py-1.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"}),e.jsx("button",{type:"button",onClick:()=>F(I.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},I.key))}),e.jsx("button",{type:"button",onClick:R,className:We,children:"+ Add Core Link"})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Tool linking"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"Matches text in action/summary bodies and turns it into a button that opens an in-app tool, instead of a link to a URL."})]}),e.jsx("div",{className:"space-y-2",children:H.map(I=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto] gap-2 items-center",children:[e.jsx("select",{value:I.tool,onChange:V=>$e(I.key,V.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Fi.map(V=>e.jsx("option",{value:V,children:Vn[V].label},V))}),e.jsx("input",{type:"text",placeholder:"Matched text",value:I.matchText,onChange:V=>Ge(I.key,V.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>T(I.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},I.key))}),e.jsx("button",{type:"button",onClick:te,className:We,children:"+ Add Tool Link"})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Phase linking"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:'Set a landing page URL for each phase - shown as a "Visit phase page" link when that phase is expanded on the Daily Phase Overview.'})]}),e.jsx("div",{className:"space-y-2",children:Object.entries(Je).map(([I,V])=>{const ne=Number(I);return e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-2 items-center",children:[e.jsxs("label",{htmlFor:`phase-link-${ne}`,className:`text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:["Phase ",ne,": ",V]}),e.jsx("input",{id:`phase-link-${ne}`,type:"url",placeholder:"https://...",value:ue[ne]||"",onChange:ve=>oe(ne,ve.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`})]},ne)})})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Component links"}),e.jsxs("p",{className:`text-xs ${o?"text-slate-300":"text-slate-500"}`,children:[`Set the "Further Reading" link shown on each component's overview panel, and override any of its individual guidance links. Each link shows whether it currently points at the `,e.jsx("strong",{children:"Default Toolkit Link"})," (the original NHS Future link), ",e.jsx("strong",{children:"Project Specific Homepage"})," (your organisation's override above), or a ",e.jsx("strong",{children:"Custom"})," URL you've set - click the pencil to change it. Additional links can be hidden from Settings if you only want the essentials."]}),s.map(I=>{var Ye,ze,Te;const V=Pl(I.id),ne=[...V.inputs,...V.deliverables],ve=ne.filter(Se=>{var it,ot,Dt,kt;return(kt=(Dt=(ot=(it=r.linkOverrides)==null?void 0:it.links)==null?void 0:ot[Se.key])==null?void 0:Dt.url)==null?void 0:kt.trim()}).length,Pe=!!((Ye=r.componentFurtherReading)!=null&&Ye[I.id]);return e.jsxs("details",{className:`group overflow-hidden rounded-md border ${o?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between gap-3 p-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] ${o?"bg-slate-800 text-slate-200 hover:bg-slate-700":"bg-slate-50 text-slate-700 hover:bg-blue-50"} [&::-webkit-details-marker]:hidden`,children:[e.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[e.jsx("span",{"aria-hidden":"true",className:`shrink-0 text-lg font-bold leading-none transition-transform group-open:rotate-45 ${o?"text-blue-300":"text-[#005eb8]"}`,children:"+"}),e.jsx("span",{className:"truncate",children:I.label})]}),e.jsxs("span",{className:"flex items-center gap-2",children:[Pe&&e.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-emerald-500/20 text-emerald-300":"bg-emerald-100 text-emerald-700"}`,children:"Further reading set"}),ve>0&&e.jsxs("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-blue-500/20 text-blue-300":"bg-blue-100 text-blue-700"}`,children:[ve," override",ve!==1?"s":""]})]})]}),e.jsxs("div",{className:`border-t divide-y ${o?"border-slate-700 divide-slate-700":"border-slate-200 divide-slate-100"}`,children:[e.jsxs("div",{className:"p-3 space-y-1.5",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:"Further reading"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:"https://...",value:((ze=r.componentFurtherReading)==null?void 0:ze[I.id])??"",onChange:Se=>M(I.id,Se.target.value),className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),Pe&&e.jsx("button",{type:"button",onClick:()=>M(I.id,""),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Clear"})]})]}),!ne.length&&e.jsx("p",{className:`p-3 text-xs ${o?"text-slate-500":"text-slate-400"}`,children:"No default guidance links for this component - add one below."}),["inputs","deliverables"].map(Se=>{const it=V[Se]??[];return it.length?e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:Se}),it.map(ot=>{var Ct,bt;const Dt=(bt=(Ct=r.linkOverrides)==null?void 0:Ct.links)==null?void 0:bt[ot.key],kt=Ks(ot,r.linkOverrides),Pt=io(Dt),un={default:o?"border-amber-500/40 bg-amber-500/15 text-amber-200":"bg-amber-50 border-amber-200 text-amber-800",custom:o?"border-green-500/40 bg-green-500/15 text-green-200":"bg-green-50 border-green-200 text-green-800",base:o?"border-red-500/30 bg-red-500/10 text-red-200":"bg-red-50 border-red-100 text-red-700"},gn={default:"Default Toolkit Link",custom:"Custom",base:"Project Specific Homepage"};return e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-700"}`,children:[ot.type!=="core"?"(Optional) ":"",ot.label]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("a",{href:kt.url,target:"_blank",rel:"noopener noreferrer",title:kt.url,className:`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${un[Pt]}`,children:gn[Pt]}),e.jsx("button",{type:"button",onClick:()=>p(ot),"aria-label":`Edit ${ot.label} link`,className:`shrink-0 rounded-md border px-1.5 py-0.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"})]})]},ot.key)})]},Se):null}),e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:"Custom links"}),(((Te=r.customComponentLinks)==null?void 0:Te[I.id])||[]).map(Se=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto,auto] gap-2 items-center",children:[e.jsx("input",{type:"text",placeholder:"Link name",value:Se.label,onChange:it=>Ee(I.id,Se.key,"label",it.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("input",{type:"url",placeholder:"https://...",value:Se.url,onChange:it=>Ee(I.id,Se.key,"url",it.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>C({link:Se,componentId:I.id}),"aria-label":`Edit match text for ${Se.label||"this link"}`,className:`shrink-0 rounded border px-1.5 py-1.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"}),e.jsx("button",{type:"button",onClick:()=>re(I.id,Se.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},Se.key)),e.jsx("button",{type:"button",onClick:()=>J(I.id),className:We,children:"+ Add Link"})]})]})]},I.id)})]})]}):e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:'External links were set up at project start. Turn on "Show external links section" in Settings if you need to come back and edit them.'})]})}),x&&e.jsx(_l,{link:x,perLink:(ut=(at=r.linkOverrides)==null?void 0:at.links)==null?void 0:ut[x.key],baseOverrideUrl:(Jt=(zt=r.linkOverrides)==null?void 0:zt.base)==null?void 0:Jt.url,onSave:I=>{var ne;const V={...(ne=r.linkOverrides)==null?void 0:ne.links};I?V[x.key]=I:delete V[x.key],pe({...r.linkOverrides,links:V}),p(null)},onClose:()=>p(null),darkMode:o}),b&&e.jsx(Dl,{title:b.link.label||"Link",aliases:b.link.matchAliases||[],onSave:I=>{b.componentId?q(b.componentId,b.link.key,I):xe(b.link.key,I),C(null)},onClose:()=>C(null),darkMode:o}),O&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-lg rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-900"}`,children:["Change pathway to ",Ti[O],"?"]}),e.jsx("div",{className:`mt-3 space-y-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:O==="pathway-1"?e.jsx("p",{children:"This will regenerate every component's outcomes and actions for Pathway 1. Any items you've added yourself are kept."}):e.jsx("p",{children:"Pathway 2 and Pathway 3 don't have their own outcomes and actions written yet, so this will clear the Pathway 1 stand-in content instead of leaving it in place - components will show an honest empty state until pathway-specific content is added. Any items you've added yourself are kept."})}),e.jsxs("div",{className:"mt-5 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:se,className:We,children:"Cancel"}),e.jsx("button",{type:"button",onClick:Y,className:"inline-flex items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Confirm change"})]})]})}),e.jsx(Nt,{open:g.isOpen,onClose:g.close,title:"Project Profile",darkMode:o,body:e.jsx("p",{children:"This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways it follows, and how it's tracking against its readiness phases. You can export or import just this page's data, and manage the external links shown throughout the tool."})})]})}function Tl({steps:t,onComponentClick:n,onActionView:s,colorAccessibilityMode:a="standard",darkMode:i=!1}){const[l,o]=d.useState({}),c=a==="color-blind-friendly"?ur:Hi;return e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"What To Do Next"}),e.jsx("span",{className:`text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Your current phase"})]}),e.jsx("p",{className:`text-sm mb-4 ${i?"text-slate-300":"text-slate-500"}`,children:"Every component in your current phase that still has pending actions, ranked by timeline risk - overdue first."}),t.length>0?e.jsx("div",{className:"space-y-3",children:t.map(m=>{var h;const u=!!l[m.componentId],r=m.outstandingActions.length;return e.jsxs("div",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("button",{type:"button",onClick:()=>n(m.componentId),className:"flex w-full items-center justify-between gap-3 text-left",children:[e.jsx("span",{className:`text-sm font-semibold hover:underline ${i?"text-slate-100":"text-slate-800"}`,children:m.componentLabel}),e.jsx("span",{title:m.bragReason,className:`text-xs font-semibold rounded px-2.5 py-0.5 ${c[m.bragStatus]}`,children:m.bragStatus})]}),e.jsx("p",{className:`text-sm mt-1 ${i?"text-slate-300":"text-slate-600"}`,children:m.summary}),(h=m.toolkitLinks)!=null&&h.length?e.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:m.toolkitLinks.map(x=>e.jsx("a",{href:x.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-medium text-[#005eb8] underline",children:x.label},`${m.componentId}-${x.url}`))}):null,r>0&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("button",{type:"button",onClick:()=>o(x=>({...x,[m.componentId]:!x[m.componentId]})),className:`text-xs font-semibold underline ${i?"text-slate-300 hover:text-slate-100":"text-slate-600 hover:text-slate-900"}`,children:[u?"Hide":"Show"," outstanding action",r===1?"":"s"," (",r,")"]}),u&&e.jsx("div",{className:`mt-2 overflow-x-auto rounded-md border ${i?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full divide-y text-xs",children:[e.jsx("thead",{className:i?"bg-slate-800":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Lens"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Status"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"View"})]})}),e.jsx("tbody",{className:`divide-y ${i?"divide-slate-700":"divide-slate-100"}`,children:m.outstandingActions.map(x=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-2 py-1.5 font-medium ${i?"text-slate-200":"text-slate-700"}`,children:x.lens}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:x.text}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:x.owner||"Unassigned"}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:x.status||"-"}),e.jsx("td",{className:"px-2 py-1.5",children:e.jsx("button",{type:"button",onClick:()=>s(m.componentId,x.lens,x.id),className:`font-semibold underline ${i?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:"View"})})]},x.id))})]})})]})]},m.componentId)})}):e.jsx("p",{className:`text-sm ${i?"text-slate-400":"text-slate-500"}`,children:"Nothing pending for your current phase. Continue tracking actions and maintain evidence quality."})]})}function Ll({components:t,store:n,getEntry:s,onComponentClick:a,darkMode:i=!1}){const[l,o]=d.useState(null),c=t.reduce((u,r)=>(u[r.phase]=u[r.phase]||[],u[r.phase].push(r),u),{}),m=(u,r)=>{const h=`${u}:${r}`;o(x=>x===h?null:h)};return e.jsxs("details",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} group overflow-hidden rounded-lg border shadow-sm`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-lg font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] [&::-webkit-details-marker]:hidden ${i?"text-slate-100 hover:bg-slate-700":"text-slate-800 hover:bg-slate-50"}`,children:[e.jsx("span",{children:"Programme Change Hierarchy"}),e.jsx("span",{className:"text-2xl font-normal transition-transform group-open:rotate-45",children:"+"})]}),e.jsxs("div",{className:"border-t border-slate-200 p-6 dark:border-slate-700",children:[e.jsxs("p",{className:`mt-1 mb-4 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:["Your programme has ",t.length," components, each viewed through one or more lenses. A component is a change topic you assess and track. A lens is the perspective used to assess it (e.g. leadership, risk, capability). Click a lens to see its actions, or open the full assessment."]}),e.jsx("div",{className:"space-y-5",children:Li.filter(u=>{var r;return(r=c[u])==null?void 0:r.length}).map(u=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:`text-sm font-semibold ${i?"text-slate-100":"text-slate-700"}`,children:["Phase ",u,": ",Je[u]]}),e.jsx("div",{className:"space-y-2",children:c[u].map(r=>{const h=r.lenses.reduce((p,b)=>{const C=s(r.id,b);return{total:p.total+C.actions.length,completed:p.completed+C.actions.filter(w=>w.status==="Completed").length}},{total:0,completed:0}),x=vr(n,r.id,s);return e.jsxs("div",{"data-testid":`cst-component-card-${r.id}`,className:`w-full rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("span",{className:`font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:r.label}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:`text-xs ${i?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",Rs(r.target)]}),e.jsx("button",{type:"button",onClick:()=>a(r.id),className:`text-xs font-semibold underline ${i?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:"Open full assessment"})]})]}),e.jsx("div",{className:"mt-2 flex flex-wrap gap-1.5",children:r.lenses.map(p=>{const b=s(r.id,p),C=l===`${r.id}:${p}`;return e.jsxs("button",{type:"button",onClick:()=>m(r.id,p),"aria-expanded":C,className:`text-xs px-2 py-1 rounded-full border transition-colors ${C?i?"border-blue-400 bg-blue-500/25 text-blue-100":"border-blue-400 bg-blue-100 text-blue-900":b.score>=r.target?i?"border-green-500/40 bg-green-500/15 text-green-200 hover:bg-green-500/25":"bg-green-50 border-green-200 text-green-800 hover:bg-green-100":b.score>0?i?"border-amber-500/40 bg-amber-500/15 text-amber-200 hover:bg-amber-500/25":"bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100":i?"border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700":"bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"}`,children:[p,": ",b.score,"/",r.target]},p)})}),e.jsxs("p",{className:`mt-2 text-xs ${i?"text-slate-300":"text-slate-500"}`,children:["Lens actions: ",h.completed,"/",h.total," complete · Outcomes: ",x.completed,"/",x.total," complete"]}),r.lenses.map(p=>{if(!(l===`${r.id}:${p}`))return null;const C=s(r.id,p);return e.jsx("div",{className:`mt-3 overflow-x-auto rounded-md border ${i?"border-slate-700":"border-slate-200"}`,children:C.actions.length?e.jsxs("table",{className:`min-w-full divide-y ${i?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"}`,children:[e.jsx("thead",{className:i?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"})]})}),e.jsx("tbody",{className:`divide-y ${i?"divide-slate-700":"divide-slate-100"}`,children:C.actions.map(w=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${i?"text-slate-100":"text-slate-800"}`,children:w.text||"Untitled action"}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`inline-flex whitespace-nowrap rounded-full border px-2 py-1 text-xs font-semibold ${Gt[w.status]}`,children:w.status})}),e.jsx("td",{className:`px-3 py-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:w.owner||"Unassigned"})]},w.id))})]}):e.jsx("p",{className:`p-3 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:"No actions yet for this lens."})},`${p}-table`)})]},r.id)})})]},`phase-group-${u}`))})]})]})}const Ml=[{phase:1,label:"Pre-Discovery",programmeStage:"Concept",tagline:"Define the change",color:"bg-blue-50",darkColor:"bg-blue-950/45",textColor:"text-blue-700",darkTextColor:"text-blue-100",borderColor:"border-blue-300",darkBorderColor:"border-blue-700",deliverables:[{text:"Change Vision defined and communicated",componentIds:["vision"]},{text:"Compelling case for change developed",componentIds:["case_for_change"],showExternalGuidance:!1}]},{phase:2,label:"Solution Design",programmeStage:"Definition",tagline:"Prepare the change",color:"bg-violet-50",darkColor:"bg-violet-950/45",textColor:"text-violet-700",darkTextColor:"text-violet-100",borderColor:"border-violet-300",darkBorderColor:"border-violet-700",deliverables:[{text:"Change Impact analysed",componentIds:["change_impact"]},{text:"Change Management inputted to Business Case",componentIds:["case_for_change"],showExternalGuidance:!1},{text:"Engagement and Comms Strategy developed",componentIds:["change_network","stakeholder"]}]},{phase:3,label:"Development",programmeStage:"Design & Develop",tagline:"Plan the change",color:"bg-amber-50",darkColor:"bg-amber-950/45",textColor:"text-amber-700",darkTextColor:"text-amber-100",borderColor:"border-amber-300",darkBorderColor:"border-amber-700",deliverables:[{text:"Engagement and Comms Plan developed",componentIds:["stakeholder"]},{text:"Change Management Plan developed",componentIds:["cm_readiness"]}]},{phase:4,label:"Deployment / Go Live",programmeStage:"Implementation",tagline:"Manage implementation of the change",color:"bg-orange-50",darkColor:"bg-orange-950/45",textColor:"text-orange-700",darkTextColor:"text-orange-100",borderColor:"border-orange-300",darkBorderColor:"border-orange-700",deliverables:[{text:"Change Management Plan executed",componentIds:["cm_readiness"]},{text:"Communications delivered and Stakeholders engaged",componentIds:["stakeholder"]},{text:"Future State Processes validated",componentIds:["process_change"]},{text:"Skills gaps addressed",componentIds:["skills_learning"]},{text:"Future State Processes trialled and in use",componentIds:["process_change"]}]},{phase:5,label:"Post-Deployment",programmeStage:"Transition / Close",tagline:"Reinforce and sustain the change",color:"bg-green-50",darkColor:"bg-green-950/45",textColor:"text-green-700",darkTextColor:"text-green-100",borderColor:"border-green-300",darkBorderColor:"border-green-700",deliverables:[{text:"Change adoption evaluated",componentIds:["change_adoption"]},{text:"Business Change refinements actioned",componentIds:["reinforcement"]},{text:"Change sustained",componentIds:["transfer_bau"]}]}];function oo({currentPhase:t,onComponentClick:n,headingsOnly:s=!1,guidanceTarget:a="Default",linkOverrides:i,phaseLinks:l,showAdditionalGuidanceLinks:o=!0,darkMode:c=!1}){const[m,u]=d.useState(t);return d.useEffect(()=>{u(t)},[t]),e.jsxs("section",{className:`rounded-lg border shadow-sm ${c?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:`border-b px-5 py-4 ${c?"border-slate-700":"border-slate-200"}`,children:[e.jsx("h3",{className:`text-lg font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"The Five Change Phases"}),e.jsx("p",{className:`mt-1 text-sm ${c?"text-slate-300":"text-slate-500"}`,children:"Select a phase to see the key deliverables expected at that stage."})]}),e.jsx("div",{className:"space-y-3 p-4",children:Ml.map(r=>s?e.jsxs("div",{className:`rounded-md border px-4 py-3 ${c?`${r.darkBorderColor} ${r.darkColor}`:`${r.borderColor} ${r.color}`}`,children:[e.jsxs("span",{className:`block text-sm font-semibold ${c?r.darkTextColor:r.textColor}`,children:["Phase ",r.phase,": ",r.label]}),e.jsxs("span",{className:`mt-0.5 block text-xs ${c?"text-slate-300":"text-slate-500"}`,children:[r.tagline," · ",r.programmeStage]})]},r.phase):e.jsxs("details",{open:m===r.phase,onToggle:h=>{h.currentTarget.open?u(r.phase):m===r.phase&&u(0)},className:`group overflow-hidden rounded-md border ${c?r.darkBorderColor:r.borderColor}`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] [&::-webkit-details-marker]:hidden ${c?`${r.darkColor} ${r.darkTextColor} hover:brightness-110`:`${r.color} ${r.textColor} hover:brightness-95`}`,children:[e.jsxs("span",{children:[e.jsxs("span",{className:"block text-sm font-semibold",children:["Phase ",r.phase,": ",r.label]}),e.jsxs("span",{className:`mt-0.5 block text-xs ${c?"text-slate-300":"text-slate-500"}`,children:[r.tagline," · ",r.programmeStage]})]}),e.jsx("span",{className:"text-xl font-bold transition-transform group-open:rotate-45","aria-hidden":"true",children:"+"})]}),e.jsxs("div",{className:`border-t p-4 ${c?`${r.darkBorderColor} bg-slate-900`:`${r.borderColor} bg-white`}`,children:[e.jsx("ul",{className:"space-y-3",children:r.deliverables.map(h=>{const x=h.componentIds.map(w=>ks(w)).filter(w=>!!w),p=x.flatMap(w=>zn(a,w.id,"deliverables",i,o).slice(0,1)),b=x.length===1&&p.length===1,C=h.showExternalGuidance!==!1&&b&&p[0].label.trim().toLowerCase()!==x[0].label.trim().toLowerCase();return e.jsxs("li",{className:"flex items-start gap-2 text-sm",children:[e.jsx("span",{className:`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${c?`${r.darkColor} ${r.darkTextColor}`:`${r.color} ${r.textColor}`}`,children:"✓"}),e.jsxs("span",{className:"min-w-0 flex-1",children:[e.jsx("span",{className:c?"text-slate-200":"text-slate-700",children:h.text}),b?e.jsxs("span",{className:"ml-2 inline-flex flex-wrap items-center gap-2 text-xs",children:[e.jsx("button",{type:"button",onClick:()=>n(x[0].id),className:"font-semibold text-[#005eb8] underline underline-offset-2 hover:text-[#003087]",children:x[0].label}),C?e.jsx("a",{href:p[0].url,target:"_blank",rel:"noopener noreferrer",className:"font-medium text-slate-500 underline underline-offset-2 hover:text-[#005eb8]",children:"External guidance ↗"}):null]}):null,b?null:e.jsxs("span",{className:"mt-1 flex flex-wrap gap-x-3 gap-y-1",children:[x.map(w=>e.jsx("span",{className:"inline-flex flex-wrap items-center gap-2 text-xs",children:e.jsx("button",{type:"button",onClick:()=>n(w.id),className:"font-semibold text-[#005eb8] underline underline-offset-2 hover:text-[#003087]",children:w.label})},w.id)),p.map(w=>e.jsx("a",{href:w.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-medium text-slate-500 underline underline-offset-2 hover:text-[#005eb8]",children:"External guidance ↗"},w.url))]})]})]},h.text)})}),l!=null&&l[r.phase]?e.jsx("a",{href:Ut(l[r.phase]),target:"_blank",rel:"noopener noreferrer",className:`mt-3 inline-flex items-center gap-1 text-sm font-semibold underline underline-offset-2 ${c?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#003087]"}`,children:"Visit phase page ↗"}):null]})]},r.phase))})]})}function Bl({store:t,components:n,metrics:s,getEntry:a,onComponentClick:i,onActionView:l,guidanceTarget:o="Default",linkOverrides:c,showAdditionalGuidanceLinks:m=!0,phaseFocusMode:u="auto",manualPhaseFocus:r,colorAccessibilityMode:h="standard",darkMode:x=!1}){const p=yt("daily-checkin"),b=u==="manual"&&r?r:s.currentPhase,C=d.useMemo(()=>Wi(n,a,b),[n,a,b]);return e.jsxs("div",{className:"max-w-5xl mx-auto pb-20",children:[e.jsxs("div",{className:"mb-6 flex items-center gap-2",children:[e.jsx("h2",{className:`text-3xl font-bold ${x?"text-slate-100":"text-slate-800"}`,children:"Daily Check-in"}),e.jsx(jt,{onClick:p.reopen,darkMode:x})]}),e.jsx("p",{className:`mb-6 -mt-4 text-sm ${x?"text-slate-300":"text-slate-500"}`,children:"Your daily triage: what's outstanding right now, and where it sits in the wider programme."}),e.jsxs("div",{className:"space-y-8",children:[e.jsx(Tl,{steps:C,onComponentClick:i,onActionView:l,colorAccessibilityMode:h,darkMode:x}),e.jsx(oo,{currentPhase:b,onComponentClick:i,guidanceTarget:o,linkOverrides:c,showAdditionalGuidanceLinks:m,phaseLinks:t.orgProfile.phaseLinks,darkMode:x}),e.jsx(Ll,{components:n,store:t,getEntry:a,onComponentClick:i,darkMode:x})]}),e.jsx(Nt,{open:p.isOpen,onClose:p.close,title:"Daily Check-in",darkMode:x,body:e.jsx("p",{children:'This is your daily triage page - "What To Do Next" lists every component in your current phase with outstanding actions, ranked by timeline risk, and the Programme Change Hierarchy below gives you the full picture across every phase.'})})]})}function ei(t){if(!t)return[];const n=t.split(/\s+/).filter(Boolean);if(n.length<2)return n;const s=n.slice(0,Math.ceil(n.length/2)).join(" "),a=n.slice(Math.ceil(n.length/2)).join(" ");return[s,a].filter(Boolean)}function ro(t){return t.getContext?t:t.canvas}function cn(){return typeof document>"u"?!1:document.documentElement.dataset.nhsThemeMode==="dark"}function ns(t,n,s,a={}){var c,m;const i=ro(n),l=(m=(c=ht).getChart)==null?void 0:m.call(c,i);l&&l.destroy();const o={type:t,data:s,options:a};return new ht(i,o)}const ti=new WeakMap,ni=new WeakMap;function si(t,n,s){return(t.$pointLabelHitboxes||[]).find(a=>Math.abs(n-a.x)<=a.halfWidth&&Math.abs(s-a.y)<=a.halfHeight)}function Fl(t,n,s){const a=ti.get(t);a&&t.removeEventListener("click",a);const i=ni.get(t);i&&t.removeEventListener("mousemove",i);const l=c=>{const m=t.getBoundingClientRect(),u=si(n,c.clientX-m.left,c.clientY-m.top);u&&s(u.index)},o=c=>{const m=t.getBoundingClientRect(),u=si(n,c.clientX-m.left,c.clientY-m.top);t.style.cursor=u?"pointer":""};t.addEventListener("click",l),t.addEventListener("mousemove",o),ti.set(t,l),ni.set(t,o)}function rn(t,n,s={},a){var b,C,w,g,k,$,G,f,v,O,E,B;ht.defaults.font.family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",ht.defaults.font.size=12,ht.defaults.elements.line.tension=.2,ht.defaults.elements.point.radius=4,ht.defaults.elements.point.hoverRadius=6;const i=cn(),h={maintainAspectRatio:!0,responsive:!0,layout:{padding:56},plugins:{legend:{display:!0,position:"chartArea",align:"start",labels:{padding:5,boxWidth:30,font:{size:13}}},tooltip:{enabled:!0,backgroundColor:i?"rgba(15,23,42,0.98)":"rgba(11,18,32,0.95)",titleColor:"#fff",bodyColor:"#fff",callbacks:{}},centerText:""},elements:{line:{borderWidth:3,tension:.2,borderColor:i?"#63b3ff":"#005EB8",backgroundColor:i?"rgba(99,179,255,0.12)":"rgba(0,94,184,0.06)"},point:{radius:4,hoverRadius:6,backgroundColor:i?"rgba(144,205,244,0.95)":"rgba(11,122,184,0.95)"}},scales:{r:{beginAtZero:!0,grid:{color:i?"rgba(226,232,240,0.12)":"rgba(11,18,32,0.06)",lineWidth:1},angleLines:{color:i?"rgba(226,232,240,0.18)":"rgba(11,18,32,0.10)",lineWidth:1},ticks:{display:!1},pointLabels:{display:!1,color:i?"#e2e8f0":"#0b1220",font:{size:12,family:ht.defaults.font.family},padding:10,callback:Y=>ei(Y).join(`
`)}}}},x={...h,...s,layout:{padding:56,...s.layout||{}},plugins:{...h.plugins||{},...s.plugins||{},tooltip:{...((b=h.plugins)==null?void 0:b.tooltip)||{},...((C=s.plugins)==null?void 0:C.tooltip)||{},callbacks:{...((g=(w=h.plugins)==null?void 0:w.tooltip)==null?void 0:g.callbacks)||{},...(($=(k=s.plugins)==null?void 0:k.tooltip)==null?void 0:$.callbacks)||{}}}},scales:{...h.scales||{},...s.scales||{},r:{...((G=h.scales)==null?void 0:G.r)||{},...((f=s.scales)==null?void 0:f.r)||{},pointLabels:{...((O=(v=h.scales)==null?void 0:v.r)==null?void 0:O.pointLabels)||{},...((B=(E=s.scales)==null?void 0:E.r)==null?void 0:B.pointLabels)||{},display:!1,callback:Y=>ei(Y).join(`
`)}}}},p=ns("radar",t,n,x);if(a){const Y=ro(t);Fl(Y,p,a)}return p}function lo(t,n,s={}){const a=cn(),i=a?"#e2e8f0":"#0b1220",l=a?"rgba(226,232,240,0.08)":"rgba(11,18,32,0.04)",o=a?"rgba(226,232,240,0.10)":"rgba(11,18,32,0.06)",c=a?"#63b3ff":"#005EB8";return ns("line",t,n,{...{elements:{line:{borderWidth:2,tension:.2,borderColor:c,backgroundColor:a?"rgba(99,179,255,0.14)":"rgba(0,94,184,0.06)"},point:{radius:3,hoverRadius:5,backgroundColor:c}},scales:{x:{display:!0,grid:{color:l},ticks:{color:i,font:{size:11}}},y:{beginAtZero:!0,grid:{color:o},ticks:{color:i,font:{size:11}}}}},...s})}function Gl(t,n,s={}){const a=cn(),i=a?"#e2e8f0":"#0b1220";return ns("bar",t,n,{...{scales:{x:{display:!0,grid:{color:a?"rgba(226,232,240,0.08)":"rgba(11,18,32,0.04)"},ticks:{color:i,font:{size:11}}},y:{beginAtZero:!0,min:0,max:5,grid:{color:a?"rgba(226,232,240,0.10)":"rgba(11,18,32,0.06)"},ticks:{color:i,font:{size:11},stepSize:1}}}},...s})}function Ul(t,n,s={},a){const o={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{boxWidth:12,padding:15,color:cn()?"#e2e8f0":"#0b1220"}},tooltip:{callbacks:{label:c=>`${c.label||""}: ${c.parsed??""}`}}},onClick:a?(c,m)=>{m.length>0&&a(m[0].index)}:void 0};return ns("doughnut",t,n,{...o,...s})}function Hl(t){return typeof t.toBase64Image=="function"?t.toBase64Image():""}const Wl={id:"radarCenterText",beforeDraw:t=>{var n;try{const s=t.ctx,i=(n=(t.options||{}).plugins)==null?void 0:n.centerText,l=(i==null?void 0:i.text)||i||"";if(!l)return;const o=String(t.config.type||"");if(o!=="radar"&&o!=="doughnut")return;s.save(),s.textAlign="center",s.textBaseline="middle";const c=t.width/2,m=t.height/2;if(o==="doughnut")s.font=(i==null?void 0:i.font)||"bold 20px Inter",s.fillStyle=(i==null?void 0:i.color)||"#005EB8",s.fillText(String(l),c,m-10),i!=null&&i.subText&&(s.font=(i==null?void 0:i.subFont)||"12px Inter",s.fillStyle=(i==null?void 0:i.subColor)||"#6b7280",s.fillText(String(i.subText),c,m+10));else{const u=Math.max(12,Math.round(Math.min(t.width,t.height)*.065)),r=`${u}px ${ht.defaults.font.family}`;s.font=r,s.fillStyle=(i==null?void 0:i.color)||(cn()?"#e2e8f0":"#0b1220");const h=String(l).split(`
`),x=u*1.05,p=(h.length-1)*-x/2;h.forEach((b,C)=>{s.fillText(b,c,m+p+C*x)})}s.restore()}catch{}}},Vl={id:"radarPointLabelText",afterDraw:t=>{var n,s,a,i;try{const l=(n=t.scales)==null?void 0:n.r,o=(s=l==null?void 0:l.options)==null?void 0:s.pointLabels;if(!l||!o||t.config.type!=="radar")return;const c=t.ctx,m=Number(((a=o.font)==null?void 0:a.size)||ht.defaults.font.size||12),u=((i=o.font)==null?void 0:i.family)||ht.defaults.font.family||"Inter, sans-serif",r=o.color||(cn()?"#e2e8f0":"#0b1220"),h=Number(o.padding??14),x=Array.isArray(l._pointLabels)?l._pointLabels:[],p=[];c.save(),c.textAlign="center",c.textBaseline="middle",c.fillStyle=r,c.font=`${m}px ${u}`,x.forEach((b,C)=>{const g=String(b??"").split(`
`).filter(Boolean);if(!g.length)return;const k=l.getPointPosition(C,l.drawingArea+h,0),$=m*1.15,G=(g.length-1)*-$/2,f=Math.max(m,g.length*$),v=m*6,O=v/2+4,E=t.width-v/2-4,B=f/2+4,Y=t.height-f/2-4,se=Math.min(Math.max(k.x,O),E),me=Math.min(Math.max(k.y,B),Y);g.forEach((A,pe)=>{const M=me+G+pe*$;c.fillText(A,se,M)}),p.push({index:C,x:se,y:me,halfWidth:v/2,halfHeight:f/2})}),t.$pointLabelHitboxes=p,c.restore()}catch{}}};ht.register(Wl,Vl);typeof window<"u"&&(window.NHSDigitalAdoption=window.NHSDigitalAdoption||{},window.NHSDigitalAdoption.Charts={createRadarChart:rn,createLineChart:lo,toBase64Image:Hl});const Fn=["Pathways","Phases","Components","Vision","Lens","Strat Direct","Readiness","Actions","Overview"],ql={"pathway-1":"For teams starting from scratch. Nothing has been built yet, so every component starts at Not Started and the guidance walks you through building the foundations - defining a vision, securing sponsorship, and putting the basics of a change plan in place - one readiness level at a time.","pathway-2":"For teams who've already run a successful pilot and now need to scale it up. The guidance and actions are framed around taking what worked in the pilot - the vision, the sponsorship, the early lessons - and rolling it out consistently to new sites and teams, rather than starting from nothing.","pathway-3":"For teams who've already gone live but adoption is patchy or inconsistent across the organisation. The guidance and actions focus on diagnosing where and why adoption is lagging, then delivering targeted fixes to bring lagging areas up to the same standard as the rest."},vt=Zn(1)[0]||ln[0],nn=vt.lenses,co=Zn(2),Yl=co.map(t=>on(t.id,2,t.target)),Kl=[1,0,1,1],zl=[4,3,5,4];function Jl(t){const n=t.map(s=>ft(s).color);return{labels:co.map(s=>s.label),datasets:[{label:"Notional current",data:t,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.12)",borderWidth:2,pointRadius:4,pointHoverRadius:6,pointBackgroundColor:n,pointBorderColor:n},{label:"Phase 2 expected",data:Yl,borderColor:"#94a3b8",backgroundColor:"rgba(148, 163, 184, 0.06)",borderWidth:2,borderDash:[5,5],pointRadius:2,pointHoverRadius:4}]}}function ai({scores:t,darkMode:n}){const s=d.useRef(null);return d.useEffect(()=>{s.current&&rn(s.current,Jl(t),{maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"chartArea",align:"start",labels:{padding:5,boxWidth:30,font:{size:13}}},tooltip:{callbacks:{label:a=>{const i=Number(a.parsed.r??0);return`${a.dataset.label}: ${ft(i).label}`}}}},scales:{r:{min:0,max:5,ticks:{display:!1},pointLabels:{display:!0,font:{size:9},padding:18}}}})},[n]),e.jsx("div",{children:e.jsx("div",{style:{height:400},children:e.jsx("canvas",{ref:s,className:"block h-full w-full"})})})}function Xl({activeStep:t,darkMode:n}){const s=["Pathway","Phases","Components",vt.label,"Lens",nn[0],"Readiness","Actions","Overview"];return e.jsx("div",{className:"flex flex-wrap items-center gap-1.5 text-xs",children:s.map((a,i)=>e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:`rounded-full px-2.5 py-1 font-semibold transition-colors ${i===t?"bg-[#005eb8] text-white":i<t?n?"bg-slate-700 text-slate-200":"bg-blue-50 text-blue-800":n?"bg-slate-900 text-slate-600":"bg-slate-100 text-slate-400"}`,children:a}),i<s.length-1?e.jsx("span",{"aria-hidden":"true",className:n?"text-slate-600":"text-slate-300",children:"→"}):null]},a))})}function Ql({darkMode:t}){const n=[1,2,3,4,5],s=[{border:"border-blue-300",heading:"bg-blue-50 text-blue-700",body:"bg-blue-50/40"},{border:"border-violet-300",heading:"bg-violet-50 text-violet-700",body:"bg-violet-50/40"},{border:"border-amber-300",heading:"bg-amber-50 text-amber-700",body:"bg-amber-50/40"},{border:"border-orange-300",heading:"bg-orange-50 text-orange-700",body:"bg-orange-50/40"},{border:"border-green-300",heading:"bg-green-50 text-green-700",body:"bg-green-50/40"}];return e.jsxs("div",{className:`overflow-hidden rounded-md border ${t?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("div",{className:`grid grid-cols-[minmax(150px,0.7fr),minmax(0,2fr)] text-xs font-bold uppercase tracking-wider ${t?"bg-slate-900 text-slate-300":"bg-slate-100 text-slate-600"}`,children:[e.jsx("div",{className:"border-r px-4 py-3",children:"Phase"}),e.jsx("div",{className:"px-4 py-3",children:"Components"})]}),n.map((a,i)=>{const l=Zn(a),o=s[i];return e.jsxs("div",{className:`grid grid-cols-[minmax(150px,0.7fr),minmax(0,2fr)] border-t ${t?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("div",{className:`border-r px-4 py-4 text-sm font-semibold ${t?"bg-slate-900 text-slate-100":`${o.heading} ${o.border}`}`,children:["Phase ",a,": ",Je[a]||""]}),e.jsx("div",{className:`flex flex-wrap gap-2 px-4 py-4 ${t?"bg-slate-800":o.body}`,children:l.map(c=>e.jsx("span",{className:`rounded-full px-3 py-1 text-xs font-semibold ${t?"bg-slate-900 text-slate-200":"bg-white text-slate-700 shadow-sm"}`,children:c.label},c.id))})]},a)})]})}const Zl=["Assign owner","Set due date","Mark complete"];function ec({darkMode:t}){const n=`rounded-lg border border-dashed p-4 ${t?"border-slate-700":"border-slate-300"}`,s=`mb-3 text-center text-xs font-bold uppercase tracking-wider ${t?"text-slate-400":"text-slate-500"}`,a="flex flex-wrap items-center justify-center gap-2",i=e.jsx("div",{className:"flex justify-center py-1","aria-hidden":"true",children:e.jsx("span",{className:t?"text-slate-600":"text-slate-300",children:"↓"})}),l=e.jsx("div",{className:"flex justify-center py-1","aria-hidden":"true",children:e.jsx("span",{className:t?"text-slate-600":"text-slate-300",children:"↕"})}),o=`rounded-full border px-3 py-1 text-xs font-semibold ${t?"border-violet-700 bg-violet-950/40 text-violet-100":"border-violet-200 bg-violet-50 text-violet-700"}`,c=`rounded-full border px-3 py-1 text-xs font-semibold ${t?"border-blue-700 bg-blue-950/40 text-blue-100":"border-blue-200 bg-blue-50 text-blue-700"}`,m=`rounded-full border px-3 py-1 text-xs font-semibold ${t?"border-orange-700 bg-orange-950/40 text-orange-100":"border-orange-200 bg-orange-50 text-orange-700"}`,u=`rounded-full border px-3 py-1 text-xs font-semibold ${t?"border-rose-700 bg-rose-950/40 text-rose-100":"border-rose-200 bg-rose-50 text-rose-700"}`,r=`rounded-full border px-3 py-1 text-xs font-semibold ${t?"border-green-700 bg-green-950/40 text-green-100":"border-green-200 bg-green-50 text-green-700"}`;return e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:n,children:[e.jsx("p",{className:s,children:"Pathways"}),e.jsx("div",{className:a,children:Yn.map(h=>e.jsx("span",{className:o,children:h.simplifiedLabel},h.value))})]}),i,e.jsxs("div",{className:n,children:[e.jsx("p",{className:s,children:"Phases"}),e.jsx("div",{className:a,children:[1,2,3,4,5].map(h=>e.jsx("span",{className:c,children:Je[h]},h))})]}),i,e.jsxs("div",{className:n,children:[e.jsx("p",{className:s,children:"Components"}),e.jsx("div",{className:a,children:ln.map(h=>e.jsx("span",{className:m,children:h.label},h.id))})]}),l,e.jsxs("div",{className:n,children:[e.jsx("p",{className:s,children:"Lenses"}),e.jsx("div",{className:a,children:Cn.map(h=>e.jsx("span",{className:u,children:h},h))})]}),i,e.jsxs("div",{className:n,children:[e.jsx("p",{className:s,children:"Readiness score"}),e.jsx("div",{className:"flex overflow-hidden rounded-md",children:_t.map(h=>e.jsx("div",{className:"flex-1 py-2 text-center",style:{backgroundColor:h.color},children:e.jsx("span",{className:`text-[10px] font-semibold ${h.score===2?"text-slate-900":"text-white"}`,children:h.label})},h.score))})]}),i,e.jsxs("div",{className:n,children:[e.jsx("p",{className:s,children:"Actions"}),e.jsx("div",{className:a,children:Zl.map(h=>e.jsx("span",{className:r,children:h},h))})]})]})}function tc({children:t,darkMode:n}){return e.jsx("div",{className:`w-full rounded-xl border shadow-sm ${n?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:e.jsx("div",{className:"p-6 sm:p-10",children:t})})}const nc=["Alex Morgan","Sam Patel"],sc=[{id:"notional-1",text:`Agree the ${nn[0]} approach with the SRO`,status:"Planned",owner:""},{id:"notional-2",text:"Document the agreed approach for the team",status:"Planned",owner:""},{id:"notional-3",text:"Share the approach with key stakeholders",status:"Planned",owner:""}];function ac({darkMode:t=!1,onGetStarted:n,onComponentClick:s}){var G;const[a,i]=d.useState("pathway-1"),[l,o]=d.useState(0),[c,m]=d.useState(sc),[u,r]=d.useState(null),[h,x]=d.useState([]),[p,b]=d.useState(!1),C=(f,v)=>{const O=c.map(B=>B.id===f?{...B,...v}:B);m(O),O.every(B=>B.status==="Completed"&&B.owner.trim()!=="")&&!p&&(b(!0),x(B=>[...B,{id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,message:`${vt.label} · ${nn[0]} moved to the next readiness level!`}]))},w=l===Fn.length-1,g=t?"text-slate-300":"text-slate-700",k=()=>o(f=>Math.min(Fn.length-1,f+1)),$=()=>o(f=>Math.max(0,f-1));return e.jsxs("div",{className:"w-full space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${t?"text-slate-100":"text-slate-800"}`,children:"Engine Explained"}),e.jsx("p",{className:`mt-2 max-w-3xl text-sm ${t?"text-slate-300":"text-slate-600"}`,children:"A quick worked example showing how everything fits together, step by step."})]}),l>0?e.jsx(Xl,{activeStep:l,darkMode:t}):null,e.jsxs(tc,{darkMode:t,children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${t?"text-blue-300":"text-blue-700"}`,children:["Step ",l+1," of ",Fn.length," · ",Fn[l]]}),l===0?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Every programme starts with a pathway"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${g}`,children:"A pathway describes the current status of your project and will determine the change journey required for successful adoption."}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${g}`,children:"The Pathway will tailor the guidance, actions and resources you will see everywhere else in the tool."}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${g}`,children:"In this example walkthrough of the Adoption Engine we'll use pathway 1 - Starting for the First time. You will be able to select the correct pathway when you set up your project later on."}),e.jsx("div",{className:"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3",children:Yn.map(f=>{const v=f.value===a;return e.jsx("button",{type:"button",onClick:()=>i(f.value),"aria-pressed":v,className:`rounded-lg border p-4 text-left transition-colors ${v?"border-[#005eb8] bg-blue-50 ring-2 ring-[#005eb8]":t?"border-slate-600 bg-slate-900 hover:bg-slate-700":"border-slate-200 bg-white hover:bg-slate-50"}`,children:e.jsx("p",{className:`text-sm font-semibold ${v?"text-[#005eb8]":t?"text-slate-100":"text-slate-900"}`,children:f.simplifiedLabel})},f.value)})}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 text-sm ${t?"border-blue-500/30 bg-blue-500/10 text-blue-100":"border-blue-200 bg-blue-50 text-blue-900"}`,children:[e.jsx("p",{className:"font-semibold",children:(G=Yn.find(f=>f.value===a))==null?void 0:G.simplifiedLabel}),e.jsx("p",{className:"mt-1",children:ql[a]})]})]}):null,l===1?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Each pathway is broken into the 5 change phases"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${g}`,children:"Every Pathway runs through 5 phases which are aligned to a project lifecycle. It starts from the earliest thinking about a change through to it being fully embedded as business as usual."}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${g}`,children:"See the 5 Change phases below."}),e.jsx("div",{className:"mt-6",children:e.jsx(oo,{currentPhase:vt.phase,onComponentClick:s,headingsOnly:!0,darkMode:t})}),e.jsx("p",{className:`mt-4 text-sm ${g}`,children:"At each phase there are 'Change Components' that need to be focused on at that particular phase of a project."})]}):null,l===2?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Change components"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${g}`,children:"Change Components are the focused topics and change activities that are relevant to each phase."}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${g}`,children:"The table below shows which components are included in each phase (these will be clickable when using the adoption engine.)"}),e.jsx("div",{className:"mt-6",children:e.jsx(Ql,{darkMode:t})}),e.jsxs("p",{className:`mt-4 text-sm ${g}`,children:["To continue with the example lets zoom into one of the specific Change Component. Phase ",vt.phase,": ",vt.label,"."]})]}):null,l===3?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Vision is an example of a Change Component"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${g}`,children:"The Vision sits as a Change Component in Phase 1 of a project because it needs to be developed right at the start."}),e.jsxs("div",{className:`mt-6 rounded-lg border p-5 ${t?"border-slate-700 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsx("p",{className:`text-lg font-semibold ${t?"text-slate-100":"text-slate-900"}`,children:vt.label}),e.jsx("p",{className:`mt-2 text-sm ${g}`,children:Vi(vt.id)})]}),e.jsx("p",{className:`mt-4 text-sm ${g}`,children:"A Vision can be looked at through particular 'lenses' - Let's see what that means."})]}):null,l===4?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"A Lens is a different perspective of the same Change Component"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${g}`,children:"Each Change Component can be looked at through different lenses that show different perspectives. Here are all of the lenses used across the Adoption Engine: not all of them will relate to every Change Component."}),e.jsx("div",{className:"mt-6 grid grid-cols-1 gap-3",children:Cn.map(f=>e.jsxs("div",{className:`rounded-lg border p-5 ${t?"border-slate-700 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsx("p",{className:`text-lg font-semibold ${t?"text-slate-100":"text-slate-900"}`,children:f}),e.jsx("p",{className:`mt-2 text-sm ${g}`,children:As(f)})]},f))}),e.jsx("p",{className:`mt-4 text-sm ${g}`,children:"Let's look at the lenses that relate to a Vision to follow our example through."})]}):null,l===5?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"An example lens for our example change component"}),e.jsxs("p",{className:`mt-3 max-w-2xl text-sm ${g}`,children:["The ",vt.label,", can be seen through 2 different lenses."]}),e.jsxs("ol",{className:`mt-3 max-w-2xl text-sm ${g}`,children:[e.jsxs("li",{children:["1. ",nn[0]," lens"]}),e.jsxs("li",{children:["2. ",nn[1]," lens"]})]}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${g}`,children:"Both lenses, give a different perspective on the same change component. We will follow the Strategic Direction and Leadership lens through to a readiness score."}),nn.map((f,v)=>e.jsxs("div",{className:`mt-6 rounded-lg border p-5 ${t?"border-[#005eb8] bg-slate-900":v===0?"border-[#005eb8] bg-blue-50":"border-slate-200 bg-white"}`,children:[e.jsxs("p",{className:`text-lg font-semibold ${t?"text-slate-100":"text-[#005eb8]"}`,children:[vt.label," · ",f]}),e.jsx("p",{className:`mt-2 text-sm ${t?"text-slate-300":"text-blue-900"}`,children:As(f)})]})),e.jsx("p",{className:`mt-4 text-sm ${g}`,children:"Now we need to look at scoring each Change Component in Terms of Readiness for Change through each of the relevant lenses."})]}):null,l===6?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Readiness is scored on a scale from 'Not Started', to 'Thriving' for every lens"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${g}`,children:"Each lens for each Change Component will need its own readiness status, because a Change Component could be strong through one lens and weak in another. Here is what each level means and what that will look like on the readiness radar you will see elsewhere in the tool:"}),e.jsxs("div",{className:"mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3",children:[e.jsx("div",{className:"grid grid-cols-1 gap-2",children:_t.map(f=>{const[,v]=(Jn[f.score]||"").split(/:\s(.+)/);return e.jsxs("div",{className:`rounded-md border p-2.5 ${t?"border-slate-700":""}`,style:{borderLeftWidth:"4px",borderLeftColor:f.color},children:[e.jsx("p",{className:`text-xs font-bold ${t?"text-slate-100":"text-slate-800"}`,children:f.label}),e.jsx("p",{className:`mt-0.5 text-xs ${t?"text-slate-300":"text-slate-600"}`,children:v})]},f.score)})}),e.jsxs("div",{className:`rounded-lg border p-4 ${t?"border-red-500/30 bg-red-500/5":"border-red-200 bg-red-50"}`,children:[e.jsx("p",{className:`text-sm font-bold ${t?"text-red-200":"text-red-800"}`,children:"At risk example"}),e.jsx("p",{className:`mt-1 text-xs ${t?"text-slate-300":"text-slate-600"}`,children:"Notional scores trailing behind where Phase 2 expects these components to be."}),e.jsx("div",{className:"mt-3",children:e.jsx(ai,{scores:Kl,darkMode:t})})]}),e.jsxs("div",{className:`rounded-lg border p-4 ${t?"border-emerald-500/30 bg-emerald-500/5":"border-emerald-200 bg-emerald-50"}`,children:[e.jsx("p",{className:`text-sm font-bold ${t?"text-emerald-200":"text-emerald-800"}`,children:"Excelling example"}),e.jsx("p",{className:`mt-1 text-xs ${t?"text-slate-300":"text-slate-600"}`,children:"Notional scores ahead of where Phase 2 expects these components to be."}),e.jsx("div",{className:"mt-3",children:e.jsx(ai,{scores:zl,darkMode:t})})]})]})]}):null,l===7?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Actions"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${g}`,children:"To improve readiness for each component through each lens there are a set of suggested actions to be completed. These Actions can be edited or removed or you can add your own actions."}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${g}`,children:"Actions can be assigned to team members and have completion dates assigned if required. Once the Actions at each readiness level is Completed or Cancelled, that lens automatically moves up to the next readiness level."}),e.jsx("p",{className:`mt-4 text-sm font-semibold ${g}`,children:"Try assigning these actions and then marking them as complete."}),e.jsx("div",{className:`mt-3 overflow-x-auto rounded-md border ${t?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200",children:[e.jsx("thead",{className:t?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider ${t?"text-slate-400":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider ${t?"text-slate-400":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider ${t?"text-slate-400":"text-slate-500"}`,children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:c.map(f=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 align-top text-sm ${g}`,children:f.text}),e.jsx("td",{className:"px-3 py-2 align-top",children:u===f.id?e.jsxs("select",{autoFocus:!0,"aria-label":`Owner for ${f.text}`,value:f.owner,onChange:v=>{C(f.id,{owner:v.target.value}),r(null)},onBlur:()=>r(null),className:"rounded-md border border-slate-300 px-2 py-1 text-xs font-semibold",children:[e.jsx("option",{value:"",children:"Unassigned"}),nc.map(v=>e.jsx("option",{value:v,children:v},v))]}):e.jsx("button",{type:"button",onClick:()=>r(f.id),"aria-label":`Change owner for ${f.text}`,className:"rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b]",children:e.jsx(Xi,{name:f.owner,darkMode:t})})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("select",{"aria-label":`Status for ${f.text}`,value:f.status,onChange:v=>C(f.id,{status:v.target.value}),className:`rounded-md border px-2 py-1 text-xs font-semibold ${Gt[f.status]}`,children:Hs.map(v=>e.jsx("option",{value:v,children:v},v))})})]},f.id))})]})}),e.jsx("p",{className:`mt-6 text-sm font-semibold ${t?"text-slate-100":"text-slate-900"}`,children:"That's Adoption Engine explained: Pathway → Phase → Component → Lens → Readiness → Actions. Let's see the whole picture before you set up your real project."})]}):null,l===8?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"The whole engine, one page"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${g}`,children:"Every pathway, phase, component, lens and readiness level really used in this tool, laid out top to bottom. Components and lenses connect both ways, since every component is viewed through several lenses."}),e.jsx("div",{className:"mt-6",children:e.jsx(ec,{darkMode:t})})]}):null,e.jsxs("div",{className:"mt-8 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:$,disabled:l===0,className:`rounded-md border px-4 py-2 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${t?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Back"}),w?e.jsx("button",{type:"button",onClick:n,disabled:!p,title:p?void 0:"Mark every notional action Completed with an owner assigned to continue",className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#005eb8]",children:"Get started"}):e.jsx("button",{type:"button",onClick:k,disabled:l===7&&!p,title:l===7&&!p?"Mark every notional action Completed with an owner assigned to continue":void 0,className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#005eb8]",children:"Next"})]})]}),h.length>0?e.jsx(Ji,{message:h[0].message,onDismiss:()=>x(f=>f.slice(1)),celebrate:!0},h[0].id):null]})}const ic=`Pathway 1 - We are starting $projectName for the first time
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
adoption.`,ms={"Pathway 1 - We are starting product for the first time":"pathway-1","Pathway 2 - We have piloted product and need to scale up":"pathway-2","Pathway 3 - product is live but adoption is patchy":"pathway-3","Pathway 1 - Pilot":"pathway-1","Pathway 2 - Scale up":"pathway-2","Pathway 3 - Reassess":"pathway-3"},oc={vision:"Vision",case_for_change:"Case for Change",sponsorship:"Senior Sponsorship and Governance",change_network:"Change Network",benefits:"Benefits and WIIFM",stakeholder:"Stakeholder Engagement and Communication",process_change:"Process Change and Ways of Working",change_impact:"Change Impact and Risk",risk_management:"Change Impact and Risk",skills_learning:"Skills, Learning, Capability and Confidence",capability:"Skills, Learning, Capability and Confidence",change_adoption:"Change Adoption",transfer_bau:"Transfer to BAU",reinforcement:"Reinforcement",resistance:"Resistance",cm_readiness:"Readiness and Planning",org_maturity:"Organisational Change Management Maturity"};function rc(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function us(t){return t.replace(/\bAVT\b/g,"${productName}")}function lc(t){const n=t.split(/\r?\n/).map(i=>i.trim()),s={};let a=0;for(;a<n.length;){const i=n[a],l=ms[i];if(!l){a+=1;continue}for(a+=1;a<n.length&&!n[a];)a+=1;if(a>=n.length)break;const o=n[a];for(a+=1;a<n.length&&(!n[a]||n[a]==="Are you on track?");)a+=1;let c="";if(a<n.length&&n[a].startsWith("Descriptor:"))for(c=us(n[a].replace("Descriptor:","").trim()),a+=1;a<n.length&&n[a]&&!n[a].startsWith("☐")&&!n[a].startsWith("ARE YOU ON TRACK?")&&!ms[n[a]];)c=us(`${c} ${n[a]}`.trim()),a+=1;const m=[];for(;a<n.length&&n[a].startsWith("☐");){const u=us(n[a].replace(/^☐\s*/,"").trim()),r=`${l}:${rc(o)}:${m.length+1}`;m.push({key:r,text:u}),a+=1}for(s[o]||(s[o]={}),s[o][l]={domain:o,descriptor:c,checklist:m};a<n.length&&n[a]&&!ms[n[a]];)a+=1}return s}const cc=lc(ic);function dc(t){return oc[t]||null}function mo(t,n){var a;const s=dc(t);return s&&((a=cc[s])==null?void 0:a[n])||null}function mc(t,n){if(!n||n.checklist.length===0)return{status:"on-track",completionPct:100,checkedCount:0,totalCount:0};const s=n.checklist.length,a=new Set(t),i=n.checklist.filter(o=>a.has(o.key)).length,l=Math.round(i/s*100);return l>=80?{status:"on-track",completionPct:l,checkedCount:i,totalCount:s}:l>=45?{status:"attention",completionPct:l,checkedCount:i,totalCount:s}:{status:"off-track",completionPct:l,checkedCount:i,totalCount:s}}function uc(t){const n=mc(t.checkedItemKeys,t.rule);return!t.rule||t.rule.checklist.length===0?{status:t.averageScore>=t.targetScore?"on-track":"attention",completionPct:n.completionPct,checkedCount:n.checkedCount,totalCount:n.totalCount}:n.status==="off-track"?n:t.averageScore<Math.max(1,t.targetScore-1)&&n.status!=="on-track"?{...n,status:"attention"}:n}const gs=[1,2,3,4,5];function gc(t,n){const s=t.lenses.reduce((a,i)=>a+Number(n(t.id,i).score||0),0);return t.lenses.length?Number((s/t.lenses.length).toFixed(1)):0}function pc(t,n,s,a,i,l){if(t.phase>s)return{label:"Not in current phase yet",rowClass:l?"border-slate-600 bg-slate-800/80":"border-slate-200 bg-slate-50",chipClass:l?"bg-slate-700 text-slate-100":"bg-slate-200 text-slate-700",barClass:"bg-slate-400"};const o=mo(t.id,a),c=uc({averageScore:n,targetScore:t.target,checkedItemKeys:i,rule:o});return c.status==="off-track"?{label:`Off track (${c.completionPct}% checklist)`,rowClass:l?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:l?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:c.status==="attention"?{label:`Needs attention (${c.completionPct}% checklist)`,rowClass:l?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:l?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:n>=t.target?{label:`On track (${c.completionPct}% checklist)`,rowClass:l?"border-green-700 bg-green-950/45":"border-green-200 bg-green-50",chipClass:l?"bg-green-900 text-green-100":"bg-green-100 text-green-700",barClass:"bg-green-500"}:t.phase<s?{label:"Behind timeline",rowClass:l?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:l?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:t.phase===s?{label:"Due this phase",rowClass:l?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:l?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:{label:"In progress",rowClass:l?"border-blue-700 bg-blue-950/45":"border-blue-200 bg-blue-50",chipClass:l?"bg-blue-900 text-blue-100":"bg-blue-100 text-blue-700",barClass:"bg-blue-500"}}function hc({components:t,metrics:n,getEntry:s,onComponentClick:a,pathway:i,pathwayChecks:l,darkMode:o=!1}){const c=yt("component-delivery-timeline"),m=t.map(u=>{var x;const r=gc(u,s),h=((x=l[u.id])==null?void 0:x[i])||[];return{component:u,average:r,status:pc(u,r,n.currentPhase,i,h,o)}});return e.jsxs("section",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-2xl border p-6 shadow-sm`,children:[e.jsx("p",{className:`text-sm font-semibold uppercase tracking-[0.18em] ${o?"text-slate-300":"text-slate-500"}`,children:"Component Delivery Timeline"}),e.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-900"}`,children:"Component delivery timeline"}),e.jsx(jt,{onClick:c.reopen,darkMode:o})]}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"This gantt-style view shows when each component should be completed by phase. Components are coloured by whether they are on track against the current phase. Select a row to jump into the matching assessment tab."})]}),e.jsx(Nt,{open:c.isOpen,onClose:c.close,title:"Component Delivery Timeline",darkMode:o,body:e.jsx("p",{children:"A gantt-style view of when each component should be completed by phase, coloured by whether it's on track. Select a row to jump straight into that component's assessment."})}),e.jsx("div",{className:"lg:hidden space-y-3",children:m.map(({component:u,average:r,status:h})=>e.jsxs("button",{type:"button",onClick:()=>a(u.id),className:`w-full rounded-xl border p-4 text-left transition-colors ${o?"hover:border-slate-500":"hover:border-slate-300"} ${h.rowClass}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:u.label}),e.jsxs("div",{className:`mt-1 text-xs ${o?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",Rs(u.target)," · completes by Phase"," ",u.phase]})]}),e.jsx("span",{className:`rounded-full px-4 py-1 text-xs font-semibold ${h.chipClass}`,children:h.label})]}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("div",{className:`mb-1 flex items-center justify-between text-xs ${o?"text-slate-300":"text-slate-600"}`,children:[e.jsx("span",{children:"Timeline"}),e.jsxs("span",{children:["Average ",r]})]}),e.jsx("div",{className:"grid grid-cols-5 gap-1",children:gs.map(x=>{const p=x<=u.phase,b=x===u.phase;return e.jsxs("div",{children:[e.jsx("div",{className:`h-2 rounded-full ${o?"bg-slate-700/70":"bg-white/80"}`,children:p?e.jsx("div",{className:`h-full rounded-full ${h.barClass} ${b?"opacity-100":"opacity-35"}`,title:b?"Expected completion phase":"Planned timeline"}):null}),e.jsxs("div",{className:`mt-1 text-center text-[10px] ${o?"text-slate-400":"text-slate-500"}`,children:["P",x]})]},`${u.id}-mobile-${x}`)})})]})]},`mobile-${u.id}`))}),e.jsx("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} hidden lg:block rounded-2xl border p-5 shadow-sm overflow-x-auto`,children:e.jsxs("div",{className:"min-w-[860px]",children:[e.jsxs("div",{className:`grid grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 border-b pb-3 text-xs font-semibold uppercase tracking-wider ${o?"border-slate-700 text-slate-400":"border-slate-200 text-slate-500"}`,children:[e.jsx("div",{children:"Component"}),gs.map(u=>e.jsxs("div",{className:"text-center",children:["Phase ",u]},u)),e.jsx("div",{className:"text-center",children:"Average"}),e.jsx("div",{className:"text-center",children:"Status"})]}),e.jsx("div",{className:"mt-4 space-y-3",children:m.map(({component:u,average:r,status:h})=>e.jsxs("button",{type:"button",onClick:()=>a(u.id),className:`grid w-full grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 rounded-xl border p-2.5 text-left transition-colors ${o?"hover:border-slate-500":"hover:border-slate-300"} ${h.rowClass}`,children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:u.label}),e.jsxs("div",{className:`mt-1 text-xs ${o?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",Rs(u.target)," · completes by Phase"," ",u.phase]})]}),gs.map(x=>{const p=x<=u.phase,b=x===u.phase;return e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:`h-7 w-full rounded-full px-1 py-1 ${o?"bg-slate-700/70":"bg-white/70"}`,children:p?e.jsx("div",{className:`h-full rounded-full ${h.barClass} ${b?"opacity-100":"opacity-35"}`,title:b?"Expected completion phase":"Planned timeline"}):null})},`${u.id}-${x}`)}),e.jsx("div",{className:`flex items-center justify-center text-sm font-semibold ${o?"text-slate-100":"text-slate-700"}`,children:r}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("span",{className:`rounded-full text-center px-2.5 py-1 text-xs font-semibold ${h.chipClass}`,children:h.label})})]},u.id))}),e.jsxs("div",{className:`mt-4 rounded-md border p-3 text-xs ${o?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{className:"font-semibold",children:"Key:"})," Grey rows are not yet due for the current phase. Red rows indicate overdue or off-track work."]})]})})]})}function fc(t){return Uo.sanitize(t,{USE_PROFILES:{html:!0}})}const bc=[{label:"Bold",command:"bold",icon:"B"},{label:"Italic",command:"italic",icon:"I"},{label:"Bullet list",command:"insertUnorderedList",icon:"•"},{label:"Numbered list",command:"insertOrderedList",icon:"1."}];function ii({value:t,onChange:n,placeholder:s,className:a}){const i=d.useRef(null);d.useEffect(()=>{const m=i.current;m&&m.innerHTML!==t&&(m.innerHTML=t)},[t]);const l=()=>{const m=i.current;m&&n(fc(m.innerHTML))},o=m=>{var u;(u=i.current)==null||u.focus(),document.execCommand(m,!1),l()},c=!t||t==="<br>";return e.jsxs("div",{className:`rounded-md border border-slate-300 bg-white ${a||""}`,children:[e.jsx("div",{"data-print-hide":"true",className:"flex items-center gap-1 border-b border-slate-200 bg-slate-50 px-1.5 py-1",children:bc.map(m=>e.jsx("button",{type:"button",title:m.label,"aria-label":m.label,onMouseDown:u=>u.preventDefault(),onClick:()=>o(m.command),className:"flex h-6 min-w-[1.5rem] items-center justify-center rounded px-1 text-xs font-bold text-slate-600 hover:bg-slate-200",children:m.icon},m.command))}),e.jsxs("div",{className:"relative",children:[c&&s?e.jsx("span",{className:"pointer-events-none absolute left-2 top-1.5 text-sm text-slate-400",children:s}):null,e.jsx("div",{ref:i,contentEditable:!0,suppressContentEditableWarning:!0,onInput:l,onBlur:l,className:"min-h-[4.5rem] px-2 py-1.5 text-sm text-slate-800 outline-none [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"})]})]})}function rt(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}const Ds="nhs-highlight-builder-layout",ps=[{id:"executive-summary",label:"Executive Summary"},{id:"change-dashboard",label:"Change Dashboard"},{id:"adoption-metrics",label:"Adoption Metrics"},{id:"what-went-well",label:"What Went Well"},{id:"risks-issues",label:"Key Risks and Issues"},{id:"stakeholder-insights",label:"Stakeholder Insights"},{id:"interventions-delivered",label:"Change Interventions Delivered"},{id:"upcoming-priorities",label:"Upcoming Priorities"},{id:"decisions-required",label:"Decisions Required"},{id:"change-lead-assessment",label:"Change Lead Assessment"}],xc={"executive-summary":{label:"Headline scorecard",kind:"donut"},"change-dashboard":{label:"RAG trend chart",kind:"trend"},"adoption-metrics":{label:"KPI scorecard",kind:"bars"},"what-went-well":{label:"Achievement tiles",kind:"steps"},"risks-issues":{label:"Risk heat map",kind:"risk"},"stakeholder-insights":{label:"Sentiment split",kind:"donut"},"interventions-delivered":{label:"Intervention timeline",kind:"steps"},"upcoming-priorities":{label:"30-day roadmap",kind:"steps"},"decisions-required":{label:"Decision funnel",kind:"trend"},"change-lead-assessment":{label:"Confidence profile",kind:"bars"}},Qt=["#005eb8","#41a6c8","#78be20","#ffb81c","#da291c"],St={title:"Executive Highlight Report",themeColor:"#005eb8",logoDataUrl:"",programmeName:"",reportingPeriod:"",changeLeadName:"",sroName:"",overallStatus:"Amber",orientation:"landscape",bragSlides:[],sections:["executive-summary","change-dashboard","adoption-metrics","what-went-well","risks-issues","stakeholder-insights","interventions-delivered","upcoming-priorities","decisions-required","change-lead-assessment"],sectionNarratives:{},metricRows:[],riskRows:[],stakeholderPositivePct:0,stakeholderNeutralPct:0,stakeholderNegativePct:0,interventionRows:[],decisionRows:[],assessmentRows:[]},yc={Green:"bg-green-100 text-green-800 border-green-200",Amber:"bg-amber-100 text-amber-800 border-amber-200",Red:"bg-red-100 text-red-800 border-red-200"},vc={Green:"bg-green-500",Amber:"bg-amber-500",Red:"bg-red-500"};function oi({status:t}){return e.jsxs("span",{className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${yc[t]}`,children:[e.jsx("span",{className:`h-2 w-2 rounded-full ${vc[t]}`}),t]})}function Sc({rows:t}){const n=Math.max(5,...t.flatMap(s=>[s.current,s.target]));return e.jsxs("div",{className:"space-y-5","aria-label":"Current component scores compared with targets",children:[t.map(s=>e.jsxs("div",{className:"grid grid-cols-[minmax(130px,1fr),minmax(220px,2fr),48px] items-center gap-3",children:[e.jsx("span",{className:"text-sm font-semibold text-[#425563]",children:s.label}),e.jsxs("div",{className:"relative h-8 rounded bg-[#e8edee]",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 rounded bg-[#005eb8]",style:{width:`${Math.min(100,s.current/n*100)}%`}}),e.jsx("div",{className:"absolute inset-y-[-4px] w-0.5 bg-[#da291c]",style:{left:`${Math.min(100,s.target/n*100)}%`},title:`Target ${s.target}`})]}),e.jsx("span",{className:"text-right text-sm font-bold text-[#005eb8]",children:s.current.toFixed(1)})]},s.label)),e.jsxs("div",{className:"flex flex-wrap gap-5 border-t border-[#d8dde0] pt-4 text-xs text-[#425563]",children:[e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"h-3 w-3 rounded-sm bg-[#005eb8]"})," Current average"]}),e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"h-4 w-0.5 bg-[#da291c]"})," Target marker"]})]})]})}function wc(){return e.jsx("span",{className:"flex h-4 w-4 shrink-0 items-center justify-center rounded bg-green-500 text-[10px] font-bold text-white",children:"✓"})}function vn(t,n){return`${t+1}. ${n}`}function uo(t){return Array.isArray(t)?t.filter(n=>!!n&&typeof n=="object").map(n=>({id:n.id||rt(),componentId:n.componentId||"",rows:Array.isArray(n.rows)?n.rows.filter(s=>!!s&&typeof s=="object").map(s=>({id:s.id||rt(),preventingGreenHtml:s.preventingGreenHtml||"",returnToGreenHtml:s.returnToGreenHtml||"",ownerId:s.ownerId||"",targetDate:s.targetDate||"",linkedActionId:s.linkedActionId})):[]})):[]}function An(t,n){return Array.isArray(t)?t.filter(s=>!!s&&typeof s=="object").map(n):[]}function go(t){return An(t,n=>({id:n.id||rt(),measure:n.measure||"",target:n.target||"",current:n.current||"",status:n.status==="Green"||n.status==="Amber"||n.status==="Red"?n.status:"Amber"}))}function po(t){return An(t,n=>({id:n.id||rt(),risk:n.risk||"",impact:n.impact||"",mitigation:n.mitigation||"",status:n.status||"Open"}))}function ho(t){return An(t,n=>({id:n.id||rt(),text:n.text||""}))}function fo(t){return An(t,n=>({id:n.id||rt(),decision:n.decision||"",owner:n.owner||"",requiredBy:n.requiredBy||""}))}function bo(t){return An(t,n=>({id:n.id||rt(),area:n.area||"",confidence:n.confidence==="High"||n.confidence==="Medium"||n.confidence==="Low"?n.confidence:"Medium"}))}function Nc(){const t=dt(Ds);if(!t)return St;try{return{...St,...t,overallStatus:t.overallStatus==="Green"||t.overallStatus==="Amber"||t.overallStatus==="Red"?t.overallStatus:St.overallStatus,orientation:t.orientation==="portrait"||t.orientation==="landscape"?t.orientation:St.orientation,bragSlides:uo(t.bragSlides),sections:Array.isArray(t.sections)&&t.sections.length>0?t.sections:St.sections,metricRows:go(t.metricRows),riskRows:po(t.riskRows),stakeholderPositivePct:Number(t.stakeholderPositivePct)||0,stakeholderNeutralPct:Number(t.stakeholderNeutralPct)||0,stakeholderNegativePct:Number(t.stakeholderNegativePct)||0,interventionRows:ho(t.interventionRows),decisionRows:fo(t.decisionRows),assessmentRows:bo(t.assessmentRows)}}catch{return St}}function jc({store:t,metrics:n,lenses:s,components:a=ln,getEntry:i,trustName:l,projectName:o,themeColor:c,onLayoutSaved:m,darkMode:u=!1,currentUserId:r}){const h=yt("highlight-builder"),x=t.orgProfile.teamMembers||[],[p,b]=d.useState(()=>{const N=Nc();return c&&!N.themeColor?{...N,themeColor:c}:N}),[C,w]=d.useState(""),[g,k]=d.useState(0),$=d.useRef(null),G=d.useMemo(()=>new Set(p.sections),[p.sections]),f=d.useMemo(()=>p.sections.reduce((N,W,P)=>(N[W]=P,N),{}),[p.sections]),v=p.orientation==="landscape",O=v?"overflow-hidden rounded-lg border border-[#003087] bg-white shadow-md":"rounded-md border border-slate-200 bg-white p-4",E=v?{}:{borderLeft:`3px solid ${p.themeColor}`};function B({children:N}){return v?e.jsx("div",{className:"-mx-0 -mt-0 mb-4 px-5 py-3 text-base font-bold uppercase tracking-wide text-white",style:{backgroundColor:p.themeColor||ls.blue},children:N}):e.jsx("div",{className:"mb-2 border-b border-slate-200 pb-1 text-xs font-bold uppercase tracking-wider text-slate-500",children:N})}function Y({children:N}){return v?e.jsx("div",{className:"px-5 pb-5 text-[15px]",children:N}):e.jsx(e.Fragment,{children:N})}const se=d.useMemo(()=>a.map(N=>{let W=0;N.lenses.forEach(L=>{W+=Number(i(N.id,L).score||0)});const P=Number((W/N.lenses.length).toFixed(1));return{component:N,average:P,target:N.target,gap:Number(Math.max(0,N.target-P).toFixed(1))}}),[a,i]),me=d.useMemo(()=>[...se].sort((N,W)=>W.average-N.average).slice(0,5),[se]),A=N=>{b(W=>({...W,...N}))},pe=N=>{b(W=>{const P=G.has(N)?W.sections.filter(L=>L!==N):[...W.sections,N];return{...W,sections:P}})},M=(N,W)=>{b(P=>({...P,sectionNarratives:{...P.sectionNarratives,[N]:W}}))},J=()=>{const N=new Set(p.bragSlides.map(L=>L.componentId)),W=a.find(L=>!N.has(L.id))||a[0],P={id:rt(),componentId:(W==null?void 0:W.id)||"",rows:[]};b(L=>({...L,bragSlides:[...L.bragSlides,P]}))},Ee=N=>{b(W=>({...W,bragSlides:W.bragSlides.filter(P=>P.id!==N)}))},q=(N,W)=>{b(P=>({...P,bragSlides:P.bragSlides.map(L=>L.id===N?{...L,componentId:W}:L)}))},re=N=>{const W={id:rt(),preventingGreenHtml:"",returnToGreenHtml:"",ownerId:r||"",targetDate:""};b(P=>({...P,bragSlides:P.bragSlides.map(L=>L.id===N?{...L,rows:[...L.rows,W]}:L)}))},ce=(N,W,P)=>{b(L=>({...L,bragSlides:L.bragSlides.map(X=>X.id===N?{...X,rows:X.rows.map(ee=>ee.id===W?{...ee,...P}:ee)}:X)}))},j=(N,W)=>{b(P=>({...P,bragSlides:P.bragSlides.map(L=>L.id===N?{...L,rows:L.rows.filter(X=>X.id!==W)}:L)}))};function Z(N,W){b(P=>({...P,[N]:[...P[N],W]}))}function le(N,W,P){b(L=>({...L,[N]:L[N].map(X=>X.id===W?{...X,...P}:X)}))}function Ne(N,W){b(P=>({...P,[N]:P[N].filter(L=>L.id!==W)}))}const fe=async N=>{var L;const W=(L=N.target.files)==null?void 0:L[0];if(!W)return;const P=await new Promise((X,ee)=>{const ye=new FileReader;ye.onload=()=>X(String(ye.result||"")),ye.onerror=()=>ee(new Error("Unable to read selected logo file.")),ye.readAsDataURL(W)});w(W.name),b(X=>({...X,logoDataUrl:P})),k(X=>X+1)},R=()=>{st(Ds,p),Yt("highlight-builder-layout.json",JSON.stringify(p,null,2),"application/json"),m==null||m()},z=async N=>{var P;const W=(P=N.target.files)==null?void 0:P[0];if(W)try{const L=await W.text(),X=JSON.parse(L);b({...St,...X,overallStatus:X.overallStatus==="Green"||X.overallStatus==="Amber"||X.overallStatus==="Red"?X.overallStatus:St.overallStatus,orientation:X.orientation==="portrait"||X.orientation==="landscape"?X.orientation:St.orientation,bragSlides:uo(X.bragSlides),sections:Array.isArray(X.sections)&&X.sections.length>0?X.sections:St.sections,sectionNarratives:X.sectionNarratives||{},metricRows:go(X.metricRows),riskRows:po(X.riskRows),stakeholderPositivePct:Number(X.stakeholderPositivePct)||0,stakeholderNeutralPct:Number(X.stakeholderNeutralPct)||0,stakeholderNegativePct:Number(X.stakeholderNegativePct)||0,interventionRows:ho(X.interventionRows),decisionRows:fo(X.decisionRows),assessmentRows:bo(X.assessmentRows)})}catch{window.alert("Unable to load the selected layout JSON. Please verify the file contents.")}finally{N.target.value=""}};d.useEffect(()=>{st(Ds,p)},[p]);const xe=t.history.length>1?t.history[t.history.length-2]:null,F=d.useMemo(()=>se.slice(0,10).map(N=>{const W=xe?Number((N.component.lenses.reduce((ee,ye)=>{var Ce,Re;return ee+Number(((Re=(Ce=xe.data[N.component.id])==null?void 0:Ce[ye])==null?void 0:Re.score)||0)},0)/N.component.lenses.length).toFixed(1)):N.average,P=N.average>W?"▲":N.average<W?"▼":"►",L=N.average>=N.target?"Green":N.average>=Math.max(1,N.target-1)?"Amber":"Red",X=N.average>=N.target?"Consistently understood by most stakeholder groups.":N.average>=Math.max(1,N.target-1)?"Progressing, with reinforcement still required.":"Below target and requiring focused intervention.";return{area:N.component.label,current:N.average,target:N.target,status:L,trend:P,commentary:X}}),[se,xe]),H=d.useMemo(()=>F.map(N=>({label:N.area,current:N.current,target:N.target})),[F]),te=d.useMemo(()=>n.nextSteps.slice(0,7).map(N=>N.message),[n.nextSteps]),$e=N=>{if(N==="decisions-required")return p.decisionRows.some(W=>W.decision.trim()||W.owner.trim()||W.requiredBy.trim());if((p.sectionNarratives[N]||"").trim())return!0;switch(N){case"executive-summary":return!0;case"change-dashboard":return F.length>0;case"adoption-metrics":return p.metricRows.length>0;case"what-went-well":return me.length>0;case"risks-issues":return p.riskRows.length>0;case"stakeholder-insights":return p.stakeholderPositivePct+p.stakeholderNeutralPct+p.stakeholderNegativePct>0;case"interventions-delivered":return p.interventionRows.length>0;case"upcoming-priorities":return te.length>0;case"decisions-required":return p.decisionRows.length>0;case"change-lead-assessment":return p.assessmentRows.length>0;default:return!1}},Ge=p.sections.filter(N=>$e(N)),T=N=>{let W=0;return N.reduce((P,L)=>(P[L]=W,W+=L==="change-dashboard"?2:1,P),{})},ue=T(p.sections),oe=T(Ge);function Oe({sectionId:N}){if(!v)return null;const W=xc[N],P=ee=>{const ye=Number.parseFloat(ee.replace("%","").trim());return Number.isFinite(ye)?Math.max(0,ye):0};if(W.kind==="donut"){const ee=N==="stakeholder-insights"?[p.stakeholderPositivePct,p.stakeholderNeutralPct,p.stakeholderNegativePct]:[Number(n.overallPct),Math.max(0,100-Number(n.overallPct))],ye=ee.reduce((at,ut)=>at+ut,0);if(!ye)return null;const Ce=ee[0]/ye*100,Re=ee[1]/ye*100,_e=N==="stakeholder-insights"?"Positive":"Overall progress",He=N==="stakeholder-insights"?"Neutral":"Remaining",mt=N==="stakeholder-insights"?ee[2]/ye*100:0;return e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:W.label}),e.jsx("div",{className:"mx-auto mt-4 h-32 w-32 rounded-full",style:{background:N==="stakeholder-insights"?`conic-gradient(#78be20 0 ${Ce}%, #ffb81c ${Ce}% ${Ce+Re}%, #da291c ${Ce+Re}% ${Ce+Re+mt}%, #d8eaf6 ${Ce+Re+mt}% 100%)`:`conic-gradient(#005eb8 0 ${Ce}%, #41a6c8 ${Ce}% ${Ce+Re}%, #d8eaf6 ${Ce+Re}% 100%)`,mask:"radial-gradient(circle, transparent 55%, #000 56%)",WebkitMask:"radial-gradient(circle, transparent 55%, #000 56%)"}}),e.jsxs("div",{className:"mt-4 grid gap-2 text-xs text-[#425563]",children:[e.jsxs("span",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{children:[e.jsx("i",{className:`mr-2 inline-block h-2.5 w-2.5 rounded-full ${N==="stakeholder-insights"?"bg-[#78be20]":"bg-[#005eb8]"}`}),_e]}),e.jsxs("strong",{children:[ee[0],"%"]})]}),e.jsxs("span",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{children:[e.jsx("i",{className:`mr-2 inline-block h-2.5 w-2.5 rounded-full ${N==="stakeholder-insights"?"bg-[#ffb81c]":"bg-[#41a6c8]"}`}),He]}),e.jsxs("strong",{children:[ee[1],"%"]})]}),N==="stakeholder-insights"?e.jsxs("span",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{children:[e.jsx("i",{className:"mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#da291c]"}),"Negative"]}),e.jsxs("strong",{children:[ee[2],"%"]})]}):null]})]})}if(W.kind==="risk"){const ee=p.riskRows.reduce((Re,_e)=>{const He=_e.status.trim()||"Open";return Re[He]=(Re[He]||0)+1,Re},{}),ye=Object.entries(ee);if(!ye.length)return null;const Ce=Math.max(...ye.map(([,Re])=>Re));return e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:W.label}),e.jsx("div",{className:"mt-5 space-y-3",children:ye.map(([Re,_e])=>e.jsxs("div",{children:[e.jsxs("div",{className:"mb-1 flex justify-between text-xs font-semibold text-[#425563]",children:[e.jsx("span",{children:Re}),e.jsx("span",{children:_e})]}),e.jsx("div",{className:"h-4 rounded bg-white",children:e.jsx("div",{className:"h-4 rounded",style:{width:`${_e/Ce*100}%`,backgroundColor:Re.toLowerCase().includes("closed")?"#78be20":Re.toLowerCase().includes("at risk")?"#da291c":"#ffb81c"}})})]},Re))})]})}if(W.kind==="steps"){const ee=N==="interventions-delivered"?p.interventionRows.map(ye=>ye.text.trim()).filter(Boolean):N==="upcoming-priorities"?te:me.map(ye=>ye.component.label);return ee.length?e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:W.label}),e.jsx("div",{className:"mt-5 space-y-3",children:ee.slice(0,5).map((ye,Ce)=>e.jsxs("div",{className:"flex items-start gap-3 text-xs text-[#425563]",children:[e.jsx("span",{className:"flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-bold text-white",style:{backgroundColor:Qt[Ce%Qt.length]},children:Ce+1}),e.jsx("span",{className:"pt-0.5",children:ye})]},`${ye}-${Ce}`))})]}):null}if(W.kind==="trend"&&N==="decisions-required"){const ee=p.decisionRows.map(ye=>ye.decision.trim()).filter(Boolean);return ee.length?e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:W.label}),e.jsx("div",{className:"mt-5 space-y-3",children:ee.slice(0,5).map((ye,Ce)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"h-5 flex-1 rounded bg-white",children:e.jsx("div",{className:"h-5 rounded",style:{width:`${100-Ce*15}%`,backgroundColor:Qt[Ce%Qt.length]}})}),e.jsx("span",{className:"max-w-[45%] text-right text-xs text-[#425563]",children:ye})]},`${ye}-${Ce}`))})]}):null}const X=(N==="adoption-metrics"?p.metricRows.map(ee=>({label:ee.measure,value:P(ee.current),max:Math.max(100,P(ee.target))})):N==="change-lead-assessment"?["High","Medium","Low"].map(ee=>({label:ee,value:p.assessmentRows.filter(ye=>ye.confidence===ee).length,max:Math.max(1,p.assessmentRows.length)})):me.map(ee=>({label:ee.component.label,value:ee.average,max:5}))).filter(ee=>ee.label.trim()&&ee.value>0);return X.length?e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:W.label}),e.jsx("div",{className:"mt-5 space-y-3",children:X.slice(0,6).map(ee=>e.jsxs("div",{children:[e.jsxs("div",{className:"mb-1 flex justify-between gap-2 text-xs font-semibold text-[#425563]",children:[e.jsx("span",{children:ee.label}),e.jsx("span",{children:ee.value})]}),e.jsx("div",{className:"h-4 rounded bg-white",children:e.jsx("div",{className:"h-4 rounded",style:{width:`${Math.min(100,ee.value/ee.max*100)}%`,backgroundColor:Qt[X.indexOf(ee)%Qt.length]}})})]},ee.label))})]}):null}const De=N=>{if((p.sectionNarratives[N]||"").trim())return p.sectionNarratives[N].trim();switch(N){case"executive-summary":return`${p.overallStatus}. The programme continues to progress across ${a.length} components and ${s.length} lenses, with overall delivery at ${n.overallPct}%.`;case"change-dashboard":return"Dashboard status is derived from current component averages versus targets, with trend based on the most recent finalised snapshot.";case"adoption-metrics":return"Metrics below provide an operational view of progress against key adoption measures and targets.";case"what-went-well":return"List key achievements for the reporting period, including sponsorship visibility and areas of strengthened adoption.";case"risks-issues":return"The following risks/issues require active monitoring and mitigation.";case"stakeholder-insights":return"Summarise positive feedback themes, concerns, and sentiment from stakeholder listening channels.";case"interventions-delivered":return"Capture interventions completed this month and assess their observed effectiveness.";case"upcoming-priorities":return"Set out the next 30-day focus to maintain delivery momentum and close adoption gaps.";case"decisions-required":return"Record approvals and decisions needed to unblock delivery and sustain adoption progress.";case"change-lead-assessment":return"Provide confidence ratings and the overall professional assessment from the Change Lead.";default:return""}},Le=N=>{const W=De(N);return N==="change-dashboard"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:W}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Trend"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Commentary"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:F.map(P=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:P.area}),e.jsx("td",{className:"px-3 py-2 text-sm",children:e.jsx(oi,{status:P.status})}),e.jsx("td",{className:"px-3 py-2 text-sm",children:P.trend}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:P.commentary})]},P.area))})]})})]}):N==="adoption-metrics"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:W}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Measure"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[p.metricRows.map(P=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:P.measure,onChange:L=>le("metricRows",P.id,{measure:L.target.value}),placeholder:"e.g. Active Users",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:P.target,onChange:L=>le("metricRows",P.id,{target:L.target.value}),placeholder:"e.g. 80%",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:P.current,onChange:L=>le("metricRows",P.id,{current:L.target.value}),placeholder:"e.g. 62%",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:P.status,onChange:L=>le("metricRows",P.id,{status:L.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"Green",children:"Green"}),e.jsx("option",{value:"Amber",children:"Amber"}),e.jsx("option",{value:"Red",children:"Red"})]})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>Ne("metricRows",P.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},P.id)),p.metricRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No metrics added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>Z("metricRows",{id:rt(),measure:"",target:"",current:"",status:"Amber"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Metric"})]}):N==="risks-issues"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:W}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Risk / Issue"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Impact"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Mitigation"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[p.riskRows.map(P=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:P.risk,onChange:L=>le("riskRows",P.id,{risk:L.target.value}),placeholder:"e.g. Inconsistent adoption in Vision",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:P.impact,onChange:L=>le("riskRows",P.id,{impact:L.target.value}),placeholder:"e.g. Benefits may not be realised",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:P.mitigation,onChange:L=>le("riskRows",P.id,{mitigation:L.target.value}),placeholder:"e.g. Targeted coaching sessions",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:P.status,onChange:L=>le("riskRows",P.id,{status:L.target.value}),placeholder:"Open",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>Ne("riskRows",P.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},P.id)),p.riskRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No key risks added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>Z("riskRows",{id:rt(),risk:"",impact:"",mitigation:"",status:"Open"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Risk / Issue"})]}):N==="upcoming-priorities"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:W}),e.jsx("ol",{className:"mt-3 list-decimal pl-5 space-y-1 text-sm text-slate-700",children:te.length?te.map((P,L)=>e.jsx("li",{children:P},`${P}-${L}`)):e.jsx("li",{children:"No immediate priorities detected from current data."})})]}):N==="what-went-well"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:W}),e.jsx("ul",{className:"mt-3 space-y-1.5 text-sm text-slate-700",children:me.slice(0,5).map(P=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(wc,{}),P.component.label," is tracking at ",P.average," against target ",P.target,"."]},P.component.id))})]}):N==="stakeholder-insights"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:W}),e.jsxs("div",{className:"mt-3 grid gap-2 md:grid-cols-3 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 rounded border border-green-200 bg-green-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-green-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Positive:",e.jsx("input",{type:"number",min:0,max:100,value:p.stakeholderPositivePct,onChange:P=>A({stakeholderPositivePct:Number(P.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-amber-200 bg-amber-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Neutral:",e.jsx("input",{type:"number",min:0,max:100,value:p.stakeholderNeutralPct,onChange:P=>A({stakeholderNeutralPct:Number(P.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-red-200 bg-red-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-red-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Negative:",e.jsx("input",{type:"number",min:0,max:100,value:p.stakeholderNegativePct,onChange:P=>A({stakeholderNegativePct:Number(P.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]})]})]}):N==="interventions-delivered"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:W}),e.jsxs("ul",{className:"mt-3 space-y-2 text-sm text-slate-700",children:[p.interventionRows.map(P=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("input",{value:P.text,onChange:L=>le("interventionRows",P.id,{text:L.target.value}),placeholder:"e.g. Sponsor briefing sessions",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>Ne("interventionRows",P.id),className:"shrink-0 rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},P.id)),p.interventionRows.length?null:e.jsx("li",{className:"text-slate-500",children:"No interventions added yet."})]}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>Z("interventionRows",{id:rt(),text:""}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Intervention"})]}):N==="decisions-required"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:W}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Decision"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Required By"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[p.decisionRows.map(P=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:P.decision,onChange:L=>le("decisionRows",P.id,{decision:L.target.value}),placeholder:"e.g. Approval for additional adoption support resource",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:P.owner,onChange:L=>le("decisionRows",P.id,{owner:L.target.value}),placeholder:"e.g. Programme Board",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:P.requiredBy,onChange:L=>le("decisionRows",P.id,{requiredBy:L.target.value}),placeholder:"TBC",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>Ne("decisionRows",P.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},P.id)),p.decisionRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:4,children:"No decisions added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>Z("decisionRows",{id:rt(),decision:"",owner:"",requiredBy:""}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Decision"})]}):N==="change-lead-assessment"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:W}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Confidence"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[p.assessmentRows.map(P=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:P.area,onChange:L=>le("assessmentRows",P.id,{area:L.target.value}),placeholder:"e.g. Stakeholder Engagement",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:P.confidence,onChange:L=>le("assessmentRows",P.id,{confidence:L.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"High",children:"High"}),e.jsx("option",{value:"Medium",children:"Medium"}),e.jsx("option",{value:"Low",children:"Low"})]})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>Ne("assessmentRows",P.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},P.id)),p.assessmentRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:3,children:"No assessment areas added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>Z("assessmentRows",{id:rt(),area:"",confidence:"Medium"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Assessment Area"})]}):e.jsx(e.Fragment,{children:e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:W})})},Ue=()=>{if(!$.current){window.alert("Preview content is not ready to print yet.");return}const N=window.open("","_blank");if(!N)return;N.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8" /><title>Highlight Report</title></head><body></body></html>'),document.querySelectorAll('link[rel="stylesheet"], style').forEach(L=>{N.document.head.appendChild(L.cloneNode(!0))});const W=N.document.createElement("style");W.textContent=`
      @page { margin: 8mm; size: A4 ${p.orientation}; }
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
      .printable-report [data-print-only="true"] { display: inline !important; }
      .printable-report article { break-inside: avoid; page-break-inside: avoid; }
      .printable-report .report-slide { min-height: 180mm; break-after: page; page-break-after: always; }
      .printable-report .report-intro-slide { min-height: 180mm; }
      .printable-report [data-brag-slide="true"] { break-after: page; page-break-after: always; }
      .printable-report table { width: 100%; }
    `,N.document.head.appendChild(W);const P=$.current.cloneNode(!0);P.className="printable-report",P.querySelectorAll('[data-print-exclude="true"]').forEach(L=>L.remove()),N.document.body.appendChild(P),N.document.close(),setTimeout(()=>{N.focus(),N.print(),N.close()},250)};return e.jsxs("section",{className:"space-y-6",children:[u?e.jsx("div",{className:"rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm font-semibold text-red-900",children:"Dark mode not compatible for Highlight Report due to print/save functionality."}):null,e.jsx("div",{className:"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",children:e.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Highlight Builder Tool"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:"Create a polished highlight pack"}),e.jsx(jt,{onClick:h.reopen})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:R,className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"Save JSON Layout"}),e.jsxs("label",{className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 cursor-pointer",children:["Load JSON Layout",e.jsx("input",{type:"file",accept:"application/json",className:"hidden",onChange:z},g)]}),e.jsxs("div",{className:"flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-semibold",role:"group","aria-label":"PDF export orientation",children:[e.jsx("button",{type:"button",onClick:()=>A({orientation:"portrait"}),"aria-pressed":p.orientation==="portrait",className:`px-3 py-2 transition-colors ${p.orientation==="portrait"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Portrait"}),e.jsx("button",{type:"button",onClick:()=>A({orientation:"landscape"}),"aria-pressed":p.orientation==="landscape",className:`px-3 py-2 transition-colors border-l border-slate-300 ${p.orientation==="landscape"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Landscape"})]}),e.jsxs("button",{type:"button",onClick:Ue,className:"rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm",style:{backgroundColor:p.themeColor},children:["Print / Save PDF (",p.orientation==="landscape"?"Landscape":"Portrait",")"]})]})]})}),e.jsxs("div",{className:"grid gap-6 xl:grid-cols-[340px,1fr]",children:[e.jsx("aside",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Report title"}),e.jsx("input",{value:p.title,onChange:N=>A({title:N.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Programme"}),e.jsx("input",{value:p.programmeName,onChange:N=>A({programmeName:N.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Reporting period"}),e.jsx("input",{value:p.reportingPeriod,onChange:N=>A({reportingPeriod:N.target.value}),placeholder:"July 2026",className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Change Lead"}),e.jsx("input",{value:p.changeLeadName,onChange:N=>A({changeLeadName:N.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"SRO"}),e.jsx("input",{value:p.sroName,onChange:N=>A({sroName:N.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Overall Change Status"}),e.jsxs("select",{value:p.overallStatus,onChange:N=>A({overallStatus:N.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500",children:[e.jsx("option",{value:"Green",children:"Green"}),e.jsx("option",{value:"Amber",children:"Amber"}),e.jsx("option",{value:"Red",children:"Red"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Theme colour"}),e.jsx("input",{type:"color",value:p.themeColor,onChange:N=>A({themeColor:N.target.value}),className:"h-10 w-full rounded-md border border-slate-300"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Logo in top-left"}),e.jsxs("label",{className:"flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-3 py-4 text-sm text-slate-700 hover:bg-slate-100",children:[e.jsx("span",{children:C||"Upload logo"}),e.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:fe})]}),p.logoDataUrl?e.jsx("div",{className:"mt-3 rounded-md border border-slate-200 bg-slate-50 p-2",children:e.jsx("img",{alt:"Preview logo",src:p.logoDataUrl,className:"max-h-16 w-auto"})}):null]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-1",children:"Programme/Project Readiness Slides"}),e.jsx("p",{className:"text-xs text-slate-500 mb-3",children:"These print first, one per page. Add a slide per component you want to report on."}),e.jsxs("div",{className:"space-y-2",children:[p.bragSlides.map((N,W)=>e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-500",children:["Page ",W+1]}),e.jsx("button",{type:"button",onClick:()=>Ee(N.id),className:"text-xs font-semibold text-red-600 hover:text-red-800",children:"Remove"})]}),e.jsx("select",{value:N.componentId,onChange:P=>q(N.id,P.target.value),className:"mt-1 w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm outline-none focus:border-blue-500",children:a.map(P=>e.jsx("option",{value:P.id,children:P.label},P.id))}),e.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:[N.rows.length," row",N.rows.length===1?"":"s"]})]},N.id)),p.bragSlides.length?null:e.jsx("p",{className:"text-sm text-slate-500",children:"No readiness slides yet."})]}),e.jsx("button",{type:"button",onClick:J,disabled:!a.length,className:"mt-3 w-full rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 disabled:opacity-50",children:"+ Add Readiness Slide"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-3",children:"Report sections"}),e.jsx("div",{className:"space-y-2",children:ps.map(N=>{const W=G.has(N.id),P=N.id,L=f[N.id],X=typeof L=="number"?vn(L,N.label):N.label;return e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("label",{className:"flex items-center gap-3 text-sm text-slate-700",children:[e.jsx("input",{type:"checkbox",checked:W,onChange:()=>pe(N.id)}),e.jsx("span",{children:X})]}),W?e.jsxs("div",{className:"mt-3 space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-1",children:"Section narrative"}),e.jsx("textarea",{value:p.sectionNarratives[P]||"",onChange:ee=>M(P,ee.target.value),placeholder:De(P),rows:4,className:"w-full rounded-md border border-slate-300 px-2 py-2 text-xs outline-none focus:border-blue-500"})]}),e.jsx("p",{className:"text-xs text-slate-500",children:"All adoption components are automatically included in this section."})]}):null]},N.id)})})]})]})}),e.jsxs("div",{ref:$,className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsx("div",{className:`report-intro-slide ${v?"report-slide":""} mb-6 overflow-hidden rounded-lg border border-[#003087] bg-white shadow-md ${v?"grid gap-8 p-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center":"flex items-center gap-3 p-3"}`,style:v?{borderTop:`14px solid ${p.themeColor||ls.blue}`}:void 0,children:e.jsxs("div",{className:v?"space-y-6":"flex items-center gap-3",children:[p.logoDataUrl?e.jsx("img",{alt:"Logo preview",src:p.logoDataUrl,className:v?"max-h-20 w-auto":"max-h-12 w-auto"}):e.jsx("div",{className:`flex items-center justify-center rounded-md bg-[#005eb8] font-bold text-white ${v?"h-20 w-20 text-xl":"h-12 w-12 text-sm"}`,children:"NHS"}),e.jsxs("div",{children:[e.jsx("div",{"data-print-hide":"true",className:"text-xs font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Builder Preview · Intro Slide"}),e.jsx("div",{className:v?"mt-3 text-4xl font-bold leading-tight text-[#003087]":"text-lg font-bold text-slate-900",children:p.title}),e.jsxs("div",{className:"mt-2 text-sm text-slate-600",children:[p.programmeName||o||"Unnamed Programme"," ·"," ",p.reportingPeriod||"Reporting period not set"]}),e.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600",children:[e.jsx("span",{children:l||"Unconfigured Trust"}),e.jsx(oi,{status:p.overallStatus})]}),v?e.jsx("p",{className:"mt-8 max-w-xl border-l-4 border-[#41a6c8] pl-4 text-lg leading-7 text-[#425563]",children:"Change adoption highlight report covering current progress, risks and priorities."}):null]})]})}),e.jsxs("div",{className:v?"grid gap-6":"grid gap-2","data-orientation":p.orientation,children:[p.bragSlides.map(N=>{const W=se.find(L=>L.component.id===N.componentId),P=W?Ui(W.average,W.target):null;return e.jsxs("article",{"data-brag-slide":"true",className:`${O} ${v?"report-slide":""}`,style:E,children:[e.jsxs("div",{className:v?"flex flex-wrap items-center justify-between gap-3 px-5 py-3 text-white":"flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-2",style:v?{backgroundColor:p.themeColor||ls.blue}:void 0,children:[e.jsxs("div",{children:[e.jsx("p",{className:v?"text-xs font-semibold uppercase tracking-wider text-white/80":"text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Programme/Project Readiness"}),e.jsx("h3",{className:v?"text-xl font-bold text-white":"text-base font-bold text-slate-900",children:(W==null?void 0:W.component.label)||"Select a component"})]}),W&&P?e.jsxs("div",{className:"text-right",children:[e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold ${Hi[P]}`,children:P}),e.jsxs("p",{className:`mt-1 text-xs ${v?"text-white/80":"text-slate-500"}`,children:[W.average.toFixed(1)," of ",W.target," target"]})]}):null]}),e.jsx("div",{className:v?"mx-5 mb-5 mt-3 overflow-x-auto rounded-md border border-slate-200":"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What is preventing you from being green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What do you/others need to do to return to green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target date"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[N.rows.map(L=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(ii,{value:L.preventingGreenHtml,onChange:X=>ce(N.id,L.id,{preventingGreenHtml:X}),placeholder:"What's blocking green?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(ii,{value:L.returnToGreenHtml,onChange:X=>ce(N.id,L.id,{returnToGreenHtml:X}),placeholder:"What needs to happen?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:L.ownerId,onChange:X=>ce(N.id,L.id,{ownerId:X.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"",children:"Unassigned"}),x.map(X=>e.jsxs("option",{value:X.id,children:[X.name||"Unnamed",X.role?` - ${X.role}`:""]},X.id))]})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{type:"date",value:L.targetDate,onChange:X=>ce(N.id,L.id,{targetDate:X.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>j(N.id,L.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},L.id)),N.rows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No rows yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>re(N.id),className:v?"mx-5 mb-5 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200":"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Row"})]},N.id)}),p.sections.map(N=>{var W,P;return e.jsxs(Vt.Fragment,{children:[e.jsxs("article",{"data-brag-slide":v?"true":void 0,"data-print-exclude":$e(N)?void 0:"true",className:`${O} ${v?"report-slide":""}`,style:E,children:[e.jsxs(B,{children:[e.jsx("span",{"data-print-hide":"true",children:vn(ue[N]||0,((W=ps.find(L=>L.id===N))==null?void 0:W.label)||N)}),e.jsx("span",{className:"hidden","data-print-only":"true",children:vn(oe[N]||0,((P=ps.find(L=>L.id===N))==null?void 0:P.label)||N)})]}),e.jsxs("div",{className:v&&N!=="change-dashboard"?"grid gap-5 px-5 pb-5 lg:grid-cols-[1fr,220px] lg:items-start":void 0,children:[e.jsx(Y,{children:Le(N)}),N!=="change-dashboard"?e.jsx(Oe,{sectionId:N}):null]})]}),v&&N==="change-dashboard"?e.jsxs("article",{"data-brag-slide":"true","data-print-exclude":$e(N)?void 0:"true",className:`${O} report-slide`,style:E,children:[e.jsxs(B,{children:[e.jsx("span",{"data-print-hide":"true",children:vn((ue[N]||0)+1,"Change Dashboard Chart")}),e.jsx("span",{className:"hidden","data-print-only":"true",children:vn((oe[N]||0)+1,"Change Dashboard Chart")})]}),e.jsx("div",{className:"px-8 pb-8",children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-6 max-w-2xl text-base leading-6 text-[#425563]",children:"Current component averages compared with the target score. The red marker shows the target for each area."}),e.jsx(Sc,{rows:H})]})})]}):null]},N)})]})]})]}),e.jsx(Nt,{open:h.isOpen,onClose:h.close,title:"Highlight Builder Tool",body:e.jsx("p",{children:"Build a polished, presentation-ready highlight pack summarising progress across your programme - pick a layout, edit the content, and save or export it when you're happy."})})]})}function kc(t){const n={};return t.sections.forEach(s=>{s.items.forEach(a=>{n[a.id]="mine"})}),n}function ri({active:t,onClick:n,children:s,darkMode:a}){return e.jsx("button",{type:"button",onClick:n,className:`rounded-md border px-2 py-1 text-left text-xs transition-colors ${Gs} ${t?"border-[#005eb8] bg-[#005eb8]/10 font-semibold text-[#005eb8]":a?"border-slate-600 bg-slate-900 text-slate-300 hover:bg-slate-800":"border-slate-300 bg-white text-slate-600 hover:bg-slate-50"}`,children:s})}function Cc({item:t,choice:n,onChoose:s,myLabel:a,theirLabel:i,darkMode:l}){return e.jsxs("div",{"data-testid":`import-conflict-row-${t.id}`,className:`grid grid-cols-1 gap-2 border-t py-3 first:border-t-0 md:grid-cols-[1fr_1fr_1fr] ${l?"border-slate-700":"border-slate-200"}`,children:[e.jsx("div",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:t.label}),e.jsxs(ri,{active:n==="mine",onClick:()=>s(t.id,"mine"),darkMode:l,children:[e.jsx("span",{className:`block text-[0.65rem] font-bold uppercase tracking-wide ${l?"text-slate-400":"text-slate-500"}`,children:a}),t.mineSummary]}),e.jsxs(ri,{active:n==="theirs",onClick:()=>s(t.id,"theirs"),darkMode:l,children:[e.jsx("span",{className:`block text-[0.65rem] font-bold uppercase tracking-wide ${l?"text-slate-400":"text-slate-500"}`,children:i}),t.theirsSummary]})]})}function Ec({report:t,myLabel:n,theirLabel:s,onResolve:a,onCancel:i,darkMode:l=!1}){const[o,c]=d.useState(()=>kc(t)),m=t.sections.reduce((r,h)=>r+h.items.length,0),u=r=>{c(h=>{const x={...h};return t.sections.forEach(p=>{p.items.forEach(b=>{x[b.id]=r})}),x})};return e.jsx("div",{"data-testid":"import-conflict-modal",className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4",onClick:r=>{r.target===r.currentTarget&&i()},children:e.jsxs("div",{onClick:r=>r.stopPropagation(),className:`flex w-full max-w-4xl max-h-[90vh] flex-col rounded-lg border shadow-xl ${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:`shrink-0 border-b p-6 ${l?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("h2",{className:`text-xl font-bold ${l?"text-slate-100":"text-slate-800"}`,children:"Resolve import conflicts"}),e.jsxs("p",{className:`mt-1 text-sm ${l?"text-slate-300":"text-slate-600"}`,children:["Comparing ",e.jsx("span",{className:"font-semibold",children:n})," (currently loaded) against"," ",e.jsx("span",{className:"font-semibold",children:s})," (the imported file)."]}),e.jsxs("p",{className:`mt-1 text-xs ${l?"text-slate-400":"text-slate-500"}`,children:[m," item",m===1?"":"s"," need a decision",t.autoMergeSummary.length?` · also merging automatically: ${t.autoMergeSummary.join(", ")}`:""]}),e.jsxs("div",{className:"mt-3 flex gap-2",children:[e.jsx("button",{type:"button",onClick:()=>u("mine"),className:`${We} h-8 px-3 py-0 text-xs`,children:"Use all mine"}),e.jsx("button",{type:"button",onClick:()=>u("theirs"),className:`${We} h-8 px-3 py-0 text-xs`,children:"Use all theirs"})]})]}),e.jsx("div",{className:"flex-1 space-y-6 overflow-y-auto p-6",children:t.sections.map(r=>e.jsxs("div",{children:[e.jsx("h3",{className:`mb-1 text-sm font-bold uppercase tracking-wide ${l?"text-slate-300":"text-slate-500"}`,children:r.title}),e.jsx("div",{className:`rounded-md border px-3 ${l?"border-slate-700":"border-slate-200"}`,children:r.items.map(h=>e.jsx(Cc,{item:h,choice:o[h.id]||"mine",onChoose:(x,p)=>c(b=>({...b,[x]:p})),myLabel:n,theirLabel:s,darkMode:l},h.id))})]},r.id))}),e.jsxs("div",{className:`flex shrink-0 justify-end gap-3 border-t p-4 ${l?"border-slate-700":"border-slate-200"}`,children:[e.jsx("button",{type:"button","data-testid":"import-conflict-cancel",onClick:i,className:We,children:"Cancel Import"}),e.jsx("button",{type:"button","data-testid":"import-conflict-apply",onClick:()=>a(o),className:Kt,children:"Apply and Import"})]})]})})}function li(){return e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Ic(t){return t in Ys}function Ac({lensName:t,onClose:n,darkMode:s=!1}){if(!t||!Ic(t))return null;const a=Ys[t];return e.jsx("div",{id:"lens-info-modal",className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&n()},children:e.jsxs("div",{className:`${s?"bg-slate-800 border-slate-700":"bg-white"} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border`,children:[e.jsxs("div",{className:`${s?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} sticky top-0 border-b p-6 flex items-center justify-between`,children:[e.jsx("h2",{className:`text-2xl font-bold ${s?"text-slate-100":"text-slate-800"}`,children:t}),e.jsx("button",{onClick:n,className:`${s?"text-slate-300 hover:text-slate-100":"text-slate-500 hover:text-slate-700"}`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsxs("div",{className:`p-6 space-y-4 ${s?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(li,{}),"Outcome"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.outcome})]}),e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(li,{}),"What Good Looks Like"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.whatGoodLooksLike})]})]})]})})}const Oc=[{id:"why",question:"Why are we doing this?",framework:"Force Field Analysis - Driving Forces",description:"The forces pushing for change - the case that makes it worth doing.",componentIds:["case_for_change"]},{id:"future",question:"What will the future look like?",framework:"Vision",description:"A clear picture of the destination, understood and shared by everyone.",componentIds:["vision"]},{id:"barriers",question:"What might prevent us from achieving the vision?",framework:"Force Field Analysis - Restraining Forces",description:"The forces working against change - risks, resistance and blockers to plan for.",componentIds:["case_for_change","resistance"]},{id:"impacted",question:"Who's going to be impacted by the change?",framework:"Stakeholder Analysis & Change Impact Analysis",description:"Everyone affected by the change, and how deeply it affects them.",componentIds:["stakeholder","change_impact"]},{id:"leading",question:"Who's leading the change?",framework:"Sponsor Coalition & Change Network",description:"The visible leaders and the network of champions carrying the change day to day.",componentIds:["sponsorship","change_network"]},{id:"persuade",question:"How will we persuade people to change?",framework:"Case for Change",description:"The compelling narrative that wins hearts and minds.",componentIds:["case_for_change"]}],Ps="nhs-digital-adoption-introduction-complete",Rc=[{title:"Handling Resistance",body:"Helping project managers navigate potential roadblocks and maintain project momentum through identifying and addressing resistance using effective communication, stakeholder engagement, and mitigation strategies."},{title:"Engaging Stakeholders",body:"Identifying key individuals and groups affected by the project and working closely with them to understand concerns, gather feedback, and ensure their perspectives are considered."},{title:"Communicating and Raising Awareness",body:"Developing engagement and communication plans that support project managers in creating clear and consistent messaging about the project's purpose, goals, and benefits."},{title:"Managing Expectations",body:"Setting realistic expectations for stakeholders regarding project outcomes, timelines, and potential disruptions by addressing concerns, clarifying misconceptions, and managing expectations."},{title:"Ensuring Change Readiness",body:"Assessing the readiness of an organisation or team for change and developing strategies to bridge any gaps."},{title:"Mitigating Risks",body:"Through anticipating and addressing risks associated with change, such as resistance, lack of stakeholder support, or unexpected obstacles."},{title:"Adopting Change Sustainably",body:"Supporting project managers in developing strategies to embed the changes into the organisation's culture, processes, and systems."}];function _c(t){const n=t?"text-slate-300":"text-slate-700";return[{title:"What is the Adoption Engine?",body:e.jsxs("div",{className:`text-sm space-y-2 ${n}`,children:[e.jsx("p",{children:"Going live with a new digital product isn't the finish line - people still need to adopt it, change how they work, and keep using it."}),e.jsx("p",{children:"The Adoption Engine helps you track how people and teams are adopting the change before go-live, during rollout, and after launch so progress is visible and outcomes are measurable."}),e.jsx("p",{children:"It helps you answer four simple questions:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"Where are we going?"}),e.jsx("li",{children:"How will we know we've got there?"}),e.jsx("li",{children:"What needs to be in place?"}),e.jsx("li",{children:"What should we do next?"})]}),e.jsx("p",{children:"The goal is not just to implement change, but to ensure it is adopted, embedded and delivering benefits."})]})},{title:"What benefit does this tool give me?",body:e.jsxs("div",{className:`text-sm space-y-2 ${n}`,children:[e.jsx("p",{children:"Without it, adoption progress lives in scattered spreadsheets, memories and gut feel - hard to prove, hard to hand over, and easy to lose momentum on."}),e.jsx("p",{children:"With it, you get a single, evidenced picture of where your change effort actually stands:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1",children:[e.jsx("li",{children:"See at a glance what's on track, what's at risk, and what to do next."}),e.jsx("li",{children:`Turn vague "how's it going?" conversations into a clear, evidence-backed status you can show your sponsor or board.`}),e.jsx("li",{children:"Get a ready-made action plan for each area, so you're not starting from a blank page."}),e.jsx("li",{children:"Build a highlight report in minutes instead of an afternoon of copy-pasting."})]})]})},{title:"Context Specific Templates (CSTs)",body:e.jsxs("div",{className:`text-sm space-y-2 ${n}`,children:[e.jsx("p",{children:"A CST (Context Specific Template) contains the information that makes the Adoption Engine specific to your project, programme or initiative."}),e.jsx("p",{children:"It captures key information such as your scope, milestones, outcomes and benefits, and tailors the guidance, actions and resources provided."}),e.jsxs("p",{children:["You can update your project setup at any time from"," ",e.jsx("strong",{className:t?"text-slate-100":"text-slate-900",children:"Project Profile"}),"."]})]})},{title:"What is Change Management?",body:e.jsxs("div",{className:`text-sm space-y-2 ${n}`,children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Change management is the people side of change. "})," It helps individuals and organisations understand, adopt and sustain new ways of working so that change delivers benefits."]}),e.jsxs("p",{children:[e.jsx("strong",{children:" In simple terms: "}),"it helps people move from the way things are today to the way they need to be tomorrow, so that change delivers its intended value."]}),e.jsx("p",{children:"It sits alongside project management: project management delivers the change itself (the system, the process); change management makes sure the people affected by it are ready, willing and able to use it."}),e.jsx("p",{children:"The Change Onion illustrates how successful transformation is built through a series of connected layers. It starts with Implementation, providing the technology or physical capability. Business Change establishes new processes, while Change Management helps people understand, adopt and sustain new ways of working. When all of these layers are brought together, organisations can achieve Transformation and realise the full benefits of change."}),e.jsx("img",{src:"/assets/The%20Change%20Onion.png",alt:"The Change Onion diagram",className:"w-full max-w-xl mx-auto rounded-md border border-slate-200"})]})},{title:"What is a Change Manager?",body:e.jsxs("div",{className:`text-sm space-y-4 ${n}`,children:[e.jsx("p",{children:"Change management (and change managers) provide essential assistance to project managers through:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:Rc.map(s=>e.jsxs("div",{className:`rounded-md border p-4 ${t?"border-slate-700 bg-slate-900":"border-slate-100 bg-slate-50"}`,children:[e.jsx("p",{className:"text-sm font-semibold text-[#005eb8] mb-1",children:s.title}),e.jsx("p",{className:`text-xs leading-relaxed ${t?"text-slate-300":"text-slate-600"}`,children:s.body})]},s.title))})]})},{title:"The 6 Key Questions",body:e.jsxs("div",{className:`text-sm space-y-4 ${n}`,children:[e.jsx("p",{children:"Six questions worth returning to throughout the life of the programme, each backed by a change model."}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-2",children:Oc.map((s,a)=>e.jsxs("div",{className:`rounded-md border p-4 ${t?"border-slate-700 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"shrink-0 w-7 h-7 rounded-full bg-blue-100 text-[#005eb8] text-xs font-bold flex items-center justify-center",children:["Q",a+1]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${t?"text-slate-100":"text-slate-800"}`,children:s.question}),e.jsx("span",{className:`mt-1 inline-block rounded border px-2 py-0.5 text-xs font-medium ${t?"border-indigo-500/40 bg-indigo-500/15 text-indigo-200":"border-indigo-200 bg-indigo-50 text-indigo-700"}`,children:s.framework})]})]}),e.jsx("p",{className:`mt-3 text-xs leading-relaxed ${t?"text-slate-300":"text-slate-600"}`,children:s.description})]},s.id))})]})}]}function Dc({darkMode:t=!1,onGetStarted:n}){const s=_c(t),a=!!dt(Ps),[i,l]=d.useState(0),[o,c]=d.useState(a?s.length-1:0),m=i===s.length-1,u=o>=s.length-1,r=x=>{x<=o&&l(x)},h=()=>{const x=Math.min(s.length-1,i+1);l(x),c(p=>{const b=Math.max(p,x);return b>=s.length-1&&st(Ps,!0),b})};return e.jsxs("div",{className:"w-full space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${t?"text-slate-100":"text-slate-800"}`,children:"Introduction"}),e.jsx("p",{className:`mt-2 text-sm ${t?"text-slate-300":"text-slate-600"}`,children:"A few quick steps before you get started - each one unlocks the next."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",role:"tablist","aria-label":"Introduction steps",children:s.map((x,p)=>{const b=p<=o,C=p===i;return e.jsxs("button",{type:"button",role:"tab","aria-selected":C,"aria-disabled":!b,disabled:!b,onClick:()=>r(p),className:`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${C?"border-[#005eb8] bg-[#005eb8] text-white":b?t?"border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100":t?"border-slate-800 bg-slate-900 text-slate-600 cursor-not-allowed":"border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed"}`,children:[e.jsx("span",{className:`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${C?"bg-white text-[#005eb8]":b?"bg-[#005eb8]/10 text-[#005eb8]":""}`,children:p+1}),x.title]},x.title)})}),e.jsx("section",{className:`w-full overflow-hidden rounded-xl border shadow-sm ${t?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:e.jsxs("div",{className:"p-6 sm:p-10",children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${t?"text-blue-300":"text-blue-700"}`,children:["Step ",i+1," of ",s.length]}),e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:s[i].title}),e.jsx("div",{className:"mt-5 max-w-full",children:s[i].body}),e.jsxs("div",{className:"mt-8 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:()=>l(x=>Math.max(0,x-1)),disabled:i===0,className:`rounded-md border px-4 py-2 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${t?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Back"}),m?e.jsx("button",{type:"button",onClick:n,disabled:!u,className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] disabled:cursor-not-allowed disabled:opacity-50",children:"Get Started"}):e.jsx("button",{type:"button",onClick:h,className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]",children:"Next"})]})]})})]})}const ci={1:"Pre go-live planning and early mobilisation.",2:"Go-live readiness and immediate launch support.",3:"Early adoption reinforcement and consistency.",4:"Embedding new ways of working across teams.",5:"Sustained adoption and benefits realisation at scale."},Pc={1:"Low confidence",2:"Some confidence",3:"Moderate confidence",4:"High confidence",5:"Very high confidence"},$c={E:"Not started embedding",D:"Early adoption in practice",C:"Partly embedded in practice",B:"Mostly embedded in practice",A:"Well embedded in practice"};function Tc(t){return t>=4?"high":t===3?"average":"below"}function Lc(t){return t==="A"||t==="B"?"high":t==="C"?"average":"below"}function Mc(t,n){const s=Lc(t),a=Tc(n),i=s==="high"&&a==="high",l=s==="below"&&a==="below",o=s==="high"&&a!=="below"||a==="high"&&s!=="below";return i?"Blue":l?"Red":o?"Green":"Amber"}const hs=4;function Bc({orgProfile:t,onProfileUpdate:n,userSettings:s,onUserSettingsUpdate:a,currentUserId:i,onCurrentUserChange:l,objectives:o=[],darkMode:c=!1}){const[m,u]=d.useState(t),[r,h]=d.useState(s),[x,p]=d.useState(0),[b,C]=d.useState(null),[w,g]=d.useState(!1),k=d.useRef(null),$=yt("profile");d.useEffect(()=>{u(t)},[t]),d.useEffect(()=>{h(s)},[s]);const G=d.useCallback(E=>{const B={...r,...E};h(B),a(B)},[r,a]),f=async E=>{var se;const B=(se=E.target.files)==null?void 0:se[0];if(!B)return;const Y=await new Promise((me,A)=>{const pe=new FileReader;pe.onload=()=>me(String(pe.result||"")),pe.onerror=()=>A(new Error("Unable to read selected profile image.")),pe.readAsDataURL(B)});G({profileImageDataUrl:Y}),p(me=>me+1)},v=()=>{G({profileImageDataUrl:void 0})},O=d.useCallback((E,B,Y)=>{const se=m.cst.phaseCapability[E]||{competence:"C",confidence:3},me={...m,cst:{...m.cst,phaseCapability:{...m.cst.phaseCapability,[E]:{competence:se.competence,confidence:se.confidence,assessedAt:new Date().toISOString(),reason:"manual",[B]:Y}}}};u(me),n(me)},[m,n]);return e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${c?"text-slate-100":"text-slate-800"}`,children:"Profile"}),e.jsx(jt,{onClick:$.reopen,darkMode:c})]}),e.jsx("p",{className:`text-sm ${c?"text-slate-300":"text-slate-600"}`,children:"Your identity, progress towards your objectives, and confidence/capability self-assessment."}),e.jsx(Nt,{open:$.isOpen,onClose:$.close,title:"Profile",darkMode:c,body:e.jsx("p",{children:"Set your name, preferences and picture, see how many objectives are complete, and record your team's confidence and delivery-readiness capability at each phase."})}),o.length>0&&e.jsxs("div",{className:`${c?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-3`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"Objectives"}),e.jsxs("p",{className:`mt-1 text-sm ${c?"text-slate-300":"text-slate-600"}`,children:[o.filter(E=>E.completed).length,"/",o.length," complete - based on phase readiness, ownership, cadence and team participation."]})]}),e.jsx("div",{className:"space-y-2",children:(w?o:o.slice(0,hs)).map(E=>e.jsxs("div",{className:`rounded-lg border p-3 ${E.completed?"border-green-200 bg-green-50":c?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:E.label}),e.jsx("span",{className:"text-xs font-bold shrink-0",children:E.completed?"Done":"Not yet"})]}),e.jsx("p",{className:`mt-1 text-xs ${c?"text-slate-300":"text-slate-600"}`,children:E.description})]},E.id))}),o.length>hs&&e.jsx("button",{type:"button",onClick:()=>g(E=>!E),className:`text-sm font-semibold underline ${c?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:w?"Show fewer":`Show ${o.length-hs} more`})]}),e.jsxs("div",{className:`${c?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-5`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"Your Profile"}),e.jsx("p",{className:`mt-1 text-sm ${c?"text-slate-300":"text-slate-600"}`,children:"These details personalise your experience and reports."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-current-member",className:`block text-sm font-medium mb-1 ${c?"text-slate-200":"text-slate-700"}`,children:"You are signed in as"}),(t.teamMembers||[]).length>0?e.jsxs("select",{id:"user-current-member",value:i||"",onChange:E=>l(E.target.value),className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Not selected"}),(t.teamMembers||[]).map(E=>e.jsxs("option",{value:E.id,children:[E.name||"Unnamed",E.role?` - ${E.role}`:""]},E.id))]}):e.jsx("p",{className:`text-sm ${c?"text-slate-400":"text-slate-500"}`,children:"No team members have been added yet. Add yourself under CST Details → Team Members to link your profile."})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-sm font-medium mb-2 ${c?"text-slate-200":"text-slate-700"}`,children:"Profile Picture"}),e.jsxs("div",{className:"flex items-start gap-4",children:[r.profileImageDataUrl?e.jsx("img",{src:r.profileImageDataUrl,alt:"Profile",className:"h-20 w-20 rounded-md border border-slate-300 object-cover"}):e.jsx("div",{className:"h-20 w-20 rounded-md border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center",children:e.jsx("span",{className:"text-xs text-slate-500",children:"No image"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{type:"button",onClick:()=>{var E;return(E=k.current)==null?void 0:E.click()},className:`rounded-md px-3 py-2 text-sm font-medium transition-colors ${c?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:r.profileImageDataUrl?"Change Picture":"Upload Picture"}),r.profileImageDataUrl?e.jsx("button",{type:"button",onClick:v,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${c?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"}`,children:"Remove"}):null,e.jsx("input",{ref:k,type:"file",accept:"image/*",className:"hidden",onChange:f},x)]})]})]})]}),e.jsxs("div",{className:`${c?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"Confidence and Capability by Phase"}),e.jsx("p",{className:`mt-1 text-sm ${c?"text-slate-300":"text-slate-600"}`,children:"Capture your starting position, then refresh when readiness phase changes or after major milestones."})]}),e.jsxs("div",{className:"rounded-md border border-blue-200 bg-blue-50 p-3 text-xs text-blue-900",children:[e.jsx("p",{className:"font-semibold",children:"How this self-assessment works"}),e.jsx("p",{className:"mt-1",children:"Confidence is how sure your team feels. Delivery readiness is how embedded the new way of working is in practice."}),e.jsx("p",{className:"mt-1",children:"Cards use BRAG backgrounds: Blue = both high, Green = one high and the other at least average, Amber = neither high, Red = both below average."})]}),e.jsx("div",{className:"space-y-3",children:Li.map(E=>{const B=m.cst.phaseCapability[E]||{competence:"C",confidence:3},Y=Mc(B.competence,B.confidence),se=Y==="Blue"?"border-sky-300 bg-sky-50":Y==="Green"?"border-emerald-300 bg-emerald-50":Y==="Red"?"border-red-300 bg-red-50":"border-amber-300 bg-amber-50",me=Y==="Blue"?"text-sky-800 bg-sky-100":Y==="Green"?"text-emerald-800 bg-emerald-100":Y==="Red"?"text-red-800 bg-red-100":"text-amber-800 bg-amber-100";return e.jsxs("div",{className:`${c?"border-slate-700 bg-slate-800":se} rounded-md border p-3`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{className:"relative flex items-center gap-2",children:[e.jsxs("span",{className:`font-semibold ${c?"text-slate-100":"text-slate-700"}`,children:["Phase ",E]}),e.jsx("button",{type:"button",onMouseEnter:()=>C(E),onMouseLeave:()=>C(A=>A===E?null:A),onFocus:()=>C(E),onBlur:()=>C(A=>A===E?null:A),onClick:()=>C(A=>A===E?null:E),className:"h-5 w-5 rounded-full border border-slate-300 text-xs font-semibold text-slate-600","aria-expanded":b===E,"aria-controls":`phase-help-${E}`,"aria-label":`Phase ${E} guidance`,children:"i"}),b===E?e.jsx("div",{id:`phase-help-${E}`,role:"tooltip",className:"absolute left-0 top-7 z-10 w-72 rounded-md border border-slate-200 bg-slate-900 px-3 py-2 text-xs text-white shadow-xl",children:ci[E]}):null]}),e.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${c?"bg-slate-700 text-slate-100":me}`,children:Y})]}),e.jsx("p",{className:`mt-1 text-xs ${c?"text-slate-300":"text-slate-600"}`,children:ci[E]}),e.jsxs("div",{className:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm",children:[e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${c?"text-slate-300":"text-slate-600"}`,children:"Delivery readiness"}),e.jsx("select",{value:B.competence,onChange:A=>O(E,"competence",A.target.value),className:`w-full rounded-md border px-2 py-2 pr-10 ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Yo.map(A=>e.jsxs("option",{value:A,children:[$c[A]," (",A,")"]},`${E}-competence-${A}`))})]}),e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${c?"text-slate-300":"text-slate-600"}`,children:"Confidence"}),e.jsx("select",{value:B.confidence,onChange:A=>O(E,"confidence",Number(A.target.value)),className:`w-full rounded-md border px-2 py-2 pr-10 ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Ko.map(A=>e.jsxs("option",{value:A,children:[Pc[A]," (",A,")"]},`${E}-confidence-${A}`))})]})]})]},`phase-capability-${E}`)})})]})]})}const Fc=[{name:"NHS Blue",color:"#005eb8"},{name:"Navy",color:"#003366"},{name:"Teal",color:"#009b8a"},{name:"Purple",color:"#6c28d9"},{name:"Green",color:"#059669"},{name:"Red",color:"#dc2626"}];function Gc({userSettings:t,onUserSettingsUpdate:n,onLoadExampleData:s,onResetData:a,darkMode:i=!1}){const[l,o]=d.useState(t),c=yt("settings");d.useEffect(()=>{o(t)},[t]);const m=d.useCallback(r=>{const h={...l,...r};o(h),n(h)},[l,n]),u=r=>{m({themeColor:r})};return e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${i?"text-slate-100":"text-slate-800"}`,children:"Settings"}),e.jsx(jt,{onClick:c.reopen,darkMode:i})]}),e.jsx("p",{className:`text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Use this page to manage app appearance, guidance preferences, and data/support options."}),e.jsx(Nt,{open:c.isOpen,onClose:c.close,title:"Settings",darkMode:i,body:e.jsx("p",{children:"Manage app-wide appearance (theme, dark mode, guided-workflow and guidance-link preferences) and data/support tools like example data, reset, and bug reporting. For your personal profile and engagement progress, see the Profile page."})}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Appearance"}),e.jsx("p",{className:`mt-1 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Choose the theme colour you want to use throughout the app."})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-1",children:[e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Dark mode"}),e.jsx("input",{type:"checkbox",checked:!!l.darkMode,onChange:r=>m({darkMode:r.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show guided workflow tips on each component"}),e.jsx("input",{type:"checkbox",checked:!l.hideGuidedWorkflow,onChange:r=>m({hideGuidedWorkflow:!r.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show additional guidance links (alongside core links)"}),e.jsx("input",{type:"checkbox",checked:l.showAdditionalGuidanceLinks!==!1,onChange:r=>m({showAdditionalGuidanceLinks:r.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show external links section (Project Profile, even after marked initiated)"}),e.jsx("input",{type:"checkbox",checked:l.showExternalLinksSection===!0,onChange:r=>m({showExternalLinksSection:r.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Highlight Must/Should actions on component pages"}),e.jsx("input",{type:"checkbox",checked:l.showActionPriorityColours===!0,onChange:r=>m({showActionPriorityColours:r.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`text-sm ${i?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-medium",children:"Status colour profile"}),e.jsxs("select",{value:l.colorAccessibilityMode||"standard",onChange:r=>m({colorAccessibilityMode:r.target.value}),className:`w-full rounded-md border p-2 pr-10 ${i?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"standard",children:"Standard"}),e.jsx("option",{value:"color-blind-friendly",children:"Color-blind friendly"})]})]})]}),e.jsx("p",{className:`text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Color-blind friendly mode keeps BRAG labels in text and shifts status colors to higher-contrast alternatives."}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-theme-colour",className:`block text-sm font-medium mb-1 ${i?"text-slate-200":"text-slate-700"}`,children:"Theme Colour"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:Fc.map(r=>e.jsxs("button",{type:"button",onClick:()=>u(r.color),className:"flex items-center gap-2 rounded-md border-2 px-3 py-2 text-sm",style:{borderColor:l.themeColor===r.color?r.color:"#e2e8f0",backgroundColor:l.themeColor===r.color?`${r.color}22`:"transparent"},children:[e.jsx("span",{className:"h-4 w-4 rounded-sm border border-slate-300",style:{backgroundColor:r.color}}),e.jsx("span",{children:r.name})]},r.color))}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{id:"user-theme-colour",type:"color",className:"h-10 w-14 rounded border border-slate-300 p-1 cursor-pointer",value:l.themeColor,onChange:r=>m({themeColor:r.target.value})}),e.jsx("span",{className:`text-sm font-mono ${i?"text-slate-200":"text-slate-600"}`,children:l.themeColor})]})]})]})]}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Data and Support"}),e.jsx("p",{className:`mt-1 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Load sample data, reset local data, read FAQs, or report an issue."})]}),e.jsxs("div",{className:`${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("h4",{className:`text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Data Tools"}),e.jsxs("div",{className:"mt-3 flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>s("red"),className:"inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-800 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors",children:"Early Stage Example"}),e.jsx("button",{onClick:()=>s("amber"),className:"inline-flex items-center justify-center rounded-md bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800 border border-amber-200 shadow-[0_3px_0_#fde68a] hover:bg-amber-100 transition-colors",children:"Progressing Example"}),e.jsx("button",{onClick:()=>s("green"),className:"inline-flex items-center justify-center rounded-md bg-green-50 px-4 py-2 text-sm font-semibold text-green-800 border border-green-200 shadow-[0_3px_0_#bbf7d0] hover:bg-green-100 transition-colors",children:"Exemplar Example"})]}),e.jsx("div",{className:"mt-3 flex flex-wrap gap-3",children:e.jsx("button",{onClick:a,className:`inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors ${Gs}`,children:"Reset Data"})}),e.jsx("p",{className:`mt-2 text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Each Example Data button loads a full sample assessment at a different maturity stage, so you can explore the dashboards and workflows quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"How is my data stored?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Your settings and assessment state are stored locally in your browser using local storage."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"What does Example Data do?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Each button populates the tool with a full sample assessment at that maturity stage (Red: early stage, Amber: progressing, Green: near exemplar) so you can explore dashboards and workflows quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"Can I change the theme colour later?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Yes. Update the theme colour at any time in User Settings and it is applied immediately."})]}),e.jsxs("div",{className:`rounded-md border p-4 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("h4",{className:`mb-2 text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Submit a Bug"}),e.jsx("p",{className:`mb-3 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Found an issue? Send details directly via email."}),e.jsx("a",{href:"mailto:andrew.fraser22@kpmg.co.uk?subject=NHS%20Digital%20Adoption%20Tool%20Bug",className:`inline-flex rounded-md px-4 py-2 text-sm font-medium transition-colors ${i?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:"Report Bug"})]})]})]})}const di=[{phase:1,statement:"We've defined our vision for this change and have a case for why it's needed."},{phase:2,statement:"We've analysed the impact of the change and planned our engagement and communications approach."},{phase:3,statement:"We have a full change management plan in place, ready to execute."},{phase:4,statement:"We're actively delivering the change - communicating, training, and rolling out new ways of working."},{phase:5,statement:"The change has gone live and we're now focused on reinforcing it and making it stick."}];function Uc({component:t,getEntry:n,phase:s,darkMode:a}){const i=d.useRef(null);return d.useEffect(()=>{if(!i.current)return;const l=on(t.id,s,t.target),o=a?"#e2e8f0":"#0b1220",c=a?"rgba(226,232,240,0.10)":"rgba(11,18,32,0.06)";Gl(i.current,{labels:t.lenses,datasets:[{label:"Current",data:t.lenses.map(m=>Number(n(t.id,m).score||0)),backgroundColor:"#005EB8"},{label:"Target",data:t.lenses.map(()=>l),backgroundColor:"transparent",borderColor:"#94a3b8",borderWidth:2,borderDash:[5,5]}]},{indexAxis:"y",scales:{x:{min:0,max:5,grid:{color:c},ticks:{color:o,stepSize:1,callback:m=>ft(Number(m)).label}},y:{grid:{display:!1},ticks:{color:o,font:{size:11}}}}})},[t,s,a]),e.jsxs("div",{className:`rounded-md border p-3 ${a?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("p",{className:`text-xs font-semibold ${a?"text-slate-200":"text-slate-700"}`,children:t.label}),e.jsx("div",{style:{height:Math.max(400,t.lenses.length*60)},className:"mt-2",children:e.jsx("canvas",{ref:i,className:"block h-full w-full"})})]})}function Hc({components:t,getEntry:n,effectivePhaseFocus:s,phaseFocusMode:a,onComponentClick:i,onSetManualPhase:l,onResetToAuto:o,darkMode:c=!1}){const[m,u]=d.useState({}),[r,h]=d.useState("by-component"),[x,p]=d.useState(Cn[0]),b=d.useRef(null),C=d.useRef(null),w={display:!0,stepSize:1,backdropColor:"transparent",callback:v=>Number(v)<0?"":ft(Number(v)).label};d.useEffect(()=>{if(r!=="by-component"||!b.current)return;const v=Is(t,n,s);rn(b.current,v,{maintainAspectRatio:!1,scales:{r:{min:-1,max:5,ticks:w,pointLabels:{padding:28}}}},O=>{const E=t[O];E&&i(E.id)})},[t,n,s,i,r]),d.useEffect(()=>{if(r!=="by-lens"||!C.current)return;const v=t.filter(E=>E.lenses.includes(x)),O=Is(v,n,s,x);rn(C.current,O,{maintainAspectRatio:!1,scales:{r:{min:-1,max:5,ticks:w,pointLabels:{padding:28}}}},E=>{const B=v[E];B&&i(B.id)})},[t,n,s,i,r,x]);const g=d.useMemo(()=>Zn(s),[s]),k=d.useMemo(()=>{const v=di.filter(O=>m[O.phase]).map(O=>O.phase);return v.length?Math.max(...v):1},[m]),$=d.useMemo(()=>t.find(v=>{const O=v.lenses.map(B=>Number(n(v.id,B).score||0));return(O.length?Math.min(...O):0)<5})||null,[t,n]),G=Object.values(m).some(Boolean),f=c?"text-slate-300":"text-slate-600";return d.useEffect(()=>{G&&l(k)},[G,k]),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${c?"text-slate-100":"text-slate-800"}`,children:"Where am I now?"}),e.jsx("p",{className:`mt-2 text-sm ${f}`,children:"Tick every statement that's true for your programme today, and see your readiness by component - both feed into which of the 5 change phases you're really in."})]}),e.jsx("div",{className:`rounded-lg border shadow-sm ${c?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:`text-lg font-semibold ${c?"text-slate-100":"text-slate-900"}`,children:"Which of these is true for you?"}),e.jsx("div",{className:"mt-4 space-y-3",children:di.map(v=>e.jsxs("label",{className:`flex items-start gap-3 rounded-md border p-3 cursor-pointer ${c?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("input",{type:"checkbox",checked:!!m[v.phase],onChange:O=>u(E=>({...E,[v.phase]:O.target.checked})),className:"mt-1 h-4 w-4"}),e.jsxs("span",{children:[e.jsxs("span",{className:`block text-xs font-semibold uppercase tracking-wider ${c?"text-blue-300":"text-blue-700"}`,children:["Phase ",v.phase,": ",Je[v.phase]]}),e.jsx("span",{className:`block text-sm ${c?"text-slate-200":"text-slate-700"}`,children:v.statement})]})]},v.phase))}),G?e.jsx("div",{className:`mt-5 rounded-md border p-4 ${c?"border-blue-500/30 bg-blue-500/10":"border-blue-200 bg-blue-50"}`,children:e.jsxs("p",{className:`text-sm ${c?"text-blue-100":"text-blue-900"}`,children:["Based on your answers, we've set your phase as"," ",e.jsxs("strong",{children:["Phase ",k,": ",Je[k]]}),". Please look below for where we expect each component at this phase level."]})}):null,e.jsxs("p",{className:`mt-3 text-xs ${c?"text-slate-400":"text-slate-500"}`,children:["Currently tracking"," ",e.jsxs("strong",{children:["Phase ",s,": ",Je[s]]})," ","(",a==="manual"?"set manually":"auto-detected from delivery progress",").",a==="manual"?e.jsx("button",{type:"button",onClick:o,className:"ml-2 font-semibold text-[#005eb8] hover:underline",children:"Reset to auto"}):null]})]})}),e.jsx("div",{className:`rounded-lg border shadow-sm ${c?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:`text-lg font-semibold ${c?"text-slate-100":"text-slate-900"}`,children:"Readiness by component"}),e.jsx("div",{className:`mt-3 flex gap-1 rounded-md border p-1 text-sm font-semibold ${c?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,role:"tablist","aria-label":"Readiness by component view",children:[{id:"by-component",label:"By Component"},{id:"by-lens",label:"By Lens"},{id:"by-phases",label:"By Phases"}].map(v=>e.jsx("button",{type:"button",role:"tab","aria-selected":r===v.id,onClick:()=>h(v.id),className:`flex-1 rounded px-3 py-1.5 transition-colors ${r===v.id?"bg-[#005eb8] text-white":c?"text-slate-300 hover:bg-slate-800":"text-slate-600 hover:bg-white"}`,children:v.label},v.id))}),r==="by-component"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:`mt-3 text-xs ${f}`,children:"Each component is scored by its weakest lens - click a label to jump to that component's assessment."}),e.jsx("div",{className:`mx-auto mt-4 flex items-center justify-center rounded border p-2 ${c?"border-slate-700 bg-slate-950":"border-slate-100 bg-slate-50"}`,style:{height:720},children:e.jsx("canvas",{ref:b,className:"block h-full w-full"})}),e.jsx("p",{className:`mt-4 text-center text-sm italic ${f}`,children:$?`We suggest picking up next at ${$.label}, then working outward from there.`:"Every component has reached full readiness on its weakest lens - nice work."}),e.jsx("div",{className:"mt-4 flex justify-center",children:$?e.jsxs("button",{type:"button",onClick:()=>i($.id),className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]",children:["Let's check out our ",$.label," component"]}):null})]}):null,r==="by-lens"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:`mt-3 text-xs ${f}`,children:"Pick a lens to see every component's readiness through that one lens, against the expected level."}),e.jsx("div",{className:"mt-3 flex flex-wrap gap-x-4 gap-y-2",role:"radiogroup","aria-label":"Choose a lens",children:Cn.map(v=>e.jsxs("label",{className:`flex items-center gap-1.5 text-xs font-medium ${c?"text-slate-200":"text-slate-700"}`,children:[e.jsx("input",{type:"radio",name:"where-am-i-now-lens",checked:x===v,onChange:()=>p(v),className:"h-3.5 w-3.5"}),v]},v))}),e.jsx("div",{className:`mx-auto mt-4 flex items-center justify-center rounded border p-2 ${c?"border-slate-700 bg-slate-950":"border-slate-100 bg-slate-50"}`,style:{height:720},children:e.jsx("canvas",{ref:C,className:"block h-full w-full"})})]}):null,r==="by-phases"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:`mt-3 text-xs ${f}`,children:["Every component in Phase ",s,": ",Je[s],", with a bar per lens and a dashed target bar for where it's expected to be."]}),e.jsx("div",{className:"mt-4 grid grid-cols-1 gap-3",children:g.map(v=>e.jsx(Uc,{component:v,getEntry:n,phase:s,darkMode:c},v.id))})]}):null]})})]})}function Wc(t){return{id:`audit:${Date.now()}-${Math.random().toString(36).slice(2,8)}`,timestamp:new Date().toISOString(),actor:t.actor,eventType:t.eventType,entityType:t.entityType,entityId:t.entityId,summary:t.summary,trustName:t.trustName,projectName:t.projectName,componentId:t.componentId,lens:t.lens,reason:t.reason,before:t.before,after:t.after,source:t.source||"local",importedAt:t.importedAt}}const Vc=1e4;function ss(t,n=Vc){return t.length<=n?t:t.slice(t.length-n)}const mi="nhs-digital-adoption-store",qc=new Set(["pathway-1","pathway-2","pathway-3"]);function xo(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}function Xe(t,n){if(!xo(t))throw new Error(`Invalid adoption assessment payload at ${n}: expected object.`)}function he(t,n){if(t!==void 0&&typeof t!="string")throw new Error(`Invalid adoption assessment payload at ${n}: expected string.`)}function yo(t,n){if(t!==void 0&&typeof t!="number")throw new Error(`Invalid adoption assessment payload at ${n}: expected number.`)}function Qs(t,n){if(t!==void 0&&!Array.isArray(t))throw new Error(`Invalid adoption assessment payload at ${n}: expected array.`)}function vo(t,n){Xe(t,n),he(t.id,`${n}.id`),he(t.text,`${n}.text`),he(t.owner,`${n}.owner`),he(t.timescale,`${n}.timescale`),he(t.status,`${n}.status`),he(t.notes,`${n}.notes`),he(t.evidence,`${n}.evidence`)}function Yc(t,n){Xe(t,n),yo(t.score,`${n}.score`),he(t.rationale,`${n}.rationale`),he(t.evidence,`${n}.evidence`),Qs(t.actions,`${n}.actions`),(t.actions||[]).forEach((s,a)=>{vo(s,`${n}.actions[${a}]`)})}function So(t,n){Xe(t,n),Object.keys(t).forEach(s=>{const a=t[s];Xe(a,`${n}.${s}`),Object.keys(a).forEach(i=>{Yc(a[i],`${n}.${s}.${i}`)})})}function Kc(t,n){Xe(t,n),Object.keys(t).forEach(s=>{const a=t[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${n}.${s}: expected array.`);a.forEach((i,l)=>{Xe(i,`${n}.${s}[${l}]`),he(i.id,`${n}.${s}[${l}].id`),he(i.text,`${n}.${s}[${l}].text`),he(i.owner,`${n}.${s}[${l}].owner`),he(i.timescale,`${n}.${s}[${l}].timescale`),he(i.notes,`${n}.${s}[${l}].notes`),he(i.evidence,`${n}.${s}[${l}].evidence`),Qs(i.linkedActions,`${n}.${s}[${l}].linkedActions`),(i.linkedActions||[]).forEach((o,c)=>{Xe(o,`${n}.${s}[${l}].linkedActions[${c}]`),he(o.lens,`${n}.${s}[${l}].linkedActions[${c}].lens`),he(o.actionId,`${n}.${s}[${l}].linkedActions[${c}].actionId`)})})})}function zc(t,n){Xe(t,n),Object.keys(t).forEach(s=>{const a=t[s];Xe(a,`${n}.${s}`),["pathway-1","pathway-2","pathway-3"].forEach(i=>{const l=a[i];Qs(l,`${n}.${s}.${i}`),(l||[]).forEach((o,c)=>{if(typeof o!="string")throw new Error(`Invalid adoption assessment payload at ${n}.${s}.${i}[${c}]: expected string.`)})})})}function Jc(t,n){Xe(t,n),Object.keys(t).forEach(s=>{const a=t[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${n}.${s}: expected array.`);a.forEach((i,l)=>{if(typeof i!="string")throw new Error(`Invalid adoption assessment payload at ${n}.${s}[${l}]: expected string.`)})})}function Xc(t,n){if(!Array.isArray(t))throw new Error(`Invalid adoption assessment payload at ${n}: expected array.`);t.forEach((s,a)=>{Xe(s,`${n}[${a}]`),he(s.id,`${n}[${a}].id`),he(s.removedAt,`${n}[${a}].removedAt`),he(s.reason,`${n}[${a}].reason`),he(s.componentId,`${n}[${a}].componentId`),he(s.lens,`${n}[${a}].lens`),he(s.actionId,`${n}[${a}].actionId`),he(s.actionText,`${n}[${a}].actionText`),he(s.actionType,`${n}[${a}].actionType`)})}function Qc(t,n){if(!Array.isArray(t))throw new Error(`Invalid adoption assessment payload at ${n}: expected array.`);t.forEach((s,a)=>{Xe(s,`${n}[${a}]`),he(s.id,`${n}[${a}].id`),he(s.timestamp,`${n}[${a}].timestamp`),he(s.actor,`${n}[${a}].actor`),he(s.eventType,`${n}[${a}].eventType`),he(s.entityType,`${n}[${a}].entityType`),he(s.entityId,`${n}[${a}].entityId`),he(s.summary,`${n}[${a}].summary`),he(s.trustName,`${n}[${a}].trustName`),he(s.projectName,`${n}[${a}].projectName`),he(s.componentId,`${n}[${a}].componentId`),he(s.lens,`${n}[${a}].lens`),he(s.reason,`${n}[${a}].reason`),he(s.source,`${n}[${a}].source`),he(s.importedAt,`${n}[${a}].importedAt`)})}function Zc(t,n){if(Xe(t,n),he(t.trustName,`${n}.trustName`),he(t.region,`${n}.region`),he(t.trustType,`${n}.trustType`),he(t.projectName,`${n}.projectName`),he(t.leadName,`${n}.leadName`),he(t.cstId,`${n}.cstId`),t.cst!==void 0){if(Xe(t.cst,`${n}.cst`),he(t.cst.type,`${n}.cst.type`),he(t.cst.pathway,`${n}.cst.pathway`),typeof t.cst.pathway=="string"&&!qc.has(t.cst.pathway))throw new Error(`Invalid adoption assessment payload at ${n}.cst.pathway: unexpected value "${t.cst.pathway}".`);if(he(t.cst.goLiveDate,`${n}.cst.goLiveDate`),he(t.cst.fullAdoptionDate,`${n}.cst.fullAdoptionDate`),he(t.cst.benefitRealizationDate,`${n}.cst.benefitRealizationDate`),he(t.cst.toolkitChoice,`${n}.cst.toolkitChoice`),typeof t.cst.toolkitChoice=="string"&&!zo(t.cst.toolkitChoice))throw new Error(`Invalid adoption assessment payload at ${n}.cst.toolkitChoice: unexpected value "${t.cst.toolkitChoice}".`)}}function ed(t,n){if(!Array.isArray(t))throw new Error(`Invalid adoption assessment payload at ${n}: expected array.`);t.forEach((s,a)=>{Xe(s,`${n}[${a}]`),he(s.monthLabel,`${n}[${a}].monthLabel`),yo(s.overallPercentage,`${n}[${a}].overallPercentage`),s.data!==void 0&&So(s.data,`${n}[${a}].data`)})}function td(t,n){Xe(t,n),Object.keys(t).forEach(s=>{if(typeof t[s]!="string")throw new Error(`Invalid adoption assessment payload at ${n}.${s}: expected string.`)})}function nd(t,n){Xe(t,n),Object.keys(t).forEach(s=>{const a=t[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${n}.${s}: expected array.`);a.forEach((i,l)=>{vo(i,`${n}.${s}[${l}]`)})})}function qn(t){if(!xo(t))throw new Error("Invalid adoption assessment payload at root: expected object.");return he(t.schemaVersion,"schemaVersion"),he(t.exportedAt,"exportedAt"),t.orgProfile!==void 0&&Zc(t.orgProfile,"orgProfile"),t.currentDraft!==void 0&&So(t.currentDraft,"currentDraft"),t.objectives!==void 0&&Kc(t.objectives,"objectives"),t.auditLog!==void 0&&Qc(t.auditLog,"auditLog"),t.suppressedAutoActions!==void 0&&Jc(t.suppressedAutoActions,"suppressedAutoActions"),t.actionAuditLog!==void 0&&Xc(t.actionAuditLog,"actionAuditLog"),t.history!==void 0&&ed(t.history,"history"),t.phaseOverrides!==void 0&&td(t.phaseOverrides,"phaseOverrides"),t.pathwayChecks!==void 0&&zc(t.pathwayChecks,"pathwayChecks"),t.componentActions!==void 0&&nd(t.componentActions,"componentActions"),t}function ui(t){return{schemaVersion:"4.0",exportedAt:new Date().toISOString(),orgProfile:{...t.orgProfile},currentDraft:kn(t.currentDraft),objectives:wo(t.objectives),auditLog:rd(t.auditLog),suppressedAutoActions:jo(t.suppressedAutoActions),history:t.history.map(n=>({...n,data:kn(n.data)})),phaseOverrides:{...t.phaseOverrides},pathwayChecks:No(t.pathwayChecks),raidItems:(t.raidItems||[]).map(n=>({...n})),benefits:(t.benefits||[]).map(n=>({...n,beneficiaryGroups:[...n.beneficiaryGroups]})),benefitTracker:Object.keys(t.benefitTracker||{}).reduce((n,s)=>{const a=(t.benefitTracker||{})[s];return n[s]={...a,periods:a.periods.map(i=>({...i}))},n},{})}}function sd(t){const n=t.componentActions;if(n)return Object.keys(n).reduce((s,a)=>(s[a]=(n[a]||[]).map(i=>({id:String(i.id??`${Date.now()}-${Math.random().toString(36).slice(2,8)}`),text:String(i.text||""),owner:String(i.owner||""),timescale:String(i.timescale||""),notes:String(i.notes||""),evidence:String(i.evidence||""),linkedActions:[]})),s),{})}function ad(t,n){return t!=null&&t.length?t.map(s=>({id:`legacy-${s.id}`,timestamp:s.removedAt,actor:"Unknown user",eventType:"action-removed",entityType:"action",entityId:s.actionId,summary:`Removed action: ${s.actionText||s.actionId}`,trustName:n==null?void 0:n.trustName,projectName:n==null?void 0:n.projectName,componentId:s.componentId,lens:s.lens,reason:s.reason,before:{actionText:s.actionText,actionType:s.actionType},source:"local"})):[]}function id(t,n,s){const a=ad(n,s),i=(t||[]).map(o=>({...o})),l=[...a,...i].sort((o,c)=>{const m=Date.parse(o.timestamp||""),u=Date.parse(c.timestamp||"");return!Number.isNaN(m)&&!Number.isNaN(u)&&m!==u?m-u:(o.id||"").localeCompare(c.id||"")});return ss(l)}function od(t,n){return t.map(s=>({...s,source:"imported",importedAt:n}))}function Zs(t){var a,i;if(!t)return{};const n=ts(t.orgProfile);(i=(a=t.orgProfile)==null?void 0:a.cst)!=null&&i.pathway||(n.cst.pathway="pathway-1");const s=t.objectives||sd(t);return{...t,schemaVersion:t.schemaVersion||"2.0",orgProfile:n,objectives:wo(s),auditLog:id(t.auditLog,t.actionAuditLog,n),suppressedAutoActions:jo(t.suppressedAutoActions),pathwayChecks:No(t.pathwayChecks)}}function gi(t,n){const s=qn(t),a=Zs(s),i=!!(s.objectives||s.componentActions),l=new Date().toISOString(),o=od(a.auditLog||[],l),c=ss([...n.auditLog||[],...o]);return Kn({...n,orgProfile:a.orgProfile||n.orgProfile,currentDraft:a.currentDraft?kn(a.currentDraft):kn(n.currentDraft),objectives:i?a.objectives:n.objectives,auditLog:c,suppressedAutoActions:a.suppressedAutoActions||n.suppressedAutoActions,history:(a.history||n.history).map(m=>({...m,data:kn(m.data)})),phaseOverrides:a.phaseOverrides||n.phaseOverrides,pathwayChecks:a.pathwayChecks||n.pathwayChecks,raidItems:a.raidItems||n.raidItems,benefits:a.benefits||n.benefits,benefitTracker:a.benefitTracker||n.benefitTracker})}function kn(t){const n=Vs(t);return Object.keys(n).forEach(s=>{Object.keys(n[s]).forEach(a=>{n[s][a].actions=n[s][a].actions.map(i=>({...i,status:nt(i.status),notes:i.notes||"",evidence:i.evidence||"",linkedTargets:(i.linkedTargets||[]).map(l=>({componentId:l.componentId,lens:l.lens}))}))})}),n}function wo(t){const n=qs(t||{});return Object.keys(n).forEach(s=>{n[s]=n[s].map(a=>({...a,owner:a.owner||"",timescale:a.timescale||"",notes:a.notes||"",evidence:a.evidence||"",linkedActions:(a.linkedActions||[]).map(i=>({lens:i.lens,actionId:i.actionId}))}))}),n}function No(t){return t?Object.keys(t).reduce((n,s)=>{const a=t[s]||{};return n[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},n},{}):{}}function jo(t){return t?Object.keys(t).reduce((n,s)=>(n[s]=[...t[s]||[]],n),{}):{}}function rd(t){return t?t.map(n=>({...n})):[]}function ld(t,n){const s=(t||[]).map(i=>`${i.componentId}:${i.lens}`).sort(),a=(n||[]).map(i=>`${i.componentId}:${i.lens}`).sort();return s.length===a.length&&s.every((i,l)=>i===a[l])}function cd(t,n){return t.text===n.text&&(t.actionType||"")===(n.actionType||"")&&t.owner===n.owner&&t.timescale===n.timescale&&t.status===n.status&&(t.phase??null)===(n.phase??null)&&(t.guidanceUrl||"")===(n.guidanceUrl||"")&&(t.startDate||"")===(n.startDate||"")&&(t.dueDate||"")===(n.dueDate||"")&&(t.notes||"")===(n.notes||"")&&(t.evidence||"")===(n.evidence||"")&&(t.readinessScore??null)===(n.readinessScore??null)&&ld(t.linkedTargets,n.linkedTargets)}function dd(t){return`${t.text||"Untitled action"} - ${t.status}, owner: ${t.owner||"Unassigned"}`}function md(t,n){const s=t.map(i=>`${i.lens}:${i.actionId}`).sort(),a=n.map(i=>`${i.lens}:${i.actionId}`).sort();return s.length===a.length&&s.every((i,l)=>i===a[l])}function ud(t,n){return t.text===n.text&&t.owner===n.owner&&t.timescale===n.timescale&&(t.notes||"")===(n.notes||"")&&(t.evidence||"")===(n.evidence||"")&&md(t.linkedActions,n.linkedActions)}function gd(t){return`${t.text||"Untitled objective"} - owner: ${t.owner||"Unassigned"}`}function ko(t,n){return t.name===n.name&&t.role===n.role}function Xn(t){return t.role?`${t.name||"Unnamed"} - ${t.role}`:t.name||"Unnamed"}function pd(t,n){return t.score===n.score&&t.rationale===n.rationale&&t.evidence===n.evidence}function pi(t){const n=`Score ${t.score}`;return t.rationale?`${n} - ${t.rationale}`:n}function as(t,n,s,a,i,l){const o=new Map(n.map(r=>[r.id,r])),c=new Set(t.map(r=>r.id)),m=[];t.forEach(r=>{const h=o.get(r.id);h&&!s(r,h)&&m.push({id:`${a}:${r.id}`,label:i(r),mineSummary:l(r),theirsSummary:l(h)})});const u=n.filter(r=>!c.has(r.id)).length;return{conflicts:m,autoMergedCount:u,merge:r=>{const h=t.map(x=>{const p=o.get(x.id);return p&&r[`${a}:${x.id}`]==="theirs"?p:x});return n.forEach(x=>{c.has(x.id)||h.push(x)}),h}}}const hi=[{key:"trustName",label:"Trust name"},{key:"region",label:"Region"},{key:"trustType",label:"Trust type"},{key:"projectName",label:"Programme / project name"},{key:"leadName",label:"Lead submitter"}],fi=[{key:"type",label:"CST type"},{key:"pathway",label:"Pathway"},{key:"goLiveDate",label:"Go live date"},{key:"fullAdoptionDate",label:"Full adoption date"},{key:"benefitRealizationDate",label:"Benefit realisation date"},{key:"toolkitChoice",label:"Default toolkit"}];function Co(t,n){const s=[];return hi.forEach(({key:a,label:i})=>{const l=String(t[a]??""),o=String(n[a]??"");l!==o&&s.push({id:`profile:${String(a)}`,label:i,mineSummary:l||"(blank)",theirsSummary:o||"(blank)"})}),fi.forEach(({key:a,label:i})=>{const l=String(t.cst[a]??""),o=String(n.cst[a]??"");l!==o&&s.push({id:`cst:${String(a)}`,label:i,mineSummary:l||"(blank)",theirsSummary:o||"(blank)"})}),{conflicts:s,autoMergedCount:0,merge:a=>{const i={...t};hi.forEach(({key:o})=>{a[`profile:${String(o)}`]==="theirs"&&(i[o]=n[o])});const l={...t.cst};return fi.forEach(({key:o})=>{a[`cst:${String(o)}`]==="theirs"&&(l[o]=n.cst[o])}),{...i,cst:l}}}}function Eo(t,n){const s=new Set([...Object.keys(t),...Object.keys(n)]),a=[],i=[];let l=0;const o=new Map,c=new Map;return s.forEach(m=>{const u=t[m]||{},r=n[m]||{},h=new Set([...Object.keys(u),...Object.keys(r)]);c.set(m,h),h.forEach(x=>{const p=u[x],b=r[x],C=`${m}:${x}`;p&&b&&!pd(p,b)&&a.push({id:`entry:${C}`,label:`${m} / ${x}`,mineSummary:pi(p),theirsSummary:pi(b)});const w=as((p==null?void 0:p.actions)||[],(b==null?void 0:b.actions)||[],cd,`action:${C}`,g=>`${m} / ${x} - ${g.text||"Untitled action"}`,dd);i.push(...w.conflicts),l+=w.autoMergedCount,o.set(C,w)})}),{entryConflicts:a,actionConflicts:i,autoMergedActionCount:l,merge:m=>{const u={};return s.forEach(r=>{const h=t[r]||{},x=n[r]||{},p={};(c.get(r)||new Set).forEach(b=>{var G;const C=h[b],w=x[b],g=`${r}:${b}`;let k=C?{score:C.score,rationale:C.rationale,evidence:C.evidence}:{score:w.score,rationale:w.rationale,evidence:w.evidence};C&&w&&m[`entry:${g}`]==="theirs"&&(k={score:w.score,rationale:w.rationale,evidence:w.evidence});const $=((G=o.get(g))==null?void 0:G.merge(m))||[];p[b]={...k,actions:$}}),u[r]=p}),u}}}function Io(t,n){const s=new Set([...Object.keys(t),...Object.keys(n)]),a=[];let i=0;const l=new Map;return s.forEach(o=>{const c=as(t[o]||[],n[o]||[],ud,`objective:${o}`,m=>`${o} - ${m.text||"Untitled objective"}`,gd);a.push(...c.conflicts),i+=c.autoMergedCount,l.set(o,c)}),{conflicts:a,autoMergedCount:i,merge:o=>{const c={};return s.forEach(m=>{var u;c[m]=((u=l.get(m))==null?void 0:u.merge(o))||[]}),c}}}function Ao(t,n){const s=new Set([...Object.keys(t),...Object.keys(n)]),a=[];let i=0;return s.forEach(l=>{const o=t[l],c=n[l];if(o===void 0||c===void 0){o===void 0&&c!==void 0&&(i+=1);return}o!==c&&a.push({id:`phase:${l}`,label:`Phase focus override - ${l}`,mineSummary:o,theirsSummary:c})}),{conflicts:a,autoMergedCount:i,merge:l=>{const o={...t};return s.forEach(c=>{const m=n[c];m!==void 0&&(t[c]===void 0||l[`phase:${c}`]==="theirs")&&(o[c]=m)}),o}}}function hd(t,n){const s=new Set([...Object.keys(t),...Object.keys(n)]),a={};return s.forEach(i=>{const l=t[i]||{},o=n[i]||{},c=new Set([...Object.keys(l),...Object.keys(o)]),m={};c.forEach(u=>{const r=u;m[r]=Array.from(new Set([...l[r]||[],...o[r]||[]]))}),a[i]=m}),a}function fd(t,n){const s=new Set([...Object.keys(t),...Object.keys(n)]),a={};return s.forEach(i=>{a[i]=Array.from(new Set([...t[i]||[],...n[i]||[]]))}),a}function bd(t,n){const s=new Map;return n.forEach(a=>s.set(a.monthLabel,a)),t.forEach(a=>s.set(a.monthLabel,a)),Array.from(s.values())}function Oo(t){const n=Zs(t);return{theirsProfile:n.orgProfile||ts(),theirsDraft:n.currentDraft||{},theirsObjectives:n.objectives||{},theirsPhaseOverrides:n.phaseOverrides||{},theirsPathwayChecks:n.pathwayChecks||{},theirsSuppressedAutoActions:n.suppressedAutoActions||{},theirsAuditLog:n.auditLog||[],theirsHistory:(n.history||[]).map(s=>({...s,data:Vs(s.data)}))}}function xd(t,n){const{theirsProfile:s,theirsDraft:a,theirsObjectives:i,theirsPhaseOverrides:l}=Oo(n),o=Co(t.orgProfile,s),c=as(t.orgProfile.teamMembers||[],s.teamMembers||[],ko,"team",Xn,Xn),m=Eo(t.currentDraft,a),u=Io(t.objectives,i),r=Ao(t.phaseOverrides,l),h=[{id:"profile",title:"Organisation profile & CST settings",items:o.conflicts},{id:"team",title:"Team members",items:c.conflicts},{id:"assessments",title:"Assessments",items:m.entryConflicts},{id:"actions",title:"Lens actions",items:m.actionConflicts},{id:"objectives",title:"Objectives",items:u.conflicts},{id:"phaseFocus",title:"Phase focus overrides",items:r.conflicts}].filter(p=>p.items.length>0),x=[];return c.autoMergedCount&&x.push(`${c.autoMergedCount} new team member(s)`),m.autoMergedActionCount&&x.push(`${m.autoMergedActionCount} new action(s)`),u.autoMergedCount&&x.push(`${u.autoMergedCount} new objective(s)`),r.autoMergedCount&&x.push(`${r.autoMergedCount} new phase focus override(s)`),{sections:h,autoMergeSummary:x,hasConflicts:h.length>0}}function bi(t,n,s){const{theirsProfile:a,theirsDraft:i,theirsObjectives:l,theirsPhaseOverrides:o,theirsPathwayChecks:c,theirsSuppressedAutoActions:m,theirsAuditLog:u,theirsHistory:r}=Oo(n),h=Co(t.orgProfile,a),x=as(t.orgProfile.teamMembers||[],a.teamMembers||[],ko,"team",Xn,Xn),p=Eo(t.currentDraft,i),b=Io(t.objectives,l),C=Ao(t.phaseOverrides,o),w={...t.orgProfile,...h.merge(s),teamMembers:x.merge(s)},g=new Date().toISOString(),k=u.map(G=>({...G,source:"imported",importedAt:g})),$=ss([...t.auditLog||[],...k]);return Kn({...t,orgProfile:w,currentDraft:Vs(p.merge(s)),objectives:qs(b.merge(s)),auditLog:$,suppressedAutoActions:fd(t.suppressedAutoActions,m),history:bd(t.history,r),phaseOverrides:C.merge(s),pathwayChecks:hd(t.pathwayChecks,c)})}const yd=`{
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
      "id": "benefits-0",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Recognise the importance of benefits realisation as part of successful change delivery.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 0
    },
    {
      "id": "benefits-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Begin discussions with sponsors and leaders about the expected value of the change.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 0
    },
    {
      "id": "benefits-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "M Engage key stakeholders to explore potential organisational and stakeholder benefits.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 0
    },
    {
      "id": "benefits-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Capture initial ideas regarding expected benefits and possible disbenefits.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 0
    },
    {
      "id": "benefits-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Identify stakeholder groups likely to experience benefits from the change.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 0
    },
    {
      "id": "benefits-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Gain initial leadership support for benefits identification and management activities.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 0
    },
    {
      "id": "benefits-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Review available evidence that may indicate potential benefits.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 0
    },
    {
      "id": "benefits-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "S Begin raising awareness that benefits will need to be defined, measured and realised.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 0
    },
    {
      "id": "benefits-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "S Facilitate structured benefits workshops with sponsors, leaders and subject matter experts.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "benefits-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Document and categorise expected organisational, operational, financial and user benefits.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "benefits-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Document likely disbenefits and trade-offs associated with the change.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "benefits-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "M Develop measurable benefit statements and draft success criteria for priority benefits.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "benefits-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Identify proposed benefit owners and establish accountability for benefit realisation.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "benefits-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Develop stakeholder-specific ‘What’s in it for me?’ (WIIFM) benefit statements.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "benefits-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Validate with stakeholders which benefits are most important and meaningful to them.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "benefits-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "S Review and validate draft benefits with stakeholders and sponsors.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "benefits-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "S Assess differences in expected value across stakeholder groups and business areas.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "benefits-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "S Refine benefit definitions, ownership and measures using stakeholder feedback.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "benefits-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Obtain approval and baseline the benefits realisation approach.",
      "outcomeIds": ["BEN_O1", "BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "benefits-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Define measures, KPIs and reporting arrangements for each benefit and record this in the benefits register.",
      "outcomeIds": ["BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "benefits-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Establish baseline measures against which benefits can be assessed and include in the business case.",
      "outcomeIds": ["BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "benefits-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "M Develop a benefits realisation plan including ownership, timelines and reporting.",
      "outcomeIds": ["BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "benefits-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Integrate benefits tracking into governance and programme reporting.",
      "outcomeIds": ["BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "benefits-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "M Use stakeholder-facing benefit messages (WIIFM benefits) to build support and momentum.",
      "outcomeIds": ["BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "benefits-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "S Communicate expected benefits and success measures to stakeholders.",
      "outcomeIds": ["BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "benefits-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Gather stakeholder feedback on benefit assumptions and expectations.",
      "outcomeIds": ["BEN_O1", "BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "benefits-26",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "S Validate that benefit measures are meaningful and understood by stakeholders.",
      "outcomeIds": ["BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "benefits-27",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "S Monitor stakeholder confidence in the expected benefits.",
      "outcomeIds": ["BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "benefits-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Track benefit performance against agreed KPI's, measures and targets.",
      "outcomeIds": ["BEN_O2", "BEN_O3"],
      "readinessScore": 3
    },
    {
      "id": "benefits-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "S Review realised, unrealised and unexpected benefits through governance forums.",
      "outcomeIds": ["BEN_O2", "BEN_O3"],
      "readinessScore": 3
    },
    {
      "id": "benefits-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Identify risks to benefits realisation and agree mitigation actions.",
      "outcomeIds": ["BEN_O2"],
      "readinessScore": 3
    },
    {
      "id": "benefits-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Assess whether expected benefits are being achieved and if not, why.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 3
    },
    {
      "id": "benefits-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "S Manage dependencies that affect benefit realisation (RAID log).",
      "outcomeIds": ["BEN_O2", "BEN_O3"],
      "readinessScore": 3
    },
    {
      "id": "benefits-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "S Share evidence of realised benefits and unintentional consequences with stakeholders.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 3
    },
    {
      "id": "benefits-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Use stakeholder insight to understand barriers to achieving benefits.",
      "outcomeIds": ["BEN_O2", "BEN_O3"],
      "readinessScore": 3
    },
    {
      "id": "benefits-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "S Monitor stakeholder perceptions of realised benefits and improvement.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 3
    },
    {
      "id": "benefits-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "M Use WIIFM benefit stories and examples to reinforce adoption.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 3
    },
    {
      "id": "benefits-37",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "S Recognise teams and individuals contributing to benefit realisation.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 3
    },
    {
      "id": "benefits-38",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Continuously monitor long-term benefit realisation.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    },
    {
      "id": "benefits-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "S Embed benefits management into normal business and adoption management processes.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    },
    {
      "id": "benefits-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "S Refine benefit measures and approaches using organisational learning.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    },
    {
      "id": "benefits-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Use benefit evidence to inform future investment and change decisions.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    },
    {
      "id": "benefits-42",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "S Maintain management of long-term dependencies affecting realised benefits.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    },
    {
      "id": "benefits-43",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "M Promote a culture of continuous benefits realisation and adoption.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    },
    {
      "id": "benefits-44",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "S Regularly communicate realised benefits and improvement outcomes.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    },
    {
      "id": "benefits-45",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Use stakeholder feedback to identify opportunities for further benefits realisation.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    },
    {
      "id": "benefits-46",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "S Measure ongoing stakeholder perception of benefit delivered by the change.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    },
    {
      "id": "benefits-47",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "S Use success stories and achievements to sustain belief in the value of the change.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    }
  ]
}
`,ea={componentId:"benefits",actionPrefix:"benefits-action",outcomePrefix:"benefits:outcome",fallbackOutcomes:[{id:"benefits:outcome:o1",text:"Benefits and disbenefits have been identified and defined"},{id:"benefits:outcome:o2",text:"Benefits are actively managed and monitored"},{id:"benefits:outcome:o3",text:"Benefits are realised, evidenced and sustained"}],lensAliases:{"Strategic Direction and Leadership":"Planning and Risk","People Experience and Culture":"Process and Sustainment"}},vd=Qe(yd,ea);function Sd(t){return Ze(t,ea,vd)}function wd(t){return et(t,ea)}const Nd=`{
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
      "id": "capability-0",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "M Recognise that people will require new capabilities and confidence to operate successfully in the future state.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 0
    },
    {
      "id": "capability-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "M Begin discussions with leaders, managers and stakeholders about future capability requirements.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 0
    },
    {
      "id": "capability-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "M Identify areas where new skills, behaviours or ways of working may be required.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 0
    },
    {
      "id": "capability-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Begin raising awareness of future capability expectations and support requirements.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 0
    },
    {
      "id": "capability-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "S Identify potential capability and confidence challenges that may affect successful adoption.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 0
    },
    {
      "id": "capability-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "M Gain initial agreement that capability development and confidence building will be required as part of the change.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 0
    },
    {
      "id": "capability-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Explore stakeholder perceptions regarding confidence, preparedness and future capability needs.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 0
    },
    {
      "id": "capability-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "S Review lessons learned from previous changes relating to capability gaps and confidence challenges.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 0
    },
    {
      "id": "capability-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "M Define and document the future-state capabilities required for successful adoption.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 1
    },
    {
      "id": "capability-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "M Conduct structured capability analysis to identify gaps between current and future-state requirements.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 1
    },
    {
      "id": "capability-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "S Assess current confidence levels across impacted stakeholder groups.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 1
    },
    {
      "id": "capability-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Assess factors that may increase or reduce stakeholder confidence during the transition.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 1
    },
    {
      "id": "capability-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "S Assess capability and confidence risks that could affect successful adoption and performance.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 1
    },
    {
      "id": "capability-13",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "M Develop capability-building interventions to address identified capability gaps.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "capability-14",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "S Provide opportunities for practical application of learning in real or simulated environments.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "capability-15",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "S Provide coaching, mentoring and peer support opportunities for individuals applying new skills.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "capability-16",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Communicate expectations regarding performance, proficiency and future-state behaviours.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "capability-17",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "S Establish measures to assess capability development and confidence growth.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "capability-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Gather feedback about confidence levels and practical challenges experienced by users.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "capability-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Testing & Validation",
      "action": "S Ensure practical capability is assessed through observation, walkthroughs or structured validation activities.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "capability-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "S Target additional support towards individuals or groups with lower confidence levels.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "capability-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Risk Management",
      "action": "S Monitor capability and confidence risks during implementation.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "capability-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "S Review capability and confidence measures through programme governance.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "capability-24",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Testing & Validation",
      "action": "M Ensure there are processes in place to validate that individuals can successfully perform required activities within the future-state environment.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "capability-23",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "S Measure capability attainment and confidence levels across impacted stakeholder groups.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "capability-25",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Ensure effective application of new skills, behaviours and capabilities are recognised and reinforced.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "capability-26",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "S Provide targeted capability development and confidence-building interventions where gaps remain.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "capability-27",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Testing & Validation",
      "action": "S Validate that capability and confidence levels are sufficient to support sustainable performance improvement.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "capability-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Gather stakeholder feedback regarding confidence, performance and practical application of learning.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "capability-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Communicate capability achievements, confidence improvements and examples of successful application.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "capability-30",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "M Embed and continuously improve capability development into organisational learning and development practices.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "capability-31",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "S Monitor long-term capability, proficiency and confidence trends across the organisation.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "capability-32",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "S Benchmark capability and confidence maturity across programmes, teams and organisational areas.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "capability-34",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "M Maintain mechanisms that monitor workforce confidence, development needs and emerging capability requirements.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "capability-35",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Recognise and reward sustained demonstration of future-state capabilities and behaviours.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "capability-36",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Promote a culture of continuous learning, confidence building and professional growth.",
      "outcomeIds": [],
      "readinessScore": 4
    }
  ]
}
`,ta={componentId:"capability",actionPrefix:"capability-action",outcomePrefix:"capability:outcome",fallbackOutcomes:[{id:"capability:outcome:o1",text:"Required capability levels have been defined and assessed"},{id:"capability:outcome:o2",text:"People can perform confidently in the future state"},{id:"capability:outcome:o3",text:"Capability and confidence are sustained and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Communication:"People Experience and Culture","Testing and Validation":"Skills and Behaviour"}},jd=Qe(Nd,ta);function kd(t){return Ze(t,ta,jd)}function Cd(t){return et(t,ta)}const Ed=`{
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
      "id": "case_for_change-0",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Recognise that a clear rationale and evidence base will be required to explain why change is necessary.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 0
    },
    {
      "id": "case_for_change-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "S Begin discussions with leaders and stakeholders regarding the problems, opportunities or drivers prompting change.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 0
    },
    {
      "id": "case_for_change-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Identify high-level issues, challenges, opportunities or risks that may justify change.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 0
    },
    {
      "id": "case_for_change-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Begin raising awareness that change may be required.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 0
    },
    {
      "id": "case_for_change-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Identify strategic, operational, regulatory or service drivers that may support the need for change.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 0
    },
    {
      "id": "case_for_change-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Gain initial sponsorship for a case for change.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 0
    },
    {
      "id": "case_for_change-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Gather evidence of stakeholder perceptions of current challenges, opportunities and improvement needs.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 0
    },
    {
      "id": "case_for_change-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "S Review previous organisational experience, lessons learned and available evidence relevant to the proposed change.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 0
    },
    {
      "id": "case_for_change-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Define and document the problem, opportunity, risk or requirement driving the need for change.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Gather quantitative and qualitative evidence demonstrating the impact the change will have on the current situation.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Assess alignment between the proposed change and organisational objectives, strategies and priorities.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Risk Management",
      "action": "M Identify potential strategic and operational barriers to the proposed change",
      "outcomeIds": [],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Develop a draft case for change explaining why change is required, why action is needed now and the potential benefits associated with the change.",
      "outcomeIds": ["CFC_O1", "CFC_O2"],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Conduct structured engagement activities to understand stakeholder experiences of current challenges and opportunities.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Testing & Validation",
      "action": "S Validate whether stakeholders recognise, understand and agree with the need for change.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "M Gather local examples and supporting evidence that illustrate the impact of maintaining the current state.",
      "outcomeIds": ["CFC_O1", "CFC_O2"],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Assess misconceptions, assumptions and conflicting perceptions relating to the need for change.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Design",
      "action": "S Refine the draft case for change using evidence, stakeholder insight and feedback",
      "outcomeIds": ["CFC_O1", "CFC_O2"],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Obtain approval and formal leadership and governance endorsement of the draft case for change.",
      "outcomeIds": ["CFC_O1", "CFC_O3"],
      "readinessScore": 2
    },
    {
      "id": "case_for_change-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "M Develop clear and consistent messaging explaining why change is necessary.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 2
    },
    {
      "id": "case_for_change-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Define how evidence supporting the case for change will be reviewed and maintained throughout the change lifecycle.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 2
    },
    {
      "id": "case_for_change-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Communicate through engagement and communication activities why the change is necessary",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 2
    },
    {
      "id": "case_for_change-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Testing & Validation",
      "action": "S Validate stakeholder understanding of the rationale for change.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 2
    },
    {
      "id": "case_for_change-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Address concerns, challenges and areas of misunderstanding relating to the need for change.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 2
    },
    {
      "id": "case_for_change-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Illustrate the importance of the change using local examples and evidence.",
      "outcomeIds": ["CFC_O1", "CFC_O2"],
      "readinessScore": 2
    },
    {
      "id": "case_for_change-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Monitor stakeholder sentiment regarding the case for change.",
      "outcomeIds": ["CFC_O2", "CFC_O3"],
      "readinessScore": 2
    },
    {
      "id": "case_for_change-26",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Approve case for change via governance routes",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-27",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "S Ensure leaders consistently reinforce the rationale for change.",
      "outcomeIds": ["CFC_O2", "CFC_O3"],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Use governance forums to review whether the original drivers for change remain valid.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Use organisational performance, service and outcome measures to support the case for change.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Use the case for change to inform programme decisions, priorities and resource allocation.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Risk Management",
      "action": "M Review assumptions, emerging risks and external influences (RAID log) that may affect the credibility of the case for change.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Share evidence and examples demonstrating the impact of addressing the original problem or opportunity.",
      "outcomeIds": ["CFC_O2", "CFC_O3"],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "M Evaluate stakeholder acceptance of the ongoing need for change.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Target engagement and communications activity where understanding remains low.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Design",
      "action": "S Refine case for change messaging using stakeholder feedback and insight.",
      "outcomeIds": ["CFC_O2", "CFC_O3"],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Ensure change champions can confidently explain and reinforce the case for change.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-37",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Review the case for change periodically against organisational priorities and external drivers.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-38",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Use benefits and outcomes data to validate the continued relevance of the case for change.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Embed the rationale for change into organisational planning and continuous improvement activities.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Use organisational learning and evidence to evolve the case for change where appropriate.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "M Ensure leaders continue to communicate and reinforce the rationale for change during routine business activity.",
      "outcomeIds": ["CFC_O2", "CFC_O3"],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-42",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Capture and share success stories that validate the original need for change.",
      "outcomeIds": ["CFC_O2", "CFC_O3"],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-43",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Measure stakeholder belief that the change remains necessary and valuable.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-44",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Reflect emerging evidence, learning and organisational priorities by refreshing messaging.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-45",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Maintain ongoing engagement activities to sustain awareness of the reasons for change.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-46",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Encourage teams to identify opportunities to build on the original case for change.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-47",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "M Establish baseline measures that evidence the current problem or opportunity.",
      "outcomeIds": ["CFC_O1", "CFC_O3"],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-48",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Identify and secure sponsors and senior leaders who will champion the case for change.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-49",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Embed the case for change in programme governance, reporting and decision-making processes.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 3
    }
  ]
}
`,na={componentId:"case_for_change",actionPrefix:"case-for-change-action",outcomePrefix:"case-for-change:outcome",fallbackOutcomes:[{id:"case-for-change:outcome:o1",text:"The need for change has been clearly defined and evidenced"},{id:"case-for-change:outcome:o2",text:"The case for change is understood and accepted"},{id:"case-for-change:outcome:o3",text:"The case for change remains credible and relevant"}]},Id=Qe(Ed,na);function Ad(t){return Ze(t,na,Id)}function Od(t){return et(t,na)}const Rd=`{
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
      "id": "change_adoption-0",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Recognise that successful implementation requires sustained adoption of new ways of working.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_adoption-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "M Begin discussions with leaders and stakeholders about what successful adoption may look like.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_adoption-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Identify high-level behaviours and ways of working expected to change.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_adoption-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Communication",
      "action": "M Begin communicating the importance of adoption and behavioural change in achieving change outcomes.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_adoption-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Identify groups likely to be critical to successful adoption.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_adoption-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Gain initial agreement that adoption outcomes will need to be monitored and managed.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_adoption-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "S Explore stakeholder perceptions of potential adoption barriers and enablers.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_adoption-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Review lessons learned from previous changes relating to adoption challenges and successes.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_adoption-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "M Define and document what successful adoption looks like for the change.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_adoption-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Develop adoption indicators, measures, targets and success criteria.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_adoption-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Define behaviours, activities and practices that will indicate successful adoption.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_adoption-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Establish baseline adoption measures for future comparison.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_adoption-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Define ownership, accountabilities and reporting arrangements for adoption outcomes.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_adoption-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "S Assess stakeholder groups requiring targeted adoption support.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_adoption-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "S Validate adoption barriers and enablers with impacted stakeholder groups.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_adoption-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Communication",
      "action": "M Communicate expected adoption outcomes, behaviours and performance expectations.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_adoption-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "S Assess dependencies between adoption, capability, learning, readiness and implementation activities.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_adoption-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "S Develop a structured adoption monitoring and support approach.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_adoption-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Implement mechanisms for monitoring adoption levels and behavioural change.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_adoption-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Collect adoption data, usage information, feedback and performance insight.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_adoption-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Analyse adoption trends across different stakeholder groups and operational areas.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_adoption-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Review adoption performance through governance and reporting structures.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_adoption-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "S Identify adoption risks and issues arising from low or inconsistent adoption levels.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_adoption-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "S Gather feedback from high and low adopters to understand adoption drivers and barriers.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_adoption-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "M Provide targeted support and development for groups experiencing adoption challenges.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_adoption-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Communication",
      "action": "S Communicate adoption progress, successes and areas of focus.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_adoption-26",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "M Use change agents, change champions and managers to support adoption activity.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_adoption-27",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "S Refine adoption interventions using feedback and monitoring information.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_adoption-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Track adoption performance against targets, expectations and baseline measures.",
      "outcomeIds": ["CA_O2", "CA_O3"],
      "readinessScore": 3
    },
    {
      "id": "change_adoption-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Identify areas with lower adoption rates requiring additional intervention.",
      "outcomeIds": ["CA_O2", "CA_O3"],
      "readinessScore": 3
    },
    {
      "id": "change_adoption-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "M Conduct targeted engagement with low-adoption groups to understand remaining barriers.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 3
    },
    {
      "id": "change_adoption-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "S Recognise and promote examples of successful adoption and effective practice.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 3
    },
    {
      "id": "change_adoption-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "S Coordinate adoption activity with a focus on reinforcement, capability and benefits realisation.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 3
    },
    {
      "id": "change_adoption-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Testing & Validation",
      "action": "S Validate that adopted behaviours and practices align with intended future-state outcomes.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 3
    },
    {
      "id": "change_adoption-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Review adoption outcomes and improvement actions through governance processes.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 3
    },
    {
      "id": "change_adoption-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "S Refine adoption approaches using learning from implementation experience.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 3
    },
    {
      "id": "change_adoption-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "S Support managers and leaders to reinforce adoption expectations.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 3
    },
    {
      "id": "change_adoption-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Embed adoption monitoring into BAU performance and improvement processes.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 4
    },
    {
      "id": "change_adoption-37",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Monitor long-term adoption performance and behavioural sustainability.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 4
    },
    {
      "id": "change_adoption-38",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Use adoption data to identify opportunities for optimisation and improvement.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 4
    },
    {
      "id": "change_adoption-49",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "M Embed adoption monitoring and performance review into business-as-usual operational governance processes.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "change_adoption-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "S Use organisational learning to strengthen future adoption approaches.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 4
    },
    {
      "id": "change_adoption-42",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Recognise that successful adoption requires changes to operational behaviours, processes and ways of working",
      "outcomeIds": [],
      "readinessScore": 0
    },
    {
      "id": "change_adoption-43",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Identify operational areas, services and processes where adoption of new ways of working will be required",
      "outcomeIds": [],
      "readinessScore": 0
    },
    {
      "id": "change_adoption-44",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "M Define how adoption will be evidenced through operational behaviours, process execution and future-state ways of working",
      "outcomeIds": [],
      "readinessScore": 1
    },
    {
      "id": "change_adoption-45",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "M Identify operational indicators and process measures that can be used to assess adoption",
      "outcomeIds": [],
      "readinessScore": 1
    },
    {
      "id": "change_adoption-46",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "S Assess dependencies between adoption activities, process implementation and operational readiness",
      "outcomeIds": [],
      "readinessScore": 1
    },
    {
      "id": "change_adoption-47",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "M Monitor operational usage, process compliance and behavioural adoption across affected business areas",
      "outcomeIds": [],
      "readinessScore": 2
    },
    {
      "id": "change_adoption-48",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Analyse adoption trends across processes, services and operational areas to identify opportunities for improvement",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "change_adoption-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "S Embed adoption-focused behaviours and improvement practices into organisational culture.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 4
    },
    {
      "id": "change_adoption-51",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "M Monitor capability, proficiency and confidence levels associated with sustained adoption of the new ways of working.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "change_adoption-50",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "S Embed adoption-related capability development within ongoing organisational learning and development activities.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "change_adoption-52",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "S Identify emerging capability requirements, skill gaps and development opportunities that may influence future adoption performance.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "change_adoption-53",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "S Use adoption insight and organisational learning to continuously improve capability-building approaches for future change initiatives.",
      "outcomeIds": [],
      "readinessScore": 4
    }
  ]
}
`,sa={componentId:"change_adoption",actionPrefix:"change-adoption-action",outcomePrefix:"change-adoption:outcome",fallbackOutcomes:[{id:"change-adoption:outcome:o1",text:"Adoption expectations and measures have been defined"},{id:"change-adoption:outcome:o2",text:"Adoption is actively monitored and supported"},{id:"change-adoption:outcome:o3",text:"Adoption is sustained and optimised"}],lensAliases:{"Planning and Measurement":"Planning and Risk","Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","Skills and Behaviour":"Skills and Behaviour","People Experience and Culture":"Skills and Behaviour",Governance:"Planning and Risk",Design:"Planning and Risk",Reinforcement:"Skills and Behaviour"}},_d=Qe(Rd,sa);function Dd(t){return Ze(t,sa,_d)}function Pd(t){return et(t,sa)}const $d=`{
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
      "id": "change_impact-0",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Recognise that the change is likely to affect people, processes, services, roles and ways of working.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_impact-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "M Begin discussions with leaders and stakeholders regarding who or what may be affected by the change.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_impact-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Identify high-level business areas, services, teams and stakeholder groups likely to experience change impacts.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_impact-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Explore stakeholder perceptions of where change may affect their roles, activities or responsibilities.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_impact-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Identify potential areas of disruption, opportunity or uncertainty associated with the change.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_impact-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "S Gain agreement that change impact assessment activities will be required.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_impact-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Begin raising awareness that different stakeholder groups may be affected in different ways.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_impact-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Review previous change initiatives to identify common impact themes, challenges and lessons learned.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_impact-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Identify and document the areas, services, teams, roles, processes and stakeholder groups affected by the change (Stakeholder Analysis)",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_impact-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Undertake a draft structured Change Impact Assessment covering people, process, technology, information, governance and ways of working.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_impact-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "S Assess risks arising from identified change impacts (RAID log).",
      "outcomeIds": ["CI_O2", "CI_O3"],
      "readinessScore": 1
    },
    {
      "id": "change_impact-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Engage affected stakeholder groups to understand current ways of working and expected impacts.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_impact-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "M Assess stakeholder concerns, support requirements, perceived disruption and areas of uncertainty (Change Impact Assessment).",
      "outcomeIds": ["CI_O1", "CI_O2"],
      "readinessScore": 1
    },
    {
      "id": "change_impact-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Assess existing pain points, bottlenecks, duplication, workarounds and service pressures that may influence the scale of impact (Current State Process Mapping/Heat Map/Change Impact Assessment)",
      "outcomeIds": ["CI_O1", "CI_O2"],
      "readinessScore": 1
    },
    {
      "id": "change_impact-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Define and establish baseline measures that will enable comparison between current and future states.",
      "outcomeIds": ["CI_O2", "CI_O3"],
      "readinessScore": 1
    },
    {
      "id": "change_impact-15",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Complete a detailed change impact assessment across affected business areas, services, teams and roles.",
      "outcomeIds": ["CI_O1", "CI_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_impact-16",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Assess the scale of impact using agreed criteria such as complexity, frequency, number of people affected and degree of difference from current ways of working.",
      "outcomeIds": ["CI_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_impact-17",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Translate significant change impacts into change risks, issues or mitigations where appropriate (RAID log).",
      "outcomeIds": ["CI_O2", "CI_O3"],
      "readinessScore": 2
    },
    {
      "id": "change_impact-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Review assessed impacts and associated risks, through appropriate governance routes so that decisions are informed by change impact evidence (RAID log).",
      "outcomeIds": ["CI_O3"],
      "readinessScore": 2
    },
    {
      "id": "change_impact-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "S Identify dependencies that could affect impact management, including process, workforce, system, policy, operational or external dependencies (RAID log).",
      "outcomeIds": ["CI_O2", "CI_O3"],
      "readinessScore": 2
    },
    {
      "id": "change_impact-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Validate identified impacts with affected stakeholders and subject matter experts (Change Impact Assessment/Change Agent).",
      "outcomeIds": ["CI_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_impact-21",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Measure the effectiveness of change impact management activities across impacted stakeholder groups, services and business areas",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "change_impact-22",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Review impact assessment findings to identify remaining high-impact areas requiring support or intervention.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "change_impact-23",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Gather stakeholder feedback regarding actual impacts experienced during implementation.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "change_impact-24",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Testing & Validation",
      "action": "M Validate that identified impacts, mitigations and support activities remain relevant and effective",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "change_impact-25",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Implementation",
      "action": "S Adjust impact management interventions using implementation experience, stakeholder feedback and operational insight.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "change_impact-26",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Assess whether anticipated impacts have occurred and whether mitigation activities achieved the desired outcome.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "change_impact-27",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Continuously review future impact-related risks, dependencies and emerging organisational pressures",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "change_impact-28",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Monitor long-term impact trends, outcomes and organisational consequences of change initiatives",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "change_impact-29",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Promote a culture where change impacts are proactively assessed, managed and used to inform organisational improvement",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "change_impact-30",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Maintain organisation-wide insight mechanisms to identify emerging or cumulative impacts from ongoing change activity",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "change_impact-31",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Benchmark change impact management performance and maturity across programmes and change initiatives.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "change_impact-32",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Training & Learning",
      "action": "S Capture and apply organisational learning from change impact successes, challenges and implementation experience",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "change_impact-33",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Recognise and reinforce good practice in identifying, managing and mitigating change impacts",
      "outcomeIds": [],
      "readinessScore": 4
    }
  ]
}
`,aa={componentId:"change_impact",actionPrefix:"change-impact-action",outcomePrefix:"change-impact:outcome",fallbackOutcomes:[{id:"change-impact:outcome:o1",text:"The impact of the change has been identified and understood"},{id:"change-impact:outcome:o2",text:"Impacts have been assessed, validated and prioritised"},{id:"change-impact:outcome:o3",text:"Change impacts are actively managed through plans, governance and support"}]},Td=Qe($d,aa);function Ld(t){return Ze(t,aa,Td)}function Md(t){return et(t,aa)}const Bd=`{
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
      "id": "change_network-0",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "S Recognise the need for a change network to support engagement, communication and adoption activities.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_network-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "S Explore how a change network could support programme and organisational objectives.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_network-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Identify potential areas, teams and stakeholder groups that may benefit from local change support.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_network-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Discuss the concept of change agents and change champions with sponsors and stakeholder groups.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_network-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Assess whether useful local networks, forums or communities already exist that could support change activities.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_network-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Obtain initial sponsor agreement to creation of a change network.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_network-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Begin raising awareness of the potential role and value of a change network.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_network-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "M Identify possible individuals who may have influence, credibility or interest in supporting change locally.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 0
    },
    {
      "id": "change_network-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Agree and document the purpose, scope and objectives of the change network.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_network-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Prioritise organisational areas and stakeholder groups requiring representation within the change network.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_network-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Draft role profiles and expectations for change agents and change champions.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_network-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Define sponsorship, reporting lines and governance arrangements for the proposed network.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_network-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Develop a structured recruitment, onboarding and engagement approach for network members.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_network-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Approach and engage prospective network members across priority business areas.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_network-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Assess commitment, availability and suitability of prospective network members.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_network-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Review network coverage and identify gaps in representation, influence and local knowledge.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_network-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Communicate planned objectives, roles and expected value to the prospective change network members.",
      "outcomeIds": ["CN_O1", "CN_O2"],
      "readinessScore": 1
    },
    {
      "id": "change_network-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Establish initial connections and collaboration opportunities between prospective network members.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "change_network-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Launch the change network with defined membership, responsibilities and operating arrangements.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 2
    },
    {
      "id": "change_network-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Training & Learning",
      "action": "M Provide initial training and capability development for network members.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_network-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "M Provide network members with key messages, updates and engagement materials.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_network-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Establish mechanisms for two-way communication between the programme and the network.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_network-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "M Define measures to assess network participation, contribution and effectiveness.",
      "outcomeIds": ["CN_O2", "CN_O3"],
      "readinessScore": 2
    },
    {
      "id": "change_network-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Gather insights, questions, concerns, and feedback from stakeholders through network members.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_network-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Reinforce key messages and support local engagement activities through network members.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_network-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Empower network members to represent stakeholder concerns within programme discussions.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_network-26",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Support network members to build local advocacy and confidence in the change.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "change_network-27",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "M Monitor engagement levels and participation across the network.",
      "outcomeIds": ["CN_O2", "CN_O3"],
      "readinessScore": 2
    },
    {
      "id": "change_network-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "M Align change network activity with engagement, learning and adoption plans.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "change_network-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Integrate the impact of the change network into programme governance, planning and delivery activities.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "change_network-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Evaluate the effectiveness of the network in supporting change outcomes.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "change_network-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Refine network structures, roles and approaches based on learning and feedback.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "change_network-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Facilitate local problem solving and remove barriers to adoption, using the change network.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 3
    },
    {
      "id": "change_network-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Reinforce desired behaviours and ways of working, using the change network.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 3
    },
    {
      "id": "change_network-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Share examples of network impact and success across stakeholder groups.",
      "outcomeIds": ["CN_O2", "CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "change_network-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Recognise and celebrate the contribution of network members.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "change_network-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Assess stakeholder perceptions of change network effectiveness.",
      "outcomeIds": ["CN_O2", "CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "change_network-37",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "M Develop a structured approach to sustaining a change network capable of supporting future change initiatives, with appropriate ownership.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "change_network-38",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Embed the change network into future organisational change and improvement approaches.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "change_network-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Review and continuously improve change network effectiveness and operating models.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "change_network-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Use organisational learning to strengthen future change network approaches.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "change_network-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "S Integrate the change network with organisational improvement, transformation and change capability activities.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "change_network-42",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Maintain active two-way communication between stakeholders and the change network.",
      "outcomeIds": ["CN_O2", "CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "change_network-43",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Embed change agents and change champion roles into organisational culture.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "change_network-44",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Measure the network’s contribution to engagement, adoption and reinforcement outcomes.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "change_network-45",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Develop future change leaders from within the network.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "change_network-46",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Demonstrate the value of the network through sustained contribution to organisational change success.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    }
  ]
}
`,ia={componentId:"change_network",actionPrefix:"change-network-action",outcomePrefix:"change-network:outcome",fallbackOutcomes:[{id:"change-network:outcome:o1",text:"A representative and effective change network has been established"},{id:"change-network:outcome:o2",text:"The change network actively enables engagement and adoption"},{id:"change-network:outcome:o3",text:"The change network is embedded and delivers ongoing value"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Engagement:"People Experience and Culture","Analysis and Insight":"People Experience and Culture"}},Fd=Qe(Bd,ia);function Gd(t){return Ze(t,ia,Fd)}function Ud(t){return et(t,ia)}const Hd=`{
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
      "id": "cm_readiness-0",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Recognise the need for structured change management planning and readiness assessment to support successful implementation.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 0
    },
    {
      "id": "cm_readiness-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "M Begin discussions with sponsors, leaders and stakeholders about organisational preparedness for the change.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 0
    },
    {
      "id": "cm_readiness-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Identify high-level areas where readiness, planning or implementation challenges may occur.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 0
    },
    {
      "id": "cm_readiness-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "S Explore stakeholder perceptions regarding readiness, change capacity and support needs.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 0
    },
    {
      "id": "cm_readiness-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Identify initial organisational constraints, assumptions and factors that could influence delivery.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 0
    },
    {
      "id": "cm_readiness-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Gain initial agreement that change readiness needs to be assessed and change management planning activities will be required.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 0
    },
    {
      "id": "cm_readiness-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "S Begin raising awareness of the need for implementation planning, readiness activities and organisational preparation.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 0
    },
    {
      "id": "cm_readiness-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Review lessons learned from previous change initiatives relating to readiness and planning.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 0
    },
    {
      "id": "cm_readiness-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Conduct a structured readiness assessment to understand organisational preparedness for change.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 1
    },
    {
      "id": "cm_readiness-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Define and establish baseline readiness measures and indicators.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 1
    },
    {
      "id": "cm_readiness-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Assess organisational capability, capacity and resource availability required to support implementation.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 1
    },
    {
      "id": "cm_readiness-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Identify and document readiness gaps between the current state and desired future state.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 1
    },
    {
      "id": "cm_readiness-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "S Assess readiness-related risks that may affect successful implementation.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 1
    },
    {
      "id": "cm_readiness-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "S Assess organisational, programme and operational dependencies affecting readiness.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 1
    },
    {
      "id": "cm_readiness-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "S Engage stakeholders to validate readiness levels, concerns, confidence and support requirements.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 1
    },
    {
      "id": "cm_readiness-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Assess organisational attitudes, competing priorities, change fatigue and change capacity.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 1
    },
    {
      "id": "cm_readiness-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Develop a structured change management approach informed by readiness findings.",
      "outcomeIds": ["RP_O2"],
      "readinessScore": 1
    },
    {
      "id": "cm_readiness-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Define change management workstreams, priorities, activities, milestones and delivery approach.",
      "outcomeIds": ["RP_O2"],
      "readinessScore": 1
    },
    {
      "id": "cm_readiness-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "M Develop a detailed change management plan informed by readiness, impact, risk and stakeholder analysis findings.",
      "outcomeIds": ["RP_O2"],
      "readinessScore": 2
    },
    {
      "id": "cm_readiness-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "S Map dependencies, assumptions, constraints and critical path activities within the change plan.",
      "outcomeIds": ["RP_O2"],
      "readinessScore": 2
    },
    {
      "id": "cm_readiness-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Define readiness indicators, implementation checkpoints and progress measures.",
      "outcomeIds": ["RP_O2", "RP_O3"],
      "readinessScore": 2
    },
    {
      "id": "cm_readiness-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "S Integrate readiness and planning risks into the wider change risk management approach.",
      "outcomeIds": ["RP_O2", "RP_O3"],
      "readinessScore": 2
    },
    {
      "id": "cm_readiness-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "S Validate planning assumptions and readiness findings with affected stakeholder groups.",
      "outcomeIds": ["RP_O1", "RP_O2"],
      "readinessScore": 2
    },
    {
      "id": "cm_readiness-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "S Align learning, communications, engagement and support activities with implementation milestones.",
      "outcomeIds": ["RP_O2"],
      "readinessScore": 2
    },
    {
      "id": "cm_readiness-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Establish ownership and accountability for delivery of change management activities.",
      "outcomeIds": ["RP_O2"],
      "readinessScore": 2
    },
    {
      "id": "cm_readiness-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Define how readiness will be monitored and reassessed throughout delivery.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 2
    },
    {
      "id": "cm_readiness-26",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Obtain approval of the change management plan through appropriate governance routes.",
      "outcomeIds": ["RP_O2"],
      "readinessScore": 3
    },
    {
      "id": "cm_readiness-27",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Communication",
      "action": "M Communicate implementation timelines, expected activities and preparation requirements.",
      "outcomeIds": ["RP_O2"],
      "readinessScore": 3
    },
    {
      "id": "cm_readiness-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Monitor delivery of the change management plan against agreed milestones and success measures.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "cm_readiness-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Review readiness levels at key implementation checkpoints.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "cm_readiness-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "S Address readiness gaps, issues and barriers that emerge during implementation.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "cm_readiness-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Review progress, readiness and delivery issues through governance forums.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "cm_readiness-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "S Adjust and refine plans in response to delivery experience, feedback and changing priorities.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "cm_readiness-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "S Gather stakeholder feedback on implementation preparedness and support requirements.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "cm_readiness-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Communication",
      "action": "S Provide regular updates on implementation plans, readiness progress and key milestones.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "cm_readiness-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "S Coordinate readiness activities across communications, engagement, learning and support workstreams.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "cm_readiness-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Testing & Validation",
      "action": "M Validate organisational readiness and acceptance criteria before key implementation events and go-live activities start.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "cm_readiness-37",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Assess whether planned change management activities are supporting successful implementation.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "cm_readiness-38",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Use implementation and adoption data to evaluate the effectiveness of readiness and planning approaches.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 4
    },
    {
      "id": "cm_readiness-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "S Incorporate lessons learned into future change planning methodologies.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 4
    },
    {
      "id": "cm_readiness-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Senior leaders should have visibility of areas in the organisation where readiness is low and impact of the change is high",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "cm_readiness-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Continuously review organisational readiness for future changes and transformation activity.",
      "outcomeIds": ["RP_O1", "RP_O3"],
      "readinessScore": 4
    },
    {
      "id": "cm_readiness-42",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "S Maintain visibility and management of strategic programme dependencies affecting future readiness.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 4
    },
    {
      "id": "cm_readiness-43",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "S Maintain mechanisms for gathering ongoing readiness insight from across the organisation.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 4
    },
    {
      "id": "cm_readiness-44",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "M Review progress against readiness acceptance criteria to inform go live decision",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "cm_readiness-45",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Benchmark readiness and planning performance against previous programmes and organisational standards.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 4
    },
    {
      "id": "cm_readiness-46",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Embed readiness reviews and change planning disciplines into organisational change delivery standards.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 4
    },
    {
      "id": "cm_readiness-47",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "S Recognise teams and leaders that consistently demonstrate strong change preparedness and planning discipline.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 4
    },
    {
      "id": "cm_readiness-48",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Continuously improve change planning templates, standards and guidance using organisational learning.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 4
    },
    {
      "id": "cm_readiness-49",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Agree readiness acceptance criteria to support go live decisions",
      "outcomeIds": [],
      "readinessScore": 2
    },
    {
      "id": "cm_readiness-50",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "S Embed proactive readiness assessment and planning as a routine part of organisational change delivery.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 4
    }
  ]
}
`,oa={componentId:"cm_readiness",actionPrefix:"cm-readiness-action",outcomePrefix:"cm-readiness:outcome",fallbackOutcomes:[{id:"cm-readiness:outcome:o1",text:"Organisational readiness has been assessed"},{id:"cm-readiness:outcome:o2",text:"A robust change management plan has been developed"},{id:"cm-readiness:outcome:o3",text:"Readiness and planning activities actively support successful implementation"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Planning and Risk":"Planning and Risk","People Experience and Culture":"Planning and Risk","Skills and Behaviour":"Planning and Risk","Process and Sustainment":"Planning and Risk",Governance:"Planning and Risk",Reinforcement:"Planning and Risk"}},Wd=Qe(Hd,oa);function Vd(t){return Ze(t,oa,Wd)}function qd(t){return et(t,oa)}const Yd=`{
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
      "id": "org_maturity-0",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Recognise that organisational readiness will influence the success of the change.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 0
    },
    {
      "id": "org_maturity-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "M Begin discussions with leaders regarding the organisation's ability to absorb and support the change.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 0
    },
    {
      "id": "org_maturity-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "M Explore stakeholder perceptions of preparedness, capacity and support requirements.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 0
    },
    {
      "id": "org_maturity-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Identify high-level organisational factors that may support or hinder the change.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 0
    },
    {
      "id": "org_maturity-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Secure initial agreement that organisational readiness will be assessed and managed throughout the change lifecycle.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 0
    },
    {
      "id": "org_maturity-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "S Begin raising awareness of organisational readiness considerations and expectations.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 0
    },
    {
      "id": "org_maturity-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "S Review lessons learned from previous organisational changes relating to readiness and preparedness.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 0
    },
    {
      "id": "org_maturity-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Identify potential readiness risks, constraints and competing organisational priorities.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 0
    },
    {
      "id": "org_maturity-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Conduct a structured organisational readiness assessment.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 1
    },
    {
      "id": "org_maturity-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Assess organisational capacity, workload pressures and competing priorities.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 1
    },
    {
      "id": "org_maturity-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "M Validate readiness findings with stakeholders, leaders and operational teams.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 1
    },
    {
      "id": "org_maturity-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "M Define readiness indicators, measures and assessment criteria.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 1
    },
    {
      "id": "org_maturity-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "S Identify organisational readiness strengths, weaknesses, risks and barriers.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 1
    },
    {
      "id": "org_maturity-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "S Assess organisational attitudes towards change, confidence levels and change fatigue.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 1
    },
    {
      "id": "org_maturity-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "S Assess dependencies affecting organisational readiness across programmes, services and operational activities.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 1
    },
    {
      "id": "org_maturity-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Develop a readiness improvement approach to address identified gaps and barriers.",
      "outcomeIds": ["OCR_O2"],
      "readinessScore": 1
    },
    {
      "id": "org_maturity-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Define ownership and accountability for organisational readiness improvement activities.",
      "outcomeIds": ["OCR_O2"],
      "readinessScore": 1
    },
    {
      "id": "org_maturity-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "S Communicate organisational readiness findings and improvement priorities.",
      "outcomeIds": ["OCR_O2"],
      "readinessScore": 1
    },
    {
      "id": "org_maturity-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Develop and implement readiness improvement plans to address identified organisational readiness gaps.",
      "outcomeIds": ["OCR_O2"],
      "readinessScore": 2
    },
    {
      "id": "org_maturity-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Risk Management",
      "action": "S Implement actions to address organisational capacity constraints that could affect successful change delivery.",
      "outcomeIds": ["OCR_O2"],
      "readinessScore": 2
    },
    {
      "id": "org_maturity-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "S Strengthen leadership readiness by upskilling senior leaders in Change Management to support and champion the change effectively.",
      "outcomeIds": ["OCR_O2"],
      "readinessScore": 2
    },
    {
      "id": "org_maturity-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "M Build operational manager readiness to coach, support and guide teams through the change.",
      "outcomeIds": ["OCR_O2"],
      "readinessScore": 2
    },
    {
      "id": "org_maturity-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "S Improve local team preparedness through targeted support, engagement and readiness interventions.",
      "outcomeIds": ["OCR_O2"],
      "readinessScore": 2
    },
    {
      "id": "org_maturity-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Monitor organisational readiness indicators and assess progress against readiness objectives.",
      "outcomeIds": ["OCR_O2", "OCR_O3"],
      "readinessScore": 2
    },
    {
      "id": "org_maturity-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Review organisational readiness performance and improvement actions through governance processes.",
      "outcomeIds": ["OCR_O2", "OCR_O3"],
      "readinessScore": 2
    },
    {
      "id": "org_maturity-26",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "M Align readiness improvement activities with implementation milestones, programme dependencies and delivery schedules.",
      "outcomeIds": ["OCR_O2"],
      "readinessScore": 2
    },
    {
      "id": "org_maturity-27",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Testing & Validation",
      "action": "M Reassess organisational readiness before key implementation events and delivery milestones.",
      "outcomeIds": ["OCR_O2", "OCR_O3"],
      "readinessScore": 2
    },
    {
      "id": "org_maturity-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "M Measure organisational readiness performance across impacted areas and stakeholder groups.",
      "outcomeIds": ["OCR_O3"],
      "readinessScore": 3
    },
    {
      "id": "org_maturity-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Testing & Validation",
      "action": "M Validate organisational readiness before go-live activities and major implementation events.",
      "outcomeIds": ["OCR_O3"],
      "readinessScore": 3
    },
    {
      "id": "org_maturity-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Risk Management",
      "action": "S Address remaining readiness gaps that could affect implementation success.",
      "outcomeIds": ["OCR_O3"],
      "readinessScore": 3
    },
    {
      "id": "org_maturity-31",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "M Embed organisational readiness assessment into organisational change governance, assurance and decision-making processes.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "org_maturity-32",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Establish organisational accountability for maintaining readiness standards across change portfolios and programmes.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "org_maturity-33",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Benchmark organisational readiness maturity across programmes, projects and transformation initiatives.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "org_maturity-34",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Training & Learning",
      "action": "S Continuously improve organisational readiness methodologies, frameworks and assessment approaches using organisational learning.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "org_maturity-35",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "M Embed readiness metrics and reporting within organisational governance, portfolio management and assurance arrangements.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "org_maturity-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "M Identify emerging workforce capability requirements that could influence future organisational readiness levels.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "org_maturity-37",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "S Ensure managers and local leaders have the skills and confidence required to support implementation activities.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "org_maturity-38",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "S Reinforce behaviours and practices that demonstrate organisational preparedness and readiness for change.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "org_maturity-39",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Testing & Validation",
      "action": "S Verify that capability-building activities have improved organisational readiness and preparedness.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "org_maturity-40",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "S Recognise and reinforce behaviours that demonstrate proactive preparedness, adaptability and readiness for change.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "org_maturity-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "S Embed organisational readiness capability development into ongoing learning, development and workforce planning activities.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "org_maturity-42",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "S Monitor long-term organisational preparedness, workforce capability and readiness competency across the organisation.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "org_maturity-43",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "S Benchmark organisational readiness capability and preparedness maturity across programmes, teams and organisational functions.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "org_maturity-44",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "S Capture and apply organisational learning relating to capability, preparedness and readiness outcomes.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "org_maturity-45",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "S Assess the effectiveness of organisational readiness capability-building activities in supporting future change initiatives.",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "org_maturity-46",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "M Promote a culture of continuous capability development, preparedness and readiness for change.",
      "outcomeIds": [],
      "readinessScore": 4
    }
  ]
}
`,ra={componentId:"org_maturity",actionPrefix:"org-change-readiness-action",outcomePrefix:"org-change-readiness:outcome",fallbackOutcomes:[{id:"org-change-readiness:outcome:o1",text:"Organisational readiness has been assessed and understood"},{id:"org-change-readiness:outcome:o2",text:"Readiness gaps are being actively addressed"},{id:"org-change-readiness:outcome:o3",text:"The organisation is prepared to successfully absorb and sustain the change"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"Skills and Behaviour","Planning and Measurement":"Skills and Behaviour",Design:"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Reinforcement:"Skills and Behaviour"}},Kd=Qe(Yd,ra);function zd(t){return Ze(t,ra,Kd)}function Jd(t){return et(t,ra)}const Xd="pathway-auto-action:",Qd="pathway:auto-objective:",Zd="vision:auto-objective:";function em(t){return t.startsWith(Qd)||t.startsWith(Zd)}function tm(t){const n=t.orgProfile.cst.pathway,s={...t.objectives||{}},a=Object.keys(t.currentDraft||{}).reduce((i,l)=>{const o=t.currentDraft[l]||{};return i[l]=Object.keys(o).reduce((c,m)=>{const u=o[m];return c[m]={...u,actions:(u.actions||[]).filter(r=>!r.id.startsWith(Xd))},c},{}),i},{});return ln.forEach(i=>{mo(i.id,n)&&(s[i.id]=(s[i.id]||[]).filter(o=>!em(o.id)))}),{...t,currentDraft:a,objectives:s}}const nm=`{
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
      "name": "Processes are optimised and continuously improved"
    }
  ],
  "actions": [
    {
      "id": "process_change-0",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Recognise that business processes will need to change to deliver the intended outcomes.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 0
    },
    {
      "id": "process_change-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Identify high-level business areas likely to be affected by process change.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 0
    },
    {
      "id": "process_change-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "M Engage process owners and stakeholders to explore how work may need to change.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 0
    },
    {
      "id": "process_change-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Identify known process challenges, issues and opportunities for improvement.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 0
    },
    {
      "id": "process_change-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "M Obtain initial agreement from leaders and process owners to review affected processes.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 0
    },
    {
      "id": "process_change-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Communication",
      "action": "S Begin raising awareness that changes to processes and ways of working may be required.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 0
    },
    {
      "id": "process_change-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Identify existing documentation, workflows or process maps that may support future analysis.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 0
    },
    {
      "id": "process_change-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "S Identify potential process dependencies that may need further investigation.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 0
    },
    {
      "id": "process_change-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Confirm and prioritise the business processes affected by the change.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "process_change-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Conduct structured current-state process mapping and workflow analysis.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "process_change-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Analyse process pain points, bottlenecks, duplication and inefficiencies in priority areas.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "process_change-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "M Define and capture baseline process performance measures.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "process_change-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "M Validate current operational challenges and improvement opportunities with process users.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "process_change-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "M Develop draft future-state process designs aligned to intended change outcomes.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "process_change-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Conduct structured gap analysis between current-state and future-state processes.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "process_change-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "S Assess process dependencies, interfaces and external touchpoints.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "process_change-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "M Confirm process ownership and accountability arrangements for future-state processes.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "process_change-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "M Document draft future-state processes, procedures and operating requirements.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "process_change-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "M Validate future-state processes with stakeholders and subject matter experts.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "process_change-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "M Test future-state workflows under realistic operating conditions.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "process_change-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "M Refine future-state processes using validation and testing feedback.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "process_change-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Implementation",
      "action": "M Implement approved future-state processes.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "process_change-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "M Coordinate process implementation with learning, communications, adoption and operational readiness activities.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "process_change-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Communication",
      "action": "M Communicate process changes, responsibilities and expectations to stakeholders.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "process_change-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "M Support teams in understanding and applying new process requirements.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "process_change-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "M Review implementation progress and process readiness through governance forums.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "process_change-26",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Risk Management",
      "action": "S Identify and manage risks associated with process implementation.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "process_change-27",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "S Monitor early process performance following implementation.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "process_change-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "M Measure whether the future state processes are working against baseline and target measures.",
      "outcomeIds": ["PC_O2", "PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "process_change-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "S Analyse trends in the future state process performance and identify opportunities for optimisation.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "process_change-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "M Validate that new ways of working align with the objectives of the future-state processes.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "process_change-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "M Review process performance and improvement priorities through governance routes.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "process_change-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "S Refine processes using implementation feedback, operational insight and performance data.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "process_change-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "M Gather user feedback on process usability and effectiveness.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "process_change-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "S Recognise and celebrate teams contributing to successful new ways of working and improvement.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "process_change-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "M Align any improvements to the new ways of working with benefits realisation and adoption activities.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "process_change-37",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Implementation",
      "action": "S Standardise new processes across relevant business areas.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "process_change-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Implementation",
      "action": "M Embed ownership for continuous improvement in the new ways of working into operational teams.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 4
    },
    {
      "id": "process_change-38",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "S Continuously monitor consistency of new ways of working and operational outcomes.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 4
    },
    {
      "id": "process_change-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "S Use performance insight and organisational learning to optimise processes further.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 4
    },
    {
      "id": "process_change-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "S Embed process review and optimisation into BAU governance arrangements.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 4
    },
    {
      "id": "process_change-42",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "M Promote a culture of continuous improvement and optimisation to ways of working.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 4
    }
  ]
}
`,la={componentId:"process_change",actionPrefix:"process-change-action",outcomePrefix:"process-change:outcome",fallbackOutcomes:[{id:"process-change:outcome:o1",text:"Current and future processes have been defined"},{id:"process-change:outcome:o2",text:"Process changes have been implemented and adopted"},{id:"process-change:outcome:o3",text:"Processes are optimised and continuously improved"}],lensAliases:{"Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Skills and Behaviour","Planning and Risk":"Process and Sustainment","Analysis and Insight":"Process and Sustainment",Communication:"Skills and Behaviour","Dependency Management":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment",Implementation:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"Skills and Behaviour","Testing and Validation":"Process and Sustainment"}},sm=Qe(nm,la);function am(t){return Ze(t,la,sm)}function im(t){return et(t,la)}const om=`{
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
      "id": "reinforcement-0",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Recognise the need to sustain change outcomes beyond implementation and initial adoption.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 0
    },
    {
      "id": "reinforcement-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "M Discuss with sponsors and leaders how the change will need to be sustained after go-live.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 0
    },
    {
      "id": "reinforcement-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Identify behaviours, processes and outcomes that will require ongoing reinforcement.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 0
    },
    {
      "id": "reinforcement-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "M Identify areas where adoption may decline without ongoing support.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 0
    },
    {
      "id": "reinforcement-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Explore stakeholder perceptions of what will help or hinder long-term sustainment.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 0
    },
    {
      "id": "reinforcement-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "M Gain initial sponsor commitment to support reinforcement and sustainment activities.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 0
    },
    {
      "id": "reinforcement-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Begin raising awareness that reinforcement activities will be available if required where adoption is low.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 0
    },
    {
      "id": "reinforcement-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "S Review previous change initiatives to identify sustainment risks and lessons learned.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 0
    },
    {
      "id": "reinforcement-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "M Define and document what successful long-term adoption and sustainment will look like.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "reinforcement-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "M Develop agreed sustainment indicators and reinforcement measures.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "reinforcement-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "M Define ownership, accountabilities and responsibilities for reinforcement activities.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "reinforcement-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "S Assess dependencies between reinforcement, adoption, benefits, sponsorship and operational ownership.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "reinforcement-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "M Ensure a structured reinforcement and sustainment approach is documented in the adoption plan. ",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "reinforcement-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "M Assess sustainment drivers and barriers across stakeholder groups and business areas.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "reinforcement-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Validate stakeholder sustainment needs and ongoing support requirements.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "reinforcement-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Identify priority stakeholder groups requiring targeted reinforcement support.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "reinforcement-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Communicate expected future-state behaviours and sustainment expectations.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "reinforcement-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "M Establish baseline reinforcement and sustainment measures.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "reinforcement-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "M Ensure leaders and managers visibly reinforce desired behaviours and new ways of working.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "reinforcement-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "M Communicate adoption successes, improvements and positive outcomes.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "reinforcement-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "M Review reinforcement indicators and sustainment risks through governance mechanisms.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "reinforcement-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "S Monitor adoption, behaviour and performance indicators linked to sustained change.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "reinforcement-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "S Refine reinforcement plans using sustainment data and stakeholder feedback.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "reinforcement-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Recognise and celebrate examples of successful adoption, positive behavioural change and improvements to ways of working.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "reinforcement-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Use change networks, champions and managers to reinforce desired behaviours locally.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "reinforcement-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Training & Learning",
      "action": "M Provide refresher support where adoption or confidence levels begin to decline.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "reinforcement-26",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Gather feedback regarding sustainment challenges and support needs.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "reinforcement-27",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "M Monitor sustainment indicators and identify areas where adoption is weakening.",
      "outcomeIds": ["REINF_O2", "REINF_O3"],
      "readinessScore": 3
    },
    {
      "id": "reinforcement-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Target reinforcement activity towards groups showing reductions in adoption or compliance.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 3
    },
    {
      "id": "reinforcement-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "M Ensure leaders consistently model desired behaviours and reinforce expectations.",
      "outcomeIds": ["REINF_O2", "REINF_O3"],
      "readinessScore": 3
    },
    {
      "id": "reinforcement-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "S Review sustainment performance and improvement actions through governance processes.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 3
    },
    {
      "id": "reinforcement-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "S Analyse performance, adoption and benefits data to identify sustainment opportunities.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 3
    },
    {
      "id": "reinforcement-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Demonstrate the ongoing value of the change through evidence and success stories.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 3
    },
    {
      "id": "reinforcement-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Recognise teams and individuals who consistently demonstrate future-state behaviours.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 3
    },
    {
      "id": "reinforcement-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Use stakeholder feedback to improve sustainment and reinforcement activities.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 3
    },
    {
      "id": "reinforcement-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Risk Management",
      "action": "S Identify risks that may cause reversion to previous behaviours or ways of working.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 3
    },
    {
      "id": "reinforcement-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "S Update reinforcement approaches using sustainment insight and lessons learned.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 3
    },
    {
      "id": "reinforcement-37",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Governance",
      "action": "M Embed reinforcement measures into operational management and performance processes.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 4
    },
    {
      "id": "reinforcement-38",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "S Monitor long-term behavioural sustainment and continuous improvement outcomes.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 4
    },
    {
      "id": "reinforcement-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "S Use organisational learning to improve future reinforcement strategies.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 4
    },
    {
      "id": "reinforcement-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Embed recognition, feedback and reinforcement practices into organisational culture.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 4
    },
    {
      "id": "reinforcement-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Promote continuous improvement and ongoing enhancement of adopted ways of working.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 4
    }
  ]
}
`,ca={componentId:"reinforcement",actionPrefix:"reinforcement-action",outcomePrefix:"reinforcement:outcome",fallbackOutcomes:[{id:"reinforcement:outcome:o1",text:"Reinforcement strategy and sustainment measures are defined"},{id:"reinforcement:outcome:o2",text:"Reinforcement activities support sustained adoption and behaviour change"},{id:"reinforcement:outcome:o3",text:"Sustained change outcomes are embedded and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Strategic Direction and Leadership":"Process and Sustainment","Planning and Measurement":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"People Experience and Culture"}},rm=Qe(om,ca);function lm(t){return Ze(t,ca,rm)}function cm(t){return et(t,ca)}const dm=`{
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
      "id": "resistance-0",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "M Recognise that resistance is a normal response to change and may need to be actively managed.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 0
    },
    {
      "id": "resistance-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Begin discussing potential concerns and reactions to the change with stakeholders and leaders.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 0
    },
    {
      "id": "resistance-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "M Identify stakeholder groups where resistance may emerge during the change.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 0
    },
    {
      "id": "resistance-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Explore if there have been previous organisational experiences that may influence reactions to the change.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 0
    },
    {
      "id": "resistance-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "M Gain initial sponsor and leadership agreement that resistance management activities may be required.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 0
    },
    {
      "id": "resistance-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "S Identify high-level risks that resistance could present to successful implementation.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 0
    },
    {
      "id": "resistance-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Begin raising awareness amongst leaders and managers about the role of resistance management in successful change.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 0
    },
    {
      "id": "resistance-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Review lessons learned from previous changes relating to resistance, concern and stakeholder opposition.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 0
    },
    {
      "id": "resistance-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Use the stakeholder analysis to identify and document potential sources of resistance across stakeholder groups, teams and impacted areas.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 1
    },
    {
      "id": "resistance-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Assess causes, drivers and contributing factors likely to generate resistance.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 1
    },
    {
      "id": "resistance-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Conduct structured engagement to understand concerns, apprehensions and barriers to supporting the change.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 1
    },
    {
      "id": "resistance-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Analyse restraining forces and resistance factors using recognised assessment approaches (Force Field Analysis).",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 1
    },
    {
      "id": "resistance-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Risk Management",
      "action": "S Assess likelihood, impact and priority of resistance risks affecting implementation and adoption.",
      "outcomeIds": ["RES_O1", "RES_O2"],
      "readinessScore": 1
    },
    {
      "id": "resistance-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "M Develop a structured resistance management approach based on identified resistance drivers.",
      "outcomeIds": ["RES_O2"],
      "readinessScore": 1
    },
    {
      "id": "resistance-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "M Define ownership, accountabilities and escalation arrangements for resistance management.",
      "outcomeIds": ["RES_O2"],
      "readinessScore": 1
    },
    {
      "id": "resistance-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "S Develop preventative interventions intended to reduce the likelihood and impact of resistance.",
      "outcomeIds": ["RES_O2"],
      "readinessScore": 1
    },
    {
      "id": "resistance-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Dependency Management",
      "action": "S Assess dependencies between resistance management and engagement, communication, learning and sponsorship activities.",
      "outcomeIds": ["RES_O2"],
      "readinessScore": 1
    },
    {
      "id": "resistance-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Define measures and indicators that will be used to identify, track and monitor resistance.",
      "outcomeIds": ["RES_O2"],
      "readinessScore": 1
    },
    {
      "id": "resistance-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Establish mechanisms for identifying and escalating emerging resistance.",
      "outcomeIds": ["RES_O2", "RES_O3"],
      "readinessScore": 2
    },
    {
      "id": "resistance-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Use managers, change agents and change champions to gather insight into emerging concerns and resistance.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 2
    },
    {
      "id": "resistance-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Address misconceptions, rumours and misinformation through targeted engagement and communication activities.",
      "outcomeIds": ["RES_O2", "RES_O3"],
      "readinessScore": 2
    },
    {
      "id": "resistance-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Hold structured conversations with impacted groups to explore concerns and identify potential solutions that could otherwise lead to resistance.",
      "outcomeIds": ["RES_O2", "RES_O3"],
      "readinessScore": 2
    },
    {
      "id": "resistance-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "M Develop a resistance management plan.",
      "outcomeIds": [],
      "readinessScore": 2
    },
    {
      "id": "resistance-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "S Prepare leaders and managers to identify, understand and respond to resistance effectively.",
      "outcomeIds": ["RES_O2"],
      "readinessScore": 2
    },
    {
      "id": "resistance-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Risk Management",
      "action": "S Integrate significant resistance themes into change risk management processes.",
      "outcomeIds": ["RES_O2", "RES_O3"],
      "readinessScore": 2
    },
    {
      "id": "resistance-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "S Monitor indicators of resistance across stakeholder groups and impacted areas.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 2
    },
    {
      "id": "resistance-26",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Provide tailored responses and messaging for stakeholder groups showing greater levels of resistance.",
      "outcomeIds": ["RES_O2", "RES_O3"],
      "readinessScore": 2
    },
    {
      "id": "resistance-27",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "M Review resistance themes and mitigation actions through governance forums.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 2
    },
    {
      "id": "resistance-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Monitor trends in stakeholder sentiment, concerns and resistance levels.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "resistance-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Implement targeted interventions for stakeholder groups with high levels of resistance.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "resistance-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Adapt communication and engagement approaches in response to resistance trends.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "resistance-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "M Resistance management plan to be approved by governance and forms part of the change management plan.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "resistance-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "S Use visible leadership support and change network to reinforce desired behaviours and address resistance.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "resistance-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "S Assess the effectiveness of resistance management interventions.",
      "outcomeIds": ["RES_O2", "RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "resistance-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Recognise and highlight examples of positive adoption and support for the change to positively influence resisters.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "resistance-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Use feedback channels to identify unresolved concerns before they become entrenched resistance.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "resistance-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Risk Management",
      "action": "S Review resistance-related risks and update mitigations where required.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "resistance-37",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "S Review resistance themes and organisational responses through governance and leadership forums.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "resistance-43",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "M Embed behaviours that promote openness and psychological safety to encourage feedback and constructive challenge during change",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "resistance-38",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "S Use organisational learning to strengthen future resistance management approaches.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 4
    },
    {
      "id": "resistance-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Maintain open dialogue with stakeholders to surface concerns early and prevent future resistance.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 4
    },
    {
      "id": "resistance-41",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "S Refine resistance management interventions using stakeholder insight and feedback.",
      "outcomeIds": ["RES_O2", "RES_O3"],
      "readinessScore": 2
    },
    {
      "id": "resistance-42",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "S Refine resistance management plans based on implementation experience and lessons learned.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "resistance-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "S Embed resistance management disciplines into organisational change delivery standards.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 4
    }
  ]
}
`,da={componentId:"resistance",actionPrefix:"resistance-action",outcomePrefix:"resistance:outcome",fallbackOutcomes:[{id:"resistance:outcome:o1",text:"Potential sources of resistance have been identified and understood"},{id:"resistance:outcome:o2",text:"Strategies and interventions are in place to prevent and address resistance"},{id:"resistance:outcome:o3",text:"Resistance is actively managed and reduced throughout the change lifecycle"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour",Design:"Skills and Behaviour",Communication:"People Experience and Culture",Engagement:"People Experience and Culture",Reinforcement:"Skills and Behaviour"}},mm=Qe(dm,da);function um(t){return Ze(t,da,mm)}function gm(t){return et(t,da)}const pm=`{
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
      "id": "risk_management-0",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Recognise that change-related risks may affect successful delivery, adoption, benefits realisation and sustainment.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 0
    },
    {
      "id": "risk_management-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "S Begin discussions with sponsors, leaders and stakeholders about potential risks associated with the change.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 0
    },
    {
      "id": "risk_management-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Identify high-level areas of uncertainty, vulnerability and potential risk exposure.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 0
    },
    {
      "id": "risk_management-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Identify factors that could increase the likelihood of implementation, adoption or sustainment risks.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 0
    },
    {
      "id": "risk_management-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "S Gain initial agreement with sponsors that change risks will need to be identified, assessed and actively managed.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 0
    },
    {
      "id": "risk_management-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "M Begin raising awareness at governance level of the importance of proactive, change related risk management.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 0
    },
    {
      "id": "risk_management-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Review lessons learned from previous changes to identify recurring risk themes and vulnerabilities.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 0
    },
    {
      "id": "risk_management-7",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Conduct structured change risk assessment activities involving stakeholders and subject matter experts.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "risk_management-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Identify and document risks that could affect successful delivery, adoption, benefit realisation or sustainment of the change (RAID log).",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "risk_management-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Assess and categorise identified risks according to likelihood, impact, urgency and priority.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "risk_management-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "S Apply structured risk assessment techniques to analyse consequences and exposure levels.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "risk_management-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Establish and maintain an initial change risk register.",
      "outcomeIds": ["RM_O1", "RM_O2"],
      "readinessScore": 1
    },
    {
      "id": "risk_management-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Assess processes, operating arrangements and dependencies to identify areas of elevated risk (RAID log).",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "risk_management-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Engage stakeholders to identify risks from operational, behavioural, cultural and organisational perspectives.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "risk_management-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "S Assess known concerns, previous change experiences and organisational vulnerabilities that may increase risk exposure.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "risk_management-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Use the completed change impact assessment to explore stakeholder perceptions of key concerns, risks and organisational vulnerabilities.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "risk_management-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "S Identify and assess critical dependencies that may increase the overall risk profile of the change.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "risk_management-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "S Assess stakeholder confidence in the organisation's ability to manage risks associated with the change.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "risk_management-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Assign ownership and accountability for identified risks.",
      "outcomeIds": ["RM_O2"],
      "readinessScore": 2
    },
    {
      "id": "risk_management-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Develop mitigation strategies and action plans for high-priority risks.",
      "outcomeIds": ["RM_O2"],
      "readinessScore": 2
    },
    {
      "id": "risk_management-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "S Integrate change risks into programme and organisational governance arrangements.",
      "outcomeIds": ["RM_O2", "RM_O3"],
      "readinessScore": 2
    },
    {
      "id": "risk_management-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Define risk monitoring indicators, thresholds and reporting arrangements.",
      "outcomeIds": ["RM_O2"],
      "readinessScore": 2
    },
    {
      "id": "risk_management-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "S Validate risk ratings and mitigation plans with relevant stakeholders and sponsors.",
      "outcomeIds": ["RM_O2"],
      "readinessScore": 2
    },
    {
      "id": "risk_management-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "S Communicate significant risks and agreed mitigations to appropriate stakeholder groups.",
      "outcomeIds": ["RM_O2"],
      "readinessScore": 2
    },
    {
      "id": "risk_management-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Refine risk understanding and mitigation activities using stakeholder insight and feedback.",
      "outcomeIds": ["RM_O2"],
      "readinessScore": 2
    },
    {
      "id": "risk_management-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "M Incorporate risk mitigation activities into implementation, communications, learning and readiness plans.",
      "outcomeIds": ["RM_O2", "RM_O3"],
      "readinessScore": 2
    },
    {
      "id": "risk_management-26",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "S Manage identified dependencies that increase overall change risk.",
      "outcomeIds": ["RM_O2", "RM_O3"],
      "readinessScore": 2
    },
    {
      "id": "risk_management-27",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "S Test proposed controls and mitigations before implementation where practical.",
      "outcomeIds": ["RM_O2"],
      "readinessScore": 2
    },
    {
      "id": "risk_management-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Review and update risk ratings based on emerging evidence and implementation experience.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "risk_management-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Monitor change risks regularly using agreed review cycles, thresholds and governance forums.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "risk_management-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Escalate significant risks through agreed governance routes and obtain timely decisions where required.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "risk_management-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "S Implement additional mitigation actions where existing controls are not sufficiently reducing risk exposure.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "risk_management-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Assess the effectiveness of mitigation activities and controls.",
      "outcomeIds": ["RM_O2", "RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "risk_management-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "M Review evolving dependencies and their impact on the risk profile.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "risk_management-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Gather stakeholder feedback on emerging risks, concerns and unintended consequences.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "risk_management-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "S Provide regular risk updates to stakeholders and leadership teams.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "risk_management-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "S Validate whether risk controls are operating as intended in practice.",
      "outcomeIds": ["RM_O2", "RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "risk_management-37",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Risk Management",
      "action": "S Improve current mitigation and control activities using lessons learned.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "risk_management-38",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Continuously monitor current risks and proactively scan for emerging risks associated with ongoing change and continuous improvement.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    },
    {
      "id": "risk_management-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "S Embed change risk management into routine governance, planning and operational management processes.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    },
    {
      "id": "risk_management-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Review long-term trends and recurring patterns in change-related risks.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    },
    {
      "id": "risk_management-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "S Use organisational learning to improve risk identification, assessment and mitigation approaches.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    },
    {
      "id": "risk_management-42",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "M Embed a culture of proactive risk management and continuous vigilance across the organisation.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    },
    {
      "id": "risk_management-43",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Encourage proactive risk identification and escalation throughout the organisation.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    },
    {
      "id": "risk_management-44",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "S Recognise and reinforce behaviours that contribute to effective risk management.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    },
    {
      "id": "risk_management-45",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "S Evaluate the maturity and effectiveness of the risk management approach on a regular basis.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    },
    {
      "id": "risk_management-46",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "S Continuously improve risk management processes using lessons learned and organisational insight.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    }
  ]
}
`,ma={componentId:"risk_management",actionPrefix:"risk-management-action",outcomePrefix:"risk-management:outcome",fallbackOutcomes:[{id:"risk-management:outcome:o1",text:"Change risks have been identified and assessed"},{id:"risk-management:outcome:o2",text:"Risk mitigation and management activities are in place"},{id:"risk-management:outcome:o3",text:"Risks are proactively managed throughout the change lifecycle"}],lensAliases:{"Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Strategic Direction and Leadership":"Planning and Risk","Skills and Behaviour":"Process and Sustainment",Governance:"Planning and Risk",Reinforcement:"Process and Sustainment"}},hm=Qe(pm,ma);function fm(t){return Ze(t,ma,hm)}function bm(t){return et(t,ma)}const xm=`{
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
      "id": "skills_learning-0",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "M Recognise that stakeholders will need appropriate knowledge, skills and learning support to operate successfully in the future state.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 0
    },
    {
      "id": "skills_learning-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "M Begin discussions with leaders, managers and stakeholders about likely learning and development needs.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 0
    },
    {
      "id": "skills_learning-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "M Gain initial agreement that learning and development activities will be required as part of the change approach.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 0
    },
    {
      "id": "skills_learning-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Explore stakeholder views on likely learning preferences, barriers and support needs to ensure inclusivity.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 0
    },
    {
      "id": "skills_learning-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "M Identify impacted stakeholder groups likely to require learning or development.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 0
    },
    {
      "id": "skills_learning-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "S Identify high-level learning risks that could affect successful implementation or adoption.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 0
    },
    {
      "id": "skills_learning-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Begin raising awareness that learning support will be provided to help stakeholders prepare for the change.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 0
    },
    {
      "id": "skills_learning-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "S Review lessons learned from previous changes relating to learning needs, training delivery and user support.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 0
    },
    {
      "id": "skills_learning-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "M Define and document the knowledge, skills and behaviours required to operate successfully in the future state.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 1
    },
    {
      "id": "skills_learning-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "M Assess current capability levels across impacted stakeholder groups.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 1
    },
    {
      "id": "skills_learning-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "M Conduct a structured learning needs and skills gap assessment.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 1
    },
    {
      "id": "skills_learning-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "M Assess the scale, complexity and impact of learning requirements across the organisation.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 1
    },
    {
      "id": "skills_learning-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Validate learning preferences, barriers and support requirements with impacted stakeholders.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 1
    },
    {
      "id": "skills_learning-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "M Develop a structured learning and capability development approach aligned to change objectives.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 1
    },
    {
      "id": "skills_learning-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "M Define learning objectives, target audiences, learning outcomes and delivery principles.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 1
    },
    {
      "id": "skills_learning-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Dependency Management",
      "action": "S Assess dependencies between learning activities and engagement and communications, readiness, process and implementation plans.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 1
    },
    {
      "id": "skills_learning-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "M Define accountability for learning design, delivery, evaluation and ongoing support.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 1
    },
    {
      "id": "skills_learning-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "M Define a training plan to include the learning methods, channels and support mechanisms that will be used to deliver learning and development activities.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 1
    },
    {
      "id": "skills_learning-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "M Develop learning materials, guidance, resources and support content.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 2
    },
    {
      "id": "skills_learning-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "M Deliver learning activities to impacted stakeholder groups.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 2
    },
    {
      "id": "skills_learning-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "M Provide role-specific learning interventions where different groups have different learning requirements.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 2
    },
    {
      "id": "skills_learning-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "M Develop and support local learning champions, coaches or trainers.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 2
    },
    {
      "id": "skills_learning-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "M Implement mechanisms to assess attendance, participation and learning completion.",
      "outcomeIds": ["SL_O2", "SL_O3"],
      "readinessScore": 2
    },
    {
      "id": "skills_learning-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Communicate learning opportunities, schedules and expectations to stakeholders.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 2
    },
    {
      "id": "skills_learning-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Dependency Management",
      "action": "S Coordinate training activities with implementation milestones and readiness requirements.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 2
    },
    {
      "id": "skills_learning-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Risk Management",
      "action": "M Identify and manage risks associated with learning delivery and learner readiness.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 2
    },
    {
      "id": "skills_learning-26",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "M Monitor learning delivery through governance and reporting processes.",
      "outcomeIds": ["SL_O2", "SL_O3"],
      "readinessScore": 2
    },
    {
      "id": "skills_learning-27",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "M Evaluate whether learning objectives have been achieved.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "skills_learning-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Testing & Validation",
      "action": "S Assess whether participants can demonstrate required knowledge and skills.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "skills_learning-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "S Track learning performance data and identify continuing capability gaps.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "skills_learning-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "S Provide refresher learning and targeted support where capability gaps remain.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "skills_learning-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "S Offer ongoing coaching and support to reinforce learning transfer.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "skills_learning-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Gather learner feedback and use to improve learning content and delivery.",
      "outcomeIds": ["SL_O2", "SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "skills_learning-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Gather feedback about learning effectiveness, confidence and practical application.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "skills_learning-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "M Review learning outcomes and capability measures through governance processes.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "skills_learning-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "S Refine learning approaches using evaluation findings and implementation experience.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "skills_learning-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Recognise achievement and application of learning within teams and stakeholder groups.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "skills_learning-37",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Share learning successes, progress and achievement milestones.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "skills_learning-38",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "S Maintain continuous learning opportunities to support evolving organisational needs.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 4
    },
    {
      "id": "skills_learning-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Measurement & Evaluation",
      "action": "S Monitor long-term capability development and learning effectiveness.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 4
    },
    {
      "id": "skills_learning-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "S Use organisational learning and insight to improve future learning approaches.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 4
    },
    {
      "id": "skills_learning-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Governance",
      "action": "M Embed learning and capability development into organisational improvement and change delivery practices.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 4
    },
    {
      "id": "skills_learning-42",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Promote a culture of continuous learning and development across the organisation.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 4
    },
    {
      "id": "skills_learning-43",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "S Recognise achievement and application of learning within teams and stakeholder groups.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "skills_learning-44",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Reinforcement",
      "action": "S Promote a culture of continuous learning and development across the organisation.",
      "outcomeIds": [],
      "readinessScore": 4
    }
  ]
}
`,ua={componentId:"skills_learning",actionPrefix:"skills-learning-action",outcomePrefix:"skills-learning:outcome",fallbackOutcomes:[{id:"skills-learning:outcome:o1",text:"Future learning and capability requirements have been identified"},{id:"skills-learning:outcome:o2",text:"Learning interventions have been designed and delivered"},{id:"skills-learning:outcome:o3",text:"Learning outcomes are achieved and sustained"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Process and Sustainment":"Skills and Behaviour",Governance:"Skills and Behaviour",Communication:"People Experience and Culture",Reinforcement:"Skills and Behaviour",Design:"Skills and Behaviour","Dependency Management":"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour","Testing and Validation":"Skills and Behaviour"}},ym=Qe(xm,ua);function vm(t){return Ze(t,ua,ym)}function Sm(t){return et(t,ua)}const wm=`{
  "component": {
    "id": "SENIOR_SPONSORSHIP_GOVERNANCE",
    "name": "Senior Sponsorship & Governance"
  },
  "actions": [
    {
      "id": "sponsorship-0",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "S Recognise the need for visible senior sponsorship and governance to support successful change delivery.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "sponsorship-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "M Begin discussions with senior leaders about their role in supporting and sponsoring the change.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "sponsorship-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Identify areas where leadership support and governance oversight may be required.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "sponsorship-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Explore stakeholder perceptions of current leadership support for change.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "sponsorship-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Secure initial leadership commitment to establish sponsorship and governance arrangements.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "sponsorship-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Begin communicating the importance of leadership visibility and sponsorship during change.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "sponsorship-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "S Review lessons learned from previous changes relating to governance and sponsorship effectiveness.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "sponsorship-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Identify potential senior leaders and sponsors who will support the change.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "sponsorship-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Confirm the Senior Responsible Owner and executive sponsors required to lead the change.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Assess sponsorship coverage requirements across impacted business areas and stakeholder groups.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Define and document sponsor roles, responsibilities and expected sponsorship behaviours (RACI)",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Develop and document governance structures, decision-making routes and escalation arrangements (RACI).",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Develop a sponsor coalition map with representation from impacted organisational areas.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Secure commitment from identified sponsors and confirm their capacity to support the change.",
      "outcomeIds": ["SSG_O1", "SSG_O2"],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "S Assess stakeholder confidence in leadership and sponsorship support for the change.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Identify gaps in sponsor visibility, influence, commitment and representation.",
      "outcomeIds": ["SSG_O1", "SSG_O2"],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Communicate confirmed sponsorship arrangements and the role sponsors will play in the change.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Plan sponsor engagement activities with impacted stakeholder groups.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Obtain formal approval of governance arrangements, accountability structures and sponsor responsibilities.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Establish governance forums with defined terms of reference and decision-making authority.",
      "outcomeIds": ["SSG_O1", "SSG_O3"],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Define and socialise escalation routes for risks, issues and decisions (RAID log).",
      "outcomeIds": ["SSG_O3"],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Training & Learning",
      "action": "S Provide sponsor coaching on sponsorship responsibilities, leadership behaviours and resistance management.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "S Develop a sponsor engagement and communication approach.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Create opportunities for sponsors to engage directly with stakeholders.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Ensure sponsors regularly communicate the purpose and importance of the change.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Establish mechanisms to gather feedback on sponsor visibility and effectiveness.",
      "outcomeIds": ["SSG_O2", "SSG_O3"],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-26",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Reinforce desired behaviours and messages via sponsors.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-27",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Address stakeholder concerns and demonstrate leadership commitment via sponsors.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Use governance forums routinely to review progress, risks, decisions and benefits.",
      "outcomeIds": ["SSG_O3"],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Monitor sponsorship effectiveness using agreed indicators and feedback.",
      "outcomeIds": ["SSG_O2", "SSG_O3"],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Review accountability and ownership to ensure responsibilities remain clear and effective (RACI).",
      "outcomeIds": ["SSG_O1", "SSG_O3"],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Risk Management",
      "action": "S Use governance to actively manage strategic risks, barriers and dependencies (RAID log).",
      "outcomeIds": ["SSG_O3"],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Ensure sponsor coalition members actively support decisions and prioritisation activities.",
      "outcomeIds": ["SSG_O2", "SSG_O3"],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Maintain visible sponsor involvement throughout implementation and adoption.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Reinforce progress, successes and key messages through operational learning.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Ensure sponsors respond visibly to stakeholder feedback and emerging concerns.",
      "outcomeIds": ["SSG_O2", "SSG_O3"],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Assess stakeholder confidence in leadership support for the change.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-38",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "M Ensure senior leaders continue to visibly champion change as part of routine leadership practice.",
      "outcomeIds": ["SSG_O2", "SSG_O3"],
      "readinessScore": 4
    },
    {
      "id": "sponsorship-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Embed sponsorship and governance practices into normal organisational management arrangements.",
      "outcomeIds": ["SSG_O3"],
      "readinessScore": 4
    },
    {
      "id": "sponsorship-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Regularly review governance effectiveness and improve decision-making processes.",
      "outcomeIds": ["SSG_O3"],
      "readinessScore": 4
    },
    {
      "id": "sponsorship-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Maintain an active sponsor coalition that supports organisational priorities and future change.",
      "outcomeIds": ["SSG_O2", "SSG_O3"],
      "readinessScore": 4
    },
    {
      "id": "sponsorship-42",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Demonstrate visible leadership commitment to continuous improvement and ongoing change adoption.",
      "outcomeIds": ["SSG_O2", "SSG_O3"],
      "readinessScore": 4
    },
    {
      "id": "sponsorship-43",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Embed sponsor visibility into organisational culture and leadership behaviours",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 4
    },
    {
      "id": "sponsorship-44",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Measure long-term stakeholder confidence in leadership support for change.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 4
    },
    {
      "id": "sponsorship-45",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Maintain regular dialogue between sponsors, leaders and stakeholder groups.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 4
    },
    {
      "id": "sponsorship-46",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Reinforce desired organisational behaviours using sponsor-led recognition.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 4
    },
    {
      "id": "sponsorship-47",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Identify high-level governance, decision-making and sponsorship risks that may affect delivery",
      "outcomeIds": [],
      "readinessScore": 0
    },
    {
      "id": "sponsorship-48",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Identify sponsorship and governance risks that could affect delivery, adoption or benefits realisation (RAID log).",
      "outcomeIds": [],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-49",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "S Assess dependencies between governance effectiveness and other change management initiatives (RAID log).",
      "outcomeIds": [],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-50",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Define measures and indicators to monitor sponsorship and governance effectiveness.",
      "outcomeIds": [],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-51",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Implement actions to address sponsorship, governance and decision-making risks.",
      "outcomeIds": [],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-52",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Monitor governance effectiveness and sponsor engagement against agreed measures.",
      "outcomeIds": [],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-53",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "S Align governance activities with implementation milestones, programme plans and change management priorities.",
      "outcomeIds": [],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-54",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Monitor readiness-related risks and implement additional mitigations where readiness concerns emerge.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-55",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Measure and address readiness gaps and residual organisational barriers affecting successful implementation.",
      "outcomeIds": [],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-56",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Monitor long-term organisational change capacity, resilience and preparedness for future transformation activity",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "sponsorship-57",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Reinforcement",
      "action": "S Embed organisational readiness assessment into standard organisational change and transformation methodologies",
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
`,ga={componentId:"sponsorship",actionPrefix:"sponsorship-action",outcomePrefix:"sponsorship:outcome",fallbackOutcomes:[{id:"sponsorship:outcome:o1",text:"Clear sponsorship and governance structures are established"},{id:"sponsorship:outcome:o2",text:"Sponsors actively lead and champion the change"},{id:"sponsorship:outcome:o3",text:"Governance and sponsorship drive successful delivery"}]},Nm=Qe(wm,ga);function jm(t){return Ze(t,ga,Nm)}function km(t){return et(t,ga)}const Cm=`{
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
      "id": "stakeholder-0",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "M Recognise the importance of stakeholder engagement and communication in achieving successful change outcomes.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 0
    },
    {
      "id": "stakeholder-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Begin discussions with leaders and teams about who may be affected by or interested in the change.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 0
    },
    {
      "id": "stakeholder-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "M Identify high-level stakeholder groups that may influence, support or be impacted by the change.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 0
    },
    {
      "id": "stakeholder-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Explore initial stakeholder perspectives, expectations and concerns relating to the change.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 0
    },
    {
      "id": "stakeholder-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Begin communicating the reason for the change and the importance of stakeholder involvement.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 0
    },
    {
      "id": "stakeholder-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Gain initial agreement that stakeholder engagement and communication activities will be required.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 0
    },
    {
      "id": "stakeholder-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Identify potential communication challenges, risks and opportunities.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 0
    },
    {
      "id": "stakeholder-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Review lessons learned from previous stakeholder engagement and communication activities.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 0
    },
    {
      "id": "stakeholder-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "M Identify and document stakeholders likely to influence, support, be affected by or be impacted by the change.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 1
    },
    {
      "id": "stakeholder-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Assess stakeholder influence, interest, commitment, capability and degree of impact.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 1
    },
    {
      "id": "stakeholder-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Segment stakeholders into defined groups with common characteristics, needs and engagement requirements.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 1
    },
    {
      "id": "stakeholder-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Conduct structured engagement activities to understand stakeholder perspectives, expectations and concerns.",
      "outcomeIds": ["SEC_O1", "SEC_O2"],
      "readinessScore": 1
    },
    {
      "id": "stakeholder-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Document stakeholder concerns, opportunities, communication preferences and support needs.",
      "outcomeIds": ["SEC_O1", "SEC_O2"],
      "readinessScore": 1
    },
    {
      "id": "stakeholder-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Develop a structured stakeholder engagement and communications approach.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 1
    },
    {
      "id": "stakeholder-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Define stakeholder engagement objectives, communication objectives and desired outcomes.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 1
    },
    {
      "id": "stakeholder-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "M Develop stakeholder-focused messages that explain the change consistently and appropriately.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 1
    },
    {
      "id": "stakeholder-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "S Assess dependencies between engagement activities and other change workstreams.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 1
    },
    {
      "id": "stakeholder-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Define sponsorship, accountability and governance arrangements for stakeholder engagement and communications.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 1
    },
    {
      "id": "stakeholder-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Implement stakeholder engagement activities using appropriate channels and methods.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 2
    },
    {
      "id": "stakeholder-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Implement targeted communications tailored to different stakeholder groups.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 2
    },
    {
      "id": "stakeholder-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Provide opportunities for stakeholders to participate, contribute and influence aspects of the change.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 2
    },
    {
      "id": "stakeholder-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Ensure communications remain timely, relevant and aligned to programme developments.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 2
    },
    {
      "id": "stakeholder-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "M Establish mechanisms for gathering stakeholder feedback and engagement insight.",
      "outcomeIds": ["SEC_O2", "SEC_O3"],
      "readinessScore": 2
    },
    {
      "id": "stakeholder-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Review stakeholder engagement progress through governance mechanisms.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 2
    },
    {
      "id": "stakeholder-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Define measures to assess communication reach, engagement levels and stakeholder understanding.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 2
    },
    {
      "id": "stakeholder-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "S Coordinate engagement activities with communications, learning, readiness and adoption activities.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 2
    },
    {
      "id": "stakeholder-26",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Develop a detailed stakeholder engagement and communications strategy and plan.",
      "outcomeIds": ["SEC_O2", "SEC_O3"],
      "readinessScore": 2
    },
    {
      "id": "stakeholder-27",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "S Equip sponsors, managers and change agents and change champions with communication materials and engagement guidance.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 2
    },
    {
      "id": "stakeholder-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "M Monitor stakeholder engagement levels, sentiment and communication effectiveness.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "stakeholder-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Respond to stakeholder concerns, questions and emerging issues in a timely manner.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "stakeholder-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Adapt communications using stakeholder feedback and implementation experience.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "stakeholder-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Use stakeholder representatives, change agents and change champions and other networks to strengthen engagement activity.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "stakeholder-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Assess stakeholder understanding, involvement and support for the change.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "stakeholder-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Review engagement effectiveness and communication performance through governance forums.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "stakeholder-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Use feedback to refine engagement and communication approaches using evidence, insight and lessons learned.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "stakeholder-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "S Align engagement activities with implementation, adoption and readiness priorities.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "stakeholder-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Use engagement and communication metrics to inform planning and decision-making.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "stakeholder-37",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "S Promote key successes, achievements and progress through communication channels.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "stakeholder-38",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Maintain continuous engagement with stakeholders beyond implementation.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 4
    },
    {
      "id": "stakeholder-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Ensure communications continue to support adoption, optimisation and continuous improvement.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 4
    },
    {
      "id": "stakeholder-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Measure long-term stakeholder confidence, advocacy and engagement.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 4
    },
    {
      "id": "stakeholder-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "M Embed effective engagement and communication practices into organisational change standards.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 4
    },
    {
      "id": "stakeholder-42",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Use organisational learning to continuously improve engagement and communication approaches.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 4
    },
    {
      "id": "stakeholder-43",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "M Engagement and communication strategy and plans to be approved and shared across the organisation",
      "outcomeIds": [],
      "readinessScore": 2
    },
    {
      "id": "stakeholder-44",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Identify potential change network members to support engagement and communication activities",
      "outcomeIds": [],
      "readinessScore": 1
    },
    {
      "id": "stakeholder-45",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Change Network continues to act as a 2-way conduit between the programme and stakeholders and monitors engagement impact and effectiveness",
      "outcomeIds": [],
      "readinessScore": 4
    },
    {
      "id": "stakeholder-46",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Share success stories around the change and adoption to inspire others",
      "outcomeIds": [],
      "readinessScore": 4
    }
  ]
}
`,pa={componentId:"stakeholder",actionPrefix:"stakeholder-action",outcomePrefix:"stakeholder:outcome",fallbackOutcomes:[{id:"stakeholder:outcome:o1",text:"Stakeholders have been identified, analysed and prioritised"},{id:"stakeholder:outcome:o2",text:"Stakeholders are actively engaged and informed"},{id:"stakeholder:outcome:o3",text:"Engagement and communications support successful adoption"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Reinforcement:"People Experience and Culture"}},Em=Qe(Cm,pa);function Im(t){return Ze(t,pa,Em)}function Am(t){return et(t,pa)}const Om=`{
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
      "id": "transfer_bau-0",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Recognise that ownership of the change will need to transfer from the programme into business-as-usual operations.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 0
    },
    {
      "id": "transfer_bau-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "M Begin discussions with operational leaders regarding future ownership and sustainment responsibilities.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 0
    },
    {
      "id": "transfer_bau-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Identify areas of the change that will require ongoing operational management after implementation.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 0
    },
    {
      "id": "transfer_bau-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Explore operational stakeholder views regarding long-term ownership and support requirements.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 0
    },
    {
      "id": "transfer_bau-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Secure initial agreement that transition-to-BAU planning should form part of the change approach.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 0
    },
    {
      "id": "transfer_bau-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "M Begin raising awareness of future operational ownership and sustainment expectations.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 0
    },
    {
      "id": "transfer_bau-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Identify potential capability, resource and support requirements needed after programme closure.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 0
    },
    {
      "id": "transfer_bau-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "S Review lessons learned from previous transitions to business-as-usual arrangements.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 0
    },
    {
      "id": "transfer_bau-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Identify potential future operational owners for the change, associated processes and ongoing outcomes.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 1
    },
    {
      "id": "transfer_bau-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Document activities, responsibilities, controls and measures requiring transition into business-as-usual management.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 1
    },
    {
      "id": "transfer_bau-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Assess operational readiness and capability to assume ownership of the change.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 1
    },
    {
      "id": "transfer_bau-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "S Assess dependencies, assumptions and constraints that could affect transition to BAU.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 1
    },
    {
      "id": "transfer_bau-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "M Develop a structured transition and BAU transfer approach.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 1
    },
    {
      "id": "transfer_bau-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "M Engage potential operational owners to validate expectations, responsibilities and support requirements.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 1
    },
    {
      "id": "transfer_bau-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "S Assess capability, resource, knowledge and support gaps affecting transition readiness.",
      "outcomeIds": ["BAU_O1", "BAU_O2"],
      "readinessScore": 1
    },
    {
      "id": "transfer_bau-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "S Communicate proposed ownership, accountability and sustainment expectations.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 1
    },
    {
      "id": "transfer_bau-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Design future governance arrangements for post-implementation operational management.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 1
    },
    {
      "id": "transfer_bau-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "M Define operational measures, performance indicators and reporting requirements for post-transition management.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 1
    },
    {
      "id": "transfer_bau-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Formally assign ownership for processes, benefits, measures and sustainment activities.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 2
    },
    {
      "id": "transfer_bau-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "M Develop a detailed transition-to-BAU plan.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 2
    },
    {
      "id": "transfer_bau-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "M Plan completion of outstanding dependencies required for transition.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 2
    },
    {
      "id": "transfer_bau-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Risk Management",
      "action": "M Identify and manage risks associated with operational handover and programme closure.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 2
    },
    {
      "id": "transfer_bau-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Define exit criteria and readiness criteria for transition to BAU.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 2
    },
    {
      "id": "transfer_bau-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Training & Learning",
      "action": "M Prepare operational teams to manage and support the change without programme intervention.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 2
    },
    {
      "id": "transfer_bau-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Training & Learning",
      "action": "M Transfer operational knowledge, guidance and support resources to BAU teams.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 2
    },
    {
      "id": "transfer_bau-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Implementation",
      "action": "M Integrate new processes, measures and responsibilities into operational procedures.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 2
    },
    {
      "id": "transfer_bau-26",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "S Validate that operational teams can manage and support the change independently.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 2
    },
    {
      "id": "transfer_bau-27",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Review transition progress through governance and assurance processes.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 2
    },
    {
      "id": "transfer_bau-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Transfer operational governance responsibilities from programme structures to BAU structures.",
      "outcomeIds": ["BAU_O2", "BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "transfer_bau-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Implementation",
      "action": "M Complete formal handover of ownership, controls and reporting arrangements.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "transfer_bau-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "S Monitor operational ownership and effectiveness following handover.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "transfer_bau-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Risk Management",
      "action": "S Monitor transition risks and address issues emerging after handover.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "transfer_bau-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Gather feedback from operational owners regarding transition effectiveness.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "transfer_bau-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Implementation",
      "action": "M Operate new governance, support and reporting arrangements through BAU structures.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "transfer_bau-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "M Review benefits, adoption and performance measures under operational ownership.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "transfer_bau-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "S Refine BAU operating arrangements using post-handover experience.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "transfer_bau-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "M Close, transfer or manage remaining programme dependencies.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "transfer_bau-37",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "S Support operational leaders in sustaining desired behaviours and outcomes.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "transfer_bau-38",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Embed ownership of change outcomes within routine operational governance.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 4
    },
    {
      "id": "transfer_bau-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Implementation",
      "action": "M Ensure the change is managed entirely through business-as-usual operational processes.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 4
    },
    {
      "id": "transfer_bau-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "S Monitor long-term operational performance, benefits and sustainment outcomes.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 4
    },
    {
      "id": "transfer_bau-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "S Use operational learning to improve future transition-to-BAU approaches.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 4
    },
    {
      "id": "transfer_bau-42",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "S Promote a culture where change ownership naturally transitions into operational management.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 4
    }
  ]
}
`,ha={componentId:"transfer_bau",actionPrefix:"transfer-bau-action",outcomePrefix:"transfer-bau:outcome",fallbackOutcomes:[{id:"transfer-bau:outcome:o1",text:"Operational ownership and accountability have been established"},{id:"transfer-bau:outcome:o2",text:"Business-as-usual capabilities and support arrangements are in place"},{id:"transfer-bau:outcome:o3",text:"The change is fully embedded within normal operational management"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Process and Sustainment":"Process and Sustainment","Planning and Risk":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Skills and Behaviour":"Process and Sustainment",Governance:"Strategic Direction and Leadership","Measurement and Evaluation":"Process and Sustainment",Implementation:"Process and Sustainment","Risk Management":"Process and Sustainment",Design:"Process and Sustainment","Dependency Management":"Process and Sustainment",Reinforcement:"Process and Sustainment"}},Rm=Qe(Om,ha);function _m(t){return Ze(t,ha,Rm)}function Dm(t){return et(t,ha)}const Pm=`{
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
      "id": "vision-0",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Gather information on organisational priorities, programme objectives and expected outcomes to inform vision development.",
      "outcomeIds": ["VISION_O1"],
      "readinessScore": 0
    },
    {
      "id": "vision-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Identify key leaders who need to contribute to and endorse the vision.",
      "outcomeIds": ["VISION_O1", "VISION_O3"],
      "readinessScore": 0
    },
    {
      "id": "vision-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "S Facilitate an initial vision workshop with the SRO, sponsors and key programme stakeholders to explore the future state.",
      "outcomeIds": ["VISION_O1"],
      "readinessScore": 0
    },
    {
      "id": "vision-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Document initial themes describing why the change is needed and what success may look like.",
      "outcomeIds": ["VISION_O1", "VISION_O2"],
      "readinessScore": 0
    },
    {
      "id": "vision-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Establish a process and timeline for drafting the vision statement.",
      "outcomeIds": ["VISION_O1"],
      "readinessScore": 0
    },
    {
      "id": "vision-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "C Create simple awareness messages explaining that a vision is being developed.",
      "outcomeIds": ["VISION_O2"],
      "readinessScore": 0
    },
    {
      "id": "vision-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Identify key stakeholder groups that need to be involved in early vision discussions.",
      "outcomeIds": ["VISION_O1", "VISION_O2"],
      "readinessScore": 0
    },
    {
      "id": "vision-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Conduct stakeholder listening sessions to understand current challenges and expectations.",
      "outcomeIds": ["VISION_O1", "VISION_O2"],
      "readinessScore": 0
    },
    {
      "id": "vision-8",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Gather feedback on stakeholders' perceptions of the proposed change.",
      "outcomeIds": ["VISION_O1", "VISION_O2"],
      "readinessScore": 0
    },
    {
      "id": "vision-9",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Identify common concerns, aspirations and opportunities that should influence the vision.",
      "outcomeIds": ["VISION_O1"],
      "readinessScore": 0
    },
    {
      "id": "vision-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Draft a formal vision statement describing the future state and intended outcomes.",
      "outcomeIds": ["VISION_O1"],
      "readinessScore": 1
    },
    {
      "id": "vision-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Testing & Validation",
      "action": "M Test the draft vision with senior leaders to ensure strategic alignment.",
      "outcomeIds": ["VISION_O1", "VISION_O3"],
      "readinessScore": 1
    },
    {
      "id": "vision-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Refine the vision using feedback from sponsors and governance groups.",
      "outcomeIds": ["VISION_O1", "VISION_O3"],
      "readinessScore": 1
    },
    {
      "id": "vision-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Testing & Validation",
      "action": "S Validate how the vision aligns with organisational objectives and programme benefits.",
      "outcomeIds": ["VISION_O1"],
      "readinessScore": 1
    },
    {
      "id": "vision-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Develop a high-level vision narrative that can be used consistently across the programme.",
      "outcomeIds": ["VISION_O2", "VISION_O3"],
      "readinessScore": 1
    },
    {
      "id": "vision-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Run workshops with stakeholder groups to test understanding of the draft vision.",
      "outcomeIds": ["VISION_O2"],
      "readinessScore": 1
    },
    {
      "id": "vision-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Collect structured feedback on whether the vision feels relevant and meaningful.",
      "outcomeIds": ["VISION_O1", "VISION_O2"],
      "readinessScore": 1
    },
    {
      "id": "vision-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Identify gaps or ambiguities in the vision from a stakeholder perspective.",
      "outcomeIds": ["VISION_O1", "VISION_O2"],
      "readinessScore": 1
    },
    {
      "id": "vision-18",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Design",
      "action": "S Update the vision to reflect stakeholder insights and concerns.",
      "outcomeIds": ["VISION_O1", "VISION_O2"],
      "readinessScore": 1
    },
    {
      "id": "vision-19",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Begin developing people-centred messaging explaining why the vision matters to different stakeholder groups.",
      "outcomeIds": ["VISION_O2"],
      "readinessScore": 1
    },
    {
      "id": "vision-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Secure formal approval of the vision through programme governance.",
      "outcomeIds": ["VISION_O1", "VISION_O3"],
      "readinessScore": 2
    },
    {
      "id": "vision-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Develop a leadership communication plan to support vision rollout.",
      "outcomeIds": ["VISION_O2", "VISION_O3"],
      "readinessScore": 2
    },
    {
      "id": "vision-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "M Equip sponsors with key messages, presentations and briefing materials.",
      "outcomeIds": ["VISION_O2", "VISION_O3"],
      "readinessScore": 2
    },
    {
      "id": "vision-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Integrate the vision into programme governance documentation and reporting.",
      "outcomeIds": ["VISION_O3"],
      "readinessScore": 2
    },
    {
      "id": "vision-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "M Ensure leadership communications consistently reference the agreed vision.",
      "outcomeIds": ["VISION_O2", "VISION_O3"],
      "readinessScore": 2
    },
    {
      "id": "vision-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Develop audience-specific communications describing the purpose, value and future-state ambition of the vision.",
      "outcomeIds": ["VISION_O2"],
      "readinessScore": 2
    },
    {
      "id": "vision-26",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Deliver engagement sessions to build understanding and awareness of the vision.",
      "outcomeIds": ["VISION_O2"],
      "readinessScore": 2
    },
    {
      "id": "vision-27",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "M Establish feedback channels to assess comprehension and acceptance of the vision.",
      "outcomeIds": ["VISION_O2"],
      "readinessScore": 2
    },
    {
      "id": "vision-28",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Use change agents and sponsors to reinforce the vision locally.",
      "outcomeIds": ["VISION_O2", "VISION_O3"],
      "readinessScore": 2
    },
    {
      "id": "vision-29",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "M Monitor stakeholder understanding through surveys, workshops or feedback sessions.",
      "outcomeIds": ["VISION_O2"],
      "readinessScore": 2
    },
    {
      "id": "vision-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "S Ensure sponsors consistently communicate the vision during governance and operational meetings.",
      "outcomeIds": ["VISION_O2", "VISION_O3"],
      "readinessScore": 3
    },
    {
      "id": "vision-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Embed the vision into organisational planning, governance and decision-making processes.",
      "outcomeIds": ["VISION_O3"],
      "readinessScore": 3
    },
    {
      "id": "vision-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Review leadership communications regularly for alignment and consistency.",
      "outcomeIds": ["VISION_O2", "VISION_O3"],
      "readinessScore": 3
    },
    {
      "id": "vision-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Monitor leadership engagement in promoting the vision.",
      "outcomeIds": ["VISION_O3"],
      "readinessScore": 3
    },
    {
      "id": "vision-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Deploy a formal vision communication campaign across all stakeholder groups.",
      "outcomeIds": ["VISION_O2", "VISION_O3"],
      "readinessScore": 3
    },
    {
      "id": "vision-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Establish regular feedback loops to assess understanding and engagement with the vision.",
      "outcomeIds": ["VISION_O2"],
      "readinessScore": 3
    },
    {
      "id": "vision-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Monitor stakeholder awareness and adjust communications where necessary.",
      "outcomeIds": ["VISION_O2"],
      "readinessScore": 3
    },
    {
      "id": "vision-37",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Use case studies and practical examples to demonstrate the vision in action.",
      "outcomeIds": ["VISION_O2", "VISION_O3"],
      "readinessScore": 3
    },
    {
      "id": "vision-38",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Reinforce the vision through team meetings, departmental briefings and change network activities.",
      "outcomeIds": ["VISION_O2", "VISION_O3"],
      "readinessScore": 3
    },
    {
      "id": "vision-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "S Ensure leaders consistently reference the vision during planning, governance and decision-making processes",
      "outcomeIds": ["VISION_O3"],
      "readinessScore": 4
    },
    {
      "id": "vision-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "M Review organisational priorities regularly to ensure continued alignment with the vision.",
      "outcomeIds": ["VISION_O1", "VISION_O3"],
      "readinessScore": 4
    },
    {
      "id": "vision-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Use adoption and performance data to refine and strengthen how the vision is communicated.",
      "outcomeIds": ["VISION_O2", "VISION_O3"],
      "readinessScore": 4
    },
    {
      "id": "vision-42",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Establish mechanisms to continuously evaluate whether organisational behaviours remain aligned to the vision.",
      "outcomeIds": ["VISION_O3"],
      "readinessScore": 4
    },
    {
      "id": "vision-43",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Measure how well staff understand and can articulate the vision.",
      "outcomeIds": ["VISION_O2"],
      "readinessScore": 4
    },
    {
      "id": "vision-44",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Capture and share success stories demonstrating delivery of the vision.",
      "outcomeIds": ["VISION_O2", "VISION_O3"],
      "readinessScore": 4
    },
    {
      "id": "vision-45",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Encourage teams to identify local improvements that support achievement of the vision.",
      "outcomeIds": ["VISION_O3"],
      "readinessScore": 4
    },
    {
      "id": "vision-46",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Maintain continuous engagement and listening activities to keep the vision relevant.",
      "outcomeIds": ["VISION_O1", "VISION_O2"],
      "readinessScore": 4
    },
    {
      "id": "vision-47",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Reinforce the vision through recognition programmes and celebration of achievements.",
      "outcomeIds": ["VISION_O2", "VISION_O3"],
      "readinessScore": 4
    },
    {
      "id": "vision-48",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Ensure the vision becomes part of everyday conversations, team objectives and organisational culture.",
      "outcomeIds": ["VISION_O2", "VISION_O3"],
      "readinessScore": 4
    }
  ]
}
`,fa={componentId:"vision",actionPrefix:"vision-action",outcomePrefix:"vision:outcome",fallbackOutcomes:[{id:"vision:outcome:o1",text:"A compelling future state has been defined"},{id:"vision:outcome:o2",text:"The vision is shared and understood"},{id:"vision:outcome:o3",text:"The vision is visible and guides the change"}]},$m=Qe(Pm,fa);function Tm(t){return Ze(t,fa,$m)}function Lm(t){return et(t,fa)}function Ot(t){return tm(_m(zd(lm(am(kd(Dd(vm(um(Im(Vd(fm(Gd(Ld(Sd(jm(Ad(Tm(t))))))))))))))))))}function Mm(t){return Dm(Jd(cm(im(Cd(Pd(Sm(gm(Am(qd(bm(Ud(Md(wd(km(Od(Lm(t)))))))))))))))))}function Bm(t,n){return n==="pathway-1"?Ot(t):Mm(t)}function On({selects:t,search:n,onReset:s,darkMode:a=!1}){const i=`block text-xs font-medium mb-1 ${a?"text-slate-400":"text-slate-500"}`,l=`text-sm rounded-md border px-2 py-1.5 ${a?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-700"}`;return e.jsxs("div",{className:`flex flex-wrap items-end gap-3 rounded-md border p-3 mb-3 ${a?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[n?e.jsxs("div",{children:[e.jsx("label",{htmlFor:"filter-bar-search",className:i,children:n.label}),e.jsx("input",{id:"filter-bar-search",type:"text",value:n.value,placeholder:n.placeholder,onChange:o=>n.onChange(o.target.value),className:l})]}):null,t.map(o=>e.jsxs("div",{children:[e.jsx("label",{htmlFor:`filter-bar-${o.key}`,className:i,children:o.label}),e.jsxs("select",{id:`filter-bar-${o.key}`,value:o.value,onChange:c=>o.onChange(c.target.value),className:l,children:[e.jsx("option",{value:"",children:"All"}),o.options.map(c=>e.jsx("option",{value:c,children:c},c))]})]},o.key)),s?e.jsx("button",{type:"button",onClick:s,className:`text-sm px-3 py-1.5 rounded-md font-medium ${a?"text-slate-300 hover:bg-slate-800":"text-slate-600 hover:bg-slate-100"}`,children:"Reset filters"}):null]})}function dn(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.75,d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125"})})}function mn(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m3 0-.867 12.142A2 2 0 0115.138 21H8.862a2 2 0 01-1.995-1.858L6 7h12z"})})}function Fm(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V5a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 01-1 1h-2M8 7H6a1 1 0 00-1 1v10a1 1 0 001 1h9a1 1 0 001-1v-2M8 7h7a1 1 0 011 1v7"})})}function Gm(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v8m-4-4h8m6 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}function Um(){return e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v2"})})}function lt({onClick:t,title:n,children:s,variant:a="neutral",darkMode:i=!1,disabled:l=!1}){const o="inline-flex h-8 w-8 items-center justify-center rounded-md border disabled:opacity-40 disabled:cursor-not-allowed",c=i?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100",m=i?"border-red-500/40 bg-slate-800 text-red-400 hover:bg-red-500/10":"border-red-200 bg-white text-red-600 hover:bg-red-50";return e.jsx("button",{type:"button",onClick:t,title:n,"aria-label":n,disabled:l,className:`${o} ${a==="danger"?m:c}`,children:s})}function is(t,n){return t>=n.blue?"blue":t>=n.green?"green":t>=n.amber?"amber":"red"}function En(t){switch(t){case"blue":return"bg-blue-100 text-blue-800 border-blue-300";case"green":return"bg-green-100 text-green-800 border-green-300";case"amber":return"bg-amber-100 text-amber-800 border-amber-300";case"red":return"bg-red-100 text-red-800 border-red-300"}}const Hm=["Finance","HR","IT & Digital","Operations","Clinical","Estates & Facilities","Procurement","Communications","Other"],sn={complexity:[{value:1,label:"1 - Simple, generalist activity"},{value:2,label:"2 - Simple, specialist activity"},{value:3,label:"3 - Complex, generalist activity"},{value:4,label:"4 - Highly complex, specialist activity"}],frequency:[{value:1,label:"1 - Once a month or less"},{value:2,label:"2 - Once a week or less"},{value:3,label:"3 - Once a day or less"},{value:4,label:"4 - Constantly"}],distance:[{value:1,label:"1 - Same or very similar to current"},{value:2,label:"2 - Less than 20% change"},{value:3,label:"3 - Less than 50% change"},{value:4,label:"4 - More than 80% change"}],attitude:[{value:1,label:"1 - Resistant to change"},{value:2,label:"2 - Resistant but can be convinced"},{value:3,label:"3 - Positive but needs clear benefits"},{value:4,label:"4 - Very positive (Pull not Push)"}],conditions:[{value:1,label:"1 - Conditions not conducive"},{value:2,label:"2 - >2 minor or 1 major change affecting"},{value:3,label:"3 - No more than 2 minor changes"},{value:4,label:"4 - Nothing to divert attention"}],resources:[{value:1,label:"1 - Challenges prevent implementation"},{value:2,label:"2 - Resource challenges likely to impact"},{value:3,label:"3 - Sufficient to support change"},{value:4,label:"4 - Fully resourced"}],network:[{value:1,label:"1 - Not resourced"},{value:2,label:"2 - Champions but not Agents"},{value:3,label:"3 - Agents but not Champions"},{value:4,label:"4 - Fully resourced and active"}],capability:[{value:1,label:"1 - Unaware of new ways of working"},{value:2,label:"2 - Awareness of new ways working"},{value:3,label:"3 - Acquired knowledge/skills (Training)"},{value:4,label:"4 - Confidence in using skills (Practice)"}]},xi="nhs-change-impact-assessment",$s={id:null,function:"",process:"",processRef:"",processRefUrl:"",benefitsRef:"",benefitId:void 0,peopleImpacted:0,impactDate:"",complexity:1,frequency:1,distance:1,attitude:2,conditions:2,resources:2,network:1,capability:1},yi=[{id:"demo1",function:"Finance",process:"Year End Close",processRef:"FIN-001",benefitsRef:"BEN-02",peopleImpacted:15,impactDate:"2026-03-15",timestamp:"",complexity:4,frequency:1,distance:3,attitude:3,conditions:3,resources:2,network:3,capability:2},{id:"demo2",function:"Finance",process:"Invoice Processing",processRef:"FIN-002",benefitsRef:"BEN-05",peopleImpacted:8,impactDate:"2026-04-01",timestamp:"",complexity:2,frequency:4,distance:4,attitude:2,conditions:2,resources:3,network:2,capability:2},{id:"demo3",function:"HR",process:"New Onboarding Flow",processRef:"HR-101",benefitsRef:"BEN-10",peopleImpacted:50,impactDate:"2026-06-01",timestamp:"",complexity:2,frequency:2,distance:3,attitude:4,conditions:4,resources:4,network:4,capability:4},{id:"demo4",function:"HR",process:"Payroll Migration",processRef:"HR-200",benefitsRef:"BEN-11",peopleImpacted:120,impactDate:"2026-01-25",timestamp:"",complexity:4,frequency:3,distance:4,attitude:1,conditions:2,resources:1,network:1,capability:1},{id:"demo5",function:"IT",process:"Security Patch 4.0",processRef:"IT-900",benefitsRef:"BEN-20",peopleImpacted:200,impactDate:"2026-02-15",timestamp:"",complexity:3,frequency:1,distance:2,attitude:3,conditions:4,resources:4,network:3,capability:2},{id:"demo6",function:"IT",process:"Helpdesk Ticketing",processRef:"IT-950",benefitsRef:"BEN-22",peopleImpacted:25,impactDate:"2026-05-10",timestamp:"",complexity:2,frequency:4,distance:3,attitude:2,conditions:3,resources:3,network:2,capability:2},{id:"demo7",function:"Operations",process:"Shift Scheduling",processRef:"OPS-300",benefitsRef:"BEN-30",peopleImpacted:300,impactDate:"2026-04-20",timestamp:"",complexity:3,frequency:2,distance:4,attitude:1,conditions:1,resources:2,network:2,capability:1},{id:"demo8",function:"Operations",process:"Inventory Audit",processRef:"OPS-400",benefitsRef:"BEN-35",peopleImpacted:40,impactDate:"2026-11-05",timestamp:"",complexity:2,frequency:1,distance:1,attitude:4,conditions:4,resources:4,network:3,capability:3},{id:"demo9",function:"Marketing",process:"Rebrand Launch",processRef:"MKT-500",benefitsRef:"BEN-40",peopleImpacted:12,impactDate:"2026-09-01",timestamp:"",complexity:4,frequency:1,distance:3,attitude:4,conditions:2,resources:3,network:4,capability:3},{id:"demo10",function:"Sales",process:"CRM Upgrade",processRef:"SLS-600",benefitsRef:"BEN-45",peopleImpacted:60,impactDate:"2026-07-15",timestamp:"",complexity:3,frequency:4,distance:2,attitude:2,conditions:3,resources:2,network:2,capability:2},{id:"demo11",function:"Compliance",process:"GDPR Audit",processRef:"COM-700",benefitsRef:"BEN-50",peopleImpacted:5,impactDate:"2026-05-20",timestamp:"",complexity:3,frequency:1,distance:2,attitude:3,conditions:4,resources:3,network:4,capability:3},{id:"demo12",function:"Legal",process:"Contract Review Sys",processRef:"LEG-800",benefitsRef:"BEN-55",peopleImpacted:10,impactDate:"2026-08-10",timestamp:"",complexity:2,frequency:3,distance:3,attitude:2,conditions:3,resources:2,network:1,capability:2},{id:"demo13",function:"HR",process:"Performance Review",processRef:"HR-150",benefitsRef:"BEN-12",peopleImpacted:150,impactDate:"2026-11-01",timestamp:"",complexity:2,frequency:1,distance:2,attitude:3,conditions:3,resources:3,network:3,capability:3},{id:"demo14",function:"Operations",process:"Fleet Maintenance",processRef:"OPS-450",benefitsRef:"BEN-32",peopleImpacted:20,impactDate:"2026-06-15",timestamp:"",complexity:3,frequency:2,distance:2,attitude:4,conditions:4,resources:4,network:4,capability:4},{id:"demo15",function:"Finance",process:"Budget Planning",processRef:"FIN-005",benefitsRef:"BEN-03",peopleImpacted:10,impactDate:"2026-10-01",timestamp:"",complexity:4,frequency:1,distance:2,attitude:2,conditions:1,resources:2,network:2,capability:2},{id:"demo16",function:"IT",process:"Cloud Migration",processRef:"IT-990",benefitsRef:"BEN-25",peopleImpacted:15,impactDate:"2026-12-01",timestamp:"",complexity:4,frequency:4,distance:4,attitude:3,conditions:2,resources:3,network:3,capability:2}];function Rt(t){const s=(t.complexity+t.frequency+2*t.distance)/16*100,i=(t.attitude+t.conditions+t.resources+t.network+t.capability)/20*100;return{changeScore:s,readinessScore:i}}function vi(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function Si({score:t,type:n}){let s="bg-slate-100 text-slate-800 border-slate-200";return n==="change"?t>=70?s="bg-red-100 text-red-800 border-red-200":t>=40?s="bg-amber-100 text-amber-800 border-amber-200":s="bg-green-100 text-green-800 border-green-200":t>=70?s="bg-green-100 text-green-800 border-green-200":t>=40?s="bg-amber-100 text-amber-800 border-amber-200":s="bg-red-100 text-red-800 border-red-200",e.jsxs("span",{className:`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${s}`,children:[t.toFixed(0),"%"]})}function Wm({items:t,formData:n,showForm:s,onShowFormChange:a,onFormDataChange:i,onSave:l,onEdit:o,onDelete:c,onImportClick:m,onImportFile:u,onExport:r,onLoadDemo:h,fileInputRef:x,benefits:p,onNavigateToBenefit:b}){const[C,w]=d.useState(null),[g,k]=d.useState("ascending"),[$,G]=d.useState(""),[f,v]=d.useState(""),O=M=>{C===M&&g==="ascending"?k("descending"):(w(M),k("ascending"))},E=d.useMemo(()=>{let M=[...t];return $&&(M=M.filter(J=>J.function===$)),f&&(M=M.filter(J=>J.process===f)),C&&M.sort((J,Ee)=>{let q,re;return C==="changeScore"||C==="readinessScore"?(q=Rt(J)[C],re=Rt(Ee)[C]):(q=J[C],re=Ee[C]),typeof q=="string"&&(q=q.toLowerCase()),typeof re=="string"&&(re=re.toLowerCase()),q<re?g==="ascending"?-1:1:q>re?g==="ascending"?1:-1:0}),M},[t,C,g,$,f]),B=d.useMemo(()=>{const M=E.length,J={};if(M===0)return J;const Ee=M>2?Math.min(Math.max(Math.ceil(M*.1),5),Math.floor(M/2)):0,q=[...E].sort((j,Z)=>Z.peopleImpacted-j.peopleImpacted),re=new Set(q.slice(0,Ee).map(j=>j.id)),ce=new Set(q.slice(M-Ee).map(j=>j.id));return E.forEach(j=>{J[j.id]=re.has(j.id)?"red":ce.has(j.id)?"green":"amber"}),J},[E]),Y=d.useMemo(()=>Array.from(new Set(t.map(M=>M.function))).filter(Boolean).sort(),[t]),se=d.useMemo(()=>Array.from(new Set([...Hm,...Y])),[Y]),me=d.useMemo(()=>Array.from(new Set(t.map(M=>M.process))).filter(Boolean).sort(),[t]),A=M=>C!==M?"":g==="ascending"?" ▲":" ▼",pe=[{key:"function",label:"Function"},{key:"process",label:"Process"},{key:"processRef",label:"Ref #"},{key:"benefitsRef",label:"Ben #"},{key:"peopleImpacted",label:"# Impacted"},{key:"impactDate",label:"Date"},{key:"changeScore",label:"Change Score",center:!0},{key:"readinessScore",label:"Readiness Score",center:!0}];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-800",children:"Detailed Impact Assessments"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("input",{ref:x,type:"file",onChange:u,accept:".csv",className:"hidden"}),e.jsx("button",{type:"button",onClick:h,className:"text-sm text-slate-500 hover:text-blue-600 px-3 py-2",children:"Load Demo Data"}),e.jsx("button",{type:"button",onClick:m,className:We,children:"Import CSV"}),e.jsx("button",{type:"button",onClick:r,disabled:!t.length,className:`${We} disabled:opacity-50 disabled:cursor-not-allowed`,children:"Export CSV"}),e.jsx("button",{type:"button",onClick:()=>{i($s),a(!s)},className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700",children:s?"Cancel":"+ New Assessment"})]})]}),s?e.jsxs("div",{className:"rounded-lg border border-blue-100 bg-blue-50 p-6",children:[e.jsx("h3",{className:"text-lg font-medium text-blue-900 mb-4",children:n.id?"Edit Assessment":"New Assessment"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-semibold text-blue-800 border-b border-blue-200 pb-1",children:"1. Process Details"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cia-function",className:"block text-sm font-medium text-slate-700 mb-1",children:"Business Function"}),e.jsxs("select",{id:"cia-function",value:n.function,onChange:M=>i({function:M.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none",children:[e.jsx("option",{value:"",children:"Select a function..."}),se.map(M=>e.jsx("option",{value:M,children:M},M))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Process Name"}),e.jsx("input",{type:"text",placeholder:"e.g. Payroll Run",value:n.process,onChange:M=>i({process:M.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:["Process Ref #"," ",e.jsx("span",{className:"text-xs text-slate-400 font-normal",children:"(Optional)"})]}),e.jsx("input",{type:"text",placeholder:"e.g. P-101",value:n.processRef,onChange:M=>i({processRef:M.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none"}),e.jsx("input",{type:"url",placeholder:"Link URL (optional)",value:n.processRefUrl||"",onChange:M=>i({processRefUrl:M.target.value}),className:"w-full mt-1 p-2 border border-slate-300 rounded outline-none text-xs"})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"assessment-linked-benefit",className:"block text-sm font-medium text-slate-700 mb-1",children:["Linked Benefit"," ",e.jsx("span",{className:"text-xs text-slate-400 font-normal",children:"(Optional)"})]}),e.jsxs("select",{id:"assessment-linked-benefit",value:n.benefitId||"",onChange:M=>{const J=p.find(Ee=>Ee.id===M.target.value);i({benefitId:J==null?void 0:J.id,benefitsRef:(J==null?void 0:J.benefitNo)||""})},className:"w-full p-2 border border-slate-300 rounded outline-none",children:[e.jsx("option",{value:"",children:"None"}),p.map(M=>e.jsxs("option",{value:M.id,children:[M.benefitNo," — ",M.title||"(untitled benefit)"]},M.id))]}),p.length===0?e.jsx("p",{className:"mt-1 text-xs text-slate-400",children:"No benefits in the register yet - add one in the Benefits tool first."}):null]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"# Impacted"}),e.jsx("input",{type:"number",value:n.peopleImpacted,onChange:M=>i({peopleImpacted:Number(M.target.value)}),className:"w-full p-2 border border-slate-300 rounded outline-none"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Impact Date"}),e.jsx("input",{type:"date",value:n.impactDate,onChange:M=>i({impactDate:M.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-semibold text-blue-800 border-b border-blue-200 pb-1",children:"2. Change Impact"}),["complexity","frequency","distance"].map(M=>e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1 capitalize",children:M==="distance"?"Distance (x2 Weight)":M}),e.jsx("select",{value:n[M],onChange:J=>i({[M]:Number(J.target.value)}),className:"w-full p-2 border border-slate-300 rounded outline-none text-sm",children:sn[M].map(J=>e.jsx("option",{value:J.value,children:J.label},J.value))})]},M))]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-semibold text-blue-800 border-b border-blue-200 pb-1",children:"3. Business Readiness"}),["attitude","conditions"].map(M=>e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1 capitalize",children:M}),e.jsx("select",{value:n[M],onChange:J=>i({[M]:Number(J.target.value)}),className:"w-full p-2 border border-slate-300 rounded outline-none text-sm",children:sn[M].map(J=>e.jsx("option",{value:J.value,children:J.label},J.value))})]},M)),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:["resources","network"].map(M=>e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1 capitalize",children:M}),e.jsx("select",{value:n[M],onChange:J=>i({[M]:Number(J.target.value)}),className:"w-full p-2 border border-slate-300 rounded outline-none text-sm",children:sn[M].map(J=>e.jsx("option",{value:J.value,children:J.label},J.value))})]},M))}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Capability (ADKAR)"}),e.jsx("select",{value:n.capability,onChange:M=>i({capability:Number(M.target.value)}),className:"w-full p-2 border border-slate-300 rounded outline-none text-sm",children:sn.capability.map(M=>e.jsx("option",{value:M.value,children:M.label},M.value))})]})]})]}),e.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[e.jsx("button",{type:"button",onClick:()=>a(!1),className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200",children:"Cancel"}),e.jsx("button",{type:"button",onClick:l,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700",children:"Save Assessment"})]})]}):null,e.jsx(On,{selects:[{key:"function",label:"Function",value:$,options:Y,onChange:G},{key:"process",label:"Process",value:f,options:me,onChange:v}],onReset:()=>{G(""),v("")}}),e.jsx("div",{className:"overflow-x-auto rounded-lg border border-slate-200 bg-white",children:e.jsxs("table",{className:"min-w-full text-sm text-left border-collapse",children:[e.jsx("thead",{className:"bg-slate-50 text-slate-600 font-medium border-b border-slate-200",children:e.jsxs("tr",{children:[pe.map(M=>e.jsxs("th",{onClick:()=>O(M.key),className:`px-4 py-3 cursor-pointer hover:bg-slate-100 ${M.center?"text-center":""}`,children:[M.label,A(M.key)]},M.key)),e.jsx("th",{className:"px-4 py-3 text-right",children:"Actions"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:E.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:9,className:"px-4 py-8 text-center text-slate-500 italic",children:t.length===0?'No assessments added yet. Click "New Assessment" to begin.':"No matching records found."})}):E.map(M=>{const J=Rt(M),Ee=is(J.readinessScore-J.changeScore,{blue:1/0,green:10,amber:-10});return e.jsxs("tr",{className:"hover:bg-slate-50",children:[e.jsx("td",{className:"px-4 py-3 font-medium text-slate-800",children:M.function}),e.jsx("td",{className:"px-4 py-3 text-slate-600",children:M.process}),e.jsx("td",{className:"px-2 py-3 text-xs",children:M.processRefUrl?e.jsx("a",{href:Ut(M.processRefUrl),target:"_blank",rel:"noreferrer",className:"text-blue-600 underline hover:text-blue-800",children:M.processRef||"-"}):e.jsx("span",{className:"text-slate-500",children:M.processRef||"-"})}),e.jsx("td",{className:"px-2 py-3 text-xs",children:e.jsx("span",{className:`inline-flex rounded-full border px-2 py-0.5 ${En(Ee)}`,title:"Benefit status: readiness vs. change demand",children:M.benefitId&&b?e.jsx("button",{type:"button",onClick:()=>b(M.benefitId),className:"underline hover:no-underline",children:M.benefitsRef||"-"}):M.benefitsRef||"-"})}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${En(B[M.id]||"amber")}`,children:M.peopleImpacted})}),e.jsx("td",{className:"px-4 py-3 text-slate-600",children:M.impactDate}),e.jsx("td",{className:"px-4 py-3 text-center",children:e.jsx(Si,{score:J.changeScore,type:"change"})}),e.jsx("td",{className:"px-4 py-3 text-center",children:e.jsx(Si,{score:J.readinessScore,type:"readiness"})}),e.jsx("td",{className:"px-4 py-3 text-right",children:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(lt,{onClick:()=>o(M),title:"Edit assessment",children:e.jsx(dn,{})}),e.jsx(lt,{onClick:()=>c(M.id),title:"Delete assessment",variant:"danger",children:e.jsx(mn,{})})]})})]},M.id)})})]})})]})}function Vm({items:t}){const[n,s]=d.useState("All"),[a,i]=d.useState(!1),[l,o]=d.useState("readinessScore"),[c,m]=d.useState("desc"),u=d.useMemo(()=>["All",...new Set(t.map(b=>b.function).filter(Boolean))].sort(),[t]),r=d.useMemo(()=>n==="All"?t:t.filter(b=>b.function===n),[t,n]),h=d.useMemo(()=>{const b={};return r.forEach(w=>{b[w.function]||(b[w.function]={count:0,totalReadiness:0,totalChange:0,totalImpacted:0,weightedReadinessSum:0,weightedChangeSum:0});const g=Rt(w),k=w.peopleImpacted||0,$=b[w.function];$.count+=1,$.totalReadiness+=g.readinessScore,$.totalChange+=g.changeScore,$.totalImpacted+=k,$.weightedReadinessSum+=g.readinessScore*k,$.weightedChangeSum+=g.changeScore*k}),Object.keys(b).map(w=>{const g=b[w],k=a&&g.totalImpacted>0?g.weightedReadinessSum/g.totalImpacted:g.totalReadiness/g.count,$=a&&g.totalImpacted>0?g.weightedChangeSum/g.totalImpacted:g.totalChange/g.count;return{name:w,avgReadiness:k,avgChange:$,totalImpacted:g.totalImpacted}}).sort((w,g)=>c==="asc"?w.avgReadiness-g.avgReadiness:g.avgReadiness-w.avgReadiness)},[r,a,c]),x=d.useMemo(()=>{const b=r.length,C=r.reduce((g,k)=>g+(k.peopleImpacted||0),0);let w=0;return b>0&&(a&&C>0?w=r.reduce((k,$)=>k+Rt($).readinessScore*($.peopleImpacted||0),0)/C:w=r.reduce((g,k)=>g+Rt(k).readinessScore,0)/b),{totalProcesses:b,totalPeople:C,avgReadiness:w}},[r,a]),p=d.useMemo(()=>{const b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],C={};return[...new Set(r.map(g=>g.function))].forEach(g=>{C[g]=Array.from({length:12},()=>({count:0,changeSum:0,readinessSum:0,capabilitySum:0}))}),r.forEach(g=>{var k;if(g.impactDate&&g.function){const $=new Date(g.impactDate);if(!Number.isNaN($.getTime())){const G=$.getMonth(),f=(k=C[g.function])==null?void 0:k[G];if(f){const{changeScore:v,readinessScore:O}=Rt(g);f.count+=1,f.changeSum+=v,f.readinessSum+=O,f.capabilitySum+=g.capability}}}}),{months:b,grid:C}},[r]);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-4 flex flex-col md:flex-row justify-between items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2 w-full md:w-auto",children:[e.jsx("span",{className:"font-medium text-sm text-slate-600",children:"Filter:"}),e.jsx("select",{value:n,onChange:b=>s(b.target.value),className:"p-2 border border-slate-300 rounded text-sm min-w-[200px] outline-none",children:u.map(b=>e.jsx("option",{value:b,children:b},b))})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`text-sm font-medium ${a?"text-slate-500":"text-blue-600"}`,children:"Simple Avg"}),e.jsx("button",{type:"button",onClick:()=>i(!a),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${a?"bg-blue-600":"bg-slate-200"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${a?"translate-x-6":"translate-x-1"}`})}),e.jsx("span",{className:`text-sm font-medium ${a?"text-blue-600":"text-slate-500"}`,children:"Weighted by Impact"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-4",style:{borderLeftWidth:4,borderLeftColor:"#3b82f6"},children:[e.jsx("h3",{className:"text-slate-500 text-sm font-medium",children:"Total Processes"}),e.jsx("p",{className:"text-2xl font-bold text-slate-800",children:x.totalProcesses}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Filtered View"})]}),e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-4",style:{borderLeftWidth:4,borderLeftColor:"#f59e0b"},children:[e.jsx("h3",{className:"text-slate-500 text-sm font-medium",children:"Total People Impacted"}),e.jsx("p",{className:"text-2xl font-bold text-slate-800",children:x.totalPeople}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"across all processes"})]}),e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-4",style:{borderLeftWidth:4,borderLeftColor:"#22c55e"},children:[e.jsx("h3",{className:"text-slate-500 text-sm font-medium",children:"Avg Readiness"}),e.jsxs("div",{className:"flex items-baseline gap-2",children:[e.jsxs("p",{className:"text-2xl font-bold text-slate-800",children:[x.avgReadiness.toFixed(0),"%"]}),a?e.jsx("span",{className:"text-xs font-bold text-blue-600 bg-blue-50 px-1 rounded",children:"Weighted"}):null]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:a?"Based on people count":"Simple average of scores"})]})]}),e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4",children:[e.jsx("h3",{className:"text-lg font-bold text-slate-800",children:"Change Heatmap"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-slate-600",children:"Overlay:"}),e.jsxs("select",{value:l,onChange:b=>o(b.target.value),className:"p-1 border border-slate-300 rounded text-sm outline-none",children:[e.jsx("option",{value:"count",children:"Count of Changes"}),e.jsx("option",{value:"changeScore",children:"Avg Change Impact"}),e.jsx("option",{value:"readinessScore",children:"Avg Readiness"}),e.jsx("option",{value:"capability",children:"Avg Capability (ADKAR)"})]})]})]}),e.jsxs("p",{className:"text-sm text-slate-500 mb-6",children:[l==="count"&&"Visualizing periods of high change activity (count).",l==="changeScore"&&"Visualizing average impact scores (Higher % = More Impact).",l==="readinessScore"&&"Visualizing average readiness scores (Higher % = More Ready).",l==="capability"&&"Visualizing team capability scores on a 1-4 scale (Higher = More Capable)."]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("div",{className:"min-w-[800px]",children:[e.jsxs("div",{className:"flex border-b border-slate-200 pb-2",children:[e.jsx("div",{className:"w-40 font-semibold text-sm text-slate-600 shrink-0",children:"Function"}),p.months.map(b=>e.jsx("div",{className:"flex-1 text-center text-xs font-medium text-slate-500",children:b},b))]}),Object.keys(p.grid).map(b=>e.jsxs("div",{className:"flex items-center border-b border-slate-100 py-2 hover:bg-slate-50",children:[e.jsx("div",{className:"w-40 text-sm font-medium text-slate-800 shrink-0 truncate pr-2",children:b}),p.grid[b].map((C,w)=>{const{count:g,changeSum:k,readinessSum:$,capabilitySum:G}=C;let f="-",v="bg-slate-50",O="text-slate-300";if(g>0){if(O="text-white",l==="count")f=g,g===1?v="bg-blue-200":g===2?v="bg-blue-400":g>=3&&(v="bg-blue-600"),g>=5&&(v="bg-indigo-800");else if(l==="changeScore"){const E=k/g;f=`${E.toFixed(0)}%`,E>=70?v="bg-red-500":E>=40?v="bg-amber-400":v="bg-green-500"}else if(l==="readinessScore"){const E=$/g;f=`${E.toFixed(0)}%`,E>=70?v="bg-green-500":E>=40?v="bg-amber-400":v="bg-red-500"}else if(l==="capability"){const E=G/g;f=E.toFixed(1),E>=3?v="bg-green-500":E>=2?v="bg-amber-400":v="bg-red-500"}}return e.jsx("div",{className:"flex-1 flex justify-center",children:e.jsx("div",{title:`${b} in ${p.months[w]}: ${g} changes`,className:`w-10 h-8 rounded flex items-center justify-center text-xs font-bold ${v} ${O}`,children:f})},w)})]},b)),Object.keys(p.grid).length===0?e.jsx("div",{className:"p-8 text-center text-slate-400 italic",children:"No data available for heatmap"}):null]})})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"text-lg font-bold text-slate-800",children:"Readiness by Function"}),e.jsx("button",{type:"button",onClick:()=>m(b=>b==="asc"?"desc":"asc"),className:"text-xs text-slate-500 hover:text-blue-600 bg-slate-50 px-2 py-1 rounded border border-slate-200",children:c==="asc"?"Lowest First":"Highest First"})]}),h.length===0?e.jsx("p",{className:"text-slate-400 italic",children:"No data available"}):e.jsx("div",{className:"space-y-4",children:h.map(b=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsx("span",{className:"font-medium",children:b.name}),e.jsxs("span",{className:"text-slate-500",children:[b.avgReadiness.toFixed(1),"%"]})]}),e.jsx("div",{className:"w-full bg-slate-100 rounded-full h-2.5",children:e.jsx("div",{className:`h-2.5 rounded-full ${b.avgReadiness<50?"bg-red-500":b.avgReadiness<70?"bg-amber-400":"bg-green-500"}`,style:{width:`${b.avgReadiness}%`}})})]},b.name))})]}),e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-6",children:[e.jsx("h3",{className:"text-lg font-bold text-slate-800 mb-2",children:"Change Risk Matrix (Bubble Chart)"}),e.jsx("p",{className:"text-xs text-slate-500 mb-6",children:"Size of bubble = # People Impacted"}),e.jsxs("div",{className:"relative h-64 border-l border-b border-slate-300 bg-slate-50",children:[e.jsx("div",{className:"absolute top-2 right-2 text-xs font-bold text-amber-600 bg-amber-50 px-2 rounded",children:"Monitor"}),e.jsx("div",{className:"absolute top-2 left-2 text-xs font-bold text-red-600 bg-red-50 px-2 rounded",children:"Critical"}),e.jsx("div",{className:"absolute bottom-2 left-2 text-xs font-bold text-amber-600 bg-amber-50 px-2 rounded",children:"Support"}),e.jsx("div",{className:"absolute bottom-2 right-2 text-xs font-bold text-green-600 bg-green-50 px-2 rounded",children:"Safe"}),r.map(b=>{const{changeScore:C,readinessScore:w}=Rt(b),g=b.peopleImpacted||10,k=Math.min(Math.max(g/5,12),48);return e.jsx("div",{title:`${b.process}: ${b.peopleImpacted} people impacted`,className:"absolute rounded-full bg-blue-600/80 border border-blue-700 shadow-sm transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform",style:{left:`${w}%`,bottom:`${C}%`,width:`${k}px`,height:`${k}px`}},b.id)})]}),e.jsxs("div",{className:"flex justify-between mt-2 text-xs text-slate-500",children:[e.jsx("span",{children:"Low Readiness"}),e.jsx("span",{children:"High Readiness"})]})]})]})]})}function qm(){return e.jsx("div",{className:"max-w-4xl mx-auto space-y-8",children:e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-800 mb-4",children:"Assessment Criteria Guide"}),e.jsx("p",{className:"text-slate-600 mb-8",children:"The following criteria are used to calculate the Change Impact Score and the Readiness Score. Use this guide to ensure consistency across all process assessments."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-blue-900 border-b-2 border-blue-200 pb-2 mb-4",children:"Change Impact Score"}),e.jsx("p",{className:"text-xs text-slate-500 mb-4 italic",children:"Formula: (Complexity + Frequency + (2 x Distance)) / 16"}),e.jsx("div",{className:"space-y-6",children:["complexity","frequency","distance"].map(t=>e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-slate-800 mb-2 capitalize",children:t}),e.jsx("ul",{className:"text-sm text-slate-600 space-y-1",children:[...sn[t]].reverse().map(n=>e.jsxs("li",{children:[e.jsxs("strong",{className:"text-slate-900",children:[n.value,":"]})," ",n.label.replace(/^\d+ - /,"")]},n.value))})]},t))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-green-900 border-b-2 border-green-200 pb-2 mb-4",children:"Readiness Score"}),e.jsx("p",{className:"text-xs text-slate-500 mb-4 italic",children:"Formula: (Attitude + Conditions + Resources + Network + Capability) / 20"}),e.jsx("div",{className:"space-y-6",children:["attitude","conditions","resources","network","capability"].map(t=>e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-slate-800 mb-2 capitalize",children:t}),e.jsx("ul",{className:"text-sm text-slate-600 space-y-1",children:[...sn[t]].reverse().map(n=>e.jsxs("li",{children:[e.jsxs("strong",{className:"text-slate-900",children:[n.value,":"]})," ",n.label.replace(/^\d+ - /,"")]},n.value))})]},t))})]})]})]})})}function Ym(t){const n=[];let s="",a=!1;for(let i=0;i<t.length;i+=1){const l=t[i],o=t[i+1];a?l==='"'&&o==='"'?(s+='"',i+=1):l==='"'?a=!1:s+=l:l==='"'?a=!0:l===","?(n.push(s),s=""):s+=l}return n.push(s),n}function Km({embedded:t=!1,benefits:n=[],onNavigateToBenefit:s}={}){const[a,i]=d.useState(()=>dt(xi)||[]),[l,o]=d.useState("assessment"),[c,m]=d.useState(!1),[u,r]=d.useState($s),h=d.useRef(null);d.useEffect(()=>{st(xi,a)},[a]);const x=v=>{r(O=>({...O,...v}))},p=()=>{if(!u.function||!u.process){window.alert("Please enter at least a Business Function and Process Name.");return}const v={...u,id:u.id||vi(),peopleImpacted:Number(u.peopleImpacted)||0,timestamp:new Date().toISOString()};u.id?i(O=>O.map(E=>E.id===u.id?v:E)):i(O=>[...O,v]),r($s),m(!1)},b=v=>{r({...v}),m(!0),o("assessment")},C=v=>{window.confirm("Are you sure you want to delete this assessment?")&&i(O=>O.filter(E=>E.id!==v))},w=()=>{const v=["Function","Process","Process Ref","Benefit Ref","People Impacted","Impact Date","Change Score","Readiness Score","Complexity","Frequency","Distance","Attitude","Conditions","Resources","Network","Capability"],O=a.map(E=>{const{changeScore:B,readinessScore:Y}=Rt(E);return[`"${E.function}"`,`"${E.process}"`,`"${E.processRef||""}"`,`"${E.benefitsRef||""}"`,E.peopleImpacted,E.impactDate,`${B.toFixed(2)}%`,`${Y.toFixed(2)}%`,E.complexity,E.frequency,E.distance,E.attitude,E.conditions,E.resources,E.network,E.capability].join(",")});Yt("change_impact_assessment.csv",[v.join(","),...O].join(`
`),"text/csv")},g=()=>{var v;(v=h.current)==null||v.click()},k=v=>{var B;const O=(B=v.target.files)==null?void 0:B[0];if(!O)return;const E=new FileReader;E.onload=Y=>{var se;try{const A=String(((se=Y.target)==null?void 0:se.result)||"").split(`
`).map(M=>M.trim()).filter(Boolean);if(A.length<2)return;const pe=[];for(let M=1;M<A.length;M+=1){const J=Ym(A[M]);J.length>=16&&pe.push({id:vi(),function:J[0],process:J[1],processRef:J[2]||"",benefitsRef:J[3]||"",peopleImpacted:parseInt(J[4],10)||0,impactDate:J[5],complexity:parseInt(J[8],10)||1,frequency:parseInt(J[9],10)||1,distance:parseInt(J[10],10)||1,attitude:parseInt(J[11],10)||2,conditions:parseInt(J[12],10)||2,resources:parseInt(J[13],10)||2,network:parseInt(J[14],10)||1,capability:parseInt(J[15],10)||1,timestamp:new Date().toISOString()})}pe.length>0?(window.confirm(`Found ${pe.length} valid records. Append them to your current list? (Cancel to Replace)`)?i(M=>[...M,...pe]):i(pe),window.alert("Import successful!")):window.alert("Could not parse any valid records. Please ensure CSV matches the export format.")}catch(me){console.error("Import Error:",me),window.alert("Failed to import CSV. Please check the file format.")}finally{v.target.value=""}},E.readAsText(O)},$=()=>{window.confirm("This will load sample data for testing. Add to existing data? (Cancel to Replace)")?i(v=>[...v,...yi.map(O=>({...O,timestamp:new Date().toISOString()}))]):i(yi.map(v=>({...v,timestamp:new Date().toISOString()})))},G=e.jsx("header",{className:t?"flex flex-wrap items-center justify-between gap-3 pb-4":"bg-white border-b border-slate-200 shadow-sm px-6 py-4 flex flex-wrap items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg font-bold text-slate-800",children:"Change Impact Assessment Tool"}),e.jsx("p",{className:"text-xs text-slate-500",children:"Process impact vs business readiness scoring and analysis"})]})}),f=e.jsxs("div",{className:t?"":"max-w-7xl mx-auto p-4 md:p-8",children:[e.jsxs("div",{className:"flex gap-4 mb-6 border-b border-slate-200 pb-1 overflow-x-auto",children:[e.jsx("button",{type:"button",onClick:()=>o("assessment"),className:`pb-2 px-2 font-medium whitespace-nowrap ${l==="assessment"?"text-blue-600 border-b-2 border-blue-600":"text-slate-500 hover:text-slate-800"}`,children:"Assessments"}),e.jsx("button",{type:"button",onClick:()=>o("dashboard"),className:`pb-2 px-2 font-medium whitespace-nowrap ${l==="dashboard"?"text-blue-600 border-b-2 border-blue-600":"text-slate-500 hover:text-slate-800"}`,children:"Dashboard & Analysis"}),e.jsx("button",{type:"button",onClick:()=>o("guide"),className:`pb-2 px-2 font-medium whitespace-nowrap ${l==="guide"?"text-blue-600 border-b-2 border-blue-600":"text-slate-500 hover:text-slate-800"}`,children:"Scoring Guide"})]}),l==="assessment"?e.jsx(Wm,{items:a,formData:u,showForm:c,onShowFormChange:m,onFormDataChange:x,onSave:p,onEdit:b,onDelete:C,onImportClick:g,onImportFile:k,onExport:w,onLoadDemo:$,fileInputRef:h,benefits:n,onNavigateToBenefit:s}):null,l==="dashboard"?e.jsx(Vm,{items:a}):null,l==="guide"?e.jsx(qm,{}):null]});return t?e.jsxs("div",{children:[G,f]}):e.jsxs("div",{className:"min-h-screen bg-slate-100 text-slate-900",children:[G,f]})}const wi=["Risk","Assumption","Issue","Dependency"],Ni=["Open","In Progress","Closed"],zm={Risk:"bg-red-100 text-red-800 border-red-300",Assumption:"bg-blue-100 text-blue-800 border-blue-300",Issue:"bg-amber-100 text-amber-800 border-amber-300",Dependency:"bg-purple-100 text-purple-800 border-purple-300"},Jm={Open:"bg-slate-100 text-slate-700","In Progress":"bg-blue-100 text-blue-700",Closed:"bg-green-100 text-green-700"},Gn={id:null,type:"Risk",title:"",description:"",owner:"",status:"Open",dateRaised:new Date().toISOString().slice(0,10),targetDate:"",likelihood:2,impact:2,notes:""};function Xm(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function Qm(t){return t.type!=="Risk"||!t.likelihood||!t.impact?null:t.likelihood*t.impact}function Zm({severity:t}){const n=is(16-t,{blue:13,green:9,amber:5});return e.jsx("span",{className:`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${En(n)}`,children:t})}function eu({embedded:t=!1,trustName:n="",projectName:s="",teamMembers:a=[],components:i=[],getEntry:l,onEntryUpdate:o,items:c=[],onItemsChange:m,focusItemId:u,onFocusItemHandled:r,onNavigateToAction:h}={}){const[x,p]=d.useState(!1),[b,C]=d.useState(Gn),[w,g]=d.useState(""),[k,$]=d.useState(""),[G,f]=d.useState(""),[v,O]=d.useState(""),[E,B]=d.useState(""),[Y,se]=d.useState(""),me=d.useMemo(()=>Object.fromEntries(i.map(R=>[R.id,R])),[i]),A=v?me[v]:void 0,pe=d.useMemo(()=>{var z;if(!l||!v||!E)return[];const R=((z=l(v,E))==null?void 0:z.actions)||[];return Y?R.filter(xe=>ft(xe.readinessScore??0).label===Y):R},[l,v,E,Y]),M=!!(b.id&&c.some(R=>R.id===b.id)),J=d.useMemo(()=>{const R={};return l&&i.forEach(z=>{z.lenses.forEach(xe=>{var F;(((F=l(z.id,xe))==null?void 0:F.actions)||[]).forEach(H=>{if(!H.raidItemId)return;const te={componentId:z.id,lens:xe,action:H};R[H.raidItemId]=[...R[H.raidItemId]||[],te]})})}),R},[l,i]),Ee=b.id&&J[b.id]||[],q=(R,z,xe)=>{if(!l||!o||!b.id)return;const F=l(R,z);o(R,z,{...F,actions:F.actions.map(H=>H.id===xe?{...H,raidItemId:b.id}:H)})},re=(R,z,xe)=>{if(!l||!o)return;const F=l(R,z);o(R,z,{...F,actions:F.actions.map(H=>H.id===xe?{...H,raidItemId:void 0}:H)})};d.useEffect(()=>{if(!u)return;const R=c.find(z=>z.id===u);R&&(C({...R}),p(!0)),r==null||r()},[u]);const ce=R=>C(z=>({...z,...R})),j=d.useMemo(()=>Array.from(new Set(c.map(R=>R.owner))).filter(Boolean).sort(),[c]),Z=d.useMemo(()=>{let R=[...c];return w&&(R=R.filter(z=>z.type===w)),k&&(R=R.filter(z=>z.owner===k)),G&&(R=R.filter(z=>z.status===G)),R},[c,w,k,G]),le=()=>{if(!b.title.trim()){window.alert("Please enter a title.");return}const R={...b,id:b.id||Xm()};m==null||m(b.id?c.map(z=>z.id===b.id?R:z):[...c,R]),C(Gn),p(!1)},Ne=R=>{C({...R}),p(!0)},fe=R=>{window.confirm("Are you sure you want to delete this item?")&&(m==null||m(c.filter(z=>z.id!==R)))};return e.jsxs("div",{children:[e.jsx("header",{className:t?"flex flex-wrap items-center justify-between gap-3 pb-4":"bg-white border-b border-slate-200 shadow-sm px-6 py-4 flex flex-wrap items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg font-bold text-slate-800",children:"RAID Log"}),e.jsxs("p",{className:"text-xs text-slate-500",children:["Risks, Assumptions, Issues and Dependencies",n||s?` — ${n||"Your Organisation"} / ${s||"Your Project/Programme"}`:""]})]})}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-800",children:"RAID Items"}),e.jsx("button",{type:"button",onClick:()=>{ce(Gn),C(Gn),p(!x)},className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700",children:x?"Cancel":"+ New Item"})]}),x?e.jsxs("div",{className:"rounded-lg border border-blue-100 bg-blue-50 p-6",children:[e.jsx("h3",{className:"text-lg font-medium text-blue-900 mb-4",children:b.id?"Edit Item":"New Item"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-type",className:"block text-sm font-medium text-slate-700 mb-1",children:"Type"}),e.jsx("select",{id:"raid-type",value:b.type,onChange:R=>ce({type:R.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none",children:wi.map(R=>e.jsx("option",{value:R,children:R},R))})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-title",className:"block text-sm font-medium text-slate-700 mb-1",children:"Title"}),e.jsx("input",{id:"raid-title",type:"text",value:b.title,onChange:R=>ce({title:R.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-owner",className:"block text-sm font-medium text-slate-700 mb-1",children:"Owner"}),e.jsxs("select",{id:"raid-owner",value:b.owner,onChange:R=>ce({owner:R.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none",children:[e.jsx("option",{value:"",children:"Unassigned"}),a.map(R=>e.jsx("option",{value:R.name,children:R.name},R.id))]})]}),e.jsxs("div",{className:"lg:col-span-3",children:[e.jsx("label",{htmlFor:"raid-description",className:"block text-sm font-medium text-slate-700 mb-1",children:"Description"}),e.jsx("textarea",{id:"raid-description",value:b.description,onChange:R=>ce({description:R.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none h-20"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-status",className:"block text-sm font-medium text-slate-700 mb-1",children:"Status"}),e.jsx("select",{id:"raid-status",value:b.status,onChange:R=>ce({status:R.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none",children:Ni.map(R=>e.jsx("option",{value:R,children:R},R))})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-dateRaised",className:"block text-sm font-medium text-slate-700 mb-1",children:"Date Raised"}),e.jsx("input",{id:"raid-dateRaised",type:"date",value:b.dateRaised,onChange:R=>ce({dateRaised:R.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-targetDate",className:"block text-sm font-medium text-slate-700 mb-1",children:"Target Date"}),e.jsx("input",{id:"raid-targetDate",type:"date",value:b.targetDate,onChange:R=>ce({targetDate:R.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none"})]}),b.type==="Risk"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-likelihood",className:"block text-sm font-medium text-slate-700 mb-1",children:"Likelihood (1-4)"}),e.jsx("select",{id:"raid-likelihood",value:b.likelihood,onChange:R=>ce({likelihood:Number(R.target.value)}),className:"w-full p-2 border border-slate-300 rounded outline-none",children:[1,2,3,4].map(R=>e.jsx("option",{value:R,children:R},R))})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-impact",className:"block text-sm font-medium text-slate-700 mb-1",children:"Impact (1-4)"}),e.jsx("select",{id:"raid-impact",value:b.impact,onChange:R=>ce({impact:Number(R.target.value)}),className:"w-full p-2 border border-slate-300 rounded outline-none",children:[1,2,3,4].map(R=>e.jsx("option",{value:R,children:R},R))})]})]}):null,i.length>0&&M?e.jsxs("div",{className:"lg:col-span-3 rounded-md border border-slate-200 bg-white p-3",children:[e.jsxs("p",{className:"text-sm font-medium text-slate-700 mb-2",children:["Linked Actions ",e.jsx("span",{className:"font-normal text-slate-400",children:"(optional)"})]}),Ee.length>0?e.jsx("ul",{className:"mb-3 space-y-1.5",children:Ee.map(({componentId:R,lens:z,action:xe})=>{var F;return e.jsxs("li",{className:"flex items-center justify-between gap-2 rounded border border-slate-200 bg-slate-50 px-2 py-1.5 text-sm",children:[e.jsx("button",{type:"button",onClick:()=>h==null?void 0:h(R,z,xe.id),className:"truncate text-left font-medium text-[#005eb8] underline underline-offset-2 hover:text-[#003087]",title:`${((F=me[R])==null?void 0:F.label)||R} · ${z}`,children:xe.text||"(untitled action)"}),e.jsx("button",{type:"button",onClick:()=>re(R,z,xe.id),className:"shrink-0 text-xs font-medium text-red-600 hover:text-red-800",children:"Unlink"})]},xe.id)})}):e.jsx("p",{className:"mb-3 text-xs text-slate-500 italic",children:"No actions linked yet."}),e.jsx("p",{className:"text-sm font-medium text-slate-700 mb-2",children:"Link another action"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-link-component",className:"block text-xs font-medium text-slate-600 mb-1",children:"Component"}),e.jsxs("select",{id:"raid-link-component",value:v,onChange:R=>{const z=me[R.target.value];O(R.target.value),B((z==null?void 0:z.lenses[0])||"")},className:"w-full p-2 border border-slate-300 rounded outline-none",children:[e.jsx("option",{value:"",children:"None"}),i.map(R=>e.jsx("option",{value:R.id,children:R.label},R.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-link-lens",className:"block text-xs font-medium text-slate-600 mb-1",children:"Lens"}),e.jsx("select",{id:"raid-link-lens",value:E,disabled:!A,onChange:R=>B(R.target.value),className:"w-full p-2 border border-slate-300 rounded outline-none disabled:bg-slate-100",children:((A==null?void 0:A.lenses)||[]).map(R=>e.jsx("option",{value:R,children:R},R))})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-link-readiness",className:"block text-xs font-medium text-slate-600 mb-1",children:"Filter by readiness"}),e.jsxs("select",{id:"raid-link-readiness",value:Y,disabled:!A,onChange:R=>se(R.target.value),className:"w-full p-2 border border-slate-300 rounded outline-none disabled:bg-slate-100",children:[e.jsx("option",{value:"",children:"Any"}),_t.map(R=>e.jsx("option",{value:R.label,children:R.label},R.label))]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-link-action",className:"block text-xs font-medium text-slate-600 mb-1",children:"Action"}),e.jsxs("select",{id:"raid-link-action",value:"",disabled:!A,onChange:R=>{R.target.value&&q(v,E,R.target.value)},className:"w-full p-2 border border-slate-300 rounded outline-none disabled:bg-slate-100",children:[e.jsx("option",{value:"",children:"Select an action..."}),pe.filter(R=>R.raidItemId!==b.id).map(R=>e.jsx("option",{value:R.id,children:R.text||"(untitled action)"},R.id))]})]})]})]}):null,e.jsxs("div",{className:"lg:col-span-3",children:[e.jsx("label",{htmlFor:"raid-notes",className:"block text-sm font-medium text-slate-700 mb-1",children:"Notes"}),e.jsx("textarea",{id:"raid-notes",value:b.notes,onChange:R=>ce({notes:R.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none h-16"})]})]}),e.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[e.jsx("button",{type:"button",onClick:()=>p(!1),className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200",children:"Cancel"}),e.jsx("button",{type:"button",onClick:le,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700",children:"Save Item"})]})]}):null,e.jsx(On,{selects:[{key:"type",label:"Filter by type",value:w,options:wi,onChange:g},{key:"owner",label:"Filter by owner",value:k,options:j,onChange:$},{key:"status",label:"Filter by status",value:G,options:Ni,onChange:f}],onReset:()=>{g(""),$(""),f("")}}),e.jsx("div",{className:"overflow-x-auto rounded-lg border border-slate-200 bg-white",children:e.jsxs("table",{className:"min-w-full text-sm text-left border-collapse",children:[e.jsx("thead",{className:"bg-slate-50 text-slate-600 font-medium border-b border-slate-200",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3",children:"Type"}),e.jsx("th",{className:"px-4 py-3",children:"Title"}),e.jsx("th",{className:"px-4 py-3",children:"Owner"}),e.jsx("th",{className:"px-4 py-3",children:"Status"}),e.jsx("th",{className:"px-4 py-3",children:"Target Date"}),e.jsx("th",{className:"px-4 py-3 text-center",children:"Severity"}),e.jsx("th",{className:"px-4 py-3",children:"Linked Action"}),e.jsx("th",{className:"px-4 py-3 text-right",children:"Actions"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:Z.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,className:"px-4 py-8 text-center text-slate-500 italic",children:c.length===0?'No RAID items added yet. Click "New Item" to begin.':"No matching records found."})}):Z.map(R=>{const z=Qm(R);return e.jsxs("tr",{className:"hover:bg-slate-50",children:[e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${zm[R.type]}`,children:R.type})}),e.jsx("td",{className:"px-4 py-3 font-medium text-slate-800",children:R.title}),e.jsx("td",{className:"px-4 py-3 text-slate-600",children:R.owner||"Unassigned"}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${Jm[R.status]}`,children:R.status})}),e.jsx("td",{className:"px-4 py-3 text-slate-600",children:R.targetDate}),e.jsx("td",{className:"px-4 py-3 text-center",children:z!==null?e.jsx(Zm,{severity:z}):null}),e.jsx("td",{className:"px-4 py-3 text-slate-600 text-xs",children:(()=>{var $e;const xe=J[R.id]||[];if(xe.length===0)return e.jsx("span",{className:"text-slate-400",children:"-"});const F=xe[0],H=(($e=me[F.componentId])==null?void 0:$e.label)||F.componentId,te=xe.length>1?` +${xe.length-1} more`:"";return h?e.jsxs("button",{type:"button",onClick:()=>h(F.componentId,F.lens,F.action.id),title:F.lens,className:"font-medium text-[#005eb8] underline underline-offset-2 hover:text-[#003087]",children:[H,te]}):e.jsxs("span",{title:F.lens,children:[H,te]})})()}),e.jsx("td",{className:"px-4 py-3 text-right",children:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(lt,{onClick:()=>Ne(R),title:"Edit item",children:e.jsx(dn,{})}),e.jsx(lt,{onClick:()=>fe(R.id),title:"Delete item",variant:"danger",children:e.jsx(mn,{})})]})})]},R.id)})})]})})]})]})}const Ts=["Identified","Validating","Planning","Delivering","Realised","Partially Realised","Not Realised"],Ls=["Cashable Financial","Non-Cashable Financial","Efficiency / Productivity","Quality & Safety","Patient Experience","Staff Experience / Workforce","Operational Performance","Compliance / Risk Reduction"],Ms=["Trust-wide","Emergency Medicine","Surgery","Medicine","Diagnostics & Imaging","Maternity","Mental Health","Community Services","Outpatients","Pharmacy","Corporate / Back Office","Other"],tu=["Patients","Carers / Families","Clinical Staff","Nursing Staff","Administrative Staff","Management","Trust (Organisation-wide)","Wider Health System / ICS","Commissioners","Regulators"],nu={"Cashable Financial":["£ (GBP)","£ per patient","£ per episode","Cost per WTE"],"Non-Cashable Financial":["£ (notional/GBP equivalent)","Staff hours released","WTE equivalent"],"Efficiency / Productivity":["Minutes/hours saved","Number of process steps removed","Throughput (activity per period)","Length of stay (days)"],"Quality & Safety":["Incidents per 1,000 admissions","Compliance rate (%)","Number of harm events avoided"],"Patient Experience":["FFT score (%)","Patient satisfaction score","Complaints per 1,000 contacts"],"Staff Experience / Workforce":["Staff survey score (%)","Turnover rate (%)","Vacancy rate (%)","Sickness/absence rate (%)"],"Operational Performance":["Waiting time (days/weeks)","DNA rate (%)","Utilisation rate (%)","Activity volume"],"Compliance / Risk Reduction":["Audit compliance score (%)","Number of risks mitigated","CQC rating movement"]},ba=4,In=[{key:"Q1",label:"Apr-Jun"},{key:"Q2",label:"Jul-Sep"},{key:"Q3",label:"Oct-Dec"},{key:"Q4",label:"Jan-Mar"}],su={Identified:"bg-slate-100 text-slate-700 border-slate-300",Validating:"bg-purple-100 text-purple-800 border-purple-300",Planning:"bg-blue-100 text-blue-800 border-blue-300",Delivering:"bg-amber-100 text-amber-800 border-amber-300",Realised:"bg-green-100 text-green-800 border-green-300","Partially Realised":"bg-amber-100 text-amber-800 border-amber-300","Not Realised":"bg-red-100 text-red-800 border-red-300"};function au(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function iu(t){const n=t.reduce((s,a)=>{const i=/^BEN-(\d+)$/.exec(a.benefitNo);return i?Math.max(s,Number(i[1])):s},0);return`BEN-${String(n+1).padStart(3,"0")}`}function ou(){const t=[];for(let n=0;n<ba;n+=1)In.forEach(s=>{t.push({year:n,quarterKey:s.key,forecast:"",actual:""})});return t}function Un(t){return{benefitId:t,varianceReason:"",periods:ou()}}const ji=In.map(t=>t.key),Ro={blue:10,green:-5,amber:-20};function ru(t){return[...t.periods].filter(n=>n.forecast!==""||n.actual!=="").sort((n,s)=>n.year-s.year||ji.indexOf(n.quarterKey)-ji.indexOf(s.quarterKey))}function lu(t){var n;return((n=In.find(s=>s.key===t))==null?void 0:n.label)||t}function xa(t,n){const s=Number(t),a=Number(n);if(!t||!n||Number.isNaN(s)||Number.isNaN(a)||s===0)return null;const i=(a-s)/Math.abs(s)*100;return{status:is(i,Ro),percentDelta:i}}function ki(t,n){const s=t.periods.filter(i=>i.year===n).map(i=>xa(i.forecast,i.actual)).filter(i=>i!==null);if(s.length===0)return null;const a=s.reduce((i,l)=>i+l.percentDelta,0)/s.length;return{status:is(a,Ro),percentDelta:a}}function cu(t){if(t.periods.every(l=>l.forecast!==""&&l.actual!==""))return Array.from({length:ba},(l,o)=>o).map(l=>{const o=ki(t,l);return o?{kind:"yearAverage",year:l,variance:o}:null}).filter(l=>l!==null);const s=ru(t),a=s.length>12?2:s.length>8?1:0;if(a===0)return s.slice(-6).map(l=>({kind:"period",period:l}));const i=[];for(let l=0;l<a;l+=1){const o=ki(t,l);o&&i.push({kind:"yearAverage",year:l,variance:o})}return s.filter(l=>l.year>=a).forEach(l=>i.push({kind:"period",period:l})),i}function Ci({variance:t}){return e.jsxs("span",{className:`mt-0.5 rounded-full border px-1.5 font-bold ${En(t.status)}`,children:[t.percentDelta>0?"+":"",t.percentDelta.toFixed(0),"%"]})}function du({item:t}){if(t.kind==="yearAverage")return e.jsxs("span",{className:"inline-flex flex-col items-center rounded border border-slate-200 bg-white px-1.5 py-1 text-[10px] leading-tight whitespace-nowrap",children:[e.jsxs("span",{className:"font-medium text-slate-500",children:["Y",t.year," Avg"]}),e.jsx(Ci,{variance:t.variance})]});const{period:n}=t,s=xa(n.forecast,n.actual);return e.jsxs("span",{className:"inline-flex flex-col items-center rounded border border-slate-200 bg-white px-1.5 py-1 text-[10px] leading-tight whitespace-nowrap",children:[e.jsxs("span",{className:"font-medium text-slate-500",children:["Y",n.year," ",lu(n.quarterKey)]}),s?e.jsx(Ci,{variance:s}):e.jsx("span",{className:"mt-0.5 text-slate-400",children:n.forecast?`F ${n.forecast}`:n.actual?`A ${n.actual}`:"—"})]})}const fs={dateCreated:new Date().toISOString().slice(0,10),dateReviewed:new Date().toISOString().slice(0,10),title:"",details:"",status:Ts[0],disbenefit:"No",benefitType:Ls[0],speciality:Ms[0],beneficiaryGroups:[],strategicOwner:"",operationalOwner:"",trustObjectives:"",changeEnablers:"",measurementsUsed:"",unitOfMeasure:"",baselineValue:"",calculations:"",assumptions:""};function Ke({htmlFor:t,children:n}){return e.jsx("label",{htmlFor:t,className:"block text-sm font-medium text-slate-700 mb-1",children:n})}function Bt({label:t,value:n}){return e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-wide text-slate-400",children:t}),e.jsx("p",{className:"mt-0.5 text-sm text-slate-700 whitespace-pre-wrap",children:n||"—"})]})}function Ei({expanded:t}){return e.jsx("svg",{className:`h-4 w-4 transition-transform ${t?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}function mu({embedded:t=!1,trustName:n="",projectName:s="",benefits:a=[],onBenefitsChange:i,tracker:l={},onTrackerChange:o,focusBenefitId:c,onFocusHandled:m}={}){const[u,r]=d.useState("register"),[h,x]=d.useState(!1),[p,b]=d.useState({id:null,benefitNo:"",...fs}),[C,w]=d.useState(""),[g,k]=d.useState(""),[$,G]=d.useState(""),[f,v]=d.useState(new Set),[O,E]=d.useState(new Set);d.useEffect(()=>{if(!c)return;const j=a.find(Z=>Z.id===c);j&&(r("register"),b({...j}),x(!0),v(Z=>new Set(Z).add(j.id))),m==null||m()},[c]);const B=j=>b(Z=>({...Z,...j})),Y=d.useMemo(()=>{let j=[...a];return C&&(j=j.filter(Z=>Z.status===C)),g&&(j=j.filter(Z=>Z.benefitType===g)),$&&(j=j.filter(Z=>Z.speciality===$)),j},[a,C,g,$]),se=()=>{b({id:null,benefitNo:iu(a),...fs}),x(!0)},me=j=>{b({...j}),x(!0)},A=j=>{v(Z=>{const le=new Set(Z);return le.has(j)?le.delete(j):le.add(j),le})},pe=j=>{E(Z=>{const le=new Set(Z);return le.has(j)?le.delete(j):le.add(j),le})},M=j=>{if(!window.confirm("Are you sure you want to delete this benefit?"))return;i==null||i(a.filter(Ne=>Ne.id!==j));const{[j]:Z,...le}=l;o==null||o(le)},J=()=>{if(!p.title.trim()){window.alert("Please enter a benefit title.");return}if(!p.dateCreated||!p.dateReviewed){window.alert("Created and Reviewed dates must not be blank.");return}const j=p.id||au(),Z={...p,id:j};i==null||i(p.id?a.map(le=>le.id===j?Z:le):[...a,Z]),l[j]||o==null||o({...l,[j]:Un(j)}),x(!1),b({id:null,benefitNo:"",...fs})},Ee=j=>{B({beneficiaryGroups:p.beneficiaryGroups.includes(j)?p.beneficiaryGroups.filter(Z=>Z!==j):[...p.beneficiaryGroups,j]})},q=(j,Z)=>{const le=l[j]||Un(j);o==null||o({...l,[j]:{...le,...Z}})},re=(j,Z,le,Ne,fe)=>{const R=l[j]||Un(j);q(j,{periods:R.periods.map(z=>z.year===Z&&z.quarterKey===le?{...z,[Ne]:fe}:z)})},ce=(j,Z)=>{var le;return((le=xa(j,Z))==null?void 0:le.status)??null};return e.jsxs("div",{children:[e.jsx("header",{className:t?"flex flex-wrap items-center justify-between gap-3 pb-4":"bg-white border-b border-slate-200 shadow-sm px-6 py-4 flex flex-wrap items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg font-bold text-slate-800",children:"Benefits Register & Tracker"}),e.jsxs("p",{className:"text-xs text-slate-500",children:["Capture, quantify and track realisation of programme benefits",n||s?` — ${n||"Your Organisation"} / ${s||"Your Project/Programme"}`:""]})]})}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex gap-2 border-b border-slate-200",children:[e.jsx("button",{type:"button",onClick:()=>r("register"),className:`px-4 py-2 text-sm font-semibold border-b-2 ${u==="register"?"border-[#005eb8] text-[#005eb8]":"border-transparent text-slate-500 hover:text-slate-700"}`,children:"Benefits Register"}),e.jsx("button",{type:"button",onClick:()=>r("tracker"),className:`px-4 py-2 text-sm font-semibold border-b-2 ${u==="tracker"?"border-[#005eb8] text-[#005eb8]":"border-transparent text-slate-500 hover:text-slate-700"}`,children:"Benefits Tracker"})]}),u==="register"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-800",children:"Benefits"}),e.jsx("button",{type:"button",onClick:()=>h?x(!1):se(),className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700",children:h?"Cancel":"+ New Benefit"})]}),h?e.jsxs("div",{className:"rounded-lg border border-blue-100 bg-blue-50 p-6",children:[e.jsx("h3",{className:"text-lg font-medium text-blue-900 mb-4",children:p.id?"Edit Benefit":"New Benefit"}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 max-w-2xl",children:[e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:"benefit-no",children:"Benefit No."}),e.jsx("input",{id:"benefit-no",type:"text",value:p.benefitNo,onChange:j=>B({benefitNo:j.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:"benefit-created",children:"Created *"}),e.jsx("input",{id:"benefit-created",type:"date",value:p.dateCreated,onChange:j=>B({dateCreated:j.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none"})]}),e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:"benefit-reviewed",children:"Reviewed *"}),e.jsx("input",{id:"benefit-reviewed",type:"date",value:p.dateReviewed,onChange:j=>B({dateReviewed:j.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none"})]})]}),e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:"benefit-title",children:"Benefit Title/Name"}),e.jsx("input",{id:"benefit-title",type:"text",value:p.title,onChange:j=>B({title:j.target.value}),placeholder:"Elevator pitch, including enabler",className:"w-full p-2 border border-slate-300 rounded outline-none"})]}),e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:"benefit-details",children:"Benefit Details"}),e.jsx("textarea",{id:"benefit-details",value:p.details,onChange:j=>B({details:j.target.value}),placeholder:"Describe current and future state",className:"w-full p-2 border border-slate-300 rounded outline-none h-20"})]}),e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:"benefit-status",children:"Outcome Details Benefit Status"}),e.jsx("select",{id:"benefit-status",value:p.status,onChange:j=>B({status:j.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none",children:Ts.map(j=>e.jsx("option",{value:j,children:j},j))})]}),e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:"benefit-disbenefit",children:"Disbenefit?"}),e.jsxs("select",{id:"benefit-disbenefit",value:p.disbenefit,onChange:j=>B({disbenefit:j.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none",children:[e.jsx("option",{value:"No",children:"No"}),e.jsx("option",{value:"Yes",children:"Yes"})]})]}),e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:"benefit-type",children:"Benefit Type"}),e.jsx("select",{id:"benefit-type",value:p.benefitType,onChange:j=>B({benefitType:j.target.value,unitOfMeasure:""}),className:"w-full p-2 border border-slate-300 rounded outline-none",children:Ls.map(j=>e.jsx("option",{value:j,children:j},j))})]}),e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:"benefit-speciality",children:"Speciality"}),e.jsx("select",{id:"benefit-speciality",value:p.speciality,onChange:j=>B({speciality:j.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none",children:Ms.map(j=>e.jsx("option",{value:j,children:j},j))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Beneficiary Groups"}),e.jsx("div",{className:"grid grid-cols-2 gap-1 rounded border border-slate-300 bg-white p-3",children:tu.map(j=>{const Z=`benefit-group-${j.replace(/[^a-zA-Z0-9]/g,"-")}`;return e.jsxs("label",{htmlFor:Z,className:"flex items-center gap-2 text-sm text-slate-700",children:[e.jsx("input",{id:Z,type:"checkbox",checked:p.beneficiaryGroups.includes(j),onChange:()=>Ee(j)}),j]},j)})})]}),e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:"benefit-strategic-owner",children:"Strategic Owner"}),e.jsx("input",{id:"benefit-strategic-owner",type:"text",value:p.strategicOwner,onChange:j=>B({strategicOwner:j.target.value}),placeholder:"Name and role",className:"w-full p-2 border border-slate-300 rounded outline-none"})]}),e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:"benefit-operational-owner",children:"Operational Owner"}),e.jsx("input",{id:"benefit-operational-owner",type:"text",value:p.operationalOwner,onChange:j=>B({operationalOwner:j.target.value}),placeholder:"Name and role",className:"w-full p-2 border border-slate-300 rounded outline-none"})]}),e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:"benefit-objectives",children:"Trust Objective(s)"}),e.jsx("textarea",{id:"benefit-objectives",value:p.trustObjectives,onChange:j=>B({trustObjectives:j.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none h-16"})]}),e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:"benefit-enablers",children:"Change Enablers"}),e.jsx("textarea",{id:"benefit-enablers",value:p.changeEnablers,onChange:j=>B({changeEnablers:j.target.value}),placeholder:"Precursor to delivery of benefit",className:"w-full p-2 border border-slate-300 rounded outline-none h-16"})]}),e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:"benefit-measurements",children:"Benefit measurement(s) used"}),e.jsx("textarea",{id:"benefit-measurements",value:p.measurementsUsed,onChange:j=>B({measurementsUsed:j.target.value}),placeholder:"Make specific to process/location/team",className:"w-full p-2 border border-slate-300 rounded outline-none h-16"})]}),e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:"benefit-unit",children:"Unit of Measure"}),e.jsxs("select",{id:"benefit-unit",value:p.unitOfMeasure,onChange:j=>B({unitOfMeasure:j.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none",children:[e.jsx("option",{value:"",children:"Please choose"}),(nu[p.benefitType]||[]).map(j=>e.jsx("option",{value:j,children:j},j))]})]}),e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:"benefit-baseline",children:"Baseline Value"}),e.jsx("input",{id:"benefit-baseline",type:"text",value:p.baselineValue,onChange:j=>B({baselineValue:j.target.value}),placeholder:"Align with unit of measure/benefit type",className:"w-full p-2 border border-slate-300 rounded outline-none"})]}),e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:"benefit-calculations",children:"Benefit/Outcome Calculations"}),e.jsx("textarea",{id:"benefit-calculations",value:p.calculations,onChange:j=>B({calculations:j.target.value}),placeholder:"Breakdown of calculation and sources, activity year/time period, confidence & attribution %'s, ramp up rationale",className:"w-full p-2 border border-slate-300 rounded outline-none h-24"})]}),e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:"benefit-assumptions",children:"Assumptions"}),e.jsx("textarea",{id:"benefit-assumptions",value:p.assumptions,onChange:j=>B({assumptions:j.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none h-16"})]})]}),e.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[e.jsx("button",{type:"button",onClick:()=>x(!1),className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200",children:"Cancel"}),e.jsx("button",{type:"button",onClick:J,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700",children:"Save Benefit"})]})]}):null,e.jsx(On,{selects:[{key:"status",label:"Filter by status",value:C,options:Ts,onChange:w},{key:"type",label:"Filter by type",value:g,options:Ls,onChange:k},{key:"speciality",label:"Filter by speciality",value:$,options:Ms,onChange:G}],onReset:()=>{w(""),k(""),G("")}}),e.jsx("div",{className:"overflow-x-auto rounded-lg border border-slate-200 bg-white",children:e.jsxs("table",{className:"min-w-full text-sm text-left border-collapse",children:[e.jsx("thead",{className:"bg-slate-50 text-slate-600 font-medium border-b border-slate-200",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 w-8","aria-hidden":"true"}),e.jsx("th",{className:"px-4 py-3",children:"Benefit No."}),e.jsx("th",{className:"px-4 py-3",children:"Title"}),e.jsx("th",{className:"px-4 py-3",children:"Type"}),e.jsx("th",{className:"px-4 py-3",children:"Status"}),e.jsx("th",{className:"px-4 py-3",children:"Speciality"}),e.jsx("th",{className:"px-4 py-3",children:"Owner (Strategic / Operational)"}),e.jsx("th",{className:"px-4 py-3",children:"Unit of Measure"}),e.jsx("th",{className:"px-4 py-3",children:"Baseline"}),e.jsx("th",{className:"px-4 py-3",children:"Created"}),e.jsx("th",{className:"px-4 py-3",children:"Reviewed"}),e.jsx("th",{className:"px-4 py-3 text-right",children:"Actions"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:Y.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:11,className:"px-4 py-8 text-center text-slate-500 italic",children:a.length===0?'No benefits added yet. Click "New Benefit" to begin.':"No matching records found."})}):Y.map(j=>{const Z=f.has(j.id);return e.jsxs(d.Fragment,{children:[e.jsxs("tr",{className:"hover:bg-slate-50",children:[e.jsx("td",{className:"px-2 py-3",children:e.jsx("button",{type:"button",onClick:()=>A(j.id),title:Z?"Collapse details":"Expand details","aria-label":Z?"Collapse details":"Expand details",className:"inline-flex h-6 w-6 items-center justify-center rounded text-slate-500 hover:bg-slate-200",children:e.jsx(Ei,{expanded:Z})})}),e.jsx("td",{className:"px-4 py-3 font-medium text-slate-800",children:j.benefitNo}),e.jsx("td",{className:"px-4 py-3 text-slate-600",children:j.title}),e.jsx("td",{className:"px-4 py-3 text-slate-600",children:j.benefitType}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${su[j.status]||"bg-slate-100 text-slate-700 border-slate-300"}`,children:j.status})}),e.jsx("td",{className:"px-4 py-3 text-slate-600",children:j.speciality}),e.jsxs("td",{className:"px-4 py-3 text-slate-600 text-xs",children:[j.strategicOwner||"—"," / ",j.operationalOwner||"—"]}),e.jsx("td",{className:"px-4 py-3 text-slate-600",children:j.unitOfMeasure||"—"}),e.jsx("td",{className:"px-4 py-3 text-slate-600",children:j.baselineValue||"—"}),e.jsx("td",{className:"px-4 py-3 text-slate-600",children:j.dateCreated}),e.jsx("td",{className:"px-4 py-3 text-slate-600",children:j.dateReviewed}),e.jsx("td",{className:"px-4 py-3 text-right",children:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(lt,{onClick:()=>me(j),title:"Edit benefit",children:e.jsx(dn,{})}),e.jsx(lt,{onClick:()=>M(j.id),title:"Delete benefit",variant:"danger",children:e.jsx(mn,{})})]})})]}),Z?e.jsxs("tr",{className:"bg-slate-50",children:[e.jsx("td",{}),e.jsx("td",{colSpan:10,className:"px-4 py-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsx(Bt,{label:"Disbenefit?",value:j.disbenefit}),e.jsx(Bt,{label:"Beneficiary Groups",value:j.beneficiaryGroups.join(", ")}),e.jsx(Bt,{label:"Trust Objective(s)",value:j.trustObjectives}),e.jsx("div",{className:"md:col-span-3",children:e.jsx(Bt,{label:"Benefit Details",value:j.details})}),e.jsx("div",{className:"md:col-span-3",children:e.jsx(Bt,{label:"Change Enablers",value:j.changeEnablers})}),e.jsx("div",{className:"md:col-span-3",children:e.jsx(Bt,{label:"Benefit measurement(s) used",value:j.measurementsUsed})}),e.jsx("div",{className:"md:col-span-3",children:e.jsx(Bt,{label:"Benefit/Outcome Calculations",value:j.calculations})}),e.jsx("div",{className:"md:col-span-3",children:e.jsx(Bt,{label:"Assumptions",value:j.assumptions})})]})})]}):null]},j.id)})})]})})]}):e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-800",children:"Benefits Tracker"}),e.jsx("div",{className:"overflow-x-auto rounded-lg border border-slate-200 bg-white",children:e.jsxs("table",{className:"min-w-full text-sm text-left border-collapse",children:[e.jsx("thead",{className:"bg-slate-50 text-slate-600 font-medium border-b border-slate-200",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 w-8","aria-hidden":"true"}),e.jsx("th",{className:"px-4 py-3",children:"Benefit No."}),e.jsx("th",{className:"px-4 py-3",children:"Title"}),e.jsx("th",{className:"px-4 py-3",children:"Baseline Value"}),e.jsx("th",{className:"px-4 py-3",children:"Variance Trend"}),e.jsx("th",{className:"px-4 py-3",children:"Variance Reason"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:a.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,className:"px-4 py-8 text-center text-slate-500 italic",children:"Add a benefit in the Register tab to begin tracking it."})}):a.map(j=>{const Z=l[j.id]||Un(j.id),le=O.has(j.id);return e.jsxs(d.Fragment,{children:[e.jsxs("tr",{className:"hover:bg-slate-50",children:[e.jsx("td",{className:"px-2 py-3",children:e.jsx("button",{type:"button",onClick:()=>pe(j.id),title:le?"Collapse periods":"Expand periods","aria-label":le?"Collapse periods":"Expand periods",className:"inline-flex h-6 w-6 items-center justify-center rounded text-slate-500 hover:bg-slate-200",children:e.jsx(Ei,{expanded:le})})}),e.jsx("td",{className:"px-4 py-3 font-medium text-slate-800",children:j.benefitNo}),e.jsx("td",{className:"px-4 py-3 text-slate-600",children:j.title}),e.jsx("td",{className:"px-4 py-3 text-slate-600",children:j.baselineValue||"—"}),e.jsx("td",{className:"px-4 py-3",children:(()=>{const Ne=cu(Z);return Ne.length===0?e.jsx("span",{className:"text-slate-400 text-xs",children:"No data yet"}):e.jsx("div",{className:"flex flex-wrap gap-1",children:Ne.map(fe=>e.jsx(du,{item:fe},fe.kind==="yearAverage"?`avg-${fe.year}`:`${fe.period.year}-${fe.period.quarterKey}`))})})()}),e.jsx("td",{className:"px-4 py-3 text-slate-500 text-xs truncate max-w-xs",children:Z.varianceReason||"—"})]}),le?e.jsxs("tr",{className:"bg-slate-50",children:[e.jsx("td",{}),e.jsxs("td",{colSpan:5,className:"px-4 py-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx(Ke,{htmlFor:`tracker-variance-${j.id}`,children:"Reason for variance between forecast and actual"}),e.jsx("textarea",{id:`tracker-variance-${j.id}`,value:Z.varianceReason,onChange:Ne=>q(j.id,{varianceReason:Ne.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none h-16"})]}),e.jsx("div",{className:"overflow-x-auto rounded-lg border border-slate-200 bg-white",children:e.jsxs("table",{className:"min-w-full text-sm text-left border-collapse",children:[e.jsx("thead",{className:"bg-slate-50 text-slate-600 font-medium border-b border-slate-200",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"Year"}),e.jsx("th",{className:"px-3 py-2",children:"Period"}),e.jsx("th",{className:"px-3 py-2",children:"Forecast"}),e.jsx("th",{className:"px-3 py-2",children:"Actual"}),e.jsx("th",{className:"px-3 py-2 text-center",children:"Variance"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:Array.from({length:ba}).map((Ne,fe)=>In.map((R,z)=>{const xe=Z.periods.find(H=>H.year===fe&&H.quarterKey===R.key)||{quarterKey:R.key,forecast:"",actual:""},F=ce(xe.forecast,xe.actual);return e.jsxs("tr",{children:[z===0?e.jsxs("td",{className:"px-3 py-2 font-medium text-slate-700 align-top",rowSpan:In.length,children:["Y",fe]}):null,e.jsx("td",{className:"px-3 py-2 text-slate-600",children:R.label}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsxs("label",{htmlFor:`forecast-${j.id}-${fe}-${R.key}`,className:"sr-only",children:["Forecast for Y",fe," ",R.label]}),e.jsx("input",{id:`forecast-${j.id}-${fe}-${R.key}`,type:"number",value:xe.forecast,onChange:H=>re(j.id,fe,R.key,"forecast",H.target.value),className:"w-28 p-1.5 border border-slate-300 rounded outline-none"})]}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsxs("label",{htmlFor:`actual-${j.id}-${fe}-${R.key}`,className:"sr-only",children:["Actual for Y",fe," ",R.label]}),e.jsx("input",{id:`actual-${j.id}-${fe}-${R.key}`,type:"number",value:xe.actual,onChange:H=>re(j.id,fe,R.key,"actual",H.target.value),className:"w-28 p-1.5 border border-slate-300 rounded outline-none"})]}),e.jsx("td",{className:"px-3 py-2 text-center",children:F?e.jsx("span",{className:`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${En(F)}`,children:F.toUpperCase()}):e.jsx("span",{className:"text-slate-300",children:"—"})})]},`${j.id}-${fe}-${R.key}`)}))})]})})]})]}):null]},j.id)})})]})})]})]})]})}const bs="nhs-stakeholder-analysis",Hn={Low:1,Medium:2,High:3,"Very High":4},ya={Resistant:1,Opposed:2,Ambivalent:3,Complying:4,Supporting:5,Leading:6},va={Unaware:1,Aware:2,Informed:3,Equipped:4,Practised:5,Exemplary:6},Bs={Resistant:"Actively opposes the change and may work against it.",Opposed:"Disagrees with the change but is not actively undermining it.",Ambivalent:"Neither supports nor opposes the change; not yet engaged.",Complying:"Follows the change because required to, without genuine buy-in.",Supporting:"Agrees with the change and cooperates willingly.",Leading:"Actively champions the change and helps bring others along."},Fs={Unaware:"Has not yet been informed the change is happening.",Aware:"Knows the change is happening but not yet why or what it means for them.",Informed:"Understands why the change is happening and what will be expected.",Equipped:"Has the knowledge and skills needed to work in the new way.",Practised:"Has started using the new way of working with growing confidence.",Exemplary:"Fully proficient, and can support or coach others through the change."},Ii=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"];function en(t=""){return`${t}${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function uu(){return{groups:["SRO","Manager","Trades Union","Programme","Project","Trainer","Clinical","Arms Length Body","CCG","GP","CSU","Staff"],subGroups:["LRH","GH","Community","CGC office"],departments:["Ward 1","Ward 2","Ward 3","Ward 4","Pharmacy","Pathology","A+E","Main Reception","Exec Offices","GP Practices","IT","HR","Comms"],relationships:["Customer","Provider","Influencer","Governance"],commitments:["Resistant","Opposed","Ambivalent","Complying","Supporting","Leading"],capabilities:["Unaware","Aware","Informed","Equipped","Practised","Exemplary"],ratings:["Low","Medium","High","Very High"],engagementActivities:[{id:"act-1",name:"Targetted email bulletin/letter",inform:"High",consult:"Medium",involve:"",collaborate:"",empower:""},{id:"act-2",name:"General email bulletin/letter",inform:"Medium",consult:"",involve:"",collaborate:"",empower:""},{id:"act-3",name:"Targetted X/Twitter Feed",inform:"High",consult:"Medium",involve:"",collaborate:"",empower:""},{id:"act-4",name:"Case Study",inform:"High",consult:"Medium",involve:"",collaborate:"",empower:""},{id:"act-5",name:"Programme/Product/Service engagement pack",inform:"High",consult:"High",involve:"Medium",collaborate:"",empower:""},{id:"act-6",name:"Presence at corporate events",inform:"Medium",consult:"",involve:"Medium",collaborate:"",empower:""},{id:"act-7",name:"Face to Face meeting",inform:"High",consult:"High",involve:"High",collaborate:"High",empower:"Medium"},{id:"act-8",name:"Updates to website and specific programme pages",inform:"Medium",consult:"",involve:"",collaborate:"",empower:""},{id:"act-9",name:"Webinar",inform:"High",consult:"Medium",involve:"Medium",collaborate:"Medium",empower:"Medium"},{id:"act-10",name:"Fact sheet",inform:"High",consult:"",involve:"",collaborate:"",empower:""},{id:"act-11",name:"Ways of working leaflet",inform:"High",consult:"",involve:"Medium",collaborate:"",empower:""},{id:"act-12",name:"Core setting engagement pack",inform:"",consult:"",involve:"High",collaborate:"High",empower:"High"},{id:"act-13",name:"Roadshows",inform:"High",consult:"High",involve:"Medium",collaborate:"",empower:""},{id:"act-14",name:"Briefings",inform:"High",consult:"Medium",involve:"",collaborate:"",empower:""},{id:"act-15",name:"Workshops",inform:"Medium",consult:"High",involve:"High",collaborate:"Medium",empower:""},{id:"act-16",name:"Focus Groups",inform:"Medium",consult:"High",involve:"Medium",collaborate:"",empower:""},{id:"act-17",name:"Secondments",inform:"",consult:"Medium",involve:"High",collaborate:"High",empower:"Medium"},{id:"act-18",name:"Steering Committee",inform:"Medium",consult:"High",involve:"High",collaborate:"High",empower:"High"}]}}function xs(){return{stakeholders:[],engagementLog:[],referenceData:uu(),sortConfig:{key:"name",direction:"ascending"},filterConfig:{},engagementSortConfig:{key:"stakeholderId",direction:"ascending"},engagementFilterConfig:{},mapFilterConfig:{group:"All",subGroup:"All",department:"All",relationship:"All"},mapAxisConfig:{x:"power",y:"interest"},activitySortConfig:{key:"name",direction:"ascending"},dashboardChartConfig:{chart1:"mapping",chart2:"commitmentGap",chart3:"group",chart4:"capabilityGap"},guidanceRead:!1}}function Ft(t){const n=Hn[t.interest]||0,s=Hn[t.impact]||0,a=Hn[t.power]||0,i=Hn[t.influence]||0;return{interest:n,impact:s,power:a,influence:i,pi:a+i,ii:n+s}}function Ai(t,n){return Ft(t)[n]}function wn(t,n){return t>=5&&n>=5?"Manage Closely":t>=5&&n<5?"Keep Satisfied":t<5&&n>=5?"Keep Informed":"Monitor"}const gu={"Manage Closely":"bg-red-100 text-red-800","Keep Satisfied":"bg-blue-100 text-blue-800","Keep Informed":"bg-green-100 text-green-800",Monitor:"bg-gray-200 text-gray-800"};function wt(t,n,s){const a=s==="commitments"?ya:va;if(!a[t]||!a[n])return{gap:"",colorClass:""};const i=a[n]-a[t],l={0:"bg-blue-100 text-blue-800",1:"bg-green-100 text-green-800",2:"bg-yellow-100 text-yellow-800",3:"bg-red-100 text-red-800"},o=i>=4||i<0?"bg-red-200 text-red-900 font-bold":l[i]||"";return{gap:i,colorClass:o}}function Qn(t){if(!t)return"none";const n=new Date;n.setHours(0,0,0,0);const s=Math.ceil((new Date(t).getTime()-n.getTime())/(1e3*60*60*24));return s<0?"red":s<=30?"yellow":"green"}const _o={red:"bg-red-100 text-red-800",yellow:"bg-yellow-100 text-yellow-800",green:"bg-green-100 text-green-800",none:""};function Do(t){if(!t)return"";const[n,s,a]=t.split("-");return a&&s&&n?`${a}/${s}/${n}`:t}function pu(t){return Object.fromEntries(t.map((n,s)=>[n,Ii[s%Ii.length]]))}const hu={name:"",groupSize:"",group:"",subGroup:"",department:"",relationship:"",interest:"",impact:"",power:"",influence:"",currentCommitment:"",targetCommitment:"",capabilityCurrent:"",capabilityTarget:"",targetDate:""},fu={stakeholderId:"",engagementActivity:"",activity:"",owner:"",dueDate:"",status:"Planned",notes:""},bu={name:"",inform:"",consult:"",involve:"",collaborate:"",empower:""};function xu({stakeholder:t,stakeholders:n,referenceData:s,hasEngagementLogs:a,onSave:i,onCancel:l,onAddEngagement:o,onViewEngagements:c}){const[m,u]=d.useState(t),[r,h]=d.useState(""),x=!!t.id,p=f=>u(v=>({...v,...f})),b=n.filter(f=>f.id!==m.id).sort((f,v)=>f.name.localeCompare(v.name)),C=()=>{const f=n.find(v=>v.id===r);f&&p({groupSize:f.groupSize,group:f.group,subGroup:f.subGroup,department:f.department,relationship:f.relationship,interest:f.interest,impact:f.impact,power:f.power,influence:f.influence,currentCommitment:f.currentCommitment,targetCommitment:f.targetCommitment,capabilityCurrent:f.capabilityCurrent,capabilityTarget:f.capabilityTarget})},w=wt(m.currentCommitment,m.targetCommitment,"commitments"),g=wt(m.capabilityCurrent,m.capabilityTarget,"capabilities"),k=(f,v)=>e.jsxs("div",{children:[e.jsx("label",{htmlFor:`sh-${v}`,className:"block mb-2 text-sm font-medium text-gray-900",children:f}),e.jsxs("select",{id:`sh-${v}`,value:m[v],onChange:O=>p({[v]:O.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:[e.jsx("option",{value:""}),s.ratings.map(O=>e.jsx("option",{value:O,children:O},O))]})]}),$=(f,v,O)=>e.jsxs("div",{children:[e.jsx("label",{htmlFor:`sh-${v}`,className:"block mb-2 text-sm font-medium text-gray-900",children:f}),e.jsxs("select",{id:`sh-${v}`,value:m[v],onChange:E=>p({[v]:E.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:[e.jsx("option",{value:""}),O.map(E=>e.jsx("option",{value:E,children:E},E))]})]}),G=(f,v,O,E)=>{const B=m[v];return e.jsxs("div",{children:[e.jsx("label",{htmlFor:`sh-${v}`,className:"block mb-2 text-sm font-medium text-gray-900",children:f}),e.jsxs("select",{id:`sh-${v}`,value:B,title:E[B]||void 0,onChange:Y=>p({[v]:Y.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:[e.jsx("option",{value:""}),O.map(Y=>e.jsx("option",{value:Y,title:E[Y],children:Y},Y))]}),B&&E[B]?e.jsx("p",{className:"mt-1 text-xs text-gray-500",children:E[B]}):null]})};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",children:e.jsxs("div",{className:"w-full max-w-xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-lg bg-white shadow-xl p-6",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:x?"Edit Stakeholder":"Add New Stakeholder"}),a?e.jsx("button",{type:"button",onClick:c,className:"px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full hover:bg-green-200",children:"Has Engagement Log"}):null]}),e.jsx("button",{type:"button",onClick:l,className:"text-gray-700 hover:text-gray-900 rounded-lg text-sm p-1.5",children:"Close"})]}),b.length>0?e.jsxs("div",{className:"mt-4 flex items-end gap-2 rounded-lg border border-gray-200 bg-gray-50 p-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("label",{htmlFor:"sh-copy-from",className:"block mb-2 text-sm font-medium text-gray-900",children:"Copy fields from another stakeholder"}),e.jsxs("select",{id:"sh-copy-from",value:r,onChange:f=>h(f.target.value),className:"bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:[e.jsx("option",{value:"",children:"Select a stakeholder..."}),b.map(f=>e.jsx("option",{value:f.id,children:f.name},f.id))]})]}),e.jsx("button",{type:"button",onClick:C,disabled:!r,className:"text-white bg-slate-600 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2.5",children:"Copy"})]}):null,e.jsxs("div",{className:"mt-4 grid grid-cols-1 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"sh-name",className:"block mb-2 text-sm font-medium text-gray-900",children:"Name"}),e.jsx("input",{id:"sh-name",type:"text",required:!0,value:m.name,onChange:f=>p({name:f.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"sh-groupSize",className:"block mb-2 text-sm font-medium text-gray-900",children:"Group Size"}),e.jsx("input",{id:"sh-groupSize",type:"number",value:m.groupSize,onChange:f=>p({groupSize:f.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"})]}),$("Group","group",s.groups),$("Sub-Group","subGroup",s.subGroups),$("Department","department",s.departments),$("Relationship Category","relationship",s.relationships),k("Interest","interest"),k("Impact","impact"),G("Current Commitment","currentCommitment",s.commitments,Bs),G("Target Commitment","targetCommitment",s.commitments,Bs),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"Commitment Gap"}),e.jsx("div",{className:`w-full p-2.5 text-sm rounded-lg text-center font-bold ${w.colorClass||"bg-gray-100"}`,children:w.gap})]}),k("Influence","influence"),G("Current Capability","capabilityCurrent",s.capabilities,Fs),G("Target Capability","capabilityTarget",s.capabilities,Fs),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"Capability Gap"}),e.jsx("div",{className:`w-full p-2.5 text-sm rounded-lg text-center font-bold ${g.colorClass||"bg-gray-100"}`,children:g.gap})]}),k("Power","power"),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"sh-targetDate",className:"block mb-2 text-sm font-medium text-gray-900",children:"Target Date"}),e.jsx("input",{id:"sh-targetDate",type:"date",value:m.targetDate,onChange:f=>p({targetDate:f.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"})]})]}),e.jsxs("div",{className:"flex items-center justify-between mt-6",children:[e.jsx("div",{children:x?e.jsx("button",{type:"button",onClick:o,className:"text-white bg-teal-600 hover:bg-teal-700 font-medium rounded-lg text-sm px-5 py-2.5",children:"Add Engagement Log"}):null}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{type:"button",onClick:l,className:"text-gray-700 bg-white hover:bg-gray-100 rounded-lg border border-gray-300 text-sm font-medium px-5 py-2.5",children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>{if(!m.name.trim()){window.alert("Please enter a name.");return}i(m)},className:"text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5",children:"Save Stakeholder"})]})]})]})})}function yu({log:t,stakeholders:n,activities:s,teamMembers:a,onSave:i,onCancel:l}){const[o,c]=d.useState(t),m=!!t.id,u=h=>c(x=>({...x,...h})),r=d.useMemo(()=>[...n].sort((h,x)=>h.name.localeCompare(x.name)),[n]);return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",children:e.jsxs("div",{className:"w-full max-w-lg rounded-lg bg-white shadow-xl p-6",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:m?"Edit Engagement Log":"Add Engagement Log"}),e.jsx("button",{type:"button",onClick:l,className:"text-gray-400 hover:text-gray-900 rounded-lg text-sm p-1.5",children:"Close"})]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"eng-stakeholder",className:"block mb-2 text-sm font-medium text-gray-900",children:"Stakeholder"}),e.jsxs("select",{id:"eng-stakeholder",value:o.stakeholderId,onChange:h=>u({stakeholderId:h.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:[e.jsx("option",{value:"",children:"Select stakeholder..."}),r.map(h=>e.jsxs("option",{value:h.id,children:[h.name," (",h.group||"N/A"," | ",h.subGroup||"N/A"," | ",h.department||"N/A",")"]},h.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"eng-activity-select",className:"block mb-2 text-sm font-medium text-gray-900",children:"Engagement Activity"}),e.jsxs("select",{id:"eng-activity-select",value:o.engagementActivity,onChange:h=>u({engagementActivity:h.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:[e.jsx("option",{value:"",children:"Select Activity..."}),s.map(h=>e.jsx("option",{value:h.name,children:h.name},h.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"eng-description",className:"block mb-2 text-sm font-medium text-gray-900",children:"Activity Description"}),e.jsx("textarea",{id:"eng-description",required:!0,value:o.activity,onChange:h=>u({activity:h.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-20"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"eng-owner",className:"block mb-2 text-sm font-medium text-gray-900",children:"Owner"}),e.jsxs("select",{id:"eng-owner",value:o.owner,onChange:h=>u({owner:h.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:[e.jsx("option",{value:"",children:"Unassigned"}),a.map(h=>e.jsx("option",{value:h.name,children:h.name},h.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"eng-dueDate",className:"block mb-2 text-sm font-medium text-gray-900",children:"Due Date"}),e.jsx("input",{id:"eng-dueDate",type:"date",value:o.dueDate,onChange:h=>u({dueDate:h.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"eng-status",className:"block mb-2 text-sm font-medium text-gray-900",children:"Status"}),e.jsxs("select",{id:"eng-status",value:o.status,onChange:h=>u({status:h.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:[e.jsx("option",{value:"Planned",children:"Planned"}),e.jsx("option",{value:"In Progress",children:"In Progress"}),e.jsx("option",{value:"Completed",children:"Completed"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"eng-notes",className:"block mb-2 text-sm font-medium text-gray-900",children:"Notes"}),e.jsx("textarea",{id:"eng-notes",value:o.notes,onChange:h=>u({notes:h.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-20"})]})]}),e.jsxs("div",{className:"flex justify-end gap-2 mt-6",children:[e.jsx("button",{type:"button",onClick:l,className:"text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5",children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>{if(!o.stakeholderId||!o.activity.trim()){window.alert("Please select a stakeholder and enter an activity description.");return}i(o)},className:"text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5",children:"Save Log"})]})]})})}function vu({activity:t,onSave:n,onCancel:s}){const[a,i]=d.useState(t),l=!!t.id,o=m=>i(u=>({...u,...m})),c=(m,u)=>e.jsxs("div",{children:[e.jsx("label",{htmlFor:`act-${u}`,className:"block mb-2 text-sm font-medium text-gray-900",children:m}),e.jsxs("select",{id:`act-${u}`,value:a[u],onChange:r=>o({[u]:r.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:[e.jsx("option",{value:"",children:"N/A"}),e.jsx("option",{value:"Low",children:"Low"}),e.jsx("option",{value:"Medium",children:"Medium"}),e.jsx("option",{value:"High",children:"High"})]})]});return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",children:e.jsxs("div",{className:"w-full max-w-lg rounded-lg bg-white shadow-xl p-6",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:l?"Edit Activity":"Add Activity"}),e.jsx("button",{type:"button",onClick:s,className:"text-gray-400 hover:text-gray-900 rounded-lg text-sm p-1.5",children:"Close"})]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"act-name",className:"block mb-2 text-sm font-medium text-gray-900",children:"Name"}),e.jsx("input",{id:"act-name",type:"text",value:a.name,onChange:m=>o({name:m.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c("Inform","inform"),c("Consult","consult"),c("Involve","involve"),c("Collaborate","collaborate"),c("Empower","empower")]})]}),e.jsxs("div",{className:"flex justify-end gap-2 mt-6",children:[e.jsx("button",{type:"button",onClick:s,className:"text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5",children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>{if(!a.name.trim()){window.alert("Please enter a name.");return}n(a)},className:"text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5",children:"Save Activity"})]})]})})}const Oi=[{key:"mapping",label:"Stakeholder Mapping"},{key:"group",label:"Group"},{key:"subGroup",label:"Sub-Group"},{key:"department",label:"Department"},{key:"relationship",label:"Relationship"},{key:"interest",label:"Interest"},{key:"impact",label:"Impact"},{key:"power",label:"Power"},{key:"influence",label:"Influence"},{key:"currentCommitment",label:"Current Commitment"},{key:"targetCommitment",label:"Target Commitment"},{key:"commitmentGap",label:"Commitment Gap"},{key:"capabilityCurrent",label:"Current Capability"},{key:"capabilityTarget",label:"Target Capability"},{key:"capabilityGap",label:"Capability Gap"}];function Po(t,n){if(n==="mapping"){const s=Ft(t);return wn(s.pi,s.ii)}return n==="commitmentGap"?`Gap: ${wt(t.currentCommitment,t.targetCommitment,"commitments").gap}`:n==="capabilityGap"?`Gap: ${wt(t.capabilityCurrent,t.capabilityTarget,"capabilities").gap}`:t[n]||"N/A"}function Su(t,n){const s=["#3b82f6","#10b981","#f97316","#8b5cf6","#ef4444","#f59e0b","#14b8a6","#6366f1","#d946ef","#0ea5e9"];if(t==="mapping"){const a={"Manage Closely":"#ef4444","Keep Satisfied":"#3b82f6","Keep Informed":"#10b981",Monitor:"#6b7280"};return n.map(i=>a[i]||"#6b7280")}return t.includes("Gap")?n.map(a=>{const i=parseInt(a.replace("Gap: ",""),10);return Number.isNaN(i)||i<0?"#d1d5db":i===0?"#60a5fa":i===1?"#4ade80":i===2?"#facc15":i===3?"#f87171":"#dc2626"}):n.map((a,i)=>s[i%s.length])}function wu({chartKey:t,stakeholders:n,onMetricChange:s,onSegmentClick:a}){var o;const i=d.useRef(null),l=((o=Oi.find(c=>c.key===t))==null?void 0:o.label)||"Select Data";return d.useEffect(()=>{if(!i.current)return;const c={};n.forEach(h=>{const x=Po(h,t);c[x]=(c[x]||0)+1});const m=Object.entries(c).sort((h,x)=>x[1]-h[1]),u=m.map(h=>h[0]),r=m.map(h=>h[1]);Ul(i.current,{labels:u,datasets:[{data:r,backgroundColor:Su(t,u),borderColor:"#ffffff",borderWidth:2}]},{},h=>a(u[h],t))},[t,n]),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"font-semibold text-lg",children:l}),e.jsx("select",{value:t,onChange:c=>s(c.target.value),className:"text-sm border-gray-300 rounded-md",children:Oi.map(c=>e.jsx("option",{value:c.key,children:c.label},c.key))})]}),e.jsx("div",{className:"h-64 mx-auto",style:{position:"relative",maxWidth:300},children:e.jsx("canvas",{ref:i})})]})}function Nu({state:t,trustName:n,projectName:s,onChartConfigChange:a,onOpenStakeholder:i,onClearData:l,onSaveToFile:o,onLoadFromFile:c}){const m=d.useRef(null),[u,r]=d.useState("Stakeholder Details"),[h,x]=d.useState(null),p=d.useMemo(()=>{const w={red:0,yellow:0,green:0};return t.stakeholders.forEach(g=>{const k=Qn(g.targetDate);k!=="none"&&(w[k]+=1)}),w},[t.stakeholders]),b=(w,g)=>{const k=t.stakeholders.filter($=>Po($,g)===w);r(`Filter: "${w}"`),x(k)},C=w=>{r({red:"Overdue Target Dates",yellow:"Due in <30 Days",green:"On Track"}[w]),x(t.stakeholders.filter(k=>Qn(k.targetDate)===w))};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap justify-between items-center gap-3",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Dashboard Overview"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{ref:m,type:"file",accept:".json",onChange:c,className:"hidden"}),e.jsx("button",{type:"button",onClick:l,className:"rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100",children:"Clear Data"}),e.jsx("button",{type:"button",onClick:o,className:We,children:"Save to File"}),e.jsx("button",{type:"button",onClick:()=>{var w;return(w=m.current)==null?void 0:w.click()},className:We,children:"Load from File"})]})]}),e.jsx("div",{className:"bg-white p-4 rounded-lg shadow-sm border border-gray-200",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Organisation"}),e.jsx("p",{className:"mt-1 text-lg font-semibold text-gray-900",children:n||"Your Organisation"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Project / Programme"}),e.jsx("p",{className:"mt-1 text-lg font-semibold text-gray-900",children:s||"Your Project/Programme"})]})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm border border-gray-200",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Total Stakeholders"}),e.jsx("p",{className:"mt-1 text-2xl font-semibold text-gray-900",children:t.stakeholders.length})]}),e.jsxs("button",{type:"button",onClick:()=>C("red"),className:"bg-red-100 p-4 rounded-lg shadow-sm text-left hover:bg-red-200",children:[e.jsx("h3",{className:"text-sm font-medium text-red-800",children:"Overdue Target Dates"}),e.jsx("p",{className:"mt-1 text-2xl font-semibold text-red-900",children:p.red})]}),e.jsxs("button",{type:"button",onClick:()=>C("yellow"),className:"bg-yellow-100 p-4 rounded-lg shadow-sm text-left hover:bg-yellow-200",children:[e.jsx("h3",{className:"text-sm font-medium text-yellow-800",children:"Due in <30 Days"}),e.jsx("p",{className:"mt-1 text-2xl font-semibold text-yellow-900",children:p.yellow})]}),e.jsxs("button",{type:"button",onClick:()=>C("green"),className:"bg-green-100 p-4 rounded-lg shadow-sm text-left hover:bg-green-200",children:[e.jsx("h3",{className:"text-sm font-medium text-green-800",children:"On Track"}),e.jsx("p",{className:"mt-1 text-2xl font-semibold text-green-900",children:p.green})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsx("div",{className:"lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6",children:["chart1","chart2","chart3","chart4"].map(w=>e.jsx(wu,{chartKey:t.dashboardChartConfig[w],stakeholders:t.stakeholders,onMetricChange:g=>a(w,g),onSegmentClick:b},w))}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200 lg:col-span-1",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:h?u:"Stakeholder Details"}),h?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>x(null),className:"text-sm text-indigo-600 hover:underline mb-3",children:"← Clear Selection"}),e.jsx("ul",{className:"space-y-1 overflow-y-auto",style:{maxHeight:"28rem"},children:h.length===0?e.jsx("li",{className:"text-gray-500 text-center py-4",children:"No stakeholders in this category."}):h.map(w=>e.jsx("li",{className:"flex justify-between items-center py-2 border-b border-gray-100",children:e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>i(w.id),className:"font-medium text-indigo-600 hover:underline text-left",children:w.name}),e.jsxs("p",{className:"text-sm text-gray-500",children:[w.group||"N/A"," | ",w.subGroup||"N/A"," | ",w.department||"N/A"]})]})},w.id))})]}):e.jsx("p",{className:"text-gray-500 text-sm",children:"Click a segment on any chart to view the filtered list."})]})]})]})}const ju=[{key:"name",label:"Name"},{key:"group",label:"Group / Sub-Group"},{key:"department",label:"Department"},{key:"relationship",label:"Relationship"},{key:"mapping",label:"Mapping"},{key:"commitmentGap",label:"Commitment"},{key:"capabilityGap",label:"Capability"},{key:"targetDate",label:"Target Date"}];function ku({state:t,onOpen:n,onDuplicate:s,onDelete:a,onSortChange:i,onFilterChange:l,onResetFilters:o}){const c=d.useMemo(()=>{let u=[...t.stakeholders];Object.entries(t.filterConfig).forEach(([x,p])=>{const b=p.toLowerCase();b&&(x==="mapping"?u=u.filter(C=>{const w=Ft(C);return wn(w.pi,w.ii).toLowerCase()===b}):u=u.filter(C=>(C[x]||"").toString().toLowerCase().includes(b)))});const{key:r,direction:h}=t.sortConfig;return u.sort((x,p)=>{let b,C;return r==="commitmentGap"?(b=wt(x.currentCommitment,x.targetCommitment,"commitments").gap||-1/0,C=wt(p.currentCommitment,p.targetCommitment,"commitments").gap||-1/0):r==="capabilityGap"?(b=wt(x.capabilityCurrent,x.capabilityTarget,"capabilities").gap||-1/0,C=wt(p.capabilityCurrent,p.capabilityTarget,"capabilities").gap||-1/0):r==="mapping"?(b=wn(Ft(x).pi,Ft(x).ii),C=wn(Ft(p).pi,Ft(p).ii)):(b=x[r]||"",C=p[r]||""),b<C?h==="ascending"?-1:1:b>C?h==="ascending"?1:-1:0}),u},[t.stakeholders,t.filterConfig,t.sortConfig]),m=u=>[...new Set(t.stakeholders.map(r=>r[u]))].filter(Boolean).sort();return e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Stakeholder Details"}),e.jsx("button",{type:"button",onClick:()=>n(null),className:"bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm",children:"Add Stakeholder"})]}),e.jsx(On,{search:{label:"Search name",value:t.filterConfig.name||"",placeholder:"Search by name...",onChange:u=>l("name",u)},selects:[{key:"group",label:"Filter by group",value:t.filterConfig.group||"",options:m("group"),onChange:u=>l("group",u)},{key:"subGroup",label:"Filter by sub-group",value:t.filterConfig.subGroup||"",options:m("subGroup"),onChange:u=>l("subGroup",u)},{key:"department",label:"Filter by department",value:t.filterConfig.department||"",options:m("department"),onChange:u=>l("department",u)},{key:"relationship",label:"Filter by relationship",value:t.filterConfig.relationship||"",options:m("relationship"),onChange:u=>l("relationship",u)},{key:"mapping",label:"Filter by mapping",value:t.filterConfig.mapping||"",options:["Manage Closely","Keep Satisfied","Keep Informed","Monitor"],onChange:u=>l("mapping",u)}],onReset:o}),e.jsx("div",{className:"overflow-auto",style:{maxHeight:"70vh"},children:e.jsxs("table",{className:"w-full text-sm text-left text-gray-500 border-collapse",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 sticky top-0",children:e.jsxs("tr",{children:[ju.map(u=>{const h=t.sortConfig.key===u.key?t.sortConfig.direction==="ascending"?"▲":"▼":"↕";return e.jsxs("th",{onClick:()=>i(u.key),className:"px-4 py-3 align-top cursor-pointer select-none",children:[u.label," ",e.jsx("span",{className:"text-gray-400",children:h})]},u.key)}),e.jsx("th",{className:"px-4 py-3 align-top",children:"Actions"})]})}),e.jsx("tbody",{children:c.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:9,className:"text-center py-4 text-gray-500",children:"No stakeholders match the current filters."})}):c.map(u=>{const r=wt(u.currentCommitment,u.targetCommitment,"commitments"),h=wt(u.capabilityCurrent,u.capabilityTarget,"capabilities"),x=Ft(u),p=wn(x.pi,x.ii),b=_o[Qn(u.targetDate)];return e.jsxs("tr",{onClick:()=>n(u.id),className:"bg-white border-b cursor-pointer hover:bg-gray-50",children:[e.jsx("td",{className:"px-4 py-3 font-medium text-gray-900",children:e.jsx("span",{className:"text-indigo-600 hover:underline",children:u.name})}),e.jsxs("td",{className:"px-4 py-3",children:[u.group,u.subGroup?e.jsxs("span",{className:"text-gray-400",children:[" / ",u.subGroup]}):null]}),e.jsx("td",{className:"px-4 py-3",children:u.department}),e.jsx("td",{className:"px-4 py-3",children:u.relationship}),e.jsx("td",{className:"px-4 py-3 text-center",children:e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${gu[p]}`,children:p})}),e.jsx("td",{className:`px-4 py-3 text-center ${r.colorClass}`,children:e.jsxs("span",{className:"font-medium",children:[u.currentCommitment||"-"," → ",u.targetCommitment||"-"]})}),e.jsx("td",{className:`px-4 py-3 text-center ${h.colorClass}`,children:e.jsxs("span",{className:"font-medium",children:[u.capabilityCurrent||"-"," → ",u.capabilityTarget||"-"]})}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${b}`,children:Do(u.targetDate)})}),e.jsx("td",{className:"px-4 py-3",children:e.jsxs("div",{className:"flex items-center gap-2",onClick:C=>C.stopPropagation(),children:[e.jsx(lt,{onClick:()=>n(u.id),title:"Edit stakeholder",children:e.jsx(dn,{})}),e.jsx(lt,{onClick:()=>s(u.id),title:"Duplicate stakeholder",children:e.jsx(Fm,{})}),e.jsx(lt,{onClick:()=>a(u.id),title:"Delete stakeholder",variant:"danger",children:e.jsx(mn,{})})]})})]},u.id)})})]})})]})}function Cu({log:t,stakeholderName:n,components:s,teamMembers:a,getEntry:i,onConfirm:l,onCancel:o}){var C;const[c,m]=d.useState(((C=s[0])==null?void 0:C.id)||""),u=s.find(w=>w.id===c),[r,h]=d.useState((u==null?void 0:u.lenses[0])||""),[x,p]=d.useState({id:en("action-"),text:`${n}: ${t.activity}`.trim(),owner:t.owner,timescale:t.dueDate,dueDate:t.dueDate,status:"Planned"}),b=(u==null?void 0:u.lenses)||[];return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",children:e.jsxs("div",{className:"w-full max-w-2xl rounded-lg bg-white shadow-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add to Project Plan"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"apply-component",className:"block mb-2 text-sm font-medium text-gray-900",children:"Component"}),e.jsx("select",{id:"apply-component",value:c,onChange:w=>{const g=s.find(k=>k.id===w.target.value);m(w.target.value),h((g==null?void 0:g.lenses[0])||"")},className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:s.map(w=>e.jsx("option",{value:w.id,children:w.label},w.id))})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"apply-lens",className:"block mb-2 text-sm font-medium text-gray-900",children:"Lens"}),e.jsx("select",{id:"apply-lens",value:r,onChange:w=>h(w.target.value),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:b.map(w=>e.jsx("option",{value:w,children:w},w))})]})]}),e.jsx("label",{htmlFor:"apply-text",className:"block mb-2 text-sm font-medium text-gray-900",children:"Action Text"}),e.jsx("input",{id:"apply-text",type:"text",value:x.text,onChange:w=>p(g=>({...g,text:w.target.value})),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4"}),e.jsx($i,{action:x,onChange:w=>p(g=>({...g,...w})),teamMembers:a}),e.jsxs("div",{className:"flex justify-end gap-2 mt-6",children:[e.jsx("button",{type:"button",onClick:o,className:"text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5",children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>{if(!c||!r){window.alert("Please choose a component and lens.");return}const w=i(c,r);l(c,r,{...x,readinessScore:w.score})},className:"text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5",children:"Add to Project"})]})]})})}function Eu({state:t,stakeholderMap:n,canApply:s,components:a,getEntry:i,onOpen:l,onDelete:o,onApply:c,onSortChange:m,onFilterChange:u,onResetFilters:r}){const[h,x]=d.useState(""),[p,b]=d.useState(""),[C,w]=d.useState(""),g=[{key:"stakeholderId",label:"Stakeholder"},{key:"engagementActivity",label:"Engagement Activity"},{key:"activity",label:"Activity Description"},{key:"owner",label:"Owner"},{key:"dueDate",label:"Due Date"},{key:"status",label:"Status"},{key:"notes",label:"Notes"}],k=d.useMemo(()=>Object.fromEntries(a.map(O=>[O.id,O])),[a]),$=O=>!O.linkedComponentId||!O.linkedLens||!i?null:ft(i(O.linkedComponentId,O.linkedLens).score).label,G=d.useMemo(()=>{let O=[...t.engagementLog];Object.entries(t.engagementFilterConfig).forEach(([Y,se])=>{const me=se.toLowerCase();me&&(O=O.filter(A=>(Y==="stakeholderId"?n[A.stakeholderId]||"":A[Y]||"").toString().toLowerCase().includes(me)))}),h&&(O=O.filter(Y=>{var se;return Y.linkedComponentId&&((se=k[Y.linkedComponentId])==null?void 0:se.label)===h})),p&&(O=O.filter(Y=>{var se;return Y.linkedComponentId&&String((se=k[Y.linkedComponentId])==null?void 0:se.phase)===p})),C&&(O=O.filter(Y=>$(Y)===C));const{key:E,direction:B}=t.engagementSortConfig;return O.sort((Y,se)=>{const me=E==="stakeholderId"?n[Y.stakeholderId]||"":Y[E]||"",A=E==="stakeholderId"?n[se.stakeholderId]||"":se[E]||"";return me<A?B==="ascending"?-1:1:me>A?B==="ascending"?1:-1:0}),O},[t.engagementLog,t.engagementFilterConfig,t.engagementSortConfig,n,h,p,C,k]),f=d.useMemo(()=>[...new Set(t.engagementLog.map(O=>n[O.stakeholderId]).filter(Boolean))].sort(),[t.engagementLog,n]),v=d.useMemo(()=>[...new Set(a.map(O=>O.phase))].sort((O,E)=>O-E).map(String),[a]);return e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Engagement Plan & Log"}),e.jsx("button",{type:"button",onClick:()=>l(null),className:"bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm",children:"Add Engagement Log"})]}),e.jsx(On,{selects:[{key:"stakeholder",label:"Stakeholder",value:t.engagementFilterConfig.stakeholderId||"",options:f,onChange:O=>u("stakeholderId",O)},{key:"status",label:"Status",value:t.engagementFilterConfig.status||"",options:["Planned","In Progress","Completed"],onChange:O=>u("status",O)},{key:"component",label:"Component",value:h,options:a.map(O=>O.label),onChange:x},{key:"phase",label:"Phase",value:p,options:v,onChange:b},{key:"readiness",label:"Readiness Score",value:C,options:_t.map(O=>O.label),onChange:w}],onReset:()=>{r(),x(""),b(""),w("")}}),e.jsx("div",{className:"overflow-auto",style:{maxHeight:"70vh"},children:e.jsxs("table",{className:"w-full text-sm text-left text-gray-500 border-collapse",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 sticky top-0",children:e.jsxs("tr",{children:[g.map(O=>{const B=t.engagementSortConfig.key===O.key?t.engagementSortConfig.direction==="ascending"?"▲":"▼":"↕";return e.jsxs("th",{onClick:()=>m(O.key),className:"px-4 py-3 align-top cursor-pointer select-none",children:[O.label," ",e.jsx("span",{className:"text-gray-400",children:B})]},O.key)}),e.jsx("th",{className:"px-4 py-3 align-top",children:"Link"}),e.jsx("th",{className:"px-4 py-3 align-top",children:"Actions"})]})}),e.jsx("tbody",{children:G.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:9,className:"text-center py-4 text-gray-500",children:"No engagement logs match the current filters."})}):G.map(O=>{var B;const E=_o[Qn(O.dueDate)];return e.jsxs("tr",{onClick:()=>l(O.id),className:"bg-white border-b cursor-pointer hover:bg-gray-50",children:[e.jsx("td",{className:"px-4 py-3 font-medium text-gray-900",children:n[O.stakeholderId]||"Unknown"}),e.jsx("td",{className:"px-4 py-3",children:O.engagementActivity}),e.jsx("td",{className:"px-4 py-3",children:O.activity}),e.jsx("td",{className:"px-4 py-3",children:O.owner}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${E}`,children:Do(O.dueDate)})}),e.jsx("td",{className:"px-4 py-3",children:O.status}),e.jsx("td",{className:"px-4 py-3 whitespace-pre-wrap",children:O.notes}),e.jsx("td",{className:"px-4 py-3",children:e.jsxs("div",{className:"flex flex-col gap-1",children:[O.linkedActionId?e.jsx("span",{className:"w-fit rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800",title:O.linkedComponentId?`Linked to ${((B=k[O.linkedComponentId])==null?void 0:B.label)||O.linkedComponentId} · ${O.linkedLens}`:void 0,children:"Linked"}):e.jsx("span",{className:"w-fit rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800",children:"Needs linking"}),O.stakeholderId?null:e.jsx("span",{className:"w-fit rounded-full bg-slate-200 px-2 py-0.5 text-xs font-medium text-slate-700",children:"Needs stakeholder"})]})}),e.jsx("td",{className:"px-4 py-3",children:e.jsxs("div",{className:"flex items-center gap-2",onClick:Y=>Y.stopPropagation(),children:[e.jsx(lt,{onClick:()=>l(O.id),title:"Edit engagement log",children:e.jsx(dn,{})}),s&&!O.linkedActionId?e.jsx(lt,{onClick:()=>c(O),title:"Add to project plan",children:e.jsx(Gm,{})}):null,e.jsx(lt,{onClick:()=>o(O.id),title:"Delete engagement log",variant:"danger",children:e.jsx(mn,{})})]})})]},O.id)})})]})})]})}const ys=[{key:"power",label:"Power"},{key:"influence",label:"Influence"},{key:"interest",label:"Interest"},{key:"impact",label:"Impact"}];function Iu({state:t,groups:n,groupColors:s,onFilterChange:a,onAxisChange:i,onResetFilters:l,onOpenStakeholder:o}){var $;const{group:c,subGroup:m,department:u,relationship:r}=t.mapFilterConfig,{x:h,y:x}=t.mapAxisConfig,p=[{id:"group",title:"Group",current:c},{id:"subGroup",title:"Sub-Group",current:m},{id:"department",title:"Department",current:u},{id:"relationship",title:"Relationship",current:r}],C=["power","influence"].includes(h)&&["interest","impact"].includes(x)?["bg-green-50","bg-green-50","bg-red-50","bg-red-50","bg-green-50","bg-green-50","bg-red-50","bg-red-50","bg-gray-100","bg-gray-100","bg-blue-50","bg-blue-50","bg-gray-100","bg-gray-100","bg-blue-50","bg-blue-50"]:Array(16).fill("bg-white"),w=t.stakeholders.filter(G=>(c==="All"||G.group===c)&&(m==="All"||G.subGroup===m)&&(u==="All"||G.department===u)&&(r==="All"||G.relationship===r)),g=Array.from({length:16},()=>[]);w.forEach(G=>{var O;const f=Ai(G,h),v=Ai(G,x);if(f>0&&v>0){const E=(4-v)*4+(f-1);(O=g[E])==null||O.push(G)}});const k=(($=ys.find(G=>G.key===h))==null?void 0:$.label)||"Power";return e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Stakeholder Analysis Map"}),e.jsx("button",{type:"button",onClick:l,className:"text-sm text-indigo-600 hover:underline",children:"Reset Filters"})]}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg",children:p.map(({id:G,title:f,current:v})=>{const O=[...new Set(t.stakeholders.map(E=>E[G]).filter(Boolean))].sort();return e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:f}),e.jsxs("select",{value:v,onChange:E=>a(G,E.target.value),className:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md",children:[e.jsx("option",{value:"All",children:"All"}),O.map(E=>e.jsx("option",{value:E,children:E},E))]})]},G)})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-4",children:[e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Vertical Axis (Y)"}),e.jsx("select",{value:x,onChange:G=>i("y",G.target.value),className:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md",children:ys.map(G=>e.jsx("option",{value:G.key,children:G.label},G.key))})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Horizontal Axis (X)"}),e.jsx("select",{value:h,onChange:G=>i("x",G.target.value),className:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md",children:ys.map(G=>e.jsx("option",{value:G.key,children:G.label},G.key))})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsxs("div",{className:"grid grid-cols-5 text-center text-sm font-medium text-gray-600",children:[e.jsx("div",{}),e.jsx("div",{className:"p-2 border-b-2 border-r-2 border-gray-300",children:"Low"}),e.jsx("div",{className:"p-2 border-b-2 border-r-2 border-gray-300",children:"Medium"}),e.jsx("div",{className:"p-2 border-b-2 border-r-2 border-gray-300",children:"High"}),e.jsx("div",{className:"p-2 border-b-2 border-gray-300",children:"Very High"})]}),e.jsxs("div",{className:"grid grid-cols-5",style:{height:400},children:[e.jsxs("div",{className:"grid grid-rows-4 text-center font-medium text-gray-600",children:[e.jsx("div",{className:"flex items-center justify-center p-2 border-r-2 border-gray-300",children:"Very High"}),e.jsx("div",{className:"flex items-center justify-center p-2 border-r-2 border-gray-300",children:"High"}),e.jsx("div",{className:"flex items-center justify-center p-2 border-r-2 border-gray-300",children:"Medium"}),e.jsx("div",{className:"flex items-center justify-center p-2 border-r-2 border-gray-300",children:"Low"})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-4 grid-rows-4 border-r border-b border-gray-300",children:C.map((G,f)=>e.jsx("div",{className:`relative border-t border-l border-gray-300 ${G}`,children:g[f].map((v,O)=>e.jsx("div",{title:v.name,onClick:()=>o(v.id),className:"absolute rounded-full cursor-pointer border-2 border-white shadow",style:{width:14,height:14,backgroundColor:s[v.group]||"#718096",left:10+O%4*15,top:10+Math.floor(O/4)*15}},v.id))},f))})]}),e.jsxs("div",{className:"grid grid-cols-5 text-center text-xs mt-1 text-gray-500",children:[e.jsx("div",{}),e.jsxs("div",{className:"col-span-4 font-semibold",children:[k," →"]})]})]}),e.jsxs("div",{className:"w-full md:w-64",children:[e.jsx("h4",{className:"font-semibold mb-2 text-gray-700",children:"Legend"}),e.jsx("div",{className:"space-y-1",children:n.map(G=>e.jsxs("div",{className:"flex items-center gap-2 px-1.5 py-0.5 rounded-md",children:[e.jsx("span",{className:"inline-block h-3 w-3 rounded-full",style:{backgroundColor:s[G]||"#718096"}}),e.jsx("span",{className:"text-sm text-gray-700",children:G})]},G))})]})]})]})}const Au={Low:"bg-slate-100 text-slate-700",Medium:"bg-amber-100 text-amber-800",High:"bg-indigo-100 text-indigo-800"};function Sn({value:t}){return t?e.jsx("span",{className:`px-2 py-0.5 text-xs font-medium rounded-full ${Au[t]}`,children:t}):null}function Ou({activities:t,onOpen:n,onDelete:s}){return e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Engagement Activities"}),e.jsx("button",{type:"button",onClick:()=>n(null),className:"bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm",children:"Add Activity"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsx("tr",{children:["Engagement Activities","Inform","Consult","Involve","Collaborate","Empower","Actions"].map(a=>e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:a},a))})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map(a=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:a.name}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm",children:e.jsx(Sn,{value:a.inform})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm",children:e.jsx(Sn,{value:a.consult})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm",children:e.jsx(Sn,{value:a.involve})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm",children:e.jsx(Sn,{value:a.collaborate})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm",children:e.jsx(Sn,{value:a.empower})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(lt,{onClick:()=>n(a.id),title:"Edit activity",children:e.jsx(dn,{})}),e.jsx(lt,{onClick:()=>s(a.id),title:"Delete activity",variant:"danger",children:e.jsx(mn,{})})]})})]},a.id))})]})})]})}function Ri({title:t,levels:n,descriptions:s}){return e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"font-semibold mb-2 text-gray-800",children:t}),e.jsx("table",{className:"w-full text-sm text-left",children:e.jsx("tbody",{className:"divide-y divide-gray-200",children:n.map(a=>e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-3 font-medium text-gray-800 align-top whitespace-nowrap",children:a}),e.jsx("td",{className:"py-2 text-gray-600",children:s[a]})]},a))})})]})}function Wn({title:t,values:n}){return e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"font-semibold mb-2 text-gray-800",children:t}),n.length>0?e.jsx("ul",{className:"flex flex-wrap gap-1.5",children:n.map(s=>e.jsx("li",{className:"rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-xs text-gray-700",children:s},s))}):e.jsx("p",{className:"text-sm text-gray-400 italic",children:"None added yet."})]})}function Ru({referenceLists:t,onGoToProjectDetails:n}){return e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Reference Data"}),n?e.jsx("button",{type:"button",onClick:n,className:"text-sm font-medium text-indigo-600 hover:text-indigo-800 hover:underline",children:"Manage in Project Details →"}):null]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Groups, Sub-Groups, Departments and Relationships are shared across the Adoption Engine and are managed from ",e.jsx("strong",{children:"Project Details"}),". The commitment and capability scales below are fixed and shown here for reference."]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(Wn,{title:"Groups",values:t.groups}),e.jsx(Wn,{title:"Sub-Groups",values:t.subGroups}),e.jsx(Wn,{title:"Departments",values:t.departments}),e.jsx(Wn,{title:"Relationships",values:t.relationships})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(Ri,{title:"Commitment levels",levels:Object.keys(ya),descriptions:Bs}),e.jsx(Ri,{title:"Capability levels",levels:Object.keys(va),descriptions:Fs})]})]})}function _u({guidanceRead:t,onMarkRead:n}){return e.jsx("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:e.jsxs("div",{className:"max-w-none text-gray-700 space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Guidance for Using the Stakeholder Analysis Tool"}),e.jsx("h3",{className:"text-lg font-semibold",children:"Introduction"}),e.jsx("p",{children:"Stakeholder analysis is a critical process for identifying individuals or groups who can impact or are impacted by a project. This tool helps you systematically analyse your stakeholders, devise engagement strategies, and track your progress."}),e.jsx("h3",{className:"text-lg font-semibold",children:"Core Features: Managing Your Data"}),e.jsxs("ul",{className:"list-disc ml-6 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Save to File:"})," saves your entire analysis (stakeholders, engagement logs, reference data) to a single JSON file. Use a descriptive filename that includes the date."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Load from File:"})," loads a previously saved JSON file, replacing any data currently in the tool. You will be asked to confirm this, as it cannot be undone."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Clear Data:"})," resets the tool to a blank state. You will be asked to confirm, as this is irreversible."]})]}),e.jsx("h3",{className:"text-lg font-semibold",children:"Step-by-Step Guide"}),e.jsx("h4",{className:"font-semibold",children:"Step 1: Check Your Project (Dashboard Tab)"}),e.jsx("p",{children:"Your organisation and project name are shown on the Dashboard, pulled from Project Details."}),e.jsx("h4",{className:"font-semibold",children:"Step 2: Check Your Terms (Reference Data Tab)"}),e.jsx("p",{children:"Groups, Sub-Groups, Departments and Relationships are set up once from Project Details and shared across the Adoption Engine. The Reference Data tab also shows what each Commitment and Capability level means."}),e.jsx("h4",{className:"font-semibold",children:"Step 3: Add Your Stakeholders (Stakeholders Tab)"}),e.jsxs("ul",{className:"list-disc ml-6 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Interest, Impact, Power & Influence:"})," the foundation of the analysis map - assess each stakeholder from Low to Very High."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Commitment (Current vs Target):"})," where the stakeholder is now vs where you need them to be - the Commitment Gap is calculated automatically."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Capability (Current vs Target):"})," their current ability to adopt the change vs what they will need - the Capability Gap is calculated automatically."]}),e.jsx("li",{children:"Sorting, filtering, editing, duplicating and deleting are all available on the main table."})]}),e.jsx("h4",{className:"font-semibold",children:"Step 4: Create Your Action Plan (Engagement Plan Tab)"}),e.jsx("p",{children:"Log and track communications - select the stakeholder, set an owner, due date and status (Planned, In Progress, Completed) for each activity."}),e.jsx("h4",{className:"font-semibold",children:"Step 5: Visualise and Prioritise (Analysis Map & Dashboard)"}),e.jsx("p",{children:"The Analysis Map plots stakeholders on a grid based on power, influence, interest and impact - use the filters to narrow the view. The Dashboard's doughnut charts let you click a segment to drill into the matching stakeholders."}),e.jsx("h3",{className:"text-lg font-semibold",children:"Good Practice Tips"}),e.jsxs("ul",{className:"list-disc ml-6 space-y-1",children:[e.jsx("li",{children:"Stakeholder analysis is a living process - revisit it regularly as attitudes and situations change."}),e.jsx("li",{children:"Use Save to File / Load from File to share your analysis with team members for a more robust view."}),e.jsx("li",{children:"Focus on the gaps - the Commitment Gap and Capability Gap are your primary indicators for where an engagement or training effort is required."})]}),t?e.jsx("p",{className:"text-sm text-green-700 font-medium",children:"✓ Guidance read - the rest of the tool is unlocked."}):e.jsx("div",{className:"pt-2",children:e.jsx("button",{type:"button",onClick:n,className:"bg-indigo-600 text-white px-5 py-2.5 rounded-md hover:bg-indigo-700 text-sm font-medium",children:"I've read this - continue"})})]})})}function Du({embedded:t=!1,trustName:n="",projectName:s="",teamMembers:a=[],referenceLists:i=es,onGoToProjectDetails:l,components:o=[],getEntry:c,onEntryUpdate:m}={}){const[u,r]=d.useState(()=>dt(bs)||xs()),[h,x]=d.useState(()=>{var F;return(F=dt(bs))!=null&&F.guidanceRead?"dashboard":"guidance"}),[p,b]=d.useState(null),[C,w]=d.useState(null),[g,k]=d.useState(null),[$,G]=d.useState(null),f=!!(c&&m&&o.length);d.useEffect(()=>{st(bs,u)},[u]),d.useEffect(()=>{if(!c||!o.length)return;const F=new Set(u.engagementLog.map(te=>te.linkedActionId).filter(Boolean)),H=[];o.forEach(te=>{te.lenses.forEach($e=>{var Ge;(((Ge=c(te.id,$e))==null?void 0:Ge.actions)||[]).forEach(T=>{T.actionType!=="Engagement"||F.has(T.id)||H.push({id:en("eng-"),stakeholderId:"",engagementActivity:"",activity:T.text,owner:T.owner,dueDate:T.dueDate||"",status:T.status==="Completed"?"Completed":T.status==="Planned"?"Planned":"In Progress",notes:"",linkedComponentId:te.id,linkedLens:$e,linkedActionId:T.id})})})}),H.length>0&&r(te=>({...te,engagementLog:[...te.engagementLog,...H]}))},[o,c,u.engagementLog]);const v=d.useMemo(()=>pu(i.groups),[i.groups]),O=d.useMemo(()=>({...u.referenceData,groups:i.groups,subGroups:i.subGroups,departments:i.departments,relationships:i.relationships,commitments:Object.keys(ya),capabilities:Object.keys(va)}),[u.referenceData,i]),E=d.useMemo(()=>Object.fromEntries(u.stakeholders.map(F=>[F.id,F.name])),[u.stakeholders]),B=F=>{r(H=>({...H,...F}))},Y=F=>{const H=F?u.stakeholders.find(te=>te.id===F):null;b(H||{id:"",...hu})},se=F=>{r(H=>F.id?{...H,stakeholders:H.stakeholders.map(te=>te.id===F.id?F:te)}:{...H,stakeholders:[...H.stakeholders,{...F,id:en()}]}),b(null)},me=F=>{window.confirm("Are you sure you want to delete this stakeholder? This will also delete all associated engagement logs.")&&r(H=>({...H,stakeholders:H.stakeholders.filter(te=>te.id!==F),engagementLog:H.engagementLog.filter(te=>te.stakeholderId!==F)}))},A=F=>{const H=u.stakeholders.find(te=>te.id===F);H&&r(te=>({...te,stakeholders:[...te.stakeholders,{...H,id:en(),name:`${H.name} (copy)`}]}))},pe=(F,H)=>{const te=F?u.engagementLog.find($e=>$e.id===F):null;w(te||{id:"",...fu,stakeholderId:H||""})},M=F=>{r(H=>F.id?{...H,engagementLog:H.engagementLog.map(te=>te.id===F.id?F:te)}:{...H,engagementLog:[...H.engagementLog,{...F,id:en("eng-")}]}),w(null)},J=F=>{window.confirm("Are you sure you want to delete this engagement log?")&&r(H=>({...H,engagementLog:H.engagementLog.filter(te=>te.id!==F)}))},Ee=F=>{const H=F?u.referenceData.engagementActivities.find(te=>te.id===F):null;k(H||{id:"",...bu})},q=F=>{r(H=>{const te=F.id?H.referenceData.engagementActivities.map($e=>$e.id===F.id?F:$e):[...H.referenceData.engagementActivities,{...F,id:en("act-")}];return{...H,referenceData:{...H.referenceData,engagementActivities:te}}}),k(null)},re=F=>{window.confirm("Are you sure you want to delete this activity?")&&r(H=>({...H,referenceData:{...H.referenceData,engagementActivities:H.referenceData.engagementActivities.filter(te=>te.id!==F)}}))},ce=F=>{r(H=>({...H,sortConfig:{key:F,direction:H.sortConfig.key===F&&H.sortConfig.direction==="ascending"?"descending":"ascending"}}))},j=(F,H)=>{r(te=>({...te,filterConfig:{...te.filterConfig,[F]:H}}))},Z=F=>{r(H=>({...H,engagementSortConfig:{key:F,direction:H.engagementSortConfig.key===F&&H.engagementSortConfig.direction==="ascending"?"descending":"ascending"}}))},le=(F,H)=>{r(te=>({...te,engagementFilterConfig:{...te.engagementFilterConfig,[F]:H}}))},Ne=()=>{const F=`stakeholder-analysis-${new Date().toISOString().slice(0,10)}.json`;Yt(F,JSON.stringify(u,null,2),"application/json")},fe=F=>{var $e;const H=($e=F.target.files)==null?void 0:$e[0];if(!H)return;if(!window.confirm("Loading a file will replace all current data. This cannot be undone. Continue?")){F.target.value="";return}const te=new FileReader;te.onload=Ge=>{var T;try{const ue=JSON.parse(String(((T=Ge.target)==null?void 0:T.result)||"")),oe=xs();r({...oe,...ue,referenceData:{...oe.referenceData,...ue.referenceData||{}}})}catch(ue){console.error("Load error:",ue),window.alert("Could not load this file. Please check it is a valid export from this tool.")}finally{F.target.value=""}},te.readAsText(H)},R=()=>{window.confirm("This will completely reset the tool to a blank state. This cannot be undone. Continue?")&&r(xs())},z=p?u.engagementLog.some(F=>F.stakeholderId===p.id):!1,xe=[{key:"guidance",label:"Guidance"},{key:"reference",label:"Reference Data"},{key:"stakeholders",label:"Stakeholders"},{key:"activities",label:"Activities"},{key:"dashboard",label:"Dashboard",gapBefore:!0},{key:"engagement",label:"Engagement Plan"},{key:"map",label:"Analysis Map"}];return e.jsxs("div",{children:[e.jsx("header",{className:t?"flex flex-wrap items-center justify-between gap-3 pb-4":"bg-white border-b border-slate-200 shadow-sm px-6 py-4",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg font-bold text-slate-800",children:"Stakeholder Analysis and Management Tool"}),e.jsx("p",{className:"text-xs text-slate-500",children:"The Analysis Map plots your Details tab results. It will group your individuals and groups into a pivot table working on a Interest/Impact vs Power/Influence axis. The table divides into four categories - Low/Medium/High/Very High. If an individual is high or very high on both axis they have the potential to be extremely influential to your change project/programme, either positively or negatively."})]})}),e.jsx("div",{className:"mb-6 border-b border-gray-200",children:e.jsx("nav",{className:"flex flex-wrap -mb-px",children:xe.map(F=>{const H=!u.guidanceRead&&F.key!=="guidance";return e.jsxs("button",{type:"button",onClick:()=>{H||x(F.key)},disabled:H,"aria-disabled":H,title:H?"Read the Guidance tab first to unlock":void 0,className:`whitespace-nowrap py-3 px-5 border-b-2 font-medium text-sm flex items-center gap-1.5 ${F.gapBefore?"ml-4":""} ${H?"border-transparent text-gray-300 cursor-not-allowed":h===F.key?"border-indigo-600 text-indigo-600 bg-indigo-50":"border-transparent text-gray-500 hover:text-indigo-600 hover:border-indigo-300"}`,children:[H?e.jsx(Um,{}):null,F.label]},F.key)})})}),h==="dashboard"?e.jsx(Nu,{state:u,trustName:n,projectName:s,onChartConfigChange:(F,H)=>B({dashboardChartConfig:{...u.dashboardChartConfig,[F]:H}}),onOpenStakeholder:F=>Y(F),onClearData:R,onSaveToFile:Ne,onLoadFromFile:fe}):null,h==="stakeholders"?e.jsx(ku,{state:u,onOpen:Y,onDuplicate:A,onDelete:me,onSortChange:ce,onFilterChange:j,onResetFilters:()=>B({filterConfig:{},sortConfig:{key:"name",direction:"ascending"}})}):null,h==="engagement"?e.jsx(Eu,{state:u,stakeholderMap:E,canApply:f,components:o,getEntry:c,onOpen:pe,onDelete:J,onApply:G,onSortChange:Z,onFilterChange:le,onResetFilters:()=>B({engagementFilterConfig:{},engagementSortConfig:{key:"stakeholderId",direction:"ascending"}})}):null,h==="map"?e.jsx(Iu,{state:u,groups:i.groups,groupColors:v,onFilterChange:(F,H)=>B({mapFilterConfig:{...u.mapFilterConfig,[F]:H}}),onAxisChange:(F,H)=>B({mapAxisConfig:{...u.mapAxisConfig,[F]:H}}),onResetFilters:()=>B({mapFilterConfig:{group:"All",subGroup:"All",department:"All",relationship:"All"}}),onOpenStakeholder:F=>Y(F)}):null,h==="activities"?e.jsx(Ou,{activities:u.referenceData.engagementActivities,onOpen:Ee,onDelete:re}):null,h==="reference"?e.jsx(Ru,{referenceLists:i,onGoToProjectDetails:l}):null,h==="guidance"?e.jsx(_u,{guidanceRead:u.guidanceRead,onMarkRead:()=>B({guidanceRead:!0})}):null,p?e.jsx(xu,{stakeholder:p,stakeholders:u.stakeholders,referenceData:O,hasEngagementLogs:z,onSave:se,onCancel:()=>b(null),onAddEngagement:()=>{const F=p.id;b(null),pe(null,F)},onViewEngagements:()=>{b(null),x("engagement"),B({engagementFilterConfig:{stakeholderId:p.name}})}}):null,C?e.jsx(yu,{log:C,stakeholders:u.stakeholders,activities:u.referenceData.engagementActivities,teamMembers:a,onSave:M,onCancel:()=>w(null)}):null,g?e.jsx(vu,{activity:g,onSave:q,onCancel:()=>k(null)}):null,$&&c&&m?e.jsx(Cu,{log:$,stakeholderName:E[$.stakeholderId]||"Unknown",components:o,teamMembers:a,getEntry:c,onConfirm:(F,H,te)=>{const $e=c(F,H);m(F,H,{...$e,actions:[...$e.actions,te]}),r(Ge=>({...Ge,engagementLog:Ge.engagementLog.map(T=>T.id===$.id?{...T,linkedComponentId:F,linkedLens:H,linkedActionId:te.id}:T)})),G(null)},onCancel:()=>G(null)}):null]})}const vs="nhs-digital-adoption-user-settings",Ss="nhs-digital-adoption-report-reminder-dismissed",Pu="nhs-digital-adoption-engagement",ws="nhs-digital-adoption-current-user-id",_i="Default",$u=5*1024*1024,Tu=new Set(["application/json","text/json"]),Lu="Unknown user",Mu=["introduction","engine-explained","project-details","profile"],Bu={1:"#3b82f6",2:"#8b5cf6",3:"#f59e0b",4:"#f97316",5:"#22c55e"},Fu={red:"test-data/adoption-phase1-red.json",amber:"test-data/adoption-phase2-amber.json",green:"test-data/adoption-phase3-green.json"},Ns={name:"",themeColor:"#005eb8",profileImageDataUrl:"",darkMode:!1,colorAccessibilityMode:"standard",phaseFocusMode:"auto",manualPhaseFocus:1,hideGuidedWorkflow:!1,showAdditionalGuidanceLinks:!0,showExternalLinksSection:!1,showActionPriorityColours:!1};function Gu(t){return{...t,linkedTargets:(t.linkedTargets||[]).map(n=>({componentId:n.componentId,lens:n.lens}))}}function Uu(t,n){return`${t}:${n}`}function Di(t){return t.orgProfile.trustName||t.orgProfile.projectName?!1:!Object.values(t.currentDraft).some(n=>Object.values(n).some(s=>s.score>0))}function Pi(t){return!t.trustName.trim()}function Hu(t){var n;if(!((n=t.evidence)!=null&&n.trim()))return!1;try{const s=JSON.parse(t.evidence);return Array.isArray(s)?s.length>0:!!t.evidence.trim()}catch{return!!t.evidence.trim()}}function Wu(t){return t.trim()||Lu}function Vu(t,n,s){const a=(t.teamMembers||[]).find(i=>i.id===n);return Wu((a==null?void 0:a.name)||s)}function qu(t,n,s){var i;const a=sr[t];return((i=a==null?void 0:a[n])==null?void 0:i[s])||Jn[s]||Jn[0]}function Yu(t=new Date){const n=String(t.getMonth()+1).padStart(2,"0");return`${t.getFullYear()}-${n}`}function Ku(t=new Date){return new Date(t.getFullYear(),t.getMonth()-1,1).toLocaleString("en-GB",{month:"short",year:"numeric"})}function zu(t){const n=new TextEncoder().encode(t);let s="";return n.forEach(a=>{s+=String.fromCharCode(a)}),window.btoa(s)}function Ju(t,n=76){const s=[];for(let a=0;a<t.length;a+=n)s.push(t.slice(a,a+n));return s.join(`\r
`)}function Xu(t=new Date){return t.toLocaleString("en-GB",{month:"short",year:"numeric"})}function lg(){var Xt,fn;const t=ln,n=d.useMemo(()=>[...Cn],[]),[s,a]=d.useState(t[0].id),[i,l]=d.useState(!1),[o,c]=d.useState(()=>{let y={};try{const K=dt(mi);y=Zs(qn(K))}catch(K){console.warn("Ignoring invalid persisted adoption data.",K)}const D=Kn({view:"dashboard",orgProfile:y==null?void 0:y.orgProfile,currentDraft:y==null?void 0:y.currentDraft,objectives:y==null?void 0:y.objectives,suppressedAutoActions:y==null?void 0:y.suppressedAutoActions,auditLog:y==null?void 0:y.auditLog,history:y==null?void 0:y.history,phaseOverrides:y==null?void 0:y.phaseOverrides,pathwayChecks:y==null?void 0:y.pathwayChecks,raidItems:y==null?void 0:y.raidItems});return D.orgProfile.cstId||(D.orgProfile={...D.orgProfile,cstId:_a()}),Ot(D)}),[m,u]=d.useState(()=>Di(o)?"introduction":"dashboard"),[r,h]=d.useState(""),x=yt("vision-get-started"),[p,b]=d.useState(()=>dt(ws)||""),C=Vt.useRef(p);d.useEffect(()=>{C.current=p},[p]);const[w,g]=d.useState(null),[k,$]=d.useState(()=>{const y=dt(vs);return{...Ns,...y}}),G=Vt.useRef(k.name);d.useEffect(()=>{G.current=k.name},[k.name]);const f=Vt.useRef(null),v=Vt.useRef(null),[O,E]=d.useState(""),B=Vt.useRef(null),Y=d.useMemo(()=>Yu(),[]),[se,me]=d.useState(()=>dt(Ss)||{}),[A,pe]=d.useState(!0),[M,J]=d.useState([]),[Ee,q]=d.useState({1:!0}),[re,ce]=d.useState({intro:!0,overview:!0,tools:!0}),[j,Z]=d.useState(null),[le,Ne]=d.useState(!0),[fe,R]=d.useState("medium"),z=Vt.useRef({}),xe=d.useMemo(()=>{const y=new Date,D=Ku(y),K=y.getDate()===1;return{previousMonthLabel:D,isFirstDayOfMonth:K,shouldNotify:K}},[o.history]),[F,H]=d.useState("test@test.com"),[te,$e]=d.useState(""),[Ge,T]=d.useState(""),ue=Xu(),oe=d.useCallback((y,D)=>(o.currentDraft[y]||(o.currentDraft[y]={}),o.currentDraft[y][D]||(o.currentDraft[y][D]=cs()),o.currentDraft[y][D]),[o]),Oe=k.showAdditionalGuidanceLinks!==!1,De=d.useMemo(()=>{const y=hr(o,t);return{...y,nextSteps:y.nextSteps.map(D=>({...D,toolkitLinks:zn(_i,D.componentId,"inputs",void 0,Oe).slice(0,3)}))}},[o,Oe]),Le=k.phaseFocusMode==="manual"&&k.manualPhaseFocus?k.manualPhaseFocus:De.currentPhase;d.useEffect(()=>{var D;if(m!=="assessment")return;const y=(D=t.find(K=>K.id===s))==null?void 0:D.phase;y&&q(K=>({...K,[y]:!0}))},[s,m]),d.useEffect(()=>{m==="where-am-i-now"&&l(!0)},[m]),d.useEffect(()=>{const D={introduction:"intro","engine-explained":"intro","project-details":"intro","where-am-i-now":"intro",dashboard:"overview","daily-checkin":"overview","action-plan":"overview","roadmap-view":"overview","highlight-builder":"tools","force-field-analysis":"tools",compare:"tools","change-impact-assessment":"tools","stakeholder-analysis":"tools","raid-log":"tools",benefits:"tools","audit-log":"tools"}[m];D&&ce(K=>({...K,[D]:!0}))},[m]);const Ue=yr(o,y=>ks(y)||t[0],oe).sort((y,D)=>{const K=y.action.owner.localeCompare(D.action.owner);return K!==0?K:y.component.localeCompare(D.component)});d.useEffect(()=>{st(mi,o)},[o]),d.useEffect(()=>{st(vs,k)},[k]),d.useEffect(()=>{st(ws,p)},[p]),d.useEffect(()=>{st(Ss,se)},[se]),d.useEffect(()=>{Pi(o.orgProfile)&&!Mu.includes(m)&&u("introduction")},[o.orgProfile,m]),d.useEffect(()=>{m==="dashboard"&&f.current&&setTimeout(()=>{var K,ge,ae;const y=(K=f.current)==null?void 0:K.querySelector("#adoption-radar-chart");if(y){const ke=xr(o,n,t,oe);rn(y,ke)}const D=(ge=f.current)==null?void 0:ge.querySelector("#adoption-component-radar-chart");if(D){const ke=Is(t,oe,Le);rn(D,ke,{maintainAspectRatio:!1,plugins:{tooltip:{callbacks:{label:we=>{var Fe;const Be=((Fe=we.dataset)==null?void 0:Fe.label)||"";if(Be.startsWith("Exemplar")||Be==="Target Average")return Be;const gt=Number(we.raw);return`${Be}: ${ft(gt).label}`}}}},scales:{r:{min:-1,max:5,ticks:{display:!0,stepSize:1,backdropColor:"transparent",callback:we=>Number(we)<0?"":ft(Number(we)).label},pointLabels:{padding:28}}}},we=>{const Be=t[we];Be&&ee(Be.id)})}if(o.history.length>0){const ke=(ae=f.current)==null?void 0:ae.querySelector("#adoption-line-chart");if(ke){const we={labels:o.history.map(Be=>Be.monthLabel),datasets:[{label:"Adoption Score",data:o.history.map(Be=>Be.overallPercentage||0),borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",fill:!0,tension:.4}]};lo(ke,we)}}},100)},[m,o,oe,n,t,Le,le,fe]),d.useEffect(()=>{typeof document<"u"&&(document.documentElement.dataset.nhsThemeMode=k.darkMode?"dark":"light")},[k.darkMode]),d.useEffect(()=>{var D;const y=m==="assessment"?`component:${s}`:`view:${m}`;(D=z.current[y])==null||D.scrollIntoView({block:"nearest",behavior:"smooth"})},[s,m]);const N=()=>typeof window>"u"?!1:window.innerWidth<1024,W=d.useCallback(()=>{var y;(y=v.current)==null||y.scrollTo({top:0,behavior:"auto"})},[]),P=d.useCallback(y=>{u(D=>D===y?D:(J(K=>[D,...K].slice(0,20)),y)),N()&&l(!1)},[]),L=y=>{P(y)},X=d.useCallback(()=>{J(y=>{const[D,...K]=y;return D?(u(D),window.innerWidth<1024&&l(!1),K):(window.location.hash="#/",y)})},[]),ee=d.useCallback(y=>{ks(y)&&(a(y),P("assessment"),W())},[P,W]),[ye,Ce]=d.useState(null),Re=d.useCallback((y,D,K)=>{Ce({lens:D,actionId:K}),ee(y)},[ee]);d.useEffect(()=>{W()},[W,m]);function _e(y,D){if(!D.length)return y.auditLog;const K=Vu(y.orgProfile,C.current,G.current||""),ge=D.map(ae=>Wc({actor:K,eventType:ae.eventType,entityType:ae.entityType,entityId:ae.entityId,summary:ae.summary,trustName:ae.trustName??y.orgProfile.trustName,projectName:ae.projectName??y.orgProfile.projectName,componentId:ae.componentId,lens:ae.lens,reason:ae.reason,before:ae.before,after:ae.after,source:ae.source,importedAt:ae.importedAt}));return ss([...y.auditLog||[],...ge])}const He=d.useCallback((y,D,K)=>{c(ge=>{var Fe;const ae=((Fe=ge.currentDraft[y])==null?void 0:Fe[D])||cs(),ke={...ge,currentDraft:{...ge.currentDraft,[y]:{...ge.currentDraft[y],[D]:Gi(K)}}},we=[];ae.score!==K.score&&we.push({eventType:"entry-score-updated",entityType:"entry",entityId:`${y}:${D}`,summary:`Updated readiness score for ${y} / ${D}: ${ae.score} -> ${K.score}`,componentId:y,lens:D,before:{score:ae.score},after:{score:K.score},source:"local"}),(ae.rationale||"")!==(K.rationale||"")&&we.push({eventType:"entry-rationale-updated",entityType:"entry",entityId:`${y}:${D}`,summary:`Updated rationale for ${y} / ${D}`,componentId:y,lens:D,before:{rationale:ae.rationale||""},after:{rationale:K.rationale||""},source:"local"}),(ae.evidence||"")!==(K.evidence||"")&&we.push({eventType:"entry-evidence-updated",entityType:"entry",entityId:`${y}:${D}`,summary:`Updated evidence for ${y} / ${D}`,componentId:y,lens:D,before:{evidence:ae.evidence||""},after:{evidence:K.evidence||""},source:"local"});const Be=new Map(ae.actions.map(Ie=>[Ie.id,Ie]));return K.actions.forEach(Ie=>{const Ve=Be.get(Ie.id);if(!Ve){we.push({eventType:"action-created",entityType:"action",entityId:Ie.id,summary:`Created action in ${y} / ${D}`,componentId:y,lens:D,after:{text:Ie.text,status:Ie.status,owner:Ie.owner,actionType:Ie.actionType},source:"local"});return}const Et=JSON.stringify({text:Ve.text,status:Ve.status,owner:Ve.owner,actionType:Ve.actionType,notes:Ve.notes,dueDate:Ve.dueDate,startDate:Ve.startDate,evidence:Ve.evidence}),pt=JSON.stringify({text:Ie.text,status:Ie.status,owner:Ie.owner,actionType:Ie.actionType,notes:Ie.notes,dueDate:Ie.dueDate,startDate:Ie.startDate,evidence:Ie.evidence});Et!==pt&&we.push({eventType:"action-updated",entityType:"action",entityId:Ie.id,summary:`Updated action in ${y} / ${D}`,componentId:y,lens:D,before:{text:Ve.text,status:Ve.status,owner:Ve.owner,actionType:Ve.actionType},after:{text:Ie.text,status:Ie.status,owner:Ie.owner,actionType:Ie.actionType},source:"local"})}),{...Ot(ke),auditLog:_e(ge,we)}})},[_e]),mt=d.useCallback((y,D,K,ge)=>{const ae=oe(y,D);He(y,D,{...ae,actions:ae.actions.map(ke=>ke.id===K?{...ke,status:nt(ge)}:ke)})},[oe,He]),at=d.useCallback((y,D,K,ge)=>{const ae=oe(y,D).actions.find(we=>we.id===K);if(nt(ge)==="Completed"&&ae!==void 0&&!Hu(ae)&&!dt(Nn)){Z({componentId:y,lens:D,actionId:K,status:ge});return}mt(y,D,K,ge)},[mt,oe]),ut=d.useCallback((y,D)=>{c(K=>{const ge=K.objectives[y]||[],ae={...K,objectives:{...K.objectives,[y]:D}};return JSON.stringify(ge)!==JSON.stringify(D)?{...ae,auditLog:_e(K,[{eventType:"objectives-updated",entityType:"objective",entityId:y,summary:`Updated component outcomes for ${y}`,componentId:y,before:{objectiveCount:ge.length},after:{objectiveCount:D.length},source:"local"}])}:ae})},[_e]),zt=d.useCallback(y=>{c(D=>({...D,raidItems:y}))},[]),[Jt,I]=d.useState(null),V=d.useCallback(y=>{I(y),L("raid-log")},[L]),ne=d.useCallback(y=>{c(D=>({...D,benefits:y}))},[]),ve=d.useCallback(y=>{c(D=>({...D,benefitTracker:y}))},[]),[Pe,Ye]=d.useState(null),ze=d.useCallback(y=>{Ye(y),L("benefits")},[L]),Te=d.useCallback(y=>{const D=ao(o.orgProfile);if(D.isValid)return!0;const K=D.errors.map(ge=>`- ${ge.message}`).join(`
`);return window.confirm(`${y} has CST warnings:

${K}

Continue anyway?`)},[o.orgProfile]),Se=d.useCallback(y=>{E(y)},[]),it=d.useCallback(()=>{if(!Te("Export"))return;const D=ui(o);Yt(`adoption-assessment-${(o.orgProfile.trustName||"export").replace(/\s+/g,"_")}.json`,JSON.stringify(D,null,2),"application/json"),Se("Assessment export downloaded.")},[Se,Te,o]),ot=d.useCallback(()=>{var y;(y=B.current)==null||y.click()},[]),Dt=d.useCallback(async y=>{var ae,ke,we,Be;const D=(ae=y.target.files)==null?void 0:ae[0];if(!D)return;const K=D.name.toLowerCase().endsWith(".json"),ge=!D.type||Tu.has(D.type);if(!K||!ge){Se("Import failed. Please choose a valid JSON file."),window.alert("Import failed. Please choose a valid JSON file."),y.target.value="";return}if(D.size>$u){Se("Import failed. The selected file is larger than 5 MB."),window.alert("Import failed. The selected file is larger than 5 MB."),y.target.value="";return}try{const gt=await D.text(),Fe=qn(JSON.parse(gt)),Ie=()=>{c(Lt=>{const xt=Ot(gi(Fe,Lt));return xt.orgProfile.cstId||(xt.orgProfile={...xt.orgProfile,cstId:_a()}),{...xt,auditLog:_e(xt,[{eventType:"data-imported",entityType:"system",summary:`Imported assessment data from ${D.name}`,after:{fileName:D.name},source:"local"}])}}),u("dashboard"),Se("Assessment import complete. Dashboard updated.")};if(Di(o)){Ie();return}const Ve=(ke=Fe.orgProfile)==null?void 0:ke.cstId,Et=o.orgProfile.cstId,pt=o.orgProfile.projectName||o.orgProfile.trustName||"your currently loaded programme",Tt=((we=Fe.orgProfile)==null?void 0:we.projectName)||((Be=Fe.orgProfile)==null?void 0:Be.trustName)||D.name;if(Ve&&Ve!==Et){if(!window.confirm(`"${Tt}" looks like a different programme than "${pt}".

Importing will replace everything currently loaded. Continue?`)){Se("Import cancelled.");return}Ie();return}if(!Ve&&!window.confirm(`"${Tt}" doesn't carry a programme ID (it may predate this feature).

Click OK to compare it against "${pt}" and merge item by item, or Cancel to load it as a different programme (replace everything).`)){Ie();return}const It=xd(o,Fe);if(!It.hasConflicts){c(Lt=>{const xt=Ot(bi(Lt,Fe,{}));return{...xt,auditLog:_e(xt,[{eventType:"data-imported",entityType:"system",summary:It.autoMergeSummary.length?`Merged import from ${D.name} (${It.autoMergeSummary.join(", ")})`:`Imported ${D.name} - no changes (already up to date)`,after:{fileName:D.name},source:"local"}])}}),u("dashboard"),Se(It.autoMergeSummary.length?`Merged automatically: ${It.autoMergeSummary.join(", ")}.`:"Already up to date - nothing to import.");return}g({file:D,parsed:Fe,report:It})}catch{Se("Import failed. Please verify the file contents."),window.alert("Unable to import adoption assessment. Please verify the file contents.")}finally{y.target.value=""}},[Se,_e,o]),kt=d.useCallback(y=>{if(!w)return;const{file:D,parsed:K}=w,ge=Object.keys(y).length;c(ae=>{const ke=Ot(bi(ae,K,y));return{...ke,auditLog:_e(ke,[{eventType:"data-imported",entityType:"system",summary:`Merged import from ${D.name} (${ge} item(s) resolved)`,after:{fileName:D.name},source:"local"}])}}),g(null),u("dashboard"),Se("Import merged into current programme.")},[Se,_e,w]),Pt=d.useCallback(()=>{g(null),Se("Import cancelled.")},[Se]),un=d.useCallback(async y=>{try{const D=await fetch(Fu[y]);if(!D.ok)throw new Error(`Failed to load sample data: ${D.status}`);const K=qn(await D.json());c(ge=>{const ae=Ot(gi(K,ge));return{...ae,auditLog:_e(ae,[{eventType:"example-data-loaded",entityType:"system",summary:"Loaded example assessment data",source:"local"}])}}),u("dashboard"),Se("Example assessment data loaded."),N()&&l(!1)}catch(D){console.error(D),Se("Unable to load example data right now."),window.alert("Unable to load example data right now. Please try again.")}},[Se,_e]),gn=d.useCallback(()=>{if(!window.confirm("Warning: this will reset all assessment data (organisation profile, scores, actions, and history) and sign you out. If you are worried, please export your data first. Continue?"))return;const D=Ot(Kn());c(D),u("introduction"),$(Ns),st(vs,Ns),localStorage.removeItem(Pu),me({}),st(Ss,{}),st(Ps,!1),b(""),st(ws,""),Object.keys(localStorage).filter(K=>K.startsWith("nhs-digital-adoption-page-intro-seen:")).forEach(K=>localStorage.removeItem(K)),Se("Assessment data has been reset and you have been signed out."),N()&&l(!1)},[Se]),Ct=d.useCallback(()=>({generatedAt:new Date().toISOString(),targetMonth:xe.previousMonthLabel,report:ui(o)}),[xe.previousMonthLabel,o]),bt=d.useCallback(()=>`adoption-point-in-time-${xe.previousMonthLabel.toLowerCase().replace(/\s+/g,"-")}.json`,[xe.previousMonthLabel]);d.useCallback(()=>{const y=bt();Yt(y,JSON.stringify(Ct(),null,2),"application/json")},[bt,Ct]),d.useCallback(()=>{const y=F.trim()||"test@test.com",D=bt(),K=`${Ge}

Attachment: ${D}`,ge=`mailto:${y}?subject=${encodeURIComponent(te)}&body=${encodeURIComponent(K)}`;window.location.href=ge},[bt,Ge,te,F]),d.useCallback(()=>{const y=F.trim()||"test@test.com",D=bt(),K=JSON.stringify(Ct(),null,2),ge=Ju(zu(K)),ae=`----nhs-adoption-reminder-${Date.now()}`,ke=[`To: ${y}`,`Subject: ${te}`,"MIME-Version: 1.0",`Content-Type: multipart/mixed; boundary="${ae}"`,"",`--${ae}`,'Content-Type: text/plain; charset="UTF-8"',"Content-Transfer-Encoding: 8bit","",Ge,"",`--${ae}`,`Content-Type: application/json; name="${D}"`,"Content-Transfer-Encoding: base64",`Content-Disposition: attachment; filename="${D}"`,"",ge,`--${ae}--`,""].join(`\r
`),we=xe.previousMonthLabel.toLowerCase().replace(/\s+/g,"-");Yt(`adoption-reminder-${we}.eml`,ke,"message/rfc822")},[bt,Ct,Ge,te,F,xe.previousMonthLabel]),d.useCallback(()=>{me(y=>({...y,[Y]:!0}))},[Y]),xe.shouldNotify&&se[Y];const $t=d.useMemo(()=>wr(o,De,ue),[o,De,ue]),Ht=d.useMemo(()=>$t.filter(y=>y.completed).length,[$t]),pn=d.useCallback(y=>{$(y)},[]),Rn=d.useCallback(y=>{c(D=>{const K=D.orgProfile.cst.pathway!==y.cst.pathway,ge={...D,orgProfile:y},ae=K?Bm(ge,y.cst.pathway):ge;return JSON.stringify(D.orgProfile)!==JSON.stringify(y)?{...ae,auditLog:_e(D,[{eventType:"profile-updated",entityType:"profile",summary:"Updated CST profile details",before:{trustName:D.orgProfile.trustName,projectName:D.orgProfile.projectName,cst:D.orgProfile.cst},after:{trustName:y.trustName,projectName:y.projectName,cst:y.cst},source:"local"},...K?[{eventType:"pathway-changed",entityType:"profile",summary:`Changed pathway from ${D.orgProfile.cst.pathway} to ${y.cst.pathway}`,before:{pathway:D.orgProfile.cst.pathway},after:{pathway:y.cst.pathway},source:"local"}]:[]])}:ae})},[]),_n=y=>{let D=0,K=0,ge=0,ae=0;return y.lenses.forEach(ke=>{var gt,Fe;const we=(gt=o.currentDraft[y.id])==null?void 0:gt[ke];we&&we.score>0&&(D++,(Fe=we.rationale)!=null&&Fe.trim()&&K++);const Be=(we==null?void 0:we.actions)||[];ge+=Be.length,ae+=Be.filter(Ie=>Ws(Ie.status)).length}),D===0?{icon:"◯",color:"text-blue-100",label:"Not Started"}:D>K?{icon:"⚠",color:"text-red-300",label:"Missing Rationale"}:D<y.lenses.length?{icon:"◐",color:"text-amber-300",label:"In Progress"}:ge<=0||ae<ge?{icon:"◐",color:"text-amber-300",label:"In Progress"}:{icon:"✓",color:"text-green-300",label:"Completed"}},Dn=o.orgProfile.trustName||"Unconfigured Trust",hn=o.orgProfile.projectName||"Unnamed Project",Pn=!Pi(o.orgProfile);return e.jsxs("div",{className:`flex h-screen overflow-hidden ${k.darkMode?"bg-slate-900 text-slate-100":"bg-slate-50 text-slate-800"}`,children:[e.jsx("div",{role:"status","aria-live":"polite",className:"sr-only",children:O}),e.jsx("input",{ref:B,type:"file",accept:"application/json",className:"hidden",onChange:Dt}),i&&e.jsx("div",{className:"fixed inset-0 z-10 bg-slate-900/35 backdrop-blur-[1px] lg:hidden",onClick:()=>l(!1)}),e.jsxs("div",{className:`fixed inset-y-0 left-0 z-20 bg-[#005eb8] text-white flex flex-col shadow-xl overflow-hidden transition-all duration-300 ease-out lg:static lg:translate-x-0 ${i?"w-72 translate-x-0":"w-0 -translate-x-full lg:w-0"}`,style:{backgroundColor:k.themeColor},children:[e.jsxs("div",{className:"p-6 border-b border-blue-700",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold tracking-tight",children:"NHS Digital Adoption"}),e.jsxs("p",{className:"text-blue-200 text-xs mt-1 flex justify-between items-center",children:[e.jsx("span",{children:"Readiness Tracking Tool"}),e.jsx("span",{className:"opacity-80 font-medium",children:"V6.6"})]})]}),k.profileImageDataUrl?e.jsx("img",{src:k.profileImageDataUrl,alt:"Profile",className:"h-10 w-10 rounded-full border-2 border-blue-200 object-cover"}):null]}),e.jsx("button",{type:"button",onClick:()=>L("profile"),className:"mt-3 w-full rounded-md bg-blue-700 p-2 text-left text-xs hover:bg-blue-600",children:e.jsxs("div",{className:"font-semibold text-blue-100",children:["Objectives: ",Ht,"/",$t.length]})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto py-4",children:[e.jsxs("button",{type:"button","aria-expanded":re.intro,onClick:()=>ce(y=>({...y,intro:!y.intro})),className:"mb-2 flex w-full items-center justify-between px-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-300 hover:text-white",children:[e.jsx("span",{children:"Intro"}),e.jsx("span",{"aria-hidden":"true",children:re.intro?"−":"+"})]}),re.intro?e.jsx("nav",{className:"space-y-1 mb-4",children:["introduction","engine-explained","project-details","where-am-i-now"].map(y=>e.jsx("button",{ref:D=>{z.current[`view:${y}`]=D},onClick:()=>L(y),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${m===y?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:y==="introduction"?"Introduction":y==="engine-explained"?"Engine Explained":y==="project-details"?"Project Profile":"Where Am I Now?"},y))}):null,Pn?e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button","aria-expanded":re.overview,onClick:()=>ce(y=>({...y,overview:!y.overview})),className:"mb-2 flex w-full items-center justify-between px-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-300 hover:text-white",children:[e.jsx("span",{children:"Overview"}),e.jsx("span",{"aria-hidden":"true",children:re.overview?"−":"+"})]}),re.overview?e.jsx("nav",{className:"space-y-1 mb-4",children:["dashboard","daily-checkin","action-plan","roadmap-view"].map(y=>e.jsx("button",{ref:D=>{z.current[`view:${y}`]=D},onClick:()=>L(y),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${m===y?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:y==="dashboard"?"Metrics Dashboard":y==="daily-checkin"?"Daily Check-in":y==="action-plan"?"Action Tracker":"Component Delivery Timeline"},y))}):null,e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Change Components"}),e.jsx("nav",{className:"space-y-2 mb-8",children:Array.from(new Set(t.map(y=>y.phase))).map(y=>{const D=t.filter(ge=>ge.phase===y),K=Ee[y]??!1;return e.jsxs("div",{className:"mx-2 overflow-hidden rounded-md",style:{backgroundColor:`${Bu[y]||"#3b82f6"}33`},children:[e.jsxs("button",{type:"button","aria-expanded":K,onClick:()=>q(ge=>({...ge,[y]:!K})),className:"flex w-full items-center justify-between px-3 pb-1.5 pt-2.5 text-left text-sm font-semibold uppercase tracking-wider text-white",children:[e.jsx("span",{children:Je[y]||`Phase ${y}`}),e.jsx("span",{"aria-hidden":"true",children:K?"−":"+"})]}),K?D.map(ge=>{const ae=m==="assessment"&&s===ge.id,ke=_n(ge);return e.jsxs("button",{ref:we=>{z.current[`component:${ge.id}`]=we},onClick:()=>{ee(ge.id)},className:`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${ae?"bg-white font-medium text-[#005eb8]":`hover:bg-blue-800 ${ke.color}`}`,children:[e.jsx("span",{className:"truncate pr-2",children:Bo(ge.label)}),e.jsx("span",{className:"text-xs flex-shrink-0",title:ke.label,"aria-label":ke.label,children:ke.icon})]},ge.id)}):null]},y)})}),e.jsxs("button",{type:"button","aria-expanded":re.tools,onClick:()=>ce(y=>({...y,tools:!y.tools})),className:"mb-2 flex w-full items-center justify-between px-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-300 hover:text-white",children:[e.jsx("span",{children:"Tools"}),e.jsx("span",{"aria-hidden":"true",children:re.tools?"−":"+"})]}),re.tools?e.jsx("nav",{className:"space-y-1 mb-8",children:["highlight-builder","force-field-analysis","compare","change-impact-assessment","stakeholder-analysis","raid-log","benefits","audit-log"].map(y=>e.jsx("button",{ref:D=>{z.current[`view:${y}`]=D},onClick:()=>L(y),className:`w-full flex items-center px-4 py-1 text-sm transition-colors ${m===y?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:y==="highlight-builder"?"Highlight Builder":y==="force-field-analysis"?"Force Field Analysis":y==="compare"?"Assess & Compare":y==="change-impact-assessment"?"Change Impact Assessment":y==="stakeholder-analysis"?"Stakeholder Analysis":y==="raid-log"?"RAID Log":y==="benefits"?"Benefits Register & Tracker":"Audit Log"},y))}):null]}):null,e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider border-t border-blue-800 pt-6",children:"Account"}),e.jsx("nav",{className:"space-y-1 mb-8",children:(Pn?["settings","profile"]:["profile"]).map(y=>e.jsx("button",{ref:D=>{z.current[`view:${y}`]=D},onClick:()=>L(y),className:`w-full flex items-center px-4 py-1 text-sm transition-colors ${m===y?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:y==="settings"?"Settings":"Profile"},y))}),e.jsxs("div",{className:"mt-8 px-4 pb-4 border-t border-blue-800 pt-6",children:[e.jsx("div",{className:"text-[10px] font-semibold text-blue-300 uppercase tracking-wider mb-3",children:"Status Legend"}),e.jsxs("div",{className:"space-y-2 text-xs text-blue-200",children:[e.jsx("div",{children:"◯ Not Started"}),e.jsx("div",{children:"◐ In Progress"}),e.jsx("div",{children:"⚠ Missing Rationale"}),e.jsx("div",{children:"✓ Completed"})]})]})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col h-screen overflow-hidden",children:[e.jsx("header",{className:`${k.darkMode?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} border-b px-3 py-2 sm:px-6 shrink-0 z-10 ${m==="introduction"?"":"shadow-sm"}`,style:{borderTop:`3px solid ${k.themeColor}`},children:e.jsxs("div",{className:"flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{className:"min-w-0 flex items-center gap-2 sm:gap-3",children:[e.jsxs("button",{onClick:()=>l(y=>!y),className:"inline-flex h-9 items-center justify-center px-3 text-white rounded-md font-semibold transition-colors shadow-sm","aria-label":i?"Collapse side navigation":"Expand side navigation",title:i?"Collapse side navigation":"Expand side navigation",style:{backgroundColor:k.themeColor},children:[e.jsx("span",{"aria-hidden":"true",className:"text-lg leading-none",children:i?"«":"»"}),e.jsx("span",{className:"sr-only",children:i?"Collapse side navigation":"Expand side navigation"})]}),e.jsx("button",{onClick:X,disabled:M.length===0,title:M.length===0?"No previous in-app page":"Back to previous page",className:`h-9 text-sm px-3 rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${k.darkMode?"text-slate-100 hover:bg-slate-700":"text-slate-600 hover:bg-slate-100"}`,children:"← Back"}),e.jsx("div",{className:"min-w-0",children:e.jsxs("div",{className:"flex min-w-0 items-center gap-1 text-sm",children:[e.jsx("span",{className:`truncate font-semibold ${k.darkMode?"text-slate-100":"text-slate-700"}`,title:Dn,children:Dn}),e.jsx("span",{className:`${k.darkMode?"text-slate-300":"text-slate-400"}`,children:"/"}),e.jsx("span",{className:`truncate ${k.darkMode?"text-slate-100":"text-slate-600"}`,title:hn,children:hn})]})})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 lg:justify-end",children:[e.jsxs("span",{className:"inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-800 sm:h-9 sm:w-auto sm:rounded-full",title:"Auto-save on","aria-label":"Auto-save on",children:[e.jsx("span",{className:"inline-flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white","aria-hidden":"true",children:"✓"}),e.jsx("span",{className:"sr-only sm:not-sr-only sm:ml-1",children:"Auto-save on"})]}),e.jsx("button",{onClick:()=>L("introduction"),"aria-label":"Show introduction",title:"Show introduction",className:`text-sm w-9 h-9 flex items-center justify-center bg-white text-[#425563] border border-[#768692] hover:bg-[#f0f4f5] rounded-full font-semibold transition-colors ${Gs}`,children:"?"}),e.jsx("button",{type:"button",onClick:()=>{window.location.hash="#/"},"aria-label":"Go to home page",title:"Go to home page",className:`${We} h-9 w-16 px-6 py-0 inline-flex items-center justify-center`,children:"Home"}),e.jsx("button",{onClick:ot,className:`${We} h-9 px-3 py-0`,children:"Import"}),e.jsxs("button",{onClick:it,className:`${We} h-9 px-3 py-0`,children:[e.jsx("span",{className:"sm:hidden",children:"Export"}),e.jsx("span",{className:"hidden sm:inline",children:"Export"})]})]})]})}),e.jsxs("main",{ref:v,className:"flex-1 overflow-y-auto px-8 pt-8 pb-28",children:[m==="daily-checkin"&&A?e.jsxs("section",{className:`${k.darkMode?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-6 rounded-xl border p-4 shadow-sm`,children:[e.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${k.darkMode?"text-slate-300":"text-slate-500"}`,children:"Objectives"}),e.jsxs("p",{className:`text-sm mt-1 ${k.darkMode?"text-slate-100":"text-slate-700"}`,children:[Ht,"/",$t.length," complete - based on phase readiness, ownership, cadence and team participation."]})]}),e.jsx("button",{type:"button",onClick:()=>pe(!1),className:`${k.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-2 text-sm font-medium`,"aria-label":"Dismiss objectives card",children:"Dismiss"})]}),e.jsx("div",{className:"mt-4 grid gap-3 md:grid-cols-3",children:$t.map(y=>e.jsxs("div",{className:`rounded-lg border p-3 ${y.completed?"border-green-200 bg-green-50":k.darkMode?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${k.darkMode?"text-slate-100":"text-slate-800"}`,children:y.label}),e.jsx("span",{className:"text-xs font-bold",children:y.completed?"Done":"Not yet"})]}),e.jsx("p",{className:`mt-1 text-xs ${k.darkMode?"text-slate-300":"text-slate-600"}`,children:y.description})]},y.id))})]}):null,m==="dashboard"&&e.jsx("div",{ref:f,children:e.jsx(Cr,{store:o,components:t,lenses:n,metrics:De,phaseFocusMode:k.phaseFocusMode||"auto",manualPhaseFocus:k.manualPhaseFocus,onPhaseFocusModeChange:y=>$(D=>({...D,phaseFocusMode:y,manualPhaseFocus:y==="manual"?D.manualPhaseFocus||De.currentPhase:D.manualPhaseFocus})),onManualPhaseFocusChange:y=>$(D=>({...D,phaseFocusMode:"manual",manualPhaseFocus:y})),onResetPhaseFocus:()=>$(y=>({...y,phaseFocusMode:"auto",manualPhaseFocus:De.currentPhase})),getEntry:oe,onComponentClick:ee,onNavigate:L,onOpenLensInfo:h,onOpenOnboarding:()=>L("introduction"),colorAccessibilityMode:k.colorAccessibilityMode||"standard",darkMode:!!k.darkMode,componentRadarVisible:le,onComponentRadarVisibleChange:Ne,componentRadarSize:fe,onComponentRadarSizeChange:R})}),m==="where-am-i-now"&&e.jsx(Hc,{components:t,getEntry:oe,effectivePhaseFocus:Le,phaseFocusMode:k.phaseFocusMode||"auto",onComponentClick:ee,onSetManualPhase:y=>$(D=>({...D,phaseFocusMode:"manual",manualPhaseFocus:y})),onResetToAuto:()=>$(y=>({...y,phaseFocusMode:"auto",manualPhaseFocus:De.currentPhase})),darkMode:!!k.darkMode}),m==="daily-checkin"&&e.jsx(Bl,{store:o,components:t,metrics:De,getEntry:oe,onComponentClick:ee,onActionView:Re,guidanceTarget:_i,linkOverrides:o.orgProfile.linkOverrides,showAdditionalGuidanceLinks:Oe,phaseFocusMode:k.phaseFocusMode||"auto",manualPhaseFocus:k.manualPhaseFocus,colorAccessibilityMode:k.colorAccessibilityMode||"standard",darkMode:!!k.darkMode}),m==="project-details"&&e.jsx($l,{orgProfile:o.orgProfile,onProfileUpdate:Rn,components:t,lenses:n,onComponentClick:ee,onGoToIntroduction:()=>L("introduction"),onContinueToVision:()=>ee("vision"),onGoToWhereAmINow:()=>L("where-am-i-now"),currentUserId:p,onCurrentUserChange:b,showExternalLinksSection:!!k.showExternalLinksSection,darkMode:!!k.darkMode}),m==="assessment"&&e.jsx(kl,{store:o,components:t,activeComponentId:s,getRubricText:qu,getEntry:oe,onComponentChange:ee,onEntryUpdate:He,onOpenLensInfo:h,onActionRemove:(y,D,K)=>{const ae=oe(y,D).actions.find(we=>we.id===K);if(!ae)return;const ke=window.prompt("Please provide a reason for removing this action. This will be included in the JSON export audit log.");if(!ke||!ke.trim()){window.alert("Removal cancelled. A reason is required to remove an action.");return}c(we=>{var Et;const Be=((Et=we.currentDraft[y])==null?void 0:Et[D])||cs(),gt={...Be,actions:Be.actions.filter(pt=>pt.id!==K).map(Gu)},Fe={...we.suppressedAutoActions};if(K.startsWith("vision-action:")||K.startsWith("case-for-change-action:")||K.startsWith("benefits-action:")||K.startsWith("sponsorship-action:")||K.startsWith("change-impact-action:")){const pt=Uu(y,D),Tt=Fe[pt]||[];Tt.includes(K)||(Fe[pt]=[...Tt,K])}const Ie={...we,currentDraft:{...we.currentDraft,[y]:{...we.currentDraft[y],[D]:gt}},suppressedAutoActions:Fe};return{...Ot(Ie),auditLog:_e(we,[{eventType:"action-removed",entityType:"action",entityId:K,summary:`Removed action from ${y} / ${D}`,componentId:y,lens:D,reason:ke.trim(),before:{text:ae.text,status:ae.status,owner:ae.owner,actionType:ae.actionType},source:"local"}])}})},onObjectivesUpdate:ut,onNavigateToTool:y=>L(y),hideGuidedWorkflow:!!k.hideGuidedWorkflow,onHideGuidedWorkflow:()=>$(y=>({...y,hideGuidedWorkflow:!0})),showAdditionalGuidanceLinks:Oe,showActionPriorityColours:!!k.showActionPriorityColours,currentUserId:p,currentUserProfileImageDataUrl:k.profileImageDataUrl,darkMode:!!k.darkMode,focusAction:ye,onFocusActionHandled:()=>Ce(null),onNavigateToRaidItem:V}),m==="action-plan"&&e.jsx(nr,{actions:Ue,onComponentClick:ee,onStatusChange:at,teamMembers:o.orgProfile.teamMembers||[],darkMode:!!k.darkMode}),m==="introduction"&&e.jsx(Dc,{darkMode:!!k.darkMode,onGetStarted:()=>L("engine-explained")}),m==="engine-explained"&&e.jsx(ac,{darkMode:!!k.darkMode,onGetStarted:()=>L("project-details"),onComponentClick:ee}),m==="roadmap-view"&&e.jsx(hc,{components:t,metrics:De,getEntry:oe,onComponentClick:ee,pathway:o.orgProfile.cst.pathway,pathwayChecks:o.pathwayChecks,darkMode:!!k.darkMode}),m==="highlight-builder"&&e.jsx(jc,{store:o,metrics:De,lenses:n,components:t,getEntry:oe,trustName:o.orgProfile.trustName,projectName:o.orgProfile.projectName,themeColor:k.themeColor,currentUserId:p,darkMode:!!k.darkMode}),m==="force-field-analysis"&&e.jsx(Mo,{embedded:!0,onBack:()=>L("dashboard"),components:t,teamMembers:o.orgProfile.teamMembers||[],objectives:o.objectives,getEntry:oe,onEntryUpdate:He,onObjectivesUpdate:ut}),m==="compare"&&e.jsx(Xo,{embedded:!0,onBack:()=>L("dashboard")}),m==="change-impact-assessment"&&e.jsx(Km,{embedded:!0,onBack:()=>L("dashboard"),benefits:o.benefits,onNavigateToBenefit:ze}),m==="stakeholder-analysis"&&e.jsx(Du,{embedded:!0,onBack:()=>L("dashboard"),trustName:o.orgProfile.trustName,projectName:o.orgProfile.projectName,teamMembers:o.orgProfile.teamMembers||[],referenceLists:o.orgProfile.stakeholderReferenceLists||es,onGoToProjectDetails:()=>L("project-details"),components:t,getEntry:oe,onEntryUpdate:He}),m==="raid-log"&&e.jsx(eu,{embedded:!0,onBack:()=>L("dashboard"),trustName:o.orgProfile.trustName,projectName:o.orgProfile.projectName,teamMembers:o.orgProfile.teamMembers||[],components:t,getEntry:oe,onEntryUpdate:He,items:o.raidItems,onItemsChange:zt,focusItemId:Jt,onFocusItemHandled:()=>I(null),onNavigateToAction:Re}),m==="benefits"&&e.jsx(mu,{embedded:!0,onBack:()=>L("dashboard"),trustName:o.orgProfile.trustName,projectName:o.orgProfile.projectName,benefits:o.benefits,onBenefitsChange:ne,tracker:o.benefitTracker,onTrackerChange:ve,focusBenefitId:Pe,onFocusHandled:()=>Ye(null)}),m==="audit-log"&&e.jsx(El,{events:o.auditLog,darkMode:!!k.darkMode}),m==="settings"&&e.jsx(Gc,{userSettings:k,onUserSettingsUpdate:pn,onLoadExampleData:un,onResetData:gn,darkMode:!!k.darkMode}),m==="profile"&&e.jsx(Bc,{orgProfile:o.orgProfile,onProfileUpdate:Rn,userSettings:k,onUserSettingsUpdate:pn,currentUserId:p,onCurrentUserChange:b,objectives:$t,darkMode:!!k.darkMode})]}),r?e.jsx(Ac,{lensName:r,onClose:()=>h(""),darkMode:!!k.darkMode}):null,w?e.jsx(Ec,{report:w.report,myLabel:o.orgProfile.projectName||o.orgProfile.trustName||"Mine",theirLabel:((Xt=w.parsed.orgProfile)==null?void 0:Xt.projectName)||((fn=w.parsed.orgProfile)==null?void 0:fn.trustName)||w.file.name,onResolve:kt,onCancel:Pt,darkMode:!!k.darkMode}):null,e.jsx(tr,{toolkitChoice:o.orgProfile.cst.toolkitChoice,darkMode:!!k.darkMode}),e.jsx(Zo,{open:m==="assessment"&&s==="vision"&&x.isOpen,onClose:x.close,darkMode:!!k.darkMode}),e.jsx(Mi,{open:j!==null,onCancel:()=>Z(null),onContinue:y=>{j&&(y&&st(Nn,!0),mt(j.componentId,j.lens,j.actionId,j.status),Z(null))},darkMode:!!k.darkMode})]})]})}export{lg as AdoptionApp,lg as default};
