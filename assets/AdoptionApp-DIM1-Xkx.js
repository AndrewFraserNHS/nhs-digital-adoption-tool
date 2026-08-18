import{r as c,j as e,a as gn}from"./vendor-react-nTLHQtbJ.js";import{g as Xn,p as bs,G as xs,d as Ss}from"./vendor-misc-D88HtX07.js";import{A as Rn,a as en,n as $e,i as Ct,d as Qn,U as vs}from"./actionModel-g5JtsqyG.js";import{P as Ke,r as Et,v as ys,T as pn,D as ws,s as ke,p as Re,l as We,a as Qe,c as Zn,b as Ns,d as Cs,A as et,S as Es,G as nt}from"./storage-DHVlaK-Q.js";import{g as Pn,A as Gn}from"./components-aRtg6FgR.js";import{d as fn,e as Is}from"./utils-IN_5AsDm.js";import"./vendor-chart-DnMUodEx.js";function It(){return[{title:"What is the Adoption Engine?",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsxs("p",{className:"text-sm text-slate-700",children:["Going live with a new digital product isn't the finish line - people still need to adopt it, change how they work, and keep using it."," "]}),e.jsx("p",{className:"text-sm text-slate-700",children:"The Adoption Engine helps you track how people and teams are adopting the change before go-live, during rollout, and after launch so progress is visible and outcomes are measurable."}),e.jsx("p",{className:"text-sm text-slate-700",children:" It helps you answer four simple questions:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"Where are we going?"}),e.jsx("li",{children:" How will we know we've got there?"}),e.jsx("li",{children:" What needs to be in place?"}),e.jsx("li",{children:" What should we do next?"})]}),e.jsx("p",{className:"text-sm text-slate-700",children:"The goal is not just to implement change, but to ensure it is adopted, embedded and delivering benefits."})]})},{title:"What is a CST?",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"A CST (Context Specific Template) contains the information that makes the Adoption Engine specific to your project, programme or initiative."}),e.jsx("p",{children:"It captures key information such as your scope, milestones, outcomes and benefits, and tailors the guidance, actions and resources provided."}),e.jsxs("p",{children:["You can update your CST at any time from ",e.jsx("strong",{children:"CST Personalisation"})]})]})},{title:"Adoption Pathways",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"The Adoption Engine supports three common change journeys:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Starting for the First Time"}),e.jsx("br",{}),"Building the foundations for successful adoption."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Piloted and Ready to Scale Up"}),e.jsx("br",{}),"Expanding a successful pilot to a wider audience."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Gone Live but Adoption is Patchy"}),e.jsx("br",{}),"Strengthening adoption where uptake or benefits are lower than expected."]})]}),e.jsx("p",{children:"Choose your pathway to tailor the guidance, actions and resources you see."})]})},{title:"How the Adoption Engine Works",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{children:"The engine is built around components such as Vision, Sponsorship, Engagement, Capability and Benefits."}),e.jsxs("p",{children:["Each component is viewed through five ",e.jsx("strong",{children:"lenses"}),":"]}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"Strategic Direction and Leadership"}),e.jsx("li",{children:"People Experience and Culture"}),e.jsx("li",{children:"Planning and Risk"}),e.jsx("li",{children:"Skills and Behaviour"}),e.jsx("li",{children:"Process and Sustainment"})]}),e.jsx("p",{children:"As you assess each area, the engine recommends actions, resources and evidence to help improve adoption."})]})},{title:"Getting Started",body:e.jsxs("div",{className:"text-sm text-slate-700 space-y-2",children:[e.jsx("p",{className:"text-sm text-slate-700",children:"Start with CST Personalisation to review your CST. "}),e.jsx("p",{className:"text-sm text-slate-700",children:"Then visit the Dashboard to:"}),e.jsxs("ul",{className:"list-decimal pl-5 space-y-1",children:[e.jsx("li",{children:"View your current position"}),e.jsx("li",{children:"Explore components and lenses"}),e.jsx("li",{children:"Identify priority actions"}),e.jsx("li",{children:"Track progress and benefits"})]}),e.jsxs("p",{className:"text-sm text-slate-700",children:["The Adoption Engine will help guide your journey from ambition to adoption."," "]})]})}]}function js({open:n,onClose:t,onNavigateToProjectDetails:s,onNavigateToGuide:a}){const[d,v]=c.useState(0),x=It();if(c.useEffect(()=>{n&&v(0)},[n]),!n)return null;const m=x[d],o=d===0,E=d===x.length-1;return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:"relative w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("p",{className:"text-xs font-semibold uppercase tracking-wider text-blue-600",children:["Introduction · Step ",d+1," of ",x.length]}),e.jsx("button",{type:"button",onClick:t,className:"rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100",children:"Skip"})]}),e.jsx("h3",{className:"mt-3 text-lg font-semibold text-slate-900",children:m.title}),e.jsx("div",{className:"mt-3",children:m.body}),e.jsxs("div",{className:"mt-6 flex items-center justify-between gap-2",children:[e.jsx("button",{type:"button",onClick:()=>v(p=>Math.max(0,p-1)),disabled:o,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed",children:"Back"}),E?e.jsxs("div",{className:"flex items-stretch gap-2",children:[s?e.jsx("button",{type:"button",onClick:s,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"Set up your CST Personalisation"}):null,a?e.jsx("button",{type:"button",onClick:a,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"See the 6 Key Questions"}):null,e.jsx("button",{type:"button",onClick:t,className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Go to dashboard"})]}):e.jsx("button",{type:"button",onClick:()=>v(p=>Math.min(x.length-1,p+1)),className:"flex h-[42px] min-h-[42px] items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Next"})]})]})})}const vn=[{key:"avt-v2-2026",label:"AVT Digital Adoption Toolkit (V2.1, Jul 2026)",filename:"AVT Digital Adoption Toolkit - V2.1 July 2026.pdf",path:"/AVT%20Digital%20Adoption%20Toolkit%20-%20V2.1%20July%202026.pdf"},{key:"change-management-v3-2023",label:"Change Management Toolkit (V3.0, Sep 2023)",filename:"Change Management Toolkit v3.0 September 2023.pdf",path:"/Change%20Management%20Toolkit%20v3.0%20September%202023.pdf"}],_s="avt-v2-2026";function As(n){return vn.some(t=>t.key===n)}function Os(n){return vn.find(t=>t.key===n)||vn[0]}const ks={"avt-v2-2026":[{id:"avt-vision-case-for-change",title:"Vision and Case for Change",pageHint:"Section: Early readiness",text:"Use a clear case for change, define outcomes, and ensure leadership sponsorship before go-live."},{id:"avt-stakeholder-engagement",title:"Stakeholder Engagement",pageHint:"Section: People and communication",text:"Map stakeholder groups, identify adoption risks, and use targeted communication plans for each audience."},{id:"avt-training-readiness",title:"Training and Capability",pageHint:"Section: Capability and learning",text:"Align learning interventions with role-based needs and verify confidence through readiness checkpoints."},{id:"avt-benefits-tracking",title:"Benefits Tracking",pageHint:"Section: Value realisation",text:"Set measurable adoption indicators and review benefit evidence at regular intervals post go-live."},{id:"avt-reinforcement-bau",title:"Reinforcement and BAU Transfer",pageHint:"Section: Sustainment",text:"Embed reinforcement actions and hand over ownership to business-as-usual teams for sustained adoption."}],"change-management-v3-2023":[{id:"cmt-leadership-alignment",title:"Leadership Alignment",pageHint:"Section: Sponsorship and governance",text:"Secure visible executive sponsorship and align governance with programme milestones and risks."},{id:"cmt-change-impact",title:"Change Impact Assessment",pageHint:"Section: Planning and risk",text:"Assess process, role, and behaviour impacts early and prioritise mitigations before deployment."},{id:"cmt-resistance-management",title:"Resistance Management",pageHint:"Section: Adoption barriers",text:"Identify likely resistance themes and define practical interventions with named owners and timelines."},{id:"cmt-comms-cadence",title:"Communication Cadence",pageHint:"Section: Communications",text:"Establish a predictable communication cadence using concise updates and feedback loops."},{id:"cmt-post-go-live-support",title:"Post Go-Live Support",pageHint:"Section: Stabilisation",text:"Provide hypercare support with clear escalation routes and transition criteria into steady state."}]};xs.workerSrc=bs;function Rs({toolkitChoice:n,darkMode:t=!1}){const[s,a]=c.useState(!1),[d,v]=c.useState(!1),[x,m]=c.useState(""),[o,E]=c.useState(1),[p,l]=c.useState("idle"),[u,S]=c.useState(""),[z,Y]=c.useState([]),w=c.useMemo(()=>Os(n),[n]),$=c.useMemo(()=>(ks[n]||[]).map(G=>({id:G.id,title:G.title,pageHint:G.pageHint,text:G.text,pageNumber:null})),[n]);c.useEffect(()=>{if(!s)return;let G=!1;return(async()=>{l("loading"),S("");try{const oe=await fetch(w.path);if(!oe.ok)throw new Error(`HTTP ${oe.status}`);const re=await oe.arrayBuffer(),te=new Uint8Array(re);let ae;try{ae=await Xn({data:te}).promise}catch(le){if(ae=await Xn({data:te,disableWorker:!0}).promise,!G){const be=le instanceof Error?le.message:String(le);S(`Worker fallback used: ${be}`)}}const R=[];for(let le=1;le<=ae.numPages;le+=1){if(G)return;const q=(await(await ae.getPage(le)).getTextContent()).items.map(J=>"str"in J?J.str:"").join(" ").replace(/\s+/g," ").trim();q&&R.push({id:`${n}-page-${le}`,title:`Page ${le}`,pageHint:`Page ${le}`,text:q,pageNumber:le})}G||(Y(R),l("ready"))}catch{G||(Y([]),l("error"),S("Unable to read PDF text for indexing in this browser session."))}})(),()=>{G=!0}},[s,w.path,n]),c.useEffect(()=>{E(1),m(""),Y([]),l("idle"),S("")},[n]);const k=z.length>0?z:$,se=c.useMemo(()=>{const G=Number.isFinite(o)&&o>0?Math.floor(o):1;return`${w.path}#page=${G}`},[w.path,o]),B=c.useMemo(()=>{const G=x.trim().toLowerCase();if(!G)return k.slice(0,5).map(re=>({entry:re,score:0}));const ue=G.split(/\s+/).filter(Boolean),oe=re=>{const te=`${re.title} ${re.text} ${re.pageHint}`.toLowerCase();let ae=0;return te.includes(G)&&(ae+=8),ue.forEach(R=>{te.includes(R)?ae+=2:te.split(/\W+/).some(be=>be&&(be.includes(R)||R.includes(be)))&&(ae+=1)}),ae};return k.map(re=>({entry:re,score:oe(re)})).filter(re=>re.score>0).sort((re,te)=>te.score-re.score).slice(0,5)},[x,k])[0]||null;return c.useEffect(()=>{x.trim()&&B!=null&&B.entry.pageNumber&&E(B.entry.pageNumber)},[B,x]),e.jsxs("div",{className:"fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2","data-testid":"global-toolkit-chatbot",children:[s?e.jsxs("div",{className:`w-[380px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border shadow-2xl ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant"}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("button",{type:"button",onClick:()=>v(!0),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Maximise"}),e.jsx("button",{type:"button",onClick:()=>a(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Minimise"})]})]}),e.jsxs("div",{className:`space-y-3 p-3 ${t?"bg-slate-800":"bg-slate-50"}`,children:[e.jsxs("div",{className:`max-w-[95%] rounded-2xl rounded-bl-md px-3 py-2 text-xs shadow-sm ${t?"bg-slate-700 text-slate-100":"bg-white text-slate-700"}`,children:["Showing your selected toolkit from CST Personalisation:",e.jsx("div",{className:"mt-1 font-semibold",children:w.label})]}),e.jsx("div",{className:`overflow-hidden rounded-lg border ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:e.jsx("iframe",{title:"Selected Toolkit Preview",src:se,className:"h-[260px] w-full"})}),e.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-end gap-2",children:[e.jsx("label",{htmlFor:"toolkit-page-input",className:`text-[11px] font-semibold uppercase tracking-wider ${t?"text-slate-300":"text-slate-600"}`,children:"Go to page"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{id:"toolkit-page-input",type:"number",min:1,value:o,onChange:G=>E(Number(G.target.value)||1),className:`w-20 rounded-md border px-2 py-1.5 text-xs ${t?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})})]}),e.jsxs("div",{className:`rounded-lg border p-2 ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsx("label",{htmlFor:"toolkit-fuzzy-search",className:`mb-1 block text-[11px] font-semibold uppercase tracking-wider ${t?"text-slate-300":"text-slate-600"}`,children:"Quick snippet search"}),e.jsx("input",{id:"toolkit-fuzzy-search",type:"search",value:x,onChange:G=>m(G.target.value),placeholder:"Try: sponsorship, training, resistance",className:`w-full rounded-md border px-2 py-1.5 text-xs ${t?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-400":"border-slate-300 bg-white text-slate-900 placeholder-slate-500"}`}),e.jsx("div",{className:"mt-2",children:x.trim()?B!=null&&B.entry.pageNumber?e.jsxs("button",{type:"button",onClick:()=>{E(B.entry.pageNumber),v(!0)},className:`w-full rounded-md px-2 py-1.5 text-left text-xs font-semibold ${t?"bg-slate-800 text-slate-100 hover:bg-slate-700":"bg-slate-100 text-slate-800 hover:bg-slate-200"}`,children:["Go to best match: Page ",B.entry.pageNumber]}):e.jsx("p",{className:`text-xs ${t?"text-slate-400":"text-slate-500"}`,children:"No close page match found. Try broader keywords."}):e.jsx("p",{className:`text-xs ${t?"text-slate-400":"text-slate-500"}`,children:"Enter a keyword to jump to the most relevant page."})}),e.jsx("p",{className:`mt-2 text-[11px] ${t?"text-slate-400":"text-slate-500"}`,children:p==="loading"?"Indexing toolkit text from all pages...":p==="ready"?`Search is using full-document text (${z.length} pages indexed).`:p==="error"?"Full-document indexing unavailable, using fallback snippets.":"Search will expand to all pages when the assistant opens."}),u?e.jsx("p",{className:`mt-1 text-[11px] ${t?"text-amber-300":"text-amber-700"}`,children:u}):null]}),e.jsx("a",{href:w.path,target:"_blank",rel:"noopener noreferrer",className:"inline-block text-xs font-semibold text-[#005eb8] underline",children:"Open full toolkit in new tab"})]})]}):null,d?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4",children:e.jsxs("div",{className:`relative h-[90vh] w-[95vw] overflow-hidden rounded-2xl border shadow-2xl ${t?"border-slate-600 bg-slate-900":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#005eb8] px-4 py-2",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Toolkit Assistant · Expanded Viewer"}),e.jsx("button",{type:"button",onClick:()=>v(!1),className:"rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20",children:"Close"})]}),e.jsx("iframe",{title:"Selected Toolkit Full View",src:se,className:"h-[calc(90vh-42px)] w-full"})]})}):null,e.jsxs("button",{type:"button",onClick:()=>a(G=>!G),className:"inline-flex items-center gap-2 rounded-full bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-blue-700","aria-label":"Open toolkit assistant",children:[e.jsx("span",{"aria-hidden":"true",children:"💬"}),"Toolkit assistant"]})]})}function jt({showAdvancedControls:n,onToggleAdvanced:t,onReset:s,resultText:a,activeFilters:d,activeFiltersAriaLabel:v,darkMode:x=!1}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:t,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${x?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:n?"Hide advanced controls":"Show advanced controls"}),e.jsx("button",{type:"button",onClick:s,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${x?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-slate-50"}`,children:"Reset filters"}),e.jsx("span",{className:`text-xs ${x?"text-slate-300":"text-slate-500"}`,"aria-live":"polite",children:a})]}),d.length>0?e.jsx("div",{className:"flex flex-wrap gap-2","aria-label":v,children:d.map(m=>e.jsx("span",{className:`inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${x?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-slate-50 text-slate-700"}`,children:m},m))}):null]})}function Ps({actions:n,onComponentClick:t,darkMode:s=!1}){const[a,d]=c.useState(""),[v,x]=c.useState("all"),[m,o]=c.useState("all"),[E,p]=c.useState("all"),[l,u]=c.useState("all"),[S,z]=c.useState("all"),[Y,w]=c.useState("component"),[$,k]=c.useState("asc"),[se,A]=c.useState(!1),B=c.useCallback(j=>{t(j)},[t]),G=c.useMemo(()=>Array.from(new Set(n.map(j=>j.component))).sort((j,q)=>j.localeCompare(q)),[n]),ue=c.useMemo(()=>Array.from(new Set(n.map(j=>j.action.owner).filter(Boolean))).sort((j,q)=>j.localeCompare(q)),[n]),oe=c.useMemo(()=>Array.from(new Set(n.map(j=>j.action.status))).sort((j,q)=>j.localeCompare(q)),[n]),re=c.useMemo(()=>{const j=n.map(q=>q.action.actionType).filter(q=>!!q);return Array.from(new Set([...Rn,...j])).sort((q,J)=>q.localeCompare(J))},[n]),te=c.useMemo(()=>{const j=n.map(q=>q.action.readinessScore).filter(q=>q!==void 0);return Array.from(new Set(j)).sort((q,J)=>q-J)},[n]),ae={0:"Not Started",1:"Emerging",2:"Developing",3:"Embedding",4:"Adopted",5:"Thriving"},R=c.useMemo(()=>{const j=a.trim().toLowerCase();return n.filter(J=>v!=="all"&&J.component!==v||m!=="all"&&J.action.owner!==m||E!=="all"&&J.action.status!==E||l!=="all"&&(J.action.actionType||"")!==l||S!=="all"&&J.action.readinessScore!==S?!1:j?[J.component,J.lens,J.action.text,J.action.actionType||"",J.action.owner,J.action.timescale,J.action.status].join(" ").toLowerCase().includes(j):!0).sort((J,xe)=>{const Pe=f=>{switch(Y){case"lens":return f.lens;case"owner":return f.action.owner||"Unassigned";case"status":return f.action.status;case"actionType":return f.action.actionType||"Unassigned";case"component":default:return f.component}},Ie=Pe(J).localeCompare(Pe(xe));return $==="asc"?Ie:-Ie})},[l,n,v,m,S,a,Y,$,E]),le=c.useMemo(()=>{const j=[];return a.trim()&&j.push(`Search: ${a.trim()}`),v!=="all"&&j.push(`Component: ${v}`),E!=="all"&&j.push(`Status: ${E}`),l!=="all"&&j.push(`Action type: ${l}`),S!=="all"&&j.push(`Readiness: ${ae[S]}`),m!=="all"&&j.push(`Owner: ${m}`),(Y!=="component"||$!=="asc")&&j.push(`Sort: ${Y} (${$})`),j},[l,v,m,S,a,Y,$,E]),be=()=>{d(""),x("all"),o("all"),p("all"),u("all"),z("all"),w("component"),k("asc"),A(!1)};return e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsx("h2",{className:`text-2xl font-bold mb-6 ${s?"text-slate-100":"text-slate-800"}`,children:"Action Tracker"}),e.jsxs("div",{className:`${s?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-4 mb-6 space-y-3`,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:a,onChange:j=>d(j.target.value),placeholder:"Search actions, owners, lenses...",className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-900 text-slate-100":"text-slate-900"}`}),e.jsxs("select",{value:v,onChange:j=>x(j.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All components"}),G.map(j=>e.jsx("option",{value:j,children:j},j))]}),e.jsxs("select",{value:E,onChange:j=>p(j.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-900 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All statuses"}),oe.map(j=>e.jsx("option",{value:j,children:j},j))]})]}),e.jsx(jt,{showAdvancedControls:se,onToggleAdvanced:()=>A(j=>!j),onReset:be,resultText:`Showing ${R.length} actions`,activeFilters:le,activeFiltersAriaLabel:"Active action tracker filters",darkMode:s}),se?e.jsxs("div",{className:`grid grid-cols-1 sm:grid-cols-5 gap-3 rounded-md border p-3 ${s?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("select",{value:m,onChange:j=>o(j.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All owners"}),ue.map(j=>e.jsx("option",{value:j,children:j},j))]}),e.jsxs("select",{value:l,onChange:j=>u(j.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),re.map(j=>e.jsx("option",{value:j,children:j},j))]}),e.jsxs("select",{value:S==="all"?"all":String(S),onChange:j=>z(j.target.value==="all"?"all":Number(j.target.value)),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"all",children:"All readiness levels"}),te.map(j=>e.jsx("option",{value:String(j),children:ae[j]},j))]}),e.jsxs("select",{value:Y,onChange:j=>w(j.target.value),className:`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${s?"bg-slate-800 text-slate-100":"text-slate-900"}`,children:[e.jsx("option",{value:"component",children:"Sort: Component"}),e.jsx("option",{value:"lens",children:"Sort: Lens"}),e.jsx("option",{value:"owner",children:"Sort: Owner"}),e.jsx("option",{value:"actionType",children:"Sort: Action Type"}),e.jsx("option",{value:"status",children:"Sort: Status"})]}),e.jsx("button",{type:"button",onClick:()=>k(j=>j==="asc"?"desc":"asc"),className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${s?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 text-slate-700 hover:bg-white"}`,children:$==="asc"?"A-Z":"Z-A"})]}):null]}),e.jsx("div",{className:`${s?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:R.length?e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:`min-w-full table-fixed ${s?"divide-slate-700":"divide-slate-200"} divide-y`,children:[e.jsx("thead",{className:s?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Change Component"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Lens"}),e.jsx("th",{className:`w-[22%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Action"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Action Type"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Owner"}),e.jsx("th",{className:`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Timescale"}),e.jsx("th",{className:`w-[14%] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${s?"text-slate-300":"text-slate-500"}`,children:"Status"})]})}),e.jsx("tbody",{className:`${s?"bg-slate-800 divide-slate-700":"bg-white divide-slate-100"} divide-y`,children:R.map(({compId:j,component:q,lens:J,action:xe})=>e.jsxs("tr",{children:[e.jsx("td",{className:`px-4 py-3 text-sm ${s?"text-slate-100":"text-slate-700"}`,children:e.jsx("button",{onClick:()=>B(j),className:"text-left underline underline-offset-2 hover:text-[#005eb8] transition-colors",children:q})}),e.jsx("td",{className:`px-4 py-3 text-sm ${s?"text-slate-300":"text-slate-500"}`,children:J}),e.jsx("td",{className:`w-[22%] px-4 py-3 text-sm whitespace-normal break-words leading-snug ${s?"text-slate-100":"text-slate-700"}`,children:xe.text}),e.jsx("td",{className:`px-4 py-3 text-sm ${s?"text-slate-100":"text-slate-700"}`,children:xe.actionType||"Unassigned"}),e.jsx("td",{className:`px-4 py-3 text-sm ${s?"text-slate-100":"text-slate-700"}`,children:xe.owner}),e.jsx("td",{className:`px-4 py-3 text-sm ${s?"text-slate-100":"text-slate-700"}`,children:xe.timescale}),e.jsx("td",{className:"w-[14%] px-4 py-3 text-sm",children:e.jsx("span",{className:`inline-flex rounded-full border px-2 py-1 text-xs font-semibold ${en[$e(xe.status)]}`,children:$e(xe.status)})})]},`${j}-${J}-${xe.text}`))})]})}):e.jsx("div",{className:`p-6 ${s?"text-slate-300":"text-slate-500"}`,children:n.length?"No actions match the current filters.":"No actions recorded yet."})})]})}const tt=[1,2,3,4,5],bn=["A","B","C","D","E"],xn=[1,2,3,4,5],Ds=[{value:"project",label:"Project"},{value:"program",label:"Program"},{value:"initiative",label:"Initiative"}],_t=[{value:"pathway-1",label:"Pathway 1 - Starting for the First Time"},{value:"pathway-2",label:"Pathway 2 - Piloted and Ready to Scale Up"},{value:"pathway-3",label:"Pathway 3 - Gone Live but Adoption is Patchy"}],At=_t.reduce((n,t)=>(n[t.value]=t.label,n),{}),Ts={type:"project",pathway:"pathway-1",goLiveDate:"",fullAdoptionDate:"",benefitRealizationDate:"",toolkitChoice:_s,phaseCapability:{}};function Dn(n,t){if(!n.linkedActions.length)return"Not Started";const s=n.linkedActions.map(a=>{const d=(t[a.lens]||[]).find(v=>v.id===a.actionId);return(d==null?void 0:d.status)||"Planned"});return s.some(a=>a==="Blocked")?"Blocked":s.every(a=>a==="Completed")?"Completed":s.some(a=>a!=="Planned")?"In Progress":"Not Started"}function Ot(n){return{trustName:(n==null?void 0:n.trustName)||"",region:(n==null?void 0:n.region)||"",trustType:(n==null?void 0:n.trustType)||"",projectName:(n==null?void 0:n.projectName)||"",leadName:(n==null?void 0:n.leadName)||"",cst:{...Ts,...(n==null?void 0:n.cst)||{}},linkOverrides:n==null?void 0:n.linkOverrides,teamMembers:(n==null?void 0:n.teamMembers)||[]}}function $s(n){return n?Object.keys(n).reduce((t,s)=>{const a=n[s]||{};return t[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},t},{}):{}}function Tn(n){return{view:(n==null?void 0:n.view)||"dashboard",orgProfile:Ot(n==null?void 0:n.orgProfile),currentDraft:(n==null?void 0:n.currentDraft)||{},objectives:n!=null&&n.objectives?Rt(n.objectives):{},suppressedAutoActions:Ls(n==null?void 0:n.suppressedAutoActions),auditLog:Fs(n==null?void 0:n.auditLog),history:(n==null?void 0:n.history)||[],phaseOverrides:(n==null?void 0:n.phaseOverrides)||{},pathwayChecks:$s(n==null?void 0:n.pathwayChecks)}}function Ls(n){return n?Object.keys(n).reduce((t,s)=>(t[s]=[...n[s]||[]],t),{}):{}}function Fs(n){return n?n.map(t=>({...t})):[]}function En(){return{score:0,justification:"",evidence:"",actions:[]}}function kt(n){return{score:n.score,justification:n.justification,evidence:n.evidence,actions:n.actions.map(t=>({...t,linkedTargets:(t.linkedTargets||[]).map(s=>({componentId:s.componentId,lens:s.lens}))}))}}function Bs(n){return Object.keys(n).reduce((t,s)=>(t[s]=Object.keys(n[s]).reduce((a,d)=>(a[d]=kt(n[s][d]),a),{}),t),{})}function Gs(n){return{...n,linkedActions:n.linkedActions.map(t=>({...t}))}}function Rt(n){return Object.keys(n).reduce((t,s)=>(t[s]=(n[s]||[]).map(Gs),t),{})}const $n={1:{vision:5,case_for_change:5,sponsorship:1,change_network:1,benefits:1,change_impact:1,risk_management:1,cm_readiness:1,stakeholder:1,resistance:1,skills_learning:1,capability:1,change_adoption:1,process_change:1,reinforcement:1,org_maturity:1,transfer_bau:1},2:{vision:5,case_for_change:5,sponsorship:2,change_network:2,benefits:3,change_impact:2,risk_management:2,cm_readiness:2,stakeholder:2,resistance:2,skills_learning:2,capability:2,change_adoption:2,process_change:3,reinforcement:2,org_maturity:2,transfer_bau:2},3:{vision:5,case_for_change:5,sponsorship:3,change_network:3,benefits:4,change_impact:3,risk_management:3,cm_readiness:3,stakeholder:3,resistance:3,skills_learning:4,capability:3,change_adoption:3,process_change:4,reinforcement:3,org_maturity:3,transfer_bau:3},4:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:4,stakeholder:5,resistance:4,skills_learning:5,capability:4,change_adoption:4,process_change:5,reinforcement:4,org_maturity:4,transfer_bau:4},5:{vision:5,case_for_change:5,sponsorship:5,change_network:5,benefits:5,change_impact:5,risk_management:5,cm_readiness:5,stakeholder:5,resistance:5,skills_learning:5,capability:5,change_adoption:5,process_change:5,reinforcement:5,org_maturity:5,transfer_bau:5}};function on(n,t,s){return!t||!$n[t]?s:$n[t][n]??s}function st(n,t){var w;let s=0,a=0,d=0,v=0;const x=new Map,m=[];t.forEach($=>{const k=x.get($.phase)||{componentCount:0,assessedLenses:0,totalLenses:0,onTrackComponents:0,totalActions:0,completedActions:0};k.componentCount+=1,k.totalLenses+=$.lenses.length;let se=0,A=0,B=0,G=0;$.lenses.forEach(te=>{var be;const ae=(be=n.currentDraft[$.id])==null?void 0:be[te],R=Number((ae==null?void 0:ae.score)||0);s+=R,se+=R,R>0&&(a+=1,A+=1,k.assessedLenses+=1),((ae==null?void 0:ae.actions)||[]).forEach(j=>{d+=1,B+=1,k.totalActions+=1,Ct(j.status)&&(v+=1,G+=1,k.completedActions+=1)})});const ue=$.lenses.length?Number((se/$.lenses.length).toFixed(1)):0,oe=on($.id,$.phase,$.target),re=Number(Math.max(0,oe-ue).toFixed(1));ue>=oe&&(k.onTrackComponents+=1),m.push({component:$,avgScore:ue,gapToTarget:re,assessedLenses:A,totalLenses:$.lenses.length,totalActions:B,completedActions:G}),x.set($.phase,k)});const o=t.reduce(($,k)=>$+k.lenses.length,0),E=o*5,p=E?Math.round(s/E*100):0,l=d?Math.round(v/d*100):0,u=[...x.entries()].sort(([$],[k])=>$-k).map(([$,k])=>{const se=k.totalActions?Math.round(k.completedActions/k.totalActions*100):0,A=k.componentCount?k.onTrackComponents/k.componentCount:0,B=A>=.75&&se>=50?"Green":A>=.4||se>=25?"Amber":"Red";return{phase:$,componentCount:k.componentCount,assessedLenses:k.assessedLenses,totalLenses:k.totalLenses,onTrackComponents:k.onTrackComponents,actionCompletionPct:se,rag:B}}),S=u.find($=>$.onTrackComponents<$.componentCount),z=(S==null?void 0:S.phase)||((w=u[u.length-1])==null?void 0:w.phase)||1,Y=m.filter(({component:$,gapToTarget:k})=>$.phase<=z+1&&k>0).sort(($,k)=>$.component.phase!==k.component.phase?$.component.phase-k.component.phase:k.gapToTarget-$.gapToTarget).slice(0,3).map(({component:$,avgScore:k,gapToTarget:se,totalActions:A,completedActions:B,assessedLenses:G,totalLenses:ue})=>{const oe=Math.max(0,A-B),re=G<ue?`Assess ${ue-G} remaining lens area(s).`:oe>0?`Complete ${oe} open action(s).`:"Create at least one delivery action linked to this component.";return{componentId:$.id,componentLabel:$.label,phase:$.phase,gapToTarget:se,message:`Raise ${$.label} from ${k.toFixed(1)} to target ${$.target}. ${re}`}});return{totalCurrent:s,assessedCount:a,totalExpected:o,overallPct:p,totalActions:d,completedActions:v,actionCompletionPct:l,currentPhase:z,phaseSummaries:u,nextSteps:Y}}function Us(n,t,s,a){return t.map(d=>{let v=0,x=0;return s.forEach(m=>{m.lenses.includes(d)&&(v+=Number(a(m.id,d).score||0),x+=1)}),x?Number((v/x).toFixed(1)):0})}function Vs(n,t){return n.map(s=>{let a=0,d=0;return t.forEach(v=>{v.lenses.includes(s)&&(a+=v.target,d+=1)}),d?Number((a/d).toFixed(1)):0})}function Ms(n,t,s,a){const d=Us(n,t,s,a),v=Vs(t,s);return{labels:t,datasets:[{label:"Current Score",data:d,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",borderWidth:2,pointRadius:4,pointHoverRadius:6},{label:"Target",data:v,borderColor:"#00A499",backgroundColor:"rgba(0, 164, 153, 0.05)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function Hs(n,t,s){const a=s&&$n[s]?s:null,d=x=>x<=0?"#768692":x<1.5?"#AE2521":x<2.5?"#FFB81C":x<3.5?"#005EB8":x<4.5?"#330072":"#00A499",v=n.map(x=>{const m=x.lenses.reduce((o,E)=>o+Number(t(x.id,E).score||0),0);return Number((m/x.lenses.length).toFixed(1))});return{labels:n.map(x=>x.label),datasets:[{label:"Current Average Readiness",data:v,borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.12)",borderWidth:2,pointRadius:4,pointHoverRadius:6,pointBackgroundColor:v.map(d),pointBorderColor:v.map(d)},{label:a?`Exemplar (Phase ${a})`:"Target Average",data:n.map(x=>on(x.id,a||void 0,x.target)),borderColor:"#94a3b8",backgroundColor:"rgba(148, 163, 184, 0.06)",borderWidth:2,borderDash:[5,5],pointRadius:3,pointHoverRadius:5}]}}function Ws(n,t,s){const a=[],d=new Set,v=(x,m,o)=>{const E=`${o.id}:${x}:${m}`;if(d.has(E))return;d.add(E);const p=t(x);a.push({compId:x,component:p.label,lens:m,action:{...o}})};return Object.keys(n.currentDraft).forEach(x=>{Object.keys(n.currentDraft[x]).forEach(m=>{(s(x,m).actions||[]).forEach(E=>{(E.linkedTargets&&E.linkedTargets.length?E.linkedTargets:[{componentId:x,lens:m}]).forEach(l=>{v(l.componentId,l.lens,E)})})})}),a}function Ks(n,t,s){var o;const a=((o=n.objectives)==null?void 0:o[t])||[],d=E=>E.reduce((p,l)=>(p[l]=s(t,l).actions,p),{}),v=Array.from(new Set(a.flatMap(E=>E.linkedActions.map(p=>p.lens)))),x=d(v),m=a.filter(E=>Dn(E,x)==="Completed").length;return{total:a.length,completed:m}}const zs=`Pathway 1 - We are starting AVT for the first time
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
adoption.`,In={"Pathway 1 - We are starting AVT for the first time":"pathway-1","Pathway 2 - We have piloted AVT and need to scale up":"pathway-2","Pathway 3 - AVT is live but adoption is patchy":"pathway-3","Pathway 1 - We are starting product for the first time":"pathway-1","Pathway 2 - We have piloted product and need to scale up":"pathway-2","Pathway 3 - product is live but adoption is patchy":"pathway-3","Pathway 1 - Pilot":"pathway-1","Pathway 2 - Scale up":"pathway-2","Pathway 3 - Reassess":"pathway-3"},Ys={vision:"Vision",case_for_change:"Case for Change",sponsorship:"Senior Sponsorship and Governance",change_network:"Change Network",benefits:"Benefits and WIIFM",stakeholder:"Stakeholder Engagement and Communication",process_change:"Process Change and Ways of Working",change_impact:"Change Impact and Risk",risk_management:"Change Impact and Risk",skills_learning:"Skills, Learning, Capability and Confidence",capability:"Skills, Learning, Capability and Confidence",change_adoption:"Change Adoption",transfer_bau:"Transfer to BAU",reinforcement:"Reinforcement",resistance:"Resistance",cm_readiness:"Readiness and Planning",org_maturity:"Organisational Change Management Maturity"};function qs(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function jn(n){return n.replace(/\bAVT\b/g,"${productName}")}function Js(n){const t=n.split(/\r?\n/).map(d=>d.trim()),s={};let a=0;for(;a<t.length;){const d=t[a],v=In[d];if(!v){a+=1;continue}for(a+=1;a<t.length&&!t[a];)a+=1;if(a>=t.length)break;const x=t[a];for(a+=1;a<t.length&&(!t[a]||t[a]==="Are you on track?");)a+=1;let m="";if(a<t.length&&t[a].startsWith("Descriptor:"))for(m=jn(t[a].replace("Descriptor:","").trim()),a+=1;a<t.length&&t[a]&&!t[a].startsWith("☐")&&!t[a].startsWith("ARE YOU ON TRACK?")&&!In[t[a]];)m=jn(`${m} ${t[a]}`.trim()),a+=1;const o=[];for(;a<t.length&&t[a].startsWith("☐");){const E=jn(t[a].replace(/^☐\s*/,"").trim()),p=`${v}:${qs(x)}:${o.length+1}`;o.push({key:p,text:E}),a+=1}for(s[x]||(s[x]={}),s[x][v]={domain:x,descriptor:m,checklist:o};a<t.length&&t[a]&&!In[t[a]];)a+=1}return s}const Xs=Js(zs);function Qs(n){return Ys[n]||null}function Un(n,t){var a;const s=Qs(n);return s&&((a=Xs[s])==null?void 0:a[t])||null}function Pt(n,t){if(!t||t.checklist.length===0)return{status:"on-track",completionPct:100,checkedCount:0,totalCount:0};const s=t.checklist.length,a=new Set(n),d=t.checklist.filter(x=>a.has(x.key)).length,v=Math.round(d/s*100);return v>=80?{status:"on-track",completionPct:v,checkedCount:d,totalCount:s}:v>=45?{status:"attention",completionPct:v,checkedCount:d,totalCount:s}:{status:"off-track",completionPct:v,checkedCount:d,totalCount:s}}function Zs(n){const t=Pt(n.checkedItemKeys,n.rule);return!n.rule||n.rule.checklist.length===0?{status:n.averageScore>=n.targetScore?"on-track":"attention",completionPct:t.completionPct,checkedCount:t.checkedCount,totalCount:t.totalCount}:t.status==="off-track"?t:n.averageScore<Math.max(1,n.targetScore-1)&&t.status!=="on-track"?{...t,status:"attention"}:t}const ea=["Strategic Direction and Leadership","People Experience and Culture","Planning and Risk","Skills and Behaviour","Process and Sustainment"],Vn={"Strategic Direction and Leadership":{outcome:"Provide a clear and unifying direction for the change, backed by visible, empowered leadership that removes barriers, prioritises resources, and drives accountability.",whatGoodLooksLike:"Leaders speak with one voice, consistently reinforcing the vision and outcomes. Decisions are timely, transparent, and aligned to strategic priorities. Governance is purposeful, with clear roles and escalations. Everyone understands why the change is happening and how it connects to organisational goals."},"People Experience and Culture":{outcome:"Create the conditions where people feel informed, supported, safe, and motivated, creating a culture that embraces the change rather than resists it.",whatGoodLooksLike:"Staff feel involved, heard, and respected. Communication is timely, honest, and tailored to different roles. People know how the change affects them and feel psychologically safe to raise concerns. Change Champions are active, engagement is high, and belief improves over time. Behaviours begin to shift organically as trust grows."},"Planning and Risk":{outcome:"Use evidence, data, and structured analysis to plan the change effectively, anticipate impacts, manage risks, and inform decision-making throughout delivery.",whatGoodLooksLike:"Impacts are well understood and documented. Risks are identified early and mitigated proactively. Baselines and KPIs are established before implementation, with benefits tracked throughout. Pilots and readiness checks ensure no surprises. Decisions are grounded in insight, not opinion."},"Skills and Behaviour":{outcome:"Give people the capabilities, confidence, and behavioural habits they need to adopt the new ways of working consistently and sustainably.",whatGoodLooksLike:"Staff are trained, assessed, and supported in ways that match real-world workflows. New behaviours are clearly defined, reinforced by leaders, and evident in day-to-day practice. Change Champions and Super-users are active; confidence grows over time; and requests for support decrease as competence increases."},"Process and Sustainment":{outcome:"Embed the change into operational processes, ensuring it becomes the way we do things, and create mechanisms for continuous improvement and long-term stability.",whatGoodLooksLike:"Updated SOPs, workflows, and ownership structures are in place and being followed. Issues are resolved quickly. Benefits are monitored and reported regularly. Improvements continue beyond go-live, with clear BAU ownership. The change stabilises and performance gains hold or increase over time."}},na={vision:"Defines the future state and why the change matters.",case_for_change:"Builds a clear, credible rationale and expected benefits.",sponsorship:"Secures visible leadership ownership, governance, and decisions.",change_network:"Builds and mobilises change agents and local champions.",benefits:"Tracks baseline, benefits ownership, and value realisation.",change_impact:"Assesses who is impacted and the scale of change required.",risk_management:"Identifies, tracks, and mitigates adoption and delivery risks.",cm_readiness:"Confirms readiness, sequencing, and change planning discipline.",stakeholder:"Plans and delivers stakeholder engagement and communications.",resistance:"Anticipates and addresses resistance with practical interventions.",skills_learning:"Designs learning, support, and reinforcement for role readiness.",capability:"Builds confidence and competence to adopt new ways of working.",change_adoption:"Measures uptake and consistency of new behaviours in practice.",process_change:"Embeds workflow changes into everyday operational delivery.",reinforcement:"Sustains momentum so adoption does not decay after launch.",org_maturity:"Improves long-term organisational change capability and maturity.",transfer_bau:"Transitions ownership into BAU with clear accountability."};function ta(n){return na[n]||"Component description not yet defined."}function sa(n){const s=Vn[n];return s?`This lens ${s.outcome.charAt(0).toLowerCase()}${s.outcome.slice(1)}`:"This lens provides an additional perspective on how each component is landing across teams and services."}function aa(n){return n<=0?"Green":n>=2?"Red":n>=1?"Amber":"Blue"}function Dt(n,t){if(n<=0)return"Amber";const s=t-n;return s>=2?"Red":s>0?"Amber":"Green"}const Tt={Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},oa={Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"};function ia(){return e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function at(n,t,s,a,d){return d?"Blue":s<=0?"N/A":a<=0?"Amber":n>=t&&a<s?"Green":Dt(n,t)}const ra={"N/A":"text-slate-600 bg-slate-200",Blue:"text-sky-800 bg-sky-100",Red:"text-red-800 bg-red-100",Amber:"text-amber-800 bg-amber-100",Green:"text-green-800 bg-green-100"},ot=["#0f766e","#0369a1","#7c3aed","#b45309","#be123c"],la=[{score:0,label:"Pre-Emergent",color:"#768692"},{score:1,label:"Emerging",color:"#AE2521"},{score:2,label:"Developing",color:"#FFB81C"},{score:3,label:"Maturing",color:"#005EB8"},{score:4,label:"Embedding",color:"#330072"},{score:5,label:"Thriving",color:"#00A499"}];function ca({store:n,components:t,lenses:s,metrics:a,getEntry:d,onComponentClick:v,pathway:x,pathwayChecks:m,onNavigate:o,onOpenLensInfo:E,onOpenOnboarding:p,colorAccessibilityMode:l="standard",darkMode:u=!1,phaseFocusMode:S="auto",manualPhaseFocus:z,onPhaseFocusModeChange:Y,onManualPhaseFocusChange:w,onResetPhaseFocus:$}){const[k,se]=c.useState(""),[A,B]=c.useState("all"),[G,ue]=c.useState("all"),[oe,re]=c.useState("all"),[te,ae]=c.useState("score"),[R,le]=c.useState("desc"),[be,j]=c.useState(!1),[q,J]=c.useState(!0),[xe,Pe]=c.useState(!1),Ie=c.useMemo(()=>[...new Set(t.map(h=>h.phase))].sort((h,L)=>h-L),[t]),f=a.currentPhase,N=S==="manual"&&z&&Ie.includes(z)?z:f,[de,Se]=c.useState(!0),V=c.useMemo(()=>n.history.length>0?n.history[n.history.length-1]:null,[n.history]),M=V!==null?a.overallPct-V.overallPercentage:null,Ne=c.useMemo(()=>{if(a.assessedCount===0)return!1;const h=new Date().toLocaleString("en-GB",{month:"short",year:"numeric"});return!n.history.some(L=>L.monthLabel===h)},[n.history,a.assessedCount]),g=c.useMemo(()=>{const h=new Date;h.setHours(0,0,0,0);const L=new Date(h);L.setDate(h.getDate()+7);const H=[];return t.forEach(ie=>{ie.lenses.forEach(he=>{d(ie.id,he).actions.forEach(Q=>{if(!Q.dueDate||Q.status==="Completed"||Q.status==="Cancelled")return;const we=new Date(Q.dueDate);isNaN(we.getTime())||we<=L&&H.push({action:Q,componentLabel:ie.label,componentId:ie.id,isOverdue:we<h})})})}),H.sort((ie,he)=>new Date(ie.action.dueDate).getTime()-new Date(he.action.dueDate).getTime())},[t,d,n.currentDraft]),I=c.useMemo(()=>{const h=k.trim().toLowerCase();return t.map(L=>{let H=0,ie=!0,he=0,Q=0;L.lenses.forEach(O=>{const ne=d(L.id,O),Z=Number(ne.score||0);H+=Z,Z!==5&&(ie=!1);const Ce=ne.actions||[];he+=Ce.length,Q+=Ce.filter(Ee=>Ee.status==="Completed").length});const we=Number((H/L.lenses.length).toFixed(1)),je=on(L.id,N,L.target),i=we===0?"not-started":we>=je?"on-track":"below-target";let y=null;if(V){let O=0;L.lenses.forEach(Ce=>{var Ee,ye;O+=Number(((ye=(Ee=V.data[L.id])==null?void 0:Ee[Ce])==null?void 0:ye.score)||0)});const ne=Number((O/L.lenses.length).toFixed(1)),Z=Number((we-ne).toFixed(1));Z!==0&&(y=Z)}return{component:L,avgNum:we,exemplarTarget:je,status:i,delta:y,actionCount:he,completedActionCount:Q,allLensesLevelFive:ie}}).filter(({component:L,status:H})=>A!=="all"&&H!==A||G!=="all"&&L.phase!==G?!1:h?L.label.toLowerCase().includes(h):!0).sort((L,H)=>{let ie=0;return te==="name"?ie=L.component.label.localeCompare(H.component.label):te==="target"?ie=L.component.target-H.component.target:ie=L.avgNum-H.avgNum,R==="asc"?ie:-ie})},[t,G,N,d,V,k,te,R,A]),C=c.useMemo(()=>S==="auto"?a.nextSteps:t.map(h=>{let L=0,H=0,ie=0;h.lenses.forEach(y=>{const O=d(h.id,y);L+=Number(O.score||0);const ne=O.actions||[];H+=ne.length,ie+=ne.filter(Z=>Z.status==="Completed").length});const he=Number((L/h.lenses.length).toFixed(1)),Q=on(h.id,N,h.target),we=Number(Math.max(0,Q-he).toFixed(1)),je=Math.max(0,H-ie),i=je>0?`Complete ${je} open action(s).`:"Create at least one delivery action linked to this component.";return{componentId:h.id,componentLabel:h.label,phase:h.phase,gapToTarget:we,message:`Raise ${h.label} from ${he.toFixed(1)} to exemplar ${Q.toFixed(1)}. ${i}`,toolkitLinks:[]}}).filter(h=>h.phase<=N+1&&h.gapToTarget>=0).sort((h,L)=>h.phase!==L.phase?h.phase-L.phase:L.gapToTarget-h.gapToTarget).slice(0,3),[t,N,d,a.nextSteps,S]),_=c.useMemo(()=>{let h=0,L=0;t.forEach(ie=>{var we;const he=Un(ie.id,x),Q=Pt(((we=m[ie.id])==null?void 0:we[x])||[],he);h+=Q.totalCount,L+=Q.checkedCount});const H=h>0?Math.round(L/h*100):100;return{required:h,checked:L,pct:H}},[t,x,m]),P=c.useMemo(()=>{const h=[];return k.trim()&&h.push(`Search: ${k.trim()}`),A!=="all"&&h.push(`Status: ${A.replace("-"," ")}`),G!=="all"&&h.push(`Phase: ${G}`),(te!=="score"||R!=="desc")&&h.push(`Sort: ${te} (${R})`),h},[G,k,te,R,A]),ge=()=>{se(""),B("all"),ue("all"),ae("score"),le("desc"),j(!1)},pe=a.phaseSummaries.find(h=>h.phase===N),ee=(pe==null?void 0:pe.rag)||"Red",De=ee.toLowerCase(),ze=l==="color-blind-friendly"?{"N/A":"text-slate-700 bg-slate-200",Blue:"text-cyan-900 bg-cyan-100",Red:"text-rose-900 bg-rose-100",Amber:"text-orange-900 bg-orange-100",Green:"text-teal-900 bg-teal-100"}:ra,Ge=l==="color-blind-friendly"?oa:Tt;return e.jsxs("div",{className:`adoption-dashboard max-w-6xl mx-auto ${u?"theme-dark":"theme-light"}`,children:[de&&g.length>0&&e.jsx("div",{className:"mb-6 rounded-lg border border-red-200 bg-red-50 p-4",children:e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-sm font-semibold text-red-800 mb-2",children:[g.filter(h=>h.isOverdue).length>0&&`${g.filter(h=>h.isOverdue).length} overdue action${g.filter(h=>h.isOverdue).length>1?"s":""}`,g.filter(h=>h.isOverdue).length>0&&g.filter(h=>!h.isOverdue).length>0&&", ",g.filter(h=>!h.isOverdue).length>0&&`${g.filter(h=>!h.isOverdue).length} due within 7 days`]}),e.jsxs("ul",{className:"space-y-1.5",children:[g.slice(0,3).map(h=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`shrink-0 text-xs font-bold px-1.5 py-0.5 rounded ${h.isOverdue?"bg-red-200 text-red-800":"bg-amber-100 text-amber-800"}`,children:h.isOverdue?"Overdue":"Due soon"}),e.jsxs("span",{className:"text-xs text-slate-700",children:[e.jsx("button",{onClick:()=>v(h.componentId),className:"font-medium text-[#005eb8] hover:underline mr-1",children:h.componentLabel}),"— ",h.action.text,h.action.dueDate&&e.jsxs("span",{className:"text-slate-400 ml-1",children:["(due"," ",new Date(h.action.dueDate).toLocaleDateString("en-GB",{day:"numeric",month:"short"}),")"]})]})]},h.action.id)),g.length>3&&e.jsxs("li",{className:"text-xs text-slate-500 pl-1",children:["+ ",g.length-3," more - see the Action Tracker for the full list."]})]})]}),e.jsx("button",{onClick:()=>Se(!1),className:"shrink-0 text-slate-400 hover:text-slate-600 text-xl leading-none","aria-label":"Dismiss",children:"×"})]})}),e.jsxs("div",{className:"mb-1 flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h2",{className:`text-2xl font-bold ${u?"text-slate-100":"text-slate-800"}`,children:"Adoption Engine Dashboard"}),p?e.jsx("button",{type:"button",onClick:p,className:"rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Show introduction again"}):null]}),e.jsxs("p",{className:`text-sm mb-6 ${u?"text-slate-300":"text-slate-600"}`,children:["This tracks how ready ",n.orgProfile.projectName||"your programme"," is for adoption, based on ",t.length," change-management components, each assessed through up to"," ",s.length," lenses."]}),e.jsxs("div",{className:"dashboard-callout dashboard-callout--pathway mb-6 rounded-lg border p-4",children:[e.jsx("p",{className:"dashboard-callout__eyebrow text-xs font-semibold uppercase tracking-wider",children:"Current CST pathway"}),e.jsx("p",{className:"dashboard-callout__title mt-1 text-sm font-semibold",children:At[x]}),e.jsxs("p",{className:"dashboard-callout__body mt-1 text-sm",children:["Pathway checklist completion: ",_.checked,"/",_.required," (",_.pct,"%)."]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[e.jsxs("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${u?"text-slate-300":"text-slate-500"}`,children:"Live Delivery Progress"}),e.jsxs("div",{className:"flex items-end gap-3",children:[e.jsxs("span",{className:"text-4xl font-bold text-[#005eb8]",children:[a.overallPct,"%"]}),M!==null&&e.jsxs("span",{className:`text-sm font-semibold mb-1 ${M>0?"text-green-600":M<0?"text-red-500":"text-slate-400"}`,children:[M>0?"↑":M<0?"↓":"="," ",Math.abs(M),"% vs last month"]})]}),e.jsx("div",{className:"mt-4 w-full bg-slate-100 rounded-full h-3 relative overflow-hidden",children:e.jsx("div",{className:"absolute top-0 left-0 h-full bg-[#005eb8]",style:{width:`${a.overallPct}%`}})}),e.jsx("div",{className:"flex justify-between text-xs mt-2 text-slate-400",children:e.jsx("span",{children:"Derived from current working data across all components."})})]}),e.jsxs("div",{className:`dashboard-metric-card dashboard-metric-card--phase dashboard-metric-card--${De} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:"dashboard-metric-card__label text-sm font-medium mb-1",children:"Current Phase Focus"}),e.jsxs("div",{className:"mb-2 flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>Y==null?void 0:Y("auto"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${S==="auto"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Auto"}),e.jsx("button",{type:"button",onClick:()=>Y==null?void 0:Y("manual"),className:`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${S==="manual"?"border-blue-700 bg-[#005eb8] text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"}`,children:"Manual"}),S==="manual"?e.jsx("select",{value:N,onChange:h=>w==null?void 0:w(Number(h.target.value)),className:"rounded-md border border-white/50 bg-white/90 px-2 py-1 text-xs font-medium text-slate-800","aria-label":"Manual phase focus",children:Ie.map(h=>e.jsx("option",{value:h,children:Ke[h]||`Phase ${h}`},h))}):null,S==="manual"&&$?e.jsx("button",{type:"button",onClick:$,className:"rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100",children:"Reset to suggested"}):null]}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsx("span",{className:"dashboard-metric-card__headline text-4xl font-bold",children:Ke[N]||`Phase ${N}`})}),e.jsxs("p",{className:"dashboard-metric-card__description text-sm mt-2",children:[ee," status based on delivery progress and action completion.",S==="manual"?` Suggested phase is ${Ke[f]||`Phase ${f}`}.`:""]})]}),e.jsxs("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border`,children:[e.jsx("h3",{className:`text-sm font-medium mb-1 ${u?"text-slate-300":"text-slate-500"}`,children:"Action Completion"}),e.jsx("div",{className:"flex items-end space-x-2",children:e.jsxs("span",{className:`text-4xl font-bold ${u?"text-slate-100":"text-slate-700"}`,children:[a.actionCompletionPct,"%"]})}),e.jsxs("p",{className:`text-sm mt-2 ${u?"text-slate-300":"text-slate-500"}`,children:[a.completedActions," of ",a.totalActions," actions completed."]})]})]}),e.jsxs("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"What To Do Next"}),e.jsx("span",{className:`text-xs ${u?"text-slate-400":"text-slate-500"}`,children:"Prioritised for live delivery"})]}),e.jsxs("p",{className:`text-sm mb-4 ${u?"text-slate-300":"text-slate-500"}`,children:["These are the biggest gaps to target for your",S==="manual"?" selected focus phase":" current phase",", largest gap first."]}),C.length>0?e.jsx("div",{className:"space-y-3",children:C.map(h=>{var H;const L=aa(h.gapToTarget);return e.jsxs("button",{onClick:()=>v(h.componentId),className:`w-full text-left rounded-md border p-3 hover:border-blue-300 transition-colors ${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("span",{className:`text-sm font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:h.componentLabel}),e.jsx("span",{className:`text-xs font-semibold rounded px-2.5 py-0.5 ${Ge[L]}`,children:L})]}),e.jsx("p",{className:`text-sm mt-1 ${u?"text-slate-300":"text-slate-600"}`,children:h.message}),(H=h.toolkitLinks)!=null&&H.length?e.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:h.toolkitLinks.map(ie=>e.jsx("a",{href:ie.url,target:"_blank",rel:"noopener noreferrer",onClick:he=>he.stopPropagation(),className:"text-xs font-medium text-[#005eb8] underline",children:ie.label},`${h.componentId}-${ie.url}`))}):null]},`${h.componentId}-${h.phase}`)})}):e.jsx("p",{className:"text-sm text-slate-500",children:"No priority gaps detected for the current phase. Continue tracking actions and maintain evidence quality."})]}),Ne&&e.jsxs("div",{className:"dashboard-callout dashboard-callout--snapshot rounded-lg border p-4 flex items-center gap-3 mb-8",children:[e.jsx("span",{className:"dashboard-callout__icon text-xl shrink-0",children:"📅"}),e.jsxs("p",{className:"dashboard-callout__body text-sm",children:[e.jsx("strong",{children:"This month hasn't been recorded yet."})," Use"," ",e.jsx("span",{className:"font-semibold",children:"'Finalise Month'"})," in the header to snapshot today's progress and build your delivery trajectory."]})]}),a.assessedCount===0?e.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-8 border border-slate-200 mb-8 text-center",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800",children:"Getting started"}),e.jsx("p",{className:"text-sm text-slate-600 mt-2 max-w-xl mx-auto",children:"Nothing has been assessed yet, so there's nothing to chart. Set up your CST Personalisation first, then start scoring your first component to see your readiness build up here."}),e.jsxs("div",{className:"mt-4 flex items-center justify-center gap-3",children:[o?e.jsx("button",{type:"button",onClick:()=>o("project-details"),className:"rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Set up your CST Personalisation"}):null,t[0]?e.jsx("button",{type:"button",onClick:()=>v(t[0].id),className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Start your first assessment"}):null]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-1 ${u?"text-slate-100":"text-slate-800"}`,children:"Phase Progress (RAG)"}),e.jsxs("p",{className:`text-sm mb-4 ${u?"text-slate-300":"text-slate-500"}`,children:["Phases run 1 to 5, from early readiness at go-live through to fully embedding the change."," ",o?e.jsx("button",{type:"button",onClick:()=>o("cm-guide"),className:"font-medium text-[#005eb8] hover:underline",children:"See Adoption Engine Onboarding"}):null]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:a.phaseSummaries.map(h=>{const L=h.rag==="Green"?"bg-green-100 text-green-700":h.rag==="Amber"?"bg-amber-100 text-amber-700":"bg-red-100 text-red-700",H=h.totalLenses?Math.round(h.assessedLenses/h.totalLenses*100):0;return e.jsxs("div",{className:`rounded-md border p-4 ${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:`font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:Ke[h.phase]||`Phase ${h.phase}`}),e.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded ${L}`,children:h.rag})]}),e.jsxs("p",{className:`text-xs ${u?"text-slate-300":"text-slate-600"}`,children:[h.onTrackComponents,"/",h.componentCount," components on target"]}),e.jsxs("p",{className:`text-xs mt-1 ${u?"text-slate-300":"text-slate-600"}`,children:[H,"% lens coverage, ",h.actionCompletionPct,"% actions complete"]})]},h.phase)})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"order-2 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8",children:[e.jsxs("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border flex flex-col`,children:[e.jsx("h3",{className:`text-lg font-semibold mb-4 ${u?"text-slate-100":"text-slate-800"}`,children:"Readiness Trajectory"}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${u?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:n.history.length>0?e.jsx("canvas",{id:"adoption-line-chart"}):e.jsx("div",{className:"text-center text-slate-400",children:e.jsx("p",{children:"No historical data yet. Finalise your first month to generate trends."})})})]}),e.jsxs("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border flex flex-col`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:`text-lg font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Strategic Lenses Spread"}),E&&s[0]?e.jsx("button",{type:"button",onClick:()=>E(s[0]),className:"text-xs font-medium text-[#005eb8] hover:underline",children:"What's a lens?"}):null]}),e.jsx("div",{className:`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${u?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-100"}`,children:e.jsx("canvas",{id:"adoption-radar-chart"})}),e.jsxs("div",{className:`${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mt-4 rounded-md border p-3`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${u?"text-slate-300":"text-slate-600"}`,children:"Lens key"}),e.jsx("div",{className:"mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2",children:s.map((h,L)=>e.jsxs("div",{className:`flex items-center gap-2 text-xs ${u?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full",style:{backgroundColor:ot[L%ot.length]},"aria-hidden":"true"}),e.jsx("span",{children:h})]},`lens-key-${h}`))})]}),e.jsx("p",{className:`text-xs text-center mt-4 ${u?"text-slate-300":"text-slate-500"}`,children:"Visualises your current draft readiness score averaged across the 5 strategic lenses against their specific target reiquirements."})]})]}),e.jsxs("div",{className:`order-1 ${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"mb-4 flex w-full flex-col gap-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:`text-lg font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Change Component Radar"}),e.jsx("p",{className:`text-xs mt-1 ${u?"text-slate-300":"text-slate-500"}`,children:"Show or hide the change-component readiness radar, then use the overview list below to drill into delivery status."})]}),e.jsx("div",{className:"flex w-full justify-end",children:e.jsx("button",{type:"button",onClick:()=>J(h=>!h),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-white",children:q?"Hide change component radar":"Show change component radar"})})]}),q?e.jsxs("div",{className:`w-full ${u?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("div",{className:`flex min-h-[720px] w-full items-center justify-center rounded border p-2 ${u?"border-slate-700 bg-slate-950":"border-slate-100 bg-white"}`,children:e.jsx("canvas",{id:"adoption-component-radar-chart",className:"block h-full w-full"})}),e.jsx("div",{id:"radar-legend",className:`mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm ${u?"text-slate-300":"text-slate-600"}`,children:la.map(h=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mr-2 h-3 w-3 rounded-full",style:{backgroundColor:h.color}}),e.jsxs("span",{children:[h.score," = ",h.label]})]},h.score))}),e.jsx("p",{className:`mt-4 text-center text-xs ${u?"text-slate-300":"text-slate-500"}`,children:"Visualises the average readiness score for each component against the phase exemplar profile."})]}):null,e.jsxs("div",{className:"mt-4 w-full space-y-3",children:[e.jsxs("p",{className:`text-xs ${u?"text-slate-300":"text-slate-500"}`,children:["BRAG scoring is used for the change component overview:",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-sky-100 text-sky-800",children:"Blue"})," = every lens is level 5,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-green-100 text-green-800",children:"Green"})," = on target,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-red-100 text-red-800",children:"Red"})," = behind target dates,"," ",e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-amber-100 text-amber-800",children:"Amber"})," = at risk / nearing deadline."]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:[e.jsx("input",{type:"search",value:k,onChange:h=>se(h.target.value),placeholder:"Search components...",className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"}),e.jsxs("select",{value:A,onChange:h=>B(h.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All statuses"}),e.jsx("option",{value:"not-started",children:"Not started"}),e.jsx("option",{value:"below-target",children:"Below target"}),e.jsx("option",{value:"on-track",children:"On track"})]}),e.jsxs("select",{value:G,onChange:h=>ue(h.target.value==="all"?"all":Number(h.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"all",children:"All phases"}),Ie.map(h=>e.jsx("option",{value:h,children:Ke[h]||`Phase ${h}`},h))]})]}),e.jsx(jt,{showAdvancedControls:be,onToggleAdvanced:()=>j(h=>!h),onReset:ge,resultText:`Showing ${I.length} components`,activeFilters:P,activeFiltersAriaLabel:"Active component filters",darkMode:u}),be?e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-md border border-slate-200 bg-slate-50 p-3",children:[e.jsxs("select",{value:te,onChange:h=>ae(h.target.value),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500",children:[e.jsx("option",{value:"score",children:"Sort by score"}),e.jsx("option",{value:"name",children:"Sort by name"}),e.jsx("option",{value:"target",children:"Sort by target"})]}),e.jsx("button",{type:"button",onClick:()=>le(h=>h==="asc"?"desc":"asc"),className:"rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white transition-colors",children:R==="asc"?"Ascending":"Descending"})]}):null]}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:[I.map(({component:h,avgNum:L,exemplarTarget:H,actionCount:ie,completedActionCount:he,delta:Q,allLensesLevelFive:we})=>{const je=at(L,H,ie,he,we),i=je==="Red"?"↓":L>=H?"→":L<=0?"↑":"↗",y=je==="Red"?"text-red-500":L>=H?u?"text-slate-300":"text-slate-500":"text-amber-600";return e.jsxs("button",{onClick:()=>v(h.id),title:ta(h.id),className:`flex justify-between items-center p-3 rounded-md transition-colors group text-left ${u?"bg-slate-900 border border-slate-700 hover:border-blue-400":"bg-slate-50 border border-slate-100 hover:border-blue-300"}`,children:[e.jsx("span",{className:`text-sm font-medium truncate pr-2 group-hover:text-[#005eb8] ${u?"text-slate-100":"text-slate-700"}`,children:h.label}),e.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[e.jsx("span",{className:`text-xs font-semibold ${y}`,title:L>=H?"On or above expected readiness for phase focus":L<=0?"Not started: raise towards expected readiness":"Below expected readiness: continue improving","aria-label":L>=H?"At expected readiness":L<=0?"Not started, increase readiness":"Below expected readiness",children:i}),Q!==null&&e.jsxs("span",{className:`text-[11px] font-semibold ${Q>0?"text-green-600":"text-red-400"}`,title:"Change versus last finalised month",children:[Q>0?"+":"",Q.toFixed(1)]}),e.jsx("span",{className:`text-xs font-bold px-2.5 py-1 rounded ${ze[je]}`,children:je})]})]},h.id)}),!I.length&&e.jsx("div",{className:`col-span-full rounded-md border border-dashed p-6 text-sm ${u?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-500"}`,children:"No components match the current filters."})]})]})]}),e.jsxs("div",{className:`${u?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm p-6 border mb-8`,children:[e.jsxs("div",{className:"flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h3",{className:`text-lg font-semibold ${u?"text-slate-100":"text-slate-800"}`,children:"Lenses and which components they apply to"}),e.jsx("button",{type:"button",onClick:()=>Pe(h=>!h),className:"inline-flex items-center justify-center rounded-full p-1 text-slate-500 hover:text-[#005eb8]","aria-label":"Explain lenses and components",title:"Explain lenses and components",children:e.jsx(ia,{})})]}),xe?e.jsx("p",{className:"mt-2 text-xs text-slate-600 max-w-3xl",children:"A component is the change topic you are delivering (for example, Vision). A lens is the angle used to assess that component. For example, Vision is reviewed through Strategic Direction and Leadership and People Experience and Culture to check both leadership alignment and whether people understand and believe in the vision."}):null]}),e.jsxs("select",{value:oe,onChange:h=>re(h.target.value==="all"?"all":Number(h.target.value)),className:"rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:w-40",children:[e.jsx("option",{value:"all",children:"All phases"}),Ie.map(h=>e.jsx("option",{value:h,children:Ke[h]||`Phase ${h}`},h)),'"']})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(h=>{const L=t.filter(H=>H.lenses.includes(h)).filter(H=>oe==="all"||H.phase===oe);return L.length?e.jsxs("div",{className:`rounded-md p-4 ${u?"border border-slate-700 bg-slate-900":"border border-slate-100 bg-slate-50"}`,children:[e.jsx("h4",{className:"font-bold text-sm text-[#005eb8] mb-3",children:h}),e.jsx("p",{className:`mb-3 text-xs ${u?"text-slate-300":"text-slate-600"}`,children:sa(h)}),e.jsx("ul",{className:"space-y-2",children:L.map(H=>{const ie=d(H.id,h),he=Number(ie.score||0),Q=on(H.id,N,H.target),we=ie.actions||[],je=at(he,Q,we.length,we.filter(i=>i.status==="Completed").length,!1);return e.jsxs("li",{className:`text-xs flex justify-between items-center p-2 rounded ${u?"bg-slate-800 border border-slate-700":"bg-white border border-slate-100"}`,children:[e.jsx("span",{className:`truncate pr-2 font-medium ${u?"text-slate-100":"text-slate-700"}`,children:H.label}),e.jsx("button",{onClick:()=>v(H.id),className:`px-2.5 py-0.5 rounded font-bold ${ze[je]}`,children:je})]},H.id)})})]},h):null})})]})]})]})}const da=vs.filter(n=>n!=="Overdue start"&&n!=="Overdue completion"),it=[0,1,2,3,4,5],ma={0:"Not Started",1:"Emerging",2:"Developing",3:"Embedding",4:"Adopted",5:"Thriving"},rt={"Not Started":"bg-slate-100 text-slate-700 border-slate-200","In Progress":"bg-blue-100 text-blue-800 border-blue-200",Blocked:"bg-amber-100 text-amber-800 border-amber-200",Completed:"bg-green-100 text-green-800 border-green-200"},Ln="__evidence_json__:",ua=1024*1024;function ga(n,t,s){return(s[n]||[]).filter(a=>a.linkedActions.some(d=>d.actionId===t))}function $t(n){const t=n.trim();return t?/^https?:\/\//i.test(t)?t:/^www\./i.test(t)?`https://${t}`:t:""}function lt(n){const t=(n==null?void 0:n.trim())||"";if(!t)return[];if(t.startsWith(Ln))try{const s=JSON.parse(t.slice(Ln.length));return Array.isArray(s)?s.filter(a=>a&&(a.type==="url"||a.type==="file")).map(a=>({type:a.type,label:String(a.label||"").trim(),href:String(a.href||"").trim()})).filter(a=>a.label||a.href):[]}catch{return[]}return t.split(`
`).map(s=>s.trim()).filter(Boolean).map(s=>{const a=$t(s);return{type:"url",label:s,href:a}})}function pa(n){const t=n.map(s=>({type:s.type,label:s.label.trim(),href:s.href.trim()})).filter(s=>s.label||s.href);return t.length?`${Ln}${JSON.stringify(t)}`:""}function ha(n){return new Promise((t,s)=>{const a=new FileReader;a.onload=()=>t(String(a.result||"")),a.onerror=()=>s(new Error("Unable to read file.")),a.readAsDataURL(n)})}function fa(){return e.jsx("svg",{className:"w-4 h-4 text-blue-500 mt-0.5 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function ba(){return e.jsxs("svg",{className:"w-4 h-4 mr-1.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z"})]})}function xa(){return e.jsx("svg",{className:"w-4 h-4 mr-1.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.964 9.964 0 012.042-3.368m2.16-1.989A9.962 9.962 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.05 10.05 0 01-4.132 5.411M15 12a3 3 0 00-3-3m0 0a2.99 2.99 0 00-2.13.88M3 3l18 18"})})}function Sa(){return e.jsx("svg",{className:"w-5 h-5 ml-2 text-slate-400 group-hover:text-[#005eb8] shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function va(n,t,s){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,text:"",actionType:"Admin",owner:"",timescale:"",status:"Planned",phase:n,startDate:"",dueDate:"",notes:"",evidence:"",linkedTargets:[{componentId:t,lens:s}]}}function Be(n,t,s){const a=n.linkedTargets||[];if(!a.length)return[{componentId:t,lens:s}];const d=new Set,v=[];return a.forEach(x=>{const m=`${x.componentId}:${x.lens}`;d.has(m)||(d.add(m),v.push({componentId:x.componentId,lens:x.lens}))}),v}function ya({store:n,components:t,activeComponentId:s,getRubricText:a,getEntry:d,onComponentChange:v,onEntryUpdate:x,onOpenLensInfo:m,onMatrixToggle:o,onActionRemove:E,onObjectivesUpdate:p,darkMode:l=!1}){var he,Q,we,je;const u=t.find(i=>i.id===s)||t[0],[S,z]=c.useState(null),[Y,w]=c.useState(null),[$,k]=c.useState(!0),[se,A]=c.useState(!0),[B,G]=c.useState(!0),[ue,oe]=c.useState({}),[re,te]=c.useState({}),ae=((he=n.objectives)==null?void 0:he[u.id])||[],R=c.useMemo(()=>{const i={};return u.lenses.forEach(y=>{i[y]=d(u.id,y).actions||[]}),i},[u.id,u.lenses,d]),le=c.useMemo(()=>u.lenses.reduce((i,y)=>i+(d(u.id,y).actions||[]).length,0),[u.id,u.lenses,d]),be=c.useMemo(()=>u.lenses.reduce((i,y)=>i+(d(u.id,y).actions||[]).filter(O=>$e(O.status)==="Completed").length,0),[u.id,u.lenses,d]),j=c.useMemo(()=>u.lenses.some(i=>Number(d(u.id,i).score||0)>0),[u.id,u.lenses,d]),q=c.useMemo(()=>{const i={};return Object.keys(n.currentDraft).forEach(y=>{Object.keys(n.currentDraft[y]||{}).forEach(O=>{(n.currentDraft[y][O].actions||[]).forEach(Z=>{Be(Z,y,O).forEach(Ee=>{const ye=`${Ee.componentId}:${Ee.lens}`;i[ye]||(i[ye]=[]),i[ye].push({sourceComponentId:y,sourceLens:O,action:Z,isLinkedView:!(Ee.componentId===y&&Ee.lens===O)})})})})}),i},[n.currentDraft]),J=c.useMemo(()=>{const i={};return t.forEach(y=>{i[y.id]=y}),i},[t]),xe=c.useMemo(()=>{const i=u.lenses[0];return i?d(u.id,i).justification:""},[u.id,u.lenses,d]),Pe=c.useMemo(()=>{var i;return S?((i=t.find(y=>y.id===S.sourceComponentId))==null?void 0:i.label)||S.sourceComponentId:u.label},[S,u.label,t]),Ie=c.useMemo(()=>{var y;if(!((y=S==null?void 0:S.action.text)!=null&&y.trim()))return"New action";const i=S.action.text.trim().replace(/\s+/g," ");return i.length>70?`${i.slice(0,70)}...`:i},[S]),f=c.useMemo(()=>ae.find(i=>i.id===(Y==null?void 0:Y.objectiveId))||null,[Y==null?void 0:Y.objectiveId,ae]),N=c.useMemo(()=>f?Dn(f,R):null,[f,R]),de=c.useMemo(()=>f?f.linkedActions.map(i=>{const y=(R[i.lens]||[]).find(Z=>Z.id===i.actionId),O=y?$e(y.status):null,ne=y?Qn(y.status,y.startDate,y.dueDate):null;return{lens:i.lens,action:y,status:O,temporalStatus:ne}}):[],[f,R]),Se=c.useCallback(i=>{v(i.target.value)},[v]),V=c.useCallback((i,y)=>{const O=d(u.id,i);x(u.id,i,{...O,score:y})},[u.id,d,x]),M=c.useCallback(i=>{u.lenses.forEach(y=>{const O=d(u.id,y);x(u.id,y,{...O,justification:i})})},[u.id,u.lenses,d,x]),Ne=c.useCallback((i,y)=>{const O=va(u.phase,u.id,i);y&&(O.text=y),z({sourceComponentId:u.id,sourceLens:i,mode:"create",action:O,evidenceItems:lt(O.evidence||""),linkedObjectiveIds:[],targetPickerComponentId:u.id,targetPickerLens:i})},[u.id,u.phase]),g=c.useCallback((i,y,O)=>{var Ee;const ne=Be(O,i,y),Z=ne[0]||{componentId:i,lens:y},Ce=(((Ee=n.objectives)==null?void 0:Ee[i])||[]).filter(ye=>ye.linkedActions.some(Ue=>Ue.actionId===O.id)).map(ye=>ye.id);z({sourceComponentId:i,sourceLens:y,mode:"edit",actionId:O.id,action:{...O,linkedTargets:ne,notes:O.notes||"",evidence:O.evidence||"",startDate:O.startDate||"",dueDate:O.dueDate||""},evidenceItems:lt(O.evidence||""),linkedObjectiveIds:Ce,targetPickerComponentId:Z.componentId,targetPickerLens:Z.lens})},[n.objectives]),I=()=>{z(null)},C=()=>{var Ee;if(!S)return;if(!S.action.text.trim()){window.alert("Action description is required.");return}const i={...S.action,evidence:pa(S.evidenceItems),status:$e(S.action.status),linkedTargets:Be(S.action,S.sourceComponentId,S.sourceLens),timescale:S.action.dueDate||S.action.startDate||S.action.timescale},y=d(S.sourceComponentId,S.sourceLens),O=S.mode==="create"?[...y.actions,i]:y.actions.map(ye=>ye.id===S.actionId?i:ye);x(S.sourceComponentId,S.sourceLens,{...y,actions:O});const ne=new Set(S.linkedObjectiveIds),Ce=(((Ee=n.objectives)==null?void 0:Ee[S.sourceComponentId])||[]).map(ye=>{const Ue=ye.linkedActions.filter(Te=>!(Te.lens===S.sourceLens&&Te.actionId===i.id));return ne.has(ye.id)?{...ye,linkedActions:[...Ue,{lens:S.sourceLens,actionId:i.id}]}:{...ye,linkedActions:Ue}});p(S.sourceComponentId,Ce),I()},_=i=>{z(y=>{if(!y)return y;const O={...y,action:{...y.action,...i}};return O.action.status=$e(O.action.status),O})},P=(i,y)=>{z(O=>O&&{...O,targetPickerComponentId:i,targetPickerLens:y})},ge=()=>{z(i=>{if(!i)return i;const y=J[i.targetPickerComponentId]||u,O=y.lenses.includes(i.targetPickerLens)?i.targetPickerLens:y.lenses[0];if(!O)return i;const ne=Be(i.action,i.sourceComponentId,i.sourceLens);return ne.some(Z=>Z.componentId===y.id&&Z.lens===O)?i:{...i,action:{...i.action,linkedTargets:[...ne,{componentId:y.id,lens:O}]}}})},pe=(i,y)=>{z(O=>{if(!O)return O;const Z=Be(O.action,O.sourceComponentId,O.sourceLens).filter(Ce=>!(Ce.componentId===i&&Ce.lens===y));return{...O,action:{...O.action,linkedTargets:Z}}})},ee=i=>{z(y=>{if(!y)return y;const O=new Set(y.linkedObjectiveIds);return O.has(i)?O.delete(i):O.add(i),{...y,linkedObjectiveIds:Array.from(O)}})},De=i=>{z(y=>y&&{...y,evidenceItems:i})},ze=()=>{if(!S)return;const i=S.evidenceItems;De([...i,{type:"url",label:"",href:""}])},Ge=(i,y,O)=>{if(!S)return;const ne=S.evidenceItems;if(!ne[i])return;const Z=[...ne];y==="href"?Z[i]={...Z[i],href:$t(O)}:Z[i]={...Z[i],label:O},De(Z)},h=i=>{if(!S)return;const y=S.evidenceItems;De(y.filter((O,ne)=>ne!==i))},L=async i=>{if(!S)return;const y=i.target.files;if(!(y!=null&&y.length))return;const ne=[...S.evidenceItems];for(const Z of Array.from(y)){if(Z.size>ua){window.alert(`"${Z.name}" is larger than 1MB. Please attach a URL instead.`);continue}try{const Ce=await ha(Z);ne.push({type:"file",label:Z.name,href:Ce})}catch{window.alert(`Unable to upload "${Z.name}".`)}}De(ne),i.target.value=""},H=(i,y)=>{y&&(w(null),g(u.id,i,y))},ie=i=>{const y=document.getElementById(i);y==null||y.scrollIntoView({behavior:"smooth",block:"start"})};return e.jsxs("div",{className:"max-w-5xl mx-auto pb-20",children:[e.jsxs("div",{className:"mb-8 flex items-center justify-between gap-4 flex-wrap",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:`text-3xl font-bold flex items-center ${l?"text-slate-100":"text-slate-800"}`,children:[u.label,e.jsx("span",{className:"bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-4 border border-blue-200",children:Ke[u.phase]||`Phase ${u.phase}`})]}),e.jsx("p",{className:`mt-2 ${l?"text-slate-300":"text-slate-500"}`,children:"Assess readiness at lens level. Change Component justification, outcomes, and actions are tracked below."})]}),e.jsx("select",{value:u.id,onChange:Se,className:`rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 text-sm font-medium border ${l?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:t.map(i=>e.jsx("option",{value:i.id,children:i.label},i.id))})]}),e.jsxs("div",{className:`${l?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mb-6 rounded-lg border p-4`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${l?"text-slate-300":"text-slate-600"}`,children:"Guided workflow"}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:()=>ie("assessment-scoring"),className:`${l?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"1. Justify"}),e.jsx("button",{type:"button",onClick:()=>ie("assessment-objectives"),className:`${l?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"2. Review outcomes"}),e.jsx("button",{type:"button",onClick:()=>ie("assessment-actions"),className:`${l?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-xs font-semibold`,children:"3. Plan lens actions"})]})]}),e.jsxs("div",{className:`mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${l?"border-emerald-500/40 bg-emerald-500/15 text-emerald-200":"border-emerald-200 bg-emerald-50 text-emerald-800"}`,children:[e.jsx("span",{className:"inline-block h-2 w-2 rounded-full bg-emerald-500","aria-hidden":"true"}),"Auto-save is on for scoring and component notes."]}),e.jsxs("div",{id:"assessment-scoring",className:`${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[e.jsx("h3",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:j?"Step 1: Justify":"Step 1: Justification of what is currently known"}),e.jsx("button",{type:"button",onClick:()=>k(i=>!i),className:`${l?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:$?"Hide":"Show"})]}),$?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:`block text-sm font-semibold mb-2 ${l?"text-slate-100":"text-slate-700"}`,children:"Change Component Justification"}),e.jsx("p",{className:`text-xs mb-2 ${l?"text-slate-300":"text-slate-500"}`,children:'Explain what is currently known, what evidence supports that view, and where the biggest gap sits. Example: "Sponsorship is visible only in two services; there is no monthly steering update yet; next step is to agree a trust-wide sponsor cadence."'}),e.jsx("textarea",{value:xe,onChange:i=>M(i.target.value),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-24 p-2 border ${l?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,placeholder:"Record what is currently known for this change component, the evidence behind it, and the key improvement needed next."})]}):null]}),e.jsxs("div",{id:"assessment-objectives",className:`${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-8 rounded-lg border p-5`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-1",children:[e.jsx("h3",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:"Step 2: Review outcomes"}),e.jsx("button",{type:"button",onClick:()=>A(i=>!i),className:`${l?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:se?"Hide":"Show"})]}),e.jsx("p",{className:`text-xs mb-3 ${l?"text-slate-300":"text-slate-500"}`,children:"Owned by this component as a whole. Status is derived automatically from the lens actions assigned to each outcome below and cannot be set manually."}),se?ae.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${l?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:l?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Linked Actions"})]})}),e.jsx("tbody",{className:`${l?"divide-slate-700":"divide-slate-100"} divide-y`,children:ae.map(i=>{const y=Dn(i,R),O=rt[y],ne=()=>w({objectiveId:i.id});return e.jsxs("tr",{onClick:ne,onKeyDown:Z=>{(Z.key==="Enter"||Z.key===" ")&&(Z.preventDefault(),ne())},tabIndex:0,className:`${l?"hover:bg-slate-700 focus-visible:bg-slate-700":"hover:bg-slate-50 focus-visible:bg-slate-50"} cursor-pointer focus:outline-none`,children:[e.jsx("td",{className:`px-3 py-2 text-sm ${l?"text-slate-100":"text-slate-800"}`,children:i.text||"Untitled outcome"}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${O}`,children:y})}),e.jsx("td",{className:`px-3 py-2 text-sm ${l?"text-slate-300":"text-slate-600"}`,children:i.linkedActions.length?`${i.linkedActions.length} action(s)`:"None assigned"})]},i.id)})})]})}):e.jsx("p",{className:"text-sm text-slate-500",children:"No outcomes yet."}):null]}),e.jsx("div",{id:"assessment-actions",className:`${l?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mb-3 rounded-lg border p-4`,children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:"Step 3: Plan lens actions"}),e.jsx("p",{className:`mt-1 text-xs ${l?"text-slate-300":"text-slate-600"}`,children:"Track delivery actions for each lens and link them to outcomes and affected component lenses."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:`${l?"bg-slate-800 border-slate-600 text-slate-100":"bg-white border-slate-300 text-slate-700"} rounded-full border px-2 py-1 text-xs`,children:[be,"/",le," completed"]}),e.jsx("button",{type:"button",onClick:()=>G(i=>!i),className:`${l?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1 text-xs font-semibold`,children:B?"Hide":"Show"})]})]})}),B?e.jsx("div",{className:"space-y-8",children:u.lenses.map(i=>{var ln;const y=d(u.id,i),O=`${u.id}:${i}`,ne=q[O]||[],Z=ne.some(F=>F.action.readinessScore===0),Ce=y.score===0&&!Z?1:y.score,Ee=!!((ln=n.showMatrix)!=null&&ln[`${u.id}:${i}`]),ye=re[O]||"all",Ue=Array.from(new Set(ne.map(F=>F.action.actionType).filter(F=>F!==void 0))).sort((F,fe)=>String(F).localeCompare(String(fe))),Te=[...ne].filter(F=>(F.action.readinessScore!==void 0?F.action.readinessScore:Ce)!==Ce?!1:ye==="all"||(F.action.actionType||"")===ye).sort((F,fe)=>{const Fe=$e(F.action.status)==="Completed",He=$e(fe.action.status)==="Completed";if(Fe!==He)return Fe?1:-1;const Ye=F.action.dueDate?new Date(F.action.dueDate).getTime():Number.POSITIVE_INFINITY,tn=fe.action.dueDate?new Date(fe.action.dueDate).getTime():Number.POSITIVE_INFINITY;return Ye-tn}),Ve=y.score>=u.target?"#22c55e":y.score>0?"#f59e0b":"#cbd5e1";return e.jsxs("div",{className:`${l?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border overflow-hidden`,children:[e.jsxs("div",{className:`${l?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} p-6 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4`,children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm font-bold uppercase tracking-wider text-blue-600 block mb-1",children:"Lens"}),e.jsxs("button",{onClick:()=>m(i),className:`flex items-center text-2xl font-semibold transition-colors group text-left ${l?"text-slate-100 hover:text-[#63b3ff]":"text-slate-800 hover:text-[#005eb8]"}`,title:"View Lens Information",children:[i,e.jsx(Sa,{})]})]}),e.jsxs("div",{className:"shrink-0 w-full md:w-64",children:[e.jsx("label",{className:`block text-xs font-semibold mb-1 ${l?"text-slate-300":"text-slate-500"}`,children:"Readiness Score"}),e.jsx("select",{value:y.score,onChange:F=>V(i,Number(F.target.value)),className:`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 text-sm font-medium border ${l?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,style:{borderLeftWidth:"4px",borderLeftColor:Ve},children:it.map(F=>e.jsxs("option",{value:F,children:[F," - ",ma[F]]},F))})]})]}),e.jsx("div",{className:`${l?"bg-slate-900 border-slate-700":"bg-blue-50/50 border-slate-100"} px-6 py-4 border-b text-sm`,children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start gap-4",children:[e.jsxs("div",{className:"flex items-start flex-1",children:[e.jsx(fa,{}),e.jsxs("p",{className:`whitespace-pre-line ${l?"text-slate-300":"text-slate-600"}`,children:[e.jsxs("strong",{className:l?"text-slate-100":"text-slate-700",children:[y.score===0?"Not Started":`Level ${y.score}`,":"]}),` ${a(u.id,i,y.score)}`]})]}),e.jsxs("button",{onClick:()=>o(`${u.id}:${i}`),className:`${l?"bg-slate-800 border-slate-600 text-[#63b3ff] hover:text-[#90cdf4]":"bg-white border-blue-200 text-[#005eb8] hover:text-blue-800"} shrink-0 text-xs font-semibold flex items-center px-3 py-1.5 border rounded shadow-sm transition-colors`,children:[Ee?e.jsx(xa,{}):e.jsx(ba,{}),Ee?"Hide Full Guidance":"View Full Guidance"]})]})}),Ee&&e.jsx("div",{className:`${l?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} px-6 py-5 border-b`,children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4",children:it.map(F=>{const Fe={0:"bg-white",1:"bg-rose-50",2:"bg-orange-50",3:"bg-yellow-50",4:"bg-green-50",5:"bg-blue-50"}[F]||"bg-white";return e.jsxs("button",{onClick:()=>V(i,F),className:`p-4 rounded-lg border shadow-sm text-left transition-colors h-full flex flex-col items-start justify-start ${y.score===F?`${Fe} border-[#005eb8] ring-1 ring-[#005eb8]`:`${Fe} border-slate-200 hover:border-blue-300`}`,children:[e.jsx("div",{className:`text-sm font-bold mb-2 pb-2 border-b w-full ${y.score===F?"text-[#005eb8] border-blue-200":"text-slate-700 border-slate-100"}`,children:F===0?"Not Started":`Level ${F}`}),e.jsx("p",{className:`text-xs whitespace-pre-line leading-relaxed text-left w-full ${l?"text-slate-200":"text-slate-600"}`,children:a(u.id,i,F)})]},F)})})}),e.jsxs("div",{className:`${l?"border-slate-700":"border-slate-100"} p-6 border-t`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:"Lens Actions"}),e.jsx("p",{className:`mt-1 text-xs ${l?"text-slate-300":"text-slate-500"}`,children:"Hierarchy: Outcome - Action - Affected component lenses."})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs("select",{"aria-label":`Filter ${i} actions by type`,value:ye,onChange:F=>te(fe=>({...fe,[O]:F.target.value})),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${l?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:[e.jsx("option",{value:"all",children:"All action types"}),[...new Set([...Rn,...Ue])].map(F=>e.jsx("option",{value:F,children:F},F))]}),e.jsx("button",{onClick:()=>Ne(i),className:"px-3 py-1.5 rounded bg-[#005eb8] text-white text-xs font-semibold shadow-[0_2px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Add Action"})]})]}),Te.length?e.jsx("div",{className:"overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:`min-w-full ${l?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:l?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Description"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action Type"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Start"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"End"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Affected Component Lenses"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Actions"})]})}),e.jsx("tbody",{className:`${l?"divide-slate-700":"divide-slate-100"} divide-y`,children:(ue[`${u.id}:${i}`]?Te:Te.slice(0,5)).map(F=>{var cn;const fe=F.action,Fe=$e(fe.status),He=Qn(fe.status,fe.startDate,fe.dueDate),Ye=He==="Overdue start"||He==="Overdue completion"?He:null,tn=((cn=J[F.sourceComponentId])==null?void 0:cn.label)||F.sourceComponentId,qe=ga(F.sourceComponentId,fe.id,n.objectives||{}),Kn=Be(fe,F.sourceComponentId,F.sourceLens).map(sn=>{var dn;return`${((dn=J[sn.componentId])==null?void 0:dn.label)||sn.componentId} / ${sn.lens}`}).join(", "),Je=en[Fe]||en.Planned;return e.jsxs("tr",{children:[e.jsxs("td",{className:`px-3 py-2 text-sm ${l?"text-slate-100":"text-slate-800"}`,children:[e.jsx("div",{children:fe.text||"Untitled action"}),F.isLinkedView?e.jsxs("div",{className:`mt-1 text-xs ${l?"text-indigo-300":"text-indigo-700"}`,children:["Linked from ",tn," /"," ",F.sourceLens]}):null]}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${Je}`,children:Fe}),Ye?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:Ye}):null,!qe.length&&e.jsx("div",{className:`mt-1 text-xs ${l?"text-amber-200":"text-amber-700"}`,children:"Not yet linked"})]}),e.jsx("td",{className:`px-3 py-2 text-sm ${l?"text-slate-100":"text-slate-700"}`,children:fe.actionType||"Unassigned"}),e.jsx("td",{className:`px-3 py-2 text-sm ${l?"text-slate-100":"text-slate-700"}`,children:fe.owner||"Unassigned"}),e.jsx("td",{className:`px-3 py-2 text-sm ${l?"text-slate-300":"text-slate-600"}`,children:fe.startDate||"-"}),e.jsx("td",{className:`px-3 py-2 text-sm ${l?"text-slate-300":"text-slate-600"}`,children:fe.dueDate||"-"}),e.jsx("td",{className:`px-3 py-2 text-xs ${l?"text-slate-300":"text-slate-600"}`,children:Kn}),e.jsx("td",{className:"px-3 py-2",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"button",onClick:()=>g(F.sourceComponentId,F.sourceLens,fe),className:`${l?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Edit"}),e.jsx("button",{type:"button",onClick:()=>E(F.sourceComponentId,F.sourceLens,fe.id),className:`${l?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Remove"})]})})]},`${F.sourceComponentId}:${F.sourceLens}:${fe.id}`)})})]})}):e.jsx("p",{className:`text-sm ${l?"text-slate-300":"text-slate-500"}`,children:"No actions yet for this lens."}),Te.length>5?e.jsx("button",{type:"button",onClick:()=>oe(F=>({...F,[`${u.id}:${i}`]:!F[`${u.id}:${i}`]})),className:`${l?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} mt-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:ue[`${u.id}:${i}`]?"Show top 5 actions":`Show all ${Te.length} actions`}):""]})]},i)})}):null,S?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${l?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-hidden rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("h3",{className:`text-lg font-semibold ${l?"text-slate-100":"text-slate-900"}`,children:[S.mode==="create"?"Create Action":"Edit Action"," ·"," ",Pe," / ",S.sourceLens," · ",Ie]}),e.jsx("button",{type:"button",onClick:I,className:`${l?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:"mt-4 max-h-[calc(100vh-13rem)] overflow-y-auto pr-1 grid gap-3",children:[e.jsx("div",{className:`${l?"border-slate-700 bg-slate-900":"border-blue-100 bg-white"} sticky top-0 z-10 rounded-md border px-3 py-2 shadow-sm`,children:e.jsxs("label",{className:`text-sm ${l?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Description"}),e.jsx("textarea",{value:S.action.text,onChange:i=>_({text:i.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${l?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})}),e.jsxs("div",{className:`${l?"border-slate-700 bg-slate-900 text-slate-200":"border-blue-100 bg-blue-50 text-slate-700"} rounded-md border px-3 py-2 text-xs`,children:[e.jsx("strong",{children:"Linking order:"})," first attach this action to one or more outcomes, then add affected component lenses (component + lens) where this action should appear."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsxs("label",{className:`text-sm ${l?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Action Type"}),e.jsx("select",{value:S.action.actionType||"Admin",onChange:i=>_({actionType:i.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${l?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:Rn.map(i=>e.jsx("option",{value:i,children:i},i))})]}),e.jsxs("label",{className:`text-sm ${l?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Owner"}),e.jsx("input",{value:S.action.owner,onChange:i=>_({owner:i.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${l?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("label",{className:`text-sm ${l?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Status"}),e.jsx("select",{value:S.action.status,onChange:i=>_({status:i.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${l?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:da.map(i=>e.jsx("option",{value:i,children:i},i))})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("label",{className:`text-sm ${l?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Start Date"}),e.jsx("input",{type:"date",value:S.action.startDate||"",onChange:i=>_({startDate:i.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${l?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("label",{className:`text-sm ${l?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"End Date"}),e.jsx("input",{type:"date",value:S.action.dueDate||"",onChange:i=>_({dueDate:i.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm ${l?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsxs("label",{className:`text-sm ${l?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-semibold",children:"Notes"}),e.jsx("textarea",{value:S.action.notes||"",onChange:i=>_({notes:i.target.value}),className:`w-full rounded-md border px-3 py-2 text-sm h-20 ${l?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]}),e.jsxs("div",{className:`${l?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:"Evidence Links / Docs"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{type:"button",onClick:ze,className:`${l?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Add web link"}),e.jsxs("label",{className:`${l?"border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-semibold`,children:["Upload file(s)",e.jsx("input",{type:"file",multiple:!0,className:"hidden",onChange:L})]})]})]}),e.jsx("p",{className:`mt-1 text-xs ${l?"text-slate-300":"text-slate-500"}`,children:"Add evidence as either web links or uploaded files. Everything appears below in a single list."}),e.jsx("div",{className:`${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:S.evidenceItems.length?S.evidenceItems.map((i,y)=>e.jsxs("div",{className:`${l?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} grid grid-cols-1 gap-2 rounded border p-2 md:grid-cols-[auto,1fr,1fr,auto]`,children:[e.jsx("div",{className:"flex items-start pt-2",children:e.jsx("span",{className:`${i.type==="file"?"bg-emerald-100 text-emerald-800":"bg-blue-100 text-blue-800"} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`,children:i.type==="file"?"File":"Link"})}),e.jsx("input",{value:i.label,onChange:O=>Ge(y,"label",O.target.value),placeholder:i.type==="file"?"Document label":"Link label",className:`rounded-md border px-2.5 py-2 text-sm ${l?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`}),e.jsx("input",{value:i.href,onChange:O=>Ge(y,"href",O.target.value),placeholder:i.type==="file"?"Embedded file URL (auto generated)":"https://...",className:`rounded-md border px-2.5 py-2 text-sm ${l?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,disabled:i.type==="file"}),e.jsx("button",{type:"button",onClick:()=>h(y),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},`${i.type}-${y}`)):e.jsx("p",{className:`px-2 py-1 text-sm ${l?"text-slate-300":"text-slate-500"}`,children:"No evidence links or documents added yet."})})]}),e.jsxs("div",{className:`${l?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsx("p",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:"Affected Outcomes"}),e.jsx("p",{className:`mt-1 text-xs ${l?"text-slate-300":"text-slate-500"}`,children:"Tick 1-3 outcomes directly impacted by this action. Outcome status is auto-derived from these linked actions."}),e.jsx("div",{className:`${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mt-2 space-y-2 rounded border p-2`,children:(((Q=n.objectives)==null?void 0:Q[S.sourceComponentId])||[]).length?(((we=n.objectives)==null?void 0:we[S.sourceComponentId])||[]).map(i=>{const y=S.linkedObjectiveIds.includes(i.id);return e.jsxs("label",{className:`${l?"hover:bg-slate-700":"hover:bg-slate-50"} flex items-start gap-2 rounded px-2 py-1.5`,children:[e.jsx("input",{type:"checkbox",checked:y,onChange:()=>ee(i.id),className:"mt-0.5"}),e.jsx("span",{className:`text-sm ${l?"text-slate-100":"text-slate-700"}`,children:i.text||"Untitled outcome"})]},i.id)}):e.jsx("p",{className:`px-2 py-1 text-sm ${l?"text-slate-300":"text-slate-500"}`,children:"No outcomes are defined for this component yet."})})]}),e.jsxs("div",{className:`${l?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-lg border p-3`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${l?"text-slate-100":"text-slate-800"}`,children:"Affected Component Lenses"}),e.jsx("span",{className:"inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-600",title:"Actions often contribute to other component lenses. Add those targets here so the same action is visible in each relevant lens.",children:"i"})]}),e.jsxs("div",{className:"mt-2 space-y-2",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2",children:[e.jsx("select",{value:S.targetPickerComponentId,onChange:i=>{const y=i.target.value,O=J[y];P(y,(O==null?void 0:O.lenses[0])||"")},className:`rounded-md border px-2.5 py-2 text-sm ${l?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:t.map(i=>e.jsx("option",{value:i.id,children:i.label},i.id))}),e.jsx("select",{value:S.targetPickerLens,onChange:i=>P(S.targetPickerComponentId,i.target.value),className:`rounded-md border px-2.5 py-2 text-sm ${l?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:(((je=J[S.targetPickerComponentId])==null?void 0:je.lenses)||[]).map(i=>e.jsx("option",{value:i,children:i},i))}),e.jsx("button",{type:"button",onClick:ge,disabled:Be(S.action,S.sourceComponentId,S.sourceLens).some(i=>i.componentId===S.targetPickerComponentId&&i.lens===S.targetPickerLens),title:Be(S.action,S.sourceComponentId,S.sourceLens).some(i=>i.componentId===S.targetPickerComponentId&&i.lens===S.targetPickerLens)?"Already added":"Add selected affected lens",className:`${l?"border-cyan-500/50 bg-cyan-500/15 text-cyan-100 hover:bg-cyan-500/25":"border-cyan-300 bg-cyan-100 text-cyan-900 hover:bg-cyan-200"} rounded-md border px-3 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-60`,children:"Add Lens"})]}),e.jsx("div",{className:`${l?"border-slate-700":"border-slate-200"} overflow-hidden rounded border`,children:e.jsxs("table",{className:`min-w-full ${l?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"} divide-y`,children:[e.jsx("thead",{className:l?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Component"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Remove"})]})}),e.jsx("tbody",{className:`${l?"divide-slate-700":"divide-slate-100"} divide-y`,children:Be(S.action,S.sourceComponentId,S.sourceLens).map(i=>{var y;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-2.5 py-2 text-sm ${l?"text-slate-100":"text-slate-700"}`,children:((y=J[i.componentId])==null?void 0:y.label)||i.componentId}),e.jsx("td",{className:`px-2.5 py-2 text-sm ${l?"text-slate-100":"text-slate-700"}`,children:i.lens}),e.jsx("td",{className:"px-2.5 py-2",children:e.jsx("button",{type:"button",onClick:()=>pe(i.componentId,i.lens),className:"rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},`${i.componentId}:${i.lens}`)})})]})})]})]})]}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:I,className:`${l?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-4 py-2 text-sm font-semibold`,children:"Cancel"}),e.jsx("button",{type:"button",onClick:C,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",children:"Save Action"})]})]})}):null,Y&&f&&N?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":"Outcome Details",className:`w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${l?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${l?"text-slate-100":"text-slate-900"}`,children:"Outcome Details"}),e.jsx("button",{type:"button",onClick:()=>w(null),className:`${l?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${l?"text-slate-400":"text-slate-500"}`,children:"Outcome"}),e.jsx("p",{className:`mt-1 text-sm ${l?"text-slate-100":"text-slate-900"}`,children:f.text||"Untitled outcome"})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${l?"text-slate-400":"text-slate-500"}`,children:"Status"}),e.jsx("span",{className:`mt-1 inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${rt[N]}`,children:N})]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${l?"text-slate-400":"text-slate-500"}`,children:"Linked Actions"}),de.length?e.jsx("div",{className:`mt-2 overflow-x-auto rounded-md border ${l?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:`min-w-full divide-y ${l?"divide-slate-700 bg-slate-800":"divide-slate-200 bg-white"}`,children:[e.jsx("thead",{className:l?"bg-slate-900":"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Lens"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current State"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Navigate"})]})}),e.jsx("tbody",{className:`divide-y ${l?"divide-slate-700":"divide-slate-100"}`,children:de.map(i=>{var O,ne;const y=i.status?en[i.status]||en.Planned:en.Planned;return e.jsxs("tr",{children:[e.jsx("td",{className:`px-3 py-2 text-sm ${l?"text-slate-100":"text-slate-700"}`,children:i.lens}),e.jsx("td",{className:`px-3 py-2 text-sm ${l?"text-slate-100":"text-slate-700"}`,children:((O=i.action)==null?void 0:O.text)||"Linked action not found"}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("span",{className:`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${y}`,children:i.status||"Not Started"}),i.temporalStatus==="Overdue start"||i.temporalStatus==="Overdue completion"?e.jsx("div",{className:"mt-1 text-xs text-rose-700",children:i.temporalStatus}):null]}),e.jsx("td",{className:"px-3 py-2",children:i.action?e.jsx("button",{type:"button",onClick:()=>H(i.lens,i.action||void 0),className:`${l?"border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25":"border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100"} rounded-md border px-2.5 py-1.5 text-xs font-semibold`,children:"Open Action"}):e.jsx("span",{className:`text-xs ${l?"text-slate-500":"text-slate-400"}`,children:"Unavailable"})})]},`${i.lens}:${((ne=i.action)==null?void 0:ne.id)||"missing"}`)})})]})}):e.jsx("p",{className:`mt-1 text-sm ${l?"text-slate-300":"text-slate-500"}`,children:"No linked actions assigned."})]})]})]})}):null]})}const hn=50;function wa(n){const t=new Date(n);return Number.isNaN(t.getTime())?n:t.toLocaleString("en-GB",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function Na({events:n,darkMode:t=!1}){const[s,a]=c.useState("all"),[d,v]=c.useState("all"),[x,m]=c.useState("all"),[o,E]=c.useState(""),[p,l]=c.useState(1),u=c.useMemo(()=>["all",...Array.from(new Set(n.map(A=>A.eventType))).sort()],[n]),S=c.useMemo(()=>["all",...Array.from(new Set(n.map(A=>A.componentId).filter(Boolean))).sort()],[n]),z=c.useMemo(()=>["all",...Array.from(new Set(n.map(A=>A.actor).filter(Boolean))).sort()],[n]),Y=c.useMemo(()=>{const A=o.trim().toLowerCase();return n.filter(B=>s==="all"?!0:B.eventType===s).filter(B=>d==="all"?!0:B.componentId===d).filter(B=>x==="all"?!0:B.actor===x).filter(B=>A?[B.summary,B.reason,B.entityId,B.lens].filter(Boolean).some(G=>String(G).toLowerCase().includes(A)):!0).sort((B,G)=>Date.parse(G.timestamp)-Date.parse(B.timestamp))},[n,s,d,x,o]),w=Math.max(1,Math.ceil(Y.length/hn)),$=Math.min(p,w),k=($-1)*hn,se=Y.slice(k,k+hn);return e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${t?"text-slate-100":"text-slate-900"}`,children:"Audit Log"}),e.jsx("p",{className:`text-sm mt-1 ${t?"text-slate-300":"text-slate-600"}`,children:"Timestamped history of CST changes, including who made each change."})]}),e.jsxs("div",{className:`grid gap-3 md:grid-cols-4 rounded-lg border p-4 ${t?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Event type"}),e.jsx("select",{value:s,onChange:A=>{a(A.target.value),l(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:u.map(A=>e.jsx("option",{value:A,children:A==="all"?"All":A},A))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Component"}),e.jsx("select",{value:d,onChange:A=>{v(A.target.value),l(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:S.map(A=>e.jsx("option",{value:A,children:A==="all"?"All":A},A))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Actor"}),e.jsx("select",{value:x,onChange:A=>{m(A.target.value),l(1)},className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:z.map(A=>e.jsx("option",{value:A,children:A==="all"?"All":A},A))})]}),e.jsxs("label",{className:"text-sm",children:[e.jsx("span",{className:`block mb-1 font-medium ${t?"text-slate-200":"text-slate-700"}`,children:"Search"}),e.jsx("input",{value:o,onChange:A=>{E(A.target.value),l(1)},placeholder:"summary, reason, id",className:`w-full rounded-md border px-2 py-1.5 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`})]})]}),e.jsx("div",{className:`rounded-lg border overflow-hidden ${t?"border-slate-700":"border-slate-200"}`,children:e.jsxs("table",{className:"min-w-full text-sm",children:[e.jsx("thead",{className:t?"bg-slate-900 text-slate-200":"bg-slate-50 text-slate-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left",children:"When"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Who"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"What"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Context"}),e.jsx("th",{className:"px-3 py-2 text-left",children:"Details"})]})}),e.jsx("tbody",{className:t?"bg-slate-800 text-slate-100":"bg-white text-slate-800",children:se.length?se.map(A=>e.jsxs("tr",{className:t?"border-t border-slate-700":"border-t border-slate-100",children:[e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:wa(A.timestamp)}),e.jsx("td",{className:"px-3 py-2 align-top whitespace-nowrap",children:A.actor||"Unknown user"}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{className:"font-medium",children:A.summary}),e.jsx("div",{className:`text-xs mt-1 ${t?"text-slate-300":"text-slate-600"}`,children:A.eventType})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[e.jsx("div",{children:A.componentId||"-"}),e.jsx("div",{className:`text-xs ${t?"text-slate-300":"text-slate-600"}`,children:A.lens||"-"})]}),e.jsxs("td",{className:"px-3 py-2 align-top",children:[A.reason?e.jsxs("div",{children:["Reason: ",A.reason]}):null,A.before||A.after?e.jsxs("details",{className:"mt-1",children:[e.jsx("summary",{className:"cursor-pointer text-xs underline",children:"Before/After"}),e.jsx("pre",{className:`mt-1 text-xs whitespace-pre-wrap ${t?"text-slate-300":"text-slate-600"}`,children:JSON.stringify({before:A.before,after:A.after},null,2)})]}):null]})]},A.id)):e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-6 text-center",colSpan:5,children:"No audit events found for the selected filters."})})})]})}),e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsxs("span",{className:t?"text-slate-300":"text-slate-600",children:["Showing ",se.length?k+1:0,"-",Math.min(k+hn,Y.length)," of ",Y.length]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>l(A=>Math.max(1,A-1)),disabled:$<=1,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Previous"}),e.jsxs("span",{className:t?"text-slate-200":"text-slate-700",children:["Page ",$," / ",w]}),e.jsx("button",{type:"button",onClick:()=>l(A=>Math.min(w,A+1)),disabled:$>=w,className:`rounded-md border px-2 py-1 disabled:opacity-50 ${t?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-700"}`,children:"Next"})]})]})]})}const Ca=[{id:"why",question:"Why are we doing this?",framework:"Force Field Analysis - Driving Forces",description:"The forces pushing for change - the case that makes it worth doing.",componentIds:["case_for_change"]},{id:"future",question:"What will the future look like?",framework:"Vision",description:"A clear picture of the destination, understood and shared by everyone.",componentIds:["vision"]},{id:"barriers",question:"What might prevent us from achieving the vision?",framework:"Force Field Analysis - Restraining Forces",description:"The forces working against change - risks, resistance and blockers to plan for.",componentIds:["case_for_change","resistance"]},{id:"impacted",question:"Who's going to be impacted by the change?",framework:"Stakeholder Analysis & Change Impact Analysis",description:"Everyone affected by the change, and how deeply it affects them.",componentIds:["stakeholder","change_impact"]},{id:"leading",question:"Who's leading the change?",framework:"Sponsor Coalition & Change Network",description:"The visible leaders and the network of champions carrying the change day to day.",componentIds:["sponsorship","change_network"]},{id:"persuade",question:"How will we persuade people to change?",framework:"Case for Change",description:"The compelling narrative that wins hearts and minds.",componentIds:["case_for_change"]}],ct=[{phase:1,label:"Pre-Discovery",programmeStage:"Concept",tagline:"Define the change",deliverables:["Change Vision defined and communicated","Compelling case for change developed"],color:"bg-blue-50",darkColor:"bg-blue-950/45",textColor:"text-blue-700",darkTextColor:"text-blue-100",borderColor:"border-blue-300",darkBorderColor:"border-blue-700"},{phase:2,label:"Solution Design",programmeStage:"Definition",tagline:"Prepare the change",deliverables:["Change Impact analysed","Change Management inputted to Business Case","Engagement and Comms Strategy developed"],color:"bg-violet-50",darkColor:"bg-violet-950/45",textColor:"text-violet-700",darkTextColor:"text-violet-100",borderColor:"border-violet-300",darkBorderColor:"border-violet-700"},{phase:3,label:"Development",programmeStage:"Design & Develop",tagline:"Plan the change",deliverables:["Engagement and Comms Plan developed","Change Management Plan developed"],color:"bg-amber-50",darkColor:"bg-amber-950/45",textColor:"text-amber-700",darkTextColor:"text-amber-100",borderColor:"border-amber-300",darkBorderColor:"border-amber-700"},{phase:4,label:"Deployment / Go Live",programmeStage:"Implementation",tagline:"Manage implementation of the change",deliverables:["Change Management Plan executed","Communications delivered and Stakeholders engaged","Future State Processes validated","Skills gaps addressed","Future State Processes trialled and in use"],color:"bg-orange-50",darkColor:"bg-orange-950/45",textColor:"text-orange-700",darkTextColor:"text-orange-100",borderColor:"border-orange-300",darkBorderColor:"border-orange-700"},{phase:5,label:"Post-Deployment",programmeStage:"Transition / Close",tagline:"Reinforce and sustain the change",deliverables:["Change adoption evaluated","Business Change refinements actioned","Change sustained"],color:"bg-green-50",darkColor:"bg-green-950/45",textColor:"text-green-700",darkTextColor:"text-green-100",borderColor:"border-green-300",darkBorderColor:"border-green-700"}],Ea=[{title:"Handling Resistance",body:"Helping project managers navigate potential roadblocks and maintain project momentum through identifying and addressing resistance using effective communication, stakeholder engagement, and mitigation strategies."},{title:"Engaging Stakeholders",body:"Identifying key individuals and groups affected by the project and working closely with them to understand concerns, gather feedback, and ensure their perspectives are considered."},{title:"Communicating and Raising Awareness",body:"Developing engagement and communication plans that support project managers in creating clear and consistent messaging about the project's purpose, goals, and benefits."},{title:"Managing Expectations",body:"Setting realistic expectations for stakeholders regarding project outcomes, timelines, and potential disruptions by addressing concerns, clarifying misconceptions, and managing expectations."},{title:"Ensuring Change Readiness",body:"Assessing the readiness of an organisation or team for change and developing strategies to bridge any gaps."},{title:"Mitigating Risks",body:"Through anticipating and addressing risks associated with change, such as resistance, lack of stakeholder support, or unexpected obstacles."},{title:"Adopting Change Sustainably",body:"Supporting project managers in developing strategies to embed the changes into the organisation's culture, processes, and systems."}];function _n({title:n,description:t,isOpen:s,onToggle:a,children:d,darkMode:v=!1}){return e.jsxs("section",{className:`mb-4 overflow-hidden rounded-lg border ${v?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("button",{type:"button",onClick:a,"aria-expanded":s,className:`flex w-full items-center justify-between gap-4 p-4 text-left transition-colors ${v?"bg-slate-900 hover:bg-slate-800":"bg-white hover:bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${v?"text-slate-100":"text-slate-800"}`,children:n}),t?e.jsx("p",{className:`mt-0.5 text-sm ${v?"text-slate-300":"text-slate-500"}`,children:t}):null]}),e.jsx("span",{className:`shrink-0 text-xl font-bold transition-transform ${v?"text-slate-500":"text-slate-400"} ${s?"rotate-45":""}`,children:"+"})]}),s?e.jsx("div",{className:`border-t p-5 pt-4 ${v?"border-slate-700 bg-slate-900":"border-slate-100 bg-white"}`,children:d}):null]})}function Ia({onComponentClick:n,guidanceTarget:t="Default",linkOverrides:s,darkMode:a=!1}){const[d,v]=c.useState("questions"),[x,m]=c.useState(null),o=p=>{v(l=>l===p?null:p)},E=p=>{m(l=>l===p?null:p)};return e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsx("h2",{className:`mb-2 text-2xl font-bold ${a?"text-slate-100":"text-slate-800"}`,children:"Change Management Toolkit"}),e.jsx("p",{className:`mb-8 text-sm ${a?"text-slate-300":"text-slate-500"}`,children:"NHS England Programme Delivery Lifecycle - an introduction to the five change phases and the role of the Change Manager."}),e.jsxs("div",{className:"bg-[#005eb8] text-white rounded-lg p-6 mb-8 flex flex-col sm:flex-row sm:items-center gap-4",children:[e.jsx("div",{className:"flex-shrink-0 w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold",children:"!"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-blue-100 uppercase tracking-wide mb-1",children:"When is the best time to start thinking about Change Management?"}),e.jsx("p",{className:"text-2xl font-bold",children:"Answer: Now!"}),e.jsx("p",{className:"text-sm text-blue-100 mt-1",children:"Change management should be considered from the very start of any project - not as an afterthought at go-live."})]})]}),e.jsx(_n,{title:"The 6 Key Questions",description:"Six questions worth returning to throughout the life of the programme, each backed by a change model and linked to where you can act on it.",isOpen:d==="questions",onToggle:()=>o("questions"),darkMode:a,children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:Ca.map((p,l)=>{const u=Et(t,p.componentIds[0],"inputs",s).slice(0,2);return e.jsxs("div",{className:`rounded-md border p-4 ${a?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"}`,children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsxs("span",{className:"shrink-0 w-7 h-7 rounded-full bg-blue-100 text-[#005eb8] text-xs font-bold flex items-center justify-center",children:["Q",l+1]}),e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${a?"text-slate-100":"text-slate-800"}`,children:p.question}),e.jsx("span",{className:`mt-1 inline-block rounded border px-2 py-0.5 text-xs font-medium ${a?"border-indigo-500/40 bg-indigo-500/15 text-indigo-200":"border-indigo-200 bg-indigo-50 text-indigo-700"}`,children:p.framework})]})]}),e.jsx("p",{className:`mt-3 text-xs leading-relaxed ${a?"text-slate-300":"text-slate-600"}`,children:p.description}),u.length?e.jsx("div",{className:"mt-3 flex flex-wrap gap-x-3 gap-y-1",children:u.map(S=>e.jsx("a",{href:S.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-medium text-[#005eb8] underline",children:S.label},`${p.id}-${S.url}`))}):null,e.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:p.componentIds.map(S=>{const z=Pn(S);return z?e.jsxs("button",{type:"button",onClick:()=>n(S),className:`rounded-md border px-2.5 py-1.5 text-xs font-semibold transition-colors ${a?"border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25":"border-blue-200 bg-blue-50 text-[#005eb8] hover:bg-blue-100"}`,children:["Go to ",z.label]},S):null})})]},p.id)})})}),e.jsxs(_n,{title:"The Five Change Phases",description:"Select a phase to see the key deliverables expected at that stage.",isOpen:d==="phases",onToggle:()=>o("phases"),darkMode:a,children:[e.jsx("div",{className:`mb-6 hidden grid-cols-5 gap-1 overflow-hidden rounded-lg border text-center text-xs font-semibold md:grid ${a?"border-slate-700":"border-slate-200"}`,children:ct.map(p=>e.jsxs("button",{onClick:()=>E(p.phase),className:`py-2 px-1 transition-colors ${x===p.phase?`${p.color} ${p.textColor} ring-2 ring-inset ring-current`:a?"bg-slate-800 text-slate-300 hover:bg-slate-700":"bg-slate-100 text-slate-500 hover:bg-slate-200"}`,children:["Phase ",p.phase]},p.phase))}),e.jsx("div",{className:"space-y-3",children:ct.map(p=>{const l=x===p.phase;return e.jsxs("div",{className:`rounded-lg border overflow-hidden transition-shadow ${a?p.darkBorderColor:p.borderColor} ${l?"shadow-md":""}`,children:[e.jsxs("button",{onClick:()=>E(p.phase),className:`w-full flex items-center justify-between p-4 text-left transition-colors ${a?p.darkColor:p.color}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 border ${a?`${p.darkTextColor} bg-slate-900 ${p.darkBorderColor}`:`${p.textColor} bg-white ${p.borderColor}`}`,children:p.phase}),e.jsxs("div",{children:[e.jsx("p",{className:`font-semibold text-sm ${a?p.darkTextColor:p.textColor}`,children:p.label}),e.jsxs("p",{className:`text-xs ${a?"text-slate-300":"text-slate-500"}`,children:[e.jsxs("span",{className:"italic",children:['"',p.tagline,'"']})," · ",p.programmeStage]})]})]}),e.jsx("span",{className:`text-lg font-bold transition-transform ${a?p.darkTextColor:p.textColor} ${l?"rotate-45":""}`,children:"+"})]}),l&&e.jsxs("div",{className:`border-t px-5 pb-5 pt-3 ${a?"border-slate-700 bg-slate-900":"border-slate-100 bg-white"}`,children:[e.jsx("p",{className:`mb-3 text-xs font-semibold uppercase tracking-wide ${a?"text-slate-300":"text-slate-500"}`,children:"Key deliverables"}),e.jsx("ul",{className:"space-y-2",children:p.deliverables.map((u,S)=>e.jsxs("li",{className:`flex items-start gap-2 text-sm ${a?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{className:`mt-0.5 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${a?`${p.darkColor} ${p.darkTextColor}`:`${p.color} ${p.textColor}`}`,children:S+1}),u]},S))})]})]},p.phase)})})]}),e.jsx(_n,{title:"The Role of the Change Manager",description:"Change management (and change managers) provide essential assistance to project managers through:",isOpen:d==="role",onToggle:()=>o("role"),darkMode:a,children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:Ea.map(p=>e.jsxs("div",{className:`rounded-md border p-4 ${a?"border-slate-700 bg-slate-800":"border-slate-100 bg-slate-50"}`,children:[e.jsx("p",{className:"text-sm font-semibold text-[#005eb8] mb-1",children:p.title}),e.jsx("p",{className:`text-xs leading-relaxed ${a?"text-slate-300":"text-slate-600"}`,children:p.body})]},p.title))})}),e.jsxs("div",{className:`flex flex-col gap-4 rounded-lg border p-5 sm:flex-row sm:items-center ${a?"border-slate-700 bg-slate-800":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:`mb-1 text-sm font-semibold ${a?"text-slate-100":"text-slate-700"}`,children:"Explore the full Toolkit"}),e.jsx("p",{className:`text-xs ${a?"text-slate-300":"text-slate-500"}`,children:"Access templates, frameworks, and guidance materials on the NHS Change Management Network workspace."})]}),e.jsx("a",{href:"https://future.nhs.uk/CMN/view?objectId=129489733",target:"_blank",rel:"noopener noreferrer",className:"shrink-0 inline-flex items-center gap-2 rounded-md bg-[#005eb8] text-white text-sm font-medium px-4 py-2 hover:bg-blue-700 transition-colors",children:"Change Management Toolkit ↗"})]})]})}const Mn="focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2",Lt=`inline-flex items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] transition-colors ${Mn}`,rn=`inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#212b32] border border-[#768692] shadow-[0_3px_0_#d8dde0] hover:bg-[#f0f4f5] transition-colors ${Mn}`,Ft=Mn,dt={1:"Pre go-live planning and early mobilisation.",2:"Go-live readiness and immediate launch support.",3:"Early adoption reinforcement and consistency.",4:"Embedding new ways of working across teams.",5:"Sustained adoption and benefits realisation at scale."},ja={1:"Low confidence",2:"Some confidence",3:"Moderate confidence",4:"High confidence",5:"Very high confidence"},_a={A:"Well embedded in practice",B:"Mostly embedded in practice",C:"Partly embedded in practice",D:"Early adoption in practice",E:"Not yet embedded in practice"};function Aa(n){return n>=4?"high":n===3?"average":"below"}function Oa(n){return n==="A"||n==="B"?"high":n==="C"?"average":"below"}function ka(n,t){const s=Oa(n),a=Aa(t),d=s==="high"&&a==="high",v=s==="below"&&a==="below",x=s==="high"&&a!=="below"||a==="high"&&s!=="below";return d?"Blue":v?"Red":x?"Green":"Amber"}function Ra({orgProfile:n,onProfileUpdate:t,components:s,store:a,getEntry:d,onComponentClick:v,onOpenOnboarding:x,darkMode:m=!1,currentUserId:o,onCurrentUserChange:E}){var j,q,J,xe,Pe,Ie;const[p,l]=c.useState(n),[u,S]=c.useState(null),z=ys(p),Y=c.useMemo(()=>z.errors.reduce((f,N)=>(f[N.field]||(f[N.field]=[]),f[N.field].push(N.message),f),{}),[z.errors]),w=c.useCallback(f=>{var N;return(N=Y[f])==null?void 0:N[0]},[Y]),$=!!(p.trustName.trim()&&(p.projectName||"").trim()&&(p.leadName||"").trim()&&p.cst.goLiveDate.trim());c.useEffect(()=>{l(n)},[n]);const k=c.useCallback(f=>{const N={...p,trustName:f};l(N),t(N)},[p,t]),se=c.useCallback(f=>{const N={...p,projectName:f};l(N),t(N)},[p,t]),A=c.useCallback(f=>{const N={...p,leadName:f};l(N),t(N)},[p,t]),B=c.useCallback(f=>{const N={...p,cst:{...p.cst,type:f}};l(N),t(N)},[p,t]),G=c.useCallback(f=>{const N={...p,cst:{...p.cst,pathway:f}};l(N),t(N)},[p,t]),ue=c.useCallback((f,N)=>{const de={...p,cst:{...p.cst,[f]:N}};l(de),t(de)},[p,t]),oe=c.useCallback(f=>{const N={...p,cst:{...p.cst,toolkitChoice:f}};l(N),t(N)},[p,t]),re=c.useCallback((f,N,de)=>{const Se=p.cst.phaseCapability[f]||{competence:"C",confidence:3},V={...p,cst:{...p.cst,phaseCapability:{...p.cst.phaseCapability,[f]:{competence:Se.competence,confidence:Se.confidence,assessedAt:new Date().toISOString(),reason:"manual",[N]:de}}}};l(V),t(V)},[p,t]),te=c.useCallback(f=>{const N={...p,linkOverrides:f};l(N),t(N)},[p,t]),ae=c.useCallback(()=>{const f={id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:"",role:""},N={...p,teamMembers:[...p.teamMembers||[],f]};l(N),t(N)},[p,t]),R=c.useCallback((f,N,de)=>{const Se={...p,teamMembers:(p.teamMembers||[]).map(V=>V.id===f?{...V,[N]:de}:V)};l(Se),t(Se)},[p,t]),le=c.useCallback(f=>{const N={...p,teamMembers:(p.teamMembers||[]).filter(de=>de.id!==f)};l(N),t(N),o===f&&E("")},[p,t,o,E]),be=s.reduce((f,N)=>(f[N.phase]=f[N.phase]||[],f[N.phase].push(N),f),{});return e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h2",{className:`text-2xl font-bold ${m?"text-slate-100":"text-slate-800"}`,children:"CST Personalisation"}),e.jsx("button",{type:"button",onClick:x,className:rn,"data-testid":"cst-show-intro-button",children:"Show introduction again"})]}),e.jsx("p",{className:`text-sm -mt-4 ${m?"text-slate-300":"text-slate-600"}`,children:"This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways it follows, and how it's tracking against its readiness phases."}),e.jsxs("div",{className:`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${m?"border-emerald-500/40 bg-emerald-500/15 text-emerald-200":"border-emerald-200 bg-emerald-50 text-emerald-800"}`,children:[e.jsx("span",{className:"inline-block h-2 w-2 rounded-full bg-emerald-500","aria-hidden":"true"}),"Auto-save is on for CST Personalisation."]}),e.jsxs("div",{className:`${m?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:`text-lg font-semibold ${m?"text-slate-100":"text-slate-800"}`,children:"Organisation profile"}),e.jsx("p",{className:`text-sm ${m?"text-slate-300":"text-slate-600"}`,children:"Step 1: Basic details."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-trust-name",className:`block text-sm font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Organisation Name"}),e.jsx("input",{id:"org-trust-name",type:"text","data-testid":"cst-trust-name-input",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${m?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:p.trustName,onChange:f=>k(f.target.value),"aria-invalid":!!w("trustName"),"aria-describedby":w("trustName")?"org-trust-name-error":void 0}),w("trustName")?e.jsx("p",{id:"org-trust-name-error",className:`mt-1 text-xs ${m?"text-amber-300":"text-red-700"}`,children:w("trustName")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-project-name",className:`block text-sm font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Programme / Project Name"}),e.jsx("input",{id:"org-project-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${m?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:p.projectName||"",onChange:f=>se(f.target.value)})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"org-lead-name",className:`block text-sm font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Lead Submitter (Change Lead)"}),e.jsx("input",{id:"org-lead-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${m?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:p.leadName||"",onChange:f=>A(f.target.value)})]}),$?e.jsxs("div",{className:`rounded-md border p-4 ${m?"border-green-500/40 bg-green-500/10":"border-green-200 bg-green-50"}`,children:[e.jsx("p",{className:`text-sm font-semibold ${m?"text-green-200":"text-green-900"}`,children:"Stage 1 complete: Project details captured."}),e.jsx("p",{className:`mt-1 text-xs ${m?"text-green-100":"text-green-800"}`,children:"Your details are saved. Continue to assign delivery actions against component lenses."}),e.jsx("button",{type:"button",onClick:()=>{s[0]&&v(s[0].id)},className:"mt-3 rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Continue to assigning actions"})]}):e.jsx("div",{className:`rounded-md border p-3 text-xs ${m?"border-amber-500/40 bg-amber-500/10 text-amber-100":"border-amber-200 bg-amber-50 text-amber-900"}`,children:"Stage 1 in progress: add organisation name, programme name, lead name, and go-live date to complete this step."}),e.jsxs("details",{className:`${m?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,open:!0,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-semibold ${m?"text-slate-100":"text-slate-800"}`,children:"Step 2: Pathway and timeline (Context Specific Template)"}),e.jsx("p",{className:`mt-2 text-xs ${m?"text-slate-300":"text-slate-600"}`,children:"Choose the full pathway title for your programme, then set key timeline dates."}),e.jsxs("div",{className:"mt-3 grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-type",className:`block text-sm font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"CST Type"}),e.jsx("select",{id:"cst-type",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${m?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:p.cst.type,onChange:f=>B(f.target.value),children:Ds.map(f=>e.jsx("option",{value:f.value,children:f.label},f.value))})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-pathway",className:`block text-sm font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Pathway"}),e.jsx("select",{id:"cst-pathway",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${m?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:p.cst.pathway,onChange:f=>G(f.target.value),"aria-invalid":!!w("cst.pathway"),"aria-describedby":w("cst.pathway")?"cst-pathway-error":void 0,children:_t.map(f=>e.jsx("option",{value:f.value,children:f.label},f.value))}),w("cst.pathway")?e.jsx("p",{id:"cst-pathway-error",className:`mt-1 text-xs ${m?"text-amber-300":"text-red-700"}`,children:w("cst.pathway")}):null]})]}),e.jsxs("div",{className:"mt-3 grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-go-live",className:`block text-sm font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Go Live Date (required)"}),e.jsx("input",{id:"cst-go-live",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${m?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:p.cst.goLiveDate,onChange:f=>ue("goLiveDate",f.target.value),"aria-invalid":!!w("cst.goLiveDate"),"aria-describedby":w("cst.goLiveDate")?"cst-go-live-error":void 0}),w("cst.goLiveDate")?e.jsx("p",{id:"cst-go-live-error",className:`mt-1 text-xs ${m?"text-amber-300":"text-red-700"}`,children:w("cst.goLiveDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-full-adoption",className:`block text-sm font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Full Adoption Date (optional)"}),e.jsx("input",{id:"cst-full-adoption",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${m?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:p.cst.fullAdoptionDate,onChange:f=>ue("fullAdoptionDate",f.target.value),"aria-invalid":!!w("cst.fullAdoptionDate"),"aria-describedby":w("cst.fullAdoptionDate")?"cst-full-adoption-error":void 0}),w("cst.fullAdoptionDate")?e.jsx("p",{id:"cst-full-adoption-error",className:`mt-1 text-xs ${m?"text-amber-300":"text-red-700"}`,children:w("cst.fullAdoptionDate")}):null]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-benefit",className:`block text-sm font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Benefit Realisation Date (optional)"}),e.jsx("input",{id:"cst-benefit",type:"date",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${m?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:p.cst.benefitRealizationDate,onChange:f=>ue("benefitRealizationDate",f.target.value),"aria-invalid":!!w("cst.benefitRealizationDate"),"aria-describedby":w("cst.benefitRealizationDate")?"cst-benefit-error":void 0}),w("cst.benefitRealizationDate")?e.jsx("p",{id:"cst-benefit-error",className:`mt-1 text-xs ${m?"text-amber-300":"text-red-700"}`,children:w("cst.benefitRealizationDate")}):null]})]}),z.errors.filter(f=>f.field.startsWith("cst.")).length>0?e.jsxs("div",{className:`mt-4 rounded-md border p-3 ${m?"border-amber-500/40 bg-amber-500/10":"border-amber-300 bg-amber-50"}`,children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${m?"text-amber-200":"text-amber-800"}`,children:"CST validation warnings"}),e.jsx("ul",{className:`mt-2 space-y-1 text-sm ${m?"text-amber-100":"text-amber-900"}`,children:z.errors.filter(f=>f.field.startsWith("cst.")).map(f=>e.jsxs("li",{children:["- ",f.message]},f.field+f.message))})]}):null]}),e.jsxs("details",{className:`${m?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-semibold ${m?"text-slate-100":"text-slate-800"}`,children:"Step 3: Confidence and capability by phase"}),e.jsx("div",{className:"mt-2 flex flex-wrap items-center justify-between gap-2",children:e.jsx("p",{className:`text-xs ${m?"text-slate-300":"text-slate-600"}`,children:"Capture your starting position, then refresh when readiness phase changes or after major milestones."})}),e.jsxs("div",{className:"mt-3 rounded-md border border-blue-200 bg-blue-50 p-3 text-xs text-blue-900",children:[e.jsx("p",{className:"font-semibold",children:"How this self-assessment works"}),e.jsx("p",{className:"mt-1",children:"Confidence is how sure your team feels. Delivery readiness is how embedded the new way of working is in practice."}),e.jsx("p",{className:"mt-1",children:"Cards now use BRAG backgrounds: Blue = both high, Green = one high and the other at least average, Amber = neither high, Red = both below average."})]}),e.jsx("div",{className:"mt-3 space-y-3",children:tt.map(f=>{const N=p.cst.phaseCapability[f]||{competence:"C",confidence:3},de=ka(N.competence,N.confidence),Se=de==="Blue"?"border-sky-300 bg-sky-50":de==="Green"?"border-emerald-300 bg-emerald-50":de==="Red"?"border-red-300 bg-red-50":"border-amber-300 bg-amber-50",V=de==="Blue"?"text-sky-800 bg-sky-100":de==="Green"?"text-emerald-800 bg-emerald-100":de==="Red"?"text-red-800 bg-red-100":"text-amber-800 bg-amber-100";return e.jsxs("div",{className:`${m?"border-slate-700 bg-slate-800":Se} rounded-md border p-3`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{className:"relative flex items-center gap-2",children:[e.jsxs("span",{className:`font-semibold ${m?"text-slate-100":"text-slate-700"}`,children:["Phase ",f]}),e.jsx("button",{type:"button",onMouseEnter:()=>S(f),onMouseLeave:()=>S(M=>M===f?null:M),onFocus:()=>S(f),onBlur:()=>S(M=>M===f?null:M),onClick:()=>S(M=>M===f?null:f),className:"h-5 w-5 rounded-full border border-slate-300 text-xs font-semibold text-slate-600","aria-expanded":u===f,"aria-controls":`phase-help-${f}`,"aria-label":`Phase ${f} guidance`,children:"i"}),u===f?e.jsx("div",{id:`phase-help-${f}`,role:"tooltip",className:"absolute left-0 top-7 z-10 w-72 rounded-md border border-slate-200 bg-slate-900 px-3 py-2 text-xs text-white shadow-xl",children:dt[f]}):null]}),e.jsx("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${m?"bg-slate-700 text-slate-100":V}`,children:de})]}),e.jsx("p",{className:`mt-1 text-xs ${m?"text-slate-300":"text-slate-600"}`,children:dt[f]}),e.jsxs("div",{className:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm",children:[e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${m?"text-slate-300":"text-slate-600"}`,children:"Delivery readiness"}),e.jsx("select",{value:N.competence,onChange:M=>re(f,"competence",M.target.value),className:`w-full rounded-md border px-2 py-2 pr-10 ${m?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:bn.map(M=>e.jsxs("option",{value:M,children:[_a[M]," (",M,")"]},`${f}-competence-${M}`))})]}),e.jsxs("label",{className:"space-y-1",children:[e.jsx("span",{className:`text-xs font-medium ${m?"text-slate-300":"text-slate-600"}`,children:"Confidence"}),e.jsx("select",{value:N.confidence,onChange:M=>re(f,"confidence",Number(M.target.value)),className:`w-full rounded-md border px-2 py-2 pr-10 ${m?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:xn.map(M=>e.jsxs("option",{value:M,children:[ja[M]," (",M,")"]},`${f}-confidence-${M}`))})]})]})]},`phase-capability-${f}`)})})]})]}),e.jsxs("div",{className:`${m?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${m?"text-slate-100":"text-slate-800"}`,children:"Team Members"}),e.jsx("p",{className:`text-sm mt-1 ${m?"text-slate-300":"text-slate-600"}`,children:"Add the people working on this programme so actions and readiness slides can be assigned to a named owner. This roster is saved with the CST; who you're signed in as is remembered on this device only."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"cst-current-user",className:`block text-sm font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"You are signed in as"}),e.jsxs("select",{id:"cst-current-user",value:o||"",onChange:f=>E(f.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 md:w-1/2 ${m?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"",children:"Not selected"}),(p.teamMembers||[]).map(f=>e.jsxs("option",{value:f.id,children:[f.name||"Unnamed",f.role?` — ${f.role}`:""]},f.id))]})]}),e.jsxs("div",{className:"space-y-2",children:[(p.teamMembers||[]).map(f=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2 items-center",children:[e.jsx("input",{value:f.name,onChange:N=>R(f.id,"name",N.target.value),placeholder:"Name",className:`rounded-md border shadow-sm sm:text-sm p-2 ${m?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("input",{value:f.role,onChange:N=>R(f.id,"role",N.target.value),placeholder:"Role (e.g. Change Lead)",className:`rounded-md border shadow-sm sm:text-sm p-2 ${m?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`}),e.jsx("button",{type:"button",onClick:()=>le(f.id),className:"shrink-0 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})]},f.id)),(p.teamMembers||[]).length?null:e.jsx("p",{className:`text-sm ${m?"text-slate-400":"text-slate-500"}`,children:"No team members added yet."})]}),e.jsx("button",{type:"button",onClick:ae,className:rn,children:"+ Add Team Member"})]}),e.jsx("div",{className:`${m?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-6`,children:e.jsxs("details",{children:[e.jsx("summary",{className:`cursor-pointer text-lg font-semibold ${m?"text-slate-100":"text-slate-800"}`,children:"Step 4: External links"}),e.jsx("p",{className:`mt-2 text-sm ${m?"text-slate-300":"text-slate-600"}`,children:"All toolkit links across the tool point to the NHS Future platform by default. You can override the base toolkit destination for your organisation, or change individual links independently."}),e.jsxs("div",{className:`mt-3 rounded-md border p-3 text-xs ${m?"border-blue-500/30 bg-blue-500/10 text-blue-100":"border-blue-200 bg-blue-50 text-blue-900"}`,children:[e.jsx("p",{className:"font-semibold",children:"Fallback reference"}),e.jsxs("p",{className:"mt-1",children:["Base fallback: ",e.jsx("span",{className:"font-medium",children:pn.label})," (",pn.url,")"]}),e.jsx("p",{className:"mt-1",children:"Default fallback: the original NHS Future link defined per guidance item."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 ${m?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsx("label",{htmlFor:"cst-toolkit-choice",className:`block text-xs font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Default toolkit for assistant preview"}),e.jsx("select",{id:"cst-toolkit-choice",value:p.cst.toolkitChoice,onChange:f=>oe(f.target.value),className:`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 ${m?"border-slate-600 bg-slate-800 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:vn.map(f=>e.jsx("option",{value:f.key,children:f.label},f.key))}),e.jsx("p",{className:`mt-2 text-xs ${m?"text-slate-300":"text-slate-500"}`,children:"This controls which toolkit the chatbot-style assistant opens by default across the tool."})]}),e.jsxs("div",{className:`mt-4 rounded-md border p-4 space-y-3 ${m?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${m?"text-slate-100":"text-slate-800"}`,children:"Base override"}),e.jsx("p",{className:`text-xs mt-0.5 ${m?"text-slate-300":"text-slate-500"}`,children:"Replaces the Change Management Toolkit destination for all links that fall back to it."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Toolkit name"}),e.jsx("input",{type:"text",placeholder:pn.label,value:((q=(j=p.linkOverrides)==null?void 0:j.base)==null?void 0:q.label)??"",onChange:f=>{var N;return te({...p.linkOverrides,base:{...(N=p.linkOverrides)==null?void 0:N.base,label:f.target.value||void 0}})},className:`w-full rounded-md border shadow-sm sm:text-sm p-2 ${m?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-xs font-medium mb-1 ${m?"text-slate-200":"text-slate-700"}`,children:"Toolkit URL"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:pn.url,value:((xe=(J=p.linkOverrides)==null?void 0:J.base)==null?void 0:xe.url)??"",onChange:f=>{var N;return te({...p.linkOverrides,base:{...(N=p.linkOverrides)==null?void 0:N.base,url:f.target.value||void 0}})},className:`flex-1 min-w-0 rounded-md border shadow-sm sm:text-sm p-2 ${m?"border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),((Ie=(Pe=p.linkOverrides)==null?void 0:Pe.base)==null?void 0:Ie.url)&&e.jsx("button",{type:"button",onClick:()=>{var f;return te({...p.linkOverrides,base:{...(f=p.linkOverrides)==null?void 0:f.base,url:void 0}})},className:`shrink-0 rounded-md border px-3 py-2 text-xs font-medium ${m?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Reset"})]})]})]})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsx("p",{className:`text-sm font-semibold ${m?"text-slate-100":"text-slate-800"}`,children:"Per-link overrides"}),e.jsxs("p",{className:`text-xs ${m?"text-slate-300":"text-slate-500"}`,children:["Leave a URL blank to use the fallback. Set fallback to ",e.jsx("strong",{children:"Base"})," to use your base override above, or ",e.jsx("strong",{children:"Default"})," to keep the original NHS Future link."]}),Object.entries(ws).map(([f,N])=>{const Se=[...N.inputs??[],...N.deliverables??[]].filter(V=>{var M,Ne,g,I;return(I=(g=(Ne=(M=p.linkOverrides)==null?void 0:M.links)==null?void 0:Ne[V.key])==null?void 0:g.url)==null?void 0:I.trim()}).length;return e.jsxs("details",{className:`rounded-md border ${m?"border-slate-700":"border-slate-200"}`,children:[e.jsxs("summary",{className:`flex cursor-pointer items-center justify-between gap-2 p-3 text-sm font-medium ${m?"text-slate-200":"text-slate-700"}`,children:[e.jsx("span",{children:f}),Se>0&&e.jsxs("span",{className:`rounded-full px-2 py-0.5 text-xs font-semibold ${m?"bg-blue-500/20 text-blue-300":"bg-blue-100 text-blue-700"}`,children:[Se," override",Se!==1?"s":""]})]}),e.jsx("div",{className:`divide-y ${m?"divide-slate-700":"divide-slate-100"}`,children:["inputs","deliverables"].map(V=>{const M=N[V]??[];return M.length?e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${m?"text-slate-400":"text-slate-500"}`,children:V}),M.map(Ne=>{var I,C;const g=((C=(I=p.linkOverrides)==null?void 0:I.links)==null?void 0:C[Ne.key])??{fallback:"base"};return e.jsxs("div",{className:"grid grid-cols-1 gap-1.5",children:[e.jsx("span",{className:`text-xs font-medium ${m?"text-slate-300":"text-slate-700"}`,children:Ne.label}),e.jsx("p",{className:`text-xs truncate ${m?"text-slate-500":"text-slate-400"}`,children:Ne.url}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",placeholder:"Override URL (leave blank to use fallback)",value:g.url??"",onChange:_=>{var ge;const P=_.target.value||void 0;te({...p.linkOverrides,links:{...(ge=p.linkOverrides)==null?void 0:ge.links,[Ne.key]:{...g,url:P}}})},className:`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${m?"border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500":"border-slate-300 bg-white text-slate-900 placeholder-slate-400"}`}),!g.url&&e.jsxs("select",{value:g.fallback??"base",onChange:_=>{var P;return te({...p.linkOverrides,links:{...(P=p.linkOverrides)==null?void 0:P.links,[Ne.key]:{...g,fallback:_.target.value}}})},className:`rounded border px-2 py-1.5 text-xs ${m?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-300 bg-white text-slate-900"}`,children:[e.jsx("option",{value:"base",children:"Fallback: Base"}),e.jsx("option",{value:"default",children:"Fallback: Default"})]}),g.url&&e.jsx("button",{type:"button",onClick:()=>{var P;const _={...(P=p.linkOverrides)==null?void 0:P.links};delete _[Ne.key],te({...p.linkOverrides,links:_})},className:`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${m?"border-slate-600 text-slate-300 hover:bg-slate-700":"border-slate-300 text-slate-600 hover:bg-slate-50"}`,children:"Clear"})]})]},Ne.key)})]},V):null})})]},f)})]})]})}),e.jsxs("div",{className:`${m?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-5`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${m?"text-slate-100":"text-slate-800"}`,children:"Programme Hierarchy"}),e.jsxs("p",{className:`text-sm mt-1 ${m?"text-slate-300":"text-slate-600"}`,children:["Your programme has ",s.length," components, each viewed through one or more lenses. A component is a change topic you assess and track; a lens is the perspective used to assess it (e.g. leadership, risk, capability). Click a component to jump to its assessment."]})]}),tt.filter(f=>{var N;return(N=be[f])==null?void 0:N.length}).map(f=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:`text-sm font-semibold ${m?"text-slate-100":"text-slate-700"}`,children:["Phase ",f]}),e.jsx("div",{className:"space-y-2",children:be[f].map(N=>{const de=N.lenses.reduce((V,M)=>{const Ne=d(N.id,M);return{total:V.total+Ne.actions.length,completed:V.completed+Ne.actions.filter(g=>g.status==="Completed").length}},{total:0,completed:0}),Se=Ks(a,N.id,d);return e.jsxs("button",{type:"button","data-testid":`cst-component-button-${N.id}`,onClick:()=>v(N.id),className:`w-full text-left rounded-md border p-3 transition-colors ${m?"border-slate-700 bg-slate-900 hover:border-blue-400 hover:bg-slate-800":"border-slate-200 hover:border-blue-300 hover:bg-blue-50/40"}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("span",{className:`font-semibold ${m?"text-slate-100":"text-slate-800"}`,children:N.label}),e.jsxs("span",{className:`text-xs ${m?"text-slate-300":"text-slate-500"}`,children:["Target ",N.target]})]}),e.jsx("div",{className:"mt-2 flex flex-wrap gap-1.5",children:N.lenses.map(V=>{const M=d(N.id,V);return e.jsxs("span",{className:`text-xs px-2 py-1 rounded-full border ${M.score>=N.target?m?"border-green-500/40 bg-green-500/15 text-green-200":"bg-green-50 border-green-200 text-green-800":M.score>0?m?"border-amber-500/40 bg-amber-500/15 text-amber-200":"bg-amber-50 border-amber-200 text-amber-800":m?"border-slate-600 bg-slate-800 text-slate-300":"bg-slate-100 border-slate-200 text-slate-600"}`,children:[V,": ",M.score,"/",N.target]},V)})}),e.jsxs("p",{className:`mt-2 text-xs ${m?"text-slate-300":"text-slate-500"}`,children:["Lens actions: ",de.completed,"/",de.total," complete · Outcomes: ",Se.completed,"/",Se.total," complete"]})]},N.id)})})]},`phase-group-${f}`))]})]})}const An=[1,2,3,4,5];function Pa(n,t){const s=n.lenses.reduce((a,d)=>a+Number(t(n.id,d).score||0),0);return n.lenses.length?Number((s/n.lenses.length).toFixed(1)):0}function Da(n,t,s,a,d,v){if(n.phase>s)return{label:"Not in current phase yet",rowClass:v?"border-slate-600 bg-slate-800/80":"border-slate-200 bg-slate-50",chipClass:v?"bg-slate-700 text-slate-100":"bg-slate-200 text-slate-700",barClass:"bg-slate-400"};const x=Un(n.id,a),m=Zs({averageScore:t,targetScore:n.target,checkedItemKeys:d,rule:x});return m.status==="off-track"?{label:`Off track (${m.completionPct}% checklist)`,rowClass:v?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:v?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:m.status==="attention"?{label:`Needs attention (${m.completionPct}% checklist)`,rowClass:v?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:v?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:t>=n.target?{label:`On track (${m.completionPct}% checklist)`,rowClass:v?"border-green-700 bg-green-950/45":"border-green-200 bg-green-50",chipClass:v?"bg-green-900 text-green-100":"bg-green-100 text-green-700",barClass:"bg-green-500"}:n.phase<s?{label:"Behind timeline",rowClass:v?"border-red-700 bg-red-950/45":"border-red-200 bg-red-50",chipClass:v?"bg-red-900 text-red-100":"bg-red-100 text-red-700",barClass:"bg-red-500"}:n.phase===s?{label:"Due this phase",rowClass:v?"border-amber-700 bg-amber-950/45":"border-amber-200 bg-amber-50",chipClass:v?"bg-amber-900 text-amber-100":"bg-amber-100 text-amber-700",barClass:"bg-amber-500"}:{label:"In progress",rowClass:v?"border-blue-700 bg-blue-950/45":"border-blue-200 bg-blue-50",chipClass:v?"bg-blue-900 text-blue-100":"bg-blue-100 text-blue-700",barClass:"bg-blue-500"}}function Ta({components:n,metrics:t,getEntry:s,onComponentClick:a,pathway:d,pathwayChecks:v,darkMode:x=!1}){const m=n.map(o=>{var l;const E=Pa(o,s),p=((l=v[o.id])==null?void 0:l[d])||[];return{component:o,average:E,status:Da(o,E,t.currentPhase,d,p,x)}});return e.jsxs("section",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:`${x?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-2xl border p-6 shadow-sm`,children:[e.jsx("p",{className:`text-sm font-semibold uppercase tracking-[0.18em] ${x?"text-slate-300":"text-slate-500"}`,children:"Roadmap View"}),e.jsx("h2",{className:`mt-2 text-2xl font-bold ${x?"text-slate-100":"text-slate-900"}`,children:"Component delivery timeline"}),e.jsx("p",{className:`mt-2 text-sm ${x?"text-slate-300":"text-slate-600"}`,children:"This gantt-style view shows when each component should be completed by phase. Components are coloured by whether they are on track against the current phase. Select a row to jump into the matching assessment tab."})]}),e.jsx("div",{className:"lg:hidden space-y-3",children:m.map(({component:o,average:E,status:p})=>e.jsxs("button",{type:"button",onClick:()=>a(o.id),className:`w-full rounded-xl border p-4 text-left transition-colors ${x?"hover:border-slate-500":"hover:border-slate-300"} ${p.rowClass}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${x?"text-slate-100":"text-slate-800"}`,children:o.label}),e.jsxs("div",{className:`mt-1 text-xs ${x?"text-slate-300":"text-slate-500"}`,children:["Target ",o.target," · completes by Phase ",o.phase]})]}),e.jsx("span",{className:`rounded-full px-2.5 py-1 text-xs font-semibold ${p.chipClass}`,children:p.label})]}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("div",{className:`mb-1 flex items-center justify-between text-xs ${x?"text-slate-300":"text-slate-600"}`,children:[e.jsx("span",{children:"Timeline"}),e.jsxs("span",{children:["Average ",E]})]}),e.jsx("div",{className:"grid grid-cols-5 gap-1",children:An.map(l=>{const u=l<=o.phase,S=l===o.phase;return e.jsxs("div",{children:[e.jsx("div",{className:`h-2 rounded-full ${x?"bg-slate-700/70":"bg-white/80"}`,children:u?e.jsx("div",{className:`h-full rounded-full ${p.barClass} ${S?"opacity-100":"opacity-35"}`,title:S?"Expected completion phase":"Planned timeline"}):null}),e.jsxs("div",{className:`mt-1 text-center text-[10px] ${x?"text-slate-400":"text-slate-500"}`,children:["P",l]})]},`${o.id}-mobile-${l}`)})})]})]},`mobile-${o.id}`))}),e.jsx("div",{className:`${x?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} hidden lg:block rounded-2xl border p-5 shadow-sm overflow-x-auto`,children:e.jsxs("div",{className:"min-w-[860px]",children:[e.jsxs("div",{className:`grid grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 border-b pb-3 text-xs font-semibold uppercase tracking-wider ${x?"border-slate-700 text-slate-400":"border-slate-200 text-slate-500"}`,children:[e.jsx("div",{children:"Component"}),An.map(o=>e.jsxs("div",{className:"text-center",children:["Phase ",o]},o)),e.jsx("div",{className:"text-center",children:"Average"}),e.jsx("div",{className:"text-center",children:"Status"})]}),e.jsx("div",{className:"mt-4 space-y-3",children:m.map(({component:o,average:E,status:p})=>e.jsxs("button",{type:"button",onClick:()=>a(o.id),className:`grid w-full grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 rounded-xl border p-2.5 text-left transition-colors ${x?"hover:border-slate-500":"hover:border-slate-300"} ${p.rowClass}`,children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-sm font-semibold ${x?"text-slate-100":"text-slate-800"}`,children:o.label}),e.jsxs("div",{className:`mt-1 text-xs ${x?"text-slate-300":"text-slate-500"}`,children:["Target score ",o.target," · completes by Phase ",o.phase]})]}),An.map(l=>{const u=l<=o.phase,S=l===o.phase;return e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:`h-7 w-full rounded-full px-1 py-1 ${x?"bg-slate-700/70":"bg-white/70"}`,children:u?e.jsx("div",{className:`h-full rounded-full ${p.barClass} ${S?"opacity-100":"opacity-35"}`,title:S?"Expected completion phase":"Planned timeline"}):null})},`${o.id}-${l}`)}),e.jsx("div",{className:`flex items-center justify-center text-sm font-semibold ${x?"text-slate-100":"text-slate-700"}`,children:E}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("span",{className:`rounded-full px-2.5 py-1 text-xs font-semibold ${p.chipClass}`,children:p.label})})]},o.id))}),e.jsxs("div",{className:`mt-4 rounded-md border p-3 text-xs ${x?"border-slate-700 bg-slate-900 text-slate-300":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{className:"font-semibold",children:"Key:"})," Grey rows are not yet due for the current phase. Red rows indicate overdue or off-track work."]})]})})]})}function $a(n){return Ss.sanitize(n,{USE_PROFILES:{html:!0}})}const La=[{label:"Bold",command:"bold",icon:"B"},{label:"Italic",command:"italic",icon:"I"},{label:"Bullet list",command:"insertUnorderedList",icon:"•"},{label:"Numbered list",command:"insertOrderedList",icon:"1."}];function mt({value:n,onChange:t,placeholder:s,className:a}){const d=c.useRef(null);c.useEffect(()=>{const o=d.current;o&&o.innerHTML!==n&&(o.innerHTML=n)},[n]);const v=()=>{const o=d.current;o&&t($a(o.innerHTML))},x=o=>{var E;(E=d.current)==null||E.focus(),document.execCommand(o,!1),v()},m=!n||n==="<br>";return e.jsxs("div",{className:`rounded-md border border-slate-300 bg-white ${a||""}`,children:[e.jsx("div",{"data-print-hide":"true",className:"flex items-center gap-1 border-b border-slate-200 bg-slate-50 px-1.5 py-1",children:La.map(o=>e.jsx("button",{type:"button",title:o.label,"aria-label":o.label,onMouseDown:E=>E.preventDefault(),onClick:()=>x(o.command),className:"flex h-6 min-w-[1.5rem] items-center justify-center rounded px-1 text-xs font-bold text-slate-600 hover:bg-slate-200",children:o.icon},o.command))}),e.jsxs("div",{className:"relative",children:[m&&s?e.jsx("span",{className:"pointer-events-none absolute left-2 top-1.5 text-sm text-slate-400",children:s}):null,e.jsx("div",{ref:d,contentEditable:!0,suppressContentEditableWarning:!0,onInput:v,onBlur:v,className:"min-h-[4.5rem] px-2 py-1.5 text-sm text-slate-800 outline-none [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"})]})]})}function yn(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}const Fn="nhs-highlight-builder-layout",ut=[{id:"executive-summary",label:"Executive Summary"},{id:"change-dashboard",label:"Change Dashboard"},{id:"adoption-metrics",label:"Adoption Metrics"},{id:"what-went-well",label:"What Went Well"},{id:"risks-issues",label:"Key Risks and Issues"},{id:"stakeholder-insights",label:"Stakeholder Insights"},{id:"interventions-delivered",label:"Change Interventions Delivered"},{id:"upcoming-priorities",label:"Upcoming Priorities"},{id:"decisions-required",label:"Decisions Required"},{id:"change-lead-assessment",label:"Change Lead Assessment"}],Le={title:"Executive Highlight Report",themeColor:"#005eb8",logoDataUrl:"",programmeName:"",reportingPeriod:"",changeLeadName:"",sroName:"",overallStatus:"Amber",orientation:"landscape",bragSlides:[],sections:["executive-summary","change-dashboard","adoption-metrics","what-went-well","risks-issues","stakeholder-insights","interventions-delivered","upcoming-priorities","decisions-required","change-lead-assessment"],sectionNarratives:{}},Fa={Green:"bg-green-100 text-green-800 border-green-200",Amber:"bg-amber-100 text-amber-800 border-amber-200",Red:"bg-red-100 text-red-800 border-red-200"},Ba={Green:"bg-green-500",Amber:"bg-amber-500",Red:"bg-red-500"};function On({status:n}){return e.jsxs("span",{className:`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${Fa[n]}`,children:[e.jsx("span",{className:`h-2 w-2 rounded-full ${Ba[n]}`}),n]})}function Ga(){return e.jsx("span",{className:"flex h-4 w-4 shrink-0 items-center justify-center rounded bg-green-500 text-[10px] font-bold text-white",children:"✓"})}function gt(n,t){return`${n+1}. ${t}`}function Bt(n){return Array.isArray(n)?n.filter(t=>!!t&&typeof t=="object").map(t=>({id:t.id||yn(),componentId:t.componentId||"",rows:Array.isArray(t.rows)?t.rows.filter(s=>!!s&&typeof s=="object").map(s=>({id:s.id||yn(),preventingGreenHtml:s.preventingGreenHtml||"",returnToGreenHtml:s.returnToGreenHtml||"",ownerId:s.ownerId||"",targetDate:s.targetDate||"",linkedActionId:s.linkedActionId})):[]})):[]}function Ua(){if(typeof window>"u")return Le;const n=window.localStorage.getItem(Fn);if(!n)return Le;try{const t=JSON.parse(n);return{...Le,...t,overallStatus:t.overallStatus==="Green"||t.overallStatus==="Amber"||t.overallStatus==="Red"?t.overallStatus:Le.overallStatus,orientation:t.orientation==="portrait"||t.orientation==="landscape"?t.orientation:Le.orientation,bragSlides:Bt(t.bragSlides),sections:Array.isArray(t.sections)&&t.sections.length>0?t.sections:Le.sections}}catch{return Le}}function Va({store:n,metrics:t,lenses:s,components:a=Gn,getEntry:d,trustName:v,projectName:x,themeColor:m,onLayoutSaved:o,darkMode:E=!1,currentUserId:p}){const l=n.orgProfile.teamMembers||[],[u,S]=c.useState(()=>{const g=Ua();return m&&!g.themeColor?{...g,themeColor:m}:g}),[z,Y]=c.useState(""),[w,$]=c.useState(0),k=c.useRef(null),se=c.useMemo(()=>new Set(u.sections),[u.sections]),A=c.useMemo(()=>u.sections.reduce((g,I,C)=>(g[I]=C,g),{}),[u.sections]),B=c.useMemo(()=>a.map(g=>{let I=0;g.lenses.forEach(_=>{I+=Number(d(g.id,_).score||0)});const C=Number((I/g.lenses.length).toFixed(1));return{component:g,average:C,target:g.target,gap:Number(Math.max(0,g.target-C).toFixed(1))}}),[a,d]),G=c.useMemo(()=>[...B].sort((g,I)=>I.average-g.average).slice(0,5),[B]),ue=c.useMemo(()=>a.flatMap(g=>g.lenses.flatMap(I=>(d(g.id,I).actions||[]).map(C=>({componentLabel:g.label,componentId:g.id,lens:I,action:C})))).sort((g,I)=>{const C=$e(g.action.status)==="Completed"?1:0,_=$e(I.action.status)==="Completed"?1:0;return C-_}).slice(0,8),[a,d]),oe=g=>{S(I=>({...I,...g}))},re=g=>{S(I=>{const C=se.has(g)?I.sections.filter(_=>_!==g):[...I.sections,g];return{...I,sections:C}})},te=(g,I)=>{S(C=>({...C,sectionNarratives:{...C.sectionNarratives,[g]:I}}))},ae=()=>{const g=new Set(u.bragSlides.map(_=>_.componentId)),I=a.find(_=>!g.has(_.id))||a[0],C={id:yn(),componentId:(I==null?void 0:I.id)||"",rows:[]};S(_=>({..._,bragSlides:[..._.bragSlides,C]}))},R=g=>{S(I=>({...I,bragSlides:I.bragSlides.filter(C=>C.id!==g)}))},le=(g,I)=>{S(C=>({...C,bragSlides:C.bragSlides.map(_=>_.id===g?{..._,componentId:I}:_)}))},be=g=>{const I={id:yn(),preventingGreenHtml:"",returnToGreenHtml:"",ownerId:p||"",targetDate:""};S(C=>({...C,bragSlides:C.bragSlides.map(_=>_.id===g?{..._,rows:[..._.rows,I]}:_)}))},j=(g,I,C)=>{S(_=>({..._,bragSlides:_.bragSlides.map(P=>P.id===g?{...P,rows:P.rows.map(ge=>ge.id===I?{...ge,...C}:ge)}:P)}))},q=(g,I)=>{S(C=>({...C,bragSlides:C.bragSlides.map(_=>_.id===g?{..._,rows:_.rows.filter(P=>P.id!==I)}:_)}))},J=async g=>{var _;const I=(_=g.target.files)==null?void 0:_[0];if(!I)return;const C=await new Promise((P,ge)=>{const pe=new FileReader;pe.onload=()=>P(String(pe.result||"")),pe.onerror=()=>ge(new Error("Unable to read selected logo file.")),pe.readAsDataURL(I)});Y(I.name),S(P=>({...P,logoDataUrl:C})),$(P=>P+1)},xe=()=>{const g=JSON.stringify(u,null,2);window.localStorage.setItem(Fn,g),fn("highlight-builder-layout.json",g,"application/json"),o==null||o()},Pe=async g=>{var C;const I=(C=g.target.files)==null?void 0:C[0];if(I)try{const _=await I.text(),P=JSON.parse(_);S({...Le,...P,overallStatus:P.overallStatus==="Green"||P.overallStatus==="Amber"||P.overallStatus==="Red"?P.overallStatus:Le.overallStatus,orientation:P.orientation==="portrait"||P.orientation==="landscape"?P.orientation:Le.orientation,bragSlides:Bt(P.bragSlides),sections:Array.isArray(P.sections)&&P.sections.length>0?P.sections:Le.sections,sectionNarratives:P.sectionNarratives||{}})}catch{window.alert("Unable to load the selected layout JSON. Please verify the file contents.")}finally{g.target.value=""}};c.useEffect(()=>{window.localStorage.setItem(Fn,JSON.stringify(u))},[u]);const Ie=n.history.length>1?n.history[n.history.length-2]:null,f=c.useMemo(()=>B.slice(0,10).map(g=>{const I=Ie?Number((g.component.lenses.reduce((ge,pe)=>{var ee,De;return ge+Number(((De=(ee=Ie.data[g.component.id])==null?void 0:ee[pe])==null?void 0:De.score)||0)},0)/g.component.lenses.length).toFixed(1)):g.average,C=g.average>I?"▲":g.average<I?"▼":"►",_=g.average>=g.target?"Green":g.average>=Math.max(1,g.target-1)?"Amber":"Red",P=g.average>=g.target?"Consistently understood by most stakeholder groups.":g.average>=Math.max(1,g.target-1)?"Progressing, with reinforcement still required.":"Below target and requiring focused intervention.";return{area:g.component.label,status:_,trend:C,commentary:P}}),[B,Ie]),N=c.useMemo(()=>{const g=ue.filter(P=>$e(P.action.status)==="Completed").length,I=ue.length?Math.round(g/ue.length*100):0,C=ue.filter(P=>/champion|change network/i.test(P.action.text||"")).length,_=C>=5?2:C>=1?1:0;return[{measure:"User Activation",target:"95%",current:`${Math.min(100,t.overallPct+6)}%`},{measure:"Active Users",target:"80%",current:`${Math.min(100,t.overallPct)}%`},{measure:"Training Completion",target:"90%",current:`${Math.min(100,t.actionCompletionPct)}%`},{measure:"Stakeholder Engagement Score",target:"80%",current:`${Math.min(100,t.overallPct+4)}%`},{measure:"Champion Coverage",target:"1 per team",current:`${_} per team`},{measure:"User Satisfaction",target:"80%",current:`${Math.min(100,t.overallPct+2)}%`},{measure:"Process Compliance",target:"90%",current:`${Math.min(100,t.overallPct-3)}%`},{measure:"Benefits Evidence Submitted",target:"75%",current:`${Math.min(100,I)}%`}].map(P=>{const ge=Number((P.current||"").replace(/[^0-9.]/g,"")),pe=Number((P.target||"").replace(/[^0-9.]/g,"")),ee=ge>=pe?"►":ge>=pe-5?"▲":"▼",De=ge>=pe?"Green":ge>=pe-5?"Amber":"Red";return{...P,trend:ee,status:De}})},[t.actionCompletionPct,t.overallPct,ue]),de=c.useMemo(()=>B.filter(g=>g.average<g.target).slice(0,4).map(g=>({risk:`Inconsistent adoption in ${g.component.label}`,impact:"Benefits may not be realised in full.",mitigation:"Targeted coaching and local engagement sessions.",status:"Open"})),[B]),Se=c.useMemo(()=>t.nextSteps.slice(0,7).map(g=>g.message),[t.nextSteps]),V=g=>{if((u.sectionNarratives[g]||"").trim())return u.sectionNarratives[g].trim();switch(g){case"executive-summary":return`${u.overallStatus}. The programme continues to progress across ${a.length} components and ${s.length} lenses, with overall delivery at ${t.overallPct}%.`;case"change-dashboard":return"Dashboard status is derived from current component averages versus targets, with trend based on the most recent finalised snapshot.";case"adoption-metrics":return"Metrics below provide an operational view of progress against key adoption measures and targets.";case"what-went-well":return"List key achievements for the reporting period, including sponsorship visibility and areas of strengthened adoption.";case"risks-issues":return"The following risks/issues require active monitoring and mitigation.";case"stakeholder-insights":return"Summarise positive feedback themes, concerns, and sentiment from stakeholder listening channels.";case"interventions-delivered":return"Capture interventions completed this month and assess their observed effectiveness.";case"upcoming-priorities":return"Set out the next 30-day focus to maintain delivery momentum and close adoption gaps.";case"decisions-required":return"Record approvals and decisions needed to unblock delivery and sustain adoption progress.";case"change-lead-assessment":return"Provide confidence ratings and the overall professional assessment from the Change Lead.";default:return""}},M=g=>{const I=V(g);if(g==="change-dashboard")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:I}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Trend"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Commentary"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:f.map(C=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:C.area}),e.jsx("td",{className:"px-3 py-2 text-sm",children:e.jsx(On,{status:C.status})}),e.jsx("td",{className:"px-3 py-2 text-sm",children:C.trend}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:C.commentary})]},C.area))})]})})]});if(g==="adoption-metrics")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:I}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Measure"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Current"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Trend"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:N.map(C=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:C.measure}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:C.target}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:C.current}),e.jsx("td",{className:"px-3 py-2 text-sm",children:C.trend}),e.jsx("td",{className:"px-3 py-2 text-sm",children:e.jsx(On,{status:C.status})})]},C.measure))})]})})]});if(g==="risks-issues")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:I}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Risk / Issue"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Impact"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Mitigation"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-100",children:de.length?de.map((C,_)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:C.risk}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:C.impact}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:C.mitigation}),e.jsx("td",{className:"px-3 py-2 text-sm",children:C.status})]},`${C.risk}-${_}`)):e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-2 text-sm text-slate-500",colSpan:4,children:"No key risks are currently above threshold."})})})]})})]});if(g==="upcoming-priorities")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:I}),e.jsx("ol",{className:"mt-3 list-decimal pl-5 space-y-1 text-sm text-slate-700",children:Se.length?Se.map((C,_)=>e.jsx("li",{children:C},`${C}-${_}`)):e.jsx("li",{children:"No immediate priorities detected from current data."})})]});if(g==="what-went-well")return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:I}),e.jsx("ul",{className:"mt-3 space-y-1.5 text-sm text-slate-700",children:G.slice(0,5).map(C=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(Ga,{}),C.component.label," is tracking at ",C.average," against target ",C.target,"."]},C.component.id))})]});if(g==="stakeholder-insights"){const C=Math.min(85,Math.max(45,t.overallPct-10)),_=Math.min(35,Math.max(10,100-C-8)),P=Math.max(3,100-C-_);return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:I}),e.jsxs("div",{className:"mt-3 grid gap-2 md:grid-cols-3 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 rounded border border-green-200 bg-green-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-green-500"}),"Positive: ",C,"%"]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-amber-200 bg-amber-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500"}),"Neutral: ",_,"%"]}),e.jsxs("div",{className:"flex items-center gap-2 rounded border border-red-200 bg-red-50 p-3",children:[e.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full bg-red-500"}),"Negative: ",P,"%"]})]})]})}return g==="interventions-delivered"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:I}),e.jsxs("ul",{className:"mt-3 space-y-1 text-sm text-slate-700",children:[e.jsx("li",{children:"• Sponsor briefing sessions"}),e.jsx("li",{children:"• Stakeholder engagement workshops"}),e.jsx("li",{children:"• Communications campaign"}),e.jsx("li",{children:"• Training delivery"}),e.jsx("li",{children:"• Champion network meetings"}),e.jsx("li",{children:"• Adoption data reviews"})]})]}):g==="decisions-required"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:I}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Decision"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Required By"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Approval for additional adoption support resource"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Programme Board"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:"TBC"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Agreement on ongoing benefits ownership"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"SRO"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:"TBC"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Endorsement of next rollout phase"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Steering Group"}),e.jsx("td",{className:"px-3 py-2 text-sm text-slate-600",children:"TBC"})]})]})]})})]}):g==="change-lead-assessment"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:I}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Area"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Confidence"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Delivery of Change Activities"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"High"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Stakeholder Engagement"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"High"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Adoption Achievement"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"Medium"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Benefits Realisation"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"Medium"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-slate-700",children:"Sustainability Post Go-Live"}),e.jsx("td",{className:"px-3 py-2 text-sm",children:"Medium"})]})]})]})})]}):e.jsx(e.Fragment,{children:e.jsx("p",{className:"mt-2 text-sm whitespace-pre-line text-slate-700",children:I})})},Ne=()=>{if(!k.current){window.alert("Preview content is not ready to print yet.");return}const g=window.open("","_blank");if(!g)return;g.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8" /><title>Highlight Report</title></head><body></body></html>'),document.querySelectorAll('link[rel="stylesheet"], style').forEach(_=>{g.document.head.appendChild(_.cloneNode(!0))});const I=g.document.createElement("style");I.textContent=`
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
    `,g.document.head.appendChild(I);const C=k.current.cloneNode(!0);C.className="printable-report",C.querySelectorAll('[data-print-exclude="true"]').forEach(_=>_.remove()),g.document.body.appendChild(C),g.document.close(),setTimeout(()=>{g.focus(),g.print(),g.close()},250)};return e.jsxs("section",{className:"space-y-6",children:[E?e.jsx("div",{className:"rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm font-semibold text-red-900",children:"Dark mode not compatible for Highlight Report due to print/save functionality."}):null,e.jsx("div",{className:"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",children:e.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Highlight Builder Tool"}),e.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:"Create a polished highlight pack"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:xe,className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"Save JSON Layout"}),e.jsxs("label",{className:"rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 cursor-pointer",children:["Load JSON Layout",e.jsx("input",{type:"file",accept:"application/json",className:"hidden",onChange:Pe},w)]}),e.jsxs("div",{className:"flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-semibold",role:"group","aria-label":"PDF export orientation",children:[e.jsx("button",{type:"button",onClick:()=>oe({orientation:"portrait"}),"aria-pressed":u.orientation==="portrait",className:`px-3 py-2 transition-colors ${u.orientation==="portrait"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Portrait"}),e.jsx("button",{type:"button",onClick:()=>oe({orientation:"landscape"}),"aria-pressed":u.orientation==="landscape",className:`px-3 py-2 transition-colors border-l border-slate-300 ${u.orientation==="landscape"?"bg-slate-800 text-white":"bg-white text-slate-600 hover:bg-slate-100"}`,children:"Landscape"})]}),e.jsxs("button",{type:"button",onClick:Ne,className:"rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm",style:{backgroundColor:u.themeColor},children:["Print / Save PDF (",u.orientation==="landscape"?"Landscape":"Portrait",")"]})]})]})}),e.jsxs("div",{className:"grid gap-6 xl:grid-cols-[340px,1fr]",children:[e.jsx("aside",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Report title"}),e.jsx("input",{value:u.title,onChange:g=>oe({title:g.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Programme"}),e.jsx("input",{value:u.programmeName,onChange:g=>oe({programmeName:g.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Reporting period"}),e.jsx("input",{value:u.reportingPeriod,onChange:g=>oe({reportingPeriod:g.target.value}),placeholder:"July 2026",className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Change Lead"}),e.jsx("input",{value:u.changeLeadName,onChange:g=>oe({changeLeadName:g.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"SRO"}),e.jsx("input",{value:u.sroName,onChange:g=>oe({sroName:g.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Overall Change Status"}),e.jsxs("select",{value:u.overallStatus,onChange:g=>oe({overallStatus:g.target.value}),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500",children:[e.jsx("option",{value:"Green",children:"Green"}),e.jsx("option",{value:"Amber",children:"Amber"}),e.jsx("option",{value:"Red",children:"Red"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Theme colour"}),e.jsx("input",{type:"color",value:u.themeColor,onChange:g=>oe({themeColor:g.target.value}),className:"h-10 w-full rounded-md border border-slate-300"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Logo in top-left"}),e.jsxs("label",{className:"flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-3 py-4 text-sm text-slate-700 hover:bg-slate-100",children:[e.jsx("span",{children:z||"Upload logo"}),e.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:J})]}),u.logoDataUrl?e.jsx("div",{className:"mt-3 rounded-md border border-slate-200 bg-slate-50 p-2",children:e.jsx("img",{alt:"Preview logo",src:u.logoDataUrl,className:"max-h-16 w-auto"})}):null]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-1",children:"Programme/Project Readiness Slides"}),e.jsx("p",{className:"text-xs text-slate-500 mb-3",children:"These print first, one per page. Add a slide per component you want to report on."}),e.jsxs("div",{className:"space-y-2",children:[u.bragSlides.map((g,I)=>e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-500",children:["Page ",I+1]}),e.jsx("button",{type:"button",onClick:()=>R(g.id),className:"text-xs font-semibold text-red-600 hover:text-red-800",children:"Remove"})]}),e.jsx("select",{value:g.componentId,onChange:C=>le(g.id,C.target.value),className:"mt-1 w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm outline-none focus:border-blue-500",children:a.map(C=>e.jsx("option",{value:C.id,children:C.label},C.id))}),e.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:[g.rows.length," row",g.rows.length===1?"":"s"]})]},g.id)),u.bragSlides.length?null:e.jsx("p",{className:"text-sm text-slate-500",children:"No readiness slides yet."})]}),e.jsx("button",{type:"button",onClick:ae,disabled:!a.length,className:"mt-3 w-full rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 disabled:opacity-50",children:"+ Add Readiness Slide"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700 mb-3",children:"Report sections"}),e.jsx("div",{className:"space-y-2",children:ut.map(g=>{const I=se.has(g.id),C=g.id,_=A[g.id],P=typeof _=="number"?gt(_,g.label):g.label;return e.jsxs("div",{className:"rounded-md border border-slate-200 px-3 py-2",children:[e.jsxs("label",{className:"flex items-center gap-3 text-sm text-slate-700",children:[e.jsx("input",{type:"checkbox",checked:I,onChange:()=>re(g.id)}),e.jsx("span",{children:P})]}),I?e.jsxs("div",{className:"mt-3 space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-1",children:"Section narrative"}),e.jsx("textarea",{value:u.sectionNarratives[C]||"",onChange:ge=>te(C,ge.target.value),placeholder:V(C),rows:4,className:"w-full rounded-md border border-slate-300 px-2 py-2 text-xs outline-none focus:border-blue-500"})]}),e.jsx("p",{className:"text-xs text-slate-500",children:"All adoption components are automatically included in this section."})]}):null]},g.id)})})]})]})}),e.jsxs("div",{ref:k,className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[e.jsxs("div",{className:"mb-4 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3",children:[u.logoDataUrl?e.jsx("img",{alt:"Logo preview",src:u.logoDataUrl,className:"max-h-12 w-auto"}):e.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-md bg-slate-200 text-sm font-bold text-slate-700",children:"NHS"}),e.jsxs("div",{children:[e.jsx("div",{"data-print-hide":"true",className:"text-xs font-semibold uppercase tracking-[0.18em] text-slate-500",children:"Builder Preview"}),e.jsx("div",{className:"text-lg font-bold text-slate-900",children:u.title}),e.jsxs("div",{className:"text-sm text-slate-600 mt-1",children:[u.programmeName||x||"Unnamed Programme"," ·"," ",u.reportingPeriod||"Reporting period not set"]}),e.jsxs("div",{className:"mt-1 flex items-center gap-2 text-sm text-slate-600",children:["Overall Status: ",e.jsx(On,{status:u.overallStatus})]}),e.jsx("div",{className:"text-sm text-slate-600 mt-0.5",children:v||"Unconfigured Trust"})]})]}),e.jsxs("div",{className:"grid gap-3",children:[u.bragSlides.map(g=>{const I=B.find(_=>_.component.id===g.componentId),C=I?Dt(I.average,I.target):null;return e.jsxs("article",{"data-brag-slide":"true",className:"rounded-xl border border-slate-200 p-4",style:{borderLeft:`4px solid ${u.themeColor}`},children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Programme/Project Readiness"}),e.jsx("h3",{className:"text-lg font-bold text-slate-900",children:(I==null?void 0:I.component.label)||"Select a component"})]}),I&&C?e.jsxs("div",{className:"text-right",children:[e.jsx("span",{className:`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold ${Tt[C]}`,children:C}),e.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:[I.average.toFixed(1)," of ",I.target," target"]})]}):null]}),e.jsx("div",{className:"mt-3 overflow-x-auto rounded-md border border-slate-200",children:e.jsxs("table",{className:"min-w-full divide-y divide-slate-200 bg-white",children:[e.jsx("thead",{className:"bg-slate-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What is preventing you from being green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"What do you/others need to do to return to green"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Action owner"}),e.jsx("th",{className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",children:"Target date"}),e.jsx("th",{"data-print-hide":"true",className:"px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-100",children:[g.rows.map(_=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(mt,{value:_.preventingGreenHtml,onChange:P=>j(g.id,_.id,{preventingGreenHtml:P}),placeholder:"What's blocking green?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx(mt,{value:_.returnToGreenHtml,onChange:P=>j(g.id,_.id,{returnToGreenHtml:P}),placeholder:"What needs to happen?"})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsxs("select",{value:_.ownerId,onChange:P=>j(g.id,_.id,{ownerId:P.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm",children:[e.jsx("option",{value:"",children:"Unassigned"}),l.map(P=>e.jsxs("option",{value:P.id,children:[P.name||"Unnamed",P.role?` — ${P.role}`:""]},P.id))]})}),e.jsx("td",{className:"px-3 py-2 align-top",children:e.jsx("input",{type:"date",value:_.targetDate,onChange:P=>j(g.id,_.id,{targetDate:P.target.value}),className:"w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"})}),e.jsx("td",{"data-print-hide":"true",className:"px-3 py-2 align-top",children:e.jsx("button",{type:"button",onClick:()=>q(g.id,_.id),className:"rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100",children:"Remove"})})]},_.id)),g.rows.length?null:e.jsx("tr",{children:e.jsx("td",{className:"px-3 py-3 text-sm text-slate-500",colSpan:5,children:"No rows yet."})})]})]})}),e.jsx("button",{type:"button","data-print-hide":"true",onClick:()=>be(g.id),className:"mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200",children:"+ Add Row"})]},g.id)}),u.sections.map(g=>{var I;return e.jsxs("article",{className:"rounded-xl border border-slate-200 p-4",style:{borderLeft:`4px solid ${u.themeColor}`},children:[e.jsx("div",{className:"text-sm font-semibold text-slate-700",children:gt(A[g]||0,((I=ut.find(C=>C.id===g))==null?void 0:I.label)||g)}),M(g)]},g)})]})]})]})]})}function pt(){return e.jsx("svg",{className:"w-5 h-5 text-blue-500 mr-2 shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})}function Ma(n){return n in Vn}function Ha({lensName:n,onClose:t,darkMode:s=!1}){if(!n||!Ma(n))return null;const a=Vn[n];return e.jsx("div",{id:"lens-info-modal",className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",onClick:d=>{d.target===d.currentTarget&&t()},children:e.jsxs("div",{className:`${s?"bg-slate-800 border-slate-700":"bg-white"} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border`,children:[e.jsxs("div",{className:`${s?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"} sticky top-0 border-b p-6 flex items-center justify-between`,children:[e.jsx("h2",{className:`text-2xl font-bold ${s?"text-slate-100":"text-slate-800"}`,children:n}),e.jsx("button",{onClick:t,className:`${s?"text-slate-300 hover:text-slate-100":"text-slate-500 hover:text-slate-700"}`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsxs("div",{className:`p-6 space-y-4 ${s?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(pt,{}),"Outcome"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.outcome})]}),e.jsxs("div",{children:[e.jsxs("h3",{className:`font-bold text-lg mb-2 flex items-center ${s?"text-slate-100":"text-slate-800"}`,children:[e.jsx(pt,{}),"What Good Looks Like"]}),e.jsx("p",{className:"whitespace-pre-wrap",children:a.whatGoodLooksLike})]})]})]})})}function Wa({darkMode:n=!1,onNavigateToProjectDetails:t,onNavigateToGuide:s,onNavigateToDashboard:a}){const d=It(),[v,x]=c.useState(0);return e.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:`text-2xl font-bold ${n?"text-slate-100":"text-slate-800"}`,children:"Introduction"}),e.jsx("p",{className:`mt-2 text-sm ${n?"text-slate-300":"text-slate-600"}`,children:"The five introduction steps are shown below in collapsible sections."})]}),d.map((m,o)=>e.jsxs("section",{className:`${n?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} overflow-hidden rounded-lg border shadow-sm`,children:[e.jsxs("button",{type:"button",onClick:()=>x(o),"aria-expanded":v===o,className:`flex w-full items-center justify-between gap-3 p-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-inset ${n?"hover:bg-slate-700":"hover:bg-slate-50"}`,children:[e.jsxs("div",{children:[e.jsxs("p",{className:`text-xs font-semibold uppercase tracking-wider ${n?"text-blue-300":"text-blue-700"}`,children:["Step ",o+1," of ",d.length]}),e.jsx("h3",{className:`mt-1 text-lg font-semibold ${n?"text-slate-100":"text-slate-900"}`,children:m.title})]}),e.jsx("span",{className:`shrink-0 text-lg font-semibold ${n?"text-slate-300":"text-slate-500"}`,"aria-hidden":"true",children:v===o?"-":"+"})]}),v===o?e.jsxs("div",{className:"px-5 pb-5",children:[m.body,o===d.length-1?e.jsxs("div",{className:"mt-5 flex flex-wrap gap-2",children:[t?e.jsx("button",{type:"button",onClick:t,className:"rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"Set up your CST Personalisation"}):null,s?e.jsx("button",{type:"button",onClick:s,className:"rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100",children:"See the 6 Key Questions"}):null,a?e.jsx("button",{type:"button",onClick:a,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Go to dashboard"}):null]}):null]}):null]},m.title))]})}const Ka=[{name:"NHS Blue",color:"#005eb8"},{name:"Navy",color:"#003366"},{name:"Teal",color:"#009b8a"},{name:"Purple",color:"#6c28d9"},{name:"Green",color:"#059669"},{name:"Red",color:"#dc2626"}];function za({userSettings:n,onUserSettingsUpdate:t,onLoadExampleData:s,onResetData:a,canUseCustomTheme:d=!0,engagementGrade:v,engagementLevel:x,engagementXp:m,darkMode:o=!1}){const[E,p]=c.useState(n),[l,u]=c.useState(0),[S,z]=c.useState(null),Y=c.useRef(null);c.useEffect(()=>{p(n)},[n]);const w=c.useCallback(R=>{const le={...E,...R};p(le),t(le)},[E,t]),$=async R=>{var j;const le=(j=R.target.files)==null?void 0:j[0];if(!le)return;const be=await new Promise((q,J)=>{const xe=new FileReader;xe.onload=()=>q(String(xe.result||"")),xe.onerror=()=>J(new Error("Unable to read selected profile image.")),xe.readAsDataURL(le)});w({profileImageDataUrl:be}),u(q=>q+1)},k=()=>{w({profileImageDataUrl:void 0})},se=R=>{w({themeColor:R})},A={grade:"Your grade shows your overall engagement trend. S = excellent, A = strong, B = solid, C = steady, D = building, E = starting out.",level:"Your level reflects cumulative XP gained through consistent engagement. Higher levels unlock more personalised options and features.",xp:"XP increases as you complete important actions, finalise months on time, and keep returning to the tool."},B=x??1,G=m??0,ue=Math.max(0,(B-1)*120),oe=Math.max(0,G-ue),re=Math.max(0,Math.min(100,Math.round(oe/120*100))),te=Math.max(0,B*120-G),ae=[{key:"grade",label:"Grade",value:v||"N/A",tooltip:A.grade},{key:"level",label:"Level",value:B,tooltip:A.level},{key:"xp",label:"XP",value:G,tooltip:A.xp}];return e.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[e.jsx("h2",{className:`text-2xl font-bold ${o?"text-slate-100":"text-slate-800"}`,children:"Settings"}),e.jsx("p",{className:`text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Use this page to manage your profile, personal preferences, and support options."}),(v||x||m!==void 0)&&e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Engagement and Progress"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"A quick view of how consistently the tool is being used over time."})]}),e.jsxs("div",{className:`${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("h4",{className:`text-sm font-semibold mb-2 ${o?"text-slate-100":"text-slate-800"}`,children:"Engagement Summary"}),e.jsx("p",{className:`mb-3 text-xs ${o?"text-slate-300":"text-slate-600"}`,children:"Tap the info icon beside each metric for a plain-language explanation."}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:ae.map(R=>e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("p",{className:`text-xs ${o?"text-slate-300":"text-slate-600"}`,children:R.label}),e.jsx("button",{type:"button","aria-label":`${R.label} information`,"aria-expanded":S===R.key,onClick:()=>z(le=>le===R.key?null:R.key),className:`inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#005eb8] text-[9px] font-bold text-[#005eb8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffeb3b] ${o?"bg-[#1d334f]":"bg-[#e8f1fb]"}`,children:"i"})]}),e.jsx("p",{className:`text-lg font-bold ${o?"text-slate-100":"text-slate-800"}`,children:R.value}),S===R.key?e.jsx("div",{className:`absolute left-0 top-11 z-10 w-64 rounded-md border px-3 py-2 text-xs shadow-lg ${o?"border-slate-600 bg-slate-800 text-slate-100":"border-slate-200 bg-white text-slate-700"}`,children:R.tooltip}):null]},R.key))}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-xs font-medium ${o?"text-slate-300":"text-slate-600"}`,children:"Progress to next level"}),e.jsxs("p",{className:`text-xs ${o?"text-slate-300":"text-slate-600"}`,children:[te," XP to Level ",B+1]})]}),e.jsx("div",{className:`mt-1 h-2.5 w-full overflow-hidden rounded-full ${o?"bg-slate-700":"bg-slate-200"}`,children:e.jsx("div",{className:"h-full rounded-full bg-[#005eb8] transition-all",style:{width:`${re}%`}})})]}),e.jsx("p",{className:`mt-3 text-xs ${o?"text-slate-400":"text-slate-500"}`,children:"This reflects consistency over time, not perfection. Small, regular updates are what move this forwards."})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-5`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Your Profile"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"These details personalise your experience and reports."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-name",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Your Name"}),e.jsx("input",{id:"user-name",type:"text",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:E.name,onChange:R=>w({name:R.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-preferences",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Preferences"}),e.jsx("textarea",{id:"user-preferences",className:`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 h-24 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,value:E.preferences,onChange:R=>w({preferences:R.target.value})})]}),e.jsxs("div",{children:[e.jsx("label",{className:`block text-sm font-medium mb-2 ${o?"text-slate-200":"text-slate-700"}`,children:"Profile Picture"}),e.jsxs("div",{className:"flex items-start gap-4",children:[E.profileImageDataUrl?e.jsx("img",{src:E.profileImageDataUrl,alt:"Profile",className:"h-20 w-20 rounded-md border border-slate-300 object-cover"}):e.jsx("div",{className:"h-20 w-20 rounded-md border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center",children:e.jsx("span",{className:"text-xs text-slate-500",children:"No image"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{type:"button",onClick:()=>{var R;return(R=Y.current)==null?void 0:R.click()},className:`rounded-md px-3 py-2 text-sm font-medium transition-colors ${o?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:E.profileImageDataUrl?"Change Picture":"Upload Picture"}),E.profileImageDataUrl?e.jsx("button",{type:"button",onClick:k,className:`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${o?"border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25":"border-red-200 bg-red-50 text-red-700 hover:bg-red-100"}`,children:"Remove"}):null,e.jsx("input",{ref:Y,type:"file",accept:"image/*",className:"hidden",onChange:$},l)]})]})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Appearance"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Choose the theme colour you want to use throughout the app."})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[e.jsxs("label",{className:`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${o?"border-slate-700 bg-slate-900 text-slate-100":"border-slate-200 bg-slate-50 text-slate-700"}`,children:[e.jsx("span",{children:"Dark mode"}),e.jsx("input",{type:"checkbox",checked:!!E.darkMode,onChange:R=>w({darkMode:R.target.checked}),className:"h-4 w-4"})]}),e.jsxs("label",{className:`text-sm ${o?"text-slate-100":"text-slate-700"}`,children:[e.jsx("span",{className:"mb-1 block font-medium",children:"Status colour profile"}),e.jsxs("select",{value:E.colorAccessibilityMode||"standard",onChange:R=>w({colorAccessibilityMode:R.target.value}),className:`w-full rounded-md border p-2 pr-10 ${o?"border-slate-600 bg-slate-900 text-slate-100":"border-[#768692] bg-white text-slate-900"}`,children:[e.jsx("option",{value:"standard",children:"Standard"}),e.jsx("option",{value:"color-blind-friendly",children:"Color-blind friendly"})]})]})]}),e.jsx("p",{className:`text-xs ${o?"text-slate-400":"text-slate-500"}`,children:"Color-blind friendly mode keeps BRAG labels in text and shifts status colors to higher-contrast alternatives."}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"user-theme-colour",className:`block text-sm font-medium mb-1 ${o?"text-slate-200":"text-slate-700"}`,children:"Theme Colour"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:Ka.map(R=>e.jsxs("button",{type:"button",onClick:()=>se(R.color),className:"flex items-center gap-2 rounded-md border-2 px-3 py-2 text-sm",style:{borderColor:E.themeColor===R.color?R.color:"#e2e8f0",backgroundColor:E.themeColor===R.color?`${R.color}22`:"transparent"},children:[e.jsx("span",{className:"h-4 w-4 rounded-sm border border-slate-300",style:{backgroundColor:R.color}}),e.jsx("span",{children:R.name})]},R.color))}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{id:"user-theme-colour",type:"color",className:"h-10 w-14 rounded border border-slate-300 p-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",value:E.themeColor,onChange:R=>w({themeColor:R.target.value}),disabled:!d}),e.jsx("span",{className:`text-sm font-mono ${o?"text-slate-200":"text-slate-600"}`,children:E.themeColor}),d?null:e.jsx("span",{className:`text-xs ${o?"text-slate-400":"text-slate-500"}`,children:"Unlocks at level 3"})]})]})]})]}),e.jsxs("div",{className:`${o?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} rounded-lg shadow-sm border p-6 space-y-4`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`text-lg font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Data and Support"}),e.jsx("p",{className:`mt-1 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Load sample data, reset local data, read FAQs, or report an issue."})]}),e.jsxs("div",{className:`${o?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} rounded-md border p-4`,children:[e.jsx("h4",{className:`text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Data Tools"}),e.jsxs("div",{className:"mt-3 flex flex-wrap gap-3",children:[e.jsx("button",{onClick:s,className:Lt,children:"Example Data"}),e.jsx("button",{onClick:a,className:`inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors ${Ft}`,children:"Reset Data"})]}),e.jsx("p",{className:`mt-2 text-xs ${o?"text-slate-400":"text-slate-500"}`,children:"Example Data loads sample assessment content so you can explore the dashboards quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${o?"text-slate-100":"text-slate-700"}`,children:"How is my data stored?"}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Your settings and assessment state are stored locally in your browser using local storage."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${o?"text-slate-100":"text-slate-700"}`,children:"What does Example Data do?"}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"It populates the tool with the included sample JSON so you can explore dashboards and workflows quickly."})]}),e.jsxs("details",{className:`rounded-md border p-3 ${o?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("summary",{className:`cursor-pointer text-sm font-medium ${o?"text-slate-100":"text-slate-700"}`,children:"Can I change the theme colour later?"}),e.jsx("p",{className:`mt-2 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Yes. Update the theme colour at any time in User Settings and it is applied immediately."})]}),e.jsxs("div",{className:`rounded-md border p-4 ${o?"border-slate-700 bg-slate-900":"border-slate-200"}`,children:[e.jsx("h4",{className:`mb-2 text-sm font-semibold ${o?"text-slate-100":"text-slate-800"}`,children:"Submit a Bug"}),e.jsx("p",{className:`mb-3 text-sm ${o?"text-slate-300":"text-slate-600"}`,children:"Found an issue? Send details directly via email."}),e.jsx("a",{href:"mailto:andrew.fraser22@kpmg.co.uk?subject=NHS%20Digital%20Adoption%20Tool%20Bug",className:`inline-flex rounded-md px-4 py-2 text-sm font-medium transition-colors ${o?"bg-slate-700 text-slate-100 hover:bg-slate-600":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:"Report Bug"})]})]})]})}function Ya(n){return{id:`audit:${Date.now()}-${Math.random().toString(36).slice(2,8)}`,timestamp:new Date().toISOString(),actor:n.actor,eventType:n.eventType,entityType:n.entityType,entityId:n.entityId,summary:n.summary,trustName:n.trustName,projectName:n.projectName,componentId:n.componentId,lens:n.lens,reason:n.reason,before:n.before,after:n.after,source:n.source||"local",importedAt:n.importedAt}}const qa=1e4;function Hn(n,t=qa){return n.length<=t?n:n.slice(n.length-t)}const ht="nhs-digital-adoption-store",Ja=new Set(["pathway-1","pathway-2","pathway-3"]);function Gt(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function Oe(n,t){if(!Gt(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected object.`)}function U(n,t){if(n!==void 0&&typeof n!="string")throw new Error(`Invalid adoption assessment payload at ${t}: expected string.`)}function Ut(n,t){if(n!==void 0&&typeof n!="number")throw new Error(`Invalid adoption assessment payload at ${t}: expected number.`)}function Wn(n,t){if(n!==void 0&&!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`)}function Vt(n,t){Oe(n,t),U(n.id,`${t}.id`),U(n.text,`${t}.text`),U(n.owner,`${t}.owner`),U(n.timescale,`${t}.timescale`),U(n.status,`${t}.status`),U(n.notes,`${t}.notes`),U(n.evidence,`${t}.evidence`)}function Xa(n,t){Oe(n,t),Ut(n.score,`${t}.score`),U(n.justification,`${t}.justification`),U(n.evidence,`${t}.evidence`),Wn(n.actions,`${t}.actions`),(n.actions||[]).forEach((s,a)=>{Vt(s,`${t}.actions[${a}]`)})}function Mt(n,t){Oe(n,t),Object.keys(n).forEach(s=>{const a=n[s];Oe(a,`${t}.${s}`),Object.keys(a).forEach(d=>{Xa(a[d],`${t}.${s}.${d}`)})})}function Qa(n,t){Oe(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((d,v)=>{Oe(d,`${t}.${s}[${v}]`),U(d.id,`${t}.${s}[${v}].id`),U(d.text,`${t}.${s}[${v}].text`),U(d.owner,`${t}.${s}[${v}].owner`),U(d.timescale,`${t}.${s}[${v}].timescale`),U(d.notes,`${t}.${s}[${v}].notes`),U(d.evidence,`${t}.${s}[${v}].evidence`),Wn(d.linkedActions,`${t}.${s}[${v}].linkedActions`),(d.linkedActions||[]).forEach((x,m)=>{Oe(x,`${t}.${s}[${v}].linkedActions[${m}]`),U(x.lens,`${t}.${s}[${v}].linkedActions[${m}].lens`),U(x.actionId,`${t}.${s}[${v}].linkedActions[${m}].actionId`)})})})}function Za(n,t){Oe(n,t),Object.keys(n).forEach(s=>{const a=n[s];Oe(a,`${t}.${s}`),["pathway-1","pathway-2","pathway-3"].forEach(d=>{const v=a[d];Wn(v,`${t}.${s}.${d}`),(v||[]).forEach((x,m)=>{if(typeof x!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}.${d}[${m}]: expected string.`)})})})}function eo(n,t){Oe(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((d,v)=>{if(typeof d!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}[${v}]: expected string.`)})})}function no(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{Oe(s,`${t}[${a}]`),U(s.id,`${t}[${a}].id`),U(s.removedAt,`${t}[${a}].removedAt`),U(s.reason,`${t}[${a}].reason`),U(s.componentId,`${t}[${a}].componentId`),U(s.lens,`${t}[${a}].lens`),U(s.actionId,`${t}[${a}].actionId`),U(s.actionText,`${t}[${a}].actionText`),U(s.actionType,`${t}[${a}].actionType`)})}function to(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{Oe(s,`${t}[${a}]`),U(s.id,`${t}[${a}].id`),U(s.timestamp,`${t}[${a}].timestamp`),U(s.actor,`${t}[${a}].actor`),U(s.eventType,`${t}[${a}].eventType`),U(s.entityType,`${t}[${a}].entityType`),U(s.entityId,`${t}[${a}].entityId`),U(s.summary,`${t}[${a}].summary`),U(s.trustName,`${t}[${a}].trustName`),U(s.projectName,`${t}[${a}].projectName`),U(s.componentId,`${t}[${a}].componentId`),U(s.lens,`${t}[${a}].lens`),U(s.reason,`${t}[${a}].reason`),U(s.source,`${t}[${a}].source`),U(s.importedAt,`${t}[${a}].importedAt`)})}function so(n,t){if(Oe(n,t),U(n.trustName,`${t}.trustName`),U(n.region,`${t}.region`),U(n.trustType,`${t}.trustType`),U(n.projectName,`${t}.projectName`),U(n.leadName,`${t}.leadName`),n.cst!==void 0){if(Oe(n.cst,`${t}.cst`),U(n.cst.type,`${t}.cst.type`),U(n.cst.pathway,`${t}.cst.pathway`),typeof n.cst.pathway=="string"&&!Ja.has(n.cst.pathway))throw new Error(`Invalid adoption assessment payload at ${t}.cst.pathway: unexpected value "${n.cst.pathway}".`);if(U(n.cst.goLiveDate,`${t}.cst.goLiveDate`),U(n.cst.fullAdoptionDate,`${t}.cst.fullAdoptionDate`),U(n.cst.benefitRealizationDate,`${t}.cst.benefitRealizationDate`),U(n.cst.toolkitChoice,`${t}.cst.toolkitChoice`),typeof n.cst.toolkitChoice=="string"&&!As(n.cst.toolkitChoice))throw new Error(`Invalid adoption assessment payload at ${t}.cst.toolkitChoice: unexpected value "${n.cst.toolkitChoice}".`)}}function ao(n,t){if(!Array.isArray(n))throw new Error(`Invalid adoption assessment payload at ${t}: expected array.`);n.forEach((s,a)=>{Oe(s,`${t}[${a}]`),U(s.monthLabel,`${t}[${a}].monthLabel`),Ut(s.overallPercentage,`${t}[${a}].overallPercentage`),s.data!==void 0&&Mt(s.data,`${t}[${a}].data`)})}function oo(n,t){Oe(n,t),Object.keys(n).forEach(s=>{if(typeof n[s]!="string")throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected string.`)})}function io(n,t){Oe(n,t),Object.keys(n).forEach(s=>{const a=n[s];if(!Array.isArray(a))throw new Error(`Invalid adoption assessment payload at ${t}.${s}: expected array.`);a.forEach((d,v)=>{Vt(d,`${t}.${s}[${v}]`)})})}function Sn(n){if(!Gt(n))throw new Error("Invalid adoption assessment payload at root: expected object.");return U(n.schemaVersion,"schemaVersion"),U(n.exportedAt,"exportedAt"),n.orgProfile!==void 0&&so(n.orgProfile,"orgProfile"),n.currentDraft!==void 0&&Mt(n.currentDraft,"currentDraft"),n.objectives!==void 0&&Qa(n.objectives,"objectives"),n.auditLog!==void 0&&to(n.auditLog,"auditLog"),n.suppressedAutoActions!==void 0&&eo(n.suppressedAutoActions,"suppressedAutoActions"),n.actionAuditLog!==void 0&&no(n.actionAuditLog,"actionAuditLog"),n.history!==void 0&&ao(n.history,"history"),n.phaseOverrides!==void 0&&oo(n.phaseOverrides,"phaseOverrides"),n.pathwayChecks!==void 0&&Za(n.pathwayChecks,"pathwayChecks"),n.componentActions!==void 0&&io(n.componentActions,"componentActions"),n}function ro(n=new Date){return n.toLocaleString("en-GB",{month:"short",year:"numeric"})}function ft(n){return{schemaVersion:"4.0",exportedAt:new Date().toISOString(),orgProfile:{...n.orgProfile},currentDraft:nn(n.currentDraft),objectives:Wt(n.objectives),auditLog:go(n.auditLog),suppressedAutoActions:zt(n.suppressedAutoActions),history:n.history.map(t=>({...t,data:nn(t.data)})),phaseOverrides:{...n.phaseOverrides},pathwayChecks:Kt(n.pathwayChecks)}}function lo(n){const t=n.componentActions;if(t)return Object.keys(t).reduce((s,a)=>(s[a]=(t[a]||[]).map(d=>({id:String(d.id??`${Date.now()}-${Math.random().toString(36).slice(2,8)}`),text:String(d.text||""),owner:String(d.owner||""),timescale:String(d.timescale||""),notes:String(d.notes||""),evidence:String(d.evidence||""),linkedActions:[]})),s),{})}function co(n,t){return n!=null&&n.length?n.map(s=>({id:`legacy-${s.id}`,timestamp:s.removedAt,actor:"Unknown user",eventType:"action-removed",entityType:"action",entityId:s.actionId,summary:`Removed action: ${s.actionText||s.actionId}`,trustName:t==null?void 0:t.trustName,projectName:t==null?void 0:t.projectName,componentId:s.componentId,lens:s.lens,reason:s.reason,before:{actionText:s.actionText,actionType:s.actionType},source:"local"})):[]}function mo(n,t,s){const a=co(t,s),d=(n||[]).map(x=>({...x})),v=[...a,...d].sort((x,m)=>{const o=Date.parse(x.timestamp||""),E=Date.parse(m.timestamp||"");return!Number.isNaN(o)&&!Number.isNaN(E)&&o!==E?o-E:(x.id||"").localeCompare(m.id||"")});return Hn(v)}function uo(n,t){return n.map(s=>({...s,source:"imported",importedAt:t}))}function Ht(n){var a,d;if(!n)return{};const t=Ot(n.orgProfile);(d=(a=n.orgProfile)==null?void 0:a.cst)!=null&&d.pathway||(t.cst.pathway="pathway-1");const s=n.objectives||lo(n);return{...n,schemaVersion:n.schemaVersion||"2.0",orgProfile:t,objectives:Wt(s),auditLog:mo(n.auditLog,n.actionAuditLog,t),suppressedAutoActions:zt(n.suppressedAutoActions),pathwayChecks:Kt(n.pathwayChecks)}}function bt(n,t){const s=Sn(n),a=Ht(s),d=!!(s.objectives||s.componentActions),v=new Date().toISOString(),x=uo(a.auditLog||[],v),m=Hn([...t.auditLog||[],...x]);return Tn({...t,orgProfile:a.orgProfile||t.orgProfile,currentDraft:a.currentDraft?nn(a.currentDraft):nn(t.currentDraft),objectives:d?a.objectives:t.objectives,auditLog:m,suppressedAutoActions:a.suppressedAutoActions||t.suppressedAutoActions,history:(a.history||t.history).map(o=>({...o,data:nn(o.data)})),phaseOverrides:a.phaseOverrides||t.phaseOverrides,pathwayChecks:a.pathwayChecks||t.pathwayChecks})}function xt(n,t,s=new Date){return{monthLabel:ro(s),overallPercentage:t,data:nn(n)}}function nn(n){const t=Bs(n);return Object.keys(t).forEach(s=>{Object.keys(t[s]).forEach(a=>{t[s][a].actions=t[s][a].actions.map(d=>({...d,status:$e(d.status),notes:d.notes||"",evidence:d.evidence||"",linkedTargets:(d.linkedTargets||[]).map(v=>({componentId:v.componentId,lens:v.lens}))}))})}),t}function Wt(n){const t=Rt(n||{});return Object.keys(t).forEach(s=>{t[s]=t[s].map(a=>({...a,owner:a.owner||"",timescale:a.timescale||"",notes:a.notes||"",evidence:a.evidence||"",linkedActions:(a.linkedActions||[]).map(d=>({lens:d.lens,actionId:d.actionId}))}))}),t}function Kt(n){return n?Object.keys(n).reduce((t,s)=>{const a=n[s]||{};return t[s]={"pathway-1":[...a["pathway-1"]||[]],"pathway-2":[...a["pathway-2"]||[]],"pathway-3":[...a["pathway-3"]||[]]},t},{}):{}}function zt(n){return n?Object.keys(n).reduce((t,s)=>(t[s]=[...n[s]||[]],t),{}):{}}function go(n){return n?n.map(t=>({...t})):[]}const po=`{
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
`,Yt={componentId:"benefits",actionPrefix:"benefits-action",outcomePrefix:"benefits:outcome",fallbackOutcomes:[{id:"benefits:outcome:o1",text:"Benefits and disbenefits have been identified and defined"},{id:"benefits:outcome:o2",text:"Benefits are actively managed and monitored"},{id:"benefits:outcome:o3",text:"Benefits are realised, evidenced and sustained"}],lensAliases:{"Strategic Direction and Leadership":"Planning and Risk","People Experience and Culture":"Process and Sustainment"}},ho=Re(po,Yt);function fo(n){return ke(n,Yt,ho)}const bo=`{
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
`,qt={componentId:"capability",actionPrefix:"capability-action",outcomePrefix:"capability:outcome",fallbackOutcomes:[{id:"capability:outcome:o1",text:"Required capability levels have been defined and assessed"},{id:"capability:outcome:o2",text:"People can perform confidently in the future state"},{id:"capability:outcome:o3",text:"Capability and confidence are sustained and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Communication:"People Experience and Culture","Testing and Validation":"Skills and Behaviour"}},xo=Re(bo,qt);function So(n){return ke(n,qt,xo)}const vo=`{
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
`,Jt={componentId:"case_for_change",actionPrefix:"case-for-change-action",outcomePrefix:"case-for-change:outcome",fallbackOutcomes:[{id:"case-for-change:outcome:o1",text:"The need for change has been clearly defined and evidenced"},{id:"case-for-change:outcome:o2",text:"The case for change is understood and accepted"},{id:"case-for-change:outcome:o3",text:"The case for change remains credible and relevant"}]},yo=Re(vo,Jt);function wo(n){return ke(n,Jt,yo)}const No=`{
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
`,Xt={componentId:"change_adoption",actionPrefix:"change-adoption-action",outcomePrefix:"change-adoption:outcome",fallbackOutcomes:[{id:"change-adoption:outcome:o1",text:"Adoption expectations and measures have been defined"},{id:"change-adoption:outcome:o2",text:"Adoption is actively monitored and supported"},{id:"change-adoption:outcome:o3",text:"Adoption is sustained and optimised"}],lensAliases:{"Planning and Measurement":"Planning and Risk","Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","Skills and Behaviour":"Skills and Behaviour","People Experience and Culture":"Skills and Behaviour",Governance:"Planning and Risk",Design:"Planning and Risk",Reinforcement:"Skills and Behaviour"}},Co=Re(No,Xt);function Eo(n){return ke(n,Xt,Co)}const Io=`{
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
`,Qt={componentId:"cm_readiness",actionPrefix:"cm-readiness-action",outcomePrefix:"cm-readiness:outcome",fallbackOutcomes:[{id:"cm-readiness:outcome:o1",text:"Organisational readiness has been assessed"},{id:"cm-readiness:outcome:o2",text:"A robust change management plan has been developed"},{id:"cm-readiness:outcome:o3",text:"Readiness and planning activities actively support successful implementation"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Planning and Risk":"Planning and Risk","People Experience and Culture":"Planning and Risk","Skills and Behaviour":"Planning and Risk","Process and Sustainment":"Planning and Risk",Governance:"Planning and Risk",Reinforcement:"Planning and Risk"}},jo=Re(Io,Qt);function _o(n){return ke(n,Qt,jo)}const Ao=`{
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
`,Zt={componentId:"change_impact",actionPrefix:"change-impact-action",outcomePrefix:"change-impact:outcome",fallbackOutcomes:[{id:"change-impact:outcome:o1",text:"The impact of the change has been identified and understood"},{id:"change-impact:outcome:o2",text:"Impacts have been assessed, validated and prioritised"},{id:"change-impact:outcome:o3",text:"Change impacts are actively managed through plans, governance and support"}]},Oo=Re(Ao,Zt);function ko(n){return ke(n,Zt,Oo)}const Ro=`{
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
`,es={componentId:"change_network",actionPrefix:"change-network-action",outcomePrefix:"change-network:outcome",fallbackOutcomes:[{id:"change-network:outcome:o1",text:"A representative and effective change network has been established"},{id:"change-network:outcome:o2",text:"The change network actively enables engagement and adoption"},{id:"change-network:outcome:o3",text:"The change network is embedded and delivers ongoing value"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Engagement:"People Experience and Culture","Analysis and Insight":"People Experience and Culture"}},Po=Re(Ro,es);function Do(n){return ke(n,es,Po)}const To=`{
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
`,ns={componentId:"org_maturity",actionPrefix:"org-change-readiness-action",outcomePrefix:"org-change-readiness:outcome",fallbackOutcomes:[{id:"org-change-readiness:outcome:o1",text:"Organisational readiness has been assessed and understood"},{id:"org-change-readiness:outcome:o2",text:"Readiness gaps are being actively addressed"},{id:"org-change-readiness:outcome:o3",text:"The organisation is prepared to successfully absorb and sustain the change"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"Skills and Behaviour","Planning and Measurement":"Skills and Behaviour",Design:"Skills and Behaviour",Governance:"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour",Reinforcement:"Skills and Behaviour"}},$o=Re(To,ns);function Lo(n){return ke(n,ns,$o)}const Fo="pathway-auto-action:",Bo="pathway:auto-objective:",Go="vision:auto-objective:";function Uo(n){return n.startsWith(Bo)||n.startsWith(Go)}function ts(n){const t=n.orgProfile.cst.pathway,s={...n.objectives||{}},a=Object.keys(n.currentDraft||{}).reduce((d,v)=>{const x=n.currentDraft[v]||{};return d[v]=Object.keys(x).reduce((m,o)=>{const E=x[o];return m[o]={...E,actions:(E.actions||[]).filter(p=>!p.id.startsWith(Fo))},m},{}),d},{});return Gn.forEach(d=>{Un(d.id,t)&&(s[d.id]=(s[d.id]||[]).filter(x=>!Uo(x.id)))}),{...n,currentDraft:a,objectives:s}}const Vo=`{
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
`,ss={componentId:"process_change",actionPrefix:"process-change-action",outcomePrefix:"process-change:outcome",fallbackOutcomes:[{id:"process-change:outcome:o1",text:"Current and future processes have been defined"},{id:"process-change:outcome:o2",text:"Process changes have been implemented and adopted"},{id:"process-change:outcome:o3",text:"Processes are optimised and continuously improved"}],lensAliases:{"Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Skills and Behaviour","Planning and Risk":"Process and Sustainment","Analysis and Insight":"Process and Sustainment",Communication:"Skills and Behaviour","Dependency Management":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment",Implementation:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"Skills and Behaviour","Testing and Validation":"Process and Sustainment"}},Mo=Re(Vo,ss);function Ho(n){return ke(n,ss,Mo)}const Wo=`{
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
`,as={componentId:"reinforcement",actionPrefix:"reinforcement-action",outcomePrefix:"reinforcement:outcome",fallbackOutcomes:[{id:"reinforcement:outcome:o1",text:"Reinforcement strategy and sustainment measures are defined"},{id:"reinforcement:outcome:o2",text:"Reinforcement activities support sustained adoption and behaviour change"},{id:"reinforcement:outcome:o3",text:"Sustained change outcomes are embedded and continuously improved"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Strategic Direction and Leadership":"Process and Sustainment","Planning and Measurement":"Process and Sustainment",Design:"Process and Sustainment",Governance:"Process and Sustainment","Measurement and Evaluation":"Process and Sustainment",Reinforcement:"People Experience and Culture"}},Ko=Re(Wo,as);function zo(n){return ke(n,as,Ko)}const Yo=`{
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
`,os={componentId:"resistance",actionPrefix:"resistance-action",outcomePrefix:"resistance:outcome",fallbackOutcomes:[{id:"resistance:outcome:o1",text:"Potential sources of resistance have been identified and understood"},{id:"resistance:outcome:o2",text:"Strategies and interventions are in place to prevent and address resistance"},{id:"resistance:outcome:o3",text:"Resistance is actively managed and reduced throughout the change lifecycle"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour",Governance:"Skills and Behaviour",Design:"Skills and Behaviour",Communication:"People Experience and Culture",Engagement:"People Experience and Culture",Reinforcement:"Skills and Behaviour"}},qo=Re(Yo,os);function Jo(n){return ke(n,os,qo)}const Xo=`{
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
`,is={componentId:"risk_management",actionPrefix:"risk-management-action",outcomePrefix:"risk-management:outcome",fallbackOutcomes:[{id:"risk-management:outcome:o1",text:"Change risks have been identified and assessed"},{id:"risk-management:outcome:o2",text:"Risk mitigation and management activities are in place"},{id:"risk-management:outcome:o3",text:"Risks are proactively managed throughout the change lifecycle"}],lensAliases:{"Planning and Risk":"Planning and Risk","Process and Sustainment":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Strategic Direction and Leadership":"Planning and Risk","Skills and Behaviour":"Process and Sustainment",Governance:"Planning and Risk",Reinforcement:"Process and Sustainment"}},Qo=Re(Xo,is);function Zo(n){return ke(n,is,Qo)}const ei=`{
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
`,rs={componentId:"skills_learning",actionPrefix:"skills-learning-action",outcomePrefix:"skills-learning:outcome",fallbackOutcomes:[{id:"skills-learning:outcome:o1",text:"Future learning and capability requirements have been identified"},{id:"skills-learning:outcome:o2",text:"Learning interventions have been designed and delivered"},{id:"skills-learning:outcome:o3",text:"Learning outcomes are achieved and sustained"}],lensAliases:{"People Experience and Culture":"People Experience and Culture","Skills and Behaviour":"Skills and Behaviour","Strategic Direction and Leadership":"Skills and Behaviour","Planning and Risk":"Skills and Behaviour","Process and Sustainment":"Skills and Behaviour",Governance:"Skills and Behaviour",Communication:"People Experience and Culture",Reinforcement:"Skills and Behaviour",Design:"Skills and Behaviour","Dependency Management":"Skills and Behaviour","Measurement and Evaluation":"Skills and Behaviour","Testing and Validation":"Skills and Behaviour"}},ni=Re(ei,rs);function ti(n){return ke(n,rs,ni)}const si=`{
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
`,ls={componentId:"sponsorship",actionPrefix:"sponsorship-action",outcomePrefix:"sponsorship:outcome",fallbackOutcomes:[{id:"sponsorship:outcome:o1",text:"Clear sponsorship and governance structures are established"},{id:"sponsorship:outcome:o2",text:"Sponsors actively lead and champion the change"},{id:"sponsorship:outcome:o3",text:"Governance and sponsorship drive successful delivery"}]},ai=Re(si,ls);function oi(n){return ke(n,ls,ai)}const ii=`{
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
`,cs={componentId:"stakeholder",actionPrefix:"stakeholder-action",outcomePrefix:"stakeholder:outcome",fallbackOutcomes:[{id:"stakeholder:outcome:o1",text:"Stakeholders have been identified, analysed and prioritised"},{id:"stakeholder:outcome:o2",text:"Stakeholders are actively engaged and informed"},{id:"stakeholder:outcome:o3",text:"Engagement and communications support successful adoption"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","People Experience and Culture":"People Experience and Culture",Reinforcement:"People Experience and Culture"}},ri=Re(ii,cs);function li(n){return ke(n,cs,ri)}const ci=`{
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
`,ds={componentId:"transfer_bau",actionPrefix:"transfer-bau-action",outcomePrefix:"transfer-bau:outcome",fallbackOutcomes:[{id:"transfer-bau:outcome:o1",text:"Operational ownership and accountability have been established"},{id:"transfer-bau:outcome:o2",text:"Business-as-usual capabilities and support arrangements are in place"},{id:"transfer-bau:outcome:o3",text:"The change is fully embedded within normal operational management"}],lensAliases:{"Strategic Direction and Leadership":"Strategic Direction and Leadership","Process and Sustainment":"Process and Sustainment","Planning and Risk":"Process and Sustainment","People Experience and Culture":"Process and Sustainment","Skills and Behaviour":"Process and Sustainment",Governance:"Strategic Direction and Leadership","Measurement and Evaluation":"Process and Sustainment",Implementation:"Process and Sustainment","Risk Management":"Process and Sustainment",Design:"Process and Sustainment","Dependency Management":"Process and Sustainment",Reinforcement:"Process and Sustainment"}},di=Re(ci,ds);function mi(n){return ke(n,ds,di)}const ui=`{
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
`,ms={componentId:"vision",actionPrefix:"vision-action",outcomePrefix:"vision:outcome",fallbackOutcomes:[{id:"vision:outcome:o1",text:"A compelling future state has been defined"},{id:"vision:outcome:o2",text:"The vision is understood and shared"},{id:"vision:outcome:o3",text:"The vision is visible and guides the change"}]},gi=Re(ui,ms);function pi(n){return ke(n,ms,gi)}const St="nhs-digital-adoption-user-settings",vt="nhs-digital-adoption-report-reminder-dismissed",yt="nhs-digital-adoption-engagement",kn="nhs-digital-adoption-onboarding-seen",wt="nhs-digital-adoption-current-user-id",Nt="Default",hi=5*1024*1024,fi=new Set(["application/json","text/json"]),bi="Unknown user",xi=["#005eb8","#003366","#009b8a","#6c28d9","#059669","#dc2626"],Si={name:"",preferences:"",themeColor:"#005eb8",profileImageDataUrl:"",darkMode:!1,colorAccessibilityMode:"standard",phaseFocusMode:"auto",manualPhaseFocus:1},vi={xp:0,level:1,checkIns:{},emailDraftOpens:0,highlightLayoutSaves:0,onTimeFinalisations:0,lateFinalisations:0};function yi(n){return{...n,linkedTargets:(n.linkedTargets||[]).map(t=>({componentId:t.componentId,lens:t.lens}))}}function wi(n,t){return`${n}:${t}`}function Ze(n){return ts(mi(Lo(zo(Ho(So(Eo(ti(Jo(li(_o(Zo(Do(ko(fo(oi(wo(pi(n))))))))))))))))))}function Ni(n){return n.trim()||bi}function Ci(n,t,s){var d;const a=Es[n];return((d=a==null?void 0:a[t])==null?void 0:d[s])||nt[s]||nt[0]}function Ei(n=new Date){const t=String(n.getMonth()+1).padStart(2,"0");return`${n.getFullYear()}-${t}`}function Ii(n=new Date){return new Date(n.getFullYear(),n.getMonth()-1,1).toLocaleString("en-GB",{month:"short",year:"numeric"})}function ji(n,t,s){return["Monthly Adoption Reporting Reminder","","Organisation",`${t||"Unconfigured Trust"}${s?` / ${s}`:""}`,"","Action Required",`Please finalise the ${n} adoption month if it has not already been captured.`,"","Attached","Point-in-time JSON report export generated from the latest working draft.","","Next Step","Review, confirm finalisation status, and circulate to the team."].join(`
`)}function _i(n){const t=new TextEncoder().encode(n);let s="";return t.forEach(a=>{s+=String.fromCharCode(a)}),window.btoa(s)}function Ai(n,t=76){const s=[];for(let a=0;a<n.length;a+=t)s.push(n.slice(a,a+t));return s.join(`\r
`)}function Bn(n=new Date){return n.toISOString().slice(0,10)}function Oi(n=new Date){const t=n.getDate(),s=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();return t>=s-6}function ki(n=new Date){return n.toLocaleString("en-GB",{month:"short",year:"numeric"})}function us(n){return Math.max(1,Math.min(12,Math.floor(n/120)+1))}function an(n,t){const s=n.xp+t;return{...n,xp:s,level:us(s)}}function Ri(n,t){const s=n*30+Math.min(t,20)*4;return s>=170?"S":s>=130?"A":s>=95?"B":s>=60?"C":s>=30?"D":"E"}function Pi(n,t=new Date){let s=0;const a=new Date(t);let d=Bn(a);for(;n[d];)s+=1,a.setDate(a.getDate()-1),d=Bn(a);return s}function Di(n){const t=window.prompt(`Phase ${n} has changed. Enter delivery readiness grade (${bn.join("/")}).`,"C");if(!t)return null;const s=t.trim().toUpperCase();if(!bn.includes(s))return window.alert(`Invalid competence grade. Use one of ${bn.join(", ")}.`),null;const a=window.prompt(`Enter confidence score for Phase ${n} (${xn.join("-")}, where 1 is low and 5 is very high).`,"3");if(!a)return null;const d=Number(a.trim());return xn.includes(d)?{competence:s,confidence:d}:(window.alert(`Invalid confidence score. Use a number from ${xn.join(" to ")}.`),null)}function Vi(){const n=Gn,t=c.useMemo(()=>[...ea],[]),[s,a]=c.useState("dashboard"),[d,v]=c.useState(n[0].id),[x,m]=c.useState(()=>typeof window>"u"?!0:window.innerWidth>=1024),[o,E]=c.useState(()=>{var D,K,T,X,W,ce,ve,_e;const r=et.getInstance();r.loadFromWindow();let b={};try{const me=We(ht);b=Ht(Sn(me))}catch(me){console.warn("Ignoring invalid persisted adoption data.",me)}return Ze(Tn({view:"dashboard",orgProfile:(b==null?void 0:b.orgProfile)||((D=r.adoption)==null?void 0:D.orgProfile),currentDraft:(b==null?void 0:b.currentDraft)||((K=r.adoption)==null?void 0:K.currentDraft),objectives:(b==null?void 0:b.objectives)||((T=r.adoption)==null?void 0:T.objectives),suppressedAutoActions:(b==null?void 0:b.suppressedAutoActions)||((X=r.adoption)==null?void 0:X.suppressedAutoActions),auditLog:(b==null?void 0:b.auditLog)||((W=r.adoption)==null?void 0:W.auditLog),history:(b==null?void 0:b.history)||((ce=r.adoption)==null?void 0:ce.history),phaseOverrides:(b==null?void 0:b.phaseOverrides)||((ve=r.adoption)==null?void 0:ve.phaseOverrides),pathwayChecks:(b==null?void 0:b.pathwayChecks)||((_e=r.adoption)==null?void 0:_e.pathwayChecks)}))}),[p,l]=c.useState({}),[u,S]=c.useState(""),[z,Y]=c.useState(()=>We(wt)||""),[w,$]=c.useState(()=>{const r=We(St);return{...Si,...r}}),[k,se]=c.useState(()=>{const r=We(yt);return{...vi,...r,level:us((r==null?void 0:r.xp)||0),checkIns:(r==null?void 0:r.checkIns)||{}}}),A=gn.useRef(null),B=gn.useRef(null),[G,ue]=c.useState(""),oe=gn.useRef(null),re=c.useMemo(()=>Ei(),[]),te=c.useMemo(()=>Bn(),[]),[ae,R]=c.useState(()=>We(vt)||{}),[le,be]=c.useState(()=>!!We(kn)),[j,q]=c.useState(()=>!We(kn)),[J,xe]=c.useState(!0),[Pe,Ie]=c.useState([]),[f,N]=c.useState(!1),de=gn.useRef({}),Se=c.useCallback(()=>{q(!1),le||(be(!0),Qe(kn,!0))},[le]),V=c.useMemo(()=>{const r=new Date,b=Ii(r),D=r.getDate()===1,K=o.history.some(T=>T.monthLabel===b);return{previousMonthLabel:b,isFirstDayOfMonth:D,hasFinalisedPreviousMonth:K,shouldNotify:D&&!K}},[o.history]),[M,Ne]=c.useState("test@test.com"),[g,I]=c.useState(""),[C,_]=c.useState(""),P=ki(),ge=Oi(),pe=c.useCallback((r,b)=>(o.currentDraft[r]||(o.currentDraft[r]={}),o.currentDraft[r][b]||(o.currentDraft[r][b]=En()),o.currentDraft[r][b]),[o]),ee=c.useMemo(()=>{const r=st(o,n);return{...r,nextSteps:r.nextSteps.map(b=>({...b,toolkitLinks:Et(Nt,b.componentId,"inputs").slice(0,3)}))}},[o]),De=w.phaseFocusMode==="manual"&&w.manualPhaseFocus?w.manualPhaseFocus:ee.currentPhase,ze=Ws(o,r=>Pn(r)||n[0],pe).sort((r,b)=>{const D=r.action.owner.localeCompare(b.action.owner);return D!==0?D:r.component.localeCompare(b.component)});c.useEffect(()=>{Qe(ht,o);const r=et.getInstance();r.adoption={orgProfile:o.orgProfile,currentDraft:o.currentDraft,objectives:o.objectives,suppressedAutoActions:o.suppressedAutoActions,auditLog:o.auditLog,history:o.history,phaseOverrides:o.phaseOverrides,pathwayChecks:o.pathwayChecks}},[o]),c.useEffect(()=>{Qe(St,w)},[w]),c.useEffect(()=>{Qe(wt,z)},[z]),c.useEffect(()=>{Qe(yt,k)},[k]),c.useEffect(()=>{Qe(vt,ae)},[ae]),c.useEffect(()=>{I(`Action required: finalise ${V.previousMonthLabel} adoption report`),_(ji(V.previousMonthLabel,o.orgProfile.trustName,o.orgProfile.projectName||""))},[V.previousMonthLabel,o.orgProfile.projectName,o.orgProfile.trustName]),c.useEffect(()=>{s==="dashboard"&&A.current&&setTimeout(()=>{var D,K,T;const r=(D=A.current)==null?void 0:D.querySelector("#adoption-radar-chart");if(r){const X=Ms(o,t,n,pe);Zn(r,X)}const b=(K=A.current)==null?void 0:K.querySelector("#adoption-component-radar-chart");if(b){const X=Hs(n,pe,De);Zn(b,X,{scales:{r:{min:0,max:5,ticks:{display:!0,stepSize:1,backdropColor:"transparent"}}}})}if(o.history.length>0){const X=(T=A.current)==null?void 0:T.querySelector("#adoption-line-chart");if(X){const W={labels:o.history.map(ce=>ce.monthLabel),datasets:[{label:"Adoption Score",data:o.history.map(ce=>ce.overallPercentage||0),borderColor:"#005EB8",backgroundColor:"rgba(0, 94, 184, 0.1)",fill:!0,tension:.4}]};Ns(X,W)}}},100)},[s,o,pe,t,n,De]),c.useEffect(()=>{const r=()=>{m(window.innerWidth>=1024)};return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),c.useEffect(()=>{typeof document<"u"&&(document.documentElement.dataset.nhsThemeMode=w.darkMode?"dark":"light")},[w.darkMode]),c.useEffect(()=>{var b;const r=s==="assessment"?`component:${d}`:`view:${s}`;(b=de.current[r])==null||b.scrollIntoView({block:"nearest",behavior:"smooth"})},[d,s]);const Ge=()=>typeof window>"u"?!1:window.innerWidth<1024,h=c.useCallback(()=>{var r;(r=B.current)==null||r.scrollTo({top:0,behavior:"auto"})},[]),L=c.useCallback(r=>{a(b=>b===r?b:(Ie(D=>[b,...D].slice(0,20)),r)),Ge()&&m(!1)},[]),H=r=>{L(r)},ie=c.useCallback(()=>{Ie(r=>{const[b,...D]=r;return b?(a(b),window.innerWidth<1024&&m(!1),D):(window.location.hash="#/",r)})},[]),he=c.useCallback(r=>{Pn(r)&&(v(r),L("assessment"),h())},[L,h]);c.useEffect(()=>{h()},[h,s]);function Q(r,b){if(!b.length)return r.auditLog;const D=Ni(w.name||""),K=b.map(T=>Ya({actor:D,eventType:T.eventType,entityType:T.entityType,entityId:T.entityId,summary:T.summary,trustName:T.trustName??r.orgProfile.trustName,projectName:T.projectName??r.orgProfile.projectName,componentId:T.componentId,lens:T.lens,reason:T.reason,before:T.before,after:T.after,source:T.source,importedAt:T.importedAt}));return Hn([...r.auditLog||[],...K])}const we=c.useCallback((r,b,D)=>{E(K=>{var _e;const T=((_e=K.currentDraft[r])==null?void 0:_e[b])||En(),X={...K,currentDraft:{...K.currentDraft,[r]:{...K.currentDraft[r],[b]:kt(D)}}},W=[];T.score!==D.score&&W.push({eventType:"entry-score-updated",entityType:"entry",entityId:`${r}:${b}`,summary:`Updated readiness score for ${r} / ${b}: ${T.score} -> ${D.score}`,componentId:r,lens:b,before:{score:T.score},after:{score:D.score},source:"local"}),(T.justification||"")!==(D.justification||"")&&W.push({eventType:"entry-justification-updated",entityType:"entry",entityId:`${r}:${b}`,summary:`Updated justification for ${r} / ${b}`,componentId:r,lens:b,before:{justification:T.justification||""},after:{justification:D.justification||""},source:"local"}),(T.evidence||"")!==(D.evidence||"")&&W.push({eventType:"entry-evidence-updated",entityType:"entry",entityId:`${r}:${b}`,summary:`Updated evidence for ${r} / ${b}`,componentId:r,lens:b,before:{evidence:T.evidence||""},after:{evidence:D.evidence||""},source:"local"});const ce=new Map(T.actions.map(me=>[me.id,me]));return D.actions.forEach(me=>{const Ae=ce.get(me.id);if(!Ae){W.push({eventType:"action-created",entityType:"action",entityId:me.id,summary:`Created action in ${r} / ${b}`,componentId:r,lens:b,after:{text:me.text,status:me.status,owner:me.owner,actionType:me.actionType},source:"local"});return}const un=JSON.stringify({text:Ae.text,status:Ae.status,owner:Ae.owner,actionType:Ae.actionType,notes:Ae.notes,dueDate:Ae.dueDate,startDate:Ae.startDate,evidence:Ae.evidence}),Xe=JSON.stringify({text:me.text,status:me.status,owner:me.owner,actionType:me.actionType,notes:me.notes,dueDate:me.dueDate,startDate:me.startDate,evidence:me.evidence});un!==Xe&&W.push({eventType:"action-updated",entityType:"action",entityId:me.id,summary:`Updated action in ${r} / ${b}`,componentId:r,lens:b,before:{text:Ae.text,status:Ae.status,owner:Ae.owner,actionType:Ae.actionType},after:{text:me.text,status:me.status,owner:me.owner,actionType:me.actionType},source:"local"})}),{...Ze(X),auditLog:Q(K,W)}})},[Q]),je=c.useCallback((r,b)=>{E(D=>{const K=D.objectives[r]||[],T={...D,objectives:{...D.objectives,[r]:b}};return JSON.stringify(K)!==JSON.stringify(b)?{...T,auditLog:Q(D,[{eventType:"objectives-updated",entityType:"objective",entityId:r,summary:`Updated component outcomes for ${r}`,componentId:r,before:{objectiveCount:K.length},after:{objectiveCount:b.length},source:"local"}])}:T})},[Q]),i=c.useCallback(r=>{const b=Cs(o.orgProfile);if(b.isValid)return!0;const D=b.errors.map(K=>`- ${K.message}`).join(`
`);return window.confirm(`${r} has CST warnings:

${D}

Continue anyway?`)},[o.orgProfile]),y=c.useCallback(r=>{ue(r)},[]),O=c.useCallback(()=>{if(!i("Export JSON"))return;const b=ft(o);fn(`adoption-assessment-${(o.orgProfile.trustName||"export").replace(/\s+/g,"_")}.json`,JSON.stringify(b,null,2),"application/json"),y("Assessment export downloaded.")},[y,i,o]),ne=c.useCallback(()=>{var r;(r=oe.current)==null||r.click()},[]),Z=c.useCallback(async r=>{var T;const b=(T=r.target.files)==null?void 0:T[0];if(!b)return;const D=b.name.toLowerCase().endsWith(".json"),K=!b.type||fi.has(b.type);if(!D||!K){y("Import failed. Please choose a valid JSON file."),window.alert("Import failed. Please choose a valid JSON file."),r.target.value="";return}if(b.size>hi){y("Import failed. The selected file is larger than 5 MB."),window.alert("Import failed. The selected file is larger than 5 MB."),r.target.value="";return}try{const X=await b.text(),W=Sn(JSON.parse(X));E(ce=>{const ve=Ze(bt(W,ce));return{...ve,auditLog:Q(ve,[{eventType:"data-imported",entityType:"system",summary:`Imported assessment data from ${b.name}`,after:{fileName:b.name},source:"local"}])}}),a("dashboard"),y("Assessment import complete. Dashboard updated.")}catch{y("Import failed. Please verify the file contents."),window.alert("Unable to import adoption assessment. Please verify the file contents.")}finally{r.target.value=""}},[y,Q]),Ce=c.useCallback(r=>{const b=!!(r!=null&&r.replaceExisting);if(!ge){window.alert("Finalise Month is available during the final week of each month.");return}if(!i("Finalise Month"))return;const K=o.history.length>0?st({...o,currentDraft:o.history[o.history.length-1].data},n).currentPhase:1;if(ee.currentPhase>K){const X=Di(ee.currentPhase);if(!X){window.alert("Phase progression cancelled. Confidence and competence self-assessment is required when readiness phase changes.");return}const W=[];if(n.filter(ce=>ce.phase<ee.currentPhase).forEach(ce=>{ce.lenses.forEach(ve=>{var me,Ae;const _e=(me=o.currentDraft[ce.id])==null?void 0:me[ve];(!_e||_e.score<=0||!((Ae=_e.justification)!=null&&Ae.trim()))&&W.push(`${ce.label} / ${ve}`)})}),W.length>0){const ce=window.prompt(`You're progressing from Phase ${K} to Phase ${ee.currentPhase}, but ${W.length} item(s) are incomplete. Please provide a justification.`);if(!ce||!ce.trim()){window.alert("Phase progression cancelled. A justification is required when prior phase items are missing.");return}E(ve=>({...{...ve,phaseOverrides:{...ve.phaseOverrides,[`phase-progression-${Date.now()}`]:ce.trim()},orgProfile:{...ve.orgProfile,cst:{...ve.orgProfile.cst,phaseCapability:{...ve.orgProfile.cst.phaseCapability,[ee.currentPhase]:{...X,assessedAt:new Date().toISOString(),reason:"phase-change"}}}}},auditLog:Q(ve,[{eventType:"profile-updated",entityType:"profile",summary:`Updated phase capability for phase ${ee.currentPhase}`,after:{phase:ee.currentPhase,competence:X.competence,confidence:X.confidence,rationale:ce.trim()},source:"local"}])}))}else E(ce=>({...{...ce,orgProfile:{...ce.orgProfile,cst:{...ce.orgProfile.cst,phaseCapability:{...ce.orgProfile.cst.phaseCapability,[ee.currentPhase]:{...X,assessedAt:new Date().toISOString(),reason:"phase-change"}}}}},auditLog:Q(ce,[{eventType:"profile-updated",entityType:"profile",summary:`Updated phase capability for phase ${ee.currentPhase}`,after:{phase:ee.currentPhase,competence:X.competence,confidence:X.confidence},source:"local"}])}))}const T=xt(o.currentDraft,ee.overallPct);E(X=>{const W=b?X.history.map(ve=>ve.monthLabel===T.monthLabel?T:ve):[...X.history,T];return{...{...X,history:W},auditLog:Q(X,[{eventType:"month-finalized",entityType:"history",entityId:T.monthLabel,summary:`${b?"Re-finalized":"Finalized"} monthly snapshot for ${T.monthLabel}`,after:{monthLabel:T.monthLabel,overallPercentage:T.overallPercentage},source:"local"}])}}),se(X=>an(X,25)),a("dashboard")},[Q,n,i,ge,ee.currentPhase,ee.overallPct,o,o.currentDraft,o.history]),Ee=c.useCallback(()=>{if(!i("Finalise Prior Month"))return;const b=V.previousMonthLabel;if(o.history.some(W=>W.monthLabel===b)){window.alert(`${b} has already been finalised.`);return}const K=new Date;K.setMonth(K.getMonth()-1);const T=xt(o.currentDraft,ee.overallPct,K);E(W=>({...{...W,history:[...W.history,T]},auditLog:Q(W,[{eventType:"prior-month-finalized",entityType:"history",entityId:T.monthLabel,summary:`Finalized prior month snapshot for ${T.monthLabel}`,after:{monthLabel:T.monthLabel,overallPercentage:T.overallPercentage},source:"local"}])}));const X=new Date().getDate()===1;se(W=>an({...W,onTimeFinalisations:W.onTimeFinalisations+(X?1:0),lateFinalisations:W.lateFinalisations+(X?0:1)},X?45:20))},[Q,i,ee.overallPct,V.previousMonthLabel,o.currentDraft,o.history]),ye=c.useCallback(async()=>{try{const r=await fetch("test-data/adoption-sample.json");if(!r.ok)throw new Error(`Failed to load sample data: ${r.status}`);const b=Sn(await r.json());E(D=>{const K=Ze(bt(b,D));return{...K,auditLog:Q(K,[{eventType:"example-data-loaded",entityType:"system",summary:"Loaded example assessment data",source:"local"}])}}),a("dashboard"),y("Example assessment data loaded."),Ge()&&m(!1)}catch(r){console.error(r),y("Unable to load example data right now."),window.alert("Unable to load example data right now. Please try again.")}},[y,Q]),Ue=c.useCallback(()=>{if(!window.confirm("Warning: this will reset all assessment data (organisation profile, scores, actions, and history). If you are worried, please export your data first. Continue?"))return;const b=Ze(Tn());E(b),l({}),a("dashboard"),y("Assessment data has been reset."),Ge()&&m(!1)},[y]),Te=c.useCallback(()=>({generatedAt:new Date().toISOString(),targetMonth:V.previousMonthLabel,finalisedPriorMonth:V.hasFinalisedPreviousMonth,report:ft(o)}),[V.hasFinalisedPreviousMonth,V.previousMonthLabel,o]),Ve=c.useCallback(()=>`adoption-point-in-time-${V.previousMonthLabel.toLowerCase().replace(/\s+/g,"-")}.json`,[V.previousMonthLabel]),ln=c.useCallback(()=>{const r=Ve();fn(r,JSON.stringify(Te(),null,2),"application/json")},[Ve,Te]),F=c.useCallback(()=>{const r=M.trim()||"test@test.com",b=Ve(),D=`${C}

Attachment: ${b}`,K=`mailto:${r}?subject=${encodeURIComponent(g)}&body=${encodeURIComponent(D)}`;se(T=>an({...T,emailDraftOpens:T.emailDraftOpens+1},8)),window.location.href=K},[Ve,C,g,M]),fe=c.useCallback(()=>{se(r=>r.checkIns[te]?r:an({...r,checkIns:{...r.checkIns,[te]:!0}},10))},[te]),Fe=c.useCallback(()=>{se(r=>an({...r,highlightLayoutSaves:r.highlightLayoutSaves+1},15))},[]),He=c.useCallback(()=>{const r=M.trim()||"test@test.com",b=Ve(),D=JSON.stringify(Te(),null,2),K=Ai(_i(D)),T=`----nhs-adoption-reminder-${Date.now()}`,X=[`To: ${r}`,`Subject: ${g}`,"MIME-Version: 1.0",`Content-Type: multipart/mixed; boundary="${T}"`,"",`--${T}`,'Content-Type: text/plain; charset="UTF-8"',"Content-Transfer-Encoding: 8bit","",C,"",`--${T}`,`Content-Type: application/json; name="${b}"`,"Content-Transfer-Encoding: base64",`Content-Disposition: attachment; filename="${b}"`,"",K,`--${T}--`,""].join(`\r
`),W=V.previousMonthLabel.toLowerCase().replace(/\s+/g,"-");fn(`adoption-reminder-${W}.eml`,X,"message/rfc822")},[Ve,Te,C,g,M,V.previousMonthLabel]),Ye=c.useCallback(()=>{R(r=>({...r,[re]:!0}))},[re]),tn=V.shouldNotify&&!ae[re],qe=c.useMemo(()=>o.history.find(r=>r.monthLabel===P)||null,[P,o.history]),Je=ge,cn=Je?"Review and finalise monthly snapshot":"Finalise Month unlocks from the final week of each month.",sn=Je?`${Lt} h-9 px-3 py-0 shadow-[0_3px_0_rgba(0,0,0,0.2)]`:"h-9 px-3 py-0 rounded-md border border-slate-300 bg-slate-200 text-slate-500 cursor-not-allowed",dn=Je?{backgroundColor:w.themeColor}:void 0,Me=c.useMemo(()=>{const r=qe||(o.history.length>0?o.history[o.history.length-1]:null),b=(r==null?void 0:r.overallPercentage)||0,D=ee.overallPct-b;return{currentMonthLabel:P,baselineLabel:(r==null?void 0:r.monthLabel)||"No previous snapshot",baselineOverall:b,deltaOverall:D,assessedCount:ee.assessedCount,totalActions:ee.totalActions,completedActions:ee.completedActions}},[P,qe,ee.assessedCount,ee.completedActions,ee.overallPct,ee.totalActions,o.history]),wn=k.level>=3,Nn=c.useMemo(()=>Ri(k.onTimeFinalisations,k.emailDraftOpens),[k.emailDraftOpens,k.onTimeFinalisations]),zn=!!k.checkIns[te],Cn=c.useMemo(()=>Pi(k.checkIns),[k.checkIns]),gs=c.useMemo(()=>[{id:"streak-3",name:"Steady Cadence",description:"Check in for 3 consecutive days.",unlocked:Cn>=3,progress:`${Math.min(Cn,3)}/3`},{id:"first-ontime",name:"On-Time Closer",description:"Finalise a prior month on time.",unlocked:k.onTimeFinalisations>=1,progress:`${Math.min(k.onTimeFinalisations,1)}/1`},{id:"first-save",name:"Story Builder",description:"Save your first highlight layout.",unlocked:k.highlightLayoutSaves>=1,progress:`${Math.min(k.highlightLayoutSaves,1)}/1`}],[Cn,k.highlightLayoutSaves,k.onTimeFinalisations]),ps=c.useCallback(r=>{if(!wn&&!xi.includes(r.themeColor)){$(b=>({...r,themeColor:b.themeColor}));return}$(r)},[wn]),hs=r=>{let b=0,D=0,K=0,T=0;return r.lenses.forEach(X=>{var ve,_e;const W=(ve=o.currentDraft[r.id])==null?void 0:ve[X];W&&W.score>0&&(b++,(_e=W.justification)!=null&&_e.trim()&&D++);const ce=(W==null?void 0:W.actions)||[];K+=ce.length,T+=ce.filter(me=>Ct(me.status)).length}),b===0?{icon:"◯",color:"text-blue-100",label:"Not Started"}:b>D?{icon:"⚠",color:"text-red-300",label:"Missing Justification"}:b<r.lenses.length?{icon:"◐",color:"text-amber-300",label:"In Progress"}:K<=0||T<K?{icon:"◐",color:"text-amber-300",label:"In Progress"}:{icon:"✓",color:"text-green-300",label:"Completed"}},Yn=o.orgProfile.trustName||"Unconfigured Trust",qn=o.orgProfile.projectName||"Unnamed Project",mn=At[o.orgProfile.cst.pathway],fs=mn.split(" - ")[0]||mn;return e.jsxs("div",{className:`flex h-screen overflow-hidden ${w.darkMode?"bg-slate-900 text-slate-100":"bg-slate-50 text-slate-800"}`,children:[e.jsx("div",{role:"status","aria-live":"polite",className:"sr-only",children:G}),e.jsx("input",{ref:oe,type:"file",accept:"application/json",className:"hidden",onChange:Z}),x&&e.jsx("div",{className:"fixed inset-0 z-10 bg-slate-900/35 backdrop-blur-[1px] lg:hidden",onClick:()=>m(!1)}),e.jsxs("div",{className:`fixed inset-y-0 left-0 z-20 bg-[#005eb8] text-white flex flex-col shadow-xl overflow-hidden transition-all duration-300 ease-out lg:static lg:translate-x-0 ${x?"w-72 translate-x-0":"w-0 -translate-x-full lg:w-0"}`,style:{backgroundColor:w.themeColor},children:[e.jsxs("div",{className:"p-6 border-b border-blue-700",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold tracking-tight",children:"NHS Digital Adoption"}),e.jsxs("p",{className:"text-blue-200 text-xs mt-1 flex justify-between items-center",children:[e.jsx("span",{children:"Readiness Tracking Tool"}),e.jsx("span",{className:"opacity-80 font-medium",children:"V6.6"})]})]}),w.profileImageDataUrl?e.jsx("img",{src:w.profileImageDataUrl,alt:"Profile",className:"h-10 w-10 rounded-full border-2 border-blue-200 object-cover"}):null]}),e.jsxs("div",{className:"mt-3 rounded-md bg-blue-700 p-2 text-xs",children:[e.jsxs("div",{className:"font-semibold text-blue-100",children:["Level ",k.level," · Grade ",Nn]}),e.jsxs("div",{className:"text-blue-200",children:["XP ",k.xp," · Layout saves ",k.highlightLayoutSaves]})]})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto py-4",children:[e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Intro"}),e.jsx("nav",{className:"space-y-1 mb-4",children:["introduction","cm-guide","project-details"].map(r=>e.jsx("button",{ref:b=>{de.current[`view:${r}`]=b},onClick:()=>H(r),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${s===r?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:r==="introduction"?"Introduction":r==="project-details"?"CST Personalisation":"Adoption Engine Onboarding"},r))}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Overview"}),e.jsx("nav",{className:"space-y-1 mb-4",children:["dashboard","action-plan","roadmap-view"].map(r=>e.jsx("button",{ref:b=>{de.current[`view:${r}`]=b},onClick:()=>H(r),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${s===r?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:r==="dashboard"?"Dashboard":r==="action-plan"?"Action Tracker":"Roadmap View"},r))}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Tools"}),e.jsx("nav",{className:"space-y-1 mb-8",children:["highlight-builder","audit-log","settings"].map(r=>e.jsx("button",{ref:b=>{de.current[`view:${r}`]=b},onClick:()=>H(r),className:`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${s===r?"bg-blue-800 text-white font-medium border-l-4 border-white":"text-blue-100 hover:bg-blue-800 border-l-4 border-transparent"}`,children:r==="highlight-builder"?"Highlight Builder":r==="audit-log"?"Audit Log":"Settings & Profile"},r))}),e.jsx("div",{className:"px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider",children:"Change Components"}),e.jsx("nav",{className:"space-y-1",children:n.map(r=>{const b=s==="assessment"&&d===r.id,D=hs(r);return e.jsxs("button",{ref:K=>{de.current[`component:${r.id}`]=K},onClick:()=>{he(r.id)},className:`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${b?"bg-white font-medium text-[#005eb8]":`hover:bg-blue-800 ${D.color}`}`,children:[e.jsx("span",{className:"truncate pr-2",children:Is(r.label)}),e.jsx("span",{className:"text-xs flex-shrink-0",title:D.label,"aria-label":D.label,children:D.icon})]},r.id)})}),e.jsxs("div",{className:"mt-8 px-4 pb-4 border-t border-blue-800 pt-6",children:[e.jsx("div",{className:"text-[10px] font-semibold text-blue-300 uppercase tracking-wider mb-3",children:"Status Legend"}),e.jsxs("div",{className:"space-y-2 text-xs text-blue-200",children:[e.jsx("div",{children:"◯ Not Started"}),e.jsx("div",{children:"◐ In Progress"}),e.jsx("div",{children:"⚠ Missing Justification"}),e.jsx("div",{children:"✓ Completed"})]})]})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col h-screen overflow-hidden",children:[e.jsx("header",{className:`${w.darkMode?"bg-slate-800 border-slate-700":"bg-white border-slate-200"} border-b px-3 py-2 sm:px-6 shrink-0 z-10 ${s==="introduction"?"":"shadow-sm"}`,style:{borderTop:`3px solid ${w.themeColor}`},children:e.jsxs("div",{className:"flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{className:"min-w-0 flex items-start gap-2 sm:gap-3",children:[e.jsxs("button",{onClick:()=>m(r=>!r),className:"inline-flex h-9 items-center justify-center px-3 text-white rounded-md font-semibold transition-colors shadow-sm","aria-label":x?"Collapse side navigation":"Expand side navigation",title:x?"Collapse side navigation":"Expand side navigation",style:{backgroundColor:w.themeColor},children:[e.jsx("span",{"aria-hidden":"true",className:"text-lg leading-none",children:x?"«":"»"}),e.jsx("span",{className:"sr-only",children:x?"Collapse side navigation":"Expand side navigation"})]}),e.jsx("button",{onClick:ie,disabled:Pe.length===0,title:Pe.length===0?"No previous in-app page":"Back to previous page",className:`h-9 text-sm px-3 rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${w.darkMode?"text-slate-100 hover:bg-slate-700":"text-slate-600 hover:bg-slate-100"}`,children:"← Back"}),e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-1 text-sm",children:[e.jsx("span",{className:`truncate font-semibold ${w.darkMode?"text-slate-100":"text-slate-700"}`,title:Yn,children:Yn}),e.jsx("span",{className:`${w.darkMode?"text-slate-300":"text-slate-400"}`,children:"/"}),e.jsx("span",{className:`truncate ${w.darkMode?"text-slate-100":"text-slate-600"}`,title:qn,children:qn})]}),e.jsxs("div",{className:"mt-1 flex min-w-0 items-center gap-1.5",children:[e.jsxs("span",{className:`truncate rounded-full px-2 py-1 text-[11px] font-semibold ${w.darkMode?"bg-slate-700 text-slate-100":"bg-slate-100 text-slate-600"}`,title:`${o.orgProfile.cst.type.toUpperCase()} · ${mn}`,children:[o.orgProfile.cst.type.toUpperCase()," ·"," ",e.jsx("span",{className:"sm:hidden",children:fs}),e.jsx("span",{className:"hidden sm:inline",children:mn})]}),e.jsxs("span",{className:"inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-800",title:"Auto-save on",children:[e.jsx("span",{className:"inline-flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white","aria-hidden":"true",children:"✓"}),e.jsx("span",{className:"sr-only sm:not-sr-only sm:ml-1",children:"Auto-save on"})]})]})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 lg:justify-end",children:[e.jsx("button",{onClick:()=>q(!0),"aria-label":"Show introduction",title:"Show introduction",className:`text-sm w-9 h-9 flex items-center justify-center bg-white text-[#425563] border border-[#768692] hover:bg-[#f0f4f5] rounded-full font-semibold transition-colors ${Ft}`,children:"?"}),e.jsx("button",{type:"button",onClick:()=>{window.location.hash="#/"},"aria-label":"Go to home page",title:"Go to home page",className:`${rn} h-9 w-16 px-6 py-0 inline-flex items-center justify-center`,children:"Home"}),e.jsx("button",{onClick:ne,className:`${rn} h-9 px-3 py-0`,children:"Import"}),e.jsxs("button",{onClick:O,className:`${rn} h-9 px-3 py-0`,children:[e.jsx("span",{className:"sm:hidden",children:"Export"}),e.jsx("span",{className:"hidden sm:inline",children:"Export JSON"})]}),e.jsx("span",{className:"inline-flex",title:cn,children:e.jsxs("button",{onClick:()=>N(!0),disabled:!Je,"aria-label":"Finalise Month",className:sn,style:dn,children:[e.jsx("span",{className:"sm:hidden",children:"Finalise"}),e.jsx("span",{className:"hidden sm:inline",children:"Finalise Month"})]})})]})]})}),e.jsxs("main",{ref:B,className:"flex-1 overflow-y-auto p-8",children:[s==="dashboard"&&J?e.jsxs("section",{className:`${w.darkMode?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} mb-6 rounded-xl border p-4 shadow-sm`,children:[e.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:`text-xs font-semibold uppercase tracking-wider ${w.darkMode?"text-slate-300":"text-slate-500"}`,children:"Engagement"}),e.jsxs("p",{className:`text-sm mt-1 ${w.darkMode?"text-slate-100":"text-slate-700"}`,children:["Level ",k.level," · Grade ",Nn," · On-time finalisations"," ",k.onTimeFinalisations," · Email opens ",k.emailDraftOpens]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:fe,disabled:zn,className:"rounded-md px-3 py-2 text-sm font-semibold text-white disabled:opacity-60",style:{backgroundColor:w.themeColor},children:zn?"Checked In Today":"Daily Check-In (+10 XP)"}),e.jsx("button",{type:"button",onClick:()=>xe(!1),className:`${w.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-2 text-sm font-medium`,"aria-label":"Dismiss engagement card",children:"Dismiss"})]})]}),e.jsx("div",{className:"mt-4 grid gap-3 md:grid-cols-3",children:gs.map(r=>e.jsxs("div",{className:`rounded-lg border p-3 ${r.unlocked?"border-green-200 bg-green-50":w.darkMode?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:`text-sm font-semibold ${w.darkMode?"text-slate-100":"text-slate-800"}`,children:r.name}),e.jsx("span",{className:"text-xs font-bold",children:r.unlocked?"Unlocked":r.progress})]}),e.jsx("p",{className:`mt-1 text-xs ${w.darkMode?"text-slate-300":"text-slate-600"}`,children:r.description})]},r.id))})]}):null,tn&&e.jsxs("section",{className:`${w.darkMode?"border-amber-700 bg-slate-800":"border-amber-300 bg-amber-50"} mb-8 rounded-xl border p-5 shadow-sm`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider text-amber-700",children:"First Day Reminder"}),e.jsxs("h3",{className:"text-lg font-bold text-amber-900 mt-1",children:["Submit prior month report for ",V.previousMonthLabel]}),e.jsxs("p",{className:"text-sm text-amber-800 mt-2",children:["Please prompt the team to finalise ",V.previousMonthLabel," if it has not already been recorded."]})]}),e.jsx("button",{type:"button",onClick:Ye,className:"text-sm px-3 py-1.5 rounded-md border border-amber-300 text-amber-700 hover:bg-amber-100",children:"Dismiss"})]}),e.jsxs("div",{className:"mt-4 grid gap-3 md:grid-cols-2",children:[e.jsxs("label",{className:"text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"To"}),e.jsx("input",{type:"email",value:M,onChange:r=>Ne(r.target.value),className:`${w.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2`})]}),e.jsxs("label",{className:"text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"Subject"}),e.jsx("input",{type:"text",value:g,onChange:r=>I(r.target.value),className:`${w.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2`})]})]}),e.jsxs("label",{className:"mt-3 block text-sm text-slate-700",children:[e.jsx("span",{className:"font-semibold",children:"Body"}),e.jsx("textarea",{value:C,onChange:r=>_(r.target.value),rows:9,className:`${w.darkMode?"border-slate-600 bg-slate-900 text-slate-100":"border-slate-300 bg-white text-slate-900"} mt-1 w-full rounded-md border px-3 py-2 font-mono text-xs`})]}),e.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:ln,className:"rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-50",children:"Download Point-in-Time JSON"}),e.jsx("button",{type:"button",onClick:He,className:"rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-50",children:"Download Email Draft with Attachment (.eml)"}),e.jsx("button",{type:"button",onClick:F,className:"rounded-md px-3 py-2 text-sm font-semibold text-white",style:{backgroundColor:w.themeColor},children:"Open Mail Draft"}),e.jsx("button",{type:"button",onClick:Ee,className:"rounded-md border border-amber-300 bg-white px-3 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100",children:"Finalise Prior Month Now"})]})]}),s==="dashboard"&&e.jsx("div",{ref:A,children:e.jsx(ca,{store:o,components:n,lenses:t,metrics:ee,phaseFocusMode:w.phaseFocusMode||"auto",manualPhaseFocus:w.manualPhaseFocus,onPhaseFocusModeChange:r=>$(b=>({...b,phaseFocusMode:r,manualPhaseFocus:r==="manual"?b.manualPhaseFocus||ee.currentPhase:b.manualPhaseFocus})),onManualPhaseFocusChange:r=>$(b=>({...b,phaseFocusMode:"manual",manualPhaseFocus:r})),onResetPhaseFocus:()=>$(r=>({...r,phaseFocusMode:"auto",manualPhaseFocus:ee.currentPhase})),getEntry:pe,onComponentClick:he,pathway:o.orgProfile.cst.pathway,pathwayChecks:o.pathwayChecks,onNavigate:H,onOpenLensInfo:S,onOpenOnboarding:()=>q(!0),colorAccessibilityMode:w.colorAccessibilityMode||"standard",darkMode:!!w.darkMode})}),s==="project-details"&&e.jsx(Ra,{orgProfile:o.orgProfile,onProfileUpdate:r=>{E(b=>{const D=ts({...b,orgProfile:r});return JSON.stringify(b.orgProfile)!==JSON.stringify(r)?{...D,auditLog:Q(b,[{eventType:"profile-updated",entityType:"profile",summary:"Updated CST profile details",before:{trustName:b.orgProfile.trustName,projectName:b.orgProfile.projectName,cst:b.orgProfile.cst},after:{trustName:r.trustName,projectName:r.projectName,cst:r.cst},source:"local"}])}:D})},components:n,lenses:t,store:o,getEntry:pe,onComponentClick:he,onOpenOnboarding:()=>q(!0),currentUserId:z,onCurrentUserChange:Y,darkMode:!!w.darkMode}),s==="assessment"&&e.jsx(ya,{store:{...o,showMatrix:p},components:n,activeComponentId:d,getRubricText:Ci,getEntry:pe,onComponentChange:he,onEntryUpdate:we,onOpenLensInfo:S,onMatrixToggle:r=>{l(b=>({...b,[r]:!b[r]}))},onActionRemove:(r,b,D)=>{const T=pe(r,b).actions.find(W=>W.id===D);if(!T)return;const X=window.prompt("Please provide a reason for removing this action. This will be included in the JSON export audit log.");if(!X||!X.trim()){window.alert("Removal cancelled. A reason is required to remove an action.");return}E(W=>{var un;const ce=((un=W.currentDraft[r])==null?void 0:un[b])||En(),ve={...ce,actions:ce.actions.filter(Xe=>Xe.id!==D).map(yi)},_e={...W.suppressedAutoActions};if(D.startsWith("vision-action:")||D.startsWith("case-for-change-action:")||D.startsWith("benefits-action:")||D.startsWith("sponsorship-action:")||D.startsWith("change-impact-action:")){const Xe=wi(r,b),Jn=_e[Xe]||[];Jn.includes(D)||(_e[Xe]=[...Jn,D])}const me={...W,currentDraft:{...W.currentDraft,[r]:{...W.currentDraft[r],[b]:ve}},suppressedAutoActions:_e};return{...Ze(me),auditLog:Q(W,[{eventType:"action-removed",entityType:"action",entityId:D,summary:`Removed action from ${r} / ${b}`,componentId:r,lens:b,reason:X.trim(),before:{text:T.text,status:T.status,owner:T.owner,actionType:T.actionType},source:"local"}])}})},onObjectivesUpdate:je,darkMode:!!w.darkMode}),s==="action-plan"&&e.jsx(Ps,{actions:ze,onComponentClick:he,darkMode:!!w.darkMode}),s==="cm-guide"&&e.jsx(Ia,{onComponentClick:he,guidanceTarget:Nt,linkOverrides:o.orgProfile.linkOverrides,darkMode:!!w.darkMode}),s==="introduction"&&e.jsx(Wa,{darkMode:!!w.darkMode,onNavigateToProjectDetails:()=>H("project-details"),onNavigateToGuide:()=>H("cm-guide"),onNavigateToDashboard:()=>H("dashboard")}),s==="roadmap-view"&&e.jsx(Ta,{components:n,metrics:ee,getEntry:pe,onComponentClick:he,pathway:o.orgProfile.cst.pathway,pathwayChecks:o.pathwayChecks,darkMode:!!w.darkMode}),s==="highlight-builder"&&e.jsx(Va,{store:o,metrics:ee,lenses:t,components:n,getEntry:pe,trustName:o.orgProfile.trustName,projectName:o.orgProfile.projectName,themeColor:w.themeColor,onLayoutSaved:Fe,currentUserId:z,darkMode:!!w.darkMode}),s==="audit-log"&&e.jsx(Na,{events:o.auditLog,darkMode:!!w.darkMode}),s==="settings"&&e.jsx(za,{userSettings:w,onUserSettingsUpdate:ps,onLoadExampleData:ye,onResetData:Ue,canUseCustomTheme:wn,engagementGrade:Nn,engagementLevel:k.level,engagementXp:k.xp,darkMode:!!w.darkMode})]}),u?e.jsx(Ha,{lensName:u,onClose:()=>S(""),darkMode:!!w.darkMode}):null,f?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4",children:e.jsxs("div",{className:`${w.darkMode?"border-slate-700 bg-slate-800":"border-slate-200 bg-white"} w-full max-w-2xl rounded-xl border p-6 shadow-2xl`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:`text-lg font-semibold ${w.darkMode?"text-slate-100":"text-slate-900"}`,children:"Finalise Month"}),e.jsx("button",{type:"button",onClick:()=>N(!1),className:`${w.darkMode?"border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700":"border-slate-300 bg-white text-slate-700 hover:bg-slate-100"} rounded-md border px-3 py-1.5 text-sm`,children:"Close"})]}),e.jsxs("div",{className:`mt-4 space-y-3 text-sm ${w.darkMode?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("p",{children:["Finalising creates a point-in-time snapshot for"," ",e.jsx("strong",{children:Me.currentMonthLabel}),". A new reporting month starts on the 1st day of each month."]}),e.jsx("p",{children:ge?"Finalise window is open (last week of the month).":"Finalise window is currently closed. You can finalise from the final week of each month."}),qe?e.jsxs("p",{className:"rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-amber-900",children:["A snapshot already exists for ",Me.currentMonthLabel,". Re-finalise will replace this month only."]}):null]}),e.jsxs("div",{className:`${w.darkMode?"border-slate-700 bg-slate-900":"border-slate-200 bg-slate-50"} mt-4 rounded-md border p-3 text-sm`,children:[e.jsx("p",{className:`font-semibold ${w.darkMode?"text-slate-100":"text-slate-800"}`,children:"Current summary"}),e.jsxs("ul",{className:`mt-2 space-y-1 ${w.darkMode?"text-slate-200":"text-slate-700"}`,children:[e.jsxs("li",{children:["Baseline snapshot: ",Me.baselineLabel]}),e.jsxs("li",{children:["Overall readiness: ",ee.overallPct,"% (",Me.deltaOverall>=0?"+":"",Me.deltaOverall,"% vs baseline)"]}),e.jsxs("li",{children:["Components assessed: ",Me.assessedCount]}),e.jsxs("li",{children:["Actions complete: ",Me.completedActions,"/",Me.totalActions]})]})]}),e.jsxs("div",{className:"mt-5 flex flex-wrap justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:()=>N(!1),className:"rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100",children:"Cancel"}),qe&&ge?e.jsx("button",{type:"button",onClick:()=>{N(!1),Ce({replaceExisting:!0})},className:"rounded-md border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100",children:"Re-finalise This Month"}):null,e.jsx("button",{type:"button",onClick:()=>{N(!1),Ce()},disabled:!ge,className:"rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50",children:"Finalise Snapshot"})]})]})}):null,e.jsx(Rs,{toolkitChoice:o.orgProfile.cst.toolkitChoice,darkMode:!!w.darkMode}),e.jsx(js,{open:j,onClose:Se,onNavigateToProjectDetails:()=>{a("project-details"),Se()},onNavigateToGuide:()=>{a("cm-guide"),Se()}})]})]})}export{Vi as AdoptionApp,Vi as default};
