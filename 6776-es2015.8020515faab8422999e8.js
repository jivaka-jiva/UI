(self.webpackChunkui=self.webpackChunkui||[]).push([[6776],{6776:function(e,t,n){"use strict";n.r(t),n.d(t,{createSwipeBackGesture:function(){return i}});var r=n(1843),a=n(8520);n(6953);const i=(e,t,n,i,s)=>{const c=e.ownerDocument.defaultView;return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:n,onMove:e=>{i(e.deltaX/c.innerWidth)},onEnd:e=>{const t=c.innerWidth,n=e.deltaX/t,a=e.velocityX,i=a>=0&&(a>.2||e.deltaX>t/2),o=(i?1-n:n)*t;let u=0;if(o>5){const e=o/Math.abs(a);u=Math.min(e,540)}s(i,n<=0?.01:(0,r.j)(0,n,.9999),u)}})}}}]);