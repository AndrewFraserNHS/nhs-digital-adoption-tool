import{r as g,j as e,a as Sn}from"./vendor-react-nTLHQtbJ.js";import{g as pt,p as Us,G as Ms,d as Vs}from"./vendor-misc-D88HtX07.js";import{A as Hn,a as cn,n as Le,i as Kt,d as ht,U as Hs}from"./actionModel-g5JtsqyG.js";import{P as Ze,r as zt,v as Ws,T as vn,D as qs,s as De,p as $e,l as Qe,a as ln,c as ft,b as Ks,d as zs,A as bt,S as Ys,G as xt}from"./storage-DHVlaK-Q.js";import{g as Wn,A as Xn}from"./components-aRtg6FgR.js";import{d as wn,e as Js}from"./utils-IN_5AsDm.js";import"./vendor-chart-DnMUodEx.js";function Yt(){return[{title:"What is the Adoption Engine?",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsxs("p",{className:"text-sm text-slate-700",children:["Going live with a new digital product isn't the finish line - people still need to adopt it, change how they work, and keep using it."," "]}),e.jsx("p",{className:"text-sm text-slate-700",children:"The Adoption Engine helps you track how people and teams are adopting the change before go-live, during rollout, and after launch so progress is visible and outcomes are measurable."}),e.jsx("p",{className:"text-sm text-slate-700",children:" It helps you answer four simple questions:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"Where are we going?"}),e.jsx("li",{children:" How will we know we've got there?"}),e.jsx("li",{children:" What needs to be in place?"}),e.jsx("li",{children:" What should we do next?"})]}),e.jsx("p",{className:"text-sm text-slate-700",children:"The goal is not just to implement change, but to ensure it is adopted, embedded and delivering benefits."})]})},{title:"What is a CST?",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"A CST (Context Specific Template) contains the information that makes the Adoption Engine specific to your project, programme or initiative."}),e.jsx("p",{children:"It captures key information such as your scope, milestones, outcomes and benefits, and tailors the guidance, actions and resources provided."}),e.jsxs("p",{children:["You can update your CST at any time from ",e.jsx("strong",{children:"CST Personalisation"})]})]})},{title:"Adoption Pathways",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"The Adoption Engine supports three common change journeys:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Starting for the First Time"}),e.jsx("br",{}),"Building the foundations for successful adoption."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Piloted and Ready to Scale Up"}),e.jsx("br",{}),"Expanding a successful pilot to a wider audience."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Gone Live but Adoption is Patchy"}),e.jsx("br",{}),"Strengthening adoption where uptake or benefits are lower than expected."]})]}),e.jsx("p",{children:"Choose your pathway to tailor the guidance, actions and resources you see."})]})},{title:"How the Adoption Engine Works",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"The engine is built around components such as Vision, Sponsorship, Engagement, Capability and Benefits."}),e.jsxs("p",{children:["Each component is viewed through five ",e.jsx("strong",{children:"lenses"}),":"]}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"Strategic Direction and Leadership"}),e.jsx("li",{children:"People Experience and Culture"}),e.jsx("li",{children:"Planning and Risk"}),e.jsx("li",{children:"Skills and Behaviour"}),e.jsx("li",{children:"Process and Sustainment"})]}),e.jsx("p",{children:"As you assess each area, the engine recommends actions, resources and evidence to help improve adoption."})]})},{title:"Getting Started",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{className:"text-sm text-slate-700",children:"Start with CST Personalisation to review your CST. "}),e.jsx("p",{className:"text-sm text-slate-700",children:"Then visit the Dashboard to:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"View your current position"}),e.jsx("li",{children:"Explore components and lenses"}),e.jsx("li",{children:"Identify priority actions"}),e.jsx("li",{children:"Track progress and benefits"})]}),e.jsxs("p",{className:"text-sm text-slate-700",children:["The Adoption Engine will help guide your journey from ambition to adoption."," "]})]})}]}function Xs({open:n,onClose:t,onNavigateToProjectDetails:a,onNavigateToGuide:s}){const[i,h]=g.useState(0),p=Yt();if(g.useEffect(()=>{n&&h(0)},[n]),!n)return null;const m=p[i],o=i===0,C=i===p.length-1;return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:"relative w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("p",{className:"text-xs font-semibold uppercase tracking-wider text-blue-600",children:["Introduction · Step ",i+1," of ",p.length]}),e.jsx("button",{type:"button",onClick:t,className:"rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100",children:"Skip"})]}),e.jsx("h3",{className:"mt-3 text-lg font-semibold text-slate-900",children:m.title}),e.jsx("div",{className:"mt-3",children:m.body}),e.jsxs("div",{className:"mt-6 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:()=>h(l=>Math.max(0,l-1)),disabled:o,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed",children:"Back"}),C?e.jsxs("div",{className:"flex items-stretch gap-2",children:[a?e.jsx("button",{type:"button",onClick:a,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"Set up your CST Personalisation"}):null,s?e.jsx("button",{type:"button",onClick:s,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"See the 6 Key Questions"}):null,e.jsx("button",{type:"button",onClick:t,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Go to dashboard"})]}):e.jsx("button",{type:"button",onClick:()=>h(l=>Math.min(p.length-1,l+1)),className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Next"})]})]})})}const In=[{key:"avt-v2-2026",label:"AVT Digital Adoption Toolkit (V2.1, Jul 2026)",filename:"AVT Digital Adoption Toolkit - V2.1 July 2026.pdf",path:"/AVT%20Digital%20Adoption%20Toolkit%20-%20V2.1%20July%202026.pdf"},{key:"change-management-v3-2023",label:"Change Management Toolkit (V3.0, Sep 2023)",filename:"Change Management Toolkit v3.0 September 2023.pdf",path:"/Change%20Management%20Toolkit%20v3.0%20September%202023.pdf"}],Qs="avt-v2-2026";function Zs(n){return In.some(t=>t.key===n)}function ea(n){return In.find(t=>t.key===n)||In[0]}const na={"avt-v2-2026":[{id:"avt-vision-case-for-change",title:"Vision and Case for Change",pageHint:"Section: Early readiness",text:"Use a clear case for change, define outcomes, and ensure leadership sponsorship before go-live."},{id:"avt-stakeholder-engagement",title:"Stakeholder Engagement",pageHint:"Section: People and communication",text:"Map stakeholder groups, identify adoption risks, and use targeted communication plans for each audience."},{id:"avt-training-readiness",title:"Training and Capability",pageHint:"Section: Capability and learning",text:"Align learning interventions with role-based needs and verify confidence through readiness checkpoints."},{id:"avt-benefits-tracking",title:"Benefits Tracking",pageHint:"Section: Value realisation",text:"Set measurable adoption indicators and review benefit evidence at regular intervals post go-live."},{id:"avt-reinforcement-bau",title:"Reinforcement and BAU Transfer",pageHint:"Section: Sustainment",text:"Embed reinforcement actions and hand over ownership to business-as-usual teams for sustained adoption."}],"change-management-v3-2023":[{id:"cmt-leadership-alignment",title:"Leadership Alignment",pageHint:"Section: Sponsorship and governance",text:"Secure visible executive sponsorship and align governance with programme milestones and risks."},{id:"cmt-change-impact",title:"Change Impact Assessment",pageHint:"Section: Planning and risk",text:"Assess process, role, and behaviour impacts early and prioritise mitigations before deployment."},{id:"cmt-resistance-management",title:"Resistance Management",pageHint:"Section: Adoption barriers",text:"Identify likely resistance themes and define practical interventions with named owners and timelines."},{id:"cmt-comms-cadence",title:"Communication Cadence",pageHint:"Section: Communications",text:"Establish a predictable communication cadence using concise updates and feedback loops."},{id:"cmt-post-go-live-support",title:"Post Go-Live Support",pageHint:"Section: Stabilisation",text:"Provide hypercare support with clear escalation routes and transition criteria into steady state."}]};Ms.workerSrc=Us;function ta({toolkitChoice:n,darkMode:t=!1}){const[a,s]=g.useState(!1),[i,h]=g.useState(!1),[p,m]=g.useState(""),[o,C]=g.useState(1),[l,c]=g.useState("idle"),[u,b]=g.useState(""),[L,V]=g.useState([]),j=g.useMemo(()=>ea(n),[n]),B=g.useMemo(()=>(na[n]||[]).map(G=>({id:G.id,title:G.title,pageHint:G.pageHint,text:G.text,pageNumber:null})),[n]);g.useEffect(()=>{if(!a)return;let G=!1;return(async()=>{c("loading"),b("");try{const le=await fetch(j.path);if(!le.ok)throw new Error(`HTTP ${le.status}`);const me=await le.arrayBuffer(),ee=new Uint8Array(me);let ue;try{ue=await pt({data:ee}).promise}catch(J){if(ue=await pt({data:ee,disableWorker:!0}).promise,!G){const xe=J instanceof Error?J.message:String(J);b(`Worker fallback used: ${xe}`)}}const $=[];for(let J=1;J<=ue.numPages;J+=1){if(G)return;const _=(await(await ue.getPage(J)).getTextContent()).items.map(ne=>"str"in ne?ne.str:"").join(" ").replace(/\s+/g," ").trim();_&&$.push({id:`${n}-page-${J}`,title:`Page ${J}`,pageHint:`Page ${J}`,text:_,pageNumber:J})}G||(V($),c("ready"))}catch{G||(V([]),c("error"),b("Unable to read PDF text for indexing in this browser session."))}})(),()=>{G=!0}},[a,j.path,n]),g.useEffect(()=>{C(1),m(""),V([]),c("idle"),b("")},[n]);const y=L.length>0?L:B,Y=g.useMemo(()=>{const G=Number.isFinite(o)&&o>0?Math.floor(o):1;return`${j.path}#page=${G}`},[j.path,o]),F=g.useMemo(()=>{const G=p.trim().toLowerCase();if(!G)return y.slice(0,5).map(me=>({entry:me,score:0}));const ge=G.split(/\s+/).filter(Boolean),le=me=>{const ee=`${me.title} ${me.text} ${me.pageHint}`.toLowerCase();let ue=0;return ee.includes(G)&&(ue+=8),ge.forEach($=>{ee.includes($)?ue+=2:ee.split(/\W+/).some(xe=>xe&&(xe.includes($)||$.includes(xe)))&&(ue+=1)}),ue};return y.map(me=>({entry:me,score:le(me)})).filter(me=>me.score>0).sort((me,ee)=>ee.score-me.score).slice(0,5)},[p,y])[0]||null;return g.useEffect(()=>{p.trim()&&F!=null&&F.entry.pageNumber&&C(F.entry.pageNumber)},[F,p]),e.jsxs("div",{className:"fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2","data-testid":"global-toolkit-chatbot",children:[a?e.jsxs("div",{className:`w-[380px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border shadow-2xl ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant"}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("button",{type:"button",onClick:()=>h(!0),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Maximise"}),e.jsx("button",{type:"button",onClick:()=>s(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Minimise"})]})]}),e.jsxs("div",{className:`space-y-3 p-3 ${t?"bg-slate-800":"bg-slate-50"}`,children:[e.jsxs("div",{className:`max-w-[95%] rounded-2xl rounded-bl-md px-3 py-2 text-xs shadow-sm ${t?"bg-slate-700 text-slate-100":"bg-white text-slate-700"}`,children:["Showing your selected toolkit from CST Personalisation:",e.jsx("div",{className:"mt-1 font-semibold",children:j.label})]}),e.jsx("div",{className:`overflow-hidden rounded-lg border ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:e.jsx("iframe",{title:"Selected Toolkit Preview",src:Y,className:"h-[260px] w-full"})}),e.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-end gap-2",children:[e.jsx("label",{htmlFor:"toolkit-page-input",className:`text-[11px] font-semibold uppercase tracking-wider ${t?"text-slate-300":"text-slate-600"}`,children:"Go to page"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{id:"toolkit-page-input",type:"number",min:1,value:o,onChange:G=>C(Number(G.target.value)||1),className:`w-20 rounded-md border px-2 py-1.5 text-xs ${t?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})})]}),e.jsxs("div",{className:`rounded-lg border p-2 ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsx("label",{htmlFor:"toolkit-fuzzy-search",className:`mb-1 block text-[11px] font-semibold uppercase tracking-wider ${t?"text-slate-300":"text-slate-600"}`,children:"Quick snippet search"}),e.jsx("input",{id:"toolkit-fuzzy-search",type:"search",value:p,onChange:G=>m(G.target.value),placeholder:"Try: sponsorship, training, resistance",className:`w-full rounded-md border px-2 py-1.5 text-xs ${t?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-400":"border-slate-300 bg-white text-slate-900 placeholder-slate-500"}`}),e.jsx("div",{className:"mt-2",children:p.trim()?F!=null&&F.entry.pageNumber?e.jsxs("button",{type:"button",onClick:()=>{C(F.entry.pageNumber),h(!0)},className:`w-full rounded-md px-2 py-1.5 text-left text-xs font-semibold ${t?"bg-slate-800 text-slate-100 hover:bg-slate-700":"bg-slate-100 text-slate-800 hover:bg-slate-200"}`,children:["Go to best match: Page ",F.entry.pageNumber]}):e.jsx("p",{className:`text-xs ${t?"text-slate-400":"text-slate-500"}`,children:"No close page match found. Try broader keywords."}):e.jsx("p",{className:`text-xs ${t?"text-slate-400":"text-slate-500"}`,children:"Enter a keyword to jump to the most relevant page."})}),e.jsx("p",{className:`mt-2 text-[11px] ${t?"text-slate-400":"text-slate-500"}`,children:l==="loading"?"Indexing toolkit text from all pages...":l==="ready"?`Search is using full-document text (${L.length} pages indexed).`:l==="error"?"Full-document indexing unavailable, using fallback snippets.":"Search will expand to all pages when the assistant opens."}),u?e.jsx("p",{className:`mt-1 text-[11px] ${t?"text-amber-300":"text-amber-700"}`,children:u}):null]}),e.jsx("a",{href:j.path,target:"_blank",rel:"noopener noreferrer",className:"inline-block text-xs font-semibold text-[#005eb8] underline",children:"Open full toolkit in new tab"})]})]}):null,i?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4",children:e.jsxs("div",{className:`relative h-[90vh] w-[95vw] overflow-hidden rounded-2xl border shadow-2xl ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant · Expanded Viewer"}),e.jsx("button",{type:"button",onClick:()=>h(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Close"})]}),e.jsx("iframe",{title:"Selected Toolkit Full View",src:Y,className:"h-[calc(90vh-42px)] w-full"})]})}):null,e.jsxs("button",{type:"button",onClick:()=>s(G=>!G),className:"inline-flex items-center gap-2 rounded-full bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-blue-700","aria-label":"Open toolkit assistant",children:[e.jsx("span",{"aria-hidden":"true",children:"💬"}),"Toolkit assistant"]})]})}function Jt({showAdvancedControls:n,onToggleAdvanced:t,onReset:a,resultText:s,activeFilters:i,activeFiltersAriaLabel:h,darkMode:p=!1}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:t,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${p?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:n?"Hide advanced controls":"Show advanced controls"}),e.jsx("button",{type:"button",onClick:a,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${p?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:"Reset filters"}),e.jsx("span",{className:`text-xs ${p?"text-slate-300":"text-slate-500"}`,"aria-live":"polite",children:s})]}),i.length>0?e.jsx("div",{className:"flex flex-wrap gap-2","aria-label":h,children:i.map(m=>e.jsx("span",{className:`inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${p?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-slate-50 text-slate-700"}`,children:m},m))}):null]})}function sa({actions:n,onComponentClick:t,teamMembers:a=[],darkMode:s=!1}){const[i,h]=g.useState(""),[p,m]=g.useState("all"),[o,C]=g.useState("all"),[l,c]=g.useState("all"),[u,b]=g.useState("all"),[L,V]=g.useState("all"),[j,B]=g.useState("component"),[y,Y]=g.useState("asc"),[N,F]=g.useState(!1),G=g.useCallback(_=>{t(_)},[t]),ge=g.useMemo(()=>Array.from(new Set(n.map(_=>_.component))).sort((_,ne)=>_.localeCompare(ne)),[n]),le=g.useMemo(()=>Array.from(new Set([...a.map(_=>_.name),...n.map(_=>_.action.owner).filter(Boolean)])).sort((_,ne)=>_.localeCompare(ne)),[n,a]),me=g.useMemo(()=>Array.from(new Set(n.map(_=>_.action.status))).sort((_,ne)=>_.localeCompare(ne)),[n]),ee=g.useMemo(()=>{const _=n.map(ne=>ne.action.actionType).filter(ne=>!!ne);return Array.from(new Set([...Hn,..._])).sort((ne,X)=>ne.localeCompare(X))},[n]),ue=g.useMemo(()=>{const _=n.map(ne=>ne.action.readinessScore).filter(ne=>ne!==void 0);return Array.from(new Set(_)).sort((ne,X)=>ne-X)},[n]),$={0:"Not Started",1:"Emerging",2:"Developing",3:"Embedding",4:"Adopted",5:"Thriving"},J=g.useMemo(()=>{const _=i.trim().toLowerCase();return n.filter(X=>p!=="all"&&X.component!==p||o!=="all"&&X.action.owner!==o||l!=="all"&&X.action.status!==l||u!=="all"&&(X.action.actionType||"")!==u||L!=="all"&&X.action.readinessScore!==L?!1:_?[X.component,X.lens,X.action.text,X.action.actionType||"",X.action.owner,X.action.timescale,X.action.status].join(" ").toLowerCase().includes(_):!0).sort((X,Ae)=>{const Ie=E=>{switch(j){case"lens":return E.lens;case"owner":return E.action.owner||"Unassigned";case"status":return E.action.status;case"actionType":return E.action.actionType||"Unassigned";case"component":default:return E.component}},v=Ie(X).localeCompare(Ie(Ae));return y==="asc"?v:-v})},[u,n,p,o,L,i,j,y,l]),xe=g.useMemo(()=>{const _=[];return i.trim()&&_.push(`Search: ${i.trim()}`),p!=="all"&&_.push(`Component: ${p}`),l!=="all"&&_.push(`Status: ${l}`),u!=="all"&&_.push(`Action type: ${u}`),L!=="all"&&_.push(`Readiness: ${$[L]}`),o!=="all"&&_.push(`Owner: ${o}`),(j!=="component"||y!=="asc")&&_.push(`Sort: ${j} (${y})`),_},[u,p,o,L,i,j,y,l]),Se=()=>{h(""),m("all"),C("all"),c("all"),b("all"),V("all"),B("component"),Y("asc"),F(!1)};return e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsx("h2",{className:`text-2xl font-bold mb-6 ${s?"text-slate-100":"text-slate-800"}`,children:"Action Tracker"}),e.jsxs("div",{className:`${s?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-4 mb-6 space-y-3`,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:i,onChange:_=>h(_.target.value),placeholder:"Search actions, owners, lenses...",className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-900 text-slate-100":"text-slate-900"}`}),e.jsxs("select",{value:p,onChange:_=>m(_.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All components"}),ge.map(_=>e.jsx("option",{value:_,children:_},_))]}),e.jsxs("select",{value:l,onChange:_=>c(_.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All statuses"}),me.map(_=>e.jsx("option",{value:_,children:_},_))]})]}),e.jsx(Jt,{showAdvancedControls:N,onToggleAdvanced:()=>F(_=>!_),onReset:Se,resultText:`Showing ${J.length} actions`,activeFilters:xe,activeFiltersAriaLabel:"Active action tracker filters",darkMode:s}),N?e.jsxs("div",{className:`grid grid-cols-1 sm:grid-cols-5 gap-3 rounded-md border p-3 ${s?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("select",{value:o,onChange:_=>C(_.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),le.map(_=>e.jsx("option",{value:_,children:_},_))]}),e.jsxs("select",{value:u,onChange:_=>b(_.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),ee.map(_=>e.jsx("option",{value:_,children:_},_))]}),e.jsxs("select",{value:L==="all"?"all":String(L),onChange:_=>V(_.target.value==="all"?"all":Number(_.target.value)),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All readiness levels"}),ue.map(_=>e.jsx("option",{value:String(_),children:$[_]},_))]}),e.jsxs("select",{value:j,onChange:_=>B(_.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"component",children:"Sort: Component"}),e.jsx("option",{value:"lens",children:"Sort: Lens"}),e.jsx("option",{value:"owner",children:"Sort: Owner"}),e.jsx("option",{value:"actionType",children:"Sort: Action Type"}),e.jsx("option",{value:"status",children:"Sort: Status"})]}),e.jsx("button",{type:"button",onClick:()=>Y(_=>_==="asc"?"desc":"asc"),className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${s?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-white"}`,children:y==="asc"?"A-Z":"Z-A"})]}):null]}),e.jsx("div",{className:`${s?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:J.length?e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:`min-w-full table-fixed ${s?"divide-slate-700":"divide-slate-200"} divide-y`,children:[e.jsx("thead",{className:s?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Change Component"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Lens"}),e.jsx("th",{className:`w-[22%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Action Type"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Timescale"}),e.jsx("th",{className:`w-[14%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Status"})]})}),e.jsx("tbody",{className:`${s?"bg-slate-800 divide-slate-700":"bg-white divide-slate-100"} divide-y`,children:J.map(({compId:_,component:ne,lens:X,action:Ae})=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-4 py-3 text-sm ${s?"text-slate-100":"text-slate-700"}`,children:e.jsx("button",{onClick:()=>G(_),className:"text-left underline underline-offset-2 hover:text-[#005eb8] transition-colors",children:ne})}),e.jsx("td",{className:`px-4 py-3 text-sm ${s?"text-slate-300":"text-slate-500"}`,children:X}),e.jsx("td",{className:`w-[22%] px-4 py-3 text-sm whitespace-normal break-words leading-snug ${s?"text-slate-100":"text-slate-700"}`,children:Ae.text}),e.jsx("td",{className:`px-4 py-3 text-sm ${s?"text-slate-100":"text-slate-700"}`,children:Ae.actionType||"Unassigned"}),e.jsx("td",{className:`px-4 py-3 text-sm ${s?"text-slate-100":"text-slate-700"}`,children:Ae.owner}),e.jsx("td",{className:`px-4 py-3 text-sm ${s?"text-slate-100":"text-slate-700"}`,children:Ae.timescale}),e.jsx("td",{className:"w-[14%] px-4 py-3 text-sm",children:e.jsx("span",{className:`inline-flex rounded-full border px-2 py-1 text-xs font-semibold ${cn[Le(Ae.status)]}`,children:Le(Ae.status)})})]},`${_}-${X}-${Ae.text}`))})]})}):e.jsx("div",{className:`p-6 ${s?"text-slate-300":"text-slate-500"}`,children:n.length?"No actions match the current filters.":"No actions recorded yet."})})]})}const St=[1,2,3,4,5],Cn=["A","B","C","D","E"],Nn=[1,2,3,4,5],aa=[{value:"project",label:"Project"},{value:"program",label:"Program"},{value:"initiative",label:"Initiative"}],Xt=[{value:"pathway-1",label:"Pathway 1 - Starting for the First Time"},{value:"pathway-2",label:"Pathway 2 - Piloted and Ready to Scale Up"},{value:"pathway-3",label:"Pathway 3 - Gone Live but Adoption is Patchy"}],Qt=Xt.reduce((n,t)=>(n[t.value]=t.label,n),{}),oa={type:"project",pathway:"pathway-1",goLiveDate:"",fullAdoptionDate:"",benefitRealizationDate:"",toolkitChoice:Qs,phaseCapability:{}};function qn(n,t){if(!n.linkedActions.length)return"Not Started";const a=n.linkedActions.map(s=>{const i=(t[s.lens]||[]).find(h=>h.id===s.actionId);return(i==null?void 0:i.status)||"Planned"});return a.some(s=>s==="Blocked")?"Blocked":a.every(s=>s==="Completed")?"Completed":a.some(s=>s!=="Planned")?"In Progress":"Not Started"}function vt(){return`cst-${Date.now()}-${Math.random().toString(36).slice(2,10)}`}function Qn(n){return{trustName:(n==null?void 0:n.trustName)||"",region:(n==null?void 0:n.region)||"",trustType:(n==null?void 0:n.trustType)||"",projectName:(n==null?void 0:n.projectName)||"",leadName:(n==null?void 0:n.leadName)||"",cst:{...oa,...(n==null?void 0:n.cst)||{}},linkOverrides:n==null?void 0:n.linkOverrides,teamMembers:(n==null?void 0:n.teamMembers)||[],cstId:n==null?void 0:n.cstId}}function ia(n){return n?Object.keys(n).reduce((t,a)=>{const s=n[a]||{};return t[a]={"pathway-1":[...s["pathway-1"]||[]],"pathway-2":[...s["pathway-2"]||[]],"pathway-3":[...s["pathway-3"]||[]]},t},{}):{}}function _n(n){return{view:(n==null?void 0:n.view)||"dashboard",orgProfile:Qn(n==null?void 0:n.orgProfile),currentDraft:(n==null?void 0:n.currentDraft)||{},objectives:n!=null&&n.objectives?et(n.objectives):{},suppressedAutoActions:ra(n==null?void 0:n.suppressedAutoActions),auditLog:la(n==null?void 0:n.auditLog),history:(n==null?void 0:n.history)||[],phaseOverrides:(n==null?void 0:n.phaseOverrides)||{},pathwayChecks:ia(n==null?void 0:n.pathwayChecks)}}function ra(n){return n?Object.keys(n).reduce((t,a)=>(t[a]=[...n[a]||[]],t),{}):{}}function la(n){return n?n.map(t=>({...t})):[]}function Ln(){return{score:0,justification:"",evidence:"",actions:[]}}function Zt(n){return{score:n.score,justification:n.justification,evidence:n.evidence,actions:n.actions.map(t=>({...t,linkedTargets:(t.linkedTargets||[]).map(a=>({componentId:a.componentId,lens:a.lens}))}))}}function Zn(n){return Object.keys(n).reduce((t,a)=>(t[a]=Object.keys(n[a]).reduce((s,i)=>(s[i]=Zt(n[a][i]),s),{}),t),{})}function ca(n){return{...n,linkedActions:n.linkedActions.map(t=>({...t}))}}function et(n){return Object.keys(n).reduce((t,a)=>(t[a]=(n[a]||[]).map(ca),t),{})}const Kn={1:{vision:5,case_for_change:5,sponsorship:1,change_network:1,benefits:1,change_impact:1,risk_management:1,cm_readiness:1,stakeholder:1,resistance:1,skills_learning:1,capability:1,change_adoption:1,process_change:1,reinforcement:1,org_maturity:1,transfer_bau:1},2:{vision:5,case_for_change:5,sponsorship:2,change_network:2,benefits:3,change_impact:2,risk_management:2,cm_readiness:2,stakeholder:2,resistance:2,skills_learning:2,capability:2,change_adoption:2,process_change:3,reinforcement:2,org_maturity:2,transfer_bau:2},3:{vision:5,case_for_change:5,sponsorship:3,change_network:3,benefits:4,change_impact:3,risk_management:3,cm_readiness:3,stakeholder:3,resistance:3,skills_learning:4,capability:3,change_adoption:3,process_change:4,reinforcement:3,org_maturity:3,transfer_bau:3},4:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:4,stakeholder:5,resistance:4,skills_learning:5,capability:4,change_adoption:4,process_change:5,reinforcement:4,org_maturity:4,transfer_bau:4},5:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:5,stakeholder:5,resistance:5,skills_learning:5,capability:5,change_adoption:5,process_change:5,reinforcement:5,org_maturity:5,transfer_bau:5}};function hn(n,t,a){return!t||!Kn[t]?a:Kn[t][n]??a}function yt(n,t){var j;let a=0,s=0,i=0,h=0;const p=new Map,m=[];t.forEach(B=>{const y=p.get(B.phase)||{componentCount:0,assessedLenses:0,totalLenses:0,onTrackComponents:0,totalActions:0,completedActions:0};y.componentCount+=1,y.totalLenses+=B.lenses.length;let Y=0,N=0,F=0,G=0;B.lenses.forEach(ee=>{var xe;const ue=(xe=n.currentDraft[B.id])==null?void 0:xe[ee],$=Number((ue==null?void 0:ue.score)||0);a+=$,Y+=$,$>0&&(s+=1,N+=1,y.assessedLenses+=1),((ue==null?void 0:ue.actions)||[]).forEach(Se=>{i+=1,F+=1,y.totalActions+=1,Kt(Se.status)&&(h+=1,G+=1,y.completedActions+=1)})});const ge=B.lenses.length?Number((Y/B.lenses.length).toFixed(1)):0,le=hn(B.id,B.phase,B.target),me=Number(Math.max(0,le-ge).toFixed(1));ge>=le&&(y.onTrackComponents+=1),m.push({component:B,avgScore:ge,gapToTarget:me,assessedLenses:N,totalLenses:B.lenses.length,totalActions:F,completedActions:G}),p.set(B.phase,y)});const o=t.reduce((B,y)=>B+y.lenses.length,0),C=o*5,l=C?Math.round(a/C*100):0,c=i?Math.round(h/i*100):0,u=[...p.entries()].sort(([B],[y])=>B-y).map(([B,y])=>{const Y=y.totalActions?Math.round(y.completedActions/y.totalActions*100):0,N=y.componentCount?y.onTrackComponents/y.componentCount:0,F=N>=.75&&Y>=50?"Green":N>=.4||Y>=25?"Amber":"Red";return{phase:B,componentCount:y.componentCount,assessedLenses:y.assessedLenses,totalLenses:y.totalLenses,onTrackComponents:y.onTrackComponents,actionCompletionPct:Y,rag:F}}),b=u.find(B=>B.onTrackComponents<B.componentCount),L=(b==null?void 0:b.phase)||((j=u[u.length-1])==null?void 0:j.phase)||1,V=m.filter(({component:B,gapToTarget:y})=>B.phase<=L+1&&y>0).sort((B,y)=>B.component.phase!==y.component.phase?B.component.phase-y.component.phase:y.gapToTarget-B.gapToTarget).slice(0,3).map(({component:B,avgScore:y,gapToTarget:Y,totalActions:N,completedActions:F,assessedLenses:G,totalLenses:ge})=>{const le=Math.max(0,N-F),me=G<ge?`Assess ${ge-G} remaining lens area(s).`:le>0?`Complete ${le} open action(s).`:"Create at least one delivery action linked to this component.";return{componentId:B.id,componentLabel:B.label,phase:B.phase,gapToTarget:Y,message:`Raise ${B.label} from ${y.toFixed(1)} to target ${B.target}. ${me}`}});return{totalCurrent:a,assessedCount:s,totalExpected:o,overallPct:l,totalActions:i,completedActions:h,actionCompletionPct:c,currentPhase:L,phaseSummaries:u,nextSteps:V}}function da(n,t,a,s){return t.map(i=>{let h=0,p=0;return a.forEach(m=>{m.lenses.includes(i)&&(h+=Number(s(m.id,i).score||0),p+=1)}),p?Number((h/p).toFixed(1)):0})}function ma(n,t){return n.map(a=>{let s=0,i=0;return t.forEach(h=>{h.lenses.includes(a)&&(s+=h.target,i+=1)}),i?Number((s/i).toFixed(1)):0})}function ua(n,t,a,s){const i=da(n,t,a,s),h=ma(t,a);return{labels:t,datasets:[{label:"Current Score",data:i,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",borderWidth:2,pointRadius:4,pointHoverRadius:6},{label:"Target",data:h,borderColor:"#00A499",backgroundColor:"rgba(0, 164, 153, 0.05)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function ga(n,t,a){const s=a&&Kn[a]?a:null,i=p=>p<=0?"#768692":p<1.5?"#AE2521":p<2.5?"#FFB81C":p<3.5?"#005EB8":p<4.5?"#330072":"#00A499",h=n.map(p=>{const m=p.lenses.reduce((o,C)=>o+Number(t(p.id,C).score||0),0);return Number((m/p.lenses.length).toFixed(1))});return{labels:n.map(p=>p.label),datasets:[{label:"Current Average Readiness",data:h,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.12)",borderWidth:2,pointRadius:4,pointHoverRadius:6,pointBackgroundColor:h.map(i),pointBorderColor:h.map(i)},{label:s?`Exemplar (Phase ${s})`:"Target Average",data:n.map(p=>hn(p.id,s||void 0,p.target)),borderColor:"#94a3b8",backgroundColor:"rgba(148, 163, 184, 0.06)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function pa(n,t,a){const s=[],i=new Set,h=(p,m,o)=>{const C=`${o.id}:${p}:${m}`;if(i.has(C))return;i.add(C);const l=t(p);s.push({compId:p,component:l.label,lens:m,action:{...o}})};return Object.keys(n.currentDraft).forEach(p=>{Object.keys(n.currentDraft[p]).forEach(m=>{(a(p,m).actions||[]).forEach(C=>{(C.linkedTargets&&C.linkedTargets.length?C.linkedTargets:[{componentId:p,lens:m}]).forEach(c=>{h(c.componentId,c.lens,C)})})})}),s}function ha(n,t,a){var o;const s=((o=n.objectives)==null?void 0:o[t])||[],i=C=>C.reduce((l,c)=>(l[c]=a(t,c).actions,l),{}),h=Array.from(new Set(s.flatMap(C=>C.linkedActions.map(l=>l.lens)))),p=i(h),m=s.filter(C=>qn(C,p)==="Completed").length;return{total:s.length,completed:m}}const fa=`Pathway 1 - We are starting AVT for the first time
Vision
Are you on track?
Descriptor: Organisations are defining what AVT is for and why it matters for care and staff
experience.
☐ Define a clear purpose for AVT focused on improving patient care and clinician experience.
☐ Articulate how AVT improves interaction, workflow and time back to care.
☐ Align the vision with organisational priorities and local pressures.
☐ Position AVT as service transformation, not just a technology deployment.
☐ Develop a simple, repeatable explanation of AVT in plain English.
☐ Ensure leaders and early adopters communicate the same core message.
☐ Test understanding with frontline staff and refine the message based on feedback.
☐ Explain what will change in practice, not just why AVT exists for different staff groups.
ARE YOU ON TRACK? – VISION
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted AVT and need to scale up
Vision
Are you on track?
Descriptor: Organisations are ensuring the vision is understood, consistent and reinforced across
teams.
☐ Ensure the vision is understood consistently across teams and services.
☐ Reinforce the purpose of AVT through leaders, champions and day-to-day conversations.
☐ Use real examples from early adopters to show how AVT improves care and experience.
☐ Challenge misconceptions such as ‘just dictation’ or ‘just a productivity tool’.
☐ Keep the vision focused on patient outcomes and staff experience.
☐ Ensure teams understand how AVT changes behaviours and workflows.
☐ Repeat and refresh messaging regularly as rollout expands.
ARE YOU ON TRACK? – VISION
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - AVT is live but adoption is patchy
Vision
Are you on track?
Descriptor: Organisations are correcting misunderstanding and reinforcing the original purpose of
AVT.
☐ Ask staff what they believe AVT is for and identify inconsistencies.
☐ Identify where AVT is being used as dictation rather than as intended.
☐ Pinpoint where the vision has become diluted or misunderstood.
☐ Reset the purpose of AVT using simple, practical language.
☐ Reinforce the vision through visible local clinical leadership.
ARE YOU ON TRACK? – VISION
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting AVT for the first time
Case for Change
Are you on track?
Descriptor: Organisations are building a credible, evidence-based reason for AVT.
☐ Define the core problem AVT is solving for your organisation.
☐ Use local evidence to show the scale of the problem.
☐ Link AVT to real frontline pain points for clinical and admin teams.
☐ Align the case for change with organisational priorities.
☐ Focus the case on staff experience and patient care, not just efficiency.
☐ Avoid over-promising productivity gains at this stage.
☐ Test whether frontline staff recognise and agree with the case being made.
ARE YOU ON TRACK? – CASE FOR CHANGE
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted AVT and need to scale up
Case for Change
Are you on track?
Descriptor: Organisations are strengthening and validating the case using real evidence.
☐ Update the case for change using real pilot data and staff experience.
☐ Show how AVT is improving workflow, experience or care in early adopters.
☐ Ensure the case is understood consistently across services.
☐ Tailor the case to different teams and specialties.
☐ Balance qualitative benefits with measurable indicators.
☐ Reinforce the case through leaders and champions.
ARE YOU ON TRACK? – CASE FOR CHANGE
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - AVT is live but adoption is patchy
Case for Change
Are you on track?
Descriptor: Organisations are reconnecting AVT to real pressures and needs.
☐ Ask staff whether AVT is solving a meaningful problem for them.
☐ Identify where the original case for change no longer resonates.
☐ Pinpoint whether resistance is driven by experience, workflow or perception.
☐ Reset the case using local, credible examples.
☐ Challenge the perception that AVT adds work without value.
ARE YOU ON TRACK? – CASE FOR CHANGE
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting AVT for the first time
Senior Sponsorship and Governance
Are you on track?
Descriptor: Organisations are establishing governance structures and decision-making for AVT.
☐ Identify a credible clinical sponsor and an executive sponsor for AVT.
☐ Define clear ownership across clinical, operational, digital and governance teams.
☐ Establish a governance structure with the right representation.
☐ Agree how key decisions will be made and escalated.
☐ Involve Information Governance and clinical safety early.
☐ Align AVT governance to existing trust governance structures.
☐ Clarify expectations for clinician accountability and sign-off.
☐ Ensure sponsors can clearly explain why AVT matters.
ARE YOU ON TRACK? – SENIOR SPONSORSHIP AND GOVERNANCE
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted AVT and need to scale up
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
Pathway 3 - AVT is live but adoption is patchy
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
Pathway 1 - We are starting AVT for the first time
Benefits and WIIFM
Are you on track?
Descriptor: Organisations are defining the benefits that matter for staff, patients and services.
☐ Define clear, realistic benefits for staff, patients and services before rollout begins.
☐ Prioritise the benefits that matter most for the pilot setting and use case.
☐ Link expected benefits directly to the case for change and vision for AVT.
☐ Agree how benefits will be measured using both qualitative and quantitative evidence.
☐ Set realistic expectations about when benefits are likely to emerge and where they may be limited.
ARE YOU ON TRACK? – BENEFITS AND WHAT’S IN IT FOR ME (WIIFM)
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted AVT and need to scale up
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
Pathway 3 - AVT is live but adoption is patchy
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
Pathway 1 - We are starting AVT for the first time
Stakeholder Engagement and Communication
Are you on track?
Descriptor: Organisations are building early awareness, trust and understanding.
☐ Define clear, simple messages about what AVT is and what it is not.
☐ Explain why AVT is being introduced in terms staff care about.
☐ Identify key stakeholder groups across clinical, admin, operational and digital areas.
☐ Tailor messages to different roles and workflows.
☐ Identify early adopters and involve them early.
☐ Set realistic expectations about early challenges and learning curves.
ARE YOU ON TRACK? – STAKEHOLDER ENGAGEMENT AND
COMMUNICATION
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted AVT and need to scale up
Stakeholder Engagement and Communication
Are you on track?
Descriptor: Organisations are reinforcing messaging and maintaining consistency across teams.
☐ Ensure communication is consistent across services and teams.
☐ Reinforce messages through leaders, champions and everyday conversations.
☐ Share real examples of AVT use in practice.
☐ Communicate how AVT is improving care and experience locally.
☐ Challenge misinformation and unhelpful narratives.
☐ Keep feedback channels visible and accessible.
☐ Use feedback to adapt messaging and address emerging concerns.
☐ Re-engage teams where rollout has been slower or more complex.
ARE YOU ON TRACK? – STAKEHOLDER ENGAGEMENT AND
COMMUNICATION
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - AVT is live but adoption is patchy
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
Pathway 1 - We are starting AVT for the first time
Process Change and Ways of Working
Are you on track?
Descriptor: Organisations are designing AVT-enabled workflows across clinical and administrative
practice.
☐ Map current clinical and administrative workflows before introducing AVT.
☐ Identify where documentation burdens, delays and handoff issues currently occur.
☐ Define future workflows that incorporate AVT into real operational practice.
☐ Involve clinicians, admin staff and operational teams in designing new workflows.
☐ Define how AVT fits into consultations, documentation and follow-up processes.
☐ Design how clinical and admin handoffs will work with AVT in place.
☐ Identify where workflows differ by service or specialty.
☐ Test new workflows in practice and refine them before wider rollout.
☐ Ensure operational leaders are involved in agreeing and owning new ways of working.
ARE YOU ON TRACK? – PROCESS CHANGE AND WAYS OF WORKING
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted AVT and need to scale up
Process Change and Ways of Working
Are you on track?
Descriptor: Organisations are embedding and standardising AVT-enabled workflows across services.
☐ Define clear and repeatable workflows for AVT-enabled practice.
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
Pathway 3 - AVT is live but adoption is patchy
Process Change and Ways of Working
Are you on track?
Descriptor: Organisations are fixing broken workflows and removing workarounds.
☐ Identify where teams are not following the intended workflow.
☐ Spot where staff are reverting to old processes or workarounds.
☐ Pinpoint the specific parts of the workflow that are failing.
☐ Retire old processes that are still running in parallel.
☐ Reinforce correct workflows through local leadership and support.
☐ Remove practical barriers preventing teams from using AVT properly.
ARE YOU ON TRACK? – PROCESS CHANGE AND WAYS OF WORKING
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting AVT for the first time
Change Impact and Risk
Are you on track?
Descriptor: Organisations are understanding who is impacted and where risk sits before rollout.
☐ Identify all roles impacted by AVT across clinical, admin and operational areas.
☐ Define how workflows, responsibilities and behaviours will change for each role.
☐ Assess where impact differs across specialties and services.
☐ Identify high-risk use cases and workflows early.
☐ Engage impacted staff to validate and refine identified impacts.
☐ Assess risks relating to safety, accuracy and workflow disruption.
☐ Define how key risks will be monitored and mitigated during the pilot.
ARE YOU ON TRACK? – CHANGE IMPACT AND RISK
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted AVT and need to scale up
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
Pathway 3 - AVT is live but adoption is patchy
Change Impact and Risk
Are you on track?
Descriptor: Organisations are addressing the impacts and risks that are limiting adoption.
☐ Identify where AVT is creating unintended burden, frustration or risk.
☐ Pinpoint the roles or teams most negatively impacted.
☐ Distinguish between real risks, perceived risks and misunderstood risks.
☐ Address the specific issues preventing safe and confident use.
☐ Focus support on the highest-risk and most impacted areas.
ARE YOU ON TRACK? – CHANGE IMPACT AND RISK
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting AVT for the first time
Skills, Learning, Capability and Confidence
Are you on track?
Descriptor: Organisations are introducing role-based learning and practical support.
☐ Design learning around real clinical and administrative workflows rather than system features alone.
☐ Show staff how AVT fits their role, tasks and day-to-day practice.
☐ Provide practical hands-on opportunities to try AVT in relevant scenarios.
☐ Make support available during early live use, not just before go-live.
☐ Set expectations that confidence will build through use and repetition.
☐ Explain what good use looks like in practice for different roles and settings.
ARE YOU ON TRACK? – SKILLS, LEARNING, CAPABILITY AND CONFIDENCE
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted AVT and need to scale up
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
Pathway 3 - AVT is live but adoption is patchy
Skills, Learning, Capability and Confidence
Are you on track?
Descriptor: Organisations are closing capability gaps that are preventing confident use.
☐ Identify where staff lack confidence or practical capability to use AVT well.
☐ Target support to the roles, teams or services where capability gaps are most visible.
☐ Deliver support in the workflow rather than relying on more classroom-style training.
☐ Use local super users to model and reinforce good practice in real settings.
☐ Address the specific capability gaps that are preventing consistent use.
ARE YOU ON TRACK? – SKILLS, LEARNING, CAPABILITY AND CONFIDENCE
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting AVT for the first time
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
Pathway 2 - We have piloted AVT and need to scale up
Change Adoption
Are you on track?
Descriptor: Organisations are monitoring, guiding and strengthening adoption at scale.
☐ Monitor adoption across teams, roles and services as rollout expands.
☐ Identify variation in how AVT is being used across specialties and settings.
☐ Target support to areas with lower confidence, lower uptake or inconsistent use.
☐ Reinforce expected AVT behaviours through leaders, champions and practice-based support.
☐ Use both data and frontline insight to guide rollout decisions and adjustments.
☐ Distinguish between access, trial, routine use and selective use when reviewing adoption.
☐ Adjust the rollout approach where adoption patterns show mismatch between the tool and the
workflow.
☐ Keep reinforcing what good adoption looks like as more teams come on board.
ARE YOU ON TRACK? – CHANGE ADOPTION
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - AVT is live but adoption is patchy
Change Adoption
Are you on track?
Descriptor: Organisations are identifying why use is inconsistent and taking action.
☐ Identify where adoption is inconsistent, superficial or declining.
☐ Investigate the root causes of selective use, workarounds or avoidance.
☐ Address specific behaviours or barriers that are undermining confident routine use.
☐ Reset expectations through targeted frontline engagement and support.
☐ Use local leaders and peers to reinforce intended use where credibility is low.
☐ Reassess whether AVT is being used in services where it genuinely fits the workflow.
ARE YOU ON TRACK? – CHANGE ADOPTION
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting AVT for the first time
Transfer to BAU
Are you on track?
Descriptor: Organisations are planning how AVT will be supported and owned beyond rollout.
☐ Define who will own AVT after the pilot and what that ownership includes.
☐ Plan how AVT will be supported operationally once initial rollout activity reduces.
☐ Define how AVT will be reviewed, improved and maintained beyond go-live.
☐ Identify the governance routes AVT will sit within once it becomes business as usual.
☐ Clarify how issues, template changes and workflow changes will be managed over time.
☐ Decide how benefits, adoption and risk will continue to be monitored after rollout.
ARE YOU ON TRACK? – TRANSFER TO BUSINESS AS USUAL (BAU)
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted AVT and need to scale up
Transfer to BAU
Are you on track?
Descriptor: Organisations are embedding AVT into business-as-usual governance and support.
☐ Confirm ownership of AVT at organisational, service and operational level as rollout expands.
☐ Embed AVT into routine governance, reporting and operational review forums.
☐ Ensure support routes are clear and accessible across all services using AVT.
☐ Review and refine templates, workflows and guidance as AVT use spreads.
☐ Capture learning from early adopters and use it to strengthen BAU arrangements.
☐ Align onboarding, induction and refresher support so new users can adopt AVT reliably.
☐ Ensure BAU arrangements support sustained use, not just technical availability.
ARE YOU ON TRACK? – TRANSFER TO BUSINESS AS USUAL (BAU)
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - AVT is live but adoption is patchy
Transfer to BAU
Are you on track?
Descriptor: Organisations are re-establishing AVT as routine operational practice.
☐ Identify where AVT has drifted out of routine use or lost operational ownership.
☐ Reconfirm who is responsible for adoption, support and improvement at service level.
☐ Fix gaps in support routes where staff do not know how to get help.
☐ Re-embed AVT into normal governance and operational forums if necessary.
☐ Reset BAU expectations where AVT is still being treated as a temporary project tool.
ARE YOU ON TRACK? – TRANSFER TO BUSINESS AS USUAL (BAU)
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting AVT for the first time
Change Network
Are you on track?
Descriptor: Organisations are establishing a credible network of local champions and supporters.
☐ Identify credible local champions who are respected by peers and close to frontline work.
☐ Define what the change network is there to do beyond simple promotion of AVT.
☐ Involve champions early in testing messages, workflows and early use cases.
☐ Ensure the network includes relevant clinical, admin and operational voices where possible.
☐ Give champions the information and support they need to answer questions credibly.
☐ Make it clear how champions will feed insight back into the programme.
ARE YOU ON TRACK? – CHANGE NETWORK
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted AVT and need to scale up
Change Network
Are you on track?
Descriptor: Organisations are using the network to spread learning and support local adoption.
☐ Use the change network to share practical examples of AVT use across services.
☐ Support champions to help teams adapt AVT to local workflows.
☐ Keep the network active through regular contact, shared learning and visible support.
☐ Use champions to surface emerging issues early rather than waiting for formal escalation.
☐ Expand the network as rollout spreads into new areas and specialties.
☐ Avoid over-relying on one or two enthusiastic individuals by broadening local capability.
☐ Keep the network connected to clinical leadership and programme decision-making.
ARE YOU ON TRACK? – CHANGE NETWORK
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - AVT is live but adoption is patchy
Change Network
Are you on track?
Descriptor: Organisations are reactivating the network to support struggling teams.
☐ Identify where or if there is no credible local championing or peer support.
☐ Re-engage trusted local people who can model AVT use in practice.
☐ Use the network to understand why specific teams have disengaged or stalled.
☐ Use peer influence to rebuild credibility where central messaging is no longer landing.
☐ Reconnect the network to practical support and local problem-solving where it has drifted into
inactivity.
ARE YOU ON TRACK? – CHANGE NETWORK
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting AVT for the first time
Reinforcement
Are you on track?
Descriptor: Organisations are reinforcing early use through support, feedback and visible examples
☐ Define how AVT use will be reinforced during the early learning period.
☐ Reinforce the purpose of AVT through repeated messages from leaders and champions.
☐ Build in opportunities for staff to review, correct and learn from early AVT outputs.
☐ Set clear expectations that early friction is normal and support will be available.
☐ Use visible early examples of success to strengthen confidence and belief.
☐ Decide how feedback from early use will be acted on and communicated back.
ARE YOU ON TRACK? – REINFORCEMENT
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted AVT and need to scale up
Reinforcement
Are you on track?
Descriptor: Organisations are reinforcing confident and routine use in practice.
☐ Reinforce AVT use through visible peer practice and trusted local champions.
☐ Keep support available at the point of use as rollout widens.
☐ Share practical examples of how teams are making AVT work in real settings.
☐ Show clearly what has changed in response to staff feedback.
☐ Reinforce the personal and workflow benefits staff are actually experiencing.
☐ Protect teams through the early dip in confidence rather than judging success too soon.
☐ Keep repeating the core purpose, expected use and support routes as rollout expands.
ARE YOU ON TRACK? – REINFORCEMENT
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 3 - AVT is live but adoption is patchy
Reinforcement
Are you on track?
Descriptor: Organisations are restoring why AVT is important where usage has dropped and support
is not there.
☐ Identify where AVT usage has dropped away or workarounds have appeared.
☐ Reintroduce local support, peer-to-peer support and visible leadership where use has drifted.
☐ Use practical examples and feedback loops to rebuild confidence and routine use.
☐ Address the specific issues teams are encountering rather than repeating generic rollout messages.
☐ Check whether the reinforcement strategy is actually changing behaviour or just increasing
awareness.
ARE YOU ON TRACK? – REINFORCEMENT
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 1 - We are starting AVT for the first time
Resistance
Are you on track?
Descriptor: Organisations are identifying and addressing likely concerns before rollout.
☐ Identify the main concerns staff are likely to have about AVT before rollout begins.
☐ Distinguish between legitimate concerns, misconceptions and assumptions about the technology.
☐ Address likely issues such as accuracy, workflow fit, trust, consent and accountability early.
☐ Give staff permission to voice concerns without being labelled resistant.
☐ Build realistic expectations about what AVT can and cannot do at this stage.
☐ Explain where AVT may not fit every setting perfectly and why professional judgement still matters.
ARE YOU ON TRACK? – RESISTANCE MANAGEMENT
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted AVT and need to scale up
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
Pathway 3 - AVT is live but adoption is patchy
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
Pathway 1 - We are starting AVT for the first time
Readiness and Planning
Are you on track?
Descriptor: Organisations are preparing and assessing readiness for a safe and credible pilot.
☐ Assess organisational readiness for AVT across clinical, operational, digital and governance areas.
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
Pathway 2 - We have piloted AVT and need to scale up
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
Pathway 3 - AVT is live but adoption is patchy
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
Pathway 1 - We are starting AVT for the first time
Organisational Change Management Maturity
Are you on track?
Descriptor: Organisations are identifying and addressing likely concerns before rollout.
☐ Identify the main concerns staff are likely to have about AVT before rollout begins.
☐ Distinguish between legitimate concerns, misconceptions and assumptions about the technology.
☐ Address likely issues such as accuracy, workflow fit, trust, consent and accountability early.
☐ Give staff permission to voice concerns without being labelled resistant.
☐ Build realistic expectations about what AVT can and cannot do at this stage.
☐ Explain where AVT may not fit every setting perfectly and why professional judgement still matters.
ARE YOU ON TRACK? – ORGANISATIONAL CHANGE MANAGEMENT
MATURITY
Map with pin with solid fill
Line arrow: Horizontal U-turn with solid fill
Pathway 2 - We have piloted AVT and need to scale up
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
Pathway 3 - AVT is live but adoption is patchy
Organisational Change Management Maturity
Are you on track?
Descriptor: Organisations are addressing maturity gaps that are causing inconsistent adoption.
☐ Identify whether patchy adoption reflects weaknesses in change management maturity rather than
the technology alone.
☐ Pinpoint where weak sponsorship, communications, local ownership or reinforcement are
contributing to low adoption.
☐ Use maturity insight to focus recovery activity on the weakest change mechanisms in affected
teams.
☐ Strengthen practical change disciplines where organisations are relying on access to AVT without
enough support to embed it.
☐ Reassess maturity after corrective action to test whether the organisation is better placed to sustain
adoption.`,Bn={"Pathway 1 - We are starting AVT for the first time":"pathway-1","Pathway 2 - We have piloted AVT and need to scale up":"pathway-2","Pathway 3 - AVT is live but adoption is patchy":"pathway-3","Pathway 1 - We are starting product for the first time":"pathway-1","Pathway 2 - We have piloted product and need to scale up":"pathway-2","Pathway 3 - product is live but adoption is patchy":"pathway-3","Pathway 1 - Pilot":"pathway-1","Pathway 2 - Scale up":"pathway-2","Pathway 3 - Reassess":"pathway-3"},ba={vision:"Vision",case_for_change:"Case for Change",sponsorship:"Senior Sponsorship and Governance",change_network:"Change Network",benefits:"Benefits and WIIFM",stakeholder:"Stakeholder Engagement and Communication",process_change:"Process Change and Ways of Working",change_impact:"Change Impact and Risk",risk_management:"Change Impact and Risk",skills_learning:"Skills, Learning, Capability and Confidence",capability:"Skills, Learning, Capability and Confidence",change_adoption:"Change Adoption",transfer_bau:"Transfer to BAU",reinforcement:"Reinforcement",resistance:"Resistance",cm_readiness:"Readiness and Planning",org_maturity:"Organisational Change Management Maturity"};function xa(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function Fn(n){return n.replace(/\bAVT\b/g,"${productName}")}function Sa(n){const t=n.split(/\r?\n/).map(i=>i.trim()),a={};let s=0;for(;s<t.length;){const i=t[s],h=Bn[i];if(!h){s+=1;continue}for(s+=1;s<t.length&&!t[s];)s+=1;if(s>=t.length)break;const p=t[s];for(s+=1;s<t.length&&(!t[s]||t[s]==="Are you on track?");)s+=1;let m="";if(s<t.length&&t[s].startsWith("Descriptor:"))for(m=Fn(t[s].replace("Descriptor:","").trim()),s+=1;s<t.length&&t[s]&&!t[s].startsWith("☐")&&!t[s].startsWith("ARE YOU ON TRACK?")&&!Bn[t[s]];)m=Fn(`${m} ${t[s]}`.trim()),s+=1;const o=[];for(;s<t.length&&t[s].startsWith("☐");){const C=Fn(t[s].replace(/^☐\s*/,"").trim()),l=`${h}:${xa(p)}:${o.length+1}`;o.push({key:l,text:C}),s+=1}for(a[p]||(a[p]={}),a[p][h]={domain:p,descriptor:m,checklist:o};s<t.length&&t[s]&&!Bn[t[s]];)s+=1}return a}const va=Sa(fa);function ya(n){return ba[n]||null}function nt(n,t){var s;const a=ya(n);return a&&((s=va[a])==null?void 0:s[t])||null}function es(n,t){if(!t||t.checklist.length===0)return{status:"on-track",completionPct:100,checkedCount:0,totalCount:0};const a=t.checklist.length,s=new Set(n),i=t.checklist.filter(p=>s.has(p.key)).length,h=Math.round(i/a*100);return h>=80?{status:"on-track",completionPct:h,checkedCount:i,totalCount:a}:h>=45?{status:"attention",completionPct:h,checkedCount:i,totalCount:a}:{status:"off-track",completionPct:h,checkedCount:i,totalCount:a}}function wa(n){const t=es(n.checkedItemKeys,n.rule);return!n.rule||n.rule.checklist.length===0?{status:n.averageScore>=n.targetScore?"on-track":"attention",completionPct:t.completionPct,checkedCount:t.checkedCount,totalCount:t.totalCount}:t.status==="off-track"?t:n.averageScore<Math.max(1,n.targetScore-1)&&t.status!=="on-track"?{...t,status:"attention"}:t}const Ca=["Strategic Direction and Leadership","People Experience and Culture","Planning and Risk","Skills and Behaviour","Process and Sustainment"],tt={"Strategic Direction and Leadership":{outcome:"Provide a clear and unifying direction for the change, backed by visible, empowered leadership that removes barriers, prioritises resources, and drives accountability.",whatGoodLooksLike:"Leaders speak with one voice, consistently reinforcing the vision and outcomes. Decisions are timely, transparent, and aligned to strategic priorities. Governance is purposeful, with clear roles and escalations. Everyone understands why the change is happening and how it connects to organisational goals."},"People Experience and Culture":{outcome:"Create the conditions where people feel informed, supported, safe, and motivated, creating a culture that embraces the change rather than resists it.",whatGoodLooksLike:"Staff feel involved, heard, and respected. Communication is timely, honest, and tailored to different roles. People know how the change affects them and feel psychologically safe to raise concerns. Change Champions are active, engagement is high, and belief improves over time. Behaviours begin to shift organically as trust grows."},"Planning and Risk":{outcome:"Use evidence, data, and structured analysis to plan the change effectively, anticipate impacts, manage risks, and inform decision-making throughout delivery.",whatGoodLooksLike:"Impacts are well understood and documented. Risks are identified early and mitigated proactively. Baselines and KPIs are established before implementation, with benefits tracked throughout. Pilots and readiness checks ensure no surprises. Decisions are grounded in insight, not opinion."},"Skills and Behaviour":{outcome:"Give people the capabilities, confidence, and behavioural habits they need to adopt the new ways of working consistently and sustainably.",whatGoodLooksLike:"Staff are trained, assessed, and supported in ways that match real-world workflows. New behaviours are clearly defined, reinforced by leaders, and evident in day-to-day practice. Change Champions and Super-users are active; confidence grows over time; and requests for support decrease as competence increases."},"Process and Sustainment":{outcome:"Embed the change into operational processes, ensuring it becomes the way we do things, and create mechanisms for continuous improvement and long-term stability.",whatGoodLooksLike:"Updated SOPs, workflows, and ownership structures are in place and being followed. Issues are resolved quickly. Benefits are monitored and reported regularly. Improvements continue beyond go-live, with clear BAU ownership. The change stabilises and performance gains hold or increase over time."}},Na={vision:"Defines the future state and why the change matters.",case_for_change:"Builds a clear, credible rationale and expected benefits.",sponsorship:"Secures visible leadership ownership, governance, and decisions.",change_network:"Builds and mobilises change agents and local champions.",benefits:"Tracks baseline, benefits ownership, and value realisation.",change_impact:"Assesses who is impacted and the scale of change required.",risk_management:"Identifies, tracks, and mitigates adoption and delivery risks.",cm_readiness:"Confirms readiness, sequencing, and change planning discipline.",stakeholder:"Plans and delivers stakeholder engagement and communications.",resistance:"Anticipates and addresses resistance with practical interventions.",skills_learning:"Designs learning, support, and reinforcement for role readiness.",capability:"Builds confidence and competence to adopt new ways of working.",change_adoption:"Measures uptake and consistency of new behaviours in practice.",process_change:"Embeds workflow changes into everyday operational delivery.",reinforcement:"Sustains momentum so adoption does not decay after launch.",org_maturity:"Improves long-term organisational change capability and maturity.",transfer_bau:"Transitions ownership into BAU with clear accountability."};function Ea(n){return Na[n]||"Component description not yet defined."}function Ia(n){const a=tt[n];return a?`This lens ${a.outcome.charAt(0).toLowerCase()}${a.outcome.slice(1)}`:"This lens provides an additional perspective on how each component is landing across teams and services."}function _a(n){return n<=0?"Green":n>=2?"Red":n>=1?"Amber":"Blue"}function ns(n,t){if(n<=0)return"Amber";const a=t-n;return a>=2?"Red":a>0?"Amber":"Green"}const ts={Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},Aa={Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"};function ja(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function wt(n,t,a,s,i){return i?"Blue":a<=0?"N/A":s<=0?"Amber":n>=t&&s<a?"Green":ns(n,t)}const Oa={"N/A":"text-slate-600 bg-slate-200",Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},Ct=["#0f766e","#0369a1","#7c3aed","#b45309","#be123c"],ka=[{score:0,label:"Pre-Emergent",color:"#768692"},{score:1,label:"Emerging",color:"#AE2521"},{score:2,label:"Developing",color:"#FFB81C"},{score:3,label:"Maturing",color:"#005EB8"},{score:4,label:"Embedding",color:"#330072"},{score:5,label:"Thriving",color:"#00A499"}];function Ra({store:n,components:t,lenses:a,metrics:s,getEntry:i,onComponentClick:h,pathway:p,pathwayChecks:m,onNavigate:o,onOpenLensInfo:C,onOpenOnboarding:l,colorAccessibilityMode:c="standard",darkMode:u=!1,phaseFocusMode:b="auto",manualPhaseFocus:L,onPhaseFocusModeChange:V,onManualPhaseFocusChange:j,onResetPhaseFocus:B}){const[y,Y]=g.useState(""),[N,F]=g.useState("all"),[G,ge]=g.useState("all"),[le,me]=g.useState("all"),[ee,ue]=g.useState("score"),[$,J]=g.useState("desc"),[xe,Se]=g.useState(!1),[_,ne]=g.useState(!0),[X,Ae]=g.useState(!1),Ie=g.useMemo(()=>[...new Set(t.map(S=>S.phase))].sort((S,U)=>S-U),[t]),v=s.currentPhase,E=b==="manual"&&L&&Ie.includes(L)?L:v,[fe,de]=g.useState(!0),Q=g.useMemo(()=>n.history.length>0?n.history[n.history.length-1]:null,[n.history]),H=Q!==null?s.overallPct-Q.overallPercentage:null,te=g.useMemo(()=>{if(s.assessedCount===0)return!1;const S=new Date().toLocaleString("en-GB",{month:"short",year:"numeric"});return!n.history.some(U=>U.monthLabel===S)},[n.history,s.assessedCount]),f=g.useMemo(()=>{const S=new Date;S.setHours(0,0,0,0);const U=new Date(S);U.setDate(S.getDate()+7);const K=[];return t.forEach(se=>{se.lenses.forEach(ve=>{i(se.id,ve).actions.forEach(ye=>{if(!ye.dueDate||ye.status==="Completed"||ye.status==="Cancelled")return;const pe=new Date(ye.dueDate);isNaN(pe.getTime())||pe<=U&&K.push({action:ye,componentLabel:se.label,componentId:se.id,isOverdue:pe<S})})})}),K.sort((se,ve)=>new Date(se.action.dueDate).getTime()-new Date(ve.action.dueDate).getTime())},[t,i,n.currentDraft]),A=g.useMemo(()=>{const S=y.trim().toLowerCase();return t.map(U=>{let K=0,se=!0,ve=0,ye=0;U.lenses.forEach(ke=>{const r=i(U.id,ke),w=Number(r.score||0);K+=w,w!==5&&(se=!1);const O=r.actions||[];ve+=O.length,ye+=O.filter(Z=>Z.status==="Completed").length});const pe=Number((K/U.lenses.length).toFixed(1)),ae=hn(U.id,E,U.target),Be=pe===0?"not-started":pe>=ae?"on-track":"below-target";let Ge=null;if(Q){let ke=0;U.lenses.forEach(O=>{var Z,oe;ke+=Number(((oe=(Z=Q.data[U.id])==null?void 0:Z[O])==null?void 0:oe.score)||0)});const r=Number((ke/U.lenses.length).toFixed(1)),w=Number((pe-r).toFixed(1));w!==0&&(Ge=w)}return{component:U,avgNum:pe,exemplarTarget:ae,status:Be,delta:Ge,actionCount:ve,completedActionCount:ye,allLensesLevelFive:se}}).filter(({component:U,status:K})=>N!=="all"&&K!==N||G!=="all"&&U.phase!==G?!1:S?U.label.toLowerCase().includes(S):!0).sort((U,K)=>{let se=0;return ee==="name"?se=U.component.label.localeCompare(K.component.label):ee==="target"?se=U.component.target-K.component.target:se=U.avgNum-K.avgNum,$==="asc"?se:-se})},[t,G,E,i,Q,y,ee,$,N]),I=g.useMemo(()=>b==="auto"?s.nextSteps:t.map(S=>{let U=0,K=0,se=0;S.lenses.forEach(Ge=>{const ke=i(S.id,Ge);U+=Number(ke.score||0);const r=ke.actions||[];K+=r.length,se+=r.filter(w=>w.status==="Completed").length});const ve=Number((U/S.lenses.length).toFixed(1)),ye=hn(S.id,E,S.target),pe=Number(Math.max(0,ye-ve).toFixed(1)),ae=Math.max(0,K-se),Be=ae>0?`Complete ${ae} open action(s).`:"Create at least one delivery action linked to this component.";return{componentId:S.id,componentLabel:S.label,phase:S.phase,gapToTarget:pe,message:`Raise ${S.label} from ${ve.toFixed(1)} to exemplar ${ye.toFixed(1)}. ${Be}`,toolkitLinks:[]}}).filter(S=>S.phase<=E+1&&S.gapToTarget>=0).sort((S,U)=>S.phase!==U.phase?S.phase-U.phase:U.gapToTarget-S.gapToTarget).slice(0,3),[t,E,i,s.nextSteps,b]),k=g.useMemo(()=>{let S=0,U=0;t.forEach(se=>{var pe;const ve=nt(se.id,p),ye=es(((pe=m[se.id])==null?void 0:pe[p])||[],ve);S+=ye.totalCount,U+=ye.checkedCount});const K=S>0?Math.round(U/S*100):100;return{required:S,checked:U,pct:K}},[t,p,m]),R=g.useMemo(()=>{const S=[];return y.trim()&&S.push(`Search: ${y.trim()}`),N!=="all"&&S.push(`Status: ${N.replace("-"," ")}`),G!=="all"&&S.push(`Phase: ${G}`),(ee!=="score"||$!=="desc")&&S.push(`Sort: ${ee} (${$})`),S},[G,y,ee,$,N]),Ee=()=>{Y(""),F("all"),ge("all"),ue("score"),J("desc"),Se(!1)},be=s.phaseSummaries.find(S=>S.phase===E),Oe=(be==null?void 0:be.rag)||"Red",je=Oe.toLowerCase(),ce=c==="color-blind-friendly"?{"N/A":"text-slate-700 bg-slate-200",Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"}:Oa,en=c==="color-blind-friendly"?Aa:ts;return e.jsxs("div",{className:`adoption-dashboard max-w-6xl mx-auto ${u?"theme-dark":"theme-light"}`,children:[fe&&f.length>0&&e.jsx("div",{className:"mb-6 rounded-lg border border-red-200 bg-red-50 p-4",children:e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-sm font-semibold text-red-800 mb-2",children:[f.filter(S=>S.isOverdue).length>0&&`${f.filter(S=>S.isOverdue).length} overdue action${f.filter(S=>S.isOverdue).length>1?"s":""}`,f.filter(S=>S.isOverdue).length>0&&f.filter(S=>!S.isOverdue).length>0&&", ",f.filter(S=>!S.isOverdue).length>0&&`${f.filter(S=>!S.isOverdue).length} due within 7 days`]}),e.jsxs("ul",{className:"space-y-1.5",children:[f.slice(0,3).map(S=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`shrink-0 text-xs font-bold px-1.5 py-0.5 rounded ${S.isOverdue?"bg-red-200 text-red-800":"bg-amber-100 text-amber-800"}`,children:S.isOverdue?"Overdue":"Due soon"}),e.jsxs("span",{className:"text-xs text-slate-700",children:[e.jsx("button",{onClick:()=>h(S.componentId),className:"font-medium text-[#005eb8] hover:underline mr-1",children:S.componentLabel}),"— ",S.action.text,S.action.dueDate&&e.jsxs("span",{className:"text-slate-400 ml-1",children:["(due"," ",new Date(S.action.dueDate).toLocaleDateString("en-GB",{day:"numeric",month:"short"}),")"]})]})]},S.action.id)),f.length>3&&e.jsxs("li",{className:"text-xs text-slate-500 pl-1",children:["+ ",f.length-3," more - see the Action Tracker for the full list."]})]})]}),e.jsx("button",{onClick:()=>de(!1),className:"shrink-0 text-slate-400 hover:text-slate-600 text-xl leading-none","aria-label":"Dismiss",children:"×"})]})}),e.jsxs("div",{className:"mb-1 flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h2",{className:`text-2xl font-bold ${u?"text-slate-100":"text-slate-800"}`,children:"Adoption Engine Dashboard"}),l?e.jsx("button",{type:"button",onClick:l,className:"rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Show introduction again"}):null]}),e.jsxs("p",{className:`text-sm mb-6 ${u?"text-slate-300":"text-slate-600"}`,children:["This tracks how ready ",n.orgProfile.projectName||"your programme"," is for adoption, based on ",t.length," change-management components, each assessed through up to"," ",a.length," lenses."]}),e.jsxs("div",{className:"dashboard-callout dashboard-callout--pathway mb-6 rounded-lg border p-4",children:[e.jsx("p",{className:"dashboard-callout__eyebrow text-xs font-semibold uppercase tracking-wider",children:"Current CST pathway"}),e.jsx("p",{className:"dashboard-callout__title mt-1 text-sm font-semibold",children:Qt[p]}),e.jsxs("p",{className:"dashboard-callout__body mt-1 text-sm",children:["Pathway checklist completion: ",k.checked,"/",k.required," (",k.pct,"%)."]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[e.jsxs("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${u?"text-slate-300":"text-slate-500"}`,children:"Live Delivery Progress"}),e.jsxs("div",{className:"flex items-end gap-3",children:[e.jsxs("span",{className:"text-4xl font-bold text-[#005eb8]",children:[s.overallPct,"%"]}),H!==null&&e.jsxs("span",{className:`text-sm font-semibold mb-1 ${H>0?"text-green-600":H<0?"text-red-500":"text-slate-400"}`,children:[H>0?"↑":H<0?"↓":"="," ",Math.abs(H),"% vs last month"]})]}),e.jsx("div",{className:"mt-4 w-full bg-slate-100 rounded-full h-3 relative overflow-hidden",children:e.jsx("div",{className:"absolute top-0 left-0 h-full bg-[#005eb8]",style:{width:`${s.overallPct}%`}})}),e.jsx("div",{className:"flex justify-between text-xs mt-2 text-slate-400",children:e.jsx("span",{children:"Derived from current working data across all components."})})]}),e.jsxs("div",{className:`dashboard-metric-card dashboard-metric-card--phase dashboard-metric-card--${je} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:"dashboard-metric-card__label text-sm font-medium mb-1",children:"Current Phase Focus"}),e.jsxs("div",{className:"mb-2 flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>V==null?void 0:V("auto"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${b==="auto"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Auto"}),e.jsx("button",{type:"button",onClick:()=>V==null?void 0:V("manual"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${b==="manual"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Manual"}),b==="manual"?e.jsx("select",{value:E,onChange:S=>j==null?void 0:j(Number(S.target.value)),className:"rounded-md border border-white/50 bg-white/90 px-2 py-1 text-xs font-medium text-slate-800","aria-label":"Manual phase focus",children:Ie.map(S=>e.jsx("option",{value:S,children:Ze[S]||`Phase ${S}`},S))}):null,b==="manual"&&B?e.jsx("button",{type:"button",onClick:B,className:"rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100",children:"Reset to suggested"}):null]}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsx("span",{className:"dashboard-metric-card__headline text-4xl font-bold",children:Ze[E]||`Phase ${E}`})}),e.jsxs("p",{className:"dashboard-metric-card__description text-sm mt-2",children:[Oe," status based on delivery progress and action completion.",b==="manual"?` Suggested phase is ${Ze[v]||`Phase ${v}`}.`:""]})]}),e.jsxs("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${u?"text-slate-300":"text-slate-500"}`,children:"Action Completion"}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsxs("span",{className:`text-4xl font-bold ${u?"text-slate-100":"text-slate-700"}`,children:[s.actionCompletionPct,"%"]})}),e.jsxs("p",{className:`text-sm mt-2 ${u?"text-slate-300":"text-slate-500"}`,children:[s.completedActions," of ",s.totalActions," actions completed."]})]})]}),e.jsxs("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"What To Do Next"}),e.jsx("span",{className:`text-xs ${u?"text-slate-400":"text-slate-500"}`,children:"Prioritised for live delivery"})]}),e.jsxs("p",{className:`text-sm mb-4 ${u?"text-slate-300":"text-slate-500"}`,children:["These are the biggest gaps to target for your",b==="manual"?" selected focus phase":" current phase",", largest gap first."]}),I.length>0?e.jsx("div",{className:"space-y-3",children:I.map(S=>{var K;const U=_a(S.gapToTarget);return e.jsxs("button",{onClick:()=>h(S.componentId),className:`w-full text-left rounded-md border p-3 hover:border-blue-300 transition-colors ${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("span",{className:`text-sm font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:S.componentLabel}),e.jsx("span",{className:`text-xs font-semibold rounded px-2.5 py-0.5 ${en[U]}`,children:U})]}),e.jsx("p",{className:`text-sm mt-1 ${u?"text-slate-300":"text-slate-600"}`,children:S.message}),(K=S.toolkitLinks)!=null&&K.length?e.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:S.toolkitLinks.map(se=>e.jsx("a",{href:se.url,target:"_blank",rel:"noopener noreferrer",onClick:ve=>ve.stopPropagation(),className:"text-xs font-medium text-[#005eb8] underline",children:se.label},`${S.componentId}-${se.url}`))}):null]},`${S.componentId}-${S.phase}`)})}):e.jsx("p",{className:"text-sm text-slate-500",children:"No priority gaps detected for the current phase. Continue tracking actions and maintain evidence quality."})]}),te&&e.jsxs("div",{className:"dashboard-callout dashboard-callout--snapshot rounded-lg border p-4 flex items-center gap-3 mb-8",children:[e.jsx("span",{className:"dashboard-callout__icon text-xl shrink-0",children:"📅"}),e.jsxs("p",{className:"dashboard-callout__body text-sm",children:[e.jsx("strong",{children:"This month hasn't been recorded yet."})," Use"," ",e.jsx("span",{className:"font-semibold",children:"'Finalise Month'"})," in the header to snapshot today's progress and build your delivery trajectory."]})]}),s.assessedCount===0?e.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-8 border border-slate-200 mb-8 text-center",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800",children:"Getting started"}),e.jsx("p",{className:"text-sm text-slate-600 mt-2 max-w-xl mx-auto",children:"Nothing has been assessed yet, so there's nothing to chart. Set up your CST Personalisation first, then start scoring your first component to see your readiness build up here."}),e.jsxs("div",{className:"mt-4 flex items-center justify-center gap-3",children:[o?e.jsx("button",{type:"button",onClick:()=>o("project-details"),className:"rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Set up your CST Personalisation"}):null,t[0]?e.jsx("button",{type:"button",onClick:()=>h(t[0].id),className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Start your first assessment"}):null]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-1 ${u?"text-slate-100":"text-slate-800"}`,children:"Phase Progress (RAG)"}),e.jsxs("p",{className:`text-sm mb-4 ${u?"text-slate-300":"text-slate-500"}`,children:["Phases run 1 to 5, from early readiness at go-live through to fully embedding the change."," ",o?e.jsx("button",{type:"button",onClick:()=>o("cm-guide"),className:"font-medium text-[#005eb8] hover:underline",children:"See Adoption Engine Onboarding"}):null]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:s.phaseSummaries.map(S=>{const U=S.rag==="Green"?"bg-green-100 text-green-700":S.rag==="Amber"?"bg-amber-100 text-amber-700":"bg-red-100 text-red-700",K=S.totalLenses?Math.round(S.assessedLenses/S.totalLenses*100):0;return e.jsxs("div",{className:`rounded-md border p-4 ${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:`font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:Ze[S.phase]||`Phase ${S.phase}`}),e.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded ${U}`,children:S.rag})]}),e.jsxs("p",{className:`text-xs ${u?"text-slate-300":"text-slate-600"}`,children:[S.onTrackComponents,"/",S.componentCount," components on target"]}),e.jsxs("p",{className:`text-xs mt-1 ${u?"text-slate-300":"text-slate-600"}`,children:[K,"% lens coverage, ",S.actionCompletionPct,"% actions complete"]})]},S.phase)})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"order-2 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8",children:[e.jsxs("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border flex flex-col`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-4 ${u?"text-slate-100":"text-slate-800"}`,children:"Readiness Trajectory"}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${u?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:n.history.length>0?e.jsx("canvas",{id:"adoption-line-chart"}):e.jsx("div",{className:"text-center text-slate-400",children:e.jsx("p",{children:"No historical data yet. Finalise your first month to generate trends."})})})]}),e.jsxs("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border flex flex-col`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Strategic Lenses Spread"}),C&&a[0]?e.jsx("button",{type:"button",onClick:()=>C(a[0]),className:"text-xs font-medium text-[#005eb8] hover:underline",children:"What's a lens?"}):null]}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${u?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:e.jsx("canvas",{id:"adoption-radar-chart"})}),e.jsxs("div",{className:`${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mt-4 rounded-md border p-3`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${u?"text-slate-300":"text-slate-600"}`,children:"Lens key"}),e.jsx("div",{className:"mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2",children:a.map((S,U)=>e.jsxs("div",{className:`flex items-center gap-2 text-xs ${u?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full",style:{backgroundColor:Ct[U%Ct.length]},"aria-hidden":"true"}),e.jsx("span",{children:S})]},`lens-key-${S}`))})]}),e.jsx("p",{className:`text-xs text-center mt-4 ${u?"text-slate-300":"text-slate-500"}`,children:"Visualises your current draft readiness score averaged across the 5 strategic lenses against their specific target reiquirements."})]})]}),e.jsxs("div",{className:`order-1 ${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"mb-4 flex w-full flex-col gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:`text-lg font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Change Component Radar"}),e.jsx("p",{className:`text-xs mt-1 ${u?"text-slate-300":"text-slate-500"}`,children:"Show or hide the change-component readiness radar, then use the overview list below to drill into delivery status."})]}),e.jsx("div",{className:"flex w-full justify-end",children:e.jsx("button",{type:"button",onClick:()=>ne(S=>!S),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-white",children:_?"Hide change component radar":"Show change component radar"})})]}),_?e.jsxs("div",{className:`w-full ${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("div",{className:`flex min-h-[720px] w-full items-center justify-center rounded border p-2 ${u?"border-slate-700 bg-slate-950":"border-slate-100 bg-white"}`,children:e.jsx("canvas",{id:"adoption-component-radar-chart",className:"block h-full w-full"})}),e.jsx("div",{id:"radar-legend",className:`mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm ${u?"text-slate-300":"text-slate-600"}`,children:ka.map(S=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mr-2 h-3 w-3 rounded-full",style:{backgroundColor:S.color}}),e.jsxs("span",{children:[S.score," = ",S.label]})]},S.score))}),e.jsx("p",{className:`mt-4 text-center text-xs ${u?"text-slate-300":"text-slate-500"}`,children:"Visualises the average readiness score for each component against the phase exemplar profile."})]}):null,e.jsxs("div",{className:"mt-4 w-full space-y-3",children:[e.jsxs("p",{className:`text-xs ${u?"text-slate-300":"text-slate-500"}`,children:["BRAG scoring is used for the change component overview:",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-sky-100 text-sky-800",children:"Blue"})," = every lens is level 5,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-green-100 text-green-800",children:"Green"})," = on target,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-red-100 text-red-800",children:"Red"})," = behind target dates,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-amber-100 text-amber-800",children:"Amber"})," = at risk / nearing deadline."]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:y,onChange:S=>Y(S.target.value),placeholder:"Search components...",className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"}),e.jsxs("select",{value:N,onChange:S=>F(S.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All statuses"}),e.jsx("option",{value:"not-started",children:"Not started"}),e.jsx("option",{value:"below-target",children:"Below target"}),e.jsx("option",{value:"on-track",children:"On track"})]}),e.jsxs("select",{value:G,onChange:S=>ge(S.target.value==="all"?"all":Number(S.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All phases"}),Ie.map(S=>e.jsx("option",{value:S,children:Ze[S]||`Phase ${S}`},S))]})]}),e.jsx(Jt,{showAdvancedControls:xe,onToggleAdvanced:()=>Se(S=>!S),onReset:Ee,resultText:`Showing ${A.length} components`,activeFilters:R,activeFiltersAriaLabel:"Active component filters",darkMode:u}),xe?e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-md border border-slate-200 bg-slate-50 p-3",children:[e.jsxs("select",{value:ee,onChange:S=>ue(S.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"score",children:"Sort by score"}),e.jsx("option",{value:"name",children:"Sort by name"}),e.jsx("option",{value:"target",children:"Sort by target"})]}),e.jsx("button",{type:"button",onClick:()=>J(S=>S==="asc"?"desc":"asc"),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white transition-colors",children:$==="asc"?"Ascending":"Descending"})]}):null]}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:[A.map(({component:S,avgNum:U,exemplarTarget:K,actionCount:se,completedActionCount:ve,delta:ye,allLensesLevelFive:pe})=>{const ae=wt(U,K,se,ve,pe),Be=ae==="Red"?"↓":U>=K?"→":U<=0?"↑":"↗",Ge=ae==="Red"?"text-red-500":U>=K?u?"text-slate-300":"text-slate-500":"text-amber-600";return e.jsxs("button",{onClick:()=>h(S.id),title:Ea(S.id),className:`flex justify-between items-center p-3 rounded-md transition-colors group text-left ${u?"bg-slate-900 border border-slate-700 hover:border-blue-400":"bg-slate-50 border border-slate-100 hover:border-blue-300"}`,children:[e.jsx("span",{className:`text-sm font-medium truncate pr-2 group-hover:text-[#005eb8] ${u?"text-slate-100":"text-slate-700"}`,children:S.label}),e.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[e.jsx("span",{className:`text-xs font-semibold ${Ge}`,title:U>=K?"On or above expected readiness for phase focus":U<=0?"Not started: raise towards expected readiness":"Below expected readiness: continue improving","aria-label":U>=K?"At expected readiness":U<=0?"Not started, increase readiness":"Below expected readiness",children:Be}),ye!==null&&e.jsxs("span",{className:`text-[11px] font-semibold ${ye>0?"text-green-600":"text-red-400"}`,title:"Change versus last finalised month",children:[ye>0?"+":"",ye.toFixed(1)]}),e.jsx("span",{className:`text-xs font-bold px-2.5 py-1 rounded ${ce[ae]}`,children:ae})]})]},S.id)}),!A.length&&e.jsx("div",{className:`col-span-full rounded-md border border-dashed p-6 text-sm ${u?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-500"}`,children:"No components match the current filters."})]})]})]}),e.jsxs("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h3",{className:`text-lg font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Lenses and which components they apply to"}),e.jsx("button",{type:"button",onClick:()=>Ae(S=>!S),className:"inline-flex items-center justify-center rounded-full p-1 text-slate-500 hover:text-[#005eb8]","aria-label":"Explain lenses and components",title:"Explain lenses and components",children:e.jsx(ja,{})})]}),X?e.jsx("p",{className:"mt-2 text-xs text-slate-600 max-w-3xl",children:"A component is the change topic you are delivering (for example, Vision). A lens is the angle used to assess that component. For example, Vision is reviewed through Strategic Direction and Leadership and People Experience and Culture to check both leadership alignment and whether people understand and believe in the vision."}):null]}),e.jsxs("select",{value:le,onChange:S=>me(S.target.value==="all"?"all":Number(S.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:w-40",children:[e.jsx("option",{value:"all",children:"All phases"}),Ie.map(S=>e.jsx("option",{value:S,children:Ze[S]||`Phase ${S}`},S)),'"']})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:a.map(S=>{const U=t.filter(K=>K.lenses.includes(S)).filter(K=>le==="all"||K.phase===le);return U.length?e.jsxs("div",{className:`rounded-md p-4 ${u?"border border-slate-700 bg-slate-900":"border border-slate-100 bg-slate-50"}`,children:[e.jsx("h4",{className:"font-bold text-sm text-[#005eb8] mb-3",children:S}),e.jsx("p",{className:`mb-3 text-xs ${u?"text-slate-300":"text-slate-600"}`,children:Ia(S)}),e.jsx("ul",{className:"space-y-2",children:U.map(K=>{const se=i(K.id,S),ve=Number(se.score||0),ye=hn(K.id,E,K.target),pe=se.actions||[],ae=wt(ve,ye,pe.length,pe.filter(Be=>Be.status==="Completed").length,!1);return e.jsxs("li",{className:`text-xs flex justify-between items-center p-2 rounded ${u?"bg-slate-800 border border-slate-700":"bg-white border border-slate-100"}`,children:[e.jsx("span",{className:`truncate pr-2 font-medium ${u?"text-slate-100":"text-slate-700"}`,children:K.label}),e.jsx("button",{onClick:()=>h(K.id),className:`px-2.5 py-0.5 rounded font-bold ${ce[ae]}`,children:ae})]},K.id)})})]},S):null})})]})]})]})}const Pa=Hs.filter(n=>n!=="Overdue start"&&n!=="Overdue completion"),Nt=[0,1,2,3,4,5],Da={0:"Not Started",1:"Emerging",2:"Developing",3:"Embedding",4:"Adopted",5:"Thriving"},Et={"Not Started":"bg-slate-100 text-slate-700 border-slate-200","In Progress":"bg-blue-100 text-blue-800 border-blue-200",Blocked:"bg-amber-100 text-amber-800 border-amber-200",Completed:"bg-green-100 text-green-800 border-green-200"},zn="__evidence_json__:",$a=1024*1024;function Ta(n,t,a){return(a[n]||[]).filter(s=>s.linkedActions.some(i=>i.actionId===t))}function ss(n){const t=n.trim();return t?/^https?:\/\//i.test(t)?t:/^www\./i.test(t)?`https://${t}`:t:""}function It(n){const t=(n==null?void 0:n.trim())||"";if(!t)return[];if(t.startsWith(zn))try{const a=JSON.parse(t.slice(zn.length));return Array.isArray(a)?a.filter(s=>s&&(s.type==="url"||s.type==="file")).map(s=>({type:s.type,label:String(s.label||"").trim(),href:String(s.href||"").trim()})).filter(s=>s.label||s.href):[]}catch{return[]}return t.split(`
`).map(a=>a.trim()).filter(Boolean).map(a=>{const s=ss(a);return{type:"url",label:a,href:s}})}function La(n){const t=n.map(a=>({type:a.type,label:a.label.trim(),href:a.href.trim()})).filter(a=>a.label||a.href);return t.length?`${zn}${JSON.stringify(t)}`:""}function Ba(n){return new Promise((t,a)=>{const s=new FileReader;s.onload=()=>t(String(s.result||"")),s.onerror=()=>a(new Error("Unable to read file.")),s.readAsDataURL(n)})}function Fa(){return e.jsx("svg",{className:"w-4 h-4 text-blue-500 mt-0.5 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Ga(){return e.jsxs("svg",{className:"w-4 h-4 mr-1.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z"})]})}function Ua(){return e.jsx("svg",{className:"w-4 h-4 mr-1.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.964 9.964 0 012.042-3.368m2.16-1.989A9.962 9.962 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.05 10.05 0 01-4.132 5.411M15 12a3 3 0 00-3-3m0 0a2.99 2.99 0 00-2.13.88M3 3l18 18"})})}function Ma(){return e.jsx("svg",{className:"w-5 h-5 ml-2 text-slate-400 group-hover:text-[#005eb8] shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Va(n,t,a){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:"",actionType:"Admin",owner:"",timescale:"",status:"Planned",phase:n,startDate:"",dueDate:"",notes:"",evidence:"",linkedTargets:[{componentId:t,lens:a}]}}function qe(n,t,a){const s=n.linkedTargets||[];if(!s.length)return[{componentId:t,lens:a}];const i=new Set,h=[];return s.forEach(p=>{const m=`${p.componentId}:${p.lens}`;i.has(m)||(i.add(m),h.push({componentId:p.componentId,lens:p.lens}))}),h}function Ha({store:n,components:t,activeComponentId:a,getRubricText:s,getEntry:i,onComponentChange:h,onEntryUpdate:p,onOpenLensInfo:m,onMatrixToggle:o,onActionRemove:C,onObjectivesUpdate:l,darkMode:c=!1}){var ae,Be,Ge,ke;const u=t.find(r=>r.id===a)||t[0],[b,L]=g.useState(null),[V,j]=g.useState(null),[B,y]=g.useState(!0),[Y,N]=g.useState(!0),[F,G]=g.useState(!0),[ge,le]=g.useState({}),[me,ee]=g.useState({}),[ue,$]=g.useState({}),J=((ae=n.objectives)==null?void 0:ae[u.id])||[],xe=n.orgProfile.teamMembers||[],Se=g.useMemo(()=>{const r={};return u.lenses.forEach(w=>{r[w]=i(u.id,w).actions||[]}),r},[u.id,u.lenses,i]),_=g.useMemo(()=>u.lenses.reduce((r,w)=>r+(i(u.id,w).actions||[]).length,0),[u.id,u.lenses,i]),ne=g.useMemo(()=>u.lenses.reduce((r,w)=>r+(i(u.id,w).actions||[]).filter(O=>Le(O.status)==="Completed").length,0),[u.id,u.lenses,i]),X=g.useMemo(()=>u.lenses.some(r=>Number(i(u.id,r).score||0)>0),[u.id,u.lenses,i]),Ae=g.useMemo(()=>{const r={};return Object.keys(n.currentDraft).forEach(w=>{Object.keys(n.currentDraft[w]||{}).forEach(O=>{(n.currentDraft[w][O].actions||[]).forEach(oe=>{qe(oe,w,O).forEach(Re=>{const _e=`${Re.componentId}:${Re.lens}`;r[_e]||(r[_e]=[]),r[_e].push({sourceComponentId:w,sourceLens:O,action:oe,isLinkedView:!(Re.componentId===w&&Re.lens===O)})})})})}),r},[n.currentDraft]),Ie=g.useMemo(()=>{const r={};return t.forEach(w=>{r[w.id]=w}),r},[t]),v=g.useMemo(()=>{const r=u.lenses[0];return r?i(u.id,r).justification:""},[u.id,u.lenses,i]),E=g.useMemo(()=>{var r;return b?((r=t.find(w=>w.id===b.sourceComponentId))==null?void 0:r.label)||b.sourceComponentId:u.label},[b,u.label,t]),fe=g.useMemo(()=>{var w;if(!((w=b==null?void 0:b.action.text)!=null&&w.trim()))return"New action";const r=b.action.text.trim().replace(/\s+/g," ");return r.length>70?`${r.slice(0,70)}...`:r},[b]),de=g.useMemo(()=>J.find(r=>r.id===(V==null?void 0:V.objectiveId))||null,[V==null?void 0:V.objectiveId,J]),Q=g.useMemo(()=>de?qn(de,Se):null,[de,Se]),H=g.useMemo(()=>de?de.linkedActions.map(r=>{const w=(Se[r.lens]||[]).find(oe=>oe.id===r.actionId),O=w?Le(w.status):null,Z=w?ht(w.status,w.startDate,w.dueDate):null;return{lens:r.lens,action:w,status:O,temporalStatus:Z}}):[],[de,Se]),te=g.useCallback(r=>{h(r.target.value)},[h]),f=g.useCallback((r,w)=>{const O=i(u.id,r);p(u.id,r,{...O,score:w})},[u.id,i,p]),A=g.useCallback(r=>{u.lenses.forEach(w=>{const O=i(u.id,w);p(u.id,w,{...O,justification:r})})},[u.id,u.lenses,i,p]),I=g.useCallback((r,w)=>{const O=Va(u.phase,u.id,r);w&&(O.text=w),L({sourceComponentId:u.id,sourceLens:r,mode:"create",action:O,evidenceItems:It(O.evidence||""),linkedObjectiveIds:[],targetPickerComponentId:u.id,targetPickerLens:r})},[u.id,u.phase]),k=g.useCallback((r,w,O)=>{var Re;const Z=qe(O,r,w),oe=Z[0]||{componentId:r,lens:w},Te=(((Re=n.objectives)==null?void 0:Re[r])||[]).filter(_e=>_e.linkedActions.some(Ve=>Ve.actionId===O.id)).map(_e=>_e.id);L({sourceComponentId:r,sourceLens:w,mode:"edit",actionId:O.id,action:{...O,linkedTargets:Z,notes:O.notes||"",evidence:O.evidence||"",startDate:O.startDate||"",dueDate:O.dueDate||""},evidenceItems:It(O.evidence||""),linkedObjectiveIds:Te,targetPickerComponentId:oe.componentId,targetPickerLens:oe.lens})},[n.objectives]),R=()=>{L(null)},Ee=()=>{var Re;if(!b)return;if(!b.action.text.trim()){window.alert("Action description is required.");return}const r={...b.action,evidence:La(b.evidenceItems),status:Le(b.action.status),linkedTargets:qe(b.action,b.sourceComponentId,b.sourceLens),timescale:b.action.dueDate||b.action.startDate||b.action.timescale},w=i(b.sourceComponentId,b.sourceLens),O=b.mode==="create"?[...w.actions,r]:w.actions.map(_e=>_e.id===b.actionId?r:_e);p(b.sourceComponentId,b.sourceLens,{...w,actions:O});const Z=new Set(b.linkedObjectiveIds),Te=(((Re=n.objectives)==null?void 0:Re[b.sourceComponentId])||[]).map(_e=>{const Ve=_e.linkedActions.filter(nn=>!(nn.lens===b.sourceLens&&nn.actionId===r.id));return Z.has(_e.id)?{..._e,linkedActions:[...Ve,{lens:b.sourceLens,actionId:r.id}]}:{..._e,linkedActions:Ve}});l(b.sourceComponentId,Te),R()},be=r=>{L(w=>{if(!w)return w;const O={...w,action:{...w.action,...r}};return O.action.status=Le(O.action.status),O})},Oe=(r,w)=>{L(O=>O&&{...O,targetPickerComponentId:r,targetPickerLens:w})},je=()=>{L(r=>{if(!r)return r;const w=Ie[r.targetPickerComponentId]||u,O=w.lenses.includes(r.targetPickerLens)?r.targetPickerLens:w.lenses[0];if(!O)return r;const Z=qe(r.action,r.sourceComponentId,r.sourceLens);return Z.some(oe=>oe.componentId===w.id&&oe.lens===O)?r:{...r,action:{...r.action,linkedTargets:[...Z,{componentId:w.id,lens:O}]}}})},ce=(r,w)=>{L(O=>{if(!O)return O;const oe=qe(O.action,O.sourceComponentId,O.sourceLens).filter(Te=>!(Te.componentId===r&&Te.lens===w));return{...O,action:{...O.action,linkedTargets:oe}}})},en=r=>{L(w=>{if(!w)return w;const O=new Set(w.linkedObjectiveIds);return O.has(r)?O.delete(r):O.add(r),{...w,linkedObjectiveIds:Array.from(O)}})},S=r=>{L(w=>w&&{...w,evidenceItems:r})},U=()=>{if(!b)return;const r=b.evidenceItems;S([...r,{type:"url",label:"",href:""}])},K=(r,w,O)=>{if(!b)return;const Z=b.evidenceItems;if(!Z[r])return;const oe=[...Z];w==="href"?oe[r]={...oe[r],href:ss(O)}:oe[r]={...oe[r],label:O},S(oe)},se=r=>{if(!b)return;const w=b.evidenceItems;S(w.filter((O,Z)=>Z!==r))},ve=async r=>{if(!b)return;const w=r.target.files;if(!(w!=null&&w.length))return;const Z=[...b.evidenceItems];for(const oe of Array.from(w)){if(oe.size>$a){window.alert(`"${oe.name}" is larger than 1MB. Please attach a URL instead.`);continue}try{const Te=await Ba(oe);Z.push({type:"file",label:oe.name,href:Te})}catch{window.alert(`Unable to upload "${oe.name}".`)}}S(Z),r.target.value=""},ye=(r,w)=>{w&&(j(null),k(u.id,r,w))},pe=r=>{const w=document.getElementById(r);w==null||w.scrollIntoView({behavior:"smooth",block:"start"})};return e.jsxs("div",{className:"max-w-5xl mx-auto pb-20",children:[e.jsxs("div",{className:"mb-8 flex items-center justify-between gap-4 flex-wrap",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:`text-3xl font-bold flex items-center ${c?"text-slate-100":"text-slate-800"}`,children:[u.label,e.jsx("span",{className:"bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-4 border border-blue-200",children:Ze[u.phase]||`Phase ${u.phase}`})]}),e.jsx("p",{className:`mt-2 ${c?"text-slate-300":"text-slate-500"}`,children:"Assess readiness at lens level. Change Component justification, outcomes, and actions are tracked below."})]}),e.jsx("select",{value:u.id,onChange:te,className:`rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 text-sm font-medium border ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:t.map(r=>e.jsx("option",{value:r.id,children:r.label},r.id))})]}),e.jsxs("div",{className:`${c?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mb-6 rounded-lg border p-4`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${c?"text-slate-300":"text-slate-600"}`,children:"Guided workflow"}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:()=>pe("assessment-scoring"),className:`${c?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"1. Justify"}),e.jsx("button",{type:"button",onClick:()=>pe("assessment-objectives"),className:`${c?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"2. Review outcomes"}),e.jsx("button",{type:"button",onClick:()=>pe("assessment-actions"),className:`${c?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"3. Plan lens actions"})]})]}),e.jsxs("div",{className:`mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${c?"border-emerald-500/40 bg-emerald-500/15 text-emerald-200":"border-emerald-200 bg-emerald-50 text-emerald-800"}`,children:[e.jsx("span",{className:"inline-block h-2 w-2 rounded-full bg-emerald-500","aria-hidden":"true"}),"Auto-save is on for scoring and component notes."]}),e.jsxs("div",{id:"assessment-scoring",className:`${c?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[e.jsx("h3",{className:`text-sm font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:X?"Step 1: Justify":"Step 1: Justification of what is currently known"}),e.jsx("button",{type:"button",onClick:()=>y(r=>!r),className:`${c?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:B?"Hide":"Show"})]}),B?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:`block text-sm font-semibold mb-2 ${c?"text-slate-100":"text-slate-700"}`,children:"Change Component Justification"}),e.jsx("p",{className:`text-xs mb-2 ${c?"text-slate-300":"text-slate-500"}`,children:'Explain what is currently known, what evidence supports that view, and where the biggest gap sits. Example: "Sponsorship is visible only in two services; there is no monthly steering update yet; next step is to agree a trust-wide sponsor cadence."'}),e.jsx("textarea",{value:v,onChange:r=>A(r.target.value),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-24 p-2 border ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,placeholder:"Record what is currently known for this change component, the evidence behind it, and the key improvement needed next."})]}):null]}),e.jsxs("div",{id:"assessment-objectives",className:`${c?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-1",children:[e.jsx("h3",{className:`text-sm font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"Step 2: Review outcomes"}),e.jsx("button",{type:"button",onClick:()=>N(r=>!r),className:`${c?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:Y?"Hide":"Show"})]}),e.jsx("p",{className:`text-xs mb-3 ${c?"text-slate-300":"text-slate-500"}`,children:"Owned by this component as a whole. Status is derived automatically from the lens actions assigned to each outcome below and cannot be set manually."}),Y?J.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${c?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:c?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Linked Actions"})]})}),e.jsx("tbody",{className:`${c?"divide-slate-700":"divide-slate-100"} divide-y`,children:J.map(r=>{const w=qn(r,Se),O=Et[w],Z=()=>j({objectiveId:r.id});return e.jsxs("tr",{onClick:Z,onKeyDown:oe=>{(oe.key==="Enter"||oe.key===" ")&&(oe.preventDefault(),Z())},tabIndex:0,className:`${c?"hover:bg-slate-700 focus-visible:bg-slate-700":"hover:bg-slate-50 focus-visible:bg-slate-50"} cursor-pointer focus:outline-none`,children:[e.jsx("td",{className:`px-3 py-2 text-sm ${c?"text-slate-100":"text-slate-800"}`,children:r.text||"Untitled outcome"}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${O}`,children:w})}),e.jsx("td",{className:`px-3 py-2 text-sm ${c?"text-slate-300":"text-slate-600"}`,children:r.linkedActions.length?`${r.linkedActions.length} action(s)`:"None assigned"})]},r.id)})})]})}):e.jsx("p",{className:"text-sm text-slate-500",children:"No outcomes yet."}):null]}),e.jsx("div",{id:"assessment-actions",className:`${c?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mb-3 rounded-lg border p-4`,children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-sm font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"Step 3: Plan lens actions"}),e.jsx("p",{className:`mt-1 text-xs ${c?"text-slate-300":"text-slate-600"}`,children:"Track delivery actions for each lens and link them to outcomes and affected component lenses."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:`${c?"bg-slate-800 border-slate-600 text-slate-100":"bg-white border-slate-300 text-slate-700"} rounded-full border px-2 py-1 text-xs`,children:[ne,"/",_," completed"]}),e.jsx("button",{type:"button",onClick:()=>G(r=>!r),className:`${c?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:F?"Hide":"Show"})]})]})}),F?e.jsx("div",{className:"space-y-8",children:u.lenses.map(r=>{var fn;const w=i(u.id,r),O=`${u.id}:${r}`,Z=Ae[O]||[],oe=Z.some(P=>P.action.readinessScore===0),Te=w.score===0&&!oe?1:w.score,Re=!!((fn=n.showMatrix)!=null&&fn[`${u.id}:${r}`]),_e=me[O]||"all",Ve=ue[O]||"all",nn=Array.from(new Set(Z.map(P=>P.action.actionType).filter(P=>P!==void 0))).sort((P,he)=>String(P).localeCompare(String(he))),tn=Array.from(new Set([...xe.map(P=>P.name),...Z.map(P=>P.action.owner).filter(P=>!!P)])).sort((P,he)=>P.localeCompare(he)),Fe=[...Z].filter(P=>(P.action.readinessScore!==void 0?P.action.readinessScore:Te)!==Te||_e!=="all"&&(P.action.actionType||"")!==_e?!1:Ve==="all"||(P.action.owner||"")===Ve).sort((P,he)=>{const He=Le(P.action.status)==="Completed",Xe=Le(he.action.status)==="Completed";if(He!==Xe)return He?1:-1;const sn=P.action.dueDate?new Date(P.action.dueDate).getTime():Number.POSITIVE_INFINITY,Ke=he.action.dueDate?new Date(he.action.dueDate).getTime():Number.POSITIVE_INFINITY;return sn-Ke}),Rn=w.score>=u.target?"#22c55e":w.score>0?"#f59e0b":"#cbd5e1";return e.jsxs("div",{className:`${c?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:[e.jsxs("div",{className:`${c?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} p-6 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4`,children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm font-bold uppercase tracking-wider text-blue-600 block mb-1",children:"Lens"}),e.jsxs("button",{onClick:()=>m(r),className:`flex items-center text-2xl font-semibold transition-colors group text-left ${c?"text-slate-100 hover:text-[#63b3ff]":"text-slate-800 hover:text-[#005eb8]"}`,title:"View Lens Information",children:[r,e.jsx(Ma,{})]})]}),e.jsxs("div",{className:"shrink-0 w-full md:w-64",children:[e.jsx("label",{className:`block text-xs font-semibold mb-1 ${c?"text-slate-300":"text-slate-500"}`,children:"Readiness Score"}),e.jsx("select",{value:w.score,onChange:P=>f(r,Number(P.target.value)),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 text-sm font-medium border ${c?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,style:{borderLeftWidth:"4px",borderLeftColor:Rn},children:Nt.map(P=>e.jsxs("option",{value:P,children:[P," - ",Da[P]]},P))})]})]}),e.jsx("div",{className:`${c?"bg-slate-900 border-slate-700":"bg-blue-50/50 border-slate-100"} px-6 py-4 border-b text-sm`,children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start gap-4",children:[e.jsxs("div",{className:"flex items-start flex-1",children:[e.jsx(Fa,{}),e.jsxs("p",{className:`whitespace-pre-line ${c?"text-slate-300":"text-slate-600"}`,children:[e.jsxs("strong",{className:c?"text-slate-100":"text-slate-700",children:[w.score===0?"Not Started":`Level ${w.score}`,":"]}),` ${s(u.id,r,w.score)}`]})]}),e.jsxs("button",{onClick:()=>o(`${u.id}:${r}`),className:`${c?"bg-slate-800 border-slate-600 text-[#63b3ff] hover:text-[#90cdf4]":"bg-white border-blue-200 text-[#005eb8] hover:text-blue-800"} shrink-0 text-xs font-semibold flex items-center px-3 py-1.5 border rounded shadow-sm transition-colors`,children:[Re?e.jsx(Ua,{}):e.jsx(Ga,{}),Re?"Hide Full Guidance":"View Full Guidance"]})]})}),Re&&e.jsx("div",{className:`${c?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} px-6 py-5 border-b`,children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4",children:Nt.map(P=>{const He={0:"bg-white",1:"bg-rose-50",2:"bg-orange-50",3:"bg-yellow-50",4:"bg-green-50",5:"bg-blue-50"}[P]||"bg-white";return e.jsxs("button",{onClick:()=>f(r,P),className:`p-4 rounded-lg border shadow-sm text-left transition-colors h-full flex flex-col items-start justify-start ${w.score===P?`${He} border-[#005eb8] ring-1 ring-[#005eb8]`:`${He} border-slate-200 hover:border-blue-300`}`,children:[e.jsx("div",{className:`text-sm font-bold mb-2 pb-2 border-b w-full ${w.score===P?"text-[#005eb8] border-blue-200":"text-slate-700 border-slate-100"}`,children:P===0?"Not Started":`Level ${P}`}),e.jsx("p",{className:`text-xs whitespace-pre-line leading-relaxed text-left w-full ${c?"text-slate-200":"text-slate-600"}`,children:s(u.id,r,P)})]},P)})})}),e.jsxs("div",{className:`${c?"border-slate-700":"border-slate-100"} p-6 border-t`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:`text-sm font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"Lens Actions"}),e.jsx("p",{className:`mt-1 text-xs ${c?"text-slate-300":"text-slate-500"}`,children:"Hierarchy: Outcome - Action - Affected component lenses."})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs("select",{"aria-label":`Filter ${r} actions by type`,value:_e,onChange:P=>ee(he=>({...he,[O]:P.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),[...new Set([...Hn,...nn])].map(P=>e.jsx("option",{value:P,children:P},P))]}),e.jsxs("select",{"aria-label":`Filter ${r} actions by owner`,value:Ve,onChange:P=>$(he=>({...he,[O]:P.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),tn.map(P=>e.jsx("option",{value:P,children:P},P))]}),e.jsx("button",{onClick:()=>I(r),className:"px-3 py-1.5 rounded bg-[#005eb8] text-white text-xs font-semibold shadow-[0_2px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Add Action"})]})]}),Fe.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${c?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:c?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action Type"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Start"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"End"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Affected Component Lenses"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Actions"})]})}),e.jsx("tbody",{className:`${c?"divide-slate-700":"divide-slate-100"} divide-y`,children:(ge[`${u.id}:${r}`]?Fe:Fe.slice(0,5)).map(P=>{var bn;const he=P.action,He=Le(he.status),Xe=ht(he.status,he.startDate,he.dueDate),sn=Xe==="Overdue start"||Xe==="Overdue completion"?Xe:null,Ke=((bn=Ie[P.sourceComponentId])==null?void 0:bn.label)||P.sourceComponentId,lt=Ta(P.sourceComponentId,he.id,n.objectives||{}),an=qe(he,P.sourceComponentId,P.sourceLens).map(mn=>{var Ue;return`${((Ue=Ie[mn.componentId])==null?void 0:Ue.label)||mn.componentId} / ${mn.lens}`}).join(", "),Pn=cn[He]||cn.Planned;return e.jsxs("tr",{children:[e.jsxs("td",{className:`px-3 py-2 text-sm ${c?"text-slate-100":"text-slate-800"}`,children:[e.jsx("div",{children:he.text||"Untitled action"}),P.isLinkedView?e.jsxs("div",{className:`mt-1 text-xs ${c?"text-indigo-300":"text-indigo-700"}`,children:["Linked from ",Ke," /"," ",P.sourceLens]}):null]}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${Pn}`,children:He}),sn?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:sn}):null,!lt.length&&e.jsx("div",{className:`mt-1 text-xs ${c?"text-amber-200":"text-amber-700"}`,children:"Not yet linked"})]}),e.jsx("td",{className:`px-3 py-2 text-sm ${c?"text-slate-100":"text-slate-700"}`,children:he.actionType||"Unassigned"}),e.jsx("td",{className:`px-3 py-2 text-sm ${c?"text-slate-100":"text-slate-700"}`,children:he.owner||"Unassigned"}),e.jsx("td",{className:`px-3 py-2 text-sm ${c?"text-slate-300":"text-slate-600"}`,children:he.startDate||"-"}),e.jsx("td",{className:`px-3 py-2 text-sm ${c?"text-slate-300":"text-slate-600"}`,children:he.dueDate||"-"}),e.jsx("td",{className:`px-3 py-2 text-xs ${c?"text-slate-300":"text-slate-600"}`,children:an}),e.jsx("td",{className:"px-3 py-2",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"button",onClick:()=>k(P.sourceComponentId,P.sourceLens,he),className:`${c?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Edit"}),e.jsx("button",{type:"button",onClick:()=>C(P.sourceComponentId,P.sourceLens,he.id),className:`${c?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Remove"})]})})]},`${P.sourceComponentId}:${P.sourceLens}:${he.id}`)})})]})}):e.jsx("p",{className:`text-sm ${c?"text-slate-300":"text-slate-500"}`,children:"No actions yet for this lens."}),Fe.length>5?e.jsx("button",{type:"button",onClick:()=>le(P=>({...P,[`${u.id}:${r}`]:!P[`${u.id}:${r}`]})),className:`${c?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} mt-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:ge[`${u.id}:${r}`]?"Show top 5 actions":`Show all ${Fe.length} actions`}):""]})]},r)})}):null,b?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${c?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-hidden rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("h3",{className:`text-lg font-semibold ${c?"text-slate-100":"text-slate-900"}`,children:[b.mode==="create"?"Create Action":"Edit Action"," ·"," ",E," / ",b.sourceLens," · ",fe]}),e.jsx("button",{type:"button",onClick:R,className:`${c?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:"mt-4 max-h-[calc(100vh-13rem)] overflow-y-auto pr-1 grid gap-3",children:[e.jsx("div",{className:`${c?"border-slate-700 bg-slate-900":"border-blue-100 bg-white"} sticky top-0 z-10 rounded-md border px-3 py-2 shadow-sm`,children:e.jsxs("label",{className:`text-sm ${c?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Description"}),e.jsx("textarea",{value:b.action.text,onChange:r=>be({text:r.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${c?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})}),e.jsxs("div",{className:`${c?"border-slate-700 bg-slate-900 text-slate-200":"border-blue-100 bg-blue-50 text-slate-700"} rounded-md border px-3 py-2 text-xs`,children:[e.jsx("strong",{children:"Linking order:"})," first attach this action to one or more outcomes, then add affected component lenses (component + lens) where this action should appear."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsxs("label",{className:`text-sm ${c?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Action Type"}),e.jsx("select",{value:b.action.actionType||"Admin",onChange:r=>be({actionType:r.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Hn.map(r=>e.jsx("option",{value:r,children:r},r))})]}),e.jsxs("label",{className:`text-sm ${c?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Owner"}),e.jsxs("select",{value:b.action.owner,onChange:r=>be({owner:r.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Unassigned"}),xe.map(r=>e.jsxs("option",{value:r.name,children:[r.name,r.role?` — ${r.role}`:""]},r.id)),b.action.owner&&!xe.some(r=>r.name===b.action.owner)?e.jsxs("option",{value:b.action.owner,children:[b.action.owner," (not on roster)"]}):null]})]}),e.jsxs("label",{className:`text-sm ${c?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Status"}),e.jsx("select",{value:b.action.status,onChange:r=>be({status:r.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Pa.map(r=>e.jsx("option",{value:r,children:r},r))})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("label",{className:`text-sm ${c?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Start Date"}),e.jsx("input",{type:"date",value:b.action.startDate||"",onChange:r=>be({startDate:r.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("label",{className:`text-sm ${c?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"End Date"}),e.jsx("input",{type:"date",value:b.action.dueDate||"",onChange:r=>be({dueDate:r.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsxs("label",{className:`text-sm ${c?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Notes"}),e.jsx("textarea",{value:b.action.notes||"",onChange:r=>be({notes:r.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${c?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("div",{className:`${c?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"Evidence Links / Docs"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:U,className:`${c?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Add web link"}),e.jsxs("label",{className:`${c?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:["Upload file(s)",e.jsx("input",{type:"file",multiple:!0,className:"hidden",onChange:ve})]})]})]}),e.jsx("p",{className:`mt-1 text-xs ${c?"text-slate-300":"text-slate-500"}`,children:"Add evidence as either web links or uploaded files. Everything appears below in a single list."}),e.jsx("div",{className:`${c?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:b.evidenceItems.length?b.evidenceItems.map((r,w)=>e.jsxs("div",{className:`${c?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} grid grid-cols-1 gap-2 rounded border p-2 md:grid-cols-[auto,1fr,1fr,auto]`,children:[e.jsx("div",{className:"flex items-start pt-2",children:e.jsx("span",{className:`${r.type==="file"?"bg-emerald-100 text-emerald-800":"bg-blue-100 text-blue-800"} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`,children:r.type==="file"?"File":"Link"})}),e.jsx("input",{value:r.label,onChange:O=>K(w,"label",O.target.value),placeholder:r.type==="file"?"Document label":"Link label",className:`rounded-md border px-2.5 py-2 text-sm ${c?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`}),e.jsx("input",{value:r.href,onChange:O=>K(w,"href",O.target.value),placeholder:r.type==="file"?"Embedded file URL (auto generated)":"https://...",className:`rounded-md border px-2.5 py-2 text-sm ${c?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,disabled:r.type==="file"}),e.jsx("button",{type:"button",onClick:()=>se(w),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},`${r.type}-${w}`)):e.jsx("p",{className:`px-2 py-1 text-sm ${c?"text-slate-300":"text-slate-500"}`,children:"No evidence links or documents added yet."})})]}),e.jsxs("div",{className:`${c?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsx("p",{className:`text-sm font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"Affected Outcomes"}),e.jsx("p",{className:`mt-1 text-xs ${c?"text-slate-300":"text-slate-500"}`,children:"Tick 1-3 outcomes directly impacted by this action. Outcome status is auto-derived from these linked actions."}),e.jsx("div",{className:`${c?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:(((Be=n.objectives)==null?void 0:Be[b.sourceComponentId])||[]).length?(((Ge=n.objectives)==null?void 0:Ge[b.sourceComponentId])||[]).map(r=>{const w=b.linkedObjectiveIds.includes(r.id);return e.jsxs("label",{className:`${c?"hover:bg-slate-700":"hover:bg-slate-50"} flex items-start gap-2 rounded px-2 py-1.5`,children:[e.jsx("input",{type:"checkbox",checked:w,onChange:()=>en(r.id),className:"mt-0.5"}),e.jsx("span",{className:`text-sm ${c?"text-slate-100":"text-slate-700"}`,children:r.text||"Untitled outcome"})]},r.id)}):e.jsx("p",{className:`px-2 py-1 text-sm ${c?"text-slate-300":"text-slate-500"}`,children:"No outcomes are defined for this component yet."})})]}),e.jsxs("div",{className:`${c?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${c?"text-slate-100":"text-slate-800"}`,children:"Affected Component Lenses"}),e.jsx("span",{className:"inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-600",title:"Actions often contribute to other component lenses. Add those targets here so the same action is visible in each relevant lens.",children:"i"})]}),e.jsxs("div",{className:"mt-2 space-y-2",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2",children:[e.jsx("select",{value:b.targetPickerComponentId,onChange:r=>{const w=r.target.value,O=Ie[w];Oe(w,(O==null?void 0:O.lenses[0])||"")},className:`rounded-md border px-2.5 py-2 text-sm ${c?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:t.map(r=>e.jsx("option",{value:r.id,children:r.label},r.id))}),e.jsx("select",{value:b.targetPickerLens,onChange:r=>Oe(b.targetPickerComponentId,r.target.value),className:`rounded-md border px-2.5 py-2 text-sm ${c?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:(((ke=Ie[b.targetPickerComponentId])==null?void 0:ke.lenses)||[]).map(r=>e.jsx("option",{value:r,children:r},r))}),e.jsx("button",{type:"button",onClick:je,disabled:qe(b.action,b.sourceComponentId,b.sourceLens).some(r=>r.componentId===b.targetPickerComponentId&&r.lens===b.targetPickerLens),title:qe(b.action,b.sourceComponentId,b.sourceLens).some(r=>r.componentId===b.targetPickerComponentId&&r.lens===b.targetPickerLens)?"Already added":"Add selected affected lens",className:`${c?"border-cyan-500/50 bg-cyan-500/15 text-cyan-100 hover:bg-cyan-500/25":"border-cyan-300 bg-cyan-100 text-cyan-900 hover:bg-cyan-200"} rounded-md border px-3 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-60`,children:"Add Lens"})]}),e.jsx("div",{className:`${c?"border-slate-700":"border-slate-200"} overflow-hidden rounded border`,children:e.jsxs("table",{className:`min-w-full ${c?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:c?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Component"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Remove"})]})}),e.jsx("tbody",{className:`${c?"divide-slate-700":"divide-slate-100"} divide-y`,children:qe(b.action,b.sourceComponentId,b.sourceLens).map(r=>{var w;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-2.5 py-2 text-sm ${c?"text-slate-100":"text-slate-700"}`,children:((w=Ie[r.componentId])==null?void 0:w.label)||r.componentId}),e.jsx("td",{className:`px-2.5 py-2 text-sm ${c?"text-slate-100":"text-slate-700"}`,children:r.lens}),e.jsx("td",{className:"px-2.5 py-2",children:e.jsx("button",{type:"button",onClick:()=>ce(r.componentId,r.lens),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},`${r.componentId}:${r.lens}`)})})]})})]})]})]}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:R,className:`${c?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Cancel"}),e.jsx("button",{type:"button",onClick:Ee,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Save Action"})]})]})}):null,V&&de&&Q?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":"Outcome Details",className:`w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${c?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${c?"text-slate-100":"text-slate-900"}`,children:"Outcome Details"}),e.jsx("button",{type:"button",onClick:()=>j(null),className:`${c?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${c?"text-slate-400":"text-slate-500"}`,children:"Outcome"}),e.jsx("p",{className:`mt-1 text-sm ${c?"text-slate-100":"text-slate-900"}`,children:de.text||"Untitled outcome"})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${c?"text-slate-400":"text-slate-500"}`,children:"Status"}),e.jsx("span",{className:`mt-1 inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${Et[Q]}`,children:Q})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${c?"text-slate-400":"text-slate-500"}`,children:"Linked Actions"}),H.length?e.jsx("div",{className:`mt-2 overflow-x-auto rounded-md border ${c?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:`min-w-full divide-y ${c?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"}`,children:[e.jsx("thead",{className:c?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Navigate"})]})}),e.jsx("tbody",{className:`divide-y ${c?"divide-slate-700":"divide-slate-100"}`,children:H.map(r=>{var O,Z;const w=r.status?cn[r.status]||cn.Planned:cn.Planned;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${c?"text-slate-100":"text-slate-700"}`,children:r.lens}),e.jsx("td",{className:`px-3 py-2 text-sm ${c?"text-slate-100":"text-slate-700"}`,children:((O=r.action)==null?void 0:O.text)||"Linked action not found"}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${w}`,children:r.status||"Not Started"}),r.temporalStatus==="Overdue start"||r.temporalStatus==="Overdue completion"?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:r.temporalStatus}):null]}),e.jsx("td",{className:"px-3 py-2",children:r.action?e.jsx("button",{type:"button",onClick:()=>ye(r.lens,r.action||void 0),className:`${c?"border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25":"border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Open Action"}):e.jsx("span",{className:`text-xs ${c?"text-slate-500":"text-slate-400"}`,children:"Unavailable"})})]},`${r.lens}:${((Z=r.action)==null?void 0:Z.id)||"missing"}`)})})]})}):e.jsx("p",{className:`mt-1 text-sm ${c?"text-slate-300":"text-slate-500"}`,children:"No linked actions assigned."})]})]})]})}):null]})}const yn=50;function Wa(n){const t=new Date(n);return Number.isNaN(t.getTime())?n:t.toLocaleString("en-GB",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function qa({events:n,darkMode:t=!1}){const[a,s]=g.useState("all"),[i,h]=g.useState("all"),[p,m]=g.useState("all"),[o,C]=g.useState(""),[l,c]=g.useState(1),u=g.useMemo(()=>["all",...Array.from(new Set(n.map(N=>N.eventType))).sort()],[n]),b=g.useMemo(()=>["all",...Array.from(new Set(n.map(N=>N.componentId).filter(Boolean))).sort()],[n]),L=g.useMemo(()=>["all",...Array.from(new Set(n.map(N=>N.actor).filter(Boolean))).sort()],[n]),V=g.useMemo(()=>{const N=o.trim().toLowerCase();return n.filter(F=>a==="all"?!0:F.eventType===a).filter(F=>i==="all"?!0:F.componentId===i).filter(F=>p==="all"?!0:F.actor===p).filter(F=>N?[F.summary,F.reason,F.entityId,F.lens].filter(Boolean).some(G=>String(G).toLowerCase().includes(N)):!0).sort((F,G)=>Date.parse(G.timestamp)-Date.parse(F.timestamp))},[n,a,i,p,o]),j=Math.max(1,Math.ceil(V.length/yn)),B=Math.min(l,j),y=(B-1)*yn,Y=V.slice(y,y+yn);return e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Audit Log"}),e.jsx("p",{className:`text-sm mt-1 ${t?"text-slate-300":"text-slate-600"}`,children:"Timestamped history of CST changes, including who made each change."})]}),e.jsxs("div",{className:`grid gap-3 md:grid-cols-4 rounded-lg border p-4 ${t?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Event type"}),e.jsx("select",{value:a,onChange:N=>{s(N.target.value),c(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:u.map(N=>e.jsx("option",{value:N,children:N==="all"?"All":N},N))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Component"}),e.jsx("select",{value:i,onChange:N=>{h(N.target.value),c(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:b.map(N=>e.jsx("option",{value:N,children:N==="all"?"All":N},N))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Actor"}),e.jsx("select",{value:p,onChange:N=>{m(N.target.value),c(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:L.map(N=>e.jsx("option",{value:N,children:N==="all"?"All":N},N))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Search"}),e.jsx("input",{value:o,onChange:N=>{C(N.target.value),c(1)},placeholder:"summary, reason, id",className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsx("div",{className:`rounded-lg border overflow-hidden ${t?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full text-sm",children:[e.jsx("thead",{className:t?"bg-slate-900 text-slate-200":"bg-slate-50 text-slate-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left",children:"When"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Who"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"What"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Context"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Details"})]})}),e.jsx("tbody",{className:t?"bg-slate-800 text-slate-100":"bg-white text-slate-800",children:Y.length?Y.map(N=>e.jsxs("tr",{className:t?"border-t border-slate-700":"border-t border-slate-100",children:[e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:Wa(N.timestamp)}),e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:N.actor||"Unknown user"}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{className:"font-medium",children:N.summary}),e.jsx("div",{className:`text-xs mt-1 ${t?"text-slate-300":"text-slate-600"}`,children:N.eventType})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{children:N.componentId||"-"}),e.jsx("div",{className:`text-xs ${t?"text-slate-300":"text-slate-600"}`,children:N.lens||"-"})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[N.reason?e.jsxs("div",{children:["Reason: ",N.reason]}):null,N.before||N.after?e.jsxs("details",{className:"mt-1",children:[e.jsx("summary",{className:"cursor-pointer text-xs underline",children:"Before/After"}),e.jsx("pre",{className:`mt-1 text-xs whitespace-pre-wrap ${t?"text-slate-300":"text-slate-600"}`,children:JSON.stringify({before:N.before,after:N.after},null,2)})]}):null]})]},N.id)):e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-6 text-center",colSpan:5,children:"No audit events found for the selected filters."})})})]})}),e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("span",{className:t?"text-slate-300":"text-slate-600",children:["Showing ",Y.length?y+1:0,"-",Math.min(y+yn,V.length)," of ",V.length]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>c(N=>Math.max(1,N-1)),disabled:B<=1,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Previous"}),e.jsxs("span",{className:t?"text-slate-200":"text-slate-700",children:["Page ",B," / ",j]}),e.jsx("button",{type:"button",onClick:()=>c(N=>Math.min(j,N+1)),disabled:B>=j,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Next"})]})]})]})}const Ka=[{id:"why",question:"Why are we doing this?",framework:"Force Field Analysis - Driving Forces",description:"The forces pushing for change - the case that makes it worth doing.",componentIds:["case_for_change"]},{id:"future",question:"What will the future look like?",framework:"Vision",description:"A clear picture of the destination, understood and shared by everyone.",componentIds:["vision"]},{id:"barriers",question:"What might prevent us from achieving the vision?",framework:"Force Field Analysis - Restraining Forces",description:"The forces working against change - risks, resistance and blockers to plan for.",componentIds:["case_for_change","resistance"]},{id:"impacted",question:"Who's going to be impacted by the change?",framework:"Stakeholder Analysis & Change Impact Analysis",description:"Everyone affected by the change, and how deeply it affects them.",componentIds:["stakeholder","change_impact"]},{id:"leading",question:"Who's leading the change?",framework:"Sponsor Coalition & Change Network",description:"The visible leaders and the network of champions carrying the change day to day.",componentIds:["sponsorship","change_network"]},{id:"persuade",question:"How will we persuade people to change?",framework:"Case for Change",description:"The compelling narrative that wins hearts and minds.",componentIds:["case_for_change"]}],_t=[{phase:1,label:"Pre-Discovery",programmeStage:"Concept",tagline:"Define the change",deliverables:["Change Vision defined and communicated","Compelling case for change developed"],color:"bg-blue-50",darkColor:"bg-blue-950/45",textColor:"text-blue-700",darkTextColor:"text-blue-100",borderColor:"border-blue-300",darkBorderColor:"border-blue-700"},{phase:2,label:"Solution Design",programmeStage:"Definition",tagline:"Prepare the change",deliverables:["Change Impact analysed","Change Management inputted to Business Case","Engagement and Comms Strategy developed"],color:"bg-violet-50",darkColor:"bg-violet-950/45",textColor:"text-violet-700",darkTextColor:"text-violet-100",borderColor:"border-violet-300",darkBorderColor:"border-violet-700"},{phase:3,label:"Development",programmeStage:"Design & Develop",tagline:"Plan the change",deliverables:["Engagement and Comms Plan developed","Change Management Plan developed"],color:"bg-amber-50",darkColor:"bg-amber-950/45",textColor:"text-amber-700",darkTextColor:"text-amber-100",borderColor:"border-amber-300",darkBorderColor:"border-amber-700"},{phase:4,label:"Deployment / Go Live",programmeStage:"Implementation",tagline:"Manage implementation of the change",deliverables:["Change Management Plan executed","Communications delivered and Stakeholders engaged","Future State Processes validated","Skills gaps addressed","Future State Processes trialled and in use"],color:"bg-orange-50",darkColor:"bg-orange-950/45",textColor:"text-orange-700",darkTextColor:"text-orange-100",borderColor:"border-orange-300",darkBorderColor:"border-orange-700"},{phase:5,label:"Post-Deployment",programmeStage:"Transition / Close",tagline:"Reinforce and sustain the change",deliverables:["Change adoption evaluated","Business Change refinements actioned","Change sustained"],color:"bg-green-50",darkColor:"bg-green-950/45",textColor:"text-green-700",darkTextColor:"text-green-100",borderColor:"border-green-300",darkBorderColor:"border-green-700"}],za=[{title:"Handling Resistance",body:"Helping project managers navigate potential roadblocks and maintain project momentum through identifying and addressing resistance using effective communication, stakeholder engagement, and mitigation strategies."},{title:"Engaging Stakeholders",body:"Identifying key individuals and groups affected by the project and working closely with them to understand concerns, gather feedback, and ensure their perspectives are considered."},{title:"Communicating and Raising Awareness",body:"Developing engagement and communication plans that support project managers in creating clear and consistent messaging about the project's purpose, goals, and benefits."},{title:"Managing Expectations",body:"Setting realistic expectations for stakeholders regarding project outcomes, timelines, and potential disruptions by addressing concerns, clarifying misconceptions, and managing expectations."},{title:"Ensuring Change Readiness",body:"Assessing the readiness of an organisation or team for change and developing strategies to bridge any gaps."},{title:"Mitigating Risks",body:"Through anticipating and addressing risks associated with change, such as resistance, lack of stakeholder support, or unexpected obstacles."},{title:"Adopting Change Sustainably",body:"Supporting project managers in developing strategies to embed the changes into the organisation's culture, processes, and systems."}];function Gn({title:n,description:t,isOpen:a,onToggle:s,children:i,darkMode:h=!1}){return e.jsxs("section",{className:`mb-4 overflow-hidden rounded-lg border ${h?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("button",{type:"button",onClick:s,"aria-expanded":a,className:`flex w-full items-center justify-between gap-4 p-4 text-left transition-colors ${h?"bg-slate-900 hover:bg-slate-800":"bg-white hover:bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${h?"text-slate-100":"text-slate-800"}`,children:n}),t?e.jsx("p",{className:`mt-0.5 text-sm ${h?"text-slate-300":"text-slate-500"}`,children:t}):null]}),e.jsx("span",{className:`shrink-0 text-xl font-bold transition-transform ${h?"text-slate-500":"text-slate-400"} ${a?"rotate-45":""}`,children:"+"})]}),a?e.jsx("div",{className:`border-t p-5 pt-4 ${h?"border-slate-700 bg-slate-900":"border-slate-100 bg-white"}`,children:i}):null]})}function Ya({onComponentClick:n,guidanceTarget:t="Default",linkOverrides:a,darkMode:s=!1}){const[i,h]=g.useState("questions"),[p,m]=g.useState(null),o=l=>{h(c=>c===l?null:l)},C=l=>{m(c=>c===l?null:l)};return e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsx("h2",{className:`mb-2 text-2xl font-bold ${s?"text-slate-100":"text-slate-800"}`,children:"Change Management Toolkit"}),e.jsx("p",{className:`mb-8 text-sm ${s?"text-slate-300":"text-slate-500"}`,children:"NHS England Programme Delivery Lifecycle - an introduction to the five change phases and the role of the Change Manager."}),e.jsxs("div",{className:"bg-[#005eb8] text-white rounded-lg p-6 mb-8 flex flex-col sm:flex-row sm:items-center gap-4",children:[e.jsx("div",{className:"flex-shrink-0 w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold",children:"!"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-blue-100 uppercase tracking-wide mb-1",children:"When is the best time to start thinking about Change Management?"}),e.jsx("p",{className:"text-2xl font-bold",children:"Answer: Now!"}),e.jsx("p",{className:"text-sm text-blue-100 mt-1",children:"Change management should be considered from the very start of any project - not as an afterthought at go-live."})]})]}),e.jsx(Gn,{title:"The 6 Key Questions",description:"Six questions worth returning to throughout the life of the programme, each backed by a change model and linked to where you can act on it.",isOpen:i==="questions",onToggle:()=>o("questions"),darkMode:s,children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:Ka.map((l,c)=>{const u=zt(t,l.componentIds[0],"inputs",a).slice(0,2);return e.jsxs("div",{className:`rounded-md border p-4 ${s?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsxs("span",{className:"shrink-0 w-7 h-7 rounded-full bg-blue-100 text-[#005eb8] text-xs font-bold flex items-center justify-center",children:["Q",c+1]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${s?"text-slate-100":"text-slate-800"}`,children:l.question}),e.jsx("span",{className:`mt-1 inline-block rounded border px-2 py-0.5 text-xs font-medium ${s?"border-indigo-500/40 bg-indigo-500/15 text-indigo-200":"border-indigo-200 bg-indigo-50 text-indigo-700"}`,children:l.framework})]})]}),e.jsx("p",{className:`mt-3 text-xs leading-relaxed ${s?"text-slate-300":"text-slate-600"}`,children:l.description}),u.length?e.jsx("div",{className:"mt-3 flex flex-wrap gap-x-3 gap-y-1",children:u.map(b=>e.jsx("a",{href:b.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-medium text-[#005eb8] underline",children:b.label},`${l.id}-${b.url}`))}):null,e.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:l.componentIds.map(b=>{const L=Wn(b);return L?e.jsxs("button",{type:"button",onClick:()=>n(b),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold transition-colors ${s?"border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25":"border-blue-200 bg-blue-50 text-[#005eb8] hover:bg-blue-100"}`,children:["Go to ",L.label]},b):null})})]},l.id)})})}),e.jsxs(Gn,{title:"The Five Change Phases",description:"Select a phase to see the key deliverables expected at that stage.",isOpen:i==="phases",onToggle:()=>o("phases"),darkMode:s,children:[e.jsx("div",{className:`mb-6 hidden grid-cols-5 gap-1 overflow-hidden rounded-lg border text-center text-xs font-semibold md:grid ${s?"border-slate-700":"border-slate-200"}`,children:_t.map(l=>e.jsxs("button",{onClick:()=>C(l.phase),className:`py-2 px-1 transition-colors ${p===l.phase?`${l.color} ${l.textColor} ring-2 ring-inset ring-current`:s?"bg-slate-800 text-slate-300 hover:bg-slate-700":"bg-slate-100 text-slate-500 hover:bg-slate-200"}`,children:["Phase ",l.phase]},l.phase))}),e.jsx("div",{className:"space-y-3",children:_t.map(l=>{const c=p===l.phase;return e.jsxs("div",{className:`rounded-lg border overflow-hidden transition-shadow ${s?l.darkBorderColor:l.borderColor} ${c?"shadow-md":""}`,children:[e.jsxs("button",{onClick:()=>C(l.phase),className:`w-full flex items-center justify-between p-4 text-left transition-colors ${s?l.darkColor:l.color}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 border ${s?`${l.darkTextColor} bg-slate-900 ${l.darkBorderColor}`:`${l.textColor} bg-white ${l.borderColor}`}`,children:l.phase}),e.jsxs("div",{children:[e.jsx("p",{className:`font-semibold text-sm ${s?l.darkTextColor:l.textColor}`,children:l.label}),e.jsxs("p",{className:`text-xs ${s?"text-slate-300":"text-slate-500"}`,children:[e.jsxs("span",{className:"italic",children:['"',l.tagline,'"']})," · ",l.programmeStage]})]})]}),e.jsx("span",{className:`text-lg font-bold transition-transform ${s?l.darkTextColor:l.textColor} ${c?"rotate-45":""}`,children:"+"})]}),c&&e.jsxs("div",{className:`border-t px-5 pb-5 pt-3 ${s?"border-slate-700 bg-slate-900":"border-slate-100 bg-white"}`,children:[e.jsx("p",{className:`mb-3 text-xs font-semibold uppercase tracking-wide ${s?"text-slate-300":"text-slate-500"}`,children:"Key deliverables"}),e.jsx("ul",{className:"space-y-2",children:l.deliverables.map((u,b)=>e.jsxs("li",{className:`flex items-start gap-2 text-sm ${s?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{className:`mt-0.5 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${s?`${l.darkColor} ${l.darkTextColor}`:`${l.color} ${l.textColor}`}`,children:b+1}),u]},b))})]})]},l.phase)})})]}),e.jsx(Gn,{title:"The Role of the Change Manager",description:"Change management (and change managers) provide essential assistance to project managers through:",isOpen:i==="role",onToggle:()=>o("role"),darkMode:s,children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:za.map(l=>e.jsxs("div",{className:`rounded-md border p-4 ${s?"border-slate-700 bg-slate-800":"border-slate-100 bg-slate-50"}`,children:[e.jsx("p",{className:"text-sm font-semibold text-[#005eb8] mb-1",children:l.title}),e.jsx("p",{className:`text-xs leading-relaxed ${s?"text-slate-300":"text-slate-600"}`,children:l.body})]},l.title))})}),e.jsxs("div",{className:`flex flex-col gap-4 rounded-lg border p-5 sm:flex-row sm:items-center ${s?"border-slate-700 bg-slate-800":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:`mb-1 text-sm font-semibold ${s?"text-slate-100":"text-slate-700"}`,children:"Explore the full Toolkit"}),e.jsx("p",{className:`text-xs ${s?"text-slate-300":"text-slate-500"}`,children:"Access templates, frameworks, and guidance materials on the NHS Change Management Network workspace."})]}),e.jsx("a",{href:"https://future.nhs.uk/CMN/view?objectId=129489733",target:"_blank",rel:"noopener noreferrer",className:"shrink-0 inline-flex items-center gap-2 rounded-md bg-[#005eb8] text-white text-sm font-medium px-4 py-2 hover:bg-blue-700 transition-colors",children:"Change Management Toolkit ↗"})]})]})}const st="focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",at=`inline-flex items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] transition-colors ${st}`,Je=`inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#212b32] border border-[#768692] shadow-[0_3px_0_#d8dde0] hover:bg-[#f0f4f5] transition-colors ${st}`,ot=st,At={1:"Pre go-live planning and early mobilisation.",2:"Go-live readiness and immediate launch support.",3:"Early adoption reinforcement and consistency.",4:"Embedding new ways of working across teams.",5:"Sustained adoption and benefits realisation at scale."},Ja={1:"Low confidence",2:"Some confidence",3:"Moderate confidence",4:"High confidence",5:"Very high confidence"},Xa={A:"Well embedded in practice",B:"Mostly embedded in practice",C:"Partly embedded in practice",D:"Early adoption in practice",E:"Not yet embedded in practice"};function Qa(n){return n>=4?"high":n===3?"average":"below"}function Za(n){return n==="A"||n==="B"?"high":n==="C"?"average":"below"}function eo(n,t){const a=Za(n),s=Qa(t),i=a==="high"&&s==="high",h=a==="below"&&s==="below",p=a==="high"&&s!=="below"||s==="high"&&a!=="below";return i?"Blue":h?"Red":p?"Green":"Amber"}function no({orgProfile:n,onProfileUpdate:t,components:a,store:s,getEntry:i,onComponentClick:h,onOpenOnboarding:p,darkMode:m=!1,currentUserId:o,onCurrentUserChange:C}){var Se,_,ne,X,Ae,Ie;const[l,c]=g.useState(n),[u,b]=g.useState(null),L=Ws(l),V=g.useMemo(()=>L.errors.reduce((v,E)=>(v[E.field]||(v[E.field]=[]),v[E.field].push(E.message),v),{}),[L.errors]),j=g.useCallback(v=>{var E;return(E=V[v])==null?void 0:E[0]},[V]),B=!!(l.trustName.trim()&&(l.projectName||"").trim()&&(l.leadName||"").trim()&&l.cst.goLiveDate.trim());g.useEffect(()=>{c(n)},[n]);const y=g.useCallback(v=>{const E={...l,trustName:v};c(E),t(E)},[l,t]),Y=g.useCallback(v=>{const E={...l,projectName:v};c(E),t(E)},[l,t]),N=g.useCallback(v=>{const E={...l,leadName:v};c(E),t(E)},[l,t]),F=g.useCallback(v=>{const E={...l,cst:{...l.cst,type:v}};c(E),t(E)},[l,t]),G=g.useCallback(v=>{const E={...l,cst:{...l.cst,pathway:v}};c(E),t(E)},[l,t]),ge=g.useCallback((v,E)=>{const fe={...l,cst:{...l.cst,[v]:E}};c(fe),t(fe)},[l,t]),le=g.useCallback(v=>{const E={...l,cst:{...l.cst,toolkitChoice:v}};c(E),t(E)},[l,t]),me=g.useCallback((v,E,fe)=>{const de=l.cst.phaseCapability[v]||{competence:"C",confidence:3},Q={...l,cst:{...l.cst,phaseCapability:{...l.cst.phaseCapability,[v]:{competence:de.competence,confidence:de.confidence,assessedAt:new Date().toISOString(),reason:"manual",[E]:fe}}}};c(Q),t(Q)},[l,t]),ee=g.useCallback(v=>{const E={...l,linkOverrides:v};c(E),t(E)},[l,t]),ue=g.useCallback(()=>{const v={id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:"",role:""},E={...l,teamMembers:[...l.teamMembers||[],v]};c(E),t(E)},[l,t]),$=g.useCallback((v,E,fe)=>{const de={...l,teamMembers:(l.teamMembers||[]).map(Q=>Q.id===v?{...Q,[E]:fe}:Q)};c(de),t(de)},[l,t]),J=g.useCallback(v=>{const E={...l,teamMembers:(l.teamMembers||[]).filter(fe=>fe.id!==v)};c(E),t(E),o===v&&C("")},[l,t,o,C]),xe=a.reduce((v,E)=>(v[E.phase]=v[E.phase]||[],v[E.phase].push(E),v),{});return e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h2",{className:`text-2xl font-bold ${m?"text-slate-100":"text-slate-800"}`,children:"CST Personalisation"}),e.jsx("button",{type:"button",onClick:p,className:Je,"data-testid":"cst-show-intro-button",children:"Show introduction again"})]}),e.jsx("p",{className:`text-sm -mt-4 ${m?"text-slate-300":"text-slate-600"}`,children:"This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways it follows, and how it's tracking against its readiness phases."}),e.jsxs("div",{className:`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${m?"border-emerald-500/40 bg-emerald-500/15 text-emerald-200":"border-emerald-200 bg-emerald-50 text-emerald-800"}`,children:[e.jsx("span",{className:"inline-block h-2 w-2 rounded-full bg-emerald-500","aria-hidden":"true"}),"Auto-save is on for CST Personalisation."]}),e.jsxs("div",{className:`${m?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:`text-lg font-semibold ${m?"text-slate-100":"text-slate-800"}`,children:"Organisation profile"}),e.jsx("p",{className:`text-sm ${m?"text-slate-300":"text-slate-600"}`,children:"Step 1: Basic details."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-trust-name",className:`block text-sm font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Organisation Name"}),e.jsx("input",{id:"org-trust-name",type:"text","data-testid":"cst-trust-name-input",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${m?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.trustName,onChange:v=>y(v.target.value),"aria-invalid":!!j("trustName"),"aria-describedby":j("trustName")?"org-trust-name-error":void 0}),j("trustName")?e.jsx("p",{id:"org-trust-name-error",className:`mt-1 text-xs ${m?"text-amber-300":"text-red-700"}`,children:j("trustName")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-project-name",className:`block text-sm font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Programme / Project Name"}),e.jsx("input",{id:"org-project-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${m?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.projectName||"",onChange:v=>Y(v.target.value)})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-lead-name",className:`block text-sm font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Lead Submitter (Change Lead)"}),e.jsx("input",{id:"org-lead-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${m?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.leadName||"",onChange:v=>N(v.target.value)})]}),B?e.jsxs("div",{className:`rounded-md border p-4 ${m?"border-green-500/40 bg-green-500/10":"border-green-200 bg-green-50"}`,children:[e.jsx("p",{className:`text-sm font-semibold ${m?"text-green-200":"text-green-900"}`,children:"Stage 1 complete: Project details captured."}),e.jsx("p",{className:`mt-1 text-xs ${m?"text-green-100":"text-green-800"}`,children:"Your details are saved. Continue to assign delivery actions against component lenses."}),e.jsx("button",{type:"button",onClick:()=>{a[0]&&h(a[0].id)},className:"mt-3 rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Continue to assigning actions"})]}):e.jsx("div",{className:`rounded-md border p-3 text-xs ${m?"border-amber-500/40 bg-amber-500/10 text-amber-100":"border-amber-200 bg-amber-50 text-amber-900"}`,children:"Stage 1 in progress: add organisation name, programme name, lead name, and go-live date to complete this step."}),e.jsxs("details",{className:`${m?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,open:!0,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-semibold ${m?"text-slate-100":"text-slate-800"}`,children:"Step 2: Pathway and timeline (Context Specific Template)"}),e.jsx("p",{className:`mt-2 text-xs ${m?"text-slate-300":"text-slate-600"}`,children:"Choose the full pathway title for your programme, then set key timeline dates."}),e.jsxs("div",{className:"mt-3 grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-type",className:`block text-sm font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"CST Type"}),e.jsx("select",{id:"cst-type",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${m?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.cst.type,onChange:v=>F(v.target.value),children:aa.map(v=>e.jsx("option",{value:v.value,children:v.label},v.value))})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-pathway",className:`block text-sm font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Pathway"}),e.jsx("select",{id:"cst-pathway",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${m?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.cst.pathway,onChange:v=>G(v.target.value),"aria-invalid":!!j("cst.pathway"),"aria-describedby":j("cst.pathway")?"cst-pathway-error":void 0,children:Xt.map(v=>e.jsx("option",{value:v.value,children:v.label},v.value))}),j("cst.pathway")?e.jsx("p",{id:"cst-pathway-error",className:`mt-1 text-xs ${m?"text-amber-300":"text-red-700"}`,children:j("cst.pathway")}):null]})]}),e.jsxs("div",{className:"mt-3 grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-go-live",className:`block text-sm font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Go Live Date (required)"}),e.jsx("input",{id:"cst-go-live",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${m?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.cst.goLiveDate,onChange:v=>ge("goLiveDate",v.target.value),"aria-invalid":!!j("cst.goLiveDate"),"aria-describedby":j("cst.goLiveDate")?"cst-go-live-error":void 0}),j("cst.goLiveDate")?e.jsx("p",{id:"cst-go-live-error",className:`mt-1 text-xs ${m?"text-amber-300":"text-red-700"}`,children:j("cst.goLiveDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-full-adoption",className:`block text-sm font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Full Adoption Date (optional)"}),e.jsx("input",{id:"cst-full-adoption",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${m?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.cst.fullAdoptionDate,onChange:v=>ge("fullAdoptionDate",v.target.value),"aria-invalid":!!j("cst.fullAdoptionDate"),"aria-describedby":j("cst.fullAdoptionDate")?"cst-full-adoption-error":void 0}),j("cst.fullAdoptionDate")?e.jsx("p",{id:"cst-full-adoption-error",className:`mt-1 text-xs ${m?"text-amber-300":"text-red-700"}`,children:j("cst.fullAdoptionDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-benefit",className:`block text-sm font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Benefit Realisation Date (optional)"}),e.jsx("input",{id:"cst-benefit",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${m?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:l.cst.benefitRealizationDate,onChange:v=>ge("benefitRealizationDate",v.target.value),"aria-invalid":!!j("cst.benefitRealizationDate"),"aria-describedby":j("cst.benefitRealizationDate")?"cst-benefit-error":void 0}),j("cst.benefitRealizationDate")?e.jsx("p",{id:"cst-benefit-error",className:`mt-1 text-xs ${m?"text-amber-300":"text-red-700"}`,children:j("cst.benefitRealizationDate")}):null]})]}),L.errors.filter(v=>v.field.startsWith("cst.")).length>0?e.jsxs("div",{className:`mt-4 rounded-md border p-3 ${m?"border-amber-500/40 bg-amber-500/10":"border-amber-300 bg-amber-50"}`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${m?"text-amber-200":"text-amber-800"}`,children:"CST validation warnings"}),e.jsx("ul",{className:`mt-2 space-y-1 text-sm ${m?"text-amber-100":"text-amber-900"}`,children:L.errors.filter(v=>v.field.startsWith("cst.")).map(v=>e.jsxs("li",{children:["- ",v.message]},v.field+v.message))})]}):null]}),e.jsxs("details",{className:`${m?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-semibold ${m?"text-slate-100":"text-slate-800"}`,children:"Step 3: Confidence and capability by phase"}),e.jsx("div",{className:"mt-2 flex flex-wrap items-center justify-between gap-2",children:e.jsx("p",{className:`text-xs ${m?"text-slate-300":"text-slate-600"}`,children:"Capture your starting position, then refresh when readiness phase changes or after major milestones."})}),e.jsxs("div",{className:"mt-3 rounded-md border border-blue-200 bg-blue-50 p-3 text-xs text-blue-900",children:[e.jsx("p",{className:"font-semibold",children:"How this self-assessment works"}),e.jsx("p",{className:"mt-1",children:"Confidence is how sure your team feels. Delivery readiness is how embedded the new way of working is in practice."}),e.jsx("p",{className:"mt-1",children:"Cards now use BRAG backgrounds: Blue = both high, Green = one high and the other at least average, Amber = neither high, Red = both below average."})]}),e.jsx("div",{className:"mt-3 space-y-3",children:St.map(v=>{const E=l.cst.phaseCapability[v]||{competence:"C",confidence:3},fe=eo(E.competence,E.confidence),de=fe==="Blue"?"border-sky-300 bg-sky-50":fe==="Green"?"border-emerald-300 bg-emerald-50":fe==="Red"?"border-red-300 bg-red-50":"border-amber-300 bg-amber-50",Q=fe==="Blue"?"text-sky-800 bg-sky-100":fe==="Green"?"text-emerald-800 bg-emerald-100":fe==="Red"?"text-red-800 bg-red-100":"text-amber-800 bg-amber-100";return e.jsxs("div",{className:`${m?"border-slate-700 bg-slate-800":de} rounded-md border p-3`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{className:"relative flex items-center gap-2",children:[e.jsxs("span",{className:`font-semibold ${m?"text-slate-100":"text-slate-700"}`,children:["Phase ",v]}),e.jsx("button",{type:"button",onMouseEnter:()=>b(v),onMouseLeave:()=>b(H=>H===v?null:H),onFocus:()=>b(v),onBlur:()=>b(H=>H===v?null:H),onClick:()=>b(H=>H===v?null:v),className:"h-5 w-5 rounded-full border border-slate-300 text-xs font-semibold text-slate-600","aria-expanded":u===v,"aria-controls":`phase-help-${v}`,"aria-label":`Phase ${v} guidance`,children:"i"}),u===v?e.jsx("div",{id:`phase-help-${v}`,role:"tooltip",className:"absolute left-0 top-7 z-10 w-72 rounded-md border border-slate-200 bg-slate-900 px-3 py-2 text-xs text-white shadow-xl",children:At[v]}):null]}),e.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${m?"bg-slate-700 text-slate-100":Q}`,children:fe})]}),e.jsx("p",{className:`mt-1 text-xs ${m?"text-slate-300":"text-slate-600"}`,children:At[v]}),e.jsxs("div",{className:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm",children:[e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${m?"text-slate-300":"text-slate-600"}`,children:"Delivery readiness"}),e.jsx("select",{value:E.competence,onChange:H=>me(v,"competence",H.target.value),className:`w-full rounded-md border px-2 py-2 pr-10 ${m?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Cn.map(H=>e.jsxs("option",{value:H,children:[Xa[H]," (",H,")"]},`${v}-competence-${H}`))})]}),e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${m?"text-slate-300":"text-slate-600"}`,children:"Confidence"}),e.jsx("select",{value:E.confidence,onChange:H=>me(v,"confidence",Number(H.target.value)),className:`w-full rounded-md border px-2 py-2 pr-10 ${m?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Nn.map(H=>e.jsxs("option",{value:H,children:[Ja[H]," (",H,")"]},`${v}-confidence-${H}`))})]})]})]},`phase-capability-${v}`)})})]})]}),e.jsxs("div",{className:`${m?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${m?"text-slate-100":"text-slate-800"}`,children:"Team Members"}),e.jsx("p",{className:`text-sm mt-1 ${m?"text-slate-300":"text-slate-600"}`,children:"Add the people working on this programme so actions and readiness slides can be assigned to a named owner. This roster is saved with the CST; who you're signed in as is remembered on this device only."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-current-user",className:`block text-sm font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"You are signed in as"}),e.jsxs("select",{id:"cst-current-user",value:o||"",onChange:v=>C(v.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 md:w-1/2 ${m?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Not selected"}),(l.teamMembers||[]).map(v=>e.jsxs("option",{value:v.id,children:[v.name||"Unnamed",v.role?` — ${v.role}`:""]},v.id))]})]}),e.jsxs("div",{className:"space-y-2",children:[(l.teamMembers||[]).map(v=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2 items-center",children:[e.jsx("input",{value:v.name,onChange:E=>$(v.id,"name",E.target.value),placeholder:"Name",className:`rounded-md border shadow-sm sm:text-sm p-2 ${m?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("input",{value:v.role,onChange:E=>$(v.id,"role",E.target.value),placeholder:"Role (e.g. Change Lead)",className:`rounded-md border shadow-sm sm:text-sm p-2 ${m?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("button",{type:"button",onClick:()=>J(v.id),className:"shrink-0 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},v.id)),(l.teamMembers||[]).length?null:e.jsx("p",{className:`text-sm ${m?"text-slate-400":"text-slate-500"}`,children:"No team members added yet."})]}),e.jsx("button",{type:"button",onClick:ue,className:Je,children:"+ Add Team Member"})]}),e.jsx("div",{className:`${m?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:e.jsxs("details",{children:[e.jsx("summary",{className:`cursor-pointer text-lg font-semibold ${m?"text-slate-100":"text-slate-800"}`,children:"Step 4: External links"}),e.jsx("p",{className:`mt-2 text-sm ${m?"text-slate-300":"text-slate-600"}`,children:"All toolkit links across the tool point to the NHS Future platform by default. You can override the base toolkit destination for your organisation, or change individual links independently."}),e.jsxs("div",{className:`mt-3 rounded-md border p-3 text-xs ${m?"border-blue-500/30 bg-blue-500/10 text-blue-100":"border-blue-200 bg-blue-50 text-blue-900"}`,children:[e.jsx("p",{className:"font-semibold",children:"Fallback reference"}),e.jsxs("p",{className:"mt-1",children:["Base fallback: ",e.jsx("span",{className:"font-medium",children:vn.label})," (",vn.url,")"]}),e.jsx("p",{className:"mt-1",children:"Default fallback: the original NHS Future link defined per guidance item."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 ${m?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("label",{htmlFor:"cst-toolkit-choice",className:`block text-xs font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Default toolkit for assistant preview"}),e.jsx("select",{id:"cst-toolkit-choice",value:l.cst.toolkitChoice,onChange:v=>le(v.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 ${m?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:In.map(v=>e.jsx("option",{value:v.key,children:v.label},v.key))}),e.jsx("p",{className:`mt-2 text-xs ${m?"text-slate-300":"text-slate-500"}`,children:"This controls which toolkit the chatbot-style assistant opens by default across the tool."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${m?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${m?"text-slate-100":"text-slate-800"}`,children:"Base override"}),e.jsx("p",{className:`text-xs mt-0.5 ${m?"text-slate-300":"text-slate-500"}`,children:"Replaces the Change Management Toolkit destination for all links that fall back to it."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Toolkit name"}),e.jsx("input",{type:"text",placeholder:vn.label,value:((_=(Se=l.linkOverrides)==null?void 0:Se.base)==null?void 0:_.label)??"",onChange:v=>{var E;return ee({...l.linkOverrides,base:{...(E=l.linkOverrides)==null?void 0:E.base,label:v.target.value||void 0}})},className:`w-full rounded-md border shadow-sm sm:text-sm p-2 ${m?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Toolkit URL"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:vn.url,value:((X=(ne=l.linkOverrides)==null?void 0:ne.base)==null?void 0:X.url)??"",onChange:v=>{var E;return ee({...l.linkOverrides,base:{...(E=l.linkOverrides)==null?void 0:E.base,url:v.target.value||void 0}})},className:`flex-1 min-w-0 rounded-md border shadow-sm sm:text-sm p-2 ${m?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),((Ie=(Ae=l.linkOverrides)==null?void 0:Ae.base)==null?void 0:Ie.url)&&e.jsx("button",{type:"button",onClick:()=>{var v;return ee({...l.linkOverrides,base:{...(v=l.linkOverrides)==null?void 0:v.base,url:void 0}})},className:`shrink-0 rounded-md border px-3 py-2 text-xs font-medium ${m?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Reset"})]})]})]})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsx("p",{className:`text-sm font-semibold ${m?"text-slate-100":"text-slate-800"}`,children:"Per-link overrides"}),e.jsxs("p",{className:`text-xs ${m?"text-slate-300":"text-slate-500"}`,children:["Leave a URL blank to use the fallback. Set fallback to ",e.jsx("strong",{children:"Base"})," to use your base override above, or ",e.jsx("strong",{children:"Default"})," to keep the original NHS Future link."]}),Object.entries(qs).map(([v,E])=>{const de=[...E.inputs??[],...E.deliverables??[]].filter(Q=>{var H,te,f,A;return(A=(f=(te=(H=l.linkOverrides)==null?void 0:H.links)==null?void 0:te[Q.key])==null?void 0:f.url)==null?void 0:A.trim()}).length;return e.jsxs("details",{className:`rounded-md border ${m?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer items-center justify-between gap-2 p-3 text-sm font-medium ${m?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{children:v}),de>0&&e.jsxs("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${m?"bg-blue-500/20 text-blue-300":"bg-blue-100 text-blue-700"}`,children:[de," override",de!==1?"s":""]})]}),e.jsx("div",{className:`divide-y ${m?"divide-slate-700":"divide-slate-100"}`,children:["inputs","deliverables"].map(Q=>{const H=E[Q]??[];return H.length?e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${m?"text-slate-400":"text-slate-500"}`,children:Q}),H.map(te=>{var A,I;const f=((I=(A=l.linkOverrides)==null?void 0:A.links)==null?void 0:I[te.key])??{fallback:"base"};return e.jsxs("div",{className:"grid grid-cols-1 gap-1.5",children:[e.jsx("span",{className:`text-xs font-medium ${m?"text-slate-300":"text-slate-700"}`,children:te.label}),e.jsx("p",{className:`text-xs truncate ${m?"text-slate-500":"text-slate-400"}`,children:te.url}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:"Override URL (leave blank to use fallback)",value:f.url??"",onChange:k=>{var Ee;const R=k.target.value||void 0;ee({...l.linkOverrides,links:{...(Ee=l.linkOverrides)==null?void 0:Ee.links,[te.key]:{...f,url:R}}})},className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${m?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),!f.url&&e.jsxs("select",{value:f.fallback??"base",onChange:k=>{var R;return ee({...l.linkOverrides,links:{...(R=l.linkOverrides)==null?void 0:R.links,[te.key]:{...f,fallback:k.target.value}}})},className:`rounded border px-2 py-1.5 text-xs ${m?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"base",children:"Fallback: Base"}),e.jsx("option",{value:"default",children:"Fallback: Default"})]}),f.url&&e.jsx("button",{type:"button",onClick:()=>{var R;const k={...(R=l.linkOverrides)==null?void 0:R.links};delete k[te.key],ee({...l.linkOverrides,links:k})},className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${m?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Clear"})]})]},te.key)})]},Q):null})})]},v)})]})]})}),e.jsxs("div",{className:`${m?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-5`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${m?"text-slate-100":"text-slate-800"}`,children:"Programme Hierarchy"}),e.jsxs("p",{className:`text-sm mt-1 ${m?"text-slate-300":"text-slate-600"}`,children:["Your programme has ",a.length," components, each viewed through one or more lenses. A component is a change topic you assess and track; a lens is the perspective used to assess it (e.g. leadership, risk, capability). Click a component to jump to its assessment."]})]}),St.filter(v=>{var E;return(E=xe[v])==null?void 0:E.length}).map(v=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:`text-sm font-semibold ${m?"text-slate-100":"text-slate-700"}`,children:["Phase ",v]}),e.jsx("div",{className:"space-y-2",children:xe[v].map(E=>{const fe=E.lenses.reduce((Q,H)=>{const te=i(E.id,H);return{total:Q.total+te.actions.length,completed:Q.completed+te.actions.filter(f=>f.status==="Completed").length}},{total:0,completed:0}),de=ha(s,E.id,i);return e.jsxs("button",{type:"button","data-testid":`cst-component-button-${E.id}`,onClick:()=>h(E.id),className:`w-full text-left rounded-md border p-3 transition-colors ${m?"border-slate-700 bg-slate-900 hover:border-blue-400 hover:bg-slate-800":"border-slate-200 hover:border-blue-300 hover:bg-blue-50/40"}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("span",{className:`font-semibold ${m?"text-slate-100":"text-slate-800"}`,children:E.label}),e.jsxs("span",{className:`text-xs ${m?"text-slate-300":"text-slate-500"}`,children:["Target ",E.target]})]}),e.jsx("div",{className:"mt-2 flex flex-wrap gap-1.5",children:E.lenses.map(Q=>{const H=i(E.id,Q);return e.jsxs("span",{className:`text-xs px-2 py-1 rounded-full border ${H.score>=E.target?m?"border-green-500/40 bg-green-500/15 text-green-200":"bg-green-50 border-green-200 text-green-800":H.score>0?m?"border-amber-500/40 bg-amber-500/15 text-amber-200":"bg-amber-50 border-amber-200 text-amber-800":m?"border-slate-600 bg-slate-800 text-slate-300":"bg-slate-100 border-slate-200 text-slate-600"}`,children:[Q,": ",H.score,"/",E.target]},Q)})}),e.jsxs("p",{className:`mt-2 text-xs ${m?"text-slate-300":"text-slate-500"}`,children:["Lens actions: ",fe.completed,"/",fe.total," complete · Outcomes: ",de.completed,"/",de.total," complete"]})]},E.id)})})]},`phase-group-${v}`))]})]})}const Un=[1,2,3,4,5];function to(n,t){const a=n.lenses.reduce((s,i)=>s+Number(t(n.id,i).score||0),0);return n.lenses.length?Number((a/n.lenses.length).toFixed(1)):0}function so(n,t,a,s,i,h){if(n.phase>a)return{label:"Not in current phase yet",rowClass:h?"border-slate-600 bg-slate-800/80":"border-slate-200 bg-slate-50",chipClass:h?"bg-slate-700 text-slate-100":"bg-slate-200 text-slate-700",barClass:"bg-slate-400"};const p=nt(n.id,s),m=wa({averageScore:t,targetScore:n.target,checkedItemKeys:i,rule:p});return m.status==="off-track"?{label:`Off track (${m.completionPct}% checklist)`,rowClass:h?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:h?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:m.status==="attention"?{label:`Needs attention (${m.completionPct}% checklist)`,rowClass:h?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:h?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:t>=n.target?{label:`On track (${m.completionPct}% checklist)`,rowClass:h?"border-green-700 bg-green-950/45":"border-green-200 bg-green-50",chipClass:h?"bg-green-900 text-green-100":"bg-green-100 text-green-700",barClass:"bg-green-500"}:n.phase<a?{label:"Behind timeline",rowClass:h?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:h?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:n.phase===a?{label:"Due this phase",rowClass:h?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:h?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:{label:"In progress",rowClass:h?"border-blue-700 bg-blue-950/45":"border-blue-200 bg-blue-50",chipClass:h?"bg-blue-900 text-blue-100":"bg-blue-100 text-blue-700",barClass:"bg-blue-500"}}function ao({components:n,metrics:t,getEntry:a,onComponentClick:s,pathway:i,pathwayChecks:h,darkMode:p=!1}){const m=n.map(o=>{var c;const C=to(o,a),l=((c=h[o.id])==null?void 0:c[i])||[];return{component:o,average:C,status:so(o,C,t.currentPhase,i,l,p)}});return e.jsxs("section",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:`${p?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-2xl border p-6 shadow-sm`,children:[e.jsx("p",{className:`text-sm font-semibold uppercase tracking-[0.18em] ${p?"text-slate-300":"text-slate-500"}`,children:"Roadmap View"}),e.jsx("h2",{className:`mt-2 text-2xl font-bold ${p?"text-slate-100":"text-slate-900"}`,children:"Component delivery timeline"}),e.jsx("p",{className:`mt-2 text-sm ${p?"text-slate-300":"text-slate-600"}`,children:"This gantt-style view shows when each component should be completed by phase. Components are coloured by whether they are on track against the current phase. Select a row to jump into the matching assessment tab."})]}),e.jsx("div",{className:"lg:hidden space-y-3",children:m.map(({component:o,average:C,status:l})=>e.jsxs("button",{type:"button",onClick:()=>s(o.id),className:`w-full rounded-xl border p-4 text-left transition-colors ${p?"hover:border-slate-500":"hover:border-slate-300"} ${l.rowClass}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${p?"text-slate-100":"text-slate-800"}`,children:o.label}),e.jsxs("div",{className:`mt-1 text-xs ${p?"text-slate-300":"text-slate-500"}`,children:["Target ",o.target," · completes by Phase ",o.phase]})]}),e.jsx("span",{className:`rounded-full px-2.5 py-1 text-xs font-semibold ${l.chipClass}`,children:l.label})]}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("div",{className:`mb-1 flex items-center justify-between text-xs ${p?"text-slate-300":"text-slate-600"}`,children:[e.jsx("span",{children:"Timeline"}),e.jsxs("span",{children:["Average ",C]})]}),e.jsx("div",{className:"grid grid-cols-5 gap-1",children:Un.map(c=>{const u=c<=o.phase,b=c===o.phase;return e.jsxs("div",{children:[e.jsx("div",{className:`h-2 rounded-full ${p?"bg-slate-700/70":"bg-white/80"}`,children:u?e.jsx("div",{className:`h-full rounded-full ${l.barClass} ${b?"opacity-100":"opacity-35"}`,title:b?"Expected completion phase":"Planned timeline"}):null}),e.jsxs("div",{className:`mt-1 text-center text-[10px] ${p?"text-slate-400":"text-slate-500"}`,children:["P",c]})]},`${o.id}-mobile-${c}`)})})]})]},`mobile-${o.id}`))}),e.jsx("div",{className:`${p?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} hidden lg:block rounded-2xl border p-5 shadow-sm overflow-x-auto`,children:e.jsxs("div",{className:"min-w-[860px]",children:[e.jsxs("div",{className:`grid grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 border-b pb-3 text-xs font-semibold uppercase tracking-wider ${p?"border-slate-700 text-slate-400":"border-slate-200 text-slate-500"}`,children:[e.jsx("div",{children:"Component"}),Un.map(o=>e.jsxs("div",{className:"text-center",children:["Phase ",o]},o)),e.jsx("div",{className:"text-center",children:"Average"}),e.jsx("div",{className:"text-center",children:"Status"})]}),e.jsx("div",{className:"mt-4 space-y-3",children:m.map(({component:o,average:C,status:l})=>e.jsxs("button",{type:"button",onClick:()=>s(o.id),className:`grid w-full grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 rounded-xl border p-2.5 text-left transition-colors ${p?"hover:border-slate-500":"hover:border-slate-300"} ${l.rowClass}`,children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${p?"text-slate-100":"text-slate-800"}`,children:o.label}),e.jsxs("div",{className:`mt-1 text-xs ${p?"text-slate-300":"text-slate-500"}`,children:["Target score ",o.target," · completes by Phase ",o.phase]})]}),Un.map(c=>{const u=c<=o.phase,b=c===o.phase;return e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:`h-7 w-full rounded-full px-1 py-1 ${p?"bg-slate-700/70":"bg-white/70"}`,children:u?e.jsx("div",{className:`h-full rounded-full ${l.barClass} ${b?"opacity-100":"opacity-35"}`,title:b?"Expected completion phase":"Planned timeline"}):null})},`${o.id}-${c}`)}),e.jsx("div",{className:`flex items-center justify-center text-sm font-semibold ${p?"text-slate-100":"text-slate-700"}`,children:C}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("span",{className:`rounded-full px-2.5 py-1 text-xs font-semibold ${l.chipClass}`,children:l.label})})]},o.id))}),e.jsxs("div",{className:`mt-4 rounded-md border p-3 text-xs ${p?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{className:"font-semibold",children:"Key:"})," Grey rows are not yet due for the current phase. Red rows indicate overdue or off-track work."]})]})})]})}function oo(n){return Vs.sanitize(n,{USE_PROFILES:{html:!0}})}const io=[{label:"Bold",command:"bold",icon:"B"},{label:"Italic",command:"italic",icon:"I"},{label:"Bullet list",command:"insertUnorderedList",icon:"•"},{label:"Numbered list",command:"insertOrderedList",icon:"1."}];function jt({value:n,onChange:t,placeholder:a,className:s}){const i=g.useRef(null);g.useEffect(()=>{const o=i.current;o&&o.innerHTML!==n&&(o.innerHTML=n)},[n]);const h=()=>{const o=i.current;o&&t(oo(o.innerHTML))},p=o=>{var C;(C=i.current)==null||C.focus(),document.execCommand(o,!1),h()},m=!n||n==="<br>";return e.jsxs("div",{className:`rounded-md border border-slate-300 bg-white ${s||""}`,children:[e.jsx("div",{"data-print-hide":"true",className:"flex items-center gap-1 border-b border-slate-200 bg-slate-50 px-1.5 py-1",children:io.map(o=>e.jsx("button",{type:"button",title:o.label,"aria-label":o.label,onMouseDown:C=>C.preventDefault(),onClick:()=>p(o.command),className:"flex h-6 min-w-[1.5rem] items-center justify-center rounded px-1 text-xs font-bold text-slate-600 hover:bg-slate-200",children:o.icon},o.command))}),e.jsxs("div",{className:"relative",children:[m&&a?e.jsx("span",{className:"pointer-events-none absolute left-2 top-1.5 text-sm text-slate-400",children:a}):null,e.jsx("div",{ref:i,contentEditable:!0,suppressContentEditableWarning:!0,onInput:h,onBlur:h,className:"min-h-[4.5rem] px-2 py-1.5 text-sm text-slate-800 outline-none [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"})]})]})}function An(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}const Yn="nhs-highlight-builder-layout",Ot=[{id:"executive-summary",label:"Executive Summary"},{id:"change-dashboard",label:"Change Dashboard"},{id:"adoption-metrics",label:"Adoption Metrics"},{id:"what-went-well",label:"What Went Well"},{id:"risks-issues",label:"Key Risks and Issues"},{id:"stakeholder-insights",label:"Stakeholder Insights"},{id:"interventions-delivered",label:"Change Interventions Delivered"},{id:"upcoming-priorities",label:"Upcoming Priorities"},{id:"decisions-required",label:"Decisions Required"},{id:"change-lead-assessment",label:"Change Lead Assessment"}],Me={title:"Executive Highlight Report",themeColor:"#005eb8",logoDataUrl:"",programmeName:"",reportingPeriod:"",changeLeadName:"",sroName:"",overallStatus:"Amber",orientation:"landscape",bragSlides:[],sections:["executive-summary","change-dashboard","adoption-metrics","what-went-well","risks-issues","stakeholder-insights","interventions-delivered","upcoming-priorities","decisions-required","change-lead-assessment"],sectionNarratives:{}},ro={Green:"bg-green-100 text-green-800 border-green-200",Amber:"bg-amber-100 text-amber-800 border-amber-200",Red:"bg-red-100 text-red-800 border-red-200"},lo={Green:"bg-green-500",Amber:"bg-amber-500",Red:"bg-red-500"};function Mn({status:n}){return e.jsxs("span",{className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${ro[n]}`,children:[e.jsx("span",{className:`h-2 w-2 rounded-full ${lo[n]}`}),n]})}function co(){return e.jsx("span",{className:"flex h-4 w-4 shrink-0 items-center justify-center rounded bg-green-500 text-[10px] font-bold text-white",children:"✓"})}function kt(n,t){return`${n+1}. ${t}`}function as(n){return Array.isArray(n)?n.filter(t=>!!t&&typeof t=="object").map(t=>({id:t.id||An(),componentId:t.componentId||"",rows:Array.isArray(t.rows)?t.rows.filter(a=>!!a&&typeof a=="object").map(a=>({id:a.id||An(),preventingGreenHtml:a.preventingGreenHtml||"",returnToGreenHtml:a.returnToGreenHtml||"",ownerId:a.ownerId||"",targetDate:a.targetDate||"",linkedActionId:a.linkedActionId})):[]})):[]}function mo(){if(typeof window>"u")return Me;const n=window.localStorage.getItem(Yn);if(!n)return Me;try{const t=JSON.parse(n);return{...Me,...t,overallStatus:t.overallStatus==="Green"||t.overallStatus==="Amber"||t.overallStatus==="Red"?t.overallStatus:Me.overallStatus,orientation:t.orientation==="portrait"||t.orientation==="landscape"?t.orientation:Me.orientation,bragSlides:as(t.bragSlides),sections:Array.isArray(t.sections)&&t.sections.length>0?t.sections:Me.sections}}catch{return Me}}function uo({store:n,metrics:t,lenses:a,components:s=Xn,getEntry:i,trustName:h,projectName:p,themeColor:m,onLayoutSaved:o,darkMode:C=!1,currentUserId:l}){const c=n.orgProfile.teamMembers||[],[u,b]=g.useState(()=>{const f=mo();return m&&!f.themeColor?{...f,themeColor:m}:f}),[L,V]=g.useState(""),[j,B]=g.useState(0),y=g.useRef(null),Y=g.useMemo(()=>new Set(u.sections),[u.sections]),N=g.useMemo(()=>u.sections.reduce((f,A,I)=>(f[A]=I,f),{}),[u.sections]),F=g.useMemo(()=>s.map(f=>{let A=0;f.lenses.forEach(k=>{A+=Number(i(f.id,k).score||0)});const I=Number((A/f.lenses.length).toFixed(1));return{component:f,average:I,target:f.target,gap:Number(Math.max(0,f.target-I).toFixed(1))}}),[s,i]),G=g.useMemo(()=>[...F].sort((f,A)=>A.average-f.average).slice(0,5),[F]),ge=g.useMemo(()=>s.flatMap(f=>f.lenses.flatMap(A=>(i(f.id,A).actions||[]).map(I=>({componentLabel:f.label,componentId:f.id,lens:A,action:I})))).sort((f,A)=>{const I=Le(f.action.status)==="Completed"?1:0,k=Le(A.action.status)==="Completed"?1:0;return I-k}).slice(0,8),[s,i]),le=f=>{b(A=>({...A,...f}))},me=f=>{b(A=>{const I=Y.has(f)?A.sections.filter(k=>k!==f):[...A.sections,f];return{...A,sections:I}})},ee=(f,A)=>{b(I=>({...I,sectionNarratives:{...I.sectionNarratives,[f]:A}}))},ue=()=>{const f=new Set(u.bragSlides.map(k=>k.componentId)),A=s.find(k=>!f.has(k.id))||s[0],I={id:An(),componentId:(A==null?void 0:A.id)||"",rows:[]};b(k=>({...k,bragSlides:[...k.bragSlides,I]}))},$=f=>{b(A=>({...A,bragSlides:A.bragSlides.filter(I=>I.id!==f)}))},J=(f,A)=>{b(I=>({...I,bragSlides:I.bragSlides.map(k=>k.id===f?{...k,componentId:A}:k)}))},xe=f=>{const A={id:An(),preventingGreenHtml:"",returnToGreenHtml:"",ownerId:l||"",targetDate:""};b(I=>({...I,bragSlides:I.bragSlides.map(k=>k.id===f?{...k,rows:[...k.rows,A]}:k)}))},Se=(f,A,I)=>{b(k=>({...k,bragSlides:k.bragSlides.map(R=>R.id===f?{...R,rows:R.rows.map(Ee=>Ee.id===A?{...Ee,...I}:Ee)}:R)}))},_=(f,A)=>{b(I=>({...I,bragSlides:I.bragSlides.map(k=>k.id===f?{...k,rows:k.rows.filter(R=>R.id!==A)}:k)}))},ne=async f=>{var k;const A=(k=f.target.files)==null?void 0:k[0];if(!A)return;const I=await new Promise((R,Ee)=>{const be=new FileReader;be.onload=()=>R(String(be.result||"")),be.onerror=()=>Ee(new Error("Unable to read selected logo file.")),be.readAsDataURL(A)});V(A.name),b(R=>({...R,logoDataUrl:I})),B(R=>R+1)},X=()=>{const f=JSON.stringify(u,null,2);window.localStorage.setItem(Yn,f),wn("highlight-builder-layout.json",f,"application/json"),o==null||o()},Ae=async f=>{var I;const A=(I=f.target.files)==null?void 0:I[0];if(A)try{const k=await A.text(),R=JSON.parse(k);b({...Me,...R,overallStatus:R.overallStatus==="Green"||R.overallStatus==="Amber"||R.overallStatus==="Red"?R.overallStatus:Me.overallStatus,orientation:R.orientation==="portrait"||R.orientation==="landscape"?R.orientation:Me.orientation,bragSlides:as(R.bragSlides),sections:Array.isArray(R.sections)&&R.sections.length>0?R.sections:Me.sections,sectionNarratives:R.sectionNarratives||{}})}catch{window.alert("Unable to load the selected layout JSON. Please verify the file contents.")}finally{f.target.value=""}};g.useEffect(()=>{window.localStorage.setItem(Yn,JSON.stringify(u))},[u]);const Ie=n.history.length>1?n.history[n.history.length-2]:null,v=g.useMemo(()=>F.slice(0,10).map(f=>{const A=Ie?Number((f.component.lenses.reduce((Ee,be)=>{var Oe,je;return Ee+Number(((je=(Oe=Ie.data[f.component.id])==null?void 0:Oe[be])==null?void 0:je.score)||0)},0)/f.component.lenses.length).toFixed(1)):f.average,I=f.average>A?"▲":f.average<A?"▼":"►",k=f.average>=f.target?"Green":f.average>=Math.max(1,f.target-1)?"Amber":"Red",R=f.average>=f.target?"Consistently understood by most stakeholder groups.":f.average>=Math.max(1,f.target-1)?"Progressing, with reinforcement still required.":"Below target and requiring focused intervention.";return{area:f.component.label,status:k,trend:I,commentary:R}}),[F,Ie]),E=g.useMemo(()=>{const f=ge.filter(R=>Le(R.action.status)==="Completed").length,A=ge.length?Math.round(f/ge.length*100):0,I=ge.filter(R=>/champion|change network/i.test(R.action.text||"")).length,k=I>=5?2:I>=1?1:0;return[{measure:"User Activation",target:"95%",current:`${Math.min(100,t.overallPct+6)}%`},{measure:"Active Users",target:"80%",current:`${Math.min(100,t.overallPct)}%`},{measure:"Training Completion",target:"90%",current:`${Math.min(100,t.actionCompletionPct)}%`},{measure:"Stakeholder Engagement Score",target:"80%",current:`${Math.min(100,t.overallPct+4)}%`},{measure:"Champion Coverage",target:"1 per team",current:`${k} per team`},{measure:"User Satisfaction",target:"80%",current:`${Math.min(100,t.overallPct+2)}%`},{measure:"Process Compliance",target:"90%",current:`${Math.min(100,t.overallPct-3)}%`},{measure:"Benefits Evidence Submitted",target:"75%",current:`${Math.min(100,A)}%`}].map(R=>{const Ee=Number((R.current||"").replace(/[^0-9.]/g,"")),be=Number((R.target||"").replace(/[^0-9.]/g,"")),Oe=Ee>=be?"►":Ee>=be-5?"▲":"▼",je=Ee>=be?"Green":Ee>=be-5?"Amber":"Red";return{...R,trend:Oe,status:je}})},[t.actionCompletionPct,t.overallPct,ge]),fe=g.useMemo(()=>F.filter(f=>f.average<f.target).slice(0,4).map(f=>({risk:`Inconsistent adoption in ${f.component.label}`,impact:"Benefits may not be realised in full.",mitigation:"Targeted coaching and local engagement sessions.",status:"Open"})),[F]),de=g.useMemo(()=>t.nextSteps.slice(0,7).map(f=>f.message),[t.nextSteps]),Q=f=>{if((u.sectionNarratives[f]||"").trim())return u.sectionNarratives[f].trim();switch(f){case"executive-summary":return`${u.overallStatus}. The programme continues to progress across ${s.length} components and ${a.length} lenses, with overall delivery at ${t.overallPct}%.`;case"change-dashboard":return"Dashboard status is derived from current component averages versus targets, with trend based on the most recent finalised snapshot.";case"adoption-metrics":return"Metrics below provide an operational view of progress against key adoption measures and targets.";case"what-went-well":return"List key achievements for the reporting period, including sponsorship visibility and areas of strengthened adoption.";case"risks-issues":return"The following risks/issues require active monitoring and mitigation.";case"stakeholder-insights":return"Summarise positive feedback themes, concerns, and sentiment from stakeholder listening channels.";case"interventions-delivered":return"Capture interventions completed this month and assess their observed effectiveness.";case"upcoming-priorities":return"Set out the next 30-day focus to maintain delivery momentum and close adoption gaps.";case"decisions-required":return"Record approvals and decisions needed to unblock delivery and sustain adoption progress.";case"change-lead-assessment":return"Provide confidence ratings and the overall professional assessment from the Change Lead.";default:return""}},H=f=>{const A=Q(f);if(f==="change-dashboard")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:A}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Trend"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Commentary"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:v.map(I=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:I.area}),e.jsx("td",{className:"px-3 py-2 text-sm",children:e.jsx(Mn,{status:I.status})}),e.jsx("td",{className:"px-3 py-2 text-sm",children:I.trend}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:I.commentary})]},I.area))})]})})]});if(f==="adoption-metrics")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:A}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Measure"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Trend"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:E.map(I=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:I.measure}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:I.target}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:I.current}),e.jsx("td",{className:"px-3 py-2 text-sm",children:I.trend}),e.jsx("td",{className:"px-3 py-2 text-sm",children:e.jsx(Mn,{status:I.status})})]},I.measure))})]})})]});if(f==="risks-issues")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:A}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Risk / Issue"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Impact"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Mitigation"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:fe.length?fe.map((I,k)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:I.risk}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:I.impact}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:I.mitigation}),e.jsx("td",{className:"px-3 py-2 text-sm",children:I.status})]},`${I.risk}-${k}`)):e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-2 text-sm text-slate-500",colSpan:4,children:"No key risks are currently above threshold."})})})]})})]});if(f==="upcoming-priorities")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:A}),e.jsx("ol",{className:"mt-3 list-decimal pl-5 space-y-1 text-sm text-slate-700",children:de.length?de.map((I,k)=>e.jsx("li",{children:I},`${I}-${k}`)):e.jsx("li",{children:"No immediate priorities detected from current data."})})]});if(f==="what-went-well")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:A}),e.jsx("ul",{className:"mt-3 space-y-1.5 text-sm text-slate-700",children:G.slice(0,5).map(I=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(co,{}),I.component.label," is tracking at ",I.average," against target ",I.target,"."]},I.component.id))})]});if(f==="stakeholder-insights"){const I=Math.min(85,Math.max(45,t.overallPct-10)),k=Math.min(35,Math.max(10,100-I-8)),R=Math.max(3,100-I-k);return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:A}),e.jsxs("div",{className:"mt-3 grid gap-2 md:grid-cols-3 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 rounded border border-green-200 bg-green-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-green-500"}),"Positive: ",I,"%"]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-amber-200 bg-amber-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500"}),"Neutral: ",k,"%"]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-red-200 bg-red-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-red-500"}),"Negative: ",R,"%"]})]})]})}return f==="interventions-delivered"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:A}),e.jsxs("ul",{className:"mt-3 space-y-1 text-sm text-slate-700",children:[e.jsx("li",{children:"• Sponsor briefing sessions"}),e.jsx("li",{children:"• Stakeholder engagement workshops"}),e.jsx("li",{children:"• Communications campaign"}),e.jsx("li",{children:"• Training delivery"}),e.jsx("li",{children:"• Champion network meetings"}),e.jsx("li",{children:"• Adoption data reviews"})]})]}):f==="decisions-required"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:A}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Decision"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Required By"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Approval for additional adoption support resource"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Programme Board"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:"TBC"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Agreement on ongoing benefits ownership"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"SRO"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:"TBC"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Endorsement of next rollout phase"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Steering Group"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:"TBC"})]})]})]})})]}):f==="change-lead-assessment"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:A}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Confidence"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Delivery of Change Activities"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"High"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Stakeholder Engagement"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"High"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Adoption Achievement"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"Medium"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Benefits Realisation"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"Medium"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Sustainability Post Go-Live"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"Medium"})]})]})]})})]}):e.jsx(e.Fragment,{children:e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:A})})},te=()=>{if(!y.current){window.alert("Preview content is not ready to print yet.");return}const f=window.open("","_blank");if(!f)return;f.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8" /><title>Highlight Report</title></head><body></body></html>'),document.querySelectorAll('link[rel="stylesheet"], style').forEach(k=>{f.document.head.appendChild(k.cloneNode(!0))});const A=f.document.createElement("style");A.textContent=`
      @page { margin: 8mm; size: A4 ${u.orientation}; }
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
    `,f.document.head.appendChild(A);const I=y.current.cloneNode(!0);I.className="printable-report",I.querySelectorAll('[data-print-exclude="true"]').forEach(k=>k.remove()),f.document.body.appendChild(I),f.document.close(),setTimeout(()=>{f.focus(),f.print(),f.close()},250)};return e.jsxs("section",{className:"space-y-6",children:[C?e.jsx("div",{className:"rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm font-semibold text-red-900",children:"Dark mode not compatible for Highlight Report due to print/save functionality."}):null,e.jsx("div",{className:"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",children:e.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Highlight Builder Tool"}),e.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:"Create a polished highlight pack"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:X,className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"Save JSON Layout"}),e.jsxs("label",{className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 cursor-pointer",children:["Load JSON Layout",e.jsx("input",{type:"file",accept:"application/json",className:"hidden",onChange:Ae},j)]}),e.jsxs("div",{className:"flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-semibold",role:"group","aria-label":"PDF export orientation",children:[e.jsx("button",{type:"button",onClick:()=>le({orientation:"portrait"}),"aria-pressed":u.orientation==="portrait",className:`px-3 py-2 transition-colors ${u.orientation==="portrait"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Portrait"}),e.jsx("button",{type:"button",onClick:()=>le({orientation:"landscape"}),"aria-pressed":u.orientation==="landscape",className:`px-3 py-2 transition-colors border-l border-slate-300 ${u.orientation==="landscape"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Landscape"})]}),e.jsxs("button",{type:"button",onClick:te,className:"rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm",style:{backgroundColor:u.themeColor},children:["Print / Save PDF (",u.orientation==="landscape"?"Landscape":"Portrait",")"]})]})]})}),e.jsxs("div",{className:"grid gap-6 xl:grid-cols-[340px,1fr]",children:[e.jsx("aside",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Report title"}),e.jsx("input",{value:u.title,onChange:f=>le({title:f.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Programme"}),e.jsx("input",{value:u.programmeName,onChange:f=>le({programmeName:f.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Reporting period"}),e.jsx("input",{value:u.reportingPeriod,onChange:f=>le({reportingPeriod:f.target.value}),placeholder:"July 2026",className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Change Lead"}),e.jsx("input",{value:u.changeLeadName,onChange:f=>le({changeLeadName:f.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"SRO"}),e.jsx("input",{value:u.sroName,onChange:f=>le({sroName:f.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Overall Change Status"}),e.jsxs("select",{value:u.overallStatus,onChange:f=>le({overallStatus:f.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500",children:[e.jsx("option",{value:"Green",children:"Green"}),e.jsx("option",{value:"Amber",children:"Amber"}),e.jsx("option",{value:"Red",children:"Red"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Theme colour"}),e.jsx("input",{type:"color",value:u.themeColor,onChange:f=>le({themeColor:f.target.value}),className:"h-10 w-full rounded-md border border-slate-300"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Logo in top-left"}),e.jsxs("label",{className:"flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-3 py-4 text-sm text-slate-700 hover:bg-slate-100",children:[e.jsx("span",{children:L||"Upload logo"}),e.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:ne})]}),u.logoDataUrl?e.jsx("div",{className:"mt-3 rounded-md border border-slate-200 bg-slate-50 p-2",children:e.jsx("img",{alt:"Preview logo",src:u.logoDataUrl,className:"max-h-16 w-auto"})}):null]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-1",children:"Programme/Project Readiness Slides"}),e.jsx("p",{className:"text-xs text-slate-500 mb-3",children:"These print first, one per page. Add a slide per component you want to report on."}),e.jsxs("div",{className:"space-y-2",children:[u.bragSlides.map((f,A)=>e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-500",children:["Page ",A+1]}),e.jsx("button",{type:"button",onClick:()=>$(f.id),className:"text-xs font-semibold text-red-600 hover:text-red-800",children:"Remove"})]}),e.jsx("select",{value:f.componentId,onChange:I=>J(f.id,I.target.value),className:"mt-1 w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm outline-none focus:border-blue-500",children:s.map(I=>e.jsx("option",{value:I.id,children:I.label},I.id))}),e.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:[f.rows.length," row",f.rows.length===1?"":"s"]})]},f.id)),u.bragSlides.length?null:e.jsx("p",{className:"text-sm text-slate-500",children:"No readiness slides yet."})]}),e.jsx("button",{type:"button",onClick:ue,disabled:!s.length,className:"mt-3 w-full rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 disabled:opacity-50",children:"+ Add Readiness Slide"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-3",children:"Report sections"}),e.jsx("div",{className:"space-y-2",children:Ot.map(f=>{const A=Y.has(f.id),I=f.id,k=N[f.id],R=typeof k=="number"?kt(k,f.label):f.label;return e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("label",{className:"flex items-center gap-3 text-sm text-slate-700",children:[e.jsx("input",{type:"checkbox",checked:A,onChange:()=>me(f.id)}),e.jsx("span",{children:R})]}),A?e.jsxs("div",{className:"mt-3 space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-1",children:"Section narrative"}),e.jsx("textarea",{value:u.sectionNarratives[I]||"",onChange:Ee=>ee(I,Ee.target.value),placeholder:Q(I),rows:4,className:"w-full rounded-md border border-slate-300 px-2 py-2 text-xs outline-none focus:border-blue-500"})]}),e.jsx("p",{className:"text-xs text-slate-500",children:"All adoption components are automatically included in this section."})]}):null]},f.id)})})]})]})}),e.jsxs("div",{ref:y,className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsxs("div",{className:"mb-4 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3",children:[u.logoDataUrl?e.jsx("img",{alt:"Logo preview",src:u.logoDataUrl,className:"max-h-12 w-auto"}):e.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-md bg-slate-200 text-sm font-bold text-slate-700",children:"NHS"}),e.jsxs("div",{children:[e.jsx("div",{"data-print-hide":"true",className:"text-xs font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Builder Preview"}),e.jsx("div",{className:"text-lg font-bold text-slate-900",children:u.title}),e.jsxs("div",{className:"text-sm text-slate-600 mt-1",children:[u.programmeName||p||"Unnamed Programme"," ·"," ",u.reportingPeriod||"Reporting period not set"]}),e.jsxs("div",{className:"mt-1 flex items-center gap-2 text-sm text-slate-600",children:["Overall Status: ",e.jsx(Mn,{status:u.overallStatus})]}),e.jsx("div",{className:"text-sm text-slate-600 mt-0.5",children:h||"Unconfigured Trust"})]})]}),e.jsxs("div",{className:"grid gap-3",children:[u.bragSlides.map(f=>{const A=F.find(k=>k.component.id===f.componentId),I=A?ns(A.average,A.target):null;return e.jsxs("article",{"data-brag-slide":"true",className:"rounded-xl border border-slate-200 p-4",style:{borderLeft:`4px solid ${u.themeColor}`},children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Programme/Project Readiness"}),e.jsx("h3",{className:"text-lg font-bold text-slate-900",children:(A==null?void 0:A.component.label)||"Select a component"})]}),A&&I?e.jsxs("div",{className:"text-right",children:[e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold ${ts[I]}`,children:I}),e.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:[A.average.toFixed(1)," of ",A.target," target"]})]}):null]}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What is preventing you from being green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What do you/others need to do to return to green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target date"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[f.rows.map(k=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(jt,{value:k.preventingGreenHtml,onChange:R=>Se(f.id,k.id,{preventingGreenHtml:R}),placeholder:"What's blocking green?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(jt,{value:k.returnToGreenHtml,onChange:R=>Se(f.id,k.id,{returnToGreenHtml:R}),placeholder:"What needs to happen?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:k.ownerId,onChange:R=>Se(f.id,k.id,{ownerId:R.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"",children:"Unassigned"}),c.map(R=>e.jsxs("option",{value:R.id,children:[R.name||"Unnamed",R.role?` — ${R.role}`:""]},R.id))]})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{type:"date",value:k.targetDate,onChange:R=>Se(f.id,k.id,{targetDate:R.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>_(f.id,k.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},k.id)),f.rows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No rows yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>xe(f.id),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Row"})]},f.id)}),u.sections.map(f=>{var A;return e.jsxs("article",{className:"rounded-xl border border-slate-200 p-4",style:{borderLeft:`4px solid ${u.themeColor}`},children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700",children:kt(N[f]||0,((A=Ot.find(I=>I.id===f))==null?void 0:A.label)||f)}),H(f)]},f)})]})]})]})]})}function go(n){const t={};return n.sections.forEach(a=>{a.items.forEach(s=>{t[s.id]="mine"})}),t}function Rt({active:n,onClick:t,children:a,darkMode:s}){return e.jsx("button",{type:"button",onClick:t,className:`rounded-md border px-2 py-1 text-left text-xs transition-colors ${ot} ${n?"border-[#005eb8] bg-[#005eb8]/10 font-semibold text-[#005eb8]":s?"border-slate-600 bg-slate-900 text-slate-300 hover:bg-slate-800":"border-slate-300 bg-white text-slate-600 hover:bg-slate-50"}`,children:a})}function po({item:n,choice:t,onChoose:a,myLabel:s,theirLabel:i,darkMode:h}){return e.jsxs("div",{"data-testid":`import-conflict-row-${n.id}`,className:`grid grid-cols-1 gap-2 border-t py-3 first:border-t-0 md:grid-cols-[1fr_1fr_1fr] ${h?"border-slate-700":"border-slate-200"}`,children:[e.jsx("div",{className:`text-sm font-semibold ${h?"text-slate-100":"text-slate-800"}`,children:n.label}),e.jsxs(Rt,{active:t==="mine",onClick:()=>a(n.id,"mine"),darkMode:h,children:[e.jsx("span",{className:`block text-[0.65rem] font-bold uppercase tracking-wide ${h?"text-slate-400":"text-slate-500"}`,children:s}),n.mineSummary]}),e.jsxs(Rt,{active:t==="theirs",onClick:()=>a(n.id,"theirs"),darkMode:h,children:[e.jsx("span",{className:`block text-[0.65rem] font-bold uppercase tracking-wide ${h?"text-slate-400":"text-slate-500"}`,children:i}),n.theirsSummary]})]})}function ho({report:n,myLabel:t,theirLabel:a,onResolve:s,onCancel:i,darkMode:h=!1}){const[p,m]=g.useState(()=>go(n)),o=n.sections.reduce((l,c)=>l+c.items.length,0),C=l=>{m(c=>{const u={...c};return n.sections.forEach(b=>{b.items.forEach(L=>{u[L.id]=l})}),u})};return e.jsx("div",{"data-testid":"import-conflict-modal",className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4",onClick:l=>{l.target===l.currentTarget&&i()},children:e.jsxs("div",{onClick:l=>l.stopPropagation(),className:`flex w-full max-w-4xl max-h-[90vh] flex-col rounded-lg border shadow-xl ${h?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:`shrink-0 border-b p-6 ${h?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("h2",{className:`text-xl font-bold ${h?"text-slate-100":"text-slate-800"}`,children:"Resolve import conflicts"}),e.jsxs("p",{className:`mt-1 text-sm ${h?"text-slate-300":"text-slate-600"}`,children:["Comparing ",e.jsx("span",{className:"font-semibold",children:t})," (currently loaded) against"," ",e.jsx("span",{className:"font-semibold",children:a})," (the imported file)."]}),e.jsxs("p",{className:`mt-1 text-xs ${h?"text-slate-400":"text-slate-500"}`,children:[o," item",o===1?"":"s"," need a decision",n.autoMergeSummary.length?` · also merging automatically: ${n.autoMergeSummary.join(", ")}`:""]}),e.jsxs("div",{className:"mt-3 flex gap-2",children:[e.jsx("button",{type:"button",onClick:()=>C("mine"),className:`${Je} h-8 px-3 py-0 text-xs`,children:"Use all mine"}),e.jsx("button",{type:"button",onClick:()=>C("theirs"),className:`${Je} h-8 px-3 py-0 text-xs`,children:"Use all theirs"})]})]}),e.jsx("div",{className:"flex-1 space-y-6 overflow-y-auto p-6",children:n.sections.map(l=>e.jsxs("div",{children:[e.jsx("h3",{className:`mb-1 text-sm font-bold uppercase tracking-wide ${h?"text-slate-300":"text-slate-500"}`,children:l.title}),e.jsx("div",{className:`rounded-md border px-3 ${h?"border-slate-700":"border-slate-200"}`,children:l.items.map(c=>e.jsx(po,{item:c,choice:p[c.id]||"mine",onChoose:(u,b)=>m(L=>({...L,[u]:b})),myLabel:t,theirLabel:a,darkMode:h},c.id))})]},l.id))}),e.jsxs("div",{className:`flex shrink-0 justify-end gap-3 border-t p-4 ${h?"border-slate-700":"border-slate-200"}`,children:[e.jsx("button",{type:"button","data-testid":"import-conflict-cancel",onClick:i,className:Je,children:"Cancel Import"}),e.jsx("button",{type:"button","data-testid":"import-conflict-apply",onClick:()=>s(p),className:at,children:"Apply and Import"})]})]})})}function Pt(){return e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function fo(n){return n in tt}function bo({lensName:n,onClose:t,darkMode:a=!1}){if(!n||!fo(n))return null;const s=tt[n];return e.jsx("div",{id:"lens-info-modal",className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:e.jsxs("div",{className:`${a?"bg-slate-800 border-slate-700":"bg-white"} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border`,children:[e.jsxs("div",{className:`${a?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} sticky top-0 border-b p-6 flex items-center justify-between`,children:[e.jsx("h2",{className:`text-2xl font-bold ${a?"text-slate-100":"text-slate-800"}`,children:n}),e.jsx("button",{onClick:t,className:`${a?"text-slate-300 hover:text-slate-100":"text-slate-500 hover:text-slate-700"}`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsxs("div",{className:`p-6 space-y-4 ${a?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${a?"text-slate-100":"text-slate-800"}`,children:[e.jsx(Pt,{}),"Outcome"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:s.outcome})]}),e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${a?"text-slate-100":"text-slate-800"}`,children:[e.jsx(Pt,{}),"What Good Looks Like"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:s.whatGoodLooksLike})]})]})]})})}function xo({darkMode:n=!1,onNavigateToProjectDetails:t,onNavigateToGuide:a,onNavigateToDashboard:s}){const i=Yt(),[h,p]=g.useState(0);return e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${n?"text-slate-100":"text-slate-800"}`,children:"Introduction"}),e.jsx("p",{className:`mt-2 text-sm ${n?"text-slate-300":"text-slate-600"}`,children:"The five introduction steps are shown below in collapsible sections."})]}),i.map((m,o)=>e.jsxs("section",{className:`${n?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} overflow-hidden rounded-lg border shadow-sm`,children:[e.jsxs("button",{type:"button",onClick:()=>p(o),"aria-expanded":h===o,className:`flex w-full items-center justify-between gap-3 p-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-inset ${n?"hover:bg-slate-700":"hover:bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${n?"text-blue-300":"text-blue-700"}`,children:["Step ",o+1," of ",i.length]}),e.jsx("h3",{className:`mt-1 text-lg font-semibold ${n?"text-slate-100":"text-slate-900"}`,children:m.title})]}),e.jsx("span",{className:`shrink-0 text-lg font-semibold ${n?"text-slate-300":"text-slate-500"}`,"aria-hidden":"true",children:h===o?"-":"+"})]}),h===o?e.jsxs("div",{className:"px-5 pb-5",children:[m.body,o===i.length-1?e.jsxs("div",{className:"mt-5 flex flex-wrap gap-2",children:[t?e.jsx("button",{type:"button",onClick:t,className:"rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"Set up your CST Personalisation"}):null,a?e.jsx("button",{type:"button",onClick:a,className:"rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"See the 6 Key Questions"}):null,s?e.jsx("button",{type:"button",onClick:s,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Go to dashboard"}):null]}):null]}):null]},m.title))]})}const So=[{name:"NHS Blue",color:"#005eb8"},{name:"Navy",color:"#003366"},{name:"Teal",color:"#009b8a"},{name:"Purple",color:"#6c28d9"},{name:"Green",color:"#059669"},{name:"Red",color:"#dc2626"}];function vo({userSettings:n,onUserSettingsUpdate:t,onLoadExampleData:a,onResetData:s,canUseCustomTheme:i=!0,engagementGrade:h,engagementLevel:p,engagementXp:m,darkMode:o=!1}){const[C,l]=g.useState(n),[c,u]=g.useState(0),[b,L]=g.useState(null),V=g.useRef(null);g.useEffect(()=>{l(n)},[n]);const j=g.useCallback($=>{const J={...C,...$};l(J),t(J)},[C,t]),B=async $=>{var Se;const J=(Se=$.target.files)==null?void 0:Se[0];if(!J)return;const xe=await new Promise((_,ne)=>{const X=new FileReader;X.onload=()=>_(String(X.result||"")),X.onerror=()=>ne(new Error("Unable to read selected profile image.")),X.readAsDataURL(J)});j({profileImageDataUrl:xe}),u(_=>_+1)},y=()=>{j({profileImageDataUrl:void 0})},Y=$=>{j({themeColor:$})},N={grade:"Your grade shows your overall engagement trend. S = excellent, A = strong, B = solid, C = steady, D = building, E = starting out.",level:"Your level reflects cumulative XP gained through consistent engagement. Higher levels unlock more personalised options and features.",xp:"XP increases as you complete important actions, finalise months on time, and keep returning to the tool."},F=p??1,G=m??0,ge=Math.max(0,(F-1)*120),le=Math.max(0,G-ge),me=Math.max(0,Math.min(100,Math.round(le/120*100))),ee=Math.max(0,F*120-G),ue=[{key:"grade",label:"Grade",value:h||"N/A",tooltip:N.grade},{key:"level",label:"Level",value:F,tooltip:N.level},{key:"xp",label:"XP",value:G,tooltip:N.xp}];return e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-800"}`,children:"Settings"}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Use this page to manage your profile, personal preferences, and support options."}),(h||p||m!==void 0)&&e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Engagement and Progress"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"A quick view of how consistently the tool is being used over time."})]}),e.jsxs("div",{className:`${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("h4",{className:`text-sm font-semibold mb-2 ${o?"text-slate-100":"text-slate-800"}`,children:"Engagement Summary"}),e.jsx("p",{className:`mb-3 text-xs ${o?"text-slate-300":"text-slate-600"}`,children:"Tap the info icon beside each metric for a plain-language explanation."}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:ue.map($=>e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("p",{className:`text-xs ${o?"text-slate-300":"text-slate-600"}`,children:$.label}),e.jsx("button",{type:"button","aria-label":`${$.label} information`,"aria-expanded":b===$.key,onClick:()=>L(J=>J===$.key?null:$.key),className:`inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#005eb8] text-[9px] font-bold text-[#005eb8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffeb3b] ${o?"bg-[#1d334f]":"bg-[#e8f1fb]"}`,children:"i"})]}),e.jsx("p",{className:`text-lg font-bold ${o?"text-slate-100":"text-slate-800"}`,children:$.value}),b===$.key?e.jsx("div",{className:`absolute left-0 top-11 z-10 w-64 rounded-md border px-3 py-2 text-xs shadow-lg ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-200 bg-white text-slate-700"}`,children:$.tooltip}):null]},$.key))}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:"Progress to next level"}),e.jsxs("p",{className:`text-xs ${o?"text-slate-300":"text-slate-600"}`,children:[ee," XP to Level ",F+1]})]}),e.jsx("div",{className:`mt-1 h-2.5 w-full overflow-hidden rounded-full ${o?"bg-slate-700":"bg-slate-200"}`,children:e.jsx("div",{className:"h-full rounded-full bg-[#005eb8] transition-all",style:{width:`${me}%`}})})]}),e.jsx("p",{className:`mt-3 text-xs ${o?"text-slate-400":"text-slate-500"}`,children:"This reflects consistency over time, not perfection. Small, regular updates are what move this forwards."})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-5`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Your Profile"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"These details personalise your experience and reports."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Your Name"}),e.jsx("input",{id:"user-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:C.name,onChange:$=>j({name:$.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-preferences",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Preferences"}),e.jsx("textarea",{id:"user-preferences",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 h-24 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:C.preferences,onChange:$=>j({preferences:$.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-sm font-medium mb-2 ${o?"text-slate-200":"text-slate-700"}`,children:"Profile Picture"}),e.jsxs("div",{className:"flex items-start gap-4",children:[C.profileImageDataUrl?e.jsx("img",{src:C.profileImageDataUrl,alt:"Profile",className:"h-20 w-20 rounded-md border border-slate-300 object-cover"}):e.jsx("div",{className:"h-20 w-20 rounded-md border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center",children:e.jsx("span",{className:"text-xs text-slate-500",children:"No image"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{type:"button",onClick:()=>{var $;return($=V.current)==null?void 0:$.click()},className:`rounded-md px-3 py-2 text-sm font-medium transition-colors ${o?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:C.profileImageDataUrl?"Change Picture":"Upload Picture"}),C.profileImageDataUrl?e.jsx("button",{type:"button",onClick:y,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${o?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"}`,children:"Remove"}):null,e.jsx("input",{ref:V,type:"file",accept:"image/*",className:"hidden",onChange:B},c)]})]})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Appearance"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Choose the theme colour you want to use throughout the app."})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${o?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Dark mode"}),e.jsx("input",{type:"checkbox",checked:!!C.darkMode,onChange:$=>j({darkMode:$.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`text-sm ${o?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-medium",children:"Status colour profile"}),e.jsxs("select",{value:C.colorAccessibilityMode||"standard",onChange:$=>j({colorAccessibilityMode:$.target.value}),className:`w-full rounded-md border p-2 pr-10 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"standard",children:"Standard"}),e.jsx("option",{value:"color-blind-friendly",children:"Color-blind friendly"})]})]})]}),e.jsx("p",{className:`text-xs ${o?"text-slate-400":"text-slate-500"}`,children:"Color-blind friendly mode keeps BRAG labels in text and shifts status colors to higher-contrast alternatives."}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-theme-colour",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Theme Colour"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:So.map($=>e.jsxs("button",{type:"button",onClick:()=>Y($.color),className:"flex items-center gap-2 rounded-md border-2 px-3 py-2 text-sm",style:{borderColor:C.themeColor===$.color?$.color:"#e2e8f0",backgroundColor:C.themeColor===$.color?`${$.color}22`:"transparent"},children:[e.jsx("span",{className:"h-4 w-4 rounded-sm border border-slate-300",style:{backgroundColor:$.color}}),e.jsx("span",{children:$.name})]},$.color))}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{id:"user-theme-colour",type:"color",className:"h-10 w-14 rounded border border-slate-300 p-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",value:C.themeColor,onChange:$=>j({themeColor:$.target.value}),disabled:!i}),e.jsx("span",{className:`text-sm font-mono ${o?"text-slate-200":"text-slate-600"}`,children:C.themeColor}),i?null:e.jsx("span",{className:`text-xs ${o?"text-slate-400":"text-slate-500"}`,children:"Unlocks at level 3"})]})]})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Data and Support"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Load sample data, reset local data, read FAQs, or report an issue."})]}),e.jsxs("div",{className:`${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("h4",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Data Tools"}),e.jsxs("div",{className:"mt-3 flex flex-wrap gap-3",children:[e.jsx("button",{onClick:a,className:at,children:"Example Data"}),e.jsx("button",{onClick:s,className:`inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors ${ot}`,children:"Reset Data"})]}),e.jsx("p",{className:`mt-2 text-xs ${o?"text-slate-400":"text-slate-500"}`,children:"Example Data loads sample assessment content so you can explore the dashboards quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${o?"text-slate-100":"text-slate-700"}`,children:"How is my data stored?"}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Your settings and assessment state are stored locally in your browser using local storage."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${o?"text-slate-100":"text-slate-700"}`,children:"What does Example Data do?"}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"It populates the tool with the included sample JSON so you can explore dashboards and workflows quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${o?"text-slate-100":"text-slate-700"}`,children:"Can I change the theme colour later?"}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Yes. Update the theme colour at any time in User Settings and it is applied immediately."})]}),e.jsxs("div",{className:`rounded-md border p-4 ${o?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("h4",{className:`mb-2 text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Submit a Bug"}),e.jsx("p",{className:`mb-3 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Found an issue? Send details directly via email."}),e.jsx("a",{href:"mailto:andrew.fraser22@kpmg.co.uk?subject=NHS%20Digital%20Adoption%20Tool%20Bug",className:`inline-flex rounded-md px-4 py-2 text-sm font-medium transition-colors ${o?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:"Report Bug"})]})]})]})}function yo(n){return{id:`audit:${Date.now()}-${Math.random().toString(36).slice(2,8)}`,timestamp:new Date().toISOString(),actor:n.actor,eventType:n.eventType,entityType:n.entityType,entityId:n.entityId,summary:n.summary,trustName:n.trustName,projectName:n.projectName,componentId:n.componentId,lens:n.lens,reason:n.reason,before:n.before,after:n.after,source:n.source||"local",importedAt:n.importedAt}}const wo=1e4;function On(n,t=wo){return n.length<=t?n:n.slice(n.length-t)}const Dt="nhs-digital-adoption-store",Co=new Set(["pathway-1","pathway-2","pathway-3"]);function os(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function Pe(n,t){if(!os(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected object.`)}function M(n,t){if(n!==void 0&&typeof n!="string")throw new Error(`Invalid adoption assessment payload at ${t}: expected string.`)}function is(n,t){if(n!==void 0&&typeof n!="number")throw new Error(`Invalid adoption assessment payload at ${t}: expected number.`)}function it(n,t){if(n!==void 0&&!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`)}function rs(n,t){Pe(n,t),M(n.id,`${t}.id`),M(n.text,`${t}.text`),M(n.owner,`${t}.owner`),M(n.timescale,`${t}.timescale`),M(n.status,`${t}.status`),M(n.notes,`${t}.notes`),M(n.evidence,`${t}.evidence`)}function No(n,t){Pe(n,t),is(n.score,`${t}.score`),M(n.justification,`${t}.justification`),M(n.evidence,`${t}.evidence`),it(n.actions,`${t}.actions`),(n.actions||[]).forEach((a,s)=>{rs(a,`${t}.actions[${s}]`)})}function ls(n,t){Pe(n,t),Object.keys(n).forEach(a=>{const s=n[a];Pe(s,`${t}.${a}`),Object.keys(s).forEach(i=>{No(s[i],`${t}.${a}.${i}`)})})}function Eo(n,t){Pe(n,t),Object.keys(n).forEach(a=>{const s=n[a];if(!Array.isArray(s))throw new Error(`Invalid adoption assessment payload at ${t}.${a}: expected array.`);s.forEach((i,h)=>{Pe(i,`${t}.${a}[${h}]`),M(i.id,`${t}.${a}[${h}].id`),M(i.text,`${t}.${a}[${h}].text`),M(i.owner,`${t}.${a}[${h}].owner`),M(i.timescale,`${t}.${a}[${h}].timescale`),M(i.notes,`${t}.${a}[${h}].notes`),M(i.evidence,`${t}.${a}[${h}].evidence`),it(i.linkedActions,`${t}.${a}[${h}].linkedActions`),(i.linkedActions||[]).forEach((p,m)=>{Pe(p,`${t}.${a}[${h}].linkedActions[${m}]`),M(p.lens,`${t}.${a}[${h}].linkedActions[${m}].lens`),M(p.actionId,`${t}.${a}[${h}].linkedActions[${m}].actionId`)})})})}function Io(n,t){Pe(n,t),Object.keys(n).forEach(a=>{const s=n[a];Pe(s,`${t}.${a}`),["pathway-1","pathway-2","pathway-3"].forEach(i=>{const h=s[i];it(h,`${t}.${a}.${i}`),(h||[]).forEach((p,m)=>{if(typeof p!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${a}.${i}[${m}]: expected string.`)})})})}function _o(n,t){Pe(n,t),Object.keys(n).forEach(a=>{const s=n[a];if(!Array.isArray(s))throw new Error(`Invalid adoption assessment payload at ${t}.${a}: expected array.`);s.forEach((i,h)=>{if(typeof i!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${a}[${h}]: expected string.`)})})}function Ao(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((a,s)=>{Pe(a,`${t}[${s}]`),M(a.id,`${t}[${s}].id`),M(a.removedAt,`${t}[${s}].removedAt`),M(a.reason,`${t}[${s}].reason`),M(a.componentId,`${t}[${s}].componentId`),M(a.lens,`${t}[${s}].lens`),M(a.actionId,`${t}[${s}].actionId`),M(a.actionText,`${t}[${s}].actionText`),M(a.actionType,`${t}[${s}].actionType`)})}function jo(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((a,s)=>{Pe(a,`${t}[${s}]`),M(a.id,`${t}[${s}].id`),M(a.timestamp,`${t}[${s}].timestamp`),M(a.actor,`${t}[${s}].actor`),M(a.eventType,`${t}[${s}].eventType`),M(a.entityType,`${t}[${s}].entityType`),M(a.entityId,`${t}[${s}].entityId`),M(a.summary,`${t}[${s}].summary`),M(a.trustName,`${t}[${s}].trustName`),M(a.projectName,`${t}[${s}].projectName`),M(a.componentId,`${t}[${s}].componentId`),M(a.lens,`${t}[${s}].lens`),M(a.reason,`${t}[${s}].reason`),M(a.source,`${t}[${s}].source`),M(a.importedAt,`${t}[${s}].importedAt`)})}function Oo(n,t){if(Pe(n,t),M(n.trustName,`${t}.trustName`),M(n.region,`${t}.region`),M(n.trustType,`${t}.trustType`),M(n.projectName,`${t}.projectName`),M(n.leadName,`${t}.leadName`),M(n.cstId,`${t}.cstId`),n.cst!==void 0){if(Pe(n.cst,`${t}.cst`),M(n.cst.type,`${t}.cst.type`),M(n.cst.pathway,`${t}.cst.pathway`),typeof n.cst.pathway=="string"&&!Co.has(n.cst.pathway))throw new Error(`Invalid adoption assessment payload at ${t}.cst.pathway: unexpected value "${n.cst.pathway}".`);if(M(n.cst.goLiveDate,`${t}.cst.goLiveDate`),M(n.cst.fullAdoptionDate,`${t}.cst.fullAdoptionDate`),M(n.cst.benefitRealizationDate,`${t}.cst.benefitRealizationDate`),M(n.cst.toolkitChoice,`${t}.cst.toolkitChoice`),typeof n.cst.toolkitChoice=="string"&&!Zs(n.cst.toolkitChoice))throw new Error(`Invalid adoption assessment payload at ${t}.cst.toolkitChoice: unexpected value "${n.cst.toolkitChoice}".`)}}function ko(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((a,s)=>{Pe(a,`${t}[${s}]`),M(a.monthLabel,`${t}[${s}].monthLabel`),is(a.overallPercentage,`${t}[${s}].overallPercentage`),a.data!==void 0&&ls(a.data,`${t}[${s}].data`)})}function Ro(n,t){Pe(n,t),Object.keys(n).forEach(a=>{if(typeof n[a]!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${a}: expected string.`)})}function Po(n,t){Pe(n,t),Object.keys(n).forEach(a=>{const s=n[a];if(!Array.isArray(s))throw new Error(`Invalid adoption assessment payload at ${t}.${a}: expected array.`);s.forEach((i,h)=>{rs(i,`${t}.${a}[${h}]`)})})}function En(n){if(!os(n))throw new Error("Invalid adoption assessment payload at root: expected object.");return M(n.schemaVersion,"schemaVersion"),M(n.exportedAt,"exportedAt"),n.orgProfile!==void 0&&Oo(n.orgProfile,"orgProfile"),n.currentDraft!==void 0&&ls(n.currentDraft,"currentDraft"),n.objectives!==void 0&&Eo(n.objectives,"objectives"),n.auditLog!==void 0&&jo(n.auditLog,"auditLog"),n.suppressedAutoActions!==void 0&&_o(n.suppressedAutoActions,"suppressedAutoActions"),n.actionAuditLog!==void 0&&Ao(n.actionAuditLog,"actionAuditLog"),n.history!==void 0&&ko(n.history,"history"),n.phaseOverrides!==void 0&&Ro(n.phaseOverrides,"phaseOverrides"),n.pathwayChecks!==void 0&&Io(n.pathwayChecks,"pathwayChecks"),n.componentActions!==void 0&&Po(n.componentActions,"componentActions"),n}function Do(n=new Date){return n.toLocaleString("en-GB",{month:"short",year:"numeric"})}function $t(n){return{schemaVersion:"4.0",exportedAt:new Date().toISOString(),orgProfile:{...n.orgProfile},currentDraft:dn(n.currentDraft),objectives:cs(n.objectives),auditLog:Fo(n.auditLog),suppressedAutoActions:ms(n.suppressedAutoActions),history:n.history.map(t=>({...t,data:dn(t.data)})),phaseOverrides:{...n.phaseOverrides},pathwayChecks:ds(n.pathwayChecks)}}function $o(n){const t=n.componentActions;if(t)return Object.keys(t).reduce((a,s)=>(a[s]=(t[s]||[]).map(i=>({id:String(i.id??`${Date.now()}-${Math.random().toString(36).slice(2,8)}`),text:String(i.text||""),owner:String(i.owner||""),timescale:String(i.timescale||""),notes:String(i.notes||""),evidence:String(i.evidence||""),linkedActions:[]})),a),{})}function To(n,t){return n!=null&&n.length?n.map(a=>({id:`legacy-${a.id}`,timestamp:a.removedAt,actor:"Unknown user",eventType:"action-removed",entityType:"action",entityId:a.actionId,summary:`Removed action: ${a.actionText||a.actionId}`,trustName:t==null?void 0:t.trustName,projectName:t==null?void 0:t.projectName,componentId:a.componentId,lens:a.lens,reason:a.reason,before:{actionText:a.actionText,actionType:a.actionType},source:"local"})):[]}function Lo(n,t,a){const s=To(t,a),i=(n||[]).map(p=>({...p})),h=[...s,...i].sort((p,m)=>{const o=Date.parse(p.timestamp||""),C=Date.parse(m.timestamp||"");return!Number.isNaN(o)&&!Number.isNaN(C)&&o!==C?o-C:(p.id||"").localeCompare(m.id||"")});return On(h)}function Bo(n,t){return n.map(a=>({...a,source:"imported",importedAt:t}))}function rt(n){var s,i;if(!n)return{};const t=Qn(n.orgProfile);(i=(s=n.orgProfile)==null?void 0:s.cst)!=null&&i.pathway||(t.cst.pathway="pathway-1");const a=n.objectives||$o(n);return{...n,schemaVersion:n.schemaVersion||"2.0",orgProfile:t,objectives:cs(a),auditLog:Lo(n.auditLog,n.actionAuditLog,t),suppressedAutoActions:ms(n.suppressedAutoActions),pathwayChecks:ds(n.pathwayChecks)}}function Tt(n,t){const a=En(n),s=rt(a),i=!!(a.objectives||a.componentActions),h=new Date().toISOString(),p=Bo(s.auditLog||[],h),m=On([...t.auditLog||[],...p]);return _n({...t,orgProfile:s.orgProfile||t.orgProfile,currentDraft:s.currentDraft?dn(s.currentDraft):dn(t.currentDraft),objectives:i?s.objectives:t.objectives,auditLog:m,suppressedAutoActions:s.suppressedAutoActions||t.suppressedAutoActions,history:(s.history||t.history).map(o=>({...o,data:dn(o.data)})),phaseOverrides:s.phaseOverrides||t.phaseOverrides,pathwayChecks:s.pathwayChecks||t.pathwayChecks})}function Lt(n,t,a=new Date){return{monthLabel:Do(a),overallPercentage:t,data:dn(n)}}function dn(n){const t=Zn(n);return Object.keys(t).forEach(a=>{Object.keys(t[a]).forEach(s=>{t[a][s].actions=t[a][s].actions.map(i=>({...i,status:Le(i.status),notes:i.notes||"",evidence:i.evidence||"",linkedTargets:(i.linkedTargets||[]).map(h=>({componentId:h.componentId,lens:h.lens}))}))})}),t}function cs(n){const t=et(n||{});return Object.keys(t).forEach(a=>{t[a]=t[a].map(s=>({...s,owner:s.owner||"",timescale:s.timescale||"",notes:s.notes||"",evidence:s.evidence||"",linkedActions:(s.linkedActions||[]).map(i=>({lens:i.lens,actionId:i.actionId}))}))}),t}function ds(n){return n?Object.keys(n).reduce((t,a)=>{const s=n[a]||{};return t[a]={"pathway-1":[...s["pathway-1"]||[]],"pathway-2":[...s["pathway-2"]||[]],"pathway-3":[...s["pathway-3"]||[]]},t},{}):{}}function ms(n){return n?Object.keys(n).reduce((t,a)=>(t[a]=[...n[a]||[]],t),{}):{}}function Fo(n){return n?n.map(t=>({...t})):[]}function Go(n,t){const a=(n||[]).map(i=>`${i.componentId}:${i.lens}`).sort(),s=(t||[]).map(i=>`${i.componentId}:${i.lens}`).sort();return a.length===s.length&&a.every((i,h)=>i===s[h])}function Uo(n,t){return n.text===t.text&&(n.actionType||"")===(t.actionType||"")&&n.owner===t.owner&&n.timescale===t.timescale&&n.status===t.status&&(n.phase??null)===(t.phase??null)&&(n.guidanceUrl||"")===(t.guidanceUrl||"")&&(n.startDate||"")===(t.startDate||"")&&(n.dueDate||"")===(t.dueDate||"")&&(n.notes||"")===(t.notes||"")&&(n.evidence||"")===(t.evidence||"")&&(n.readinessScore??null)===(t.readinessScore??null)&&Go(n.linkedTargets,t.linkedTargets)}function Mo(n){return`${n.text||"Untitled action"} — ${n.status}, owner: ${n.owner||"Unassigned"}`}function Vo(n,t){const a=n.map(i=>`${i.lens}:${i.actionId}`).sort(),s=t.map(i=>`${i.lens}:${i.actionId}`).sort();return a.length===s.length&&a.every((i,h)=>i===s[h])}function Ho(n,t){return n.text===t.text&&n.owner===t.owner&&n.timescale===t.timescale&&(n.notes||"")===(t.notes||"")&&(n.evidence||"")===(t.evidence||"")&&Vo(n.linkedActions,t.linkedActions)}function Wo(n){return`${n.text||"Untitled objective"} — owner: ${n.owner||"Unassigned"}`}function us(n,t){return n.name===t.name&&n.role===t.role}function jn(n){return n.role?`${n.name||"Unnamed"} — ${n.role}`:n.name||"Unnamed"}function qo(n,t){return n.score===t.score&&n.justification===t.justification&&n.evidence===t.evidence}function Bt(n){const t=`Score ${n.score}`;return n.justification?`${t} — ${n.justification}`:t}function kn(n,t,a,s,i,h){const p=new Map(t.map(l=>[l.id,l])),m=new Set(n.map(l=>l.id)),o=[];n.forEach(l=>{const c=p.get(l.id);c&&!a(l,c)&&o.push({id:`${s}:${l.id}`,label:i(l),mineSummary:h(l),theirsSummary:h(c)})});const C=t.filter(l=>!m.has(l.id)).length;return{conflicts:o,autoMergedCount:C,merge:l=>{const c=n.map(u=>{const b=p.get(u.id);return b&&l[`${s}:${u.id}`]==="theirs"?b:u});return t.forEach(u=>{m.has(u.id)||c.push(u)}),c}}}const Ft=[{key:"trustName",label:"Trust name"},{key:"region",label:"Region"},{key:"trustType",label:"Trust type"},{key:"projectName",label:"Programme / project name"},{key:"leadName",label:"Lead submitter"}],Gt=[{key:"type",label:"CST type"},{key:"pathway",label:"Pathway"},{key:"goLiveDate",label:"Go live date"},{key:"fullAdoptionDate",label:"Full adoption date"},{key:"benefitRealizationDate",label:"Benefit realisation date"},{key:"toolkitChoice",label:"Default toolkit"}];function gs(n,t){const a=[];return Ft.forEach(({key:s,label:i})=>{const h=String(n[s]??""),p=String(t[s]??"");h!==p&&a.push({id:`profile:${String(s)}`,label:i,mineSummary:h||"(blank)",theirsSummary:p||"(blank)"})}),Gt.forEach(({key:s,label:i})=>{const h=String(n.cst[s]??""),p=String(t.cst[s]??"");h!==p&&a.push({id:`cst:${String(s)}`,label:i,mineSummary:h||"(blank)",theirsSummary:p||"(blank)"})}),{conflicts:a,autoMergedCount:0,merge:s=>{const i={...n};Ft.forEach(({key:p})=>{s[`profile:${String(p)}`]==="theirs"&&(i[p]=t[p])});const h={...n.cst};return Gt.forEach(({key:p})=>{s[`cst:${String(p)}`]==="theirs"&&(h[p]=t.cst[p])}),{...i,cst:h}}}}function ps(n,t){const a=new Set([...Object.keys(n),...Object.keys(t)]),s=[],i=[];let h=0;const p=new Map,m=new Map;return a.forEach(o=>{const C=n[o]||{},l=t[o]||{},c=new Set([...Object.keys(C),...Object.keys(l)]);m.set(o,c),c.forEach(u=>{const b=C[u],L=l[u],V=`${o}:${u}`;b&&L&&!qo(b,L)&&s.push({id:`entry:${V}`,label:`${o} / ${u}`,mineSummary:Bt(b),theirsSummary:Bt(L)});const j=kn((b==null?void 0:b.actions)||[],(L==null?void 0:L.actions)||[],Uo,`action:${V}`,B=>`${o} / ${u} — ${B.text||"Untitled action"}`,Mo);i.push(...j.conflicts),h+=j.autoMergedCount,p.set(V,j)})}),{entryConflicts:s,actionConflicts:i,autoMergedActionCount:h,merge:o=>{const C={};return a.forEach(l=>{const c=n[l]||{},u=t[l]||{},b={};(m.get(l)||new Set).forEach(L=>{var N;const V=c[L],j=u[L],B=`${l}:${L}`;let y=V?{score:V.score,justification:V.justification,evidence:V.evidence}:{score:j.score,justification:j.justification,evidence:j.evidence};V&&j&&o[`entry:${B}`]==="theirs"&&(y={score:j.score,justification:j.justification,evidence:j.evidence});const Y=((N=p.get(B))==null?void 0:N.merge(o))||[];b[L]={...y,actions:Y}}),C[l]=b}),C}}}function hs(n,t){const a=new Set([...Object.keys(n),...Object.keys(t)]),s=[];let i=0;const h=new Map;return a.forEach(p=>{const m=kn(n[p]||[],t[p]||[],Ho,`objective:${p}`,o=>`${p} — ${o.text||"Untitled objective"}`,Wo);s.push(...m.conflicts),i+=m.autoMergedCount,h.set(p,m)}),{conflicts:s,autoMergedCount:i,merge:p=>{const m={};return a.forEach(o=>{var C;m[o]=((C=h.get(o))==null?void 0:C.merge(p))||[]}),m}}}function fs(n,t){const a=new Set([...Object.keys(n),...Object.keys(t)]),s=[];let i=0;return a.forEach(h=>{const p=n[h],m=t[h];if(p===void 0||m===void 0){p===void 0&&m!==void 0&&(i+=1);return}p!==m&&s.push({id:`phase:${h}`,label:`Phase focus override — ${h}`,mineSummary:p,theirsSummary:m})}),{conflicts:s,autoMergedCount:i,merge:h=>{const p={...n};return a.forEach(m=>{const o=t[m];o!==void 0&&(n[m]===void 0||h[`phase:${m}`]==="theirs")&&(p[m]=o)}),p}}}function Ko(n,t){const a=new Set([...Object.keys(n),...Object.keys(t)]),s={};return a.forEach(i=>{const h=n[i]||{},p=t[i]||{},m=new Set([...Object.keys(h),...Object.keys(p)]),o={};m.forEach(C=>{const l=C;o[l]=Array.from(new Set([...h[l]||[],...p[l]||[]]))}),s[i]=o}),s}function zo(n,t){const a=new Set([...Object.keys(n),...Object.keys(t)]),s={};return a.forEach(i=>{s[i]=Array.from(new Set([...n[i]||[],...t[i]||[]]))}),s}function Yo(n,t){const a=new Map;return t.forEach(s=>a.set(s.monthLabel,s)),n.forEach(s=>a.set(s.monthLabel,s)),Array.from(a.values())}function bs(n){const t=rt(n);return{theirsProfile:t.orgProfile||Qn(),theirsDraft:t.currentDraft||{},theirsObjectives:t.objectives||{},theirsPhaseOverrides:t.phaseOverrides||{},theirsPathwayChecks:t.pathwayChecks||{},theirsSuppressedAutoActions:t.suppressedAutoActions||{},theirsAuditLog:t.auditLog||[],theirsHistory:(t.history||[]).map(a=>({...a,data:Zn(a.data)}))}}function Jo(n,t){const{theirsProfile:a,theirsDraft:s,theirsObjectives:i,theirsPhaseOverrides:h}=bs(t),p=gs(n.orgProfile,a),m=kn(n.orgProfile.teamMembers||[],a.teamMembers||[],us,"team",jn,jn),o=ps(n.currentDraft,s),C=hs(n.objectives,i),l=fs(n.phaseOverrides,h),c=[{id:"profile",title:"Organisation profile & CST settings",items:p.conflicts},{id:"team",title:"Team members",items:m.conflicts},{id:"assessments",title:"Assessments",items:o.entryConflicts},{id:"actions",title:"Lens actions",items:o.actionConflicts},{id:"objectives",title:"Objectives",items:C.conflicts},{id:"phaseFocus",title:"Phase focus overrides",items:l.conflicts}].filter(b=>b.items.length>0),u=[];return m.autoMergedCount&&u.push(`${m.autoMergedCount} new team member(s)`),o.autoMergedActionCount&&u.push(`${o.autoMergedActionCount} new action(s)`),C.autoMergedCount&&u.push(`${C.autoMergedCount} new objective(s)`),l.autoMergedCount&&u.push(`${l.autoMergedCount} new phase focus override(s)`),{sections:c,autoMergeSummary:u,hasConflicts:c.length>0}}function Ut(n,t,a){const{theirsProfile:s,theirsDraft:i,theirsObjectives:h,theirsPhaseOverrides:p,theirsPathwayChecks:m,theirsSuppressedAutoActions:o,theirsAuditLog:C,theirsHistory:l}=bs(t),c=gs(n.orgProfile,s),u=kn(n.orgProfile.teamMembers||[],s.teamMembers||[],us,"team",jn,jn),b=ps(n.currentDraft,i),L=hs(n.objectives,h),V=fs(n.phaseOverrides,p),j={...n.orgProfile,...c.merge(a),teamMembers:u.merge(a)},B=new Date().toISOString(),y=C.map(N=>({...N,source:"imported",importedAt:B})),Y=On([...n.auditLog||[],...y]);return _n({...n,orgProfile:j,currentDraft:Zn(b.merge(a)),objectives:et(L.merge(a)),auditLog:Y,suppressedAutoActions:zo(n.suppressedAutoActions,o),history:Yo(n.history,l),phaseOverrides:V.merge(a),pathwayChecks:Ko(n.pathwayChecks,m)})}const Xo=`{
  "component": { "id": "BENEFITS", "name": "Benefits" },
  "outcomes": [
    {
      "id": "BEN_O1",
      "name": "Benefits and disbenefits have been identified and defined",
      "description": ""
    },
    { "id": "BEN_O2", "name": "Benefits are actively managed and monitored", "description": "" },
    { "id": "BEN_O3", "name": "Benefits are realised, evidenced and sustained", "description": "" }
  ],
  "actions": [
    {
      "id": "BEN_001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Recognise the importance of benefits realisation as part of successful change delivery.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 0
    },
    {
      "id": "BEN_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Begin discussions with sponsors and leaders about the expected value of the change.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 0
    },
    {
      "id": "BEN_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "Engage key stakeholders to explore potential organisational and stakeholder benefits.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 0
    },
    {
      "id": "BEN_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Capture initial ideas regarding expected benefits and possible disbenefits.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 0
    },
    {
      "id": "BEN_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify stakeholder groups likely to experience value from the change.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 0
    },
    {
      "id": "BEN_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Gain initial leadership support for benefits identification and management activities.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 0
    },
    {
      "id": "BEN_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Review available evidence that may indicate potential benefits or value opportunities.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 0
    },
    {
      "id": "BEN_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Communication",
      "category": "Communication",
      "action": "Begin raising awareness that benefits will need to be defined, measured and realised.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 0
    },
    {
      "id": "BEN_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "Facilitate structured benefits workshops with sponsors, leaders and subject matter experts.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "BEN_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Document and categorise expected organisational, operational, financial and user benefits.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "BEN_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Document likely disbenefits, trade-offs and unintended consequences associated with the change.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "BEN_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop measurable benefit statements and draft success criteria for priority benefits.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "BEN_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Identify proposed benefit owners and establish accountability for benefit realisation.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "BEN_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Validate with stakeholders which benefits are most important and meaningful to them.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "BEN_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Develop stakeholder-specific ‘what’s in it for me’ benefit statements.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "BEN_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Testing & Validation",
      "action": "Review and validate draft benefits with stakeholders and sponsors.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "BEN_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess differences in expected value across stakeholder groups and business areas.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "BEN_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Design",
      "action": "Refine benefit definitions, ownership and measures using stakeholder feedback.",
      "outcomeIds": ["BEN_O1"],
      "readinessScore": 1
    },
    {
      "id": "BEN_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Approve and baseline the benefits realisation approach.",
      "outcomeIds": ["BEN_O1", "BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "BEN_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Define measures, KPIs and reporting arrangements for each benefit.",
      "outcomeIds": ["BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "BEN_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Establish baseline measures against which benefits can be assessed.",
      "outcomeIds": ["BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "BEN_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a benefits realisation plan including ownership, timelines and reporting.",
      "outcomeIds": ["BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "BEN_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Integrate benefits tracking into governance and programme reporting.",
      "outcomeIds": ["BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "BEN_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate expected benefits and success measures to stakeholders.",
      "outcomeIds": ["BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "BEN_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather stakeholder feedback on benefit assumptions and expectations.",
      "outcomeIds": ["BEN_O1", "BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "BEN_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Testing & Validation",
      "action": "Validate that benefit measures are meaningful and understood by stakeholders.",
      "outcomeIds": ["BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "BEN_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Use stakeholder-facing benefit messages to build support and momentum.",
      "outcomeIds": ["BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "BEN_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Monitor stakeholder confidence in the expected benefits.",
      "outcomeIds": ["BEN_O2"],
      "readinessScore": 2
    },
    {
      "id": "BEN_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Track benefit performance against agreed measures and targets.",
      "outcomeIds": ["BEN_O2", "BEN_O3"],
      "readinessScore": 3
    },
    {
      "id": "BEN_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Review realised and unrealised benefits through governance forums.",
      "outcomeIds": ["BEN_O2", "BEN_O3"],
      "readinessScore": 3
    },
    {
      "id": "BEN_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Risk Management",
      "action": "Identify risks to benefits realisation and agree mitigation actions.",
      "outcomeIds": ["BEN_O2"],
      "readinessScore": 3
    },
    {
      "id": "BEN_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Assess whether expected benefits are being achieved and why.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 3
    },
    {
      "id": "BEN_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "Manage dependencies that affect benefit delivery.",
      "outcomeIds": ["BEN_O2", "BEN_O3"],
      "readinessScore": 3
    },
    {
      "id": "BEN_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Share evidence of realised benefits with stakeholders.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 3
    },
    {
      "id": "BEN_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use stakeholder insight to understand barriers to achieving benefits.",
      "outcomeIds": ["BEN_O2", "BEN_O3"],
      "readinessScore": 3
    },
    {
      "id": "BEN_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Monitor stakeholder perceptions of realised value and improvement.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 3
    },
    {
      "id": "BEN_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Use benefit stories and examples to reinforce adoption.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 3
    },
    {
      "id": "BEN_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise teams and individuals contributing to benefit realisation.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 3
    },
    {
      "id": "BEN_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Continuously monitor long-term benefit performance.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    },
    {
      "id": "BEN_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Embed benefits management into normal business and performance management processes.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    },
    {
      "id": "BEN_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Refine benefit measures and approaches using organisational learning.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    },
    {
      "id": "BEN_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Use benefit evidence to inform future investment and change decisions.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    },
    {
      "id": "BEN_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "Maintain management of long-term dependencies affecting realised benefits.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    },
    {
      "id": "BEN_044",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Regularly communicate realised benefits and improvement outcomes.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    },
    {
      "id": "BEN_045",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use stakeholder feedback to identify opportunities for further value realisation.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    },
    {
      "id": "BEN_046",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Measure ongoing stakeholder perception of value delivered by the change.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    },
    {
      "id": "BEN_047",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Use success stories and achievements to sustain belief in the value of the change.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    },
    {
      "id": "BEN_048",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Promote a culture of continuous benefits realisation and improvement.",
      "outcomeIds": ["BEN_O3"],
      "readinessScore": 4
    }
  ]
}
`,xs={componentId:"benefits",actionPrefix:"benefits-action",outcomePrefix:"benefits:outcome",fallbackOutcomes:[{id:"benefits:outcome:o1",text:"Benefits and disbenefits have been identified and defined"},{id:"benefits:outcome:o2",text:"Benefits are actively managed and monitored"},{id:"benefits:outcome:o3",text:"Benefits are realised, evidenced and sustained"}],lensAliases:{"Strategic Direction and Leadership":"Planning and Risk","People Experience and Culture":"Process and Sustainment"}},Qo=$e(Xo,xs);function Zo(n){return De(n,xs,Qo)}const ei=`{
  "component": { "id": "CAPABILITY_CONFIDENCE", "name": "Capability & Confidence" },
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
      "outcomeIds": ["CC_O1"],
      "readinessScore": 0
    },
    {
      "id": "CC_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "Begin discussions with leaders, managers and stakeholders about future capability requirements.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 0
    },
    {
      "id": "CC_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Identify areas where new skills, behaviours or ways of working may be required.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 0
    },
    {
      "id": "CC_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Explore stakeholder perceptions regarding confidence, preparedness and future capability needs.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 0
    },
    {
      "id": "CC_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Identify potential capability and confidence challenges that may affect successful adoption.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 0
    },
    {
      "id": "CC_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Gain initial agreement that capability development and confidence building will be required as part of the change.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 0
    },
    {
      "id": "CC_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Communication",
      "category": "Communication",
      "action": "Begin raising awareness of future capability expectations and support requirements.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 0
    },
    {
      "id": "CC_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous changes relating to capability gaps and confidence challenges.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 0
    },
    {
      "id": "CC_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Define and document the future-state capabilities required for successful performance.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 1
    },
    {
      "id": "CC_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Conduct structured capability analysis to identify gaps between current and future-state requirements.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 1
    },
    {
      "id": "CC_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Assess current confidence levels across impacted stakeholder groups.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 1
    },
    {
      "id": "CC_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Assess factors that may increase or reduce stakeholder confidence during the transition.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 1
    },
    {
      "id": "CC_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Assess capability and confidence risks that could affect successful adoption and performance.",
      "outcomeIds": ["CC_O1"],
      "readinessScore": 1
    },
    {
      "id": "CC_014",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "Develop capability-building interventions to address identified capability gaps.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "CC_015",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Provide opportunities for practical application of learning in real or simulated environments.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "CC_016",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Provide coaching, mentoring and peer support for individuals applying new skills.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "CC_017",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate expectations regarding performance, proficiency and future-state behaviours.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "CC_018",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Establish measures to assess capability development and confidence growth.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "CC_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather feedback about confidence levels and practical challenges experienced by users.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "CC_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Testing & Validation",
      "action": "Assess practical capability through observation, walkthroughs or structured validation activities.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "CC_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Target additional support towards individuals or groups with lower confidence levels.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "CC_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Monitor capability and confidence risks during implementation.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    },
    {
      "id": "CC_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Governance",
      "category": "Governance",
      "action": "Review capability and confidence measures through programme governance.",
      "outcomeIds": ["CC_O2"],
      "readinessScore": 2
    }
  ]
}
`,Ss={componentId:"capability",actionPrefix:"capability-action",outcomePrefix:"capability:outcome",fallbackOutcomes:[{id:"capability:outcome:o1",text:"Required capability levels have been defined and assessed"},{id:"capability:outcome:o2",text:"People can perform confidently in the future state"},{id:"capability:outcome:o3",text:"Capability and confidence are sustained and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Communication:"People Experience and Culture","Testing and Validation":"Skills and Behaviour"}},ni=$e(ei,Ss);function ti(n){return De(n,Ss,ni)}const si=`{
  "component": { "id": "CASE_FOR_CHANGE", "name": "Case for Change" },
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
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 0
    },
    {
      "id": "CFC_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "Begin discussions with leaders and stakeholders regarding the problems, opportunities or drivers prompting change.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 0
    },
    {
      "id": "CFC_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Identify high-level issues, challenges, opportunities or risks that may justify change.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 0
    },
    {
      "id": "CFC_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Explore stakeholder perceptions of current challenges, opportunities and improvement needs.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 0
    },
    {
      "id": "CFC_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Identify strategic, operational, regulatory or service drivers that may support the need for change.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 0
    },
    {
      "id": "CFC_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Gain initial sponsor agreement that a case for change should be developed.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 0
    },
    {
      "id": "CFC_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Communication",
      "category": "Communication",
      "action": "Begin raising awareness that change may be required and that evidence is being gathered.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 0
    },
    {
      "id": "CFC_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Review previous organisational experience, lessons learned and available evidence relevant to the proposed change.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 0
    },
    {
      "id": "CFC_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Define and document the problem, opportunity, risk or requirement driving the need for change.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 1
    },
    {
      "id": "CFC_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Gather quantitative and qualitative evidence demonstrating the impact of the current situation.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 1
    },
    {
      "id": "CFC_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Assess alignment between the proposed change and organisational objectives, strategies and priorities.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 1
    },
    {
      "id": "CFC_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a structured case for change narrative explaining why change is required and why action is needed now.",
      "outcomeIds": ["CFC_O1", "CFC_O2"],
      "readinessScore": 1
    },
    {
      "id": "CFC_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Identify and secure sponsors and senior leaders who will champion the case for change.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 1
    },
    {
      "id": "CFC_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Conduct structured engagement activities to understand stakeholder experiences of current challenges and opportunities.",
      "outcomeIds": ["CFC_O1"],
      "readinessScore": 1
    },
    {
      "id": "CFC_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Testing & Validation",
      "category": "Testing & Validation",
      "action": "Validate whether stakeholders recognise, understand and agree with the need for change.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 1
    },
    {
      "id": "CFC_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Gather local examples and supporting evidence that illustrate the impact of maintaining the current state.",
      "outcomeIds": ["CFC_O1", "CFC_O2"],
      "readinessScore": 1
    },
    {
      "id": "CFC_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess misconceptions, assumptions and conflicting perceptions relating to the need for change.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 1
    },
    {
      "id": "CFC_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Design",
      "action": "Refine and strengthen the case for change using evidence, stakeholder insight and feedback.",
      "outcomeIds": ["CFC_O1", "CFC_O2"],
      "readinessScore": 1
    },
    {
      "id": "CFC_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Obtain formal leadership and governance endorsement of the case for change.",
      "outcomeIds": ["CFC_O1", "CFC_O3"],
      "readinessScore": 2
    },
    {
      "id": "CFC_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Develop clear and consistent messaging explaining why change is necessary.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 2
    },
    {
      "id": "CFC_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Embed the case for change in programme governance, reporting and decision-making processes.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 2
    },
    {
      "id": "CFC_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Establish baseline measures that evidence the current problem or opportunity.",
      "outcomeIds": ["CFC_O1", "CFC_O3"],
      "readinessScore": 2
    },
    {
      "id": "CFC_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Define how evidence supporting the case for change will be reviewed and maintained throughout the change lifecycle.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 2
    },
    {
      "id": "CFC_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate the case for change through engagement and communication activities.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 2
    },
    {
      "id": "CFC_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Testing & Validation",
      "action": "Validate stakeholder understanding of the rationale for change.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 2
    },
    {
      "id": "CFC_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Address concerns, challenges and areas of misunderstanding relating to the need for change.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 2
    },
    {
      "id": "CFC_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Use local examples and evidence to illustrate the importance of the change.",
      "outcomeIds": ["CFC_O1", "CFC_O2"],
      "readinessScore": 2
    },
    {
      "id": "CFC_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Monitor stakeholder sentiment regarding the case for change.",
      "outcomeIds": ["CFC_O2", "CFC_O3"],
      "readinessScore": 2
    },
    {
      "id": "CFC_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Ensure leaders consistently reinforce the rationale for change.",
      "outcomeIds": ["CFC_O2", "CFC_O3"],
      "readinessScore": 3
    },
    {
      "id": "CFC_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Use governance forums to review whether the original drivers for change remain valid.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 3
    },
    {
      "id": "CFC_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Use organisational performance, service and outcome measures to support the case for change.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 3
    },
    {
      "id": "CFC_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Use the case for change to inform programme decisions, priorities and resource allocation.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 3
    },
    {
      "id": "CFC_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Risk Management",
      "action": "Review assumptions, emerging risks and external influences that may affect the credibility of the case for change.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 3
    },
    {
      "id": "CFC_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Share evidence and examples demonstrating the impact of addressing the original problem or opportunity.",
      "outcomeIds": ["CFC_O2", "CFC_O3"],
      "readinessScore": 3
    },
    {
      "id": "CFC_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Evaluate stakeholder acceptance of the ongoing need for change.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 3
    },
    {
      "id": "CFC_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Target communication and engagement activity where understanding remains low.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 3
    },
    {
      "id": "CFC_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Design",
      "action": "Refine case for change messaging using stakeholder feedback and insight.",
      "outcomeIds": ["CFC_O2", "CFC_O3"],
      "readinessScore": 3
    },
    {
      "id": "CFC_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Ensure change champions can confidently explain and reinforce the case for change.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 3
    },
    {
      "id": "CFC_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Review the case for change periodically against organisational priorities and external drivers.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 4
    },
    {
      "id": "CFC_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Use benefits and outcomes data to validate the continued relevance of the case for change.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 4
    },
    {
      "id": "CFC_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Embed the rationale for change into organisational planning and continuous improvement activities.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 4
    },
    {
      "id": "CFC_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Use organisational learning and evidence to evolve the case for change where appropriate.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 4
    },
    {
      "id": "CFC_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Ensure leaders continue to communicate and reinforce the rationale for change during routine business activity.",
      "outcomeIds": ["CFC_O2", "CFC_O3"],
      "readinessScore": 4
    },
    {
      "id": "CFC_044",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Capture and share success stories that validate the original need for change.",
      "outcomeIds": ["CFC_O2", "CFC_O3"],
      "readinessScore": 4
    },
    {
      "id": "CFC_045",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Measure stakeholder belief that the change remains necessary and valuable.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 4
    },
    {
      "id": "CFC_046",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Refresh messaging to reflect emerging evidence, learning and organisational priorities.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 4
    },
    {
      "id": "CFC_047",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Maintain ongoing engagement activities to sustain awareness of the reasons for change.",
      "outcomeIds": ["CFC_O2"],
      "readinessScore": 4
    },
    {
      "id": "CFC_048",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Encourage teams to identify opportunities to build on the original case for change.",
      "outcomeIds": ["CFC_O3"],
      "readinessScore": 4
    }
  ]
}
`,vs={componentId:"case_for_change",actionPrefix:"case-for-change-action",outcomePrefix:"case-for-change:outcome",fallbackOutcomes:[{id:"case-for-change:outcome:o1",text:"The need for change has been clearly defined and evidenced"},{id:"case-for-change:outcome:o2",text:"The case for change is understood and accepted"},{id:"case-for-change:outcome:o3",text:"The case for change remains credible and relevant"}]},ai=$e(si,vs);function oi(n){return De(n,vs,ai)}const ii=`{
  "component": { "id": "CHANGE_ADOPTION", "name": "Change Adoption" },
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
      "lens": "Planning & Measurement",
      "category": "Analysis & Insight",
      "action": "Recognise that successful implementation requires sustained adoption of new ways of working.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 0
    },
    {
      "id": "CA_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Measurement",
      "category": "Engagement",
      "action": "Begin discussions with leaders and stakeholders about what successful adoption may look like.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 0
    },
    {
      "id": "CA_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Identify high-level behaviours and ways of working expected to change.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 0
    },
    {
      "id": "CA_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Explore stakeholder perceptions of potential adoption barriers and enablers.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 0
    },
    {
      "id": "CA_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Measurement",
      "category": "Analysis & Insight",
      "action": "Identify groups likely to be critical to successful adoption.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 0
    },
    {
      "id": "CA_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Governance",
      "category": "Governance",
      "action": "Gain initial agreement that adoption outcomes will need to be monitored and managed.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 0
    },
    {
      "id": "CA_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Communication",
      "category": "Communication",
      "action": "Begin communicating the importance of adoption and behavioural change in achieving change outcomes.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 0
    },
    {
      "id": "CA_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous changes relating to adoption challenges and successes.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 0
    },
    {
      "id": "CA_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Design",
      "action": "Define and document what successful adoption looks like for the change.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "CA_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Measurement & Evaluation",
      "action": "Develop adoption indicators, measures, targets and success criteria.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "CA_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Analysis & Insight",
      "action": "Define behaviours, activities and practices that will indicate successful adoption.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "CA_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Measurement & Evaluation",
      "action": "Establish baseline adoption measures for future comparison.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "CA_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Governance",
      "action": "Define ownership, accountabilities and reporting arrangements for adoption outcomes.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "CA_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Validate adoption barriers and enablers with impacted stakeholder groups.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "CA_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess stakeholder groups requiring targeted adoption support.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "CA_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate expected adoption outcomes, behaviours and performance expectations.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "CA_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Dependency Management",
      "action": "Assess dependencies between adoption, capability, learning, readiness and implementation activities.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "CA_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Design",
      "action": "Develop a structured adoption monitoring and support approach.",
      "outcomeIds": ["CA_O1"],
      "readinessScore": 1
    },
    {
      "id": "CA_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Measurement",
      "category": "Measurement & Evaluation",
      "action": "Implement mechanisms for monitoring adoption levels and behavioural change.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "CA_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Measurement",
      "category": "Measurement & Evaluation",
      "action": "Collect adoption data, usage information, feedback and performance insight.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "CA_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Measurement",
      "category": "Analysis & Insight",
      "action": "Analyse adoption trends across different stakeholder groups and operational areas.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "CA_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Measurement",
      "category": "Governance",
      "action": "Review adoption performance through governance and reporting structures.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "CA_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Measurement",
      "category": "Risk Management",
      "action": "Identify adoption risks and issues arising from low or inconsistent adoption levels.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "CA_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather feedback from high and low adopters to understand adoption drivers and barriers.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "CA_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Training & Learning",
      "action": "Provide targeted support and development for groups experiencing adoption challenges.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "CA_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate adoption progress, successes and areas of focus.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "CA_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use local networks, champions and managers to support adoption activity.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "CA_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Measurement",
      "category": "Design",
      "action": "Refine adoption interventions using feedback and monitoring information.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 2
    },
    {
      "id": "CA_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Measurement & Evaluation",
      "action": "Track adoption performance against targets, expectations and baseline measures.",
      "outcomeIds": ["CA_O2", "CA_O3"],
      "readinessScore": 3
    },
    {
      "id": "CA_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Analysis & Insight",
      "action": "Identify areas of strong adoption and areas requiring additional intervention.",
      "outcomeIds": ["CA_O2", "CA_O3"],
      "readinessScore": 3
    },
    {
      "id": "CA_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Conduct targeted engagement with low-adoption groups to understand remaining barriers.",
      "outcomeIds": ["CA_O2"],
      "readinessScore": 3
    },
    {
      "id": "CA_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise and promote examples of successful adoption and effective practice.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 3
    },
    {
      "id": "CA_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Dependency Management",
      "action": "Coordinate adoption activity with reinforcement, capability and benefits realisation activities.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 3
    },
    {
      "id": "CA_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Share evidence of successful adoption and realised improvements.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 3
    },
    {
      "id": "CA_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Testing & Validation",
      "action": "Validate that adopted behaviours and practices align with intended future-state outcomes.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 3
    },
    {
      "id": "CA_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Governance",
      "category": "Governance",
      "action": "Review adoption outcomes and improvement actions through governance processes.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 3
    },
    {
      "id": "CA_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Design",
      "action": "Refine adoption approaches using learning from implementation experience.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 3
    },
    {
      "id": "CA_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Support managers and leaders to reinforce adoption expectations.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 3
    },
    {
      "id": "CA_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Measurement",
      "category": "Measurement & Evaluation",
      "action": "Monitor long-term adoption performance and behavioural sustainability.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 4
    },
    {
      "id": "CA_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Measurement",
      "category": "Analysis & Insight",
      "action": "Use adoption data to identify opportunities for optimisation and improvement.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 4
    },
    {
      "id": "CA_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Governance",
      "category": "Governance",
      "action": "Embed adoption monitoring into BAU performance and improvement processes.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 4
    },
    {
      "id": "CA_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Design",
      "category": "Design",
      "action": "Use organisational learning to strengthen future adoption approaches.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 4
    },
    {
      "id": "CA_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Embed adoption-focused behaviours and improvement practices into organisational culture.",
      "outcomeIds": ["CA_O3"],
      "readinessScore": 4
    }
  ]
}
`,ys={componentId:"change_adoption",actionPrefix:"change-adoption-action",outcomePrefix:"change-adoption:outcome",fallbackOutcomes:[{id:"change-adoption:outcome:o1",text:"Adoption expectations and measures have been defined"},{id:"change-adoption:outcome:o2",text:"Adoption is actively monitored and supported"},{id:"change-adoption:outcome:o3",text:"Adoption is sustained and optimised"}],lensAliases:{"Planning and Measurement":"Planning and Risk","Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","Skills and Behaviour":"Skills and Behaviour","People Experience and Culture":"Skills and Behaviour",Governance:"Planning and Risk",Design:"Planning and Risk",Reinforcement:"Skills and Behaviour"}},ri=$e(ii,ys);function li(n){return De(n,ys,ri)}const ci=`{
  "component": { "id": "READINESS_PLANNING", "name": "Change Management Readiness & Planning" },
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
      "outcomeIds": ["RP_O1"],
      "readinessScore": 0
    },
    {
      "id": "RP_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "Begin discussions with sponsors, leaders and stakeholders about organisational preparedness for the change.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 0
    },
    {
      "id": "RP_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Identify high-level areas where readiness, planning or implementation challenges may occur.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 0
    },
    {
      "id": "RP_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Explore stakeholder perceptions regarding readiness, change capacity and support needs.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 0
    },
    {
      "id": "RP_0005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify initial organisational constraints, assumptions and factors that could influence delivery.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 0
    },
    {
      "id": "RP_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Gain initial agreement that readiness assessment and change management planning activities will be required.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 0
    },
    {
      "id": "RP_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Communication",
      "category": "Communication",
      "action": "Begin raising awareness of the need for implementation planning, readiness activities and organisational preparation.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 0
    },
    {
      "id": "RP_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous change initiatives relating to readiness and planning.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 0
    },
    {
      "id": "RP_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Conduct a structured readiness assessment to understand organisational preparedness for change.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 1
    },
    {
      "id": "RP_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Assess organisational capability, capacity and resource availability required to support implementation.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 1
    },
    {
      "id": "RP_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify and document readiness gaps between the current state and desired future state.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 1
    },
    {
      "id": "RP_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Assess readiness-related risks that may affect successful implementation.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 1
    },
    {
      "id": "RP_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Assess organisational, programme and operational dependencies affecting readiness.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 1
    },
    {
      "id": "RP_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Engage stakeholders to validate readiness levels, concerns, confidence and support requirements.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 1
    },
    {
      "id": "RP_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess organisational attitudes, competing priorities, change fatigue and change capacity.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 1
    },
    {
      "id": "RP_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Define and establish baseline readiness measures and indicators.",
      "outcomeIds": ["RP_O1"],
      "readinessScore": 1
    },
    {
      "id": "RP_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a structured change management approach informed by readiness findings.",
      "outcomeIds": ["RP_O2"],
      "readinessScore": 1
    },
    {
      "id": "RP_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Define change management workstreams, priorities, activities, milestones and delivery approach.",
      "outcomeIds": ["RP_O2"],
      "readinessScore": 1
    },
    {
      "id": "RP_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Develop a detailed change management plan informed by readiness, impact, risk and stakeholder analysis findings.",
      "outcomeIds": ["RP_O2"],
      "readinessScore": 2
    },
    {
      "id": "RP_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Map dependencies, assumptions, constraints and critical path activities within the change plan.",
      "outcomeIds": ["RP_O2"],
      "readinessScore": 2
    },
    {
      "id": "RP_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Obtain approval of the change management plan through appropriate governance routes.",
      "outcomeIds": ["RP_O2"],
      "readinessScore": 2
    },
    {
      "id": "RP_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Define readiness indicators, implementation checkpoints and progress measures.",
      "outcomeIds": ["RP_O2", "RP_O3"],
      "readinessScore": 2
    },
    {
      "id": "RP_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Integrate readiness and planning risks into the wider change risk management approach.",
      "outcomeIds": ["RP_O2", "RP_O3"],
      "readinessScore": 2
    },
    {
      "id": "RP_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Validate planning assumptions and readiness findings with affected stakeholder groups.",
      "outcomeIds": ["RP_O1", "RP_O2"],
      "readinessScore": 2
    },
    {
      "id": "RP_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate implementation timelines, expected activities and preparation requirements.",
      "outcomeIds": ["RP_O2"],
      "readinessScore": 2
    },
    {
      "id": "RP_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Dependency Management",
      "action": "Align learning, communications, engagement and support activities with implementation milestones.",
      "outcomeIds": ["RP_O2"],
      "readinessScore": 2
    },
    {
      "id": "RP_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Establish ownership and accountability for delivery of change management activities.",
      "outcomeIds": ["RP_O2"],
      "readinessScore": 2
    },
    {
      "id": "RP_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Define how readiness will be monitored and reassessed throughout delivery.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 2
    },
    {
      "id": "RP_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Monitor delivery of the change management plan against agreed milestones and success measures.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "RP_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Review readiness levels at key implementation checkpoints.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "RP_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Address readiness gaps, issues and barriers that emerge during implementation.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "RP_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Review progress, readiness and delivery issues through governance forums.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "RP_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Adjust and refine plans in response to delivery experience, feedback and changing priorities.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "RP_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather stakeholder feedback on implementation preparedness and support requirements.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "RP_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Provide regular updates on implementation plans, readiness progress and key milestones.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "RP_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Dependency Management",
      "action": "Coordinate readiness activities across communications, engagement, learning and support workstreams.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "RP_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "Validate organisational readiness before key implementation events and go-live activities.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "RP_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Assess whether planned change management activities are supporting successful implementation.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 3
    },
    {
      "id": "RP_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Use implementation and adoption data to evaluate the effectiveness of readiness and planning approaches.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 4
    },
    {
      "id": "RP_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Incorporate lessons learned into future change planning methodologies.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 4
    },
    {
      "id": "RP_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Governance",
      "category": "Governance",
      "action": "Embed readiness reviews and change planning disciplines into organisational change delivery standards.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 4
    },
    {
      "id": "RP_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Continuously review organisational readiness for future changes and transformation activity.",
      "outcomeIds": ["RP_O1", "RP_O3"],
      "readinessScore": 4
    },
    {
      "id": "RP_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Maintain visibility and management of strategic programme dependencies affecting future readiness.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 4
    },
    {
      "id": "RP_044",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Maintain mechanisms for gathering ongoing readiness insight from across the organisation.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 4
    },
    {
      "id": "RP_045",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Recognise teams and leaders that consistently demonstrate strong change preparedness and planning discipline.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 4
    },
    {
      "id": "RP_046",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Benchmark readiness and planning performance against previous programmes and organisational standards.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 4
    },
    {
      "id": "RP_047",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Continuously improve change planning templates, standards and guidance using organisational learning.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 4
    },
    {
      "id": "RP_048",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "Embed proactive readiness assessment and planning as a routine part of organisational change delivery.",
      "outcomeIds": ["RP_O3"],
      "readinessScore": 4
    }
  ]
}
`,ws={componentId:"cm_readiness",actionPrefix:"cm-readiness-action",outcomePrefix:"cm-readiness:outcome",fallbackOutcomes:[{id:"cm-readiness:outcome:o1",text:"Organisational readiness has been assessed"},{id:"cm-readiness:outcome:o2",text:"A robust change management plan has been developed"},{id:"cm-readiness:outcome:o3",text:"Readiness and planning activities actively support successful implementation"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Planning and Risk":"Planning and Risk","People Experience and Culture":"Planning and Risk","Skills and Behaviour":"Planning and Risk","Process and Sustainment":"Planning and Risk",Governance:"Planning and Risk",Reinforcement:"Planning and Risk"}},di=$e(ci,ws);function mi(n){return De(n,ws,di)}const ui=`{
  "component": { "id": "CHANGE_IMPACT", "name": "Change Impact" },
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
      "outcomeIds": ["CI_O1"],
      "readinessScore": 0
    },
    {
      "id": "CI_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "Begin discussions with leaders and stakeholders regarding who or what may be affected by the change.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 0
    },
    {
      "id": "CI_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Identify high-level business areas, services, teams and stakeholder groups likely to experience change impacts.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 0
    },
    {
      "id": "CI_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Explore stakeholder perceptions of where change may affect their roles, activities or responsibilities.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 0
    },
    {
      "id": "CI_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify potential areas of disruption, opportunity or uncertainty associated with the change.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 0
    },
    {
      "id": "CI_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Gain initial agreement that change impact assessment activities will be required.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 0
    },
    {
      "id": "CI_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Communication",
      "category": "Communication",
      "action": "Begin raising awareness that different stakeholder groups may be affected in different ways.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 0
    },
    {
      "id": "CI_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Review previous change initiatives to identify common impact themes, challenges and lessons learned.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 0
    },
    {
      "id": "CI_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify and document the areas, services, teams, roles, processes and stakeholder groups affected by the change.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 1
    },
    {
      "id": "CI_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Develop an initial structured change impact assessment covering people, process, technology, information, governance and ways of working.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 1
    },
    {
      "id": "CI_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify and document intended and unintended impacts that could affect performance, service continuity or stakeholder experience.",
      "outcomeIds": ["CI_O1", "CI_O2"],
      "readinessScore": 1
    },
    {
      "id": "CI_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Assess initial risks arising from identified change impacts.",
      "outcomeIds": ["CI_O2", "CI_O3"],
      "readinessScore": 1
    },
    {
      "id": "CI_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Define the impact assessment methodology, criteria, measures and evidence sources to be used.",
      "outcomeIds": ["CI_O2"],
      "readinessScore": 1
    },
    {
      "id": "CI_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Engage affected stakeholder groups to understand current ways of working and expected impacts.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 1
    },
    {
      "id": "CI_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess stakeholder concerns, support requirements, perceived disruption and areas of uncertainty.",
      "outcomeIds": ["CI_O1", "CI_O2"],
      "readinessScore": 1
    },
    {
      "id": "CI_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Map affected processes, services and ways of working at a level sufficient to assess change impact.",
      "outcomeIds": ["CI_O1"],
      "readinessScore": 1
    },
    {
      "id": "CI_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Assess existing pain points, bottlenecks, duplication, workarounds and service pressures that may influence the scale of impact.",
      "outcomeIds": ["CI_O1", "CI_O2"],
      "readinessScore": 1
    },
    {
      "id": "CI_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Define and establish baseline measures that will enable comparison between current and future states.",
      "outcomeIds": ["CI_O2", "CI_O3"],
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
      "outcomeIds": ["CI_O1", "CI_O2"],
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
      "outcomeIds": ["CI_O2"],
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
      "outcomeIds": ["CI_O2", "CI_O3"],
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
      "outcomeIds": ["CI_O3"],
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
      "outcomeIds": ["CI_O2", "CI_O3"],
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
      "outcomeIds": ["CI_O2"],
      "readinessScore": 2
    }
  ]
}
`,Cs={componentId:"change_impact",actionPrefix:"change-impact-action",outcomePrefix:"change-impact:outcome",fallbackOutcomes:[{id:"change-impact:outcome:o1",text:"The impact of the change has been identified and understood"},{id:"change-impact:outcome:o2",text:"Impacts have been assessed, validated and prioritised"},{id:"change-impact:outcome:o3",text:"Change impacts are actively managed through plans, governance and support"}]},gi=$e(ui,Cs);function pi(n){return De(n,Cs,gi)}const hi=`{
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
      "outcomeIds": ["CN_O1"],
      "readinessScore": 0
    },
    {
      "id": "CN_0002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Explore how a change network could support programme and organisational objectives.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 0
    },
    {
      "id": "CN_0003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Identify potential areas, teams and stakeholder groups that may benefit from local change support.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 0
    },
    {
      "id": "CN_0004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Discuss the concept of change champions and change agents with sponsors and stakeholder groups.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 0
    },
    {
      "id": "CN_0005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify individuals who may have influence, credibility or interest in supporting change locally.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 0
    },
    {
      "id": "CN_0006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Obtain initial sponsor agreement to explore creation of a change network.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 0
    },
    {
      "id": "CN_0007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Begin raising awareness of the potential role and value of a change network.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 0
    },
    {
      "id": "CN_0008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Assess whether useful local networks, forums or communities already exist that could support change activities.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 0
    },
    {
      "id": "CN_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Agree and document the purpose, scope and objectives of the change network.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "CN_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Prioritise organisational areas and stakeholder groups requiring representation within the change network.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "CN_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Draft role profiles and expectations for change agents and change champions.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "CN_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Define sponsorship, reporting lines and governance arrangements for the proposed network.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "CN_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a structured recruitment, onboarding and engagement approach for network members.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "CN_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Approach and engage prospective network members across priority business areas.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "CN_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Assess commitment, availability and suitability of prospective network members.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "CN_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Review network coverage and identify gaps in representation, influence and local knowledge.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "CN_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate planned objectives, roles and expected value of the upcoming change network.",
      "outcomeIds": ["CN_O1", "CN_O2"],
      "readinessScore": 1
    },
    {
      "id": "CN_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Establish initial connections and collaboration opportunities between prospective network members.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "CN_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Launch the change network with defined membership, responsibilities and operating arrangements.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 2
    },
    {
      "id": "CN_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Training & Learning",
      "action": "Provide initial training and capability development for network members.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "CN_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Provide network members with key messages, updates and engagement materials.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "CN_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Establish mechanisms for two-way communication between the programme and the network.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "CN_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Define measures to assess network participation, contribution and effectiveness.",
      "outcomeIds": ["CN_O2", "CN_O3"],
      "readinessScore": 2
    },
    {
      "id": "CN_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use network members to gather insight, questions, concerns and feedback from stakeholders.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "CN_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Use network members to reinforce key messages and support local engagement activity.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "CN_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Enable network members to represent stakeholder concerns within programme discussions.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "CN_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Support network members to build local advocacy and confidence in the change.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "CN_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Monitor engagement levels and participation across the network.",
      "outcomeIds": ["CN_O2", "CN_O3"],
      "readinessScore": 2
    },
    {
      "id": "CN_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Integrate the change network into programme governance, planning and delivery activities.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "CN_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Evaluate the effectiveness of the network in supporting change outcomes.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "CN_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Refine network structures, roles and approaches based on learning and feedback.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "CN_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "Align change network activity with engagement, learning and adoption plans.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "CN_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Expand network involvement in implementation and decision-support activities.",
      "outcomeIds": ["CN_O2", "CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "CN_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use network members to facilitate local problem solving and remove barriers to adoption.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 3
    },
    {
      "id": "CN_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Share examples of network impact and success across stakeholder groups.",
      "outcomeIds": ["CN_O2", "CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "CN_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise and celebrate the contribution of network members.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "CN_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Assess stakeholder perceptions of change network effectiveness.",
      "outcomeIds": ["CN_O2", "CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "CN_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Use network members to reinforce desired behaviours and ways of working.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 3
    },
    {
      "id": "CN_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Embed the change network into organisational change and improvement approaches.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "CN_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Review and continuously improve network effectiveness and operating models.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "CN_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Use organisational learning to strengthen future change network approaches.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "CN_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "Integrate the network with organisational improvement, transformation and change capability activities.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "CN_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Maintain a sustainable network capable of supporting future change initiatives.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "CN_044",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Maintain active two-way communication between stakeholders and the change network.",
      "outcomeIds": ["CN_O2", "CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "CN_045",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Embed change champion and change agent roles into organisational culture.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "CN_046",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Measure the network’s contribution to engagement, adoption and reinforcement outcomes.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "CN_047",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Develop future change leaders from within the network.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "CN_048",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Demonstrate the value of the network through sustained contribution to organisational change success.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    }
  ]
}
`,Ns={componentId:"change_network",actionPrefix:"change-network-action",outcomePrefix:"change-network:outcome",fallbackOutcomes:[{id:"change-network:outcome:o1",text:"A representative and effective change network has been established"},{id:"change-network:outcome:o2",text:"The change network actively enables engagement and adoption"},{id:"change-network:outcome:o3",text:"The change network is embedded and delivers ongoing value"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Engagement:"People Experience and Culture","Analysis and Insight":"People Experience and Culture"}},fi=$e(hi,Ns);function bi(n){return De(n,Ns,fi)}const xi=`{
  "component": { "id": "ORG_CHANGE_READINESS", "name": "Org Change Readiness" },
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
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Recognise that organisational readiness will influence the success of the change.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 0
    },
    {
      "id": "OCR_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "Begin discussions with leaders regarding the organisation's ability to absorb and support the change.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 0
    },
    {
      "id": "OCR_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Explore stakeholder perceptions of preparedness, capacity and support requirements.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 0
    },
    {
      "id": "OCR_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Identify high-level organisational factors that may support or hinder the change.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 0
    },
    {
      "id": "OCR_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Secure initial agreement that organisational readiness will be assessed and managed throughout the change lifecycle.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 0
    },
    {
      "id": "OCR_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Communication",
      "category": "Communication",
      "action": "Begin raising awareness of organisational readiness considerations and expectations.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 0
    },
    {
      "id": "OCR_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous organisational changes relating to readiness and preparedness.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 0
    },
    {
      "id": "OCR_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify potential readiness risks, constraints and competing organisational priorities.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 0
    },
    {
      "id": "OCR_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Conduct a structured organisational readiness assessment.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 1
    },
    {
      "id": "OCR_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Assess organisational capacity, workload pressures and competing priorities.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 1
    },
    {
      "id": "OCR_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess organisational attitudes towards change, confidence levels and change fatigue.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 1
    },
    {
      "id": "OCR_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Define readiness indicators, measures and assessment criteria.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 1
    },
    {
      "id": "OCR_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify organisational readiness strengths, weaknesses, risks and barriers.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 1
    },
    {
      "id": "OCR_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Validate readiness findings with stakeholders, leaders and operational teams.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 1
    },
    {
      "id": "OCR_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Assess dependencies affecting organisational readiness across programmes, services and operational activities.",
      "outcomeIds": ["OCR_O1"],
      "readinessScore": 1
    },
    {
      "id": "OCR_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a readiness improvement approach to address identified gaps and barriers.",
      "outcomeIds": ["OCR_O2"],
      "readinessScore": 1
    },
    {
      "id": "OCR_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Define ownership and accountability for organisational readiness improvement activities.",
      "outcomeIds": ["OCR_O2"],
      "readinessScore": 1
    },
    {
      "id": "OCR_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Communication",
      "category": "Communication",
      "action": "Communicate organisational readiness findings and improvement priorities.",
      "outcomeIds": ["OCR_O2"]
    },
    {
      "id": "OCR_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Develop and implement readiness improvement plans to address identified organisational readiness gaps.",
      "outcomeIds": ["OCR_O2"],
      "readinessScore": 2
    },
    {
      "id": "OCR_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Implement actions to address organisational capacity constraints that could affect successful change delivery.",
      "outcomeIds": ["OCR_O2"],
      "readinessScore": 2
    },
    {
      "id": "OCR_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Address change fatigue, competing priorities and organisational barriers that may reduce readiness.",
      "outcomeIds": ["OCR_O2"],
      "readinessScore": 2
    },
    {
      "id": "OCR_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "Strengthen leadership readiness to support and champion the change effectively.",
      "outcomeIds": ["OCR_O2"],
      "readinessScore": 2
    },
    {
      "id": "OCR_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Training & Learning",
      "action": "Build manager readiness to coach, support and guide teams through the change.",
      "outcomeIds": ["OCR_O2"],
      "readinessScore": 2
    },
    {
      "id": "OCR_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Improve local team preparedness through targeted support, engagement and readiness interventions.",
      "outcomeIds": ["OCR_O2"],
      "readinessScore": 2
    },
    {
      "id": "OCR_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Monitor organisational readiness indicators and assess progress against readiness objectives.",
      "outcomeIds": ["OCR_O2", "OCR_O3"],
      "readinessScore": 2
    },
    {
      "id": "OCR_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Governance",
      "category": "Governance",
      "action": "Review organisational readiness performance and improvement actions through governance processes.",
      "outcomeIds": ["OCR_O2", "OCR_O3"],
      "readinessScore": 2
    },
    {
      "id": "OCR_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Dependency Management",
      "category": "Dependency Management",
      "action": "Align readiness improvement activities with implementation milestones, programme dependencies and delivery schedules.",
      "outcomeIds": ["OCR_O2"],
      "readinessScore": 2
    },
    {
      "id": "OCR_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Measurement & Evaluation",
      "category": "Testing & Validation",
      "action": "Reassess organisational readiness before key implementation events and delivery milestones.",
      "outcomeIds": ["OCR_O2", "OCR_O3"],
      "readinessScore": 2
    },
    {
      "id": "OCR_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Measure organisational readiness performance across impacted areas and stakeholder groups.",
      "outcomeIds": ["OCR_O3"],
      "readinessScore": 3
    },
    {
      "id": "OCR_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Testing & Validation",
      "category": "Testing & Validation",
      "action": "Validate organisational readiness before go-live activities and major implementation events.",
      "outcomeIds": ["OCR_O3"],
      "readinessScore": 3
    },
    {
      "id": "OCR_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Address remaining readiness gaps that could affect implementation success.",
      "outcomeIds": ["OCR_O3"],
      "readinessScore": 3
    }
  ]
}
`,Es={componentId:"org_maturity",actionPrefix:"org-change-readiness-action",outcomePrefix:"org-change-readiness:outcome",fallbackOutcomes:[{id:"org-change-readiness:outcome:o1",text:"Organisational readiness has been assessed and understood"},{id:"org-change-readiness:outcome:o2",text:"Readiness gaps are being actively addressed"},{id:"org-change-readiness:outcome:o3",text:"The organisation is prepared to successfully absorb and sustain the change"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"Skills and Behaviour","Planning and Measurement":"Skills and Behaviour",Design:"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Reinforcement:"Skills and Behaviour"}},Si=$e(xi,Es);function vi(n){return De(n,Es,Si)}const yi="pathway-auto-action:",wi="pathway:auto-objective:",Ci="vision:auto-objective:";function Ni(n){return n.startsWith(wi)||n.startsWith(Ci)}function Is(n){const t=n.orgProfile.cst.pathway,a={...n.objectives||{}},s=Object.keys(n.currentDraft||{}).reduce((i,h)=>{const p=n.currentDraft[h]||{};return i[h]=Object.keys(p).reduce((m,o)=>{const C=p[o];return m[o]={...C,actions:(C.actions||[]).filter(l=>!l.id.startsWith(yi))},m},{}),i},{});return Xn.forEach(i=>{nt(i.id,t)&&(a[i.id]=(a[i.id]||[]).filter(p=>!Ni(p.id)))}),{...n,currentDraft:s,objectives:a}}const Ei=`{
  "component": { "id": "PROCESS_CHANGE", "name": "Process Change" },
  "outcomes": [
    { "id": "PC_O1", "name": "Current and future processes have been defined", "description": "" },
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
      "outcomeIds": ["PC_O1"],
      "readinessScore": 0
    },
    {
      "id": "PC_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Identify high-level business areas likely to be affected by process change.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 0
    },
    {
      "id": "PC_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Engage process owners and stakeholders to explore how work may need to change.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 0
    },
    {
      "id": "PC_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Identify known process challenges, issues and opportunities for improvement.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 0
    },
    {
      "id": "PC_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Governance",
      "category": "Governance",
      "action": "Obtain initial agreement from leaders and process owners to review affected processes.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 0
    },
    {
      "id": "PC_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Communication",
      "category": "Communication",
      "action": "Begin raising awareness that changes to processes and ways of working may be required.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 0
    },
    {
      "id": "PC_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Identify existing documentation, workflows or process maps that may support future analysis.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 0
    },
    {
      "id": "PC_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Identify potential process dependencies that may need further investigation.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 0
    },
    {
      "id": "PC_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Confirm and prioritise the business processes affected by the change.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "PC_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Conduct structured current-state process mapping and workflow analysis.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "PC_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Analyse process pain points, bottlenecks, duplication and inefficiencies in priority areas.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "PC_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Define and capture baseline process performance measures.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "PC_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Validate current operational challenges and improvement opportunities with process users.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "PC_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Develop draft future-state process designs aligned to intended change outcomes.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "PC_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Conduct structured gap analysis between current-state and future-state processes.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "PC_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "Assess process dependencies, interfaces and external touchpoints.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "PC_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Governance",
      "category": "Governance",
      "action": "Confirm process ownership and accountability arrangements for future-state processes.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "PC_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Document draft future-state processes, procedures and operating requirements.",
      "outcomeIds": ["PC_O1"],
      "readinessScore": 1
    },
    {
      "id": "PC_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "Validate future-state processes with stakeholders and subject matter experts.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "PC_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "Test future-state workflows under realistic operating conditions.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "PC_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Refine future-state processes using validation and testing feedback.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "PC_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Implementation",
      "action": "Implement approved future-state processes.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "PC_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Dependency Management",
      "category": "Dependency Management",
      "action": "Coordinate process implementation with learning, communications, adoption and operational readiness activities.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "PC_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate process changes, responsibilities and expectations to stakeholders.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "PC_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Support teams in understanding and applying new process requirements.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "PC_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Governance",
      "category": "Governance",
      "action": "Review implementation progress and process readiness through governance forums.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "PC_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Identify and manage risks associated with process implementation.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "PC_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Monitor early process performance following implementation.",
      "outcomeIds": ["PC_O2"],
      "readinessScore": 2
    },
    {
      "id": "PC_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Measure process performance against baseline and target measures.",
      "outcomeIds": ["PC_O2", "PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "PC_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Analyse process performance trends and identify opportunities for optimisation.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "PC_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Testing & Validation",
      "category": "Testing & Validation",
      "action": "Validate that operational outcomes align with future-state process design objectives.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "PC_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Governance",
      "category": "Governance",
      "action": "Review process performance and improvement priorities through governance routes.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "PC_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Refine processes using implementation feedback, operational insight and performance data.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "PC_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather user feedback on process usability and effectiveness.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "PC_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Communication",
      "category": "Communication",
      "action": "Share process improvements, successes and lessons learned.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "PC_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Recognise teams contributing to successful process adoption and improvement.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "PC_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Dependency Management",
      "category": "Dependency Management",
      "action": "Align process improvements with benefits realisation and adoption activities.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "PC_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Implementation",
      "category": "Implementation",
      "action": "Standardise new processes across relevant business areas.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 3
    },
    {
      "id": "PC_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Continuously monitor process performance and operational outcomes.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 4
    },
    {
      "id": "PC_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Design",
      "category": "Design",
      "action": "Use performance insight and organisational learning to optimise processes further.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 4
    },
    {
      "id": "PC_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Governance",
      "category": "Governance",
      "action": "Embed process review and optimisation into BAU governance arrangements.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 4
    },
    {
      "id": "PC_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Implementation",
      "category": "Implementation",
      "action": "Embed ownership for continuous process improvement into operational teams.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 4
    },
    {
      "id": "PC_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Promote a culture of process excellence, optimisation and continuous improvement.",
      "outcomeIds": ["PC_O3"],
      "readinessScore": 4
    }
  ]
}
`,_s={componentId:"process_change",actionPrefix:"process-change-action",outcomePrefix:"process-change:outcome",fallbackOutcomes:[{id:"process-change:outcome:o1",text:"Current and future processes have been defined"},{id:"process-change:outcome:o2",text:"Process changes have been implemented and adopted"},{id:"process-change:outcome:o3",text:"Processes are optimised and continuously improved"}],lensAliases:{"Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Skills and Behaviour","Planning and Risk":"Process and Sustainment","Analysis and Insight":"Process and Sustainment",Communication:"Skills and Behaviour","Dependency Management":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment",Implementation:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"Skills and Behaviour","Testing and Validation":"Process and Sustainment"}},Ii=$e(Ei,_s);function _i(n){return De(n,_s,Ii)}const Ai=`{
  "component": { "id": "REINFORCEMENT", "name": "Reinforcement" },
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
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Recognise the need to sustain change outcomes beyond implementation and initial adoption.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 0
    },
    {
      "id": "REINF_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "Discuss with sponsors and leaders how the change will be sustained after go-live.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 0
    },
    {
      "id": "REINF_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Identify behaviours, processes and outcomes that will require ongoing reinforcement.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 0
    },
    {
      "id": "REINF_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Explore stakeholder perceptions of what will help or hinder long-term sustainment.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 0
    },
    {
      "id": "REINF_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify areas where adoption may decline without ongoing support.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 0
    },
    {
      "id": "REINF_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Gain initial sponsor commitment to support reinforcement and sustainment activities.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 0
    },
    {
      "id": "REINF_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Communication",
      "category": "Communication",
      "action": "Begin raising awareness that reinforcement activities will be required after implementation.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 0
    },
    {
      "id": "REINF_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Review previous change initiatives to identify sustainment risks and lessons learned.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 0
    },
    {
      "id": "REINF_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Define and document what successful long-term adoption and sustainment will look like.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "REINF_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Develop agreed sustainment indicators and reinforcement measures.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "REINF_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Define ownership, accountabilities and responsibilities for reinforcement activities.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "REINF_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Dependency Management",
      "action": "Assess dependencies between reinforcement, adoption, benefits, sponsorship and operational ownership.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "REINF_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Design",
      "action": "Develop a structured reinforcement and sustainment plan aligned to adoption outcomes.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "REINF_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess sustainment drivers and barriers across stakeholder groups and business areas.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "REINF_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Validate stakeholder sustainment needs and ongoing support requirements.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "REINF_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify priority stakeholder groups requiring targeted reinforcement support.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "REINF_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate expected future-state behaviours and sustainment expectations.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "REINF_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Establish baseline reinforcement and sustainment measures.",
      "outcomeIds": ["REINF_O1"],
      "readinessScore": 1
    },
    {
      "id": "REINF_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Ensure leaders and managers visibly reinforce desired behaviours and ways of working.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "REINF_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Communicate adoption successes, improvements and positive outcomes.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "REINF_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Review reinforcement indicators and sustainment risks through governance mechanisms.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "REINF_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Measurement",
      "category": "Measurement & Evaluation",
      "action": "Monitor adoption, behaviour and performance indicators linked to sustained change.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "REINF_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Measurement",
      "category": "Design",
      "action": "Refine reinforcement plans using sustainment data and stakeholder feedback.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "REINF_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise and celebrate examples of successful adoption and positive behavioural change.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "REINF_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use change networks, champions and managers to reinforce desired behaviours locally.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "REINF_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Training & Learning",
      "action": "Provide refresher support where adoption or confidence levels begin to decline.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "REINF_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Share success stories, learning and examples of improvements created by the change.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "REINF_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Gather feedback regarding sustainment challenges and support needs.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 2
    },
    {
      "id": "REINF_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Measurement & Evaluation",
      "action": "Monitor sustainment indicators and identify areas where adoption is weakening.",
      "outcomeIds": ["REINF_O2", "REINF_O3"],
      "readinessScore": 3
    },
    {
      "id": "REINF_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Target reinforcement activity towards groups showing reductions in adoption or compliance.",
      "outcomeIds": ["REINF_O2"],
      "readinessScore": 3
    },
    {
      "id": "REINF_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Ensure leaders consistently model desired behaviours and reinforce expectations.",
      "outcomeIds": ["REINF_O2", "REINF_O3"],
      "readinessScore": 3
    },
    {
      "id": "REINF_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Governance",
      "category": "Governance",
      "action": "Review sustainment performance and improvement actions through governance processes.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 3
    },
    {
      "id": "REINF_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Analysis & Insight",
      "action": "Analyse performance, adoption and benefits data to identify sustainment opportunities.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 3
    },
    {
      "id": "REINF_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Demonstrate the ongoing value of the change through evidence and success stories.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 3
    },
    {
      "id": "REINF_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise teams and individuals who consistently demonstrate future-state behaviours.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 3
    },
    {
      "id": "REINF_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use stakeholder feedback to improve sustainment and reinforcement activities.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 3
    },
    {
      "id": "REINF_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Risk Management",
      "action": "Identify risks that may cause reversion to previous behaviours or ways of working.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 3
    },
    {
      "id": "REINF_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Design",
      "category": "Design",
      "action": "Update reinforcement approaches using sustainment insight and lessons learned.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 3
    },
    {
      "id": "REINF_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Governance",
      "category": "Governance",
      "action": "Embed reinforcement measures into operational management and performance processes.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 4
    },
    {
      "id": "REINF_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Monitor long-term behavioural sustainment and continuous improvement outcomes.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 4
    },
    {
      "id": "REINF_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Design",
      "category": "Design",
      "action": "Use organisational learning to improve future reinforcement strategies.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 4
    },
    {
      "id": "REINF_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Embed recognition, feedback and reinforcement practices into organisational culture.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 4
    },
    {
      "id": "REINF_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Promote continuous improvement and ongoing enhancement of adopted ways of working.",
      "outcomeIds": ["REINF_O3"],
      "readinessScore": 4
    }
  ]
}
`,As={componentId:"reinforcement",actionPrefix:"reinforcement-action",outcomePrefix:"reinforcement:outcome",fallbackOutcomes:[{id:"reinforcement:outcome:o1",text:"Reinforcement strategy and sustainment measures are defined"},{id:"reinforcement:outcome:o2",text:"Reinforcement activities support sustained adoption and behaviour change"},{id:"reinforcement:outcome:o3",text:"Sustained change outcomes are embedded and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Strategic Direction and Leadership":"Process and Sustainment","Planning and Measurement":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"People Experience and Culture"}},ji=$e(Ai,As);function Oi(n){return De(n,As,ji)}const ki=`{
  "component": { "id": "RESISTANCE_MANAGEMENT", "name": "Resistance Management" },
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
      "outcomeIds": ["RES_O1"],
      "readinessScore": 0
    },
    {
      "id": "RES_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Begin discussing potential concerns and reactions to the change with stakeholders and leaders.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 0
    },
    {
      "id": "RES_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Identify stakeholder groups where resistance may emerge during the change.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 0
    },
    {
      "id": "RES_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Explore previous organisational experiences that may influence reactions to the change.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 0
    },
    {
      "id": "RES_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify high-level risks that resistance could present to successful implementation.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 0
    },
    {
      "id": "RES_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Gain initial sponsor and leadership agreement that resistance management activities may be required.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 0
    },
    {
      "id": "RES_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Communication",
      "category": "Communication",
      "action": "Begin raising awareness amongst leaders and managers about the role of resistance management in successful change.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 0
    },
    {
      "id": "RES_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous changes relating to resistance, concern and stakeholder opposition.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 0
    },
    {
      "id": "RES_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify and document potential sources of resistance across stakeholder groups, teams and impacted areas.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 1
    },
    {
      "id": "RES_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess causes, drivers and contributing factors likely to generate resistance.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 1
    },
    {
      "id": "RES_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Conduct structured engagement to understand concerns, apprehensions and barriers to supporting the change.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 1
    },
    {
      "id": "RES_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Analyse restraining forces and resistance factors using recognised assessment approaches.",
      "outcomeIds": ["RES_O1"],
      "readinessScore": 1
    },
    {
      "id": "RES_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Assess likelihood, impact and priority of resistance risks affecting implementation and adoption.",
      "outcomeIds": ["RES_O1", "RES_O2"],
      "readinessScore": 1
    },
    {
      "id": "RES_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a structured resistance management approach based on identified resistance drivers.",
      "outcomeIds": ["RES_O2"],
      "readinessScore": 1
    },
    {
      "id": "RES_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Define ownership, accountabilities and escalation arrangements for resistance management.",
      "outcomeIds": ["RES_O2"],
      "readinessScore": 1
    },
    {
      "id": "RES_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Develop preventative interventions intended to reduce the likelihood and impact of resistance.",
      "outcomeIds": ["RES_O2"],
      "readinessScore": 1
    },
    {
      "id": "RES_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Assess dependencies between resistance management and engagement, communication, learning and sponsorship activities.",
      "outcomeIds": ["RES_O2"],
      "readinessScore": 1
    },
    {
      "id": "RES_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Define measures and indicators that will be used to identify, track and monitor resistance.",
      "outcomeIds": ["RES_O2"],
      "readinessScore": 1
    },
    {
      "id": "RES_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Establish mechanisms for identifying and escalating emerging resistance.",
      "outcomeIds": ["RES_O2", "RES_O3"],
      "readinessScore": 2
    },
    {
      "id": "RES_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use managers, change agents and change champions to gather insight into emerging concerns and resistance.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 2
    },
    {
      "id": "RES_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Communication",
      "category": "Communication",
      "action": "Address misconceptions, rumours and misinformation through targeted communication activities.",
      "outcomeIds": ["RES_O2", "RES_O3"],
      "readinessScore": 2
    },
    {
      "id": "RES_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Hold structured conversations with impacted groups to explore concerns and identify potential solutions.",
      "outcomeIds": ["RES_O2", "RES_O3"],
      "readinessScore": 2
    },
    {
      "id": "RES_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Training & Learning",
      "action": "Prepare leaders and managers to identify, understand and respond to resistance effectively.",
      "outcomeIds": ["RES_O2"],
      "readinessScore": 2
    },
    {
      "id": "RES_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Integrate significant resistance themes into change risk management processes.",
      "outcomeIds": ["RES_O2", "RES_O3"],
      "readinessScore": 2
    },
    {
      "id": "RES_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Monitor indicators of resistance across stakeholder groups and impacted areas.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 2
    },
    {
      "id": "RES_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Review resistance themes and mitigation actions through governance forums.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 2
    },
    {
      "id": "RES_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Provide tailored responses and messaging for stakeholder groups showing elevated resistance.",
      "outcomeIds": ["RES_O2", "RES_O3"],
      "readinessScore": 2
    },
    {
      "id": "RES_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Design",
      "category": "Design",
      "action": "Refine resistance management interventions using stakeholder insight and feedback.",
      "outcomeIds": ["RES_O2", "RES_O3"],
      "readinessScore": 2
    },
    {
      "id": "RES_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Monitor trends in stakeholder sentiment, concerns and resistance levels.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "RES_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Implement targeted interventions for stakeholder groups with high levels of resistance.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "RES_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Adapt communication and engagement approaches in response to resistance trends.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "RES_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Use visible leadership support to reinforce desired behaviours and address resistance.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "RES_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Assess the effectiveness of resistance management interventions.",
      "outcomeIds": ["RES_O2", "RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "RES_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Review resistance-related risks and update mitigations where required.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "RES_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise and highlight examples of positive adoption and support for the change.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "RES_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Engagement",
      "category": "Engagement",
      "action": "Use feedback channels to identify unresolved concerns before they become entrenched resistance.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "RES_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Governance",
      "category": "Governance",
      "action": "Review resistance themes and organisational responses through governance and leadership forums.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "RES_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Design",
      "category": "Design",
      "action": "Refine resistance management plans based on implementation experience and lessons learned.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 3
    },
    {
      "id": "RES_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Measure long-term trends in support, advocacy, confidence and resistance.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 4
    },
    {
      "id": "RES_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Use organisational learning to strengthen future resistance management approaches.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 4
    },
    {
      "id": "RES_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Governance",
      "category": "Governance",
      "action": "Embed resistance management disciplines into organisational change delivery standards.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 4
    },
    {
      "id": "RES_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Maintain open dialogue with stakeholders to surface concerns early and prevent future resistance.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 4
    },
    {
      "id": "RES_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Embed behaviours that promote openness, feedback and constructive challenge during change.",
      "outcomeIds": ["RES_O3"],
      "readinessScore": 4
    }
  ]
}
`,js={componentId:"resistance",actionPrefix:"resistance-action",outcomePrefix:"resistance:outcome",fallbackOutcomes:[{id:"resistance:outcome:o1",text:"Potential sources of resistance have been identified and understood"},{id:"resistance:outcome:o2",text:"Strategies and interventions are in place to prevent and address resistance"},{id:"resistance:outcome:o3",text:"Resistance is actively managed and reduced throughout the change lifecycle"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour",Design:"Skills and Behaviour",Communication:"People Experience and Culture",Engagement:"People Experience and Culture",Reinforcement:"Skills and Behaviour"}},Ri=$e(ki,js);function Pi(n){return De(n,js,Ri)}const Di=`{
  "component": { "id": "RISK_MANAGEMENT", "name": "Risk Management" },
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
      "outcomeIds": ["RM_O1"],
      "readinessScore": 0
    },
    {
      "id": "RM_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Engagement",
      "action": "Begin discussions with sponsors, leaders and stakeholders about potential risks associated with the change.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 0
    },
    {
      "id": "RM_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Identify high-level areas of uncertainty, vulnerability and potential risk exposure.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 0
    },
    {
      "id": "RM_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Explore stakeholder perceptions of key concerns, risks and organisational vulnerabilities.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 0
    },
    {
      "id": "RM_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify factors that could increase the likelihood of implementation, adoption or sustainment risks.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 0
    },
    {
      "id": "RM_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Gain initial agreement that change risks will need to be identified, assessed and actively managed.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 0
    },
    {
      "id": "RM_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Communication",
      "category": "Communication",
      "action": "Begin raising awareness of the importance of proactive risk management during change.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 0
    },
    {
      "id": "RM_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous changes to identify recurring risk themes and vulnerabilities.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 0
    },
    {
      "id": "RM_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify and document risks that could affect successful delivery, adoption, benefit realisation or sustainment of the change.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "RM_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Conduct structured change risk assessment activities involving stakeholders and subject matter experts.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "RM_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Assess and categorise identified risks according to likelihood, impact, urgency and priority.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "RM_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Apply structured risk assessment techniques to analyse consequences and exposure levels.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "RM_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Establish and maintain an initial change risk register.",
      "outcomeIds": ["RM_O1", "RM_O2"],
      "readinessScore": 1
    },
    {
      "id": "RM_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Engage stakeholders to identify risks from operational, behavioural, cultural and organisational perspectives.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "RM_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess known concerns, previous change experiences and organisational vulnerabilities that may increase risk exposure.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "RM_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess stakeholder confidence in the organisation's ability to manage risks associated with the change.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "RM_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Assess processes, operating arrangements and dependencies to identify areas of elevated risk.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "RM_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "Identify and assess critical dependencies that may increase the overall risk profile of the change.",
      "outcomeIds": ["RM_O1"],
      "readinessScore": 1
    },
    {
      "id": "RM_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Assign ownership and accountability for identified risks.",
      "outcomeIds": ["RM_O2"],
      "readinessScore": 2
    },
    {
      "id": "RM_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Develop mitigation strategies and action plans for high-priority risks.",
      "outcomeIds": ["RM_O2"],
      "readinessScore": 2
    },
    {
      "id": "RM_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Integrate change risks into programme and organisational governance arrangements.",
      "outcomeIds": ["RM_O2", "RM_O3"],
      "readinessScore": 2
    },
    {
      "id": "RM_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Define risk monitoring indicators, thresholds and reporting arrangements.",
      "outcomeIds": ["RM_O2"],
      "readinessScore": 2
    },
    {
      "id": "RM_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Validate risk ratings and mitigation plans with relevant stakeholders and sponsors.",
      "outcomeIds": ["RM_O2"],
      "readinessScore": 2
    },
    {
      "id": "RM_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate significant risks and agreed mitigations to appropriate stakeholder groups.",
      "outcomeIds": ["RM_O2"],
      "readinessScore": 2
    },
    {
      "id": "RM_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use stakeholder insight and feedback to refine risk understanding and mitigation activities.",
      "outcomeIds": ["RM_O2"],
      "readinessScore": 2
    },
    {
      "id": "RM_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Incorporate risk mitigation activities into implementation, communications, learning and readiness plans.",
      "outcomeIds": ["RM_O2", "RM_O3"],
      "readinessScore": 2
    },
    {
      "id": "RM_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "Manage identified dependencies that increase overall change risk.",
      "outcomeIds": ["RM_O2", "RM_O3"],
      "readinessScore": 2
    },
    {
      "id": "RM_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "Test proposed controls and mitigations before implementation where practical.",
      "outcomeIds": ["RM_O2"],
      "readinessScore": 2
    },
    {
      "id": "RM_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Monitor change risks regularly using agreed review cycles, thresholds and governance forums.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "RM_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Review and update risk ratings based on emerging evidence and implementation experience.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "RM_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Escalate significant risks through agreed governance routes and obtain timely decisions where required.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "RM_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Implement additional mitigation actions where existing controls are not sufficiently reducing risk exposure.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "RM_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Assess the effectiveness of mitigation activities and controls.",
      "outcomeIds": ["RM_O2", "RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "RM_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather stakeholder feedback on emerging risks, concerns and unintended consequences.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "RM_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Provide regular risk updates to stakeholders and leadership teams.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "RM_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "Validate whether risk controls are operating as intended in practice.",
      "outcomeIds": ["RM_O2", "RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "RM_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "Review evolving dependencies and their impact on the risk profile.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "RM_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Risk Management",
      "action": "Use lessons learned to improve current mitigation and control activities.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 3
    },
    {
      "id": "RM_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Governance",
      "action": "Embed change risk management into routine governance, planning and operational management processes.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    },
    {
      "id": "RM_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Review long-term trends and recurring patterns in change-related risks.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    },
    {
      "id": "RM_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Use organisational learning to improve risk identification, assessment and mitigation approaches.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    },
    {
      "id": "RM_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Maintain proactive scanning for emerging risks associated with ongoing change and continuous improvement.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    },
    {
      "id": "RM_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Continuously monitor strategic, operational and external dependencies that may create future risk exposure.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    },
    {
      "id": "RM_044",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Encourage proactive risk identification and escalation throughout the organisation.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    },
    {
      "id": "RM_045",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise and reinforce behaviours that contribute to effective risk management.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    },
    {
      "id": "RM_046",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Evaluate the maturity and effectiveness of the risk management approach on a regular basis.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    },
    {
      "id": "RM_047",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Continuously improve risk management processes using lessons learned and organisational insight.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    },
    {
      "id": "RM_048",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "Embed a culture of proactive risk management and continuous vigilance across the organisation.",
      "outcomeIds": ["RM_O3"],
      "readinessScore": 4
    }
  ]
}
`,Os={componentId:"risk_management",actionPrefix:"risk-management-action",outcomePrefix:"risk-management:outcome",fallbackOutcomes:[{id:"risk-management:outcome:o1",text:"Change risks have been identified and assessed"},{id:"risk-management:outcome:o2",text:"Risk mitigation and management activities are in place"},{id:"risk-management:outcome:o3",text:"Risks are proactively managed throughout the change lifecycle"}],lensAliases:{"Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Strategic Direction and Leadership":"Planning and Risk","Skills and Behaviour":"Process and Sustainment",Governance:"Planning and Risk",Reinforcement:"Process and Sustainment"}},$i=$e(Di,Os);function Ti(n){return De(n,Os,$i)}const Li=`{
  "component": { "id": "SKILLS_LEARNING", "name": "Skills & Learning" },
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
      "outcomeIds": ["SL_O1"],
      "readinessScore": 0
    },
    {
      "id": "SL_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Skills & Behaviour",
      "category": "Engagement",
      "action": "Begin discussions with leaders, managers and stakeholders about likely learning and development needs.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 0
    },
    {
      "id": "SL_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Identify stakeholder groups likely to require learning or development support.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 0
    },
    {
      "id": "SL_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Explore stakeholder views on likely learning preferences, barriers and support needs.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 0
    },
    {
      "id": "SL_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify high-level learning risks that could affect successful implementation or adoption.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 0
    },
    {
      "id": "SL_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Gain initial agreement that learning and development activities will be required as part of the change approach.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 0
    },
    {
      "id": "SL_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Communication",
      "category": "Communication",
      "action": "Begin raising awareness that learning support will be provided to help stakeholders prepare for the change.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 0
    },
    {
      "id": "SL_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous changes relating to learning needs, training delivery and user support.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 0
    },
    {
      "id": "SL_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Define and document the knowledge, skills and behaviours required to operate successfully in the future state.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 1
    },
    {
      "id": "SL_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Assess current capability levels across impacted stakeholder groups.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 1
    },
    {
      "id": "SL_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Analysis & Insight",
      "action": "Conduct a structured learning needs and skills gap assessment.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 1
    },
    {
      "id": "SL_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Assess the scale, complexity and impact of learning requirements across the organisation.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 1
    },
    {
      "id": "SL_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Validate learning preferences, barriers and support requirements with impacted stakeholders.",
      "outcomeIds": ["SL_O1"],
      "readinessScore": 1
    },
    {
      "id": "SL_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a structured learning and capability development approach aligned to change objectives.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 1
    },
    {
      "id": "SL_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Define learning objectives, target audiences, learning outcomes and delivery principles.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 1
    },
    {
      "id": "SL_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Dependency Management",
      "category": "Dependency Management",
      "action": "Assess dependencies between learning activities and communications, readiness, process and implementation plans.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 1
    },
    {
      "id": "SL_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Define accountability for learning design, delivery, evaluation and ongoing support.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 1
    },
    {
      "id": "SL_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "Define the learning methods, channels and support mechanisms that will be used to deliver learning and development activities.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 1
    },
    {
      "id": "SL_011",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Design",
      "action": "Develop learning materials, guidance, resources and support content.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 2
    },
    {
      "id": "SL_012",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Deliver learning activities to impacted stakeholder groups.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 2
    },
    {
      "id": "SL_013",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Provide role-specific learning interventions where different groups have different learning requirements.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 2
    },
    {
      "id": "SL_014",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Develop and support local learning champions, coaches or trainers.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 2
    },
    {
      "id": "SL_015",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Implement mechanisms to assess attendance, participation and learning completion.",
      "outcomeIds": ["SL_O2", "SL_O3"],
      "readinessScore": 2
    },
    {
      "id": "SL_016",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate learning opportunities, schedules and expectations to stakeholders.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 2
    },
    {
      "id": "SL_017",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather learner feedback to improve learning content and delivery.",
      "outcomeIds": ["SL_O2", "SL_O3"],
      "readinessScore": 2
    },
    {
      "id": "SL_018",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Coordinate training activities with implementation milestones and readiness requirements.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 2
    },
    {
      "id": "SL_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Identify and manage risks associated with learning delivery and learner readiness.",
      "outcomeIds": ["SL_O2"],
      "readinessScore": 2
    },
    {
      "id": "SL_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Governance",
      "category": "Governance",
      "action": "Monitor learning delivery through governance and reporting processes.",
      "outcomeIds": ["SL_O2", "SL_O3"],
      "readinessScore": 2
    },
    {
      "id": "SL_021",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Evaluate whether learning objectives have been achieved.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "SL_022",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Measurement & Evaluation",
      "category": "Testing & Validation",
      "action": "Assess whether participants can demonstrate required knowledge and skills.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "SL_023",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Provide refresher learning and targeted support where capability gaps remain.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "SL_024",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Offer ongoing coaching and support to reinforce learning transfer.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "SL_025",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Track learning performance data and identify continuing capability gaps.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "SL_026",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather feedback about learning effectiveness, confidence and practical application.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "SL_027",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Communication",
      "category": "Communication",
      "action": "Share learning successes, progress and achievement milestones.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "SL_028",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Governance",
      "category": "Governance",
      "action": "Review learning outcomes and capability measures through governance processes.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "SL_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Design",
      "category": "Design",
      "action": "Refine learning approaches using evaluation findings and implementation experience.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "SL_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Recognise achievement and application of learning within teams and stakeholder groups.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 3
    },
    {
      "id": "SL_031",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Maintain continuous learning opportunities to support evolving organisational needs.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 4
    },
    {
      "id": "SL_032",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Monitor long-term capability development and learning effectiveness.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 4
    },
    {
      "id": "SL_033",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Design",
      "category": "Design",
      "action": "Use organisational learning and insight to improve future learning approaches.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 4
    },
    {
      "id": "SL_034",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Governance",
      "category": "Governance",
      "action": "Embed learning and capability development into organisational improvement and change delivery practices.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 4
    },
    {
      "id": "SL_035",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Promote a culture of continuous learning and development across the organisation.",
      "outcomeIds": ["SL_O3"],
      "readinessScore": 4
    }
  ]
}
`,ks={componentId:"skills_learning",actionPrefix:"skills-learning-action",outcomePrefix:"skills-learning:outcome",fallbackOutcomes:[{id:"skills-learning:outcome:o1",text:"Future learning and capability requirements have been identified"},{id:"skills-learning:outcome:o2",text:"Learning interventions have been designed and delivered"},{id:"skills-learning:outcome:o3",text:"Learning outcomes are achieved and sustained"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Process and Sustainment":"Skills and Behaviour",Governance:"Skills and Behaviour",Communication:"People Experience and Culture",Reinforcement:"Skills and Behaviour",Design:"Skills and Behaviour","Dependency Management":"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour","Testing and Validation":"Skills and Behaviour"}},Bi=$e(Li,ks);function Fi(n){return De(n,ks,Bi)}const Gi=`{
  "component": { "id": "SENIOR_SPONSORSHIP_GOVERNANCE", "name": "Senior Sponsorship & Governance" },
  "outcomes": [
    {
      "id": "SSG_O1",
      "name": "Clear sponsorship and governance structures are established",
      "description": ""
    },
    { "id": "SSG_O2", "name": "Sponsors actively lead and champion the change", "description": "" },
    {
      "id": "SSG_O3",
      "name": "Governance and sponsorship drive successful delivery",
      "description": ""
    }
  ],
  "actions": [
    {
      "id": "SSG_001",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Recognise the need for visible senior sponsorship and governance to support successful change delivery.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "SSG_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "Begin discussions with senior leaders about their role in supporting and sponsoring the change.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "SSG_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Identify areas where leadership support and governance oversight may be required.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "SSG_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Explore stakeholder perceptions of current leadership support for change.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "SSG_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Secure initial leadership commitment to establish sponsorship and governance arrangements.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "SSG_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Communication",
      "category": "Communication",
      "action": "Begin communicating the importance of leadership visibility and sponsorship during change.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "SSG_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous changes relating to governance and sponsorship effectiveness.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "SSG_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Identify potential senior leaders and sponsors who could support the change.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 0
    },
    {
      "id": "SSG_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Confirm the Senior Responsible Owner and executive sponsors required to lead the change.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 1
    },
    {
      "id": "SSG_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Assess sponsorship coverage requirements across impacted business areas and stakeholder groups.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 1
    },
    {
      "id": "SSG_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Define and document sponsor roles, responsibilities and expected sponsorship behaviours.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 1
    },
    {
      "id": "SSG_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Develop and document governance structures, decision-making routes and escalation arrangements.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 1
    },
    {
      "id": "SSG_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a sponsor coalition model with representation from impacted organisational areas.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 1
    },
    {
      "id": "SSG_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Secure commitment from identified sponsors and confirm their capacity to support the change.",
      "outcomeIds": ["SSG_O1", "SSG_O2"],
      "readinessScore": 1
    },
    {
      "id": "SSG_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Assess stakeholder confidence in leadership and sponsorship support for the change.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 1
    },
    {
      "id": "SSG_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify gaps in sponsor visibility, influence, commitment and representation.",
      "outcomeIds": ["SSG_O1", "SSG_O2"],
      "readinessScore": 1
    },
    {
      "id": "SSG_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate confirmed sponsorship arrangements and the role sponsors will play in the change.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 1
    },
    {
      "id": "SSG_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Establish initial sponsor engagement activities with impacted stakeholder groups.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 1
    },
    {
      "id": "SSG_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Obtain formal approval of governance arrangements, accountability structures and sponsor responsibilities.",
      "outcomeIds": ["SSG_O1"],
      "readinessScore": 2
    },
    {
      "id": "SSG_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Establish governance forums with defined terms of reference and decision-making authority.",
      "outcomeIds": ["SSG_O1", "SSG_O3"],
      "readinessScore": 2
    },
    {
      "id": "SSG_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Define and socialise escalation routes for risks, issues and decisions.",
      "outcomeIds": ["SSG_O3"],
      "readinessScore": 2
    },
    {
      "id": "SSG_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Training & Learning",
      "action": "Provide sponsor coaching on sponsorship responsibilities, leadership behaviours and resistance management.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "SSG_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Develop a sponsor engagement and communication approach.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "SSG_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Ensure sponsors regularly communicate the purpose and importance of the change.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "SSG_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Create opportunities for sponsors to engage directly with stakeholders.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "SSG_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Establish mechanisms to gather feedback on sponsor visibility and effectiveness.",
      "outcomeIds": ["SSG_O2", "SSG_O3"],
      "readinessScore": 2
    },
    {
      "id": "SSG_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use sponsors to address stakeholder concerns and demonstrate leadership commitment.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "SSG_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Begin using sponsors to reinforce desired behaviours and messages.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 2
    },
    {
      "id": "SSG_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Use governance forums routinely to review progress, risks, decisions and benefits.",
      "outcomeIds": ["SSG_O3"],
      "readinessScore": 3
    },
    {
      "id": "SSG_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Monitor sponsorship effectiveness using agreed indicators and feedback.",
      "outcomeIds": ["SSG_O2", "SSG_O3"],
      "readinessScore": 3
    },
    {
      "id": "SSG_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Review accountability and ownership to ensure responsibilities remain clear and effective.",
      "outcomeIds": ["SSG_O1", "SSG_O3"],
      "readinessScore": 3
    },
    {
      "id": "SSG_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Risk Management",
      "action": "Use governance to actively manage strategic risks, barriers and dependencies.",
      "outcomeIds": ["SSG_O3"],
      "readinessScore": 3
    },
    {
      "id": "SSG_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Ensure sponsor coalition members actively support decisions and prioritisation activities.",
      "outcomeIds": ["SSG_O2", "SSG_O3"],
      "readinessScore": 3
    },
    {
      "id": "SSG_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Maintain visible sponsor involvement throughout implementation and adoption.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 3
    },
    {
      "id": "SSG_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Use sponsor-led communications to reinforce progress, successes and key messages.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 3
    },
    {
      "id": "SSG_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Ensure sponsors respond visibly to stakeholder feedback and emerging concerns.",
      "outcomeIds": ["SSG_O2", "SSG_O3"],
      "readinessScore": 3
    },
    {
      "id": "SSG_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Assess stakeholder confidence in leadership support for the change.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 3
    },
    {
      "id": "SSG_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Use sponsors to recognise progress and celebrate achievements.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 3
    },
    {
      "id": "SSG_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Embed sponsorship and governance practices into normal organisational management arrangements.",
      "outcomeIds": ["SSG_O3"],
      "readinessScore": 4
    },
    {
      "id": "SSG_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Regularly review governance effectiveness and improve decision-making processes.",
      "outcomeIds": ["SSG_O3"],
      "readinessScore": 4
    },
    {
      "id": "SSG_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Maintain an active sponsor coalition that supports organisational priorities and future change.",
      "outcomeIds": ["SSG_O2", "SSG_O3"],
      "readinessScore": 4
    },
    {
      "id": "SSG_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Use learning from previous changes to strengthen sponsorship and governance approaches.",
      "outcomeIds": ["SSG_O3"],
      "readinessScore": 4
    },
    {
      "id": "SSG_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Ensure senior leaders continue to visibly champion change as part of routine leadership practice.",
      "outcomeIds": ["SSG_O2", "SSG_O3"],
      "readinessScore": 4
    },
    {
      "id": "SSG_044",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Embed sponsor visibility into organisational culture and leadership expectations.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 4
    },
    {
      "id": "SSG_045",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Measure long-term stakeholder confidence in leadership support for change.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 4
    },
    {
      "id": "SSG_046",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Maintain regular dialogue between sponsors, leaders and stakeholder groups.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 4
    },
    {
      "id": "SSG_047",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Use sponsor-led recognition to reinforce desired organisational behaviours.",
      "outcomeIds": ["SSG_O2"],
      "readinessScore": 4
    },
    {
      "id": "SSG_048",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Demonstrate visible leadership commitment to continuous improvement and ongoing change adoption.",
      "outcomeIds": ["SSG_O2", "SSG_O3"],
      "readinessScore": 4
    }
  ]
}
`,Rs={componentId:"sponsorship",actionPrefix:"sponsorship-action",outcomePrefix:"sponsorship:outcome",fallbackOutcomes:[{id:"sponsorship:outcome:o1",text:"Clear sponsorship and governance structures are established"},{id:"sponsorship:outcome:o2",text:"Sponsors actively lead and champion the change"},{id:"sponsorship:outcome:o3",text:"Governance and sponsorship drive successful delivery"}]},Ui=$e(Gi,Rs);function Mi(n){return De(n,Rs,Ui)}const Vi=`{
  "component": { "id": "STAKEHOLDER_ENGAGEMENT_COMMS", "name": "Stakeholder Engagement & Comms" },
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
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 0
    },
    {
      "id": "SEC_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Begin discussions with leaders and teams about who may be affected by or interested in the change.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 0
    },
    {
      "id": "SEC_003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Identify high-level stakeholder groups that may influence, support or be impacted by the change.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 0
    },
    {
      "id": "SEC_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Explore initial stakeholder perspectives, expectations and concerns relating to the change.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 0
    },
    {
      "id": "SEC_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Communication",
      "category": "Communication",
      "action": "Begin communicating the purpose of the change and the importance of stakeholder involvement.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 0
    },
    {
      "id": "SEC_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Gain initial agreement that stakeholder engagement and communication activities will be required.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 0
    },
    {
      "id": "SEC_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Identify potential communication challenges, risks and opportunities.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 0
    },
    {
      "id": "SEC_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous stakeholder engagement and communication activities.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 0
    },
    {
      "id": "SEC_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify and document stakeholders likely to influence, support, be affected by or be impacted by the change.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 1
    },
    {
      "id": "SEC_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess stakeholder influence, interest, commitment, capability and degree of impact.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 1
    },
    {
      "id": "SEC_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Segment stakeholders into defined groups with common characteristics, needs and engagement requirements.",
      "outcomeIds": ["SEC_O1"],
      "readinessScore": 1
    },
    {
      "id": "SEC_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Conduct structured engagement activities to understand stakeholder perspectives, expectations and concerns.",
      "outcomeIds": ["SEC_O1", "SEC_O2"],
      "readinessScore": 1
    },
    {
      "id": "SEC_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Document stakeholder concerns, opportunities, communication preferences and support needs.",
      "outcomeIds": ["SEC_O1", "SEC_O2"],
      "readinessScore": 1
    },
    {
      "id": "SEC_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a structured stakeholder engagement and communications approach.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 1
    },
    {
      "id": "SEC_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Define stakeholder engagement objectives, communication objectives and desired outcomes.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 1
    },
    {
      "id": "SEC_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Develop stakeholder-focused messages that explain the change consistently and appropriately.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 1
    },
    {
      "id": "SEC_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "Assess dependencies between engagement activities and other change workstreams.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 1
    },
    {
      "id": "SEC_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Define sponsorship, accountability and governance arrangements for stakeholder engagement and communications.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 1
    },
    {
      "id": "SEC_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Implement targeted communications tailored to different stakeholder groups.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 2
    },
    {
      "id": "SEC_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Implement stakeholder engagement activities using appropriate channels and methods.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 2
    },
    {
      "id": "SEC_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Provide opportunities for stakeholders to participate, contribute and influence aspects of the change.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 2
    },
    {
      "id": "SEC_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Ensure communications remain timely, relevant and aligned to programme developments.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 2
    },
    {
      "id": "SEC_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Establish mechanisms for gathering stakeholder feedback and engagement insight.",
      "outcomeIds": ["SEC_O2", "SEC_O3"],
      "readinessScore": 2
    },
    {
      "id": "SEC_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Review stakeholder engagement progress through governance mechanisms.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 2
    },
    {
      "id": "SEC_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Define measures to assess communication reach, engagement levels and stakeholder understanding.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 2
    },
    {
      "id": "SEC_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "Coordinate engagement activities with communications, learning, readiness and adoption activities.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 2
    },
    {
      "id": "SEC_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a detailed stakeholder engagement and communications plan.",
      "outcomeIds": ["SEC_O2", "SEC_O3"],
      "readinessScore": 2
    },
    {
      "id": "SEC_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Equip sponsors, managers and change agents with communication materials and engagement guidance.",
      "outcomeIds": ["SEC_O2"],
      "readinessScore": 2
    },
    {
      "id": "SEC_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Monitor stakeholder engagement levels, sentiment and communication effectiveness.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "SEC_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Respond to stakeholder concerns, questions and emerging issues in a timely manner.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "SEC_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Adapt communications using stakeholder feedback and implementation experience.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "SEC_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use stakeholder representatives, champions and networks to strengthen engagement activity.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "SEC_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Assess stakeholder understanding, involvement and support for the change.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "SEC_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Review engagement effectiveness and communication performance through governance forums.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "SEC_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Refine engagement and communication approaches using evidence, insight and lessons learned.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "SEC_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "Align engagement activities with implementation, adoption and readiness priorities.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "SEC_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Use engagement and communication metrics to inform planning and decision-making.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "SEC_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Promote key successes, achievements and progress through communication channels.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 3
    },
    {
      "id": "SEC_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Maintain continuous engagement with stakeholders beyond implementation.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 4
    },
    {
      "id": "SEC_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Ensure communications continue to support adoption, optimisation and continuous improvement.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 4
    },
    {
      "id": "SEC_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Measure long-term stakeholder confidence, advocacy and engagement.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 4
    },
    {
      "id": "SEC_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Use organisational learning to continuously improve engagement and communication approaches.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 4
    },
    {
      "id": "SEC_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Embed effective engagement and communication practices into organisational change standards.",
      "outcomeIds": ["SEC_O3"],
      "readinessScore": 4
    }
  ]
}
`,Ps={componentId:"stakeholder",actionPrefix:"stakeholder-action",outcomePrefix:"stakeholder:outcome",fallbackOutcomes:[{id:"stakeholder:outcome:o1",text:"Stakeholders have been identified, analysed and prioritised"},{id:"stakeholder:outcome:o2",text:"Stakeholders are actively engaged and informed"},{id:"stakeholder:outcome:o3",text:"Engagement and communications support successful adoption"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Reinforcement:"People Experience and Culture"}},Hi=$e(Vi,Ps);function Wi(n){return De(n,Ps,Hi)}const qi=`{
  "component": { "id": "TRANSFER_TO_BAU", "name": "Transfer to BAU" },
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
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 0
    },
    {
      "id": "BAU_002",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "Begin discussions with operational leaders regarding future ownership and sustainment responsibilities.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 0
    },
    {
      "id": "BAU_0003",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Identify areas of the change that will require ongoing operational management after implementation.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 0
    },
    {
      "id": "BAU_004",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Explore operational stakeholder views regarding long-term ownership and support requirements.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 0
    },
    {
      "id": "BAU_005",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Governance",
      "category": "Governance",
      "action": "Secure initial agreement that transition-to-BAU planning should form part of the change approach.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 0
    },
    {
      "id": "BAU_006",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Communication",
      "category": "Communication",
      "action": "Begin raising awareness of future operational ownership and sustainment expectations.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 0
    },
    {
      "id": "BAU_007",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Identify potential capability, resource and support requirements needed after programme closure.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 0
    },
    {
      "id": "BAU_008",
      "fromStatus": "Not Started",
      "toStatus": "Emerging",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Review lessons learned from previous transitions to business-as-usual arrangements.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 0
    },
    {
      "id": "BAU_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Identify and confirm future operational owners for the change, associated processes and ongoing outcomes.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 1
    },
    {
      "id": "BAU_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Document activities, responsibilities, controls and measures requiring transition into business-as-usual management.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 1
    },
    {
      "id": "BAU_011",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Assess operational readiness and capability to assume ownership of the change.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 1
    },
    {
      "id": "BAU_012",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Assess dependencies, assumptions and constraints that could affect transition to BAU.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 1
    },
    {
      "id": "BAU_013",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Develop a structured transition and BAU transfer approach.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 1
    },
    {
      "id": "BAU_014",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Engage future operational owners to validate expectations, responsibilities and support requirements.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 1
    },
    {
      "id": "BAU_015",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess capability, resource, knowledge and support gaps affecting transition readiness.",
      "outcomeIds": ["BAU_O1", "BAU_O2"],
      "readinessScore": 1
    },
    {
      "id": "BAU_016",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate proposed ownership, accountability and sustainment expectations.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 1
    },
    {
      "id": "BAU_017",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Governance",
      "category": "Governance",
      "action": "Design future governance arrangements for post-implementation operational management.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 1
    },
    {
      "id": "BAU_018",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Define operational measures, performance indicators and reporting requirements for post-transition management.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 1
    },
    {
      "id": "BAU_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Formally assign ownership for processes, benefits, measures and sustainment activities.",
      "outcomeIds": ["BAU_O1"],
      "readinessScore": 2
    },
    {
      "id": "BAU_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Develop a detailed transition-to-BAU plan.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 2
    },
    {
      "id": "BAU_021",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Plan completion of outstanding dependencies required for transition.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 2
    },
    {
      "id": "BAU_022",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Identify and manage risks associated with operational handover and programme closure.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 2
    },
    {
      "id": "BAU_023",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Governance",
      "category": "Governance",
      "action": "Define exit criteria and readiness criteria for transition to BAU.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 2
    },
    {
      "id": "BAU_024",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Prepare operational teams to manage and support the change without programme intervention.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 2
    },
    {
      "id": "BAU_025",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Transfer operational knowledge, guidance and support resources to BAU teams.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 2
    },
    {
      "id": "BAU_026",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Process & Sustainment",
      "category": "Implementation",
      "action": "Integrate new processes, measures and responsibilities into operational procedures.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 2
    },
    {
      "id": "BAU_027",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Measurement & Evaluation",
      "category": "Testing & Validation",
      "action": "Validate that operational teams can manage and support the change independently.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 2
    },
    {
      "id": "BAU_028",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Governance",
      "category": "Governance",
      "action": "Review transition progress through governance and assurance processes.",
      "outcomeIds": ["BAU_O2"],
      "readinessScore": 2
    },
    {
      "id": "BAU_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Governance",
      "category": "Governance",
      "action": "Transfer operational governance responsibilities from programme structures to BAU structures.",
      "outcomeIds": ["BAU_O2", "BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "BAU_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Implementation",
      "category": "Implementation",
      "action": "Complete formal handover of ownership, controls and reporting arrangements.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "BAU_031",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Monitor operational ownership and effectiveness following handover.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "BAU_032",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Risk Management",
      "category": "Risk Management",
      "action": "Monitor transition risks and address issues emerging after handover.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "BAU_033",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather feedback from operational owners regarding transition effectiveness.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "BAU_034",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Implementation",
      "action": "Operate new governance, support and reporting arrangements through BAU structures.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "BAU_035",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Review benefits, adoption and performance measures under operational ownership.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "BAU_036",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Design",
      "category": "Design",
      "action": "Refine BAU operating arrangements using post-handover experience.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "BAU_037",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Dependency Management",
      "category": "Dependency Management",
      "action": "Close, transfer or manage remaining programme dependencies.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "BAU_038",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Support operational leaders in sustaining desired behaviours and outcomes.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 3
    },
    {
      "id": "BAU_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Governance",
      "category": "Governance",
      "action": "Embed ownership of change outcomes within routine operational governance.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 4
    },
    {
      "id": "BAU_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Monitor long-term operational performance, benefits and sustainment outcomes.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 4
    },
    {
      "id": "BAU_041",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Implementation",
      "category": "Implementation",
      "action": "Ensure the change is managed entirely through business-as-usual operational processes.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 4
    },
    {
      "id": "BAU_042",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Design",
      "category": "Design",
      "action": "Use operational learning to improve future transition-to-BAU approaches.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 4
    },
    {
      "id": "BAU_043",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Promote a culture where change ownership naturally transitions into operational management.",
      "outcomeIds": ["BAU_O3"],
      "readinessScore": 4
    }
  ]
}
`,Ds={componentId:"transfer_bau",actionPrefix:"transfer-bau-action",outcomePrefix:"transfer-bau:outcome",fallbackOutcomes:[{id:"transfer-bau:outcome:o1",text:"Operational ownership and accountability have been established"},{id:"transfer-bau:outcome:o2",text:"Business-as-usual capabilities and support arrangements are in place"},{id:"transfer-bau:outcome:o3",text:"The change is fully embedded within normal operational management"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Process and Sustainment":"Process and Sustainment","Planning and Risk":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Skills and Behaviour":"Process and Sustainment",Governance:"Strategic Direction and Leadership","Measurement and Evaluation":"Process and Sustainment",Implementation:"Process and Sustainment","Risk Management":"Process and Sustainment",Design:"Process and Sustainment","Dependency Management":"Process and Sustainment",Reinforcement:"Process and Sustainment"}},Ki=$e(qi,Ds);function zi(n){return De(n,Ds,Ki)}const Yi=`{
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
`,$s={componentId:"vision",actionPrefix:"vision-action",outcomePrefix:"vision:outcome",fallbackOutcomes:[{id:"vision:outcome:o1",text:"A compelling future state has been defined"},{id:"vision:outcome:o2",text:"The vision is understood and shared"},{id:"vision:outcome:o3",text:"The vision is visible and guides the change"}]},Ji=$e(Yi,$s);function Xi(n){return De(n,$s,Ji)}const Mt="nhs-digital-adoption-user-settings",Vt="nhs-digital-adoption-report-reminder-dismissed",Ht="nhs-digital-adoption-engagement",Vn="nhs-digital-adoption-onboarding-seen",Wt="nhs-digital-adoption-current-user-id",qt="Default",Qi=5*1024*1024,Zi=new Set(["application/json","text/json"]),er="Unknown user",nr=["#005eb8","#003366","#009b8a","#6c28d9","#059669","#dc2626"],tr={name:"",preferences:"",themeColor:"#005eb8",profileImageDataUrl:"",darkMode:!1,colorAccessibilityMode:"standard",phaseFocusMode:"auto",manualPhaseFocus:1},sr={xp:0,level:1,checkIns:{},emailDraftOpens:0,highlightLayoutSaves:0,onTimeFinalisations:0,lateFinalisations:0};function ar(n){return{...n,linkedTargets:(n.linkedTargets||[]).map(t=>({componentId:t.componentId,lens:t.lens}))}}function or(n,t){return`${n}:${t}`}function ir(n){return n.orgProfile.trustName||n.orgProfile.projectName?!1:!Object.values(n.currentDraft).some(t=>Object.values(t).some(a=>a.score>0))}function Ye(n){return Is(zi(vi(Oi(_i(ti(li(Fi(Pi(Wi(mi(Ti(bi(pi(Zo(Mi(oi(Xi(n))))))))))))))))))}function rr(n){return n.trim()||er}function lr(n,t,a){var i;const s=Ys[n];return((i=s==null?void 0:s[t])==null?void 0:i[a])||xt[a]||xt[0]}function cr(n=new Date){const t=String(n.getMonth()+1).padStart(2,"0");return`${n.getFullYear()}-${t}`}function dr(n=new Date){return new Date(n.getFullYear(),n.getMonth()-1,1).toLocaleString("en-GB",{month:"short",year:"numeric"})}function mr(n,t,a){return["Monthly Adoption Reporting Reminder","","Organisation",`${t||"Unconfigured Trust"}${a?` / ${a}`:""}`,"","Action Required",`Please finalise the ${n} adoption month if it has not already been captured.`,"","Attached","Point-in-time JSON report export generated from the latest working draft.","","Next Step","Review, confirm finalisation status, and circulate to the team."].join(`
`)}function ur(n){const t=new TextEncoder().encode(n);let a="";return t.forEach(s=>{a+=String.fromCharCode(s)}),window.btoa(a)}function gr(n,t=76){const a=[];for(let s=0;s<n.length;s+=t)a.push(n.slice(s,s+t));return a.join(`\r
`)}function Jn(n=new Date){return n.toISOString().slice(0,10)}function pr(n=new Date){const t=n.getDate(),a=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();return t>=a-6}function hr(n=new Date){return n.toLocaleString("en-GB",{month:"short",year:"numeric"})}function Ts(n){return Math.max(1,Math.min(12,Math.floor(n/120)+1))}function pn(n,t){const a=n.xp+t;return{...n,xp:a,level:Ts(a)}}function fr(n,t){const a=n*30+Math.min(t,20)*4;return a>=170?"S":a>=130?"A":a>=95?"B":a>=60?"C":a>=30?"D":"E"}function br(n,t=new Date){let a=0;const s=new Date(t);let i=Jn(s);for(;n[i];)a+=1,s.setDate(s.getDate()-1),i=Jn(s);return a}function xr(n){const t=window.prompt(`Phase ${n} has changed. Enter delivery readiness grade (${Cn.join("/")}).`,"C");if(!t)return null;const a=t.trim().toUpperCase();if(!Cn.includes(a))return window.alert(`Invalid competence grade. Use one of ${Cn.join(", ")}.`),null;const s=window.prompt(`Enter confidence score for Phase ${n} (${Nn.join("-")}, where 1 is low and 5 is very high).`,"3");if(!s)return null;const i=Number(s.trim());return Nn.includes(i)?{competence:a,confidence:i}:(window.alert(`Invalid confidence score. Use a number from ${Nn.join(" to ")}.`),null)}function Ir(){var ut,gt;const n=Xn,t=g.useMemo(()=>[...Ca],[]),[a,s]=g.useState("dashboard"),[i,h]=g.useState(n[0].id),[p,m]=g.useState(()=>typeof window>"u"?!0:window.innerWidth>=1024),[o,C]=g.useState(()=>{var q,T,z,W,ie,we,Ce,re;const d=bt.getInstance();d.loadFromWindow();let x={};try{const Ne=Qe(Dt);x=rt(En(Ne))}catch(Ne){console.warn("Ignoring invalid persisted adoption data.",Ne)}const D=_n({view:"dashboard",orgProfile:(x==null?void 0:x.orgProfile)||((q=d.adoption)==null?void 0:q.orgProfile),currentDraft:(x==null?void 0:x.currentDraft)||((T=d.adoption)==null?void 0:T.currentDraft),objectives:(x==null?void 0:x.objectives)||((z=d.adoption)==null?void 0:z.objectives),suppressedAutoActions:(x==null?void 0:x.suppressedAutoActions)||((W=d.adoption)==null?void 0:W.suppressedAutoActions),auditLog:(x==null?void 0:x.auditLog)||((ie=d.adoption)==null?void 0:ie.auditLog),history:(x==null?void 0:x.history)||((we=d.adoption)==null?void 0:we.history),phaseOverrides:(x==null?void 0:x.phaseOverrides)||((Ce=d.adoption)==null?void 0:Ce.phaseOverrides),pathwayChecks:(x==null?void 0:x.pathwayChecks)||((re=d.adoption)==null?void 0:re.pathwayChecks)});return D.orgProfile.cstId||(D.orgProfile={...D.orgProfile,cstId:vt()}),Ye(D)}),[l,c]=g.useState({}),[u,b]=g.useState(""),[L,V]=g.useState(()=>Qe(Wt)||""),[j,B]=g.useState(null),[y,Y]=g.useState(()=>{const d=Qe(Mt);return{...tr,...d}}),[N,F]=g.useState(()=>{const d=Qe(Ht);return{...sr,...d,level:Ts((d==null?void 0:d.xp)||0),checkIns:(d==null?void 0:d.checkIns)||{}}}),G=Sn.useRef(null),ge=Sn.useRef(null),[le,me]=g.useState(""),ee=Sn.useRef(null),ue=g.useMemo(()=>cr(),[]),$=g.useMemo(()=>Jn(),[]),[J,xe]=g.useState(()=>Qe(Vt)||{}),[Se,_]=g.useState(()=>!!Qe(Vn)),[ne,X]=g.useState(()=>!Qe(Vn)),[Ae,Ie]=g.useState(!0),[v,E]=g.useState([]),[fe,de]=g.useState(!1),Q=Sn.useRef({}),H=g.useCallback(()=>{X(!1),Se||(_(!0),ln(Vn,!0))},[Se]),te=g.useMemo(()=>{const d=new Date,x=dr(d),D=d.getDate()===1,q=o.history.some(T=>T.monthLabel===x);return{previousMonthLabel:x,isFirstDayOfMonth:D,hasFinalisedPreviousMonth:q,shouldNotify:D&&!q}},[o.history]),[f,A]=g.useState("test@test.com"),[I,k]=g.useState(""),[R,Ee]=g.useState(""),be=hr(),Oe=pr(),je=g.useCallback((d,x)=>(o.currentDraft[d]||(o.currentDraft[d]={}),o.currentDraft[d][x]||(o.currentDraft[d][x]=Ln()),o.currentDraft[d][x]),[o]),ce=g.useMemo(()=>{const d=yt(o,n);return{...d,nextSteps:d.nextSteps.map(x=>({...x,toolkitLinks:zt(qt,x.componentId,"inputs").slice(0,3)}))}},[o]),en=y.phaseFocusMode==="manual"&&y.manualPhaseFocus?y.manualPhaseFocus:ce.currentPhase,S=pa(o,d=>Wn(d)||n[0],je).sort((d,x)=>{const D=d.action.owner.localeCompare(x.action.owner);return D!==0?D:d.component.localeCompare(x.component)});g.useEffect(()=>{ln(Dt,o);const d=bt.getInstance();d.adoption={orgProfile:o.orgProfile,currentDraft:o.currentDraft,objectives:o.objectives,suppressedAutoActions:o.suppressedAutoActions,auditLog:o.auditLog,history:o.history,phaseOverrides:o.phaseOverrides,pathwayChecks:o.pathwayChecks}},[o]),g.useEffect(()=>{ln(Mt,y)},[y]),g.useEffect(()=>{ln(Wt,L)},[L]),g.useEffect(()=>{ln(Ht,N)},[N]),g.useEffect(()=>{ln(Vt,J)},[J]),g.useEffect(()=>{k(`Action required: finalise ${te.previousMonthLabel} adoption report`),Ee(mr(te.previousMonthLabel,o.orgProfile.trustName,o.orgProfile.projectName||""))},[te.previousMonthLabel,o.orgProfile.projectName,o.orgProfile.trustName]),g.useEffect(()=>{a==="dashboard"&&G.current&&setTimeout(()=>{var D,q,T;const d=(D=G.current)==null?void 0:D.querySelector("#adoption-radar-chart");if(d){const z=ua(o,t,n,je);ft(d,z)}const x=(q=G.current)==null?void 0:q.querySelector("#adoption-component-radar-chart");if(x){const z=ga(n,je,en);ft(x,z,{scales:{r:{min:0,max:5,ticks:{display:!0,stepSize:1,backdropColor:"transparent"}}}})}if(o.history.length>0){const z=(T=G.current)==null?void 0:T.querySelector("#adoption-line-chart");if(z){const W={labels:o.history.map(ie=>ie.monthLabel),datasets:[{label:"Adoption Score",data:o.history.map(ie=>ie.overallPercentage||0),borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",fill:!0,tension:.4}]};Ks(z,W)}}},100)},[a,o,je,t,n,en]),g.useEffect(()=>{const d=()=>{m(window.innerWidth>=1024)};return d(),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}},[]),g.useEffect(()=>{typeof document<"u"&&(document.documentElement.dataset.nhsThemeMode=y.darkMode?"dark":"light")},[y.darkMode]),g.useEffect(()=>{var x;const d=a==="assessment"?`component:${i}`:`view:${a}`;(x=Q.current[d])==null||x.scrollIntoView({block:"nearest",behavior:"smooth"})},[i,a]);const U=()=>typeof window>"u"?!1:window.innerWidth<1024,K=g.useCallback(()=>{var d;(d=ge.current)==null||d.scrollTo({top:0,behavior:"auto"})},[]),se=g.useCallback(d=>{s(x=>x===d?x:(E(D=>[x,...D].slice(0,20)),d)),U()&&m(!1)},[]),ve=d=>{se(d)},ye=g.useCallback(()=>{E(d=>{const[x,...D]=d;return x?(s(x),window.innerWidth<1024&&m(!1),D):(window.location.hash="#/",d)})},[]),pe=g.useCallback(d=>{Wn(d)&&(h(d),se("assessment"),K())},[se,K]);g.useEffect(()=>{K()},[K,a]);function ae(d,x){if(!x.length)return d.auditLog;const D=rr(y.name||""),q=x.map(T=>yo({actor:D,eventType:T.eventType,entityType:T.entityType,entityId:T.entityId,summary:T.summary,trustName:T.trustName??d.orgProfile.trustName,projectName:T.projectName??d.orgProfile.projectName,componentId:T.componentId,lens:T.lens,reason:T.reason,before:T.before,after:T.after,source:T.source,importedAt:T.importedAt}));return On([...d.auditLog||[],...q])}const Be=g.useCallback((d,x,D)=>{C(q=>{var Ce;const T=((Ce=q.currentDraft[d])==null?void 0:Ce[x])||Ln(),z={...q,currentDraft:{...q.currentDraft,[d]:{...q.currentDraft[d],[x]:Zt(D)}}},W=[];T.score!==D.score&&W.push({eventType:"entry-score-updated",entityType:"entry",entityId:`${d}:${x}`,summary:`Updated readiness score for ${d} / ${x}: ${T.score} -> ${D.score}`,componentId:d,lens:x,before:{score:T.score},after:{score:D.score},source:"local"}),(T.justification||"")!==(D.justification||"")&&W.push({eventType:"entry-justification-updated",entityType:"entry",entityId:`${d}:${x}`,summary:`Updated justification for ${d} / ${x}`,componentId:d,lens:x,before:{justification:T.justification||""},after:{justification:D.justification||""},source:"local"}),(T.evidence||"")!==(D.evidence||"")&&W.push({eventType:"entry-evidence-updated",entityType:"entry",entityId:`${d}:${x}`,summary:`Updated evidence for ${d} / ${x}`,componentId:d,lens:x,before:{evidence:T.evidence||""},after:{evidence:D.evidence||""},source:"local"});const ie=new Map(T.actions.map(re=>[re.id,re]));return D.actions.forEach(re=>{const Ne=ie.get(re.id);if(!Ne){W.push({eventType:"action-created",entityType:"action",entityId:re.id,summary:`Created action in ${d} / ${x}`,componentId:d,lens:x,after:{text:re.text,status:re.status,owner:re.owner,actionType:re.actionType},source:"local"});return}const on=JSON.stringify({text:Ne.text,status:Ne.status,owner:Ne.owner,actionType:Ne.actionType,notes:Ne.notes,dueDate:Ne.dueDate,startDate:Ne.startDate,evidence:Ne.evidence}),We=JSON.stringify({text:re.text,status:re.status,owner:re.owner,actionType:re.actionType,notes:re.notes,dueDate:re.dueDate,startDate:re.startDate,evidence:re.evidence});on!==We&&W.push({eventType:"action-updated",entityType:"action",entityId:re.id,summary:`Updated action in ${d} / ${x}`,componentId:d,lens:x,before:{text:Ne.text,status:Ne.status,owner:Ne.owner,actionType:Ne.actionType},after:{text:re.text,status:re.status,owner:re.owner,actionType:re.actionType},source:"local"})}),{...Ye(z),auditLog:ae(q,W)}})},[ae]),Ge=g.useCallback((d,x)=>{C(D=>{const q=D.objectives[d]||[],T={...D,objectives:{...D.objectives,[d]:x}};return JSON.stringify(q)!==JSON.stringify(x)?{...T,auditLog:ae(D,[{eventType:"objectives-updated",entityType:"objective",entityId:d,summary:`Updated component outcomes for ${d}`,componentId:d,before:{objectiveCount:q.length},after:{objectiveCount:x.length},source:"local"}])}:T})},[ae]),ke=g.useCallback(d=>{const x=zs(o.orgProfile);if(x.isValid)return!0;const D=x.errors.map(q=>`- ${q.message}`).join(`
`);return window.confirm(`${d} has CST warnings:

${D}

Continue anyway?`)},[o.orgProfile]),r=g.useCallback(d=>{me(d)},[]),w=g.useCallback(()=>{if(!ke("Export JSON"))return;const x=$t(o);wn(`adoption-assessment-${(o.orgProfile.trustName||"export").replace(/\s+/g,"_")}.json`,JSON.stringify(x,null,2),"application/json"),r("Assessment export downloaded.")},[r,ke,o]),O=g.useCallback(()=>{var d;(d=ee.current)==null||d.click()},[]),Z=g.useCallback(async d=>{var T,z,W,ie;const x=(T=d.target.files)==null?void 0:T[0];if(!x)return;const D=x.name.toLowerCase().endsWith(".json"),q=!x.type||Zi.has(x.type);if(!D||!q){r("Import failed. Please choose a valid JSON file."),window.alert("Import failed. Please choose a valid JSON file."),d.target.value="";return}if(x.size>Qi){r("Import failed. The selected file is larger than 5 MB."),window.alert("Import failed. The selected file is larger than 5 MB."),d.target.value="";return}try{const we=await x.text(),Ce=En(JSON.parse(we)),re=()=>{C(gn=>{const ze=Ye(Tt(Ce,gn));return ze.orgProfile.cstId||(ze.orgProfile={...ze.orgProfile,cstId:vt()}),{...ze,auditLog:ae(ze,[{eventType:"data-imported",entityType:"system",summary:`Imported assessment data from ${x.name}`,after:{fileName:x.name},source:"local"}])}}),s("dashboard"),r("Assessment import complete. Dashboard updated.")};if(ir(o)){re();return}const Ne=(z=Ce.orgProfile)==null?void 0:z.cstId,on=o.orgProfile.cstId,We=o.orgProfile.projectName||o.orgProfile.trustName||"your currently loaded programme",un=((W=Ce.orgProfile)==null?void 0:W.projectName)||((ie=Ce.orgProfile)==null?void 0:ie.trustName)||x.name;if(Ne&&Ne!==on){if(!window.confirm(`"${un}" looks like a different programme than "${We}".

Importing will replace everything currently loaded. Continue?`)){r("Import cancelled.");return}re();return}if(!Ne&&!window.confirm(`"${un}" doesn't carry a programme ID (it may predate this feature).

Click OK to compare it against "${We}" and merge item by item, or Cancel to load it as a different programme (replace everything).`)){re();return}const rn=Jo(o,Ce);if(!rn.hasConflicts){C(gn=>{const ze=Ye(Ut(gn,Ce,{}));return{...ze,auditLog:ae(ze,[{eventType:"data-imported",entityType:"system",summary:rn.autoMergeSummary.length?`Merged import from ${x.name} (${rn.autoMergeSummary.join(", ")})`:`Imported ${x.name} — no changes (already up to date)`,after:{fileName:x.name},source:"local"}])}}),s("dashboard"),r(rn.autoMergeSummary.length?`Merged automatically: ${rn.autoMergeSummary.join(", ")}.`:"Already up to date — nothing to import.");return}B({file:x,parsed:Ce,report:rn})}catch{r("Import failed. Please verify the file contents."),window.alert("Unable to import adoption assessment. Please verify the file contents.")}finally{d.target.value=""}},[r,ae,o]),oe=g.useCallback(d=>{if(!j)return;const{file:x,parsed:D}=j,q=Object.keys(d).length;C(T=>{const z=Ye(Ut(T,D,d));return{...z,auditLog:ae(z,[{eventType:"data-imported",entityType:"system",summary:`Merged import from ${x.name} (${q} item(s) resolved)`,after:{fileName:x.name},source:"local"}])}}),B(null),s("dashboard"),r("Import merged into current programme.")},[r,ae,j]),Te=g.useCallback(()=>{B(null),r("Import cancelled.")},[r]),Re=g.useCallback(d=>{const x=!!(d!=null&&d.replaceExisting);if(!Oe){window.alert("Finalise Month is available during the final week of each month.");return}if(!ke("Finalise Month"))return;const q=o.history.length>0?yt({...o,currentDraft:o.history[o.history.length-1].data},n).currentPhase:1;if(ce.currentPhase>q){const z=xr(ce.currentPhase);if(!z){window.alert("Phase progression cancelled. Confidence and competence self-assessment is required when readiness phase changes.");return}const W=[];if(n.filter(ie=>ie.phase<ce.currentPhase).forEach(ie=>{ie.lenses.forEach(we=>{var re,Ne;const Ce=(re=o.currentDraft[ie.id])==null?void 0:re[we];(!Ce||Ce.score<=0||!((Ne=Ce.justification)!=null&&Ne.trim()))&&W.push(`${ie.label} / ${we}`)})}),W.length>0){const ie=window.prompt(`You're progressing from Phase ${q} to Phase ${ce.currentPhase}, but ${W.length} item(s) are incomplete. Please provide a justification.`);if(!ie||!ie.trim()){window.alert("Phase progression cancelled. A justification is required when prior phase items are missing.");return}C(we=>({...{...we,phaseOverrides:{...we.phaseOverrides,[`phase-progression-${Date.now()}`]:ie.trim()},orgProfile:{...we.orgProfile,cst:{...we.orgProfile.cst,phaseCapability:{...we.orgProfile.cst.phaseCapability,[ce.currentPhase]:{...z,assessedAt:new Date().toISOString(),reason:"phase-change"}}}}},auditLog:ae(we,[{eventType:"profile-updated",entityType:"profile",summary:`Updated phase capability for phase ${ce.currentPhase}`,after:{phase:ce.currentPhase,competence:z.competence,confidence:z.confidence,rationale:ie.trim()},source:"local"}])}))}else C(ie=>({...{...ie,orgProfile:{...ie.orgProfile,cst:{...ie.orgProfile.cst,phaseCapability:{...ie.orgProfile.cst.phaseCapability,[ce.currentPhase]:{...z,assessedAt:new Date().toISOString(),reason:"phase-change"}}}}},auditLog:ae(ie,[{eventType:"profile-updated",entityType:"profile",summary:`Updated phase capability for phase ${ce.currentPhase}`,after:{phase:ce.currentPhase,competence:z.competence,confidence:z.confidence},source:"local"}])}))}const T=Lt(o.currentDraft,ce.overallPct);C(z=>{const W=x?z.history.map(we=>we.monthLabel===T.monthLabel?T:we):[...z.history,T];return{...{...z,history:W},auditLog:ae(z,[{eventType:"month-finalized",entityType:"history",entityId:T.monthLabel,summary:`${x?"Re-finalized":"Finalized"} monthly snapshot for ${T.monthLabel}`,after:{monthLabel:T.monthLabel,overallPercentage:T.overallPercentage},source:"local"}])}}),F(z=>pn(z,25)),s("dashboard")},[ae,n,ke,Oe,ce.currentPhase,ce.overallPct,o,o.currentDraft,o.history]),_e=g.useCallback(()=>{if(!ke("Finalise Prior Month"))return;const x=te.previousMonthLabel;if(o.history.some(W=>W.monthLabel===x)){window.alert(`${x} has already been finalised.`);return}const q=new Date;q.setMonth(q.getMonth()-1);const T=Lt(o.currentDraft,ce.overallPct,q);C(W=>({...{...W,history:[...W.history,T]},auditLog:ae(W,[{eventType:"prior-month-finalized",entityType:"history",entityId:T.monthLabel,summary:`Finalized prior month snapshot for ${T.monthLabel}`,after:{monthLabel:T.monthLabel,overallPercentage:T.overallPercentage},source:"local"}])}));const z=new Date().getDate()===1;F(W=>pn({...W,onTimeFinalisations:W.onTimeFinalisations+(z?1:0),lateFinalisations:W.lateFinalisations+(z?0:1)},z?45:20))},[ae,ke,ce.overallPct,te.previousMonthLabel,o.currentDraft,o.history]),Ve=g.useCallback(async()=>{try{const d=await fetch("test-data/adoption-sample.json");if(!d.ok)throw new Error(`Failed to load sample data: ${d.status}`);const x=En(await d.json());C(D=>{const q=Ye(Tt(x,D));return{...q,auditLog:ae(q,[{eventType:"example-data-loaded",entityType:"system",summary:"Loaded example assessment data",source:"local"}])}}),s("dashboard"),r("Example assessment data loaded."),U()&&m(!1)}catch(d){console.error(d),r("Unable to load example data right now."),window.alert("Unable to load example data right now. Please try again.")}},[r,ae]),nn=g.useCallback(()=>{if(!window.confirm("Warning: this will reset all assessment data (organisation profile, scores, actions, and history). If you are worried, please export your data first. Continue?"))return;const x=Ye(_n());C(x),c({}),s("dashboard"),r("Assessment data has been reset."),U()&&m(!1)},[r]),tn=g.useCallback(()=>({generatedAt:new Date().toISOString(),targetMonth:te.previousMonthLabel,finalisedPriorMonth:te.hasFinalisedPreviousMonth,report:$t(o)}),[te.hasFinalisedPreviousMonth,te.previousMonthLabel,o]),Fe=g.useCallback(()=>`adoption-point-in-time-${te.previousMonthLabel.toLowerCase().replace(/\s+/g,"-")}.json`,[te.previousMonthLabel]),Rn=g.useCallback(()=>{const d=Fe();wn(d,JSON.stringify(tn(),null,2),"application/json")},[Fe,tn]),fn=g.useCallback(()=>{const d=f.trim()||"test@test.com",x=Fe(),D=`${R}

Attachment: ${x}`,q=`mailto:${d}?subject=${encodeURIComponent(I)}&body=${encodeURIComponent(D)}`;F(T=>pn({...T,emailDraftOpens:T.emailDraftOpens+1},8)),window.location.href=q},[Fe,R,I,f]),P=g.useCallback(()=>{F(d=>d.checkIns[$]?d:pn({...d,checkIns:{...d.checkIns,[$]:!0}},10))},[$]),he=g.useCallback(()=>{F(d=>pn({...d,highlightLayoutSaves:d.highlightLayoutSaves+1},15))},[]),He=g.useCallback(()=>{const d=f.trim()||"test@test.com",x=Fe(),D=JSON.stringify(tn(),null,2),q=gr(ur(D)),T=`----nhs-adoption-reminder-${Date.now()}`,z=[`To: ${d}`,`Subject: ${I}`,"MIME-Version: 1.0",`Content-Type: multipart/mixed; boundary="${T}"`,"",`--${T}`,'Content-Type: text/plain; charset="UTF-8"',"Content-Transfer-Encoding: 8bit","",R,"",`--${T}`,`Content-Type: application/json; name="${x}"`,"Content-Transfer-Encoding: base64",`Content-Disposition: attachment; filename="${x}"`,"",q,`--${T}--`,""].join(`\r
`),W=te.previousMonthLabel.toLowerCase().replace(/\s+/g,"-");wn(`adoption-reminder-${W}.eml`,z,"message/rfc822")},[Fe,tn,R,I,f,te.previousMonthLabel]),Xe=g.useCallback(()=>{xe(d=>({...d,[ue]:!0}))},[ue]),sn=te.shouldNotify&&!J[ue],Ke=g.useMemo(()=>o.history.find(d=>d.monthLabel===be)||null,[be,o.history]),an=Oe,Pn=an?"Review and finalise monthly snapshot":"Finalise Month unlocks from the final week of each month.",bn=an?`${at} h-9 px-3 py-0 shadow-[0_3px_0_rgba(0,0,0,0.2)]`:"h-9 px-3 py-0 rounded-md border border-slate-300 bg-slate-200 text-slate-500 cursor-not-allowed",mn=an?{backgroundColor:y.themeColor}:void 0,Ue=g.useMemo(()=>{const d=Ke||(o.history.length>0?o.history[o.history.length-1]:null),x=(d==null?void 0:d.overallPercentage)||0,D=ce.overallPct-x;return{currentMonthLabel:be,baselineLabel:(d==null?void 0:d.monthLabel)||"No previous snapshot",baselineOverall:x,deltaOverall:D,assessedCount:ce.assessedCount,totalActions:ce.totalActions,completedActions:ce.completedActions}},[be,Ke,ce.assessedCount,ce.completedActions,ce.overallPct,ce.totalActions,o.history]),Dn=N.level>=3,$n=g.useMemo(()=>fr(N.onTimeFinalisations,N.emailDraftOpens),[N.emailDraftOpens,N.onTimeFinalisations]),ct=!!N.checkIns[$],Tn=g.useMemo(()=>br(N.checkIns),[N.checkIns]),Ls=g.useMemo(()=>[{id:"streak-3",name:"Steady Cadence",description:"Check in for 3 consecutive days.",unlocked:Tn>=3,progress:`${Math.min(Tn,3)}/3`},{id:"first-ontime",name:"On-Time Closer",description:"Finalise a prior month on time.",unlocked:N.onTimeFinalisations>=1,progress:`${Math.min(N.onTimeFinalisations,1)}/1`},{id:"first-save",name:"Story Builder",description:"Save your first highlight layout.",unlocked:N.highlightLayoutSaves>=1,progress:`${Math.min(N.highlightLayoutSaves,1)}/1`}],[Tn,N.highlightLayoutSaves,N.onTimeFinalisations]),Bs=g.useCallback(d=>{if(!Dn&&!nr.includes(d.themeColor)){Y(x=>({...d,themeColor:x.themeColor}));return}Y(d)},[Dn]),Fs=d=>{let x=0,D=0,q=0,T=0;return d.lenses.forEach(z=>{var we,Ce;const W=(we=o.currentDraft[d.id])==null?void 0:we[z];W&&W.score>0&&(x++,(Ce=W.justification)!=null&&Ce.trim()&&D++);const ie=(W==null?void 0:W.actions)||[];q+=ie.length,T+=ie.filter(re=>Kt(re.status)).length}),x===0?{icon:"◯",color:"text-blue-100",label:"Not Started"}:x>D?{icon:"⚠",color:"text-red-300",label:"Missing Justification"}:x<d.lenses.length?{icon:"◐",color:"text-amber-300",label:"In Progress"}:q<=0||T<q?{icon:"◐",color:"text-amber-300",label:"In Progress"}:{icon:"✓",color:"text-green-300",label:"Completed"}},dt=o.orgProfile.trustName||"Unconfigured Trust",mt=o.orgProfile.projectName||"Unnamed Project",xn=Qt[o.orgProfile.cst.pathway],Gs=xn.split(" - ")[0]||xn;return e.jsxs("div",{className:`flex h-screen overflow-hidden ${y.darkMode?"bg-slate-900 text-slate-100":"bg-slate-50 text-slate-800"}`,children:[e.jsx("div",{role:"status","aria-live":"polite",className:"sr-only",children:le}),e.jsx("input",{ref:ee,type:"file",accept:"application/json",className:"hidden",onChange:Z}),p&&e.jsx("div",{className:"fixed inset-0 z-10 bg-slate-900/35 backdrop-blur-[1px] lg:hidden",onClick:()=>m(!1)}),e.jsxs("div",{className:`fixed inset-y-0 left-0 z-20 bg-[#005eb8] text-white flex flex-col shadow-xl overflow-hidden transition-all duration-300 ease-out lg:static lg:translate-x-0 ${p?"w-72 translate-x-0":"w-0 -translate-x-full lg:w-0"}`,style:{backgroundColor:y.themeColor},children:[e.jsxs("div",{className:"p-6 border-b border-blue-700",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold tracking-tight",children:"NHS Digital Adoption"}),e.jsxs("p",{className:"text-blue-200 text-xs mt-1 flex justify-between items-center",children:[e.jsx("span",{children:"Readiness Tracking Tool"}),e.jsx("span",{className:"opacity-80 font-medium",children:"V6.6"})]})]}),y.profileImageDataUrl?e.jsx("img",{src:y.profileImageDataUrl,alt:"Profile",className:"h-10 w-10 rounded-full border-2 border-blue-200 object-cover"}):null]}),e.jsxs("div",{className:"mt-3 rounded-md bg-blue-700 p-2 text-xs",children:[e.jsxs("div",{className:"font-semibold text-blue-100",children:["Level ",N.level," · Grade ",$n]}),e.jsxs("div",{className:"text-blue-200",children:["XP ",N.xp," · Layout saves ",N.highlightLayoutSaves]})]})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto py-4",children:[e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Intro"}),e.jsx("nav",{className:"space-y-1 mb-4",children:["introduction","cm-guide","project-details"].map(d=>e.jsx("button",{ref:x=>{Q.current[`view:${d}`]=x},onClick:()=>ve(d),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${a===d?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:d==="introduction"?"Introduction":d==="project-details"?"CST Personalisation":"Adoption Engine Onboarding"},d))}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Overview"}),e.jsx("nav",{className:"space-y-1 mb-4",children:["dashboard","action-plan","roadmap-view"].map(d=>e.jsx("button",{ref:x=>{Q.current[`view:${d}`]=x},onClick:()=>ve(d),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${a===d?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:d==="dashboard"?"Dashboard":d==="action-plan"?"Action Tracker":"Roadmap View"},d))}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Tools"}),e.jsx("nav",{className:"space-y-1 mb-8",children:["highlight-builder","audit-log","settings"].map(d=>e.jsx("button",{ref:x=>{Q.current[`view:${d}`]=x},onClick:()=>ve(d),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${a===d?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:d==="highlight-builder"?"Highlight Builder":d==="audit-log"?"Audit Log":"Settings & Profile"},d))}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Change Components"}),e.jsx("nav",{className:"space-y-1",children:n.map(d=>{const x=a==="assessment"&&i===d.id,D=Fs(d);return e.jsxs("button",{ref:q=>{Q.current[`component:${d.id}`]=q},onClick:()=>{pe(d.id)},className:`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${x?"bg-white font-medium text-[#005eb8]":`hover:bg-blue-800 ${D.color}`}`,children:[e.jsx("span",{className:"truncate pr-2",children:Js(d.label)}),e.jsx("span",{className:"text-xs flex-shrink-0",title:D.label,"aria-label":D.label,children:D.icon})]},d.id)})}),e.jsxs("div",{className:"mt-8 px-4 pb-4 border-t border-blue-800 pt-6",children:[e.jsx("div",{className:"text-[10px] font-semibold text-blue-300 uppercase tracking-wider mb-3",children:"Status Legend"}),e.jsxs("div",{className:"space-y-2 text-xs text-blue-200",children:[e.jsx("div",{children:"◯ Not Started"}),e.jsx("div",{children:"◐ In Progress"}),e.jsx("div",{children:"⚠ Missing Justification"}),e.jsx("div",{children:"✓ Completed"})]})]})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col h-screen overflow-hidden",children:[e.jsx("header",{className:`${y.darkMode?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} border-b px-3 py-2 sm:px-6 shrink-0 z-10 ${a==="introduction"?"":"shadow-sm"}`,style:{borderTop:`3px solid ${y.themeColor}`},children:e.jsxs("div",{className:"flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{className:"min-w-0 flex items-start gap-2 sm:gap-3",children:[e.jsxs("button",{onClick:()=>m(d=>!d),className:"inline-flex h-9 items-center justify-center px-3 text-white rounded-md font-semibold transition-colors shadow-sm","aria-label":p?"Collapse side navigation":"Expand side navigation",title:p?"Collapse side navigation":"Expand side navigation",style:{backgroundColor:y.themeColor},children:[e.jsx("span",{"aria-hidden":"true",className:"text-lg leading-none",children:p?"«":"»"}),e.jsx("span",{className:"sr-only",children:p?"Collapse side navigation":"Expand side navigation"})]}),e.jsx("button",{onClick:ye,disabled:v.length===0,title:v.length===0?"No previous in-app page":"Back to previous page",className:`h-9 text-sm px-3 rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${y.darkMode?"text-slate-100 hover:bg-slate-700":"text-slate-600 hover:bg-slate-100"}`,children:"← Back"}),e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-1 text-sm",children:[e.jsx("span",{className:`truncate font-semibold ${y.darkMode?"text-slate-100":"text-slate-700"}`,title:dt,children:dt}),e.jsx("span",{className:`${y.darkMode?"text-slate-300":"text-slate-400"}`,children:"/"}),e.jsx("span",{className:`truncate ${y.darkMode?"text-slate-100":"text-slate-600"}`,title:mt,children:mt})]}),e.jsxs("div",{className:"mt-1 flex min-w-0 items-center gap-1.5",children:[e.jsxs("span",{className:`truncate rounded-full px-2 py-1 text-[11px] font-semibold ${y.darkMode?"bg-slate-700 text-slate-100":"bg-slate-100 text-slate-600"}`,title:`${o.orgProfile.cst.type.toUpperCase()} · ${xn}`,children:[o.orgProfile.cst.type.toUpperCase()," ·"," ",e.jsx("span",{className:"sm:hidden",children:Gs}),e.jsx("span",{className:"hidden sm:inline",children:xn})]}),e.jsxs("span",{className:"inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-800",title:"Auto-save on",children:[e.jsx("span",{className:"inline-flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white","aria-hidden":"true",children:"✓"}),e.jsx("span",{className:"sr-only sm:not-sr-only sm:ml-1",children:"Auto-save on"})]})]})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 lg:justify-end",children:[e.jsx("button",{onClick:()=>X(!0),"aria-label":"Show introduction",title:"Show introduction",className:`text-sm w-9 h-9 flex items-center justify-center bg-white text-[#425563] border border-[#768692] hover:bg-[#f0f4f5] rounded-full font-semibold transition-colors ${ot}`,children:"?"}),e.jsx("button",{type:"button",onClick:()=>{window.location.hash="#/"},"aria-label":"Go to home page",title:"Go to home page",className:`${Je} h-9 w-16 px-6 py-0 inline-flex items-center justify-center`,children:"Home"}),e.jsx("button",{onClick:O,className:`${Je} h-9 px-3 py-0`,children:"Import"}),e.jsxs("button",{onClick:w,className:`${Je} h-9 px-3 py-0`,children:[e.jsx("span",{className:"sm:hidden",children:"Export"}),e.jsx("span",{className:"hidden sm:inline",children:"Export JSON"})]}),e.jsx("span",{className:"inline-flex",title:Pn,children:e.jsxs("button",{onClick:()=>de(!0),disabled:!an,"aria-label":"Finalise Month",className:bn,style:mn,children:[e.jsx("span",{className:"sm:hidden",children:"Finalise"}),e.jsx("span",{className:"hidden sm:inline",children:"Finalise Month"})]})})]})]})}),e.jsxs("main",{ref:ge,className:"flex-1 overflow-y-auto p-8",children:[a==="dashboard"&&Ae?e.jsxs("section",{className:`${y.darkMode?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-6 rounded-xl border p-4 shadow-sm`,children:[e.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${y.darkMode?"text-slate-300":"text-slate-500"}`,children:"Engagement"}),e.jsxs("p",{className:`text-sm mt-1 ${y.darkMode?"text-slate-100":"text-slate-700"}`,children:["Level ",N.level," · Grade ",$n," · On-time finalisations"," ",N.onTimeFinalisations," · Email opens ",N.emailDraftOpens]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:P,disabled:ct,className:"rounded-md px-3 py-2 text-sm font-semibold text-white disabled:opacity-60",style:{backgroundColor:y.themeColor},children:ct?"Checked In Today":"Daily Check-In (+10 XP)"}),e.jsx("button",{type:"button",onClick:()=>Ie(!1),className:`${y.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-2 text-sm font-medium`,"aria-label":"Dismiss engagement card",children:"Dismiss"})]})]}),e.jsx("div",{className:"mt-4 grid gap-3 md:grid-cols-3",children:Ls.map(d=>e.jsxs("div",{className:`rounded-lg border p-3 ${d.unlocked?"border-green-200 bg-green-50":y.darkMode?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${y.darkMode?"text-slate-100":"text-slate-800"}`,children:d.name}),e.jsx("span",{className:"text-xs font-bold",children:d.unlocked?"Unlocked":d.progress})]}),e.jsx("p",{className:`mt-1 text-xs ${y.darkMode?"text-slate-300":"text-slate-600"}`,children:d.description})]},d.id))})]}):null,sn&&e.jsxs("section",{className:`${y.darkMode?"border-amber-700 bg-slate-800":"border-amber-300 bg-amber-50"} mb-8 rounded-xl border p-5 shadow-sm`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider text-amber-700",children:"First Day Reminder"}),e.jsxs("h3",{className:"text-lg font-bold text-amber-900 mt-1",children:["Submit prior month report for ",te.previousMonthLabel]}),e.jsxs("p",{className:"text-sm text-amber-800 mt-2",children:["Please prompt the team to finalise ",te.previousMonthLabel," if it has not already been recorded."]})]}),e.jsx("button",{type:"button",onClick:Xe,className:"text-sm px-3 py-1.5 rounded-md border border-amber-300 text-amber-700 hover:bg-amber-100",children:"Dismiss"})]}),e.jsxs("div",{className:"mt-4 grid gap-3 md:grid-cols-2",children:[e.jsxs("label",{className:"text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"To"}),e.jsx("input",{type:"email",value:f,onChange:d=>A(d.target.value),className:`${y.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2`})]}),e.jsxs("label",{className:"text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"Subject"}),e.jsx("input",{type:"text",value:I,onChange:d=>k(d.target.value),className:`${y.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2`})]})]}),e.jsxs("label",{className:"mt-3 block text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"Body"}),e.jsx("textarea",{value:R,onChange:d=>Ee(d.target.value),rows:9,className:`${y.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2 font-mono text-xs`})]}),e.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:Rn,className:"rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-50",children:"Download Point-in-Time JSON"}),e.jsx("button",{type:"button",onClick:He,className:"rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-50",children:"Download Email Draft with Attachment (.eml)"}),e.jsx("button",{type:"button",onClick:fn,className:"rounded-md px-3 py-2 text-sm font-semibold text-white",style:{backgroundColor:y.themeColor},children:"Open Mail Draft"}),e.jsx("button",{type:"button",onClick:_e,className:"rounded-md border border-amber-300 bg-white px-3 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100",children:"Finalise Prior Month Now"})]})]}),a==="dashboard"&&e.jsx("div",{ref:G,children:e.jsx(Ra,{store:o,components:n,lenses:t,metrics:ce,phaseFocusMode:y.phaseFocusMode||"auto",manualPhaseFocus:y.manualPhaseFocus,onPhaseFocusModeChange:d=>Y(x=>({...x,phaseFocusMode:d,manualPhaseFocus:d==="manual"?x.manualPhaseFocus||ce.currentPhase:x.manualPhaseFocus})),onManualPhaseFocusChange:d=>Y(x=>({...x,phaseFocusMode:"manual",manualPhaseFocus:d})),onResetPhaseFocus:()=>Y(d=>({...d,phaseFocusMode:"auto",manualPhaseFocus:ce.currentPhase})),getEntry:je,onComponentClick:pe,pathway:o.orgProfile.cst.pathway,pathwayChecks:o.pathwayChecks,onNavigate:ve,onOpenLensInfo:b,onOpenOnboarding:()=>X(!0),colorAccessibilityMode:y.colorAccessibilityMode||"standard",darkMode:!!y.darkMode})}),a==="project-details"&&e.jsx(no,{orgProfile:o.orgProfile,onProfileUpdate:d=>{C(x=>{const D=Is({...x,orgProfile:d});return JSON.stringify(x.orgProfile)!==JSON.stringify(d)?{...D,auditLog:ae(x,[{eventType:"profile-updated",entityType:"profile",summary:"Updated CST profile details",before:{trustName:x.orgProfile.trustName,projectName:x.orgProfile.projectName,cst:x.orgProfile.cst},after:{trustName:d.trustName,projectName:d.projectName,cst:d.cst},source:"local"}])}:D})},components:n,lenses:t,store:o,getEntry:je,onComponentClick:pe,onOpenOnboarding:()=>X(!0),currentUserId:L,onCurrentUserChange:V,darkMode:!!y.darkMode}),a==="assessment"&&e.jsx(Ha,{store:{...o,showMatrix:l},components:n,activeComponentId:i,getRubricText:lr,getEntry:je,onComponentChange:pe,onEntryUpdate:Be,onOpenLensInfo:b,onMatrixToggle:d=>{c(x=>({...x,[d]:!x[d]}))},onActionRemove:(d,x,D)=>{const T=je(d,x).actions.find(W=>W.id===D);if(!T)return;const z=window.prompt("Please provide a reason for removing this action. This will be included in the JSON export audit log.");if(!z||!z.trim()){window.alert("Removal cancelled. A reason is required to remove an action.");return}C(W=>{var on;const ie=((on=W.currentDraft[d])==null?void 0:on[x])||Ln(),we={...ie,actions:ie.actions.filter(We=>We.id!==D).map(ar)},Ce={...W.suppressedAutoActions};if(D.startsWith("vision-action:")||D.startsWith("case-for-change-action:")||D.startsWith("benefits-action:")||D.startsWith("sponsorship-action:")||D.startsWith("change-impact-action:")){const We=or(d,x),un=Ce[We]||[];un.includes(D)||(Ce[We]=[...un,D])}const re={...W,currentDraft:{...W.currentDraft,[d]:{...W.currentDraft[d],[x]:we}},suppressedAutoActions:Ce};return{...Ye(re),auditLog:ae(W,[{eventType:"action-removed",entityType:"action",entityId:D,summary:`Removed action from ${d} / ${x}`,componentId:d,lens:x,reason:z.trim(),before:{text:T.text,status:T.status,owner:T.owner,actionType:T.actionType},source:"local"}])}})},onObjectivesUpdate:Ge,darkMode:!!y.darkMode}),a==="action-plan"&&e.jsx(sa,{actions:S,onComponentClick:pe,teamMembers:o.orgProfile.teamMembers||[],darkMode:!!y.darkMode}),a==="cm-guide"&&e.jsx(Ya,{onComponentClick:pe,guidanceTarget:qt,linkOverrides:o.orgProfile.linkOverrides,darkMode:!!y.darkMode}),a==="introduction"&&e.jsx(xo,{darkMode:!!y.darkMode,onNavigateToProjectDetails:()=>ve("project-details"),onNavigateToGuide:()=>ve("cm-guide"),onNavigateToDashboard:()=>ve("dashboard")}),a==="roadmap-view"&&e.jsx(ao,{components:n,metrics:ce,getEntry:je,onComponentClick:pe,pathway:o.orgProfile.cst.pathway,pathwayChecks:o.pathwayChecks,darkMode:!!y.darkMode}),a==="highlight-builder"&&e.jsx(uo,{store:o,metrics:ce,lenses:t,components:n,getEntry:je,trustName:o.orgProfile.trustName,projectName:o.orgProfile.projectName,themeColor:y.themeColor,onLayoutSaved:he,currentUserId:L,darkMode:!!y.darkMode}),a==="audit-log"&&e.jsx(qa,{events:o.auditLog,darkMode:!!y.darkMode}),a==="settings"&&e.jsx(vo,{userSettings:y,onUserSettingsUpdate:Bs,onLoadExampleData:Ve,onResetData:nn,canUseCustomTheme:Dn,engagementGrade:$n,engagementLevel:N.level,engagementXp:N.xp,darkMode:!!y.darkMode})]}),u?e.jsx(bo,{lensName:u,onClose:()=>b(""),darkMode:!!y.darkMode}):null,j?e.jsx(ho,{report:j.report,myLabel:o.orgProfile.projectName||o.orgProfile.trustName||"Mine",theirLabel:((ut=j.parsed.orgProfile)==null?void 0:ut.projectName)||((gt=j.parsed.orgProfile)==null?void 0:gt.trustName)||j.file.name,onResolve:oe,onCancel:Te,darkMode:!!y.darkMode}):null,fe?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${y.darkMode?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} w-full max-w-2xl rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${y.darkMode?"text-slate-100":"text-slate-900"}`,children:"Finalise Month"}),e.jsx("button",{type:"button",onClick:()=>de(!1),className:`${y.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:`mt-4 space-y-3 text-sm ${y.darkMode?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("p",{children:["Finalising creates a point-in-time snapshot for"," ",e.jsx("strong",{children:Ue.currentMonthLabel}),". A new reporting month starts on the 1st day of each month."]}),e.jsx("p",{children:Oe?"Finalise window is open (last week of the month).":"Finalise window is currently closed. You can finalise from the final week of each month."}),Ke?e.jsxs("p",{className:"rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-amber-900",children:["A snapshot already exists for ",Ue.currentMonthLabel,". Re-finalise will replace this month only."]}):null]}),e.jsxs("div",{className:`${y.darkMode?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mt-4 rounded-md border p-3 text-sm`,children:[e.jsx("p",{className:`font-semibold ${y.darkMode?"text-slate-100":"text-slate-800"}`,children:"Current summary"}),e.jsxs("ul",{className:`mt-2 space-y-1 ${y.darkMode?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("li",{children:["Baseline snapshot: ",Ue.baselineLabel]}),e.jsxs("li",{children:["Overall readiness: ",ce.overallPct,"% (",Ue.deltaOverall>=0?"+":"",Ue.deltaOverall,"% vs baseline)"]}),e.jsxs("li",{children:["Components assessed: ",Ue.assessedCount]}),e.jsxs("li",{children:["Actions complete: ",Ue.completedActions,"/",Ue.totalActions]})]})]}),e.jsxs("div",{className:"mt-5 flex flex-wrap justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:()=>de(!1),className:"rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Cancel"}),Ke&&Oe?e.jsx("button",{type:"button",onClick:()=>{de(!1),Re({replaceExisting:!0})},className:"rounded-md border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100",children:"Re-finalise This Month"}):null,e.jsx("button",{type:"button",onClick:()=>{de(!1),Re()},disabled:!Oe,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50",children:"Finalise Snapshot"})]})]})}):null,e.jsx(ta,{toolkitChoice:o.orgProfile.cst.toolkitChoice,darkMode:!!y.darkMode}),e.jsx(Xs,{open:ne,onClose:H,onNavigateToProjectDetails:()=>{s("project-details"),H()},onNavigateToGuide:()=>{s("cm-guide"),H()}})]})]})}export{Ir as AdoptionApp,Ir as default};
