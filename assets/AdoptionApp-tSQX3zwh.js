import{r as d,j as e,a as cn}from"./vendor-react-nTLHQtbJ.js";import{g as Yn,p as cs,G as ds}from"./vendor-misc-XphrxPy-.js";import{A as On,a as Qe,n as ke,i as St,d as qn,U as us}from"./actionModel-g5JtsqyG.js";import{P as We,r as vt,v as ms,T as dn,D as gs,s as _e,p as Ae,l as Je,a as en,c as Jn,b as ps,d as hs,A as Xn,S as fs,G as Qn}from"./storage-CTbSzVOn.js";import{g as kn,A as Fn}from"./components-aRtg6FgR.js";import{d as mn,e as bs}from"./utils-IN_5AsDm.js";import"./vendor-chart--cLemJB8.js";function yt(){return[{title:"What is the Adoption Engine?",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsxs("p",{className:"text-sm text-slate-700",children:["Going live with a new digital product isn't the finish line - people still need to adopt it, change how they work, and keep using it."," "]}),e.jsx("p",{className:"text-sm text-slate-700",children:"The Adoption Engine helps you track how people and teams are adopting the change before go-live, during rollout, and after launch so progress is visible and outcomes are measurable."}),e.jsx("p",{className:"text-sm text-slate-700",children:" It helps you answer four simple questions:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"Where are we going?"}),e.jsx("li",{children:" How will we know we've got there?"}),e.jsx("li",{children:" What needs to be in place?"}),e.jsx("li",{children:" What should we do next?"})]}),e.jsx("p",{className:"text-sm text-slate-700",children:"The goal is not just to implement change, but to ensure it is adopted, embedded and delivering benefits."})]})},{title:"What is a CST?",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"A CST (Context Specific Template) contains the information that makes the Adoption Engine specific to your project, programme or initiative."}),e.jsx("p",{children:"It captures key information such as your scope, milestones, outcomes and benefits, and tailors the guidance, actions and resources provided."}),e.jsxs("p",{children:["You can update your CST at any time from ",e.jsx("strong",{children:"CST Personalisation"})]})]})},{title:"Adoption Pathways",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"The Adoption Engine supports three common change journeys:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Starting for the First Time"}),e.jsx("br",{}),"Building the foundations for successful adoption."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Piloted and Ready to Scale Up"}),e.jsx("br",{}),"Expanding a successful pilot to a wider audience."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Gone Live but Adoption is Patchy"}),e.jsx("br",{}),"Strengthening adoption where uptake or benefits are lower than expected."]})]}),e.jsx("p",{children:"Choose your pathway to tailor the guidance, actions and resources you see."})]})},{title:"How the Adoption Engine Works",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"The engine is built around components such as Vision, Sponsorship, Engagement, Capability and Benefits."}),e.jsxs("p",{children:["Each component is viewed through five ",e.jsx("strong",{children:"lenses"}),":"]}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"Strategic Direction and Leadership"}),e.jsx("li",{children:"People Experience and Culture"}),e.jsx("li",{children:"Planning and Risk"}),e.jsx("li",{children:"Skills and Behaviour"}),e.jsx("li",{children:"Process and Sustainment"})]}),e.jsx("p",{children:"As you assess each area, the engine recommends actions, resources and evidence to help improve adoption."})]})},{title:"Getting Started",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{className:"text-sm text-slate-700",children:"Start with CST Personalisation to review your CST. "}),e.jsx("p",{className:"text-sm text-slate-700",children:"Then visit the Dashboard to:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"View your current position"}),e.jsx("li",{children:"Explore components and lenses"}),e.jsx("li",{children:"Identify priority actions"}),e.jsx("li",{children:"Track progress and benefits"})]}),e.jsxs("p",{className:"text-sm text-slate-700",children:["The Adoption Engine will help guide your journey from ambition to adoption."," "]})]})}]}function xs({open:n,onClose:t,onNavigateToProjectDetails:s,onNavigateToGuide:a}){const[c,S]=d.useState(0),b=yt();if(d.useEffect(()=>{n&&S(0)},[n]),!n)return null;const u=b[c],o=c===0,E=c===b.length-1;return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:"relative w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("p",{className:"text-xs font-semibold uppercase tracking-wider text-blue-600",children:["Introduction · Step ",c+1," of ",b.length]}),e.jsx("button",{type:"button",onClick:t,className:"rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100",children:"Skip"})]}),e.jsx("h3",{className:"mt-3 text-lg font-semibold text-slate-900",children:u.title}),e.jsx("div",{className:"mt-3",children:u.body}),e.jsxs("div",{className:"mt-6 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:()=>S(x=>Math.max(0,x-1)),disabled:o,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed",children:"Back"}),E?e.jsxs("div",{className:"flex items-stretch gap-2",children:[s?e.jsx("button",{type:"button",onClick:s,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"Set up your CST Personalisation"}):null,a?e.jsx("button",{type:"button",onClick:a,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"See the 6 Key Questions"}):null,e.jsx("button",{type:"button",onClick:t,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Go to dashboard"})]}):e.jsx("button",{type:"button",onClick:()=>S(x=>Math.min(b.length-1,x+1)),className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Next"})]})]})})}const bn=[{key:"avt-v2-2026",label:"AVT Digital Adoption Toolkit (V2.1, Jul 2026)",filename:"AVT Digital Adoption Toolkit - V2.1 July 2026.pdf",path:"/AVT%20Digital%20Adoption%20Toolkit%20-%20V2.1%20July%202026.pdf"},{key:"change-management-v3-2023",label:"Change Management Toolkit (V3.0, Sep 2023)",filename:"Change Management Toolkit v3.0 September 2023.pdf",path:"/Change%20Management%20Toolkit%20v3.0%20September%202023.pdf"}],Ss="avt-v2-2026";function vs(n){return bn.some(t=>t.key===n)}function ys(n){return bn.find(t=>t.key===n)||bn[0]}const ws={"avt-v2-2026":[{id:"avt-vision-case-for-change",title:"Vision and Case for Change",pageHint:"Section: Early readiness",text:"Use a clear case for change, define outcomes, and ensure leadership sponsorship before go-live."},{id:"avt-stakeholder-engagement",title:"Stakeholder Engagement",pageHint:"Section: People and communication",text:"Map stakeholder groups, identify adoption risks, and use targeted communication plans for each audience."},{id:"avt-training-readiness",title:"Training and Capability",pageHint:"Section: Capability and learning",text:"Align learning interventions with role-based needs and verify confidence through readiness checkpoints."},{id:"avt-benefits-tracking",title:"Benefits Tracking",pageHint:"Section: Value realisation",text:"Set measurable adoption indicators and review benefit evidence at regular intervals post go-live."},{id:"avt-reinforcement-bau",title:"Reinforcement and BAU Transfer",pageHint:"Section: Sustainment",text:"Embed reinforcement actions and hand over ownership to business-as-usual teams for sustained adoption."}],"change-management-v3-2023":[{id:"cmt-leadership-alignment",title:"Leadership Alignment",pageHint:"Section: Sponsorship and governance",text:"Secure visible executive sponsorship and align governance with programme milestones and risks."},{id:"cmt-change-impact",title:"Change Impact Assessment",pageHint:"Section: Planning and risk",text:"Assess process, role, and behaviour impacts early and prioritise mitigations before deployment."},{id:"cmt-resistance-management",title:"Resistance Management",pageHint:"Section: Adoption barriers",text:"Identify likely resistance themes and define practical interventions with named owners and timelines."},{id:"cmt-comms-cadence",title:"Communication Cadence",pageHint:"Section: Communications",text:"Establish a predictable communication cadence using concise updates and feedback loops."},{id:"cmt-post-go-live-support",title:"Post Go-Live Support",pageHint:"Section: Stabilisation",text:"Provide hypercare support with clear escalation routes and transition criteria into steady state."}]};ds.workerSrc=cs;function Ns({toolkitChoice:n,darkMode:t=!1}){const[s,a]=d.useState(!1),[c,S]=d.useState(!1),[b,u]=d.useState(""),[o,E]=d.useState(1),[x,l]=d.useState("idle"),[h,v]=d.useState(""),[w,K]=d.useState([]),D=d.useMemo(()=>ys(n),[n]),R=d.useMemo(()=>(ws[n]||[]).map($=>({id:$.id,title:$.title,pageHint:$.pageHint,text:$.text,pageNumber:null})),[n]);d.useEffect(()=>{if(!s)return;let $=!1;return(async()=>{l("loading"),v("");try{const ee=await fetch(D.path);if(!ee.ok)throw new Error(`HTTP ${ee.status}`);const ne=await ee.arrayBuffer(),re=new Uint8Array(ne);let Z;try{Z=await Yn({data:re}).promise}catch(te){if(Z=await Yn({data:re,disableWorker:!0}).promise,!$){const de=te instanceof Error?te.message:String(te);v(`Worker fallback used: ${de}`)}}const O=[];for(let te=1;te<=Z.numPages;te+=1){if($)return;const f=(await(await Z.getPage(te)).getTextContent()).items.map(N=>"str"in N?N.str:"").join(" ").replace(/\s+/g," ").trim();f&&O.push({id:`${n}-page-${te}`,title:`Page ${te}`,pageHint:`Page ${te}`,text:f,pageNumber:te})}$||(K(O),l("ready"))}catch{$||(K([]),l("error"),v("Unable to read PDF text for indexing in this browser session."))}})(),()=>{$=!0}},[s,D.path,n]),d.useEffect(()=>{E(1),u(""),K([]),l("idle"),v("")},[n]);const T=w.length>0?w:R,Q=d.useMemo(()=>{const $=Number.isFinite(o)&&o>0?Math.floor(o):1;return`${D.path}#page=${$}`},[D.path,o]),G=d.useMemo(()=>{const $=b.trim().toLowerCase();if(!$)return T.slice(0,5).map(ne=>({entry:ne,score:0}));const ce=$.split(/\s+/).filter(Boolean),ee=ne=>{const re=`${ne.title} ${ne.text} ${ne.pageHint}`.toLowerCase();let Z=0;return re.includes($)&&(Z+=8),ce.forEach(O=>{re.includes(O)?Z+=2:re.split(/\W+/).some(de=>de&&(de.includes(O)||O.includes(de)))&&(Z+=1)}),Z};return T.map(ne=>({entry:ne,score:ee(ne)})).filter(ne=>ne.score>0).sort((ne,re)=>re.score-ne.score).slice(0,5)},[b,T])[0]||null;return d.useEffect(()=>{b.trim()&&G!=null&&G.entry.pageNumber&&E(G.entry.pageNumber)},[G,b]),e.jsxs("div",{className:"fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2","data-testid":"global-toolkit-chatbot",children:[s?e.jsxs("div",{className:`w-[380px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border shadow-2xl ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant"}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("button",{type:"button",onClick:()=>S(!0),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Maximise"}),e.jsx("button",{type:"button",onClick:()=>a(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Minimise"})]})]}),e.jsxs("div",{className:`space-y-3 p-3 ${t?"bg-slate-800":"bg-slate-50"}`,children:[e.jsxs("div",{className:`max-w-[95%] rounded-2xl rounded-bl-md px-3 py-2 text-xs shadow-sm ${t?"bg-slate-700 text-slate-100":"bg-white text-slate-700"}`,children:["Showing your selected toolkit from CST Personalisation:",e.jsx("div",{className:"mt-1 font-semibold",children:D.label})]}),e.jsx("div",{className:`overflow-hidden rounded-lg border ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:e.jsx("iframe",{title:"Selected Toolkit Preview",src:Q,className:"h-[260px] w-full"})}),e.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-end gap-2",children:[e.jsx("label",{htmlFor:"toolkit-page-input",className:`text-[11px] font-semibold uppercase tracking-wider ${t?"text-slate-300":"text-slate-600"}`,children:"Go to page"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{id:"toolkit-page-input",type:"number",min:1,value:o,onChange:$=>E(Number($.target.value)||1),className:`w-20 rounded-md border px-2 py-1.5 text-xs ${t?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})})]}),e.jsxs("div",{className:`rounded-lg border p-2 ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsx("label",{htmlFor:"toolkit-fuzzy-search",className:`mb-1 block text-[11px] font-semibold uppercase tracking-wider ${t?"text-slate-300":"text-slate-600"}`,children:"Quick snippet search"}),e.jsx("input",{id:"toolkit-fuzzy-search",type:"search",value:b,onChange:$=>u($.target.value),placeholder:"Try: sponsorship, training, resistance",className:`w-full rounded-md border px-2 py-1.5 text-xs ${t?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-400":"border-slate-300 bg-white text-slate-900 placeholder-slate-500"}`}),e.jsx("div",{className:"mt-2",children:b.trim()?G!=null&&G.entry.pageNumber?e.jsxs("button",{type:"button",onClick:()=>{E(G.entry.pageNumber),S(!0)},className:`w-full rounded-md px-2 py-1.5 text-left text-xs font-semibold ${t?"bg-slate-800 text-slate-100 hover:bg-slate-700":"bg-slate-100 text-slate-800 hover:bg-slate-200"}`,children:["Go to best match: Page ",G.entry.pageNumber]}):e.jsx("p",{className:`text-xs ${t?"text-slate-400":"text-slate-500"}`,children:"No close page match found. Try broader keywords."}):e.jsx("p",{className:`text-xs ${t?"text-slate-400":"text-slate-500"}`,children:"Enter a keyword to jump to the most relevant page."})}),e.jsx("p",{className:`mt-2 text-[11px] ${t?"text-slate-400":"text-slate-500"}`,children:x==="loading"?"Indexing toolkit text from all pages...":x==="ready"?`Search is using full-document text (${w.length} pages indexed).`:x==="error"?"Full-document indexing unavailable, using fallback snippets.":"Search will expand to all pages when the assistant opens."}),h?e.jsx("p",{className:`mt-1 text-[11px] ${t?"text-amber-300":"text-amber-700"}`,children:h}):null]}),e.jsx("a",{href:D.path,target:"_blank",rel:"noopener noreferrer",className:"inline-block text-xs font-semibold text-[#005eb8] underline",children:"Open full toolkit in new tab"})]})]}):null,c?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4",children:e.jsxs("div",{className:`relative h-[90vh] w-[95vw] overflow-hidden rounded-2xl border shadow-2xl ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant · Expanded Viewer"}),e.jsx("button",{type:"button",onClick:()=>S(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Close"})]}),e.jsx("iframe",{title:"Selected Toolkit Full View",src:Q,className:"h-[calc(90vh-42px)] w-full"})]})}):null,e.jsxs("button",{type:"button",onClick:()=>a($=>!$),className:"inline-flex items-center gap-2 rounded-full bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-blue-700","aria-label":"Open toolkit assistant",children:[e.jsx("span",{"aria-hidden":"true",children:"💬"}),"Toolkit assistant"]})]})}function wt({showAdvancedControls:n,onToggleAdvanced:t,onReset:s,resultText:a,activeFilters:c,activeFiltersAriaLabel:S,darkMode:b=!1}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:t,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${b?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:n?"Hide advanced controls":"Show advanced controls"}),e.jsx("button",{type:"button",onClick:s,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${b?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:"Reset filters"}),e.jsx("span",{className:`text-xs ${b?"text-slate-300":"text-slate-500"}`,"aria-live":"polite",children:a})]}),c.length>0?e.jsx("div",{className:"flex flex-wrap gap-2","aria-label":S,children:c.map(u=>e.jsx("span",{className:`inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${b?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-slate-50 text-slate-700"}`,children:u},u))}):null]})}function Cs({actions:n,onComponentClick:t,darkMode:s=!1}){const[a,c]=d.useState(""),[S,b]=d.useState("all"),[u,o]=d.useState("all"),[E,x]=d.useState("all"),[l,h]=d.useState("all"),[v,w]=d.useState("all"),[K,D]=d.useState("component"),[R,T]=d.useState("asc"),[Q,j]=d.useState(!1),G=d.useCallback(_=>{t(_)},[t]),$=d.useMemo(()=>Array.from(new Set(n.map(_=>_.component))).sort((_,f)=>_.localeCompare(f)),[n]),ce=d.useMemo(()=>Array.from(new Set(n.map(_=>_.action.owner).filter(Boolean))).sort((_,f)=>_.localeCompare(f)),[n]),ee=d.useMemo(()=>Array.from(new Set(n.map(_=>_.action.status))).sort((_,f)=>_.localeCompare(f)),[n]),ne=d.useMemo(()=>{const _=n.map(f=>f.action.actionType).filter(f=>!!f);return Array.from(new Set([...On,..._])).sort((f,N)=>f.localeCompare(N))},[n]),re=d.useMemo(()=>{const _=n.map(f=>f.action.readinessScore).filter(f=>f!==void 0);return Array.from(new Set(_)).sort((f,N)=>f-N)},[n]),Z={0:"Not Started",1:"Emerging",2:"Developing",3:"Embedding",4:"Adopted",5:"Thriving"},O=d.useMemo(()=>{const _=a.trim().toLowerCase();return n.filter(N=>S!=="all"&&N.component!==S||u!=="all"&&N.action.owner!==u||E!=="all"&&N.action.status!==E||l!=="all"&&(N.action.actionType||"")!==l||v!=="all"&&N.action.readinessScore!==v?!1:_?[N.component,N.lens,N.action.text,N.action.actionType||"",N.action.owner,N.action.timescale,N.action.status].join(" ").toLowerCase().includes(_):!0).sort((N,J)=>{const xe=C=>{switch(K){case"lens":return C.lens;case"owner":return C.action.owner||"Unassigned";case"status":return C.action.status;case"actionType":return C.action.actionType||"Unassigned";case"component":default:return C.component}},g=xe(N).localeCompare(xe(J));return R==="asc"?g:-g})},[l,n,S,u,v,a,K,R,E]),te=d.useMemo(()=>{const _=[];return a.trim()&&_.push(`Search: ${a.trim()}`),S!=="all"&&_.push(`Component: ${S}`),E!=="all"&&_.push(`Status: ${E}`),l!=="all"&&_.push(`Action type: ${l}`),v!=="all"&&_.push(`Readiness: ${Z[v]}`),u!=="all"&&_.push(`Owner: ${u}`),(K!=="component"||R!=="asc")&&_.push(`Sort: ${K} (${R})`),_},[l,S,u,v,a,K,R,E]),de=()=>{c(""),b("all"),o("all"),x("all"),h("all"),w("all"),D("component"),T("asc"),j(!1)};return e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsx("h2",{className:`text-2xl font-bold mb-6 ${s?"text-slate-100":"text-slate-800"}`,children:"Action Tracker"}),e.jsxs("div",{className:`${s?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-4 mb-6 space-y-3`,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:a,onChange:_=>c(_.target.value),placeholder:"Search actions, owners, lenses...",className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-900 text-slate-100":"text-slate-900"}`}),e.jsxs("select",{value:S,onChange:_=>b(_.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All components"}),$.map(_=>e.jsx("option",{value:_,children:_},_))]}),e.jsxs("select",{value:E,onChange:_=>x(_.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All statuses"}),ee.map(_=>e.jsx("option",{value:_,children:_},_))]})]}),e.jsx(wt,{showAdvancedControls:Q,onToggleAdvanced:()=>j(_=>!_),onReset:de,resultText:`Showing ${O.length} actions`,activeFilters:te,activeFiltersAriaLabel:"Active action tracker filters",darkMode:s}),Q?e.jsxs("div",{className:`grid grid-cols-1 sm:grid-cols-5 gap-3 rounded-md border p-3 ${s?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("select",{value:u,onChange:_=>o(_.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),ce.map(_=>e.jsx("option",{value:_,children:_},_))]}),e.jsxs("select",{value:l,onChange:_=>h(_.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),ne.map(_=>e.jsx("option",{value:_,children:_},_))]}),e.jsxs("select",{value:v==="all"?"all":String(v),onChange:_=>w(_.target.value==="all"?"all":Number(_.target.value)),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All readiness levels"}),re.map(_=>e.jsx("option",{value:String(_),children:Z[_]},_))]}),e.jsxs("select",{value:K,onChange:_=>D(_.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"component",children:"Sort: Component"}),e.jsx("option",{value:"lens",children:"Sort: Lens"}),e.jsx("option",{value:"owner",children:"Sort: Owner"}),e.jsx("option",{value:"actionType",children:"Sort: Action Type"}),e.jsx("option",{value:"status",children:"Sort: Status"})]}),e.jsx("button",{type:"button",onClick:()=>T(_=>_==="asc"?"desc":"asc"),className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${s?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-white"}`,children:R==="asc"?"A-Z":"Z-A"})]}):null]}),e.jsx("div",{className:`${s?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:O.length?e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:`min-w-full table-fixed ${s?"divide-slate-700":"divide-slate-200"} divide-y`,children:[e.jsx("thead",{className:s?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Change Component"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Lens"}),e.jsx("th",{className:`w-[22%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Action Type"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Timescale"}),e.jsx("th",{className:`w-[14%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Status"})]})}),e.jsx("tbody",{className:`${s?"bg-slate-800 divide-slate-700":"bg-white divide-slate-100"} divide-y`,children:O.map(({compId:_,component:f,lens:N,action:J})=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-4 py-3 text-sm ${s?"text-slate-100":"text-slate-700"}`,children:e.jsx("button",{onClick:()=>G(_),className:"text-left underline underline-offset-2 hover:text-[#005eb8] transition-colors",children:f})}),e.jsx("td",{className:`px-4 py-3 text-sm ${s?"text-slate-300":"text-slate-500"}`,children:N}),e.jsx("td",{className:`w-[22%] px-4 py-3 text-sm whitespace-normal break-words leading-snug ${s?"text-slate-100":"text-slate-700"}`,children:J.text}),e.jsx("td",{className:`px-4 py-3 text-sm ${s?"text-slate-100":"text-slate-700"}`,children:J.actionType||"Unassigned"}),e.jsx("td",{className:`px-4 py-3 text-sm ${s?"text-slate-100":"text-slate-700"}`,children:J.owner}),e.jsx("td",{className:`px-4 py-3 text-sm ${s?"text-slate-100":"text-slate-700"}`,children:J.timescale}),e.jsx("td",{className:"w-[14%] px-4 py-3 text-sm",children:e.jsx("span",{className:`inline-flex rounded-full border px-2 py-1 text-xs font-semibold ${Qe[ke(J.status)]}`,children:ke(J.status)})})]},`${_}-${N}-${J.text}`))})]})}):e.jsx("div",{className:`p-6 ${s?"text-slate-300":"text-slate-500"}`,children:n.length?"No actions match the current filters.":"No actions recorded yet."})})]})}const Zn=[1,2,3,4,5],gn=["A","B","C","D","E"],pn=[1,2,3,4,5],Es=[{value:"project",label:"Project"},{value:"program",label:"Program"},{value:"initiative",label:"Initiative"}],Nt=[{value:"pathway-1",label:"Pathway 1 - Starting for the First Time"},{value:"pathway-2",label:"Pathway 2 - Piloted and Ready to Scale Up"},{value:"pathway-3",label:"Pathway 3 - Gone Live but Adoption is Patchy"}],Ct=Nt.reduce((n,t)=>(n[t.value]=t.label,n),{}),Is={type:"project",pathway:"pathway-1",goLiveDate:"",fullAdoptionDate:"",benefitRealizationDate:"",toolkitChoice:Ss,phaseCapability:{}};function Pn(n,t){if(!n.linkedActions.length)return"Not Started";const s=n.linkedActions.map(a=>{const c=(t[a.lens]||[]).find(S=>S.id===a.actionId);return(c==null?void 0:c.status)||"Planned"});return s.some(a=>a==="Blocked")?"Blocked":s.every(a=>a==="Completed")?"Completed":s.some(a=>a!=="Planned")?"In Progress":"Not Started"}function Et(n){return{trustName:(n==null?void 0:n.trustName)||"",region:(n==null?void 0:n.region)||"",trustType:(n==null?void 0:n.trustType)||"",projectName:(n==null?void 0:n.projectName)||"",leadName:(n==null?void 0:n.leadName)||"",cst:{...Is,...(n==null?void 0:n.cst)||{}},linkOverrides:n==null?void 0:n.linkOverrides}}function _s(n){return n?Object.keys(n).reduce((t,s)=>{const a=n[s]||{};return t[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},t},{}):{}}function Rn(n){return{view:(n==null?void 0:n.view)||"dashboard",orgProfile:Et(n==null?void 0:n.orgProfile),currentDraft:(n==null?void 0:n.currentDraft)||{},objectives:n!=null&&n.objectives?_t(n.objectives):{},suppressedAutoActions:As(n==null?void 0:n.suppressedAutoActions),auditLog:js(n==null?void 0:n.auditLog),history:(n==null?void 0:n.history)||[],phaseOverrides:(n==null?void 0:n.phaseOverrides)||{},pathwayChecks:_s(n==null?void 0:n.pathwayChecks)}}function As(n){return n?Object.keys(n).reduce((t,s)=>(t[s]=[...n[s]||[]],t),{}):{}}function js(n){return n?n.map(t=>({...t})):[]}function Nn(){return{score:0,justification:"",evidence:"",actions:[]}}function It(n){return{score:n.score,justification:n.justification,evidence:n.evidence,actions:n.actions.map(t=>({...t,linkedTargets:(t.linkedTargets||[]).map(s=>({componentId:s.componentId,lens:s.lens}))}))}}function Os(n){return Object.keys(n).reduce((t,s)=>(t[s]=Object.keys(n[s]).reduce((a,c)=>(a[c]=It(n[s][c]),a),{}),t),{})}function ks(n){return{...n,linkedActions:n.linkedActions.map(t=>({...t}))}}function _t(n){return Object.keys(n).reduce((t,s)=>(t[s]=(n[s]||[]).map(ks),t),{})}const Dn={1:{vision:5,case_for_change:5,sponsorship:1,change_network:1,benefits:1,change_impact:1,risk_management:1,cm_readiness:1,stakeholder:1,resistance:1,skills_learning:1,capability:1,change_adoption:1,process_change:1,reinforcement:1,org_maturity:1,transfer_bau:1},2:{vision:5,case_for_change:5,sponsorship:2,change_network:2,benefits:3,change_impact:2,risk_management:2,cm_readiness:2,stakeholder:2,resistance:2,skills_learning:2,capability:2,change_adoption:2,process_change:3,reinforcement:2,org_maturity:2,transfer_bau:2},3:{vision:5,case_for_change:5,sponsorship:3,change_network:3,benefits:4,change_impact:3,risk_management:3,cm_readiness:3,stakeholder:3,resistance:3,skills_learning:4,capability:3,change_adoption:3,process_change:4,reinforcement:3,org_maturity:3,transfer_bau:3},4:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:4,stakeholder:5,resistance:4,skills_learning:5,capability:4,change_adoption:4,process_change:5,reinforcement:4,org_maturity:4,transfer_bau:4},5:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:5,stakeholder:5,resistance:5,skills_learning:5,capability:5,change_adoption:5,process_change:5,reinforcement:5,org_maturity:5,transfer_bau:5}};function tn(n,t,s){return!t||!Dn[t]?s:Dn[t][n]??s}function et(n,t){var D;let s=0,a=0,c=0,S=0;const b=new Map,u=[];t.forEach(R=>{const T=b.get(R.phase)||{componentCount:0,assessedLenses:0,totalLenses:0,onTrackComponents:0,totalActions:0,completedActions:0};T.componentCount+=1,T.totalLenses+=R.lenses.length;let Q=0,j=0,G=0,$=0;R.lenses.forEach(re=>{var de;const Z=(de=n.currentDraft[R.id])==null?void 0:de[re],O=Number((Z==null?void 0:Z.score)||0);s+=O,Q+=O,O>0&&(a+=1,j+=1,T.assessedLenses+=1),((Z==null?void 0:Z.actions)||[]).forEach(_=>{c+=1,G+=1,T.totalActions+=1,St(_.status)&&(S+=1,$+=1,T.completedActions+=1)})});const ce=R.lenses.length?Number((Q/R.lenses.length).toFixed(1)):0,ee=tn(R.id,R.phase,R.target),ne=Number(Math.max(0,ee-ce).toFixed(1));ce>=ee&&(T.onTrackComponents+=1),u.push({component:R,avgScore:ce,gapToTarget:ne,assessedLenses:j,totalLenses:R.lenses.length,totalActions:G,completedActions:$}),b.set(R.phase,T)});const o=t.reduce((R,T)=>R+T.lenses.length,0),E=o*5,x=E?Math.round(s/E*100):0,l=c?Math.round(S/c*100):0,h=[...b.entries()].sort(([R],[T])=>R-T).map(([R,T])=>{const Q=T.totalActions?Math.round(T.completedActions/T.totalActions*100):0,j=T.componentCount?T.onTrackComponents/T.componentCount:0,G=j>=.75&&Q>=50?"Green":j>=.4||Q>=25?"Amber":"Red";return{phase:R,componentCount:T.componentCount,assessedLenses:T.assessedLenses,totalLenses:T.totalLenses,onTrackComponents:T.onTrackComponents,actionCompletionPct:Q,rag:G}}),v=h.find(R=>R.onTrackComponents<R.componentCount),w=(v==null?void 0:v.phase)||((D=h[h.length-1])==null?void 0:D.phase)||1,K=u.filter(({component:R,gapToTarget:T})=>R.phase<=w+1&&T>0).sort((R,T)=>R.component.phase!==T.component.phase?R.component.phase-T.component.phase:T.gapToTarget-R.gapToTarget).slice(0,3).map(({component:R,avgScore:T,gapToTarget:Q,totalActions:j,completedActions:G,assessedLenses:$,totalLenses:ce})=>{const ee=Math.max(0,j-G),ne=$<ce?`Assess ${ce-$} remaining lens area(s).`:ee>0?`Complete ${ee} open action(s).`:"Create at least one delivery action linked to this component.";return{componentId:R.id,componentLabel:R.label,phase:R.phase,gapToTarget:Q,message:`Raise ${R.label} from ${T.toFixed(1)} to target ${R.target}. ${ne}`}});return{totalCurrent:s,assessedCount:a,totalExpected:o,overallPct:x,totalActions:c,completedActions:S,actionCompletionPct:l,currentPhase:w,phaseSummaries:h,nextSteps:K}}function Ps(n,t,s,a){return t.map(c=>{let S=0,b=0;return s.forEach(u=>{u.lenses.includes(c)&&(S+=Number(a(u.id,c).score||0),b+=1)}),b?Number((S/b).toFixed(1)):0})}function Rs(n,t){return n.map(s=>{let a=0,c=0;return t.forEach(S=>{S.lenses.includes(s)&&(a+=S.target,c+=1)}),c?Number((a/c).toFixed(1)):0})}function Ds(n,t,s,a){const c=Ps(n,t,s,a),S=Rs(t,s);return{labels:t,datasets:[{label:"Current Score",data:c,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",borderWidth:2,pointRadius:4,pointHoverRadius:6},{label:"Target",data:S,borderColor:"#00A499",backgroundColor:"rgba(0, 164, 153, 0.05)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function Ts(n,t,s){const a=s&&Dn[s]?s:null,c=b=>b<=0?"#768692":b<1.5?"#AE2521":b<2.5?"#FFB81C":b<3.5?"#005EB8":b<4.5?"#330072":"#00A499",S=n.map(b=>{const u=b.lenses.reduce((o,E)=>o+Number(t(b.id,E).score||0),0);return Number((u/b.lenses.length).toFixed(1))});return{labels:n.map(b=>b.label),datasets:[{label:"Current Average Readiness",data:S,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.12)",borderWidth:2,pointRadius:4,pointHoverRadius:6,pointBackgroundColor:S.map(c),pointBorderColor:S.map(c)},{label:a?`Exemplar (Phase ${a})`:"Target Average",data:n.map(b=>tn(b.id,a||void 0,b.target)),borderColor:"#94a3b8",backgroundColor:"rgba(148, 163, 184, 0.06)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function $s(n,t,s){const a=[],c=new Set,S=(b,u,o)=>{const E=`${o.id}:${b}:${u}`;if(c.has(E))return;c.add(E);const x=t(b);a.push({compId:b,component:x.label,lens:u,action:{...o}})};return Object.keys(n.currentDraft).forEach(b=>{Object.keys(n.currentDraft[b]).forEach(u=>{(s(b,u).actions||[]).forEach(E=>{(E.linkedTargets&&E.linkedTargets.length?E.linkedTargets:[{componentId:b,lens:u}]).forEach(l=>{S(l.componentId,l.lens,E)})})})}),a}function Ls(n,t,s){var o;const a=((o=n.objectives)==null?void 0:o[t])||[],c=E=>E.reduce((x,l)=>(x[l]=s(t,l).actions,x),{}),S=Array.from(new Set(a.flatMap(E=>E.linkedActions.map(x=>x.lens)))),b=c(S),u=a.filter(E=>Pn(E,b)==="Completed").length;return{total:a.length,completed:u}}const Fs=`Pathway 1 - We are starting AVT for the first time
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
adoption.`,Cn={"Pathway 1 - We are starting AVT for the first time":"pathway-1","Pathway 2 - We have piloted AVT and need to scale up":"pathway-2","Pathway 3 - AVT is live but adoption is patchy":"pathway-3","Pathway 1 - We are starting product for the first time":"pathway-1","Pathway 2 - We have piloted product and need to scale up":"pathway-2","Pathway 3 - product is live but adoption is patchy":"pathway-3","Pathway 1 - Pilot":"pathway-1","Pathway 2 - Scale up":"pathway-2","Pathway 3 - Reassess":"pathway-3"},Bs={vision:"Vision",case_for_change:"Case for Change",sponsorship:"Senior Sponsorship and Governance",change_network:"Change Network",benefits:"Benefits and WIIFM",stakeholder:"Stakeholder Engagement and Communication",process_change:"Process Change and Ways of Working",change_impact:"Change Impact and Risk",risk_management:"Change Impact and Risk",skills_learning:"Skills, Learning, Capability and Confidence",capability:"Skills, Learning, Capability and Confidence",change_adoption:"Change Adoption",transfer_bau:"Transfer to BAU",reinforcement:"Reinforcement",resistance:"Resistance",cm_readiness:"Readiness and Planning",org_maturity:"Organisational Change Management Maturity"};function Gs(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function En(n){return n.replace(/\bAVT\b/g,"${productName}")}function Us(n){const t=n.split(/\r?\n/).map(c=>c.trim()),s={};let a=0;for(;a<t.length;){const c=t[a],S=Cn[c];if(!S){a+=1;continue}for(a+=1;a<t.length&&!t[a];)a+=1;if(a>=t.length)break;const b=t[a];for(a+=1;a<t.length&&(!t[a]||t[a]==="Are you on track?");)a+=1;let u="";if(a<t.length&&t[a].startsWith("Descriptor:"))for(u=En(t[a].replace("Descriptor:","").trim()),a+=1;a<t.length&&t[a]&&!t[a].startsWith("☐")&&!t[a].startsWith("ARE YOU ON TRACK?")&&!Cn[t[a]];)u=En(`${u} ${t[a]}`.trim()),a+=1;const o=[];for(;a<t.length&&t[a].startsWith("☐");){const E=En(t[a].replace(/^☐\s*/,"").trim()),x=`${S}:${Gs(b)}:${o.length+1}`;o.push({key:x,text:E}),a+=1}for(s[b]||(s[b]={}),s[b][S]={domain:b,descriptor:u,checklist:o};a<t.length&&t[a]&&!Cn[t[a]];)a+=1}return s}const Vs=Us(Fs);function Ms(n){return Bs[n]||null}function Bn(n,t){var a;const s=Ms(n);return s&&((a=Vs[s])==null?void 0:a[t])||null}function At(n,t){if(!t||t.checklist.length===0)return{status:"on-track",completionPct:100,checkedCount:0,totalCount:0};const s=t.checklist.length,a=new Set(n),c=t.checklist.filter(b=>a.has(b.key)).length,S=Math.round(c/s*100);return S>=80?{status:"on-track",completionPct:S,checkedCount:c,totalCount:s}:S>=45?{status:"attention",completionPct:S,checkedCount:c,totalCount:s}:{status:"off-track",completionPct:S,checkedCount:c,totalCount:s}}function Hs(n){const t=At(n.checkedItemKeys,n.rule);return!n.rule||n.rule.checklist.length===0?{status:n.averageScore>=n.targetScore?"on-track":"attention",completionPct:t.completionPct,checkedCount:t.checkedCount,totalCount:t.totalCount}:t.status==="off-track"?t:n.averageScore<Math.max(1,n.targetScore-1)&&t.status!=="on-track"?{...t,status:"attention"}:t}const Ws=["Strategic Direction and Leadership","People Experience and Culture","Planning and Risk","Skills and Behaviour","Process and Sustainment"],Gn={"Strategic Direction and Leadership":{outcome:"Provide a clear and unifying direction for the change, backed by visible, empowered leadership that removes barriers, prioritises resources, and drives accountability.",whatGoodLooksLike:"Leaders speak with one voice, consistently reinforcing the vision and outcomes. Decisions are timely, transparent, and aligned to strategic priorities. Governance is purposeful, with clear roles and escalations. Everyone understands why the change is happening and how it connects to organisational goals."},"People Experience and Culture":{outcome:"Create the conditions where people feel informed, supported, safe, and motivated, creating a culture that embraces the change rather than resists it.",whatGoodLooksLike:"Staff feel involved, heard, and respected. Communication is timely, honest, and tailored to different roles. People know how the change affects them and feel psychologically safe to raise concerns. Change Champions are active, engagement is high, and belief improves over time. Behaviours begin to shift organically as trust grows."},"Planning and Risk":{outcome:"Use evidence, data, and structured analysis to plan the change effectively, anticipate impacts, manage risks, and inform decision-making throughout delivery.",whatGoodLooksLike:"Impacts are well understood and documented. Risks are identified early and mitigated proactively. Baselines and KPIs are established before implementation, with benefits tracked throughout. Pilots and readiness checks ensure no surprises. Decisions are grounded in insight, not opinion."},"Skills and Behaviour":{outcome:"Give people the capabilities, confidence, and behavioural habits they need to adopt the new ways of working consistently and sustainably.",whatGoodLooksLike:"Staff are trained, assessed, and supported in ways that match real-world workflows. New behaviours are clearly defined, reinforced by leaders, and evident in day-to-day practice. Change Champions and Super-users are active; confidence grows over time; and requests for support decrease as competence increases."},"Process and Sustainment":{outcome:"Embed the change into operational processes, ensuring it becomes the way we do things, and create mechanisms for continuous improvement and long-term stability.",whatGoodLooksLike:"Updated SOPs, workflows, and ownership structures are in place and being followed. Issues are resolved quickly. Benefits are monitored and reported regularly. Improvements continue beyond go-live, with clear BAU ownership. The change stabilises and performance gains hold or increase over time."}},Ks={vision:"Defines the future state and why the change matters.",case_for_change:"Builds a clear, credible rationale and expected benefits.",sponsorship:"Secures visible leadership ownership, governance, and decisions.",change_network:"Builds and mobilises change agents and local champions.",benefits:"Tracks baseline, benefits ownership, and value realisation.",change_impact:"Assesses who is impacted and the scale of change required.",risk_management:"Identifies, tracks, and mitigates adoption and delivery risks.",cm_readiness:"Confirms readiness, sequencing, and change planning discipline.",stakeholder:"Plans and delivers stakeholder engagement and communications.",resistance:"Anticipates and addresses resistance with practical interventions.",skills_learning:"Designs learning, support, and reinforcement for role readiness.",capability:"Builds confidence and competence to adopt new ways of working.",change_adoption:"Measures uptake and consistency of new behaviours in practice.",process_change:"Embeds workflow changes into everyday operational delivery.",reinforcement:"Sustains momentum so adoption does not decay after launch.",org_maturity:"Improves long-term organisational change capability and maturity.",transfer_bau:"Transitions ownership into BAU with clear accountability."};function zs(n){return Ks[n]||"Component description not yet defined."}function Ys(n){const s=Gn[n];return s?`This lens ${s.outcome.charAt(0).toLowerCase()}${s.outcome.slice(1)}`:"This lens provides an additional perspective on how each component is landing across teams and services."}function qs(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Js(n){return n<=0?"Green":n>=2?"Red":n>=1?"Amber":"Blue"}function Xs(n,t){if(n<=0)return"Amber";const s=t-n;return s>=2?"Red":s>0?"Amber":"Green"}function nt(n,t,s,a,c){return c?"Blue":s<=0?"N/A":a<=0?"Amber":n>=t&&a<s?"Green":Xs(n,t)}const Qs={"N/A":"text-slate-600 bg-slate-200",Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},Zs={Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},tt=["#0f766e","#0369a1","#7c3aed","#b45309","#be123c"],ea=[{score:0,label:"Pre-Emergent",color:"#768692"},{score:1,label:"Emerging",color:"#AE2521"},{score:2,label:"Developing",color:"#FFB81C"},{score:3,label:"Maturing",color:"#005EB8"},{score:4,label:"Embedding",color:"#330072"},{score:5,label:"Thriving",color:"#00A499"}];function na({store:n,components:t,lenses:s,metrics:a,getEntry:c,onComponentClick:S,pathway:b,pathwayChecks:u,onNavigate:o,onOpenLensInfo:E,onOpenOnboarding:x,colorAccessibilityMode:l="standard",darkMode:h=!1,phaseFocusMode:v="auto",manualPhaseFocus:w,onPhaseFocusModeChange:K,onManualPhaseFocusChange:D,onResetPhaseFocus:R}){const[T,Q]=d.useState(""),[j,G]=d.useState("all"),[$,ce]=d.useState("all"),[ee,ne]=d.useState("all"),[re,Z]=d.useState("score"),[O,te]=d.useState("desc"),[de,_]=d.useState(!1),[f,N]=d.useState(!0),[J,xe]=d.useState(!1),g=d.useMemo(()=>[...new Set(t.map(m=>m.phase))].sort((m,F)=>m-F),[t]),C=a.currentPhase,I=v==="manual"&&w&&g.includes(w)?w:C,[L,M]=d.useState(!0),be=d.useMemo(()=>n.history.length>0?n.history[n.history.length-1]:null,[n.history]),oe=be!==null?a.overallPct-be.overallPercentage:null,we=d.useMemo(()=>{if(a.assessedCount===0)return!1;const m=new Date().toLocaleString("en-GB",{month:"short",year:"numeric"});return!n.history.some(F=>F.monthLabel===m)},[n.history,a.assessedCount]),ue=d.useMemo(()=>{const m=new Date;m.setHours(0,0,0,0);const F=new Date(m);F.setDate(m.getDate()+7);const H=[];return t.forEach(V=>{V.lenses.forEach(Se=>{c(V.id,Se).actions.forEach(pe=>{if(!pe.dueDate||pe.status==="Completed"||pe.status==="Cancelled")return;const me=new Date(pe.dueDate);isNaN(me.getTime())||me<=F&&H.push({action:pe,componentLabel:V.label,componentId:V.id,isOverdue:me<m})})})}),H.sort((V,Se)=>new Date(V.action.dueDate).getTime()-new Date(Se.action.dueDate).getTime())},[t,c,n.currentDraft]),De=d.useMemo(()=>{const m=T.trim().toLowerCase();return t.map(F=>{let H=0,V=!0,Se=0,pe=0;F.lenses.forEach(A=>{const X=c(F.id,A),q=Number(X.score||0);H+=q,q!==5&&(V=!1);const ye=X.actions||[];Se+=ye.length,pe+=ye.filter(ve=>ve.status==="Completed").length});const me=Number((H/F.lenses.length).toFixed(1)),le=tn(F.id,I,F.target),i=me===0?"not-started":me>=le?"on-track":"below-target";let y=null;if(be){let A=0;F.lenses.forEach(ye=>{var ve,ge;A+=Number(((ge=(ve=be.data[F.id])==null?void 0:ve[ye])==null?void 0:ge.score)||0)});const X=Number((A/F.lenses.length).toFixed(1)),q=Number((me-X).toFixed(1));q!==0&&(y=q)}return{component:F,avgNum:me,exemplarTarget:le,status:i,delta:y,actionCount:Se,completedActionCount:pe,allLensesLevelFive:V}}).filter(({component:F,status:H})=>j!=="all"&&H!==j||$!=="all"&&F.phase!==$?!1:m?F.label.toLowerCase().includes(m):!0).sort((F,H)=>{let V=0;return re==="name"?V=F.component.label.localeCompare(H.component.label):re==="target"?V=F.component.target-H.component.target:V=F.avgNum-H.avgNum,O==="asc"?V:-V})},[t,$,I,c,be,T,re,O,j]),Fe=d.useMemo(()=>v==="auto"?a.nextSteps:t.map(m=>{let F=0,H=0,V=0;m.lenses.forEach(y=>{const A=c(m.id,y);F+=Number(A.score||0);const X=A.actions||[];H+=X.length,V+=X.filter(q=>q.status==="Completed").length});const Se=Number((F/m.lenses.length).toFixed(1)),pe=tn(m.id,I,m.target),me=Number(Math.max(0,pe-Se).toFixed(1)),le=Math.max(0,H-V),i=le>0?`Complete ${le} open action(s).`:"Create at least one delivery action linked to this component.";return{componentId:m.id,componentLabel:m.label,phase:m.phase,gapToTarget:me,message:`Raise ${m.label} from ${Se.toFixed(1)} to exemplar ${pe.toFixed(1)}. ${i}`,toolkitLinks:[]}}).filter(m=>m.phase<=I+1&&m.gapToTarget>=0).sort((m,F)=>m.phase!==F.phase?m.phase-F.phase:F.gapToTarget-m.gapToTarget).slice(0,3),[t,I,c,a.nextSteps,v]),Ne=d.useMemo(()=>{let m=0,F=0;t.forEach(V=>{var me;const Se=Bn(V.id,b),pe=At(((me=u[V.id])==null?void 0:me[b])||[],Se);m+=pe.totalCount,F+=pe.checkedCount});const H=m>0?Math.round(F/m*100):100;return{required:m,checked:F,pct:H}},[t,b,u]),je=d.useMemo(()=>{const m=[];return T.trim()&&m.push(`Search: ${T.trim()}`),j!=="all"&&m.push(`Status: ${j.replace("-"," ")}`),$!=="all"&&m.push(`Phase: ${$}`),(re!=="score"||O!=="desc")&&m.push(`Sort: ${re} (${O})`),m},[$,T,re,O,j]),ae=()=>{Q(""),G("all"),ce("all"),Z("score"),te("desc"),_(!1)},Ve=a.phaseSummaries.find(m=>m.phase===I),Ke=(Ve==null?void 0:Ve.rag)||"Red",Te=Ke.toLowerCase(),Be=l==="color-blind-friendly"?{"N/A":"text-slate-700 bg-slate-200",Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"}:Qs,Me=l==="color-blind-friendly"?{Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"}:Zs;return e.jsxs("div",{className:`adoption-dashboard max-w-6xl mx-auto ${h?"theme-dark":"theme-light"}`,children:[L&&ue.length>0&&e.jsx("div",{className:"mb-6 rounded-lg border border-red-200 bg-red-50 p-4",children:e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-sm font-semibold text-red-800 mb-2",children:[ue.filter(m=>m.isOverdue).length>0&&`${ue.filter(m=>m.isOverdue).length} overdue action${ue.filter(m=>m.isOverdue).length>1?"s":""}`,ue.filter(m=>m.isOverdue).length>0&&ue.filter(m=>!m.isOverdue).length>0&&", ",ue.filter(m=>!m.isOverdue).length>0&&`${ue.filter(m=>!m.isOverdue).length} due within 7 days`]}),e.jsxs("ul",{className:"space-y-1.5",children:[ue.slice(0,3).map(m=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`shrink-0 text-xs font-bold px-1.5 py-0.5 rounded ${m.isOverdue?"bg-red-200 text-red-800":"bg-amber-100 text-amber-800"}`,children:m.isOverdue?"Overdue":"Due soon"}),e.jsxs("span",{className:"text-xs text-slate-700",children:[e.jsx("button",{onClick:()=>S(m.componentId),className:"font-medium text-[#005eb8] hover:underline mr-1",children:m.componentLabel}),"— ",m.action.text,m.action.dueDate&&e.jsxs("span",{className:"text-slate-400 ml-1",children:["(due"," ",new Date(m.action.dueDate).toLocaleDateString("en-GB",{day:"numeric",month:"short"}),")"]})]})]},m.action.id)),ue.length>3&&e.jsxs("li",{className:"text-xs text-slate-500 pl-1",children:["+ ",ue.length-3," more - see the Action Tracker for the full list."]})]})]}),e.jsx("button",{onClick:()=>M(!1),className:"shrink-0 text-slate-400 hover:text-slate-600 text-xl leading-none","aria-label":"Dismiss",children:"×"})]})}),e.jsxs("div",{className:"mb-1 flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h2",{className:`text-2xl font-bold ${h?"text-slate-100":"text-slate-800"}`,children:"Adoption Engine Dashboard"}),x?e.jsx("button",{type:"button",onClick:x,className:"rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Show introduction again"}):null]}),e.jsxs("p",{className:`text-sm mb-6 ${h?"text-slate-300":"text-slate-600"}`,children:["This tracks how ready ",n.orgProfile.projectName||"your programme"," is for adoption, based on ",t.length," change-management components, each assessed through up to"," ",s.length," lenses."]}),e.jsxs("div",{className:"dashboard-callout dashboard-callout--pathway mb-6 rounded-lg border p-4",children:[e.jsx("p",{className:"dashboard-callout__eyebrow text-xs font-semibold uppercase tracking-wider",children:"Current CST pathway"}),e.jsx("p",{className:"dashboard-callout__title mt-1 text-sm font-semibold",children:Ct[b]}),e.jsxs("p",{className:"dashboard-callout__body mt-1 text-sm",children:["Pathway checklist completion: ",Ne.checked,"/",Ne.required," (",Ne.pct,"%)."]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[e.jsxs("div",{className:`${h?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${h?"text-slate-300":"text-slate-500"}`,children:"Live Delivery Progress"}),e.jsxs("div",{className:"flex items-end gap-3",children:[e.jsxs("span",{className:"text-4xl font-bold text-[#005eb8]",children:[a.overallPct,"%"]}),oe!==null&&e.jsxs("span",{className:`text-sm font-semibold mb-1 ${oe>0?"text-green-600":oe<0?"text-red-500":"text-slate-400"}`,children:[oe>0?"↑":oe<0?"↓":"="," ",Math.abs(oe),"% vs last month"]})]}),e.jsx("div",{className:"mt-4 w-full bg-slate-100 rounded-full h-3 relative overflow-hidden",children:e.jsx("div",{className:"absolute top-0 left-0 h-full bg-[#005eb8]",style:{width:`${a.overallPct}%`}})}),e.jsx("div",{className:"flex justify-between text-xs mt-2 text-slate-400",children:e.jsx("span",{children:"Derived from current working data across all components."})})]}),e.jsxs("div",{className:`dashboard-metric-card dashboard-metric-card--phase dashboard-metric-card--${Te} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:"dashboard-metric-card__label text-sm font-medium mb-1",children:"Current Phase Focus"}),e.jsxs("div",{className:"mb-2 flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>K==null?void 0:K("auto"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${v==="auto"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Auto"}),e.jsx("button",{type:"button",onClick:()=>K==null?void 0:K("manual"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${v==="manual"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Manual"}),v==="manual"?e.jsx("select",{value:I,onChange:m=>D==null?void 0:D(Number(m.target.value)),className:"rounded-md border border-white/50 bg-white/90 px-2 py-1 text-xs font-medium text-slate-800","aria-label":"Manual phase focus",children:g.map(m=>e.jsx("option",{value:m,children:We[m]||`Phase ${m}`},m))}):null,v==="manual"&&R?e.jsx("button",{type:"button",onClick:R,className:"rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100",children:"Reset to suggested"}):null]}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsx("span",{className:"dashboard-metric-card__headline text-4xl font-bold",children:We[I]||`Phase ${I}`})}),e.jsxs("p",{className:"dashboard-metric-card__description text-sm mt-2",children:[Ke," status based on delivery progress and action completion.",v==="manual"?` Suggested phase is ${We[C]||`Phase ${C}`}.`:""]})]}),e.jsxs("div",{className:`${h?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${h?"text-slate-300":"text-slate-500"}`,children:"Action Completion"}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsxs("span",{className:`text-4xl font-bold ${h?"text-slate-100":"text-slate-700"}`,children:[a.actionCompletionPct,"%"]})}),e.jsxs("p",{className:`text-sm mt-2 ${h?"text-slate-300":"text-slate-500"}`,children:[a.completedActions," of ",a.totalActions," actions completed."]})]})]}),e.jsxs("div",{className:`${h?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${h?"text-slate-100":"text-slate-800"}`,children:"What To Do Next"}),e.jsx("span",{className:`text-xs ${h?"text-slate-400":"text-slate-500"}`,children:"Prioritised for live delivery"})]}),e.jsxs("p",{className:`text-sm mb-4 ${h?"text-slate-300":"text-slate-500"}`,children:["These are the biggest gaps to target for your",v==="manual"?" selected focus phase":" current phase",", largest gap first."]}),Fe.length>0?e.jsx("div",{className:"space-y-3",children:Fe.map(m=>{var H;const F=Js(m.gapToTarget);return e.jsxs("button",{onClick:()=>S(m.componentId),className:`w-full text-left rounded-md border p-3 hover:border-blue-300 transition-colors ${h?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("span",{className:`text-sm font-semibold ${h?"text-slate-100":"text-slate-800"}`,children:m.componentLabel}),e.jsx("span",{className:`text-xs font-semibold rounded px-2.5 py-0.5 ${Me[F]}`,children:F})]}),e.jsx("p",{className:`text-sm mt-1 ${h?"text-slate-300":"text-slate-600"}`,children:m.message}),(H=m.toolkitLinks)!=null&&H.length?e.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:m.toolkitLinks.map(V=>e.jsx("a",{href:V.url,target:"_blank",rel:"noopener noreferrer",onClick:Se=>Se.stopPropagation(),className:"text-xs font-medium text-[#005eb8] underline",children:V.label},`${m.componentId}-${V.url}`))}):null]},`${m.componentId}-${m.phase}`)})}):e.jsx("p",{className:"text-sm text-slate-500",children:"No priority gaps detected for the current phase. Continue tracking actions and maintain evidence quality."})]}),we&&e.jsxs("div",{className:"dashboard-callout dashboard-callout--snapshot rounded-lg border p-4 flex items-center gap-3 mb-8",children:[e.jsx("span",{className:"dashboard-callout__icon text-xl shrink-0",children:"📅"}),e.jsxs("p",{className:"dashboard-callout__body text-sm",children:[e.jsx("strong",{children:"This month hasn't been recorded yet."})," Use"," ",e.jsx("span",{className:"font-semibold",children:"'Finalise Month'"})," in the header to snapshot today's progress and build your delivery trajectory."]})]}),a.assessedCount===0?e.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-8 border border-slate-200 mb-8 text-center",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800",children:"Getting started"}),e.jsx("p",{className:"text-sm text-slate-600 mt-2 max-w-xl mx-auto",children:"Nothing has been assessed yet, so there's nothing to chart. Set up your CST Personalisation first, then start scoring your first component to see your readiness build up here."}),e.jsxs("div",{className:"mt-4 flex items-center justify-center gap-3",children:[o?e.jsx("button",{type:"button",onClick:()=>o("project-details"),className:"rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Set up your CST Personalisation"}):null,t[0]?e.jsx("button",{type:"button",onClick:()=>S(t[0].id),className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Start your first assessment"}):null]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${h?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-1 ${h?"text-slate-100":"text-slate-800"}`,children:"Phase Progress (RAG)"}),e.jsxs("p",{className:`text-sm mb-4 ${h?"text-slate-300":"text-slate-500"}`,children:["Phases run 1 to 5, from early readiness at go-live through to fully embedding the change."," ",o?e.jsx("button",{type:"button",onClick:()=>o("cm-guide"),className:"font-medium text-[#005eb8] hover:underline",children:"See Adoption Engine Onboarding"}):null]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:a.phaseSummaries.map(m=>{const F=m.rag==="Green"?"bg-green-100 text-green-700":m.rag==="Amber"?"bg-amber-100 text-amber-700":"bg-red-100 text-red-700",H=m.totalLenses?Math.round(m.assessedLenses/m.totalLenses*100):0;return e.jsxs("div",{className:`rounded-md border p-4 ${h?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:`font-semibold ${h?"text-slate-100":"text-slate-800"}`,children:We[m.phase]||`Phase ${m.phase}`}),e.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded ${F}`,children:m.rag})]}),e.jsxs("p",{className:`text-xs ${h?"text-slate-300":"text-slate-600"}`,children:[m.onTrackComponents,"/",m.componentCount," components on target"]}),e.jsxs("p",{className:`text-xs mt-1 ${h?"text-slate-300":"text-slate-600"}`,children:[H,"% lens coverage, ",m.actionCompletionPct,"% actions complete"]})]},m.phase)})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"order-2 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8",children:[e.jsxs("div",{className:`${h?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border flex flex-col`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-4 ${h?"text-slate-100":"text-slate-800"}`,children:"Readiness Trajectory"}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${h?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:n.history.length>0?e.jsx("canvas",{id:"adoption-line-chart"}):e.jsx("div",{className:"text-center text-slate-400",children:e.jsx("p",{children:"No historical data yet. Finalise your first month to generate trends."})})})]}),e.jsxs("div",{className:`${h?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border flex flex-col`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${h?"text-slate-100":"text-slate-800"}`,children:"Strategic Lenses Spread"}),E&&s[0]?e.jsx("button",{type:"button",onClick:()=>E(s[0]),className:"text-xs font-medium text-[#005eb8] hover:underline",children:"What's a lens?"}):null]}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${h?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:e.jsx("canvas",{id:"adoption-radar-chart"})}),e.jsxs("div",{className:`${h?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mt-4 rounded-md border p-3`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${h?"text-slate-300":"text-slate-600"}`,children:"Lens key"}),e.jsx("div",{className:"mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2",children:s.map((m,F)=>e.jsxs("div",{className:`flex items-center gap-2 text-xs ${h?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full",style:{backgroundColor:tt[F%tt.length]},"aria-hidden":"true"}),e.jsx("span",{children:m})]},`lens-key-${m}`))})]}),e.jsx("p",{className:`text-xs text-center mt-4 ${h?"text-slate-300":"text-slate-500"}`,children:"Visualises your current draft readiness score averaged across the 5 strategic lenses against their specific target reiquirements."})]})]}),e.jsxs("div",{className:`order-1 ${h?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"mb-4 flex w-full flex-col gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:`text-lg font-semibold ${h?"text-slate-100":"text-slate-800"}`,children:"Change Component Radar"}),e.jsx("p",{className:`text-xs mt-1 ${h?"text-slate-300":"text-slate-500"}`,children:"Show or hide the change-component readiness radar, then use the overview list below to drill into delivery status."})]}),e.jsx("div",{className:"flex w-full justify-end",children:e.jsx("button",{type:"button",onClick:()=>N(m=>!m),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-white",children:f?"Hide change component radar":"Show change component radar"})})]}),f?e.jsxs("div",{className:`w-full ${h?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("div",{className:`flex min-h-[720px] w-full items-center justify-center rounded border p-2 ${h?"border-slate-700 bg-slate-950":"border-slate-100 bg-white"}`,children:e.jsx("canvas",{id:"adoption-component-radar-chart",className:"block h-full w-full"})}),e.jsx("div",{id:"radar-legend",className:`mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm ${h?"text-slate-300":"text-slate-600"}`,children:ea.map(m=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mr-2 h-3 w-3 rounded-full",style:{backgroundColor:m.color}}),e.jsxs("span",{children:[m.score," = ",m.label]})]},m.score))}),e.jsx("p",{className:`mt-4 text-center text-xs ${h?"text-slate-300":"text-slate-500"}`,children:"Visualises the average readiness score for each component against the phase exemplar profile."})]}):null,e.jsxs("div",{className:"mt-4 w-full space-y-3",children:[e.jsxs("p",{className:`text-xs ${h?"text-slate-300":"text-slate-500"}`,children:["BRAG scoring is used for the change component overview:",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-sky-100 text-sky-800",children:"Blue"})," = every lens is level 5,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-green-100 text-green-800",children:"Green"})," = on target,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-red-100 text-red-800",children:"Red"})," = behind target dates,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-amber-100 text-amber-800",children:"Amber"})," = at risk / nearing deadline."]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:T,onChange:m=>Q(m.target.value),placeholder:"Search components...",className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"}),e.jsxs("select",{value:j,onChange:m=>G(m.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All statuses"}),e.jsx("option",{value:"not-started",children:"Not started"}),e.jsx("option",{value:"below-target",children:"Below target"}),e.jsx("option",{value:"on-track",children:"On track"})]}),e.jsxs("select",{value:$,onChange:m=>ce(m.target.value==="all"?"all":Number(m.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All phases"}),g.map(m=>e.jsx("option",{value:m,children:We[m]||`Phase ${m}`},m))]})]}),e.jsx(wt,{showAdvancedControls:de,onToggleAdvanced:()=>_(m=>!m),onReset:ae,resultText:`Showing ${De.length} components`,activeFilters:je,activeFiltersAriaLabel:"Active component filters",darkMode:h}),de?e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-md border border-slate-200 bg-slate-50 p-3",children:[e.jsxs("select",{value:re,onChange:m=>Z(m.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"score",children:"Sort by score"}),e.jsx("option",{value:"name",children:"Sort by name"}),e.jsx("option",{value:"target",children:"Sort by target"})]}),e.jsx("button",{type:"button",onClick:()=>te(m=>m==="asc"?"desc":"asc"),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white transition-colors",children:O==="asc"?"Ascending":"Descending"})]}):null]}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:[De.map(({component:m,avgNum:F,exemplarTarget:H,actionCount:V,completedActionCount:Se,delta:pe,allLensesLevelFive:me})=>{const le=nt(F,H,V,Se,me),i=le==="Red"?"↓":F>=H?"→":F<=0?"↑":"↗",y=le==="Red"?"text-red-500":F>=H?h?"text-slate-300":"text-slate-500":"text-amber-600";return e.jsxs("button",{onClick:()=>S(m.id),title:zs(m.id),className:`flex justify-between items-center p-3 rounded-md transition-colors group text-left ${h?"bg-slate-900 border border-slate-700 hover:border-blue-400":"bg-slate-50 border border-slate-100 hover:border-blue-300"}`,children:[e.jsx("span",{className:`text-sm font-medium truncate pr-2 group-hover:text-[#005eb8] ${h?"text-slate-100":"text-slate-700"}`,children:m.label}),e.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[e.jsx("span",{className:`text-xs font-semibold ${y}`,title:F>=H?"On or above expected readiness for phase focus":F<=0?"Not started: raise towards expected readiness":"Below expected readiness: continue improving","aria-label":F>=H?"At expected readiness":F<=0?"Not started, increase readiness":"Below expected readiness",children:i}),pe!==null&&e.jsxs("span",{className:`text-[11px] font-semibold ${pe>0?"text-green-600":"text-red-400"}`,title:"Change versus last finalised month",children:[pe>0?"+":"",pe.toFixed(1)]}),e.jsx("span",{className:`text-xs font-bold px-2.5 py-1 rounded ${Be[le]}`,children:le})]})]},m.id)}),!De.length&&e.jsx("div",{className:`col-span-full rounded-md border border-dashed p-6 text-sm ${h?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-500"}`,children:"No components match the current filters."})]})]})]}),e.jsxs("div",{className:`${h?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h3",{className:`text-lg font-semibold ${h?"text-slate-100":"text-slate-800"}`,children:"Lenses and which components they apply to"}),e.jsx("button",{type:"button",onClick:()=>xe(m=>!m),className:"inline-flex items-center justify-center rounded-full p-1 text-slate-500 hover:text-[#005eb8]","aria-label":"Explain lenses and components",title:"Explain lenses and components",children:e.jsx(qs,{})})]}),J?e.jsx("p",{className:"mt-2 text-xs text-slate-600 max-w-3xl",children:"A component is the change topic you are delivering (for example, Vision). A lens is the angle used to assess that component. For example, Vision is reviewed through Strategic Direction and Leadership and People Experience and Culture to check both leadership alignment and whether people understand and believe in the vision."}):null]}),e.jsxs("select",{value:ee,onChange:m=>ne(m.target.value==="all"?"all":Number(m.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:w-40",children:[e.jsx("option",{value:"all",children:"All phases"}),g.map(m=>e.jsx("option",{value:m,children:We[m]||`Phase ${m}`},m)),'"']})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(m=>{const F=t.filter(H=>H.lenses.includes(m)).filter(H=>ee==="all"||H.phase===ee);return F.length?e.jsxs("div",{className:`rounded-md p-4 ${h?"border border-slate-700 bg-slate-900":"border border-slate-100 bg-slate-50"}`,children:[e.jsx("h4",{className:"font-bold text-sm text-[#005eb8] mb-3",children:m}),e.jsx("p",{className:`mb-3 text-xs ${h?"text-slate-300":"text-slate-600"}`,children:Ys(m)}),e.jsx("ul",{className:"space-y-2",children:F.map(H=>{const V=c(H.id,m),Se=Number(V.score||0),pe=tn(H.id,I,H.target),me=V.actions||[],le=nt(Se,pe,me.length,me.filter(i=>i.status==="Completed").length,!1);return e.jsxs("li",{className:`text-xs flex justify-between items-center p-2 rounded ${h?"bg-slate-800 border border-slate-700":"bg-white border border-slate-100"}`,children:[e.jsx("span",{className:`truncate pr-2 font-medium ${h?"text-slate-100":"text-slate-700"}`,children:H.label}),e.jsx("button",{onClick:()=>S(H.id),className:`px-2.5 py-0.5 rounded font-bold ${Be[le]}`,children:le})]},H.id)})})]},m):null})})]})]})]})}const ta=us.filter(n=>n!=="Overdue start"&&n!=="Overdue completion"),st=[0,1,2,3,4,5],sa={0:"Not Started",1:"Emerging",2:"Developing",3:"Embedding",4:"Adopted",5:"Thriving"},at={"Not Started":"bg-slate-100 text-slate-700 border-slate-200","In Progress":"bg-blue-100 text-blue-800 border-blue-200",Blocked:"bg-amber-100 text-amber-800 border-amber-200",Completed:"bg-green-100 text-green-800 border-green-200"},Tn="__evidence_json__:",aa=1024*1024;function oa(n,t,s){return(s[n]||[]).filter(a=>a.linkedActions.some(c=>c.actionId===t))}function jt(n){const t=n.trim();return t?/^https?:\/\//i.test(t)?t:/^www\./i.test(t)?`https://${t}`:t:""}function ot(n){const t=(n==null?void 0:n.trim())||"";if(!t)return[];if(t.startsWith(Tn))try{const s=JSON.parse(t.slice(Tn.length));return Array.isArray(s)?s.filter(a=>a&&(a.type==="url"||a.type==="file")).map(a=>({type:a.type,label:String(a.label||"").trim(),href:String(a.href||"").trim()})).filter(a=>a.label||a.href):[]}catch{return[]}return t.split(`
`).map(s=>s.trim()).filter(Boolean).map(s=>{const a=jt(s);return{type:"url",label:s,href:a}})}function ia(n){const t=n.map(s=>({type:s.type,label:s.label.trim(),href:s.href.trim()})).filter(s=>s.label||s.href);return t.length?`${Tn}${JSON.stringify(t)}`:""}function ra(n){return new Promise((t,s)=>{const a=new FileReader;a.onload=()=>t(String(a.result||"")),a.onerror=()=>s(new Error("Unable to read file.")),a.readAsDataURL(n)})}function la(){return e.jsx("svg",{className:"w-4 h-4 text-blue-500 mt-0.5 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function ca(){return e.jsxs("svg",{className:"w-4 h-4 mr-1.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z"})]})}function da(){return e.jsx("svg",{className:"w-4 h-4 mr-1.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.964 9.964 0 012.042-3.368m2.16-1.989A9.962 9.962 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.05 10.05 0 01-4.132 5.411M15 12a3 3 0 00-3-3m0 0a2.99 2.99 0 00-2.13.88M3 3l18 18"})})}function ua(){return e.jsx("svg",{className:"w-5 h-5 ml-2 text-slate-400 group-hover:text-[#005eb8] shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function ma(n,t,s){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:"",actionType:"Admin",owner:"",timescale:"",status:"Planned",phase:n,startDate:"",dueDate:"",notes:"",evidence:"",linkedTargets:[{componentId:t,lens:s}]}}function Ue(n,t,s){const a=n.linkedTargets||[];if(!a.length)return[{componentId:t,lens:s}];const c=new Set,S=[];return a.forEach(b=>{const u=`${b.componentId}:${b.lens}`;c.has(u)||(c.add(u),S.push({componentId:b.componentId,lens:b.lens}))}),S}function ga({store:n,components:t,activeComponentId:s,getRubricText:a,getEntry:c,onComponentChange:S,onEntryUpdate:b,onOpenLensInfo:u,onMatrixToggle:o,onActionRemove:E,onObjectivesUpdate:x,darkMode:l=!1}){var Se,pe,me,le;const h=t.find(i=>i.id===s)||t[0],[v,w]=d.useState(null),[K,D]=d.useState(null),[R,T]=d.useState(!0),[Q,j]=d.useState(!0),[G,$]=d.useState(!0),[ce,ee]=d.useState({}),[ne,re]=d.useState({}),Z=((Se=n.objectives)==null?void 0:Se[h.id])||[],O=d.useMemo(()=>{const i={};return h.lenses.forEach(y=>{i[y]=c(h.id,y).actions||[]}),i},[h.id,h.lenses,c]),te=d.useMemo(()=>h.lenses.reduce((i,y)=>i+(c(h.id,y).actions||[]).length,0),[h.id,h.lenses,c]),de=d.useMemo(()=>h.lenses.reduce((i,y)=>i+(c(h.id,y).actions||[]).filter(A=>ke(A.status)==="Completed").length,0),[h.id,h.lenses,c]),_=d.useMemo(()=>h.lenses.some(i=>Number(c(h.id,i).score||0)>0),[h.id,h.lenses,c]),f=d.useMemo(()=>{const i={};return Object.keys(n.currentDraft).forEach(y=>{Object.keys(n.currentDraft[y]||{}).forEach(A=>{(n.currentDraft[y][A].actions||[]).forEach(q=>{Ue(q,y,A).forEach(ve=>{const ge=`${ve.componentId}:${ve.lens}`;i[ge]||(i[ge]=[]),i[ge].push({sourceComponentId:y,sourceLens:A,action:q,isLinkedView:!(ve.componentId===y&&ve.lens===A)})})})})}),i},[n.currentDraft]),N=d.useMemo(()=>{const i={};return t.forEach(y=>{i[y.id]=y}),i},[t]),J=d.useMemo(()=>{const i=h.lenses[0];return i?c(h.id,i).justification:""},[h.id,h.lenses,c]),xe=d.useMemo(()=>{var i;return v?((i=t.find(y=>y.id===v.sourceComponentId))==null?void 0:i.label)||v.sourceComponentId:h.label},[v,h.label,t]),g=d.useMemo(()=>{var y;if(!((y=v==null?void 0:v.action.text)!=null&&y.trim()))return"New action";const i=v.action.text.trim().replace(/\s+/g," ");return i.length>70?`${i.slice(0,70)}...`:i},[v]),C=d.useMemo(()=>Z.find(i=>i.id===(K==null?void 0:K.objectiveId))||null,[K==null?void 0:K.objectiveId,Z]),I=d.useMemo(()=>C?Pn(C,O):null,[C,O]),L=d.useMemo(()=>C?C.linkedActions.map(i=>{const y=(O[i.lens]||[]).find(q=>q.id===i.actionId),A=y?ke(y.status):null,X=y?qn(y.status,y.startDate,y.dueDate):null;return{lens:i.lens,action:y,status:A,temporalStatus:X}}):[],[C,O]),M=d.useCallback(i=>{S(i.target.value)},[S]),be=d.useCallback((i,y)=>{const A=c(h.id,i);b(h.id,i,{...A,score:y})},[h.id,c,b]),oe=d.useCallback(i=>{h.lenses.forEach(y=>{const A=c(h.id,y);b(h.id,y,{...A,justification:i})})},[h.id,h.lenses,c,b]),we=d.useCallback((i,y)=>{const A=ma(h.phase,h.id,i);y&&(A.text=y),w({sourceComponentId:h.id,sourceLens:i,mode:"create",action:A,evidenceItems:ot(A.evidence||""),linkedObjectiveIds:[],targetPickerComponentId:h.id,targetPickerLens:i})},[h.id,h.phase]),ue=d.useCallback((i,y,A)=>{var ve;const X=Ue(A,i,y),q=X[0]||{componentId:i,lens:y},ye=(((ve=n.objectives)==null?void 0:ve[i])||[]).filter(ge=>ge.linkedActions.some(Oe=>Oe.actionId===A.id)).map(ge=>ge.id);w({sourceComponentId:i,sourceLens:y,mode:"edit",actionId:A.id,action:{...A,linkedTargets:X,notes:A.notes||"",evidence:A.evidence||"",startDate:A.startDate||"",dueDate:A.dueDate||""},evidenceItems:ot(A.evidence||""),linkedObjectiveIds:ye,targetPickerComponentId:q.componentId,targetPickerLens:q.lens})},[n.objectives]),De=()=>{w(null)},Fe=()=>{var ve;if(!v)return;if(!v.action.text.trim()){window.alert("Action description is required.");return}const i={...v.action,evidence:ia(v.evidenceItems),status:ke(v.action.status),linkedTargets:Ue(v.action,v.sourceComponentId,v.sourceLens),timescale:v.action.dueDate||v.action.startDate||v.action.timescale},y=c(v.sourceComponentId,v.sourceLens),A=v.mode==="create"?[...y.actions,i]:y.actions.map(ge=>ge.id===v.actionId?i:ge);b(v.sourceComponentId,v.sourceLens,{...y,actions:A});const X=new Set(v.linkedObjectiveIds),ye=(((ve=n.objectives)==null?void 0:ve[v.sourceComponentId])||[]).map(ge=>{const Oe=ge.linkedActions.filter($e=>!($e.lens===v.sourceLens&&$e.actionId===i.id));return X.has(ge.id)?{...ge,linkedActions:[...Oe,{lens:v.sourceLens,actionId:i.id}]}:{...ge,linkedActions:Oe}});x(v.sourceComponentId,ye),De()},Ne=i=>{w(y=>{if(!y)return y;const A={...y,action:{...y.action,...i}};return A.action.status=ke(A.action.status),A})},je=(i,y)=>{w(A=>A&&{...A,targetPickerComponentId:i,targetPickerLens:y})},ae=()=>{w(i=>{if(!i)return i;const y=N[i.targetPickerComponentId]||h,A=y.lenses.includes(i.targetPickerLens)?i.targetPickerLens:y.lenses[0];if(!A)return i;const X=Ue(i.action,i.sourceComponentId,i.sourceLens);return X.some(q=>q.componentId===y.id&&q.lens===A)?i:{...i,action:{...i.action,linkedTargets:[...X,{componentId:y.id,lens:A}]}}})},Ve=(i,y)=>{w(A=>{if(!A)return A;const q=Ue(A.action,A.sourceComponentId,A.sourceLens).filter(ye=>!(ye.componentId===i&&ye.lens===y));return{...A,action:{...A.action,linkedTargets:q}}})},Ke=i=>{w(y=>{if(!y)return y;const A=new Set(y.linkedObjectiveIds);return A.has(i)?A.delete(i):A.add(i),{...y,linkedObjectiveIds:Array.from(A)}})},Te=i=>{w(y=>y&&{...y,evidenceItems:i})},Be=()=>{if(!v)return;const i=v.evidenceItems;Te([...i,{type:"url",label:"",href:""}])},Me=(i,y,A)=>{if(!v)return;const X=v.evidenceItems;if(!X[i])return;const q=[...X];y==="href"?q[i]={...q[i],href:jt(A)}:q[i]={...q[i],label:A},Te(q)},m=i=>{if(!v)return;const y=v.evidenceItems;Te(y.filter((A,X)=>X!==i))},F=async i=>{if(!v)return;const y=i.target.files;if(!(y!=null&&y.length))return;const X=[...v.evidenceItems];for(const q of Array.from(y)){if(q.size>aa){window.alert(`"${q.name}" is larger than 1MB. Please attach a URL instead.`);continue}try{const ye=await ra(q);X.push({type:"file",label:q.name,href:ye})}catch{window.alert(`Unable to upload "${q.name}".`)}}Te(X),i.target.value=""},H=(i,y)=>{y&&(D(null),ue(h.id,i,y))},V=i=>{const y=document.getElementById(i);y==null||y.scrollIntoView({behavior:"smooth",block:"start"})};return e.jsxs("div",{className:"max-w-5xl mx-auto pb-20",children:[e.jsxs("div",{className:"mb-8 flex items-center justify-between gap-4 flex-wrap",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:`text-3xl font-bold flex items-center ${l?"text-slate-100":"text-slate-800"}`,children:[h.label,e.jsx("span",{className:"bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-4 border border-blue-200",children:We[h.phase]||`Phase ${h.phase}`})]}),e.jsx("p",{className:`mt-2 ${l?"text-slate-300":"text-slate-500"}`,children:"Assess readiness at lens level. Change Component justification, outcomes, and actions are tracked below."})]}),e.jsx("select",{value:h.id,onChange:M,className:`rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 text-sm font-medium border ${l?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:t.map(i=>e.jsx("option",{value:i.id,children:i.label},i.id))})]}),e.jsxs("div",{className:`${l?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mb-6 rounded-lg border p-4`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${l?"text-slate-300":"text-slate-600"}`,children:"Guided workflow"}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:()=>V("assessment-scoring"),className:`${l?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"1. Justify"}),e.jsx("button",{type:"button",onClick:()=>V("assessment-objectives"),className:`${l?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"2. Review outcomes"}),e.jsx("button",{type:"button",onClick:()=>V("assessment-actions"),className:`${l?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"3. Plan lens actions"})]})]}),e.jsxs("div",{className:`mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${l?"border-emerald-500/40 bg-emerald-500/15 text-emerald-200":"border-emerald-200 bg-emerald-50 text-emerald-800"}`,children:[e.jsx("span",{className:"inline-block h-2 w-2 rounded-full bg-emerald-500","aria-hidden":"true"}),"Auto-save is on for scoring and component notes."]}),e.jsxs("div",{id:"assessment-scoring",className:`${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[e.jsx("h3",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:_?"Step 1: Justify":"Step 1: Justification of what is currently known"}),e.jsx("button",{type:"button",onClick:()=>T(i=>!i),className:`${l?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:R?"Hide":"Show"})]}),R?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:`block text-sm font-semibold mb-2 ${l?"text-slate-100":"text-slate-700"}`,children:"Change Component Justification"}),e.jsx("p",{className:`text-xs mb-2 ${l?"text-slate-300":"text-slate-500"}`,children:'Explain what is currently known, what evidence supports that view, and where the biggest gap sits. Example: "Sponsorship is visible only in two services; there is no monthly steering update yet; next step is to agree a trust-wide sponsor cadence."'}),e.jsx("textarea",{value:J,onChange:i=>oe(i.target.value),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-24 p-2 border ${l?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,placeholder:"Record what is currently known for this change component, the evidence behind it, and the key improvement needed next."})]}):null]}),e.jsxs("div",{id:"assessment-objectives",className:`${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-1",children:[e.jsx("h3",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:"Step 2: Review outcomes"}),e.jsx("button",{type:"button",onClick:()=>j(i=>!i),className:`${l?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:Q?"Hide":"Show"})]}),e.jsx("p",{className:`text-xs mb-3 ${l?"text-slate-300":"text-slate-500"}`,children:"Owned by this component as a whole. Status is derived automatically from the lens actions assigned to each outcome below and cannot be set manually."}),Q?Z.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${l?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:l?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Linked Actions"})]})}),e.jsx("tbody",{className:`${l?"divide-slate-700":"divide-slate-100"} divide-y`,children:Z.map(i=>{const y=Pn(i,O),A=at[y],X=()=>D({objectiveId:i.id});return e.jsxs("tr",{onClick:X,onKeyDown:q=>{(q.key==="Enter"||q.key===" ")&&(q.preventDefault(),X())},tabIndex:0,className:`${l?"hover:bg-slate-700 focus-visible:bg-slate-700":"hover:bg-slate-50 focus-visible:bg-slate-50"} cursor-pointer focus:outline-none`,children:[e.jsx("td",{className:`px-3 py-2 text-sm ${l?"text-slate-100":"text-slate-800"}`,children:i.text||"Untitled outcome"}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${A}`,children:y})}),e.jsx("td",{className:`px-3 py-2 text-sm ${l?"text-slate-300":"text-slate-600"}`,children:i.linkedActions.length?`${i.linkedActions.length} action(s)`:"None assigned"})]},i.id)})})]})}):e.jsx("p",{className:"text-sm text-slate-500",children:"No outcomes yet."}):null]}),e.jsx("div",{id:"assessment-actions",className:`${l?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mb-3 rounded-lg border p-4`,children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:"Step 3: Plan lens actions"}),e.jsx("p",{className:`mt-1 text-xs ${l?"text-slate-300":"text-slate-600"}`,children:"Track delivery actions for each lens and link them to outcomes and affected component lenses."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:`${l?"bg-slate-800 border-slate-600 text-slate-100":"bg-white border-slate-300 text-slate-700"} rounded-full border px-2 py-1 text-xs`,children:[de,"/",te," completed"]}),e.jsx("button",{type:"button",onClick:()=>$(i=>!i),className:`${l?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:G?"Hide":"Show"})]})]})}),G?e.jsx("div",{className:"space-y-8",children:h.lenses.map(i=>{var sn;const y=c(h.id,i),A=`${h.id}:${i}`,X=f[A]||[],q=X.some(B=>B.action.readinessScore===0),ye=y.score===0&&!q?1:y.score,ve=!!((sn=n.showMatrix)!=null&&sn[`${h.id}:${i}`]),ge=ne[A]||"all",Oe=Array.from(new Set(X.map(B=>B.action.actionType).filter(B=>B!==void 0))).sort((B,he)=>String(B).localeCompare(String(he))),$e=[...X].filter(B=>(B.action.readinessScore!==void 0?B.action.readinessScore:ye)!==ye?!1:ge==="all"||(B.action.actionType||"")===ge).sort((B,he)=>{const Le=ke(B.action.status)==="Completed",He=ke(he.action.status)==="Completed";if(Le!==He)return Le?1:-1;const Ge=B.action.dueDate?new Date(B.action.dueDate).getTime():Number.POSITIVE_INFINITY,an=he.action.dueDate?new Date(he.action.dueDate).getTime():Number.POSITIVE_INFINITY;return Ge-an}),xn=y.score>=h.target?"#22c55e":y.score>0?"#f59e0b":"#cbd5e1";return e.jsxs("div",{className:`${l?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:[e.jsxs("div",{className:`${l?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} p-6 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4`,children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm font-bold uppercase tracking-wider text-blue-600 block mb-1",children:"Lens"}),e.jsxs("button",{onClick:()=>u(i),className:`flex items-center text-2xl font-semibold transition-colors group text-left ${l?"text-slate-100 hover:text-[#63b3ff]":"text-slate-800 hover:text-[#005eb8]"}`,title:"View Lens Information",children:[i,e.jsx(ua,{})]})]}),e.jsxs("div",{className:"shrink-0 w-full md:w-64",children:[e.jsx("label",{className:`block text-xs font-semibold mb-1 ${l?"text-slate-300":"text-slate-500"}`,children:"Readiness Score"}),e.jsx("select",{value:y.score,onChange:B=>be(i,Number(B.target.value)),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 text-sm font-medium border ${l?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,style:{borderLeftWidth:"4px",borderLeftColor:xn},children:st.map(B=>e.jsxs("option",{value:B,children:[B," - ",sa[B]]},B))})]})]}),e.jsx("div",{className:`${l?"bg-slate-900 border-slate-700":"bg-blue-50/50 border-slate-100"} px-6 py-4 border-b text-sm`,children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start gap-4",children:[e.jsxs("div",{className:"flex items-start flex-1",children:[e.jsx(la,{}),e.jsxs("p",{className:`whitespace-pre-line ${l?"text-slate-300":"text-slate-600"}`,children:[e.jsxs("strong",{className:l?"text-slate-100":"text-slate-700",children:[y.score===0?"Not Started":`Level ${y.score}`,":"]}),` ${a(h.id,i,y.score)}`]})]}),e.jsxs("button",{onClick:()=>o(`${h.id}:${i}`),className:`${l?"bg-slate-800 border-slate-600 text-[#63b3ff] hover:text-[#90cdf4]":"bg-white border-blue-200 text-[#005eb8] hover:text-blue-800"} shrink-0 text-xs font-semibold flex items-center px-3 py-1.5 border rounded shadow-sm transition-colors`,children:[ve?e.jsx(da,{}):e.jsx(ca,{}),ve?"Hide Full Guidance":"View Full Guidance"]})]})}),ve&&e.jsx("div",{className:`${l?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} px-6 py-5 border-b`,children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4",children:st.map(B=>{const Le={0:"bg-white",1:"bg-rose-50",2:"bg-orange-50",3:"bg-yellow-50",4:"bg-green-50",5:"bg-blue-50"}[B]||"bg-white";return e.jsxs("button",{onClick:()=>be(i,B),className:`p-4 rounded-lg border shadow-sm text-left transition-colors h-full flex flex-col items-start justify-start ${y.score===B?`${Le} border-[#005eb8] ring-1 ring-[#005eb8]`:`${Le} border-slate-200 hover:border-blue-300`}`,children:[e.jsx("div",{className:`text-sm font-bold mb-2 pb-2 border-b w-full ${y.score===B?"text-[#005eb8] border-blue-200":"text-slate-700 border-slate-100"}`,children:B===0?"Not Started":`Level ${B}`}),e.jsx("p",{className:`text-xs whitespace-pre-line leading-relaxed text-left w-full ${l?"text-slate-200":"text-slate-600"}`,children:a(h.id,i,B)})]},B)})})}),e.jsxs("div",{className:`${l?"border-slate-700":"border-slate-100"} p-6 border-t`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:"Lens Actions"}),e.jsx("p",{className:`mt-1 text-xs ${l?"text-slate-300":"text-slate-500"}`,children:"Hierarchy: Outcome - Action - Affected component lenses."})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs("select",{"aria-label":`Filter ${i} actions by type`,value:ge,onChange:B=>re(he=>({...he,[A]:B.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${l?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),[...new Set([...On,...Oe])].map(B=>e.jsx("option",{value:B,children:B},B))]}),e.jsx("button",{onClick:()=>we(i),className:"px-3 py-1.5 rounded bg-[#005eb8] text-white text-xs font-semibold shadow-[0_2px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Add Action"})]})]}),$e.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${l?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:l?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action Type"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Start"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"End"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Affected Component Lenses"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Actions"})]})}),e.jsx("tbody",{className:`${l?"divide-slate-700":"divide-slate-100"} divide-y`,children:(ce[`${h.id}:${i}`]?$e:$e.slice(0,5)).map(B=>{var on;const he=B.action,Le=ke(he.status),He=qn(he.status,he.startDate,he.dueDate),Ge=He==="Overdue start"||He==="Overdue completion"?He:null,an=((on=N[B.sourceComponentId])==null?void 0:on.label)||B.sourceComponentId,ze=oa(B.sourceComponentId,he.id,n.objectives||{}),Sn=Ue(he,B.sourceComponentId,B.sourceLens).map(Pe=>{var Ye;return`${((Ye=N[Pe.componentId])==null?void 0:Ye.label)||Pe.componentId} / ${Pe.lens}`}).join(", "),vn=Qe[Le]||Qe.Planned;return e.jsxs("tr",{children:[e.jsxs("td",{className:`px-3 py-2 text-sm ${l?"text-slate-100":"text-slate-800"}`,children:[e.jsx("div",{children:he.text||"Untitled action"}),B.isLinkedView?e.jsxs("div",{className:`mt-1 text-xs ${l?"text-indigo-300":"text-indigo-700"}`,children:["Linked from ",an," /"," ",B.sourceLens]}):null]}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${vn}`,children:Le}),Ge?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:Ge}):null,!ze.length&&e.jsx("div",{className:`mt-1 text-xs ${l?"text-amber-200":"text-amber-700"}`,children:"Not yet linked"})]}),e.jsx("td",{className:`px-3 py-2 text-sm ${l?"text-slate-100":"text-slate-700"}`,children:he.actionType||"Unassigned"}),e.jsx("td",{className:`px-3 py-2 text-sm ${l?"text-slate-100":"text-slate-700"}`,children:he.owner||"Unassigned"}),e.jsx("td",{className:`px-3 py-2 text-sm ${l?"text-slate-300":"text-slate-600"}`,children:he.startDate||"-"}),e.jsx("td",{className:`px-3 py-2 text-sm ${l?"text-slate-300":"text-slate-600"}`,children:he.dueDate||"-"}),e.jsx("td",{className:`px-3 py-2 text-xs ${l?"text-slate-300":"text-slate-600"}`,children:Sn}),e.jsx("td",{className:"px-3 py-2",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"button",onClick:()=>ue(B.sourceComponentId,B.sourceLens,he),className:`${l?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Edit"}),e.jsx("button",{type:"button",onClick:()=>E(B.sourceComponentId,B.sourceLens,he.id),className:`${l?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Remove"})]})})]},`${B.sourceComponentId}:${B.sourceLens}:${he.id}`)})})]})}):e.jsx("p",{className:`text-sm ${l?"text-slate-300":"text-slate-500"}`,children:"No actions yet for this lens."}),$e.length>5?e.jsx("button",{type:"button",onClick:()=>ee(B=>({...B,[`${h.id}:${i}`]:!B[`${h.id}:${i}`]})),className:`${l?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} mt-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:ce[`${h.id}:${i}`]?"Show top 5 actions":`Show all ${$e.length} actions`}):""]})]},i)})}):null,v?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${l?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-hidden rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("h3",{className:`text-lg font-semibold ${l?"text-slate-100":"text-slate-900"}`,children:[v.mode==="create"?"Create Action":"Edit Action"," ·"," ",xe," / ",v.sourceLens," · ",g]}),e.jsx("button",{type:"button",onClick:De,className:`${l?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:"mt-4 max-h-[calc(100vh-13rem)] overflow-y-auto pr-1 grid gap-3",children:[e.jsx("div",{className:`${l?"border-slate-700 bg-slate-900":"border-blue-100 bg-white"} sticky top-0 z-10 rounded-md border px-3 py-2 shadow-sm`,children:e.jsxs("label",{className:`text-sm ${l?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Description"}),e.jsx("textarea",{value:v.action.text,onChange:i=>Ne({text:i.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${l?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})}),e.jsxs("div",{className:`${l?"border-slate-700 bg-slate-900 text-slate-200":"border-blue-100 bg-blue-50 text-slate-700"} rounded-md border px-3 py-2 text-xs`,children:[e.jsx("strong",{children:"Linking order:"})," first attach this action to one or more outcomes, then add affected component lenses (component + lens) where this action should appear."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsxs("label",{className:`text-sm ${l?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Action Type"}),e.jsx("select",{value:v.action.actionType||"Admin",onChange:i=>Ne({actionType:i.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${l?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:On.map(i=>e.jsx("option",{value:i,children:i},i))})]}),e.jsxs("label",{className:`text-sm ${l?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Owner"}),e.jsx("input",{value:v.action.owner,onChange:i=>Ne({owner:i.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${l?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("label",{className:`text-sm ${l?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Status"}),e.jsx("select",{value:v.action.status,onChange:i=>Ne({status:i.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${l?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:ta.map(i=>e.jsx("option",{value:i,children:i},i))})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("label",{className:`text-sm ${l?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Start Date"}),e.jsx("input",{type:"date",value:v.action.startDate||"",onChange:i=>Ne({startDate:i.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${l?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("label",{className:`text-sm ${l?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"End Date"}),e.jsx("input",{type:"date",value:v.action.dueDate||"",onChange:i=>Ne({dueDate:i.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${l?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsxs("label",{className:`text-sm ${l?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Notes"}),e.jsx("textarea",{value:v.action.notes||"",onChange:i=>Ne({notes:i.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${l?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("div",{className:`${l?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:"Evidence Links / Docs"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:Be,className:`${l?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Add web link"}),e.jsxs("label",{className:`${l?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:["Upload file(s)",e.jsx("input",{type:"file",multiple:!0,className:"hidden",onChange:F})]})]})]}),e.jsx("p",{className:`mt-1 text-xs ${l?"text-slate-300":"text-slate-500"}`,children:"Add evidence as either web links or uploaded files. Everything appears below in a single list."}),e.jsx("div",{className:`${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:v.evidenceItems.length?v.evidenceItems.map((i,y)=>e.jsxs("div",{className:`${l?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} grid grid-cols-1 gap-2 rounded border p-2 md:grid-cols-[auto,1fr,1fr,auto]`,children:[e.jsx("div",{className:"flex items-start pt-2",children:e.jsx("span",{className:`${i.type==="file"?"bg-emerald-100 text-emerald-800":"bg-blue-100 text-blue-800"} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`,children:i.type==="file"?"File":"Link"})}),e.jsx("input",{value:i.label,onChange:A=>Me(y,"label",A.target.value),placeholder:i.type==="file"?"Document label":"Link label",className:`rounded-md border px-2.5 py-2 text-sm ${l?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`}),e.jsx("input",{value:i.href,onChange:A=>Me(y,"href",A.target.value),placeholder:i.type==="file"?"Embedded file URL (auto generated)":"https://...",className:`rounded-md border px-2.5 py-2 text-sm ${l?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,disabled:i.type==="file"}),e.jsx("button",{type:"button",onClick:()=>m(y),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},`${i.type}-${y}`)):e.jsx("p",{className:`px-2 py-1 text-sm ${l?"text-slate-300":"text-slate-500"}`,children:"No evidence links or documents added yet."})})]}),e.jsxs("div",{className:`${l?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsx("p",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:"Affected Outcomes"}),e.jsx("p",{className:`mt-1 text-xs ${l?"text-slate-300":"text-slate-500"}`,children:"Tick 1-3 outcomes directly impacted by this action. Outcome status is auto-derived from these linked actions."}),e.jsx("div",{className:`${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:(((pe=n.objectives)==null?void 0:pe[v.sourceComponentId])||[]).length?(((me=n.objectives)==null?void 0:me[v.sourceComponentId])||[]).map(i=>{const y=v.linkedObjectiveIds.includes(i.id);return e.jsxs("label",{className:`${l?"hover:bg-slate-700":"hover:bg-slate-50"} flex items-start gap-2 rounded px-2 py-1.5`,children:[e.jsx("input",{type:"checkbox",checked:y,onChange:()=>Ke(i.id),className:"mt-0.5"}),e.jsx("span",{className:`text-sm ${l?"text-slate-100":"text-slate-700"}`,children:i.text||"Untitled outcome"})]},i.id)}):e.jsx("p",{className:`px-2 py-1 text-sm ${l?"text-slate-300":"text-slate-500"}`,children:"No outcomes are defined for this component yet."})})]}),e.jsxs("div",{className:`${l?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:"Affected Component Lenses"}),e.jsx("span",{className:"inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-600",title:"Actions often contribute to other component lenses. Add those targets here so the same action is visible in each relevant lens.",children:"i"})]}),e.jsxs("div",{className:"mt-2 space-y-2",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2",children:[e.jsx("select",{value:v.targetPickerComponentId,onChange:i=>{const y=i.target.value,A=N[y];je(y,(A==null?void 0:A.lenses[0])||"")},className:`rounded-md border px-2.5 py-2 text-sm ${l?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:t.map(i=>e.jsx("option",{value:i.id,children:i.label},i.id))}),e.jsx("select",{value:v.targetPickerLens,onChange:i=>je(v.targetPickerComponentId,i.target.value),className:`rounded-md border px-2.5 py-2 text-sm ${l?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:(((le=N[v.targetPickerComponentId])==null?void 0:le.lenses)||[]).map(i=>e.jsx("option",{value:i,children:i},i))}),e.jsx("button",{type:"button",onClick:ae,disabled:Ue(v.action,v.sourceComponentId,v.sourceLens).some(i=>i.componentId===v.targetPickerComponentId&&i.lens===v.targetPickerLens),title:Ue(v.action,v.sourceComponentId,v.sourceLens).some(i=>i.componentId===v.targetPickerComponentId&&i.lens===v.targetPickerLens)?"Already added":"Add selected affected lens",className:`${l?"border-cyan-500/50 bg-cyan-500/15 text-cyan-100 hover:bg-cyan-500/25":"border-cyan-300 bg-cyan-100 text-cyan-900 hover:bg-cyan-200"} rounded-md border px-3 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-60`,children:"Add Lens"})]}),e.jsx("div",{className:`${l?"border-slate-700":"border-slate-200"} overflow-hidden rounded border`,children:e.jsxs("table",{className:`min-w-full ${l?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:l?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Component"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Remove"})]})}),e.jsx("tbody",{className:`${l?"divide-slate-700":"divide-slate-100"} divide-y`,children:Ue(v.action,v.sourceComponentId,v.sourceLens).map(i=>{var y;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-2.5 py-2 text-sm ${l?"text-slate-100":"text-slate-700"}`,children:((y=N[i.componentId])==null?void 0:y.label)||i.componentId}),e.jsx("td",{className:`px-2.5 py-2 text-sm ${l?"text-slate-100":"text-slate-700"}`,children:i.lens}),e.jsx("td",{className:"px-2.5 py-2",children:e.jsx("button",{type:"button",onClick:()=>Ve(i.componentId,i.lens),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},`${i.componentId}:${i.lens}`)})})]})})]})]})]}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:De,className:`${l?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Cancel"}),e.jsx("button",{type:"button",onClick:Fe,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Save Action"})]})]})}):null,K&&C&&I?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":"Outcome Details",className:`w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${l?"text-slate-100":"text-slate-900"}`,children:"Outcome Details"}),e.jsx("button",{type:"button",onClick:()=>D(null),className:`${l?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${l?"text-slate-400":"text-slate-500"}`,children:"Outcome"}),e.jsx("p",{className:`mt-1 text-sm ${l?"text-slate-100":"text-slate-900"}`,children:C.text||"Untitled outcome"})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${l?"text-slate-400":"text-slate-500"}`,children:"Status"}),e.jsx("span",{className:`mt-1 inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${at[I]}`,children:I})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${l?"text-slate-400":"text-slate-500"}`,children:"Linked Actions"}),L.length?e.jsx("div",{className:`mt-2 overflow-x-auto rounded-md border ${l?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:`min-w-full divide-y ${l?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"}`,children:[e.jsx("thead",{className:l?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Navigate"})]})}),e.jsx("tbody",{className:`divide-y ${l?"divide-slate-700":"divide-slate-100"}`,children:L.map(i=>{var A,X;const y=i.status?Qe[i.status]||Qe.Planned:Qe.Planned;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${l?"text-slate-100":"text-slate-700"}`,children:i.lens}),e.jsx("td",{className:`px-3 py-2 text-sm ${l?"text-slate-100":"text-slate-700"}`,children:((A=i.action)==null?void 0:A.text)||"Linked action not found"}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${y}`,children:i.status||"Not Started"}),i.temporalStatus==="Overdue start"||i.temporalStatus==="Overdue completion"?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:i.temporalStatus}):null]}),e.jsx("td",{className:"px-3 py-2",children:i.action?e.jsx("button",{type:"button",onClick:()=>H(i.lens,i.action||void 0),className:`${l?"border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25":"border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Open Action"}):e.jsx("span",{className:`text-xs ${l?"text-slate-500":"text-slate-400"}`,children:"Unavailable"})})]},`${i.lens}:${((X=i.action)==null?void 0:X.id)||"missing"}`)})})]})}):e.jsx("p",{className:`mt-1 text-sm ${l?"text-slate-300":"text-slate-500"}`,children:"No linked actions assigned."})]})]})]})}):null]})}const un=50;function pa(n){const t=new Date(n);return Number.isNaN(t.getTime())?n:t.toLocaleString("en-GB",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function ha({events:n,darkMode:t=!1}){const[s,a]=d.useState("all"),[c,S]=d.useState("all"),[b,u]=d.useState("all"),[o,E]=d.useState(""),[x,l]=d.useState(1),h=d.useMemo(()=>["all",...Array.from(new Set(n.map(j=>j.eventType))).sort()],[n]),v=d.useMemo(()=>["all",...Array.from(new Set(n.map(j=>j.componentId).filter(Boolean))).sort()],[n]),w=d.useMemo(()=>["all",...Array.from(new Set(n.map(j=>j.actor).filter(Boolean))).sort()],[n]),K=d.useMemo(()=>{const j=o.trim().toLowerCase();return n.filter(G=>s==="all"?!0:G.eventType===s).filter(G=>c==="all"?!0:G.componentId===c).filter(G=>b==="all"?!0:G.actor===b).filter(G=>j?[G.summary,G.reason,G.entityId,G.lens].filter(Boolean).some($=>String($).toLowerCase().includes(j)):!0).sort((G,$)=>Date.parse($.timestamp)-Date.parse(G.timestamp))},[n,s,c,b,o]),D=Math.max(1,Math.ceil(K.length/un)),R=Math.min(x,D),T=(R-1)*un,Q=K.slice(T,T+un);return e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Audit Log"}),e.jsx("p",{className:`text-sm mt-1 ${t?"text-slate-300":"text-slate-600"}`,children:"Timestamped history of CST changes, including who made each change."})]}),e.jsxs("div",{className:`grid gap-3 md:grid-cols-4 rounded-lg border p-4 ${t?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Event type"}),e.jsx("select",{value:s,onChange:j=>{a(j.target.value),l(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:h.map(j=>e.jsx("option",{value:j,children:j==="all"?"All":j},j))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Component"}),e.jsx("select",{value:c,onChange:j=>{S(j.target.value),l(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:v.map(j=>e.jsx("option",{value:j,children:j==="all"?"All":j},j))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Actor"}),e.jsx("select",{value:b,onChange:j=>{u(j.target.value),l(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:w.map(j=>e.jsx("option",{value:j,children:j==="all"?"All":j},j))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Search"}),e.jsx("input",{value:o,onChange:j=>{E(j.target.value),l(1)},placeholder:"summary, reason, id",className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsx("div",{className:`rounded-lg border overflow-hidden ${t?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full text-sm",children:[e.jsx("thead",{className:t?"bg-slate-900 text-slate-200":"bg-slate-50 text-slate-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left",children:"When"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Who"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"What"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Context"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Details"})]})}),e.jsx("tbody",{className:t?"bg-slate-800 text-slate-100":"bg-white text-slate-800",children:Q.length?Q.map(j=>e.jsxs("tr",{className:t?"border-t border-slate-700":"border-t border-slate-100",children:[e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:pa(j.timestamp)}),e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:j.actor||"Unknown user"}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{className:"font-medium",children:j.summary}),e.jsx("div",{className:`text-xs mt-1 ${t?"text-slate-300":"text-slate-600"}`,children:j.eventType})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{children:j.componentId||"-"}),e.jsx("div",{className:`text-xs ${t?"text-slate-300":"text-slate-600"}`,children:j.lens||"-"})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[j.reason?e.jsxs("div",{children:["Reason: ",j.reason]}):null,j.before||j.after?e.jsxs("details",{className:"mt-1",children:[e.jsx("summary",{className:"cursor-pointer text-xs underline",children:"Before/After"}),e.jsx("pre",{className:`mt-1 text-xs whitespace-pre-wrap ${t?"text-slate-300":"text-slate-600"}`,children:JSON.stringify({before:j.before,after:j.after},null,2)})]}):null]})]},j.id)):e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-6 text-center",colSpan:5,children:"No audit events found for the selected filters."})})})]})}),e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("span",{className:t?"text-slate-300":"text-slate-600",children:["Showing ",Q.length?T+1:0,"-",Math.min(T+un,K.length)," of ",K.length]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>l(j=>Math.max(1,j-1)),disabled:R<=1,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Previous"}),e.jsxs("span",{className:t?"text-slate-200":"text-slate-700",children:["Page ",R," / ",D]}),e.jsx("button",{type:"button",onClick:()=>l(j=>Math.min(D,j+1)),disabled:R>=D,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Next"})]})]})]})}const fa=[{id:"why",question:"Why are we doing this?",framework:"Force Field Analysis - Driving Forces",description:"The forces pushing for change - the case that makes it worth doing.",componentIds:["case_for_change"]},{id:"future",question:"What will the future look like?",framework:"Vision",description:"A clear picture of the destination, understood and shared by everyone.",componentIds:["vision"]},{id:"barriers",question:"What might prevent us from achieving the vision?",framework:"Force Field Analysis - Restraining Forces",description:"The forces working against change - risks, resistance and blockers to plan for.",componentIds:["case_for_change","resistance"]},{id:"impacted",question:"Who's going to be impacted by the change?",framework:"Stakeholder Analysis & Change Impact Analysis",description:"Everyone affected by the change, and how deeply it affects them.",componentIds:["stakeholder","change_impact"]},{id:"leading",question:"Who's leading the change?",framework:"Sponsor Coalition & Change Network",description:"The visible leaders and the network of champions carrying the change day to day.",componentIds:["sponsorship","change_network"]},{id:"persuade",question:"How will we persuade people to change?",framework:"Case for Change",description:"The compelling narrative that wins hearts and minds.",componentIds:["case_for_change"]}],it=[{phase:1,label:"Pre-Discovery",programmeStage:"Concept",tagline:"Define the change",deliverables:["Change Vision defined and communicated","Compelling case for change developed"],color:"bg-blue-50",darkColor:"bg-blue-950/45",textColor:"text-blue-700",darkTextColor:"text-blue-100",borderColor:"border-blue-300",darkBorderColor:"border-blue-700"},{phase:2,label:"Solution Design",programmeStage:"Definition",tagline:"Prepare the change",deliverables:["Change Impact analysed","Change Management inputted to Business Case","Engagement and Comms Strategy developed"],color:"bg-violet-50",darkColor:"bg-violet-950/45",textColor:"text-violet-700",darkTextColor:"text-violet-100",borderColor:"border-violet-300",darkBorderColor:"border-violet-700"},{phase:3,label:"Development",programmeStage:"Design & Develop",tagline:"Plan the change",deliverables:["Engagement and Comms Plan developed","Change Management Plan developed"],color:"bg-amber-50",darkColor:"bg-amber-950/45",textColor:"text-amber-700",darkTextColor:"text-amber-100",borderColor:"border-amber-300",darkBorderColor:"border-amber-700"},{phase:4,label:"Deployment / Go Live",programmeStage:"Implementation",tagline:"Manage implementation of the change",deliverables:["Change Management Plan executed","Communications delivered and Stakeholders engaged","Future State Processes validated","Skills gaps addressed","Future State Processes trialled and in use"],color:"bg-orange-50",darkColor:"bg-orange-950/45",textColor:"text-orange-700",darkTextColor:"text-orange-100",borderColor:"border-orange-300",darkBorderColor:"border-orange-700"},{phase:5,label:"Post-Deployment",programmeStage:"Transition / Close",tagline:"Reinforce and sustain the change",deliverables:["Change adoption evaluated","Business Change refinements actioned","Change sustained"],color:"bg-green-50",darkColor:"bg-green-950/45",textColor:"text-green-700",darkTextColor:"text-green-100",borderColor:"border-green-300",darkBorderColor:"border-green-700"}],ba=[{title:"Handling Resistance",body:"Helping project managers navigate potential roadblocks and maintain project momentum through identifying and addressing resistance using effective communication, stakeholder engagement, and mitigation strategies."},{title:"Engaging Stakeholders",body:"Identifying key individuals and groups affected by the project and working closely with them to understand concerns, gather feedback, and ensure their perspectives are considered."},{title:"Communicating and Raising Awareness",body:"Developing engagement and communication plans that support project managers in creating clear and consistent messaging about the project's purpose, goals, and benefits."},{title:"Managing Expectations",body:"Setting realistic expectations for stakeholders regarding project outcomes, timelines, and potential disruptions by addressing concerns, clarifying misconceptions, and managing expectations."},{title:"Ensuring Change Readiness",body:"Assessing the readiness of an organisation or team for change and developing strategies to bridge any gaps."},{title:"Mitigating Risks",body:"Through anticipating and addressing risks associated with change, such as resistance, lack of stakeholder support, or unexpected obstacles."},{title:"Adopting Change Sustainably",body:"Supporting project managers in developing strategies to embed the changes into the organisation's culture, processes, and systems."}];function In({title:n,description:t,isOpen:s,onToggle:a,children:c,darkMode:S=!1}){return e.jsxs("section",{className:`mb-4 overflow-hidden rounded-lg border ${S?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("button",{type:"button",onClick:a,"aria-expanded":s,className:`flex w-full items-center justify-between gap-4 p-4 text-left transition-colors ${S?"bg-slate-900 hover:bg-slate-800":"bg-white hover:bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${S?"text-slate-100":"text-slate-800"}`,children:n}),t?e.jsx("p",{className:`mt-0.5 text-sm ${S?"text-slate-300":"text-slate-500"}`,children:t}):null]}),e.jsx("span",{className:`shrink-0 text-xl font-bold transition-transform ${S?"text-slate-500":"text-slate-400"} ${s?"rotate-45":""}`,children:"+"})]}),s?e.jsx("div",{className:`border-t p-5 pt-4 ${S?"border-slate-700 bg-slate-900":"border-slate-100 bg-white"}`,children:c}):null]})}function xa({onComponentClick:n,guidanceTarget:t="Default",linkOverrides:s,darkMode:a=!1}){const[c,S]=d.useState("questions"),[b,u]=d.useState(null),o=x=>{S(l=>l===x?null:x)},E=x=>{u(l=>l===x?null:x)};return e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsx("h2",{className:`mb-2 text-2xl font-bold ${a?"text-slate-100":"text-slate-800"}`,children:"Change Management Toolkit"}),e.jsx("p",{className:`mb-8 text-sm ${a?"text-slate-300":"text-slate-500"}`,children:"NHS England Programme Delivery Lifecycle - an introduction to the five change phases and the role of the Change Manager."}),e.jsxs("div",{className:"bg-[#005eb8] text-white rounded-lg p-6 mb-8 flex flex-col sm:flex-row sm:items-center gap-4",children:[e.jsx("div",{className:"flex-shrink-0 w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold",children:"!"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-blue-100 uppercase tracking-wide mb-1",children:"When is the best time to start thinking about Change Management?"}),e.jsx("p",{className:"text-2xl font-bold",children:"Answer: Now!"}),e.jsx("p",{className:"text-sm text-blue-100 mt-1",children:"Change management should be considered from the very start of any project - not as an afterthought at go-live."})]})]}),e.jsx(In,{title:"The 6 Key Questions",description:"Six questions worth returning to throughout the life of the programme, each backed by a change model and linked to where you can act on it.",isOpen:c==="questions",onToggle:()=>o("questions"),darkMode:a,children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:fa.map((x,l)=>{const h=vt(t,x.componentIds[0],"inputs",s).slice(0,2);return e.jsxs("div",{className:`rounded-md border p-4 ${a?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsxs("span",{className:"shrink-0 w-7 h-7 rounded-full bg-blue-100 text-[#005eb8] text-xs font-bold flex items-center justify-center",children:["Q",l+1]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${a?"text-slate-100":"text-slate-800"}`,children:x.question}),e.jsx("span",{className:`mt-1 inline-block rounded border px-2 py-0.5 text-xs font-medium ${a?"border-indigo-500/40 bg-indigo-500/15 text-indigo-200":"border-indigo-200 bg-indigo-50 text-indigo-700"}`,children:x.framework})]})]}),e.jsx("p",{className:`mt-3 text-xs leading-relaxed ${a?"text-slate-300":"text-slate-600"}`,children:x.description}),h.length?e.jsx("div",{className:"mt-3 flex flex-wrap gap-x-3 gap-y-1",children:h.map(v=>e.jsx("a",{href:v.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-medium text-[#005eb8] underline",children:v.label},`${x.id}-${v.url}`))}):null,e.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:x.componentIds.map(v=>{const w=kn(v);return w?e.jsxs("button",{type:"button",onClick:()=>n(v),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold transition-colors ${a?"border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25":"border-blue-200 bg-blue-50 text-[#005eb8] hover:bg-blue-100"}`,children:["Go to ",w.label]},v):null})})]},x.id)})})}),e.jsxs(In,{title:"The Five Change Phases",description:"Select a phase to see the key deliverables expected at that stage.",isOpen:c==="phases",onToggle:()=>o("phases"),darkMode:a,children:[e.jsx("div",{className:`mb-6 hidden grid-cols-5 gap-1 overflow-hidden rounded-lg border text-center text-xs font-semibold md:grid ${a?"border-slate-700":"border-slate-200"}`,children:it.map(x=>e.jsxs("button",{onClick:()=>E(x.phase),className:`py-2 px-1 transition-colors ${b===x.phase?`${x.color} ${x.textColor} ring-2 ring-inset ring-current`:a?"bg-slate-800 text-slate-300 hover:bg-slate-700":"bg-slate-100 text-slate-500 hover:bg-slate-200"}`,children:["Phase ",x.phase]},x.phase))}),e.jsx("div",{className:"space-y-3",children:it.map(x=>{const l=b===x.phase;return e.jsxs("div",{className:`rounded-lg border overflow-hidden transition-shadow ${a?x.darkBorderColor:x.borderColor} ${l?"shadow-md":""}`,children:[e.jsxs("button",{onClick:()=>E(x.phase),className:`w-full flex items-center justify-between p-4 text-left transition-colors ${a?x.darkColor:x.color}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 border ${a?`${x.darkTextColor} bg-slate-900 ${x.darkBorderColor}`:`${x.textColor} bg-white ${x.borderColor}`}`,children:x.phase}),e.jsxs("div",{children:[e.jsx("p",{className:`font-semibold text-sm ${a?x.darkTextColor:x.textColor}`,children:x.label}),e.jsxs("p",{className:`text-xs ${a?"text-slate-300":"text-slate-500"}`,children:[e.jsxs("span",{className:"italic",children:['"',x.tagline,'"']})," · ",x.programmeStage]})]})]}),e.jsx("span",{className:`text-lg font-bold transition-transform ${a?x.darkTextColor:x.textColor} ${l?"rotate-45":""}`,children:"+"})]}),l&&e.jsxs("div",{className:`border-t px-5 pb-5 pt-3 ${a?"border-slate-700 bg-slate-900":"border-slate-100 bg-white"}`,children:[e.jsx("p",{className:`mb-3 text-xs font-semibold uppercase tracking-wide ${a?"text-slate-300":"text-slate-500"}`,children:"Key deliverables"}),e.jsx("ul",{className:"space-y-2",children:x.deliverables.map((h,v)=>e.jsxs("li",{className:`flex items-start gap-2 text-sm ${a?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{className:`mt-0.5 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${a?`${x.darkColor} ${x.darkTextColor}`:`${x.color} ${x.textColor}`}`,children:v+1}),h]},v))})]})]},x.phase)})})]}),e.jsx(In,{title:"The Role of the Change Manager",description:"Change management (and change managers) provide essential assistance to project managers through:",isOpen:c==="role",onToggle:()=>o("role"),darkMode:a,children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:ba.map(x=>e.jsxs("div",{className:`rounded-md border p-4 ${a?"border-slate-700 bg-slate-800":"border-slate-100 bg-slate-50"}`,children:[e.jsx("p",{className:"text-sm font-semibold text-[#005eb8] mb-1",children:x.title}),e.jsx("p",{className:`text-xs leading-relaxed ${a?"text-slate-300":"text-slate-600"}`,children:x.body})]},x.title))})}),e.jsxs("div",{className:`flex flex-col gap-4 rounded-lg border p-5 sm:flex-row sm:items-center ${a?"border-slate-700 bg-slate-800":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:`mb-1 text-sm font-semibold ${a?"text-slate-100":"text-slate-700"}`,children:"Explore the full Toolkit"}),e.jsx("p",{className:`text-xs ${a?"text-slate-300":"text-slate-500"}`,children:"Access templates, frameworks, and guidance materials on the NHS Change Management Network workspace."})]}),e.jsx("a",{href:"https://future.nhs.uk/CMN/view?objectId=129489733",target:"_blank",rel:"noopener noreferrer",className:"shrink-0 inline-flex items-center gap-2 rounded-md bg-[#005eb8] text-white text-sm font-medium px-4 py-2 hover:bg-blue-700 transition-colors",children:"Change Management Toolkit ↗"})]})]})}const Un="focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",Ot=`inline-flex items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] transition-colors ${Un}`,hn=`inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#212b32] border border-[#768692] shadow-[0_3px_0_#d8dde0] hover:bg-[#f0f4f5] transition-colors ${Un}`,kt=Un,rt={1:"Pre go-live planning and early mobilisation.",2:"Go-live readiness and immediate launch support.",3:"Early adoption reinforcement and consistency.",4:"Embedding new ways of working across teams.",5:"Sustained adoption and benefits realisation at scale."},Sa={1:"Low confidence",2:"Some confidence",3:"Moderate confidence",4:"High confidence",5:"Very high confidence"},va={A:"Well embedded in practice",B:"Mostly embedded in practice",C:"Partly embedded in practice",D:"Early adoption in practice",E:"Not yet embedded in practice"};function ya(n){return n>=4?"high":n===3?"average":"below"}function wa(n){return n==="A"||n==="B"?"high":n==="C"?"average":"below"}function Na(n,t){const s=wa(n),a=ya(t),c=s==="high"&&a==="high",S=s==="below"&&a==="below",b=s==="high"&&a!=="below"||a==="high"&&s!=="below";return c?"Blue":S?"Red":b?"Green":"Amber"}function Ca({orgProfile:n,onProfileUpdate:t,components:s,store:a,getEntry:c,onComponentClick:S,onOpenOnboarding:b,darkMode:u=!1}){var re,Z,O,te,de,_;const[o,E]=d.useState(n),[x,l]=d.useState(null),h=ms(o),v=d.useMemo(()=>h.errors.reduce((f,N)=>(f[N.field]||(f[N.field]=[]),f[N.field].push(N.message),f),{}),[h.errors]),w=d.useCallback(f=>{var N;return(N=v[f])==null?void 0:N[0]},[v]),K=!!(o.trustName.trim()&&(o.projectName||"").trim()&&(o.leadName||"").trim()&&o.cst.goLiveDate.trim());d.useEffect(()=>{E(n)},[n]);const D=d.useCallback(f=>{const N={...o,trustName:f};E(N),t(N)},[o,t]),R=d.useCallback(f=>{const N={...o,projectName:f};E(N),t(N)},[o,t]),T=d.useCallback(f=>{const N={...o,leadName:f};E(N),t(N)},[o,t]),Q=d.useCallback(f=>{const N={...o,cst:{...o.cst,type:f}};E(N),t(N)},[o,t]),j=d.useCallback(f=>{const N={...o,cst:{...o.cst,pathway:f}};E(N),t(N)},[o,t]),G=d.useCallback((f,N)=>{const J={...o,cst:{...o.cst,[f]:N}};E(J),t(J)},[o,t]),$=d.useCallback(f=>{const N={...o,cst:{...o.cst,toolkitChoice:f}};E(N),t(N)},[o,t]),ce=d.useCallback((f,N,J)=>{const xe=o.cst.phaseCapability[f]||{competence:"C",confidence:3},g={...o,cst:{...o.cst,phaseCapability:{...o.cst.phaseCapability,[f]:{competence:xe.competence,confidence:xe.confidence,assessedAt:new Date().toISOString(),reason:"manual",[N]:J}}}};E(g),t(g)},[o,t]),ee=d.useCallback(f=>{const N={...o,linkOverrides:f};E(N),t(N)},[o,t]),ne=s.reduce((f,N)=>(f[N.phase]=f[N.phase]||[],f[N.phase].push(N),f),{});return e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h2",{className:`text-2xl font-bold ${u?"text-slate-100":"text-slate-800"}`,children:"CST Personalisation"}),e.jsx("button",{type:"button",onClick:b,className:hn,"data-testid":"cst-show-intro-button",children:"Show introduction again"})]}),e.jsx("p",{className:`text-sm -mt-4 ${u?"text-slate-300":"text-slate-600"}`,children:"This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways it follows, and how it's tracking against its readiness phases."}),e.jsxs("div",{className:`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${u?"border-emerald-500/40 bg-emerald-500/15 text-emerald-200":"border-emerald-200 bg-emerald-50 text-emerald-800"}`,children:[e.jsx("span",{className:"inline-block h-2 w-2 rounded-full bg-emerald-500","aria-hidden":"true"}),"Auto-save is on for CST Personalisation."]}),e.jsxs("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:`text-lg font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Organisation profile"}),e.jsx("p",{className:`text-sm ${u?"text-slate-300":"text-slate-600"}`,children:"Step 1: Basic details."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-trust-name",className:`block text-sm font-medium mb-1 ${u?"text-slate-200":"text-slate-700"}`,children:"Organisation Name"}),e.jsx("input",{id:"org-trust-name",type:"text","data-testid":"cst-trust-name-input",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${u?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:o.trustName,onChange:f=>D(f.target.value),"aria-invalid":!!w("trustName"),"aria-describedby":w("trustName")?"org-trust-name-error":void 0}),w("trustName")?e.jsx("p",{id:"org-trust-name-error",className:`mt-1 text-xs ${u?"text-amber-300":"text-red-700"}`,children:w("trustName")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-project-name",className:`block text-sm font-medium mb-1 ${u?"text-slate-200":"text-slate-700"}`,children:"Programme / Project Name"}),e.jsx("input",{id:"org-project-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${u?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:o.projectName||"",onChange:f=>R(f.target.value)})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-lead-name",className:`block text-sm font-medium mb-1 ${u?"text-slate-200":"text-slate-700"}`,children:"Lead Submitter (Change Lead)"}),e.jsx("input",{id:"org-lead-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${u?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:o.leadName||"",onChange:f=>T(f.target.value)})]}),K?e.jsxs("div",{className:`rounded-md border p-4 ${u?"border-green-500/40 bg-green-500/10":"border-green-200 bg-green-50"}`,children:[e.jsx("p",{className:`text-sm font-semibold ${u?"text-green-200":"text-green-900"}`,children:"Stage 1 complete: Project details captured."}),e.jsx("p",{className:`mt-1 text-xs ${u?"text-green-100":"text-green-800"}`,children:"Your details are saved. Continue to assign delivery actions against component lenses."}),e.jsx("button",{type:"button",onClick:()=>{s[0]&&S(s[0].id)},className:"mt-3 rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Continue to assigning actions"})]}):e.jsx("div",{className:`rounded-md border p-3 text-xs ${u?"border-amber-500/40 bg-amber-500/10 text-amber-100":"border-amber-200 bg-amber-50 text-amber-900"}`,children:"Stage 1 in progress: add organisation name, programme name, lead name, and go-live date to complete this step."}),e.jsxs("details",{className:`${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,open:!0,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Step 2: Pathway and timeline (Context Specific Template)"}),e.jsx("p",{className:`mt-2 text-xs ${u?"text-slate-300":"text-slate-600"}`,children:"Choose the full pathway title for your programme, then set key timeline dates."}),e.jsxs("div",{className:"mt-3 grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-type",className:`block text-sm font-medium mb-1 ${u?"text-slate-200":"text-slate-700"}`,children:"CST Type"}),e.jsx("select",{id:"cst-type",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${u?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:o.cst.type,onChange:f=>Q(f.target.value),children:Es.map(f=>e.jsx("option",{value:f.value,children:f.label},f.value))})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-pathway",className:`block text-sm font-medium mb-1 ${u?"text-slate-200":"text-slate-700"}`,children:"Pathway"}),e.jsx("select",{id:"cst-pathway",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${u?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:o.cst.pathway,onChange:f=>j(f.target.value),"aria-invalid":!!w("cst.pathway"),"aria-describedby":w("cst.pathway")?"cst-pathway-error":void 0,children:Nt.map(f=>e.jsx("option",{value:f.value,children:f.label},f.value))}),w("cst.pathway")?e.jsx("p",{id:"cst-pathway-error",className:`mt-1 text-xs ${u?"text-amber-300":"text-red-700"}`,children:w("cst.pathway")}):null]})]}),e.jsxs("div",{className:"mt-3 grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-go-live",className:`block text-sm font-medium mb-1 ${u?"text-slate-200":"text-slate-700"}`,children:"Go Live Date (required)"}),e.jsx("input",{id:"cst-go-live",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${u?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:o.cst.goLiveDate,onChange:f=>G("goLiveDate",f.target.value),"aria-invalid":!!w("cst.goLiveDate"),"aria-describedby":w("cst.goLiveDate")?"cst-go-live-error":void 0}),w("cst.goLiveDate")?e.jsx("p",{id:"cst-go-live-error",className:`mt-1 text-xs ${u?"text-amber-300":"text-red-700"}`,children:w("cst.goLiveDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-full-adoption",className:`block text-sm font-medium mb-1 ${u?"text-slate-200":"text-slate-700"}`,children:"Full Adoption Date (optional)"}),e.jsx("input",{id:"cst-full-adoption",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${u?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:o.cst.fullAdoptionDate,onChange:f=>G("fullAdoptionDate",f.target.value),"aria-invalid":!!w("cst.fullAdoptionDate"),"aria-describedby":w("cst.fullAdoptionDate")?"cst-full-adoption-error":void 0}),w("cst.fullAdoptionDate")?e.jsx("p",{id:"cst-full-adoption-error",className:`mt-1 text-xs ${u?"text-amber-300":"text-red-700"}`,children:w("cst.fullAdoptionDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-benefit",className:`block text-sm font-medium mb-1 ${u?"text-slate-200":"text-slate-700"}`,children:"Benefit Realisation Date (optional)"}),e.jsx("input",{id:"cst-benefit",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${u?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:o.cst.benefitRealizationDate,onChange:f=>G("benefitRealizationDate",f.target.value),"aria-invalid":!!w("cst.benefitRealizationDate"),"aria-describedby":w("cst.benefitRealizationDate")?"cst-benefit-error":void 0}),w("cst.benefitRealizationDate")?e.jsx("p",{id:"cst-benefit-error",className:`mt-1 text-xs ${u?"text-amber-300":"text-red-700"}`,children:w("cst.benefitRealizationDate")}):null]})]}),h.errors.filter(f=>f.field.startsWith("cst.")).length>0?e.jsxs("div",{className:`mt-4 rounded-md border p-3 ${u?"border-amber-500/40 bg-amber-500/10":"border-amber-300 bg-amber-50"}`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${u?"text-amber-200":"text-amber-800"}`,children:"CST validation warnings"}),e.jsx("ul",{className:`mt-2 space-y-1 text-sm ${u?"text-amber-100":"text-amber-900"}`,children:h.errors.filter(f=>f.field.startsWith("cst.")).map(f=>e.jsxs("li",{children:["- ",f.message]},f.field+f.message))})]}):null]}),e.jsxs("details",{className:`${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Step 3: Confidence and capability by phase"}),e.jsx("div",{className:"mt-2 flex flex-wrap items-center justify-between gap-2",children:e.jsx("p",{className:`text-xs ${u?"text-slate-300":"text-slate-600"}`,children:"Capture your starting position, then refresh when readiness phase changes or after major milestones."})}),e.jsxs("div",{className:"mt-3 rounded-md border border-blue-200 bg-blue-50 p-3 text-xs text-blue-900",children:[e.jsx("p",{className:"font-semibold",children:"How this self-assessment works"}),e.jsx("p",{className:"mt-1",children:"Confidence is how sure your team feels. Delivery readiness is how embedded the new way of working is in practice."}),e.jsx("p",{className:"mt-1",children:"Cards now use BRAG backgrounds: Blue = both high, Green = one high and the other at least average, Amber = neither high, Red = both below average."})]}),e.jsx("div",{className:"mt-3 space-y-3",children:Zn.map(f=>{const N=o.cst.phaseCapability[f]||{competence:"C",confidence:3},J=Na(N.competence,N.confidence),xe=J==="Blue"?"border-sky-300 bg-sky-50":J==="Green"?"border-emerald-300 bg-emerald-50":J==="Red"?"border-red-300 bg-red-50":"border-amber-300 bg-amber-50",g=J==="Blue"?"text-sky-800 bg-sky-100":J==="Green"?"text-emerald-800 bg-emerald-100":J==="Red"?"text-red-800 bg-red-100":"text-amber-800 bg-amber-100";return e.jsxs("div",{className:`${u?"border-slate-700 bg-slate-800":xe} rounded-md border p-3`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{className:"relative flex items-center gap-2",children:[e.jsxs("span",{className:`font-semibold ${u?"text-slate-100":"text-slate-700"}`,children:["Phase ",f]}),e.jsx("button",{type:"button",onMouseEnter:()=>l(f),onMouseLeave:()=>l(C=>C===f?null:C),onFocus:()=>l(f),onBlur:()=>l(C=>C===f?null:C),onClick:()=>l(C=>C===f?null:f),className:"h-5 w-5 rounded-full border border-slate-300 text-xs font-semibold text-slate-600","aria-expanded":x===f,"aria-controls":`phase-help-${f}`,"aria-label":`Phase ${f} guidance`,children:"i"}),x===f?e.jsx("div",{id:`phase-help-${f}`,role:"tooltip",className:"absolute left-0 top-7 z-10 w-72 rounded-md border border-slate-200 bg-slate-900 px-3 py-2 text-xs text-white shadow-xl",children:rt[f]}):null]}),e.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${u?"bg-slate-700 text-slate-100":g}`,children:J})]}),e.jsx("p",{className:`mt-1 text-xs ${u?"text-slate-300":"text-slate-600"}`,children:rt[f]}),e.jsxs("div",{className:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm",children:[e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${u?"text-slate-300":"text-slate-600"}`,children:"Delivery readiness"}),e.jsx("select",{value:N.competence,onChange:C=>ce(f,"competence",C.target.value),className:`w-full rounded-md border px-2 py-2 pr-10 ${u?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:gn.map(C=>e.jsxs("option",{value:C,children:[va[C]," (",C,")"]},`${f}-competence-${C}`))})]}),e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${u?"text-slate-300":"text-slate-600"}`,children:"Confidence"}),e.jsx("select",{value:N.confidence,onChange:C=>ce(f,"confidence",Number(C.target.value)),className:`w-full rounded-md border px-2 py-2 pr-10 ${u?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:pn.map(C=>e.jsxs("option",{value:C,children:[Sa[C]," (",C,")"]},`${f}-confidence-${C}`))})]})]})]},`phase-capability-${f}`)})})]})]}),e.jsx("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:e.jsxs("details",{children:[e.jsx("summary",{className:`cursor-pointer text-lg font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Step 4: External links"}),e.jsx("p",{className:`mt-2 text-sm ${u?"text-slate-300":"text-slate-600"}`,children:"All toolkit links across the tool point to the NHS Future platform by default. You can override the base toolkit destination for your organisation, or change individual links independently."}),e.jsxs("div",{className:`mt-3 rounded-md border p-3 text-xs ${u?"border-blue-500/30 bg-blue-500/10 text-blue-100":"border-blue-200 bg-blue-50 text-blue-900"}`,children:[e.jsx("p",{className:"font-semibold",children:"Fallback reference"}),e.jsxs("p",{className:"mt-1",children:["Base fallback: ",e.jsx("span",{className:"font-medium",children:dn.label})," (",dn.url,")"]}),e.jsx("p",{className:"mt-1",children:"Default fallback: the original NHS Future link defined per guidance item."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 ${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("label",{htmlFor:"cst-toolkit-choice",className:`block text-xs font-medium mb-1 ${u?"text-slate-200":"text-slate-700"}`,children:"Default toolkit for assistant preview"}),e.jsx("select",{id:"cst-toolkit-choice",value:o.cst.toolkitChoice,onChange:f=>$(f.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 ${u?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:bn.map(f=>e.jsx("option",{value:f.key,children:f.label},f.key))}),e.jsx("p",{className:`mt-2 text-xs ${u?"text-slate-300":"text-slate-500"}`,children:"This controls which toolkit the chatbot-style assistant opens by default across the tool."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Base override"}),e.jsx("p",{className:`text-xs mt-0.5 ${u?"text-slate-300":"text-slate-500"}`,children:"Replaces the Change Management Toolkit destination for all links that fall back to it."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${u?"text-slate-200":"text-slate-700"}`,children:"Toolkit name"}),e.jsx("input",{type:"text",placeholder:dn.label,value:((Z=(re=o.linkOverrides)==null?void 0:re.base)==null?void 0:Z.label)??"",onChange:f=>{var N;return ee({...o.linkOverrides,base:{...(N=o.linkOverrides)==null?void 0:N.base,label:f.target.value||void 0}})},className:`w-full rounded-md border shadow-sm sm:text-sm p-2 ${u?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${u?"text-slate-200":"text-slate-700"}`,children:"Toolkit URL"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:dn.url,value:((te=(O=o.linkOverrides)==null?void 0:O.base)==null?void 0:te.url)??"",onChange:f=>{var N;return ee({...o.linkOverrides,base:{...(N=o.linkOverrides)==null?void 0:N.base,url:f.target.value||void 0}})},className:`flex-1 min-w-0 rounded-md border shadow-sm sm:text-sm p-2 ${u?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),((_=(de=o.linkOverrides)==null?void 0:de.base)==null?void 0:_.url)&&e.jsx("button",{type:"button",onClick:()=>{var f;return ee({...o.linkOverrides,base:{...(f=o.linkOverrides)==null?void 0:f.base,url:void 0}})},className:`shrink-0 rounded-md border px-3 py-2 text-xs font-medium ${u?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Reset"})]})]})]})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsx("p",{className:`text-sm font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Per-link overrides"}),e.jsxs("p",{className:`text-xs ${u?"text-slate-300":"text-slate-500"}`,children:["Leave a URL blank to use the fallback. Set fallback to ",e.jsx("strong",{children:"Base"})," to use your base override above, or ",e.jsx("strong",{children:"Default"})," to keep the original NHS Future link."]}),Object.entries(gs).map(([f,N])=>{const xe=[...N.inputs??[],...N.deliverables??[]].filter(g=>{var C,I,L,M;return(M=(L=(I=(C=o.linkOverrides)==null?void 0:C.links)==null?void 0:I[g.key])==null?void 0:L.url)==null?void 0:M.trim()}).length;return e.jsxs("details",{className:`rounded-md border ${u?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer items-center justify-between gap-2 p-3 text-sm font-medium ${u?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{children:f}),xe>0&&e.jsxs("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${u?"bg-blue-500/20 text-blue-300":"bg-blue-100 text-blue-700"}`,children:[xe," override",xe!==1?"s":""]})]}),e.jsx("div",{className:`divide-y ${u?"divide-slate-700":"divide-slate-100"}`,children:["inputs","deliverables"].map(g=>{const C=N[g]??[];return C.length?e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${u?"text-slate-400":"text-slate-500"}`,children:g}),C.map(I=>{var M,be;const L=((be=(M=o.linkOverrides)==null?void 0:M.links)==null?void 0:be[I.key])??{fallback:"base"};return e.jsxs("div",{className:"grid grid-cols-1 gap-1.5",children:[e.jsx("span",{className:`text-xs font-medium ${u?"text-slate-300":"text-slate-700"}`,children:I.label}),e.jsx("p",{className:`text-xs truncate ${u?"text-slate-500":"text-slate-400"}`,children:I.url}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:"Override URL (leave blank to use fallback)",value:L.url??"",onChange:oe=>{var ue;const we=oe.target.value||void 0;ee({...o.linkOverrides,links:{...(ue=o.linkOverrides)==null?void 0:ue.links,[I.key]:{...L,url:we}}})},className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${u?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),!L.url&&e.jsxs("select",{value:L.fallback??"base",onChange:oe=>{var we;return ee({...o.linkOverrides,links:{...(we=o.linkOverrides)==null?void 0:we.links,[I.key]:{...L,fallback:oe.target.value}}})},className:`rounded border px-2 py-1.5 text-xs ${u?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"base",children:"Fallback: Base"}),e.jsx("option",{value:"default",children:"Fallback: Default"})]}),L.url&&e.jsx("button",{type:"button",onClick:()=>{var we;const oe={...(we=o.linkOverrides)==null?void 0:we.links};delete oe[I.key],ee({...o.linkOverrides,links:oe})},className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${u?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Clear"})]})]},I.key)})]},g):null})})]},f)})]})]})}),e.jsxs("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-5`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Programme Hierarchy"}),e.jsxs("p",{className:`text-sm mt-1 ${u?"text-slate-300":"text-slate-600"}`,children:["Your programme has ",s.length," components, each viewed through one or more lenses. A component is a change topic you assess and track; a lens is the perspective used to assess it (e.g. leadership, risk, capability). Click a component to jump to its assessment."]})]}),Zn.filter(f=>{var N;return(N=ne[f])==null?void 0:N.length}).map(f=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:`text-sm font-semibold ${u?"text-slate-100":"text-slate-700"}`,children:["Phase ",f]}),e.jsx("div",{className:"space-y-2",children:ne[f].map(N=>{const J=N.lenses.reduce((g,C)=>{const I=c(N.id,C);return{total:g.total+I.actions.length,completed:g.completed+I.actions.filter(L=>L.status==="Completed").length}},{total:0,completed:0}),xe=Ls(a,N.id,c);return e.jsxs("button",{type:"button","data-testid":`cst-component-button-${N.id}`,onClick:()=>S(N.id),className:`w-full text-left rounded-md border p-3 transition-colors ${u?"border-slate-700 bg-slate-900 hover:border-blue-400 hover:bg-slate-800":"border-slate-200 hover:border-blue-300 hover:bg-blue-50/40"}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("span",{className:`font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:N.label}),e.jsxs("span",{className:`text-xs ${u?"text-slate-300":"text-slate-500"}`,children:["Target ",N.target]})]}),e.jsx("div",{className:"mt-2 flex flex-wrap gap-1.5",children:N.lenses.map(g=>{const C=c(N.id,g);return e.jsxs("span",{className:`text-xs px-2 py-1 rounded-full border ${C.score>=N.target?u?"border-green-500/40 bg-green-500/15 text-green-200":"bg-green-50 border-green-200 text-green-800":C.score>0?u?"border-amber-500/40 bg-amber-500/15 text-amber-200":"bg-amber-50 border-amber-200 text-amber-800":u?"border-slate-600 bg-slate-800 text-slate-300":"bg-slate-100 border-slate-200 text-slate-600"}`,children:[g,": ",C.score,"/",N.target]},g)})}),e.jsxs("p",{className:`mt-2 text-xs ${u?"text-slate-300":"text-slate-500"}`,children:["Lens actions: ",J.completed,"/",J.total," complete · Outcomes: ",xe.completed,"/",xe.total," complete"]})]},N.id)})})]},`phase-group-${f}`))]})]})}const _n=[1,2,3,4,5];function Ea(n,t){const s=n.lenses.reduce((a,c)=>a+Number(t(n.id,c).score||0),0);return n.lenses.length?Number((s/n.lenses.length).toFixed(1)):0}function Ia(n,t,s,a,c,S){if(n.phase>s)return{label:"Not in current phase yet",rowClass:S?"border-slate-600 bg-slate-800/80":"border-slate-200 bg-slate-50",chipClass:S?"bg-slate-700 text-slate-100":"bg-slate-200 text-slate-700",barClass:"bg-slate-400"};const b=Bn(n.id,a),u=Hs({averageScore:t,targetScore:n.target,checkedItemKeys:c,rule:b});return u.status==="off-track"?{label:`Off track (${u.completionPct}% checklist)`,rowClass:S?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:S?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:u.status==="attention"?{label:`Needs attention (${u.completionPct}% checklist)`,rowClass:S?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:S?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:t>=n.target?{label:`On track (${u.completionPct}% checklist)`,rowClass:S?"border-green-700 bg-green-950/45":"border-green-200 bg-green-50",chipClass:S?"bg-green-900 text-green-100":"bg-green-100 text-green-700",barClass:"bg-green-500"}:n.phase<s?{label:"Behind timeline",rowClass:S?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:S?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:n.phase===s?{label:"Due this phase",rowClass:S?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:S?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:{label:"In progress",rowClass:S?"border-blue-700 bg-blue-950/45":"border-blue-200 bg-blue-50",chipClass:S?"bg-blue-900 text-blue-100":"bg-blue-100 text-blue-700",barClass:"bg-blue-500"}}function _a({components:n,metrics:t,getEntry:s,onComponentClick:a,pathway:c,pathwayChecks:S,darkMode:b=!1}){const u=n.map(o=>{var l;const E=Ea(o,s),x=((l=S[o.id])==null?void 0:l[c])||[];return{component:o,average:E,status:Ia(o,E,t.currentPhase,c,x,b)}});return e.jsxs("section",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:`${b?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-2xl border p-6 shadow-sm`,children:[e.jsx("p",{className:`text-sm font-semibold uppercase tracking-[0.18em] ${b?"text-slate-300":"text-slate-500"}`,children:"Roadmap View"}),e.jsx("h2",{className:`mt-2 text-2xl font-bold ${b?"text-slate-100":"text-slate-900"}`,children:"Component delivery timeline"}),e.jsx("p",{className:`mt-2 text-sm ${b?"text-slate-300":"text-slate-600"}`,children:"This gantt-style view shows when each component should be completed by phase. Components are coloured by whether they are on track against the current phase. Select a row to jump into the matching assessment tab."})]}),e.jsx("div",{className:"lg:hidden space-y-3",children:u.map(({component:o,average:E,status:x})=>e.jsxs("button",{type:"button",onClick:()=>a(o.id),className:`w-full rounded-xl border p-4 text-left transition-colors ${b?"hover:border-slate-500":"hover:border-slate-300"} ${x.rowClass}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${b?"text-slate-100":"text-slate-800"}`,children:o.label}),e.jsxs("div",{className:`mt-1 text-xs ${b?"text-slate-300":"text-slate-500"}`,children:["Target ",o.target," · completes by Phase ",o.phase]})]}),e.jsx("span",{className:`rounded-full px-2.5 py-1 text-xs font-semibold ${x.chipClass}`,children:x.label})]}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("div",{className:`mb-1 flex items-center justify-between text-xs ${b?"text-slate-300":"text-slate-600"}`,children:[e.jsx("span",{children:"Timeline"}),e.jsxs("span",{children:["Average ",E]})]}),e.jsx("div",{className:"grid grid-cols-5 gap-1",children:_n.map(l=>{const h=l<=o.phase,v=l===o.phase;return e.jsxs("div",{children:[e.jsx("div",{className:`h-2 rounded-full ${b?"bg-slate-700/70":"bg-white/80"}`,children:h?e.jsx("div",{className:`h-full rounded-full ${x.barClass} ${v?"opacity-100":"opacity-35"}`,title:v?"Expected completion phase":"Planned timeline"}):null}),e.jsxs("div",{className:`mt-1 text-center text-[10px] ${b?"text-slate-400":"text-slate-500"}`,children:["P",l]})]},`${o.id}-mobile-${l}`)})})]})]},`mobile-${o.id}`))}),e.jsx("div",{className:`${b?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} hidden lg:block rounded-2xl border p-5 shadow-sm overflow-x-auto`,children:e.jsxs("div",{className:"min-w-[860px]",children:[e.jsxs("div",{className:`grid grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 border-b pb-3 text-xs font-semibold uppercase tracking-wider ${b?"border-slate-700 text-slate-400":"border-slate-200 text-slate-500"}`,children:[e.jsx("div",{children:"Component"}),_n.map(o=>e.jsxs("div",{className:"text-center",children:["Phase ",o]},o)),e.jsx("div",{className:"text-center",children:"Average"}),e.jsx("div",{className:"text-center",children:"Status"})]}),e.jsx("div",{className:"mt-4 space-y-3",children:u.map(({component:o,average:E,status:x})=>e.jsxs("button",{type:"button",onClick:()=>a(o.id),className:`grid w-full grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 rounded-xl border p-2.5 text-left transition-colors ${b?"hover:border-slate-500":"hover:border-slate-300"} ${x.rowClass}`,children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${b?"text-slate-100":"text-slate-800"}`,children:o.label}),e.jsxs("div",{className:`mt-1 text-xs ${b?"text-slate-300":"text-slate-500"}`,children:["Target score ",o.target," · completes by Phase ",o.phase]})]}),_n.map(l=>{const h=l<=o.phase,v=l===o.phase;return e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:`h-7 w-full rounded-full px-1 py-1 ${b?"bg-slate-700/70":"bg-white/70"}`,children:h?e.jsx("div",{className:`h-full rounded-full ${x.barClass} ${v?"opacity-100":"opacity-35"}`,title:v?"Expected completion phase":"Planned timeline"}):null})},`${o.id}-${l}`)}),e.jsx("div",{className:`flex items-center justify-center text-sm font-semibold ${b?"text-slate-100":"text-slate-700"}`,children:E}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("span",{className:`rounded-full px-2.5 py-1 text-xs font-semibold ${x.chipClass}`,children:x.label})})]},o.id))}),e.jsxs("div",{className:`mt-4 rounded-md border p-3 text-xs ${b?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{className:"font-semibold",children:"Key:"})," Grey rows are not yet due for the current phase. Red rows indicate overdue or off-track work."]})]})})]})}const $n="nhs-highlight-builder-layout",lt=[{id:"executive-summary",label:"Executive Summary"},{id:"change-dashboard",label:"Change Dashboard"},{id:"adoption-metrics",label:"Adoption Metrics"},{id:"what-went-well",label:"What Went Well"},{id:"risks-issues",label:"Key Risks and Issues"},{id:"stakeholder-insights",label:"Stakeholder Insights"},{id:"interventions-delivered",label:"Change Interventions Delivered"},{id:"upcoming-priorities",label:"Upcoming Priorities"},{id:"decisions-required",label:"Decisions Required"},{id:"change-lead-assessment",label:"Change Lead Assessment"}],Re={title:"Executive Highlight Report",themeColor:"#005eb8",logoDataUrl:"",programmeName:"",reportingPeriod:"",changeLeadName:"",sroName:"",overallStatus:"Amber",orientation:"landscape",sections:["executive-summary","change-dashboard","adoption-metrics","what-went-well","risks-issues","stakeholder-insights","interventions-delivered","upcoming-priorities","decisions-required","change-lead-assessment"],sectionNarratives:{}},Aa={Green:"bg-green-100 text-green-800 border-green-200",Amber:"bg-amber-100 text-amber-800 border-amber-200",Red:"bg-red-100 text-red-800 border-red-200"},ja={Green:"bg-green-500",Amber:"bg-amber-500",Red:"bg-red-500"};function An({status:n}){return e.jsxs("span",{className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${Aa[n]}`,children:[e.jsx("span",{className:`h-2 w-2 rounded-full ${ja[n]}`}),n]})}function Oa(){return e.jsx("span",{className:"flex h-4 w-4 shrink-0 items-center justify-center rounded bg-green-500 text-[10px] font-bold text-white",children:"✓"})}function ct(n,t){return`${n+1}. ${t}`}function ka(){if(typeof window>"u")return Re;const n=window.localStorage.getItem($n);if(!n)return Re;try{const t=JSON.parse(n);return{...Re,...t,overallStatus:t.overallStatus==="Green"||t.overallStatus==="Amber"||t.overallStatus==="Red"?t.overallStatus:Re.overallStatus,orientation:t.orientation==="portrait"||t.orientation==="landscape"?t.orientation:Re.orientation,sections:Array.isArray(t.sections)&&t.sections.length>0?t.sections:Re.sections}}catch{return Re}}function Pa({store:n,metrics:t,lenses:s,components:a=Fn,getEntry:c,trustName:S,projectName:b,themeColor:u,onLayoutSaved:o,darkMode:E=!1}){const[x,l]=d.useState(()=>{const g=ka();return u&&!g.themeColor?{...g,themeColor:u}:g}),[h,v]=d.useState(""),[w,K]=d.useState(0),D=d.useRef(null),R=d.useMemo(()=>new Set(x.sections),[x.sections]),T=d.useMemo(()=>x.sections.reduce((g,C,I)=>(g[C]=I,g),{}),[x.sections]),Q=d.useMemo(()=>a.map(g=>{let C=0;g.lenses.forEach(L=>{C+=Number(c(g.id,L).score||0)});const I=Number((C/g.lenses.length).toFixed(1));return{component:g,average:I,target:g.target,gap:Number(Math.max(0,g.target-I).toFixed(1))}}),[a,c]),j=d.useMemo(()=>[...Q].sort((g,C)=>C.average-g.average).slice(0,5),[Q]),G=d.useMemo(()=>a.flatMap(g=>g.lenses.flatMap(C=>(c(g.id,C).actions||[]).map(I=>({componentLabel:g.label,componentId:g.id,lens:C,action:I})))).sort((g,C)=>{const I=ke(g.action.status)==="Completed"?1:0,L=ke(C.action.status)==="Completed"?1:0;return I-L}).slice(0,8),[a,c]),$=g=>{l(C=>({...C,...g}))},ce=g=>{l(C=>{const I=R.has(g)?C.sections.filter(L=>L!==g):[...C.sections,g];return{...C,sections:I}})},ee=(g,C)=>{l(I=>({...I,sectionNarratives:{...I.sectionNarratives,[g]:C}}))},ne=async g=>{var L;const C=(L=g.target.files)==null?void 0:L[0];if(!C)return;const I=await new Promise((M,be)=>{const oe=new FileReader;oe.onload=()=>M(String(oe.result||"")),oe.onerror=()=>be(new Error("Unable to read selected logo file.")),oe.readAsDataURL(C)});v(C.name),l(M=>({...M,logoDataUrl:I})),K(M=>M+1)},re=()=>{const g=JSON.stringify(x,null,2);window.localStorage.setItem($n,g),mn("highlight-builder-layout.json",g,"application/json"),o==null||o()},Z=async g=>{var I;const C=(I=g.target.files)==null?void 0:I[0];if(C)try{const L=await C.text(),M=JSON.parse(L);l({...Re,...M,overallStatus:M.overallStatus==="Green"||M.overallStatus==="Amber"||M.overallStatus==="Red"?M.overallStatus:Re.overallStatus,orientation:M.orientation==="portrait"||M.orientation==="landscape"?M.orientation:Re.orientation,sections:Array.isArray(M.sections)&&M.sections.length>0?M.sections:Re.sections,sectionNarratives:M.sectionNarratives||{}})}catch{window.alert("Unable to load the selected layout JSON. Please verify the file contents.")}finally{g.target.value=""}};d.useEffect(()=>{window.localStorage.setItem($n,JSON.stringify(x))},[x]);const O=n.history.length>1?n.history[n.history.length-2]:null,te=d.useMemo(()=>Q.slice(0,10).map(g=>{const C=O?Number((g.component.lenses.reduce((be,oe)=>{var we,ue;return be+Number(((ue=(we=O.data[g.component.id])==null?void 0:we[oe])==null?void 0:ue.score)||0)},0)/g.component.lenses.length).toFixed(1)):g.average,I=g.average>C?"▲":g.average<C?"▼":"►",L=g.average>=g.target?"Green":g.average>=Math.max(1,g.target-1)?"Amber":"Red",M=g.average>=g.target?"Consistently understood by most stakeholder groups.":g.average>=Math.max(1,g.target-1)?"Progressing, with reinforcement still required.":"Below target and requiring focused intervention.";return{area:g.component.label,status:L,trend:I,commentary:M}}),[Q,O]),de=d.useMemo(()=>{const g=G.filter(M=>ke(M.action.status)==="Completed").length,C=G.length?Math.round(g/G.length*100):0,I=G.filter(M=>/champion|change network/i.test(M.action.text||"")).length,L=I>=5?2:I>=1?1:0;return[{measure:"User Activation",target:"95%",current:`${Math.min(100,t.overallPct+6)}%`},{measure:"Active Users",target:"80%",current:`${Math.min(100,t.overallPct)}%`},{measure:"Training Completion",target:"90%",current:`${Math.min(100,t.actionCompletionPct)}%`},{measure:"Stakeholder Engagement Score",target:"80%",current:`${Math.min(100,t.overallPct+4)}%`},{measure:"Champion Coverage",target:"1 per team",current:`${L} per team`},{measure:"User Satisfaction",target:"80%",current:`${Math.min(100,t.overallPct+2)}%`},{measure:"Process Compliance",target:"90%",current:`${Math.min(100,t.overallPct-3)}%`},{measure:"Benefits Evidence Submitted",target:"75%",current:`${Math.min(100,C)}%`}].map(M=>{const be=Number((M.current||"").replace(/[^0-9.]/g,"")),oe=Number((M.target||"").replace(/[^0-9.]/g,"")),we=be>=oe?"►":be>=oe-5?"▲":"▼",ue=be>=oe?"Green":be>=oe-5?"Amber":"Red";return{...M,trend:we,status:ue}})},[t.actionCompletionPct,t.overallPct,G]),_=d.useMemo(()=>Q.filter(g=>g.average<g.target).slice(0,4).map(g=>({risk:`Inconsistent adoption in ${g.component.label}`,impact:"Benefits may not be realised in full.",mitigation:"Targeted coaching and local engagement sessions.",status:"Open"})),[Q]),f=d.useMemo(()=>t.nextSteps.slice(0,7).map(g=>g.message),[t.nextSteps]),N=g=>{if((x.sectionNarratives[g]||"").trim())return x.sectionNarratives[g].trim();switch(g){case"executive-summary":return`${x.overallStatus}. The programme continues to progress across ${a.length} components and ${s.length} lenses, with overall delivery at ${t.overallPct}%.`;case"change-dashboard":return"Dashboard status is derived from current component averages versus targets, with trend based on the most recent finalised snapshot.";case"adoption-metrics":return"Metrics below provide an operational view of progress against key adoption measures and targets.";case"what-went-well":return"List key achievements for the reporting period, including sponsorship visibility and areas of strengthened adoption.";case"risks-issues":return"The following risks/issues require active monitoring and mitigation.";case"stakeholder-insights":return"Summarise positive feedback themes, concerns, and sentiment from stakeholder listening channels.";case"interventions-delivered":return"Capture interventions completed this month and assess their observed effectiveness.";case"upcoming-priorities":return"Set out the next 30-day focus to maintain delivery momentum and close adoption gaps.";case"decisions-required":return"Record approvals and decisions needed to unblock delivery and sustain adoption progress.";case"change-lead-assessment":return"Provide confidence ratings and the overall professional assessment from the Change Lead.";default:return""}},J=g=>{const C=N(g);if(g==="change-dashboard")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:C}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Trend"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Commentary"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:te.map(I=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:I.area}),e.jsx("td",{className:"px-3 py-2 text-sm",children:e.jsx(An,{status:I.status})}),e.jsx("td",{className:"px-3 py-2 text-sm",children:I.trend}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:I.commentary})]},I.area))})]})})]});if(g==="adoption-metrics")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:C}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Measure"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Trend"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:de.map(I=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:I.measure}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:I.target}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:I.current}),e.jsx("td",{className:"px-3 py-2 text-sm",children:I.trend}),e.jsx("td",{className:"px-3 py-2 text-sm",children:e.jsx(An,{status:I.status})})]},I.measure))})]})})]});if(g==="risks-issues")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:C}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Risk / Issue"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Impact"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Mitigation"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:_.length?_.map((I,L)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:I.risk}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:I.impact}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:I.mitigation}),e.jsx("td",{className:"px-3 py-2 text-sm",children:I.status})]},`${I.risk}-${L}`)):e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-2 text-sm text-slate-500",colSpan:4,children:"No key risks are currently above threshold."})})})]})})]});if(g==="upcoming-priorities")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:C}),e.jsx("ol",{className:"mt-3 list-decimal pl-5 space-y-1 text-sm text-slate-700",children:f.length?f.map((I,L)=>e.jsx("li",{children:I},`${I}-${L}`)):e.jsx("li",{children:"No immediate priorities detected from current data."})})]});if(g==="what-went-well")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:C}),e.jsx("ul",{className:"mt-3 space-y-1.5 text-sm text-slate-700",children:j.slice(0,5).map(I=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(Oa,{}),I.component.label," is tracking at ",I.average," against target ",I.target,"."]},I.component.id))})]});if(g==="stakeholder-insights"){const I=Math.min(85,Math.max(45,t.overallPct-10)),L=Math.min(35,Math.max(10,100-I-8)),M=Math.max(3,100-I-L);return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:C}),e.jsxs("div",{className:"mt-3 grid gap-2 md:grid-cols-3 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 rounded border border-green-200 bg-green-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-green-500"}),"Positive: ",I,"%"]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-amber-200 bg-amber-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500"}),"Neutral: ",L,"%"]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-red-200 bg-red-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-red-500"}),"Negative: ",M,"%"]})]})]})}return g==="interventions-delivered"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:C}),e.jsxs("ul",{className:"mt-3 space-y-1 text-sm text-slate-700",children:[e.jsx("li",{children:"• Sponsor briefing sessions"}),e.jsx("li",{children:"• Stakeholder engagement workshops"}),e.jsx("li",{children:"• Communications campaign"}),e.jsx("li",{children:"• Training delivery"}),e.jsx("li",{children:"• Champion network meetings"}),e.jsx("li",{children:"• Adoption data reviews"})]})]}):g==="decisions-required"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:C}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Decision"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Required By"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Approval for additional adoption support resource"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Programme Board"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:"TBC"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Agreement on ongoing benefits ownership"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"SRO"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:"TBC"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Endorsement of next rollout phase"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Steering Group"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:"TBC"})]})]})]})})]}):g==="change-lead-assessment"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:C}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Confidence"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Delivery of Change Activities"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"High"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Stakeholder Engagement"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"High"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Adoption Achievement"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"Medium"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Benefits Realisation"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"Medium"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Sustainability Post Go-Live"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"Medium"})]})]})]})})]}):e.jsx(e.Fragment,{children:e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:C})})},xe=()=>{if(!D.current){window.alert("Preview content is not ready to print yet.");return}const g=window.open("","_blank");if(!g)return;g.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8" /><title>Highlight Report</title></head><body></body></html>'),document.querySelectorAll('link[rel="stylesheet"], style').forEach(L=>{g.document.head.appendChild(L.cloneNode(!0))});const C=g.document.createElement("style");C.textContent=`
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
      .printable-report table { width: 100%; }
    `,g.document.head.appendChild(C);const I=D.current.cloneNode(!0);I.className="printable-report",I.querySelectorAll('[data-print-exclude="true"]').forEach(L=>L.remove()),g.document.body.appendChild(I),g.document.close(),setTimeout(()=>{g.focus(),g.print(),g.close()},250)};return e.jsxs("section",{className:"space-y-6",children:[E?e.jsx("div",{className:"rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm font-semibold text-red-900",children:"Dark mode not compatible for Highlight Report due to print/save functionality."}):null,e.jsx("div",{className:"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",children:e.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Highlight Builder Tool"}),e.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:"Create a polished highlight pack"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:re,className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"Save JSON Layout"}),e.jsxs("label",{className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 cursor-pointer",children:["Load JSON Layout",e.jsx("input",{type:"file",accept:"application/json",className:"hidden",onChange:Z},w)]}),e.jsxs("div",{className:"flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-semibold",role:"group","aria-label":"PDF export orientation",children:[e.jsx("button",{type:"button",onClick:()=>$({orientation:"portrait"}),"aria-pressed":x.orientation==="portrait",className:`px-3 py-2 transition-colors ${x.orientation==="portrait"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Portrait"}),e.jsx("button",{type:"button",onClick:()=>$({orientation:"landscape"}),"aria-pressed":x.orientation==="landscape",className:`px-3 py-2 transition-colors border-l border-slate-300 ${x.orientation==="landscape"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Landscape"})]}),e.jsxs("button",{type:"button",onClick:xe,className:"rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm",style:{backgroundColor:x.themeColor},children:["Print / Save PDF (",x.orientation==="landscape"?"Landscape":"Portrait",")"]})]})]})}),e.jsxs("div",{className:"grid gap-6 xl:grid-cols-[340px,1fr]",children:[e.jsx("aside",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Report title"}),e.jsx("input",{value:x.title,onChange:g=>$({title:g.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Programme"}),e.jsx("input",{value:x.programmeName,onChange:g=>$({programmeName:g.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Reporting period"}),e.jsx("input",{value:x.reportingPeriod,onChange:g=>$({reportingPeriod:g.target.value}),placeholder:"July 2026",className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Change Lead"}),e.jsx("input",{value:x.changeLeadName,onChange:g=>$({changeLeadName:g.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"SRO"}),e.jsx("input",{value:x.sroName,onChange:g=>$({sroName:g.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Overall Change Status"}),e.jsxs("select",{value:x.overallStatus,onChange:g=>$({overallStatus:g.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500",children:[e.jsx("option",{value:"Green",children:"Green"}),e.jsx("option",{value:"Amber",children:"Amber"}),e.jsx("option",{value:"Red",children:"Red"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Theme colour"}),e.jsx("input",{type:"color",value:x.themeColor,onChange:g=>$({themeColor:g.target.value}),className:"h-10 w-full rounded-md border border-slate-300"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Logo in top-left"}),e.jsxs("label",{className:"flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-3 py-4 text-sm text-slate-700 hover:bg-slate-100",children:[e.jsx("span",{children:h||"Upload logo"}),e.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:ne})]}),x.logoDataUrl?e.jsx("div",{className:"mt-3 rounded-md border border-slate-200 bg-slate-50 p-2",children:e.jsx("img",{alt:"Preview logo",src:x.logoDataUrl,className:"max-h-16 w-auto"})}):null]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-3",children:"Report sections"}),e.jsx("div",{className:"space-y-2",children:lt.map(g=>{const C=R.has(g.id),I=g.id,L=T[g.id],M=typeof L=="number"?ct(L,g.label):g.label;return e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("label",{className:"flex items-center gap-3 text-sm text-slate-700",children:[e.jsx("input",{type:"checkbox",checked:C,onChange:()=>ce(g.id)}),e.jsx("span",{children:M})]}),C?e.jsxs("div",{className:"mt-3 space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-1",children:"Section narrative"}),e.jsx("textarea",{value:x.sectionNarratives[I]||"",onChange:be=>ee(I,be.target.value),placeholder:N(I),rows:4,className:"w-full rounded-md border border-slate-300 px-2 py-2 text-xs outline-none focus:border-blue-500"})]}),e.jsx("p",{className:"text-xs text-slate-500",children:"All adoption components are automatically included in this section."})]}):null]},g.id)})})]})]})}),e.jsxs("div",{ref:D,className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsxs("div",{className:"mb-4 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3",children:[x.logoDataUrl?e.jsx("img",{alt:"Logo preview",src:x.logoDataUrl,className:"max-h-12 w-auto"}):e.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-md bg-slate-200 text-sm font-bold text-slate-700",children:"NHS"}),e.jsxs("div",{children:[e.jsx("div",{"data-print-hide":"true",className:"text-xs font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Builder Preview"}),e.jsx("div",{className:"text-lg font-bold text-slate-900",children:x.title}),e.jsxs("div",{className:"text-sm text-slate-600 mt-1",children:[x.programmeName||b||"Unnamed Programme"," ·"," ",x.reportingPeriod||"Reporting period not set"]}),e.jsxs("div",{className:"mt-1 flex items-center gap-2 text-sm text-slate-600",children:["Overall Status: ",e.jsx(An,{status:x.overallStatus})]}),e.jsx("div",{className:"text-sm text-slate-600 mt-0.5",children:S||"Unconfigured Trust"})]})]}),e.jsx("div",{className:"grid gap-3",children:x.sections.map(g=>{var C;return e.jsxs("article",{className:"rounded-xl border border-slate-200 p-4",style:{borderLeft:`4px solid ${x.themeColor}`},children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700",children:ct(T[g]||0,((C=lt.find(I=>I.id===g))==null?void 0:C.label)||g)}),J(g)]},g)})})]})]})]})}function dt(){return e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Ra(n){return n in Gn}function Da({lensName:n,onClose:t,darkMode:s=!1}){if(!n||!Ra(n))return null;const a=Gn[n];return e.jsx("div",{id:"lens-info-modal",className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:c=>{c.target===c.currentTarget&&t()},children:e.jsxs("div",{className:`${s?"bg-slate-800 border-slate-700":"bg-white"} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border`,children:[e.jsxs("div",{className:`${s?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} sticky top-0 border-b p-6 flex items-center justify-between`,children:[e.jsx("h2",{className:`text-2xl font-bold ${s?"text-slate-100":"text-slate-800"}`,children:n}),e.jsx("button",{onClick:t,className:`${s?"text-slate-300 hover:text-slate-100":"text-slate-500 hover:text-slate-700"}`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsxs("div",{className:`p-6 space-y-4 ${s?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(dt,{}),"Outcome"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.outcome})]}),e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(dt,{}),"What Good Looks Like"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.whatGoodLooksLike})]})]})]})})}function Ta({darkMode:n=!1,onNavigateToProjectDetails:t,onNavigateToGuide:s,onNavigateToDashboard:a}){const c=yt(),[S,b]=d.useState(0);return e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${n?"text-slate-100":"text-slate-800"}`,children:"Introduction"}),e.jsx("p",{className:`mt-2 text-sm ${n?"text-slate-300":"text-slate-600"}`,children:"The five introduction steps are shown below in collapsible sections."})]}),c.map((u,o)=>e.jsxs("section",{className:`${n?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} overflow-hidden rounded-lg border shadow-sm`,children:[e.jsxs("button",{type:"button",onClick:()=>b(o),"aria-expanded":S===o,className:`flex w-full items-center justify-between gap-3 p-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-inset ${n?"hover:bg-slate-700":"hover:bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${n?"text-blue-300":"text-blue-700"}`,children:["Step ",o+1," of ",c.length]}),e.jsx("h3",{className:`mt-1 text-lg font-semibold ${n?"text-slate-100":"text-slate-900"}`,children:u.title})]}),e.jsx("span",{className:`shrink-0 text-lg font-semibold ${n?"text-slate-300":"text-slate-500"}`,"aria-hidden":"true",children:S===o?"-":"+"})]}),S===o?e.jsxs("div",{className:"px-5 pb-5",children:[u.body,o===c.length-1?e.jsxs("div",{className:"mt-5 flex flex-wrap gap-2",children:[t?e.jsx("button",{type:"button",onClick:t,className:"rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"Set up your CST Personalisation"}):null,s?e.jsx("button",{type:"button",onClick:s,className:"rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"See the 6 Key Questions"}):null,a?e.jsx("button",{type:"button",onClick:a,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Go to dashboard"}):null]}):null]}):null]},u.title))]})}const $a=[{name:"NHS Blue",color:"#005eb8"},{name:"Navy",color:"#003366"},{name:"Teal",color:"#009b8a"},{name:"Purple",color:"#6c28d9"},{name:"Green",color:"#059669"},{name:"Red",color:"#dc2626"}];function La({userSettings:n,onUserSettingsUpdate:t,onLoadExampleData:s,onResetData:a,canUseCustomTheme:c=!0,engagementGrade:S,engagementLevel:b,engagementXp:u,darkMode:o=!1}){const[E,x]=d.useState(n),[l,h]=d.useState(0),[v,w]=d.useState(null),K=d.useRef(null);d.useEffect(()=>{x(n)},[n]);const D=d.useCallback(O=>{const te={...E,...O};x(te),t(te)},[E,t]),R=async O=>{var _;const te=(_=O.target.files)==null?void 0:_[0];if(!te)return;const de=await new Promise((f,N)=>{const J=new FileReader;J.onload=()=>f(String(J.result||"")),J.onerror=()=>N(new Error("Unable to read selected profile image.")),J.readAsDataURL(te)});D({profileImageDataUrl:de}),h(f=>f+1)},T=()=>{D({profileImageDataUrl:void 0})},Q=O=>{D({themeColor:O})},j={grade:"Your grade shows your overall engagement trend. S = excellent, A = strong, B = solid, C = steady, D = building, E = starting out.",level:"Your level reflects cumulative XP gained through consistent engagement. Higher levels unlock more personalised options and features.",xp:"XP increases as you complete important actions, finalise months on time, and keep returning to the tool."},G=b??1,$=u??0,ce=Math.max(0,(G-1)*120),ee=Math.max(0,$-ce),ne=Math.max(0,Math.min(100,Math.round(ee/120*100))),re=Math.max(0,G*120-$),Z=[{key:"grade",label:"Grade",value:S||"N/A",tooltip:j.grade},{key:"level",label:"Level",value:G,tooltip:j.level},{key:"xp",label:"XP",value:$,tooltip:j.xp}];return e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-800"}`,children:"Settings"}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Use this page to manage your profile, personal preferences, and support options."}),(S||b||u!==void 0)&&e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Engagement and Progress"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"A quick view of how consistently the tool is being used over time."})]}),e.jsxs("div",{className:`${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("h4",{className:`text-sm font-semibold mb-2 ${o?"text-slate-100":"text-slate-800"}`,children:"Engagement Summary"}),e.jsx("p",{className:`mb-3 text-xs ${o?"text-slate-300":"text-slate-600"}`,children:"Tap the info icon beside each metric for a plain-language explanation."}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:Z.map(O=>e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("p",{className:`text-xs ${o?"text-slate-300":"text-slate-600"}`,children:O.label}),e.jsx("button",{type:"button","aria-label":`${O.label} information`,"aria-expanded":v===O.key,onClick:()=>w(te=>te===O.key?null:O.key),className:`inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#005eb8] text-[9px] font-bold text-[#005eb8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffeb3b] ${o?"bg-[#1d334f]":"bg-[#e8f1fb]"}`,children:"i"})]}),e.jsx("p",{className:`text-lg font-bold ${o?"text-slate-100":"text-slate-800"}`,children:O.value}),v===O.key?e.jsx("div",{className:`absolute left-0 top-11 z-10 w-64 rounded-md border px-3 py-2 text-xs shadow-lg ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-200 bg-white text-slate-700"}`,children:O.tooltip}):null]},O.key))}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:"Progress to next level"}),e.jsxs("p",{className:`text-xs ${o?"text-slate-300":"text-slate-600"}`,children:[re," XP to Level ",G+1]})]}),e.jsx("div",{className:`mt-1 h-2.5 w-full overflow-hidden rounded-full ${o?"bg-slate-700":"bg-slate-200"}`,children:e.jsx("div",{className:"h-full rounded-full bg-[#005eb8] transition-all",style:{width:`${ne}%`}})})]}),e.jsx("p",{className:`mt-3 text-xs ${o?"text-slate-400":"text-slate-500"}`,children:"This reflects consistency over time, not perfection. Small, regular updates are what move this forwards."})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-5`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Your Profile"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"These details personalise your experience and reports."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Your Name"}),e.jsx("input",{id:"user-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:E.name,onChange:O=>D({name:O.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-preferences",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Preferences"}),e.jsx("textarea",{id:"user-preferences",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 h-24 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:E.preferences,onChange:O=>D({preferences:O.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-sm font-medium mb-2 ${o?"text-slate-200":"text-slate-700"}`,children:"Profile Picture"}),e.jsxs("div",{className:"flex items-start gap-4",children:[E.profileImageDataUrl?e.jsx("img",{src:E.profileImageDataUrl,alt:"Profile",className:"h-20 w-20 rounded-md border border-slate-300 object-cover"}):e.jsx("div",{className:"h-20 w-20 rounded-md border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center",children:e.jsx("span",{className:"text-xs text-slate-500",children:"No image"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{type:"button",onClick:()=>{var O;return(O=K.current)==null?void 0:O.click()},className:`rounded-md px-3 py-2 text-sm font-medium transition-colors ${o?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:E.profileImageDataUrl?"Change Picture":"Upload Picture"}),E.profileImageDataUrl?e.jsx("button",{type:"button",onClick:T,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${o?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"}`,children:"Remove"}):null,e.jsx("input",{ref:K,type:"file",accept:"image/*",className:"hidden",onChange:R},l)]})]})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Appearance"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Choose the theme colour you want to use throughout the app."})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${o?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Dark mode"}),e.jsx("input",{type:"checkbox",checked:!!E.darkMode,onChange:O=>D({darkMode:O.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`text-sm ${o?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-medium",children:"Status colour profile"}),e.jsxs("select",{value:E.colorAccessibilityMode||"standard",onChange:O=>D({colorAccessibilityMode:O.target.value}),className:`w-full rounded-md border p-2 pr-10 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"standard",children:"Standard"}),e.jsx("option",{value:"color-blind-friendly",children:"Color-blind friendly"})]})]})]}),e.jsx("p",{className:`text-xs ${o?"text-slate-400":"text-slate-500"}`,children:"Color-blind friendly mode keeps BRAG labels in text and shifts status colors to higher-contrast alternatives."}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-theme-colour",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Theme Colour"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:$a.map(O=>e.jsxs("button",{type:"button",onClick:()=>Q(O.color),className:"flex items-center gap-2 rounded-md border-2 px-3 py-2 text-sm",style:{borderColor:E.themeColor===O.color?O.color:"#e2e8f0",backgroundColor:E.themeColor===O.color?`${O.color}22`:"transparent"},children:[e.jsx("span",{className:"h-4 w-4 rounded-sm border border-slate-300",style:{backgroundColor:O.color}}),e.jsx("span",{children:O.name})]},O.color))}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{id:"user-theme-colour",type:"color",className:"h-10 w-14 rounded border border-slate-300 p-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",value:E.themeColor,onChange:O=>D({themeColor:O.target.value}),disabled:!c}),e.jsx("span",{className:`text-sm font-mono ${o?"text-slate-200":"text-slate-600"}`,children:E.themeColor}),c?null:e.jsx("span",{className:`text-xs ${o?"text-slate-400":"text-slate-500"}`,children:"Unlocks at level 3"})]})]})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Data and Support"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Load sample data, reset local data, read FAQs, or report an issue."})]}),e.jsxs("div",{className:`${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("h4",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Data Tools"}),e.jsxs("div",{className:"mt-3 flex flex-wrap gap-3",children:[e.jsx("button",{onClick:s,className:Ot,children:"Example Data"}),e.jsx("button",{onClick:a,className:`inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors ${kt}`,children:"Reset Data"})]}),e.jsx("p",{className:`mt-2 text-xs ${o?"text-slate-400":"text-slate-500"}`,children:"Example Data loads sample assessment content so you can explore the dashboards quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${o?"text-slate-100":"text-slate-700"}`,children:"How is my data stored?"}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Your settings and assessment state are stored locally in your browser using local storage."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${o?"text-slate-100":"text-slate-700"}`,children:"What does Example Data do?"}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"It populates the tool with the included sample JSON so you can explore dashboards and workflows quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${o?"text-slate-100":"text-slate-700"}`,children:"Can I change the theme colour later?"}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Yes. Update the theme colour at any time in User Settings and it is applied immediately."})]}),e.jsxs("div",{className:`rounded-md border p-4 ${o?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("h4",{className:`mb-2 text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Submit a Bug"}),e.jsx("p",{className:`mb-3 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Found an issue? Send details directly via email."}),e.jsx("a",{href:"mailto:andrew.fraser22@kpmg.co.uk?subject=NHS%20Digital%20Adoption%20Tool%20Bug",className:`inline-flex rounded-md px-4 py-2 text-sm font-medium transition-colors ${o?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:"Report Bug"})]})]})]})}function Fa(n){return{id:`audit:${Date.now()}-${Math.random().toString(36).slice(2,8)}`,timestamp:new Date().toISOString(),actor:n.actor,eventType:n.eventType,entityType:n.entityType,entityId:n.entityId,summary:n.summary,trustName:n.trustName,projectName:n.projectName,componentId:n.componentId,lens:n.lens,reason:n.reason,before:n.before,after:n.after,source:n.source||"local",importedAt:n.importedAt}}const Ba=1e4;function Vn(n,t=Ba){return n.length<=t?n:n.slice(n.length-t)}const ut="nhs-digital-adoption-store",Ga=new Set(["pathway-1","pathway-2","pathway-3"]);function Pt(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function Ie(n,t){if(!Pt(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected object.`)}function U(n,t){if(n!==void 0&&typeof n!="string")throw new Error(`Invalid adoption assessment payload at ${t}: expected string.`)}function Rt(n,t){if(n!==void 0&&typeof n!="number")throw new Error(`Invalid adoption assessment payload at ${t}: expected number.`)}function Mn(n,t){if(n!==void 0&&!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`)}function Dt(n,t){Ie(n,t),U(n.id,`${t}.id`),U(n.text,`${t}.text`),U(n.owner,`${t}.owner`),U(n.timescale,`${t}.timescale`),U(n.status,`${t}.status`),U(n.notes,`${t}.notes`),U(n.evidence,`${t}.evidence`)}function Ua(n,t){Ie(n,t),Rt(n.score,`${t}.score`),U(n.justification,`${t}.justification`),U(n.evidence,`${t}.evidence`),Mn(n.actions,`${t}.actions`),(n.actions||[]).forEach((s,a)=>{Dt(s,`${t}.actions[${a}]`)})}function Tt(n,t){Ie(n,t),Object.keys(n).forEach(s=>{const a=n[s];Ie(a,`${t}.${s}`),Object.keys(a).forEach(c=>{Ua(a[c],`${t}.${s}.${c}`)})})}function Va(n,t){Ie(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((c,S)=>{Ie(c,`${t}.${s}[${S}]`),U(c.id,`${t}.${s}[${S}].id`),U(c.text,`${t}.${s}[${S}].text`),U(c.owner,`${t}.${s}[${S}].owner`),U(c.timescale,`${t}.${s}[${S}].timescale`),U(c.notes,`${t}.${s}[${S}].notes`),U(c.evidence,`${t}.${s}[${S}].evidence`),Mn(c.linkedActions,`${t}.${s}[${S}].linkedActions`),(c.linkedActions||[]).forEach((b,u)=>{Ie(b,`${t}.${s}[${S}].linkedActions[${u}]`),U(b.lens,`${t}.${s}[${S}].linkedActions[${u}].lens`),U(b.actionId,`${t}.${s}[${S}].linkedActions[${u}].actionId`)})})})}function Ma(n,t){Ie(n,t),Object.keys(n).forEach(s=>{const a=n[s];Ie(a,`${t}.${s}`),["pathway-1","pathway-2","pathway-3"].forEach(c=>{const S=a[c];Mn(S,`${t}.${s}.${c}`),(S||[]).forEach((b,u)=>{if(typeof b!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}.${c}[${u}]: expected string.`)})})})}function Ha(n,t){Ie(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((c,S)=>{if(typeof c!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}[${S}]: expected string.`)})})}function Wa(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{Ie(s,`${t}[${a}]`),U(s.id,`${t}[${a}].id`),U(s.removedAt,`${t}[${a}].removedAt`),U(s.reason,`${t}[${a}].reason`),U(s.componentId,`${t}[${a}].componentId`),U(s.lens,`${t}[${a}].lens`),U(s.actionId,`${t}[${a}].actionId`),U(s.actionText,`${t}[${a}].actionText`),U(s.actionType,`${t}[${a}].actionType`)})}function Ka(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{Ie(s,`${t}[${a}]`),U(s.id,`${t}[${a}].id`),U(s.timestamp,`${t}[${a}].timestamp`),U(s.actor,`${t}[${a}].actor`),U(s.eventType,`${t}[${a}].eventType`),U(s.entityType,`${t}[${a}].entityType`),U(s.entityId,`${t}[${a}].entityId`),U(s.summary,`${t}[${a}].summary`),U(s.trustName,`${t}[${a}].trustName`),U(s.projectName,`${t}[${a}].projectName`),U(s.componentId,`${t}[${a}].componentId`),U(s.lens,`${t}[${a}].lens`),U(s.reason,`${t}[${a}].reason`),U(s.source,`${t}[${a}].source`),U(s.importedAt,`${t}[${a}].importedAt`)})}function za(n,t){if(Ie(n,t),U(n.trustName,`${t}.trustName`),U(n.region,`${t}.region`),U(n.trustType,`${t}.trustType`),U(n.projectName,`${t}.projectName`),U(n.leadName,`${t}.leadName`),n.cst!==void 0){if(Ie(n.cst,`${t}.cst`),U(n.cst.type,`${t}.cst.type`),U(n.cst.pathway,`${t}.cst.pathway`),typeof n.cst.pathway=="string"&&!Ga.has(n.cst.pathway))throw new Error(`Invalid adoption assessment payload at ${t}.cst.pathway: unexpected value "${n.cst.pathway}".`);if(U(n.cst.goLiveDate,`${t}.cst.goLiveDate`),U(n.cst.fullAdoptionDate,`${t}.cst.fullAdoptionDate`),U(n.cst.benefitRealizationDate,`${t}.cst.benefitRealizationDate`),U(n.cst.toolkitChoice,`${t}.cst.toolkitChoice`),typeof n.cst.toolkitChoice=="string"&&!vs(n.cst.toolkitChoice))throw new Error(`Invalid adoption assessment payload at ${t}.cst.toolkitChoice: unexpected value "${n.cst.toolkitChoice}".`)}}function Ya(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{Ie(s,`${t}[${a}]`),U(s.monthLabel,`${t}[${a}].monthLabel`),Rt(s.overallPercentage,`${t}[${a}].overallPercentage`),s.data!==void 0&&Tt(s.data,`${t}[${a}].data`)})}function qa(n,t){Ie(n,t),Object.keys(n).forEach(s=>{if(typeof n[s]!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected string.`)})}function Ja(n,t){Ie(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((c,S)=>{Dt(c,`${t}.${s}[${S}]`)})})}function fn(n){if(!Pt(n))throw new Error("Invalid adoption assessment payload at root: expected object.");return U(n.schemaVersion,"schemaVersion"),U(n.exportedAt,"exportedAt"),n.orgProfile!==void 0&&za(n.orgProfile,"orgProfile"),n.currentDraft!==void 0&&Tt(n.currentDraft,"currentDraft"),n.objectives!==void 0&&Va(n.objectives,"objectives"),n.auditLog!==void 0&&Ka(n.auditLog,"auditLog"),n.suppressedAutoActions!==void 0&&Ha(n.suppressedAutoActions,"suppressedAutoActions"),n.actionAuditLog!==void 0&&Wa(n.actionAuditLog,"actionAuditLog"),n.history!==void 0&&Ya(n.history,"history"),n.phaseOverrides!==void 0&&qa(n.phaseOverrides,"phaseOverrides"),n.pathwayChecks!==void 0&&Ma(n.pathwayChecks,"pathwayChecks"),n.componentActions!==void 0&&Ja(n.componentActions,"componentActions"),n}function Xa(n=new Date){return n.toLocaleString("en-GB",{month:"short",year:"numeric"})}function mt(n){return{schemaVersion:"4.0",exportedAt:new Date().toISOString(),orgProfile:{...n.orgProfile},currentDraft:Ze(n.currentDraft),objectives:Lt(n.objectives),auditLog:to(n.auditLog),suppressedAutoActions:Bt(n.suppressedAutoActions),history:n.history.map(t=>({...t,data:Ze(t.data)})),phaseOverrides:{...n.phaseOverrides},pathwayChecks:Ft(n.pathwayChecks)}}function Qa(n){const t=n.componentActions;if(t)return Object.keys(t).reduce((s,a)=>(s[a]=(t[a]||[]).map(c=>({id:String(c.id??`${Date.now()}-${Math.random().toString(36).slice(2,8)}`),text:String(c.text||""),owner:String(c.owner||""),timescale:String(c.timescale||""),notes:String(c.notes||""),evidence:String(c.evidence||""),linkedActions:[]})),s),{})}function Za(n,t){return n!=null&&n.length?n.map(s=>({id:`legacy-${s.id}`,timestamp:s.removedAt,actor:"Unknown user",eventType:"action-removed",entityType:"action",entityId:s.actionId,summary:`Removed action: ${s.actionText||s.actionId}`,trustName:t==null?void 0:t.trustName,projectName:t==null?void 0:t.projectName,componentId:s.componentId,lens:s.lens,reason:s.reason,before:{actionText:s.actionText,actionType:s.actionType},source:"local"})):[]}function eo(n,t,s){const a=Za(t,s),c=(n||[]).map(b=>({...b})),S=[...a,...c].sort((b,u)=>{const o=Date.parse(b.timestamp||""),E=Date.parse(u.timestamp||"");return!Number.isNaN(o)&&!Number.isNaN(E)&&o!==E?o-E:(b.id||"").localeCompare(u.id||"")});return Vn(S)}function no(n,t){return n.map(s=>({...s,source:"imported",importedAt:t}))}function $t(n){var a,c;if(!n)return{};const t=Et(n.orgProfile);(c=(a=n.orgProfile)==null?void 0:a.cst)!=null&&c.pathway||(t.cst.pathway="pathway-1");const s=n.objectives||Qa(n);return{...n,schemaVersion:n.schemaVersion||"2.0",orgProfile:t,objectives:Lt(s),auditLog:eo(n.auditLog,n.actionAuditLog,t),suppressedAutoActions:Bt(n.suppressedAutoActions),pathwayChecks:Ft(n.pathwayChecks)}}function gt(n,t){const s=fn(n),a=$t(s),c=!!(s.objectives||s.componentActions),S=new Date().toISOString(),b=no(a.auditLog||[],S),u=Vn([...t.auditLog||[],...b]);return Rn({...t,orgProfile:a.orgProfile||t.orgProfile,currentDraft:a.currentDraft?Ze(a.currentDraft):Ze(t.currentDraft),objectives:c?a.objectives:t.objectives,auditLog:u,suppressedAutoActions:a.suppressedAutoActions||t.suppressedAutoActions,history:(a.history||t.history).map(o=>({...o,data:Ze(o.data)})),phaseOverrides:a.phaseOverrides||t.phaseOverrides,pathwayChecks:a.pathwayChecks||t.pathwayChecks})}function pt(n,t,s=new Date){return{monthLabel:Xa(s),overallPercentage:t,data:Ze(n)}}function Ze(n){const t=Os(n);return Object.keys(t).forEach(s=>{Object.keys(t[s]).forEach(a=>{t[s][a].actions=t[s][a].actions.map(c=>({...c,status:ke(c.status),notes:c.notes||"",evidence:c.evidence||"",linkedTargets:(c.linkedTargets||[]).map(S=>({componentId:S.componentId,lens:S.lens}))}))})}),t}function Lt(n){const t=_t(n||{});return Object.keys(t).forEach(s=>{t[s]=t[s].map(a=>({...a,owner:a.owner||"",timescale:a.timescale||"",notes:a.notes||"",evidence:a.evidence||"",linkedActions:(a.linkedActions||[]).map(c=>({lens:c.lens,actionId:c.actionId}))}))}),t}function Ft(n){return n?Object.keys(n).reduce((t,s)=>{const a=n[s]||{};return t[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},t},{}):{}}function Bt(n){return n?Object.keys(n).reduce((t,s)=>(t[s]=[...n[s]||[]],t),{}):{}}function to(n){return n?n.map(t=>({...t})):[]}const so=`{
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
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Engagement",
      "action": "Facilitate benefit identification workshops with sponsors, leaders and subject matter experts.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_002",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Identify expected organisational, operational, financial and user benefits.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_003",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Identify potential disbenefits and unintended consequences associated with the change.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_004",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Define measurable benefit statements and success criteria.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_005",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Assign benefit owners and accountability for benefit realisation.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_006",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Engage stakeholders to understand which benefits matter most to them.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_007",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify relevant 'what's in it for me' benefits for different stakeholder groups.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_008",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Testing & Validation",
      "action": "Validate the relevance and credibility of identified benefits with stakeholders.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify differences in perceived benefits across stakeholder groups.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Design",
      "action": "Refine benefit definitions using stakeholder insight and feedback.",
      "outcomeIds": [
        "BEN_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BEN_011",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Approve and baseline the benefits realisation approach.",
      "outcomeIds": [
        "BEN_O1",
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_012",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Define measures, KPIs and reporting arrangements for each benefit.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_013",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Establish baseline measures against which benefits can be assessed.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_014",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a benefits realisation plan including ownership, timelines and reporting.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_015",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Integrate benefits tracking into governance and programme reporting.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_016",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate expected benefits and success measures to stakeholders.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_017",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather stakeholder feedback on benefit assumptions and expectations.",
      "outcomeIds": [
        "BEN_O1",
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_018",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Testing & Validation",
      "action": "Validate that benefit measures are meaningful and understood by stakeholders.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Use stakeholder-facing benefit messages to build support and momentum.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Monitor stakeholder confidence in the expected benefits.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BEN_021",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Track benefit performance against agreed measures and targets.",
      "outcomeIds": [
        "BEN_O2",
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_022",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Review realised and unrealised benefits through governance forums.",
      "outcomeIds": [
        "BEN_O2",
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_023",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Risk Management",
      "action": "Identify risks to benefits realisation and agree mitigation actions.",
      "outcomeIds": [
        "BEN_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_024",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Assess whether expected benefits are being achieved and why.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_025",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "Manage dependencies that affect benefit delivery.",
      "outcomeIds": [
        "BEN_O2",
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_026",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Share evidence of realised benefits with stakeholders.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_027",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use stakeholder insight to understand barriers to achieving benefits.",
      "outcomeIds": [
        "BEN_O2",
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_028",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Monitor stakeholder perceptions of realised value and improvement.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Use benefit stories and examples to reinforce adoption.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise teams and individuals contributing to benefit realisation.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BEN_031",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Continuously monitor long-term benefit performance.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BEN_032",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Embed benefits management into normal business and performance management processes.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BEN_033",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Refine benefit measures and approaches using organisational learning.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BEN_034",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Use benefit evidence to inform future investment and change decisions.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BEN_035",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "Maintain management of long-term dependencies affecting realised benefits.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BEN_036",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Regularly communicate realised benefits and improvement outcomes.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BEN_037",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use stakeholder feedback to identify opportunities for further value realisation.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BEN_038",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Measure ongoing stakeholder perception of value delivered by the change.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BEN_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Use success stories and achievements to sustain belief in the value of the change.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BEN_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Promote a culture of continuous benefits realisation and improvement.",
      "outcomeIds": [
        "BEN_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,Gt={componentId:"benefits",actionPrefix:"benefits-action",outcomePrefix:"benefits:outcome",fallbackOutcomes:[{id:"benefits:outcome:o1",text:"Benefits and disbenefits have been identified and defined"},{id:"benefits:outcome:o2",text:"Benefits are actively managed and monitored"},{id:"benefits:outcome:o3",text:"Benefits are realised, evidenced and sustained"}],lensAliases:{"Strategic Direction and Leadership":"Planning and Risk","People Experience and Culture":"Process and Sustainment"}},ao=Ae(so,Gt);function oo(n){return _e(n,Gt,ao)}const io=`{
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
    {"id":"CC_001","fromStatus":"Emerging","toStatus":"Developing","lens":"Skills & Behaviour","category":"Analysis & Insight","action":"Define the future-state capabilities required for successful performance.","outcomeIds":["CC_O1"],"readinessScore":1},
    {"id":"CC_002","fromStatus":"Emerging","toStatus":"Developing","lens":"Skills & Behaviour","category":"Analysis & Insight","action":"Conduct capability analysis to identify gaps between current and future-state capability requirements.","outcomeIds":["CC_O1"],"readinessScore":1},
    {"id":"CC_003","fromStatus":"Emerging","toStatus":"Developing","lens":"Skills & Behaviour","category":"Analysis & Insight","action":"Assess current confidence levels amongst impacted stakeholder groups.","outcomeIds":["CC_O1"],"readinessScore":1},
    {"id":"CC_004","fromStatus":"Emerging","toStatus":"Developing","lens":"People Experience & Culture","category":"Engagement","action":"Identify factors that may increase or reduce stakeholder confidence.","outcomeIds":["CC_O1"],"readinessScore":1},
    {"id":"CC_005","fromStatus":"Emerging","toStatus":"Developing","lens":"Planning & Risk","category":"Analysis & Insight","action":"Identify capability-related risks that could affect successful adoption.","outcomeIds":["CC_O1"],"readinessScore":1},
    {"id":"CC_006","fromStatus":"Developing","toStatus":"Embedding","lens":"Skills & Behaviour","category":"Design","action":"Develop capability-building interventions to address identified capability gaps.","outcomeIds":["CC_O2"],"readinessScore":2},
    {"id":"CC_007","fromStatus":"Developing","toStatus":"Embedding","lens":"Skills & Behaviour","category":"Training & Learning","action":"Provide opportunities for practical application of learning in real or simulated environments.","outcomeIds":["CC_O2"],"readinessScore":2},
    {"id":"CC_008","fromStatus":"Developing","toStatus":"Embedding","lens":"Skills & Behaviour","category":"Training & Learning","action":"Provide coaching, mentoring and peer support for individuals applying new skills.","outcomeIds":["CC_O2"],"readinessScore":2},
    {"id":"CC_009","fromStatus":"Developing","toStatus":"Embedding","lens":"People Experience & Culture","category":"Communication","action":"Communicate expectations regarding performance, proficiency and future-state behaviours.","outcomeIds":["CC_O2"],"readinessScore":2},
    {"id":"CC_010","fromStatus":"Developing","toStatus":"Embedding","lens":"Measurement & Evaluation","category":"Measurement & Evaluation","action":"Establish measures to assess capability development and confidence growth.","outcomeIds":["CC_O2"],"readinessScore":2},
    {"id":"CC_011","fromStatus":"Developing","toStatus":"Embedding","lens":"People Experience & Culture","category":"Engagement","action":"Gather feedback about confidence levels and practical challenges experienced by users.","outcomeIds":["CC_O2"],"readinessScore":2},
    {"id":"CC_012","fromStatus":"Developing","toStatus":"Embedding","lens":"Skills & Behaviour","category":"Testing & Validation","action":"Assess practical capability through observation, walkthroughs or structured validation activities.","outcomeIds":["CC_O2"],"readinessScore":2},
    {"id":"CC_013","fromStatus":"Developing","toStatus":"Embedding","lens":"Skills & Behaviour","category":"Training & Learning","action":"Target additional support towards individuals or groups with lower confidence levels.","outcomeIds":["CC_O2"],"readinessScore":2},
    {"id":"CC_014","fromStatus":"Developing","toStatus":"Embedding","lens":"Planning & Risk","category":"Risk Management","action":"Monitor capability and confidence risks during implementation.","outcomeIds":["CC_O2"],"readinessScore":2},
    {"id":"CC_015","fromStatus":"Developing","toStatus":"Embedding","lens":"Governance","category":"Governance","action":"Review capability and confidence measures through programme governance.","outcomeIds":["CC_O2"],"readinessScore":2}
  ]
}
`,Ut={componentId:"capability",actionPrefix:"capability-action",outcomePrefix:"capability:outcome",fallbackOutcomes:[{id:"capability:outcome:o1",text:"Required capability levels have been defined and assessed"},{id:"capability:outcome:o2",text:"People can perform confidently in the future state"},{id:"capability:outcome:o3",text:"Capability and confidence are sustained and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Communication:"People Experience and Culture","Testing and Validation":"Skills and Behaviour"}},ro=Ae(io,Ut);function lo(n){return _e(n,Ut,ro)}const co=`{
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
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Define the problem, opportunity, risk or requirement that is driving the need for change.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_002",
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
      "id": "CFC_003",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Review organisational objectives, strategies and priorities to establish alignment with the proposed change.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_004",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop an initial case for change narrative describing why change is required and why action is needed now.",
      "outcomeIds": [
        "CFC_O1",
        "CFC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_005",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Identify sponsors and senior leaders who will champion the case for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_006",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Engage stakeholders to understand their experience of current challenges and opportunities.",
      "outcomeIds": [
        "CFC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_007",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Testing & Validation",
      "category": "Testing & Validation",
      "action": "Test whether stakeholders recognise and agree with the need for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_008",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Gather examples and evidence that illustrate the impact of maintaining the current state.",
      "outcomeIds": [
        "CFC_O1",
        "CFC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify misconceptions, assumptions or conflicting perceptions relating to the need for change.",
      "outcomeIds": [
        "CFC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Design",
      "action": "Refine the case for change using stakeholder insight and feedback.",
      "outcomeIds": [
        "CFC_O1",
        "CFC_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CFC_011",
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
      "id": "CFC_012",
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
      "id": "CFC_013",
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
      "id": "CFC_014",
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
      "id": "CFC_015",
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
      "id": "CFC_016",
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
      "id": "CFC_017",
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
      "id": "CFC_018",
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
      "id": "CFC_019",
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
      "id": "CFC_020",
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
      "id": "CFC_021",
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
      "id": "CFC_022",
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
      "id": "CFC_023",
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
      "id": "CFC_024",
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
      "id": "CFC_025",
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
      "id": "CFC_026",
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
      "id": "CFC_027",
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
      "id": "CFC_028",
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
      "id": "CFC_029",
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
      "id": "CFC_030",
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
      "id": "CFC_031",
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
      "id": "CFC_032",
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
      "id": "CFC_033",
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
      "id": "CFC_034",
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
      "id": "CFC_035",
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
      "id": "CFC_036",
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
      "id": "CFC_037",
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
      "id": "CFC_038",
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
      "id": "CFC_039",
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
      "id": "CFC_040",
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
`,Vt={componentId:"case_for_change",actionPrefix:"case-for-change-action",outcomePrefix:"case-for-change:outcome",fallbackOutcomes:[{id:"case-for-change:outcome:o1",text:"The need for change has been clearly defined and evidenced"},{id:"case-for-change:outcome:o2",text:"The case for change is understood and accepted"},{id:"case-for-change:outcome:o3",text:"The case for change remains credible and relevant"}]},uo=Ae(co,Vt);function mo(n){return _e(n,Vt,uo)}const go=`{
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
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Design",
      "action": "Define what successful adoption looks like for the change.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_002",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Measurement & Evaluation",
      "action": "Identify adoption indicators, measures and success criteria.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_003",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Analysis & Insight",
      "action": "Identify behaviours, activities and practices that indicate adoption.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_004",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Measurement & Evaluation",
      "action": "Establish baseline measures where adoption can be compared over time.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_005",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Governance",
      "action": "Agree ownership and accountability for monitoring adoption outcomes.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_006",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Engage stakeholders to understand perceived adoption barriers and enablers.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_007",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify groups that may require additional adoption support.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_008",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate adoption expectations and desired behaviours.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Dependency Management",
      "action": "Identify dependencies between adoption, learning, change impact and readiness activities.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Design",
      "action": "Develop an initial adoption monitoring approach.",
      "outcomeIds": [
        "CA_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CA_011",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Measurement",
      "category": "Measurement & Evaluation",
      "action": "Implement mechanisms for monitoring adoption levels and behavioural change.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_012",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Measurement",
      "category": "Measurement & Evaluation",
      "action": "Collect adoption data, usage information, feedback and performance insight.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_013",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Measurement",
      "category": "Analysis & Insight",
      "action": "Analyse adoption trends across different stakeholder groups and operational areas.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_014",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Measurement",
      "category": "Governance",
      "action": "Review adoption performance through governance and reporting structures.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_015",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Measurement",
      "category": "Risk Management",
      "action": "Identify adoption risks and issues arising from low or inconsistent adoption levels.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_016",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather feedback from high and low adopters to understand adoption drivers and barriers.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_017",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Training & Learning",
      "action": "Provide targeted support and development for groups experiencing adoption challenges.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_018",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate adoption progress, successes and areas of focus.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use local networks, champions and managers to support adoption activity.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Measurement",
      "category": "Design",
      "action": "Refine adoption interventions using feedback and monitoring information.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "CA_021",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Measurement & Evaluation",
      "action": "Track adoption performance against targets, expectations and baseline measures.",
      "outcomeIds": [
        "CA_O2",
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_022",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Analysis & Insight",
      "action": "Identify areas of strong adoption and areas requiring additional intervention.",
      "outcomeIds": [
        "CA_O2",
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_023",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Conduct targeted engagement with low-adoption groups to understand remaining barriers.",
      "outcomeIds": [
        "CA_O2"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_024",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise and promote examples of successful adoption and effective practice.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_025",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Dependency Management",
      "action": "Coordinate adoption activity with reinforcement, capability and benefits realisation activities.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_026",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Share evidence of successful adoption and realised improvements.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_027",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Testing & Validation",
      "action": "Validate that adopted behaviours and practices align with intended future-state outcomes.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_028",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Governance",
      "category": "Governance",
      "action": "Review adoption outcomes and improvement actions through governance processes.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Design",
      "action": "Refine adoption approaches using learning from implementation experience.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Support managers and leaders to reinforce adoption expectations.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "CA_031",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Measurement",
      "category": "Measurement & Evaluation",
      "action": "Monitor long-term adoption performance and behavioural sustainability.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CA_032",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Planning & Measurement",
      "category": "Analysis & Insight",
      "action": "Use adoption data to identify opportunities for optimisation and improvement.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CA_033",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Governance",
      "category": "Governance",
      "action": "Embed adoption monitoring into BAU performance and improvement processes.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CA_034",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Design",
      "category": "Design",
      "action": "Use organisational learning to strengthen future adoption approaches.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "CA_035",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Embed adoption-focused behaviours and improvement practices into organisational culture.",
      "outcomeIds": [
        "CA_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,Mt={componentId:"change_adoption",actionPrefix:"change-adoption-action",outcomePrefix:"change-adoption:outcome",fallbackOutcomes:[{id:"change-adoption:outcome:o1",text:"Adoption expectations and measures have been defined"},{id:"change-adoption:outcome:o2",text:"Adoption is actively monitored and supported"},{id:"change-adoption:outcome:o3",text:"Adoption is sustained and optimised"}],lensAliases:{"Planning and Measurement":"Planning and Risk","Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","Skills and Behaviour":"Skills and Behaviour","People Experience and Culture":"Skills and Behaviour",Governance:"Planning and Risk",Design:"Planning and Risk",Reinforcement:"Skills and Behaviour"}},po=Ae(go,Mt);function ho(n){return _e(n,Mt,po)}const fo=`{
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
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Conduct an initial readiness assessment to understand organisational preparedness for change.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_002",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Assess current organisational capability, capacity and resource availability to support the change.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_003",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify readiness gaps between the current state and the desired future state.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_004",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Identify readiness risks that could affect successful implementation.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_005",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Identify organisational, programme and operational dependencies that could influence readiness.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_006",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Engage stakeholders to assess local readiness, concerns, confidence and support requirements.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_007",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Gather insight into organisational attitudes, competing priorities and change capacity.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_008",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Establish baseline readiness measures and indicators.",
      "outcomeIds": [
        "RP_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop an initial change management approach based on readiness findings.",
      "outcomeIds": [
        "RP_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Define the major change management workstreams, activities and milestones required to deliver the change.",
      "outcomeIds": [
        "RP_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "RP_011",
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
      "id": "RP_012",
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
      "id": "RP_013",
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
      "id": "RP_014",
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
      "id": "RP_015",
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
      "id": "RP_016",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Validate planning assumptions and readiness findings with affected stakeholder groups.",
      "outcomeIds": [
        "RP_O1",
        "RP_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RP_017",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate implementation timelines, expected activities and preparation requirements.",
      "outcomeIds": [
        "RP_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RP_018",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Dependency Management",
      "action": "Align learning, communications, engagement and support activities with implementation milestones.",
      "outcomeIds": [
        "RP_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RP_019",
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
      "id": "RP_020",
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
      "id": "RP_021",
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
      "id": "RP_022",
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
      "id": "RP_023",
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
      "id": "RP_024",
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
      "id": "RP_025",
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
      "id": "RP_026",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather stakeholder feedback on implementation preparedness and support requirements.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RP_027",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Provide regular updates on implementation plans, readiness progress and key milestones.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RP_028",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Skills & Behaviour",
      "category": "Dependency Management",
      "action": "Coordinate readiness activities across communications, engagement, learning and support workstreams.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RP_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Testing & Validation",
      "action": "Validate organisational readiness before key implementation events and go-live activities.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RP_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Assess whether planned change management activities are supporting successful implementation.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RP_031",
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
      "id": "RP_032",
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
      "id": "RP_033",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Governance",
      "category": "Governance",
      "action": "Embed readiness reviews and change planning disciplines into organisational change delivery standards.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RP_034",
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
      "id": "RP_035",
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
      "id": "RP_036",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Maintain mechanisms for gathering ongoing readiness insight from across the organisation.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RP_037",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Recognise teams and leaders that consistently demonstrate strong change preparedness and planning discipline.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RP_038",
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
      "id": "RP_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Continuously improve change planning templates, standards and guidance using organisational learning.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RP_040",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Process & Sustainment",
      "category": "Reinforcement",
      "action": "Embed proactive readiness assessment and planning as a routine part of organisational change delivery.",
      "outcomeIds": [
        "RP_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,Ht={componentId:"cm_readiness",actionPrefix:"cm-readiness-action",outcomePrefix:"cm-readiness:outcome",fallbackOutcomes:[{id:"cm-readiness:outcome:o1",text:"Organisational readiness has been assessed"},{id:"cm-readiness:outcome:o2",text:"A robust change management plan has been developed"},{id:"cm-readiness:outcome:o3",text:"Readiness and planning activities actively support successful implementation"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Planning and Risk":"Planning and Risk","People Experience and Culture":"Planning and Risk","Skills and Behaviour":"Planning and Risk","Process and Sustainment":"Planning and Risk",Governance:"Planning and Risk",Reinforcement:"Planning and Risk"}},bo=Ae(fo,Ht);function xo(n){return _e(n,Ht,bo)}const So=`{
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
      "componentId": "CHANGE_IMPACT",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify the areas, services, teams, roles, processes and stakeholder groups likely to be affected by the change.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_002",
      "componentId": "CHANGE_IMPACT",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Create an initial high-level change impact assessment covering expected impacts on people, process, technology, information, governance and ways of working.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_003",
      "componentId": "CHANGE_IMPACT",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify intended and unintended impacts that could affect delivery, productivity, service continuity or stakeholder experience.",
      "outcomeIds": [
        "CI_O1",
        "CI_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_004",
      "componentId": "CHANGE_IMPACT",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Identify initial change risks arising from the expected impacts.",
      "outcomeIds": [
        "CI_O2",
        "CI_O3"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_005",
      "componentId": "CHANGE_IMPACT",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Define the approach, criteria and data sources that will be used to assess change impact in more detail.",
      "outcomeIds": [
        "CI_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_006",
      "componentId": "CHANGE_IMPACT",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Engage affected stakeholder groups to understand how they currently work and where they expect the change to affect them.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_007",
      "componentId": "CHANGE_IMPACT",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Capture stakeholder concerns, perceived disruption, support needs and areas of uncertainty linked to the change.",
      "outcomeIds": [
        "CI_O1",
        "CI_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_008",
      "componentId": "CHANGE_IMPACT",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Map the current high-level processes and ways of working that may be affected by the change.",
      "outcomeIds": [
        "CI_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_009",
      "componentId": "CHANGE_IMPACT",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Identify known pain points, bottlenecks, duplication, workarounds or service pressures that may influence the impact of the change.",
      "outcomeIds": [
        "CI_O1",
        "CI_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_010",
      "componentId": "CHANGE_IMPACT",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Identify baseline measures needed to compare the current state with the future state after implementation.",
      "outcomeIds": [
        "CI_O2",
        "CI_O3"
      ],
      "readinessScore": 1
    },
    {
      "id": "CI_011",
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
      "id": "CI_012",
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
      "id": "CI_013",
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
      "id": "CI_014",
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
      "id": "CI_015",
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
      "id": "CI_016",
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
`,Wt={componentId:"change_impact",actionPrefix:"change-impact-action",outcomePrefix:"change-impact:outcome",fallbackOutcomes:[{id:"change-impact:outcome:o1",text:"The impact of the change has been identified and understood"},{id:"change-impact:outcome:o2",text:"Impacts have been assessed, validated and prioritised"},{id:"change-impact:outcome:o3",text:"Change impacts are actively managed through plans, governance and support"}]},vo=Ae(So,Wt);function yo(n){return _e(n,Wt,vo)}const wo=`{
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
      "id": "CN_001",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Define the purpose, scope and objectives of the change network.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "CN_002",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Identify areas, services and stakeholder groups that require representation within the change network.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "CN_003",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Define the roles, responsibilities and expectations for change agents and champions.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "CN_004",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Establish sponsorship and governance arrangements for the change network.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "CN_005",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop a recruitment and onboarding approach for change network members.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "CN_006",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Identify credible and influential individuals who can support change locally.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "CN_007",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Engagement",
      "category": "Engagement",
      "action": "Engage potential network members to understand their willingness and ability to participate.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "CN_008",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Assess gaps in representation, influence and local knowledge.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "CN_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate the purpose and value of the change network to stakeholders.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 1
    },
    {
      "id": "CN_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Begin connecting prospective network members across organisational areas.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 1
    },
    {
      "id": "CN_011",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Launch the change network with defined membership, responsibilities and operating arrangements.",
      "outcomeIds": ["CN_O1"],
      "readinessScore": 2
    },
    {
      "id": "CN_012",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Training & Learning",
      "action": "Provide initial training and capability development for network members.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "CN_013",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Provide network members with key messages, updates and engagement materials.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "CN_014",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Establish mechanisms for two-way communication between the programme and the network.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "CN_015",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Define measures to assess network participation, contribution and effectiveness.",
      "outcomeIds": ["CN_O2", "CN_O3"],
      "readinessScore": 2
    },
    {
      "id": "CN_016",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use network members to gather insight, questions, concerns and feedback from stakeholders.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "CN_017",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Use network members to reinforce key messages and support local engagement activity.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "CN_018",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Enable network members to represent stakeholder concerns within programme discussions.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "CN_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Support network members to build local advocacy and confidence in the change.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 2
    },
    {
      "id": "CN_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Monitor engagement levels and participation across the network.",
      "outcomeIds": ["CN_O2", "CN_O3"],
      "readinessScore": 2
    },
    {
      "id": "CN_021",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Integrate the change network into programme governance, planning and delivery activities.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "CN_022",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Evaluate the effectiveness of the network in supporting change outcomes.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "CN_023",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Refine network structures, roles and approaches based on learning and feedback.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "CN_024",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "Align change network activity with engagement, learning and adoption plans.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "CN_025",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Expand network involvement in implementation and decision-support activities.",
      "outcomeIds": ["CN_O2", "CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "CN_026",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use network members to facilitate local problem solving and remove barriers to adoption.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 3
    },
    {
      "id": "CN_027",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Share examples of network impact and success across stakeholder groups.",
      "outcomeIds": ["CN_O2", "CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "CN_028",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise and celebrate the contribution of network members.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "CN_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Assess stakeholder perceptions of change network effectiveness.",
      "outcomeIds": ["CN_O2", "CN_O3"],
      "readinessScore": 3
    },
    {
      "id": "CN_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Use network members to reinforce desired behaviours and ways of working.",
      "outcomeIds": ["CN_O2"],
      "readinessScore": 3
    },
    {
      "id": "CN_031",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Embed the change network into organisational change and improvement approaches.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "CN_032",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Review and continuously improve network effectiveness and operating models.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "CN_033",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Use organisational learning to strengthen future change network approaches.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "CN_034",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Dependency Management",
      "action": "Integrate the network with organisational improvement, transformation and change capability activities.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "CN_035",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Maintain a sustainable network capable of supporting future change initiatives.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "CN_036",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Maintain active two-way communication between stakeholders and the change network.",
      "outcomeIds": ["CN_O2", "CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "CN_037",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Embed change champion and change agent roles into organisational culture.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "CN_038",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Measure the network’s contribution to engagement, adoption and reinforcement outcomes.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "CN_039",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Develop future change leaders from within the network.",
      "outcomeIds": ["CN_O3"],
      "readinessScore": 4
    },
    {
      "id": "CN_040",
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
`,Kt={componentId:"change_network",actionPrefix:"change-network-action",outcomePrefix:"change-network:outcome",fallbackOutcomes:[{id:"change-network:outcome:o1",text:"A representative and effective change network has been established"},{id:"change-network:outcome:o2",text:"The change network actively enables engagement and adoption"},{id:"change-network:outcome:o3",text:"The change network is embedded and delivers ongoing value"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Engagement:"People Experience and Culture","Analysis and Insight":"People Experience and Culture"}},No=Ae(wo,Kt);function Co(n){return _e(n,Kt,No)}const Eo=`{
  "component": {
    "id": "ORG_CHANGE_READINESS",
    "name": "Org Change Readiness"
  },
  "outcomes": [
    {
      "id": "REINF_O1",
      "name": "Organisational readiness has been assessed and understood",
      "description": ""
    },
    {
      "id": "REINF_O2",
      "name": "Readiness gaps are being actively addressed",
      "description": ""
    },
    {
      "id": "REINF_O3",
      "name": "The organisation is prepared to successfully absorb and sustain the change",
      "description": ""
    }
  ],
  "actions": [
    {
      "id": "REINF_001",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Define what successful long-term adoption and sustainment will look like.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_002",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Identify indicators that will demonstrate whether the change is being sustained.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_003",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Assign ownership and accountability for reinforcement activities.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_004",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Dependency Management",
      "action": "Identify dependencies between adoption, benefits, leadership and reinforcement activity.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_005",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Design",
      "action": "Develop an initial reinforcement approach aligned to adoption goals.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_006",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify factors that may help or hinder long-term sustainment of the change.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_007",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Engage stakeholders to understand what support is needed to maintain new behaviours.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_008",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify groups where adoption may be difficult to sustain without additional support.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate expectations regarding sustained adoption and future-state behaviours.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Establish baseline sustainment and reinforcement measures.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_011",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Ensure leaders and managers visibly reinforce desired behaviours and ways of working.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_012",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Communicate adoption successes, improvements and positive outcomes.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_013",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Review reinforcement indicators and sustainment risks through governance mechanisms.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_014",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Measurement",
      "category": "Measurement & Evaluation",
      "action": "Monitor adoption, behaviour and performance indicators linked to sustained change.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_015",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Measurement",
      "category": "Design",
      "action": "Refine reinforcement plans using sustainment data and stakeholder feedback.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_016",
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
      "id": "REINF_017",
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
      "id": "REINF_018",
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
      "id": "REINF_019",
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
      "id": "REINF_020",
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
      "id": "REINF_021",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Measurement & Evaluation",
      "action": "Monitor sustainment indicators and identify areas where adoption is weakening.",
      "outcomeIds": [
        "REINF_O2",
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_022",
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
      "id": "REINF_023",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Ensure leaders consistently model desired behaviours and reinforce expectations.",
      "outcomeIds": [
        "REINF_O2",
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_024",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Governance",
      "category": "Governance",
      "action": "Review sustainment performance and improvement actions through governance processes.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_025",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Analysis & Insight",
      "action": "Analyse performance, adoption and benefits data to identify sustainment opportunities.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_026",
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
      "id": "REINF_027",
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
      "id": "REINF_028",
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
      "id": "REINF_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Risk Management",
      "action": "Identify risks that may cause reversion to previous behaviours or ways of working.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Design",
      "category": "Design",
      "action": "Update reinforcement approaches using sustainment insight and lessons learned.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_031",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Governance",
      "category": "Governance",
      "action": "Embed reinforcement measures into operational management and performance processes.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "REINF_032",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Monitor long-term behavioural sustainment and continuous improvement outcomes.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "REINF_033",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Design",
      "category": "Design",
      "action": "Use organisational learning to improve future reinforcement strategies.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "REINF_034",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Embed recognition, feedback and reinforcement practices into organisational culture.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "REINF_035",
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
`,zt={componentId:"org_maturity",actionPrefix:"org-change-readiness-action",outcomePrefix:"org-change-readiness:outcome",fallbackOutcomes:[{id:"org-change-readiness:outcome:o1",text:"Organisational readiness has been assessed and understood"},{id:"org-change-readiness:outcome:o2",text:"Readiness gaps are being actively addressed"},{id:"org-change-readiness:outcome:o3",text:"The organisation is prepared to successfully absorb and sustain the change"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"Skills and Behaviour","Planning and Measurement":"Skills and Behaviour",Design:"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Reinforcement:"Skills and Behaviour"}},Io=Ae(Eo,zt);function _o(n){return _e(n,zt,Io)}const Ao="pathway-auto-action:",jo="pathway:auto-objective:",Oo="vision:auto-objective:";function ko(n){return n.startsWith(jo)||n.startsWith(Oo)}function Yt(n){const t=n.orgProfile.cst.pathway,s={...n.objectives||{}},a=Object.keys(n.currentDraft||{}).reduce((c,S)=>{const b=n.currentDraft[S]||{};return c[S]=Object.keys(b).reduce((u,o)=>{const E=b[o];return u[o]={...E,actions:(E.actions||[]).filter(x=>!x.id.startsWith(Ao))},u},{}),c},{});return Fn.forEach(c=>{Bn(c.id,t)&&(s[c.id]=(s[c.id]||[]).filter(b=>!ko(b.id)))}),{...n,currentDraft:a,objectives:s}}const Po=`{
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
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Identify key business processes affected by the change.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_002",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Map current-state processes and workflows.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_003",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Identify process pain points, bottlenecks, duplication and inefficiencies.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_004",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Measurement & Evaluation",
      "action": "Establish baseline process performance measures.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_005",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Engage process users to understand current operational challenges and opportunities for improvement.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_006",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Design",
      "action": "Design future-state processes that support the intended change outcomes.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_007",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Conduct gap analysis between current-state and future-state processes.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_008",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "Identify process dependencies, interfaces and external interactions.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Governance",
      "category": "Governance",
      "action": "Assign process ownership and accountability for future-state processes.",
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
      "category": "Design",
      "action": "Document future-state processes and operating procedures.",
      "outcomeIds": [
        "PC_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "PC_011",
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
      "id": "PC_012",
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
      "id": "PC_013",
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
      "id": "PC_014",
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
      "id": "PC_015",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Dependency Management",
      "category": "Dependency Management",
      "action": "Coordinate process implementation with learning, communications, adoption and operational readiness activities.",
      "outcomeIds": [
        "PC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "PC_016",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate process changes, responsibilities and expectations to stakeholders.",
      "outcomeIds": [
        "PC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "PC_017",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Support teams in understanding and applying new process requirements.",
      "outcomeIds": [
        "PC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "PC_018",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Governance",
      "category": "Governance",
      "action": "Review implementation progress and process readiness through governance forums.",
      "outcomeIds": [
        "PC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "PC_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Identify and manage risks associated with process implementation.",
      "outcomeIds": [
        "PC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "PC_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Monitor early process performance following implementation.",
      "outcomeIds": [
        "PC_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "PC_021",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Measure process performance against baseline and target measures.",
      "outcomeIds": [
        "PC_O2",
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_022",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Analyse process performance trends and identify opportunities for optimisation.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_023",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Testing & Validation",
      "category": "Testing & Validation",
      "action": "Validate that operational outcomes align with future-state process design objectives.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_024",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Governance",
      "category": "Governance",
      "action": "Review process performance and improvement priorities through governance routes.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_025",
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
      "id": "PC_026",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather user feedback on process usability and effectiveness.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_027",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Communication",
      "category": "Communication",
      "action": "Share process improvements, successes and lessons learned.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_028",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Recognise teams contributing to successful process adoption and improvement.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Dependency Management",
      "category": "Dependency Management",
      "action": "Align process improvements with benefits realisation and adoption activities.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Implementation",
      "category": "Implementation",
      "action": "Standardise new processes across relevant business areas.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "PC_031",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Continuously monitor process performance and operational outcomes.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "PC_032",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Design",
      "category": "Design",
      "action": "Use performance insight and organisational learning to optimise processes further.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "PC_033",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Governance",
      "category": "Governance",
      "action": "Embed process review and optimisation into BAU governance arrangements.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "PC_034",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Implementation",
      "category": "Implementation",
      "action": "Embed ownership for continuous process improvement into operational teams.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "PC_035",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Promote a culture of process excellence, optimisation and continuous improvement.",
      "outcomeIds": [
        "PC_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,qt={componentId:"process_change",actionPrefix:"process-change-action",outcomePrefix:"process-change:outcome",fallbackOutcomes:[{id:"process-change:outcome:o1",text:"Current and future processes have been defined"},{id:"process-change:outcome:o2",text:"Process changes have been implemented and adopted"},{id:"process-change:outcome:o3",text:"Processes are optimised and continuously improved"}],lensAliases:{"Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Skills and Behaviour","Planning and Risk":"Process and Sustainment","Analysis and Insight":"Process and Sustainment",Communication:"Skills and Behaviour","Dependency Management":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment",Implementation:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"Skills and Behaviour","Testing and Validation":"Process and Sustainment"}},Ro=Ae(Po,qt);function Do(n){return _e(n,qt,Ro)}const To=`{
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
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Define what successful long-term adoption and sustainment will look like.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_002",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Measurement & Evaluation",
      "action": "Identify indicators that will demonstrate whether the change is being sustained.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_003",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Assign ownership and accountability for reinforcement activities.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_004",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Dependency Management",
      "action": "Identify dependencies between adoption, benefits, leadership and reinforcement activity.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_005",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Measurement",
      "category": "Design",
      "action": "Develop an initial reinforcement approach aligned to adoption goals.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_006",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify factors that may help or hinder long-term sustainment of the change.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_007",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Engage stakeholders to understand what support is needed to maintain new behaviours.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_008",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify groups where adoption may be difficult to sustain without additional support.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate expectations regarding sustained adoption and future-state behaviours.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Establish baseline sustainment and reinforcement measures.",
      "outcomeIds": [
        "REINF_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "REINF_011",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Ensure leaders and managers visibly reinforce desired behaviours and ways of working.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_012",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Communication",
      "action": "Communicate adoption successes, improvements and positive outcomes.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_013",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Review reinforcement indicators and sustainment risks through governance mechanisms.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_014",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Measurement",
      "category": "Measurement & Evaluation",
      "action": "Monitor adoption, behaviour and performance indicators linked to sustained change.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_015",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Measurement",
      "category": "Design",
      "action": "Refine reinforcement plans using sustainment data and stakeholder feedback.",
      "outcomeIds": [
        "REINF_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "REINF_016",
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
      "id": "REINF_017",
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
      "id": "REINF_018",
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
      "id": "REINF_019",
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
      "id": "REINF_020",
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
      "id": "REINF_021",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Measurement & Evaluation",
      "action": "Monitor sustainment indicators and identify areas where adoption is weakening.",
      "outcomeIds": [
        "REINF_O2",
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_022",
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
      "id": "REINF_023",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Ensure leaders consistently model desired behaviours and reinforce expectations.",
      "outcomeIds": [
        "REINF_O2",
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_024",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Governance",
      "category": "Governance",
      "action": "Review sustainment performance and improvement actions through governance processes.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_025",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Analysis & Insight",
      "action": "Analyse performance, adoption and benefits data to identify sustainment opportunities.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_026",
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
      "id": "REINF_027",
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
      "id": "REINF_028",
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
      "id": "REINF_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Measurement",
      "category": "Risk Management",
      "action": "Identify risks that may cause reversion to previous behaviours or ways of working.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Design",
      "category": "Design",
      "action": "Update reinforcement approaches using sustainment insight and lessons learned.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "REINF_031",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Governance",
      "category": "Governance",
      "action": "Embed reinforcement measures into operational management and performance processes.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "REINF_032",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Monitor long-term behavioural sustainment and continuous improvement outcomes.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "REINF_033",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Design",
      "category": "Design",
      "action": "Use organisational learning to improve future reinforcement strategies.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "REINF_034",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Embed recognition, feedback and reinforcement practices into organisational culture.",
      "outcomeIds": [
        "REINF_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "REINF_035",
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
`,Jt={componentId:"reinforcement",actionPrefix:"reinforcement-action",outcomePrefix:"reinforcement:outcome",fallbackOutcomes:[{id:"reinforcement:outcome:o1",text:"Reinforcement strategy and sustainment measures are defined"},{id:"reinforcement:outcome:o2",text:"Reinforcement activities support sustained adoption and behaviour change"},{id:"reinforcement:outcome:o3",text:"Sustained change outcomes are embedded and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Strategic Direction and Leadership":"Process and Sustainment","Planning and Measurement":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"People Experience and Culture"}},$o=Ae(To,Jt);function Lo(n){return _e(n,Jt,$o)}const Fo=`{
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
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify potential sources of resistance across stakeholder groups, teams and impacted areas.",
      "outcomeIds": [
        "RES_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_002",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess potential causes of resistance including uncertainty, perceived loss, previous experiences and competing priorities.",
      "outcomeIds": [
        "RES_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_003",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Engage stakeholders to understand concerns, apprehensions and barriers to supporting the change.",
      "outcomeIds": [
        "RES_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_004",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Conduct force field analysis or similar techniques to identify restraining forces affecting the change.",
      "outcomeIds": [
        "RES_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_005",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Assess the risk and potential impact of identified resistance on implementation and adoption.",
      "outcomeIds": [
        "RES_O1",
        "RES_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_006",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop an initial resistance management approach based on identified resistance drivers.",
      "outcomeIds": [
        "RES_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_007",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Define ownership and accountability for resistance management activities.",
      "outcomeIds": [
        "RES_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_008",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Identify preventative actions designed to reduce the likelihood of resistance developing.",
      "outcomeIds": [
        "RES_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Identify dependencies between resistance management and engagement, communication, learning and sponsorship activities.",
      "outcomeIds": [
        "RES_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Measurement & Evaluation",
      "action": "Define indicators that will be used to identify and measure resistance.",
      "outcomeIds": [
        "RES_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "RES_011",
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
      "id": "RES_012",
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
      "id": "RES_013",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Communication",
      "category": "Communication",
      "action": "Address misconceptions, rumours and misinformation through targeted communication activities.",
      "outcomeIds": [
        "RES_O2",
        "RES_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RES_014",
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
      "id": "RES_015",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Training & Learning",
      "action": "Prepare leaders and managers to identify, understand and respond to resistance effectively.",
      "outcomeIds": [
        "RES_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RES_016",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Integrate significant resistance themes into change risk management processes.",
      "outcomeIds": [
        "RES_O2",
        "RES_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RES_017",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Monitor indicators of resistance across stakeholder groups and impacted areas.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RES_018",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Review resistance themes and mitigation actions through governance forums.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RES_019",
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
      "id": "RES_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Design",
      "category": "Design",
      "action": "Refine resistance management interventions using stakeholder insight and feedback.",
      "outcomeIds": [
        "RES_O2",
        "RES_O3"
      ],
      "readinessScore": 2
    },
    {
      "id": "RES_021",
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
      "id": "RES_022",
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
      "id": "RES_023",
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
      "id": "RES_024",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Strategic Direction & Leadership",
      "category": "Reinforcement",
      "action": "Use visible leadership support to reinforce desired behaviours and address resistance.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RES_025",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Measurement & Evaluation",
      "action": "Assess the effectiveness of resistance management interventions.",
      "outcomeIds": [
        "RES_O2",
        "RES_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RES_026",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Review resistance-related risks and update mitigations where required.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RES_027",
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
      "id": "RES_028",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Engagement",
      "category": "Engagement",
      "action": "Use feedback channels to identify unresolved concerns before they become entrenched resistance.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RES_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Governance",
      "category": "Governance",
      "action": "Review resistance themes and organisational responses through governance and leadership forums.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RES_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Design",
      "category": "Design",
      "action": "Refine resistance management plans based on implementation experience and lessons learned.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RES_031",
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
      "id": "RES_032",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Use organisational learning to strengthen future resistance management approaches.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RES_033",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Governance",
      "category": "Governance",
      "action": "Embed resistance management disciplines into organisational change delivery standards.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RES_034",
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
      "id": "RES_035",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Embed behaviours that promote openness, feedback and constructive challenge during change.",
      "outcomeIds": [
        "RES_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,Xt={componentId:"resistance",actionPrefix:"resistance-action",outcomePrefix:"resistance:outcome",fallbackOutcomes:[{id:"resistance:outcome:o1",text:"Potential sources of resistance have been identified and understood"},{id:"resistance:outcome:o2",text:"Strategies and interventions are in place to prevent and address resistance"},{id:"resistance:outcome:o3",text:"Resistance is actively managed and reduced throughout the change lifecycle"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour",Design:"Skills and Behaviour",Communication:"People Experience and Culture",Engagement:"People Experience and Culture",Reinforcement:"Skills and Behaviour"}},Bo=Ae(Fo,Xt);function Go(n){return _e(n,Xt,Bo)}const Uo=`{
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
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Identify potential risks that could affect successful delivery, adoption, benefit realisation or sustainment of the change.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_002",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Conduct initial change risk assessment workshops involving key stakeholders and subject matter experts.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_003",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Categorise identified risks according to likelihood, impact and urgency.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_004",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Apply structured risk analysis techniques to understand potential consequences of identified risks.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_005",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Establish an initial change risk register.",
      "outcomeIds": [
        "RM_O1",
        "RM_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_006",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Engage stakeholders to identify risks from operational, behavioural, cultural and organisational perspectives.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_007",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify known concerns, previous change experiences and organisational vulnerabilities that could increase risk.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_008",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Assess stakeholder confidence in the organisation's ability to manage the change successfully.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Analysis & Insight",
      "action": "Review current processes, operating arrangements and dependencies to identify areas of potential risk.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Process & Sustainment",
      "category": "Dependency Management",
      "action": "Identify critical dependencies that may increase the risk profile of the change.",
      "outcomeIds": [
        "RM_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "RM_011",
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
      "id": "RM_012",
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
      "id": "RM_013",
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
      "id": "RM_014",
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
      "id": "RM_015",
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
      "id": "RM_016",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate significant risks and agreed mitigations to appropriate stakeholder groups.",
      "outcomeIds": [
        "RM_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RM_017",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Use stakeholder insight and feedback to refine risk understanding and mitigation activities.",
      "outcomeIds": [
        "RM_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "RM_018",
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
      "id": "RM_019",
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
      "id": "RM_020",
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
      "id": "RM_021",
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
      "id": "RM_022",
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
      "id": "RM_023",
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
      "id": "RM_024",
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
      "id": "RM_025",
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
      "id": "RM_026",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather stakeholder feedback on emerging risks, concerns and unintended consequences.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RM_027",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Provide regular risk updates to stakeholders and leadership teams.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "RM_028",
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
      "id": "RM_029",
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
      "id": "RM_030",
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
      "id": "RM_031",
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
      "id": "RM_032",
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
      "id": "RM_033",
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
      "id": "RM_034",
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
      "id": "RM_035",
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
      "id": "RM_036",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Encourage proactive risk identification and escalation throughout the organisation.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RM_037",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Recognise and reinforce behaviours that contribute to effective risk management.",
      "outcomeIds": [
        "RM_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "RM_038",
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
      "id": "RM_039",
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
      "id": "RM_040",
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
`,Qt={componentId:"risk_management",actionPrefix:"risk-management-action",outcomePrefix:"risk-management:outcome",fallbackOutcomes:[{id:"risk-management:outcome:o1",text:"Change risks have been identified and assessed"},{id:"risk-management:outcome:o2",text:"Risk mitigation and management activities are in place"},{id:"risk-management:outcome:o3",text:"Risks are proactively managed throughout the change lifecycle"}],lensAliases:{"Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Strategic Direction and Leadership":"Planning and Risk","Skills and Behaviour":"Process and Sustainment",Governance:"Planning and Risk",Reinforcement:"Process and Sustainment"}},Vo=Ae(Uo,Qt);function Mo(n){return _e(n,Qt,Vo)}const Ho=`{
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
    {"id":"SL_001","fromStatus":"Emerging","toStatus":"Developing","lens":"Skills & Behaviour","category":"Analysis & Insight","action":"Identify the knowledge, skills and behaviours required to operate successfully in the future state.","outcomeIds":["SL_O1"],"readinessScore":1},
    {"id":"SL_002","fromStatus":"Emerging","toStatus":"Developing","lens":"Skills & Behaviour","category":"Analysis & Insight","action":"Assess current capability levels across impacted stakeholder groups.","outcomeIds":["SL_O1"],"readinessScore":1},
    {"id":"SL_003","fromStatus":"Emerging","toStatus":"Developing","lens":"Skills & Behaviour","category":"Analysis & Insight","action":"Conduct a learning needs and skills gap assessment.","outcomeIds":["SL_O1"],"readinessScore":1},
    {"id":"SL_004","fromStatus":"Emerging","toStatus":"Developing","lens":"Planning & Risk","category":"Analysis & Insight","action":"Assess the scale, complexity and impact of learning requirements across the organisation.","outcomeIds":["SL_O1"],"readinessScore":1},
    {"id":"SL_005","fromStatus":"Emerging","toStatus":"Developing","lens":"People Experience & Culture","category":"Engagement","action":"Engage stakeholders to understand learning preferences, barriers and support requirements.","outcomeIds":["SL_O1"],"readinessScore":1},
    {"id":"SL_006","fromStatus":"Emerging","toStatus":"Developing","lens":"Strategic Direction & Leadership","category":"Design","action":"Develop a learning and capability development approach aligned to change objectives.","outcomeIds":["SL_O2"],"readinessScore":1},
    {"id":"SL_007","fromStatus":"Emerging","toStatus":"Developing","lens":"Strategic Direction & Leadership","category":"Design","action":"Define learning objectives, target audiences and expected learning outcomes.","outcomeIds":["SL_O2"],"readinessScore":1},
    {"id":"SL_008","fromStatus":"Emerging","toStatus":"Developing","lens":"Dependency Management","category":"Dependency Management","action":"Identify dependencies between learning activities and communications, readiness, process and implementation plans.","outcomeIds":["SL_O2"],"readinessScore":1},
    {"id":"SL_009","fromStatus":"Emerging","toStatus":"Developing","lens":"Strategic Direction & Leadership","category":"Governance","action":"Establish accountability for learning design, delivery and evaluation.","outcomeIds":["SL_O2"],"readinessScore":1},
    {"id":"SL_010","fromStatus":"Emerging","toStatus":"Developing","lens":"Skills & Behaviour","category":"Design","action":"Define the methods and channels that will be used to deliver learning and development activities.","outcomeIds":["SL_O2"],"readinessScore":1},
    {"id":"SL_011","fromStatus":"Developing","toStatus":"Embedding","lens":"Skills & Behaviour","category":"Design","action":"Develop learning materials, guidance, resources and support content.","outcomeIds":["SL_O2"],"readinessScore":2},
    {"id":"SL_012","fromStatus":"Developing","toStatus":"Embedding","lens":"Skills & Behaviour","category":"Training & Learning","action":"Deliver learning activities to impacted stakeholder groups.","outcomeIds":["SL_O2"],"readinessScore":2},
    {"id":"SL_013","fromStatus":"Developing","toStatus":"Embedding","lens":"Skills & Behaviour","category":"Training & Learning","action":"Provide role-specific learning interventions where different groups have different learning requirements.","outcomeIds":["SL_O2"],"readinessScore":2},
    {"id":"SL_014","fromStatus":"Developing","toStatus":"Embedding","lens":"Skills & Behaviour","category":"Training & Learning","action":"Develop and support local learning champions, coaches or trainers.","outcomeIds":["SL_O2"],"readinessScore":2},
    {"id":"SL_015","fromStatus":"Developing","toStatus":"Embedding","lens":"Measurement & Evaluation","category":"Measurement & Evaluation","action":"Implement mechanisms to assess attendance, participation and learning completion.","outcomeIds":["SL_O2","SL_O3"],"readinessScore":2},
    {"id":"SL_016","fromStatus":"Developing","toStatus":"Embedding","lens":"People Experience & Culture","category":"Communication","action":"Communicate learning opportunities, schedules and expectations to stakeholders.","outcomeIds":["SL_O2"],"readinessScore":2},
    {"id":"SL_017","fromStatus":"Developing","toStatus":"Embedding","lens":"People Experience & Culture","category":"Engagement","action":"Gather learner feedback to improve learning content and delivery.","outcomeIds":["SL_O2","SL_O3"],"readinessScore":2},
    {"id":"SL_018","fromStatus":"Developing","toStatus":"Embedding","lens":"Planning & Risk","category":"Dependency Management","action":"Coordinate training activities with implementation milestones and readiness requirements.","outcomeIds":["SL_O2"],"readinessScore":2},
    {"id":"SL_019","fromStatus":"Developing","toStatus":"Embedding","lens":"Planning & Risk","category":"Risk Management","action":"Identify and manage risks associated with learning delivery and learner readiness.","outcomeIds":["SL_O2"],"readinessScore":2},
    {"id":"SL_020","fromStatus":"Developing","toStatus":"Embedding","lens":"Governance","category":"Governance","action":"Monitor learning delivery through governance and reporting processes.","outcomeIds":["SL_O2","SL_O3"],"readinessScore":2},
    {"id":"SL_021","fromStatus":"Embedding","toStatus":"Adopted","lens":"Measurement & Evaluation","category":"Measurement & Evaluation","action":"Evaluate whether learning objectives have been achieved.","outcomeIds":["SL_O3"],"readinessScore":3},
    {"id":"SL_022","fromStatus":"Embedding","toStatus":"Adopted","lens":"Measurement & Evaluation","category":"Testing & Validation","action":"Assess whether participants can demonstrate required knowledge and skills.","outcomeIds":["SL_O3"],"readinessScore":3},
    {"id":"SL_023","fromStatus":"Embedding","toStatus":"Adopted","lens":"Skills & Behaviour","category":"Training & Learning","action":"Provide refresher learning and targeted support where capability gaps remain.","outcomeIds":["SL_O3"],"readinessScore":3},
    {"id":"SL_024","fromStatus":"Embedding","toStatus":"Adopted","lens":"Skills & Behaviour","category":"Training & Learning","action":"Offer ongoing coaching and support to reinforce learning transfer.","outcomeIds":["SL_O3"],"readinessScore":3},
    {"id":"SL_025","fromStatus":"Embedding","toStatus":"Adopted","lens":"Measurement & Evaluation","category":"Measurement & Evaluation","action":"Track learning performance data and identify continuing capability gaps.","outcomeIds":["SL_O3"],"readinessScore":3},
    {"id":"SL_026","fromStatus":"Embedding","toStatus":"Adopted","lens":"People Experience & Culture","category":"Engagement","action":"Gather feedback about learning effectiveness, confidence and practical application.","outcomeIds":["SL_O3"],"readinessScore":3},
    {"id":"SL_027","fromStatus":"Embedding","toStatus":"Adopted","lens":"Communication","category":"Communication","action":"Share learning successes, progress and achievement milestones.","outcomeIds":["SL_O3"],"readinessScore":3},
    {"id":"SL_028","fromStatus":"Embedding","toStatus":"Adopted","lens":"Governance","category":"Governance","action":"Review learning outcomes and capability measures through governance processes.","outcomeIds":["SL_O3"],"readinessScore":3},
    {"id":"SL_029","fromStatus":"Embedding","toStatus":"Adopted","lens":"Design","category":"Design","action":"Refine learning approaches using evaluation findings and implementation experience.","outcomeIds":["SL_O3"],"readinessScore":3},
    {"id":"SL_030","fromStatus":"Embedding","toStatus":"Adopted","lens":"Reinforcement","category":"Reinforcement","action":"Recognise achievement and application of learning within teams and stakeholder groups.","outcomeIds":["SL_O3"],"readinessScore":3},
    {"id":"SL_031","fromStatus":"Adopted","toStatus":"Thriving","lens":"Skills & Behaviour","category":"Training & Learning","action":"Maintain continuous learning opportunities to support evolving organisational needs.","outcomeIds":["SL_O3"],"readinessScore":4},
    {"id":"SL_032","fromStatus":"Adopted","toStatus":"Thriving","lens":"Measurement & Evaluation","category":"Measurement & Evaluation","action":"Monitor long-term capability development and learning effectiveness.","outcomeIds":["SL_O3"],"readinessScore":4},
    {"id":"SL_033","fromStatus":"Adopted","toStatus":"Thriving","lens":"Design","category":"Design","action":"Use organisational learning and insight to improve future learning approaches.","outcomeIds":["SL_O3"],"readinessScore":4},
    {"id":"SL_034","fromStatus":"Adopted","toStatus":"Thriving","lens":"Governance","category":"Governance","action":"Embed learning and capability development into organisational improvement and change delivery practices.","outcomeIds":["SL_O3"],"readinessScore":4},
    {"id":"SL_035","fromStatus":"Adopted","toStatus":"Thriving","lens":"Reinforcement","category":"Reinforcement","action":"Promote a culture of continuous learning and development across the organisation.","outcomeIds":["SL_O3"],"readinessScore":4}
  ]
}
`,Zt={componentId:"skills_learning",actionPrefix:"skills-learning-action",outcomePrefix:"skills-learning:outcome",fallbackOutcomes:[{id:"skills-learning:outcome:o1",text:"Future learning and capability requirements have been identified"},{id:"skills-learning:outcome:o2",text:"Learning interventions have been designed and delivered"},{id:"skills-learning:outcome:o3",text:"Learning outcomes are achieved and sustained"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Process and Sustainment":"Skills and Behaviour",Governance:"Skills and Behaviour",Communication:"People Experience and Culture",Reinforcement:"Skills and Behaviour",Design:"Skills and Behaviour","Dependency Management":"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour","Testing and Validation":"Skills and Behaviour"}},Wo=Ae(Ho,Zt);function Ko(n){return _e(n,Zt,Wo)}const zo=`{
  "component": {
    "id": "SENIOR_SPONSORSHIP_GOVERNANCE",
    "name": "Senior Sponsorship & Governance"
  },
  "outcomes": [
    {
      "id": "SSG_O1",
      "name": "Clear sponsorship and governance structures are established",
      "description": ""
    },
    {
      "id": "SSG_O2",
      "name": "Sponsors actively lead and champion the change",
      "description": ""
    },
    {
      "id": "SSG_O3",
      "name": "Governance and sponsorship drive successful delivery",
      "description": ""
    }
  ],
  "actions": [
    {
      "id": "SSG_001",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Identify the Senior Responsible Owner and executive sponsors required to lead the change.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_002",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Assess sponsorship requirements across impacted business areas and stakeholder groups.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_003",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Define sponsor roles, responsibilities and expectations throughout the change lifecycle.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_004",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Design an initial governance structure including decision-making and escalation routes.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_005",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Develop an initial sponsor coalition model ensuring representation from all impacted areas.",
      "outcomeIds": [
        "SSG_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_006",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Engage prospective sponsors to gain commitment and understand their capacity to support the change.",
      "outcomeIds": [
        "SSG_O1",
        "SSG_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_007",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Analysis & Insight",
      "category": "Analysis & Insight",
      "action": "Assess stakeholder perceptions of leadership support for the change.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_008",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify gaps in sponsor visibility, influence and representation.",
      "outcomeIds": [
        "SSG_O1",
        "SSG_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate who is sponsoring the change and why they are involved.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Begin building relationships between sponsors, leaders and impacted stakeholder groups.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "SSG_011",
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
      "id": "SSG_012",
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
      "id": "SSG_013",
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
      "id": "SSG_014",
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
      "id": "SSG_015",
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
      "id": "SSG_016",
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
      "id": "SSG_017",
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
      "id": "SSG_018",
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
      "id": "SSG_019",
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
      "id": "SSG_020",
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
      "id": "SSG_021",
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
      "id": "SSG_022",
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
      "id": "SSG_023",
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
      "id": "SSG_024",
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
      "id": "SSG_025",
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
      "id": "SSG_026",
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
      "id": "SSG_027",
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
      "id": "SSG_028",
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
      "id": "SSG_029",
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
      "id": "SSG_030",
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
      "id": "SSG_031",
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
      "id": "SSG_032",
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
      "id": "SSG_033",
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
      "id": "SSG_034",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Strategic Direction & Leadership",
      "category": "Design",
      "action": "Use learning from previous changes to strengthen sponsorship and governance approaches.",
      "outcomeIds": [
        "SSG_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "SSG_035",
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
      "id": "SSG_036",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "People Experience & Culture",
      "category": "Reinforcement",
      "action": "Embed sponsor visibility into organisational culture and leadership expectations.",
      "outcomeIds": [
        "SSG_O2"
      ],
      "readinessScore": 4
    },
    {
      "id": "SSG_037",
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
      "id": "SSG_038",
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
      "id": "SSG_039",
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
      "id": "SSG_040",
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
    }
  ]
}
`,es={componentId:"sponsorship",actionPrefix:"sponsorship-action",outcomePrefix:"sponsorship:outcome",fallbackOutcomes:[{id:"sponsorship:outcome:o1",text:"Clear sponsorship and governance structures are established"},{id:"sponsorship:outcome:o2",text:"Sponsors actively lead and champion the change"},{id:"sponsorship:outcome:o3",text:"Governance and sponsorship drive successful delivery"}]},Yo=Ae(zo,es);function qo(n){return _e(n,es,Yo)}const Jo=`{
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
    {"id":"SEC_001","fromStatus":"Emerging","toStatus":"Developing","lens":"People Experience & Culture","category":"Analysis & Insight","action":"Identify stakeholders likely to influence, support, be affected by or be impacted by the change.","outcomeIds":["SEC_O1"],"readinessScore":1},
    {"id":"SEC_002","fromStatus":"Emerging","toStatus":"Developing","lens":"People Experience & Culture","category":"Analysis & Insight","action":"Analyse stakeholder influence, interest, commitment, capability and potential impact.","outcomeIds":["SEC_O1"],"readinessScore":1},
    {"id":"SEC_003","fromStatus":"Emerging","toStatus":"Developing","lens":"People Experience & Culture","category":"Analysis & Insight","action":"Segment stakeholders into logical groups with similar characteristics and needs.","outcomeIds":["SEC_O1"],"readinessScore":1},
    {"id":"SEC_004","fromStatus":"Emerging","toStatus":"Developing","lens":"People Experience & Culture","category":"Engagement","action":"Conduct initial engagement activities to understand stakeholder perspectives and expectations.","outcomeIds":["SEC_O1","SEC_O2"],"readinessScore":1},
    {"id":"SEC_005","fromStatus":"Emerging","toStatus":"Developing","lens":"People Experience & Culture","category":"Analysis & Insight","action":"Identify stakeholder concerns, opportunities, preferences and communication needs.","outcomeIds":["SEC_O1","SEC_O2"],"readinessScore":1},
    {"id":"SEC_006","fromStatus":"Emerging","toStatus":"Developing","lens":"Strategic Direction & Leadership","category":"Design","action":"Develop an initial stakeholder engagement and communications approach.","outcomeIds":["SEC_O2"],"readinessScore":1},
    {"id":"SEC_007","fromStatus":"Emerging","toStatus":"Developing","lens":"Strategic Direction & Leadership","category":"Design","action":"Define communication objectives, engagement objectives and desired outcomes.","outcomeIds":["SEC_O2"],"readinessScore":1},
    {"id":"SEC_008","fromStatus":"Emerging","toStatus":"Developing","lens":"Strategic Direction & Leadership","category":"Communication","action":"Develop key messages that explain the change consistently and appropriately.","outcomeIds":["SEC_O2"],"readinessScore":1},
    {"id":"SEC_009","fromStatus":"Emerging","toStatus":"Developing","lens":"Strategic Direction & Leadership","category":"Dependency Management","action":"Identify dependencies between engagement activity and other change workstreams.","outcomeIds":["SEC_O2"],"readinessScore":1},
    {"id":"SEC_010","fromStatus":"Emerging","toStatus":"Developing","lens":"Strategic Direction & Leadership","category":"Governance","action":"Agree sponsorship and accountability for stakeholder engagement and communications activities.","outcomeIds":["SEC_O2"],"readinessScore":1},
    {"id":"SEC_011","fromStatus":"Developing","toStatus":"Embedding","lens":"People Experience & Culture","category":"Communication","action":"Implement targeted communications tailored to different stakeholder groups.","outcomeIds":["SEC_O2"],"readinessScore":2},
    {"id":"SEC_012","fromStatus":"Developing","toStatus":"Embedding","lens":"People Experience & Culture","category":"Engagement","action":"Implement stakeholder engagement activities using appropriate channels and methods.","outcomeIds":["SEC_O2"],"readinessScore":2},
    {"id":"SEC_013","fromStatus":"Developing","toStatus":"Embedding","lens":"People Experience & Culture","category":"Engagement","action":"Provide opportunities for stakeholders to participate, contribute and influence aspects of the change.","outcomeIds":["SEC_O2"],"readinessScore":2},
    {"id":"SEC_014","fromStatus":"Developing","toStatus":"Embedding","lens":"People Experience & Culture","category":"Communication","action":"Ensure communications remain timely, relevant and aligned to programme developments.","outcomeIds":["SEC_O2"],"readinessScore":2},
    {"id":"SEC_015","fromStatus":"Developing","toStatus":"Embedding","lens":"People Experience & Culture","category":"Measurement & Evaluation","action":"Establish mechanisms for gathering stakeholder feedback and engagement insight.","outcomeIds":["SEC_O2","SEC_O3"],"readinessScore":2},
    {"id":"SEC_016","fromStatus":"Developing","toStatus":"Embedding","lens":"Strategic Direction & Leadership","category":"Governance","action":"Review stakeholder engagement progress through governance mechanisms.","outcomeIds":["SEC_O3"],"readinessScore":2},
    {"id":"SEC_017","fromStatus":"Developing","toStatus":"Embedding","lens":"Strategic Direction & Leadership","category":"Measurement & Evaluation","action":"Define measures to assess communication reach, engagement levels and stakeholder understanding.","outcomeIds":["SEC_O3"],"readinessScore":2},
    {"id":"SEC_018","fromStatus":"Developing","toStatus":"Embedding","lens":"Strategic Direction & Leadership","category":"Dependency Management","action":"Coordinate engagement activities with communications, learning, readiness and adoption activities.","outcomeIds":["SEC_O3"],"readinessScore":2},
    {"id":"SEC_019","fromStatus":"Developing","toStatus":"Embedding","lens":"Strategic Direction & Leadership","category":"Design","action":"Develop a detailed stakeholder engagement and communications plan.","outcomeIds":["SEC_O2","SEC_O3"],"readinessScore":2},
    {"id":"SEC_020","fromStatus":"Developing","toStatus":"Embedding","lens":"Strategic Direction & Leadership","category":"Communication","action":"Equip sponsors, managers and change agents with communication materials and engagement guidance.","outcomeIds":["SEC_O2"],"readinessScore":2},
    {"id":"SEC_021","fromStatus":"Embedding","toStatus":"Adopted","lens":"People Experience & Culture","category":"Measurement & Evaluation","action":"Monitor stakeholder engagement levels, sentiment and communication effectiveness.","outcomeIds":["SEC_O3"],"readinessScore":3},
    {"id":"SEC_022","fromStatus":"Embedding","toStatus":"Adopted","lens":"People Experience & Culture","category":"Engagement","action":"Respond to stakeholder concerns, questions and emerging issues in a timely manner.","outcomeIds":["SEC_O3"],"readinessScore":3},
    {"id":"SEC_023","fromStatus":"Embedding","toStatus":"Adopted","lens":"People Experience & Culture","category":"Communication","action":"Adapt communications using stakeholder feedback and implementation experience.","outcomeIds":["SEC_O3"],"readinessScore":3},
    {"id":"SEC_024","fromStatus":"Embedding","toStatus":"Adopted","lens":"People Experience & Culture","category":"Engagement","action":"Use stakeholder representatives, champions and networks to strengthen engagement activity.","outcomeIds":["SEC_O3"],"readinessScore":3},
    {"id":"SEC_025","fromStatus":"Embedding","toStatus":"Adopted","lens":"People Experience & Culture","category":"Measurement & Evaluation","action":"Assess stakeholder understanding, involvement and support for the change.","outcomeIds":["SEC_O3"],"readinessScore":3},
    {"id":"SEC_026","fromStatus":"Embedding","toStatus":"Adopted","lens":"Strategic Direction & Leadership","category":"Governance","action":"Review engagement effectiveness and communication performance through governance forums.","outcomeIds":["SEC_O3"],"readinessScore":3},
    {"id":"SEC_027","fromStatus":"Embedding","toStatus":"Adopted","lens":"Strategic Direction & Leadership","category":"Design","action":"Refine engagement and communication approaches using evidence, insight and lessons learned.","outcomeIds":["SEC_O3"],"readinessScore":3},
    {"id":"SEC_028","fromStatus":"Embedding","toStatus":"Adopted","lens":"Strategic Direction & Leadership","category":"Dependency Management","action":"Align engagement activities with implementation, adoption and readiness priorities.","outcomeIds":["SEC_O3"],"readinessScore":3},
    {"id":"SEC_029","fromStatus":"Embedding","toStatus":"Adopted","lens":"Strategic Direction & Leadership","category":"Measurement & Evaluation","action":"Use engagement and communication metrics to inform planning and decision-making.","outcomeIds":["SEC_O3"],"readinessScore":3},
    {"id":"SEC_030","fromStatus":"Embedding","toStatus":"Adopted","lens":"Strategic Direction & Leadership","category":"Communication","action":"Promote key successes, achievements and progress through communication channels.","outcomeIds":["SEC_O3"],"readinessScore":3},
    {"id":"SEC_031","fromStatus":"Adopted","toStatus":"Thriving","lens":"People Experience & Culture","category":"Engagement","action":"Maintain continuous engagement with stakeholders beyond implementation.","outcomeIds":["SEC_O3"],"readinessScore":4},
    {"id":"SEC_032","fromStatus":"Adopted","toStatus":"Thriving","lens":"People Experience & Culture","category":"Communication","action":"Ensure communications continue to support adoption, optimisation and continuous improvement.","outcomeIds":["SEC_O3"],"readinessScore":4},
    {"id":"SEC_033","fromStatus":"Adopted","toStatus":"Thriving","lens":"People Experience & Culture","category":"Measurement & Evaluation","action":"Measure long-term stakeholder confidence, advocacy and engagement.","outcomeIds":["SEC_O3"],"readinessScore":4},
    {"id":"SEC_034","fromStatus":"Adopted","toStatus":"Thriving","lens":"Strategic Direction & Leadership","category":"Design","action":"Use organisational learning to continuously improve engagement and communication approaches.","outcomeIds":["SEC_O3"],"readinessScore":4},
    {"id":"SEC_035","fromStatus":"Adopted","toStatus":"Thriving","lens":"Reinforcement","category":"Reinforcement","action":"Embed effective engagement and communication practices into organisational change standards.","outcomeIds":["SEC_O3"],"readinessScore":4}
  ]
}
`,ns={componentId:"stakeholder",actionPrefix:"stakeholder-action",outcomePrefix:"stakeholder:outcome",fallbackOutcomes:[{id:"stakeholder:outcome:o1",text:"Stakeholders have been identified, analysed and prioritised"},{id:"stakeholder:outcome:o2",text:"Stakeholders are actively engaged and informed"},{id:"stakeholder:outcome:o3",text:"Engagement and communications support successful adoption"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Reinforcement:"People Experience and Culture"}},Xo=Ae(Jo,ns);function Qo(n){return _e(n,ns,Xo)}const Zo=`{
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
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Governance",
      "action": "Identify future operational owners for the change, associated processes and ongoing outcomes.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_002",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Strategic Direction & Leadership",
      "category": "Analysis & Insight",
      "action": "Identify activities, responsibilities and controls that will need to transfer into business-as-usual management.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_003",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Analysis & Insight",
      "action": "Assess organisational readiness to assume ownership of the change.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_004",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Identify dependencies that must be addressed before full transfer can occur.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_005",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Develop an initial transition and BAU transfer approach.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_006",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Engage future operational owners to clarify expectations, responsibilities and support requirements.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_007",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Analysis & Insight",
      "action": "Identify capability, resource and knowledge gaps that could affect transition.",
      "outcomeIds": [
        "BAU_O1",
        "BAU_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_008",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "People Experience & Culture",
      "category": "Communication",
      "action": "Communicate expectations regarding future ownership and sustainment responsibilities.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_009",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Governance",
      "category": "Governance",
      "action": "Define future governance arrangements for post-implementation management.",
      "outcomeIds": [
        "BAU_O1"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_010",
      "fromStatus": "Emerging",
      "toStatus": "Developing",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Identify operational measures that will be used after programme closure.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 1
    },
    {
      "id": "BAU_011",
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
      "id": "BAU_012",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Design",
      "action": "Develop a detailed transition-to-BAU plan.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BAU_013",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Dependency Management",
      "action": "Plan completion of outstanding dependencies required for transition.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BAU_014",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Planning & Risk",
      "category": "Risk Management",
      "action": "Identify and manage risks associated with operational handover and programme closure.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BAU_015",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Governance",
      "category": "Governance",
      "action": "Define exit criteria and readiness criteria for transition to BAU.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BAU_016",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Prepare operational teams to manage and support the change without programme intervention.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BAU_017",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Skills & Behaviour",
      "category": "Training & Learning",
      "action": "Transfer operational knowledge, guidance and support resources to BAU teams.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BAU_018",
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
      "id": "BAU_019",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Measurement & Evaluation",
      "category": "Testing & Validation",
      "action": "Validate that operational teams can manage and support the change independently.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BAU_020",
      "fromStatus": "Developing",
      "toStatus": "Embedding",
      "lens": "Governance",
      "category": "Governance",
      "action": "Review transition progress through governance and assurance processes.",
      "outcomeIds": [
        "BAU_O2"
      ],
      "readinessScore": 2
    },
    {
      "id": "BAU_021",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Governance",
      "category": "Governance",
      "action": "Transfer operational governance responsibilities from programme structures to BAU structures.",
      "outcomeIds": [
        "BAU_O2",
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_022",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Implementation",
      "category": "Implementation",
      "action": "Complete formal handover of ownership, controls and reporting arrangements.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_023",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Monitor operational ownership and effectiveness following handover.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_024",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Risk Management",
      "category": "Risk Management",
      "action": "Monitor transition risks and address issues emerging after handover.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_025",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "People Experience & Culture",
      "category": "Engagement",
      "action": "Gather feedback from operational owners regarding transition effectiveness.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_026",
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
      "id": "BAU_027",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Review benefits, adoption and performance measures under operational ownership.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_028",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Design",
      "category": "Design",
      "action": "Refine BAU operating arrangements using post-handover experience.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_029",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Dependency Management",
      "category": "Dependency Management",
      "action": "Close, transfer or manage remaining programme dependencies.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_030",
      "fromStatus": "Embedding",
      "toStatus": "Adopted",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Support operational leaders in sustaining desired behaviours and outcomes.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 3
    },
    {
      "id": "BAU_031",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Governance",
      "category": "Governance",
      "action": "Embed ownership of change outcomes within routine operational governance.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BAU_032",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Measurement & Evaluation",
      "category": "Measurement & Evaluation",
      "action": "Monitor long-term operational performance, benefits and sustainment outcomes.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BAU_033",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Implementation",
      "category": "Implementation",
      "action": "Ensure the change is managed entirely through business-as-usual operational processes.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BAU_034",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Design",
      "category": "Design",
      "action": "Use operational learning to improve future transition-to-BAU approaches.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 4
    },
    {
      "id": "BAU_035",
      "fromStatus": "Adopted",
      "toStatus": "Thriving",
      "lens": "Reinforcement",
      "category": "Reinforcement",
      "action": "Promote a culture where change ownership naturally transitions into operational management.",
      "outcomeIds": [
        "BAU_O3"
      ],
      "readinessScore": 4
    }
  ]
}
`,ts={componentId:"transfer_bau",actionPrefix:"transfer-bau-action",outcomePrefix:"transfer-bau:outcome",fallbackOutcomes:[{id:"transfer-bau:outcome:o1",text:"Operational ownership and accountability have been established"},{id:"transfer-bau:outcome:o2",text:"Business-as-usual capabilities and support arrangements are in place"},{id:"transfer-bau:outcome:o3",text:"The change is fully embedded within normal operational management"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Process and Sustainment":"Process and Sustainment","Planning and Risk":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Skills and Behaviour":"Process and Sustainment",Governance:"Strategic Direction and Leadership","Measurement and Evaluation":"Process and Sustainment",Implementation:"Process and Sustainment","Risk Management":"Process and Sustainment",Design:"Process and Sustainment","Dependency Management":"Process and Sustainment",Reinforcement:"Process and Sustainment"}},ei=Ae(Zo,ts);function ni(n){return _e(n,ts,ei)}const ti=`{
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
`,ss={componentId:"vision",actionPrefix:"vision-action",outcomePrefix:"vision:outcome",fallbackOutcomes:[{id:"vision:outcome:o1",text:"A compelling future state has been defined"},{id:"vision:outcome:o2",text:"The vision is understood and shared"},{id:"vision:outcome:o3",text:"The vision is visible and guides the change"}]},si=Ae(ti,ss);function ai(n){return _e(n,ss,si)}const ht="nhs-digital-adoption-user-settings",ft="nhs-digital-adoption-report-reminder-dismissed",bt="nhs-digital-adoption-engagement",jn="nhs-digital-adoption-onboarding-seen",xt="Default",oi=5*1024*1024,ii=new Set(["application/json","text/json"]),ri="Unknown user",li=["#005eb8","#003366","#009b8a","#6c28d9","#059669","#dc2626"],ci={name:"",preferences:"",themeColor:"#005eb8",profileImageDataUrl:"",darkMode:!1,colorAccessibilityMode:"standard",phaseFocusMode:"auto",manualPhaseFocus:1},di={xp:0,level:1,checkIns:{},emailDraftOpens:0,highlightLayoutSaves:0,onTimeFinalisations:0,lateFinalisations:0};function ui(n){return{...n,linkedTargets:(n.linkedTargets||[]).map(t=>({componentId:t.componentId,lens:t.lens}))}}function mi(n,t){return`${n}:${t}`}function Xe(n){return Yt(ni(_o(Lo(Do(lo(ho(Ko(Go(Qo(xo(Mo(Co(yo(oo(qo(mo(ai(n))))))))))))))))))}function gi(n){return n.trim()||ri}function pi(n,t,s){var c;const a=fs[n];return((c=a==null?void 0:a[t])==null?void 0:c[s])||Qn[s]||Qn[0]}function hi(n=new Date){const t=String(n.getMonth()+1).padStart(2,"0");return`${n.getFullYear()}-${t}`}function fi(n=new Date){return new Date(n.getFullYear(),n.getMonth()-1,1).toLocaleString("en-GB",{month:"short",year:"numeric"})}function bi(n,t,s){return["Monthly Adoption Reporting Reminder","","Organisation",`${t||"Unconfigured Trust"}${s?` / ${s}`:""}`,"","Action Required",`Please finalise the ${n} adoption month if it has not already been captured.`,"","Attached","Point-in-time JSON report export generated from the latest working draft.","","Next Step","Review, confirm finalisation status, and circulate to the team."].join(`
`)}function xi(n){const t=new TextEncoder().encode(n);let s="";return t.forEach(a=>{s+=String.fromCharCode(a)}),window.btoa(s)}function Si(n,t=76){const s=[];for(let a=0;a<n.length;a+=t)s.push(n.slice(a,a+t));return s.join(`\r
`)}function Ln(n=new Date){return n.toISOString().slice(0,10)}function vi(n=new Date){const t=n.getDate(),s=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();return t>=s-6}function yi(n=new Date){return n.toLocaleString("en-GB",{month:"short",year:"numeric"})}function as(n){return Math.max(1,Math.min(12,Math.floor(n/120)+1))}function nn(n,t){const s=n.xp+t;return{...n,xp:s,level:as(s)}}function wi(n,t){const s=n*30+Math.min(t,20)*4;return s>=170?"S":s>=130?"A":s>=95?"B":s>=60?"C":s>=30?"D":"E"}function Ni(n,t=new Date){let s=0;const a=new Date(t);let c=Ln(a);for(;n[c];)s+=1,a.setDate(a.getDate()-1),c=Ln(a);return s}function Ci(n){const t=window.prompt(`Phase ${n} has changed. Enter delivery readiness grade (${gn.join("/")}).`,"C");if(!t)return null;const s=t.trim().toUpperCase();if(!gn.includes(s))return window.alert(`Invalid competence grade. Use one of ${gn.join(", ")}.`),null;const a=window.prompt(`Enter confidence score for Phase ${n} (${pn.join("-")}, where 1 is low and 5 is very high).`,"3");if(!a)return null;const c=Number(a.trim());return pn.includes(c)?{competence:s,confidence:c}:(window.alert(`Invalid confidence score. Use a number from ${pn.join(" to ")}.`),null)}function Pi(){const n=Fn,t=d.useMemo(()=>[...Ws],[]),[s,a]=d.useState("dashboard"),[c,S]=d.useState(n[0].id),[b,u]=d.useState(()=>typeof window>"u"?!0:window.innerWidth>=1024),[o,E]=d.useState(()=>{var k,z,P,Y,W,se,fe,Ce;const r=Xn.getInstance();r.loadFromWindow();let p={};try{const ie=Je(ut);p=$t(fn(ie))}catch(ie){console.warn("Ignoring invalid persisted adoption data.",ie)}return Xe(Rn({view:"dashboard",orgProfile:(p==null?void 0:p.orgProfile)||((k=r.adoption)==null?void 0:k.orgProfile),currentDraft:(p==null?void 0:p.currentDraft)||((z=r.adoption)==null?void 0:z.currentDraft),objectives:(p==null?void 0:p.objectives)||((P=r.adoption)==null?void 0:P.objectives),suppressedAutoActions:(p==null?void 0:p.suppressedAutoActions)||((Y=r.adoption)==null?void 0:Y.suppressedAutoActions),auditLog:(p==null?void 0:p.auditLog)||((W=r.adoption)==null?void 0:W.auditLog),history:(p==null?void 0:p.history)||((se=r.adoption)==null?void 0:se.history),phaseOverrides:(p==null?void 0:p.phaseOverrides)||((fe=r.adoption)==null?void 0:fe.phaseOverrides),pathwayChecks:(p==null?void 0:p.pathwayChecks)||((Ce=r.adoption)==null?void 0:Ce.pathwayChecks)}))}),[x,l]=d.useState({}),[h,v]=d.useState(""),[w,K]=d.useState(()=>{const r=Je(ht);return{...ci,...r}}),[D,R]=d.useState(()=>{const r=Je(bt);return{...di,...r,level:as((r==null?void 0:r.xp)||0),checkIns:(r==null?void 0:r.checkIns)||{}}}),T=cn.useRef(null),Q=cn.useRef(null),[j,G]=d.useState(""),$=cn.useRef(null),ce=d.useMemo(()=>hi(),[]),ee=d.useMemo(()=>Ln(),[]),[ne,re]=d.useState(()=>Je(ft)||{}),[Z,O]=d.useState(()=>!!Je(jn)),[te,de]=d.useState(()=>!Je(jn)),[_,f]=d.useState(!0),[N,J]=d.useState([]),[xe,g]=d.useState(!1),C=cn.useRef({}),I=d.useCallback(()=>{de(!1),Z||(O(!0),en(jn,!0))},[Z]),L=d.useMemo(()=>{const r=new Date,p=fi(r),k=r.getDate()===1,z=o.history.some(P=>P.monthLabel===p);return{previousMonthLabel:p,isFirstDayOfMonth:k,hasFinalisedPreviousMonth:z,shouldNotify:k&&!z}},[o.history]),[M,be]=d.useState("test@test.com"),[oe,we]=d.useState(""),[ue,De]=d.useState(""),Fe=yi(),Ne=vi(),je=d.useCallback((r,p)=>(o.currentDraft[r]||(o.currentDraft[r]={}),o.currentDraft[r][p]||(o.currentDraft[r][p]=Nn()),o.currentDraft[r][p]),[o]),ae=d.useMemo(()=>{const r=et(o,n);return{...r,nextSteps:r.nextSteps.map(p=>({...p,toolkitLinks:vt(xt,p.componentId,"inputs").slice(0,3)}))}},[o]),Ve=w.phaseFocusMode==="manual"&&w.manualPhaseFocus?w.manualPhaseFocus:ae.currentPhase,Ke=$s(o,r=>kn(r)||n[0],je).sort((r,p)=>{const k=r.action.owner.localeCompare(p.action.owner);return k!==0?k:r.component.localeCompare(p.component)});d.useEffect(()=>{en(ut,o);const r=Xn.getInstance();r.adoption={orgProfile:o.orgProfile,currentDraft:o.currentDraft,objectives:o.objectives,suppressedAutoActions:o.suppressedAutoActions,auditLog:o.auditLog,history:o.history,phaseOverrides:o.phaseOverrides,pathwayChecks:o.pathwayChecks}},[o]),d.useEffect(()=>{en(ht,w)},[w]),d.useEffect(()=>{en(bt,D)},[D]),d.useEffect(()=>{en(ft,ne)},[ne]),d.useEffect(()=>{we(`Action required: finalise ${L.previousMonthLabel} adoption report`),De(bi(L.previousMonthLabel,o.orgProfile.trustName,o.orgProfile.projectName||""))},[L.previousMonthLabel,o.orgProfile.projectName,o.orgProfile.trustName]),d.useEffect(()=>{s==="dashboard"&&T.current&&setTimeout(()=>{var k,z,P;const r=(k=T.current)==null?void 0:k.querySelector("#adoption-radar-chart");if(r){const Y=Ds(o,t,n,je);Jn(r,Y)}const p=(z=T.current)==null?void 0:z.querySelector("#adoption-component-radar-chart");if(p){const Y=Ts(n,je,Ve);Jn(p,Y,{scales:{r:{min:0,max:5,ticks:{display:!0,stepSize:1,backdropColor:"transparent"}}}})}if(o.history.length>0){const Y=(P=T.current)==null?void 0:P.querySelector("#adoption-line-chart");if(Y){const W={labels:o.history.map(se=>se.monthLabel),datasets:[{label:"Adoption Score",data:o.history.map(se=>se.overallPercentage||0),borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",fill:!0,tension:.4}]};ps(Y,W)}}},100)},[s,o,je,t,n,Ve]),d.useEffect(()=>{const r=()=>{u(window.innerWidth>=1024)};return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),d.useEffect(()=>{typeof document<"u"&&(document.documentElement.dataset.nhsThemeMode=w.darkMode?"dark":"light")},[w.darkMode]),d.useEffect(()=>{var p;const r=s==="assessment"?`component:${c}`:`view:${s}`;(p=C.current[r])==null||p.scrollIntoView({block:"nearest",behavior:"smooth"})},[c,s]);const Te=()=>typeof window>"u"?!1:window.innerWidth<1024,Be=d.useCallback(()=>{var r;(r=Q.current)==null||r.scrollTo({top:0,behavior:"auto"})},[]),Me=d.useCallback(r=>{a(p=>p===r?p:(J(k=>[p,...k].slice(0,20)),r)),Te()&&u(!1)},[]),m=r=>{Me(r)},F=d.useCallback(()=>{J(r=>{const[p,...k]=r;return p?(a(p),window.innerWidth<1024&&u(!1),k):(window.location.hash="#/",r)})},[]),H=d.useCallback(r=>{kn(r)&&(S(r),Me("assessment"),Be())},[Me,Be]);d.useEffect(()=>{Be()},[Be,s]);function V(r,p){if(!p.length)return r.auditLog;const k=gi(w.name||""),z=p.map(P=>Fa({actor:k,eventType:P.eventType,entityType:P.entityType,entityId:P.entityId,summary:P.summary,trustName:P.trustName??r.orgProfile.trustName,projectName:P.projectName??r.orgProfile.projectName,componentId:P.componentId,lens:P.lens,reason:P.reason,before:P.before,after:P.after,source:P.source,importedAt:P.importedAt}));return Vn([...r.auditLog||[],...z])}const Se=d.useCallback((r,p,k)=>{E(z=>{var Ce;const P=((Ce=z.currentDraft[r])==null?void 0:Ce[p])||Nn(),Y={...z,currentDraft:{...z.currentDraft,[r]:{...z.currentDraft[r],[p]:It(k)}}},W=[];P.score!==k.score&&W.push({eventType:"entry-score-updated",entityType:"entry",entityId:`${r}:${p}`,summary:`Updated readiness score for ${r} / ${p}: ${P.score} -> ${k.score}`,componentId:r,lens:p,before:{score:P.score},after:{score:k.score},source:"local"}),(P.justification||"")!==(k.justification||"")&&W.push({eventType:"entry-justification-updated",entityType:"entry",entityId:`${r}:${p}`,summary:`Updated justification for ${r} / ${p}`,componentId:r,lens:p,before:{justification:P.justification||""},after:{justification:k.justification||""},source:"local"}),(P.evidence||"")!==(k.evidence||"")&&W.push({eventType:"entry-evidence-updated",entityType:"entry",entityId:`${r}:${p}`,summary:`Updated evidence for ${r} / ${p}`,componentId:r,lens:p,before:{evidence:P.evidence||""},after:{evidence:k.evidence||""},source:"local"});const se=new Map(P.actions.map(ie=>[ie.id,ie]));return k.actions.forEach(ie=>{const Ee=se.get(ie.id);if(!Ee){W.push({eventType:"action-created",entityType:"action",entityId:ie.id,summary:`Created action in ${r} / ${p}`,componentId:r,lens:p,after:{text:ie.text,status:ie.status,owner:ie.owner,actionType:ie.actionType},source:"local"});return}const ln=JSON.stringify({text:Ee.text,status:Ee.status,owner:Ee.owner,actionType:Ee.actionType,notes:Ee.notes,dueDate:Ee.dueDate,startDate:Ee.startDate,evidence:Ee.evidence}),qe=JSON.stringify({text:ie.text,status:ie.status,owner:ie.owner,actionType:ie.actionType,notes:ie.notes,dueDate:ie.dueDate,startDate:ie.startDate,evidence:ie.evidence});ln!==qe&&W.push({eventType:"action-updated",entityType:"action",entityId:ie.id,summary:`Updated action in ${r} / ${p}`,componentId:r,lens:p,before:{text:Ee.text,status:Ee.status,owner:Ee.owner,actionType:Ee.actionType},after:{text:ie.text,status:ie.status,owner:ie.owner,actionType:ie.actionType},source:"local"})}),{...Xe(Y),auditLog:V(z,W)}})},[V]),pe=d.useCallback((r,p)=>{E(k=>{const z=k.objectives[r]||[],P={...k,objectives:{...k.objectives,[r]:p}};return JSON.stringify(z)!==JSON.stringify(p)?{...P,auditLog:V(k,[{eventType:"objectives-updated",entityType:"objective",entityId:r,summary:`Updated component outcomes for ${r}`,componentId:r,before:{objectiveCount:z.length},after:{objectiveCount:p.length},source:"local"}])}:P})},[V]),me=d.useCallback(r=>{const p=hs(o.orgProfile);if(p.isValid)return!0;const k=p.errors.map(z=>`- ${z.message}`).join(`
`);return window.confirm(`${r} has CST warnings:

${k}

Continue anyway?`)},[o.orgProfile]),le=d.useCallback(r=>{G(r)},[]),i=d.useCallback(()=>{if(!me("Export JSON"))return;const p=mt(o);mn(`adoption-assessment-${(o.orgProfile.trustName||"export").replace(/\s+/g,"_")}.json`,JSON.stringify(p,null,2),"application/json"),le("Assessment export downloaded.")},[le,me,o]),y=d.useCallback(()=>{var r;(r=$.current)==null||r.click()},[]),A=d.useCallback(async r=>{var P;const p=(P=r.target.files)==null?void 0:P[0];if(!p)return;const k=p.name.toLowerCase().endsWith(".json"),z=!p.type||ii.has(p.type);if(!k||!z){le("Import failed. Please choose a valid JSON file."),window.alert("Import failed. Please choose a valid JSON file."),r.target.value="";return}if(p.size>oi){le("Import failed. The selected file is larger than 5 MB."),window.alert("Import failed. The selected file is larger than 5 MB."),r.target.value="";return}try{const Y=await p.text(),W=fn(JSON.parse(Y));E(se=>{const fe=Xe(gt(W,se));return{...fe,auditLog:V(fe,[{eventType:"data-imported",entityType:"system",summary:`Imported assessment data from ${p.name}`,after:{fileName:p.name},source:"local"}])}}),a("dashboard"),le("Assessment import complete. Dashboard updated.")}catch{le("Import failed. Please verify the file contents."),window.alert("Unable to import adoption assessment. Please verify the file contents.")}finally{r.target.value=""}},[le,V]),X=d.useCallback(r=>{const p=!!(r!=null&&r.replaceExisting);if(!Ne){window.alert("Finalise Month is available during the final week of each month.");return}if(!me("Finalise Month"))return;const z=o.history.length>0?et({...o,currentDraft:o.history[o.history.length-1].data},n).currentPhase:1;if(ae.currentPhase>z){const Y=Ci(ae.currentPhase);if(!Y){window.alert("Phase progression cancelled. Confidence and competence self-assessment is required when readiness phase changes.");return}const W=[];if(n.filter(se=>se.phase<ae.currentPhase).forEach(se=>{se.lenses.forEach(fe=>{var ie,Ee;const Ce=(ie=o.currentDraft[se.id])==null?void 0:ie[fe];(!Ce||Ce.score<=0||!((Ee=Ce.justification)!=null&&Ee.trim()))&&W.push(`${se.label} / ${fe}`)})}),W.length>0){const se=window.prompt(`You're progressing from Phase ${z} to Phase ${ae.currentPhase}, but ${W.length} item(s) are incomplete. Please provide a justification.`);if(!se||!se.trim()){window.alert("Phase progression cancelled. A justification is required when prior phase items are missing.");return}E(fe=>({...{...fe,phaseOverrides:{...fe.phaseOverrides,[`phase-progression-${Date.now()}`]:se.trim()},orgProfile:{...fe.orgProfile,cst:{...fe.orgProfile.cst,phaseCapability:{...fe.orgProfile.cst.phaseCapability,[ae.currentPhase]:{...Y,assessedAt:new Date().toISOString(),reason:"phase-change"}}}}},auditLog:V(fe,[{eventType:"profile-updated",entityType:"profile",summary:`Updated phase capability for phase ${ae.currentPhase}`,after:{phase:ae.currentPhase,competence:Y.competence,confidence:Y.confidence,rationale:se.trim()},source:"local"}])}))}else E(se=>({...{...se,orgProfile:{...se.orgProfile,cst:{...se.orgProfile.cst,phaseCapability:{...se.orgProfile.cst.phaseCapability,[ae.currentPhase]:{...Y,assessedAt:new Date().toISOString(),reason:"phase-change"}}}}},auditLog:V(se,[{eventType:"profile-updated",entityType:"profile",summary:`Updated phase capability for phase ${ae.currentPhase}`,after:{phase:ae.currentPhase,competence:Y.competence,confidence:Y.confidence},source:"local"}])}))}const P=pt(o.currentDraft,ae.overallPct);E(Y=>{const W=p?Y.history.map(fe=>fe.monthLabel===P.monthLabel?P:fe):[...Y.history,P];return{...{...Y,history:W},auditLog:V(Y,[{eventType:"month-finalized",entityType:"history",entityId:P.monthLabel,summary:`${p?"Re-finalized":"Finalized"} monthly snapshot for ${P.monthLabel}`,after:{monthLabel:P.monthLabel,overallPercentage:P.overallPercentage},source:"local"}])}}),R(Y=>nn(Y,25)),a("dashboard")},[V,n,me,Ne,ae.currentPhase,ae.overallPct,o,o.currentDraft,o.history]),q=d.useCallback(()=>{if(!me("Finalise Prior Month"))return;const p=L.previousMonthLabel;if(o.history.some(W=>W.monthLabel===p)){window.alert(`${p} has already been finalised.`);return}const z=new Date;z.setMonth(z.getMonth()-1);const P=pt(o.currentDraft,ae.overallPct,z);E(W=>({...{...W,history:[...W.history,P]},auditLog:V(W,[{eventType:"prior-month-finalized",entityType:"history",entityId:P.monthLabel,summary:`Finalized prior month snapshot for ${P.monthLabel}`,after:{monthLabel:P.monthLabel,overallPercentage:P.overallPercentage},source:"local"}])}));const Y=new Date().getDate()===1;R(W=>nn({...W,onTimeFinalisations:W.onTimeFinalisations+(Y?1:0),lateFinalisations:W.lateFinalisations+(Y?0:1)},Y?45:20))},[V,me,ae.overallPct,L.previousMonthLabel,o.currentDraft,o.history]),ye=d.useCallback(async()=>{try{const r=await fetch("test-data/adoption-sample.json");if(!r.ok)throw new Error(`Failed to load sample data: ${r.status}`);const p=fn(await r.json());E(k=>{const z=Xe(gt(p,k));return{...z,auditLog:V(z,[{eventType:"example-data-loaded",entityType:"system",summary:"Loaded example assessment data",source:"local"}])}}),a("dashboard"),le("Example assessment data loaded."),Te()&&u(!1)}catch(r){console.error(r),le("Unable to load example data right now."),window.alert("Unable to load example data right now. Please try again.")}},[le,V]),ve=d.useCallback(()=>{if(!window.confirm("Warning: this will reset all assessment data (organisation profile, scores, actions, and history). If you are worried, please export your data first. Continue?"))return;const p=Xe(Rn());E(p),l({}),a("dashboard"),le("Assessment data has been reset."),Te()&&u(!1)},[le]),ge=d.useCallback(()=>({generatedAt:new Date().toISOString(),targetMonth:L.previousMonthLabel,finalisedPriorMonth:L.hasFinalisedPreviousMonth,report:mt(o)}),[L.hasFinalisedPreviousMonth,L.previousMonthLabel,o]),Oe=d.useCallback(()=>`adoption-point-in-time-${L.previousMonthLabel.toLowerCase().replace(/\s+/g,"-")}.json`,[L.previousMonthLabel]),$e=d.useCallback(()=>{const r=Oe();mn(r,JSON.stringify(ge(),null,2),"application/json")},[Oe,ge]),xn=d.useCallback(()=>{const r=M.trim()||"test@test.com",p=Oe(),k=`${ue}

Attachment: ${p}`,z=`mailto:${r}?subject=${encodeURIComponent(oe)}&body=${encodeURIComponent(k)}`;R(P=>nn({...P,emailDraftOpens:P.emailDraftOpens+1},8)),window.location.href=z},[Oe,ue,oe,M]),sn=d.useCallback(()=>{R(r=>r.checkIns[ee]?r:nn({...r,checkIns:{...r.checkIns,[ee]:!0}},10))},[ee]),B=d.useCallback(()=>{R(r=>nn({...r,highlightLayoutSaves:r.highlightLayoutSaves+1},15))},[]),he=d.useCallback(()=>{const r=M.trim()||"test@test.com",p=Oe(),k=JSON.stringify(ge(),null,2),z=Si(xi(k)),P=`----nhs-adoption-reminder-${Date.now()}`,Y=[`To: ${r}`,`Subject: ${oe}`,"MIME-Version: 1.0",`Content-Type: multipart/mixed; boundary="${P}"`,"",`--${P}`,'Content-Type: text/plain; charset="UTF-8"',"Content-Transfer-Encoding: 8bit","",ue,"",`--${P}`,`Content-Type: application/json; name="${p}"`,"Content-Transfer-Encoding: base64",`Content-Disposition: attachment; filename="${p}"`,"",z,`--${P}--`,""].join(`\r
`),W=L.previousMonthLabel.toLowerCase().replace(/\s+/g,"-");mn(`adoption-reminder-${W}.eml`,Y,"message/rfc822")},[Oe,ge,ue,oe,M,L.previousMonthLabel]),Le=d.useCallback(()=>{re(r=>({...r,[ce]:!0}))},[ce]),He=L.shouldNotify&&!ne[ce],Ge=d.useMemo(()=>o.history.find(r=>r.monthLabel===Fe)||null,[Fe,o.history]),ze=Ne,Sn=ze?"Review and finalise monthly snapshot":"Finalise Month unlocks from the final week of each month.",vn=ze?`${Ot} h-9 px-3 py-0 shadow-[0_3px_0_rgba(0,0,0,0.2)]`:"h-9 px-3 py-0 rounded-md border border-slate-300 bg-slate-200 text-slate-500 cursor-not-allowed",on=ze?{backgroundColor:w.themeColor}:void 0,Pe=d.useMemo(()=>{const r=Ge||(o.history.length>0?o.history[o.history.length-1]:null),p=(r==null?void 0:r.overallPercentage)||0,k=ae.overallPct-p;return{currentMonthLabel:Fe,baselineLabel:(r==null?void 0:r.monthLabel)||"No previous snapshot",baselineOverall:p,deltaOverall:k,assessedCount:ae.assessedCount,totalActions:ae.totalActions,completedActions:ae.completedActions}},[Fe,Ge,ae.assessedCount,ae.completedActions,ae.overallPct,ae.totalActions,o.history]),Ye=D.level>=3,yn=d.useMemo(()=>wi(D.onTimeFinalisations,D.emailDraftOpens),[D.emailDraftOpens,D.onTimeFinalisations]),Hn=!!D.checkIns[ee],wn=d.useMemo(()=>Ni(D.checkIns),[D.checkIns]),os=d.useMemo(()=>[{id:"streak-3",name:"Steady Cadence",description:"Check in for 3 consecutive days.",unlocked:wn>=3,progress:`${Math.min(wn,3)}/3`},{id:"first-ontime",name:"On-Time Closer",description:"Finalise a prior month on time.",unlocked:D.onTimeFinalisations>=1,progress:`${Math.min(D.onTimeFinalisations,1)}/1`},{id:"first-save",name:"Story Builder",description:"Save your first highlight layout.",unlocked:D.highlightLayoutSaves>=1,progress:`${Math.min(D.highlightLayoutSaves,1)}/1`}],[wn,D.highlightLayoutSaves,D.onTimeFinalisations]),is=d.useCallback(r=>{if(!Ye&&!li.includes(r.themeColor)){K(p=>({...r,themeColor:p.themeColor}));return}K(r)},[Ye]),rs=r=>{let p=0,k=0,z=0,P=0;return r.lenses.forEach(Y=>{var fe,Ce;const W=(fe=o.currentDraft[r.id])==null?void 0:fe[Y];W&&W.score>0&&(p++,(Ce=W.justification)!=null&&Ce.trim()&&k++);const se=(W==null?void 0:W.actions)||[];z+=se.length,P+=se.filter(ie=>St(ie.status)).length}),p===0?{icon:"◯",color:"text-blue-100",label:"Not Started"}:p>k?{icon:"⚠",color:"text-red-300",label:"Missing Justification"}:p<r.lenses.length?{icon:"◐",color:"text-amber-300",label:"In Progress"}:z<=0||P<z?{icon:"◐",color:"text-amber-300",label:"In Progress"}:{icon:"✓",color:"text-green-300",label:"Completed"}},Wn=o.orgProfile.trustName||"Unconfigured Trust",Kn=o.orgProfile.projectName||"Unnamed Project",rn=Ct[o.orgProfile.cst.pathway],ls=rn.split(" - ")[0]||rn;return e.jsxs("div",{className:`flex h-screen overflow-hidden ${w.darkMode?"bg-slate-900 text-slate-100":"bg-slate-50 text-slate-800"}`,children:[e.jsx("div",{role:"status","aria-live":"polite",className:"sr-only",children:j}),e.jsx("input",{ref:$,type:"file",accept:"application/json",className:"hidden",onChange:A}),b&&e.jsx("div",{className:"fixed inset-0 z-10 bg-slate-900/35 backdrop-blur-[1px] lg:hidden",onClick:()=>u(!1)}),e.jsxs("div",{className:`fixed inset-y-0 left-0 z-20 bg-[#005eb8] text-white flex flex-col shadow-xl overflow-hidden transition-all duration-300 ease-out lg:static lg:translate-x-0 ${b?"w-72 translate-x-0":"w-0 -translate-x-full lg:w-0"}`,style:{backgroundColor:w.themeColor},children:[e.jsxs("div",{className:"p-6 border-b border-blue-700",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold tracking-tight",children:"NHS Digital Adoption"}),e.jsxs("p",{className:"text-blue-200 text-xs mt-1 flex justify-between items-center",children:[e.jsx("span",{children:"Readiness Tracking Tool"}),e.jsx("span",{className:"opacity-80 font-medium",children:"V6.6"})]})]}),w.profileImageDataUrl?e.jsx("img",{src:w.profileImageDataUrl,alt:"Profile",className:"h-10 w-10 rounded-full border-2 border-blue-200 object-cover"}):null]}),e.jsxs("div",{className:"mt-3 rounded-md bg-blue-700 p-2 text-xs",children:[e.jsxs("div",{className:"font-semibold text-blue-100",children:["Level ",D.level," · Grade ",yn]}),e.jsxs("div",{className:"text-blue-200",children:["XP ",D.xp," · Layout saves ",D.highlightLayoutSaves]})]})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto py-4",children:[e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Intro"}),e.jsx("nav",{className:"space-y-1 mb-4",children:["introduction","cm-guide","project-details"].map(r=>e.jsx("button",{ref:p=>{C.current[`view:${r}`]=p},onClick:()=>m(r),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${s===r?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:r==="introduction"?"Introduction":r==="project-details"?"CST Personalisation":"Adoption Engine Onboarding"},r))}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Overview"}),e.jsx("nav",{className:"space-y-1 mb-4",children:["dashboard","action-plan","roadmap-view"].map(r=>e.jsx("button",{ref:p=>{C.current[`view:${r}`]=p},onClick:()=>m(r),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${s===r?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:r==="dashboard"?"Dashboard":r==="action-plan"?"Action Tracker":"Roadmap View"},r))}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Tools"}),e.jsx("nav",{className:"space-y-1 mb-8",children:["highlight-builder","audit-log","settings"].map(r=>e.jsx("button",{ref:p=>{C.current[`view:${r}`]=p},onClick:()=>m(r),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${s===r?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:r==="highlight-builder"?"Highlight Builder":r==="audit-log"?"Audit Log":"Settings & Profile"},r))}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Change Components"}),e.jsx("nav",{className:"space-y-1",children:n.map(r=>{const p=s==="assessment"&&c===r.id,k=rs(r);return e.jsxs("button",{ref:z=>{C.current[`component:${r.id}`]=z},onClick:()=>{H(r.id)},className:`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${p?"bg-white font-medium text-[#005eb8]":`hover:bg-blue-800 ${k.color}`}`,children:[e.jsx("span",{className:"truncate pr-2",children:bs(r.label)}),e.jsx("span",{className:"text-xs flex-shrink-0",title:k.label,"aria-label":k.label,children:k.icon})]},r.id)})}),e.jsxs("div",{className:"mt-8 px-4 pb-4 border-t border-blue-800 pt-6",children:[e.jsx("div",{className:"text-[10px] font-semibold text-blue-300 uppercase tracking-wider mb-3",children:"Status Legend"}),e.jsxs("div",{className:"space-y-2 text-xs text-blue-200",children:[e.jsx("div",{children:"◯ Not Started"}),e.jsx("div",{children:"◐ In Progress"}),e.jsx("div",{children:"⚠ Missing Justification"}),e.jsx("div",{children:"✓ Completed"})]})]})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col h-screen overflow-hidden",children:[e.jsx("header",{className:`${w.darkMode?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} border-b px-3 py-2 sm:px-6 shrink-0 z-10 ${s==="introduction"?"":"shadow-sm"}`,style:{borderTop:`3px solid ${w.themeColor}`},children:e.jsxs("div",{className:"flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{className:"min-w-0 flex items-start gap-2 sm:gap-3",children:[e.jsxs("button",{onClick:()=>u(r=>!r),className:"inline-flex h-9 items-center justify-center px-3 text-white rounded-md font-semibold transition-colors shadow-sm","aria-label":b?"Collapse side navigation":"Expand side navigation",title:b?"Collapse side navigation":"Expand side navigation",style:{backgroundColor:w.themeColor},children:[e.jsx("span",{"aria-hidden":"true",className:"text-lg leading-none",children:b?"«":"»"}),e.jsx("span",{className:"sr-only",children:b?"Collapse side navigation":"Expand side navigation"})]}),e.jsx("button",{onClick:F,disabled:N.length===0,title:N.length===0?"No previous in-app page":"Back to previous page",className:`h-9 text-sm px-3 rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${w.darkMode?"text-slate-100 hover:bg-slate-700":"text-slate-600 hover:bg-slate-100"}`,children:"← Back"}),e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-1 text-sm",children:[e.jsx("span",{className:`truncate font-semibold ${w.darkMode?"text-slate-100":"text-slate-700"}`,title:Wn,children:Wn}),e.jsx("span",{className:`${w.darkMode?"text-slate-300":"text-slate-400"}`,children:"/"}),e.jsx("span",{className:`truncate ${w.darkMode?"text-slate-100":"text-slate-600"}`,title:Kn,children:Kn})]}),e.jsxs("div",{className:"mt-1 flex min-w-0 items-center gap-1.5",children:[e.jsxs("span",{className:`truncate rounded-full px-2 py-1 text-[11px] font-semibold ${w.darkMode?"bg-slate-700 text-slate-100":"bg-slate-100 text-slate-600"}`,title:`${o.orgProfile.cst.type.toUpperCase()} · ${rn}`,children:[o.orgProfile.cst.type.toUpperCase()," ·"," ",e.jsx("span",{className:"sm:hidden",children:ls}),e.jsx("span",{className:"hidden sm:inline",children:rn})]}),e.jsxs("span",{className:"inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-800",title:"Auto-save on",children:[e.jsx("span",{className:"inline-flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white","aria-hidden":"true",children:"✓"}),e.jsx("span",{className:"sr-only sm:not-sr-only sm:ml-1",children:"Auto-save on"})]})]})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 lg:justify-end",children:[e.jsx("button",{onClick:()=>de(!0),"aria-label":"Show introduction",title:"Show introduction",className:`text-sm w-9 h-9 flex items-center justify-center bg-white text-[#425563] border border-[#768692] hover:bg-[#f0f4f5] rounded-full font-semibold transition-colors ${kt}`,children:"?"}),e.jsx("button",{type:"button",onClick:()=>{window.location.hash="#/"},"aria-label":"Go to home page",title:"Go to home page",className:`${hn} h-9 w-16 px-6 py-0 inline-flex items-center justify-center`,children:"Home"}),e.jsx("button",{onClick:y,className:`${hn} h-9 px-3 py-0`,children:"Import"}),e.jsxs("button",{onClick:i,className:`${hn} h-9 px-3 py-0`,children:[e.jsx("span",{className:"sm:hidden",children:"Export"}),e.jsx("span",{className:"hidden sm:inline",children:"Export JSON"})]}),e.jsx("span",{className:"inline-flex",title:Sn,children:e.jsxs("button",{onClick:()=>g(!0),disabled:!ze,"aria-label":"Finalise Month",className:vn,style:on,children:[e.jsx("span",{className:"sm:hidden",children:"Finalise"}),e.jsx("span",{className:"hidden sm:inline",children:"Finalise Month"})]})})]})]})}),e.jsxs("main",{ref:Q,className:"flex-1 overflow-y-auto p-8",children:[s==="dashboard"&&_?e.jsxs("section",{className:`${w.darkMode?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-6 rounded-xl border p-4 shadow-sm`,children:[e.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${w.darkMode?"text-slate-300":"text-slate-500"}`,children:"Engagement"}),e.jsxs("p",{className:`text-sm mt-1 ${w.darkMode?"text-slate-100":"text-slate-700"}`,children:["Level ",D.level," · Grade ",yn," · On-time finalisations"," ",D.onTimeFinalisations," · Email opens ",D.emailDraftOpens]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:sn,disabled:Hn,className:"rounded-md px-3 py-2 text-sm font-semibold text-white disabled:opacity-60",style:{backgroundColor:w.themeColor},children:Hn?"Checked In Today":"Daily Check-In (+10 XP)"}),e.jsx("button",{type:"button",onClick:()=>f(!1),className:`${w.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-2 text-sm font-medium`,"aria-label":"Dismiss engagement card",children:"Dismiss"})]})]}),e.jsx("div",{className:"mt-4 grid gap-3 md:grid-cols-3",children:os.map(r=>e.jsxs("div",{className:`rounded-lg border p-3 ${r.unlocked?"border-green-200 bg-green-50":w.darkMode?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${w.darkMode?"text-slate-100":"text-slate-800"}`,children:r.name}),e.jsx("span",{className:"text-xs font-bold",children:r.unlocked?"Unlocked":r.progress})]}),e.jsx("p",{className:`mt-1 text-xs ${w.darkMode?"text-slate-300":"text-slate-600"}`,children:r.description})]},r.id))})]}):null,He&&e.jsxs("section",{className:`${w.darkMode?"border-amber-700 bg-slate-800":"border-amber-300 bg-amber-50"} mb-8 rounded-xl border p-5 shadow-sm`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider text-amber-700",children:"First Day Reminder"}),e.jsxs("h3",{className:"text-lg font-bold text-amber-900 mt-1",children:["Submit prior month report for ",L.previousMonthLabel]}),e.jsxs("p",{className:"text-sm text-amber-800 mt-2",children:["Please prompt the team to finalise ",L.previousMonthLabel," if it has not already been recorded."]})]}),e.jsx("button",{type:"button",onClick:Le,className:"text-sm px-3 py-1.5 rounded-md border border-amber-300 text-amber-700 hover:bg-amber-100",children:"Dismiss"})]}),e.jsxs("div",{className:"mt-4 grid gap-3 md:grid-cols-2",children:[e.jsxs("label",{className:"text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"To"}),e.jsx("input",{type:"email",value:M,onChange:r=>be(r.target.value),className:`${w.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2`})]}),e.jsxs("label",{className:"text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"Subject"}),e.jsx("input",{type:"text",value:oe,onChange:r=>we(r.target.value),className:`${w.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2`})]})]}),e.jsxs("label",{className:"mt-3 block text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"Body"}),e.jsx("textarea",{value:ue,onChange:r=>De(r.target.value),rows:9,className:`${w.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2 font-mono text-xs`})]}),e.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:$e,className:"rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-50",children:"Download Point-in-Time JSON"}),e.jsx("button",{type:"button",onClick:he,className:"rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-50",children:"Download Email Draft with Attachment (.eml)"}),e.jsx("button",{type:"button",onClick:xn,className:"rounded-md px-3 py-2 text-sm font-semibold text-white",style:{backgroundColor:w.themeColor},children:"Open Mail Draft"}),e.jsx("button",{type:"button",onClick:q,className:"rounded-md border border-amber-300 bg-white px-3 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100",children:"Finalise Prior Month Now"})]})]}),s==="dashboard"&&e.jsx("div",{ref:T,children:e.jsx(na,{store:o,components:n,lenses:t,metrics:ae,phaseFocusMode:w.phaseFocusMode||"auto",manualPhaseFocus:w.manualPhaseFocus,onPhaseFocusModeChange:r=>K(p=>({...p,phaseFocusMode:r,manualPhaseFocus:r==="manual"?p.manualPhaseFocus||ae.currentPhase:p.manualPhaseFocus})),onManualPhaseFocusChange:r=>K(p=>({...p,phaseFocusMode:"manual",manualPhaseFocus:r})),onResetPhaseFocus:()=>K(r=>({...r,phaseFocusMode:"auto",manualPhaseFocus:ae.currentPhase})),getEntry:je,onComponentClick:H,pathway:o.orgProfile.cst.pathway,pathwayChecks:o.pathwayChecks,onNavigate:m,onOpenLensInfo:v,onOpenOnboarding:()=>de(!0),colorAccessibilityMode:w.colorAccessibilityMode||"standard",darkMode:!!w.darkMode})}),s==="project-details"&&e.jsx(Ca,{orgProfile:o.orgProfile,onProfileUpdate:r=>{E(p=>{const k=Yt({...p,orgProfile:r});return JSON.stringify(p.orgProfile)!==JSON.stringify(r)?{...k,auditLog:V(p,[{eventType:"profile-updated",entityType:"profile",summary:"Updated CST profile details",before:{trustName:p.orgProfile.trustName,projectName:p.orgProfile.projectName,cst:p.orgProfile.cst},after:{trustName:r.trustName,projectName:r.projectName,cst:r.cst},source:"local"}])}:k})},components:n,lenses:t,store:o,getEntry:je,onComponentClick:H,onOpenOnboarding:()=>de(!0),darkMode:!!w.darkMode}),s==="assessment"&&e.jsx(ga,{store:{...o,showMatrix:x},components:n,activeComponentId:c,getRubricText:pi,getEntry:je,onComponentChange:H,onEntryUpdate:Se,onOpenLensInfo:v,onMatrixToggle:r=>{l(p=>({...p,[r]:!p[r]}))},onActionRemove:(r,p,k)=>{const P=je(r,p).actions.find(W=>W.id===k);if(!P)return;const Y=window.prompt("Please provide a reason for removing this action. This will be included in the JSON export audit log.");if(!Y||!Y.trim()){window.alert("Removal cancelled. A reason is required to remove an action.");return}E(W=>{var ln;const se=((ln=W.currentDraft[r])==null?void 0:ln[p])||Nn(),fe={...se,actions:se.actions.filter(qe=>qe.id!==k).map(ui)},Ce={...W.suppressedAutoActions};if(k.startsWith("vision-action:")||k.startsWith("case-for-change-action:")||k.startsWith("benefits-action:")||k.startsWith("sponsorship-action:")||k.startsWith("change-impact-action:")){const qe=mi(r,p),zn=Ce[qe]||[];zn.includes(k)||(Ce[qe]=[...zn,k])}const ie={...W,currentDraft:{...W.currentDraft,[r]:{...W.currentDraft[r],[p]:fe}},suppressedAutoActions:Ce};return{...Xe(ie),auditLog:V(W,[{eventType:"action-removed",entityType:"action",entityId:k,summary:`Removed action from ${r} / ${p}`,componentId:r,lens:p,reason:Y.trim(),before:{text:P.text,status:P.status,owner:P.owner,actionType:P.actionType},source:"local"}])}})},onObjectivesUpdate:pe,darkMode:!!w.darkMode}),s==="action-plan"&&e.jsx(Cs,{actions:Ke,onComponentClick:H,darkMode:!!w.darkMode}),s==="cm-guide"&&e.jsx(xa,{onComponentClick:H,guidanceTarget:xt,linkOverrides:o.orgProfile.linkOverrides,darkMode:!!w.darkMode}),s==="introduction"&&e.jsx(Ta,{darkMode:!!w.darkMode,onNavigateToProjectDetails:()=>m("project-details"),onNavigateToGuide:()=>m("cm-guide"),onNavigateToDashboard:()=>m("dashboard")}),s==="roadmap-view"&&e.jsx(_a,{components:n,metrics:ae,getEntry:je,onComponentClick:H,pathway:o.orgProfile.cst.pathway,pathwayChecks:o.pathwayChecks,darkMode:!!w.darkMode}),s==="highlight-builder"&&e.jsx(Pa,{store:o,metrics:ae,lenses:t,components:n,getEntry:je,trustName:o.orgProfile.trustName,projectName:o.orgProfile.projectName,themeColor:w.themeColor,onLayoutSaved:B,darkMode:!!w.darkMode}),s==="audit-log"&&e.jsx(ha,{events:o.auditLog,darkMode:!!w.darkMode}),s==="settings"&&e.jsx(La,{userSettings:w,onUserSettingsUpdate:is,onLoadExampleData:ye,onResetData:ve,canUseCustomTheme:Ye,engagementGrade:yn,engagementLevel:D.level,engagementXp:D.xp,darkMode:!!w.darkMode})]}),h?e.jsx(Da,{lensName:h,onClose:()=>v(""),darkMode:!!w.darkMode}):null,xe?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${w.darkMode?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} w-full max-w-2xl rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${w.darkMode?"text-slate-100":"text-slate-900"}`,children:"Finalise Month"}),e.jsx("button",{type:"button",onClick:()=>g(!1),className:`${w.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:`mt-4 space-y-3 text-sm ${w.darkMode?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("p",{children:["Finalising creates a point-in-time snapshot for"," ",e.jsx("strong",{children:Pe.currentMonthLabel}),". A new reporting month starts on the 1st day of each month."]}),e.jsx("p",{children:Ne?"Finalise window is open (last week of the month).":"Finalise window is currently closed. You can finalise from the final week of each month."}),Ge?e.jsxs("p",{className:"rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-amber-900",children:["A snapshot already exists for ",Pe.currentMonthLabel,". Re-finalise will replace this month only."]}):null]}),e.jsxs("div",{className:`${w.darkMode?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mt-4 rounded-md border p-3 text-sm`,children:[e.jsx("p",{className:`font-semibold ${w.darkMode?"text-slate-100":"text-slate-800"}`,children:"Current summary"}),e.jsxs("ul",{className:`mt-2 space-y-1 ${w.darkMode?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("li",{children:["Baseline snapshot: ",Pe.baselineLabel]}),e.jsxs("li",{children:["Overall readiness: ",ae.overallPct,"% (",Pe.deltaOverall>=0?"+":"",Pe.deltaOverall,"% vs baseline)"]}),e.jsxs("li",{children:["Components assessed: ",Pe.assessedCount]}),e.jsxs("li",{children:["Actions complete: ",Pe.completedActions,"/",Pe.totalActions]})]})]}),e.jsxs("div",{className:"mt-5 flex flex-wrap justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:()=>g(!1),className:"rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Cancel"}),Ge&&Ne?e.jsx("button",{type:"button",onClick:()=>{g(!1),X({replaceExisting:!0})},className:"rounded-md border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100",children:"Re-finalise This Month"}):null,e.jsx("button",{type:"button",onClick:()=>{g(!1),X()},disabled:!Ne,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50",children:"Finalise Snapshot"})]})]})}):null,e.jsx(Ns,{toolkitChoice:o.orgProfile.cst.toolkitChoice,darkMode:!!w.darkMode}),e.jsx(xs,{open:te,onClose:I,onNavigateToProjectDetails:()=>{a("project-details"),I()},onNavigateToGuide:()=>{a("cm-guide"),I()}})]})]})}export{Pi as AdoptionApp,Pi as default};
