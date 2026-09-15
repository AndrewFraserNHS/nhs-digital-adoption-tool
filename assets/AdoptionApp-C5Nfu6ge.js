import{r as g,j as e,a as Gt}from"./vendor-react-nTLHQtbJ.js";import{n as Ge,a as Ht,A as pi,b as Vn,c as vs,F as xo}from"./ForceFieldAnalysisApp-COAN0Pt1.js";import{l as it,s as ze,d as Ut,e as yo}from"./utils-Dnh79fEb.js";import{g as pa,p as vo,G as So,d as wo}from"./vendor-misc-XphrxPy-.js";import{g as No,D as jo,p as ko,P as hi,a as On,T as Co,O as fi,C as Eo,b as Io,i as Ao}from"./moscow-C4QZk_bL.js";import{A as Ss,a as Dt,U as ws,n as et,i as Ns,b as Oo,d as os}from"./actionModel-BGfmvkyd.js";import{A as en,g as rs,a as Tn}from"./components-D25Uzw0S.js";import{C as dt}from"./vendor-chart--cLemJB8.js";import _o from"./CompareApp-dv1Cx8yh.js";const un="nhs-digital-adoption-evidence-warning-dismissed";function bi({open:t,onContinue:n,onCancel:s,darkMode:a=!1}){const[i,l]=g.useState(!1);return t?e.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"evidence-warning-title",className:`w-full max-w-md rounded-xl border p-6 shadow-2xl ${a?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsx("h2",{id:"evidence-warning-title",className:`text-lg font-semibold ${a?"text-slate-100":"text-slate-900"}`,children:"Evidence reminder"}),e.jsx("p",{className:`mt-3 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:"Please don't forget to attach evidence if you have it"}),e.jsxs("label",{className:`mt-4 flex items-center gap-2 text-sm ${a?"text-slate-200":"text-slate-700"}`,children:[e.jsx("input",{type:"checkbox",checked:i,onChange:o=>l(o.target.checked),className:"h-4 w-4 rounded border-slate-400"}),"Don't show this message again"]}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:s,className:Ge,children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>n(i),className:Ht,children:"Continue"})]})]})}):null}const Ro="nhs-digital-adoption-page-intro-seen:";function ht(t){const n=`${Ro}${t}`,[s,a]=g.useState(()=>!it(n));return{isOpen:s,close:()=>{ze(n,!0),a(!1)},reopen:()=>a(!0)}}function St({open:t,onClose:n,title:s,body:a,darkMode:i=!1}){return t?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45",children:e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-lg rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-900"}`,children:s}),e.jsx("button",{type:"button",onClick:n,"aria-label":"Close introduction",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${i?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:`mt-3 space-y-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:a}),e.jsx("div",{className:"mt-5 flex justify-end",children:e.jsx("button",{type:"button",onClick:n,className:Ht,children:"Got it"})})]})}):null}function wt({onClick:t,darkMode:n=!1}){return e.jsx("button",{type:"button",onClick:t,"aria-label":"Show page introduction",title:"Show page introduction",className:`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${n?"border-slate-600 text-slate-200 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"?"})}const Sn=[{title:"Explain your vision state",body:e.jsx("div",{className:"text-sm text-slate-700 space-y-2",children:e.jsx("p",{children:"Start by assessing where Vision stands today for each lens - be honest about the current state, not where you'd like it to be."})})},{title:"Assign owners to actions",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"Every action needs a named owner - without one, nothing moves and progress stalls."}),e.jsx("p",{children:"As owners complete or cancel every action at a readiness level, that lens automatically advances to the next level."})]})}];function Do({open:t,onClose:n,darkMode:s=!1}){const[a,i]=g.useState(0);if(!t)return null;const l=Sn[a],o=a===Sn.length-1;return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`relative w-full max-w-lg rounded-xl border p-6 shadow-2xl ${s?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${s?"text-blue-300":"text-blue-600"}`,children:["Getting started · Step ",a+1," of ",Sn.length]}),e.jsx("h3",{className:`mt-3 text-lg font-semibold ${s?"text-slate-100":"text-slate-900"}`,children:l.title}),e.jsx("div",{className:`mt-3 ${s?"text-slate-300":""}`,children:l.body}),e.jsxs("div",{className:"mt-6 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:()=>i(c=>Math.max(0,c-1)),disabled:a===0,className:`rounded-md border px-4 py-2 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${s?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Back"}),o?e.jsx("button",{type:"button",onClick:n,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Got it"}):e.jsx("button",{type:"button",onClick:()=>i(c=>Math.min(Sn.length-1,c+1)),className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Next"})]})]})})}const Po={"avt-v2-2026":[{id:"avt-vision-case-for-change",title:"Vision and Case for Change",pageHint:"Section: Early readiness",text:"Use a clear case for change, define outcomes, and ensure leadership sponsorship before go-live."},{id:"avt-stakeholder-engagement",title:"Stakeholder Engagement",pageHint:"Section: People and communication",text:"Map stakeholder groups, identify adoption risks, and use targeted communication plans for each audience."},{id:"avt-training-readiness",title:"Training and Capability",pageHint:"Section: Capability and learning",text:"Align learning interventions with role-based needs and verify confidence through readiness checkpoints."},{id:"avt-benefits-tracking",title:"Benefits Tracking",pageHint:"Section: Value realisation",text:"Set measurable adoption indicators and review benefit evidence at regular intervals post go-live."},{id:"avt-reinforcement-bau",title:"Reinforcement and BAU Transfer",pageHint:"Section: Sustainment",text:"Embed reinforcement actions and hand over ownership to business-as-usual teams for sustained adoption."}],"change-management-v3-2023":[{id:"cmt-leadership-alignment",title:"Leadership Alignment",pageHint:"Section: Sponsorship and governance",text:"Secure visible executive sponsorship and align governance with programme milestones and risks."},{id:"cmt-change-impact",title:"Change Impact Assessment",pageHint:"Section: Planning and risk",text:"Assess process, role, and behaviour impacts early and prioritise mitigations before deployment."},{id:"cmt-resistance-management",title:"Resistance Management",pageHint:"Section: Adoption barriers",text:"Identify likely resistance themes and define practical interventions with named owners and timelines."},{id:"cmt-comms-cadence",title:"Communication Cadence",pageHint:"Section: Communications",text:"Establish a predictable communication cadence using concise updates and feedback loops."},{id:"cmt-post-go-live-support",title:"Post Go-Live Support",pageHint:"Section: Stabilisation",text:"Provide hypercare support with clear escalation routes and transition criteria into steady state."}]};So.workerSrc=vo;function $o({toolkitChoice:t,darkMode:n=!1}){const[s,a]=g.useState(!1),[i,l]=g.useState(!1),[o,c]=g.useState(""),[d,m]=g.useState(1),[r,f]=g.useState("idle"),[b,h]=g.useState(""),[x,E]=g.useState([]),S=g.useMemo(()=>No(t),[t]),u=g.useMemo(()=>(Po[t]||[]).map(p=>({id:p.id,title:p.title,pageHint:p.pageHint,text:p.text,pageNumber:null})),[t]);g.useEffect(()=>{if(!s)return;let p=!1;return(async()=>{f("loading"),h("");try{const D=await fetch(S.path);if(!D.ok)throw new Error(`HTTP ${D.status}`);const V=await D.arrayBuffer(),le=new Uint8Array(V);let re;try{re=await pa({data:le}).promise}catch(L){if(re=await pa({data:le,disableWorker:!0}).promise,!p){const ne=L instanceof Error?L.message:String(L);h(`Worker fallback used: ${ne}`)}}const w=[];for(let L=1;L<=re.numPages;L+=1){if(p)return;const Ae=(await(await re.getPage(L)).getTextContent()).items.map(Fe=>"str"in Fe?Fe.str:"").join(" ").replace(/\s+/g," ").trim();Ae&&w.push({id:`${t}-page-${L}`,title:`Page ${L}`,pageHint:`Page ${L}`,text:Ae,pageNumber:L})}p||(E(w),f("ready"))}catch{p||(E([]),f("error"),h("Unable to read PDF text for indexing in this browser session."))}})(),()=>{p=!0}},[s,S.path,t]),g.useEffect(()=>{m(1),c(""),E([]),f("idle"),h("")},[t]);const C=x.length>0?x:u,R=g.useMemo(()=>{const p=Number.isFinite(d)&&d>0?Math.floor(d):1;return`${S.path}#page=${p}`},[S.path,d]),k=g.useMemo(()=>{const p=o.trim().toLowerCase();if(!p)return C.slice(0,5).map(V=>({entry:V,score:0}));const B=p.split(/\s+/).filter(Boolean),D=V=>{const le=`${V.title} ${V.text} ${V.pageHint}`.toLowerCase();let re=0;return le.includes(p)&&(re+=8),B.forEach(w=>{le.includes(w)?re+=2:le.split(/\W+/).some(ne=>ne&&(ne.includes(w)||w.includes(ne)))&&(re+=1)}),re};return C.map(V=>({entry:V,score:D(V)})).filter(V=>V.score>0).sort((V,le)=>le.score-V.score).slice(0,5)},[o,C])[0]||null;return g.useEffect(()=>{o.trim()&&k!=null&&k.entry.pageNumber&&m(k.entry.pageNumber)},[k,o]),e.jsxs("div",{className:"fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2","data-testid":"global-toolkit-chatbot",children:[s?e.jsxs("div",{className:`w-[380px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border shadow-2xl ${n?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant"}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("button",{type:"button",onClick:()=>l(!0),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Maximise"}),e.jsx("button",{type:"button",onClick:()=>a(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Minimise"})]})]}),e.jsxs("div",{className:`space-y-3 p-3 ${n?"bg-slate-800":"bg-slate-50"}`,children:[e.jsxs("div",{className:`max-w-[95%] rounded-2xl rounded-bl-md px-3 py-2 text-xs shadow-sm ${n?"bg-slate-700 text-slate-100":"bg-white text-slate-700"}`,children:["Showing your selected toolkit from Project Profile:",e.jsx("div",{className:"mt-1 font-semibold",children:S.label})]}),e.jsx("div",{className:`overflow-hidden rounded-lg border ${n?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:e.jsx("iframe",{title:"Selected Toolkit Preview",src:R,className:"h-[260px] w-full"})}),e.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-end gap-2",children:[e.jsx("label",{htmlFor:"toolkit-page-input",className:`text-[11px] font-semibold uppercase tracking-wider ${n?"text-slate-300":"text-slate-600"}`,children:"Go to page"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{id:"toolkit-page-input",type:"number",min:1,value:d,onChange:p=>m(Number(p.target.value)||1),className:`w-20 rounded-md border px-2 py-1.5 text-xs ${n?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})})]}),e.jsxs("div",{className:`rounded-lg border p-2 ${n?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsx("label",{htmlFor:"toolkit-fuzzy-search",className:`mb-1 block text-[11px] font-semibold uppercase tracking-wider ${n?"text-slate-300":"text-slate-600"}`,children:"Quick snippet search"}),e.jsx("input",{id:"toolkit-fuzzy-search",type:"search",value:o,onChange:p=>c(p.target.value),placeholder:"Try: sponsorship, training, resistance",className:`w-full rounded-md border px-2 py-1.5 text-xs ${n?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-400":"border-slate-300 bg-white text-slate-900 placeholder-slate-500"}`}),e.jsx("div",{className:"mt-2",children:o.trim()?k!=null&&k.entry.pageNumber?e.jsxs("button",{type:"button",onClick:()=>{m(k.entry.pageNumber),l(!0)},className:`w-full rounded-md px-2 py-1.5 text-left text-xs font-semibold ${n?"bg-slate-800 text-slate-100 hover:bg-slate-700":"bg-slate-100 text-slate-800 hover:bg-slate-200"}`,children:["Go to best match: Page ",k.entry.pageNumber]}):e.jsx("p",{className:`text-xs ${n?"text-slate-400":"text-slate-500"}`,children:"No close page match found. Try broader keywords."}):e.jsx("p",{className:`text-xs ${n?"text-slate-400":"text-slate-500"}`,children:"Enter a keyword to jump to the most relevant page."})}),e.jsx("p",{className:`mt-2 text-[11px] ${n?"text-slate-400":"text-slate-500"}`,children:r==="loading"?"Indexing toolkit text from all pages...":r==="ready"?`Search is using full-document text (${x.length} pages indexed).`:r==="error"?"Full-document indexing unavailable, using fallback snippets.":"Search will expand to all pages when the assistant opens."}),b?e.jsx("p",{className:`mt-1 text-[11px] ${n?"text-amber-300":"text-amber-700"}`,children:b}):null]}),e.jsx("a",{href:S.path,target:"_blank",rel:"noopener noreferrer",className:"inline-block text-xs font-semibold text-[#005eb8] underline",children:"Open full toolkit in new tab"})]})]}):null,i?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4",children:e.jsxs("div",{className:`relative h-[90vh] w-[95vw] overflow-hidden rounded-2xl border shadow-2xl ${n?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant · Expanded Viewer"}),e.jsx("button",{type:"button",onClick:()=>l(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Close"})]}),e.jsx("iframe",{title:"Selected Toolkit Full View",src:R,className:"h-[calc(90vh-42px)] w-full"})]})}):null,e.jsx("button",{type:"button",onClick:()=>a(p=>!p),className:"inline-flex items-center gap-2 rounded-full bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-blue-700","aria-label":"Open toolkit assistant",children:"Toolkit assistant"})]})}function xi({showAdvancedControls:t,onToggleAdvanced:n,onReset:s,resultText:a,activeFilters:i,activeFiltersAriaLabel:l,darkMode:o=!1}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:n,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${o?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:t?"Hide advanced controls":"Show advanced controls"}),e.jsx("button",{type:"button",onClick:s,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${o?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:"Reset filters"}),e.jsx("span",{className:`text-xs ${o?"text-slate-300":"text-slate-500"}`,"aria-live":"polite",children:a})]}),i.length>0?e.jsx("div",{className:"flex flex-wrap gap-2","aria-label":l,children:i.map(c=>e.jsx("span",{className:`inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-slate-50 text-slate-700"}`,children:c},c))}):null]})}function To({actions:t,onComponentClick:n,onStatusChange:s,teamMembers:a=[],darkMode:i=!1}){const l=ht("action-tracker"),[o,c]=g.useState(""),[d,m]=g.useState("all"),[r,f]=g.useState("all"),[b,h]=g.useState("all"),[x,E]=g.useState("all"),[S,u]=g.useState("all"),[C,R]=g.useState("component"),[j,k]=g.useState("asc"),[p,B]=g.useState(!1),D=g.useCallback(U=>{n(U)},[n]),V=g.useMemo(()=>Array.from(new Set(t.map(U=>U.component))).sort((U,de)=>U.localeCompare(de)),[t]),le=g.useMemo(()=>Array.from(new Set([...a.map(U=>U.name),...t.map(U=>U.action.owner).filter(Boolean)])).sort((U,de)=>U.localeCompare(de)),[t,a]),re=g.useMemo(()=>Array.from(new Set(t.map(U=>U.action.status))).sort((U,de)=>U.localeCompare(de)),[t]),w=g.useMemo(()=>{const U=t.map(de=>de.action.actionType).filter(de=>!!de);return Array.from(new Set([...Ss,...U])).sort((de,ce)=>de.localeCompare(ce))},[t]),L=g.useMemo(()=>{const U=t.map(de=>de.action.readinessScore).filter(de=>de!==void 0);return Array.from(new Set(U)).sort((de,ce)=>de-ce)},[t]),ne={0:"Not Started",1:"Emerging",2:"Developing",3:"Embedding",4:"Adopted",5:"Thriving"},xe=g.useMemo(()=>{const U=o.trim().toLowerCase();return t.filter(ce=>d!=="all"&&ce.component!==d||r!=="all"&&ce.action.owner!==r||b!=="all"&&ce.action.status!==b||x!=="all"&&(ce.action.actionType||"")!==x||S!=="all"&&ce.action.readinessScore!==S?!1:U?[ce.component,ce.lens,ce.action.text,ce.action.actionType||"",ce.action.owner,ce.action.timescale,ce.action.status].join(" ").toLowerCase().includes(U):!0).sort((ce,fe)=>{const Se=me=>{switch(C){case"lens":return me.lens;case"owner":return me.action.owner||"Unassigned";case"status":return me.action.status;case"actionType":return me.action.actionType||"Unassigned";case"component":default:return me.component}},ye=Se(ce).localeCompare(Se(fe));return j==="asc"?ye:-ye})},[x,t,d,r,S,o,C,j,b]),Ae=g.useMemo(()=>{const U=[];return o.trim()&&U.push(`Search: ${o.trim()}`),d!=="all"&&U.push(`Component: ${d}`),b!=="all"&&U.push(`Status: ${b}`),x!=="all"&&U.push(`Action type: ${x}`),S!=="all"&&U.push(`Readiness: ${ne[S]}`),r!=="all"&&U.push(`Owner: ${r}`),(C!=="component"||j!=="asc")&&U.push(`Sort: ${C} (${j})`),U},[x,d,r,S,o,C,j,b]),Fe=()=>{c(""),m("all"),f("all"),h("all"),E("all"),u("all"),R("component"),k("asc"),B(!1)};return e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"mb-6 flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${i?"text-slate-100":"text-slate-800"}`,children:"Action Tracker"}),e.jsx(wt,{onClick:l.reopen,darkMode:i})]}),e.jsx(St,{open:l.isOpen,onClose:l.close,title:"Action Tracker",darkMode:i,body:e.jsx("p",{children:"Every action across every component in one searchable, filterable, sortable table. Filter by component, owner, status, action type or readiness score, and click a row's component to jump straight to its assessment."})}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-4 mb-6 space-y-3`,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:o,onChange:U=>c(U.target.value),placeholder:"Search actions, owners, lenses...",className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-900 text-slate-100":"text-slate-900"}`}),e.jsxs("select",{value:d,onChange:U=>m(U.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All components"}),V.map(U=>e.jsx("option",{value:U,children:U},U))]}),e.jsxs("select",{value:b,onChange:U=>h(U.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All statuses"}),re.map(U=>e.jsx("option",{value:U,children:U},U))]})]}),e.jsx(xi,{showAdvancedControls:p,onToggleAdvanced:()=>B(U=>!U),onReset:Fe,resultText:`Showing ${xe.length} actions`,activeFilters:Ae,activeFiltersAriaLabel:"Active action tracker filters",darkMode:i}),p?e.jsxs("div",{className:`grid grid-cols-1 sm:grid-cols-5 gap-3 rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("select",{value:r,onChange:U=>f(U.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),le.map(U=>e.jsx("option",{value:U,children:U},U))]}),e.jsxs("select",{value:x,onChange:U=>E(U.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),w.map(U=>e.jsx("option",{value:U,children:U},U))]}),e.jsxs("select",{value:S==="all"?"all":String(S),onChange:U=>u(U.target.value==="all"?"all":Number(U.target.value)),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All readiness levels"}),L.map(U=>e.jsx("option",{value:String(U),children:ne[U]},U))]}),e.jsxs("select",{value:C,onChange:U=>R(U.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"component",children:"Sort: Component"}),e.jsx("option",{value:"lens",children:"Sort: Lens"}),e.jsx("option",{value:"owner",children:"Sort: Owner"}),e.jsx("option",{value:"actionType",children:"Sort: Action Type"}),e.jsx("option",{value:"status",children:"Sort: Status"})]}),e.jsx("button",{type:"button",onClick:()=>k(U=>U==="asc"?"desc":"asc"),className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${i?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-white"}`,children:j==="asc"?"A-Z":"Z-A"})]}):null]}),e.jsx("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:xe.length?e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:`min-w-full table-fixed ${i?"divide-slate-700":"divide-slate-200"} divide-y`,children:[e.jsx("thead",{className:i?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Change Component"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Lens"}),e.jsx("th",{className:`w-[22%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Action Type"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Timescale"}),e.jsx("th",{className:`w-[14%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Status"})]})}),e.jsx("tbody",{className:`${i?"bg-slate-800 divide-slate-700":"bg-white divide-slate-100"} divide-y`,children:xe.map(({compId:U,component:de,lens:ce,action:fe})=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:e.jsx("button",{onClick:()=>D(U),className:"text-left underline underline-offset-2 hover:text-[#005eb8] transition-colors",children:de})}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:ce}),e.jsx("td",{className:`w-[22%] px-4 py-3 text-sm whitespace-normal break-words leading-snug ${i?"text-slate-100":"text-slate-700"}`,children:fe.text}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:fe.actionType||"Unassigned"}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:fe.owner}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:fe.timescale}),e.jsx("td",{className:"w-[14%] px-4 py-3 text-sm",children:e.jsx("select",{"aria-label":`Status for ${fe.text}`,value:et(fe.status),onChange:Se=>s==null?void 0:s(U,ce,fe.id,Se.target.value),className:`w-full rounded-md border px-2 py-1 text-xs font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] ${Dt[et(fe.status)]} ${i?"bg-slate-900":"bg-white"}`,children:ws.map(Se=>e.jsx("option",{value:Se,children:Se},Se))})})]},`${U}-${ce}-${fe.text}`))})]})}):e.jsx("div",{className:`p-6 ${i?"text-slate-300":"text-slate-500"}`,children:t.length?"No actions match the current filters.":"No actions recorded yet."})})]})}const tt={1:"Pre-Discovery",2:"Solution Design",3:"Development",4:"Deployment / Go Live",5:"Post-Deployment"},Lo={sampleRubric:[{id:"r1",label:"Leadership",max:5},{id:"r2",label:"Culture",max:5}],adoptionRubric:[{id:"a1",label:"Adoption awareness",max:100},{id:"a2",label:"Training coverage",max:100}],vision:{"Strategic Direction and Leadership":{1:"Senior leaders take initial steps to develop the vision through workshops and discussions, beginning to align on a shared future direction and its link to strategic objectives.",2:"A draft vision has been created and is being tested and refined with a wider group to check clarity, relevance and alignment to strategy.",3:"A clear vision is defined and agreed at senior level but not yet consistently communicated to all stakeholders.",4:"Senior leaders consistently communicate the vision and link it to organisational goals, priorities and decisions.",5:"Leaders speak with one voice about the vision, actively reinforcing it through actions and decisions and ensuring it is well understood across the organisation."},"People Experience and Culture":{1:"Early conversations focus on what is changing but staff involvement is limited. The vision is not yet clear or meaningful to most people.",2:"The draft vision is tested with a wider audience. Staff input is sought to check relevance and whether the vision reflects real experiences and concerns. Feedback is used to refine the vision.",3:`The vision is defined but not yet consistently communicated to all stakeholders.

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

There is a clearer plan for sustainment, although it is still being embedded and tested.`,3:"Key processes, roles, and measures are in place and being followed. The change is being maintained in practice, with issues identified and addressed as they arise.",4:"The change is embedded into day-to-day operations. Processes are consistently followed, and performance is stable, with benefits starting to be realised.",5:"The change is fully sustained as “the way we do things.” Processes are regularly reviewed and improved, and performance continues to strengthen over time."}}},yi=["highlight-builder","force-field-analysis","compare","change-impact-assessment","stakeholder-analysis","raid-log"],In={"highlight-builder":{label:"Highlight Builder",matchText:"Highlight Builder"},"force-field-analysis":{label:"Force Field Analysis",matchText:"Force Field Analysis"},compare:{label:"Assess & Compare",matchText:"Assess & Compare"},"change-impact-assessment":{label:"Change Impact Assessment",matchText:"Change Impact Assessment"},"stakeholder-analysis":{label:"Stakeholder Analysis",matchText:"Stakeholder Analysis"},"raid-log":{label:"RAID Log",matchText:"RAID Log"}};function ls(t,n){if(!t.linkedActions.length)return"Not Started";const s=t.linkedActions.map(a=>{const i=(n[a.lens]||[]).find(l=>l.id===a.actionId);return(i==null?void 0:i.status)||"Planned"});return s.some(a=>a==="Blocked")?"Blocked":s.every(a=>a==="Completed")?"Completed":s.some(a=>a!=="Planned")?"In Progress":"Not Started"}const Ln={groups:["SRO","Manager","Trades Union","Programme","Project","Trainer","Clinical","Arms Length Body","CCG","GP","CSU","Staff"],subGroups:["LRH","GH","Community","CGC office"],departments:["Ward 1","Ward 2","Ward 3","Ward 4","Pharmacy","Pathology","A+E","Main Reception","Exec Offices","GP Practices","IT","HR","Comms"],relationships:["Customer","Provider","Influencer","Governance"]};function ha(){return`cst-${Date.now()}-${Math.random().toString(36).slice(2,10)}`}function Mn(t){return{trustName:(t==null?void 0:t.trustName)||"",region:(t==null?void 0:t.region)||"",trustType:(t==null?void 0:t.trustType)||"",projectName:(t==null?void 0:t.projectName)||"",leadName:(t==null?void 0:t.leadName)||"",cst:{...jo,...(t==null?void 0:t.cst)||{}},linkOverrides:t==null?void 0:t.linkOverrides,componentFurtherReading:t==null?void 0:t.componentFurtherReading,coreLinks:t==null?void 0:t.coreLinks,customComponentLinks:t==null?void 0:t.customComponentLinks,toolLinks:(t==null?void 0:t.toolLinks)??yi.map(n=>({key:`tool-default-${n}`,tool:n,matchText:In[n].matchText})),externalLinksInitiated:t==null?void 0:t.externalLinksInitiated,teamMembers:(t==null?void 0:t.teamMembers)||[],stakeholderReferenceLists:(t==null?void 0:t.stakeholderReferenceLists)||Ln,cstId:t==null?void 0:t.cstId}}function Mo(t){return t?Object.keys(t).reduce((n,s)=>{const a=t[s]||{};return n[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},n},{}):{}}function _n(t){return{view:(t==null?void 0:t.view)||"dashboard",orgProfile:Mn(t==null?void 0:t.orgProfile),currentDraft:(t==null?void 0:t.currentDraft)||{},objectives:t!=null&&t.objectives?ks(t.objectives):{},suppressedAutoActions:Bo(t==null?void 0:t.suppressedAutoActions),auditLog:Go(t==null?void 0:t.auditLog),history:(t==null?void 0:t.history)||[],phaseOverrides:(t==null?void 0:t.phaseOverrides)||{},pathwayChecks:Mo(t==null?void 0:t.pathwayChecks)}}function Bo(t){return t?Object.keys(t).reduce((n,s)=>(n[s]=[...t[s]||[]],n),{}):{}}function Go(t){return t?t.map(n=>({...n})):[]}function qn(){return{score:0,rationale:"",evidence:"",actions:[]}}function vi(t){return{score:t.score,rationale:t.rationale,evidence:t.evidence,actions:t.actions.map(n=>({...n,linkedTargets:(n.linkedTargets||[]).map(s=>({componentId:s.componentId,lens:s.lens}))}))}}function js(t){return Object.keys(t).reduce((n,s)=>(n[s]=Object.keys(t[s]).reduce((a,i)=>(a[i]=vi(t[s][i]),a),{}),n),{})}function Fo(t){return{...t,linkedActions:t.linkedActions.map(n=>({...n}))}}function ks(t){return Object.keys(t).reduce((n,s)=>(n[s]=(t[s]||[]).map(Fo),n),{})}function Si(t,n){if(t<=0)return"Amber";const s=n-t;return s>=2?"Red":s>0?"Amber":"Green"}function Uo(t,n=new Date){if(t.length===0)return{status:"Green",reason:"No outstanding actions at the current level."};const s=t.map(c=>({action:c,due:c.dueDate?new Date(c.dueDate):null})).map(({action:c,due:d})=>({action:c,due:d&&!isNaN(d.getTime())?d:null})),a=s.filter(({due:c})=>c!==null&&c<n);if(a.length>0){const c=a.length>1?` and ${a.length-1} more`:"";return{status:"Red",reason:`${a.length} action${a.length===1?" is":"s are"} overdue: "${a[0].action.text}"${c}.`}}const i=new Date(n.getTime()+14*24*60*60*1e3),l=s.filter(({due:c})=>c!==null&&c<=i);return l.length>0?{status:"Amber",reason:`${l.length} action${l.length===1?" is":"s are"} due within 14 days: "${l[0].action.text}".`}:s.filter(({due:c})=>c===null).length===t.length?{status:"Amber",reason:`${t.length} action${t.length===1?" has":"s have"} no due date set, so timeline risk can't be assessed.`}:{status:"Green",reason:"All outstanding actions are on track against their due dates."}}const wi={Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},Ho={Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"},cs={1:{vision:5,case_for_change:5,sponsorship:0,change_network:0,benefits:0,change_impact:0,risk_management:0,cm_readiness:0,stakeholder:0,resistance:0,skills_learning:0,capability:0,change_adoption:0,process_change:0,reinforcement:0,org_maturity:0,transfer_bau:0},2:{vision:5,case_for_change:5,sponsorship:2,change_network:2,benefits:3,change_impact:2,risk_management:2,cm_readiness:2,stakeholder:2,resistance:2,skills_learning:2,capability:2,change_adoption:2,process_change:3,reinforcement:2,org_maturity:2,transfer_bau:2},3:{vision:5,case_for_change:5,sponsorship:3,change_network:3,benefits:4,change_impact:3,risk_management:3,cm_readiness:3,stakeholder:3,resistance:3,skills_learning:4,capability:3,change_adoption:3,process_change:4,reinforcement:3,org_maturity:3,transfer_bau:3},4:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:4,stakeholder:5,resistance:4,skills_learning:5,capability:4,change_adoption:4,process_change:5,reinforcement:4,org_maturity:4,transfer_bau:4},5:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:5,stakeholder:5,resistance:5,skills_learning:5,capability:5,change_adoption:5,process_change:5,reinforcement:5,org_maturity:5,transfer_bau:5}};function Qt(t,n,s){return!n||!cs[n]?s:cs[n][t]??s}function Wo(t){const n=Number((t==null?void 0:t.score)||0),s=((t==null?void 0:t.actions)||[]).some(a=>a.readinessScore===0);return n===0&&!s?1:n}function Vo(t,n){const s=[];return t.lenses.forEach(a=>{const i=n(t.id,a),l=Wo(i);((i==null?void 0:i.actions)||[]).forEach(o=>{(o.readinessScore??l)===l&&!Ns(o.status)&&s.push({id:o.id,text:o.text,lens:a,owner:o.owner||"",status:o.status||"",dueDate:o.dueDate||""})})}),s}function Ni(t,n,s){return t.filter(a=>a.phase===s).map(a=>{const i=Vo(a,n),{status:l,reason:o}=Uo(i),c=`${i.length} action${i.length===1?"":"s"} pending completion.`;return{componentId:a.id,componentLabel:a.label,phase:a.phase,gapToTarget:0,bragStatus:l,bragReason:o,summary:c,message:`${a.label}: ${c}`,outstandingActions:i}}).filter(a=>a.outstandingActions.length>0).sort((a,i)=>{const l={Red:0,Amber:1,Green:2,Blue:3};return l[a.bragStatus]!==l[i.bragStatus]?l[a.bragStatus]-l[i.bragStatus]:i.outstandingActions.length-a.outstandingActions.length})}function qo(t,n){var E;let s=0,a=0,i=0,l=0;const o=new Map;n.forEach(S=>{const u=o.get(S.phase)||{componentCount:0,assessedLenses:0,totalLenses:0,onTrackComponents:0,totalActions:0,completedActions:0};u.componentCount+=1,u.totalLenses+=S.lenses.length;let C=0;S.lenses.forEach(k=>{var V;const p=(V=t.currentDraft[S.id])==null?void 0:V[k],B=Number((p==null?void 0:p.score)||0);s+=B,C+=B,B>0&&(a+=1,u.assessedLenses+=1),((p==null?void 0:p.actions)||[]).forEach(le=>{i+=1,u.totalActions+=1,Ns(le.status)&&(l+=1,u.completedActions+=1)})});const R=S.lenses.length?Number((C/S.lenses.length).toFixed(1)):0,j=Qt(S.id,S.phase,S.target);R>=j&&(u.onTrackComponents+=1),o.set(S.phase,u)});const c=n.reduce((S,u)=>S+u.lenses.length,0),d=c*5,m=d?Math.round(s/d*100):0,r=i?Math.round(l/i*100):0,f=[...o.entries()].sort(([S],[u])=>S-u).map(([S,u])=>{const C=u.totalActions?Math.round(u.completedActions/u.totalActions*100):0,R=u.componentCount?u.onTrackComponents/u.componentCount:0,j=R>=.75&&C>=50?"Green":R>=.4||C>=25?"Amber":"Red";return{phase:S,componentCount:u.componentCount,assessedLenses:u.assessedLenses,totalLenses:u.totalLenses,onTrackComponents:u.onTrackComponents,actionCompletionPct:C,rag:j}}),b=f.find(S=>S.onTrackComponents<S.componentCount),h=(b==null?void 0:b.phase)||((E=f[f.length-1])==null?void 0:E.phase)||1,x=Ni(n,(S,u)=>{var C;return(C=t.currentDraft[S])==null?void 0:C[u]},h);return{totalCurrent:s,assessedCount:a,totalExpected:c,overallPct:m,totalActions:i,completedActions:l,actionCompletionPct:r,currentPhase:h,phaseSummaries:f,nextSteps:x}}function Yo(t,n,s,a){return n.map(i=>{let l=0,o=0;return s.forEach(c=>{c.lenses.includes(i)&&(l+=Number(a(c.id,i).score||0),o+=1)}),o?Number((l/o).toFixed(1)):0})}function zo(t,n){return t.map(s=>{let a=0,i=0;return n.forEach(l=>{l.lenses.includes(s)&&(a+=l.target,i+=1)}),i?Number((a/i).toFixed(1)):0})}function Ko(t,n,s,a){const i=Yo(t,n,s,a),l=zo(n,s);return{labels:n,datasets:[{label:"Current Score",data:i,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",borderWidth:2,pointRadius:4,pointHoverRadius:6},{label:"Target",data:l,borderColor:"#00A499",backgroundColor:"rgba(0, 164, 153, 0.05)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function ds(t,n,s,a){const i=s&&cs[s]?s:null,l=c=>c<=0?"#768692":c<1.5?"#AE2521":c<2.5?"#FFB81C":c<3.5?"#005EB8":c<4.5?"#330072":"#00A499",o=t.map(c=>{if(a)return c.lenses.includes(a)?Number(n(c.id,a).score||0):null;const d=c.lenses.map(f=>n(c.id,f));if(!d.some(f=>f.score>0||!!f.rationale.trim()||!!f.evidence.trim()||f.actions.length>0))return null;const r=d.map(f=>Number(f.score||0));return r.length?Math.min(...r):null});return{labels:t.map(c=>c.label),datasets:[{label:a?`Current Readiness (${a})`:"Current Readiness (weakest lens)",data:o,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.12)",borderWidth:2,pointRadius:o.map(c=>c===null?0:4),pointHoverRadius:o.map(c=>c===null?0:6),pointBackgroundColor:o.map(c=>l(c??0)),pointBorderColor:o.map(c=>l(c??0))},{label:i?`Exemplar (Phase ${i})`:"Target Average",data:t.map(c=>Qt(c.id,i||void 0,c.target)),borderColor:"#94a3b8",backgroundColor:"rgba(148, 163, 184, 0.06)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function Jo(t,n,s){const a=[],i=new Set,l=(o,c,d)=>{const m=`${d.id}:${o}:${c}`;if(i.has(m))return;i.add(m);const r=n(o);a.push({compId:o,component:r.label,lens:c,action:{...d}})};return Object.keys(t.currentDraft).forEach(o=>{Object.keys(t.currentDraft[o]).forEach(c=>{(s(o,c).actions||[]).forEach(m=>{(m.linkedTargets&&m.linkedTargets.length?m.linkedTargets:[{componentId:o,lens:c}]).forEach(f=>{l(f.componentId,f.lens,m)})})})}),a}function Xo(t,n,s){var d;const a=((d=t.objectives)==null?void 0:d[n])||[],i=m=>m.reduce((r,f)=>(r[f]=s(n,f).actions,r),{}),l=Array.from(new Set(a.flatMap(m=>m.linkedActions.map(r=>r.lens)))),o=i(l),c=a.filter(m=>ls(m,o)==="Completed").length;return{total:a.length,completed:c}}const fa=7*24*60*60*1e3,Qo=30*24*60*60*1e3;function Zo(t,n,s){const a=[];n.phaseSummaries.forEach(x=>{const E=tt[x.phase]||`Phase ${x.phase}`;a.push({id:`phase-${x.phase}-assessed`,category:"Phase",label:`Phase ${x.phase}: ${E} - fully assessed`,description:"Every lens across this phase's components has been scored.",completed:x.totalLenses>0&&x.assessedLenses===x.totalLenses}),a.push({id:`phase-${x.phase}-on-track`,category:"Phase",label:`Phase ${x.phase}: ${E} - on track`,description:"Every component in this phase is scoring at or above its exemplar target for where the programme is now.",completed:x.componentCount>0&&x.onTrackComponents===x.componentCount})});const i=Object.values(t.currentDraft).flatMap(x=>Object.values(x).flatMap(E=>E.actions||[]));a.push({id:"all-actions-owned",category:"Ownership",label:"Every action has an owner",description:"No actions are left unassigned.",completed:i.length>0&&i.every(x=>{var E;return!!((E=x.owner)!=null&&E.trim())})});const l=Object.values(t.objectives||{}).flat();a.push({id:"all-outcomes-owned",category:"Ownership",label:"Every outcome has an owner",description:"No outcomes are left unassigned.",completed:l.length>0&&l.every(x=>{var E;return!!((E=x.owner)!=null&&E.trim())})});const o=Date.now(),c=t.auditLog||[],d=c.filter(x=>o-new Date(x.timestamp).getTime()<=fa);a.push({id:"active-this-week",category:"Cadence",label:"Active this week",description:"At least one update has been made in the last 7 days.",completed:d.length>0});const m=new Set;c.forEach(x=>{const E=Math.floor((o-new Date(x.timestamp).getTime())/fa);E>=0&&E<4&&m.add(E)}),a.push({id:"four-week-cadence",category:"Cadence",label:"Steady progress: updated every week for a month",description:`${m.size}/4 of the last 4 weeks have at least one update.`,completed:m.size>=4}),a.push({id:"month-finalised",category:"Cadence",label:"This month finalised",description:"The current month has a finalised snapshot, so progress this month is captured for the trend.",completed:(t.history||[]).some(x=>x.monthLabel===s)});const r=t.orgProfile.teamMembers||[];a.push({id:"team-roster-started",category:"Team",label:"Team roster started",description:"At least 2 team members have been added.",completed:r.length>=2});const f=c.filter(x=>o-new Date(x.timestamp).getTime()<=Qo),b=new Set(f.map(x=>x.actor));a.push({id:"multiple-contributors",category:"Team",label:"Multiple contributors this month",description:"More than one person has made updates in the last 30 days.",completed:b.size>=2});const h=new Set(i.map(x=>{var E;return(E=x.owner)==null?void 0:E.trim().toLowerCase()}).filter(x=>!!x));return a.push({id:"ownership-spread",category:"Team",label:"Ownership spread across the team",description:"Actions are owned by more than one person, not concentrated on one.",completed:h.size>=2}),a}const hn=["Strategic Direction and Leadership","People Experience and Culture","Planning and Risk","Skills and Behaviour","Process and Sustainment"],Cs={"Strategic Direction and Leadership":{outcome:"Provide a clear and unifying direction for the change, backed by visible, empowered leadership that removes barriers, prioritises resources, and drives accountability.",whatGoodLooksLike:"Leaders speak with one voice, consistently reinforcing the vision and outcomes. Decisions are timely, transparent, and aligned to strategic priorities. Governance is purposeful, with clear roles and escalations. Everyone understands why the change is happening and how it connects to organisational goals."},"People Experience and Culture":{outcome:"Create the conditions where people feel informed, supported, safe, and motivated, creating a culture that embraces the change rather than resists it.",whatGoodLooksLike:"Staff feel involved, heard, and respected. Communication is timely, honest, and tailored to different roles. People know how the change affects them and feel psychologically safe to raise concerns. Change Champions are active, engagement is high, and belief improves over time. Behaviours begin to shift organically as trust grows."},"Planning and Risk":{outcome:"Use evidence, data, and structured analysis to plan the change effectively, anticipate impacts, manage risks, and inform decision-making throughout delivery.",whatGoodLooksLike:"Impacts are well understood and documented. Risks are identified early and mitigated proactively. Baselines and KPIs are established before implementation, with benefits tracked throughout. Pilots and readiness checks ensure no surprises. Decisions are grounded in insight, not opinion."},"Skills and Behaviour":{outcome:"Give people the capabilities, confidence, and behavioural habits they need to adopt the new ways of working consistently and sustainably.",whatGoodLooksLike:"Staff are trained, assessed, and supported in ways that match real-world workflows. New behaviours are clearly defined, reinforced by leaders, and evident in day-to-day practice. Change Champions and Super-users are active; confidence grows over time; and requests for support decrease as competence increases."},"Process and Sustainment":{outcome:"Embed the change into operational processes, ensuring it becomes the way we do things, and create mechanisms for continuous improvement and long-term stability.",whatGoodLooksLike:"Updated SOPs, workflows, and ownership structures are in place and being followed. Issues are resolved quickly. Benefits are monitored and reported regularly. Improvements continue beyond go-live, with clear BAU ownership. The change stabilises and performance gains hold or increase over time."}},er={vision:"Defines the future state and why the change matters.",case_for_change:"Builds a clear, credible rationale and expected benefits.",sponsorship:"Secures visible leadership ownership, governance, and decisions.",change_network:"Builds and mobilises change agents and local champions.",benefits:"Tracks baseline, benefits ownership, and value realisation.",change_impact:"Assesses who is impacted and the scale of change required.",risk_management:"Identifies, tracks, and mitigates adoption and delivery risks.",cm_readiness:"Confirms readiness, sequencing, and change planning discipline.",stakeholder:"Plans and delivers stakeholder engagement and communications.",resistance:"Anticipates and addresses resistance with practical interventions.",skills_learning:"Designs learning, support, and reinforcement for role readiness.",capability:"Builds confidence and competence to adopt new ways of working.",change_adoption:"Measures uptake and consistency of new behaviours in practice.",process_change:"Embeds workflow changes into everyday operational delivery.",reinforcement:"Sustains momentum so adoption does not decay after launch.",org_maturity:"Improves long-term organisational change capability and maturity.",transfer_bau:"Transitions ownership into BAU with clear accountability."};function ji(t){return er[t]||"Component description not yet defined."}function ms(t){const s=Cs[t];return s?`This lens ${s.outcome.charAt(0).toLowerCase()}${s.outcome.slice(1)}`:"This lens provides an additional perspective on how each component is landing across teams and services."}const Wt=[{score:0,label:"Not Started",color:"#768692"},{score:1,label:"Emerging",color:"#AE2521"},{score:2,label:"Developing",color:"#FFB81C"},{score:3,label:"Embedding",color:"#005EB8"},{score:4,label:"Adopted",color:"#330072"},{score:5,label:"Thriving",color:"#00A499"}];function Et(t){return Wt[Math.max(0,Math.min(Wt.length-1,Math.round(t)))]}const ba={small:560,medium:680,large:1e3};function xa(t,n,s,a,i){return i?"Blue":s<=0?"N/A":a<=0?"Amber":t>=n&&a<s?"Green":Si(t,n)}const tr={"N/A":"text-slate-600 bg-slate-200",Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},ya=["#0f766e","#0369a1","#7c3aed","#b45309","#be123c"],nr=Wt;function sr({store:t,components:n,lenses:s,metrics:a,getEntry:i,onComponentClick:l,onNavigate:o,onOpenLensInfo:c,onOpenOnboarding:d,colorAccessibilityMode:m="standard",darkMode:r=!1,phaseFocusMode:f="auto",manualPhaseFocus:b,onPhaseFocusModeChange:h,onManualPhaseFocusChange:x,onResetPhaseFocus:E,componentRadarVisible:S=!0,onComponentRadarVisibleChange:u,componentRadarSize:C="medium",onComponentRadarSizeChange:R}){const j=ht("dashboard"),[k,p]=g.useState(""),[B,D]=g.useState("all"),[V,le]=g.useState(()=>a.currentPhase),[re,w]=g.useState("all"),[L,ne]=g.useState("score"),[xe,Ae]=g.useState("desc"),[Fe,U]=g.useState(!1),de=g.useMemo(()=>[...new Set(n.map($=>$.phase))].sort(($,ie)=>$-ie),[n]),ce=a.currentPhase,fe=f==="manual"&&b&&de.includes(b)?b:ce,[Se,ye]=g.useState(!0),me=g.useMemo(()=>t.history.length>0?t.history[t.history.length-1]:null,[t.history]),Ce=me!==null?a.overallPct-me.overallPercentage:null,Le=g.useMemo(()=>{const $=new Date;$.setHours(0,0,0,0);const ie=new Date($);ie.setDate($.getDate()+7);const Z=[];return n.forEach(we=>{we.lenses.forEach(Ee=>{i(we.id,Ee).actions.forEach(Re=>{if(!Re.dueDate||Re.status==="Completed"||Re.status==="Cancelled")return;const Pe=new Date(Re.dueDate);isNaN(Pe.getTime())||Pe<=ie&&Z.push({action:Re,componentLabel:we.label,componentId:we.id,isOverdue:Pe<$})})})}),Z.sort((we,Ee)=>new Date(we.action.dueDate).getTime()-new Date(Ee.action.dueDate).getTime())},[n,i,t.currentDraft]),Ue=g.useMemo(()=>{const $=k.trim().toLowerCase();return n.map(ie=>{let Z=0,we=!0,Ee=0,Re=0;ie.lenses.forEach(P=>{const Y=i(ie.id,P),z=Number(Y.score||0);Z+=z,z!==5&&(we=!1);const oe=Y.actions||[];Ee+=oe.length,Re+=oe.filter(ue=>ue.status==="Completed").length});const Pe=Number((Z/ie.lenses.length).toFixed(1)),N=Qt(ie.id,fe,ie.target),M=Pe===0?"not-started":Pe>=N?"on-track":"below-target";let _=null;if(me){let P=0;ie.lenses.forEach(oe=>{var ue,je;P+=Number(((je=(ue=me.data[ie.id])==null?void 0:ue[oe])==null?void 0:je.score)||0)});const Y=Number((P/ie.lenses.length).toFixed(1)),z=Number((Pe-Y).toFixed(1));z!==0&&(_=z)}return{component:ie,avgNum:Pe,exemplarTarget:N,status:M,delta:_,actionCount:Ee,completedActionCount:Re,allLensesLevelFive:we}}).filter(({component:ie,status:Z})=>B!=="all"&&Z!==B||V!=="all"&&ie.phase!==V?!1:$?ie.label.toLowerCase().includes($):!0).sort((ie,Z)=>{let we=0;return L==="name"?we=ie.component.label.localeCompare(Z.component.label):L==="target"?we=ie.component.target-Z.component.target:we=ie.avgNum-Z.avgNum,xe==="asc"?we:-we})},[n,V,fe,i,me,k,L,xe,B]),G=g.useMemo(()=>{const $=[];return k.trim()&&$.push(`Search: ${k.trim()}`),B!=="all"&&$.push(`Status: ${B.replace("-"," ")}`),V!=="all"&&$.push(`Phase: ${V}`),(L!=="score"||xe!=="desc")&&$.push(`Sort: ${L} (${xe})`),$},[V,k,L,xe,B]),W=()=>{p(""),D("all"),le("all"),ne("score"),Ae("desc"),U(!1)},X=a.phaseSummaries.find($=>$.phase===fe),_e=(X==null?void 0:X.rag)||"Red",ot=_e.toLowerCase(),Ye=m==="color-blind-friendly"?{"N/A":"text-slate-700 bg-slate-200",Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"}:tr;return e.jsxs("div",{className:`adoption-dashboard max-w-6xl mx-auto ${r?"theme-dark":"theme-light"}`,children:[Se&&Le.length>0&&e.jsx("div",{className:"mb-6 rounded-lg border border-red-200 bg-red-50 p-4",children:e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-sm font-semibold text-red-800 mb-2",children:[Le.filter($=>$.isOverdue).length>0&&`${Le.filter($=>$.isOverdue).length} overdue action${Le.filter($=>$.isOverdue).length>1?"s":""}`,Le.filter($=>$.isOverdue).length>0&&Le.filter($=>!$.isOverdue).length>0&&", ",Le.filter($=>!$.isOverdue).length>0&&`${Le.filter($=>!$.isOverdue).length} due within 7 days`]}),e.jsxs("ul",{className:"space-y-1.5",children:[Le.slice(0,3).map($=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`shrink-0 text-xs font-bold px-1.5 py-0.5 rounded ${$.isOverdue?"bg-red-200 text-red-800":"bg-amber-100 text-amber-800"}`,children:$.isOverdue?"Overdue":"Due soon"}),e.jsxs("span",{className:"text-xs text-slate-700",children:[e.jsx("button",{onClick:()=>l($.componentId),className:"font-medium text-[#005eb8] hover:underline mr-1",children:$.componentLabel}),"— ",$.action.text,$.action.dueDate&&e.jsxs("span",{className:"text-slate-400 ml-1",children:["(due"," ",new Date($.action.dueDate).toLocaleDateString("en-GB",{day:"numeric",month:"short"}),")"]})]})]},$.action.id)),Le.length>3&&e.jsxs("li",{className:"text-xs text-slate-500 pl-1",children:["+ ",Le.length-3," more - see the Action Tracker for the full list."]})]})]}),e.jsx("button",{onClick:()=>ye(!1),className:"shrink-0 text-slate-400 hover:text-slate-600 text-xl leading-none","aria-label":"Dismiss",children:"×"})]})}),e.jsxs("div",{className:"mb-1 flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${r?"text-slate-100":"text-slate-800"}`,children:"Adoption Engine Dashboard"}),e.jsx(wt,{onClick:j.reopen,darkMode:r})]}),d?e.jsx("button",{type:"button",onClick:d,className:"rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Show introduction again"}):null]}),e.jsxs("p",{className:`text-sm mb-6 ${r?"text-slate-300":"text-slate-600"}`,children:["This tracks how ready ",t.orgProfile.projectName||"your programme"," is for adoption, based on ",n.length," change-management components, each assessed through up to"," ",s.length," lenses."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-4 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${r?"text-slate-300":"text-slate-500"}`,children:"Live Delivery Progress"}),e.jsxs("div",{className:"flex items-end gap-3",children:[e.jsxs("span",{className:"text-3xl font-bold text-[#005eb8]",children:[a.overallPct,"%"]}),Ce!==null&&e.jsxs("span",{className:`text-sm font-semibold mb-1 ${Ce>0?"text-green-600":Ce<0?"text-red-500":"text-slate-400"}`,children:[Ce>0?"↑":Ce<0?"↓":"="," ",Math.abs(Ce),"% vs last month"]})]}),e.jsx("div",{className:"mt-4 w-full bg-slate-100 rounded-full h-3 relative overflow-hidden",children:e.jsx("div",{className:"absolute top-0 left-0 h-full bg-[#005eb8]",style:{width:`${a.overallPct}%`}})}),e.jsx("div",{className:"flex justify-between text-xs mt-2 text-slate-400",children:e.jsx("span",{children:"Derived from current working data across all components."})})]}),e.jsxs("div",{className:`dashboard-metric-card dashboard-metric-card--phase dashboard-metric-card--${ot} rounded-lg shadow-sm p-4 border`,children:[e.jsx("h3",{className:"dashboard-metric-card__label text-sm font-medium mb-1",children:"Current Phase Focus"}),e.jsxs("div",{className:"mb-2 flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>h==null?void 0:h("auto"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${f==="auto"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Auto"}),e.jsx("button",{type:"button",onClick:()=>h==null?void 0:h("manual"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${f==="manual"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Manual"}),f==="manual"?e.jsx("select",{value:fe,onChange:$=>x==null?void 0:x(Number($.target.value)),className:"rounded-md border border-white/50 bg-white/90 px-2 py-1 text-xs font-medium text-slate-800","aria-label":"Manual phase focus",children:de.map($=>e.jsx("option",{value:$,children:tt[$]||`Phase ${$}`},$))}):null,f==="manual"&&E?e.jsx("button",{type:"button",onClick:E,className:"rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100",children:"Reset to suggested"}):null]}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsx("span",{className:"dashboard-metric-card__headline text-3xl font-bold",children:tt[fe]||`Phase ${fe}`})}),e.jsxs("p",{className:"dashboard-metric-card__description text-sm mt-2",children:[_e," status based on delivery progress and action completion.",f==="manual"?` Suggested phase is ${tt[ce]||`Phase ${ce}`}.`:""]})]}),e.jsxs("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-4 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${r?"text-slate-300":"text-slate-500"}`,children:"Action Completion"}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsxs("span",{className:`text-3xl font-bold ${r?"text-slate-100":"text-slate-700"}`,children:[a.actionCompletionPct,"%"]})}),e.jsxs("p",{className:`text-sm mt-2 ${r?"text-slate-300":"text-slate-500"}`,children:[a.completedActions," actions completed. Keep it up!"]})]})]}),e.jsxs("div",{className:`mb-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border px-4 py-3 ${r?"border-blue-800 bg-blue-950/40 text-slate-200":"border-blue-200 bg-blue-50 text-slate-700"}`,children:[e.jsx("p",{className:"text-sm",children:"Need a focused view of what needs attention today?"}),o?e.jsx("button",{type:"button",onClick:()=>o("daily-checkin"),className:"font-semibold text-[#005eb8] underline underline-offset-2 hover:text-[#003087]",children:"Open Daily Check-in"}):null]}),a.assessedCount===0?e.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-8 border border-slate-200 mb-8 text-center",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800",children:"Getting started"}),e.jsx("p",{className:"text-sm text-slate-600 mt-2 max-w-xl mx-auto",children:"Nothing has been assessed yet, so there's nothing to chart. Set up your Project first, then start scoring your first component to see your readiness build up here."}),e.jsxs("div",{className:"mt-4 flex items-center justify-center gap-3",children:[o?e.jsx("button",{type:"button",onClick:()=>o("project-details"),className:"rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Set up your Project"}):null,n[0]?e.jsx("button",{type:"button",onClick:()=>l(n[0].id),className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Start your first assessment"}):null]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-1 ${r?"text-slate-100":"text-slate-800"}`,children:"Phase Progress"}),e.jsxs("p",{className:`text-sm mb-4 ${r?"text-slate-300":"text-slate-500"}`,children:["Phases run 1 to 5, from early readiness at go-live through to fully embedding the change."," ",o?e.jsx("button",{type:"button",onClick:()=>o("engine-explained"),className:"font-medium text-[#005eb8] hover:underline",children:"See how the Adoption Engine works"}):null]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:a.phaseSummaries.map($=>{const ie=$.rag==="Green"?"bg-green-100 text-green-700":$.rag==="Amber"?"bg-amber-100 text-amber-700":"bg-red-100 text-red-700",Z=$.totalLenses?Math.round($.assessedLenses/$.totalLenses*100):0;return e.jsxs("div",{className:`rounded-md border p-4 ${r?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:`font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:tt[$.phase]||`Phase ${$.phase}`}),e.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded ${ie}`,children:$.rag})]}),e.jsxs("p",{className:`text-xs ${r?"text-slate-300":"text-slate-600"}`,children:[$.onTrackComponents,"/",$.componentCount," components on target"]}),e.jsxs("p",{className:`text-xs mt-1 ${r?"text-slate-300":"text-slate-600"}`,children:[Z,"% lens coverage, ",$.actionCompletionPct,"% actions complete"]})]},$.phase)})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("details",{className:`order-2 mb-8 overflow-hidden rounded-lg border shadow-sm group ${r?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between px-5 py-4 text-lg font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] [&::-webkit-details-marker]:hidden ${r?"text-slate-100 hover:bg-slate-700":"text-slate-800 hover:bg-slate-50"}`,children:[e.jsx("span",{children:"Readiness analytics"}),e.jsx("span",{className:"text-2xl font-normal transition-transform group-open:rotate-45",children:"+"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 border-t border-slate-200 p-5 lg:grid-cols-2 dark:border-slate-700",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h3",{className:`mb-3 text-base font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:"Readiness Trajectory"}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${r?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:t.history.length>0?e.jsx("canvas",{id:"adoption-line-chart"}):e.jsx("div",{className:"text-center text-slate-400",children:e.jsx("p",{children:"No historical data yet. Finalise your first month to generate trends."})})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:"Strategic Lenses Spread"}),c&&s[0]?e.jsx("button",{type:"button",onClick:()=>c(s[0]),className:"text-xs font-medium text-[#005eb8] hover:underline",children:"What's a lens?"}):null]}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${r?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:e.jsx("canvas",{id:"adoption-radar-chart"})}),e.jsxs("div",{className:`${r?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mt-4 rounded-md border p-3`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${r?"text-slate-300":"text-slate-600"}`,children:"Lens key"}),e.jsx("div",{className:"mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2",children:s.map(($,ie)=>e.jsxs("div",{className:`flex items-center gap-2 text-xs ${r?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full",style:{backgroundColor:ya[ie%ya.length]},"aria-hidden":"true"}),e.jsx("span",{children:$})]},`lens-key-${$}`))})]}),e.jsx("p",{className:`text-xs text-center mt-4 ${r?"text-slate-300":"text-slate-500"}`,children:"Visualises your current draft readiness score averaged across the 5 strategic lenses against their specific target requirements."})]})]})]}),e.jsxs("div",{className:`order-1 ${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"mb-4 flex w-full flex-col gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:`text-lg font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:"Change Component Radar"}),e.jsx("p",{className:`text-xs mt-1 ${r?"text-slate-300":"text-slate-500"}`,children:"Show or hide the change-component readiness radar, then use the overview list below to drill into delivery status."})]}),e.jsxs("div",{className:"flex w-full flex-wrap items-center justify-end gap-2",children:[S?e.jsx("div",{role:"group","aria-label":"Change component radar size",className:"flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-medium",children:["small","medium","large"].map($=>e.jsx("button",{type:"button",onClick:()=>R==null?void 0:R($),"aria-pressed":C===$,className:`px-3 py-2 capitalize transition-colors ${C===$?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:$},$))}):null,e.jsx("button",{type:"button",onClick:()=>u==null?void 0:u(!S),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-white",children:S?"Hide change component radar":"Show change component radar"})]})]}),S?e.jsxs("div",{className:`w-full ${r?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("div",{className:`mx-auto flex items-center justify-center rounded border p-2 ${r?"border-slate-700 bg-slate-950":"border-slate-100 bg-white"}`,style:{height:ba[C],maxWidth:ba[C]+120},children:e.jsx("canvas",{id:"adoption-component-radar-chart",className:"block h-full w-full"})}),e.jsx("div",{id:"radar-legend",className:`mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm ${r?"text-slate-300":"text-slate-600"}`,children:nr.map($=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mr-2 h-3 w-3 rounded-full",style:{backgroundColor:$.color}}),e.jsx("span",{children:$.label})]},$.score))}),e.jsx("p",{className:`mt-4 text-center text-xs ${r?"text-slate-300":"text-slate-500"}`,children:"Visualises the weakest lens score for each component (a component is only as ready as its weakest lens) against the phase exemplar profile. Click a component label to jump to its assessment."})]}):null,e.jsxs("div",{className:"mt-4 w-full space-y-3",children:[e.jsxs("p",{className:`text-xs ${r?"text-slate-300":"text-slate-500"}`,children:["BRAG scoring is used for the change component overview:",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-sky-100 text-sky-800",children:"Blue"})," = every lens is level 5,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-green-100 text-green-800",children:"Green"})," = on target,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-red-100 text-red-800",children:"Red"})," = behind target dates,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-amber-100 text-amber-800",children:"Amber"})," = at risk / nearing deadline."]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:k,onChange:$=>p($.target.value),placeholder:"Search components...",className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"}),e.jsxs("select",{value:B,onChange:$=>D($.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All statuses"}),e.jsx("option",{value:"not-started",children:"Not started"}),e.jsx("option",{value:"below-target",children:"Below target"}),e.jsx("option",{value:"on-track",children:"On track"})]}),e.jsxs("select",{value:V,onChange:$=>le($.target.value==="all"?"all":Number($.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All phases"}),de.map($=>e.jsx("option",{value:$,children:tt[$]||`Phase ${$}`},$))]})]}),e.jsx(xi,{showAdvancedControls:Fe,onToggleAdvanced:()=>U($=>!$),onReset:W,resultText:`Showing ${Ue.length} components`,activeFilters:G,activeFiltersAriaLabel:"Active component filters",darkMode:r}),Fe?e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-md border border-slate-200 bg-slate-50 p-3",children:[e.jsxs("select",{value:L,onChange:$=>ne($.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"score",children:"Sort by score"}),e.jsx("option",{value:"name",children:"Sort by name"}),e.jsx("option",{value:"target",children:"Sort by target"})]}),e.jsx("button",{type:"button",onClick:()=>Ae($=>$==="asc"?"desc":"asc"),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white transition-colors",children:xe==="asc"?"Ascending":"Descending"})]}):null]}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:[Ue.map(({component:$,avgNum:ie,exemplarTarget:Z,actionCount:we,completedActionCount:Ee,delta:Re,allLensesLevelFive:Pe})=>{const N=xa(ie,Z,we,Ee,Pe),M=N==="Red"?"↓":ie>=Z?"→":ie<=0?"↑":"↗",_=N==="Red"?"text-red-500":ie>=Z?r?"text-slate-300":"text-slate-500":"text-amber-600";return e.jsxs("button",{onClick:()=>l($.id),title:ji($.id),className:`flex justify-between items-center p-3 rounded-md transition-colors group text-left ${r?"bg-slate-900 border border-slate-700 hover:border-blue-400":"bg-slate-50 border border-slate-100 hover:border-blue-300"}`,children:[e.jsx("span",{className:`text-sm font-medium truncate pr-2 group-hover:text-[#005eb8] ${r?"text-slate-100":"text-slate-700"}`,children:$.label}),e.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[e.jsx("span",{className:`text-xs font-semibold ${_}`,title:ie>=Z?"On or above expected readiness for phase focus":ie<=0?"Not started: raise towards expected readiness":"Below expected readiness: continue improving","aria-label":ie>=Z?"At expected readiness":ie<=0?"Not started, increase readiness":"Below expected readiness",children:M}),Re!==null&&e.jsxs("span",{className:`text-[11px] font-semibold ${Re>0?"text-green-600":"text-red-400"}`,title:"Change versus last finalised month",children:[Re>0?"+":"",Re.toFixed(1)]}),e.jsx("span",{className:`text-xs font-bold px-2.5 py-1 rounded ${Ye[N]}`,children:N})]})]},$.id)}),!Ue.length&&e.jsx("div",{className:`col-span-full rounded-md border border-dashed p-6 text-sm ${r?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-500"}`,children:"No components match the current filters."})]})]})]}),e.jsxs("details",{className:`mb-8 overflow-hidden rounded-lg border shadow-sm group ${r?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between px-5 py-4 text-lg font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] [&::-webkit-details-marker]:hidden ${r?"text-slate-100 hover:bg-slate-700":"text-slate-800 hover:bg-slate-50"}`,children:[e.jsx("span",{children:"Lenses and which components they apply to"}),e.jsx("span",{className:"text-2xl font-normal transition-transform group-open:rotate-45",children:"+"})]}),e.jsxs("div",{className:"border-t border-slate-200 p-5 dark:border-slate-700",children:[e.jsxs("div",{className:"flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsx("div",{children:e.jsx("p",{className:"mt-2 text-xs text-slate-600 max-w-3xl",children:"A component is the change topic you are delivering (for example, Vision). A lens is the angle used to assess that component. For example, Vision is reviewed through Strategic Direction and Leadership and People Experience and Culture to check both leadership alignment and whether people understand and believe in the vision."})}),e.jsxs("select",{value:re,onChange:$=>w($.target.value==="all"?"all":Number($.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:w-40",children:[e.jsx("option",{value:"all",children:"All phases"}),de.map($=>e.jsx("option",{value:$,children:tt[$]||`Phase ${$}`},$)),'"']})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map($=>{const ie=n.filter(Z=>Z.lenses.includes($)).filter(Z=>re==="all"||Z.phase===re);return ie.length?e.jsxs("div",{className:`rounded-md p-4 ${r?"border border-slate-700 bg-slate-900":"border border-slate-100 bg-slate-50"}`,children:[e.jsx("h4",{className:"font-bold text-sm text-[#005eb8] mb-3",children:$}),e.jsx("p",{className:`mb-3 text-xs ${r?"text-slate-300":"text-slate-600"}`,children:ms($)}),e.jsx("ul",{className:"space-y-2",children:ie.map(Z=>{const we=i(Z.id,$),Ee=Number(we.score||0),Re=Qt(Z.id,fe,Z.target),Pe=we.actions||[],N=xa(Ee,Re,Pe.length,Pe.filter(M=>M.status==="Completed").length,!1);return e.jsxs("li",{className:`text-xs flex justify-between items-center p-2 rounded ${r?"bg-slate-800 border border-slate-700":"bg-white border border-slate-100"}`,children:[e.jsx("span",{className:`truncate pr-2 font-medium ${r?"text-slate-100":"text-slate-700"}`,children:Z.label}),e.jsx("button",{onClick:()=>l(Z.id),className:`px-2.5 py-0.5 rounded font-bold ${Ye[N]}`,children:N})]},Z.id)})})]},$):null})})]})]})]}),e.jsx(St,{open:j.isOpen,onClose:j.close,title:"Adoption Engine Dashboard",darkMode:r,body:e.jsx("p",{children:"This tracks how ready your programme is for adoption, based on your change-management components, each assessed through several lenses. Use the filters and sort controls to focus on what needs attention, and click a component to open its assessment."})})]})}const Ft={label:"Change Management Toolkit",url:"https://future.nhs.uk/CMN/view?objectId=129489733"};function Es(t,n){var o,c,d,m,r;if(!n)return t;const s=(o=n.links)==null?void 0:o[t.key],a=(c=s==null?void 0:s.url)==null?void 0:c.trim(),i=((d=s==null?void 0:s.label)==null?void 0:d.trim())||t.label;return a?{...t,label:i,url:a}:((s==null?void 0:s.fallback)??"default")==="base"&&((r=(m=n.base)==null?void 0:m.url)!=null&&r.trim())?{...t,label:i,url:n.base.url.trim()}:{...t,label:i}}const ar="nhs-guidance-workstreams",ki={vision:["Vision"],case_for_change:["Case for Change"],sponsorship:["Senior Sponsorship & Governance"],change_network:["Change Network"],benefits:["Benefits"],change_impact:["Change Impact"],risk_management:["Risk Management"],cm_readiness:["Change Management Readiness & Planning"],stakeholder:["Stakeholder Engagement & Comms"],resistance:["Resistance Management"],skills_learning:["Skills/Learning"],capability:["Change Management Capability"],change_adoption:["Reinforcement"],process_change:["Process change"],reinforcement:["Reinforcement"],org_maturity:["Change Management Capability"],transfer_bau:["Reinforcement"]},q=(t,n,s,a)=>({key:`fnhs_${t}`,label:n,url:`https://future.nhs.uk/CMN/view?objectId=${t}`,type:s,...a?{description:a}:{}}),Ci=[q("44704752","FuturesNHS Change Management Network","core","The wider NHS community for change management practice, discussion and shared resources.")],Xt={Vision:{inputs:[q("37515792","Vision for Change","core","Supports development and communication of a clear future vision."),q("34039056","Mind Map","core","Captures and organises stakeholder viewpoints when developing the vision."),q("34039088","Rich Picture and Storytelling","core","Creates a visual and narrative representation of the desired future state."),q("34039184","Sinek's Golden Circle","core","Structures the vision around why, how and what."),q("34037808","Systems Thinking","core","Supports consideration of the wider system when defining the future state."),q("34018288","Stakeholder Analysis Tool","core","Identifies the stakeholders who should help shape and validate the vision."),q("34039024","Sponsor Coalition Map","additional","Identifies leaders and visible supporters who can reinforce the vision."),q("69484112","SHIFT: A Strategic Change Management Approach","additional","Provides an additional strategic approach for shaping and aligning change.")]},"Case for Change":{inputs:[q("44287088","Case for Change","core","Supports creation of a clear and compelling rationale for change."),q("42608592","Beckhard and Harris' Change Formula","core","Tests whether the conditions needed to overcome the perceived cost of change are present."),q("34037360","Force Field Analysis","core","Identifies the forces driving and restraining the change."),q("34037232","Benefits Workshop","core","Brings stakeholders together to identify and develop the benefits of change."),q("34040176","Benefits Map","core","Links benefits, outcomes, enabling changes and strategic objectives."),q("45000208","What's in it for me? Benefits","core","Defines relevant benefits for each stakeholder group."),q("69191376","5 Whys Technique","additional","Supports root-cause exploration of the problem the change is intended to address."),q("34037712","SWOT Analysis","additional","Examines strengths, weaknesses, opportunities and threats relating to the change."),q("34037072","PESTLE Analysis","additional","Examines external factors influencing the need for change."),q("34037680","Porter's Five Forces","additional","Supports analysis of wider environmental and market pressures."),q("34037040","GAP Analysis","additional","Compares current and future states and identifies what needs to change."),q("42608624","AIDA Model","additional","Provides a structure for moving audiences from awareness towards action."),q("34037744","Kotter's 8 Steps","additional","Provides an additional framework for creating urgency and mobilising change."),q("34039024","Sponsor Coalition Map","additional","Identifies leaders who need to champion the case for change.")],deliverables:[q("44287088","A clear case for change communicated to all stakeholders","core")]},"Senior Sponsorship & Governance":{inputs:[q("34039024","Sponsor Coalition Map","core","Identifies senior leaders and visible supporters required to drive the change."),q("34037520","What Makes a Good Sponsor?","core","Supports sponsors to understand the behaviours expected of them."),q("34040240","RACI/RASCI Matrix","core","Clarifies governance roles, responsibilities and accountability."),q("34037552","Change Network","core","Connects senior sponsorship with change agents and champions."),q("42042672","Change Management Strategy","core","Defines the strategic approach and leadership responsibilities for change."),q("34018288","Stakeholder Analysis Tool","additional","Identifies influential stakeholders and required sponsor coverage."),q("34038032","Change Management Plan","additional","Translates governance and sponsorship responsibilities into planned activity."),q("69484112","SHIFT: A Strategic Change Management Approach","additional","Provides an additional strategic structure for leadership of change.")]},"Change Network":{inputs:[q("34037552","Change Network","core","Supports formation and operation of a network of change agents and champions."),q("34039024","Sponsor Coalition Map","core","Connects the change network with visible senior sponsors."),q("34018288","Stakeholder Analysis Tool","core","Helps ensure the network represents the right stakeholder groups."),q("34037520","What Makes a Good Sponsor?","core","Clarifies how sponsors should support and use the network."),q("34039408","Feedback Cycle","additional","Supports two-way feedback between the network, programme and affected staff."),q("69501968","Psychological Safety","additional","Supports an environment in which network members can raise concerns safely."),q("34040240","RACI/RASCI Matrix","additional","Clarifies the roles of sponsors, change agents and change champions."),q("34038672","User Surveys","additional","Provides additional evidence for themes surfaced by the change network.")]},Benefits:{inputs:[q("34037232","Benefits Workshop","core","Identifies and develops benefits with relevant stakeholders."),q("34040176","Benefits Map","core","Links benefits to outcomes, enabling changes and strategic objectives."),q("34030736","Benefits Realisation Plan","core","Defines baselines, measures, owners and arrangements for tracking benefits."),q("45000208","What's in it for me? Benefits","core","Translates organisational benefits into relevant stakeholder benefits."),q("69511824","Measuring Digital Adoption","core","Supports definition of adoption measures linked to intended benefits."),q("44287088","Case for Change","additional","Connects the benefits to the rationale and intended outcomes of the change."),q("34038608","Creating Short-Term Wins","additional","Uses early progress to demonstrate value and maintain momentum."),q("34038864","Celebrate Successes","additional","Recognises evidence that benefits and positive outcomes are emerging."),q("34038544","End of Pilot Report","additional","Captures pilot evidence relevant to benefits and wider rollout."),q("34038672","User Surveys","additional","Collects qualitative evidence about benefits and user experience.")]},"Change Impact":{inputs:[q("34037424","Change Impact Assessment","core","Assesses impacts on people, teams, processes and business units."),q("34039344","Impact Analysis","core","Supports structured analysis of intended and unintended impacts."),q("34037968","Heat Map","core","Provides a visual view of impact across business areas."),q("34037040","GAP Analysis","core","Identifies differences between current and future states."),q("34040208","McKinsey 7S Model","core","Examines alignment across interdependent organisational factors."),q("34037840","Process Mapping","additional","Identifies impacts created by changes between current and future processes."),q("34037392","Change Management Capability Review","additional","Assesses the capability implications of the future state."),q("34038000","Proof of Concept","additional","Provides early evidence about likely organisational and user impacts."),q("34037488","Training Impact Assessment","additional","Identifies high-level learning resource and cost implications.")]},"Risk Management":{inputs:[q("34037776","Risk Assessment","core","Identifies and assesses risks, issues and barriers to successful adoption."),q("34038640","Sustainability Risk Assessment","core","Identifies risks that could prevent the change from being sustained."),q("34037424","Change Impact Assessment","core","Provides evidence about impact-related risks and mitigation needs."),q("34037360","Force Field Analysis","core","Identifies forces that may support or obstruct the change."),q("34030736","Benefits Realisation Plan","additional","Helps identify and monitor risks to benefit realisation."),q("34037968","Heat Map","additional","Highlights areas where high impact and low readiness may create risk."),q("34307760","Resistance Management Plan","additional","Defines actions for managing resistance-related adoption risks."),q("69191376","5 Whys Technique","additional","Supports investigation of the root causes of risks and recurring issues.")]},"Change Management Readiness & Planning":{inputs:[q("42042672","Change Management Strategy","core","Sets the overall direction and approach for managing the change."),q("34038032","Change Management Plan","core","Defines activities, ownership and timescales required to build readiness."),q("34037040","GAP Analysis","core","Identifies the work required to move to the future state."),q("34037424","Change Impact Assessment","core","Provides impact and readiness evidence for change planning."),q("34038192","Change Implementation Plan","core","Defines implementation tasks, milestones and responsibilities."),q("34038576","Go Live Business Readiness Assessment","core","Assesses people, process and support readiness before go-live.")]}},ir={},or={Default:Xt,Product:ir};function rr(){if(typeof window>"u")return[];try{const t=window.localStorage.getItem(ar);if(!t)return[];const n=JSON.parse(t);return Array.isArray(n)?n.filter(s=>s&&typeof s.name=="string"&&s.name.trim()):[]}catch{return[]}}function lr(t){const n=rr().find(s=>s.name===t);return n?n.map:or[t]||Xt}function cr(t,n,s,a,i=!0){var d,m,r;const l=((m=(d=lr(t))==null?void 0:d[n])==null?void 0:m[s])||[],o=l.length>0?l:((r=Xt==null?void 0:Xt[n])==null?void 0:r[s])||[],c=i?o:o.filter(f=>f.type==="core");return a?c.map(f=>Es(f,a)):c}function Rn(t,n,s,a,i=!0){const l=ki[n]||[],o=new Map;return l.forEach(c=>{cr(t,c,s,a,i).forEach(d=>{const m=`${d.label}::${d.url}`;o.has(m)||o.set(m,d)})}),[...o.values()]}const va={"not started":0,emerging:1,developing:2,embedding:3,adopted:4,thriving:5};function gn(t){return t.trim().replace(/\s+/g," ").toLowerCase()}function Ei(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function Sa(t){return t.trim().toLowerCase()}function dr(t){return t.replace(/&/g,"and").replace(/\s+/g," ").trim()}function mr(t){return typeof t=="string"&&Ss.includes(t)}function Yt(t){if(!t)return null;try{return JSON.parse(t)}catch{return null}}function Is(t,n,s,a){let i=0,l=!1,o=!1;for(let c=a;c<t.length;c+=1){const d=t[c];if(l){if(o){o=!1;continue}if(d==="\\"){o=!0;continue}d==='"'&&(l=!1);continue}if(d==='"'){l=!0;continue}if(d===n){i+=1;continue}if(d===s&&(i-=1,i===0))return t.slice(a,c+1)}return null}function ur(t,n=0){const s=t.indexOf("{",n);return s<0?null:Is(t,"{","}",s)}function Ii(t,n=0){const s=t.indexOf("[",n);return s<0?null:Is(t,"[","]",s)}function wa(t,n){const s=t.toLowerCase().indexOf(n.toLowerCase());return s<0?null:Ii(t,s)}function gr(t,n){const s=t.toLowerCase().indexOf(n.toLowerCase());return s<0?null:ur(t,s)}function pr(t){const n=[];for(let s=0;s<t.length;s+=1){if(t[s]!=="{")continue;const a=Is(t,"{","}",s);if(!a)continue;const i=Yt(a);i&&typeof i=="object"&&!Array.isArray(i)&&n.push(i),s+=a.length-1}return n}function wn(t){return Array.isArray(t)?t.filter(n=>n&&typeof n=="object").map(n=>n).filter(n=>typeof n.id=="string"&&typeof n.name=="string"):[]}function rn(t){return Array.isArray(t)?t.filter(n=>n&&typeof n=="object").map(n=>n).filter(n=>typeof n.fromStatus=="string"&&typeof n.toStatus=="string"&&typeof n.lens=="string"&&typeof n.action=="string"):[]}function hr(t){const n=Yt(t);let s=[],a=[];if(n&&typeof n=="object"&&!Array.isArray(n)){const l=n;s=wn(l.outcomes),Array.isArray(l.actions)?a=rn(l.actions):l.actions&&typeof l.actions=="object"&&(a=rn(l.actions.actions))}else Array.isArray(n)&&(s=wn(n));if(s.length||(s=wn(Yt(wa(t,"outcomes")))),s.length||(s=wn(Yt(Ii(t)))),a.length||(a=rn(Yt(wa(t,"actions")))),!a.length){const l=Yt(gr(t,"actions"));a=rn(l==null?void 0:l.actions)}const i=pr(t);return a.length||(a=rn(i)),s.length||(s=i.filter(l=>l&&typeof l=="object").map(l=>l).filter(l=>typeof l.id=="string"&&typeof l.name=="string"&&/_o\d+$/i.test(l.id)&&!("fromStatus"in l))),{outcomes:s,actions:a}}function Na(t,n){const a=t.trim().toLowerCase().match(/o\d+$/);return a?`${n}:${a[0]}`:`${n}:${Ei(t)}`}function fr(t,n){return`${t}:${n}`}function br(t){return t.includes(":auto-objective:")||t.startsWith("pathway:auto-objective:")}function xr(t){return{...t,actions:(t.actions||[]).map(n=>({...n,linkedTargets:(n.linkedTargets||[]).map(s=>({...s}))}))}}function us(){return{score:0,rationale:"",evidence:"",actions:[]}}function As(t,n){return`${t}:${Ei(n.lens)}:${n.fromScore}-${n.toScore}:${n.actionIndex}`}function yr(t,n,s){return{id:As(n,s),text:s.actionText,actionType:s.actionType,owner:"",timescale:"",status:"Planned",phase:1,startDate:"",dueDate:"",notes:"",evidence:"",readinessScore:s.fromScore,linkedTargets:[{componentId:t,lens:s.lens}],priority:s.priority,needsRework:s.needsRework}}function vr(t,n){return{id:t.id,text:t.text,owner:(n==null?void 0:n.owner)||"",timescale:(n==null?void 0:n.timescale)||"",notes:(n==null?void 0:n.notes)||"",evidence:(n==null?void 0:n.evidence)||"",linkedActions:[]}}function Sr(t,n,s){const a=As(n,s),i=(t.actions||[]).find(c=>c.id===a);if(i)return i.id;const l=gn(s.actionText),o=(t.actions||[]).find(c=>gn(c.text||"")===l);return(o==null?void 0:o.id)||null}function Je(t,n){const{outcomes:s,actions:a}=hr(t),i=s.map(c=>({id:Na(String(c.id),n.outcomePrefix),text:String(c.name).trim()})),l=new Map;return{templates:a.reduce((c,d)=>{var C;const m=va[Sa(String(d.fromStatus||""))],r=va[Sa(String(d.toStatus||""))];if(m===void 0||r===void 0)return c;const f=dr(String(d.lens||"")),b=((C=n.lensAliases)==null?void 0:C[f])||f,{text:h,priority:x,needsRework:E}=ko(String(d.action||""));if(!b||!h)return c;const S=`${b}:${m}-${r}`,u=l.get(S)||0;return l.set(S,u+1),c.push({lens:b,fromScore:m,toScore:r,actionIndex:u,actionText:h,actionType:mr(d.category)?d.category:void 0,outcomeIds:(d.outcomeIds||[]).map(R=>Na(String(R),n.outcomePrefix)),priority:x,needsRework:E}),c},[]),outcomes:(i.length?i:n.fallbackOutcomes).slice(0,3)}}function Xe(t,n,s){const a={...t.currentDraft||{}},i={...t.objectives||{}},l=a[n.componentId]||{},o=`${n.outcomePrefix}:`,c=(i[n.componentId]||[]).filter(b=>b.id.startsWith(o)),d=(i[n.componentId]||[]).filter(b=>!b.id.startsWith(o)&&!br(b.id)),m=c.reduce((b,h)=>(b[h.id]=h,b),{}),r=Object.keys(l).reduce((b,h)=>(b[h]=xr(l[h]||us()),b),{});s.templates.forEach(b=>{var k;const h=r[b.lens]||us(),x=new Set((h.actions||[]).map(p=>gn(p.text||""))),E=As(n.actionPrefix,b),S=fr(n.componentId,b.lens),u=new Set(((k=t.suppressedAutoActions)==null?void 0:k[S])||[]),C=(h.actions||[]).some(p=>p.id===E),R=gn(b.actionText),j=u.has(E);h.actions=(h.actions||[]).map(p=>!(p.id===E||gn(p.text||"")===R)||p.readinessScore===b.fromScore&&p.priority===b.priority&&p.needsRework===b.needsRework?p:{...p,readinessScore:b.fromScore,priority:b.priority,needsRework:b.needsRework}),!C&&!x.has(R)&&!j&&(h.actions=[...h.actions||[],yr(n.componentId,n.actionPrefix,b)]),r[b.lens]=h});const f=s.outcomes.map(b=>{const h=[];return s.templates.forEach(x=>{if(!x.outcomeIds.includes(b.id))return;const E=r[x.lens];if(!E)return;const S=Sr(E,n.actionPrefix,x);S&&h.push({lens:x.lens,actionId:S})}),{...vr(b,m[b.id]),linkedActions:h}});return{...t,currentDraft:{...a,[n.componentId]:r},objectives:{...i,[n.componentId]:[...d,...f]}}}function Qe(t,n){var c,d;const s=`${n.outcomePrefix}:`,a=`${n.actionPrefix}:`,i=(((c=t.objectives)==null?void 0:c[n.componentId])||[]).filter(m=>!m.id.startsWith(s)),l=((d=t.currentDraft)==null?void 0:d[n.componentId])||{},o=Object.keys(l).reduce((m,r)=>{const f=l[r]||us();return m[r]={...f,actions:(f.actions||[]).filter(b=>!b.id.startsWith(a))},m},{});return{...t,currentDraft:{...t.currentDraft,[n.componentId]:o},objectives:{...t.objectives,[n.componentId]:i}}}function ja(t,n){if(n>=5)return null;const s=(t.actions||[]).filter(i=>i.readinessScore===n);return s.length===0?null:s.every(i=>Oo(i.status))?{currentScore:n,nextScore:n+1}:null}const Dn={0:"Not Started: Activity has not yet commenced or been defined.",1:"Emerging: Activity is fragmented, uncoordinated, and reactive. No standardised approach.",2:"Developing: Basic processes exist but are inconsistently applied. Reliance on heroic individual efforts.",3:"Embedding: Standardised approach defined and applied across the project. Leadership is engaged.",4:"Adopted: Behaviours are changing. Metrics are actively monitored to drive adoption.",5:"Thriving: Change is fully embedded as business as usual. Continuous improvement is evident."},ka=["Pre-Emergent","Emerging","Developing","Maturing","Embedding","Thriving"],wr=["#768692","#AE2521","#FFB81C","#005EB8","#330072","#00A499"];function gs(t){return ka[Math.round(t)]||ka[0]}function Nr({onClose:t,darkMode:n=!1}){return e.jsx("div",{id:"readiness-score-info-modal",className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:s=>{s.target===s.currentTarget&&t()},children:e.jsxs("div",{className:`${n?"bg-slate-800 border-slate-700":"bg-white"} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border`,children:[e.jsxs("div",{className:`${n?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} sticky top-0 border-b p-6 flex items-center justify-between`,children:[e.jsx("h2",{className:`text-2xl font-bold ${n?"text-slate-100":"text-slate-800"}`,children:"Readiness score levels"}),e.jsx("button",{onClick:t,className:`${n?"text-slate-300 hover:text-slate-100":"text-slate-500 hover:text-slate-700"}`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsxs("div",{className:`p-6 space-y-3 text-sm ${n?"text-slate-200":"text-slate-700"}`,children:[e.jsx("p",{children:"Every lens is scored on the same 0-5 readiness scale. Here's what each level generally means - each lens on a component page also shows guidance written specifically for that lens at its current level. A lens advances automatically once every action at its current level is marked Completed or Cancelled."}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:Object.entries(Dn).map(([s,a])=>{const[i,l]=a.split(/:\s(.+)/);return e.jsxs("div",{className:`rounded-md border p-2.5 ${n?"border-slate-700":""}`,style:{borderLeftWidth:"4px",borderLeftColor:wr[Number(s)]},children:[e.jsxs("p",{className:`text-xs font-bold ${n?"text-slate-100":"text-slate-800"}`,children:[s," - ",i]}),e.jsx("p",{className:`mt-0.5 text-xs ${n?"text-slate-300":"text-slate-600"}`,children:l})]},s)})})]})]})})}const Ca=["#005eb8","#00a499","#ffb81c","#ae2521","#330072","#41b6e6"],jr=36;function kr(){const t=g.useMemo(()=>Array.from({length:jr},(n,s)=>({id:s,left:Math.random()*100,color:Ca[s%Ca.length],delay:Math.random()*.25,duration:1.4+Math.random()*.9,drift:(Math.random()-.5)*160,rotation:Math.random()*360})),[]);return e.jsxs("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 z-[59] h-40 overflow-hidden","aria-hidden":"true",children:[e.jsx("style",{children:`
        @keyframes toast-confetti-fall {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          100% { transform: translate(var(--drift), -160px) rotate(var(--spin)); opacity: 0; }
        }
      `}),t.map(n=>e.jsx("span",{style:{position:"absolute",left:`${n.left}%`,bottom:0,width:"8px",height:"8px",backgroundColor:n.color,animation:`toast-confetti-fall ${n.duration}s ease-out ${n.delay}s forwards`,"--drift":`${n.drift}px`,"--spin":`${n.rotation}deg`}},n.id))]})}function Ai({message:t,onDismiss:n,durationMs:s,variant:a="success",celebrate:i=!1}){g.useEffect(()=>{if(!s)return;const o=window.setTimeout(n,s);return()=>window.clearTimeout(o)},[t,s,n]);const l=a==="success"?"bg-green-600 text-white":"bg-slate-800 text-white";return e.jsxs(e.Fragment,{children:[i?e.jsx(kr,{}):null,e.jsx("div",{className:"fixed bottom-6 right-6 z-[60] flex justify-end",role:"status","aria-live":"polite",children:e.jsxs("div",{className:`flex items-center gap-3 rounded-lg px-4 py-3 shadow-2xl ${l}`,children:[e.jsx("span",{className:"text-sm font-medium",children:t}),e.jsx("button",{type:"button",onClick:n,className:"text-white/80 hover:text-white","aria-label":"Dismiss",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})})]})}const Ea=["#005eb8","#00a499","#7c3aed","#b45309","#be123c","#0369a1","#0f766e","#4d7c0f"];function Cr(t){let n=0;for(let s=0;s<t.length;s+=1)n=(n<<5)-n+t.charCodeAt(s),n|=0;return Math.abs(n)}function Er(t){const n=t.trim().split(/\s+/).filter(Boolean);return n.length?n.length===1?n[0].slice(0,2).toUpperCase():`${n[0][0]}${n[n.length-1][0]}`.toUpperCase():"?"}function Oi({name:t,darkMode:n=!1,imageDataUrl:s}){const a=t.trim();if(!a)return e.jsx("span",{title:"Unassigned","aria-label":"Unassigned",className:`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold ${n?"border-slate-600 text-slate-500":"border-slate-300 text-slate-400"}`,children:"?"});if(s)return e.jsx("img",{src:s,alt:a,title:a,className:"h-7 w-7 shrink-0 rounded-full border border-slate-300 object-cover"});const i=Ea[Cr(a)%Ea.length];return e.jsx("span",{title:a,"aria-label":a,className:"inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white",style:{backgroundColor:i},children:Er(a)})}const Ir=7;function Ar(t,n,s,a=new Date){if(!n&&!s)return"grey";const i=et(t);if(i==="Completed"||i==="Cancelled")return"green";const l=os(t,n,s,a);if(l==="Overdue completion")return"red";if(l==="Overdue start")return"amber";if(s){const o=new Date(s);if(!isNaN(o.getTime())){const c=(o.getTime()-a.getTime())/864e5;if(c>=0&&c<=Ir)return"amber"}}return"green"}const Or={grey:"text-slate-300",green:"text-green-600",amber:"text-amber-500",red:"text-red-600"},_r={grey:"No dates set",green:"On track",amber:"Due soon",red:"Overdue"},Rr=new Intl.DateTimeFormat("en-GB",{day:"2-digit",month:"short",year:"2-digit",timeZone:"GMT"});function Ia(t){if(!t)return"not set";const n=new Date(t);return isNaN(n.getTime())?"not set":`GMT - ${Rr.format(n)}`}function Dr({status:t,startDate:n,dueDate:s}){const a=Ar(t,n,s),i=`${_r[a]} · Start: ${Ia(n)} · End: ${Ia(s)}`;return e.jsx("span",{title:i,"aria-label":i,className:`inline-flex items-center ${Or[a]}`,children:e.jsxs("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",strokeWidth:2}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 7v5l3 3"})]})})}const Pr=`{
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
`,_i="custom-outcome:";function $r(t){return t.startsWith(_i)}const Aa=ws.filter(t=>t!=="Overdue start"&&t!=="Overdue completion"),Tr=Wt.map(t=>t.score),Lr=Object.fromEntries(Wt.map(t=>[t.score,t.label])),Oa={"Not Started":"bg-slate-100 text-slate-700 border-slate-200","In Progress":"bg-blue-100 text-blue-800 border-blue-200",Blocked:"bg-amber-100 text-amber-800 border-amber-200",Completed:"bg-green-100 text-green-800 border-green-200"},_a=JSON.parse(Pr),Ri=4;function Mr(t,n){return en.reduce((s,a)=>{const i=Rn("Default",a.id,"inputs",void 0,t),l=Rn("Default",a.id,"deliverables",void 0,t),o=new Map;return[...i,...l].forEach(c=>{var d,m;if(c.label&&c.label.trim().length>=Ri){const r=n?Es(c,n).url:c.url,f=(m=(d=n==null?void 0:n.links)==null?void 0:d[c.key])==null?void 0:m.matchAliases;o.set(c.label.toLowerCase(),{...c,url:r,matchAliases:f})}}),s[a.id]=[...o.values()],s},{})}function Br(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Di(t){const n=new Set([t]);return new RegExp("(?<!s)s$","i").test(t)&&n.add(t.slice(0,-1)),[...n]}function zt(t,n,s,a){const i=t||"Untitled action";if(n.length===0)return i;const o=n.flatMap(r=>{const f=r.kind==="url"?r.matchAliases||[]:[];return[...Di(r.label),...f].map(b=>({variant:b,link:r}))}).sort((r,f)=>f.variant.length-r.variant.length),c=o.map(r=>`\\b${Br(r.variant)}\\b`).join("|"),d=i.split(new RegExp(`(${c})`,"gi")),m=`underline decoration-dotted underline-offset-2 ${s?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`;return d.map((r,f)=>{const b=o.find(x=>x.variant.toLowerCase()===r.toLowerCase());if(!b)return r;const h=b.link;return h.kind==="tool"?e.jsx("button",{type:"button",onClick:x=>{x.stopPropagation(),a==null||a(h.tool)},className:m,children:r},`${h.key}-${f}`):e.jsx("a",{href:h.url,target:"_blank",rel:"noopener noreferrer",onClick:x=>x.stopPropagation(),className:m,children:r},`${h.key}-${f}`)})}function Ra(t){return t.split(`
`).map(n=>n.trim()).filter(Boolean)}const Gr="Your Project";function Fr(t,n){return t.replace(/\$projectName/g,n)}function Ur(t,n){const s=i=>Fr(i,n),a=i=>i.map(l=>({title:s(l.title),body:s(l.body)}));return{component:s(t.component),description:s(t.description),whatIsIt:s(t.whatIsIt),userInsight:s(t.userInsight),whyThisMatters:s(t.whyThisMatters),quickRealityCheck:s(t.quickRealityCheck),whatGoodLooksLike:a(t.whatGoodLooksLike),risksIfYouDont:a(t.risksIfYouDont)}}const Pi={good:{border:"border-emerald-200",bg:"bg-emerald-50 hover:bg-emerald-100",text:"text-black",titleText:"text-emerald-700"},risk:{border:"border-rose-200",bg:"bg-rose-50 hover:bg-rose-100",text:"text-black",titleText:"text-rose-800"}},$i={good:{border:"border-emerald-500/40",bg:"bg-emerald-500/10 hover:bg-emerald-500/15",text:"text-emerald-200",titleText:"text-slate-100"},risk:{border:"border-rose-500/40",bg:"bg-rose-500/10 hover:bg-rose-500/15",text:"text-rose-200",titleText:"text-slate-100"}};function Hr({points:t,tone:n,guidanceLinks:s,darkMode:a,onNavigateToTool:i}){const l=a?$i[n]:Pi[n];return e.jsx("ul",{className:"space-y-3",children:t.map(o=>e.jsxs("li",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${l.titleText}`,children:o.title}),e.jsx("p",{className:`mt-0.5 text-sm ${l.text}`,children:zt(o.body,s,a,i)})]},o.title))})}function Da({title:t,points:n,tone:s,isOpen:a,onToggle:i,guidanceLinks:l,darkMode:o,onNavigateToTool:c}){const d=o?$i[s]:Pi[s];return e.jsxs("div",{className:`rounded-md border ${d.border}`,children:[e.jsxs("button",{type:"button",onClick:i,className:`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold transition-colors ${d.bg} ${d.text}`,children:[t,e.jsx("span",{"aria-hidden":"true",children:a?"−":"+"})]}),a&&e.jsx("div",{className:`border-t px-3 py-3 ${d.border}`,children:e.jsx(Hr,{points:n,tone:s,guidanceLinks:l,darkMode:o,onNavigateToTool:c})})]})}function Wr({detail:t,furtherReadingUrl:n,guidanceLinks:s,darkMode:a,onNavigateToTool:i}){const[l,o]=g.useState(!0),[c,d]=g.useState(!0);return e.jsxs("div",{children:[t.description&&e.jsx("p",{className:`text-sm ${a?"text-slate-200":"text-slate-700"}`,children:t.description}),e.jsxs("div",{className:`mt-4 space-y-4 ${t.description?"border-t pt-4":""} ${a?"border-slate-700":"border-slate-200"}`,children:[n&&e.jsx("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs font-semibold ${a?"border-slate-600 bg-slate-800 text-blue-300 hover:bg-slate-700":"border-slate-300 bg-white text-[#005eb8] hover:bg-slate-50"}`,children:"Further Reading ↗"}),t.whatIsIt&&e.jsx("p",{className:`text-sm ${a?"text-slate-300":"text-slate-600"}`,children:zt(t.whatIsIt,s,a,i)}),t.userInsight&&e.jsxs("blockquote",{className:`border-l-2 pl-3 text-sm italic ${a?"border-slate-600 text-slate-300":"border-slate-300 text-slate-600"}`,children:["“",zt(t.userInsight,s,a,i),"”"]}),t.whyThisMatters&&e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${a?"text-slate-200":"text-slate-700"}`,children:"Why this matters"}),e.jsx("ul",{className:`mt-1 list-disc space-y-1 pl-5 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:Ra(t.whyThisMatters).map(m=>e.jsx("li",{children:zt(m,s,a,i)},m))})]}),t.quickRealityCheck&&e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${a?"text-slate-200":"text-slate-700"}`,children:"Quick reality check"}),e.jsx("ul",{className:`mt-1 list-disc space-y-1 pl-5 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:Ra(t.quickRealityCheck).map(m=>e.jsx("li",{children:zt(m,s,a,i)},m))})]}),(t.whatGoodLooksLike.length>0||t.risksIfYouDont.length>0)&&e.jsxs("div",{className:"space-y-2",children:[t.whatGoodLooksLike.length>0&&e.jsx(Da,{title:"What good looks like",points:t.whatGoodLooksLike,tone:"good",isOpen:l,onToggle:()=>o(m=>!m),guidanceLinks:s,darkMode:a,onNavigateToTool:i}),t.risksIfYouDont.length>0&&e.jsx(Da,{title:"Risks if you don't",points:t.risksIfYouDont,tone:"risk",isOpen:c,onToggle:()=>d(m=>!m),guidanceLinks:s,darkMode:a,onNavigateToTool:i})]})]})]})}function Vr({open:t,onClose:n,detail:s,furtherReadingUrl:a,guidanceLinks:i,darkMode:l,onNavigateToTool:o}){return t?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${l?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${l?"text-slate-300":"text-slate-500"}`,children:"Component overview"}),e.jsx("button",{type:"button",onClick:n,"aria-label":"Close component overview",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${l?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:"mt-2",children:e.jsx(Wr,{detail:s,furtherReadingUrl:a,guidanceLinks:i,darkMode:l,onNavigateToTool:o})})]})}):null}const ps="__evidence_json__:",qr=1024*1024;function Yr(t,n,s){return(s[t]||[]).filter(a=>a.linkedActions.some(i=>i.actionId===n))}function Ti(t){const n=t.trim();return n?/^https?:\/\//i.test(n)?n:/^www\./i.test(n)?`https://${n}`:n:""}function Nn(t){const n=(t==null?void 0:t.trim())||"";if(!n)return[];if(n.startsWith(ps))try{const s=JSON.parse(n.slice(ps.length));return Array.isArray(s)?s.filter(a=>a&&(a.type==="url"||a.type==="file")).map(a=>({type:a.type,label:String(a.label||"").trim(),href:String(a.href||"").trim()})).filter(a=>a.label||a.href):[]}catch{return[]}return n.split(`
`).map(s=>s.trim()).filter(Boolean).map(s=>{const a=Ti(s);return{type:"url",label:s,href:a}})}function zr(t){const n=t.map(s=>({type:s.type,label:s.label.trim(),href:s.href.trim()})).filter(s=>s.label||s.href);return n.length?`${ps}${JSON.stringify(n)}`:""}function Kr({rows:t,isOpen:n,onToggle:s,darkMode:a}){return e.jsxs("div",{className:`mb-8 rounded-lg border ${a?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("button",{type:"button",onClick:s,className:"flex w-full items-center justify-between gap-4 px-5 py-4 text-left",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-sm font-semibold ${a?"text-slate-100":"text-slate-800"}`,children:"Evidence Links and Docs"}),e.jsx("p",{className:`mt-0.5 text-xs ${a?"text-slate-400":"text-slate-500"}`,children:t.length?`${t.length} item${t.length===1?"":"s"} attached across this component's actions.`:"Everything attached as evidence across this component's actions, in one place."})]}),e.jsx("span",{className:`shrink-0 text-xs font-semibold ${a?"text-slate-300":"text-slate-500"}`,children:n?"Hide −":"Show +"})]}),n&&e.jsx("div",{className:`border-t px-5 py-4 ${a?"border-slate-700":"border-slate-200"}`,children:t.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${a?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:a?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Type"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Link / Doc"})]})}),e.jsx("tbody",{className:`${a?"divide-slate-700":"divide-slate-100"} divide-y`,children:t.map((i,l)=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-100":"text-slate-800"}`,children:i.actionText}),e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:i.lens}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`${i.item.type==="file"?"bg-emerald-100 text-emerald-800":"bg-blue-100 text-blue-800"} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`,children:i.item.type==="file"?"File":"Link"})}),e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-100":"text-slate-800"}`,children:i.item.href?e.jsx("a",{href:i.item.href,target:"_blank",rel:"noopener noreferrer",className:`underline ${a?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:i.item.label||i.item.href}):i.item.label||"-"})]},`${i.lens}:${l}`))})]})}):e.jsx("p",{className:`text-sm ${a?"text-slate-400":"text-slate-500"}`,children:"No evidence added yet. Attach links or documents to an action to see them here."})})]})}function Jr(t){return new Promise((n,s)=>{const a=new FileReader;a.onload=()=>n(String(a.result||"")),a.onerror=()=>s(new Error("Unable to read file.")),a.readAsDataURL(t)})}function Xr(){return e.jsx("svg",{className:"w-4 h-4 text-blue-500 mt-0.5 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Pa(){return e.jsx("svg",{className:"w-5 h-5 ml-2 text-slate-400 group-hover:text-[#005eb8] shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Qr(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5h2m6.5-.5a2.121 2.121 0 013 3L8 21l-4 1 1-4L17.5 4.5z"})})}function Zr(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m3 0-.867 12.142A2 2 0 0115.138 21H8.862a2 2 0 01-1.995-1.858L6 7h12z"})})}function el(t,n){let s=t,a=ja({actions:n},s);for(;a;)s=a.nextScore,a=ja({actions:n},s);return s}function tl(t,n,s){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:"",actionType:void 0,owner:"",timescale:"",status:"Planned",phase:t,startDate:"",dueDate:"",notes:"",evidence:"",linkedTargets:[{componentId:n,lens:s}]}}function _t(t,n,s){const a=t.linkedTargets||[];if(!a.length)return[{componentId:n,lens:s}];const i=new Set,l=[];return a.forEach(o=>{const c=`${o.componentId}:${o.lens}`;i.has(c)||(i.add(c),l.push({componentId:o.componentId,lens:o.lens}))}),l}function nl({store:t,components:n,activeComponentId:s,getRubricText:a,getEntry:i,onComponentChange:l,onEntryUpdate:o,onOpenLensInfo:c,onActionRemove:d,onObjectivesUpdate:m,onNavigateToTool:r,hideGuidedWorkflow:f=!1,showAdditionalGuidanceLinks:b=!0,showActionPriorityColours:h=!1,currentUserId:x,currentUserProfileImageDataUrl:E,onHideGuidedWorkflow:S,darkMode:u=!1,focusAction:C,onFocusActionHandled:R}){var Ot,pt,Qs,Zs,ea,ta,na,sa,aa,ia,oa,ra,la,ca,da,ma;const j=n.find(y=>y.id===s)||n[0],k=(pt=(Ot=t.orgProfile)==null?void 0:Ot.cst)==null?void 0:pt.pathway,p=y=>k&&k!=="pathway-1"?`No outcomes or actions are defined for ${hi[k]} yet.`:y,B=((Zs=(Qs=t.orgProfile)==null?void 0:Qs.projectName)==null?void 0:Zs.trim())||Gr,D=(ea=_a[j.id])!=null&&ea.whatIsIt?Ur(_a[j.id],B):void 0,V=(ta=t.orgProfile)!=null&&ta.coreLinks&&t.orgProfile.coreLinks.length>0?t.orgProfile.coreLinks:Ci,le=g.useMemo(()=>{var y;return(((y=t.orgProfile)==null?void 0:y.toolLinks)||[]).filter(A=>A.matchText.trim()).map(A=>({key:A.key,label:A.matchText,kind:"tool",tool:A.tool}))},[(na=t.orgProfile)==null?void 0:na.toolLinks]),re=g.useMemo(()=>{var se;const y=(se=t.orgProfile)==null?void 0:se.linkOverrides,A=Mr(b,y),F=b?V:V.filter(ve=>ve.type==="core"),Q={};return Object.keys(A).forEach(ve=>{var jt,Bt;const Te=new Map,Be=((Bt=(jt=t.orgProfile)==null?void 0:jt.customComponentLinks)==null?void 0:Bt[ve])||[];[...A[ve],...F,...Be].forEach(st=>{st.label&&st.label.trim().length>=Ri&&Te.set(st.label.toLowerCase(),{...st,kind:"url"})}),le.forEach(st=>{Te.set(st.label.toLowerCase(),st)}),Q[ve]=[...Te.values()]}),Q},[b,V,(sa=t.orgProfile)==null?void 0:sa.linkOverrides,(aa=t.orgProfile)==null?void 0:aa.customComponentLinks,le]),[w,L]=g.useState(null),[ne,xe]=g.useState(!1),[Ae,Fe]=g.useState([]),U=g.useCallback((y,A,F)=>{const Q=el(A,F);if(Q>A){const se=`${j.label} · ${y} moved to ${Et(Q).label}!`;Fe(ve=>[...ve,{id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,message:se}])}return Q},[j.label]),[de,ce]=g.useState(!1),fe=g.useRef(null),[Se,ye]=g.useState(null),[me,Ce]=g.useState(null),[Le,Ue]=g.useState(!1),[G,W]=g.useState(!0),[X,_e]=g.useState(!0),[ot,Ye]=g.useState(!0),[$,ie]=g.useState(!1),[Z,we]=g.useState(!1),Ee=ht("assessment"),[Re,Pe]=g.useState({}),[N,M]=g.useState(null),[_,P]=g.useState({}),[Y,z]=g.useState({}),oe=((ia=t.objectives)==null?void 0:ia[j.id])||[],ue=t.orgProfile.teamMembers||[],je=((oa=ue.find(y=>y.id===x))==null?void 0:oa.name)||"",ke=g.useMemo(()=>{const y={};return j.lenses.forEach(A=>{y[A]=i(j.id,A).actions||[]}),y},[j.id,j.lenses,i]),Ve=g.useMemo(()=>{const y={};return j.lenses.forEach(A=>{const F=i(j.id,A),Q=ke[A]||[],se=Q.some(Te=>Te.readinessScore===0),ve=F.score===0&&!se?1:F.score;y[A]=Q.filter(Te=>(Te.readinessScore??ve)===ve)}),y},[j.id,j.lenses,i,ke]),ut=g.useMemo(()=>j.lenses.reduce((y,A)=>y+(Ve[A]||[]).length,0),[j.lenses,Ve]),It=g.useMemo(()=>j.lenses.reduce((y,A)=>y+(Ve[A]||[]).filter(F=>et(F.status)==="Completed").length,0),[j.lenses,Ve]),Nt=g.useMemo(()=>j.lenses.some(y=>Number(i(j.id,y).score||0)>0),[j.id,j.lenses,i]),I=g.useMemo(()=>{const y={};return Object.keys(t.currentDraft).forEach(A=>{Object.keys(t.currentDraft[A]||{}).forEach(F=>{(t.currentDraft[A][F].actions||[]).forEach(se=>{_t(se,A,F).forEach(Te=>{const Be=`${Te.componentId}:${Te.lens}`;y[Be]||(y[Be]=[]),y[Be].push({sourceComponentId:A,sourceLens:F,action:se,isLinkedView:!(Te.componentId===A&&Te.lens===F)})})})})}),y},[t.currentDraft]),T=g.useMemo(()=>{const y={};return n.forEach(A=>{y[A.id]=A}),y},[n]),ee=g.useMemo(()=>{const y=[];return j.lenses.forEach(A=>{(I[`${j.id}:${A}`]||[]).filter(Q=>!Q.isLinkedView).forEach(Q=>{Nn(Q.action.evidence||"").forEach(se=>{y.push({actionText:Q.action.text||"Untitled action",lens:A,item:se})})})}),y},[I,j.id,j.lenses]),ge=g.useMemo(()=>{const y=j.lenses[0];return y?i(j.id,y).rationale:""},[j.id,j.lenses,i]),Oe=g.useMemo(()=>{var y;return w?((y=n.find(A=>A.id===w.sourceComponentId))==null?void 0:y.label)||w.sourceComponentId:j.label},[w,j.label,n]),qe=g.useMemo(()=>{var A;if(!((A=w==null?void 0:w.action.text)!=null&&A.trim()))return"New action";const y=w.action.text.trim().replace(/\s+/g," ");return y.length>70?`${y.slice(0,70)}...`:y},[w]),Ie=g.useMemo(()=>oe.find(y=>y.id===(Se==null?void 0:Se.objectiveId))||null,[Se==null?void 0:Se.objectiveId,oe]),nt=g.useMemo(()=>Ie?ls(Ie,ke):null,[Ie,ke]),De=g.useMemo(()=>Ie?Ie.linkedActions.map(y=>{const A=(ke[y.lens]||[]).find(se=>se.id===y.actionId),F=A?et(A.status):null,Q=A?os(A.status,A.startDate,A.dueDate):null;return{lens:y.lens,action:A,status:F,temporalStatus:Q}}):[],[Ie,ke]),Ze=g.useCallback((y,A)=>{const F=i(j.id,y);o(j.id,y,{...F,score:A})},[j.id,i,o]),He=g.useCallback(y=>{j.lenses.forEach(A=>{const F=i(j.id,A);o(j.id,A,{...F,rationale:y})})},[j.id,j.lenses,i,o]),rt=g.useCallback((y,A)=>{const F=tl(j.phase,j.id,y);A&&(F.text=A),L({sourceComponentId:j.id,sourceLens:y,mode:"create",action:F,evidenceItems:Nn(F.evidence||""),linkedObjectiveIds:[],targetPickerComponentId:j.id,targetPickerLens:y})},[j.id,j.phase]),ct=g.useCallback((y,A,F)=>{var Te;const Q=_t(F,y,A),se=Q[0]||{componentId:y,lens:A},ve=(((Te=t.objectives)==null?void 0:Te[y])||[]).filter(Be=>Be.linkedActions.some(jt=>jt.actionId===F.id)).map(Be=>Be.id);L({sourceComponentId:y,sourceLens:A,mode:"edit",actionId:F.id,action:{...F,linkedTargets:Q,notes:F.notes||"",evidence:F.evidence||"",startDate:F.startDate||"",dueDate:F.dueDate||""},evidenceItems:Nn(F.evidence||""),linkedObjectiveIds:ve,targetPickerComponentId:se.componentId,targetPickerLens:se.lens})},[t.objectives]),Pt=g.useCallback(()=>{Ce({mode:"create",text:"",owner:""})},[]),Vt=g.useCallback(y=>{Ce({mode:"edit",objectiveId:y.id,text:y.text,owner:y.owner})},[]),nn=()=>{Ce(null)},$t=()=>{if(me){if(!me.text.trim()){window.alert("Outcome description is required.");return}if(me.mode==="create"){const y={id:`${_i}${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:me.text.trim(),owner:me.owner.trim(),timescale:"",linkedActions:[]};m(j.id,[...oe,y])}else m(j.id,oe.map(y=>y.id===me.objectiveId?{...y,text:me.text.trim(),owner:me.owner.trim()}:y));Ce(null)}},Tt=y=>{m(j.id,oe.filter(A=>A.id!==y))};g.useEffect(()=>{if(!C)return;const A=i(j.id,C.lens).actions.find(F=>F.id===C.actionId);if(!A){R==null||R();return}Ye(!0),ct(j.id,C.lens,A),R==null||R()},[C,j.id]);const Lt=()=>{L(null)},sn=()=>{var Te;if(!w)return;if(!w.action.text.trim()){window.alert("Action description is required.");return}const y={...w.action,evidence:zr(w.evidenceItems),status:et(w.action.status),linkedTargets:_t(w.action,w.sourceComponentId,w.sourceLens),timescale:w.action.dueDate||w.action.startDate||w.action.timescale},A=i(w.sourceComponentId,w.sourceLens),F=w.mode==="create"?[...A.actions,y]:A.actions.map(Be=>Be.id===w.actionId?y:Be);o(w.sourceComponentId,w.sourceLens,{...A,actions:F,score:U(w.sourceLens,A.score,F)});const Q=new Set(w.linkedObjectiveIds),ve=(((Te=t.objectives)==null?void 0:Te[w.sourceComponentId])||[]).map(Be=>{const jt=Be.linkedActions.filter(Bt=>!(Bt.lens===w.sourceLens&&Bt.actionId===y.id));return Q.has(Be.id)?{...Be,linkedActions:[...jt,{lens:w.sourceLens,actionId:y.id}]}:{...Be,linkedActions:jt}});m(w.sourceComponentId,ve),Lt()},yn=()=>{if(!w)return;if(et(w.action.status)==="Completed"&&w.evidenceItems.length===0&&!it(un)){fe.current=sn,ce(!0);return}sn()},v=(y,A,F)=>{const Q=i(j.id,y),se=Q.actions.map(ve=>ve.id===A?{...ve,status:et(F)}:ve);o(j.id,y,{...Q,actions:se,score:U(y,Q.score,se)})},O=(y,A,F)=>{const Q=i(j.id,y),se=Q.actions.map(ve=>ve.id===A?{...ve,owner:F}:ve);o(j.id,y,{...Q,actions:se})},H=(y,A,F)=>{const Q=et(F);if(A.priority==="must"&&Q==="Cancelled"){window.alert("You are trying to mark what we have classified as a MUST action as Cancelled, and it shouldn't be cancelled. Please re-review.");return}const se=Nn(A.evidence||"").length>0;if(Q==="Completed"&&!se&&!it(un)){fe.current=()=>v(y,A.id,Q),ce(!0);return}v(y,A.id,Q)},ae=(y,A,F)=>{if(F.priority==="must"){window.alert("You are trying to delete what we have classified as a MUST action, and it shouldn't be deleted. Please re-review.");return}d(y,A,F.id)},K=y=>{L(A=>{if(!A)return A;const F={...A,action:{...A.action,...y}};return F.action.status=et(F.action.status),F})},be=(y,A)=>{L(F=>F&&{...F,targetPickerComponentId:y,targetPickerLens:A})},he=()=>{L(y=>{if(!y)return y;const A=T[y.targetPickerComponentId]||j,F=A.lenses.includes(y.targetPickerLens)?y.targetPickerLens:A.lenses[0];if(!F)return y;const Q=_t(y.action,y.sourceComponentId,y.sourceLens);return Q.some(se=>se.componentId===A.id&&se.lens===F)?y:{...y,action:{...y.action,linkedTargets:[...Q,{componentId:A.id,lens:F}]}}})},We=(y,A)=>{L(F=>{if(!F)return F;const se=_t(F.action,F.sourceComponentId,F.sourceLens).filter(ve=>!(ve.componentId===y&&ve.lens===A));return{...F,action:{...F.action,linkedTargets:se}}})},ft=y=>{L(A=>{if(!A)return A;const F=new Set(A.linkedObjectiveIds);return F.has(y)?F.delete(y):F.add(y),{...A,linkedObjectiveIds:Array.from(F)}})},$e=y=>{L(A=>A&&{...A,evidenceItems:y})},Ne=()=>{if(!w)return;const y=w.evidenceItems;$e([...y,{type:"url",label:"",href:""}])},Me=(y,A,F)=>{if(!w)return;const Q=w.evidenceItems;if(!Q[y])return;const se=[...Q];A==="href"?se[y]={...se[y],href:Ti(F)}:se[y]={...se[y],label:F},$e(se)},At=y=>{if(!w)return;const A=w.evidenceItems;$e(A.filter((F,Q)=>Q!==y))},gt=async y=>{if(!w)return;const A=y.target.files;if(!(A!=null&&A.length))return;const Q=[...w.evidenceItems];for(const se of Array.from(A)){if(se.size>qr){window.alert(`"${se.name}" is larger than 1MB. Please attach a URL instead.`);continue}try{const ve=await Jr(se);Q.push({type:"file",label:se.name,href:ve})}catch{window.alert(`Unable to upload "${se.name}".`)}}$e(Q),y.target.value=""},Mt=(y,A)=>{A&&(ye(null),ct(j.id,y,A))},bt=y=>{const A=document.getElementById(y);A==null||A.scrollIntoView({behavior:"smooth",block:"start"})};return e.jsxs("div",{className:"max-w-5xl mx-auto pb-20",children:[e.jsx("div",{className:"mb-8 flex items-center justify-between gap-4 flex-wrap",children:e.jsxs("div",{children:[e.jsxs("h2",{className:`text-3xl font-bold flex items-center ${u?"text-slate-100":"text-slate-800"}`,children:[j.label,e.jsx("span",{className:"bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-4 border border-blue-200",children:tt[j.phase]||`Phase ${j.phase}`}),e.jsx("span",{className:"ml-2",children:e.jsx(wt,{onClick:Ee.reopen,darkMode:u})})]}),e.jsx("p",{className:`mt-2 ${u?"text-slate-300":"text-slate-500"}`,children:"Assess readiness at lens level. Change Component rationale, outcomes, and actions are tracked below."}),D&&e.jsx("button",{type:"button",onClick:()=>we(!0),className:`mt-2 text-sm font-semibold underline ${u?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:"What is this?"})]})}),D&&e.jsx(Vr,{open:Z,onClose:()=>we(!1),detail:D,furtherReadingUrl:(la=(ra=t.orgProfile)==null?void 0:ra.componentFurtherReading)==null?void 0:la[j.id],guidanceLinks:re[j.id]||[],darkMode:u,onNavigateToTool:r}),!f&&!Le&&e.jsxs("div",{className:`${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mb-6 rounded-lg border p-4`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${u?"text-slate-300":"text-slate-600"}`,children:"Guided workflow"}),e.jsx("button",{type:"button",onClick:()=>Ue(!0),"aria-label":"Dismiss guided workflow",className:`text-xs font-semibold leading-none ${u?"text-slate-400 hover:text-slate-200":"text-slate-400 hover:text-slate-700"}`,children:"×"})]}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:()=>bt("assessment-scoring"),className:`${u?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"1. Where are you now?"}),e.jsx("button",{type:"button",onClick:()=>bt("assessment-objectives"),className:`${u?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"2. Review outcomes"}),e.jsx("button",{type:"button",onClick:()=>bt("assessment-actions"),className:`${u?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"3. Plan lens actions"})]}),S&&e.jsx("button",{type:"button",onClick:S,className:`mt-3 text-xs underline ${u?"text-slate-400 hover:text-slate-200":"text-slate-500 hover:text-slate-700"}`,children:"Don't show this again"})]}),e.jsxs("div",{id:"assessment-scoring",className:`${u?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[e.jsx("h3",{className:`text-sm font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:Nt?"Step 1: Where are you now?":"Step 1: Where are you now and what is currently known?"}),e.jsx("button",{type:"button",onClick:()=>W(y=>!y),className:`${u?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:G?"Hide":"Show"})]}),G?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:`block text-sm font-semibold mb-2 ${u?"text-slate-100":"text-slate-700"}`,children:"Assessment Rationale"}),e.jsx("p",{className:`text-xs mb-2 ${u?"text-slate-300":"text-slate-500"}`,children:'Explain what is currently known, what evidence supports that view, and where the biggest gap sits. Example: "Sponsorship is visible only in two services; there is no monthly steering update yet; next step is to agree a trust-wide sponsor cadence."'}),e.jsx("textarea",{value:ge,onChange:y=>He(y.target.value),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-24 p-2 border ${u?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,placeholder:"Record what is currently known for this change component, the evidence behind it, and the key improvement needed next."})]}):null]}),e.jsxs("div",{id:"assessment-objectives",className:`${u?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-1",children:[e.jsx("h3",{className:`text-sm font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Step 2: Review outcomes"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:Pt,className:`${u?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:"Add Outcome"}),e.jsx("button",{type:"button",onClick:()=>_e(y=>!y),className:`${u?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:X?"Hide":"Show"})]})]}),e.jsx("p",{className:`text-xs mb-3 ${u?"text-slate-300":"text-slate-500"}`,children:"Owned by this component as a whole. Status is derived automatically from the lens actions assigned to each outcome below and cannot be set manually."}),X?oe.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${u?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:u?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Linked Actions"})]})}),e.jsx("tbody",{className:`${u?"divide-slate-700":"divide-slate-100"} divide-y`,children:oe.map(y=>{const A=ls(y,ke),F=Oa[A],Q=()=>ye({objectiveId:y.id});return e.jsxs("tr",{onClick:Q,onKeyDown:se=>{(se.key==="Enter"||se.key===" ")&&(se.preventDefault(),Q())},tabIndex:0,className:`${u?"hover:bg-slate-700 focus-visible:bg-slate-700":"hover:bg-slate-50 focus-visible:bg-slate-50"} cursor-pointer focus:outline-none`,children:[e.jsx("td",{className:`px-3 py-2 text-sm ${u?"text-slate-100":"text-slate-800"}`,children:y.text||"Untitled outcome"}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${F}`,children:A})}),e.jsx("td",{className:`px-3 py-2 text-sm ${u?"text-slate-300":"text-slate-600"}`,children:y.linkedActions.length?`${y.linkedActions.length} action(s)`:"None assigned"})]},y.id)})})]})}):e.jsx("p",{className:"text-sm text-slate-500",children:p("No outcomes yet.")}):null]}),e.jsx("div",{id:"assessment-actions",className:`${u?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-sm font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Step 3: Plan lens actions"}),e.jsx("p",{className:`mt-1 text-xs ${u?"text-slate-300":"text-slate-600"}`,children:"Track delivery actions for each lens and link them to outcomes and affected component lenses."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:`${u?"bg-slate-800 border-slate-600 text-slate-100":"bg-white border-slate-300 text-slate-700"} rounded-full border px-2 py-1 text-xs`,children:[It,"/",ut," completed"]}),e.jsx("button",{type:"button",onClick:()=>Ye(y=>!y),className:`${u?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:ot?"Hide":"Show"})]})]})}),ot?e.jsx("div",{className:"space-y-8 mb-8",children:j.lenses.map(y=>{const A=i(j.id,y),F=`${j.id}:${y}`,Q=I[F]||[],se=Q.some(J=>J.action.readinessScore===0),ve=A.score===0&&!se?1:A.score,Te=_[F]||"all",Be=Y[F]||"all",jt=Array.from(new Set(Q.map(J=>J.action.actionType).filter(J=>J!==void 0))).sort((J,pe)=>String(J).localeCompare(String(pe))),Bt=Array.from(new Set([...ue.map(J=>J.name),...Q.map(J=>J.action.owner).filter(J=>!!J)])).sort((J,pe)=>J.localeCompare(pe)),st=[...Q].filter(J=>(J.action.readinessScore!==void 0?J.action.readinessScore:ve)!==ve||Te!=="all"&&(J.action.actionType||"")!==Te?!1:Be==="all"||(J.action.owner||"")===Be).sort((J,pe)=>{const an=et(J.action.status)==="Completed",on=et(pe.action.status)==="Completed";if(an!==on)return an?1:-1;const vn=J.action.dueDate?new Date(J.action.dueDate).getTime():Number.POSITIVE_INFINITY,Hn=pe.action.dueDate?new Date(pe.action.dueDate).getTime():Number.POSITIVE_INFINITY;return vn-Hn}),ua=A.score>=j.target?"#22c55e":A.score>0?"#f59e0b":"#cbd5e1";return e.jsxs("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:[e.jsxs("div",{className:`${u?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} p-6 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4`,children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm font-bold uppercase tracking-wider text-blue-600 block mb-1",children:"Lens"}),e.jsxs("button",{onClick:()=>c(y),className:`flex items-center text-2xl font-semibold transition-colors group text-left ${u?"text-slate-100 hover:text-[#63b3ff]":"text-slate-800 hover:text-[#005eb8]"}`,title:"View Lens Information",children:[y,e.jsx(Pa,{})]})]}),e.jsxs("div",{className:"shrink-0 w-full md:w-64",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[e.jsx("label",{className:`block text-xs font-semibold ${u?"text-slate-300":"text-slate-500"}`,children:"Readiness Score"}),e.jsx("button",{type:"button",onClick:()=>xe(!0),className:"group",title:"What do the readiness score levels mean?","aria-label":"What do the readiness score levels mean?",children:e.jsx(Pa,{})})]}),e.jsx("select",{value:A.score,onChange:J=>Ze(y,Number(J.target.value)),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 text-sm font-medium border ${u?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,style:{borderLeftWidth:"4px",borderLeftColor:ua},children:Tr.map(J=>e.jsxs("option",{value:J,children:[J," - ",Lr[J]]},J))})]})]}),e.jsx("div",{className:`${u?"bg-slate-900":"bg-blue-50/50"} px-6 py-4 border-b text-sm`,style:{borderLeftWidth:"4px",borderLeftColor:ua},children:e.jsxs("div",{className:"flex items-start flex-1",children:[e.jsx(Xr,{}),e.jsxs("p",{className:`whitespace-pre-line ${u?"text-slate-300":"text-slate-600"}`,children:[e.jsxs("strong",{className:u?"text-slate-100":"text-slate-700",children:[A.score===0?"Not Started":`Level ${A.score}`,":"]}),` ${a(j.id,y,A.score)}`]})]})}),e.jsxs("div",{className:`${u?"border-slate-700":"border-slate-100"} p-6 border-t`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:`text-sm font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Lens Actions"}),e.jsx("p",{className:`mt-1 text-xs ${u?"text-slate-300":"text-slate-500"}`,children:"Hierarchy: Outcome - Action - Affected component lenses."})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs("select",{"aria-label":`Filter ${y} actions by type`,value:Te,onChange:J=>P(pe=>({...pe,[F]:J.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${u?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),[...new Set([...Ss,...jt])].map(J=>e.jsx("option",{value:J,children:J},J))]}),e.jsxs("select",{"aria-label":`Filter ${y} actions by owner`,value:Be,onChange:J=>z(pe=>({...pe,[F]:J.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${u?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),Bt.map(J=>e.jsx("option",{value:J,children:J},J))]}),e.jsx("button",{onClick:()=>rt(y),className:"px-3 py-1.5 rounded bg-[#005eb8] text-white text-xs font-semibold shadow-[0_2px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Add Action"})]})]}),st.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${u?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:u?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Actions"})]})}),e.jsx("tbody",{className:`${u?"divide-slate-700":"divide-slate-100"} divide-y`,children:(Re[`${j.id}:${y}`]?st:st.slice(0,5)).map(J=>{var ga;const pe=J.action,an=et(pe.status),on=os(pe.status,pe.startDate,pe.dueDate),vn=on==="Overdue start"||on==="Overdue completion"?on:null,Hn=((ga=T[J.sourceComponentId])==null?void 0:ga.label)||J.sourceComponentId,ho=Yr(J.sourceComponentId,pe.id,t.objectives||{}),fo=Dt[an]||Dt.Planned,Wn=`${J.sourceComponentId}:${J.sourceLens}:${pe.id}`,bo=h&&k==="pathway-1"&&pe.priority?pe.priority==="must"?u?"bg-red-900/40 border-l-4 border-red-500":"bg-red-50 border-l-4 border-red-400":u?"bg-amber-900/40 border-l-4 border-amber-500":"bg-amber-50 border-l-4 border-amber-400":"";return e.jsxs("tr",{className:bo,children:[e.jsxs("td",{className:`px-3 py-2 text-sm ${u?"text-slate-100":"text-slate-800"}`,children:[e.jsx("div",{children:zt(pe.text,re[J.sourceComponentId]||[],u,r)}),J.isLinkedView?e.jsxs("div",{className:`mt-1 text-xs ${u?"text-indigo-300":"text-indigo-700"}`,children:["Linked from ",Hn," /"," ",J.sourceLens]}):null]}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("select",{"aria-label":`Current state for ${pe.text}`,value:an,onChange:lt=>H(J.sourceLens,pe,lt.target.value),className:`min-w-[7.5rem] rounded-md border px-2 py-1 text-xs font-semibold ${fo} focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b]`,children:Aa.map(lt=>e.jsx("option",{value:lt,children:lt},lt))}),vn?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:vn}):null,!ho.length&&e.jsx("div",{className:`mt-1 text-center text-xs ${u?"text-amber-200":"text-amber-700"}`,children:"Not yet linked"})]}),e.jsx("td",{className:"px-3 py-2",children:N===Wn?e.jsxs("select",{autoFocus:!0,"aria-label":`Owner for ${pe.text}`,value:pe.owner||"",onChange:lt=>{O(J.sourceLens,pe.id,lt.target.value),M(null)},onBlur:()=>M(null),className:`min-w-[9rem] rounded-md border px-2 py-1 text-xs font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] ${u?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Unassigned"}),ue.map(lt=>e.jsx("option",{value:lt.name,children:lt.name},lt.id)),pe.owner&&!ue.some(lt=>lt.name===pe.owner)?e.jsxs("option",{value:pe.owner,children:[pe.owner," (not on roster)"]}):null]}):e.jsx("button",{type:"button",onClick:()=>M(Wn),"aria-label":`Change owner for ${pe.text}`,className:"rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b]",children:e.jsx(Oi,{name:pe.owner||"",darkMode:u,imageDataUrl:je&&pe.owner===je?E:void 0})})}),e.jsx("td",{className:"px-3 py-2",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Dr,{status:pe.status,startDate:pe.startDate,dueDate:pe.dueDate}),e.jsx("button",{type:"button",onClick:()=>ct(J.sourceComponentId,J.sourceLens,pe),title:"Edit action","aria-label":`Edit ${pe.text}`,className:`${u?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} inline-flex h-8 w-8 items-center justify-center rounded-md border`,children:e.jsx(Qr,{})}),e.jsx("button",{type:"button",onClick:()=>ae(J.sourceComponentId,J.sourceLens,pe),title:"Remove action","aria-label":`Remove ${pe.text}`,className:`${u?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"} inline-flex h-8 w-8 items-center justify-center rounded-md border`,children:e.jsx(Zr,{})})]})})]},Wn)})})]})}):e.jsx("p",{className:`text-sm ${u?"text-slate-300":"text-slate-500"}`,children:p("No actions yet for this lens.")}),st.length>5?e.jsx("button",{type:"button",onClick:()=>Pe(J=>({...J,[`${j.id}:${y}`]:!J[`${j.id}:${y}`]})),className:`${u?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} mt-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:Re[`${j.id}:${y}`]?"Show top 5 actions":`Show additional ${st.length>5?st.length-5:st.length} action(s)`}):""]})]},y)})}):null,e.jsx(Kr,{rows:ee,isOpen:$,onToggle:()=>ie(y=>!y),darkMode:u}),w?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-hidden rounded-xl border p-6 shadow-2xl`,style:{borderTopWidth:"4px",borderTopColor:Et(w.action.readinessScore??0).color},children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:`text-lg font-semibold ${u?"text-slate-100":"text-slate-900"}`,children:[w.mode==="create"?"Create Action":"Edit Action"," ·"," ",Oe," / ",w.sourceLens," · ",qe]}),e.jsx("span",{className:"mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-semibold text-white",style:{backgroundColor:Et(w.action.readinessScore??0).color},children:Et(w.action.readinessScore??0).label})]}),e.jsx("button",{type:"button",onClick:Lt,className:`${u?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:"mt-4 max-h-[calc(100vh-13rem)] overflow-y-auto pr-1 grid gap-3",children:[e.jsx("div",{className:`${u?"border-slate-700 bg-slate-900":"border-blue-100 bg-white"} sticky top-0 z-10 rounded-md border px-3 py-2 shadow-sm`,children:e.jsxs("label",{className:`text-sm ${u?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Description"}),e.jsx("textarea",{value:w.action.text,onChange:y=>K({text:y.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${u?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})}),e.jsxs("div",{className:`${u?"border-slate-700 bg-slate-900 text-slate-200":"border-blue-100 bg-blue-50 text-slate-700"} rounded-md border px-3 py-2 text-xs`,children:[e.jsx("strong",{children:"Linking order:"})," first attach this action to one or more outcomes, then add affected component lenses (component + lens) where this action should appear."]}),e.jsx(pi,{action:w.action,onChange:K,teamMembers:ue,darkMode:u}),e.jsxs("div",{className:`${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Evidence Links / Docs"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:Ne,className:`${u?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Add web link"}),e.jsxs("label",{className:`${u?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:["Upload file(s)",e.jsx("input",{type:"file",multiple:!0,className:"hidden",onChange:gt})]})]})]}),e.jsx("p",{className:`mt-1 text-xs ${u?"text-slate-300":"text-slate-500"}`,children:"Add evidence as either web links or uploaded files. Everything appears below in a single list."}),e.jsx("div",{className:`${u?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:w.evidenceItems.length?w.evidenceItems.map((y,A)=>e.jsxs("div",{className:`${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} grid grid-cols-1 gap-2 rounded border p-2 md:grid-cols-[auto,1fr,1fr,auto]`,children:[e.jsx("div",{className:"flex items-start pt-2",children:e.jsx("span",{className:`${y.type==="file"?"bg-emerald-100 text-emerald-800":"bg-blue-100 text-blue-800"} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`,children:y.type==="file"?"File":"Link"})}),e.jsx("input",{value:y.label,onChange:F=>Me(A,"label",F.target.value),placeholder:y.type==="file"?"Document label":"Link label",className:`rounded-md border px-2.5 py-2 text-sm ${u?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`}),e.jsx("input",{value:y.href,onChange:F=>Me(A,"href",F.target.value),placeholder:y.type==="file"?"Embedded file URL (auto generated)":"https://...",className:`rounded-md border px-2.5 py-2 text-sm ${u?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,disabled:y.type==="file"}),e.jsx("button",{type:"button",onClick:()=>At(A),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},`${y.type}-${A}`)):e.jsx("p",{className:`px-2 py-1 text-sm ${u?"text-slate-300":"text-slate-500"}`,children:"No evidence links or documents added yet."})})]}),e.jsxs("div",{className:`${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsx("p",{className:`text-sm font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Affected Outcomes"}),e.jsx("p",{className:`mt-1 text-xs ${u?"text-slate-300":"text-slate-500"}`,children:"Tick 1-3 outcomes directly impacted by this action. Outcome status is auto-derived from these linked actions."}),e.jsx("div",{className:`${u?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:(((ca=t.objectives)==null?void 0:ca[w.sourceComponentId])||[]).length?(((da=t.objectives)==null?void 0:da[w.sourceComponentId])||[]).map(y=>{const A=w.linkedObjectiveIds.includes(y.id);return e.jsxs("label",{className:`${u?"hover:bg-slate-700":"hover:bg-slate-50"} flex items-start gap-2 rounded px-2 py-1.5`,children:[e.jsx("input",{type:"checkbox",checked:A,onChange:()=>ft(y.id),className:"mt-0.5"}),e.jsx("span",{className:`text-sm ${u?"text-slate-100":"text-slate-700"}`,children:y.text||"Untitled outcome"})]},y.id)}):e.jsx("p",{className:`px-2 py-1 text-sm ${u?"text-slate-300":"text-slate-500"}`,children:p("No outcomes are defined for this component yet.")})})]}),e.jsxs("div",{className:`${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Affected Component Lenses"}),e.jsx("span",{className:"inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-600",title:"Actions often contribute to other component lenses. Add those targets here so the same action is visible in each relevant lens.",children:"i"})]}),e.jsxs("div",{className:"mt-2 space-y-2",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2",children:[e.jsx("select",{value:w.targetPickerComponentId,onChange:y=>{const A=y.target.value,F=T[A];be(A,(F==null?void 0:F.lenses[0])||"")},className:`rounded-md border px-2.5 py-2 text-sm ${u?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:n.map(y=>e.jsx("option",{value:y.id,children:y.label},y.id))}),e.jsx("select",{value:w.targetPickerLens,onChange:y=>be(w.targetPickerComponentId,y.target.value),className:`rounded-md border px-2.5 py-2 text-sm ${u?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:(((ma=T[w.targetPickerComponentId])==null?void 0:ma.lenses)||[]).map(y=>e.jsx("option",{value:y,children:y},y))}),e.jsx("button",{type:"button",onClick:he,disabled:_t(w.action,w.sourceComponentId,w.sourceLens).some(y=>y.componentId===w.targetPickerComponentId&&y.lens===w.targetPickerLens),title:_t(w.action,w.sourceComponentId,w.sourceLens).some(y=>y.componentId===w.targetPickerComponentId&&y.lens===w.targetPickerLens)?"Already added":"Add selected affected lens",className:`${u?"border-cyan-500/50 bg-cyan-500/15 text-cyan-100 hover:bg-cyan-500/25":"border-cyan-300 bg-cyan-100 text-cyan-900 hover:bg-cyan-200"} rounded-md border px-3 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-60`,children:"Add Lens"})]}),e.jsx("div",{className:`${u?"border-slate-700":"border-slate-200"} overflow-hidden rounded border`,children:e.jsxs("table",{className:`min-w-full ${u?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:u?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Component"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Remove"})]})}),e.jsx("tbody",{className:`${u?"divide-slate-700":"divide-slate-100"} divide-y`,children:_t(w.action,w.sourceComponentId,w.sourceLens).map(y=>{var A;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-2.5 py-2 text-sm ${u?"text-slate-100":"text-slate-700"}`,children:((A=T[y.componentId])==null?void 0:A.label)||y.componentId}),e.jsx("td",{className:`px-2.5 py-2 text-sm ${u?"text-slate-100":"text-slate-700"}`,children:y.lens}),e.jsx("td",{className:"px-2.5 py-2",children:e.jsx("button",{type:"button",onClick:()=>We(y.componentId,y.lens),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},`${y.componentId}:${y.lens}`)})})]})})]})]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[w.mode==="edit"&&w.actionId?e.jsx("button",{type:"button",onClick:()=>{if(w.action.priority==="must"){window.alert("You are trying to delete what we have classified as a MUST action, and it shouldn't be deleted. Please re-review.");return}d(w.sourceComponentId,w.sourceLens,w.actionId),Lt()},className:"mr-auto rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100",children:"Delete Action"}):null,e.jsx("button",{type:"button",onClick:Lt,className:`${u?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Cancel"}),e.jsx("button",{type:"button",onClick:yn,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Save Action"})]})]})}):null,ne?e.jsx(Nr,{onClose:()=>xe(!1),darkMode:u}):null,Ae.length>0?e.jsx(Ai,{message:Ae[0].message,onDismiss:()=>Fe(y=>y.slice(1)),celebrate:!0},Ae[0].id):null,Se&&Ie&&nt?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":"Outcome Details",className:`w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${u?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${u?"text-slate-100":"text-slate-900"}`,children:"Outcome Details"}),e.jsxs("div",{className:"flex items-center gap-2",children:[Ie&&$r(Ie.id)?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>{Vt(Ie),ye(null)},className:`${u?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Edit"}),e.jsx("button",{type:"button",onClick:()=>{Tt(Ie.id),ye(null)},className:"rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-700 hover:bg-red-100",children:"Delete"})]}):null,e.jsx("button",{type:"button",onClick:()=>ye(null),className:`${u?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]})]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${u?"text-slate-400":"text-slate-500"}`,children:"Outcome"}),e.jsx("p",{className:`mt-1 text-sm ${u?"text-slate-100":"text-slate-900"}`,children:Ie.text||"Untitled outcome"})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${u?"text-slate-400":"text-slate-500"}`,children:"Owner"}),e.jsx("p",{className:`mt-1 text-sm ${u?"text-slate-100":"text-slate-900"}`,children:Ie.owner||"Unassigned"})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${u?"text-slate-400":"text-slate-500"}`,children:"Status"}),e.jsx("span",{className:`mt-1 inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${Oa[nt]}`,children:nt})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${u?"text-slate-400":"text-slate-500"}`,children:"Linked Actions"}),De.length?e.jsx("div",{className:`mt-2 overflow-x-auto rounded-md border ${u?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:`min-w-full divide-y ${u?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"}`,children:[e.jsx("thead",{className:u?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Navigate"})]})}),e.jsx("tbody",{className:`divide-y ${u?"divide-slate-700":"divide-slate-100"}`,children:De.map(y=>{var F,Q;const A=y.status?Dt[y.status]||Dt.Planned:Dt.Planned;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${u?"text-slate-100":"text-slate-700"}`,children:y.lens}),e.jsx("td",{className:`px-3 py-2 text-sm ${u?"text-slate-100":"text-slate-700"}`,children:((F=y.action)==null?void 0:F.text)||"Linked action not found"}),e.jsxs("td",{className:"px-3 py-2",children:[y.action?e.jsx("select",{"aria-label":`Current state for ${y.action.text}`,value:y.status||"Planned",onChange:se=>H(y.lens,y.action,se.target.value),className:`min-w-[7.5rem] rounded-md border px-2 py-1 text-xs font-semibold ${A} focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b]`,children:Aa.map(se=>e.jsx("option",{value:se,children:se},se))}):e.jsx("span",{className:"text-xs text-slate-500",children:"Not linked"}),y.temporalStatus==="Overdue start"||y.temporalStatus==="Overdue completion"?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:y.temporalStatus}):null]}),e.jsx("td",{className:"px-3 py-2",children:y.action?e.jsx("button",{type:"button",onClick:()=>Mt(y.lens,y.action||void 0),className:`${u?"border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25":"border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Open Action"}):e.jsx("span",{className:`text-xs ${u?"text-slate-500":"text-slate-400"}`,children:"Unavailable"})})]},`${y.lens}:${((Q=y.action)==null?void 0:Q.id)||"missing"}`)})})]})}):e.jsx("p",{className:`mt-1 text-sm ${u?"text-slate-300":"text-slate-500"}`,children:"No linked actions assigned."})]})]})]})}):null,me?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":me.mode==="create"?"Add Outcome":"Edit Outcome",className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${u?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsx("h3",{className:`text-lg font-semibold ${u?"text-slate-100":"text-slate-900"}`,children:me.mode==="create"?"Add Outcome":"Edit Outcome"}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"objective-editor-text",className:`block text-xs font-medium ${u?"text-slate-300":"text-slate-700"}`,children:"Outcome description"}),e.jsx("textarea",{id:"objective-editor-text",value:me.text,onChange:y=>Ce({...me,text:y.target.value}),className:`mt-1 w-full rounded-md border p-2 text-sm h-20 ${u?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"objective-editor-owner",className:`block text-xs font-medium ${u?"text-slate-300":"text-slate-700"}`,children:"Owner"}),e.jsxs("select",{id:"objective-editor-owner",value:me.owner,onChange:y=>Ce({...me,owner:y.target.value}),className:`mt-1 w-full rounded-md border p-2 text-sm ${u?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Unassigned"}),ue.map(y=>e.jsxs("option",{value:y.name,children:[y.name||"Unnamed",y.role?` - ${y.role}`:""]},y.id)),me.owner&&!ue.some(y=>y.name===me.owner)?e.jsxs("option",{value:me.owner,children:[me.owner," (not on roster)"]}):null]})]})]}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:nn,className:`${u?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Cancel"}),e.jsx("button",{type:"button",onClick:$t,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Save Outcome"})]})]})}):null,e.jsx(bi,{open:de,onCancel:()=>{fe.current=null,ce(!1)},onContinue:y=>{y&&ze(un,!0);const A=fe.current;fe.current=null,ce(!1),A==null||A()},darkMode:u}),e.jsx(St,{open:Ee.isOpen,onClose:Ee.close,title:"Assessing a component",darkMode:u,body:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Each component is assessed lens by lens: justify where you are, review its outcomes, then plan and track delivery actions for each readiness level."}),e.jsx("p",{children:'Click "What is this?" at the top for what the component covers, and "Evidence Links and Docs" at the bottom rounds up everything attached as evidence across all of its actions.'})]})})]})}const jn=50;function sl(t){const n=new Date(t);return Number.isNaN(n.getTime())?t:n.toLocaleString("en-GB",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function al({events:t,darkMode:n=!1}){const s=ht("audit-log"),[a,i]=g.useState("all"),[l,o]=g.useState("all"),[c,d]=g.useState("all"),[m,r]=g.useState(""),[f,b]=g.useState(1),h=g.useMemo(()=>["all",...Array.from(new Set(t.map(k=>k.eventType))).sort()],[t]),x=g.useMemo(()=>["all",...Array.from(new Set(t.map(k=>k.componentId).filter(Boolean))).sort()],[t]),E=g.useMemo(()=>["all",...Array.from(new Set(t.map(k=>k.actor).filter(Boolean))).sort()],[t]),S=g.useMemo(()=>{const k=m.trim().toLowerCase();return t.filter(p=>a==="all"?!0:p.eventType===a).filter(p=>l==="all"?!0:p.componentId===l).filter(p=>c==="all"?!0:p.actor===c).filter(p=>k?[p.summary,p.reason,p.entityId,p.lens].filter(Boolean).some(B=>String(B).toLowerCase().includes(k)):!0).sort((p,B)=>Date.parse(B.timestamp)-Date.parse(p.timestamp))},[t,a,l,c,m]),u=Math.max(1,Math.ceil(S.length/jn)),C=Math.min(f,u),R=(C-1)*jn,j=S.slice(R,R+jn);return e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:"Audit Log"}),e.jsx(wt,{onClick:s.reopen,darkMode:n})]}),e.jsx("p",{className:`text-sm mt-1 ${n?"text-slate-300":"text-slate-600"}`,children:"Timestamped history of CST changes, including who made each change."})]}),e.jsx(St,{open:s.isOpen,onClose:s.close,title:"Audit Log",darkMode:n,body:e.jsx("p",{children:"A timestamped history of changes made to your CST, including who made each change. Filter by event type, component, or actor, and expand a row to see exactly what changed."})}),e.jsxs("div",{className:`grid gap-3 md:grid-cols-4 rounded-lg border p-4 ${n?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${n?"text-slate-200":"text-slate-700"}`,children:"Event type"}),e.jsx("select",{value:a,onChange:k=>{i(k.target.value),b(1)},className:`w-full rounded-md border px-2 py-1.5 ${n?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:h.map(k=>e.jsx("option",{value:k,children:k==="all"?"All":k},k))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${n?"text-slate-200":"text-slate-700"}`,children:"Component"}),e.jsx("select",{value:l,onChange:k=>{o(k.target.value),b(1)},className:`w-full rounded-md border px-2 py-1.5 ${n?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:x.map(k=>e.jsx("option",{value:k,children:k==="all"?"All":k},k))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${n?"text-slate-200":"text-slate-700"}`,children:"Actor"}),e.jsx("select",{value:c,onChange:k=>{d(k.target.value),b(1)},className:`w-full rounded-md border px-2 py-1.5 ${n?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:E.map(k=>e.jsx("option",{value:k,children:k==="all"?"All":k},k))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${n?"text-slate-200":"text-slate-700"}`,children:"Search"}),e.jsx("input",{value:m,onChange:k=>{r(k.target.value),b(1)},placeholder:"summary, reason, id",className:`w-full rounded-md border px-2 py-1.5 ${n?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsx("div",{className:`rounded-lg border overflow-hidden ${n?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full text-sm",children:[e.jsx("thead",{className:n?"bg-slate-900 text-slate-200":"bg-slate-50 text-slate-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left",children:"When"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Who"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"What"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Context"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Details"})]})}),e.jsx("tbody",{className:n?"bg-slate-800 text-slate-100":"bg-white text-slate-800",children:j.length?j.map(k=>e.jsxs("tr",{className:n?"border-t border-slate-700":"border-t border-slate-100",children:[e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:sl(k.timestamp)}),e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:k.actor||"Unknown user"}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{className:"font-medium",children:k.summary}),e.jsx("div",{className:`text-xs mt-1 ${n?"text-slate-300":"text-slate-600"}`,children:k.eventType})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{children:k.componentId||"-"}),e.jsx("div",{className:`text-xs ${n?"text-slate-300":"text-slate-600"}`,children:k.lens||"-"})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[k.reason?e.jsxs("div",{children:["Reason: ",k.reason]}):null,k.before||k.after?e.jsxs("details",{className:"mt-1",children:[e.jsx("summary",{className:"cursor-pointer text-xs underline",children:"Before/After"}),e.jsx("pre",{className:`mt-1 text-xs whitespace-pre-wrap ${n?"text-slate-300":"text-slate-600"}`,children:JSON.stringify({before:k.before,after:k.after},null,2)})]}):null]})]},k.id)):e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-6 text-center",colSpan:5,children:"No audit events found for the selected filters."})})})]})}),e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("span",{className:n?"text-slate-300":"text-slate-600",children:["Showing ",j.length?R+1:0,"-",Math.min(R+jn,S.length)," of"," ",S.length]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>b(k=>Math.max(1,k-1)),disabled:C<=1,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${n?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Previous"}),e.jsxs("span",{className:n?"text-slate-200":"text-slate-700",children:["Page ",C," / ",u]}),e.jsx("button",{type:"button",onClick:()=>b(k=>Math.min(u,k+1)),disabled:C>=u,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${n?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Next"})]})]})]})}function il(t){if(!t)return!1;const n=new Date(t);return!isNaN(n.getTime())}function Yn(t){return!t||!il(t)?null:new Date(t)}function Li(t){const n=[],s=t.cst;if(!s.goLiveDate||!s.goLiveDate.trim())return n.push({field:"cst.goLiveDate",message:"Go live date is required."}),{isValid:!1,errors:n};const a=Yn(s.goLiveDate);if(!a)return n.push({field:"cst.goLiveDate",message:"Go live date must be a valid date."}),{isValid:!1,errors:n};const i=Yn(s.fullAdoptionDate);s.fullAdoptionDate&&!i&&n.push({field:"cst.fullAdoptionDate",message:"Full adoption date must be a valid date when provided."});const l=Yn(s.benefitRealizationDate);return s.benefitRealizationDate&&!l&&n.push({field:"cst.benefitRealizationDate",message:"Benefit realization date must be a valid date when provided."}),i&&i<a&&n.push({field:"cst.fullAdoptionDate",message:"Full adoption date cannot be earlier than go live date."}),l&&l<(i||a)&&n.push({field:"cst.benefitRealizationDate",message:"Benefit realization date cannot be earlier than full adoption date (or go live when full adoption is empty)."}),{isValid:n.length===0,errors:n}}function ol(t){const n=g.useMemo(()=>t.errors.reduce((s,a)=>(s[a.field]||(s[a.field]=[]),s[a.field].push(a.message),s),{}),[t.errors]);return s=>{var a;return(a=n[s])==null?void 0:a[0]}}function $a(t){const n=[];(!t.trustName||t.trustName.trim()==="")&&n.push({field:"trustName",message:"Trust name is required"}),t.trustName&&t.trustName.length>255&&n.push({field:"trustName",message:"Trust name cannot exceed 255 characters"}),t.region&&t.region.length>100&&n.push({field:"region",message:"Region cannot exceed 100 characters"});const s=Li(t);return n.push(...s.errors),{isValid:n.length===0,errors:n}}function rl({pathway:t,darkMode:n=!1}){return t==="pathway-1"?null:e.jsxs("div",{className:`mt-3 rounded-md border p-3 text-xs ${n?"border-amber-500/40 bg-amber-500/10 text-amber-100":"border-amber-300 bg-amber-50 text-amber-900"}`,children:[e.jsx("p",{className:"font-semibold",children:"Objectives and actions are currently Pathway 1 only"}),e.jsx("p",{className:"mt-1",children:"Every outcome and action in this tool right now is written for Pathway 1 (starting from scratch). Pathway 2 and Pathway 3 will need their own objectives and actions - those haven't been written yet, so components on this pathway show no outcomes or actions until pathway-specific content is added."})]})}function ll(t){return t.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"export"}function Mi(t){var n;return(n=t==null?void 0:t.url)!=null&&n.trim()?"custom":((t==null?void 0:t.fallback)??"default")==="base"?"base":"default"}function Os({aliases:t,onChange:n,darkMode:s,placeholder:a="Add text this link should also match...",emptyLabel:i="No extra matching text added yet.",addButtonLabel:l="Add"}){const[o,c]=g.useState(""),d=()=>{const m=o.trim();if(!m||t.some(r=>r.toLowerCase()===m.toLowerCase())){c("");return}n([...t,m]),c("")};return e.jsxs("div",{children:[t&&e.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[t.map(m=>e.jsxs("span",{className:`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${s?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[m,e.jsx("button",{type:"button",onClick:()=>n(t.filter(r=>r!==m)),"aria-label":`Remove "${m}"`,className:s?"text-slate-400 hover:text-slate-100":"text-slate-500 hover:text-slate-800",children:"×"})]},m)),!t.length&&e.jsx("span",{className:`text-xs ${s?"text-slate-500":"text-slate-400"}`,children:i})]}),e.jsxs("div",{className:"mt-2 flex gap-2",children:[e.jsx("input",{type:"text",value:o,onChange:m=>c(m.target.value),onKeyDown:m=>{m.key==="Enter"&&(m.preventDefault(),d())},placeholder:a,className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${s?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:d,className:Ge,children:l})]})]})}function cl({link:t,perLink:n,baseOverrideUrl:s,onSave:a,onClose:i,darkMode:l}){const[o,c]=g.useState(Mi(n)),[d,m]=g.useState((n==null?void 0:n.url)??""),[r,f]=g.useState((n==null?void 0:n.matchAliases)??[]),b=(s==null?void 0:s.trim())||Ft.url,h=Di(t.label).find(S=>S!==t.label),x=[{value:"default",label:"Default Toolkit Link",url:t.url},{value:"base",label:"Project Specific Homepage",url:b},{value:"custom",label:"Custom URL",url:d}],E=()=>{if(o==="custom"&&!d.trim()){window.alert("Enter a custom URL, or choose Default or Base instead.");return}const S={fallback:o==="base"?"base":"default",url:o==="custom"?d.trim():void 0,matchAliases:r.length?r:void 0};a(o==="default"&&!r.length?void 0:S)};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":`Edit ${t.label} link`,className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${l?"text-slate-100":"text-slate-900"}`,children:t.label}),e.jsx("button",{type:"button",onClick:i,"aria-label":"Close",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${l?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:"mt-4 space-y-2",children:x.map(S=>e.jsxs("label",{className:`flex items-start gap-2 rounded-md border p-2.5 text-sm ${o===S.value?l?"border-blue-400 bg-blue-500/10":"border-blue-400 bg-blue-50":l?"border-slate-700":"border-slate-200"}`,children:[e.jsx("input",{type:"radio",name:`link-source-${t.key}`,checked:o===S.value,onChange:()=>c(S.value),className:"mt-1"}),e.jsxs("span",{className:"flex-1",children:[e.jsx("span",{className:`block font-medium ${l?"text-slate-100":"text-slate-800"}`,children:S.label}),S.value==="custom"&&o==="custom"?e.jsx("input",{type:"url",value:d,onChange:u=>m(u.target.value),placeholder:"https://...",className:`mt-1 w-full rounded border px-2 py-1.5 text-xs ${l?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}):S.url?e.jsx("a",{href:S.url,target:"_blank",rel:"noopener noreferrer",onClick:u=>u.stopPropagation(),className:`block truncate text-xs underline ${l?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:S.url}):e.jsx("span",{className:`block truncate text-xs ${l?"text-slate-400":"text-slate-500"}`,children:"No URL set yet."})]})]},S.value))}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${l?"text-slate-400":"text-slate-500"}`,children:"Match text"}),e.jsx("p",{className:`mt-1 text-xs ${l?"text-slate-300":"text-slate-500"}`,children:"This link is automatically matched in action/summary text. Add extra text below if it should match on other words too."}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-1.5",children:[e.jsxs("span",{className:`rounded-full border px-2 py-0.5 text-xs ${l?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[t.label," ",e.jsx("span",{className:"opacity-60",children:"(label)"})]}),h&&e.jsxs("span",{className:`rounded-full border px-2 py-0.5 text-xs ${l?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[h," ",e.jsx("span",{className:"opacity-60",children:"(auto-detected)"})]})]}),e.jsx("div",{className:"mt-2",children:e.jsx(Os,{aliases:r,onChange:f,darkMode:l})})]}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:i,className:Ge,children:"Cancel"}),e.jsx("button",{type:"button",onClick:E,className:Ht,children:"Save"})]})]})})}function dl({title:t,aliases:n,onSave:s,onClose:a,darkMode:i}){const[l,o]=g.useState(n);return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":`Match text for ${t}`,className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${i?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-900"}`,children:[t," - match text"]}),e.jsx("button",{type:"button",onClick:a,"aria-label":"Close",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${i?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("p",{className:`mt-2 text-xs ${i?"text-slate-300":"text-slate-500"}`,children:"This link is automatically matched by its name. Add extra text below if it should match on other words too."}),e.jsx("div",{className:"mt-3",children:e.jsx(Os,{aliases:l,onChange:o,darkMode:i})}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:a,className:Ge,children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>s(l),className:Ht,children:"Save"})]})]})})}function ml(t){const n=ki[t]||[],s=new Map,a=new Map;return n.forEach(i=>{const l=Xt[i];((l==null?void 0:l.inputs)??[]).forEach(o=>s.set(o.key,o)),((l==null?void 0:l.deliverables)??[]).forEach(o=>a.set(o.key,o))}),{inputs:[...s.values()],deliverables:[...a.values()]}}function ul({orgProfile:t,onProfileUpdate:n,components:s,onGoToIntroduction:a,onContinueToVision:i,onGoToWhereAmINow:l,darkMode:o=!1,currentUserId:c,onCurrentUserChange:d,showExternalLinksSection:m=!1}){var Re,Pe,N,M,_,P,Y,z,oe,ue,je,ke,Ve,ut,It,Nt;const[r,f]=g.useState(t),[b,h]=g.useState(null),[x,E]=g.useState(null),S=g.useRef(null),u=ht("cst-personalisation"),C=$a(r),R=ol(C);g.useEffect(()=>{f(t)},[t]);const j=g.useCallback(I=>{const T={...r,trustName:I};f(T),n(T)},[r,n]),k=g.useCallback(I=>{const T={...r,projectName:I};f(T),n(T)},[r,n]),p=g.useCallback(I=>{const T={...r,leadName:I};f(T),n(T)},[r,n]),[B,D]=g.useState(null),V=g.useCallback(I=>{I!==r.cst.pathway&&D(I)},[r.cst.pathway]),le=g.useCallback(()=>{if(!B)return;const I={...r,cst:{...r.cst,pathway:B}};f(I),n(I),D(null)},[B,r,n]),re=g.useCallback(()=>{D(null)},[]),w=g.useCallback((I,T)=>{const ee={...r,cst:{...r.cst,[I]:T}};f(ee),n(ee)},[r,n]),L=g.useCallback(I=>{const T={...r,cst:{...r.cst,toolkitChoice:I}};f(T),n(T)},[r,n]),ne=g.useCallback(I=>{const T={...r,linkOverrides:I};f(T),n(T)},[r,n]),xe=g.useCallback((I,T)=>{const ee={...r.componentFurtherReading};T.trim()?ee[I]=T.trim():delete ee[I];const ge={...r,componentFurtherReading:ee};f(ge),n(ge)},[r,n]),Ae=g.useCallback(I=>{var Oe;const T={key:`custom-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,label:"",url:"",type:"additional"},ee={...r.customComponentLinks,[I]:[...((Oe=r.customComponentLinks)==null?void 0:Oe[I])||[],T]},ge={...r,customComponentLinks:ee};f(ge),n(ge)},[r,n]),Fe=g.useCallback((I,T,ee,ge)=>{var nt;const Oe=((nt=r.customComponentLinks)==null?void 0:nt[I])||[],qe={...r.customComponentLinks,[I]:Oe.map(De=>De.key===T?{...De,[ee]:ge}:De)},Ie={...r,customComponentLinks:qe};f(Ie),n(Ie)},[r,n]),U=g.useCallback((I,T,ee)=>{var Ie;const ge=((Ie=r.customComponentLinks)==null?void 0:Ie[I])||[],Oe={...r.customComponentLinks,[I]:ge.map(nt=>nt.key===T?{...nt,matchAliases:ee.length?ee:void 0}:nt)},qe={...r,customComponentLinks:Oe};f(qe),n(qe)},[r,n]),de=g.useCallback((I,T)=>{var qe;const ee=((qe=r.customComponentLinks)==null?void 0:qe[I])||[],ge={...r.customComponentLinks,[I]:ee.filter(Ie=>Ie.key!==T)},Oe={...r,customComponentLinks:ge};f(Oe),n(Oe)},[r,n]),ce=g.useCallback(()=>{const I={id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:"",role:""},T={...r,teamMembers:[...r.teamMembers||[],I]};f(T),n(T)},[r,n]),fe=g.useCallback((I,T,ee)=>{const ge={...r,teamMembers:(r.teamMembers||[]).map(Oe=>Oe.id===I?{...Oe,[T]:ee}:Oe)};f(ge),n(ge)},[r,n]),Se=g.useCallback(I=>{const T={...r,teamMembers:(r.teamMembers||[]).filter(ee=>ee.id!==I)};f(T),n(T),c===I&&d("")},[r,n,c,d]),ye=r.stakeholderReferenceLists||Ln,me=g.useCallback((I,T)=>{const ee={...r,stakeholderReferenceLists:{...ye,[I]:T}};f(ee),n(ee)},[r,n,ye]),Ce=r.coreLinks&&r.coreLinks.length>0?r.coreLinks:Ci,Le=g.useCallback(()=>{const I={key:`core-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,label:"",url:"",type:"core"},T={...r,coreLinks:[...Ce,I]};f(T),n(T)},[r,Ce,n]),Ue=g.useCallback((I,T,ee)=>{const ge={...r,coreLinks:Ce.map(Oe=>Oe.key===I?{...Oe,[T]:ee}:Oe)};f(ge),n(ge)},[r,Ce,n]),G=g.useCallback((I,T)=>{const ee={...r,coreLinks:Ce.map(ge=>ge.key===I?{...ge,matchAliases:T.length?T:void 0}:ge)};f(ee),n(ee)},[r,Ce,n]),W=g.useCallback(I=>{const T={...r,coreLinks:Ce.filter(ee=>ee.key!==I)};f(T),n(T)},[r,Ce,n]),X=r.toolLinks||[],_e=g.useCallback(()=>{const I="highlight-builder",T={key:`tool-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,tool:I,matchText:In[I].matchText},ee={...r,toolLinks:[...X,T]};f(ee),n(ee)},[r,X,n]),ot=g.useCallback((I,T)=>{const ee={...r,toolLinks:X.map(ge=>ge.key===I?{...ge,tool:T,matchText:In[T].matchText}:ge)};f(ee),n(ee)},[r,X,n]),Ye=g.useCallback((I,T)=>{const ee={...r,toolLinks:X.map(ge=>ge.key===I?{...ge,matchText:T}:ge)};f(ee),n(ee)},[r,X,n]),$=g.useCallback(I=>{const T={...r,toolLinks:X.filter(ee=>ee.key!==I)};f(T),n(T)},[r,X,n]),ie=g.useCallback(I=>{const T={...r,externalLinksInitiated:I};f(T),n(T)},[r,n]),Z=g.useCallback(()=>{const I={schemaVersion:"cst-v1",exportedAt:new Date().toISOString(),orgProfile:r},T=`cst-personalisation-${r.trustName?ll(r.trustName):"export"}.json`;Ut(T,JSON.stringify(I,null,2),"application/json")},[r]),we=g.useCallback(()=>{var I;(I=S.current)==null||I.click()},[]),Ee=g.useCallback(async I=>{var ee;const T=(ee=I.target.files)==null?void 0:ee[0];if(I.target.value="",!!T)try{const ge=await T.text(),Oe=JSON.parse(ge);if(!Oe.orgProfile||typeof Oe.orgProfile!="object"){window.alert("This file does not contain Project Profile data.");return}const qe=Mn(Oe.orgProfile),Ie=$a(qe);if(!window.confirm("Import this Project Profile file? This replaces your current organisation profile, pathway/timeline, toolkit links, further reading, core links and team members."+(Ie.errors.length?`

Note: the imported data has ${Ie.errors.length} validation warning(s) you can fix after importing.`:"")))return;f(qe),n(qe)}catch{window.alert("Unable to read this file. Please choose a valid Project Profile export.")}},[n]);return e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-800"}`,children:"Project Profile"}),e.jsx(wt,{onClick:u.reopen,darkMode:o})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:we,className:Ge,children:"Import Setup"}),e.jsx("input",{ref:S,type:"file",accept:"application/json",className:"hidden",onChange:Ee}),e.jsx("button",{type:"button",onClick:Z,className:Ge,children:"Export Setup"}),e.jsx("button",{type:"button",onClick:a,className:Ge,"data-testid":"cst-show-intro-button",children:"Go to Introduction"}),e.jsx("button",{type:"button",onClick:i,disabled:!r.trustName.trim(),title:r.trustName.trim()?void 0:"Add a trust name below first so the rest of the tool unlocks",className:`${Ht} disabled:cursor-not-allowed disabled:opacity-50`,"data-testid":"cst-continue-to-vision-button",children:"Continue to Vision →"})]})]}),e.jsx("p",{className:`text-sm -mt-4 ${o?"text-slate-300":"text-slate-600"}`,children:"This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways it follows, and how it's tracking against its readiness phases."}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 1: Organisation profile"}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Provide some initial details to the project name, and change manager"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-trust-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Organisation Name"}),e.jsx("input",{id:"org-trust-name",type:"text","data-testid":"cst-trust-name-input",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:r.trustName,onChange:I=>j(I.target.value),"aria-invalid":!!R("trustName"),"aria-describedby":R("trustName")?"org-trust-name-error":void 0}),R("trustName")?e.jsx("p",{id:"org-trust-name-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:R("trustName")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-project-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Programme / Project Name"}),e.jsx("input",{id:"org-project-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:r.projectName||"",onChange:I=>k(I.target.value)})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-lead-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Lead Submitter (Change Lead)"}),e.jsx("input",{id:"org-lead-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:r.leadName||"",onChange:I=>p(I.target.value)})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 2: Pathway and timeline"}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Choose the full pathway title for your programme, then set key timeline dates."})]}),e.jsx("div",{className:"mt-3",children:e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-pathway",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Pathway"}),e.jsx("select",{id:"cst-pathway",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:r.cst.pathway,onChange:I=>V(I.target.value),"aria-invalid":!!R("cst.pathway"),"aria-describedby":R("cst.pathway")?"cst-pathway-error":void 0,children:On.map(I=>e.jsx("option",{value:I.value,children:I.label},I.value))}),R("cst.pathway")?e.jsx("p",{id:"cst-pathway-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:R("cst.pathway")}):null]})}),e.jsx(rl,{pathway:r.cst.pathway,darkMode:o}),e.jsxs("div",{className:"mt-3 grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-go-live",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Go Live Date (required)"}),e.jsx("input",{id:"cst-go-live",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:r.cst.goLiveDate,onChange:I=>w("goLiveDate",I.target.value),"aria-invalid":!!R("cst.goLiveDate"),"aria-describedby":R("cst.goLiveDate")?"cst-go-live-error":void 0}),R("cst.goLiveDate")?e.jsx("p",{id:"cst-go-live-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:R("cst.goLiveDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-full-adoption",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Full Adoption Date (optional)"}),e.jsx("input",{id:"cst-full-adoption",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:r.cst.fullAdoptionDate,onChange:I=>w("fullAdoptionDate",I.target.value),"aria-invalid":!!R("cst.fullAdoptionDate"),"aria-describedby":R("cst.fullAdoptionDate")?"cst-full-adoption-error":void 0}),R("cst.fullAdoptionDate")?e.jsx("p",{id:"cst-full-adoption-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:R("cst.fullAdoptionDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-benefit",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Benefit Realisation Date (optional)"}),e.jsx("input",{id:"cst-benefit",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:r.cst.benefitRealizationDate,onChange:I=>w("benefitRealizationDate",I.target.value),"aria-invalid":!!R("cst.benefitRealizationDate"),"aria-describedby":R("cst.benefitRealizationDate")?"cst-benefit-error":void 0}),R("cst.benefitRealizationDate")?e.jsx("p",{id:"cst-benefit-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:R("cst.benefitRealizationDate")}):null]})]}),C.errors.filter(I=>I.field.startsWith("cst.")).length>0?e.jsxs("div",{className:`mt-4 rounded-md border p-3 ${o?"border-amber-500/40 bg-amber-500/10":"border-amber-300 bg-amber-50"}`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-amber-200":"text-amber-800"}`,children:"CST validation warnings"}),e.jsx("ul",{className:`mt-2 space-y-1 text-sm ${o?"text-amber-100":"text-amber-900"}`,children:C.errors.filter(I=>I.field.startsWith("cst.")).map(I=>e.jsxs("li",{children:["- ",I.message]},I.field+I.message))})]}):null]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 3: Team Members"}),e.jsx("p",{className:`text-sm mt-1 ${o?"text-slate-300":"text-slate-600"}`,children:"Add the people working on this programme so actions and readiness slides can be assigned to a named owner. This roster is saved with the CST; who you're signed in as is remembered on this device only."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-current-user",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"You are signed in as"}),e.jsxs("select",{id:"cst-current-user",value:c||"",onChange:I=>d(I.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 md:w-1/2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Not selected"}),(r.teamMembers||[]).map(I=>e.jsxs("option",{value:I.id,children:[I.name||"Unnamed",I.role?` - ${I.role}`:""]},I.id))]})]}),e.jsxs("div",{className:"space-y-2",children:[(r.teamMembers||[]).map(I=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2 items-center",children:[e.jsx("input",{value:I.name,onChange:T=>fe(I.id,"name",T.target.value),placeholder:"Name",className:`rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("input",{value:I.role,onChange:T=>fe(I.id,"role",T.target.value),placeholder:"Role (e.g. Change Lead)",className:`rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("button",{type:"button",onClick:()=>Se(I.id),className:"shrink-0 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},I.id)),(r.teamMembers||[]).length?null:e.jsx("p",{className:`text-sm ${o?"text-slate-400":"text-slate-500"}`,children:"No team members added yet."})]}),e.jsx("button",{type:"button",onClick:ce,className:Ge,children:"+ Add Team Member"})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Stakeholder Reference Data"}),e.jsx("p",{className:`text-sm mt-1 ${o?"text-slate-300":"text-slate-600"}`,children:"Groups, Sub-Groups, Departments and Relationships used by the Stakeholder Analysis tool - defined once here so every stakeholder record uses the same options."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-1 gap-4",children:[{key:"groups",label:"Groups",placeholder:"Add a group..."},{key:"subGroups",label:"Sub-Groups",placeholder:"Add a sub-group..."},{key:"departments",label:"Departments",placeholder:"Add a department..."},{key:"relationships",label:"Relationships",placeholder:"Add a relationship..."}].map(({key:I,label:T,placeholder:ee})=>e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:T}),e.jsx(Os,{aliases:ye[I],onChange:ge=>me(I,ge),darkMode:o,placeholder:ee,emptyLabel:"None added yet.",addButtonLabel:`Add ${T.toLowerCase()}`})]},I))})]}),e.jsxs("div",{className:`flex flex-wrap items-center justify-between gap-3 rounded-lg border p-5 ${o?"border-blue-500/30 bg-blue-500/10":"border-blue-200 bg-blue-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-blue-100":"text-blue-900"}`,children:"What phase are you currently in?"}),e.jsx("p",{className:`mt-1 text-xs ${o?"text-blue-200":"text-blue-800"}`,children:"Answer a few quick questions and see your readiness by component to figure out where you really are in the change journey."})]}),e.jsx("button",{type:"button",onClick:l,className:Ht,children:"Where am I now?"})]}),e.jsx("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 4: External links"}),e.jsxs("label",{className:`flex items-center gap-2 text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:[e.jsx("input",{type:"checkbox",checked:!!r.externalLinksInitiated,onChange:I=>ie(I.target.checked)}),"Links initiated"]})]}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:`This is normally only set up once at the start of a project. Once you're done, tick "Links initiated" to hide this section - re-enable "Show external links section" in Settings if you need to come back to it.`}),!r.externalLinksInitiated||m?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"All toolkit links across the tool point to the NHS Future platform by default. You can override the base toolkit destination for your organisation, or change individual links independently."}),e.jsxs("div",{className:`mt-3 rounded-md border p-3 text-xs ${o?"border-blue-500/30 bg-blue-500/10 text-blue-100":"border-blue-200 bg-blue-50 text-blue-900"}`,children:[e.jsx("p",{className:"font-semibold",children:"Fallback reference"}),e.jsxs("p",{className:"mt-1",children:["Project Specific Homepage:"," ",e.jsx("span",{className:"font-medium",children:Ft.label})," (",Ft.url,")"]}),e.jsx("p",{className:"mt-1",children:"Default Toolkit Link: the original NHS Future link defined per guidance item."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("label",{htmlFor:"cst-toolkit-choice",className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Default toolkit for assistant preview"}),e.jsx("select",{id:"cst-toolkit-choice",value:r.cst.toolkitChoice,onChange:I=>L(I.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:Co.map(I=>e.jsx("option",{value:I.key,children:I.label},I.key))}),e.jsx("p",{className:`mt-2 text-xs ${o?"text-slate-300":"text-slate-500"}`,children:"This controls which toolkit the chatbot-style assistant opens by default across the tool."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Project Specific Homepage"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"Replaces the Change Management Toolkit destination for all links that fall back to it."}),e.jsxs("p",{className:"mt-1 text-xs",children:["Currently:"," ",e.jsx("a",{href:((N=(Pe=(Re=r.linkOverrides)==null?void 0:Re.base)==null?void 0:Pe.url)==null?void 0:N.trim())||Ft.url,target:"_blank",rel:"noopener noreferrer",className:`underline ${o?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:((P=(_=(M=r.linkOverrides)==null?void 0:M.base)==null?void 0:_.url)==null?void 0:P.trim())||Ft.url})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Toolkit name"}),e.jsx("input",{type:"text",placeholder:Ft.label,value:((z=(Y=r.linkOverrides)==null?void 0:Y.base)==null?void 0:z.label)??"",onChange:I=>{var T;return ne({...r.linkOverrides,base:{...(T=r.linkOverrides)==null?void 0:T.base,label:I.target.value||void 0}})},className:`w-full rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Toolkit URL"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:Ft.url,value:((ue=(oe=r.linkOverrides)==null?void 0:oe.base)==null?void 0:ue.url)??"",onChange:I=>{var T;return ne({...r.linkOverrides,base:{...(T=r.linkOverrides)==null?void 0:T.base,url:I.target.value||void 0}})},className:`flex-1 min-w-0 rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),((ke=(je=r.linkOverrides)==null?void 0:je.base)==null?void 0:ke.url)&&e.jsx("button",{type:"button",onClick:()=>{var I;return ne({...r.linkOverrides,base:{...(I=r.linkOverrides)==null?void 0:I.base,url:void 0}})},className:`shrink-0 rounded-md border px-3 py-2 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Reset"})]})]})]})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Additional Links"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"General reference links that aren't tied to a single component - shown here and matched into action/summary text across every component."})]}),e.jsx("div",{className:"space-y-2",children:Ce.map(I=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto,auto] gap-2 items-center",children:[e.jsx("input",{type:"text",placeholder:"Link name",value:I.label,onChange:T=>Ue(I.key,"label",T.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("input",{type:"url",placeholder:"https://...",value:I.url,onChange:T=>Ue(I.key,"url",T.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>E({link:I}),"aria-label":`Edit match text for ${I.label||"this core link"}`,className:`shrink-0 rounded border px-1.5 py-1.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"}),e.jsx("button",{type:"button",onClick:()=>W(I.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},I.key))}),e.jsx("button",{type:"button",onClick:Le,className:Ge,children:"+ Add Core Link"})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Tool linking"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"Matches text in action/summary bodies and turns it into a button that opens an in-app tool, instead of a link to a URL."})]}),e.jsx("div",{className:"space-y-2",children:X.map(I=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto] gap-2 items-center",children:[e.jsx("select",{value:I.tool,onChange:T=>ot(I.key,T.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:yi.map(T=>e.jsx("option",{value:T,children:In[T].label},T))}),e.jsx("input",{type:"text",placeholder:"Matched text",value:I.matchText,onChange:T=>Ye(I.key,T.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>$(I.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},I.key))}),e.jsx("button",{type:"button",onClick:_e,className:Ge,children:"+ Add Tool Link"})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Component links"}),e.jsxs("p",{className:`text-xs ${o?"text-slate-300":"text-slate-500"}`,children:[`Set the "Further Reading" link shown on each component's overview panel, and override any of its individual guidance links. Each link shows whether it currently points at the `,e.jsx("strong",{children:"Default Toolkit Link"})," (the original NHS Future link), ",e.jsx("strong",{children:"Project Specific Homepage"})," (your organisation's override above), or a ",e.jsx("strong",{children:"Custom"})," URL you've set - click the pencil to change it. Additional links can be hidden from Settings if you only want the essentials."]}),s.map(I=>{var qe,Ie,nt;const T=ml(I.id),ee=[...T.inputs,...T.deliverables],ge=ee.filter(De=>{var Ze,He,rt,ct;return(ct=(rt=(He=(Ze=r.linkOverrides)==null?void 0:Ze.links)==null?void 0:He[De.key])==null?void 0:rt.url)==null?void 0:ct.trim()}).length,Oe=!!((qe=r.componentFurtherReading)!=null&&qe[I.id]);return e.jsxs("details",{className:`group overflow-hidden rounded-md border ${o?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between gap-3 p-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] ${o?"bg-slate-800 text-slate-200 hover:bg-slate-700":"bg-slate-50 text-slate-700 hover:bg-blue-50"} [&::-webkit-details-marker]:hidden`,children:[e.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[e.jsx("span",{"aria-hidden":"true",className:`shrink-0 text-lg font-bold leading-none transition-transform group-open:rotate-45 ${o?"text-blue-300":"text-[#005eb8]"}`,children:"+"}),e.jsx("span",{className:"truncate",children:I.label})]}),e.jsxs("span",{className:"flex items-center gap-2",children:[Oe&&e.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-emerald-500/20 text-emerald-300":"bg-emerald-100 text-emerald-700"}`,children:"Further reading set"}),ge>0&&e.jsxs("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-blue-500/20 text-blue-300":"bg-blue-100 text-blue-700"}`,children:[ge," override",ge!==1?"s":""]})]})]}),e.jsxs("div",{className:`border-t divide-y ${o?"border-slate-700 divide-slate-700":"border-slate-200 divide-slate-100"}`,children:[e.jsxs("div",{className:"p-3 space-y-1.5",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:"Further reading"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:"https://...",value:((Ie=r.componentFurtherReading)==null?void 0:Ie[I.id])??"",onChange:De=>xe(I.id,De.target.value),className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),Oe&&e.jsx("button",{type:"button",onClick:()=>xe(I.id,""),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Clear"})]})]}),!ee.length&&e.jsx("p",{className:`p-3 text-xs ${o?"text-slate-500":"text-slate-400"}`,children:"No default guidance links for this component - add one below."}),["inputs","deliverables"].map(De=>{const Ze=T[De]??[];return Ze.length?e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:De}),Ze.map(He=>{var $t,Tt;const rt=(Tt=($t=r.linkOverrides)==null?void 0:$t.links)==null?void 0:Tt[He.key],ct=Es(He,r.linkOverrides),Pt=Mi(rt),Vt={default:o?"border-amber-500/40 bg-amber-500/15 text-amber-200":"bg-amber-50 border-amber-200 text-amber-800",custom:o?"border-green-500/40 bg-green-500/15 text-green-200":"bg-green-50 border-green-200 text-green-800",base:o?"border-red-500/30 bg-red-500/10 text-red-200":"bg-red-50 border-red-100 text-red-700"},nn={default:"Default Toolkit Link",custom:"Custom",base:"Project Specific Homepage"};return e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-700"}`,children:[He.type!=="core"?"(Optional) ":"",He.label]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("a",{href:ct.url,target:"_blank",rel:"noopener noreferrer",title:ct.url,className:`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${Vt[Pt]}`,children:nn[Pt]}),e.jsx("button",{type:"button",onClick:()=>h(He),"aria-label":`Edit ${He.label} link`,className:`shrink-0 rounded-md border px-1.5 py-0.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"})]})]},He.key)})]},De):null}),e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:"Custom links"}),(((nt=r.customComponentLinks)==null?void 0:nt[I.id])||[]).map(De=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto,auto] gap-2 items-center",children:[e.jsx("input",{type:"text",placeholder:"Link name",value:De.label,onChange:Ze=>Fe(I.id,De.key,"label",Ze.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("input",{type:"url",placeholder:"https://...",value:De.url,onChange:Ze=>Fe(I.id,De.key,"url",Ze.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>E({link:De,componentId:I.id}),"aria-label":`Edit match text for ${De.label||"this link"}`,className:`shrink-0 rounded border px-1.5 py-1.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"}),e.jsx("button",{type:"button",onClick:()=>de(I.id,De.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},De.key)),e.jsx("button",{type:"button",onClick:()=>Ae(I.id),className:Ge,children:"+ Add Link"})]})]})]},I.id)})]})]}):e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:'External links were set up at project start. Turn on "Show external links section" in Settings if you need to come back and edit them.'})]})}),b&&e.jsx(cl,{link:b,perLink:(ut=(Ve=r.linkOverrides)==null?void 0:Ve.links)==null?void 0:ut[b.key],baseOverrideUrl:(Nt=(It=r.linkOverrides)==null?void 0:It.base)==null?void 0:Nt.url,onSave:I=>{var ee;const T={...(ee=r.linkOverrides)==null?void 0:ee.links};I?T[b.key]=I:delete T[b.key],ne({...r.linkOverrides,links:T}),h(null)},onClose:()=>h(null),darkMode:o}),x&&e.jsx(dl,{title:x.link.label||"Link",aliases:x.link.matchAliases||[],onSave:I=>{x.componentId?U(x.componentId,x.link.key,I):G(x.link.key,I),E(null)},onClose:()=>E(null),darkMode:o}),B&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-lg rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-900"}`,children:["Change pathway to ",hi[B],"?"]}),e.jsx("div",{className:`mt-3 space-y-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:B==="pathway-1"?e.jsx("p",{children:"This will regenerate every component's outcomes and actions for Pathway 1. Any items you've added yourself are kept."}):e.jsx("p",{children:"Pathway 2 and Pathway 3 don't have their own outcomes and actions written yet, so this will clear the Pathway 1 stand-in content instead of leaving it in place - components will show an honest empty state until pathway-specific content is added. Any items you've added yourself are kept."})}),e.jsxs("div",{className:"mt-5 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:re,className:Ge,children:"Cancel"}),e.jsx("button",{type:"button",onClick:le,className:"inline-flex items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Confirm change"})]})]})}),e.jsx(St,{open:u.isOpen,onClose:u.close,title:"Project Profile",darkMode:o,body:e.jsx("p",{children:"This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways it follows, and how it's tracking against its readiness phases. You can export or import just this page's data, and manage the external links shown throughout the tool."})})]})}function gl({steps:t,onComponentClick:n,onActionView:s,colorAccessibilityMode:a="standard",darkMode:i=!1}){const[l,o]=g.useState({}),c=a==="color-blind-friendly"?Ho:wi;return e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"What To Do Next"}),e.jsx("span",{className:`text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Your current phase"})]}),e.jsx("p",{className:`text-sm mb-4 ${i?"text-slate-300":"text-slate-500"}`,children:"Every component in your current phase that still has pending actions, ranked by timeline risk - overdue first."}),t.length>0?e.jsx("div",{className:"space-y-3",children:t.map(d=>{var f;const m=!!l[d.componentId],r=d.outstandingActions.length;return e.jsxs("div",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("button",{type:"button",onClick:()=>n(d.componentId),className:"flex w-full items-center justify-between gap-3 text-left",children:[e.jsx("span",{className:`text-sm font-semibold hover:underline ${i?"text-slate-100":"text-slate-800"}`,children:d.componentLabel}),e.jsx("span",{title:d.bragReason,className:`text-xs font-semibold rounded px-2.5 py-0.5 ${c[d.bragStatus]}`,children:d.bragStatus})]}),e.jsx("p",{className:`text-sm mt-1 ${i?"text-slate-300":"text-slate-600"}`,children:d.summary}),(f=d.toolkitLinks)!=null&&f.length?e.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:d.toolkitLinks.map(b=>e.jsx("a",{href:b.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-medium text-[#005eb8] underline",children:b.label},`${d.componentId}-${b.url}`))}):null,r>0&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("button",{type:"button",onClick:()=>o(b=>({...b,[d.componentId]:!b[d.componentId]})),className:`text-xs font-semibold underline ${i?"text-slate-300 hover:text-slate-100":"text-slate-600 hover:text-slate-900"}`,children:[m?"Hide":"Show"," outstanding action",r===1?"":"s"," (",r,")"]}),m&&e.jsx("div",{className:`mt-2 overflow-x-auto rounded-md border ${i?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full divide-y text-xs",children:[e.jsx("thead",{className:i?"bg-slate-800":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Lens"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Status"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"View"})]})}),e.jsx("tbody",{className:`divide-y ${i?"divide-slate-700":"divide-slate-100"}`,children:d.outstandingActions.map(b=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-2 py-1.5 font-medium ${i?"text-slate-200":"text-slate-700"}`,children:b.lens}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:b.text}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:b.owner||"Unassigned"}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:b.status||"-"}),e.jsx("td",{className:"px-2 py-1.5",children:e.jsx("button",{type:"button",onClick:()=>s(d.componentId,b.lens,b.id),className:`font-semibold underline ${i?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:"View"})})]},b.id))})]})})]})]},d.componentId)})}):e.jsx("p",{className:`text-sm ${i?"text-slate-400":"text-slate-500"}`,children:"Nothing pending for your current phase. Continue tracking actions and maintain evidence quality."})]})}function pl({components:t,store:n,getEntry:s,onComponentClick:a,darkMode:i=!1}){const[l,o]=g.useState(null),c=t.reduce((m,r)=>(m[r.phase]=m[r.phase]||[],m[r.phase].push(r),m),{}),d=(m,r)=>{const f=`${m}:${r}`;o(b=>b===f?null:f)};return e.jsxs("details",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} group overflow-hidden rounded-lg border shadow-sm`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-lg font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] [&::-webkit-details-marker]:hidden ${i?"text-slate-100 hover:bg-slate-700":"text-slate-800 hover:bg-slate-50"}`,children:[e.jsx("span",{children:"Programme Change Hierarchy"}),e.jsx("span",{className:"text-2xl font-normal transition-transform group-open:rotate-45",children:"+"})]}),e.jsxs("div",{className:"border-t border-slate-200 p-6 dark:border-slate-700",children:[e.jsxs("p",{className:`mt-1 mb-4 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:["Your programme has ",t.length," components, each viewed through one or more lenses. A component is a change topic you assess and track. A lens is the perspective used to assess it (e.g. leadership, risk, capability). Click a lens to see its actions, or open the full assessment."]}),e.jsx("div",{className:"space-y-5",children:fi.filter(m=>{var r;return(r=c[m])==null?void 0:r.length}).map(m=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:`text-sm font-semibold ${i?"text-slate-100":"text-slate-700"}`,children:["Phase ",m,": ",tt[m]]}),e.jsx("div",{className:"space-y-2",children:c[m].map(r=>{const f=r.lenses.reduce((h,x)=>{const E=s(r.id,x);return{total:h.total+E.actions.length,completed:h.completed+E.actions.filter(S=>S.status==="Completed").length}},{total:0,completed:0}),b=Xo(n,r.id,s);return e.jsxs("div",{"data-testid":`cst-component-card-${r.id}`,className:`w-full rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("span",{className:`font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:r.label}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:`text-xs ${i?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",gs(r.target)]}),e.jsx("button",{type:"button",onClick:()=>a(r.id),className:`text-xs font-semibold underline ${i?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:"Open full assessment"})]})]}),e.jsx("div",{className:"mt-2 flex flex-wrap gap-1.5",children:r.lenses.map(h=>{const x=s(r.id,h),E=l===`${r.id}:${h}`;return e.jsxs("button",{type:"button",onClick:()=>d(r.id,h),"aria-expanded":E,className:`text-xs px-2 py-1 rounded-full border transition-colors ${E?i?"border-blue-400 bg-blue-500/25 text-blue-100":"border-blue-400 bg-blue-100 text-blue-900":x.score>=r.target?i?"border-green-500/40 bg-green-500/15 text-green-200 hover:bg-green-500/25":"bg-green-50 border-green-200 text-green-800 hover:bg-green-100":x.score>0?i?"border-amber-500/40 bg-amber-500/15 text-amber-200 hover:bg-amber-500/25":"bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100":i?"border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700":"bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"}`,children:[h,": ",x.score,"/",r.target]},h)})}),e.jsxs("p",{className:`mt-2 text-xs ${i?"text-slate-300":"text-slate-500"}`,children:["Lens actions: ",f.completed,"/",f.total," complete · Outcomes: ",b.completed,"/",b.total," complete"]}),r.lenses.map(h=>{if(!(l===`${r.id}:${h}`))return null;const E=s(r.id,h);return e.jsx("div",{className:`mt-3 overflow-x-auto rounded-md border ${i?"border-slate-700":"border-slate-200"}`,children:E.actions.length?e.jsxs("table",{className:`min-w-full divide-y ${i?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"}`,children:[e.jsx("thead",{className:i?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"})]})}),e.jsx("tbody",{className:`divide-y ${i?"divide-slate-700":"divide-slate-100"}`,children:E.actions.map(S=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${i?"text-slate-100":"text-slate-800"}`,children:S.text||"Untitled action"}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`inline-flex whitespace-nowrap rounded-full border px-2 py-1 text-xs font-semibold ${Dt[S.status]}`,children:S.status})}),e.jsx("td",{className:`px-3 py-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:S.owner||"Unassigned"})]},S.id))})]}):e.jsx("p",{className:`p-3 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:"No actions yet for this lens."})},`${h}-table`)})]},r.id)})})]},`phase-group-${m}`))})]})]})}const hl=[{phase:1,label:"Pre-Discovery",programmeStage:"Concept",tagline:"Define the change",color:"bg-blue-50",darkColor:"bg-blue-950/45",textColor:"text-blue-700",darkTextColor:"text-blue-100",borderColor:"border-blue-300",darkBorderColor:"border-blue-700",deliverables:[{text:"Change Vision defined and communicated",componentIds:["vision"]},{text:"Compelling case for change developed",componentIds:["case_for_change"],showExternalGuidance:!1}]},{phase:2,label:"Solution Design",programmeStage:"Definition",tagline:"Prepare the change",color:"bg-violet-50",darkColor:"bg-violet-950/45",textColor:"text-violet-700",darkTextColor:"text-violet-100",borderColor:"border-violet-300",darkBorderColor:"border-violet-700",deliverables:[{text:"Change Impact analysed",componentIds:["change_impact"]},{text:"Change Management inputted to Business Case",componentIds:["case_for_change"],showExternalGuidance:!1},{text:"Engagement and Comms Strategy developed",componentIds:["change_network","stakeholder"]}]},{phase:3,label:"Development",programmeStage:"Design & Develop",tagline:"Plan the change",color:"bg-amber-50",darkColor:"bg-amber-950/45",textColor:"text-amber-700",darkTextColor:"text-amber-100",borderColor:"border-amber-300",darkBorderColor:"border-amber-700",deliverables:[{text:"Engagement and Comms Plan developed",componentIds:["stakeholder"]},{text:"Change Management Plan developed",componentIds:["cm_readiness"]}]},{phase:4,label:"Deployment / Go Live",programmeStage:"Implementation",tagline:"Manage implementation of the change",color:"bg-orange-50",darkColor:"bg-orange-950/45",textColor:"text-orange-700",darkTextColor:"text-orange-100",borderColor:"border-orange-300",darkBorderColor:"border-orange-700",deliverables:[{text:"Change Management Plan executed",componentIds:["cm_readiness"]},{text:"Communications delivered and Stakeholders engaged",componentIds:["stakeholder"]},{text:"Future State Processes validated",componentIds:["process_change"]},{text:"Skills gaps addressed",componentIds:["skills_learning"]},{text:"Future State Processes trialled and in use",componentIds:["process_change"]}]},{phase:5,label:"Post-Deployment",programmeStage:"Transition / Close",tagline:"Reinforce and sustain the change",color:"bg-green-50",darkColor:"bg-green-950/45",textColor:"text-green-700",darkTextColor:"text-green-100",borderColor:"border-green-300",darkBorderColor:"border-green-700",deliverables:[{text:"Change adoption evaluated",componentIds:["change_adoption"]},{text:"Business Change refinements actioned",componentIds:["reinforcement"]},{text:"Change sustained",componentIds:["transfer_bau"]}]}];function Bi({currentPhase:t,onComponentClick:n,headingsOnly:s=!1,guidanceTarget:a="Default",linkOverrides:i,showAdditionalGuidanceLinks:l=!0,darkMode:o=!1}){const[c,d]=g.useState(t);return g.useEffect(()=>{d(t)},[t]),e.jsxs("section",{className:`rounded-lg border shadow-sm ${o?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:`border-b px-5 py-4 ${o?"border-slate-700":"border-slate-200"}`,children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"The Five Change Phases"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-500"}`,children:"Select a phase to see the key deliverables expected at that stage."})]}),e.jsx("div",{className:"space-y-3 p-4",children:hl.map(m=>s?e.jsxs("div",{className:`rounded-md border px-4 py-3 ${o?`${m.darkBorderColor} ${m.darkColor}`:`${m.borderColor} ${m.color}`}`,children:[e.jsxs("span",{className:`block text-sm font-semibold ${o?m.darkTextColor:m.textColor}`,children:["Phase ",m.phase,": ",m.label]}),e.jsxs("span",{className:`mt-0.5 block text-xs ${o?"text-slate-300":"text-slate-500"}`,children:[m.tagline," · ",m.programmeStage]})]},m.phase):e.jsxs("details",{open:c===m.phase,onToggle:r=>{r.currentTarget.open?d(m.phase):c===m.phase&&d(0)},className:`group overflow-hidden rounded-md border ${o?m.darkBorderColor:m.borderColor}`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] [&::-webkit-details-marker]:hidden ${o?`${m.darkColor} ${m.darkTextColor} hover:brightness-110`:`${m.color} ${m.textColor} hover:brightness-95`}`,children:[e.jsxs("span",{children:[e.jsxs("span",{className:"block text-sm font-semibold",children:["Phase ",m.phase,": ",m.label]}),e.jsxs("span",{className:`mt-0.5 block text-xs ${o?"text-slate-300":"text-slate-500"}`,children:[m.tagline," · ",m.programmeStage]})]}),e.jsx("span",{className:"text-xl font-bold transition-transform group-open:rotate-45","aria-hidden":"true",children:"+"})]}),e.jsx("div",{className:`border-t p-4 ${o?`${m.darkBorderColor} bg-slate-900`:`${m.borderColor} bg-white`}`,children:e.jsx("ul",{className:"space-y-3",children:m.deliverables.map(r=>{const f=r.componentIds.map(E=>rs(E)).filter(E=>!!E),b=f.flatMap(E=>Rn(a,E.id,"deliverables",i,l).slice(0,1)),h=f.length===1&&b.length===1,x=r.showExternalGuidance!==!1&&h&&b[0].label.trim().toLowerCase()!==f[0].label.trim().toLowerCase();return e.jsxs("li",{className:"flex items-start gap-2 text-sm",children:[e.jsx("span",{className:`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${o?`${m.darkColor} ${m.darkTextColor}`:`${m.color} ${m.textColor}`}`,children:"✓"}),e.jsxs("span",{className:"min-w-0 flex-1",children:[e.jsx("span",{className:o?"text-slate-200":"text-slate-700",children:r.text}),h?e.jsxs("span",{className:"ml-2 inline-flex flex-wrap items-center gap-2 text-xs",children:[e.jsx("button",{type:"button",onClick:()=>n(f[0].id),className:"font-semibold text-[#005eb8] underline underline-offset-2 hover:text-[#003087]",children:f[0].label}),x?e.jsx("a",{href:b[0].url,target:"_blank",rel:"noopener noreferrer",className:"font-medium text-slate-500 underline underline-offset-2 hover:text-[#005eb8]",children:"External guidance ↗"}):null]}):null,h?null:e.jsxs("span",{className:"mt-1 flex flex-wrap gap-x-3 gap-y-1",children:[f.map(E=>e.jsx("span",{className:"inline-flex flex-wrap items-center gap-2 text-xs",children:e.jsx("button",{type:"button",onClick:()=>n(E.id),className:"font-semibold text-[#005eb8] underline underline-offset-2 hover:text-[#003087]",children:E.label})},E.id)),b.map(E=>e.jsx("a",{href:E.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-medium text-slate-500 underline underline-offset-2 hover:text-[#005eb8]",children:"External guidance ↗"},E.url))]})]})]},r.text)})})})]},m.phase))})]})}function fl({store:t,components:n,metrics:s,getEntry:a,onComponentClick:i,onActionView:l,guidanceTarget:o="Default",linkOverrides:c,showAdditionalGuidanceLinks:d=!0,phaseFocusMode:m="auto",manualPhaseFocus:r,colorAccessibilityMode:f="standard",darkMode:b=!1}){const h=ht("daily-checkin"),x=m==="manual"&&r?r:s.currentPhase,E=g.useMemo(()=>Ni(n,a,x),[n,a,x]);return e.jsxs("div",{className:"max-w-5xl mx-auto pb-20",children:[e.jsxs("div",{className:"mb-6 flex items-center gap-2",children:[e.jsx("h2",{className:`text-3xl font-bold ${b?"text-slate-100":"text-slate-800"}`,children:"Daily Check-in"}),e.jsx(wt,{onClick:h.reopen,darkMode:b})]}),e.jsx("p",{className:`mb-6 -mt-4 text-sm ${b?"text-slate-300":"text-slate-500"}`,children:"Your daily triage: what's outstanding right now, and where it sits in the wider programme."}),e.jsxs("div",{className:"space-y-8",children:[e.jsx(gl,{steps:E,onComponentClick:i,onActionView:l,colorAccessibilityMode:f,darkMode:b}),e.jsx(Bi,{currentPhase:x,onComponentClick:i,guidanceTarget:o,linkOverrides:c,showAdditionalGuidanceLinks:d,darkMode:b}),e.jsx(pl,{components:n,store:t,getEntry:a,onComponentClick:i,darkMode:b})]}),e.jsx(St,{open:h.isOpen,onClose:h.close,title:"Daily Check-in",darkMode:b,body:e.jsx("p",{children:'This is your daily triage page - "What To Do Next" lists every component in your current phase with outstanding actions, ranked by timeline risk, and the Programme Change Hierarchy below gives you the full picture across every phase.'})})]})}function Ta(t){if(!t)return[];const n=t.split(/\s+/).filter(Boolean);if(n.length<2)return n;const s=n.slice(0,Math.ceil(n.length/2)).join(" "),a=n.slice(Math.ceil(n.length/2)).join(" ");return[s,a].filter(Boolean)}function Gi(t){return t.getContext?t:t.canvas}function tn(){return typeof document>"u"?!1:document.documentElement.dataset.nhsThemeMode==="dark"}function Bn(t,n,s,a={}){var c,d;const i=Gi(n),l=(d=(c=dt).getChart)==null?void 0:d.call(c,i);l&&l.destroy();const o={type:t,data:s,options:a};return new dt(i,o)}const La=new WeakMap,Ma=new WeakMap;function Ba(t,n,s){return(t.$pointLabelHitboxes||[]).find(a=>Math.abs(n-a.x)<=a.halfWidth&&Math.abs(s-a.y)<=a.halfHeight)}function bl(t,n,s){const a=La.get(t);a&&t.removeEventListener("click",a);const i=Ma.get(t);i&&t.removeEventListener("mousemove",i);const l=c=>{const d=t.getBoundingClientRect(),m=Ba(n,c.clientX-d.left,c.clientY-d.top);m&&s(m.index)},o=c=>{const d=t.getBoundingClientRect(),m=Ba(n,c.clientX-d.left,c.clientY-d.top);t.style.cursor=m?"pointer":""};t.addEventListener("click",l),t.addEventListener("mousemove",o),La.set(t,l),Ma.set(t,o)}function Zt(t,n,s={},a){var x,E,S,u,C,R;dt.defaults.font.family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",dt.defaults.font.size=12,dt.defaults.elements.line.tension=.2,dt.defaults.elements.point.radius=4,dt.defaults.elements.point.hoverRadius=6;const i=tn(),f={maintainAspectRatio:!0,responsive:!0,layout:{padding:56},plugins:{legend:{display:!0,position:"chartArea",align:"start",labels:{padding:5,boxWidth:30,font:{size:13}}},tooltip:{enabled:!0,backgroundColor:i?"rgba(15,23,42,0.98)":"rgba(11,18,32,0.95)",titleColor:"#fff",bodyColor:"#fff"},centerText:""},elements:{line:{borderWidth:3,tension:.2,borderColor:i?"#63b3ff":"#005EB8",backgroundColor:i?"rgba(99,179,255,0.12)":"rgba(0,94,184,0.06)"},point:{radius:4,hoverRadius:6,backgroundColor:i?"rgba(144,205,244,0.95)":"rgba(11,122,184,0.95)"}},scales:{r:{beginAtZero:!0,grid:{color:i?"rgba(226,232,240,0.12)":"rgba(11,18,32,0.06)",lineWidth:1},angleLines:{color:i?"rgba(226,232,240,0.18)":"rgba(11,18,32,0.10)",lineWidth:1},ticks:{display:!1},pointLabels:{display:!1,color:i?"#e2e8f0":"#0b1220",font:{size:12,family:dt.defaults.font.family},padding:10,callback:j=>Ta(j).join(`
`)}}}},b={...f,...s,layout:{padding:56,...s.layout||{}},scales:{...f.scales||{},...s.scales||{},r:{...((x=f.scales)==null?void 0:x.r)||{},...((E=s.scales)==null?void 0:E.r)||{},pointLabels:{...((u=(S=f.scales)==null?void 0:S.r)==null?void 0:u.pointLabels)||{},...((R=(C=s.scales)==null?void 0:C.r)==null?void 0:R.pointLabels)||{},display:!1,callback:j=>Ta(j).join(`
`)}}}},h=Bn("radar",t,n,b);if(a){const j=Gi(t);bl(j,h,a)}return h}function Fi(t,n,s={}){const a=tn(),i=a?"#e2e8f0":"#0b1220",l=a?"rgba(226,232,240,0.08)":"rgba(11,18,32,0.04)",o=a?"rgba(226,232,240,0.10)":"rgba(11,18,32,0.06)",c=a?"#63b3ff":"#005EB8";return Bn("line",t,n,{...{elements:{line:{borderWidth:2,tension:.2,borderColor:c,backgroundColor:a?"rgba(99,179,255,0.14)":"rgba(0,94,184,0.06)"},point:{radius:3,hoverRadius:5,backgroundColor:c}},scales:{x:{display:!0,grid:{color:l},ticks:{color:i,font:{size:11}}},y:{beginAtZero:!0,grid:{color:o},ticks:{color:i,font:{size:11}}}}},...s})}function xl(t,n,s={}){const a=tn(),i=a?"#e2e8f0":"#0b1220";return Bn("bar",t,n,{...{scales:{x:{display:!0,grid:{color:a?"rgba(226,232,240,0.08)":"rgba(11,18,32,0.04)"},ticks:{color:i,font:{size:11}}},y:{beginAtZero:!0,min:0,max:5,grid:{color:a?"rgba(226,232,240,0.10)":"rgba(11,18,32,0.06)"},ticks:{color:i,font:{size:11},stepSize:1}}}},...s})}function yl(t,n,s={},a){const o={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{boxWidth:12,padding:15,color:tn()?"#e2e8f0":"#0b1220"}},tooltip:{callbacks:{label:c=>`${c.label||""}: ${c.parsed??""}`}}},onClick:a?(c,d)=>{d.length>0&&a(d[0].index)}:void 0};return Bn("doughnut",t,n,{...o,...s})}function vl(t){return typeof t.toBase64Image=="function"?t.toBase64Image():""}const Sl={id:"radarCenterText",beforeDraw:t=>{var n;try{const s=t.ctx,i=(n=(t.options||{}).plugins)==null?void 0:n.centerText,l=(i==null?void 0:i.text)||i||"";if(!l)return;const o=String(t.config.type||"");if(o!=="radar"&&o!=="doughnut")return;s.save(),s.textAlign="center",s.textBaseline="middle";const c=t.width/2,d=t.height/2;if(o==="doughnut")s.font=(i==null?void 0:i.font)||"bold 20px Inter",s.fillStyle=(i==null?void 0:i.color)||"#005EB8",s.fillText(String(l),c,d-10),i!=null&&i.subText&&(s.font=(i==null?void 0:i.subFont)||"12px Inter",s.fillStyle=(i==null?void 0:i.subColor)||"#6b7280",s.fillText(String(i.subText),c,d+10));else{const m=Math.max(12,Math.round(Math.min(t.width,t.height)*.065)),r=`${m}px ${dt.defaults.font.family}`;s.font=r,s.fillStyle=(i==null?void 0:i.color)||(tn()?"#e2e8f0":"#0b1220");const f=String(l).split(`
`),b=m*1.05,h=(f.length-1)*-b/2;f.forEach((x,E)=>{s.fillText(x,c,d+h+E*b)})}s.restore()}catch{}}},wl={id:"radarPointLabelText",afterDraw:t=>{var n,s,a,i;try{const l=(n=t.scales)==null?void 0:n.r,o=(s=l==null?void 0:l.options)==null?void 0:s.pointLabels;if(!l||!o||t.config.type!=="radar")return;const c=t.ctx,d=Number(((a=o.font)==null?void 0:a.size)||dt.defaults.font.size||12),m=((i=o.font)==null?void 0:i.family)||dt.defaults.font.family||"Inter, sans-serif",r=o.color||(tn()?"#e2e8f0":"#0b1220"),f=Number(o.padding??14),b=Array.isArray(l._pointLabels)?l._pointLabels:[],h=[];c.save(),c.textAlign="center",c.textBaseline="middle",c.fillStyle=r,c.font=`${d}px ${m}`,b.forEach((x,E)=>{const u=String(x??"").split(`
`).filter(Boolean);if(!u.length)return;const C=l.getPointPosition(E,l.drawingArea+f,0),R=d*1.15,j=(u.length-1)*-R/2,k=Math.max(d,u.length*R),p=d*6,B=p/2+4,D=t.width-p/2-4,V=k/2+4,le=t.height-k/2-4,re=Math.min(Math.max(C.x,B),D),w=Math.min(Math.max(C.y,V),le);u.forEach((L,ne)=>{const xe=w+j+ne*R;c.fillText(L,re,xe)}),h.push({index:E,x:re,y:w,halfWidth:p/2,halfHeight:k/2})}),t.$pointLabelHitboxes=h,c.restore()}catch{}}};dt.register(Sl,wl);typeof window<"u"&&(window.NHSDigitalAdoption=window.NHSDigitalAdoption||{},window.NHSDigitalAdoption.Charts={createRadarChart:Zt,createLineChart:Fi,toBase64Image:vl});const kn=["Pathways","Phases","Components","Vision","Lens","Strat Direct","Readiness","Actions","Overview"],Nl={"pathway-1":"For teams starting from scratch. Nothing has been built yet, so every component starts at Not Started and the guidance walks you through building the foundations - defining a vision, securing sponsorship, and putting the basics of a change plan in place - one readiness level at a time.","pathway-2":"For teams who've already run a successful pilot and now need to scale it up. The guidance and actions are framed around taking what worked in the pilot - the vision, the sponsorship, the early lessons - and rolling it out consistently to new sites and teams, rather than starting from nothing.","pathway-3":"For teams who've already gone live but adoption is patchy or inconsistent across the organisation. The guidance and actions focus on diagnosing where and why adoption is lagging, then delivering targeted fixes to bring lagging areas up to the same standard as the rest."},xt=Tn(1)[0]||en[0],Kt=xt.lenses,Ui=Tn(2),jl=Ui.map(t=>Qt(t.id,2,t.target)),kl=[1,0,1,1],Cl=[4,3,5,4];function El(t){const n=t.map(s=>Et(s).color);return{labels:Ui.map(s=>s.label),datasets:[{label:"Notional current",data:t,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.12)",borderWidth:2,pointRadius:4,pointHoverRadius:6,pointBackgroundColor:n,pointBorderColor:n},{label:"Phase 2 expected",data:jl,borderColor:"#94a3b8",backgroundColor:"rgba(148, 163, 184, 0.06)",borderWidth:2,borderDash:[5,5],pointRadius:2,pointHoverRadius:4}]}}function Ga({scores:t,darkMode:n}){const s=g.useRef(null);return g.useEffect(()=>{s.current&&Zt(s.current,El(t),{maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"chartArea",align:"start",labels:{padding:5,boxWidth:30,font:{size:13}}},tooltip:{callbacks:{label:a=>{const i=Number(a.parsed.r??0);return`${a.dataset.label}: ${Et(i).label}`}}}},scales:{r:{min:0,max:5,ticks:{display:!1},pointLabels:{display:!0,font:{size:9},padding:18}}}})},[n]),e.jsx("div",{children:e.jsx("div",{style:{height:400},children:e.jsx("canvas",{ref:s,className:"block h-full w-full"})})})}function Il({activeStep:t,darkMode:n}){const s=["Pathway","Phases","Components",xt.label,"Lens",Kt[0],"Readiness","Actions","Overview"];return e.jsx("div",{className:"flex flex-wrap items-center gap-1.5 text-xs",children:s.map((a,i)=>e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:`rounded-full px-2.5 py-1 font-semibold transition-colors ${i===t?"bg-[#005eb8] text-white":i<t?n?"bg-slate-700 text-slate-200":"bg-blue-50 text-blue-800":n?"bg-slate-900 text-slate-600":"bg-slate-100 text-slate-400"}`,children:a}),i<s.length-1?e.jsx("span",{"aria-hidden":"true",className:n?"text-slate-600":"text-slate-300",children:"→"}):null]},a))})}function Al({darkMode:t}){const n=[1,2,3,4,5],s=[{border:"border-blue-300",heading:"bg-blue-50 text-blue-700",body:"bg-blue-50/40"},{border:"border-violet-300",heading:"bg-violet-50 text-violet-700",body:"bg-violet-50/40"},{border:"border-amber-300",heading:"bg-amber-50 text-amber-700",body:"bg-amber-50/40"},{border:"border-orange-300",heading:"bg-orange-50 text-orange-700",body:"bg-orange-50/40"},{border:"border-green-300",heading:"bg-green-50 text-green-700",body:"bg-green-50/40"}];return e.jsxs("div",{className:`overflow-hidden rounded-md border ${t?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("div",{className:`grid grid-cols-[minmax(150px,0.7fr),minmax(0,2fr)] text-xs font-bold uppercase tracking-wider ${t?"bg-slate-900 text-slate-300":"bg-slate-100 text-slate-600"}`,children:[e.jsx("div",{className:"border-r px-4 py-3",children:"Phase"}),e.jsx("div",{className:"px-4 py-3",children:"Components"})]}),n.map((a,i)=>{const l=Tn(a),o=s[i];return e.jsxs("div",{className:`grid grid-cols-[minmax(150px,0.7fr),minmax(0,2fr)] border-t ${t?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("div",{className:`border-r px-4 py-4 text-sm font-semibold ${t?"bg-slate-900 text-slate-100":`${o.heading} ${o.border}`}`,children:["Phase ",a,": ",tt[a]||""]}),e.jsx("div",{className:`flex flex-wrap gap-2 px-4 py-4 ${t?"bg-slate-800":o.body}`,children:l.map(c=>e.jsx("span",{className:`rounded-full px-3 py-1 text-xs font-semibold ${t?"bg-slate-900 text-slate-200":"bg-white text-slate-700 shadow-sm"}`,children:c.label},c.id))})]},a)})]})}const Ol=["Assign owner","Set due date","Mark complete"];function _l({darkMode:t}){const n=`rounded-lg border border-dashed p-4 ${t?"border-slate-700":"border-slate-300"}`,s=`mb-3 text-center text-xs font-bold uppercase tracking-wider ${t?"text-slate-400":"text-slate-500"}`,a="flex flex-wrap items-center justify-center gap-2",i=e.jsx("div",{className:"flex justify-center py-1","aria-hidden":"true",children:e.jsx("span",{className:t?"text-slate-600":"text-slate-300",children:"↓"})}),l=e.jsx("div",{className:"flex justify-center py-1","aria-hidden":"true",children:e.jsx("span",{className:t?"text-slate-600":"text-slate-300",children:"↕"})}),o=`rounded-full border px-3 py-1 text-xs font-semibold ${t?"border-violet-700 bg-violet-950/40 text-violet-100":"border-violet-200 bg-violet-50 text-violet-700"}`,c=`rounded-full border px-3 py-1 text-xs font-semibold ${t?"border-blue-700 bg-blue-950/40 text-blue-100":"border-blue-200 bg-blue-50 text-blue-700"}`,d=`rounded-full border px-3 py-1 text-xs font-semibold ${t?"border-orange-700 bg-orange-950/40 text-orange-100":"border-orange-200 bg-orange-50 text-orange-700"}`,m=`rounded-full border px-3 py-1 text-xs font-semibold ${t?"border-rose-700 bg-rose-950/40 text-rose-100":"border-rose-200 bg-rose-50 text-rose-700"}`,r=`rounded-full border px-3 py-1 text-xs font-semibold ${t?"border-green-700 bg-green-950/40 text-green-100":"border-green-200 bg-green-50 text-green-700"}`;return e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:n,children:[e.jsx("p",{className:s,children:"Pathways"}),e.jsx("div",{className:a,children:On.map(f=>e.jsx("span",{className:o,children:f.simplifiedLabel},f.value))})]}),i,e.jsxs("div",{className:n,children:[e.jsx("p",{className:s,children:"Phases"}),e.jsx("div",{className:a,children:[1,2,3,4,5].map(f=>e.jsx("span",{className:c,children:tt[f]},f))})]}),i,e.jsxs("div",{className:n,children:[e.jsx("p",{className:s,children:"Components"}),e.jsx("div",{className:a,children:en.map(f=>e.jsx("span",{className:d,children:f.label},f.id))})]}),l,e.jsxs("div",{className:n,children:[e.jsx("p",{className:s,children:"Lenses"}),e.jsx("div",{className:a,children:hn.map(f=>e.jsx("span",{className:m,children:f},f))})]}),i,e.jsxs("div",{className:n,children:[e.jsx("p",{className:s,children:"Readiness score"}),e.jsx("div",{className:"flex overflow-hidden rounded-md",children:Wt.map(f=>e.jsx("div",{className:"flex-1 py-2 text-center",style:{backgroundColor:f.color},children:e.jsx("span",{className:`text-[10px] font-semibold ${f.score===2?"text-slate-900":"text-white"}`,children:f.label})},f.score))})]}),i,e.jsxs("div",{className:n,children:[e.jsx("p",{className:s,children:"Actions"}),e.jsx("div",{className:a,children:Ol.map(f=>e.jsx("span",{className:r,children:f},f))})]})]})}function Rl({children:t,darkMode:n}){return e.jsx("div",{className:`w-full rounded-xl border shadow-sm ${n?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:e.jsx("div",{className:"p-6 sm:p-10",children:t})})}const Dl=["Alex Morgan","Sam Patel"],Pl=[{id:"notional-1",text:`Agree the ${Kt[0]} approach with the SRO`,status:"Planned",owner:""},{id:"notional-2",text:"Document the agreed approach for the team",status:"Planned",owner:""},{id:"notional-3",text:"Share the approach with key stakeholders",status:"Planned",owner:""}];function $l({darkMode:t=!1,onGetStarted:n,onComponentClick:s}){var j;const[a,i]=g.useState("pathway-1"),[l,o]=g.useState(0),[c,d]=g.useState(Pl),[m,r]=g.useState(null),[f,b]=g.useState([]),[h,x]=g.useState(!1),E=(k,p)=>{const B=c.map(V=>V.id===k?{...V,...p}:V);d(B),B.every(V=>V.status==="Completed"&&V.owner.trim()!=="")&&!h&&(x(!0),b(V=>[...V,{id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,message:`${xt.label} · ${Kt[0]} moved to the next readiness level!`}]))},S=l===kn.length-1,u=t?"text-slate-300":"text-slate-700",C=()=>o(k=>Math.min(kn.length-1,k+1)),R=()=>o(k=>Math.max(0,k-1));return e.jsxs("div",{className:"w-full space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${t?"text-slate-100":"text-slate-800"}`,children:"Engine Explained"}),e.jsx("p",{className:`mt-2 max-w-3xl text-sm ${t?"text-slate-300":"text-slate-600"}`,children:"A quick worked example showing how everything fits together, step by step."})]}),l>0?e.jsx(Il,{activeStep:l,darkMode:t}):null,e.jsxs(Rl,{darkMode:t,children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${t?"text-blue-300":"text-blue-700"}`,children:["Step ",l+1," of ",kn.length," · ",kn[l]]}),l===0?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Every programme starts with a pathway"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${u}`,children:"A pathway describes the current status of your project and will determine the change journey required for successful adoption."}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${u}`,children:"The Pathway will tailor the guidance, actions and resources you will see everywhere else in the tool."}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${u}`,children:"In this example walkthrough of the Adoption Engine we'll use pathway 1 - Starting for the First time. You will be able to select the correct pathway when you set up your project later on."}),e.jsx("div",{className:"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3",children:On.map(k=>{const p=k.value===a;return e.jsx("button",{type:"button",onClick:()=>i(k.value),"aria-pressed":p,className:`rounded-lg border p-4 text-left transition-colors ${p?"border-[#005eb8] bg-blue-50 ring-2 ring-[#005eb8]":t?"border-slate-600 bg-slate-900 hover:bg-slate-700":"border-slate-200 bg-white hover:bg-slate-50"}`,children:e.jsx("p",{className:`text-sm font-semibold ${p?"text-[#005eb8]":t?"text-slate-100":"text-slate-900"}`,children:k.simplifiedLabel})},k.value)})}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 text-sm ${t?"border-blue-500/30 bg-blue-500/10 text-blue-100":"border-blue-200 bg-blue-50 text-blue-900"}`,children:[e.jsx("p",{className:"font-semibold",children:(j=On.find(k=>k.value===a))==null?void 0:j.simplifiedLabel}),e.jsx("p",{className:"mt-1",children:Nl[a]})]})]}):null,l===1?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Each pathway is broken into the 5 change phases"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${u}`,children:"Every Pathway runs through 5 phases which are aligned to a project lifecycle. It starts from the earliest thinking about a change through to it being fully embedded as business as usual."}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${u}`,children:"See the 5 Change phases below."}),e.jsx("div",{className:"mt-6",children:e.jsx(Bi,{currentPhase:xt.phase,onComponentClick:s,headingsOnly:!0,darkMode:t})}),e.jsx("p",{className:`mt-4 text-sm ${u}`,children:"At each phase there are 'Change Components' that need to be focused on at that particular phase of a project."})]}):null,l===2?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Change components"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${u}`,children:"Change Components are the focused topics and change activities that are relevant to each phase."}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${u}`,children:"The table below shows which components are included in each phase (these will be clickable when using the adoption engine.)"}),e.jsx("div",{className:"mt-6",children:e.jsx(Al,{darkMode:t})}),e.jsxs("p",{className:`mt-4 text-sm ${u}`,children:["To continue with the example lets zoom into one of the specific Change Component. Phase ",xt.phase,": ",xt.label,"."]})]}):null,l===3?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Vision is an example of a Change Component"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${u}`,children:"The Vision sits as a Change Component in Phase 1 of a project because it needs to be developed right at the start."}),e.jsxs("div",{className:`mt-6 rounded-lg border p-5 ${t?"border-slate-700 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsx("p",{className:`text-lg font-semibold ${t?"text-slate-100":"text-slate-900"}`,children:xt.label}),e.jsx("p",{className:`mt-2 text-sm ${u}`,children:ji(xt.id)})]}),e.jsx("p",{className:`mt-4 text-sm ${u}`,children:"A Vision can be looked at through particular 'lenses' - Let's see what that means."})]}):null,l===4?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"A Lens is a different perspective of the same Change Component"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${u}`,children:"Each Change Component can be looked at through different lenses that show different perspectives. Here are all of the lenses used across the Adoption Engine: not all of them will relate to every Change Component."}),e.jsx("div",{className:"mt-6 grid grid-cols-1 gap-3",children:hn.map(k=>e.jsxs("div",{className:`rounded-lg border p-5 ${t?"border-slate-700 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsx("p",{className:`text-lg font-semibold ${t?"text-slate-100":"text-slate-900"}`,children:k}),e.jsx("p",{className:`mt-2 text-sm ${u}`,children:ms(k)})]},k))}),e.jsx("p",{className:`mt-4 text-sm ${u}`,children:"Let's look at the lenses that relate to a Vision to follow our example through."})]}):null,l===5?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"An example lens for our example change component"}),e.jsxs("p",{className:`mt-3 max-w-2xl text-sm ${u}`,children:["The ",xt.label,", can be seen through 2 different lenses."]}),e.jsxs("ol",{className:`mt-3 max-w-2xl text-sm ${u}`,children:[e.jsxs("li",{children:["1. ",Kt[0]," lens"]}),e.jsxs("li",{children:["2. ",Kt[1]," lens"]})]}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${u}`,children:"Both lenses, give a different perspective on the same change component. We will follow the Strategic Direction and Leadership lens through to a readiness score."}),Kt.map((k,p)=>e.jsxs("div",{className:`mt-6 rounded-lg border p-5 ${t?"border-[#005eb8] bg-slate-900":p===0?"border-[#005eb8] bg-blue-50":"border-slate-200 bg-white"}`,children:[e.jsxs("p",{className:`text-lg font-semibold ${t?"text-slate-100":"text-[#005eb8]"}`,children:[xt.label," · ",k]}),e.jsx("p",{className:`mt-2 text-sm ${t?"text-slate-300":"text-blue-900"}`,children:ms(k)})]})),e.jsx("p",{className:`mt-4 text-sm ${u}`,children:"Now we need to look at scoring each Change Component in Terms of Readiness for Change through each of the relevant lenses."})]}):null,l===6?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Readiness is scored on a scale from 'Not Started', to 'Thriving' for every lens"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${u}`,children:"Each lens for each Change Component will need its own readiness status, because a Change Component could be strong through one lens and weak in another. Here is what each level means and what that will look like on the readiness radar you will see elsewhere in the tool:"}),e.jsxs("div",{className:"mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3",children:[e.jsx("div",{className:"grid grid-cols-1 gap-2",children:Wt.map(k=>{const[,p]=(Dn[k.score]||"").split(/:\s(.+)/);return e.jsxs("div",{className:`rounded-md border p-2.5 ${t?"border-slate-700":""}`,style:{borderLeftWidth:"4px",borderLeftColor:k.color},children:[e.jsx("p",{className:`text-xs font-bold ${t?"text-slate-100":"text-slate-800"}`,children:k.label}),e.jsx("p",{className:`mt-0.5 text-xs ${t?"text-slate-300":"text-slate-600"}`,children:p})]},k.score)})}),e.jsxs("div",{className:`rounded-lg border p-4 ${t?"border-red-500/30 bg-red-500/5":"border-red-200 bg-red-50"}`,children:[e.jsx("p",{className:`text-sm font-bold ${t?"text-red-200":"text-red-800"}`,children:"At risk example"}),e.jsx("p",{className:`mt-1 text-xs ${t?"text-slate-300":"text-slate-600"}`,children:"Notional scores trailing behind where Phase 2 expects these components to be."}),e.jsx("div",{className:"mt-3",children:e.jsx(Ga,{scores:kl,darkMode:t})})]}),e.jsxs("div",{className:`rounded-lg border p-4 ${t?"border-emerald-500/30 bg-emerald-500/5":"border-emerald-200 bg-emerald-50"}`,children:[e.jsx("p",{className:`text-sm font-bold ${t?"text-emerald-200":"text-emerald-800"}`,children:"Excelling example"}),e.jsx("p",{className:`mt-1 text-xs ${t?"text-slate-300":"text-slate-600"}`,children:"Notional scores ahead of where Phase 2 expects these components to be."}),e.jsx("div",{className:"mt-3",children:e.jsx(Ga,{scores:Cl,darkMode:t})})]})]})]}):null,l===7?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Actions"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${u}`,children:"To improve readiness for each component through each lens there are a set of suggested actions to be completed. These Actions can be edited or removed or you can add your own actions."}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${u}`,children:"Actions can be assigned to team members and have completion dates assigned if required. Once the Actions at each readiness level is Completed or Cancelled, that lens automatically moves up to the next readiness level."}),e.jsx("p",{className:`mt-4 text-sm font-semibold ${u}`,children:"Try assigning these actions and then marking them as complete."}),e.jsx("div",{className:`mt-3 overflow-x-auto rounded-md border ${t?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200",children:[e.jsx("thead",{className:t?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider ${t?"text-slate-400":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider ${t?"text-slate-400":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider ${t?"text-slate-400":"text-slate-500"}`,children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:c.map(k=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 align-top text-sm ${u}`,children:k.text}),e.jsx("td",{className:"px-3 py-2 align-top",children:m===k.id?e.jsxs("select",{autoFocus:!0,"aria-label":`Owner for ${k.text}`,value:k.owner,onChange:p=>{E(k.id,{owner:p.target.value}),r(null)},onBlur:()=>r(null),className:"rounded-md border border-slate-300 px-2 py-1 text-xs font-semibold",children:[e.jsx("option",{value:"",children:"Unassigned"}),Dl.map(p=>e.jsx("option",{value:p,children:p},p))]}):e.jsx("button",{type:"button",onClick:()=>r(k.id),"aria-label":`Change owner for ${k.text}`,className:"rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b]",children:e.jsx(Oi,{name:k.owner,darkMode:t})})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("select",{"aria-label":`Status for ${k.text}`,value:k.status,onChange:p=>E(k.id,{status:p.target.value}),className:`rounded-md border px-2 py-1 text-xs font-semibold ${Dt[k.status]}`,children:ws.map(p=>e.jsx("option",{value:p,children:p},p))})})]},k.id))})]})}),e.jsx("p",{className:`mt-6 text-sm font-semibold ${t?"text-slate-100":"text-slate-900"}`,children:"That's Adoption Engine explained: Pathway → Phase → Component → Lens → Readiness → Actions. Let's see the whole picture before you set up your real project."})]}):null,l===8?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"The whole engine, one page"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${u}`,children:"Every pathway, phase, component, lens and readiness level really used in this tool, laid out top to bottom. Components and lenses connect both ways, since every component is viewed through several lenses."}),e.jsx("div",{className:"mt-6",children:e.jsx(_l,{darkMode:t})})]}):null,e.jsxs("div",{className:"mt-8 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:R,disabled:l===0,className:`rounded-md border px-4 py-2 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${t?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Back"}),S?e.jsx("button",{type:"button",onClick:n,disabled:!h,title:h?void 0:"Mark every notional action Completed with an owner assigned to continue",className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#005eb8]",children:"Get started"}):e.jsx("button",{type:"button",onClick:C,disabled:l===7&&!h,title:l===7&&!h?"Mark every notional action Completed with an owner assigned to continue":void 0,className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#005eb8]",children:"Next"})]})]}),f.length>0?e.jsx(Ai,{message:f[0].message,onDismiss:()=>b(k=>k.slice(1)),celebrate:!0},f[0].id):null]})}const Tl=`Pathway 1 - We are starting $projectName for the first time
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
adoption.`,zn={"Pathway 1 - We are starting product for the first time":"pathway-1","Pathway 2 - We have piloted product and need to scale up":"pathway-2","Pathway 3 - product is live but adoption is patchy":"pathway-3","Pathway 1 - Pilot":"pathway-1","Pathway 2 - Scale up":"pathway-2","Pathway 3 - Reassess":"pathway-3"},Ll={vision:"Vision",case_for_change:"Case for Change",sponsorship:"Senior Sponsorship and Governance",change_network:"Change Network",benefits:"Benefits and WIIFM",stakeholder:"Stakeholder Engagement and Communication",process_change:"Process Change and Ways of Working",change_impact:"Change Impact and Risk",risk_management:"Change Impact and Risk",skills_learning:"Skills, Learning, Capability and Confidence",capability:"Skills, Learning, Capability and Confidence",change_adoption:"Change Adoption",transfer_bau:"Transfer to BAU",reinforcement:"Reinforcement",resistance:"Resistance",cm_readiness:"Readiness and Planning",org_maturity:"Organisational Change Management Maturity"};function Ml(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function Kn(t){return t.replace(/\bAVT\b/g,"${productName}")}function Bl(t){const n=t.split(/\r?\n/).map(i=>i.trim()),s={};let a=0;for(;a<n.length;){const i=n[a],l=zn[i];if(!l){a+=1;continue}for(a+=1;a<n.length&&!n[a];)a+=1;if(a>=n.length)break;const o=n[a];for(a+=1;a<n.length&&(!n[a]||n[a]==="Are you on track?");)a+=1;let c="";if(a<n.length&&n[a].startsWith("Descriptor:"))for(c=Kn(n[a].replace("Descriptor:","").trim()),a+=1;a<n.length&&n[a]&&!n[a].startsWith("☐")&&!n[a].startsWith("ARE YOU ON TRACK?")&&!zn[n[a]];)c=Kn(`${c} ${n[a]}`.trim()),a+=1;const d=[];for(;a<n.length&&n[a].startsWith("☐");){const m=Kn(n[a].replace(/^☐\s*/,"").trim()),r=`${l}:${Ml(o)}:${d.length+1}`;d.push({key:r,text:m}),a+=1}for(s[o]||(s[o]={}),s[o][l]={domain:o,descriptor:c,checklist:d};a<n.length&&n[a]&&!zn[n[a]];)a+=1}return s}const Gl=Bl(Tl);function Fl(t){return Ll[t]||null}function Hi(t,n){var a;const s=Fl(t);return s&&((a=Gl[s])==null?void 0:a[n])||null}function Ul(t,n){if(!n||n.checklist.length===0)return{status:"on-track",completionPct:100,checkedCount:0,totalCount:0};const s=n.checklist.length,a=new Set(t),i=n.checklist.filter(o=>a.has(o.key)).length,l=Math.round(i/s*100);return l>=80?{status:"on-track",completionPct:l,checkedCount:i,totalCount:s}:l>=45?{status:"attention",completionPct:l,checkedCount:i,totalCount:s}:{status:"off-track",completionPct:l,checkedCount:i,totalCount:s}}function Hl(t){const n=Ul(t.checkedItemKeys,t.rule);return!t.rule||t.rule.checklist.length===0?{status:t.averageScore>=t.targetScore?"on-track":"attention",completionPct:n.completionPct,checkedCount:n.checkedCount,totalCount:n.totalCount}:n.status==="off-track"?n:t.averageScore<Math.max(1,t.targetScore-1)&&n.status!=="on-track"?{...n,status:"attention"}:n}const Jn=[1,2,3,4,5];function Wl(t,n){const s=t.lenses.reduce((a,i)=>a+Number(n(t.id,i).score||0),0);return t.lenses.length?Number((s/t.lenses.length).toFixed(1)):0}function Vl(t,n,s,a,i,l){if(t.phase>s)return{label:"Not in current phase yet",rowClass:l?"border-slate-600 bg-slate-800/80":"border-slate-200 bg-slate-50",chipClass:l?"bg-slate-700 text-slate-100":"bg-slate-200 text-slate-700",barClass:"bg-slate-400"};const o=Hi(t.id,a),c=Hl({averageScore:n,targetScore:t.target,checkedItemKeys:i,rule:o});return c.status==="off-track"?{label:`Off track (${c.completionPct}% checklist)`,rowClass:l?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:l?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:c.status==="attention"?{label:`Needs attention (${c.completionPct}% checklist)`,rowClass:l?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:l?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:n>=t.target?{label:`On track (${c.completionPct}% checklist)`,rowClass:l?"border-green-700 bg-green-950/45":"border-green-200 bg-green-50",chipClass:l?"bg-green-900 text-green-100":"bg-green-100 text-green-700",barClass:"bg-green-500"}:t.phase<s?{label:"Behind timeline",rowClass:l?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:l?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:t.phase===s?{label:"Due this phase",rowClass:l?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:l?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:{label:"In progress",rowClass:l?"border-blue-700 bg-blue-950/45":"border-blue-200 bg-blue-50",chipClass:l?"bg-blue-900 text-blue-100":"bg-blue-100 text-blue-700",barClass:"bg-blue-500"}}function ql({components:t,metrics:n,getEntry:s,onComponentClick:a,pathway:i,pathwayChecks:l,darkMode:o=!1}){const c=ht("component-delivery-timeline"),d=t.map(m=>{var b;const r=Wl(m,s),f=((b=l[m.id])==null?void 0:b[i])||[];return{component:m,average:r,status:Vl(m,r,n.currentPhase,i,f,o)}});return e.jsxs("section",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-2xl border p-6 shadow-sm`,children:[e.jsx("p",{className:`text-sm font-semibold uppercase tracking-[0.18em] ${o?"text-slate-300":"text-slate-500"}`,children:"Component Delivery Timeline"}),e.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-900"}`,children:"Component delivery timeline"}),e.jsx(wt,{onClick:c.reopen,darkMode:o})]}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"This gantt-style view shows when each component should be completed by phase. Components are coloured by whether they are on track against the current phase. Select a row to jump into the matching assessment tab."})]}),e.jsx(St,{open:c.isOpen,onClose:c.close,title:"Component Delivery Timeline",darkMode:o,body:e.jsx("p",{children:"A gantt-style view of when each component should be completed by phase, coloured by whether it's on track. Select a row to jump straight into that component's assessment."})}),e.jsx("div",{className:"lg:hidden space-y-3",children:d.map(({component:m,average:r,status:f})=>e.jsxs("button",{type:"button",onClick:()=>a(m.id),className:`w-full rounded-xl border p-4 text-left transition-colors ${o?"hover:border-slate-500":"hover:border-slate-300"} ${f.rowClass}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:m.label}),e.jsxs("div",{className:`mt-1 text-xs ${o?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",gs(m.target)," · completes by Phase"," ",m.phase]})]}),e.jsx("span",{className:`rounded-full px-4 py-1 text-xs font-semibold ${f.chipClass}`,children:f.label})]}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("div",{className:`mb-1 flex items-center justify-between text-xs ${o?"text-slate-300":"text-slate-600"}`,children:[e.jsx("span",{children:"Timeline"}),e.jsxs("span",{children:["Average ",r]})]}),e.jsx("div",{className:"grid grid-cols-5 gap-1",children:Jn.map(b=>{const h=b<=m.phase,x=b===m.phase;return e.jsxs("div",{children:[e.jsx("div",{className:`h-2 rounded-full ${o?"bg-slate-700/70":"bg-white/80"}`,children:h?e.jsx("div",{className:`h-full rounded-full ${f.barClass} ${x?"opacity-100":"opacity-35"}`,title:x?"Expected completion phase":"Planned timeline"}):null}),e.jsxs("div",{className:`mt-1 text-center text-[10px] ${o?"text-slate-400":"text-slate-500"}`,children:["P",b]})]},`${m.id}-mobile-${b}`)})})]})]},`mobile-${m.id}`))}),e.jsx("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} hidden lg:block rounded-2xl border p-5 shadow-sm overflow-x-auto`,children:e.jsxs("div",{className:"min-w-[860px]",children:[e.jsxs("div",{className:`grid grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 border-b pb-3 text-xs font-semibold uppercase tracking-wider ${o?"border-slate-700 text-slate-400":"border-slate-200 text-slate-500"}`,children:[e.jsx("div",{children:"Component"}),Jn.map(m=>e.jsxs("div",{className:"text-center",children:["Phase ",m]},m)),e.jsx("div",{className:"text-center",children:"Average"}),e.jsx("div",{className:"text-center",children:"Status"})]}),e.jsx("div",{className:"mt-4 space-y-3",children:d.map(({component:m,average:r,status:f})=>e.jsxs("button",{type:"button",onClick:()=>a(m.id),className:`grid w-full grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 rounded-xl border p-2.5 text-left transition-colors ${o?"hover:border-slate-500":"hover:border-slate-300"} ${f.rowClass}`,children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:m.label}),e.jsxs("div",{className:`mt-1 text-xs ${o?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",gs(m.target)," · completes by Phase"," ",m.phase]})]}),Jn.map(b=>{const h=b<=m.phase,x=b===m.phase;return e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:`h-7 w-full rounded-full px-1 py-1 ${o?"bg-slate-700/70":"bg-white/70"}`,children:h?e.jsx("div",{className:`h-full rounded-full ${f.barClass} ${x?"opacity-100":"opacity-35"}`,title:x?"Expected completion phase":"Planned timeline"}):null})},`${m.id}-${b}`)}),e.jsx("div",{className:`flex items-center justify-center text-sm font-semibold ${o?"text-slate-100":"text-slate-700"}`,children:r}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("span",{className:`rounded-full text-center px-2.5 py-1 text-xs font-semibold ${f.chipClass}`,children:f.label})})]},m.id))}),e.jsxs("div",{className:`mt-4 rounded-md border p-3 text-xs ${o?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{className:"font-semibold",children:"Key:"})," Grey rows are not yet due for the current phase. Red rows indicate overdue or off-track work."]})]})})]})}function Yl(t){return wo.sanitize(t,{USE_PROFILES:{html:!0}})}const zl=[{label:"Bold",command:"bold",icon:"B"},{label:"Italic",command:"italic",icon:"I"},{label:"Bullet list",command:"insertUnorderedList",icon:"•"},{label:"Numbered list",command:"insertOrderedList",icon:"1."}];function Fa({value:t,onChange:n,placeholder:s,className:a}){const i=g.useRef(null);g.useEffect(()=>{const d=i.current;d&&d.innerHTML!==t&&(d.innerHTML=t)},[t]);const l=()=>{const d=i.current;d&&n(Yl(d.innerHTML))},o=d=>{var m;(m=i.current)==null||m.focus(),document.execCommand(d,!1),l()},c=!t||t==="<br>";return e.jsxs("div",{className:`rounded-md border border-slate-300 bg-white ${a||""}`,children:[e.jsx("div",{"data-print-hide":"true",className:"flex items-center gap-1 border-b border-slate-200 bg-slate-50 px-1.5 py-1",children:zl.map(d=>e.jsx("button",{type:"button",title:d.label,"aria-label":d.label,onMouseDown:m=>m.preventDefault(),onClick:()=>o(d.command),className:"flex h-6 min-w-[1.5rem] items-center justify-center rounded px-1 text-xs font-bold text-slate-600 hover:bg-slate-200",children:d.icon},d.command))}),e.jsxs("div",{className:"relative",children:[c&&s?e.jsx("span",{className:"pointer-events-none absolute left-2 top-1.5 text-sm text-slate-400",children:s}):null,e.jsx("div",{ref:i,contentEditable:!0,suppressContentEditableWarning:!0,onInput:l,onBlur:l,className:"min-h-[4.5rem] px-2 py-1.5 text-sm text-slate-800 outline-none [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"})]})]})}function at(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}const hs="nhs-highlight-builder-layout",Xn=[{id:"executive-summary",label:"Executive Summary"},{id:"change-dashboard",label:"Change Dashboard"},{id:"adoption-metrics",label:"Adoption Metrics"},{id:"what-went-well",label:"What Went Well"},{id:"risks-issues",label:"Key Risks and Issues"},{id:"stakeholder-insights",label:"Stakeholder Insights"},{id:"interventions-delivered",label:"Change Interventions Delivered"},{id:"upcoming-priorities",label:"Upcoming Priorities"},{id:"decisions-required",label:"Decisions Required"},{id:"change-lead-assessment",label:"Change Lead Assessment"}],Kl={"executive-summary":{label:"Headline scorecard",kind:"donut"},"change-dashboard":{label:"RAG trend chart",kind:"trend"},"adoption-metrics":{label:"KPI scorecard",kind:"bars"},"what-went-well":{label:"Achievement tiles",kind:"steps"},"risks-issues":{label:"Risk heat map",kind:"risk"},"stakeholder-insights":{label:"Sentiment split",kind:"donut"},"interventions-delivered":{label:"Intervention timeline",kind:"steps"},"upcoming-priorities":{label:"30-day roadmap",kind:"steps"},"decisions-required":{label:"Decision funnel",kind:"trend"},"change-lead-assessment":{label:"Confidence profile",kind:"bars"}},qt=["#005eb8","#41a6c8","#78be20","#ffb81c","#da291c"],yt={title:"Executive Highlight Report",themeColor:"#005eb8",logoDataUrl:"",programmeName:"",reportingPeriod:"",changeLeadName:"",sroName:"",overallStatus:"Amber",orientation:"landscape",bragSlides:[],sections:["executive-summary","change-dashboard","adoption-metrics","what-went-well","risks-issues","stakeholder-insights","interventions-delivered","upcoming-priorities","decisions-required","change-lead-assessment"],sectionNarratives:{},metricRows:[],riskRows:[],stakeholderPositivePct:0,stakeholderNeutralPct:0,stakeholderNegativePct:0,interventionRows:[],decisionRows:[],assessmentRows:[]},Jl={Green:"bg-green-100 text-green-800 border-green-200",Amber:"bg-amber-100 text-amber-800 border-amber-200",Red:"bg-red-100 text-red-800 border-red-200"},Xl={Green:"bg-green-500",Amber:"bg-amber-500",Red:"bg-red-500"};function Ua({status:t}){return e.jsxs("span",{className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${Jl[t]}`,children:[e.jsx("span",{className:`h-2 w-2 rounded-full ${Xl[t]}`}),t]})}function Ql({rows:t}){const n=Math.max(5,...t.flatMap(s=>[s.current,s.target]));return e.jsxs("div",{className:"space-y-5","aria-label":"Current component scores compared with targets",children:[t.map(s=>e.jsxs("div",{className:"grid grid-cols-[minmax(130px,1fr),minmax(220px,2fr),48px] items-center gap-3",children:[e.jsx("span",{className:"text-sm font-semibold text-[#425563]",children:s.label}),e.jsxs("div",{className:"relative h-8 rounded bg-[#e8edee]",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 rounded bg-[#005eb8]",style:{width:`${Math.min(100,s.current/n*100)}%`}}),e.jsx("div",{className:"absolute inset-y-[-4px] w-0.5 bg-[#da291c]",style:{left:`${Math.min(100,s.target/n*100)}%`},title:`Target ${s.target}`})]}),e.jsx("span",{className:"text-right text-sm font-bold text-[#005eb8]",children:s.current.toFixed(1)})]},s.label)),e.jsxs("div",{className:"flex flex-wrap gap-5 border-t border-[#d8dde0] pt-4 text-xs text-[#425563]",children:[e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"h-3 w-3 rounded-sm bg-[#005eb8]"})," Current average"]}),e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"h-4 w-0.5 bg-[#da291c]"})," Target marker"]})]})]})}function Zl(){return e.jsx("span",{className:"flex h-4 w-4 shrink-0 items-center justify-center rounded bg-green-500 text-[10px] font-bold text-white",children:"✓"})}function ln(t,n){return`${t+1}. ${n}`}function Wi(t){return Array.isArray(t)?t.filter(n=>!!n&&typeof n=="object").map(n=>({id:n.id||at(),componentId:n.componentId||"",rows:Array.isArray(n.rows)?n.rows.filter(s=>!!s&&typeof s=="object").map(s=>({id:s.id||at(),preventingGreenHtml:s.preventingGreenHtml||"",returnToGreenHtml:s.returnToGreenHtml||"",ownerId:s.ownerId||"",targetDate:s.targetDate||"",linkedActionId:s.linkedActionId})):[]})):[]}function fn(t,n){return Array.isArray(t)?t.filter(s=>!!s&&typeof s=="object").map(n):[]}function Vi(t){return fn(t,n=>({id:n.id||at(),measure:n.measure||"",target:n.target||"",current:n.current||"",status:n.status==="Green"||n.status==="Amber"||n.status==="Red"?n.status:"Amber"}))}function qi(t){return fn(t,n=>({id:n.id||at(),risk:n.risk||"",impact:n.impact||"",mitigation:n.mitigation||"",status:n.status||"Open"}))}function Yi(t){return fn(t,n=>({id:n.id||at(),text:n.text||""}))}function zi(t){return fn(t,n=>({id:n.id||at(),decision:n.decision||"",owner:n.owner||"",requiredBy:n.requiredBy||""}))}function Ki(t){return fn(t,n=>({id:n.id||at(),area:n.area||"",confidence:n.confidence==="High"||n.confidence==="Medium"||n.confidence==="Low"?n.confidence:"Medium"}))}function ec(){const t=it(hs);if(!t)return yt;try{return{...yt,...t,overallStatus:t.overallStatus==="Green"||t.overallStatus==="Amber"||t.overallStatus==="Red"?t.overallStatus:yt.overallStatus,orientation:t.orientation==="portrait"||t.orientation==="landscape"?t.orientation:yt.orientation,bragSlides:Wi(t.bragSlides),sections:Array.isArray(t.sections)&&t.sections.length>0?t.sections:yt.sections,metricRows:Vi(t.metricRows),riskRows:qi(t.riskRows),stakeholderPositivePct:Number(t.stakeholderPositivePct)||0,stakeholderNeutralPct:Number(t.stakeholderNeutralPct)||0,stakeholderNegativePct:Number(t.stakeholderNegativePct)||0,interventionRows:Yi(t.interventionRows),decisionRows:zi(t.decisionRows),assessmentRows:Ki(t.assessmentRows)}}catch{return yt}}function tc({store:t,metrics:n,lenses:s,components:a=en,getEntry:i,trustName:l,projectName:o,themeColor:c,onLayoutSaved:d,darkMode:m=!1,currentUserId:r}){const f=ht("highlight-builder"),b=t.orgProfile.teamMembers||[],[h,x]=g.useState(()=>{const N=ec();return c&&!N.themeColor?{...N,themeColor:c}:N}),[E,S]=g.useState(""),[u,C]=g.useState(0),R=g.useRef(null),j=g.useMemo(()=>new Set(h.sections),[h.sections]),k=g.useMemo(()=>h.sections.reduce((N,M,_)=>(N[M]=_,N),{}),[h.sections]),p=h.orientation==="landscape",B=p?"overflow-hidden rounded-lg border border-[#003087] bg-white shadow-md":"rounded-md border border-slate-200 bg-white p-4",D=p?{}:{borderLeft:`3px solid ${h.themeColor}`};function V({children:N}){return p?e.jsx("div",{className:"-mx-0 -mt-0 mb-4 px-5 py-3 text-base font-bold uppercase tracking-wide text-white",style:{backgroundColor:h.themeColor||Vn.blue},children:N}):e.jsx("div",{className:"mb-2 border-b border-slate-200 pb-1 text-xs font-bold uppercase tracking-wider text-slate-500",children:N})}function le({children:N}){return p?e.jsx("div",{className:"px-5 pb-5 text-[15px]",children:N}):e.jsx(e.Fragment,{children:N})}const re=g.useMemo(()=>a.map(N=>{let M=0;N.lenses.forEach(P=>{M+=Number(i(N.id,P).score||0)});const _=Number((M/N.lenses.length).toFixed(1));return{component:N,average:_,target:N.target,gap:Number(Math.max(0,N.target-_).toFixed(1))}}),[a,i]),w=g.useMemo(()=>[...re].sort((N,M)=>M.average-N.average).slice(0,5),[re]),L=N=>{x(M=>({...M,...N}))},ne=N=>{x(M=>{const _=j.has(N)?M.sections.filter(P=>P!==N):[...M.sections,N];return{...M,sections:_}})},xe=(N,M)=>{x(_=>({..._,sectionNarratives:{..._.sectionNarratives,[N]:M}}))},Ae=()=>{const N=new Set(h.bragSlides.map(P=>P.componentId)),M=a.find(P=>!N.has(P.id))||a[0],_={id:at(),componentId:(M==null?void 0:M.id)||"",rows:[]};x(P=>({...P,bragSlides:[...P.bragSlides,_]}))},Fe=N=>{x(M=>({...M,bragSlides:M.bragSlides.filter(_=>_.id!==N)}))},U=(N,M)=>{x(_=>({..._,bragSlides:_.bragSlides.map(P=>P.id===N?{...P,componentId:M}:P)}))},de=N=>{const M={id:at(),preventingGreenHtml:"",returnToGreenHtml:"",ownerId:r||"",targetDate:""};x(_=>({..._,bragSlides:_.bragSlides.map(P=>P.id===N?{...P,rows:[...P.rows,M]}:P)}))},ce=(N,M,_)=>{x(P=>({...P,bragSlides:P.bragSlides.map(Y=>Y.id===N?{...Y,rows:Y.rows.map(z=>z.id===M?{...z,..._}:z)}:Y)}))},fe=(N,M)=>{x(_=>({..._,bragSlides:_.bragSlides.map(P=>P.id===N?{...P,rows:P.rows.filter(Y=>Y.id!==M)}:P)}))};function Se(N,M){x(_=>({..._,[N]:[..._[N],M]}))}function ye(N,M,_){x(P=>({...P,[N]:P[N].map(Y=>Y.id===M?{...Y,..._}:Y)}))}function me(N,M){x(_=>({..._,[N]:_[N].filter(P=>P.id!==M)}))}const Ce=async N=>{var P;const M=(P=N.target.files)==null?void 0:P[0];if(!M)return;const _=await new Promise((Y,z)=>{const oe=new FileReader;oe.onload=()=>Y(String(oe.result||"")),oe.onerror=()=>z(new Error("Unable to read selected logo file.")),oe.readAsDataURL(M)});S(M.name),x(Y=>({...Y,logoDataUrl:_})),C(Y=>Y+1)},Le=()=>{ze(hs,h),Ut("highlight-builder-layout.json",JSON.stringify(h,null,2),"application/json"),d==null||d()},Ue=async N=>{var _;const M=(_=N.target.files)==null?void 0:_[0];if(M)try{const P=await M.text(),Y=JSON.parse(P);x({...yt,...Y,overallStatus:Y.overallStatus==="Green"||Y.overallStatus==="Amber"||Y.overallStatus==="Red"?Y.overallStatus:yt.overallStatus,orientation:Y.orientation==="portrait"||Y.orientation==="landscape"?Y.orientation:yt.orientation,bragSlides:Wi(Y.bragSlides),sections:Array.isArray(Y.sections)&&Y.sections.length>0?Y.sections:yt.sections,sectionNarratives:Y.sectionNarratives||{},metricRows:Vi(Y.metricRows),riskRows:qi(Y.riskRows),stakeholderPositivePct:Number(Y.stakeholderPositivePct)||0,stakeholderNeutralPct:Number(Y.stakeholderNeutralPct)||0,stakeholderNegativePct:Number(Y.stakeholderNegativePct)||0,interventionRows:Yi(Y.interventionRows),decisionRows:zi(Y.decisionRows),assessmentRows:Ki(Y.assessmentRows)})}catch{window.alert("Unable to load the selected layout JSON. Please verify the file contents.")}finally{N.target.value=""}};g.useEffect(()=>{ze(hs,h)},[h]);const G=t.history.length>1?t.history[t.history.length-2]:null,W=g.useMemo(()=>re.slice(0,10).map(N=>{const M=G?Number((N.component.lenses.reduce((z,oe)=>{var ue,je;return z+Number(((je=(ue=G.data[N.component.id])==null?void 0:ue[oe])==null?void 0:je.score)||0)},0)/N.component.lenses.length).toFixed(1)):N.average,_=N.average>M?"▲":N.average<M?"▼":"►",P=N.average>=N.target?"Green":N.average>=Math.max(1,N.target-1)?"Amber":"Red",Y=N.average>=N.target?"Consistently understood by most stakeholder groups.":N.average>=Math.max(1,N.target-1)?"Progressing, with reinforcement still required.":"Below target and requiring focused intervention.";return{area:N.component.label,current:N.average,target:N.target,status:P,trend:_,commentary:Y}}),[re,G]),X=g.useMemo(()=>W.map(N=>({label:N.area,current:N.current,target:N.target})),[W]),_e=g.useMemo(()=>n.nextSteps.slice(0,7).map(N=>N.message),[n.nextSteps]),ot=N=>{if(N==="decisions-required")return h.decisionRows.some(M=>M.decision.trim()||M.owner.trim()||M.requiredBy.trim());if((h.sectionNarratives[N]||"").trim())return!0;switch(N){case"executive-summary":return!0;case"change-dashboard":return W.length>0;case"adoption-metrics":return h.metricRows.length>0;case"what-went-well":return w.length>0;case"risks-issues":return h.riskRows.length>0;case"stakeholder-insights":return h.stakeholderPositivePct+h.stakeholderNeutralPct+h.stakeholderNegativePct>0;case"interventions-delivered":return h.interventionRows.length>0;case"upcoming-priorities":return _e.length>0;case"decisions-required":return h.decisionRows.length>0;case"change-lead-assessment":return h.assessmentRows.length>0;default:return!1}},Ye=h.sections.filter(N=>ot(N)),$=N=>{let M=0;return N.reduce((_,P)=>(_[P]=M,M+=P==="change-dashboard"?2:1,_),{})},ie=$(h.sections),Z=$(Ye);function we({sectionId:N}){if(!p)return null;const M=Kl[N],_=z=>{const oe=Number.parseFloat(z.replace("%","").trim());return Number.isFinite(oe)?Math.max(0,oe):0};if(M.kind==="donut"){const z=N==="stakeholder-insights"?[h.stakeholderPositivePct,h.stakeholderNeutralPct,h.stakeholderNegativePct]:[Number(n.overallPct),Math.max(0,100-Number(n.overallPct))],oe=z.reduce((It,Nt)=>It+Nt,0);if(!oe)return null;const ue=z[0]/oe*100,je=z[1]/oe*100,ke=N==="stakeholder-insights"?"Positive":"Overall progress",Ve=N==="stakeholder-insights"?"Neutral":"Remaining",ut=N==="stakeholder-insights"?z[2]/oe*100:0;return e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:M.label}),e.jsx("div",{className:"mx-auto mt-4 h-32 w-32 rounded-full",style:{background:N==="stakeholder-insights"?`conic-gradient(#78be20 0 ${ue}%, #ffb81c ${ue}% ${ue+je}%, #da291c ${ue+je}% ${ue+je+ut}%, #d8eaf6 ${ue+je+ut}% 100%)`:`conic-gradient(#005eb8 0 ${ue}%, #41a6c8 ${ue}% ${ue+je}%, #d8eaf6 ${ue+je}% 100%)`,mask:"radial-gradient(circle, transparent 55%, #000 56%)",WebkitMask:"radial-gradient(circle, transparent 55%, #000 56%)"}}),e.jsxs("div",{className:"mt-4 grid gap-2 text-xs text-[#425563]",children:[e.jsxs("span",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{children:[e.jsx("i",{className:`mr-2 inline-block h-2.5 w-2.5 rounded-full ${N==="stakeholder-insights"?"bg-[#78be20]":"bg-[#005eb8]"}`}),ke]}),e.jsxs("strong",{children:[z[0],"%"]})]}),e.jsxs("span",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{children:[e.jsx("i",{className:`mr-2 inline-block h-2.5 w-2.5 rounded-full ${N==="stakeholder-insights"?"bg-[#ffb81c]":"bg-[#41a6c8]"}`}),Ve]}),e.jsxs("strong",{children:[z[1],"%"]})]}),N==="stakeholder-insights"?e.jsxs("span",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{children:[e.jsx("i",{className:"mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#da291c]"}),"Negative"]}),e.jsxs("strong",{children:[z[2],"%"]})]}):null]})]})}if(M.kind==="risk"){const z=h.riskRows.reduce((je,ke)=>{const Ve=ke.status.trim()||"Open";return je[Ve]=(je[Ve]||0)+1,je},{}),oe=Object.entries(z);if(!oe.length)return null;const ue=Math.max(...oe.map(([,je])=>je));return e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:M.label}),e.jsx("div",{className:"mt-5 space-y-3",children:oe.map(([je,ke])=>e.jsxs("div",{children:[e.jsxs("div",{className:"mb-1 flex justify-between text-xs font-semibold text-[#425563]",children:[e.jsx("span",{children:je}),e.jsx("span",{children:ke})]}),e.jsx("div",{className:"h-4 rounded bg-white",children:e.jsx("div",{className:"h-4 rounded",style:{width:`${ke/ue*100}%`,backgroundColor:je.toLowerCase().includes("closed")?"#78be20":je.toLowerCase().includes("at risk")?"#da291c":"#ffb81c"}})})]},je))})]})}if(M.kind==="steps"){const z=N==="interventions-delivered"?h.interventionRows.map(oe=>oe.text.trim()).filter(Boolean):N==="upcoming-priorities"?_e:w.map(oe=>oe.component.label);return z.length?e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:M.label}),e.jsx("div",{className:"mt-5 space-y-3",children:z.slice(0,5).map((oe,ue)=>e.jsxs("div",{className:"flex items-start gap-3 text-xs text-[#425563]",children:[e.jsx("span",{className:"flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-bold text-white",style:{backgroundColor:qt[ue%qt.length]},children:ue+1}),e.jsx("span",{className:"pt-0.5",children:oe})]},`${oe}-${ue}`))})]}):null}if(M.kind==="trend"&&N==="decisions-required"){const z=h.decisionRows.map(oe=>oe.decision.trim()).filter(Boolean);return z.length?e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:M.label}),e.jsx("div",{className:"mt-5 space-y-3",children:z.slice(0,5).map((oe,ue)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"h-5 flex-1 rounded bg-white",children:e.jsx("div",{className:"h-5 rounded",style:{width:`${100-ue*15}%`,backgroundColor:qt[ue%qt.length]}})}),e.jsx("span",{className:"max-w-[45%] text-right text-xs text-[#425563]",children:oe})]},`${oe}-${ue}`))})]}):null}const Y=(N==="adoption-metrics"?h.metricRows.map(z=>({label:z.measure,value:_(z.current),max:Math.max(100,_(z.target))})):N==="change-lead-assessment"?["High","Medium","Low"].map(z=>({label:z,value:h.assessmentRows.filter(oe=>oe.confidence===z).length,max:Math.max(1,h.assessmentRows.length)})):w.map(z=>({label:z.component.label,value:z.average,max:5}))).filter(z=>z.label.trim()&&z.value>0);return Y.length?e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:M.label}),e.jsx("div",{className:"mt-5 space-y-3",children:Y.slice(0,6).map(z=>e.jsxs("div",{children:[e.jsxs("div",{className:"mb-1 flex justify-between gap-2 text-xs font-semibold text-[#425563]",children:[e.jsx("span",{children:z.label}),e.jsx("span",{children:z.value})]}),e.jsx("div",{className:"h-4 rounded bg-white",children:e.jsx("div",{className:"h-4 rounded",style:{width:`${Math.min(100,z.value/z.max*100)}%`,backgroundColor:qt[Y.indexOf(z)%qt.length]}})})]},z.label))})]}):null}const Ee=N=>{if((h.sectionNarratives[N]||"").trim())return h.sectionNarratives[N].trim();switch(N){case"executive-summary":return`${h.overallStatus}. The programme continues to progress across ${a.length} components and ${s.length} lenses, with overall delivery at ${n.overallPct}%.`;case"change-dashboard":return"Dashboard status is derived from current component averages versus targets, with trend based on the most recent finalised snapshot.";case"adoption-metrics":return"Metrics below provide an operational view of progress against key adoption measures and targets.";case"what-went-well":return"List key achievements for the reporting period, including sponsorship visibility and areas of strengthened adoption.";case"risks-issues":return"The following risks/issues require active monitoring and mitigation.";case"stakeholder-insights":return"Summarise positive feedback themes, concerns, and sentiment from stakeholder listening channels.";case"interventions-delivered":return"Capture interventions completed this month and assess their observed effectiveness.";case"upcoming-priorities":return"Set out the next 30-day focus to maintain delivery momentum and close adoption gaps.";case"decisions-required":return"Record approvals and decisions needed to unblock delivery and sustain adoption progress.";case"change-lead-assessment":return"Provide confidence ratings and the overall professional assessment from the Change Lead.";default:return""}},Re=N=>{const M=Ee(N);return N==="change-dashboard"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:M}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Trend"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Commentary"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:W.map(_=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:_.area}),e.jsx("td",{className:"px-3 py-2 text-sm",children:e.jsx(Ua,{status:_.status})}),e.jsx("td",{className:"px-3 py-2 text-sm",children:_.trend}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:_.commentary})]},_.area))})]})})]}):N==="adoption-metrics"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:M}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Measure"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[h.metricRows.map(_=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:_.measure,onChange:P=>ye("metricRows",_.id,{measure:P.target.value}),placeholder:"e.g. Active Users",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:_.target,onChange:P=>ye("metricRows",_.id,{target:P.target.value}),placeholder:"e.g. 80%",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:_.current,onChange:P=>ye("metricRows",_.id,{current:P.target.value}),placeholder:"e.g. 62%",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:_.status,onChange:P=>ye("metricRows",_.id,{status:P.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"Green",children:"Green"}),e.jsx("option",{value:"Amber",children:"Amber"}),e.jsx("option",{value:"Red",children:"Red"})]})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>me("metricRows",_.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},_.id)),h.metricRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No metrics added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>Se("metricRows",{id:at(),measure:"",target:"",current:"",status:"Amber"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Metric"})]}):N==="risks-issues"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:M}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Risk / Issue"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Impact"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Mitigation"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[h.riskRows.map(_=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:_.risk,onChange:P=>ye("riskRows",_.id,{risk:P.target.value}),placeholder:"e.g. Inconsistent adoption in Vision",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:_.impact,onChange:P=>ye("riskRows",_.id,{impact:P.target.value}),placeholder:"e.g. Benefits may not be realised",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:_.mitigation,onChange:P=>ye("riskRows",_.id,{mitigation:P.target.value}),placeholder:"e.g. Targeted coaching sessions",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:_.status,onChange:P=>ye("riskRows",_.id,{status:P.target.value}),placeholder:"Open",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>me("riskRows",_.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},_.id)),h.riskRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No key risks added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>Se("riskRows",{id:at(),risk:"",impact:"",mitigation:"",status:"Open"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Risk / Issue"})]}):N==="upcoming-priorities"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:M}),e.jsx("ol",{className:"mt-3 list-decimal pl-5 space-y-1 text-sm text-slate-700",children:_e.length?_e.map((_,P)=>e.jsx("li",{children:_},`${_}-${P}`)):e.jsx("li",{children:"No immediate priorities detected from current data."})})]}):N==="what-went-well"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:M}),e.jsx("ul",{className:"mt-3 space-y-1.5 text-sm text-slate-700",children:w.slice(0,5).map(_=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(Zl,{}),_.component.label," is tracking at ",_.average," against target ",_.target,"."]},_.component.id))})]}):N==="stakeholder-insights"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:M}),e.jsxs("div",{className:"mt-3 grid gap-2 md:grid-cols-3 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 rounded border border-green-200 bg-green-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-green-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Positive:",e.jsx("input",{type:"number",min:0,max:100,value:h.stakeholderPositivePct,onChange:_=>L({stakeholderPositivePct:Number(_.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-amber-200 bg-amber-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Neutral:",e.jsx("input",{type:"number",min:0,max:100,value:h.stakeholderNeutralPct,onChange:_=>L({stakeholderNeutralPct:Number(_.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-red-200 bg-red-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-red-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Negative:",e.jsx("input",{type:"number",min:0,max:100,value:h.stakeholderNegativePct,onChange:_=>L({stakeholderNegativePct:Number(_.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]})]})]}):N==="interventions-delivered"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:M}),e.jsxs("ul",{className:"mt-3 space-y-2 text-sm text-slate-700",children:[h.interventionRows.map(_=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("input",{value:_.text,onChange:P=>ye("interventionRows",_.id,{text:P.target.value}),placeholder:"e.g. Sponsor briefing sessions",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>me("interventionRows",_.id),className:"shrink-0 rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},_.id)),h.interventionRows.length?null:e.jsx("li",{className:"text-slate-500",children:"No interventions added yet."})]}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>Se("interventionRows",{id:at(),text:""}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Intervention"})]}):N==="decisions-required"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:M}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Decision"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Required By"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[h.decisionRows.map(_=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:_.decision,onChange:P=>ye("decisionRows",_.id,{decision:P.target.value}),placeholder:"e.g. Approval for additional adoption support resource",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:_.owner,onChange:P=>ye("decisionRows",_.id,{owner:P.target.value}),placeholder:"e.g. Programme Board",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:_.requiredBy,onChange:P=>ye("decisionRows",_.id,{requiredBy:P.target.value}),placeholder:"TBC",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>me("decisionRows",_.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},_.id)),h.decisionRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:4,children:"No decisions added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>Se("decisionRows",{id:at(),decision:"",owner:"",requiredBy:""}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Decision"})]}):N==="change-lead-assessment"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:M}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Confidence"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[h.assessmentRows.map(_=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:_.area,onChange:P=>ye("assessmentRows",_.id,{area:P.target.value}),placeholder:"e.g. Stakeholder Engagement",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:_.confidence,onChange:P=>ye("assessmentRows",_.id,{confidence:P.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"High",children:"High"}),e.jsx("option",{value:"Medium",children:"Medium"}),e.jsx("option",{value:"Low",children:"Low"})]})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>me("assessmentRows",_.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},_.id)),h.assessmentRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:3,children:"No assessment areas added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>Se("assessmentRows",{id:at(),area:"",confidence:"Medium"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Assessment Area"})]}):e.jsx(e.Fragment,{children:e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:M})})},Pe=()=>{if(!R.current){window.alert("Preview content is not ready to print yet.");return}const N=window.open("","_blank");if(!N)return;N.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8" /><title>Highlight Report</title></head><body></body></html>'),document.querySelectorAll('link[rel="stylesheet"], style').forEach(P=>{N.document.head.appendChild(P.cloneNode(!0))});const M=N.document.createElement("style");M.textContent=`
      @page { margin: 8mm; size: A4 ${h.orientation}; }
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
    `,N.document.head.appendChild(M);const _=R.current.cloneNode(!0);_.className="printable-report",_.querySelectorAll('[data-print-exclude="true"]').forEach(P=>P.remove()),N.document.body.appendChild(_),N.document.close(),setTimeout(()=>{N.focus(),N.print(),N.close()},250)};return e.jsxs("section",{className:"space-y-6",children:[m?e.jsx("div",{className:"rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm font-semibold text-red-900",children:"Dark mode not compatible for Highlight Report due to print/save functionality."}):null,e.jsx("div",{className:"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",children:e.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Highlight Builder Tool"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:"Create a polished highlight pack"}),e.jsx(wt,{onClick:f.reopen})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:Le,className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"Save JSON Layout"}),e.jsxs("label",{className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 cursor-pointer",children:["Load JSON Layout",e.jsx("input",{type:"file",accept:"application/json",className:"hidden",onChange:Ue},u)]}),e.jsxs("div",{className:"flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-semibold",role:"group","aria-label":"PDF export orientation",children:[e.jsx("button",{type:"button",onClick:()=>L({orientation:"portrait"}),"aria-pressed":h.orientation==="portrait",className:`px-3 py-2 transition-colors ${h.orientation==="portrait"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Portrait"}),e.jsx("button",{type:"button",onClick:()=>L({orientation:"landscape"}),"aria-pressed":h.orientation==="landscape",className:`px-3 py-2 transition-colors border-l border-slate-300 ${h.orientation==="landscape"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Landscape"})]}),e.jsxs("button",{type:"button",onClick:Pe,className:"rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm",style:{backgroundColor:h.themeColor},children:["Print / Save PDF (",h.orientation==="landscape"?"Landscape":"Portrait",")"]})]})]})}),e.jsxs("div",{className:"grid gap-6 xl:grid-cols-[340px,1fr]",children:[e.jsx("aside",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Report title"}),e.jsx("input",{value:h.title,onChange:N=>L({title:N.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Programme"}),e.jsx("input",{value:h.programmeName,onChange:N=>L({programmeName:N.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Reporting period"}),e.jsx("input",{value:h.reportingPeriod,onChange:N=>L({reportingPeriod:N.target.value}),placeholder:"July 2026",className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Change Lead"}),e.jsx("input",{value:h.changeLeadName,onChange:N=>L({changeLeadName:N.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"SRO"}),e.jsx("input",{value:h.sroName,onChange:N=>L({sroName:N.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Overall Change Status"}),e.jsxs("select",{value:h.overallStatus,onChange:N=>L({overallStatus:N.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500",children:[e.jsx("option",{value:"Green",children:"Green"}),e.jsx("option",{value:"Amber",children:"Amber"}),e.jsx("option",{value:"Red",children:"Red"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Theme colour"}),e.jsx("input",{type:"color",value:h.themeColor,onChange:N=>L({themeColor:N.target.value}),className:"h-10 w-full rounded-md border border-slate-300"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Logo in top-left"}),e.jsxs("label",{className:"flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-3 py-4 text-sm text-slate-700 hover:bg-slate-100",children:[e.jsx("span",{children:E||"Upload logo"}),e.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:Ce})]}),h.logoDataUrl?e.jsx("div",{className:"mt-3 rounded-md border border-slate-200 bg-slate-50 p-2",children:e.jsx("img",{alt:"Preview logo",src:h.logoDataUrl,className:"max-h-16 w-auto"})}):null]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-1",children:"Programme/Project Readiness Slides"}),e.jsx("p",{className:"text-xs text-slate-500 mb-3",children:"These print first, one per page. Add a slide per component you want to report on."}),e.jsxs("div",{className:"space-y-2",children:[h.bragSlides.map((N,M)=>e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-500",children:["Page ",M+1]}),e.jsx("button",{type:"button",onClick:()=>Fe(N.id),className:"text-xs font-semibold text-red-600 hover:text-red-800",children:"Remove"})]}),e.jsx("select",{value:N.componentId,onChange:_=>U(N.id,_.target.value),className:"mt-1 w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm outline-none focus:border-blue-500",children:a.map(_=>e.jsx("option",{value:_.id,children:_.label},_.id))}),e.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:[N.rows.length," row",N.rows.length===1?"":"s"]})]},N.id)),h.bragSlides.length?null:e.jsx("p",{className:"text-sm text-slate-500",children:"No readiness slides yet."})]}),e.jsx("button",{type:"button",onClick:Ae,disabled:!a.length,className:"mt-3 w-full rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 disabled:opacity-50",children:"+ Add Readiness Slide"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-3",children:"Report sections"}),e.jsx("div",{className:"space-y-2",children:Xn.map(N=>{const M=j.has(N.id),_=N.id,P=k[N.id],Y=typeof P=="number"?ln(P,N.label):N.label;return e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("label",{className:"flex items-center gap-3 text-sm text-slate-700",children:[e.jsx("input",{type:"checkbox",checked:M,onChange:()=>ne(N.id)}),e.jsx("span",{children:Y})]}),M?e.jsxs("div",{className:"mt-3 space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-1",children:"Section narrative"}),e.jsx("textarea",{value:h.sectionNarratives[_]||"",onChange:z=>xe(_,z.target.value),placeholder:Ee(_),rows:4,className:"w-full rounded-md border border-slate-300 px-2 py-2 text-xs outline-none focus:border-blue-500"})]}),e.jsx("p",{className:"text-xs text-slate-500",children:"All adoption components are automatically included in this section."})]}):null]},N.id)})})]})]})}),e.jsxs("div",{ref:R,className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsx("div",{className:`report-intro-slide ${p?"report-slide":""} mb-6 overflow-hidden rounded-lg border border-[#003087] bg-white shadow-md ${p?"grid gap-8 p-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center":"flex items-center gap-3 p-3"}`,style:p?{borderTop:`14px solid ${h.themeColor||Vn.blue}`}:void 0,children:e.jsxs("div",{className:p?"space-y-6":"flex items-center gap-3",children:[h.logoDataUrl?e.jsx("img",{alt:"Logo preview",src:h.logoDataUrl,className:p?"max-h-20 w-auto":"max-h-12 w-auto"}):e.jsx("div",{className:`flex items-center justify-center rounded-md bg-[#005eb8] font-bold text-white ${p?"h-20 w-20 text-xl":"h-12 w-12 text-sm"}`,children:"NHS"}),e.jsxs("div",{children:[e.jsx("div",{"data-print-hide":"true",className:"text-xs font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Builder Preview · Intro Slide"}),e.jsx("div",{className:p?"mt-3 text-4xl font-bold leading-tight text-[#003087]":"text-lg font-bold text-slate-900",children:h.title}),e.jsxs("div",{className:"mt-2 text-sm text-slate-600",children:[h.programmeName||o||"Unnamed Programme"," ·"," ",h.reportingPeriod||"Reporting period not set"]}),e.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600",children:[e.jsx("span",{children:l||"Unconfigured Trust"}),e.jsx(Ua,{status:h.overallStatus})]}),p?e.jsx("p",{className:"mt-8 max-w-xl border-l-4 border-[#41a6c8] pl-4 text-lg leading-7 text-[#425563]",children:"Change adoption highlight report covering current progress, risks and priorities."}):null]})]})}),e.jsxs("div",{className:p?"grid gap-6":"grid gap-2","data-orientation":h.orientation,children:[h.bragSlides.map(N=>{const M=re.find(P=>P.component.id===N.componentId),_=M?Si(M.average,M.target):null;return e.jsxs("article",{"data-brag-slide":"true",className:`${B} ${p?"report-slide":""}`,style:D,children:[e.jsxs("div",{className:p?"flex flex-wrap items-center justify-between gap-3 px-5 py-3 text-white":"flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-2",style:p?{backgroundColor:h.themeColor||Vn.blue}:void 0,children:[e.jsxs("div",{children:[e.jsx("p",{className:p?"text-xs font-semibold uppercase tracking-wider text-white/80":"text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Programme/Project Readiness"}),e.jsx("h3",{className:p?"text-xl font-bold text-white":"text-base font-bold text-slate-900",children:(M==null?void 0:M.component.label)||"Select a component"})]}),M&&_?e.jsxs("div",{className:"text-right",children:[e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold ${wi[_]}`,children:_}),e.jsxs("p",{className:`mt-1 text-xs ${p?"text-white/80":"text-slate-500"}`,children:[M.average.toFixed(1)," of ",M.target," target"]})]}):null]}),e.jsx("div",{className:p?"mx-5 mb-5 mt-3 overflow-x-auto rounded-md border border-slate-200":"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What is preventing you from being green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What do you/others need to do to return to green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target date"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[N.rows.map(P=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(Fa,{value:P.preventingGreenHtml,onChange:Y=>ce(N.id,P.id,{preventingGreenHtml:Y}),placeholder:"What's blocking green?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(Fa,{value:P.returnToGreenHtml,onChange:Y=>ce(N.id,P.id,{returnToGreenHtml:Y}),placeholder:"What needs to happen?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:P.ownerId,onChange:Y=>ce(N.id,P.id,{ownerId:Y.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"",children:"Unassigned"}),b.map(Y=>e.jsxs("option",{value:Y.id,children:[Y.name||"Unnamed",Y.role?` - ${Y.role}`:""]},Y.id))]})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{type:"date",value:P.targetDate,onChange:Y=>ce(N.id,P.id,{targetDate:Y.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>fe(N.id,P.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},P.id)),N.rows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No rows yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>de(N.id),className:p?"mx-5 mb-5 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200":"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Row"})]},N.id)}),h.sections.map(N=>{var M,_;return e.jsxs(Gt.Fragment,{children:[e.jsxs("article",{"data-brag-slide":p?"true":void 0,"data-print-exclude":ot(N)?void 0:"true",className:`${B} ${p?"report-slide":""}`,style:D,children:[e.jsxs(V,{children:[e.jsx("span",{"data-print-hide":"true",children:ln(ie[N]||0,((M=Xn.find(P=>P.id===N))==null?void 0:M.label)||N)}),e.jsx("span",{className:"hidden","data-print-only":"true",children:ln(Z[N]||0,((_=Xn.find(P=>P.id===N))==null?void 0:_.label)||N)})]}),e.jsxs("div",{className:p&&N!=="change-dashboard"?"grid gap-5 px-5 pb-5 lg:grid-cols-[1fr,220px] lg:items-start":void 0,children:[e.jsx(le,{children:Re(N)}),N!=="change-dashboard"?e.jsx(we,{sectionId:N}):null]})]}),p&&N==="change-dashboard"?e.jsxs("article",{"data-brag-slide":"true","data-print-exclude":ot(N)?void 0:"true",className:`${B} report-slide`,style:D,children:[e.jsxs(V,{children:[e.jsx("span",{"data-print-hide":"true",children:ln((ie[N]||0)+1,"Change Dashboard Chart")}),e.jsx("span",{className:"hidden","data-print-only":"true",children:ln((Z[N]||0)+1,"Change Dashboard Chart")})]}),e.jsx("div",{className:"px-8 pb-8",children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-6 max-w-2xl text-base leading-6 text-[#425563]",children:"Current component averages compared with the target score. The red marker shows the target for each area."}),e.jsx(Ql,{rows:X})]})})]}):null]},N)})]})]})]}),e.jsx(St,{open:f.isOpen,onClose:f.close,title:"Highlight Builder Tool",body:e.jsx("p",{children:"Build a polished, presentation-ready highlight pack summarising progress across your programme - pick a layout, edit the content, and save or export it when you're happy."})})]})}function nc(t){const n={};return t.sections.forEach(s=>{s.items.forEach(a=>{n[a.id]="mine"})}),n}function Ha({active:t,onClick:n,children:s,darkMode:a}){return e.jsx("button",{type:"button",onClick:n,className:`rounded-md border px-2 py-1 text-left text-xs transition-colors ${vs} ${t?"border-[#005eb8] bg-[#005eb8]/10 font-semibold text-[#005eb8]":a?"border-slate-600 bg-slate-900 text-slate-300 hover:bg-slate-800":"border-slate-300 bg-white text-slate-600 hover:bg-slate-50"}`,children:s})}function sc({item:t,choice:n,onChoose:s,myLabel:a,theirLabel:i,darkMode:l}){return e.jsxs("div",{"data-testid":`import-conflict-row-${t.id}`,className:`grid grid-cols-1 gap-2 border-t py-3 first:border-t-0 md:grid-cols-[1fr_1fr_1fr] ${l?"border-slate-700":"border-slate-200"}`,children:[e.jsx("div",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:t.label}),e.jsxs(Ha,{active:n==="mine",onClick:()=>s(t.id,"mine"),darkMode:l,children:[e.jsx("span",{className:`block text-[0.65rem] font-bold uppercase tracking-wide ${l?"text-slate-400":"text-slate-500"}`,children:a}),t.mineSummary]}),e.jsxs(Ha,{active:n==="theirs",onClick:()=>s(t.id,"theirs"),darkMode:l,children:[e.jsx("span",{className:`block text-[0.65rem] font-bold uppercase tracking-wide ${l?"text-slate-400":"text-slate-500"}`,children:i}),t.theirsSummary]})]})}function ac({report:t,myLabel:n,theirLabel:s,onResolve:a,onCancel:i,darkMode:l=!1}){const[o,c]=g.useState(()=>nc(t)),d=t.sections.reduce((r,f)=>r+f.items.length,0),m=r=>{c(f=>{const b={...f};return t.sections.forEach(h=>{h.items.forEach(x=>{b[x.id]=r})}),b})};return e.jsx("div",{"data-testid":"import-conflict-modal",className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4",onClick:r=>{r.target===r.currentTarget&&i()},children:e.jsxs("div",{onClick:r=>r.stopPropagation(),className:`flex w-full max-w-4xl max-h-[90vh] flex-col rounded-lg border shadow-xl ${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:`shrink-0 border-b p-6 ${l?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("h2",{className:`text-xl font-bold ${l?"text-slate-100":"text-slate-800"}`,children:"Resolve import conflicts"}),e.jsxs("p",{className:`mt-1 text-sm ${l?"text-slate-300":"text-slate-600"}`,children:["Comparing ",e.jsx("span",{className:"font-semibold",children:n})," (currently loaded) against"," ",e.jsx("span",{className:"font-semibold",children:s})," (the imported file)."]}),e.jsxs("p",{className:`mt-1 text-xs ${l?"text-slate-400":"text-slate-500"}`,children:[d," item",d===1?"":"s"," need a decision",t.autoMergeSummary.length?` · also merging automatically: ${t.autoMergeSummary.join(", ")}`:""]}),e.jsxs("div",{className:"mt-3 flex gap-2",children:[e.jsx("button",{type:"button",onClick:()=>m("mine"),className:`${Ge} h-8 px-3 py-0 text-xs`,children:"Use all mine"}),e.jsx("button",{type:"button",onClick:()=>m("theirs"),className:`${Ge} h-8 px-3 py-0 text-xs`,children:"Use all theirs"})]})]}),e.jsx("div",{className:"flex-1 space-y-6 overflow-y-auto p-6",children:t.sections.map(r=>e.jsxs("div",{children:[e.jsx("h3",{className:`mb-1 text-sm font-bold uppercase tracking-wide ${l?"text-slate-300":"text-slate-500"}`,children:r.title}),e.jsx("div",{className:`rounded-md border px-3 ${l?"border-slate-700":"border-slate-200"}`,children:r.items.map(f=>e.jsx(sc,{item:f,choice:o[f.id]||"mine",onChoose:(b,h)=>c(x=>({...x,[b]:h})),myLabel:n,theirLabel:s,darkMode:l},f.id))})]},r.id))}),e.jsxs("div",{className:`flex shrink-0 justify-end gap-3 border-t p-4 ${l?"border-slate-700":"border-slate-200"}`,children:[e.jsx("button",{type:"button","data-testid":"import-conflict-cancel",onClick:i,className:Ge,children:"Cancel Import"}),e.jsx("button",{type:"button","data-testid":"import-conflict-apply",onClick:()=>a(o),className:Ht,children:"Apply and Import"})]})]})})}function Wa(){return e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function ic(t){return t in Cs}function oc({lensName:t,onClose:n,darkMode:s=!1}){if(!t||!ic(t))return null;const a=Cs[t];return e.jsx("div",{id:"lens-info-modal",className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&n()},children:e.jsxs("div",{className:`${s?"bg-slate-800 border-slate-700":"bg-white"} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border`,children:[e.jsxs("div",{className:`${s?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} sticky top-0 border-b p-6 flex items-center justify-between`,children:[e.jsx("h2",{className:`text-2xl font-bold ${s?"text-slate-100":"text-slate-800"}`,children:t}),e.jsx("button",{onClick:n,className:`${s?"text-slate-300 hover:text-slate-100":"text-slate-500 hover:text-slate-700"}`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsxs("div",{className:`p-6 space-y-4 ${s?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(Wa,{}),"Outcome"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.outcome})]}),e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(Wa,{}),"What Good Looks Like"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.whatGoodLooksLike})]})]})]})})}const rc=[{id:"why",question:"Why are we doing this?",framework:"Force Field Analysis - Driving Forces",description:"The forces pushing for change - the case that makes it worth doing.",componentIds:["case_for_change"]},{id:"future",question:"What will the future look like?",framework:"Vision",description:"A clear picture of the destination, understood and shared by everyone.",componentIds:["vision"]},{id:"barriers",question:"What might prevent us from achieving the vision?",framework:"Force Field Analysis - Restraining Forces",description:"The forces working against change - risks, resistance and blockers to plan for.",componentIds:["case_for_change","resistance"]},{id:"impacted",question:"Who's going to be impacted by the change?",framework:"Stakeholder Analysis & Change Impact Analysis",description:"Everyone affected by the change, and how deeply it affects them.",componentIds:["stakeholder","change_impact"]},{id:"leading",question:"Who's leading the change?",framework:"Sponsor Coalition & Change Network",description:"The visible leaders and the network of champions carrying the change day to day.",componentIds:["sponsorship","change_network"]},{id:"persuade",question:"How will we persuade people to change?",framework:"Case for Change",description:"The compelling narrative that wins hearts and minds.",componentIds:["case_for_change"]}],fs="nhs-digital-adoption-introduction-complete",lc=[{title:"Handling Resistance",body:"Helping project managers navigate potential roadblocks and maintain project momentum through identifying and addressing resistance using effective communication, stakeholder engagement, and mitigation strategies."},{title:"Engaging Stakeholders",body:"Identifying key individuals and groups affected by the project and working closely with them to understand concerns, gather feedback, and ensure their perspectives are considered."},{title:"Communicating and Raising Awareness",body:"Developing engagement and communication plans that support project managers in creating clear and consistent messaging about the project's purpose, goals, and benefits."},{title:"Managing Expectations",body:"Setting realistic expectations for stakeholders regarding project outcomes, timelines, and potential disruptions by addressing concerns, clarifying misconceptions, and managing expectations."},{title:"Ensuring Change Readiness",body:"Assessing the readiness of an organisation or team for change and developing strategies to bridge any gaps."},{title:"Mitigating Risks",body:"Through anticipating and addressing risks associated with change, such as resistance, lack of stakeholder support, or unexpected obstacles."},{title:"Adopting Change Sustainably",body:"Supporting project managers in developing strategies to embed the changes into the organisation's culture, processes, and systems."}];function cc(t){const n=t?"text-slate-300":"text-slate-700";return[{title:"What is the Adoption Engine?",body:e.jsxs("div",{className:`text-sm space-y-2 ${n}`,children:[e.jsx("p",{children:"Going live with a new digital product isn't the finish line - people still need to adopt it, change how they work, and keep using it."}),e.jsx("p",{children:"The Adoption Engine helps you track how people and teams are adopting the change before go-live, during rollout, and after launch so progress is visible and outcomes are measurable."}),e.jsx("p",{children:"It helps you answer four simple questions:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"Where are we going?"}),e.jsx("li",{children:"How will we know we've got there?"}),e.jsx("li",{children:"What needs to be in place?"}),e.jsx("li",{children:"What should we do next?"})]}),e.jsx("p",{children:"The goal is not just to implement change, but to ensure it is adopted, embedded and delivering benefits."})]})},{title:"What benefit does this tool give me?",body:e.jsxs("div",{className:`text-sm space-y-2 ${n}`,children:[e.jsx("p",{children:"Without it, adoption progress lives in scattered spreadsheets, memories and gut feel - hard to prove, hard to hand over, and easy to lose momentum on."}),e.jsx("p",{children:"With it, you get a single, evidenced picture of where your change effort actually stands:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1",children:[e.jsx("li",{children:"See at a glance what's on track, what's at risk, and what to do next."}),e.jsx("li",{children:`Turn vague "how's it going?" conversations into a clear, evidence-backed status you can show your sponsor or board.`}),e.jsx("li",{children:"Get a ready-made action plan for each area, so you're not starting from a blank page."}),e.jsx("li",{children:"Build a highlight report in minutes instead of an afternoon of copy-pasting."})]})]})},{title:"Context Specific Templates (CSTs)",body:e.jsxs("div",{className:`text-sm space-y-2 ${n}`,children:[e.jsx("p",{children:"A CST (Context Specific Template) contains the information that makes the Adoption Engine specific to your project, programme or initiative."}),e.jsx("p",{children:"It captures key information such as your scope, milestones, outcomes and benefits, and tailors the guidance, actions and resources provided."}),e.jsxs("p",{children:["You can update your project setup at any time from"," ",e.jsx("strong",{className:t?"text-slate-100":"text-slate-900",children:"Project Profile"}),"."]})]})},{title:"What is Change Management?",body:e.jsxs("div",{className:`text-sm space-y-2 ${n}`,children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Change management is the people side of change. "})," It helps individuals and organisations understand, adopt and sustain new ways of working so that change delivers benefits."]}),e.jsxs("p",{children:[e.jsx("strong",{children:" In simple terms: "}),"it helps people move from the way things are today to the way they need to be tomorrow, so that change delivers its intended value."]}),e.jsx("p",{children:"It sits alongside project management: project management delivers the change itself (the system, the process); change management makes sure the people affected by it are ready, willing and able to use it."}),e.jsx("p",{children:"The Change Onion illustrates how successful transformation is built through a series of connected layers. It starts with Implementation, providing the technology or physical capability. Business Change establishes new processes, while Change Management helps people understand, adopt and sustain new ways of working. When all of these layers are brought together, organisations can achieve Transformation and realise the full benefits of change."}),e.jsx("img",{src:"/assets/The%20Change%20Onion.png",alt:"The Change Onion diagram",className:"w-full max-w-xl mx-auto rounded-md border border-slate-200"})]})},{title:"What is a Change Manager?",body:e.jsxs("div",{className:`text-sm space-y-4 ${n}`,children:[e.jsx("p",{children:"Change management (and change managers) provide essential assistance to project managers through:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:lc.map(s=>e.jsxs("div",{className:`rounded-md border p-4 ${t?"border-slate-700 bg-slate-900":"border-slate-100 bg-slate-50"}`,children:[e.jsx("p",{className:"text-sm font-semibold text-[#005eb8] mb-1",children:s.title}),e.jsx("p",{className:`text-xs leading-relaxed ${t?"text-slate-300":"text-slate-600"}`,children:s.body})]},s.title))})]})},{title:"The 6 Key Questions",body:e.jsxs("div",{className:`text-sm space-y-4 ${n}`,children:[e.jsx("p",{children:"Six questions worth returning to throughout the life of the programme, each backed by a change model."}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-2",children:rc.map((s,a)=>e.jsxs("div",{className:`rounded-md border p-4 ${t?"border-slate-700 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"shrink-0 w-7 h-7 rounded-full bg-blue-100 text-[#005eb8] text-xs font-bold flex items-center justify-center",children:["Q",a+1]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${t?"text-slate-100":"text-slate-800"}`,children:s.question}),e.jsx("span",{className:`mt-1 inline-block rounded border px-2 py-0.5 text-xs font-medium ${t?"border-indigo-500/40 bg-indigo-500/15 text-indigo-200":"border-indigo-200 bg-indigo-50 text-indigo-700"}`,children:s.framework})]})]}),e.jsx("p",{className:`mt-3 text-xs leading-relaxed ${t?"text-slate-300":"text-slate-600"}`,children:s.description})]},s.id))})]})}]}function dc({darkMode:t=!1,onGetStarted:n}){const s=cc(t),a=!!it(fs),[i,l]=g.useState(0),[o,c]=g.useState(a?s.length-1:0),d=i===s.length-1,m=o>=s.length-1,r=b=>{b<=o&&l(b)},f=()=>{const b=Math.min(s.length-1,i+1);l(b),c(h=>{const x=Math.max(h,b);return x>=s.length-1&&ze(fs,!0),x})};return e.jsxs("div",{className:"w-full space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${t?"text-slate-100":"text-slate-800"}`,children:"Introduction"}),e.jsx("p",{className:`mt-2 text-sm ${t?"text-slate-300":"text-slate-600"}`,children:"A few quick steps before you get started - each one unlocks the next."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",role:"tablist","aria-label":"Introduction steps",children:s.map((b,h)=>{const x=h<=o,E=h===i;return e.jsxs("button",{type:"button",role:"tab","aria-selected":E,"aria-disabled":!x,disabled:!x,onClick:()=>r(h),className:`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${E?"border-[#005eb8] bg-[#005eb8] text-white":x?t?"border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100":t?"border-slate-800 bg-slate-900 text-slate-600 cursor-not-allowed":"border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed"}`,children:[e.jsx("span",{className:`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${E?"bg-white text-[#005eb8]":x?"bg-[#005eb8]/10 text-[#005eb8]":""}`,children:h+1}),b.title]},b.title)})}),e.jsx("section",{className:`w-full overflow-hidden rounded-xl border shadow-sm ${t?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:e.jsxs("div",{className:"p-6 sm:p-10",children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${t?"text-blue-300":"text-blue-700"}`,children:["Step ",i+1," of ",s.length]}),e.jsx("h3",{className:`mt-1 text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:s[i].title}),e.jsx("div",{className:"mt-5 max-w-full",children:s[i].body}),e.jsxs("div",{className:"mt-8 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:()=>l(b=>Math.max(0,b-1)),disabled:i===0,className:`rounded-md border px-4 py-2 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${t?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Back"}),d?e.jsx("button",{type:"button",onClick:n,disabled:!m,className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] disabled:cursor-not-allowed disabled:opacity-50",children:"Get Started"}):e.jsx("button",{type:"button",onClick:f,className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]",children:"Next"})]})]})})]})}const Va={1:"Pre go-live planning and early mobilisation.",2:"Go-live readiness and immediate launch support.",3:"Early adoption reinforcement and consistency.",4:"Embedding new ways of working across teams.",5:"Sustained adoption and benefits realisation at scale."},mc={1:"Low confidence",2:"Some confidence",3:"Moderate confidence",4:"High confidence",5:"Very high confidence"},uc={E:"Not started embedding",D:"Early adoption in practice",C:"Partly embedded in practice",B:"Mostly embedded in practice",A:"Well embedded in practice"};function gc(t){return t>=4?"high":t===3?"average":"below"}function pc(t){return t==="A"||t==="B"?"high":t==="C"?"average":"below"}function hc(t,n){const s=pc(t),a=gc(n),i=s==="high"&&a==="high",l=s==="below"&&a==="below",o=s==="high"&&a!=="below"||a==="high"&&s!=="below";return i?"Blue":l?"Red":o?"Green":"Amber"}const Qn=4;function fc({orgProfile:t,onProfileUpdate:n,userSettings:s,onUserSettingsUpdate:a,currentUserId:i,onCurrentUserChange:l,objectives:o=[],darkMode:c=!1}){const[d,m]=g.useState(t),[r,f]=g.useState(s),[b,h]=g.useState(0),[x,E]=g.useState(null),[S,u]=g.useState(!1),C=g.useRef(null),R=ht("profile");g.useEffect(()=>{m(t)},[t]),g.useEffect(()=>{f(s)},[s]);const j=g.useCallback(D=>{const V={...r,...D};f(V),a(V)},[r,a]),k=async D=>{var re;const V=(re=D.target.files)==null?void 0:re[0];if(!V)return;const le=await new Promise((w,L)=>{const ne=new FileReader;ne.onload=()=>w(String(ne.result||"")),ne.onerror=()=>L(new Error("Unable to read selected profile image.")),ne.readAsDataURL(V)});j({profileImageDataUrl:le}),h(w=>w+1)},p=()=>{j({profileImageDataUrl:void 0})},B=g.useCallback((D,V,le)=>{const re=d.cst.phaseCapability[D]||{competence:"C",confidence:3},w={...d,cst:{...d.cst,phaseCapability:{...d.cst.phaseCapability,[D]:{competence:re.competence,confidence:re.confidence,assessedAt:new Date().toISOString(),reason:"manual",[V]:le}}}};m(w),n(w)},[d,n]);return e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${c?"text-slate-100":"text-slate-800"}`,children:"Profile"}),e.jsx(wt,{onClick:R.reopen,darkMode:c})]}),e.jsx("p",{className:`text-sm ${c?"text-slate-300":"text-slate-600"}`,children:"Your identity, progress towards your objectives, and confidence/capability self-assessment."}),e.jsx(St,{open:R.isOpen,onClose:R.close,title:"Profile",darkMode:c,body:e.jsx("p",{children:"Set your name, preferences and picture, see how many objectives are complete, and record your team's confidence and delivery-readiness capability at each phase."})}),o.length>0&&e.jsxs("div",{className:`${c?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-3`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"Objectives"}),e.jsxs("p",{className:`mt-1 text-sm ${c?"text-slate-300":"text-slate-600"}`,children:[o.filter(D=>D.completed).length,"/",o.length," complete - based on phase readiness, ownership, cadence and team participation."]})]}),e.jsx("div",{className:"space-y-2",children:(S?o:o.slice(0,Qn)).map(D=>e.jsxs("div",{className:`rounded-lg border p-3 ${D.completed?"border-green-200 bg-green-50":c?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:D.label}),e.jsx("span",{className:"text-xs font-bold shrink-0",children:D.completed?"Done":"Not yet"})]}),e.jsx("p",{className:`mt-1 text-xs ${c?"text-slate-300":"text-slate-600"}`,children:D.description})]},D.id))}),o.length>Qn&&e.jsx("button",{type:"button",onClick:()=>u(D=>!D),className:`text-sm font-semibold underline ${c?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:S?"Show fewer":`Show ${o.length-Qn} more`})]}),e.jsxs("div",{className:`${c?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-5`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"Your Profile"}),e.jsx("p",{className:`mt-1 text-sm ${c?"text-slate-300":"text-slate-600"}`,children:"These details personalise your experience and reports."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-current-member",className:`block text-sm font-medium mb-1 ${c?"text-slate-200":"text-slate-700"}`,children:"You are signed in as"}),(t.teamMembers||[]).length>0?e.jsxs("select",{id:"user-current-member",value:i||"",onChange:D=>l(D.target.value),className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Not selected"}),(t.teamMembers||[]).map(D=>e.jsxs("option",{value:D.id,children:[D.name||"Unnamed",D.role?` - ${D.role}`:""]},D.id))]}):e.jsx("p",{className:`text-sm ${c?"text-slate-400":"text-slate-500"}`,children:"No team members have been added yet. Add yourself under CST Details → Team Members to link your profile."})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-sm font-medium mb-2 ${c?"text-slate-200":"text-slate-700"}`,children:"Profile Picture"}),e.jsxs("div",{className:"flex items-start gap-4",children:[r.profileImageDataUrl?e.jsx("img",{src:r.profileImageDataUrl,alt:"Profile",className:"h-20 w-20 rounded-md border border-slate-300 object-cover"}):e.jsx("div",{className:"h-20 w-20 rounded-md border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center",children:e.jsx("span",{className:"text-xs text-slate-500",children:"No image"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{type:"button",onClick:()=>{var D;return(D=C.current)==null?void 0:D.click()},className:`rounded-md px-3 py-2 text-sm font-medium transition-colors ${c?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:r.profileImageDataUrl?"Change Picture":"Upload Picture"}),r.profileImageDataUrl?e.jsx("button",{type:"button",onClick:p,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${c?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"}`,children:"Remove"}):null,e.jsx("input",{ref:C,type:"file",accept:"image/*",className:"hidden",onChange:k},b)]})]})]})]}),e.jsxs("div",{className:`${c?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"Confidence and Capability by Phase"}),e.jsx("p",{className:`mt-1 text-sm ${c?"text-slate-300":"text-slate-600"}`,children:"Capture your starting position, then refresh when readiness phase changes or after major milestones."})]}),e.jsxs("div",{className:"rounded-md border border-blue-200 bg-blue-50 p-3 text-xs text-blue-900",children:[e.jsx("p",{className:"font-semibold",children:"How this self-assessment works"}),e.jsx("p",{className:"mt-1",children:"Confidence is how sure your team feels. Delivery readiness is how embedded the new way of working is in practice."}),e.jsx("p",{className:"mt-1",children:"Cards use BRAG backgrounds: Blue = both high, Green = one high and the other at least average, Amber = neither high, Red = both below average."})]}),e.jsx("div",{className:"space-y-3",children:fi.map(D=>{const V=d.cst.phaseCapability[D]||{competence:"C",confidence:3},le=hc(V.competence,V.confidence),re=le==="Blue"?"border-sky-300 bg-sky-50":le==="Green"?"border-emerald-300 bg-emerald-50":le==="Red"?"border-red-300 bg-red-50":"border-amber-300 bg-amber-50",w=le==="Blue"?"text-sky-800 bg-sky-100":le==="Green"?"text-emerald-800 bg-emerald-100":le==="Red"?"text-red-800 bg-red-100":"text-amber-800 bg-amber-100";return e.jsxs("div",{className:`${c?"border-slate-700 bg-slate-800":re} rounded-md border p-3`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{className:"relative flex items-center gap-2",children:[e.jsxs("span",{className:`font-semibold ${c?"text-slate-100":"text-slate-700"}`,children:["Phase ",D]}),e.jsx("button",{type:"button",onMouseEnter:()=>E(D),onMouseLeave:()=>E(L=>L===D?null:L),onFocus:()=>E(D),onBlur:()=>E(L=>L===D?null:L),onClick:()=>E(L=>L===D?null:D),className:"h-5 w-5 rounded-full border border-slate-300 text-xs font-semibold text-slate-600","aria-expanded":x===D,"aria-controls":`phase-help-${D}`,"aria-label":`Phase ${D} guidance`,children:"i"}),x===D?e.jsx("div",{id:`phase-help-${D}`,role:"tooltip",className:"absolute left-0 top-7 z-10 w-72 rounded-md border border-slate-200 bg-slate-900 px-3 py-2 text-xs text-white shadow-xl",children:Va[D]}):null]}),e.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${c?"bg-slate-700 text-slate-100":w}`,children:le})]}),e.jsx("p",{className:`mt-1 text-xs ${c?"text-slate-300":"text-slate-600"}`,children:Va[D]}),e.jsxs("div",{className:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm",children:[e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${c?"text-slate-300":"text-slate-600"}`,children:"Delivery readiness"}),e.jsx("select",{value:V.competence,onChange:L=>B(D,"competence",L.target.value),className:`w-full rounded-md border px-2 py-2 pr-10 ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Eo.map(L=>e.jsxs("option",{value:L,children:[uc[L]," (",L,")"]},`${D}-competence-${L}`))})]}),e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${c?"text-slate-300":"text-slate-600"}`,children:"Confidence"}),e.jsx("select",{value:V.confidence,onChange:L=>B(D,"confidence",Number(L.target.value)),className:`w-full rounded-md border px-2 py-2 pr-10 ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Io.map(L=>e.jsxs("option",{value:L,children:[mc[L]," (",L,")"]},`${D}-confidence-${L}`))})]})]})]},`phase-capability-${D}`)})})]})]})}const bc=[{name:"NHS Blue",color:"#005eb8"},{name:"Navy",color:"#003366"},{name:"Teal",color:"#009b8a"},{name:"Purple",color:"#6c28d9"},{name:"Green",color:"#059669"},{name:"Red",color:"#dc2626"}];function xc({userSettings:t,onUserSettingsUpdate:n,onLoadExampleData:s,onResetData:a,darkMode:i=!1}){const[l,o]=g.useState(t),c=ht("settings");g.useEffect(()=>{o(t)},[t]);const d=g.useCallback(r=>{const f={...l,...r};o(f),n(f)},[l,n]),m=r=>{d({themeColor:r})};return e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${i?"text-slate-100":"text-slate-800"}`,children:"Settings"}),e.jsx(wt,{onClick:c.reopen,darkMode:i})]}),e.jsx("p",{className:`text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Use this page to manage app appearance, guidance preferences, and data/support options."}),e.jsx(St,{open:c.isOpen,onClose:c.close,title:"Settings",darkMode:i,body:e.jsx("p",{children:"Manage app-wide appearance (theme, dark mode, guided-workflow and guidance-link preferences) and data/support tools like example data, reset, and bug reporting. For your personal profile and engagement progress, see the Profile page."})}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Appearance"}),e.jsx("p",{className:`mt-1 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Choose the theme colour you want to use throughout the app."})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-1",children:[e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Dark mode"}),e.jsx("input",{type:"checkbox",checked:!!l.darkMode,onChange:r=>d({darkMode:r.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show guided workflow tips on each component"}),e.jsx("input",{type:"checkbox",checked:!l.hideGuidedWorkflow,onChange:r=>d({hideGuidedWorkflow:!r.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show additional guidance links (alongside core links)"}),e.jsx("input",{type:"checkbox",checked:l.showAdditionalGuidanceLinks!==!1,onChange:r=>d({showAdditionalGuidanceLinks:r.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show external links section (Project Profile, even after marked initiated)"}),e.jsx("input",{type:"checkbox",checked:l.showExternalLinksSection===!0,onChange:r=>d({showExternalLinksSection:r.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Highlight Must/Should actions on component pages"}),e.jsx("input",{type:"checkbox",checked:l.showActionPriorityColours===!0,onChange:r=>d({showActionPriorityColours:r.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`text-sm ${i?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-medium",children:"Status colour profile"}),e.jsxs("select",{value:l.colorAccessibilityMode||"standard",onChange:r=>d({colorAccessibilityMode:r.target.value}),className:`w-full rounded-md border p-2 pr-10 ${i?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"standard",children:"Standard"}),e.jsx("option",{value:"color-blind-friendly",children:"Color-blind friendly"})]})]})]}),e.jsx("p",{className:`text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Color-blind friendly mode keeps BRAG labels in text and shifts status colors to higher-contrast alternatives."}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-theme-colour",className:`block text-sm font-medium mb-1 ${i?"text-slate-200":"text-slate-700"}`,children:"Theme Colour"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:bc.map(r=>e.jsxs("button",{type:"button",onClick:()=>m(r.color),className:"flex items-center gap-2 rounded-md border-2 px-3 py-2 text-sm",style:{borderColor:l.themeColor===r.color?r.color:"#e2e8f0",backgroundColor:l.themeColor===r.color?`${r.color}22`:"transparent"},children:[e.jsx("span",{className:"h-4 w-4 rounded-sm border border-slate-300",style:{backgroundColor:r.color}}),e.jsx("span",{children:r.name})]},r.color))}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{id:"user-theme-colour",type:"color",className:"h-10 w-14 rounded border border-slate-300 p-1 cursor-pointer",value:l.themeColor,onChange:r=>d({themeColor:r.target.value})}),e.jsx("span",{className:`text-sm font-mono ${i?"text-slate-200":"text-slate-600"}`,children:l.themeColor})]})]})]})]}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Data and Support"}),e.jsx("p",{className:`mt-1 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Load sample data, reset local data, read FAQs, or report an issue."})]}),e.jsxs("div",{className:`${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("h4",{className:`text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Data Tools"}),e.jsxs("div",{className:"mt-3 flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>s("red"),className:"inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-800 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors",children:"Early Stage Example"}),e.jsx("button",{onClick:()=>s("amber"),className:"inline-flex items-center justify-center rounded-md bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800 border border-amber-200 shadow-[0_3px_0_#fde68a] hover:bg-amber-100 transition-colors",children:"Progressing Example"}),e.jsx("button",{onClick:()=>s("green"),className:"inline-flex items-center justify-center rounded-md bg-green-50 px-4 py-2 text-sm font-semibold text-green-800 border border-green-200 shadow-[0_3px_0_#bbf7d0] hover:bg-green-100 transition-colors",children:"Exemplar Example"})]}),e.jsx("div",{className:"mt-3 flex flex-wrap gap-3",children:e.jsx("button",{onClick:a,className:`inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors ${vs}`,children:"Reset Data"})}),e.jsx("p",{className:`mt-2 text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Each Example Data button loads a full sample assessment at a different maturity stage, so you can explore the dashboards and workflows quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"How is my data stored?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Your settings and assessment state are stored locally in your browser using local storage."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"What does Example Data do?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Each button populates the tool with a full sample assessment at that maturity stage (Red: early stage, Amber: progressing, Green: near exemplar) so you can explore dashboards and workflows quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"Can I change the theme colour later?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Yes. Update the theme colour at any time in User Settings and it is applied immediately."})]}),e.jsxs("div",{className:`rounded-md border p-4 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("h4",{className:`mb-2 text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Submit a Bug"}),e.jsx("p",{className:`mb-3 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Found an issue? Send details directly via email."}),e.jsx("a",{href:"mailto:andrew.fraser22@kpmg.co.uk?subject=NHS%20Digital%20Adoption%20Tool%20Bug",className:`inline-flex rounded-md px-4 py-2 text-sm font-medium transition-colors ${i?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:"Report Bug"})]})]})]})}const qa=[{phase:1,statement:"We've defined our vision for this change and have a case for why it's needed."},{phase:2,statement:"We've analysed the impact of the change and planned our engagement and communications approach."},{phase:3,statement:"We have a full change management plan in place, ready to execute."},{phase:4,statement:"We're actively delivering the change - communicating, training, and rolling out new ways of working."},{phase:5,statement:"The change has gone live and we're now focused on reinforcing it and making it stick."}];function yc({component:t,getEntry:n,phase:s,darkMode:a}){const i=g.useRef(null);return g.useEffect(()=>{if(!i.current)return;const l=Qt(t.id,s,t.target),o=a?"#e2e8f0":"#0b1220",c=a?"rgba(226,232,240,0.10)":"rgba(11,18,32,0.06)";xl(i.current,{labels:t.lenses,datasets:[{label:"Current",data:t.lenses.map(d=>Number(n(t.id,d).score||0)),backgroundColor:"#005EB8"},{label:"Target",data:t.lenses.map(()=>l),backgroundColor:"transparent",borderColor:"#94a3b8",borderWidth:2,borderDash:[5,5]}]},{indexAxis:"y",scales:{x:{min:0,max:5,grid:{color:c},ticks:{color:o,stepSize:1,callback:d=>Et(Number(d)).label}},y:{grid:{display:!1},ticks:{color:o,font:{size:11}}}}})},[t,s,a]),e.jsxs("div",{className:`rounded-md border p-3 ${a?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("p",{className:`text-xs font-semibold ${a?"text-slate-200":"text-slate-700"}`,children:t.label}),e.jsx("div",{style:{height:Math.max(400,t.lenses.length*60)},className:"mt-2",children:e.jsx("canvas",{ref:i,className:"block h-full w-full"})})]})}function vc({components:t,getEntry:n,effectivePhaseFocus:s,phaseFocusMode:a,onComponentClick:i,onSetManualPhase:l,onResetToAuto:o,darkMode:c=!1}){const[d,m]=g.useState({}),[r,f]=g.useState("by-component"),[b,h]=g.useState(hn[0]),x=g.useRef(null),E=g.useRef(null),S={display:!0,stepSize:1,backdropColor:"transparent",callback:p=>Number(p)<0?"":Et(Number(p)).label};g.useEffect(()=>{if(r!=="by-component"||!x.current)return;const p=ds(t,n,s);Zt(x.current,p,{maintainAspectRatio:!1,scales:{r:{min:-1,max:5,ticks:S,pointLabels:{padding:28}}}},B=>{const D=t[B];D&&i(D.id)})},[t,n,s,i,r]),g.useEffect(()=>{if(r!=="by-lens"||!E.current)return;const p=t.filter(D=>D.lenses.includes(b)),B=ds(p,n,s,b);Zt(E.current,B,{maintainAspectRatio:!1,scales:{r:{min:-1,max:5,ticks:S,pointLabels:{padding:28}}}},D=>{const V=p[D];V&&i(V.id)})},[t,n,s,i,r,b]);const u=g.useMemo(()=>Tn(s),[s]),C=g.useMemo(()=>{const p=qa.filter(B=>d[B.phase]).map(B=>B.phase);return p.length?Math.max(...p):1},[d]),R=g.useMemo(()=>t.find(p=>{const B=p.lenses.map(V=>Number(n(p.id,V).score||0));return(B.length?Math.min(...B):0)<5})||null,[t,n]),j=Object.values(d).some(Boolean),k=c?"text-slate-300":"text-slate-600";return g.useEffect(()=>{j&&l(C)},[j,C]),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${c?"text-slate-100":"text-slate-800"}`,children:"Where am I now?"}),e.jsx("p",{className:`mt-2 text-sm ${k}`,children:"Tick every statement that's true for your programme today, and see your readiness by component - both feed into which of the 5 change phases you're really in."})]}),e.jsx("div",{className:`rounded-lg border shadow-sm ${c?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:`text-lg font-semibold ${c?"text-slate-100":"text-slate-900"}`,children:"Which of these is true for you?"}),e.jsx("div",{className:"mt-4 space-y-3",children:qa.map(p=>e.jsxs("label",{className:`flex items-start gap-3 rounded-md border p-3 cursor-pointer ${c?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("input",{type:"checkbox",checked:!!d[p.phase],onChange:B=>m(D=>({...D,[p.phase]:B.target.checked})),className:"mt-1 h-4 w-4"}),e.jsxs("span",{children:[e.jsxs("span",{className:`block text-xs font-semibold uppercase tracking-wider ${c?"text-blue-300":"text-blue-700"}`,children:["Phase ",p.phase,": ",tt[p.phase]]}),e.jsx("span",{className:`block text-sm ${c?"text-slate-200":"text-slate-700"}`,children:p.statement})]})]},p.phase))}),j?e.jsx("div",{className:`mt-5 rounded-md border p-4 ${c?"border-blue-500/30 bg-blue-500/10":"border-blue-200 bg-blue-50"}`,children:e.jsxs("p",{className:`text-sm ${c?"text-blue-100":"text-blue-900"}`,children:["Based on your answers, we've set your phase as"," ",e.jsxs("strong",{children:["Phase ",C,": ",tt[C]]}),". Please look below for where we expect each component at this phase level."]})}):null,e.jsxs("p",{className:`mt-3 text-xs ${c?"text-slate-400":"text-slate-500"}`,children:["Currently tracking"," ",e.jsxs("strong",{children:["Phase ",s,": ",tt[s]]})," ","(",a==="manual"?"set manually":"auto-detected from delivery progress",").",a==="manual"?e.jsx("button",{type:"button",onClick:o,className:"ml-2 font-semibold text-[#005eb8] hover:underline",children:"Reset to auto"}):null]})]})}),e.jsx("div",{className:`rounded-lg border shadow-sm ${c?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:`text-lg font-semibold ${c?"text-slate-100":"text-slate-900"}`,children:"Readiness by component"}),e.jsx("div",{className:`mt-3 flex gap-1 rounded-md border p-1 text-sm font-semibold ${c?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,role:"tablist","aria-label":"Readiness by component view",children:[{id:"by-component",label:"By Component"},{id:"by-lens",label:"By Lens"},{id:"by-phases",label:"By Phases"}].map(p=>e.jsx("button",{type:"button",role:"tab","aria-selected":r===p.id,onClick:()=>f(p.id),className:`flex-1 rounded px-3 py-1.5 transition-colors ${r===p.id?"bg-[#005eb8] text-white":c?"text-slate-300 hover:bg-slate-800":"text-slate-600 hover:bg-white"}`,children:p.label},p.id))}),r==="by-component"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:`mt-3 text-xs ${k}`,children:"Each component is scored by its weakest lens - click a label to jump to that component's assessment."}),e.jsx("div",{className:`mx-auto mt-4 flex items-center justify-center rounded border p-2 ${c?"border-slate-700 bg-slate-950":"border-slate-100 bg-slate-50"}`,style:{height:720},children:e.jsx("canvas",{ref:x,className:"block h-full w-full"})}),e.jsx("p",{className:`mt-4 text-center text-sm italic ${k}`,children:R?`We suggest picking up next at ${R.label}, then working outward from there.`:"Every component has reached full readiness on its weakest lens - nice work."}),e.jsx("div",{className:"mt-4 flex justify-center",children:R?e.jsxs("button",{type:"button",onClick:()=>i(R.id),className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]",children:["Let's check out our ",R.label," component"]}):null})]}):null,r==="by-lens"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:`mt-3 text-xs ${k}`,children:"Pick a lens to see every component's readiness through that one lens, against the expected level."}),e.jsx("div",{className:"mt-3 flex flex-wrap gap-x-4 gap-y-2",role:"radiogroup","aria-label":"Choose a lens",children:hn.map(p=>e.jsxs("label",{className:`flex items-center gap-1.5 text-xs font-medium ${c?"text-slate-200":"text-slate-700"}`,children:[e.jsx("input",{type:"radio",name:"where-am-i-now-lens",checked:b===p,onChange:()=>h(p),className:"h-3.5 w-3.5"}),p]},p))}),e.jsx("div",{className:`mx-auto mt-4 flex items-center justify-center rounded border p-2 ${c?"border-slate-700 bg-slate-950":"border-slate-100 bg-slate-50"}`,style:{height:720},children:e.jsx("canvas",{ref:E,className:"block h-full w-full"})})]}):null,r==="by-phases"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:`mt-3 text-xs ${k}`,children:["Every component in Phase ",s,": ",tt[s],", with a bar per lens and a dashed target bar for where it's expected to be."]}),e.jsx("div",{className:"mt-4 grid grid-cols-1 gap-3",children:u.map(p=>e.jsx(yc,{component:p,getEntry:n,phase:s,darkMode:c},p.id))})]}):null]})})]})}function Sc(t){return{id:`audit:${Date.now()}-${Math.random().toString(36).slice(2,8)}`,timestamp:new Date().toISOString(),actor:t.actor,eventType:t.eventType,entityType:t.entityType,entityId:t.entityId,summary:t.summary,trustName:t.trustName,projectName:t.projectName,componentId:t.componentId,lens:t.lens,reason:t.reason,before:t.before,after:t.after,source:t.source||"local",importedAt:t.importedAt}}const wc=1e4;function Gn(t,n=wc){return t.length<=n?t:t.slice(t.length-n)}const Ya="nhs-digital-adoption-store",Nc=new Set(["pathway-1","pathway-2","pathway-3"]);function Ji(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}function Ke(t,n){if(!Ji(t))throw new Error(`Invalid adoption assessment payload at ${n}: expected object.`)}function te(t,n){if(t!==void 0&&typeof t!="string")throw new Error(`Invalid adoption assessment payload at ${n}: expected string.`)}function Xi(t,n){if(t!==void 0&&typeof t!="number")throw new Error(`Invalid adoption assessment payload at ${n}: expected number.`)}function _s(t,n){if(t!==void 0&&!Array.isArray(t))throw new Error(`Invalid adoption assessment payload at ${n}: expected array.`)}function Qi(t,n){Ke(t,n),te(t.id,`${n}.id`),te(t.text,`${n}.text`),te(t.owner,`${n}.owner`),te(t.timescale,`${n}.timescale`),te(t.status,`${n}.status`),te(t.notes,`${n}.notes`),te(t.evidence,`${n}.evidence`)}function jc(t,n){Ke(t,n),Xi(t.score,`${n}.score`),te(t.rationale,`${n}.rationale`),te(t.evidence,`${n}.evidence`),_s(t.actions,`${n}.actions`),(t.actions||[]).forEach((s,a)=>{Qi(s,`${n}.actions[${a}]`)})}function Zi(t,n){Ke(t,n),Object.keys(t).forEach(s=>{const a=t[s];Ke(a,`${n}.${s}`),Object.keys(a).forEach(i=>{jc(a[i],`${n}.${s}.${i}`)})})}function kc(t,n){Ke(t,n),Object.keys(t).forEach(s=>{const a=t[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${n}.${s}: expected array.`);a.forEach((i,l)=>{Ke(i,`${n}.${s}[${l}]`),te(i.id,`${n}.${s}[${l}].id`),te(i.text,`${n}.${s}[${l}].text`),te(i.owner,`${n}.${s}[${l}].owner`),te(i.timescale,`${n}.${s}[${l}].timescale`),te(i.notes,`${n}.${s}[${l}].notes`),te(i.evidence,`${n}.${s}[${l}].evidence`),_s(i.linkedActions,`${n}.${s}[${l}].linkedActions`),(i.linkedActions||[]).forEach((o,c)=>{Ke(o,`${n}.${s}[${l}].linkedActions[${c}]`),te(o.lens,`${n}.${s}[${l}].linkedActions[${c}].lens`),te(o.actionId,`${n}.${s}[${l}].linkedActions[${c}].actionId`)})})})}function Cc(t,n){Ke(t,n),Object.keys(t).forEach(s=>{const a=t[s];Ke(a,`${n}.${s}`),["pathway-1","pathway-2","pathway-3"].forEach(i=>{const l=a[i];_s(l,`${n}.${s}.${i}`),(l||[]).forEach((o,c)=>{if(typeof o!="string")throw new Error(`Invalid adoption assessment payload at ${n}.${s}.${i}[${c}]: expected string.`)})})})}function Ec(t,n){Ke(t,n),Object.keys(t).forEach(s=>{const a=t[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${n}.${s}: expected array.`);a.forEach((i,l)=>{if(typeof i!="string")throw new Error(`Invalid adoption assessment payload at ${n}.${s}[${l}]: expected string.`)})})}function Ic(t,n){if(!Array.isArray(t))throw new Error(`Invalid adoption assessment payload at ${n}: expected array.`);t.forEach((s,a)=>{Ke(s,`${n}[${a}]`),te(s.id,`${n}[${a}].id`),te(s.removedAt,`${n}[${a}].removedAt`),te(s.reason,`${n}[${a}].reason`),te(s.componentId,`${n}[${a}].componentId`),te(s.lens,`${n}[${a}].lens`),te(s.actionId,`${n}[${a}].actionId`),te(s.actionText,`${n}[${a}].actionText`),te(s.actionType,`${n}[${a}].actionType`)})}function Ac(t,n){if(!Array.isArray(t))throw new Error(`Invalid adoption assessment payload at ${n}: expected array.`);t.forEach((s,a)=>{Ke(s,`${n}[${a}]`),te(s.id,`${n}[${a}].id`),te(s.timestamp,`${n}[${a}].timestamp`),te(s.actor,`${n}[${a}].actor`),te(s.eventType,`${n}[${a}].eventType`),te(s.entityType,`${n}[${a}].entityType`),te(s.entityId,`${n}[${a}].entityId`),te(s.summary,`${n}[${a}].summary`),te(s.trustName,`${n}[${a}].trustName`),te(s.projectName,`${n}[${a}].projectName`),te(s.componentId,`${n}[${a}].componentId`),te(s.lens,`${n}[${a}].lens`),te(s.reason,`${n}[${a}].reason`),te(s.source,`${n}[${a}].source`),te(s.importedAt,`${n}[${a}].importedAt`)})}function Oc(t,n){if(Ke(t,n),te(t.trustName,`${n}.trustName`),te(t.region,`${n}.region`),te(t.trustType,`${n}.trustType`),te(t.projectName,`${n}.projectName`),te(t.leadName,`${n}.leadName`),te(t.cstId,`${n}.cstId`),t.cst!==void 0){if(Ke(t.cst,`${n}.cst`),te(t.cst.type,`${n}.cst.type`),te(t.cst.pathway,`${n}.cst.pathway`),typeof t.cst.pathway=="string"&&!Nc.has(t.cst.pathway))throw new Error(`Invalid adoption assessment payload at ${n}.cst.pathway: unexpected value "${t.cst.pathway}".`);if(te(t.cst.goLiveDate,`${n}.cst.goLiveDate`),te(t.cst.fullAdoptionDate,`${n}.cst.fullAdoptionDate`),te(t.cst.benefitRealizationDate,`${n}.cst.benefitRealizationDate`),te(t.cst.toolkitChoice,`${n}.cst.toolkitChoice`),typeof t.cst.toolkitChoice=="string"&&!Ao(t.cst.toolkitChoice))throw new Error(`Invalid adoption assessment payload at ${n}.cst.toolkitChoice: unexpected value "${t.cst.toolkitChoice}".`)}}function _c(t,n){if(!Array.isArray(t))throw new Error(`Invalid adoption assessment payload at ${n}: expected array.`);t.forEach((s,a)=>{Ke(s,`${n}[${a}]`),te(s.monthLabel,`${n}[${a}].monthLabel`),Xi(s.overallPercentage,`${n}[${a}].overallPercentage`),s.data!==void 0&&Zi(s.data,`${n}[${a}].data`)})}function Rc(t,n){Ke(t,n),Object.keys(t).forEach(s=>{if(typeof t[s]!="string")throw new Error(`Invalid adoption assessment payload at ${n}.${s}: expected string.`)})}function Dc(t,n){Ke(t,n),Object.keys(t).forEach(s=>{const a=t[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${n}.${s}: expected array.`);a.forEach((i,l)=>{Qi(i,`${n}.${s}[${l}]`)})})}function An(t){if(!Ji(t))throw new Error("Invalid adoption assessment payload at root: expected object.");return te(t.schemaVersion,"schemaVersion"),te(t.exportedAt,"exportedAt"),t.orgProfile!==void 0&&Oc(t.orgProfile,"orgProfile"),t.currentDraft!==void 0&&Zi(t.currentDraft,"currentDraft"),t.objectives!==void 0&&kc(t.objectives,"objectives"),t.auditLog!==void 0&&Ac(t.auditLog,"auditLog"),t.suppressedAutoActions!==void 0&&Ec(t.suppressedAutoActions,"suppressedAutoActions"),t.actionAuditLog!==void 0&&Ic(t.actionAuditLog,"actionAuditLog"),t.history!==void 0&&_c(t.history,"history"),t.phaseOverrides!==void 0&&Rc(t.phaseOverrides,"phaseOverrides"),t.pathwayChecks!==void 0&&Cc(t.pathwayChecks,"pathwayChecks"),t.componentActions!==void 0&&Dc(t.componentActions,"componentActions"),t}function za(t){return{schemaVersion:"4.0",exportedAt:new Date().toISOString(),orgProfile:{...t.orgProfile},currentDraft:pn(t.currentDraft),objectives:eo(t.objectives),auditLog:Mc(t.auditLog),suppressedAutoActions:no(t.suppressedAutoActions),history:t.history.map(n=>({...n,data:pn(n.data)})),phaseOverrides:{...t.phaseOverrides},pathwayChecks:to(t.pathwayChecks)}}function Pc(t){const n=t.componentActions;if(n)return Object.keys(n).reduce((s,a)=>(s[a]=(n[a]||[]).map(i=>({id:String(i.id??`${Date.now()}-${Math.random().toString(36).slice(2,8)}`),text:String(i.text||""),owner:String(i.owner||""),timescale:String(i.timescale||""),notes:String(i.notes||""),evidence:String(i.evidence||""),linkedActions:[]})),s),{})}function $c(t,n){return t!=null&&t.length?t.map(s=>({id:`legacy-${s.id}`,timestamp:s.removedAt,actor:"Unknown user",eventType:"action-removed",entityType:"action",entityId:s.actionId,summary:`Removed action: ${s.actionText||s.actionId}`,trustName:n==null?void 0:n.trustName,projectName:n==null?void 0:n.projectName,componentId:s.componentId,lens:s.lens,reason:s.reason,before:{actionText:s.actionText,actionType:s.actionType},source:"local"})):[]}function Tc(t,n,s){const a=$c(n,s),i=(t||[]).map(o=>({...o})),l=[...a,...i].sort((o,c)=>{const d=Date.parse(o.timestamp||""),m=Date.parse(c.timestamp||"");return!Number.isNaN(d)&&!Number.isNaN(m)&&d!==m?d-m:(o.id||"").localeCompare(c.id||"")});return Gn(l)}function Lc(t,n){return t.map(s=>({...s,source:"imported",importedAt:n}))}function Rs(t){var a,i;if(!t)return{};const n=Mn(t.orgProfile);(i=(a=t.orgProfile)==null?void 0:a.cst)!=null&&i.pathway||(n.cst.pathway="pathway-1");const s=t.objectives||Pc(t);return{...t,schemaVersion:t.schemaVersion||"2.0",orgProfile:n,objectives:eo(s),auditLog:Tc(t.auditLog,t.actionAuditLog,n),suppressedAutoActions:no(t.suppressedAutoActions),pathwayChecks:to(t.pathwayChecks)}}function Ka(t,n){const s=An(t),a=Rs(s),i=!!(s.objectives||s.componentActions),l=new Date().toISOString(),o=Lc(a.auditLog||[],l),c=Gn([...n.auditLog||[],...o]);return _n({...n,orgProfile:a.orgProfile||n.orgProfile,currentDraft:a.currentDraft?pn(a.currentDraft):pn(n.currentDraft),objectives:i?a.objectives:n.objectives,auditLog:c,suppressedAutoActions:a.suppressedAutoActions||n.suppressedAutoActions,history:(a.history||n.history).map(d=>({...d,data:pn(d.data)})),phaseOverrides:a.phaseOverrides||n.phaseOverrides,pathwayChecks:a.pathwayChecks||n.pathwayChecks})}function pn(t){const n=js(t);return Object.keys(n).forEach(s=>{Object.keys(n[s]).forEach(a=>{n[s][a].actions=n[s][a].actions.map(i=>({...i,status:et(i.status),notes:i.notes||"",evidence:i.evidence||"",linkedTargets:(i.linkedTargets||[]).map(l=>({componentId:l.componentId,lens:l.lens}))}))})}),n}function eo(t){const n=ks(t||{});return Object.keys(n).forEach(s=>{n[s]=n[s].map(a=>({...a,owner:a.owner||"",timescale:a.timescale||"",notes:a.notes||"",evidence:a.evidence||"",linkedActions:(a.linkedActions||[]).map(i=>({lens:i.lens,actionId:i.actionId}))}))}),n}function to(t){return t?Object.keys(t).reduce((n,s)=>{const a=t[s]||{};return n[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},n},{}):{}}function no(t){return t?Object.keys(t).reduce((n,s)=>(n[s]=[...t[s]||[]],n),{}):{}}function Mc(t){return t?t.map(n=>({...n})):[]}function Bc(t,n){const s=(t||[]).map(i=>`${i.componentId}:${i.lens}`).sort(),a=(n||[]).map(i=>`${i.componentId}:${i.lens}`).sort();return s.length===a.length&&s.every((i,l)=>i===a[l])}function Gc(t,n){return t.text===n.text&&(t.actionType||"")===(n.actionType||"")&&t.owner===n.owner&&t.timescale===n.timescale&&t.status===n.status&&(t.phase??null)===(n.phase??null)&&(t.guidanceUrl||"")===(n.guidanceUrl||"")&&(t.startDate||"")===(n.startDate||"")&&(t.dueDate||"")===(n.dueDate||"")&&(t.notes||"")===(n.notes||"")&&(t.evidence||"")===(n.evidence||"")&&(t.readinessScore??null)===(n.readinessScore??null)&&Bc(t.linkedTargets,n.linkedTargets)}function Fc(t){return`${t.text||"Untitled action"} - ${t.status}, owner: ${t.owner||"Unassigned"}`}function Uc(t,n){const s=t.map(i=>`${i.lens}:${i.actionId}`).sort(),a=n.map(i=>`${i.lens}:${i.actionId}`).sort();return s.length===a.length&&s.every((i,l)=>i===a[l])}function Hc(t,n){return t.text===n.text&&t.owner===n.owner&&t.timescale===n.timescale&&(t.notes||"")===(n.notes||"")&&(t.evidence||"")===(n.evidence||"")&&Uc(t.linkedActions,n.linkedActions)}function Wc(t){return`${t.text||"Untitled objective"} - owner: ${t.owner||"Unassigned"}`}function so(t,n){return t.name===n.name&&t.role===n.role}function Pn(t){return t.role?`${t.name||"Unnamed"} - ${t.role}`:t.name||"Unnamed"}function Vc(t,n){return t.score===n.score&&t.rationale===n.rationale&&t.evidence===n.evidence}function Ja(t){const n=`Score ${t.score}`;return t.rationale?`${n} - ${t.rationale}`:n}function Fn(t,n,s,a,i,l){const o=new Map(n.map(r=>[r.id,r])),c=new Set(t.map(r=>r.id)),d=[];t.forEach(r=>{const f=o.get(r.id);f&&!s(r,f)&&d.push({id:`${a}:${r.id}`,label:i(r),mineSummary:l(r),theirsSummary:l(f)})});const m=n.filter(r=>!c.has(r.id)).length;return{conflicts:d,autoMergedCount:m,merge:r=>{const f=t.map(b=>{const h=o.get(b.id);return h&&r[`${a}:${b.id}`]==="theirs"?h:b});return n.forEach(b=>{c.has(b.id)||f.push(b)}),f}}}const Xa=[{key:"trustName",label:"Trust name"},{key:"region",label:"Region"},{key:"trustType",label:"Trust type"},{key:"projectName",label:"Programme / project name"},{key:"leadName",label:"Lead submitter"}],Qa=[{key:"type",label:"CST type"},{key:"pathway",label:"Pathway"},{key:"goLiveDate",label:"Go live date"},{key:"fullAdoptionDate",label:"Full adoption date"},{key:"benefitRealizationDate",label:"Benefit realisation date"},{key:"toolkitChoice",label:"Default toolkit"}];function ao(t,n){const s=[];return Xa.forEach(({key:a,label:i})=>{const l=String(t[a]??""),o=String(n[a]??"");l!==o&&s.push({id:`profile:${String(a)}`,label:i,mineSummary:l||"(blank)",theirsSummary:o||"(blank)"})}),Qa.forEach(({key:a,label:i})=>{const l=String(t.cst[a]??""),o=String(n.cst[a]??"");l!==o&&s.push({id:`cst:${String(a)}`,label:i,mineSummary:l||"(blank)",theirsSummary:o||"(blank)"})}),{conflicts:s,autoMergedCount:0,merge:a=>{const i={...t};Xa.forEach(({key:o})=>{a[`profile:${String(o)}`]==="theirs"&&(i[o]=n[o])});const l={...t.cst};return Qa.forEach(({key:o})=>{a[`cst:${String(o)}`]==="theirs"&&(l[o]=n.cst[o])}),{...i,cst:l}}}}function io(t,n){const s=new Set([...Object.keys(t),...Object.keys(n)]),a=[],i=[];let l=0;const o=new Map,c=new Map;return s.forEach(d=>{const m=t[d]||{},r=n[d]||{},f=new Set([...Object.keys(m),...Object.keys(r)]);c.set(d,f),f.forEach(b=>{const h=m[b],x=r[b],E=`${d}:${b}`;h&&x&&!Vc(h,x)&&a.push({id:`entry:${E}`,label:`${d} / ${b}`,mineSummary:Ja(h),theirsSummary:Ja(x)});const S=Fn((h==null?void 0:h.actions)||[],(x==null?void 0:x.actions)||[],Gc,`action:${E}`,u=>`${d} / ${b} - ${u.text||"Untitled action"}`,Fc);i.push(...S.conflicts),l+=S.autoMergedCount,o.set(E,S)})}),{entryConflicts:a,actionConflicts:i,autoMergedActionCount:l,merge:d=>{const m={};return s.forEach(r=>{const f=t[r]||{},b=n[r]||{},h={};(c.get(r)||new Set).forEach(x=>{var j;const E=f[x],S=b[x],u=`${r}:${x}`;let C=E?{score:E.score,rationale:E.rationale,evidence:E.evidence}:{score:S.score,rationale:S.rationale,evidence:S.evidence};E&&S&&d[`entry:${u}`]==="theirs"&&(C={score:S.score,rationale:S.rationale,evidence:S.evidence});const R=((j=o.get(u))==null?void 0:j.merge(d))||[];h[x]={...C,actions:R}}),m[r]=h}),m}}}function oo(t,n){const s=new Set([...Object.keys(t),...Object.keys(n)]),a=[];let i=0;const l=new Map;return s.forEach(o=>{const c=Fn(t[o]||[],n[o]||[],Hc,`objective:${o}`,d=>`${o} - ${d.text||"Untitled objective"}`,Wc);a.push(...c.conflicts),i+=c.autoMergedCount,l.set(o,c)}),{conflicts:a,autoMergedCount:i,merge:o=>{const c={};return s.forEach(d=>{var m;c[d]=((m=l.get(d))==null?void 0:m.merge(o))||[]}),c}}}function ro(t,n){const s=new Set([...Object.keys(t),...Object.keys(n)]),a=[];let i=0;return s.forEach(l=>{const o=t[l],c=n[l];if(o===void 0||c===void 0){o===void 0&&c!==void 0&&(i+=1);return}o!==c&&a.push({id:`phase:${l}`,label:`Phase focus override - ${l}`,mineSummary:o,theirsSummary:c})}),{conflicts:a,autoMergedCount:i,merge:l=>{const o={...t};return s.forEach(c=>{const d=n[c];d!==void 0&&(t[c]===void 0||l[`phase:${c}`]==="theirs")&&(o[c]=d)}),o}}}function qc(t,n){const s=new Set([...Object.keys(t),...Object.keys(n)]),a={};return s.forEach(i=>{const l=t[i]||{},o=n[i]||{},c=new Set([...Object.keys(l),...Object.keys(o)]),d={};c.forEach(m=>{const r=m;d[r]=Array.from(new Set([...l[r]||[],...o[r]||[]]))}),a[i]=d}),a}function Yc(t,n){const s=new Set([...Object.keys(t),...Object.keys(n)]),a={};return s.forEach(i=>{a[i]=Array.from(new Set([...t[i]||[],...n[i]||[]]))}),a}function zc(t,n){const s=new Map;return n.forEach(a=>s.set(a.monthLabel,a)),t.forEach(a=>s.set(a.monthLabel,a)),Array.from(s.values())}function lo(t){const n=Rs(t);return{theirsProfile:n.orgProfile||Mn(),theirsDraft:n.currentDraft||{},theirsObjectives:n.objectives||{},theirsPhaseOverrides:n.phaseOverrides||{},theirsPathwayChecks:n.pathwayChecks||{},theirsSuppressedAutoActions:n.suppressedAutoActions||{},theirsAuditLog:n.auditLog||[],theirsHistory:(n.history||[]).map(s=>({...s,data:js(s.data)}))}}function Kc(t,n){const{theirsProfile:s,theirsDraft:a,theirsObjectives:i,theirsPhaseOverrides:l}=lo(n),o=ao(t.orgProfile,s),c=Fn(t.orgProfile.teamMembers||[],s.teamMembers||[],so,"team",Pn,Pn),d=io(t.currentDraft,a),m=oo(t.objectives,i),r=ro(t.phaseOverrides,l),f=[{id:"profile",title:"Organisation profile & CST settings",items:o.conflicts},{id:"team",title:"Team members",items:c.conflicts},{id:"assessments",title:"Assessments",items:d.entryConflicts},{id:"actions",title:"Lens actions",items:d.actionConflicts},{id:"objectives",title:"Objectives",items:m.conflicts},{id:"phaseFocus",title:"Phase focus overrides",items:r.conflicts}].filter(h=>h.items.length>0),b=[];return c.autoMergedCount&&b.push(`${c.autoMergedCount} new team member(s)`),d.autoMergedActionCount&&b.push(`${d.autoMergedActionCount} new action(s)`),m.autoMergedCount&&b.push(`${m.autoMergedCount} new objective(s)`),r.autoMergedCount&&b.push(`${r.autoMergedCount} new phase focus override(s)`),{sections:f,autoMergeSummary:b,hasConflicts:f.length>0}}function Za(t,n,s){const{theirsProfile:a,theirsDraft:i,theirsObjectives:l,theirsPhaseOverrides:o,theirsPathwayChecks:c,theirsSuppressedAutoActions:d,theirsAuditLog:m,theirsHistory:r}=lo(n),f=ao(t.orgProfile,a),b=Fn(t.orgProfile.teamMembers||[],a.teamMembers||[],so,"team",Pn,Pn),h=io(t.currentDraft,i),x=oo(t.objectives,l),E=ro(t.phaseOverrides,o),S={...t.orgProfile,...f.merge(s),teamMembers:b.merge(s)},u=new Date().toISOString(),C=m.map(j=>({...j,source:"imported",importedAt:u})),R=Gn([...t.auditLog||[],...C]);return _n({...t,orgProfile:S,currentDraft:js(h.merge(s)),objectives:ks(x.merge(s)),auditLog:R,suppressedAutoActions:Yc(t.suppressedAutoActions,d),history:zc(t.history,r),phaseOverrides:E.merge(s),pathwayChecks:qc(t.pathwayChecks,c)})}const Jc=`{
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
`,Ds={componentId:"benefits",actionPrefix:"benefits-action",outcomePrefix:"benefits:outcome",fallbackOutcomes:[{id:"benefits:outcome:o1",text:"Benefits and disbenefits have been identified and defined"},{id:"benefits:outcome:o2",text:"Benefits are actively managed and monitored"},{id:"benefits:outcome:o3",text:"Benefits are realised, evidenced and sustained"}],lensAliases:{"Strategic Direction and Leadership":"Planning and Risk","People Experience and Culture":"Process and Sustainment"}},Xc=Je(Jc,Ds);function Qc(t){return Xe(t,Ds,Xc)}function Zc(t){return Qe(t,Ds)}const ed=`{
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
`,Ps={componentId:"capability",actionPrefix:"capability-action",outcomePrefix:"capability:outcome",fallbackOutcomes:[{id:"capability:outcome:o1",text:"Required capability levels have been defined and assessed"},{id:"capability:outcome:o2",text:"People can perform confidently in the future state"},{id:"capability:outcome:o3",text:"Capability and confidence are sustained and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Communication:"People Experience and Culture","Testing and Validation":"Skills and Behaviour"}},td=Je(ed,Ps);function nd(t){return Xe(t,Ps,td)}function sd(t){return Qe(t,Ps)}const ad=`{
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
`,$s={componentId:"case_for_change",actionPrefix:"case-for-change-action",outcomePrefix:"case-for-change:outcome",fallbackOutcomes:[{id:"case-for-change:outcome:o1",text:"The need for change has been clearly defined and evidenced"},{id:"case-for-change:outcome:o2",text:"The case for change is understood and accepted"},{id:"case-for-change:outcome:o3",text:"The case for change remains credible and relevant"}]},id=Je(ad,$s);function od(t){return Xe(t,$s,id)}function rd(t){return Qe(t,$s)}const ld=`{
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
`,Ts={componentId:"change_adoption",actionPrefix:"change-adoption-action",outcomePrefix:"change-adoption:outcome",fallbackOutcomes:[{id:"change-adoption:outcome:o1",text:"Adoption expectations and measures have been defined"},{id:"change-adoption:outcome:o2",text:"Adoption is actively monitored and supported"},{id:"change-adoption:outcome:o3",text:"Adoption is sustained and optimised"}],lensAliases:{"Planning and Measurement":"Planning and Risk","Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","Skills and Behaviour":"Skills and Behaviour","People Experience and Culture":"Skills and Behaviour",Governance:"Planning and Risk",Design:"Planning and Risk",Reinforcement:"Skills and Behaviour"}},cd=Je(ld,Ts);function dd(t){return Xe(t,Ts,cd)}function md(t){return Qe(t,Ts)}const ud=`{
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
`,Ls={componentId:"change_impact",actionPrefix:"change-impact-action",outcomePrefix:"change-impact:outcome",fallbackOutcomes:[{id:"change-impact:outcome:o1",text:"The impact of the change has been identified and understood"},{id:"change-impact:outcome:o2",text:"Impacts have been assessed, validated and prioritised"},{id:"change-impact:outcome:o3",text:"Change impacts are actively managed through plans, governance and support"}]},gd=Je(ud,Ls);function pd(t){return Xe(t,Ls,gd)}function hd(t){return Qe(t,Ls)}const fd=`{
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
`,Ms={componentId:"change_network",actionPrefix:"change-network-action",outcomePrefix:"change-network:outcome",fallbackOutcomes:[{id:"change-network:outcome:o1",text:"A representative and effective change network has been established"},{id:"change-network:outcome:o2",text:"The change network actively enables engagement and adoption"},{id:"change-network:outcome:o3",text:"The change network is embedded and delivers ongoing value"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Engagement:"People Experience and Culture","Analysis and Insight":"People Experience and Culture"}},bd=Je(fd,Ms);function xd(t){return Xe(t,Ms,bd)}function yd(t){return Qe(t,Ms)}const vd=`{
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
`,Bs={componentId:"cm_readiness",actionPrefix:"cm-readiness-action",outcomePrefix:"cm-readiness:outcome",fallbackOutcomes:[{id:"cm-readiness:outcome:o1",text:"Organisational readiness has been assessed"},{id:"cm-readiness:outcome:o2",text:"A robust change management plan has been developed"},{id:"cm-readiness:outcome:o3",text:"Readiness and planning activities actively support successful implementation"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Planning and Risk":"Planning and Risk","People Experience and Culture":"Planning and Risk","Skills and Behaviour":"Planning and Risk","Process and Sustainment":"Planning and Risk",Governance:"Planning and Risk",Reinforcement:"Planning and Risk"}},Sd=Je(vd,Bs);function wd(t){return Xe(t,Bs,Sd)}function Nd(t){return Qe(t,Bs)}const jd=`{
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
`,Gs={componentId:"org_maturity",actionPrefix:"org-change-readiness-action",outcomePrefix:"org-change-readiness:outcome",fallbackOutcomes:[{id:"org-change-readiness:outcome:o1",text:"Organisational readiness has been assessed and understood"},{id:"org-change-readiness:outcome:o2",text:"Readiness gaps are being actively addressed"},{id:"org-change-readiness:outcome:o3",text:"The organisation is prepared to successfully absorb and sustain the change"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"Skills and Behaviour","Planning and Measurement":"Skills and Behaviour",Design:"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Reinforcement:"Skills and Behaviour"}},kd=Je(jd,Gs);function Cd(t){return Xe(t,Gs,kd)}function Ed(t){return Qe(t,Gs)}const Id="pathway-auto-action:",Ad="pathway:auto-objective:",Od="vision:auto-objective:";function _d(t){return t.startsWith(Ad)||t.startsWith(Od)}function Rd(t){const n=t.orgProfile.cst.pathway,s={...t.objectives||{}},a=Object.keys(t.currentDraft||{}).reduce((i,l)=>{const o=t.currentDraft[l]||{};return i[l]=Object.keys(o).reduce((c,d)=>{const m=o[d];return c[d]={...m,actions:(m.actions||[]).filter(r=>!r.id.startsWith(Id))},c},{}),i},{});return en.forEach(i=>{Hi(i.id,n)&&(s[i.id]=(s[i.id]||[]).filter(o=>!_d(o.id)))}),{...t,currentDraft:a,objectives:s}}const Dd=`{
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
`,Fs={componentId:"process_change",actionPrefix:"process-change-action",outcomePrefix:"process-change:outcome",fallbackOutcomes:[{id:"process-change:outcome:o1",text:"Current and future processes have been defined"},{id:"process-change:outcome:o2",text:"Process changes have been implemented and adopted"},{id:"process-change:outcome:o3",text:"Processes are optimised and continuously improved"}],lensAliases:{"Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Skills and Behaviour","Planning and Risk":"Process and Sustainment","Analysis and Insight":"Process and Sustainment",Communication:"Skills and Behaviour","Dependency Management":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment",Implementation:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"Skills and Behaviour","Testing and Validation":"Process and Sustainment"}},Pd=Je(Dd,Fs);function $d(t){return Xe(t,Fs,Pd)}function Td(t){return Qe(t,Fs)}const Ld=`{
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
`,Us={componentId:"reinforcement",actionPrefix:"reinforcement-action",outcomePrefix:"reinforcement:outcome",fallbackOutcomes:[{id:"reinforcement:outcome:o1",text:"Reinforcement strategy and sustainment measures are defined"},{id:"reinforcement:outcome:o2",text:"Reinforcement activities support sustained adoption and behaviour change"},{id:"reinforcement:outcome:o3",text:"Sustained change outcomes are embedded and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Strategic Direction and Leadership":"Process and Sustainment","Planning and Measurement":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"People Experience and Culture"}},Md=Je(Ld,Us);function Bd(t){return Xe(t,Us,Md)}function Gd(t){return Qe(t,Us)}const Fd=`{
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
`,Hs={componentId:"resistance",actionPrefix:"resistance-action",outcomePrefix:"resistance:outcome",fallbackOutcomes:[{id:"resistance:outcome:o1",text:"Potential sources of resistance have been identified and understood"},{id:"resistance:outcome:o2",text:"Strategies and interventions are in place to prevent and address resistance"},{id:"resistance:outcome:o3",text:"Resistance is actively managed and reduced throughout the change lifecycle"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour",Design:"Skills and Behaviour",Communication:"People Experience and Culture",Engagement:"People Experience and Culture",Reinforcement:"Skills and Behaviour"}},Ud=Je(Fd,Hs);function Hd(t){return Xe(t,Hs,Ud)}function Wd(t){return Qe(t,Hs)}const Vd=`{
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
`,Ws={componentId:"risk_management",actionPrefix:"risk-management-action",outcomePrefix:"risk-management:outcome",fallbackOutcomes:[{id:"risk-management:outcome:o1",text:"Change risks have been identified and assessed"},{id:"risk-management:outcome:o2",text:"Risk mitigation and management activities are in place"},{id:"risk-management:outcome:o3",text:"Risks are proactively managed throughout the change lifecycle"}],lensAliases:{"Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Strategic Direction and Leadership":"Planning and Risk","Skills and Behaviour":"Process and Sustainment",Governance:"Planning and Risk",Reinforcement:"Process and Sustainment"}},qd=Je(Vd,Ws);function Yd(t){return Xe(t,Ws,qd)}function zd(t){return Qe(t,Ws)}const Kd=`{
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
`,Vs={componentId:"skills_learning",actionPrefix:"skills-learning-action",outcomePrefix:"skills-learning:outcome",fallbackOutcomes:[{id:"skills-learning:outcome:o1",text:"Future learning and capability requirements have been identified"},{id:"skills-learning:outcome:o2",text:"Learning interventions have been designed and delivered"},{id:"skills-learning:outcome:o3",text:"Learning outcomes are achieved and sustained"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Process and Sustainment":"Skills and Behaviour",Governance:"Skills and Behaviour",Communication:"People Experience and Culture",Reinforcement:"Skills and Behaviour",Design:"Skills and Behaviour","Dependency Management":"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour","Testing and Validation":"Skills and Behaviour"}},Jd=Je(Kd,Vs);function Xd(t){return Xe(t,Vs,Jd)}function Qd(t){return Qe(t,Vs)}const Zd=`{
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
`,qs={componentId:"sponsorship",actionPrefix:"sponsorship-action",outcomePrefix:"sponsorship:outcome",fallbackOutcomes:[{id:"sponsorship:outcome:o1",text:"Clear sponsorship and governance structures are established"},{id:"sponsorship:outcome:o2",text:"Sponsors actively lead and champion the change"},{id:"sponsorship:outcome:o3",text:"Governance and sponsorship drive successful delivery"}]},em=Je(Zd,qs);function tm(t){return Xe(t,qs,em)}function nm(t){return Qe(t,qs)}const sm=`{
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
`,Ys={componentId:"stakeholder",actionPrefix:"stakeholder-action",outcomePrefix:"stakeholder:outcome",fallbackOutcomes:[{id:"stakeholder:outcome:o1",text:"Stakeholders have been identified, analysed and prioritised"},{id:"stakeholder:outcome:o2",text:"Stakeholders are actively engaged and informed"},{id:"stakeholder:outcome:o3",text:"Engagement and communications support successful adoption"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Reinforcement:"People Experience and Culture"}},am=Je(sm,Ys);function im(t){return Xe(t,Ys,am)}function om(t){return Qe(t,Ys)}const rm=`{
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
`,zs={componentId:"transfer_bau",actionPrefix:"transfer-bau-action",outcomePrefix:"transfer-bau:outcome",fallbackOutcomes:[{id:"transfer-bau:outcome:o1",text:"Operational ownership and accountability have been established"},{id:"transfer-bau:outcome:o2",text:"Business-as-usual capabilities and support arrangements are in place"},{id:"transfer-bau:outcome:o3",text:"The change is fully embedded within normal operational management"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Process and Sustainment":"Process and Sustainment","Planning and Risk":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Skills and Behaviour":"Process and Sustainment",Governance:"Strategic Direction and Leadership","Measurement and Evaluation":"Process and Sustainment",Implementation:"Process and Sustainment","Risk Management":"Process and Sustainment",Design:"Process and Sustainment","Dependency Management":"Process and Sustainment",Reinforcement:"Process and Sustainment"}},lm=Je(rm,zs);function cm(t){return Xe(t,zs,lm)}function dm(t){return Qe(t,zs)}const mm=`{
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
`,Ks={componentId:"vision",actionPrefix:"vision-action",outcomePrefix:"vision:outcome",fallbackOutcomes:[{id:"vision:outcome:o1",text:"A compelling future state has been defined"},{id:"vision:outcome:o2",text:"The vision is shared and understood"},{id:"vision:outcome:o3",text:"The vision is visible and guides the change"}]},um=Je(mm,Ks);function gm(t){return Xe(t,Ks,um)}function pm(t){return Qe(t,Ks)}function kt(t){return Rd(cm(Cd(Bd($d(nd(dd(Xd(Hd(im(wd(Yd(xd(pd(Qc(tm(od(gm(t))))))))))))))))))}function hm(t){return dm(Ed(Gd(Td(sd(md(Qd(Wd(om(Nd(zd(yd(hd(Zc(nm(rd(pm(t)))))))))))))))))}function fm(t,n){return n==="pathway-1"?kt(t):hm(t)}function Un({selects:t,search:n,onReset:s,darkMode:a=!1}){const i=`block text-xs font-medium mb-1 ${a?"text-slate-400":"text-slate-500"}`,l=`text-sm rounded-md border px-2 py-1.5 ${a?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-700"}`;return e.jsxs("div",{className:`flex flex-wrap items-end gap-3 rounded-md border p-3 mb-3 ${a?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[n?e.jsxs("div",{children:[e.jsx("label",{htmlFor:"filter-bar-search",className:i,children:n.label}),e.jsx("input",{id:"filter-bar-search",type:"text",value:n.value,placeholder:n.placeholder,onChange:o=>n.onChange(o.target.value),className:l})]}):null,t.map(o=>e.jsxs("div",{children:[e.jsx("label",{htmlFor:`filter-bar-${o.key}`,className:i,children:o.label}),e.jsxs("select",{id:`filter-bar-${o.key}`,value:o.value,onChange:c=>o.onChange(c.target.value),className:l,children:[e.jsx("option",{value:"",children:"All"}),o.options.map(c=>e.jsx("option",{value:c,children:c},c))]})]},o.key)),s?e.jsx("button",{type:"button",onClick:s,className:`text-sm px-3 py-1.5 rounded-md font-medium ${a?"text-slate-300 hover:bg-slate-800":"text-slate-600 hover:bg-slate-100"}`,children:"Reset filters"}):null]})}function bn(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5h2m6.5-.5a2.121 2.121 0 013 3L8 21l-4 1 1-4L17.5 4.5z"})})}function xn(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m3 0-.867 12.142A2 2 0 0115.138 21H8.862a2 2 0 01-1.995-1.858L6 7h12z"})})}function bm(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V5a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 01-1 1h-2M8 7H6a1 1 0 00-1 1v10a1 1 0 001 1h9a1 1 0 001-1v-2M8 7h7a1 1 0 011 1v7"})})}function xm(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v8m-4-4h8m6 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}function ym(){return e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v2"})})}function mt({onClick:t,title:n,children:s,variant:a="neutral",darkMode:i=!1,disabled:l=!1}){const o="inline-flex h-8 w-8 items-center justify-center rounded-md border disabled:opacity-40 disabled:cursor-not-allowed",c=i?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100",d=i?"border-red-500/40 bg-slate-800 text-red-400 hover:bg-red-500/10":"border-red-200 bg-white text-red-600 hover:bg-red-50";return e.jsx("button",{type:"button",onClick:t,title:n,"aria-label":n,disabled:l,className:`${o} ${a==="danger"?d:c}`,children:s})}function co(t,n){return t>=n.blue?"blue":t>=n.green?"green":t>=n.amber?"amber":"red"}function mo(t){switch(t){case"blue":return"bg-blue-100 text-blue-800 border-blue-300";case"green":return"bg-green-100 text-green-800 border-green-300";case"amber":return"bg-amber-100 text-amber-800 border-amber-300";case"red":return"bg-red-100 text-red-800 border-red-300"}}const vm=["Finance","HR","IT & Digital","Operations","Clinical","Estates & Facilities","Procurement","Communications","Other"],Jt={complexity:[{value:1,label:"1 - Simple, generalist activity"},{value:2,label:"2 - Simple, specialist activity"},{value:3,label:"3 - Complex, generalist activity"},{value:4,label:"4 - Highly complex, specialist activity"}],frequency:[{value:1,label:"1 - Once a month or less"},{value:2,label:"2 - Once a week or less"},{value:3,label:"3 - Once a day or less"},{value:4,label:"4 - Constantly"}],distance:[{value:1,label:"1 - Same or very similar to current"},{value:2,label:"2 - Less than 20% change"},{value:3,label:"3 - Less than 50% change"},{value:4,label:"4 - More than 80% change"}],attitude:[{value:1,label:"1 - Resistant to change"},{value:2,label:"2 - Resistant but can be convinced"},{value:3,label:"3 - Positive but needs clear benefits"},{value:4,label:"4 - Very positive (Pull not Push)"}],conditions:[{value:1,label:"1 - Conditions not conducive"},{value:2,label:"2 - >2 minor or 1 major change affecting"},{value:3,label:"3 - No more than 2 minor changes"},{value:4,label:"4 - Nothing to divert attention"}],resources:[{value:1,label:"1 - Challenges prevent implementation"},{value:2,label:"2 - Resource challenges likely to impact"},{value:3,label:"3 - Sufficient to support change"},{value:4,label:"4 - Fully resourced"}],network:[{value:1,label:"1 - Not resourced"},{value:2,label:"2 - Champions but not Agents"},{value:3,label:"3 - Agents but not Champions"},{value:4,label:"4 - Fully resourced and active"}],capability:[{value:1,label:"1 - Unaware of new ways of working"},{value:2,label:"2 - Awareness of new ways working"},{value:3,label:"3 - Acquired knowledge/skills (Training)"},{value:4,label:"4 - Confidence in using skills (Practice)"}]},ei="nhs-change-impact-assessment",bs={id:null,function:"",process:"",processRef:"",processRefUrl:"",benefitsRef:"",benefitsRefUrl:"",peopleImpacted:0,impactDate:"",complexity:1,frequency:1,distance:1,attitude:2,conditions:2,resources:2,network:1,capability:1},ti=[{id:"demo1",function:"Finance",process:"Year End Close",processRef:"FIN-001",benefitsRef:"BEN-02",peopleImpacted:15,impactDate:"2026-03-15",timestamp:"",complexity:4,frequency:1,distance:3,attitude:3,conditions:3,resources:2,network:3,capability:2},{id:"demo2",function:"Finance",process:"Invoice Processing",processRef:"FIN-002",benefitsRef:"BEN-05",peopleImpacted:8,impactDate:"2026-04-01",timestamp:"",complexity:2,frequency:4,distance:4,attitude:2,conditions:2,resources:3,network:2,capability:2},{id:"demo3",function:"HR",process:"New Onboarding Flow",processRef:"HR-101",benefitsRef:"BEN-10",peopleImpacted:50,impactDate:"2026-06-01",timestamp:"",complexity:2,frequency:2,distance:3,attitude:4,conditions:4,resources:4,network:4,capability:4},{id:"demo4",function:"HR",process:"Payroll Migration",processRef:"HR-200",benefitsRef:"BEN-11",peopleImpacted:120,impactDate:"2026-01-25",timestamp:"",complexity:4,frequency:3,distance:4,attitude:1,conditions:2,resources:1,network:1,capability:1},{id:"demo5",function:"IT",process:"Security Patch 4.0",processRef:"IT-900",benefitsRef:"BEN-20",peopleImpacted:200,impactDate:"2026-02-15",timestamp:"",complexity:3,frequency:1,distance:2,attitude:3,conditions:4,resources:4,network:3,capability:2},{id:"demo6",function:"IT",process:"Helpdesk Ticketing",processRef:"IT-950",benefitsRef:"BEN-22",peopleImpacted:25,impactDate:"2026-05-10",timestamp:"",complexity:2,frequency:4,distance:3,attitude:2,conditions:3,resources:3,network:2,capability:2},{id:"demo7",function:"Operations",process:"Shift Scheduling",processRef:"OPS-300",benefitsRef:"BEN-30",peopleImpacted:300,impactDate:"2026-04-20",timestamp:"",complexity:3,frequency:2,distance:4,attitude:1,conditions:1,resources:2,network:2,capability:1},{id:"demo8",function:"Operations",process:"Inventory Audit",processRef:"OPS-400",benefitsRef:"BEN-35",peopleImpacted:40,impactDate:"2026-11-05",timestamp:"",complexity:2,frequency:1,distance:1,attitude:4,conditions:4,resources:4,network:3,capability:3},{id:"demo9",function:"Marketing",process:"Rebrand Launch",processRef:"MKT-500",benefitsRef:"BEN-40",peopleImpacted:12,impactDate:"2026-09-01",timestamp:"",complexity:4,frequency:1,distance:3,attitude:4,conditions:2,resources:3,network:4,capability:3},{id:"demo10",function:"Sales",process:"CRM Upgrade",processRef:"SLS-600",benefitsRef:"BEN-45",peopleImpacted:60,impactDate:"2026-07-15",timestamp:"",complexity:3,frequency:4,distance:2,attitude:2,conditions:3,resources:2,network:2,capability:2},{id:"demo11",function:"Compliance",process:"GDPR Audit",processRef:"COM-700",benefitsRef:"BEN-50",peopleImpacted:5,impactDate:"2026-05-20",timestamp:"",complexity:3,frequency:1,distance:2,attitude:3,conditions:4,resources:3,network:4,capability:3},{id:"demo12",function:"Legal",process:"Contract Review Sys",processRef:"LEG-800",benefitsRef:"BEN-55",peopleImpacted:10,impactDate:"2026-08-10",timestamp:"",complexity:2,frequency:3,distance:3,attitude:2,conditions:3,resources:2,network:1,capability:2},{id:"demo13",function:"HR",process:"Performance Review",processRef:"HR-150",benefitsRef:"BEN-12",peopleImpacted:150,impactDate:"2026-11-01",timestamp:"",complexity:2,frequency:1,distance:2,attitude:3,conditions:3,resources:3,network:3,capability:3},{id:"demo14",function:"Operations",process:"Fleet Maintenance",processRef:"OPS-450",benefitsRef:"BEN-32",peopleImpacted:20,impactDate:"2026-06-15",timestamp:"",complexity:3,frequency:2,distance:2,attitude:4,conditions:4,resources:4,network:4,capability:4},{id:"demo15",function:"Finance",process:"Budget Planning",processRef:"FIN-005",benefitsRef:"BEN-03",peopleImpacted:10,impactDate:"2026-10-01",timestamp:"",complexity:4,frequency:1,distance:2,attitude:2,conditions:1,resources:2,network:2,capability:2},{id:"demo16",function:"IT",process:"Cloud Migration",processRef:"IT-990",benefitsRef:"BEN-25",peopleImpacted:15,impactDate:"2026-12-01",timestamp:"",complexity:4,frequency:4,distance:4,attitude:3,conditions:2,resources:3,network:3,capability:2}];function Ct(t){const s=(t.complexity+t.frequency+2*t.distance)/16*100,i=(t.attitude+t.conditions+t.resources+t.network+t.capability)/20*100;return{changeScore:s,readinessScore:i}}function ni(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function si({score:t,type:n}){let s="bg-slate-100 text-slate-800 border-slate-200";return n==="change"?t>=70?s="bg-red-100 text-red-800 border-red-200":t>=40?s="bg-amber-100 text-amber-800 border-amber-200":s="bg-green-100 text-green-800 border-green-200":t>=70?s="bg-green-100 text-green-800 border-green-200":t>=40?s="bg-amber-100 text-amber-800 border-amber-200":s="bg-red-100 text-red-800 border-red-200",e.jsxs("span",{className:`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${s}`,children:[t.toFixed(0),"%"]})}function Sm({items:t,formData:n,showForm:s,onShowFormChange:a,onFormDataChange:i,onSave:l,onEdit:o,onDelete:c,onImportClick:d,onImportFile:m,onExport:r,onLoadDemo:f,fileInputRef:b}){const[h,x]=g.useState(null),[E,S]=g.useState("ascending"),[u,C]=g.useState(""),[R,j]=g.useState(""),k=w=>{h===w&&E==="ascending"?S("descending"):(x(w),S("ascending"))},p=g.useMemo(()=>{let w=[...t];return u&&(w=w.filter(L=>L.function===u)),R&&(w=w.filter(L=>L.process===R)),h&&w.sort((L,ne)=>{let xe,Ae;return h==="changeScore"||h==="readinessScore"?(xe=Ct(L)[h],Ae=Ct(ne)[h]):(xe=L[h],Ae=ne[h]),typeof xe=="string"&&(xe=xe.toLowerCase()),typeof Ae=="string"&&(Ae=Ae.toLowerCase()),xe<Ae?E==="ascending"?-1:1:xe>Ae?E==="ascending"?1:-1:0}),w},[t,h,E,u,R]),B=g.useMemo(()=>Array.from(new Set(t.map(w=>w.function))).filter(Boolean).sort(),[t]),D=g.useMemo(()=>Array.from(new Set([...vm,...B])),[B]),V=g.useMemo(()=>Array.from(new Set(t.map(w=>w.process))).filter(Boolean).sort(),[t]),le=w=>h!==w?"":E==="ascending"?" ▲":" ▼",re=[{key:"function",label:"Function"},{key:"process",label:"Process"},{key:"processRef",label:"Ref #"},{key:"benefitsRef",label:"Ben #"},{key:"peopleImpacted",label:"# Impacted"},{key:"impactDate",label:"Date"},{key:"changeScore",label:"Change Score",center:!0},{key:"readinessScore",label:"Readiness Score",center:!0}];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-800",children:"Detailed Impact Assessments"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("input",{ref:b,type:"file",onChange:m,accept:".csv",className:"hidden"}),e.jsx("button",{type:"button",onClick:f,className:"text-sm text-slate-500 hover:text-blue-600 px-3 py-2",children:"Load Demo Data"}),e.jsx("button",{type:"button",onClick:d,className:Ge,children:"Import CSV"}),e.jsx("button",{type:"button",onClick:r,disabled:!t.length,className:`${Ge} disabled:opacity-50 disabled:cursor-not-allowed`,children:"Export CSV"}),e.jsx("button",{type:"button",onClick:()=>{i(bs),a(!s)},className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700",children:s?"Cancel":"+ New Assessment"})]})]}),s?e.jsxs("div",{className:"rounded-lg border border-blue-100 bg-blue-50 p-6",children:[e.jsx("h3",{className:"text-lg font-medium text-blue-900 mb-4",children:n.id?"Edit Assessment":"New Assessment"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-semibold text-blue-800 border-b border-blue-200 pb-1",children:"1. Process Details"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cia-function",className:"block text-sm font-medium text-slate-700 mb-1",children:"Business Function"}),e.jsxs("select",{id:"cia-function",value:n.function,onChange:w=>i({function:w.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none",children:[e.jsx("option",{value:"",children:"Select a function..."}),D.map(w=>e.jsx("option",{value:w,children:w},w))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Process Name"}),e.jsx("input",{type:"text",placeholder:"e.g. Payroll Run",value:n.process,onChange:w=>i({process:w.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:["Process Ref #"," ",e.jsx("span",{className:"text-xs text-slate-400 font-normal",children:"(Optional)"})]}),e.jsx("input",{type:"text",placeholder:"e.g. P-101",value:n.processRef,onChange:w=>i({processRef:w.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none"}),e.jsx("input",{type:"url",placeholder:"Link URL (optional)",value:n.processRefUrl||"",onChange:w=>i({processRefUrl:w.target.value}),className:"w-full mt-1 p-2 border border-slate-300 rounded outline-none text-xs"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:["Benefit Ref #"," ",e.jsx("span",{className:"text-xs text-slate-400 font-normal",children:"(Optional)"})]}),e.jsx("input",{type:"text",placeholder:"e.g. B-05",value:n.benefitsRef,onChange:w=>i({benefitsRef:w.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none"}),e.jsx("input",{type:"url",placeholder:"Link URL (optional)",value:n.benefitsRefUrl||"",onChange:w=>i({benefitsRefUrl:w.target.value}),className:"w-full mt-1 p-2 border border-slate-300 rounded outline-none text-xs"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"# Impacted"}),e.jsx("input",{type:"number",value:n.peopleImpacted,onChange:w=>i({peopleImpacted:Number(w.target.value)}),className:"w-full p-2 border border-slate-300 rounded outline-none"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Impact Date"}),e.jsx("input",{type:"date",value:n.impactDate,onChange:w=>i({impactDate:w.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-semibold text-blue-800 border-b border-blue-200 pb-1",children:"2. Change Impact"}),["complexity","frequency","distance"].map(w=>e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1 capitalize",children:w==="distance"?"Distance (x2 Weight)":w}),e.jsx("select",{value:n[w],onChange:L=>i({[w]:Number(L.target.value)}),className:"w-full p-2 border border-slate-300 rounded outline-none text-sm",children:Jt[w].map(L=>e.jsx("option",{value:L.value,children:L.label},L.value))})]},w))]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-semibold text-blue-800 border-b border-blue-200 pb-1",children:"3. Business Readiness"}),["attitude","conditions"].map(w=>e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1 capitalize",children:w}),e.jsx("select",{value:n[w],onChange:L=>i({[w]:Number(L.target.value)}),className:"w-full p-2 border border-slate-300 rounded outline-none text-sm",children:Jt[w].map(L=>e.jsx("option",{value:L.value,children:L.label},L.value))})]},w)),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:["resources","network"].map(w=>e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1 capitalize",children:w}),e.jsx("select",{value:n[w],onChange:L=>i({[w]:Number(L.target.value)}),className:"w-full p-2 border border-slate-300 rounded outline-none text-sm",children:Jt[w].map(L=>e.jsx("option",{value:L.value,children:L.label},L.value))})]},w))}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"Capability (ADKAR)"}),e.jsx("select",{value:n.capability,onChange:w=>i({capability:Number(w.target.value)}),className:"w-full p-2 border border-slate-300 rounded outline-none text-sm",children:Jt.capability.map(w=>e.jsx("option",{value:w.value,children:w.label},w.value))})]})]})]}),e.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[e.jsx("button",{type:"button",onClick:()=>a(!1),className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200",children:"Cancel"}),e.jsx("button",{type:"button",onClick:l,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700",children:"Save Assessment"})]})]}):null,e.jsx(Un,{selects:[{key:"function",label:"Function",value:u,options:B,onChange:C},{key:"process",label:"Process",value:R,options:V,onChange:j}],onReset:()=>{C(""),j("")}}),e.jsx("div",{className:"overflow-x-auto rounded-lg border border-slate-200 bg-white",children:e.jsxs("table",{className:"min-w-full text-sm text-left border-collapse",children:[e.jsx("thead",{className:"bg-slate-50 text-slate-600 font-medium border-b border-slate-200",children:e.jsxs("tr",{children:[re.map(w=>e.jsxs("th",{onClick:()=>k(w.key),className:`px-4 py-3 cursor-pointer hover:bg-slate-100 ${w.center?"text-center":""}`,children:[w.label,le(w.key)]},w.key)),e.jsx("th",{className:"px-4 py-3 text-right",children:"Actions"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:p.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:9,className:"px-4 py-8 text-center text-slate-500 italic",children:t.length===0?'No assessments added yet. Click "New Assessment" to begin.':"No matching records found."})}):p.map(w=>{const L=Ct(w),ne=co(L.readinessScore-L.changeScore,{blue:30,green:10,amber:-10});return e.jsxs("tr",{className:"hover:bg-slate-50",children:[e.jsx("td",{className:"px-4 py-3 font-medium text-slate-800",children:w.function}),e.jsx("td",{className:"px-4 py-3 text-slate-600",children:w.process}),e.jsx("td",{className:"px-2 py-3 text-xs",children:w.processRefUrl?e.jsx("a",{href:w.processRefUrl,target:"_blank",rel:"noreferrer",className:"text-blue-600 underline hover:text-blue-800",children:w.processRef||"-"}):e.jsx("span",{className:"text-slate-500",children:w.processRef||"-"})}),e.jsx("td",{className:"px-2 py-3 text-xs",children:e.jsx("span",{className:`inline-flex rounded-full border px-2 py-0.5 ${mo(ne)}`,title:"Benefit status: readiness vs. change demand",children:w.benefitsRefUrl?e.jsx("a",{href:w.benefitsRefUrl,target:"_blank",rel:"noreferrer",className:"underline",children:w.benefitsRef||"-"}):w.benefitsRef||"-"})}),e.jsx("td",{className:"px-4 py-3 text-slate-600",children:w.peopleImpacted}),e.jsx("td",{className:"px-4 py-3 text-slate-600",children:w.impactDate}),e.jsx("td",{className:"px-4 py-3 text-center",children:e.jsx(si,{score:L.changeScore,type:"change"})}),e.jsx("td",{className:"px-4 py-3 text-center",children:e.jsx(si,{score:L.readinessScore,type:"readiness"})}),e.jsx("td",{className:"px-4 py-3 text-right",children:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(mt,{onClick:()=>o(w),title:"Edit assessment",children:e.jsx(bn,{})}),e.jsx(mt,{onClick:()=>c(w.id),title:"Delete assessment",variant:"danger",children:e.jsx(xn,{})})]})})]},w.id)})})]})})]})}function wm({items:t}){const[n,s]=g.useState("All"),[a,i]=g.useState(!1),[l,o]=g.useState("readinessScore"),[c,d]=g.useState("desc"),m=g.useMemo(()=>["All",...new Set(t.map(x=>x.function).filter(Boolean))].sort(),[t]),r=g.useMemo(()=>n==="All"?t:t.filter(x=>x.function===n),[t,n]),f=g.useMemo(()=>{const x={};return r.forEach(S=>{x[S.function]||(x[S.function]={count:0,totalReadiness:0,totalChange:0,totalImpacted:0,weightedReadinessSum:0,weightedChangeSum:0});const u=Ct(S),C=S.peopleImpacted||0,R=x[S.function];R.count+=1,R.totalReadiness+=u.readinessScore,R.totalChange+=u.changeScore,R.totalImpacted+=C,R.weightedReadinessSum+=u.readinessScore*C,R.weightedChangeSum+=u.changeScore*C}),Object.keys(x).map(S=>{const u=x[S],C=a&&u.totalImpacted>0?u.weightedReadinessSum/u.totalImpacted:u.totalReadiness/u.count,R=a&&u.totalImpacted>0?u.weightedChangeSum/u.totalImpacted:u.totalChange/u.count;return{name:S,avgReadiness:C,avgChange:R,totalImpacted:u.totalImpacted}}).sort((S,u)=>c==="asc"?S.avgReadiness-u.avgReadiness:u.avgReadiness-S.avgReadiness)},[r,a,c]),b=g.useMemo(()=>{const x=r.length,E=r.reduce((u,C)=>u+(C.peopleImpacted||0),0);let S=0;return x>0&&(a&&E>0?S=r.reduce((C,R)=>C+Ct(R).readinessScore*(R.peopleImpacted||0),0)/E:S=r.reduce((u,C)=>u+Ct(C).readinessScore,0)/x),{totalProcesses:x,totalPeople:E,avgReadiness:S}},[r,a]),h=g.useMemo(()=>{const x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],E={};return[...new Set(r.map(u=>u.function))].forEach(u=>{E[u]=Array.from({length:12},()=>({count:0,changeSum:0,readinessSum:0,capabilitySum:0}))}),r.forEach(u=>{var C;if(u.impactDate&&u.function){const R=new Date(u.impactDate);if(!Number.isNaN(R.getTime())){const j=R.getMonth(),k=(C=E[u.function])==null?void 0:C[j];if(k){const{changeScore:p,readinessScore:B}=Ct(u);k.count+=1,k.changeSum+=p,k.readinessSum+=B,k.capabilitySum+=u.capability}}}}),{months:x,grid:E}},[r]);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-4 flex flex-col md:flex-row justify-between items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2 w-full md:w-auto",children:[e.jsx("span",{className:"font-medium text-sm text-slate-600",children:"Filter:"}),e.jsx("select",{value:n,onChange:x=>s(x.target.value),className:"p-2 border border-slate-300 rounded text-sm min-w-[200px] outline-none",children:m.map(x=>e.jsx("option",{value:x,children:x},x))})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`text-sm font-medium ${a?"text-slate-500":"text-blue-600"}`,children:"Simple Avg"}),e.jsx("button",{type:"button",onClick:()=>i(!a),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${a?"bg-blue-600":"bg-slate-200"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${a?"translate-x-6":"translate-x-1"}`})}),e.jsx("span",{className:`text-sm font-medium ${a?"text-blue-600":"text-slate-500"}`,children:"Weighted by Impact"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-4",style:{borderLeftWidth:4,borderLeftColor:"#3b82f6"},children:[e.jsx("h3",{className:"text-slate-500 text-sm font-medium",children:"Total Processes"}),e.jsx("p",{className:"text-2xl font-bold text-slate-800",children:b.totalProcesses}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Filtered View"})]}),e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-4",style:{borderLeftWidth:4,borderLeftColor:"#f59e0b"},children:[e.jsx("h3",{className:"text-slate-500 text-sm font-medium",children:"Total People Impacted"}),e.jsx("p",{className:"text-2xl font-bold text-slate-800",children:b.totalPeople}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"across all processes"})]}),e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-4",style:{borderLeftWidth:4,borderLeftColor:"#22c55e"},children:[e.jsx("h3",{className:"text-slate-500 text-sm font-medium",children:"Avg Readiness"}),e.jsxs("div",{className:"flex items-baseline gap-2",children:[e.jsxs("p",{className:"text-2xl font-bold text-slate-800",children:[b.avgReadiness.toFixed(0),"%"]}),a?e.jsx("span",{className:"text-xs font-bold text-blue-600 bg-blue-50 px-1 rounded",children:"Weighted"}):null]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:a?"Based on people count":"Simple average of scores"})]})]}),e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4",children:[e.jsx("h3",{className:"text-lg font-bold text-slate-800",children:"Change Heatmap"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-slate-600",children:"Overlay:"}),e.jsxs("select",{value:l,onChange:x=>o(x.target.value),className:"p-1 border border-slate-300 rounded text-sm outline-none",children:[e.jsx("option",{value:"count",children:"Count of Changes"}),e.jsx("option",{value:"changeScore",children:"Avg Change Impact"}),e.jsx("option",{value:"readinessScore",children:"Avg Readiness"}),e.jsx("option",{value:"capability",children:"Avg Capability (ADKAR)"})]})]})]}),e.jsxs("p",{className:"text-sm text-slate-500 mb-6",children:[l==="count"&&"Visualizing periods of high change activity (count).",l==="changeScore"&&"Visualizing average impact scores (Higher % = More Impact).",l==="readinessScore"&&"Visualizing average readiness scores (Higher % = More Ready).",l==="capability"&&"Visualizing team capability scores on a 1-4 scale (Higher = More Capable)."]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("div",{className:"min-w-[800px]",children:[e.jsxs("div",{className:"flex border-b border-slate-200 pb-2",children:[e.jsx("div",{className:"w-40 font-semibold text-sm text-slate-600 shrink-0",children:"Function"}),h.months.map(x=>e.jsx("div",{className:"flex-1 text-center text-xs font-medium text-slate-500",children:x},x))]}),Object.keys(h.grid).map(x=>e.jsxs("div",{className:"flex items-center border-b border-slate-100 py-2 hover:bg-slate-50",children:[e.jsx("div",{className:"w-40 text-sm font-medium text-slate-800 shrink-0 truncate pr-2",children:x}),h.grid[x].map((E,S)=>{const{count:u,changeSum:C,readinessSum:R,capabilitySum:j}=E;let k="-",p="bg-slate-50",B="text-slate-300";if(u>0){if(B="text-white",l==="count")k=u,u===1?p="bg-blue-200":u===2?p="bg-blue-400":u>=3&&(p="bg-blue-600"),u>=5&&(p="bg-indigo-800");else if(l==="changeScore"){const D=C/u;k=`${D.toFixed(0)}%`,D>=70?p="bg-red-500":D>=40?p="bg-amber-400":p="bg-green-500"}else if(l==="readinessScore"){const D=R/u;k=`${D.toFixed(0)}%`,D>=70?p="bg-green-500":D>=40?p="bg-amber-400":p="bg-red-500"}else if(l==="capability"){const D=j/u;k=D.toFixed(1),D>=3?p="bg-green-500":D>=2?p="bg-amber-400":p="bg-red-500"}}return e.jsx("div",{className:"flex-1 flex justify-center",children:e.jsx("div",{title:`${x} in ${h.months[S]}: ${u} changes`,className:`w-10 h-8 rounded flex items-center justify-center text-xs font-bold ${p} ${B}`,children:k})},S)})]},x)),Object.keys(h.grid).length===0?e.jsx("div",{className:"p-8 text-center text-slate-400 italic",children:"No data available for heatmap"}):null]})})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"text-lg font-bold text-slate-800",children:"Readiness by Function"}),e.jsx("button",{type:"button",onClick:()=>d(x=>x==="asc"?"desc":"asc"),className:"text-xs text-slate-500 hover:text-blue-600 bg-slate-50 px-2 py-1 rounded border border-slate-200",children:c==="asc"?"Lowest First":"Highest First"})]}),f.length===0?e.jsx("p",{className:"text-slate-400 italic",children:"No data available"}):e.jsx("div",{className:"space-y-4",children:f.map(x=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsx("span",{className:"font-medium",children:x.name}),e.jsxs("span",{className:"text-slate-500",children:[x.avgReadiness.toFixed(1),"%"]})]}),e.jsx("div",{className:"w-full bg-slate-100 rounded-full h-2.5",children:e.jsx("div",{className:`h-2.5 rounded-full ${x.avgReadiness<50?"bg-red-500":x.avgReadiness<70?"bg-amber-400":"bg-green-500"}`,style:{width:`${x.avgReadiness}%`}})})]},x.name))})]}),e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-6",children:[e.jsx("h3",{className:"text-lg font-bold text-slate-800 mb-2",children:"Change Risk Matrix (Bubble Chart)"}),e.jsx("p",{className:"text-xs text-slate-500 mb-6",children:"Size of bubble = # People Impacted"}),e.jsxs("div",{className:"relative h-64 border-l border-b border-slate-300 bg-slate-50",children:[e.jsx("div",{className:"absolute top-2 right-2 text-xs font-bold text-amber-600 bg-amber-50 px-2 rounded",children:"Monitor"}),e.jsx("div",{className:"absolute top-2 left-2 text-xs font-bold text-red-600 bg-red-50 px-2 rounded",children:"Critical"}),e.jsx("div",{className:"absolute bottom-2 left-2 text-xs font-bold text-amber-600 bg-amber-50 px-2 rounded",children:"Support"}),e.jsx("div",{className:"absolute bottom-2 right-2 text-xs font-bold text-green-600 bg-green-50 px-2 rounded",children:"Safe"}),r.map(x=>{const{changeScore:E,readinessScore:S}=Ct(x),u=x.peopleImpacted||10,C=Math.min(Math.max(u/5,12),48);return e.jsx("div",{title:`${x.process}: ${x.peopleImpacted} people impacted`,className:"absolute rounded-full bg-blue-600/80 border border-blue-700 shadow-sm transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform",style:{left:`${S}%`,bottom:`${E}%`,width:`${C}px`,height:`${C}px`}},x.id)})]}),e.jsxs("div",{className:"flex justify-between mt-2 text-xs text-slate-500",children:[e.jsx("span",{children:"Low Readiness"}),e.jsx("span",{children:"High Readiness"})]})]})]})]})}function Nm(){return e.jsx("div",{className:"max-w-4xl mx-auto space-y-8",children:e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-800 mb-4",children:"Assessment Criteria Guide"}),e.jsx("p",{className:"text-slate-600 mb-8",children:"The following criteria are used to calculate the Change Impact Score and the Readiness Score. Use this guide to ensure consistency across all process assessments."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-blue-900 border-b-2 border-blue-200 pb-2 mb-4",children:"Change Impact Score"}),e.jsx("p",{className:"text-xs text-slate-500 mb-4 italic",children:"Formula: (Complexity + Frequency + (2 x Distance)) / 16"}),e.jsx("div",{className:"space-y-6",children:["complexity","frequency","distance"].map(t=>e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-slate-800 mb-2 capitalize",children:t}),e.jsx("ul",{className:"text-sm text-slate-600 space-y-1",children:[...Jt[t]].reverse().map(n=>e.jsxs("li",{children:[e.jsxs("strong",{className:"text-slate-900",children:[n.value,":"]})," ",n.label.replace(/^\d+ - /,"")]},n.value))})]},t))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-green-900 border-b-2 border-green-200 pb-2 mb-4",children:"Readiness Score"}),e.jsx("p",{className:"text-xs text-slate-500 mb-4 italic",children:"Formula: (Attitude + Conditions + Resources + Network + Capability) / 20"}),e.jsx("div",{className:"space-y-6",children:["attitude","conditions","resources","network","capability"].map(t=>e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-slate-800 mb-2 capitalize",children:t}),e.jsx("ul",{className:"text-sm text-slate-600 space-y-1",children:[...Jt[t]].reverse().map(n=>e.jsxs("li",{children:[e.jsxs("strong",{className:"text-slate-900",children:[n.value,":"]})," ",n.label.replace(/^\d+ - /,"")]},n.value))})]},t))})]})]})]})})}function jm(t){const n=[];let s="",a=!1;for(let i=0;i<t.length;i+=1){const l=t[i],o=t[i+1];a?l==='"'&&o==='"'?(s+='"',i+=1):l==='"'?a=!1:s+=l:l==='"'?a=!0:l===","?(n.push(s),s=""):s+=l}return n.push(s),n}function km({embedded:t=!1}={}){const[n,s]=g.useState(()=>it(ei)||[]),[a,i]=g.useState("assessment"),[l,o]=g.useState(!1),[c,d]=g.useState(bs),m=g.useRef(null);g.useEffect(()=>{ze(ei,n)},[n]);const r=j=>{d(k=>({...k,...j}))},f=()=>{if(!c.function||!c.process){window.alert("Please enter at least a Business Function and Process Name.");return}const j={...c,id:c.id||ni(),peopleImpacted:Number(c.peopleImpacted)||0,timestamp:new Date().toISOString()};c.id?s(k=>k.map(p=>p.id===c.id?j:p)):s(k=>[...k,j]),d(bs),o(!1)},b=j=>{d({...j}),o(!0),i("assessment")},h=j=>{window.confirm("Are you sure you want to delete this assessment?")&&s(k=>k.filter(p=>p.id!==j))},x=()=>{const j=["Function","Process","Process Ref","Benefit Ref","People Impacted","Impact Date","Change Score","Readiness Score","Complexity","Frequency","Distance","Attitude","Conditions","Resources","Network","Capability"],k=n.map(p=>{const{changeScore:B,readinessScore:D}=Ct(p);return[`"${p.function}"`,`"${p.process}"`,`"${p.processRef||""}"`,`"${p.benefitsRef||""}"`,p.peopleImpacted,p.impactDate,`${B.toFixed(2)}%`,`${D.toFixed(2)}%`,p.complexity,p.frequency,p.distance,p.attitude,p.conditions,p.resources,p.network,p.capability].join(",")});Ut("change_impact_assessment.csv",[j.join(","),...k].join(`
`),"text/csv")},E=()=>{var j;(j=m.current)==null||j.click()},S=j=>{var B;const k=(B=j.target.files)==null?void 0:B[0];if(!k)return;const p=new FileReader;p.onload=D=>{var V;try{const re=String(((V=D.target)==null?void 0:V.result)||"").split(`
`).map(L=>L.trim()).filter(Boolean);if(re.length<2)return;const w=[];for(let L=1;L<re.length;L+=1){const ne=jm(re[L]);ne.length>=16&&w.push({id:ni(),function:ne[0],process:ne[1],processRef:ne[2]||"",benefitsRef:ne[3]||"",peopleImpacted:parseInt(ne[4],10)||0,impactDate:ne[5],complexity:parseInt(ne[8],10)||1,frequency:parseInt(ne[9],10)||1,distance:parseInt(ne[10],10)||1,attitude:parseInt(ne[11],10)||2,conditions:parseInt(ne[12],10)||2,resources:parseInt(ne[13],10)||2,network:parseInt(ne[14],10)||1,capability:parseInt(ne[15],10)||1,timestamp:new Date().toISOString()})}w.length>0?(window.confirm(`Found ${w.length} valid records. Append them to your current list? (Cancel to Replace)`)?s(L=>[...L,...w]):s(w),window.alert("Import successful!")):window.alert("Could not parse any valid records. Please ensure CSV matches the export format.")}catch(le){console.error("Import Error:",le),window.alert("Failed to import CSV. Please check the file format.")}finally{j.target.value=""}},p.readAsText(k)},u=()=>{window.confirm("This will load sample data for testing. Add to existing data? (Cancel to Replace)")?s(j=>[...j,...ti.map(k=>({...k,timestamp:new Date().toISOString()}))]):s(ti.map(j=>({...j,timestamp:new Date().toISOString()})))},C=e.jsx("header",{className:t?"flex flex-wrap items-center justify-between gap-3 pb-4":"bg-white border-b border-slate-200 shadow-sm px-6 py-4 flex flex-wrap items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg font-bold text-slate-800",children:"Change Impact Assessment Tool"}),e.jsx("p",{className:"text-xs text-slate-500",children:"Process impact vs business readiness scoring and analysis"})]})}),R=e.jsxs("div",{className:t?"":"max-w-7xl mx-auto p-4 md:p-8",children:[e.jsxs("div",{className:"flex gap-4 mb-6 border-b border-slate-200 pb-1 overflow-x-auto",children:[e.jsx("button",{type:"button",onClick:()=>i("assessment"),className:`pb-2 px-2 font-medium whitespace-nowrap ${a==="assessment"?"text-blue-600 border-b-2 border-blue-600":"text-slate-500 hover:text-slate-800"}`,children:"Assessments"}),e.jsx("button",{type:"button",onClick:()=>i("dashboard"),className:`pb-2 px-2 font-medium whitespace-nowrap ${a==="dashboard"?"text-blue-600 border-b-2 border-blue-600":"text-slate-500 hover:text-slate-800"}`,children:"Dashboard & Analysis"}),e.jsx("button",{type:"button",onClick:()=>i("guide"),className:`pb-2 px-2 font-medium whitespace-nowrap ${a==="guide"?"text-blue-600 border-b-2 border-blue-600":"text-slate-500 hover:text-slate-800"}`,children:"Scoring Guide"})]}),a==="assessment"?e.jsx(Sm,{items:n,formData:c,showForm:l,onShowFormChange:o,onFormDataChange:r,onSave:f,onEdit:b,onDelete:h,onImportClick:E,onImportFile:S,onExport:x,onLoadDemo:u,fileInputRef:m}):null,a==="dashboard"?e.jsx(wm,{items:n}):null,a==="guide"?e.jsx(Nm,{}):null]});return t?e.jsxs("div",{children:[C,R]}):e.jsxs("div",{className:"min-h-screen bg-slate-100 text-slate-900",children:[C,R]})}const ai="nhs-raid-log",ii=["Risk","Assumption","Issue","Dependency"],oi=["Open","In Progress","Closed"],Cm={Risk:"bg-red-100 text-red-800 border-red-300",Assumption:"bg-blue-100 text-blue-800 border-blue-300",Issue:"bg-amber-100 text-amber-800 border-amber-300",Dependency:"bg-purple-100 text-purple-800 border-purple-300"},Em={Open:"bg-slate-100 text-slate-700","In Progress":"bg-blue-100 text-blue-700",Closed:"bg-green-100 text-green-700"},Cn={id:null,type:"Risk",title:"",description:"",owner:"",status:"Open",dateRaised:new Date().toISOString().slice(0,10),targetDate:"",likelihood:2,impact:2,notes:""};function Im(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function Am(t){return t.type!=="Risk"||!t.likelihood||!t.impact?null:t.likelihood*t.impact}function Om({severity:t}){const n=co(16-t,{blue:13,green:9,amber:5});return e.jsx("span",{className:`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${mo(n)}`,children:t})}function _m({embedded:t=!1,trustName:n="",projectName:s="",teamMembers:a=[]}={}){const[i,l]=g.useState(()=>it(ai)||[]),[o,c]=g.useState(!1),[d,m]=g.useState(Cn),[r,f]=g.useState(""),[b,h]=g.useState(""),[x,E]=g.useState("");g.useEffect(()=>{ze(ai,i)},[i]);const S=p=>m(B=>({...B,...p})),u=g.useMemo(()=>Array.from(new Set(i.map(p=>p.owner))).filter(Boolean).sort(),[i]),C=g.useMemo(()=>{let p=[...i];return r&&(p=p.filter(B=>B.type===r)),b&&(p=p.filter(B=>B.owner===b)),x&&(p=p.filter(B=>B.status===x)),p},[i,r,b,x]),R=()=>{if(!d.title.trim()){window.alert("Please enter a title.");return}const p={...d,id:d.id||Im()};l(B=>d.id?B.map(D=>D.id===d.id?p:D):[...B,p]),m(Cn),c(!1)},j=p=>{m({...p}),c(!0)},k=p=>{window.confirm("Are you sure you want to delete this item?")&&l(B=>B.filter(D=>D.id!==p))};return e.jsxs("div",{children:[e.jsx("header",{className:t?"flex flex-wrap items-center justify-between gap-3 pb-4":"bg-white border-b border-slate-200 shadow-sm px-6 py-4 flex flex-wrap items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg font-bold text-slate-800",children:"RAID Log"}),e.jsxs("p",{className:"text-xs text-slate-500",children:["Risks, Assumptions, Issues and Dependencies",n||s?` — ${n||"Your Organisation"} / ${s||"Your Project/Programme"}`:""]})]})}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-800",children:"RAID Items"}),e.jsx("button",{type:"button",onClick:()=>{S(Cn),m(Cn),c(!o)},className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700",children:o?"Cancel":"+ New Item"})]}),o?e.jsxs("div",{className:"rounded-lg border border-blue-100 bg-blue-50 p-6",children:[e.jsx("h3",{className:"text-lg font-medium text-blue-900 mb-4",children:d.id?"Edit Item":"New Item"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-type",className:"block text-sm font-medium text-slate-700 mb-1",children:"Type"}),e.jsx("select",{id:"raid-type",value:d.type,onChange:p=>S({type:p.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none",children:ii.map(p=>e.jsx("option",{value:p,children:p},p))})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-title",className:"block text-sm font-medium text-slate-700 mb-1",children:"Title"}),e.jsx("input",{id:"raid-title",type:"text",value:d.title,onChange:p=>S({title:p.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-owner",className:"block text-sm font-medium text-slate-700 mb-1",children:"Owner"}),e.jsxs("select",{id:"raid-owner",value:d.owner,onChange:p=>S({owner:p.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none",children:[e.jsx("option",{value:"",children:"Unassigned"}),a.map(p=>e.jsx("option",{value:p.name,children:p.name},p.id))]})]}),e.jsxs("div",{className:"lg:col-span-3",children:[e.jsx("label",{htmlFor:"raid-description",className:"block text-sm font-medium text-slate-700 mb-1",children:"Description"}),e.jsx("textarea",{id:"raid-description",value:d.description,onChange:p=>S({description:p.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none h-20"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-status",className:"block text-sm font-medium text-slate-700 mb-1",children:"Status"}),e.jsx("select",{id:"raid-status",value:d.status,onChange:p=>S({status:p.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none",children:oi.map(p=>e.jsx("option",{value:p,children:p},p))})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-dateRaised",className:"block text-sm font-medium text-slate-700 mb-1",children:"Date Raised"}),e.jsx("input",{id:"raid-dateRaised",type:"date",value:d.dateRaised,onChange:p=>S({dateRaised:p.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-targetDate",className:"block text-sm font-medium text-slate-700 mb-1",children:"Target Date"}),e.jsx("input",{id:"raid-targetDate",type:"date",value:d.targetDate,onChange:p=>S({targetDate:p.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none"})]}),d.type==="Risk"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-likelihood",className:"block text-sm font-medium text-slate-700 mb-1",children:"Likelihood (1-4)"}),e.jsx("select",{id:"raid-likelihood",value:d.likelihood,onChange:p=>S({likelihood:Number(p.target.value)}),className:"w-full p-2 border border-slate-300 rounded outline-none",children:[1,2,3,4].map(p=>e.jsx("option",{value:p,children:p},p))})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"raid-impact",className:"block text-sm font-medium text-slate-700 mb-1",children:"Impact (1-4)"}),e.jsx("select",{id:"raid-impact",value:d.impact,onChange:p=>S({impact:Number(p.target.value)}),className:"w-full p-2 border border-slate-300 rounded outline-none",children:[1,2,3,4].map(p=>e.jsx("option",{value:p,children:p},p))})]})]}):null,e.jsxs("div",{className:"lg:col-span-3",children:[e.jsx("label",{htmlFor:"raid-notes",className:"block text-sm font-medium text-slate-700 mb-1",children:"Notes"}),e.jsx("textarea",{id:"raid-notes",value:d.notes,onChange:p=>S({notes:p.target.value}),className:"w-full p-2 border border-slate-300 rounded outline-none h-16"})]})]}),e.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[e.jsx("button",{type:"button",onClick:()=>c(!1),className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200",children:"Cancel"}),e.jsx("button",{type:"button",onClick:R,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700",children:"Save Item"})]})]}):null,e.jsx(Un,{selects:[{key:"type",label:"Filter by type",value:r,options:ii,onChange:f},{key:"owner",label:"Filter by owner",value:b,options:u,onChange:h},{key:"status",label:"Filter by status",value:x,options:oi,onChange:E}],onReset:()=>{f(""),h(""),E("")}}),e.jsx("div",{className:"overflow-x-auto rounded-lg border border-slate-200 bg-white",children:e.jsxs("table",{className:"min-w-full text-sm text-left border-collapse",children:[e.jsx("thead",{className:"bg-slate-50 text-slate-600 font-medium border-b border-slate-200",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3",children:"Type"}),e.jsx("th",{className:"px-4 py-3",children:"Title"}),e.jsx("th",{className:"px-4 py-3",children:"Owner"}),e.jsx("th",{className:"px-4 py-3",children:"Status"}),e.jsx("th",{className:"px-4 py-3",children:"Target Date"}),e.jsx("th",{className:"px-4 py-3 text-center",children:"Severity"}),e.jsx("th",{className:"px-4 py-3 text-right",children:"Actions"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:C.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:7,className:"px-4 py-8 text-center text-slate-500 italic",children:i.length===0?'No RAID items added yet. Click "New Item" to begin.':"No matching records found."})}):C.map(p=>{const B=Am(p);return e.jsxs("tr",{className:"hover:bg-slate-50",children:[e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${Cm[p.type]}`,children:p.type})}),e.jsx("td",{className:"px-4 py-3 font-medium text-slate-800",children:p.title}),e.jsx("td",{className:"px-4 py-3 text-slate-600",children:p.owner||"Unassigned"}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${Em[p.status]}`,children:p.status})}),e.jsx("td",{className:"px-4 py-3 text-slate-600",children:p.targetDate}),e.jsx("td",{className:"px-4 py-3 text-center",children:B!==null?e.jsx(Om,{severity:B}):null}),e.jsx("td",{className:"px-4 py-3 text-right",children:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(mt,{onClick:()=>j(p),title:"Edit item",children:e.jsx(bn,{})}),e.jsx(mt,{onClick:()=>k(p.id),title:"Delete item",variant:"danger",children:e.jsx(xn,{})})]})})]},p.id)})})]})})]})]})}const Zn="nhs-stakeholder-analysis",En={Low:1,Medium:2,High:3,"Very High":4},Js={Resistant:1,Opposed:2,Ambivalent:3,Complying:4,Supporting:5,Leading:6},Xs={Unaware:1,Aware:2,Informed:3,Equipped:4,Practised:5,Exemplary:6},xs={Resistant:"Actively opposes the change and may work against it.",Opposed:"Disagrees with the change but is not actively undermining it.",Ambivalent:"Neither supports nor opposes the change; not yet engaged.",Complying:"Follows the change because required to, without genuine buy-in.",Supporting:"Agrees with the change and cooperates willingly.",Leading:"Actively champions the change and helps bring others along."},ys={Unaware:"Has not yet been informed the change is happening.",Aware:"Knows the change is happening but not yet why or what it means for them.",Informed:"Understands why the change is happening and what will be expected.",Equipped:"Has the knowledge and skills needed to work in the new way.",Practised:"Has started using the new way of working with growing confidence.",Exemplary:"Fully proficient, and can support or coach others through the change."},ri=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"];function dn(t=""){return`${t}${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function Rm(){return{groups:["SRO","Manager","Trades Union","Programme","Project","Trainer","Clinical","Arms Length Body","CCG","GP","CSU","Staff"],subGroups:["LRH","GH","Community","CGC office"],departments:["Ward 1","Ward 2","Ward 3","Ward 4","Pharmacy","Pathology","A+E","Main Reception","Exec Offices","GP Practices","IT","HR","Comms"],relationships:["Customer","Provider","Influencer","Governance"],commitments:["Resistant","Opposed","Ambivalent","Complying","Supporting","Leading"],capabilities:["Unaware","Aware","Informed","Equipped","Practised","Exemplary"],ratings:["Low","Medium","High","Very High"],engagementActivities:[{id:"act-1",name:"Targetted email bulletin/letter",inform:"High",consult:"Medium",involve:"",collaborate:"",empower:""},{id:"act-2",name:"General email bulletin/letter",inform:"Medium",consult:"",involve:"",collaborate:"",empower:""},{id:"act-3",name:"Targetted X/Twitter Feed",inform:"High",consult:"Medium",involve:"",collaborate:"",empower:""},{id:"act-4",name:"Case Study",inform:"High",consult:"Medium",involve:"",collaborate:"",empower:""},{id:"act-5",name:"Programme/Product/Service engagement pack",inform:"High",consult:"High",involve:"Medium",collaborate:"",empower:""},{id:"act-6",name:"Presence at corporate events",inform:"Medium",consult:"",involve:"Medium",collaborate:"",empower:""},{id:"act-7",name:"Face to Face meeting",inform:"High",consult:"High",involve:"High",collaborate:"High",empower:"Medium"},{id:"act-8",name:"Updates to website and specific programme pages",inform:"Medium",consult:"",involve:"",collaborate:"",empower:""},{id:"act-9",name:"Webinar",inform:"High",consult:"Medium",involve:"Medium",collaborate:"Medium",empower:"Medium"},{id:"act-10",name:"Fact sheet",inform:"High",consult:"",involve:"",collaborate:"",empower:""},{id:"act-11",name:"Ways of working leaflet",inform:"High",consult:"",involve:"Medium",collaborate:"",empower:""},{id:"act-12",name:"Core setting engagement pack",inform:"",consult:"",involve:"High",collaborate:"High",empower:"High"},{id:"act-13",name:"Roadshows",inform:"High",consult:"High",involve:"Medium",collaborate:"",empower:""},{id:"act-14",name:"Briefings",inform:"High",consult:"Medium",involve:"",collaborate:"",empower:""},{id:"act-15",name:"Workshops",inform:"Medium",consult:"High",involve:"High",collaborate:"Medium",empower:""},{id:"act-16",name:"Focus Groups",inform:"Medium",consult:"High",involve:"Medium",collaborate:"",empower:""},{id:"act-17",name:"Secondments",inform:"",consult:"Medium",involve:"High",collaborate:"High",empower:"Medium"},{id:"act-18",name:"Steering Committee",inform:"Medium",consult:"High",involve:"High",collaborate:"High",empower:"High"}]}}function es(){return{stakeholders:[],engagementLog:[],referenceData:Rm(),sortConfig:{key:"name",direction:"ascending"},filterConfig:{},engagementSortConfig:{key:"stakeholderId",direction:"ascending"},engagementFilterConfig:{},mapFilterConfig:{group:"All",subGroup:"All",department:"All",relationship:"All"},mapAxisConfig:{x:"power",y:"interest"},activitySortConfig:{key:"name",direction:"ascending"},dashboardChartConfig:{chart1:"mapping",chart2:"commitmentGap",chart3:"group",chart4:"capabilityGap"},guidanceRead:!1}}function Rt(t){const n=En[t.interest]||0,s=En[t.impact]||0,a=En[t.power]||0,i=En[t.influence]||0;return{interest:n,impact:s,power:a,influence:i,pi:a+i,ii:n+s}}function li(t,n){return Rt(t)[n]}function mn(t,n){return t>=5&&n>=5?"Manage Closely":t>=5&&n<5?"Keep Satisfied":t<5&&n>=5?"Keep Informed":"Monitor"}const Dm={"Manage Closely":"bg-red-100 text-red-800","Keep Satisfied":"bg-blue-100 text-blue-800","Keep Informed":"bg-green-100 text-green-800",Monitor:"bg-gray-200 text-gray-800"};function vt(t,n,s){const a=s==="commitments"?Js:Xs;if(!a[t]||!a[n])return{gap:"",colorClass:""};const i=a[n]-a[t],l={0:"bg-blue-100 text-blue-800",1:"bg-green-100 text-green-800",2:"bg-yellow-100 text-yellow-800",3:"bg-red-100 text-red-800"},o=i>=4||i<0?"bg-red-200 text-red-900 font-bold":l[i]||"";return{gap:i,colorClass:o}}function $n(t){if(!t)return"none";const n=new Date;n.setHours(0,0,0,0);const s=Math.ceil((new Date(t).getTime()-n.getTime())/(1e3*60*60*24));return s<0?"red":s<=30?"yellow":"green"}const uo={red:"bg-red-100 text-red-800",yellow:"bg-yellow-100 text-yellow-800",green:"bg-green-100 text-green-800",none:""};function go(t){if(!t)return"";const[n,s,a]=t.split("-");return a&&s&&n?`${a}/${s}/${n}`:t}function Pm(t){return Object.fromEntries(t.map((n,s)=>[n,ri[s%ri.length]]))}const $m={name:"",groupSize:"",group:"",subGroup:"",department:"",relationship:"",interest:"",impact:"",power:"",influence:"",currentCommitment:"",targetCommitment:"",capabilityCurrent:"",capabilityTarget:"",targetDate:""},Tm={stakeholderId:"",engagementActivity:"",activity:"",owner:"",dueDate:"",status:"Planned",notes:""},Lm={name:"",inform:"",consult:"",involve:"",collaborate:"",empower:""};function Mm({stakeholder:t,referenceData:n,hasEngagementLogs:s,onSave:a,onCancel:i,onAddEngagement:l,onViewEngagements:o}){const[c,d]=g.useState(t),m=!!t.id,r=S=>d(u=>({...u,...S})),f=vt(c.currentCommitment,c.targetCommitment,"commitments"),b=vt(c.capabilityCurrent,c.capabilityTarget,"capabilities"),h=(S,u)=>e.jsxs("div",{children:[e.jsx("label",{htmlFor:`sh-${u}`,className:"block mb-2 text-sm font-medium text-gray-900",children:S}),e.jsxs("select",{id:`sh-${u}`,value:c[u],onChange:C=>r({[u]:C.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:[e.jsx("option",{value:""}),n.ratings.map(C=>e.jsx("option",{value:C,children:C},C))]})]}),x=(S,u,C)=>e.jsxs("div",{children:[e.jsx("label",{htmlFor:`sh-${u}`,className:"block mb-2 text-sm font-medium text-gray-900",children:S}),e.jsxs("select",{id:`sh-${u}`,value:c[u],onChange:R=>r({[u]:R.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:[e.jsx("option",{value:""}),C.map(R=>e.jsx("option",{value:R,children:R},R))]})]}),E=(S,u,C,R)=>{const j=c[u];return e.jsxs("div",{children:[e.jsx("label",{htmlFor:`sh-${u}`,className:"block mb-2 text-sm font-medium text-gray-900",children:S}),e.jsxs("select",{id:`sh-${u}`,value:j,title:R[j]||void 0,onChange:k=>r({[u]:k.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:[e.jsx("option",{value:""}),C.map(k=>e.jsx("option",{value:k,title:R[k],children:k},k))]}),j&&R[j]?e.jsx("p",{className:"mt-1 text-xs text-gray-500",children:R[j]}):null]})};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",children:e.jsxs("div",{className:"w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-lg bg-white shadow-xl p-6",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:m?"Edit Stakeholder":"Add New Stakeholder"}),s?e.jsx("button",{type:"button",onClick:o,className:"px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full hover:bg-green-200",children:"Has Engagement Log"}):null]}),e.jsx("button",{type:"button",onClick:i,className:"text-gray-400 hover:text-gray-900 rounded-lg text-sm p-1.5",children:"Close"})]}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-4 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"sh-name",className:"block mb-2 text-sm font-medium text-gray-900",children:"Name"}),e.jsx("input",{id:"sh-name",type:"text",required:!0,value:c.name,onChange:S=>r({name:S.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"sh-groupSize",className:"block mb-2 text-sm font-medium text-gray-900",children:"Group Size"}),e.jsx("input",{id:"sh-groupSize",type:"number",value:c.groupSize,onChange:S=>r({groupSize:S.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"})]}),x("Group","group",n.groups),x("Sub-Group","subGroup",n.subGroups),x("Department","department",n.departments),x("Relationship Category","relationship",n.relationships),h("Interest","interest"),h("Impact","impact"),E("Current Commitment","currentCommitment",n.commitments,xs),E("Target Commitment","targetCommitment",n.commitments,xs),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"Commitment Gap"}),e.jsx("div",{className:`w-full p-2.5 text-sm rounded-lg text-center font-bold ${f.colorClass||"bg-gray-100"}`,children:f.gap})]}),h("Influence","influence"),E("Current Capability","capabilityCurrent",n.capabilities,ys),E("Target Capability","capabilityTarget",n.capabilities,ys),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"Capability Gap"}),e.jsx("div",{className:`w-full p-2.5 text-sm rounded-lg text-center font-bold ${b.colorClass||"bg-gray-100"}`,children:b.gap})]}),h("Power","power"),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"sh-targetDate",className:"block mb-2 text-sm font-medium text-gray-900",children:"Target Date"}),e.jsx("input",{id:"sh-targetDate",type:"date",value:c.targetDate,onChange:S=>r({targetDate:S.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"})]})]}),e.jsxs("div",{className:"flex items-center justify-between mt-6",children:[e.jsx("div",{children:m?e.jsx("button",{type:"button",onClick:l,className:"text-white bg-teal-600 hover:bg-teal-700 font-medium rounded-lg text-sm px-5 py-2.5",children:"Add Engagement Log"}):null}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{type:"button",onClick:i,className:"text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5",children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>{if(!c.name.trim()){window.alert("Please enter a name.");return}a(c)},className:"text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5",children:"Save Stakeholder"})]})]})]})})}function Bm({log:t,stakeholders:n,activities:s,teamMembers:a,onSave:i,onCancel:l}){const[o,c]=g.useState(t),d=!!t.id,m=f=>c(b=>({...b,...f})),r=g.useMemo(()=>[...n].sort((f,b)=>f.name.localeCompare(b.name)),[n]);return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",children:e.jsxs("div",{className:"w-full max-w-lg rounded-lg bg-white shadow-xl p-6",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:d?"Edit Engagement Log":"Add Engagement Log"}),e.jsx("button",{type:"button",onClick:l,className:"text-gray-400 hover:text-gray-900 rounded-lg text-sm p-1.5",children:"Close"})]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"eng-stakeholder",className:"block mb-2 text-sm font-medium text-gray-900",children:"Stakeholder"}),e.jsxs("select",{id:"eng-stakeholder",value:o.stakeholderId,onChange:f=>m({stakeholderId:f.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:[e.jsx("option",{value:"",children:"Select stakeholder..."}),r.map(f=>e.jsxs("option",{value:f.id,children:[f.name," (",f.group||"N/A"," | ",f.subGroup||"N/A"," | ",f.department||"N/A",")"]},f.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"eng-activity-select",className:"block mb-2 text-sm font-medium text-gray-900",children:"Engagement Activity"}),e.jsxs("select",{id:"eng-activity-select",value:o.engagementActivity,onChange:f=>m({engagementActivity:f.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:[e.jsx("option",{value:"",children:"Select Activity..."}),s.map(f=>e.jsx("option",{value:f.name,children:f.name},f.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"eng-description",className:"block mb-2 text-sm font-medium text-gray-900",children:"Activity Description"}),e.jsx("textarea",{id:"eng-description",required:!0,value:o.activity,onChange:f=>m({activity:f.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-20"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"eng-owner",className:"block mb-2 text-sm font-medium text-gray-900",children:"Owner"}),e.jsxs("select",{id:"eng-owner",value:o.owner,onChange:f=>m({owner:f.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:[e.jsx("option",{value:"",children:"Unassigned"}),a.map(f=>e.jsx("option",{value:f.name,children:f.name},f.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"eng-dueDate",className:"block mb-2 text-sm font-medium text-gray-900",children:"Due Date"}),e.jsx("input",{id:"eng-dueDate",type:"date",value:o.dueDate,onChange:f=>m({dueDate:f.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"eng-status",className:"block mb-2 text-sm font-medium text-gray-900",children:"Status"}),e.jsxs("select",{id:"eng-status",value:o.status,onChange:f=>m({status:f.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:[e.jsx("option",{value:"Planned",children:"Planned"}),e.jsx("option",{value:"In Progress",children:"In Progress"}),e.jsx("option",{value:"Completed",children:"Completed"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"eng-notes",className:"block mb-2 text-sm font-medium text-gray-900",children:"Notes"}),e.jsx("textarea",{id:"eng-notes",value:o.notes,onChange:f=>m({notes:f.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-20"})]})]}),e.jsxs("div",{className:"flex justify-end gap-2 mt-6",children:[e.jsx("button",{type:"button",onClick:l,className:"text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5",children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>{if(!o.stakeholderId||!o.activity.trim()){window.alert("Please select a stakeholder and enter an activity description.");return}i(o)},className:"text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5",children:"Save Log"})]})]})})}function Gm({activity:t,onSave:n,onCancel:s}){const[a,i]=g.useState(t),l=!!t.id,o=d=>i(m=>({...m,...d})),c=(d,m)=>e.jsxs("div",{children:[e.jsx("label",{htmlFor:`act-${m}`,className:"block mb-2 text-sm font-medium text-gray-900",children:d}),e.jsxs("select",{id:`act-${m}`,value:a[m],onChange:r=>o({[m]:r.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:[e.jsx("option",{value:"",children:"N/A"}),e.jsx("option",{value:"Low",children:"Low"}),e.jsx("option",{value:"Medium",children:"Medium"}),e.jsx("option",{value:"High",children:"High"})]})]});return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",children:e.jsxs("div",{className:"w-full max-w-lg rounded-lg bg-white shadow-xl p-6",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:l?"Edit Activity":"Add Activity"}),e.jsx("button",{type:"button",onClick:s,className:"text-gray-400 hover:text-gray-900 rounded-lg text-sm p-1.5",children:"Close"})]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"act-name",className:"block mb-2 text-sm font-medium text-gray-900",children:"Name"}),e.jsx("input",{id:"act-name",type:"text",value:a.name,onChange:d=>o({name:d.target.value}),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c("Inform","inform"),c("Consult","consult"),c("Involve","involve"),c("Collaborate","collaborate"),c("Empower","empower")]})]}),e.jsxs("div",{className:"flex justify-end gap-2 mt-6",children:[e.jsx("button",{type:"button",onClick:s,className:"text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5",children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>{if(!a.name.trim()){window.alert("Please enter a name.");return}n(a)},className:"text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5",children:"Save Activity"})]})]})})}const ci=[{key:"mapping",label:"Stakeholder Mapping"},{key:"group",label:"Group"},{key:"subGroup",label:"Sub-Group"},{key:"department",label:"Department"},{key:"relationship",label:"Relationship"},{key:"interest",label:"Interest"},{key:"impact",label:"Impact"},{key:"power",label:"Power"},{key:"influence",label:"Influence"},{key:"currentCommitment",label:"Current Commitment"},{key:"targetCommitment",label:"Target Commitment"},{key:"commitmentGap",label:"Commitment Gap"},{key:"capabilityCurrent",label:"Current Capability"},{key:"capabilityTarget",label:"Target Capability"},{key:"capabilityGap",label:"Capability Gap"}];function po(t,n){if(n==="mapping"){const s=Rt(t);return mn(s.pi,s.ii)}return n==="commitmentGap"?`Gap: ${vt(t.currentCommitment,t.targetCommitment,"commitments").gap}`:n==="capabilityGap"?`Gap: ${vt(t.capabilityCurrent,t.capabilityTarget,"capabilities").gap}`:t[n]||"N/A"}function Fm(t,n){const s=["#3b82f6","#10b981","#f97316","#8b5cf6","#ef4444","#f59e0b","#14b8a6","#6366f1","#d946ef","#0ea5e9"];if(t==="mapping"){const a={"Manage Closely":"#ef4444","Keep Satisfied":"#3b82f6","Keep Informed":"#10b981",Monitor:"#6b7280"};return n.map(i=>a[i]||"#6b7280")}return t.includes("Gap")?n.map(a=>{const i=parseInt(a.replace("Gap: ",""),10);return Number.isNaN(i)||i<0?"#d1d5db":i===0?"#60a5fa":i===1?"#4ade80":i===2?"#facc15":i===3?"#f87171":"#dc2626"}):n.map((a,i)=>s[i%s.length])}function Um({chartKey:t,stakeholders:n,onMetricChange:s,onSegmentClick:a}){var o;const i=g.useRef(null),l=((o=ci.find(c=>c.key===t))==null?void 0:o.label)||"Select Data";return g.useEffect(()=>{if(!i.current)return;const c={};n.forEach(f=>{const b=po(f,t);c[b]=(c[b]||0)+1});const d=Object.entries(c).sort((f,b)=>b[1]-f[1]),m=d.map(f=>f[0]),r=d.map(f=>f[1]);yl(i.current,{labels:m,datasets:[{data:r,backgroundColor:Fm(t,m),borderColor:"#ffffff",borderWidth:2}]},{},f=>a(m[f],t))},[t,n]),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"font-semibold text-lg",children:l}),e.jsx("select",{value:t,onChange:c=>s(c.target.value),className:"text-sm border-gray-300 rounded-md",children:ci.map(c=>e.jsx("option",{value:c.key,children:c.label},c.key))})]}),e.jsx("div",{className:"h-64 mx-auto",style:{position:"relative",maxWidth:300},children:e.jsx("canvas",{ref:i})})]})}function Hm({state:t,trustName:n,projectName:s,onChartConfigChange:a,onOpenStakeholder:i,onClearData:l,onSaveToFile:o,onLoadFromFile:c}){const d=g.useRef(null),[m,r]=g.useState("Stakeholder Details"),[f,b]=g.useState(null),h=g.useMemo(()=>{const S={red:0,yellow:0,green:0};return t.stakeholders.forEach(u=>{const C=$n(u.targetDate);C!=="none"&&(S[C]+=1)}),S},[t.stakeholders]),x=(S,u)=>{const C=t.stakeholders.filter(R=>po(R,u)===S);r(`Filter: "${S}"`),b(C)},E=S=>{r({red:"Overdue Target Dates",yellow:"Due in <30 Days",green:"On Track"}[S]),b(t.stakeholders.filter(C=>$n(C.targetDate)===S))};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap justify-between items-center gap-3",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Dashboard Overview"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{ref:d,type:"file",accept:".json",onChange:c,className:"hidden"}),e.jsx("button",{type:"button",onClick:l,className:"bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm",children:"Clear Data"}),e.jsx("button",{type:"button",onClick:o,className:"bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm",children:"Save to File"}),e.jsx("button",{type:"button",onClick:()=>{var S;return(S=d.current)==null?void 0:S.click()},className:"bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm",children:"Load from File"})]})]}),e.jsx("div",{className:"bg-white p-4 rounded-lg shadow-sm border border-gray-200",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Organisation"}),e.jsx("p",{className:"mt-1 text-lg font-semibold text-gray-900",children:n||"Your Organisation"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Project / Programme"}),e.jsx("p",{className:"mt-1 text-lg font-semibold text-gray-900",children:s||"Your Project/Programme"})]})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm border border-gray-200",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Total Stakeholders"}),e.jsx("p",{className:"mt-1 text-2xl font-semibold text-gray-900",children:t.stakeholders.length})]}),e.jsxs("button",{type:"button",onClick:()=>E("red"),className:"bg-red-100 p-4 rounded-lg shadow-sm text-left hover:bg-red-200",children:[e.jsx("h3",{className:"text-sm font-medium text-red-800",children:"Overdue Target Dates"}),e.jsx("p",{className:"mt-1 text-2xl font-semibold text-red-900",children:h.red})]}),e.jsxs("button",{type:"button",onClick:()=>E("yellow"),className:"bg-yellow-100 p-4 rounded-lg shadow-sm text-left hover:bg-yellow-200",children:[e.jsx("h3",{className:"text-sm font-medium text-yellow-800",children:"Due in <30 Days"}),e.jsx("p",{className:"mt-1 text-2xl font-semibold text-yellow-900",children:h.yellow})]}),e.jsxs("button",{type:"button",onClick:()=>E("green"),className:"bg-green-100 p-4 rounded-lg shadow-sm text-left hover:bg-green-200",children:[e.jsx("h3",{className:"text-sm font-medium text-green-800",children:"On Track"}),e.jsx("p",{className:"mt-1 text-2xl font-semibold text-green-900",children:h.green})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsx("div",{className:"lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6",children:["chart1","chart2","chart3","chart4"].map(S=>e.jsx(Um,{chartKey:t.dashboardChartConfig[S],stakeholders:t.stakeholders,onMetricChange:u=>a(S,u),onSegmentClick:x},S))}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200 lg:col-span-1",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:f?m:"Stakeholder Details"}),f?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>b(null),className:"text-sm text-indigo-600 hover:underline mb-3",children:"← Clear Selection"}),e.jsx("ul",{className:"space-y-1 overflow-y-auto",style:{maxHeight:"28rem"},children:f.length===0?e.jsx("li",{className:"text-gray-500 text-center py-4",children:"No stakeholders in this category."}):f.map(S=>e.jsx("li",{className:"flex justify-between items-center py-2 border-b border-gray-100",children:e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>i(S.id),className:"font-medium text-indigo-600 hover:underline text-left",children:S.name}),e.jsxs("p",{className:"text-sm text-gray-500",children:[S.group||"N/A"," | ",S.subGroup||"N/A"," | ",S.department||"N/A"]})]})},S.id))})]}):e.jsx("p",{className:"text-gray-500 text-sm",children:"Click a segment on any chart to view the filtered list."})]})]})]})}const Wm=[{key:"name",label:"Name"},{key:"group",label:"Group / Sub-Group"},{key:"department",label:"Department"},{key:"relationship",label:"Relationship"},{key:"mapping",label:"Mapping"},{key:"commitmentGap",label:"Commitment"},{key:"capabilityGap",label:"Capability"},{key:"targetDate",label:"Target Date"}];function Vm({state:t,onOpen:n,onDuplicate:s,onDelete:a,onSortChange:i,onFilterChange:l,onResetFilters:o}){const c=g.useMemo(()=>{let m=[...t.stakeholders];Object.entries(t.filterConfig).forEach(([b,h])=>{const x=h.toLowerCase();x&&(b==="mapping"?m=m.filter(E=>{const S=Rt(E);return mn(S.pi,S.ii).toLowerCase()===x}):m=m.filter(E=>(E[b]||"").toString().toLowerCase().includes(x)))});const{key:r,direction:f}=t.sortConfig;return m.sort((b,h)=>{let x,E;return r==="commitmentGap"?(x=vt(b.currentCommitment,b.targetCommitment,"commitments").gap||-1/0,E=vt(h.currentCommitment,h.targetCommitment,"commitments").gap||-1/0):r==="capabilityGap"?(x=vt(b.capabilityCurrent,b.capabilityTarget,"capabilities").gap||-1/0,E=vt(h.capabilityCurrent,h.capabilityTarget,"capabilities").gap||-1/0):r==="mapping"?(x=mn(Rt(b).pi,Rt(b).ii),E=mn(Rt(h).pi,Rt(h).ii)):(x=b[r]||"",E=h[r]||""),x<E?f==="ascending"?-1:1:x>E?f==="ascending"?1:-1:0}),m},[t.stakeholders,t.filterConfig,t.sortConfig]),d=m=>[...new Set(t.stakeholders.map(r=>r[m]))].filter(Boolean).sort();return e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Stakeholder Details"}),e.jsx("button",{type:"button",onClick:()=>n(null),className:"bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm",children:"Add Stakeholder"})]}),e.jsx(Un,{search:{label:"Search name",value:t.filterConfig.name||"",placeholder:"Search by name...",onChange:m=>l("name",m)},selects:[{key:"group",label:"Filter by group",value:t.filterConfig.group||"",options:d("group"),onChange:m=>l("group",m)},{key:"subGroup",label:"Filter by sub-group",value:t.filterConfig.subGroup||"",options:d("subGroup"),onChange:m=>l("subGroup",m)},{key:"department",label:"Filter by department",value:t.filterConfig.department||"",options:d("department"),onChange:m=>l("department",m)},{key:"relationship",label:"Filter by relationship",value:t.filterConfig.relationship||"",options:d("relationship"),onChange:m=>l("relationship",m)},{key:"mapping",label:"Filter by mapping",value:t.filterConfig.mapping||"",options:["Manage Closely","Keep Satisfied","Keep Informed","Monitor"],onChange:m=>l("mapping",m)}],onReset:o}),e.jsx("div",{className:"overflow-auto",style:{maxHeight:"70vh"},children:e.jsxs("table",{className:"w-full text-sm text-left text-gray-500 border-collapse",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 sticky top-0",children:e.jsxs("tr",{children:[Wm.map(m=>{const f=t.sortConfig.key===m.key?t.sortConfig.direction==="ascending"?"▲":"▼":"↕";return e.jsxs("th",{onClick:()=>i(m.key),className:"px-4 py-3 align-top cursor-pointer select-none",children:[m.label," ",e.jsx("span",{className:"text-gray-400",children:f})]},m.key)}),e.jsx("th",{className:"px-4 py-3 align-top",children:"Actions"})]})}),e.jsx("tbody",{children:c.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:9,className:"text-center py-4 text-gray-500",children:"No stakeholders match the current filters."})}):c.map(m=>{const r=vt(m.currentCommitment,m.targetCommitment,"commitments"),f=vt(m.capabilityCurrent,m.capabilityTarget,"capabilities"),b=Rt(m),h=mn(b.pi,b.ii),x=uo[$n(m.targetDate)];return e.jsxs("tr",{onClick:()=>n(m.id),className:"bg-white border-b cursor-pointer hover:bg-gray-50",children:[e.jsx("td",{className:"px-4 py-3 font-medium text-gray-900",children:e.jsx("span",{className:"text-indigo-600 hover:underline",children:m.name})}),e.jsxs("td",{className:"px-4 py-3",children:[m.group,m.subGroup?e.jsxs("span",{className:"text-gray-400",children:[" / ",m.subGroup]}):null]}),e.jsx("td",{className:"px-4 py-3",children:m.department}),e.jsx("td",{className:"px-4 py-3",children:m.relationship}),e.jsx("td",{className:"px-4 py-3 text-center",children:e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${Dm[h]}`,children:h})}),e.jsx("td",{className:`px-4 py-3 text-center ${r.colorClass}`,children:e.jsxs("span",{className:"font-medium",children:[m.currentCommitment||"-"," → ",m.targetCommitment||"-"]})}),e.jsx("td",{className:`px-4 py-3 text-center ${f.colorClass}`,children:e.jsxs("span",{className:"font-medium",children:[m.capabilityCurrent||"-"," → ",m.capabilityTarget||"-"]})}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${x}`,children:go(m.targetDate)})}),e.jsx("td",{className:"px-4 py-3",children:e.jsxs("div",{className:"flex items-center gap-2",onClick:E=>E.stopPropagation(),children:[e.jsx(mt,{onClick:()=>n(m.id),title:"Edit stakeholder",children:e.jsx(bn,{})}),e.jsx(mt,{onClick:()=>s(m.id),title:"Duplicate stakeholder",children:e.jsx(bm,{})}),e.jsx(mt,{onClick:()=>a(m.id),title:"Delete stakeholder",variant:"danger",children:e.jsx(xn,{})})]})})]},m.id)})})]})})]})}function qm({log:t,stakeholderName:n,components:s,teamMembers:a,getEntry:i,onConfirm:l,onCancel:o}){var E;const[c,d]=g.useState(((E=s[0])==null?void 0:E.id)||""),m=s.find(S=>S.id===c),[r,f]=g.useState((m==null?void 0:m.lenses[0])||""),[b,h]=g.useState({id:dn("action-"),text:`${n}: ${t.activity}`.trim(),owner:t.owner,timescale:t.dueDate,dueDate:t.dueDate,status:"Planned"}),x=(m==null?void 0:m.lenses)||[];return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",children:e.jsxs("div",{className:"w-full max-w-2xl rounded-lg bg-white shadow-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add to Project Plan"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"apply-component",className:"block mb-2 text-sm font-medium text-gray-900",children:"Component"}),e.jsx("select",{id:"apply-component",value:c,onChange:S=>{const u=s.find(C=>C.id===S.target.value);d(S.target.value),f((u==null?void 0:u.lenses[0])||"")},className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:s.map(S=>e.jsx("option",{value:S.id,children:S.label},S.id))})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"apply-lens",className:"block mb-2 text-sm font-medium text-gray-900",children:"Lens"}),e.jsx("select",{id:"apply-lens",value:r,onChange:S=>f(S.target.value),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",children:x.map(S=>e.jsx("option",{value:S,children:S},S))})]})]}),e.jsx("label",{htmlFor:"apply-text",className:"block mb-2 text-sm font-medium text-gray-900",children:"Action Text"}),e.jsx("input",{id:"apply-text",type:"text",value:b.text,onChange:S=>h(u=>({...u,text:S.target.value})),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4"}),e.jsx(pi,{action:b,onChange:S=>h(u=>({...u,...S})),teamMembers:a}),e.jsxs("div",{className:"flex justify-end gap-2 mt-6",children:[e.jsx("button",{type:"button",onClick:o,className:"text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5",children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>{if(!c||!r){window.alert("Please choose a component and lens.");return}const S=i(c,r);l(c,r,{...b,readinessScore:S.score})},className:"text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5",children:"Add to Project"})]})]})})}function Ym({state:t,stakeholderMap:n,canApply:s,onOpen:a,onDelete:i,onApply:l,onSortChange:o,onFilterChange:c,onResetFilters:d}){const m=[{key:"stakeholderId",label:"Stakeholder"},{key:"engagementActivity",label:"Engagement Activity"},{key:"activity",label:"Activity Description"},{key:"owner",label:"Owner"},{key:"dueDate",label:"Due Date"},{key:"status",label:"Status"},{key:"notes",label:"Notes"}],r=g.useMemo(()=>{let b=[...t.engagementLog];Object.entries(t.engagementFilterConfig).forEach(([E,S])=>{const u=S.toLowerCase();u&&(b=b.filter(C=>(E==="stakeholderId"?n[C.stakeholderId]||"":C[E]||"").toString().toLowerCase().includes(u)))});const{key:h,direction:x}=t.engagementSortConfig;return b.sort((E,S)=>{const u=h==="stakeholderId"?n[E.stakeholderId]||"":E[h]||"",C=h==="stakeholderId"?n[S.stakeholderId]||"":S[h]||"";return u<C?x==="ascending"?-1:1:u>C?x==="ascending"?1:-1:0}),b},[t.engagementLog,t.engagementFilterConfig,t.engagementSortConfig,n]),f=g.useMemo(()=>[...new Set(t.engagementLog.map(b=>n[b.stakeholderId]).filter(Boolean))].sort(),[t.engagementLog,n]);return e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Engagement Plan & Log"}),e.jsx("button",{type:"button",onClick:()=>a(null),className:"bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm",children:"Add Engagement Log"})]}),e.jsx(Un,{selects:[{key:"stakeholder",label:"Stakeholder",value:t.engagementFilterConfig.stakeholderId||"",options:f,onChange:b=>c("stakeholderId",b)},{key:"status",label:"Status",value:t.engagementFilterConfig.status||"",options:["Planned","In Progress","Completed"],onChange:b=>c("status",b)}],onReset:d}),e.jsx("div",{className:"overflow-auto",style:{maxHeight:"70vh"},children:e.jsxs("table",{className:"w-full text-sm text-left text-gray-500 border-collapse",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 sticky top-0",children:e.jsxs("tr",{children:[m.map(b=>{const x=t.engagementSortConfig.key===b.key?t.engagementSortConfig.direction==="ascending"?"▲":"▼":"↕";return e.jsxs("th",{onClick:()=>o(b.key),className:"px-4 py-3 align-top cursor-pointer select-none",children:[b.label," ",e.jsx("span",{className:"text-gray-400",children:x})]},b.key)}),e.jsx("th",{className:"px-4 py-3 align-top",children:"Actions"})]})}),e.jsx("tbody",{children:r.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,className:"text-center py-4 text-gray-500",children:"No engagement logs match the current filters."})}):r.map(b=>{const h=uo[$n(b.dueDate)];return e.jsxs("tr",{onClick:()=>a(b.id),className:"bg-white border-b cursor-pointer hover:bg-gray-50",children:[e.jsx("td",{className:"px-4 py-3 font-medium text-gray-900",children:n[b.stakeholderId]||"Unknown"}),e.jsx("td",{className:"px-4 py-3",children:b.engagementActivity}),e.jsx("td",{className:"px-4 py-3",children:b.activity}),e.jsx("td",{className:"px-4 py-3",children:b.owner}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${h}`,children:go(b.dueDate)})}),e.jsx("td",{className:"px-4 py-3",children:b.status}),e.jsx("td",{className:"px-4 py-3 whitespace-pre-wrap",children:b.notes}),e.jsx("td",{className:"px-4 py-3",children:e.jsxs("div",{className:"flex items-center gap-2",onClick:x=>x.stopPropagation(),children:[e.jsx(mt,{onClick:()=>a(b.id),title:"Edit engagement log",children:e.jsx(bn,{})}),s?e.jsx(mt,{onClick:()=>l(b),title:"Add to project plan",children:e.jsx(xm,{})}):null,e.jsx(mt,{onClick:()=>i(b.id),title:"Delete engagement log",variant:"danger",children:e.jsx(xn,{})})]})})]},b.id)})})]})})]})}const ts=[{key:"power",label:"Power"},{key:"influence",label:"Influence"},{key:"interest",label:"Interest"},{key:"impact",label:"Impact"}];function zm({state:t,groups:n,groupColors:s,onFilterChange:a,onAxisChange:i,onResetFilters:l,onOpenStakeholder:o}){var R;const{group:c,subGroup:d,department:m,relationship:r}=t.mapFilterConfig,{x:f,y:b}=t.mapAxisConfig,h=[{id:"group",title:"Group",current:c},{id:"subGroup",title:"Sub-Group",current:d},{id:"department",title:"Department",current:m},{id:"relationship",title:"Relationship",current:r}],E=["power","influence"].includes(f)&&["interest","impact"].includes(b)?["bg-green-50","bg-green-50","bg-red-50","bg-red-50","bg-green-50","bg-green-50","bg-red-50","bg-red-50","bg-gray-100","bg-gray-100","bg-blue-50","bg-blue-50","bg-gray-100","bg-gray-100","bg-blue-50","bg-blue-50"]:Array(16).fill("bg-white"),S=t.stakeholders.filter(j=>(c==="All"||j.group===c)&&(d==="All"||j.subGroup===d)&&(m==="All"||j.department===m)&&(r==="All"||j.relationship===r)),u=Array.from({length:16},()=>[]);S.forEach(j=>{var B;const k=li(j,f),p=li(j,b);if(k>0&&p>0){const D=(4-p)*4+(k-1);(B=u[D])==null||B.push(j)}});const C=((R=ts.find(j=>j.key===f))==null?void 0:R.label)||"Power";return e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Stakeholder Analysis Map"}),e.jsx("button",{type:"button",onClick:l,className:"text-sm text-indigo-600 hover:underline",children:"Reset Filters"})]}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg",children:h.map(({id:j,title:k,current:p})=>{const B=[...new Set(t.stakeholders.map(D=>D[j]).filter(Boolean))].sort();return e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:k}),e.jsxs("select",{value:p,onChange:D=>a(j,D.target.value),className:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md",children:[e.jsx("option",{value:"All",children:"All"}),B.map(D=>e.jsx("option",{value:D,children:D},D))]})]},j)})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-4",children:[e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Vertical Axis (Y)"}),e.jsx("select",{value:b,onChange:j=>i("y",j.target.value),className:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md",children:ts.map(j=>e.jsx("option",{value:j.key,children:j.label},j.key))})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Horizontal Axis (X)"}),e.jsx("select",{value:f,onChange:j=>i("x",j.target.value),className:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md",children:ts.map(j=>e.jsx("option",{value:j.key,children:j.label},j.key))})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsxs("div",{className:"grid grid-cols-5 text-center text-sm font-medium text-gray-600",children:[e.jsx("div",{}),e.jsx("div",{className:"p-2 border-b-2 border-r-2 border-gray-300",children:"Low"}),e.jsx("div",{className:"p-2 border-b-2 border-r-2 border-gray-300",children:"Medium"}),e.jsx("div",{className:"p-2 border-b-2 border-r-2 border-gray-300",children:"High"}),e.jsx("div",{className:"p-2 border-b-2 border-gray-300",children:"Very High"})]}),e.jsxs("div",{className:"grid grid-cols-5",style:{height:400},children:[e.jsxs("div",{className:"grid grid-rows-4 text-center font-medium text-gray-600",children:[e.jsx("div",{className:"flex items-center justify-center p-2 border-r-2 border-gray-300",children:"Very High"}),e.jsx("div",{className:"flex items-center justify-center p-2 border-r-2 border-gray-300",children:"High"}),e.jsx("div",{className:"flex items-center justify-center p-2 border-r-2 border-gray-300",children:"Medium"}),e.jsx("div",{className:"flex items-center justify-center p-2 border-r-2 border-gray-300",children:"Low"})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-4 grid-rows-4 border-r border-b border-gray-300",children:E.map((j,k)=>e.jsx("div",{className:`relative border-t border-l border-gray-300 ${j}`,children:u[k].map((p,B)=>e.jsx("div",{title:p.name,onClick:()=>o(p.id),className:"absolute rounded-full cursor-pointer border-2 border-white shadow",style:{width:14,height:14,backgroundColor:s[p.group]||"#718096",left:10+B%4*15,top:10+Math.floor(B/4)*15}},p.id))},k))})]}),e.jsxs("div",{className:"grid grid-cols-5 text-center text-xs mt-1 text-gray-500",children:[e.jsx("div",{}),e.jsxs("div",{className:"col-span-4 font-semibold",children:[C," →"]})]})]}),e.jsxs("div",{className:"w-full md:w-64",children:[e.jsx("h4",{className:"font-semibold mb-2 text-gray-700",children:"Legend"}),e.jsx("div",{className:"space-y-1",children:n.map(j=>e.jsxs("div",{className:"flex items-center gap-2 px-1.5 py-0.5 rounded-md",children:[e.jsx("span",{className:"inline-block h-3 w-3 rounded-full",style:{backgroundColor:s[j]||"#718096"}}),e.jsx("span",{className:"text-sm text-gray-700",children:j})]},j))})]})]})]})}const Km={Low:"bg-slate-100 text-slate-700",Medium:"bg-amber-100 text-amber-800",High:"bg-indigo-100 text-indigo-800"};function cn({value:t}){return t?e.jsx("span",{className:`px-2 py-0.5 text-xs font-medium rounded-full ${Km[t]}`,children:t}):null}function Jm({activities:t,onOpen:n,onDelete:s}){return e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Engagement Activities"}),e.jsx("button",{type:"button",onClick:()=>n(null),className:"bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm",children:"Add Activity"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsx("tr",{children:["Engagement Activities","Inform","Consult","Involve","Collaborate","Empower","Actions"].map(a=>e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:a},a))})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map(a=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:a.name}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm",children:e.jsx(cn,{value:a.inform})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm",children:e.jsx(cn,{value:a.consult})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm",children:e.jsx(cn,{value:a.involve})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm",children:e.jsx(cn,{value:a.collaborate})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm",children:e.jsx(cn,{value:a.empower})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(mt,{onClick:()=>n(a.id),title:"Edit activity",children:e.jsx(bn,{})}),e.jsx(mt,{onClick:()=>s(a.id),title:"Delete activity",variant:"danger",children:e.jsx(xn,{})})]})})]},a.id))})]})})]})}function di({title:t,levels:n,descriptions:s}){return e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h3",{className:"font-semibold mb-2 text-gray-800",children:t}),e.jsx("table",{className:"w-full text-sm text-left",children:e.jsx("tbody",{className:"divide-y divide-gray-200",children:n.map(a=>e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-3 font-medium text-gray-800 align-top whitespace-nowrap",children:a}),e.jsx("td",{className:"py-2 text-gray-600",children:s[a]})]},a))})})]})}function Xm(){return e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Reference Data"}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Groups, Sub-Groups, Locations and Relationships are shared across the Adoption Engine and are now managed from ",e.jsx("strong",{children:"Project Details"}),". The commitment and capability scales below are fixed and shown here for reference."]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(di,{title:"Commitment levels",levels:Object.keys(Js),descriptions:xs}),e.jsx(di,{title:"Capability levels",levels:Object.keys(Xs),descriptions:ys})]})]})}function Qm({guidanceRead:t,onMarkRead:n}){return e.jsx("div",{className:"bg-white p-6 rounded-lg shadow-sm border border-gray-200",children:e.jsxs("div",{className:"max-w-none text-gray-700 space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Guidance for Using the Stakeholder Analysis Tool"}),e.jsx("h3",{className:"text-lg font-semibold",children:"Introduction"}),e.jsx("p",{children:"Stakeholder analysis is a critical process for identifying individuals or groups who can impact or are impacted by a project. This tool helps you systematically analyse your stakeholders, devise engagement strategies, and track your progress."}),e.jsx("h3",{className:"text-lg font-semibold",children:"Core Features: Managing Your Data"}),e.jsxs("ul",{className:"list-disc ml-6 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Save to File:"})," saves your entire analysis (stakeholders, engagement logs, reference data) to a single JSON file. Use a descriptive filename that includes the date."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Load from File:"})," loads a previously saved JSON file, replacing any data currently in the tool. You will be asked to confirm this, as it cannot be undone."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Clear Data:"})," resets the tool to a blank state. You will be asked to confirm, as this is irreversible."]})]}),e.jsx("h3",{className:"text-lg font-semibold",children:"Step-by-Step Guide"}),e.jsx("h4",{className:"font-semibold",children:"Step 1: Check Your Project (Dashboard Tab)"}),e.jsx("p",{children:"Your organisation and project name are shown on the Dashboard, pulled from Project Details."}),e.jsx("h4",{className:"font-semibold",children:"Step 2: Check Your Terms (Reference Data Tab)"}),e.jsx("p",{children:"Groups, Sub-Groups, Locations and Relationships are set up once from Project Details and shared across the Adoption Engine. The Reference Data tab also shows what each Commitment and Capability level means."}),e.jsx("h4",{className:"font-semibold",children:"Step 3: Add Your Stakeholders (Stakeholders Tab)"}),e.jsxs("ul",{className:"list-disc ml-6 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Interest, Impact, Power & Influence:"})," the foundation of the analysis map - assess each stakeholder from Low to Very High."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Commitment (Current vs Target):"})," where the stakeholder is now vs where you need them to be - the Commitment Gap is calculated automatically."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Capability (Current vs Target):"})," their current ability to adopt the change vs what they will need - the Capability Gap is calculated automatically."]}),e.jsx("li",{children:"Sorting, filtering, editing, duplicating and deleting are all available on the main table."})]}),e.jsx("h4",{className:"font-semibold",children:"Step 4: Create Your Action Plan (Engagement Plan Tab)"}),e.jsx("p",{children:"Log and track communications - select the stakeholder, set an owner, due date and status (Planned, In Progress, Completed) for each activity."}),e.jsx("h4",{className:"font-semibold",children:"Step 5: Visualise and Prioritise (Analysis Map & Dashboard)"}),e.jsx("p",{children:"The Analysis Map plots stakeholders on a grid based on power, influence, interest and impact - use the filters to narrow the view. The Dashboard's doughnut charts let you click a segment to drill into the matching stakeholders."}),e.jsx("h3",{className:"text-lg font-semibold",children:"Good Practice Tips"}),e.jsxs("ul",{className:"list-disc ml-6 space-y-1",children:[e.jsx("li",{children:"Stakeholder analysis is a living process - revisit it regularly as attitudes and situations change."}),e.jsx("li",{children:"Use Save to File / Load from File to share your analysis with team members for a more robust view."}),e.jsx("li",{children:"Focus on the gaps - the Commitment Gap and Capability Gap are your primary indicators for where an engagement or training effort is required."})]}),t?e.jsx("p",{className:"text-sm text-green-700 font-medium",children:"✓ Guidance read - the rest of the tool is unlocked."}):e.jsx("div",{className:"pt-2",children:e.jsx("button",{type:"button",onClick:n,className:"bg-indigo-600 text-white px-5 py-2.5 rounded-md hover:bg-indigo-700 text-sm font-medium",children:"I've read this - continue"})})]})})}function Zm({embedded:t=!1,trustName:n="",projectName:s="",teamMembers:a=[],referenceLists:i=Ln,components:l=[],getEntry:o,onEntryUpdate:c}={}){const[d,m]=g.useState(()=>it(Zn)||es()),[r,f]=g.useState(()=>{var G;return(G=it(Zn))!=null&&G.guidanceRead?"dashboard":"guidance"}),[b,h]=g.useState(null),[x,E]=g.useState(null),[S,u]=g.useState(null),[C,R]=g.useState(null),j=!!(o&&c&&l.length);g.useEffect(()=>{ze(Zn,d)},[d]);const k=g.useMemo(()=>Pm(i.groups),[i.groups]),p=g.useMemo(()=>({...d.referenceData,groups:i.groups,subGroups:i.subGroups,departments:i.departments,relationships:i.relationships,commitments:Object.keys(Js),capabilities:Object.keys(Xs)}),[d.referenceData,i]),B=g.useMemo(()=>Object.fromEntries(d.stakeholders.map(G=>[G.id,G.name])),[d.stakeholders]),D=G=>{m(W=>({...W,...G}))},V=G=>{const W=G?d.stakeholders.find(X=>X.id===G):null;h(W||{id:"",...$m})},le=G=>{m(W=>G.id?{...W,stakeholders:W.stakeholders.map(X=>X.id===G.id?G:X)}:{...W,stakeholders:[...W.stakeholders,{...G,id:dn()}]}),h(null)},re=G=>{window.confirm("Are you sure you want to delete this stakeholder? This will also delete all associated engagement logs.")&&m(W=>({...W,stakeholders:W.stakeholders.filter(X=>X.id!==G),engagementLog:W.engagementLog.filter(X=>X.stakeholderId!==G)}))},w=G=>{const W=d.stakeholders.find(X=>X.id===G);W&&m(X=>({...X,stakeholders:[...X.stakeholders,{...W,id:dn(),name:`${W.name} (copy)`}]}))},L=(G,W)=>{const X=G?d.engagementLog.find(_e=>_e.id===G):null;E(X||{id:"",...Tm,stakeholderId:W||""})},ne=G=>{m(W=>G.id?{...W,engagementLog:W.engagementLog.map(X=>X.id===G.id?G:X)}:{...W,engagementLog:[...W.engagementLog,{...G,id:dn("eng-")}]}),E(null)},xe=G=>{window.confirm("Are you sure you want to delete this engagement log?")&&m(W=>({...W,engagementLog:W.engagementLog.filter(X=>X.id!==G)}))},Ae=G=>{const W=G?d.referenceData.engagementActivities.find(X=>X.id===G):null;u(W||{id:"",...Lm})},Fe=G=>{m(W=>{const X=G.id?W.referenceData.engagementActivities.map(_e=>_e.id===G.id?G:_e):[...W.referenceData.engagementActivities,{...G,id:dn("act-")}];return{...W,referenceData:{...W.referenceData,engagementActivities:X}}}),u(null)},U=G=>{window.confirm("Are you sure you want to delete this activity?")&&m(W=>({...W,referenceData:{...W.referenceData,engagementActivities:W.referenceData.engagementActivities.filter(X=>X.id!==G)}}))},de=G=>{m(W=>({...W,sortConfig:{key:G,direction:W.sortConfig.key===G&&W.sortConfig.direction==="ascending"?"descending":"ascending"}}))},ce=(G,W)=>{m(X=>({...X,filterConfig:{...X.filterConfig,[G]:W}}))},fe=G=>{m(W=>({...W,engagementSortConfig:{key:G,direction:W.engagementSortConfig.key===G&&W.engagementSortConfig.direction==="ascending"?"descending":"ascending"}}))},Se=(G,W)=>{m(X=>({...X,engagementFilterConfig:{...X.engagementFilterConfig,[G]:W}}))},ye=()=>{const G=`stakeholder-analysis-${new Date().toISOString().slice(0,10)}.json`;Ut(G,JSON.stringify(d,null,2),"application/json")},me=G=>{var _e;const W=(_e=G.target.files)==null?void 0:_e[0];if(!W)return;if(!window.confirm("Loading a file will replace all current data. This cannot be undone. Continue?")){G.target.value="";return}const X=new FileReader;X.onload=ot=>{var Ye;try{const $=JSON.parse(String(((Ye=ot.target)==null?void 0:Ye.result)||"")),ie=es();m({...ie,...$,referenceData:{...ie.referenceData,...$.referenceData||{}}})}catch($){console.error("Load error:",$),window.alert("Could not load this file. Please check it is a valid export from this tool.")}finally{G.target.value=""}},X.readAsText(W)},Ce=()=>{window.confirm("This will completely reset the tool to a blank state. This cannot be undone. Continue?")&&m(es())},Le=b?d.engagementLog.some(G=>G.stakeholderId===b.id):!1,Ue=[{key:"guidance",label:"Guidance"},{key:"reference",label:"Reference Data"},{key:"stakeholders",label:"Stakeholders"},{key:"activities",label:"Activities"},{key:"dashboard",label:"Dashboard",gapBefore:!0},{key:"engagement",label:"Engagement Plan"},{key:"map",label:"Analysis Map"}];return e.jsxs("div",{children:[e.jsx("header",{className:t?"flex flex-wrap items-center justify-between gap-3 pb-4":"bg-white border-b border-slate-200 shadow-sm px-6 py-4",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg font-bold text-slate-800",children:"Stakeholder Analysis and Management Tool"}),e.jsx("p",{className:"text-xs text-slate-500",children:"The Analysis Map plots your Details tab results. It will group your individuals and groups into a pivot table working on a Interest/Impact vs Power/Influence axis. The table divides into four categories - Low/Medium/High/Very High. If an individual is high or very high on both axis they have the potential to be extremely influential to your change project/programme, either positively or negatively."})]})}),e.jsx("div",{className:"mb-6 border-b border-gray-200",children:e.jsx("nav",{className:"flex flex-wrap -mb-px",children:Ue.map(G=>{const W=!d.guidanceRead&&G.key!=="guidance";return e.jsxs("button",{type:"button",onClick:()=>{W||f(G.key)},disabled:W,"aria-disabled":W,title:W?"Read the Guidance tab first to unlock":void 0,className:`whitespace-nowrap py-3 px-5 border-b-2 font-medium text-sm flex items-center gap-1.5 ${G.gapBefore?"ml-4":""} ${W?"border-transparent text-gray-300 cursor-not-allowed":r===G.key?"border-indigo-600 text-indigo-600 bg-indigo-50":"border-transparent text-gray-500 hover:text-indigo-600 hover:border-indigo-300"}`,children:[W?e.jsx(ym,{}):null,G.label]},G.key)})})}),r==="dashboard"?e.jsx(Hm,{state:d,trustName:n,projectName:s,onChartConfigChange:(G,W)=>D({dashboardChartConfig:{...d.dashboardChartConfig,[G]:W}}),onOpenStakeholder:G=>V(G),onClearData:Ce,onSaveToFile:ye,onLoadFromFile:me}):null,r==="stakeholders"?e.jsx(Vm,{state:d,onOpen:V,onDuplicate:w,onDelete:re,onSortChange:de,onFilterChange:ce,onResetFilters:()=>D({filterConfig:{},sortConfig:{key:"name",direction:"ascending"}})}):null,r==="engagement"?e.jsx(Ym,{state:d,stakeholderMap:B,canApply:j,onOpen:L,onDelete:xe,onApply:R,onSortChange:fe,onFilterChange:Se,onResetFilters:()=>D({engagementFilterConfig:{},engagementSortConfig:{key:"stakeholderId",direction:"ascending"}})}):null,r==="map"?e.jsx(zm,{state:d,groups:i.groups,groupColors:k,onFilterChange:(G,W)=>D({mapFilterConfig:{...d.mapFilterConfig,[G]:W}}),onAxisChange:(G,W)=>D({mapAxisConfig:{...d.mapAxisConfig,[G]:W}}),onResetFilters:()=>D({mapFilterConfig:{group:"All",subGroup:"All",department:"All",relationship:"All"}}),onOpenStakeholder:G=>V(G)}):null,r==="activities"?e.jsx(Jm,{activities:d.referenceData.engagementActivities,onOpen:Ae,onDelete:U}):null,r==="reference"?e.jsx(Xm,{}):null,r==="guidance"?e.jsx(Qm,{guidanceRead:d.guidanceRead,onMarkRead:()=>D({guidanceRead:!0})}):null,b?e.jsx(Mm,{stakeholder:b,referenceData:p,hasEngagementLogs:Le,onSave:le,onCancel:()=>h(null),onAddEngagement:()=>{const G=b.id;h(null),L(null,G)},onViewEngagements:()=>{h(null),f("engagement"),D({engagementFilterConfig:{stakeholderId:b.name}})}}):null,x?e.jsx(Bm,{log:x,stakeholders:d.stakeholders,activities:d.referenceData.engagementActivities,teamMembers:a,onSave:ne,onCancel:()=>E(null)}):null,S?e.jsx(Gm,{activity:S,onSave:Fe,onCancel:()=>u(null)}):null,C&&o&&c?e.jsx(qm,{log:C,stakeholderName:B[C.stakeholderId]||"Unknown",components:l,teamMembers:a,getEntry:o,onConfirm:(G,W,X)=>{const _e=o(G,W);c(G,W,{..._e,actions:[..._e.actions,X]}),R(null)},onCancel:()=>R(null)}):null]})}const ns="nhs-digital-adoption-user-settings",ss="nhs-digital-adoption-report-reminder-dismissed",eu="nhs-digital-adoption-engagement",as="nhs-digital-adoption-current-user-id",mi="Default",tu=5*1024*1024,nu=new Set(["application/json","text/json"]),su="Unknown user",au=["introduction","engine-explained","project-details","profile"],iu={1:"#3b82f6",2:"#8b5cf6",3:"#f59e0b",4:"#f97316",5:"#22c55e"},ou={red:"test-data/adoption-phase1-red.json",amber:"test-data/adoption-phase2-amber.json",green:"test-data/adoption-phase3-green.json"},is={name:"",themeColor:"#005eb8",profileImageDataUrl:"",darkMode:!1,colorAccessibilityMode:"standard",phaseFocusMode:"auto",manualPhaseFocus:1,hideGuidedWorkflow:!1,showAdditionalGuidanceLinks:!0,showExternalLinksSection:!1,showActionPriorityColours:!1};function ru(t){return{...t,linkedTargets:(t.linkedTargets||[]).map(n=>({componentId:n.componentId,lens:n.lens}))}}function lu(t,n){return`${t}:${n}`}function ui(t){return t.orgProfile.trustName||t.orgProfile.projectName?!1:!Object.values(t.currentDraft).some(n=>Object.values(n).some(s=>s.score>0))}function gi(t){return!t.trustName.trim()}function cu(t){var n;if(!((n=t.evidence)!=null&&n.trim()))return!1;try{const s=JSON.parse(t.evidence);return Array.isArray(s)?s.length>0:!!t.evidence.trim()}catch{return!!t.evidence.trim()}}function du(t){return t.trim()||su}function mu(t,n,s){const a=(t.teamMembers||[]).find(i=>i.id===n);return du((a==null?void 0:a.name)||s)}function uu(t,n,s){var i;const a=Lo[t];return((i=a==null?void 0:a[n])==null?void 0:i[s])||Dn[s]||Dn[0]}function gu(t=new Date){const n=String(t.getMonth()+1).padStart(2,"0");return`${t.getFullYear()}-${n}`}function pu(t=new Date){return new Date(t.getFullYear(),t.getMonth()-1,1).toLocaleString("en-GB",{month:"short",year:"numeric"})}function hu(t){const n=new TextEncoder().encode(t);let s="";return n.forEach(a=>{s+=String.fromCharCode(a)}),window.btoa(s)}function fu(t,n=76){const s=[];for(let a=0;a<t.length;a+=n)s.push(t.slice(a,a+n));return s.join(`\r
`)}function bu(t=new Date){return t.toLocaleString("en-GB",{month:"short",year:"numeric"})}function Iu(){var sn,yn;const t=en,n=g.useMemo(()=>[...hn],[]),[s,a]=g.useState(t[0].id),[i,l]=g.useState(!1),[o,c]=g.useState(()=>{let v={};try{const H=it(Ya);v=Rs(An(H))}catch(H){console.warn("Ignoring invalid persisted adoption data.",H)}const O=_n({view:"dashboard",orgProfile:v==null?void 0:v.orgProfile,currentDraft:v==null?void 0:v.currentDraft,objectives:v==null?void 0:v.objectives,suppressedAutoActions:v==null?void 0:v.suppressedAutoActions,auditLog:v==null?void 0:v.auditLog,history:v==null?void 0:v.history,phaseOverrides:v==null?void 0:v.phaseOverrides,pathwayChecks:v==null?void 0:v.pathwayChecks});return O.orgProfile.cstId||(O.orgProfile={...O.orgProfile,cstId:ha()}),kt(O)}),[d,m]=g.useState(()=>ui(o)?"introduction":"dashboard"),[r,f]=g.useState(""),b=ht("vision-get-started"),[h,x]=g.useState(()=>it(as)||""),E=Gt.useRef(h);g.useEffect(()=>{E.current=h},[h]);const[S,u]=g.useState(null),[C,R]=g.useState(()=>{const v=it(ns);return{...is,...v}}),j=Gt.useRef(C.name);g.useEffect(()=>{j.current=C.name},[C.name]);const k=Gt.useRef(null),p=Gt.useRef(null),[B,D]=g.useState(""),V=Gt.useRef(null),le=g.useMemo(()=>gu(),[]),[re,w]=g.useState(()=>it(ss)||{}),[L,ne]=g.useState(!0),[xe,Ae]=g.useState([]),[Fe,U]=g.useState({1:!0}),[de,ce]=g.useState({intro:!0,overview:!0,tools:!0}),[fe,Se]=g.useState(null),[ye,me]=g.useState(!0),[Ce,Le]=g.useState("medium"),Ue=Gt.useRef({}),G=g.useMemo(()=>{const v=new Date,O=pu(v),H=v.getDate()===1;return{previousMonthLabel:O,isFirstDayOfMonth:H,shouldNotify:H}},[o.history]),[W,X]=g.useState("test@test.com"),[_e,ot]=g.useState(""),[Ye,$]=g.useState(""),ie=bu(),Z=g.useCallback((v,O)=>(o.currentDraft[v]||(o.currentDraft[v]={}),o.currentDraft[v][O]||(o.currentDraft[v][O]=qn()),o.currentDraft[v][O]),[o]),we=C.showAdditionalGuidanceLinks!==!1,Ee=g.useMemo(()=>{const v=qo(o,t);return{...v,nextSteps:v.nextSteps.map(O=>({...O,toolkitLinks:Rn(mi,O.componentId,"inputs",void 0,we).slice(0,3)}))}},[o,we]),Re=C.phaseFocusMode==="manual"&&C.manualPhaseFocus?C.manualPhaseFocus:Ee.currentPhase;g.useEffect(()=>{var O;if(d!=="assessment")return;const v=(O=t.find(H=>H.id===s))==null?void 0:O.phase;v&&U(H=>({...H,[v]:!0}))},[s,d]),g.useEffect(()=>{d==="where-am-i-now"&&l(!0)},[d]),g.useEffect(()=>{const O={introduction:"intro","engine-explained":"intro","project-details":"intro","where-am-i-now":"intro",dashboard:"overview","daily-checkin":"overview","action-plan":"overview","roadmap-view":"overview","highlight-builder":"tools","force-field-analysis":"tools",compare:"tools","change-impact-assessment":"tools","stakeholder-analysis":"tools","raid-log":"tools","audit-log":"tools"}[d];O&&ce(H=>({...H,[O]:!0}))},[d]);const Pe=Jo(o,v=>rs(v)||t[0],Z).sort((v,O)=>{const H=v.action.owner.localeCompare(O.action.owner);return H!==0?H:v.component.localeCompare(O.component)});g.useEffect(()=>{ze(Ya,o)},[o]),g.useEffect(()=>{ze(ns,C)},[C]),g.useEffect(()=>{ze(as,h)},[h]),g.useEffect(()=>{ze(ss,re)},[re]),g.useEffect(()=>{gi(o.orgProfile)&&!au.includes(d)&&m("introduction")},[o.orgProfile,d]),g.useEffect(()=>{d==="dashboard"&&k.current&&setTimeout(()=>{var H,ae,K;const v=(H=k.current)==null?void 0:H.querySelector("#adoption-radar-chart");if(v){const be=Ko(o,n,t,Z);Zt(v,be)}const O=(ae=k.current)==null?void 0:ae.querySelector("#adoption-component-radar-chart");if(O){const be=ds(t,Z,Re);Zt(O,be,{maintainAspectRatio:!1,scales:{r:{min:-1,max:5,ticks:{display:!0,stepSize:1,backdropColor:"transparent",callback:he=>Number(he)<0?"":Et(Number(he)).label},pointLabels:{padding:28}}}},he=>{const We=t[he];We&&z(We.id)})}if(o.history.length>0){const be=(K=k.current)==null?void 0:K.querySelector("#adoption-line-chart");if(be){const he={labels:o.history.map(We=>We.monthLabel),datasets:[{label:"Adoption Score",data:o.history.map(We=>We.overallPercentage||0),borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",fill:!0,tension:.4}]};Fi(be,he)}}},100)},[d,o,Z,n,t,Re,ye,Ce]),g.useEffect(()=>{typeof document<"u"&&(document.documentElement.dataset.nhsThemeMode=C.darkMode?"dark":"light")},[C.darkMode]),g.useEffect(()=>{var O;const v=d==="assessment"?`component:${s}`:`view:${d}`;(O=Ue.current[v])==null||O.scrollIntoView({block:"nearest",behavior:"smooth"})},[s,d]);const N=()=>typeof window>"u"?!1:window.innerWidth<1024,M=g.useCallback(()=>{var v;(v=p.current)==null||v.scrollTo({top:0,behavior:"auto"})},[]),_=g.useCallback(v=>{m(O=>O===v?O:(Ae(H=>[O,...H].slice(0,20)),v)),N()&&l(!1)},[]),P=v=>{_(v)},Y=g.useCallback(()=>{Ae(v=>{const[O,...H]=v;return O?(m(O),window.innerWidth<1024&&l(!1),H):(window.location.hash="#/",v)})},[]),z=g.useCallback(v=>{rs(v)&&(a(v),_("assessment"),M())},[_,M]),[oe,ue]=g.useState(null),je=g.useCallback((v,O,H)=>{ue({lens:O,actionId:H}),z(v)},[z]);g.useEffect(()=>{M()},[M,d]);function ke(v,O){if(!O.length)return v.auditLog;const H=mu(v.orgProfile,E.current,j.current||""),ae=O.map(K=>Sc({actor:H,eventType:K.eventType,entityType:K.entityType,entityId:K.entityId,summary:K.summary,trustName:K.trustName??v.orgProfile.trustName,projectName:K.projectName??v.orgProfile.projectName,componentId:K.componentId,lens:K.lens,reason:K.reason,before:K.before,after:K.after,source:K.source,importedAt:K.importedAt}));return Gn([...v.auditLog||[],...ae])}const Ve=g.useCallback((v,O,H)=>{c(ae=>{var $e;const K=(($e=ae.currentDraft[v])==null?void 0:$e[O])||qn(),be={...ae,currentDraft:{...ae.currentDraft,[v]:{...ae.currentDraft[v],[O]:vi(H)}}},he=[];K.score!==H.score&&he.push({eventType:"entry-score-updated",entityType:"entry",entityId:`${v}:${O}`,summary:`Updated readiness score for ${v} / ${O}: ${K.score} -> ${H.score}`,componentId:v,lens:O,before:{score:K.score},after:{score:H.score},source:"local"}),(K.rationale||"")!==(H.rationale||"")&&he.push({eventType:"entry-rationale-updated",entityType:"entry",entityId:`${v}:${O}`,summary:`Updated rationale for ${v} / ${O}`,componentId:v,lens:O,before:{rationale:K.rationale||""},after:{rationale:H.rationale||""},source:"local"}),(K.evidence||"")!==(H.evidence||"")&&he.push({eventType:"entry-evidence-updated",entityType:"entry",entityId:`${v}:${O}`,summary:`Updated evidence for ${v} / ${O}`,componentId:v,lens:O,before:{evidence:K.evidence||""},after:{evidence:H.evidence||""},source:"local"});const We=new Map(K.actions.map(Ne=>[Ne.id,Ne]));return H.actions.forEach(Ne=>{const Me=We.get(Ne.id);if(!Me){he.push({eventType:"action-created",entityType:"action",entityId:Ne.id,summary:`Created action in ${v} / ${O}`,componentId:v,lens:O,after:{text:Ne.text,status:Ne.status,owner:Ne.owner,actionType:Ne.actionType},source:"local"});return}const At=JSON.stringify({text:Me.text,status:Me.status,owner:Me.owner,actionType:Me.actionType,notes:Me.notes,dueDate:Me.dueDate,startDate:Me.startDate,evidence:Me.evidence}),gt=JSON.stringify({text:Ne.text,status:Ne.status,owner:Ne.owner,actionType:Ne.actionType,notes:Ne.notes,dueDate:Ne.dueDate,startDate:Ne.startDate,evidence:Ne.evidence});At!==gt&&he.push({eventType:"action-updated",entityType:"action",entityId:Ne.id,summary:`Updated action in ${v} / ${O}`,componentId:v,lens:O,before:{text:Me.text,status:Me.status,owner:Me.owner,actionType:Me.actionType},after:{text:Ne.text,status:Ne.status,owner:Ne.owner,actionType:Ne.actionType},source:"local"})}),{...kt(be),auditLog:ke(ae,he)}})},[ke]),ut=g.useCallback((v,O,H,ae)=>{const K=Z(v,O);Ve(v,O,{...K,actions:K.actions.map(be=>be.id===H?{...be,status:et(ae)}:be)})},[Z,Ve]),It=g.useCallback((v,O,H,ae)=>{const K=Z(v,O).actions.find(he=>he.id===H);if(et(ae)==="Completed"&&K!==void 0&&!cu(K)&&!it(un)){Se({componentId:v,lens:O,actionId:H,status:ae});return}ut(v,O,H,ae)},[ut,Z]),Nt=g.useCallback((v,O)=>{c(H=>{const ae=H.objectives[v]||[],K={...H,objectives:{...H.objectives,[v]:O}};return JSON.stringify(ae)!==JSON.stringify(O)?{...K,auditLog:ke(H,[{eventType:"objectives-updated",entityType:"objective",entityId:v,summary:`Updated component outcomes for ${v}`,componentId:v,before:{objectiveCount:ae.length},after:{objectiveCount:O.length},source:"local"}])}:K})},[ke]),I=g.useCallback(v=>{const O=Li(o.orgProfile);if(O.isValid)return!0;const H=O.errors.map(ae=>`- ${ae.message}`).join(`
`);return window.confirm(`${v} has CST warnings:

${H}

Continue anyway?`)},[o.orgProfile]),T=g.useCallback(v=>{D(v)},[]),ee=g.useCallback(()=>{if(!I("Export"))return;const O=za(o);Ut(`adoption-assessment-${(o.orgProfile.trustName||"export").replace(/\s+/g,"_")}.json`,JSON.stringify(O,null,2),"application/json"),T("Assessment export downloaded.")},[T,I,o]),ge=g.useCallback(()=>{var v;(v=V.current)==null||v.click()},[]),Oe=g.useCallback(async v=>{var K,be,he,We;const O=(K=v.target.files)==null?void 0:K[0];if(!O)return;const H=O.name.toLowerCase().endsWith(".json"),ae=!O.type||nu.has(O.type);if(!H||!ae){T("Import failed. Please choose a valid JSON file."),window.alert("Import failed. Please choose a valid JSON file."),v.target.value="";return}if(O.size>tu){T("Import failed. The selected file is larger than 5 MB."),window.alert("Import failed. The selected file is larger than 5 MB."),v.target.value="";return}try{const ft=await O.text(),$e=An(JSON.parse(ft)),Ne=()=>{c(Ot=>{const pt=kt(Ka($e,Ot));return pt.orgProfile.cstId||(pt.orgProfile={...pt.orgProfile,cstId:ha()}),{...pt,auditLog:ke(pt,[{eventType:"data-imported",entityType:"system",summary:`Imported assessment data from ${O.name}`,after:{fileName:O.name},source:"local"}])}}),m("dashboard"),T("Assessment import complete. Dashboard updated.")};if(ui(o)){Ne();return}const Me=(be=$e.orgProfile)==null?void 0:be.cstId,At=o.orgProfile.cstId,gt=o.orgProfile.projectName||o.orgProfile.trustName||"your currently loaded programme",Mt=((he=$e.orgProfile)==null?void 0:he.projectName)||((We=$e.orgProfile)==null?void 0:We.trustName)||O.name;if(Me&&Me!==At){if(!window.confirm(`"${Mt}" looks like a different programme than "${gt}".

Importing will replace everything currently loaded. Continue?`)){T("Import cancelled.");return}Ne();return}if(!Me&&!window.confirm(`"${Mt}" doesn't carry a programme ID (it may predate this feature).

Click OK to compare it against "${gt}" and merge item by item, or Cancel to load it as a different programme (replace everything).`)){Ne();return}const bt=Kc(o,$e);if(!bt.hasConflicts){c(Ot=>{const pt=kt(Za(Ot,$e,{}));return{...pt,auditLog:ke(pt,[{eventType:"data-imported",entityType:"system",summary:bt.autoMergeSummary.length?`Merged import from ${O.name} (${bt.autoMergeSummary.join(", ")})`:`Imported ${O.name} - no changes (already up to date)`,after:{fileName:O.name},source:"local"}])}}),m("dashboard"),T(bt.autoMergeSummary.length?`Merged automatically: ${bt.autoMergeSummary.join(", ")}.`:"Already up to date - nothing to import.");return}u({file:O,parsed:$e,report:bt})}catch{T("Import failed. Please verify the file contents."),window.alert("Unable to import adoption assessment. Please verify the file contents.")}finally{v.target.value=""}},[T,ke,o]),qe=g.useCallback(v=>{if(!S)return;const{file:O,parsed:H}=S,ae=Object.keys(v).length;c(K=>{const be=kt(Za(K,H,v));return{...be,auditLog:ke(be,[{eventType:"data-imported",entityType:"system",summary:`Merged import from ${O.name} (${ae} item(s) resolved)`,after:{fileName:O.name},source:"local"}])}}),u(null),m("dashboard"),T("Import merged into current programme.")},[T,ke,S]),Ie=g.useCallback(()=>{u(null),T("Import cancelled.")},[T]),nt=g.useCallback(async v=>{try{const O=await fetch(ou[v]);if(!O.ok)throw new Error(`Failed to load sample data: ${O.status}`);const H=An(await O.json());c(ae=>{const K=kt(Ka(H,ae));return{...K,auditLog:ke(K,[{eventType:"example-data-loaded",entityType:"system",summary:"Loaded example assessment data",source:"local"}])}}),m("dashboard"),T("Example assessment data loaded."),N()&&l(!1)}catch(O){console.error(O),T("Unable to load example data right now."),window.alert("Unable to load example data right now. Please try again.")}},[T,ke]),De=g.useCallback(()=>{if(!window.confirm("Warning: this will reset all assessment data (organisation profile, scores, actions, and history) and sign you out. If you are worried, please export your data first. Continue?"))return;const O=kt(_n());c(O),m("introduction"),R(is),ze(ns,is),localStorage.removeItem(eu),w({}),ze(ss,{}),ze(fs,!1),x(""),ze(as,""),Object.keys(localStorage).filter(H=>H.startsWith("nhs-digital-adoption-page-intro-seen:")).forEach(H=>localStorage.removeItem(H)),T("Assessment data has been reset and you have been signed out."),N()&&l(!1)},[T]),Ze=g.useCallback(()=>({generatedAt:new Date().toISOString(),targetMonth:G.previousMonthLabel,report:za(o)}),[G.previousMonthLabel,o]),He=g.useCallback(()=>`adoption-point-in-time-${G.previousMonthLabel.toLowerCase().replace(/\s+/g,"-")}.json`,[G.previousMonthLabel]);g.useCallback(()=>{const v=He();Ut(v,JSON.stringify(Ze(),null,2),"application/json")},[He,Ze]),g.useCallback(()=>{const v=W.trim()||"test@test.com",O=He(),H=`${Ye}

Attachment: ${O}`,ae=`mailto:${v}?subject=${encodeURIComponent(_e)}&body=${encodeURIComponent(H)}`;window.location.href=ae},[He,Ye,_e,W]),g.useCallback(()=>{const v=W.trim()||"test@test.com",O=He(),H=JSON.stringify(Ze(),null,2),ae=fu(hu(H)),K=`----nhs-adoption-reminder-${Date.now()}`,be=[`To: ${v}`,`Subject: ${_e}`,"MIME-Version: 1.0",`Content-Type: multipart/mixed; boundary="${K}"`,"",`--${K}`,'Content-Type: text/plain; charset="UTF-8"',"Content-Transfer-Encoding: 8bit","",Ye,"",`--${K}`,`Content-Type: application/json; name="${O}"`,"Content-Transfer-Encoding: base64",`Content-Disposition: attachment; filename="${O}"`,"",ae,`--${K}--`,""].join(`\r
`),he=G.previousMonthLabel.toLowerCase().replace(/\s+/g,"-");Ut(`adoption-reminder-${he}.eml`,be,"message/rfc822")},[He,Ze,Ye,_e,W,G.previousMonthLabel]),g.useCallback(()=>{w(v=>({...v,[le]:!0}))},[le]),G.shouldNotify&&re[le];const rt=g.useMemo(()=>Zo(o,Ee,ie),[o,Ee,ie]),ct=g.useMemo(()=>rt.filter(v=>v.completed).length,[rt]),Pt=g.useCallback(v=>{R(v)},[]),Vt=g.useCallback(v=>{c(O=>{const H=O.orgProfile.cst.pathway!==v.cst.pathway,ae={...O,orgProfile:v},K=H?fm(ae,v.cst.pathway):ae;return JSON.stringify(O.orgProfile)!==JSON.stringify(v)?{...K,auditLog:ke(O,[{eventType:"profile-updated",entityType:"profile",summary:"Updated CST profile details",before:{trustName:O.orgProfile.trustName,projectName:O.orgProfile.projectName,cst:O.orgProfile.cst},after:{trustName:v.trustName,projectName:v.projectName,cst:v.cst},source:"local"},...H?[{eventType:"pathway-changed",entityType:"profile",summary:`Changed pathway from ${O.orgProfile.cst.pathway} to ${v.cst.pathway}`,before:{pathway:O.orgProfile.cst.pathway},after:{pathway:v.cst.pathway},source:"local"}]:[]])}:K})},[]),nn=v=>{let O=0,H=0,ae=0,K=0;return v.lenses.forEach(be=>{var ft,$e;const he=(ft=o.currentDraft[v.id])==null?void 0:ft[be];he&&he.score>0&&(O++,($e=he.rationale)!=null&&$e.trim()&&H++);const We=(he==null?void 0:he.actions)||[];ae+=We.length,K+=We.filter(Ne=>Ns(Ne.status)).length}),O===0?{icon:"◯",color:"text-blue-100",label:"Not Started"}:O>H?{icon:"⚠",color:"text-red-300",label:"Missing Rationale"}:O<v.lenses.length?{icon:"◐",color:"text-amber-300",label:"In Progress"}:ae<=0||K<ae?{icon:"◐",color:"text-amber-300",label:"In Progress"}:{icon:"✓",color:"text-green-300",label:"Completed"}},$t=o.orgProfile.trustName||"Unconfigured Trust",Tt=o.orgProfile.projectName||"Unnamed Project",Lt=!gi(o.orgProfile);return e.jsxs("div",{className:`flex h-screen overflow-hidden ${C.darkMode?"bg-slate-900 text-slate-100":"bg-slate-50 text-slate-800"}`,children:[e.jsx("div",{role:"status","aria-live":"polite",className:"sr-only",children:B}),e.jsx("input",{ref:V,type:"file",accept:"application/json",className:"hidden",onChange:Oe}),i&&e.jsx("div",{className:"fixed inset-0 z-10 bg-slate-900/35 backdrop-blur-[1px] lg:hidden",onClick:()=>l(!1)}),e.jsxs("div",{className:`fixed inset-y-0 left-0 z-20 bg-[#005eb8] text-white flex flex-col shadow-xl overflow-hidden transition-all duration-300 ease-out lg:static lg:translate-x-0 ${i?"w-72 translate-x-0":"w-0 -translate-x-full lg:w-0"}`,style:{backgroundColor:C.themeColor},children:[e.jsxs("div",{className:"p-6 border-b border-blue-700",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold tracking-tight",children:"NHS Digital Adoption"}),e.jsxs("p",{className:"text-blue-200 text-xs mt-1 flex justify-between items-center",children:[e.jsx("span",{children:"Readiness Tracking Tool"}),e.jsx("span",{className:"opacity-80 font-medium",children:"V6.6"})]})]}),C.profileImageDataUrl?e.jsx("img",{src:C.profileImageDataUrl,alt:"Profile",className:"h-10 w-10 rounded-full border-2 border-blue-200 object-cover"}):null]}),e.jsx("button",{type:"button",onClick:()=>P("profile"),className:"mt-3 w-full rounded-md bg-blue-700 p-2 text-left text-xs hover:bg-blue-600",children:e.jsxs("div",{className:"font-semibold text-blue-100",children:["Objectives: ",ct,"/",rt.length]})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto py-4",children:[e.jsxs("button",{type:"button","aria-expanded":de.intro,onClick:()=>ce(v=>({...v,intro:!v.intro})),className:"mb-2 flex w-full items-center justify-between px-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-300 hover:text-white",children:[e.jsx("span",{children:"Intro"}),e.jsx("span",{"aria-hidden":"true",children:de.intro?"−":"+"})]}),de.intro?e.jsx("nav",{className:"space-y-1 mb-4",children:["introduction","engine-explained","project-details","where-am-i-now"].map(v=>e.jsx("button",{ref:O=>{Ue.current[`view:${v}`]=O},onClick:()=>P(v),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${d===v?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:v==="introduction"?"Introduction":v==="engine-explained"?"Engine Explained":v==="project-details"?"Project Profile":"Where Am I Now?"},v))}):null,Lt?e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button","aria-expanded":de.overview,onClick:()=>ce(v=>({...v,overview:!v.overview})),className:"mb-2 flex w-full items-center justify-between px-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-300 hover:text-white",children:[e.jsx("span",{children:"Overview"}),e.jsx("span",{"aria-hidden":"true",children:de.overview?"−":"+"})]}),de.overview?e.jsx("nav",{className:"space-y-1 mb-4",children:["dashboard","daily-checkin","action-plan","roadmap-view"].map(v=>e.jsx("button",{ref:O=>{Ue.current[`view:${v}`]=O},onClick:()=>P(v),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${d===v?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:v==="dashboard"?"Metrics Dashboard":v==="daily-checkin"?"Daily Check-in":v==="action-plan"?"Action Tracker":"Component Delivery Timeline"},v))}):null,e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Change Components"}),e.jsx("nav",{className:"space-y-2 mb-8",children:Array.from(new Set(t.map(v=>v.phase))).map(v=>{const O=t.filter(ae=>ae.phase===v),H=Fe[v]??!1;return e.jsxs("div",{className:"mx-2 overflow-hidden rounded-md",style:{backgroundColor:`${iu[v]||"#3b82f6"}33`},children:[e.jsxs("button",{type:"button","aria-expanded":H,onClick:()=>U(ae=>({...ae,[v]:!H})),className:"flex w-full items-center justify-between px-3 pb-1.5 pt-2.5 text-left text-sm font-semibold uppercase tracking-wider text-white",children:[e.jsx("span",{children:tt[v]||`Phase ${v}`}),e.jsx("span",{"aria-hidden":"true",children:H?"−":"+"})]}),H?O.map(ae=>{const K=d==="assessment"&&s===ae.id,be=nn(ae);return e.jsxs("button",{ref:he=>{Ue.current[`component:${ae.id}`]=he},onClick:()=>{z(ae.id)},className:`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${K?"bg-white font-medium text-[#005eb8]":`hover:bg-blue-800 ${be.color}`}`,children:[e.jsx("span",{className:"truncate pr-2",children:yo(ae.label)}),e.jsx("span",{className:"text-xs flex-shrink-0",title:be.label,"aria-label":be.label,children:be.icon})]},ae.id)}):null]},v)})}),e.jsxs("button",{type:"button","aria-expanded":de.tools,onClick:()=>ce(v=>({...v,tools:!v.tools})),className:"mb-2 flex w-full items-center justify-between px-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-300 hover:text-white",children:[e.jsx("span",{children:"Tools"}),e.jsx("span",{"aria-hidden":"true",children:de.tools?"−":"+"})]}),de.tools?e.jsx("nav",{className:"space-y-1 mb-8",children:["highlight-builder","force-field-analysis","compare","change-impact-assessment","stakeholder-analysis","raid-log","audit-log"].map(v=>e.jsx("button",{ref:O=>{Ue.current[`view:${v}`]=O},onClick:()=>P(v),className:`w-full flex items-center px-4 py-1 text-sm transition-colors ${d===v?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:v==="highlight-builder"?"Highlight Builder":v==="force-field-analysis"?"Force Field Analysis":v==="compare"?"Assess & Compare":v==="change-impact-assessment"?"Change Impact Assessment":v==="stakeholder-analysis"?"Stakeholder Analysis":v==="raid-log"?"RAID Log":"Audit Log"},v))}):null]}):null,e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider border-t border-blue-800 pt-6",children:"Account"}),e.jsx("nav",{className:"space-y-1 mb-8",children:(Lt?["settings","profile"]:["profile"]).map(v=>e.jsx("button",{ref:O=>{Ue.current[`view:${v}`]=O},onClick:()=>P(v),className:`w-full flex items-center px-4 py-1 text-sm transition-colors ${d===v?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:v==="settings"?"Settings":"Profile"},v))}),e.jsxs("div",{className:"mt-8 px-4 pb-4 border-t border-blue-800 pt-6",children:[e.jsx("div",{className:"text-[10px] font-semibold text-blue-300 uppercase tracking-wider mb-3",children:"Status Legend"}),e.jsxs("div",{className:"space-y-2 text-xs text-blue-200",children:[e.jsx("div",{children:"◯ Not Started"}),e.jsx("div",{children:"◐ In Progress"}),e.jsx("div",{children:"⚠ Missing Rationale"}),e.jsx("div",{children:"✓ Completed"})]})]})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col h-screen overflow-hidden",children:[e.jsx("header",{className:`${C.darkMode?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} border-b px-3 py-2 sm:px-6 shrink-0 z-10 ${d==="introduction"?"":"shadow-sm"}`,style:{borderTop:`3px solid ${C.themeColor}`},children:e.jsxs("div",{className:"flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{className:"min-w-0 flex items-center gap-2 sm:gap-3",children:[e.jsxs("button",{onClick:()=>l(v=>!v),className:"inline-flex h-9 items-center justify-center px-3 text-white rounded-md font-semibold transition-colors shadow-sm","aria-label":i?"Collapse side navigation":"Expand side navigation",title:i?"Collapse side navigation":"Expand side navigation",style:{backgroundColor:C.themeColor},children:[e.jsx("span",{"aria-hidden":"true",className:"text-lg leading-none",children:i?"«":"»"}),e.jsx("span",{className:"sr-only",children:i?"Collapse side navigation":"Expand side navigation"})]}),e.jsx("button",{onClick:Y,disabled:xe.length===0,title:xe.length===0?"No previous in-app page":"Back to previous page",className:`h-9 text-sm px-3 rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${C.darkMode?"text-slate-100 hover:bg-slate-700":"text-slate-600 hover:bg-slate-100"}`,children:"← Back"}),e.jsx("div",{className:"min-w-0",children:e.jsxs("div",{className:"flex min-w-0 items-center gap-1 text-sm",children:[e.jsx("span",{className:`truncate font-semibold ${C.darkMode?"text-slate-100":"text-slate-700"}`,title:$t,children:$t}),e.jsx("span",{className:`${C.darkMode?"text-slate-300":"text-slate-400"}`,children:"/"}),e.jsx("span",{className:`truncate ${C.darkMode?"text-slate-100":"text-slate-600"}`,title:Tt,children:Tt})]})})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 lg:justify-end",children:[e.jsxs("span",{className:"inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-800 sm:h-9 sm:w-auto sm:rounded-full",title:"Auto-save on","aria-label":"Auto-save on",children:[e.jsx("span",{className:"inline-flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white","aria-hidden":"true",children:"✓"}),e.jsx("span",{className:"sr-only sm:not-sr-only sm:ml-1",children:"Auto-save on"})]}),e.jsx("button",{onClick:()=>P("introduction"),"aria-label":"Show introduction",title:"Show introduction",className:`text-sm w-9 h-9 flex items-center justify-center bg-white text-[#425563] border border-[#768692] hover:bg-[#f0f4f5] rounded-full font-semibold transition-colors ${vs}`,children:"?"}),e.jsx("button",{type:"button",onClick:()=>{window.location.hash="#/"},"aria-label":"Go to home page",title:"Go to home page",className:`${Ge} h-9 w-16 px-6 py-0 inline-flex items-center justify-center`,children:"Home"}),e.jsx("button",{onClick:ge,className:`${Ge} h-9 px-3 py-0`,children:"Import"}),e.jsxs("button",{onClick:ee,className:`${Ge} h-9 px-3 py-0`,children:[e.jsx("span",{className:"sm:hidden",children:"Export"}),e.jsx("span",{className:"hidden sm:inline",children:"Export"})]})]})]})}),e.jsxs("main",{ref:p,className:"flex-1 overflow-y-auto px-8 pt-8 pb-28",children:[d==="daily-checkin"&&L?e.jsxs("section",{className:`${C.darkMode?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-6 rounded-xl border p-4 shadow-sm`,children:[e.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${C.darkMode?"text-slate-300":"text-slate-500"}`,children:"Objectives"}),e.jsxs("p",{className:`text-sm mt-1 ${C.darkMode?"text-slate-100":"text-slate-700"}`,children:[ct,"/",rt.length," complete - based on phase readiness, ownership, cadence and team participation."]})]}),e.jsx("button",{type:"button",onClick:()=>ne(!1),className:`${C.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-2 text-sm font-medium`,"aria-label":"Dismiss objectives card",children:"Dismiss"})]}),e.jsx("div",{className:"mt-4 grid gap-3 md:grid-cols-3",children:rt.map(v=>e.jsxs("div",{className:`rounded-lg border p-3 ${v.completed?"border-green-200 bg-green-50":C.darkMode?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${C.darkMode?"text-slate-100":"text-slate-800"}`,children:v.label}),e.jsx("span",{className:"text-xs font-bold",children:v.completed?"Done":"Not yet"})]}),e.jsx("p",{className:`mt-1 text-xs ${C.darkMode?"text-slate-300":"text-slate-600"}`,children:v.description})]},v.id))})]}):null,d==="dashboard"&&e.jsx("div",{ref:k,children:e.jsx(sr,{store:o,components:t,lenses:n,metrics:Ee,phaseFocusMode:C.phaseFocusMode||"auto",manualPhaseFocus:C.manualPhaseFocus,onPhaseFocusModeChange:v=>R(O=>({...O,phaseFocusMode:v,manualPhaseFocus:v==="manual"?O.manualPhaseFocus||Ee.currentPhase:O.manualPhaseFocus})),onManualPhaseFocusChange:v=>R(O=>({...O,phaseFocusMode:"manual",manualPhaseFocus:v})),onResetPhaseFocus:()=>R(v=>({...v,phaseFocusMode:"auto",manualPhaseFocus:Ee.currentPhase})),getEntry:Z,onComponentClick:z,onNavigate:P,onOpenLensInfo:f,onOpenOnboarding:()=>P("introduction"),colorAccessibilityMode:C.colorAccessibilityMode||"standard",darkMode:!!C.darkMode,componentRadarVisible:ye,onComponentRadarVisibleChange:me,componentRadarSize:Ce,onComponentRadarSizeChange:Le})}),d==="where-am-i-now"&&e.jsx(vc,{components:t,getEntry:Z,effectivePhaseFocus:Re,phaseFocusMode:C.phaseFocusMode||"auto",onComponentClick:z,onSetManualPhase:v=>R(O=>({...O,phaseFocusMode:"manual",manualPhaseFocus:v})),onResetToAuto:()=>R(v=>({...v,phaseFocusMode:"auto",manualPhaseFocus:Ee.currentPhase})),darkMode:!!C.darkMode}),d==="daily-checkin"&&e.jsx(fl,{store:o,components:t,metrics:Ee,getEntry:Z,onComponentClick:z,onActionView:je,guidanceTarget:mi,linkOverrides:o.orgProfile.linkOverrides,showAdditionalGuidanceLinks:we,phaseFocusMode:C.phaseFocusMode||"auto",manualPhaseFocus:C.manualPhaseFocus,colorAccessibilityMode:C.colorAccessibilityMode||"standard",darkMode:!!C.darkMode}),d==="project-details"&&e.jsx(ul,{orgProfile:o.orgProfile,onProfileUpdate:Vt,components:t,lenses:n,onComponentClick:z,onGoToIntroduction:()=>P("introduction"),onContinueToVision:()=>z("vision"),onGoToWhereAmINow:()=>P("where-am-i-now"),currentUserId:h,onCurrentUserChange:x,showExternalLinksSection:!!C.showExternalLinksSection,darkMode:!!C.darkMode}),d==="assessment"&&e.jsx(nl,{store:o,components:t,activeComponentId:s,getRubricText:uu,getEntry:Z,onComponentChange:z,onEntryUpdate:Ve,onOpenLensInfo:f,onActionRemove:(v,O,H)=>{const K=Z(v,O).actions.find(he=>he.id===H);if(!K)return;const be=window.prompt("Please provide a reason for removing this action. This will be included in the JSON export audit log.");if(!be||!be.trim()){window.alert("Removal cancelled. A reason is required to remove an action.");return}c(he=>{var At;const We=((At=he.currentDraft[v])==null?void 0:At[O])||qn(),ft={...We,actions:We.actions.filter(gt=>gt.id!==H).map(ru)},$e={...he.suppressedAutoActions};if(H.startsWith("vision-action:")||H.startsWith("case-for-change-action:")||H.startsWith("benefits-action:")||H.startsWith("sponsorship-action:")||H.startsWith("change-impact-action:")){const gt=lu(v,O),Mt=$e[gt]||[];Mt.includes(H)||($e[gt]=[...Mt,H])}const Ne={...he,currentDraft:{...he.currentDraft,[v]:{...he.currentDraft[v],[O]:ft}},suppressedAutoActions:$e};return{...kt(Ne),auditLog:ke(he,[{eventType:"action-removed",entityType:"action",entityId:H,summary:`Removed action from ${v} / ${O}`,componentId:v,lens:O,reason:be.trim(),before:{text:K.text,status:K.status,owner:K.owner,actionType:K.actionType},source:"local"}])}})},onObjectivesUpdate:Nt,onNavigateToTool:v=>P(v),hideGuidedWorkflow:!!C.hideGuidedWorkflow,onHideGuidedWorkflow:()=>R(v=>({...v,hideGuidedWorkflow:!0})),showAdditionalGuidanceLinks:we,showActionPriorityColours:!!C.showActionPriorityColours,currentUserId:h,currentUserProfileImageDataUrl:C.profileImageDataUrl,darkMode:!!C.darkMode,focusAction:oe,onFocusActionHandled:()=>ue(null)}),d==="action-plan"&&e.jsx(To,{actions:Pe,onComponentClick:z,onStatusChange:It,teamMembers:o.orgProfile.teamMembers||[],darkMode:!!C.darkMode}),d==="introduction"&&e.jsx(dc,{darkMode:!!C.darkMode,onGetStarted:()=>P("engine-explained")}),d==="engine-explained"&&e.jsx($l,{darkMode:!!C.darkMode,onGetStarted:()=>P("project-details"),onComponentClick:z}),d==="roadmap-view"&&e.jsx(ql,{components:t,metrics:Ee,getEntry:Z,onComponentClick:z,pathway:o.orgProfile.cst.pathway,pathwayChecks:o.pathwayChecks,darkMode:!!C.darkMode}),d==="highlight-builder"&&e.jsx(tc,{store:o,metrics:Ee,lenses:n,components:t,getEntry:Z,trustName:o.orgProfile.trustName,projectName:o.orgProfile.projectName,themeColor:C.themeColor,currentUserId:h,darkMode:!!C.darkMode}),d==="force-field-analysis"&&e.jsx(xo,{embedded:!0,onBack:()=>P("dashboard"),components:t,teamMembers:o.orgProfile.teamMembers||[],objectives:o.objectives,getEntry:Z,onEntryUpdate:Ve,onObjectivesUpdate:Nt}),d==="compare"&&e.jsx(_o,{embedded:!0,onBack:()=>P("dashboard")}),d==="change-impact-assessment"&&e.jsx(km,{embedded:!0,onBack:()=>P("dashboard")}),d==="stakeholder-analysis"&&e.jsx(Zm,{embedded:!0,onBack:()=>P("dashboard"),trustName:o.orgProfile.trustName,projectName:o.orgProfile.projectName,teamMembers:o.orgProfile.teamMembers||[],referenceLists:o.orgProfile.stakeholderReferenceLists||Ln,components:t,getEntry:Z,onEntryUpdate:Ve}),d==="raid-log"&&e.jsx(_m,{embedded:!0,onBack:()=>P("dashboard"),trustName:o.orgProfile.trustName,projectName:o.orgProfile.projectName,teamMembers:o.orgProfile.teamMembers||[]}),d==="audit-log"&&e.jsx(al,{events:o.auditLog,darkMode:!!C.darkMode}),d==="settings"&&e.jsx(xc,{userSettings:C,onUserSettingsUpdate:Pt,onLoadExampleData:nt,onResetData:De,darkMode:!!C.darkMode}),d==="profile"&&e.jsx(fc,{orgProfile:o.orgProfile,onProfileUpdate:Vt,userSettings:C,onUserSettingsUpdate:Pt,currentUserId:h,onCurrentUserChange:x,objectives:rt,darkMode:!!C.darkMode})]}),r?e.jsx(oc,{lensName:r,onClose:()=>f(""),darkMode:!!C.darkMode}):null,S?e.jsx(ac,{report:S.report,myLabel:o.orgProfile.projectName||o.orgProfile.trustName||"Mine",theirLabel:((sn=S.parsed.orgProfile)==null?void 0:sn.projectName)||((yn=S.parsed.orgProfile)==null?void 0:yn.trustName)||S.file.name,onResolve:qe,onCancel:Ie,darkMode:!!C.darkMode}):null,e.jsx($o,{toolkitChoice:o.orgProfile.cst.toolkitChoice,darkMode:!!C.darkMode}),e.jsx(Do,{open:d==="assessment"&&s==="vision"&&b.isOpen,onClose:b.close,darkMode:!!C.darkMode}),e.jsx(bi,{open:fe!==null,onCancel:()=>Se(null),onContinue:v=>{fe&&(v&&ze(un,!0),ut(fe.componentId,fe.lens,fe.actionId,fe.status),Se(null))},darkMode:!!C.darkMode})]})]})}export{Iu as AdoptionApp,Iu as default};
