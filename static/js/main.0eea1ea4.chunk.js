(this.webpackJsonpsdvvr=this.webpackJsonpsdvvr||[]).push([[0],{168:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(28),r=n.n(o),c=(n(168),n(268)),s=n(98),l=n(31),d=n(141),h=Object(d.a)({palette:{primary:{light:"#757ce8",main:"#d32f2f",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#651fff",dark:"#ba000d",contrastText:"#000"},type:"dark"}}),u=n(18),p=n(267),b=n(182),j=n(264),m=n(269),x=n(266),v=n(280),g=n(279),O=n(272),f=n(10),y=n(36),E=n(7),w=n(246),T=n(278),S=n(41),P=n(276),L=n(248),A=n(250),N=n(251),R=n(254),k=n(103),C=n(253),_=n(252),D=n(131),M=n.n(D),I=n(132),z=n.n(I),V=n(133),F=n.n(V),H=n(183),Y=n(255),B=n(256),X=n(135),U=n.n(X),Z=n(2),W=240,G=Object(w.a)((function(e){return Object(T.a)({root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(W,"px)"),marginLeft:W,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:W,flexShrink:0},drawerPaper:{width:W},drawerHeader:Object(y.a)(Object(y.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(2),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}})}));function K(){var e=G(),t=Object(S.a)(),n=i.a.useState(!1),a=Object(u.a)(n,2),o=a[0],r=a[1];return Object(Z.jsxs)("div",{className:e.root,children:[Object(Z.jsx)(L.a,{}),Object(Z.jsx)(A.a,{position:"fixed",className:Object(E.a)(e.appBar,Object(f.a)({},e.appBarShift,o)),children:Object(Z.jsxs)(N.a,{children:[Object(Z.jsx)(_.a,{color:"inherit","aria-label":"open drawer",onClick:function(){r(!0)},edge:"start",className:Object(E.a)(e.menuButton,o&&e.hide),children:Object(Z.jsx)(M.a,{})}),Object(Z.jsx)(k.a,{variant:"h6",noWrap:!0,children:"Menu"})]})}),Object(Z.jsxs)(P.a,{className:e.drawer,variant:"persistent",anchor:"left",open:o,classes:{paper:e.drawerPaper},children:[Object(Z.jsx)("div",{className:e.drawerHeader,children:Object(Z.jsx)(_.a,{onClick:function(){r(!1)},children:"ltr"===t.direction?Object(Z.jsx)(z.a,{}):Object(Z.jsx)(F.a,{})})}),Object(Z.jsx)(C.a,{}),Object(Z.jsx)(R.a,{children:Object(Z.jsx)(s.b,{to:"/physical_simulation",style:{color:"#FFF"},children:Object(Z.jsxs)(H.a,{button:!0,children:[Object(Z.jsx)(Y.a,{children:Object(Z.jsx)(U.a,{})}),Object(Z.jsx)(B.a,{primary:"Physical Simulation"})]},"main_key")})}),Object(Z.jsx)(C.a,{})]}),Object(Z.jsx)("main",{className:Object(E.a)(e.content,Object(f.a)({},e.contentShift,o)),children:Object(Z.jsx)("div",{className:e.drawerHeader})})]})}var q=n(143),J=n(273),Q=n(263),$=n(271),ee=n(270),te=n(275),ne=i.a.createContext({}),ae=i.a.createContext({}),ie=["children","value","index"];function oe(e){var t=e.children,n=e.value,a=e.index,i=Object(q.a)(e,ie);return Object(Z.jsx)("div",Object(y.a)(Object(y.a)({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},i),{},{children:n===a&&Object(Z.jsx)($.a,{p:3,children:Object(Z.jsx)(k.a,{children:t})})}))}function re(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var ce=Object(w.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}})),se=function(e,t){return e.filter((function(e){return e.category===t})).map((function(e){return Object(Z.jsxs)(b.a,{style:{marginBottom:"10px",paddingLeft:"10px",paddingRight:"20px"},children:[Object(Z.jsx)(k.a,{children:e.name}),function(){if("NUMBER_IMPUT"===e.parameterType)return Object(Z.jsx)(ee.a,{id:e.id,label:e.id,placeholder:e.defaultValue,defaultValue:e.defaultValue,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",onChange:function(e){}});if("SLIDER_FLOAT"===e.parameterType){var t=e.maxValue?e.maxValue:0,n=e.minValue?e.minValue:0;return Object(Z.jsx)(te.a,{defaultValue:e.defaultValue,min:n,max:t,step:.002*(t-n),"aria-label":"Default",valueLabelDisplay:"auto"})}return"SLIDER_INT"===e.parameterType?Object(Z.jsx)(te.a,{defaultValue:e.defaultValue,min:e.minValue,max:e.maxValue,"aria-label":"Default",valueLabelDisplay:"auto"}):void 0}()]})}))},le=function(e){var t=i.a.useContext(ae),n=(ce(),i.a.useState(0)),a=Object(u.a)(n,2),o=a[0],r=a[1],c=Array.from(new Set(t.params.map((function(e){return e.category}))).values());return console.log(c),Object(Z.jsxs)("div",{children:["Parameter Settings",Object(Z.jsx)(A.a,{position:"static",children:Object(Z.jsxs)(J.a,{value:o,onChange:function(e,t){r(t)},variant:"scrollable",scrollButtons:"auto","aria-label":"simple tabs example",style:{minHeight:"10%"},children:[c.map((function(e,t){return Object(Z.jsx)(Q.a,Object(y.a)(Object(y.a)({label:e},re(t)),{},{style:{minWidth:"20%",minHeight:"10%"}}))})),Object(Z.jsx)(Q.a,Object(y.a)(Object(y.a)({label:"Params1"},re(c.length)),{},{style:{minWidth:"20%",minHeight:"10%"}}))]})}),c.map((function(e,n){return Object(Z.jsx)(oe,{value:o,index:n,children:Object(Z.jsx)("div",{style:{overflowY:"scroll",height:.48*window.innerHeight,margin:"0px"},children:se(t.params,e)})})})),Object(Z.jsx)(oe,{value:o,index:c.length,children:Object(Z.jsxs)("div",{style:{overflowY:"scroll",height:.48*window.innerHeight,margin:"0px"},children:[Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(O.a,{children:"tab111"})})]})}),Object(Z.jsx)(O.a,{variant:"contained",children:"Apply Settings"})]})},de=n(14),he=function(e,t){void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new de.z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:de.i.ROTATE,MIDDLE:de.i.DOLLY,RIGHT:de.i.PAN},this.touches={ONE:de.v.ROTATE,TWO:de.v.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.listenToKeyEvents=function(e){e.addEventListener("keydown",B),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(a),n.update(),c=r.NONE},this.update=function(){var t=new de.z,i=(new de.o).setFromUnitVectors(e.up,new de.z(0,1,0)),o=i.clone().invert(),b=new de.z,j=new de.o,m=2*Math.PI;return function(){var e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(i),l.setFromVector3(t),n.autoRotate&&c===r.NONE&&w(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(l.theta+=d.theta*n.dampingFactor,l.phi+=d.phi*n.dampingFactor):(l.theta+=d.theta,l.phi+=d.phi);var x=n.minAzimuthAngle,v=n.maxAzimuthAngle;return isFinite(x)&&isFinite(v)&&(x<-Math.PI?x+=m:x>Math.PI&&(x-=m),v<-Math.PI?v+=m:v>Math.PI&&(v-=m),l.theta=x<=v?Math.max(x,Math.min(v,l.theta)):l.theta>(x+v)/2?Math.max(x,l.theta):Math.min(v,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=h,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),!0===n.enableDamping?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),t.setFromSpherical(l),t.applyQuaternion(o),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),u.set(0,0,0)),h=1,!!(p||b.distanceToSquared(n.object.position)>s||8*(1-j.dot(n.object.quaternion))>s)&&(n.dispatchEvent(a),b.copy(n.object.position),j.copy(n.object.quaternion),p=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",W),n.domElement.removeEventListener("pointerdown",V),n.domElement.removeEventListener("wheel",Y),n.domElement.removeEventListener("touchstart",X),n.domElement.removeEventListener("touchend",Z),n.domElement.removeEventListener("touchmove",U),n.domElement.ownerDocument.removeEventListener("pointermove",F),n.domElement.ownerDocument.removeEventListener("pointerup",H),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",B)};var n=this,a={type:"change"},i={type:"start"},o={type:"end"},r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},c=r.NONE,s=1e-6,l=new de.r,d=new de.r,h=1,u=new de.z,p=!1,b=new de.y,j=new de.y,m=new de.y,x=new de.y,v=new de.y,g=new de.y,O=new de.y,f=new de.y,y=new de.y;function E(){return Math.pow(.95,n.zoomSpeed)}function w(e){d.theta-=e}function T(e){d.phi-=e}var S=function(){var e=new de.z;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),u.add(e)}}(),P=function(){var e=new de.z;return function(t,a){!0===n.screenSpacePanning?e.setFromMatrixColumn(a,1):(e.setFromMatrixColumn(a,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),u.add(e)}}(),L=function(){var e=new de.z;return function(t,a){var i=n.domElement;if(n.object.isPerspectiveCamera){var o=n.object.position;e.copy(o).sub(n.target);var r=e.length();r*=Math.tan(n.object.fov/2*Math.PI/180),S(2*t*r/i.clientHeight,n.object.matrix),P(2*a*r/i.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(S(t*(n.object.right-n.object.left)/n.object.zoom/i.clientWidth,n.object.matrix),P(a*(n.object.top-n.object.bottom)/n.object.zoom/i.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function A(e){n.object.isPerspectiveCamera?h/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(e){n.object.isPerspectiveCamera?h*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(e){b.set(e.clientX,e.clientY)}function k(e){x.set(e.clientX,e.clientY)}function C(e){if(1==e.touches.length)b.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);b.set(t,n)}}function _(e){if(1==e.touches.length)x.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);x.set(t,n)}}function D(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+n*n);O.set(0,a)}function M(e){if(1==e.touches.length)j.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),a=.5*(e.touches[0].pageY+e.touches[1].pageY);j.set(t,a)}m.subVectors(j,b).multiplyScalar(n.rotateSpeed);var i=n.domElement;w(2*Math.PI*m.x/i.clientHeight),T(2*Math.PI*m.y/i.clientHeight),b.copy(j)}function I(e){if(1==e.touches.length)v.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),a=.5*(e.touches[0].pageY+e.touches[1].pageY);v.set(t,a)}g.subVectors(v,x).multiplyScalar(n.panSpeed),L(g.x,g.y),x.copy(v)}function z(e){var t=e.touches[0].pageX-e.touches[1].pageX,a=e.touches[0].pageY-e.touches[1].pageY,i=Math.sqrt(t*t+a*a);f.set(0,i),y.set(0,Math.pow(f.y/O.y,n.zoomSpeed)),A(y.y),O.copy(f)}function V(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){var t;switch(e.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus(),e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case de.i.DOLLY:if(!1===n.enableZoom)return;!function(e){O.set(e.clientX,e.clientY)}(e),c=r.DOLLY;break;case de.i.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;k(e),c=r.PAN}else{if(!1===n.enableRotate)return;R(e),c=r.ROTATE}break;case de.i.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;R(e),c=r.ROTATE}else{if(!1===n.enablePan)return;k(e),c=r.PAN}break;default:c=r.NONE}c!==r.NONE&&(n.domElement.ownerDocument.addEventListener("pointermove",F),n.domElement.ownerDocument.addEventListener("pointerup",H),n.dispatchEvent(i))}(e)}}function F(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){if(!1===n.enabled)return;switch(e.preventDefault(),c){case r.ROTATE:if(!1===n.enableRotate)return;!function(e){j.set(e.clientX,e.clientY),m.subVectors(j,b).multiplyScalar(n.rotateSpeed);var t=n.domElement;w(2*Math.PI*m.x/t.clientHeight),T(2*Math.PI*m.y/t.clientHeight),b.copy(j),n.update()}(e);break;case r.DOLLY:if(!1===n.enableZoom)return;!function(e){f.set(e.clientX,e.clientY),y.subVectors(f,O),y.y>0?A(E()):y.y<0&&N(E()),O.copy(f),n.update()}(e);break;case r.PAN:if(!1===n.enablePan)return;!function(e){v.set(e.clientX,e.clientY),g.subVectors(v,x).multiplyScalar(n.panSpeed),L(g.x,g.y),x.copy(v),n.update()}(e)}}(e)}}function H(e){switch(e.pointerType){case"mouse":case"pen":!function(e){if(n.domElement.ownerDocument.removeEventListener("pointermove",F),n.domElement.ownerDocument.removeEventListener("pointerup",H),!1===n.enabled)return;n.dispatchEvent(o),c=r.NONE}()}}function Y(e){!1===n.enabled||!1===n.enableZoom||c!==r.NONE&&c!==r.ROTATE||(e.preventDefault(),e.stopPropagation(),n.dispatchEvent(i),function(e){e.deltaY<0?N(E()):e.deltaY>0&&A(E()),n.update()}(e),n.dispatchEvent(o))}function B(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){var t=!1;switch(e.keyCode){case n.keys.UP:L(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:L(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:L(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:L(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function X(e){if(!1!==n.enabled){switch(e.preventDefault(),e.touches.length){case 1:switch(n.touches.ONE){case de.v.ROTATE:if(!1===n.enableRotate)return;C(e),c=r.TOUCH_ROTATE;break;case de.v.PAN:if(!1===n.enablePan)return;_(e),c=r.TOUCH_PAN;break;default:c=r.NONE}break;case 2:switch(n.touches.TWO){case de.v.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&D(e),n.enablePan&&_(e)}(e),c=r.TOUCH_DOLLY_PAN;break;case de.v.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&D(e),n.enableRotate&&C(e)}(e),c=r.TOUCH_DOLLY_ROTATE;break;default:c=r.NONE}break;default:c=r.NONE}c!==r.NONE&&n.dispatchEvent(i)}}function U(e){if(!1!==n.enabled)switch(e.preventDefault(),e.stopPropagation(),c){case r.TOUCH_ROTATE:if(!1===n.enableRotate)return;M(e),n.update();break;case r.TOUCH_PAN:if(!1===n.enablePan)return;I(e),n.update();break;case r.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&z(e),n.enablePan&&I(e)}(e),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&z(e),n.enableRotate&&M(e)}(e),n.update();break;default:c=r.NONE}}function Z(e){!1!==n.enabled&&(n.dispatchEvent(o),c=r.NONE)}function W(e){!1!==n.enabled&&e.preventDefault()}n.domElement.addEventListener("contextmenu",W),n.domElement.addEventListener("pointerdown",V),n.domElement.addEventListener("wheel",Y),n.domElement.addEventListener("touchstart",X),n.domElement.addEventListener("touchend",Z),n.domElement.addEventListener("touchmove",U),this.update()};(he.prototype=Object.create(de.g.prototype)).constructor=he;var ue=function(e,t){he.call(this,e,t),this.screenSpacePanning=!1,this.mouseButtons.LEFT=de.i.PAN,this.mouseButtons.RIGHT=de.i.ROTATE,this.touches.ONE=de.v.PAN,this.touches.TWO=de.v.DOLLY_ROTATE};(ue.prototype=Object.create(de.g.prototype)).constructor=ue;var pe,be=n(3),je=n(4),me=function(){function e(){Object(be.a)(this,e)}return Object(je.a)(e,null,[{key:"createButton",value:function(e,t){t&&console.error('THREE.VRButton: The "options" parameter has been removed. Please set the reference space type via renderer.xr.setReferenceSpaceType() instead.');var n=document.createElement("button");function a(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null,n.textContent="VR NOT SUPPORTED"}function i(e){e.style.position="absolute",e.style.bottom="20px",e.style.padding="12px 6px",e.style.border="1px solid #fff",e.style.borderRadius="4px",e.style.background="rgba(0,0,0,0.1)",e.style.color="#fff",e.style.font="normal 13px sans-serif",e.style.textAlign="center",e.style.opacity="0.5",e.style.outline="none",e.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",i(n),navigator.xr.isSessionSupported("immersive-vr").then((function(t){t?function(){var t=null;function a(a){a.addEventListener("end",i),e.xr.setSession(a),n.textContent="EXIT VR",t=a}function i(){t.removeEventListener("end",i),n.textContent="ENTER VR",t=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){null===t?navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]}).then(a):t.end()}}():a()})),n;var o=document.createElement("a");return!1===window.isSecureContext?(o.href=document.location.href.replace(/^http:/,"https:"),o.innerHTML="WEBXR NEEDS HTTPS"):(o.href="https://immersiveweb.dev/",o.innerHTML="WEBXR NOT AVAILABLE"),o.style.left="calc(50% - 90px)",o.style.width="180px",o.style.textDecoration="none",i(o),o}}]),e}(),xe=function(e,t){var n;if(void 0!==e.objects){for(var a=0;a<(null===(i=e.objects)||void 0===i?void 0:i.length);a++){var i,o=e.objects[a];if(console.log("".concat(o.tag," : ").concat(t.tag)),o.tag===t.tag)return}null===(n=e.objects)||void 0===n||n.push(t)}},ve=function(e){console.log("ThreeBaseScene");var t=i.a.useContext(ne),n=void 0===t.lookAt?new de.z(0,0,0):new de.z(t.lookAt.x,t.lookAt.y,t.lookAt.z),o=i.a.useState(null),c=Object(u.a)(o,2),s=c[0],l=c[1],d=i.a.useState(new de.p),h=Object(u.a)(d,2),p=h[0],b=(h[1],i.a.useState(new de.m(45,t.width/t.height,.1,1e3))),j=Object(u.a)(b,2),m=j[0],x=(j[1],i.a.useState(n)),v=Object(u.a)(x,2),g=v[0],O=(v[1],i.a.useState(new de.A({antialias:!0}))),f=Object(u.a)(O,2),y=f[0],E=(f[1],i.a.useState(void 0===t.bgColor?new de.e("#b4bad2"):t.bgColor)),w=Object(u.a)(E,2),T=w[0],S=(w[1],i.a.useState(new de.d)),P=Object(u.a)(S,2),L=P[0],A=(P[1],i.a.useState(0)),N=Object(u.a)(A,2),R=N[0],k=N[1],C=i.a.useState(null),_=Object(u.a)(C,2),D=(_[0],_[1]);m.position.x=t.cameraPos.x,m.position.y=t.cameraPos.y,m.position.z=t.cameraPos.z,m.lookAt(new de.z(g.x,g.y,g.z)),y.setSize(t.width,t.height),y.setClearColor(T),y.shadowMap.enabled=!0;return Object(a.useEffect)((function(){if(console.log("useeffect"),s){s.appendChild(y.domElement);var e=new he(m,s);e.target.set(0,0,0),e.update(),D(e)}y.setAnimationLoop((function(){var e;k(R+1),e=L.getDelta(),t.onUpdate&&t.onUpdate(e),y.render(p,m)})),r.a.render(Object(Z.jsx)("div",{id:"vr_button"}),document.body.appendChild(me.createButton(y)))}),[s,L,y,p,m]),Object(a.useEffect)((function(){console.log("useeffect2"),function(){p.remove.apply(p,p.children),console.log(t.objects),t.objects&&t.objects.map((function(e){return p.add(e.obj)}));var e=new de.a(16777215,.5);p.add(e);var n=new de.s(16777215,2,100,Math.PI/4,1);n.position.set(2,7,2),n.castShadow=!0,p.add(n)}()}),[t.objects]),Object(Z.jsxs)("div",{children:[Object(Z.jsx)("div",{style:{width:t.width,height:t.height},ref:function(e){l(e)}}),Object(Z.jsx)("div",{id:"vr_button"})]})},ge=function(){function e(){Object(be.a)(this,e)}return Object(je.a)(e,null,[{key:"createSphere",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:2284834,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:de.h,c=arguments.length>7?arguments[7]:void 0,s=a,l=new de.q(s,20,20),d={color:o,opacity:i,transparent:!0,side:r,depthWrite:!1};void 0!==c&&(d.map=(new de.w).load(c));var h=new de.k(d),u=new de.j(l,h);return u.position.x=e,u.position.y=t,u.position.z=n,u.castShadow=!0,u}},{key:"createBox",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:16711680,s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:de.h,l=arguments.length>9?arguments[9]:void 0,d={color:c,opacity:r,transparent:!0,side:s,depthWrite:!1};void 0!==l&&(d.map=(new de.w).load(l));var h=new de.j(new de.c(a,i,o),new de.l(d));return h.receiveShadow=!0,h.position.set(e,t,n),h}},{key:"createPlane",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-.5*Math.PI,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:16777215,s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:3,l=arguments.length>9&&void 0!==arguments[9]?arguments[9]:3,d=arguments.length>10&&void 0!==arguments[10]?arguments[10]:de.f,h=arguments.length>11?arguments[11]:void 0,u=new de.n(l,s,1,1),p={color:c,opacity:r,transparent:!0,side:d};void 0!==h&&(p.map=(new de.w).load(h));var b=new de.l(p),j=new de.j(u,b);return j.receiveShadow=!0,j.castShadow=!0,j.rotation.set(a,i,o),j.position.set(e,t,n),j}},{key:"createArrow",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:-Math.PI,s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,l=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,d=arguments.length>10&&void 0!==arguments[10]?arguments[10]:.8,h=arguments.length>11&&void 0!==arguments[11]?arguments[11]:65280,u=arguments.length>12&&void 0!==arguments[12]?arguments[12]:.3,p=arguments.length>13&&void 0!==arguments[13]?arguments[13]:.3,b=new de.z(i,o,r),j=new de.z(t,n,a),m=new de.b(b,j,d,h,u,p);return m.name=e,m.rotation.x=c,m.rotation.y=s,m.rotation.z=l,m}},{key:"createSprite",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.2,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:238,o=new de.u({color:i}),r=new de.t(o);return r.position.x=e,r.position.y=t,r.position.z=n,r.scale.x=a,r.scale.y=a,r.scale.z=a,r}},{key:"createTorusKnot",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.4,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:64,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:8,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:2,s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:3,l=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,d=arguments.length>10&&void 0!==arguments[10]?arguments[10]:6724095,h=arguments.length>11&&void 0!==arguments[11]?arguments[11]:.5,u=arguments.length>12&&void 0!==arguments[12]?arguments[12]:de.h,p=arguments.length>13?arguments[13]:void 0,b=new de.x(a,i,o,r,c,s),j={color:d,opacity:l,transparent:!0,side:u,roughness:h};void 0!==p&&(j.map=(new de.w).load(p));var m=new de.l(j),x=new de.j(b,m);return x.receiveShadow=!0,x.castShadow=!0,x.position.set(e,t,n),x}}]),e}(),Oe=function(e){var t=i.a.useContext(ne);return xe(t,{tag:"x_axis",obj:ge.createArrow("x_axis",0,0,0,1,0,0,.5*Math.PI,0,0,6,16711680,.5,.5),objType:"arrow"}),xe(t,{tag:"y_axis",obj:ge.createArrow("y_axis",0,0,0,0,1,0,0,.5*Math.PI,0,6,65280,.6,.6),objType:"arrow"}),xe(t,{tag:"z_axis",obj:ge.createArrow("z_axis",0,0,0,0,0,1,0,0,.5*Math.PI,6,255,.6,.6),objType:"arrow"}),Object(Z.jsx)("div",{children:Object(Z.jsx)(ve,{})})},fe=function(e){var t=i.a.useContext(ne);return xe(t,{tag:"box1",obj:ge.createTorusKnot(0,.2,0),objType:"box"}),xe(t,{tag:"plane1",obj:ge.createPlane(0,0,0,-.5*Math.PI,0,0,.6,16777215,10,10,de.f,"https://threejsfundamentals.org/threejs/resources/images/wall.jpg"),objType:"plane"}),Object(Z.jsx)("div",{children:Object(Z.jsx)(Oe,{})})},ye=n(5),Ee=n(6),we=n(74),Te=n(142),Se=(n(138).a.div(pe||(pe=Object(we.a)(["\n  // position: fixed;\n  top: 0;\n  right: 0;\n  width: 40%;\n"]))),function(e){Object(ye.a)(n,e);var t=Object(Ee.a)(n);function n(e){var a;return Object(be.a)(this,n),(a=t.call(this,e))._data=null,a._data={labels:["Scatter"],datasets:[{label:"scatter",fill:!0,backgroundColor:"rgba(75,192,192,0.4)",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:2,pointHoverRadius:1,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:5,pointHitRadius:5,data:[{x:0,y:0}]}]},a}return Object(je.a)(n,[{key:"componentDidMount",value:function(){this._data.datasets[0].data=[{x:0,y:0},{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:4}],this.forceUpdate()}},{key:"setData",value:function(e){this._data.datasets[0].data=e,this.forceUpdate()}},{key:"render",value:function(){return Object(Z.jsx)(Te.a,{data:this._data,redraw:!0})}}]),n}(i.a.Component)),Pe=Se,Le=["SCATTER_2D","SCATTER_3D","LINE_2D","LINE_3D","HISTOGRAM"],Ae=function(e,t,n,a,i,o,r,c,s,l){if(0===t)return Object(Z.jsx)(j.a,{container:!0,spacing:0,direction:"row",children:Object(Z.jsxs)(j.a,{item:!0,xs:4,children:[Object(Z.jsx)(g.a,{htmlFor:"chart-type-select",children:"Chart Type"}),Object(Z.jsxs)(m.a,{onChange:function(e){a(e.target.value)},label:"chart_type",value:n,variant:"outlined",style:{height:"30px",fontSize:"0.7em"},children:[Object(Z.jsx)(x.a,{value:"",children:Object(Z.jsx)("em",{children:"None"})}),Le.map((function(e){return Object(Z.jsx)(x.a,{value:e,children:e})}))]})]})});var d=12/(t+1),h=function(t,n,a){return Object(Z.jsx)(m.a,{onChange:function(e){a(e.target.value)},label:t,value:n,variant:"outlined",style:{height:"30px"},children:e.map((function(e){return Object(Z.jsx)(x.a,{value:e,children:e})}))})};return Object(Z.jsxs)(j.a,{container:!0,spacing:0,direction:"row",children:[Object(Z.jsxs)(j.a,{item:!0,xs:d,children:[Object(Z.jsx)(g.a,{htmlFor:"chart-type-select",children:"Chart Type"}),Object(Z.jsxs)(m.a,{onChange:function(e){a(e.target.value)},label:"chart_type",value:n,variant:"outlined",style:{height:"30px"},children:[Object(Z.jsx)(x.a,{value:"",children:Object(Z.jsx)("em",{children:"None"})}),Le.map((function(e){return Object(Z.jsx)(x.a,{value:e,children:e})}))]})]}),Object(Z.jsxs)(j.a,{item:!0,xs:d,children:[Object(Z.jsx)(g.a,{htmlFor:"chart-type-select",children:"X"}),h("variable_x",i,c)]}),Object(Z.jsxs)(j.a,{item:!0,xs:d,children:[Object(Z.jsx)(g.a,{htmlFor:"chart-type-select",children:"Y"}),h("variable_y",o,s)]}),function(){if(3===t)return Object(Z.jsxs)(j.a,{item:!0,xs:d,children:[Object(Z.jsx)(g.a,{htmlFor:"chart-type-select",children:"Z"}),h("variable_z",r,l)]})}()]})},Ne=function(e){var t=Object(a.useState)(null),n=Object(u.a)(t,2),i=n[0],o=n[1],r=Object(a.useState)(e.variables[0]),c=Object(u.a)(r,2),s=c[0],l=c[1],d=Object(a.useState)(e.variables[0]),h=Object(u.a)(d,2),p=h[0],b=h[1],j=Object(a.useState)(e.variables[0]),m=Object(u.a)(j,2),x=m[0],v=m[1],g=function(e){return null===e||""===e?0:"LINE_3D"===e||"SCATTER_3D"===e?3:2}(i);return Object(Z.jsxs)("div",{children:[Ae(e.variables,g,i,o,s,p,x,l,b,v),Object(Z.jsx)(Pe,{})]})},Re=[{category:"GENERAL",name:"\u91cd\u529b\u52a0\u901f\u5ea6",id:"gravitational_acceleration",parameterType:"SLIDER_FLOAT",defaultValue:9.8,minValue:0,maxValue:100},{category:"GENERAL",name:"\u521d\u671f\u4f4d\u7f6e(\u9ad8\u3055)",id:"initial_height",parameterType:"NUMBER_IMPUT",defaultValue:30},{category:"GENERAL",name:"\u5730\u9762\u306e\u9ad8\u3055",id:"ground_height",parameterType:"SLIDER_FLOAT",defaultValue:0,minValue:-40,maxValue:40},{category:"GENERAL",name:"\u30dc\u30fc\u30eb\u306e\u534a\u5f84",id:"ball_radius",parameterType:"SLIDER_FLOAT",defaultValue:5,minValue:.1,maxValue:50},{category:"GENERAL",name:"\u5730\u9762\u3068\u306e\u53cd\u767a\u4fc2\u6570",id:"restitution_coefficient",parameterType:"SLIDER_FLOAT",defaultValue:.8,minValue:0,maxValue:1},{category:"GENERAL",name:"\u7a7a\u6c17\u62b5\u6297\u4fc2\u6570",id:"air_resistance_coefficient",parameterType:"SLIDER_FLOAT",defaultValue:0,minValue:0,maxValue:10}],ke=function(e){var t=i.a.useState(["CoordinateAxisScene","TestBoxPlaneScene","Scene3"]),n=Object(u.a)(t,2),a=n[0],o=(n[1],i.a.useState("TestBoxPlaneScene")),r=Object(u.a)(o,2),c=r[0],s=r[1],l=i.a.useState([]),d=Object(u.a)(l,2),h=d[0],f=d[1];return Object(Z.jsxs)("div",{children:[Object(Z.jsx)(K,{}),Object(Z.jsx)(p.a,{maxWidth:"xl",children:Object(Z.jsxs)(j.a,{container:!0,spacing:2,direction:"row",alignItems:"center",children:[Object(Z.jsxs)(j.a,{item:!0,xs:12,md:10,lg:10,style:{padding:"0px 0px 0px 60px"},children:[Object(Z.jsx)(g.a,{htmlFor:"scene-select",children:"SCENE"}),Object(Z.jsxs)(m.a,{onChange:function(e){f([]),s(e.target.value)},label:"Scene",value:c,variant:"outlined",children:[Object(Z.jsx)(x.a,{value:"",children:Object(Z.jsx)("em",{children:"None"})}),Object(Z.jsx)(v.a,{style:{color:"#0000FF"},children:"--Frontend Calculated--"}),a.map((function(e){return Object(Z.jsx)(x.a,{value:e,children:e})})),Object(Z.jsx)(v.a,{style:{color:"#0000FF"},children:"--Backend Calculated--"})]})]}),Object(Z.jsxs)(j.a,{item:!0,xs:12,md:2,lg:2,style:{padding:"0px 60px 0px 0px"},children:[Object(Z.jsx)(O.a,{variant:"contained",children:"Run"}),Object(Z.jsx)(O.a,{variant:"contained",children:"Reset"})]}),Object(Z.jsx)(j.a,{item:!0,xs:12,md:8,lg:8,children:Object(Z.jsxs)(b.a,{style:{padding:"10px 50px 30px",margin:"0px 0px 0px 40px",height:550},children:["3DViewer / ".concat(c),Object(Z.jsx)(ne.Provider,{value:{width:.55*window.innerWidth,height:.6*window.innerHeight,cameraPos:{x:6,y:6,z:6},objects:h},children:"CoordinateAxisScene"===c?Object(Z.jsx)(Oe,{}):"TestBoxPlaneScene"===c?Object(Z.jsx)(fe,{}):void 0})]})}),Object(Z.jsx)(j.a,{item:!0,xs:12,md:4,lg:4,children:Object(Z.jsx)(b.a,{style:{padding:"5px 5px 5px",margin:"0px 40px 0px 0px",height:550},children:Object(Z.jsx)(ae.Provider,{value:{params:Re},children:Object(Z.jsx)(le,{})})})}),Object(Z.jsx)(j.a,{item:!0,xs:4,children:Object(Z.jsx)(b.a,{style:{padding:"10px 10px 10px",margin:"0px 0px 0px 40px",height:300},children:Object(Z.jsx)(Ne,{data:0,variables:["time","pos_x"]})})}),Object(Z.jsx)(j.a,{item:!0,xs:4,children:Object(Z.jsxs)(b.a,{style:{padding:"10px 50px 10px",margin:"0px 0px 0px 0px",height:300},children:["Chart",Object(Z.jsx)(Se,{})]})}),Object(Z.jsx)(j.a,{item:!0,xs:4,children:Object(Z.jsx)(b.a,{style:{padding:"10px 10px 10px",margin:"0px 40px 0px 0px",height:300},children:Object(Z.jsx)(Ne,{data:0,variables:["time","pos_x"]})})})]})})]})};var Ce=function(){return Object(Z.jsx)("div",{className:"App",children:Object(Z.jsx)(c.a,{theme:h,children:Object(Z.jsxs)(s.a,{basename:"",children:[Object(Z.jsx)(l.c,{children:Object(Z.jsx)(l.a,{path:"/",component:ke,exact:!0})}),Object(Z.jsx)(l.c,{children:Object(Z.jsx)(l.a,{path:"/physical_simulation",component:ke,exact:!0})})]})})})},_e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,284)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),o(e),r(e)}))};r.a.render(Object(Z.jsx)(i.a.StrictMode,{children:Object(Z.jsx)(Ce,{})}),document.getElementById("root")),_e()}},[[179,1,2]]]);
//# sourceMappingURL=main.0eea1ea4.chunk.js.map