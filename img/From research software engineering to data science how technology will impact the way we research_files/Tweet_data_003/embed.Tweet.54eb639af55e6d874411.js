(self.webpackChunkembed_iframe=self.webpackChunkembed_iframe||[]).push([[9097,4826],{40637:(e,t,r)=>{var n={"./ar.js":[46979,749,8142],"./bn.js":[96734,749,5383],"./cs.js":[29868,749,4587],"./da.js":[56146,749,9264],"./de.js":[36500,749,7236],"./el.js":[22884,749,4704],"./en.js":[39656,749,3478],"./es.js":[11311,749,8599],"./fa.js":[60689,749,1076],"./fi.js":[53750,749,4213],"./fil.js":[13740,749,2271],"./fr.js":[43127,749,1753],"./he.js":[6335,749,9119],"./hi.js":[26076,749,6626],"./hu.js":[71723,749,4453],"./id.js":[60078,749,9342],"./it.js":[66530,749,1214],"./ja.js":[70145,749,2586],"./ko.js":[48441,749,6477],"./ms.js":[59117,749,8737],"./nb.js":[15353,749,890],"./nl.js":[71076,749,1476],"./pl.js":[14807,749,135],"./pt.js":[32068,749,9106],"./ro.js":[23051,749,1137],"./ru.js":[72091,749,7539],"./sv.js":[8237,749,2208],"./th.js":[33834,749,2918],"./tr.js":[61,749,7928],"./uk.js":[89911,749,3142],"./vi.js":[42601,749,4385],"./zh-Hant.js":[66711,749,1786],"./zh.js":[71979,749,9682]};function i(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],i=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r.t(i,23)))}i.keys=()=>Object.keys(n),i.id=40637,e.exports=i},29881:(e,t,r)=>{var n={"./ar-x-fm.js":[38696,749,9536],"./ar.js":[21600,749,5413],"./bg.js":[57316,749,1643],"./bn.js":[41966,749,1718],"./ca.js":[76065,749,905],"./cs.js":[51210,749,9795],"./da.js":[69222,749,822],"./de.js":[50198,749,1841],"./el.js":[19062,749,9069],"./en-GB.js":[70729,749,6378],"./en-ss.js":[15342,749,5812],"./en-xx.js":[99858,749,2625],"./en.js":[24349,749,5762],"./es.js":[84826,749,8349],"./eu.js":[80908,749,6180],"./fa.js":[98853,749,8918],"./fi.js":[16378,749,8620],"./fil.js":[28679,749,3552],"./fr.js":[4450,749,242],"./ga.js":[64325,749,1211],"./gl.js":[25362,749,8281],"./gu.js":[71942,749,5103],"./he.js":[80153,749,5432],"./hi.js":[3990,749,230],"./hr.js":[89059,749,9876],"./hu.js":[37149,749,8345],"./id.js":[41744,749,2426],"./it.js":[16878,749,57],"./ja.js":[78782,749,5290],"./kn.js":[99292,749,4255],"./ko.js":[86407,749,4791],"./mr.js":[27381,749,5686],"./ms.js":[93704,749,3251],"./nb.js":[68317,749,4604],"./nl.js":[21775,749,4088],"./pl.js":[68252,749,847],"./pt.js":[7014,749,1839],"./ro.js":[34314,749,4397],"./ru.js":[75835,749,825],"./sk.js":[7793,749,5820],"./sr.js":[62360,749,3415],"./sv.js":[1064,749,9146],"./ta.js":[26140,749,8374],"./th.js":[32388,749,219],"./tr.js":[49519,749,3096],"./uk.js":[73453,749,4160],"./ur.js":[25163,749,7708],"./vi.js":[26280,749,530],"./zh-Hant.js":[91127,749,5576],"./zh.js":[96260,749,9989]};function i(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],i=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r.t(i,23)))}i.keys=()=>Object.keys(n),i.id=29881,e.exports=i},47530:(e,t,r)=>{"use strict";var n=function(e){this.Tweet=function(e){return{fetch:function(t,r){return e.get("tweet-result",t,r).then((function(e){return e&&e.id_str?Promise.resolve(e):Promise.reject(new Error("could not parse api response"))}))}}}(e),this.RelatedVideos=function(e){return{fetch:function(t,r){return e.get("related-videos",t,r).then((function(e){return e&&e.length?Promise.resolve(e):Promise.reject(new Error("could not parse api response"))}))}}}(e)},i=r(87462),s=r(34902);const a=function(e){var t=e.headers,r=t&&t["content-type"];return"string"==typeof r&&r.indexOf("application/json")>=0&&e.body?JSON.parse(e.body):null};var o={host:"https://cdn.syndication.twimg.com"},c=function(){function e(e){this.client=new s.ZP((0,i.Z)({},o,e))}var t=e.prototype;return t.dispatch=function(e){return this.client.dispatch(e).then(a)},t.get=function(e,t,r){return this.dispatch({path:"/"+e,method:"GET",params:t,headers:r||{}})},e}(),u=r(31830),d=r(75208),l=r(57869),f=r(63366),h=["key"],E=function(e){return!0},_=function(e){return e},v=function(e,t){return e[t]};const p=function(e,t){return t.reduce((function(t,r){var n,s=r.key,a=(0,f.Z)(r,h),o=a.accessor,c=void 0===o?v:o,u=a.required,d=void 0!==u&&u,l=a.validate,p=void 0===l?E:l,m=a.transform,T=void 0===m?_:m,g=a.fallback,j=c(e,s);if(void 0!==j&&p(j)){var w,b=T(j);if(void 0!==b)return(0,i.Z)({},t,((w={})[s]=b,w))}if(void 0!==g)return(0,i.Z)({},t,((n={})[s]=g,n));if(d)throw new Error(s+" is a required parameter");return t}),{})};var m=/^[a-zA-Z0-9-]+$/,T=/^\d+$/,g=function(e){return e.replace(/[^a-zA-Z0-9-_:/?=@.]/g,"")},j={key:"dnt",validate:function(e){return["true","false"].includes(e)},transform:function(e){return"true"===e},fallback:!1},w={key:"embedId",validate:function(e){return m.test(e)},fallback:"embed-0"},b={key:"lang",validate:function(e){return d.Z.isSupportedLocale(e)},fallback:"en"},O={key:"pageData",accessor:function(e){return p(e,[{key:"origin",validate:function(e){return"string"==typeof e},transform:g,fallback:""},{key:"frame",validate:function(e){return"string"==typeof e},transform:g,fallback:""},{key:"partner",validate:function(e){return"string"==typeof e},transform:g,fallback:""},{key:"siteScreenName",validate:function(e){return"string"==typeof e},transform:g,fallback:""},{key:"siteUserId",validate:function(e){return"string"==typeof e},transform:g,fallback:""},{key:"creatorScreenName",validate:function(e){return"string"==typeof e},transform:g,fallback:""},{key:"creatorUserId",validate:function(e){return"string"==typeof e},transform:g,fallback:""}])}},k={key:"theme",validate:function(e){return[l.ZP.ThemePaletteNames.light,l.ZP.ThemePaletteNames.dark].includes(e)},fallback:l.ZP.ThemePaletteNames.light},y={key:"widgetsVersion",accessor:function(e){return e.widgetsVersion},validate:function(e){return"string"==typeof e&&/^([a-zA-Z0-9])+:([0-9])+$/.test(e)},fallback:void 0},I={key:"features",transform:function(e){try{var t=window.atob(e);return JSON.parse(t)}catch(e){return{}}},fallback:{}},R={key:"sessionId",fallback:""};r(67294);var N=r(83720),A=r(64123),P=r(43292),L=r(30801),Z=r.n(L);const S=(0,P.Z)({loader:function(){return(e=d.Z.getLocale(),t=Z().getCldrLocale(e),Promise.all([r(40637)("./"+t+".js"),r(29881)("./"+t+".js")])).then((function(){return Promise.all([r.e(5644),r.e(1901)]).then(r.bind(r,10223))}));var e,t},renderPlaceholder:function(){return null}});var C,z,D,V,x=r(39958),U=r(91381),W=r(60798),M=r(64641),F="856813858445c:1682708899865",H=new n(new c({dispatcher:s.e2})),X=new n(new c({dispatcher:s.e2,host:"https://syndication.twitter.com"})),G=(D=u.Z.parseQueryString(location.search),V=[{key:"id",validate:function(e){return T.test(e)},required:!0},{key:"hideThread",accessor:function(e){return e.hideThread},validate:function(e){return["true","false"].includes(e)},transform:function(e){return"true"===e},fallback:!1},{key:"hideMedia",accessor:function(e){return e.hideCard},validate:function(e){return["true","false"].includes(e)},transform:function(e){return"true"===e},fallback:!1},j,w,I,b,O,R,k,y],p(D,V)),K=G.dnt,Y=G.embedId,B=G.features,q=G.hideMedia,Q=G.hideThread,J=G.id,$=G.lang,ee=G.pageData,te=G.sessionId,re=G.theme,ne=G.widgetsVersion;x.Z.initialize(X,B,te),W.ZP.initialize({page:W.iY.TWEET,data:{client_version:ne,dnt:K,widget_id:Y,widget_origin:ee.origin,widget_frame:ee.frame,widget_partner:ee.partner,widget_site_screen_name:ee.siteScreenName,widget_site_user_id:ee.siteUserId,widget_creator_screen_name:ee.creatorScreenName,widget_creator_user_id:ee.creatorUserId,widget_iframe_version:F,item_ids:[J],item_details:(C={},C[J]={item_type:U.v.TWEET},C)}}),M.ZP.initialize({embedId:Y,data:{tweet_id:J}}),M.ZP.send({key:M.zW.INITIALIZED,details:{iframe_version:F}}),Promise.all([(z=[],window.IntersectionObserver||z.push(r.e(6337).then(r.t.bind(r,66337,23))),window.ResizeObserver?window.PolyfillResizeObserver=window.ResizeObserver:z.push(r.e(1033).then(r.bind(r,91033)).then((function(e){window.ResizeObserver=e.default,window.PolyfillResizeObserver=e.default}))),Promise.all(z))]).then((function(){return function(e,t,r){var n=t.lang,i=t.theme;d.Z.setLocale(n),A.Z.setTheme(i,void 0,void 0,{vdlRefreshEnabled:!0,chirpFontEnabled:!1}),N.Z.registerComponent("App",(function(){return e}));var s=document.getElementById("app")||document.getElementsByTagName("div")[0];return new Promise((function(e,t){N.Z.runApplication("App",{callback:e,rootTag:s,initialProps:r})}))}(S,{lang:$,theme:re},{api:H,hideMedia:q,hideThread:Q,id:J,pageData:ee})}))},57296:(e,t,r)=>{"use strict";r.d(t,{ID:()=>i,PE:()=>l,bx:()=>a,eK:()=>c,eX:()=>u,iY:()=>s,sA:()=>d,z8:()=>o});var n=r(78539),i="tfw",s=Object.freeze({TWEET:"tweet",DDG:"ddg"}),a=Object.freeze({FAKE:"tfw_experiment_1234",MAIN:"main",PARENT:"parent",QUOTE:"quote",PARENT_QUOTE:"parent-quote",HOLDBACK_EXPERIMENT:"tfw_team_holdback_11929",SKELETON_LOADER_EXPERIMENT:"tfw_skeleton_loading_13398",RELATED_VIDEOS_EXPERIMENT:n.pe.RelatedVideos.key}),o=Object.freeze({AUTHOR:"author",BIRDWATCH_PIVOT:"birdwatch-pivot",CARD:"card",ERROR:"error",LIKE_ACTION:"like-action",LOGO:"logo",NEWS_ACTION:"news-action",PERFORMANCE:"performance",PHOTO:"photo",PLACE:"place",PRIVACY_NOTICE:"privacy-notice",PUBLIC_INTEREST_NOTICE:"public-interest-notice",REPLY_PROMPT:"reply-prompt",SENSITIVE_MEDIA:"sensitive-media",SHARE_ACTION:"share-action",SOFT_INTERVENTION_PIVOT:"soft-intervention-pivot",THREAD:"thread",TIMESTAMP:"timestamp",TWEET_REPLY_CONTEXT:"tweet-reply-context",TWEET_TEXT_CASHTAG:"tweet-text-cashtag",TWEET_TEXT_HASHTAG:"tweet-text-hashtag",TWEET_TEXT_MEDIA:"tweet-text-media",TWEET_TEXT_MENTION:"tweet-text-mention",TWEET_TEXT_QUOTE:"tweet-text-quote",TWEET_TEXT_URL:"tweet-text-url",VIDEO:"video",WHITESPACE:"whitespace"}),c=Object.freeze({GIF_PLAYER:"gif_player",VIDEO_PLAYER:"video_player",CTA_LOGO:"cta_logo",CTA_PAUSED_PLAYER:"cta_paused_player",CTA_REPLIES:"cta_replies",CTA_WATCH_AGAIN:"cta_watch_again",CTA_WATCH_PREVIEW:"cta_watch_preview",RELATED_VIDEOS:"related_videos_overlay",SKELETON:"skeleton"}),u=Object.freeze({CLICK_EXTERNAL:"click-external",CLICK_INTERACTIVE:"click-interactive",CLICK_TWITTER:"click-twitter",EXPERIMENT:"experiment",IMPRESSION:"impression",UNHANDLED_ERROR:"unhandled-error",NO_RESULTS:"no-results",RESULTS:"results",SEEN:"seen"}),d="horizon",l={client:i,page:s.TWEET}},60798:(e,t,r)=>{"use strict";r.d(t,{eX:()=>h.eX,z8:()=>h.z8,eK:()=>h.eK,iY:()=>h.iY,bx:()=>h.bx,ZP:()=>E});var n=r(87462),i=r(4942),s=r(44165),a=r(91381),o=r(94578),c=r(17187);const u=function(e){function t(t){var r;r=e.call(this)||this;var n=t.category,i=t.clientName,s=t.transport;if(!n)throw new Error("required category is missing");if(r.category=n,!i)throw new Error("required clientName is missing");if(r.clientName=i,"function"!=typeof s)throw new Error("Invalid transport: "+s);return r._transport=s,r}(0,o.Z)(t,e);var r=t.prototype;return r.createEventObject=function(e,t,r){return(0,n.Z)({_category_:t,triggered_on:Date.now(),event_namespace:e},r)},r._handleError=function(e){try{this.emit("error",e)}catch(e){}throw e},r.log=function(e,t){var r=this.createEventObject((0,n.Z)({client:this.clientName},e),this.category,t);this.emit("log",r),this._log(r)},r._log=function(e){var t=this;e&&this._transport(e).catch((function(e){return t._handleError(e)})).catch((function(){}))},t}(r.n(c)());var d=r(17673),l=r(39958);const f=function(e){return function(t){return function(e,t){void 0===t&&(t="https://syndication.twitter.com/i/jot/embeds");var r=t+"?"+d.stringify(e);return new Promise((function(e,t){var n=document.createElement("img");n.addEventListener("load",(function(){return e(n)})),n.addEventListener("error",t),n.src=r}))}((r=t,n={l:JSON.stringify(r)},r.dnt&&(n.dnt=1),l.Z.isBucketed()&&(n.session_id=l.Z.getSessionId().session_id),n),e);var r,n}};var h=r(57296);const E=new(function(){function e(){var e,t;(0,i.Z)(this,"_data",{context:h.sA}),this._scribeClient=(e={clientName:h.ID,category:"tfw_client_event",transport:f()},(t=new u(e)).on("log",(function(e){(0,s.u)("[scribe] LOG "+(0,a.N)(e.event_namespace),e)})),t.on("error",(function(e){(0,s.u)("[scribe] ERROR when scribing",e)})),t)}var t=e.prototype;return t.initialize=function(e){this._page=e.page,this._data=(0,n.Z)({},this._data,e.data)},t.scribe=function(e,t,r){var i=(0,n.Z)({},this._data,r);this._scribeClient.log((0,n.Z)({page:this._page,action:e},t),i)},e}())},44165:(e,t,r)=>{"use strict";r.d(t,{u:()=>n});var n=function(e,t){}},75208:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(74387),i=r.n(n),s=r(30801),a=r.n(s),o=r(86218),c="en",u={ar:!0,fa:!0,he:!0},d=function(e){return Boolean(u[e])},l=function(e){return a().locales.indexOf(e)>-1};const f={isLocaleRTL:d,isSupportedLocale:l,setLocale:function(e){return c=l(e)?e:"en",i().loadLanguage(a().getCldrLocale(c)).then((function(){o.Z.setPreferredLanguageRTL(d(c)),document&&document.documentElement&&document.documentElement.setAttribute("lang",c)}))},getLocale:function(){return c}}},30801:e=>{var t={ms:"msa",nb:"no",zh:"zh-cn","zh-Hant":"zh-tw"},r={msa:"ms",no:"nb","zh-cn":"zh","zh-tw":"zh-Hant"};e.exports={locales:["en","ar","bn","cs","da","de","el","es","fa","fi","fil","fr","he","hi","hu","id","it","ja","ko","msa","nl","no","pl","pt","ro","ru","sv","th","tr","uk","vi","zh-cn","zh-tw"],getCldrLocale:function(e){return r[e]||e},getTwitterLocale:function(e){return t[e]||e}}},31830:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(17673),i=/(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,s=["twitter.com","mobile.twitter.com"];const a={isStatusUrl:function(e){return"string"==typeof e&&i.test(e)},isTwitterDotComLink:function(e){try{var t=new URL(e).host;return s.indexOf(t)>-1}catch(e){return!1}},parseQueryString:function(e){void 0===e&&(e="");try{return n.parse(e.replace(/^\?/,""))}catch(e){if(e instanceof URIError)return{};throw e}}}},64641:(e,t,r)=>{"use strict";r.d(t,{dJ:()=>a,zW:()=>s,ZP:()=>o});var n=r(87462),i=r(44165),s=Object.freeze({CLICK:"click",INITIALIZED:"initialized",LIKE:"like",NO_RESULTS:"no_results",RENDERED:"rendered",RESIZE:"resize",RESULTS:"results",TRIGGER:"trigger"}),a=Object.freeze({INTENT:"intent"});const o=new(function(){function e(){}var t=e.prototype;return t.initialize=function(e){var t=e.embedId,r=e.data;this._embedId=t,this._data=r||{}},t.send=function(e){var t,r=e.key,s=e.details,a=window.parent;if(a&&a.postMessage){var o="twttr.private."+r,c={jsonrpc:"2.0",method:o,id:this._embedId,params:[(0,n.Z)({},s,{data:this._data})]};(0,i.u)("[rpc] MESSAGE "+o,s),a.postMessage(((t={})["twttr.embed"]=c,t),"*")}},e}())},78539:(e,t,r)=>{"use strict";r.d(t,{hf:()=>d,mn:()=>l,pe:()=>i,re:()=>f,xD:()=>u});var n=r(39958),i={RelatedVideos:{key:"tfw_related_videos_15128",buckets:{CONTROL:"control",FEW_VIDEOS:"few_vids",MANY_VIDEOS:"many_vids"}}},s="tfw_use_profile_image_shape_enabled",a={ON:"on",OFF:"off"},o="tfw_show_birdwatch_pivots_enabled",c={ON:"on",OFF:"off"},u=function(){var e=n.Z.getFeatures()[i.RelatedVideos.key],t=i.RelatedVideos.buckets,r=t.FEW_VIDEOS,s=t.MANY_VIDEOS;return e&&[r,s].includes(e.bucket)},d=function(){var e=n.Z.getFeatures()[i.RelatedVideos.key],t=i.RelatedVideos.buckets.FEW_VIDEOS;return e&&[t].includes(e.bucket)},l=function(){var e=n.Z.getFeatures()[s],t=a.ON;return Boolean(e&&[t].includes(e.bucket))},f=function(){var e=n.Z.getFeatures()[o],t=c.ON;return Boolean(e&&[t].includes(e.bucket))}},39958:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(4942);const i=new(function(){function e(){var e=this;(0,n.Z)(this,"store",{features:{}}),(0,n.Z)(this,"get",(function(){return e.store})),(0,n.Z)(this,"getFeatures",(function(){return e.store.features})),(0,n.Z)(this,"getSessionId",(function(){return e.session_id})),(0,n.Z)(this,"isBucketed",(function(){var t=e.getFeatures();return Object.keys(t).some((function(e){return null!==t[e].version}))}))}var t=e.prototype;return t.initialize=function(e,t,r){this.api=e,this.store.features=t,this.session_id={session_id:r}},t.getFeatureData=function(e){var t=this.getFeatures();return t[e]?{experiment_key:e,bucket:t[e].bucket,version:t[e].version}:void 0},e}())},91381:(e,t,r)=>{"use strict";r.d(t,{N:()=>i,v:()=>n});var n=Object.freeze({TWEET:0,CAROUSEL:29}),i=function(e){var t=e.client,r=void 0===t?"":t,n=e.page,i=void 0===n?"":n,s=e.section,a=void 0===s?"":s,o=e.component,c=void 0===o?"":o,u=e.element,d=void 0===u?"":u,l=e.action;return r+":"+i+":"+a+":"+c+":"+d+":"+(void 0===l?"":l)}}},e=>{e.O(0,[7796],(()=>(47530,e(e.s=47530)))),e.O()}]);