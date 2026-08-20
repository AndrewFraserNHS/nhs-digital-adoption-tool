import{r as g,j as e,a as Cn}from"./vendor-react-nTLHQtbJ.js";import{g as Rt,p as ha,G as fa,d as ba}from"./vendor-misc-D88HtX07.js";import{g as xa,D as Sa,P as Ss,O as vs,C as va,a as ya,b as Mn,c as Un,T as wa,i as Na}from"./cst-lRfzm-Og.js";import{A as Hn,a as pn,n as Me,i as ys,d as Pt,U as Ca}from"./actionModel-g5JtsqyG.js";import{A as Jn,g as dt}from"./components-aRtg6FgR.js";import{d as Gn,e as Ea}from"./utils-DfGUeqEM.js";import{C as Ve}from"./vendor-chart-DnMUodEx.js";function ws(){return[{title:"What is the Adoption Engine?",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsxs("p",{className:"text-sm text-slate-700",children:["Going live with a new digital product isn't the finish line - people still need to adopt it, change how they work, and keep using it."," "]}),e.jsx("p",{className:"text-sm text-slate-700",children:"The Adoption Engine helps you track how people and teams are adopting the change before go-live, during rollout, and after launch so progress is visible and outcomes are measurable."}),e.jsx("p",{className:"text-sm text-slate-700",children:" It helps you answer four simple questions:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"Where are we going?"}),e.jsx("li",{children:" How will we know we've got there?"}),e.jsx("li",{children:" What needs to be in place?"}),e.jsx("li",{children:" What should we do next?"})]}),e.jsx("p",{className:"text-sm text-slate-700",children:"The goal is not just to implement change, but to ensure it is adopted, embedded and delivering benefits."})]})},{title:"What is a CST?",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"A CST (Context Specific Template) contains the information that makes the Adoption Engine specific to your project, programme or initiative."}),e.jsx("p",{children:"It captures key information such as your scope, milestones, outcomes and benefits, and tailors the guidance, actions and resources provided."}),e.jsxs("p",{children:["You can update your CST at any time from ",e.jsx("strong",{children:"CST Personalisation"})]})]})},{title:"Adoption Pathways",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"The Adoption Engine supports three common change journeys:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Starting for the First Time"}),e.jsx("br",{}),"Building the foundations for successful adoption."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Piloted and Ready to Scale Up"}),e.jsx("br",{}),"Expanding a successful pilot to a wider audience."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Gone Live but Adoption is Patchy"}),e.jsx("br",{}),"Strengthening adoption where uptake or benefits are lower than expected."]})]}),e.jsx("p",{children:"Choose your pathway to tailor the guidance, actions and resources you see."})]})},{title:"How the Adoption Engine Works",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"The engine is built around components such as Vision, Sponsorship, Engagement, Capability and Benefits."}),e.jsxs("p",{children:["Each component is viewed through five ",e.jsx("strong",{children:"lenses"}),":"]}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"Strategic Direction and Leadership"}),e.jsx("li",{children:"People Experience and Culture"}),e.jsx("li",{children:"Planning and Risk"}),e.jsx("li",{children:"Skills and Behaviour"}),e.jsx("li",{children:"Process and Sustainment"})]}),e.jsx("p",{children:"As you assess each area, the engine recommends actions, resources and evidence to help improve adoption."})]})},{title:"Getting Started",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{className:"text-sm text-slate-700",children:"Start with CST Personalisation to review your CST. "}),e.jsx("p",{className:"text-sm text-slate-700",children:"Then visit the Dashboard to:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"View your current position"}),e.jsx("li",{children:"Explore components and lenses"}),e.jsx("li",{children:"Identify priority actions"}),e.jsx("li",{children:"Track progress and benefits"})]}),e.jsxs("p",{className:"text-sm text-slate-700",children:["The Adoption Engine will help guide your journey from ambition to adoption."," "]})]})}]}function Ia({open:n,onClose:t,onNavigateToProjectDetails:s,onNavigateToGuide:a}){const[r,o]=g.useState(0),l=ws();if(g.useEffect(()=>{n&&o(0)},[n]),!n)return null;const h=l[r],i=r===0,x=r===l.length-1;return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:"relative w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("p",{className:"text-xs font-semibold uppercase tracking-wider text-blue-600",children:["Introduction · Step ",r+1," of ",l.length]}),e.jsx("button",{type:"button",onClick:t,className:"rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100",children:"Skip"})]}),e.jsx("h3",{className:"mt-3 text-lg font-semibold text-slate-900",children:h.title}),e.jsx("div",{className:"mt-3",children:h.body}),e.jsxs("div",{className:"mt-6 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:()=>o(N=>Math.max(0,N-1)),disabled:i,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed",children:"Back"}),x?e.jsxs("div",{className:"flex items-stretch gap-2",children:[s?e.jsx("button",{type:"button",onClick:s,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"Set up your CST Personalisation"}):null,a?e.jsx("button",{type:"button",onClick:a,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"See the 6 Key Questions"}):null,e.jsx("button",{type:"button",onClick:t,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Go to dashboard"})]}):e.jsx("button",{type:"button",onClick:()=>o(N=>Math.min(l.length-1,N+1)),className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Next"})]})]})})}const ka={"avt-v2-2026":[{id:"avt-vision-case-for-change",title:"Vision and Case for Change",pageHint:"Section: Early readiness",text:"Use a clear case for change, define outcomes, and ensure leadership sponsorship before go-live."},{id:"avt-stakeholder-engagement",title:"Stakeholder Engagement",pageHint:"Section: People and communication",text:"Map stakeholder groups, identify adoption risks, and use targeted communication plans for each audience."},{id:"avt-training-readiness",title:"Training and Capability",pageHint:"Section: Capability and learning",text:"Align learning interventions with role-based needs and verify confidence through readiness checkpoints."},{id:"avt-benefits-tracking",title:"Benefits Tracking",pageHint:"Section: Value realisation",text:"Set measurable adoption indicators and review benefit evidence at regular intervals post go-live."},{id:"avt-reinforcement-bau",title:"Reinforcement and BAU Transfer",pageHint:"Section: Sustainment",text:"Embed reinforcement actions and hand over ownership to business-as-usual teams for sustained adoption."}],"change-management-v3-2023":[{id:"cmt-leadership-alignment",title:"Leadership Alignment",pageHint:"Section: Sponsorship and governance",text:"Secure visible executive sponsorship and align governance with programme milestones and risks."},{id:"cmt-change-impact",title:"Change Impact Assessment",pageHint:"Section: Planning and risk",text:"Assess process, role, and behaviour impacts early and prioritise mitigations before deployment."},{id:"cmt-resistance-management",title:"Resistance Management",pageHint:"Section: Adoption barriers",text:"Identify likely resistance themes and define practical interventions with named owners and timelines."},{id:"cmt-comms-cadence",title:"Communication Cadence",pageHint:"Section: Communications",text:"Establish a predictable communication cadence using concise updates and feedback loops."},{id:"cmt-post-go-live-support",title:"Post Go-Live Support",pageHint:"Section: Stabilisation",text:"Provide hypercare support with clear escalation routes and transition criteria into steady state."}]};fa.workerSrc=ha;function ja({toolkitChoice:n,darkMode:t=!1}){const[s,a]=g.useState(!1),[r,o]=g.useState(!1),[l,h]=g.useState(""),[i,x]=g.useState(1),[N,k]=g.useState("idle"),[p,c]=g.useState(""),[m,O]=g.useState([]),_=g.useMemo(()=>xa(n),[n]),b=g.useMemo(()=>(ka[n]||[]).map(L=>({id:L.id,title:L.title,pageHint:L.pageHint,text:L.text,pageNumber:null})),[n]);g.useEffect(()=>{if(!s)return;let L=!1;return(async()=>{k("loading"),c("");try{const z=await fetch(_.path);if(!z.ok)throw new Error(`HTTP ${z.status}`);const te=await z.arrayBuffer(),de=new Uint8Array(te);let ne;try{ne=await Rt({data:de}).promise}catch(J){if(ne=await Rt({data:de,disableWorker:!0}).promise,!L){const xe=J instanceof Error?J.message:String(J);c(`Worker fallback used: ${xe}`)}}const T=[];for(let J=1;J<=ne.numPages;J+=1){if(L)return;const A=(await(await ne.getPage(J)).getTextContent()).items.map(se=>"str"in se?se.str:"").join(" ").replace(/\s+/g," ").trim();A&&T.push({id:`${n}-page-${J}`,title:`Page ${J}`,pageHint:`Page ${J}`,text:A,pageNumber:J})}L||(O(T),k("ready"))}catch{L||(O([]),k("error"),c("Unable to read PDF text for indexing in this browser session."))}})(),()=>{L=!0}},[s,_.path,n]),g.useEffect(()=>{x(1),h(""),O([]),k("idle"),c("")},[n]);const S=m.length>0?m:b,V=g.useMemo(()=>{const L=Number.isFinite(i)&&i>0?Math.floor(i):1;return`${_.path}#page=${L}`},[_.path,i]),F=g.useMemo(()=>{const L=l.trim().toLowerCase();if(!L)return S.slice(0,5).map(te=>({entry:te,score:0}));const ce=L.split(/\s+/).filter(Boolean),z=te=>{const de=`${te.title} ${te.text} ${te.pageHint}`.toLowerCase();let ne=0;return de.includes(L)&&(ne+=8),ce.forEach(T=>{de.includes(T)?ne+=2:de.split(/\W+/).some(xe=>xe&&(xe.includes(T)||T.includes(xe)))&&(ne+=1)}),ne};return S.map(te=>({entry:te,score:z(te)})).filter(te=>te.score>0).sort((te,de)=>de.score-te.score).slice(0,5)},[l,S])[0]||null;return g.useEffect(()=>{l.trim()&&F!=null&&F.entry.pageNumber&&x(F.entry.pageNumber)},[F,l]),e.jsxs("div",{className:"fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2","data-testid":"global-toolkit-chatbot",children:[s?e.jsxs("div",{className:`w-[380px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border shadow-2xl ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant"}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("button",{type:"button",onClick:()=>o(!0),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Maximise"}),e.jsx("button",{type:"button",onClick:()=>a(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Minimise"})]})]}),e.jsxs("div",{className:`space-y-3 p-3 ${t?"bg-slate-800":"bg-slate-50"}`,children:[e.jsxs("div",{className:`max-w-[95%] rounded-2xl rounded-bl-md px-3 py-2 text-xs shadow-sm ${t?"bg-slate-700 text-slate-100":"bg-white text-slate-700"}`,children:["Showing your selected toolkit from CST Personalisation:",e.jsx("div",{className:"mt-1 font-semibold",children:_.label})]}),e.jsx("div",{className:`overflow-hidden rounded-lg border ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:e.jsx("iframe",{title:"Selected Toolkit Preview",src:V,className:"h-[260px] w-full"})}),e.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-end gap-2",children:[e.jsx("label",{htmlFor:"toolkit-page-input",className:`text-[11px] font-semibold uppercase tracking-wider ${t?"text-slate-300":"text-slate-600"}`,children:"Go to page"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{id:"toolkit-page-input",type:"number",min:1,value:i,onChange:L=>x(Number(L.target.value)||1),className:`w-20 rounded-md border px-2 py-1.5 text-xs ${t?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})})]}),e.jsxs("div",{className:`rounded-lg border p-2 ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsx("label",{htmlFor:"toolkit-fuzzy-search",className:`mb-1 block text-[11px] font-semibold uppercase tracking-wider ${t?"text-slate-300":"text-slate-600"}`,children:"Quick snippet search"}),e.jsx("input",{id:"toolkit-fuzzy-search",type:"search",value:l,onChange:L=>h(L.target.value),placeholder:"Try: sponsorship, training, resistance",className:`w-full rounded-md border px-2 py-1.5 text-xs ${t?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-400":"border-slate-300 bg-white text-slate-900 placeholder-slate-500"}`}),e.jsx("div",{className:"mt-2",children:l.trim()?F!=null&&F.entry.pageNumber?e.jsxs("button",{type:"button",onClick:()=>{x(F.entry.pageNumber),o(!0)},className:`w-full rounded-md px-2 py-1.5 text-left text-xs font-semibold ${t?"bg-slate-800 text-slate-100 hover:bg-slate-700":"bg-slate-100 text-slate-800 hover:bg-slate-200"}`,children:["Go to best match: Page ",F.entry.pageNumber]}):e.jsx("p",{className:`text-xs ${t?"text-slate-400":"text-slate-500"}`,children:"No close page match found. Try broader keywords."}):e.jsx("p",{className:`text-xs ${t?"text-slate-400":"text-slate-500"}`,children:"Enter a keyword to jump to the most relevant page."})}),e.jsx("p",{className:`mt-2 text-[11px] ${t?"text-slate-400":"text-slate-500"}`,children:N==="loading"?"Indexing toolkit text from all pages...":N==="ready"?`Search is using full-document text (${m.length} pages indexed).`:N==="error"?"Full-document indexing unavailable, using fallback snippets.":"Search will expand to all pages when the assistant opens."}),p?e.jsx("p",{className:`mt-1 text-[11px] ${t?"text-amber-300":"text-amber-700"}`,children:p}):null]}),e.jsx("a",{href:_.path,target:"_blank",rel:"noopener noreferrer",className:"inline-block text-xs font-semibold text-[#005eb8] underline",children:"Open full toolkit in new tab"})]})]}):null,r?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4",children:e.jsxs("div",{className:`relative h-[90vh] w-[95vw] overflow-hidden rounded-2xl border shadow-2xl ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant · Expanded Viewer"}),e.jsx("button",{type:"button",onClick:()=>o(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Close"})]}),e.jsx("iframe",{title:"Selected Toolkit Full View",src:V,className:"h-[calc(90vh-42px)] w-full"})]})}):null,e.jsxs("button",{type:"button",onClick:()=>a(L=>!L),className:"inline-flex items-center gap-2 rounded-full bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-blue-700","aria-label":"Open toolkit assistant",children:[e.jsx("span",{"aria-hidden":"true",children:"💬"}),"Toolkit assistant"]})]})}function Ns({showAdvancedControls:n,onToggleAdvanced:t,onReset:s,resultText:a,activeFilters:r,activeFiltersAriaLabel:o,darkMode:l=!1}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:t,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${l?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:n?"Hide advanced controls":"Show advanced controls"}),e.jsx("button",{type:"button",onClick:s,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${l?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:"Reset filters"}),e.jsx("span",{className:`text-xs ${l?"text-slate-300":"text-slate-500"}`,"aria-live":"polite",children:a})]}),r.length>0?e.jsx("div",{className:"flex flex-wrap gap-2","aria-label":o,children:r.map(h=>e.jsx("span",{className:`inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${l?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-slate-50 text-slate-700"}`,children:h},h))}):null]})}function Aa({actions:n,onComponentClick:t,teamMembers:s=[],darkMode:a=!1}){const[r,o]=g.useState(""),[l,h]=g.useState("all"),[i,x]=g.useState("all"),[N,k]=g.useState("all"),[p,c]=g.useState("all"),[m,O]=g.useState("all"),[_,b]=g.useState("component"),[S,V]=g.useState("asc"),[C,F]=g.useState(!1),L=g.useCallback(A=>{t(A)},[t]),ce=g.useMemo(()=>Array.from(new Set(n.map(A=>A.component))).sort((A,se)=>A.localeCompare(se)),[n]),z=g.useMemo(()=>Array.from(new Set([...s.map(A=>A.name),...n.map(A=>A.action.owner).filter(Boolean)])).sort((A,se)=>A.localeCompare(se)),[n,s]),te=g.useMemo(()=>Array.from(new Set(n.map(A=>A.action.status))).sort((A,se)=>A.localeCompare(se)),[n]),de=g.useMemo(()=>{const A=n.map(se=>se.action.actionType).filter(se=>!!se);return Array.from(new Set([...Hn,...A])).sort((se,Q)=>se.localeCompare(Q))},[n]),ne=g.useMemo(()=>{const A=n.map(se=>se.action.readinessScore).filter(se=>se!==void 0);return Array.from(new Set(A)).sort((se,Q)=>se-Q)},[n]),T={0:"Not Started",1:"Emerging",2:"Developing",3:"Embedding",4:"Adopted",5:"Thriving"},J=g.useMemo(()=>{const A=r.trim().toLowerCase();return n.filter(Q=>l!=="all"&&Q.component!==l||i!=="all"&&Q.action.owner!==i||N!=="all"&&Q.action.status!==N||p!=="all"&&(Q.action.actionType||"")!==p||m!=="all"&&Q.action.readinessScore!==m?!1:A?[Q.component,Q.lens,Q.action.text,Q.action.actionType||"",Q.action.owner,Q.action.timescale,Q.action.status].join(" ").toLowerCase().includes(A):!0).sort((Q,w)=>{const R=Z=>{switch(_){case"lens":return Z.lens;case"owner":return Z.action.owner||"Unassigned";case"status":return Z.action.status;case"actionType":return Z.action.actionType||"Unassigned";case"component":default:return Z.component}},X=R(Q).localeCompare(R(w));return S==="asc"?X:-X})},[p,n,l,i,m,r,_,S,N]),xe=g.useMemo(()=>{const A=[];return r.trim()&&A.push(`Search: ${r.trim()}`),l!=="all"&&A.push(`Component: ${l}`),N!=="all"&&A.push(`Status: ${N}`),p!=="all"&&A.push(`Action type: ${p}`),m!=="all"&&A.push(`Readiness: ${T[m]}`),i!=="all"&&A.push(`Owner: ${i}`),(_!=="component"||S!=="asc")&&A.push(`Sort: ${_} (${S})`),A},[p,l,i,m,r,_,S,N]),Ee=()=>{o(""),h("all"),x("all"),k("all"),c("all"),O("all"),b("component"),V("asc"),F(!1)};return e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsx("h2",{className:`text-2xl font-bold mb-6 ${a?"text-slate-100":"text-slate-800"}`,children:"Action Tracker"}),e.jsxs("div",{className:`${a?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-4 mb-6 space-y-3`,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:r,onChange:A=>o(A.target.value),placeholder:"Search actions, owners, lenses...",className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-900 text-slate-100":"text-slate-900"}`}),e.jsxs("select",{value:l,onChange:A=>h(A.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All components"}),ce.map(A=>e.jsx("option",{value:A,children:A},A))]}),e.jsxs("select",{value:N,onChange:A=>k(A.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All statuses"}),te.map(A=>e.jsx("option",{value:A,children:A},A))]})]}),e.jsx(Ns,{showAdvancedControls:C,onToggleAdvanced:()=>F(A=>!A),onReset:Ee,resultText:`Showing ${J.length} actions`,activeFilters:xe,activeFiltersAriaLabel:"Active action tracker filters",darkMode:a}),C?e.jsxs("div",{className:`grid grid-cols-1 sm:grid-cols-5 gap-3 rounded-md border p-3 ${a?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("select",{value:i,onChange:A=>x(A.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),z.map(A=>e.jsx("option",{value:A,children:A},A))]}),e.jsxs("select",{value:p,onChange:A=>c(A.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),de.map(A=>e.jsx("option",{value:A,children:A},A))]}),e.jsxs("select",{value:m==="all"?"all":String(m),onChange:A=>O(A.target.value==="all"?"all":Number(A.target.value)),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All readiness levels"}),ne.map(A=>e.jsx("option",{value:String(A),children:T[A]},A))]}),e.jsxs("select",{value:_,onChange:A=>b(A.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${a?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"component",children:"Sort: Component"}),e.jsx("option",{value:"lens",children:"Sort: Lens"}),e.jsx("option",{value:"owner",children:"Sort: Owner"}),e.jsx("option",{value:"actionType",children:"Sort: Action Type"}),e.jsx("option",{value:"status",children:"Sort: Status"})]}),e.jsx("button",{type:"button",onClick:()=>V(A=>A==="asc"?"desc":"asc"),className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${a?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-white"}`,children:S==="asc"?"A-Z":"Z-A"})]}):null]}),e.jsx("div",{className:`${a?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:J.length?e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:`min-w-full table-fixed ${a?"divide-slate-700":"divide-slate-200"} divide-y`,children:[e.jsx("thead",{className:a?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Change Component"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Lens"}),e.jsx("th",{className:`w-[22%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Action Type"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Timescale"}),e.jsx("th",{className:`w-[14%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${a?"text-slate-300":"text-slate-500"}`,children:"Status"})]})}),e.jsx("tbody",{className:`${a?"bg-slate-800 divide-slate-700":"bg-white divide-slate-100"} divide-y`,children:J.map(({compId:A,component:se,lens:Q,action:w})=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-4 py-3 text-sm ${a?"text-slate-100":"text-slate-700"}`,children:e.jsx("button",{onClick:()=>L(A),className:"text-left underline underline-offset-2 hover:text-[#005eb8] transition-colors",children:se})}),e.jsx("td",{className:`px-4 py-3 text-sm ${a?"text-slate-300":"text-slate-500"}`,children:Q}),e.jsx("td",{className:`w-[22%] px-4 py-3 text-sm whitespace-normal break-words leading-snug ${a?"text-slate-100":"text-slate-700"}`,children:w.text}),e.jsx("td",{className:`px-4 py-3 text-sm ${a?"text-slate-100":"text-slate-700"}`,children:w.actionType||"Unassigned"}),e.jsx("td",{className:`px-4 py-3 text-sm ${a?"text-slate-100":"text-slate-700"}`,children:w.owner}),e.jsx("td",{className:`px-4 py-3 text-sm ${a?"text-slate-100":"text-slate-700"}`,children:w.timescale}),e.jsx("td",{className:"w-[14%] px-4 py-3 text-sm",children:e.jsx("span",{className:`inline-flex rounded-full border px-2 py-1 text-xs font-semibold ${pn[Me(w.status)]}`,children:Me(w.status)})})]},`${A}-${Q}-${w.text}`))})]})}):e.jsx("div",{className:`p-6 ${a?"text-slate-300":"text-slate-500"}`,children:n.length?"No actions match the current filters.":"No actions recorded yet."})})]})}function ut(n,t){if(!n.linkedActions.length)return"Not Started";const s=n.linkedActions.map(a=>{const r=(t[a.lens]||[]).find(o=>o.id===a.actionId);return(r==null?void 0:r.status)||"Planned"});return s.some(a=>a==="Blocked")?"Blocked":s.every(a=>a==="Completed")?"Completed":s.some(a=>a!=="Planned")?"In Progress":"Not Started"}function Dt(){return`cst-${Date.now()}-${Math.random().toString(36).slice(2,10)}`}function xt(n){return{trustName:(n==null?void 0:n.trustName)||"",region:(n==null?void 0:n.region)||"",trustType:(n==null?void 0:n.trustType)||"",projectName:(n==null?void 0:n.projectName)||"",leadName:(n==null?void 0:n.leadName)||"",cst:{...Sa,...(n==null?void 0:n.cst)||{}},linkOverrides:n==null?void 0:n.linkOverrides,componentFurtherReading:n==null?void 0:n.componentFurtherReading,teamMembers:(n==null?void 0:n.teamMembers)||[],cstId:n==null?void 0:n.cstId}}function Oa(n){return n?Object.keys(n).reduce((t,s)=>{const a=n[s]||{};return t[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},t},{}):{}}function Wn(n){return{view:(n==null?void 0:n.view)||"dashboard",orgProfile:xt(n==null?void 0:n.orgProfile),currentDraft:(n==null?void 0:n.currentDraft)||{},objectives:n!=null&&n.objectives?vt(n.objectives):{},suppressedAutoActions:_a(n==null?void 0:n.suppressedAutoActions),auditLog:Ra(n==null?void 0:n.auditLog),history:(n==null?void 0:n.history)||[],phaseOverrides:(n==null?void 0:n.phaseOverrides)||{},pathwayChecks:Oa(n==null?void 0:n.pathwayChecks)}}function _a(n){return n?Object.keys(n).reduce((t,s)=>(t[s]=[...n[s]||[]],t),{}):{}}function Ra(n){return n?n.map(t=>({...t})):[]}function st(){return{score:0,justification:"",evidence:"",actions:[]}}function Cs(n){return{score:n.score,justification:n.justification,evidence:n.evidence,actions:n.actions.map(t=>({...t,linkedTargets:(t.linkedTargets||[]).map(s=>({componentId:s.componentId,lens:s.lens}))}))}}function St(n){return Object.keys(n).reduce((t,s)=>(t[s]=Object.keys(n[s]).reduce((a,r)=>(a[r]=Cs(n[s][r]),a),{}),t),{})}function Pa(n){return{...n,linkedActions:n.linkedActions.map(t=>({...t}))}}function vt(n){return Object.keys(n).reduce((t,s)=>(t[s]=(n[s]||[]).map(Pa),t),{})}const mt={1:{vision:5,case_for_change:5,sponsorship:1,change_network:1,benefits:1,change_impact:1,risk_management:1,cm_readiness:1,stakeholder:1,resistance:1,skills_learning:1,capability:1,change_adoption:1,process_change:1,reinforcement:1,org_maturity:1,transfer_bau:1},2:{vision:5,case_for_change:5,sponsorship:2,change_network:2,benefits:3,change_impact:2,risk_management:2,cm_readiness:2,stakeholder:2,resistance:2,skills_learning:2,capability:2,change_adoption:2,process_change:3,reinforcement:2,org_maturity:2,transfer_bau:2},3:{vision:5,case_for_change:5,sponsorship:3,change_network:3,benefits:4,change_impact:3,risk_management:3,cm_readiness:3,stakeholder:3,resistance:3,skills_learning:4,capability:3,change_adoption:3,process_change:4,reinforcement:3,org_maturity:3,transfer_bau:3},4:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:4,stakeholder:5,resistance:4,skills_learning:5,capability:4,change_adoption:4,process_change:5,reinforcement:4,org_maturity:4,transfer_bau:4},5:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:5,stakeholder:5,resistance:5,skills_learning:5,capability:5,change_adoption:5,process_change:5,reinforcement:5,org_maturity:5,transfer_bau:5}};function kn(n,t,s){return!t||!mt[t]?s:mt[t][n]??s}function $t(n,t){var _;let s=0,a=0,r=0,o=0;const l=new Map,h=[];t.forEach(b=>{const S=l.get(b.phase)||{componentCount:0,assessedLenses:0,totalLenses:0,onTrackComponents:0,totalActions:0,completedActions:0};S.componentCount+=1,S.totalLenses+=b.lenses.length;let V=0,C=0,F=0,L=0;b.lenses.forEach(de=>{var xe;const ne=(xe=n.currentDraft[b.id])==null?void 0:xe[de],T=Number((ne==null?void 0:ne.score)||0);s+=T,V+=T,T>0&&(a+=1,C+=1,S.assessedLenses+=1),((ne==null?void 0:ne.actions)||[]).forEach(Ee=>{r+=1,F+=1,S.totalActions+=1,ys(Ee.status)&&(o+=1,L+=1,S.completedActions+=1)})});const ce=b.lenses.length?Number((V/b.lenses.length).toFixed(1)):0,z=kn(b.id,b.phase,b.target),te=Number(Math.max(0,z-ce).toFixed(1));ce>=z&&(S.onTrackComponents+=1),h.push({component:b,avgScore:ce,gapToTarget:te,assessedLenses:C,totalLenses:b.lenses.length,totalActions:F,completedActions:L}),l.set(b.phase,S)});const i=t.reduce((b,S)=>b+S.lenses.length,0),x=i*5,N=x?Math.round(s/x*100):0,k=r?Math.round(o/r*100):0,p=[...l.entries()].sort(([b],[S])=>b-S).map(([b,S])=>{const V=S.totalActions?Math.round(S.completedActions/S.totalActions*100):0,C=S.componentCount?S.onTrackComponents/S.componentCount:0,F=C>=.75&&V>=50?"Green":C>=.4||V>=25?"Amber":"Red";return{phase:b,componentCount:S.componentCount,assessedLenses:S.assessedLenses,totalLenses:S.totalLenses,onTrackComponents:S.onTrackComponents,actionCompletionPct:V,rag:F}}),c=p.find(b=>b.onTrackComponents<b.componentCount),m=(c==null?void 0:c.phase)||((_=p[p.length-1])==null?void 0:_.phase)||1,O=h.filter(({component:b,gapToTarget:S})=>b.phase<=m+1&&S>0).sort((b,S)=>b.component.phase!==S.component.phase?b.component.phase-S.component.phase:S.gapToTarget-b.gapToTarget).slice(0,3).map(({component:b,avgScore:S,gapToTarget:V,totalActions:C,completedActions:F,assessedLenses:L,totalLenses:ce})=>{const z=Math.max(0,C-F),te=L<ce?`Assess ${ce-L} remaining lens area(s).`:z>0?`Complete ${z} open action(s).`:"Create at least one delivery action linked to this component.";return{componentId:b.id,componentLabel:b.label,phase:b.phase,gapToTarget:V,message:`Raise ${b.label} from ${S.toFixed(1)} to target ${b.target}. ${te}`}});return{totalCurrent:s,assessedCount:a,totalExpected:i,overallPct:N,totalActions:r,completedActions:o,actionCompletionPct:k,currentPhase:m,phaseSummaries:p,nextSteps:O}}function Da(n,t,s,a){return t.map(r=>{let o=0,l=0;return s.forEach(h=>{h.lenses.includes(r)&&(o+=Number(a(h.id,r).score||0),l+=1)}),l?Number((o/l).toFixed(1)):0})}function $a(n,t){return n.map(s=>{let a=0,r=0;return t.forEach(o=>{o.lenses.includes(s)&&(a+=o.target,r+=1)}),r?Number((a/r).toFixed(1)):0})}function Ta(n,t,s,a){const r=Da(n,t,s,a),o=$a(t,s);return{labels:t,datasets:[{label:"Current Score",data:r,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",borderWidth:2,pointRadius:4,pointHoverRadius:6},{label:"Target",data:o,borderColor:"#00A499",backgroundColor:"rgba(0, 164, 153, 0.05)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function La(n,t,s){const a=s&&mt[s]?s:null,r=l=>l<=0?"#768692":l<1.5?"#AE2521":l<2.5?"#FFB81C":l<3.5?"#005EB8":l<4.5?"#330072":"#00A499",o=n.map(l=>{const h=l.lenses.reduce((i,x)=>i+Number(t(l.id,x).score||0),0);return Number((h/l.lenses.length).toFixed(1))});return{labels:n.map(l=>l.label),datasets:[{label:"Current Average Readiness",data:o,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.12)",borderWidth:2,pointRadius:4,pointHoverRadius:6,pointBackgroundColor:o.map(r),pointBorderColor:o.map(r)},{label:a?`Exemplar (Phase ${a})`:"Target Average",data:n.map(l=>kn(l.id,a||void 0,l.target)),borderColor:"#94a3b8",backgroundColor:"rgba(148, 163, 184, 0.06)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function Ba(n,t,s){const a=[],r=new Set,o=(l,h,i)=>{const x=`${i.id}:${l}:${h}`;if(r.has(x))return;r.add(x);const N=t(l);a.push({compId:l,component:N.label,lens:h,action:{...i}})};return Object.keys(n.currentDraft).forEach(l=>{Object.keys(n.currentDraft[l]).forEach(h=>{(s(l,h).actions||[]).forEach(x=>{(x.linkedTargets&&x.linkedTargets.length?x.linkedTargets:[{componentId:l,lens:h}]).forEach(k=>{o(k.componentId,k.lens,x)})})})}),a}function Fa(n,t,s){var i;const a=((i=n.objectives)==null?void 0:i[t])||[],r=x=>x.reduce((N,k)=>(N[k]=s(t,k).actions,N),{}),o=Array.from(new Set(a.flatMap(x=>x.linkedActions.map(N=>N.lens)))),l=r(o),h=a.filter(x=>ut(x,l)==="Completed").length;return{total:a.length,completed:h}}const Ma=`Pathway 1 - We are starting $projectName for the first time
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
adoption.`,at={"Pathway 1 - We are starting product for the first time":"pathway-1","Pathway 2 - We have piloted product and need to scale up":"pathway-2","Pathway 3 - product is live but adoption is patchy":"pathway-3","Pathway 1 - Pilot":"pathway-1","Pathway 2 - Scale up":"pathway-2","Pathway 3 - Reassess":"pathway-3"},Ua={vision:"Vision",case_for_change:"Case for Change",sponsorship:"Senior Sponsorship and Governance",change_network:"Change Network",benefits:"Benefits and WIIFM",stakeholder:"Stakeholder Engagement and Communication",process_change:"Process Change and Ways of Working",change_impact:"Change Impact and Risk",risk_management:"Change Impact and Risk",skills_learning:"Skills, Learning, Capability and Confidence",capability:"Skills, Learning, Capability and Confidence",change_adoption:"Change Adoption",transfer_bau:"Transfer to BAU",reinforcement:"Reinforcement",resistance:"Resistance",cm_readiness:"Readiness and Planning",org_maturity:"Organisational Change Management Maturity"};function Ga(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function it(n){return n.replace(/\bAVT\b/g,"${productName}")}function Va(n){const t=n.split(/\r?\n/).map(r=>r.trim()),s={};let a=0;for(;a<t.length;){const r=t[a],o=at[r];if(!o){a+=1;continue}for(a+=1;a<t.length&&!t[a];)a+=1;if(a>=t.length)break;const l=t[a];for(a+=1;a<t.length&&(!t[a]||t[a]==="Are you on track?");)a+=1;let h="";if(a<t.length&&t[a].startsWith("Descriptor:"))for(h=it(t[a].replace("Descriptor:","").trim()),a+=1;a<t.length&&t[a]&&!t[a].startsWith("☐")&&!t[a].startsWith("ARE YOU ON TRACK?")&&!at[t[a]];)h=it(`${h} ${t[a]}`.trim()),a+=1;const i=[];for(;a<t.length&&t[a].startsWith("☐");){const x=it(t[a].replace(/^☐\s*/,"").trim()),N=`${o}:${Ga(l)}:${i.length+1}`;i.push({key:N,text:x}),a+=1}for(s[l]||(s[l]={}),s[l][o]={domain:l,descriptor:h,checklist:i};a<t.length&&t[a]&&!at[t[a]];)a+=1}return s}const Ha=Va(Ma);function Wa(n){return Ua[n]||null}function yt(n,t){var a;const s=Wa(n);return s&&((a=Ha[s])==null?void 0:a[t])||null}function Es(n,t){if(!t||t.checklist.length===0)return{status:"on-track",completionPct:100,checkedCount:0,totalCount:0};const s=t.checklist.length,a=new Set(n),r=t.checklist.filter(l=>a.has(l.key)).length,o=Math.round(r/s*100);return o>=80?{status:"on-track",completionPct:o,checkedCount:r,totalCount:s}:o>=45?{status:"attention",completionPct:o,checkedCount:r,totalCount:s}:{status:"off-track",completionPct:o,checkedCount:r,totalCount:s}}function qa(n){const t=Es(n.checkedItemKeys,n.rule);return!n.rule||n.rule.checklist.length===0?{status:n.averageScore>=n.targetScore?"on-track":"attention",completionPct:t.completionPct,checkedCount:t.checkedCount,totalCount:t.totalCount}:t.status==="off-track"?t:n.averageScore<Math.max(1,n.targetScore-1)&&t.status!=="on-track"?{...t,status:"attention"}:t}const Ya=["Strategic Direction and Leadership","People Experience and Culture","Planning and Risk","Skills and Behaviour","Process and Sustainment"],wt={"Strategic Direction and Leadership":{outcome:"Provide a clear and unifying direction for the change, backed by visible, empowered leadership that removes barriers, prioritises resources, and drives accountability.",whatGoodLooksLike:"Leaders speak with one voice, consistently reinforcing the vision and outcomes. Decisions are timely, transparent, and aligned to strategic priorities. Governance is purposeful, with clear roles and escalations. Everyone understands why the change is happening and how it connects to organisational goals."},"People Experience and Culture":{outcome:"Create the conditions where people feel informed, supported, safe, and motivated, creating a culture that embraces the change rather than resists it.",whatGoodLooksLike:"Staff feel involved, heard, and respected. Communication is timely, honest, and tailored to different roles. People know how the change affects them and feel psychologically safe to raise concerns. Change Champions are active, engagement is high, and belief improves over time. Behaviours begin to shift organically as trust grows."},"Planning and Risk":{outcome:"Use evidence, data, and structured analysis to plan the change effectively, anticipate impacts, manage risks, and inform decision-making throughout delivery.",whatGoodLooksLike:"Impacts are well understood and documented. Risks are identified early and mitigated proactively. Baselines and KPIs are established before implementation, with benefits tracked throughout. Pilots and readiness checks ensure no surprises. Decisions are grounded in insight, not opinion."},"Skills and Behaviour":{outcome:"Give people the capabilities, confidence, and behavioural habits they need to adopt the new ways of working consistently and sustainably.",whatGoodLooksLike:"Staff are trained, assessed, and supported in ways that match real-world workflows. New behaviours are clearly defined, reinforced by leaders, and evident in day-to-day practice. Change Champions and Super-users are active; confidence grows over time; and requests for support decrease as competence increases."},"Process and Sustainment":{outcome:"Embed the change into operational processes, ensuring it becomes the way we do things, and create mechanisms for continuous improvement and long-term stability.",whatGoodLooksLike:"Updated SOPs, workflows, and ownership structures are in place and being followed. Issues are resolved quickly. Benefits are monitored and reported regularly. Improvements continue beyond go-live, with clear BAU ownership. The change stabilises and performance gains hold or increase over time."}},Ka={vision:"Defines the future state and why the change matters.",case_for_change:"Builds a clear, credible rationale and expected benefits.",sponsorship:"Secures visible leadership ownership, governance, and decisions.",change_network:"Builds and mobilises change agents and local champions.",benefits:"Tracks baseline, benefits ownership, and value realisation.",change_impact:"Assesses who is impacted and the scale of change required.",risk_management:"Identifies, tracks, and mitigates adoption and delivery risks.",cm_readiness:"Confirms readiness, sequencing, and change planning discipline.",stakeholder:"Plans and delivers stakeholder engagement and communications.",resistance:"Anticipates and addresses resistance with practical interventions.",skills_learning:"Designs learning, support, and reinforcement for role readiness.",capability:"Builds confidence and competence to adopt new ways of working.",change_adoption:"Measures uptake and consistency of new behaviours in practice.",process_change:"Embeds workflow changes into everyday operational delivery.",reinforcement:"Sustains momentum so adoption does not decay after launch.",org_maturity:"Improves long-term organisational change capability and maturity.",transfer_bau:"Transitions ownership into BAU with clear accountability."};function za(n){return Ka[n]||"Component description not yet defined."}function Ja(n){const s=wt[n];return s?`This lens ${s.outcome.charAt(0).toLowerCase()}${s.outcome.slice(1)}`:"This lens provides an additional perspective on how each component is landing across teams and services."}const tn={1:"Pre-Discovery",2:"Solution Design",3:"Development",4:"Deployment / Go Live",5:"Post-Deployment"},Xa={sampleRubric:[{id:"r1",label:"Leadership",max:5},{id:"r2",label:"Culture",max:5}],adoptionRubric:[{id:"a1",label:"Adoption awareness",max:100},{id:"a2",label:"Training coverage",max:100}],vision:{"Strategic Direction and Leadership":{1:"Senior leaders take initial steps to develop the vision through workshops and discussions, beginning to align on a shared future direction and its link to strategic objectives.",2:"A draft vision has been created and is being tested and refined with a wider group to check clarity, relevance and alignment to strategy.",3:"A clear vision is defined and agreed at senior level but not yet consistently communicated to all stakeholders.",4:"Senior leaders consistently communicate the vision and link it to organisational goals, priorities and decisions.",5:"Leaders speak with one voice about the vision, actively reinforcing it through actions and decisions and ensuring it is well understood across the organisation."},"People Experience and Culture":{1:"Early conversations focus on what is changing but staff involvement is limited. The vision is not yet clear or meaningful to most people.",2:"The draft vision is tested with a wider audience. Staff input is sought to check relevance and whether the vision reflects real experiences and concerns. Feedback is used to refine the vision.",3:`The vision is defined but not yet consistently communicated to all stakeholders.

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

At least one representative from organisation has been joined FuturesNHS Change Management Network`,2:`A Change Management learning pathway is in place that details the change skills and behaviours needed at all tiers (senior decision makers, managers and practitioners)

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

There is a clearer plan for sustainment, although it is still being embedded and tested.`,3:"Key processes, roles, and measures are in place and being followed. The change is being maintained in practice, with issues identified and addressed as they arise.",4:"The change is embedded into day-to-day operations. Processes are consistently followed, and performance is stable, with benefits starting to be realised.",5:"The change is fully sustained as “the way we do things.” Processes are regularly reviewed and improved, and performance continues to strengthen over time."}}};function Qa(n){return n<=0?"Green":n>=2?"Red":n>=1?"Amber":"Blue"}function Is(n,t){if(n<=0)return"Amber";const s=t-n;return s>=2?"Red":s>0?"Amber":"Green"}const ks={Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},Za={Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"};function ei(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Tt(n,t,s,a,r){return r?"Blue":s<=0?"N/A":a<=0?"Amber":n>=t&&a<s?"Green":Is(n,t)}const ni={"N/A":"text-slate-600 bg-slate-200",Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},Lt=["#0f766e","#0369a1","#7c3aed","#b45309","#be123c"],ti=[{score:0,label:"Pre-Emergent",color:"#768692"},{score:1,label:"Emerging",color:"#AE2521"},{score:2,label:"Developing",color:"#FFB81C"},{score:3,label:"Maturing",color:"#005EB8"},{score:4,label:"Embedding",color:"#330072"},{score:5,label:"Thriving",color:"#00A499"}];function si({store:n,components:t,lenses:s,metrics:a,getEntry:r,onComponentClick:o,pathway:l,pathwayChecks:h,onNavigate:i,onOpenLensInfo:x,onOpenOnboarding:N,colorAccessibilityMode:k="standard",darkMode:p=!1,phaseFocusMode:c="auto",manualPhaseFocus:m,onPhaseFocusModeChange:O,onManualPhaseFocusChange:_,onResetPhaseFocus:b}){const[S,V]=g.useState(""),[C,F]=g.useState("all"),[L,ce]=g.useState("all"),[z,te]=g.useState("all"),[de,ne]=g.useState("score"),[T,J]=g.useState("desc"),[xe,Ee]=g.useState(!1),[A,se]=g.useState(!0),[Q,w]=g.useState(!1),R=g.useMemo(()=>[...new Set(t.map(y=>y.phase))].sort((y,G)=>y-G),[t]),X=a.currentPhase,Z=c==="manual"&&m&&R.includes(m)?m:X,[Ie,ee]=g.useState(!0),Se=g.useMemo(()=>n.history.length>0?n.history[n.history.length-1]:null,[n.history]),he=Se!==null?a.overallPct-Se.overallPercentage:null,fe=g.useMemo(()=>{if(a.assessedCount===0)return!1;const y=new Date().toLocaleString("en-GB",{month:"short",year:"numeric"});return!n.history.some(G=>G.monthLabel===y)},[n.history,a.assessedCount]),f=g.useMemo(()=>{const y=new Date;y.setHours(0,0,0,0);const G=new Date(y);G.setDate(y.getDate()+7);const K=[];return t.forEach(ie=>{ie.lenses.forEach(ve=>{r(ie.id,ve).actions.forEach(ye=>{if(!ye.dueDate||ye.status==="Completed"||ye.status==="Cancelled")return;const pe=new Date(ye.dueDate);isNaN(pe.getTime())||pe<=G&&K.push({action:ye,componentLabel:ie.label,componentId:ie.id,isOverdue:pe<y})})})}),K.sort((ie,ve)=>new Date(ie.action.dueDate).getTime()-new Date(ve.action.dueDate).getTime())},[t,r,n.currentDraft]),j=g.useMemo(()=>{const y=S.trim().toLowerCase();return t.map(G=>{let K=0,ie=!0,ve=0,ye=0;G.lenses.forEach($e=>{const be=r(G.id,$e),Be=Number(be.score||0);K+=Be,Be!==5&&(ie=!1);const qe=be.actions||[];ve+=qe.length,ye+=qe.filter(Ye=>Ye.status==="Completed").length});const pe=Number((K/G.lenses.length).toFixed(1)),le=kn(G.id,Z,G.target),Ue=pe===0?"not-started":pe>=le?"on-track":"below-target";let We=null;if(Se){let $e=0;G.lenses.forEach(qe=>{var Ye,an;$e+=Number(((an=(Ye=Se.data[G.id])==null?void 0:Ye[qe])==null?void 0:an.score)||0)});const be=Number(($e/G.lenses.length).toFixed(1)),Be=Number((pe-be).toFixed(1));Be!==0&&(We=Be)}return{component:G,avgNum:pe,exemplarTarget:le,status:Ue,delta:We,actionCount:ve,completedActionCount:ye,allLensesLevelFive:ie}}).filter(({component:G,status:K})=>C!=="all"&&K!==C||L!=="all"&&G.phase!==L?!1:y?G.label.toLowerCase().includes(y):!0).sort((G,K)=>{let ie=0;return de==="name"?ie=G.component.label.localeCompare(K.component.label):de==="target"?ie=G.component.target-K.component.target:ie=G.avgNum-K.avgNum,T==="asc"?ie:-ie})},[t,L,Z,r,Se,S,de,T,C]),E=g.useMemo(()=>c==="auto"?a.nextSteps:t.map(y=>{let G=0,K=0,ie=0;y.lenses.forEach(We=>{const $e=r(y.id,We);G+=Number($e.score||0);const be=$e.actions||[];K+=be.length,ie+=be.filter(Be=>Be.status==="Completed").length});const ve=Number((G/y.lenses.length).toFixed(1)),ye=kn(y.id,Z,y.target),pe=Number(Math.max(0,ye-ve).toFixed(1)),le=Math.max(0,K-ie),Ue=le>0?`Complete ${le} open action(s).`:"Create at least one delivery action linked to this component.";return{componentId:y.id,componentLabel:y.label,phase:y.phase,gapToTarget:pe,message:`Raise ${y.label} from ${ve.toFixed(1)} to exemplar ${ye.toFixed(1)}. ${Ue}`,toolkitLinks:[]}}).filter(y=>y.phase<=Z+1&&y.gapToTarget>=0).sort((y,G)=>y.phase!==G.phase?y.phase-G.phase:G.gapToTarget-y.gapToTarget).slice(0,3),[t,Z,r,a.nextSteps,c]),D=g.useMemo(()=>{let y=0,G=0;t.forEach(ie=>{var pe;const ve=yt(ie.id,l),ye=Es(((pe=h[ie.id])==null?void 0:pe[l])||[],ve);y+=ye.totalCount,G+=ye.checkedCount});const K=y>0?Math.round(G/y*100):100;return{required:y,checked:G,pct:K}},[t,l,h]),U=g.useMemo(()=>{const y=[];return S.trim()&&y.push(`Search: ${S.trim()}`),C!=="all"&&y.push(`Status: ${C.replace("-"," ")}`),L!=="all"&&y.push(`Phase: ${L}`),(de!=="score"||T!=="desc")&&y.push(`Sort: ${de} (${T})`),y},[L,S,de,T,C]),je=()=>{V(""),F("all"),ce("all"),ne("score"),J("desc"),Ee(!1)},ke=a.phaseSummaries.find(y=>y.phase===Z),De=(ke==null?void 0:ke.rag)||"Red",Oe=De.toLowerCase(),ae=k==="color-blind-friendly"?{"N/A":"text-slate-700 bg-slate-200",Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"}:ni,Je=k==="color-blind-friendly"?Za:ks;return e.jsxs("div",{className:`adoption-dashboard max-w-6xl mx-auto ${p?"theme-dark":"theme-light"}`,children:[Ie&&f.length>0&&e.jsx("div",{className:"mb-6 rounded-lg border border-red-200 bg-red-50 p-4",children:e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-sm font-semibold text-red-800 mb-2",children:[f.filter(y=>y.isOverdue).length>0&&`${f.filter(y=>y.isOverdue).length} overdue action${f.filter(y=>y.isOverdue).length>1?"s":""}`,f.filter(y=>y.isOverdue).length>0&&f.filter(y=>!y.isOverdue).length>0&&", ",f.filter(y=>!y.isOverdue).length>0&&`${f.filter(y=>!y.isOverdue).length} due within 7 days`]}),e.jsxs("ul",{className:"space-y-1.5",children:[f.slice(0,3).map(y=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`shrink-0 text-xs font-bold px-1.5 py-0.5 rounded ${y.isOverdue?"bg-red-200 text-red-800":"bg-amber-100 text-amber-800"}`,children:y.isOverdue?"Overdue":"Due soon"}),e.jsxs("span",{className:"text-xs text-slate-700",children:[e.jsx("button",{onClick:()=>o(y.componentId),className:"font-medium text-[#005eb8] hover:underline mr-1",children:y.componentLabel}),"— ",y.action.text,y.action.dueDate&&e.jsxs("span",{className:"text-slate-400 ml-1",children:["(due"," ",new Date(y.action.dueDate).toLocaleDateString("en-GB",{day:"numeric",month:"short"}),")"]})]})]},y.action.id)),f.length>3&&e.jsxs("li",{className:"text-xs text-slate-500 pl-1",children:["+ ",f.length-3," more - see the Action Tracker for the full list."]})]})]}),e.jsx("button",{onClick:()=>ee(!1),className:"shrink-0 text-slate-400 hover:text-slate-600 text-xl leading-none","aria-label":"Dismiss",children:"×"})]})}),e.jsxs("div",{className:"mb-1 flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h2",{className:`text-2xl font-bold ${p?"text-slate-100":"text-slate-800"}`,children:"Adoption Engine Dashboard"}),N?e.jsx("button",{type:"button",onClick:N,className:"rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Show introduction again"}):null]}),e.jsxs("p",{className:`text-sm mb-6 ${p?"text-slate-300":"text-slate-600"}`,children:["This tracks how ready ",n.orgProfile.projectName||"your programme"," is for adoption, based on ",t.length," change-management components, each assessed through up to"," ",s.length," lenses."]}),e.jsxs("div",{className:"dashboard-callout dashboard-callout--pathway mb-6 rounded-lg border p-4",children:[e.jsx("p",{className:"dashboard-callout__eyebrow text-xs font-semibold uppercase tracking-wider",children:"Current CST pathway"}),e.jsx("p",{className:"dashboard-callout__title mt-1 text-sm font-semibold",children:Ss[l]}),e.jsxs("p",{className:"dashboard-callout__body mt-1 text-sm",children:["Pathway checklist completion: ",D.checked,"/",D.required," (",D.pct,"%)."]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[e.jsxs("div",{className:`${p?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${p?"text-slate-300":"text-slate-500"}`,children:"Live Delivery Progress"}),e.jsxs("div",{className:"flex items-end gap-3",children:[e.jsxs("span",{className:"text-4xl font-bold text-[#005eb8]",children:[a.overallPct,"%"]}),he!==null&&e.jsxs("span",{className:`text-sm font-semibold mb-1 ${he>0?"text-green-600":he<0?"text-red-500":"text-slate-400"}`,children:[he>0?"↑":he<0?"↓":"="," ",Math.abs(he),"% vs last month"]})]}),e.jsx("div",{className:"mt-4 w-full bg-slate-100 rounded-full h-3 relative overflow-hidden",children:e.jsx("div",{className:"absolute top-0 left-0 h-full bg-[#005eb8]",style:{width:`${a.overallPct}%`}})}),e.jsx("div",{className:"flex justify-between text-xs mt-2 text-slate-400",children:e.jsx("span",{children:"Derived from current working data across all components."})})]}),e.jsxs("div",{className:`dashboard-metric-card dashboard-metric-card--phase dashboard-metric-card--${Oe} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:"dashboard-metric-card__label text-sm font-medium mb-1",children:"Current Phase Focus"}),e.jsxs("div",{className:"mb-2 flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>O==null?void 0:O("auto"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${c==="auto"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Auto"}),e.jsx("button",{type:"button",onClick:()=>O==null?void 0:O("manual"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${c==="manual"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Manual"}),c==="manual"?e.jsx("select",{value:Z,onChange:y=>_==null?void 0:_(Number(y.target.value)),className:"rounded-md border border-white/50 bg-white/90 px-2 py-1 text-xs font-medium text-slate-800","aria-label":"Manual phase focus",children:R.map(y=>e.jsx("option",{value:y,children:tn[y]||`Phase ${y}`},y))}):null,c==="manual"&&b?e.jsx("button",{type:"button",onClick:b,className:"rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100",children:"Reset to suggested"}):null]}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsx("span",{className:"dashboard-metric-card__headline text-4xl font-bold",children:tn[Z]||`Phase ${Z}`})}),e.jsxs("p",{className:"dashboard-metric-card__description text-sm mt-2",children:[De," status based on delivery progress and action completion.",c==="manual"?` Suggested phase is ${tn[X]||`Phase ${X}`}.`:""]})]}),e.jsxs("div",{className:`${p?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${p?"text-slate-300":"text-slate-500"}`,children:"Action Completion"}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsxs("span",{className:`text-4xl font-bold ${p?"text-slate-100":"text-slate-700"}`,children:[a.actionCompletionPct,"%"]})}),e.jsxs("p",{className:`text-sm mt-2 ${p?"text-slate-300":"text-slate-500"}`,children:[a.completedActions," of ",a.totalActions," actions completed."]})]})]}),e.jsxs("div",{className:`${p?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${p?"text-slate-100":"text-slate-800"}`,children:"What To Do Next"}),e.jsx("span",{className:`text-xs ${p?"text-slate-400":"text-slate-500"}`,children:"Prioritised for live delivery"})]}),e.jsxs("p",{className:`text-sm mb-4 ${p?"text-slate-300":"text-slate-500"}`,children:["These are the biggest gaps to target for your",c==="manual"?" selected focus phase":" current phase",", largest gap first."]}),E.length>0?e.jsx("div",{className:"space-y-3",children:E.map(y=>{var K;const G=Qa(y.gapToTarget);return e.jsxs("button",{onClick:()=>o(y.componentId),className:`w-full text-left rounded-md border p-3 hover:border-blue-300 transition-colors ${p?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("span",{className:`text-sm font-semibold ${p?"text-slate-100":"text-slate-800"}`,children:y.componentLabel}),e.jsx("span",{className:`text-xs font-semibold rounded px-2.5 py-0.5 ${Je[G]}`,children:G})]}),e.jsx("p",{className:`text-sm mt-1 ${p?"text-slate-300":"text-slate-600"}`,children:y.message}),(K=y.toolkitLinks)!=null&&K.length?e.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:y.toolkitLinks.map(ie=>e.jsx("a",{href:ie.url,target:"_blank",rel:"noopener noreferrer",onClick:ve=>ve.stopPropagation(),className:"text-xs font-medium text-[#005eb8] underline",children:ie.label},`${y.componentId}-${ie.url}`))}):null]},`${y.componentId}-${y.phase}`)})}):e.jsx("p",{className:"text-sm text-slate-500",children:"No priority gaps detected for the current phase. Continue tracking actions and maintain evidence quality."})]}),fe&&e.jsxs("div",{className:"dashboard-callout dashboard-callout--snapshot rounded-lg border p-4 flex items-center gap-3 mb-8",children:[e.jsx("span",{className:"dashboard-callout__icon text-xl shrink-0",children:"📅"}),e.jsxs("p",{className:"dashboard-callout__body text-sm",children:[e.jsx("strong",{children:"This month hasn't been recorded yet."})," Use"," ",e.jsx("span",{className:"font-semibold",children:"'Finalise Month'"})," in the header to snapshot today's progress and build your delivery trajectory."]})]}),a.assessedCount===0?e.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-8 border border-slate-200 mb-8 text-center",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800",children:"Getting started"}),e.jsx("p",{className:"text-sm text-slate-600 mt-2 max-w-xl mx-auto",children:"Nothing has been assessed yet, so there's nothing to chart. Set up your CST Personalisation first, then start scoring your first component to see your readiness build up here."}),e.jsxs("div",{className:"mt-4 flex items-center justify-center gap-3",children:[i?e.jsx("button",{type:"button",onClick:()=>i("project-details"),className:"rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Set up your CST Personalisation"}):null,t[0]?e.jsx("button",{type:"button",onClick:()=>o(t[0].id),className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Start your first assessment"}):null]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${p?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-1 ${p?"text-slate-100":"text-slate-800"}`,children:"Phase Progress (RAG)"}),e.jsxs("p",{className:`text-sm mb-4 ${p?"text-slate-300":"text-slate-500"}`,children:["Phases run 1 to 5, from early readiness at go-live through to fully embedding the change."," ",i?e.jsx("button",{type:"button",onClick:()=>i("cm-guide"),className:"font-medium text-[#005eb8] hover:underline",children:"See Adoption Engine Onboarding"}):null]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:a.phaseSummaries.map(y=>{const G=y.rag==="Green"?"bg-green-100 text-green-700":y.rag==="Amber"?"bg-amber-100 text-amber-700":"bg-red-100 text-red-700",K=y.totalLenses?Math.round(y.assessedLenses/y.totalLenses*100):0;return e.jsxs("div",{className:`rounded-md border p-4 ${p?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:`font-semibold ${p?"text-slate-100":"text-slate-800"}`,children:tn[y.phase]||`Phase ${y.phase}`}),e.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded ${G}`,children:y.rag})]}),e.jsxs("p",{className:`text-xs ${p?"text-slate-300":"text-slate-600"}`,children:[y.onTrackComponents,"/",y.componentCount," components on target"]}),e.jsxs("p",{className:`text-xs mt-1 ${p?"text-slate-300":"text-slate-600"}`,children:[K,"% lens coverage, ",y.actionCompletionPct,"% actions complete"]})]},y.phase)})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"order-2 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8",children:[e.jsxs("div",{className:`${p?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border flex flex-col`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-4 ${p?"text-slate-100":"text-slate-800"}`,children:"Readiness Trajectory"}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${p?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:n.history.length>0?e.jsx("canvas",{id:"adoption-line-chart"}):e.jsx("div",{className:"text-center text-slate-400",children:e.jsx("p",{children:"No historical data yet. Finalise your first month to generate trends."})})})]}),e.jsxs("div",{className:`${p?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border flex flex-col`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${p?"text-slate-100":"text-slate-800"}`,children:"Strategic Lenses Spread"}),x&&s[0]?e.jsx("button",{type:"button",onClick:()=>x(s[0]),className:"text-xs font-medium text-[#005eb8] hover:underline",children:"What's a lens?"}):null]}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${p?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:e.jsx("canvas",{id:"adoption-radar-chart"})}),e.jsxs("div",{className:`${p?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mt-4 rounded-md border p-3`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${p?"text-slate-300":"text-slate-600"}`,children:"Lens key"}),e.jsx("div",{className:"mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2",children:s.map((y,G)=>e.jsxs("div",{className:`flex items-center gap-2 text-xs ${p?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full",style:{backgroundColor:Lt[G%Lt.length]},"aria-hidden":"true"}),e.jsx("span",{children:y})]},`lens-key-${y}`))})]}),e.jsx("p",{className:`text-xs text-center mt-4 ${p?"text-slate-300":"text-slate-500"}`,children:"Visualises your current draft readiness score averaged across the 5 strategic lenses against their specific target reiquirements."})]})]}),e.jsxs("div",{className:`order-1 ${p?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"mb-4 flex w-full flex-col gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:`text-lg font-semibold ${p?"text-slate-100":"text-slate-800"}`,children:"Change Component Radar"}),e.jsx("p",{className:`text-xs mt-1 ${p?"text-slate-300":"text-slate-500"}`,children:"Show or hide the change-component readiness radar, then use the overview list below to drill into delivery status."})]}),e.jsx("div",{className:"flex w-full justify-end",children:e.jsx("button",{type:"button",onClick:()=>se(y=>!y),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-white",children:A?"Hide change component radar":"Show change component radar"})})]}),A?e.jsxs("div",{className:`w-full ${p?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("div",{className:`flex min-h-[720px] w-full items-center justify-center rounded border p-2 ${p?"border-slate-700 bg-slate-950":"border-slate-100 bg-white"}`,children:e.jsx("canvas",{id:"adoption-component-radar-chart",className:"block h-full w-full"})}),e.jsx("div",{id:"radar-legend",className:`mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm ${p?"text-slate-300":"text-slate-600"}`,children:ti.map(y=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mr-2 h-3 w-3 rounded-full",style:{backgroundColor:y.color}}),e.jsxs("span",{children:[y.score," = ",y.label]})]},y.score))}),e.jsx("p",{className:`mt-4 text-center text-xs ${p?"text-slate-300":"text-slate-500"}`,children:"Visualises the average readiness score for each component against the phase exemplar profile."})]}):null,e.jsxs("div",{className:"mt-4 w-full space-y-3",children:[e.jsxs("p",{className:`text-xs ${p?"text-slate-300":"text-slate-500"}`,children:["BRAG scoring is used for the change component overview:",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-sky-100 text-sky-800",children:"Blue"})," = every lens is level 5,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-green-100 text-green-800",children:"Green"})," = on target,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-red-100 text-red-800",children:"Red"})," = behind target dates,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-amber-100 text-amber-800",children:"Amber"})," = at risk / nearing deadline."]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:S,onChange:y=>V(y.target.value),placeholder:"Search components...",className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"}),e.jsxs("select",{value:C,onChange:y=>F(y.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All statuses"}),e.jsx("option",{value:"not-started",children:"Not started"}),e.jsx("option",{value:"below-target",children:"Below target"}),e.jsx("option",{value:"on-track",children:"On track"})]}),e.jsxs("select",{value:L,onChange:y=>ce(y.target.value==="all"?"all":Number(y.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All phases"}),R.map(y=>e.jsx("option",{value:y,children:tn[y]||`Phase ${y}`},y))]})]}),e.jsx(Ns,{showAdvancedControls:xe,onToggleAdvanced:()=>Ee(y=>!y),onReset:je,resultText:`Showing ${j.length} components`,activeFilters:U,activeFiltersAriaLabel:"Active component filters",darkMode:p}),xe?e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-md border border-slate-200 bg-slate-50 p-3",children:[e.jsxs("select",{value:de,onChange:y=>ne(y.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"score",children:"Sort by score"}),e.jsx("option",{value:"name",children:"Sort by name"}),e.jsx("option",{value:"target",children:"Sort by target"})]}),e.jsx("button",{type:"button",onClick:()=>J(y=>y==="asc"?"desc":"asc"),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white transition-colors",children:T==="asc"?"Ascending":"Descending"})]}):null]}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:[j.map(({component:y,avgNum:G,exemplarTarget:K,actionCount:ie,completedActionCount:ve,delta:ye,allLensesLevelFive:pe})=>{const le=Tt(G,K,ie,ve,pe),Ue=le==="Red"?"↓":G>=K?"→":G<=0?"↑":"↗",We=le==="Red"?"text-red-500":G>=K?p?"text-slate-300":"text-slate-500":"text-amber-600";return e.jsxs("button",{onClick:()=>o(y.id),title:za(y.id),className:`flex justify-between items-center p-3 rounded-md transition-colors group text-left ${p?"bg-slate-900 border border-slate-700 hover:border-blue-400":"bg-slate-50 border border-slate-100 hover:border-blue-300"}`,children:[e.jsx("span",{className:`text-sm font-medium truncate pr-2 group-hover:text-[#005eb8] ${p?"text-slate-100":"text-slate-700"}`,children:y.label}),e.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[e.jsx("span",{className:`text-xs font-semibold ${We}`,title:G>=K?"On or above expected readiness for phase focus":G<=0?"Not started: raise towards expected readiness":"Below expected readiness: continue improving","aria-label":G>=K?"At expected readiness":G<=0?"Not started, increase readiness":"Below expected readiness",children:Ue}),ye!==null&&e.jsxs("span",{className:`text-[11px] font-semibold ${ye>0?"text-green-600":"text-red-400"}`,title:"Change versus last finalised month",children:[ye>0?"+":"",ye.toFixed(1)]}),e.jsx("span",{className:`text-xs font-bold px-2.5 py-1 rounded ${ae[le]}`,children:le})]})]},y.id)}),!j.length&&e.jsx("div",{className:`col-span-full rounded-md border border-dashed p-6 text-sm ${p?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-500"}`,children:"No components match the current filters."})]})]})]}),e.jsxs("div",{className:`${p?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h3",{className:`text-lg font-semibold ${p?"text-slate-100":"text-slate-800"}`,children:"Lenses and which components they apply to"}),e.jsx("button",{type:"button",onClick:()=>w(y=>!y),className:"inline-flex items-center justify-center rounded-full p-1 text-slate-500 hover:text-[#005eb8]","aria-label":"Explain lenses and components",title:"Explain lenses and components",children:e.jsx(ei,{})})]}),Q?e.jsx("p",{className:"mt-2 text-xs text-slate-600 max-w-3xl",children:"A component is the change topic you are delivering (for example, Vision). A lens is the angle used to assess that component. For example, Vision is reviewed through Strategic Direction and Leadership and People Experience and Culture to check both leadership alignment and whether people understand and believe in the vision."}):null]}),e.jsxs("select",{value:z,onChange:y=>te(y.target.value==="all"?"all":Number(y.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:w-40",children:[e.jsx("option",{value:"all",children:"All phases"}),R.map(y=>e.jsx("option",{value:y,children:tn[y]||`Phase ${y}`},y)),'"']})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(y=>{const G=t.filter(K=>K.lenses.includes(y)).filter(K=>z==="all"||K.phase===z);return G.length?e.jsxs("div",{className:`rounded-md p-4 ${p?"border border-slate-700 bg-slate-900":"border border-slate-100 bg-slate-50"}`,children:[e.jsx("h4",{className:"font-bold text-sm text-[#005eb8] mb-3",children:y}),e.jsx("p",{className:`mb-3 text-xs ${p?"text-slate-300":"text-slate-600"}`,children:Ja(y)}),e.jsx("ul",{className:"space-y-2",children:G.map(K=>{const ie=r(K.id,y),ve=Number(ie.score||0),ye=kn(K.id,Z,K.target),pe=ie.actions||[],le=Tt(ve,ye,pe.length,pe.filter(Ue=>Ue.status==="Completed").length,!1);return e.jsxs("li",{className:`text-xs flex justify-between items-center p-2 rounded ${p?"bg-slate-800 border border-slate-700":"bg-white border border-slate-100"}`,children:[e.jsx("span",{className:`truncate pr-2 font-medium ${p?"text-slate-100":"text-slate-700"}`,children:K.label}),e.jsx("button",{onClick:()=>o(K.id),className:`px-2.5 py-0.5 rounded font-bold ${ae[le]}`,children:le})]},K.id)})})]},y):null})})]})]})]})}const Tn={label:"Change Management Toolkit",url:"https://future.nhs.uk/CMN/view?objectId=129489733"};function ai(n,t){var l,h,i,x,N;if(!t)return n;const s=(l=t.links)==null?void 0:l[n.key],a=(h=s==null?void 0:s.url)==null?void 0:h.trim(),r=((i=s==null?void 0:s.label)==null?void 0:i.trim())||n.label;return a?{...n,label:r,url:a}:((s==null?void 0:s.fallback)??"base")==="base"&&((N=(x=t.base)==null?void 0:x.url)!=null&&N.trim())?{...n,label:r,url:t.base.url.trim()}:{...n,label:r}}const ii="nhs-guidance-workstreams",oi={vision:["Vision"],case_for_change:["Case for Change"],sponsorship:["Sponsorship/ Change Network"],change_network:["Sponsorship/ Change Network"],benefits:["Benefits"],change_impact:["Change Impact & Risk"],risk_management:["Change Impact & Risk"],cm_readiness:["Change Management Readiness & Planning"],stakeholder:["Stakeholder Engagement & Comms"],resistance:["Resistance Management"],skills_learning:["Skills/ Learning"],capability:["Change Management Capability"],change_adoption:["Reinforcement"],process_change:["Process change"],reinforcement:["Reinforcement"],org_maturity:["Change Management Capability"],transfer_bau:["Reinforcement"]},fn={Vision:{inputs:[{key:"fnhs_37515792",label:"Change Vision Template",url:"https://future.nhs.uk/CMN/view?objectId=37515792"},{key:"fnhs_34039184",label:"Sinek’s Golden Circle",url:"https://future.nhs.uk/CMN/view?objectId=34039184"},{key:"fnhs_34039088",label:"Rich Picture",url:"https://future.nhs.uk/CMN/view?objectId=34039088"}]},"Case for Change":{inputs:[{key:"fnhs_34037712",label:"SWOT Analysis",url:"https://future.nhs.uk/CMN/view?objectId=34037712",description:"Helps leadership frame the need for change."},{key:"fnhs_34037360",label:"Force Field Analysis",url:"https://future.nhs.uk/CMN/view?objectId=34037360",description:"Identifies drivers and barriers to change."},{key:"fnhs_45000208",label:"What's in it for me? Benefits",url:"https://future.nhs.uk/CMN/view?objectId=45000208",description:"Supports benefit capture by stakeholder group."},{key:"fnhs_34037040",label:"High Level GAP Analysis",url:"https://future.nhs.uk/CMN/view?objectId=34037040",description:"Highlights what needs to change."},{key:"fnhs_34037072",label:"PESTLE Analysis",url:"https://future.nhs.uk/CMN/view?objectId=34037072",description:"Analyzes external influencing factors."},{key:"fnhs_34040176",label:"Benefits Map",url:"https://future.nhs.uk/CMN/view?objectId=34040176",description:"Links benefits and desired outcomes."},{key:"fnhs_34039024",label:"Sponsor Coalition Map",url:"https://future.nhs.uk/CMN/view?objectId=34039024",description:"Identifies visible champions and supporters."},{key:"fnhs_69511824",label:"Measuring Digital Adoption",url:"https://future.nhs.uk/CMN/view?objectId=69511824",description:"Examples of adoption measures tied to success."}],deliverables:[{key:"fnhs_44287088",label:"A clear case for change communicated to all stakeholders",url:"https://future.nhs.uk/CMN/view?objectId=44287088"}]},"Sponsorship/ Change Network":{inputs:[{key:"fnhs_34039024",label:"Sponsor Coalition Map",url:"https://future.nhs.uk/CMN/view?objectId=34039024"},{key:"fnhs_34037520",label:"Good sponsor",url:"https://future.nhs.uk/CMN/view?objectId=34037520"},{key:"fnhs_34037552",label:"Form a Change Network",url:"https://future.nhs.uk/CMN/view?objectId=34037552"}]},Benefits:{inputs:[{key:"fnhs_34037232",label:"Benefits Discovery Workshop",url:"https://future.nhs.uk/CMN/view?objectId=34037232"},{key:"fnhs_34040176",label:"Benefits Map",url:"https://future.nhs.uk/CMN/view?objectId=34040176"},{key:"fnhs_34030736",label:"Benefits Realisation Plan",url:"https://future.nhs.uk/CMN/view?objectId=34030736"}]},"Change Impact & Risk":{inputs:[{key:"fnhs_34037424",label:"Change Impact Assessment",url:"https://future.nhs.uk/CMN/view?objectId=34037424"},{key:"fnhs_34037968",label:"Heat Map",url:"https://future.nhs.uk/CMN/view?objectId=34037968"},{key:"fnhs_34037776",label:"Change Risk Assessment",url:"https://future.nhs.uk/CMN/view?objectId=34037776"}]},"Change Management Readiness & Planning":{inputs:[{key:"fnhs_42042672",label:"Change Management Strategy",url:"https://future.nhs.uk/CMN/view?objectId=42042672"},{key:"fnhs_34038032",label:"Change Management Plan",url:"https://future.nhs.uk/CMN/view?objectId=34038032"},{key:"fnhs_34040240",label:"RACI Matrix",url:"https://future.nhs.uk/CMN/view?objectId=34040240"}]},"Stakeholder Engagement & Comms":{inputs:[{key:"fnhs_34018288",label:"Stakeholder Analysis",url:"https://future.nhs.uk/CMN/view?objectId=34018288"},{key:"fnhs_34037008",label:"Stakeholder Engagement & Communications Strategy",url:"https://future.nhs.uk/CMN/view?objectId=34037008"},{key:"fnhs_34037616",label:"Stakeholder Engagement & Communications Plan",url:"https://future.nhs.uk/CMN/view?objectId=34037616"}]},"Resistance Management":{inputs:[{key:"fnhs_34037360",label:"Force Field Analysis",url:"https://future.nhs.uk/CMN/view?objectId=34037360"},{key:"fnhs_34038832",label:"ADKAR Model",url:"https://future.nhs.uk/CMN/view?objectId=34038832"},{key:"fnhs_34307760",label:"Resistance Management Plan",url:"https://future.nhs.uk/CMN/view?objectId=34307760"}]},"Skills/ Learning":{inputs:[{key:"fnhs_34037456",label:"Learning Needs Analysis",url:"https://future.nhs.uk/CMN/view?objectId=34037456"},{key:"fnhs_34038384",label:"Training Plan",url:"https://future.nhs.uk/CMN/view?objectId=34038384"},{key:"fnhs_34038224",label:"Updated Standard Operating Procedures",url:"https://future.nhs.uk/CMN/view?objectId=34038224"}]},"Process change":{inputs:[{key:"fnhs_34037840",label:"Process Mapping",url:"https://future.nhs.uk/CMN/view?objectId=34037840"},{key:"fnhs_34037040",label:"GAP Analysis",url:"https://future.nhs.uk/CMN/view?objectId=34037040"},{key:"fnhs_34038224",label:"Standard Operating Procedures (SOPs)",url:"https://future.nhs.uk/CMN/view?objectId=34038224"}]},Reinforcement:{inputs:[{key:"fnhs_44287088",label:"Case for Change",url:"https://future.nhs.uk/CMN/view?objectID=44287088"},{key:"fnhs_34037552",label:"Change Network",url:"https://future.nhs.uk/CMN/view?objectId=34037552"},{key:"fnhs_34038672",label:"User Survey",url:"https://future.nhs.uk/CMN/view?objectId=34038672"},{key:"fnhs_34039312",label:"Leverage",url:"https://future.nhs.uk/CMN/view?objectId=34039312"},{key:"fnhs_34030736",label:"Benefits Realisation Plan",url:"https://future.nhs.uk/CMN/view?objectId=34030736"},{key:"fnhs_34038864",label:"Develop activities to Celebrate Successes",url:"https://future.nhs.uk/CMN/view?objectId=34038864"},{key:"fnhs_34038800",label:"Adoption Checklist",url:"https://future.nhs.uk/CMN/view?objectId=34038800"},{key:"fnhs_34038640",label:"Sustainability Risk Assessment",url:"https://future.nhs.uk/CMN/view?objectId=34038640"}],deliverables:[{key:"fnhs_34038864",label:"Methods in place to celebrate successes",url:"https://future.nhs.uk/CMN/view?objectId=34038864"},{key:"fnhs_34038672",label:"Feedback Mechanism for those impacted by the change",url:"https://future.nhs.uk/CMN/view?objectId=34038672"},{key:"fnhs_34038032",label:"Change Management plan",url:"https://future.nhs.uk/CMN/view?objectId=34038032"},{key:"fnhs_34038256",label:"Transition plan",url:"https://future.nhs.uk/CMN/view?objectId=34038256"}]},"Change Management Capability":{inputs:[{key:"cmn_home",label:"Change Management Network",url:"https://future.nhs.uk/CMN/groupHome"},{key:"toolkit_base",label:"Change Management Toolkit",url:"https://future.nhs.uk/CMN/view?objectId=129489733"}]}},Bt={Vision:{inputs:[],deliverables:[]},"Case for Change":{inputs:[],deliverables:[]},"Sponsorship/ Change Network":{inputs:[],deliverables:[]},Benefits:{inputs:[],deliverables:[]},"Change Impact & Risk":{inputs:[],deliverables:[]},"Change Management Readiness & Planning":{inputs:[],deliverables:[]},"Stakeholder Engagement & Comms":{inputs:[],deliverables:[]},"Resistance Management":{inputs:[],deliverables:[]},"Skills/ Learning":{inputs:[],deliverables:[]},"Process change":{inputs:[],deliverables:[]},Reinforcement:{inputs:[],deliverables:[]},"Change Management Capability":{inputs:[],deliverables:[]}},ri={Vision:{inputs:[],deliverables:[]},"Case for Change":{inputs:[],deliverables:[]},"Sponsorship/ Change Network":{inputs:[],deliverables:[]},Benefits:{inputs:[],deliverables:[]},"Change Impact & Risk":{inputs:[],deliverables:[]},"Change Management Readiness & Planning":{inputs:[],deliverables:[]},"Stakeholder Engagement & Comms":{inputs:[],deliverables:[]},"Resistance Management":{inputs:[],deliverables:[]},"Skills/ Learning":{inputs:[],deliverables:[]},"Process change":{inputs:[],deliverables:[]},Reinforcement:{inputs:[],deliverables:[]},"Change Management Capability":{inputs:[],deliverables:[]}},li={Default:fn,Product:Bt,AVT:Bt,EPR:ri};function ci(){if(typeof window>"u")return[];try{const n=window.localStorage.getItem(ii);if(!n)return[];const t=JSON.parse(n);return Array.isArray(t)?t.filter(s=>s&&typeof s.name=="string"&&s.name.trim()):[]}catch{return[]}}function di(n){const t=ci().find(s=>s.name===n);return t?t.map:li[n]||fn}function ui(n,t,s,a){var l,h,i;const r=((h=(l=di(n))==null?void 0:l[t])==null?void 0:h[s])||[],o=r.length>0?r:((i=fn==null?void 0:fn[t])==null?void 0:i[s])||[];return a?o.map(x=>ai(x,a)):o}function qn(n,t,s,a){const r=oi[t]||[],o=new Map;return r.forEach(l=>{ui(n,l,s,a).forEach(h=>{const i=`${h.label}::${h.url}`;o.has(i)||o.set(i,h)})}),[...o.values()]}const mi=`{
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
`,gi=Ca.filter(n=>n!=="Overdue start"&&n!=="Overdue completion"),Ft=[0,1,2,3,4,5],pi={0:"Not Started",1:"Emerging",2:"Developing",3:"Embedding",4:"Adopted",5:"Thriving"},Mt={"Not Started":"bg-slate-100 text-slate-700 border-slate-200","In Progress":"bg-blue-100 text-blue-800 border-blue-200",Blocked:"bg-amber-100 text-amber-800 border-amber-200",Completed:"bg-green-100 text-green-800 border-green-200"},Ut=JSON.parse(mi),hi=4,fi=Jn.reduce((n,t)=>{const s=qn("Default",t.id,"inputs"),a=qn("Default",t.id,"deliverables"),r=new Map;return[...s,...a].forEach(o=>{o.label&&o.label.trim().length>=hi&&r.set(o.label.toLowerCase(),o)}),n[t.id]=[...r.values()],n},{});function bi(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function xi(n,t,s){const a=n||"Untitled action";if(t.length===0)return a;const r=[...t].sort((h,i)=>i.label.length-h.label.length),o=r.map(h=>bi(h.label)).join("|");return a.split(new RegExp(`(${o})`,"gi")).map((h,i)=>{const x=r.find(N=>N.label.toLowerCase()===h.toLowerCase());return x?e.jsx("a",{href:x.url,target:"_blank",rel:"noopener noreferrer",onClick:N=>N.stopPropagation(),className:`underline decoration-dotted underline-offset-2 ${s?"text-blue-300 hover:text-blue-200":"text-[#005eb8] hover:text-blue-800"}`,children:h},`${x.key}-${i}`):h})}function Gt(n){return n.split(`
`).map(t=>t.trim()).filter(Boolean)}const Si="Your Project";function vi(n,t){return n.replace(/\$projectName/g,t)}function yi(n,t){const s=r=>vi(r,t),a=r=>r.map(o=>({title:s(o.title),body:s(o.body)}));return{component:s(n.component),description:s(n.description),whatIsIt:s(n.whatIsIt),userInsight:s(n.userInsight),whyThisMatters:s(n.whyThisMatters),quickRealityCheck:s(n.quickRealityCheck),whatGoodLooksLike:a(n.whatGoodLooksLike),risksIfYouDont:a(n.risksIfYouDont)}}const js={good:{border:"border-emerald-200",bg:"bg-emerald-50 hover:bg-emerald-100",text:"text-black",titleText:"text-emerald-700"},risk:{border:"border-rose-200",bg:"bg-rose-50 hover:bg-rose-100",text:"text-black",titleText:"text-rose-800"}},As={good:{border:"border-emerald-500/40",bg:"bg-emerald-500/10 hover:bg-emerald-500/15",text:"text-emerald-200",titleText:"text-slate-100"},risk:{border:"border-rose-500/40",bg:"bg-rose-500/10 hover:bg-rose-500/15",text:"text-rose-200",titleText:"text-slate-100"}};function wi({points:n,tone:t,darkMode:s}){const a=s?As[t]:js[t];return e.jsx("ul",{className:"space-y-3",children:n.map(r=>e.jsxs("li",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${a.titleText}`,children:r.title}),e.jsx("p",{className:`mt-0.5 text-sm ${a.text}`,children:r.body})]},r.title))})}function Vt({title:n,points:t,tone:s,isOpen:a,onToggle:r,darkMode:o}){const l=o?As[s]:js[s];return e.jsxs("div",{className:`rounded-md border ${l.border}`,children:[e.jsxs("button",{type:"button",onClick:r,className:`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold transition-colors ${l.bg} ${l.text}`,children:[n,e.jsx("span",{"aria-hidden":"true",children:a?"−":"+"})]}),a&&e.jsx("div",{className:`border-t px-3 py-3 ${l.border}`,children:e.jsx(wi,{points:t,tone:s,darkMode:o})})]})}function Ni({detail:n,furtherReadingUrl:t,darkMode:s}){const[a,r]=g.useState(!1),[o,l]=g.useState(!1),[h,i]=g.useState(!1);return e.jsxs("div",{className:`mb-6 rounded-lg border ${s?"border-slate-700 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("button",{type:"button",onClick:()=>r(x=>!x),className:"flex w-full items-center justify-between gap-4 px-4 py-3 text-left",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Component overview"}),n.description&&e.jsx("p",{className:`mt-0.5 text-sm ${s?"text-slate-200":"text-slate-700"}`,children:n.description})]}),e.jsx("span",{className:`shrink-0 text-xs font-semibold ${s?"text-slate-300":"text-slate-500"}`,children:a?"Hide details −":"What is this? +"})]}),a&&e.jsxs("div",{className:`space-y-4 border-t px-4 py-4 ${s?"border-slate-700":"border-slate-200"}`,children:[t&&e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs font-semibold ${s?"border-slate-600 bg-slate-800 text-blue-300 hover:bg-slate-700":"border-slate-300 bg-white text-[#005eb8] hover:bg-slate-50"}`,children:"Further Reading ↗"}),n.whatIsIt&&e.jsx("p",{className:`text-sm ${s?"text-slate-300":"text-slate-600"}`,children:n.whatIsIt}),n.userInsight&&e.jsxs("blockquote",{className:`border-l-2 pl-3 text-sm italic ${s?"border-slate-600 text-slate-300":"border-slate-300 text-slate-600"}`,children:["“",n.userInsight,"”"]}),n.whyThisMatters&&e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${s?"text-slate-200":"text-slate-700"}`,children:"Why this matters"}),e.jsx("ul",{className:`mt-1 list-disc space-y-1 pl-5 text-sm ${s?"text-slate-300":"text-slate-600"}`,children:Gt(n.whyThisMatters).map(x=>e.jsx("li",{children:x},x))})]}),n.quickRealityCheck&&e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wide ${s?"text-slate-200":"text-slate-700"}`,children:"Quick reality check"}),e.jsx("ul",{className:`mt-1 list-disc space-y-1 pl-5 text-sm ${s?"text-slate-300":"text-slate-600"}`,children:Gt(n.quickRealityCheck).map(x=>e.jsx("li",{children:x},x))})]}),(n.whatGoodLooksLike.length>0||n.risksIfYouDont.length>0)&&e.jsxs("div",{className:"space-y-2",children:[n.whatGoodLooksLike.length>0&&e.jsx(Vt,{title:"What good looks like",points:n.whatGoodLooksLike,tone:"good",isOpen:o,onToggle:()=>l(x=>!x),darkMode:s}),n.risksIfYouDont.length>0&&e.jsx(Vt,{title:"Risks if you don't",points:n.risksIfYouDont,tone:"risk",isOpen:h,onToggle:()=>i(x=>!x),darkMode:s})]})]})]})}const gt="__evidence_json__:",Ci=1024*1024;function Ei(n,t,s){return(s[n]||[]).filter(a=>a.linkedActions.some(r=>r.actionId===t))}function Os(n){const t=n.trim();return t?/^https?:\/\//i.test(t)?t:/^www\./i.test(t)?`https://${t}`:t:""}function Ht(n){const t=(n==null?void 0:n.trim())||"";if(!t)return[];if(t.startsWith(gt))try{const s=JSON.parse(t.slice(gt.length));return Array.isArray(s)?s.filter(a=>a&&(a.type==="url"||a.type==="file")).map(a=>({type:a.type,label:String(a.label||"").trim(),href:String(a.href||"").trim()})).filter(a=>a.label||a.href):[]}catch{return[]}return t.split(`
`).map(s=>s.trim()).filter(Boolean).map(s=>{const a=Os(s);return{type:"url",label:s,href:a}})}function Ii(n){const t=n.map(s=>({type:s.type,label:s.label.trim(),href:s.href.trim()})).filter(s=>s.label||s.href);return t.length?`${gt}${JSON.stringify(t)}`:""}function ki(n){return new Promise((t,s)=>{const a=new FileReader;a.onload=()=>t(String(a.result||"")),a.onerror=()=>s(new Error("Unable to read file.")),a.readAsDataURL(n)})}function ji(){return e.jsx("svg",{className:"w-4 h-4 text-blue-500 mt-0.5 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Ai(){return e.jsxs("svg",{className:"w-4 h-4 mr-1.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z"})]})}function Oi(){return e.jsx("svg",{className:"w-4 h-4 mr-1.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.964 9.964 0 012.042-3.368m2.16-1.989A9.962 9.962 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.05 10.05 0 01-4.132 5.411M15 12a3 3 0 00-3-3m0 0a2.99 2.99 0 00-2.13.88M3 3l18 18"})})}function _i(){return e.jsx("svg",{className:"w-5 h-5 ml-2 text-slate-400 group-hover:text-[#005eb8] shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Ri(n,t,s){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:"",actionType:"Admin",owner:"",timescale:"",status:"Planned",phase:n,startDate:"",dueDate:"",notes:"",evidence:"",linkedTargets:[{componentId:t,lens:s}]}}function ze(n,t,s){const a=n.linkedTargets||[];if(!a.length)return[{componentId:t,lens:s}];const r=new Set,o=[];return a.forEach(l=>{const h=`${l.componentId}:${l.lens}`;r.has(h)||(r.add(h),o.push({componentId:l.componentId,lens:l.lens}))}),o}function Pi({store:n,components:t,activeComponentId:s,getRubricText:a,getEntry:r,onComponentChange:o,onEntryUpdate:l,onOpenLensInfo:h,onMatrixToggle:i,onActionRemove:x,onObjectivesUpdate:N,hideGuidedWorkflow:k=!1,onHideGuidedWorkflow:p,darkMode:c=!1}){var qe,Ye,an,An,xn,On,_n,Rn,on;const m=t.find(d=>d.id===s)||t[0],O=((Ye=(qe=n.orgProfile)==null?void 0:qe.projectName)==null?void 0:Ye.trim())||Si,_=(an=Ut[m.id])!=null&&an.whatIsIt?yi(Ut[m.id],O):void 0,[b,S]=g.useState(null),[V,C]=g.useState(null),[F,L]=g.useState(!1),[ce,z]=g.useState(!0),[te,de]=g.useState(!0),[ne,T]=g.useState(!0),[J,xe]=g.useState({}),[Ee,A]=g.useState({}),[se,Q]=g.useState({}),w=((An=n.objectives)==null?void 0:An[m.id])||[],R=n.orgProfile.teamMembers||[],X=g.useMemo(()=>{const d={};return m.lenses.forEach(I=>{d[I]=r(m.id,I).actions||[]}),d},[m.id,m.lenses,r]),Z=g.useMemo(()=>m.lenses.reduce((d,I)=>d+(r(m.id,I).actions||[]).length,0),[m.id,m.lenses,r]),Ie=g.useMemo(()=>m.lenses.reduce((d,I)=>d+(r(m.id,I).actions||[]).filter($=>Me($.status)==="Completed").length,0),[m.id,m.lenses,r]),ee=g.useMemo(()=>m.lenses.some(d=>Number(r(m.id,d).score||0)>0),[m.id,m.lenses,r]),Se=g.useMemo(()=>{const d={};return Object.keys(n.currentDraft).forEach(I=>{Object.keys(n.currentDraft[I]||{}).forEach($=>{(n.currentDraft[I][$].actions||[]).forEach(ue=>{ze(ue,I,$).forEach(Te=>{const Ae=`${Te.componentId}:${Te.lens}`;d[Ae]||(d[Ae]=[]),d[Ae].push({sourceComponentId:I,sourceLens:$,action:ue,isLinkedView:!(Te.componentId===I&&Te.lens===$)})})})})}),d},[n.currentDraft]),he=g.useMemo(()=>{const d={};return t.forEach(I=>{d[I.id]=I}),d},[t]),fe=g.useMemo(()=>{const d=m.lenses[0];return d?r(m.id,d).justification:""},[m.id,m.lenses,r]),f=g.useMemo(()=>{var d;return b?((d=t.find(I=>I.id===b.sourceComponentId))==null?void 0:d.label)||b.sourceComponentId:m.label},[b,m.label,t]),j=g.useMemo(()=>{var I;if(!((I=b==null?void 0:b.action.text)!=null&&I.trim()))return"New action";const d=b.action.text.trim().replace(/\s+/g," ");return d.length>70?`${d.slice(0,70)}...`:d},[b]),E=g.useMemo(()=>w.find(d=>d.id===(V==null?void 0:V.objectiveId))||null,[V==null?void 0:V.objectiveId,w]),D=g.useMemo(()=>E?ut(E,X):null,[E,X]),U=g.useMemo(()=>E?E.linkedActions.map(d=>{const I=(X[d.lens]||[]).find(ue=>ue.id===d.actionId),$=I?Me(I.status):null,me=I?Pt(I.status,I.startDate,I.dueDate):null;return{lens:d.lens,action:I,status:$,temporalStatus:me}}):[],[E,X]),je=g.useCallback(d=>{o(d.target.value)},[o]),ke=g.useCallback((d,I)=>{const $=r(m.id,d);l(m.id,d,{...$,score:I})},[m.id,r,l]),De=g.useCallback(d=>{m.lenses.forEach(I=>{const $=r(m.id,I);l(m.id,I,{...$,justification:d})})},[m.id,m.lenses,r,l]),Oe=g.useCallback((d,I)=>{const $=Ri(m.phase,m.id,d);I&&($.text=I),S({sourceComponentId:m.id,sourceLens:d,mode:"create",action:$,evidenceItems:Ht($.evidence||""),linkedObjectiveIds:[],targetPickerComponentId:m.id,targetPickerLens:d})},[m.id,m.phase]),ae=g.useCallback((d,I,$)=>{var Te;const me=ze($,d,I),ue=me[0]||{componentId:d,lens:I},Le=(((Te=n.objectives)==null?void 0:Te[d])||[]).filter(Ae=>Ae.linkedActions.some(Fe=>Fe.actionId===$.id)).map(Ae=>Ae.id);S({sourceComponentId:d,sourceLens:I,mode:"edit",actionId:$.id,action:{...$,linkedTargets:me,notes:$.notes||"",evidence:$.evidence||"",startDate:$.startDate||"",dueDate:$.dueDate||""},evidenceItems:Ht($.evidence||""),linkedObjectiveIds:Le,targetPickerComponentId:ue.componentId,targetPickerLens:ue.lens})},[n.objectives]),Je=()=>{S(null)},y=()=>{var Te;if(!b)return;if(!b.action.text.trim()){window.alert("Action description is required.");return}const d={...b.action,evidence:Ii(b.evidenceItems),status:Me(b.action.status),linkedTargets:ze(b.action,b.sourceComponentId,b.sourceLens),timescale:b.action.dueDate||b.action.startDate||b.action.timescale},I=r(b.sourceComponentId,b.sourceLens),$=b.mode==="create"?[...I.actions,d]:I.actions.map(Ae=>Ae.id===b.actionId?d:Ae);l(b.sourceComponentId,b.sourceLens,{...I,actions:$});const me=new Set(b.linkedObjectiveIds),Le=(((Te=n.objectives)==null?void 0:Te[b.sourceComponentId])||[]).map(Ae=>{const Fe=Ae.linkedActions.filter(Sn=>!(Sn.lens===b.sourceLens&&Sn.actionId===d.id));return me.has(Ae.id)?{...Ae,linkedActions:[...Fe,{lens:b.sourceLens,actionId:d.id}]}:{...Ae,linkedActions:Fe}});N(b.sourceComponentId,Le),Je()},G=d=>{S(I=>{if(!I)return I;const $={...I,action:{...I.action,...d}};return $.action.status=Me($.action.status),$})},K=(d,I)=>{S($=>$&&{...$,targetPickerComponentId:d,targetPickerLens:I})},ie=()=>{S(d=>{if(!d)return d;const I=he[d.targetPickerComponentId]||m,$=I.lenses.includes(d.targetPickerLens)?d.targetPickerLens:I.lenses[0];if(!$)return d;const me=ze(d.action,d.sourceComponentId,d.sourceLens);return me.some(ue=>ue.componentId===I.id&&ue.lens===$)?d:{...d,action:{...d.action,linkedTargets:[...me,{componentId:I.id,lens:$}]}}})},ve=(d,I)=>{S($=>{if(!$)return $;const ue=ze($.action,$.sourceComponentId,$.sourceLens).filter(Le=>!(Le.componentId===d&&Le.lens===I));return{...$,action:{...$.action,linkedTargets:ue}}})},ye=d=>{S(I=>{if(!I)return I;const $=new Set(I.linkedObjectiveIds);return $.has(d)?$.delete(d):$.add(d),{...I,linkedObjectiveIds:Array.from($)}})},pe=d=>{S(I=>I&&{...I,evidenceItems:d})},le=()=>{if(!b)return;const d=b.evidenceItems;pe([...d,{type:"url",label:"",href:""}])},Ue=(d,I,$)=>{if(!b)return;const me=b.evidenceItems;if(!me[d])return;const ue=[...me];I==="href"?ue[d]={...ue[d],href:Os($)}:ue[d]={...ue[d],label:$},pe(ue)},We=d=>{if(!b)return;const I=b.evidenceItems;pe(I.filter(($,me)=>me!==d))},$e=async d=>{if(!b)return;const I=d.target.files;if(!(I!=null&&I.length))return;const me=[...b.evidenceItems];for(const ue of Array.from(I)){if(ue.size>Ci){window.alert(`"${ue.name}" is larger than 1MB. Please attach a URL instead.`);continue}try{const Le=await ki(ue);me.push({type:"file",label:ue.name,href:Le})}catch{window.alert(`Unable to upload "${ue.name}".`)}}pe(me),d.target.value=""},be=(d,I)=>{I&&(C(null),ae(m.id,d,I))},Be=d=>{const I=document.getElementById(d);I==null||I.scrollIntoView({behavior:"smooth",block:"start"})};return e.jsxs("div",{className:"max-w-5xl mx-auto pb-20",children:[e.jsxs("div",{className:"mb-8 flex items-center justify-between gap-4 flex-wrap",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:`text-3xl font-bold flex items-center ${c?"text-slate-100":"text-slate-800"}`,children:[m.label,e.jsx("span",{className:"bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-4 border border-blue-200",children:tn[m.phase]||`Phase ${m.phase}`})]}),e.jsx("p",{className:`mt-2 ${c?"text-slate-300":"text-slate-500"}`,children:"Assess readiness at lens level. Change Component justification, outcomes, and actions are tracked below."})]}),e.jsx("select",{value:m.id,onChange:je,className:`rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 text-sm font-medium border ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:t.map(d=>e.jsx("option",{value:d.id,children:d.label},d.id))})]}),_&&e.jsx(Ni,{detail:_,furtherReadingUrl:(On=(xn=n.orgProfile)==null?void 0:xn.componentFurtherReading)==null?void 0:On[m.id],darkMode:c}),!k&&!F&&e.jsxs("div",{className:`${c?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mb-6 rounded-lg border p-4`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${c?"text-slate-300":"text-slate-600"}`,children:"Guided workflow"}),e.jsx("button",{type:"button",onClick:()=>L(!0),"aria-label":"Dismiss guided workflow",className:`text-xs font-semibold leading-none ${c?"text-slate-400 hover:text-slate-200":"text-slate-400 hover:text-slate-700"}`,children:"×"})]}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:()=>Be("assessment-scoring"),className:`${c?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"1. Justify"}),e.jsx("button",{type:"button",onClick:()=>Be("assessment-objectives"),className:`${c?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"2. Review outcomes"}),e.jsx("button",{type:"button",onClick:()=>Be("assessment-actions"),className:`${c?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"3. Plan lens actions"})]}),p&&e.jsx("button",{type:"button",onClick:p,className:`mt-3 text-xs underline ${c?"text-slate-400 hover:text-slate-200":"text-slate-500 hover:text-slate-700"}`,children:"Don't show this again"})]}),e.jsxs("div",{className:`mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${c?"border-emerald-500/40 bg-emerald-500/15 text-emerald-200":"border-emerald-200 bg-emerald-50 text-emerald-800"}`,children:[e.jsx("span",{className:"inline-block h-2 w-2 rounded-full bg-emerald-500","aria-hidden":"true"}),"Auto-save is on for scoring and component notes."]}),e.jsxs("div",{id:"assessment-scoring",className:`${c?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[e.jsx("h3",{className:`text-sm font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:ee?"Step 1: Justify":"Step 1: Justification of what is currently known"}),e.jsx("button",{type:"button",onClick:()=>z(d=>!d),className:`${c?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:ce?"Hide":"Show"})]}),ce?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:`block text-sm font-semibold mb-2 ${c?"text-slate-100":"text-slate-700"}`,children:"Change Component Justification"}),e.jsx("p",{className:`text-xs mb-2 ${c?"text-slate-300":"text-slate-500"}`,children:'Explain what is currently known, what evidence supports that view, and where the biggest gap sits. Example: "Sponsorship is visible only in two services; there is no monthly steering update yet; next step is to agree a trust-wide sponsor cadence."'}),e.jsx("textarea",{value:fe,onChange:d=>De(d.target.value),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-24 p-2 border ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,placeholder:"Record what is currently known for this change component, the evidence behind it, and the key improvement needed next."})]}):null]}),e.jsxs("div",{id:"assessment-objectives",className:`${c?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-1",children:[e.jsx("h3",{className:`text-sm font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"Step 2: Review outcomes"}),e.jsx("button",{type:"button",onClick:()=>de(d=>!d),className:`${c?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:te?"Hide":"Show"})]}),e.jsx("p",{className:`text-xs mb-3 ${c?"text-slate-300":"text-slate-500"}`,children:"Owned by this component as a whole. Status is derived automatically from the lens actions assigned to each outcome below and cannot be set manually."}),te?w.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${c?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:c?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Linked Actions"})]})}),e.jsx("tbody",{className:`${c?"divide-slate-700":"divide-slate-100"} divide-y`,children:w.map(d=>{const I=ut(d,X),$=Mt[I],me=()=>C({objectiveId:d.id});return e.jsxs("tr",{onClick:me,onKeyDown:ue=>{(ue.key==="Enter"||ue.key===" ")&&(ue.preventDefault(),me())},tabIndex:0,className:`${c?"hover:bg-slate-700 focus-visible:bg-slate-700":"hover:bg-slate-50 focus-visible:bg-slate-50"} cursor-pointer focus:outline-none`,children:[e.jsx("td",{className:`px-3 py-2 text-sm ${c?"text-slate-100":"text-slate-800"}`,children:d.text||"Untitled outcome"}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${$}`,children:I})}),e.jsx("td",{className:`px-3 py-2 text-sm ${c?"text-slate-300":"text-slate-600"}`,children:d.linkedActions.length?`${d.linkedActions.length} action(s)`:"None assigned"})]},d.id)})})]})}):e.jsx("p",{className:"text-sm text-slate-500",children:"No outcomes yet."}):null]}),e.jsx("div",{id:"assessment-actions",className:`${c?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mb-3 rounded-lg border p-4`,children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-sm font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"Step 3: Plan lens actions"}),e.jsx("p",{className:`mt-1 text-xs ${c?"text-slate-300":"text-slate-600"}`,children:"Track delivery actions for each lens and link them to outcomes and affected component lenses."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:`${c?"bg-slate-800 border-slate-600 text-slate-100":"bg-white border-slate-300 text-slate-700"} rounded-full border px-2 py-1 text-xs`,children:[Ie,"/",Z," completed"]}),e.jsx("button",{type:"button",onClick:()=>T(d=>!d),className:`${c?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:ne?"Hide":"Show"})]})]})}),ne?e.jsx("div",{className:"space-y-8",children:m.lenses.map(d=>{var Pn;const I=r(m.id,d),$=`${m.id}:${d}`,me=Se[$]||[],ue=me.some(P=>P.action.readinessScore===0),Le=I.score===0&&!ue?1:I.score,Te=!!((Pn=n.showMatrix)!=null&&Pn[`${m.id}:${d}`]),Ae=Ee[$]||"all",Fe=se[$]||"all",Sn=Array.from(new Set(me.map(P=>P.action.actionType).filter(P=>P!==void 0))).sort((P,ge)=>String(P).localeCompare(String(ge))),dn=Array.from(new Set([...R.map(P=>P.name),...me.map(P=>P.action.owner).filter(P=>!!P)])).sort((P,ge)=>P.localeCompare(ge)),rn=[...me].filter(P=>(P.action.readinessScore!==void 0?P.action.readinessScore:Le)!==Le||Ae!=="all"&&(P.action.actionType||"")!==Ae?!1:Fe==="all"||(P.action.owner||"")===Fe).sort((P,ge)=>{const Ge=Me(P.action.status)==="Completed",Xe=Me(ge.action.status)==="Completed";if(Ge!==Xe)return Ge?1:-1;const Qe=P.action.dueDate?new Date(P.action.dueDate).getTime():Number.POSITIVE_INFINITY,vn=ge.action.dueDate?new Date(ge.action.dueDate).getTime():Number.POSITIVE_INFINITY;return Qe-vn}),et=I.score>=m.target?"#22c55e":I.score>0?"#f59e0b":"#cbd5e1";return e.jsxs("div",{className:`${c?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:[e.jsxs("div",{className:`${c?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} p-6 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4`,children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm font-bold uppercase tracking-wider text-blue-600 block mb-1",children:"Lens"}),e.jsxs("button",{onClick:()=>h(d),className:`flex items-center text-2xl font-semibold transition-colors group text-left ${c?"text-slate-100 hover:text-[#63b3ff]":"text-slate-800 hover:text-[#005eb8]"}`,title:"View Lens Information",children:[d,e.jsx(_i,{})]})]}),e.jsxs("div",{className:"shrink-0 w-full md:w-64",children:[e.jsx("label",{className:`block text-xs font-semibold mb-1 ${c?"text-slate-300":"text-slate-500"}`,children:"Readiness Score"}),e.jsx("select",{value:I.score,onChange:P=>ke(d,Number(P.target.value)),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 text-sm font-medium border ${c?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,style:{borderLeftWidth:"4px",borderLeftColor:et},children:Ft.map(P=>e.jsxs("option",{value:P,children:[P," - ",pi[P]]},P))})]})]}),e.jsx("div",{className:`${c?"bg-slate-900 border-slate-700":"bg-blue-50/50 border-slate-100"} px-6 py-4 border-b text-sm`,children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start gap-4",children:[e.jsxs("div",{className:"flex items-start flex-1",children:[e.jsx(ji,{}),e.jsxs("p",{className:`whitespace-pre-line ${c?"text-slate-300":"text-slate-600"}`,children:[e.jsxs("strong",{className:c?"text-slate-100":"text-slate-700",children:[I.score===0?"Not Started":`Level ${I.score}`,":"]}),` ${a(m.id,d,I.score)}`]})]}),e.jsxs("button",{onClick:()=>i(`${m.id}:${d}`),className:`${c?"bg-slate-800 border-slate-600 text-[#63b3ff] hover:text-[#90cdf4]":"bg-white border-blue-200 text-[#005eb8] hover:text-blue-800"} shrink-0 text-xs font-semibold flex items-center px-3 py-1.5 border rounded shadow-sm transition-colors`,children:[Te?e.jsx(Oi,{}):e.jsx(Ai,{}),Te?"Hide Full Guidance":"View Full Guidance"]})]})}),Te&&e.jsx("div",{className:`${c?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} px-6 py-5 border-b`,children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4",children:Ft.map(P=>{const Ge={0:"bg-white",1:"bg-rose-50",2:"bg-orange-50",3:"bg-yellow-50",4:"bg-green-50",5:"bg-blue-50"}[P]||"bg-white";return e.jsxs("button",{onClick:()=>ke(d,P),className:`p-4 rounded-lg border shadow-sm text-left transition-colors h-full flex flex-col items-start justify-start ${I.score===P?`${Ge} border-[#005eb8] ring-1 ring-[#005eb8]`:`${Ge} border-slate-200 hover:border-blue-300`}`,children:[e.jsx("div",{className:`text-sm font-bold mb-2 pb-2 border-b w-full ${I.score===P?"text-[#005eb8] border-blue-200":"text-slate-700 border-slate-100"}`,children:P===0?"Not Started":`Level ${P}`}),e.jsx("p",{className:`text-xs whitespace-pre-line leading-relaxed text-left w-full ${c?"text-slate-200":"text-slate-600"}`,children:a(m.id,d,P)})]},P)})})}),e.jsxs("div",{className:`${c?"border-slate-700":"border-slate-100"} p-6 border-t`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:`text-sm font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"Lens Actions"}),e.jsx("p",{className:`mt-1 text-xs ${c?"text-slate-300":"text-slate-500"}`,children:"Hierarchy: Outcome - Action - Affected component lenses."})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs("select",{"aria-label":`Filter ${d} actions by type`,value:Ae,onChange:P=>A(ge=>({...ge,[$]:P.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),[...new Set([...Hn,...Sn])].map(P=>e.jsx("option",{value:P,children:P},P))]}),e.jsxs("select",{"aria-label":`Filter ${d} actions by owner`,value:Fe,onChange:P=>Q(ge=>({...ge,[$]:P.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),dn.map(P=>e.jsx("option",{value:P,children:P},P))]}),e.jsx("button",{onClick:()=>Oe(d),className:"px-3 py-1.5 rounded bg-[#005eb8] text-white text-xs font-semibold shadow-[0_2px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Add Action"})]})]}),rn.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${c?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:c?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action Type"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Start"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"End"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Affected Component Lenses"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Actions"})]})}),e.jsx("tbody",{className:`${c?"divide-slate-700":"divide-slate-100"} divide-y`,children:(J[`${m.id}:${d}`]?rn:rn.slice(0,5)).map(P=>{var yn;const ge=P.action,Ge=Me(ge.status),Xe=Pt(ge.status,ge.startDate,ge.dueDate),Qe=Xe==="Overdue start"||Xe==="Overdue completion"?Xe:null,vn=((yn=he[P.sourceComponentId])==null?void 0:yn.label)||P.sourceComponentId,nt=Ei(P.sourceComponentId,ge.id,n.objectives||{}),tt=ze(ge,P.sourceComponentId,P.sourceLens).map(Ze=>{var $n;return`${(($n=he[Ze.componentId])==null?void 0:$n.label)||Ze.componentId} / ${Ze.lens}`}).join(", "),Dn=pn[Ge]||pn.Planned;return e.jsxs("tr",{children:[e.jsxs("td",{className:`px-3 py-2 text-sm ${c?"text-slate-100":"text-slate-800"}`,children:[e.jsx("div",{children:xi(ge.text,fi[P.sourceComponentId]||[],c)}),P.isLinkedView?e.jsxs("div",{className:`mt-1 text-xs ${c?"text-indigo-300":"text-indigo-700"}`,children:["Linked from ",vn," /"," ",P.sourceLens]}):null]}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${Dn}`,children:Ge}),Qe?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:Qe}):null,!nt.length&&e.jsx("div",{className:`mt-1 text-xs ${c?"text-amber-200":"text-amber-700"}`,children:"Not yet linked"})]}),e.jsx("td",{className:`px-3 py-2 text-sm ${c?"text-slate-100":"text-slate-700"}`,children:ge.actionType||"Unassigned"}),e.jsx("td",{className:`px-3 py-2 text-sm ${c?"text-slate-100":"text-slate-700"}`,children:ge.owner||"Unassigned"}),e.jsx("td",{className:`px-3 py-2 text-sm ${c?"text-slate-300":"text-slate-600"}`,children:ge.startDate||"-"}),e.jsx("td",{className:`px-3 py-2 text-sm ${c?"text-slate-300":"text-slate-600"}`,children:ge.dueDate||"-"}),e.jsx("td",{className:`px-3 py-2 text-xs ${c?"text-slate-300":"text-slate-600"}`,children:tt}),e.jsx("td",{className:"px-3 py-2",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"button",onClick:()=>ae(P.sourceComponentId,P.sourceLens,ge),className:`${c?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Edit"}),e.jsx("button",{type:"button",onClick:()=>x(P.sourceComponentId,P.sourceLens,ge.id),className:`${c?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Remove"})]})})]},`${P.sourceComponentId}:${P.sourceLens}:${ge.id}`)})})]})}):e.jsx("p",{className:`text-sm ${c?"text-slate-300":"text-slate-500"}`,children:"No actions yet for this lens."}),rn.length>5?e.jsx("button",{type:"button",onClick:()=>xe(P=>({...P,[`${m.id}:${d}`]:!P[`${m.id}:${d}`]})),className:`${c?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} mt-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:J[`${m.id}:${d}`]?"Show top 5 actions":`Show all ${rn.length} actions`}):""]})]},d)})}):null,b?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${c?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-hidden rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("h3",{className:`text-lg font-semibold ${c?"text-slate-100":"text-slate-900"}`,children:[b.mode==="create"?"Create Action":"Edit Action"," ·"," ",f," / ",b.sourceLens," · ",j]}),e.jsx("button",{type:"button",onClick:Je,className:`${c?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:"mt-4 max-h-[calc(100vh-13rem)] overflow-y-auto pr-1 grid gap-3",children:[e.jsx("div",{className:`${c?"border-slate-700 bg-slate-900":"border-blue-100 bg-white"} sticky top-0 z-10 rounded-md border px-3 py-2 shadow-sm`,children:e.jsxs("label",{className:`text-sm ${c?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Description"}),e.jsx("textarea",{value:b.action.text,onChange:d=>G({text:d.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${c?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})}),e.jsxs("div",{className:`${c?"border-slate-700 bg-slate-900 text-slate-200":"border-blue-100 bg-blue-50 text-slate-700"} rounded-md border px-3 py-2 text-xs`,children:[e.jsx("strong",{children:"Linking order:"})," first attach this action to one or more outcomes, then add affected component lenses (component + lens) where this action should appear."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsxs("label",{className:`text-sm ${c?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Action Type"}),e.jsx("select",{value:b.action.actionType||"Admin",onChange:d=>G({actionType:d.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Hn.map(d=>e.jsx("option",{value:d,children:d},d))})]}),e.jsxs("label",{className:`text-sm ${c?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Owner"}),e.jsxs("select",{value:b.action.owner,onChange:d=>G({owner:d.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Unassigned"}),R.map(d=>e.jsxs("option",{value:d.name,children:[d.name,d.role?` - ${d.role}`:""]},d.id)),b.action.owner&&!R.some(d=>d.name===b.action.owner)?e.jsxs("option",{value:b.action.owner,children:[b.action.owner," (not on roster)"]}):null]})]}),e.jsxs("label",{className:`text-sm ${c?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Status"}),e.jsx("select",{value:b.action.status,onChange:d=>G({status:d.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:gi.map(d=>e.jsx("option",{value:d,children:d},d))})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("label",{className:`text-sm ${c?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Start Date"}),e.jsx("input",{type:"date",value:b.action.startDate||"",onChange:d=>G({startDate:d.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("label",{className:`text-sm ${c?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"End Date"}),e.jsx("input",{type:"date",value:b.action.dueDate||"",onChange:d=>G({dueDate:d.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsxs("label",{className:`text-sm ${c?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Notes"}),e.jsx("textarea",{value:b.action.notes||"",onChange:d=>G({notes:d.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("div",{className:`${c?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"Evidence Links / Docs"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:le,className:`${c?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Add web link"}),e.jsxs("label",{className:`${c?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:["Upload file(s)",e.jsx("input",{type:"file",multiple:!0,className:"hidden",onChange:$e})]})]})]}),e.jsx("p",{className:`mt-1 text-xs ${c?"text-slate-300":"text-slate-500"}`,children:"Add evidence as either web links or uploaded files. Everything appears below in a single list."}),e.jsx("div",{className:`${c?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:b.evidenceItems.length?b.evidenceItems.map((d,I)=>e.jsxs("div",{className:`${c?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} grid grid-cols-1 gap-2 rounded border p-2 md:grid-cols-[auto,1fr,1fr,auto]`,children:[e.jsx("div",{className:"flex items-start pt-2",children:e.jsx("span",{className:`${d.type==="file"?"bg-emerald-100 text-emerald-800":"bg-blue-100 text-blue-800"} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`,children:d.type==="file"?"File":"Link"})}),e.jsx("input",{value:d.label,onChange:$=>Ue(I,"label",$.target.value),placeholder:d.type==="file"?"Document label":"Link label",className:`rounded-md border px-2.5 py-2 text-sm ${c?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`}),e.jsx("input",{value:d.href,onChange:$=>Ue(I,"href",$.target.value),placeholder:d.type==="file"?"Embedded file URL (auto generated)":"https://...",className:`rounded-md border px-2.5 py-2 text-sm ${c?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,disabled:d.type==="file"}),e.jsx("button",{type:"button",onClick:()=>We(I),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},`${d.type}-${I}`)):e.jsx("p",{className:`px-2 py-1 text-sm ${c?"text-slate-300":"text-slate-500"}`,children:"No evidence links or documents added yet."})})]}),e.jsxs("div",{className:`${c?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsx("p",{className:`text-sm font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"Affected Outcomes"}),e.jsx("p",{className:`mt-1 text-xs ${c?"text-slate-300":"text-slate-500"}`,children:"Tick 1-3 outcomes directly impacted by this action. Outcome status is auto-derived from these linked actions."}),e.jsx("div",{className:`${c?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:(((_n=n.objectives)==null?void 0:_n[b.sourceComponentId])||[]).length?(((Rn=n.objectives)==null?void 0:Rn[b.sourceComponentId])||[]).map(d=>{const I=b.linkedObjectiveIds.includes(d.id);return e.jsxs("label",{className:`${c?"hover:bg-slate-700":"hover:bg-slate-50"} flex items-start gap-2 rounded px-2 py-1.5`,children:[e.jsx("input",{type:"checkbox",checked:I,onChange:()=>ye(d.id),className:"mt-0.5"}),e.jsx("span",{className:`text-sm ${c?"text-slate-100":"text-slate-700"}`,children:d.text||"Untitled outcome"})]},d.id)}):e.jsx("p",{className:`px-2 py-1 text-sm ${c?"text-slate-300":"text-slate-500"}`,children:"No outcomes are defined for this component yet."})})]}),e.jsxs("div",{className:`${c?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"Affected Component Lenses"}),e.jsx("span",{className:"inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-600",title:"Actions often contribute to other component lenses. Add those targets here so the same action is visible in each relevant lens.",children:"i"})]}),e.jsxs("div",{className:"mt-2 space-y-2",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2",children:[e.jsx("select",{value:b.targetPickerComponentId,onChange:d=>{const I=d.target.value,$=he[I];K(I,($==null?void 0:$.lenses[0])||"")},className:`rounded-md border px-2.5 py-2 text-sm ${c?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:t.map(d=>e.jsx("option",{value:d.id,children:d.label},d.id))}),e.jsx("select",{value:b.targetPickerLens,onChange:d=>K(b.targetPickerComponentId,d.target.value),className:`rounded-md border px-2.5 py-2 text-sm ${c?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:(((on=he[b.targetPickerComponentId])==null?void 0:on.lenses)||[]).map(d=>e.jsx("option",{value:d,children:d},d))}),e.jsx("button",{type:"button",onClick:ie,disabled:ze(b.action,b.sourceComponentId,b.sourceLens).some(d=>d.componentId===b.targetPickerComponentId&&d.lens===b.targetPickerLens),title:ze(b.action,b.sourceComponentId,b.sourceLens).some(d=>d.componentId===b.targetPickerComponentId&&d.lens===b.targetPickerLens)?"Already added":"Add selected affected lens",className:`${c?"border-cyan-500/50 bg-cyan-500/15 text-cyan-100 hover:bg-cyan-500/25":"border-cyan-300 bg-cyan-100 text-cyan-900 hover:bg-cyan-200"} rounded-md border px-3 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-60`,children:"Add Lens"})]}),e.jsx("div",{className:`${c?"border-slate-700":"border-slate-200"} overflow-hidden rounded border`,children:e.jsxs("table",{className:`min-w-full ${c?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:c?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Component"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Remove"})]})}),e.jsx("tbody",{className:`${c?"divide-slate-700":"divide-slate-100"} divide-y`,children:ze(b.action,b.sourceComponentId,b.sourceLens).map(d=>{var I;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-2.5 py-2 text-sm ${c?"text-slate-100":"text-slate-700"}`,children:((I=he[d.componentId])==null?void 0:I.label)||d.componentId}),e.jsx("td",{className:`px-2.5 py-2 text-sm ${c?"text-slate-100":"text-slate-700"}`,children:d.lens}),e.jsx("td",{className:"px-2.5 py-2",children:e.jsx("button",{type:"button",onClick:()=>ve(d.componentId,d.lens),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},`${d.componentId}:${d.lens}`)})})]})})]})]})]}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:Je,className:`${c?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Cancel"}),e.jsx("button",{type:"button",onClick:y,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Save Action"})]})]})}):null,V&&E&&D?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":"Outcome Details",className:`w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${c?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${c?"text-slate-100":"text-slate-900"}`,children:"Outcome Details"}),e.jsx("button",{type:"button",onClick:()=>C(null),className:`${c?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${c?"text-slate-400":"text-slate-500"}`,children:"Outcome"}),e.jsx("p",{className:`mt-1 text-sm ${c?"text-slate-100":"text-slate-900"}`,children:E.text||"Untitled outcome"})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${c?"text-slate-400":"text-slate-500"}`,children:"Status"}),e.jsx("span",{className:`mt-1 inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${Mt[D]}`,children:D})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${c?"text-slate-400":"text-slate-500"}`,children:"Linked Actions"}),U.length?e.jsx("div",{className:`mt-2 overflow-x-auto rounded-md border ${c?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:`min-w-full divide-y ${c?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"}`,children:[e.jsx("thead",{className:c?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Navigate"})]})}),e.jsx("tbody",{className:`divide-y ${c?"divide-slate-700":"divide-slate-100"}`,children:U.map(d=>{var $,me;const I=d.status?pn[d.status]||pn.Planned:pn.Planned;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${c?"text-slate-100":"text-slate-700"}`,children:d.lens}),e.jsx("td",{className:`px-3 py-2 text-sm ${c?"text-slate-100":"text-slate-700"}`,children:(($=d.action)==null?void 0:$.text)||"Linked action not found"}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${I}`,children:d.status||"Not Started"}),d.temporalStatus==="Overdue start"||d.temporalStatus==="Overdue completion"?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:d.temporalStatus}):null]}),e.jsx("td",{className:"px-3 py-2",children:d.action?e.jsx("button",{type:"button",onClick:()=>be(d.lens,d.action||void 0),className:`${c?"border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25":"border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Open Action"}):e.jsx("span",{className:`text-xs ${c?"text-slate-500":"text-slate-400"}`,children:"Unavailable"})})]},`${d.lens}:${((me=d.action)==null?void 0:me.id)||"missing"}`)})})]})}):e.jsx("p",{className:`mt-1 text-sm ${c?"text-slate-300":"text-slate-500"}`,children:"No linked actions assigned."})]})]})]})}):null]})}const Ln=50;function Di(n){const t=new Date(n);return Number.isNaN(t.getTime())?n:t.toLocaleString("en-GB",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function $i({events:n,darkMode:t=!1}){const[s,a]=g.useState("all"),[r,o]=g.useState("all"),[l,h]=g.useState("all"),[i,x]=g.useState(""),[N,k]=g.useState(1),p=g.useMemo(()=>["all",...Array.from(new Set(n.map(C=>C.eventType))).sort()],[n]),c=g.useMemo(()=>["all",...Array.from(new Set(n.map(C=>C.componentId).filter(Boolean))).sort()],[n]),m=g.useMemo(()=>["all",...Array.from(new Set(n.map(C=>C.actor).filter(Boolean))).sort()],[n]),O=g.useMemo(()=>{const C=i.trim().toLowerCase();return n.filter(F=>s==="all"?!0:F.eventType===s).filter(F=>r==="all"?!0:F.componentId===r).filter(F=>l==="all"?!0:F.actor===l).filter(F=>C?[F.summary,F.reason,F.entityId,F.lens].filter(Boolean).some(L=>String(L).toLowerCase().includes(C)):!0).sort((F,L)=>Date.parse(L.timestamp)-Date.parse(F.timestamp))},[n,s,r,l,i]),_=Math.max(1,Math.ceil(O.length/Ln)),b=Math.min(N,_),S=(b-1)*Ln,V=O.slice(S,S+Ln);return e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Audit Log"}),e.jsx("p",{className:`text-sm mt-1 ${t?"text-slate-300":"text-slate-600"}`,children:"Timestamped history of CST changes, including who made each change."})]}),e.jsxs("div",{className:`grid gap-3 md:grid-cols-4 rounded-lg border p-4 ${t?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Event type"}),e.jsx("select",{value:s,onChange:C=>{a(C.target.value),k(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:p.map(C=>e.jsx("option",{value:C,children:C==="all"?"All":C},C))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Component"}),e.jsx("select",{value:r,onChange:C=>{o(C.target.value),k(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:c.map(C=>e.jsx("option",{value:C,children:C==="all"?"All":C},C))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Actor"}),e.jsx("select",{value:l,onChange:C=>{h(C.target.value),k(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:m.map(C=>e.jsx("option",{value:C,children:C==="all"?"All":C},C))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Search"}),e.jsx("input",{value:i,onChange:C=>{x(C.target.value),k(1)},placeholder:"summary, reason, id",className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsx("div",{className:`rounded-lg border overflow-hidden ${t?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full text-sm",children:[e.jsx("thead",{className:t?"bg-slate-900 text-slate-200":"bg-slate-50 text-slate-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left",children:"When"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Who"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"What"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Context"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Details"})]})}),e.jsx("tbody",{className:t?"bg-slate-800 text-slate-100":"bg-white text-slate-800",children:V.length?V.map(C=>e.jsxs("tr",{className:t?"border-t border-slate-700":"border-t border-slate-100",children:[e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:Di(C.timestamp)}),e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:C.actor||"Unknown user"}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{className:"font-medium",children:C.summary}),e.jsx("div",{className:`text-xs mt-1 ${t?"text-slate-300":"text-slate-600"}`,children:C.eventType})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{children:C.componentId||"-"}),e.jsx("div",{className:`text-xs ${t?"text-slate-300":"text-slate-600"}`,children:C.lens||"-"})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[C.reason?e.jsxs("div",{children:["Reason: ",C.reason]}):null,C.before||C.after?e.jsxs("details",{className:"mt-1",children:[e.jsx("summary",{className:"cursor-pointer text-xs underline",children:"Before/After"}),e.jsx("pre",{className:`mt-1 text-xs whitespace-pre-wrap ${t?"text-slate-300":"text-slate-600"}`,children:JSON.stringify({before:C.before,after:C.after},null,2)})]}):null]})]},C.id)):e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-6 text-center",colSpan:5,children:"No audit events found for the selected filters."})})})]})}),e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("span",{className:t?"text-slate-300":"text-slate-600",children:["Showing ",V.length?S+1:0,"-",Math.min(S+Ln,O.length)," of ",O.length]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>k(C=>Math.max(1,C-1)),disabled:b<=1,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Previous"}),e.jsxs("span",{className:t?"text-slate-200":"text-slate-700",children:["Page ",b," / ",_]}),e.jsx("button",{type:"button",onClick:()=>k(C=>Math.min(_,C+1)),disabled:b>=_,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Next"})]})]})]})}const Ti=[{id:"why",question:"Why are we doing this?",framework:"Force Field Analysis - Driving Forces",description:"The forces pushing for change - the case that makes it worth doing.",componentIds:["case_for_change"]},{id:"future",question:"What will the future look like?",framework:"Vision",description:"A clear picture of the destination, understood and shared by everyone.",componentIds:["vision"]},{id:"barriers",question:"What might prevent us from achieving the vision?",framework:"Force Field Analysis - Restraining Forces",description:"The forces working against change - risks, resistance and blockers to plan for.",componentIds:["case_for_change","resistance"]},{id:"impacted",question:"Who's going to be impacted by the change?",framework:"Stakeholder Analysis & Change Impact Analysis",description:"Everyone affected by the change, and how deeply it affects them.",componentIds:["stakeholder","change_impact"]},{id:"leading",question:"Who's leading the change?",framework:"Sponsor Coalition & Change Network",description:"The visible leaders and the network of champions carrying the change day to day.",componentIds:["sponsorship","change_network"]},{id:"persuade",question:"How will we persuade people to change?",framework:"Case for Change",description:"The compelling narrative that wins hearts and minds.",componentIds:["case_for_change"]}],Wt=[{phase:1,label:"Pre-Discovery",programmeStage:"Concept",tagline:"Define the change",deliverables:["Change Vision defined and communicated","Compelling case for change developed"],color:"bg-blue-50",darkColor:"bg-blue-950/45",textColor:"text-blue-700",darkTextColor:"text-blue-100",borderColor:"border-blue-300",darkBorderColor:"border-blue-700"},{phase:2,label:"Solution Design",programmeStage:"Definition",tagline:"Prepare the change",deliverables:["Change Impact analysed","Change Management inputted to Business Case","Engagement and Comms Strategy developed"],color:"bg-violet-50",darkColor:"bg-violet-950/45",textColor:"text-violet-700",darkTextColor:"text-violet-100",borderColor:"border-violet-300",darkBorderColor:"border-violet-700"},{phase:3,label:"Development",programmeStage:"Design & Develop",tagline:"Plan the change",deliverables:["Engagement and Comms Plan developed","Change Management Plan developed"],color:"bg-amber-50",darkColor:"bg-amber-950/45",textColor:"text-amber-700",darkTextColor:"text-amber-100",borderColor:"border-amber-300",darkBorderColor:"border-amber-700"},{phase:4,label:"Deployment / Go Live",programmeStage:"Implementation",tagline:"Manage implementation of the change",deliverables:["Change Management Plan executed","Communications delivered and Stakeholders engaged","Future State Processes validated","Skills gaps addressed","Future State Processes trialled and in use"],color:"bg-orange-50",darkColor:"bg-orange-950/45",textColor:"text-orange-700",darkTextColor:"text-orange-100",borderColor:"border-orange-300",darkBorderColor:"border-orange-700"},{phase:5,label:"Post-Deployment",programmeStage:"Transition / Close",tagline:"Reinforce and sustain the change",deliverables:["Change adoption evaluated","Business Change refinements actioned","Change sustained"],color:"bg-green-50",darkColor:"bg-green-950/45",textColor:"text-green-700",darkTextColor:"text-green-100",borderColor:"border-green-300",darkBorderColor:"border-green-700"}],Li=[{title:"Handling Resistance",body:"Helping project managers navigate potential roadblocks and maintain project momentum through identifying and addressing resistance using effective communication, stakeholder engagement, and mitigation strategies."},{title:"Engaging Stakeholders",body:"Identifying key individuals and groups affected by the project and working closely with them to understand concerns, gather feedback, and ensure their perspectives are considered."},{title:"Communicating and Raising Awareness",body:"Developing engagement and communication plans that support project managers in creating clear and consistent messaging about the project's purpose, goals, and benefits."},{title:"Managing Expectations",body:"Setting realistic expectations for stakeholders regarding project outcomes, timelines, and potential disruptions by addressing concerns, clarifying misconceptions, and managing expectations."},{title:"Ensuring Change Readiness",body:"Assessing the readiness of an organisation or team for change and developing strategies to bridge any gaps."},{title:"Mitigating Risks",body:"Through anticipating and addressing risks associated with change, such as resistance, lack of stakeholder support, or unexpected obstacles."},{title:"Adopting Change Sustainably",body:"Supporting project managers in developing strategies to embed the changes into the organisation's culture, processes, and systems."}];function Bn({title:n,description:t,isOpen:s,onToggle:a,children:r,darkMode:o=!1}){return e.jsxs("section",{className:`mb-4 overflow-hidden rounded-lg border ${o?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("button",{type:"button",onClick:a,"aria-expanded":s,className:`flex w-full items-center justify-between gap-4 p-4 text-left transition-colors ${o?"bg-slate-900 hover:bg-slate-800":"bg-white hover:bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:n}),t?e.jsx("p",{className:`mt-0.5 text-sm ${o?"text-slate-300":"text-slate-500"}`,children:t}):null]}),e.jsx("span",{className:`shrink-0 text-xl font-bold transition-transform ${o?"text-slate-500":"text-slate-400"} ${s?"rotate-45":""}`,children:"+"})]}),s?e.jsx("div",{className:`border-t p-5 pt-4 ${o?"border-slate-700 bg-slate-900":"border-slate-100 bg-white"}`,children:r}):null]})}function Bi({onComponentClick:n,components:t,store:s,getEntry:a,guidanceTarget:r="Default",linkOverrides:o,darkMode:l=!1}){const[h,i]=g.useState("questions"),[x,N]=g.useState(null),k=m=>{i(O=>O===m?null:m)},p=t.reduce((m,O)=>(m[O.phase]=m[O.phase]||[],m[O.phase].push(O),m),{}),c=m=>{N(O=>O===m?null:m)};return e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsx("h2",{className:`mb-2 text-2xl font-bold ${l?"text-slate-100":"text-slate-800"}`,children:"Change Management Toolkit"}),e.jsx("p",{className:`mb-8 text-sm ${l?"text-slate-300":"text-slate-500"}`,children:"NHS England Programme Delivery Lifecycle - an introduction to the five change phases and the role of the Change Manager."}),e.jsxs("div",{className:"bg-[#005eb8] text-white rounded-lg p-6 mb-8 flex flex-col sm:flex-row sm:items-center gap-4",children:[e.jsx("div",{className:"flex-shrink-0 w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold",children:"!"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-blue-100 uppercase tracking-wide mb-1",children:"When is the best time to start thinking about Change Management?"}),e.jsx("p",{className:"text-2xl font-bold",children:"Answer: Now!"}),e.jsx("p",{className:"text-sm text-blue-100 mt-1",children:"Change management should be considered from the very start of any project - not as an afterthought at go-live."})]})]}),e.jsx(Bn,{title:"The 6 Key Questions",description:"Six questions worth returning to throughout the life of the programme, each backed by a change model and linked to where you can act on it.",isOpen:h==="questions",onToggle:()=>k("questions"),darkMode:l,children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:Ti.map((m,O)=>{const _=qn(r,m.componentIds[0],"inputs",o).slice(0,2);return e.jsxs("div",{className:`rounded-md border p-4 ${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsxs("span",{className:"shrink-0 w-7 h-7 rounded-full bg-blue-100 text-[#005eb8] text-xs font-bold flex items-center justify-center",children:["Q",O+1]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:m.question}),e.jsx("span",{className:`mt-1 inline-block rounded border px-2 py-0.5 text-xs font-medium ${l?"border-indigo-500/40 bg-indigo-500/15 text-indigo-200":"border-indigo-200 bg-indigo-50 text-indigo-700"}`,children:m.framework})]})]}),e.jsx("p",{className:`mt-3 text-xs leading-relaxed ${l?"text-slate-300":"text-slate-600"}`,children:m.description}),_.length?e.jsx("div",{className:"mt-3 flex flex-wrap gap-x-3 gap-y-1",children:_.map(b=>e.jsx("a",{href:b.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-medium text-[#005eb8] underline",children:b.label},`${m.id}-${b.url}`))}):null,e.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:m.componentIds.map(b=>{const S=dt(b);return S?e.jsxs("button",{type:"button",onClick:()=>n(b),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold transition-colors ${l?"border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25":"border-blue-200 bg-blue-50 text-[#005eb8] hover:bg-blue-100"}`,children:["Go to ",S.label]},b):null})})]},m.id)})})}),e.jsxs(Bn,{title:"The Five Change Phases",description:"Select a phase to see the key deliverables expected at that stage.",isOpen:h==="phases",onToggle:()=>k("phases"),darkMode:l,children:[e.jsx("div",{className:`mb-6 hidden grid-cols-5 gap-1 overflow-hidden rounded-lg border text-center text-xs font-semibold md:grid ${l?"border-slate-700":"border-slate-200"}`,children:Wt.map(m=>e.jsxs("button",{onClick:()=>c(m.phase),className:`py-2 px-1 transition-colors ${x===m.phase?`${m.color} ${m.textColor} ring-2 ring-inset ring-current`:l?"bg-slate-800 text-slate-300 hover:bg-slate-700":"bg-slate-100 text-slate-500 hover:bg-slate-200"}`,children:["Phase ",m.phase]},m.phase))}),e.jsx("div",{className:"space-y-3",children:Wt.map(m=>{const O=x===m.phase;return e.jsxs("div",{className:`rounded-lg border overflow-hidden transition-shadow ${l?m.darkBorderColor:m.borderColor} ${O?"shadow-md":""}`,children:[e.jsxs("button",{onClick:()=>c(m.phase),className:`w-full flex items-center justify-between p-4 text-left transition-colors ${l?m.darkColor:m.color}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 border ${l?`${m.darkTextColor} bg-slate-900 ${m.darkBorderColor}`:`${m.textColor} bg-white ${m.borderColor}`}`,children:m.phase}),e.jsxs("div",{children:[e.jsx("p",{className:`font-semibold text-sm ${l?m.darkTextColor:m.textColor}`,children:m.label}),e.jsxs("p",{className:`text-xs ${l?"text-slate-300":"text-slate-500"}`,children:[e.jsxs("span",{className:"italic",children:['"',m.tagline,'"']})," · ",m.programmeStage]})]})]}),e.jsx("span",{className:`text-lg font-bold transition-transform ${l?m.darkTextColor:m.textColor} ${O?"rotate-45":""}`,children:"+"})]}),O&&e.jsxs("div",{className:`border-t px-5 pb-5 pt-3 ${l?"border-slate-700 bg-slate-900":"border-slate-100 bg-white"}`,children:[e.jsx("p",{className:`mb-3 text-xs font-semibold uppercase tracking-wide ${l?"text-slate-300":"text-slate-500"}`,children:"Key deliverables"}),e.jsx("ul",{className:"space-y-2",children:m.deliverables.map((_,b)=>e.jsxs("li",{className:`flex items-start gap-2 text-sm ${l?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{className:`mt-0.5 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${l?`${m.darkColor} ${m.darkTextColor}`:`${m.color} ${m.textColor}`}`,children:b+1}),_]},b))})]})]},m.phase)})})]}),e.jsx(Bn,{title:"The Role of the Change Manager",description:"Change management (and change managers) provide essential assistance to project managers through:",isOpen:h==="role",onToggle:()=>k("role"),darkMode:l,children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:Li.map(m=>e.jsxs("div",{className:`rounded-md border p-4 ${l?"border-slate-700 bg-slate-800":"border-slate-100 bg-slate-50"}`,children:[e.jsx("p",{className:"text-sm font-semibold text-[#005eb8] mb-1",children:m.title}),e.jsx("p",{className:`text-xs leading-relaxed ${l?"text-slate-300":"text-slate-600"}`,children:m.body})]},m.title))})}),e.jsx(Bn,{title:"Programme Hierarchy",description:`Your programme has ${t.length} components, each viewed through one or more lenses. A component is a change topic you assess and track; a lens is the perspective used to assess it (e.g. leadership, risk, capability). Click a component to jump to its assessment.`,isOpen:h==="hierarchy",onToggle:()=>k("hierarchy"),darkMode:l,children:e.jsx("div",{className:"space-y-5",children:vs.filter(m=>{var O;return(O=p[m])==null?void 0:O.length}).map(m=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-700"}`,children:["Phase ",m]}),e.jsx("div",{className:"space-y-2",children:p[m].map(O=>{const _=O.lenses.reduce((S,V)=>{const C=a(O.id,V);return{total:S.total+C.actions.length,completed:S.completed+C.actions.filter(F=>F.status==="Completed").length}},{total:0,completed:0}),b=Fa(s,O.id,a);return e.jsxs("button",{type:"button","data-testid":`cst-component-button-${O.id}`,onClick:()=>n(O.id),className:`w-full text-left rounded-md border p-3 transition-colors ${l?"border-slate-700 bg-slate-900 hover:border-blue-400 hover:bg-slate-800":"border-slate-200 hover:border-blue-300 hover:bg-blue-50/40"}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("span",{className:`font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:O.label}),e.jsxs("span",{className:`text-xs ${l?"text-slate-300":"text-slate-500"}`,children:["Target ",O.target]})]}),e.jsx("div",{className:"mt-2 flex flex-wrap gap-1.5",children:O.lenses.map(S=>{const V=a(O.id,S);return e.jsxs("span",{className:`text-xs px-2 py-1 rounded-full border ${V.score>=O.target?l?"border-green-500/40 bg-green-500/15 text-green-200":"bg-green-50 border-green-200 text-green-800":V.score>0?l?"border-amber-500/40 bg-amber-500/15 text-amber-200":"bg-amber-50 border-amber-200 text-amber-800":l?"border-slate-600 bg-slate-800 text-slate-300":"bg-slate-100 border-slate-200 text-slate-600"}`,children:[S,": ",V.score,"/",O.target]},S)})}),e.jsxs("p",{className:`mt-2 text-xs ${l?"text-slate-300":"text-slate-500"}`,children:["Lens actions: ",_.completed,"/",_.total," complete · Outcomes: ",b.completed,"/",b.total," complete"]})]},O.id)})})]},`phase-group-${m}`))})}),e.jsxs("div",{className:`flex flex-col gap-4 rounded-lg border p-5 sm:flex-row sm:items-center ${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:`mb-1 text-sm font-semibold ${l?"text-slate-100":"text-slate-700"}`,children:"Explore the full Toolkit"}),e.jsx("p",{className:`text-xs ${l?"text-slate-300":"text-slate-500"}`,children:"Access templates, frameworks, and guidance materials on the NHS Change Management Network workspace."})]}),e.jsx("a",{href:"https://future.nhs.uk/CMN/view?objectId=129489733",target:"_blank",rel:"noopener noreferrer",className:"shrink-0 inline-flex items-center gap-2 rounded-md bg-[#005eb8] text-white text-sm font-medium px-4 py-2 hover:bg-blue-700 transition-colors",children:"Change Management Toolkit ↗"})]})]})}const Nt="focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",Ct=`inline-flex items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] transition-colors ${Nt}`,sn=`inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#212b32] border border-[#768692] shadow-[0_3px_0_#d8dde0] hover:bg-[#f0f4f5] transition-colors ${Nt}`,Et=Nt;function Fi(n){if(!n)return!1;const t=new Date(n);return!isNaN(t.getTime())}function ot(n){return!n||!Fi(n)?null:new Date(n)}function _s(n){const t=[],s=n.cst;if(!s.goLiveDate||!s.goLiveDate.trim())return t.push({field:"cst.goLiveDate",message:"Go live date is required."}),{isValid:!1,errors:t};const a=ot(s.goLiveDate);if(!a)return t.push({field:"cst.goLiveDate",message:"Go live date must be a valid date."}),{isValid:!1,errors:t};const r=ot(s.fullAdoptionDate);s.fullAdoptionDate&&!r&&t.push({field:"cst.fullAdoptionDate",message:"Full adoption date must be a valid date when provided."});const o=ot(s.benefitRealizationDate);return s.benefitRealizationDate&&!o&&t.push({field:"cst.benefitRealizationDate",message:"Benefit realization date must be a valid date when provided."}),r&&r<a&&t.push({field:"cst.fullAdoptionDate",message:"Full adoption date cannot be earlier than go live date."}),o&&o<(r||a)&&t.push({field:"cst.benefitRealizationDate",message:"Benefit realization date cannot be earlier than full adoption date (or go live when full adoption is empty)."}),{isValid:t.length===0,errors:t}}function Mi(n){const t=[];(!n.trustName||n.trustName.trim()==="")&&t.push({field:"trustName",message:"Trust name is required"}),n.trustName&&n.trustName.length>255&&t.push({field:"trustName",message:"Trust name cannot exceed 255 characters"}),n.region&&n.region.length>100&&t.push({field:"region",message:"Region cannot exceed 100 characters"});const s=_s(n);return t.push(...s.errors),{isValid:t.length===0,errors:t}}const qt={1:"Pre go-live planning and early mobilisation.",2:"Go-live readiness and immediate launch support.",3:"Early adoption reinforcement and consistency.",4:"Embedding new ways of working across teams.",5:"Sustained adoption and benefits realisation at scale."},Ui={1:"Low confidence",2:"Some confidence",3:"Moderate confidence",4:"High confidence",5:"Very high confidence"},Gi={A:"Well embedded in practice",B:"Mostly embedded in practice",C:"Partly embedded in practice",D:"Early adoption in practice",E:"Not yet embedded in practice"};function Vi(n){return n>=4?"high":n===3?"average":"below"}function Hi(n){return n==="A"||n==="B"?"high":n==="C"?"average":"below"}function Wi(n,t){const s=Hi(n),a=Vi(t),r=s==="high"&&a==="high",o=s==="below"&&a==="below",l=s==="high"&&a!=="below"||a==="high"&&s!=="below";return r?"Blue":o?"Red":l?"Green":"Amber"}function qi({orgProfile:n,onProfileUpdate:t,components:s,onComponentClick:a,onOpenOnboarding:r,darkMode:o=!1,currentUserId:l,onCurrentUserChange:h}){var J,xe,Ee,A,se,Q;const[i,x]=g.useState(n),[N,k]=g.useState(null),p=Mi(i),c=g.useMemo(()=>p.errors.reduce((w,R)=>(w[R.field]||(w[R.field]=[]),w[R.field].push(R.message),w),{}),[p.errors]),m=g.useCallback(w=>{var R;return(R=c[w])==null?void 0:R[0]},[c]),O=!!(i.trustName.trim()&&(i.projectName||"").trim()&&(i.leadName||"").trim()&&i.cst.goLiveDate.trim());g.useEffect(()=>{x(n)},[n]);const _=g.useCallback(w=>{const R={...i,trustName:w};x(R),t(R)},[i,t]),b=g.useCallback(w=>{const R={...i,projectName:w};x(R),t(R)},[i,t]),S=g.useCallback(w=>{const R={...i,leadName:w};x(R),t(R)},[i,t]),V=g.useCallback(w=>{const R={...i,cst:{...i.cst,type:w}};x(R),t(R)},[i,t]),C=g.useCallback(w=>{const R={...i,cst:{...i.cst,pathway:w}};x(R),t(R)},[i,t]),F=g.useCallback((w,R)=>{const X={...i,cst:{...i.cst,[w]:R}};x(X),t(X)},[i,t]),L=g.useCallback(w=>{const R={...i,cst:{...i.cst,toolkitChoice:w}};x(R),t(R)},[i,t]),ce=g.useCallback((w,R,X)=>{const Z=i.cst.phaseCapability[w]||{competence:"C",confidence:3},Ie={...i,cst:{...i.cst,phaseCapability:{...i.cst.phaseCapability,[w]:{competence:Z.competence,confidence:Z.confidence,assessedAt:new Date().toISOString(),reason:"manual",[R]:X}}}};x(Ie),t(Ie)},[i,t]),z=g.useCallback(w=>{const R={...i,linkOverrides:w};x(R),t(R)},[i,t]),te=g.useCallback((w,R)=>{const X={...i.componentFurtherReading};R.trim()?X[w]=R.trim():delete X[w];const Z={...i,componentFurtherReading:X};x(Z),t(Z)},[i,t]),de=g.useCallback(()=>{const w={id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:"",role:""},R={...i,teamMembers:[...i.teamMembers||[],w]};x(R),t(R)},[i,t]),ne=g.useCallback((w,R,X)=>{const Z={...i,teamMembers:(i.teamMembers||[]).map(Ie=>Ie.id===w?{...Ie,[R]:X}:Ie)};x(Z),t(Z)},[i,t]),T=g.useCallback(w=>{const R={...i,teamMembers:(i.teamMembers||[]).filter(X=>X.id!==w)};x(R),t(R),l===w&&h("")},[i,t,l,h]);return e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-800"}`,children:"CST Personalisation"}),e.jsx("button",{type:"button",onClick:r,className:sn,"data-testid":"cst-show-intro-button",children:"Show introduction again"})]}),e.jsx("p",{className:`text-sm -mt-4 ${o?"text-slate-300":"text-slate-600"}`,children:"This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways it follows, and how it's tracking against its readiness phases."}),e.jsxs("div",{className:`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${o?"border-emerald-500/40 bg-emerald-500/15 text-emerald-200":"border-emerald-200 bg-emerald-50 text-emerald-800"}`,children:[e.jsx("span",{className:"inline-block h-2 w-2 rounded-full bg-emerald-500","aria-hidden":"true"}),"Auto-save is on for CST Personalisation."]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Organisation profile"}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Step 1: Basic details."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-trust-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Organisation Name"}),e.jsx("input",{id:"org-trust-name",type:"text","data-testid":"cst-trust-name-input",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:i.trustName,onChange:w=>_(w.target.value),"aria-invalid":!!m("trustName"),"aria-describedby":m("trustName")?"org-trust-name-error":void 0}),m("trustName")?e.jsx("p",{id:"org-trust-name-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:m("trustName")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-project-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Programme / Project Name"}),e.jsx("input",{id:"org-project-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:i.projectName||"",onChange:w=>b(w.target.value)})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-lead-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Lead Submitter (Change Lead)"}),e.jsx("input",{id:"org-lead-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:i.leadName||"",onChange:w=>S(w.target.value)})]}),O?e.jsxs("div",{className:`rounded-md border p-4 ${o?"border-green-500/40 bg-green-500/10":"border-green-200 bg-green-50"}`,children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-green-200":"text-green-900"}`,children:"Stage 1 complete: Project details captured."}),e.jsx("p",{className:`mt-1 text-xs ${o?"text-green-100":"text-green-800"}`,children:"Your details are saved. Continue to assign delivery actions against component lenses."}),e.jsx("button",{type:"button",onClick:()=>{s[0]&&a(s[0].id)},className:"mt-3 rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Continue to assigning actions"})]}):e.jsx("div",{className:`rounded-md border p-3 text-xs ${o?"border-amber-500/40 bg-amber-500/10 text-amber-100":"border-amber-200 bg-amber-50 text-amber-900"}`,children:"Stage 1 in progress: add organisation name, programme name, lead name, and go-live date to complete this step."}),e.jsxs("details",{className:`${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,open:!0,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 2: Pathway and timeline (Context Specific Template)"}),e.jsx("p",{className:`mt-2 text-xs ${o?"text-slate-300":"text-slate-600"}`,children:"Choose the full pathway title for your programme, then set key timeline dates."}),e.jsxs("div",{className:"mt-3 grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-type",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"CST Type"}),e.jsx("select",{id:"cst-type",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:i.cst.type,onChange:w=>V(w.target.value),children:va.map(w=>e.jsx("option",{value:w.value,children:w.label},w.value))})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-pathway",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Pathway"}),e.jsx("select",{id:"cst-pathway",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:i.cst.pathway,onChange:w=>C(w.target.value),"aria-invalid":!!m("cst.pathway"),"aria-describedby":m("cst.pathway")?"cst-pathway-error":void 0,children:ya.map(w=>e.jsx("option",{value:w.value,children:w.label},w.value))}),m("cst.pathway")?e.jsx("p",{id:"cst-pathway-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:m("cst.pathway")}):null]})]}),e.jsxs("div",{className:"mt-3 grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-go-live",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Go Live Date (required)"}),e.jsx("input",{id:"cst-go-live",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:i.cst.goLiveDate,onChange:w=>F("goLiveDate",w.target.value),"aria-invalid":!!m("cst.goLiveDate"),"aria-describedby":m("cst.goLiveDate")?"cst-go-live-error":void 0}),m("cst.goLiveDate")?e.jsx("p",{id:"cst-go-live-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:m("cst.goLiveDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-full-adoption",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Full Adoption Date (optional)"}),e.jsx("input",{id:"cst-full-adoption",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:i.cst.fullAdoptionDate,onChange:w=>F("fullAdoptionDate",w.target.value),"aria-invalid":!!m("cst.fullAdoptionDate"),"aria-describedby":m("cst.fullAdoptionDate")?"cst-full-adoption-error":void 0}),m("cst.fullAdoptionDate")?e.jsx("p",{id:"cst-full-adoption-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:m("cst.fullAdoptionDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-benefit",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Benefit Realisation Date (optional)"}),e.jsx("input",{id:"cst-benefit",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:i.cst.benefitRealizationDate,onChange:w=>F("benefitRealizationDate",w.target.value),"aria-invalid":!!m("cst.benefitRealizationDate"),"aria-describedby":m("cst.benefitRealizationDate")?"cst-benefit-error":void 0}),m("cst.benefitRealizationDate")?e.jsx("p",{id:"cst-benefit-error",className:`mt-1 text-xs ${o?"text-amber-300":"text-red-700"}`,children:m("cst.benefitRealizationDate")}):null]})]}),p.errors.filter(w=>w.field.startsWith("cst.")).length>0?e.jsxs("div",{className:`mt-4 rounded-md border p-3 ${o?"border-amber-500/40 bg-amber-500/10":"border-amber-300 bg-amber-50"}`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-amber-200":"text-amber-800"}`,children:"CST validation warnings"}),e.jsx("ul",{className:`mt-2 space-y-1 text-sm ${o?"text-amber-100":"text-amber-900"}`,children:p.errors.filter(w=>w.field.startsWith("cst.")).map(w=>e.jsxs("li",{children:["- ",w.message]},w.field+w.message))})]}):null]}),e.jsxs("details",{className:`${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 3: Confidence and capability by phase"}),e.jsx("div",{className:"mt-2 flex flex-wrap items-center justify-between gap-2",children:e.jsx("p",{className:`text-xs ${o?"text-slate-300":"text-slate-600"}`,children:"Capture your starting position, then refresh when readiness phase changes or after major milestones."})}),e.jsxs("div",{className:"mt-3 rounded-md border border-blue-200 bg-blue-50 p-3 text-xs text-blue-900",children:[e.jsx("p",{className:"font-semibold",children:"How this self-assessment works"}),e.jsx("p",{className:"mt-1",children:"Confidence is how sure your team feels. Delivery readiness is how embedded the new way of working is in practice."}),e.jsx("p",{className:"mt-1",children:"Cards now use BRAG backgrounds: Blue = both high, Green = one high and the other at least average, Amber = neither high, Red = both below average."})]}),e.jsx("div",{className:"mt-3 space-y-3",children:vs.map(w=>{const R=i.cst.phaseCapability[w]||{competence:"C",confidence:3},X=Wi(R.competence,R.confidence),Z=X==="Blue"?"border-sky-300 bg-sky-50":X==="Green"?"border-emerald-300 bg-emerald-50":X==="Red"?"border-red-300 bg-red-50":"border-amber-300 bg-amber-50",Ie=X==="Blue"?"text-sky-800 bg-sky-100":X==="Green"?"text-emerald-800 bg-emerald-100":X==="Red"?"text-red-800 bg-red-100":"text-amber-800 bg-amber-100";return e.jsxs("div",{className:`${o?"border-slate-700 bg-slate-800":Z} rounded-md border p-3`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{className:"relative flex items-center gap-2",children:[e.jsxs("span",{className:`font-semibold ${o?"text-slate-100":"text-slate-700"}`,children:["Phase ",w]}),e.jsx("button",{type:"button",onMouseEnter:()=>k(w),onMouseLeave:()=>k(ee=>ee===w?null:ee),onFocus:()=>k(w),onBlur:()=>k(ee=>ee===w?null:ee),onClick:()=>k(ee=>ee===w?null:w),className:"h-5 w-5 rounded-full border border-slate-300 text-xs font-semibold text-slate-600","aria-expanded":N===w,"aria-controls":`phase-help-${w}`,"aria-label":`Phase ${w} guidance`,children:"i"}),N===w?e.jsx("div",{id:`phase-help-${w}`,role:"tooltip",className:"absolute left-0 top-7 z-10 w-72 rounded-md border border-slate-200 bg-slate-900 px-3 py-2 text-xs text-white shadow-xl",children:qt[w]}):null]}),e.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-slate-700 text-slate-100":Ie}`,children:X})]}),e.jsx("p",{className:`mt-1 text-xs ${o?"text-slate-300":"text-slate-600"}`,children:qt[w]}),e.jsxs("div",{className:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm",children:[e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:"Delivery readiness"}),e.jsx("select",{value:R.competence,onChange:ee=>ce(w,"competence",ee.target.value),className:`w-full rounded-md border px-2 py-2 pr-10 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Mn.map(ee=>e.jsxs("option",{value:ee,children:[Gi[ee]," (",ee,")"]},`${w}-competence-${ee}`))})]}),e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:"Confidence"}),e.jsx("select",{value:R.confidence,onChange:ee=>ce(w,"confidence",Number(ee.target.value)),className:`w-full rounded-md border px-2 py-2 pr-10 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Un.map(ee=>e.jsxs("option",{value:ee,children:[Ui[ee]," (",ee,")"]},`${w}-confidence-${ee}`))})]})]})]},`phase-capability-${w}`)})})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Team Members"}),e.jsx("p",{className:`text-sm mt-1 ${o?"text-slate-300":"text-slate-600"}`,children:"Add the people working on this programme so actions and readiness slides can be assigned to a named owner. This roster is saved with the CST; who you're signed in as is remembered on this device only."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-current-user",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"You are signed in as"}),e.jsxs("select",{id:"cst-current-user",value:l||"",onChange:w=>h(w.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 md:w-1/2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Not selected"}),(i.teamMembers||[]).map(w=>e.jsxs("option",{value:w.id,children:[w.name||"Unnamed",w.role?` - ${w.role}`:""]},w.id))]})]}),e.jsxs("div",{className:"space-y-2",children:[(i.teamMembers||[]).map(w=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2 items-center",children:[e.jsx("input",{value:w.name,onChange:R=>ne(w.id,"name",R.target.value),placeholder:"Name",className:`rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("input",{value:w.role,onChange:R=>ne(w.id,"role",R.target.value),placeholder:"Role (e.g. Change Lead)",className:`rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("button",{type:"button",onClick:()=>T(w.id),className:"shrink-0 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},w.id)),(i.teamMembers||[]).length?null:e.jsx("p",{className:`text-sm ${o?"text-slate-400":"text-slate-500"}`,children:"No team members added yet."})]}),e.jsx("button",{type:"button",onClick:de,className:sn,children:"+ Add Team Member"})]}),e.jsx("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:e.jsxs("details",{children:[e.jsx("summary",{className:`cursor-pointer text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Step 4: External links"}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"All toolkit links across the tool point to the NHS Future platform by default. You can override the base toolkit destination for your organisation, or change individual links independently."}),e.jsxs("div",{className:`mt-3 rounded-md border p-3 text-xs ${o?"border-blue-500/30 bg-blue-500/10 text-blue-100":"border-blue-200 bg-blue-50 text-blue-900"}`,children:[e.jsx("p",{className:"font-semibold",children:"Fallback reference"}),e.jsxs("p",{className:"mt-1",children:["Base fallback: ",e.jsx("span",{className:"font-medium",children:Tn.label})," (",Tn.url,")"]}),e.jsx("p",{className:"mt-1",children:"Default fallback: the original NHS Future link defined per guidance item."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("label",{htmlFor:"cst-toolkit-choice",className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Default toolkit for assistant preview"}),e.jsx("select",{id:"cst-toolkit-choice",value:i.cst.toolkitChoice,onChange:w=>L(w.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:wa.map(w=>e.jsx("option",{value:w.key,children:w.label},w.key))}),e.jsx("p",{className:`mt-2 text-xs ${o?"text-slate-300":"text-slate-500"}`,children:"This controls which toolkit the chatbot-style assistant opens by default across the tool."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Base override"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:"Replaces the Change Management Toolkit destination for all links that fall back to it."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Toolkit name"}),e.jsx("input",{type:"text",placeholder:Tn.label,value:((xe=(J=i.linkOverrides)==null?void 0:J.base)==null?void 0:xe.label)??"",onChange:w=>{var R;return z({...i.linkOverrides,base:{...(R=i.linkOverrides)==null?void 0:R.base,label:w.target.value||void 0}})},className:`w-full rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Toolkit URL"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:Tn.url,value:((A=(Ee=i.linkOverrides)==null?void 0:Ee.base)==null?void 0:A.url)??"",onChange:w=>{var R;return z({...i.linkOverrides,base:{...(R=i.linkOverrides)==null?void 0:R.base,url:w.target.value||void 0}})},className:`flex-1 min-w-0 rounded-md border shadow-sm sm:text-sm p-2 ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),((Q=(se=i.linkOverrides)==null?void 0:se.base)==null?void 0:Q.url)&&e.jsx("button",{type:"button",onClick:()=>{var w;return z({...i.linkOverrides,base:{...(w=i.linkOverrides)==null?void 0:w.base,url:void 0}})},className:`shrink-0 rounded-md border px-3 py-2 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Reset"})]})]})]})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Component Further Reading"}),e.jsx("p",{className:`text-xs mt-0.5 ${o?"text-slate-300":"text-slate-500"}`,children:`Add a link for each component's "Further Reading" button on its overview panel. Leave blank to hide the button for that component.`})]}),e.jsx("div",{className:"space-y-2",children:s.map(w=>{var R,X;return e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-2 items-center",children:[e.jsx("span",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-700"}`,children:w.label}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:"https://...",value:((R=i.componentFurtherReading)==null?void 0:R[w.id])??"",onChange:Z=>te(w.id,Z.target.value),className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),((X=i.componentFurtherReading)==null?void 0:X[w.id])&&e.jsx("button",{type:"button",onClick:()=>te(w.id,""),className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Clear"})]})]},w.id)})})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsx("p",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Per-link overrides"}),e.jsxs("p",{className:`text-xs ${o?"text-slate-300":"text-slate-500"}`,children:["Leave a URL blank to use the fallback. Set fallback to ",e.jsx("strong",{children:"Base"})," to use your base override above, or ",e.jsx("strong",{children:"Default"})," to keep the original NHS Future link."]}),Object.entries(fn).map(([w,R])=>{const Z=[...R.inputs??[],...R.deliverables??[]].filter(Ie=>{var ee,Se,he,fe;return(fe=(he=(Se=(ee=i.linkOverrides)==null?void 0:ee.links)==null?void 0:Se[Ie.key])==null?void 0:he.url)==null?void 0:fe.trim()}).length;return e.jsxs("details",{className:`rounded-md border ${o?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer items-center justify-between gap-2 p-3 text-sm font-medium ${o?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{children:w}),Z>0&&e.jsxs("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${o?"bg-blue-500/20 text-blue-300":"bg-blue-100 text-blue-700"}`,children:[Z," override",Z!==1?"s":""]})]}),e.jsx("div",{className:`divide-y ${o?"divide-slate-700":"divide-slate-100"}`,children:["inputs","deliverables"].map(Ie=>{const ee=R[Ie]??[];return ee.length?e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${o?"text-slate-400":"text-slate-500"}`,children:Ie}),ee.map(Se=>{var fe,f;const he=((f=(fe=i.linkOverrides)==null?void 0:fe.links)==null?void 0:f[Se.key])??{fallback:"base"};return e.jsxs("div",{className:"grid grid-cols-1 gap-1.5",children:[e.jsx("span",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-700"}`,children:Se.label}),e.jsx("p",{className:`text-xs truncate ${o?"text-slate-500":"text-slate-400"}`,children:Se.url}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:"Override URL (leave blank to use fallback)",value:he.url??"",onChange:j=>{var D;const E=j.target.value||void 0;z({...i.linkOverrides,links:{...(D=i.linkOverrides)==null?void 0:D.links,[Se.key]:{...he,url:E}}})},className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),!he.url&&e.jsxs("select",{value:he.fallback??"base",onChange:j=>{var E;return z({...i.linkOverrides,links:{...(E=i.linkOverrides)==null?void 0:E.links,[Se.key]:{...he,fallback:j.target.value}}})},className:`rounded border px-2 py-1.5 text-xs ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"base",children:"Fallback: Base"}),e.jsx("option",{value:"default",children:"Fallback: Default"})]}),he.url&&e.jsx("button",{type:"button",onClick:()=>{var E;const j={...(E=i.linkOverrides)==null?void 0:E.links};delete j[Se.key],z({...i.linkOverrides,links:j})},className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${o?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Clear"})]})]},Se.key)})]},Ie):null})})]},w)})]})]})})]})}const rt=[1,2,3,4,5];function Yi(n,t){const s=n.lenses.reduce((a,r)=>a+Number(t(n.id,r).score||0),0);return n.lenses.length?Number((s/n.lenses.length).toFixed(1)):0}function Ki(n,t,s,a,r,o){if(n.phase>s)return{label:"Not in current phase yet",rowClass:o?"border-slate-600 bg-slate-800/80":"border-slate-200 bg-slate-50",chipClass:o?"bg-slate-700 text-slate-100":"bg-slate-200 text-slate-700",barClass:"bg-slate-400"};const l=yt(n.id,a),h=qa({averageScore:t,targetScore:n.target,checkedItemKeys:r,rule:l});return h.status==="off-track"?{label:`Off track (${h.completionPct}% checklist)`,rowClass:o?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:o?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:h.status==="attention"?{label:`Needs attention (${h.completionPct}% checklist)`,rowClass:o?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:o?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:t>=n.target?{label:`On track (${h.completionPct}% checklist)`,rowClass:o?"border-green-700 bg-green-950/45":"border-green-200 bg-green-50",chipClass:o?"bg-green-900 text-green-100":"bg-green-100 text-green-700",barClass:"bg-green-500"}:n.phase<s?{label:"Behind timeline",rowClass:o?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:o?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:n.phase===s?{label:"Due this phase",rowClass:o?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:o?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:{label:"In progress",rowClass:o?"border-blue-700 bg-blue-950/45":"border-blue-200 bg-blue-50",chipClass:o?"bg-blue-900 text-blue-100":"bg-blue-100 text-blue-700",barClass:"bg-blue-500"}}function zi({components:n,metrics:t,getEntry:s,onComponentClick:a,pathway:r,pathwayChecks:o,darkMode:l=!1}){const h=n.map(i=>{var k;const x=Yi(i,s),N=((k=o[i.id])==null?void 0:k[r])||[];return{component:i,average:x,status:Ki(i,x,t.currentPhase,r,N,l)}});return e.jsxs("section",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:`${l?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-2xl border p-6 shadow-sm`,children:[e.jsx("p",{className:`text-sm font-semibold uppercase tracking-[0.18em] ${l?"text-slate-300":"text-slate-500"}`,children:"Roadmap View"}),e.jsx("h2",{className:`mt-2 text-2xl font-bold ${l?"text-slate-100":"text-slate-900"}`,children:"Component delivery timeline"}),e.jsx("p",{className:`mt-2 text-sm ${l?"text-slate-300":"text-slate-600"}`,children:"This gantt-style view shows when each component should be completed by phase. Components are coloured by whether they are on track against the current phase. Select a row to jump into the matching assessment tab."})]}),e.jsx("div",{className:"lg:hidden space-y-3",children:h.map(({component:i,average:x,status:N})=>e.jsxs("button",{type:"button",onClick:()=>a(i.id),className:`w-full rounded-xl border p-4 text-left transition-colors ${l?"hover:border-slate-500":"hover:border-slate-300"} ${N.rowClass}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:i.label}),e.jsxs("div",{className:`mt-1 text-xs ${l?"text-slate-300":"text-slate-500"}`,children:["Target ",i.target," · completes by Phase ",i.phase]})]}),e.jsx("span",{className:`rounded-full px-2.5 py-1 text-xs font-semibold ${N.chipClass}`,children:N.label})]}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("div",{className:`mb-1 flex items-center justify-between text-xs ${l?"text-slate-300":"text-slate-600"}`,children:[e.jsx("span",{children:"Timeline"}),e.jsxs("span",{children:["Average ",x]})]}),e.jsx("div",{className:"grid grid-cols-5 gap-1",children:rt.map(k=>{const p=k<=i.phase,c=k===i.phase;return e.jsxs("div",{children:[e.jsx("div",{className:`h-2 rounded-full ${l?"bg-slate-700/70":"bg-white/80"}`,children:p?e.jsx("div",{className:`h-full rounded-full ${N.barClass} ${c?"opacity-100":"opacity-35"}`,title:c?"Expected completion phase":"Planned timeline"}):null}),e.jsxs("div",{className:`mt-1 text-center text-[10px] ${l?"text-slate-400":"text-slate-500"}`,children:["P",k]})]},`${i.id}-mobile-${k}`)})})]})]},`mobile-${i.id}`))}),e.jsx("div",{className:`${l?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} hidden lg:block rounded-2xl border p-5 shadow-sm overflow-x-auto`,children:e.jsxs("div",{className:"min-w-[860px]",children:[e.jsxs("div",{className:`grid grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 border-b pb-3 text-xs font-semibold uppercase tracking-wider ${l?"border-slate-700 text-slate-400":"border-slate-200 text-slate-500"}`,children:[e.jsx("div",{children:"Component"}),rt.map(i=>e.jsxs("div",{className:"text-center",children:["Phase ",i]},i)),e.jsx("div",{className:"text-center",children:"Average"}),e.jsx("div",{className:"text-center",children:"Status"})]}),e.jsx("div",{className:"mt-4 space-y-3",children:h.map(({component:i,average:x,status:N})=>e.jsxs("button",{type:"button",onClick:()=>a(i.id),className:`grid w-full grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 rounded-xl border p-2.5 text-left transition-colors ${l?"hover:border-slate-500":"hover:border-slate-300"} ${N.rowClass}`,children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:i.label}),e.jsxs("div",{className:`mt-1 text-xs ${l?"text-slate-300":"text-slate-500"}`,children:["Target score ",i.target," · completes by Phase ",i.phase]})]}),rt.map(k=>{const p=k<=i.phase,c=k===i.phase;return e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:`h-7 w-full rounded-full px-1 py-1 ${l?"bg-slate-700/70":"bg-white/70"}`,children:p?e.jsx("div",{className:`h-full rounded-full ${N.barClass} ${c?"opacity-100":"opacity-35"}`,title:c?"Expected completion phase":"Planned timeline"}):null})},`${i.id}-${k}`)}),e.jsx("div",{className:`flex items-center justify-center text-sm font-semibold ${l?"text-slate-100":"text-slate-700"}`,children:x}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("span",{className:`rounded-full px-2.5 py-1 text-xs font-semibold ${N.chipClass}`,children:N.label})})]},i.id))}),e.jsxs("div",{className:`mt-4 rounded-md border p-3 text-xs ${l?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{className:"font-semibold",children:"Key:"})," Grey rows are not yet due for the current phase. Red rows indicate overdue or off-track work."]})]})})]})}function Ji(n){return ba.sanitize(n,{USE_PROFILES:{html:!0}})}const Xi=[{label:"Bold",command:"bold",icon:"B"},{label:"Italic",command:"italic",icon:"I"},{label:"Bullet list",command:"insertUnorderedList",icon:"•"},{label:"Numbered list",command:"insertOrderedList",icon:"1."}];function Yt({value:n,onChange:t,placeholder:s,className:a}){const r=g.useRef(null);g.useEffect(()=>{const i=r.current;i&&i.innerHTML!==n&&(i.innerHTML=n)},[n]);const o=()=>{const i=r.current;i&&t(Ji(i.innerHTML))},l=i=>{var x;(x=r.current)==null||x.focus(),document.execCommand(i,!1),o()},h=!n||n==="<br>";return e.jsxs("div",{className:`rounded-md border border-slate-300 bg-white ${a||""}`,children:[e.jsx("div",{"data-print-hide":"true",className:"flex items-center gap-1 border-b border-slate-200 bg-slate-50 px-1.5 py-1",children:Xi.map(i=>e.jsx("button",{type:"button",title:i.label,"aria-label":i.label,onMouseDown:x=>x.preventDefault(),onClick:()=>l(i.command),className:"flex h-6 min-w-[1.5rem] items-center justify-center rounded px-1 text-xs font-bold text-slate-600 hover:bg-slate-200",children:i.icon},i.command))}),e.jsxs("div",{className:"relative",children:[h&&s?e.jsx("span",{className:"pointer-events-none absolute left-2 top-1.5 text-sm text-slate-400",children:s}):null,e.jsx("div",{ref:r,contentEditable:!0,suppressContentEditableWarning:!0,onInput:o,onBlur:o,className:"min-h-[4.5rem] px-2 py-1.5 text-sm text-slate-800 outline-none [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"})]})]})}function Yn(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}const pt="nhs-highlight-builder-layout",Kt=[{id:"executive-summary",label:"Executive Summary"},{id:"change-dashboard",label:"Change Dashboard"},{id:"adoption-metrics",label:"Adoption Metrics"},{id:"what-went-well",label:"What Went Well"},{id:"risks-issues",label:"Key Risks and Issues"},{id:"stakeholder-insights",label:"Stakeholder Insights"},{id:"interventions-delivered",label:"Change Interventions Delivered"},{id:"upcoming-priorities",label:"Upcoming Priorities"},{id:"decisions-required",label:"Decisions Required"},{id:"change-lead-assessment",label:"Change Lead Assessment"}],He={title:"Executive Highlight Report",themeColor:"#005eb8",logoDataUrl:"",programmeName:"",reportingPeriod:"",changeLeadName:"",sroName:"",overallStatus:"Amber",orientation:"landscape",bragSlides:[],sections:["executive-summary","change-dashboard","adoption-metrics","what-went-well","risks-issues","stakeholder-insights","interventions-delivered","upcoming-priorities","decisions-required","change-lead-assessment"],sectionNarratives:{}},Qi={Green:"bg-green-100 text-green-800 border-green-200",Amber:"bg-amber-100 text-amber-800 border-amber-200",Red:"bg-red-100 text-red-800 border-red-200"},Zi={Green:"bg-green-500",Amber:"bg-amber-500",Red:"bg-red-500"};function lt({status:n}){return e.jsxs("span",{className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${Qi[n]}`,children:[e.jsx("span",{className:`h-2 w-2 rounded-full ${Zi[n]}`}),n]})}function eo(){return e.jsx("span",{className:"flex h-4 w-4 shrink-0 items-center justify-center rounded bg-green-500 text-[10px] font-bold text-white",children:"✓"})}function zt(n,t){return`${n+1}. ${t}`}function Rs(n){return Array.isArray(n)?n.filter(t=>!!t&&typeof t=="object").map(t=>({id:t.id||Yn(),componentId:t.componentId||"",rows:Array.isArray(t.rows)?t.rows.filter(s=>!!s&&typeof s=="object").map(s=>({id:s.id||Yn(),preventingGreenHtml:s.preventingGreenHtml||"",returnToGreenHtml:s.returnToGreenHtml||"",ownerId:s.ownerId||"",targetDate:s.targetDate||"",linkedActionId:s.linkedActionId})):[]})):[]}function no(){if(typeof window>"u")return He;const n=window.localStorage.getItem(pt);if(!n)return He;try{const t=JSON.parse(n);return{...He,...t,overallStatus:t.overallStatus==="Green"||t.overallStatus==="Amber"||t.overallStatus==="Red"?t.overallStatus:He.overallStatus,orientation:t.orientation==="portrait"||t.orientation==="landscape"?t.orientation:He.orientation,bragSlides:Rs(t.bragSlides),sections:Array.isArray(t.sections)&&t.sections.length>0?t.sections:He.sections}}catch{return He}}function to({store:n,metrics:t,lenses:s,components:a=Jn,getEntry:r,trustName:o,projectName:l,themeColor:h,onLayoutSaved:i,darkMode:x=!1,currentUserId:N}){const k=n.orgProfile.teamMembers||[],[p,c]=g.useState(()=>{const f=no();return h&&!f.themeColor?{...f,themeColor:h}:f}),[m,O]=g.useState(""),[_,b]=g.useState(0),S=g.useRef(null),V=g.useMemo(()=>new Set(p.sections),[p.sections]),C=g.useMemo(()=>p.sections.reduce((f,j,E)=>(f[j]=E,f),{}),[p.sections]),F=g.useMemo(()=>a.map(f=>{let j=0;f.lenses.forEach(D=>{j+=Number(r(f.id,D).score||0)});const E=Number((j/f.lenses.length).toFixed(1));return{component:f,average:E,target:f.target,gap:Number(Math.max(0,f.target-E).toFixed(1))}}),[a,r]),L=g.useMemo(()=>[...F].sort((f,j)=>j.average-f.average).slice(0,5),[F]),ce=g.useMemo(()=>a.flatMap(f=>f.lenses.flatMap(j=>(r(f.id,j).actions||[]).map(E=>({componentLabel:f.label,componentId:f.id,lens:j,action:E})))).sort((f,j)=>{const E=Me(f.action.status)==="Completed"?1:0,D=Me(j.action.status)==="Completed"?1:0;return E-D}).slice(0,8),[a,r]),z=f=>{c(j=>({...j,...f}))},te=f=>{c(j=>{const E=V.has(f)?j.sections.filter(D=>D!==f):[...j.sections,f];return{...j,sections:E}})},de=(f,j)=>{c(E=>({...E,sectionNarratives:{...E.sectionNarratives,[f]:j}}))},ne=()=>{const f=new Set(p.bragSlides.map(D=>D.componentId)),j=a.find(D=>!f.has(D.id))||a[0],E={id:Yn(),componentId:(j==null?void 0:j.id)||"",rows:[]};c(D=>({...D,bragSlides:[...D.bragSlides,E]}))},T=f=>{c(j=>({...j,bragSlides:j.bragSlides.filter(E=>E.id!==f)}))},J=(f,j)=>{c(E=>({...E,bragSlides:E.bragSlides.map(D=>D.id===f?{...D,componentId:j}:D)}))},xe=f=>{const j={id:Yn(),preventingGreenHtml:"",returnToGreenHtml:"",ownerId:N||"",targetDate:""};c(E=>({...E,bragSlides:E.bragSlides.map(D=>D.id===f?{...D,rows:[...D.rows,j]}:D)}))},Ee=(f,j,E)=>{c(D=>({...D,bragSlides:D.bragSlides.map(U=>U.id===f?{...U,rows:U.rows.map(je=>je.id===j?{...je,...E}:je)}:U)}))},A=(f,j)=>{c(E=>({...E,bragSlides:E.bragSlides.map(D=>D.id===f?{...D,rows:D.rows.filter(U=>U.id!==j)}:D)}))},se=async f=>{var D;const j=(D=f.target.files)==null?void 0:D[0];if(!j)return;const E=await new Promise((U,je)=>{const ke=new FileReader;ke.onload=()=>U(String(ke.result||"")),ke.onerror=()=>je(new Error("Unable to read selected logo file.")),ke.readAsDataURL(j)});O(j.name),c(U=>({...U,logoDataUrl:E})),b(U=>U+1)},Q=()=>{const f=JSON.stringify(p,null,2);window.localStorage.setItem(pt,f),Gn("highlight-builder-layout.json",f,"application/json"),i==null||i()},w=async f=>{var E;const j=(E=f.target.files)==null?void 0:E[0];if(j)try{const D=await j.text(),U=JSON.parse(D);c({...He,...U,overallStatus:U.overallStatus==="Green"||U.overallStatus==="Amber"||U.overallStatus==="Red"?U.overallStatus:He.overallStatus,orientation:U.orientation==="portrait"||U.orientation==="landscape"?U.orientation:He.orientation,bragSlides:Rs(U.bragSlides),sections:Array.isArray(U.sections)&&U.sections.length>0?U.sections:He.sections,sectionNarratives:U.sectionNarratives||{}})}catch{window.alert("Unable to load the selected layout JSON. Please verify the file contents.")}finally{f.target.value=""}};g.useEffect(()=>{window.localStorage.setItem(pt,JSON.stringify(p))},[p]);const R=n.history.length>1?n.history[n.history.length-2]:null,X=g.useMemo(()=>F.slice(0,10).map(f=>{const j=R?Number((f.component.lenses.reduce((je,ke)=>{var De,Oe;return je+Number(((Oe=(De=R.data[f.component.id])==null?void 0:De[ke])==null?void 0:Oe.score)||0)},0)/f.component.lenses.length).toFixed(1)):f.average,E=f.average>j?"▲":f.average<j?"▼":"►",D=f.average>=f.target?"Green":f.average>=Math.max(1,f.target-1)?"Amber":"Red",U=f.average>=f.target?"Consistently understood by most stakeholder groups.":f.average>=Math.max(1,f.target-1)?"Progressing, with reinforcement still required.":"Below target and requiring focused intervention.";return{area:f.component.label,status:D,trend:E,commentary:U}}),[F,R]),Z=g.useMemo(()=>{const f=ce.filter(U=>Me(U.action.status)==="Completed").length,j=ce.length?Math.round(f/ce.length*100):0,E=ce.filter(U=>/champion|change network/i.test(U.action.text||"")).length,D=E>=5?2:E>=1?1:0;return[{measure:"User Activation",target:"95%",current:`${Math.min(100,t.overallPct+6)}%`},{measure:"Active Users",target:"80%",current:`${Math.min(100,t.overallPct)}%`},{measure:"Training Completion",target:"90%",current:`${Math.min(100,t.actionCompletionPct)}%`},{measure:"Stakeholder Engagement Score",target:"80%",current:`${Math.min(100,t.overallPct+4)}%`},{measure:"Champion Coverage",target:"1 per team",current:`${D} per team`},{measure:"User Satisfaction",target:"80%",current:`${Math.min(100,t.overallPct+2)}%`},{measure:"Process Compliance",target:"90%",current:`${Math.min(100,t.overallPct-3)}%`},{measure:"Benefits Evidence Submitted",target:"75%",current:`${Math.min(100,j)}%`}].map(U=>{const je=Number((U.current||"").replace(/[^0-9.]/g,"")),ke=Number((U.target||"").replace(/[^0-9.]/g,"")),De=je>=ke?"►":je>=ke-5?"▲":"▼",Oe=je>=ke?"Green":je>=ke-5?"Amber":"Red";return{...U,trend:De,status:Oe}})},[t.actionCompletionPct,t.overallPct,ce]),Ie=g.useMemo(()=>F.filter(f=>f.average<f.target).slice(0,4).map(f=>({risk:`Inconsistent adoption in ${f.component.label}`,impact:"Benefits may not be realised in full.",mitigation:"Targeted coaching and local engagement sessions.",status:"Open"})),[F]),ee=g.useMemo(()=>t.nextSteps.slice(0,7).map(f=>f.message),[t.nextSteps]),Se=f=>{if((p.sectionNarratives[f]||"").trim())return p.sectionNarratives[f].trim();switch(f){case"executive-summary":return`${p.overallStatus}. The programme continues to progress across ${a.length} components and ${s.length} lenses, with overall delivery at ${t.overallPct}%.`;case"change-dashboard":return"Dashboard status is derived from current component averages versus targets, with trend based on the most recent finalised snapshot.";case"adoption-metrics":return"Metrics below provide an operational view of progress against key adoption measures and targets.";case"what-went-well":return"List key achievements for the reporting period, including sponsorship visibility and areas of strengthened adoption.";case"risks-issues":return"The following risks/issues require active monitoring and mitigation.";case"stakeholder-insights":return"Summarise positive feedback themes, concerns, and sentiment from stakeholder listening channels.";case"interventions-delivered":return"Capture interventions completed this month and assess their observed effectiveness.";case"upcoming-priorities":return"Set out the next 30-day focus to maintain delivery momentum and close adoption gaps.";case"decisions-required":return"Record approvals and decisions needed to unblock delivery and sustain adoption progress.";case"change-lead-assessment":return"Provide confidence ratings and the overall professional assessment from the Change Lead.";default:return""}},he=f=>{const j=Se(f);if(f==="change-dashboard")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:j}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Trend"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Commentary"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:X.map(E=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:E.area}),e.jsx("td",{className:"px-3 py-2 text-sm",children:e.jsx(lt,{status:E.status})}),e.jsx("td",{className:"px-3 py-2 text-sm",children:E.trend}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:E.commentary})]},E.area))})]})})]});if(f==="adoption-metrics")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:j}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Measure"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Trend"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:Z.map(E=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:E.measure}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:E.target}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:E.current}),e.jsx("td",{className:"px-3 py-2 text-sm",children:E.trend}),e.jsx("td",{className:"px-3 py-2 text-sm",children:e.jsx(lt,{status:E.status})})]},E.measure))})]})})]});if(f==="risks-issues")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:j}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Risk / Issue"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Impact"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Mitigation"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:Ie.length?Ie.map((E,D)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:E.risk}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:E.impact}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:E.mitigation}),e.jsx("td",{className:"px-3 py-2 text-sm",children:E.status})]},`${E.risk}-${D}`)):e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-2 text-sm text-slate-500",colSpan:4,children:"No key risks are currently above threshold."})})})]})})]});if(f==="upcoming-priorities")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:j}),e.jsx("ol",{className:"mt-3 list-decimal pl-5 space-y-1 text-sm text-slate-700",children:ee.length?ee.map((E,D)=>e.jsx("li",{children:E},`${E}-${D}`)):e.jsx("li",{children:"No immediate priorities detected from current data."})})]});if(f==="what-went-well")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:j}),e.jsx("ul",{className:"mt-3 space-y-1.5 text-sm text-slate-700",children:L.slice(0,5).map(E=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(eo,{}),E.component.label," is tracking at ",E.average," against target ",E.target,"."]},E.component.id))})]});if(f==="stakeholder-insights"){const E=Math.min(85,Math.max(45,t.overallPct-10)),D=Math.min(35,Math.max(10,100-E-8)),U=Math.max(3,100-E-D);return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:j}),e.jsxs("div",{className:"mt-3 grid gap-2 md:grid-cols-3 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 rounded border border-green-200 bg-green-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-green-500"}),"Positive: ",E,"%"]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-amber-200 bg-amber-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500"}),"Neutral: ",D,"%"]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-red-200 bg-red-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-red-500"}),"Negative: ",U,"%"]})]})]})}return f==="interventions-delivered"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:j}),e.jsxs("ul",{className:"mt-3 space-y-1 text-sm text-slate-700",children:[e.jsx("li",{children:"• Sponsor briefing sessions"}),e.jsx("li",{children:"• Stakeholder engagement workshops"}),e.jsx("li",{children:"• Communications campaign"}),e.jsx("li",{children:"• Training delivery"}),e.jsx("li",{children:"• Champion network meetings"}),e.jsx("li",{children:"• Adoption data reviews"})]})]}):f==="decisions-required"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:j}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Decision"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Required By"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Approval for additional adoption support resource"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Programme Board"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:"TBC"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Agreement on ongoing benefits ownership"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"SRO"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:"TBC"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Endorsement of next rollout phase"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Steering Group"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:"TBC"})]})]})]})})]}):f==="change-lead-assessment"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:j}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Confidence"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Delivery of Change Activities"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"High"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Stakeholder Engagement"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"High"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Adoption Achievement"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"Medium"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Benefits Realisation"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"Medium"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Sustainability Post Go-Live"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"Medium"})]})]})]})})]}):e.jsx(e.Fragment,{children:e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:j})})},fe=()=>{if(!S.current){window.alert("Preview content is not ready to print yet.");return}const f=window.open("","_blank");if(!f)return;f.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8" /><title>Highlight Report</title></head><body></body></html>'),document.querySelectorAll('link[rel="stylesheet"], style').forEach(D=>{f.document.head.appendChild(D.cloneNode(!0))});const j=f.document.createElement("style");j.textContent=`
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
      .printable-report article { break-inside: avoid; page-break-inside: avoid; }
      .printable-report [data-brag-slide="true"] { break-after: page; page-break-after: always; }
      .printable-report table { width: 100%; }
    `,f.document.head.appendChild(j);const E=S.current.cloneNode(!0);E.className="printable-report",E.querySelectorAll('[data-print-exclude="true"]').forEach(D=>D.remove()),f.document.body.appendChild(E),f.document.close(),setTimeout(()=>{f.focus(),f.print(),f.close()},250)};return e.jsxs("section",{className:"space-y-6",children:[x?e.jsx("div",{className:"rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm font-semibold text-red-900",children:"Dark mode not compatible for Highlight Report due to print/save functionality."}):null,e.jsx("div",{className:"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",children:e.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Highlight Builder Tool"}),e.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:"Create a polished highlight pack"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:Q,className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"Save JSON Layout"}),e.jsxs("label",{className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 cursor-pointer",children:["Load JSON Layout",e.jsx("input",{type:"file",accept:"application/json",className:"hidden",onChange:w},_)]}),e.jsxs("div",{className:"flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-semibold",role:"group","aria-label":"PDF export orientation",children:[e.jsx("button",{type:"button",onClick:()=>z({orientation:"portrait"}),"aria-pressed":p.orientation==="portrait",className:`px-3 py-2 transition-colors ${p.orientation==="portrait"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Portrait"}),e.jsx("button",{type:"button",onClick:()=>z({orientation:"landscape"}),"aria-pressed":p.orientation==="landscape",className:`px-3 py-2 transition-colors border-l border-slate-300 ${p.orientation==="landscape"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Landscape"})]}),e.jsxs("button",{type:"button",onClick:fe,className:"rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm",style:{backgroundColor:p.themeColor},children:["Print / Save PDF (",p.orientation==="landscape"?"Landscape":"Portrait",")"]})]})]})}),e.jsxs("div",{className:"grid gap-6 xl:grid-cols-[340px,1fr]",children:[e.jsx("aside",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Report title"}),e.jsx("input",{value:p.title,onChange:f=>z({title:f.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Programme"}),e.jsx("input",{value:p.programmeName,onChange:f=>z({programmeName:f.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Reporting period"}),e.jsx("input",{value:p.reportingPeriod,onChange:f=>z({reportingPeriod:f.target.value}),placeholder:"July 2026",className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Change Lead"}),e.jsx("input",{value:p.changeLeadName,onChange:f=>z({changeLeadName:f.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"SRO"}),e.jsx("input",{value:p.sroName,onChange:f=>z({sroName:f.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Overall Change Status"}),e.jsxs("select",{value:p.overallStatus,onChange:f=>z({overallStatus:f.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500",children:[e.jsx("option",{value:"Green",children:"Green"}),e.jsx("option",{value:"Amber",children:"Amber"}),e.jsx("option",{value:"Red",children:"Red"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Theme colour"}),e.jsx("input",{type:"color",value:p.themeColor,onChange:f=>z({themeColor:f.target.value}),className:"h-10 w-full rounded-md border border-slate-300"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Logo in top-left"}),e.jsxs("label",{className:"flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-3 py-4 text-sm text-slate-700 hover:bg-slate-100",children:[e.jsx("span",{children:m||"Upload logo"}),e.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:se})]}),p.logoDataUrl?e.jsx("div",{className:"mt-3 rounded-md border border-slate-200 bg-slate-50 p-2",children:e.jsx("img",{alt:"Preview logo",src:p.logoDataUrl,className:"max-h-16 w-auto"})}):null]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-1",children:"Programme/Project Readiness Slides"}),e.jsx("p",{className:"text-xs text-slate-500 mb-3",children:"These print first, one per page. Add a slide per component you want to report on."}),e.jsxs("div",{className:"space-y-2",children:[p.bragSlides.map((f,j)=>e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-500",children:["Page ",j+1]}),e.jsx("button",{type:"button",onClick:()=>T(f.id),className:"text-xs font-semibold text-red-600 hover:text-red-800",children:"Remove"})]}),e.jsx("select",{value:f.componentId,onChange:E=>J(f.id,E.target.value),className:"mt-1 w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm outline-none focus:border-blue-500",children:a.map(E=>e.jsx("option",{value:E.id,children:E.label},E.id))}),e.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:[f.rows.length," row",f.rows.length===1?"":"s"]})]},f.id)),p.bragSlides.length?null:e.jsx("p",{className:"text-sm text-slate-500",children:"No readiness slides yet."})]}),e.jsx("button",{type:"button",onClick:ne,disabled:!a.length,className:"mt-3 w-full rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 disabled:opacity-50",children:"+ Add Readiness Slide"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-3",children:"Report sections"}),e.jsx("div",{className:"space-y-2",children:Kt.map(f=>{const j=V.has(f.id),E=f.id,D=C[f.id],U=typeof D=="number"?zt(D,f.label):f.label;return e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("label",{className:"flex items-center gap-3 text-sm text-slate-700",children:[e.jsx("input",{type:"checkbox",checked:j,onChange:()=>te(f.id)}),e.jsx("span",{children:U})]}),j?e.jsxs("div",{className:"mt-3 space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-1",children:"Section narrative"}),e.jsx("textarea",{value:p.sectionNarratives[E]||"",onChange:je=>de(E,je.target.value),placeholder:Se(E),rows:4,className:"w-full rounded-md border border-slate-300 px-2 py-2 text-xs outline-none focus:border-blue-500"})]}),e.jsx("p",{className:"text-xs text-slate-500",children:"All adoption components are automatically included in this section."})]}):null]},f.id)})})]})]})}),e.jsxs("div",{ref:S,className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsxs("div",{className:"mb-4 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3",children:[p.logoDataUrl?e.jsx("img",{alt:"Logo preview",src:p.logoDataUrl,className:"max-h-12 w-auto"}):e.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-md bg-slate-200 text-sm font-bold text-slate-700",children:"NHS"}),e.jsxs("div",{children:[e.jsx("div",{"data-print-hide":"true",className:"text-xs font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Builder Preview"}),e.jsx("div",{className:"text-lg font-bold text-slate-900",children:p.title}),e.jsxs("div",{className:"text-sm text-slate-600 mt-1",children:[p.programmeName||l||"Unnamed Programme"," ·"," ",p.reportingPeriod||"Reporting period not set"]}),e.jsxs("div",{className:"mt-1 flex items-center gap-2 text-sm text-slate-600",children:["Overall Status: ",e.jsx(lt,{status:p.overallStatus})]}),e.jsx("div",{className:"text-sm text-slate-600 mt-0.5",children:o||"Unconfigured Trust"})]})]}),e.jsxs("div",{className:"grid gap-3",children:[p.bragSlides.map(f=>{const j=F.find(D=>D.component.id===f.componentId),E=j?Is(j.average,j.target):null;return e.jsxs("article",{"data-brag-slide":"true",className:"rounded-xl border border-slate-200 p-4",style:{borderLeft:`4px solid ${p.themeColor}`},children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Programme/Project Readiness"}),e.jsx("h3",{className:"text-lg font-bold text-slate-900",children:(j==null?void 0:j.component.label)||"Select a component"})]}),j&&E?e.jsxs("div",{className:"text-right",children:[e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold ${ks[E]}`,children:E}),e.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:[j.average.toFixed(1)," of ",j.target," target"]})]}):null]}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What is preventing you from being green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What do you/others need to do to return to green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target date"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[f.rows.map(D=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(Yt,{value:D.preventingGreenHtml,onChange:U=>Ee(f.id,D.id,{preventingGreenHtml:U}),placeholder:"What's blocking green?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(Yt,{value:D.returnToGreenHtml,onChange:U=>Ee(f.id,D.id,{returnToGreenHtml:U}),placeholder:"What needs to happen?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:D.ownerId,onChange:U=>Ee(f.id,D.id,{ownerId:U.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"",children:"Unassigned"}),k.map(U=>e.jsxs("option",{value:U.id,children:[U.name||"Unnamed",U.role?` - ${U.role}`:""]},U.id))]})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{type:"date",value:D.targetDate,onChange:U=>Ee(f.id,D.id,{targetDate:U.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>A(f.id,D.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},D.id)),f.rows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No rows yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>xe(f.id),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Row"})]},f.id)}),p.sections.map(f=>{var j;return e.jsxs("article",{className:"rounded-xl border border-slate-200 p-4",style:{borderLeft:`4px solid ${p.themeColor}`},children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700",children:zt(C[f]||0,((j=Kt.find(E=>E.id===f))==null?void 0:j.label)||f)}),he(f)]},f)})]})]})]})]})}function so(n){const t={};return n.sections.forEach(s=>{s.items.forEach(a=>{t[a.id]="mine"})}),t}function Jt({active:n,onClick:t,children:s,darkMode:a}){return e.jsx("button",{type:"button",onClick:t,className:`rounded-md border px-2 py-1 text-left text-xs transition-colors ${Et} ${n?"border-[#005eb8] bg-[#005eb8]/10 font-semibold text-[#005eb8]":a?"border-slate-600 bg-slate-900 text-slate-300 hover:bg-slate-800":"border-slate-300 bg-white text-slate-600 hover:bg-slate-50"}`,children:s})}function ao({item:n,choice:t,onChoose:s,myLabel:a,theirLabel:r,darkMode:o}){return e.jsxs("div",{"data-testid":`import-conflict-row-${n.id}`,className:`grid grid-cols-1 gap-2 border-t py-3 first:border-t-0 md:grid-cols-[1fr_1fr_1fr] ${o?"border-slate-700":"border-slate-200"}`,children:[e.jsx("div",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:n.label}),e.jsxs(Jt,{active:t==="mine",onClick:()=>s(n.id,"mine"),darkMode:o,children:[e.jsx("span",{className:`block text-[0.65rem] font-bold uppercase tracking-wide ${o?"text-slate-400":"text-slate-500"}`,children:a}),n.mineSummary]}),e.jsxs(Jt,{active:t==="theirs",onClick:()=>s(n.id,"theirs"),darkMode:o,children:[e.jsx("span",{className:`block text-[0.65rem] font-bold uppercase tracking-wide ${o?"text-slate-400":"text-slate-500"}`,children:r}),n.theirsSummary]})]})}function io({report:n,myLabel:t,theirLabel:s,onResolve:a,onCancel:r,darkMode:o=!1}){const[l,h]=g.useState(()=>so(n)),i=n.sections.reduce((N,k)=>N+k.items.length,0),x=N=>{h(k=>{const p={...k};return n.sections.forEach(c=>{c.items.forEach(m=>{p[m.id]=N})}),p})};return e.jsx("div",{"data-testid":"import-conflict-modal",className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4",onClick:N=>{N.target===N.currentTarget&&r()},children:e.jsxs("div",{onClick:N=>N.stopPropagation(),className:`flex w-full max-w-4xl max-h-[90vh] flex-col rounded-lg border shadow-xl ${o?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:`shrink-0 border-b p-6 ${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("h2",{className:`text-xl font-bold ${o?"text-slate-100":"text-slate-800"}`,children:"Resolve import conflicts"}),e.jsxs("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:["Comparing ",e.jsx("span",{className:"font-semibold",children:t})," (currently loaded) against"," ",e.jsx("span",{className:"font-semibold",children:s})," (the imported file)."]}),e.jsxs("p",{className:`mt-1 text-xs ${o?"text-slate-400":"text-slate-500"}`,children:[i," item",i===1?"":"s"," need a decision",n.autoMergeSummary.length?` · also merging automatically: ${n.autoMergeSummary.join(", ")}`:""]}),e.jsxs("div",{className:"mt-3 flex gap-2",children:[e.jsx("button",{type:"button",onClick:()=>x("mine"),className:`${sn} h-8 px-3 py-0 text-xs`,children:"Use all mine"}),e.jsx("button",{type:"button",onClick:()=>x("theirs"),className:`${sn} h-8 px-3 py-0 text-xs`,children:"Use all theirs"})]})]}),e.jsx("div",{className:"flex-1 space-y-6 overflow-y-auto p-6",children:n.sections.map(N=>e.jsxs("div",{children:[e.jsx("h3",{className:`mb-1 text-sm font-bold uppercase tracking-wide ${o?"text-slate-300":"text-slate-500"}`,children:N.title}),e.jsx("div",{className:`rounded-md border px-3 ${o?"border-slate-700":"border-slate-200"}`,children:N.items.map(k=>e.jsx(ao,{item:k,choice:l[k.id]||"mine",onChoose:(p,c)=>h(m=>({...m,[p]:c})),myLabel:t,theirLabel:s,darkMode:o},k.id))})]},N.id))}),e.jsxs("div",{className:`flex shrink-0 justify-end gap-3 border-t p-4 ${o?"border-slate-700":"border-slate-200"}`,children:[e.jsx("button",{type:"button","data-testid":"import-conflict-cancel",onClick:r,className:sn,children:"Cancel Import"}),e.jsx("button",{type:"button","data-testid":"import-conflict-apply",onClick:()=>a(l),className:Ct,children:"Apply and Import"})]})]})})}function Xt(){return e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function oo(n){return n in wt}function ro({lensName:n,onClose:t,darkMode:s=!1}){if(!n||!oo(n))return null;const a=wt[n];return e.jsx("div",{id:"lens-info-modal",className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:r=>{r.target===r.currentTarget&&t()},children:e.jsxs("div",{className:`${s?"bg-slate-800 border-slate-700":"bg-white"} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border`,children:[e.jsxs("div",{className:`${s?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} sticky top-0 border-b p-6 flex items-center justify-between`,children:[e.jsx("h2",{className:`text-2xl font-bold ${s?"text-slate-100":"text-slate-800"}`,children:n}),e.jsx("button",{onClick:t,className:`${s?"text-slate-300 hover:text-slate-100":"text-slate-500 hover:text-slate-700"}`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsxs("div",{className:`p-6 space-y-4 ${s?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(Xt,{}),"Outcome"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.outcome})]}),e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(Xt,{}),"What Good Looks Like"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.whatGoodLooksLike})]})]})]})})}function lo({darkMode:n=!1,onNavigateToProjectDetails:t,onNavigateToGuide:s,onNavigateToDashboard:a}){const r=ws(),[o,l]=g.useState(0);return e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${n?"text-slate-100":"text-slate-800"}`,children:"Introduction"}),e.jsx("p",{className:`mt-2 text-sm ${n?"text-slate-300":"text-slate-600"}`,children:"The five introduction steps are shown below in collapsible sections."})]}),r.map((h,i)=>e.jsxs("section",{className:`${n?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} overflow-hidden rounded-lg border shadow-sm`,children:[e.jsxs("button",{type:"button",onClick:()=>l(i),"aria-expanded":o===i,className:`flex w-full items-center justify-between gap-3 p-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-inset ${n?"hover:bg-slate-700":"hover:bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${n?"text-blue-300":"text-blue-700"}`,children:["Step ",i+1," of ",r.length]}),e.jsx("h3",{className:`mt-1 text-lg font-semibold ${n?"text-slate-100":"text-slate-900"}`,children:h.title})]}),e.jsx("span",{className:`shrink-0 text-lg font-semibold ${n?"text-slate-300":"text-slate-500"}`,"aria-hidden":"true",children:o===i?"-":"+"})]}),o===i?e.jsxs("div",{className:"px-5 pb-5",children:[h.body,i===r.length-1?e.jsxs("div",{className:"mt-5 flex flex-wrap gap-2",children:[t?e.jsx("button",{type:"button",onClick:t,className:"rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"Set up your CST Personalisation"}):null,s?e.jsx("button",{type:"button",onClick:s,className:"rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"See the 6 Key Questions"}):null,a?e.jsx("button",{type:"button",onClick:a,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Go to dashboard"}):null]}):null]}):null]},h.title))]})}const co=[{name:"NHS Blue",color:"#005eb8"},{name:"Navy",color:"#003366"},{name:"Teal",color:"#009b8a"},{name:"Purple",color:"#6c28d9"},{name:"Green",color:"#059669"},{name:"Red",color:"#dc2626"}];function uo({userSettings:n,onUserSettingsUpdate:t,onLoadExampleData:s,onResetData:a,canUseCustomTheme:r=!0,engagementGrade:o,engagementLevel:l,engagementXp:h,darkMode:i=!1}){const[x,N]=g.useState(n),[k,p]=g.useState(0),[c,m]=g.useState(null),O=g.useRef(null);g.useEffect(()=>{N(n)},[n]);const _=g.useCallback(T=>{const J={...x,...T};N(J),t(J)},[x,t]),b=async T=>{var Ee;const J=(Ee=T.target.files)==null?void 0:Ee[0];if(!J)return;const xe=await new Promise((A,se)=>{const Q=new FileReader;Q.onload=()=>A(String(Q.result||"")),Q.onerror=()=>se(new Error("Unable to read selected profile image.")),Q.readAsDataURL(J)});_({profileImageDataUrl:xe}),p(A=>A+1)},S=()=>{_({profileImageDataUrl:void 0})},V=T=>{_({themeColor:T})},C={grade:"Your grade shows your overall engagement trend. S = excellent, A = strong, B = solid, C = steady, D = building, E = starting out.",level:"Your level reflects cumulative XP gained through consistent engagement. Higher levels unlock more personalised options and features.",xp:"XP increases as you complete important actions, finalise months on time, and keep returning to the tool."},F=l??1,L=h??0,ce=Math.max(0,(F-1)*120),z=Math.max(0,L-ce),te=Math.max(0,Math.min(100,Math.round(z/120*100))),de=Math.max(0,F*120-L),ne=[{key:"grade",label:"Grade",value:o||"N/A",tooltip:C.grade},{key:"level",label:"Level",value:F,tooltip:C.level},{key:"xp",label:"XP",value:L,tooltip:C.xp}];return e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[e.jsx("h2",{className:`text-2xl font-bold ${i?"text-slate-100":"text-slate-800"}`,children:"Settings"}),e.jsx("p",{className:`text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Use this page to manage your profile, personal preferences, and support options."}),(o||l||h!==void 0)&&e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Engagement and Progress"}),e.jsx("p",{className:`mt-1 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"A quick view of how consistently the tool is being used over time."})]}),e.jsxs("div",{className:`${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("h4",{className:`text-sm font-semibold mb-2 ${i?"text-slate-100":"text-slate-800"}`,children:"Engagement Summary"}),e.jsx("p",{className:`mb-3 text-xs ${i?"text-slate-300":"text-slate-600"}`,children:"Tap the info icon beside each metric for a plain-language explanation."}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:ne.map(T=>e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("p",{className:`text-xs ${i?"text-slate-300":"text-slate-600"}`,children:T.label}),e.jsx("button",{type:"button","aria-label":`${T.label} information`,"aria-expanded":c===T.key,onClick:()=>m(J=>J===T.key?null:T.key),className:`inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#005eb8] text-[9px] font-bold text-[#005eb8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffeb3b] ${i?"bg-[#1d334f]":"bg-[#e8f1fb]"}`,children:"i"})]}),e.jsx("p",{className:`text-lg font-bold ${i?"text-slate-100":"text-slate-800"}`,children:T.value}),c===T.key?e.jsx("div",{className:`absolute left-0 top-11 z-10 w-64 rounded-md border px-3 py-2 text-xs shadow-lg ${i?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-200 bg-white text-slate-700"}`,children:T.tooltip}):null]},T.key))}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-xs font-medium ${i?"text-slate-300":"text-slate-600"}`,children:"Progress to next level"}),e.jsxs("p",{className:`text-xs ${i?"text-slate-300":"text-slate-600"}`,children:[de," XP to Level ",F+1]})]}),e.jsx("div",{className:`mt-1 h-2.5 w-full overflow-hidden rounded-full ${i?"bg-slate-700":"bg-slate-200"}`,children:e.jsx("div",{className:"h-full rounded-full bg-[#005eb8] transition-all",style:{width:`${te}%`}})})]}),e.jsx("p",{className:`mt-3 text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"This reflects consistency over time, not perfection. Small, regular updates are what move this forwards."})]})]}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-5`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Your Profile"}),e.jsx("p",{className:`mt-1 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"These details personalise your experience and reports."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-name",className:`block text-sm font-medium mb-1 ${i?"text-slate-200":"text-slate-700"}`,children:"Your Name"}),e.jsx("input",{id:"user-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${i?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:x.name,onChange:T=>_({name:T.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-preferences",className:`block text-sm font-medium mb-1 ${i?"text-slate-200":"text-slate-700"}`,children:"Preferences"}),e.jsx("textarea",{id:"user-preferences",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 h-24 ${i?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:x.preferences,onChange:T=>_({preferences:T.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-sm font-medium mb-2 ${i?"text-slate-200":"text-slate-700"}`,children:"Profile Picture"}),e.jsxs("div",{className:"flex items-start gap-4",children:[x.profileImageDataUrl?e.jsx("img",{src:x.profileImageDataUrl,alt:"Profile",className:"h-20 w-20 rounded-md border border-slate-300 object-cover"}):e.jsx("div",{className:"h-20 w-20 rounded-md border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center",children:e.jsx("span",{className:"text-xs text-slate-500",children:"No image"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{type:"button",onClick:()=>{var T;return(T=O.current)==null?void 0:T.click()},className:`rounded-md px-3 py-2 text-sm font-medium transition-colors ${i?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:x.profileImageDataUrl?"Change Picture":"Upload Picture"}),x.profileImageDataUrl?e.jsx("button",{type:"button",onClick:S,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${i?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"}`,children:"Remove"}):null,e.jsx("input",{ref:O,type:"file",accept:"image/*",className:"hidden",onChange:b},k)]})]})]})]}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Appearance"}),e.jsx("p",{className:`mt-1 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Choose the theme colour you want to use throughout the app."})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Dark mode"}),e.jsx("input",{type:"checkbox",checked:!!x.darkMode,onChange:T=>_({darkMode:T.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${i?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Show guided workflow tips on each component"}),e.jsx("input",{type:"checkbox",checked:!x.hideGuidedWorkflow,onChange:T=>_({hideGuidedWorkflow:!T.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`text-sm ${i?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-medium",children:"Status colour profile"}),e.jsxs("select",{value:x.colorAccessibilityMode||"standard",onChange:T=>_({colorAccessibilityMode:T.target.value}),className:`w-full rounded-md border p-2 pr-10 ${i?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"standard",children:"Standard"}),e.jsx("option",{value:"color-blind-friendly",children:"Color-blind friendly"})]})]})]}),e.jsx("p",{className:`text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Color-blind friendly mode keeps BRAG labels in text and shifts status colors to higher-contrast alternatives."}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-theme-colour",className:`block text-sm font-medium mb-1 ${i?"text-slate-200":"text-slate-700"}`,children:"Theme Colour"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:co.map(T=>e.jsxs("button",{type:"button",onClick:()=>V(T.color),className:"flex items-center gap-2 rounded-md border-2 px-3 py-2 text-sm",style:{borderColor:x.themeColor===T.color?T.color:"#e2e8f0",backgroundColor:x.themeColor===T.color?`${T.color}22`:"transparent"},children:[e.jsx("span",{className:"h-4 w-4 rounded-sm border border-slate-300",style:{backgroundColor:T.color}}),e.jsx("span",{children:T.name})]},T.color))}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{id:"user-theme-colour",type:"color",className:"h-10 w-14 rounded border border-slate-300 p-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",value:x.themeColor,onChange:T=>_({themeColor:T.target.value}),disabled:!r}),e.jsx("span",{className:`text-sm font-mono ${i?"text-slate-200":"text-slate-600"}`,children:x.themeColor}),r?null:e.jsx("span",{className:`text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Unlocks at level 3"})]})]})]})]}),e.jsxs("div",{className:`${i?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Data and Support"}),e.jsx("p",{className:`mt-1 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Load sample data, reset local data, read FAQs, or report an issue."})]}),e.jsxs("div",{className:`${i?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("h4",{className:`text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Data Tools"}),e.jsxs("div",{className:"mt-3 flex flex-wrap gap-3",children:[e.jsx("button",{onClick:s,className:Ct,children:"Example Data"}),e.jsx("button",{onClick:a,className:`inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors ${Et}`,children:"Reset Data"})]}),e.jsx("p",{className:`mt-2 text-xs ${i?"text-slate-400":"text-slate-500"}`,children:"Example Data loads sample assessment content so you can explore the dashboards quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"How is my data stored?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Your settings and assessment state are stored locally in your browser using local storage."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"What does Example Data do?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"It populates the tool with the included sample JSON so you can explore dashboards and workflows quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${i?"text-slate-100":"text-slate-700"}`,children:"Can I change the theme colour later?"}),e.jsx("p",{className:`mt-2 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Yes. Update the theme colour at any time in User Settings and it is applied immediately."})]}),e.jsxs("div",{className:`rounded-md border p-4 ${i?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("h4",{className:`mb-2 text-sm font-semibold ${i?"text-slate-100":"text-slate-800"}`,children:"Submit a Bug"}),e.jsx("p",{className:`mb-3 text-sm ${i?"text-slate-300":"text-slate-600"}`,children:"Found an issue? Send details directly via email."}),e.jsx("a",{href:"mailto:andrew.fraser22@kpmg.co.uk?subject=NHS%20Digital%20Adoption%20Tool%20Bug",className:`inline-flex rounded-md px-4 py-2 text-sm font-medium transition-colors ${i?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:"Report Bug"})]})]})]})}const Qt={0:"Not Started: Activity has not yet commenced or been defined.",1:"Emerging: Activity is fragmented, uncoordinated, and reactive. No standardised approach.",2:"Developing: Basic processes exist but are inconsistently applied. Reliance on heroic individual efforts.",3:"Embedding: Standardised approach defined and applied across the project. Leadership is engaged.",4:"Adopted: Behaviours are changing. Metrics are actively monitored to drive adoption.",5:"Thriving: Change is fully embedded as business as usual. Continuous improvement is evident."};function mo(n){return{id:`audit:${Date.now()}-${Math.random().toString(36).slice(2,8)}`,timestamp:new Date().toISOString(),actor:n.actor,eventType:n.eventType,entityType:n.entityType,entityId:n.entityId,summary:n.summary,trustName:n.trustName,projectName:n.projectName,componentId:n.componentId,lens:n.lens,reason:n.reason,before:n.before,after:n.after,source:n.source||"local",importedAt:n.importedAt}}const go=1e4;function Xn(n,t=go){return n.length<=t?n:n.slice(n.length-t)}const Zt="nhs-digital-adoption-store",po=new Set(["pathway-1","pathway-2","pathway-3"]);function Ps(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function _e(n,t){if(!Ps(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected object.`)}function H(n,t){if(n!==void 0&&typeof n!="string")throw new Error(`Invalid adoption assessment payload at ${t}: expected string.`)}function Ds(n,t){if(n!==void 0&&typeof n!="number")throw new Error(`Invalid adoption assessment payload at ${t}: expected number.`)}function It(n,t){if(n!==void 0&&!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`)}function $s(n,t){_e(n,t),H(n.id,`${t}.id`),H(n.text,`${t}.text`),H(n.owner,`${t}.owner`),H(n.timescale,`${t}.timescale`),H(n.status,`${t}.status`),H(n.notes,`${t}.notes`),H(n.evidence,`${t}.evidence`)}function ho(n,t){_e(n,t),Ds(n.score,`${t}.score`),H(n.justification,`${t}.justification`),H(n.evidence,`${t}.evidence`),It(n.actions,`${t}.actions`),(n.actions||[]).forEach((s,a)=>{$s(s,`${t}.actions[${a}]`)})}function Ts(n,t){_e(n,t),Object.keys(n).forEach(s=>{const a=n[s];_e(a,`${t}.${s}`),Object.keys(a).forEach(r=>{ho(a[r],`${t}.${s}.${r}`)})})}function fo(n,t){_e(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((r,o)=>{_e(r,`${t}.${s}[${o}]`),H(r.id,`${t}.${s}[${o}].id`),H(r.text,`${t}.${s}[${o}].text`),H(r.owner,`${t}.${s}[${o}].owner`),H(r.timescale,`${t}.${s}[${o}].timescale`),H(r.notes,`${t}.${s}[${o}].notes`),H(r.evidence,`${t}.${s}[${o}].evidence`),It(r.linkedActions,`${t}.${s}[${o}].linkedActions`),(r.linkedActions||[]).forEach((l,h)=>{_e(l,`${t}.${s}[${o}].linkedActions[${h}]`),H(l.lens,`${t}.${s}[${o}].linkedActions[${h}].lens`),H(l.actionId,`${t}.${s}[${o}].linkedActions[${h}].actionId`)})})})}function bo(n,t){_e(n,t),Object.keys(n).forEach(s=>{const a=n[s];_e(a,`${t}.${s}`),["pathway-1","pathway-2","pathway-3"].forEach(r=>{const o=a[r];It(o,`${t}.${s}.${r}`),(o||[]).forEach((l,h)=>{if(typeof l!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}.${r}[${h}]: expected string.`)})})})}function xo(n,t){_e(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((r,o)=>{if(typeof r!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}[${o}]: expected string.`)})})}function So(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{_e(s,`${t}[${a}]`),H(s.id,`${t}[${a}].id`),H(s.removedAt,`${t}[${a}].removedAt`),H(s.reason,`${t}[${a}].reason`),H(s.componentId,`${t}[${a}].componentId`),H(s.lens,`${t}[${a}].lens`),H(s.actionId,`${t}[${a}].actionId`),H(s.actionText,`${t}[${a}].actionText`),H(s.actionType,`${t}[${a}].actionType`)})}function vo(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{_e(s,`${t}[${a}]`),H(s.id,`${t}[${a}].id`),H(s.timestamp,`${t}[${a}].timestamp`),H(s.actor,`${t}[${a}].actor`),H(s.eventType,`${t}[${a}].eventType`),H(s.entityType,`${t}[${a}].entityType`),H(s.entityId,`${t}[${a}].entityId`),H(s.summary,`${t}[${a}].summary`),H(s.trustName,`${t}[${a}].trustName`),H(s.projectName,`${t}[${a}].projectName`),H(s.componentId,`${t}[${a}].componentId`),H(s.lens,`${t}[${a}].lens`),H(s.reason,`${t}[${a}].reason`),H(s.source,`${t}[${a}].source`),H(s.importedAt,`${t}[${a}].importedAt`)})}function yo(n,t){if(_e(n,t),H(n.trustName,`${t}.trustName`),H(n.region,`${t}.region`),H(n.trustType,`${t}.trustType`),H(n.projectName,`${t}.projectName`),H(n.leadName,`${t}.leadName`),H(n.cstId,`${t}.cstId`),n.cst!==void 0){if(_e(n.cst,`${t}.cst`),H(n.cst.type,`${t}.cst.type`),H(n.cst.pathway,`${t}.cst.pathway`),typeof n.cst.pathway=="string"&&!po.has(n.cst.pathway))throw new Error(`Invalid adoption assessment payload at ${t}.cst.pathway: unexpected value "${n.cst.pathway}".`);if(H(n.cst.goLiveDate,`${t}.cst.goLiveDate`),H(n.cst.fullAdoptionDate,`${t}.cst.fullAdoptionDate`),H(n.cst.benefitRealizationDate,`${t}.cst.benefitRealizationDate`),H(n.cst.toolkitChoice,`${t}.cst.toolkitChoice`),typeof n.cst.toolkitChoice=="string"&&!Na(n.cst.toolkitChoice))throw new Error(`Invalid adoption assessment payload at ${t}.cst.toolkitChoice: unexpected value "${n.cst.toolkitChoice}".`)}}function wo(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{_e(s,`${t}[${a}]`),H(s.monthLabel,`${t}[${a}].monthLabel`),Ds(s.overallPercentage,`${t}[${a}].overallPercentage`),s.data!==void 0&&Ts(s.data,`${t}[${a}].data`)})}function No(n,t){_e(n,t),Object.keys(n).forEach(s=>{if(typeof n[s]!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected string.`)})}function Co(n,t){_e(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((r,o)=>{$s(r,`${t}.${s}[${o}]`)})})}function Vn(n){if(!Ps(n))throw new Error("Invalid adoption assessment payload at root: expected object.");return H(n.schemaVersion,"schemaVersion"),H(n.exportedAt,"exportedAt"),n.orgProfile!==void 0&&yo(n.orgProfile,"orgProfile"),n.currentDraft!==void 0&&Ts(n.currentDraft,"currentDraft"),n.objectives!==void 0&&fo(n.objectives,"objectives"),n.auditLog!==void 0&&vo(n.auditLog,"auditLog"),n.suppressedAutoActions!==void 0&&xo(n.suppressedAutoActions,"suppressedAutoActions"),n.actionAuditLog!==void 0&&So(n.actionAuditLog,"actionAuditLog"),n.history!==void 0&&wo(n.history,"history"),n.phaseOverrides!==void 0&&No(n.phaseOverrides,"phaseOverrides"),n.pathwayChecks!==void 0&&bo(n.pathwayChecks,"pathwayChecks"),n.componentActions!==void 0&&Co(n.componentActions,"componentActions"),n}function Eo(n=new Date){return n.toLocaleString("en-GB",{month:"short",year:"numeric"})}function es(n){return{schemaVersion:"4.0",exportedAt:new Date().toISOString(),orgProfile:{...n.orgProfile},currentDraft:bn(n.currentDraft),objectives:Ls(n.objectives),auditLog:Oo(n.auditLog),suppressedAutoActions:Fs(n.suppressedAutoActions),history:n.history.map(t=>({...t,data:bn(t.data)})),phaseOverrides:{...n.phaseOverrides},pathwayChecks:Bs(n.pathwayChecks)}}function Io(n){const t=n.componentActions;if(t)return Object.keys(t).reduce((s,a)=>(s[a]=(t[a]||[]).map(r=>({id:String(r.id??`${Date.now()}-${Math.random().toString(36).slice(2,8)}`),text:String(r.text||""),owner:String(r.owner||""),timescale:String(r.timescale||""),notes:String(r.notes||""),evidence:String(r.evidence||""),linkedActions:[]})),s),{})}function ko(n,t){return n!=null&&n.length?n.map(s=>({id:`legacy-${s.id}`,timestamp:s.removedAt,actor:"Unknown user",eventType:"action-removed",entityType:"action",entityId:s.actionId,summary:`Removed action: ${s.actionText||s.actionId}`,trustName:t==null?void 0:t.trustName,projectName:t==null?void 0:t.projectName,componentId:s.componentId,lens:s.lens,reason:s.reason,before:{actionText:s.actionText,actionType:s.actionType},source:"local"})):[]}function jo(n,t,s){const a=ko(t,s),r=(n||[]).map(l=>({...l})),o=[...a,...r].sort((l,h)=>{const i=Date.parse(l.timestamp||""),x=Date.parse(h.timestamp||"");return!Number.isNaN(i)&&!Number.isNaN(x)&&i!==x?i-x:(l.id||"").localeCompare(h.id||"")});return Xn(o)}function Ao(n,t){return n.map(s=>({...s,source:"imported",importedAt:t}))}function kt(n){var a,r;if(!n)return{};const t=xt(n.orgProfile);(r=(a=n.orgProfile)==null?void 0:a.cst)!=null&&r.pathway||(t.cst.pathway="pathway-1");const s=n.objectives||Io(n);return{...n,schemaVersion:n.schemaVersion||"2.0",orgProfile:t,objectives:Ls(s),auditLog:jo(n.auditLog,n.actionAuditLog,t),suppressedAutoActions:Fs(n.suppressedAutoActions),pathwayChecks:Bs(n.pathwayChecks)}}function ns(n,t){const s=Vn(n),a=kt(s),r=!!(s.objectives||s.componentActions),o=new Date().toISOString(),l=Ao(a.auditLog||[],o),h=Xn([...t.auditLog||[],...l]);return Wn({...t,orgProfile:a.orgProfile||t.orgProfile,currentDraft:a.currentDraft?bn(a.currentDraft):bn(t.currentDraft),objectives:r?a.objectives:t.objectives,auditLog:h,suppressedAutoActions:a.suppressedAutoActions||t.suppressedAutoActions,history:(a.history||t.history).map(i=>({...i,data:bn(i.data)})),phaseOverrides:a.phaseOverrides||t.phaseOverrides,pathwayChecks:a.pathwayChecks||t.pathwayChecks})}function ts(n,t,s=new Date){return{monthLabel:Eo(s),overallPercentage:t,data:bn(n)}}function bn(n){const t=St(n);return Object.keys(t).forEach(s=>{Object.keys(t[s]).forEach(a=>{t[s][a].actions=t[s][a].actions.map(r=>({...r,status:Me(r.status),notes:r.notes||"",evidence:r.evidence||"",linkedTargets:(r.linkedTargets||[]).map(o=>({componentId:o.componentId,lens:o.lens}))}))})}),t}function Ls(n){const t=vt(n||{});return Object.keys(t).forEach(s=>{t[s]=t[s].map(a=>({...a,owner:a.owner||"",timescale:a.timescale||"",notes:a.notes||"",evidence:a.evidence||"",linkedActions:(a.linkedActions||[]).map(r=>({lens:r.lens,actionId:r.actionId}))}))}),t}function Bs(n){return n?Object.keys(n).reduce((t,s)=>{const a=n[s]||{};return t[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},t},{}):{}}function Fs(n){return n?Object.keys(n).reduce((t,s)=>(t[s]=[...n[s]||[]],t),{}):{}}function Oo(n){return n?n.map(t=>({...t})):[]}const _o=`{
  "component": {
    "id": "BENEFITS",
    "name": "Benefits"
  },
  "outcomes": [
    {
      "id": "BEN_O1",
      "name": "Benefits and disbenefits have been identified and defined",
      "description": ""
    },
    {
      "id": "BEN_O2",
      "name": "Benefits are actively managed and monitored",
      "description": ""
    },
    {
      "id": "BEN_O3",
      "name": "Benefits are realised, evidenced and sustained",
      "description": ""
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
      "action": "Identify stakeholder groups likely to experience value from the change.",
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
      "action": "Review available evidence that may indicate potential benefits or value opportunities.",
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
      "action": "Document likely disbenefits, trade-offs and unintended consequences associated with the change.",
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
      "action": "Define measures, KPIs and reporting arrangements for each benefit.",
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
      "action": "Establish baseline measures against which benefits can be assessed.",
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
      "action": "Use stakeholder-facing benefit messages to build support and momentum.",
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
      "action": "Track benefit performance against agreed measures and targets.",
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
      "action": "Assess whether expected benefits are being achieved and why.",
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
      "action": "Manage dependencies that affect benefit delivery.",
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
      "action": "Share evidence of realised benefits with stakeholders.",
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
      "action": "Monitor stakeholder perceptions of realised value and improvement.",
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
      "action": "Use benefit stories and examples to reinforce adoption.",
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
      "action": "Continuously monitor long-term benefit performance.",
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
      "action": "Embed benefits management into normal business and performance management processes.",
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
      "action": "Use stakeholder feedback to identify opportunities for further value realisation.",
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
      "action": "Measure ongoing stakeholder perception of value delivered by the change.",
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
      "action": "Promote a culture of continuous benefits realisation and improvement.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,ss={"not started":0,emerging:1,developing:2,embedding:3,adopted:4,thriving:5};function jn(n){return n.trim().replace(/\s+/g," ").toLowerCase()}function Ms(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function as(n){return n.trim().toLowerCase()}function Ro(n){return n.replace(/&/g,"and").replace(/\s+/g," ").trim()}function Po(n){return typeof n=="string"&&Hn.includes(n)}function hn(n){if(!n)return null;try{return JSON.parse(n)}catch{return null}}function jt(n,t,s,a){let r=0,o=!1,l=!1;for(let h=a;h<n.length;h+=1){const i=n[h];if(o){if(l){l=!1;continue}if(i==="\\"){l=!0;continue}i==='"'&&(o=!1);continue}if(i==='"'){o=!0;continue}if(i===t){r+=1;continue}if(i===s&&(r-=1,r===0))return n.slice(a,h+1)}return null}function Do(n,t=0){const s=n.indexOf("{",t);return s<0?null:jt(n,"{","}",s)}function Us(n,t=0){const s=n.indexOf("[",t);return s<0?null:jt(n,"[","]",s)}function is(n,t){const s=n.toLowerCase().indexOf(t.toLowerCase());return s<0?null:Us(n,s)}function $o(n,t){const s=n.toLowerCase().indexOf(t.toLowerCase());return s<0?null:Do(n,s)}function To(n){const t=[];for(let s=0;s<n.length;s+=1){if(n[s]!=="{")continue;const a=jt(n,"{","}",s);if(!a)continue;const r=hn(a);r&&typeof r=="object"&&!Array.isArray(r)&&t.push(r),s+=a.length-1}return t}function Fn(n){return Array.isArray(n)?n.filter(t=>t&&typeof t=="object").map(t=>t).filter(t=>typeof t.id=="string"&&typeof t.name=="string"):[]}function En(n){return Array.isArray(n)?n.filter(t=>t&&typeof t=="object").map(t=>t).filter(t=>typeof t.fromStatus=="string"&&typeof t.toStatus=="string"&&typeof t.lens=="string"&&typeof t.action=="string"):[]}function Lo(n){const t=hn(n);let s=[],a=[];if(t&&typeof t=="object"&&!Array.isArray(t)){const o=t;s=Fn(o.outcomes),Array.isArray(o.actions)?a=En(o.actions):o.actions&&typeof o.actions=="object"&&(a=En(o.actions.actions))}else Array.isArray(t)&&(s=Fn(t));if(s.length||(s=Fn(hn(is(n,"outcomes")))),s.length||(s=Fn(hn(Us(n)))),a.length||(a=En(hn(is(n,"actions")))),!a.length){const o=hn($o(n,"actions"));a=En(o==null?void 0:o.actions)}const r=To(n);return a.length||(a=En(r)),s.length||(s=r.filter(o=>o&&typeof o=="object").map(o=>o).filter(o=>typeof o.id=="string"&&typeof o.name=="string"&&/_o\d+$/i.test(o.id)&&!("fromStatus"in o))),{outcomes:s,actions:a}}function os(n,t){const a=n.trim().toLowerCase().match(/o\d+$/);return a?`${t}:${a[0]}`:`${t}:${Ms(n)}`}function Bo(n,t){return`${n}:${t}`}function Fo(n){return n.includes(":auto-objective:")||n.startsWith("pathway:auto-objective:")}function Mo(n){return{...n,actions:(n.actions||[]).map(t=>({...t,linkedTargets:(t.linkedTargets||[]).map(s=>({...s}))}))}}function rs(){return{score:0,justification:"",evidence:"",actions:[]}}function At(n,t){return`${n}:${Ms(t.lens)}:${t.fromScore}-${t.toScore}:${t.actionIndex}`}function Uo(n,t,s){return{id:At(t,s),text:s.actionText,actionType:s.actionType,owner:"",timescale:"",status:"Planned",phase:1,startDate:"",dueDate:"",notes:"",evidence:"",readinessScore:s.fromScore,linkedTargets:[{componentId:n,lens:s.lens}]}}function Go(n,t){return{id:n.id,text:n.text,owner:(t==null?void 0:t.owner)||"",timescale:(t==null?void 0:t.timescale)||"",notes:(t==null?void 0:t.notes)||"",evidence:(t==null?void 0:t.evidence)||"",linkedActions:[]}}function Vo(n,t,s){const a=At(t,s),r=(n.actions||[]).find(h=>h.id===a);if(r)return r.id;const o=jn(s.actionText),l=(n.actions||[]).find(h=>jn(h.text||"")===o);return(l==null?void 0:l.id)||null}function Re(n,t){const{outcomes:s,actions:a}=Lo(n),r=s.map(h=>({id:os(String(h.id),t.outcomePrefix),text:String(h.name).trim()})),o=new Map;return{templates:a.reduce((h,i)=>{var _;const x=ss[as(String(i.fromStatus||""))],N=ss[as(String(i.toStatus||""))];if(x===void 0||N===void 0)return h;const k=Ro(String(i.lens||"")),p=((_=t.lensAliases)==null?void 0:_[k])||k,c=String(i.action||"").trim();if(!p||!c)return h;const m=`${p}:${x}-${N}`,O=o.get(m)||0;return o.set(m,O+1),h.push({lens:p,fromScore:x,toScore:N,actionIndex:O,actionText:c,actionType:Po(i.category)?i.category:void 0,outcomeIds:(i.outcomeIds||[]).map(b=>os(String(b),t.outcomePrefix))}),h},[]),outcomes:(r.length?r:t.fallbackOutcomes).slice(0,3)}}function Pe(n,t,s){const a={...n.currentDraft||{}},r={...n.objectives||{}},o=a[t.componentId]||{},l=`${t.outcomePrefix}:`,h=(r[t.componentId]||[]).filter(p=>p.id.startsWith(l)),i=(r[t.componentId]||[]).filter(p=>!p.id.startsWith(l)&&!Fo(p.id)),x=h.reduce((p,c)=>(p[c.id]=c,p),{}),N=Object.keys(o).reduce((p,c)=>(p[c]=Mo(o[c]||rs()),p),{});s.templates.forEach(p=>{var F;const c=N[p.lens]||rs(),m=new Set((c.actions||[]).map(L=>jn(L.text||""))),O=At(t.actionPrefix,p),_=Bo(t.componentId,p.lens),b=new Set(((F=n.suppressedAutoActions)==null?void 0:F[_])||[]),S=(c.actions||[]).some(L=>L.id===O),V=jn(p.actionText),C=b.has(O);c.actions=(c.actions||[]).map(L=>!(L.id===O||jn(L.text||"")===V)||L.readinessScore===p.fromScore?L:{...L,readinessScore:p.fromScore}),!S&&!m.has(V)&&!C&&(c.actions=[...c.actions||[],Uo(t.componentId,t.actionPrefix,p)]),N[p.lens]=c});const k=s.outcomes.map(p=>{const c=[];return s.templates.forEach(m=>{if(!m.outcomeIds.includes(p.id))return;const O=N[m.lens];if(!O)return;const _=Vo(O,t.actionPrefix,m);_&&c.push({lens:m.lens,actionId:_})}),{...Go(p,x[p.id]),linkedActions:c}});return{...n,currentDraft:{...a,[t.componentId]:N},objectives:{...r,[t.componentId]:[...i,...k]}}}const Gs={componentId:"benefits",actionPrefix:"benefits-action",outcomePrefix:"benefits:outcome",fallbackOutcomes:[{id:"benefits:outcome:o1",text:"Benefits and disbenefits have been identified and defined"},{id:"benefits:outcome:o2",text:"Benefits are actively managed and monitored"},{id:"benefits:outcome:o3",text:"Benefits are realised, evidenced and sustained"}],lensAliases:{"Strategic Direction and Leadership":"Planning and Risk","People Experience and Culture":"Process and Sustainment"}},Ho=Re(_o,Gs);function Wo(n){return Pe(n,Gs,Ho)}const qo=`{
  "component": {
    "id": "CAPABILITY_CONFIDENCE",
    "name": "Capability & Confidence"
  },
  "outcomes": [
    {
      "id": "CC_O1",
      "name": "Required capability levels have been defined and assessed",
      "description": "The organisation understands the capabilities needed to operate effectively in the future state and has assessed current capability gaps."
    },
    {
      "id": "CC_O2",
      "name": "People can perform confidently in the future state",
      "description": "Individuals are supported to apply knowledge and skills in practice and demonstrate increasing confidence in new ways of working."
    },
    {
      "id": "CC_O3",
      "name": "Capability and confidence are sustained and continuously improved",
      "description": "Capability levels are monitored, confidence is reinforced and continuous improvement mechanisms are in place."
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
      "action": "Define and document the future-state capabilities required for successful performance.",
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
      "action": "Provide coaching, mentoring and peer support for individuals applying new skills.",
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
      "action": "Assess practical capability through observation, walkthroughs or structured validation activities.",
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
    }
  ]
}
`,Vs={componentId:"capability",actionPrefix:"capability-action",outcomePrefix:"capability:outcome",fallbackOutcomes:[{id:"capability:outcome:o1",text:"Required capability levels have been defined and assessed"},{id:"capability:outcome:o2",text:"People can perform confidently in the future state"},{id:"capability:outcome:o3",text:"Capability and confidence are sustained and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Communication:"People Experience and Culture","Testing and Validation":"Skills and Behaviour"}},Yo=Re(qo,Vs);function Ko(n){return Pe(n,Vs,Yo)}const zo=`{
  "component": {
    "id": "CASE_FOR_CHANGE",
    "name": "Case for Change"
  },
  "outcomes": [
    {
      "id": "CFC_O1",
      "name": "The need for change has been clearly defined and evidenced",
      "description": "A clear, evidence-based explanation exists describing the problem, opportunity, risk or regulatory requirement that necessitates change."
    },
    {
      "id": "CFC_O2",
      "name": "The case for change is understood and accepted",
      "description": "Stakeholders understand why the change is required and recognise the relevance, urgency and importance of the issue being addressed."
    },
    {
      "id": "CFC_O3",
      "name": "The case for change remains credible and relevant",
      "description": "The rationale for change is regularly reviewed, supported by evidence, and reinforced through communications, governance and programme activity."
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
      "action": "Gather quantitative and qualitative evidence demonstrating the impact of the current situation.",
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
      "action": "Assess alignment between the proposed change and organisational objectives, strategies and priorities.",
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
      "category": "Design",
      "action": "Develop a structured case for change narrative explaining why change is required and why action is needed now.",
      "outcomeIds": [
        "CFC_O1",
        "CFC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Identify and secure sponsors and senior leaders who will champion the case for change.",
      "outcomeIds": [
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
      "action": "Refine and strengthen the case for change using evidence, stakeholder insight and feedback.",
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
      "action": "Obtain formal leadership and governance endorsement of the case for change.",
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
      "action": "Establish baseline measures that evidence the current problem or opportunity.",
      "outcomeIds": [
        "CFC_O1",
        "CFC_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "CFC_023",
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
      "id": "CFC_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate the case for change through engagement and communication activities.",
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
      "category": "Testing & Validation",
      "action": "Validate stakeholder understanding of the rationale for change.",
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
      "category": "Engagement",
      "action": "Address concerns, challenges and areas of misunderstanding relating to the need for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CFC_027",
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
      "id": "CFC_028",
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
      "id": "CFC_029",
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
      "id": "CFC_030",
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
      "id": "CFC_031",
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
      "id": "CFC_032",
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
      "id": "CFC_033",
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
      "id": "CFC_034",
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
      "id": "CFC_035",
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
      "id": "CFC_036",
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
      "id": "CFC_037",
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
      "id": "CFC_038",
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
      "id": "CFC_039",
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
      "id": "CFC_040",
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
      "id": "CFC_041",
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
      "id": "CFC_042",
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
      "id": "CFC_043",
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
      "id": "CFC_044",
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
      "id": "CFC_045",
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
      "id": "CFC_046",
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
      "id": "CFC_047",
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
      "id": "CFC_048",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Encourage teams to identify opportunities to build on the original case for change.",
      "outcomeIds": [
        "CFC_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,Hs={componentId:"case_for_change",actionPrefix:"case-for-change-action",outcomePrefix:"case-for-change:outcome",fallbackOutcomes:[{id:"case-for-change:outcome:o1",text:"The need for change has been clearly defined and evidenced"},{id:"case-for-change:outcome:o2",text:"The case for change is understood and accepted"},{id:"case-for-change:outcome:o3",text:"The case for change remains credible and relevant"}]},Jo=Re(zo,Hs);function Xo(n){return Pe(n,Hs,Jo)}const Qo=`{
  "component": {
    "id": "CHANGE_ADOPTION",
    "name": "Change Adoption"
  },
  "outcomes": [
    {
      "id": "CA_O1",
      "name": "Adoption expectations and measures have been defined",
      "description": "Clear adoption objectives, indicators, measures and monitoring mechanisms have been established."
    },
    {
      "id": "CA_O2",
      "name": "Adoption is actively monitored and supported",
      "description": "Adoption levels are measured, areas of low adoption are identified and targeted support is provided."
    },
    {
      "id": "CA_O3",
      "name": "Adoption is sustained and optimised",
      "description": "Changes are embedded into day-to-day operations and adoption insight is used to drive continuous improvement."
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
      "action": "Use local networks, champions and managers to support adoption activity.",
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
      "action": "Identify areas of strong adoption and areas requiring additional intervention.",
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
      "action": "Coordinate adoption activity with reinforcement, capability and benefits realisation activities.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Communication",
      "action": "Share evidence of successful adoption and realised improvements.",
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
      "category": "Testing & Validation",
      "action": "Validate that adopted behaviours and practices align with intended future-state outcomes.",
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
      "category": "Governance",
      "action": "Review adoption outcomes and improvement actions through governance processes.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_037",
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
      "id": "CA_038",
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
      "id": "CA_039",
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
      "id": "CA_040",
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
      "id": "CA_041",
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
      "id": "CA_042",
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
      "id": "CA_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "Embed adoption-focused behaviours and improvement practices into organisational culture.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,Ws={componentId:"change_adoption",actionPrefix:"change-adoption-action",outcomePrefix:"change-adoption:outcome",fallbackOutcomes:[{id:"change-adoption:outcome:o1",text:"Adoption expectations and measures have been defined"},{id:"change-adoption:outcome:o2",text:"Adoption is actively monitored and supported"},{id:"change-adoption:outcome:o3",text:"Adoption is sustained and optimised"}],lensAliases:{"Planning and Measurement":"Planning and Risk","Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","Skills and Behaviour":"Skills and Behaviour","People Experience and Culture":"Skills and Behaviour",Governance:"Planning and Risk",Design:"Planning and Risk",Reinforcement:"Skills and Behaviour"}},Zo=Re(Qo,Ws);function er(n){return Pe(n,Ws,Zo)}const nr=`{
  "component": {
    "id": "CHANGE_IMPACT",
    "name": "Change Impact"
  },
  "outcomes": [
    {
      "id": "CI_O1",
      "name": "The impact of the change has been identified and understood",
      "description": "There is a clear understanding of who and what will be affected by the change, including impacts on people, processes, roles, responsibilities, services, customers, stakeholders and business-as-usual operations."
    },
    {
      "id": "CI_O2",
      "name": "Impacts have been assessed, validated and prioritised",
      "description": "The scale, complexity, significance and variability of change impacts have been assessed and validated with affected stakeholders, enabling prioritisation of support and planning activity."
    },
    {
      "id": "CI_O3",
      "name": "Change impacts are actively managed through plans, governance and support",
      "description": "Impact insight is used to shape change plans, communications, engagement, learning, risk management, governance decisions and sustainment activity throughout the change lifecycle."
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
      "action": "Identify and document intended and unintended impacts that could affect performance, service continuity or stakeholder experience.",
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
      "componentId": "CHANGE_IMPACT",
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
      "componentId": "CHANGE_IMPACT",
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
      "componentId": "CHANGE_IMPACT",
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
      "componentId": "CHANGE_IMPACT",
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
      "componentId": "CHANGE_IMPACT",
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
      "componentId": "CHANGE_IMPACT",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Validate identified impacts with affected stakeholders and subject matter experts.",
      "outcomeIds": [
        "CI_O2"
      ],
      "readinessScore": 2
    }
  ]
}
`,qs={componentId:"change_impact",actionPrefix:"change-impact-action",outcomePrefix:"change-impact:outcome",fallbackOutcomes:[{id:"change-impact:outcome:o1",text:"The impact of the change has been identified and understood"},{id:"change-impact:outcome:o2",text:"Impacts have been assessed, validated and prioritised"},{id:"change-impact:outcome:o3",text:"Change impacts are actively managed through plans, governance and support"}]},tr=Re(nr,qs);function sr(n){return Pe(n,qs,tr)}const ar=`{
  "component": {
    "id": "CHANGE_NETWORK",
    "name": "Change Network"
  },
  "outcomes": [
    {
      "id": "CN_O1",
      "name": "A representative and effective change network has been established",
      "description": ""
    },
    {
      "id": "CN_O2",
      "name": "The change network actively enables engagement and adoption",
      "description": ""
    },
    {
      "id": "CN_O3",
      "name": "The change network is embedded and delivers ongoing value",
      "description": ""
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
      "action": "Discuss the concept of change champions and change agents with sponsors and stakeholder groups.",
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
      "action": "Identify individuals who may have influence, credibility or interest in supporting change locally.",
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
      "action": "Assess whether useful local networks, forums or communities already exist that could support change activities.",
      "outcomeIds": [
        "CN_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "CN_009",
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
      "id": "CN_010",
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
      "id": "CN_011",
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
      "id": "CN_012",
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
      "id": "CN_013",
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
      "id": "CN_014",
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
      "id": "CN_015",
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
      "id": "CN_016",
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
      "id": "CN_017",
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
      "id": "CN_018",
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
      "id": "CN_019",
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
      "id": "CN_020",
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
      "id": "CN_021",
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
      "id": "CN_022",
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
      "id": "CN_023",
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
      "id": "CN_024",
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
      "id": "CN_025",
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
      "id": "CN_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Enable network members to represent stakeholder concerns within programme discussions.",
      "outcomeIds": [
        "CN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CN_027",
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
      "id": "CN_028",
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
      "id": "CN_029",
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
      "id": "CN_030",
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
      "id": "CN_031",
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
      "id": "CN_032",
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
      "id": "CN_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Expand network involvement in implementation and decision-support activities.",
      "outcomeIds": [
        "CN_O2",
        "CN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CN_034",
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
      "id": "CN_035",
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
      "id": "CN_036",
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
      "id": "CN_037",
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
      "id": "CN_038",
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
      "id": "CN_039",
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
      "id": "CN_040",
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
      "id": "CN_041",
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
      "id": "CN_042",
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
      "id": "CN_043",
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
      "id": "CN_044",
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
      "id": "CN_045",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Embed change champion and change agent roles into organisational culture.",
      "outcomeIds": [
        "CN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CN_046",
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
      "id": "CN_047",
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
      "id": "CN_048",
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
`,Ys={componentId:"change_network",actionPrefix:"change-network-action",outcomePrefix:"change-network:outcome",fallbackOutcomes:[{id:"change-network:outcome:o1",text:"A representative and effective change network has been established"},{id:"change-network:outcome:o2",text:"The change network actively enables engagement and adoption"},{id:"change-network:outcome:o3",text:"The change network is embedded and delivers ongoing value"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Engagement:"People Experience and Culture","Analysis and Insight":"People Experience and Culture"}},ir=Re(ar,Ys);function or(n){return Pe(n,Ys,ir)}function ls(n){if(!n)return[];const t=n.split(/\s+/).filter(Boolean);if(t.length<2)return t;const s=t.slice(0,Math.ceil(t.length/2)).join(" "),a=t.slice(Math.ceil(t.length/2)).join(" ");return[s,a].filter(Boolean)}function rr(n){return n.getContext?n:n.canvas}function Qn(){return typeof document>"u"?!1:document.documentElement.dataset.nhsThemeMode==="dark"}function Ks(n,t,s,a={}){var h,i;const r=rr(t),o=(i=(h=Ve).getChart)==null?void 0:i.call(h,r);o&&o.destroy();const l={type:n,data:s,options:a};return new Ve(r,l)}function ht(n,t,s={}){var p,c,m,O,_,b;Ve.defaults.font.family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",Ve.defaults.font.size=12,Ve.defaults.elements.line.tension=.2,Ve.defaults.elements.point.radius=4,Ve.defaults.elements.point.hoverRadius=6;const a=Qn(),N={maintainAspectRatio:!0,responsive:!0,layout:{padding:56},plugins:{legend:{display:!0,position:"bottom"},tooltip:{enabled:!0,backgroundColor:a?"rgba(15,23,42,0.98)":"rgba(11,18,32,0.95)",titleColor:"#fff",bodyColor:"#fff"},centerText:""},elements:{line:{borderWidth:3,tension:.2,borderColor:a?"#63b3ff":"#005EB8",backgroundColor:a?"rgba(99,179,255,0.12)":"rgba(0,94,184,0.06)"},point:{radius:4,hoverRadius:6,backgroundColor:a?"rgba(144,205,244,0.95)":"rgba(11,122,184,0.95)"}},scales:{r:{beginAtZero:!0,grid:{color:a?"rgba(226,232,240,0.12)":"rgba(11,18,32,0.06)",lineWidth:1},angleLines:{color:a?"rgba(226,232,240,0.18)":"rgba(11,18,32,0.10)",lineWidth:1},ticks:{display:!1},pointLabels:{display:!1,color:a?"#e2e8f0":"#0b1220",font:{size:12,family:Ve.defaults.font.family},padding:10,callback:S=>ls(S).join(`
`)}}}},k={...N,...s,layout:{padding:56,...s.layout||{}},scales:{...N.scales||{},...s.scales||{},r:{...((p=N.scales)==null?void 0:p.r)||{},...((c=s.scales)==null?void 0:c.r)||{},pointLabels:{...((O=(m=N.scales)==null?void 0:m.r)==null?void 0:O.pointLabels)||{},...((b=(_=s.scales)==null?void 0:_.r)==null?void 0:b.pointLabels)||{},display:!1,callback:S=>ls(S).join(`
`)}}}};return Ks("radar",n,t,k)}function zs(n,t,s={}){const a=Qn(),r=a?"#e2e8f0":"#0b1220",o=a?"rgba(226,232,240,0.08)":"rgba(11,18,32,0.04)",l=a?"rgba(226,232,240,0.10)":"rgba(11,18,32,0.06)",h=a?"#63b3ff":"#005EB8";return Ks("line",n,t,{...{elements:{line:{borderWidth:2,tension:.2,borderColor:h,backgroundColor:a?"rgba(99,179,255,0.14)":"rgba(0,94,184,0.06)"},point:{radius:3,hoverRadius:5,backgroundColor:h}},scales:{x:{display:!0,grid:{color:o},ticks:{color:r,font:{size:11}}},y:{beginAtZero:!0,grid:{color:l},ticks:{color:r,font:{size:11}}}}},...s})}function lr(n){return typeof n.toBase64Image=="function"?n.toBase64Image():""}const cr={id:"radarCenterText",beforeDraw:n=>{var t;try{const s=n.ctx,r=(t=(n.options||{}).plugins)==null?void 0:t.centerText,o=(r==null?void 0:r.text)||r||"";if(!o)return;const l=String(n.config.type||"");if(l!=="radar"&&l!=="doughnut")return;s.save(),s.textAlign="center",s.textBaseline="middle";const h=n.width/2,i=n.height/2;if(l==="doughnut")s.font=(r==null?void 0:r.font)||"bold 20px Inter",s.fillStyle=(r==null?void 0:r.color)||"#005EB8",s.fillText(String(o),h,i-10),r!=null&&r.subText&&(s.font=(r==null?void 0:r.subFont)||"12px Inter",s.fillStyle=(r==null?void 0:r.subColor)||"#6b7280",s.fillText(String(r.subText),h,i+10));else{const x=Math.max(12,Math.round(Math.min(n.width,n.height)*.065)),N=`${x}px ${Ve.defaults.font.family}`;s.font=N,s.fillStyle=(r==null?void 0:r.color)||(Qn()?"#e2e8f0":"#0b1220");const k=String(o).split(`
`),p=x*1.05,c=(k.length-1)*-p/2;k.forEach((m,O)=>{s.fillText(m,h,i+c+O*p)})}s.restore()}catch{}}},dr={id:"radarPointLabelText",afterDraw:n=>{var t,s,a,r;try{const o=(t=n.scales)==null?void 0:t.r,l=(s=o==null?void 0:o.options)==null?void 0:s.pointLabels;if(!o||!l||n.config.type!=="radar")return;const h=n.ctx,i=Number(((a=l.font)==null?void 0:a.size)||Ve.defaults.font.size||12),x=((r=l.font)==null?void 0:r.family)||Ve.defaults.font.family||"Inter, sans-serif",N=l.color||(Qn()?"#e2e8f0":"#0b1220"),k=Number(l.padding??14),p=Array.isArray(o._pointLabels)?o._pointLabels:[];h.save(),h.textAlign="center",h.textBaseline="middle",h.fillStyle=N,h.font=`${i}px ${x}`,p.forEach((c,m)=>{const _=String(c??"").split(`
`).filter(Boolean);if(!_.length)return;const b=o.getPointPosition(m,o.drawingArea+k,0),S=i*1.15,V=(_.length-1)*-S/2,C=Math.max(i,_.length*S),F=i*6,L=F/2+4,ce=n.width-F/2-4,z=C/2+4,te=n.height-C/2-4,de=Math.min(Math.max(b.x,L),ce),ne=Math.min(Math.max(b.y,z),te);_.forEach((T,J)=>{const xe=ne+V+J*S;h.fillText(T,de,xe)})}),h.restore()}catch{}}};Ve.register(cr,dr);typeof window<"u"&&(window.NHSDigitalAdoption=window.NHSDigitalAdoption||{},window.NHSDigitalAdoption.Charts={createRadarChart:ht,createLineChart:zs,toBase64Image:lr});const ur=`{
  "component": {
    "id": "READINESS_PLANNING",
    "name": "Change Management Readiness & Planning"
  },
  "outcomes": [
    {
      "id": "RP_O1",
      "name": "Organisational readiness has been assessed",
      "description": "The organisation understands its current level of readiness, including strengths, weaknesses, barriers, dependencies and areas requiring additional support."
    },
    {
      "id": "RP_O2",
      "name": "A robust change management plan has been developed",
      "description": "A structured, evidence-based change management plan exists that reflects readiness findings, priorities, risks, impacts and dependencies."
    },
    {
      "id": "RP_O3",
      "name": "Readiness and planning activities actively support successful implementation",
      "description": "Readiness is continually reviewed and the change management plan is actively managed and adjusted in response to progress, issues and organisational needs."
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
      "id": "RP_0005",
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
      "action": "Gain initial agreement that readiness assessment and change management planning activities will be required.",
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
      "category": "Governance",
      "action": "Obtain approval of the change management plan through appropriate governance routes.",
      "outcomeIds": [
        "RP_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RP_022",
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
      "id": "RP_023",
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
      "id": "RP_024",
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
      "id": "RP_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Communication",
      "action": "Communicate implementation timelines, expected activities and preparation requirements.",
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
      "category": "Dependency Management",
      "action": "Align learning, communications, engagement and support activities with implementation milestones.",
      "outcomeIds": [
        "RP_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RP_027",
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
      "id": "RP_028",
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
      "action": "Validate organisational readiness before key implementation events and go-live activities.",
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
      "action": "Embed readiness reviews and change planning disciplines into organisational change delivery standards.",
      "outcomeIds": [
        "RP_O3"
      ],
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
      "category": "Reinforcement",
      "action": "Recognise teams and leaders that consistently demonstrate strong change preparedness and planning discipline.",
      "outcomeIds": [
        "RP_O3"
      ],
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
      "category": "Design",
      "action": "Continuously improve change planning templates, standards and guidance using organisational learning.",
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
      "action": "Embed proactive readiness assessment and planning as a routine part of organisational change delivery.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,Js={componentId:"cm_readiness",actionPrefix:"cm-readiness-action",outcomePrefix:"cm-readiness:outcome",fallbackOutcomes:[{id:"cm-readiness:outcome:o1",text:"Organisational readiness has been assessed"},{id:"cm-readiness:outcome:o2",text:"A robust change management plan has been developed"},{id:"cm-readiness:outcome:o3",text:"Readiness and planning activities actively support successful implementation"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Planning and Risk":"Planning and Risk","People Experience and Culture":"Planning and Risk","Skills and Behaviour":"Planning and Risk","Process and Sustainment":"Planning and Risk",Governance:"Planning and Risk",Reinforcement:"Planning and Risk"}},mr=Re(ur,Js);function gr(n){return Pe(n,Js,mr)}function pr(n,t){const s=(n||[]).map(r=>`${r.componentId}:${r.lens}`).sort(),a=(t||[]).map(r=>`${r.componentId}:${r.lens}`).sort();return s.length===a.length&&s.every((r,o)=>r===a[o])}function hr(n,t){return n.text===t.text&&(n.actionType||"")===(t.actionType||"")&&n.owner===t.owner&&n.timescale===t.timescale&&n.status===t.status&&(n.phase??null)===(t.phase??null)&&(n.guidanceUrl||"")===(t.guidanceUrl||"")&&(n.startDate||"")===(t.startDate||"")&&(n.dueDate||"")===(t.dueDate||"")&&(n.notes||"")===(t.notes||"")&&(n.evidence||"")===(t.evidence||"")&&(n.readinessScore??null)===(t.readinessScore??null)&&pr(n.linkedTargets,t.linkedTargets)}function fr(n){return`${n.text||"Untitled action"} - ${n.status}, owner: ${n.owner||"Unassigned"}`}function br(n,t){const s=n.map(r=>`${r.lens}:${r.actionId}`).sort(),a=t.map(r=>`${r.lens}:${r.actionId}`).sort();return s.length===a.length&&s.every((r,o)=>r===a[o])}function xr(n,t){return n.text===t.text&&n.owner===t.owner&&n.timescale===t.timescale&&(n.notes||"")===(t.notes||"")&&(n.evidence||"")===(t.evidence||"")&&br(n.linkedActions,t.linkedActions)}function Sr(n){return`${n.text||"Untitled objective"} - owner: ${n.owner||"Unassigned"}`}function Xs(n,t){return n.name===t.name&&n.role===t.role}function Kn(n){return n.role?`${n.name||"Unnamed"} - ${n.role}`:n.name||"Unnamed"}function vr(n,t){return n.score===t.score&&n.justification===t.justification&&n.evidence===t.evidence}function cs(n){const t=`Score ${n.score}`;return n.justification?`${t} - ${n.justification}`:t}function Zn(n,t,s,a,r,o){const l=new Map(t.map(N=>[N.id,N])),h=new Set(n.map(N=>N.id)),i=[];n.forEach(N=>{const k=l.get(N.id);k&&!s(N,k)&&i.push({id:`${a}:${N.id}`,label:r(N),mineSummary:o(N),theirsSummary:o(k)})});const x=t.filter(N=>!h.has(N.id)).length;return{conflicts:i,autoMergedCount:x,merge:N=>{const k=n.map(p=>{const c=l.get(p.id);return c&&N[`${a}:${p.id}`]==="theirs"?c:p});return t.forEach(p=>{h.has(p.id)||k.push(p)}),k}}}const ds=[{key:"trustName",label:"Trust name"},{key:"region",label:"Region"},{key:"trustType",label:"Trust type"},{key:"projectName",label:"Programme / project name"},{key:"leadName",label:"Lead submitter"}],us=[{key:"type",label:"CST type"},{key:"pathway",label:"Pathway"},{key:"goLiveDate",label:"Go live date"},{key:"fullAdoptionDate",label:"Full adoption date"},{key:"benefitRealizationDate",label:"Benefit realisation date"},{key:"toolkitChoice",label:"Default toolkit"}];function Qs(n,t){const s=[];return ds.forEach(({key:a,label:r})=>{const o=String(n[a]??""),l=String(t[a]??"");o!==l&&s.push({id:`profile:${String(a)}`,label:r,mineSummary:o||"(blank)",theirsSummary:l||"(blank)"})}),us.forEach(({key:a,label:r})=>{const o=String(n.cst[a]??""),l=String(t.cst[a]??"");o!==l&&s.push({id:`cst:${String(a)}`,label:r,mineSummary:o||"(blank)",theirsSummary:l||"(blank)"})}),{conflicts:s,autoMergedCount:0,merge:a=>{const r={...n};ds.forEach(({key:l})=>{a[`profile:${String(l)}`]==="theirs"&&(r[l]=t[l])});const o={...n.cst};return us.forEach(({key:l})=>{a[`cst:${String(l)}`]==="theirs"&&(o[l]=t.cst[l])}),{...r,cst:o}}}}function Zs(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a=[],r=[];let o=0;const l=new Map,h=new Map;return s.forEach(i=>{const x=n[i]||{},N=t[i]||{},k=new Set([...Object.keys(x),...Object.keys(N)]);h.set(i,k),k.forEach(p=>{const c=x[p],m=N[p],O=`${i}:${p}`;c&&m&&!vr(c,m)&&a.push({id:`entry:${O}`,label:`${i} / ${p}`,mineSummary:cs(c),theirsSummary:cs(m)});const _=Zn((c==null?void 0:c.actions)||[],(m==null?void 0:m.actions)||[],hr,`action:${O}`,b=>`${i} / ${p} - ${b.text||"Untitled action"}`,fr);r.push(..._.conflicts),o+=_.autoMergedCount,l.set(O,_)})}),{entryConflicts:a,actionConflicts:r,autoMergedActionCount:o,merge:i=>{const x={};return s.forEach(N=>{const k=n[N]||{},p=t[N]||{},c={};(h.get(N)||new Set).forEach(m=>{var C;const O=k[m],_=p[m],b=`${N}:${m}`;let S=O?{score:O.score,justification:O.justification,evidence:O.evidence}:{score:_.score,justification:_.justification,evidence:_.evidence};O&&_&&i[`entry:${b}`]==="theirs"&&(S={score:_.score,justification:_.justification,evidence:_.evidence});const V=((C=l.get(b))==null?void 0:C.merge(i))||[];c[m]={...S,actions:V}}),x[N]=c}),x}}}function ea(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a=[];let r=0;const o=new Map;return s.forEach(l=>{const h=Zn(n[l]||[],t[l]||[],xr,`objective:${l}`,i=>`${l} - ${i.text||"Untitled objective"}`,Sr);a.push(...h.conflicts),r+=h.autoMergedCount,o.set(l,h)}),{conflicts:a,autoMergedCount:r,merge:l=>{const h={};return s.forEach(i=>{var x;h[i]=((x=o.get(i))==null?void 0:x.merge(l))||[]}),h}}}function na(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a=[];let r=0;return s.forEach(o=>{const l=n[o],h=t[o];if(l===void 0||h===void 0){l===void 0&&h!==void 0&&(r+=1);return}l!==h&&a.push({id:`phase:${o}`,label:`Phase focus override - ${o}`,mineSummary:l,theirsSummary:h})}),{conflicts:a,autoMergedCount:r,merge:o=>{const l={...n};return s.forEach(h=>{const i=t[h];i!==void 0&&(n[h]===void 0||o[`phase:${h}`]==="theirs")&&(l[h]=i)}),l}}}function yr(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a={};return s.forEach(r=>{const o=n[r]||{},l=t[r]||{},h=new Set([...Object.keys(o),...Object.keys(l)]),i={};h.forEach(x=>{const N=x;i[N]=Array.from(new Set([...o[N]||[],...l[N]||[]]))}),a[r]=i}),a}function wr(n,t){const s=new Set([...Object.keys(n),...Object.keys(t)]),a={};return s.forEach(r=>{a[r]=Array.from(new Set([...n[r]||[],...t[r]||[]]))}),a}function Nr(n,t){const s=new Map;return t.forEach(a=>s.set(a.monthLabel,a)),n.forEach(a=>s.set(a.monthLabel,a)),Array.from(s.values())}function ta(n){const t=kt(n);return{theirsProfile:t.orgProfile||xt(),theirsDraft:t.currentDraft||{},theirsObjectives:t.objectives||{},theirsPhaseOverrides:t.phaseOverrides||{},theirsPathwayChecks:t.pathwayChecks||{},theirsSuppressedAutoActions:t.suppressedAutoActions||{},theirsAuditLog:t.auditLog||[],theirsHistory:(t.history||[]).map(s=>({...s,data:St(s.data)}))}}function Cr(n,t){const{theirsProfile:s,theirsDraft:a,theirsObjectives:r,theirsPhaseOverrides:o}=ta(t),l=Qs(n.orgProfile,s),h=Zn(n.orgProfile.teamMembers||[],s.teamMembers||[],Xs,"team",Kn,Kn),i=Zs(n.currentDraft,a),x=ea(n.objectives,r),N=na(n.phaseOverrides,o),k=[{id:"profile",title:"Organisation profile & CST settings",items:l.conflicts},{id:"team",title:"Team members",items:h.conflicts},{id:"assessments",title:"Assessments",items:i.entryConflicts},{id:"actions",title:"Lens actions",items:i.actionConflicts},{id:"objectives",title:"Objectives",items:x.conflicts},{id:"phaseFocus",title:"Phase focus overrides",items:N.conflicts}].filter(c=>c.items.length>0),p=[];return h.autoMergedCount&&p.push(`${h.autoMergedCount} new team member(s)`),i.autoMergedActionCount&&p.push(`${i.autoMergedActionCount} new action(s)`),x.autoMergedCount&&p.push(`${x.autoMergedCount} new objective(s)`),N.autoMergedCount&&p.push(`${N.autoMergedCount} new phase focus override(s)`),{sections:k,autoMergeSummary:p,hasConflicts:k.length>0}}function ms(n,t,s){const{theirsProfile:a,theirsDraft:r,theirsObjectives:o,theirsPhaseOverrides:l,theirsPathwayChecks:h,theirsSuppressedAutoActions:i,theirsAuditLog:x,theirsHistory:N}=ta(t),k=Qs(n.orgProfile,a),p=Zn(n.orgProfile.teamMembers||[],a.teamMembers||[],Xs,"team",Kn,Kn),c=Zs(n.currentDraft,r),m=ea(n.objectives,o),O=na(n.phaseOverrides,l),_={...n.orgProfile,...k.merge(s),teamMembers:p.merge(s)},b=new Date().toISOString(),S=x.map(C=>({...C,source:"imported",importedAt:b})),V=Xn([...n.auditLog||[],...S]);return Wn({...n,orgProfile:_,currentDraft:St(c.merge(s)),objectives:vt(m.merge(s)),auditLog:V,suppressedAutoActions:wr(n.suppressedAutoActions,i),history:Nr(n.history,N),phaseOverrides:O.merge(s),pathwayChecks:yr(n.pathwayChecks,h)})}const Er=`{
  "component": {
    "id": "ORG_CHANGE_READINESS",
    "name": "Org Change Readiness"
  },
  "outcomes": [
    {
      "id": "OCR_O1",
      "name": "Organisational readiness factors are understood",
      "description": "Readiness drivers, barriers, strengths, capacity constraints and organisational conditions affecting change success have been identified and assessed."
    },
    {
      "id": "OCR_O2",
      "name": "Readiness gaps are addressed and readiness is improved",
      "description": "Actions are implemented to strengthen readiness, remove barriers and increase organisational preparedness."
    },
    {
      "id": "OCR_O3",
      "name": "Organisational readiness supports successful and sustainable change",
      "description": "Readiness is actively managed, monitored and embedded into organisational change delivery."
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
      ]
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
      "action": "Strengthen leadership readiness to support and champion the change effectively.",
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
      "action": "Build manager readiness to coach, support and guide teams through the change.",
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
    }
  ]
}
`,sa={componentId:"org_maturity",actionPrefix:"org-change-readiness-action",outcomePrefix:"org-change-readiness:outcome",fallbackOutcomes:[{id:"org-change-readiness:outcome:o1",text:"Organisational readiness has been assessed and understood"},{id:"org-change-readiness:outcome:o2",text:"Readiness gaps are being actively addressed"},{id:"org-change-readiness:outcome:o3",text:"The organisation is prepared to successfully absorb and sustain the change"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"Skills and Behaviour","Planning and Measurement":"Skills and Behaviour",Design:"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Reinforcement:"Skills and Behaviour"}},Ir=Re(Er,sa);function kr(n){return Pe(n,sa,Ir)}const jr="pathway-auto-action:",Ar="pathway:auto-objective:",Or="vision:auto-objective:";function _r(n){return n.startsWith(Ar)||n.startsWith(Or)}function aa(n){const t=n.orgProfile.cst.pathway,s={...n.objectives||{}},a=Object.keys(n.currentDraft||{}).reduce((r,o)=>{const l=n.currentDraft[o]||{};return r[o]=Object.keys(l).reduce((h,i)=>{const x=l[i];return h[i]={...x,actions:(x.actions||[]).filter(N=>!N.id.startsWith(jr))},h},{}),r},{});return Jn.forEach(r=>{yt(r.id,t)&&(s[r.id]=(s[r.id]||[]).filter(l=>!_r(l.id)))}),{...n,currentDraft:a,objectives:s}}const Rr=`{
  "component": {
    "id": "PROCESS_CHANGE",
    "name": "Process Change"
  },
  "outcomes": [
    {
      "id": "PC_O1",
      "name": "Current and future processes have been defined",
      "description": ""
    },
    {
      "id": "PC_O2",
      "name": "Process changes have been implemented and adopted",
      "description": ""
    },
    {
      "id": "PC_O3",
      "name": "Processes are optimised and continuously improved",
      "description": ""
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
      "action": "Measure process performance against baseline and target measures.",
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
      "action": "Analyse process performance trends and identify opportunities for optimisation.",
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
      "action": "Validate that operational outcomes align with future-state process design objectives.",
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
      "action": "Share process improvements, successes and lessons learned.",
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
      "action": "Recognise teams contributing to successful process adoption and improvement.",
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
      "action": "Align process improvements with benefits realisation and adoption activities.",
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
      "action": "Continuously monitor process performance and operational outcomes.",
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
      "action": "Embed ownership for continuous process improvement into operational teams.",
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
      "action": "Promote a culture of process excellence, optimisation and continuous improvement.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,ia={componentId:"process_change",actionPrefix:"process-change-action",outcomePrefix:"process-change:outcome",fallbackOutcomes:[{id:"process-change:outcome:o1",text:"Current and future processes have been defined"},{id:"process-change:outcome:o2",text:"Process changes have been implemented and adopted"},{id:"process-change:outcome:o3",text:"Processes are optimised and continuously improved"}],lensAliases:{"Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Skills and Behaviour","Planning and Risk":"Process and Sustainment","Analysis and Insight":"Process and Sustainment",Communication:"Skills and Behaviour","Dependency Management":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment",Implementation:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"Skills and Behaviour","Testing and Validation":"Process and Sustainment"}},Pr=Re(Rr,ia);function Dr(n){return Pe(n,ia,Pr)}const $r=`{
  "component": {
    "id": "REINFORCEMENT",
    "name": "Reinforcement"
  },
  "outcomes": [
    {
      "id": "REINF_O1",
      "name": "Reinforcement strategy and sustainment measures are defined",
      "description": "A clear reinforcement approach is in place, including ownership, measures and dependencies needed to sustain adoption."
    },
    {
      "id": "REINF_O2",
      "name": "Reinforcement activities support sustained adoption and behaviour change",
      "description": "Reinforcement actions are actively delivered to embed desired behaviours, confidence and consistent use of new ways of working."
    },
    {
      "id": "REINF_O3",
      "name": "Sustained change outcomes are embedded and continuously improved",
      "description": "Reinforcement is monitored and adapted over time so that change outcomes are maintained, improved and integrated into BAU."
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
      "action": "Discuss with sponsors and leaders how the change will be sustained after go-live.",
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
      "action": "Begin raising awareness that reinforcement activities will be required after implementation.",
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
      "action": "Ensure leaders and managers visibly reinforce desired behaviours and ways of working.",
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
      "action": "Recognise and celebrate examples of successful adoption and positive behavioural change.",
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
      "category": "Communication",
      "action": "Share success stories, learning and examples of improvements created by the change.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_028",
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
      "id": "REINF_029",
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
      "id": "REINF_030",
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
      "id": "REINF_031",
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
      "id": "REINF_032",
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
      "id": "REINF_033",
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
      "id": "REINF_034",
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
      "id": "REINF_035",
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
      "id": "REINF_036",
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
      "id": "REINF_037",
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
      "id": "REINF_038",
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
      "id": "REINF_039",
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
      "id": "REINF_040",
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
      "id": "REINF_041",
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
      "id": "REINF_042",
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
      "id": "REINF_043",
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
`,oa={componentId:"reinforcement",actionPrefix:"reinforcement-action",outcomePrefix:"reinforcement:outcome",fallbackOutcomes:[{id:"reinforcement:outcome:o1",text:"Reinforcement strategy and sustainment measures are defined"},{id:"reinforcement:outcome:o2",text:"Reinforcement activities support sustained adoption and behaviour change"},{id:"reinforcement:outcome:o3",text:"Sustained change outcomes are embedded and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Strategic Direction and Leadership":"Process and Sustainment","Planning and Measurement":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"People Experience and Culture"}},Tr=Re($r,oa);function Lr(n){return Pe(n,oa,Tr)}const Br=`{
  "component": {
    "id": "RESISTANCE_MANAGEMENT",
    "name": "Resistance Management"
  },
  "outcomes": [
    {
      "id": "RES_O1",
      "name": "Potential sources of resistance have been identified and understood",
      "description": "Likely causes, drivers and sources of resistance have been assessed and documented."
    },
    {
      "id": "RES_O2",
      "name": "Strategies and interventions are in place to prevent and address resistance",
      "description": "Appropriate actions have been developed to reduce, prevent or respond to resistance."
    },
    {
      "id": "RES_O3",
      "name": "Resistance is actively managed and reduced throughout the change lifecycle",
      "description": "Resistance is monitored, addressed and used to inform change activities, resulting in increased support, advocacy and adoption."
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
      "action": "Explore previous organisational experiences that may influence reactions to the change.",
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
      "action": "Identify and document potential sources of resistance across stakeholder groups, teams and impacted areas.",
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
      "action": "Address misconceptions, rumours and misinformation through targeted communication activities.",
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
      "category": "Training & Learning",
      "action": "Prepare leaders and managers to identify, understand and respond to resistance effectively.",
      "outcomeIds": [
        "RES_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RES_024",
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
      "id": "RES_025",
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
      "id": "RES_026",
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
      "id": "RES_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Provide tailored responses and messaging for stakeholder groups showing elevated resistance.",
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
      "category": "Design",
      "action": "Refine resistance management interventions using stakeholder insight and feedback.",
      "outcomeIds": [
        "RES_O2",
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
      "category": "Reinforcement",
      "action": "Use visible leadership support to reinforce desired behaviours and address resistance.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RES_033",
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
      "id": "RES_034",
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
      "id": "RES_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise and highlight examples of positive adoption and support for the change.",
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
      "category": "Governance",
      "action": "Review resistance themes and organisational responses through governance and leadership forums.",
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
      "category": "Design",
      "action": "Refine resistance management plans based on implementation experience and lessons learned.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RES_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Measure long-term trends in support, advocacy, confidence and resistance.",
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
      "category": "Design",
      "action": "Use organisational learning to strengthen future resistance management approaches.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RES_041",
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
      "id": "RES_042",
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
      "id": "RES_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Embed behaviours that promote openness, feedback and constructive challenge during change.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,ra={componentId:"resistance",actionPrefix:"resistance-action",outcomePrefix:"resistance:outcome",fallbackOutcomes:[{id:"resistance:outcome:o1",text:"Potential sources of resistance have been identified and understood"},{id:"resistance:outcome:o2",text:"Strategies and interventions are in place to prevent and address resistance"},{id:"resistance:outcome:o3",text:"Resistance is actively managed and reduced throughout the change lifecycle"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour",Design:"Skills and Behaviour",Communication:"People Experience and Culture",Engagement:"People Experience and Culture",Reinforcement:"Skills and Behaviour"}},Fr=Re(Br,ra);function Mr(n){return Pe(n,ra,Fr)}const Ur=`{
  "component": {
    "id": "RISK_MANAGEMENT",
    "name": "Risk Management"
  },
  "outcomes": [
    {
      "id": "RM_O1",
      "name": "Change risks have been identified and assessed",
      "description": "Potential threats, barriers, uncertainties and vulnerabilities associated with the change have been identified, assessed and prioritised."
    },
    {
      "id": "RM_O2",
      "name": "Risk mitigation and management activities are in place",
      "description": "Appropriate controls, mitigation plans, ownership arrangements and monitoring processes have been implemented."
    },
    {
      "id": "RM_O3",
      "name": "Risks are proactively managed throughout the change lifecycle",
      "description": "Risks are reviewed regularly, acted upon promptly and used to inform governance, planning, readiness and implementation decisions."
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
      "lens": "Process & Sustainment",
      "category": "Engagement",
      "action": "Explore stakeholder perceptions of key concerns, risks and organisational vulnerabilities.",
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
      "category": "Analysis & Insight",
      "action": "Identify factors that could increase the likelihood of implementation, adoption or sustainment risks.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RM_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Gain initial agreement that change risks will need to be identified, assessed and actively managed.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RM_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Communication",
      "action": "Begin raising awareness of the importance of proactive risk management during change.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 0
    },
    {
      "id": "RM_008",
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
      "category": "Analysis & Insight",
      "action": "Conduct structured change risk assessment activities involving stakeholders and subject matter experts.",
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
      "action": "Assess and categorise identified risks according to likelihood, impact, urgency and priority.",
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
      "action": "Apply structured risk assessment techniques to analyse consequences and exposure levels.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_013",
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
      "id": "RM_014",
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
      "id": "RM_015",
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
      "id": "RM_016",
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
      "id": "RM_017",
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
      "id": "RM_018",
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
      "category": "Design",
      "action": "Use organisational learning to improve risk identification, assessment and mitigation approaches.",
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
      "category": "Risk Management",
      "action": "Maintain proactive scanning for emerging risks associated with ongoing change and continuous improvement.",
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
      "category": "Dependency Management",
      "action": "Continuously monitor strategic, operational and external dependencies that may create future risk exposure.",
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
`,la={componentId:"risk_management",actionPrefix:"risk-management-action",outcomePrefix:"risk-management:outcome",fallbackOutcomes:[{id:"risk-management:outcome:o1",text:"Change risks have been identified and assessed"},{id:"risk-management:outcome:o2",text:"Risk mitigation and management activities are in place"},{id:"risk-management:outcome:o3",text:"Risks are proactively managed throughout the change lifecycle"}],lensAliases:{"Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Strategic Direction and Leadership":"Planning and Risk","Skills and Behaviour":"Process and Sustainment",Governance:"Planning and Risk",Reinforcement:"Process and Sustainment"}},Gr=Re(Ur,la);function Vr(n){return Pe(n,la,Gr)}const Hr=`{
  "component": {
    "id": "SKILLS_LEARNING",
    "name": "Skills & Learning"
  },
  "outcomes": [
    {
      "id": "SL_O1",
      "name": "Future learning and capability requirements have been identified",
      "description": "The knowledge, skills and capability requirements needed to operate successfully in the future state have been assessed and documented."
    },
    {
      "id": "SL_O2",
      "name": "Learning interventions have been designed and delivered",
      "description": "Appropriate learning, development and support activities have been developed and delivered to affected stakeholders."
    },
    {
      "id": "SL_O3",
      "name": "Learning outcomes are achieved and sustained",
      "description": "People demonstrate the required knowledge and skills, and learning approaches are evaluated and continuously improved."
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
      "action": "Explore stakeholder views on likely learning preferences, barriers and support needs.",
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
      "action": "Assess dependencies between learning activities and communications, readiness, process and implementation plans.",
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
      "action": "Define the learning methods, channels and support mechanisms that will be used to deliver learning and development activities.",
      "outcomeIds": [
        "SL_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SL_011",
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
      "id": "SL_012",
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
      "id": "SL_013",
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
      "id": "SL_014",
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
      "id": "SL_015",
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
      "id": "SL_016",
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
      "id": "SL_017",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather learner feedback to improve learning content and delivery.",
      "outcomeIds": [
        "SL_O2",
        "SL_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "SL_018",
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
      "id": "SL_019",
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
      "id": "SL_020",
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
      "id": "SL_021",
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
      "id": "SL_022",
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
      "id": "SL_023",
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
      "id": "SL_024",
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
      "id": "SL_025",
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
      "id": "SL_026",
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
      "id": "SL_027",
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
      "id": "SL_028",
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
      "id": "SL_029",
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
      "id": "SL_030",
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
      "id": "SL_031",
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
      "id": "SL_032",
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
      "id": "SL_033",
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
      "id": "SL_034",
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
      "id": "SL_035",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Promote a culture of continuous learning and development across the organisation.",
      "outcomeIds": [
        "SL_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,ca={componentId:"skills_learning",actionPrefix:"skills-learning-action",outcomePrefix:"skills-learning:outcome",fallbackOutcomes:[{id:"skills-learning:outcome:o1",text:"Future learning and capability requirements have been identified"},{id:"skills-learning:outcome:o2",text:"Learning interventions have been designed and delivered"},{id:"skills-learning:outcome:o3",text:"Learning outcomes are achieved and sustained"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Process and Sustainment":"Skills and Behaviour",Governance:"Skills and Behaviour",Communication:"People Experience and Culture",Reinforcement:"Skills and Behaviour",Design:"Skills and Behaviour","Dependency Management":"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour","Testing and Validation":"Skills and Behaviour"}},Wr=Re(Hr,ca);function qr(n){return Pe(n,ca,Wr)}const Yr=`{
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
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "SSG_0002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Begin discussions with senior leaders regarding their role in sponsoring and supporting the change.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "SSG_0003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify high-level governance, decision-making and sponsorship risks that may affect delivery.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "SSG_001",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Confirm executive sponsors, the Senior Responsible Owner and governance responsibilities required to support the change.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 1
    },
    {
      "id": "SSG_002",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Define and document sponsor roles, responsibilities, decision-making authorities and escalation routes.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 1
    },
    {
      "id": "SSG_003",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Establish governance structures, forums and reporting arrangements to oversee change delivery.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 1
    },
    {
      "id": "SSG_004",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Assess sponsor commitment, visibility and willingness to actively support the change.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 1
    },
    {
      "id": "SSG_005",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess stakeholder confidence in leadership support and sponsorship effectiveness.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 1
    },
    {
      "id": "SSG_006",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate sponsorship arrangements and leadership expectations across affected stakeholder groups.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 1
    },
    {
      "id": "SSG_007",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Identify sponsorship and governance risks that could affect delivery, adoption or benefits realisation.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 1
    },
    {
      "id": "SSG_008",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Assess dependencies between governance effectiveness and other change management workstreams.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 1
    },
    {
      "id": "SSG_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Define measures and indicators that will be used to monitor sponsorship and governance effectiveness.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 1
    },
    {
      "id": "SSG_010",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Operate governance forums and decision-making processes in accordance with agreed governance arrangements.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "SSG_011",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "Ensure sponsors actively champion the change and visibly demonstrate commitment to the future state.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "SSG_012",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Use governance processes to review progress, resolve issues and support timely decision-making.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "SSG_013",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Increase sponsor visibility through communications, engagement activities and leadership interactions.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "SSG_014",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Support sponsors and leaders to engage directly with stakeholder groups affected by the change.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "SSG_015",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Training & Learning",
      "action": "Prepare sponsors and leaders to carry out sponsorship responsibilities effectively.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "SSG_016",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Implement actions to address sponsorship, governance and decision-making risks.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "SSG_017",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Monitor governance effectiveness and sponsor engagement against agreed measures.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "SSG_018",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Align governance activities with implementation milestones, programme plans and change management priorities.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "SSG_019",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Demonstrate effective governance"
    }
  ]
}
`,da={componentId:"sponsorship",actionPrefix:"sponsorship-action",outcomePrefix:"sponsorship:outcome",fallbackOutcomes:[{id:"sponsorship:outcome:o1",text:"Clear sponsorship and governance structures are established"},{id:"sponsorship:outcome:o2",text:"Sponsors actively lead and champion the change"},{id:"sponsorship:outcome:o3",text:"Governance and sponsorship drive successful delivery"}]},Kr=Re(Yr,da);function zr(n){return Pe(n,da,Kr)}const Jr=`{
  "component": {
    "id": "STAKEHOLDER_ENGAGEMENT_COMMS",
    "name": "Stakeholder Engagement & Comms"
  },
  "outcomes": [
    {
      "id": "SEC_O1",
      "name": "Stakeholders have been identified, analysed and prioritised",
      "description": "Stakeholders are understood, segmented and prioritised according to their influence, impact, needs and level of involvement."
    },
    {
      "id": "SEC_O2",
      "name": "Stakeholders are actively engaged and informed",
      "description": "Stakeholders receive appropriate communication, have opportunities to participate, and can provide feedback throughout the change lifecycle."
    },
    {
      "id": "SEC_O3",
      "name": "Engagement and communications support successful adoption",
      "description": "Stakeholder insight, engagement and communications are actively managed, measured and adapted to support sustained change adoption."
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
      "action": "Begin communicating the purpose of the change and the importance of stakeholder involvement.",
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
      "category": "Communication",
      "action": "Implement targeted communications tailored to different stakeholder groups.",
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
      "category": "Engagement",
      "action": "Implement stakeholder engagement activities using appropriate channels and methods.",
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
      "action": "Develop a detailed stakeholder engagement and communications plan.",
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
      "action": "Equip sponsors, managers and change agents with communication materials and engagement guidance.",
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
      "action": "Use stakeholder representatives, champions and networks to strengthen engagement activity.",
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
      "action": "Refine engagement and communication approaches using evidence, insight and lessons learned.",
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
    }
  ]
}
`,ua={componentId:"stakeholder",actionPrefix:"stakeholder-action",outcomePrefix:"stakeholder:outcome",fallbackOutcomes:[{id:"stakeholder:outcome:o1",text:"Stakeholders have been identified, analysed and prioritised"},{id:"stakeholder:outcome:o2",text:"Stakeholders are actively engaged and informed"},{id:"stakeholder:outcome:o3",text:"Engagement and communications support successful adoption"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Reinforcement:"People Experience and Culture"}},Xr=Re(Jr,ua);function Qr(n){return Pe(n,ua,Xr)}const cn=class cn{constructor(){this.assessment={},this.adoption={}}static getInstance(){return cn.instance||(cn.instance=new cn),cn.instance}loadFromWindow(){var a;const t=window,s=t.assessmentState||((a=t.NHSDigitalAdoption)==null?void 0:a.AppState);s&&(this.assessment={...this.assessment,...s})}};cn.instance=null;let zn=cn;const Zr="nhs-storage-error",gs=45e5;function ft(n,t,s){if(typeof window>"u"||typeof window.dispatchEvent!="function")return;const a=s instanceof Error?s.message:String(s);window.dispatchEvent(new CustomEvent(Zr,{detail:{operation:n,key:t,message:a}}))}function gn(n,t){try{const s=JSON.stringify(t);if(s.length>gs){const a=new Error(`Serialized payload for key "${n}" exceeds ${gs} bytes.`);return console.warn("storage.save payload too large",a),ft("save",n,a),!1}return localStorage.setItem(n,s),!0}catch(s){return console.warn("storage.save failed",s),ft("save",n,s),!1}}function ln(n){try{const t=localStorage.getItem(n);return t?JSON.parse(t):null}catch(t){return console.warn("storage.load failed",t),ft("load",n,t),null}}const el=`{
  "component": {
    "id": "TRANSFER_TO_BAU",
    "name": "Transfer to BAU"
  },
  "outcomes": [
    {
      "id": "BAU_O1",
      "name": "Operational ownership and accountability have been established",
      "description": ""
    },
    {
      "id": "BAU_O2",
      "name": "Business-as-usual capabilities and support arrangements are in place",
      "description": ""
    },
    {
      "id": "BAU_O3",
      "name": "The change is fully embedded within normal operational management",
      "description": ""
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
      "id": "BAU_0003",
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
      "action": "Identify and confirm future operational owners for the change, associated processes and ongoing outcomes.",
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
      "action": "Engage future operational owners to validate expectations, responsibilities and support requirements.",
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
`,ma={componentId:"transfer_bau",actionPrefix:"transfer-bau-action",outcomePrefix:"transfer-bau:outcome",fallbackOutcomes:[{id:"transfer-bau:outcome:o1",text:"Operational ownership and accountability have been established"},{id:"transfer-bau:outcome:o2",text:"Business-as-usual capabilities and support arrangements are in place"},{id:"transfer-bau:outcome:o3",text:"The change is fully embedded within normal operational management"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Process and Sustainment":"Process and Sustainment","Planning and Risk":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Skills and Behaviour":"Process and Sustainment",Governance:"Strategic Direction and Leadership","Measurement and Evaluation":"Process and Sustainment",Implementation:"Process and Sustainment","Risk Management":"Process and Sustainment",Design:"Process and Sustainment","Dependency Management":"Process and Sustainment",Reinforcement:"Process and Sustainment"}},nl=Re(el,ma);function tl(n){return Pe(n,ma,nl)}const sl=`{
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
      "name": "The vision is understood and shared"
    },
    {
      "id": "VISION_O3",
      "name": "The vision is visible and guides the change"
    }
  ],
  "actions": [
    {
      "id": "VISION_001",
      "componentId": "VISION",
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
      "id": "VISION_002",
      "componentId": "VISION",
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
      "id": "VISION_003",
      "componentId": "VISION",
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
      "id": "VISION_004",
      "componentId": "VISION",
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
      "id": "VISION_005",
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "id": "VISION_007",
      "componentId": "VISION",
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
      "id": "VISION_008",
      "componentId": "VISION",
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
      "id": "VISION_009",
      "componentId": "VISION",
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
      "id": "VISION_010",
      "componentId": "VISION",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Ensure representation from key stakeholder groups in early vision discussions.",
      "outcomeIds": [
        "VISION_O1",
        "VISION_O2"
      ],
      "readinessScore": 0
    },
    {
      "id": "VISION_011",
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
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
      "componentId": "VISION",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Integrate the vision into programme decision-making and governance discussions.",
      "outcomeIds": [
        "VISION_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "VISION_033",
      "componentId": "VISION",
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
      "componentId": "VISION",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Training & Learning",
      "action": "Provide coaching to sponsors and leaders on vision-led leadership behaviours.",
      "outcomeIds": [
        "VISION_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "VISION_035",
      "componentId": "VISION",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Measure leadership engagement in promoting the vision.",
      "outcomeIds": [
        "VISION_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "VISION_036",
      "componentId": "VISION",
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
      "id": "VISION_037",
      "componentId": "VISION",
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
      "id": "VISION_038",
      "componentId": "VISION",
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
      "id": "VISION_039",
      "componentId": "VISION",
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
      "id": "VISION_040",
      "componentId": "VISION",
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
      "id": "VISION_041",
      "componentId": "VISION",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Embed the vision into organisational planning, governance and decision-making processes.",
      "outcomeIds": [
        "VISION_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "VISION_042",
      "componentId": "VISION",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Ensure leaders consistently reference the vision when making strategic and operational decisions.",
      "outcomeIds": [
        "VISION_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "VISION_043",
      "componentId": "VISION",
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
      "id": "VISION_044",
      "componentId": "VISION",
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
      "id": "VISION_045",
      "componentId": "VISION",
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
      "id": "VISION_046",
      "componentId": "VISION",
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
      "id": "VISION_047",
      "componentId": "VISION",
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
      "id": "VISION_048",
      "componentId": "VISION",
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
      "id": "VISION_049",
      "componentId": "VISION",
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
      "id": "VISION_050",
      "componentId": "VISION",
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
      "id": "VISION_051",
      "componentId": "VISION",
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
`,ga={componentId:"vision",actionPrefix:"vision-action",outcomePrefix:"vision:outcome",fallbackOutcomes:[{id:"vision:outcome:o1",text:"A compelling future state has been defined"},{id:"vision:outcome:o2",text:"The vision is understood and shared"},{id:"vision:outcome:o3",text:"The vision is visible and guides the change"}]},al=Re(sl,ga);function il(n){return Pe(n,ga,al)}const ps="nhs-digital-adoption-user-settings",hs="nhs-digital-adoption-report-reminder-dismissed",fs="nhs-digital-adoption-engagement",ct="nhs-digital-adoption-onboarding-seen",bs="nhs-digital-adoption-current-user-id",xs="Default",ol=5*1024*1024,rl=new Set(["application/json","text/json"]),ll="Unknown user",cl=["#005eb8","#003366","#009b8a","#6c28d9","#059669","#dc2626"],dl={name:"",preferences:"",themeColor:"#005eb8",profileImageDataUrl:"",darkMode:!1,colorAccessibilityMode:"standard",phaseFocusMode:"auto",manualPhaseFocus:1,hideGuidedWorkflow:!1},ul={xp:0,level:1,checkIns:{},emailDraftOpens:0,highlightLayoutSaves:0,onTimeFinalisations:0,lateFinalisations:0};function ml(n){return{...n,linkedTargets:(n.linkedTargets||[]).map(t=>({componentId:t.componentId,lens:t.lens}))}}function gl(n,t){return`${n}:${t}`}function pl(n){return n.orgProfile.trustName||n.orgProfile.projectName?!1:!Object.values(n.currentDraft).some(t=>Object.values(t).some(s=>s.score>0))}function nn(n){return aa(tl(kr(Lr(Dr(Ko(er(qr(Mr(Qr(gr(Vr(or(sr(Wo(zr(Xo(il(n))))))))))))))))))}function hl(n){return n.trim()||ll}function fl(n,t,s){var r;const a=Xa[n];return((r=a==null?void 0:a[t])==null?void 0:r[s])||Qt[s]||Qt[0]}function bl(n=new Date){const t=String(n.getMonth()+1).padStart(2,"0");return`${n.getFullYear()}-${t}`}function xl(n=new Date){return new Date(n.getFullYear(),n.getMonth()-1,1).toLocaleString("en-GB",{month:"short",year:"numeric"})}function Sl(n,t,s){return["Monthly Adoption Reporting Reminder","","Organisation",`${t||"Unconfigured Trust"}${s?` / ${s}`:""}`,"","Action Required",`Please finalise the ${n} adoption month if it has not already been captured.`,"","Attached","Point-in-time JSON report export generated from the latest working draft.","","Next Step","Review, confirm finalisation status, and circulate to the team."].join(`
`)}function vl(n){const t=new TextEncoder().encode(n);let s="";return t.forEach(a=>{s+=String.fromCharCode(a)}),window.btoa(s)}function yl(n,t=76){const s=[];for(let a=0;a<n.length;a+=t)s.push(n.slice(a,a+t));return s.join(`\r
`)}function bt(n=new Date){return n.toISOString().slice(0,10)}function wl(n=new Date){const t=n.getDate(),s=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();return t>=s-6}function Nl(n=new Date){return n.toLocaleString("en-GB",{month:"short",year:"numeric"})}function pa(n){return Math.max(1,Math.min(12,Math.floor(n/120)+1))}function In(n,t){const s=n.xp+t;return{...n,xp:s,level:pa(s)}}function Cl(n,t){const s=n*30+Math.min(t,20)*4;return s>=170?"S":s>=130?"A":s>=95?"B":s>=60?"C":s>=30?"D":"E"}function El(n,t=new Date){let s=0;const a=new Date(t);let r=bt(a);for(;n[r];)s+=1,a.setDate(a.getDate()-1),r=bt(a);return s}function Il(n){const t=window.prompt(`Phase ${n} has changed. Enter delivery readiness grade (${Mn.join("/")}).`,"C");if(!t)return null;const s=t.trim().toUpperCase();if(!Mn.includes(s))return window.alert(`Invalid competence grade. Use one of ${Mn.join(", ")}.`),null;const a=window.prompt(`Enter confidence score for Phase ${n} (${Un.join("-")}, where 1 is low and 5 is very high).`,"3");if(!a)return null;const r=Number(a.trim());return Un.includes(r)?{competence:s,confidence:r}:(window.alert(`Invalid confidence score. Use a number from ${Un.join(" to ")}.`),null)}function Dl(){var Ot,_t;const n=Jn,t=g.useMemo(()=>[...Ya],[]),[s,a]=g.useState("dashboard"),[r,o]=g.useState(n[0].id),[l,h]=g.useState(()=>typeof window>"u"?!0:window.innerWidth>=1024),[i,x]=g.useState(()=>{var W,B,Y,q,oe,we,Ne,re;const u=zn.getInstance();u.loadFromWindow();let v={};try{const Ce=ln(Zt);v=kt(Vn(Ce))}catch(Ce){console.warn("Ignoring invalid persisted adoption data.",Ce)}const M=Wn({view:"dashboard",orgProfile:(v==null?void 0:v.orgProfile)||((W=u.adoption)==null?void 0:W.orgProfile),currentDraft:(v==null?void 0:v.currentDraft)||((B=u.adoption)==null?void 0:B.currentDraft),objectives:(v==null?void 0:v.objectives)||((Y=u.adoption)==null?void 0:Y.objectives),suppressedAutoActions:(v==null?void 0:v.suppressedAutoActions)||((q=u.adoption)==null?void 0:q.suppressedAutoActions),auditLog:(v==null?void 0:v.auditLog)||((oe=u.adoption)==null?void 0:oe.auditLog),history:(v==null?void 0:v.history)||((we=u.adoption)==null?void 0:we.history),phaseOverrides:(v==null?void 0:v.phaseOverrides)||((Ne=u.adoption)==null?void 0:Ne.phaseOverrides),pathwayChecks:(v==null?void 0:v.pathwayChecks)||((re=u.adoption)==null?void 0:re.pathwayChecks)});return M.orgProfile.cstId||(M.orgProfile={...M.orgProfile,cstId:Dt()}),nn(M)}),[N,k]=g.useState({}),[p,c]=g.useState(""),[m,O]=g.useState(()=>ln(bs)||""),[_,b]=g.useState(null),[S,V]=g.useState(()=>{const u=ln(ps);return{...dl,...u}}),[C,F]=g.useState(()=>{const u=ln(fs);return{...ul,...u,level:pa((u==null?void 0:u.xp)||0),checkIns:(u==null?void 0:u.checkIns)||{}}}),L=Cn.useRef(null),ce=Cn.useRef(null),[z,te]=g.useState(""),de=Cn.useRef(null),ne=g.useMemo(()=>bl(),[]),T=g.useMemo(()=>bt(),[]),[J,xe]=g.useState(()=>ln(hs)||{}),[Ee,A]=g.useState(()=>!!ln(ct)),[se,Q]=g.useState(()=>!ln(ct)),[w,R]=g.useState(!0),[X,Z]=g.useState([]),[Ie,ee]=g.useState(!1),Se=Cn.useRef({}),he=g.useCallback(()=>{Q(!1),Ee||(A(!0),gn(ct,!0))},[Ee]),fe=g.useMemo(()=>{const u=new Date,v=xl(u),M=u.getDate()===1,W=i.history.some(B=>B.monthLabel===v);return{previousMonthLabel:v,isFirstDayOfMonth:M,hasFinalisedPreviousMonth:W,shouldNotify:M&&!W}},[i.history]),[f,j]=g.useState("test@test.com"),[E,D]=g.useState(""),[U,je]=g.useState(""),ke=Nl(),De=wl(),Oe=g.useCallback((u,v)=>(i.currentDraft[u]||(i.currentDraft[u]={}),i.currentDraft[u][v]||(i.currentDraft[u][v]=st()),i.currentDraft[u][v]),[i]),ae=g.useMemo(()=>{const u=$t(i,n);return{...u,nextSteps:u.nextSteps.map(v=>({...v,toolkitLinks:qn(xs,v.componentId,"inputs").slice(0,3)}))}},[i]),Je=S.phaseFocusMode==="manual"&&S.manualPhaseFocus?S.manualPhaseFocus:ae.currentPhase,y=Ba(i,u=>dt(u)||n[0],Oe).sort((u,v)=>{const M=u.action.owner.localeCompare(v.action.owner);return M!==0?M:u.component.localeCompare(v.component)});g.useEffect(()=>{gn(Zt,i);const u=zn.getInstance();u.adoption={orgProfile:i.orgProfile,currentDraft:i.currentDraft,objectives:i.objectives,suppressedAutoActions:i.suppressedAutoActions,auditLog:i.auditLog,history:i.history,phaseOverrides:i.phaseOverrides,pathwayChecks:i.pathwayChecks}},[i]),g.useEffect(()=>{gn(ps,S)},[S]),g.useEffect(()=>{gn(bs,m)},[m]),g.useEffect(()=>{gn(fs,C)},[C]),g.useEffect(()=>{gn(hs,J)},[J]),g.useEffect(()=>{D(`Action required: finalise ${fe.previousMonthLabel} adoption report`),je(Sl(fe.previousMonthLabel,i.orgProfile.trustName,i.orgProfile.projectName||""))},[fe.previousMonthLabel,i.orgProfile.projectName,i.orgProfile.trustName]),g.useEffect(()=>{s==="dashboard"&&L.current&&setTimeout(()=>{var M,W,B;const u=(M=L.current)==null?void 0:M.querySelector("#adoption-radar-chart");if(u){const Y=Ta(i,t,n,Oe);ht(u,Y)}const v=(W=L.current)==null?void 0:W.querySelector("#adoption-component-radar-chart");if(v){const Y=La(n,Oe,Je);ht(v,Y,{scales:{r:{min:0,max:5,ticks:{display:!0,stepSize:1,backdropColor:"transparent"}}}})}if(i.history.length>0){const Y=(B=L.current)==null?void 0:B.querySelector("#adoption-line-chart");if(Y){const q={labels:i.history.map(oe=>oe.monthLabel),datasets:[{label:"Adoption Score",data:i.history.map(oe=>oe.overallPercentage||0),borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",fill:!0,tension:.4}]};zs(Y,q)}}},100)},[s,i,Oe,t,n,Je]),g.useEffect(()=>{const u=()=>{h(window.innerWidth>=1024)};return u(),window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)}},[]),g.useEffect(()=>{typeof document<"u"&&(document.documentElement.dataset.nhsThemeMode=S.darkMode?"dark":"light")},[S.darkMode]),g.useEffect(()=>{var v;const u=s==="assessment"?`component:${r}`:`view:${s}`;(v=Se.current[u])==null||v.scrollIntoView({block:"nearest",behavior:"smooth"})},[r,s]);const G=()=>typeof window>"u"?!1:window.innerWidth<1024,K=g.useCallback(()=>{var u;(u=ce.current)==null||u.scrollTo({top:0,behavior:"auto"})},[]),ie=g.useCallback(u=>{a(v=>v===u?v:(Z(M=>[v,...M].slice(0,20)),u)),G()&&h(!1)},[]),ve=u=>{ie(u)},ye=g.useCallback(()=>{Z(u=>{const[v,...M]=u;return v?(a(v),window.innerWidth<1024&&h(!1),M):(window.location.hash="#/",u)})},[]),pe=g.useCallback(u=>{dt(u)&&(o(u),ie("assessment"),K())},[ie,K]);g.useEffect(()=>{K()},[K,s]);function le(u,v){if(!v.length)return u.auditLog;const M=hl(S.name||""),W=v.map(B=>mo({actor:M,eventType:B.eventType,entityType:B.entityType,entityId:B.entityId,summary:B.summary,trustName:B.trustName??u.orgProfile.trustName,projectName:B.projectName??u.orgProfile.projectName,componentId:B.componentId,lens:B.lens,reason:B.reason,before:B.before,after:B.after,source:B.source,importedAt:B.importedAt}));return Xn([...u.auditLog||[],...W])}const Ue=g.useCallback((u,v,M)=>{x(W=>{var Ne;const B=((Ne=W.currentDraft[u])==null?void 0:Ne[v])||st(),Y={...W,currentDraft:{...W.currentDraft,[u]:{...W.currentDraft[u],[v]:Cs(M)}}},q=[];B.score!==M.score&&q.push({eventType:"entry-score-updated",entityType:"entry",entityId:`${u}:${v}`,summary:`Updated readiness score for ${u} / ${v}: ${B.score} -> ${M.score}`,componentId:u,lens:v,before:{score:B.score},after:{score:M.score},source:"local"}),(B.justification||"")!==(M.justification||"")&&q.push({eventType:"entry-justification-updated",entityType:"entry",entityId:`${u}:${v}`,summary:`Updated justification for ${u} / ${v}`,componentId:u,lens:v,before:{justification:B.justification||""},after:{justification:M.justification||""},source:"local"}),(B.evidence||"")!==(M.evidence||"")&&q.push({eventType:"entry-evidence-updated",entityType:"entry",entityId:`${u}:${v}`,summary:`Updated evidence for ${u} / ${v}`,componentId:u,lens:v,before:{evidence:B.evidence||""},after:{evidence:M.evidence||""},source:"local"});const oe=new Map(B.actions.map(re=>[re.id,re]));return M.actions.forEach(re=>{const Ce=oe.get(re.id);if(!Ce){q.push({eventType:"action-created",entityType:"action",entityId:re.id,summary:`Created action in ${u} / ${v}`,componentId:u,lens:v,after:{text:re.text,status:re.status,owner:re.owner,actionType:re.actionType},source:"local"});return}const un=JSON.stringify({text:Ce.text,status:Ce.status,owner:Ce.owner,actionType:Ce.actionType,notes:Ce.notes,dueDate:Ce.dueDate,startDate:Ce.startDate,evidence:Ce.evidence}),Ke=JSON.stringify({text:re.text,status:re.status,owner:re.owner,actionType:re.actionType,notes:re.notes,dueDate:re.dueDate,startDate:re.startDate,evidence:re.evidence});un!==Ke&&q.push({eventType:"action-updated",entityType:"action",entityId:re.id,summary:`Updated action in ${u} / ${v}`,componentId:u,lens:v,before:{text:Ce.text,status:Ce.status,owner:Ce.owner,actionType:Ce.actionType},after:{text:re.text,status:re.status,owner:re.owner,actionType:re.actionType},source:"local"})}),{...nn(Y),auditLog:le(W,q)}})},[le]),We=g.useCallback((u,v)=>{x(M=>{const W=M.objectives[u]||[],B={...M,objectives:{...M.objectives,[u]:v}};return JSON.stringify(W)!==JSON.stringify(v)?{...B,auditLog:le(M,[{eventType:"objectives-updated",entityType:"objective",entityId:u,summary:`Updated component outcomes for ${u}`,componentId:u,before:{objectiveCount:W.length},after:{objectiveCount:v.length},source:"local"}])}:B})},[le]),$e=g.useCallback(u=>{const v=_s(i.orgProfile);if(v.isValid)return!0;const M=v.errors.map(W=>`- ${W.message}`).join(`
`);return window.confirm(`${u} has CST warnings:

${M}

Continue anyway?`)},[i.orgProfile]),be=g.useCallback(u=>{te(u)},[]),Be=g.useCallback(()=>{if(!$e("Export JSON"))return;const v=es(i);Gn(`adoption-assessment-${(i.orgProfile.trustName||"export").replace(/\s+/g,"_")}.json`,JSON.stringify(v,null,2),"application/json"),be("Assessment export downloaded.")},[be,$e,i]),qe=g.useCallback(()=>{var u;(u=de.current)==null||u.click()},[]),Ye=g.useCallback(async u=>{var B,Y,q,oe;const v=(B=u.target.files)==null?void 0:B[0];if(!v)return;const M=v.name.toLowerCase().endsWith(".json"),W=!v.type||rl.has(v.type);if(!M||!W){be("Import failed. Please choose a valid JSON file."),window.alert("Import failed. Please choose a valid JSON file."),u.target.value="";return}if(v.size>ol){be("Import failed. The selected file is larger than 5 MB."),window.alert("Import failed. The selected file is larger than 5 MB."),u.target.value="";return}try{const we=await v.text(),Ne=Vn(JSON.parse(we)),re=()=>{x(Nn=>{const en=nn(ns(Ne,Nn));return en.orgProfile.cstId||(en.orgProfile={...en.orgProfile,cstId:Dt()}),{...en,auditLog:le(en,[{eventType:"data-imported",entityType:"system",summary:`Imported assessment data from ${v.name}`,after:{fileName:v.name},source:"local"}])}}),a("dashboard"),be("Assessment import complete. Dashboard updated.")};if(pl(i)){re();return}const Ce=(Y=Ne.orgProfile)==null?void 0:Y.cstId,un=i.orgProfile.cstId,Ke=i.orgProfile.projectName||i.orgProfile.trustName||"your currently loaded programme",wn=((q=Ne.orgProfile)==null?void 0:q.projectName)||((oe=Ne.orgProfile)==null?void 0:oe.trustName)||v.name;if(Ce&&Ce!==un){if(!window.confirm(`"${wn}" looks like a different programme than "${Ke}".

Importing will replace everything currently loaded. Continue?`)){be("Import cancelled.");return}re();return}if(!Ce&&!window.confirm(`"${wn}" doesn't carry a programme ID (it may predate this feature).

Click OK to compare it against "${Ke}" and merge item by item, or Cancel to load it as a different programme (replace everything).`)){re();return}const mn=Cr(i,Ne);if(!mn.hasConflicts){x(Nn=>{const en=nn(ms(Nn,Ne,{}));return{...en,auditLog:le(en,[{eventType:"data-imported",entityType:"system",summary:mn.autoMergeSummary.length?`Merged import from ${v.name} (${mn.autoMergeSummary.join(", ")})`:`Imported ${v.name} - no changes (already up to date)`,after:{fileName:v.name},source:"local"}])}}),a("dashboard"),be(mn.autoMergeSummary.length?`Merged automatically: ${mn.autoMergeSummary.join(", ")}.`:"Already up to date - nothing to import.");return}b({file:v,parsed:Ne,report:mn})}catch{be("Import failed. Please verify the file contents."),window.alert("Unable to import adoption assessment. Please verify the file contents.")}finally{u.target.value=""}},[be,le,i]),an=g.useCallback(u=>{if(!_)return;const{file:v,parsed:M}=_,W=Object.keys(u).length;x(B=>{const Y=nn(ms(B,M,u));return{...Y,auditLog:le(Y,[{eventType:"data-imported",entityType:"system",summary:`Merged import from ${v.name} (${W} item(s) resolved)`,after:{fileName:v.name},source:"local"}])}}),b(null),a("dashboard"),be("Import merged into current programme.")},[be,le,_]),An=g.useCallback(()=>{b(null),be("Import cancelled.")},[be]),xn=g.useCallback(u=>{const v=!!(u!=null&&u.replaceExisting);if(!De){window.alert("Finalise Month is available during the final week of each month.");return}if(!$e("Finalise Month"))return;const W=i.history.length>0?$t({...i,currentDraft:i.history[i.history.length-1].data},n).currentPhase:1;if(ae.currentPhase>W){const Y=Il(ae.currentPhase);if(!Y){window.alert("Phase progression cancelled. Confidence and competence self-assessment is required when readiness phase changes.");return}const q=[];if(n.filter(oe=>oe.phase<ae.currentPhase).forEach(oe=>{oe.lenses.forEach(we=>{var re,Ce;const Ne=(re=i.currentDraft[oe.id])==null?void 0:re[we];(!Ne||Ne.score<=0||!((Ce=Ne.justification)!=null&&Ce.trim()))&&q.push(`${oe.label} / ${we}`)})}),q.length>0){const oe=window.prompt(`You're progressing from Phase ${W} to Phase ${ae.currentPhase}, but ${q.length} item(s) are incomplete. Please provide a justification.`);if(!oe||!oe.trim()){window.alert("Phase progression cancelled. A justification is required when prior phase items are missing.");return}x(we=>({...{...we,phaseOverrides:{...we.phaseOverrides,[`phase-progression-${Date.now()}`]:oe.trim()},orgProfile:{...we.orgProfile,cst:{...we.orgProfile.cst,phaseCapability:{...we.orgProfile.cst.phaseCapability,[ae.currentPhase]:{...Y,assessedAt:new Date().toISOString(),reason:"phase-change"}}}}},auditLog:le(we,[{eventType:"profile-updated",entityType:"profile",summary:`Updated phase capability for phase ${ae.currentPhase}`,after:{phase:ae.currentPhase,competence:Y.competence,confidence:Y.confidence,rationale:oe.trim()},source:"local"}])}))}else x(oe=>({...{...oe,orgProfile:{...oe.orgProfile,cst:{...oe.orgProfile.cst,phaseCapability:{...oe.orgProfile.cst.phaseCapability,[ae.currentPhase]:{...Y,assessedAt:new Date().toISOString(),reason:"phase-change"}}}}},auditLog:le(oe,[{eventType:"profile-updated",entityType:"profile",summary:`Updated phase capability for phase ${ae.currentPhase}`,after:{phase:ae.currentPhase,competence:Y.competence,confidence:Y.confidence},source:"local"}])}))}const B=ts(i.currentDraft,ae.overallPct);x(Y=>{const q=v?Y.history.map(we=>we.monthLabel===B.monthLabel?B:we):[...Y.history,B];return{...{...Y,history:q},auditLog:le(Y,[{eventType:"month-finalized",entityType:"history",entityId:B.monthLabel,summary:`${v?"Re-finalized":"Finalized"} monthly snapshot for ${B.monthLabel}`,after:{monthLabel:B.monthLabel,overallPercentage:B.overallPercentage},source:"local"}])}}),F(Y=>In(Y,25)),a("dashboard")},[le,n,$e,De,ae.currentPhase,ae.overallPct,i,i.currentDraft,i.history]),On=g.useCallback(()=>{if(!$e("Finalise Prior Month"))return;const v=fe.previousMonthLabel;if(i.history.some(q=>q.monthLabel===v)){window.alert(`${v} has already been finalised.`);return}const W=new Date;W.setMonth(W.getMonth()-1);const B=ts(i.currentDraft,ae.overallPct,W);x(q=>({...{...q,history:[...q.history,B]},auditLog:le(q,[{eventType:"prior-month-finalized",entityType:"history",entityId:B.monthLabel,summary:`Finalized prior month snapshot for ${B.monthLabel}`,after:{monthLabel:B.monthLabel,overallPercentage:B.overallPercentage},source:"local"}])}));const Y=new Date().getDate()===1;F(q=>In({...q,onTimeFinalisations:q.onTimeFinalisations+(Y?1:0),lateFinalisations:q.lateFinalisations+(Y?0:1)},Y?45:20))},[le,$e,ae.overallPct,fe.previousMonthLabel,i.currentDraft,i.history]),_n=g.useCallback(async()=>{try{const u=await fetch("test-data/adoption-sample.json");if(!u.ok)throw new Error(`Failed to load sample data: ${u.status}`);const v=Vn(await u.json());x(M=>{const W=nn(ns(v,M));return{...W,auditLog:le(W,[{eventType:"example-data-loaded",entityType:"system",summary:"Loaded example assessment data",source:"local"}])}}),a("dashboard"),be("Example assessment data loaded."),G()&&h(!1)}catch(u){console.error(u),be("Unable to load example data right now."),window.alert("Unable to load example data right now. Please try again.")}},[be,le]),Rn=g.useCallback(()=>{if(!window.confirm("Warning: this will reset all assessment data (organisation profile, scores, actions, and history). If you are worried, please export your data first. Continue?"))return;const v=nn(Wn());x(v),k({}),a("dashboard"),be("Assessment data has been reset."),G()&&h(!1)},[be]),on=g.useCallback(()=>({generatedAt:new Date().toISOString(),targetMonth:fe.previousMonthLabel,finalisedPriorMonth:fe.hasFinalisedPreviousMonth,report:es(i)}),[fe.hasFinalisedPreviousMonth,fe.previousMonthLabel,i]),d=g.useCallback(()=>`adoption-point-in-time-${fe.previousMonthLabel.toLowerCase().replace(/\s+/g,"-")}.json`,[fe.previousMonthLabel]),I=g.useCallback(()=>{const u=d();Gn(u,JSON.stringify(on(),null,2),"application/json")},[d,on]),$=g.useCallback(()=>{const u=f.trim()||"test@test.com",v=d(),M=`${U}

Attachment: ${v}`,W=`mailto:${u}?subject=${encodeURIComponent(E)}&body=${encodeURIComponent(M)}`;F(B=>In({...B,emailDraftOpens:B.emailDraftOpens+1},8)),window.location.href=W},[d,U,E,f]),me=g.useCallback(()=>{F(u=>u.checkIns[T]?u:In({...u,checkIns:{...u.checkIns,[T]:!0}},10))},[T]),ue=g.useCallback(()=>{F(u=>In({...u,highlightLayoutSaves:u.highlightLayoutSaves+1},15))},[]),Le=g.useCallback(()=>{const u=f.trim()||"test@test.com",v=d(),M=JSON.stringify(on(),null,2),W=yl(vl(M)),B=`----nhs-adoption-reminder-${Date.now()}`,Y=[`To: ${u}`,`Subject: ${E}`,"MIME-Version: 1.0",`Content-Type: multipart/mixed; boundary="${B}"`,"",`--${B}`,'Content-Type: text/plain; charset="UTF-8"',"Content-Transfer-Encoding: 8bit","",U,"",`--${B}`,`Content-Type: application/json; name="${v}"`,"Content-Transfer-Encoding: base64",`Content-Disposition: attachment; filename="${v}"`,"",W,`--${B}--`,""].join(`\r
`),q=fe.previousMonthLabel.toLowerCase().replace(/\s+/g,"-");Gn(`adoption-reminder-${q}.eml`,Y,"message/rfc822")},[d,on,U,E,f,fe.previousMonthLabel]),Te=g.useCallback(()=>{xe(u=>({...u,[ne]:!0}))},[ne]),Ae=fe.shouldNotify&&!J[ne],Fe=g.useMemo(()=>i.history.find(u=>u.monthLabel===ke)||null,[ke,i.history]),dn=De,rn=dn?"Review and finalise monthly snapshot":"Finalise Month unlocks from the final week of each month.",et=dn?`${Ct} h-9 px-3 py-0 shadow-[0_3px_0_rgba(0,0,0,0.2)]`:"h-9 px-3 py-0 rounded-md border border-slate-300 bg-slate-200 text-slate-500 cursor-not-allowed",Pn=dn?{backgroundColor:S.themeColor}:void 0,P=g.useMemo(()=>{const u=Fe||(i.history.length>0?i.history[i.history.length-1]:null),v=(u==null?void 0:u.overallPercentage)||0,M=ae.overallPct-v;return{currentMonthLabel:ke,baselineLabel:(u==null?void 0:u.monthLabel)||"No previous snapshot",baselineOverall:v,deltaOverall:M,assessedCount:ae.assessedCount,totalActions:ae.totalActions,completedActions:ae.completedActions}},[ke,Fe,ae.assessedCount,ae.completedActions,ae.overallPct,ae.totalActions,i.history]),ge=C.level>=3,Ge=g.useMemo(()=>Cl(C.onTimeFinalisations,C.emailDraftOpens),[C.emailDraftOpens,C.onTimeFinalisations]),Xe=!!C.checkIns[T],Qe=g.useMemo(()=>El(C.checkIns),[C.checkIns]),vn=g.useMemo(()=>[{id:"streak-3",name:"Steady Cadence",description:"Check in for 3 consecutive days.",unlocked:Qe>=3,progress:`${Math.min(Qe,3)}/3`},{id:"first-ontime",name:"On-Time Closer",description:"Finalise a prior month on time.",unlocked:C.onTimeFinalisations>=1,progress:`${Math.min(C.onTimeFinalisations,1)}/1`},{id:"first-save",name:"Story Builder",description:"Save your first highlight layout.",unlocked:C.highlightLayoutSaves>=1,progress:`${Math.min(C.highlightLayoutSaves,1)}/1`}],[Qe,C.highlightLayoutSaves,C.onTimeFinalisations]),nt=g.useCallback(u=>{if(!ge&&!cl.includes(u.themeColor)){V(v=>({...u,themeColor:v.themeColor}));return}V(u)},[ge]),tt=u=>{let v=0,M=0,W=0,B=0;return u.lenses.forEach(Y=>{var we,Ne;const q=(we=i.currentDraft[u.id])==null?void 0:we[Y];q&&q.score>0&&(v++,(Ne=q.justification)!=null&&Ne.trim()&&M++);const oe=(q==null?void 0:q.actions)||[];W+=oe.length,B+=oe.filter(re=>ys(re.status)).length}),v===0?{icon:"◯",color:"text-blue-100",label:"Not Started"}:v>M?{icon:"⚠",color:"text-red-300",label:"Missing Justification"}:v<u.lenses.length?{icon:"◐",color:"text-amber-300",label:"In Progress"}:W<=0||B<W?{icon:"◐",color:"text-amber-300",label:"In Progress"}:{icon:"✓",color:"text-green-300",label:"Completed"}},Dn=i.orgProfile.trustName||"Unconfigured Trust",yn=i.orgProfile.projectName||"Unnamed Project",Ze=Ss[i.orgProfile.cst.pathway],$n=Ze.split(" - ")[0]||Ze;return e.jsxs("div",{className:`flex h-screen overflow-hidden ${S.darkMode?"bg-slate-900 text-slate-100":"bg-slate-50 text-slate-800"}`,children:[e.jsx("div",{role:"status","aria-live":"polite",className:"sr-only",children:z}),e.jsx("input",{ref:de,type:"file",accept:"application/json",className:"hidden",onChange:Ye}),l&&e.jsx("div",{className:"fixed inset-0 z-10 bg-slate-900/35 backdrop-blur-[1px] lg:hidden",onClick:()=>h(!1)}),e.jsxs("div",{className:`fixed inset-y-0 left-0 z-20 bg-[#005eb8] text-white flex flex-col shadow-xl overflow-hidden transition-all duration-300 ease-out lg:static lg:translate-x-0 ${l?"w-72 translate-x-0":"w-0 -translate-x-full lg:w-0"}`,style:{backgroundColor:S.themeColor},children:[e.jsxs("div",{className:"p-6 border-b border-blue-700",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold tracking-tight",children:"NHS Digital Adoption"}),e.jsxs("p",{className:"text-blue-200 text-xs mt-1 flex justify-between items-center",children:[e.jsx("span",{children:"Readiness Tracking Tool"}),e.jsx("span",{className:"opacity-80 font-medium",children:"V6.6"})]})]}),S.profileImageDataUrl?e.jsx("img",{src:S.profileImageDataUrl,alt:"Profile",className:"h-10 w-10 rounded-full border-2 border-blue-200 object-cover"}):null]}),e.jsxs("div",{className:"mt-3 rounded-md bg-blue-700 p-2 text-xs",children:[e.jsxs("div",{className:"font-semibold text-blue-100",children:["Level ",C.level," · Grade ",Ge]}),e.jsxs("div",{className:"text-blue-200",children:["XP ",C.xp," · Layout saves ",C.highlightLayoutSaves]})]})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto py-4",children:[e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Intro"}),e.jsx("nav",{className:"space-y-1 mb-4",children:["introduction","cm-guide","project-details"].map(u=>e.jsx("button",{ref:v=>{Se.current[`view:${u}`]=v},onClick:()=>ve(u),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${s===u?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:u==="introduction"?"Introduction":u==="project-details"?"CST Personalisation":"Adoption Engine Onboarding"},u))}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Overview"}),e.jsx("nav",{className:"space-y-1 mb-4",children:["dashboard","action-plan","roadmap-view"].map(u=>e.jsx("button",{ref:v=>{Se.current[`view:${u}`]=v},onClick:()=>ve(u),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${s===u?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:u==="dashboard"?"Dashboard":u==="action-plan"?"Action Tracker":"Roadmap View"},u))}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Tools"}),e.jsx("nav",{className:"space-y-1 mb-8",children:["highlight-builder","audit-log","settings"].map(u=>e.jsx("button",{ref:v=>{Se.current[`view:${u}`]=v},onClick:()=>ve(u),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${s===u?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:u==="highlight-builder"?"Highlight Builder":u==="audit-log"?"Audit Log":"Settings & Profile"},u))}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Change Components"}),e.jsx("nav",{className:"space-y-1",children:n.map((u,v)=>{const M=s==="assessment"&&r===u.id,W=tt(u),B=v>0?n[v-1].phase:null,Y=u.phase!==B;return e.jsxs(Cn.Fragment,{children:[Y&&e.jsx("div",{className:`px-4 text-[10px] font-semibold uppercase tracking-wider text-blue-300 ${v===0?"pb-1":"pt-3 pb-1"}`,children:tn[u.phase]||`Phase ${u.phase}`}),e.jsxs("button",{ref:q=>{Se.current[`component:${u.id}`]=q},onClick:()=>{pe(u.id)},className:`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${M?"bg-white font-medium text-[#005eb8]":`hover:bg-blue-800 ${W.color}`}`,children:[e.jsx("span",{className:"truncate pr-2",children:Ea(u.label)}),e.jsx("span",{className:"text-xs flex-shrink-0",title:W.label,"aria-label":W.label,children:W.icon})]})]},u.id)})}),e.jsxs("div",{className:"mt-8 px-4 pb-4 border-t border-blue-800 pt-6",children:[e.jsx("div",{className:"text-[10px] font-semibold text-blue-300 uppercase tracking-wider mb-3",children:"Status Legend"}),e.jsxs("div",{className:"space-y-2 text-xs text-blue-200",children:[e.jsx("div",{children:"◯ Not Started"}),e.jsx("div",{children:"◐ In Progress"}),e.jsx("div",{children:"⚠ Missing Justification"}),e.jsx("div",{children:"✓ Completed"})]})]})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col h-screen overflow-hidden",children:[e.jsx("header",{className:`${S.darkMode?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} border-b px-3 py-2 sm:px-6 shrink-0 z-10 ${s==="introduction"?"":"shadow-sm"}`,style:{borderTop:`3px solid ${S.themeColor}`},children:e.jsxs("div",{className:"flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{className:"min-w-0 flex items-start gap-2 sm:gap-3",children:[e.jsxs("button",{onClick:()=>h(u=>!u),className:"inline-flex h-9 items-center justify-center px-3 text-white rounded-md font-semibold transition-colors shadow-sm","aria-label":l?"Collapse side navigation":"Expand side navigation",title:l?"Collapse side navigation":"Expand side navigation",style:{backgroundColor:S.themeColor},children:[e.jsx("span",{"aria-hidden":"true",className:"text-lg leading-none",children:l?"«":"»"}),e.jsx("span",{className:"sr-only",children:l?"Collapse side navigation":"Expand side navigation"})]}),e.jsx("button",{onClick:ye,disabled:X.length===0,title:X.length===0?"No previous in-app page":"Back to previous page",className:`h-9 text-sm px-3 rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${S.darkMode?"text-slate-100 hover:bg-slate-700":"text-slate-600 hover:bg-slate-100"}`,children:"← Back"}),e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-1 text-sm",children:[e.jsx("span",{className:`truncate font-semibold ${S.darkMode?"text-slate-100":"text-slate-700"}`,title:Dn,children:Dn}),e.jsx("span",{className:`${S.darkMode?"text-slate-300":"text-slate-400"}`,children:"/"}),e.jsx("span",{className:`truncate ${S.darkMode?"text-slate-100":"text-slate-600"}`,title:yn,children:yn})]}),e.jsxs("div",{className:"mt-1 flex min-w-0 items-center gap-1.5",children:[e.jsxs("span",{className:`truncate rounded-full px-2 py-1 text-[11px] font-semibold ${S.darkMode?"bg-slate-700 text-slate-100":"bg-slate-100 text-slate-600"}`,title:`${i.orgProfile.cst.type.toUpperCase()} · ${Ze}`,children:[i.orgProfile.cst.type.toUpperCase()," ·"," ",e.jsx("span",{className:"sm:hidden",children:$n}),e.jsx("span",{className:"hidden sm:inline",children:Ze})]}),e.jsxs("span",{className:"inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-800",title:"Auto-save on",children:[e.jsx("span",{className:"inline-flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white","aria-hidden":"true",children:"✓"}),e.jsx("span",{className:"sr-only sm:not-sr-only sm:ml-1",children:"Auto-save on"})]})]})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 lg:justify-end",children:[e.jsx("button",{onClick:()=>Q(!0),"aria-label":"Show introduction",title:"Show introduction",className:`text-sm w-9 h-9 flex items-center justify-center bg-white text-[#425563] border border-[#768692] hover:bg-[#f0f4f5] rounded-full font-semibold transition-colors ${Et}`,children:"?"}),e.jsx("button",{type:"button",onClick:()=>{window.location.hash="#/"},"aria-label":"Go to home page",title:"Go to home page",className:`${sn} h-9 w-16 px-6 py-0 inline-flex items-center justify-center`,children:"Home"}),e.jsx("button",{onClick:qe,className:`${sn} h-9 px-3 py-0`,children:"Import"}),e.jsxs("button",{onClick:Be,className:`${sn} h-9 px-3 py-0`,children:[e.jsx("span",{className:"sm:hidden",children:"Export"}),e.jsx("span",{className:"hidden sm:inline",children:"Export JSON"})]}),e.jsx("span",{className:"inline-flex",title:rn,children:e.jsxs("button",{onClick:()=>ee(!0),disabled:!dn,"aria-label":"Finalise Month",className:et,style:Pn,children:[e.jsx("span",{className:"sm:hidden",children:"Finalise"}),e.jsx("span",{className:"hidden sm:inline",children:"Finalise Month"})]})})]})]})}),e.jsxs("main",{ref:ce,className:"flex-1 overflow-y-auto p-8",children:[s==="dashboard"&&w?e.jsxs("section",{className:`${S.darkMode?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-6 rounded-xl border p-4 shadow-sm`,children:[e.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${S.darkMode?"text-slate-300":"text-slate-500"}`,children:"Engagement"}),e.jsxs("p",{className:`text-sm mt-1 ${S.darkMode?"text-slate-100":"text-slate-700"}`,children:["Level ",C.level," · Grade ",Ge," · On-time finalisations"," ",C.onTimeFinalisations," · Email opens ",C.emailDraftOpens]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:me,disabled:Xe,className:"rounded-md px-3 py-2 text-sm font-semibold text-white disabled:opacity-60",style:{backgroundColor:S.themeColor},children:Xe?"Checked In Today":"Daily Check-In (+10 XP)"}),e.jsx("button",{type:"button",onClick:()=>R(!1),className:`${S.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-2 text-sm font-medium`,"aria-label":"Dismiss engagement card",children:"Dismiss"})]})]}),e.jsx("div",{className:"mt-4 grid gap-3 md:grid-cols-3",children:vn.map(u=>e.jsxs("div",{className:`rounded-lg border p-3 ${u.unlocked?"border-green-200 bg-green-50":S.darkMode?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${S.darkMode?"text-slate-100":"text-slate-800"}`,children:u.name}),e.jsx("span",{className:"text-xs font-bold",children:u.unlocked?"Unlocked":u.progress})]}),e.jsx("p",{className:`mt-1 text-xs ${S.darkMode?"text-slate-300":"text-slate-600"}`,children:u.description})]},u.id))})]}):null,Ae&&e.jsxs("section",{className:`${S.darkMode?"border-amber-700 bg-slate-800":"border-amber-300 bg-amber-50"} mb-8 rounded-xl border p-5 shadow-sm`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider text-amber-700",children:"First Day Reminder"}),e.jsxs("h3",{className:"text-lg font-bold text-amber-900 mt-1",children:["Submit prior month report for ",fe.previousMonthLabel]}),e.jsxs("p",{className:"text-sm text-amber-800 mt-2",children:["Please prompt the team to finalise ",fe.previousMonthLabel," if it has not already been recorded."]})]}),e.jsx("button",{type:"button",onClick:Te,className:"text-sm px-3 py-1.5 rounded-md border border-amber-300 text-amber-700 hover:bg-amber-100",children:"Dismiss"})]}),e.jsxs("div",{className:"mt-4 grid gap-3 md:grid-cols-2",children:[e.jsxs("label",{className:"text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"To"}),e.jsx("input",{type:"email",value:f,onChange:u=>j(u.target.value),className:`${S.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2`})]}),e.jsxs("label",{className:"text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"Subject"}),e.jsx("input",{type:"text",value:E,onChange:u=>D(u.target.value),className:`${S.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2`})]})]}),e.jsxs("label",{className:"mt-3 block text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"Body"}),e.jsx("textarea",{value:U,onChange:u=>je(u.target.value),rows:9,className:`${S.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2 font-mono text-xs`})]}),e.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:I,className:"rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-50",children:"Download Point-in-Time JSON"}),e.jsx("button",{type:"button",onClick:Le,className:"rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-50",children:"Download Email Draft with Attachment (.eml)"}),e.jsx("button",{type:"button",onClick:$,className:"rounded-md px-3 py-2 text-sm font-semibold text-white",style:{backgroundColor:S.themeColor},children:"Open Mail Draft"}),e.jsx("button",{type:"button",onClick:On,className:"rounded-md border border-amber-300 bg-white px-3 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100",children:"Finalise Prior Month Now"})]})]}),s==="dashboard"&&e.jsx("div",{ref:L,children:e.jsx(si,{store:i,components:n,lenses:t,metrics:ae,phaseFocusMode:S.phaseFocusMode||"auto",manualPhaseFocus:S.manualPhaseFocus,onPhaseFocusModeChange:u=>V(v=>({...v,phaseFocusMode:u,manualPhaseFocus:u==="manual"?v.manualPhaseFocus||ae.currentPhase:v.manualPhaseFocus})),onManualPhaseFocusChange:u=>V(v=>({...v,phaseFocusMode:"manual",manualPhaseFocus:u})),onResetPhaseFocus:()=>V(u=>({...u,phaseFocusMode:"auto",manualPhaseFocus:ae.currentPhase})),getEntry:Oe,onComponentClick:pe,pathway:i.orgProfile.cst.pathway,pathwayChecks:i.pathwayChecks,onNavigate:ve,onOpenLensInfo:c,onOpenOnboarding:()=>Q(!0),colorAccessibilityMode:S.colorAccessibilityMode||"standard",darkMode:!!S.darkMode})}),s==="project-details"&&e.jsx(qi,{orgProfile:i.orgProfile,onProfileUpdate:u=>{x(v=>{const M=aa({...v,orgProfile:u});return JSON.stringify(v.orgProfile)!==JSON.stringify(u)?{...M,auditLog:le(v,[{eventType:"profile-updated",entityType:"profile",summary:"Updated CST profile details",before:{trustName:v.orgProfile.trustName,projectName:v.orgProfile.projectName,cst:v.orgProfile.cst},after:{trustName:u.trustName,projectName:u.projectName,cst:u.cst},source:"local"}])}:M})},components:n,lenses:t,onComponentClick:pe,onOpenOnboarding:()=>Q(!0),currentUserId:m,onCurrentUserChange:O,darkMode:!!S.darkMode}),s==="assessment"&&e.jsx(Pi,{store:{...i,showMatrix:N},components:n,activeComponentId:r,getRubricText:fl,getEntry:Oe,onComponentChange:pe,onEntryUpdate:Ue,onOpenLensInfo:c,onMatrixToggle:u=>{k(v=>({...v,[u]:!v[u]}))},onActionRemove:(u,v,M)=>{const B=Oe(u,v).actions.find(q=>q.id===M);if(!B)return;const Y=window.prompt("Please provide a reason for removing this action. This will be included in the JSON export audit log.");if(!Y||!Y.trim()){window.alert("Removal cancelled. A reason is required to remove an action.");return}x(q=>{var un;const oe=((un=q.currentDraft[u])==null?void 0:un[v])||st(),we={...oe,actions:oe.actions.filter(Ke=>Ke.id!==M).map(ml)},Ne={...q.suppressedAutoActions};if(M.startsWith("vision-action:")||M.startsWith("case-for-change-action:")||M.startsWith("benefits-action:")||M.startsWith("sponsorship-action:")||M.startsWith("change-impact-action:")){const Ke=gl(u,v),wn=Ne[Ke]||[];wn.includes(M)||(Ne[Ke]=[...wn,M])}const re={...q,currentDraft:{...q.currentDraft,[u]:{...q.currentDraft[u],[v]:we}},suppressedAutoActions:Ne};return{...nn(re),auditLog:le(q,[{eventType:"action-removed",entityType:"action",entityId:M,summary:`Removed action from ${u} / ${v}`,componentId:u,lens:v,reason:Y.trim(),before:{text:B.text,status:B.status,owner:B.owner,actionType:B.actionType},source:"local"}])}})},onObjectivesUpdate:We,hideGuidedWorkflow:!!S.hideGuidedWorkflow,onHideGuidedWorkflow:()=>V(u=>({...u,hideGuidedWorkflow:!0})),darkMode:!!S.darkMode}),s==="action-plan"&&e.jsx(Aa,{actions:y,onComponentClick:pe,teamMembers:i.orgProfile.teamMembers||[],darkMode:!!S.darkMode}),s==="cm-guide"&&e.jsx(Bi,{onComponentClick:pe,components:n,store:i,getEntry:Oe,guidanceTarget:xs,linkOverrides:i.orgProfile.linkOverrides,darkMode:!!S.darkMode}),s==="introduction"&&e.jsx(lo,{darkMode:!!S.darkMode,onNavigateToProjectDetails:()=>ve("project-details"),onNavigateToGuide:()=>ve("cm-guide"),onNavigateToDashboard:()=>ve("dashboard")}),s==="roadmap-view"&&e.jsx(zi,{components:n,metrics:ae,getEntry:Oe,onComponentClick:pe,pathway:i.orgProfile.cst.pathway,pathwayChecks:i.pathwayChecks,darkMode:!!S.darkMode}),s==="highlight-builder"&&e.jsx(to,{store:i,metrics:ae,lenses:t,components:n,getEntry:Oe,trustName:i.orgProfile.trustName,projectName:i.orgProfile.projectName,themeColor:S.themeColor,onLayoutSaved:ue,currentUserId:m,darkMode:!!S.darkMode}),s==="audit-log"&&e.jsx($i,{events:i.auditLog,darkMode:!!S.darkMode}),s==="settings"&&e.jsx(uo,{userSettings:S,onUserSettingsUpdate:nt,onLoadExampleData:_n,onResetData:Rn,canUseCustomTheme:ge,engagementGrade:Ge,engagementLevel:C.level,engagementXp:C.xp,darkMode:!!S.darkMode})]}),p?e.jsx(ro,{lensName:p,onClose:()=>c(""),darkMode:!!S.darkMode}):null,_?e.jsx(io,{report:_.report,myLabel:i.orgProfile.projectName||i.orgProfile.trustName||"Mine",theirLabel:((Ot=_.parsed.orgProfile)==null?void 0:Ot.projectName)||((_t=_.parsed.orgProfile)==null?void 0:_t.trustName)||_.file.name,onResolve:an,onCancel:An,darkMode:!!S.darkMode}):null,Ie?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${S.darkMode?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} w-full max-w-2xl rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${S.darkMode?"text-slate-100":"text-slate-900"}`,children:"Finalise Month"}),e.jsx("button",{type:"button",onClick:()=>ee(!1),className:`${S.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:`mt-4 space-y-3 text-sm ${S.darkMode?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("p",{children:["Finalising creates a point-in-time snapshot for"," ",e.jsx("strong",{children:P.currentMonthLabel}),". A new reporting month starts on the 1st day of each month."]}),e.jsx("p",{children:De?"Finalise window is open (last week of the month).":"Finalise window is currently closed. You can finalise from the final week of each month."}),Fe?e.jsxs("p",{className:"rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-amber-900",children:["A snapshot already exists for ",P.currentMonthLabel,". Re-finalise will replace this month only."]}):null]}),e.jsxs("div",{className:`${S.darkMode?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mt-4 rounded-md border p-3 text-sm`,children:[e.jsx("p",{className:`font-semibold ${S.darkMode?"text-slate-100":"text-slate-800"}`,children:"Current summary"}),e.jsxs("ul",{className:`mt-2 space-y-1 ${S.darkMode?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("li",{children:["Baseline snapshot: ",P.baselineLabel]}),e.jsxs("li",{children:["Overall readiness: ",ae.overallPct,"% (",P.deltaOverall>=0?"+":"",P.deltaOverall,"% vs baseline)"]}),e.jsxs("li",{children:["Components assessed: ",P.assessedCount]}),e.jsxs("li",{children:["Actions complete: ",P.completedActions,"/",P.totalActions]})]})]}),e.jsxs("div",{className:"mt-5 flex flex-wrap justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:()=>ee(!1),className:"rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Cancel"}),Fe&&De?e.jsx("button",{type:"button",onClick:()=>{ee(!1),xn({replaceExisting:!0})},className:"rounded-md border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100",children:"Re-finalise This Month"}):null,e.jsx("button",{type:"button",onClick:()=>{ee(!1),xn()},disabled:!De,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50",children:"Finalise Snapshot"})]})]})}):null,e.jsx(ja,{toolkitChoice:i.orgProfile.cst.toolkitChoice,darkMode:!!S.darkMode}),e.jsx(Ia,{open:se,onClose:he,onNavigateToProjectDetails:()=>{a("project-details"),he()},onNavigateToGuide:()=>{a("cm-guide"),he()}})]})]})}export{Dl as AdoptionApp,Dl as default};
