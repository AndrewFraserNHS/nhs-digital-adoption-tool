import{r as e,R as T}from"./vendor-react-nTLHQtbJ.js";import"./vendor-react-dom-BuuNUkTg.js";import{c as p,l as w,R as F}from"./vendor-misc-CRAZsVSL.js";/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const U="6";try{window.__reactRouterVersion=U}catch{}const E="startTransition",u=T[E];function _(t){let{basename:R,children:S,future:r,window:f}=t,i=e.useRef();i.current==null&&(i.current=p({window:f,v5Compat:!0}));let s=i.current,[o,n]=e.useState({action:s.action,location:s.location}),{v7_startTransition:a}=r||{},c=e.useCallback(l=>{a&&u?u(()=>n(l)):n(l)},[n,a]);return e.useLayoutEffect(()=>s.listen(c),[s,c]),e.useEffect(()=>w(r),[r]),e.createElement(F,{basename:R,children:S,location:o.location,navigationType:o.action,navigator:s,future:r})}var h;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(h||(h={}));var m;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(m||(m={}));export{_ as H};
