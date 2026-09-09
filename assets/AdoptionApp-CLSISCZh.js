import{r as g,j as e,a as Pn}from"./vendor-react-nTLHQtbJ.js";import{n as Ge,a as Tn,b as At,c as Xt,F as ji}from"./ForceFieldAnalysisApp-BaJm1gkx.js";import{l as vn,s as tn,d as Xn,e as Ii}from"./utils-Dnh79fEb.js";import{g as Gs,p as Ai,G as _i,d as Oi}from"./vendor-misc-D88HtX07.js";import{g as Ri,D as Pi,p as Di,P as Ia,a as Jn,T as $i,O as Aa,C as Ti,b as Li,i as Bi}from"./moscow-C4QZk_bL.js";import{A as ft,a as $n,U as _a,n as He,i as Qt,b as Mi,d as Ut,C as Gi}from"./CompareApp-DRU6AFmg.js";import{A as nt,g as Ht,a as Fi}from"./components-D25Uzw0S.js";import{C as ln}from"./vendor-chart-DnMUodEx.js";const Qn="nhs-digital-adoption-evidence-warning-dismissed";function Oa({open:n,onContinue:t,onCancel:s,darkMode:a=!1}){const[i,l]=g.useState(!1);return n?e.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"evidence-warning-title",className:`w-full max-w-md rounded-xl border p-6 shadow-2xl ${a?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsx("h2",{id:"evidence-warning-title",className:`text-lg font-semibold ${a?"text-slate-100":"text-slate-900"}`,children:"Evidence reminder"}),e.jsx("p",{className:`mt-3 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:"Please don't forget to attach evidence if you have it"}),e.jsxs("label",{className:`mt-4 flex items-center gap-2 text-sm ${a?"text-slate-200":"text-slate-700"}`,children:[e.jsx("input",{type:"checkbox",checked:i,onChange:r=>l(r.target.checked),className:"h-4 w-4 rounded border-slate-400"}),"Don't show this message again"]}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:s,className:Ge,children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>t(i),className:Tn,children:"Continue"})]})]})}):null}const Ui="nhs-digital-adoption-page-intro-seen:";function hn(n){const t=`${Ui}${n}`,[s,a]=g.useState(()=>!vn(t));return{isOpen:s,close:()=>{tn(t,!0),a(!1)},reopen:()=>a(!0)}}function Sn({open:n,onClose:t,title:s,body:a,darkMode:i=!1}){return n?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-lg rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-900"}`,children:s}),e.jsx("button",{type:"button",onClick:t,"aria-label":"Close introduction",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${i?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:`mt-3 space-y-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:a}),e.jsx("div",{className:"mt-5 flex justify-end",children:e.jsx("button",{type:"button",onClick:t,className:Tn,children:"Got it"})})]})}):null}function yn({onClick:n,darkMode:t=!1}){return e.jsx("button",{type:"button",onClick:n,"aria-label":"Show page introduction",title:"Show page introduction",className:`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${t?"border-slate-600 text-slate-200 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"?"})}const ot=[{title:"Explain your vision state",body:e.jsx("div",{className:"text-sm text-slate-700 space-y-2",children:e.jsx("p",{children:"Start by scoring where Vision stands today for each lens - be honest about the current state, not where you'd like it to be."})})},{title:"Assign owners to actions",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"Every action needs a named owner - without one, nothing moves and progress stalls."}),e.jsx("p",{children:"As owners complete or cancel every action at a readiness level, that lens automatically advances to the next level."})]})}];function Hi({open:n,onClose:t,darkMode:s=!1}){const[a,i]=g.useState(0);if(!n)return null;const l=ot[a],r=a===ot.length-1;return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`relative w-full max-w-lg rounded-xl border p-6 shadow-2xl ${s?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${s?"text-blue-300":"text-blue-600"}`,children:["Getting started · Step ",a+1," of ",ot.length]}),e.jsx("h3",{className:`mt-3 text-lg font-semibold ${s?"text-slate-100":"text-slate-900"}`,children:l.title}),e.jsx("div",{className:`mt-3 ${s?"text-slate-300":""}`,children:l.body}),e.jsxs("div",{className:"mt-6 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:()=>i(o=>Math.max(0,o-1)),disabled:a===0,className:`rounded-md border px-4 py-2 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${s?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Back"}),r?e.jsx("button",{type:"button",onClick:t,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Got it"}):e.jsx("button",{type:"button",onClick:()=>i(o=>Math.min(ot.length-1,o+1)),className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Next"})]})]})})}const Wi={"avt-v2-2026":[{id:"avt-vision-case-for-change",title:"Vision and Case for Change",pageHint:"Section: Early readiness",text:"Use a clear case for change, define outcomes, and ensure leadership sponsorship before go-live."},{id:"avt-stakeholder-engagement",title:"Stakeholder Engagement",pageHint:"Section: People and communication",text:"Map stakeholder groups, identify adoption risks, and use targeted communication plans for each audience."},{id:"avt-training-readiness",title:"Training and Capability",pageHint:"Section: Capability and learning",text:"Align learning interventions with role-based needs and verify confidence through readiness checkpoints."},{id:"avt-benefits-tracking",title:"Benefits Tracking",pageHint:"Section: Value realisation",text:"Set measurable adoption indicators and review benefit evidence at regular intervals post go-live."},{id:"avt-reinforcement-bau",title:"Reinforcement and BAU Transfer",pageHint:"Section: Sustainment",text:"Embed reinforcement actions and hand over ownership to business-as-usual teams for sustained adoption."}],"change-management-v3-2023":[{id:"cmt-leadership-alignment",title:"Leadership Alignment",pageHint:"Section: Sponsorship and governance",text:"Secure visible executive sponsorship and align governance with programme milestones and risks."},{id:"cmt-change-impact",title:"Change Impact Assessment",pageHint:"Section: Planning and risk",text:"Assess process, role, and behaviour impacts early and prioritise mitigations before deployment."},{id:"cmt-resistance-management",title:"Resistance Management",pageHint:"Section: Adoption barriers",text:"Identify likely resistance themes and define practical interventions with named owners and timelines."},{id:"cmt-comms-cadence",title:"Communication Cadence",pageHint:"Section: Communications",text:"Establish a predictable communication cadence using concise updates and feedback loops."},{id:"cmt-post-go-live-support",title:"Post Go-Live Support",pageHint:"Section: Stabilisation",text:"Provide hypercare support with clear escalation routes and transition criteria into steady state."}]};_i.workerSrc=Ai;function Vi({toolkitChoice:n,darkMode:t=!1}){const[s,a]=g.useState(!1),[i,l]=g.useState(!1),[r,o]=g.useState(""),[c,f]=g.useState(1),[d,m]=g.useState("idle"),[v,p]=g.useState(""),[S,R]=g.useState([]),I=g.useMemo(()=>Ri(n),[n]),b=g.useMemo(()=>(Wi[n]||[]).map(P=>({id:P.id,title:P.title,pageHint:P.pageHint,text:P.text,pageNumber:null})),[n]);g.useEffect(()=>{if(!s)return;let P=!1;return(async()=>{m("loading"),p("");try{const M=await fetch(I.path);if(!M.ok)throw new Error(`HTTP ${M.status}`);const z=await M.arrayBuffer(),le=new Uint8Array(z);let ie;try{ie=await Gs({data:le}).promise}catch(G){if(ie=await Gs({data:le,disableWorker:!0}).promise,!P){const Ne=G instanceof Error?G.message:String(G);p(`Worker fallback used: ${Ne}`)}}const A=[];for(let G=1;G<=ie.numPages;G+=1){if(P)return;const Le=(await(await ie.getPage(G)).getTextContent()).items.map(Ke=>"str"in Ke?Ke.str:"").join(" ").replace(/\s+/g," ").trim();Le&&A.push({id:`${n}-page-${G}`,title:`Page ${G}`,pageHint:`Page ${G}`,text:Le,pageNumber:G})}P||(R(A),m("ready"))}catch{P||(R([]),m("error"),p("Unable to read PDF text for indexing in this browser session."))}})(),()=>{P=!0}},[s,I.path,n]),g.useEffect(()=>{f(1),o(""),R([]),m("idle"),p("")},[n]);const k=S.length>0?S:b,q=g.useMemo(()=>{const P=Number.isFinite(c)&&c>0?Math.floor(c):1;return`${I.path}#page=${P}`},[I.path,c]),T=g.useMemo(()=>{const P=r.trim().toLowerCase();if(!P)return k.slice(0,5).map(z=>({entry:z,score:0}));const ue=P.split(/\s+/).filter(Boolean),M=z=>{const le=`${z.title} ${z.text} ${z.pageHint}`.toLowerCase();let ie=0;return le.includes(P)&&(ie+=8),ue.forEach(A=>{le.includes(A)?ie+=2:le.split(/\W+/).some(Ne=>Ne&&(Ne.includes(A)||A.includes(Ne)))&&(ie+=1)}),ie};return k.map(z=>({entry:z,score:M(z)})).filter(z=>z.score>0).sort((z,le)=>le.score-z.score).slice(0,5)},[r,k])[0]||null;return g.useEffect(()=>{r.trim()&&T!=null&&T.entry.pageNumber&&f(T.entry.pageNumber)},[T,r]),e.jsxs("div",{className:"fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2","data-testid":"global-toolkit-chatbot",children:[s?e.jsxs("div",{className:`w-[380px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border shadow-2xl ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant"}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("button",{type:"button",onClick:()=>l(!0),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Maximise"}),e.jsx("button",{type:"button",onClick:()=>a(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Minimise"})]})]}),e.jsxs("div",{className:`space-y-3 p-3 ${t?"bg-slate-800":"bg-slate-50"}`,children:[e.jsxs("div",{className:`max-w-[95%] rounded-2xl rounded-bl-md px-3 py-2 text-xs shadow-sm ${t?"bg-slate-700 text-slate-100":"bg-white text-slate-700"}`,children:["Showing your selected toolkit from Project Profile:",e.jsx("div",{className:"mt-1 font-semibold",children:I.label})]}),e.jsx("div",{className:`overflow-hidden rounded-lg border ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:e.jsx("iframe",{title:"Selected Toolkit Preview",src:q,className:"h-[260px] w-full"})}),e.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-end gap-2",children:[e.jsx("label",{htmlFor:"toolkit-page-input",className:`text-[11px] font-semibold uppercase tracking-wider ${t?"text-slate-300":"text-slate-600"}`,children:"Go to page"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{id:"toolkit-page-input",type:"number",min:1,value:c,onChange:P=>f(Number(P.target.value)||1),className:`w-20 rounded-md border px-2 py-1.5 text-xs ${t?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})})]}),e.jsxs("div",{className:`rounded-lg border p-2 ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsx("label",{htmlFor:"toolkit-fuzzy-search",className:`mb-1 block text-[11px] font-semibold uppercase tracking-wider ${t?"text-slate-300":"text-slate-600"}`,children:"Quick snippet search"}),e.jsx("input",{id:"toolkit-fuzzy-search",type:"search",value:r,onChange:P=>o(P.target.value),placeholder:"Try: sponsorship, training, resistance",className:`w-full rounded-md border px-2 py-1.5 text-xs ${t?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-400":"border-slate-300 bg-white text-slate-900 placeholder-slate-500"}`}),e.jsx("div",{className:"mt-2",children:r.trim()?T!=null&&T.entry.pageNumber?e.jsxs("button",{type:"button",onClick:()=>{f(T.entry.pageNumber),l(!0)},className:`w-full rounded-md px-2 py-1.5 text-left text-xs font-semibold ${t?"bg-slate-800 text-slate-100 hover:bg-slate-700":"bg-slate-100 text-slate-800 hover:bg-slate-200"}`,children:["Go to best match: Page ",T.entry.pageNumber]}):e.jsx("p",{className:`text-xs ${t?"text-slate-400":"text-slate-500"}`,children:"No close page match found. Try broader keywords."}):e.jsx("p",{className:`text-xs ${t?"text-slate-400":"text-slate-500"}`,children:"Enter a keyword to jump to the most relevant page."})}),e.jsx("p",{className:`mt-2 text-[11px] ${t?"text-slate-400":"text-slate-500"}`,children:d==="loading"?"Indexing toolkit text from all pages...":d==="ready"?`Search is using full-document text (${S.length} pages indexed).`:d==="error"?"Full-document indexing unavailable, using fallback snippets.":"Search will expand to all pages when the assistant opens."}),v?e.jsx("p",{className:`mt-1 text-[11px] ${t?"text-amber-300":"text-amber-700"}`,children:v}):null]}),e.jsx("a",{href:I.path,target:"_blank",rel:"noopener noreferrer",className:"inline-block text-xs font-semibold text-[#005eb8] underline",children:"Open full toolkit in new tab"})]})]}):null,i?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4",children:e.jsxs("div",{className:`relative h-[90vh] w-[95vw] overflow-hidden rounded-2xl border shadow-2xl ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant · Expanded Viewer"}),e.jsx("button",{type:"button",onClick:()=>l(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Close"})]}),e.jsx("iframe",{title:"Selected Toolkit Full View",src:q,className:"h-[calc(90vh-42px)] w-full"})]})}):null,e.jsxs("button",{type:"button",onClick:()=>a(P=>!P),className:"inline-flex items-center gap-2 rounded-full bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-blue-700","aria-label":"Open toolkit assistant",children:[e.jsx("span",{"aria-hidden":"true",children:"💬"}),"Toolkit assistant"]})]})}function Ra({showAdvancedControls:n,onToggleAdvanced:t,onReset:s,resultText:a,activeFilters:i,activeFiltersAriaLabel:l,darkMode:r=!1}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:t,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${r?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:n?"Hide advanced controls":"Show advanced controls"}),e.jsx("button",{type:"button",onClick:s,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${r?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:"Reset filters"}),e.jsx("span",{className:`text-xs ${r?"text-slate-300":"text-slate-500"}`,"aria-live":"polite",children:a})]}),i.length>0?e.jsx("div",{className:"flex flex-wrap gap-2","aria-label":l,children:i.map(o=>e.jsx("span",{className:`inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${r?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-slate-50 text-slate-700"}`,children:o},o))}):null]})}function qi({actions:n,onComponentClick:t,onStatusChange:s,teamMembers:a=[],darkMode:i=!1}){const l=hn("action-tracker"),[r,o]=g.useState(""),[c,f]=g.useState("all"),[d,m]=g.useState("all"),[v,p]=g.useState("all"),[S,R]=g.useState("all"),[I,b]=g.useState("all"),[k,q]=g.useState("component"),[E,T]=g.useState("asc"),[P,ue]=g.useState(!1),M=g.useCallback(L=>{t(L)},[t]),z=g.useMemo(()=>Array.from(new Set(n.map(L=>L.component))).sort((L,oe)=>L.localeCompare(oe)),[n]),le=g.useMemo(()=>Array.from(new Set([...a.map(L=>L.name),...n.map(L=>L.action.owner).filter(Boolean)])).sort((L,oe)=>L.localeCompare(oe)),[n,a]),ie=g.useMemo(()=>Array.from(new Set(n.map(L=>L.action.status))).sort((L,oe)=>L.localeCompare(oe)),[n]),A=g.useMemo(()=>{const L=n.map(oe=>oe.action.actionType).filter(oe=>!!oe);return Array.from(new Set([...ft,...L])).sort((oe,se)=>oe.localeCompare(se))},[n]),G=g.useMemo(()=>{const L=n.map(oe=>oe.action.readinessScore).filter(oe=>oe!==void 0);return Array.from(new Set(L)).sort((oe,se)=>oe-se)},[n]),Ne={0:"Not Started",1:"Emerging",2:"Developing",3:"Embedding",4:"Adopted",5:"Thriving"},Ee=g.useMemo(()=>{const L=r.trim().toLowerCase();return n.filter(se=>c!=="all"&&se.component!==c||d!=="all"&&se.action.owner!==d||v!=="all"&&se.action.status!==v||S!=="all"&&(se.action.actionType||"")!==S||I!=="all"&&se.action.readinessScore!==I?!1:L?[se.component,se.lens,se.action.text,se.action.actionType||"",se.action.owner,se.action.timescale,se.action.status].join(" ").toLowerCase().includes(L):!0).sort((se,ge)=>{const fe=ne=>{switch(k){case"lens":return ne.lens;case"owner":return ne.action.owner||"Unassigned";case"status":return ne.action.status;case"actionType":return ne.action.actionType||"Unassigned";case"component":default:return ne.component}},ye=fe(se).localeCompare(fe(ge));return E==="asc"?ye:-ye})},[S,n,c,d,I,r,k,E,v]),Le=g.useMemo(()=>{const L=[];return r.trim()&&L.push(`Search: ${r.trim()}`),c!=="all"&&L.push(`Component: ${c}`),v!=="all"&&L.push(`Status: ${v}`),S!=="all"&&L.push(`Action type: ${S}`),I!=="all"&&L.push(`Readiness: ${Ne[I]}`),d!=="all"&&L.push(`Owner: ${d}`),(k!=="component"||E!=="asc")&&L.push(`Sort: ${k} (${E})`),L},[S,c,d,I,r,k,E,v]),Ke=()=>{o(""),f("all"),m("all"),p("all"),R("all"),b("all"),q("component"),T("asc"),ue(!1)};return e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"mb-6 flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${i?"text-slate-100":"text-slate-800"}`,children:"Action Tracker"}),e.jsx(yn,{onClick:l.reopen,darkMode:i})]}),e.jsx(Sn,{open:l.isOpen,onClose:l.close,title:"Action Tracker",darkMode:i,body:e.jsx("p",{children:"Every action across every component in one searchable, filterable, sortable table. Filter by component, owner, status, action type or readiness score, and click a row's component to jump straight to its assessment."})}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-4 mb-6 space-y-3`,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:r,onChange:L=>o(L.target.value),placeholder:"Search actions, owners, lenses...",className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-900 text-slate-100":"text-slate-900"}`}),e.jsxs("select",{value:c,onChange:L=>f(L.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All components"}),z.map(L=>e.jsx("option",{value:L,children:L},L))]}),e.jsxs("select",{value:v,onChange:L=>p(L.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All statuses"}),ie.map(L=>e.jsx("option",{value:L,children:L},L))]})]}),e.jsx(Ra,{showAdvancedControls:P,onToggleAdvanced:()=>ue(L=>!L),onReset:Ke,resultText:`Showing ${Ee.length} actions`,activeFilters:Le,activeFiltersAriaLabel:"Active action tracker filters",darkMode:i}),P?e.jsxs("div",{className:`grid grid-cols-1 sm:grid-cols-5 gap-3 rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("select",{value:d,onChange:L=>m(L.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),le.map(L=>e.jsx("option",{value:L,children:L},L))]}),e.jsxs("select",{value:S,onChange:L=>R(L.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),A.map(L=>e.jsx("option",{value:L,children:L},L))]}),e.jsxs("select",{value:I==="all"?"all":String(I),onChange:L=>b(L.target.value==="all"?"all":Number(L.target.value)),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All readiness levels"}),G.map(L=>e.jsx("option",{value:String(L),children:Ne[L]},L))]}),e.jsxs("select",{value:k,onChange:L=>q(L.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"component",children:"Sort: Component"}),e.jsx("option",{value:"lens",children:"Sort: Lens"}),e.jsx("option",{value:"owner",children:"Sort: Owner"}),e.jsx("option",{value:"actionType",children:"Sort: Action Type"}),e.jsx("option",{value:"status",children:"Sort: Status"})]}),e.jsx("button",{type:"button",onClick:()=>T(L=>L==="asc"?"desc":"asc"),className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${i?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-white"}`,children:E==="asc"?"A-Z":"Z-A"})]}):null]}),e.jsx("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:Ee.length?e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:`min-w-full table-fixed ${i?"divide-slate-700":"divide-slate-200"} divide-y`,children:[e.jsx("thead",{className:i?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Change Component"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Lens"}),e.jsx("th",{className:`w-[22%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Action Type"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Timescale"}),e.jsx("th",{className:`w-[14%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Status"})]})}),e.jsx("tbody",{className:`${i?"bg-slate-800 divide-slate-700":"bg-white divide-slate-100"} divide-y`,children:Ee.map(({compId:L,component:oe,lens:se,action:ge})=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:e.jsx("button",{onClick:()=>M(L),className:"text-left underline underline-offset-2 hover:text-[#005eb8] transition-colors",children:oe})}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:se}),e.jsx("td",{className:`w-[22%] px-4 py-3 text-sm whitespace-normal break-words leading-snug ${i?"text-slate-100":"text-slate-700"}`,children:ge.text}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:ge.actionType||"Unassigned"}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:ge.owner}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:ge.timescale}),e.jsx("td",{className:"w-[14%] px-4 py-3 text-sm",children:e.jsx("select",{"aria-label":`Status for ${ge.text}`,value:He(ge.status),onChange:fe=>s==null?void 0:s(L,se,ge.id,fe.target.value),className:`w-full rounded-md border px-2 py-1 text-xs font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] ${$n[He(ge.status)]} ${i?"bg-slate-900":"bg-white"}`,children:_a.map(fe=>e.jsx("option",{value:fe,children:fe},fe))})})]},`${L}-${se}-${ge.text}`))})]})}):e.jsx("div",{className:`p-6 ${i?"text-slate-300":"text-slate-500"}`,children:n.length?"No actions match the current filters.":"No actions recorded yet."})})]})}const an={1:"Pre-Discovery",2:"Solution Design",3:"Development",4:"Deployment / Go Live",5:"Post-Deployment"},Yi={sampleRubric:[{id:"r1",label:"Leadership",max:5},{id:"r2",label:"Culture",max:5}],adoptionRubric:[{id:"a1",label:"Adoption awareness",max:100},{id:"a2",label:"Training coverage",max:100}],vision:{"Strategic Direction and Leadership":{1:"Senior leaders take initial steps to develop the vision through workshops and discussions, beginning to align on a shared future direction and its link to strategic objectives.",2:"A draft vision has been created and is being tested and refined with a wider group to check clarity, relevance and alignment to strategy.",3:"A clear vision is defined and agreed at senior level but not yet consistently communicated to all stakeholders.",4:"Senior leaders consistently communicate the vision and link it to organisational goals, priorities and decisions.",5:"Leaders speak with one voice about the vision, actively reinforcing it through actions and decisions and ensuring it is well understood across the organisation."},"People Experience and Culture":{1:"Early conversations focus on what is changing but staff involvement is limited. The vision is not yet clear or meaningful to most people.",2:"The draft vision is tested with a wider audience. Staff input is sought to check relevance and whether the vision reflects real experiences and concerns. Feedback is used to refine the vision.",3:`The vision is defined but not yet consistently communicated to all stakeholders.

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

There is a clearer plan for sustainment, although it is still being embedded and tested.`,3:"Key processes, roles, and measures are in place and being followed. The change is being maintained in practice, with issues identified and addressed as they arise.",4:"The change is embedded into day-to-day operations. Processes are consistently followed, and performance is stable, with benefits starting to be realised.",5:"The change is fully sustained as “the way we do things.” Processes are regularly reviewed and improved, and performance continues to strengthen over time."}}},Pa=["highlight-builder","force-field-analysis","compare"],mt={"highlight-builder":{label:"Highlight Builder",matchText:"Highlight Builder"},"force-field-analysis":{label:"Force Field Analysis",matchText:"Force Field Analysis"},compare:{label:"Assess & Compare",matchText:"Assess & Compare"}};function Wt(n,t){if(!n.linkedActions.length)return"Not Started";const s=n.linkedActions.map(a=>{const i=(t[a.lens]||[]).find(l=>l.id===a.actionId);return(i==null?void 0:i.status)||"Planned"});return s.some(a=>a==="Blocked")?"Blocked":s.every(a=>a==="Completed")?"Completed":s.some(a=>a!=="Planned")?"In Progress":"Not Started"}function Fs(){return`cst-${Date.now()}-${Math.random().toString(36).slice(2,10)}`}function Nt(n){return{trustName:(n==null?void 0:n.trustName)||"",region:(n==null?void 0:n.region)||"",trustType:(n==null?void 0:n.trustType)||"",projectName:(n==null?void 0:n.projectName)||"",leadName:(n==null?void 0:n.leadName)||"",cst:{...Pi,...(n==null?void 0:n.cst)||{}},linkOverrides:n==null?void 0:n.linkOverrides,componentFurtherReading:n==null?void 0:n.componentFurtherReading,coreLinks:n==null?void 0:n.coreLinks,customComponentLinks:n==null?void 0:n.customComponentLinks,toolLinks:(n==null?void 0:n.toolLinks)??Pa.map(t=>({key:`tool-default-${t}`,tool:t,matchText:mt[t].matchText})),externalLinksInitiated:n==null?void 0:n.externalLinksInitiated,teamMembers:(n==null?void 0:n.teamMembers)||[],cstId:n==null?void 0:n.cstId}}function Ki(n){return n?Object.keys(n).reduce((t,s)=>{const a=n[s]||{};return t[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},t},{}):{}}function bt(n){return{view:(n==null?void 0:n.view)||"dashboard",orgProfile:Nt(n==null?void 0:n.orgProfile),currentDraft:(n==null?void 0:n.currentDraft)||{},objectives:n!=null&&n.objectives?es(n.objectives):{},suppressedAutoActions:zi(n==null?void 0:n.suppressedAutoActions),auditLog:Ji(n==null?void 0:n.auditLog),history:(n==null?void 0:n.history)||[],phaseOverrides:(n==null?void 0:n.phaseOverrides)||{},pathwayChecks:Ki(n==null?void 0:n.pathwayChecks)}}function zi(n){return n?Object.keys(n).reduce((t,s)=>(t[s]=[...n[s]||[]],t),{}):{}}function Ji(n){return n?n.map(t=>({...t})):[]}function _t(){return{score:0,justification:"",evidence:"",actions:[]}}function Da(n){return{score:n.score,justification:n.justification,evidence:n.evidence,actions:n.actions.map(t=>({...t,linkedTargets:(t.linkedTargets||[]).map(s=>({componentId:s.componentId,lens:s.lens}))}))}}function Zt(n){return Object.keys(n).reduce((t,s)=>(t[s]=Object.keys(n[s]).reduce((a,i)=>(a[i]=Da(n[s][i]),a),{}),t),{})}function Xi(n){return{...n,linkedActions:n.linkedActions.map(t=>({...t}))}}function es(n){return Object.keys(n).reduce((t,s)=>(t[s]=(n[s]||[]).map(Xi),t),{})}function $a(n,t){if(n<=0)return"Amber";const s=t-n;return s>=2?"Red":s>0?"Amber":"Green"}function Qi(n,t=new Date){if(n.length===0)return{status:"Green",reason:"No outstanding actions at the current level."};const s=n.map(o=>({action:o,due:o.dueDate?new Date(o.dueDate):null})).map(({action:o,due:c})=>({action:o,due:c&&!isNaN(c.getTime())?c:null})),a=s.filter(({due:o})=>o!==null&&o<t);if(a.length>0){const o=a.length>1?` and ${a.length-1} more`:"";return{status:"Red",reason:`${a.length} action${a.length===1?" is":"s are"} overdue: "${a[0].action.text}"${o}.`}}const i=new Date(t.getTime()+14*24*60*60*1e3),l=s.filter(({due:o})=>o!==null&&o<=i);return l.length>0?{status:"Amber",reason:`${l.length} action${l.length===1?" is":"s are"} due within 14 days: "${l[0].action.text}".`}:s.filter(({due:o})=>o===null).length===n.length?{status:"Amber",reason:`${n.length} action${n.length===1?" has":"s have"} no due date set, so timeline risk can't be assessed.`}:{status:"Green",reason:"All outstanding actions are on track against their due dates."}}const Ta={Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},Zi={Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"},Vt={1:{vision:5,case_for_change:5,sponsorship:0,change_network:0,benefits:0,change_impact:0,risk_management:0,cm_readiness:0,stakeholder:0,resistance:0,skills_learning:0,capability:0,change_adoption:0,process_change:0,reinforcement:0,org_maturity:0,transfer_bau:0},2:{vision:5,case_for_change:5,sponsorship:2,change_network:2,benefits:3,change_impact:2,risk_management:2,cm_readiness:2,stakeholder:2,resistance:2,skills_learning:2,capability:2,change_adoption:2,process_change:3,reinforcement:2,org_maturity:2,transfer_bau:2},3:{vision:5,case_for_change:5,sponsorship:3,change_network:3,benefits:4,change_impact:3,risk_management:3,cm_readiness:3,stakeholder:3,resistance:3,skills_learning:4,capability:3,change_adoption:3,process_change:4,reinforcement:3,org_maturity:3,transfer_bau:3},4:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:4,stakeholder:5,resistance:4,skills_learning:5,capability:4,change_adoption:4,process_change:5,reinforcement:4,org_maturity:4,transfer_bau:4},5:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:5,stakeholder:5,resistance:5,skills_learning:5,capability:5,change_adoption:5,process_change:5,reinforcement:5,org_maturity:5,transfer_bau:5}};function xt(n,t,s){return!t||!Vt[t]?s:Vt[t][n]??s}function eo(n){const t=Number((n==null?void 0:n.score)||0),s=((n==null?void 0:n.actions)||[]).some(a=>a.readinessScore===0);return t===0&&!s?1:t}function no(n,t){const s=[];return n.lenses.forEach(a=>{const i=t(n.id,a),l=eo(i);((i==null?void 0:i.actions)||[]).forEach(r=>{(r.readinessScore??l)===l&&!Qt(r.status)&&s.push({id:r.id,text:r.text,lens:a,owner:r.owner||"",status:r.status||"",dueDate:r.dueDate||""})})}),s}function La(n,t,s){return n.filter(a=>a.phase===s).map(a=>{const i=no(a,t),{status:l,reason:r}=Qi(i),o=`${i.length} action${i.length===1?"":"s"} pending completion.`;return{componentId:a.id,componentLabel:a.label,phase:a.phase,gapToTarget:0,bragStatus:l,bragReason:r,summary:o,message:`${a.label}: ${o}`,outstandingActions:i}}).filter(a=>a.outstandingActions.length>0).sort((a,i)=>{const l={Red:0,Amber:1,Green:2,Blue:3};return l[a.bragStatus]!==l[i.bragStatus]?l[a.bragStatus]-l[i.bragStatus]:i.outstandingActions.length-a.outstandingActions.length})}function to(n,t){var R;let s=0,a=0,i=0,l=0;const r=new Map;t.forEach(I=>{const b=r.get(I.phase)||{componentCount:0,assessedLenses:0,totalLenses:0,onTrackComponents:0,totalActions:0,completedActions:0};b.componentCount+=1,b.totalLenses+=I.lenses.length;let k=0;I.lenses.forEach(T=>{var z;const P=(z=n.currentDraft[I.id])==null?void 0:z[T],ue=Number((P==null?void 0:P.score)||0);s+=ue,k+=ue,ue>0&&(a+=1,b.assessedLenses+=1),((P==null?void 0:P.actions)||[]).forEach(le=>{i+=1,b.totalActions+=1,Qt(le.status)&&(l+=1,b.completedActions+=1)})});const q=I.lenses.length?Number((k/I.lenses.length).toFixed(1)):0,E=xt(I.id,I.phase,I.target);q>=E&&(b.onTrackComponents+=1),r.set(I.phase,b)});const o=t.reduce((I,b)=>I+b.lenses.length,0),c=o*5,f=c?Math.round(s/c*100):0,d=i?Math.round(l/i*100):0,m=[...r.entries()].sort(([I],[b])=>I-b).map(([I,b])=>{const k=b.totalActions?Math.round(b.completedActions/b.totalActions*100):0,q=b.componentCount?b.onTrackComponents/b.componentCount:0,E=q>=.75&&k>=50?"Green":q>=.4||k>=25?"Amber":"Red";return{phase:I,componentCount:b.componentCount,assessedLenses:b.assessedLenses,totalLenses:b.totalLenses,onTrackComponents:b.onTrackComponents,actionCompletionPct:k,rag:E}}),v=m.find(I=>I.onTrackComponents<I.componentCount),p=(v==null?void 0:v.phase)||((R=m[m.length-1])==null?void 0:R.phase)||1,S=La(t,(I,b)=>{var k;return(k=n.currentDraft[I])==null?void 0:k[b]},p);return{totalCurrent:s,assessedCount:a,totalExpected:o,overallPct:f,totalActions:i,completedActions:l,actionCompletionPct:d,currentPhase:p,phaseSummaries:m,nextSteps:S}}function so(n,t,s,a){return t.map(i=>{let l=0,r=0;return s.forEach(o=>{o.lenses.includes(i)&&(l+=Number(a(o.id,i).score||0),r+=1)}),r?Number((l/r).toFixed(1)):0})}function ao(n,t){return n.map(s=>{let a=0,i=0;return t.forEach(l=>{l.lenses.includes(s)&&(a+=l.target,i+=1)}),i?Number((a/i).toFixed(1)):0})}function io(n,t,s,a){const i=so(n,t,s,a),l=ao(t,s);return{labels:t,datasets:[{label:"Current Score",data:i,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",borderWidth:2,pointRadius:4,pointHoverRadius:6},{label:"Target",data:l,borderColor:"#00A499",backgroundColor:"rgba(0, 164, 153, 0.05)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function Ba(n,t,s){const a=s&&Vt[s]?s:null,i=r=>r<=0?"#768692":r<1.5?"#AE2521":r<2.5?"#FFB81C":r<3.5?"#005EB8":r<4.5?"#330072":"#00A499",l=n.map(r=>{const o=r.lenses.map(d=>t(r.id,d));if(!o.some(d=>d.score>0||!!d.justification.trim()||!!d.evidence.trim()||d.actions.length>0))return null;const f=o.map(d=>Number(d.score||0));return f.length?Math.min(...f):null});return{labels:n.map(r=>r.label),datasets:[{label:"Current Readiness (weakest lens)",data:l,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.12)",borderWidth:2,pointRadius:l.map(r=>r===null?0:4),pointHoverRadius:l.map(r=>r===null?0:6),pointBackgroundColor:l.map(r=>i(r??0)),pointBorderColor:l.map(r=>i(r??0))},{label:a?`Exemplar (Phase ${a})`:"Target Average",data:n.map(r=>xt(r.id,a||void 0,r.target)),borderColor:"#94a3b8",backgroundColor:"rgba(148, 163, 184, 0.06)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function oo(n,t,s){const a=[],i=new Set,l=(r,o,c)=>{const f=`${c.id}:${r}:${o}`;if(i.has(f))return;i.add(f);const d=t(r);a.push({compId:r,component:d.label,lens:o,action:{...c}})};return Object.keys(n.currentDraft).forEach(r=>{Object.keys(n.currentDraft[r]).forEach(o=>{(s(r,o).actions||[]).forEach(f=>{(f.linkedTargets&&f.linkedTargets.length?f.linkedTargets:[{componentId:r,lens:o}]).forEach(m=>{l(m.componentId,m.lens,f)})})})}),a}function ro(n,t,s){var c;const a=((c=n.objectives)==null?void 0:c[t])||[],i=f=>f.reduce((d,m)=>(d[m]=s(t,m).actions,d),{}),l=Array.from(new Set(a.flatMap(f=>f.linkedActions.map(d=>d.lens)))),r=i(l),o=a.filter(f=>Wt(f,r)==="Completed").length;return{total:a.length,completed:o}}const Us=7*24*60*60*1e3,lo=30*24*60*60*1e3;function co(n,t,s){const a=[];t.phaseSummaries.forEach(S=>{const R=an[S.phase]||`Phase ${S.phase}`;a.push({id:`phase-${S.phase}-assessed`,category:"Phase",label:`Phase ${S.phase}: ${R} - fully assessed`,description:"Every lens across this phase's components has been scored.",completed:S.totalLenses>0&&S.assessedLenses===S.totalLenses}),a.push({id:`phase-${S.phase}-on-track`,category:"Phase",label:`Phase ${S.phase}: ${R} - on track`,description:"Every component in this phase is scoring at or above its exemplar target for where the programme is now.",completed:S.componentCount>0&&S.onTrackComponents===S.componentCount})});const i=Object.values(n.currentDraft).flatMap(S=>Object.values(S).flatMap(R=>R.actions||[]));a.push({id:"all-actions-owned",category:"Ownership",label:"Every action has an owner",description:"No actions are left unassigned.",completed:i.length>0&&i.every(S=>{var R;return!!((R=S.owner)!=null&&R.trim())})});const l=Object.values(n.objectives||{}).flat();a.push({id:"all-outcomes-owned",category:"Ownership",label:"Every outcome has an owner",description:"No outcomes are left unassigned.",completed:l.length>0&&l.every(S=>{var R;return!!((R=S.owner)!=null&&R.trim())})});const r=Date.now(),o=n.auditLog||[],c=o.filter(S=>r-new Date(S.timestamp).getTime()<=Us);a.push({id:"active-this-week",category:"Cadence",label:"Active this week",description:"At least one update has been made in the last 7 days.",completed:c.length>0});const f=new Set;o.forEach(S=>{const R=Math.floor((r-new Date(S.timestamp).getTime())/Us);R>=0&&R<4&&f.add(R)}),a.push({id:"four-week-cadence",category:"Cadence",label:"Steady progress: updated every week for a month",description:`${f.size}/4 of the last 4 weeks have at least one update.`,completed:f.size>=4}),a.push({id:"month-finalised",category:"Cadence",label:"This month finalised",description:"The current month has a finalised snapshot, so progress this month is captured for the trend.",completed:(n.history||[]).some(S=>S.monthLabel===s)});const d=n.orgProfile.teamMembers||[];a.push({id:"team-roster-started",category:"Team",label:"Team roster started",description:"At least 2 team members have been added.",completed:d.length>=2});const m=o.filter(S=>r-new Date(S.timestamp).getTime()<=lo),v=new Set(m.map(S=>S.actor));a.push({id:"multiple-contributors",category:"Team",label:"Multiple contributors this month",description:"More than one person has made updates in the last 30 days.",completed:v.size>=2});const p=new Set(i.map(S=>{var R;return(R=S.owner)==null?void 0:R.trim().toLowerCase()}).filter(S=>!!S));return a.push({id:"ownership-spread",category:"Team",label:"Ownership spread across the team",description:"Actions are owned by more than one person, not concentrated on one.",completed:p.size>=2}),a}const uo=["Strategic Direction and Leadership","People Experience and Culture","Planning and Risk","Skills and Behaviour","Process and Sustainment"],ns={"Strategic Direction and Leadership":{outcome:"Provide a clear and unifying direction for the change, backed by visible, empowered leadership that removes barriers, prioritises resources, and drives accountability.",whatGoodLooksLike:"Leaders speak with one voice, consistently reinforcing the vision and outcomes. Decisions are timely, transparent, and aligned to strategic priorities. Governance is purposeful, with clear roles and escalations. Everyone understands why the change is happening and how it connects to organisational goals."},"People Experience and Culture":{outcome:"Create the conditions where people feel informed, supported, safe, and motivated, creating a culture that embraces the change rather than resists it.",whatGoodLooksLike:"Staff feel involved, heard, and respected. Communication is timely, honest, and tailored to different roles. People know how the change affects them and feel psychologically safe to raise concerns. Change Champions are active, engagement is high, and belief improves over time. Behaviours begin to shift organically as trust grows."},"Planning and Risk":{outcome:"Use evidence, data, and structured analysis to plan the change effectively, anticipate impacts, manage risks, and inform decision-making throughout delivery.",whatGoodLooksLike:"Impacts are well understood and documented. Risks are identified early and mitigated proactively. Baselines and KPIs are established before implementation, with benefits tracked throughout. Pilots and readiness checks ensure no surprises. Decisions are grounded in insight, not opinion."},"Skills and Behaviour":{outcome:"Give people the capabilities, confidence, and behavioural habits they need to adopt the new ways of working consistently and sustainably.",whatGoodLooksLike:"Staff are trained, assessed, and supported in ways that match real-world workflows. New behaviours are clearly defined, reinforced by leaders, and evident in day-to-day practice. Change Champions and Super-users are active; confidence grows over time; and requests for support decrease as competence increases."},"Process and Sustainment":{outcome:"Embed the change into operational processes, ensuring it becomes the way we do things, and create mechanisms for continuous improvement and long-term stability.",whatGoodLooksLike:"Updated SOPs, workflows, and ownership structures are in place and being followed. Issues are resolved quickly. Benefits are monitored and reported regularly. Improvements continue beyond go-live, with clear BAU ownership. The change stabilises and performance gains hold or increase over time."}},mo={vision:"Defines the future state and why the change matters.",case_for_change:"Builds a clear, credible rationale and expected benefits.",sponsorship:"Secures visible leadership ownership, governance, and decisions.",change_network:"Builds and mobilises change agents and local champions.",benefits:"Tracks baseline, benefits ownership, and value realisation.",change_impact:"Assesses who is impacted and the scale of change required.",risk_management:"Identifies, tracks, and mitigates adoption and delivery risks.",cm_readiness:"Confirms readiness, sequencing, and change planning discipline.",stakeholder:"Plans and delivers stakeholder engagement and communications.",resistance:"Anticipates and addresses resistance with practical interventions.",skills_learning:"Designs learning, support, and reinforcement for role readiness.",capability:"Builds confidence and competence to adopt new ways of working.",change_adoption:"Measures uptake and consistency of new behaviours in practice.",process_change:"Embeds workflow changes into everyday operational delivery.",reinforcement:"Sustains momentum so adoption does not decay after launch.",org_maturity:"Improves long-term organisational change capability and maturity.",transfer_bau:"Transitions ownership into BAU with clear accountability."};function Ma(n){return mo[n]||"Component description not yet defined."}function Ga(n){const s=ns[n];return s?`This lens ${s.outcome.charAt(0).toLowerCase()}${s.outcome.slice(1)}`:"This lens provides an additional perspective on how each component is landing across teams and services."}const Wn=[{score:0,label:"Not Started",color:"#768692"},{score:1,label:"Emerging",color:"#AE2521"},{score:2,label:"Developing",color:"#FFB81C"},{score:3,label:"Embedding",color:"#005EB8"},{score:4,label:"Adopted",color:"#330072"},{score:5,label:"Thriving",color:"#00A499"}];function rt(n){return Wn[Math.max(0,Math.min(Wn.length-1,Math.round(n)))]}const Hs={small:560,medium:680,large:1e3};function Ws(n,t,s,a,i){return i?"Blue":s<=0?"N/A":a<=0?"Amber":n>=t&&a<s?"Green":$a(n,t)}const go={"N/A":"text-slate-600 bg-slate-200",Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},Vs=["#0f766e","#0369a1","#7c3aed","#b45309","#be123c"],po=Wn;function ho({store:n,components:t,lenses:s,metrics:a,getEntry:i,onComponentClick:l,onNavigate:r,onOpenLensInfo:o,onOpenOnboarding:c,colorAccessibilityMode:f="standard",darkMode:d=!1,phaseFocusMode:m="auto",manualPhaseFocus:v,onPhaseFocusModeChange:p,onManualPhaseFocusChange:S,onResetPhaseFocus:R,componentRadarVisible:I=!0,onComponentRadarVisibleChange:b,componentRadarSize:k="medium",onComponentRadarSizeChange:q}){const E=hn("dashboard"),[T,P]=g.useState(""),[ue,M]=g.useState("all"),[z,le]=g.useState(()=>a.currentPhase),[ie,A]=g.useState("all"),[G,Ne]=g.useState("score"),[Ee,Le]=g.useState("desc"),[Ke,L]=g.useState(!1),oe=g.useMemo(()=>[...new Set(t.map(_=>_.phase))].sort((_,te)=>_-te),[t]),se=a.currentPhase,ge=m==="manual"&&v&&oe.includes(v)?v:se,[fe,ye]=g.useState(!0),ne=g.useMemo(()=>n.history.length>0?n.history[n.history.length-1]:null,[n.history]),De=ne!==null?a.overallPct-ne.overallPercentage:null,$e=g.useMemo(()=>{const _=new Date;_.setHours(0,0,0,0);const te=new Date(_);te.setDate(_.getDate()+7);const X=[];return t.forEach(pe=>{pe.lenses.forEach(be=>{i(pe.id,be).actions.forEach(Ce=>{if(!Ce.dueDate||Ce.status==="Completed"||Ce.status==="Cancelled")return;const Ae=new Date(Ce.dueDate);isNaN(Ae.getTime())||Ae<=te&&X.push({action:Ce,componentLabel:pe.label,componentId:pe.id,isOverdue:Ae<_})})})}),X.sort((pe,be)=>new Date(pe.action.dueDate).getTime()-new Date(be.action.dueDate).getTime())},[t,i,n.currentDraft]),ze=g.useMemo(()=>{const _=T.trim().toLowerCase();return t.map(te=>{let X=0,pe=!0,be=0,Ce=0;te.lenses.forEach(j=>{const U=i(te.id,j),H=Number(U.score||0);X+=H,H!==5&&(pe=!1);const ee=U.actions||[];be+=ee.length,Ce+=ee.filter(ae=>ae.status==="Completed").length});const Ae=Number((X/te.lenses.length).toFixed(1)),x=xt(te.id,ge,te.target),O=Ae===0?"not-started":Ae>=x?"on-track":"below-target";let C=null;if(ne){let j=0;te.lenses.forEach(ee=>{var ae,xe;j+=Number(((xe=(ae=ne.data[te.id])==null?void 0:ae[ee])==null?void 0:xe.score)||0)});const U=Number((j/te.lenses.length).toFixed(1)),H=Number((Ae-U).toFixed(1));H!==0&&(C=H)}return{component:te,avgNum:Ae,exemplarTarget:x,status:O,delta:C,actionCount:be,completedActionCount:Ce,allLensesLevelFive:pe}}).filter(({component:te,status:X})=>ue!=="all"&&X!==ue||z!=="all"&&te.phase!==z?!1:_?te.label.toLowerCase().includes(_):!0).sort((te,X)=>{let pe=0;return G==="name"?pe=te.component.label.localeCompare(X.component.label):G==="target"?pe=te.component.target-X.component.target:pe=te.avgNum-X.avgNum,Ee==="asc"?pe:-pe})},[t,z,ge,i,ne,T,G,Ee,ue]),Be=g.useMemo(()=>{const _=[];return T.trim()&&_.push(`Search: ${T.trim()}`),ue!=="all"&&_.push(`Status: ${ue.replace("-"," ")}`),z!=="all"&&_.push(`Phase: ${z}`),(G!=="score"||Ee!=="desc")&&_.push(`Sort: ${G} (${Ee})`),_},[z,T,G,Ee,ue]),Ie=()=>{P(""),M("all"),le("all"),Ne("score"),Le("desc"),L(!1)},cn=a.phaseSummaries.find(_=>_.phase===ge),Je=(cn==null?void 0:cn.rag)||"Red",dn=Je.toLowerCase(),Ze=f==="color-blind-friendly"?{"N/A":"text-slate-700 bg-slate-200",Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"}:go;return e.jsxs("div",{className:`adoption-dashboard max-w-6xl mx-auto ${d?"theme-dark":"theme-light"}`,children:[fe&&$e.length>0&&e.jsx("div",{className:"mb-6 rounded-lg border border-red-200 bg-red-50 p-4",children:e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-sm font-semibold text-red-800 mb-2",children:[$e.filter(_=>_.isOverdue).length>0&&`${$e.filter(_=>_.isOverdue).length} overdue action${$e.filter(_=>_.isOverdue).length>1?"s":""}`,$e.filter(_=>_.isOverdue).length>0&&$e.filter(_=>!_.isOverdue).length>0&&", ",$e.filter(_=>!_.isOverdue).length>0&&`${$e.filter(_=>!_.isOverdue).length} due within 7 days`]}),e.jsxs("ul",{className:"space-y-1.5",children:[$e.slice(0,3).map(_=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`shrink-0 text-xs font-bold px-1.5 py-0.5 rounded ${_.isOverdue?"bg-red-200 text-red-800":"bg-amber-100 text-amber-800"}`,children:_.isOverdue?"Overdue":"Due soon"}),e.jsxs("span",{className:"text-xs text-slate-700",children:[e.jsx("button",{onClick:()=>l(_.componentId),className:"font-medium text-[#005eb8] hover:underline mr-1",children:_.componentLabel}),"— ",_.action.text,_.action.dueDate&&e.jsxs("span",{className:"text-slate-400 ml-1",children:["(due"," ",new Date(_.action.dueDate).toLocaleDateString("en-GB",{day:"numeric",month:"short"}),")"]})]})]},_.action.id)),$e.length>3&&e.jsxs("li",{className:"text-xs text-slate-500 pl-1",children:["+ ",$e.length-3," more - see the Action Tracker for the full list."]})]})]}),e.jsx("button",{onClick:()=>ye(!1),className:"shrink-0 text-slate-400 hover:text-slate-600 text-xl leading-none","aria-label":"Dismiss",children:"×"})]})}),e.jsxs("div",{className:"mb-1 flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${d?"text-slate-100":"text-slate-800"}`,children:"Adoption Engine Dashboard"}),e.jsx(yn,{onClick:E.reopen,darkMode:d})]}),c?e.jsx("button",{type:"button",onClick:c,className:"rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Show introduction again"}):null]}),e.jsxs("p",{className:`text-sm mb-6 ${d?"text-slate-300":"text-slate-600"}`,children:["This tracks how ready ",n.orgProfile.projectName||"your programme"," is for adoption, based on ",t.length," change-management components, each assessed through up to"," ",s.length," lenses."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{className:`${d?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-4 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${d?"text-slate-300":"text-slate-500"}`,children:"Live Delivery Progress"}),e.jsxs("div",{className:"flex items-end gap-3",children:[e.jsxs("span",{className:"text-3xl font-bold text-[#005eb8]",children:[a.overallPct,"%"]}),De!==null&&e.jsxs("span",{className:`text-sm font-semibold mb-1 ${De>0?"text-green-600":De<0?"text-red-500":"text-slate-400"}`,children:[De>0?"↑":De<0?"↓":"="," ",Math.abs(De),"% vs last month"]})]}),e.jsx("div",{className:"mt-4 w-full bg-slate-100 rounded-full h-3 relative overflow-hidden",children:e.jsx("div",{className:"absolute top-0 left-0 h-full bg-[#005eb8]",style:{width:`${a.overallPct}%`}})}),e.jsx("div",{className:"flex justify-between text-xs mt-2 text-slate-400",children:e.jsx("span",{children:"Derived from current working data across all components."})})]}),e.jsxs("div",{className:`dashboard-metric-card dashboard-metric-card--phase dashboard-metric-card--${dn} rounded-lg shadow-sm p-4 border`,children:[e.jsx("h3",{className:"dashboard-metric-card__label text-sm font-medium mb-1",children:"Current Phase Focus"}),e.jsxs("div",{className:"mb-2 flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>p==null?void 0:p("auto"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${m==="auto"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Auto"}),e.jsx("button",{type:"button",onClick:()=>p==null?void 0:p("manual"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${m==="manual"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Manual"}),m==="manual"?e.jsx("select",{value:ge,onChange:_=>S==null?void 0:S(Number(_.target.value)),className:"rounded-md border border-white/50 bg-white/90 px-2 py-1 text-xs font-medium text-slate-800","aria-label":"Manual phase focus",children:oe.map(_=>e.jsx("option",{value:_,children:an[_]||`Phase ${_}`},_))}):null,m==="manual"&&R?e.jsx("button",{type:"button",onClick:R,className:"rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100",children:"Reset to suggested"}):null]}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsx("span",{className:"dashboard-metric-card__headline text-3xl font-bold",children:an[ge]||`Phase ${ge}`})}),e.jsxs("p",{className:"dashboard-metric-card__description text-sm mt-2",children:[Je," status based on delivery progress and action completion.",m==="manual"?` Suggested phase is ${an[se]||`Phase ${se}`}.`:""]})]}),e.jsxs("div",{className:`${d?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-4 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${d?"text-slate-300":"text-slate-500"}`,children:"Action Completion"}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsxs("span",{className:`text-3xl font-bold ${d?"text-slate-100":"text-slate-700"}`,children:[a.actionCompletionPct,"%"]})}),e.jsxs("p",{className:`text-sm mt-2 ${d?"text-slate-300":"text-slate-500"}`,children:[a.completedActions," actions completed. Keep it up!"]})]})]}),e.jsxs("div",{className:`mb-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border px-4 py-3 ${d?"border-blue-800 bg-blue-950/40 text-slate-200":"border-blue-200 bg-blue-50 text-slate-700"}`,children:[e.jsx("p",{className:"text-sm",children:"Need a focused view of what needs attention today?"}),r?e.jsx("button",{type:"button",onClick:()=>r("daily-checkin"),className:"font-semibold text-[#005eb8] underline underline-offset-2 hover:text-[#003087]",children:"Open Daily Check-in"}):null]}),a.assessedCount===0?e.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-8 border border-slate-200 mb-8 text-center",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800",children:"Getting started"}),e.jsx("p",{className:"text-sm text-slate-600 mt-2 max-w-xl mx-auto",children:"Nothing has been assessed yet, so there's nothing to chart. Set up your Project first, then start scoring your first component to see your readiness build up here."}),e.jsxs("div",{className:"mt-4 flex items-center justify-center gap-3",children:[r?e.jsx("button",{type:"button",onClick:()=>r("project-details"),className:"rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Set up your Project"}):null,t[0]?e.jsx("button",{type:"button",onClick:()=>l(t[0].id),className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Start your first assessment"}):null]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${d?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-1 ${d?"text-slate-100":"text-slate-800"}`,children:"Phase Progress"}),e.jsxs("p",{className:`text-sm mb-4 ${d?"text-slate-300":"text-slate-500"}`,children:["Phases run 1 to 5, from early readiness at go-live through to fully embedding the change."," ",r?e.jsx("button",{type:"button",onClick:()=>r("engine-explained"),className:"font-medium text-[#005eb8] hover:underline",children:"See how the Adoption Engine works"}):null]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:a.phaseSummaries.map(_=>{const te=_.rag==="Green"?"bg-green-100 text-green-700":_.rag==="Amber"?"bg-amber-100 text-amber-700":"bg-red-100 text-red-700",X=_.totalLenses?Math.round(_.assessedLenses/_.totalLenses*100):0;return e.jsxs("div",{className:`rounded-md border p-4 ${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:`font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:an[_.phase]||`Phase ${_.phase}`}),e.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded ${te}`,children:_.rag})]}),e.jsxs("p",{className:`text-xs ${d?"text-slate-300":"text-slate-600"}`,children:[_.onTrackComponents,"/",_.componentCount," components on target"]}),e.jsxs("p",{className:`text-xs mt-1 ${d?"text-slate-300":"text-slate-600"}`,children:[X,"% lens coverage, ",_.actionCompletionPct,"% actions complete"]})]},_.phase)})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("details",{className:`order-2 mb-8 overflow-hidden rounded-lg border shadow-sm group ${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between px-5 py-4 text-lg font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] [&::-webkit-details-marker]:hidden ${d?"text-slate-100 hover:bg-slate-700":"text-slate-800 hover:bg-slate-50"}`,children:[e.jsx("span",{children:"Readiness analytics"}),e.jsx("span",{className:"text-2xl font-normal transition-transform group-open:rotate-45",children:"+"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 border-t border-slate-200 p-5 lg:grid-cols-2 dark:border-slate-700",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h3",{className:`mb-3 text-base font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Readiness Trajectory"}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${d?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:n.history.length>0?e.jsx("canvas",{id:"adoption-line-chart"}):e.jsx("div",{className:"text-center text-slate-400",children:e.jsx("p",{children:"No historical data yet. Finalise your first month to generate trends."})})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Strategic Lenses Spread"}),o&&s[0]?e.jsx("button",{type:"button",onClick:()=>o(s[0]),className:"text-xs font-medium text-[#005eb8] hover:underline",children:"What's a lens?"}):null]}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${d?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:e.jsx("canvas",{id:"adoption-radar-chart"})}),e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mt-4 rounded-md border p-3`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${d?"text-slate-300":"text-slate-600"}`,children:"Lens key"}),e.jsx("div",{className:"mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2",children:s.map((_,te)=>e.jsxs("div",{className:`flex items-center gap-2 text-xs ${d?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full",style:{backgroundColor:Vs[te%Vs.length]},"aria-hidden":"true"}),e.jsx("span",{children:_})]},`lens-key-${_}`))})]}),e.jsx("p",{className:`text-xs text-center mt-4 ${d?"text-slate-300":"text-slate-500"}`,children:"Visualises your current draft readiness score averaged across the 5 strategic lenses against their specific target requirements."})]})]})]}),e.jsxs("div",{className:`order-1 ${d?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"mb-4 flex w-full flex-col gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:`text-lg font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Change Component Radar"}),e.jsx("p",{className:`text-xs mt-1 ${d?"text-slate-300":"text-slate-500"}`,children:"Show or hide the change-component readiness radar, then use the overview list below to drill into delivery status."})]}),e.jsxs("div",{className:"flex w-full flex-wrap items-center justify-end gap-2",children:[I?e.jsx("div",{role:"group","aria-label":"Change component radar size",className:"flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-medium",children:["small","medium","large"].map(_=>e.jsx("button",{type:"button",onClick:()=>q==null?void 0:q(_),"aria-pressed":k===_,className:`px-3 py-2 capitalize transition-colors ${k===_?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:_},_))}):null,e.jsx("button",{type:"button",onClick:()=>b==null?void 0:b(!I),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-white",children:I?"Hide change component radar":"Show change component radar"})]})]}),I?e.jsxs("div",{className:`w-full ${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("div",{className:`mx-auto flex items-center justify-center rounded border p-2 ${d?"border-slate-700 bg-slate-950":"border-slate-100 bg-white"}`,style:{height:Hs[k],maxWidth:Hs[k]+120},children:e.jsx("canvas",{id:"adoption-component-radar-chart",className:"block h-full w-full"})}),e.jsx("div",{id:"radar-legend",className:`mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm ${d?"text-slate-300":"text-slate-600"}`,children:po.map(_=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mr-2 h-3 w-3 rounded-full",style:{backgroundColor:_.color}}),e.jsxs("span",{children:[_.score," = ",_.label]})]},_.score))}),e.jsx("p",{className:`mt-4 text-center text-xs ${d?"text-slate-300":"text-slate-500"}`,children:"Visualises the weakest lens score for each component (a component is only as ready as its weakest lens) against the phase exemplar profile. Click a component label to jump to its assessment."})]}):null,e.jsxs("div",{className:"mt-4 w-full space-y-3",children:[e.jsxs("p",{className:`text-xs ${d?"text-slate-300":"text-slate-500"}`,children:["BRAG scoring is used for the change component overview:",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-sky-100 text-sky-800",children:"Blue"})," = every lens is level 5,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-green-100 text-green-800",children:"Green"})," = on target,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-red-100 text-red-800",children:"Red"})," = behind target dates,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-amber-100 text-amber-800",children:"Amber"})," = at risk / nearing deadline."]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:T,onChange:_=>P(_.target.value),placeholder:"Search components...",className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"}),e.jsxs("select",{value:ue,onChange:_=>M(_.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All statuses"}),e.jsx("option",{value:"not-started",children:"Not started"}),e.jsx("option",{value:"below-target",children:"Below target"}),e.jsx("option",{value:"on-track",children:"On track"})]}),e.jsxs("select",{value:z,onChange:_=>le(_.target.value==="all"?"all":Number(_.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All phases"}),oe.map(_=>e.jsx("option",{value:_,children:an[_]||`Phase ${_}`},_))]})]}),e.jsx(Ra,{showAdvancedControls:Ke,onToggleAdvanced:()=>L(_=>!_),onReset:Ie,resultText:`Showing ${ze.length} components`,activeFilters:Be,activeFiltersAriaLabel:"Active component filters",darkMode:d}),Ke?e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-md border border-slate-200 bg-slate-50 p-3",children:[e.jsxs("select",{value:G,onChange:_=>Ne(_.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"score",children:"Sort by score"}),e.jsx("option",{value:"name",children:"Sort by name"}),e.jsx("option",{value:"target",children:"Sort by target"})]}),e.jsx("button",{type:"button",onClick:()=>Le(_=>_==="asc"?"desc":"asc"),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white transition-colors",children:Ee==="asc"?"Ascending":"Descending"})]}):null]}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:[ze.map(({component:_,avgNum:te,exemplarTarget:X,actionCount:pe,completedActionCount:be,delta:Ce,allLensesLevelFive:Ae})=>{const x=Ws(te,X,pe,be,Ae),O=x==="Red"?"↓":te>=X?"→":te<=0?"↑":"↗",C=x==="Red"?"text-red-500":te>=X?d?"text-slate-300":"text-slate-500":"text-amber-600";return e.jsxs("button",{onClick:()=>l(_.id),title:Ma(_.id),className:`flex justify-between items-center p-3 rounded-md transition-colors group text-left ${d?"bg-slate-900 border border-slate-700 hover:border-blue-400":"bg-slate-50 border border-slate-100 hover:border-blue-300"}`,children:[e.jsx("span",{className:`text-sm font-medium truncate pr-2 group-hover:text-[#005eb8] ${d?"text-slate-100":"text-slate-700"}`,children:_.label}),e.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[e.jsx("span",{className:`text-xs font-semibold ${C}`,title:te>=X?"On or above expected readiness for phase focus":te<=0?"Not started: raise towards expected readiness":"Below expected readiness: continue improving","aria-label":te>=X?"At expected readiness":te<=0?"Not started, increase readiness":"Below expected readiness",children:O}),Ce!==null&&e.jsxs("span",{className:`text-[11px] font-semibold ${Ce>0?"text-green-600":"text-red-400"}`,title:"Change versus last finalised month",children:[Ce>0?"+":"",Ce.toFixed(1)]}),e.jsx("span",{className:`text-xs font-bold px-2.5 py-1 rounded ${Ze[x]}`,children:x})]})]},_.id)}),!ze.length&&e.jsx("div",{className:`col-span-full rounded-md border border-dashed p-6 text-sm ${d?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-500"}`,children:"No components match the current filters."})]})]})]}),e.jsxs("details",{className:`mb-8 overflow-hidden rounded-lg border shadow-sm group ${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between px-5 py-4 text-lg font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] [&::-webkit-details-marker]:hidden ${d?"text-slate-100 hover:bg-slate-700":"text-slate-800 hover:bg-slate-50"}`,children:[e.jsx("span",{children:"Lenses and which components they apply to"}),e.jsx("span",{className:"text-2xl font-normal transition-transform group-open:rotate-45",children:"+"})]}),e.jsxs("div",{className:"border-t border-slate-200 p-5 dark:border-slate-700",children:[e.jsxs("div",{className:"flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsx("div",{children:e.jsx("p",{className:"mt-2 text-xs text-slate-600 max-w-3xl",children:"A component is the change topic you are delivering (for example, Vision). A lens is the angle used to assess that component. For example, Vision is reviewed through Strategic Direction and Leadership and People Experience and Culture to check both leadership alignment and whether people understand and believe in the vision."})}),e.jsxs("select",{value:ie,onChange:_=>A(_.target.value==="all"?"all":Number(_.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:w-40",children:[e.jsx("option",{value:"all",children:"All phases"}),oe.map(_=>e.jsx("option",{value:_,children:an[_]||`Phase ${_}`},_)),'"']})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(_=>{const te=t.filter(X=>X.lenses.includes(_)).filter(X=>ie==="all"||X.phase===ie);return te.length?e.jsxs("div",{className:`rounded-md p-4 ${d?"border border-slate-700 bg-slate-900":"border border-slate-100 bg-slate-50"}`,children:[e.jsx("h4",{className:"font-bold text-sm text-[#005eb8] mb-3",children:_}),e.jsx("p",{className:`mb-3 text-xs ${d?"text-slate-300":"text-slate-600"}`,children:Ga(_)}),e.jsx("ul",{className:"space-y-2",children:te.map(X=>{const pe=i(X.id,_),be=Number(pe.score||0),Ce=xt(X.id,ge,X.target),Ae=pe.actions||[],x=Ws(be,Ce,Ae.length,Ae.filter(O=>O.status==="Completed").length,!1);return e.jsxs("li",{className:`text-xs flex justify-between items-center p-2 rounded ${d?"bg-slate-800 border border-slate-700":"bg-white border border-slate-100"}`,children:[e.jsx("span",{className:`truncate pr-2 font-medium ${d?"text-slate-100":"text-slate-700"}`,children:X.label}),e.jsx("button",{onClick:()=>l(X.id),className:`px-2.5 py-0.5 rounded font-bold ${Ze[x]}`,children:x})]},X.id)})})]},_):null})})]})]})]}),e.jsx(Sn,{open:E.isOpen,onClose:E.close,title:"Adoption Engine Dashboard",darkMode:d,body:e.jsx("p",{children:"This tracks how ready your programme is for adoption, based on your change-management components, each assessed through several lenses. Use the filters and sort controls to focus on what needs attention, and click a component to open its assessment."})})]})}const Dn={label:"Change Management Toolkit",url:"https://future.nhs.uk/CMN/view?objectId=129489733"};function ts(n,t){var r,o,c,f,d;if(!t)return n;const s=(r=t.links)==null?void 0:r[n.key],a=(o=s==null?void 0:s.url)==null?void 0:o.trim(),i=((c=s==null?void 0:s.label)==null?void 0:c.trim())||n.label;return a?{...n,label:i,url:a}:((s==null?void 0:s.fallback)??"default")==="base"&&((d=(f=t.base)==null?void 0:f.url)!=null&&d.trim())?{...n,label:i,url:t.base.url.trim()}:{...n,label:i}}const fo="nhs-guidance-workstreams",Fa={vision:["Vision"],case_for_change:["Case for Change"],sponsorship:["Senior Sponsorship & Governance"],change_network:["Change Network"],benefits:["Benefits"],change_impact:["Change Impact"],risk_management:["Risk Management"],cm_readiness:["Change Management Readiness & Planning"],stakeholder:["Stakeholder Engagement & Comms"],resistance:["Resistance Management"],skills_learning:["Skills/Learning"],capability:["Change Management Capability"],change_adoption:["Reinforcement"],process_change:["Process change"],reinforcement:["Reinforcement"],org_maturity:["Change Management Capability"],transfer_bau:["Reinforcement"]},F=(n,t,s,a)=>({key:`fnhs_${n}`,label:t,url:`https://future.nhs.uk/CMN/view?objectId=${n}`,type:s,...a?{description:a}:{}}),Ua=[F("44704752","FuturesNHS Change Management Network","core","The wider NHS community for change management practice, discussion and shared resources.")],Hn={Vision:{inputs:[F("37515792","Vision for Change","core","Supports development and communication of a clear future vision."),F("34039056","Mind Map","core","Captures and organises stakeholder viewpoints when developing the vision."),F("34039088","Rich Picture and Storytelling","core","Creates a visual and narrative representation of the desired future state."),F("34039184","Sinek's Golden Circle","core","Structures the vision around why, how and what."),F("34037808","Systems Thinking","core","Supports consideration of the wider system when defining the future state."),F("34018288","Stakeholder Analysis Tool","core","Identifies the stakeholders who should help shape and validate the vision."),F("34039024","Sponsor Coalition Map","additional","Identifies leaders and visible supporters who can reinforce the vision."),F("69484112","SHIFT: A Strategic Change Management Approach","additional","Provides an additional strategic approach for shaping and aligning change.")]},"Case for Change":{inputs:[F("44287088","Case for Change","core","Supports creation of a clear and compelling rationale for change."),F("42608592","Beckhard and Harris' Change Formula","core","Tests whether the conditions needed to overcome the perceived cost of change are present."),F("34037360","Force Field Analysis","core","Identifies the forces driving and restraining the change."),F("34037232","Benefits Workshop","core","Brings stakeholders together to identify and develop the benefits of change."),F("34040176","Benefits Map","core","Links benefits, outcomes, enabling changes and strategic objectives."),F("45000208","What's in it for me? Benefits","core","Defines relevant benefits for each stakeholder group."),F("69191376","5 Whys Technique","additional","Supports root-cause exploration of the problem the change is intended to address."),F("34037712","SWOT Analysis","additional","Examines strengths, weaknesses, opportunities and threats relating to the change."),F("34037072","PESTLE Analysis","additional","Examines external factors influencing the need for change."),F("34037680","Porter's Five Forces","additional","Supports analysis of wider environmental and market pressures."),F("34037040","GAP Analysis","additional","Compares current and future states and identifies what needs to change."),F("42608624","AIDA Model","additional","Provides a structure for moving audiences from awareness towards action."),F("34037744","Kotter's 8 Steps","additional","Provides an additional framework for creating urgency and mobilising change."),F("34039024","Sponsor Coalition Map","additional","Identifies leaders who need to champion the case for change.")],deliverables:[F("44287088","A clear case for change communicated to all stakeholders","core")]},"Senior Sponsorship & Governance":{inputs:[F("34039024","Sponsor Coalition Map","core","Identifies senior leaders and visible supporters required to drive the change."),F("34037520","What Makes a Good Sponsor?","core","Supports sponsors to understand the behaviours expected of them."),F("34040240","RACI/RASCI Matrix","core","Clarifies governance roles, responsibilities and accountability."),F("34037552","Change Network","core","Connects senior sponsorship with change agents and champions."),F("42042672","Change Management Strategy","core","Defines the strategic approach and leadership responsibilities for change."),F("34018288","Stakeholder Analysis Tool","additional","Identifies influential stakeholders and required sponsor coverage."),F("34038032","Change Management Plan","additional","Translates governance and sponsorship responsibilities into planned activity."),F("69484112","SHIFT: A Strategic Change Management Approach","additional","Provides an additional strategic structure for leadership of change.")]},"Change Network":{inputs:[F("34037552","Change Network","core","Supports formation and operation of a network of change agents and champions."),F("34039024","Sponsor Coalition Map","core","Connects the change network with visible senior sponsors."),F("34018288","Stakeholder Analysis Tool","core","Helps ensure the network represents the right stakeholder groups."),F("34037520","What Makes a Good Sponsor?","core","Clarifies how sponsors should support and use the network."),F("34039408","Feedback Cycle","additional","Supports two-way feedback between the network, programme and affected staff."),F("69501968","Psychological Safety","additional","Supports an environment in which network members can raise concerns safely."),F("34040240","RACI/RASCI Matrix","additional","Clarifies the roles of sponsors, change agents and change champions."),F("34038672","User Surveys","additional","Provides additional evidence for themes surfaced by the change network.")]},Benefits:{inputs:[F("34037232","Benefits Workshop","core","Identifies and develops benefits with relevant stakeholders."),F("34040176","Benefits Map","core","Links benefits to outcomes, enabling changes and strategic objectives."),F("34030736","Benefits Realisation Plan","core","Defines baselines, measures, owners and arrangements for tracking benefits."),F("45000208","What's in it for me? Benefits","core","Translates organisational benefits into relevant stakeholder benefits."),F("69511824","Measuring Digital Adoption","core","Supports definition of adoption measures linked to intended benefits."),F("44287088","Case for Change","additional","Connects the benefits to the rationale and intended outcomes of the change."),F("34038608","Creating Short-Term Wins","additional","Uses early progress to demonstrate value and maintain momentum."),F("34038864","Celebrate Successes","additional","Recognises evidence that benefits and positive outcomes are emerging."),F("34038544","End of Pilot Report","additional","Captures pilot evidence relevant to benefits and wider rollout."),F("34038672","User Surveys","additional","Collects qualitative evidence about benefits and user experience.")]},"Change Impact":{inputs:[F("34037424","Change Impact Assessment","core","Assesses impacts on people, teams, processes and business units."),F("34039344","Impact Analysis","core","Supports structured analysis of intended and unintended impacts."),F("34037968","Heat Map","core","Provides a visual view of impact across business areas."),F("34037040","GAP Analysis","core","Identifies differences between current and future states."),F("34040208","McKinsey 7S Model","core","Examines alignment across interdependent organisational factors."),F("34037840","Process Mapping","additional","Identifies impacts created by changes between current and future processes."),F("34037392","Change Management Capability Review","additional","Assesses the capability implications of the future state."),F("34038000","Proof of Concept","additional","Provides early evidence about likely organisational and user impacts."),F("34037488","Training Impact Assessment","additional","Identifies high-level learning resource and cost implications.")]},"Risk Management":{inputs:[F("34037776","Risk Assessment","core","Identifies and assesses risks, issues and barriers to successful adoption."),F("34038640","Sustainability Risk Assessment","core","Identifies risks that could prevent the change from being sustained."),F("34037424","Change Impact Assessment","core","Provides evidence about impact-related risks and mitigation needs."),F("34037360","Force Field Analysis","core","Identifies forces that may support or obstruct the change."),F("34030736","Benefits Realisation Plan","additional","Helps identify and monitor risks to benefit realisation."),F("34037968","Heat Map","additional","Highlights areas where high impact and low readiness may create risk."),F("34307760","Resistance Management Plan","additional","Defines actions for managing resistance-related adoption risks."),F("69191376","5 Whys Technique","additional","Supports investigation of the root causes of risks and recurring issues.")]},"Change Management Readiness & Planning":{inputs:[F("42042672","Change Management Strategy","core","Sets the overall direction and approach for managing the change."),F("34038032","Change Management Plan","core","Defines activities, ownership and timescales required to build readiness."),F("34037040","GAP Analysis","core","Identifies the work required to move to the future state."),F("34037424","Change Impact Assessment","core","Provides impact and readiness evidence for change planning."),F("34038192","Change Implementation Plan","core","Defines implementation tasks, milestones and responsibilities."),F("34038576","Go Live Business Readiness Assessment","core","Assesses people, process and support readiness before go-live.")]}},qs={},bo={},xo={Default:Hn,Product:qs,AVT:qs,EPR:bo};function vo(){if(typeof window>"u")return[];try{const n=window.localStorage.getItem(fo);if(!n)return[];const t=JSON.parse(n);return Array.isArray(t)?t.filter(s=>s&&typeof s.name=="string"&&s.name.trim()):[]}catch{return[]}}function So(n){const t=vo().find(s=>s.name===n);return t?t.map:xo[n]||Hn}function yo(n,t,s,a,i=!0){var c,f,d;const l=((f=(c=So(n))==null?void 0:c[t])==null?void 0:f[s])||[],r=l.length>0?l:((d=Hn==null?void 0:Hn[t])==null?void 0:d[s])||[],o=i?r:r.filter(m=>m.type==="core");return a?o.map(m=>ts(m,a)):o}function vt(n,t,s,a,i=!0){const l=Fa[t]||[],r=new Map;return l.forEach(o=>{yo(n,o,s,a,i).forEach(c=>{const f=`${c.label}::${c.url}`;r.has(f)||r.set(f,c)})}),[...r.values()]}const Ys={"not started":0,emerging:1,developing:2,embedding:3,adopted:4,thriving:5};function Zn(n){return n.trim().replace(/\s+/g," ").toLowerCase()}function Ha(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function Ks(n){return n.trim().toLowerCase()}function wo(n){return n.replace(/&/g,"and").replace(/\s+/g," ").trim()}function No(n){return typeof n=="string"&&ft.includes(n)}function Fn(n){if(!n)return null;try{return JSON.parse(n)}catch{return null}}function ss(n,t,s,a){let i=0,l=!1,r=!1;for(let o=a;o<n.length;o+=1){const c=n[o];if(l){if(r){r=!1;continue}if(c==="\\"){r=!0;continue}c==='"'&&(l=!1);continue}if(c==='"'){l=!0;continue}if(c===t){i+=1;continue}if(c===s&&(i-=1,i===0))return n.slice(a,o+1)}return null}function Co(n,t=0){const s=n.indexOf("{",t);return s<0?null:ss(n,"{","}",s)}function Wa(n,t=0){const s=n.indexOf("[",t);return s<0?null:ss(n,"[","]",s)}function zs(n,t){const s=n.toLowerCase().indexOf(t.toLowerCase());return s<0?null:Wa(n,s)}function Eo(n,t){const s=n.toLowerCase().indexOf(t.toLowerCase());return s<0?null:Co(n,s)}function ko(n){const t=[];for(let s=0;s<n.length;s+=1){if(n[s]!=="{")continue;const a=ss(n,"{","}",s);if(!a)continue;const i=Fn(a);i&&typeof i=="object"&&!Array.isArray(i)&&t.push(i),s+=a.length-1}return t}function lt(n){return Array.isArray(n)?n.filter(t=>t&&typeof t=="object").map(t=>t).filter(t=>typeof t.id=="string"&&typeof t.name=="string"):[]}function Kn(n){return Array.isArray(n)?n.filter(t=>t&&typeof t=="object").map(t=>t).filter(t=>typeof t.fromStatus=="string"&&typeof t.toStatus=="string"&&typeof t.lens=="string"&&typeof t.action=="string"):[]}function jo(n){const t=Fn(n);let s=[],a=[];if(t&&typeof t=="object"&&!Array.isArray(t)){const l=t;s=lt(l.outcomes),Array.isArray(l.actions)?a=Kn(l.actions):l.actions&&typeof l.actions=="object"&&(a=Kn(l.actions.actions))}else Array.isArray(t)&&(s=lt(t));if(s.length||(s=lt(Fn(zs(n,"outcomes")))),s.length||(s=lt(Fn(Wa(n)))),a.length||(a=Kn(Fn(zs(n,"actions")))),!a.length){const l=Fn(Eo(n,"actions"));a=Kn(l==null?void 0:l.actions)}const i=ko(n);return a.length||(a=Kn(i)),s.length||(s=i.filter(l=>l&&typeof l=="object").map(l=>l).filter(l=>typeof l.id=="string"&&typeof l.name=="string"&&/_o\d+$/i.test(l.id)&&!("fromStatus"in l))),{outcomes:s,actions:a}}function Js(n,t){const a=n.trim().toLowerCase().match(/o\d+$/);return a?`${t}:${a[0]}`:`${t}:${Ha(n)}`}function Io(n,t){return`${n}:${t}`}function Ao(n){return n.includes(":auto-objective:")||n.startsWith("pathway:auto-objective:")}function _o(n){return{...n,actions:(n.actions||[]).map(t=>({...t,linkedTargets:(t.linkedTargets||[]).map(s=>({...s}))}))}}function qt(){return{score:0,justification:"",evidence:"",actions:[]}}function as(n,t){return`${n}:${Ha(t.lens)}:${t.fromScore}-${t.toScore}:${t.actionIndex}`}function Oo(n,t,s){return{id:as(t,s),text:s.actionText,actionType:s.actionType,owner:"",timescale:"",status:"Planned",phase:1,startDate:"",dueDate:"",notes:"",evidence:"",readinessScore:s.fromScore,linkedTargets:[{componentId:n,lens:s.lens}],priority:s.priority,needsRework:s.needsRework}}function Ro(n,t){return{id:n.id,text:n.text,owner:(t==null?void 0:t.owner)||"",timescale:(t==null?void 0:t.timescale)||"",notes:(t==null?void 0:t.notes)||"",evidence:(t==null?void 0:t.evidence)||"",linkedActions:[]}}function Po(n,t,s){const a=as(t,s),i=(n.actions||[]).find(o=>o.id===a);if(i)return i.id;const l=Zn(s.actionText),r=(n.actions||[]).find(o=>Zn(o.text||"")===l);return(r==null?void 0:r.id)||null}function Ve(n,t){const{outcomes:s,actions:a}=jo(n),i=s.map(o=>({id:Js(String(o.id),t.outcomePrefix),text:String(o.name).trim()})),l=new Map;return{templates:a.reduce((o,c)=>{var k;const f=Ys[Ks(String(c.fromStatus||""))],d=Ys[Ks(String(c.toStatus||""))];if(f===void 0||d===void 0)return o;const m=wo(String(c.lens||"")),v=((k=t.lensAliases)==null?void 0:k[m])||m,{text:p,priority:S,needsRework:R}=Di(String(c.action||""));if(!v||!p)return o;const I=`${v}:${f}-${d}`,b=l.get(I)||0;return l.set(I,b+1),o.push({lens:v,fromScore:f,toScore:d,actionIndex:b,actionText:p,actionType:No(c.category)?c.category:void 0,outcomeIds:(c.outcomeIds||[]).map(q=>Js(String(q),t.outcomePrefix)),priority:S,needsRework:R}),o},[]),outcomes:(i.length?i:t.fallbackOutcomes).slice(0,3)}}function qe(n,t,s){const a={...n.currentDraft||{}},i={...n.objectives||{}},l=a[t.componentId]||{},r=`${t.outcomePrefix}:`,o=(i[t.componentId]||[]).filter(v=>v.id.startsWith(r)),c=(i[t.componentId]||[]).filter(v=>!v.id.startsWith(r)&&!Ao(v.id)),f=o.reduce((v,p)=>(v[p.id]=p,v),{}),d=Object.keys(l).reduce((v,p)=>(v[p]=_o(l[p]||qt()),v),{});s.templates.forEach(v=>{var T;const p=d[v.lens]||qt(),S=new Set((p.actions||[]).map(P=>Zn(P.text||""))),R=as(t.actionPrefix,v),I=Io(t.componentId,v.lens),b=new Set(((T=n.suppressedAutoActions)==null?void 0:T[I])||[]),k=(p.actions||[]).some(P=>P.id===R),q=Zn(v.actionText),E=b.has(R);p.actions=(p.actions||[]).map(P=>!(P.id===R||Zn(P.text||"")===q)||P.readinessScore===v.fromScore&&P.priority===v.priority&&P.needsRework===v.needsRework?P:{...P,readinessScore:v.fromScore,priority:v.priority,needsRework:v.needsRework}),!k&&!S.has(q)&&!E&&(p.actions=[...p.actions||[],Oo(t.componentId,t.actionPrefix,v)]),d[v.lens]=p});const m=s.outcomes.map(v=>{const p=[];return s.templates.forEach(S=>{if(!S.outcomeIds.includes(v.id))return;const R=d[S.lens];if(!R)return;const I=Po(R,t.actionPrefix,S);I&&p.push({lens:S.lens,actionId:I})}),{...Ro(v,f[v.id]),linkedActions:p}});return{...n,currentDraft:{...a,[t.componentId]:d},objectives:{...i,[t.componentId]:[...c,...m]}}}function Ye(n,t){var o,c;const s=`${t.outcomePrefix}:`,a=`${t.actionPrefix}:`,i=(((o=n.objectives)==null?void 0:o[t.componentId])||[]).filter(f=>!f.id.startsWith(s)),l=((c=n.currentDraft)==null?void 0:c[t.componentId])||{},r=Object.keys(l).reduce((f,d)=>{const m=l[d]||qt();return f[d]={...m,actions:(m.actions||[]).filter(v=>!v.id.startsWith(a))},f},{});return{...n,currentDraft:{...n.currentDraft,[t.componentId]:r},objectives:{...n.objectives,[t.componentId]:i}}}function Xs(n,t){if(t>=5)return null;const s=(n.actions||[]).filter(i=>i.readinessScore===t);return s.length===0?null:s.every(i=>Mi(i.status))?{currentScore:t,nextScore:t+1}:null}const St={0:"Not Started: Activity has not yet commenced or been defined.",1:"Emerging: Activity is fragmented, uncoordinated, and reactive. No standardised approach.",2:"Developing: Basic processes exist but are inconsistently applied. Reliance on heroic individual efforts.",3:"Embedding: Standardised approach defined and applied across the project. Leadership is engaged.",4:"Adopted: Behaviours are changing. Metrics are actively monitored to drive adoption.",5:"Thriving: Change is fully embedded as business as usual. Continuous improvement is evident."},Qs=["Pre-Emergent","Emerging","Developing","Maturing","Embedding","Thriving"],Do=["#768692","#AE2521","#FFB81C","#005EB8","#330072","#00A499"];function Yt(n){return Qs[Math.round(n)]||Qs[0]}function $o({onClose:n,darkMode:t=!1}){return e.jsx("div",{id:"readiness-score-info-modal",className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:s=>{s.target===s.currentTarget&&n()},children:e.jsxs("div",{className:`${t?"bg-slate-800 border-slate-700":"bg-white"} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border`,children:[e.jsxs("div",{className:`${t?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} sticky top-0 border-b p-6 flex items-center justify-between`,children:[e.jsx("h2",{className:`text-2xl font-bold ${t?"text-slate-100":"text-slate-800"}`,children:"Readiness score levels"}),e.jsx("button",{onClick:n,className:`${t?"text-slate-300 hover:text-slate-100":"text-slate-500 hover:text-slate-700"}`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsxs("div",{className:`p-6 space-y-3 text-sm ${t?"text-slate-200":"text-slate-700"}`,children:[e.jsx("p",{children:"Every lens is scored on the same 0-5 readiness scale. Here's what each level generally means - each lens on a component page also shows guidance written specifically for that lens at its current level. A lens advances automatically once every action at its current level is marked Completed or Cancelled."}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:Object.entries(St).map(([s,a])=>{const[i,l]=a.split(/:\s(.+)/);return e.jsxs("div",{className:`rounded-md border p-2.5 ${t?"border-slate-700":""}`,style:{borderLeftWidth:"4px",borderLeftColor:Do[Number(s)]},children:[e.jsxs("p",{className:`text-xs font-bold ${t?"text-slate-100":"text-slate-800"}`,children:[s," - ",i]}),e.jsx("p",{className:`mt-0.5 text-xs ${t?"text-slate-300":"text-slate-600"}`,children:l})]},s)})})]})]})})}const Zs=["#005eb8","#00a499","#ffb81c","#ae2521","#330072","#41b6e6"],To=36;function Lo(){const n=g.useMemo(()=>Array.from({length:To},(t,s)=>({id:s,left:Math.random()*100,color:Zs[s%Zs.length],delay:Math.random()*.25,duration:1.4+Math.random()*.9,drift:(Math.random()-.5)*160,rotation:Math.random()*360})),[]);return e.jsxs("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 z-[59] h-40 overflow-hidden","aria-hidden":"true",children:[e.jsx("style",{children:`
        @keyframes toast-confetti-fall {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          100% { transform: translate(var(--drift), -160px) rotate(var(--spin)); opacity: 0; }
        }
      `}),n.map(t=>e.jsx("span",{style:{position:"absolute",left:`${t.left}%`,bottom:0,width:"8px",height:"8px",backgroundColor:t.color,animation:`toast-confetti-fall ${t.duration}s ease-out ${t.delay}s forwards`,"--drift":`${t.drift}px`,"--spin":`${t.rotation}deg`}},t.id))]})}function Bo({message:n,onDismiss:t,durationMs:s,variant:a="success",celebrate:i=!1}){g.useEffect(()=>{if(!s)return;const r=window.setTimeout(t,s);return()=>window.clearTimeout(r)},[n,s,t]);const l=a==="success"?"bg-green-600 text-white":"bg-slate-800 text-white";return e.jsxs(e.Fragment,{children:[i?e.jsx(Lo,{}):null,e.jsx("div",{className:"fixed bottom-6 right-6 z-[60] flex justify-end",role:"status","aria-live":"polite",children:e.jsxs("div",{className:`flex items-center gap-3 rounded-lg px-4 py-3 shadow-2xl ${l}`,children:[e.jsx("span",{className:"text-sm font-medium",children:n}),e.jsx("button",{type:"button",onClick:t,className:"text-white/80 hover:text-white","aria-label":"Dismiss",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})})]})}const ea=["#005eb8","#00a499","#7c3aed","#b45309","#be123c","#0369a1","#0f766e","#4d7c0f"];function Mo(n){let t=0;for(let s=0;s<n.length;s+=1)t=(t<<5)-t+n.charCodeAt(s),t|=0;return Math.abs(t)}function Go(n){const t=n.trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0].slice(0,2).toUpperCase():`${t[0][0]}${t[t.length-1][0]}`.toUpperCase():"?"}function Fo({name:n,darkMode:t=!1,imageDataUrl:s}){const a=n.trim();if(!a)return e.jsx("span",{title:"Unassigned","aria-label":"Unassigned",className:`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold ${t?"border-slate-600 text-slate-500":"border-slate-300 text-slate-400"}`,children:"?"});if(s)return e.jsx("img",{src:s,alt:a,title:a,className:"h-7 w-7 shrink-0 rounded-full border border-slate-300 object-cover"});const i=ea[Mo(a)%ea.length];return e.jsx("span",{title:a,"aria-label":a,className:"inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white",style:{backgroundColor:i},children:Go(a)})}const Uo=7;function Ho(n,t,s,a=new Date){if(!t&&!s)return"grey";const i=He(n);if(i==="Completed"||i==="Cancelled")return"green";const l=Ut(n,t,s,a);if(l==="Overdue completion")return"red";if(l==="Overdue start")return"amber";if(s){const r=new Date(s);if(!isNaN(r.getTime())){const o=(r.getTime()-a.getTime())/864e5;if(o>=0&&o<=Uo)return"amber"}}return"green"}const Wo={grey:"text-slate-300",green:"text-green-600",amber:"text-amber-500",red:"text-red-600"},Vo={grey:"No dates set",green:"On track",amber:"Due soon",red:"Overdue"},qo=new Intl.DateTimeFormat("en-GB",{day:"2-digit",month:"short",year:"2-digit",timeZone:"GMT"});function na(n){if(!n)return"not set";const t=new Date(n);return isNaN(t.getTime())?"not set":`GMT - ${qo.format(t)}`}function Yo({status:n,startDate:t,dueDate:s}){const a=Ho(n,t,s),i=`${Vo[a]} · Start: ${na(t)} · End: ${na(s)}`;return e.jsx("span",{title:i,"aria-label":i,className:`inline-flex items-center ${Wo[a]}`,children:e.jsxs("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",strokeWidth:2}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 7v5l3 3"})]})})}const Ko=`{
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
`,Va="custom-outcome:";function zo(n){return n.startsWith(Va)}const Ot=_a.filter(n=>n!=="Overdue start"&&n!=="Overdue completion"),Jo=Wn.map(n=>n.score),Xo=Object.fromEntries(Wn.map(n=>[n.score,n.label])),ta={"Not Started":"bg-slate-100 text-slate-700 border-slate-200","In Progress":"bg-blue-100 text-blue-800 border-blue-200",Blocked:"bg-amber-100 text-amber-800 border-amber-200",Completed:"bg-green-100 text-green-800 border-green-200"},sa=JSON.parse(Ko),qa=4;function Qo(n,t){return nt.reduce((s,a)=>{const i=vt("Default",a.id,"inputs",void 0,n),l=vt("Default",a.id,"deliverables",void 0,n),r=new Map;return[...i,...l].forEach(o=>{var c,f;if(o.label&&o.label.trim().length>=qa){const d=t?ts(o,t).url:o.url,m=(f=(c=t==null?void 0:t.links)==null?void 0:c[o.key])==null?void 0:f.matchAliases;r.set(o.label.toLowerCase(),{...o,url:d,matchAliases:m})}}),s[a.id]=[...r.values()],s},{})}function Zo(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ya(n){const t=new Set([n]);return new RegExp("(?<!s)s$","i").test(n)&&t.add(n.slice(0,-1)),[...t]}function Un(n,t,s,a){const i=n||"Untitled action";if(t.length===0)return i;const r=t.flatMap(d=>{const m=d.kind==="url"?d.matchAliases||[]:[];return[...Ya(d.label),...m].map(v=>({variant:v,link:d}))}).sort((d,m)=>m.variant.length-d.variant.length),o=r.map(d=>`\\b${Zo(d.variant)}\\b`).join("|"),c=i.split(new RegExp(`(${o})`,"gi")),f=`underline decoration-dotted underline-offset-2 ${s?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`;return c.map((d,m)=>{const v=r.find(S=>S.variant.toLowerCase()===d.toLowerCase());if(!v)return d;const p=v.link;return p.kind==="tool"?e.jsx("button",{type:"button",onClick:S=>{S.stopPropagation(),a==null||a(p.tool)},className:f,children:d},`${p.key}-${m}`):e.jsx("a",{href:p.url,target:"_blank",rel:"noopener noreferrer",onClick:S=>S.stopPropagation(),className:f,children:d},`${p.key}-${m}`)})}function aa(n){return n.split(`
`).map(t=>t.trim()).filter(Boolean)}const er="Your Project";function nr(n,t){return n.replace(/\$projectName/g,t)}function tr(n,t){const s=i=>nr(i,t),a=i=>i.map(l=>({title:s(l.title),body:s(l.body)}));return{component:s(n.component),description:s(n.description),whatIsIt:s(n.whatIsIt),userInsight:s(n.userInsight),whyThisMatters:s(n.whyThisMatters),quickRealityCheck:s(n.quickRealityCheck),whatGoodLooksLike:a(n.whatGoodLooksLike),risksIfYouDont:a(n.risksIfYouDont)}}const Ka={good:{border:"border-emerald-200",bg:"bg-emerald-50 hover:bg-emerald-100",text:"text-black",titleText:"text-emerald-700"},risk:{border:"border-rose-200",bg:"bg-rose-50 hover:bg-rose-100",text:"text-black",titleText:"text-rose-800"}},za={good:{border:"border-emerald-500/40",bg:"bg-emerald-500/10 hover:bg-emerald-500/15",text:"text-emerald-200",titleText:"text-slate-100"},risk:{border:"border-rose-500/40",bg:"bg-rose-500/10 hover:bg-rose-500/15",text:"text-rose-200",titleText:"text-slate-100"}};function sr({points:n,tone:t,guidanceLinks:s,darkMode:a,onNavigateToTool:i}){const l=a?za[t]:Ka[t];return e.jsx("ul",{className:"space-y-3",children:n.map(r=>e.jsxs("li",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${l.titleText}`,children:r.title}),e.jsx("p",{className:`mt-0.5 text-sm ${l.text}`,children:Un(r.body,s,a,i)})]},r.title))})}function ia({title:n,points:t,tone:s,isOpen:a,onToggle:i,guidanceLinks:l,darkMode:r,onNavigateToTool:o}){const c=r?za[s]:Ka[s];return e.jsxs("div",{className:`rounded-md border ${c.border}`,children:[e.jsxs("button",{type:"button",onClick:i,className:`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold transition-colors ${c.bg} ${c.text}`,children:[n,e.jsx("span",{"aria-hidden":"true",children:a?"−":"+"})]}),a&&e.jsx("div",{className:`border-t px-3 py-3 ${c.border}`,children:e.jsx(sr,{points:t,tone:s,guidanceLinks:l,darkMode:r,onNavigateToTool:o})})]})}function ar({detail:n,furtherReadingUrl:t,guidanceLinks:s,darkMode:a,onNavigateToTool:i}){const[l,r]=g.useState(!0),[o,c]=g.useState(!0);return e.jsxs("div",{children:[n.description&&e.jsx("p",{className:`text-sm ${a?"text-slate-200":"text-slate-700"}`,children:n.description}),e.jsxs("div",{className:`mt-4 space-y-4 ${n.description?"border-t pt-4":""} ${a?"border-slate-700":"border-slate-200"}`,children:[t&&e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs font-semibold ${a?"border-slate-600 bg-slate-800 text-blue-300 hover:bg-slate-700":"border-slate-300 bg-white text-[#005eb8] hover:bg-slate-50"}`,children:"Further Reading ↗"}),n.whatIsIt&&e.jsx("p",{className:`text-sm ${a?"text-slate-300":"text-slate-600"}`,children:Un(n.whatIsIt,s,a,i)}),n.userInsight&&e.jsxs("blockquote",{className:`border-l-2 pl-3 text-sm italic ${a?"border-slate-600 text-slate-300":"border-slate-300 text-slate-600"}`,children:["“",Un(n.userInsight,s,a,i),"”"]}),n.whyThisMatters&&e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${a?"text-slate-200":"text-slate-700"}`,children:"Why this matters"}),e.jsx("ul",{className:`mt-1 list-disc space-y-1 pl-5 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:aa(n.whyThisMatters).map(f=>e.jsx("li",{children:Un(f,s,a,i)},f))})]}),n.quickRealityCheck&&e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${a?"text-slate-200":"text-slate-700"}`,children:"Quick reality check"}),e.jsx("ul",{className:`mt-1 list-disc space-y-1 pl-5 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:aa(n.quickRealityCheck).map(f=>e.jsx("li",{children:Un(f,s,a,i)},f))})]}),(n.whatGoodLooksLike.length>0||n.risksIfYouDont.length>0)&&e.jsxs("div",{className:"space-y-2",children:[n.whatGoodLooksLike.length>0&&e.jsx(ia,{title:"What good looks like",points:n.whatGoodLooksLike,tone:"good",isOpen:l,onToggle:()=>r(f=>!f),guidanceLinks:s,darkMode:a,onNavigateToTool:i}),n.risksIfYouDont.length>0&&e.jsx(ia,{title:"Risks if you don't",points:n.risksIfYouDont,tone:"risk",isOpen:o,onToggle:()=>c(f=>!f),guidanceLinks:s,darkMode:a,onNavigateToTool:i})]})]})]})}function ir({open:n,onClose:t,detail:s,furtherReadingUrl:a,guidanceLinks:i,darkMode:l,onNavigateToTool:r}){return n?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${l?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${l?"text-slate-300":"text-slate-500"}`,children:"Component overview"}),e.jsx("button",{type:"button",onClick:t,"aria-label":"Close component overview",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${l?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:"mt-2",children:e.jsx(ar,{detail:s,furtherReadingUrl:a,guidanceLinks:i,darkMode:l,onNavigateToTool:r})})]})}):null}const Kt="__evidence_json__:",or=1024*1024;function rr(n,t,s){return(s[n]||[]).filter(a=>a.linkedActions.some(i=>i.actionId===t))}function Ja(n){const t=n.trim();return t?/^https?:\/\//i.test(t)?t:/^www\./i.test(t)?`https://${t}`:t:""}function ct(n){const t=(n==null?void 0:n.trim())||"";if(!t)return[];if(t.startsWith(Kt))try{const s=JSON.parse(t.slice(Kt.length));return Array.isArray(s)?s.filter(a=>a&&(a.type==="url"||a.type==="file")).map(a=>({type:a.type,label:String(a.label||"").trim(),href:String(a.href||"").trim()})).filter(a=>a.label||a.href):[]}catch{return[]}return t.split(`
`).map(s=>s.trim()).filter(Boolean).map(s=>{const a=Ja(s);return{type:"url",label:s,href:a}})}function lr(n){const t=n.map(s=>({type:s.type,label:s.label.trim(),href:s.href.trim()})).filter(s=>s.label||s.href);return t.length?`${Kt}${JSON.stringify(t)}`:""}function cr({rows:n,isOpen:t,onToggle:s,darkMode:a}){return e.jsxs("div",{className:`mb-8 rounded-lg border ${a?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("button",{type:"button",onClick:s,className:"flex w-full items-center justify-between gap-4 px-5 py-4 text-left",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-sm font-semibold ${a?"text-slate-100":"text-slate-800"}`,children:"Evidence Links and Docs"}),e.jsx("p",{className:`mt-0.5 text-xs ${a?"text-slate-400":"text-slate-500"}`,children:n.length?`${n.length} item${n.length===1?"":"s"} attached across this component's actions.`:"Everything attached as evidence across this component's actions, in one place."})]}),e.jsx("span",{className:`shrink-0 text-xs font-semibold ${a?"text-slate-300":"text-slate-500"}`,children:t?"Hide −":"Show +"})]}),t&&e.jsx("div",{className:`border-t px-5 py-4 ${a?"border-slate-700":"border-slate-200"}`,children:n.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${a?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:a?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Type"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Link / Doc"})]})}),e.jsx("tbody",{className:`${a?"divide-slate-700":"divide-slate-100"} divide-y`,children:n.map((i,l)=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-100":"text-slate-800"}`,children:i.actionText}),e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:i.lens}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`${i.item.type==="file"?"bg-emerald-100 text-emerald-800":"bg-blue-100 text-blue-800"} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`,children:i.item.type==="file"?"File":"Link"})}),e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-100":"text-slate-800"}`,children:i.item.href?e.jsx("a",{href:i.item.href,target:"_blank",rel:"noopener noreferrer",className:`underline ${a?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:i.item.label||i.item.href}):i.item.label||"—"})]},`${i.lens}:${l}`))})]})}):e.jsx("p",{className:`text-sm ${a?"text-slate-400":"text-slate-500"}`,children:"No evidence added yet. Attach links or documents to an action to see them here."})})]})}function dr(n){return new Promise((t,s)=>{const a=new FileReader;a.onload=()=>t(String(a.result||"")),a.onerror=()=>s(new Error("Unable to read file.")),a.readAsDataURL(n)})}function ur(){return e.jsx("svg",{className:"w-4 h-4 text-blue-500 mt-0.5 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function oa(){return e.jsx("svg",{className:"w-5 h-5 ml-2 text-slate-400 group-hover:text-[#005eb8] shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function mr(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5h2m6.5-.5a2.121 2.121 0 013 3L8 21l-4 1 1-4L17.5 4.5z"})})}function gr(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m3 0-.867 12.142A2 2 0 0115.138 21H8.862a2 2 0 01-1.995-1.858L6 7h12z"})})}function pr(n,t){let s=n,a=Xs({actions:t},s);for(;a;)s=a.nextScore,a=Xs({actions:t},s);return s}function hr(n,t,s){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:"",actionType:void 0,owner:"",timescale:"",status:"Planned",phase:n,startDate:"",dueDate:"",notes:"",evidence:"",linkedTargets:[{componentId:t,lens:s}]}}function In(n,t,s){const a=n.linkedTargets||[];if(!a.length)return[{componentId:t,lens:s}];const i=new Set,l=[];return a.forEach(r=>{const o=`${r.componentId}:${r.lens}`;i.has(o)||(i.add(o),l.push({componentId:r.componentId,lens:r.lens}))}),l}function fr({store:n,components:t,activeComponentId:s,getRubricText:a,getEntry:i,onComponentChange:l,onEntryUpdate:r,onOpenLensInfo:o,onActionRemove:c,onObjectivesUpdate:f,onNavigateToTool:d,hideGuidedWorkflow:m=!1,showAdditionalGuidanceLinks:v=!0,showActionPriorityColours:p=!1,currentUserId:S,currentUserProfileImageDataUrl:R,onHideGuidedWorkflow:I,darkMode:b=!1,focusAction:k,onFocusActionHandled:q}){var jn,gn,Cs,Es,ks,js,Is,As,_s,Os,Rs,Ps,Ds,$s,Ts,Ls;const E=t.find(u=>u.id===s)||t[0],T=(gn=(jn=n.orgProfile)==null?void 0:jn.cst)==null?void 0:gn.pathway,P=u=>T&&T!=="pathway-1"?`No outcomes or actions are defined for ${Ia[T]} yet.`:u,ue=((Es=(Cs=n.orgProfile)==null?void 0:Cs.projectName)==null?void 0:Es.trim())||er,M=(ks=sa[E.id])!=null&&ks.whatIsIt?tr(sa[E.id],ue):void 0,z=(js=n.orgProfile)!=null&&js.coreLinks&&n.orgProfile.coreLinks.length>0?n.orgProfile.coreLinks:Ua,le=g.useMemo(()=>{var u;return(((u=n.orgProfile)==null?void 0:u.toolLinks)||[]).filter(w=>w.matchText.trim()).map(w=>({key:w.key,label:w.matchText,kind:"tool",tool:w.tool}))},[(Is=n.orgProfile)==null?void 0:Is.toolLinks]),ie=g.useMemo(()=>{var Z;const u=(Z=n.orgProfile)==null?void 0:Z.linkOverrides,w=Qo(v,u),$=v?z:z.filter(Se=>Se.type==="core"),K={};return Object.keys(w).forEach(Se=>{var Nn,Rn;const Oe=new Map,Pe=((Rn=(Nn=n.orgProfile)==null?void 0:Nn.customComponentLinks)==null?void 0:Rn[Se])||[];[...w[Se],...$,...Pe].forEach(Qe=>{Qe.label&&Qe.label.trim().length>=qa&&Oe.set(Qe.label.toLowerCase(),{...Qe,kind:"url"})}),le.forEach(Qe=>{Oe.set(Qe.label.toLowerCase(),Qe)}),K[Se]=[...Oe.values()]}),K},[v,z,(As=n.orgProfile)==null?void 0:As.linkOverrides,(_s=n.orgProfile)==null?void 0:_s.customComponentLinks,le]),[A,G]=g.useState(null),[Ne,Ee]=g.useState(!1),[Le,Ke]=g.useState(null),L=g.useCallback((u,w,$)=>{const K=pr(w,$);return K>w&&Ke(`${E.label} · ${u} moved to ${rt(K).label}!`),K},[E.label]),[oe,se]=g.useState(!1),ge=g.useRef(null),[fe,ye]=g.useState(null),[ne,De]=g.useState(null),[$e,ze]=g.useState(!1),[Be,Ie]=g.useState(!0),[cn,Je]=g.useState(!0),[dn,Ze]=g.useState(!0),[_,te]=g.useState(!1),[X,pe]=g.useState(!1),be=hn("assessment"),[Ce,Ae]=g.useState({}),[x,O]=g.useState(null),[C,j]=g.useState({}),[U,H]=g.useState({}),ee=((Os=n.objectives)==null?void 0:Os[E.id])||[],ae=n.orgProfile.teamMembers||[],xe=((Rs=ae.find(u=>u.id===S))==null?void 0:Rs.name)||"",ve=g.useMemo(()=>{const u={};return E.lenses.forEach(w=>{u[w]=i(E.id,w).actions||[]}),u},[E.id,E.lenses,i]),Xe=g.useMemo(()=>{const u={};return E.lenses.forEach(w=>{const $=i(E.id,w),K=ve[w]||[],Z=K.some(Oe=>Oe.readinessScore===0),Se=$.score===0&&!Z?1:$.score;u[w]=K.filter(Oe=>(Oe.readinessScore??Se)===Se)}),u},[E.id,E.lenses,i,ve]),un=g.useMemo(()=>E.lenses.reduce((u,w)=>u+(Xe[w]||[]).length,0),[E.lenses,Xe]),En=g.useMemo(()=>E.lenses.reduce((u,w)=>u+(Xe[w]||[]).filter($=>He($.status)==="Completed").length,0),[E.lenses,Xe]),y=g.useMemo(()=>E.lenses.some(u=>Number(i(E.id,u).score||0)>0),[E.id,E.lenses,i]),D=g.useMemo(()=>{const u={};return Object.keys(n.currentDraft).forEach(w=>{Object.keys(n.currentDraft[w]||{}).forEach($=>{(n.currentDraft[w][$].actions||[]).forEach(Z=>{In(Z,w,$).forEach(Oe=>{const Pe=`${Oe.componentId}:${Oe.lens}`;u[Pe]||(u[Pe]=[]),u[Pe].push({sourceComponentId:w,sourceLens:$,action:Z,isLinkedView:!(Oe.componentId===w&&Oe.lens===$)})})})})}),u},[n.currentDraft]),W=g.useMemo(()=>{const u={};return t.forEach(w=>{u[w.id]=w}),u},[t]),ce=g.useMemo(()=>{const u=[];return E.lenses.forEach(w=>{(D[`${E.id}:${w}`]||[]).filter(K=>!K.isLinkedView).forEach(K=>{ct(K.action.evidence||"").forEach(Z=>{u.push({actionText:K.action.text||"Untitled action",lens:w,item:Z})})})}),u},[D,E.id,E.lenses]),we=g.useMemo(()=>{const u=E.lenses[0];return u?i(E.id,u).justification:""},[E.id,E.lenses,i]),Me=g.useMemo(()=>{var u;return A?((u=t.find(w=>w.id===A.sourceComponentId))==null?void 0:u.label)||A.sourceComponentId:E.label},[A,E.label,t]),Fe=g.useMemo(()=>{var w;if(!((w=A==null?void 0:A.action.text)!=null&&w.trim()))return"New action";const u=A.action.text.trim().replace(/\s+/g," ");return u.length>70?`${u.slice(0,70)}...`:u},[A]),je=g.useMemo(()=>ee.find(u=>u.id===(fe==null?void 0:fe.objectiveId))||null,[fe==null?void 0:fe.objectiveId,ee]),ke=g.useMemo(()=>je?Wt(je,ve):null,[je,ve]),en=g.useMemo(()=>je?je.linkedActions.map(u=>{const w=(ve[u.lens]||[]).find(Z=>Z.id===u.actionId),$=w?He(w.status):null,K=w?Ut(w.status,w.startDate,w.dueDate):null;return{lens:u.lens,action:w,status:$,temporalStatus:K}}):[],[je,ve]);g.useCallback(u=>{l(u.target.value)},[l]);const Ue=g.useCallback((u,w)=>{const $=i(E.id,u);r(E.id,u,{...$,score:w})},[E.id,i,r]),on=g.useCallback(u=>{E.lenses.forEach(w=>{const $=i(E.id,w);r(E.id,w,{...$,justification:u})})},[E.id,E.lenses,i,r]),nn=g.useCallback((u,w)=>{const $=hr(E.phase,E.id,u);w&&($.text=w),G({sourceComponentId:E.id,sourceLens:u,mode:"create",action:$,evidenceItems:ct($.evidence||""),linkedObjectiveIds:[],targetPickerComponentId:E.id,targetPickerLens:u})},[E.id,E.phase]),wn=g.useCallback((u,w,$)=>{var Oe;const K=In($,u,w),Z=K[0]||{componentId:u,lens:w},Se=(((Oe=n.objectives)==null?void 0:Oe[u])||[]).filter(Pe=>Pe.linkedActions.some(Nn=>Nn.actionId===$.id)).map(Pe=>Pe.id);G({sourceComponentId:u,sourceLens:w,mode:"edit",actionId:$.id,action:{...$,linkedTargets:K,notes:$.notes||"",evidence:$.evidence||"",startDate:$.startDate||"",dueDate:$.dueDate||""},evidenceItems:ct($.evidence||""),linkedObjectiveIds:Se,targetPickerComponentId:Z.componentId,targetPickerLens:Z.lens})},[n.objectives]),Ln=g.useCallback(()=>{De({mode:"create",text:"",owner:""})},[]),Bn=g.useCallback(u=>{De({mode:"edit",objectiveId:u.id,text:u.text,owner:u.owner})},[]),Mn=()=>{De(null)},An=()=>{if(ne){if(!ne.text.trim()){window.alert("Outcome description is required.");return}if(ne.mode==="create"){const u={id:`${Va}${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:ne.text.trim(),owner:ne.owner.trim(),timescale:"",linkedActions:[]};f(E.id,[...ee,u])}else f(E.id,ee.map(u=>u.id===ne.objectiveId?{...u,text:ne.text.trim(),owner:ne.owner.trim()}:u));De(null)}},st=u=>{f(E.id,ee.filter(w=>w.id!==u))};g.useEffect(()=>{if(!k)return;const w=i(E.id,k.lens).actions.find($=>$.id===k.actionId);if(!w){q==null||q();return}Ze(!0),wn(E.id,k.lens,w),q==null||q()},[k,E.id]);const _n=()=>{G(null)},Vn=()=>{var Oe;if(!A)return;if(!A.action.text.trim()){window.alert("Action description is required.");return}const u={...A.action,evidence:lr(A.evidenceItems),status:He(A.action.status),linkedTargets:In(A.action,A.sourceComponentId,A.sourceLens),timescale:A.action.dueDate||A.action.startDate||A.action.timescale},w=i(A.sourceComponentId,A.sourceLens),$=A.mode==="create"?[...w.actions,u]:w.actions.map(Pe=>Pe.id===A.actionId?u:Pe);r(A.sourceComponentId,A.sourceLens,{...w,actions:$,score:L(A.sourceLens,w.score,$)});const K=new Set(A.linkedObjectiveIds),Se=(((Oe=n.objectives)==null?void 0:Oe[A.sourceComponentId])||[]).map(Pe=>{const Nn=Pe.linkedActions.filter(Rn=>!(Rn.lens===A.sourceLens&&Rn.actionId===u.id));return K.has(Pe.id)?{...Pe,linkedActions:[...Nn,{lens:A.sourceLens,actionId:u.id}]}:{...Pe,linkedActions:Nn}});f(A.sourceComponentId,Se),_n()},at=()=>{if(!A)return;if(He(A.action.status)==="Completed"&&A.evidenceItems.length===0&&!vn(Qn)){ge.current=Vn,se(!0);return}Vn()},h=(u,w,$)=>{const K=i(E.id,u),Z=K.actions.map(Se=>Se.id===w?{...Se,status:He($)}:Se);r(E.id,u,{...K,actions:Z,score:L(u,K.score,Z)})},N=(u,w,$)=>{const K=i(E.id,u),Z=K.actions.map(Se=>Se.id===w?{...Se,owner:$}:Se);r(E.id,u,{...K,actions:Z})},B=(u,w,$)=>{const K=He($);if(w.priority==="must"&&K==="Cancelled"){window.alert("You are trying to mark what we have classified as a MUST action as Cancelled, and it shouldn't be cancelled. Please re-review.");return}const Z=ct(w.evidence||"").length>0;if(K==="Completed"&&!Z&&!vn(Qn)){ge.current=()=>h(u,w.id,K),se(!0);return}h(u,w.id,K)},Q=(u,w,$)=>{if($.priority==="must"){window.alert("You are trying to delete what we have classified as a MUST action, and it shouldn't be deleted. Please re-review.");return}c(u,w,$.id)},V=u=>{G(w=>{if(!w)return w;const $={...w,action:{...w.action,...u}};return $.action.status=He($.action.status),$})},me=(u,w)=>{G($=>$&&{...$,targetPickerComponentId:u,targetPickerLens:w})},de=()=>{G(u=>{if(!u)return u;const w=W[u.targetPickerComponentId]||E,$=w.lenses.includes(u.targetPickerLens)?u.targetPickerLens:w.lenses[0];if(!$)return u;const K=In(u.action,u.sourceComponentId,u.sourceLens);return K.some(Z=>Z.componentId===w.id&&Z.lens===$)?u:{...u,action:{...u.action,linkedTargets:[...K,{componentId:w.id,lens:$}]}}})},Te=(u,w)=>{G($=>{if(!$)return $;const Z=In($.action,$.sourceComponentId,$.sourceLens).filter(Se=>!(Se.componentId===u&&Se.lens===w));return{...$,action:{...$.action,linkedTargets:Z}}})},fn=u=>{G(w=>{if(!w)return w;const $=new Set(w.linkedObjectiveIds);return $.has(u)?$.delete(u):$.add(u),{...w,linkedObjectiveIds:Array.from($)}})},_e=u=>{G(w=>w&&{...w,evidenceItems:u})},he=()=>{if(!A)return;const u=A.evidenceItems;_e([...u,{type:"url",label:"",href:""}])},Re=(u,w,$)=>{if(!A)return;const K=A.evidenceItems;if(!K[u])return;const Z=[...K];w==="href"?Z[u]={...Z[u],href:Ja($)}:Z[u]={...Z[u],label:$},_e(Z)},kn=u=>{if(!A)return;const w=A.evidenceItems;_e(w.filter(($,K)=>K!==u))},mn=async u=>{if(!A)return;const w=u.target.files;if(!(w!=null&&w.length))return;const K=[...A.evidenceItems];for(const Z of Array.from(w)){if(Z.size>or){window.alert(`"${Z.name}" is larger than 1MB. Please attach a URL instead.`);continue}try{const Se=await dr(Z);K.push({type:"file",label:Z.name,href:Se})}catch{window.alert(`Unable to upload "${Z.name}".`)}}_e(K),u.target.value=""},On=(u,w)=>{w&&(ye(null),wn(E.id,u,w))},bn=u=>{const w=document.getElementById(u);w==null||w.scrollIntoView({behavior:"smooth",block:"start"})};return e.jsxs("div",{className:"max-w-5xl mx-auto pb-20",children:[e.jsx("div",{className:"mb-8 flex items-center justify-between gap-4 flex-wrap",children:e.jsxs("div",{children:[e.jsxs("h2",{className:`text-3xl font-bold flex items-center ${b?"text-slate-100":"text-slate-800"}`,children:[E.label,e.jsx("span",{className:"bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-4 border border-blue-200",children:an[E.phase]||`Phase ${E.phase}`}),e.jsx("span",{className:"ml-2",children:e.jsx(yn,{onClick:be.reopen,darkMode:b})})]}),e.jsx("p",{className:`mt-2 ${b?"text-slate-300":"text-slate-500"}`,children:"Assess readiness at lens level. Change Component justification, outcomes, and actions are tracked below."}),M&&e.jsx("button",{type:"button",onClick:()=>pe(!0),className:`mt-2 text-sm font-semibold underline ${b?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:"What is this?"})]})}),M&&e.jsx(ir,{open:X,onClose:()=>pe(!1),detail:M,furtherReadingUrl:(Ds=(Ps=n.orgProfile)==null?void 0:Ps.componentFurtherReading)==null?void 0:Ds[E.id],guidanceLinks:ie[E.id]||[],darkMode:b,onNavigateToTool:d}),!m&&!$e&&e.jsxs("div",{className:`${b?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mb-6 rounded-lg border p-4`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${b?"text-slate-300":"text-slate-600"}`,children:"Guided workflow"}),e.jsx("button",{type:"button",onClick:()=>ze(!0),"aria-label":"Dismiss guided workflow",className:`text-xs font-semibold leading-none ${b?"text-slate-400 hover:text-slate-200":"text-slate-400 hover:text-slate-700"}`,children:"×"})]}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:()=>bn("assessment-scoring"),className:`${b?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"1. Where are you now?"}),e.jsx("button",{type:"button",onClick:()=>bn("assessment-objectives"),className:`${b?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"2. Review outcomes"}),e.jsx("button",{type:"button",onClick:()=>bn("assessment-actions"),className:`${b?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"3. Plan lens actions"})]}),I&&e.jsx("button",{type:"button",onClick:I,className:`mt-3 text-xs underline ${b?"text-slate-400 hover:text-slate-200":"text-slate-500 hover:text-slate-700"}`,children:"Don't show this again"})]}),e.jsxs("div",{id:"assessment-scoring",className:`${b?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[e.jsx("h3",{className:`text-sm font-semibold ${b?"text-slate-100":"text-slate-800"}`,children:y?"Step 1: Where are you now?":"Step 1: Where are you now and what is currently known?"}),e.jsx("button",{type:"button",onClick:()=>Ie(u=>!u),className:`${b?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:Be?"Hide":"Show"})]}),Be?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:`block text-sm font-semibold mb-2 ${b?"text-slate-100":"text-slate-700"}`,children:"Change Component Justification"}),e.jsx("p",{className:`text-xs mb-2 ${b?"text-slate-300":"text-slate-500"}`,children:'Explain what is currently known, what evidence supports that view, and where the biggest gap sits. Example: "Sponsorship is visible only in two services; there is no monthly steering update yet; next step is to agree a trust-wide sponsor cadence."'}),e.jsx("textarea",{value:we,onChange:u=>on(u.target.value),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-24 p-2 border ${b?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,placeholder:"Record what is currently known for this change component, the evidence behind it, and the key improvement needed next."})]}):null]}),e.jsxs("div",{id:"assessment-objectives",className:`${b?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-1",children:[e.jsx("h3",{className:`text-sm font-semibold ${b?"text-slate-100":"text-slate-800"}`,children:"Step 2: Review outcomes"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:Ln,className:`${b?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:"Add Outcome"}),e.jsx("button",{type:"button",onClick:()=>Je(u=>!u),className:`${b?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:cn?"Hide":"Show"})]})]}),e.jsx("p",{className:`text-xs mb-3 ${b?"text-slate-300":"text-slate-500"}`,children:"Owned by this component as a whole. Status is derived automatically from the lens actions assigned to each outcome below and cannot be set manually."}),cn?ee.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${b?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:b?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Linked Actions"})]})}),e.jsx("tbody",{className:`${b?"divide-slate-700":"divide-slate-100"} divide-y`,children:ee.map(u=>{const w=Wt(u,ve),$=ta[w],K=()=>ye({objectiveId:u.id});return e.jsxs("tr",{onClick:K,onKeyDown:Z=>{(Z.key==="Enter"||Z.key===" ")&&(Z.preventDefault(),K())},tabIndex:0,className:`${b?"hover:bg-slate-700 focus-visible:bg-slate-700":"hover:bg-slate-50 focus-visible:bg-slate-50"} cursor-pointer focus:outline-none`,children:[e.jsx("td",{className:`px-3 py-2 text-sm ${b?"text-slate-100":"text-slate-800"}`,children:u.text||"Untitled outcome"}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${$}`,children:w})}),e.jsx("td",{className:`px-3 py-2 text-sm ${b?"text-slate-300":"text-slate-600"}`,children:u.linkedActions.length?`${u.linkedActions.length} action(s)`:"None assigned"})]},u.id)})})]})}):e.jsx("p",{className:"text-sm text-slate-500",children:P("No outcomes yet.")}):null]}),e.jsx("div",{id:"assessment-actions",className:`${b?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-sm font-semibold ${b?"text-slate-100":"text-slate-800"}`,children:"Step 3: Plan lens actions"}),e.jsx("p",{className:`mt-1 text-xs ${b?"text-slate-300":"text-slate-600"}`,children:"Track delivery actions for each lens and link them to outcomes and affected component lenses."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:`${b?"bg-slate-800 border-slate-600 text-slate-100":"bg-white border-slate-300 text-slate-700"} rounded-full border px-2 py-1 text-xs`,children:[En,"/",un," completed"]}),e.jsx("button",{type:"button",onClick:()=>Ze(u=>!u),className:`${b?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:dn?"Hide":"Show"})]})]})}),dn?e.jsx("div",{className:"space-y-8 mb-8",children:E.lenses.map(u=>{const w=i(E.id,u),$=`${E.id}:${u}`,K=D[$]||[],Z=K.some(Y=>Y.action.readinessScore===0),Se=w.score===0&&!Z?1:w.score,Oe=C[$]||"all",Pe=U[$]||"all",Nn=Array.from(new Set(K.map(Y=>Y.action.actionType).filter(Y=>Y!==void 0))).sort((Y,re)=>String(Y).localeCompare(String(re))),Rn=Array.from(new Set([...ae.map(Y=>Y.name),...K.map(Y=>Y.action.owner).filter(Y=>!!Y)])).sort((Y,re)=>Y.localeCompare(re)),Qe=[...K].filter(Y=>(Y.action.readinessScore!==void 0?Y.action.readinessScore:Se)!==Se||Oe!=="all"&&(Y.action.actionType||"")!==Oe?!1:Pe==="all"||(Y.action.owner||"")===Pe).sort((Y,re)=>{const qn=He(Y.action.status)==="Completed",Yn=He(re.action.status)==="Completed";if(qn!==Yn)return qn?1:-1;const it=Y.action.dueDate?new Date(Y.action.dueDate).getTime():Number.POSITIVE_INFINITY,jt=re.action.dueDate?new Date(re.action.dueDate).getTime():Number.POSITIVE_INFINITY;return it-jt}),Bs=w.score>=E.target?"#22c55e":w.score>0?"#f59e0b":"#cbd5e1";return e.jsxs("div",{className:`${b?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:[e.jsxs("div",{className:`${b?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} p-6 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4`,children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm font-bold uppercase tracking-wider text-blue-600 block mb-1",children:"Lens"}),e.jsxs("button",{onClick:()=>o(u),className:`flex items-center text-2xl font-semibold transition-colors group text-left ${b?"text-slate-100 hover:text-[#63b3ff]":"text-slate-800 hover:text-[#005eb8]"}`,title:"View Lens Information",children:[u,e.jsx(oa,{})]})]}),e.jsxs("div",{className:"shrink-0 w-full md:w-64",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[e.jsx("label",{className:`block text-xs font-semibold ${b?"text-slate-300":"text-slate-500"}`,children:"Readiness Score"}),e.jsx("button",{type:"button",onClick:()=>Ee(!0),className:"group",title:"What do the readiness score levels mean?","aria-label":"What do the readiness score levels mean?",children:e.jsx(oa,{})})]}),e.jsx("select",{value:w.score,onChange:Y=>Ue(u,Number(Y.target.value)),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 text-sm font-medium border ${b?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,style:{borderLeftWidth:"4px",borderLeftColor:Bs},children:Jo.map(Y=>e.jsxs("option",{value:Y,children:[Y," - ",Xo[Y]]},Y))})]})]}),e.jsx("div",{className:`${b?"bg-slate-900":"bg-blue-50/50"} px-6 py-4 border-b text-sm`,style:{borderLeftWidth:"4px",borderLeftColor:Bs},children:e.jsxs("div",{className:"flex items-start flex-1",children:[e.jsx(ur,{}),e.jsxs("p",{className:`whitespace-pre-line ${b?"text-slate-300":"text-slate-600"}`,children:[e.jsxs("strong",{className:b?"text-slate-100":"text-slate-700",children:[w.score===0?"Not Started":`Level ${w.score}`,":"]}),` ${a(E.id,u,w.score)}`]})]})}),e.jsxs("div",{className:`${b?"border-slate-700":"border-slate-100"} p-6 border-t`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:`text-sm font-semibold ${b?"text-slate-100":"text-slate-800"}`,children:"Lens Actions"}),e.jsx("p",{className:`mt-1 text-xs ${b?"text-slate-300":"text-slate-500"}`,children:"Hierarchy: Outcome - Action - Affected component lenses."})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs("select",{"aria-label":`Filter ${u} actions by type`,value:Oe,onChange:Y=>j(re=>({...re,[$]:Y.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${b?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),[...new Set([...ft,...Nn])].map(Y=>e.jsx("option",{value:Y,children:Y},Y))]}),e.jsxs("select",{"aria-label":`Filter ${u} actions by owner`,value:Pe,onChange:Y=>H(re=>({...re,[$]:Y.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${b?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),Rn.map(Y=>e.jsx("option",{value:Y,children:Y},Y))]}),e.jsx("button",{onClick:()=>nn(u),className:"px-3 py-1.5 rounded bg-[#005eb8] text-white text-xs font-semibold shadow-[0_2px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Add Action"})]})]}),Qe.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${b?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:b?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Actions"})]})}),e.jsx("tbody",{className:`${b?"divide-slate-700":"divide-slate-100"} divide-y`,children:(Ce[`${E.id}:${u}`]?Qe:Qe.slice(0,5)).map(Y=>{var Ms;const re=Y.action,qn=He(re.status),Yn=Ut(re.status,re.startDate,re.dueDate),it=Yn==="Overdue start"||Yn==="Overdue completion"?Yn:null,jt=((Ms=W[Y.sourceComponentId])==null?void 0:Ms.label)||Y.sourceComponentId,Ci=rr(Y.sourceComponentId,re.id,n.objectives||{}),Ei=$n[qn]||$n.Planned,It=`${Y.sourceComponentId}:${Y.sourceLens}:${re.id}`,ki=p&&T==="pathway-1"&&re.priority?re.priority==="must"?b?"bg-red-950/30":"bg-red-50":b?"bg-amber-950/30":"bg-amber-50":"";return e.jsxs("tr",{className:ki,children:[e.jsxs("td",{className:`px-3 py-2 text-sm ${b?"text-slate-100":"text-slate-800"}`,children:[e.jsx("div",{children:Un(re.text,ie[Y.sourceComponentId]||[],b,d)}),Y.isLinkedView?e.jsxs("div",{className:`mt-1 text-xs ${b?"text-indigo-300":"text-indigo-700"}`,children:["Linked from ",jt," /"," ",Y.sourceLens]}):null]}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("select",{"aria-label":`Current state for ${re.text}`,value:qn,onChange:rn=>B(Y.sourceLens,re,rn.target.value),className:`min-w-[7.5rem] rounded-md border px-2 py-1 text-xs font-semibold ${Ei} focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b]`,children:Ot.map(rn=>e.jsx("option",{value:rn,children:rn},rn))}),it?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:it}):null,!Ci.length&&e.jsx("div",{className:`mt-1 text-center text-xs ${b?"text-amber-200":"text-amber-700"}`,children:"Not yet linked"})]}),e.jsx("td",{className:"px-3 py-2",children:x===It?e.jsxs("select",{autoFocus:!0,"aria-label":`Owner for ${re.text}`,value:re.owner||"",onChange:rn=>{N(Y.sourceLens,re.id,rn.target.value),O(null)},onBlur:()=>O(null),className:`min-w-[9rem] rounded-md border px-2 py-1 text-xs font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] ${b?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Unassigned"}),ae.map(rn=>e.jsx("option",{value:rn.name,children:rn.name},rn.id)),re.owner&&!ae.some(rn=>rn.name===re.owner)?e.jsxs("option",{value:re.owner,children:[re.owner," (not on roster)"]}):null]}):e.jsx("button",{type:"button",onClick:()=>O(It),"aria-label":`Change owner for ${re.text}`,className:"rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b]",children:e.jsx(Fo,{name:re.owner||"",darkMode:b,imageDataUrl:xe&&re.owner===xe?R:void 0})})}),e.jsx("td",{className:"px-3 py-2",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Yo,{status:re.status,startDate:re.startDate,dueDate:re.dueDate}),e.jsx("button",{type:"button",onClick:()=>wn(Y.sourceComponentId,Y.sourceLens,re),title:"Edit action","aria-label":`Edit ${re.text}`,className:`${b?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} inline-flex h-8 w-8 items-center justify-center rounded-md border`,children:e.jsx(mr,{})}),e.jsx("button",{type:"button",onClick:()=>Q(Y.sourceComponentId,Y.sourceLens,re),title:"Remove action","aria-label":`Remove ${re.text}`,className:`${b?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"} inline-flex h-8 w-8 items-center justify-center rounded-md border`,children:e.jsx(gr,{})})]})})]},It)})})]})}):e.jsx("p",{className:`text-sm ${b?"text-slate-300":"text-slate-500"}`,children:P("No actions yet for this lens.")}),Qe.length>5?e.jsx("button",{type:"button",onClick:()=>Ae(Y=>({...Y,[`${E.id}:${u}`]:!Y[`${E.id}:${u}`]})),className:`${b?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} mt-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:Ce[`${E.id}:${u}`]?"Show top 5 actions":`Show additional ${Qe.length>5?Qe.length-5:Qe.length} action(s)`}):""]})]},u)})}):null,e.jsx(cr,{rows:ce,isOpen:_,onToggle:()=>te(u=>!u),darkMode:b}),A?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${b?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-hidden rounded-xl border p-6 shadow-2xl`,style:{borderTopWidth:"4px",borderTopColor:rt(A.action.readinessScore??0).color},children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:`text-lg font-semibold ${b?"text-slate-100":"text-slate-900"}`,children:[A.mode==="create"?"Create Action":"Edit Action"," ·"," ",Me," / ",A.sourceLens," · ",Fe]}),e.jsx("span",{className:"mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-semibold text-white",style:{backgroundColor:rt(A.action.readinessScore??0).color},children:rt(A.action.readinessScore??0).label})]}),e.jsx("button",{type:"button",onClick:_n,className:`${b?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:"mt-4 max-h-[calc(100vh-13rem)] overflow-y-auto pr-1 grid gap-3",children:[e.jsx("div",{className:`${b?"border-slate-700 bg-slate-900":"border-blue-100 bg-white"} sticky top-0 z-10 rounded-md border px-3 py-2 shadow-sm`,children:e.jsxs("label",{className:`text-sm ${b?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Description"}),e.jsx("textarea",{value:A.action.text,onChange:u=>V({text:u.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${b?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})}),e.jsxs("div",{className:`${b?"border-slate-700 bg-slate-900 text-slate-200":"border-blue-100 bg-blue-50 text-slate-700"} rounded-md border px-3 py-2 text-xs`,children:[e.jsx("strong",{children:"Linking order:"})," first attach this action to one or more outcomes, then add affected component lenses (component + lens) where this action should appear."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsxs("label",{className:`text-sm ${b?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Action Type"}),e.jsx("select",{value:A.action.actionType||"Admin",onChange:u=>V({actionType:u.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${b?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:ft.map(u=>e.jsx("option",{value:u,children:u},u))})]}),e.jsxs("label",{className:`text-sm ${b?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Owner"}),e.jsxs("select",{value:A.action.owner,onChange:u=>V({owner:u.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${b?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Unassigned"}),ae.map(u=>e.jsxs("option",{value:u.name,children:[u.name,u.role?` - ${u.role}`:""]},u.id)),A.action.owner&&!ae.some(u=>u.name===A.action.owner)?e.jsxs("option",{value:A.action.owner,children:[A.action.owner," (not on roster)"]}):null]})]}),e.jsxs("label",{className:`text-sm ${b?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Status"}),e.jsx("select",{value:A.action.status,onChange:u=>{const w=u.target.value;if(A.action.priority==="must"&&He(w)==="Cancelled"){window.alert("You are trying to mark what we have classified as a MUST action as Cancelled, and it shouldn't be cancelled. Please re-review.");return}V({status:w})},className:`w-full rounded-md border px-3 py-2 text-sm ${b?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Ot.map(u=>e.jsx("option",{value:u,children:u},u))})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("label",{className:`text-sm ${b?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Start Date"}),e.jsx("input",{type:"date",value:A.action.startDate||"",onChange:u=>V({startDate:u.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${b?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("label",{className:`text-sm ${b?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"End Date"}),e.jsx("input",{type:"date",value:A.action.dueDate||"",onChange:u=>V({dueDate:u.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${b?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsxs("label",{className:`text-sm ${b?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Notes"}),e.jsx("textarea",{value:A.action.notes||"",onChange:u=>V({notes:u.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${b?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("div",{className:`${b?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${b?"text-slate-100":"text-slate-800"}`,children:"Evidence Links / Docs"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:he,className:`${b?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Add web link"}),e.jsxs("label",{className:`${b?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:["Upload file(s)",e.jsx("input",{type:"file",multiple:!0,className:"hidden",onChange:mn})]})]})]}),e.jsx("p",{className:`mt-1 text-xs ${b?"text-slate-300":"text-slate-500"}`,children:"Add evidence as either web links or uploaded files. Everything appears below in a single list."}),e.jsx("div",{className:`${b?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:A.evidenceItems.length?A.evidenceItems.map((u,w)=>e.jsxs("div",{className:`${b?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} grid grid-cols-1 gap-2 rounded border p-2 md:grid-cols-[auto,1fr,1fr,auto]`,children:[e.jsx("div",{className:"flex items-start pt-2",children:e.jsx("span",{className:`${u.type==="file"?"bg-emerald-100 text-emerald-800":"bg-blue-100 text-blue-800"} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`,children:u.type==="file"?"File":"Link"})}),e.jsx("input",{value:u.label,onChange:$=>Re(w,"label",$.target.value),placeholder:u.type==="file"?"Document label":"Link label",className:`rounded-md border px-2.5 py-2 text-sm ${b?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`}),e.jsx("input",{value:u.href,onChange:$=>Re(w,"href",$.target.value),placeholder:u.type==="file"?"Embedded file URL (auto generated)":"https://...",className:`rounded-md border px-2.5 py-2 text-sm ${b?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,disabled:u.type==="file"}),e.jsx("button",{type:"button",onClick:()=>kn(w),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},`${u.type}-${w}`)):e.jsx("p",{className:`px-2 py-1 text-sm ${b?"text-slate-300":"text-slate-500"}`,children:"No evidence links or documents added yet."})})]}),e.jsxs("div",{className:`${b?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsx("p",{className:`text-sm font-semibold ${b?"text-slate-100":"text-slate-800"}`,children:"Affected Outcomes"}),e.jsx("p",{className:`mt-1 text-xs ${b?"text-slate-300":"text-slate-500"}`,children:"Tick 1-3 outcomes directly impacted by this action. Outcome status is auto-derived from these linked actions."}),e.jsx("div",{className:`${b?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:((($s=n.objectives)==null?void 0:$s[A.sourceComponentId])||[]).length?(((Ts=n.objectives)==null?void 0:Ts[A.sourceComponentId])||[]).map(u=>{const w=A.linkedObjectiveIds.includes(u.id);return e.jsxs("label",{className:`${b?"hover:bg-slate-700":"hover:bg-slate-50"} flex items-start gap-2 rounded px-2 py-1.5`,children:[e.jsx("input",{type:"checkbox",checked:w,onChange:()=>fn(u.id),className:"mt-0.5"}),e.jsx("span",{className:`text-sm ${b?"text-slate-100":"text-slate-700"}`,children:u.text||"Untitled outcome"})]},u.id)}):e.jsx("p",{className:`px-2 py-1 text-sm ${b?"text-slate-300":"text-slate-500"}`,children:P("No outcomes are defined for this component yet.")})})]}),e.jsxs("div",{className:`${b?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${b?"text-slate-100":"text-slate-800"}`,children:"Affected Component Lenses"}),e.jsx("span",{className:"inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-600",title:"Actions often contribute to other component lenses. Add those targets here so the same action is visible in each relevant lens.",children:"i"})]}),e.jsxs("div",{className:"mt-2 space-y-2",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2",children:[e.jsx("select",{value:A.targetPickerComponentId,onChange:u=>{const w=u.target.value,$=W[w];me(w,($==null?void 0:$.lenses[0])||"")},className:`rounded-md border px-2.5 py-2 text-sm ${b?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:t.map(u=>e.jsx("option",{value:u.id,children:u.label},u.id))}),e.jsx("select",{value:A.targetPickerLens,onChange:u=>me(A.targetPickerComponentId,u.target.value),className:`rounded-md border px-2.5 py-2 text-sm ${b?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:(((Ls=W[A.targetPickerComponentId])==null?void 0:Ls.lenses)||[]).map(u=>e.jsx("option",{value:u,children:u},u))}),e.jsx("button",{type:"button",onClick:de,disabled:In(A.action,A.sourceComponentId,A.sourceLens).some(u=>u.componentId===A.targetPickerComponentId&&u.lens===A.targetPickerLens),title:In(A.action,A.sourceComponentId,A.sourceLens).some(u=>u.componentId===A.targetPickerComponentId&&u.lens===A.targetPickerLens)?"Already added":"Add selected affected lens",className:`${b?"border-cyan-500/50 bg-cyan-500/15 text-cyan-100 hover:bg-cyan-500/25":"border-cyan-300 bg-cyan-100 text-cyan-900 hover:bg-cyan-200"} rounded-md border px-3 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-60`,children:"Add Lens"})]}),e.jsx("div",{className:`${b?"border-slate-700":"border-slate-200"} overflow-hidden rounded border`,children:e.jsxs("table",{className:`min-w-full ${b?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:b?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Component"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Remove"})]})}),e.jsx("tbody",{className:`${b?"divide-slate-700":"divide-slate-100"} divide-y`,children:In(A.action,A.sourceComponentId,A.sourceLens).map(u=>{var w;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-2.5 py-2 text-sm ${b?"text-slate-100":"text-slate-700"}`,children:((w=W[u.componentId])==null?void 0:w.label)||u.componentId}),e.jsx("td",{className:`px-2.5 py-2 text-sm ${b?"text-slate-100":"text-slate-700"}`,children:u.lens}),e.jsx("td",{className:"px-2.5 py-2",children:e.jsx("button",{type:"button",onClick:()=>Te(u.componentId,u.lens),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},`${u.componentId}:${u.lens}`)})})]})})]})]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[A.mode==="edit"&&A.actionId?e.jsx("button",{type:"button",onClick:()=>{if(A.action.priority==="must"){window.alert("You are trying to delete what we have classified as a MUST action, and it shouldn't be deleted. Please re-review.");return}c(A.sourceComponentId,A.sourceLens,A.actionId),_n()},className:"mr-auto rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100",children:"Delete Action"}):null,e.jsx("button",{type:"button",onClick:_n,className:`${b?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Cancel"}),e.jsx("button",{type:"button",onClick:at,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Save Action"})]})]})}):null,Ne?e.jsx($o,{onClose:()=>Ee(!1),darkMode:b}):null,Le?e.jsx(Bo,{message:Le,onDismiss:()=>Ke(null),celebrate:!0}):null,fe&&je&&ke?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":"Outcome Details",className:`w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${b?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${b?"text-slate-100":"text-slate-900"}`,children:"Outcome Details"}),e.jsxs("div",{className:"flex items-center gap-2",children:[je&&zo(je.id)?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>{Bn(je),ye(null)},className:`${b?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Edit"}),e.jsx("button",{type:"button",onClick:()=>{st(je.id),ye(null)},className:"rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-700 hover:bg-red-100",children:"Delete"})]}):null,e.jsx("button",{type:"button",onClick:()=>ye(null),className:`${b?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]})]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${b?"text-slate-400":"text-slate-500"}`,children:"Outcome"}),e.jsx("p",{className:`mt-1 text-sm ${b?"text-slate-100":"text-slate-900"}`,children:je.text||"Untitled outcome"})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${b?"text-slate-400":"text-slate-500"}`,children:"Owner"}),e.jsx("p",{className:`mt-1 text-sm ${b?"text-slate-100":"text-slate-900"}`,children:je.owner||"Unassigned"})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${b?"text-slate-400":"text-slate-500"}`,children:"Status"}),e.jsx("span",{className:`mt-1 inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${ta[ke]}`,children:ke})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${b?"text-slate-400":"text-slate-500"}`,children:"Linked Actions"}),en.length?e.jsx("div",{className:`mt-2 overflow-x-auto rounded-md border ${b?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:`min-w-full divide-y ${b?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"}`,children:[e.jsx("thead",{className:b?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Navigate"})]})}),e.jsx("tbody",{className:`divide-y ${b?"divide-slate-700":"divide-slate-100"}`,children:en.map(u=>{var $,K;const w=u.status?$n[u.status]||$n.Planned:$n.Planned;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${b?"text-slate-100":"text-slate-700"}`,children:u.lens}),e.jsx("td",{className:`px-3 py-2 text-sm ${b?"text-slate-100":"text-slate-700"}`,children:(($=u.action)==null?void 0:$.text)||"Linked action not found"}),e.jsxs("td",{className:"px-3 py-2",children:[u.action?e.jsx("select",{"aria-label":`Current state for ${u.action.text}`,value:u.status||"Planned",onChange:Z=>B(u.lens,u.action,Z.target.value),className:`min-w-[7.5rem] rounded-md border px-2 py-1 text-xs font-semibold ${w} focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b]`,children:Ot.map(Z=>e.jsx("option",{value:Z,children:Z},Z))}):e.jsx("span",{className:"text-xs text-slate-500",children:"Not linked"}),u.temporalStatus==="Overdue start"||u.temporalStatus==="Overdue completion"?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:u.temporalStatus}):null]}),e.jsx("td",{className:"px-3 py-2",children:u.action?e.jsx("button",{type:"button",onClick:()=>On(u.lens,u.action||void 0),className:`${b?"border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25":"border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Open Action"}):e.jsx("span",{className:`text-xs ${b?"text-slate-500":"text-slate-400"}`,children:"Unavailable"})})]},`${u.lens}:${((K=u.action)==null?void 0:K.id)||"missing"}`)})})]})}):e.jsx("p",{className:`mt-1 text-sm ${b?"text-slate-300":"text-slate-500"}`,children:"No linked actions assigned."})]})]})]})}):null,ne?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":ne.mode==="create"?"Add Outcome":"Edit Outcome",className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${b?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsx("h3",{className:`text-lg font-semibold ${b?"text-slate-100":"text-slate-900"}`,children:ne.mode==="create"?"Add Outcome":"Edit Outcome"}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"objective-editor-text",className:`block text-xs font-medium ${b?"text-slate-300":"text-slate-700"}`,children:"Outcome description"}),e.jsx("textarea",{id:"objective-editor-text",value:ne.text,onChange:u=>De({...ne,text:u.target.value}),className:`mt-1 w-full rounded-md border p-2 text-sm h-20 ${b?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"objective-editor-owner",className:`block text-xs font-medium ${b?"text-slate-300":"text-slate-700"}`,children:"Owner"}),e.jsxs("select",{id:"objective-editor-owner",value:ne.owner,onChange:u=>De({...ne,owner:u.target.value}),className:`mt-1 w-full rounded-md border p-2 text-sm ${b?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Unassigned"}),ae.map(u=>e.jsxs("option",{value:u.name,children:[u.name||"Unnamed",u.role?` - ${u.role}`:""]},u.id)),ne.owner&&!ae.some(u=>u.name===ne.owner)?e.jsxs("option",{value:ne.owner,children:[ne.owner," (not on roster)"]}):null]})]})]}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:Mn,className:`${b?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Cancel"}),e.jsx("button",{type:"button",onClick:An,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Save Outcome"})]})]})}):null,e.jsx(Oa,{open:oe,onCancel:()=>{ge.current=null,se(!1)},onContinue:u=>{u&&tn(Qn,!0);const w=ge.current;ge.current=null,se(!1),w==null||w()},darkMode:b}),e.jsx(Sn,{open:be.isOpen,onClose:be.close,title:"Assessing a component",darkMode:b,body:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Each component is assessed lens by lens: justify where you are, review its outcomes, then plan and track delivery actions for each readiness level."}),e.jsx("p",{children:'Click "What is this?" at the top for what the component covers, and "Evidence Links and Docs" at the bottom rounds up everything attached as evidence across all of its actions.'})]})})]})}const dt=50;function br(n){const t=new Date(n);return Number.isNaN(t.getTime())?n:t.toLocaleString("en-GB",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function xr({events:n,darkMode:t=!1}){const s=hn("audit-log"),[a,i]=g.useState("all"),[l,r]=g.useState("all"),[o,c]=g.useState("all"),[f,d]=g.useState(""),[m,v]=g.useState(1),p=g.useMemo(()=>["all",...Array.from(new Set(n.map(T=>T.eventType))).sort()],[n]),S=g.useMemo(()=>["all",...Array.from(new Set(n.map(T=>T.componentId).filter(Boolean))).sort()],[n]),R=g.useMemo(()=>["all",...Array.from(new Set(n.map(T=>T.actor).filter(Boolean))).sort()],[n]),I=g.useMemo(()=>{const T=f.trim().toLowerCase();return n.filter(P=>a==="all"?!0:P.eventType===a).filter(P=>l==="all"?!0:P.componentId===l).filter(P=>o==="all"?!0:P.actor===o).filter(P=>T?[P.summary,P.reason,P.entityId,P.lens].filter(Boolean).some(ue=>String(ue).toLowerCase().includes(T)):!0).sort((P,ue)=>Date.parse(ue.timestamp)-Date.parse(P.timestamp))},[n,a,l,o,f]),b=Math.max(1,Math.ceil(I.length/dt)),k=Math.min(m,b),q=(k-1)*dt,E=I.slice(q,q+dt);return e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Audit Log"}),e.jsx(yn,{onClick:s.reopen,darkMode:t})]}),e.jsx("p",{className:`text-sm mt-1 ${t?"text-slate-300":"text-slate-600"}`,children:"Timestamped history of CST changes, including who made each change."})]}),e.jsx(Sn,{open:s.isOpen,onClose:s.close,title:"Audit Log",darkMode:t,body:e.jsx("p",{children:"A timestamped history of changes made to your CST, including who made each change. Filter by event type, component, or actor, and expand a row to see exactly what changed."})}),e.jsxs("div",{className:`grid gap-3 md:grid-cols-4 rounded-lg border p-4 ${t?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Event type"}),e.jsx("select",{value:a,onChange:T=>{i(T.target.value),v(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:p.map(T=>e.jsx("option",{value:T,children:T==="all"?"All":T},T))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Component"}),e.jsx("select",{value:l,onChange:T=>{r(T.target.value),v(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:S.map(T=>e.jsx("option",{value:T,children:T==="all"?"All":T},T))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Actor"}),e.jsx("select",{value:o,onChange:T=>{c(T.target.value),v(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:R.map(T=>e.jsx("option",{value:T,children:T==="all"?"All":T},T))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Search"}),e.jsx("input",{value:f,onChange:T=>{d(T.target.value),v(1)},placeholder:"summary, reason, id",className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsx("div",{className:`rounded-lg border overflow-hidden ${t?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full text-sm",children:[e.jsx("thead",{className:t?"bg-slate-900 text-slate-200":"bg-slate-50 text-slate-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left",children:"When"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Who"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"What"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Context"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Details"})]})}),e.jsx("tbody",{className:t?"bg-slate-800 text-slate-100":"bg-white text-slate-800",children:E.length?E.map(T=>e.jsxs("tr",{className:t?"border-t border-slate-700":"border-t border-slate-100",children:[e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:br(T.timestamp)}),e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:T.actor||"Unknown user"}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{className:"font-medium",children:T.summary}),e.jsx("div",{className:`text-xs mt-1 ${t?"text-slate-300":"text-slate-600"}`,children:T.eventType})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{children:T.componentId||"-"}),e.jsx("div",{className:`text-xs ${t?"text-slate-300":"text-slate-600"}`,children:T.lens||"-"})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[T.reason?e.jsxs("div",{children:["Reason: ",T.reason]}):null,T.before||T.after?e.jsxs("details",{className:"mt-1",children:[e.jsx("summary",{className:"cursor-pointer text-xs underline",children:"Before/After"}),e.jsx("pre",{className:`mt-1 text-xs whitespace-pre-wrap ${t?"text-slate-300":"text-slate-600"}`,children:JSON.stringify({before:T.before,after:T.after},null,2)})]}):null]})]},T.id)):e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-6 text-center",colSpan:5,children:"No audit events found for the selected filters."})})})]})}),e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("span",{className:t?"text-slate-300":"text-slate-600",children:["Showing ",E.length?q+1:0,"-",Math.min(q+dt,I.length)," of ",I.length]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>v(T=>Math.max(1,T-1)),disabled:k<=1,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Previous"}),e.jsxs("span",{className:t?"text-slate-200":"text-slate-700",children:["Page ",k," / ",b]}),e.jsx("button",{type:"button",onClick:()=>v(T=>Math.min(b,T+1)),disabled:k>=b,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Next"})]})]})]})}function vr(n){if(!n)return!1;const t=new Date(n);return!isNaN(t.getTime())}function Rt(n){return!n||!vr(n)?null:new Date(n)}function Xa(n){const t=[],s=n.cst;if(!s.goLiveDate||!s.goLiveDate.trim())return t.push({field:"cst.goLiveDate",message:"Go live date is required."}),{isValid:!1,errors:t};const a=Rt(s.goLiveDate);if(!a)return t.push({field:"cst.goLiveDate",message:"Go live date must be a valid date."}),{isValid:!1,errors:t};const i=Rt(s.fullAdoptionDate);s.fullAdoptionDate&&!i&&t.push({field:"cst.fullAdoptionDate",message:"Full adoption date must be a valid date when provided."});const l=Rt(s.benefitRealizationDate);return s.benefitRealizationDate&&!l&&t.push({field:"cst.benefitRealizationDate",message:"Benefit realization date must be a valid date when provided."}),i&&i<a&&t.push({field:"cst.fullAdoptionDate",message:"Full adoption date cannot be earlier than go live date."}),l&&l<(i||a)&&t.push({field:"cst.benefitRealizationDate",message:"Benefit realization date cannot be earlier than full adoption date (or go live when full adoption is empty)."}),{isValid:t.length===0,errors:t}}function Sr(n){const t=g.useMemo(()=>n.errors.reduce((s,a)=>(s[a.field]||(s[a.field]=[]),s[a.field].push(a.message),s),{}),[n.errors]);return s=>{var a;return(a=t[s])==null?void 0:a[0]}}function ra(n){const t=[];(!n.trustName||n.trustName.trim()==="")&&t.push({field:"trustName",message:"Trust name is required"}),n.trustName&&n.trustName.length>255&&t.push({field:"trustName",message:"Trust name cannot exceed 255 characters"}),n.region&&n.region.length>100&&t.push({field:"region",message:"Region cannot exceed 100 characters"});const s=Xa(n);return t.push(...s.errors),{isValid:t.length===0,errors:t}}function yr({pathway:n,darkMode:t=!1}){return n==="pathway-1"?null:e.jsxs("div",{className:`mt-3 rounded-md border p-3 text-xs ${t?"border-amber-500/40 bg-amber-500/10 text-amber-100":"border-amber-300 bg-amber-50 text-amber-900"}`,children:[e.jsx("p",{className:"font-semibold",children:"Objectives and actions are currently Pathway 1 only"}),e.jsx("p",{className:"mt-1",children:"Every outcome and action in this tool right now is written for Pathway 1 (starting from scratch). Pathway 2 and Pathway 3 will need their own objectives and actions - those haven't been written yet, so components on this pathway show no outcomes or actions until pathway-specific content is added."})]})}function wr(n){return n.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"export"}function Qa(n){var t;return(t=n==null?void 0:n.url)!=null&&t.trim()?"custom":((n==null?void 0:n.fallback)??"default")==="base"?"base":"default"}function Za({aliases:n,onChange:t,darkMode:s}){const[a,i]=g.useState(""),l=()=>{const r=a.trim();if(!r||n.some(o=>o.toLowerCase()===r.toLowerCase())){i("");return}t([...n,r]),i("")};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[n.map(r=>e.jsxs("span",{className:`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${s?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[r,e.jsx("button",{type:"button",onClick:()=>t(n.filter(o=>o!==r)),"aria-label":`Remove "${r}"`,className:s?"text-slate-400 hover:text-slate-100":"text-slate-500 hover:text-slate-800",children:"×"})]},r)),!n.length&&e.jsx("span",{className:`text-xs ${s?"text-slate-500":"text-slate-400"}`,children:"No extra matching text added yet."})]}),e.jsxs("div",{className:"mt-2 flex gap-2",children:[e.jsx("input",{type:"text",value:a,onChange:r=>i(r.target.value),onKeyDown:r=>{r.key==="Enter"&&(r.preventDefault(),l())},placeholder:"Add text this link should also match...",className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${s?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:l,className:Ge,children:"Add"})]})]})}function Nr({link:n,perLink:t,baseOverrideUrl:s,onSave:a,onClose:i,darkMode:l}){const[r,o]=g.useState(Qa(t)),[c,f]=g.useState((t==null?void 0:t.url)??""),[d,m]=g.useState((t==null?void 0:t.matchAliases)??[]),v=(s==null?void 0:s.trim())||Dn.url,p=Ya(n.label).find(I=>I!==n.label),S=[{value:"default",label:"Default Toolkit Link",url:n.url},{value:"base",label:"Project Specific Homepage",url:v},{value:"custom",label:"Custom URL",url:c}],R=()=>{if(r==="custom"&&!c.trim()){window.alert("Enter a custom URL, or choose Default or Base instead.");return}const I={fallback:r==="base"?"base":"default",url:r==="custom"?c.trim():void 0,matchAliases:d.length?d:void 0};a(r==="default"&&!d.length?void 0:I)};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":`Edit ${n.label} link`,className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${l?"text-slate-100":"text-slate-900"}`,children:n.label}),e.jsx("button",{type:"button",onClick:i,"aria-label":"Close",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${l?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:"mt-4 space-y-2",children:S.map(I=>e.jsxs("label",{className:`flex items-start gap-2 rounded-md border p-2.5 text-sm ${r===I.value?l?"border-blue-400 bg-blue-500/10":"border-blue-400 bg-blue-50":l?"border-slate-700":"border-slate-200"}`,children:[e.jsx("input",{type:"radio",name:`link-source-${n.key}`,checked:r===I.value,onChange:()=>o(I.value),className:"mt-1"}),e.jsxs("span",{className:"flex-1",children:[e.jsx("span",{className:`block font-medium ${l?"text-slate-100":"text-slate-800"}`,children:I.label}),I.value==="custom"&&r==="custom"?e.jsx("input",{type:"url",value:c,onChange:b=>f(b.target.value),placeholder:"https://...",className:`mt-1 w-full rounded border px-2 py-1.5 text-xs ${l?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}):I.url?e.jsx("a",{href:I.url,target:"_blank",rel:"noopener noreferrer",onClick:b=>b.stopPropagation(),className:`block truncate text-xs underline ${l?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:I.url}):e.jsx("span",{className:`block truncate text-xs ${l?"text-slate-400":"text-slate-500"}`,children:"No URL set yet."})]})]},I.value))}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${l?"text-slate-400":"text-slate-500"}`,children:"Match text"}),e.jsx("p",{className:`mt-1 text-xs ${l?"text-slate-300":"text-slate-500"}`,children:"This link is automatically matched in action/summary text. Add extra text below if it should match on other words too."}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-1.5",children:[e.jsxs("span",{className:`rounded-full border px-2 py-0.5 text-xs ${l?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[n.label," ",e.jsx("span",{className:"opacity-60",children:"(label)"})]}),p&&e.jsxs("span",{className:`rounded-full border px-2 py-0.5 text-xs ${l?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[p," ",e.jsx("span",{className:"opacity-60",children:"(auto-detected)"})]})]}),e.jsx("div",{className:"mt-2",children:e.jsx(Za,{aliases:d,onChange:m,darkMode:l})})]}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:i,className:Ge,children:"Cancel"}),e.jsx("button",{type:"button",onClick:R,className:Tn,children:"Save"})]})]})})}function Cr({title:n,aliases:t,onSave:s,onClose:a,darkMode:i}){const[l,r]=g.useState(t);return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":`Match text for ${n}`,className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${i?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-900"}`,children:[n," - match text"]}),e.jsx("button",{type:"button",onClick:a,"aria-label":"Close",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${i?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("p",{className:`mt-2 text-xs ${i?"text-slate-300":"text-slate-500"}`,children:"This link is automatically matched by its name. Add extra text below if it should match on other words too."}),e.jsx("div",{className:"mt-3",children:e.jsx(Za,{aliases:l,onChange:r,darkMode:i})}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:a,className:Ge,children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>s(l),className:Tn,children:"Save"})]})]})})}function Er(n){const t=Fa[n]||[],s=new Map,a=new Map;return t.forEach(i=>{const l=Hn[i];((l==null?void 0:l.inputs)??[]).forEach(r=>s.set(r.key,r)),((l==null?void 0:l.deliverables)??[]).forEach(r=>a.set(r.key,r))}),{inputs:[...s.values()],deliverables:[...a.values()]}}function kr({orgProfile:n,onProfileUpdate:t,components:s,onComponentClick:a,onGoToIntroduction:i,onContinueToVision:l,onGoToWhereAmINow:r,darkMode:o=!1,currentUserId:c,onCurrentUserChange:f,showExternalLinksSection:d=!1}){var be,Ce,Ae,x,O,C,j,U,H,ee,ae,xe,ve,Xe,un,En;const[m,v]=g.useState(n),[p,S]=g.useState(null),[R,I]=g.useState(null),b=g.useRef(null),k=hn("cst-personalisation"),q=ra(m),E=Sr(q);m.trustName.trim()&&(m.projectName||"").trim()&&(m.leadName||"").trim(),g.useEffect(()=>{v(n)},[n]);const T=g.useCallback(y=>{const D={...m,trustName:y};v(D),t(D)},[m,t]),P=g.useCallback(y=>{const D={...m,projectName:y};v(D),t(D)},[m,t]),ue=g.useCallback(y=>{const D={...m,leadName:y};v(D),t(D)},[m,t]),[M,z]=g.useState(null),le=g.useCallback(y=>{y!==m.cst.pathway&&z(y)},[m.cst.pathway]),ie=g.useCallback(()=>{if(!M)return;const y={...m,cst:{...m.cst,pathway:M}};v(y),t(y),z(null)},[M,m,t]),A=g.useCallback(()=>{z(null)},[]),G=g.useCallback((y,D)=>{const W={...m,cst:{...m.cst,[y]:D}};v(W),t(W)},[m,t]),Ne=g.useCallback(y=>{const D={...m,cst:{...m.cst,toolkitChoice:y}};v(D),t(D)},[m,t]),Ee=g.useCallback(y=>{const D={...m,linkOverrides:y};v(D),t(D)},[m,t]),Le=g.useCallback((y,D)=>{const W={...m.componentFurtherReading};D.trim()?W[y]=D.trim():delete W[y];const ce={...m,componentFurtherReading:W};v(ce),t(ce)},[m,t]),Ke=g.useCallback(y=>{var we;const D={key:`custom-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,label:"",url:"",type:"additional"},W={...m.customComponentLinks,[y]:[...((we=m.customComponentLinks)==null?void 0:we[y])||[],D]},ce={...m,customComponentLinks:W};v(ce),t(ce)},[m,t]),L=g.useCallback((y,D,W,ce)=>{var je;const we=((je=m.customComponentLinks)==null?void 0:je[y])||[],Me={...m.customComponentLinks,[y]:we.map(ke=>ke.key===D?{...ke,[W]:ce}:ke)},Fe={...m,customComponentLinks:Me};v(Fe),t(Fe)},[m,t]),oe=g.useCallback((y,D,W)=>{var Fe;const ce=((Fe=m.customComponentLinks)==null?void 0:Fe[y])||[],we={...m.customComponentLinks,[y]:ce.map(je=>je.key===D?{...je,matchAliases:W.length?W:void 0}:je)},Me={...m,customComponentLinks:we};v(Me),t(Me)},[m,t]),se=g.useCallback((y,D)=>{var Me;const W=((Me=m.customComponentLinks)==null?void 0:Me[y])||[],ce={...m.customComponentLinks,[y]:W.filter(Fe=>Fe.key!==D)},we={...m,customComponentLinks:ce};v(we),t(we)},[m,t]),ge=g.useCallback(()=>{const y={id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:"",role:""},D={...m,teamMembers:[...m.teamMembers||[],y]};v(D),t(D)},[m,t]),fe=g.useCallback((y,D,W)=>{const ce={...m,teamMembers:(m.teamMembers||[]).map(we=>we.id===y?{...we,[D]:W}:we)};v(ce),t(ce)},[m,t]),ye=g.useCallback(y=>{const D={...m,teamMembers:(m.teamMembers||[]).filter(W=>W.id!==y)};v(D),t(D),c===y&&f("")},[m,t,c,f]),ne=m.coreLinks&&m.coreLinks.length>0?m.coreLinks:Ua,De=g.useCallback(()=>{const y={key:`core-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,label:"",url:"",type:"core"},D={...m,coreLinks:[...ne,y]};v(D),t(D)},[m,ne,t]),$e=g.useCallback((y,D,W)=>{const ce={...m,coreLinks:ne.map(we=>we.key===y?{...we,[D]:W}:we)};v(ce),t(ce)},[m,ne,t]),ze=g.useCallback((y,D)=>{const W={...m,coreLinks:ne.map(ce=>ce.key===y?{...ce,matchAliases:D.length?D:void 0}:ce)};v(W),t(W)},[m,ne,t]),Be=g.useCallback(y=>{const D={...m,coreLinks:ne.filter(W=>W.key!==y)};v(D),t(D)},[m,ne,t]),Ie=m.toolLinks||[],cn=g.useCallback(()=>{const y="highlight-builder",D={key:`tool-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,tool:y,matchText:mt[y].matchText},W={...m,toolLinks:[...Ie,D]};v(W),t(W)},[m,Ie,t]),Je=g.useCallback((y,D)=>{const W={...m,toolLinks:Ie.map(ce=>ce.key===y?{...ce,tool:D,matchText:mt[D].matchText}:ce)};v(W),t(W)},[m,Ie,t]),dn=g.useCallback((y,D)=>{const W={...m,toolLinks:Ie.map(ce=>ce.key===y?{...ce,matchText:D}:ce)};v(W),t(W)},[m,Ie,t]),Ze=g.useCallback(y=>{const D={...m,toolLinks:Ie.filter(W=>W.key!==y)};v(D),t(D)},[m,Ie,t]),_=g.useCallback(y=>{const D={...m,externalLinksInitiated:y};v(D),t(D)},[m,t]),te=g.useCallback(()=>{const y={schemaVersion:"cst-v1",exportedAt:new Date().toISOString(),orgProfile:m},D=`cst-personalisation-${m.trustName?wr(m.trustName):"export"}.json`;Xn(D,JSON.stringify(y,null,2),"application/json")},[m]),X=g.useCallback(()=>{var y;(y=b.current)==null||y.click()},[]),pe=g.useCallback(async y=>{var W;const D=(W=y.target.files)==null?void 0:W[0];if(y.target.value="",!!D)try{const ce=await D.text(),we=JSON.parse(ce);if(!we.orgProfile||typeof we.orgProfile!="object"){window.alert("This file does not contain Project Profile data.");return}const Me=Nt(we.orgProfile),Fe=ra(Me);if(!window.confirm("Import this Project Profile file? This replaces your current organisation profile, pathway/timeline, toolkit links, further reading, core links and team members."+(Fe.errors.length?`

Note: the imported data has ${Fe.errors.length} validation warning(s) you can fix after importing.`:"")))return;v(Me),t(Me)}catch{window.alert("Unable to read this file. Please choose a valid Project Profile export.")}},[t]);return e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-800"}`,children:"Project Profile"}),e.jsx(yn,{onClick:k.reopen,darkMode:o})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:X,className:Ge,children:"Import Setup"}),e.jsx("input",{ref:b,type:"file",accept:"application/json",className:"hidden",onChange:pe}),e.jsx("button",{type:"button",onClick:te,className:Ge,children:"Export Setup"}),e.jsx("button",{type:"button",onClick:i,className:Ge,"data-testid":"cst-show-intro-button",children:"Go to Introduction"}),e.jsx("button",{type:"button",onClick:l,disabled:!m.trustName.trim(),title:m.trustName.trim()?void 0:"Add a trust name below first so the rest of the tool unlocks",className:`${Tn} disabled:cursor-not-allowed disabled:opacity-50`,"data-testid":"cst-continue-to-vision-button",children:"Continue to Vision →"})]})]}),e.jsx("p",{className:`text-sm -mt-4 ${o?"text-slate-300":"text-slate-600"}`,children:"This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways it follows, and how it's tracking against its readiness phases."}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 1: Organisation profile"}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Provide some initial details to the project name, and change manager"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-trust-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Organisation Name"}),e.jsx("input",{id:"org-trust-name",type:"text","data-testid":"cst-trust-name-input",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:m.trustName,onChange:y=>T(y.target.value),"aria-invalid":!!E("trustName"),"aria-describedby":E("trustName")?"org-trust-name-error":void 0}),E("trustName")?e.jsx("p",{id:"org-trust-name-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:E("trustName")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-project-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Programme / Project Name"}),e.jsx("input",{id:"org-project-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:m.projectName||"",onChange:y=>P(y.target.value)})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-lead-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Lead Submitter (Change Lead)"}),e.jsx("input",{id:"org-lead-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:m.leadName||"",onChange:y=>ue(y.target.value)})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 2: Pathway and timeline"}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Choose the full pathway title for your programme, then set key timeline dates."})]}),e.jsx("div",{className:"mt-3",children:e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-pathway",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Pathway"}),e.jsx("select",{id:"cst-pathway",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:m.cst.pathway,onChange:y=>le(y.target.value),"aria-invalid":!!E("cst.pathway"),"aria-describedby":E("cst.pathway")?"cst-pathway-error":void 0,children:Jn.map(y=>e.jsx("option",{value:y.value,children:y.label},y.value))}),E("cst.pathway")?e.jsx("p",{id:"cst-pathway-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:E("cst.pathway")}):null]})}),e.jsx(yr,{pathway:m.cst.pathway,darkMode:o}),e.jsxs("div",{className:"mt-3 grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-go-live",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Go Live Date (required)"}),e.jsx("input",{id:"cst-go-live",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:m.cst.goLiveDate,onChange:y=>G("goLiveDate",y.target.value),"aria-invalid":!!E("cst.goLiveDate"),"aria-describedby":E("cst.goLiveDate")?"cst-go-live-error":void 0}),E("cst.goLiveDate")?e.jsx("p",{id:"cst-go-live-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:E("cst.goLiveDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-full-adoption",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Full Adoption Date (optional)"}),e.jsx("input",{id:"cst-full-adoption",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:m.cst.fullAdoptionDate,onChange:y=>G("fullAdoptionDate",y.target.value),"aria-invalid":!!E("cst.fullAdoptionDate"),"aria-describedby":E("cst.fullAdoptionDate")?"cst-full-adoption-error":void 0}),E("cst.fullAdoptionDate")?e.jsx("p",{id:"cst-full-adoption-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:E("cst.fullAdoptionDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-benefit",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Benefit Realisation Date (optional)"}),e.jsx("input",{id:"cst-benefit",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:m.cst.benefitRealizationDate,onChange:y=>G("benefitRealizationDate",y.target.value),"aria-invalid":!!E("cst.benefitRealizationDate"),"aria-describedby":E("cst.benefitRealizationDate")?"cst-benefit-error":void 0}),E("cst.benefitRealizationDate")?e.jsx("p",{id:"cst-benefit-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:E("cst.benefitRealizationDate")}):null]})]}),q.errors.filter(y=>y.field.startsWith("cst.")).length>0?e.jsxs("div",{className:`mt-4 rounded-md border p-3 ${o?"border-amber-500/40 bg-amber-500/10":"border-amber-300 bg-amber-50"}`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-amber-200":"text-amber-800"}`,children:"CST validation warnings"}),e.jsx("ul",{className:`mt-2 space-y-1 text-sm ${o?"text-amber-100":"text-amber-900"}`,children:q.errors.filter(y=>y.field.startsWith("cst.")).map(y=>e.jsxs("li",{children:["- ",y.message]},y.field+y.message))})]}):null]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 3: Team Members"}),e.jsx("p",{className:`text-sm mt-1 ${o?"text-slate-300":"text-slate-600"}`,children:"Add the people working on this programme so actions and readiness slides can be assigned to a named owner. This roster is saved with the CST; who you're signed in as is remembered on this device only."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-current-user",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"You are signed in as"}),e.jsxs("select",{id:"cst-current-user",value:c||"",onChange:y=>f(y.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 md:w-1/2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Not selected"}),(m.teamMembers||[]).map(y=>e.jsxs("option",{value:y.id,children:[y.name||"Unnamed",y.role?` - ${y.role}`:""]},y.id))]})]}),e.jsxs("div",{className:"space-y-2",children:[(m.teamMembers||[]).map(y=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2 items-center",children:[e.jsx("input",{value:y.name,onChange:D=>fe(y.id,"name",D.target.value),placeholder:"Name",className:`rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("input",{value:y.role,onChange:D=>fe(y.id,"role",D.target.value),placeholder:"Role (e.g. Change Lead)",className:`rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("button",{type:"button",onClick:()=>ye(y.id),className:"shrink-0 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},y.id)),(m.teamMembers||[]).length?null:e.jsx("p",{className:`text-sm ${o?"text-slate-400":"text-slate-500"}`,children:"No team members added yet."})]}),e.jsx("button",{type:"button",onClick:ge,className:Ge,children:"+ Add Team Member"})]}),e.jsxs("div",{className:`flex flex-wrap items-center justify-between gap-3 rounded-lg border p-5 ${o?"border-blue-500/30 bg-blue-500/10":"border-blue-200 bg-blue-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-blue-100":"text-blue-900"}`,children:"What phase are you currently in?"}),e.jsx("p",{className:`mt-1 text-xs ${o?"text-blue-200":"text-blue-800"}`,children:"Answer a few quick questions and see your readiness by component to figure out where you really are in the change journey."})]}),e.jsx("button",{type:"button",onClick:r,className:Tn,children:"Where am I now?"})]}),e.jsx("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 4: External links"}),e.jsxs("label",{className:`flex items-center gap-2 text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:[e.jsx("input",{type:"checkbox",checked:!!m.externalLinksInitiated,onChange:y=>_(y.target.checked)}),"Links initiated"]})]}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:`This is normally only set up once at the start of a project. Once you're done, tick "Links initiated" to hide this section - re-enable "Show external links section" in Settings if you need to come back to it.`}),!m.externalLinksInitiated||d?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"All toolkit links across the tool point to the NHS Future platform by default. You can override the base toolkit destination for your organisation, or change individual links independently."}),e.jsxs("div",{className:`mt-3 rounded-md border p-3 text-xs ${o?"border-blue-500/30 bg-blue-500/10 text-blue-100":"border-blue-200 bg-blue-50 text-blue-900"}`,children:[e.jsx("p",{className:"font-semibold",children:"Fallback reference"}),e.jsxs("p",{className:"mt-1",children:["Project Specific Homepage: ",e.jsx("span",{className:"font-medium",children:Dn.label})," (",Dn.url,")"]}),e.jsx("p",{className:"mt-1",children:"Default Toolkit Link: the original NHS Future link defined per guidance item."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("label",{htmlFor:"cst-toolkit-choice",className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Default toolkit for assistant preview"}),e.jsx("select",{id:"cst-toolkit-choice",value:m.cst.toolkitChoice,onChange:y=>Ne(y.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:$i.map(y=>e.jsx("option",{value:y.key,children:y.label},y.key))}),e.jsx("p",{className:`mt-2 text-xs ${o?"text-slate-300":"text-slate-500"}`,children:"This controls which toolkit the chatbot-style assistant opens by default across the tool."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Project Specific Homepage"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"Replaces the Change Management Toolkit destination for all links that fall back to it."}),e.jsxs("p",{className:"mt-1 text-xs",children:["Currently:"," ",e.jsx("a",{href:((Ae=(Ce=(be=m.linkOverrides)==null?void 0:be.base)==null?void 0:Ce.url)==null?void 0:Ae.trim())||Dn.url,target:"_blank",rel:"noopener noreferrer",className:`underline ${o?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:((C=(O=(x=m.linkOverrides)==null?void 0:x.base)==null?void 0:O.url)==null?void 0:C.trim())||Dn.url})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Toolkit name"}),e.jsx("input",{type:"text",placeholder:Dn.label,value:((U=(j=m.linkOverrides)==null?void 0:j.base)==null?void 0:U.label)??"",onChange:y=>{var D;return Ee({...m.linkOverrides,base:{...(D=m.linkOverrides)==null?void 0:D.base,label:y.target.value||void 0}})},className:`w-full rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Toolkit URL"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:Dn.url,value:((ee=(H=m.linkOverrides)==null?void 0:H.base)==null?void 0:ee.url)??"",onChange:y=>{var D;return Ee({...m.linkOverrides,base:{...(D=m.linkOverrides)==null?void 0:D.base,url:y.target.value||void 0}})},className:`flex-1 min-w-0 rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),((xe=(ae=m.linkOverrides)==null?void 0:ae.base)==null?void 0:xe.url)&&e.jsx("button",{type:"button",onClick:()=>{var y;return Ee({...m.linkOverrides,base:{...(y=m.linkOverrides)==null?void 0:y.base,url:void 0}})},className:`shrink-0 rounded-md border px-3 py-2 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Reset"})]})]})]})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Additional Links"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"General reference links that aren't tied to a single component - shown here and matched into action/summary text across every component."})]}),e.jsx("div",{className:"space-y-2",children:ne.map(y=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto,auto] gap-2 items-center",children:[e.jsx("input",{type:"text",placeholder:"Link name",value:y.label,onChange:D=>$e(y.key,"label",D.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("input",{type:"url",placeholder:"https://...",value:y.url,onChange:D=>$e(y.key,"url",D.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>I({link:y}),"aria-label":`Edit match text for ${y.label||"this core link"}`,className:`shrink-0 rounded border px-1.5 py-1.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"}),e.jsx("button",{type:"button",onClick:()=>Be(y.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},y.key))}),e.jsx("button",{type:"button",onClick:De,className:Ge,children:"+ Add Core Link"})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Tool linking"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"Matches text in action/summary bodies and turns it into a button that opens an in-app tool, instead of a link to a URL."})]}),e.jsx("div",{className:"space-y-2",children:Ie.map(y=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto] gap-2 items-center",children:[e.jsx("select",{value:y.tool,onChange:D=>Je(y.key,D.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Pa.map(D=>e.jsx("option",{value:D,children:mt[D].label},D))}),e.jsx("input",{type:"text",placeholder:"Matched text",value:y.matchText,onChange:D=>dn(y.key,D.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>Ze(y.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},y.key))}),e.jsx("button",{type:"button",onClick:cn,className:Ge,children:"+ Add Tool Link"})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Component links"}),e.jsxs("p",{className:`text-xs ${o?"text-slate-300":"text-slate-500"}`,children:[`Set the "Further Reading" link shown on each component's overview panel, and override any of its individual guidance links. Each link shows whether it currently points at the `,e.jsx("strong",{children:"Default Toolkit Link"})," (the original NHS Future link),"," ",e.jsx("strong",{children:"Project Specific Homepage"})," (your organisation's override above), or a"," ",e.jsx("strong",{children:"Custom"})," URL you've set - click the pencil to change it. Additional links can be hidden from Settings if you only want the essentials."]}),s.map(y=>{var Me,Fe,je;const D=Er(y.id),W=[...D.inputs,...D.deliverables],ce=W.filter(ke=>{var en,Ue,on,nn;return(nn=(on=(Ue=(en=m.linkOverrides)==null?void 0:en.links)==null?void 0:Ue[ke.key])==null?void 0:on.url)==null?void 0:nn.trim()}).length,we=!!((Me=m.componentFurtherReading)!=null&&Me[y.id]);return e.jsxs("details",{className:`group overflow-hidden rounded-md border ${o?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between gap-3 p-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] ${o?"bg-slate-800 text-slate-200 hover:bg-slate-700":"bg-slate-50 text-slate-700 hover:bg-blue-50"} [&::-webkit-details-marker]:hidden`,children:[e.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[e.jsx("span",{"aria-hidden":"true",className:`shrink-0 text-lg font-bold leading-none transition-transform group-open:rotate-45 ${o?"text-blue-300":"text-[#005eb8]"}`,children:"+"}),e.jsx("span",{className:"truncate",children:y.label})]}),e.jsxs("span",{className:"flex items-center gap-2",children:[we&&e.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-emerald-500/20 text-emerald-300":"bg-emerald-100 text-emerald-700"}`,children:"Further reading set"}),ce>0&&e.jsxs("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-blue-500/20 text-blue-300":"bg-blue-100 text-blue-700"}`,children:[ce," override",ce!==1?"s":""]})]})]}),e.jsxs("div",{className:`border-t divide-y ${o?"border-slate-700 divide-slate-700":"border-slate-200 divide-slate-100"}`,children:[e.jsxs("div",{className:"p-3 space-y-1.5",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:"Further reading"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:"https://...",value:((Fe=m.componentFurtherReading)==null?void 0:Fe[y.id])??"",onChange:ke=>Le(y.id,ke.target.value),className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),we&&e.jsx("button",{type:"button",onClick:()=>Le(y.id,""),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Clear"})]})]}),!W.length&&e.jsx("p",{className:`p-3 text-xs ${o?"text-slate-500":"text-slate-400"}`,children:"No default guidance links for this component - add one below."}),["inputs","deliverables"].map(ke=>{const en=D[ke]??[];return en.length?e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:ke}),en.map(Ue=>{var Mn,An;const on=(An=(Mn=m.linkOverrides)==null?void 0:Mn.links)==null?void 0:An[Ue.key],nn=ts(Ue,m.linkOverrides),wn=Qa(on),Ln={default:o?"border-amber-500/40 bg-amber-500/15 text-amber-200":"bg-amber-50 border-amber-200 text-amber-800",custom:o?"border-green-500/40 bg-green-500/15 text-green-200":"bg-green-50 border-green-200 text-green-800",base:o?"border-red-500/30 bg-red-500/10 text-red-200":"bg-red-50 border-red-100 text-red-700"},Bn={default:"Default Toolkit Link",custom:"Custom",base:"Project Specific Homepage"};return e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-700"}`,children:[Ue.type!=="core"?"(Optional) ":"",Ue.label]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("a",{href:nn.url,target:"_blank",rel:"noopener noreferrer",title:nn.url,className:`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${Ln[wn]}`,children:Bn[wn]}),e.jsx("button",{type:"button",onClick:()=>S(Ue),"aria-label":`Edit ${Ue.label} link`,className:`shrink-0 rounded-md border px-1.5 py-0.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"})]})]},Ue.key)})]},ke):null}),e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:"Custom links"}),(((je=m.customComponentLinks)==null?void 0:je[y.id])||[]).map(ke=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto,auto] gap-2 items-center",children:[e.jsx("input",{type:"text",placeholder:"Link name",value:ke.label,onChange:en=>L(y.id,ke.key,"label",en.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("input",{type:"url",placeholder:"https://...",value:ke.url,onChange:en=>L(y.id,ke.key,"url",en.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>I({link:ke,componentId:y.id}),"aria-label":`Edit match text for ${ke.label||"this link"}`,className:`shrink-0 rounded border px-1.5 py-1.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"}),e.jsx("button",{type:"button",onClick:()=>se(y.id,ke.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},ke.key)),e.jsx("button",{type:"button",onClick:()=>Ke(y.id),className:Ge,children:"+ Add Link"})]})]})]},y.id)})]})]}):e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:'External links were set up at project start. Turn on "Show external links section" in Settings if you need to come back and edit them.'})]})}),p&&e.jsx(Nr,{link:p,perLink:(Xe=(ve=m.linkOverrides)==null?void 0:ve.links)==null?void 0:Xe[p.key],baseOverrideUrl:(En=(un=m.linkOverrides)==null?void 0:un.base)==null?void 0:En.url,onSave:y=>{var W;const D={...(W=m.linkOverrides)==null?void 0:W.links};y?D[p.key]=y:delete D[p.key],Ee({...m.linkOverrides,links:D}),S(null)},onClose:()=>S(null),darkMode:o}),R&&e.jsx(Cr,{title:R.link.label||"Link",aliases:R.link.matchAliases||[],onSave:y=>{R.componentId?oe(R.componentId,R.link.key,y):ze(R.link.key,y),I(null)},onClose:()=>I(null),darkMode:o}),M&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-lg rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-900"}`,children:["Change pathway to ",Ia[M],"?"]}),e.jsx("div",{className:`mt-3 space-y-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:M==="pathway-1"?e.jsx("p",{children:"This will regenerate every component's outcomes and actions for Pathway 1. Any items you've added yourself are kept."}):e.jsx("p",{children:"Pathway 2 and Pathway 3 don't have their own outcomes and actions written yet, so this will clear the Pathway 1 stand-in content instead of leaving it in place - components will show an honest empty state until pathway-specific content is added. Any items you've added yourself are kept."})}),e.jsxs("div",{className:"mt-5 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:A,className:Ge,children:"Cancel"}),e.jsx("button",{type:"button",onClick:ie,className:"inline-flex items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Confirm change"})]})]})}),e.jsx(Sn,{open:k.isOpen,onClose:k.close,title:"Project Profile",darkMode:o,body:e.jsx("p",{children:"This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways it follows, and how it's tracking against its readiness phases. You can export or import just this page's data, and manage the external links shown throughout the tool."})})]})}function jr({steps:n,onComponentClick:t,onActionView:s,colorAccessibilityMode:a="standard",darkMode:i=!1}){const[l,r]=g.useState({}),o=a==="color-blind-friendly"?Zi:Ta;return e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"What To Do Next"}),e.jsx("span",{className:`text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Your current phase"})]}),e.jsx("p",{className:`text-sm mb-4 ${i?"text-slate-300":"text-slate-500"}`,children:"Every component in your current phase that still has pending actions, ranked by timeline risk - overdue first."}),n.length>0?e.jsx("div",{className:"space-y-3",children:n.map(c=>{var m;const f=!!l[c.componentId],d=c.outstandingActions.length;return e.jsxs("div",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("button",{type:"button",onClick:()=>t(c.componentId),className:"flex w-full items-center justify-between gap-3 text-left",children:[e.jsx("span",{className:`text-sm font-semibold hover:underline ${i?"text-slate-100":"text-slate-800"}`,children:c.componentLabel}),e.jsx("span",{title:c.bragReason,className:`text-xs font-semibold rounded px-2.5 py-0.5 ${o[c.bragStatus]}`,children:c.bragStatus})]}),e.jsx("p",{className:`text-sm mt-1 ${i?"text-slate-300":"text-slate-600"}`,children:c.summary}),(m=c.toolkitLinks)!=null&&m.length?e.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:c.toolkitLinks.map(v=>e.jsx("a",{href:v.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-medium text-[#005eb8] underline",children:v.label},`${c.componentId}-${v.url}`))}):null,d>0&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("button",{type:"button",onClick:()=>r(v=>({...v,[c.componentId]:!v[c.componentId]})),className:`text-xs font-semibold underline ${i?"text-slate-300 hover:text-slate-100":"text-slate-600 hover:text-slate-900"}`,children:[f?"Hide":"Show"," outstanding action",d===1?"":"s"," (",d,")"]}),f&&e.jsx("div",{className:`mt-2 overflow-x-auto rounded-md border ${i?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full divide-y text-xs",children:[e.jsx("thead",{className:i?"bg-slate-800":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Lens"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Status"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"View"})]})}),e.jsx("tbody",{className:`divide-y ${i?"divide-slate-700":"divide-slate-100"}`,children:c.outstandingActions.map(v=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-2 py-1.5 font-medium ${i?"text-slate-200":"text-slate-700"}`,children:v.lens}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:v.text}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:v.owner||"Unassigned"}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:v.status||"-"}),e.jsx("td",{className:"px-2 py-1.5",children:e.jsx("button",{type:"button",onClick:()=>s(c.componentId,v.lens,v.id),className:`font-semibold underline ${i?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:"View"})})]},v.id))})]})})]})]},c.componentId)})}):e.jsx("p",{className:`text-sm ${i?"text-slate-400":"text-slate-500"}`,children:"Nothing pending for your current phase. Continue tracking actions and maintain evidence quality."})]})}function Ir({components:n,store:t,getEntry:s,onComponentClick:a,darkMode:i=!1}){const[l,r]=g.useState(null),o=n.reduce((f,d)=>(f[d.phase]=f[d.phase]||[],f[d.phase].push(d),f),{}),c=(f,d)=>{const m=`${f}:${d}`;r(v=>v===m?null:m)};return e.jsxs("details",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} group overflow-hidden rounded-lg border shadow-sm`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-lg font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] [&::-webkit-details-marker]:hidden ${i?"text-slate-100 hover:bg-slate-700":"text-slate-800 hover:bg-slate-50"}`,children:[e.jsx("span",{children:"Programme Change Hierarchy"}),e.jsx("span",{className:"text-2xl font-normal transition-transform group-open:rotate-45",children:"+"})]}),e.jsxs("div",{className:"border-t border-slate-200 p-6 dark:border-slate-700",children:[e.jsxs("p",{className:`mt-1 mb-4 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:["Your programme has ",n.length," components, each viewed through one or more lenses. A component is a change topic you assess and track. A lens is the perspective used to assess it (e.g. leadership, risk, capability). Click a lens to see its actions, or open the full assessment."]}),e.jsx("div",{className:"space-y-5",children:Aa.filter(f=>{var d;return(d=o[f])==null?void 0:d.length}).map(f=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:`text-sm font-semibold ${i?"text-slate-100":"text-slate-700"}`,children:["Phase ",f,": ",an[f]]}),e.jsx("div",{className:"space-y-2",children:o[f].map(d=>{const m=d.lenses.reduce((p,S)=>{const R=s(d.id,S);return{total:p.total+R.actions.length,completed:p.completed+R.actions.filter(I=>I.status==="Completed").length}},{total:0,completed:0}),v=ro(t,d.id,s);return e.jsxs("div",{"data-testid":`cst-component-card-${d.id}`,className:`w-full rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("span",{className:`font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:d.label}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:`text-xs ${i?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",Yt(d.target)]}),e.jsx("button",{type:"button",onClick:()=>a(d.id),className:`text-xs font-semibold underline ${i?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:"Open full assessment"})]})]}),e.jsx("div",{className:"mt-2 flex flex-wrap gap-1.5",children:d.lenses.map(p=>{const S=s(d.id,p),R=l===`${d.id}:${p}`;return e.jsxs("button",{type:"button",onClick:()=>c(d.id,p),"aria-expanded":R,className:`text-xs px-2 py-1 rounded-full border transition-colors ${R?i?"border-blue-400 bg-blue-500/25 text-blue-100":"border-blue-400 bg-blue-100 text-blue-900":S.score>=d.target?i?"border-green-500/40 bg-green-500/15 text-green-200 hover:bg-green-500/25":"bg-green-50 border-green-200 text-green-800 hover:bg-green-100":S.score>0?i?"border-amber-500/40 bg-amber-500/15 text-amber-200 hover:bg-amber-500/25":"bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100":i?"border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700":"bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"}`,children:[p,": ",S.score,"/",d.target]},p)})}),e.jsxs("p",{className:`mt-2 text-xs ${i?"text-slate-300":"text-slate-500"}`,children:["Lens actions: ",m.completed,"/",m.total," complete · Outcomes: ",v.completed,"/",v.total," complete"]}),d.lenses.map(p=>{if(!(l===`${d.id}:${p}`))return null;const R=s(d.id,p);return e.jsx("div",{className:`mt-3 overflow-x-auto rounded-md border ${i?"border-slate-700":"border-slate-200"}`,children:R.actions.length?e.jsxs("table",{className:`min-w-full divide-y ${i?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"}`,children:[e.jsx("thead",{className:i?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"})]})}),e.jsx("tbody",{className:`divide-y ${i?"divide-slate-700":"divide-slate-100"}`,children:R.actions.map(I=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${i?"text-slate-100":"text-slate-800"}`,children:I.text||"Untitled action"}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`inline-flex whitespace-nowrap rounded-full border px-2 py-1 text-xs font-semibold ${$n[I.status]}`,children:I.status})}),e.jsx("td",{className:`px-3 py-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:I.owner||"Unassigned"})]},I.id))})]}):e.jsx("p",{className:`p-3 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:"No actions yet for this lens."})},`${p}-table`)})]},d.id)})})]},`phase-group-${f}`))})]})]})}const Ar=[{phase:1,label:"Pre-Discovery",programmeStage:"Concept",tagline:"Define the change",color:"bg-blue-50",darkColor:"bg-blue-950/45",textColor:"text-blue-700",darkTextColor:"text-blue-100",borderColor:"border-blue-300",darkBorderColor:"border-blue-700",deliverables:[{text:"Change Vision defined and communicated",componentIds:["vision"]},{text:"Compelling case for change developed",componentIds:["case_for_change"],showExternalGuidance:!1}]},{phase:2,label:"Solution Design",programmeStage:"Definition",tagline:"Prepare the change",color:"bg-violet-50",darkColor:"bg-violet-950/45",textColor:"text-violet-700",darkTextColor:"text-violet-100",borderColor:"border-violet-300",darkBorderColor:"border-violet-700",deliverables:[{text:"Change Impact analysed",componentIds:["change_impact"]},{text:"Change Management inputted to Business Case",componentIds:["case_for_change"],showExternalGuidance:!1},{text:"Engagement and Comms Strategy developed",componentIds:["change_network","stakeholder"]}]},{phase:3,label:"Development",programmeStage:"Design & Develop",tagline:"Plan the change",color:"bg-amber-50",darkColor:"bg-amber-950/45",textColor:"text-amber-700",darkTextColor:"text-amber-100",borderColor:"border-amber-300",darkBorderColor:"border-amber-700",deliverables:[{text:"Engagement and Comms Plan developed",componentIds:["stakeholder"]},{text:"Change Management Plan developed",componentIds:["cm_readiness"]}]},{phase:4,label:"Deployment / Go Live",programmeStage:"Implementation",tagline:"Manage implementation of the change",color:"bg-orange-50",darkColor:"bg-orange-950/45",textColor:"text-orange-700",darkTextColor:"text-orange-100",borderColor:"border-orange-300",darkBorderColor:"border-orange-700",deliverables:[{text:"Change Management Plan executed",componentIds:["cm_readiness"]},{text:"Communications delivered and Stakeholders engaged",componentIds:["stakeholder"]},{text:"Future State Processes validated",componentIds:["process_change"]},{text:"Skills gaps addressed",componentIds:["skills_learning"]},{text:"Future State Processes trialled and in use",componentIds:["process_change"]}]},{phase:5,label:"Post-Deployment",programmeStage:"Transition / Close",tagline:"Reinforce and sustain the change",color:"bg-green-50",darkColor:"bg-green-950/45",textColor:"text-green-700",darkTextColor:"text-green-100",borderColor:"border-green-300",darkBorderColor:"border-green-700",deliverables:[{text:"Change adoption evaluated",componentIds:["change_adoption"]},{text:"Business Change refinements actioned",componentIds:["reinforcement"]},{text:"Change sustained",componentIds:["transfer_bau"]}]}];function ei({currentPhase:n,onComponentClick:t,guidanceTarget:s="Default",linkOverrides:a,showAdditionalGuidanceLinks:i=!0,darkMode:l=!1}){const[r,o]=g.useState(n);return g.useEffect(()=>{o(n)},[n]),e.jsxs("section",{className:`rounded-lg border shadow-sm ${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:`border-b px-5 py-4 ${l?"border-slate-700":"border-slate-200"}`,children:[e.jsx("h3",{className:`text-lg font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:"The Five Change Phases"}),e.jsx("p",{className:`mt-1 text-sm ${l?"text-slate-300":"text-slate-500"}`,children:"Select a phase to see the key deliverables expected at that stage."})]}),e.jsx("div",{className:"space-y-3 p-4",children:Ar.map(c=>e.jsxs("details",{open:r===c.phase,onToggle:f=>{f.currentTarget.open?o(c.phase):r===c.phase&&o(0)},className:`group overflow-hidden rounded-md border ${l?c.darkBorderColor:c.borderColor}`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] [&::-webkit-details-marker]:hidden ${l?`${c.darkColor} ${c.darkTextColor} hover:brightness-110`:`${c.color} ${c.textColor} hover:brightness-95`}`,children:[e.jsxs("span",{children:[e.jsxs("span",{className:"block text-sm font-semibold",children:["Phase ",c.phase,": ",c.label]}),e.jsxs("span",{className:`mt-0.5 block text-xs ${l?"text-slate-300":"text-slate-500"}`,children:[c.tagline," · ",c.programmeStage]})]}),e.jsx("span",{className:"text-xl font-bold transition-transform group-open:rotate-45","aria-hidden":"true",children:"+"})]}),e.jsx("div",{className:`border-t p-4 ${l?`${c.darkBorderColor} bg-slate-900`:`${c.borderColor} bg-white`}`,children:e.jsx("ul",{className:"space-y-3",children:c.deliverables.map(f=>{const d=f.componentIds.map(S=>Ht(S)).filter(S=>!!S),m=d.flatMap(S=>vt(s,S.id,"deliverables",a,i).slice(0,1)),v=d.length===1&&m.length===1,p=f.showExternalGuidance!==!1&&v&&m[0].label.trim().toLowerCase()!==d[0].label.trim().toLowerCase();return e.jsxs("li",{className:"flex items-start gap-2 text-sm",children:[e.jsx("span",{className:`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${l?`${c.darkColor} ${c.darkTextColor}`:`${c.color} ${c.textColor}`}`,children:"✓"}),e.jsxs("span",{className:"min-w-0 flex-1",children:[e.jsx("span",{className:l?"text-slate-200":"text-slate-700",children:f.text}),v?e.jsxs("span",{className:"ml-2 inline-flex flex-wrap items-center gap-2 text-xs",children:[e.jsx("button",{type:"button",onClick:()=>t(d[0].id),className:"font-semibold text-[#005eb8] underline underline-offset-2 hover:text-[#003087]",children:d[0].label}),p?e.jsx("a",{href:m[0].url,target:"_blank",rel:"noopener noreferrer",className:"font-medium text-slate-500 underline underline-offset-2 hover:text-[#005eb8]",children:"External guidance ↗"}):null]}):null,v?null:e.jsxs("span",{className:"mt-1 flex flex-wrap gap-x-3 gap-y-1",children:[d.map(S=>e.jsx("span",{className:"inline-flex flex-wrap items-center gap-2 text-xs",children:e.jsx("button",{type:"button",onClick:()=>t(S.id),className:"font-semibold text-[#005eb8] underline underline-offset-2 hover:text-[#003087]",children:S.label})},S.id)),m.map(S=>e.jsx("a",{href:S.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-medium text-slate-500 underline underline-offset-2 hover:text-[#005eb8]",children:"External guidance ↗"},S.url))]})]})]},f.text)})})})]},c.phase))})]})}function _r({store:n,components:t,metrics:s,getEntry:a,onComponentClick:i,onActionView:l,guidanceTarget:r="Default",linkOverrides:o,showAdditionalGuidanceLinks:c=!0,phaseFocusMode:f="auto",manualPhaseFocus:d,colorAccessibilityMode:m="standard",darkMode:v=!1}){const p=hn("daily-checkin"),S=f==="manual"&&d?d:s.currentPhase,R=g.useMemo(()=>La(t,a,S),[t,a,S]);return e.jsxs("div",{className:"max-w-5xl mx-auto pb-20",children:[e.jsxs("div",{className:"mb-6 flex items-center gap-2",children:[e.jsx("h2",{className:`text-3xl font-bold ${v?"text-slate-100":"text-slate-800"}`,children:"Daily Check-in"}),e.jsx(yn,{onClick:p.reopen,darkMode:v})]}),e.jsx("p",{className:`mb-6 -mt-4 text-sm ${v?"text-slate-300":"text-slate-500"}`,children:"Your daily triage: what's outstanding right now, and where it sits in the wider programme."}),e.jsxs("div",{className:"space-y-8",children:[e.jsx(jr,{steps:R,onComponentClick:i,onActionView:l,colorAccessibilityMode:m,darkMode:v}),e.jsx(ei,{currentPhase:S,onComponentClick:i,guidanceTarget:r,linkOverrides:o,showAdditionalGuidanceLinks:c,darkMode:v}),e.jsx(Ir,{components:t,store:n,getEntry:a,onComponentClick:i,darkMode:v})]}),e.jsx(Sn,{open:p.isOpen,onClose:p.close,title:"Daily Check-in",darkMode:v,body:e.jsx("p",{children:'This is your daily triage page - "What To Do Next" lists every component in your current phase with outstanding actions, ranked by timeline risk, and the Programme Change Hierarchy below gives you the full picture across every phase.'})})]})}const ut=["Pathway","Phases","Component","Lens","Readiness","Actions"],Or={"pathway-1":"For teams starting from scratch. Nothing has been built yet, so every component starts at Not Started and the guidance walks you through building the foundations - defining a vision, securing sponsorship, and putting the basics of a change plan in place - one readiness level at a time.","pathway-2":"For teams who've already run a successful pilot and now need to scale it up. The guidance and actions are framed around taking what worked in the pilot - the vision, the sponsorship, the early lessons - and rolling it out consistently to new sites and teams, rather than starting from nothing.","pathway-3":"For teams who've already gone live but adoption is patchy or inconsistent across the organisation. The guidance and actions focus on diagnosing where and why adoption is lagging, then delivering targeted fixes to bring lagging areas up to the same standard as the rest."},pn=Fi(1)[0]||nt[0],gt=pn.lenses[0],pt=2;function Rr({activeStep:n,pathwayLabel:t,darkMode:s}){const a=[t,`Phase ${pn.phase}: ${an[pn.phase]||""}`,pn.label,gt,`Readiness ${pt}`,"Actions"];return e.jsx("div",{className:"flex flex-wrap items-center gap-1.5 text-xs",children:a.map((i,l)=>e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:`rounded-full px-2.5 py-1 font-semibold transition-colors ${l===n?"bg-[#005eb8] text-white":l<n?s?"bg-slate-700 text-slate-200":"bg-blue-50 text-blue-800":s?"bg-slate-900 text-slate-600":"bg-slate-100 text-slate-400"}`,children:i}),l<a.length-1?e.jsx("span",{"aria-hidden":"true",className:s?"text-slate-600":"text-slate-300",children:"→"}):null]},i))})}function Pr({children:n,darkMode:t}){return e.jsx("div",{className:`w-full rounded-xl border shadow-sm ${t?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:e.jsx("div",{className:"p-6 sm:p-10",children:n})})}function Dr({darkMode:n=!1,onGetStarted:t,onComponentClick:s}){var v;const[a,i]=g.useState("pathway-1"),[l,r]=g.useState(0),o=Jn.find(p=>p.value===a)||Jn[0],c=l===ut.length-1,f=n?"text-slate-300":"text-slate-700",d=()=>r(p=>Math.min(ut.length-1,p+1)),m=()=>r(p=>Math.max(0,p-1));return e.jsxs("div",{className:"w-full space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${n?"text-slate-100":"text-slate-800"}`,children:"Engine Explained"}),e.jsx("p",{className:`mt-2 max-w-3xl text-sm ${n?"text-slate-300":"text-slate-600"}`,children:"A quick worked example showing how everything fits together, step by step."})]}),l>0?e.jsx(Rr,{activeStep:l,pathwayLabel:o.simplifiedLabel,darkMode:n}):null,e.jsxs(Pr,{darkMode:n,children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${n?"text-blue-300":"text-blue-700"}`,children:["Step ",l+1," of ",ut.length," · ",ut[l]]}),l===0?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:"Every programme starts with a pathway"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"A pathway describes the change journey your programme is on. It tailors which guidance, actions and resources you see everywhere else in the tool. Pick one below - we'll use it for the rest of this walkthrough (you can change it for real later, in Project Profile)."}),e.jsx("div",{className:"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3",children:Jn.map(p=>{const S=p.value===a;return e.jsx("button",{type:"button",onClick:()=>i(p.value),"aria-pressed":S,className:`rounded-lg border p-4 text-left transition-colors ${S?"border-[#005eb8] bg-blue-50 ring-2 ring-[#005eb8]":n?"border-slate-600 bg-slate-900 hover:bg-slate-700":"border-slate-200 bg-white hover:bg-slate-50"}`,children:e.jsx("p",{className:`text-sm font-semibold ${S?"text-[#005eb8]":n?"text-slate-100":"text-slate-900"}`,children:p.simplifiedLabel})},p.value)})}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 text-sm ${n?"border-blue-500/30 bg-blue-500/10 text-blue-100":"border-blue-200 bg-blue-50 text-blue-900"}`,children:[e.jsx("p",{className:"font-semibold",children:(v=Jn.find(p=>p.value===a))==null?void 0:v.simplifiedLabel}),e.jsx("p",{className:"mt-1",children:Or[a]})]})]}):null,l===1?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:"Your pathway is broken into the 5 change phases"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"Every pathway runs through the same 5 phases, from the earliest thinking about a change through to it being fully embedded as business as usual. This is the same phase breakdown you'll see on your Daily Check-in once your project is set up - expand a phase below to see what it covers."}),e.jsx("div",{className:"mt-6",children:e.jsx(ei,{currentPhase:pn.phase,onComponentClick:s,darkMode:n})}),e.jsx("p",{className:`mt-4 text-sm ${f}`,children:`Each phase covers a set of change components that matter most at that stage - for example, Vision and the Case for Change come first, while things like Transfer to BAU come much later. Let's look at what a "component" actually is.`})]}):null,l===2?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:"A component is a specific area of change to get right"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"Each phase is made up of several components - focused topics like Vision, Sponsorship, Capability or Benefits. Each one has its own readiness to build up, and its own actions to get there. Here's the example we're following:"}),e.jsxs("div",{className:`mt-6 rounded-lg border p-5 ${n?"border-slate-700 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsx("p",{className:`text-lg font-semibold ${n?"text-slate-100":"text-slate-900"}`,children:pn.label}),e.jsx("p",{className:`mt-2 text-sm ${f}`,children:Ma(pn.id)})]}),e.jsx("p",{className:`mt-4 text-sm ${f}`,children:`But you don't assess a component all at once - you look at it through several different "lenses". Let's see what that means.`})]}):null,l===3?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:"A lens is a different angle on the same component"}),e.jsxs("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:["Every component is assessed through a handful of lenses - perspectives like leadership, culture, planning, skills or process. Each lens gets its own readiness score, because a component can be strong in one lens and weak in another. Here are all of ",pn.label,"'s lenses:"]}),e.jsx("div",{className:"mt-6 grid grid-cols-1 gap-3",children:pn.lenses.map(p=>{const S=p===gt;return e.jsxs("div",{className:`rounded-lg border p-5 ${S?"border-[#005eb8] bg-blue-50":n?"border-slate-700 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("p",{className:`text-lg font-semibold ${S?"text-[#005eb8]":n?"text-slate-100":"text-slate-900"}`,children:[p,S?" - we'll follow this one":""]}),e.jsx("p",{className:`mt-2 text-sm ${S&&!n?"text-blue-900":f}`,children:Ga(p)})]},p)})}),e.jsxs("p",{className:`mt-4 text-sm ${f}`,children:["So now we have a specific thing to score: ",pn.label,", seen through the"," ",gt," lens. That's exactly what a readiness score measures."]})]}):null,l===4?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:"Readiness is scored 0-5 for every lens"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"Every lens on every component is scored on the same 0-5 scale, so progress is always comparable. Here's what each level means:"}),e.jsx("div",{className:"mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2",children:Wn.map(p=>{const[,S]=(St[p.score]||"").split(/:\s(.+)/);return e.jsxs("div",{className:`rounded-md border p-2.5 ${p.score===pt?"ring-2 ring-[#005eb8]":n?"border-slate-700":""}`,style:{borderLeftWidth:"4px",borderLeftColor:p.color},children:[e.jsxs("p",{className:`text-xs font-bold ${n?"text-slate-100":"text-slate-800"}`,children:[p.score," - ",p.label,p.score===pt?" - our example is here":""]}),e.jsx("p",{className:`mt-0.5 text-xs ${n?"text-slate-300":"text-slate-600"}`,children:S})]},p.score)})})]}):null,l===5?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:"Actions are how you move up a readiness level"}),e.jsxs("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:["At every readiness level, the engine suggests concrete actions - things to review, decide, build, communicate or measure. For ",pn.label," /"," ",gt," at level ",pt,", that might mean things like agreeing a standard approach and getting it applied consistently."]}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"Assign each action an owner and a status. Once every action at a level is Completed or Cancelled, that lens automatically moves up to the next readiness level - no guesswork, no manual tally."}),e.jsx("p",{className:`mt-6 text-sm font-semibold ${n?"text-slate-100":"text-slate-900"}`,children:"That's the whole engine: Pathway → Phase → Component → Lens → Readiness → Actions. Time to set up your real project."})]}):null,e.jsxs("div",{className:"mt-8 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:m,disabled:l===0,className:`rounded-md border px-4 py-2 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${n?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Back"}),c?e.jsx("button",{type:"button",onClick:t,className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]",children:"Get started"}):e.jsx("button",{type:"button",onClick:d,className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]",children:"Next"})]})]})]})}const $r=`Pathway 1 - We are starting $projectName for the first time
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
adoption.`,Pt={"Pathway 1 - We are starting product for the first time":"pathway-1","Pathway 2 - We have piloted product and need to scale up":"pathway-2","Pathway 3 - product is live but adoption is patchy":"pathway-3","Pathway 1 - Pilot":"pathway-1","Pathway 2 - Scale up":"pathway-2","Pathway 3 - Reassess":"pathway-3"},Tr={vision:"Vision",case_for_change:"Case for Change",sponsorship:"Senior Sponsorship and Governance",change_network:"Change Network",benefits:"Benefits and WIIFM",stakeholder:"Stakeholder Engagement and Communication",process_change:"Process Change and Ways of Working",change_impact:"Change Impact and Risk",risk_management:"Change Impact and Risk",skills_learning:"Skills, Learning, Capability and Confidence",capability:"Skills, Learning, Capability and Confidence",change_adoption:"Change Adoption",transfer_bau:"Transfer to BAU",reinforcement:"Reinforcement",resistance:"Resistance",cm_readiness:"Readiness and Planning",org_maturity:"Organisational Change Management Maturity"};function Lr(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function Dt(n){return n.replace(/\bAVT\b/g,"${productName}")}function Br(n){const t=n.split(/\r?\n/).map(i=>i.trim()),s={};let a=0;for(;a<t.length;){const i=t[a],l=Pt[i];if(!l){a+=1;continue}for(a+=1;a<t.length&&!t[a];)a+=1;if(a>=t.length)break;const r=t[a];for(a+=1;a<t.length&&(!t[a]||t[a]==="Are you on track?");)a+=1;let o="";if(a<t.length&&t[a].startsWith("Descriptor:"))for(o=Dt(t[a].replace("Descriptor:","").trim()),a+=1;a<t.length&&t[a]&&!t[a].startsWith("☐")&&!t[a].startsWith("ARE YOU ON TRACK?")&&!Pt[t[a]];)o=Dt(`${o} ${t[a]}`.trim()),a+=1;const c=[];for(;a<t.length&&t[a].startsWith("☐");){const f=Dt(t[a].replace(/^☐\s*/,"").trim()),d=`${l}:${Lr(r)}:${c.length+1}`;c.push({key:d,text:f}),a+=1}for(s[r]||(s[r]={}),s[r][l]={domain:r,descriptor:o,checklist:c};a<t.length&&t[a]&&!Pt[t[a]];)a+=1}return s}const Mr=Br($r);function Gr(n){return Tr[n]||null}function ni(n,t){var a;const s=Gr(n);return s&&((a=Mr[s])==null?void 0:a[t])||null}function Fr(n,t){if(!t||t.checklist.length===0)return{status:"on-track",completionPct:100,checkedCount:0,totalCount:0};const s=t.checklist.length,a=new Set(n),i=t.checklist.filter(r=>a.has(r.key)).length,l=Math.round(i/s*100);return l>=80?{status:"on-track",completionPct:l,checkedCount:i,totalCount:s}:l>=45?{status:"attention",completionPct:l,checkedCount:i,totalCount:s}:{status:"off-track",completionPct:l,checkedCount:i,totalCount:s}}function Ur(n){const t=Fr(n.checkedItemKeys,n.rule);return!n.rule||n.rule.checklist.length===0?{status:n.averageScore>=n.targetScore?"on-track":"attention",completionPct:t.completionPct,checkedCount:t.checkedCount,totalCount:t.totalCount}:t.status==="off-track"?t:n.averageScore<Math.max(1,n.targetScore-1)&&t.status!=="on-track"?{...t,status:"attention"}:t}const $t=[1,2,3,4,5];function Hr(n,t){const s=n.lenses.reduce((a,i)=>a+Number(t(n.id,i).score||0),0);return n.lenses.length?Number((s/n.lenses.length).toFixed(1)):0}function Wr(n,t,s,a,i,l){if(n.phase>s)return{label:"Not in current phase yet",rowClass:l?"border-slate-600 bg-slate-800/80":"border-slate-200 bg-slate-50",chipClass:l?"bg-slate-700 text-slate-100":"bg-slate-200 text-slate-700",barClass:"bg-slate-400"};const r=ni(n.id,a),o=Ur({averageScore:t,targetScore:n.target,checkedItemKeys:i,rule:r});return o.status==="off-track"?{label:`Off track (${o.completionPct}% checklist)`,rowClass:l?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:l?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:o.status==="attention"?{label:`Needs attention (${o.completionPct}% checklist)`,rowClass:l?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:l?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:t>=n.target?{label:`On track (${o.completionPct}% checklist)`,rowClass:l?"border-green-700 bg-green-950/45":"border-green-200 bg-green-50",chipClass:l?"bg-green-900 text-green-100":"bg-green-100 text-green-700",barClass:"bg-green-500"}:n.phase<s?{label:"Behind timeline",rowClass:l?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:l?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:n.phase===s?{label:"Due this phase",rowClass:l?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:l?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:{label:"In progress",rowClass:l?"border-blue-700 bg-blue-950/45":"border-blue-200 bg-blue-50",chipClass:l?"bg-blue-900 text-blue-100":"bg-blue-100 text-blue-700",barClass:"bg-blue-500"}}function Vr({components:n,metrics:t,getEntry:s,onComponentClick:a,pathway:i,pathwayChecks:l,darkMode:r=!1}){const o=hn("component-delivery-timeline"),c=n.map(f=>{var v;const d=Hr(f,s),m=((v=l[f.id])==null?void 0:v[i])||[];return{component:f,average:d,status:Wr(f,d,t.currentPhase,i,m,r)}});return e.jsxs("section",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-2xl border p-6 shadow-sm`,children:[e.jsx("p",{className:`text-sm font-semibold uppercase tracking-[0.18em] ${r?"text-slate-300":"text-slate-500"}`,children:"Component Delivery Timeline"}),e.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${r?"text-slate-100":"text-slate-900"}`,children:"Component delivery timeline"}),e.jsx(yn,{onClick:o.reopen,darkMode:r})]}),e.jsx("p",{className:`mt-2 text-sm ${r?"text-slate-300":"text-slate-600"}`,children:"This gantt-style view shows when each component should be completed by phase. Components are coloured by whether they are on track against the current phase. Select a row to jump into the matching assessment tab."})]}),e.jsx(Sn,{open:o.isOpen,onClose:o.close,title:"Component Delivery Timeline",darkMode:r,body:e.jsx("p",{children:"A gantt-style view of when each component should be completed by phase, coloured by whether it's on track. Select a row to jump straight into that component's assessment."})}),e.jsx("div",{className:"lg:hidden space-y-3",children:c.map(({component:f,average:d,status:m})=>e.jsxs("button",{type:"button",onClick:()=>a(f.id),className:`w-full rounded-xl border p-4 text-left transition-colors ${r?"hover:border-slate-500":"hover:border-slate-300"} ${m.rowClass}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:f.label}),e.jsxs("div",{className:`mt-1 text-xs ${r?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",Yt(f.target)," · completes by Phase"," ",f.phase]})]}),e.jsx("span",{className:`rounded-full px-4 py-1 text-xs font-semibold ${m.chipClass}`,children:m.label})]}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("div",{className:`mb-1 flex items-center justify-between text-xs ${r?"text-slate-300":"text-slate-600"}`,children:[e.jsx("span",{children:"Timeline"}),e.jsxs("span",{children:["Average ",d]})]}),e.jsx("div",{className:"grid grid-cols-5 gap-1",children:$t.map(v=>{const p=v<=f.phase,S=v===f.phase;return e.jsxs("div",{children:[e.jsx("div",{className:`h-2 rounded-full ${r?"bg-slate-700/70":"bg-white/80"}`,children:p?e.jsx("div",{className:`h-full rounded-full ${m.barClass} ${S?"opacity-100":"opacity-35"}`,title:S?"Expected completion phase":"Planned timeline"}):null}),e.jsxs("div",{className:`mt-1 text-center text-[10px] ${r?"text-slate-400":"text-slate-500"}`,children:["P",v]})]},`${f.id}-mobile-${v}`)})})]})]},`mobile-${f.id}`))}),e.jsx("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} hidden lg:block rounded-2xl border p-5 shadow-sm overflow-x-auto`,children:e.jsxs("div",{className:"min-w-[860px]",children:[e.jsxs("div",{className:`grid grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 border-b pb-3 text-xs font-semibold uppercase tracking-wider ${r?"border-slate-700 text-slate-400":"border-slate-200 text-slate-500"}`,children:[e.jsx("div",{children:"Component"}),$t.map(f=>e.jsxs("div",{className:"text-center",children:["Phase ",f]},f)),e.jsx("div",{className:"text-center",children:"Average"}),e.jsx("div",{className:"text-center",children:"Status"})]}),e.jsx("div",{className:"mt-4 space-y-3",children:c.map(({component:f,average:d,status:m})=>e.jsxs("button",{type:"button",onClick:()=>a(f.id),className:`grid w-full grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 rounded-xl border p-2.5 text-left transition-colors ${r?"hover:border-slate-500":"hover:border-slate-300"} ${m.rowClass}`,children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:f.label}),e.jsxs("div",{className:`mt-1 text-xs ${r?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",Yt(f.target)," · completes by Phase"," ",f.phase]})]}),$t.map(v=>{const p=v<=f.phase,S=v===f.phase;return e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:`h-7 w-full rounded-full px-1 py-1 ${r?"bg-slate-700/70":"bg-white/70"}`,children:p?e.jsx("div",{className:`h-full rounded-full ${m.barClass} ${S?"opacity-100":"opacity-35"}`,title:S?"Expected completion phase":"Planned timeline"}):null})},`${f.id}-${v}`)}),e.jsx("div",{className:`flex items-center justify-center text-sm font-semibold ${r?"text-slate-100":"text-slate-700"}`,children:d}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("span",{className:`rounded-full text-center px-2.5 py-1 text-xs font-semibold ${m.chipClass}`,children:m.label})})]},f.id))}),e.jsxs("div",{className:`mt-4 rounded-md border p-3 text-xs ${r?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{className:"font-semibold",children:"Key:"})," Grey rows are not yet due for the current phase. Red rows indicate overdue or off-track work."]})]})})]})}function qr(n){return Oi.sanitize(n,{USE_PROFILES:{html:!0}})}const Yr=[{label:"Bold",command:"bold",icon:"B"},{label:"Italic",command:"italic",icon:"I"},{label:"Bullet list",command:"insertUnorderedList",icon:"•"},{label:"Numbered list",command:"insertOrderedList",icon:"1."}];function la({value:n,onChange:t,placeholder:s,className:a}){const i=g.useRef(null);g.useEffect(()=>{const c=i.current;c&&c.innerHTML!==n&&(c.innerHTML=n)},[n]);const l=()=>{const c=i.current;c&&t(qr(c.innerHTML))},r=c=>{var f;(f=i.current)==null||f.focus(),document.execCommand(c,!1),l()},o=!n||n==="<br>";return e.jsxs("div",{className:`rounded-md border border-slate-300 bg-white ${a||""}`,children:[e.jsx("div",{"data-print-hide":"true",className:"flex items-center gap-1 border-b border-slate-200 bg-slate-50 px-1.5 py-1",children:Yr.map(c=>e.jsx("button",{type:"button",title:c.label,"aria-label":c.label,onMouseDown:f=>f.preventDefault(),onClick:()=>r(c.command),className:"flex h-6 min-w-[1.5rem] items-center justify-center rounded px-1 text-xs font-bold text-slate-600 hover:bg-slate-200",children:c.icon},c.command))}),e.jsxs("div",{className:"relative",children:[o&&s?e.jsx("span",{className:"pointer-events-none absolute left-2 top-1.5 text-sm text-slate-400",children:s}):null,e.jsx("div",{ref:i,contentEditable:!0,suppressContentEditableWarning:!0,onInput:l,onBlur:l,className:"min-h-[4.5rem] px-2 py-1.5 text-sm text-slate-800 outline-none [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"})]})]})}function sn(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}const zt="nhs-highlight-builder-layout",Tt=[{id:"executive-summary",label:"Executive Summary"},{id:"change-dashboard",label:"Change Dashboard"},{id:"adoption-metrics",label:"Adoption Metrics"},{id:"what-went-well",label:"What Went Well"},{id:"risks-issues",label:"Key Risks and Issues"},{id:"stakeholder-insights",label:"Stakeholder Insights"},{id:"interventions-delivered",label:"Change Interventions Delivered"},{id:"upcoming-priorities",label:"Upcoming Priorities"},{id:"decisions-required",label:"Decisions Required"},{id:"change-lead-assessment",label:"Change Lead Assessment"}],Kr={"executive-summary":{label:"Headline scorecard",kind:"donut"},"change-dashboard":{label:"RAG trend chart",kind:"trend"},"adoption-metrics":{label:"KPI scorecard",kind:"bars"},"what-went-well":{label:"Achievement tiles",kind:"steps"},"risks-issues":{label:"Risk heat map",kind:"risk"},"stakeholder-insights":{label:"Sentiment split",kind:"donut"},"interventions-delivered":{label:"Intervention timeline",kind:"steps"},"upcoming-priorities":{label:"30-day roadmap",kind:"steps"},"decisions-required":{label:"Decision funnel",kind:"trend"},"change-lead-assessment":{label:"Confidence profile",kind:"bars"}},Gn=["#005eb8","#41a6c8","#78be20","#ffb81c","#da291c"],xn={title:"Executive Highlight Report",themeColor:"#005eb8",logoDataUrl:"",programmeName:"",reportingPeriod:"",changeLeadName:"",sroName:"",overallStatus:"Amber",orientation:"landscape",bragSlides:[],sections:["executive-summary","change-dashboard","adoption-metrics","what-went-well","risks-issues","stakeholder-insights","interventions-delivered","upcoming-priorities","decisions-required","change-lead-assessment"],sectionNarratives:{},metricRows:[],riskRows:[],stakeholderPositivePct:0,stakeholderNeutralPct:0,stakeholderNegativePct:0,interventionRows:[],decisionRows:[],assessmentRows:[]},zr={Green:"bg-green-100 text-green-800 border-green-200",Amber:"bg-amber-100 text-amber-800 border-amber-200",Red:"bg-red-100 text-red-800 border-red-200"},Jr={Green:"bg-green-500",Amber:"bg-amber-500",Red:"bg-red-500"};function ca({status:n}){return e.jsxs("span",{className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${zr[n]}`,children:[e.jsx("span",{className:`h-2 w-2 rounded-full ${Jr[n]}`}),n]})}function Xr({rows:n}){const t=Math.max(5,...n.flatMap(s=>[s.current,s.target]));return e.jsxs("div",{className:"space-y-5","aria-label":"Current component scores compared with targets",children:[n.map(s=>e.jsxs("div",{className:"grid grid-cols-[minmax(130px,1fr),minmax(220px,2fr),48px] items-center gap-3",children:[e.jsx("span",{className:"text-sm font-semibold text-[#425563]",children:s.label}),e.jsxs("div",{className:"relative h-8 rounded bg-[#e8edee]",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 rounded bg-[#005eb8]",style:{width:`${Math.min(100,s.current/t*100)}%`}}),e.jsx("div",{className:"absolute inset-y-[-4px] w-0.5 bg-[#da291c]",style:{left:`${Math.min(100,s.target/t*100)}%`},title:`Target ${s.target}`})]}),e.jsx("span",{className:"text-right text-sm font-bold text-[#005eb8]",children:s.current.toFixed(1)})]},s.label)),e.jsxs("div",{className:"flex flex-wrap gap-5 border-t border-[#d8dde0] pt-4 text-xs text-[#425563]",children:[e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"h-3 w-3 rounded-sm bg-[#005eb8]"})," Current average"]}),e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"h-4 w-0.5 bg-[#da291c]"})," Target marker"]})]})]})}function Qr(){return e.jsx("span",{className:"flex h-4 w-4 shrink-0 items-center justify-center rounded bg-green-500 text-[10px] font-bold text-white",children:"✓"})}function zn(n,t){return`${n+1}. ${t}`}function ti(n){return Array.isArray(n)?n.filter(t=>!!t&&typeof t=="object").map(t=>({id:t.id||sn(),componentId:t.componentId||"",rows:Array.isArray(t.rows)?t.rows.filter(s=>!!s&&typeof s=="object").map(s=>({id:s.id||sn(),preventingGreenHtml:s.preventingGreenHtml||"",returnToGreenHtml:s.returnToGreenHtml||"",ownerId:s.ownerId||"",targetDate:s.targetDate||"",linkedActionId:s.linkedActionId})):[]})):[]}function tt(n,t){return Array.isArray(n)?n.filter(s=>!!s&&typeof s=="object").map(t):[]}function si(n){return tt(n,t=>({id:t.id||sn(),measure:t.measure||"",target:t.target||"",current:t.current||"",status:t.status==="Green"||t.status==="Amber"||t.status==="Red"?t.status:"Amber"}))}function ai(n){return tt(n,t=>({id:t.id||sn(),risk:t.risk||"",impact:t.impact||"",mitigation:t.mitigation||"",status:t.status||"Open"}))}function ii(n){return tt(n,t=>({id:t.id||sn(),text:t.text||""}))}function oi(n){return tt(n,t=>({id:t.id||sn(),decision:t.decision||"",owner:t.owner||"",requiredBy:t.requiredBy||""}))}function ri(n){return tt(n,t=>({id:t.id||sn(),area:t.area||"",confidence:t.confidence==="High"||t.confidence==="Medium"||t.confidence==="Low"?t.confidence:"Medium"}))}function Zr(){const n=vn(zt);if(!n)return xn;try{return{...xn,...n,overallStatus:n.overallStatus==="Green"||n.overallStatus==="Amber"||n.overallStatus==="Red"?n.overallStatus:xn.overallStatus,orientation:n.orientation==="portrait"||n.orientation==="landscape"?n.orientation:xn.orientation,bragSlides:ti(n.bragSlides),sections:Array.isArray(n.sections)&&n.sections.length>0?n.sections:xn.sections,metricRows:si(n.metricRows),riskRows:ai(n.riskRows),stakeholderPositivePct:Number(n.stakeholderPositivePct)||0,stakeholderNeutralPct:Number(n.stakeholderNeutralPct)||0,stakeholderNegativePct:Number(n.stakeholderNegativePct)||0,interventionRows:ii(n.interventionRows),decisionRows:oi(n.decisionRows),assessmentRows:ri(n.assessmentRows)}}catch{return xn}}function el({store:n,metrics:t,lenses:s,components:a=nt,getEntry:i,trustName:l,projectName:r,themeColor:o,onLayoutSaved:c,darkMode:f=!1,currentUserId:d}){const m=hn("highlight-builder"),v=n.orgProfile.teamMembers||[],[p,S]=g.useState(()=>{const x=Zr();return o&&!x.themeColor?{...x,themeColor:o}:x}),[R,I]=g.useState(""),[b,k]=g.useState(0),q=g.useRef(null),E=g.useMemo(()=>new Set(p.sections),[p.sections]),T=g.useMemo(()=>p.sections.reduce((x,O,C)=>(x[O]=C,x),{}),[p.sections]),P=p.orientation==="landscape",ue=P?"overflow-hidden rounded-lg border border-[#003087] bg-white shadow-md":"rounded-md border border-slate-200 bg-white p-4",M=P?{}:{borderLeft:`3px solid ${p.themeColor}`};function z({children:x}){return P?e.jsx("div",{className:"-mx-0 -mt-0 mb-4 px-5 py-3 text-base font-bold uppercase tracking-wide text-white",style:{backgroundColor:p.themeColor||At.blue},children:x}):e.jsx("div",{className:"mb-2 border-b border-slate-200 pb-1 text-xs font-bold uppercase tracking-wider text-slate-500",children:x})}function le({children:x}){return P?e.jsx("div",{className:"px-5 pb-5 text-[15px]",children:x}):e.jsx(e.Fragment,{children:x})}const ie=g.useMemo(()=>a.map(x=>{let O=0;x.lenses.forEach(j=>{O+=Number(i(x.id,j).score||0)});const C=Number((O/x.lenses.length).toFixed(1));return{component:x,average:C,target:x.target,gap:Number(Math.max(0,x.target-C).toFixed(1))}}),[a,i]),A=g.useMemo(()=>[...ie].sort((x,O)=>O.average-x.average).slice(0,5),[ie]),G=x=>{S(O=>({...O,...x}))},Ne=x=>{S(O=>{const C=E.has(x)?O.sections.filter(j=>j!==x):[...O.sections,x];return{...O,sections:C}})},Ee=(x,O)=>{S(C=>({...C,sectionNarratives:{...C.sectionNarratives,[x]:O}}))},Le=()=>{const x=new Set(p.bragSlides.map(j=>j.componentId)),O=a.find(j=>!x.has(j.id))||a[0],C={id:sn(),componentId:(O==null?void 0:O.id)||"",rows:[]};S(j=>({...j,bragSlides:[...j.bragSlides,C]}))},Ke=x=>{S(O=>({...O,bragSlides:O.bragSlides.filter(C=>C.id!==x)}))},L=(x,O)=>{S(C=>({...C,bragSlides:C.bragSlides.map(j=>j.id===x?{...j,componentId:O}:j)}))},oe=x=>{const O={id:sn(),preventingGreenHtml:"",returnToGreenHtml:"",ownerId:d||"",targetDate:""};S(C=>({...C,bragSlides:C.bragSlides.map(j=>j.id===x?{...j,rows:[...j.rows,O]}:j)}))},se=(x,O,C)=>{S(j=>({...j,bragSlides:j.bragSlides.map(U=>U.id===x?{...U,rows:U.rows.map(H=>H.id===O?{...H,...C}:H)}:U)}))},ge=(x,O)=>{S(C=>({...C,bragSlides:C.bragSlides.map(j=>j.id===x?{...j,rows:j.rows.filter(U=>U.id!==O)}:j)}))};function fe(x,O){S(C=>({...C,[x]:[...C[x],O]}))}function ye(x,O,C){S(j=>({...j,[x]:j[x].map(U=>U.id===O?{...U,...C}:U)}))}function ne(x,O){S(C=>({...C,[x]:C[x].filter(j=>j.id!==O)}))}const De=async x=>{var j;const O=(j=x.target.files)==null?void 0:j[0];if(!O)return;const C=await new Promise((U,H)=>{const ee=new FileReader;ee.onload=()=>U(String(ee.result||"")),ee.onerror=()=>H(new Error("Unable to read selected logo file.")),ee.readAsDataURL(O)});I(O.name),S(U=>({...U,logoDataUrl:C})),k(U=>U+1)},$e=()=>{tn(zt,p),Xn("highlight-builder-layout.json",JSON.stringify(p,null,2),"application/json"),c==null||c()},ze=async x=>{var C;const O=(C=x.target.files)==null?void 0:C[0];if(O)try{const j=await O.text(),U=JSON.parse(j);S({...xn,...U,overallStatus:U.overallStatus==="Green"||U.overallStatus==="Amber"||U.overallStatus==="Red"?U.overallStatus:xn.overallStatus,orientation:U.orientation==="portrait"||U.orientation==="landscape"?U.orientation:xn.orientation,bragSlides:ti(U.bragSlides),sections:Array.isArray(U.sections)&&U.sections.length>0?U.sections:xn.sections,sectionNarratives:U.sectionNarratives||{},metricRows:si(U.metricRows),riskRows:ai(U.riskRows),stakeholderPositivePct:Number(U.stakeholderPositivePct)||0,stakeholderNeutralPct:Number(U.stakeholderNeutralPct)||0,stakeholderNegativePct:Number(U.stakeholderNegativePct)||0,interventionRows:ii(U.interventionRows),decisionRows:oi(U.decisionRows),assessmentRows:ri(U.assessmentRows)})}catch{window.alert("Unable to load the selected layout JSON. Please verify the file contents.")}finally{x.target.value=""}};g.useEffect(()=>{tn(zt,p)},[p]);const Be=n.history.length>1?n.history[n.history.length-2]:null,Ie=g.useMemo(()=>ie.slice(0,10).map(x=>{const O=Be?Number((x.component.lenses.reduce((H,ee)=>{var ae,xe;return H+Number(((xe=(ae=Be.data[x.component.id])==null?void 0:ae[ee])==null?void 0:xe.score)||0)},0)/x.component.lenses.length).toFixed(1)):x.average,C=x.average>O?"▲":x.average<O?"▼":"►",j=x.average>=x.target?"Green":x.average>=Math.max(1,x.target-1)?"Amber":"Red",U=x.average>=x.target?"Consistently understood by most stakeholder groups.":x.average>=Math.max(1,x.target-1)?"Progressing, with reinforcement still required.":"Below target and requiring focused intervention.";return{area:x.component.label,current:x.average,target:x.target,status:j,trend:C,commentary:U}}),[ie,Be]),cn=g.useMemo(()=>Ie.map(x=>({label:x.area,current:x.current,target:x.target})),[Ie]),Je=g.useMemo(()=>t.nextSteps.slice(0,7).map(x=>x.message),[t.nextSteps]),dn=x=>{if(x==="decisions-required")return p.decisionRows.some(O=>O.decision.trim()||O.owner.trim()||O.requiredBy.trim());if((p.sectionNarratives[x]||"").trim())return!0;switch(x){case"executive-summary":return!0;case"change-dashboard":return Ie.length>0;case"adoption-metrics":return p.metricRows.length>0;case"what-went-well":return A.length>0;case"risks-issues":return p.riskRows.length>0;case"stakeholder-insights":return p.stakeholderPositivePct+p.stakeholderNeutralPct+p.stakeholderNegativePct>0;case"interventions-delivered":return p.interventionRows.length>0;case"upcoming-priorities":return Je.length>0;case"decisions-required":return p.decisionRows.length>0;case"change-lead-assessment":return p.assessmentRows.length>0;default:return!1}},Ze=p.sections.filter(x=>dn(x)),_=x=>{let O=0;return x.reduce((C,j)=>(C[j]=O,O+=j==="change-dashboard"?2:1,C),{})},te=_(p.sections),X=_(Ze);function pe({sectionId:x}){if(!P)return null;const O=Kr[x],C=H=>{const ee=Number.parseFloat(H.replace("%","").trim());return Number.isFinite(ee)?Math.max(0,ee):0};if(O.kind==="donut"){const H=x==="stakeholder-insights"?[p.stakeholderPositivePct,p.stakeholderNeutralPct,p.stakeholderNegativePct]:[Number(t.overallPct),Math.max(0,100-Number(t.overallPct))],ee=H.reduce((En,y)=>En+y,0);if(!ee)return null;const ae=H[0]/ee*100,xe=H[1]/ee*100,ve=x==="stakeholder-insights"?"Positive":"Overall progress",Xe=x==="stakeholder-insights"?"Neutral":"Remaining",un=x==="stakeholder-insights"?H[2]/ee*100:0;return e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:O.label}),e.jsx("div",{className:"mx-auto mt-4 h-32 w-32 rounded-full",style:{background:x==="stakeholder-insights"?`conic-gradient(#78be20 0 ${ae}%, #ffb81c ${ae}% ${ae+xe}%, #da291c ${ae+xe}% ${ae+xe+un}%, #d8eaf6 ${ae+xe+un}% 100%)`:`conic-gradient(#005eb8 0 ${ae}%, #41a6c8 ${ae}% ${ae+xe}%, #d8eaf6 ${ae+xe}% 100%)`,mask:"radial-gradient(circle, transparent 55%, #000 56%)",WebkitMask:"radial-gradient(circle, transparent 55%, #000 56%)"}}),e.jsxs("div",{className:"mt-4 grid gap-2 text-xs text-[#425563]",children:[e.jsxs("span",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{children:[e.jsx("i",{className:`mr-2 inline-block h-2.5 w-2.5 rounded-full ${x==="stakeholder-insights"?"bg-[#78be20]":"bg-[#005eb8]"}`}),ve]}),e.jsxs("strong",{children:[H[0],"%"]})]}),e.jsxs("span",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{children:[e.jsx("i",{className:`mr-2 inline-block h-2.5 w-2.5 rounded-full ${x==="stakeholder-insights"?"bg-[#ffb81c]":"bg-[#41a6c8]"}`}),Xe]}),e.jsxs("strong",{children:[H[1],"%"]})]}),x==="stakeholder-insights"?e.jsxs("span",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{children:[e.jsx("i",{className:"mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#da291c]"}),"Negative"]}),e.jsxs("strong",{children:[H[2],"%"]})]}):null]})]})}if(O.kind==="risk"){const H=p.riskRows.reduce((xe,ve)=>{const Xe=ve.status.trim()||"Open";return xe[Xe]=(xe[Xe]||0)+1,xe},{}),ee=Object.entries(H);if(!ee.length)return null;const ae=Math.max(...ee.map(([,xe])=>xe));return e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:O.label}),e.jsx("div",{className:"mt-5 space-y-3",children:ee.map(([xe,ve])=>e.jsxs("div",{children:[e.jsxs("div",{className:"mb-1 flex justify-between text-xs font-semibold text-[#425563]",children:[e.jsx("span",{children:xe}),e.jsx("span",{children:ve})]}),e.jsx("div",{className:"h-4 rounded bg-white",children:e.jsx("div",{className:"h-4 rounded",style:{width:`${ve/ae*100}%`,backgroundColor:xe.toLowerCase().includes("closed")?"#78be20":xe.toLowerCase().includes("at risk")?"#da291c":"#ffb81c"}})})]},xe))})]})}if(O.kind==="steps"){const H=x==="interventions-delivered"?p.interventionRows.map(ee=>ee.text.trim()).filter(Boolean):x==="upcoming-priorities"?Je:A.map(ee=>ee.component.label);return H.length?e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:O.label}),e.jsx("div",{className:"mt-5 space-y-3",children:H.slice(0,5).map((ee,ae)=>e.jsxs("div",{className:"flex items-start gap-3 text-xs text-[#425563]",children:[e.jsx("span",{className:"flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-bold text-white",style:{backgroundColor:Gn[ae%Gn.length]},children:ae+1}),e.jsx("span",{className:"pt-0.5",children:ee})]},`${ee}-${ae}`))})]}):null}if(O.kind==="trend"&&x==="decisions-required"){const H=p.decisionRows.map(ee=>ee.decision.trim()).filter(Boolean);return H.length?e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:O.label}),e.jsx("div",{className:"mt-5 space-y-3",children:H.slice(0,5).map((ee,ae)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"h-5 flex-1 rounded bg-white",children:e.jsx("div",{className:"h-5 rounded",style:{width:`${100-ae*15}%`,backgroundColor:Gn[ae%Gn.length]}})}),e.jsx("span",{className:"max-w-[45%] text-right text-xs text-[#425563]",children:ee})]},`${ee}-${ae}`))})]}):null}const U=(x==="adoption-metrics"?p.metricRows.map(H=>({label:H.measure,value:C(H.current),max:Math.max(100,C(H.target))})):x==="change-lead-assessment"?["High","Medium","Low"].map(H=>({label:H,value:p.assessmentRows.filter(ee=>ee.confidence===H).length,max:Math.max(1,p.assessmentRows.length)})):A.map(H=>({label:H.component.label,value:H.average,max:5}))).filter(H=>H.label.trim()&&H.value>0);return U.length?e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:O.label}),e.jsx("div",{className:"mt-5 space-y-3",children:U.slice(0,6).map(H=>e.jsxs("div",{children:[e.jsxs("div",{className:"mb-1 flex justify-between gap-2 text-xs font-semibold text-[#425563]",children:[e.jsx("span",{children:H.label}),e.jsx("span",{children:H.value})]}),e.jsx("div",{className:"h-4 rounded bg-white",children:e.jsx("div",{className:"h-4 rounded",style:{width:`${Math.min(100,H.value/H.max*100)}%`,backgroundColor:Gn[U.indexOf(H)%Gn.length]}})})]},H.label))})]}):null}const be=x=>{if((p.sectionNarratives[x]||"").trim())return p.sectionNarratives[x].trim();switch(x){case"executive-summary":return`${p.overallStatus}. The programme continues to progress across ${a.length} components and ${s.length} lenses, with overall delivery at ${t.overallPct}%.`;case"change-dashboard":return"Dashboard status is derived from current component averages versus targets, with trend based on the most recent finalised snapshot.";case"adoption-metrics":return"Metrics below provide an operational view of progress against key adoption measures and targets.";case"what-went-well":return"List key achievements for the reporting period, including sponsorship visibility and areas of strengthened adoption.";case"risks-issues":return"The following risks/issues require active monitoring and mitigation.";case"stakeholder-insights":return"Summarise positive feedback themes, concerns, and sentiment from stakeholder listening channels.";case"interventions-delivered":return"Capture interventions completed this month and assess their observed effectiveness.";case"upcoming-priorities":return"Set out the next 30-day focus to maintain delivery momentum and close adoption gaps.";case"decisions-required":return"Record approvals and decisions needed to unblock delivery and sustain adoption progress.";case"change-lead-assessment":return"Provide confidence ratings and the overall professional assessment from the Change Lead.";default:return""}},Ce=x=>{const O=be(x);return x==="change-dashboard"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:O}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Trend"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Commentary"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:Ie.map(C=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:C.area}),e.jsx("td",{className:"px-3 py-2 text-sm",children:e.jsx(ca,{status:C.status})}),e.jsx("td",{className:"px-3 py-2 text-sm",children:C.trend}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:C.commentary})]},C.area))})]})})]}):x==="adoption-metrics"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:O}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Measure"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[p.metricRows.map(C=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:C.measure,onChange:j=>ye("metricRows",C.id,{measure:j.target.value}),placeholder:"e.g. Active Users",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:C.target,onChange:j=>ye("metricRows",C.id,{target:j.target.value}),placeholder:"e.g. 80%",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:C.current,onChange:j=>ye("metricRows",C.id,{current:j.target.value}),placeholder:"e.g. 62%",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:C.status,onChange:j=>ye("metricRows",C.id,{status:j.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"Green",children:"Green"}),e.jsx("option",{value:"Amber",children:"Amber"}),e.jsx("option",{value:"Red",children:"Red"})]})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>ne("metricRows",C.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},C.id)),p.metricRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No metrics added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>fe("metricRows",{id:sn(),measure:"",target:"",current:"",status:"Amber"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Metric"})]}):x==="risks-issues"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:O}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Risk / Issue"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Impact"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Mitigation"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[p.riskRows.map(C=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:C.risk,onChange:j=>ye("riskRows",C.id,{risk:j.target.value}),placeholder:"e.g. Inconsistent adoption in Vision",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:C.impact,onChange:j=>ye("riskRows",C.id,{impact:j.target.value}),placeholder:"e.g. Benefits may not be realised",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:C.mitigation,onChange:j=>ye("riskRows",C.id,{mitigation:j.target.value}),placeholder:"e.g. Targeted coaching sessions",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:C.status,onChange:j=>ye("riskRows",C.id,{status:j.target.value}),placeholder:"Open",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>ne("riskRows",C.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},C.id)),p.riskRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No key risks added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>fe("riskRows",{id:sn(),risk:"",impact:"",mitigation:"",status:"Open"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Risk / Issue"})]}):x==="upcoming-priorities"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:O}),e.jsx("ol",{className:"mt-3 list-decimal pl-5 space-y-1 text-sm text-slate-700",children:Je.length?Je.map((C,j)=>e.jsx("li",{children:C},`${C}-${j}`)):e.jsx("li",{children:"No immediate priorities detected from current data."})})]}):x==="what-went-well"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:O}),e.jsx("ul",{className:"mt-3 space-y-1.5 text-sm text-slate-700",children:A.slice(0,5).map(C=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(Qr,{}),C.component.label," is tracking at ",C.average," against target ",C.target,"."]},C.component.id))})]}):x==="stakeholder-insights"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:O}),e.jsxs("div",{className:"mt-3 grid gap-2 md:grid-cols-3 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 rounded border border-green-200 bg-green-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-green-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Positive:",e.jsx("input",{type:"number",min:0,max:100,value:p.stakeholderPositivePct,onChange:C=>G({stakeholderPositivePct:Number(C.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-amber-200 bg-amber-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Neutral:",e.jsx("input",{type:"number",min:0,max:100,value:p.stakeholderNeutralPct,onChange:C=>G({stakeholderNeutralPct:Number(C.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-red-200 bg-red-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-red-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Negative:",e.jsx("input",{type:"number",min:0,max:100,value:p.stakeholderNegativePct,onChange:C=>G({stakeholderNegativePct:Number(C.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]})]})]}):x==="interventions-delivered"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:O}),e.jsxs("ul",{className:"mt-3 space-y-2 text-sm text-slate-700",children:[p.interventionRows.map(C=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("input",{value:C.text,onChange:j=>ye("interventionRows",C.id,{text:j.target.value}),placeholder:"e.g. Sponsor briefing sessions",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>ne("interventionRows",C.id),className:"shrink-0 rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},C.id)),p.interventionRows.length?null:e.jsx("li",{className:"text-slate-500",children:"No interventions added yet."})]}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>fe("interventionRows",{id:sn(),text:""}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Intervention"})]}):x==="decisions-required"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:O}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Decision"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Required By"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[p.decisionRows.map(C=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:C.decision,onChange:j=>ye("decisionRows",C.id,{decision:j.target.value}),placeholder:"e.g. Approval for additional adoption support resource",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:C.owner,onChange:j=>ye("decisionRows",C.id,{owner:j.target.value}),placeholder:"e.g. Programme Board",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:C.requiredBy,onChange:j=>ye("decisionRows",C.id,{requiredBy:j.target.value}),placeholder:"TBC",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>ne("decisionRows",C.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},C.id)),p.decisionRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:4,children:"No decisions added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>fe("decisionRows",{id:sn(),decision:"",owner:"",requiredBy:""}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Decision"})]}):x==="change-lead-assessment"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:O}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Confidence"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[p.assessmentRows.map(C=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:C.area,onChange:j=>ye("assessmentRows",C.id,{area:j.target.value}),placeholder:"e.g. Stakeholder Engagement",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:C.confidence,onChange:j=>ye("assessmentRows",C.id,{confidence:j.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"High",children:"High"}),e.jsx("option",{value:"Medium",children:"Medium"}),e.jsx("option",{value:"Low",children:"Low"})]})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>ne("assessmentRows",C.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},C.id)),p.assessmentRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:3,children:"No assessment areas added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>fe("assessmentRows",{id:sn(),area:"",confidence:"Medium"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Assessment Area"})]}):e.jsx(e.Fragment,{children:e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:O})})},Ae=()=>{if(!q.current){window.alert("Preview content is not ready to print yet.");return}const x=window.open("","_blank");if(!x)return;x.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8" /><title>Highlight Report</title></head><body></body></html>'),document.querySelectorAll('link[rel="stylesheet"], style').forEach(j=>{x.document.head.appendChild(j.cloneNode(!0))});const O=x.document.createElement("style");O.textContent=`
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
    `,x.document.head.appendChild(O);const C=q.current.cloneNode(!0);C.className="printable-report",C.querySelectorAll('[data-print-exclude="true"]').forEach(j=>j.remove()),x.document.body.appendChild(C),x.document.close(),setTimeout(()=>{x.focus(),x.print(),x.close()},250)};return e.jsxs("section",{className:"space-y-6",children:[f?e.jsx("div",{className:"rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm font-semibold text-red-900",children:"Dark mode not compatible for Highlight Report due to print/save functionality."}):null,e.jsx("div",{className:"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",children:e.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Highlight Builder Tool"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:"Create a polished highlight pack"}),e.jsx(yn,{onClick:m.reopen})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:$e,className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"Save JSON Layout"}),e.jsxs("label",{className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 cursor-pointer",children:["Load JSON Layout",e.jsx("input",{type:"file",accept:"application/json",className:"hidden",onChange:ze},b)]}),e.jsxs("div",{className:"flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-semibold",role:"group","aria-label":"PDF export orientation",children:[e.jsx("button",{type:"button",onClick:()=>G({orientation:"portrait"}),"aria-pressed":p.orientation==="portrait",className:`px-3 py-2 transition-colors ${p.orientation==="portrait"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Portrait"}),e.jsx("button",{type:"button",onClick:()=>G({orientation:"landscape"}),"aria-pressed":p.orientation==="landscape",className:`px-3 py-2 transition-colors border-l border-slate-300 ${p.orientation==="landscape"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Landscape"})]}),e.jsxs("button",{type:"button",onClick:Ae,className:"rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm",style:{backgroundColor:p.themeColor},children:["Print / Save PDF (",p.orientation==="landscape"?"Landscape":"Portrait",")"]})]})]})}),e.jsxs("div",{className:"grid gap-6 xl:grid-cols-[340px,1fr]",children:[e.jsx("aside",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Report title"}),e.jsx("input",{value:p.title,onChange:x=>G({title:x.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Programme"}),e.jsx("input",{value:p.programmeName,onChange:x=>G({programmeName:x.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Reporting period"}),e.jsx("input",{value:p.reportingPeriod,onChange:x=>G({reportingPeriod:x.target.value}),placeholder:"July 2026",className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Change Lead"}),e.jsx("input",{value:p.changeLeadName,onChange:x=>G({changeLeadName:x.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"SRO"}),e.jsx("input",{value:p.sroName,onChange:x=>G({sroName:x.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Overall Change Status"}),e.jsxs("select",{value:p.overallStatus,onChange:x=>G({overallStatus:x.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500",children:[e.jsx("option",{value:"Green",children:"Green"}),e.jsx("option",{value:"Amber",children:"Amber"}),e.jsx("option",{value:"Red",children:"Red"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Theme colour"}),e.jsx("input",{type:"color",value:p.themeColor,onChange:x=>G({themeColor:x.target.value}),className:"h-10 w-full rounded-md border border-slate-300"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Logo in top-left"}),e.jsxs("label",{className:"flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-3 py-4 text-sm text-slate-700 hover:bg-slate-100",children:[e.jsx("span",{children:R||"Upload logo"}),e.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:De})]}),p.logoDataUrl?e.jsx("div",{className:"mt-3 rounded-md border border-slate-200 bg-slate-50 p-2",children:e.jsx("img",{alt:"Preview logo",src:p.logoDataUrl,className:"max-h-16 w-auto"})}):null]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-1",children:"Programme/Project Readiness Slides"}),e.jsx("p",{className:"text-xs text-slate-500 mb-3",children:"These print first, one per page. Add a slide per component you want to report on."}),e.jsxs("div",{className:"space-y-2",children:[p.bragSlides.map((x,O)=>e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-500",children:["Page ",O+1]}),e.jsx("button",{type:"button",onClick:()=>Ke(x.id),className:"text-xs font-semibold text-red-600 hover:text-red-800",children:"Remove"})]}),e.jsx("select",{value:x.componentId,onChange:C=>L(x.id,C.target.value),className:"mt-1 w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm outline-none focus:border-blue-500",children:a.map(C=>e.jsx("option",{value:C.id,children:C.label},C.id))}),e.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:[x.rows.length," row",x.rows.length===1?"":"s"]})]},x.id)),p.bragSlides.length?null:e.jsx("p",{className:"text-sm text-slate-500",children:"No readiness slides yet."})]}),e.jsx("button",{type:"button",onClick:Le,disabled:!a.length,className:"mt-3 w-full rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 disabled:opacity-50",children:"+ Add Readiness Slide"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-3",children:"Report sections"}),e.jsx("div",{className:"space-y-2",children:Tt.map(x=>{const O=E.has(x.id),C=x.id,j=T[x.id],U=typeof j=="number"?zn(j,x.label):x.label;return e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("label",{className:"flex items-center gap-3 text-sm text-slate-700",children:[e.jsx("input",{type:"checkbox",checked:O,onChange:()=>Ne(x.id)}),e.jsx("span",{children:U})]}),O?e.jsxs("div",{className:"mt-3 space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-1",children:"Section narrative"}),e.jsx("textarea",{value:p.sectionNarratives[C]||"",onChange:H=>Ee(C,H.target.value),placeholder:be(C),rows:4,className:"w-full rounded-md border border-slate-300 px-2 py-2 text-xs outline-none focus:border-blue-500"})]}),e.jsx("p",{className:"text-xs text-slate-500",children:"All adoption components are automatically included in this section."})]}):null]},x.id)})})]})]})}),e.jsxs("div",{ref:q,className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsx("div",{className:`report-intro-slide ${P?"report-slide":""} mb-6 overflow-hidden rounded-lg border border-[#003087] bg-white shadow-md ${P?"grid gap-8 p-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center":"flex items-center gap-3 p-3"}`,style:P?{borderTop:`14px solid ${p.themeColor||At.blue}`}:void 0,children:e.jsxs("div",{className:P?"space-y-6":"flex items-center gap-3",children:[p.logoDataUrl?e.jsx("img",{alt:"Logo preview",src:p.logoDataUrl,className:P?"max-h-20 w-auto":"max-h-12 w-auto"}):e.jsx("div",{className:`flex items-center justify-center rounded-md bg-[#005eb8] font-bold text-white ${P?"h-20 w-20 text-xl":"h-12 w-12 text-sm"}`,children:"NHS"}),e.jsxs("div",{children:[e.jsx("div",{"data-print-hide":"true",className:"text-xs font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Builder Preview · Intro Slide"}),e.jsx("div",{className:P?"mt-3 text-4xl font-bold leading-tight text-[#003087]":"text-lg font-bold text-slate-900",children:p.title}),e.jsxs("div",{className:"mt-2 text-sm text-slate-600",children:[p.programmeName||r||"Unnamed Programme"," ·"," ",p.reportingPeriod||"Reporting period not set"]}),e.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600",children:[e.jsx("span",{children:l||"Unconfigured Trust"}),e.jsx(ca,{status:p.overallStatus})]}),P?e.jsx("p",{className:"mt-8 max-w-xl border-l-4 border-[#41a6c8] pl-4 text-lg leading-7 text-[#425563]",children:"Change adoption highlight report covering current progress, risks and priorities."}):null]})]})}),e.jsxs("div",{className:P?"grid gap-6":"grid gap-2","data-orientation":p.orientation,children:[p.bragSlides.map(x=>{const O=ie.find(j=>j.component.id===x.componentId),C=O?$a(O.average,O.target):null;return e.jsxs("article",{"data-brag-slide":"true",className:`${ue} ${P?"report-slide":""}`,style:M,children:[e.jsxs("div",{className:P?"flex flex-wrap items-center justify-between gap-3 px-5 py-3 text-white":"flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-2",style:P?{backgroundColor:p.themeColor||At.blue}:void 0,children:[e.jsxs("div",{children:[e.jsx("p",{className:P?"text-xs font-semibold uppercase tracking-wider text-white/80":"text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Programme/Project Readiness"}),e.jsx("h3",{className:P?"text-xl font-bold text-white":"text-base font-bold text-slate-900",children:(O==null?void 0:O.component.label)||"Select a component"})]}),O&&C?e.jsxs("div",{className:"text-right",children:[e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold ${Ta[C]}`,children:C}),e.jsxs("p",{className:`mt-1 text-xs ${P?"text-white/80":"text-slate-500"}`,children:[O.average.toFixed(1)," of ",O.target," target"]})]}):null]}),e.jsx("div",{className:P?"mx-5 mb-5 mt-3 overflow-x-auto rounded-md border border-slate-200":"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What is preventing you from being green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What do you/others need to do to return to green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target date"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[x.rows.map(j=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(la,{value:j.preventingGreenHtml,onChange:U=>se(x.id,j.id,{preventingGreenHtml:U}),placeholder:"What's blocking green?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(la,{value:j.returnToGreenHtml,onChange:U=>se(x.id,j.id,{returnToGreenHtml:U}),placeholder:"What needs to happen?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:j.ownerId,onChange:U=>se(x.id,j.id,{ownerId:U.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"",children:"Unassigned"}),v.map(U=>e.jsxs("option",{value:U.id,children:[U.name||"Unnamed",U.role?` - ${U.role}`:""]},U.id))]})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{type:"date",value:j.targetDate,onChange:U=>se(x.id,j.id,{targetDate:U.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>ge(x.id,j.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},j.id)),x.rows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No rows yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>oe(x.id),className:P?"mx-5 mb-5 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200":"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Row"})]},x.id)}),p.sections.map(x=>{var O,C;return e.jsxs(Pn.Fragment,{children:[e.jsxs("article",{"data-brag-slide":P?"true":void 0,"data-print-exclude":dn(x)?void 0:"true",className:`${ue} ${P?"report-slide":""}`,style:M,children:[e.jsxs(z,{children:[e.jsx("span",{"data-print-hide":"true",children:zn(te[x]||0,((O=Tt.find(j=>j.id===x))==null?void 0:O.label)||x)}),e.jsx("span",{className:"hidden","data-print-only":"true",children:zn(X[x]||0,((C=Tt.find(j=>j.id===x))==null?void 0:C.label)||x)})]}),e.jsxs("div",{className:P&&x!=="change-dashboard"?"grid gap-5 px-5 pb-5 lg:grid-cols-[1fr,220px] lg:items-start":void 0,children:[e.jsx(le,{children:Ce(x)}),x!=="change-dashboard"?e.jsx(pe,{sectionId:x}):null]})]}),P&&x==="change-dashboard"?e.jsxs("article",{"data-brag-slide":"true","data-print-exclude":dn(x)?void 0:"true",className:`${ue} report-slide`,style:M,children:[e.jsxs(z,{children:[e.jsx("span",{"data-print-hide":"true",children:zn((te[x]||0)+1,"Change Dashboard Chart")}),e.jsx("span",{className:"hidden","data-print-only":"true",children:zn((X[x]||0)+1,"Change Dashboard Chart")})]}),e.jsx("div",{className:"px-8 pb-8",children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-6 max-w-2xl text-base leading-6 text-[#425563]",children:"Current component averages compared with the target score. The red marker shows the target for each area."}),e.jsx(Xr,{rows:cn})]})})]}):null]},x)})]})]})]}),e.jsx(Sn,{open:m.isOpen,onClose:m.close,title:"Highlight Builder Tool",body:e.jsx("p",{children:"Build a polished, presentation-ready highlight pack summarising progress across your programme - pick a layout, edit the content, and save or export it when you're happy."})})]})}function nl(n){const t={};return n.sections.forEach(s=>{s.items.forEach(a=>{t[a.id]="mine"})}),t}function da({active:n,onClick:t,children:s,darkMode:a}){return e.jsx("button",{type:"button",onClick:t,className:`rounded-md border px-2 py-1 text-left text-xs transition-colors ${Xt} ${n?"border-[#005eb8] bg-[#005eb8]/10 font-semibold text-[#005eb8]":a?"border-slate-600 bg-slate-900 text-slate-300 hover:bg-slate-800":"border-slate-300 bg-white text-slate-600 hover:bg-slate-50"}`,children:s})}function tl({item:n,choice:t,onChoose:s,myLabel:a,theirLabel:i,darkMode:l}){return e.jsxs("div",{"data-testid":`import-conflict-row-${n.id}`,className:`grid grid-cols-1 gap-2 border-t py-3 first:border-t-0 md:grid-cols-[1fr_1fr_1fr] ${l?"border-slate-700":"border-slate-200"}`,children:[e.jsx("div",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:n.label}),e.jsxs(da,{active:t==="mine",onClick:()=>s(n.id,"mine"),darkMode:l,children:[e.jsx("span",{className:`block text-[0.65rem] font-bold uppercase tracking-wide ${l?"text-slate-400":"text-slate-500"}`,children:a}),n.mineSummary]}),e.jsxs(da,{active:t==="theirs",onClick:()=>s(n.id,"theirs"),darkMode:l,children:[e.jsx("span",{className:`block text-[0.65rem] font-bold uppercase tracking-wide ${l?"text-slate-400":"text-slate-500"}`,children:i}),n.theirsSummary]})]})}function sl({report:n,myLabel:t,theirLabel:s,onResolve:a,onCancel:i,darkMode:l=!1}){const[r,o]=g.useState(()=>nl(n)),c=n.sections.reduce((d,m)=>d+m.items.length,0),f=d=>{o(m=>{const v={...m};return n.sections.forEach(p=>{p.items.forEach(S=>{v[S.id]=d})}),v})};return e.jsx("div",{"data-testid":"import-conflict-modal",className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4",onClick:d=>{d.target===d.currentTarget&&i()},children:e.jsxs("div",{onClick:d=>d.stopPropagation(),className:`flex w-full max-w-4xl max-h-[90vh] flex-col rounded-lg border shadow-xl ${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:`shrink-0 border-b p-6 ${l?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("h2",{className:`text-xl font-bold ${l?"text-slate-100":"text-slate-800"}`,children:"Resolve import conflicts"}),e.jsxs("p",{className:`mt-1 text-sm ${l?"text-slate-300":"text-slate-600"}`,children:["Comparing ",e.jsx("span",{className:"font-semibold",children:t})," (currently loaded) against"," ",e.jsx("span",{className:"font-semibold",children:s})," (the imported file)."]}),e.jsxs("p",{className:`mt-1 text-xs ${l?"text-slate-400":"text-slate-500"}`,children:[c," item",c===1?"":"s"," need a decision",n.autoMergeSummary.length?` · also merging automatically: ${n.autoMergeSummary.join(", ")}`:""]}),e.jsxs("div",{className:"mt-3 flex gap-2",children:[e.jsx("button",{type:"button",onClick:()=>f("mine"),className:`${Ge} h-8 px-3 py-0 text-xs`,children:"Use all mine"}),e.jsx("button",{type:"button",onClick:()=>f("theirs"),className:`${Ge} h-8 px-3 py-0 text-xs`,children:"Use all theirs"})]})]}),e.jsx("div",{className:"flex-1 space-y-6 overflow-y-auto p-6",children:n.sections.map(d=>e.jsxs("div",{children:[e.jsx("h3",{className:`mb-1 text-sm font-bold uppercase tracking-wide ${l?"text-slate-300":"text-slate-500"}`,children:d.title}),e.jsx("div",{className:`rounded-md border px-3 ${l?"border-slate-700":"border-slate-200"}`,children:d.items.map(m=>e.jsx(tl,{item:m,choice:r[m.id]||"mine",onChoose:(v,p)=>o(S=>({...S,[v]:p})),myLabel:t,theirLabel:s,darkMode:l},m.id))})]},d.id))}),e.jsxs("div",{className:`flex shrink-0 justify-end gap-3 border-t p-4 ${l?"border-slate-700":"border-slate-200"}`,children:[e.jsx("button",{type:"button","data-testid":"import-conflict-cancel",onClick:i,className:Ge,children:"Cancel Import"}),e.jsx("button",{type:"button","data-testid":"import-conflict-apply",onClick:()=>a(r),className:Tn,children:"Apply and Import"})]})]})})}function ua(){return e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function al(n){return n in ns}function il({lensName:n,onClose:t,darkMode:s=!1}){if(!n||!al(n))return null;const a=ns[n];return e.jsx("div",{id:"lens-info-modal",className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:e.jsxs("div",{className:`${s?"bg-slate-800 border-slate-700":"bg-white"} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border`,children:[e.jsxs("div",{className:`${s?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} sticky top-0 border-b p-6 flex items-center justify-between`,children:[e.jsx("h2",{className:`text-2xl font-bold ${s?"text-slate-100":"text-slate-800"}`,children:n}),e.jsx("button",{onClick:t,className:`${s?"text-slate-300 hover:text-slate-100":"text-slate-500 hover:text-slate-700"}`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsxs("div",{className:`p-6 space-y-4 ${s?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(ua,{}),"Outcome"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.outcome})]}),e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(ua,{}),"What Good Looks Like"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.whatGoodLooksLike})]})]})]})})}const ol=[{id:"why",question:"Why are we doing this?",framework:"Force Field Analysis - Driving Forces",description:"The forces pushing for change - the case that makes it worth doing.",componentIds:["case_for_change"]},{id:"future",question:"What will the future look like?",framework:"Vision",description:"A clear picture of the destination, understood and shared by everyone.",componentIds:["vision"]},{id:"barriers",question:"What might prevent us from achieving the vision?",framework:"Force Field Analysis - Restraining Forces",description:"The forces working against change - risks, resistance and blockers to plan for.",componentIds:["case_for_change","resistance"]},{id:"impacted",question:"Who's going to be impacted by the change?",framework:"Stakeholder Analysis & Change Impact Analysis",description:"Everyone affected by the change, and how deeply it affects them.",componentIds:["stakeholder","change_impact"]},{id:"leading",question:"Who's leading the change?",framework:"Sponsor Coalition & Change Network",description:"The visible leaders and the network of champions carrying the change day to day.",componentIds:["sponsorship","change_network"]},{id:"persuade",question:"How will we persuade people to change?",framework:"Case for Change",description:"The compelling narrative that wins hearts and minds.",componentIds:["case_for_change"]}],Jt="nhs-digital-adoption-introduction-complete",rl=[{title:"Handling Resistance",body:"Helping project managers navigate potential roadblocks and maintain project momentum through identifying and addressing resistance using effective communication, stakeholder engagement, and mitigation strategies."},{title:"Engaging Stakeholders",body:"Identifying key individuals and groups affected by the project and working closely with them to understand concerns, gather feedback, and ensure their perspectives are considered."},{title:"Communicating and Raising Awareness",body:"Developing engagement and communication plans that support project managers in creating clear and consistent messaging about the project's purpose, goals, and benefits."},{title:"Managing Expectations",body:"Setting realistic expectations for stakeholders regarding project outcomes, timelines, and potential disruptions by addressing concerns, clarifying misconceptions, and managing expectations."},{title:"Ensuring Change Readiness",body:"Assessing the readiness of an organisation or team for change and developing strategies to bridge any gaps."},{title:"Mitigating Risks",body:"Through anticipating and addressing risks associated with change, such as resistance, lack of stakeholder support, or unexpected obstacles."},{title:"Adopting Change Sustainably",body:"Supporting project managers in developing strategies to embed the changes into the organisation's culture, processes, and systems."}];function ll(n){const t=n?"text-slate-300":"text-slate-700";return[{title:"What is the Adoption Engine?",body:e.jsxs("div",{className:`text-sm space-y-2 ${t}`,children:[e.jsx("p",{children:"Going live with a new digital product isn't the finish line - people still need to adopt it, change how they work, and keep using it."}),e.jsx("p",{children:"The Adoption Engine helps you track how people and teams are adopting the change before go-live, during rollout, and after launch so progress is visible and outcomes are measurable."}),e.jsx("p",{children:"It helps you answer four simple questions:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"Where are we going?"}),e.jsx("li",{children:"How will we know we've got there?"}),e.jsx("li",{children:"What needs to be in place?"}),e.jsx("li",{children:"What should we do next?"})]}),e.jsx("p",{children:"The goal is not just to implement change, but to ensure it is adopted, embedded and delivering benefits."})]})},{title:"What benefit does this tool give me?",body:e.jsxs("div",{className:`text-sm space-y-2 ${t}`,children:[e.jsx("p",{children:"Without it, adoption progress lives in scattered spreadsheets, memories and gut feel - hard to prove, hard to hand over, and easy to lose momentum on."}),e.jsx("p",{children:"With it, you get a single, evidenced picture of where your change effort actually stands:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1",children:[e.jsx("li",{children:"See at a glance what's on track, what's at risk, and what to do next."}),e.jsx("li",{children:`Turn vague "how's it going?" conversations into a clear, evidence-backed status you can show your sponsor or board.`}),e.jsx("li",{children:"Get a ready-made action plan for each area, so you're not starting from a blank page."}),e.jsx("li",{children:"Build a highlight report in minutes instead of an afternoon of copy-pasting."})]})]})},{title:"Context Specific Templates (CSTs)",body:e.jsxs("div",{className:`text-sm space-y-2 ${t}`,children:[e.jsx("p",{children:"A CST (Context Specific Template) contains the information that makes the Adoption Engine specific to your project, programme or initiative."}),e.jsx("p",{children:"It captures key information such as your scope, milestones, outcomes and benefits, and tailors the guidance, actions and resources provided."}),e.jsxs("p",{children:["You can update your project setup at any time from"," ",e.jsx("strong",{className:n?"text-slate-100":"text-slate-900",children:"Project Profile"}),"."]})]})},{title:"What is Change Management?",body:e.jsxs("div",{className:`text-sm space-y-2 ${t}`,children:[e.jsx("p",{children:"Change management is the structured discipline of helping people move from how things work today to how they'll work in future - deliberately, not by accident."}),e.jsx("p",{children:"A new system, process or way of working only delivers its benefits once people actually adopt it. Change management is the set of activities - building the case, engaging stakeholders, communicating, training, reinforcing - that make that adoption happen, rather than leaving it to chance."}),e.jsx("p",{children:"It sits alongside project management: project management delivers the change itself (the system, the process); change management makes sure the people affected by it are ready, willing and able to use it."})]})},{title:"What is a Change Manager?",body:e.jsxs("div",{className:`text-sm space-y-4 ${t}`,children:[e.jsx("p",{children:"Change management (and change managers) provide essential assistance to project managers through:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:rl.map(s=>e.jsxs("div",{className:`rounded-md border p-4 ${n?"border-slate-700 bg-slate-900":"border-slate-100 bg-slate-50"}`,children:[e.jsx("p",{className:"text-sm font-semibold text-[#005eb8] mb-1",children:s.title}),e.jsx("p",{className:`text-xs leading-relaxed ${n?"text-slate-300":"text-slate-600"}`,children:s.body})]},s.title))})]})},{title:"The 6 Key Questions",body:e.jsxs("div",{className:`text-sm space-y-4 ${t}`,children:[e.jsx("p",{children:"Six questions worth returning to throughout the life of the programme, each backed by a change model."}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-2",children:ol.map((s,a)=>e.jsxs("div",{className:`rounded-md border p-4 ${n?"border-slate-700 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"shrink-0 w-7 h-7 rounded-full bg-blue-100 text-[#005eb8] text-xs font-bold flex items-center justify-center",children:["Q",a+1]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${n?"text-slate-100":"text-slate-800"}`,children:s.question}),e.jsx("span",{className:`mt-1 inline-block rounded border px-2 py-0.5 text-xs font-medium ${n?"border-indigo-500/40 bg-indigo-500/15 text-indigo-200":"border-indigo-200 bg-indigo-50 text-indigo-700"}`,children:s.framework})]})]}),e.jsx("p",{className:`mt-3 text-xs leading-relaxed ${n?"text-slate-300":"text-slate-600"}`,children:s.description})]},s.id))})]})}]}function cl({darkMode:n=!1,onGetStarted:t}){const s=ll(n),a=!!vn(Jt),[i,l]=g.useState(0),[r,o]=g.useState(a?s.length-1:0),c=i===s.length-1,f=r>=s.length-1,d=v=>{v<=r&&l(v)},m=()=>{const v=Math.min(s.length-1,i+1);l(v),o(p=>{const S=Math.max(p,v);return S>=s.length-1&&tn(Jt,!0),S})};return e.jsxs("div",{className:"w-full space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${n?"text-slate-100":"text-slate-800"}`,children:"Introduction"}),e.jsx("p",{className:`mt-2 text-sm ${n?"text-slate-300":"text-slate-600"}`,children:"A few quick steps before you get started - each one unlocks the next."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",role:"tablist","aria-label":"Introduction steps",children:s.map((v,p)=>{const S=p<=r,R=p===i;return e.jsxs("button",{type:"button",role:"tab","aria-selected":R,"aria-disabled":!S,disabled:!S,onClick:()=>d(p),className:`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${R?"border-[#005eb8] bg-[#005eb8] text-white":S?n?"border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100":n?"border-slate-800 bg-slate-900 text-slate-600 cursor-not-allowed":"border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed"}`,children:[e.jsx("span",{className:`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${R?"bg-white text-[#005eb8]":S?"bg-[#005eb8]/10 text-[#005eb8]":""}`,children:p+1}),v.title]},v.title)})}),e.jsx("section",{className:`w-full overflow-hidden rounded-xl border shadow-sm ${n?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:e.jsxs("div",{className:"p-6 sm:p-10",children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${n?"text-blue-300":"text-blue-700"}`,children:["Step ",i+1," of ",s.length]}),e.jsx("h3",{className:`mt-1 text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:s[i].title}),e.jsx("div",{className:"mt-5 max-w-full",children:s[i].body}),e.jsxs("div",{className:"mt-8 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:()=>l(v=>Math.max(0,v-1)),disabled:i===0,className:`rounded-md border px-4 py-2 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${n?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Back"}),c?e.jsx("button",{type:"button",onClick:t,disabled:!f,className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] disabled:cursor-not-allowed disabled:opacity-50",children:"Get Started"}):e.jsx("button",{type:"button",onClick:m,className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]",children:"Next"})]})]})})]})}const ma={1:"Pre go-live planning and early mobilisation.",2:"Go-live readiness and immediate launch support.",3:"Early adoption reinforcement and consistency.",4:"Embedding new ways of working across teams.",5:"Sustained adoption and benefits realisation at scale."},dl={1:"Low confidence",2:"Some confidence",3:"Moderate confidence",4:"High confidence",5:"Very high confidence"},ul={E:"Not started embedding",D:"Early adoption in practice",C:"Partly embedded in practice",B:"Mostly embedded in practice",A:"Well embedded in practice"};function ml(n){return n>=4?"high":n===3?"average":"below"}function gl(n){return n==="A"||n==="B"?"high":n==="C"?"average":"below"}function pl(n,t){const s=gl(n),a=ml(t),i=s==="high"&&a==="high",l=s==="below"&&a==="below",r=s==="high"&&a!=="below"||a==="high"&&s!=="below";return i?"Blue":l?"Red":r?"Green":"Amber"}const Lt=4;function hl({orgProfile:n,onProfileUpdate:t,userSettings:s,onUserSettingsUpdate:a,currentUserId:i,onCurrentUserChange:l,objectives:r=[],darkMode:o=!1}){const[c,f]=g.useState(n),[d,m]=g.useState(s),[v,p]=g.useState(0),[S,R]=g.useState(null),[I,b]=g.useState(!1),k=g.useRef(null),q=hn("profile");g.useEffect(()=>{f(n)},[n]),g.useEffect(()=>{m(s)},[s]);const E=g.useCallback(M=>{const z={...d,...M};m(z),a(z)},[d,a]),T=async M=>{var ie;const z=(ie=M.target.files)==null?void 0:ie[0];if(!z)return;const le=await new Promise((A,G)=>{const Ne=new FileReader;Ne.onload=()=>A(String(Ne.result||"")),Ne.onerror=()=>G(new Error("Unable to read selected profile image.")),Ne.readAsDataURL(z)});E({profileImageDataUrl:le}),p(A=>A+1)},P=()=>{E({profileImageDataUrl:void 0})},ue=g.useCallback((M,z,le)=>{const ie=c.cst.phaseCapability[M]||{competence:"C",confidence:3},A={...c,cst:{...c.cst,phaseCapability:{...c.cst.phaseCapability,[M]:{competence:ie.competence,confidence:ie.confidence,assessedAt:new Date().toISOString(),reason:"manual",[z]:le}}}};f(A),t(A)},[c,t]);return e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-800"}`,children:"Profile"}),e.jsx(yn,{onClick:q.reopen,darkMode:o})]}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Your identity, progress towards your objectives, and confidence/capability self-assessment."}),e.jsx(Sn,{open:q.isOpen,onClose:q.close,title:"Profile",darkMode:o,body:e.jsx("p",{children:"Set your name, preferences and picture, see how many objectives are complete, and record your team's confidence and delivery-readiness capability at each phase."})}),r.length>0&&e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-3`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Objectives"}),e.jsxs("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:[r.filter(M=>M.completed).length,"/",r.length," complete - based on phase readiness, ownership, cadence and team participation."]})]}),e.jsx("div",{className:"space-y-2",children:(I?r:r.slice(0,Lt)).map(M=>e.jsxs("div",{className:`rounded-lg border p-3 ${M.completed?"border-green-200 bg-green-50":o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:M.label}),e.jsx("span",{className:"text-xs font-bold shrink-0",children:M.completed?"Done":"Not yet"})]}),e.jsx("p",{className:`mt-1 text-xs ${o?"text-slate-300":"text-slate-600"}`,children:M.description})]},M.id))}),r.length>Lt&&e.jsx("button",{type:"button",onClick:()=>b(M=>!M),className:`text-sm font-semibold underline ${o?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:I?"Show fewer":`Show ${r.length-Lt} more`})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-5`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Your Profile"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"These details personalise your experience and reports."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-current-member",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"You are signed in as"}),(n.teamMembers||[]).length>0?e.jsxs("select",{id:"user-current-member",value:i||"",onChange:M=>l(M.target.value),className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Not selected"}),(n.teamMembers||[]).map(M=>e.jsxs("option",{value:M.id,children:[M.name||"Unnamed",M.role?` - ${M.role}`:""]},M.id))]}):e.jsx("p",{className:`text-sm ${o?"text-slate-400":"text-slate-500"}`,children:"No team members have been added yet. Add yourself under CST Details → Team Members to link your profile."})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-sm font-medium mb-2 ${o?"text-slate-200":"text-slate-700"}`,children:"Profile Picture"}),e.jsxs("div",{className:"flex items-start gap-4",children:[d.profileImageDataUrl?e.jsx("img",{src:d.profileImageDataUrl,alt:"Profile",className:"h-20 w-20 rounded-md border border-slate-300 object-cover"}):e.jsx("div",{className:"h-20 w-20 rounded-md border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center",children:e.jsx("span",{className:"text-xs text-slate-500",children:"No image"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{type:"button",onClick:()=>{var M;return(M=k.current)==null?void 0:M.click()},className:`rounded-md px-3 py-2 text-sm font-medium transition-colors ${o?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:d.profileImageDataUrl?"Change Picture":"Upload Picture"}),d.profileImageDataUrl?e.jsx("button",{type:"button",onClick:P,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${o?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"}`,children:"Remove"}):null,e.jsx("input",{ref:k,type:"file",accept:"image/*",className:"hidden",onChange:T},v)]})]})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Confidence and Capability by Phase"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Capture your starting position, then refresh when readiness phase changes or after major milestones."})]}),e.jsxs("div",{className:"rounded-md border border-blue-200 bg-blue-50 p-3 text-xs text-blue-900",children:[e.jsx("p",{className:"font-semibold",children:"How this self-assessment works"}),e.jsx("p",{className:"mt-1",children:"Confidence is how sure your team feels. Delivery readiness is how embedded the new way of working is in practice."}),e.jsx("p",{className:"mt-1",children:"Cards use BRAG backgrounds: Blue = both high, Green = one high and the other at least average, Amber = neither high, Red = both below average."})]}),e.jsx("div",{className:"space-y-3",children:Aa.map(M=>{const z=c.cst.phaseCapability[M]||{competence:"C",confidence:3},le=pl(z.competence,z.confidence),ie=le==="Blue"?"border-sky-300 bg-sky-50":le==="Green"?"border-emerald-300 bg-emerald-50":le==="Red"?"border-red-300 bg-red-50":"border-amber-300 bg-amber-50",A=le==="Blue"?"text-sky-800 bg-sky-100":le==="Green"?"text-emerald-800 bg-emerald-100":le==="Red"?"text-red-800 bg-red-100":"text-amber-800 bg-amber-100";return e.jsxs("div",{className:`${o?"border-slate-700 bg-slate-800":ie} rounded-md border p-3`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{className:"relative flex items-center gap-2",children:[e.jsxs("span",{className:`font-semibold ${o?"text-slate-100":"text-slate-700"}`,children:["Phase ",M]}),e.jsx("button",{type:"button",onMouseEnter:()=>R(M),onMouseLeave:()=>R(G=>G===M?null:G),onFocus:()=>R(M),onBlur:()=>R(G=>G===M?null:G),onClick:()=>R(G=>G===M?null:M),className:"h-5 w-5 rounded-full border border-slate-300 text-xs font-semibold text-slate-600","aria-expanded":S===M,"aria-controls":`phase-help-${M}`,"aria-label":`Phase ${M} guidance`,children:"i"}),S===M?e.jsx("div",{id:`phase-help-${M}`,role:"tooltip",className:"absolute left-0 top-7 z-10 w-72 rounded-md border border-slate-200 bg-slate-900 px-3 py-2 text-xs text-white shadow-xl",children:ma[M]}):null]}),e.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-slate-700 text-slate-100":A}`,children:le})]}),e.jsx("p",{className:`mt-1 text-xs ${o?"text-slate-300":"text-slate-600"}`,children:ma[M]}),e.jsxs("div",{className:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm",children:[e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:"Delivery readiness"}),e.jsx("select",{value:z.competence,onChange:G=>ue(M,"competence",G.target.value),className:`w-full rounded-md border px-2 py-2 pr-10 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Ti.map(G=>e.jsxs("option",{value:G,children:[ul[G]," (",G,")"]},`${M}-competence-${G}`))})]}),e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:"Confidence"}),e.jsx("select",{value:z.confidence,onChange:G=>ue(M,"confidence",Number(G.target.value)),className:`w-full rounded-md border px-2 py-2 pr-10 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Li.map(G=>e.jsxs("option",{value:G,children:[dl[G]," (",G,")"]},`${M}-confidence-${G}`))})]})]})]},`phase-capability-${M}`)})})]})]})}const fl=[{name:"NHS Blue",color:"#005eb8"},{name:"Navy",color:"#003366"},{name:"Teal",color:"#009b8a"},{name:"Purple",color:"#6c28d9"},{name:"Green",color:"#059669"},{name:"Red",color:"#dc2626"}];function bl({userSettings:n,onUserSettingsUpdate:t,onLoadExampleData:s,onResetData:a,darkMode:i=!1}){const[l,r]=g.useState(n),o=hn("settings");g.useEffect(()=>{r(n)},[n]);const c=g.useCallback(d=>{const m={...l,...d};r(m),t(m)},[l,t]),f=d=>{c({themeColor:d})};return e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${i?"text-slate-100":"text-slate-800"}`,children:"Settings"}),e.jsx(yn,{onClick:o.reopen,darkMode:i})]}),e.jsx("p",{className:`text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Use this page to manage app appearance, guidance preferences, and data/support options."}),e.jsx(Sn,{open:o.isOpen,onClose:o.close,title:"Settings",darkMode:i,body:e.jsx("p",{children:"Manage app-wide appearance (theme, dark mode, guided-workflow and guidance-link preferences) and data/support tools like example data, reset, and bug reporting. For your personal profile and engagement progress, see the Profile page."})}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Appearance"}),e.jsx("p",{className:`mt-1 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Choose the theme colour you want to use throughout the app."})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-1",children:[e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Dark mode"}),e.jsx("input",{type:"checkbox",checked:!!l.darkMode,onChange:d=>c({darkMode:d.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show guided workflow tips on each component"}),e.jsx("input",{type:"checkbox",checked:!l.hideGuidedWorkflow,onChange:d=>c({hideGuidedWorkflow:!d.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show additional guidance links (alongside core links)"}),e.jsx("input",{type:"checkbox",checked:l.showAdditionalGuidanceLinks!==!1,onChange:d=>c({showAdditionalGuidanceLinks:d.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show external links section (Project Profile, even after marked initiated)"}),e.jsx("input",{type:"checkbox",checked:l.showExternalLinksSection===!0,onChange:d=>c({showExternalLinksSection:d.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Highlight Must/Should actions on component pages (red/yellow background - Pathway 1 only)"}),e.jsx("input",{type:"checkbox",checked:l.showActionPriorityColours===!0,onChange:d=>c({showActionPriorityColours:d.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`text-sm ${i?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-medium",children:"Status colour profile"}),e.jsxs("select",{value:l.colorAccessibilityMode||"standard",onChange:d=>c({colorAccessibilityMode:d.target.value}),className:`w-full rounded-md border p-2 pr-10 ${i?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"standard",children:"Standard"}),e.jsx("option",{value:"color-blind-friendly",children:"Color-blind friendly"})]})]})]}),e.jsx("p",{className:`text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Color-blind friendly mode keeps BRAG labels in text and shifts status colors to higher-contrast alternatives."}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-theme-colour",className:`block text-sm font-medium mb-1 ${i?"text-slate-200":"text-slate-700"}`,children:"Theme Colour"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:fl.map(d=>e.jsxs("button",{type:"button",onClick:()=>f(d.color),className:"flex items-center gap-2 rounded-md border-2 px-3 py-2 text-sm",style:{borderColor:l.themeColor===d.color?d.color:"#e2e8f0",backgroundColor:l.themeColor===d.color?`${d.color}22`:"transparent"},children:[e.jsx("span",{className:"h-4 w-4 rounded-sm border border-slate-300",style:{backgroundColor:d.color}}),e.jsx("span",{children:d.name})]},d.color))}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{id:"user-theme-colour",type:"color",className:"h-10 w-14 rounded border border-slate-300 p-1 cursor-pointer",value:l.themeColor,onChange:d=>c({themeColor:d.target.value})}),e.jsx("span",{className:`text-sm font-mono ${i?"text-slate-200":"text-slate-600"}`,children:l.themeColor})]})]})]})]}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Data and Support"}),e.jsx("p",{className:`mt-1 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Load sample data, reset local data, read FAQs, or report an issue."})]}),e.jsxs("div",{className:`${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("h4",{className:`text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Data Tools"}),e.jsxs("div",{className:"mt-3 flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>s("red"),className:"inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-800 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors",children:"Early Stage Example"}),e.jsx("button",{onClick:()=>s("amber"),className:"inline-flex items-center justify-center rounded-md bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800 border border-amber-200 shadow-[0_3px_0_#fde68a] hover:bg-amber-100 transition-colors",children:"Progressing Example"}),e.jsx("button",{onClick:()=>s("green"),className:"inline-flex items-center justify-center rounded-md bg-green-50 px-4 py-2 text-sm font-semibold text-green-800 border border-green-200 shadow-[0_3px_0_#bbf7d0] hover:bg-green-100 transition-colors",children:"Exemplar Example"})]}),e.jsx("div",{className:"mt-3 flex flex-wrap gap-3",children:e.jsx("button",{onClick:a,className:`inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors ${Xt}`,children:"Reset Data"})}),e.jsx("p",{className:`mt-2 text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Each Example Data button loads a full sample assessment at a different maturity stage, so you can explore the dashboards and workflows quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"How is my data stored?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Your settings and assessment state are stored locally in your browser using local storage."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"What does Example Data do?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Each button populates the tool with a full sample assessment at that maturity stage (Red: early stage, Amber: progressing, Green: near exemplar) so you can explore dashboards and workflows quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"Can I change the theme colour later?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Yes. Update the theme colour at any time in User Settings and it is applied immediately."})]}),e.jsxs("div",{className:`rounded-md border p-4 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("h4",{className:`mb-2 text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Submit a Bug"}),e.jsx("p",{className:`mb-3 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Found an issue? Send details directly via email."}),e.jsx("a",{href:"mailto:andrew.fraser22@kpmg.co.uk?subject=NHS%20Digital%20Adoption%20Tool%20Bug",className:`inline-flex rounded-md px-4 py-2 text-sm font-medium transition-colors ${i?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:"Report Bug"})]})]})]})}function ga(n){if(!n)return[];const t=n.split(/\s+/).filter(Boolean);if(t.length<2)return t;const s=t.slice(0,Math.ceil(t.length/2)).join(" "),a=t.slice(Math.ceil(t.length/2)).join(" ");return[s,a].filter(Boolean)}function li(n){return n.getContext?n:n.canvas}function Ct(){return typeof document>"u"?!1:document.documentElement.dataset.nhsThemeMode==="dark"}function ci(n,t,s,a={}){var o,c;const i=li(t),l=(c=(o=ln).getChart)==null?void 0:c.call(o,i);l&&l.destroy();const r={type:n,data:s,options:a};return new ln(i,r)}const pa=new WeakMap,ha=new WeakMap;function fa(n,t,s){return(n.$pointLabelHitboxes||[]).find(a=>Math.abs(t-a.x)<=a.halfWidth&&Math.abs(s-a.y)<=a.halfHeight)}function xl(n,t,s){const a=pa.get(n);a&&n.removeEventListener("click",a);const i=ha.get(n);i&&n.removeEventListener("mousemove",i);const l=o=>{const c=n.getBoundingClientRect(),f=fa(t,o.clientX-c.left,o.clientY-c.top);f&&s(f.index)},r=o=>{const c=n.getBoundingClientRect(),f=fa(t,o.clientX-c.left,o.clientY-c.top);n.style.cursor=f?"pointer":""};n.addEventListener("click",l),n.addEventListener("mousemove",r),pa.set(n,l),ha.set(n,r)}function yt(n,t,s={},a){var S,R,I,b,k,q;ln.defaults.font.family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",ln.defaults.font.size=12,ln.defaults.elements.line.tension=.2,ln.defaults.elements.point.radius=4,ln.defaults.elements.point.hoverRadius=6;const i=Ct(),m={maintainAspectRatio:!0,responsive:!0,layout:{padding:56},plugins:{legend:{display:!0,position:"bottom"},tooltip:{enabled:!0,backgroundColor:i?"rgba(15,23,42,0.98)":"rgba(11,18,32,0.95)",titleColor:"#fff",bodyColor:"#fff"},centerText:""},elements:{line:{borderWidth:3,tension:.2,borderColor:i?"#63b3ff":"#005EB8",backgroundColor:i?"rgba(99,179,255,0.12)":"rgba(0,94,184,0.06)"},point:{radius:4,hoverRadius:6,backgroundColor:i?"rgba(144,205,244,0.95)":"rgba(11,122,184,0.95)"}},scales:{r:{beginAtZero:!0,grid:{color:i?"rgba(226,232,240,0.12)":"rgba(11,18,32,0.06)",lineWidth:1},angleLines:{color:i?"rgba(226,232,240,0.18)":"rgba(11,18,32,0.10)",lineWidth:1},ticks:{display:!1},pointLabels:{display:!1,color:i?"#e2e8f0":"#0b1220",font:{size:12,family:ln.defaults.font.family},padding:10,callback:E=>ga(E).join(`
`)}}}},v={...m,...s,layout:{padding:56,...s.layout||{}},scales:{...m.scales||{},...s.scales||{},r:{...((S=m.scales)==null?void 0:S.r)||{},...((R=s.scales)==null?void 0:R.r)||{},pointLabels:{...((b=(I=m.scales)==null?void 0:I.r)==null?void 0:b.pointLabels)||{},...((q=(k=s.scales)==null?void 0:k.r)==null?void 0:q.pointLabels)||{},display:!1,callback:E=>ga(E).join(`
`)}}}},p=ci("radar",n,t,v);if(a){const E=li(n);xl(E,p,a)}return p}function di(n,t,s={}){const a=Ct(),i=a?"#e2e8f0":"#0b1220",l=a?"rgba(226,232,240,0.08)":"rgba(11,18,32,0.04)",r=a?"rgba(226,232,240,0.10)":"rgba(11,18,32,0.06)",o=a?"#63b3ff":"#005EB8";return ci("line",n,t,{...{elements:{line:{borderWidth:2,tension:.2,borderColor:o,backgroundColor:a?"rgba(99,179,255,0.14)":"rgba(0,94,184,0.06)"},point:{radius:3,hoverRadius:5,backgroundColor:o}},scales:{x:{display:!0,grid:{color:l},ticks:{color:i,font:{size:11}}},y:{beginAtZero:!0,grid:{color:r},ticks:{color:i,font:{size:11}}}}},...s})}function vl(n){return typeof n.toBase64Image=="function"?n.toBase64Image():""}const Sl={id:"radarCenterText",beforeDraw:n=>{var t;try{const s=n.ctx,i=(t=(n.options||{}).plugins)==null?void 0:t.centerText,l=(i==null?void 0:i.text)||i||"";if(!l)return;const r=String(n.config.type||"");if(r!=="radar"&&r!=="doughnut")return;s.save(),s.textAlign="center",s.textBaseline="middle";const o=n.width/2,c=n.height/2;if(r==="doughnut")s.font=(i==null?void 0:i.font)||"bold 20px Inter",s.fillStyle=(i==null?void 0:i.color)||"#005EB8",s.fillText(String(l),o,c-10),i!=null&&i.subText&&(s.font=(i==null?void 0:i.subFont)||"12px Inter",s.fillStyle=(i==null?void 0:i.subColor)||"#6b7280",s.fillText(String(i.subText),o,c+10));else{const f=Math.max(12,Math.round(Math.min(n.width,n.height)*.065)),d=`${f}px ${ln.defaults.font.family}`;s.font=d,s.fillStyle=(i==null?void 0:i.color)||(Ct()?"#e2e8f0":"#0b1220");const m=String(l).split(`
`),v=f*1.05,p=(m.length-1)*-v/2;m.forEach((S,R)=>{s.fillText(S,o,c+p+R*v)})}s.restore()}catch{}}},yl={id:"radarPointLabelText",afterDraw:n=>{var t,s,a,i;try{const l=(t=n.scales)==null?void 0:t.r,r=(s=l==null?void 0:l.options)==null?void 0:s.pointLabels;if(!l||!r||n.config.type!=="radar")return;const o=n.ctx,c=Number(((a=r.font)==null?void 0:a.size)||ln.defaults.font.size||12),f=((i=r.font)==null?void 0:i.family)||ln.defaults.font.family||"Inter, sans-serif",d=r.color||(Ct()?"#e2e8f0":"#0b1220"),m=Number(r.padding??14),v=Array.isArray(l._pointLabels)?l._pointLabels:[],p=[];o.save(),o.textAlign="center",o.textBaseline="middle",o.fillStyle=d,o.font=`${c}px ${f}`,v.forEach((S,R)=>{const b=String(S??"").split(`
`).filter(Boolean);if(!b.length)return;const k=l.getPointPosition(R,l.drawingArea+m,0),q=c*1.15,E=(b.length-1)*-q/2,T=Math.max(c,b.length*q),P=c*6,ue=P/2+4,M=n.width-P/2-4,z=T/2+4,le=n.height-T/2-4,ie=Math.min(Math.max(k.x,ue),M),A=Math.min(Math.max(k.y,z),le);b.forEach((G,Ne)=>{const Ee=A+E+Ne*q;o.fillText(G,ie,Ee)}),p.push({index:R,x:ie,y:A,halfWidth:P/2,halfHeight:T/2})}),n.$pointLabelHitboxes=p,o.restore()}catch{}}};ln.register(Sl,yl);typeof window<"u"&&(window.NHSDigitalAdoption=window.NHSDigitalAdoption||{},window.NHSDigitalAdoption.Charts={createRadarChart:yt,createLineChart:di,toBase64Image:vl});const ba=[{phase:1,statement:"We've defined our vision for this change and have a case for why it's needed."},{phase:2,statement:"We've analysed the impact of the change and planned our engagement and communications approach."},{phase:3,statement:"We have a full change management plan in place, ready to execute."},{phase:4,statement:"We're actively delivering the change - communicating, training, and rolling out new ways of working."},{phase:5,statement:"The change has gone live and we're now focused on reinforcing it and making it stick."}];function wl({components:n,getEntry:t,effectivePhaseFocus:s,phaseFocusMode:a,onComponentClick:i,onSetManualPhase:l,onResetToAuto:r,darkMode:o=!1}){const c=g.useRef(null),[f,d]=g.useState({});g.useEffect(()=>{if(!c.current)return;const S=Ba(n,t,s);yt(c.current,S,{maintainAspectRatio:!1,scales:{r:{min:-1,max:5,ticks:{display:!0,stepSize:1,backdropColor:"transparent",callback:R=>Number(R)<0?"":R}}}},R=>{const I=n[R];I&&i(I.id)})},[n,t,s,i]);const m=g.useMemo(()=>{const S=ba.filter(R=>f[R.phase]).map(R=>R.phase);return S.length?Math.max(...S):1},[f]),v=Object.values(f).some(Boolean),p=o?"text-slate-300":"text-slate-600";return g.useEffect(()=>{v&&l(m)},[v,m]),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-800"}`,children:"Where am I now?"}),e.jsx("p",{className:`mt-2 text-sm ${p}`,children:"Tick every statement that's true for your programme today, and see your readiness by component - both feed into which of the 5 change phases you're really in."})]}),e.jsx("div",{className:`rounded-lg border shadow-sm ${o?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-900"}`,children:"Which of these is true for you?"}),e.jsx("div",{className:"mt-4 space-y-3",children:ba.map(S=>e.jsxs("label",{className:`flex items-start gap-3 rounded-md border p-3 cursor-pointer ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("input",{type:"checkbox",checked:!!f[S.phase],onChange:R=>d(I=>({...I,[S.phase]:R.target.checked})),className:"mt-1 h-4 w-4"}),e.jsxs("span",{children:[e.jsxs("span",{className:`block text-xs font-semibold uppercase tracking-wider ${o?"text-blue-300":"text-blue-700"}`,children:["Phase ",S.phase,": ",an[S.phase]]}),e.jsx("span",{className:`block text-sm ${o?"text-slate-200":"text-slate-700"}`,children:S.statement})]})]},S.phase))}),v?e.jsx("div",{className:`mt-5 rounded-md border p-4 ${o?"border-blue-500/30 bg-blue-500/10":"border-blue-200 bg-blue-50"}`,children:e.jsxs("p",{className:`text-sm ${o?"text-blue-100":"text-blue-900"}`,children:["Based on your answers, we've set your phase as"," ",e.jsxs("strong",{children:["Phase ",m,": ",an[m]]}),". Please look below for where we expect each component at this phase level."]})}):null,e.jsxs("p",{className:`mt-3 text-xs ${o?"text-slate-400":"text-slate-500"}`,children:["Currently tracking"," ",e.jsxs("strong",{children:["Phase ",s,": ",an[s]]})," ","(",a==="manual"?"set manually":"auto-detected from delivery progress",").",a==="manual"?e.jsx("button",{type:"button",onClick:r,className:"ml-2 font-semibold text-[#005eb8] hover:underline",children:"Reset to auto"}):null]})]})}),e.jsx("div",{className:`rounded-lg border shadow-sm ${o?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-900"}`,children:"Readiness by component"}),e.jsx("p",{className:`mt-1 text-xs ${p}`,children:"Each component is scored by its weakest lens - click a label to jump to that component's assessment."}),e.jsx("div",{className:`mx-auto mt-4 flex items-center justify-center rounded border p-2 ${o?"border-slate-700 bg-slate-950":"border-slate-100 bg-slate-50"}`,style:{height:720},children:e.jsx("canvas",{ref:c,className:"block h-full w-full"})}),e.jsx("p",{className:`mt-4 text-center text-sm italic ${p}`,children:"We suggest if you haven't already starting from Vision and moving clockwise."}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{type:"button",onClick:()=>i("vision"),className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]",children:"Let's check out our Vision component"})})]})})]})}function Nl(n){return{id:`audit:${Date.now()}-${Math.random().toString(36).slice(2,8)}`,timestamp:new Date().toISOString(),actor:n.actor,eventType:n.eventType,entityType:n.entityType,entityId:n.entityId,summary:n.summary,trustName:n.trustName,projectName:n.projectName,componentId:n.componentId,lens:n.lens,reason:n.reason,before:n.before,after:n.after,source:n.source||"local",importedAt:n.importedAt}}const Cl=1e4;function Et(n,t=Cl){return n.length<=t?n:n.slice(n.length-t)}const xa="nhs-digital-adoption-store",El=new Set(["pathway-1","pathway-2","pathway-3"]);function ui(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function We(n,t){if(!ui(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected object.`)}function J(n,t){if(n!==void 0&&typeof n!="string")throw new Error(`Invalid adoption assessment payload at ${t}: expected string.`)}function mi(n,t){if(n!==void 0&&typeof n!="number")throw new Error(`Invalid adoption assessment payload at ${t}: expected number.`)}function is(n,t){if(n!==void 0&&!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`)}function gi(n,t){We(n,t),J(n.id,`${t}.id`),J(n.text,`${t}.text`),J(n.owner,`${t}.owner`),J(n.timescale,`${t}.timescale`),J(n.status,`${t}.status`),J(n.notes,`${t}.notes`),J(n.evidence,`${t}.evidence`)}function kl(n,t){We(n,t),mi(n.score,`${t}.score`),J(n.justification,`${t}.justification`),J(n.evidence,`${t}.evidence`),is(n.actions,`${t}.actions`),(n.actions||[]).forEach((s,a)=>{gi(s,`${t}.actions[${a}]`)})}function pi(n,t){We(n,t),Object.keys(n).forEach(s=>{const a=n[s];We(a,`${t}.${s}`),Object.keys(a).forEach(i=>{kl(a[i],`${t}.${s}.${i}`)})})}function jl(n,t){We(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((i,l)=>{We(i,`${t}.${s}[${l}]`),J(i.id,`${t}.${s}[${l}].id`),J(i.text,`${t}.${s}[${l}].text`),J(i.owner,`${t}.${s}[${l}].owner`),J(i.timescale,`${t}.${s}[${l}].timescale`),J(i.notes,`${t}.${s}[${l}].notes`),J(i.evidence,`${t}.${s}[${l}].evidence`),is(i.linkedActions,`${t}.${s}[${l}].linkedActions`),(i.linkedActions||[]).forEach((r,o)=>{We(r,`${t}.${s}[${l}].linkedActions[${o}]`),J(r.lens,`${t}.${s}[${l}].linkedActions[${o}].lens`),J(r.actionId,`${t}.${s}[${l}].linkedActions[${o}].actionId`)})})})}function Il(n,t){We(n,t),Object.keys(n).forEach(s=>{const a=n[s];We(a,`${t}.${s}`),["pathway-1","pathway-2","pathway-3"].forEach(i=>{const l=a[i];is(l,`${t}.${s}.${i}`),(l||[]).forEach((r,o)=>{if(typeof r!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}.${i}[${o}]: expected string.`)})})})}function Al(n,t){We(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((i,l)=>{if(typeof i!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}[${l}]: expected string.`)})})}function _l(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{We(s,`${t}[${a}]`),J(s.id,`${t}[${a}].id`),J(s.removedAt,`${t}[${a}].removedAt`),J(s.reason,`${t}[${a}].reason`),J(s.componentId,`${t}[${a}].componentId`),J(s.lens,`${t}[${a}].lens`),J(s.actionId,`${t}[${a}].actionId`),J(s.actionText,`${t}[${a}].actionText`),J(s.actionType,`${t}[${a}].actionType`)})}function Ol(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{We(s,`${t}[${a}]`),J(s.id,`${t}[${a}].id`),J(s.timestamp,`${t}[${a}].timestamp`),J(s.actor,`${t}[${a}].actor`),J(s.eventType,`${t}[${a}].eventType`),J(s.entityType,`${t}[${a}].entityType`),J(s.entityId,`${t}[${a}].entityId`),J(s.summary,`${t}[${a}].summary`),J(s.trustName,`${t}[${a}].trustName`),J(s.projectName,`${t}[${a}].projectName`),J(s.componentId,`${t}[${a}].componentId`),J(s.lens,`${t}[${a}].lens`),J(s.reason,`${t}[${a}].reason`),J(s.source,`${t}[${a}].source`),J(s.importedAt,`${t}[${a}].importedAt`)})}function Rl(n,t){if(We(n,t),J(n.trustName,`${t}.trustName`),J(n.region,`${t}.region`),J(n.trustType,`${t}.trustType`),J(n.projectName,`${t}.projectName`),J(n.leadName,`${t}.leadName`),J(n.cstId,`${t}.cstId`),n.cst!==void 0){if(We(n.cst,`${t}.cst`),J(n.cst.type,`${t}.cst.type`),J(n.cst.pathway,`${t}.cst.pathway`),typeof n.cst.pathway=="string"&&!El.has(n.cst.pathway))throw new Error(`Invalid adoption assessment payload at ${t}.cst.pathway: unexpected value "${n.cst.pathway}".`);if(J(n.cst.goLiveDate,`${t}.cst.goLiveDate`),J(n.cst.fullAdoptionDate,`${t}.cst.fullAdoptionDate`),J(n.cst.benefitRealizationDate,`${t}.cst.benefitRealizationDate`),J(n.cst.toolkitChoice,`${t}.cst.toolkitChoice`),typeof n.cst.toolkitChoice=="string"&&!Bi(n.cst.toolkitChoice))throw new Error(`Invalid adoption assessment payload at ${t}.cst.toolkitChoice: unexpected value "${n.cst.toolkitChoice}".`)}}function Pl(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{We(s,`${t}[${a}]`),J(s.monthLabel,`${t}[${a}].monthLabel`),mi(s.overallPercentage,`${t}[${a}].overallPercentage`),s.data!==void 0&&pi(s.data,`${t}[${a}].data`)})}function Dl(n,t){We(n,t),Object.keys(n).forEach(s=>{if(typeof n[s]!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected string.`)})}function $l(n,t){We(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((i,l)=>{gi(i,`${t}.${s}[${l}]`)})})}function ht(n){if(!ui(n))throw new Error("Invalid adoption assessment payload at root: expected object.");return J(n.schemaVersion,"schemaVersion"),J(n.exportedAt,"exportedAt"),n.orgProfile!==void 0&&Rl(n.orgProfile,"orgProfile"),n.currentDraft!==void 0&&pi(n.currentDraft,"currentDraft"),n.objectives!==void 0&&jl(n.objectives,"objectives"),n.auditLog!==void 0&&Ol(n.auditLog,"auditLog"),n.suppressedAutoActions!==void 0&&Al(n.suppressedAutoActions,"suppressedAutoActions"),n.actionAuditLog!==void 0&&_l(n.actionAuditLog,"actionAuditLog"),n.history!==void 0&&Pl(n.history,"history"),n.phaseOverrides!==void 0&&Dl(n.phaseOverrides,"phaseOverrides"),n.pathwayChecks!==void 0&&Il(n.pathwayChecks,"pathwayChecks"),n.componentActions!==void 0&&$l(n.componentActions,"componentActions"),n}function va(n){return{schemaVersion:"4.0",exportedAt:new Date().toISOString(),orgProfile:{...n.orgProfile},currentDraft:et(n.currentDraft),objectives:hi(n.objectives),auditLog:Gl(n.auditLog),suppressedAutoActions:bi(n.suppressedAutoActions),history:n.history.map(t=>({...t,data:et(t.data)})),phaseOverrides:{...n.phaseOverrides},pathwayChecks:fi(n.pathwayChecks)}}function Tl(n){const t=n.componentActions;if(t)return Object.keys(t).reduce((s,a)=>(s[a]=(t[a]||[]).map(i=>({id:String(i.id??`${Date.now()}-${Math.random().toString(36).slice(2,8)}`),text:String(i.text||""),owner:String(i.owner||""),timescale:String(i.timescale||""),notes:String(i.notes||""),evidence:String(i.evidence||""),linkedActions:[]})),s),{})}function Ll(n,t){return n!=null&&n.length?n.map(s=>({id:`legacy-${s.id}`,timestamp:s.removedAt,actor:"Unknown user",eventType:"action-removed",entityType:"action",entityId:s.actionId,summary:`Removed action: ${s.actionText||s.actionId}`,trustName:t==null?void 0:t.trustName,projectName:t==null?void 0:t.projectName,componentId:s.componentId,lens:s.lens,reason:s.reason,before:{actionText:s.actionText,actionType:s.actionType},source:"local"})):[]}function Bl(n,t,s){const a=Ll(t,s),i=(n||[]).map(r=>({...r})),l=[...a,...i].sort((r,o)=>{const c=Date.parse(r.timestamp||""),f=Date.parse(o.timestamp||"");return!Number.isNaN(c)&&!Number.isNaN(f)&&c!==f?c-f:(r.id||"").localeCompare(o.id||"")});return Et(l)}function Ml(n,t){return n.map(s=>({...s,source:"imported",importedAt:t}))}function os(n){var a,i;if(!n)return{};const t=Nt(n.orgProfile);(i=(a=n.orgProfile)==null?void 0:a.cst)!=null&&i.pathway||(t.cst.pathway="pathway-1");const s=n.objectives||Tl(n);return{...n,schemaVersion:n.schemaVersion||"2.0",orgProfile:t,objectives:hi(s),auditLog:Bl(n.auditLog,n.actionAuditLog,t),suppressedAutoActions:bi(n.suppressedAutoActions),pathwayChecks:fi(n.pathwayChecks)}}function Sa(n,t){const s=ht(n),a=os(s),i=!!(s.objectives||s.componentActions),l=new Date().toISOString(),r=Ml(a.auditLog||[],l),o=Et([...t.auditLog||[],...r]);return bt({...t,orgProfile:a.orgProfile||t.orgProfile,currentDraft:a.currentDraft?et(a.currentDraft):et(t.currentDraft),objectives:i?a.objectives:t.objectives,auditLog:o,suppressedAutoActions:a.suppressedAutoActions||t.suppressedAutoActions,history:(a.history||t.history).map(c=>({...c,data:et(c.data)})),phaseOverrides:a.phaseOverrides||t.phaseOverrides,pathwayChecks:a.pathwayChecks||t.pathwayChecks})}function et(n){const t=Zt(n);return Object.keys(t).forEach(s=>{Object.keys(t[s]).forEach(a=>{t[s][a].actions=t[s][a].actions.map(i=>({...i,status:He(i.status),notes:i.notes||"",evidence:i.evidence||"",linkedTargets:(i.linkedTargets||[]).map(l=>({componentId:l.componentId,lens:l.lens}))}))})}),t}function hi(n){const t=es(n||{});return Object.keys(t).forEach(s=>{t[s]=t[s].map(a=>({...a,owner:a.owner||"",timescale:a.timescale||"",notes:a.notes||"",evidence:a.evidence||"",linkedActions:(a.linkedActions||[]).map(i=>({lens:i.lens,actionId:i.actionId}))}))}),t}function fi(n){return n?Object.keys(n).reduce((t,s)=>{const a=n[s]||{};return t[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},t},{}):{}}function bi(n){return n?Object.keys(n).reduce((t,s)=>(t[s]=[...n[s]||[]],t),{}):{}}function Gl(n){return n?n.map(t=>({...t})):[]}function Fl(n,t){const s=(n||[]).map(i=>`${i.componentId}:${i.lens}`).sort(),a=(t||[]).map(i=>`${i.componentId}:${i.lens}`).sort();return s.length===a.length&&s.every((i,l)=>i===a[l])}function Ul(n,t){return n.text===t.text&&(n.actionType||"")===(t.actionType||"")&&n.owner===t.owner&&n.timescale===t.timescale&&n.status===t.status&&(n.phase??null)===(t.phase??null)&&(n.guidanceUrl||"")===(t.guidanceUrl||"")&&(n.startDate||"")===(t.startDate||"")&&(n.dueDate||"")===(t.dueDate||"")&&(n.notes||"")===(t.notes||"")&&(n.evidence||"")===(t.evidence||"")&&(n.readinessScore??null)===(t.readinessScore??null)&&Fl(n.linkedTargets,t.linkedTargets)}function Hl(n){return`${n.text||"Untitled action"} - ${n.status}, owner: ${n.owner||"Unassigned"}`}function Wl(n,t){const s=n.map(i=>`${i.lens}:${i.actionId}`).sort(),a=t.map(i=>`${i.lens}:${i.actionId}`).sort();return s.length===a.length&&s.every((i,l)=>i===a[l])}function Vl(n,t){return n.text===t.text&&n.owner===t.owner&&n.timescale===t.timescale&&(n.notes||"")===(t.notes||"")&&(n.evidence||"")===(t.evidence||"")&&Wl(n.linkedActions,t.linkedActions)}function ql(n){return`${n.text||"Untitled objective"} - owner: ${n.owner||"Unassigned"}`}function xi(n,t){return n.name===t.name&&n.role===t.role}function wt(n){return n.role?`${n.name||"Unnamed"} - ${n.role}`:n.name||"Unnamed"}function Yl(n,t){return n.score===t.score&&n.justification===t.justification&&n.evidence===t.evidence}function ya(n){const t=`Score ${n.score}`;return n.justification?`${t} - ${n.justification}`:t}function kt(n,t,s,a,i,l){const r=new Map(t.map(d=>[d.id,d])),o=new Set(n.map(d=>d.id)),c=[];n.forEach(d=>{const m=r.get(d.id);m&&!s(d,m)&&c.push({id:`${a}:${d.id}`,label:i(d),mineSummary:l(d),theirsSummary:l(m)})});const f=t.filter(d=>!o.has(d.id)).length;return{conflicts:c,autoMergedCount:f,merge:d=>{const m=n.map(v=>{const p=r.get(v.id);return p&&d[`${a}:${v.id}`]==="theirs"?p:v});return t.forEach(v=>{o.has(v.id)||m.push(v)}),m}}}const wa=[{key:"trustName",label:"Trust name"},{key:"region",label:"Region"},{key:"trustType",label:"Trust type"},{key:"projectName",label:"Programme / project name"},{key:"leadName",label:"Lead submitter"}],Na=[{key:"type",label:"CST type"},{key:"pathway",label:"Pathway"},{key:"goLiveDate",label:"Go live date"},{key:"fullAdoptionDate",label:"Full adoption date"},{key:"benefitRealizationDate",label:"Benefit realisation date"},{key:"toolkitChoice",label:"Default toolkit"}];function vi(n,t){const s=[];return wa.forEach(({key:a,label:i})=>{const l=String(n[a]??""),r=String(t[a]??"");l!==r&&s.push({id:`profile:${String(a)}`,label:i,mineSummary:l||"(blank)",theirsSummary:r||"(blank)"})}),Na.forEach(({key:a,label:i})=>{const l=String(n.cst[a]??""),r=String(t.cst[a]??"");l!==r&&s.push({id:`cst:${String(a)}`,label:i,mineSummary:l||"(blank)",theirsSummary:r||"(blank)"})}),{conflicts:s,autoMergedCount:0,merge:a=>{const i={...n};wa.forEach(({key:r})=>{a[`profile:${String(r)}`]==="theirs"&&(i[r]=t[r])});const l={...n.cst};return Na.forEach(({key:r})=>{a[`cst:${String(r)}`]==="theirs"&&(l[r]=t.cst[r])}),{...i,cst:l}}}}function Si(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a=[],i=[];let l=0;const r=new Map,o=new Map;return s.forEach(c=>{const f=n[c]||{},d=t[c]||{},m=new Set([...Object.keys(f),...Object.keys(d)]);o.set(c,m),m.forEach(v=>{const p=f[v],S=d[v],R=`${c}:${v}`;p&&S&&!Yl(p,S)&&a.push({id:`entry:${R}`,label:`${c} / ${v}`,mineSummary:ya(p),theirsSummary:ya(S)});const I=kt((p==null?void 0:p.actions)||[],(S==null?void 0:S.actions)||[],Ul,`action:${R}`,b=>`${c} / ${v} - ${b.text||"Untitled action"}`,Hl);i.push(...I.conflicts),l+=I.autoMergedCount,r.set(R,I)})}),{entryConflicts:a,actionConflicts:i,autoMergedActionCount:l,merge:c=>{const f={};return s.forEach(d=>{const m=n[d]||{},v=t[d]||{},p={};(o.get(d)||new Set).forEach(S=>{var E;const R=m[S],I=v[S],b=`${d}:${S}`;let k=R?{score:R.score,justification:R.justification,evidence:R.evidence}:{score:I.score,justification:I.justification,evidence:I.evidence};R&&I&&c[`entry:${b}`]==="theirs"&&(k={score:I.score,justification:I.justification,evidence:I.evidence});const q=((E=r.get(b))==null?void 0:E.merge(c))||[];p[S]={...k,actions:q}}),f[d]=p}),f}}}function yi(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a=[];let i=0;const l=new Map;return s.forEach(r=>{const o=kt(n[r]||[],t[r]||[],Vl,`objective:${r}`,c=>`${r} - ${c.text||"Untitled objective"}`,ql);a.push(...o.conflicts),i+=o.autoMergedCount,l.set(r,o)}),{conflicts:a,autoMergedCount:i,merge:r=>{const o={};return s.forEach(c=>{var f;o[c]=((f=l.get(c))==null?void 0:f.merge(r))||[]}),o}}}function wi(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a=[];let i=0;return s.forEach(l=>{const r=n[l],o=t[l];if(r===void 0||o===void 0){r===void 0&&o!==void 0&&(i+=1);return}r!==o&&a.push({id:`phase:${l}`,label:`Phase focus override - ${l}`,mineSummary:r,theirsSummary:o})}),{conflicts:a,autoMergedCount:i,merge:l=>{const r={...n};return s.forEach(o=>{const c=t[o];c!==void 0&&(n[o]===void 0||l[`phase:${o}`]==="theirs")&&(r[o]=c)}),r}}}function Kl(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a={};return s.forEach(i=>{const l=n[i]||{},r=t[i]||{},o=new Set([...Object.keys(l),...Object.keys(r)]),c={};o.forEach(f=>{const d=f;c[d]=Array.from(new Set([...l[d]||[],...r[d]||[]]))}),a[i]=c}),a}function zl(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a={};return s.forEach(i=>{a[i]=Array.from(new Set([...n[i]||[],...t[i]||[]]))}),a}function Jl(n,t){const s=new Map;return t.forEach(a=>s.set(a.monthLabel,a)),n.forEach(a=>s.set(a.monthLabel,a)),Array.from(s.values())}function Ni(n){const t=os(n);return{theirsProfile:t.orgProfile||Nt(),theirsDraft:t.currentDraft||{},theirsObjectives:t.objectives||{},theirsPhaseOverrides:t.phaseOverrides||{},theirsPathwayChecks:t.pathwayChecks||{},theirsSuppressedAutoActions:t.suppressedAutoActions||{},theirsAuditLog:t.auditLog||[],theirsHistory:(t.history||[]).map(s=>({...s,data:Zt(s.data)}))}}function Xl(n,t){const{theirsProfile:s,theirsDraft:a,theirsObjectives:i,theirsPhaseOverrides:l}=Ni(t),r=vi(n.orgProfile,s),o=kt(n.orgProfile.teamMembers||[],s.teamMembers||[],xi,"team",wt,wt),c=Si(n.currentDraft,a),f=yi(n.objectives,i),d=wi(n.phaseOverrides,l),m=[{id:"profile",title:"Organisation profile & CST settings",items:r.conflicts},{id:"team",title:"Team members",items:o.conflicts},{id:"assessments",title:"Assessments",items:c.entryConflicts},{id:"actions",title:"Lens actions",items:c.actionConflicts},{id:"objectives",title:"Objectives",items:f.conflicts},{id:"phaseFocus",title:"Phase focus overrides",items:d.conflicts}].filter(p=>p.items.length>0),v=[];return o.autoMergedCount&&v.push(`${o.autoMergedCount} new team member(s)`),c.autoMergedActionCount&&v.push(`${c.autoMergedActionCount} new action(s)`),f.autoMergedCount&&v.push(`${f.autoMergedCount} new objective(s)`),d.autoMergedCount&&v.push(`${d.autoMergedCount} new phase focus override(s)`),{sections:m,autoMergeSummary:v,hasConflicts:m.length>0}}function Ca(n,t,s){const{theirsProfile:a,theirsDraft:i,theirsObjectives:l,theirsPhaseOverrides:r,theirsPathwayChecks:o,theirsSuppressedAutoActions:c,theirsAuditLog:f,theirsHistory:d}=Ni(t),m=vi(n.orgProfile,a),v=kt(n.orgProfile.teamMembers||[],a.teamMembers||[],xi,"team",wt,wt),p=Si(n.currentDraft,i),S=yi(n.objectives,l),R=wi(n.phaseOverrides,r),I={...n.orgProfile,...m.merge(s),teamMembers:v.merge(s)},b=new Date().toISOString(),k=f.map(E=>({...E,source:"imported",importedAt:b})),q=Et([...n.auditLog||[],...k]);return bt({...n,orgProfile:I,currentDraft:Zt(p.merge(s)),objectives:es(S.merge(s)),auditLog:q,suppressedAutoActions:zl(n.suppressedAutoActions,c),history:Jl(n.history,d),phaseOverrides:R.merge(s),pathwayChecks:Kl(n.pathwayChecks,o)})}const Ql=`{
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
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "benefits-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Begin discussions with sponsors and leaders about the expected value of the change.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "benefits-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "M Engage key stakeholders to explore potential organisational and stakeholder benefits.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "benefits-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Capture initial ideas regarding expected benefits and possible disbenefits.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "benefits-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Identify stakeholder groups likely to experience benefits from the change.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "benefits-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Gain initial leadership support for benefits identification and management activities.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "benefits-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Review available evidence that may indicate potential benefits.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "benefits-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "S Begin raising awareness that benefits will need to be defined, measured and realised.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "benefits-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "S Facilitate structured benefits workshops with sponsors, leaders and subject matter experts.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "benefits-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Document and categorise expected organisational, operational, financial and user benefits.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "benefits-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Document likely disbenefits and trade-offs associated with the change.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "benefits-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "M Develop measurable benefit statements and draft success criteria for priority benefits.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "benefits-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Identify proposed benefit owners and establish accountability for benefit realisation.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "benefits-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Develop stakeholder-specific ‘What’s in it for me?’ (WIIFM) benefit statements.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "benefits-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Validate with stakeholders which benefits are most important and meaningful to them.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "benefits-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "S Review and validate draft benefits with stakeholders and sponsors.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "benefits-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "S Assess differences in expected value across stakeholder groups and business areas.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "benefits-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "S Refine benefit definitions, ownership and measures using stakeholder feedback.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "benefits-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Obtain approval and baseline the benefits realisation approach.",
      "outcomeIds": [
        "BEN_O1",
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "benefits-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Define measures, KPIs and reporting arrangements for each benefit and record this in the benefits register.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "benefits-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Establish baseline measures against which benefits can be assessed and include in the business case.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "benefits-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "M Develop a benefits realisation plan including ownership, timelines and reporting.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "benefits-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Integrate benefits tracking into governance and programme reporting.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "benefits-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "M Use stakeholder-facing benefit messages (WIIFM benefits) to build support and momentum.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "benefits-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "S Communicate expected benefits and success measures to stakeholders.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "benefits-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Gather stakeholder feedback on benefit assumptions and expectations.",
      "outcomeIds": [
        "BEN_O1",
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "benefits-26",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "S Validate that benefit measures are meaningful and understood by stakeholders.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "benefits-27",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "S Monitor stakeholder confidence in the expected benefits.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "benefits-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Track benefit performance against agreed KPI's, measures and targets.",
      "outcomeIds": [
        "BEN_O2",
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "benefits-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "S Review realised, unrealised and unexpected benefits through governance forums.",
      "outcomeIds": [
        "BEN_O2",
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "benefits-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Identify risks to benefits realisation and agree mitigation actions.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "benefits-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Assess whether expected benefits are being achieved and if not, why.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "benefits-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "S Manage dependencies that affect benefit realisation (RAID log).",
      "outcomeIds": [
        "BEN_O2",
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "benefits-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "S Share evidence of realised benefits and unintentional consequences with stakeholders.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "benefits-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Use stakeholder insight to understand barriers to achieving benefits.",
      "outcomeIds": [
        "BEN_O2",
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "benefits-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "S Monitor stakeholder perceptions of realised benefits and improvement.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "benefits-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "M Use WIIFM benefit stories and examples to reinforce adoption.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "benefits-37",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "S Recognise teams and individuals contributing to benefit realisation.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "benefits-38",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Continuously monitor long-term benefit realisation.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "benefits-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "S Embed benefits management into normal business and adoption management processes.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "benefits-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "S Refine benefit measures and approaches using organisational learning.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "benefits-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Use benefit evidence to inform future investment and change decisions.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "benefits-42",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "S Maintain management of long-term dependencies affecting realised benefits.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "benefits-43",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "M Promote a culture of continuous benefits realisation and adoption.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "benefits-44",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "S Regularly communicate realised benefits and improvement outcomes.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "benefits-45",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Use stakeholder feedback to identify opportunities for further benefits realisation.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "benefits-46",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "S Measure ongoing stakeholder perception of benefit delivered by the change.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "benefits-47",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "S Use success stories and achievements to sustain belief in the value of the change.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,rs={componentId:"benefits",actionPrefix:"benefits-action",outcomePrefix:"benefits:outcome",fallbackOutcomes:[{id:"benefits:outcome:o1",text:"Benefits and disbenefits have been identified and defined"},{id:"benefits:outcome:o2",text:"Benefits are actively managed and monitored"},{id:"benefits:outcome:o3",text:"Benefits are realised, evidenced and sustained"}],lensAliases:{"Strategic Direction and Leadership":"Planning and Risk","People Experience and Culture":"Process and Sustainment"}},Zl=Ve(Ql,rs);function ec(n){return qe(n,rs,Zl)}function nc(n){return Ye(n,rs)}const tc=`{
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
`,ls={componentId:"capability",actionPrefix:"capability-action",outcomePrefix:"capability:outcome",fallbackOutcomes:[{id:"capability:outcome:o1",text:"Required capability levels have been defined and assessed"},{id:"capability:outcome:o2",text:"People can perform confidently in the future state"},{id:"capability:outcome:o3",text:"Capability and confidence are sustained and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Communication:"People Experience and Culture","Testing and Validation":"Skills and Behaviour"}},sc=Ve(tc,ls);function ac(n){return qe(n,ls,sc)}function ic(n){return Ye(n,ls)}const oc=`{
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
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "case_for_change-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "S Begin discussions with leaders and stakeholders regarding the problems, opportunities or drivers prompting change.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "case_for_change-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Identify high-level issues, challenges, opportunities or risks that may justify change.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "case_for_change-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Begin raising awareness that change may be required.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "case_for_change-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Identify strategic, operational, regulatory or service drivers that may support the need for change.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "case_for_change-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Gain initial sponsorship for a case for change.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "case_for_change-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Gather evidence of stakeholder perceptions of current challenges, opportunities and improvement needs.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "case_for_change-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "S Review previous organisational experience, lessons learned and available evidence relevant to the proposed change.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "case_for_change-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Define and document the problem, opportunity, risk or requirement driving the need for change.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Gather quantitative and qualitative evidence demonstrating the impact the change will have on the current situation.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Assess alignment between the proposed change and organisational objectives, strategies and priorities.",
      "outcomeIds": [
        "CFC_O1"
      ],
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
      "outcomeIds": [
        "CFC_O1",
        "CFC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Conduct structured engagement activities to understand stakeholder experiences of current challenges and opportunities.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Testing & Validation",
      "action": "S Validate whether stakeholders recognise, understand and agree with the need for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "M Gather local examples and supporting evidence that illustrate the impact of maintaining the current state.",
      "outcomeIds": [
        "CFC_O1",
        "CFC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Assess misconceptions, assumptions and conflicting perceptions relating to the need for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Design",
      "action": "S Refine the draft case for change using evidence, stakeholder insight and feedback",
      "outcomeIds": [
        "CFC_O1",
        "CFC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Obtain approval and formal leadership and governance endorsement of the draft case for change.",
      "outcomeIds": [
        "CFC_O1",
        "CFC_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "case_for_change-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "M Develop clear and consistent messaging explaining why change is necessary.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "case_for_change-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Define how evidence supporting the case for change will be reviewed and maintained throughout the change lifecycle.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "case_for_change-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Communicate through engagement and communication activities why the change is necessary",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "case_for_change-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Testing & Validation",
      "action": "S Validate stakeholder understanding of the rationale for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "case_for_change-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Address concerns, challenges and areas of misunderstanding relating to the need for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "case_for_change-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Illustrate the importance of the change using local examples and evidence.",
      "outcomeIds": [
        "CFC_O1",
        "CFC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "case_for_change-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Monitor stakeholder sentiment regarding the case for change.",
      "outcomeIds": [
        "CFC_O2",
        "CFC_O3"
      ],
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
      "outcomeIds": [
        "CFC_O2",
        "CFC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Use governance forums to review whether the original drivers for change remain valid.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Use organisational performance, service and outcome measures to support the case for change.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Use the case for change to inform programme decisions, priorities and resource allocation.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Risk Management",
      "action": "M Review assumptions, emerging risks and external influences (RAID log) that may affect the credibility of the case for change.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Share evidence and examples demonstrating the impact of addressing the original problem or opportunity.",
      "outcomeIds": [
        "CFC_O2",
        "CFC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "M Evaluate stakeholder acceptance of the ongoing need for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Target engagement and communications activity where understanding remains low.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Design",
      "action": "S Refine case for change messaging using stakeholder feedback and insight.",
      "outcomeIds": [
        "CFC_O2",
        "CFC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Ensure change champions can confidently explain and reinforce the case for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "case_for_change-37",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Review the case for change periodically against organisational priorities and external drivers.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-38",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Use benefits and outcomes data to validate the continued relevance of the case for change.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Embed the rationale for change into organisational planning and continuous improvement activities.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Use organisational learning and evidence to evolve the case for change where appropriate.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "M Ensure leaders continue to communicate and reinforce the rationale for change during routine business activity.",
      "outcomeIds": [
        "CFC_O2",
        "CFC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-42",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Capture and share success stories that validate the original need for change.",
      "outcomeIds": [
        "CFC_O2",
        "CFC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-43",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Measure stakeholder belief that the change remains necessary and valuable.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-44",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Reflect emerging evidence, learning and organisational priorities by refreshing messaging.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-45",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Maintain ongoing engagement activities to sustain awareness of the reasons for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-46",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Encourage teams to identify opportunities to build on the original case for change.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "case_for_change-47",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "M Establish baseline measures that evidence the current problem or opportunity.",
      "outcomeIds": [
        "CFC_O1",
        "CFC_O3"
      ],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-48",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Identify and secure sponsors and senior leaders who will champion the case for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "case_for_change-49",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Embed the case for change in programme governance, reporting and decision-making processes.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 3
    }
  ]
}
`,cs={componentId:"case_for_change",actionPrefix:"case-for-change-action",outcomePrefix:"case-for-change:outcome",fallbackOutcomes:[{id:"case-for-change:outcome:o1",text:"The need for change has been clearly defined and evidenced"},{id:"case-for-change:outcome:o2",text:"The case for change is understood and accepted"},{id:"case-for-change:outcome:o3",text:"The case for change remains credible and relevant"}]},rc=Ve(oc,cs);function lc(n){return qe(n,cs,rc)}function cc(n){return Ye(n,cs)}const dc=`{
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
`,ds={componentId:"change_adoption",actionPrefix:"change-adoption-action",outcomePrefix:"change-adoption:outcome",fallbackOutcomes:[{id:"change-adoption:outcome:o1",text:"Adoption expectations and measures have been defined"},{id:"change-adoption:outcome:o2",text:"Adoption is actively monitored and supported"},{id:"change-adoption:outcome:o3",text:"Adoption is sustained and optimised"}],lensAliases:{"Planning and Measurement":"Planning and Risk","Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","Skills and Behaviour":"Skills and Behaviour","People Experience and Culture":"Skills and Behaviour",Governance:"Planning and Risk",Design:"Planning and Risk",Reinforcement:"Skills and Behaviour"}},uc=Ve(dc,ds);function mc(n){return qe(n,ds,uc)}function gc(n){return Ye(n,ds)}const pc=`{
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
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "change_impact-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "M Begin discussions with leaders and stakeholders regarding who or what may be affected by the change.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "change_impact-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Identify high-level business areas, services, teams and stakeholder groups likely to experience change impacts.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "change_impact-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Explore stakeholder perceptions of where change may affect their roles, activities or responsibilities.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "change_impact-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Identify potential areas of disruption, opportunity or uncertainty associated with the change.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "change_impact-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "S Gain agreement that change impact assessment activities will be required.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "change_impact-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Begin raising awareness that different stakeholder groups may be affected in different ways.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "change_impact-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Review previous change initiatives to identify common impact themes, challenges and lessons learned.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "change_impact-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Identify and document the areas, services, teams, roles, processes and stakeholder groups affected by the change (Stakeholder Analysis)",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "change_impact-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Undertake a draft structured Change Impact Assessment covering people, process, technology, information, governance and ways of working.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "change_impact-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "S Assess risks arising from identified change impacts (RAID log).",
      "outcomeIds": [
        "CI_O2",
        "CI_O3"
      ],
      "readinessScore": 1
    },
    {
      "id": "change_impact-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Engage affected stakeholder groups to understand current ways of working and expected impacts.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "change_impact-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "M Assess stakeholder concerns, support requirements, perceived disruption and areas of uncertainty (Change Impact Assessment).",
      "outcomeIds": [
        "CI_O1",
        "CI_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "change_impact-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Assess existing pain points, bottlenecks, duplication, workarounds and service pressures that may influence the scale of impact (Current State Process Mapping/Heat Map/Change Impact Assessment)",
      "outcomeIds": [
        "CI_O1",
        "CI_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "change_impact-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Define and establish baseline measures that will enable comparison between current and future states.",
      "outcomeIds": [
        "CI_O2",
        "CI_O3"
      ],
      "readinessScore": 1
    },
    {
      "id": "change_impact-15",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Complete a detailed change impact assessment across affected business areas, services, teams and roles.",
      "outcomeIds": [
        "CI_O1",
        "CI_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "change_impact-16",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "M Assess the scale of impact using agreed criteria such as complexity, frequency, number of people affected and degree of difference from current ways of working.",
      "outcomeIds": [
        "CI_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "change_impact-17",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Translate significant change impacts into change risks, issues or mitigations where appropriate (RAID log).",
      "outcomeIds": [
        "CI_O2",
        "CI_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "change_impact-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Review assessed impacts and associated risks, through appropriate governance routes so that decisions are informed by change impact evidence (RAID log).",
      "outcomeIds": [
        "CI_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "change_impact-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "S Identify dependencies that could affect impact management, including process, workforce, system, policy, operational or external dependencies (RAID log).",
      "outcomeIds": [
        "CI_O2",
        "CI_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "change_impact-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Validate identified impacts with affected stakeholders and subject matter experts (Change Impact Assessment/Change Agent).",
      "outcomeIds": [
        "CI_O2"
      ],
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
`,us={componentId:"change_impact",actionPrefix:"change-impact-action",outcomePrefix:"change-impact:outcome",fallbackOutcomes:[{id:"change-impact:outcome:o1",text:"The impact of the change has been identified and understood"},{id:"change-impact:outcome:o2",text:"Impacts have been assessed, validated and prioritised"},{id:"change-impact:outcome:o3",text:"Change impacts are actively managed through plans, governance and support"}]},hc=Ve(pc,us);function fc(n){return qe(n,us,hc)}function bc(n){return Ye(n,us)}const xc=`{
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
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "change_network-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "S Explore how a change network could support programme and organisational objectives.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "change_network-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Identify potential areas, teams and stakeholder groups that may benefit from local change support.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "change_network-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Discuss the concept of change agents and change champions with sponsors and stakeholder groups.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "change_network-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Assess whether useful local networks, forums or communities already exist that could support change activities.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "change_network-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Obtain initial sponsor agreement to creation of a change network.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "change_network-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Begin raising awareness of the potential role and value of a change network.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "change_network-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "M Identify possible individuals who may have influence, credibility or interest in supporting change locally.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "change_network-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Agree and document the purpose, scope and objectives of the change network.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "change_network-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Prioritise organisational areas and stakeholder groups requiring representation within the change network.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "change_network-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Draft role profiles and expectations for change agents and change champions.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "change_network-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Define sponsorship, reporting lines and governance arrangements for the proposed network.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "change_network-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Develop a structured recruitment, onboarding and engagement approach for network members.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "change_network-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Approach and engage prospective network members across priority business areas.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "change_network-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Assess commitment, availability and suitability of prospective network members.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "change_network-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Review network coverage and identify gaps in representation, influence and local knowledge.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "change_network-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Communicate planned objectives, roles and expected value to the prospective change network members.",
      "outcomeIds": [
        "CN_O1",
        "CN_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "change_network-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Establish initial connections and collaboration opportunities between prospective network members.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "change_network-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Launch the change network with defined membership, responsibilities and operating arrangements.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 2
    },
    {
      "id": "change_network-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Training & Learning",
      "action": "M Provide initial training and capability development for network members.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "change_network-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "M Provide network members with key messages, updates and engagement materials.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "change_network-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Establish mechanisms for two-way communication between the programme and the network.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "change_network-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "M Define measures to assess network participation, contribution and effectiveness.",
      "outcomeIds": [
        "CN_O2",
        "CN_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "change_network-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Gather insights, questions, concerns, and feedback from stakeholders through network members.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "change_network-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Reinforce key messages and support local engagement activities through network members.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "change_network-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Empower network members to represent stakeholder concerns within programme discussions.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "change_network-26",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Support network members to build local advocacy and confidence in the change.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "change_network-27",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "M Monitor engagement levels and participation across the network.",
      "outcomeIds": [
        "CN_O2",
        "CN_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "change_network-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "M Align change network activity with engagement, learning and adoption plans.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "change_network-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Integrate the impact of the change network into programme governance, planning and delivery activities.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "change_network-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Evaluate the effectiveness of the network in supporting change outcomes.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "change_network-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Refine network structures, roles and approaches based on learning and feedback.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "change_network-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Facilitate local problem solving and remove barriers to adoption, using the change network.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "change_network-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Reinforce desired behaviours and ways of working, using the change network.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "change_network-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Share examples of network impact and success across stakeholder groups.",
      "outcomeIds": [
        "CN_O2",
        "CN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "change_network-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Recognise and celebrate the contribution of network members.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "change_network-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Assess stakeholder perceptions of change network effectiveness.",
      "outcomeIds": [
        "CN_O2",
        "CN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "change_network-37",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "M Develop a structured approach to sustaining a change network capable of supporting future change initiatives, with appropriate ownership.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "change_network-38",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Embed the change network into future organisational change and improvement approaches.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "change_network-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Review and continuously improve change network effectiveness and operating models.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "change_network-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Use organisational learning to strengthen future change network approaches.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "change_network-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "S Integrate the change network with organisational improvement, transformation and change capability activities.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "change_network-42",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Maintain active two-way communication between stakeholders and the change network.",
      "outcomeIds": [
        "CN_O2",
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "change_network-43",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Embed change agents and change champion roles into organisational culture.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "change_network-44",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Measure the network’s contribution to engagement, adoption and reinforcement outcomes.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "change_network-45",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Develop future change leaders from within the network.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "change_network-46",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Demonstrate the value of the network through sustained contribution to organisational change success.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,ms={componentId:"change_network",actionPrefix:"change-network-action",outcomePrefix:"change-network:outcome",fallbackOutcomes:[{id:"change-network:outcome:o1",text:"A representative and effective change network has been established"},{id:"change-network:outcome:o2",text:"The change network actively enables engagement and adoption"},{id:"change-network:outcome:o3",text:"The change network is embedded and delivers ongoing value"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Engagement:"People Experience and Culture","Analysis and Insight":"People Experience and Culture"}},vc=Ve(xc,ms);function Sc(n){return qe(n,ms,vc)}function yc(n){return Ye(n,ms)}const wc=`{
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
`,gs={componentId:"cm_readiness",actionPrefix:"cm-readiness-action",outcomePrefix:"cm-readiness:outcome",fallbackOutcomes:[{id:"cm-readiness:outcome:o1",text:"Organisational readiness has been assessed"},{id:"cm-readiness:outcome:o2",text:"A robust change management plan has been developed"},{id:"cm-readiness:outcome:o3",text:"Readiness and planning activities actively support successful implementation"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Planning and Risk":"Planning and Risk","People Experience and Culture":"Planning and Risk","Skills and Behaviour":"Planning and Risk","Process and Sustainment":"Planning and Risk",Governance:"Planning and Risk",Reinforcement:"Planning and Risk"}},Nc=Ve(wc,gs);function Cc(n){return qe(n,gs,Nc)}function Ec(n){return Ye(n,gs)}const kc=`{
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
`,ps={componentId:"org_maturity",actionPrefix:"org-change-readiness-action",outcomePrefix:"org-change-readiness:outcome",fallbackOutcomes:[{id:"org-change-readiness:outcome:o1",text:"Organisational readiness has been assessed and understood"},{id:"org-change-readiness:outcome:o2",text:"Readiness gaps are being actively addressed"},{id:"org-change-readiness:outcome:o3",text:"The organisation is prepared to successfully absorb and sustain the change"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"Skills and Behaviour","Planning and Measurement":"Skills and Behaviour",Design:"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Reinforcement:"Skills and Behaviour"}},jc=Ve(kc,ps);function Ic(n){return qe(n,ps,jc)}function Ac(n){return Ye(n,ps)}const _c="pathway-auto-action:",Oc="pathway:auto-objective:",Rc="vision:auto-objective:";function Pc(n){return n.startsWith(Oc)||n.startsWith(Rc)}function Dc(n){const t=n.orgProfile.cst.pathway,s={...n.objectives||{}},a=Object.keys(n.currentDraft||{}).reduce((i,l)=>{const r=n.currentDraft[l]||{};return i[l]=Object.keys(r).reduce((o,c)=>{const f=r[c];return o[c]={...f,actions:(f.actions||[]).filter(d=>!d.id.startsWith(_c))},o},{}),i},{});return nt.forEach(i=>{ni(i.id,t)&&(s[i.id]=(s[i.id]||[]).filter(r=>!Pc(r.id)))}),{...n,currentDraft:a,objectives:s}}const $c=`{
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
`,hs={componentId:"process_change",actionPrefix:"process-change-action",outcomePrefix:"process-change:outcome",fallbackOutcomes:[{id:"process-change:outcome:o1",text:"Current and future processes have been defined"},{id:"process-change:outcome:o2",text:"Process changes have been implemented and adopted"},{id:"process-change:outcome:o3",text:"Processes are optimised and continuously improved"}],lensAliases:{"Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Skills and Behaviour","Planning and Risk":"Process and Sustainment","Analysis and Insight":"Process and Sustainment",Communication:"Skills and Behaviour","Dependency Management":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment",Implementation:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"Skills and Behaviour","Testing and Validation":"Process and Sustainment"}},Tc=Ve($c,hs);function Lc(n){return qe(n,hs,Tc)}function Bc(n){return Ye(n,hs)}const Mc=`{
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
`,fs={componentId:"reinforcement",actionPrefix:"reinforcement-action",outcomePrefix:"reinforcement:outcome",fallbackOutcomes:[{id:"reinforcement:outcome:o1",text:"Reinforcement strategy and sustainment measures are defined"},{id:"reinforcement:outcome:o2",text:"Reinforcement activities support sustained adoption and behaviour change"},{id:"reinforcement:outcome:o3",text:"Sustained change outcomes are embedded and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Strategic Direction and Leadership":"Process and Sustainment","Planning and Measurement":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"People Experience and Culture"}},Gc=Ve(Mc,fs);function Fc(n){return qe(n,fs,Gc)}function Uc(n){return Ye(n,fs)}const Hc=`{
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
`,bs={componentId:"resistance",actionPrefix:"resistance-action",outcomePrefix:"resistance:outcome",fallbackOutcomes:[{id:"resistance:outcome:o1",text:"Potential sources of resistance have been identified and understood"},{id:"resistance:outcome:o2",text:"Strategies and interventions are in place to prevent and address resistance"},{id:"resistance:outcome:o3",text:"Resistance is actively managed and reduced throughout the change lifecycle"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour",Design:"Skills and Behaviour",Communication:"People Experience and Culture",Engagement:"People Experience and Culture",Reinforcement:"Skills and Behaviour"}},Wc=Ve(Hc,bs);function Vc(n){return qe(n,bs,Wc)}function qc(n){return Ye(n,bs)}const Yc=`{
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
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "risk_management-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "S Begin discussions with sponsors, leaders and stakeholders about potential risks associated with the change.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "risk_management-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Identify high-level areas of uncertainty, vulnerability and potential risk exposure.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "risk_management-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Identify factors that could increase the likelihood of implementation, adoption or sustainment risks.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "risk_management-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "S Gain initial agreement with sponsors that change risks will need to be identified, assessed and actively managed.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "risk_management-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "M Begin raising awareness at governance level of the importance of proactive, change related risk management.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "risk_management-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Review lessons learned from previous changes to identify recurring risk themes and vulnerabilities.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "risk_management-7",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "S Conduct structured change risk assessment activities involving stakeholders and subject matter experts.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "risk_management-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "M Identify and document risks that could affect successful delivery, adoption, benefit realisation or sustainment of the change (RAID log).",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "risk_management-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Assess and categorise identified risks according to likelihood, impact, urgency and priority.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "risk_management-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "S Apply structured risk assessment techniques to analyse consequences and exposure levels.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "risk_management-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Establish and maintain an initial change risk register.",
      "outcomeIds": [
        "RM_O1",
        "RM_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "risk_management-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "M Assess processes, operating arrangements and dependencies to identify areas of elevated risk (RAID log).",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "risk_management-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Engage stakeholders to identify risks from operational, behavioural, cultural and organisational perspectives.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "risk_management-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "S Assess known concerns, previous change experiences and organisational vulnerabilities that may increase risk exposure.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "risk_management-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Use the completed change impact assessment to explore stakeholder perceptions of key concerns, risks and organisational vulnerabilities.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "risk_management-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "S Identify and assess critical dependencies that may increase the overall risk profile of the change.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "risk_management-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "S Assess stakeholder confidence in the organisation's ability to manage risks associated with the change.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "risk_management-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Assign ownership and accountability for identified risks.",
      "outcomeIds": [
        "RM_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "risk_management-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Develop mitigation strategies and action plans for high-priority risks.",
      "outcomeIds": [
        "RM_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "risk_management-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "S Integrate change risks into programme and organisational governance arrangements.",
      "outcomeIds": [
        "RM_O2",
        "RM_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "risk_management-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Define risk monitoring indicators, thresholds and reporting arrangements.",
      "outcomeIds": [
        "RM_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "risk_management-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "S Validate risk ratings and mitigation plans with relevant stakeholders and sponsors.",
      "outcomeIds": [
        "RM_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "risk_management-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "S Communicate significant risks and agreed mitigations to appropriate stakeholder groups.",
      "outcomeIds": [
        "RM_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "risk_management-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Refine risk understanding and mitigation activities using stakeholder insight and feedback.",
      "outcomeIds": [
        "RM_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "risk_management-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "M Incorporate risk mitigation activities into implementation, communications, learning and readiness plans.",
      "outcomeIds": [
        "RM_O2",
        "RM_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "risk_management-26",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "S Manage identified dependencies that increase overall change risk.",
      "outcomeIds": [
        "RM_O2",
        "RM_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "risk_management-27",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "S Test proposed controls and mitigations before implementation where practical.",
      "outcomeIds": [
        "RM_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "risk_management-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Review and update risk ratings based on emerging evidence and implementation experience.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "risk_management-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Monitor change risks regularly using agreed review cycles, thresholds and governance forums.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "risk_management-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "M Escalate significant risks through agreed governance routes and obtain timely decisions where required.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "risk_management-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "S Implement additional mitigation actions where existing controls are not sufficiently reducing risk exposure.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "risk_management-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Assess the effectiveness of mitigation activities and controls.",
      "outcomeIds": [
        "RM_O2",
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "risk_management-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "M Review evolving dependencies and their impact on the risk profile.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "risk_management-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Gather stakeholder feedback on emerging risks, concerns and unintended consequences.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "risk_management-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "S Provide regular risk updates to stakeholders and leadership teams.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "risk_management-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "S Validate whether risk controls are operating as intended in practice.",
      "outcomeIds": [
        "RM_O2",
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "risk_management-37",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Risk Management",
      "action": "S Improve current mitigation and control activities using lessons learned.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "risk_management-38",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "M Continuously monitor current risks and proactively scan for emerging risks associated with ongoing change and continuous improvement.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "risk_management-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "S Embed change risk management into routine governance, planning and operational management processes.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "risk_management-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "S Review long-term trends and recurring patterns in change-related risks.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "risk_management-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "S Use organisational learning to improve risk identification, assessment and mitigation approaches.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "risk_management-42",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "M Embed a culture of proactive risk management and continuous vigilance across the organisation.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "risk_management-43",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "S Encourage proactive risk identification and escalation throughout the organisation.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "risk_management-44",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "S Recognise and reinforce behaviours that contribute to effective risk management.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "risk_management-45",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "S Evaluate the maturity and effectiveness of the risk management approach on a regular basis.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "risk_management-46",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "S Continuously improve risk management processes using lessons learned and organisational insight.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,xs={componentId:"risk_management",actionPrefix:"risk-management-action",outcomePrefix:"risk-management:outcome",fallbackOutcomes:[{id:"risk-management:outcome:o1",text:"Change risks have been identified and assessed"},{id:"risk-management:outcome:o2",text:"Risk mitigation and management activities are in place"},{id:"risk-management:outcome:o3",text:"Risks are proactively managed throughout the change lifecycle"}],lensAliases:{"Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Strategic Direction and Leadership":"Planning and Risk","Skills and Behaviour":"Process and Sustainment",Governance:"Planning and Risk",Reinforcement:"Process and Sustainment"}},Kc=Ve(Yc,xs);function zc(n){return qe(n,xs,Kc)}function Jc(n){return Ye(n,xs)}const Xc=`{
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
`,vs={componentId:"skills_learning",actionPrefix:"skills-learning-action",outcomePrefix:"skills-learning:outcome",fallbackOutcomes:[{id:"skills-learning:outcome:o1",text:"Future learning and capability requirements have been identified"},{id:"skills-learning:outcome:o2",text:"Learning interventions have been designed and delivered"},{id:"skills-learning:outcome:o3",text:"Learning outcomes are achieved and sustained"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Process and Sustainment":"Skills and Behaviour",Governance:"Skills and Behaviour",Communication:"People Experience and Culture",Reinforcement:"Skills and Behaviour",Design:"Skills and Behaviour","Dependency Management":"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour","Testing and Validation":"Skills and Behaviour"}},Qc=Ve(Xc,vs);function Zc(n){return qe(n,vs,Qc)}function ed(n){return Ye(n,vs)}const nd=`{
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
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "sponsorship-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "M Begin discussions with senior leaders about their role in supporting and sponsoring the change.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "sponsorship-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Identify areas where leadership support and governance oversight may be required.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "sponsorship-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Explore stakeholder perceptions of current leadership support for change.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "sponsorship-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Secure initial leadership commitment to establish sponsorship and governance arrangements.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "sponsorship-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Begin communicating the importance of leadership visibility and sponsorship during change.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "sponsorship-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "S Review lessons learned from previous changes relating to governance and sponsorship effectiveness.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "sponsorship-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Identify potential senior leaders and sponsors who will support the change.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "sponsorship-8",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Confirm the Senior Responsible Owner and executive sponsors required to lead the change.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-9",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "M Assess sponsorship coverage requirements across impacted business areas and stakeholder groups.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Define and document sponsor roles, responsibilities and expected sponsorship behaviours (RACI)",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Develop and document governance structures, decision-making routes and escalation arrangements (RACI).",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Develop a sponsor coalition map with representation from impacted organisational areas.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Secure commitment from identified sponsors and confirm their capacity to support the change.",
      "outcomeIds": [
        "SSG_O1",
        "SSG_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "S Assess stakeholder confidence in leadership and sponsorship support for the change.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Identify gaps in sponsor visibility, influence, commitment and representation.",
      "outcomeIds": [
        "SSG_O1",
        "SSG_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Communicate confirmed sponsorship arrangements and the role sponsors will play in the change.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Plan sponsor engagement activities with impacted stakeholder groups.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "sponsorship-18",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Obtain formal approval of governance arrangements, accountability structures and sponsor responsibilities.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-19",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Establish governance forums with defined terms of reference and decision-making authority.",
      "outcomeIds": [
        "SSG_O1",
        "SSG_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Define and socialise escalation routes for risks, issues and decisions (RAID log).",
      "outcomeIds": [
        "SSG_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Training & Learning",
      "action": "S Provide sponsor coaching on sponsorship responsibilities, leadership behaviours and resistance management.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "S Develop a sponsor engagement and communication approach.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Create opportunities for sponsors to engage directly with stakeholders.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Ensure sponsors regularly communicate the purpose and importance of the change.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Establish mechanisms to gather feedback on sponsor visibility and effectiveness.",
      "outcomeIds": [
        "SSG_O2",
        "SSG_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-26",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Reinforce desired behaviours and messages via sponsors.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-27",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Address stakeholder concerns and demonstrate leadership commitment via sponsors.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "sponsorship-28",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Use governance forums routinely to review progress, risks, decisions and benefits.",
      "outcomeIds": [
        "SSG_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-29",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Monitor sponsorship effectiveness using agreed indicators and feedback.",
      "outcomeIds": [
        "SSG_O2",
        "SSG_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Review accountability and ownership to ensure responsibilities remain clear and effective (RACI).",
      "outcomeIds": [
        "SSG_O1",
        "SSG_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Risk Management",
      "action": "S Use governance to actively manage strategic risks, barriers and dependencies (RAID log).",
      "outcomeIds": [
        "SSG_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Ensure sponsor coalition members actively support decisions and prioritisation activities.",
      "outcomeIds": [
        "SSG_O2",
        "SSG_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Maintain visible sponsor involvement throughout implementation and adoption.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Reinforce progress, successes and key messages through operational learning.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Ensure sponsors respond visibly to stakeholder feedback and emerging concerns.",
      "outcomeIds": [
        "SSG_O2",
        "SSG_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Assess stakeholder confidence in leadership support for the change.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "sponsorship-38",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "M Ensure senior leaders continue to visibly champion change as part of routine leadership practice.",
      "outcomeIds": [
        "SSG_O2",
        "SSG_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "sponsorship-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Embed sponsorship and governance practices into normal organisational management arrangements.",
      "outcomeIds": [
        "SSG_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "sponsorship-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Regularly review governance effectiveness and improve decision-making processes.",
      "outcomeIds": [
        "SSG_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "sponsorship-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Maintain an active sponsor coalition that supports organisational priorities and future change.",
      "outcomeIds": [
        "SSG_O2",
        "SSG_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "sponsorship-42",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Demonstrate visible leadership commitment to continuous improvement and ongoing change adoption.",
      "outcomeIds": [
        "SSG_O2",
        "SSG_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "sponsorship-43",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Embed sponsor visibility into organisational culture and leadership behaviours",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 4
    },
    {
      "id": "sponsorship-44",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Measure long-term stakeholder confidence in leadership support for change.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 4
    },
    {
      "id": "sponsorship-45",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Maintain regular dialogue between sponsors, leaders and stakeholder groups.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 4
    },
    {
      "id": "sponsorship-46",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Reinforce desired organisational behaviours using sponsor-led recognition.",
      "outcomeIds": [
        "SSG_O2"
      ],
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
`,Ss={componentId:"sponsorship",actionPrefix:"sponsorship-action",outcomePrefix:"sponsorship:outcome",fallbackOutcomes:[{id:"sponsorship:outcome:o1",text:"Clear sponsorship and governance structures are established"},{id:"sponsorship:outcome:o2",text:"Sponsors actively lead and champion the change"},{id:"sponsorship:outcome:o3",text:"Governance and sponsorship drive successful delivery"}]},td=Ve(nd,Ss);function sd(n){return qe(n,Ss,td)}function ad(n){return Ye(n,Ss)}const id=`{
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
`,ys={componentId:"stakeholder",actionPrefix:"stakeholder-action",outcomePrefix:"stakeholder:outcome",fallbackOutcomes:[{id:"stakeholder:outcome:o1",text:"Stakeholders have been identified, analysed and prioritised"},{id:"stakeholder:outcome:o2",text:"Stakeholders are actively engaged and informed"},{id:"stakeholder:outcome:o3",text:"Engagement and communications support successful adoption"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Reinforcement:"People Experience and Culture"}},od=Ve(id,ys);function rd(n){return qe(n,ys,od)}function ld(n){return Ye(n,ys)}const cd=`{
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
`,ws={componentId:"transfer_bau",actionPrefix:"transfer-bau-action",outcomePrefix:"transfer-bau:outcome",fallbackOutcomes:[{id:"transfer-bau:outcome:o1",text:"Operational ownership and accountability have been established"},{id:"transfer-bau:outcome:o2",text:"Business-as-usual capabilities and support arrangements are in place"},{id:"transfer-bau:outcome:o3",text:"The change is fully embedded within normal operational management"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Process and Sustainment":"Process and Sustainment","Planning and Risk":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Skills and Behaviour":"Process and Sustainment",Governance:"Strategic Direction and Leadership","Measurement and Evaluation":"Process and Sustainment",Implementation:"Process and Sustainment","Risk Management":"Process and Sustainment",Design:"Process and Sustainment","Dependency Management":"Process and Sustainment",Reinforcement:"Process and Sustainment"}},dd=Ve(cd,ws);function ud(n){return qe(n,ws,dd)}function md(n){return Ye(n,ws)}const gd=`{
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
      "outcomeIds": [
        "VISION_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "vision-1",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Identify key leaders who need to contribute to and endorse the vision.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O3"
      ],
      "readinessScore": 0
    },
    {
      "id": "vision-2",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "S Facilitate an initial vision workshop with the SRO, sponsors and key programme stakeholders to explore the future state.",
      "outcomeIds": [
        "VISION_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "vision-3",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Document initial themes describing why the change is needed and what success may look like.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O2"
      ],
      "readinessScore": 0
    },
    {
      "id": "vision-4",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "S Establish a process and timeline for drafting the vision statement.",
      "outcomeIds": [
        "VISION_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "vision-5",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "C Create simple awareness messages explaining that a vision is being developed.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 0
    },
    {
      "id": "vision-6",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Identify key stakeholder groups that need to be involved in early vision discussions.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O2"
      ],
      "readinessScore": 0
    },
    {
      "id": "vision-7",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Conduct stakeholder listening sessions to understand current challenges and expectations.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O2"
      ],
      "readinessScore": 0
    },
    {
      "id": "vision-8",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Gather feedback on stakeholders' perceptions of the proposed change.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O2"
      ],
      "readinessScore": 0
    },
    {
      "id": "vision-9",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Identify common concerns, aspirations and opportunities that should influence the vision.",
      "outcomeIds": [
        "VISION_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "vision-10",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Draft a formal vision statement describing the future state and intended outcomes.",
      "outcomeIds": [
        "VISION_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "vision-11",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Testing & Validation",
      "action": "M Test the draft vision with senior leaders to ensure strategic alignment.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O3"
      ],
      "readinessScore": 1
    },
    {
      "id": "vision-12",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Refine the vision using feedback from sponsors and governance groups.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O3"
      ],
      "readinessScore": 1
    },
    {
      "id": "vision-13",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Testing & Validation",
      "action": "S Validate how the vision aligns with organisational objectives and programme benefits.",
      "outcomeIds": [
        "VISION_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "vision-14",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Develop a high-level vision narrative that can be used consistently across the programme.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 1
    },
    {
      "id": "vision-15",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Run workshops with stakeholder groups to test understanding of the draft vision.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "vision-16",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Collect structured feedback on whether the vision feels relevant and meaningful.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "vision-17",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "S Identify gaps or ambiguities in the vision from a stakeholder perspective.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "vision-18",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Design",
      "action": "S Update the vision to reflect stakeholder insights and concerns.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "vision-19",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Begin developing people-centred messaging explaining why the vision matters to different stakeholder groups.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "vision-20",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Secure formal approval of the vision through programme governance.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "vision-21",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "M Develop a leadership communication plan to support vision rollout.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "vision-22",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "M Equip sponsors with key messages, presentations and briefing materials.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "vision-23",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "M Integrate the vision into programme governance documentation and reporting.",
      "outcomeIds": [
        "VISION_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "vision-24",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "M Ensure leadership communications consistently reference the agreed vision.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "vision-25",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Develop audience-specific communications describing the purpose, value and future-state ambition of the vision.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "vision-26",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "M Deliver engagement sessions to build understanding and awareness of the vision.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "vision-27",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "M Establish feedback channels to assess comprehension and acceptance of the vision.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "vision-28",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "M Use change agents and sponsors to reinforce the vision locally.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "vision-29",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "M Monitor stakeholder understanding through surveys, workshops or feedback sessions.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "vision-30",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "S Ensure sponsors consistently communicate the vision during governance and operational meetings.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "vision-31",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "S Embed the vision into organisational planning, governance and decision-making processes.",
      "outcomeIds": [
        "VISION_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "vision-32",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Review leadership communications regularly for alignment and consistency.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "vision-33",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Monitor leadership engagement in promoting the vision.",
      "outcomeIds": [
        "VISION_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "vision-34",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "M Deploy a formal vision communication campaign across all stakeholder groups.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "vision-35",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Establish regular feedback loops to assess understanding and engagement with the vision.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "vision-36",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Monitor stakeholder awareness and adjust communications where necessary.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "vision-37",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "S Use case studies and practical examples to demonstrate the vision in action.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "vision-38",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Reinforce the vision through team meetings, departmental briefings and change network activities.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "vision-39",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "S Ensure leaders consistently reference the vision during planning, governance and decision-making processes",
      "outcomeIds": [
        "VISION_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "vision-40",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "M Review organisational priorities regularly to ensure continued alignment with the vision.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "vision-41",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Use adoption and performance data to refine and strengthen how the vision is communicated.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "vision-42",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "S Establish mechanisms to continuously evaluate whether organisational behaviours remain aligned to the vision.",
      "outcomeIds": [
        "VISION_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "vision-43",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "S Measure how well staff understand and can articulate the vision.",
      "outcomeIds": [
        "VISION_O2"
      ],
      "readinessScore": 4
    },
    {
      "id": "vision-44",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Capture and share success stories demonstrating delivery of the vision.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "vision-45",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Encourage teams to identify local improvements that support achievement of the vision.",
      "outcomeIds": [
        "VISION_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "vision-46",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "S Maintain continuous engagement and listening activities to keep the vision relevant.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O2"
      ],
      "readinessScore": 4
    },
    {
      "id": "vision-47",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Reinforce the vision through recognition programmes and celebration of achievements.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "vision-48",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "S Ensure the vision becomes part of everyday conversations, team objectives and organisational culture.",
      "outcomeIds": [
        "VISION_O2",
        "VISION_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,Ns={componentId:"vision",actionPrefix:"vision-action",outcomePrefix:"vision:outcome",fallbackOutcomes:[{id:"vision:outcome:o1",text:"A compelling future state has been defined"},{id:"vision:outcome:o2",text:"The vision is shared and understood"},{id:"vision:outcome:o3",text:"The vision is visible and guides the change"}]},pd=Ve(gd,Ns);function hd(n){return qe(n,Ns,pd)}function fd(n){return Ye(n,Ns)}function Cn(n){return Dc(ud(Ic(Fc(Lc(ac(mc(Zc(Vc(rd(Cc(zc(Sc(fc(ec(sd(lc(hd(n))))))))))))))))))}function bd(n){return md(Ac(Uc(Bc(ic(gc(ed(qc(ld(Ec(Jc(yc(bc(nc(ad(cc(fd(n)))))))))))))))))}function xd(n,t){return t==="pathway-1"?Cn(n):bd(n)}const Bt="nhs-digital-adoption-user-settings",Mt="nhs-digital-adoption-report-reminder-dismissed",vd="nhs-digital-adoption-engagement",Gt="nhs-digital-adoption-current-user-id",Ea="Default",Sd=5*1024*1024,yd=new Set(["application/json","text/json"]),wd="Unknown user",Nd=["introduction","engine-explained","project-details","profile"],Cd={1:"#3b82f6",2:"#8b5cf6",3:"#f59e0b",4:"#f97316",5:"#22c55e"},Ed={red:"test-data/adoption-phase1-red.json",amber:"test-data/adoption-phase2-amber.json",green:"test-data/adoption-phase3-green.json"},Ft={name:"",themeColor:"#005eb8",profileImageDataUrl:"",darkMode:!1,colorAccessibilityMode:"standard",phaseFocusMode:"auto",manualPhaseFocus:1,hideGuidedWorkflow:!1,showAdditionalGuidanceLinks:!0,showExternalLinksSection:!1,showActionPriorityColours:!1};function kd(n){return{...n,linkedTargets:(n.linkedTargets||[]).map(t=>({componentId:t.componentId,lens:t.lens}))}}function jd(n,t){return`${n}:${t}`}function ka(n){return n.orgProfile.trustName||n.orgProfile.projectName?!1:!Object.values(n.currentDraft).some(t=>Object.values(t).some(s=>s.score>0))}function ja(n){return!n.trustName.trim()}function Id(n){var t;if(!((t=n.evidence)!=null&&t.trim()))return!1;try{const s=JSON.parse(n.evidence);return Array.isArray(s)?s.length>0:!!n.evidence.trim()}catch{return!!n.evidence.trim()}}function Ad(n){return n.trim()||wd}function _d(n,t,s){const a=(n.teamMembers||[]).find(i=>i.id===t);return Ad((a==null?void 0:a.name)||s)}function Od(n,t,s){var i;const a=Yi[n];return((i=a==null?void 0:a[t])==null?void 0:i[s])||St[s]||St[0]}function Rd(n=new Date){const t=String(n.getMonth()+1).padStart(2,"0");return`${n.getFullYear()}-${t}`}function Pd(n=new Date){return new Date(n.getFullYear(),n.getMonth()-1,1).toLocaleString("en-GB",{month:"short",year:"numeric"})}function Dd(n){const t=new TextEncoder().encode(n);let s="";return t.forEach(a=>{s+=String.fromCharCode(a)}),window.btoa(s)}function $d(n,t=76){const s=[];for(let a=0;a<n.length;a+=t)s.push(n.slice(a,a+t));return s.join(`\r
`)}function Td(n=new Date){return n.toLocaleString("en-GB",{month:"short",year:"numeric"})}function qd(){var Vn,at;const n=nt,t=g.useMemo(()=>[...uo],[]),[s,a]=g.useState(n[0].id),[i,l]=g.useState(!1),[r,o]=g.useState(()=>{let h={};try{const B=vn(xa);h=os(ht(B))}catch(B){console.warn("Ignoring invalid persisted adoption data.",B)}const N=bt({view:"dashboard",orgProfile:h==null?void 0:h.orgProfile,currentDraft:h==null?void 0:h.currentDraft,objectives:h==null?void 0:h.objectives,suppressedAutoActions:h==null?void 0:h.suppressedAutoActions,auditLog:h==null?void 0:h.auditLog,history:h==null?void 0:h.history,phaseOverrides:h==null?void 0:h.phaseOverrides,pathwayChecks:h==null?void 0:h.pathwayChecks});return N.orgProfile.cstId||(N.orgProfile={...N.orgProfile,cstId:Fs()}),Cn(N)}),[c,f]=g.useState(()=>ka(r)?"introduction":"dashboard"),[d,m]=g.useState(""),v=hn("vision-get-started"),[p,S]=g.useState(()=>vn(Gt)||""),R=Pn.useRef(p);g.useEffect(()=>{R.current=p},[p]);const[I,b]=g.useState(null),[k,q]=g.useState(()=>{const h=vn(Bt);return{...Ft,...h}}),E=Pn.useRef(k.name);g.useEffect(()=>{E.current=k.name},[k.name]);const T=Pn.useRef(null),P=Pn.useRef(null),[ue,M]=g.useState(""),z=Pn.useRef(null),le=g.useMemo(()=>Rd(),[]),[ie,A]=g.useState(()=>vn(Mt)||{}),[G,Ne]=g.useState(!0),[Ee,Le]=g.useState([]),[Ke,L]=g.useState({1:!0}),[oe,se]=g.useState({intro:!0,overview:!0,tools:!0}),[ge,fe]=g.useState(null),[ye,ne]=g.useState(!0),[De,$e]=g.useState("medium"),ze=Pn.useRef({}),Be=g.useMemo(()=>{const h=new Date,N=Pd(h),B=h.getDate()===1;return{previousMonthLabel:N,isFirstDayOfMonth:B,shouldNotify:B}},[r.history]),[Ie,cn]=g.useState("test@test.com"),[Je,dn]=g.useState(""),[Ze,_]=g.useState(""),te=Td(),X=g.useCallback((h,N)=>(r.currentDraft[h]||(r.currentDraft[h]={}),r.currentDraft[h][N]||(r.currentDraft[h][N]=_t()),r.currentDraft[h][N]),[r]),pe=k.showAdditionalGuidanceLinks!==!1,be=g.useMemo(()=>{const h=to(r,n);return{...h,nextSteps:h.nextSteps.map(N=>({...N,toolkitLinks:vt(Ea,N.componentId,"inputs",void 0,pe).slice(0,3)}))}},[r,pe]),Ce=k.phaseFocusMode==="manual"&&k.manualPhaseFocus?k.manualPhaseFocus:be.currentPhase;g.useEffect(()=>{var N;if(c!=="assessment")return;const h=(N=n.find(B=>B.id===s))==null?void 0:N.phase;h&&L(B=>({...B,[h]:!0}))},[s,c]),g.useEffect(()=>{c==="where-am-i-now"&&l(!0)},[c]),g.useEffect(()=>{const N={introduction:"intro","engine-explained":"intro","project-details":"intro","where-am-i-now":"intro",dashboard:"overview","daily-checkin":"overview","action-plan":"overview","roadmap-view":"overview","highlight-builder":"tools","force-field-analysis":"tools",compare:"tools","audit-log":"tools"}[c];N&&se(B=>({...B,[N]:!0}))},[c]);const Ae=oo(r,h=>Ht(h)||n[0],X).sort((h,N)=>{const B=h.action.owner.localeCompare(N.action.owner);return B!==0?B:h.component.localeCompare(N.component)});g.useEffect(()=>{tn(xa,r)},[r]),g.useEffect(()=>{tn(Bt,k)},[k]),g.useEffect(()=>{tn(Gt,p)},[p]),g.useEffect(()=>{tn(Mt,ie)},[ie]),g.useEffect(()=>{ja(r.orgProfile)&&!Nd.includes(c)&&f("introduction")},[r.orgProfile,c]),g.useEffect(()=>{c==="dashboard"&&T.current&&setTimeout(()=>{var B,Q,V;const h=(B=T.current)==null?void 0:B.querySelector("#adoption-radar-chart");if(h){const me=io(r,t,n,X);yt(h,me)}const N=(Q=T.current)==null?void 0:Q.querySelector("#adoption-component-radar-chart");if(N){const me=Ba(n,X,Ce);yt(N,me,{maintainAspectRatio:!1,scales:{r:{min:-1,max:5,ticks:{display:!0,stepSize:1,backdropColor:"transparent",callback:de=>Number(de)<0?"":de}}}},de=>{const Te=n[de];Te&&H(Te.id)})}if(r.history.length>0){const me=(V=T.current)==null?void 0:V.querySelector("#adoption-line-chart");if(me){const de={labels:r.history.map(Te=>Te.monthLabel),datasets:[{label:"Adoption Score",data:r.history.map(Te=>Te.overallPercentage||0),borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",fill:!0,tension:.4}]};di(me,de)}}},100)},[c,r,X,t,n,Ce,ye,De]),g.useEffect(()=>{typeof document<"u"&&(document.documentElement.dataset.nhsThemeMode=k.darkMode?"dark":"light")},[k.darkMode]),g.useEffect(()=>{var N;const h=c==="assessment"?`component:${s}`:`view:${c}`;(N=ze.current[h])==null||N.scrollIntoView({block:"nearest",behavior:"smooth"})},[s,c]);const x=()=>typeof window>"u"?!1:window.innerWidth<1024,O=g.useCallback(()=>{var h;(h=P.current)==null||h.scrollTo({top:0,behavior:"auto"})},[]),C=g.useCallback(h=>{f(N=>N===h?N:(Le(B=>[N,...B].slice(0,20)),h)),x()&&l(!1)},[]),j=h=>{C(h)},U=g.useCallback(()=>{Le(h=>{const[N,...B]=h;return N?(f(N),window.innerWidth<1024&&l(!1),B):(window.location.hash="#/",h)})},[]),H=g.useCallback(h=>{Ht(h)&&(a(h),C("assessment"),O())},[C,O]),[ee,ae]=g.useState(null),xe=g.useCallback((h,N,B)=>{ae({lens:N,actionId:B}),H(h)},[H]);g.useEffect(()=>{O()},[O,c]);function ve(h,N){if(!N.length)return h.auditLog;const B=_d(h.orgProfile,R.current,E.current||""),Q=N.map(V=>Nl({actor:B,eventType:V.eventType,entityType:V.entityType,entityId:V.entityId,summary:V.summary,trustName:V.trustName??h.orgProfile.trustName,projectName:V.projectName??h.orgProfile.projectName,componentId:V.componentId,lens:V.lens,reason:V.reason,before:V.before,after:V.after,source:V.source,importedAt:V.importedAt}));return Et([...h.auditLog||[],...Q])}const Xe=g.useCallback((h,N,B)=>{o(Q=>{var _e;const V=((_e=Q.currentDraft[h])==null?void 0:_e[N])||_t(),me={...Q,currentDraft:{...Q.currentDraft,[h]:{...Q.currentDraft[h],[N]:Da(B)}}},de=[];V.score!==B.score&&de.push({eventType:"entry-score-updated",entityType:"entry",entityId:`${h}:${N}`,summary:`Updated readiness score for ${h} / ${N}: ${V.score} -> ${B.score}`,componentId:h,lens:N,before:{score:V.score},after:{score:B.score},source:"local"}),(V.justification||"")!==(B.justification||"")&&de.push({eventType:"entry-justification-updated",entityType:"entry",entityId:`${h}:${N}`,summary:`Updated justification for ${h} / ${N}`,componentId:h,lens:N,before:{justification:V.justification||""},after:{justification:B.justification||""},source:"local"}),(V.evidence||"")!==(B.evidence||"")&&de.push({eventType:"entry-evidence-updated",entityType:"entry",entityId:`${h}:${N}`,summary:`Updated evidence for ${h} / ${N}`,componentId:h,lens:N,before:{evidence:V.evidence||""},after:{evidence:B.evidence||""},source:"local"});const Te=new Map(V.actions.map(he=>[he.id,he]));return B.actions.forEach(he=>{const Re=Te.get(he.id);if(!Re){de.push({eventType:"action-created",entityType:"action",entityId:he.id,summary:`Created action in ${h} / ${N}`,componentId:h,lens:N,after:{text:he.text,status:he.status,owner:he.owner,actionType:he.actionType},source:"local"});return}const kn=JSON.stringify({text:Re.text,status:Re.status,owner:Re.owner,actionType:Re.actionType,notes:Re.notes,dueDate:Re.dueDate,startDate:Re.startDate,evidence:Re.evidence}),mn=JSON.stringify({text:he.text,status:he.status,owner:he.owner,actionType:he.actionType,notes:he.notes,dueDate:he.dueDate,startDate:he.startDate,evidence:he.evidence});kn!==mn&&de.push({eventType:"action-updated",entityType:"action",entityId:he.id,summary:`Updated action in ${h} / ${N}`,componentId:h,lens:N,before:{text:Re.text,status:Re.status,owner:Re.owner,actionType:Re.actionType},after:{text:he.text,status:he.status,owner:he.owner,actionType:he.actionType},source:"local"})}),{...Cn(me),auditLog:ve(Q,de)}})},[ve]),un=g.useCallback((h,N,B,Q)=>{const V=X(h,N);Xe(h,N,{...V,actions:V.actions.map(me=>me.id===B?{...me,status:He(Q)}:me)})},[X,Xe]),En=g.useCallback((h,N,B,Q)=>{const V=X(h,N).actions.find(de=>de.id===B);if(He(Q)==="Completed"&&V!==void 0&&!Id(V)&&!vn(Qn)){fe({componentId:h,lens:N,actionId:B,status:Q});return}un(h,N,B,Q)},[un,X]),y=g.useCallback((h,N)=>{o(B=>{const Q=B.objectives[h]||[],V={...B,objectives:{...B.objectives,[h]:N}};return JSON.stringify(Q)!==JSON.stringify(N)?{...V,auditLog:ve(B,[{eventType:"objectives-updated",entityType:"objective",entityId:h,summary:`Updated component outcomes for ${h}`,componentId:h,before:{objectiveCount:Q.length},after:{objectiveCount:N.length},source:"local"}])}:V})},[ve]),D=g.useCallback(h=>{const N=Xa(r.orgProfile);if(N.isValid)return!0;const B=N.errors.map(Q=>`- ${Q.message}`).join(`
`);return window.confirm(`${h} has CST warnings:

${B}

Continue anyway?`)},[r.orgProfile]),W=g.useCallback(h=>{M(h)},[]),ce=g.useCallback(()=>{if(!D("Export"))return;const N=va(r);Xn(`adoption-assessment-${(r.orgProfile.trustName||"export").replace(/\s+/g,"_")}.json`,JSON.stringify(N,null,2),"application/json"),W("Assessment export downloaded.")},[W,D,r]),we=g.useCallback(()=>{var h;(h=z.current)==null||h.click()},[]),Me=g.useCallback(async h=>{var V,me,de,Te;const N=(V=h.target.files)==null?void 0:V[0];if(!N)return;const B=N.name.toLowerCase().endsWith(".json"),Q=!N.type||yd.has(N.type);if(!B||!Q){W("Import failed. Please choose a valid JSON file."),window.alert("Import failed. Please choose a valid JSON file."),h.target.value="";return}if(N.size>Sd){W("Import failed. The selected file is larger than 5 MB."),window.alert("Import failed. The selected file is larger than 5 MB."),h.target.value="";return}try{const fn=await N.text(),_e=ht(JSON.parse(fn)),he=()=>{o(jn=>{const gn=Cn(Sa(_e,jn));return gn.orgProfile.cstId||(gn.orgProfile={...gn.orgProfile,cstId:Fs()}),{...gn,auditLog:ve(gn,[{eventType:"data-imported",entityType:"system",summary:`Imported assessment data from ${N.name}`,after:{fileName:N.name},source:"local"}])}}),f("dashboard"),W("Assessment import complete. Dashboard updated.")};if(ka(r)){he();return}const Re=(me=_e.orgProfile)==null?void 0:me.cstId,kn=r.orgProfile.cstId,mn=r.orgProfile.projectName||r.orgProfile.trustName||"your currently loaded programme",On=((de=_e.orgProfile)==null?void 0:de.projectName)||((Te=_e.orgProfile)==null?void 0:Te.trustName)||N.name;if(Re&&Re!==kn){if(!window.confirm(`"${On}" looks like a different programme than "${mn}".

Importing will replace everything currently loaded. Continue?`)){W("Import cancelled.");return}he();return}if(!Re&&!window.confirm(`"${On}" doesn't carry a programme ID (it may predate this feature).

Click OK to compare it against "${mn}" and merge item by item, or Cancel to load it as a different programme (replace everything).`)){he();return}const bn=Xl(r,_e);if(!bn.hasConflicts){o(jn=>{const gn=Cn(Ca(jn,_e,{}));return{...gn,auditLog:ve(gn,[{eventType:"data-imported",entityType:"system",summary:bn.autoMergeSummary.length?`Merged import from ${N.name} (${bn.autoMergeSummary.join(", ")})`:`Imported ${N.name} - no changes (already up to date)`,after:{fileName:N.name},source:"local"}])}}),f("dashboard"),W(bn.autoMergeSummary.length?`Merged automatically: ${bn.autoMergeSummary.join(", ")}.`:"Already up to date - nothing to import.");return}b({file:N,parsed:_e,report:bn})}catch{W("Import failed. Please verify the file contents."),window.alert("Unable to import adoption assessment. Please verify the file contents.")}finally{h.target.value=""}},[W,ve,r]),Fe=g.useCallback(h=>{if(!I)return;const{file:N,parsed:B}=I,Q=Object.keys(h).length;o(V=>{const me=Cn(Ca(V,B,h));return{...me,auditLog:ve(me,[{eventType:"data-imported",entityType:"system",summary:`Merged import from ${N.name} (${Q} item(s) resolved)`,after:{fileName:N.name},source:"local"}])}}),b(null),f("dashboard"),W("Import merged into current programme.")},[W,ve,I]),je=g.useCallback(()=>{b(null),W("Import cancelled.")},[W]),ke=g.useCallback(async h=>{try{const N=await fetch(Ed[h]);if(!N.ok)throw new Error(`Failed to load sample data: ${N.status}`);const B=ht(await N.json());o(Q=>{const V=Cn(Sa(B,Q));return{...V,auditLog:ve(V,[{eventType:"example-data-loaded",entityType:"system",summary:"Loaded example assessment data",source:"local"}])}}),f("dashboard"),W("Example assessment data loaded."),x()&&l(!1)}catch(N){console.error(N),W("Unable to load example data right now."),window.alert("Unable to load example data right now. Please try again.")}},[W,ve]),en=g.useCallback(()=>{if(!window.confirm("Warning: this will reset all assessment data (organisation profile, scores, actions, and history) and sign you out. If you are worried, please export your data first. Continue?"))return;const N=Cn(bt());o(N),f("introduction"),q(Ft),tn(Bt,Ft),localStorage.removeItem(vd),A({}),tn(Mt,{}),tn(Jt,!1),S(""),tn(Gt,""),Object.keys(localStorage).filter(B=>B.startsWith("nhs-digital-adoption-page-intro-seen:")).forEach(B=>localStorage.removeItem(B)),W("Assessment data has been reset and you have been signed out."),x()&&l(!1)},[W]),Ue=g.useCallback(()=>({generatedAt:new Date().toISOString(),targetMonth:Be.previousMonthLabel,report:va(r)}),[Be.previousMonthLabel,r]),on=g.useCallback(()=>`adoption-point-in-time-${Be.previousMonthLabel.toLowerCase().replace(/\s+/g,"-")}.json`,[Be.previousMonthLabel]);g.useCallback(()=>{const h=on();Xn(h,JSON.stringify(Ue(),null,2),"application/json")},[on,Ue]),g.useCallback(()=>{const h=Ie.trim()||"test@test.com",N=on(),B=`${Ze}

Attachment: ${N}`,Q=`mailto:${h}?subject=${encodeURIComponent(Je)}&body=${encodeURIComponent(B)}`;window.location.href=Q},[on,Ze,Je,Ie]),g.useCallback(()=>{const h=Ie.trim()||"test@test.com",N=on(),B=JSON.stringify(Ue(),null,2),Q=$d(Dd(B)),V=`----nhs-adoption-reminder-${Date.now()}`,me=[`To: ${h}`,`Subject: ${Je}`,"MIME-Version: 1.0",`Content-Type: multipart/mixed; boundary="${V}"`,"",`--${V}`,'Content-Type: text/plain; charset="UTF-8"',"Content-Transfer-Encoding: 8bit","",Ze,"",`--${V}`,`Content-Type: application/json; name="${N}"`,"Content-Transfer-Encoding: base64",`Content-Disposition: attachment; filename="${N}"`,"",Q,`--${V}--`,""].join(`\r
`),de=Be.previousMonthLabel.toLowerCase().replace(/\s+/g,"-");Xn(`adoption-reminder-${de}.eml`,me,"message/rfc822")},[on,Ue,Ze,Je,Ie,Be.previousMonthLabel]),g.useCallback(()=>{A(h=>({...h,[le]:!0}))},[le]),Be.shouldNotify&&ie[le];const nn=g.useMemo(()=>co(r,be,te),[r,be,te]),wn=g.useMemo(()=>nn.filter(h=>h.completed).length,[nn]),Ln=g.useCallback(h=>{q(h)},[]),Bn=g.useCallback(h=>{o(N=>{const B=N.orgProfile.cst.pathway!==h.cst.pathway,Q={...N,orgProfile:h},V=B?xd(Q,h.cst.pathway):Q;return JSON.stringify(N.orgProfile)!==JSON.stringify(h)?{...V,auditLog:ve(N,[{eventType:"profile-updated",entityType:"profile",summary:"Updated CST profile details",before:{trustName:N.orgProfile.trustName,projectName:N.orgProfile.projectName,cst:N.orgProfile.cst},after:{trustName:h.trustName,projectName:h.projectName,cst:h.cst},source:"local"},...B?[{eventType:"pathway-changed",entityType:"profile",summary:`Changed pathway from ${N.orgProfile.cst.pathway} to ${h.cst.pathway}`,before:{pathway:N.orgProfile.cst.pathway},after:{pathway:h.cst.pathway},source:"local"}]:[]])}:V})},[]),Mn=h=>{let N=0,B=0,Q=0,V=0;return h.lenses.forEach(me=>{var fn,_e;const de=(fn=r.currentDraft[h.id])==null?void 0:fn[me];de&&de.score>0&&(N++,(_e=de.justification)!=null&&_e.trim()&&B++);const Te=(de==null?void 0:de.actions)||[];Q+=Te.length,V+=Te.filter(he=>Qt(he.status)).length}),N===0?{icon:"◯",color:"text-blue-100",label:"Not Started"}:N>B?{icon:"⚠",color:"text-red-300",label:"Missing Justification"}:N<h.lenses.length?{icon:"◐",color:"text-amber-300",label:"In Progress"}:Q<=0||V<Q?{icon:"◐",color:"text-amber-300",label:"In Progress"}:{icon:"✓",color:"text-green-300",label:"Completed"}},An=r.orgProfile.trustName||"Unconfigured Trust",st=r.orgProfile.projectName||"Unnamed Project",_n=!ja(r.orgProfile);return e.jsxs("div",{className:`flex h-screen overflow-hidden ${k.darkMode?"bg-slate-900 text-slate-100":"bg-slate-50 text-slate-800"}`,children:[e.jsx("div",{role:"status","aria-live":"polite",className:"sr-only",children:ue}),e.jsx("input",{ref:z,type:"file",accept:"application/json",className:"hidden",onChange:Me}),i&&e.jsx("div",{className:"fixed inset-0 z-10 bg-slate-900/35 backdrop-blur-[1px] lg:hidden",onClick:()=>l(!1)}),e.jsxs("div",{className:`fixed inset-y-0 left-0 z-20 bg-[#005eb8] text-white flex flex-col shadow-xl overflow-hidden transition-all duration-300 ease-out lg:static lg:translate-x-0 ${i?"w-72 translate-x-0":"w-0 -translate-x-full lg:w-0"}`,style:{backgroundColor:k.themeColor},children:[e.jsxs("div",{className:"p-6 border-b border-blue-700",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold tracking-tight",children:"NHS Digital Adoption"}),e.jsxs("p",{className:"text-blue-200 text-xs mt-1 flex justify-between items-center",children:[e.jsx("span",{children:"Readiness Tracking Tool"}),e.jsx("span",{className:"opacity-80 font-medium",children:"V6.6"})]})]}),k.profileImageDataUrl?e.jsx("img",{src:k.profileImageDataUrl,alt:"Profile",className:"h-10 w-10 rounded-full border-2 border-blue-200 object-cover"}):null]}),e.jsx("button",{type:"button",onClick:()=>j("profile"),className:"mt-3 w-full rounded-md bg-blue-700 p-2 text-left text-xs hover:bg-blue-600",children:e.jsxs("div",{className:"font-semibold text-blue-100",children:["Objectives: ",wn,"/",nn.length]})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto py-4",children:[e.jsxs("button",{type:"button","aria-expanded":oe.intro,onClick:()=>se(h=>({...h,intro:!h.intro})),className:"mb-2 flex w-full items-center justify-between px-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-300 hover:text-white",children:[e.jsx("span",{children:"Intro"}),e.jsx("span",{"aria-hidden":"true",children:oe.intro?"−":"+"})]}),oe.intro?e.jsx("nav",{className:"space-y-1 mb-4",children:["introduction","engine-explained","project-details","where-am-i-now"].map(h=>e.jsx("button",{ref:N=>{ze.current[`view:${h}`]=N},onClick:()=>j(h),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${c===h?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:h==="introduction"?"Introduction":h==="engine-explained"?"Engine Explained":h==="project-details"?"Project Profile":"Where Am I Now?"},h))}):null,_n?e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button","aria-expanded":oe.overview,onClick:()=>se(h=>({...h,overview:!h.overview})),className:"mb-2 flex w-full items-center justify-between px-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-300 hover:text-white",children:[e.jsx("span",{children:"Overview"}),e.jsx("span",{"aria-hidden":"true",children:oe.overview?"−":"+"})]}),oe.overview?e.jsx("nav",{className:"space-y-1 mb-4",children:["dashboard","daily-checkin","action-plan","roadmap-view"].map(h=>e.jsx("button",{ref:N=>{ze.current[`view:${h}`]=N},onClick:()=>j(h),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${c===h?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:h==="dashboard"?"Metrics Dashboard":h==="daily-checkin"?"Daily Check-in":h==="action-plan"?"Action Tracker":"Component Delivery Timeline"},h))}):null,e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Change Components"}),e.jsx("nav",{className:"space-y-2 mb-8",children:Array.from(new Set(n.map(h=>h.phase))).map(h=>{const N=n.filter(Q=>Q.phase===h),B=Ke[h]??!1;return e.jsxs("div",{className:"mx-2 overflow-hidden rounded-md",style:{backgroundColor:`${Cd[h]||"#3b82f6"}33`},children:[e.jsxs("button",{type:"button","aria-expanded":B,onClick:()=>L(Q=>({...Q,[h]:!B})),className:"flex w-full items-center justify-between px-3 pb-1.5 pt-2.5 text-left text-sm font-semibold uppercase tracking-wider text-white",children:[e.jsx("span",{children:an[h]||`Phase ${h}`}),e.jsx("span",{"aria-hidden":"true",children:B?"−":"+"})]}),B?N.map(Q=>{const V=c==="assessment"&&s===Q.id,me=Mn(Q);return e.jsxs("button",{ref:de=>{ze.current[`component:${Q.id}`]=de},onClick:()=>{H(Q.id)},className:`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${V?"bg-white font-medium text-[#005eb8]":`hover:bg-blue-800 ${me.color}`}`,children:[e.jsx("span",{className:"truncate pr-2",children:Ii(Q.label)}),e.jsx("span",{className:"text-xs flex-shrink-0",title:me.label,"aria-label":me.label,children:me.icon})]},Q.id)}):null]},h)})}),e.jsxs("button",{type:"button","aria-expanded":oe.tools,onClick:()=>se(h=>({...h,tools:!h.tools})),className:"mb-2 flex w-full items-center justify-between px-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-300 hover:text-white",children:[e.jsx("span",{children:"Tools"}),e.jsx("span",{"aria-hidden":"true",children:oe.tools?"−":"+"})]}),oe.tools?e.jsx("nav",{className:"space-y-1 mb-8",children:["highlight-builder","force-field-analysis","compare","audit-log"].map(h=>e.jsx("button",{ref:N=>{ze.current[`view:${h}`]=N},onClick:()=>j(h),className:`w-full flex items-center px-4 py-1 text-sm transition-colors ${c===h?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:h==="highlight-builder"?"Highlight Builder":h==="force-field-analysis"?"Force Field Analysis":h==="compare"?"Assess & Compare":"Audit Log"},h))}):null]}):null,e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider border-t border-blue-800 pt-6",children:"Account"}),e.jsx("nav",{className:"space-y-1 mb-8",children:(_n?["settings","profile"]:["profile"]).map(h=>e.jsx("button",{ref:N=>{ze.current[`view:${h}`]=N},onClick:()=>j(h),className:`w-full flex items-center px-4 py-1 text-sm transition-colors ${c===h?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:h==="settings"?"Settings":"Profile"},h))}),e.jsxs("div",{className:"mt-8 px-4 pb-4 border-t border-blue-800 pt-6",children:[e.jsx("div",{className:"text-[10px] font-semibold text-blue-300 uppercase tracking-wider mb-3",children:"Status Legend"}),e.jsxs("div",{className:"space-y-2 text-xs text-blue-200",children:[e.jsx("div",{children:"◯ Not Started"}),e.jsx("div",{children:"◐ In Progress"}),e.jsx("div",{children:"⚠ Missing Justification"}),e.jsx("div",{children:"✓ Completed"})]})]})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col h-screen overflow-hidden",children:[e.jsx("header",{className:`${k.darkMode?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} border-b px-3 py-2 sm:px-6 shrink-0 z-10 ${c==="introduction"?"":"shadow-sm"}`,style:{borderTop:`3px solid ${k.themeColor}`},children:e.jsxs("div",{className:"flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{className:"min-w-0 flex items-center gap-2 sm:gap-3",children:[e.jsxs("button",{onClick:()=>l(h=>!h),className:"inline-flex h-9 items-center justify-center px-3 text-white rounded-md font-semibold transition-colors shadow-sm","aria-label":i?"Collapse side navigation":"Expand side navigation",title:i?"Collapse side navigation":"Expand side navigation",style:{backgroundColor:k.themeColor},children:[e.jsx("span",{"aria-hidden":"true",className:"text-lg leading-none",children:i?"«":"»"}),e.jsx("span",{className:"sr-only",children:i?"Collapse side navigation":"Expand side navigation"})]}),e.jsx("button",{onClick:U,disabled:Ee.length===0,title:Ee.length===0?"No previous in-app page":"Back to previous page",className:`h-9 text-sm px-3 rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${k.darkMode?"text-slate-100 hover:bg-slate-700":"text-slate-600 hover:bg-slate-100"}`,children:"← Back"}),e.jsx("div",{className:"min-w-0",children:e.jsxs("div",{className:"flex min-w-0 items-center gap-1 text-sm",children:[e.jsx("span",{className:`truncate font-semibold ${k.darkMode?"text-slate-100":"text-slate-700"}`,title:An,children:An}),e.jsx("span",{className:`${k.darkMode?"text-slate-300":"text-slate-400"}`,children:"/"}),e.jsx("span",{className:`truncate ${k.darkMode?"text-slate-100":"text-slate-600"}`,title:st,children:st})]})})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 lg:justify-end",children:[e.jsxs("span",{className:"inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-800 sm:h-9 sm:w-auto sm:rounded-full",title:"Auto-save on","aria-label":"Auto-save on",children:[e.jsx("span",{className:"inline-flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white","aria-hidden":"true",children:"✓"}),e.jsx("span",{className:"sr-only sm:not-sr-only sm:ml-1",children:"Auto-save on"})]}),e.jsx("button",{onClick:()=>j("introduction"),"aria-label":"Show introduction",title:"Show introduction",className:`text-sm w-9 h-9 flex items-center justify-center bg-white text-[#425563] border border-[#768692] hover:bg-[#f0f4f5] rounded-full font-semibold transition-colors ${Xt}`,children:"?"}),e.jsx("button",{type:"button",onClick:()=>{window.location.hash="#/"},"aria-label":"Go to home page",title:"Go to home page",className:`${Ge} h-9 w-16 px-6 py-0 inline-flex items-center justify-center`,children:"Home"}),e.jsx("button",{onClick:we,className:`${Ge} h-9 px-3 py-0`,children:"Import"}),e.jsxs("button",{onClick:ce,className:`${Ge} h-9 px-3 py-0`,children:[e.jsx("span",{className:"sm:hidden",children:"Export"}),e.jsx("span",{className:"hidden sm:inline",children:"Export"})]})]})]})}),e.jsxs("main",{ref:P,className:"flex-1 overflow-y-auto p-8",children:[c==="daily-checkin"&&G?e.jsxs("section",{className:`${k.darkMode?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-6 rounded-xl border p-4 shadow-sm`,children:[e.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${k.darkMode?"text-slate-300":"text-slate-500"}`,children:"Objectives"}),e.jsxs("p",{className:`text-sm mt-1 ${k.darkMode?"text-slate-100":"text-slate-700"}`,children:[wn,"/",nn.length," complete - based on phase readiness, ownership, cadence and team participation."]})]}),e.jsx("button",{type:"button",onClick:()=>Ne(!1),className:`${k.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-2 text-sm font-medium`,"aria-label":"Dismiss objectives card",children:"Dismiss"})]}),e.jsx("div",{className:"mt-4 grid gap-3 md:grid-cols-3",children:nn.map(h=>e.jsxs("div",{className:`rounded-lg border p-3 ${h.completed?"border-green-200 bg-green-50":k.darkMode?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${k.darkMode?"text-slate-100":"text-slate-800"}`,children:h.label}),e.jsx("span",{className:"text-xs font-bold",children:h.completed?"Done":"Not yet"})]}),e.jsx("p",{className:`mt-1 text-xs ${k.darkMode?"text-slate-300":"text-slate-600"}`,children:h.description})]},h.id))})]}):null,c==="dashboard"&&e.jsx("div",{ref:T,children:e.jsx(ho,{store:r,components:n,lenses:t,metrics:be,phaseFocusMode:k.phaseFocusMode||"auto",manualPhaseFocus:k.manualPhaseFocus,onPhaseFocusModeChange:h=>q(N=>({...N,phaseFocusMode:h,manualPhaseFocus:h==="manual"?N.manualPhaseFocus||be.currentPhase:N.manualPhaseFocus})),onManualPhaseFocusChange:h=>q(N=>({...N,phaseFocusMode:"manual",manualPhaseFocus:h})),onResetPhaseFocus:()=>q(h=>({...h,phaseFocusMode:"auto",manualPhaseFocus:be.currentPhase})),getEntry:X,onComponentClick:H,onNavigate:j,onOpenLensInfo:m,onOpenOnboarding:()=>j("introduction"),colorAccessibilityMode:k.colorAccessibilityMode||"standard",darkMode:!!k.darkMode,componentRadarVisible:ye,onComponentRadarVisibleChange:ne,componentRadarSize:De,onComponentRadarSizeChange:$e})}),c==="where-am-i-now"&&e.jsx(wl,{components:n,getEntry:X,effectivePhaseFocus:Ce,phaseFocusMode:k.phaseFocusMode||"auto",onComponentClick:H,onSetManualPhase:h=>q(N=>({...N,phaseFocusMode:"manual",manualPhaseFocus:h})),onResetToAuto:()=>q(h=>({...h,phaseFocusMode:"auto",manualPhaseFocus:be.currentPhase})),darkMode:!!k.darkMode}),c==="daily-checkin"&&e.jsx(_r,{store:r,components:n,metrics:be,getEntry:X,onComponentClick:H,onActionView:xe,guidanceTarget:Ea,linkOverrides:r.orgProfile.linkOverrides,showAdditionalGuidanceLinks:pe,phaseFocusMode:k.phaseFocusMode||"auto",manualPhaseFocus:k.manualPhaseFocus,colorAccessibilityMode:k.colorAccessibilityMode||"standard",darkMode:!!k.darkMode}),c==="project-details"&&e.jsx(kr,{orgProfile:r.orgProfile,onProfileUpdate:Bn,components:n,lenses:t,onComponentClick:H,onGoToIntroduction:()=>j("introduction"),onContinueToVision:()=>H("vision"),onGoToWhereAmINow:()=>j("where-am-i-now"),currentUserId:p,onCurrentUserChange:S,showExternalLinksSection:!!k.showExternalLinksSection,darkMode:!!k.darkMode}),c==="assessment"&&e.jsx(fr,{store:r,components:n,activeComponentId:s,getRubricText:Od,getEntry:X,onComponentChange:H,onEntryUpdate:Xe,onOpenLensInfo:m,onActionRemove:(h,N,B)=>{const V=X(h,N).actions.find(de=>de.id===B);if(!V)return;const me=window.prompt("Please provide a reason for removing this action. This will be included in the JSON export audit log.");if(!me||!me.trim()){window.alert("Removal cancelled. A reason is required to remove an action.");return}o(de=>{var kn;const Te=((kn=de.currentDraft[h])==null?void 0:kn[N])||_t(),fn={...Te,actions:Te.actions.filter(mn=>mn.id!==B).map(kd)},_e={...de.suppressedAutoActions};if(B.startsWith("vision-action:")||B.startsWith("case-for-change-action:")||B.startsWith("benefits-action:")||B.startsWith("sponsorship-action:")||B.startsWith("change-impact-action:")){const mn=jd(h,N),On=_e[mn]||[];On.includes(B)||(_e[mn]=[...On,B])}const he={...de,currentDraft:{...de.currentDraft,[h]:{...de.currentDraft[h],[N]:fn}},suppressedAutoActions:_e};return{...Cn(he),auditLog:ve(de,[{eventType:"action-removed",entityType:"action",entityId:B,summary:`Removed action from ${h} / ${N}`,componentId:h,lens:N,reason:me.trim(),before:{text:V.text,status:V.status,owner:V.owner,actionType:V.actionType},source:"local"}])}})},onObjectivesUpdate:y,onNavigateToTool:h=>j(h),hideGuidedWorkflow:!!k.hideGuidedWorkflow,onHideGuidedWorkflow:()=>q(h=>({...h,hideGuidedWorkflow:!0})),showAdditionalGuidanceLinks:pe,showActionPriorityColours:!!k.showActionPriorityColours,currentUserId:p,currentUserProfileImageDataUrl:k.profileImageDataUrl,darkMode:!!k.darkMode,focusAction:ee,onFocusActionHandled:()=>ae(null)}),c==="action-plan"&&e.jsx(qi,{actions:Ae,onComponentClick:H,onStatusChange:En,teamMembers:r.orgProfile.teamMembers||[],darkMode:!!k.darkMode}),c==="introduction"&&e.jsx(cl,{darkMode:!!k.darkMode,onGetStarted:()=>j("engine-explained")}),c==="engine-explained"&&e.jsx(Dr,{darkMode:!!k.darkMode,onGetStarted:()=>j("project-details"),onComponentClick:H}),c==="roadmap-view"&&e.jsx(Vr,{components:n,metrics:be,getEntry:X,onComponentClick:H,pathway:r.orgProfile.cst.pathway,pathwayChecks:r.pathwayChecks,darkMode:!!k.darkMode}),c==="highlight-builder"&&e.jsx(el,{store:r,metrics:be,lenses:t,components:n,getEntry:X,trustName:r.orgProfile.trustName,projectName:r.orgProfile.projectName,themeColor:k.themeColor,currentUserId:p,darkMode:!!k.darkMode}),c==="force-field-analysis"&&e.jsx(ji,{embedded:!0,onBack:()=>j("dashboard")}),c==="compare"&&e.jsx(Gi,{embedded:!0,onBack:()=>j("dashboard")}),c==="audit-log"&&e.jsx(xr,{events:r.auditLog,darkMode:!!k.darkMode}),c==="settings"&&e.jsx(bl,{userSettings:k,onUserSettingsUpdate:Ln,onLoadExampleData:ke,onResetData:en,darkMode:!!k.darkMode}),c==="profile"&&e.jsx(hl,{orgProfile:r.orgProfile,onProfileUpdate:Bn,userSettings:k,onUserSettingsUpdate:Ln,currentUserId:p,onCurrentUserChange:S,objectives:nn,darkMode:!!k.darkMode})]}),d?e.jsx(il,{lensName:d,onClose:()=>m(""),darkMode:!!k.darkMode}):null,I?e.jsx(sl,{report:I.report,myLabel:r.orgProfile.projectName||r.orgProfile.trustName||"Mine",theirLabel:((Vn=I.parsed.orgProfile)==null?void 0:Vn.projectName)||((at=I.parsed.orgProfile)==null?void 0:at.trustName)||I.file.name,onResolve:Fe,onCancel:je,darkMode:!!k.darkMode}):null,e.jsx(Vi,{toolkitChoice:r.orgProfile.cst.toolkitChoice,darkMode:!!k.darkMode}),e.jsx(Hi,{open:c==="assessment"&&s==="vision"&&v.isOpen,onClose:v.close,darkMode:!!k.darkMode}),e.jsx(Oa,{open:ge!==null,onCancel:()=>fe(null),onContinue:h=>{ge&&(h&&tn(Qn,!0),un(ge.componentId,ge.lens,ge.actionId,ge.status),fe(null))},darkMode:!!k.darkMode})]})]})}export{qd as AdoptionApp,qd as default};
