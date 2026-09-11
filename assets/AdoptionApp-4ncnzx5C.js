import{r as m,j as e,a as $n}from"./vendor-react-nTLHQtbJ.js";import{n as Ge,a as Ln,A as Ri,b as At,c as Qt,F as Pi}from"./ForceFieldAnalysisApp-iycsrj4u.js";import{l as Sn,s as sn,d as nt,e as Di}from"./utils-Dnh79fEb.js";import{g as Hs,p as $i,G as Ti,d as Li}from"./vendor-misc-XphrxPy-.js";import{g as Bi,D as Mi,p as Gi,P as Da,a as xt,T as Fi,O as $a,C as Ui,b as Wi,i as Hi}from"./moscow-C4QZk_bL.js";import{A as Zt,a as An,U as es,n as Xe,i as ns,b as Vi,d as Ft}from"./actionModel-BGfmvkyd.js";import{A as zn,g as Ut,a as Nt}from"./components-D25Uzw0S.js";import{C as ln}from"./vendor-chart--cLemJB8.js";import qi from"./CompareApp-wZNgzHFI.js";const tt="nhs-digital-adoption-evidence-warning-dismissed";function Ta({open:n,onContinue:t,onCancel:s,darkMode:a=!1}){const[i,l]=m.useState(!1);return n?e.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"evidence-warning-title",className:`w-full max-w-md rounded-xl border p-6 shadow-2xl ${a?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsx("h2",{id:"evidence-warning-title",className:`text-lg font-semibold ${a?"text-slate-100":"text-slate-900"}`,children:"Evidence reminder"}),e.jsx("p",{className:`mt-3 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:"Please don't forget to attach evidence if you have it"}),e.jsxs("label",{className:`mt-4 flex items-center gap-2 text-sm ${a?"text-slate-200":"text-slate-700"}`,children:[e.jsx("input",{type:"checkbox",checked:i,onChange:r=>l(r.target.checked),className:"h-4 w-4 rounded border-slate-400"}),"Don't show this message again"]}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:s,className:Ge,children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>t(i),className:Ln,children:"Continue"})]})]})}):null}const Yi="nhs-digital-adoption-page-intro-seen:";function pn(n){const t=`${Yi}${n}`,[s,a]=m.useState(()=>!Sn(t));return{isOpen:s,close:()=>{sn(t,!0),a(!1)},reopen:()=>a(!0)}}function vn({open:n,onClose:t,title:s,body:a,darkMode:i=!1}){return n?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45",children:e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-lg rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-900"}`,children:s}),e.jsx("button",{type:"button",onClick:t,"aria-label":"Close introduction",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${i?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:`mt-3 space-y-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:a}),e.jsx("div",{className:"mt-5 flex justify-end",children:e.jsx("button",{type:"button",onClick:t,className:Ln,children:"Got it"})})]})}):null}function yn({onClick:n,darkMode:t=!1}){return e.jsx("button",{type:"button",onClick:n,"aria-label":"Show page introduction",title:"Show page introduction",className:`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${t?"border-slate-600 text-slate-200 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"?"})}const ut=[{title:"Explain your vision state",body:e.jsx("div",{className:"text-sm text-slate-700 space-y-2",children:e.jsx("p",{children:"Start by assessing where Vision stands today for each lens - be honest about the current state, not where you'd like it to be."})})},{title:"Assign owners to actions",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"Every action needs a named owner - without one, nothing moves and progress stalls."}),e.jsx("p",{children:"As owners complete or cancel every action at a readiness level, that lens automatically advances to the next level."})]})}];function Ki({open:n,onClose:t,darkMode:s=!1}){const[a,i]=m.useState(0);if(!n)return null;const l=ut[a],r=a===ut.length-1;return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`relative w-full max-w-lg rounded-xl border p-6 shadow-2xl ${s?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${s?"text-blue-300":"text-blue-600"}`,children:["Getting started · Step ",a+1," of ",ut.length]}),e.jsx("h3",{className:`mt-3 text-lg font-semibold ${s?"text-slate-100":"text-slate-900"}`,children:l.title}),e.jsx("div",{className:`mt-3 ${s?"text-slate-300":""}`,children:l.body}),e.jsxs("div",{className:"mt-6 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:()=>i(o=>Math.max(0,o-1)),disabled:a===0,className:`rounded-md border px-4 py-2 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${s?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Back"}),r?e.jsx("button",{type:"button",onClick:t,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Got it"}):e.jsx("button",{type:"button",onClick:()=>i(o=>Math.min(ut.length-1,o+1)),className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Next"})]})]})})}const zi={"avt-v2-2026":[{id:"avt-vision-case-for-change",title:"Vision and Case for Change",pageHint:"Section: Early readiness",text:"Use a clear case for change, define outcomes, and ensure leadership sponsorship before go-live."},{id:"avt-stakeholder-engagement",title:"Stakeholder Engagement",pageHint:"Section: People and communication",text:"Map stakeholder groups, identify adoption risks, and use targeted communication plans for each audience."},{id:"avt-training-readiness",title:"Training and Capability",pageHint:"Section: Capability and learning",text:"Align learning interventions with role-based needs and verify confidence through readiness checkpoints."},{id:"avt-benefits-tracking",title:"Benefits Tracking",pageHint:"Section: Value realisation",text:"Set measurable adoption indicators and review benefit evidence at regular intervals post go-live."},{id:"avt-reinforcement-bau",title:"Reinforcement and BAU Transfer",pageHint:"Section: Sustainment",text:"Embed reinforcement actions and hand over ownership to business-as-usual teams for sustained adoption."}],"change-management-v3-2023":[{id:"cmt-leadership-alignment",title:"Leadership Alignment",pageHint:"Section: Sponsorship and governance",text:"Secure visible executive sponsorship and align governance with programme milestones and risks."},{id:"cmt-change-impact",title:"Change Impact Assessment",pageHint:"Section: Planning and risk",text:"Assess process, role, and behaviour impacts early and prioritise mitigations before deployment."},{id:"cmt-resistance-management",title:"Resistance Management",pageHint:"Section: Adoption barriers",text:"Identify likely resistance themes and define practical interventions with named owners and timelines."},{id:"cmt-comms-cadence",title:"Communication Cadence",pageHint:"Section: Communications",text:"Establish a predictable communication cadence using concise updates and feedback loops."},{id:"cmt-post-go-live-support",title:"Post Go-Live Support",pageHint:"Section: Stabilisation",text:"Provide hypercare support with clear escalation routes and transition criteria into steady state."}]};Ti.workerSrc=$i;function Ji({toolkitChoice:n,darkMode:t=!1}){const[s,a]=m.useState(!1),[i,l]=m.useState(!1),[r,o]=m.useState(""),[u,h]=m.useState(1),[d,c]=m.useState("idle"),[x,b]=m.useState(""),[w,R]=m.useState([]),O=m.useMemo(()=>Bi(n),[n]),f=m.useMemo(()=>(zi[n]||[]).map(y=>({id:y.id,title:y.title,pageHint:y.pageHint,text:y.text,pageNumber:null})),[n]);m.useEffect(()=>{if(!s)return;let y=!1;return(async()=>{c("loading"),b("");try{const L=await fetch(O.path);if(!L.ok)throw new Error(`HTTP ${L.status}`);const Y=await L.arrayBuffer(),te=new Uint8Array(Y);let re;try{re=await Hs({data:te}).promise}catch(G){if(re=await Hs({data:te,disableWorker:!0}).promise,!y){const Ne=G instanceof Error?G.message:String(G);b(`Worker fallback used: ${Ne}`)}}const P=[];for(let G=1;G<=re.numPages;G+=1){if(y)return;const Te=(await(await re.getPage(G)).getTextContent()).items.map(Ke=>"str"in Ke?Ke.str:"").join(" ").replace(/\s+/g," ").trim();Te&&P.push({id:`${n}-page-${G}`,title:`Page ${G}`,pageHint:`Page ${G}`,text:Te,pageNumber:G})}y||(R(P),c("ready"))}catch{y||(R([]),c("error"),b("Unable to read PDF text for indexing in this browser session."))}})(),()=>{y=!0}},[s,O.path,n]),m.useEffect(()=>{h(1),o(""),R([]),c("idle"),b("")},[n]);const I=w.length>0?w:f,H=m.useMemo(()=>{const y=Number.isFinite(u)&&u>0?Math.floor(u):1;return`${O.path}#page=${y}`},[O.path,u]),j=m.useMemo(()=>{const y=r.trim().toLowerCase();if(!y)return I.slice(0,5).map(Y=>({entry:Y,score:0}));const Z=y.split(/\s+/).filter(Boolean),L=Y=>{const te=`${Y.title} ${Y.text} ${Y.pageHint}`.toLowerCase();let re=0;return te.includes(y)&&(re+=8),Z.forEach(P=>{te.includes(P)?re+=2:te.split(/\W+/).some(Ne=>Ne&&(Ne.includes(P)||P.includes(Ne)))&&(re+=1)}),re};return I.map(Y=>({entry:Y,score:L(Y)})).filter(Y=>Y.score>0).sort((Y,te)=>te.score-Y.score).slice(0,5)},[r,I])[0]||null;return m.useEffect(()=>{r.trim()&&j!=null&&j.entry.pageNumber&&h(j.entry.pageNumber)},[j,r]),e.jsxs("div",{className:"fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2","data-testid":"global-toolkit-chatbot",children:[s?e.jsxs("div",{className:`w-[380px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border shadow-2xl ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant"}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("button",{type:"button",onClick:()=>l(!0),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Maximise"}),e.jsx("button",{type:"button",onClick:()=>a(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Minimise"})]})]}),e.jsxs("div",{className:`space-y-3 p-3 ${t?"bg-slate-800":"bg-slate-50"}`,children:[e.jsxs("div",{className:`max-w-[95%] rounded-2xl rounded-bl-md px-3 py-2 text-xs shadow-sm ${t?"bg-slate-700 text-slate-100":"bg-white text-slate-700"}`,children:["Showing your selected toolkit from Project Profile:",e.jsx("div",{className:"mt-1 font-semibold",children:O.label})]}),e.jsx("div",{className:`overflow-hidden rounded-lg border ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:e.jsx("iframe",{title:"Selected Toolkit Preview",src:H,className:"h-[260px] w-full"})}),e.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-end gap-2",children:[e.jsx("label",{htmlFor:"toolkit-page-input",className:`text-[11px] font-semibold uppercase tracking-wider ${t?"text-slate-300":"text-slate-600"}`,children:"Go to page"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{id:"toolkit-page-input",type:"number",min:1,value:u,onChange:y=>h(Number(y.target.value)||1),className:`w-20 rounded-md border px-2 py-1.5 text-xs ${t?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})})]}),e.jsxs("div",{className:`rounded-lg border p-2 ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsx("label",{htmlFor:"toolkit-fuzzy-search",className:`mb-1 block text-[11px] font-semibold uppercase tracking-wider ${t?"text-slate-300":"text-slate-600"}`,children:"Quick snippet search"}),e.jsx("input",{id:"toolkit-fuzzy-search",type:"search",value:r,onChange:y=>o(y.target.value),placeholder:"Try: sponsorship, training, resistance",className:`w-full rounded-md border px-2 py-1.5 text-xs ${t?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-400":"border-slate-300 bg-white text-slate-900 placeholder-slate-500"}`}),e.jsx("div",{className:"mt-2",children:r.trim()?j!=null&&j.entry.pageNumber?e.jsxs("button",{type:"button",onClick:()=>{h(j.entry.pageNumber),l(!0)},className:`w-full rounded-md px-2 py-1.5 text-left text-xs font-semibold ${t?"bg-slate-800 text-slate-100 hover:bg-slate-700":"bg-slate-100 text-slate-800 hover:bg-slate-200"}`,children:["Go to best match: Page ",j.entry.pageNumber]}):e.jsx("p",{className:`text-xs ${t?"text-slate-400":"text-slate-500"}`,children:"No close page match found. Try broader keywords."}):e.jsx("p",{className:`text-xs ${t?"text-slate-400":"text-slate-500"}`,children:"Enter a keyword to jump to the most relevant page."})}),e.jsx("p",{className:`mt-2 text-[11px] ${t?"text-slate-400":"text-slate-500"}`,children:d==="loading"?"Indexing toolkit text from all pages...":d==="ready"?`Search is using full-document text (${w.length} pages indexed).`:d==="error"?"Full-document indexing unavailable, using fallback snippets.":"Search will expand to all pages when the assistant opens."}),x?e.jsx("p",{className:`mt-1 text-[11px] ${t?"text-amber-300":"text-amber-700"}`,children:x}):null]}),e.jsx("a",{href:O.path,target:"_blank",rel:"noopener noreferrer",className:"inline-block text-xs font-semibold text-[#005eb8] underline",children:"Open full toolkit in new tab"})]})]}):null,i?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4",children:e.jsxs("div",{className:`relative h-[90vh] w-[95vw] overflow-hidden rounded-2xl border shadow-2xl ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant · Expanded Viewer"}),e.jsx("button",{type:"button",onClick:()=>l(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Close"})]}),e.jsx("iframe",{title:"Selected Toolkit Full View",src:H,className:"h-[calc(90vh-42px)] w-full"})]})}):null,e.jsxs("button",{type:"button",onClick:()=>a(y=>!y),className:"inline-flex items-center gap-2 rounded-full bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-blue-700","aria-label":"Open toolkit assistant",children:[e.jsx("span",{"aria-hidden":"true",children:"💬"}),"Toolkit assistant"]})]})}function La({showAdvancedControls:n,onToggleAdvanced:t,onReset:s,resultText:a,activeFilters:i,activeFiltersAriaLabel:l,darkMode:r=!1}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:t,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${r?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:n?"Hide advanced controls":"Show advanced controls"}),e.jsx("button",{type:"button",onClick:s,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${r?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:"Reset filters"}),e.jsx("span",{className:`text-xs ${r?"text-slate-300":"text-slate-500"}`,"aria-live":"polite",children:a})]}),i.length>0?e.jsx("div",{className:"flex flex-wrap gap-2","aria-label":l,children:i.map(o=>e.jsx("span",{className:`inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${r?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-slate-50 text-slate-700"}`,children:o},o))}):null]})}function Xi({actions:n,onComponentClick:t,onStatusChange:s,teamMembers:a=[],darkMode:i=!1}){const l=pn("action-tracker"),[r,o]=m.useState(""),[u,h]=m.useState("all"),[d,c]=m.useState("all"),[x,b]=m.useState("all"),[w,R]=m.useState("all"),[O,f]=m.useState("all"),[I,H]=m.useState("component"),[C,j]=m.useState("asc"),[y,Z]=m.useState(!1),L=m.useCallback(B=>{t(B)},[t]),Y=m.useMemo(()=>Array.from(new Set(n.map(B=>B.component))).sort((B,le)=>B.localeCompare(le)),[n]),te=m.useMemo(()=>Array.from(new Set([...a.map(B=>B.name),...n.map(B=>B.action.owner).filter(Boolean)])).sort((B,le)=>B.localeCompare(le)),[n,a]),re=m.useMemo(()=>Array.from(new Set(n.map(B=>B.action.status))).sort((B,le)=>B.localeCompare(le)),[n]),P=m.useMemo(()=>{const B=n.map(le=>le.action.actionType).filter(le=>!!le);return Array.from(new Set([...Zt,...B])).sort((le,ie)=>le.localeCompare(ie))},[n]),G=m.useMemo(()=>{const B=n.map(le=>le.action.readinessScore).filter(le=>le!==void 0);return Array.from(new Set(B)).sort((le,ie)=>le-ie)},[n]),Ne={0:"Not Started",1:"Emerging",2:"Developing",3:"Embedding",4:"Adopted",5:"Thriving"},Ce=m.useMemo(()=>{const B=r.trim().toLowerCase();return n.filter(ie=>u!=="all"&&ie.component!==u||d!=="all"&&ie.action.owner!==d||x!=="all"&&ie.action.status!==x||w!=="all"&&(ie.action.actionType||"")!==w||O!=="all"&&ie.action.readinessScore!==O?!1:B?[ie.component,ie.lens,ie.action.text,ie.action.actionType||"",ie.action.owner,ie.action.timescale,ie.action.status].join(" ").toLowerCase().includes(B):!0).sort((ie,ge)=>{const be=se=>{switch(I){case"lens":return se.lens;case"owner":return se.action.owner||"Unassigned";case"status":return se.action.status;case"actionType":return se.action.actionType||"Unassigned";case"component":default:return se.component}},ye=be(ie).localeCompare(be(ge));return C==="asc"?ye:-ye})},[w,n,u,d,O,r,I,C,x]),Te=m.useMemo(()=>{const B=[];return r.trim()&&B.push(`Search: ${r.trim()}`),u!=="all"&&B.push(`Component: ${u}`),x!=="all"&&B.push(`Status: ${x}`),w!=="all"&&B.push(`Action type: ${w}`),O!=="all"&&B.push(`Readiness: ${Ne[O]}`),d!=="all"&&B.push(`Owner: ${d}`),(I!=="component"||C!=="asc")&&B.push(`Sort: ${I} (${C})`),B},[w,u,d,O,r,I,C,x]),Ke=()=>{o(""),h("all"),c("all"),b("all"),R("all"),f("all"),H("component"),j("asc"),Z(!1)};return e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"mb-6 flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${i?"text-slate-100":"text-slate-800"}`,children:"Action Tracker"}),e.jsx(yn,{onClick:l.reopen,darkMode:i})]}),e.jsx(vn,{open:l.isOpen,onClose:l.close,title:"Action Tracker",darkMode:i,body:e.jsx("p",{children:"Every action across every component in one searchable, filterable, sortable table. Filter by component, owner, status, action type or readiness score, and click a row's component to jump straight to its assessment."})}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-4 mb-6 space-y-3`,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:r,onChange:B=>o(B.target.value),placeholder:"Search actions, owners, lenses...",className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-900 text-slate-100":"text-slate-900"}`}),e.jsxs("select",{value:u,onChange:B=>h(B.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All components"}),Y.map(B=>e.jsx("option",{value:B,children:B},B))]}),e.jsxs("select",{value:x,onChange:B=>b(B.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All statuses"}),re.map(B=>e.jsx("option",{value:B,children:B},B))]})]}),e.jsx(La,{showAdvancedControls:y,onToggleAdvanced:()=>Z(B=>!B),onReset:Ke,resultText:`Showing ${Ce.length} actions`,activeFilters:Te,activeFiltersAriaLabel:"Active action tracker filters",darkMode:i}),y?e.jsxs("div",{className:`grid grid-cols-1 sm:grid-cols-5 gap-3 rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("select",{value:d,onChange:B=>c(B.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),te.map(B=>e.jsx("option",{value:B,children:B},B))]}),e.jsxs("select",{value:w,onChange:B=>R(B.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),P.map(B=>e.jsx("option",{value:B,children:B},B))]}),e.jsxs("select",{value:O==="all"?"all":String(O),onChange:B=>f(B.target.value==="all"?"all":Number(B.target.value)),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All readiness levels"}),G.map(B=>e.jsx("option",{value:String(B),children:Ne[B]},B))]}),e.jsxs("select",{value:I,onChange:B=>H(B.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${i?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"component",children:"Sort: Component"}),e.jsx("option",{value:"lens",children:"Sort: Lens"}),e.jsx("option",{value:"owner",children:"Sort: Owner"}),e.jsx("option",{value:"actionType",children:"Sort: Action Type"}),e.jsx("option",{value:"status",children:"Sort: Status"})]}),e.jsx("button",{type:"button",onClick:()=>j(B=>B==="asc"?"desc":"asc"),className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${i?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-white"}`,children:C==="asc"?"A-Z":"Z-A"})]}):null]}),e.jsx("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:Ce.length?e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:`min-w-full table-fixed ${i?"divide-slate-700":"divide-slate-200"} divide-y`,children:[e.jsx("thead",{className:i?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Change Component"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Lens"}),e.jsx("th",{className:`w-[22%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Action Type"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Timescale"}),e.jsx("th",{className:`w-[14%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${i?"text-slate-300":"text-slate-500"}`,children:"Status"})]})}),e.jsx("tbody",{className:`${i?"bg-slate-800 divide-slate-700":"bg-white divide-slate-100"} divide-y`,children:Ce.map(({compId:B,component:le,lens:ie,action:ge})=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:e.jsx("button",{onClick:()=>L(B),className:"text-left underline underline-offset-2 hover:text-[#005eb8] transition-colors",children:le})}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:ie}),e.jsx("td",{className:`w-[22%] px-4 py-3 text-sm whitespace-normal break-words leading-snug ${i?"text-slate-100":"text-slate-700"}`,children:ge.text}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:ge.actionType||"Unassigned"}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:ge.owner}),e.jsx("td",{className:`px-4 py-3 text-sm ${i?"text-slate-100":"text-slate-700"}`,children:ge.timescale}),e.jsx("td",{className:"w-[14%] px-4 py-3 text-sm",children:e.jsx("select",{"aria-label":`Status for ${ge.text}`,value:Xe(ge.status),onChange:be=>s==null?void 0:s(B,ie,ge.id,be.target.value),className:`w-full rounded-md border px-2 py-1 text-xs font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] ${An[Xe(ge.status)]} ${i?"bg-slate-900":"bg-white"}`,children:es.map(be=>e.jsx("option",{value:be,children:be},be))})})]},`${B}-${ie}-${ge.text}`))})]})}):e.jsx("div",{className:`p-6 ${i?"text-slate-300":"text-slate-500"}`,children:n.length?"No actions match the current filters.":"No actions recorded yet."})})]})}const Qe={1:"Pre-Discovery",2:"Solution Design",3:"Development",4:"Deployment / Go Live",5:"Post-Deployment"},Qi={sampleRubric:[{id:"r1",label:"Leadership",max:5},{id:"r2",label:"Culture",max:5}],adoptionRubric:[{id:"a1",label:"Adoption awareness",max:100},{id:"a2",label:"Training coverage",max:100}],vision:{"Strategic Direction and Leadership":{1:"Senior leaders take initial steps to develop the vision through workshops and discussions, beginning to align on a shared future direction and its link to strategic objectives.",2:"A draft vision has been created and is being tested and refined with a wider group to check clarity, relevance and alignment to strategy.",3:"A clear vision is defined and agreed at senior level but not yet consistently communicated to all stakeholders.",4:"Senior leaders consistently communicate the vision and link it to organisational goals, priorities and decisions.",5:"Leaders speak with one voice about the vision, actively reinforcing it through actions and decisions and ensuring it is well understood across the organisation."},"People Experience and Culture":{1:"Early conversations focus on what is changing but staff involvement is limited. The vision is not yet clear or meaningful to most people.",2:"The draft vision is tested with a wider audience. Staff input is sought to check relevance and whether the vision reflects real experiences and concerns. Feedback is used to refine the vision.",3:`The vision is defined but not yet consistently communicated to all stakeholders.

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

There is a clearer plan for sustainment, although it is still being embedded and tested.`,3:"Key processes, roles, and measures are in place and being followed. The change is being maintained in practice, with issues identified and addressed as they arise.",4:"The change is embedded into day-to-day operations. Processes are consistently followed, and performance is stable, with benefits starting to be realised.",5:"The change is fully sustained as “the way we do things.” Processes are regularly reviewed and improved, and performance continues to strengthen over time."}}},Ba=["highlight-builder","force-field-analysis","compare"],ft={"highlight-builder":{label:"Highlight Builder",matchText:"Highlight Builder"},"force-field-analysis":{label:"Force Field Analysis",matchText:"Force Field Analysis"},compare:{label:"Assess & Compare",matchText:"Assess & Compare"}};function Wt(n,t){if(!n.linkedActions.length)return"Not Started";const s=n.linkedActions.map(a=>{const i=(t[a.lens]||[]).find(l=>l.id===a.actionId);return(i==null?void 0:i.status)||"Planned"});return s.some(a=>a==="Blocked")?"Blocked":s.every(a=>a==="Completed")?"Completed":s.some(a=>a!=="Planned")?"In Progress":"Not Started"}function Vs(){return`cst-${Date.now()}-${Math.random().toString(36).slice(2,10)}`}function kt(n){return{trustName:(n==null?void 0:n.trustName)||"",region:(n==null?void 0:n.region)||"",trustType:(n==null?void 0:n.trustType)||"",projectName:(n==null?void 0:n.projectName)||"",leadName:(n==null?void 0:n.leadName)||"",cst:{...Mi,...(n==null?void 0:n.cst)||{}},linkOverrides:n==null?void 0:n.linkOverrides,componentFurtherReading:n==null?void 0:n.componentFurtherReading,coreLinks:n==null?void 0:n.coreLinks,customComponentLinks:n==null?void 0:n.customComponentLinks,toolLinks:(n==null?void 0:n.toolLinks)??Ba.map(t=>({key:`tool-default-${t}`,tool:t,matchText:ft[t].matchText})),externalLinksInitiated:n==null?void 0:n.externalLinksInitiated,teamMembers:(n==null?void 0:n.teamMembers)||[],cstId:n==null?void 0:n.cstId}}function Zi(n){return n?Object.keys(n).reduce((t,s)=>{const a=n[s]||{};return t[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},t},{}):{}}function St(n){return{view:(n==null?void 0:n.view)||"dashboard",orgProfile:kt(n==null?void 0:n.orgProfile),currentDraft:(n==null?void 0:n.currentDraft)||{},objectives:n!=null&&n.objectives?ss(n.objectives):{},suppressedAutoActions:eo(n==null?void 0:n.suppressedAutoActions),auditLog:no(n==null?void 0:n.auditLog),history:(n==null?void 0:n.history)||[],phaseOverrides:(n==null?void 0:n.phaseOverrides)||{},pathwayChecks:Zi(n==null?void 0:n.pathwayChecks)}}function eo(n){return n?Object.keys(n).reduce((t,s)=>(t[s]=[...n[s]||[]],t),{}):{}}function no(n){return n?n.map(t=>({...t})):[]}function Ot(){return{score:0,justification:"",evidence:"",actions:[]}}function Ma(n){return{score:n.score,justification:n.justification,evidence:n.evidence,actions:n.actions.map(t=>({...t,linkedTargets:(t.linkedTargets||[]).map(s=>({componentId:s.componentId,lens:s.lens}))}))}}function ts(n){return Object.keys(n).reduce((t,s)=>(t[s]=Object.keys(n[s]).reduce((a,i)=>(a[i]=Ma(n[s][i]),a),{}),t),{})}function to(n){return{...n,linkedActions:n.linkedActions.map(t=>({...t}))}}function ss(n){return Object.keys(n).reduce((t,s)=>(t[s]=(n[s]||[]).map(to),t),{})}function Ga(n,t){if(n<=0)return"Amber";const s=t-n;return s>=2?"Red":s>0?"Amber":"Green"}function so(n,t=new Date){if(n.length===0)return{status:"Green",reason:"No outstanding actions at the current level."};const s=n.map(o=>({action:o,due:o.dueDate?new Date(o.dueDate):null})).map(({action:o,due:u})=>({action:o,due:u&&!isNaN(u.getTime())?u:null})),a=s.filter(({due:o})=>o!==null&&o<t);if(a.length>0){const o=a.length>1?` and ${a.length-1} more`:"";return{status:"Red",reason:`${a.length} action${a.length===1?" is":"s are"} overdue: "${a[0].action.text}"${o}.`}}const i=new Date(t.getTime()+14*24*60*60*1e3),l=s.filter(({due:o})=>o!==null&&o<=i);return l.length>0?{status:"Amber",reason:`${l.length} action${l.length===1?" is":"s are"} due within 14 days: "${l[0].action.text}".`}:s.filter(({due:o})=>o===null).length===n.length?{status:"Amber",reason:`${n.length} action${n.length===1?" has":"s have"} no due date set, so timeline risk can't be assessed.`}:{status:"Green",reason:"All outstanding actions are on track against their due dates."}}const Fa={Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},ao={Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"},Ht={1:{vision:5,case_for_change:5,sponsorship:0,change_network:0,benefits:0,change_impact:0,risk_management:0,cm_readiness:0,stakeholder:0,resistance:0,skills_learning:0,capability:0,change_adoption:0,process_change:0,reinforcement:0,org_maturity:0,transfer_bau:0},2:{vision:5,case_for_change:5,sponsorship:2,change_network:2,benefits:3,change_impact:2,risk_management:2,cm_readiness:2,stakeholder:2,resistance:2,skills_learning:2,capability:2,change_adoption:2,process_change:3,reinforcement:2,org_maturity:2,transfer_bau:2},3:{vision:5,case_for_change:5,sponsorship:3,change_network:3,benefits:4,change_impact:3,risk_management:3,cm_readiness:3,stakeholder:3,resistance:3,skills_learning:4,capability:3,change_adoption:3,process_change:4,reinforcement:3,org_maturity:3,transfer_bau:3},4:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:4,stakeholder:5,resistance:4,skills_learning:5,capability:4,change_adoption:4,process_change:5,reinforcement:4,org_maturity:4,transfer_bau:4},5:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:5,stakeholder:5,resistance:5,skills_learning:5,capability:5,change_adoption:5,process_change:5,reinforcement:5,org_maturity:5,transfer_bau:5}};function Yn(n,t,s){return!t||!Ht[t]?s:Ht[t][n]??s}function io(n){const t=Number((n==null?void 0:n.score)||0),s=((n==null?void 0:n.actions)||[]).some(a=>a.readinessScore===0);return t===0&&!s?1:t}function oo(n,t){const s=[];return n.lenses.forEach(a=>{const i=t(n.id,a),l=io(i);((i==null?void 0:i.actions)||[]).forEach(r=>{(r.readinessScore??l)===l&&!ns(r.status)&&s.push({id:r.id,text:r.text,lens:a,owner:r.owner||"",status:r.status||"",dueDate:r.dueDate||""})})}),s}function Ua(n,t,s){return n.filter(a=>a.phase===s).map(a=>{const i=oo(a,t),{status:l,reason:r}=so(i),o=`${i.length} action${i.length===1?"":"s"} pending completion.`;return{componentId:a.id,componentLabel:a.label,phase:a.phase,gapToTarget:0,bragStatus:l,bragReason:r,summary:o,message:`${a.label}: ${o}`,outstandingActions:i}}).filter(a=>a.outstandingActions.length>0).sort((a,i)=>{const l={Red:0,Amber:1,Green:2,Blue:3};return l[a.bragStatus]!==l[i.bragStatus]?l[a.bragStatus]-l[i.bragStatus]:i.outstandingActions.length-a.outstandingActions.length})}function ro(n,t){var R;let s=0,a=0,i=0,l=0;const r=new Map;t.forEach(O=>{const f=r.get(O.phase)||{componentCount:0,assessedLenses:0,totalLenses:0,onTrackComponents:0,totalActions:0,completedActions:0};f.componentCount+=1,f.totalLenses+=O.lenses.length;let I=0;O.lenses.forEach(j=>{var Y;const y=(Y=n.currentDraft[O.id])==null?void 0:Y[j],Z=Number((y==null?void 0:y.score)||0);s+=Z,I+=Z,Z>0&&(a+=1,f.assessedLenses+=1),((y==null?void 0:y.actions)||[]).forEach(te=>{i+=1,f.totalActions+=1,ns(te.status)&&(l+=1,f.completedActions+=1)})});const H=O.lenses.length?Number((I/O.lenses.length).toFixed(1)):0,C=Yn(O.id,O.phase,O.target);H>=C&&(f.onTrackComponents+=1),r.set(O.phase,f)});const o=t.reduce((O,f)=>O+f.lenses.length,0),u=o*5,h=u?Math.round(s/u*100):0,d=i?Math.round(l/i*100):0,c=[...r.entries()].sort(([O],[f])=>O-f).map(([O,f])=>{const I=f.totalActions?Math.round(f.completedActions/f.totalActions*100):0,H=f.componentCount?f.onTrackComponents/f.componentCount:0,C=H>=.75&&I>=50?"Green":H>=.4||I>=25?"Amber":"Red";return{phase:O,componentCount:f.componentCount,assessedLenses:f.assessedLenses,totalLenses:f.totalLenses,onTrackComponents:f.onTrackComponents,actionCompletionPct:I,rag:C}}),x=c.find(O=>O.onTrackComponents<O.componentCount),b=(x==null?void 0:x.phase)||((R=c[c.length-1])==null?void 0:R.phase)||1,w=Ua(t,(O,f)=>{var I;return(I=n.currentDraft[O])==null?void 0:I[f]},b);return{totalCurrent:s,assessedCount:a,totalExpected:o,overallPct:h,totalActions:i,completedActions:l,actionCompletionPct:d,currentPhase:b,phaseSummaries:c,nextSteps:w}}function lo(n,t,s,a){return t.map(i=>{let l=0,r=0;return s.forEach(o=>{o.lenses.includes(i)&&(l+=Number(a(o.id,i).score||0),r+=1)}),r?Number((l/r).toFixed(1)):0})}function co(n,t){return n.map(s=>{let a=0,i=0;return t.forEach(l=>{l.lenses.includes(s)&&(a+=l.target,i+=1)}),i?Number((a/i).toFixed(1)):0})}function uo(n,t,s,a){const i=lo(n,t,s,a),l=co(t,s);return{labels:t,datasets:[{label:"Current Score",data:i,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",borderWidth:2,pointRadius:4,pointHoverRadius:6},{label:"Target",data:l,borderColor:"#00A499",backgroundColor:"rgba(0, 164, 153, 0.05)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function Vt(n,t,s,a){const i=s&&Ht[s]?s:null,l=o=>o<=0?"#768692":o<1.5?"#AE2521":o<2.5?"#FFB81C":o<3.5?"#005EB8":o<4.5?"#330072":"#00A499",r=n.map(o=>{if(a)return o.lenses.includes(a)?Number(t(o.id,a).score||0):null;const u=o.lenses.map(c=>t(o.id,c));if(!u.some(c=>c.score>0||!!c.justification.trim()||!!c.evidence.trim()||c.actions.length>0))return null;const d=u.map(c=>Number(c.score||0));return d.length?Math.min(...d):null});return{labels:n.map(o=>o.label),datasets:[{label:a?`Current Readiness (${a})`:"Current Readiness (weakest lens)",data:r,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.12)",borderWidth:2,pointRadius:r.map(o=>o===null?0:4),pointHoverRadius:r.map(o=>o===null?0:6),pointBackgroundColor:r.map(o=>l(o??0)),pointBorderColor:r.map(o=>l(o??0))},{label:i?`Exemplar (Phase ${i})`:"Target Average",data:n.map(o=>Yn(o.id,i||void 0,o.target)),borderColor:"#94a3b8",backgroundColor:"rgba(148, 163, 184, 0.06)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function mo(n,t,s){const a=[],i=new Set,l=(r,o,u)=>{const h=`${u.id}:${r}:${o}`;if(i.has(h))return;i.add(h);const d=t(r);a.push({compId:r,component:d.label,lens:o,action:{...u}})};return Object.keys(n.currentDraft).forEach(r=>{Object.keys(n.currentDraft[r]).forEach(o=>{(s(r,o).actions||[]).forEach(h=>{(h.linkedTargets&&h.linkedTargets.length?h.linkedTargets:[{componentId:r,lens:o}]).forEach(c=>{l(c.componentId,c.lens,h)})})})}),a}function go(n,t,s){var u;const a=((u=n.objectives)==null?void 0:u[t])||[],i=h=>h.reduce((d,c)=>(d[c]=s(t,c).actions,d),{}),l=Array.from(new Set(a.flatMap(h=>h.linkedActions.map(d=>d.lens)))),r=i(l),o=a.filter(h=>Wt(h,r)==="Completed").length;return{total:a.length,completed:o}}const qs=7*24*60*60*1e3,po=30*24*60*60*1e3;function ho(n,t,s){const a=[];t.phaseSummaries.forEach(w=>{const R=Qe[w.phase]||`Phase ${w.phase}`;a.push({id:`phase-${w.phase}-assessed`,category:"Phase",label:`Phase ${w.phase}: ${R} - fully assessed`,description:"Every lens across this phase's components has been scored.",completed:w.totalLenses>0&&w.assessedLenses===w.totalLenses}),a.push({id:`phase-${w.phase}-on-track`,category:"Phase",label:`Phase ${w.phase}: ${R} - on track`,description:"Every component in this phase is scoring at or above its exemplar target for where the programme is now.",completed:w.componentCount>0&&w.onTrackComponents===w.componentCount})});const i=Object.values(n.currentDraft).flatMap(w=>Object.values(w).flatMap(R=>R.actions||[]));a.push({id:"all-actions-owned",category:"Ownership",label:"Every action has an owner",description:"No actions are left unassigned.",completed:i.length>0&&i.every(w=>{var R;return!!((R=w.owner)!=null&&R.trim())})});const l=Object.values(n.objectives||{}).flat();a.push({id:"all-outcomes-owned",category:"Ownership",label:"Every outcome has an owner",description:"No outcomes are left unassigned.",completed:l.length>0&&l.every(w=>{var R;return!!((R=w.owner)!=null&&R.trim())})});const r=Date.now(),o=n.auditLog||[],u=o.filter(w=>r-new Date(w.timestamp).getTime()<=qs);a.push({id:"active-this-week",category:"Cadence",label:"Active this week",description:"At least one update has been made in the last 7 days.",completed:u.length>0});const h=new Set;o.forEach(w=>{const R=Math.floor((r-new Date(w.timestamp).getTime())/qs);R>=0&&R<4&&h.add(R)}),a.push({id:"four-week-cadence",category:"Cadence",label:"Steady progress: updated every week for a month",description:`${h.size}/4 of the last 4 weeks have at least one update.`,completed:h.size>=4}),a.push({id:"month-finalised",category:"Cadence",label:"This month finalised",description:"The current month has a finalised snapshot, so progress this month is captured for the trend.",completed:(n.history||[]).some(w=>w.monthLabel===s)});const d=n.orgProfile.teamMembers||[];a.push({id:"team-roster-started",category:"Team",label:"Team roster started",description:"At least 2 team members have been added.",completed:d.length>=2});const c=o.filter(w=>r-new Date(w.timestamp).getTime()<=po),x=new Set(c.map(w=>w.actor));a.push({id:"multiple-contributors",category:"Team",label:"Multiple contributors this month",description:"More than one person has made updates in the last 30 days.",completed:x.size>=2});const b=new Set(i.map(w=>{var R;return(R=w.owner)==null?void 0:R.trim().toLowerCase()}).filter(w=>!!w));return a.push({id:"ownership-spread",category:"Team",label:"Ownership spread across the team",description:"Actions are owned by more than one person, not concentrated on one.",completed:b.size>=2}),a}const it=["Strategic Direction and Leadership","People Experience and Culture","Planning and Risk","Skills and Behaviour","Process and Sustainment"],as={"Strategic Direction and Leadership":{outcome:"Provide a clear and unifying direction for the change, backed by visible, empowered leadership that removes barriers, prioritises resources, and drives accountability.",whatGoodLooksLike:"Leaders speak with one voice, consistently reinforcing the vision and outcomes. Decisions are timely, transparent, and aligned to strategic priorities. Governance is purposeful, with clear roles and escalations. Everyone understands why the change is happening and how it connects to organisational goals."},"People Experience and Culture":{outcome:"Create the conditions where people feel informed, supported, safe, and motivated, creating a culture that embraces the change rather than resists it.",whatGoodLooksLike:"Staff feel involved, heard, and respected. Communication is timely, honest, and tailored to different roles. People know how the change affects them and feel psychologically safe to raise concerns. Change Champions are active, engagement is high, and belief improves over time. Behaviours begin to shift organically as trust grows."},"Planning and Risk":{outcome:"Use evidence, data, and structured analysis to plan the change effectively, anticipate impacts, manage risks, and inform decision-making throughout delivery.",whatGoodLooksLike:"Impacts are well understood and documented. Risks are identified early and mitigated proactively. Baselines and KPIs are established before implementation, with benefits tracked throughout. Pilots and readiness checks ensure no surprises. Decisions are grounded in insight, not opinion."},"Skills and Behaviour":{outcome:"Give people the capabilities, confidence, and behavioural habits they need to adopt the new ways of working consistently and sustainably.",whatGoodLooksLike:"Staff are trained, assessed, and supported in ways that match real-world workflows. New behaviours are clearly defined, reinforced by leaders, and evident in day-to-day practice. Change Champions and Super-users are active; confidence grows over time; and requests for support decrease as competence increases."},"Process and Sustainment":{outcome:"Embed the change into operational processes, ensuring it becomes the way we do things, and create mechanisms for continuous improvement and long-term stability.",whatGoodLooksLike:"Updated SOPs, workflows, and ownership structures are in place and being followed. Issues are resolved quickly. Benefits are monitored and reported regularly. Improvements continue beyond go-live, with clear BAU ownership. The change stabilises and performance gains hold or increase over time."}},fo={vision:"Defines the future state and why the change matters.",case_for_change:"Builds a clear, credible rationale and expected benefits.",sponsorship:"Secures visible leadership ownership, governance, and decisions.",change_network:"Builds and mobilises change agents and local champions.",benefits:"Tracks baseline, benefits ownership, and value realisation.",change_impact:"Assesses who is impacted and the scale of change required.",risk_management:"Identifies, tracks, and mitigates adoption and delivery risks.",cm_readiness:"Confirms readiness, sequencing, and change planning discipline.",stakeholder:"Plans and delivers stakeholder engagement and communications.",resistance:"Anticipates and addresses resistance with practical interventions.",skills_learning:"Designs learning, support, and reinforcement for role readiness.",capability:"Builds confidence and competence to adopt new ways of working.",change_adoption:"Measures uptake and consistency of new behaviours in practice.",process_change:"Embeds workflow changes into everyday operational delivery.",reinforcement:"Sustains momentum so adoption does not decay after launch.",org_maturity:"Improves long-term organisational change capability and maturity.",transfer_bau:"Transitions ownership into BAU with clear accountability."};function Wa(n){return fo[n]||"Component description not yet defined."}function qt(n){const s=as[n];return s?`This lens ${s.outcome.charAt(0).toLowerCase()}${s.outcome.slice(1)}`:"This lens provides an additional perspective on how each component is landing across teams and services."}const Bn=[{score:0,label:"Not Started",color:"#768692"},{score:1,label:"Emerging",color:"#AE2521"},{score:2,label:"Developing",color:"#FFB81C"},{score:3,label:"Embedding",color:"#005EB8"},{score:4,label:"Adopted",color:"#330072"},{score:5,label:"Thriving",color:"#00A499"}];function On(n){return Bn[Math.max(0,Math.min(Bn.length-1,Math.round(n)))]}const Ys={small:560,medium:680,large:1e3};function Ks(n,t,s,a,i){return i?"Blue":s<=0?"N/A":a<=0?"Amber":n>=t&&a<s?"Green":Ga(n,t)}const bo={"N/A":"text-slate-600 bg-slate-200",Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},zs=["#0f766e","#0369a1","#7c3aed","#b45309","#be123c"],xo=Bn;function So({store:n,components:t,lenses:s,metrics:a,getEntry:i,onComponentClick:l,onNavigate:r,onOpenLensInfo:o,onOpenOnboarding:u,colorAccessibilityMode:h="standard",darkMode:d=!1,phaseFocusMode:c="auto",manualPhaseFocus:x,onPhaseFocusModeChange:b,onManualPhaseFocusChange:w,onResetPhaseFocus:R,componentRadarVisible:O=!0,onComponentRadarVisibleChange:f,componentRadarSize:I="medium",onComponentRadarSizeChange:H}){const C=pn("dashboard"),[j,y]=m.useState(""),[Z,L]=m.useState("all"),[Y,te]=m.useState(()=>a.currentPhase),[re,P]=m.useState("all"),[G,Ne]=m.useState("score"),[Ce,Te]=m.useState("desc"),[Ke,B]=m.useState(!1),le=m.useMemo(()=>[...new Set(t.map(_=>_.phase))].sort((_,ae)=>_-ae),[t]),ie=a.currentPhase,ge=c==="manual"&&x&&le.includes(x)?x:ie,[be,ye]=m.useState(!0),se=m.useMemo(()=>n.history.length>0?n.history[n.history.length-1]:null,[n.history]),De=se!==null?a.overallPct-se.overallPercentage:null,$e=m.useMemo(()=>{const _=new Date;_.setHours(0,0,0,0);const ae=new Date(_);ae.setDate(_.getDate()+7);const J=[];return t.forEach(he=>{he.lenses.forEach(xe=>{i(he.id,xe).actions.forEach(ke=>{if(!ke.dueDate||ke.status==="Completed"||ke.status==="Cancelled")return;const Ae=new Date(ke.dueDate);isNaN(Ae.getTime())||Ae<=ae&&J.push({action:ke,componentLabel:he.label,componentId:he.id,isOverdue:Ae<_})})})}),J.sort((he,xe)=>new Date(he.action.dueDate).getTime()-new Date(xe.action.dueDate).getTime())},[t,i,n.currentDraft]),ze=m.useMemo(()=>{const _=j.trim().toLowerCase();return t.map(ae=>{let J=0,he=!0,xe=0,ke=0;ae.lenses.forEach(A=>{const U=i(ae.id,A),W=Number(U.score||0);J+=W,W!==5&&(he=!1);const ne=U.actions||[];xe+=ne.length,ke+=ne.filter(oe=>oe.status==="Completed").length});const Ae=Number((J/ae.lenses.length).toFixed(1)),S=Yn(ae.id,ge,ae.target),D=Ae===0?"not-started":Ae>=S?"on-track":"below-target";let E=null;if(se){let A=0;ae.lenses.forEach(ne=>{var oe,Se;A+=Number(((Se=(oe=se.data[ae.id])==null?void 0:oe[ne])==null?void 0:Se.score)||0)});const U=Number((A/ae.lenses.length).toFixed(1)),W=Number((Ae-U).toFixed(1));W!==0&&(E=W)}return{component:ae,avgNum:Ae,exemplarTarget:S,status:D,delta:E,actionCount:xe,completedActionCount:ke,allLensesLevelFive:he}}).filter(({component:ae,status:J})=>Z!=="all"&&J!==Z||Y!=="all"&&ae.phase!==Y?!1:_?ae.label.toLowerCase().includes(_):!0).sort((ae,J)=>{let he=0;return G==="name"?he=ae.component.label.localeCompare(J.component.label):G==="target"?he=ae.component.target-J.component.target:he=ae.avgNum-J.avgNum,Ce==="asc"?he:-he})},[t,Y,ge,i,se,j,G,Ce,Z]),Be=m.useMemo(()=>{const _=[];return j.trim()&&_.push(`Search: ${j.trim()}`),Z!=="all"&&_.push(`Status: ${Z.replace("-"," ")}`),Y!=="all"&&_.push(`Phase: ${Y}`),(G!=="score"||Ce!=="desc")&&_.push(`Sort: ${G} (${Ce})`),_},[Y,j,G,Ce,Z]),Ie=()=>{y(""),L("all"),te("all"),Ne("score"),Te("desc"),B(!1)},cn=a.phaseSummaries.find(_=>_.phase===ge),Je=(cn==null?void 0:cn.rag)||"Red",dn=Je.toLowerCase(),en=h==="color-blind-friendly"?{"N/A":"text-slate-700 bg-slate-200",Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"}:bo;return e.jsxs("div",{className:`adoption-dashboard max-w-6xl mx-auto ${d?"theme-dark":"theme-light"}`,children:[be&&$e.length>0&&e.jsx("div",{className:"mb-6 rounded-lg border border-red-200 bg-red-50 p-4",children:e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-sm font-semibold text-red-800 mb-2",children:[$e.filter(_=>_.isOverdue).length>0&&`${$e.filter(_=>_.isOverdue).length} overdue action${$e.filter(_=>_.isOverdue).length>1?"s":""}`,$e.filter(_=>_.isOverdue).length>0&&$e.filter(_=>!_.isOverdue).length>0&&", ",$e.filter(_=>!_.isOverdue).length>0&&`${$e.filter(_=>!_.isOverdue).length} due within 7 days`]}),e.jsxs("ul",{className:"space-y-1.5",children:[$e.slice(0,3).map(_=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`shrink-0 text-xs font-bold px-1.5 py-0.5 rounded ${_.isOverdue?"bg-red-200 text-red-800":"bg-amber-100 text-amber-800"}`,children:_.isOverdue?"Overdue":"Due soon"}),e.jsxs("span",{className:"text-xs text-slate-700",children:[e.jsx("button",{onClick:()=>l(_.componentId),className:"font-medium text-[#005eb8] hover:underline mr-1",children:_.componentLabel}),"— ",_.action.text,_.action.dueDate&&e.jsxs("span",{className:"text-slate-400 ml-1",children:["(due"," ",new Date(_.action.dueDate).toLocaleDateString("en-GB",{day:"numeric",month:"short"}),")"]})]})]},_.action.id)),$e.length>3&&e.jsxs("li",{className:"text-xs text-slate-500 pl-1",children:["+ ",$e.length-3," more - see the Action Tracker for the full list."]})]})]}),e.jsx("button",{onClick:()=>ye(!1),className:"shrink-0 text-slate-400 hover:text-slate-600 text-xl leading-none","aria-label":"Dismiss",children:"×"})]})}),e.jsxs("div",{className:"mb-1 flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${d?"text-slate-100":"text-slate-800"}`,children:"Adoption Engine Dashboard"}),e.jsx(yn,{onClick:C.reopen,darkMode:d})]}),u?e.jsx("button",{type:"button",onClick:u,className:"rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Show introduction again"}):null]}),e.jsxs("p",{className:`text-sm mb-6 ${d?"text-slate-300":"text-slate-600"}`,children:["This tracks how ready ",n.orgProfile.projectName||"your programme"," is for adoption, based on ",t.length," change-management components, each assessed through up to"," ",s.length," lenses."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{className:`${d?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-4 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${d?"text-slate-300":"text-slate-500"}`,children:"Live Delivery Progress"}),e.jsxs("div",{className:"flex items-end gap-3",children:[e.jsxs("span",{className:"text-3xl font-bold text-[#005eb8]",children:[a.overallPct,"%"]}),De!==null&&e.jsxs("span",{className:`text-sm font-semibold mb-1 ${De>0?"text-green-600":De<0?"text-red-500":"text-slate-400"}`,children:[De>0?"↑":De<0?"↓":"="," ",Math.abs(De),"% vs last month"]})]}),e.jsx("div",{className:"mt-4 w-full bg-slate-100 rounded-full h-3 relative overflow-hidden",children:e.jsx("div",{className:"absolute top-0 left-0 h-full bg-[#005eb8]",style:{width:`${a.overallPct}%`}})}),e.jsx("div",{className:"flex justify-between text-xs mt-2 text-slate-400",children:e.jsx("span",{children:"Derived from current working data across all components."})})]}),e.jsxs("div",{className:`dashboard-metric-card dashboard-metric-card--phase dashboard-metric-card--${dn} rounded-lg shadow-sm p-4 border`,children:[e.jsx("h3",{className:"dashboard-metric-card__label text-sm font-medium mb-1",children:"Current Phase Focus"}),e.jsxs("div",{className:"mb-2 flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>b==null?void 0:b("auto"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${c==="auto"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Auto"}),e.jsx("button",{type:"button",onClick:()=>b==null?void 0:b("manual"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${c==="manual"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Manual"}),c==="manual"?e.jsx("select",{value:ge,onChange:_=>w==null?void 0:w(Number(_.target.value)),className:"rounded-md border border-white/50 bg-white/90 px-2 py-1 text-xs font-medium text-slate-800","aria-label":"Manual phase focus",children:le.map(_=>e.jsx("option",{value:_,children:Qe[_]||`Phase ${_}`},_))}):null,c==="manual"&&R?e.jsx("button",{type:"button",onClick:R,className:"rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100",children:"Reset to suggested"}):null]}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsx("span",{className:"dashboard-metric-card__headline text-3xl font-bold",children:Qe[ge]||`Phase ${ge}`})}),e.jsxs("p",{className:"dashboard-metric-card__description text-sm mt-2",children:[Je," status based on delivery progress and action completion.",c==="manual"?` Suggested phase is ${Qe[ie]||`Phase ${ie}`}.`:""]})]}),e.jsxs("div",{className:`${d?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-4 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${d?"text-slate-300":"text-slate-500"}`,children:"Action Completion"}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsxs("span",{className:`text-3xl font-bold ${d?"text-slate-100":"text-slate-700"}`,children:[a.actionCompletionPct,"%"]})}),e.jsxs("p",{className:`text-sm mt-2 ${d?"text-slate-300":"text-slate-500"}`,children:[a.completedActions," actions completed. Keep it up!"]})]})]}),e.jsxs("div",{className:`mb-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border px-4 py-3 ${d?"border-blue-800 bg-blue-950/40 text-slate-200":"border-blue-200 bg-blue-50 text-slate-700"}`,children:[e.jsx("p",{className:"text-sm",children:"Need a focused view of what needs attention today?"}),r?e.jsx("button",{type:"button",onClick:()=>r("daily-checkin"),className:"font-semibold text-[#005eb8] underline underline-offset-2 hover:text-[#003087]",children:"Open Daily Check-in"}):null]}),a.assessedCount===0?e.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-8 border border-slate-200 mb-8 text-center",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800",children:"Getting started"}),e.jsx("p",{className:"text-sm text-slate-600 mt-2 max-w-xl mx-auto",children:"Nothing has been assessed yet, so there's nothing to chart. Set up your Project first, then start scoring your first component to see your readiness build up here."}),e.jsxs("div",{className:"mt-4 flex items-center justify-center gap-3",children:[r?e.jsx("button",{type:"button",onClick:()=>r("project-details"),className:"rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Set up your Project"}):null,t[0]?e.jsx("button",{type:"button",onClick:()=>l(t[0].id),className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Start your first assessment"}):null]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${d?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-1 ${d?"text-slate-100":"text-slate-800"}`,children:"Phase Progress"}),e.jsxs("p",{className:`text-sm mb-4 ${d?"text-slate-300":"text-slate-500"}`,children:["Phases run 1 to 5, from early readiness at go-live through to fully embedding the change."," ",r?e.jsx("button",{type:"button",onClick:()=>r("engine-explained"),className:"font-medium text-[#005eb8] hover:underline",children:"See how the Adoption Engine works"}):null]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:a.phaseSummaries.map(_=>{const ae=_.rag==="Green"?"bg-green-100 text-green-700":_.rag==="Amber"?"bg-amber-100 text-amber-700":"bg-red-100 text-red-700",J=_.totalLenses?Math.round(_.assessedLenses/_.totalLenses*100):0;return e.jsxs("div",{className:`rounded-md border p-4 ${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:`font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:Qe[_.phase]||`Phase ${_.phase}`}),e.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded ${ae}`,children:_.rag})]}),e.jsxs("p",{className:`text-xs ${d?"text-slate-300":"text-slate-600"}`,children:[_.onTrackComponents,"/",_.componentCount," components on target"]}),e.jsxs("p",{className:`text-xs mt-1 ${d?"text-slate-300":"text-slate-600"}`,children:[J,"% lens coverage, ",_.actionCompletionPct,"% actions complete"]})]},_.phase)})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("details",{className:`order-2 mb-8 overflow-hidden rounded-lg border shadow-sm group ${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between px-5 py-4 text-lg font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] [&::-webkit-details-marker]:hidden ${d?"text-slate-100 hover:bg-slate-700":"text-slate-800 hover:bg-slate-50"}`,children:[e.jsx("span",{children:"Readiness analytics"}),e.jsx("span",{className:"text-2xl font-normal transition-transform group-open:rotate-45",children:"+"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 border-t border-slate-200 p-5 lg:grid-cols-2 dark:border-slate-700",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h3",{className:`mb-3 text-base font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Readiness Trajectory"}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${d?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:n.history.length>0?e.jsx("canvas",{id:"adoption-line-chart"}):e.jsx("div",{className:"text-center text-slate-400",children:e.jsx("p",{children:"No historical data yet. Finalise your first month to generate trends."})})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Strategic Lenses Spread"}),o&&s[0]?e.jsx("button",{type:"button",onClick:()=>o(s[0]),className:"text-xs font-medium text-[#005eb8] hover:underline",children:"What's a lens?"}):null]}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${d?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:e.jsx("canvas",{id:"adoption-radar-chart"})}),e.jsxs("div",{className:`${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mt-4 rounded-md border p-3`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${d?"text-slate-300":"text-slate-600"}`,children:"Lens key"}),e.jsx("div",{className:"mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2",children:s.map((_,ae)=>e.jsxs("div",{className:`flex items-center gap-2 text-xs ${d?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full",style:{backgroundColor:zs[ae%zs.length]},"aria-hidden":"true"}),e.jsx("span",{children:_})]},`lens-key-${_}`))})]}),e.jsx("p",{className:`text-xs text-center mt-4 ${d?"text-slate-300":"text-slate-500"}`,children:"Visualises your current draft readiness score averaged across the 5 strategic lenses against their specific target requirements."})]})]})]}),e.jsxs("div",{className:`order-1 ${d?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"mb-4 flex w-full flex-col gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:`text-lg font-semibold ${d?"text-slate-100":"text-slate-800"}`,children:"Change Component Radar"}),e.jsx("p",{className:`text-xs mt-1 ${d?"text-slate-300":"text-slate-500"}`,children:"Show or hide the change-component readiness radar, then use the overview list below to drill into delivery status."})]}),e.jsxs("div",{className:"flex w-full flex-wrap items-center justify-end gap-2",children:[O?e.jsx("div",{role:"group","aria-label":"Change component radar size",className:"flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-medium",children:["small","medium","large"].map(_=>e.jsx("button",{type:"button",onClick:()=>H==null?void 0:H(_),"aria-pressed":I===_,className:`px-3 py-2 capitalize transition-colors ${I===_?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:_},_))}):null,e.jsx("button",{type:"button",onClick:()=>f==null?void 0:f(!O),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-white",children:O?"Hide change component radar":"Show change component radar"})]})]}),O?e.jsxs("div",{className:`w-full ${d?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("div",{className:`mx-auto flex items-center justify-center rounded border p-2 ${d?"border-slate-700 bg-slate-950":"border-slate-100 bg-white"}`,style:{height:Ys[I],maxWidth:Ys[I]+120},children:e.jsx("canvas",{id:"adoption-component-radar-chart",className:"block h-full w-full"})}),e.jsx("div",{id:"radar-legend",className:`mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm ${d?"text-slate-300":"text-slate-600"}`,children:xo.map(_=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mr-2 h-3 w-3 rounded-full",style:{backgroundColor:_.color}}),e.jsx("span",{children:_.label})]},_.score))}),e.jsx("p",{className:`mt-4 text-center text-xs ${d?"text-slate-300":"text-slate-500"}`,children:"Visualises the weakest lens score for each component (a component is only as ready as its weakest lens) against the phase exemplar profile. Click a component label to jump to its assessment."})]}):null,e.jsxs("div",{className:"mt-4 w-full space-y-3",children:[e.jsxs("p",{className:`text-xs ${d?"text-slate-300":"text-slate-500"}`,children:["BRAG scoring is used for the change component overview:",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-sky-100 text-sky-800",children:"Blue"})," = every lens is level 5,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-green-100 text-green-800",children:"Green"})," = on target,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-red-100 text-red-800",children:"Red"})," = behind target dates,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-amber-100 text-amber-800",children:"Amber"})," = at risk / nearing deadline."]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:j,onChange:_=>y(_.target.value),placeholder:"Search components...",className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"}),e.jsxs("select",{value:Z,onChange:_=>L(_.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All statuses"}),e.jsx("option",{value:"not-started",children:"Not started"}),e.jsx("option",{value:"below-target",children:"Below target"}),e.jsx("option",{value:"on-track",children:"On track"})]}),e.jsxs("select",{value:Y,onChange:_=>te(_.target.value==="all"?"all":Number(_.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All phases"}),le.map(_=>e.jsx("option",{value:_,children:Qe[_]||`Phase ${_}`},_))]})]}),e.jsx(La,{showAdvancedControls:Ke,onToggleAdvanced:()=>B(_=>!_),onReset:Ie,resultText:`Showing ${ze.length} components`,activeFilters:Be,activeFiltersAriaLabel:"Active component filters",darkMode:d}),Ke?e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-md border border-slate-200 bg-slate-50 p-3",children:[e.jsxs("select",{value:G,onChange:_=>Ne(_.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"score",children:"Sort by score"}),e.jsx("option",{value:"name",children:"Sort by name"}),e.jsx("option",{value:"target",children:"Sort by target"})]}),e.jsx("button",{type:"button",onClick:()=>Te(_=>_==="asc"?"desc":"asc"),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white transition-colors",children:Ce==="asc"?"Ascending":"Descending"})]}):null]}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:[ze.map(({component:_,avgNum:ae,exemplarTarget:J,actionCount:he,completedActionCount:xe,delta:ke,allLensesLevelFive:Ae})=>{const S=Ks(ae,J,he,xe,Ae),D=S==="Red"?"↓":ae>=J?"→":ae<=0?"↑":"↗",E=S==="Red"?"text-red-500":ae>=J?d?"text-slate-300":"text-slate-500":"text-amber-600";return e.jsxs("button",{onClick:()=>l(_.id),title:Wa(_.id),className:`flex justify-between items-center p-3 rounded-md transition-colors group text-left ${d?"bg-slate-900 border border-slate-700 hover:border-blue-400":"bg-slate-50 border border-slate-100 hover:border-blue-300"}`,children:[e.jsx("span",{className:`text-sm font-medium truncate pr-2 group-hover:text-[#005eb8] ${d?"text-slate-100":"text-slate-700"}`,children:_.label}),e.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[e.jsx("span",{className:`text-xs font-semibold ${E}`,title:ae>=J?"On or above expected readiness for phase focus":ae<=0?"Not started: raise towards expected readiness":"Below expected readiness: continue improving","aria-label":ae>=J?"At expected readiness":ae<=0?"Not started, increase readiness":"Below expected readiness",children:D}),ke!==null&&e.jsxs("span",{className:`text-[11px] font-semibold ${ke>0?"text-green-600":"text-red-400"}`,title:"Change versus last finalised month",children:[ke>0?"+":"",ke.toFixed(1)]}),e.jsx("span",{className:`text-xs font-bold px-2.5 py-1 rounded ${en[S]}`,children:S})]})]},_.id)}),!ze.length&&e.jsx("div",{className:`col-span-full rounded-md border border-dashed p-6 text-sm ${d?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-500"}`,children:"No components match the current filters."})]})]})]}),e.jsxs("details",{className:`mb-8 overflow-hidden rounded-lg border shadow-sm group ${d?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between px-5 py-4 text-lg font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] [&::-webkit-details-marker]:hidden ${d?"text-slate-100 hover:bg-slate-700":"text-slate-800 hover:bg-slate-50"}`,children:[e.jsx("span",{children:"Lenses and which components they apply to"}),e.jsx("span",{className:"text-2xl font-normal transition-transform group-open:rotate-45",children:"+"})]}),e.jsxs("div",{className:"border-t border-slate-200 p-5 dark:border-slate-700",children:[e.jsxs("div",{className:"flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsx("div",{children:e.jsx("p",{className:"mt-2 text-xs text-slate-600 max-w-3xl",children:"A component is the change topic you are delivering (for example, Vision). A lens is the angle used to assess that component. For example, Vision is reviewed through Strategic Direction and Leadership and People Experience and Culture to check both leadership alignment and whether people understand and believe in the vision."})}),e.jsxs("select",{value:re,onChange:_=>P(_.target.value==="all"?"all":Number(_.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:w-40",children:[e.jsx("option",{value:"all",children:"All phases"}),le.map(_=>e.jsx("option",{value:_,children:Qe[_]||`Phase ${_}`},_)),'"']})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(_=>{const ae=t.filter(J=>J.lenses.includes(_)).filter(J=>re==="all"||J.phase===re);return ae.length?e.jsxs("div",{className:`rounded-md p-4 ${d?"border border-slate-700 bg-slate-900":"border border-slate-100 bg-slate-50"}`,children:[e.jsx("h4",{className:"font-bold text-sm text-[#005eb8] mb-3",children:_}),e.jsx("p",{className:`mb-3 text-xs ${d?"text-slate-300":"text-slate-600"}`,children:qt(_)}),e.jsx("ul",{className:"space-y-2",children:ae.map(J=>{const he=i(J.id,_),xe=Number(he.score||0),ke=Yn(J.id,ge,J.target),Ae=he.actions||[],S=Ks(xe,ke,Ae.length,Ae.filter(D=>D.status==="Completed").length,!1);return e.jsxs("li",{className:`text-xs flex justify-between items-center p-2 rounded ${d?"bg-slate-800 border border-slate-700":"bg-white border border-slate-100"}`,children:[e.jsx("span",{className:`truncate pr-2 font-medium ${d?"text-slate-100":"text-slate-700"}`,children:J.label}),e.jsx("button",{onClick:()=>l(J.id),className:`px-2.5 py-0.5 rounded font-bold ${en[S]}`,children:S})]},J.id)})})]},_):null})})]})]})]}),e.jsx(vn,{open:C.isOpen,onClose:C.close,title:"Adoption Engine Dashboard",darkMode:d,body:e.jsx("p",{children:"This tracks how ready your programme is for adoption, based on your change-management components, each assessed through several lenses. Use the filters and sort controls to focus on what needs attention, and click a component to open its assessment."})})]})}const Tn={label:"Change Management Toolkit",url:"https://future.nhs.uk/CMN/view?objectId=129489733"};function is(n,t){var r,o,u,h,d;if(!t)return n;const s=(r=t.links)==null?void 0:r[n.key],a=(o=s==null?void 0:s.url)==null?void 0:o.trim(),i=((u=s==null?void 0:s.label)==null?void 0:u.trim())||n.label;return a?{...n,label:i,url:a}:((s==null?void 0:s.fallback)??"default")==="base"&&((d=(h=t.base)==null?void 0:h.url)!=null&&d.trim())?{...n,label:i,url:t.base.url.trim()}:{...n,label:i}}const vo="nhs-guidance-workstreams",Ha={vision:["Vision"],case_for_change:["Case for Change"],sponsorship:["Senior Sponsorship & Governance"],change_network:["Change Network"],benefits:["Benefits"],change_impact:["Change Impact"],risk_management:["Risk Management"],cm_readiness:["Change Management Readiness & Planning"],stakeholder:["Stakeholder Engagement & Comms"],resistance:["Resistance Management"],skills_learning:["Skills/Learning"],capability:["Change Management Capability"],change_adoption:["Reinforcement"],process_change:["Process change"],reinforcement:["Reinforcement"],org_maturity:["Change Management Capability"],transfer_bau:["Reinforcement"]},F=(n,t,s,a)=>({key:`fnhs_${n}`,label:t,url:`https://future.nhs.uk/CMN/view?objectId=${n}`,type:s,...a?{description:a}:{}}),Va=[F("44704752","FuturesNHS Change Management Network","core","The wider NHS community for change management practice, discussion and shared resources.")],qn={Vision:{inputs:[F("37515792","Vision for Change","core","Supports development and communication of a clear future vision."),F("34039056","Mind Map","core","Captures and organises stakeholder viewpoints when developing the vision."),F("34039088","Rich Picture and Storytelling","core","Creates a visual and narrative representation of the desired future state."),F("34039184","Sinek's Golden Circle","core","Structures the vision around why, how and what."),F("34037808","Systems Thinking","core","Supports consideration of the wider system when defining the future state."),F("34018288","Stakeholder Analysis Tool","core","Identifies the stakeholders who should help shape and validate the vision."),F("34039024","Sponsor Coalition Map","additional","Identifies leaders and visible supporters who can reinforce the vision."),F("69484112","SHIFT: A Strategic Change Management Approach","additional","Provides an additional strategic approach for shaping and aligning change.")]},"Case for Change":{inputs:[F("44287088","Case for Change","core","Supports creation of a clear and compelling rationale for change."),F("42608592","Beckhard and Harris' Change Formula","core","Tests whether the conditions needed to overcome the perceived cost of change are present."),F("34037360","Force Field Analysis","core","Identifies the forces driving and restraining the change."),F("34037232","Benefits Workshop","core","Brings stakeholders together to identify and develop the benefits of change."),F("34040176","Benefits Map","core","Links benefits, outcomes, enabling changes and strategic objectives."),F("45000208","What's in it for me? Benefits","core","Defines relevant benefits for each stakeholder group."),F("69191376","5 Whys Technique","additional","Supports root-cause exploration of the problem the change is intended to address."),F("34037712","SWOT Analysis","additional","Examines strengths, weaknesses, opportunities and threats relating to the change."),F("34037072","PESTLE Analysis","additional","Examines external factors influencing the need for change."),F("34037680","Porter's Five Forces","additional","Supports analysis of wider environmental and market pressures."),F("34037040","GAP Analysis","additional","Compares current and future states and identifies what needs to change."),F("42608624","AIDA Model","additional","Provides a structure for moving audiences from awareness towards action."),F("34037744","Kotter's 8 Steps","additional","Provides an additional framework for creating urgency and mobilising change."),F("34039024","Sponsor Coalition Map","additional","Identifies leaders who need to champion the case for change.")],deliverables:[F("44287088","A clear case for change communicated to all stakeholders","core")]},"Senior Sponsorship & Governance":{inputs:[F("34039024","Sponsor Coalition Map","core","Identifies senior leaders and visible supporters required to drive the change."),F("34037520","What Makes a Good Sponsor?","core","Supports sponsors to understand the behaviours expected of them."),F("34040240","RACI/RASCI Matrix","core","Clarifies governance roles, responsibilities and accountability."),F("34037552","Change Network","core","Connects senior sponsorship with change agents and champions."),F("42042672","Change Management Strategy","core","Defines the strategic approach and leadership responsibilities for change."),F("34018288","Stakeholder Analysis Tool","additional","Identifies influential stakeholders and required sponsor coverage."),F("34038032","Change Management Plan","additional","Translates governance and sponsorship responsibilities into planned activity."),F("69484112","SHIFT: A Strategic Change Management Approach","additional","Provides an additional strategic structure for leadership of change.")]},"Change Network":{inputs:[F("34037552","Change Network","core","Supports formation and operation of a network of change agents and champions."),F("34039024","Sponsor Coalition Map","core","Connects the change network with visible senior sponsors."),F("34018288","Stakeholder Analysis Tool","core","Helps ensure the network represents the right stakeholder groups."),F("34037520","What Makes a Good Sponsor?","core","Clarifies how sponsors should support and use the network."),F("34039408","Feedback Cycle","additional","Supports two-way feedback between the network, programme and affected staff."),F("69501968","Psychological Safety","additional","Supports an environment in which network members can raise concerns safely."),F("34040240","RACI/RASCI Matrix","additional","Clarifies the roles of sponsors, change agents and change champions."),F("34038672","User Surveys","additional","Provides additional evidence for themes surfaced by the change network.")]},Benefits:{inputs:[F("34037232","Benefits Workshop","core","Identifies and develops benefits with relevant stakeholders."),F("34040176","Benefits Map","core","Links benefits to outcomes, enabling changes and strategic objectives."),F("34030736","Benefits Realisation Plan","core","Defines baselines, measures, owners and arrangements for tracking benefits."),F("45000208","What's in it for me? Benefits","core","Translates organisational benefits into relevant stakeholder benefits."),F("69511824","Measuring Digital Adoption","core","Supports definition of adoption measures linked to intended benefits."),F("44287088","Case for Change","additional","Connects the benefits to the rationale and intended outcomes of the change."),F("34038608","Creating Short-Term Wins","additional","Uses early progress to demonstrate value and maintain momentum."),F("34038864","Celebrate Successes","additional","Recognises evidence that benefits and positive outcomes are emerging."),F("34038544","End of Pilot Report","additional","Captures pilot evidence relevant to benefits and wider rollout."),F("34038672","User Surveys","additional","Collects qualitative evidence about benefits and user experience.")]},"Change Impact":{inputs:[F("34037424","Change Impact Assessment","core","Assesses impacts on people, teams, processes and business units."),F("34039344","Impact Analysis","core","Supports structured analysis of intended and unintended impacts."),F("34037968","Heat Map","core","Provides a visual view of impact across business areas."),F("34037040","GAP Analysis","core","Identifies differences between current and future states."),F("34040208","McKinsey 7S Model","core","Examines alignment across interdependent organisational factors."),F("34037840","Process Mapping","additional","Identifies impacts created by changes between current and future processes."),F("34037392","Change Management Capability Review","additional","Assesses the capability implications of the future state."),F("34038000","Proof of Concept","additional","Provides early evidence about likely organisational and user impacts."),F("34037488","Training Impact Assessment","additional","Identifies high-level learning resource and cost implications.")]},"Risk Management":{inputs:[F("34037776","Risk Assessment","core","Identifies and assesses risks, issues and barriers to successful adoption."),F("34038640","Sustainability Risk Assessment","core","Identifies risks that could prevent the change from being sustained."),F("34037424","Change Impact Assessment","core","Provides evidence about impact-related risks and mitigation needs."),F("34037360","Force Field Analysis","core","Identifies forces that may support or obstruct the change."),F("34030736","Benefits Realisation Plan","additional","Helps identify and monitor risks to benefit realisation."),F("34037968","Heat Map","additional","Highlights areas where high impact and low readiness may create risk."),F("34307760","Resistance Management Plan","additional","Defines actions for managing resistance-related adoption risks."),F("69191376","5 Whys Technique","additional","Supports investigation of the root causes of risks and recurring issues.")]},"Change Management Readiness & Planning":{inputs:[F("42042672","Change Management Strategy","core","Sets the overall direction and approach for managing the change."),F("34038032","Change Management Plan","core","Defines activities, ownership and timescales required to build readiness."),F("34037040","GAP Analysis","core","Identifies the work required to move to the future state."),F("34037424","Change Impact Assessment","core","Provides impact and readiness evidence for change planning."),F("34038192","Change Implementation Plan","core","Defines implementation tasks, milestones and responsibilities."),F("34038576","Go Live Business Readiness Assessment","core","Assesses people, process and support readiness before go-live.")]}},Js={},yo={},wo={Default:qn,Product:Js,AVT:Js,EPR:yo};function No(){if(typeof window>"u")return[];try{const n=window.localStorage.getItem(vo);if(!n)return[];const t=JSON.parse(n);return Array.isArray(t)?t.filter(s=>s&&typeof s.name=="string"&&s.name.trim()):[]}catch{return[]}}function ko(n){const t=No().find(s=>s.name===n);return t?t.map:wo[n]||qn}function Co(n,t,s,a,i=!0){var u,h,d;const l=((h=(u=ko(n))==null?void 0:u[t])==null?void 0:h[s])||[],r=l.length>0?l:((d=qn==null?void 0:qn[t])==null?void 0:d[s])||[],o=i?r:r.filter(c=>c.type==="core");return a?o.map(c=>is(c,a)):o}function vt(n,t,s,a,i=!0){const l=Ha[t]||[],r=new Map;return l.forEach(o=>{Co(n,o,s,a,i).forEach(u=>{const h=`${u.label}::${u.url}`;r.has(h)||r.set(h,u)})}),[...r.values()]}const Xs={"not started":0,emerging:1,developing:2,embedding:3,adopted:4,thriving:5};function st(n){return n.trim().replace(/\s+/g," ").toLowerCase()}function qa(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function Qs(n){return n.trim().toLowerCase()}function jo(n){return n.replace(/&/g,"and").replace(/\s+/g," ").trim()}function Eo(n){return typeof n=="string"&&Zt.includes(n)}function Wn(n){if(!n)return null;try{return JSON.parse(n)}catch{return null}}function os(n,t,s,a){let i=0,l=!1,r=!1;for(let o=a;o<n.length;o+=1){const u=n[o];if(l){if(r){r=!1;continue}if(u==="\\"){r=!0;continue}u==='"'&&(l=!1);continue}if(u==='"'){l=!0;continue}if(u===t){i+=1;continue}if(u===s&&(i-=1,i===0))return n.slice(a,o+1)}return null}function Io(n,t=0){const s=n.indexOf("{",t);return s<0?null:os(n,"{","}",s)}function Ya(n,t=0){const s=n.indexOf("[",t);return s<0?null:os(n,"[","]",s)}function Zs(n,t){const s=n.toLowerCase().indexOf(t.toLowerCase());return s<0?null:Ya(n,s)}function Ao(n,t){const s=n.toLowerCase().indexOf(t.toLowerCase());return s<0?null:Io(n,s)}function Oo(n){const t=[];for(let s=0;s<n.length;s+=1){if(n[s]!=="{")continue;const a=os(n,"{","}",s);if(!a)continue;const i=Wn(a);i&&typeof i=="object"&&!Array.isArray(i)&&t.push(i),s+=a.length-1}return t}function mt(n){return Array.isArray(n)?n.filter(t=>t&&typeof t=="object").map(t=>t).filter(t=>typeof t.id=="string"&&typeof t.name=="string"):[]}function Zn(n){return Array.isArray(n)?n.filter(t=>t&&typeof t=="object").map(t=>t).filter(t=>typeof t.fromStatus=="string"&&typeof t.toStatus=="string"&&typeof t.lens=="string"&&typeof t.action=="string"):[]}function _o(n){const t=Wn(n);let s=[],a=[];if(t&&typeof t=="object"&&!Array.isArray(t)){const l=t;s=mt(l.outcomes),Array.isArray(l.actions)?a=Zn(l.actions):l.actions&&typeof l.actions=="object"&&(a=Zn(l.actions.actions))}else Array.isArray(t)&&(s=mt(t));if(s.length||(s=mt(Wn(Zs(n,"outcomes")))),s.length||(s=mt(Wn(Ya(n)))),a.length||(a=Zn(Wn(Zs(n,"actions")))),!a.length){const l=Wn(Ao(n,"actions"));a=Zn(l==null?void 0:l.actions)}const i=Oo(n);return a.length||(a=Zn(i)),s.length||(s=i.filter(l=>l&&typeof l=="object").map(l=>l).filter(l=>typeof l.id=="string"&&typeof l.name=="string"&&/_o\d+$/i.test(l.id)&&!("fromStatus"in l))),{outcomes:s,actions:a}}function ea(n,t){const a=n.trim().toLowerCase().match(/o\d+$/);return a?`${t}:${a[0]}`:`${t}:${qa(n)}`}function Ro(n,t){return`${n}:${t}`}function Po(n){return n.includes(":auto-objective:")||n.startsWith("pathway:auto-objective:")}function Do(n){return{...n,actions:(n.actions||[]).map(t=>({...t,linkedTargets:(t.linkedTargets||[]).map(s=>({...s}))}))}}function Yt(){return{score:0,justification:"",evidence:"",actions:[]}}function rs(n,t){return`${n}:${qa(t.lens)}:${t.fromScore}-${t.toScore}:${t.actionIndex}`}function $o(n,t,s){return{id:rs(t,s),text:s.actionText,actionType:s.actionType,owner:"",timescale:"",status:"Planned",phase:1,startDate:"",dueDate:"",notes:"",evidence:"",readinessScore:s.fromScore,linkedTargets:[{componentId:n,lens:s.lens}],priority:s.priority,needsRework:s.needsRework}}function To(n,t){return{id:n.id,text:n.text,owner:(t==null?void 0:t.owner)||"",timescale:(t==null?void 0:t.timescale)||"",notes:(t==null?void 0:t.notes)||"",evidence:(t==null?void 0:t.evidence)||"",linkedActions:[]}}function Lo(n,t,s){const a=rs(t,s),i=(n.actions||[]).find(o=>o.id===a);if(i)return i.id;const l=st(s.actionText),r=(n.actions||[]).find(o=>st(o.text||"")===l);return(r==null?void 0:r.id)||null}function Ve(n,t){const{outcomes:s,actions:a}=_o(n),i=s.map(o=>({id:ea(String(o.id),t.outcomePrefix),text:String(o.name).trim()})),l=new Map;return{templates:a.reduce((o,u)=>{var I;const h=Xs[Qs(String(u.fromStatus||""))],d=Xs[Qs(String(u.toStatus||""))];if(h===void 0||d===void 0)return o;const c=jo(String(u.lens||"")),x=((I=t.lensAliases)==null?void 0:I[c])||c,{text:b,priority:w,needsRework:R}=Gi(String(u.action||""));if(!x||!b)return o;const O=`${x}:${h}-${d}`,f=l.get(O)||0;return l.set(O,f+1),o.push({lens:x,fromScore:h,toScore:d,actionIndex:f,actionText:b,actionType:Eo(u.category)?u.category:void 0,outcomeIds:(u.outcomeIds||[]).map(H=>ea(String(H),t.outcomePrefix)),priority:w,needsRework:R}),o},[]),outcomes:(i.length?i:t.fallbackOutcomes).slice(0,3)}}function qe(n,t,s){const a={...n.currentDraft||{}},i={...n.objectives||{}},l=a[t.componentId]||{},r=`${t.outcomePrefix}:`,o=(i[t.componentId]||[]).filter(x=>x.id.startsWith(r)),u=(i[t.componentId]||[]).filter(x=>!x.id.startsWith(r)&&!Po(x.id)),h=o.reduce((x,b)=>(x[b.id]=b,x),{}),d=Object.keys(l).reduce((x,b)=>(x[b]=Do(l[b]||Yt()),x),{});s.templates.forEach(x=>{var j;const b=d[x.lens]||Yt(),w=new Set((b.actions||[]).map(y=>st(y.text||""))),R=rs(t.actionPrefix,x),O=Ro(t.componentId,x.lens),f=new Set(((j=n.suppressedAutoActions)==null?void 0:j[O])||[]),I=(b.actions||[]).some(y=>y.id===R),H=st(x.actionText),C=f.has(R);b.actions=(b.actions||[]).map(y=>!(y.id===R||st(y.text||"")===H)||y.readinessScore===x.fromScore&&y.priority===x.priority&&y.needsRework===x.needsRework?y:{...y,readinessScore:x.fromScore,priority:x.priority,needsRework:x.needsRework}),!I&&!w.has(H)&&!C&&(b.actions=[...b.actions||[],$o(t.componentId,t.actionPrefix,x)]),d[x.lens]=b});const c=s.outcomes.map(x=>{const b=[];return s.templates.forEach(w=>{if(!w.outcomeIds.includes(x.id))return;const R=d[w.lens];if(!R)return;const O=Lo(R,t.actionPrefix,w);O&&b.push({lens:w.lens,actionId:O})}),{...To(x,h[x.id]),linkedActions:b}});return{...n,currentDraft:{...a,[t.componentId]:d},objectives:{...i,[t.componentId]:[...u,...c]}}}function Ye(n,t){var o,u;const s=`${t.outcomePrefix}:`,a=`${t.actionPrefix}:`,i=(((o=n.objectives)==null?void 0:o[t.componentId])||[]).filter(h=>!h.id.startsWith(s)),l=((u=n.currentDraft)==null?void 0:u[t.componentId])||{},r=Object.keys(l).reduce((h,d)=>{const c=l[d]||Yt();return h[d]={...c,actions:(c.actions||[]).filter(x=>!x.id.startsWith(a))},h},{});return{...n,currentDraft:{...n.currentDraft,[t.componentId]:r},objectives:{...n.objectives,[t.componentId]:i}}}function na(n,t){if(t>=5)return null;const s=(n.actions||[]).filter(i=>i.readinessScore===t);return s.length===0?null:s.every(i=>Vi(i.status))?{currentScore:t,nextScore:t+1}:null}const yt={0:"Not Started: Activity has not yet commenced or been defined.",1:"Emerging: Activity is fragmented, uncoordinated, and reactive. No standardised approach.",2:"Developing: Basic processes exist but are inconsistently applied. Reliance on heroic individual efforts.",3:"Embedding: Standardised approach defined and applied across the project. Leadership is engaged.",4:"Adopted: Behaviours are changing. Metrics are actively monitored to drive adoption.",5:"Thriving: Change is fully embedded as business as usual. Continuous improvement is evident."},ta=["Pre-Emergent","Emerging","Developing","Maturing","Embedding","Thriving"],Bo=["#768692","#AE2521","#FFB81C","#005EB8","#330072","#00A499"];function Kt(n){return ta[Math.round(n)]||ta[0]}function Mo({onClose:n,darkMode:t=!1}){return e.jsx("div",{id:"readiness-score-info-modal",className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:s=>{s.target===s.currentTarget&&n()},children:e.jsxs("div",{className:`${t?"bg-slate-800 border-slate-700":"bg-white"} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border`,children:[e.jsxs("div",{className:`${t?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} sticky top-0 border-b p-6 flex items-center justify-between`,children:[e.jsx("h2",{className:`text-2xl font-bold ${t?"text-slate-100":"text-slate-800"}`,children:"Readiness score levels"}),e.jsx("button",{onClick:n,className:`${t?"text-slate-300 hover:text-slate-100":"text-slate-500 hover:text-slate-700"}`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsxs("div",{className:`p-6 space-y-3 text-sm ${t?"text-slate-200":"text-slate-700"}`,children:[e.jsx("p",{children:"Every lens is scored on the same 0-5 readiness scale. Here's what each level generally means - each lens on a component page also shows guidance written specifically for that lens at its current level. A lens advances automatically once every action at its current level is marked Completed or Cancelled."}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:Object.entries(yt).map(([s,a])=>{const[i,l]=a.split(/:\s(.+)/);return e.jsxs("div",{className:`rounded-md border p-2.5 ${t?"border-slate-700":""}`,style:{borderLeftWidth:"4px",borderLeftColor:Bo[Number(s)]},children:[e.jsxs("p",{className:`text-xs font-bold ${t?"text-slate-100":"text-slate-800"}`,children:[s," - ",i]}),e.jsx("p",{className:`mt-0.5 text-xs ${t?"text-slate-300":"text-slate-600"}`,children:l})]},s)})})]})]})})}const sa=["#005eb8","#00a499","#ffb81c","#ae2521","#330072","#41b6e6"],Go=36;function Fo(){const n=m.useMemo(()=>Array.from({length:Go},(t,s)=>({id:s,left:Math.random()*100,color:sa[s%sa.length],delay:Math.random()*.25,duration:1.4+Math.random()*.9,drift:(Math.random()-.5)*160,rotation:Math.random()*360})),[]);return e.jsxs("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 z-[59] h-40 overflow-hidden","aria-hidden":"true",children:[e.jsx("style",{children:`
        @keyframes toast-confetti-fall {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          100% { transform: translate(var(--drift), -160px) rotate(var(--spin)); opacity: 0; }
        }
      `}),n.map(t=>e.jsx("span",{style:{position:"absolute",left:`${t.left}%`,bottom:0,width:"8px",height:"8px",backgroundColor:t.color,animation:`toast-confetti-fall ${t.duration}s ease-out ${t.delay}s forwards`,"--drift":`${t.drift}px`,"--spin":`${t.rotation}deg`}},t.id))]})}function Ka({message:n,onDismiss:t,durationMs:s,variant:a="success",celebrate:i=!1}){m.useEffect(()=>{if(!s)return;const r=window.setTimeout(t,s);return()=>window.clearTimeout(r)},[n,s,t]);const l=a==="success"?"bg-green-600 text-white":"bg-slate-800 text-white";return e.jsxs(e.Fragment,{children:[i?e.jsx(Fo,{}):null,e.jsx("div",{className:"fixed bottom-6 right-6 z-[60] flex justify-end",role:"status","aria-live":"polite",children:e.jsxs("div",{className:`flex items-center gap-3 rounded-lg px-4 py-3 shadow-2xl ${l}`,children:[e.jsx("span",{className:"text-sm font-medium",children:n}),e.jsx("button",{type:"button",onClick:t,className:"text-white/80 hover:text-white","aria-label":"Dismiss",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})})]})}const aa=["#005eb8","#00a499","#7c3aed","#b45309","#be123c","#0369a1","#0f766e","#4d7c0f"];function Uo(n){let t=0;for(let s=0;s<n.length;s+=1)t=(t<<5)-t+n.charCodeAt(s),t|=0;return Math.abs(t)}function Wo(n){const t=n.trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0].slice(0,2).toUpperCase():`${t[0][0]}${t[t.length-1][0]}`.toUpperCase():"?"}function za({name:n,darkMode:t=!1,imageDataUrl:s}){const a=n.trim();if(!a)return e.jsx("span",{title:"Unassigned","aria-label":"Unassigned",className:`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold ${t?"border-slate-600 text-slate-500":"border-slate-300 text-slate-400"}`,children:"?"});if(s)return e.jsx("img",{src:s,alt:a,title:a,className:"h-7 w-7 shrink-0 rounded-full border border-slate-300 object-cover"});const i=aa[Uo(a)%aa.length];return e.jsx("span",{title:a,"aria-label":a,className:"inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white",style:{backgroundColor:i},children:Wo(a)})}const Ho=7;function Vo(n,t,s,a=new Date){if(!t&&!s)return"grey";const i=Xe(n);if(i==="Completed"||i==="Cancelled")return"green";const l=Ft(n,t,s,a);if(l==="Overdue completion")return"red";if(l==="Overdue start")return"amber";if(s){const r=new Date(s);if(!isNaN(r.getTime())){const o=(r.getTime()-a.getTime())/864e5;if(o>=0&&o<=Ho)return"amber"}}return"green"}const qo={grey:"text-slate-300",green:"text-green-600",amber:"text-amber-500",red:"text-red-600"},Yo={grey:"No dates set",green:"On track",amber:"Due soon",red:"Overdue"},Ko=new Intl.DateTimeFormat("en-GB",{day:"2-digit",month:"short",year:"2-digit",timeZone:"GMT"});function ia(n){if(!n)return"not set";const t=new Date(n);return isNaN(t.getTime())?"not set":`GMT - ${Ko.format(t)}`}function zo({status:n,startDate:t,dueDate:s}){const a=Vo(n,t,s),i=`${Yo[a]} · Start: ${ia(t)} · End: ${ia(s)}`;return e.jsx("span",{title:i,"aria-label":i,className:`inline-flex items-center ${qo[a]}`,children:e.jsxs("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",strokeWidth:2}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 7v5l3 3"})]})})}const Jo=`{
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
`,Ja="custom-outcome:";function Xo(n){return n.startsWith(Ja)}const oa=es.filter(n=>n!=="Overdue start"&&n!=="Overdue completion"),Qo=Bn.map(n=>n.score),Zo=Object.fromEntries(Bn.map(n=>[n.score,n.label])),ra={"Not Started":"bg-slate-100 text-slate-700 border-slate-200","In Progress":"bg-blue-100 text-blue-800 border-blue-200",Blocked:"bg-amber-100 text-amber-800 border-amber-200",Completed:"bg-green-100 text-green-800 border-green-200"},la=JSON.parse(Jo),Xa=4;function er(n,t){return zn.reduce((s,a)=>{const i=vt("Default",a.id,"inputs",void 0,n),l=vt("Default",a.id,"deliverables",void 0,n),r=new Map;return[...i,...l].forEach(o=>{var u,h;if(o.label&&o.label.trim().length>=Xa){const d=t?is(o,t).url:o.url,c=(h=(u=t==null?void 0:t.links)==null?void 0:u[o.key])==null?void 0:h.matchAliases;r.set(o.label.toLowerCase(),{...o,url:d,matchAliases:c})}}),s[a.id]=[...r.values()],s},{})}function nr(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Qa(n){const t=new Set([n]);return new RegExp("(?<!s)s$","i").test(n)&&t.add(n.slice(0,-1)),[...t]}function Hn(n,t,s,a){const i=n||"Untitled action";if(t.length===0)return i;const r=t.flatMap(d=>{const c=d.kind==="url"?d.matchAliases||[]:[];return[...Qa(d.label),...c].map(x=>({variant:x,link:d}))}).sort((d,c)=>c.variant.length-d.variant.length),o=r.map(d=>`\\b${nr(d.variant)}\\b`).join("|"),u=i.split(new RegExp(`(${o})`,"gi")),h=`underline decoration-dotted underline-offset-2 ${s?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`;return u.map((d,c)=>{const x=r.find(w=>w.variant.toLowerCase()===d.toLowerCase());if(!x)return d;const b=x.link;return b.kind==="tool"?e.jsx("button",{type:"button",onClick:w=>{w.stopPropagation(),a==null||a(b.tool)},className:h,children:d},`${b.key}-${c}`):e.jsx("a",{href:b.url,target:"_blank",rel:"noopener noreferrer",onClick:w=>w.stopPropagation(),className:h,children:d},`${b.key}-${c}`)})}function ca(n){return n.split(`
`).map(t=>t.trim()).filter(Boolean)}const tr="Your Project";function sr(n,t){return n.replace(/\$projectName/g,t)}function ar(n,t){const s=i=>sr(i,t),a=i=>i.map(l=>({title:s(l.title),body:s(l.body)}));return{component:s(n.component),description:s(n.description),whatIsIt:s(n.whatIsIt),userInsight:s(n.userInsight),whyThisMatters:s(n.whyThisMatters),quickRealityCheck:s(n.quickRealityCheck),whatGoodLooksLike:a(n.whatGoodLooksLike),risksIfYouDont:a(n.risksIfYouDont)}}const Za={good:{border:"border-emerald-200",bg:"bg-emerald-50 hover:bg-emerald-100",text:"text-black",titleText:"text-emerald-700"},risk:{border:"border-rose-200",bg:"bg-rose-50 hover:bg-rose-100",text:"text-black",titleText:"text-rose-800"}},ei={good:{border:"border-emerald-500/40",bg:"bg-emerald-500/10 hover:bg-emerald-500/15",text:"text-emerald-200",titleText:"text-slate-100"},risk:{border:"border-rose-500/40",bg:"bg-rose-500/10 hover:bg-rose-500/15",text:"text-rose-200",titleText:"text-slate-100"}};function ir({points:n,tone:t,guidanceLinks:s,darkMode:a,onNavigateToTool:i}){const l=a?ei[t]:Za[t];return e.jsx("ul",{className:"space-y-3",children:n.map(r=>e.jsxs("li",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${l.titleText}`,children:r.title}),e.jsx("p",{className:`mt-0.5 text-sm ${l.text}`,children:Hn(r.body,s,a,i)})]},r.title))})}function da({title:n,points:t,tone:s,isOpen:a,onToggle:i,guidanceLinks:l,darkMode:r,onNavigateToTool:o}){const u=r?ei[s]:Za[s];return e.jsxs("div",{className:`rounded-md border ${u.border}`,children:[e.jsxs("button",{type:"button",onClick:i,className:`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold transition-colors ${u.bg} ${u.text}`,children:[n,e.jsx("span",{"aria-hidden":"true",children:a?"−":"+"})]}),a&&e.jsx("div",{className:`border-t px-3 py-3 ${u.border}`,children:e.jsx(ir,{points:t,tone:s,guidanceLinks:l,darkMode:r,onNavigateToTool:o})})]})}function or({detail:n,furtherReadingUrl:t,guidanceLinks:s,darkMode:a,onNavigateToTool:i}){const[l,r]=m.useState(!0),[o,u]=m.useState(!0);return e.jsxs("div",{children:[n.description&&e.jsx("p",{className:`text-sm ${a?"text-slate-200":"text-slate-700"}`,children:n.description}),e.jsxs("div",{className:`mt-4 space-y-4 ${n.description?"border-t pt-4":""} ${a?"border-slate-700":"border-slate-200"}`,children:[t&&e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs font-semibold ${a?"border-slate-600 bg-slate-800 text-blue-300 hover:bg-slate-700":"border-slate-300 bg-white text-[#005eb8] hover:bg-slate-50"}`,children:"Further Reading ↗"}),n.whatIsIt&&e.jsx("p",{className:`text-sm ${a?"text-slate-300":"text-slate-600"}`,children:Hn(n.whatIsIt,s,a,i)}),n.userInsight&&e.jsxs("blockquote",{className:`border-l-2 pl-3 text-sm italic ${a?"border-slate-600 text-slate-300":"border-slate-300 text-slate-600"}`,children:["“",Hn(n.userInsight,s,a,i),"”"]}),n.whyThisMatters&&e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${a?"text-slate-200":"text-slate-700"}`,children:"Why this matters"}),e.jsx("ul",{className:`mt-1 list-disc space-y-1 pl-5 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:ca(n.whyThisMatters).map(h=>e.jsx("li",{children:Hn(h,s,a,i)},h))})]}),n.quickRealityCheck&&e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${a?"text-slate-200":"text-slate-700"}`,children:"Quick reality check"}),e.jsx("ul",{className:`mt-1 list-disc space-y-1 pl-5 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:ca(n.quickRealityCheck).map(h=>e.jsx("li",{children:Hn(h,s,a,i)},h))})]}),(n.whatGoodLooksLike.length>0||n.risksIfYouDont.length>0)&&e.jsxs("div",{className:"space-y-2",children:[n.whatGoodLooksLike.length>0&&e.jsx(da,{title:"What good looks like",points:n.whatGoodLooksLike,tone:"good",isOpen:l,onToggle:()=>r(h=>!h),guidanceLinks:s,darkMode:a,onNavigateToTool:i}),n.risksIfYouDont.length>0&&e.jsx(da,{title:"Risks if you don't",points:n.risksIfYouDont,tone:"risk",isOpen:o,onToggle:()=>u(h=>!h),guidanceLinks:s,darkMode:a,onNavigateToTool:i})]})]})]})}function rr({open:n,onClose:t,detail:s,furtherReadingUrl:a,guidanceLinks:i,darkMode:l,onNavigateToTool:r}){return n?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${l?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${l?"text-slate-300":"text-slate-500"}`,children:"Component overview"}),e.jsx("button",{type:"button",onClick:t,"aria-label":"Close component overview",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${l?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:"mt-2",children:e.jsx(or,{detail:s,furtherReadingUrl:a,guidanceLinks:i,darkMode:l,onNavigateToTool:r})})]})}):null}const zt="__evidence_json__:",lr=1024*1024;function cr(n,t,s){return(s[n]||[]).filter(a=>a.linkedActions.some(i=>i.actionId===t))}function ni(n){const t=n.trim();return t?/^https?:\/\//i.test(t)?t:/^www\./i.test(t)?`https://${t}`:t:""}function gt(n){const t=(n==null?void 0:n.trim())||"";if(!t)return[];if(t.startsWith(zt))try{const s=JSON.parse(t.slice(zt.length));return Array.isArray(s)?s.filter(a=>a&&(a.type==="url"||a.type==="file")).map(a=>({type:a.type,label:String(a.label||"").trim(),href:String(a.href||"").trim()})).filter(a=>a.label||a.href):[]}catch{return[]}return t.split(`
`).map(s=>s.trim()).filter(Boolean).map(s=>{const a=ni(s);return{type:"url",label:s,href:a}})}function dr(n){const t=n.map(s=>({type:s.type,label:s.label.trim(),href:s.href.trim()})).filter(s=>s.label||s.href);return t.length?`${zt}${JSON.stringify(t)}`:""}function ur({rows:n,isOpen:t,onToggle:s,darkMode:a}){return e.jsxs("div",{className:`mb-8 rounded-lg border ${a?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("button",{type:"button",onClick:s,className:"flex w-full items-center justify-between gap-4 px-5 py-4 text-left",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-sm font-semibold ${a?"text-slate-100":"text-slate-800"}`,children:"Evidence Links and Docs"}),e.jsx("p",{className:`mt-0.5 text-xs ${a?"text-slate-400":"text-slate-500"}`,children:n.length?`${n.length} item${n.length===1?"":"s"} attached across this component's actions.`:"Everything attached as evidence across this component's actions, in one place."})]}),e.jsx("span",{className:`shrink-0 text-xs font-semibold ${a?"text-slate-300":"text-slate-500"}`,children:t?"Hide −":"Show +"})]}),t&&e.jsx("div",{className:`border-t px-5 py-4 ${a?"border-slate-700":"border-slate-200"}`,children:n.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${a?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:a?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Type"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Link / Doc"})]})}),e.jsx("tbody",{className:`${a?"divide-slate-700":"divide-slate-100"} divide-y`,children:n.map((i,l)=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-100":"text-slate-800"}`,children:i.actionText}),e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-300":"text-slate-600"}`,children:i.lens}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`${i.item.type==="file"?"bg-emerald-100 text-emerald-800":"bg-blue-100 text-blue-800"} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`,children:i.item.type==="file"?"File":"Link"})}),e.jsx("td",{className:`px-3 py-2 text-sm ${a?"text-slate-100":"text-slate-800"}`,children:i.item.href?e.jsx("a",{href:i.item.href,target:"_blank",rel:"noopener noreferrer",className:`underline ${a?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:i.item.label||i.item.href}):i.item.label||"-"})]},`${i.lens}:${l}`))})]})}):e.jsx("p",{className:`text-sm ${a?"text-slate-400":"text-slate-500"}`,children:"No evidence added yet. Attach links or documents to an action to see them here."})})]})}function mr(n){return new Promise((t,s)=>{const a=new FileReader;a.onload=()=>t(String(a.result||"")),a.onerror=()=>s(new Error("Unable to read file.")),a.readAsDataURL(n)})}function gr(){return e.jsx("svg",{className:"w-4 h-4 text-blue-500 mt-0.5 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function ua(){return e.jsx("svg",{className:"w-5 h-5 ml-2 text-slate-400 group-hover:text-[#005eb8] shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function pr(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5h2m6.5-.5a2.121 2.121 0 013 3L8 21l-4 1 1-4L17.5 4.5z"})})}function hr(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m3 0-.867 12.142A2 2 0 0115.138 21H8.862a2 2 0 01-1.995-1.858L6 7h12z"})})}function fr(n,t){let s=n,a=na({actions:t},s);for(;a;)s=a.nextScore,a=na({actions:t},s);return s}function br(n,t,s){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:"",actionType:void 0,owner:"",timescale:"",status:"Planned",phase:n,startDate:"",dueDate:"",notes:"",evidence:"",linkedTargets:[{componentId:t,lens:s}]}}function In(n,t,s){const a=n.linkedTargets||[];if(!a.length)return[{componentId:t,lens:s}];const i=new Set,l=[];return a.forEach(r=>{const o=`${r.componentId}:${r.lens}`;i.has(o)||(i.add(o),l.push({componentId:r.componentId,lens:r.lens}))}),l}function xr({store:n,components:t,activeComponentId:s,getRubricText:a,getEntry:i,onComponentChange:l,onEntryUpdate:r,onOpenLensInfo:o,onActionRemove:u,onObjectivesUpdate:h,onNavigateToTool:d,hideGuidedWorkflow:c=!1,showAdditionalGuidanceLinks:x=!0,showActionPriorityColours:b=!1,currentUserId:w,currentUserProfileImageDataUrl:R,onHideGuidedWorkflow:O,darkMode:f=!1,focusAction:I,onFocusActionHandled:H}){var En,gn,Is,As,Os,_s,Rs,Ps,Ds,$s,Ts,Ls,Bs,Ms,Gs,Fs;const C=t.find(g=>g.id===s)||t[0],j=(gn=(En=n.orgProfile)==null?void 0:En.cst)==null?void 0:gn.pathway,y=g=>j&&j!=="pathway-1"?`No outcomes or actions are defined for ${Da[j]} yet.`:g,Z=((As=(Is=n.orgProfile)==null?void 0:Is.projectName)==null?void 0:As.trim())||tr,L=(Os=la[C.id])!=null&&Os.whatIsIt?ar(la[C.id],Z):void 0,Y=(_s=n.orgProfile)!=null&&_s.coreLinks&&n.orgProfile.coreLinks.length>0?n.orgProfile.coreLinks:Va,te=m.useMemo(()=>{var g;return(((g=n.orgProfile)==null?void 0:g.toolLinks)||[]).filter(N=>N.matchText.trim()).map(N=>({key:N.key,label:N.matchText,kind:"tool",tool:N.tool}))},[(Rs=n.orgProfile)==null?void 0:Rs.toolLinks]),re=m.useMemo(()=>{var Q;const g=(Q=n.orgProfile)==null?void 0:Q.linkOverrides,N=er(x,g),T=x?Y:Y.filter(pe=>pe.type==="core"),z={};return Object.keys(N).forEach(pe=>{var Nn,Dn;const _e=new Map,Pe=((Dn=(Nn=n.orgProfile)==null?void 0:Nn.customComponentLinks)==null?void 0:Dn[pe])||[];[...N[pe],...T,...Pe].forEach(Ze=>{Ze.label&&Ze.label.trim().length>=Xa&&_e.set(Ze.label.toLowerCase(),{...Ze,kind:"url"})}),te.forEach(Ze=>{_e.set(Ze.label.toLowerCase(),Ze)}),z[pe]=[..._e.values()]}),z},[x,Y,(Ps=n.orgProfile)==null?void 0:Ps.linkOverrides,(Ds=n.orgProfile)==null?void 0:Ds.customComponentLinks,te]),[P,G]=m.useState(null),[Ne,Ce]=m.useState(!1),[Te,Ke]=m.useState([]),B=m.useCallback((g,N,T)=>{const z=fr(N,T);if(z>N){const Q=`${C.label} · ${g} moved to ${On(z).label}!`;Ke(pe=>[...pe,{id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,message:Q}])}return z},[C.label]),[le,ie]=m.useState(!1),ge=m.useRef(null),[be,ye]=m.useState(null),[se,De]=m.useState(null),[$e,ze]=m.useState(!1),[Be,Ie]=m.useState(!0),[cn,Je]=m.useState(!0),[dn,en]=m.useState(!0),[_,ae]=m.useState(!1),[J,he]=m.useState(!1),xe=pn("assessment"),[ke,Ae]=m.useState({}),[S,D]=m.useState(null),[E,A]=m.useState({}),[U,W]=m.useState({}),ne=(($s=n.objectives)==null?void 0:$s[C.id])||[],oe=n.orgProfile.teamMembers||[],Se=((Ts=oe.find(g=>g.id===w))==null?void 0:Ts.name)||"",ve=m.useMemo(()=>{const g={};return C.lenses.forEach(N=>{g[N]=i(C.id,N).actions||[]}),g},[C.id,C.lenses,i]),Fe=m.useMemo(()=>{const g={};return C.lenses.forEach(N=>{const T=i(C.id,N),z=ve[N]||[],Q=z.some(_e=>_e.readinessScore===0),pe=T.score===0&&!Q?1:T.score;g[N]=z.filter(_e=>(_e.readinessScore??pe)===pe)}),g},[C.id,C.lenses,i,ve]),un=m.useMemo(()=>C.lenses.reduce((g,N)=>g+(Fe[N]||[]).length,0),[C.lenses,Fe]),Cn=m.useMemo(()=>C.lenses.reduce((g,N)=>g+(Fe[N]||[]).filter(T=>Xe(T.status)==="Completed").length,0),[C.lenses,Fe]),v=m.useMemo(()=>C.lenses.some(g=>Number(i(C.id,g).score||0)>0),[C.id,C.lenses,i]),$=m.useMemo(()=>{const g={};return Object.keys(n.currentDraft).forEach(N=>{Object.keys(n.currentDraft[N]||{}).forEach(T=>{(n.currentDraft[N][T].actions||[]).forEach(Q=>{In(Q,N,T).forEach(_e=>{const Pe=`${_e.componentId}:${_e.lens}`;g[Pe]||(g[Pe]=[]),g[Pe].push({sourceComponentId:N,sourceLens:T,action:Q,isLinkedView:!(_e.componentId===N&&_e.lens===T)})})})})}),g},[n.currentDraft]),V=m.useMemo(()=>{const g={};return t.forEach(N=>{g[N.id]=N}),g},[t]),de=m.useMemo(()=>{const g=[];return C.lenses.forEach(N=>{($[`${C.id}:${N}`]||[]).filter(z=>!z.isLinkedView).forEach(z=>{gt(z.action.evidence||"").forEach(Q=>{g.push({actionText:z.action.text||"Untitled action",lens:N,item:Q})})})}),g},[$,C.id,C.lenses]),we=m.useMemo(()=>{const g=C.lenses[0];return g?i(C.id,g).justification:""},[C.id,C.lenses,i]),Me=m.useMemo(()=>{var g;return P?((g=t.find(N=>N.id===P.sourceComponentId))==null?void 0:g.label)||P.sourceComponentId:C.label},[P,C.label,t]),Ue=m.useMemo(()=>{var N;if(!((N=P==null?void 0:P.action.text)!=null&&N.trim()))return"New action";const g=P.action.text.trim().replace(/\s+/g," ");return g.length>70?`${g.slice(0,70)}...`:g},[P]),Ee=m.useMemo(()=>ne.find(g=>g.id===(be==null?void 0:be.objectiveId))||null,[be==null?void 0:be.objectiveId,ne]),je=m.useMemo(()=>Ee?Wt(Ee,ve):null,[Ee,ve]),nn=m.useMemo(()=>Ee?Ee.linkedActions.map(g=>{const N=(ve[g.lens]||[]).find(Q=>Q.id===g.actionId),T=N?Xe(N.status):null,z=N?Ft(N.status,N.startDate,N.dueDate):null;return{lens:g.lens,action:N,status:T,temporalStatus:z}}):[],[Ee,ve]);m.useCallback(g=>{l(g.target.value)},[l]);const We=m.useCallback((g,N)=>{const T=i(C.id,g);r(C.id,g,{...T,score:N})},[C.id,i,r]),on=m.useCallback(g=>{C.lenses.forEach(N=>{const T=i(C.id,N);r(C.id,N,{...T,justification:g})})},[C.id,C.lenses,i,r]),tn=m.useCallback((g,N)=>{const T=br(C.phase,C.id,g);N&&(T.text=N),G({sourceComponentId:C.id,sourceLens:g,mode:"create",action:T,evidenceItems:gt(T.evidence||""),linkedObjectiveIds:[],targetPickerComponentId:C.id,targetPickerLens:g})},[C.id,C.phase]),wn=m.useCallback((g,N,T)=>{var _e;const z=In(T,g,N),Q=z[0]||{componentId:g,lens:N},pe=(((_e=n.objectives)==null?void 0:_e[g])||[]).filter(Pe=>Pe.linkedActions.some(Nn=>Nn.actionId===T.id)).map(Pe=>Pe.id);G({sourceComponentId:g,sourceLens:N,mode:"edit",actionId:T.id,action:{...T,linkedTargets:z,notes:T.notes||"",evidence:T.evidence||"",startDate:T.startDate||"",dueDate:T.dueDate||""},evidenceItems:gt(T.evidence||""),linkedObjectiveIds:pe,targetPickerComponentId:Q.componentId,targetPickerLens:Q.lens})},[n.objectives]),Mn=m.useCallback(()=>{De({mode:"create",text:"",owner:""})},[]),Gn=m.useCallback(g=>{De({mode:"edit",objectiveId:g.id,text:g.text,owner:g.owner})},[]),Fn=()=>{De(null)},_n=()=>{if(se){if(!se.text.trim()){window.alert("Outcome description is required.");return}if(se.mode==="create"){const g={id:`${Ja}${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:se.text.trim(),owner:se.owner.trim(),timescale:"",linkedActions:[]};h(C.id,[...ne,g])}else h(C.id,ne.map(g=>g.id===se.objectiveId?{...g,text:se.text.trim(),owner:se.owner.trim()}:g));De(null)}},lt=g=>{h(C.id,ne.filter(N=>N.id!==g))};m.useEffect(()=>{if(!I)return;const N=i(C.id,I.lens).actions.find(T=>T.id===I.actionId);if(!N){H==null||H();return}en(!0),wn(C.id,I.lens,N),H==null||H()},[I,C.id]);const Rn=()=>{G(null)},Jn=()=>{var _e;if(!P)return;if(!P.action.text.trim()){window.alert("Action description is required.");return}const g={...P.action,evidence:dr(P.evidenceItems),status:Xe(P.action.status),linkedTargets:In(P.action,P.sourceComponentId,P.sourceLens),timescale:P.action.dueDate||P.action.startDate||P.action.timescale},N=i(P.sourceComponentId,P.sourceLens),T=P.mode==="create"?[...N.actions,g]:N.actions.map(Pe=>Pe.id===P.actionId?g:Pe);r(P.sourceComponentId,P.sourceLens,{...N,actions:T,score:B(P.sourceLens,N.score,T)});const z=new Set(P.linkedObjectiveIds),pe=(((_e=n.objectives)==null?void 0:_e[P.sourceComponentId])||[]).map(Pe=>{const Nn=Pe.linkedActions.filter(Dn=>!(Dn.lens===P.sourceLens&&Dn.actionId===g.id));return z.has(Pe.id)?{...Pe,linkedActions:[...Nn,{lens:P.sourceLens,actionId:g.id}]}:{...Pe,linkedActions:Nn}});h(P.sourceComponentId,pe),Rn()},ct=()=>{if(!P)return;if(Xe(P.action.status)==="Completed"&&P.evidenceItems.length===0&&!Sn(tt)){ge.current=Jn,ie(!0);return}Jn()},p=(g,N,T)=>{const z=i(C.id,g),Q=z.actions.map(pe=>pe.id===N?{...pe,status:Xe(T)}:pe);r(C.id,g,{...z,actions:Q,score:B(g,z.score,Q)})},k=(g,N,T)=>{const z=i(C.id,g),Q=z.actions.map(pe=>pe.id===N?{...pe,owner:T}:pe);r(C.id,g,{...z,actions:Q})},M=(g,N,T)=>{const z=Xe(T);if(N.priority==="must"&&z==="Cancelled"){window.alert("You are trying to mark what we have classified as a MUST action as Cancelled, and it shouldn't be cancelled. Please re-review.");return}const Q=gt(N.evidence||"").length>0;if(z==="Completed"&&!Q&&!Sn(tt)){ge.current=()=>p(g,N.id,z),ie(!0);return}p(g,N.id,z)},ee=(g,N,T)=>{if(T.priority==="must"){window.alert("You are trying to delete what we have classified as a MUST action, and it shouldn't be deleted. Please re-review.");return}u(g,N,T.id)},q=g=>{G(N=>{if(!N)return N;const T={...N,action:{...N.action,...g}};return T.action.status=Xe(T.action.status),T})},me=(g,N)=>{G(T=>T&&{...T,targetPickerComponentId:g,targetPickerLens:N})},ue=()=>{G(g=>{if(!g)return g;const N=V[g.targetPickerComponentId]||C,T=N.lenses.includes(g.targetPickerLens)?g.targetPickerLens:N.lenses[0];if(!T)return g;const z=In(g.action,g.sourceComponentId,g.sourceLens);return z.some(Q=>Q.componentId===N.id&&Q.lens===T)?g:{...g,action:{...g.action,linkedTargets:[...z,{componentId:N.id,lens:T}]}}})},Le=(g,N)=>{G(T=>{if(!T)return T;const Q=In(T.action,T.sourceComponentId,T.sourceLens).filter(pe=>!(pe.componentId===g&&pe.lens===N));return{...T,action:{...T.action,linkedTargets:Q}}})},hn=g=>{G(N=>{if(!N)return N;const T=new Set(N.linkedObjectiveIds);return T.has(g)?T.delete(g):T.add(g),{...N,linkedObjectiveIds:Array.from(T)}})},Oe=g=>{G(N=>N&&{...N,evidenceItems:g})},fe=()=>{if(!P)return;const g=P.evidenceItems;Oe([...g,{type:"url",label:"",href:""}])},Re=(g,N,T)=>{if(!P)return;const z=P.evidenceItems;if(!z[g])return;const Q=[...z];N==="href"?Q[g]={...Q[g],href:ni(T)}:Q[g]={...Q[g],label:T},Oe(Q)},jn=g=>{if(!P)return;const N=P.evidenceItems;Oe(N.filter((T,z)=>z!==g))},mn=async g=>{if(!P)return;const N=g.target.files;if(!(N!=null&&N.length))return;const z=[...P.evidenceItems];for(const Q of Array.from(N)){if(Q.size>lr){window.alert(`"${Q.name}" is larger than 1MB. Please attach a URL instead.`);continue}try{const pe=await mr(Q);z.push({type:"file",label:Q.name,href:pe})}catch{window.alert(`Unable to upload "${Q.name}".`)}}Oe(z),g.target.value=""},Pn=(g,N)=>{N&&(ye(null),wn(C.id,g,N))},fn=g=>{const N=document.getElementById(g);N==null||N.scrollIntoView({behavior:"smooth",block:"start"})};return e.jsxs("div",{className:"max-w-5xl mx-auto pb-20",children:[e.jsx("div",{className:"mb-8 flex items-center justify-between gap-4 flex-wrap",children:e.jsxs("div",{children:[e.jsxs("h2",{className:`text-3xl font-bold flex items-center ${f?"text-slate-100":"text-slate-800"}`,children:[C.label,e.jsx("span",{className:"bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-4 border border-blue-200",children:Qe[C.phase]||`Phase ${C.phase}`}),e.jsx("span",{className:"ml-2",children:e.jsx(yn,{onClick:xe.reopen,darkMode:f})})]}),e.jsx("p",{className:`mt-2 ${f?"text-slate-300":"text-slate-500"}`,children:"Assess readiness at lens level. Change Component justification, outcomes, and actions are tracked below."}),L&&e.jsx("button",{type:"button",onClick:()=>he(!0),className:`mt-2 text-sm font-semibold underline ${f?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:"What is this?"})]})}),L&&e.jsx(rr,{open:J,onClose:()=>he(!1),detail:L,furtherReadingUrl:(Bs=(Ls=n.orgProfile)==null?void 0:Ls.componentFurtherReading)==null?void 0:Bs[C.id],guidanceLinks:re[C.id]||[],darkMode:f,onNavigateToTool:d}),!c&&!$e&&e.jsxs("div",{className:`${f?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mb-6 rounded-lg border p-4`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${f?"text-slate-300":"text-slate-600"}`,children:"Guided workflow"}),e.jsx("button",{type:"button",onClick:()=>ze(!0),"aria-label":"Dismiss guided workflow",className:`text-xs font-semibold leading-none ${f?"text-slate-400 hover:text-slate-200":"text-slate-400 hover:text-slate-700"}`,children:"×"})]}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:()=>fn("assessment-scoring"),className:`${f?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"1. Where are you now?"}),e.jsx("button",{type:"button",onClick:()=>fn("assessment-objectives"),className:`${f?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"2. Review outcomes"}),e.jsx("button",{type:"button",onClick:()=>fn("assessment-actions"),className:`${f?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"3. Plan lens actions"})]}),O&&e.jsx("button",{type:"button",onClick:O,className:`mt-3 text-xs underline ${f?"text-slate-400 hover:text-slate-200":"text-slate-500 hover:text-slate-700"}`,children:"Don't show this again"})]}),e.jsxs("div",{id:"assessment-scoring",className:`${f?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[e.jsx("h3",{className:`text-sm font-semibold ${f?"text-slate-100":"text-slate-800"}`,children:v?"Step 1: Where are you now?":"Step 1: Where are you now and what is currently known?"}),e.jsx("button",{type:"button",onClick:()=>Ie(g=>!g),className:`${f?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:Be?"Hide":"Show"})]}),Be?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:`block text-sm font-semibold mb-2 ${f?"text-slate-100":"text-slate-700"}`,children:"Change Component Justification"}),e.jsx("p",{className:`text-xs mb-2 ${f?"text-slate-300":"text-slate-500"}`,children:'Explain what is currently known, what evidence supports that view, and where the biggest gap sits. Example: "Sponsorship is visible only in two services; there is no monthly steering update yet; next step is to agree a trust-wide sponsor cadence."'}),e.jsx("textarea",{value:we,onChange:g=>on(g.target.value),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-24 p-2 border ${f?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,placeholder:"Record what is currently known for this change component, the evidence behind it, and the key improvement needed next."})]}):null]}),e.jsxs("div",{id:"assessment-objectives",className:`${f?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-1",children:[e.jsx("h3",{className:`text-sm font-semibold ${f?"text-slate-100":"text-slate-800"}`,children:"Step 2: Review outcomes"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:Mn,className:`${f?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:"Add Outcome"}),e.jsx("button",{type:"button",onClick:()=>Je(g=>!g),className:`${f?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:cn?"Hide":"Show"})]})]}),e.jsx("p",{className:`text-xs mb-3 ${f?"text-slate-300":"text-slate-500"}`,children:"Owned by this component as a whole. Status is derived automatically from the lens actions assigned to each outcome below and cannot be set manually."}),cn?ne.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${f?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:f?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Linked Actions"})]})}),e.jsx("tbody",{className:`${f?"divide-slate-700":"divide-slate-100"} divide-y`,children:ne.map(g=>{const N=Wt(g,ve),T=ra[N],z=()=>ye({objectiveId:g.id});return e.jsxs("tr",{onClick:z,onKeyDown:Q=>{(Q.key==="Enter"||Q.key===" ")&&(Q.preventDefault(),z())},tabIndex:0,className:`${f?"hover:bg-slate-700 focus-visible:bg-slate-700":"hover:bg-slate-50 focus-visible:bg-slate-50"} cursor-pointer focus:outline-none`,children:[e.jsx("td",{className:`px-3 py-2 text-sm ${f?"text-slate-100":"text-slate-800"}`,children:g.text||"Untitled outcome"}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${T}`,children:N})}),e.jsx("td",{className:`px-3 py-2 text-sm ${f?"text-slate-300":"text-slate-600"}`,children:g.linkedActions.length?`${g.linkedActions.length} action(s)`:"None assigned"})]},g.id)})})]})}):e.jsx("p",{className:"text-sm text-slate-500",children:y("No outcomes yet.")}):null]}),e.jsx("div",{id:"assessment-actions",className:`${f?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-sm font-semibold ${f?"text-slate-100":"text-slate-800"}`,children:"Step 3: Plan lens actions"}),e.jsx("p",{className:`mt-1 text-xs ${f?"text-slate-300":"text-slate-600"}`,children:"Track delivery actions for each lens and link them to outcomes and affected component lenses."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:`${f?"bg-slate-800 border-slate-600 text-slate-100":"bg-white border-slate-300 text-slate-700"} rounded-full border px-2 py-1 text-xs`,children:[Cn,"/",un," completed"]}),e.jsx("button",{type:"button",onClick:()=>en(g=>!g),className:`${f?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:dn?"Hide":"Show"})]})]})}),dn?e.jsx("div",{className:"space-y-8 mb-8",children:C.lenses.map(g=>{const N=i(C.id,g),T=`${C.id}:${g}`,z=$[T]||[],Q=z.some(K=>K.action.readinessScore===0),pe=N.score===0&&!Q?1:N.score,_e=E[T]||"all",Pe=U[T]||"all",Nn=Array.from(new Set(z.map(K=>K.action.actionType).filter(K=>K!==void 0))).sort((K,ce)=>String(K).localeCompare(String(ce))),Dn=Array.from(new Set([...oe.map(K=>K.name),...z.map(K=>K.action.owner).filter(K=>!!K)])).sort((K,ce)=>K.localeCompare(ce)),Ze=[...z].filter(K=>(K.action.readinessScore!==void 0?K.action.readinessScore:pe)!==pe||_e!=="all"&&(K.action.actionType||"")!==_e?!1:Pe==="all"||(K.action.owner||"")===Pe).sort((K,ce)=>{const Xn=Xe(K.action.status)==="Completed",Qn=Xe(ce.action.status)==="Completed";if(Xn!==Qn)return Xn?1:-1;const dt=K.action.dueDate?new Date(K.action.dueDate).getTime():Number.POSITIVE_INFINITY,Et=ce.action.dueDate?new Date(ce.action.dueDate).getTime():Number.POSITIVE_INFINITY;return dt-Et}),Us=N.score>=C.target?"#22c55e":N.score>0?"#f59e0b":"#cbd5e1";return e.jsxs("div",{className:`${f?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:[e.jsxs("div",{className:`${f?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} p-6 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4`,children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm font-bold uppercase tracking-wider text-blue-600 block mb-1",children:"Lens"}),e.jsxs("button",{onClick:()=>o(g),className:`flex items-center text-2xl font-semibold transition-colors group text-left ${f?"text-slate-100 hover:text-[#63b3ff]":"text-slate-800 hover:text-[#005eb8]"}`,title:"View Lens Information",children:[g,e.jsx(ua,{})]})]}),e.jsxs("div",{className:"shrink-0 w-full md:w-64",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[e.jsx("label",{className:`block text-xs font-semibold ${f?"text-slate-300":"text-slate-500"}`,children:"Readiness Score"}),e.jsx("button",{type:"button",onClick:()=>Ce(!0),className:"group",title:"What do the readiness score levels mean?","aria-label":"What do the readiness score levels mean?",children:e.jsx(ua,{})})]}),e.jsx("select",{value:N.score,onChange:K=>We(g,Number(K.target.value)),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 text-sm font-medium border ${f?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,style:{borderLeftWidth:"4px",borderLeftColor:Us},children:Qo.map(K=>e.jsxs("option",{value:K,children:[K," - ",Zo[K]]},K))})]})]}),e.jsx("div",{className:`${f?"bg-slate-900":"bg-blue-50/50"} px-6 py-4 border-b text-sm`,style:{borderLeftWidth:"4px",borderLeftColor:Us},children:e.jsxs("div",{className:"flex items-start flex-1",children:[e.jsx(gr,{}),e.jsxs("p",{className:`whitespace-pre-line ${f?"text-slate-300":"text-slate-600"}`,children:[e.jsxs("strong",{className:f?"text-slate-100":"text-slate-700",children:[N.score===0?"Not Started":`Level ${N.score}`,":"]}),` ${a(C.id,g,N.score)}`]})]})}),e.jsxs("div",{className:`${f?"border-slate-700":"border-slate-100"} p-6 border-t`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:`text-sm font-semibold ${f?"text-slate-100":"text-slate-800"}`,children:"Lens Actions"}),e.jsx("p",{className:`mt-1 text-xs ${f?"text-slate-300":"text-slate-500"}`,children:"Hierarchy: Outcome - Action - Affected component lenses."})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs("select",{"aria-label":`Filter ${g} actions by type`,value:_e,onChange:K=>A(ce=>({...ce,[T]:K.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${f?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),[...new Set([...Zt,...Nn])].map(K=>e.jsx("option",{value:K,children:K},K))]}),e.jsxs("select",{"aria-label":`Filter ${g} actions by owner`,value:Pe,onChange:K=>W(ce=>({...ce,[T]:K.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${f?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),Dn.map(K=>e.jsx("option",{value:K,children:K},K))]}),e.jsx("button",{onClick:()=>tn(g),className:"px-3 py-1.5 rounded bg-[#005eb8] text-white text-xs font-semibold shadow-[0_2px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Add Action"})]})]}),Ze.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${f?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:f?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Actions"})]})}),e.jsx("tbody",{className:`${f?"divide-slate-700":"divide-slate-100"} divide-y`,children:(ke[`${C.id}:${g}`]?Ze:Ze.slice(0,5)).map(K=>{var Ws;const ce=K.action,Xn=Xe(ce.status),Qn=Ft(ce.status,ce.startDate,ce.dueDate),dt=Qn==="Overdue start"||Qn==="Overdue completion"?Qn:null,Et=((Ws=V[K.sourceComponentId])==null?void 0:Ws.label)||K.sourceComponentId,Ai=cr(K.sourceComponentId,ce.id,n.objectives||{}),Oi=An[Xn]||An.Planned,It=`${K.sourceComponentId}:${K.sourceLens}:${ce.id}`,_i=b&&j==="pathway-1"&&ce.priority?ce.priority==="must"?f?"bg-red-950/30":"bg-red-50":f?"bg-amber-950/30":"bg-amber-50":"";return e.jsxs("tr",{className:_i,children:[e.jsxs("td",{className:`px-3 py-2 text-sm ${f?"text-slate-100":"text-slate-800"}`,children:[e.jsx("div",{children:Hn(ce.text,re[K.sourceComponentId]||[],f,d)}),K.isLinkedView?e.jsxs("div",{className:`mt-1 text-xs ${f?"text-indigo-300":"text-indigo-700"}`,children:["Linked from ",Et," /"," ",K.sourceLens]}):null]}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("select",{"aria-label":`Current state for ${ce.text}`,value:Xn,onChange:rn=>M(K.sourceLens,ce,rn.target.value),className:`min-w-[7.5rem] rounded-md border px-2 py-1 text-xs font-semibold ${Oi} focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b]`,children:oa.map(rn=>e.jsx("option",{value:rn,children:rn},rn))}),dt?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:dt}):null,!Ai.length&&e.jsx("div",{className:`mt-1 text-center text-xs ${f?"text-amber-200":"text-amber-700"}`,children:"Not yet linked"})]}),e.jsx("td",{className:"px-3 py-2",children:S===It?e.jsxs("select",{autoFocus:!0,"aria-label":`Owner for ${ce.text}`,value:ce.owner||"",onChange:rn=>{k(K.sourceLens,ce.id,rn.target.value),D(null)},onBlur:()=>D(null),className:`min-w-[9rem] rounded-md border px-2 py-1 text-xs font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] ${f?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Unassigned"}),oe.map(rn=>e.jsx("option",{value:rn.name,children:rn.name},rn.id)),ce.owner&&!oe.some(rn=>rn.name===ce.owner)?e.jsxs("option",{value:ce.owner,children:[ce.owner," (not on roster)"]}):null]}):e.jsx("button",{type:"button",onClick:()=>D(It),"aria-label":`Change owner for ${ce.text}`,className:"rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b]",children:e.jsx(za,{name:ce.owner||"",darkMode:f,imageDataUrl:Se&&ce.owner===Se?R:void 0})})}),e.jsx("td",{className:"px-3 py-2",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(zo,{status:ce.status,startDate:ce.startDate,dueDate:ce.dueDate}),e.jsx("button",{type:"button",onClick:()=>wn(K.sourceComponentId,K.sourceLens,ce),title:"Edit action","aria-label":`Edit ${ce.text}`,className:`${f?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} inline-flex h-8 w-8 items-center justify-center rounded-md border`,children:e.jsx(pr,{})}),e.jsx("button",{type:"button",onClick:()=>ee(K.sourceComponentId,K.sourceLens,ce),title:"Remove action","aria-label":`Remove ${ce.text}`,className:`${f?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"} inline-flex h-8 w-8 items-center justify-center rounded-md border`,children:e.jsx(hr,{})})]})})]},It)})})]})}):e.jsx("p",{className:`text-sm ${f?"text-slate-300":"text-slate-500"}`,children:y("No actions yet for this lens.")}),Ze.length>5?e.jsx("button",{type:"button",onClick:()=>Ae(K=>({...K,[`${C.id}:${g}`]:!K[`${C.id}:${g}`]})),className:`${f?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} mt-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:ke[`${C.id}:${g}`]?"Show top 5 actions":`Show additional ${Ze.length>5?Ze.length-5:Ze.length} action(s)`}):""]})]},g)})}):null,e.jsx(ur,{rows:de,isOpen:_,onToggle:()=>ae(g=>!g),darkMode:f}),P?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${f?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-hidden rounded-xl border p-6 shadow-2xl`,style:{borderTopWidth:"4px",borderTopColor:On(P.action.readinessScore??0).color},children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:`text-lg font-semibold ${f?"text-slate-100":"text-slate-900"}`,children:[P.mode==="create"?"Create Action":"Edit Action"," ·"," ",Me," / ",P.sourceLens," · ",Ue]}),e.jsx("span",{className:"mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-semibold text-white",style:{backgroundColor:On(P.action.readinessScore??0).color},children:On(P.action.readinessScore??0).label})]}),e.jsx("button",{type:"button",onClick:Rn,className:`${f?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:"mt-4 max-h-[calc(100vh-13rem)] overflow-y-auto pr-1 grid gap-3",children:[e.jsx("div",{className:`${f?"border-slate-700 bg-slate-900":"border-blue-100 bg-white"} sticky top-0 z-10 rounded-md border px-3 py-2 shadow-sm`,children:e.jsxs("label",{className:`text-sm ${f?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Description"}),e.jsx("textarea",{value:P.action.text,onChange:g=>q({text:g.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${f?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})}),e.jsxs("div",{className:`${f?"border-slate-700 bg-slate-900 text-slate-200":"border-blue-100 bg-blue-50 text-slate-700"} rounded-md border px-3 py-2 text-xs`,children:[e.jsx("strong",{children:"Linking order:"})," first attach this action to one or more outcomes, then add affected component lenses (component + lens) where this action should appear."]}),e.jsx(Ri,{action:P.action,onChange:q,teamMembers:oe,darkMode:f}),e.jsxs("div",{className:`${f?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${f?"text-slate-100":"text-slate-800"}`,children:"Evidence Links / Docs"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:fe,className:`${f?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Add web link"}),e.jsxs("label",{className:`${f?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:["Upload file(s)",e.jsx("input",{type:"file",multiple:!0,className:"hidden",onChange:mn})]})]})]}),e.jsx("p",{className:`mt-1 text-xs ${f?"text-slate-300":"text-slate-500"}`,children:"Add evidence as either web links or uploaded files. Everything appears below in a single list."}),e.jsx("div",{className:`${f?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:P.evidenceItems.length?P.evidenceItems.map((g,N)=>e.jsxs("div",{className:`${f?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} grid grid-cols-1 gap-2 rounded border p-2 md:grid-cols-[auto,1fr,1fr,auto]`,children:[e.jsx("div",{className:"flex items-start pt-2",children:e.jsx("span",{className:`${g.type==="file"?"bg-emerald-100 text-emerald-800":"bg-blue-100 text-blue-800"} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`,children:g.type==="file"?"File":"Link"})}),e.jsx("input",{value:g.label,onChange:T=>Re(N,"label",T.target.value),placeholder:g.type==="file"?"Document label":"Link label",className:`rounded-md border px-2.5 py-2 text-sm ${f?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`}),e.jsx("input",{value:g.href,onChange:T=>Re(N,"href",T.target.value),placeholder:g.type==="file"?"Embedded file URL (auto generated)":"https://...",className:`rounded-md border px-2.5 py-2 text-sm ${f?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,disabled:g.type==="file"}),e.jsx("button",{type:"button",onClick:()=>jn(N),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},`${g.type}-${N}`)):e.jsx("p",{className:`px-2 py-1 text-sm ${f?"text-slate-300":"text-slate-500"}`,children:"No evidence links or documents added yet."})})]}),e.jsxs("div",{className:`${f?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsx("p",{className:`text-sm font-semibold ${f?"text-slate-100":"text-slate-800"}`,children:"Affected Outcomes"}),e.jsx("p",{className:`mt-1 text-xs ${f?"text-slate-300":"text-slate-500"}`,children:"Tick 1-3 outcomes directly impacted by this action. Outcome status is auto-derived from these linked actions."}),e.jsx("div",{className:`${f?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:(((Ms=n.objectives)==null?void 0:Ms[P.sourceComponentId])||[]).length?(((Gs=n.objectives)==null?void 0:Gs[P.sourceComponentId])||[]).map(g=>{const N=P.linkedObjectiveIds.includes(g.id);return e.jsxs("label",{className:`${f?"hover:bg-slate-700":"hover:bg-slate-50"} flex items-start gap-2 rounded px-2 py-1.5`,children:[e.jsx("input",{type:"checkbox",checked:N,onChange:()=>hn(g.id),className:"mt-0.5"}),e.jsx("span",{className:`text-sm ${f?"text-slate-100":"text-slate-700"}`,children:g.text||"Untitled outcome"})]},g.id)}):e.jsx("p",{className:`px-2 py-1 text-sm ${f?"text-slate-300":"text-slate-500"}`,children:y("No outcomes are defined for this component yet.")})})]}),e.jsxs("div",{className:`${f?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${f?"text-slate-100":"text-slate-800"}`,children:"Affected Component Lenses"}),e.jsx("span",{className:"inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-600",title:"Actions often contribute to other component lenses. Add those targets here so the same action is visible in each relevant lens.",children:"i"})]}),e.jsxs("div",{className:"mt-2 space-y-2",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2",children:[e.jsx("select",{value:P.targetPickerComponentId,onChange:g=>{const N=g.target.value,T=V[N];me(N,(T==null?void 0:T.lenses[0])||"")},className:`rounded-md border px-2.5 py-2 text-sm ${f?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:t.map(g=>e.jsx("option",{value:g.id,children:g.label},g.id))}),e.jsx("select",{value:P.targetPickerLens,onChange:g=>me(P.targetPickerComponentId,g.target.value),className:`rounded-md border px-2.5 py-2 text-sm ${f?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:(((Fs=V[P.targetPickerComponentId])==null?void 0:Fs.lenses)||[]).map(g=>e.jsx("option",{value:g,children:g},g))}),e.jsx("button",{type:"button",onClick:ue,disabled:In(P.action,P.sourceComponentId,P.sourceLens).some(g=>g.componentId===P.targetPickerComponentId&&g.lens===P.targetPickerLens),title:In(P.action,P.sourceComponentId,P.sourceLens).some(g=>g.componentId===P.targetPickerComponentId&&g.lens===P.targetPickerLens)?"Already added":"Add selected affected lens",className:`${f?"border-cyan-500/50 bg-cyan-500/15 text-cyan-100 hover:bg-cyan-500/25":"border-cyan-300 bg-cyan-100 text-cyan-900 hover:bg-cyan-200"} rounded-md border px-3 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-60`,children:"Add Lens"})]}),e.jsx("div",{className:`${f?"border-slate-700":"border-slate-200"} overflow-hidden rounded border`,children:e.jsxs("table",{className:`min-w-full ${f?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:f?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Component"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Remove"})]})}),e.jsx("tbody",{className:`${f?"divide-slate-700":"divide-slate-100"} divide-y`,children:In(P.action,P.sourceComponentId,P.sourceLens).map(g=>{var N;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-2.5 py-2 text-sm ${f?"text-slate-100":"text-slate-700"}`,children:((N=V[g.componentId])==null?void 0:N.label)||g.componentId}),e.jsx("td",{className:`px-2.5 py-2 text-sm ${f?"text-slate-100":"text-slate-700"}`,children:g.lens}),e.jsx("td",{className:"px-2.5 py-2",children:e.jsx("button",{type:"button",onClick:()=>Le(g.componentId,g.lens),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},`${g.componentId}:${g.lens}`)})})]})})]})]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[P.mode==="edit"&&P.actionId?e.jsx("button",{type:"button",onClick:()=>{if(P.action.priority==="must"){window.alert("You are trying to delete what we have classified as a MUST action, and it shouldn't be deleted. Please re-review.");return}u(P.sourceComponentId,P.sourceLens,P.actionId),Rn()},className:"mr-auto rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100",children:"Delete Action"}):null,e.jsx("button",{type:"button",onClick:Rn,className:`${f?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Cancel"}),e.jsx("button",{type:"button",onClick:ct,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Save Action"})]})]})}):null,Ne?e.jsx(Mo,{onClose:()=>Ce(!1),darkMode:f}):null,Te.length>0?e.jsx(Ka,{message:Te[0].message,onDismiss:()=>Ke(g=>g.slice(1)),celebrate:!0},Te[0].id):null,be&&Ee&&je?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":"Outcome Details",className:`w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${f?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${f?"text-slate-100":"text-slate-900"}`,children:"Outcome Details"}),e.jsxs("div",{className:"flex items-center gap-2",children:[Ee&&Xo(Ee.id)?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>{Gn(Ee),ye(null)},className:`${f?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Edit"}),e.jsx("button",{type:"button",onClick:()=>{lt(Ee.id),ye(null)},className:"rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-700 hover:bg-red-100",children:"Delete"})]}):null,e.jsx("button",{type:"button",onClick:()=>ye(null),className:`${f?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]})]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${f?"text-slate-400":"text-slate-500"}`,children:"Outcome"}),e.jsx("p",{className:`mt-1 text-sm ${f?"text-slate-100":"text-slate-900"}`,children:Ee.text||"Untitled outcome"})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${f?"text-slate-400":"text-slate-500"}`,children:"Owner"}),e.jsx("p",{className:`mt-1 text-sm ${f?"text-slate-100":"text-slate-900"}`,children:Ee.owner||"Unassigned"})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${f?"text-slate-400":"text-slate-500"}`,children:"Status"}),e.jsx("span",{className:`mt-1 inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${ra[je]}`,children:je})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${f?"text-slate-400":"text-slate-500"}`,children:"Linked Actions"}),nn.length?e.jsx("div",{className:`mt-2 overflow-x-auto rounded-md border ${f?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:`min-w-full divide-y ${f?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"}`,children:[e.jsx("thead",{className:f?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Navigate"})]})}),e.jsx("tbody",{className:`divide-y ${f?"divide-slate-700":"divide-slate-100"}`,children:nn.map(g=>{var T,z;const N=g.status?An[g.status]||An.Planned:An.Planned;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${f?"text-slate-100":"text-slate-700"}`,children:g.lens}),e.jsx("td",{className:`px-3 py-2 text-sm ${f?"text-slate-100":"text-slate-700"}`,children:((T=g.action)==null?void 0:T.text)||"Linked action not found"}),e.jsxs("td",{className:"px-3 py-2",children:[g.action?e.jsx("select",{"aria-label":`Current state for ${g.action.text}`,value:g.status||"Planned",onChange:Q=>M(g.lens,g.action,Q.target.value),className:`min-w-[7.5rem] rounded-md border px-2 py-1 text-xs font-semibold ${N} focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b]`,children:oa.map(Q=>e.jsx("option",{value:Q,children:Q},Q))}):e.jsx("span",{className:"text-xs text-slate-500",children:"Not linked"}),g.temporalStatus==="Overdue start"||g.temporalStatus==="Overdue completion"?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:g.temporalStatus}):null]}),e.jsx("td",{className:"px-3 py-2",children:g.action?e.jsx("button",{type:"button",onClick:()=>Pn(g.lens,g.action||void 0),className:`${f?"border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25":"border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Open Action"}):e.jsx("span",{className:`text-xs ${f?"text-slate-500":"text-slate-400"}`,children:"Unavailable"})})]},`${g.lens}:${((z=g.action)==null?void 0:z.id)||"missing"}`)})})]})}):e.jsx("p",{className:`mt-1 text-sm ${f?"text-slate-300":"text-slate-500"}`,children:"No linked actions assigned."})]})]})]})}):null,se?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":se.mode==="create"?"Add Outcome":"Edit Outcome",className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${f?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsx("h3",{className:`text-lg font-semibold ${f?"text-slate-100":"text-slate-900"}`,children:se.mode==="create"?"Add Outcome":"Edit Outcome"}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"objective-editor-text",className:`block text-xs font-medium ${f?"text-slate-300":"text-slate-700"}`,children:"Outcome description"}),e.jsx("textarea",{id:"objective-editor-text",value:se.text,onChange:g=>De({...se,text:g.target.value}),className:`mt-1 w-full rounded-md border p-2 text-sm h-20 ${f?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"objective-editor-owner",className:`block text-xs font-medium ${f?"text-slate-300":"text-slate-700"}`,children:"Owner"}),e.jsxs("select",{id:"objective-editor-owner",value:se.owner,onChange:g=>De({...se,owner:g.target.value}),className:`mt-1 w-full rounded-md border p-2 text-sm ${f?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Unassigned"}),oe.map(g=>e.jsxs("option",{value:g.name,children:[g.name||"Unnamed",g.role?` - ${g.role}`:""]},g.id)),se.owner&&!oe.some(g=>g.name===se.owner)?e.jsxs("option",{value:se.owner,children:[se.owner," (not on roster)"]}):null]})]})]}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:Fn,className:`${f?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Cancel"}),e.jsx("button",{type:"button",onClick:_n,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Save Outcome"})]})]})}):null,e.jsx(Ta,{open:le,onCancel:()=>{ge.current=null,ie(!1)},onContinue:g=>{g&&sn(tt,!0);const N=ge.current;ge.current=null,ie(!1),N==null||N()},darkMode:f}),e.jsx(vn,{open:xe.isOpen,onClose:xe.close,title:"Assessing a component",darkMode:f,body:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Each component is assessed lens by lens: justify where you are, review its outcomes, then plan and track delivery actions for each readiness level."}),e.jsx("p",{children:'Click "What is this?" at the top for what the component covers, and "Evidence Links and Docs" at the bottom rounds up everything attached as evidence across all of its actions.'})]})})]})}const pt=50;function Sr(n){const t=new Date(n);return Number.isNaN(t.getTime())?n:t.toLocaleString("en-GB",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function vr({events:n,darkMode:t=!1}){const s=pn("audit-log"),[a,i]=m.useState("all"),[l,r]=m.useState("all"),[o,u]=m.useState("all"),[h,d]=m.useState(""),[c,x]=m.useState(1),b=m.useMemo(()=>["all",...Array.from(new Set(n.map(j=>j.eventType))).sort()],[n]),w=m.useMemo(()=>["all",...Array.from(new Set(n.map(j=>j.componentId).filter(Boolean))).sort()],[n]),R=m.useMemo(()=>["all",...Array.from(new Set(n.map(j=>j.actor).filter(Boolean))).sort()],[n]),O=m.useMemo(()=>{const j=h.trim().toLowerCase();return n.filter(y=>a==="all"?!0:y.eventType===a).filter(y=>l==="all"?!0:y.componentId===l).filter(y=>o==="all"?!0:y.actor===o).filter(y=>j?[y.summary,y.reason,y.entityId,y.lens].filter(Boolean).some(Z=>String(Z).toLowerCase().includes(j)):!0).sort((y,Z)=>Date.parse(Z.timestamp)-Date.parse(y.timestamp))},[n,a,l,o,h]),f=Math.max(1,Math.ceil(O.length/pt)),I=Math.min(c,f),H=(I-1)*pt,C=O.slice(H,H+pt);return e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Audit Log"}),e.jsx(yn,{onClick:s.reopen,darkMode:t})]}),e.jsx("p",{className:`text-sm mt-1 ${t?"text-slate-300":"text-slate-600"}`,children:"Timestamped history of CST changes, including who made each change."})]}),e.jsx(vn,{open:s.isOpen,onClose:s.close,title:"Audit Log",darkMode:t,body:e.jsx("p",{children:"A timestamped history of changes made to your CST, including who made each change. Filter by event type, component, or actor, and expand a row to see exactly what changed."})}),e.jsxs("div",{className:`grid gap-3 md:grid-cols-4 rounded-lg border p-4 ${t?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Event type"}),e.jsx("select",{value:a,onChange:j=>{i(j.target.value),x(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:b.map(j=>e.jsx("option",{value:j,children:j==="all"?"All":j},j))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Component"}),e.jsx("select",{value:l,onChange:j=>{r(j.target.value),x(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:w.map(j=>e.jsx("option",{value:j,children:j==="all"?"All":j},j))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Actor"}),e.jsx("select",{value:o,onChange:j=>{u(j.target.value),x(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:R.map(j=>e.jsx("option",{value:j,children:j==="all"?"All":j},j))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Search"}),e.jsx("input",{value:h,onChange:j=>{d(j.target.value),x(1)},placeholder:"summary, reason, id",className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsx("div",{className:`rounded-lg border overflow-hidden ${t?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full text-sm",children:[e.jsx("thead",{className:t?"bg-slate-900 text-slate-200":"bg-slate-50 text-slate-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left",children:"When"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Who"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"What"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Context"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Details"})]})}),e.jsx("tbody",{className:t?"bg-slate-800 text-slate-100":"bg-white text-slate-800",children:C.length?C.map(j=>e.jsxs("tr",{className:t?"border-t border-slate-700":"border-t border-slate-100",children:[e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:Sr(j.timestamp)}),e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:j.actor||"Unknown user"}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{className:"font-medium",children:j.summary}),e.jsx("div",{className:`text-xs mt-1 ${t?"text-slate-300":"text-slate-600"}`,children:j.eventType})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{children:j.componentId||"-"}),e.jsx("div",{className:`text-xs ${t?"text-slate-300":"text-slate-600"}`,children:j.lens||"-"})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[j.reason?e.jsxs("div",{children:["Reason: ",j.reason]}):null,j.before||j.after?e.jsxs("details",{className:"mt-1",children:[e.jsx("summary",{className:"cursor-pointer text-xs underline",children:"Before/After"}),e.jsx("pre",{className:`mt-1 text-xs whitespace-pre-wrap ${t?"text-slate-300":"text-slate-600"}`,children:JSON.stringify({before:j.before,after:j.after},null,2)})]}):null]})]},j.id)):e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-6 text-center",colSpan:5,children:"No audit events found for the selected filters."})})})]})}),e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("span",{className:t?"text-slate-300":"text-slate-600",children:["Showing ",C.length?H+1:0,"-",Math.min(H+pt,O.length)," of"," ",O.length]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>x(j=>Math.max(1,j-1)),disabled:I<=1,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Previous"}),e.jsxs("span",{className:t?"text-slate-200":"text-slate-700",children:["Page ",I," / ",f]}),e.jsx("button",{type:"button",onClick:()=>x(j=>Math.min(f,j+1)),disabled:I>=f,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Next"})]})]})]})}function yr(n){if(!n)return!1;const t=new Date(n);return!isNaN(t.getTime())}function _t(n){return!n||!yr(n)?null:new Date(n)}function ti(n){const t=[],s=n.cst;if(!s.goLiveDate||!s.goLiveDate.trim())return t.push({field:"cst.goLiveDate",message:"Go live date is required."}),{isValid:!1,errors:t};const a=_t(s.goLiveDate);if(!a)return t.push({field:"cst.goLiveDate",message:"Go live date must be a valid date."}),{isValid:!1,errors:t};const i=_t(s.fullAdoptionDate);s.fullAdoptionDate&&!i&&t.push({field:"cst.fullAdoptionDate",message:"Full adoption date must be a valid date when provided."});const l=_t(s.benefitRealizationDate);return s.benefitRealizationDate&&!l&&t.push({field:"cst.benefitRealizationDate",message:"Benefit realization date must be a valid date when provided."}),i&&i<a&&t.push({field:"cst.fullAdoptionDate",message:"Full adoption date cannot be earlier than go live date."}),l&&l<(i||a)&&t.push({field:"cst.benefitRealizationDate",message:"Benefit realization date cannot be earlier than full adoption date (or go live when full adoption is empty)."}),{isValid:t.length===0,errors:t}}function wr(n){const t=m.useMemo(()=>n.errors.reduce((s,a)=>(s[a.field]||(s[a.field]=[]),s[a.field].push(a.message),s),{}),[n.errors]);return s=>{var a;return(a=t[s])==null?void 0:a[0]}}function ma(n){const t=[];(!n.trustName||n.trustName.trim()==="")&&t.push({field:"trustName",message:"Trust name is required"}),n.trustName&&n.trustName.length>255&&t.push({field:"trustName",message:"Trust name cannot exceed 255 characters"}),n.region&&n.region.length>100&&t.push({field:"region",message:"Region cannot exceed 100 characters"});const s=ti(n);return t.push(...s.errors),{isValid:t.length===0,errors:t}}function Nr({pathway:n,darkMode:t=!1}){return n==="pathway-1"?null:e.jsxs("div",{className:`mt-3 rounded-md border p-3 text-xs ${t?"border-amber-500/40 bg-amber-500/10 text-amber-100":"border-amber-300 bg-amber-50 text-amber-900"}`,children:[e.jsx("p",{className:"font-semibold",children:"Objectives and actions are currently Pathway 1 only"}),e.jsx("p",{className:"mt-1",children:"Every outcome and action in this tool right now is written for Pathway 1 (starting from scratch). Pathway 2 and Pathway 3 will need their own objectives and actions - those haven't been written yet, so components on this pathway show no outcomes or actions until pathway-specific content is added."})]})}function kr(n){return n.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"export"}function si(n){var t;return(t=n==null?void 0:n.url)!=null&&t.trim()?"custom":((n==null?void 0:n.fallback)??"default")==="base"?"base":"default"}function ai({aliases:n,onChange:t,darkMode:s}){const[a,i]=m.useState(""),l=()=>{const r=a.trim();if(!r||n.some(o=>o.toLowerCase()===r.toLowerCase())){i("");return}t([...n,r]),i("")};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[n.map(r=>e.jsxs("span",{className:`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${s?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[r,e.jsx("button",{type:"button",onClick:()=>t(n.filter(o=>o!==r)),"aria-label":`Remove "${r}"`,className:s?"text-slate-400 hover:text-slate-100":"text-slate-500 hover:text-slate-800",children:"×"})]},r)),!n.length&&e.jsx("span",{className:`text-xs ${s?"text-slate-500":"text-slate-400"}`,children:"No extra matching text added yet."})]}),e.jsxs("div",{className:"mt-2 flex gap-2",children:[e.jsx("input",{type:"text",value:a,onChange:r=>i(r.target.value),onKeyDown:r=>{r.key==="Enter"&&(r.preventDefault(),l())},placeholder:"Add text this link should also match...",className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${s?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:l,className:Ge,children:"Add"})]})]})}function Cr({link:n,perLink:t,baseOverrideUrl:s,onSave:a,onClose:i,darkMode:l}){const[r,o]=m.useState(si(t)),[u,h]=m.useState((t==null?void 0:t.url)??""),[d,c]=m.useState((t==null?void 0:t.matchAliases)??[]),x=(s==null?void 0:s.trim())||Tn.url,b=Qa(n.label).find(O=>O!==n.label),w=[{value:"default",label:"Default Toolkit Link",url:n.url},{value:"base",label:"Project Specific Homepage",url:x},{value:"custom",label:"Custom URL",url:u}],R=()=>{if(r==="custom"&&!u.trim()){window.alert("Enter a custom URL, or choose Default or Base instead.");return}const O={fallback:r==="base"?"base":"default",url:r==="custom"?u.trim():void 0,matchAliases:d.length?d:void 0};a(r==="default"&&!d.length?void 0:O)};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":`Edit ${n.label} link`,className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${l?"text-slate-100":"text-slate-900"}`,children:n.label}),e.jsx("button",{type:"button",onClick:i,"aria-label":"Close",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${l?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("div",{className:"mt-4 space-y-2",children:w.map(O=>e.jsxs("label",{className:`flex items-start gap-2 rounded-md border p-2.5 text-sm ${r===O.value?l?"border-blue-400 bg-blue-500/10":"border-blue-400 bg-blue-50":l?"border-slate-700":"border-slate-200"}`,children:[e.jsx("input",{type:"radio",name:`link-source-${n.key}`,checked:r===O.value,onChange:()=>o(O.value),className:"mt-1"}),e.jsxs("span",{className:"flex-1",children:[e.jsx("span",{className:`block font-medium ${l?"text-slate-100":"text-slate-800"}`,children:O.label}),O.value==="custom"&&r==="custom"?e.jsx("input",{type:"url",value:u,onChange:f=>h(f.target.value),placeholder:"https://...",className:`mt-1 w-full rounded border px-2 py-1.5 text-xs ${l?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}):O.url?e.jsx("a",{href:O.url,target:"_blank",rel:"noopener noreferrer",onClick:f=>f.stopPropagation(),className:`block truncate text-xs underline ${l?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:O.url}):e.jsx("span",{className:`block truncate text-xs ${l?"text-slate-400":"text-slate-500"}`,children:"No URL set yet."})]})]},O.value))}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${l?"text-slate-400":"text-slate-500"}`,children:"Match text"}),e.jsx("p",{className:`mt-1 text-xs ${l?"text-slate-300":"text-slate-500"}`,children:"This link is automatically matched in action/summary text. Add extra text below if it should match on other words too."}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-1.5",children:[e.jsxs("span",{className:`rounded-full border px-2 py-0.5 text-xs ${l?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[n.label," ",e.jsx("span",{className:"opacity-60",children:"(label)"})]}),b&&e.jsxs("span",{className:`rounded-full border px-2 py-0.5 text-xs ${l?"border-slate-600 bg-slate-800 text-slate-200":"border-slate-300 bg-slate-100 text-slate-700"}`,children:[b," ",e.jsx("span",{className:"opacity-60",children:"(auto-detected)"})]})]}),e.jsx("div",{className:"mt-2",children:e.jsx(ai,{aliases:d,onChange:c,darkMode:l})})]}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:i,className:Ge,children:"Cancel"}),e.jsx("button",{type:"button",onClick:R,className:Ln,children:"Save"})]})]})})}function jr({title:n,aliases:t,onSave:s,onClose:a,darkMode:i}){const[l,r]=m.useState(t);return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":`Match text for ${n}`,className:`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${i?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-900"}`,children:[n," - match text"]}),e.jsx("button",{type:"button",onClick:a,"aria-label":"Close",className:`shrink-0 rounded-md border px-2 py-1 text-sm ${i?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"×"})]}),e.jsx("p",{className:`mt-2 text-xs ${i?"text-slate-300":"text-slate-500"}`,children:"This link is automatically matched by its name. Add extra text below if it should match on other words too."}),e.jsx("div",{className:"mt-3",children:e.jsx(ai,{aliases:l,onChange:r,darkMode:i})}),e.jsxs("div",{className:"mt-6 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:a,className:Ge,children:"Cancel"}),e.jsx("button",{type:"button",onClick:()=>s(l),className:Ln,children:"Save"})]})]})})}function Er(n){const t=Ha[n]||[],s=new Map,a=new Map;return t.forEach(i=>{const l=qn[i];((l==null?void 0:l.inputs)??[]).forEach(r=>s.set(r.key,r)),((l==null?void 0:l.deliverables)??[]).forEach(r=>a.set(r.key,r))}),{inputs:[...s.values()],deliverables:[...a.values()]}}function Ir({orgProfile:n,onProfileUpdate:t,components:s,onComponentClick:a,onGoToIntroduction:i,onContinueToVision:l,onGoToWhereAmINow:r,darkMode:o=!1,currentUserId:u,onCurrentUserChange:h,showExternalLinksSection:d=!1}){var xe,ke,Ae,S,D,E,A,U,W,ne,oe,Se,ve,Fe,un,Cn;const[c,x]=m.useState(n),[b,w]=m.useState(null),[R,O]=m.useState(null),f=m.useRef(null),I=pn("cst-personalisation"),H=ma(c),C=wr(H);c.trustName.trim()&&(c.projectName||"").trim()&&(c.leadName||"").trim(),m.useEffect(()=>{x(n)},[n]);const j=m.useCallback(v=>{const $={...c,trustName:v};x($),t($)},[c,t]),y=m.useCallback(v=>{const $={...c,projectName:v};x($),t($)},[c,t]),Z=m.useCallback(v=>{const $={...c,leadName:v};x($),t($)},[c,t]),[L,Y]=m.useState(null),te=m.useCallback(v=>{v!==c.cst.pathway&&Y(v)},[c.cst.pathway]),re=m.useCallback(()=>{if(!L)return;const v={...c,cst:{...c.cst,pathway:L}};x(v),t(v),Y(null)},[L,c,t]),P=m.useCallback(()=>{Y(null)},[]),G=m.useCallback((v,$)=>{const V={...c,cst:{...c.cst,[v]:$}};x(V),t(V)},[c,t]),Ne=m.useCallback(v=>{const $={...c,cst:{...c.cst,toolkitChoice:v}};x($),t($)},[c,t]),Ce=m.useCallback(v=>{const $={...c,linkOverrides:v};x($),t($)},[c,t]),Te=m.useCallback((v,$)=>{const V={...c.componentFurtherReading};$.trim()?V[v]=$.trim():delete V[v];const de={...c,componentFurtherReading:V};x(de),t(de)},[c,t]),Ke=m.useCallback(v=>{var we;const $={key:`custom-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,label:"",url:"",type:"additional"},V={...c.customComponentLinks,[v]:[...((we=c.customComponentLinks)==null?void 0:we[v])||[],$]},de={...c,customComponentLinks:V};x(de),t(de)},[c,t]),B=m.useCallback((v,$,V,de)=>{var Ee;const we=((Ee=c.customComponentLinks)==null?void 0:Ee[v])||[],Me={...c.customComponentLinks,[v]:we.map(je=>je.key===$?{...je,[V]:de}:je)},Ue={...c,customComponentLinks:Me};x(Ue),t(Ue)},[c,t]),le=m.useCallback((v,$,V)=>{var Ue;const de=((Ue=c.customComponentLinks)==null?void 0:Ue[v])||[],we={...c.customComponentLinks,[v]:de.map(Ee=>Ee.key===$?{...Ee,matchAliases:V.length?V:void 0}:Ee)},Me={...c,customComponentLinks:we};x(Me),t(Me)},[c,t]),ie=m.useCallback((v,$)=>{var Me;const V=((Me=c.customComponentLinks)==null?void 0:Me[v])||[],de={...c.customComponentLinks,[v]:V.filter(Ue=>Ue.key!==$)},we={...c,customComponentLinks:de};x(we),t(we)},[c,t]),ge=m.useCallback(()=>{const v={id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:"",role:""},$={...c,teamMembers:[...c.teamMembers||[],v]};x($),t($)},[c,t]),be=m.useCallback((v,$,V)=>{const de={...c,teamMembers:(c.teamMembers||[]).map(we=>we.id===v?{...we,[$]:V}:we)};x(de),t(de)},[c,t]),ye=m.useCallback(v=>{const $={...c,teamMembers:(c.teamMembers||[]).filter(V=>V.id!==v)};x($),t($),u===v&&h("")},[c,t,u,h]),se=c.coreLinks&&c.coreLinks.length>0?c.coreLinks:Va,De=m.useCallback(()=>{const v={key:`core-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,label:"",url:"",type:"core"},$={...c,coreLinks:[...se,v]};x($),t($)},[c,se,t]),$e=m.useCallback((v,$,V)=>{const de={...c,coreLinks:se.map(we=>we.key===v?{...we,[$]:V}:we)};x(de),t(de)},[c,se,t]),ze=m.useCallback((v,$)=>{const V={...c,coreLinks:se.map(de=>de.key===v?{...de,matchAliases:$.length?$:void 0}:de)};x(V),t(V)},[c,se,t]),Be=m.useCallback(v=>{const $={...c,coreLinks:se.filter(V=>V.key!==v)};x($),t($)},[c,se,t]),Ie=c.toolLinks||[],cn=m.useCallback(()=>{const v="highlight-builder",$={key:`tool-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,tool:v,matchText:ft[v].matchText},V={...c,toolLinks:[...Ie,$]};x(V),t(V)},[c,Ie,t]),Je=m.useCallback((v,$)=>{const V={...c,toolLinks:Ie.map(de=>de.key===v?{...de,tool:$,matchText:ft[$].matchText}:de)};x(V),t(V)},[c,Ie,t]),dn=m.useCallback((v,$)=>{const V={...c,toolLinks:Ie.map(de=>de.key===v?{...de,matchText:$}:de)};x(V),t(V)},[c,Ie,t]),en=m.useCallback(v=>{const $={...c,toolLinks:Ie.filter(V=>V.key!==v)};x($),t($)},[c,Ie,t]),_=m.useCallback(v=>{const $={...c,externalLinksInitiated:v};x($),t($)},[c,t]),ae=m.useCallback(()=>{const v={schemaVersion:"cst-v1",exportedAt:new Date().toISOString(),orgProfile:c},$=`cst-personalisation-${c.trustName?kr(c.trustName):"export"}.json`;nt($,JSON.stringify(v,null,2),"application/json")},[c]),J=m.useCallback(()=>{var v;(v=f.current)==null||v.click()},[]),he=m.useCallback(async v=>{var V;const $=(V=v.target.files)==null?void 0:V[0];if(v.target.value="",!!$)try{const de=await $.text(),we=JSON.parse(de);if(!we.orgProfile||typeof we.orgProfile!="object"){window.alert("This file does not contain Project Profile data.");return}const Me=kt(we.orgProfile),Ue=ma(Me);if(!window.confirm("Import this Project Profile file? This replaces your current organisation profile, pathway/timeline, toolkit links, further reading, core links and team members."+(Ue.errors.length?`

Note: the imported data has ${Ue.errors.length} validation warning(s) you can fix after importing.`:"")))return;x(Me),t(Me)}catch{window.alert("Unable to read this file. Please choose a valid Project Profile export.")}},[t]);return e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-800"}`,children:"Project Profile"}),e.jsx(yn,{onClick:I.reopen,darkMode:o})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:J,className:Ge,children:"Import Setup"}),e.jsx("input",{ref:f,type:"file",accept:"application/json",className:"hidden",onChange:he}),e.jsx("button",{type:"button",onClick:ae,className:Ge,children:"Export Setup"}),e.jsx("button",{type:"button",onClick:i,className:Ge,"data-testid":"cst-show-intro-button",children:"Go to Introduction"}),e.jsx("button",{type:"button",onClick:l,disabled:!c.trustName.trim(),title:c.trustName.trim()?void 0:"Add a trust name below first so the rest of the tool unlocks",className:`${Ln} disabled:cursor-not-allowed disabled:opacity-50`,"data-testid":"cst-continue-to-vision-button",children:"Continue to Vision →"})]})]}),e.jsx("p",{className:`text-sm -mt-4 ${o?"text-slate-300":"text-slate-600"}`,children:"This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways it follows, and how it's tracking against its readiness phases."}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 1: Organisation profile"}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Provide some initial details to the project name, and change manager"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-trust-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Organisation Name"}),e.jsx("input",{id:"org-trust-name",type:"text","data-testid":"cst-trust-name-input",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:c.trustName,onChange:v=>j(v.target.value),"aria-invalid":!!C("trustName"),"aria-describedby":C("trustName")?"org-trust-name-error":void 0}),C("trustName")?e.jsx("p",{id:"org-trust-name-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:C("trustName")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-project-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Programme / Project Name"}),e.jsx("input",{id:"org-project-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:c.projectName||"",onChange:v=>y(v.target.value)})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-lead-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Lead Submitter (Change Lead)"}),e.jsx("input",{id:"org-lead-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:c.leadName||"",onChange:v=>Z(v.target.value)})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 2: Pathway and timeline"}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Choose the full pathway title for your programme, then set key timeline dates."})]}),e.jsx("div",{className:"mt-3",children:e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-pathway",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Pathway"}),e.jsx("select",{id:"cst-pathway",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:c.cst.pathway,onChange:v=>te(v.target.value),"aria-invalid":!!C("cst.pathway"),"aria-describedby":C("cst.pathway")?"cst-pathway-error":void 0,children:xt.map(v=>e.jsx("option",{value:v.value,children:v.label},v.value))}),C("cst.pathway")?e.jsx("p",{id:"cst-pathway-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:C("cst.pathway")}):null]})}),e.jsx(Nr,{pathway:c.cst.pathway,darkMode:o}),e.jsxs("div",{className:"mt-3 grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-go-live",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Go Live Date (required)"}),e.jsx("input",{id:"cst-go-live",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:c.cst.goLiveDate,onChange:v=>G("goLiveDate",v.target.value),"aria-invalid":!!C("cst.goLiveDate"),"aria-describedby":C("cst.goLiveDate")?"cst-go-live-error":void 0}),C("cst.goLiveDate")?e.jsx("p",{id:"cst-go-live-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:C("cst.goLiveDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-full-adoption",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Full Adoption Date (optional)"}),e.jsx("input",{id:"cst-full-adoption",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:c.cst.fullAdoptionDate,onChange:v=>G("fullAdoptionDate",v.target.value),"aria-invalid":!!C("cst.fullAdoptionDate"),"aria-describedby":C("cst.fullAdoptionDate")?"cst-full-adoption-error":void 0}),C("cst.fullAdoptionDate")?e.jsx("p",{id:"cst-full-adoption-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:C("cst.fullAdoptionDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-benefit",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Benefit Realisation Date (optional)"}),e.jsx("input",{id:"cst-benefit",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:c.cst.benefitRealizationDate,onChange:v=>G("benefitRealizationDate",v.target.value),"aria-invalid":!!C("cst.benefitRealizationDate"),"aria-describedby":C("cst.benefitRealizationDate")?"cst-benefit-error":void 0}),C("cst.benefitRealizationDate")?e.jsx("p",{id:"cst-benefit-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:C("cst.benefitRealizationDate")}):null]})]}),H.errors.filter(v=>v.field.startsWith("cst.")).length>0?e.jsxs("div",{className:`mt-4 rounded-md border p-3 ${o?"border-amber-500/40 bg-amber-500/10":"border-amber-300 bg-amber-50"}`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-amber-200":"text-amber-800"}`,children:"CST validation warnings"}),e.jsx("ul",{className:`mt-2 space-y-1 text-sm ${o?"text-amber-100":"text-amber-900"}`,children:H.errors.filter(v=>v.field.startsWith("cst.")).map(v=>e.jsxs("li",{children:["- ",v.message]},v.field+v.message))})]}):null]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 3: Team Members"}),e.jsx("p",{className:`text-sm mt-1 ${o?"text-slate-300":"text-slate-600"}`,children:"Add the people working on this programme so actions and readiness slides can be assigned to a named owner. This roster is saved with the CST; who you're signed in as is remembered on this device only."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-current-user",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"You are signed in as"}),e.jsxs("select",{id:"cst-current-user",value:u||"",onChange:v=>h(v.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 md:w-1/2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Not selected"}),(c.teamMembers||[]).map(v=>e.jsxs("option",{value:v.id,children:[v.name||"Unnamed",v.role?` - ${v.role}`:""]},v.id))]})]}),e.jsxs("div",{className:"space-y-2",children:[(c.teamMembers||[]).map(v=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2 items-center",children:[e.jsx("input",{value:v.name,onChange:$=>be(v.id,"name",$.target.value),placeholder:"Name",className:`rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("input",{value:v.role,onChange:$=>be(v.id,"role",$.target.value),placeholder:"Role (e.g. Change Lead)",className:`rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("button",{type:"button",onClick:()=>ye(v.id),className:"shrink-0 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},v.id)),(c.teamMembers||[]).length?null:e.jsx("p",{className:`text-sm ${o?"text-slate-400":"text-slate-500"}`,children:"No team members added yet."})]}),e.jsx("button",{type:"button",onClick:ge,className:Ge,children:"+ Add Team Member"})]}),e.jsxs("div",{className:`flex flex-wrap items-center justify-between gap-3 rounded-lg border p-5 ${o?"border-blue-500/30 bg-blue-500/10":"border-blue-200 bg-blue-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-blue-100":"text-blue-900"}`,children:"What phase are you currently in?"}),e.jsx("p",{className:`mt-1 text-xs ${o?"text-blue-200":"text-blue-800"}`,children:"Answer a few quick questions and see your readiness by component to figure out where you really are in the change journey."})]}),e.jsx("button",{type:"button",onClick:r,className:Ln,children:"Where am I now?"})]}),e.jsx("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 4: External links"}),e.jsxs("label",{className:`flex items-center gap-2 text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:[e.jsx("input",{type:"checkbox",checked:!!c.externalLinksInitiated,onChange:v=>_(v.target.checked)}),"Links initiated"]})]}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:`This is normally only set up once at the start of a project. Once you're done, tick "Links initiated" to hide this section - re-enable "Show external links section" in Settings if you need to come back to it.`}),!c.externalLinksInitiated||d?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"All toolkit links across the tool point to the NHS Future platform by default. You can override the base toolkit destination for your organisation, or change individual links independently."}),e.jsxs("div",{className:`mt-3 rounded-md border p-3 text-xs ${o?"border-blue-500/30 bg-blue-500/10 text-blue-100":"border-blue-200 bg-blue-50 text-blue-900"}`,children:[e.jsx("p",{className:"font-semibold",children:"Fallback reference"}),e.jsxs("p",{className:"mt-1",children:["Project Specific Homepage:"," ",e.jsx("span",{className:"font-medium",children:Tn.label})," (",Tn.url,")"]}),e.jsx("p",{className:"mt-1",children:"Default Toolkit Link: the original NHS Future link defined per guidance item."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("label",{htmlFor:"cst-toolkit-choice",className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Default toolkit for assistant preview"}),e.jsx("select",{id:"cst-toolkit-choice",value:c.cst.toolkitChoice,onChange:v=>Ne(v.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:Fi.map(v=>e.jsx("option",{value:v.key,children:v.label},v.key))}),e.jsx("p",{className:`mt-2 text-xs ${o?"text-slate-300":"text-slate-500"}`,children:"This controls which toolkit the chatbot-style assistant opens by default across the tool."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Project Specific Homepage"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"Replaces the Change Management Toolkit destination for all links that fall back to it."}),e.jsxs("p",{className:"mt-1 text-xs",children:["Currently:"," ",e.jsx("a",{href:((Ae=(ke=(xe=c.linkOverrides)==null?void 0:xe.base)==null?void 0:ke.url)==null?void 0:Ae.trim())||Tn.url,target:"_blank",rel:"noopener noreferrer",className:`underline ${o?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:((E=(D=(S=c.linkOverrides)==null?void 0:S.base)==null?void 0:D.url)==null?void 0:E.trim())||Tn.url})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Toolkit name"}),e.jsx("input",{type:"text",placeholder:Tn.label,value:((U=(A=c.linkOverrides)==null?void 0:A.base)==null?void 0:U.label)??"",onChange:v=>{var $;return Ce({...c.linkOverrides,base:{...($=c.linkOverrides)==null?void 0:$.base,label:v.target.value||void 0}})},className:`w-full rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Toolkit URL"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:Tn.url,value:((ne=(W=c.linkOverrides)==null?void 0:W.base)==null?void 0:ne.url)??"",onChange:v=>{var $;return Ce({...c.linkOverrides,base:{...($=c.linkOverrides)==null?void 0:$.base,url:v.target.value||void 0}})},className:`flex-1 min-w-0 rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),((Se=(oe=c.linkOverrides)==null?void 0:oe.base)==null?void 0:Se.url)&&e.jsx("button",{type:"button",onClick:()=>{var v;return Ce({...c.linkOverrides,base:{...(v=c.linkOverrides)==null?void 0:v.base,url:void 0}})},className:`shrink-0 rounded-md border px-3 py-2 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Reset"})]})]})]})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Additional Links"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"General reference links that aren't tied to a single component - shown here and matched into action/summary text across every component."})]}),e.jsx("div",{className:"space-y-2",children:se.map(v=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto,auto] gap-2 items-center",children:[e.jsx("input",{type:"text",placeholder:"Link name",value:v.label,onChange:$=>$e(v.key,"label",$.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("input",{type:"url",placeholder:"https://...",value:v.url,onChange:$=>$e(v.key,"url",$.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>O({link:v}),"aria-label":`Edit match text for ${v.label||"this core link"}`,className:`shrink-0 rounded border px-1.5 py-1.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"}),e.jsx("button",{type:"button",onClick:()=>Be(v.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},v.key))}),e.jsx("button",{type:"button",onClick:De,className:Ge,children:"+ Add Core Link"})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Tool linking"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"Matches text in action/summary bodies and turns it into a button that opens an in-app tool, instead of a link to a URL."})]}),e.jsx("div",{className:"space-y-2",children:Ie.map(v=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto] gap-2 items-center",children:[e.jsx("select",{value:v.tool,onChange:$=>Je(v.key,$.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Ba.map($=>e.jsx("option",{value:$,children:ft[$].label},$))}),e.jsx("input",{type:"text",placeholder:"Matched text",value:v.matchText,onChange:$=>dn(v.key,$.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>en(v.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},v.key))}),e.jsx("button",{type:"button",onClick:cn,className:Ge,children:"+ Add Tool Link"})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Component links"}),e.jsxs("p",{className:`text-xs ${o?"text-slate-300":"text-slate-500"}`,children:[`Set the "Further Reading" link shown on each component's overview panel, and override any of its individual guidance links. Each link shows whether it currently points at the `,e.jsx("strong",{children:"Default Toolkit Link"})," (the original NHS Future link), ",e.jsx("strong",{children:"Project Specific Homepage"})," (your organisation's override above), or a ",e.jsx("strong",{children:"Custom"})," URL you've set - click the pencil to change it. Additional links can be hidden from Settings if you only want the essentials."]}),s.map(v=>{var Me,Ue,Ee;const $=Er(v.id),V=[...$.inputs,...$.deliverables],de=V.filter(je=>{var nn,We,on,tn;return(tn=(on=(We=(nn=c.linkOverrides)==null?void 0:nn.links)==null?void 0:We[je.key])==null?void 0:on.url)==null?void 0:tn.trim()}).length,we=!!((Me=c.componentFurtherReading)!=null&&Me[v.id]);return e.jsxs("details",{className:`group overflow-hidden rounded-md border ${o?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between gap-3 p-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] ${o?"bg-slate-800 text-slate-200 hover:bg-slate-700":"bg-slate-50 text-slate-700 hover:bg-blue-50"} [&::-webkit-details-marker]:hidden`,children:[e.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[e.jsx("span",{"aria-hidden":"true",className:`shrink-0 text-lg font-bold leading-none transition-transform group-open:rotate-45 ${o?"text-blue-300":"text-[#005eb8]"}`,children:"+"}),e.jsx("span",{className:"truncate",children:v.label})]}),e.jsxs("span",{className:"flex items-center gap-2",children:[we&&e.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-emerald-500/20 text-emerald-300":"bg-emerald-100 text-emerald-700"}`,children:"Further reading set"}),de>0&&e.jsxs("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-blue-500/20 text-blue-300":"bg-blue-100 text-blue-700"}`,children:[de," override",de!==1?"s":""]})]})]}),e.jsxs("div",{className:`border-t divide-y ${o?"border-slate-700 divide-slate-700":"border-slate-200 divide-slate-100"}`,children:[e.jsxs("div",{className:"p-3 space-y-1.5",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:"Further reading"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:"https://...",value:((Ue=c.componentFurtherReading)==null?void 0:Ue[v.id])??"",onChange:je=>Te(v.id,je.target.value),className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),we&&e.jsx("button",{type:"button",onClick:()=>Te(v.id,""),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Clear"})]})]}),!V.length&&e.jsx("p",{className:`p-3 text-xs ${o?"text-slate-500":"text-slate-400"}`,children:"No default guidance links for this component - add one below."}),["inputs","deliverables"].map(je=>{const nn=$[je]??[];return nn.length?e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:je}),nn.map(We=>{var Fn,_n;const on=(_n=(Fn=c.linkOverrides)==null?void 0:Fn.links)==null?void 0:_n[We.key],tn=is(We,c.linkOverrides),wn=si(on),Mn={default:o?"border-amber-500/40 bg-amber-500/15 text-amber-200":"bg-amber-50 border-amber-200 text-amber-800",custom:o?"border-green-500/40 bg-green-500/15 text-green-200":"bg-green-50 border-green-200 text-green-800",base:o?"border-red-500/30 bg-red-500/10 text-red-200":"bg-red-50 border-red-100 text-red-700"},Gn={default:"Default Toolkit Link",custom:"Custom",base:"Project Specific Homepage"};return e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-700"}`,children:[We.type!=="core"?"(Optional) ":"",We.label]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("a",{href:tn.url,target:"_blank",rel:"noopener noreferrer",title:tn.url,className:`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${Mn[wn]}`,children:Gn[wn]}),e.jsx("button",{type:"button",onClick:()=>w(We),"aria-label":`Edit ${We.label} link`,className:`shrink-0 rounded-md border px-1.5 py-0.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"})]})]},We.key)})]},je):null}),e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:"Custom links"}),(((Ee=c.customComponentLinks)==null?void 0:Ee[v.id])||[]).map(je=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr,auto,auto] gap-2 items-center",children:[e.jsx("input",{type:"text",placeholder:"Link name",value:je.label,onChange:nn=>B(v.id,je.key,"label",nn.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("input",{type:"url",placeholder:"https://...",value:je.url,onChange:nn=>B(v.id,je.key,"url",nn.target.value),className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),e.jsx("button",{type:"button",onClick:()=>O({link:je,componentId:v.id}),"aria-label":`Edit match text for ${je.label||"this link"}`,className:`shrink-0 rounded border px-1.5 py-1.5 text-xs ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-100"}`,children:"✎"}),e.jsx("button",{type:"button",onClick:()=>ie(v.id,je.key),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Remove"})]},je.key)),e.jsx("button",{type:"button",onClick:()=>Ke(v.id),className:Ge,children:"+ Add Link"})]})]})]},v.id)})]})]}):e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:'External links were set up at project start. Turn on "Show external links section" in Settings if you need to come back and edit them.'})]})}),b&&e.jsx(Cr,{link:b,perLink:(Fe=(ve=c.linkOverrides)==null?void 0:ve.links)==null?void 0:Fe[b.key],baseOverrideUrl:(Cn=(un=c.linkOverrides)==null?void 0:un.base)==null?void 0:Cn.url,onSave:v=>{var V;const $={...(V=c.linkOverrides)==null?void 0:V.links};v?$[b.key]=v:delete $[b.key],Ce({...c.linkOverrides,links:$}),w(null)},onClose:()=>w(null),darkMode:o}),R&&e.jsx(jr,{title:R.link.label||"Link",aliases:R.link.matchAliases||[],onSave:v=>{R.componentId?le(R.componentId,R.link.key,v):ze(R.link.key,v),O(null)},onClose:()=>O(null),darkMode:o}),L&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-lg rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-900"}`,children:["Change pathway to ",Da[L],"?"]}),e.jsx("div",{className:`mt-3 space-y-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:L==="pathway-1"?e.jsx("p",{children:"This will regenerate every component's outcomes and actions for Pathway 1. Any items you've added yourself are kept."}):e.jsx("p",{children:"Pathway 2 and Pathway 3 don't have their own outcomes and actions written yet, so this will clear the Pathway 1 stand-in content instead of leaving it in place - components will show an honest empty state until pathway-specific content is added. Any items you've added yourself are kept."})}),e.jsxs("div",{className:"mt-5 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:P,className:Ge,children:"Cancel"}),e.jsx("button",{type:"button",onClick:re,className:"inline-flex items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Confirm change"})]})]})}),e.jsx(vn,{open:I.isOpen,onClose:I.close,title:"Project Profile",darkMode:o,body:e.jsx("p",{children:"This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways it follows, and how it's tracking against its readiness phases. You can export or import just this page's data, and manage the external links shown throughout the tool."})})]})}function Ar({steps:n,onComponentClick:t,onActionView:s,colorAccessibilityMode:a="standard",darkMode:i=!1}){const[l,r]=m.useState({}),o=a==="color-blind-friendly"?ao:Fa;return e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"What To Do Next"}),e.jsx("span",{className:`text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Your current phase"})]}),e.jsx("p",{className:`text-sm mb-4 ${i?"text-slate-300":"text-slate-500"}`,children:"Every component in your current phase that still has pending actions, ranked by timeline risk - overdue first."}),n.length>0?e.jsx("div",{className:"space-y-3",children:n.map(u=>{var c;const h=!!l[u.componentId],d=u.outstandingActions.length;return e.jsxs("div",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("button",{type:"button",onClick:()=>t(u.componentId),className:"flex w-full items-center justify-between gap-3 text-left",children:[e.jsx("span",{className:`text-sm font-semibold hover:underline ${i?"text-slate-100":"text-slate-800"}`,children:u.componentLabel}),e.jsx("span",{title:u.bragReason,className:`text-xs font-semibold rounded px-2.5 py-0.5 ${o[u.bragStatus]}`,children:u.bragStatus})]}),e.jsx("p",{className:`text-sm mt-1 ${i?"text-slate-300":"text-slate-600"}`,children:u.summary}),(c=u.toolkitLinks)!=null&&c.length?e.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:u.toolkitLinks.map(x=>e.jsx("a",{href:x.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-medium text-[#005eb8] underline",children:x.label},`${u.componentId}-${x.url}`))}):null,d>0&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("button",{type:"button",onClick:()=>r(x=>({...x,[u.componentId]:!x[u.componentId]})),className:`text-xs font-semibold underline ${i?"text-slate-300 hover:text-slate-100":"text-slate-600 hover:text-slate-900"}`,children:[h?"Hide":"Show"," outstanding action",d===1?"":"s"," (",d,")"]}),h&&e.jsx("div",{className:`mt-2 overflow-x-auto rounded-md border ${i?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full divide-y text-xs",children:[e.jsx("thead",{className:i?"bg-slate-800":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Lens"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"Status"}),e.jsx("th",{className:`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${i?"text-slate-400":"text-slate-500"}`,children:"View"})]})}),e.jsx("tbody",{className:`divide-y ${i?"divide-slate-700":"divide-slate-100"}`,children:u.outstandingActions.map(x=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-2 py-1.5 font-medium ${i?"text-slate-200":"text-slate-700"}`,children:x.lens}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:x.text}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:x.owner||"Unassigned"}),e.jsx("td",{className:`px-2 py-1.5 ${i?"text-slate-300":"text-slate-600"}`,children:x.status||"-"}),e.jsx("td",{className:"px-2 py-1.5",children:e.jsx("button",{type:"button",onClick:()=>s(u.componentId,x.lens,x.id),className:`font-semibold underline ${i?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:"View"})})]},x.id))})]})})]})]},u.componentId)})}):e.jsx("p",{className:`text-sm ${i?"text-slate-400":"text-slate-500"}`,children:"Nothing pending for your current phase. Continue tracking actions and maintain evidence quality."})]})}function Or({components:n,store:t,getEntry:s,onComponentClick:a,darkMode:i=!1}){const[l,r]=m.useState(null),o=n.reduce((h,d)=>(h[d.phase]=h[d.phase]||[],h[d.phase].push(d),h),{}),u=(h,d)=>{const c=`${h}:${d}`;r(x=>x===c?null:c)};return e.jsxs("details",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} group overflow-hidden rounded-lg border shadow-sm`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-lg font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] [&::-webkit-details-marker]:hidden ${i?"text-slate-100 hover:bg-slate-700":"text-slate-800 hover:bg-slate-50"}`,children:[e.jsx("span",{children:"Programme Change Hierarchy"}),e.jsx("span",{className:"text-2xl font-normal transition-transform group-open:rotate-45",children:"+"})]}),e.jsxs("div",{className:"border-t border-slate-200 p-6 dark:border-slate-700",children:[e.jsxs("p",{className:`mt-1 mb-4 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:["Your programme has ",n.length," components, each viewed through one or more lenses. A component is a change topic you assess and track. A lens is the perspective used to assess it (e.g. leadership, risk, capability). Click a lens to see its actions, or open the full assessment."]}),e.jsx("div",{className:"space-y-5",children:$a.filter(h=>{var d;return(d=o[h])==null?void 0:d.length}).map(h=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:`text-sm font-semibold ${i?"text-slate-100":"text-slate-700"}`,children:["Phase ",h,": ",Qe[h]]}),e.jsx("div",{className:"space-y-2",children:o[h].map(d=>{const c=d.lenses.reduce((b,w)=>{const R=s(d.id,w);return{total:b.total+R.actions.length,completed:b.completed+R.actions.filter(O=>O.status==="Completed").length}},{total:0,completed:0}),x=go(t,d.id,s);return e.jsxs("div",{"data-testid":`cst-component-card-${d.id}`,className:`w-full rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("span",{className:`font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:d.label}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:`text-xs ${i?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",Kt(d.target)]}),e.jsx("button",{type:"button",onClick:()=>a(d.id),className:`text-xs font-semibold underline ${i?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-[#00417a]"}`,children:"Open full assessment"})]})]}),e.jsx("div",{className:"mt-2 flex flex-wrap gap-1.5",children:d.lenses.map(b=>{const w=s(d.id,b),R=l===`${d.id}:${b}`;return e.jsxs("button",{type:"button",onClick:()=>u(d.id,b),"aria-expanded":R,className:`text-xs px-2 py-1 rounded-full border transition-colors ${R?i?"border-blue-400 bg-blue-500/25 text-blue-100":"border-blue-400 bg-blue-100 text-blue-900":w.score>=d.target?i?"border-green-500/40 bg-green-500/15 text-green-200 hover:bg-green-500/25":"bg-green-50 border-green-200 text-green-800 hover:bg-green-100":w.score>0?i?"border-amber-500/40 bg-amber-500/15 text-amber-200 hover:bg-amber-500/25":"bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100":i?"border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700":"bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"}`,children:[b,": ",w.score,"/",d.target]},b)})}),e.jsxs("p",{className:`mt-2 text-xs ${i?"text-slate-300":"text-slate-500"}`,children:["Lens actions: ",c.completed,"/",c.total," complete · Outcomes: ",x.completed,"/",x.total," complete"]}),d.lenses.map(b=>{if(!(l===`${d.id}:${b}`))return null;const R=s(d.id,b);return e.jsx("div",{className:`mt-3 overflow-x-auto rounded-md border ${i?"border-slate-700":"border-slate-200"}`,children:R.actions.length?e.jsxs("table",{className:`min-w-full divide-y ${i?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"}`,children:[e.jsx("thead",{className:i?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"})]})}),e.jsx("tbody",{className:`divide-y ${i?"divide-slate-700":"divide-slate-100"}`,children:R.actions.map(O=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${i?"text-slate-100":"text-slate-800"}`,children:O.text||"Untitled action"}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`inline-flex whitespace-nowrap rounded-full border px-2 py-1 text-xs font-semibold ${An[O.status]}`,children:O.status})}),e.jsx("td",{className:`px-3 py-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:O.owner||"Unassigned"})]},O.id))})]}):e.jsx("p",{className:`p-3 text-sm ${i?"text-slate-300":"text-slate-500"}`,children:"No actions yet for this lens."})},`${b}-table`)})]},d.id)})})]},`phase-group-${h}`))})]})]})}const _r=[{phase:1,label:"Pre-Discovery",programmeStage:"Concept",tagline:"Define the change",color:"bg-blue-50",darkColor:"bg-blue-950/45",textColor:"text-blue-700",darkTextColor:"text-blue-100",borderColor:"border-blue-300",darkBorderColor:"border-blue-700",deliverables:[{text:"Change Vision defined and communicated",componentIds:["vision"]},{text:"Compelling case for change developed",componentIds:["case_for_change"],showExternalGuidance:!1}]},{phase:2,label:"Solution Design",programmeStage:"Definition",tagline:"Prepare the change",color:"bg-violet-50",darkColor:"bg-violet-950/45",textColor:"text-violet-700",darkTextColor:"text-violet-100",borderColor:"border-violet-300",darkBorderColor:"border-violet-700",deliverables:[{text:"Change Impact analysed",componentIds:["change_impact"]},{text:"Change Management inputted to Business Case",componentIds:["case_for_change"],showExternalGuidance:!1},{text:"Engagement and Comms Strategy developed",componentIds:["change_network","stakeholder"]}]},{phase:3,label:"Development",programmeStage:"Design & Develop",tagline:"Plan the change",color:"bg-amber-50",darkColor:"bg-amber-950/45",textColor:"text-amber-700",darkTextColor:"text-amber-100",borderColor:"border-amber-300",darkBorderColor:"border-amber-700",deliverables:[{text:"Engagement and Comms Plan developed",componentIds:["stakeholder"]},{text:"Change Management Plan developed",componentIds:["cm_readiness"]}]},{phase:4,label:"Deployment / Go Live",programmeStage:"Implementation",tagline:"Manage implementation of the change",color:"bg-orange-50",darkColor:"bg-orange-950/45",textColor:"text-orange-700",darkTextColor:"text-orange-100",borderColor:"border-orange-300",darkBorderColor:"border-orange-700",deliverables:[{text:"Change Management Plan executed",componentIds:["cm_readiness"]},{text:"Communications delivered and Stakeholders engaged",componentIds:["stakeholder"]},{text:"Future State Processes validated",componentIds:["process_change"]},{text:"Skills gaps addressed",componentIds:["skills_learning"]},{text:"Future State Processes trialled and in use",componentIds:["process_change"]}]},{phase:5,label:"Post-Deployment",programmeStage:"Transition / Close",tagline:"Reinforce and sustain the change",color:"bg-green-50",darkColor:"bg-green-950/45",textColor:"text-green-700",darkTextColor:"text-green-100",borderColor:"border-green-300",darkBorderColor:"border-green-700",deliverables:[{text:"Change adoption evaluated",componentIds:["change_adoption"]},{text:"Business Change refinements actioned",componentIds:["reinforcement"]},{text:"Change sustained",componentIds:["transfer_bau"]}]}];function ii({currentPhase:n,onComponentClick:t,headingsOnly:s=!1,guidanceTarget:a="Default",linkOverrides:i,showAdditionalGuidanceLinks:l=!0,darkMode:r=!1}){const[o,u]=m.useState(n);return m.useEffect(()=>{u(n)},[n]),e.jsxs("section",{className:`rounded-lg border shadow-sm ${r?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:`border-b px-5 py-4 ${r?"border-slate-700":"border-slate-200"}`,children:[e.jsx("h3",{className:`text-lg font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:"The Five Change Phases"}),e.jsx("p",{className:`mt-1 text-sm ${r?"text-slate-300":"text-slate-500"}`,children:"Select a phase to see the key deliverables expected at that stage."})]}),e.jsx("div",{className:"space-y-3 p-4",children:_r.map(h=>s?e.jsxs("div",{className:`rounded-md border px-4 py-3 ${r?`${h.darkBorderColor} ${h.darkColor}`:`${h.borderColor} ${h.color}`}`,children:[e.jsxs("span",{className:`block text-sm font-semibold ${r?h.darkTextColor:h.textColor}`,children:["Phase ",h.phase,": ",h.label]}),e.jsxs("span",{className:`mt-0.5 block text-xs ${r?"text-slate-300":"text-slate-500"}`,children:[h.tagline," · ",h.programmeStage]})]},h.phase):e.jsxs("details",{open:o===h.phase,onToggle:d=>{d.currentTarget.open?u(h.phase):o===h.phase&&u(0)},className:`group overflow-hidden rounded-md border ${r?h.darkBorderColor:h.borderColor}`,children:[e.jsxs("summary",{className:`flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] [&::-webkit-details-marker]:hidden ${r?`${h.darkColor} ${h.darkTextColor} hover:brightness-110`:`${h.color} ${h.textColor} hover:brightness-95`}`,children:[e.jsxs("span",{children:[e.jsxs("span",{className:"block text-sm font-semibold",children:["Phase ",h.phase,": ",h.label]}),e.jsxs("span",{className:`mt-0.5 block text-xs ${r?"text-slate-300":"text-slate-500"}`,children:[h.tagline," · ",h.programmeStage]})]}),e.jsx("span",{className:"text-xl font-bold transition-transform group-open:rotate-45","aria-hidden":"true",children:"+"})]}),e.jsx("div",{className:`border-t p-4 ${r?`${h.darkBorderColor} bg-slate-900`:`${h.borderColor} bg-white`}`,children:e.jsx("ul",{className:"space-y-3",children:h.deliverables.map(d=>{const c=d.componentIds.map(R=>Ut(R)).filter(R=>!!R),x=c.flatMap(R=>vt(a,R.id,"deliverables",i,l).slice(0,1)),b=c.length===1&&x.length===1,w=d.showExternalGuidance!==!1&&b&&x[0].label.trim().toLowerCase()!==c[0].label.trim().toLowerCase();return e.jsxs("li",{className:"flex items-start gap-2 text-sm",children:[e.jsx("span",{className:`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${r?`${h.darkColor} ${h.darkTextColor}`:`${h.color} ${h.textColor}`}`,children:"✓"}),e.jsxs("span",{className:"min-w-0 flex-1",children:[e.jsx("span",{className:r?"text-slate-200":"text-slate-700",children:d.text}),b?e.jsxs("span",{className:"ml-2 inline-flex flex-wrap items-center gap-2 text-xs",children:[e.jsx("button",{type:"button",onClick:()=>t(c[0].id),className:"font-semibold text-[#005eb8] underline underline-offset-2 hover:text-[#003087]",children:c[0].label}),w?e.jsx("a",{href:x[0].url,target:"_blank",rel:"noopener noreferrer",className:"font-medium text-slate-500 underline underline-offset-2 hover:text-[#005eb8]",children:"External guidance ↗"}):null]}):null,b?null:e.jsxs("span",{className:"mt-1 flex flex-wrap gap-x-3 gap-y-1",children:[c.map(R=>e.jsx("span",{className:"inline-flex flex-wrap items-center gap-2 text-xs",children:e.jsx("button",{type:"button",onClick:()=>t(R.id),className:"font-semibold text-[#005eb8] underline underline-offset-2 hover:text-[#003087]",children:R.label})},R.id)),x.map(R=>e.jsx("a",{href:R.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-medium text-slate-500 underline underline-offset-2 hover:text-[#005eb8]",children:"External guidance ↗"},R.url))]})]})]},d.text)})})})]},h.phase))})]})}function Rr({store:n,components:t,metrics:s,getEntry:a,onComponentClick:i,onActionView:l,guidanceTarget:r="Default",linkOverrides:o,showAdditionalGuidanceLinks:u=!0,phaseFocusMode:h="auto",manualPhaseFocus:d,colorAccessibilityMode:c="standard",darkMode:x=!1}){const b=pn("daily-checkin"),w=h==="manual"&&d?d:s.currentPhase,R=m.useMemo(()=>Ua(t,a,w),[t,a,w]);return e.jsxs("div",{className:"max-w-5xl mx-auto pb-20",children:[e.jsxs("div",{className:"mb-6 flex items-center gap-2",children:[e.jsx("h2",{className:`text-3xl font-bold ${x?"text-slate-100":"text-slate-800"}`,children:"Daily Check-in"}),e.jsx(yn,{onClick:b.reopen,darkMode:x})]}),e.jsx("p",{className:`mb-6 -mt-4 text-sm ${x?"text-slate-300":"text-slate-500"}`,children:"Your daily triage: what's outstanding right now, and where it sits in the wider programme."}),e.jsxs("div",{className:"space-y-8",children:[e.jsx(Ar,{steps:R,onComponentClick:i,onActionView:l,colorAccessibilityMode:c,darkMode:x}),e.jsx(ii,{currentPhase:w,onComponentClick:i,guidanceTarget:r,linkOverrides:o,showAdditionalGuidanceLinks:u,darkMode:x}),e.jsx(Or,{components:t,store:n,getEntry:a,onComponentClick:i,darkMode:x})]}),e.jsx(vn,{open:b.isOpen,onClose:b.close,title:"Daily Check-in",darkMode:x,body:e.jsx("p",{children:'This is your daily triage page - "What To Do Next" lists every component in your current phase with outstanding actions, ranked by timeline risk, and the Programme Change Hierarchy below gives you the full picture across every phase.'})})]})}function ga(n){if(!n)return[];const t=n.split(/\s+/).filter(Boolean);if(t.length<2)return t;const s=t.slice(0,Math.ceil(t.length/2)).join(" "),a=t.slice(Math.ceil(t.length/2)).join(" ");return[s,a].filter(Boolean)}function oi(n){return n.getContext?n:n.canvas}function ot(){return typeof document>"u"?!1:document.documentElement.dataset.nhsThemeMode==="dark"}function ls(n,t,s,a={}){var o,u;const i=oi(t),l=(u=(o=ln).getChart)==null?void 0:u.call(o,i);l&&l.destroy();const r={type:n,data:s,options:a};return new ln(i,r)}const pa=new WeakMap,ha=new WeakMap;function fa(n,t,s){return(n.$pointLabelHitboxes||[]).find(a=>Math.abs(t-a.x)<=a.halfWidth&&Math.abs(s-a.y)<=a.halfHeight)}function Pr(n,t,s){const a=pa.get(n);a&&n.removeEventListener("click",a);const i=ha.get(n);i&&n.removeEventListener("mousemove",i);const l=o=>{const u=n.getBoundingClientRect(),h=fa(t,o.clientX-u.left,o.clientY-u.top);h&&s(h.index)},r=o=>{const u=n.getBoundingClientRect(),h=fa(t,o.clientX-u.left,o.clientY-u.top);n.style.cursor=h?"pointer":""};n.addEventListener("click",l),n.addEventListener("mousemove",r),pa.set(n,l),ha.set(n,r)}function Kn(n,t,s={},a){var w,R,O,f,I,H;ln.defaults.font.family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",ln.defaults.font.size=12,ln.defaults.elements.line.tension=.2,ln.defaults.elements.point.radius=4,ln.defaults.elements.point.hoverRadius=6;const i=ot(),c={maintainAspectRatio:!0,responsive:!0,layout:{padding:56},plugins:{legend:{display:!0,position:"chartArea",align:"start",labels:{padding:5,boxWidth:30,font:{size:13}}},tooltip:{enabled:!0,backgroundColor:i?"rgba(15,23,42,0.98)":"rgba(11,18,32,0.95)",titleColor:"#fff",bodyColor:"#fff"},centerText:""},elements:{line:{borderWidth:3,tension:.2,borderColor:i?"#63b3ff":"#005EB8",backgroundColor:i?"rgba(99,179,255,0.12)":"rgba(0,94,184,0.06)"},point:{radius:4,hoverRadius:6,backgroundColor:i?"rgba(144,205,244,0.95)":"rgba(11,122,184,0.95)"}},scales:{r:{beginAtZero:!0,grid:{color:i?"rgba(226,232,240,0.12)":"rgba(11,18,32,0.06)",lineWidth:1},angleLines:{color:i?"rgba(226,232,240,0.18)":"rgba(11,18,32,0.10)",lineWidth:1},ticks:{display:!1},pointLabels:{display:!1,color:i?"#e2e8f0":"#0b1220",font:{size:12,family:ln.defaults.font.family},padding:10,callback:C=>ga(C).join(`
`)}}}},x={...c,...s,layout:{padding:56,...s.layout||{}},scales:{...c.scales||{},...s.scales||{},r:{...((w=c.scales)==null?void 0:w.r)||{},...((R=s.scales)==null?void 0:R.r)||{},pointLabels:{...((f=(O=c.scales)==null?void 0:O.r)==null?void 0:f.pointLabels)||{},...((H=(I=s.scales)==null?void 0:I.r)==null?void 0:H.pointLabels)||{},display:!1,callback:C=>ga(C).join(`
`)}}}},b=ls("radar",n,t,x);if(a){const C=oi(n);Pr(C,b,a)}return b}function ri(n,t,s={}){const a=ot(),i=a?"#e2e8f0":"#0b1220",l=a?"rgba(226,232,240,0.08)":"rgba(11,18,32,0.04)",r=a?"rgba(226,232,240,0.10)":"rgba(11,18,32,0.06)",o=a?"#63b3ff":"#005EB8";return ls("line",n,t,{...{elements:{line:{borderWidth:2,tension:.2,borderColor:o,backgroundColor:a?"rgba(99,179,255,0.14)":"rgba(0,94,184,0.06)"},point:{radius:3,hoverRadius:5,backgroundColor:o}},scales:{x:{display:!0,grid:{color:l},ticks:{color:i,font:{size:11}}},y:{beginAtZero:!0,grid:{color:r},ticks:{color:i,font:{size:11}}}}},...s})}function Dr(n,t,s={}){const a=ot(),i=a?"#e2e8f0":"#0b1220";return ls("bar",n,t,{...{scales:{x:{display:!0,grid:{color:a?"rgba(226,232,240,0.08)":"rgba(11,18,32,0.04)"},ticks:{color:i,font:{size:11}}},y:{beginAtZero:!0,min:0,max:5,grid:{color:a?"rgba(226,232,240,0.10)":"rgba(11,18,32,0.06)"},ticks:{color:i,font:{size:11},stepSize:1}}}},...s})}function $r(n){return typeof n.toBase64Image=="function"?n.toBase64Image():""}const Tr={id:"radarCenterText",beforeDraw:n=>{var t;try{const s=n.ctx,i=(t=(n.options||{}).plugins)==null?void 0:t.centerText,l=(i==null?void 0:i.text)||i||"";if(!l)return;const r=String(n.config.type||"");if(r!=="radar"&&r!=="doughnut")return;s.save(),s.textAlign="center",s.textBaseline="middle";const o=n.width/2,u=n.height/2;if(r==="doughnut")s.font=(i==null?void 0:i.font)||"bold 20px Inter",s.fillStyle=(i==null?void 0:i.color)||"#005EB8",s.fillText(String(l),o,u-10),i!=null&&i.subText&&(s.font=(i==null?void 0:i.subFont)||"12px Inter",s.fillStyle=(i==null?void 0:i.subColor)||"#6b7280",s.fillText(String(i.subText),o,u+10));else{const h=Math.max(12,Math.round(Math.min(n.width,n.height)*.065)),d=`${h}px ${ln.defaults.font.family}`;s.font=d,s.fillStyle=(i==null?void 0:i.color)||(ot()?"#e2e8f0":"#0b1220");const c=String(l).split(`
`),x=h*1.05,b=(c.length-1)*-x/2;c.forEach((w,R)=>{s.fillText(w,o,u+b+R*x)})}s.restore()}catch{}}},Lr={id:"radarPointLabelText",afterDraw:n=>{var t,s,a,i;try{const l=(t=n.scales)==null?void 0:t.r,r=(s=l==null?void 0:l.options)==null?void 0:s.pointLabels;if(!l||!r||n.config.type!=="radar")return;const o=n.ctx,u=Number(((a=r.font)==null?void 0:a.size)||ln.defaults.font.size||12),h=((i=r.font)==null?void 0:i.family)||ln.defaults.font.family||"Inter, sans-serif",d=r.color||(ot()?"#e2e8f0":"#0b1220"),c=Number(r.padding??14),x=Array.isArray(l._pointLabels)?l._pointLabels:[],b=[];o.save(),o.textAlign="center",o.textBaseline="middle",o.fillStyle=d,o.font=`${u}px ${h}`,x.forEach((w,R)=>{const f=String(w??"").split(`
`).filter(Boolean);if(!f.length)return;const I=l.getPointPosition(R,l.drawingArea+c,0),H=u*1.15,C=(f.length-1)*-H/2,j=Math.max(u,f.length*H),y=u*6,Z=y/2+4,L=n.width-y/2-4,Y=j/2+4,te=n.height-j/2-4,re=Math.min(Math.max(I.x,Z),L),P=Math.min(Math.max(I.y,Y),te);f.forEach((G,Ne)=>{const Ce=P+C+Ne*H;o.fillText(G,re,Ce)}),b.push({index:R,x:re,y:P,halfWidth:y/2,halfHeight:j/2})}),n.$pointLabelHitboxes=b,o.restore()}catch{}}};ln.register(Tr,Lr);typeof window<"u"&&(window.NHSDigitalAdoption=window.NHSDigitalAdoption||{},window.NHSDigitalAdoption.Charts={createRadarChart:Kn,createLineChart:ri,toBase64Image:$r});const ht=["Pathways","Phases","Components","Vision","Lens","Strat Direct","Readiness","Actions","Overview"],Br={"pathway-1":"For teams starting from scratch. Nothing has been built yet, so every component starts at Not Started and the guidance walks you through building the foundations - defining a vision, securing sponsorship, and putting the basics of a change plan in place - one readiness level at a time.","pathway-2":"For teams who've already run a successful pilot and now need to scale it up. The guidance and actions are framed around taking what worked in the pilot - the vision, the sponsorship, the early lessons - and rolling it out consistently to new sites and teams, rather than starting from nothing.","pathway-3":"For teams who've already gone live but adoption is patchy or inconsistent across the organisation. The guidance and actions focus on diagnosing where and why adoption is lagging, then delivering targeted fixes to bring lagging areas up to the same standard as the rest."},bn=Nt(1)[0]||zn[0],Vn=bn.lenses,li=Nt(2),Mr=li.map(n=>Yn(n.id,2,n.target)),Gr=[1,0,1,1],Fr=[4,3,5,4];function Ur(n){const t=n.map(s=>On(s).color);return{labels:li.map(s=>s.label),datasets:[{label:"Notional current",data:n,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.12)",borderWidth:2,pointRadius:4,pointHoverRadius:6,pointBackgroundColor:t,pointBorderColor:t},{label:"Phase 2 expected",data:Mr,borderColor:"#94a3b8",backgroundColor:"rgba(148, 163, 184, 0.06)",borderWidth:2,borderDash:[5,5],pointRadius:2,pointHoverRadius:4}]}}function ba({scores:n,darkMode:t}){const s=m.useRef(null);return m.useEffect(()=>{s.current&&Kn(s.current,Ur(n),{maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"chartArea",align:"start",labels:{padding:5,boxWidth:30,font:{size:13}}},tooltip:{callbacks:{label:a=>{const i=Number(a.parsed.r??0);return`${a.dataset.label}: ${On(i).label}`}}}},scales:{r:{min:0,max:5,ticks:{display:!1},pointLabels:{display:!0,font:{size:9},padding:18}}}})},[t]),e.jsx("div",{children:e.jsx("div",{style:{height:400},children:e.jsx("canvas",{ref:s,className:"block h-full w-full"})})})}function Wr({activeStep:n,darkMode:t}){const s=["Pathway","Phases","Components",bn.label,"Lens",Vn[0],"Readiness","Actions","Overview"];return e.jsx("div",{className:"flex flex-wrap items-center gap-1.5 text-xs",children:s.map((a,i)=>e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:`rounded-full px-2.5 py-1 font-semibold transition-colors ${i===n?"bg-[#005eb8] text-white":i<n?t?"bg-slate-700 text-slate-200":"bg-blue-50 text-blue-800":t?"bg-slate-900 text-slate-600":"bg-slate-100 text-slate-400"}`,children:a}),i<s.length-1?e.jsx("span",{"aria-hidden":"true",className:t?"text-slate-600":"text-slate-300",children:"→"}):null]},a))})}function Hr({darkMode:n}){const t=[1,2,3,4,5],s=[{border:"border-blue-300",heading:"bg-blue-50 text-blue-700",body:"bg-blue-50/40"},{border:"border-violet-300",heading:"bg-violet-50 text-violet-700",body:"bg-violet-50/40"},{border:"border-amber-300",heading:"bg-amber-50 text-amber-700",body:"bg-amber-50/40"},{border:"border-orange-300",heading:"bg-orange-50 text-orange-700",body:"bg-orange-50/40"},{border:"border-green-300",heading:"bg-green-50 text-green-700",body:"bg-green-50/40"}];return e.jsxs("div",{className:`overflow-hidden rounded-md border ${n?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("div",{className:`grid grid-cols-[minmax(150px,0.7fr),minmax(0,2fr)] text-xs font-bold uppercase tracking-wider ${n?"bg-slate-900 text-slate-300":"bg-slate-100 text-slate-600"}`,children:[e.jsx("div",{className:"border-r px-4 py-3",children:"Phase"}),e.jsx("div",{className:"px-4 py-3",children:"Components"})]}),t.map((a,i)=>{const l=Nt(a),r=s[i];return e.jsxs("div",{className:`grid grid-cols-[minmax(150px,0.7fr),minmax(0,2fr)] border-t ${n?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("div",{className:`border-r px-4 py-4 text-sm font-semibold ${n?"bg-slate-900 text-slate-100":`${r.heading} ${r.border}`}`,children:["Phase ",a,": ",Qe[a]||""]}),e.jsx("div",{className:`flex flex-wrap gap-2 px-4 py-4 ${n?"bg-slate-800":r.body}`,children:l.map(o=>e.jsx("span",{className:`rounded-full px-3 py-1 text-xs font-semibold ${n?"bg-slate-900 text-slate-200":"bg-white text-slate-700 shadow-sm"}`,children:o.label},o.id))})]},a)})]})}const Vr=["Assign owner","Set due date","Mark complete"];function qr({darkMode:n}){const t=`rounded-lg border border-dashed p-4 ${n?"border-slate-700":"border-slate-300"}`,s=`mb-3 text-center text-xs font-bold uppercase tracking-wider ${n?"text-slate-400":"text-slate-500"}`,a="flex flex-wrap items-center justify-center gap-2",i=e.jsx("div",{className:"flex justify-center py-1","aria-hidden":"true",children:e.jsx("span",{className:n?"text-slate-600":"text-slate-300",children:"↓"})}),l=e.jsx("div",{className:"flex justify-center py-1","aria-hidden":"true",children:e.jsx("span",{className:n?"text-slate-600":"text-slate-300",children:"↕"})}),r=`rounded-full border px-3 py-1 text-xs font-semibold ${n?"border-violet-700 bg-violet-950/40 text-violet-100":"border-violet-200 bg-violet-50 text-violet-700"}`,o=`rounded-full border px-3 py-1 text-xs font-semibold ${n?"border-blue-700 bg-blue-950/40 text-blue-100":"border-blue-200 bg-blue-50 text-blue-700"}`,u=`rounded-full border px-3 py-1 text-xs font-semibold ${n?"border-orange-700 bg-orange-950/40 text-orange-100":"border-orange-200 bg-orange-50 text-orange-700"}`,h=`rounded-full border px-3 py-1 text-xs font-semibold ${n?"border-rose-700 bg-rose-950/40 text-rose-100":"border-rose-200 bg-rose-50 text-rose-700"}`,d=`rounded-full border px-3 py-1 text-xs font-semibold ${n?"border-green-700 bg-green-950/40 text-green-100":"border-green-200 bg-green-50 text-green-700"}`;return e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:t,children:[e.jsx("p",{className:s,children:"Pathways"}),e.jsx("div",{className:a,children:xt.map(c=>e.jsx("span",{className:r,children:c.simplifiedLabel},c.value))})]}),i,e.jsxs("div",{className:t,children:[e.jsx("p",{className:s,children:"Phases"}),e.jsx("div",{className:a,children:[1,2,3,4,5].map(c=>e.jsx("span",{className:o,children:Qe[c]},c))})]}),i,e.jsxs("div",{className:t,children:[e.jsx("p",{className:s,children:"Components"}),e.jsx("div",{className:a,children:zn.map(c=>e.jsx("span",{className:u,children:c.label},c.id))})]}),l,e.jsxs("div",{className:t,children:[e.jsx("p",{className:s,children:"Lenses"}),e.jsx("div",{className:a,children:it.map(c=>e.jsx("span",{className:h,children:c},c))})]}),i,e.jsxs("div",{className:t,children:[e.jsx("p",{className:s,children:"Readiness score"}),e.jsx("div",{className:"flex overflow-hidden rounded-md",children:Bn.map(c=>e.jsx("div",{className:"flex-1 py-2 text-center",style:{backgroundColor:c.color},children:e.jsx("span",{className:`text-[10px] font-semibold ${c.score===2?"text-slate-900":"text-white"}`,children:c.label})},c.score))})]}),i,e.jsxs("div",{className:t,children:[e.jsx("p",{className:s,children:"Actions"}),e.jsx("div",{className:a,children:Vr.map(c=>e.jsx("span",{className:d,children:c},c))})]})]})}function Yr({children:n,darkMode:t}){return e.jsx("div",{className:`w-full rounded-xl border shadow-sm ${t?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:e.jsx("div",{className:"p-6 sm:p-10",children:n})})}const Kr=["Alex Morgan","Sam Patel"],zr=[{id:"notional-1",text:`Agree the ${Vn[0]} approach with the SRO`,status:"Planned",owner:""},{id:"notional-2",text:"Document the agreed approach for the team",status:"Planned",owner:""},{id:"notional-3",text:"Share the approach with key stakeholders",status:"Planned",owner:""}];function Jr({darkMode:n=!1,onGetStarted:t,onComponentClick:s}){var C;const[a,i]=m.useState("pathway-1"),[l,r]=m.useState(0),[o,u]=m.useState(zr),[h,d]=m.useState(null),[c,x]=m.useState([]),[b,w]=m.useState(!1),R=(j,y)=>{u(Z=>{const L=Z.map(te=>te.id===j?{...te,...y}:te);return L.every(te=>te.status==="Completed"&&te.owner.trim()!=="")&&!b&&(w(!0),x(te=>[...te,{id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,message:`${bn.label} · ${Vn[0]} moved to the next readiness level!`}])),L})},O=l===ht.length-1,f=n?"text-slate-300":"text-slate-700",I=()=>r(j=>Math.min(ht.length-1,j+1)),H=()=>r(j=>Math.max(0,j-1));return e.jsxs("div",{className:"w-full space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${n?"text-slate-100":"text-slate-800"}`,children:"Engine Explained"}),e.jsx("p",{className:`mt-2 max-w-3xl text-sm ${n?"text-slate-300":"text-slate-600"}`,children:"A quick worked example showing how everything fits together, step by step."})]}),l>0?e.jsx(Wr,{activeStep:l,darkMode:n}):null,e.jsxs(Yr,{darkMode:n,children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${n?"text-blue-300":"text-blue-700"}`,children:["Step ",l+1," of ",ht.length," · ",ht[l]]}),l===0?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:"Every programme starts with a pathway"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"A pathway describes the current status of your project and will determine the change journey required for successful adoption."}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"The Pathway will tailor the guidance, actions and resources you will see everywhere else in the tool."}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"In this example walkthrough of the Adoption Engine we'll use pathway 1 - Starting for the First time. You will be able to select the correct pathway when you set up your project later on."}),e.jsx("div",{className:"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3",children:xt.map(j=>{const y=j.value===a;return e.jsx("button",{type:"button",onClick:()=>i(j.value),"aria-pressed":y,className:`rounded-lg border p-4 text-left transition-colors ${y?"border-[#005eb8] bg-blue-50 ring-2 ring-[#005eb8]":n?"border-slate-600 bg-slate-900 hover:bg-slate-700":"border-slate-200 bg-white hover:bg-slate-50"}`,children:e.jsx("p",{className:`text-sm font-semibold ${y?"text-[#005eb8]":n?"text-slate-100":"text-slate-900"}`,children:j.simplifiedLabel})},j.value)})}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 text-sm ${n?"border-blue-500/30 bg-blue-500/10 text-blue-100":"border-blue-200 bg-blue-50 text-blue-900"}`,children:[e.jsx("p",{className:"font-semibold",children:(C=xt.find(j=>j.value===a))==null?void 0:C.simplifiedLabel}),e.jsx("p",{className:"mt-1",children:Br[a]})]})]}):null,l===1?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:"Each pathway is broken into the 5 change phases"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"Every Pathway runs through 5 phases which are aligned to a project lifecycle. It starts from the earliest thinking about a change through to it being fully embedded as business as usual."}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"See the 5 Change phases below."}),e.jsx("div",{className:"mt-6",children:e.jsx(ii,{currentPhase:bn.phase,onComponentClick:s,headingsOnly:!0,darkMode:n})}),e.jsx("p",{className:`mt-4 text-sm ${f}`,children:"At each phase there are 'Change Components' that need to be focused on at that particular phase of a project."})]}):null,l===2?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:"Change components"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"Change Components are the focused topics and change activities that are relevant to each phase."}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"The table below shows which components are included in each phase (these will be clickable when using the adoption engine.)"}),e.jsx("div",{className:"mt-6",children:e.jsx(Hr,{darkMode:n})}),e.jsxs("p",{className:`mt-4 text-sm ${f}`,children:["To continue with the example lets zoom into one of the specific Change Component. Phase ",bn.phase,": ",bn.label,"."]})]}):null,l===3?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:"Vision is an example of a Change Component"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"The Vision sits as a Change Component in Phase 1 of a project because it needs to be developed right at the start."}),e.jsxs("div",{className:`mt-6 rounded-lg border p-5 ${n?"border-slate-700 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsx("p",{className:`text-lg font-semibold ${n?"text-slate-100":"text-slate-900"}`,children:bn.label}),e.jsx("p",{className:`mt-2 text-sm ${f}`,children:Wa(bn.id)})]}),e.jsx("p",{className:`mt-4 text-sm ${f}`,children:"A Vision can be looked at through particular 'lenses' - Let's see what that means."})]}):null,l===4?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:"A Lens is a different perspective of the same Change Component"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"Each Change Component can be looked at through different lenses that show different perspectives. Here are all of the lenses used across the Adoption Engine: not all of them will relate to every Change Component."}),e.jsx("div",{className:"mt-6 grid grid-cols-1 gap-3",children:it.map(j=>e.jsxs("div",{className:`rounded-lg border p-5 ${n?"border-slate-700 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsx("p",{className:`text-lg font-semibold ${n?"text-slate-100":"text-slate-900"}`,children:j}),e.jsx("p",{className:`mt-2 text-sm ${f}`,children:qt(j)})]},j))}),e.jsx("p",{className:`mt-4 text-sm ${f}`,children:"Let's follow one lens through in detail."})]}):null,l===5?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:"An example lens for our example change component"}),e.jsxs("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:["The ",bn.label,", can be seen through 2 difference lenses."]}),e.jsxs("ol",{className:`mt-3 max-w-2xl text-sm ${f}`,children:[e.jsxs("li",{children:["1. ",Vn[0]," lens"]}),e.jsxs("li",{children:["2. ",Vn[1]," lens"]})]}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"Both lenses, give a different perspective on the same change component. We will follow the Strategic Direction and Leadership lens through to a readiness score."}),Vn.map((j,y)=>e.jsxs("div",{className:`mt-6 rounded-lg border p-5 ${n?"border-[#005eb8] bg-slate-900":y===0?"border-[#005eb8] bg-blue-50":"border-slate-200 bg-white"}`,children:[e.jsxs("p",{className:`text-lg font-semibold ${n?"text-slate-100":"text-[#005eb8]"}`,children:[bn.label," · ",j]}),e.jsx("p",{className:`mt-2 text-sm ${n?"text-slate-300":"text-blue-900"}`,children:qt(j)})]})),e.jsx("p",{className:`mt-4 text-sm ${f}`,children:"Now we need to look at scoring each Change Component in Terms of Readiness for Change through each of the relevant lenses."})]}):null,l===6?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:"Readiness is scored on a scale from 'Not Started', to 'Thriving' for every lens"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"Each lens for each Change Component will need its own readiness status, because a Change Component could be strong through one lens and weak in another. Here is what each level means and what that will look like on the readiness radar you will see elsewhere in the tool:"}),e.jsxs("div",{className:"mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3",children:[e.jsx("div",{className:"grid grid-cols-1 gap-2",children:Bn.map(j=>{const[,y]=(yt[j.score]||"").split(/:\s(.+)/);return e.jsxs("div",{className:`rounded-md border p-2.5 ${n?"border-slate-700":""}`,style:{borderLeftWidth:"4px",borderLeftColor:j.color},children:[e.jsx("p",{className:`text-xs font-bold ${n?"text-slate-100":"text-slate-800"}`,children:j.label}),e.jsx("p",{className:`mt-0.5 text-xs ${n?"text-slate-300":"text-slate-600"}`,children:y})]},j.score)})}),e.jsxs("div",{className:`rounded-lg border p-4 ${n?"border-red-500/30 bg-red-500/5":"border-red-200 bg-red-50"}`,children:[e.jsx("p",{className:`text-sm font-bold ${n?"text-red-200":"text-red-800"}`,children:"At risk example"}),e.jsx("p",{className:`mt-1 text-xs ${n?"text-slate-300":"text-slate-600"}`,children:"Notional scores trailing behind where Phase 2 expects these components to be."}),e.jsx("div",{className:"mt-3",children:e.jsx(ba,{scores:Gr,darkMode:n})})]}),e.jsxs("div",{className:`rounded-lg border p-4 ${n?"border-emerald-500/30 bg-emerald-500/5":"border-emerald-200 bg-emerald-50"}`,children:[e.jsx("p",{className:`text-sm font-bold ${n?"text-emerald-200":"text-emerald-800"}`,children:"Excelling example"}),e.jsx("p",{className:`mt-1 text-xs ${n?"text-slate-300":"text-slate-600"}`,children:"Notional scores ahead of where Phase 2 expects these components to be."}),e.jsx("div",{className:"mt-3",children:e.jsx(ba,{scores:Fr,darkMode:n})})]})]})]}):null,l===7?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:"Actions"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"To improve readiness for each component through each lens there are a set of suggested actions to be completed. These Actions can be edited or removed or you can add your own actions."}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"Actions can be assigned to team members and have completion dates assigned if required. Once the Actions at each readiness level is Completed or Cancelled, that lens automatically moves up to the next readiness level."}),e.jsx("p",{className:`mt-4 text-sm font-semibold ${f}`,children:"Try assigning these actions and then marking them as complete."}),e.jsx("div",{className:`mt-3 overflow-x-auto rounded-md border ${n?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200",children:[e.jsx("thead",{className:n?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider ${n?"text-slate-400":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider ${n?"text-slate-400":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider ${n?"text-slate-400":"text-slate-500"}`,children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:o.map(j=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 align-top text-sm ${f}`,children:j.text}),e.jsx("td",{className:"px-3 py-2 align-top",children:h===j.id?e.jsxs("select",{autoFocus:!0,"aria-label":`Owner for ${j.text}`,value:j.owner,onChange:y=>{R(j.id,{owner:y.target.value}),d(null)},onBlur:()=>d(null),className:"rounded-md border border-slate-300 px-2 py-1 text-xs font-semibold",children:[e.jsx("option",{value:"",children:"Unassigned"}),Kr.map(y=>e.jsx("option",{value:y,children:y},y))]}):e.jsx("button",{type:"button",onClick:()=>d(j.id),"aria-label":`Change owner for ${j.text}`,className:"rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b]",children:e.jsx(za,{name:j.owner,darkMode:n})})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("select",{"aria-label":`Status for ${j.text}`,value:j.status,onChange:y=>R(j.id,{status:y.target.value}),className:`rounded-md border px-2 py-1 text-xs font-semibold ${An[j.status]}`,children:es.map(y=>e.jsx("option",{value:y,children:y},y))})})]},j.id))})]})}),e.jsx("p",{className:`mt-6 text-sm font-semibold ${n?"text-slate-100":"text-slate-900"}`,children:"That's Adoption Engine explained: Pathway → Phase → Component → Lens → Readiness → Actions. Let's see the whole picture before you set up your real project."})]}):null,l===8?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:`mt-1 text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:"The whole engine, one page"}),e.jsx("p",{className:`mt-3 max-w-2xl text-sm ${f}`,children:"Every pathway, phase, component, lens and readiness level really used in this tool, laid out top to bottom. Components and lenses connect both ways, since every component is viewed through several lenses."}),e.jsx("div",{className:"mt-6",children:e.jsx(qr,{darkMode:n})})]}):null,e.jsxs("div",{className:"mt-8 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:H,disabled:l===0,className:`rounded-md border px-4 py-2 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${n?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Back"}),O?e.jsx("button",{type:"button",onClick:t,disabled:!b,title:b?void 0:"Mark every notional action Completed with an owner assigned to continue",className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#005eb8]",children:"Get started"}):e.jsx("button",{type:"button",onClick:I,disabled:l===7&&!b,title:l===7&&!b?"Mark every notional action Completed with an owner assigned to continue":void 0,className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#005eb8]",children:"Next"})]})]}),c.length>0?e.jsx(Ka,{message:c[0].message,onDismiss:()=>x(j=>j.slice(1)),celebrate:!0},c[0].id):null]})}const Xr=`Pathway 1 - We are starting $projectName for the first time
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
adoption.`,Rt={"Pathway 1 - We are starting product for the first time":"pathway-1","Pathway 2 - We have piloted product and need to scale up":"pathway-2","Pathway 3 - product is live but adoption is patchy":"pathway-3","Pathway 1 - Pilot":"pathway-1","Pathway 2 - Scale up":"pathway-2","Pathway 3 - Reassess":"pathway-3"},Qr={vision:"Vision",case_for_change:"Case for Change",sponsorship:"Senior Sponsorship and Governance",change_network:"Change Network",benefits:"Benefits and WIIFM",stakeholder:"Stakeholder Engagement and Communication",process_change:"Process Change and Ways of Working",change_impact:"Change Impact and Risk",risk_management:"Change Impact and Risk",skills_learning:"Skills, Learning, Capability and Confidence",capability:"Skills, Learning, Capability and Confidence",change_adoption:"Change Adoption",transfer_bau:"Transfer to BAU",reinforcement:"Reinforcement",resistance:"Resistance",cm_readiness:"Readiness and Planning",org_maturity:"Organisational Change Management Maturity"};function Zr(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function Pt(n){return n.replace(/\bAVT\b/g,"${productName}")}function el(n){const t=n.split(/\r?\n/).map(i=>i.trim()),s={};let a=0;for(;a<t.length;){const i=t[a],l=Rt[i];if(!l){a+=1;continue}for(a+=1;a<t.length&&!t[a];)a+=1;if(a>=t.length)break;const r=t[a];for(a+=1;a<t.length&&(!t[a]||t[a]==="Are you on track?");)a+=1;let o="";if(a<t.length&&t[a].startsWith("Descriptor:"))for(o=Pt(t[a].replace("Descriptor:","").trim()),a+=1;a<t.length&&t[a]&&!t[a].startsWith("☐")&&!t[a].startsWith("ARE YOU ON TRACK?")&&!Rt[t[a]];)o=Pt(`${o} ${t[a]}`.trim()),a+=1;const u=[];for(;a<t.length&&t[a].startsWith("☐");){const h=Pt(t[a].replace(/^☐\s*/,"").trim()),d=`${l}:${Zr(r)}:${u.length+1}`;u.push({key:d,text:h}),a+=1}for(s[r]||(s[r]={}),s[r][l]={domain:r,descriptor:o,checklist:u};a<t.length&&t[a]&&!Rt[t[a]];)a+=1}return s}const nl=el(Xr);function tl(n){return Qr[n]||null}function ci(n,t){var a;const s=tl(n);return s&&((a=nl[s])==null?void 0:a[t])||null}function sl(n,t){if(!t||t.checklist.length===0)return{status:"on-track",completionPct:100,checkedCount:0,totalCount:0};const s=t.checklist.length,a=new Set(n),i=t.checklist.filter(r=>a.has(r.key)).length,l=Math.round(i/s*100);return l>=80?{status:"on-track",completionPct:l,checkedCount:i,totalCount:s}:l>=45?{status:"attention",completionPct:l,checkedCount:i,totalCount:s}:{status:"off-track",completionPct:l,checkedCount:i,totalCount:s}}function al(n){const t=sl(n.checkedItemKeys,n.rule);return!n.rule||n.rule.checklist.length===0?{status:n.averageScore>=n.targetScore?"on-track":"attention",completionPct:t.completionPct,checkedCount:t.checkedCount,totalCount:t.totalCount}:t.status==="off-track"?t:n.averageScore<Math.max(1,n.targetScore-1)&&t.status!=="on-track"?{...t,status:"attention"}:t}const Dt=[1,2,3,4,5];function il(n,t){const s=n.lenses.reduce((a,i)=>a+Number(t(n.id,i).score||0),0);return n.lenses.length?Number((s/n.lenses.length).toFixed(1)):0}function ol(n,t,s,a,i,l){if(n.phase>s)return{label:"Not in current phase yet",rowClass:l?"border-slate-600 bg-slate-800/80":"border-slate-200 bg-slate-50",chipClass:l?"bg-slate-700 text-slate-100":"bg-slate-200 text-slate-700",barClass:"bg-slate-400"};const r=ci(n.id,a),o=al({averageScore:t,targetScore:n.target,checkedItemKeys:i,rule:r});return o.status==="off-track"?{label:`Off track (${o.completionPct}% checklist)`,rowClass:l?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:l?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:o.status==="attention"?{label:`Needs attention (${o.completionPct}% checklist)`,rowClass:l?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:l?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:t>=n.target?{label:`On track (${o.completionPct}% checklist)`,rowClass:l?"border-green-700 bg-green-950/45":"border-green-200 bg-green-50",chipClass:l?"bg-green-900 text-green-100":"bg-green-100 text-green-700",barClass:"bg-green-500"}:n.phase<s?{label:"Behind timeline",rowClass:l?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:l?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:n.phase===s?{label:"Due this phase",rowClass:l?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:l?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:{label:"In progress",rowClass:l?"border-blue-700 bg-blue-950/45":"border-blue-200 bg-blue-50",chipClass:l?"bg-blue-900 text-blue-100":"bg-blue-100 text-blue-700",barClass:"bg-blue-500"}}function rl({components:n,metrics:t,getEntry:s,onComponentClick:a,pathway:i,pathwayChecks:l,darkMode:r=!1}){const o=pn("component-delivery-timeline"),u=n.map(h=>{var x;const d=il(h,s),c=((x=l[h.id])==null?void 0:x[i])||[];return{component:h,average:d,status:ol(h,d,t.currentPhase,i,c,r)}});return e.jsxs("section",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-2xl border p-6 shadow-sm`,children:[e.jsx("p",{className:`text-sm font-semibold uppercase tracking-[0.18em] ${r?"text-slate-300":"text-slate-500"}`,children:"Component Delivery Timeline"}),e.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${r?"text-slate-100":"text-slate-900"}`,children:"Component delivery timeline"}),e.jsx(yn,{onClick:o.reopen,darkMode:r})]}),e.jsx("p",{className:`mt-2 text-sm ${r?"text-slate-300":"text-slate-600"}`,children:"This gantt-style view shows when each component should be completed by phase. Components are coloured by whether they are on track against the current phase. Select a row to jump into the matching assessment tab."})]}),e.jsx(vn,{open:o.isOpen,onClose:o.close,title:"Component Delivery Timeline",darkMode:r,body:e.jsx("p",{children:"A gantt-style view of when each component should be completed by phase, coloured by whether it's on track. Select a row to jump straight into that component's assessment."})}),e.jsx("div",{className:"lg:hidden space-y-3",children:u.map(({component:h,average:d,status:c})=>e.jsxs("button",{type:"button",onClick:()=>a(h.id),className:`w-full rounded-xl border p-4 text-left transition-colors ${r?"hover:border-slate-500":"hover:border-slate-300"} ${c.rowClass}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:h.label}),e.jsxs("div",{className:`mt-1 text-xs ${r?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",Kt(h.target)," · completes by Phase"," ",h.phase]})]}),e.jsx("span",{className:`rounded-full px-4 py-1 text-xs font-semibold ${c.chipClass}`,children:c.label})]}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("div",{className:`mb-1 flex items-center justify-between text-xs ${r?"text-slate-300":"text-slate-600"}`,children:[e.jsx("span",{children:"Timeline"}),e.jsxs("span",{children:["Average ",d]})]}),e.jsx("div",{className:"grid grid-cols-5 gap-1",children:Dt.map(x=>{const b=x<=h.phase,w=x===h.phase;return e.jsxs("div",{children:[e.jsx("div",{className:`h-2 rounded-full ${r?"bg-slate-700/70":"bg-white/80"}`,children:b?e.jsx("div",{className:`h-full rounded-full ${c.barClass} ${w?"opacity-100":"opacity-35"}`,title:w?"Expected completion phase":"Planned timeline"}):null}),e.jsxs("div",{className:`mt-1 text-center text-[10px] ${r?"text-slate-400":"text-slate-500"}`,children:["P",x]})]},`${h.id}-mobile-${x}`)})})]})]},`mobile-${h.id}`))}),e.jsx("div",{className:`${r?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} hidden lg:block rounded-2xl border p-5 shadow-sm overflow-x-auto`,children:e.jsxs("div",{className:"min-w-[860px]",children:[e.jsxs("div",{className:`grid grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 border-b pb-3 text-xs font-semibold uppercase tracking-wider ${r?"border-slate-700 text-slate-400":"border-slate-200 text-slate-500"}`,children:[e.jsx("div",{children:"Component"}),Dt.map(h=>e.jsxs("div",{className:"text-center",children:["Phase ",h]},h)),e.jsx("div",{className:"text-center",children:"Average"}),e.jsx("div",{className:"text-center",children:"Status"})]}),e.jsx("div",{className:"mt-4 space-y-3",children:u.map(({component:h,average:d,status:c})=>e.jsxs("button",{type:"button",onClick:()=>a(h.id),className:`grid w-full grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 rounded-xl border p-2.5 text-left transition-colors ${r?"hover:border-slate-500":"hover:border-slate-300"} ${c.rowClass}`,children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${r?"text-slate-100":"text-slate-800"}`,children:h.label}),e.jsxs("div",{className:`mt-1 text-xs ${r?"text-slate-300":"text-slate-500"}`,children:["Target readiness: ",Kt(h.target)," · completes by Phase"," ",h.phase]})]}),Dt.map(x=>{const b=x<=h.phase,w=x===h.phase;return e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:`h-7 w-full rounded-full px-1 py-1 ${r?"bg-slate-700/70":"bg-white/70"}`,children:b?e.jsx("div",{className:`h-full rounded-full ${c.barClass} ${w?"opacity-100":"opacity-35"}`,title:w?"Expected completion phase":"Planned timeline"}):null})},`${h.id}-${x}`)}),e.jsx("div",{className:`flex items-center justify-center text-sm font-semibold ${r?"text-slate-100":"text-slate-700"}`,children:d}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("span",{className:`rounded-full text-center px-2.5 py-1 text-xs font-semibold ${c.chipClass}`,children:c.label})})]},h.id))}),e.jsxs("div",{className:`mt-4 rounded-md border p-3 text-xs ${r?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{className:"font-semibold",children:"Key:"})," Grey rows are not yet due for the current phase. Red rows indicate overdue or off-track work."]})]})})]})}function ll(n){return Li.sanitize(n,{USE_PROFILES:{html:!0}})}const cl=[{label:"Bold",command:"bold",icon:"B"},{label:"Italic",command:"italic",icon:"I"},{label:"Bullet list",command:"insertUnorderedList",icon:"•"},{label:"Numbered list",command:"insertOrderedList",icon:"1."}];function xa({value:n,onChange:t,placeholder:s,className:a}){const i=m.useRef(null);m.useEffect(()=>{const u=i.current;u&&u.innerHTML!==n&&(u.innerHTML=n)},[n]);const l=()=>{const u=i.current;u&&t(ll(u.innerHTML))},r=u=>{var h;(h=i.current)==null||h.focus(),document.execCommand(u,!1),l()},o=!n||n==="<br>";return e.jsxs("div",{className:`rounded-md border border-slate-300 bg-white ${a||""}`,children:[e.jsx("div",{"data-print-hide":"true",className:"flex items-center gap-1 border-b border-slate-200 bg-slate-50 px-1.5 py-1",children:cl.map(u=>e.jsx("button",{type:"button",title:u.label,"aria-label":u.label,onMouseDown:h=>h.preventDefault(),onClick:()=>r(u.command),className:"flex h-6 min-w-[1.5rem] items-center justify-center rounded px-1 text-xs font-bold text-slate-600 hover:bg-slate-200",children:u.icon},u.command))}),e.jsxs("div",{className:"relative",children:[o&&s?e.jsx("span",{className:"pointer-events-none absolute left-2 top-1.5 text-sm text-slate-400",children:s}):null,e.jsx("div",{ref:i,contentEditable:!0,suppressContentEditableWarning:!0,onInput:l,onBlur:l,className:"min-h-[4.5rem] px-2 py-1.5 text-sm text-slate-800 outline-none [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"})]})]})}function an(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}const Jt="nhs-highlight-builder-layout",$t=[{id:"executive-summary",label:"Executive Summary"},{id:"change-dashboard",label:"Change Dashboard"},{id:"adoption-metrics",label:"Adoption Metrics"},{id:"what-went-well",label:"What Went Well"},{id:"risks-issues",label:"Key Risks and Issues"},{id:"stakeholder-insights",label:"Stakeholder Insights"},{id:"interventions-delivered",label:"Change Interventions Delivered"},{id:"upcoming-priorities",label:"Upcoming Priorities"},{id:"decisions-required",label:"Decisions Required"},{id:"change-lead-assessment",label:"Change Lead Assessment"}],dl={"executive-summary":{label:"Headline scorecard",kind:"donut"},"change-dashboard":{label:"RAG trend chart",kind:"trend"},"adoption-metrics":{label:"KPI scorecard",kind:"bars"},"what-went-well":{label:"Achievement tiles",kind:"steps"},"risks-issues":{label:"Risk heat map",kind:"risk"},"stakeholder-insights":{label:"Sentiment split",kind:"donut"},"interventions-delivered":{label:"Intervention timeline",kind:"steps"},"upcoming-priorities":{label:"30-day roadmap",kind:"steps"},"decisions-required":{label:"Decision funnel",kind:"trend"},"change-lead-assessment":{label:"Confidence profile",kind:"bars"}},Un=["#005eb8","#41a6c8","#78be20","#ffb81c","#da291c"],xn={title:"Executive Highlight Report",themeColor:"#005eb8",logoDataUrl:"",programmeName:"",reportingPeriod:"",changeLeadName:"",sroName:"",overallStatus:"Amber",orientation:"landscape",bragSlides:[],sections:["executive-summary","change-dashboard","adoption-metrics","what-went-well","risks-issues","stakeholder-insights","interventions-delivered","upcoming-priorities","decisions-required","change-lead-assessment"],sectionNarratives:{},metricRows:[],riskRows:[],stakeholderPositivePct:0,stakeholderNeutralPct:0,stakeholderNegativePct:0,interventionRows:[],decisionRows:[],assessmentRows:[]},ul={Green:"bg-green-100 text-green-800 border-green-200",Amber:"bg-amber-100 text-amber-800 border-amber-200",Red:"bg-red-100 text-red-800 border-red-200"},ml={Green:"bg-green-500",Amber:"bg-amber-500",Red:"bg-red-500"};function Sa({status:n}){return e.jsxs("span",{className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${ul[n]}`,children:[e.jsx("span",{className:`h-2 w-2 rounded-full ${ml[n]}`}),n]})}function gl({rows:n}){const t=Math.max(5,...n.flatMap(s=>[s.current,s.target]));return e.jsxs("div",{className:"space-y-5","aria-label":"Current component scores compared with targets",children:[n.map(s=>e.jsxs("div",{className:"grid grid-cols-[minmax(130px,1fr),minmax(220px,2fr),48px] items-center gap-3",children:[e.jsx("span",{className:"text-sm font-semibold text-[#425563]",children:s.label}),e.jsxs("div",{className:"relative h-8 rounded bg-[#e8edee]",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 rounded bg-[#005eb8]",style:{width:`${Math.min(100,s.current/t*100)}%`}}),e.jsx("div",{className:"absolute inset-y-[-4px] w-0.5 bg-[#da291c]",style:{left:`${Math.min(100,s.target/t*100)}%`},title:`Target ${s.target}`})]}),e.jsx("span",{className:"text-right text-sm font-bold text-[#005eb8]",children:s.current.toFixed(1)})]},s.label)),e.jsxs("div",{className:"flex flex-wrap gap-5 border-t border-[#d8dde0] pt-4 text-xs text-[#425563]",children:[e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"h-3 w-3 rounded-sm bg-[#005eb8]"})," Current average"]}),e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"h-4 w-0.5 bg-[#da291c]"})," Target marker"]})]})]})}function pl(){return e.jsx("span",{className:"flex h-4 w-4 shrink-0 items-center justify-center rounded bg-green-500 text-[10px] font-bold text-white",children:"✓"})}function et(n,t){return`${n+1}. ${t}`}function di(n){return Array.isArray(n)?n.filter(t=>!!t&&typeof t=="object").map(t=>({id:t.id||an(),componentId:t.componentId||"",rows:Array.isArray(t.rows)?t.rows.filter(s=>!!s&&typeof s=="object").map(s=>({id:s.id||an(),preventingGreenHtml:s.preventingGreenHtml||"",returnToGreenHtml:s.returnToGreenHtml||"",ownerId:s.ownerId||"",targetDate:s.targetDate||"",linkedActionId:s.linkedActionId})):[]})):[]}function rt(n,t){return Array.isArray(n)?n.filter(s=>!!s&&typeof s=="object").map(t):[]}function ui(n){return rt(n,t=>({id:t.id||an(),measure:t.measure||"",target:t.target||"",current:t.current||"",status:t.status==="Green"||t.status==="Amber"||t.status==="Red"?t.status:"Amber"}))}function mi(n){return rt(n,t=>({id:t.id||an(),risk:t.risk||"",impact:t.impact||"",mitigation:t.mitigation||"",status:t.status||"Open"}))}function gi(n){return rt(n,t=>({id:t.id||an(),text:t.text||""}))}function pi(n){return rt(n,t=>({id:t.id||an(),decision:t.decision||"",owner:t.owner||"",requiredBy:t.requiredBy||""}))}function hi(n){return rt(n,t=>({id:t.id||an(),area:t.area||"",confidence:t.confidence==="High"||t.confidence==="Medium"||t.confidence==="Low"?t.confidence:"Medium"}))}function hl(){const n=Sn(Jt);if(!n)return xn;try{return{...xn,...n,overallStatus:n.overallStatus==="Green"||n.overallStatus==="Amber"||n.overallStatus==="Red"?n.overallStatus:xn.overallStatus,orientation:n.orientation==="portrait"||n.orientation==="landscape"?n.orientation:xn.orientation,bragSlides:di(n.bragSlides),sections:Array.isArray(n.sections)&&n.sections.length>0?n.sections:xn.sections,metricRows:ui(n.metricRows),riskRows:mi(n.riskRows),stakeholderPositivePct:Number(n.stakeholderPositivePct)||0,stakeholderNeutralPct:Number(n.stakeholderNeutralPct)||0,stakeholderNegativePct:Number(n.stakeholderNegativePct)||0,interventionRows:gi(n.interventionRows),decisionRows:pi(n.decisionRows),assessmentRows:hi(n.assessmentRows)}}catch{return xn}}function fl({store:n,metrics:t,lenses:s,components:a=zn,getEntry:i,trustName:l,projectName:r,themeColor:o,onLayoutSaved:u,darkMode:h=!1,currentUserId:d}){const c=pn("highlight-builder"),x=n.orgProfile.teamMembers||[],[b,w]=m.useState(()=>{const S=hl();return o&&!S.themeColor?{...S,themeColor:o}:S}),[R,O]=m.useState(""),[f,I]=m.useState(0),H=m.useRef(null),C=m.useMemo(()=>new Set(b.sections),[b.sections]),j=m.useMemo(()=>b.sections.reduce((S,D,E)=>(S[D]=E,S),{}),[b.sections]),y=b.orientation==="landscape",Z=y?"overflow-hidden rounded-lg border border-[#003087] bg-white shadow-md":"rounded-md border border-slate-200 bg-white p-4",L=y?{}:{borderLeft:`3px solid ${b.themeColor}`};function Y({children:S}){return y?e.jsx("div",{className:"-mx-0 -mt-0 mb-4 px-5 py-3 text-base font-bold uppercase tracking-wide text-white",style:{backgroundColor:b.themeColor||At.blue},children:S}):e.jsx("div",{className:"mb-2 border-b border-slate-200 pb-1 text-xs font-bold uppercase tracking-wider text-slate-500",children:S})}function te({children:S}){return y?e.jsx("div",{className:"px-5 pb-5 text-[15px]",children:S}):e.jsx(e.Fragment,{children:S})}const re=m.useMemo(()=>a.map(S=>{let D=0;S.lenses.forEach(A=>{D+=Number(i(S.id,A).score||0)});const E=Number((D/S.lenses.length).toFixed(1));return{component:S,average:E,target:S.target,gap:Number(Math.max(0,S.target-E).toFixed(1))}}),[a,i]),P=m.useMemo(()=>[...re].sort((S,D)=>D.average-S.average).slice(0,5),[re]),G=S=>{w(D=>({...D,...S}))},Ne=S=>{w(D=>{const E=C.has(S)?D.sections.filter(A=>A!==S):[...D.sections,S];return{...D,sections:E}})},Ce=(S,D)=>{w(E=>({...E,sectionNarratives:{...E.sectionNarratives,[S]:D}}))},Te=()=>{const S=new Set(b.bragSlides.map(A=>A.componentId)),D=a.find(A=>!S.has(A.id))||a[0],E={id:an(),componentId:(D==null?void 0:D.id)||"",rows:[]};w(A=>({...A,bragSlides:[...A.bragSlides,E]}))},Ke=S=>{w(D=>({...D,bragSlides:D.bragSlides.filter(E=>E.id!==S)}))},B=(S,D)=>{w(E=>({...E,bragSlides:E.bragSlides.map(A=>A.id===S?{...A,componentId:D}:A)}))},le=S=>{const D={id:an(),preventingGreenHtml:"",returnToGreenHtml:"",ownerId:d||"",targetDate:""};w(E=>({...E,bragSlides:E.bragSlides.map(A=>A.id===S?{...A,rows:[...A.rows,D]}:A)}))},ie=(S,D,E)=>{w(A=>({...A,bragSlides:A.bragSlides.map(U=>U.id===S?{...U,rows:U.rows.map(W=>W.id===D?{...W,...E}:W)}:U)}))},ge=(S,D)=>{w(E=>({...E,bragSlides:E.bragSlides.map(A=>A.id===S?{...A,rows:A.rows.filter(U=>U.id!==D)}:A)}))};function be(S,D){w(E=>({...E,[S]:[...E[S],D]}))}function ye(S,D,E){w(A=>({...A,[S]:A[S].map(U=>U.id===D?{...U,...E}:U)}))}function se(S,D){w(E=>({...E,[S]:E[S].filter(A=>A.id!==D)}))}const De=async S=>{var A;const D=(A=S.target.files)==null?void 0:A[0];if(!D)return;const E=await new Promise((U,W)=>{const ne=new FileReader;ne.onload=()=>U(String(ne.result||"")),ne.onerror=()=>W(new Error("Unable to read selected logo file.")),ne.readAsDataURL(D)});O(D.name),w(U=>({...U,logoDataUrl:E})),I(U=>U+1)},$e=()=>{sn(Jt,b),nt("highlight-builder-layout.json",JSON.stringify(b,null,2),"application/json"),u==null||u()},ze=async S=>{var E;const D=(E=S.target.files)==null?void 0:E[0];if(D)try{const A=await D.text(),U=JSON.parse(A);w({...xn,...U,overallStatus:U.overallStatus==="Green"||U.overallStatus==="Amber"||U.overallStatus==="Red"?U.overallStatus:xn.overallStatus,orientation:U.orientation==="portrait"||U.orientation==="landscape"?U.orientation:xn.orientation,bragSlides:di(U.bragSlides),sections:Array.isArray(U.sections)&&U.sections.length>0?U.sections:xn.sections,sectionNarratives:U.sectionNarratives||{},metricRows:ui(U.metricRows),riskRows:mi(U.riskRows),stakeholderPositivePct:Number(U.stakeholderPositivePct)||0,stakeholderNeutralPct:Number(U.stakeholderNeutralPct)||0,stakeholderNegativePct:Number(U.stakeholderNegativePct)||0,interventionRows:gi(U.interventionRows),decisionRows:pi(U.decisionRows),assessmentRows:hi(U.assessmentRows)})}catch{window.alert("Unable to load the selected layout JSON. Please verify the file contents.")}finally{S.target.value=""}};m.useEffect(()=>{sn(Jt,b)},[b]);const Be=n.history.length>1?n.history[n.history.length-2]:null,Ie=m.useMemo(()=>re.slice(0,10).map(S=>{const D=Be?Number((S.component.lenses.reduce((W,ne)=>{var oe,Se;return W+Number(((Se=(oe=Be.data[S.component.id])==null?void 0:oe[ne])==null?void 0:Se.score)||0)},0)/S.component.lenses.length).toFixed(1)):S.average,E=S.average>D?"▲":S.average<D?"▼":"►",A=S.average>=S.target?"Green":S.average>=Math.max(1,S.target-1)?"Amber":"Red",U=S.average>=S.target?"Consistently understood by most stakeholder groups.":S.average>=Math.max(1,S.target-1)?"Progressing, with reinforcement still required.":"Below target and requiring focused intervention.";return{area:S.component.label,current:S.average,target:S.target,status:A,trend:E,commentary:U}}),[re,Be]),cn=m.useMemo(()=>Ie.map(S=>({label:S.area,current:S.current,target:S.target})),[Ie]),Je=m.useMemo(()=>t.nextSteps.slice(0,7).map(S=>S.message),[t.nextSteps]),dn=S=>{if(S==="decisions-required")return b.decisionRows.some(D=>D.decision.trim()||D.owner.trim()||D.requiredBy.trim());if((b.sectionNarratives[S]||"").trim())return!0;switch(S){case"executive-summary":return!0;case"change-dashboard":return Ie.length>0;case"adoption-metrics":return b.metricRows.length>0;case"what-went-well":return P.length>0;case"risks-issues":return b.riskRows.length>0;case"stakeholder-insights":return b.stakeholderPositivePct+b.stakeholderNeutralPct+b.stakeholderNegativePct>0;case"interventions-delivered":return b.interventionRows.length>0;case"upcoming-priorities":return Je.length>0;case"decisions-required":return b.decisionRows.length>0;case"change-lead-assessment":return b.assessmentRows.length>0;default:return!1}},en=b.sections.filter(S=>dn(S)),_=S=>{let D=0;return S.reduce((E,A)=>(E[A]=D,D+=A==="change-dashboard"?2:1,E),{})},ae=_(b.sections),J=_(en);function he({sectionId:S}){if(!y)return null;const D=dl[S],E=W=>{const ne=Number.parseFloat(W.replace("%","").trim());return Number.isFinite(ne)?Math.max(0,ne):0};if(D.kind==="donut"){const W=S==="stakeholder-insights"?[b.stakeholderPositivePct,b.stakeholderNeutralPct,b.stakeholderNegativePct]:[Number(t.overallPct),Math.max(0,100-Number(t.overallPct))],ne=W.reduce((Cn,v)=>Cn+v,0);if(!ne)return null;const oe=W[0]/ne*100,Se=W[1]/ne*100,ve=S==="stakeholder-insights"?"Positive":"Overall progress",Fe=S==="stakeholder-insights"?"Neutral":"Remaining",un=S==="stakeholder-insights"?W[2]/ne*100:0;return e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:D.label}),e.jsx("div",{className:"mx-auto mt-4 h-32 w-32 rounded-full",style:{background:S==="stakeholder-insights"?`conic-gradient(#78be20 0 ${oe}%, #ffb81c ${oe}% ${oe+Se}%, #da291c ${oe+Se}% ${oe+Se+un}%, #d8eaf6 ${oe+Se+un}% 100%)`:`conic-gradient(#005eb8 0 ${oe}%, #41a6c8 ${oe}% ${oe+Se}%, #d8eaf6 ${oe+Se}% 100%)`,mask:"radial-gradient(circle, transparent 55%, #000 56%)",WebkitMask:"radial-gradient(circle, transparent 55%, #000 56%)"}}),e.jsxs("div",{className:"mt-4 grid gap-2 text-xs text-[#425563]",children:[e.jsxs("span",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{children:[e.jsx("i",{className:`mr-2 inline-block h-2.5 w-2.5 rounded-full ${S==="stakeholder-insights"?"bg-[#78be20]":"bg-[#005eb8]"}`}),ve]}),e.jsxs("strong",{children:[W[0],"%"]})]}),e.jsxs("span",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{children:[e.jsx("i",{className:`mr-2 inline-block h-2.5 w-2.5 rounded-full ${S==="stakeholder-insights"?"bg-[#ffb81c]":"bg-[#41a6c8]"}`}),Fe]}),e.jsxs("strong",{children:[W[1],"%"]})]}),S==="stakeholder-insights"?e.jsxs("span",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{children:[e.jsx("i",{className:"mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#da291c]"}),"Negative"]}),e.jsxs("strong",{children:[W[2],"%"]})]}):null]})]})}if(D.kind==="risk"){const W=b.riskRows.reduce((Se,ve)=>{const Fe=ve.status.trim()||"Open";return Se[Fe]=(Se[Fe]||0)+1,Se},{}),ne=Object.entries(W);if(!ne.length)return null;const oe=Math.max(...ne.map(([,Se])=>Se));return e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:D.label}),e.jsx("div",{className:"mt-5 space-y-3",children:ne.map(([Se,ve])=>e.jsxs("div",{children:[e.jsxs("div",{className:"mb-1 flex justify-between text-xs font-semibold text-[#425563]",children:[e.jsx("span",{children:Se}),e.jsx("span",{children:ve})]}),e.jsx("div",{className:"h-4 rounded bg-white",children:e.jsx("div",{className:"h-4 rounded",style:{width:`${ve/oe*100}%`,backgroundColor:Se.toLowerCase().includes("closed")?"#78be20":Se.toLowerCase().includes("at risk")?"#da291c":"#ffb81c"}})})]},Se))})]})}if(D.kind==="steps"){const W=S==="interventions-delivered"?b.interventionRows.map(ne=>ne.text.trim()).filter(Boolean):S==="upcoming-priorities"?Je:P.map(ne=>ne.component.label);return W.length?e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:D.label}),e.jsx("div",{className:"mt-5 space-y-3",children:W.slice(0,5).map((ne,oe)=>e.jsxs("div",{className:"flex items-start gap-3 text-xs text-[#425563]",children:[e.jsx("span",{className:"flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-bold text-white",style:{backgroundColor:Un[oe%Un.length]},children:oe+1}),e.jsx("span",{className:"pt-0.5",children:ne})]},`${ne}-${oe}`))})]}):null}if(D.kind==="trend"&&S==="decisions-required"){const W=b.decisionRows.map(ne=>ne.decision.trim()).filter(Boolean);return W.length?e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:D.label}),e.jsx("div",{className:"mt-5 space-y-3",children:W.slice(0,5).map((ne,oe)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"h-5 flex-1 rounded bg-white",children:e.jsx("div",{className:"h-5 rounded",style:{width:`${100-oe*15}%`,backgroundColor:Un[oe%Un.length]}})}),e.jsx("span",{className:"max-w-[45%] text-right text-xs text-[#425563]",children:ne})]},`${ne}-${oe}`))})]}):null}const U=(S==="adoption-metrics"?b.metricRows.map(W=>({label:W.measure,value:E(W.current),max:Math.max(100,E(W.target))})):S==="change-lead-assessment"?["High","Medium","Low"].map(W=>({label:W,value:b.assessmentRows.filter(ne=>ne.confidence===W).length,max:Math.max(1,b.assessmentRows.length)})):P.map(W=>({label:W.component.label,value:W.average,max:5}))).filter(W=>W.label.trim()&&W.value>0);return U.length?e.jsxs("aside",{className:"rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.14em]",children:D.label}),e.jsx("div",{className:"mt-5 space-y-3",children:U.slice(0,6).map(W=>e.jsxs("div",{children:[e.jsxs("div",{className:"mb-1 flex justify-between gap-2 text-xs font-semibold text-[#425563]",children:[e.jsx("span",{children:W.label}),e.jsx("span",{children:W.value})]}),e.jsx("div",{className:"h-4 rounded bg-white",children:e.jsx("div",{className:"h-4 rounded",style:{width:`${Math.min(100,W.value/W.max*100)}%`,backgroundColor:Un[U.indexOf(W)%Un.length]}})})]},W.label))})]}):null}const xe=S=>{if((b.sectionNarratives[S]||"").trim())return b.sectionNarratives[S].trim();switch(S){case"executive-summary":return`${b.overallStatus}. The programme continues to progress across ${a.length} components and ${s.length} lenses, with overall delivery at ${t.overallPct}%.`;case"change-dashboard":return"Dashboard status is derived from current component averages versus targets, with trend based on the most recent finalised snapshot.";case"adoption-metrics":return"Metrics below provide an operational view of progress against key adoption measures and targets.";case"what-went-well":return"List key achievements for the reporting period, including sponsorship visibility and areas of strengthened adoption.";case"risks-issues":return"The following risks/issues require active monitoring and mitigation.";case"stakeholder-insights":return"Summarise positive feedback themes, concerns, and sentiment from stakeholder listening channels.";case"interventions-delivered":return"Capture interventions completed this month and assess their observed effectiveness.";case"upcoming-priorities":return"Set out the next 30-day focus to maintain delivery momentum and close adoption gaps.";case"decisions-required":return"Record approvals and decisions needed to unblock delivery and sustain adoption progress.";case"change-lead-assessment":return"Provide confidence ratings and the overall professional assessment from the Change Lead.";default:return""}},ke=S=>{const D=xe(S);return S==="change-dashboard"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:D}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Trend"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Commentary"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:Ie.map(E=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:E.area}),e.jsx("td",{className:"px-3 py-2 text-sm",children:e.jsx(Sa,{status:E.status})}),e.jsx("td",{className:"px-3 py-2 text-sm",children:E.trend}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:E.commentary})]},E.area))})]})})]}):S==="adoption-metrics"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:D}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Measure"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[b.metricRows.map(E=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.measure,onChange:A=>ye("metricRows",E.id,{measure:A.target.value}),placeholder:"e.g. Active Users",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.target,onChange:A=>ye("metricRows",E.id,{target:A.target.value}),placeholder:"e.g. 80%",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.current,onChange:A=>ye("metricRows",E.id,{current:A.target.value}),placeholder:"e.g. 62%",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:E.status,onChange:A=>ye("metricRows",E.id,{status:A.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"Green",children:"Green"}),e.jsx("option",{value:"Amber",children:"Amber"}),e.jsx("option",{value:"Red",children:"Red"})]})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>se("metricRows",E.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},E.id)),b.metricRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No metrics added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>be("metricRows",{id:an(),measure:"",target:"",current:"",status:"Amber"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Metric"})]}):S==="risks-issues"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:D}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Risk / Issue"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Impact"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Mitigation"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[b.riskRows.map(E=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.risk,onChange:A=>ye("riskRows",E.id,{risk:A.target.value}),placeholder:"e.g. Inconsistent adoption in Vision",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.impact,onChange:A=>ye("riskRows",E.id,{impact:A.target.value}),placeholder:"e.g. Benefits may not be realised",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.mitigation,onChange:A=>ye("riskRows",E.id,{mitigation:A.target.value}),placeholder:"e.g. Targeted coaching sessions",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.status,onChange:A=>ye("riskRows",E.id,{status:A.target.value}),placeholder:"Open",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>se("riskRows",E.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},E.id)),b.riskRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No key risks added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>be("riskRows",{id:an(),risk:"",impact:"",mitigation:"",status:"Open"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Risk / Issue"})]}):S==="upcoming-priorities"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:D}),e.jsx("ol",{className:"mt-3 list-decimal pl-5 space-y-1 text-sm text-slate-700",children:Je.length?Je.map((E,A)=>e.jsx("li",{children:E},`${E}-${A}`)):e.jsx("li",{children:"No immediate priorities detected from current data."})})]}):S==="what-went-well"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:D}),e.jsx("ul",{className:"mt-3 space-y-1.5 text-sm text-slate-700",children:P.slice(0,5).map(E=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(pl,{}),E.component.label," is tracking at ",E.average," against target ",E.target,"."]},E.component.id))})]}):S==="stakeholder-insights"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:D}),e.jsxs("div",{className:"mt-3 grid gap-2 md:grid-cols-3 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 rounded border border-green-200 bg-green-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-green-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Positive:",e.jsx("input",{type:"number",min:0,max:100,value:b.stakeholderPositivePct,onChange:E=>G({stakeholderPositivePct:Number(E.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-amber-200 bg-amber-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Neutral:",e.jsx("input",{type:"number",min:0,max:100,value:b.stakeholderNeutralPct,onChange:E=>G({stakeholderNeutralPct:Number(E.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-red-200 bg-red-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-red-500"}),e.jsxs("label",{className:"flex items-center gap-1.5",children:["Negative:",e.jsx("input",{type:"number",min:0,max:100,value:b.stakeholderNegativePct,onChange:E=>G({stakeholderNegativePct:Number(E.target.value)}),className:"w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"}),"%"]})]})]})]}):S==="interventions-delivered"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:D}),e.jsxs("ul",{className:"mt-3 space-y-2 text-sm text-slate-700",children:[b.interventionRows.map(E=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("input",{value:E.text,onChange:A=>ye("interventionRows",E.id,{text:A.target.value}),placeholder:"e.g. Sponsor briefing sessions",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>se("interventionRows",E.id),className:"shrink-0 rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},E.id)),b.interventionRows.length?null:e.jsx("li",{className:"text-slate-500",children:"No interventions added yet."})]}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>be("interventionRows",{id:an(),text:""}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Intervention"})]}):S==="decisions-required"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:D}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Decision"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Required By"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[b.decisionRows.map(E=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.decision,onChange:A=>ye("decisionRows",E.id,{decision:A.target.value}),placeholder:"e.g. Approval for additional adoption support resource",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.owner,onChange:A=>ye("decisionRows",E.id,{owner:A.target.value}),placeholder:"e.g. Programme Board",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.requiredBy,onChange:A=>ye("decisionRows",E.id,{requiredBy:A.target.value}),placeholder:"TBC",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>se("decisionRows",E.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},E.id)),b.decisionRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:4,children:"No decisions added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>be("decisionRows",{id:an(),decision:"",owner:"",requiredBy:""}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Decision"})]}):S==="change-lead-assessment"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:D}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Confidence"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[b.assessmentRows.map(E=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{value:E.area,onChange:A=>ye("assessmentRows",E.id,{area:A.target.value}),placeholder:"e.g. Stakeholder Engagement",className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:E.confidence,onChange:A=>ye("assessmentRows",E.id,{confidence:A.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"High",children:"High"}),e.jsx("option",{value:"Medium",children:"Medium"}),e.jsx("option",{value:"Low",children:"Low"})]})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>se("assessmentRows",E.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},E.id)),b.assessmentRows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:3,children:"No assessment areas added yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>be("assessmentRows",{id:an(),area:"",confidence:"Medium"}),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Assessment Area"})]}):e.jsx(e.Fragment,{children:e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:D})})},Ae=()=>{if(!H.current){window.alert("Preview content is not ready to print yet.");return}const S=window.open("","_blank");if(!S)return;S.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8" /><title>Highlight Report</title></head><body></body></html>'),document.querySelectorAll('link[rel="stylesheet"], style').forEach(A=>{S.document.head.appendChild(A.cloneNode(!0))});const D=S.document.createElement("style");D.textContent=`
      @page { margin: 8mm; size: A4 ${b.orientation}; }
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
    `,S.document.head.appendChild(D);const E=H.current.cloneNode(!0);E.className="printable-report",E.querySelectorAll('[data-print-exclude="true"]').forEach(A=>A.remove()),S.document.body.appendChild(E),S.document.close(),setTimeout(()=>{S.focus(),S.print(),S.close()},250)};return e.jsxs("section",{className:"space-y-6",children:[h?e.jsx("div",{className:"rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm font-semibold text-red-900",children:"Dark mode not compatible for Highlight Report due to print/save functionality."}):null,e.jsx("div",{className:"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",children:e.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Highlight Builder Tool"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:"Create a polished highlight pack"}),e.jsx(yn,{onClick:c.reopen})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:$e,className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"Save JSON Layout"}),e.jsxs("label",{className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 cursor-pointer",children:["Load JSON Layout",e.jsx("input",{type:"file",accept:"application/json",className:"hidden",onChange:ze},f)]}),e.jsxs("div",{className:"flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-semibold",role:"group","aria-label":"PDF export orientation",children:[e.jsx("button",{type:"button",onClick:()=>G({orientation:"portrait"}),"aria-pressed":b.orientation==="portrait",className:`px-3 py-2 transition-colors ${b.orientation==="portrait"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Portrait"}),e.jsx("button",{type:"button",onClick:()=>G({orientation:"landscape"}),"aria-pressed":b.orientation==="landscape",className:`px-3 py-2 transition-colors border-l border-slate-300 ${b.orientation==="landscape"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Landscape"})]}),e.jsxs("button",{type:"button",onClick:Ae,className:"rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm",style:{backgroundColor:b.themeColor},children:["Print / Save PDF (",b.orientation==="landscape"?"Landscape":"Portrait",")"]})]})]})}),e.jsxs("div",{className:"grid gap-6 xl:grid-cols-[340px,1fr]",children:[e.jsx("aside",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Report title"}),e.jsx("input",{value:b.title,onChange:S=>G({title:S.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Programme"}),e.jsx("input",{value:b.programmeName,onChange:S=>G({programmeName:S.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Reporting period"}),e.jsx("input",{value:b.reportingPeriod,onChange:S=>G({reportingPeriod:S.target.value}),placeholder:"July 2026",className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Change Lead"}),e.jsx("input",{value:b.changeLeadName,onChange:S=>G({changeLeadName:S.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"SRO"}),e.jsx("input",{value:b.sroName,onChange:S=>G({sroName:S.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Overall Change Status"}),e.jsxs("select",{value:b.overallStatus,onChange:S=>G({overallStatus:S.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500",children:[e.jsx("option",{value:"Green",children:"Green"}),e.jsx("option",{value:"Amber",children:"Amber"}),e.jsx("option",{value:"Red",children:"Red"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Theme colour"}),e.jsx("input",{type:"color",value:b.themeColor,onChange:S=>G({themeColor:S.target.value}),className:"h-10 w-full rounded-md border border-slate-300"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Logo in top-left"}),e.jsxs("label",{className:"flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-3 py-4 text-sm text-slate-700 hover:bg-slate-100",children:[e.jsx("span",{children:R||"Upload logo"}),e.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:De})]}),b.logoDataUrl?e.jsx("div",{className:"mt-3 rounded-md border border-slate-200 bg-slate-50 p-2",children:e.jsx("img",{alt:"Preview logo",src:b.logoDataUrl,className:"max-h-16 w-auto"})}):null]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-1",children:"Programme/Project Readiness Slides"}),e.jsx("p",{className:"text-xs text-slate-500 mb-3",children:"These print first, one per page. Add a slide per component you want to report on."}),e.jsxs("div",{className:"space-y-2",children:[b.bragSlides.map((S,D)=>e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-500",children:["Page ",D+1]}),e.jsx("button",{type:"button",onClick:()=>Ke(S.id),className:"text-xs font-semibold text-red-600 hover:text-red-800",children:"Remove"})]}),e.jsx("select",{value:S.componentId,onChange:E=>B(S.id,E.target.value),className:"mt-1 w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm outline-none focus:border-blue-500",children:a.map(E=>e.jsx("option",{value:E.id,children:E.label},E.id))}),e.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:[S.rows.length," row",S.rows.length===1?"":"s"]})]},S.id)),b.bragSlides.length?null:e.jsx("p",{className:"text-sm text-slate-500",children:"No readiness slides yet."})]}),e.jsx("button",{type:"button",onClick:Te,disabled:!a.length,className:"mt-3 w-full rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 disabled:opacity-50",children:"+ Add Readiness Slide"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-3",children:"Report sections"}),e.jsx("div",{className:"space-y-2",children:$t.map(S=>{const D=C.has(S.id),E=S.id,A=j[S.id],U=typeof A=="number"?et(A,S.label):S.label;return e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("label",{className:"flex items-center gap-3 text-sm text-slate-700",children:[e.jsx("input",{type:"checkbox",checked:D,onChange:()=>Ne(S.id)}),e.jsx("span",{children:U})]}),D?e.jsxs("div",{className:"mt-3 space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-1",children:"Section narrative"}),e.jsx("textarea",{value:b.sectionNarratives[E]||"",onChange:W=>Ce(E,W.target.value),placeholder:xe(E),rows:4,className:"w-full rounded-md border border-slate-300 px-2 py-2 text-xs outline-none focus:border-blue-500"})]}),e.jsx("p",{className:"text-xs text-slate-500",children:"All adoption components are automatically included in this section."})]}):null]},S.id)})})]})]})}),e.jsxs("div",{ref:H,className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsx("div",{className:`report-intro-slide ${y?"report-slide":""} mb-6 overflow-hidden rounded-lg border border-[#003087] bg-white shadow-md ${y?"grid gap-8 p-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center":"flex items-center gap-3 p-3"}`,style:y?{borderTop:`14px solid ${b.themeColor||At.blue}`}:void 0,children:e.jsxs("div",{className:y?"space-y-6":"flex items-center gap-3",children:[b.logoDataUrl?e.jsx("img",{alt:"Logo preview",src:b.logoDataUrl,className:y?"max-h-20 w-auto":"max-h-12 w-auto"}):e.jsx("div",{className:`flex items-center justify-center rounded-md bg-[#005eb8] font-bold text-white ${y?"h-20 w-20 text-xl":"h-12 w-12 text-sm"}`,children:"NHS"}),e.jsxs("div",{children:[e.jsx("div",{"data-print-hide":"true",className:"text-xs font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Builder Preview · Intro Slide"}),e.jsx("div",{className:y?"mt-3 text-4xl font-bold leading-tight text-[#003087]":"text-lg font-bold text-slate-900",children:b.title}),e.jsxs("div",{className:"mt-2 text-sm text-slate-600",children:[b.programmeName||r||"Unnamed Programme"," ·"," ",b.reportingPeriod||"Reporting period not set"]}),e.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600",children:[e.jsx("span",{children:l||"Unconfigured Trust"}),e.jsx(Sa,{status:b.overallStatus})]}),y?e.jsx("p",{className:"mt-8 max-w-xl border-l-4 border-[#41a6c8] pl-4 text-lg leading-7 text-[#425563]",children:"Change adoption highlight report covering current progress, risks and priorities."}):null]})]})}),e.jsxs("div",{className:y?"grid gap-6":"grid gap-2","data-orientation":b.orientation,children:[b.bragSlides.map(S=>{const D=re.find(A=>A.component.id===S.componentId),E=D?Ga(D.average,D.target):null;return e.jsxs("article",{"data-brag-slide":"true",className:`${Z} ${y?"report-slide":""}`,style:L,children:[e.jsxs("div",{className:y?"flex flex-wrap items-center justify-between gap-3 px-5 py-3 text-white":"flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-2",style:y?{backgroundColor:b.themeColor||At.blue}:void 0,children:[e.jsxs("div",{children:[e.jsx("p",{className:y?"text-xs font-semibold uppercase tracking-wider text-white/80":"text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Programme/Project Readiness"}),e.jsx("h3",{className:y?"text-xl font-bold text-white":"text-base font-bold text-slate-900",children:(D==null?void 0:D.component.label)||"Select a component"})]}),D&&E?e.jsxs("div",{className:"text-right",children:[e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold ${Fa[E]}`,children:E}),e.jsxs("p",{className:`mt-1 text-xs ${y?"text-white/80":"text-slate-500"}`,children:[D.average.toFixed(1)," of ",D.target," target"]})]}):null]}),e.jsx("div",{className:y?"mx-5 mb-5 mt-3 overflow-x-auto rounded-md border border-slate-200":"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What is preventing you from being green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What do you/others need to do to return to green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target date"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[S.rows.map(A=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(xa,{value:A.preventingGreenHtml,onChange:U=>ie(S.id,A.id,{preventingGreenHtml:U}),placeholder:"What's blocking green?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(xa,{value:A.returnToGreenHtml,onChange:U=>ie(S.id,A.id,{returnToGreenHtml:U}),placeholder:"What needs to happen?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:A.ownerId,onChange:U=>ie(S.id,A.id,{ownerId:U.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"",children:"Unassigned"}),x.map(U=>e.jsxs("option",{value:U.id,children:[U.name||"Unnamed",U.role?` - ${U.role}`:""]},U.id))]})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{type:"date",value:A.targetDate,onChange:U=>ie(S.id,A.id,{targetDate:U.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>ge(S.id,A.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},A.id)),S.rows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No rows yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>le(S.id),className:y?"mx-5 mb-5 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200":"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Row"})]},S.id)}),b.sections.map(S=>{var D,E;return e.jsxs($n.Fragment,{children:[e.jsxs("article",{"data-brag-slide":y?"true":void 0,"data-print-exclude":dn(S)?void 0:"true",className:`${Z} ${y?"report-slide":""}`,style:L,children:[e.jsxs(Y,{children:[e.jsx("span",{"data-print-hide":"true",children:et(ae[S]||0,((D=$t.find(A=>A.id===S))==null?void 0:D.label)||S)}),e.jsx("span",{className:"hidden","data-print-only":"true",children:et(J[S]||0,((E=$t.find(A=>A.id===S))==null?void 0:E.label)||S)})]}),e.jsxs("div",{className:y&&S!=="change-dashboard"?"grid gap-5 px-5 pb-5 lg:grid-cols-[1fr,220px] lg:items-start":void 0,children:[e.jsx(te,{children:ke(S)}),S!=="change-dashboard"?e.jsx(he,{sectionId:S}):null]})]}),y&&S==="change-dashboard"?e.jsxs("article",{"data-brag-slide":"true","data-print-exclude":dn(S)?void 0:"true",className:`${Z} report-slide`,style:L,children:[e.jsxs(Y,{children:[e.jsx("span",{"data-print-hide":"true",children:et((ae[S]||0)+1,"Change Dashboard Chart")}),e.jsx("span",{className:"hidden","data-print-only":"true",children:et((J[S]||0)+1,"Change Dashboard Chart")})]}),e.jsx("div",{className:"px-8 pb-8",children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-6 max-w-2xl text-base leading-6 text-[#425563]",children:"Current component averages compared with the target score. The red marker shows the target for each area."}),e.jsx(gl,{rows:cn})]})})]}):null]},S)})]})]})]}),e.jsx(vn,{open:c.isOpen,onClose:c.close,title:"Highlight Builder Tool",body:e.jsx("p",{children:"Build a polished, presentation-ready highlight pack summarising progress across your programme - pick a layout, edit the content, and save or export it when you're happy."})})]})}function bl(n){const t={};return n.sections.forEach(s=>{s.items.forEach(a=>{t[a.id]="mine"})}),t}function va({active:n,onClick:t,children:s,darkMode:a}){return e.jsx("button",{type:"button",onClick:t,className:`rounded-md border px-2 py-1 text-left text-xs transition-colors ${Qt} ${n?"border-[#005eb8] bg-[#005eb8]/10 font-semibold text-[#005eb8]":a?"border-slate-600 bg-slate-900 text-slate-300 hover:bg-slate-800":"border-slate-300 bg-white text-slate-600 hover:bg-slate-50"}`,children:s})}function xl({item:n,choice:t,onChoose:s,myLabel:a,theirLabel:i,darkMode:l}){return e.jsxs("div",{"data-testid":`import-conflict-row-${n.id}`,className:`grid grid-cols-1 gap-2 border-t py-3 first:border-t-0 md:grid-cols-[1fr_1fr_1fr] ${l?"border-slate-700":"border-slate-200"}`,children:[e.jsx("div",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:n.label}),e.jsxs(va,{active:t==="mine",onClick:()=>s(n.id,"mine"),darkMode:l,children:[e.jsx("span",{className:`block text-[0.65rem] font-bold uppercase tracking-wide ${l?"text-slate-400":"text-slate-500"}`,children:a}),n.mineSummary]}),e.jsxs(va,{active:t==="theirs",onClick:()=>s(n.id,"theirs"),darkMode:l,children:[e.jsx("span",{className:`block text-[0.65rem] font-bold uppercase tracking-wide ${l?"text-slate-400":"text-slate-500"}`,children:i}),n.theirsSummary]})]})}function Sl({report:n,myLabel:t,theirLabel:s,onResolve:a,onCancel:i,darkMode:l=!1}){const[r,o]=m.useState(()=>bl(n)),u=n.sections.reduce((d,c)=>d+c.items.length,0),h=d=>{o(c=>{const x={...c};return n.sections.forEach(b=>{b.items.forEach(w=>{x[w.id]=d})}),x})};return e.jsx("div",{"data-testid":"import-conflict-modal",className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4",onClick:d=>{d.target===d.currentTarget&&i()},children:e.jsxs("div",{onClick:d=>d.stopPropagation(),className:`flex w-full max-w-4xl max-h-[90vh] flex-col rounded-lg border shadow-xl ${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:`shrink-0 border-b p-6 ${l?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("h2",{className:`text-xl font-bold ${l?"text-slate-100":"text-slate-800"}`,children:"Resolve import conflicts"}),e.jsxs("p",{className:`mt-1 text-sm ${l?"text-slate-300":"text-slate-600"}`,children:["Comparing ",e.jsx("span",{className:"font-semibold",children:t})," (currently loaded) against"," ",e.jsx("span",{className:"font-semibold",children:s})," (the imported file)."]}),e.jsxs("p",{className:`mt-1 text-xs ${l?"text-slate-400":"text-slate-500"}`,children:[u," item",u===1?"":"s"," need a decision",n.autoMergeSummary.length?` · also merging automatically: ${n.autoMergeSummary.join(", ")}`:""]}),e.jsxs("div",{className:"mt-3 flex gap-2",children:[e.jsx("button",{type:"button",onClick:()=>h("mine"),className:`${Ge} h-8 px-3 py-0 text-xs`,children:"Use all mine"}),e.jsx("button",{type:"button",onClick:()=>h("theirs"),className:`${Ge} h-8 px-3 py-0 text-xs`,children:"Use all theirs"})]})]}),e.jsx("div",{className:"flex-1 space-y-6 overflow-y-auto p-6",children:n.sections.map(d=>e.jsxs("div",{children:[e.jsx("h3",{className:`mb-1 text-sm font-bold uppercase tracking-wide ${l?"text-slate-300":"text-slate-500"}`,children:d.title}),e.jsx("div",{className:`rounded-md border px-3 ${l?"border-slate-700":"border-slate-200"}`,children:d.items.map(c=>e.jsx(xl,{item:c,choice:r[c.id]||"mine",onChoose:(x,b)=>o(w=>({...w,[x]:b})),myLabel:t,theirLabel:s,darkMode:l},c.id))})]},d.id))}),e.jsxs("div",{className:`flex shrink-0 justify-end gap-3 border-t p-4 ${l?"border-slate-700":"border-slate-200"}`,children:[e.jsx("button",{type:"button","data-testid":"import-conflict-cancel",onClick:i,className:Ge,children:"Cancel Import"}),e.jsx("button",{type:"button","data-testid":"import-conflict-apply",onClick:()=>a(r),className:Ln,children:"Apply and Import"})]})]})})}function ya(){return e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function vl(n){return n in as}function yl({lensName:n,onClose:t,darkMode:s=!1}){if(!n||!vl(n))return null;const a=as[n];return e.jsx("div",{id:"lens-info-modal",className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:e.jsxs("div",{className:`${s?"bg-slate-800 border-slate-700":"bg-white"} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border`,children:[e.jsxs("div",{className:`${s?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} sticky top-0 border-b p-6 flex items-center justify-between`,children:[e.jsx("h2",{className:`text-2xl font-bold ${s?"text-slate-100":"text-slate-800"}`,children:n}),e.jsx("button",{onClick:t,className:`${s?"text-slate-300 hover:text-slate-100":"text-slate-500 hover:text-slate-700"}`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsxs("div",{className:`p-6 space-y-4 ${s?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(ya,{}),"Outcome"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.outcome})]}),e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(ya,{}),"What Good Looks Like"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.whatGoodLooksLike})]})]})]})})}const wl=[{id:"why",question:"Why are we doing this?",framework:"Force Field Analysis - Driving Forces",description:"The forces pushing for change - the case that makes it worth doing.",componentIds:["case_for_change"]},{id:"future",question:"What will the future look like?",framework:"Vision",description:"A clear picture of the destination, understood and shared by everyone.",componentIds:["vision"]},{id:"barriers",question:"What might prevent us from achieving the vision?",framework:"Force Field Analysis - Restraining Forces",description:"The forces working against change - risks, resistance and blockers to plan for.",componentIds:["case_for_change","resistance"]},{id:"impacted",question:"Who's going to be impacted by the change?",framework:"Stakeholder Analysis & Change Impact Analysis",description:"Everyone affected by the change, and how deeply it affects them.",componentIds:["stakeholder","change_impact"]},{id:"leading",question:"Who's leading the change?",framework:"Sponsor Coalition & Change Network",description:"The visible leaders and the network of champions carrying the change day to day.",componentIds:["sponsorship","change_network"]},{id:"persuade",question:"How will we persuade people to change?",framework:"Case for Change",description:"The compelling narrative that wins hearts and minds.",componentIds:["case_for_change"]}],Xt="nhs-digital-adoption-introduction-complete",Nl=[{title:"Handling Resistance",body:"Helping project managers navigate potential roadblocks and maintain project momentum through identifying and addressing resistance using effective communication, stakeholder engagement, and mitigation strategies."},{title:"Engaging Stakeholders",body:"Identifying key individuals and groups affected by the project and working closely with them to understand concerns, gather feedback, and ensure their perspectives are considered."},{title:"Communicating and Raising Awareness",body:"Developing engagement and communication plans that support project managers in creating clear and consistent messaging about the project's purpose, goals, and benefits."},{title:"Managing Expectations",body:"Setting realistic expectations for stakeholders regarding project outcomes, timelines, and potential disruptions by addressing concerns, clarifying misconceptions, and managing expectations."},{title:"Ensuring Change Readiness",body:"Assessing the readiness of an organisation or team for change and developing strategies to bridge any gaps."},{title:"Mitigating Risks",body:"Through anticipating and addressing risks associated with change, such as resistance, lack of stakeholder support, or unexpected obstacles."},{title:"Adopting Change Sustainably",body:"Supporting project managers in developing strategies to embed the changes into the organisation's culture, processes, and systems."}];function kl(n){const t=n?"text-slate-300":"text-slate-700";return[{title:"What is the Adoption Engine?",body:e.jsxs("div",{className:`text-sm space-y-2 ${t}`,children:[e.jsx("p",{children:"Going live with a new digital product isn't the finish line - people still need to adopt it, change how they work, and keep using it."}),e.jsx("p",{children:"The Adoption Engine helps you track how people and teams are adopting the change before go-live, during rollout, and after launch so progress is visible and outcomes are measurable."}),e.jsx("p",{children:"It helps you answer four simple questions:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"Where are we going?"}),e.jsx("li",{children:"How will we know we've got there?"}),e.jsx("li",{children:"What needs to be in place?"}),e.jsx("li",{children:"What should we do next?"})]}),e.jsx("p",{children:"The goal is not just to implement change, but to ensure it is adopted, embedded and delivering benefits."})]})},{title:"What benefit does this tool give me?",body:e.jsxs("div",{className:`text-sm space-y-2 ${t}`,children:[e.jsx("p",{children:"Without it, adoption progress lives in scattered spreadsheets, memories and gut feel - hard to prove, hard to hand over, and easy to lose momentum on."}),e.jsx("p",{children:"With it, you get a single, evidenced picture of where your change effort actually stands:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1",children:[e.jsx("li",{children:"See at a glance what's on track, what's at risk, and what to do next."}),e.jsx("li",{children:`Turn vague "how's it going?" conversations into a clear, evidence-backed status you can show your sponsor or board.`}),e.jsx("li",{children:"Get a ready-made action plan for each area, so you're not starting from a blank page."}),e.jsx("li",{children:"Build a highlight report in minutes instead of an afternoon of copy-pasting."})]})]})},{title:"Context Specific Templates (CSTs)",body:e.jsxs("div",{className:`text-sm space-y-2 ${t}`,children:[e.jsx("p",{children:"A CST (Context Specific Template) contains the information that makes the Adoption Engine specific to your project, programme or initiative."}),e.jsx("p",{children:"It captures key information such as your scope, milestones, outcomes and benefits, and tailors the guidance, actions and resources provided."}),e.jsxs("p",{children:["You can update your project setup at any time from"," ",e.jsx("strong",{className:n?"text-slate-100":"text-slate-900",children:"Project Profile"}),"."]})]})},{title:"What is Change Management?",body:e.jsxs("div",{className:`text-sm space-y-2 ${t}`,children:[e.jsx("p",{children:"Change management is the structured discipline of helping people move from how things work today to how they'll work in future - deliberately, not by accident."}),e.jsx("p",{children:"A new system, process or way of working only delivers its benefits once people actually adopt it. Change management is the set of activities - building the case, engaging stakeholders, communicating, training, reinforcing - that make that adoption happen, rather than leaving it to chance."}),e.jsx("p",{children:"It sits alongside project management: project management delivers the change itself (the system, the process); change management makes sure the people affected by it are ready, willing and able to use it."})]})},{title:"What is a Change Manager?",body:e.jsxs("div",{className:`text-sm space-y-4 ${t}`,children:[e.jsx("p",{children:"Change management (and change managers) provide essential assistance to project managers through:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:Nl.map(s=>e.jsxs("div",{className:`rounded-md border p-4 ${n?"border-slate-700 bg-slate-900":"border-slate-100 bg-slate-50"}`,children:[e.jsx("p",{className:"text-sm font-semibold text-[#005eb8] mb-1",children:s.title}),e.jsx("p",{className:`text-xs leading-relaxed ${n?"text-slate-300":"text-slate-600"}`,children:s.body})]},s.title))})]})},{title:"The 6 Key Questions",body:e.jsxs("div",{className:`text-sm space-y-4 ${t}`,children:[e.jsx("p",{children:"Six questions worth returning to throughout the life of the programme, each backed by a change model."}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-2",children:wl.map((s,a)=>e.jsxs("div",{className:`rounded-md border p-4 ${n?"border-slate-700 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"shrink-0 w-7 h-7 rounded-full bg-blue-100 text-[#005eb8] text-xs font-bold flex items-center justify-center",children:["Q",a+1]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${n?"text-slate-100":"text-slate-800"}`,children:s.question}),e.jsx("span",{className:`mt-1 inline-block rounded border px-2 py-0.5 text-xs font-medium ${n?"border-indigo-500/40 bg-indigo-500/15 text-indigo-200":"border-indigo-200 bg-indigo-50 text-indigo-700"}`,children:s.framework})]})]}),e.jsx("p",{className:`mt-3 text-xs leading-relaxed ${n?"text-slate-300":"text-slate-600"}`,children:s.description})]},s.id))})]})}]}function Cl({darkMode:n=!1,onGetStarted:t}){const s=kl(n),a=!!Sn(Xt),[i,l]=m.useState(0),[r,o]=m.useState(a?s.length-1:0),u=i===s.length-1,h=r>=s.length-1,d=x=>{x<=r&&l(x)},c=()=>{const x=Math.min(s.length-1,i+1);l(x),o(b=>{const w=Math.max(b,x);return w>=s.length-1&&sn(Xt,!0),w})};return e.jsxs("div",{className:"w-full space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${n?"text-slate-100":"text-slate-800"}`,children:"Introduction"}),e.jsx("p",{className:`mt-2 text-sm ${n?"text-slate-300":"text-slate-600"}`,children:"A few quick steps before you get started - each one unlocks the next."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",role:"tablist","aria-label":"Introduction steps",children:s.map((x,b)=>{const w=b<=r,R=b===i;return e.jsxs("button",{type:"button",role:"tab","aria-selected":R,"aria-disabled":!w,disabled:!w,onClick:()=>d(b),className:`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${R?"border-[#005eb8] bg-[#005eb8] text-white":w?n?"border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100":n?"border-slate-800 bg-slate-900 text-slate-600 cursor-not-allowed":"border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed"}`,children:[e.jsx("span",{className:`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${R?"bg-white text-[#005eb8]":w?"bg-[#005eb8]/10 text-[#005eb8]":""}`,children:b+1}),x.title]},x.title)})}),e.jsx("section",{className:`w-full overflow-hidden rounded-xl border shadow-sm ${n?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:e.jsxs("div",{className:"p-6 sm:p-10",children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${n?"text-blue-300":"text-blue-700"}`,children:["Step ",i+1," of ",s.length]}),e.jsx("h3",{className:`mt-1 text-2xl font-bold ${n?"text-slate-100":"text-slate-900"}`,children:s[i].title}),e.jsx("div",{className:"mt-5 max-w-full",children:s[i].body}),e.jsxs("div",{className:"mt-8 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:()=>l(x=>Math.max(0,x-1)),disabled:i===0,className:`rounded-md border px-4 py-2 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${n?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Back"}),u?e.jsx("button",{type:"button",onClick:t,disabled:!h,className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] disabled:cursor-not-allowed disabled:opacity-50",children:"Get Started"}):e.jsx("button",{type:"button",onClick:c,className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]",children:"Next"})]})]})})]})}const wa={1:"Pre go-live planning and early mobilisation.",2:"Go-live readiness and immediate launch support.",3:"Early adoption reinforcement and consistency.",4:"Embedding new ways of working across teams.",5:"Sustained adoption and benefits realisation at scale."},jl={1:"Low confidence",2:"Some confidence",3:"Moderate confidence",4:"High confidence",5:"Very high confidence"},El={E:"Not started embedding",D:"Early adoption in practice",C:"Partly embedded in practice",B:"Mostly embedded in practice",A:"Well embedded in practice"};function Il(n){return n>=4?"high":n===3?"average":"below"}function Al(n){return n==="A"||n==="B"?"high":n==="C"?"average":"below"}function Ol(n,t){const s=Al(n),a=Il(t),i=s==="high"&&a==="high",l=s==="below"&&a==="below",r=s==="high"&&a!=="below"||a==="high"&&s!=="below";return i?"Blue":l?"Red":r?"Green":"Amber"}const Tt=4;function _l({orgProfile:n,onProfileUpdate:t,userSettings:s,onUserSettingsUpdate:a,currentUserId:i,onCurrentUserChange:l,objectives:r=[],darkMode:o=!1}){const[u,h]=m.useState(n),[d,c]=m.useState(s),[x,b]=m.useState(0),[w,R]=m.useState(null),[O,f]=m.useState(!1),I=m.useRef(null),H=pn("profile");m.useEffect(()=>{h(n)},[n]),m.useEffect(()=>{c(s)},[s]);const C=m.useCallback(L=>{const Y={...d,...L};c(Y),a(Y)},[d,a]),j=async L=>{var re;const Y=(re=L.target.files)==null?void 0:re[0];if(!Y)return;const te=await new Promise((P,G)=>{const Ne=new FileReader;Ne.onload=()=>P(String(Ne.result||"")),Ne.onerror=()=>G(new Error("Unable to read selected profile image.")),Ne.readAsDataURL(Y)});C({profileImageDataUrl:te}),b(P=>P+1)},y=()=>{C({profileImageDataUrl:void 0})},Z=m.useCallback((L,Y,te)=>{const re=u.cst.phaseCapability[L]||{competence:"C",confidence:3},P={...u,cst:{...u.cst,phaseCapability:{...u.cst.phaseCapability,[L]:{competence:re.competence,confidence:re.confidence,assessedAt:new Date().toISOString(),reason:"manual",[Y]:te}}}};h(P),t(P)},[u,t]);return e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-800"}`,children:"Profile"}),e.jsx(yn,{onClick:H.reopen,darkMode:o})]}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Your identity, progress towards your objectives, and confidence/capability self-assessment."}),e.jsx(vn,{open:H.isOpen,onClose:H.close,title:"Profile",darkMode:o,body:e.jsx("p",{children:"Set your name, preferences and picture, see how many objectives are complete, and record your team's confidence and delivery-readiness capability at each phase."})}),r.length>0&&e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-3`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Objectives"}),e.jsxs("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:[r.filter(L=>L.completed).length,"/",r.length," complete - based on phase readiness, ownership, cadence and team participation."]})]}),e.jsx("div",{className:"space-y-2",children:(O?r:r.slice(0,Tt)).map(L=>e.jsxs("div",{className:`rounded-lg border p-3 ${L.completed?"border-green-200 bg-green-50":o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:L.label}),e.jsx("span",{className:"text-xs font-bold shrink-0",children:L.completed?"Done":"Not yet"})]}),e.jsx("p",{className:`mt-1 text-xs ${o?"text-slate-300":"text-slate-600"}`,children:L.description})]},L.id))}),r.length>Tt&&e.jsx("button",{type:"button",onClick:()=>f(L=>!L),className:`text-sm font-semibold underline ${o?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:O?"Show fewer":`Show ${r.length-Tt} more`})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-5`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Your Profile"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"These details personalise your experience and reports."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-current-member",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"You are signed in as"}),(n.teamMembers||[]).length>0?e.jsxs("select",{id:"user-current-member",value:i||"",onChange:L=>l(L.target.value),className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Not selected"}),(n.teamMembers||[]).map(L=>e.jsxs("option",{value:L.id,children:[L.name||"Unnamed",L.role?` - ${L.role}`:""]},L.id))]}):e.jsx("p",{className:`text-sm ${o?"text-slate-400":"text-slate-500"}`,children:"No team members have been added yet. Add yourself under CST Details → Team Members to link your profile."})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-sm font-medium mb-2 ${o?"text-slate-200":"text-slate-700"}`,children:"Profile Picture"}),e.jsxs("div",{className:"flex items-start gap-4",children:[d.profileImageDataUrl?e.jsx("img",{src:d.profileImageDataUrl,alt:"Profile",className:"h-20 w-20 rounded-md border border-slate-300 object-cover"}):e.jsx("div",{className:"h-20 w-20 rounded-md border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center",children:e.jsx("span",{className:"text-xs text-slate-500",children:"No image"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{type:"button",onClick:()=>{var L;return(L=I.current)==null?void 0:L.click()},className:`rounded-md px-3 py-2 text-sm font-medium transition-colors ${o?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:d.profileImageDataUrl?"Change Picture":"Upload Picture"}),d.profileImageDataUrl?e.jsx("button",{type:"button",onClick:y,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${o?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"}`,children:"Remove"}):null,e.jsx("input",{ref:I,type:"file",accept:"image/*",className:"hidden",onChange:j},x)]})]})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Confidence and Capability by Phase"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Capture your starting position, then refresh when readiness phase changes or after major milestones."})]}),e.jsxs("div",{className:"rounded-md border border-blue-200 bg-blue-50 p-3 text-xs text-blue-900",children:[e.jsx("p",{className:"font-semibold",children:"How this self-assessment works"}),e.jsx("p",{className:"mt-1",children:"Confidence is how sure your team feels. Delivery readiness is how embedded the new way of working is in practice."}),e.jsx("p",{className:"mt-1",children:"Cards use BRAG backgrounds: Blue = both high, Green = one high and the other at least average, Amber = neither high, Red = both below average."})]}),e.jsx("div",{className:"space-y-3",children:$a.map(L=>{const Y=u.cst.phaseCapability[L]||{competence:"C",confidence:3},te=Ol(Y.competence,Y.confidence),re=te==="Blue"?"border-sky-300 bg-sky-50":te==="Green"?"border-emerald-300 bg-emerald-50":te==="Red"?"border-red-300 bg-red-50":"border-amber-300 bg-amber-50",P=te==="Blue"?"text-sky-800 bg-sky-100":te==="Green"?"text-emerald-800 bg-emerald-100":te==="Red"?"text-red-800 bg-red-100":"text-amber-800 bg-amber-100";return e.jsxs("div",{className:`${o?"border-slate-700 bg-slate-800":re} rounded-md border p-3`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{className:"relative flex items-center gap-2",children:[e.jsxs("span",{className:`font-semibold ${o?"text-slate-100":"text-slate-700"}`,children:["Phase ",L]}),e.jsx("button",{type:"button",onMouseEnter:()=>R(L),onMouseLeave:()=>R(G=>G===L?null:G),onFocus:()=>R(L),onBlur:()=>R(G=>G===L?null:G),onClick:()=>R(G=>G===L?null:L),className:"h-5 w-5 rounded-full border border-slate-300 text-xs font-semibold text-slate-600","aria-expanded":w===L,"aria-controls":`phase-help-${L}`,"aria-label":`Phase ${L} guidance`,children:"i"}),w===L?e.jsx("div",{id:`phase-help-${L}`,role:"tooltip",className:"absolute left-0 top-7 z-10 w-72 rounded-md border border-slate-200 bg-slate-900 px-3 py-2 text-xs text-white shadow-xl",children:wa[L]}):null]}),e.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-slate-700 text-slate-100":P}`,children:te})]}),e.jsx("p",{className:`mt-1 text-xs ${o?"text-slate-300":"text-slate-600"}`,children:wa[L]}),e.jsxs("div",{className:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm",children:[e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:"Delivery readiness"}),e.jsx("select",{value:Y.competence,onChange:G=>Z(L,"competence",G.target.value),className:`w-full rounded-md border px-2 py-2 pr-10 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Ui.map(G=>e.jsxs("option",{value:G,children:[El[G]," (",G,")"]},`${L}-competence-${G}`))})]}),e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:"Confidence"}),e.jsx("select",{value:Y.confidence,onChange:G=>Z(L,"confidence",Number(G.target.value)),className:`w-full rounded-md border px-2 py-2 pr-10 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Wi.map(G=>e.jsxs("option",{value:G,children:[jl[G]," (",G,")"]},`${L}-confidence-${G}`))})]})]})]},`phase-capability-${L}`)})})]})]})}const Rl=[{name:"NHS Blue",color:"#005eb8"},{name:"Navy",color:"#003366"},{name:"Teal",color:"#009b8a"},{name:"Purple",color:"#6c28d9"},{name:"Green",color:"#059669"},{name:"Red",color:"#dc2626"}];function Pl({userSettings:n,onUserSettingsUpdate:t,onLoadExampleData:s,onResetData:a,darkMode:i=!1}){const[l,r]=m.useState(n),o=pn("settings");m.useEffect(()=>{r(n)},[n]);const u=m.useCallback(d=>{const c={...l,...d};r(c),t(c)},[l,t]),h=d=>{u({themeColor:d})};return e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:`text-2xl font-bold ${i?"text-slate-100":"text-slate-800"}`,children:"Settings"}),e.jsx(yn,{onClick:o.reopen,darkMode:i})]}),e.jsx("p",{className:`text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Use this page to manage app appearance, guidance preferences, and data/support options."}),e.jsx(vn,{open:o.isOpen,onClose:o.close,title:"Settings",darkMode:i,body:e.jsx("p",{children:"Manage app-wide appearance (theme, dark mode, guided-workflow and guidance-link preferences) and data/support tools like example data, reset, and bug reporting. For your personal profile and engagement progress, see the Profile page."})}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Appearance"}),e.jsx("p",{className:`mt-1 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Choose the theme colour you want to use throughout the app."})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-1",children:[e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Dark mode"}),e.jsx("input",{type:"checkbox",checked:!!l.darkMode,onChange:d=>u({darkMode:d.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show guided workflow tips on each component"}),e.jsx("input",{type:"checkbox",checked:!l.hideGuidedWorkflow,onChange:d=>u({hideGuidedWorkflow:!d.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show additional guidance links (alongside core links)"}),e.jsx("input",{type:"checkbox",checked:l.showAdditionalGuidanceLinks!==!1,onChange:d=>u({showAdditionalGuidanceLinks:d.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show external links section (Project Profile, even after marked initiated)"}),e.jsx("input",{type:"checkbox",checked:l.showExternalLinksSection===!0,onChange:d=>u({showExternalLinksSection:d.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Highlight Must/Should actions on component pages (red/yellow background - Pathway 1 only)"}),e.jsx("input",{type:"checkbox",checked:l.showActionPriorityColours===!0,onChange:d=>u({showActionPriorityColours:d.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`text-sm ${i?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-medium",children:"Status colour profile"}),e.jsxs("select",{value:l.colorAccessibilityMode||"standard",onChange:d=>u({colorAccessibilityMode:d.target.value}),className:`w-full rounded-md border p-2 pr-10 ${i?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"standard",children:"Standard"}),e.jsx("option",{value:"color-blind-friendly",children:"Color-blind friendly"})]})]})]}),e.jsx("p",{className:`text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Color-blind friendly mode keeps BRAG labels in text and shifts status colors to higher-contrast alternatives."}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-theme-colour",className:`block text-sm font-medium mb-1 ${i?"text-slate-200":"text-slate-700"}`,children:"Theme Colour"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:Rl.map(d=>e.jsxs("button",{type:"button",onClick:()=>h(d.color),className:"flex items-center gap-2 rounded-md border-2 px-3 py-2 text-sm",style:{borderColor:l.themeColor===d.color?d.color:"#e2e8f0",backgroundColor:l.themeColor===d.color?`${d.color}22`:"transparent"},children:[e.jsx("span",{className:"h-4 w-4 rounded-sm border border-slate-300",style:{backgroundColor:d.color}}),e.jsx("span",{children:d.name})]},d.color))}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{id:"user-theme-colour",type:"color",className:"h-10 w-14 rounded border border-slate-300 p-1 cursor-pointer",value:l.themeColor,onChange:d=>u({themeColor:d.target.value})}),e.jsx("span",{className:`text-sm font-mono ${i?"text-slate-200":"text-slate-600"}`,children:l.themeColor})]})]})]})]}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Data and Support"}),e.jsx("p",{className:`mt-1 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Load sample data, reset local data, read FAQs, or report an issue."})]}),e.jsxs("div",{className:`${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("h4",{className:`text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Data Tools"}),e.jsxs("div",{className:"mt-3 flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>s("red"),className:"inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-800 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors",children:"Early Stage Example"}),e.jsx("button",{onClick:()=>s("amber"),className:"inline-flex items-center justify-center rounded-md bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800 border border-amber-200 shadow-[0_3px_0_#fde68a] hover:bg-amber-100 transition-colors",children:"Progressing Example"}),e.jsx("button",{onClick:()=>s("green"),className:"inline-flex items-center justify-center rounded-md bg-green-50 px-4 py-2 text-sm font-semibold text-green-800 border border-green-200 shadow-[0_3px_0_#bbf7d0] hover:bg-green-100 transition-colors",children:"Exemplar Example"})]}),e.jsx("div",{className:"mt-3 flex flex-wrap gap-3",children:e.jsx("button",{onClick:a,className:`inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors ${Qt}`,children:"Reset Data"})}),e.jsx("p",{className:`mt-2 text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Each Example Data button loads a full sample assessment at a different maturity stage, so you can explore the dashboards and workflows quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"How is my data stored?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Your settings and assessment state are stored locally in your browser using local storage."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"What does Example Data do?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Each button populates the tool with a full sample assessment at that maturity stage (Red: early stage, Amber: progressing, Green: near exemplar) so you can explore dashboards and workflows quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"Can I change the theme colour later?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Yes. Update the theme colour at any time in User Settings and it is applied immediately."})]}),e.jsxs("div",{className:`rounded-md border p-4 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("h4",{className:`mb-2 text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Submit a Bug"}),e.jsx("p",{className:`mb-3 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Found an issue? Send details directly via email."}),e.jsx("a",{href:"mailto:andrew.fraser22@kpmg.co.uk?subject=NHS%20Digital%20Adoption%20Tool%20Bug",className:`inline-flex rounded-md px-4 py-2 text-sm font-medium transition-colors ${i?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:"Report Bug"})]})]})]})}const Na=[{phase:1,statement:"We've defined our vision for this change and have a case for why it's needed."},{phase:2,statement:"We've analysed the impact of the change and planned our engagement and communications approach."},{phase:3,statement:"We have a full change management plan in place, ready to execute."},{phase:4,statement:"We're actively delivering the change - communicating, training, and rolling out new ways of working."},{phase:5,statement:"The change has gone live and we're now focused on reinforcing it and making it stick."}];function Dl({component:n,getEntry:t,phase:s,darkMode:a}){const i=m.useRef(null);return m.useEffect(()=>{if(!i.current)return;const l=Yn(n.id,s,n.target),r=a?"#e2e8f0":"#0b1220",o=a?"rgba(226,232,240,0.10)":"rgba(11,18,32,0.06)";Dr(i.current,{labels:n.lenses,datasets:[{label:"Current",data:n.lenses.map(u=>Number(t(n.id,u).score||0)),backgroundColor:"#005EB8"},{label:"Target",data:n.lenses.map(()=>l),backgroundColor:"transparent",borderColor:"#94a3b8",borderWidth:2,borderDash:[5,5]}]},{indexAxis:"y",scales:{x:{min:0,max:5,grid:{color:o},ticks:{color:r,stepSize:1,callback:u=>On(Number(u)).label}},y:{grid:{display:!1},ticks:{color:r,font:{size:11}}}}})},[n,s,a]),e.jsxs("div",{className:`rounded-md border p-3 ${a?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("p",{className:`text-xs font-semibold ${a?"text-slate-200":"text-slate-700"}`,children:n.label}),e.jsx("div",{style:{height:Math.max(400,n.lenses.length*60)},className:"mt-2",children:e.jsx("canvas",{ref:i,className:"block h-full w-full"})})]})}function $l({components:n,getEntry:t,effectivePhaseFocus:s,phaseFocusMode:a,onComponentClick:i,onSetManualPhase:l,onResetToAuto:r,darkMode:o=!1}){const[u,h]=m.useState({}),[d,c]=m.useState("by-component"),[x,b]=m.useState(it[0]),w=m.useRef(null),R=m.useRef(null),O={display:!0,stepSize:1,backdropColor:"transparent",callback:y=>Number(y)<0?"":On(Number(y)).label};m.useEffect(()=>{if(d!=="by-component"||!w.current)return;const y=Vt(n,t,s);Kn(w.current,y,{maintainAspectRatio:!1,scales:{r:{min:-1,max:5,ticks:O,pointLabels:{padding:28}}}},Z=>{const L=n[Z];L&&i(L.id)})},[n,t,s,i,d]),m.useEffect(()=>{if(d!=="by-lens"||!R.current)return;const y=n.filter(L=>L.lenses.includes(x)),Z=Vt(y,t,s,x);Kn(R.current,Z,{maintainAspectRatio:!1,scales:{r:{min:-1,max:5,ticks:O,pointLabels:{padding:28}}}},L=>{const Y=y[L];Y&&i(Y.id)})},[n,t,s,i,d,x]);const f=m.useMemo(()=>Nt(s),[s]),I=m.useMemo(()=>{const y=Na.filter(Z=>u[Z.phase]).map(Z=>Z.phase);return y.length?Math.max(...y):1},[u]),H=m.useMemo(()=>n.find(y=>{const Z=y.lenses.map(Y=>Number(t(y.id,Y).score||0));return(Z.length?Math.min(...Z):0)<5})||null,[n,t]),C=Object.values(u).some(Boolean),j=o?"text-slate-300":"text-slate-600";return m.useEffect(()=>{C&&l(I)},[C,I]),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-800"}`,children:"Where am I now?"}),e.jsx("p",{className:`mt-2 text-sm ${j}`,children:"Tick every statement that's true for your programme today, and see your readiness by component - both feed into which of the 5 change phases you're really in."})]}),e.jsx("div",{className:`rounded-lg border shadow-sm ${o?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-900"}`,children:"Which of these is true for you?"}),e.jsx("div",{className:"mt-4 space-y-3",children:Na.map(y=>e.jsxs("label",{className:`flex items-start gap-3 rounded-md border p-3 cursor-pointer ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("input",{type:"checkbox",checked:!!u[y.phase],onChange:Z=>h(L=>({...L,[y.phase]:Z.target.checked})),className:"mt-1 h-4 w-4"}),e.jsxs("span",{children:[e.jsxs("span",{className:`block text-xs font-semibold uppercase tracking-wider ${o?"text-blue-300":"text-blue-700"}`,children:["Phase ",y.phase,": ",Qe[y.phase]]}),e.jsx("span",{className:`block text-sm ${o?"text-slate-200":"text-slate-700"}`,children:y.statement})]})]},y.phase))}),C?e.jsx("div",{className:`mt-5 rounded-md border p-4 ${o?"border-blue-500/30 bg-blue-500/10":"border-blue-200 bg-blue-50"}`,children:e.jsxs("p",{className:`text-sm ${o?"text-blue-100":"text-blue-900"}`,children:["Based on your answers, we've set your phase as"," ",e.jsxs("strong",{children:["Phase ",I,": ",Qe[I]]}),". Please look below for where we expect each component at this phase level."]})}):null,e.jsxs("p",{className:`mt-3 text-xs ${o?"text-slate-400":"text-slate-500"}`,children:["Currently tracking"," ",e.jsxs("strong",{children:["Phase ",s,": ",Qe[s]]})," ","(",a==="manual"?"set manually":"auto-detected from delivery progress",").",a==="manual"?e.jsx("button",{type:"button",onClick:r,className:"ml-2 font-semibold text-[#005eb8] hover:underline",children:"Reset to auto"}):null]})]})}),e.jsx("div",{className:`rounded-lg border shadow-sm ${o?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-900"}`,children:"Readiness by component"}),e.jsx("div",{className:`mt-3 flex gap-1 rounded-md border p-1 text-sm font-semibold ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,role:"tablist","aria-label":"Readiness by component view",children:[{id:"by-component",label:"By Component"},{id:"by-lens",label:"By Lens"},{id:"by-phases",label:"By Phases"}].map(y=>e.jsx("button",{type:"button",role:"tab","aria-selected":d===y.id,onClick:()=>c(y.id),className:`flex-1 rounded px-3 py-1.5 transition-colors ${d===y.id?"bg-[#005eb8] text-white":o?"text-slate-300 hover:bg-slate-800":"text-slate-600 hover:bg-white"}`,children:y.label},y.id))}),d==="by-component"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:`mt-3 text-xs ${j}`,children:"Each component is scored by its weakest lens - click a label to jump to that component's assessment."}),e.jsx("div",{className:`mx-auto mt-4 flex items-center justify-center rounded border p-2 ${o?"border-slate-700 bg-slate-950":"border-slate-100 bg-slate-50"}`,style:{height:720},children:e.jsx("canvas",{ref:w,className:"block h-full w-full"})}),e.jsx("p",{className:`mt-4 text-center text-sm italic ${j}`,children:H?`We suggest picking up next at ${H.label}, then working outward from there.`:"Every component has reached full readiness on its weakest lens - nice work."}),e.jsx("div",{className:"mt-4 flex justify-center",children:H?e.jsxs("button",{type:"button",onClick:()=>i(H.id),className:"rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]",children:["Let's check out our ",H.label," component"]}):null})]}):null,d==="by-lens"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:`mt-3 text-xs ${j}`,children:"Pick a lens to see every component's readiness through that one lens, against the expected level."}),e.jsx("div",{className:"mt-3 flex flex-wrap gap-x-4 gap-y-2",role:"radiogroup","aria-label":"Choose a lens",children:it.map(y=>e.jsxs("label",{className:`flex items-center gap-1.5 text-xs font-medium ${o?"text-slate-200":"text-slate-700"}`,children:[e.jsx("input",{type:"radio",name:"where-am-i-now-lens",checked:x===y,onChange:()=>b(y),className:"h-3.5 w-3.5"}),y]},y))}),e.jsx("div",{className:`mx-auto mt-4 flex items-center justify-center rounded border p-2 ${o?"border-slate-700 bg-slate-950":"border-slate-100 bg-slate-50"}`,style:{height:720},children:e.jsx("canvas",{ref:R,className:"block h-full w-full"})})]}):null,d==="by-phases"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:`mt-3 text-xs ${j}`,children:["Every component in Phase ",s,": ",Qe[s],", with a bar per lens and a dashed target bar for where it's expected to be."]}),e.jsx("div",{className:"mt-4 grid grid-cols-1 gap-3",children:f.map(y=>e.jsx(Dl,{component:y,getEntry:t,phase:s,darkMode:o},y.id))})]}):null]})})]})}function Tl(n){return{id:`audit:${Date.now()}-${Math.random().toString(36).slice(2,8)}`,timestamp:new Date().toISOString(),actor:n.actor,eventType:n.eventType,entityType:n.entityType,entityId:n.entityId,summary:n.summary,trustName:n.trustName,projectName:n.projectName,componentId:n.componentId,lens:n.lens,reason:n.reason,before:n.before,after:n.after,source:n.source||"local",importedAt:n.importedAt}}const Ll=1e4;function Ct(n,t=Ll){return n.length<=t?n:n.slice(n.length-t)}const ka="nhs-digital-adoption-store",Bl=new Set(["pathway-1","pathway-2","pathway-3"]);function fi(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function He(n,t){if(!fi(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected object.`)}function X(n,t){if(n!==void 0&&typeof n!="string")throw new Error(`Invalid adoption assessment payload at ${t}: expected string.`)}function bi(n,t){if(n!==void 0&&typeof n!="number")throw new Error(`Invalid adoption assessment payload at ${t}: expected number.`)}function cs(n,t){if(n!==void 0&&!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`)}function xi(n,t){He(n,t),X(n.id,`${t}.id`),X(n.text,`${t}.text`),X(n.owner,`${t}.owner`),X(n.timescale,`${t}.timescale`),X(n.status,`${t}.status`),X(n.notes,`${t}.notes`),X(n.evidence,`${t}.evidence`)}function Ml(n,t){He(n,t),bi(n.score,`${t}.score`),X(n.justification,`${t}.justification`),X(n.evidence,`${t}.evidence`),cs(n.actions,`${t}.actions`),(n.actions||[]).forEach((s,a)=>{xi(s,`${t}.actions[${a}]`)})}function Si(n,t){He(n,t),Object.keys(n).forEach(s=>{const a=n[s];He(a,`${t}.${s}`),Object.keys(a).forEach(i=>{Ml(a[i],`${t}.${s}.${i}`)})})}function Gl(n,t){He(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((i,l)=>{He(i,`${t}.${s}[${l}]`),X(i.id,`${t}.${s}[${l}].id`),X(i.text,`${t}.${s}[${l}].text`),X(i.owner,`${t}.${s}[${l}].owner`),X(i.timescale,`${t}.${s}[${l}].timescale`),X(i.notes,`${t}.${s}[${l}].notes`),X(i.evidence,`${t}.${s}[${l}].evidence`),cs(i.linkedActions,`${t}.${s}[${l}].linkedActions`),(i.linkedActions||[]).forEach((r,o)=>{He(r,`${t}.${s}[${l}].linkedActions[${o}]`),X(r.lens,`${t}.${s}[${l}].linkedActions[${o}].lens`),X(r.actionId,`${t}.${s}[${l}].linkedActions[${o}].actionId`)})})})}function Fl(n,t){He(n,t),Object.keys(n).forEach(s=>{const a=n[s];He(a,`${t}.${s}`),["pathway-1","pathway-2","pathway-3"].forEach(i=>{const l=a[i];cs(l,`${t}.${s}.${i}`),(l||[]).forEach((r,o)=>{if(typeof r!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}.${i}[${o}]: expected string.`)})})})}function Ul(n,t){He(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((i,l)=>{if(typeof i!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}[${l}]: expected string.`)})})}function Wl(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{He(s,`${t}[${a}]`),X(s.id,`${t}[${a}].id`),X(s.removedAt,`${t}[${a}].removedAt`),X(s.reason,`${t}[${a}].reason`),X(s.componentId,`${t}[${a}].componentId`),X(s.lens,`${t}[${a}].lens`),X(s.actionId,`${t}[${a}].actionId`),X(s.actionText,`${t}[${a}].actionText`),X(s.actionType,`${t}[${a}].actionType`)})}function Hl(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{He(s,`${t}[${a}]`),X(s.id,`${t}[${a}].id`),X(s.timestamp,`${t}[${a}].timestamp`),X(s.actor,`${t}[${a}].actor`),X(s.eventType,`${t}[${a}].eventType`),X(s.entityType,`${t}[${a}].entityType`),X(s.entityId,`${t}[${a}].entityId`),X(s.summary,`${t}[${a}].summary`),X(s.trustName,`${t}[${a}].trustName`),X(s.projectName,`${t}[${a}].projectName`),X(s.componentId,`${t}[${a}].componentId`),X(s.lens,`${t}[${a}].lens`),X(s.reason,`${t}[${a}].reason`),X(s.source,`${t}[${a}].source`),X(s.importedAt,`${t}[${a}].importedAt`)})}function Vl(n,t){if(He(n,t),X(n.trustName,`${t}.trustName`),X(n.region,`${t}.region`),X(n.trustType,`${t}.trustType`),X(n.projectName,`${t}.projectName`),X(n.leadName,`${t}.leadName`),X(n.cstId,`${t}.cstId`),n.cst!==void 0){if(He(n.cst,`${t}.cst`),X(n.cst.type,`${t}.cst.type`),X(n.cst.pathway,`${t}.cst.pathway`),typeof n.cst.pathway=="string"&&!Bl.has(n.cst.pathway))throw new Error(`Invalid adoption assessment payload at ${t}.cst.pathway: unexpected value "${n.cst.pathway}".`);if(X(n.cst.goLiveDate,`${t}.cst.goLiveDate`),X(n.cst.fullAdoptionDate,`${t}.cst.fullAdoptionDate`),X(n.cst.benefitRealizationDate,`${t}.cst.benefitRealizationDate`),X(n.cst.toolkitChoice,`${t}.cst.toolkitChoice`),typeof n.cst.toolkitChoice=="string"&&!Hi(n.cst.toolkitChoice))throw new Error(`Invalid adoption assessment payload at ${t}.cst.toolkitChoice: unexpected value "${n.cst.toolkitChoice}".`)}}function ql(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{He(s,`${t}[${a}]`),X(s.monthLabel,`${t}[${a}].monthLabel`),bi(s.overallPercentage,`${t}[${a}].overallPercentage`),s.data!==void 0&&Si(s.data,`${t}[${a}].data`)})}function Yl(n,t){He(n,t),Object.keys(n).forEach(s=>{if(typeof n[s]!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected string.`)})}function Kl(n,t){He(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((i,l)=>{xi(i,`${t}.${s}[${l}]`)})})}function bt(n){if(!fi(n))throw new Error("Invalid adoption assessment payload at root: expected object.");return X(n.schemaVersion,"schemaVersion"),X(n.exportedAt,"exportedAt"),n.orgProfile!==void 0&&Vl(n.orgProfile,"orgProfile"),n.currentDraft!==void 0&&Si(n.currentDraft,"currentDraft"),n.objectives!==void 0&&Gl(n.objectives,"objectives"),n.auditLog!==void 0&&Hl(n.auditLog,"auditLog"),n.suppressedAutoActions!==void 0&&Ul(n.suppressedAutoActions,"suppressedAutoActions"),n.actionAuditLog!==void 0&&Wl(n.actionAuditLog,"actionAuditLog"),n.history!==void 0&&ql(n.history,"history"),n.phaseOverrides!==void 0&&Yl(n.phaseOverrides,"phaseOverrides"),n.pathwayChecks!==void 0&&Fl(n.pathwayChecks,"pathwayChecks"),n.componentActions!==void 0&&Kl(n.componentActions,"componentActions"),n}function Ca(n){return{schemaVersion:"4.0",exportedAt:new Date().toISOString(),orgProfile:{...n.orgProfile},currentDraft:at(n.currentDraft),objectives:vi(n.objectives),auditLog:Zl(n.auditLog),suppressedAutoActions:wi(n.suppressedAutoActions),history:n.history.map(t=>({...t,data:at(t.data)})),phaseOverrides:{...n.phaseOverrides},pathwayChecks:yi(n.pathwayChecks)}}function zl(n){const t=n.componentActions;if(t)return Object.keys(t).reduce((s,a)=>(s[a]=(t[a]||[]).map(i=>({id:String(i.id??`${Date.now()}-${Math.random().toString(36).slice(2,8)}`),text:String(i.text||""),owner:String(i.owner||""),timescale:String(i.timescale||""),notes:String(i.notes||""),evidence:String(i.evidence||""),linkedActions:[]})),s),{})}function Jl(n,t){return n!=null&&n.length?n.map(s=>({id:`legacy-${s.id}`,timestamp:s.removedAt,actor:"Unknown user",eventType:"action-removed",entityType:"action",entityId:s.actionId,summary:`Removed action: ${s.actionText||s.actionId}`,trustName:t==null?void 0:t.trustName,projectName:t==null?void 0:t.projectName,componentId:s.componentId,lens:s.lens,reason:s.reason,before:{actionText:s.actionText,actionType:s.actionType},source:"local"})):[]}function Xl(n,t,s){const a=Jl(t,s),i=(n||[]).map(r=>({...r})),l=[...a,...i].sort((r,o)=>{const u=Date.parse(r.timestamp||""),h=Date.parse(o.timestamp||"");return!Number.isNaN(u)&&!Number.isNaN(h)&&u!==h?u-h:(r.id||"").localeCompare(o.id||"")});return Ct(l)}function Ql(n,t){return n.map(s=>({...s,source:"imported",importedAt:t}))}function ds(n){var a,i;if(!n)return{};const t=kt(n.orgProfile);(i=(a=n.orgProfile)==null?void 0:a.cst)!=null&&i.pathway||(t.cst.pathway="pathway-1");const s=n.objectives||zl(n);return{...n,schemaVersion:n.schemaVersion||"2.0",orgProfile:t,objectives:vi(s),auditLog:Xl(n.auditLog,n.actionAuditLog,t),suppressedAutoActions:wi(n.suppressedAutoActions),pathwayChecks:yi(n.pathwayChecks)}}function ja(n,t){const s=bt(n),a=ds(s),i=!!(s.objectives||s.componentActions),l=new Date().toISOString(),r=Ql(a.auditLog||[],l),o=Ct([...t.auditLog||[],...r]);return St({...t,orgProfile:a.orgProfile||t.orgProfile,currentDraft:a.currentDraft?at(a.currentDraft):at(t.currentDraft),objectives:i?a.objectives:t.objectives,auditLog:o,suppressedAutoActions:a.suppressedAutoActions||t.suppressedAutoActions,history:(a.history||t.history).map(u=>({...u,data:at(u.data)})),phaseOverrides:a.phaseOverrides||t.phaseOverrides,pathwayChecks:a.pathwayChecks||t.pathwayChecks})}function at(n){const t=ts(n);return Object.keys(t).forEach(s=>{Object.keys(t[s]).forEach(a=>{t[s][a].actions=t[s][a].actions.map(i=>({...i,status:Xe(i.status),notes:i.notes||"",evidence:i.evidence||"",linkedTargets:(i.linkedTargets||[]).map(l=>({componentId:l.componentId,lens:l.lens}))}))})}),t}function vi(n){const t=ss(n||{});return Object.keys(t).forEach(s=>{t[s]=t[s].map(a=>({...a,owner:a.owner||"",timescale:a.timescale||"",notes:a.notes||"",evidence:a.evidence||"",linkedActions:(a.linkedActions||[]).map(i=>({lens:i.lens,actionId:i.actionId}))}))}),t}function yi(n){return n?Object.keys(n).reduce((t,s)=>{const a=n[s]||{};return t[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},t},{}):{}}function wi(n){return n?Object.keys(n).reduce((t,s)=>(t[s]=[...n[s]||[]],t),{}):{}}function Zl(n){return n?n.map(t=>({...t})):[]}function ec(n,t){const s=(n||[]).map(i=>`${i.componentId}:${i.lens}`).sort(),a=(t||[]).map(i=>`${i.componentId}:${i.lens}`).sort();return s.length===a.length&&s.every((i,l)=>i===a[l])}function nc(n,t){return n.text===t.text&&(n.actionType||"")===(t.actionType||"")&&n.owner===t.owner&&n.timescale===t.timescale&&n.status===t.status&&(n.phase??null)===(t.phase??null)&&(n.guidanceUrl||"")===(t.guidanceUrl||"")&&(n.startDate||"")===(t.startDate||"")&&(n.dueDate||"")===(t.dueDate||"")&&(n.notes||"")===(t.notes||"")&&(n.evidence||"")===(t.evidence||"")&&(n.readinessScore??null)===(t.readinessScore??null)&&ec(n.linkedTargets,t.linkedTargets)}function tc(n){return`${n.text||"Untitled action"} - ${n.status}, owner: ${n.owner||"Unassigned"}`}function sc(n,t){const s=n.map(i=>`${i.lens}:${i.actionId}`).sort(),a=t.map(i=>`${i.lens}:${i.actionId}`).sort();return s.length===a.length&&s.every((i,l)=>i===a[l])}function ac(n,t){return n.text===t.text&&n.owner===t.owner&&n.timescale===t.timescale&&(n.notes||"")===(t.notes||"")&&(n.evidence||"")===(t.evidence||"")&&sc(n.linkedActions,t.linkedActions)}function ic(n){return`${n.text||"Untitled objective"} - owner: ${n.owner||"Unassigned"}`}function Ni(n,t){return n.name===t.name&&n.role===t.role}function wt(n){return n.role?`${n.name||"Unnamed"} - ${n.role}`:n.name||"Unnamed"}function oc(n,t){return n.score===t.score&&n.justification===t.justification&&n.evidence===t.evidence}function Ea(n){const t=`Score ${n.score}`;return n.justification?`${t} - ${n.justification}`:t}function jt(n,t,s,a,i,l){const r=new Map(t.map(d=>[d.id,d])),o=new Set(n.map(d=>d.id)),u=[];n.forEach(d=>{const c=r.get(d.id);c&&!s(d,c)&&u.push({id:`${a}:${d.id}`,label:i(d),mineSummary:l(d),theirsSummary:l(c)})});const h=t.filter(d=>!o.has(d.id)).length;return{conflicts:u,autoMergedCount:h,merge:d=>{const c=n.map(x=>{const b=r.get(x.id);return b&&d[`${a}:${x.id}`]==="theirs"?b:x});return t.forEach(x=>{o.has(x.id)||c.push(x)}),c}}}const Ia=[{key:"trustName",label:"Trust name"},{key:"region",label:"Region"},{key:"trustType",label:"Trust type"},{key:"projectName",label:"Programme / project name"},{key:"leadName",label:"Lead submitter"}],Aa=[{key:"type",label:"CST type"},{key:"pathway",label:"Pathway"},{key:"goLiveDate",label:"Go live date"},{key:"fullAdoptionDate",label:"Full adoption date"},{key:"benefitRealizationDate",label:"Benefit realisation date"},{key:"toolkitChoice",label:"Default toolkit"}];function ki(n,t){const s=[];return Ia.forEach(({key:a,label:i})=>{const l=String(n[a]??""),r=String(t[a]??"");l!==r&&s.push({id:`profile:${String(a)}`,label:i,mineSummary:l||"(blank)",theirsSummary:r||"(blank)"})}),Aa.forEach(({key:a,label:i})=>{const l=String(n.cst[a]??""),r=String(t.cst[a]??"");l!==r&&s.push({id:`cst:${String(a)}`,label:i,mineSummary:l||"(blank)",theirsSummary:r||"(blank)"})}),{conflicts:s,autoMergedCount:0,merge:a=>{const i={...n};Ia.forEach(({key:r})=>{a[`profile:${String(r)}`]==="theirs"&&(i[r]=t[r])});const l={...n.cst};return Aa.forEach(({key:r})=>{a[`cst:${String(r)}`]==="theirs"&&(l[r]=t.cst[r])}),{...i,cst:l}}}}function Ci(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a=[],i=[];let l=0;const r=new Map,o=new Map;return s.forEach(u=>{const h=n[u]||{},d=t[u]||{},c=new Set([...Object.keys(h),...Object.keys(d)]);o.set(u,c),c.forEach(x=>{const b=h[x],w=d[x],R=`${u}:${x}`;b&&w&&!oc(b,w)&&a.push({id:`entry:${R}`,label:`${u} / ${x}`,mineSummary:Ea(b),theirsSummary:Ea(w)});const O=jt((b==null?void 0:b.actions)||[],(w==null?void 0:w.actions)||[],nc,`action:${R}`,f=>`${u} / ${x} - ${f.text||"Untitled action"}`,tc);i.push(...O.conflicts),l+=O.autoMergedCount,r.set(R,O)})}),{entryConflicts:a,actionConflicts:i,autoMergedActionCount:l,merge:u=>{const h={};return s.forEach(d=>{const c=n[d]||{},x=t[d]||{},b={};(o.get(d)||new Set).forEach(w=>{var C;const R=c[w],O=x[w],f=`${d}:${w}`;let I=R?{score:R.score,justification:R.justification,evidence:R.evidence}:{score:O.score,justification:O.justification,evidence:O.evidence};R&&O&&u[`entry:${f}`]==="theirs"&&(I={score:O.score,justification:O.justification,evidence:O.evidence});const H=((C=r.get(f))==null?void 0:C.merge(u))||[];b[w]={...I,actions:H}}),h[d]=b}),h}}}function ji(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a=[];let i=0;const l=new Map;return s.forEach(r=>{const o=jt(n[r]||[],t[r]||[],ac,`objective:${r}`,u=>`${r} - ${u.text||"Untitled objective"}`,ic);a.push(...o.conflicts),i+=o.autoMergedCount,l.set(r,o)}),{conflicts:a,autoMergedCount:i,merge:r=>{const o={};return s.forEach(u=>{var h;o[u]=((h=l.get(u))==null?void 0:h.merge(r))||[]}),o}}}function Ei(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a=[];let i=0;return s.forEach(l=>{const r=n[l],o=t[l];if(r===void 0||o===void 0){r===void 0&&o!==void 0&&(i+=1);return}r!==o&&a.push({id:`phase:${l}`,label:`Phase focus override - ${l}`,mineSummary:r,theirsSummary:o})}),{conflicts:a,autoMergedCount:i,merge:l=>{const r={...n};return s.forEach(o=>{const u=t[o];u!==void 0&&(n[o]===void 0||l[`phase:${o}`]==="theirs")&&(r[o]=u)}),r}}}function rc(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a={};return s.forEach(i=>{const l=n[i]||{},r=t[i]||{},o=new Set([...Object.keys(l),...Object.keys(r)]),u={};o.forEach(h=>{const d=h;u[d]=Array.from(new Set([...l[d]||[],...r[d]||[]]))}),a[i]=u}),a}function lc(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a={};return s.forEach(i=>{a[i]=Array.from(new Set([...n[i]||[],...t[i]||[]]))}),a}function cc(n,t){const s=new Map;return t.forEach(a=>s.set(a.monthLabel,a)),n.forEach(a=>s.set(a.monthLabel,a)),Array.from(s.values())}function Ii(n){const t=ds(n);return{theirsProfile:t.orgProfile||kt(),theirsDraft:t.currentDraft||{},theirsObjectives:t.objectives||{},theirsPhaseOverrides:t.phaseOverrides||{},theirsPathwayChecks:t.pathwayChecks||{},theirsSuppressedAutoActions:t.suppressedAutoActions||{},theirsAuditLog:t.auditLog||[],theirsHistory:(t.history||[]).map(s=>({...s,data:ts(s.data)}))}}function dc(n,t){const{theirsProfile:s,theirsDraft:a,theirsObjectives:i,theirsPhaseOverrides:l}=Ii(t),r=ki(n.orgProfile,s),o=jt(n.orgProfile.teamMembers||[],s.teamMembers||[],Ni,"team",wt,wt),u=Ci(n.currentDraft,a),h=ji(n.objectives,i),d=Ei(n.phaseOverrides,l),c=[{id:"profile",title:"Organisation profile & CST settings",items:r.conflicts},{id:"team",title:"Team members",items:o.conflicts},{id:"assessments",title:"Assessments",items:u.entryConflicts},{id:"actions",title:"Lens actions",items:u.actionConflicts},{id:"objectives",title:"Objectives",items:h.conflicts},{id:"phaseFocus",title:"Phase focus overrides",items:d.conflicts}].filter(b=>b.items.length>0),x=[];return o.autoMergedCount&&x.push(`${o.autoMergedCount} new team member(s)`),u.autoMergedActionCount&&x.push(`${u.autoMergedActionCount} new action(s)`),h.autoMergedCount&&x.push(`${h.autoMergedCount} new objective(s)`),d.autoMergedCount&&x.push(`${d.autoMergedCount} new phase focus override(s)`),{sections:c,autoMergeSummary:x,hasConflicts:c.length>0}}function Oa(n,t,s){const{theirsProfile:a,theirsDraft:i,theirsObjectives:l,theirsPhaseOverrides:r,theirsPathwayChecks:o,theirsSuppressedAutoActions:u,theirsAuditLog:h,theirsHistory:d}=Ii(t),c=ki(n.orgProfile,a),x=jt(n.orgProfile.teamMembers||[],a.teamMembers||[],Ni,"team",wt,wt),b=Ci(n.currentDraft,i),w=ji(n.objectives,l),R=Ei(n.phaseOverrides,r),O={...n.orgProfile,...c.merge(s),teamMembers:x.merge(s)},f=new Date().toISOString(),I=h.map(C=>({...C,source:"imported",importedAt:f})),H=Ct([...n.auditLog||[],...I]);return St({...n,orgProfile:O,currentDraft:ts(b.merge(s)),objectives:ss(w.merge(s)),auditLog:H,suppressedAutoActions:lc(n.suppressedAutoActions,u),history:cc(n.history,d),phaseOverrides:R.merge(s),pathwayChecks:rc(n.pathwayChecks,o)})}const uc=`{
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
`,us={componentId:"benefits",actionPrefix:"benefits-action",outcomePrefix:"benefits:outcome",fallbackOutcomes:[{id:"benefits:outcome:o1",text:"Benefits and disbenefits have been identified and defined"},{id:"benefits:outcome:o2",text:"Benefits are actively managed and monitored"},{id:"benefits:outcome:o3",text:"Benefits are realised, evidenced and sustained"}],lensAliases:{"Strategic Direction and Leadership":"Planning and Risk","People Experience and Culture":"Process and Sustainment"}},mc=Ve(uc,us);function gc(n){return qe(n,us,mc)}function pc(n){return Ye(n,us)}const hc=`{
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
`,ms={componentId:"capability",actionPrefix:"capability-action",outcomePrefix:"capability:outcome",fallbackOutcomes:[{id:"capability:outcome:o1",text:"Required capability levels have been defined and assessed"},{id:"capability:outcome:o2",text:"People can perform confidently in the future state"},{id:"capability:outcome:o3",text:"Capability and confidence are sustained and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Communication:"People Experience and Culture","Testing and Validation":"Skills and Behaviour"}},fc=Ve(hc,ms);function bc(n){return qe(n,ms,fc)}function xc(n){return Ye(n,ms)}const Sc=`{
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
`,gs={componentId:"case_for_change",actionPrefix:"case-for-change-action",outcomePrefix:"case-for-change:outcome",fallbackOutcomes:[{id:"case-for-change:outcome:o1",text:"The need for change has been clearly defined and evidenced"},{id:"case-for-change:outcome:o2",text:"The case for change is understood and accepted"},{id:"case-for-change:outcome:o3",text:"The case for change remains credible and relevant"}]},vc=Ve(Sc,gs);function yc(n){return qe(n,gs,vc)}function wc(n){return Ye(n,gs)}const Nc=`{
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
`,ps={componentId:"change_adoption",actionPrefix:"change-adoption-action",outcomePrefix:"change-adoption:outcome",fallbackOutcomes:[{id:"change-adoption:outcome:o1",text:"Adoption expectations and measures have been defined"},{id:"change-adoption:outcome:o2",text:"Adoption is actively monitored and supported"},{id:"change-adoption:outcome:o3",text:"Adoption is sustained and optimised"}],lensAliases:{"Planning and Measurement":"Planning and Risk","Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","Skills and Behaviour":"Skills and Behaviour","People Experience and Culture":"Skills and Behaviour",Governance:"Planning and Risk",Design:"Planning and Risk",Reinforcement:"Skills and Behaviour"}},kc=Ve(Nc,ps);function Cc(n){return qe(n,ps,kc)}function jc(n){return Ye(n,ps)}const Ec=`{
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
`,hs={componentId:"change_impact",actionPrefix:"change-impact-action",outcomePrefix:"change-impact:outcome",fallbackOutcomes:[{id:"change-impact:outcome:o1",text:"The impact of the change has been identified and understood"},{id:"change-impact:outcome:o2",text:"Impacts have been assessed, validated and prioritised"},{id:"change-impact:outcome:o3",text:"Change impacts are actively managed through plans, governance and support"}]},Ic=Ve(Ec,hs);function Ac(n){return qe(n,hs,Ic)}function Oc(n){return Ye(n,hs)}const _c=`{
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
`,fs={componentId:"change_network",actionPrefix:"change-network-action",outcomePrefix:"change-network:outcome",fallbackOutcomes:[{id:"change-network:outcome:o1",text:"A representative and effective change network has been established"},{id:"change-network:outcome:o2",text:"The change network actively enables engagement and adoption"},{id:"change-network:outcome:o3",text:"The change network is embedded and delivers ongoing value"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Engagement:"People Experience and Culture","Analysis and Insight":"People Experience and Culture"}},Rc=Ve(_c,fs);function Pc(n){return qe(n,fs,Rc)}function Dc(n){return Ye(n,fs)}const $c=`{
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
`,bs={componentId:"cm_readiness",actionPrefix:"cm-readiness-action",outcomePrefix:"cm-readiness:outcome",fallbackOutcomes:[{id:"cm-readiness:outcome:o1",text:"Organisational readiness has been assessed"},{id:"cm-readiness:outcome:o2",text:"A robust change management plan has been developed"},{id:"cm-readiness:outcome:o3",text:"Readiness and planning activities actively support successful implementation"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Planning and Risk":"Planning and Risk","People Experience and Culture":"Planning and Risk","Skills and Behaviour":"Planning and Risk","Process and Sustainment":"Planning and Risk",Governance:"Planning and Risk",Reinforcement:"Planning and Risk"}},Tc=Ve($c,bs);function Lc(n){return qe(n,bs,Tc)}function Bc(n){return Ye(n,bs)}const Mc=`{
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
`,xs={componentId:"org_maturity",actionPrefix:"org-change-readiness-action",outcomePrefix:"org-change-readiness:outcome",fallbackOutcomes:[{id:"org-change-readiness:outcome:o1",text:"Organisational readiness has been assessed and understood"},{id:"org-change-readiness:outcome:o2",text:"Readiness gaps are being actively addressed"},{id:"org-change-readiness:outcome:o3",text:"The organisation is prepared to successfully absorb and sustain the change"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"Skills and Behaviour","Planning and Measurement":"Skills and Behaviour",Design:"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Reinforcement:"Skills and Behaviour"}},Gc=Ve(Mc,xs);function Fc(n){return qe(n,xs,Gc)}function Uc(n){return Ye(n,xs)}const Wc="pathway-auto-action:",Hc="pathway:auto-objective:",Vc="vision:auto-objective:";function qc(n){return n.startsWith(Hc)||n.startsWith(Vc)}function Yc(n){const t=n.orgProfile.cst.pathway,s={...n.objectives||{}},a=Object.keys(n.currentDraft||{}).reduce((i,l)=>{const r=n.currentDraft[l]||{};return i[l]=Object.keys(r).reduce((o,u)=>{const h=r[u];return o[u]={...h,actions:(h.actions||[]).filter(d=>!d.id.startsWith(Wc))},o},{}),i},{});return zn.forEach(i=>{ci(i.id,t)&&(s[i.id]=(s[i.id]||[]).filter(r=>!qc(r.id)))}),{...n,currentDraft:a,objectives:s}}const Kc=`{
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
`,Ss={componentId:"process_change",actionPrefix:"process-change-action",outcomePrefix:"process-change:outcome",fallbackOutcomes:[{id:"process-change:outcome:o1",text:"Current and future processes have been defined"},{id:"process-change:outcome:o2",text:"Process changes have been implemented and adopted"},{id:"process-change:outcome:o3",text:"Processes are optimised and continuously improved"}],lensAliases:{"Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Skills and Behaviour","Planning and Risk":"Process and Sustainment","Analysis and Insight":"Process and Sustainment",Communication:"Skills and Behaviour","Dependency Management":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment",Implementation:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"Skills and Behaviour","Testing and Validation":"Process and Sustainment"}},zc=Ve(Kc,Ss);function Jc(n){return qe(n,Ss,zc)}function Xc(n){return Ye(n,Ss)}const Qc=`{
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
`,vs={componentId:"reinforcement",actionPrefix:"reinforcement-action",outcomePrefix:"reinforcement:outcome",fallbackOutcomes:[{id:"reinforcement:outcome:o1",text:"Reinforcement strategy and sustainment measures are defined"},{id:"reinforcement:outcome:o2",text:"Reinforcement activities support sustained adoption and behaviour change"},{id:"reinforcement:outcome:o3",text:"Sustained change outcomes are embedded and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Strategic Direction and Leadership":"Process and Sustainment","Planning and Measurement":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"People Experience and Culture"}},Zc=Ve(Qc,vs);function ed(n){return qe(n,vs,Zc)}function nd(n){return Ye(n,vs)}const td=`{
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
`,ys={componentId:"resistance",actionPrefix:"resistance-action",outcomePrefix:"resistance:outcome",fallbackOutcomes:[{id:"resistance:outcome:o1",text:"Potential sources of resistance have been identified and understood"},{id:"resistance:outcome:o2",text:"Strategies and interventions are in place to prevent and address resistance"},{id:"resistance:outcome:o3",text:"Resistance is actively managed and reduced throughout the change lifecycle"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour",Design:"Skills and Behaviour",Communication:"People Experience and Culture",Engagement:"People Experience and Culture",Reinforcement:"Skills and Behaviour"}},sd=Ve(td,ys);function ad(n){return qe(n,ys,sd)}function id(n){return Ye(n,ys)}const od=`{
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
`,ws={componentId:"risk_management",actionPrefix:"risk-management-action",outcomePrefix:"risk-management:outcome",fallbackOutcomes:[{id:"risk-management:outcome:o1",text:"Change risks have been identified and assessed"},{id:"risk-management:outcome:o2",text:"Risk mitigation and management activities are in place"},{id:"risk-management:outcome:o3",text:"Risks are proactively managed throughout the change lifecycle"}],lensAliases:{"Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Strategic Direction and Leadership":"Planning and Risk","Skills and Behaviour":"Process and Sustainment",Governance:"Planning and Risk",Reinforcement:"Process and Sustainment"}},rd=Ve(od,ws);function ld(n){return qe(n,ws,rd)}function cd(n){return Ye(n,ws)}const dd=`{
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
`,Ns={componentId:"skills_learning",actionPrefix:"skills-learning-action",outcomePrefix:"skills-learning:outcome",fallbackOutcomes:[{id:"skills-learning:outcome:o1",text:"Future learning and capability requirements have been identified"},{id:"skills-learning:outcome:o2",text:"Learning interventions have been designed and delivered"},{id:"skills-learning:outcome:o3",text:"Learning outcomes are achieved and sustained"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Process and Sustainment":"Skills and Behaviour",Governance:"Skills and Behaviour",Communication:"People Experience and Culture",Reinforcement:"Skills and Behaviour",Design:"Skills and Behaviour","Dependency Management":"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour","Testing and Validation":"Skills and Behaviour"}},ud=Ve(dd,Ns);function md(n){return qe(n,Ns,ud)}function gd(n){return Ye(n,Ns)}const pd=`{
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
`,ks={componentId:"sponsorship",actionPrefix:"sponsorship-action",outcomePrefix:"sponsorship:outcome",fallbackOutcomes:[{id:"sponsorship:outcome:o1",text:"Clear sponsorship and governance structures are established"},{id:"sponsorship:outcome:o2",text:"Sponsors actively lead and champion the change"},{id:"sponsorship:outcome:o3",text:"Governance and sponsorship drive successful delivery"}]},hd=Ve(pd,ks);function fd(n){return qe(n,ks,hd)}function bd(n){return Ye(n,ks)}const xd=`{
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
`,Cs={componentId:"stakeholder",actionPrefix:"stakeholder-action",outcomePrefix:"stakeholder:outcome",fallbackOutcomes:[{id:"stakeholder:outcome:o1",text:"Stakeholders have been identified, analysed and prioritised"},{id:"stakeholder:outcome:o2",text:"Stakeholders are actively engaged and informed"},{id:"stakeholder:outcome:o3",text:"Engagement and communications support successful adoption"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Reinforcement:"People Experience and Culture"}},Sd=Ve(xd,Cs);function vd(n){return qe(n,Cs,Sd)}function yd(n){return Ye(n,Cs)}const wd=`{
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
`,js={componentId:"transfer_bau",actionPrefix:"transfer-bau-action",outcomePrefix:"transfer-bau:outcome",fallbackOutcomes:[{id:"transfer-bau:outcome:o1",text:"Operational ownership and accountability have been established"},{id:"transfer-bau:outcome:o2",text:"Business-as-usual capabilities and support arrangements are in place"},{id:"transfer-bau:outcome:o3",text:"The change is fully embedded within normal operational management"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Process and Sustainment":"Process and Sustainment","Planning and Risk":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Skills and Behaviour":"Process and Sustainment",Governance:"Strategic Direction and Leadership","Measurement and Evaluation":"Process and Sustainment",Implementation:"Process and Sustainment","Risk Management":"Process and Sustainment",Design:"Process and Sustainment","Dependency Management":"Process and Sustainment",Reinforcement:"Process and Sustainment"}},Nd=Ve(wd,js);function kd(n){return qe(n,js,Nd)}function Cd(n){return Ye(n,js)}const jd=`{
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
`,Es={componentId:"vision",actionPrefix:"vision-action",outcomePrefix:"vision:outcome",fallbackOutcomes:[{id:"vision:outcome:o1",text:"A compelling future state has been defined"},{id:"vision:outcome:o2",text:"The vision is shared and understood"},{id:"vision:outcome:o3",text:"The vision is visible and guides the change"}]},Ed=Ve(jd,Es);function Id(n){return qe(n,Es,Ed)}function Ad(n){return Ye(n,Es)}function kn(n){return Yc(kd(Fc(ed(Jc(bc(Cc(md(ad(vd(Lc(ld(Pc(Ac(gc(fd(yc(Id(n))))))))))))))))))}function Od(n){return Cd(Uc(nd(Xc(xc(jc(gd(id(yd(Bc(cd(Dc(Oc(pc(bd(wc(Ad(n)))))))))))))))))}function _d(n,t){return t==="pathway-1"?kn(n):Od(n)}const Lt="nhs-digital-adoption-user-settings",Bt="nhs-digital-adoption-report-reminder-dismissed",Rd="nhs-digital-adoption-engagement",Mt="nhs-digital-adoption-current-user-id",_a="Default",Pd=5*1024*1024,Dd=new Set(["application/json","text/json"]),$d="Unknown user",Td=["introduction","engine-explained","project-details","profile"],Ld={1:"#3b82f6",2:"#8b5cf6",3:"#f59e0b",4:"#f97316",5:"#22c55e"},Bd={red:"test-data/adoption-phase1-red.json",amber:"test-data/adoption-phase2-amber.json",green:"test-data/adoption-phase3-green.json"},Gt={name:"",themeColor:"#005eb8",profileImageDataUrl:"",darkMode:!1,colorAccessibilityMode:"standard",phaseFocusMode:"auto",manualPhaseFocus:1,hideGuidedWorkflow:!1,showAdditionalGuidanceLinks:!0,showExternalLinksSection:!1,showActionPriorityColours:!1};function Md(n){return{...n,linkedTargets:(n.linkedTargets||[]).map(t=>({componentId:t.componentId,lens:t.lens}))}}function Gd(n,t){return`${n}:${t}`}function Ra(n){return n.orgProfile.trustName||n.orgProfile.projectName?!1:!Object.values(n.currentDraft).some(t=>Object.values(t).some(s=>s.score>0))}function Pa(n){return!n.trustName.trim()}function Fd(n){var t;if(!((t=n.evidence)!=null&&t.trim()))return!1;try{const s=JSON.parse(n.evidence);return Array.isArray(s)?s.length>0:!!n.evidence.trim()}catch{return!!n.evidence.trim()}}function Ud(n){return n.trim()||$d}function Wd(n,t,s){const a=(n.teamMembers||[]).find(i=>i.id===t);return Ud((a==null?void 0:a.name)||s)}function Hd(n,t,s){var i;const a=Qi[n];return((i=a==null?void 0:a[t])==null?void 0:i[s])||yt[s]||yt[0]}function Vd(n=new Date){const t=String(n.getMonth()+1).padStart(2,"0");return`${n.getFullYear()}-${t}`}function qd(n=new Date){return new Date(n.getFullYear(),n.getMonth()-1,1).toLocaleString("en-GB",{month:"short",year:"numeric"})}function Yd(n){const t=new TextEncoder().encode(n);let s="";return t.forEach(a=>{s+=String.fromCharCode(a)}),window.btoa(s)}function Kd(n,t=76){const s=[];for(let a=0;a<n.length;a+=t)s.push(n.slice(a,a+t));return s.join(`\r
`)}function zd(n=new Date){return n.toLocaleString("en-GB",{month:"short",year:"numeric"})}function ou(){var Jn,ct;const n=zn,t=m.useMemo(()=>[...it],[]),[s,a]=m.useState(n[0].id),[i,l]=m.useState(!1),[r,o]=m.useState(()=>{let p={};try{const M=Sn(ka);p=ds(bt(M))}catch(M){console.warn("Ignoring invalid persisted adoption data.",M)}const k=St({view:"dashboard",orgProfile:p==null?void 0:p.orgProfile,currentDraft:p==null?void 0:p.currentDraft,objectives:p==null?void 0:p.objectives,suppressedAutoActions:p==null?void 0:p.suppressedAutoActions,auditLog:p==null?void 0:p.auditLog,history:p==null?void 0:p.history,phaseOverrides:p==null?void 0:p.phaseOverrides,pathwayChecks:p==null?void 0:p.pathwayChecks});return k.orgProfile.cstId||(k.orgProfile={...k.orgProfile,cstId:Vs()}),kn(k)}),[u,h]=m.useState(()=>Ra(r)?"introduction":"dashboard"),[d,c]=m.useState(""),x=pn("vision-get-started"),[b,w]=m.useState(()=>Sn(Mt)||""),R=$n.useRef(b);m.useEffect(()=>{R.current=b},[b]);const[O,f]=m.useState(null),[I,H]=m.useState(()=>{const p=Sn(Lt);return{...Gt,...p}}),C=$n.useRef(I.name);m.useEffect(()=>{C.current=I.name},[I.name]);const j=$n.useRef(null),y=$n.useRef(null),[Z,L]=m.useState(""),Y=$n.useRef(null),te=m.useMemo(()=>Vd(),[]),[re,P]=m.useState(()=>Sn(Bt)||{}),[G,Ne]=m.useState(!0),[Ce,Te]=m.useState([]),[Ke,B]=m.useState({1:!0}),[le,ie]=m.useState({intro:!0,overview:!0,tools:!0}),[ge,be]=m.useState(null),[ye,se]=m.useState(!0),[De,$e]=m.useState("medium"),ze=$n.useRef({}),Be=m.useMemo(()=>{const p=new Date,k=qd(p),M=p.getDate()===1;return{previousMonthLabel:k,isFirstDayOfMonth:M,shouldNotify:M}},[r.history]),[Ie,cn]=m.useState("test@test.com"),[Je,dn]=m.useState(""),[en,_]=m.useState(""),ae=zd(),J=m.useCallback((p,k)=>(r.currentDraft[p]||(r.currentDraft[p]={}),r.currentDraft[p][k]||(r.currentDraft[p][k]=Ot()),r.currentDraft[p][k]),[r]),he=I.showAdditionalGuidanceLinks!==!1,xe=m.useMemo(()=>{const p=ro(r,n);return{...p,nextSteps:p.nextSteps.map(k=>({...k,toolkitLinks:vt(_a,k.componentId,"inputs",void 0,he).slice(0,3)}))}},[r,he]),ke=I.phaseFocusMode==="manual"&&I.manualPhaseFocus?I.manualPhaseFocus:xe.currentPhase;m.useEffect(()=>{var k;if(u!=="assessment")return;const p=(k=n.find(M=>M.id===s))==null?void 0:k.phase;p&&B(M=>({...M,[p]:!0}))},[s,u]),m.useEffect(()=>{u==="where-am-i-now"&&l(!0)},[u]),m.useEffect(()=>{const k={introduction:"intro","engine-explained":"intro","project-details":"intro","where-am-i-now":"intro",dashboard:"overview","daily-checkin":"overview","action-plan":"overview","roadmap-view":"overview","highlight-builder":"tools","force-field-analysis":"tools",compare:"tools","audit-log":"tools"}[u];k&&ie(M=>({...M,[k]:!0}))},[u]);const Ae=mo(r,p=>Ut(p)||n[0],J).sort((p,k)=>{const M=p.action.owner.localeCompare(k.action.owner);return M!==0?M:p.component.localeCompare(k.component)});m.useEffect(()=>{sn(ka,r)},[r]),m.useEffect(()=>{sn(Lt,I)},[I]),m.useEffect(()=>{sn(Mt,b)},[b]),m.useEffect(()=>{sn(Bt,re)},[re]),m.useEffect(()=>{Pa(r.orgProfile)&&!Td.includes(u)&&h("introduction")},[r.orgProfile,u]),m.useEffect(()=>{u==="dashboard"&&j.current&&setTimeout(()=>{var M,ee,q;const p=(M=j.current)==null?void 0:M.querySelector("#adoption-radar-chart");if(p){const me=uo(r,t,n,J);Kn(p,me)}const k=(ee=j.current)==null?void 0:ee.querySelector("#adoption-component-radar-chart");if(k){const me=Vt(n,J,ke);Kn(k,me,{maintainAspectRatio:!1,scales:{r:{min:-1,max:5,ticks:{display:!0,stepSize:1,backdropColor:"transparent",callback:ue=>Number(ue)<0?"":ue}}}},ue=>{const Le=n[ue];Le&&W(Le.id)})}if(r.history.length>0){const me=(q=j.current)==null?void 0:q.querySelector("#adoption-line-chart");if(me){const ue={labels:r.history.map(Le=>Le.monthLabel),datasets:[{label:"Adoption Score",data:r.history.map(Le=>Le.overallPercentage||0),borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",fill:!0,tension:.4}]};ri(me,ue)}}},100)},[u,r,J,t,n,ke,ye,De]),m.useEffect(()=>{typeof document<"u"&&(document.documentElement.dataset.nhsThemeMode=I.darkMode?"dark":"light")},[I.darkMode]),m.useEffect(()=>{var k;const p=u==="assessment"?`component:${s}`:`view:${u}`;(k=ze.current[p])==null||k.scrollIntoView({block:"nearest",behavior:"smooth"})},[s,u]);const S=()=>typeof window>"u"?!1:window.innerWidth<1024,D=m.useCallback(()=>{var p;(p=y.current)==null||p.scrollTo({top:0,behavior:"auto"})},[]),E=m.useCallback(p=>{h(k=>k===p?k:(Te(M=>[k,...M].slice(0,20)),p)),S()&&l(!1)},[]),A=p=>{E(p)},U=m.useCallback(()=>{Te(p=>{const[k,...M]=p;return k?(h(k),window.innerWidth<1024&&l(!1),M):(window.location.hash="#/",p)})},[]),W=m.useCallback(p=>{Ut(p)&&(a(p),E("assessment"),D())},[E,D]),[ne,oe]=m.useState(null),Se=m.useCallback((p,k,M)=>{oe({lens:k,actionId:M}),W(p)},[W]);m.useEffect(()=>{D()},[D,u]);function ve(p,k){if(!k.length)return p.auditLog;const M=Wd(p.orgProfile,R.current,C.current||""),ee=k.map(q=>Tl({actor:M,eventType:q.eventType,entityType:q.entityType,entityId:q.entityId,summary:q.summary,trustName:q.trustName??p.orgProfile.trustName,projectName:q.projectName??p.orgProfile.projectName,componentId:q.componentId,lens:q.lens,reason:q.reason,before:q.before,after:q.after,source:q.source,importedAt:q.importedAt}));return Ct([...p.auditLog||[],...ee])}const Fe=m.useCallback((p,k,M)=>{o(ee=>{var Oe;const q=((Oe=ee.currentDraft[p])==null?void 0:Oe[k])||Ot(),me={...ee,currentDraft:{...ee.currentDraft,[p]:{...ee.currentDraft[p],[k]:Ma(M)}}},ue=[];q.score!==M.score&&ue.push({eventType:"entry-score-updated",entityType:"entry",entityId:`${p}:${k}`,summary:`Updated readiness score for ${p} / ${k}: ${q.score} -> ${M.score}`,componentId:p,lens:k,before:{score:q.score},after:{score:M.score},source:"local"}),(q.justification||"")!==(M.justification||"")&&ue.push({eventType:"entry-justification-updated",entityType:"entry",entityId:`${p}:${k}`,summary:`Updated justification for ${p} / ${k}`,componentId:p,lens:k,before:{justification:q.justification||""},after:{justification:M.justification||""},source:"local"}),(q.evidence||"")!==(M.evidence||"")&&ue.push({eventType:"entry-evidence-updated",entityType:"entry",entityId:`${p}:${k}`,summary:`Updated evidence for ${p} / ${k}`,componentId:p,lens:k,before:{evidence:q.evidence||""},after:{evidence:M.evidence||""},source:"local"});const Le=new Map(q.actions.map(fe=>[fe.id,fe]));return M.actions.forEach(fe=>{const Re=Le.get(fe.id);if(!Re){ue.push({eventType:"action-created",entityType:"action",entityId:fe.id,summary:`Created action in ${p} / ${k}`,componentId:p,lens:k,after:{text:fe.text,status:fe.status,owner:fe.owner,actionType:fe.actionType},source:"local"});return}const jn=JSON.stringify({text:Re.text,status:Re.status,owner:Re.owner,actionType:Re.actionType,notes:Re.notes,dueDate:Re.dueDate,startDate:Re.startDate,evidence:Re.evidence}),mn=JSON.stringify({text:fe.text,status:fe.status,owner:fe.owner,actionType:fe.actionType,notes:fe.notes,dueDate:fe.dueDate,startDate:fe.startDate,evidence:fe.evidence});jn!==mn&&ue.push({eventType:"action-updated",entityType:"action",entityId:fe.id,summary:`Updated action in ${p} / ${k}`,componentId:p,lens:k,before:{text:Re.text,status:Re.status,owner:Re.owner,actionType:Re.actionType},after:{text:fe.text,status:fe.status,owner:fe.owner,actionType:fe.actionType},source:"local"})}),{...kn(me),auditLog:ve(ee,ue)}})},[ve]),un=m.useCallback((p,k,M,ee)=>{const q=J(p,k);Fe(p,k,{...q,actions:q.actions.map(me=>me.id===M?{...me,status:Xe(ee)}:me)})},[J,Fe]),Cn=m.useCallback((p,k,M,ee)=>{const q=J(p,k).actions.find(ue=>ue.id===M);if(Xe(ee)==="Completed"&&q!==void 0&&!Fd(q)&&!Sn(tt)){be({componentId:p,lens:k,actionId:M,status:ee});return}un(p,k,M,ee)},[un,J]),v=m.useCallback((p,k)=>{o(M=>{const ee=M.objectives[p]||[],q={...M,objectives:{...M.objectives,[p]:k}};return JSON.stringify(ee)!==JSON.stringify(k)?{...q,auditLog:ve(M,[{eventType:"objectives-updated",entityType:"objective",entityId:p,summary:`Updated component outcomes for ${p}`,componentId:p,before:{objectiveCount:ee.length},after:{objectiveCount:k.length},source:"local"}])}:q})},[ve]),$=m.useCallback(p=>{const k=ti(r.orgProfile);if(k.isValid)return!0;const M=k.errors.map(ee=>`- ${ee.message}`).join(`
`);return window.confirm(`${p} has CST warnings:

${M}

Continue anyway?`)},[r.orgProfile]),V=m.useCallback(p=>{L(p)},[]),de=m.useCallback(()=>{if(!$("Export"))return;const k=Ca(r);nt(`adoption-assessment-${(r.orgProfile.trustName||"export").replace(/\s+/g,"_")}.json`,JSON.stringify(k,null,2),"application/json"),V("Assessment export downloaded.")},[V,$,r]),we=m.useCallback(()=>{var p;(p=Y.current)==null||p.click()},[]),Me=m.useCallback(async p=>{var q,me,ue,Le;const k=(q=p.target.files)==null?void 0:q[0];if(!k)return;const M=k.name.toLowerCase().endsWith(".json"),ee=!k.type||Dd.has(k.type);if(!M||!ee){V("Import failed. Please choose a valid JSON file."),window.alert("Import failed. Please choose a valid JSON file."),p.target.value="";return}if(k.size>Pd){V("Import failed. The selected file is larger than 5 MB."),window.alert("Import failed. The selected file is larger than 5 MB."),p.target.value="";return}try{const hn=await k.text(),Oe=bt(JSON.parse(hn)),fe=()=>{o(En=>{const gn=kn(ja(Oe,En));return gn.orgProfile.cstId||(gn.orgProfile={...gn.orgProfile,cstId:Vs()}),{...gn,auditLog:ve(gn,[{eventType:"data-imported",entityType:"system",summary:`Imported assessment data from ${k.name}`,after:{fileName:k.name},source:"local"}])}}),h("dashboard"),V("Assessment import complete. Dashboard updated.")};if(Ra(r)){fe();return}const Re=(me=Oe.orgProfile)==null?void 0:me.cstId,jn=r.orgProfile.cstId,mn=r.orgProfile.projectName||r.orgProfile.trustName||"your currently loaded programme",Pn=((ue=Oe.orgProfile)==null?void 0:ue.projectName)||((Le=Oe.orgProfile)==null?void 0:Le.trustName)||k.name;if(Re&&Re!==jn){if(!window.confirm(`"${Pn}" looks like a different programme than "${mn}".

Importing will replace everything currently loaded. Continue?`)){V("Import cancelled.");return}fe();return}if(!Re&&!window.confirm(`"${Pn}" doesn't carry a programme ID (it may predate this feature).

Click OK to compare it against "${mn}" and merge item by item, or Cancel to load it as a different programme (replace everything).`)){fe();return}const fn=dc(r,Oe);if(!fn.hasConflicts){o(En=>{const gn=kn(Oa(En,Oe,{}));return{...gn,auditLog:ve(gn,[{eventType:"data-imported",entityType:"system",summary:fn.autoMergeSummary.length?`Merged import from ${k.name} (${fn.autoMergeSummary.join(", ")})`:`Imported ${k.name} - no changes (already up to date)`,after:{fileName:k.name},source:"local"}])}}),h("dashboard"),V(fn.autoMergeSummary.length?`Merged automatically: ${fn.autoMergeSummary.join(", ")}.`:"Already up to date - nothing to import.");return}f({file:k,parsed:Oe,report:fn})}catch{V("Import failed. Please verify the file contents."),window.alert("Unable to import adoption assessment. Please verify the file contents.")}finally{p.target.value=""}},[V,ve,r]),Ue=m.useCallback(p=>{if(!O)return;const{file:k,parsed:M}=O,ee=Object.keys(p).length;o(q=>{const me=kn(Oa(q,M,p));return{...me,auditLog:ve(me,[{eventType:"data-imported",entityType:"system",summary:`Merged import from ${k.name} (${ee} item(s) resolved)`,after:{fileName:k.name},source:"local"}])}}),f(null),h("dashboard"),V("Import merged into current programme.")},[V,ve,O]),Ee=m.useCallback(()=>{f(null),V("Import cancelled.")},[V]),je=m.useCallback(async p=>{try{const k=await fetch(Bd[p]);if(!k.ok)throw new Error(`Failed to load sample data: ${k.status}`);const M=bt(await k.json());o(ee=>{const q=kn(ja(M,ee));return{...q,auditLog:ve(q,[{eventType:"example-data-loaded",entityType:"system",summary:"Loaded example assessment data",source:"local"}])}}),h("dashboard"),V("Example assessment data loaded."),S()&&l(!1)}catch(k){console.error(k),V("Unable to load example data right now."),window.alert("Unable to load example data right now. Please try again.")}},[V,ve]),nn=m.useCallback(()=>{if(!window.confirm("Warning: this will reset all assessment data (organisation profile, scores, actions, and history) and sign you out. If you are worried, please export your data first. Continue?"))return;const k=kn(St());o(k),h("introduction"),H(Gt),sn(Lt,Gt),localStorage.removeItem(Rd),P({}),sn(Bt,{}),sn(Xt,!1),w(""),sn(Mt,""),Object.keys(localStorage).filter(M=>M.startsWith("nhs-digital-adoption-page-intro-seen:")).forEach(M=>localStorage.removeItem(M)),V("Assessment data has been reset and you have been signed out."),S()&&l(!1)},[V]),We=m.useCallback(()=>({generatedAt:new Date().toISOString(),targetMonth:Be.previousMonthLabel,report:Ca(r)}),[Be.previousMonthLabel,r]),on=m.useCallback(()=>`adoption-point-in-time-${Be.previousMonthLabel.toLowerCase().replace(/\s+/g,"-")}.json`,[Be.previousMonthLabel]);m.useCallback(()=>{const p=on();nt(p,JSON.stringify(We(),null,2),"application/json")},[on,We]),m.useCallback(()=>{const p=Ie.trim()||"test@test.com",k=on(),M=`${en}

Attachment: ${k}`,ee=`mailto:${p}?subject=${encodeURIComponent(Je)}&body=${encodeURIComponent(M)}`;window.location.href=ee},[on,en,Je,Ie]),m.useCallback(()=>{const p=Ie.trim()||"test@test.com",k=on(),M=JSON.stringify(We(),null,2),ee=Kd(Yd(M)),q=`----nhs-adoption-reminder-${Date.now()}`,me=[`To: ${p}`,`Subject: ${Je}`,"MIME-Version: 1.0",`Content-Type: multipart/mixed; boundary="${q}"`,"",`--${q}`,'Content-Type: text/plain; charset="UTF-8"',"Content-Transfer-Encoding: 8bit","",en,"",`--${q}`,`Content-Type: application/json; name="${k}"`,"Content-Transfer-Encoding: base64",`Content-Disposition: attachment; filename="${k}"`,"",ee,`--${q}--`,""].join(`\r
`),ue=Be.previousMonthLabel.toLowerCase().replace(/\s+/g,"-");nt(`adoption-reminder-${ue}.eml`,me,"message/rfc822")},[on,We,en,Je,Ie,Be.previousMonthLabel]),m.useCallback(()=>{P(p=>({...p,[te]:!0}))},[te]),Be.shouldNotify&&re[te];const tn=m.useMemo(()=>ho(r,xe,ae),[r,xe,ae]),wn=m.useMemo(()=>tn.filter(p=>p.completed).length,[tn]),Mn=m.useCallback(p=>{H(p)},[]),Gn=m.useCallback(p=>{o(k=>{const M=k.orgProfile.cst.pathway!==p.cst.pathway,ee={...k,orgProfile:p},q=M?_d(ee,p.cst.pathway):ee;return JSON.stringify(k.orgProfile)!==JSON.stringify(p)?{...q,auditLog:ve(k,[{eventType:"profile-updated",entityType:"profile",summary:"Updated CST profile details",before:{trustName:k.orgProfile.trustName,projectName:k.orgProfile.projectName,cst:k.orgProfile.cst},after:{trustName:p.trustName,projectName:p.projectName,cst:p.cst},source:"local"},...M?[{eventType:"pathway-changed",entityType:"profile",summary:`Changed pathway from ${k.orgProfile.cst.pathway} to ${p.cst.pathway}`,before:{pathway:k.orgProfile.cst.pathway},after:{pathway:p.cst.pathway},source:"local"}]:[]])}:q})},[]),Fn=p=>{let k=0,M=0,ee=0,q=0;return p.lenses.forEach(me=>{var hn,Oe;const ue=(hn=r.currentDraft[p.id])==null?void 0:hn[me];ue&&ue.score>0&&(k++,(Oe=ue.justification)!=null&&Oe.trim()&&M++);const Le=(ue==null?void 0:ue.actions)||[];ee+=Le.length,q+=Le.filter(fe=>ns(fe.status)).length}),k===0?{icon:"◯",color:"text-blue-100",label:"Not Started"}:k>M?{icon:"⚠",color:"text-red-300",label:"Missing Justification"}:k<p.lenses.length?{icon:"◐",color:"text-amber-300",label:"In Progress"}:ee<=0||q<ee?{icon:"◐",color:"text-amber-300",label:"In Progress"}:{icon:"✓",color:"text-green-300",label:"Completed"}},_n=r.orgProfile.trustName||"Unconfigured Trust",lt=r.orgProfile.projectName||"Unnamed Project",Rn=!Pa(r.orgProfile);return e.jsxs("div",{className:`flex h-screen overflow-hidden ${I.darkMode?"bg-slate-900 text-slate-100":"bg-slate-50 text-slate-800"}`,children:[e.jsx("div",{role:"status","aria-live":"polite",className:"sr-only",children:Z}),e.jsx("input",{ref:Y,type:"file",accept:"application/json",className:"hidden",onChange:Me}),i&&e.jsx("div",{className:"fixed inset-0 z-10 bg-slate-900/35 backdrop-blur-[1px] lg:hidden",onClick:()=>l(!1)}),e.jsxs("div",{className:`fixed inset-y-0 left-0 z-20 bg-[#005eb8] text-white flex flex-col shadow-xl overflow-hidden transition-all duration-300 ease-out lg:static lg:translate-x-0 ${i?"w-72 translate-x-0":"w-0 -translate-x-full lg:w-0"}`,style:{backgroundColor:I.themeColor},children:[e.jsxs("div",{className:"p-6 border-b border-blue-700",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold tracking-tight",children:"NHS Digital Adoption"}),e.jsxs("p",{className:"text-blue-200 text-xs mt-1 flex justify-between items-center",children:[e.jsx("span",{children:"Readiness Tracking Tool"}),e.jsx("span",{className:"opacity-80 font-medium",children:"V6.6"})]})]}),I.profileImageDataUrl?e.jsx("img",{src:I.profileImageDataUrl,alt:"Profile",className:"h-10 w-10 rounded-full border-2 border-blue-200 object-cover"}):null]}),e.jsx("button",{type:"button",onClick:()=>A("profile"),className:"mt-3 w-full rounded-md bg-blue-700 p-2 text-left text-xs hover:bg-blue-600",children:e.jsxs("div",{className:"font-semibold text-blue-100",children:["Objectives: ",wn,"/",tn.length]})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto py-4",children:[e.jsxs("button",{type:"button","aria-expanded":le.intro,onClick:()=>ie(p=>({...p,intro:!p.intro})),className:"mb-2 flex w-full items-center justify-between px-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-300 hover:text-white",children:[e.jsx("span",{children:"Intro"}),e.jsx("span",{"aria-hidden":"true",children:le.intro?"−":"+"})]}),le.intro?e.jsx("nav",{className:"space-y-1 mb-4",children:["introduction","engine-explained","project-details","where-am-i-now"].map(p=>e.jsx("button",{ref:k=>{ze.current[`view:${p}`]=k},onClick:()=>A(p),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${u===p?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:p==="introduction"?"Introduction":p==="engine-explained"?"Engine Explained":p==="project-details"?"Project Profile":"Where Am I Now?"},p))}):null,Rn?e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button","aria-expanded":le.overview,onClick:()=>ie(p=>({...p,overview:!p.overview})),className:"mb-2 flex w-full items-center justify-between px-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-300 hover:text-white",children:[e.jsx("span",{children:"Overview"}),e.jsx("span",{"aria-hidden":"true",children:le.overview?"−":"+"})]}),le.overview?e.jsx("nav",{className:"space-y-1 mb-4",children:["dashboard","daily-checkin","action-plan","roadmap-view"].map(p=>e.jsx("button",{ref:k=>{ze.current[`view:${p}`]=k},onClick:()=>A(p),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${u===p?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:p==="dashboard"?"Metrics Dashboard":p==="daily-checkin"?"Daily Check-in":p==="action-plan"?"Action Tracker":"Component Delivery Timeline"},p))}):null,e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Change Components"}),e.jsx("nav",{className:"space-y-2 mb-8",children:Array.from(new Set(n.map(p=>p.phase))).map(p=>{const k=n.filter(ee=>ee.phase===p),M=Ke[p]??!1;return e.jsxs("div",{className:"mx-2 overflow-hidden rounded-md",style:{backgroundColor:`${Ld[p]||"#3b82f6"}33`},children:[e.jsxs("button",{type:"button","aria-expanded":M,onClick:()=>B(ee=>({...ee,[p]:!M})),className:"flex w-full items-center justify-between px-3 pb-1.5 pt-2.5 text-left text-sm font-semibold uppercase tracking-wider text-white",children:[e.jsx("span",{children:Qe[p]||`Phase ${p}`}),e.jsx("span",{"aria-hidden":"true",children:M?"−":"+"})]}),M?k.map(ee=>{const q=u==="assessment"&&s===ee.id,me=Fn(ee);return e.jsxs("button",{ref:ue=>{ze.current[`component:${ee.id}`]=ue},onClick:()=>{W(ee.id)},className:`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${q?"bg-white font-medium text-[#005eb8]":`hover:bg-blue-800 ${me.color}`}`,children:[e.jsx("span",{className:"truncate pr-2",children:Di(ee.label)}),e.jsx("span",{className:"text-xs flex-shrink-0",title:me.label,"aria-label":me.label,children:me.icon})]},ee.id)}):null]},p)})}),e.jsxs("button",{type:"button","aria-expanded":le.tools,onClick:()=>ie(p=>({...p,tools:!p.tools})),className:"mb-2 flex w-full items-center justify-between px-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-300 hover:text-white",children:[e.jsx("span",{children:"Tools"}),e.jsx("span",{"aria-hidden":"true",children:le.tools?"−":"+"})]}),le.tools?e.jsx("nav",{className:"space-y-1 mb-8",children:["highlight-builder","force-field-analysis","compare","audit-log"].map(p=>e.jsx("button",{ref:k=>{ze.current[`view:${p}`]=k},onClick:()=>A(p),className:`w-full flex items-center px-4 py-1 text-sm transition-colors ${u===p?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:p==="highlight-builder"?"Highlight Builder":p==="force-field-analysis"?"Force Field Analysis":p==="compare"?"Assess & Compare":"Audit Log"},p))}):null]}):null,e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider border-t border-blue-800 pt-6",children:"Account"}),e.jsx("nav",{className:"space-y-1 mb-8",children:(Rn?["settings","profile"]:["profile"]).map(p=>e.jsx("button",{ref:k=>{ze.current[`view:${p}`]=k},onClick:()=>A(p),className:`w-full flex items-center px-4 py-1 text-sm transition-colors ${u===p?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:p==="settings"?"Settings":"Profile"},p))}),e.jsxs("div",{className:"mt-8 px-4 pb-4 border-t border-blue-800 pt-6",children:[e.jsx("div",{className:"text-[10px] font-semibold text-blue-300 uppercase tracking-wider mb-3",children:"Status Legend"}),e.jsxs("div",{className:"space-y-2 text-xs text-blue-200",children:[e.jsx("div",{children:"◯ Not Started"}),e.jsx("div",{children:"◐ In Progress"}),e.jsx("div",{children:"⚠ Missing Justification"}),e.jsx("div",{children:"✓ Completed"})]})]})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col h-screen overflow-hidden",children:[e.jsx("header",{className:`${I.darkMode?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} border-b px-3 py-2 sm:px-6 shrink-0 z-10 ${u==="introduction"?"":"shadow-sm"}`,style:{borderTop:`3px solid ${I.themeColor}`},children:e.jsxs("div",{className:"flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{className:"min-w-0 flex items-center gap-2 sm:gap-3",children:[e.jsxs("button",{onClick:()=>l(p=>!p),className:"inline-flex h-9 items-center justify-center px-3 text-white rounded-md font-semibold transition-colors shadow-sm","aria-label":i?"Collapse side navigation":"Expand side navigation",title:i?"Collapse side navigation":"Expand side navigation",style:{backgroundColor:I.themeColor},children:[e.jsx("span",{"aria-hidden":"true",className:"text-lg leading-none",children:i?"«":"»"}),e.jsx("span",{className:"sr-only",children:i?"Collapse side navigation":"Expand side navigation"})]}),e.jsx("button",{onClick:U,disabled:Ce.length===0,title:Ce.length===0?"No previous in-app page":"Back to previous page",className:`h-9 text-sm px-3 rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${I.darkMode?"text-slate-100 hover:bg-slate-700":"text-slate-600 hover:bg-slate-100"}`,children:"← Back"}),e.jsx("div",{className:"min-w-0",children:e.jsxs("div",{className:"flex min-w-0 items-center gap-1 text-sm",children:[e.jsx("span",{className:`truncate font-semibold ${I.darkMode?"text-slate-100":"text-slate-700"}`,title:_n,children:_n}),e.jsx("span",{className:`${I.darkMode?"text-slate-300":"text-slate-400"}`,children:"/"}),e.jsx("span",{className:`truncate ${I.darkMode?"text-slate-100":"text-slate-600"}`,title:lt,children:lt})]})})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 lg:justify-end",children:[e.jsxs("span",{className:"inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-800 sm:h-9 sm:w-auto sm:rounded-full",title:"Auto-save on","aria-label":"Auto-save on",children:[e.jsx("span",{className:"inline-flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white","aria-hidden":"true",children:"✓"}),e.jsx("span",{className:"sr-only sm:not-sr-only sm:ml-1",children:"Auto-save on"})]}),e.jsx("button",{onClick:()=>A("introduction"),"aria-label":"Show introduction",title:"Show introduction",className:`text-sm w-9 h-9 flex items-center justify-center bg-white text-[#425563] border border-[#768692] hover:bg-[#f0f4f5] rounded-full font-semibold transition-colors ${Qt}`,children:"?"}),e.jsx("button",{type:"button",onClick:()=>{window.location.hash="#/"},"aria-label":"Go to home page",title:"Go to home page",className:`${Ge} h-9 w-16 px-6 py-0 inline-flex items-center justify-center`,children:"Home"}),e.jsx("button",{onClick:we,className:`${Ge} h-9 px-3 py-0`,children:"Import"}),e.jsxs("button",{onClick:de,className:`${Ge} h-9 px-3 py-0`,children:[e.jsx("span",{className:"sm:hidden",children:"Export"}),e.jsx("span",{className:"hidden sm:inline",children:"Export"})]})]})]})}),e.jsxs("main",{ref:y,className:"flex-1 overflow-y-auto p-8",children:[u==="daily-checkin"&&G?e.jsxs("section",{className:`${I.darkMode?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-6 rounded-xl border p-4 shadow-sm`,children:[e.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${I.darkMode?"text-slate-300":"text-slate-500"}`,children:"Objectives"}),e.jsxs("p",{className:`text-sm mt-1 ${I.darkMode?"text-slate-100":"text-slate-700"}`,children:[wn,"/",tn.length," complete - based on phase readiness, ownership, cadence and team participation."]})]}),e.jsx("button",{type:"button",onClick:()=>Ne(!1),className:`${I.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-2 text-sm font-medium`,"aria-label":"Dismiss objectives card",children:"Dismiss"})]}),e.jsx("div",{className:"mt-4 grid gap-3 md:grid-cols-3",children:tn.map(p=>e.jsxs("div",{className:`rounded-lg border p-3 ${p.completed?"border-green-200 bg-green-50":I.darkMode?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${I.darkMode?"text-slate-100":"text-slate-800"}`,children:p.label}),e.jsx("span",{className:"text-xs font-bold",children:p.completed?"Done":"Not yet"})]}),e.jsx("p",{className:`mt-1 text-xs ${I.darkMode?"text-slate-300":"text-slate-600"}`,children:p.description})]},p.id))})]}):null,u==="dashboard"&&e.jsx("div",{ref:j,children:e.jsx(So,{store:r,components:n,lenses:t,metrics:xe,phaseFocusMode:I.phaseFocusMode||"auto",manualPhaseFocus:I.manualPhaseFocus,onPhaseFocusModeChange:p=>H(k=>({...k,phaseFocusMode:p,manualPhaseFocus:p==="manual"?k.manualPhaseFocus||xe.currentPhase:k.manualPhaseFocus})),onManualPhaseFocusChange:p=>H(k=>({...k,phaseFocusMode:"manual",manualPhaseFocus:p})),onResetPhaseFocus:()=>H(p=>({...p,phaseFocusMode:"auto",manualPhaseFocus:xe.currentPhase})),getEntry:J,onComponentClick:W,onNavigate:A,onOpenLensInfo:c,onOpenOnboarding:()=>A("introduction"),colorAccessibilityMode:I.colorAccessibilityMode||"standard",darkMode:!!I.darkMode,componentRadarVisible:ye,onComponentRadarVisibleChange:se,componentRadarSize:De,onComponentRadarSizeChange:$e})}),u==="where-am-i-now"&&e.jsx($l,{components:n,getEntry:J,effectivePhaseFocus:ke,phaseFocusMode:I.phaseFocusMode||"auto",onComponentClick:W,onSetManualPhase:p=>H(k=>({...k,phaseFocusMode:"manual",manualPhaseFocus:p})),onResetToAuto:()=>H(p=>({...p,phaseFocusMode:"auto",manualPhaseFocus:xe.currentPhase})),darkMode:!!I.darkMode}),u==="daily-checkin"&&e.jsx(Rr,{store:r,components:n,metrics:xe,getEntry:J,onComponentClick:W,onActionView:Se,guidanceTarget:_a,linkOverrides:r.orgProfile.linkOverrides,showAdditionalGuidanceLinks:he,phaseFocusMode:I.phaseFocusMode||"auto",manualPhaseFocus:I.manualPhaseFocus,colorAccessibilityMode:I.colorAccessibilityMode||"standard",darkMode:!!I.darkMode}),u==="project-details"&&e.jsx(Ir,{orgProfile:r.orgProfile,onProfileUpdate:Gn,components:n,lenses:t,onComponentClick:W,onGoToIntroduction:()=>A("introduction"),onContinueToVision:()=>W("vision"),onGoToWhereAmINow:()=>A("where-am-i-now"),currentUserId:b,onCurrentUserChange:w,showExternalLinksSection:!!I.showExternalLinksSection,darkMode:!!I.darkMode}),u==="assessment"&&e.jsx(xr,{store:r,components:n,activeComponentId:s,getRubricText:Hd,getEntry:J,onComponentChange:W,onEntryUpdate:Fe,onOpenLensInfo:c,onActionRemove:(p,k,M)=>{const q=J(p,k).actions.find(ue=>ue.id===M);if(!q)return;const me=window.prompt("Please provide a reason for removing this action. This will be included in the JSON export audit log.");if(!me||!me.trim()){window.alert("Removal cancelled. A reason is required to remove an action.");return}o(ue=>{var jn;const Le=((jn=ue.currentDraft[p])==null?void 0:jn[k])||Ot(),hn={...Le,actions:Le.actions.filter(mn=>mn.id!==M).map(Md)},Oe={...ue.suppressedAutoActions};if(M.startsWith("vision-action:")||M.startsWith("case-for-change-action:")||M.startsWith("benefits-action:")||M.startsWith("sponsorship-action:")||M.startsWith("change-impact-action:")){const mn=Gd(p,k),Pn=Oe[mn]||[];Pn.includes(M)||(Oe[mn]=[...Pn,M])}const fe={...ue,currentDraft:{...ue.currentDraft,[p]:{...ue.currentDraft[p],[k]:hn}},suppressedAutoActions:Oe};return{...kn(fe),auditLog:ve(ue,[{eventType:"action-removed",entityType:"action",entityId:M,summary:`Removed action from ${p} / ${k}`,componentId:p,lens:k,reason:me.trim(),before:{text:q.text,status:q.status,owner:q.owner,actionType:q.actionType},source:"local"}])}})},onObjectivesUpdate:v,onNavigateToTool:p=>A(p),hideGuidedWorkflow:!!I.hideGuidedWorkflow,onHideGuidedWorkflow:()=>H(p=>({...p,hideGuidedWorkflow:!0})),showAdditionalGuidanceLinks:he,showActionPriorityColours:!!I.showActionPriorityColours,currentUserId:b,currentUserProfileImageDataUrl:I.profileImageDataUrl,darkMode:!!I.darkMode,focusAction:ne,onFocusActionHandled:()=>oe(null)}),u==="action-plan"&&e.jsx(Xi,{actions:Ae,onComponentClick:W,onStatusChange:Cn,teamMembers:r.orgProfile.teamMembers||[],darkMode:!!I.darkMode}),u==="introduction"&&e.jsx(Cl,{darkMode:!!I.darkMode,onGetStarted:()=>A("engine-explained")}),u==="engine-explained"&&e.jsx(Jr,{darkMode:!!I.darkMode,onGetStarted:()=>A("project-details"),onComponentClick:W}),u==="roadmap-view"&&e.jsx(rl,{components:n,metrics:xe,getEntry:J,onComponentClick:W,pathway:r.orgProfile.cst.pathway,pathwayChecks:r.pathwayChecks,darkMode:!!I.darkMode}),u==="highlight-builder"&&e.jsx(fl,{store:r,metrics:xe,lenses:t,components:n,getEntry:J,trustName:r.orgProfile.trustName,projectName:r.orgProfile.projectName,themeColor:I.themeColor,currentUserId:b,darkMode:!!I.darkMode}),u==="force-field-analysis"&&e.jsx(Pi,{embedded:!0,onBack:()=>A("dashboard"),components:n,teamMembers:r.orgProfile.teamMembers||[],objectives:r.objectives,getEntry:J,onEntryUpdate:Fe,onObjectivesUpdate:v}),u==="compare"&&e.jsx(qi,{embedded:!0,onBack:()=>A("dashboard")}),u==="audit-log"&&e.jsx(vr,{events:r.auditLog,darkMode:!!I.darkMode}),u==="settings"&&e.jsx(Pl,{userSettings:I,onUserSettingsUpdate:Mn,onLoadExampleData:je,onResetData:nn,darkMode:!!I.darkMode}),u==="profile"&&e.jsx(_l,{orgProfile:r.orgProfile,onProfileUpdate:Gn,userSettings:I,onUserSettingsUpdate:Mn,currentUserId:b,onCurrentUserChange:w,objectives:tn,darkMode:!!I.darkMode})]}),d?e.jsx(yl,{lensName:d,onClose:()=>c(""),darkMode:!!I.darkMode}):null,O?e.jsx(Sl,{report:O.report,myLabel:r.orgProfile.projectName||r.orgProfile.trustName||"Mine",theirLabel:((Jn=O.parsed.orgProfile)==null?void 0:Jn.projectName)||((ct=O.parsed.orgProfile)==null?void 0:ct.trustName)||O.file.name,onResolve:Ue,onCancel:Ee,darkMode:!!I.darkMode}):null,e.jsx(Ji,{toolkitChoice:r.orgProfile.cst.toolkitChoice,darkMode:!!I.darkMode}),e.jsx(Ki,{open:u==="assessment"&&s==="vision"&&x.isOpen,onClose:x.close,darkMode:!!I.darkMode}),e.jsx(Ta,{open:ge!==null,onCancel:()=>be(null),onContinue:p=>{ge&&(p&&sn(tt,!0),un(ge.componentId,ge.lens,ge.actionId,ge.status),be(null))},darkMode:!!I.darkMode})]})]})}export{ou as AdoptionApp,ou as default};
