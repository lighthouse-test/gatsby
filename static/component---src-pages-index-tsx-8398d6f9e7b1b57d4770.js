(self.webpackChunk_lighthouse_test_gatsby=self.webpackChunk_lighthouse_test_gatsby||[]).push([[691],{993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var l,c,u,s;if(Array.isArray(e)){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(!a(e[c],i[c]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!a(c.value[1],i.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((l=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!a(e[u[c]],i[u[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},866:function(e,t,n){"use strict";var r,o=n(294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function s(){c=e(u.map((function(e){return e.props}))),d.canUseDOM?t(c):n&&(c=n(c))}var d=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(d,"canUseDOM",l),d}}},712:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Se}});var r,o,a,i,l=n(552),c=n(294),u=n(697),s=n.n(u),d=n(866),f=n.n(d),p=n(993),m=n.n(p),h=n(494),y=n.n(h),E="bodyAttributes",b="htmlAttributes",T="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(g).map((function(e){return g[e]})),"charset"),C="cssText",w="href",A="http-equiv",O="innerHTML",S="itemprop",k="name",j="property",H="rel",P="src",x="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",N="defer",M="encodeSpecialCharacters",F="onChangeClientState",R="titleTemplate",D=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),_=[g.NOSCRIPT,g.SCRIPT,g.STYLE],q="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=X(e,g.TITLE),n=X(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,I);return t||r||void 0},G=function(e){return X(e,F)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&oe("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var l=a[i],c=l.toLowerCase();-1===t.indexOf(c)||n===H&&"canonical"===e[n].toLowerCase()||c===H&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==O&&l!==C&&l!==S||(n=l)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var l=a[i],c=y()({},r[l],o[l]);r[l]=c}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,oe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,d=e.title,f=e.titleAttributes;ue(g.BODY,r),ue(g.HTML,o),ce(d,f);var p={baseTag:se(g.BASE,n),linkTags:se(g.LINK,a),metaTags:se(g.META,i),noscriptTags:se(g.NOSCRIPT,l),scriptTags:se(g.SCRIPT,u),styleTags:se(g.STYLE,s)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,m,h)},le=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=le(e)),ue(g.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(q),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),l=0;l<i.length;l++){var c=i[l],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===o.indexOf(c)&&o.push(c);var s=a.indexOf(c);-1!==s&&a.splice(s,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);o.length===a.length?n.removeAttribute(q):n.getAttribute(q)!==i.join(",")&&n.setAttribute(q,i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===C)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(q,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},de=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[q]=!0,o=fe(n,r),[c.createElement(g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=de(n),a=le(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Z(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Z(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case E:case b:return{toComponent:function(){return fe(t)},toString:function(){return de(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[q]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===O||n===C){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===O||e===C)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+Z(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.scriptTags,u=e.styleTags,s=e.title,d=void 0===s?"":s,f=e.titleAttributes;return{base:pe(g.BASE,t,r),bodyAttributes:pe(E,n,r),htmlAttributes:pe(b,o,r),link:pe(g.LINK,a,r),meta:pe(g.META,i,r),noscript:pe(g.NOSCRIPT,l,r),script:pe(g.SCRIPT,c,r),style:pe(g.STYLE,u,r),title:pe(g.TITLE,{title:d,titleAttributes:f},r)}},he=f()((function(e){return{baseTag:J([w,x],e),bodyAttributes:$(E,e),defer:X(e,N),encode:X(e,M),htmlAttributes:$(b,e),linkTags:Q(g.LINK,[H,w],e),metaTags:Q(g.META,[k,v,A,j,S],e),noscriptTags:Q(g.NOSCRIPT,[O],e),onChangeClientState:G(e),scriptTags:Q(g.SCRIPT,[P,O],e),styleTags:Q(g.STYLE,[C],e),title:W(e),titleAttributes:$(T,e)}}),(function(e){ae&&re(ae),e.defer?ae=ne((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),me)((function(){return null})),ye=(o=he,i=a=function(e){function t(){return Y(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case g.TITLE:return z({},o,((t={})[r.type]=i,t.titleAttributes=z({},a),t));case g.BODY:return z({},o,{bodyAttributes:z({},a)});case g.HTML:return z({},o,{htmlAttributes:z({},a)})}return z({},o,((n={})[r.type]=z({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(K(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=K(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},B(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ye.renderStatic=ye.rewind;var Ee=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){return c.createElement(c.Fragment,null,c.createElement("header",null,c.createElement("h1",null,"Gatsby Demo"),c.createElement("nav",null,c.createElement("a",{href:"/"},"Home"))),c.createElement("br",null),this.props.children,c.createElement("br",null),c.createElement("footer",null,"Check the lighthouse results at",c.createElement("a",{href:"https://lighthouse-test.github.io",rel:"noopener",target:"_blank"},"https://lighthouse-test.github.io")))},t}(c.Component);function be(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Te=["Feature","Docs","Issue","Backend","Frontent"],ge=[{id:1,name:"Add more frameworks",description:"We need to add more frameworks",type:"Issue",confidential:"Yes",remind:!0,date:"2021-04-07"}],ve=function(){return ge},Ce=function(e){return ve().filter((function(t){return t.id===e}))[0]},we=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={todo:t.todo},n.closeTodoHandler=n.closeTodoHandler.bind(be(n)),n}(0,l.Z)(t,e);var n=t.prototype;return n.closeTodoHandler=function(){this.props.onClose()},n.render=function(){return c.createElement(c.Fragment,null,c.createElement("h4",null,"Todo"),c.createElement("table",null,c.createElement("tbody",null,c.createElement("tr",null,c.createElement("th",null,"Name"),c.createElement("td",null,this.state.todo.name)),c.createElement("tr",null,c.createElement("th",null,"Description"),this.state.todo.description),c.createElement("tr",null,c.createElement("th",null,"Type"),c.createElement("td",null,this.state.todo.type)),c.createElement("tr",null,c.createElement("th",null,"Confidential"),c.createElement("td",null,this.state.todo.confidential)),c.createElement("tr",null,c.createElement("th",{align:"left"},"Remind"),c.createElement("td",null,this.state.todo.remind.toString())),c.createElement("tr",null,c.createElement("th",null,"Date"),c.createElement("td",null,this.state.todo.date)),c.createElement("tr",null,c.createElement("th",{colSpan:2,align:"right"},c.createElement("button",{type:"button",onClick:this.closeTodoHandler},"Close"))))))},t}(c.Component),Ae=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={todo:t.todo,types:Te,errors:{status:!1}},n.formChangeHandler=n.formChangeHandler.bind(be(n)),n.updateTodoHandler=n.updateTodoHandler.bind(be(n)),n}(0,l.Z)(t,e);var n=t.prototype;return n.formChangeHandler=function(e){var t,n=e.target,r=n.name;switch(n.type){case"checkbox":t=n.checked;break;default:t=n.value}this.setState((function(e){var n;return{todo:Object.assign({},e.todo,(n={},n[r]=t,n))}}))},n.updateTodoHandler=function(e){var t=this;e.preventDefault(),this.setState({errors:{status:!1}}),this.state.todo.name||this.setState((function(e){return{errors:Object.assign({},e.errors,{name:"Name is required.",status:!0})}})),this.state.todo.description||this.setState((function(e){return{errors:Object.assign({},e.errors,{description:"Description is required.",status:!0})}})),this.state.todo.type||this.setState((function(e){return{errors:Object.assign({},e.errors,{type:"Type is required.",status:!0})}})),this.state.todo.date||this.setState((function(e){return{errors:Object.assign({},e.errors,{date:"Date is required.",status:!0})}})),setTimeout((function(){t.state.errors.status?alert("All Fields are required"):t.props.onAddOrUpdate(t.state.todo)}))},n.render=function(){return c.createElement(c.Fragment,null,c.createElement("h4",null,this.state.todo.id?"Update":"Add"," Todo"),c.createElement("form",{onSubmit:this.updateTodoHandler,noValidate:!0},c.createElement("table",null,c.createElement("tbody",null,c.createElement("tr",null,c.createElement("th",null,c.createElement("label",{htmlFor:"name"},"Name")),c.createElement("td",null,c.createElement("input",{id:"name",type:"text",name:"name",onChange:this.formChangeHandler,value:this.state.todo.name,required:!0})),c.createElement("td",null,this.state.errors.name)),c.createElement("tr",null,c.createElement("th",null,c.createElement("label",{htmlFor:"description"},"description")),c.createElement("td",null,c.createElement("textarea",{id:"description",name:"description",onChange:this.formChangeHandler,value:this.state.todo.description,required:!0})),c.createElement("td",null,this.state.errors.description)),c.createElement("tr",null,c.createElement("th",null,c.createElement("label",null,"Type")),c.createElement("td",null,c.createElement("select",{id:"type",name:"type",onChange:this.formChangeHandler,value:this.state.todo.type,required:!0},this.state.types.map((function(e){return c.createElement("option",{value:e,key:e},e)})))),c.createElement("td",null,this.state.errors.type)),c.createElement("tr",null,c.createElement("th",null,c.createElement("label",null,"Confidential")),c.createElement("td",null,c.createElement("label",{htmlFor:"confidential1"},"Yes"),c.createElement("input",{id:"confidential1",type:"radio",name:"confidential",value:"Yes",onChange:this.formChangeHandler,checked:"Yes"===this.state.todo.confidential}),c.createElement("label",{htmlFor:"confidential2"},"No"),c.createElement("input",{id:"confidential2",type:"radio",name:"confidential",value:"No",onChange:this.formChangeHandler,checked:"No"===this.state.todo.confidential})),c.createElement("td",null)),c.createElement("tr",null,c.createElement("th",{align:"left"},c.createElement("label",null,"Remind")),c.createElement("td",null,c.createElement("label",{htmlFor:"remind"},"Yes"),c.createElement("input",{id:"remind",type:"checkbox",name:"remind",onChange:this.formChangeHandler,checked:this.state.todo.remind})),c.createElement("td",null)),c.createElement("tr",null,c.createElement("th",null,c.createElement("label",{htmlFor:"date"},"Date")),c.createElement("td",null,c.createElement("input",{id:"date",type:"date",name:"date",onChange:this.formChangeHandler,value:this.state.todo.date,required:!0})),c.createElement("td",null,this.state.errors.date)),c.createElement("tr",null,c.createElement("th",{colSpan:2,align:"right"},c.createElement("button",{type:"submit"},this.state.todo.id?"Update":"Add")))))))},t}(c.Component),Oe=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={currentTodo:null,currentEvent:null,todos:ve()},n.addTodoHandler=n.addTodoHandler.bind(be(n)),n.selectTodoHandler=n.selectTodoHandler.bind(be(n)),n.onUpdateTodoHandler=n.onUpdateTodoHandler.bind(be(n)),n}(0,l.Z)(t,e);var n=t.prototype;return n.addTodoHandler=function(){this.setState({currentEvent:"edit",currentTodo:{name:"",description:"",type:"",confidential:"No",remind:!1,date:""}})},n.selectTodoHandler=function(e,t){this.setState({currentEvent:t,currentTodo:Ce(e)})},n.onUpdateTodoHandler=function(e){e.id?function(e){var t=Ce(e.id),n=ve(),r=n.indexOf(t);n[r]=e}(e):function(e){var t=ve();e.id=t.length?t[t.length-1].id+1:1,t.push(e)}(e),this.setState({currentTodo:null,todos:ve()})},n.deleteTodoHandler=function(e){!function(e){var t=ve(),n=Ce(e),r=t.indexOf(n);t.splice(r,1)}(e),this.setState({todos:ve()})},n.render=function(){var e=this;return c.createElement(c.Fragment,null,c.createElement("h3",null,"Todos ",c.createElement("button",{onClick:this.addTodoHandler},"New")),this.state.currentTodo&&"view"===this.state.currentEvent&&c.createElement(we,{todo:this.state.currentTodo,onClose:function(){return e.setState({currentEvent:null})}}),this.state.currentTodo&&"edit"===this.state.currentEvent&&c.createElement(Ae,{todo:this.state.currentTodo,onAddOrUpdate:this.onUpdateTodoHandler}),c.createElement("br",null),c.createElement("table",{width:"100%"},c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,"Id"),c.createElement("th",null,"Name"),c.createElement("th",null,"description"),c.createElement("th",null,"Type"),c.createElement("th",null,"Confidential"),c.createElement("th",null,"Remind"),c.createElement("th",null,"Date"),c.createElement("th",null,"Actions"))),c.createElement("tbody",null,this.state.todos.map((function(t){return c.createElement("tr",{key:t.id},c.createElement("td",null,t.id),c.createElement("td",null,t.name),c.createElement("td",null,t.description),c.createElement("td",null,t.type),c.createElement("td",null,t.confidential),c.createElement("td",null,t.remind.toString()),c.createElement("td",null,t.date),c.createElement("td",null,c.createElement("button",{type:"button",onClick:function(){return e.selectTodoHandler(t.id,"view")}},"View")," ",c.createElement("button",{type:"button",onClick:function(){return e.selectTodoHandler(t.id,"edit")}},"Edit")," ",c.createElement("button",{type:"button",onClick:function(){return e.deleteTodoHandler(t.id)}},"Delete")))})))))},t}(c.Component),Se=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){return c.createElement(Ee,null,c.createElement(c.Fragment,null,c.createElement(ye,null,c.createElement("title",null,"Lighthouse Test | Gatsby"),c.createElement("meta",{name:"description",content:"Lighthouse Test | Gatsby"})),c.createElement("h2",null,"Home"),c.createElement(Oe,null)))},t}(c.Component)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-8398d6f9e7b1b57d4770.js.map