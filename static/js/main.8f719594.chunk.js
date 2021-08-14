(this["webpackJsonpfor-the-record"]=this["webpackJsonpfor-the-record"]||[]).push([[0],{199:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(109),c=n.n(i),o=n(237),s=n(217),u=n(227),d=n(235),l=n(12),j=n(205),b=n(244),h=n(216),f=n(201),p=n(242),O=n(135),v=n(14),x=n(90),g=n(215),y=n(238),m=n(2),w=Object(y.a)(g.a);function k(e){var t=e.children,n=Object(x.a)(e,["children"]);return Object(m.jsx)(w,Object(v.a)(Object(v.a)({},n),{},{children:t}))}var C=function(){var e=Object(l.h)(),t=Object(l.g)(),n=Object(j.a)([!1,!1,!0]),r=function(r,a,i){return Object(m.jsxs)(k,{as:"button",onTapStart:function(){e(r)},backgroundColor:"whiteAlpha.100",textAlign:"center",flex:"1",role:"link",children:[Object(m.jsxs)(b.a,{spacing:3,position:"absolute",children:[n&&Object(m.jsx)(h.a,{as:"h4",size:"md",children:a}),Object(m.jsx)(f.a,{boxSize:6,as:i,"aria-label":a})]}),(c=r===t.pathname,c?Object(m.jsx)(k,{boxSize:"100%",layout:!0,layoutId:"outline",initial:!1,transition:{type:"spring"},backgroundColor:"blue.700",zIndex:-1}):Object(m.jsx)(m.Fragment,{}))]});var c};return Object(m.jsx)(p.a,{children:Object(m.jsxs)(s.a,{boxSize:"100%",align:"stretch",justify:"space-around",overflow:"hidden",children:[r("/calendar","Calendar",O.a),r("/","Recording",O.c),r("/options","Options",O.b)]})})},A=n(57),S=n(11),M=n(106),R=n(15),D=n.n(R),P=n(30),T=n(36),L=n(40),E=n(218),I=n(219),z=n(239),U=n(220),N=n(221),F=n(222),W=n(223);function H(e){var t=Math.floor(e/60),n=e%60,r=function(e){return e<10?"0".concat(e):e};return"".concat(r(t),":").concat(r(n))}var B=function(){function e(t){Object(T.a)(this,e),this.database=void 0,this.database=t}return Object(L.a)(e,[{key:"clearAllEntries",value:function(){var e=Object(P.a)(D.a.mark((function e(){var t=this;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.database.audioEntries.clear().then((function(){return t.database.audioData.clear()})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"addEntry",value:function(e){var t=this;return this.database.audioEntries.add({date:e.date,description:e.description,length:e.length}).then((function(){return t.database.audioData.add({date:e.date,audio:e.audio})}))}},{key:"getEntryHeaderByDescription",value:function(e){return this.database.audioEntries.where("description").equalsIgnoreCase(e).toArray()}},{key:"getEntry",value:function(){var e=Object(P.a)(D.a.mark((function e(t){var n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.database.audioEntries.get(t);case 2:return n=e.sent,e.next=5,this.database.audioData.get(t);case 5:if(r=e.sent,!n||!r){e.next=8;break}return e.abrupt("return",Object(v.a)(Object(v.a)({},n),r));case 8:return e.abrupt("return",void 0);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllEntriesDates",value:function(){return this.database.audioEntries.toCollection().primaryKeys()}},{key:"getMonthEntriesHeader",value:function(e){return this.database.audioEntries.where("date").between((t=e,Object(I.a)(t)),function(e){return Object(N.a)(e)}(e)).toArray();var t}},{key:"getDayEntriesHeader",value:function(e){return this.database.audioEntries.where("date").between((t=e,Object(F.a)(t)),function(e){return Object(W.a)(e)}(e)).toArray();var t}}]),e}(),Y=n(171),K=n(169),V=function(e){Object(Y.a)(n,e);var t=Object(K.a)(n);function n(){var e;return Object(T.a)(this,n),(e=t.call(this,"LocalDatabase")).audioEntries=void 0,e.audioData=void 0,e.user=void 0,e.version(1).stores({audioEntries:"date,description",user:"name",audioData:"date"}),e.user=e.table("user"),e.audioEntries=e.table("audioEntries"),e.audioData=e.table("audioData"),e}return n}(n(162).a),J=n(35),_=n(111);function q(e){return J.MaybeAsync.liftMaybe(_.Maybe.fromFalsy(e[0]))}var G=function(){function e(t){Object(T.a)(this,e),this.database=void 0,this.database=t}return Object(L.a)(e,[{key:"clearUser",value:function(){var e=this;return Object(J.MaybeAsync)((function(){return e.database.user.toCollection().delete()}))}},{key:"getUser",value:function(){var e=this;return Object(J.MaybeAsync)((function(){return e.database.user.toArray()})).chain(q)}},{key:"createUser",value:function(e){var t=this;return this.clearUser().chain((function(){return Object(J.MaybeAsync)((function(){return t.database.user.add(e)})).chain((function(){return t.getUser()}))}))}}]),e}(),X=new V;X.open().catch((function(e){return console.log(e)}));var $=new B(X),Q=new G(X),Z=new(function(){function e(){Object(T.a)(this,e),this.audio=void 0;var t=document.createElement("audio");t.preload="auto",document.body.append(t),this.audio=t}return Object(L.a)(e,[{key:"setAudioSource",value:function(e){this.stopPlaying(),this.audio.src=e,this.audio.load(),this.audio.currentTime=0}},{key:"startPlaying",value:function(){this.audio.play()}},{key:"pausePlaying",value:function(){this.audio.pause()}},{key:"stopPlaying",value:function(){this.audio.pause(),this.audio.currentTime=0}},{key:"seekTo",value:function(e){e>0&&e<this.audio.duration&&(this.audio.currentTime=e)}},{key:"getAudioDuration",value:function(){var e=this.audio.duration;return Number.isNaN(e)?0:null!==e&&void 0!==e?e:0}},{key:"onAudioDurantionChange",value:function(e){var t=this;this.audio.addEventListener("durationchange",(function(){e(t.getAudioDuration())}))}},{key:"onAudioPlaybackEnd",value:function(e){var t=this;this.audio.addEventListener("ended",(function(){e(t.audio.currentTime)}))}},{key:"onCurrentTimeUpdate",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=!0,a=function(){r&&(e(t.audio.currentTime),setTimeout((function(){r=!0}),n)),r=!1};this.audio.addEventListener("timeupdate",(function(){a()})),this.audio.addEventListener("ended",(function(){e(t.audio.currentTime)})),this.audio.addEventListener("seeked",(function(){console.log("seedk"),e(t.audio.currentTime)}))}}]),e}()),ee=Object(S.c)("playback/loadAudioDuration",(function(){return Z.getAudioDuration()})),te=Object(S.b)("playback/changedAudioTime"),ne=Object(S.c)("playback/createdAudioUrl",(function(e){var t=window.URL.createObjectURL(e);return Z.setAudioSource(t),t})),re=Object(S.c)("playback/startPlayingRecord",(function(){Z.startPlaying()})),ae=Object(S.c)("playback/pausePlayingRecord",(function(){Z.pausePlaying()})),ie=Object(S.c)("playback/stopPlayingRecord",(function(){Z.stopPlaying()})),ce=Object(S.c)("playback/pausePlayButtonClicked",(function(e,t){var n=t.dispatch,r=(0,t.getState)().playback,a=r.isPlaying;r.audioUrl&&n(a?ae():re())})),oe=Object(S.c)("calendar/loadMonthRecordigns",function(){var e=Object(P.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$.getMonthEntriesHeader(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),se=Object(S.c)("calendar/selectedDay",(function(e){return e})),ue=Object(S.c)("calendar/loadAudioPlayback",function(){var e=Object(P.a)(D.a.mark((function e(t,n){var r,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,e.next=3,$.getEntry(t);case 3:(a=e.sent)&&r(ne(a.audio));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),de={selectedDay:null,recordings:[]},le=Object(S.d)(de,(function(e){e.addCase(oe.fulfilled,(function(e,t){e.recordings=t.payload})).addCase(se.fulfilled,(function(e,t){e.selectedDay=t.payload}))}));function je(e,t){var n=window;n.Cypress&&(n[e]=t)}var be=n(164),he=n(126),fe=n.n(he);function pe(e){return(new TextDecoder).decode(e)}function Oe(e){var t=e.split(",").map((function(e){return Number(e)}));return Uint8Array.from(t)}function ve(e){return Object(J.MaybeAsync)((function(){return window.crypto.subtle.exportKey("raw",e)}))}function xe(e){return ve(e).map(pe)}function ge(e){var t,n=Object(be.curry)(ye);return(t=e.secret,Object(J.MaybeAsync)((function(){var e=new TextEncoder;return window.crypto.subtle.importKey("raw",e.encode(t),"PBKDF2",!1,["deriveKey"])}))).chain(n(e.salt)).map((function(t){return{key:t,salt:e.salt}}))}function ye(e,t){return Object(J.MaybeAsync)((function(){return window.crypto.subtle.deriveKey({name:"PBKDF2",salt:e,iterations:1e5,hash:"SHA-256"},t,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"])}))}function me(e){return window.crypto.getRandomValues(new Uint8Array(e))}var we=n(108),ke=n.n(we);function Ce(e){var t=me(16);return ve(e).map(pe).chain((function(e){return function(e,t){return Object(J.MaybeAsync)((function(){return ke.a.hash({pass:e,salt:t,type:ke.a.ArgonType.Argon2id})}))}(e,t)}))}function Ae(e,t){return Object(J.MaybeAsync)((function(){return ke.a.verify({pass:e,encoded:t,type:ke.a.ArgonType.Argon2id})}))}function Se(e,t){var n=e.loginKey,r=n.salt,a=n.encodedKey;return ge({salt:Oe(r),secret:t}).chain((function(e){return function(e,t){return"string"===typeof e?Ae(e,t):ve(e).map(pe).chain((function(e){return Ae(e,t)}))}(e.key,a).map((function(){return e.key}))}))}function Me(e,t){return ge(function(e){return{salt:me(16),secret:e}}(t)).chain(Re).map((function(t){return function(e,t){return{name:e,loginKey:t}}(e,t)}))}function Re(e){return function(e,t){return t.map((function(t){return{encodedKey:t.encoded,salt:e}}))}(e.salt.join(","),Ce(e.key))}var De=new(function(){function e(t,n){Object(T.a)(this,e),this.storage=void 0,this.users=void 0,this.authInfo="authInfo",this.storage=t,this.users=n}return Object(L.a)(e,[{key:"getAuthSession",value:function(){return this.storage.getItem(this.authInfo)}},{key:"setAuthSession",value:function(e){this.storage.setItem(this.authInfo,e)}},{key:"isAuthenticated",value:function(){return null!==this.getAuthSession()}},{key:"authenticate",value:function(e){var t=this;return this.users.getUser().chain((function(t){return Se(t,e)})).chain(xe).ifJust((function(e){return t.setAuthSession(e)})).run().then((function(e){return e.isJust()}))}},{key:"createNewUser",value:function(e,t){var n=this;return Me(e,t).chain((function(e){return n.users.createUser(e)})).run().then((function(e){return e.extractNullable()}))}}]),e}())(window.sessionStorage,Q);je("authSession",De);var Pe,Te=De,Le=n(32);function Ee(e){return e.type.endsWith("/pending")}function Ie(e){return e.type.endsWith("/rejected")}function ze(e){return e.type.endsWith("/fulfilled")}function Ue(e,t,n){var r,a;(r=(a=e.addMatcher.apply(e,Object(Le.a)(function(e,t){return[Ee,function(n,r){r.type.includes(t)&&n&&n[e]&&(n[e]=Pe.Pending)}]}(t,n)))).addMatcher.apply(a,Object(Le.a)(function(e,t){return[ze,function(n,r){r.type.includes(t)&&n&&n[e]&&(n[e]=Pe.Completed,"boolean"===typeof r.payload&&!1===r.payload&&(n[e]=Pe.Rejected))}]}(t,n)))).addMatcher.apply(r,Object(Le.a)(function(e,t){return[Ie,function(n,r){r.type.includes(t)&&n&&n[e]&&(n[e]=Pe.Rejected)}]}(t,n)))}!function(e){e[e.Completed=0]="Completed",e[e.Pending=1]="Pending",e[e.NotStarted=2]="NotStarted",e[e.Rejected=3]="Rejected"}(Pe||(Pe={}));var Ne=Object(S.c)("user/loadInitialState",Object(P.a)(D.a.mark((function e(){var t,n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.getUser().run();case 2:if(t=e.sent,n=t.extract(),r=Te.isAuthenticated(),!n){e.next=7;break}return e.abrupt("return",{isLoggedIn:r?Pe.Completed:Pe.NotStarted,isUserCreated:Pe.Completed,name:n.name,isLoadingInitialState:!1});case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e)}))));je("loadInitialUserState",Ne);var Fe,We={isLoggedIn:Pe.NotStarted,isUserCreated:Pe.NotStarted,isLoadingInitialState:!0,name:""},He=Object(S.d)(We,(function(e){e.addCase(Ne.fulfilled,(function(e,t){var n=t.payload;return n||Object(v.a)(Object(v.a)({},e),{},{isLoadingInitialState:!1})})),Ue(e,"isLoggedIn","loginUser"),Ue(e,"isUserCreated","createNewUser")})),Be={audioUrl:"",isPlaying:!1,audioDuration:0,currentAudioTime:0},Ye=Object(S.d)(Be,(function(e){return e.addCase(ne.fulfilled,(function(e,t){e.audioUrl=t.payload})).addCase(re.fulfilled,(function(e){e.isPlaying=!0})).addCase(ae.fulfilled,(function(e){e.isPlaying=!1})).addCase(ie.fulfilled,(function(e){e.isPlaying=!1})).addCase(ee.fulfilled,(function(e,t){e.audioDuration=t.payload})).addCase(te,(function(e,t){e.currentAudioTime=t.payload}))})),Ke=Object(S.c)("db/saveRecordInDb",(function(e){var t={date:new Date,description:"none yet",length:20,audio:e};$.addEntry(t)})),Ve=function(){function e(t){var n=this;Object(T.a)(this,e),this.mediaRecorder=void 0,this.dataChunks=void 0,this.mediaRecorder=t,this.dataChunks=new Array,this.mediaRecorder.ondataavailable=function(e){n.dataChunks.push(e.data)},this.mediaRecorder.onerror=function(e){return console.log(e)}}return Object(L.a)(e,[{key:"start",value:function(){this.dataChunks=new Array,this.mediaRecorder.start()}},{key:"stop",value:function(){var e=this,t=new Promise((function(t){e.mediaRecorder.onstop=function(){t(e.getRecordedData())}}));return this.mediaRecorder.stop(),t}},{key:"getRecordedData",value:function(){return new Blob(this.dataChunks,{type:this.mediaRecorder.mimeType})}}]),e}(),Je=new(function(){function e(){Object(T.a)(this,e),this.microphoneController=null}return Object(L.a)(e,[{key:"askForUserPermission",value:function(){var e=Object(P.a)(D.a.mark((function e(){var t,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.microphoneController){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,navigator.mediaDevices.getUserMedia({audio:!0});case 4:t=e.sent,n=new MediaRecorder(t,{mimeType:"audio/ogg; codecs=opus"}),this.microphoneController=new Ve(n);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"startRecording",value:function(){this.microphoneController&&this.microphoneController.start()}},{key:"stopRecording",value:function(){var e=Object(P.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.microphoneController){e.next=2;break}return e.abrupt("return",null);case 2:return e.abrupt("return",this.microphoneController.stop());case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}());!function(e){e[e.Available=0]="Available",e[e.NotAvailable=1]="NotAvailable",e[e.Pending=2]="Pending"}(Fe||(Fe={}));var _e=Object(S.c)("record/askForMicrophonePermission",Object(P.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Je.askForUserPermission();case 2:case"end":return e.stop()}}),e)})))),qe=Object(S.c)("record/startRecording",Object(P.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Je.startRecording();case 1:case"end":return e.stop()}}),e)})))),Ge=Object(S.c)("record/stopRecording",function(){var e=Object(P.a)(D.a.mark((function e(t,n){var r,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,e.next=3,Je.stopRecording();case 3:(a=e.sent)&&(r(ne(a)),r(Ke(a)));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Xe=Object(S.c)("record/recordButtonClicked",function(){var e=Object(P.a)(D.a.mark((function e(t,n){var r,a,i,c,o,s,u;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.dispatch,a=n.getState,i=a(),c=i.record,o=c.isMicrophoneAvailable,s=c.isRecording,(u=$e(o,s))&&r(u());case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());function $e(e,t){return t?Ge:e===Fe.NotAvailable?_e:e===Fe.Available?qe:null}var Qe={isRecording:!1,isMicrophoneAvailable:Fe.NotAvailable},Ze=Object(S.e)({name:"record",initialState:Qe,reducers:{},extraReducers:function(e){return e.addCase(_e.fulfilled,(function(e){e.isMicrophoneAvailable=Fe.Available})).addCase(_e.rejected,(function(e){e.isMicrophoneAvailable=Fe.NotAvailable})).addCase(_e.pending,(function(e){e.isMicrophoneAvailable=Fe.Pending})).addCase(qe.fulfilled,(function(e){e.isRecording=!0})).addCase(Ge.fulfilled,(function(e){e.isRecording=!1}))}}).reducer,et=Object(A.b)({record:Ze,playback:Ye,user:He,calendar:le}),tt={calendar:de,record:Qe,playback:Be,user:We};var nt=function(e){var t=Object(v.a)(Object(v.a)({},tt),e);return Object(S.a)({reducer:et,preloadedState:t})}(),rt=nt,at=function(){return Object(M.b)()},it=M.c;je("store",nt);var ct=function(e){return e.user.isUserCreated},ot=function(e){return e.user.isLoadingInitialState},st=function(e){return e.user.isLoggedIn};function ut(e){var t=e.children,n=e.redirect,r=void 0===n||n,a=it(st);return Object(m.jsx)(m.Fragment,{children:a===Pe.Completed?t:r&&Object(m.jsx)(l.a,{to:"/login",replace:!0})})}var dt=n(165),lt=n(225),jt=n(75),bt=n(112),ht=function(e){return e.playback.isPlaying},ft=function(e){return e.playback.audioDuration},pt=function(e){return e.playback.currentAudioTime},Ot=Object(bt.a)(pt,ft,(function(e,t){return e/t*100})),vt=n(224),xt=n(240);var gt=function(){var e=it(ft),t=it(Ot),n=it(pt);return Object(m.jsxs)(b.a,{spacing:3,children:[Object(m.jsx)(vt.a,{fontSize:"2xl",children:n.toFixed(2)}),Object(m.jsxs)(xt.a,{"aria-label":"AudioPlaybackSlider",defaultValue:0,value:t,focusThumbOnChange:!1,onChange:function(e){!function(e){var t=Z.getAudioDuration()*(e/100);Z.seekTo(t)}(e)},children:[Object(m.jsx)(xt.d,{children:Object(m.jsx)(xt.b,{})}),Object(m.jsx)(xt.c,{})]}),Object(m.jsx)(vt.a,{fontSize:"2xl",children:e.toFixed(2)})]})};var yt=function(){var e=at(),t=it(ht);return Object(m.jsxs)(dt.a,{p:[3,3,4,5],templateColumns:"1fr repeat(3, auto) 1fr",justifyItems:"center",alignItems:"center",justifyContent:"center",alignContent:"center",children:[Object(m.jsx)(dt.b,{colStart:2,children:Object(m.jsx)(lt.a,{isRound:!0,colorScheme:"green","aria-label":"Forward",size:"md",mx:2,icon:Object(m.jsx)(f.a,{boxSize:6,as:jt.b})})}),Object(m.jsx)(dt.b,{children:Object(m.jsx)(lt.a,{isRound:!0,colorScheme:"green","aria-label":"PlayPause",size:"lg",mx:["0.5","1.5","2.5","3"],icon:t?Object(m.jsx)(f.a,{boxSize:8,as:jt.c}):Object(m.jsx)(f.a,{boxSize:8,as:jt.d}),onClick:function(){e(ce())}})}),Object(m.jsx)(dt.b,{children:Object(m.jsx)(lt.a,{isRound:!0,colorScheme:"green","aria-label":"Rewind",size:"md",mx:2,icon:Object(m.jsx)(f.a,{boxSize:6,as:jt.e})})}),Object(m.jsx)(dt.b,{children:Object(m.jsx)(lt.a,{isRound:!0,marginLeft:["4","5","12"],colorScheme:"red","aria-label":"Stop",size:"sm",icon:Object(m.jsx)(f.a,{boxSize:4,as:jt.f}),onClick:function(){e(ie())}})}),Object(m.jsx)(dt.b,{width:"100%",colSpan:5,px:5,children:Object(m.jsx)(gt,{})})]})};var mt=function(){return Object(m.jsx)(yt,{})},wt=n(6),kt=n(229),Ct=n(228),At=Object(y.a)(u.a);function St(e){var t=e.children,n=Object(x.a)(e,["children"]);return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(At,Object(v.a)(Object(v.a)({},n),{},{children:t}))})}var Mt=function(e){var t,n,r=e.dayNumber,a=e.recordsNumber,i=void 0===a?0:a,c=at();return Object(m.jsx)(Ct.a,{ratio:1,children:Object(m.jsx)(St,{boxSize:"100%",bgColor:"gray.700",whileTap:{scale:.8},whileHover:{scale:1.2},onClick:function(){r&&c(se(r))},children:(t=i,n=Object(m.jsx)(vt.a,{textAlign:"center",children:r}),t>0?Object(m.jsx)(k,{bgColor:"blue.800",width:"30%",height:"30%",borderRadius:"50%",whileHover:{scale:1.2},children:Object(m.jsx)(k,{bgColor:"blue.300",width:"60%",height:"60%",borderRadius:"50%",whileHover:{scale:1.5},children:n})}):n)})})},Rt=function(e){var t,n=e.numberOfDays,r=e.startAtDay,a=e.recordsDays,i=Array.from(Array(n).keys(),(function(e){return e+1})).map((function(e){return Object(m.jsx)(Mt,{dayNumber:e,recordsNumber:a[e]})})),c=(t=r,["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].findIndex((function(e){return t===e}))),o=new Array(c).fill(0).map((function(){return Object(m.jsx)(Mt,{})})),s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((function(e){return Object(m.jsx)(vt.a,{bgColor:"blue.600",textAlign:"center",children:e})}));return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(St,{initial:{x:"-25vw"},animate:{x:0,transition:{type:"spring",bounce:.5}},children:Object(m.jsxs)(kt.a,{width:"100%",columns:7,spacingX:[2,3,5,5],spacingY:[2,2,3,3],children:[s,o,i]})})})},Dt=n(170),Pt=Object(y.a)(Dt.a);function Tt(e){var t=e.children,n=Object(x.a)(e,["children"]);return Object(m.jsx)(Pt,Object(v.a)(Object(v.a)({colorScheme:"gray",whileHover:{scale:1.1},whileTap:{scale:.6,transition:{duration:.1}}},n),{},{children:t}))}var Lt=function(e){var t=e.date,n=e.onNextMonth,r=e.onPreviousMonth,a=e.recordingDays,i=void 0===a?{}:a,c=function(e){return Object(E.a)(e)}(t),o=function(e){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][Object(I.a)(e).getDay()]}(t),s=function(e){return Object(z.a)(e,"MMMM yyyy")}(t);return Object(m.jsxs)(u.a,{boxSize:"100%",children:[Object(m.jsxs)(b.a,{justify:"center",spacing:8,marginBottom:4,children:[Object(m.jsx)(Tt,{"aria-label":"PreviousMonth",onClick:function(){return r()},children:Object(m.jsx)(vt.a,{textAlign:"center",children:"<"})}),Object(m.jsx)(g.a,{children:Object(m.jsx)(St,{initial:{scaleY:0},animate:{scaleY:1},children:Object(m.jsx)(h.a,{textAlign:"center",children:s})},"CalendarTitle_".concat(s))}),Object(m.jsx)(Tt,{"aria-label":"NextMonth",onClick:function(){return n()},children:Object(m.jsx)(vt.a,{textAlign:"center",children:">"})})]}),Object(m.jsx)(Rt,{numberOfDays:c,startAtDay:o,recordsDays:i},"CalendarMonth_".concat(s))]})};var Et=function(e){var t=e.audioEntry,n=at();return Object(m.jsx)(g.a,{width:"100%",children:Object(m.jsxs)(St,{as:"button",width:"100%",borderWidth:"1px",borderRadius:"lg",textAlign:"center",whileHover:{backgroundColor:"#2a4365"},whileTap:{scale:.85},initial:{scale:0},animate:{scale:1,transition:{duration:.2,ease:"circOut"}},p:"2",onClick:function(){return n(ue(t.date))},children:[Object(m.jsx)(u.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",isTruncated:!0,children:"".concat(t.date.toLocaleTimeString())}),Object(m.jsx)(u.a,{color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",ml:"2",children:"".concat(t.description," ").concat(t.length,"s")})]})})};var It=function(e){var t=e.dayRecordingHeaders;return Object(m.jsxs)(b.d,{divider:Object(m.jsx)(b.c,{borderColor:"gray.200"}),spacing:4,align:"stretch",children:[Object(m.jsx)(g.a,{mt:"1",fontWeight:"semibold",as:"h2",lineHeight:"tight",isTruncated:!0,children:Object(m.jsx)(vt.a,{fontSize:"3xl",children:"".concat(t[0].date.toLocaleDateString())})}),t.map((function(e){return Object(m.jsx)(Et,{audioEntry:e},e.date.toString())}))]})},zt=n(8),Ut=function(e){return e.calendar.recordings},Nt=Object(bt.a)(Ut,(function(e){return e.map((function(e){return e.date.getDate()})).reduce((function(e,t){return Object(v.a)(Object(zt.a)({},t,1),e)}),{})})),Ft=Object(bt.a)(Ut,(function(e){return e.calendar.selectedDay}),(function(e,t){return t?e.filter((function(e){return n=e.date,r=t,n.getDate()===r;var n,r})):[]}));var Wt=function(){var e=at(),t=Object(r.useState)(new Date),n=Object(wt.a)(t,2),a=n[0],i=n[1],c=it(Nt),o=it(Ft);return Object(r.useEffect)((function(){e(oe(a))}),[a]),Object(m.jsxs)(b.b,{direction:["column","column","column","row"],spacing:5,m:[2,2,3,5],justify:"center",align:"stretch",children:[Object(m.jsx)(u.a,{width:["100%","100%","100%","58%"],children:Object(m.jsx)(Lt,{date:a,onNextMonth:function(){return i((e=a,Object(U.a)(e,1)));var e},onPreviousMonth:function(){return i((e=a,Object(U.a)(e,-1)));var e},recordingDays:c})}),0!==o.length&&Object(m.jsx)(u.a,{width:["100%","100%","100%","42%"],children:Object(m.jsx)(It,{dayRecordingHeaders:o})})]})};var Ht=function(){return Object(m.jsx)(u.a,{centerContent:!0,boxSize:"100%",children:Object(m.jsx)(Wt,{})})},Bt=n(241),Yt=n(232),Kt=n(72),Vt=n(230),Jt=n(246),_t=n(231);var qt=function(e){var t=Object(r.useState)(fe.a.mapValues(e,(function(){return{error:null,value:""}}))),n=Object(wt.a)(t,2),a=n[0],i=n[1],c=Object(r.useCallback)((function(t){var n=Object.entries(e).reduce((function(e,n){var r=Object(wt.a)(n,2),a=r[0],i=r[1];if(i){var c=t[a].value,o=i(c,t);return Object(v.a)(Object(v.a)({},e),{},Object(zt.a)({},a,{error:o,value:c}))}return e}),{});i(Object(v.a)(Object(v.a)({},t),n))}),[e]);return[Object(r.useCallback)((function(e){var t=e.target,n=t.id,r=t.value;c(Object(v.a)(Object(v.a)({},a),{},Object(zt.a)({},n,Object(v.a)(Object(v.a)({},a[n]),{},{value:r}))))}),[a,c]),a]};var Gt=function(e){var t=e.definition,n=e.submitText,r=void 0===n?"Submit":n,a=e.onSubmit,i=void 0===a?function(){}:a,c=qt(t.reduce((function(e,t){var n,r=null!==(n=t.validation)&&void 0!==n?n:function(){return null};return Object(v.a)(Object(v.a)({},e),{},Object(zt.a)({},t.id,r))}),{})),o=Object(wt.a)(c,2),s=o[0],u=o[1],d=t.map((function(e){var t,n;return Object(m.jsxs)(Kt.a,{id:e.id,isInvalid:(n=u[e.id].error,null!==n&&""!==n),children:[Object(m.jsx)(Vt.a,{children:e.label}),Object(m.jsx)(Jt.a,{type:null!==(t=e.type)&&void 0!==t?t:"text"}),e.helperText&&Object(m.jsx)(Kt.b,{children:e.helperText}),Object(m.jsx)(_t.a,{children:u[e.id].error})]},e.id)})),l=Object.values(u).reduce((function(e,t){return null===t.error||""!==t.error||e}),!1);return Object(m.jsxs)("form",{onChange:s,onSubmit:function(){i(u)},children:[Object(m.jsx)(b.d,{spacing:7,align:"stretch",children:d}),Object(m.jsx)(Dt.a,{width:"100%",my:7,type:"submit",colorScheme:"gray",disabled:l,children:r})]})},Xt=Object(S.c)("user/createNewUser",function(){var e=Object(P.a)(D.a.mark((function e(t){var n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.password,e.next=3,Te.createNewUser(n,r);case 3:if(!e.sent){e.next=6;break}return e.abrupt("return",!0);case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());je("createNewUser",Xt);var $t=Object(S.c)("user/loginUser",function(){var e=Object(P.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Te.authenticate(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());je("loginUser",$t);var Qt=function(){var e=at();return Object(m.jsx)(Gt,{onSubmit:function(t){return e(Xt({name:t.name.value,password:t.password.value}))},definition:[{id:"name",label:"Your Name",helperText:"What should we call you?",validation:function(e){return e.length>=5?"":"Your name is too short"}},{id:"password",label:"Password",type:"password",helperText:"Your data is not stored in servers. If you lose your password your data is lost forever!",validation:function(e){return e.length>=5?"":"Your password is too short"}},{id:"passwordConfirmation",label:"Confirm Password",type:"password",validation:function(e,t){return e===t.password.value?"":"Passwords are different"}}]})};var Zt=function(e){var t=e.actionStatus,n=e.statusMap[t];return Object(m.jsx)(m.Fragment,{children:n})},en=n(226);var tn=function(){return Object(m.jsx)(g.a,{children:Object(m.jsx)(en.a,{size:"xl",my:5})})};var nn=function(){var e,t=it(ct),n=Object(m.jsx)(Bt.a,{in:!0,offsetY:"-50px",children:Object(m.jsx)(h.a,{py:10,as:"h6",size:"xs",pb:5,color:"red.300",textAlign:"center",children:"Failed to create user :(. Please reload and try again."})});return Object(m.jsx)(Yt.a,{maxW:"container.sm",children:Object(m.jsx)(Zt,{actionStatus:t,statusMap:(e={},Object(zt.a)(e,Pe.NotStarted,Object(m.jsx)(Qt,{})),Object(zt.a)(e,Pe.Completed,Object(m.jsx)(l.a,{to:"/",replace:!0})),Object(zt.a)(e,Pe.Rejected,n),Object(zt.a)(e,Pe.Pending,Object(m.jsx)(tn,{})),e)})})},rn=n(233),an=n(66);var cn=function(){var e=at();return Object(m.jsx)(Gt,{onSubmit:function(t){return e($t(t.password.value))},definition:[{id:"password",label:"Password",type:"password",helperText:"Your data is not stored in servers. If you lose your password your data is lost forever!",validation:function(e){return e.length>=5?"":"Your password is too short"}}]})};var on=function(){var e,t,n=it(st),r=it(ct),a=Object(m.jsx)(Zt,{actionStatus:n,statusMap:(e={},Object(zt.a)(e,Pe.NotStarted,Object(m.jsx)(cn,{})),Object(zt.a)(e,Pe.Completed,Object(m.jsx)(l.a,{to:"/",replace:!0})),Object(zt.a)(e,Pe.Rejected,(t=Object(m.jsx)(cn,{}),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(Bt.a,{in:!0,offsetY:"-50px",children:[Object(m.jsx)(h.a,{as:"h6",size:"xs",pb:5,color:"red.300",children:"Incorrect Password"}),t]})}))),Object(zt.a)(e,Pe.Pending,Object(m.jsx)(tn,{})),e)});return Object(m.jsx)(Yt.a,{maxW:"container.sm",mt:5,children:r===Pe.Completed?a:Object(m.jsx)(g.a,{textAlign:"center",children:Object(m.jsxs)(h.a,{as:"h2",size:"lg",children:["Don't have a user?","  ",Object(m.jsx)(rn.a,{as:"h2",children:Object(m.jsx)(an.b,{to:"/create",children:" How about creating a new user?"})})]})})})},sn=n(206);var un=function(){var e=Object(sn.b)().toggleColorMode;return Object(m.jsx)(lt.a,{onClick:e,colorScheme:"gray","aria-label":"ColorMode",icon:Object(m.jsx)(f.a,{as:jt.a})})};var dn=function(){return Object(m.jsx)(u.a,{centerContent:!0,boxSize:"100%",children:Object(m.jsx)(un,{})})},ln=n(204),jn=function(e){return e.record.isRecording},bn=Object(bt.a)((function(e){return e.record.isMicrophoneAvailable}),(function(e){return e===Fe.Available}));var hn=function(){var e=Object(r.useState)(0),t=Object(wt.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){setTimeout((function(){a(n+1)}),1e3)}),[n,a]),Object(m.jsx)(h.a,{p:1,as:"h2",size:"3xl",isTruncated:!0,children:H(n)})};var fn=function(){var e=at(),t=it(jn),n=it(bn),r="#ff524d",a=Object(m.jsxs)("button",{type:"button",children:[Object(m.jsx)(ln.a,{children:"End Recording"}),Object(m.jsxs)(y.a.svg,{xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",width:"100%",role:"presentation",children:[Object(m.jsx)(y.a.path,{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z",fill:"none",stroke:r,strokeMiterlimit:"10",strokeWidth:"32",strokeLinecap:"round"}),Object(m.jsx)(y.a.circle,{initial:{opacity:0,pathLength:0,r:0},animate:{pathLength:1,opacity:1,r:144},transition:{ease:"easeInOut",duration:.5},fill:r,cx:"256",cy:"256",r:"144"})]})]}),i=Object(m.jsxs)(y.a.svg,{xmlns:"http://www.w3.org/2000/svg",width:"100%",fill:"none",viewBox:"0 0 512 512",stroke:"currentColor",children:[Object(m.jsx)("title",{children:"microphone not authorized or available"}),Object(m.jsx)(y.a.path,{initial:{opacity:0,pathLength:0},animate:{pathLength:1,opacity:1},transition:{ease:"easeInOut",duration:1.5},strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",stroke:r,d:"M432 400L96 64"}),Object(m.jsx)(y.a.path,{initial:{opacity:0,pathLength:0},animate:{pathLength:1,opacity:1},transition:{ease:"easeInOut",duration:1.5},strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",fill:"currentColor",stroke:r,d:"M400 240v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 208v32a111.58 111.58 0 01-2.45 23.31 4.05 4.05 0 001.07 3.69l21.82 21.81a2 2 0 003.29-.72A143.27 143.27 0 00400 240zM256 352a112.36 112.36 0 01-112-112v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 208v32c0 74 56.1 135.12 128 143.11V432h-47.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 00192 464h127.55c8.61 0 16-6.62 16.43-15.23A16 16 0 00320 432h-48v-48.89a143.08 143.08 0 0052-16.22 4 4 0 00.91-6.35L307 342.63a4 4 0 00-4.51-.78A110.78 110.78 0 01256 352zM256 80a47.18 47.18 0 0148 48v74.72a4 4 0 001.17 2.82L332.59 233a2 2 0 003.41-1.42V128.91C336 85 301 48.6 257.14 48a79.66 79.66 0 00-68.47 36.57 4 4 0 00.54 5l19.54 19.54a2 2 0 003.25-.63A47.44 47.44 0 01256 80z"}),Object(m.jsx)(y.a.path,{initial:{opacity:0,pathLength:0},animate:{pathLength:1,opacity:1},transition:{ease:"easeInOut",duration:1.5},strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",fill:"currentColor",stroke:r,d:"M207.27 242.9L179.41 215a2 2 0 00-3.41 1.42V239a80.89 80.89 0 0023.45 56.9 78.55 78.55 0 0077.8 21.19 2 2 0 00.86-3.35l-24.91-24.91a4.08 4.08 0 00-2.42-1.15c-21.65-2.52-39.48-20.44-42.37-42.43a4 4 0 00-1.14-2.35z"})]}),c=Object(m.jsxs)("button",{type:"button",children:[Object(m.jsx)(ln.a,{children:"Start Recording"}),Object(m.jsxs)(y.a.svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",stroke:"currentColor",width:"100%",role:"presentation",children:[Object(m.jsx)(y.a.path,{initial:{opacity:0,pathLength:0},animate:{pathLength:1,opacity:1},transition:{ease:"easeInOut",duration:1.5},fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M192 448h128M384 208v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32M256 368v80"}),Object(m.jsx)(y.a.path,{initial:{opacity:0,pathLength:0},animate:{pathLength:1,opacity:1},transition:{ease:"easeInOut",duration:1.5},d:"M256 64a63.68 63.68 0 00-64 64v111c0 35.2 29 65 64 65s64-29 64-65V128c0-36-28-64-64-64z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"})]})]}),o=Object(m.jsx)(m.Fragment,{children:t?a:n?c:i});return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g.a,{m:10,width:["80%","80%","70%","50%","30%"],children:Object(m.jsx)(u.a,{onClick:function(){return e(Xe())},children:o})}),Object(m.jsx)(g.a,{children:Object(m.jsx)(Bt.a,{in:t,offsetY:"20px",children:t&&Object(m.jsx)(hn,{})})})]})};var pn=function(){var e=at();return Object(r.useEffect)((function(){e(_e())}),[e]),Object(m.jsx)(Yt.a,{overflow:"hidden",maxW:"container.xl",centerContent:!0,children:Object(m.jsx)(fn,{})})},On=[function(e){Z.onAudioDurantionChange((function(){e(ee())}))},function(e){Z.onCurrentTimeUpdate((function(t){e(te(t))}))},function(e){Z.onAudioPlaybackEnd((function(){e(ie())}))}];var vn=function(){var e=at();Object(r.useEffect)((function(){e(Ne()),On.forEach((function(t){return t(e)}))}),[e])},xn=n(234);var gn=function(){return Object(m.jsxs)(b.b,{spacing:5,children:[Object(m.jsx)(xn.a,{height:"50px"}),Object(m.jsx)(xn.a,{height:"50px"}),Object(m.jsx)(xn.a,{height:"50px"})]})};function yn(e){var t=e.children,n=it(ot);return Object(m.jsx)(m.Fragment,{children:n?Object(m.jsx)(Yt.a,{maxW:"container.sm",mt:5,children:Object(m.jsx)(gn,{})}):t})}var mn=function(){vn();var e=["10vh","10vh","7vh"],t=e.map((function(e){return 100-Number(e.replace("vh",""))})).map((function(e){return"".concat(String(e),"vh")})),n=function(e){var n=e.children;return Object(m.jsxs)(s.a,{height:t,direction:"column",children:[Object(m.jsx)(u.a,{overflow:"auto",children:n}),Object(m.jsx)(d.a,{}),Object(m.jsx)(u.a,{children:Object(m.jsx)(mt,{})})]})},r=Object(m.jsx)(yn,{children:Object(m.jsx)(ut,{children:Object(m.jsx)(n,{children:Object(m.jsx)(pn,{})})})}),a=Object(m.jsx)(yn,{children:Object(m.jsx)(ut,{children:Object(m.jsx)(n,{children:Object(m.jsx)(dn,{})})})}),i=Object(m.jsx)(n,{children:Object(m.jsx)(Ht,{})}),c=Object(m.jsx)(yn,{children:Object(m.jsx)(u.a,{height:t,children:Object(m.jsx)(on,{})})}),o=Object(m.jsx)(yn,{children:Object(m.jsx)(u.a,{height:t,children:Object(m.jsx)(nn,{})})});return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.a,{as:"nav",height:e,children:Object(m.jsx)(ut,{redirect:!1,children:Object(m.jsx)(C,{})})}),Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{path:"/*",element:r}),Object(m.jsx)(l.b,{path:"calendar",element:i}),Object(m.jsx)(l.b,{path:"login",element:c}),Object(m.jsx)(l.b,{path:"create",element:o}),Object(m.jsx)(l.b,{path:"options",element:a})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var wn=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,247)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))},kn=n(236),Cn={initialColorMode:"dark",useSystemColorMode:!1},An=Object(kn.a)({config:Cn}),Sn=n(243);c.a.render(Object(m.jsxs)(a.a.StrictMode,{children:[Object(m.jsx)(o.a,{initialColorMode:An.config.initialColorMode}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rt;return Object(m.jsx)(M.a,{store:t,children:Object(m.jsx)(an.a,{children:Object(m.jsx)(Sn.a,{theme:An,children:e})})})}(Object(m.jsx)(mn,{}))]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),wn()}},[[199,1,2]]]);
//# sourceMappingURL=main.8f719594.chunk.js.map