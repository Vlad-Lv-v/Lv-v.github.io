!function(ae){ae.fn.fullpage=function(g){g=ae.extend({menu:!1,anchors:[],navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,easing:"easeInQuart",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},g),function(){g.continuousVertical&&(g.loopTop||g.loopBottom)&&(g.continuousVertical=!1,le("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));g.continuousVertical&&g.scrollBar&&(g.continuousVertical=!1,le("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));ae.each(g.anchors,function(e,n){(ae("#"+n).length||ae('[name="'+n+'"]').length)&&le("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})}(),ae.extend(ae.easing,{easeInQuart:function(e,n,o,t,i){return t*(n/=i)*n*n*n+o}});var n=600;ae.fn.fullpage.setAutoScrolling=function(e,n){ie("autoScrolling",e,n);var o=ae(".fp-section.active");g.autoScrolling&&!g.scrollBar?(ae("html, body").css({overflow:"hidden",height:"100%"}),ae.fn.fullpage.setRecordHistory(g.recordHistory,"internal"),s.css({"-ms-touch-action":"none","touch-action":"none"}),o.length&&oe(o.position().top)):(ae("html, body").css({overflow:"visible",height:"initial"}),ae.fn.fullpage.setRecordHistory(!1,"internal"),s.css({"-ms-touch-action":"","touch-action":""}),oe(0),ae("html, body").scrollTop(o.position().top))},ae.fn.fullpage.setRecordHistory=function(e,n){ie("recordHistory",e,n)},ae.fn.fullpage.setScrollingSpeed=function(e,n){ie("scrollingSpeed",e,n)},ae.fn.fullpage.setMouseWheelScrolling=function(e){e?document.addEventListener?(document.addEventListener("mousewheel",E,!1),document.addEventListener("wheel",E,!1)):document.attachEvent("onmousewheel",E):document.addEventListener?(document.removeEventListener("mousewheel",E,!1),document.removeEventListener("wheel",E,!1)):document.detachEvent("onmousewheel",E)},ae.fn.fullpage.setAllowScrolling=function(o,e){void 0!==e?(e=e.replace(" ","").split(","),ae.each(e,function(e,n){!function(e,n){switch(n){case"up":f.up=e;break;case"down":f.down=e;break;case"left":f.left=e;break;case"right":f.right=e;break;case"all":ae.fn.fullpage.setAllowScrolling(e)}}(o,n)})):o?(ae.fn.fullpage.setMouseWheelScrolling(!0),function(){if(t||a){var e=_();ae(document).off("touchstart "+e.down).on("touchstart "+e.down,L),ae(document).off("touchmove "+e.move).on("touchmove "+e.move,B)}}()):(ae.fn.fullpage.setMouseWheelScrolling(!1),function(){if(t||a){var e=_();ae(document).off("touchstart "+e.down),ae(document).off("touchmove "+e.move)}}())},ae.fn.fullpage.setKeyboardScrolling=function(e){g.keyboardScrolling=e},ae.fn.fullpage.moveSectionUp=function(){var e=ae(".fp-section.active").prev(".fp-section");e.length||!g.loopTop&&!g.continuousVertical||(e=ae(".fp-section").last()),e.length&&z(e,null,!0)},ae.fn.fullpage.moveSectionDown=function(){var e=ae(".fp-section.active").next(".fp-section");e.length||!g.loopBottom&&!g.continuousVertical||(e=ae(".fp-section").first()),e.length&&z(e,null,!1)},ae.fn.fullpage.moveTo=function(e,n){var o="";o=isNaN(e)?ae('[data-anchor="'+e+'"]'):ae(".fp-section").eq(e-1),void 0!==n?K(e,n):0<o.length&&z(o)},ae.fn.fullpage.moveSlideRight=function(){e("next")},ae.fn.fullpage.moveSlideLeft=function(){e("prev")};var p,l,i,u,v,m=!(ae.fn.fullpage.reBuild=function(e){w=!0;var n=ae(window).width();r=ae(window).height(),g.resize&&function(e,n){if(e<825||n<900){var o=100*e/825,t=100*n/900,i=Math.min(o,t).toFixed(2);ae("body").css("font-size",i+"%")}else ae("body").css("font-size","100%")}(r,n),ae(".fp-section").each(function(){var e=ae(this).find(".fp-slides"),n=ae(this).find(".fp-slide");g.verticalCentered&&ae(this).find(".fp-tableCell").css("height",Q(ae(this))+"px"),ae(this).css("height",r+"px"),g.scrollOverflow&&(n.length?n.each(function(){O(ae(this))}):O(ae(this))),n.length&&N(e,e.find(".fp-slide.active"))});var o=ae(".fp-section.active");o.index(".fp-section")&&z(o),w=!1,ae.isFunction(g.afterResize)&&e&&g.afterResize.call(s),ae.isFunction(g.afterReBuild)&&!e&&g.afterReBuild.call(s)}),t=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/),a="ontouchstart"in window||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,s=ae(this),r=ae(window).height(),h=!1,w=!1,c="fullpage-wrapper",f={up:!0,down:!0,left:!0,right:!0},d=ae.extend(!0,{},g);function S(){ae(".fp-section").each(function(){var e=ae(this).find(".fp-slide");e.length?e.each(function(){O(ae(this))}):O(ae(this))}),ae.isFunction(g.afterRender)&&g.afterRender.call(this)}ae.fn.fullpage.setAllowScrolling(!0),g.css3&&(g.css3=function(){var e,n=document.createElement("p"),o={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var t in document.body.insertBefore(n,null),o)void 0!==n.style[t]&&(n.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(n).getPropertyValue(o[t]));return document.body.removeChild(n),void 0!==e&&0<e.length&&"none"!==e}()),ae(this).length?(s.css({height:"100%",position:"relative"}),s.addClass(c)):le("error","Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();"),ae(g.sectionSelector).each(function(){ae(this).addClass("fp-section")}),ae(g.slideSelector).each(function(){ae(this).addClass("fp-slide")}),g.navigation&&function(){ae("body").append('<div id="fp-nav"><ul></ul></div>'),(i=ae("#fp-nav")).css("color",g.navigationColor),i.addClass(g.navigationPosition);for(var e=0;e<ae(".fp-section").length;e++){var n="";g.anchors.length&&(n=g.anchors[e]);var o='<li><a href="#'+n+'"><span></span></a>',t=g.navigationTooltips[e];void 0!==t&&""!=t&&(o+='<div class="fp-tooltip '+g.navigationPosition+'">'+t+"</div>"),o+="</li>",i.find("ul").append(o)}}(),ae(".fp-section").each(function(e){var n=ae(this),o=ae(this).find(".fp-slide"),t=o.length;if(e||0!==ae(".fp-section.active").length||ae(this).addClass("active"),ae(this).css("height",r+"px"),(g.paddingTop||g.paddingBottom)&&ae(this).css("padding",g.paddingTop+" 0 "+g.paddingBottom+" 0"),void 0!==g.sectionsColor[e]&&ae(this).css("background-color",g.sectionsColor[e]),void 0!==g.anchors[e]&&ae(this).attr("data-anchor",g.anchors[e]),1<t){var i=100*t,l=100/t;o.wrapAll('<div class="fp-slidesContainer" />'),o.parent().wrap('<div class="fp-slides" />'),ae(this).find(".fp-slidesContainer").css("width",i+"%"),g.controlArrows&&function(e){e.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'),"#fff"!=g.controlArrowColor&&(e.find(".fp-controlArrow.fp-next").css("border-color","transparent transparent transparent "+g.controlArrowColor),e.find(".fp-controlArrow.fp-prev").css("border-color","transparent "+g.controlArrowColor+" transparent transparent"));g.loopHorizontal||e.find(".fp-controlArrow.fp-prev").hide()}(ae(this)),g.slidesNavigation&&function(e,n){e.append('<div class="fp-slidesNav"><ul></ul></div>');var o=e.find(".fp-slidesNav");o.addClass(g.slidesNavPosition);for(var t=0;t<n;t++)o.find("ul").append('<li><a href="#"><span></span></a></li>');o.css("margin-left","-"+o.width()/2+"px"),o.find("li").first().find("a").addClass("active")}(ae(this),t),o.each(function(e){ae(this).css("width",l+"%"),g.verticalCentered&&X(ae(this))});var a=n.find(".fp-slide.active");a.length?ne(a):o.eq(0).addClass("active")}else g.verticalCentered&&X(ae(this))}).promise().done(function(){ae.fn.fullpage.setAutoScrolling(g.autoScrolling,"internal");var e=ae(".fp-section.active").find(".fp-slide.active");e.length&&(0!==ae(".fp-section.active").index(".fp-section")||0===ae(".fp-section.active").index(".fp-section")&&0!==e.index())&&ne(e),g.fixedElements&&g.css3&&ae(g.fixedElements).appendTo("body"),g.navigation&&(i.css("margin-top","-"+i.height()/2+"px"),i.find("li").eq(ae(".fp-section.active").index(".fp-section")).find("a").addClass("active")),g.menu&&g.css3&&ae(g.menu).closest(".fullpage-wrapper").length&&ae(g.menu).appendTo("body"),g.scrollOverflow?("complete"===document.readyState&&S(),ae(window).on("load",S)):ae.isFunction(g.afterRender)&&g.afterRender.call(s),V();var n=window.location.hash.replace("#","").split("/")[0];if(n.length){var o=ae('[data-anchor="'+n+'"]');!g.animateAnchor&&o.length&&(g.autoScrolling?oe(o.position().top):(oe(0),Z(n),ae("html, body").scrollTop(o.position().top)),U(n,null),ae.isFunction(g.afterLoad)&&g.afterLoad.call(o,n,o.index(".fp-section")+1),o.addClass("active").siblings().removeClass("active"))}ae(window).on("load",function(){!function(){var e=window.location.hash.replace("#","").split("/"),n=e[0],o=e[1];n&&K(n,o)}()})});var b=!1;function o(){var e;if(!g.autoScrolling||g.scrollBar){var o=ae(window).scrollTop(),t=0,i=Math.abs(o-ae(".fp-section").first().offset().top);ae(".fp-section").each(function(e){var n=Math.abs(o-ae(this).offset().top);n<i&&(t=e,i=n)}),e=ae(".fp-section").eq(t)}if((!g.autoScrolling||g.scrollBar)&&!e.hasClass("active")){b=!0;var n=ae(".fp-section.active"),l=n.index(".fp-section")+1,a=W(e),s=e.data("anchor"),r=e.index(".fp-section")+1,c=e.find(".fp-slide.active");if(c.length)var f=c.data("anchor"),d=c.index();e.addClass("active").siblings().removeClass("active"),h||(ae.isFunction(g.onLeave)&&g.onLeave.call(n,l,r,a),ae.isFunction(g.afterLoad)&&g.afterLoad.call(e,s,r)),U(s,0),g.anchors.length&&!h&&G(d,f,p=s,r),clearTimeout(u),u=setTimeout(function(){b=!1},100)}g.scrollBar&&(clearTimeout(v),v=setTimeout(function(){h||(ae(".fp-section.active").is(e)&&(w=!0),z(e),w=!1)},1e3))}function x(e){return e.find(".fp-slides").length?e.find(".fp-slide.active").find(".fp-scrollable"):e.find(".fp-scrollable")}function C(e,n){var o,t;if(f[e])if(t="down"==e?(o="bottom",ae.fn.fullpage.moveSectionDown):(o="top",ae.fn.fullpage.moveSectionUp),0<n.length){if(!function(e,n){{if("top"===e)return!n.scrollTop();if("bottom"===e)return n.scrollTop()+1+n.innerHeight()>=n[0].scrollHeight}}(o,n))return!0;t()}else t()}ae(window).on("scroll",o);var y=0,T=0,A=0,k=0;function B(e){var n=e.originalEvent;if(!function e(n,o){o=o||0;var t=ae(n).parent();return!!(o<g.normalScrollElementTouchThreshold&&t.is(g.normalScrollElements))||o!=g.normalScrollElementTouchThreshold&&e(t,++o)}(e.target)){g.autoScrolling&&e.preventDefault();var o=ae(".fp-section.active"),t=x(o);if(!h&&!m){var i=ee(n);A=i.y,k=i.x,o.find(".fp-slides").length&&Math.abs(T-k)>Math.abs(y-A)?Math.abs(T-k)>ae(window).width()/100*g.touchSensitivity&&(k<T?f.right&&ae.fn.fullpage.moveSlideRight():f.left&&ae.fn.fullpage.moveSlideLeft()):g.autoScrolling&&Math.abs(y-A)>ae(window).height()/100*g.touchSensitivity&&(A<y?C("down",t):y<A&&C("up",t))}}}function L(e){var n=e.originalEvent;g.scrollBar&&ae("html,body").stop();var o=ee(n);y=o.y,T=o.x}function E(e){if(g.autoScrolling){e=window.event||e;var n=Math.max(-1,Math.min(1,e.wheelDelta||-e.deltaY||-e.detail));g.scrollBar&&(e.preventDefault?e.preventDefault():e.returnValue=!1);var o=x(ae(".fp-section.active"));return h||C(n<0?"down":"up",o),!1}g.scrollBar&&ae("html,body").stop()}function e(e){var n=ae(".fp-section.active").find(".fp-slides");if(n.length&&!m){var o=n.find(".fp-slide.active"),t=null;if(!(t="prev"===e?o.prev(".fp-slide"):o.next(".fp-slide")).length){if(!g.loopHorizontal)return;t="prev"===e?o.siblings(":last"):o.siblings(":first")}m=!0,N(n,t)}}function M(){ae(".fp-slide.active").each(function(){ne(ae(this))})}function z(e,n,o){var t=e.position();if(void 0!==t){var i={element:e,callback:n,isMovementUp:o,dest:t,dtop:t.top,yMovement:W(e),anchorLink:e.data("anchor"),sectionIndex:e.index(".fp-section"),activeSlide:e.find(".fp-slide.active"),activeSection:ae(".fp-section.active"),leavingSection:ae(".fp-section.active").index(".fp-section")+1,localIsResizing:w};if(!(i.activeSection.is(e)&&!w||g.scrollBar&&ae(window).scrollTop()===i.dtop)){if(i.activeSlide.length)var l=i.activeSlide.data("anchor"),a=i.activeSlide.index();g.autoScrolling&&g.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&(i=function(e){e.isMovementUp?ae(".fp-section.active").before(e.activeSection.nextAll(".fp-section")):ae(".fp-section.active").after(e.activeSection.prevAll(".fp-section").get().reverse());return oe(ae(".fp-section.active").position().top),M(),e.wrapAroundElements=e.activeSection,e.dest=e.element.position(),e.dtop=e.dest.top,e.yMovement=W(e.element),e}(i)),e.addClass("active").siblings().removeClass("active"),h=!0,G(a,l,i.anchorLink,i.sectionIndex),ae.isFunction(g.onLeave)&&!i.localIsResizing&&g.onLeave.call(i.activeSection,i.leavingSection,i.sectionIndex+1,i.yMovement),function(e){if(g.css3&&g.autoScrolling&&!g.scrollBar){j("translate3d(0px, -"+e.dtop+"px, 0px)",!0),setTimeout(function(){R(e)},g.scrollingSpeed)}else{var n=function(e){var n={};g.autoScrolling&&!g.scrollBar?(n.options={top:-e.dtop},n.element="."+c):(n.options={scrollTop:e.dtop},n.element="html, body");return n}(e);ae(n.element).animate(n.options,g.scrollingSpeed,g.easing).promise().done(function(){R(e)})}}(i),p=i.anchorLink,g.autoScrolling&&U(i.anchorLink,i.sectionIndex)}}}function R(e){!function(e){e.wrapAroundElements&&e.wrapAroundElements.length&&(e.isMovementUp?ae(".fp-section:first").before(e.wrapAroundElements):ae(".fp-section:last").after(e.wrapAroundElements),oe(ae(".fp-section.active").position().top),M())}(e),ae.isFunction(g.afterLoad)&&!e.localIsResizing&&g.afterLoad.call(e.element,e.anchorLink,e.sectionIndex+1),setTimeout(function(){h=!1,ae.isFunction(e.callback)&&e.callback.call(this)},n)}function I(){if(!b){var e=window.location.hash.replace("#","").split("/"),n=e[0],o=e[1];if(n.length)(n&&n!==p&&!(void 0===p)||void 0===p&&void 0===o&&!m||!m&&l!=o)&&K(n,o)}}function N(e,n){var o=n.position(),t=e.find(".fp-slidesContainer").parent(),i=n.index(),l=e.closest(".fp-section"),a=l.index(".fp-section"),s=l.data("anchor"),r=l.find(".fp-slidesNav"),c=n.data("anchor"),f=w;if(g.onSlideLeave){var d=l.find(".fp-slide.active"),p=d.index(),u=function(e,n){if(e==n)return"none";if(n<e)return"left";return"right"}(p,i);f||"none"===u||ae.isFunction(g.onSlideLeave)&&g.onSlideLeave.call(d,s,a+1,p,u)}n.addClass("active").siblings().removeClass("active"),void 0===c&&(c=i),!g.loopHorizontal&&g.controlArrows&&(l.find(".fp-controlArrow.fp-prev").toggle(0!=i),l.find(".fp-controlArrow.fp-next").toggle(!n.is(":last-child"))),l.hasClass("active")&&G(i,c,s,a);function v(){f||ae.isFunction(g.afterSlideLoad)&&g.afterSlideLoad.call(n,s,a+1,c,i),m=!1}if(g.css3){var h="translate3d(-"+o.left+"px, 0px, 0px)";D(e.find(".fp-slidesContainer"),g.scrollingSpeed).css(te(h)),setTimeout(function(){v()},g.scrollingSpeed,g.easing)}else t.animate({scrollLeft:o.left},g.scrollingSpeed,g.easing,function(){v()});r.find(".active").removeClass("active"),r.find("li").eq(i).find("a").addClass("active")}ae(window).on("hashchange",I),ae(document).keydown(function(e){if(g.keyboardScrolling&&g.autoScrolling&&(40!=e.which&&38!=e.which||e.preventDefault(),!h))switch(e.which){case 38:case 33:ae.fn.fullpage.moveSectionUp();break;case 40:case 34:ae.fn.fullpage.moveSectionDown();break;case 36:ae.fn.fullpage.moveTo(1);break;case 35:ae.fn.fullpage.moveTo(ae(".fp-section").length);break;case 37:ae.fn.fullpage.moveSlideLeft();break;case 39:ae.fn.fullpage.moveSlideRight();break;default:return}}),ae(document).on("click touchstart","#fp-nav a",function(e){e.preventDefault();var n=ae(this).parent().index();z(ae(".fp-section").eq(n))}),ae(document).on("click touchstart",".fp-slidesNav a",function(e){e.preventDefault();var n=ae(this).closest(".fp-section").find(".fp-slides"),o=n.find(".fp-slide").eq(ae(this).closest("li").index());N(n,o)}),g.normalScrollElements&&(ae(document).on("mouseenter",g.normalScrollElements,function(){ae.fn.fullpage.setMouseWheelScrolling(!1)}),ae(document).on("mouseleave",g.normalScrollElements,function(){ae.fn.fullpage.setMouseWheelScrolling(!0)})),ae(".fp-section").on("click touchstart",".fp-controlArrow",function(){ae(this).hasClass("fp-prev")?ae.fn.fullpage.moveSlideLeft():ae.fn.fullpage.moveSlideRight()}),ae(window).resize(F);var P,H=r;function F(){if(V(),t){if("text"!==ae(document.activeElement).attr("type")){var e=ae(window).height();Math.abs(e-H)>20*Math.max(H,e)/100&&(ae.fn.fullpage.reBuild(!0),H=e)}}else clearTimeout(P),P=setTimeout(function(){ae.fn.fullpage.reBuild(!0)},500)}function V(){if(g.responsive){var e=s.hasClass("fp-responsive");ae(window).width()<g.responsive?e||(ae.fn.fullpage.setAutoScrolling(!1,"internal"),ae("#fp-nav").hide(),s.addClass("fp-responsive")):e&&(ae.fn.fullpage.setAutoScrolling(d.autoScrolling,"internal"),ae("#fp-nav").show(),s.removeClass("fp-responsive"))}}function D(e){var n="all "+g.scrollingSpeed+"ms "+g.easingcss3;return e.removeClass("fp-notransition"),e.css({"-webkit-transition":n,transition:n})}function q(e){return e.addClass("fp-notransition")}function U(e,n){!function(e){g.menu&&(ae(g.menu).find(".active").removeClass("active"),ae(g.menu).find('[data-menuanchor="'+e+'"]').addClass("active"))}(e),function(e,n){g.navigation&&(ae("#fp-nav").find(".active").removeClass("active"),e?ae("#fp-nav").find('a[href="#'+e+'"]').addClass("active"):ae("#fp-nav").find("li").eq(n).find("a").addClass("active"))}(e,n)}function W(e){var n=ae(".fp-section.active").index(".fp-section"),o=e.index(".fp-section");return n==o?"none":o<n?"up":"down"}function O(e){e.css("overflow","hidden");var n,o=e.closest(".fp-section"),t=e.find(".fp-scrollable");t.length?n=t.get(0).scrollHeight:(n=e.get(0).scrollHeight,g.verticalCentered&&(n=e.find(".fp-tableCell").get(0).scrollHeight));var i=r-parseInt(o.css("padding-bottom"))-parseInt(o.css("padding-top"));i<n?t.length?t.css("height",i+"px").parent().css("height",i+"px"):(g.verticalCentered?e.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />'):e.wrapInner('<div class="fp-scrollable" />'),e.find(".fp-scrollable").slimScroll({allowPageScroll:!0,height:i+"px",size:"10px",alwaysVisible:!0})):Y(e),e.css("overflow","")}function Y(e){e.find(".fp-scrollable").children().first().unwrap().unwrap(),e.find(".slimScrollBar").remove(),e.find(".slimScrollRail").remove()}function X(e){e.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:'+Q(e)+'px;" />')}function Q(e){var n=r;if(g.paddingTop||g.paddingBottom){var o=e;o.hasClass("fp-section")||(o=e.closest(".fp-section"));var t=parseInt(o.css("padding-top"))+parseInt(o.css("padding-bottom"));n=r-t}return n}function j(e,n){n?D(s):q(s),s.css(te(e)),setTimeout(function(){s.removeClass("fp-notransition")},10)}function K(e,n){var o;void 0===n&&(n=0),o=isNaN(e)?ae('[data-anchor="'+e+'"]'):ae(".fp-section").eq(e-1),e===p||o.hasClass("active")?$(o,n):z(o,function(){$(o,n)})}function $(e,n){if(void 0!==n){var o=e.find(".fp-slides"),t=o.find('[data-anchor="'+n+'"]');t.length||(t=o.find(".fp-slide").eq(n)),t.length&&N(o,t)}}function G(e,n,o,t){var i="";g.anchors.length?(e?(void 0!==o&&(i=o),void 0===n&&(n=e),J(i+"/"+(l=n))):(void 0!==e&&(l=n),J(o)),Z(location.hash)):Z(void 0!==e?t+"-"+e:String(t))}function J(e){if(g.recordHistory)location.hash=e;else if(t||a)history.replaceState(void 0,void 0,"#"+e);else{var n=window.location.href.split("#")[0];window.location.replace(n+"#"+e)}}function Z(e){e=e.replace("/","-").replace("#",""),ae("body")[0].className=ae("body")[0].className.replace(/\b\s?fp-viewing-[^\s]+\b/g,""),ae("body").addClass("fp-viewing-"+e)}function _(){return window.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function ee(e){var n=[];return n.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,n}function ne(e){ae.fn.fullpage.setScrollingSpeed(0,"internal"),N(e.closest(".fp-slides"),e),ae.fn.fullpage.setScrollingSpeed(d.scrollingSpeed,"internal")}function oe(e){if(g.scrollBar)s.scrollTop(e);else if(g.css3){j("translate3d(0px, -"+e+"px, 0px)",!1)}else s.css("top",-e)}function te(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function ie(e,n,o){g[e]=n,"internal"!==o&&(d[e]=n)}function le(e,n){console&&console[e]&&console[e]("fullPage: "+n)}ae.fn.fullpage.destroy=function(e){ae.fn.fullpage.setAutoScrolling(!1,"internal"),ae.fn.fullpage.setAllowScrolling(!1),ae.fn.fullpage.setKeyboardScrolling(!1),ae(window).off("scroll",o).off("hashchange",I).off("resize",F),ae(document).off("click","#fp-nav a").off("mouseenter","#fp-nav li").off("mouseleave","#fp-nav li").off("click",".fp-slidesNav a").off("mouseover",g.normalScrollElements).off("mouseout",g.normalScrollElements),ae(".fp-section").off("click",".fp-controlArrow"),e&&(oe(0),ae("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove(),ae(".fp-section").css({height:"","background-color":"",padding:""}),ae(".fp-slide").css({width:""}),s.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),ae(".fp-section, .fp-slide").each(function(){Y(ae(this)),ae(this).removeClass("fp-table active")}),q(s),q(s.find(".fp-easing")),s.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function(){ae(this).replaceWith(this.childNodes)}),ae("html, body").scrollTop(0))}}}(jQuery);