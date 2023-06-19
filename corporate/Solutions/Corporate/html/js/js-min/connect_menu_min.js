function sendMenuState(e,g,b,a,i,c,h){if(this["beforeMenuSubmit"]&&!beforeMenuSubmit(e,g,b)){return}if(i&&!doFieldValidation(g,null,c,getFormElems(b),true,b,h)){return}if(b==null){b=""}var d=getForm(b);if(d!=null&&d.MODE!=null){d.MODE.value=g}setMenuState(b,e,a);d.action=getVariable(b,"act");d.submit()}function setMenuState(d,h,c){var g=getForm(d);if(g!=null){var e=g.elements[c+"MENUSTATE"];if(e==null){e=document.createElement("input");e.setAttribute("name",c+"MENUSTATE");e.setAttribute("type","HIDDEN");g.appendChild(e)}var a="";for(var b in h){a+=(""+b+"^"+h[b]+"#")}if(a.indexOf("#")==a.length-1){a=a.substring(0,a.length-1)}if(a.indexOf("|")==a.length-1){a=a.substring(0,a.length-1)}e.value=a}}var MenubarItem=function(b,a){this.menu=a;this.domNode=b;this.popupMenu=false;this.hasFocus=false;this.hasHover=false;this.isMenubarItem=true;this.keyCode=Object.freeze({TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40})};MenubarItem.prototype.init=function(){this.domNode.addEventListener("keydown",this.handleKeydown.bind(this));this.domNode.addEventListener("focus",this.handleFocus.bind(this));this.domNode.addEventListener("blur",this.handleBlur.bind(this));this.domNode.addEventListener("mouseover",this.handleMouseover.bind(this));this.domNode.addEventListener("mouseout",this.handleMouseout.bind(this));var a=this.domNode.nextElementSibling;if(a&&a.tagName==="SPAN"){a=a.nextElementSibling}if(a&&a.tagName==="UL"){this.domNode.parentElement.classList.add("has-popout");this.popupMenu=new PopupMenu(a,this);this.popupMenu.init()}};MenubarItem.prototype.handleKeydown=function(d){var c=d.key,b=false;function a(e){return e.length===1&&e.match(/\S/)}switch(d.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:case this.keyCode.DOWN:if(this.menu.orientation==="vertical"){this.menu.setFocusToNextItem(this);b=true}else{if(this.popupMenu&&this.menu.orientation!=="vertical"){this.popupMenu.open();this.popupMenu.setFocusToFirstItem();b=true}}break;case this.keyCode.LEFT:if(this.menu.orientation==="vertical"&&this.popupMenu){this.popupMenu.open();this.popupMenu.setFocusToLastItem();b=true}else{this.menu.setFocusToPreviousItem(this);b=true}break;case this.keyCode.RIGHT:if(this.menu.orientation==="vertical"&&this.popupMenu){this.popupMenu.open();this.popupMenu.setFocusToFirstItem();b=true}else{this.menu.setFocusToNextItem(this);b=true}break;case this.keyCode.UP:if(this.menu.orientation==="vertical"){this.menu.setFocusToPreviousItem(this);b=true}else{if(this.popupMenu&&this.menu.orientation!=="vertical"){this.popupMenu.open();this.popupMenu.setFocusToLastItem();b=true}}break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.menu.setFocusToFirstItem();b=true;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.menu.setFocusToLastItem();b=true;break;case this.keyCode.ESC:this.popupMenu.close(true);break;default:if(a(c)){this.menu.setFocusByFirstCharacter(this,c);b=true}break}if(b){d.stopPropagation();d.preventDefault()}};MenubarItem.prototype.setExpanded=function(a){if(a){this.domNode.setAttribute("aria-expanded","true")}else{this.domNode.setAttribute("aria-expanded","false")}};MenubarItem.prototype.handleFocus=function(a){this.menu.hasFocus=true};MenubarItem.prototype.handleBlur=function(a){this.menu.hasFocus=false};MenubarItem.prototype.handleMouseover=function(a){this.hasHover=true;if(this.popupMenu){this.popupMenu.open()}};MenubarItem.prototype.handleMouseout=function(a){this.hasHover=false;if(this.popupMenu){setTimeout(this.popupMenu.close.bind(this.popupMenu,false),300)}};var Menubar=function(b){var a="Menubar constructor argument menubarNode ";if((b instanceof Element)===false){throw new TypeError(a+"is not a DOM Element.")}if(b.childElementCount===0){throw new Error(a+"has no element children.")}var d=b.firstElementChild;while(d){var c=d.firstElementChild;if(c&&c.tagName!=="A"){throw new Error(a+"has child elements are not A elements.")}d=d.nextElementSibling}this.isMenubar=true;this.domNode=b;this.menubarItems=[];this.firstChars=[];this.firstItem=null;this.lastItem=null;this.hasFocus=false;this.hasHover=false;this.orientation="horizontal"};Menubar.prototype.init=function(){var d,e,c,a;var b=this.domNode.firstElementChild;if(this.domNode.parentElement.parentElement.matches(".menuvert")){this.orientation="vertical"}while(b){e=b.firstElementChild;if(e&&e.tagName==="A"){d=new MenubarItem(e,this);d.init();this.menubarItems.push(d);c=e.textContent.trim();this.firstChars.push(c.substring(0,1).toLowerCase())}b=b.nextElementSibling}a=this.menubarItems.length;if(a>0){this.firstItem=this.menubarItems[0];this.lastItem=this.menubarItems[a-1]}this.firstItem.domNode.tabIndex=0};Menubar.prototype.setFocusToItem=function(c){var a=false;for(var b=0;b<this.menubarItems.length;b++){var d=this.menubarItems[b];if(d.domNode.tabIndex==0){a=d.domNode.getAttribute("aria-expanded")==="true"}if(d.popupMenu){d.popupMenu.close()}}c.domNode.focus();c.domNode.tabIndex=0;if(a&&c.popupMenu){c.popupMenu.open()}};Menubar.prototype.setFocusToFirstItem=function(a){this.setFocusToItem(this.firstItem)};Menubar.prototype.setFocusToLastItem=function(a){this.setFocusToItem(this.lastItem)};Menubar.prototype.setFocusToPreviousItem=function(c){var a,b;if(c===this.firstItem){b=this.lastItem}else{a=this.menubarItems.indexOf(c);b=this.menubarItems[a-1]}this.setFocusToItem(b)};Menubar.prototype.setFocusToNextItem=function(c){var a,b;if(c===this.lastItem){b=this.firstItem}else{a=this.menubarItems.indexOf(c);b=this.menubarItems[a+1]}this.setFocusToItem(b)};Menubar.prototype.setFocusByFirstCharacter=function(b,c){var d,a;c=c.toLowerCase();d=this.menubarItems.indexOf(b)+1;if(d===this.menubarItems.length){d=0}a=this.getIndexFirstChars(d,c);if(a===-1){a=this.getIndexFirstChars(0,c)}if(a>-1){this.setFocusToItem(this.menubarItems[a])}};Menubar.prototype.getIndexFirstChars=function(c,b){for(var a=c;a<this.firstChars.length;a++){if(b===this.firstChars[a]){return a}}return -1};var MenuItem=function(b,a){this.domNode=b;this.menu=a;this.popupMenu=false;this.isMenubarItem=false;this.keyCode=Object.freeze({TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40})};MenuItem.prototype.init=function(){this.domNode.addEventListener("keydown",this.handleKeydown.bind(this));this.domNode.addEventListener("click",this.handleClick.bind(this));this.domNode.addEventListener("focus",this.handleFocus.bind(this));this.domNode.addEventListener("blur",this.handleBlur.bind(this));this.domNode.addEventListener("mouseover",this.handleMouseover.bind(this));this.domNode.addEventListener("mouseout",this.handleMouseout.bind(this));var a=this.domNode.nextElementSibling;if(a&&a.tagName==="SPAN"){a=a.nextElementSibling}if(a&&a.tagName==="UL"){this.domNode.parentElement.classList.add("has-popout");this.popupMenu=new PopupMenu(a,this);this.popupMenu.init()}};MenuItem.prototype.isExpanded=function(){return this.domNode.getAttribute("aria-expanded")==="true"};MenuItem.prototype.handleKeydown=function(f){var g=f.currentTarget,d=f.key,c=false,a;function b(h){return h.length===1&&h.match(/\S/)}switch(f.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:if(this.popupMenu){this.popupMenu.open();this.popupMenu.setFocusToFirstItem()}else{try{a=new MouseEvent("click",{view:window,bubbles:true,cancelable:true})}catch(e){if(document.createEvent){a=document.createEvent("MouseEvents");a.initEvent("click",true,true)}}g.dispatchEvent(a)}c=true;break;case this.keyCode.UP:this.menu.setFocusToPreviousItem(this);c=true;break;case this.keyCode.DOWN:this.menu.setFocusToNextItem(this);c=true;break;case this.keyCode.LEFT:this.menu.setFocusToController("previous",true);this.menu.close(true);c=true;break;case this.keyCode.RIGHT:if(this.popupMenu){this.popupMenu.open();this.popupMenu.setFocusToFirstItem()}else{this.menu.setFocusToController("next",true);this.menu.close(true)}c=true;break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.menu.setFocusToFirstItem();c=true;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.menu.setFocusToLastItem();c=true;break;case this.keyCode.ESC:this.menu.setFocusToController();this.menu.close(true);c=true;break;default:if(b(d)){this.menu.setFocusByFirstCharacter(this,d);c=true}break}if(c){f.stopPropagation();f.preventDefault()}};MenuItem.prototype.setExpanded=function(a){if(a){this.domNode.setAttribute("aria-expanded","true")}else{this.domNode.setAttribute("aria-expanded","false")}};MenuItem.prototype.handleClick=function(a){this.menu.setFocusToController();this.menu.close(true)};MenuItem.prototype.handleFocus=function(a){this.menu.hasFocus=true};MenuItem.prototype.handleBlur=function(a){this.menu.hasFocus=false;setTimeout(this.menu.close.bind(this.menu,false),300)};MenuItem.prototype.handleMouseover=function(a){this.menu.hasHover=true;this.menu.open();if(this.popupMenu){this.popupMenu.hasHover=true;this.popupMenu.open()}};MenuItem.prototype.handleMouseout=function(a){if(this.popupMenu){this.popupMenu.hasHover=false;this.popupMenu.close(true)}this.menu.hasHover=false;setTimeout(this.menu.close.bind(this.menu,false),300)};var PopupMenu=function(c,d){var b="PopupMenu constructor argument domNode ";if((c instanceof Element)===false){throw new TypeError(b+"is not a DOM Element.")}if(c.childElementCount===0){throw new Error(b+"has no element children.")}var a=c.firstElementChild;while(a){var e=a.firstElementChild;if(e&&e==="A"){throw new Error(b+"has descendant elements that are not A elements.")}a=a.nextElementSibling}this.isMenubar=false;this.domNode=c;this.controller=d;this.menuitems=[];this.firstChars=[];this.firstItem=null;this.lastItem=null;this.hasFocus=false;this.hasHover=false};PopupMenu.prototype.init=function(){var a,e,c,d,b;this.domNode.addEventListener("mouseover",this.handleMouseover.bind(this));this.domNode.addEventListener("mouseout",this.handleMouseout.bind(this));a=this.domNode.firstElementChild;while(a){e=a.firstElementChild;if(e&&e.tagName==="A"){c=new MenuItem(e,this);c.init();this.menuitems.push(c);d=e.textContent.trim();this.firstChars.push(d.substring(0,1).toLowerCase())}a=a.nextElementSibling}b=this.menuitems.length;if(b>0){this.firstItem=this.menuitems[0];this.lastItem=this.menuitems[b-1]}};PopupMenu.prototype.handleMouseover=function(a){this.hasHover=true};PopupMenu.prototype.handleMouseout=function(a){this.hasHover=false;setTimeout(this.close.bind(this,false),1)};PopupMenu.prototype.setFocusToController=function(d,b){if(typeof d!=="string"){d=""}function a(e,f){while(e){if(e.isMenubarItem){e.domNode.focus();return e}else{if(f){e.menu.close(true)}e.hasFocus=false}e=e.menu.controller}return false}if(d===""){if(this.controller&&this.controller.domNode){this.controller.domNode.focus()}return}if(!this.controller.isMenubarItem){this.controller.domNode.focus();this.close();if(d==="next"){var c=a(this.controller,false);if(c){c.menu.setFocusToNextItem(c,b)}}}else{if(d==="previous"){this.controller.menu.setFocusToPreviousItem(this.controller,b)}else{if(d==="next"){this.controller.menu.setFocusToNextItem(this.controller,b)}}}};PopupMenu.prototype.setFocusToFirstItem=function(){this.firstItem.domNode.focus()};PopupMenu.prototype.setFocusToLastItem=function(){this.lastItem.domNode.focus()};PopupMenu.prototype.setFocusToPreviousItem=function(b){var a;if(b===this.firstItem){this.controller.domNode.focus()}else{a=this.menuitems.indexOf(b);this.menuitems[a-1].domNode.focus()}};PopupMenu.prototype.setFocusToNextItem=function(b){var a;if(b===this.lastItem){this.controller.domNode.focus()}else{a=this.menuitems.indexOf(b);this.menuitems[a+1].domNode.focus()}};PopupMenu.prototype.setFocusByFirstCharacter=function(b,c){var d,a,c=c.toLowerCase();d=this.menuitems.indexOf(b)+1;if(d===this.menuitems.length){d=0}a=this.getIndexFirstChars(d,c);if(a===-1){a=this.getIndexFirstChars(0,c)}if(a>-1){this.menuitems[a].domNode.focus()}};PopupMenu.prototype.getIndexFirstChars=function(c,b){for(var a=c;a<this.firstChars.length;a++){if(b===this.firstChars[a]){return a}}return -1};PopupMenu.prototype.open=function(){var a=this.controller.domNode.getBoundingClientRect();if(!this.controller.isMenubarItem||this.controller.menu.orientation=="vertical"){this.domNode.parentNode.style.position="relative";this.domNode.style.display="block";this.domNode.style.position="absolute";this.domNode.style.left=a.width+"px";this.domNode.style.top=0;this.domNode.style.zIndex=100}else{this.domNode.style.display="block";this.domNode.style.position="absolute";this.domNode.style.left=0;this.domNode.style.top=a.height+"px";this.domNode.style.zIndex=100}this.controller.setExpanded(true)};PopupMenu.prototype.close=function(d){var b=this.controller.hasHover;var e=this.hasFocus;for(var c=0;c<this.menuitems.length;c++){var a=this.menuitems[c];if(a.popupMenu){e=e|a.popupMenu.hasFocus}}if(!this.controller.isMenubarItem){b=false}if(d||(!e&&!this.hasHover&&!b)){this.domNode.style.display="none";this.domNode.style.zIndex=0;this.controller.setExpanded(false)}};