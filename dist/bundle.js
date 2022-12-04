var MSPT;(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);class t extends THREE.EventDispatcher{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new THREE.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:THREE.MOUSE.ROTATE,MIDDLE:THREE.MOUSE.DOLLY,RIGHT:THREE.MOUSE.PAN},this.touches={ONE:THREE.TOUCH.ROTATE,TWO:THREE.TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",z),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(_changeEvent),n.update(),o.NONE},this.update=function(){const t=new THREE.Vector3,d=(new THREE.Quaternion).setFromUnitVectors(e.up,new THREE.Vector3(0,1,0)),u=d.clone().invert(),p=new THREE.Vector3,E=new THREE.Quaternion;Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(d),r.setFromVector3(t),n.autoRotate&&a===o.NONE&&O(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(r.theta+=c.theta*n.dampingFactor,r.phi+=c.phi*n.dampingFactor):(r.theta+=c.theta,r.phi+=c.phi);let h=n.minAzimuthAngle,b=n.maxAzimuthAngle;return isFinite(h)&&isFinite(b)&&(h<-Math.PI||Math.PI,b<-Math.PI||Math.PI,r.theta=h<=b?Math.max(h,Math.min(b,r.theta)):r.theta>(h+b)/2?Math.max(h,r.theta):Math.min(b,r.theta)),r.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=s,r.radius=Math.max(n.minDistance,Math.min(n.maxDistance,r.radius)),!0===n.enableDamping?n.target.addScaledVector(l,n.dampingFactor):n.target.add(l),t.setFromSpherical(r),t.applyQuaternion(u),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,l.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),l.set(0,0,0)),!!(m||p.distanceToSquared(n.object.position)>i||8*(1-E.dot(n.object.quaternion))>i)&&(n.dispatchEvent(_changeEvent),p.copy(n.object.position),E.copy(n.object.quaternion),!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",F),n.domElement.removeEventListener("pointerdown",D),n.domElement.removeEventListener("pointercancel",V),n.domElement.removeEventListener("wheel",X),n.domElement.removeEventListener("pointermove",I),n.domElement.removeEventListener("pointerup",U),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",z)};const n=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const i=1e-6,r=new THREE.Spherical,c=new THREE.Spherical;let s=1;const l=new THREE.Vector3;let m=!1;const d=new THREE.Vector2,u=new THREE.Vector2,p=new THREE.Vector2,E=new THREE.Vector2,h=new THREE.Vector2,b=new THREE.Vector2,y=new THREE.Vector2,T=new THREE.Vector2,f=new THREE.Vector2,g=[],v={};function R(){return Math.pow(.95,n.zoomSpeed)}function O(e){c.theta-=e}function w(e){c.phi-=e}const H=function(){const e=new THREE.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),l.add(e)}}(),P=function(){const e=new THREE.Vector3;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),l.add(e)}}(),A=function(){const e=new THREE.Vector3;return function(t,o){const a=n.domElement;if(n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let r=e.length();Math.tan(n.object.fov/2*Math.PI/180),H(2*t*r/a.clientHeight,n.object.matrix),P(2*o*r/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),P(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function L(e){n.object.isPerspectiveCamera||(n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix()):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1))}function j(e){n.object.isPerspectiveCamera||(n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix()):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1))}function S(e){d.set(e.clientX,e.clientY)}function x(e){E.set(e.clientX,e.clientY)}function k(){if(1===g.length)d.set(g[0].pageX,g[0].pageY);else{const e=.5*(g[0].pageX+g[1].pageX),t=.5*(g[0].pageY+g[1].pageY);d.set(e,t)}}function N(){if(1===g.length)E.set(g[0].pageX,g[0].pageY);else{const e=.5*(g[0].pageX+g[1].pageX),t=.5*(g[0].pageY+g[1].pageY);E.set(e,t)}}function M(){const e=g[0].pageX-g[1].pageX,t=g[0].pageY-g[1].pageY,n=Math.sqrt(e*e+t*t);y.set(0,n)}function Y(e){if(1==g.length)u.set(e.pageX,e.pageY);else{const t=K(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);u.set(n,o)}p.subVectors(u,d).multiplyScalar(n.rotateSpeed);const t=n.domElement;O(2*Math.PI*p.x/t.clientHeight),w(2*Math.PI*p.y/t.clientHeight),d.copy(u)}function C(e){if(1===g.length)h.set(e.pageX,e.pageY);else{const t=K(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);h.set(n,o)}b.subVectors(h,E).multiplyScalar(n.panSpeed),A(b.x,b.y),E.copy(h)}function _(e){const t=K(e),o=e.pageX-t.x,a=e.pageY-t.y,i=Math.sqrt(o*o+a*a);T.set(0,i),f.set(0,Math.pow(T.y/y.y,n.zoomSpeed)),L(f.y),y.copy(T)}function D(e){!1!==n.enabled&&(0===g.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",I),n.domElement.addEventListener("pointerup",U)),function(e){g.push(e)}(e),"touch"===e.pointerType?function(e){switch(Z(e),g.length){case 1:switch(n.touches.ONE){case THREE.TOUCH.ROTATE:if(!1===n.enableRotate)return;k(),o.TOUCH_ROTATE;break;case THREE.TOUCH.PAN:if(!1===n.enablePan)return;N(),o.TOUCH_PAN;break;default:o.NONE}break;case 2:switch(n.touches.TWO){case THREE.TOUCH.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&M(),n.enablePan&&N(),o.TOUCH_DOLLY_PAN;break;case THREE.TOUCH.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&M(),n.enableRotate&&k(),o.TOUCH_DOLLY_ROTATE;break;default:o.NONE}break;default:o.NONE}a!==o.NONE&&n.dispatchEvent(_startEvent)}(e):function(e){switch(e.button){case 0:n.mouseButtons.LEFT;break;case 1:n.mouseButtons.MIDDLE;break;case 2:n.mouseButtons.RIGHT}switch(void 0){case THREE.MOUSE.DOLLY:if(!1===n.enableZoom)return;!function(e){y.set(e.clientX,e.clientY)}(e),o.DOLLY;break;case THREE.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;x(e),o.PAN}else{if(!1===n.enableRotate)return;S(e),o.ROTATE}break;case THREE.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;S(e),o.ROTATE}else{if(!1===n.enablePan)return;x(e),o.PAN}break;default:o.NONE}a!==o.NONE&&n.dispatchEvent(_startEvent)}(e))}function I(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(Z(e),a){case o.TOUCH_ROTATE:if(!1===n.enableRotate)return;Y(e),n.update();break;case o.TOUCH_PAN:if(!1===n.enablePan)return;C(e),n.update();break;case o.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&_(e),n.enablePan&&C(e)}(e),n.update();break;case o.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&_(e),n.enableRotate&&Y(e)}(e),n.update();break;default:o.NONE}}(e):function(e){switch(a){case o.ROTATE:if(!1===n.enableRotate)return;!function(e){u.set(e.clientX,e.clientY),p.subVectors(u,d).multiplyScalar(n.rotateSpeed);const t=n.domElement;O(2*Math.PI*p.x/t.clientHeight),w(2*Math.PI*p.y/t.clientHeight),d.copy(u),n.update()}(e);break;case o.DOLLY:if(!1===n.enableZoom)return;!function(e){T.set(e.clientX,e.clientY),f.subVectors(T,y),f.y>0?L(R()):f.y<0&&j(R()),y.copy(T),n.update()}(e);break;case o.PAN:if(!1===n.enablePan)return;!function(e){h.set(e.clientX,e.clientY),b.subVectors(h,E).multiplyScalar(n.panSpeed),A(b.x,b.y),E.copy(h),n.update()}(e)}}(e))}function U(e){q(e),0===g.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",I),n.domElement.removeEventListener("pointerup",U)),n.dispatchEvent(_endEvent),o.NONE}function V(e){q(e)}function X(e){!1!==n.enabled&&!1!==n.enableZoom&&a===o.NONE&&(e.preventDefault(),n.dispatchEvent(_startEvent),function(e){e.deltaY<0?j(R()):e.deltaY>0&&L(R()),n.update()}(e),n.dispatchEvent(_endEvent))}function z(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){switch(e.code){case n.keys.UP:A(0,n.keyPanSpeed);break;case n.keys.BOTTOM:A(0,-n.keyPanSpeed);break;case n.keys.LEFT:A(n.keyPanSpeed,0);break;case n.keys.RIGHT:A(-n.keyPanSpeed,0)}}(e)}function F(e){!1!==n.enabled&&e.preventDefault()}function q(e){delete v[e.pointerId];for(let t=0;t<g.length;t++)if(g[t].pointerId==e.pointerId)return void g.splice(t,1)}function Z(e){let t=v[e.pointerId];void 0===t&&(new Vector2,v[e.pointerId]=t),t.set(e.pageX,e.pageY)}function K(e){const t=e.pointerId===g[0].pointerId?g[1]:g[0];return v[t.pointerId]}n.domElement.addEventListener("contextmenu",F),n.domElement.addEventListener("pointerdown",D),n.domElement.addEventListener("pointercancel",V),n.domElement.addEventListener("wheel",X,{passive:!1}),this.update()}}let n={scene:void 0,camera:void 0,renderer:void 0,controls:void 0,model:void 0,joystick:{isActivate:!1}};const o=e=>{let t=document.querySelector("#joystick"),o=document.querySelector("#joystick-control");t.classList.remove("d-none"),o.classList.remove("d-none"),n.joystick.isActivate=!0,t.style.top=e.offsetY-12+"px",t.style.left=e.offsetX-12+"px",o.style.top=e.offsetY-12+"px",o.style.left=e.offsetX-12+"px"},a=e=>{let t=document.querySelector("#joystick"),o=document.querySelector("#joystick-control"),a=document.querySelector("#joystick-line");n.joystick.isActivate=!1,t.classList.add("d-none"),o.classList.add("d-none"),a.classList.add("d-none")},i=e=>{if(n.joystick.isActivate){let t=document.querySelector("#joystick-control"),n=document.querySelector("#joystick"),o=document.querySelector("#joystick-line");o.classList.remove("d-none");let a={x:e.clientX-9,y:e.clientY-9},i={x:Number(n.style.left.split("px")[0])+12,y:Number(n.style.top.split("px")[0])+12};t.style.top=`${a.y}px`,t.style.left=`${a.x}px`,o.querySelector("line").setAttribute("x1",e.clientX),o.querySelector("line").setAttribute("y1",e.clientY),o.querySelector("line").setAttribute("x2",i.x),o.querySelector("line").setAttribute("y2",i.y)}},r=(e,t)=>{if(n.joystick.isActivate){let n=e.x-t.x,o=e.y-t.y;return Math.atan2(o,n)}};document.addEventListener("mousedown",o),document.addEventListener("mouseup",a),document.addEventListener("mousemove",i),(()=>{n.scene=new THREE.Scene,n.scene.background=new THREE.Color(10526880),n.scene.fog=new THREE.Fog(10526880,10,50),new THREE.Clock,n.camera=new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight,1,100),n.camera.position.set(0,3,7),n.scene.add(n.camera),(new THREE.GLTFLoader).load("/gltf/ball.glb",(e=>{n.model=e.scene,n.model.position.set(0,0,0),n.scene.add(n.model),n.model.add(n.camera),console.log(n.model)})),n.renderer=new THREE.WebGLRenderer,n.renderer.setSize(window.innerWidth,window.innerHeight),document.querySelector("#model").appendChild(n.renderer.domElement);const e=new THREE.DirectionalLight(16246239);e.position.set(3,1e3,2500),e.castShadow=!0,e.shadow.camera.top=2,e.shadow.camera.bottom=-2,e.shadow.camera.left=-2,e.shadow.camera.right=2,e.shadow.camera.near=.06,e.shadow.camera.far=4e3,n.scene.add(e);const t=new THREE.HemisphereLight(7368816,4473924);t.position.set(0,120,0),n.scene.add(t);const o=new THREE.Mesh(new THREE.PlaneGeometry(100,100),new THREE.MeshPhongMaterial({color:10066329,depthWrite:!0}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.scene.add(o),function e(){requestAnimationFrame(e);let t=document.querySelector("#joystick"),o=document.querySelector("#joystick-control");if(n.joystick.isActivate){let e={x:Number(o.style.left.split("px")[0]),y:Number(o.style.top.split("px")[0])},a={x:Number(t.style.left.split("px")[0]),y:Number(t.style.top.split("px")[0])},i=r(e,a);n.model.rotation.y=-i,n.model.translateZ(-.1)}n.renderer.render(n.scene,n.camera)}()})(),MSPT=e})();