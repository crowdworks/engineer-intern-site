!function(t){var e={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",responsiveWidth:!1},n=t(window),i=t(document),o=[],r=n.height(),s=function(){for(var e=n.scrollTop(),s=i.height(),a=s-r,l=e>a?a-e:0,c=0;c<o.length;c++){var u=o[c],h=u.stickyWrapper.offset().top,p=h-u.topSpacing-l;if(p>=e)null!==u.currentTop&&(u.stickyElement.css("position","").css("top",""),u.stickyElement.trigger("sticky-end",[u]).parent().removeClass(u.className),u.currentTop=null);else{var d=s-u.stickyElement.outerHeight()-u.topSpacing-u.bottomSpacing-e-l;0>d?d+=u.topSpacing:d=u.topSpacing,u.currentTop!=d&&(u.stickyElement.css("position","fixed").css("top",d),"undefined"!=typeof u.getWidthFrom&&u.stickyElement.css("width",t(u.getWidthFrom).width()),u.stickyElement.trigger("sticky-start",[u]).parent().addClass(u.className),u.currentTop=d)}}},a=function(){r=n.height();for(var e=0;e<o.length;e++){var i=o[e];"undefined"!=typeof i.getWidthFrom&&i.responsiveWidth===!0&&i.stickyElement.css("width",t(i.getWidthFrom).width())}},l={init:function(n){var i=t.extend({},e,n);return this.each(function(){var n=t(this),r=n.attr("id"),s=(r?r+"-"+e.wrapperClassName:e.wrapperClassName,t("<div></div>").attr("id",r+"-sticky-wrapper").addClass(i.wrapperClassName));n.wrapAll(s),i.center&&n.parent().css({width:n.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"==n.css("float")&&n.css({"float":"none"}).parent().css({"float":"right"});var a=n.parent();a.css("height",n.outerHeight()),o.push({topSpacing:i.topSpacing,bottomSpacing:i.bottomSpacing,stickyElement:n,currentTop:null,stickyWrapper:a,className:i.className,getWidthFrom:i.getWidthFrom,responsiveWidth:i.responsiveWidth})})},update:s,unstick:function(){return this.each(function(){for(var e=t(this),n=-1,i=0;i<o.length;i++)o[i].stickyElement.get(0)==e.get(0)&&(n=i);-1!=n&&(o.splice(n,1),e.unwrap(),e.removeAttr("style"))})}};window.addEventListener?(window.addEventListener("scroll",s,!1),window.addEventListener("resize",a,!1)):window.attachEvent&&(window.attachEvent("onscroll",s),window.attachEvent("onresize",a)),t.fn.sticky=function(e){return l[e]?l[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.sticky"):l.init.apply(this,arguments)},t.fn.unstick=function(e){return l[e]?l[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.sticky"):l.unstick.apply(this,arguments)},t(function(){setTimeout(s,0)})}(jQuery),function(t,e,n){var i,o=t.getElementsByTagName(e)[0];t.getElementById(n)||(i=t.createElement(e),i.id=n,i.async=!0,i.src="//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.0",o.parentNode.insertBefore(i,o))}(document,"script","facebook-jssdk"),window.twttr=function(t,e,n){var i,o=t.getElementsByTagName(e)[0],r=window.twttr||{};if(!t.getElementById(n))return i=t.createElement(e),i.id=n,i.async=!0,i.src="https://platform.twitter.com/widgets.js",o.parentNode.insertBefore(i,o),r._e=[],r.ready=function(t){r._e.push(t)},r}(document,"script","twitter-wjs"),function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://apis.google.com/js/plusone.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}(),function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://b.st-hatena.com/js/bookmark_button.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}(),!function(t,e){if(!t.getElementById(e)){var n=t.createElement("script");n.id=e,n.async=!0,n.src="https://widgets.getpocket.com/v1/j/btn.js?v=1";{t.getElementById(e)}t.body.appendChild(n)}}(document,"pocket-btn-js"),function(){var t,e,n,i,o,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,i){var o;return null==e&&(e=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(o=document.createEvent("CustomEvent"),o.initCustomEvent(t,e,n,i)):null!=document.createEventObject?(o=document.createEventObject(),o.eventType=t):o.eventName=t,o},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,o,r;for(r=this.keys,e=i=0,o=r.length;o>i;e=++i)if(n=r[e],n===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,o,r,s;for(s=this.keys,n=o=0,r=s.length;r>o;n=++o)if(i=s[n],i===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),i=this.getComputedStyle||function(t){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),o.test(e)&&e.replace(o,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function o(t){null==t&&(t={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return o.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},o.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var e,n,i,o;if(this.stopped=!1,this.boxes=function(){var t,n,i,o;for(i=this.element.querySelectorAll("."+this.config.boxClass),o=[],t=0,n=i.length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.all=function(){var t,n,i,o;for(i=this.boxes,o=[],t=0,n=i.length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(o=this.boxes,n=0,i=o.length;i>n;n++)e=o[n],this.applyStyle(e,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new t(function(t){return function(e){var n,i,o,r,s;for(s=[],n=0,i=e.length;i>n;n++)r=e[n],s.push(function(){var t,e,n,i;for(n=r.addedNodes||[],i=[],t=0,e=n.length;e>t;t++)o=n[t],i.push(this.doSync(o));return i}.call(t));return s}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},o.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},o.prototype.sync=function(){return t.notSupported?this.doSync(this.element):void 0},o.prototype.doSync=function(t){var e,n,i,o,r;if(null==t&&(t=this.element),1===t.nodeType){for(t=t.parentNode||t,o=t.querySelectorAll("."+this.config.boxClass),r=[],n=0,i=o.length;i>n;n++)e=o[n],s.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},o.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},o.prototype.applyStyle=function(t,e){var n,i,o;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate(function(r){return function(){return r.customStyle(t,e,i,n,o)}}(this))},o.prototype.animate=function(){return"requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()}}(),o.prototype.resetStyle=function(){var t,e,n,i,o;for(i=this.boxes,o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(t.style.visibility="visible");return o},o.prototype.resetAnimation=function(t){var e;return t.type.toLowerCase().indexOf("animationend")>=0?(e=t.target||t.srcElement,e.className=e.className.replace(config.animateClass,"").trim()):void 0},o.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(t,e){var n,i,o,r;i=[];for(n in e)o=e[n],t[""+n]=o,i.push(function(){var e,i,s,a;for(s=this.vendors,a=[],e=0,i=s.length;i>e;e++)r=s[e],a.push(t[""+r+n.charAt(0).toUpperCase()+n.substr(1)]=o);return a}.call(this));return i},o.prototype.vendorCSS=function(t,e){var n,o,r,s,a,l;for(a=i(t),s=a.getPropertyCSSValue(e),r=this.vendors,n=0,o=r.length;o>n;n++)l=r[n],s=s||a.getPropertyCSSValue("-"+l+"-"+e);return s},o.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},o.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},o.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,n,i,o;for(i=this.boxes,o=[],e=0,n=i.length;n>e;e++)t=i[e],t&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},o.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},o.prototype.isVisible=function(t){var e,n,i,o,r;return n=t.getAttribute("data-wow-offset")||this.config.offset,r=window.pageYOffset,o=r+Math.min(this.element.clientHeight,this.util().innerHeight())-n,i=this.offsetTop(t),e=i+t.clientHeight,o>=i&&e>=r},o.prototype.util=function(){return null!=this._util?this._util:this._util=new e},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o}()}.call(this),function(){var t;new WOW({}).init(),$("#navigation").sticky({topSpacing:0}),t=function(t,e){return null==e&&(e=700),$("body, html").animate({scrollTop:t},e)},$("#navigation .navbar-brand").click(function(e){return e.preventDefault(),t(0,1e3)}),$("#menu .navbar-nav li > a").click(function(e){var n,i;return e.preventDefault(),n=$(this).attr("href"),i=$(n).offset().top,t(i)}),$("#introduction-texts").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,swipe:!1,asNavFor:"#introduction-photos"}),$("#introduction-photos").slick({centerMode:!0,centerPadding:"10px",slidesToShow:3,focusOnSelect:!0,asNavFor:"#introduction-texts",responsive:[{breakpoint:1e3,settings:{arrows:!0,centerMode:!0,centerPadding:"5px",slidesToShow:1}}]}),$("img.lazy").lazyload({effect:"fadeIn"})}.call(this);