(self.webpackChunk_lighthouse_test_gatsby=self.webpackChunk_lighthouse_test_gatsby||[]).push([[691],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var l,c,u,s;if(Array.isArray(e)){if((l=e.length)!=o.length)return!1;for(c=l;0!=c--;)if(!i(e[c],o[c]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!o.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!i(c.value[1],o.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((l=e.length)!=o.length)return!1;for(c=l;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((l=(u=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!i(e[u[c]],o[u[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function s(){c=e(u.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",l),f}}},4601:function(e,t,n){"use strict";n.r(t),n.d(t,{Index:function(){return je},default:function(){return Pe}});var r,a,i,o,l=n(7294),c=n(5697),u=n.n(c),s=n(4839),f=n.n(s),d=n(2993),p=n.n(d),m=n(6494),h=n.n(m),y="bodyAttributes",b="htmlAttributes",E="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(g).map((function(e){return g[e]})),"charset"),T="cssText",w="href",C="http-equiv",O="innerHTML",A="itemprop",S="name",k="property",j="rel",P="src",x="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",N="defer",R="encodeSpecialCharacters",F="onChangeClientState",M="titleTemplate",D=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),_=[g.NOSCRIPT,g.SCRIPT,g.STYLE],q="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Q(e,g.TITLE),n=Q(e,M);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,L);return t||r||void 0},G=function(e){return Q(e,F)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],c=l.toLowerCase();-1===t.indexOf(c)||n===j&&"canonical"===e[n].toLowerCase()||c===j&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==O&&l!==T&&l!==A||(n=l)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var l=i[o],c=h()({},r[l],a[l]);r[l]=c}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;ce(g.BODY,r),ce(g.HTML,a),le(f,d);var p={baseTag:ue(g.BASE,n),linkTags:ue(g.LINK,i),metaTags:ue(g.META,o),noscriptTags:ue(g.NOSCRIPT,l),scriptTags:ue(g.SCRIPT,u),styleTags:ue(g.STYLE,s)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,m,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(g.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(q),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),l=0;l<o.length;l++){var c=o[l],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===a.indexOf(c)&&a.push(c);var s=i.indexOf(c);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute(q):n.getAttribute(q)!==o.join(",")&&n.setAttribute(q,o.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(q,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[q]=!0,a=fe(n,r),[l.createElement(g.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+V(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[q]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===O||n===T){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),l.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===O||e===T)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(g.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(b,a,r),link:de(g.LINK,i,r),meta:de(g.META,o,r),noscript:de(g.NOSCRIPT,l,r),script:de(g.SCRIPT,c,r),style:de(g.STYLE,u,r),title:de(g.TITLE,{title:f,titleAttributes:d},r)}},me=f()((function(e){return{baseTag:$([w,x],e),bodyAttributes:Z(y,e),defer:Q(e,N),encode:Q(e,R),htmlAttributes:Z(b,e),linkTags:J(g.LINK,[j,w],e),metaTags:J(g.META,[S,v,C,k,A],e),noscriptTags:J(g.NOSCRIPT,[O],e),onChangeClientState:G(e),scriptTags:J(g.SCRIPT,[P,O],e),styleTags:J(g.STYLE,[T],e),title:W(e),titleAttributes:Z(E,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),he=(a=me,o=i=function(e){function t(){return Y(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case g.TITLE:return U({},a,((t={})[r.type]=o,t.titleAttributes=U({},i),t));case g.BODY:return U({},a,{bodyAttributes:U({},i)});case g.HTML:return U({},a,{htmlAttributes:U({},i)})}return U({},a,((n={})[r.type]=U({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return l.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(z(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),l.createElement(a,r)},H(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(l.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind;var ye=function(e){var t=e.children;return l.createElement(l.Fragment,null,l.createElement("header",null,l.createElement("h1",null,"Gatsby Demo"),l.createElement("nav",null,l.createElement("a",{href:"/"},"Home"))),l.createElement("br",null),t,l.createElement("br",null),l.createElement("footer",null,"Check the lighthouse results at",l.createElement("a",{href:"https://lighthouse-test.github.io",rel:"noopener",target:"_blank"},"https://lighthouse-test.github.io")))},be=n(4665);function Ee(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function ge(e,t,n){return(ge=Ee()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&(0,be.Z)(a,n.prototype),a}).apply(null,arguments)}var ve=n(18),Te=["Feature","Docs","Issue","Backend","Frontent"],we=[{id:1,name:"Add more frameworks",description:"We need to add more frameworks",type:"Issue",confidential:"Yes",remind:!0,date:"2021-04-07"}],Ce=function(){return we},Oe=function(e){return Ce().filter((function(t){return t.id===e}))[0]},Ae=function(e){var t,n=(0,l.useState)(e.todo)[0];return l.createElement(l.Fragment,null,l.createElement("h4",null,"Todo"),l.createElement("table",null,l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",{align:"left"},"Name"),l.createElement("td",null,n.name)),l.createElement("tr",null,l.createElement("th",{align:"left"},"Description"),l.createElement("td",null,n.description)),l.createElement("tr",null,l.createElement("th",{align:"left"},"Type"),l.createElement("td",null,n.type)),l.createElement("tr",null,l.createElement("th",{align:"left"},"Confidential"),l.createElement("td",null,n.confidential)),l.createElement("tr",null,l.createElement("th",{align:"left"},"Remind"),l.createElement("td",null,null===(t=n.remind)||void 0===t?void 0:t.toString())),l.createElement("tr",null,l.createElement("th",{align:"left"},"Date"),l.createElement("td",null,n.date)),l.createElement("tr",null,l.createElement("th",{colSpan:2,align:"right"},l.createElement("button",{type:"button",onClick:function(){e.onClose()}},"Close"))))))},Se=function(e){var t=(0,l.useState)(e.todo),n=t[0],r=t[1],a=(0,l.useState)(Te)[0],i=(0,l.useState)({status:!1}),o=i[0],c=i[1],u=function(e){var t,a,i=e.target,o=i.name;switch(i.type){case"checkbox":a=i.checked;break;default:a=i.value}r(Object.assign({},Object.assign(n,((t={})[o]=a,t))))};return l.createElement(l.Fragment,null,l.createElement("h4",null,n.id?"Update":"Add"," Todo"),l.createElement("form",{onSubmit:function(t){t.preventDefault(),c({status:!1}),n.name||c(Object.assign({},Object.assign(o,{name:"Name is required.",status:!0}))),n.description||c(Object.assign({},Object.assign(o,{description:"Description is required.",status:!0}))),n.type||c(Object.assign({},Object.assign(o,{type:"Type is required.",status:!0}))),n.date||c(Object.assign({},Object.assign(o,{date:"Date is required.",status:!0}))),setTimeout((function(){o.status?alert("All Fields are required"):e.onAddOrUpdate(n)}))},noValidate:!0},l.createElement("table",null,l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",{align:"left"},l.createElement("label",{htmlFor:"name"},"Name")),l.createElement("td",null,l.createElement("input",{id:"name",type:"text",name:"name",onChange:u,value:n.name,required:!0})),l.createElement("td",null,o.name)),l.createElement("tr",null,l.createElement("th",{align:"left"},l.createElement("label",{htmlFor:"description"},"description")),l.createElement("td",null,l.createElement("textarea",{id:"description",name:"description",onChange:u,value:n.description,required:!0})),l.createElement("td",null,o.description)),l.createElement("tr",null,l.createElement("th",{align:"left"},l.createElement("label",null,"Type")),l.createElement("td",null,l.createElement("select",{id:"type",name:"type",onChange:u,value:n.type,required:!0},a.map((function(e){return l.createElement("option",{value:e,key:e},e)})))),l.createElement("td",null,o.type)),l.createElement("tr",null,l.createElement("th",{align:"left"},l.createElement("label",null,"Confidential")),l.createElement("td",null,l.createElement("label",{htmlFor:"confidential1"},"Yes"),l.createElement("input",{id:"confidential1",type:"radio",name:"confidential",value:"Yes",onChange:u,checked:"Yes"===n.confidential}),l.createElement("label",{htmlFor:"confidential2"},"No"),l.createElement("input",{id:"confidential2",type:"radio",name:"confidential",value:"No",onChange:u,checked:"No"===n.confidential})),l.createElement("td",null)),l.createElement("tr",null,l.createElement("th",{align:"left"},l.createElement("label",null,"Remind")),l.createElement("td",null,l.createElement("label",{htmlFor:"remind"},"Yes"),l.createElement("input",{id:"remind",type:"checkbox",name:"remind",onChange:u,checked:n.remind})),l.createElement("td",null)),l.createElement("tr",null,l.createElement("th",{align:"left"},l.createElement("label",{htmlFor:"date"},"Date")),l.createElement("td",null,l.createElement("input",{id:"date",type:"date",name:"date",onChange:u,value:n.date,required:!0})),l.createElement("td",null,o.date)),l.createElement("tr",null,l.createElement("th",{colSpan:2,align:"right"},l.createElement("button",{type:"submit"},n.id?"Update":"Add")))))))},ke=function(){var e=(0,l.useState)(null),t=e[0],n=e[1],r=(0,l.useState)(null),a=r[0],i=r[1],o=(0,l.useState)(Ce()),c=o[0],u=o[1],s=function(e,t){i(t),n(Oe(e))},f=function(e){!function(e){var t=Ce(),n=Oe(e),r=t.indexOf(n);t.splice(r,1)}(e),u(ge(Array,(0,ve.Z)(Ce())))};return l.createElement(l.Fragment,null,l.createElement("h3",null,"Todos ",l.createElement("button",{onClick:function(){i("edit"),n({name:"",description:"",type:"",confidential:"No",remind:!1,date:""})}},"New")),t&&"view"===a&&l.createElement(Ae,{todo:t,onClose:function(){return i(null)}}),t&&"edit"===a&&l.createElement(Se,{todo:t,onAddOrUpdate:function(e){e.id?function(e){var t=Oe(e.id),n=Ce(),r=n.indexOf(t);n[r]=e}(e):function(e){var t=Ce();e.id=t.length?t[t.length-1].id+1:1,t.push(e)}(e),n(null),u(ge(Array,(0,ve.Z)(Ce())))}}),l.createElement("br",null),l.createElement("table",{width:"100%"},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{align:"left"},"Id"),l.createElement("th",{align:"left"},"Name"),l.createElement("th",{align:"left"},"description"),l.createElement("th",{align:"left"},"Type"),l.createElement("th",{align:"left"},"Confidential"),l.createElement("th",{align:"left"},"Remind"),l.createElement("th",{align:"left"},"Date"),l.createElement("th",{align:"left"},"Actions"))),l.createElement("tbody",null,c.map((function(e){return l.createElement("tr",{key:e.id},l.createElement("td",null,e.id),l.createElement("td",null,e.name),l.createElement("td",null,e.description),l.createElement("td",null,e.type),l.createElement("td",null,e.confidential),l.createElement("td",null,e.remind.toString()),l.createElement("td",null,e.date),l.createElement("td",null,l.createElement("button",{type:"button",onClick:function(){return s(e.id,"view")}},"View")," ",l.createElement("button",{type:"button",onClick:function(){return s(e.id,"edit")}},"Edit")," ",l.createElement("button",{type:"button",onClick:function(){return f(e.id)}},"Delete")))})))))},je=function(){return l.createElement(ye,null,l.createElement(l.Fragment,null,l.createElement(he,null,l.createElement("title",null,"Lighthouse Test | Gatsby"),l.createElement("meta",{name:"description",content:"Lighthouse Test | Gatsby"})),l.createElement("h2",null,"Home"),l.createElement(ke,null)))},Pe=je}}]);
//# sourceMappingURL=component---src-pages-index-tsx-9d1a28812f49a0be849e.js.map