"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[713],{6713:function(e,t,n){var o,r,i,a,u,s,d,_,l,c;n.r(t),(o=function(){this.init()}).prototype={init:function(){var e=this||r;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator=window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var t=this||r;if(e=parseFloat(e),t.ctx||c(),void 0!==e&&e>=0&&e<=1){if(t._volume=e,t._muted)return t;t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e,r.ctx.currentTime);for(var n=0;n<t._howls.length;n++)if(!t._howls[n]._webAudio)for(var o=t._howls[n]._getSoundIds(),i=0;i<o.length;i++){var a=t._howls[n]._soundById(o[i]);a&&a._node&&(a._node.volume=a._volume*e)}return t}return t._volume},mute:function(e){var t=this||r;t.ctx||c(),t._muted=e,t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e?0:t._volume,r.ctx.currentTime);for(var n=0;n<t._howls.length;n++)if(!t._howls[n]._webAudio)for(var o=t._howls[n]._getSoundIds(),i=0;i<o.length;i++){var a=t._howls[n]._soundById(o[i]);a&&a._node&&(a._node.muted=!!e||a._muted)}return t},stop:function(){for(var e=this||r,t=0;t<e._howls.length;t++)e._howls[t].stop();return e},unload:function(){for(var e=this||r,t=e._howls.length-1;t>=0;t--)e._howls[t].unload();return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,c()),e},codecs:function(e){return(this||r)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||r;if(e.state=e.ctx&&e.ctx.state||"suspended",e._autoSuspend(),!e.usingWebAudio){if("undefined"!=typeof Audio)try{var t=new Audio;void 0===t.oncanplaythrough&&(e._canPlayEvent="canplay")}catch(t){e.noAudio=!0}else e.noAudio=!0}try{var t=new Audio;t.muted&&(e.noAudio=!0)}catch(e){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||r,t=null;try{t="undefined"!=typeof Audio?new Audio:null}catch(t){return e}if(!t||"function"!=typeof t.canPlayType)return e;var n=t.canPlayType("audio/mpeg;").replace(/^no$/,""),o=e._navigator?e._navigator.userAgent:"",i=o.match(/OPR\/([0-6].)/g),a=i&&33>parseInt(i[0].split("/")[1],10),u=-1!==o.indexOf("Safari")&&-1===o.indexOf("Chrome"),s=o.match(/Version\/(.*?) /),d=u&&s&&15>parseInt(s[1],10);return e._codecs={mp3:!(a||!n&&!t.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!n,opus:!!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(t.canPlayType('audio/wav; codecs="1"')||t.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!t.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!t.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(t.canPlayType("audio/x-m4b;")||t.canPlayType("audio/m4b;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(t.canPlayType("audio/x-mp4;")||t.canPlayType("audio/mp4;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!(d||!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!(d||!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(t.canPlayType("audio/x-flac;")||t.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||r;if(!e._audioUnlocked&&e.ctx){e._audioUnlocked=!1,e.autoUnlock=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var t=function(n){for(;e._html5AudioPool.length<e.html5PoolSize;)try{var o=new Audio;o._unlocked=!0,e._releaseHtml5Audio(o)}catch(t){e.noAudio=!0;break}for(var r=0;r<e._howls.length;r++)if(!e._howls[r]._webAudio)for(var i=e._howls[r]._getSoundIds(),a=0;a<i.length;a++){var u=e._howls[r]._soundById(i[a]);u&&u._node&&!u._node._unlocked&&(u._node._unlocked=!0,u._node.load())}e._autoResume();var s=e.ctx.createBufferSource();s.buffer=e._scratchBuffer,s.connect(e.ctx.destination),void 0===s.start?s.noteOn(0):s.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),s.onended=function(){s.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",t,!0),document.removeEventListener("touchend",t,!0),document.removeEventListener("click",t,!0),document.removeEventListener("keydown",t,!0);for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("unlock")}};return document.addEventListener("touchstart",t,!0),document.addEventListener("touchend",t,!0),document.addEventListener("click",t,!0),document.addEventListener("keydown",t,!0),e}},_obtainHtml5Audio:function(){var e=this||r;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var t=(new Audio).play();return t&&"undefined"!=typeof Promise&&(t instanceof Promise||"function"==typeof t.then)&&t.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(e){var t=this||r;return e._unlocked&&t._html5AudioPool.push(e),t},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&void 0!==e.ctx.suspend&&r.usingWebAudio){for(var t=0;t<e._howls.length;t++)if(e._howls[t]._webAudio){for(var n=0;n<e._howls[t]._sounds.length;n++)if(!e._howls[t]._sounds[n]._paused)return e}return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){if(e.autoSuspend){e._suspendTimer=null,e.state="suspending";var t=function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())};e.ctx.suspend().then(t,t)}},3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&void 0!==e.ctx.resume&&r.usingWebAudio)return"running"===e.state&&"interrupted"!==e.ctx.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state||"running"===e.state&&"interrupted"===e.ctx.state?(e.ctx.resume().then(function(){e.state="running";for(var t=0;t<e._howls.length;t++)e._howls[t]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}},r=new o,(i=function(e){if(!e.src||0===e.src.length)return void console.error("An array of source files must be passed with any new Howl.");this.init(e)}).prototype={init:function(e){var t=this;return r.ctx||c(),t._autoplay=e.autoplay||!1,t._format="string"!=typeof e.format?e.format:[e.format],t._html5=e.html5||!1,t._muted=e.mute||!1,t._loop=e.loop||!1,t._pool=e.pool||5,t._preload="boolean"!=typeof e.preload&&"metadata"!==e.preload||e.preload,t._rate=e.rate||1,t._sprite=e.sprite||{},t._src="string"!=typeof e.src?e.src:[e.src],t._volume=void 0!==e.volume?e.volume:1,t._xhr={method:e.xhr&&e.xhr.method?e.xhr.method:"GET",headers:e.xhr&&e.xhr.headers?e.xhr.headers:null,withCredentials:!(!e.xhr||!e.xhr.withCredentials)&&e.xhr.withCredentials},t._duration=0,t._state="unloaded",t._sounds=[],t._endTimers={},t._queue=[],t._playLock=!1,t._onend=e.onend?[{fn:e.onend}]:[],t._onfade=e.onfade?[{fn:e.onfade}]:[],t._onload=e.onload?[{fn:e.onload}]:[],t._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],t._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],t._onpause=e.onpause?[{fn:e.onpause}]:[],t._onplay=e.onplay?[{fn:e.onplay}]:[],t._onstop=e.onstop?[{fn:e.onstop}]:[],t._onmute=e.onmute?[{fn:e.onmute}]:[],t._onvolume=e.onvolume?[{fn:e.onvolume}]:[],t._onrate=e.onrate?[{fn:e.onrate}]:[],t._onseek=e.onseek?[{fn:e.onseek}]:[],t._onunlock=e.onunlock?[{fn:e.onunlock}]:[],t._onresume=[],t._webAudio=r.usingWebAudio&&!t._html5,void 0!==r.ctx&&r.ctx&&r.autoUnlock&&r._unlockAudio(),r._howls.push(t),t._autoplay&&t._queue.push({event:"play",action:function(){t.play()}}),t._preload&&"none"!==t._preload&&t.load(),t},load:function(){var e,t,n=null;if(r.noAudio)return void this._emit("loaderror",null,"No audio support.");"string"==typeof this._src&&(this._src=[this._src]);for(var o=0;o<this._src.length;o++){if(this._format&&this._format[o])e=this._format[o];else{if("string"!=typeof(t=this._src[o])){this._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}(e=/^data:audio\/([^;,]+);/i.exec(t))||(e=/\.([^.]+)$/.exec(t.split("?",1)[0])),e&&(e=e[1].toLowerCase())}if(e||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),e&&r.codecs(e)){n=this._src[o];break}}return n?(this._src=n,this._state="loading","https:"===window.location.protocol&&"http:"===n.slice(0,5)&&(this._html5=!0,this._webAudio=!1),new a(this),this._webAudio&&s(this),this):void this._emit("loaderror",null,"No codec support for selected audio sources.")},play:function(e,t){var n=this,o=null;if("number"==typeof e)o=e,e=null;else{if("string"==typeof e&&"loaded"===n._state&&!n._sprite[e])return null;if(void 0===e&&(e="__default",!n._playLock)){for(var i=0,a=0;a<n._sounds.length;a++)n._sounds[a]._paused&&!n._sounds[a]._ended&&(i++,o=n._sounds[a]._id);1===i?e=null:o=null}}var u=o?n._soundById(o):n._inactiveSound();if(!u)return null;if(o&&!e&&(e=u._sprite||"__default"),"loaded"!==n._state){u._sprite=e,u._ended=!1;var s=u._id;return n._queue.push({event:"play",action:function(){n.play(s)}}),s}if(o&&!u._paused)return t||n._loadQueue("play"),u._id;n._webAudio&&r._autoResume();var d=Math.max(0,u._seek>0?u._seek:n._sprite[e][0]/1e3),_=Math.max(0,(n._sprite[e][0]+n._sprite[e][1])/1e3-d),l=1e3*_/Math.abs(u._rate),c=n._sprite[e][0]/1e3,f=(n._sprite[e][0]+n._sprite[e][1])/1e3;u._sprite=e,u._ended=!1;var h=function(){u._paused=!1,u._seek=d,u._start=c,u._stop=f,u._loop=!(!u._loop&&!n._sprite[e][2])};if(d>=f)return void n._ended(u);var p=u._node;if(n._webAudio){var m=function(){n._playLock=!1,h(),n._refreshBuffer(u);var e=u._muted||n._muted?0:u._volume;p.gain.setValueAtTime(e,r.ctx.currentTime),u._playStart=r.ctx.currentTime,void 0===p.bufferSource.start?u._loop?p.bufferSource.noteGrainOn(0,d,86400):p.bufferSource.noteGrainOn(0,d,_):u._loop?p.bufferSource.start(0,d,86400):p.bufferSource.start(0,d,_),l!==1/0&&(n._endTimers[u._id]=setTimeout(n._ended.bind(n,u),l)),t||setTimeout(function(){n._emit("play",u._id),n._loadQueue()},0)};"running"===r.state&&"interrupted"!==r.ctx.state?m():(n._playLock=!0,n.once("resume",m),n._clearTimer(u._id))}else{var v=function(){p.currentTime=d,p.muted=u._muted||n._muted||r._muted||p.muted,p.volume=u._volume*r.volume(),p.playbackRate=u._rate;try{var o=p.play();if(o&&"undefined"!=typeof Promise&&(o instanceof Promise||"function"==typeof o.then)?(n._playLock=!0,h(),o.then(function(){n._playLock=!1,p._unlocked=!0,t?n._loadQueue():n._emit("play",u._id)}).catch(function(){n._playLock=!1,n._emit("playerror",u._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),u._ended=!0,u._paused=!0})):t||(n._playLock=!1,h(),n._emit("play",u._id)),p.playbackRate=u._rate,p.paused)return void n._emit("playerror",u._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");"__default"!==e||u._loop?n._endTimers[u._id]=setTimeout(n._ended.bind(n,u),l):(n._endTimers[u._id]=function(){n._ended(u),p.removeEventListener("ended",n._endTimers[u._id],!1)},p.addEventListener("ended",n._endTimers[u._id],!1))}catch(e){n._emit("playerror",u._id,e)}};"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"===p.src&&(p.src=n._src,p.load());var y=window&&window.ejecta||!p.readyState&&r._navigator.isCocoonJS;if(p.readyState>=3||y)v();else{n._playLock=!0,n._state="loading";var g=function(){n._state="loaded",v(),p.removeEventListener(r._canPlayEvent,g,!1)};p.addEventListener(r._canPlayEvent,g,!1),n._clearTimer(u._id)}}return u._id},pause:function(e){var t=this;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"pause",action:function(){t.pause(e)}}),t;for(var n=t._getSoundIds(e),o=0;o<n.length;o++){t._clearTimer(n[o]);var r=t._soundById(n[o]);if(r&&!r._paused&&(r._seek=t.seek(n[o]),r._rateSeek=0,r._paused=!0,t._stopFade(n[o]),r._node)){if(t._webAudio){if(!r._node.bufferSource)continue;void 0===r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),t._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause()}arguments[1]||t._emit("pause",r?r._id:null)}return t},stop:function(e,t){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"stop",action:function(){n.stop(e)}}),n;for(var o=n._getSoundIds(e),r=0;r<o.length;r++){n._clearTimer(o[r]);var i=n._soundById(o[r]);i&&(i._seek=i._start||0,i._rateSeek=0,i._paused=!0,i._ended=!0,n._stopFade(o[r]),i._node&&(n._webAudio?i._node.bufferSource&&(void 0===i._node.bufferSource.stop?i._node.bufferSource.noteOff(0):i._node.bufferSource.stop(0),n._cleanBuffer(i._node)):isNaN(i._node.duration)&&i._node.duration!==1/0||(i._node.currentTime=i._start||0,i._node.pause(),i._node.duration===1/0&&n._clearSound(i._node))),t||n._emit("stop",i._id))}return n},mute:function(e,t){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"mute",action:function(){n.mute(e,t)}}),n;if(void 0===t){if("boolean"!=typeof e)return n._muted;n._muted=e}for(var o=n._getSoundIds(t),i=0;i<o.length;i++){var a=n._soundById(o[i]);a&&(a._muted=e,a._interval&&n._stopFade(a._id),n._webAudio&&a._node?a._node.gain.setValueAtTime(e?0:a._volume,r.ctx.currentTime):a._node&&(a._node.muted=!!r._muted||e),n._emit("mute",a._id))}return n},volume:function(){var e,t,n,o=this,i=arguments;if(0===i.length)return o._volume;if(1===i.length||2===i.length&&void 0===i[1]?o._getSoundIds().indexOf(i[0])>=0?n=parseInt(i[0],10):t=parseFloat(i[0]):i.length>=2&&(t=parseFloat(i[0]),n=parseInt(i[1],10)),!(void 0!==t&&t>=0&&t<=1))return(e=n?o._soundById(n):o._sounds[0])?e._volume:0;if("loaded"!==o._state||o._playLock)return o._queue.push({event:"volume",action:function(){o.volume.apply(o,i)}}),o;void 0===n&&(o._volume=t),n=o._getSoundIds(n);for(var a=0;a<n.length;a++)(e=o._soundById(n[a]))&&(e._volume=t,i[2]||o._stopFade(n[a]),o._webAudio&&e._node&&!e._muted?e._node.gain.setValueAtTime(t,r.ctx.currentTime):e._node&&!e._muted&&(e._node.volume=t*r.volume()),o._emit("volume",e._id));return o},fade:function(e,t,n,o){var i=this;if("loaded"!==i._state||i._playLock)return i._queue.push({event:"fade",action:function(){i.fade(e,t,n,o)}}),i;e=Math.min(Math.max(0,parseFloat(e)),1),t=Math.min(Math.max(0,parseFloat(t)),1),n=parseFloat(n),i.volume(e,o);for(var a=i._getSoundIds(o),u=0;u<a.length;u++){var s=i._soundById(a[u]);if(s){if(o||i._stopFade(a[u]),i._webAudio&&!s._muted){var d=r.ctx.currentTime,_=d+n/1e3;s._volume=e,s._node.gain.setValueAtTime(e,d),s._node.gain.linearRampToValueAtTime(t,_)}i._startFadeInterval(s,e,t,n,a[u],void 0===o)}}return i},_startFadeInterval:function(e,t,n,o,r,i){var a=this,u=t,s=n-t,d=Math.abs(s/.01),_=Date.now();e._fadeTo=n,e._interval=setInterval(function(){var r=(Date.now()-_)/o;_=Date.now(),u+=s*r,u=Math.round(100*u)/100,u=s<0?Math.max(n,u):Math.min(n,u),a._webAudio?e._volume=u:a.volume(u,e._id,!0),i&&(a._volume=u),(n<t&&u<=n||n>t&&u>=n)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,a.volume(n,e._id),a._emit("fade",e._id))},Math.max(4,d>0?o/d:o))},_stopFade:function(e){var t=this._soundById(e);return t&&t._interval&&(this._webAudio&&t._node.gain.cancelScheduledValues(r.ctx.currentTime),clearInterval(t._interval),t._interval=null,this.volume(t._fadeTo,e),t._fadeTo=null,this._emit("fade",e)),this},loop:function(){var e,t,n,o=arguments;if(0===o.length)return this._loop;if(1===o.length){if("boolean"!=typeof o[0])return!!(n=this._soundById(parseInt(o[0],10)))&&n._loop;e=o[0],this._loop=e}else 2===o.length&&(e=o[0],t=parseInt(o[1],10));for(var r=this._getSoundIds(t),i=0;i<r.length;i++)(n=this._soundById(r[i]))&&(n._loop=e,this._webAudio&&n._node&&n._node.bufferSource&&(n._node.bufferSource.loop=e,e&&(n._node.bufferSource.loopStart=n._start||0,n._node.bufferSource.loopEnd=n._stop,this.playing(r[i])&&(this.pause(r[i],!0),this.play(r[i],!0)))));return this},rate:function(){var e,t,n,o=this,i=arguments;if(0===i.length?n=o._sounds[0]._id:1===i.length?o._getSoundIds().indexOf(i[0])>=0?n=parseInt(i[0],10):t=parseFloat(i[0]):2===i.length&&(t=parseFloat(i[0]),n=parseInt(i[1],10)),"number"!=typeof t)return(e=o._soundById(n))?e._rate:o._rate;if("loaded"!==o._state||o._playLock)return o._queue.push({event:"rate",action:function(){o.rate.apply(o,i)}}),o;void 0===n&&(o._rate=t),n=o._getSoundIds(n);for(var a=0;a<n.length;a++)if(e=o._soundById(n[a])){o.playing(n[a])&&(e._rateSeek=o.seek(n[a]),e._playStart=o._webAudio?r.ctx.currentTime:e._playStart),e._rate=t,o._webAudio&&e._node&&e._node.bufferSource?e._node.bufferSource.playbackRate.setValueAtTime(t,r.ctx.currentTime):e._node&&(e._node.playbackRate=t);var u=o.seek(n[a]),s=1e3*((o._sprite[e._sprite][0]+o._sprite[e._sprite][1])/1e3-u)/Math.abs(e._rate);!o._endTimers[n[a]]&&e._paused||(o._clearTimer(n[a]),o._endTimers[n[a]]=setTimeout(o._ended.bind(o,e),s)),o._emit("rate",e._id)}return o},seek:function(){var e,t,n=this,o=arguments;if(0===o.length?n._sounds.length&&(t=n._sounds[0]._id):1===o.length?n._getSoundIds().indexOf(o[0])>=0?t=parseInt(o[0],10):n._sounds.length&&(t=n._sounds[0]._id,e=parseFloat(o[0])):2===o.length&&(e=parseFloat(o[0]),t=parseInt(o[1],10)),void 0===t)return 0;if("number"==typeof e&&("loaded"!==n._state||n._playLock))return n._queue.push({event:"seek",action:function(){n.seek.apply(n,o)}}),n;var i=n._soundById(t);if(i){if(!("number"==typeof e&&e>=0)){if(n._webAudio){var a=n.playing(t)?r.ctx.currentTime-i._playStart:0,u=i._rateSeek?i._rateSeek-i._seek:0;return i._seek+(u+a*Math.abs(i._rate))}return i._node.currentTime}var s=n.playing(t);s&&n.pause(t,!0),i._seek=e,i._ended=!1,n._clearTimer(t),n._webAudio||!i._node||isNaN(i._node.duration)||(i._node.currentTime=e);var d=function(){s&&n.play(t,!0),n._emit("seek",t)};if(s&&!n._webAudio){var _=function(){n._playLock?setTimeout(_,0):d()};setTimeout(_,0)}else d()}return n},playing:function(e){if("number"==typeof e){var t=this._soundById(e);return!!t&&!t._paused}for(var n=0;n<this._sounds.length;n++)if(!this._sounds[n]._paused)return!0;return!1},duration:function(e){var t=this._duration,n=this._soundById(e);return n&&(t=this._sprite[n._sprite][1]/1e3),t},state:function(){return this._state},unload:function(){for(var e=this,t=e._sounds,n=0;n<t.length;n++)t[n]._paused||e.stop(t[n]._id),e._webAudio||(e._clearSound(t[n]._node),t[n]._node.removeEventListener("error",t[n]._errorFn,!1),t[n]._node.removeEventListener(r._canPlayEvent,t[n]._loadFn,!1),t[n]._node.removeEventListener("ended",t[n]._endFn,!1),r._releaseHtml5Audio(t[n]._node)),delete t[n]._node,e._clearTimer(t[n]._id);var o=r._howls.indexOf(e);o>=0&&r._howls.splice(o,1);var i=!0;for(n=0;n<r._howls.length;n++)if(r._howls[n]._src===e._src||e._src.indexOf(r._howls[n]._src)>=0){i=!1;break}return u&&i&&delete u[e._src],r.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,t,n,o){var r=this["_on"+e];return"function"==typeof t&&r.push(o?{id:n,fn:t,once:o}:{id:n,fn:t}),this},off:function(e,t,n){var o=this["_on"+e],r=0;if("number"==typeof t&&(n=t,t=null),t||n)for(r=0;r<o.length;r++){var i=n===o[r].id;if(t===o[r].fn&&i||!t&&i){o.splice(r,1);break}}else if(e)this["_on"+e]=[];else{var a=Object.keys(this);for(r=0;r<a.length;r++)0===a[r].indexOf("_on")&&Array.isArray(this[a[r]])&&(this[a[r]]=[])}return this},once:function(e,t,n){return this.on(e,t,n,1),this},_emit:function(e,t,n){for(var o=this["_on"+e],r=o.length-1;r>=0;r--)o[r].id&&o[r].id!==t&&"load"!==e||(setTimeout((function(e){e.call(this,t,n)}).bind(this,o[r].fn),0),o[r].once&&this.off(e,o[r].fn,o[r].id));return this._loadQueue(e),this},_loadQueue:function(e){if(this._queue.length>0){var t=this._queue[0];t.event===e&&(this._queue.shift(),this._loadQueue()),e||t.action()}return this},_ended:function(e){var t=e._sprite;if(!this._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(this._ended.bind(this,e),100),this;var n=!(!e._loop&&!this._sprite[t][2]);if(this._emit("end",e._id),!this._webAudio&&n&&this.stop(e._id,!0).play(e._id),this._webAudio&&n){this._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=r.ctx.currentTime;var o=1e3*(e._stop-e._start)/Math.abs(e._rate);this._endTimers[e._id]=setTimeout(this._ended.bind(this,e),o)}return this._webAudio&&!n&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,this._clearTimer(e._id),this._cleanBuffer(e._node),r._autoSuspend()),this._webAudio||n||this.stop(e._id,!0),this},_clearTimer:function(e){if(this._endTimers[e]){if("function"!=typeof this._endTimers[e])clearTimeout(this._endTimers[e]);else{var t=this._soundById(e);t&&t._node&&t._node.removeEventListener("ended",this._endTimers[e],!1)}delete this._endTimers[e]}return this},_soundById:function(e){for(var t=0;t<this._sounds.length;t++)if(e===this._sounds[t]._id)return this._sounds[t];return null},_inactiveSound:function(){this._drain();for(var e=0;e<this._sounds.length;e++)if(this._sounds[e]._ended)return this._sounds[e].reset();return new a(this)},_drain:function(){var e=this._pool,t=0,n=0;if(!(this._sounds.length<e)){for(n=0;n<this._sounds.length;n++)this._sounds[n]._ended&&t++;for(n=this._sounds.length-1;n>=0;n--){if(t<=e)return;this._sounds[n]._ended&&(this._webAudio&&this._sounds[n]._node&&this._sounds[n]._node.disconnect(0),this._sounds.splice(n,1),t--)}}},_getSoundIds:function(e){if(void 0===e){for(var t=[],n=0;n<this._sounds.length;n++)t.push(this._sounds[n]._id);return t}return[e]},_refreshBuffer:function(e){return e._node.bufferSource=r.ctx.createBufferSource(),e._node.bufferSource.buffer=u[this._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,r.ctx.currentTime),this},_cleanBuffer:function(e){var t=r._navigator&&r._navigator.vendor.indexOf("Apple")>=0;if(r._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),t))try{e.bufferSource.buffer=r._scratchBuffer}catch(e){}return e.bufferSource=null,this},_clearSound:function(e){/MSIE |Trident\//.test(r._navigator&&r._navigator.userAgent)||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}},(a=function(e){this._parent=e,this.init()}).prototype={init:function(){var e=this._parent;return this._muted=e._muted,this._loop=e._loop,this._volume=e._volume,this._rate=e._rate,this._seek=0,this._paused=!0,this._ended=!0,this._sprite="__default",this._id=++r._counter,e._sounds.push(this),this.create(),this},create:function(){var e=this._parent,t=r._muted||this._muted||this._parent._muted?0:this._volume;return e._webAudio?(this._node=void 0===r.ctx.createGain?r.ctx.createGainNode():r.ctx.createGain(),this._node.gain.setValueAtTime(t,r.ctx.currentTime),this._node.paused=!0,this._node.connect(r.masterGain)):r.noAudio||(this._node=r._obtainHtml5Audio(),this._errorFn=this._errorListener.bind(this),this._node.addEventListener("error",this._errorFn,!1),this._loadFn=this._loadListener.bind(this),this._node.addEventListener(r._canPlayEvent,this._loadFn,!1),this._endFn=this._endListener.bind(this),this._node.addEventListener("ended",this._endFn,!1),this._node.src=e._src,this._node.preload=!0===e._preload?"auto":e._preload,this._node.volume=t*r.volume(),this._node.load()),this},reset:function(){var e=this._parent;return this._muted=e._muted,this._loop=e._loop,this._volume=e._volume,this._rate=e._rate,this._seek=0,this._rateSeek=0,this._paused=!0,this._ended=!0,this._sprite="__default",this._id=++r._counter,this},_errorListener:function(){this._parent._emit("loaderror",this._id,this._node.error?this._node.error.code:0),this._node.removeEventListener("error",this._errorFn,!1)},_loadListener:function(){var e=this._parent;e._duration=Math.ceil(10*this._node.duration)/10,0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue()),this._node.removeEventListener(r._canPlayEvent,this._loadFn,!1)},_endListener:function(){var e=this._parent;e._duration===1/0&&(e._duration=Math.ceil(10*this._node.duration)/10,e._sprite.__default[1]===1/0&&(e._sprite.__default[1]=1e3*e._duration),e._ended(this)),this._node.removeEventListener("ended",this._endFn,!1)}},u={},s=function(e){var t=e._src;if(u[t])return e._duration=u[t].duration,void l(e);if(/^data:[^;]+;base64,/.test(t)){for(var n=atob(t.split(",")[1]),o=new Uint8Array(n.length),r=0;r<n.length;++r)o[r]=n.charCodeAt(r);_(o.buffer,e)}else{var i=new XMLHttpRequest;i.open(e._xhr.method,t,!0),i.withCredentials=e._xhr.withCredentials,i.responseType="arraybuffer",e._xhr.headers&&Object.keys(e._xhr.headers).forEach(function(t){i.setRequestHeader(t,e._xhr.headers[t])}),i.onload=function(){var t=(i.status+"")[0];if("0"!==t&&"2"!==t&&"3"!==t)return void e._emit("loaderror",null,"Failed loading audio file with status: "+i.status+".");_(i.response,e)},i.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete u[t],e.load())},d(i)}},d=function(e){try{e.send()}catch(t){e.onerror()}},_=function(e,t){var n=function(){t._emit("loaderror",null,"Decoding audio data failed.")},o=function(e){e&&t._sounds.length>0?(u[t._src]=e,l(t,e)):n()};"undefined"!=typeof Promise&&1===r.ctx.decodeAudioData.length?r.ctx.decodeAudioData(e).then(o).catch(n):r.ctx.decodeAudioData(e,o,n)},l=function(e,t){t&&!e._duration&&(e._duration=t.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},c=function(){if(r.usingWebAudio){try{"undefined"!=typeof AudioContext?r.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?r.ctx=new webkitAudioContext:r.usingWebAudio=!1}catch(e){r.usingWebAudio=!1}r.ctx||(r.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(r._navigator&&r._navigator.platform),t=r._navigator&&r._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),n=t?parseInt(t[1],10):null;if(e&&n&&n<9){var o=/safari/.test(r._navigator&&r._navigator.userAgent.toLowerCase());r._navigator&&!o&&(r.usingWebAudio=!1)}r.usingWebAudio&&(r.masterGain=void 0===r.ctx.createGain?r.ctx.createGainNode():r.ctx.createGain(),r.masterGain.gain.setValueAtTime(r._muted?0:r._volume,r.ctx.currentTime),r.masterGain.connect(r.ctx.destination)),r._setup()}},"function"==typeof define&&define.amd&&define([],function(){return{Howler:r,Howl:i}}),"undefined"!=typeof exports&&(exports.Howler=r,exports.Howl=i),"undefined"!=typeof global?(global.HowlerGlobal=o,global.Howler=r,global.Howl=i,global.Sound=a):(window.HowlerGlobal=o,window.Howler=r,window.Howl=i,window.Sound=a)}}]);